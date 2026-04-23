import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { usePagination } from "../../hooks/usePagination";
import { EmptyState } from "./EmptyState";

export interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (row: T) => React.ReactNode;
  sortable?: boolean;
  className?: string;
  align?: "left" | "right" | "center";
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  searchable?: boolean;
  searchPlaceholder?: string;
  searchKeys?: (keyof T)[];
  pageSize?: number;
  selectable?: boolean;
  onSelectionChange?: (ids: string[]) => void;
  "data-ocid"?: string;
}

type SortDir = "asc" | "desc" | null;

export function DataTable<T extends { id: string }>({
  data,
  columns,
  loading = false,
  searchable = true,
  searchPlaceholder = "Search…",
  searchKeys = [],
  pageSize = 10,
  selectable = false,
  onSelectionChange,
  "data-ocid": dataOcid,
}: DataTableProps<T>) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>(null);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const debouncedSearch = useDebounce(search, 250);

  const filtered = useMemo(() => {
    let rows = [...data];
    if (debouncedSearch && searchKeys.length > 0) {
      const q = debouncedSearch.toLowerCase();
      rows = rows.filter((row) =>
        searchKeys.some((k) =>
          String((row as Record<keyof T, unknown>)[k] ?? "")
            .toLowerCase()
            .includes(q),
        ),
      );
    }
    if (sortKey && sortDir) {
      rows.sort((a, b) => {
        const ar = a as Record<string, unknown>;
        const br = b as Record<string, unknown>;
        const av = String(ar[sortKey] ?? "");
        const bv = String(br[sortKey] ?? "");
        return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
      });
    }
    return rows;
  }, [data, debouncedSearch, searchKeys, sortKey, sortDir]);

  const pagination = usePagination({
    totalItems: filtered.length,
    itemsPerPage: pageSize,
  });

  const pageData = filtered.slice(pagination.startIndex, pagination.endIndex);
  const pageIds = pageData.map((r) => r.id);
  const allPageSelected =
    pageIds.length > 0 && pageIds.every((id) => selectedIds.has(id));
  const somePageSelected = pageIds.some((id) => selectedIds.has(id));

  const toggleRow = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedIds(next);
    onSelectionChange?.(Array.from(next));
  };

  const toggleAll = () => {
    const next = new Set(selectedIds);
    if (allPageSelected) {
      for (const id of pageIds) next.delete(id);
    } else {
      for (const id of pageIds) next.add(id);
    }
    setSelectedIds(next);
    onSelectionChange?.(Array.from(next));
  };

  const handleSort = (col: Column<T>) => {
    if (!col.sortable) return;
    const k = String(col.key);
    if (sortKey === k) {
      setSortDir((d) => (d === "asc" ? "desc" : d === "desc" ? null : "asc"));
      if (sortDir === "desc") setSortKey(null);
    } else {
      setSortKey(k);
      setSortDir("asc");
    }
  };

  if (loading) {
    return (
      <div className="space-y-2" data-ocid={dataOcid}>
        <Skeleton className="h-9 w-full sm:w-48" />
        {["r1", "r2", "r3", "r4", "r5"].map((k) => (
          <Skeleton key={k} className="h-12 w-full rounded-lg" />
        ))}
      </div>
    );
  }

  const showSelectable = selectable && !!onSelectionChange;

  return (
    <div data-ocid={dataOcid} className="space-y-3">
      {searchable && (
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            data-ocid={`${dataOcid}.search_input`}
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              pagination.goToPage(1);
            }}
            className="pl-9 h-9 rounded-xl text-sm w-full"
          />
        </div>
      )}

      <div className="rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto w-full scrollbar-thin">
          <table className="w-full text-sm" style={{ minWidth: "500px" }}>
            <thead className="bg-muted/30 border-b border-border">
              <tr>
                {showSelectable && (
                  <th className="px-2 sm:px-3 py-3 w-10">
                    <Checkbox
                      checked={allPageSelected}
                      data-state={
                        somePageSelected && !allPageSelected
                          ? "indeterminate"
                          : undefined
                      }
                      onCheckedChange={toggleAll}
                      aria-label="Select all rows on this page"
                      data-ocid={`${dataOcid}.select_all`}
                      className="rounded"
                    />
                  </th>
                )}
                {columns.map((col) => (
                  <th
                    key={String(col.key)}
                    className={cn(
                      "px-2 sm:px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide whitespace-nowrap",
                      col.sortable && "cursor-pointer hover:text-foreground",
                      col.align === "right" && "text-right",
                      col.align === "center" && "text-center",
                      col.className,
                    )}
                    onClick={() => handleSort(col)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") handleSort(col);
                    }}
                    tabIndex={col.sortable ? 0 : undefined}
                    role={col.sortable ? "button" : undefined}
                    aria-sort={
                      sortKey === String(col.key)
                        ? sortDir === "asc"
                          ? "ascending"
                          : "descending"
                        : undefined
                    }
                  >
                    <div
                      className={cn(
                        "flex items-center gap-1",
                        col.align === "right" && "justify-end",
                        col.align === "center" && "justify-center",
                      )}
                    >
                      {col.header}
                      {col.sortable && (
                        <span className="flex flex-col -space-y-1">
                          <ChevronUp
                            className={cn(
                              "w-2.5 h-2.5",
                              sortKey === String(col.key) && sortDir === "asc"
                                ? "text-primary"
                                : "text-muted-foreground/40",
                            )}
                          />
                          <ChevronDown
                            className={cn(
                              "w-2.5 h-2.5",
                              sortKey === String(col.key) && sortDir === "desc"
                                ? "text-primary"
                                : "text-muted-foreground/40",
                            )}
                          />
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {pageData.length === 0 ? (
                <tr>
                  <td colSpan={columns.length + (showSelectable ? 1 : 0)}>
                    <EmptyState
                      title="No results found"
                      description="Try adjusting your search or filters."
                      data-ocid={`${dataOcid}.empty_state`}
                    />
                  </td>
                </tr>
              ) : (
                pageData.map((row, i) => {
                  const isSelected = selectedIds.has(row.id);
                  const rowIndex = pagination.startIndex + i + 1;
                  return (
                    <tr
                      key={`row-${pagination.startIndex + i}`}
                      data-ocid={`${dataOcid}.row.${rowIndex}`}
                      className={cn(
                        "hover:bg-muted/20 transition-smooth",
                        isSelected && "bg-primary/5",
                      )}
                    >
                      {showSelectable && (
                        <td className="px-2 sm:px-3 py-2 sm:py-3 w-10">
                          <Checkbox
                            checked={isSelected}
                            onCheckedChange={() => toggleRow(row.id)}
                            aria-label={`Select row ${rowIndex}`}
                            data-ocid={`${dataOcid}.checkbox.${rowIndex}`}
                            className="rounded"
                          />
                        </td>
                      )}
                      {columns.map((col) => (
                        <td
                          key={String(col.key)}
                          className={cn(
                            "px-2 sm:px-4 py-2 sm:py-3 text-sm text-foreground",
                            col.align === "right" && "text-right",
                            col.align === "center" && "text-center",
                            col.className,
                          )}
                        >
                          {col.render
                            ? col.render(row)
                            : String(
                                (row as Record<keyof T, unknown>)[
                                  col.key as keyof T
                                ] ?? "—",
                              )}
                        </td>
                      ))}
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex items-center justify-between text-xs text-muted-foreground flex-wrap gap-2">
          <span>
            Showing {pagination.startIndex + 1}–{pagination.endIndex} of{" "}
            {filtered.length}
          </span>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="w-7 h-7 rounded-lg"
              disabled={!pagination.canGoPrev}
              onClick={pagination.prevPage}
              data-ocid={`${dataOcid}.pagination_prev`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </Button>
            <span className="px-2">
              Page {pagination.currentPage} / {pagination.totalPages}
            </span>
            <Button
              variant="outline"
              size="icon"
              className="w-7 h-7 rounded-lg"
              disabled={!pagination.canGoNext}
              onClick={pagination.nextPage}
              data-ocid={`${dataOcid}.pagination_next`}
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
