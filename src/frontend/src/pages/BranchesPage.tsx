import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Building2,
  ChevronLeft,
  ChevronRight,
  Download,
  Edit,
  Eye,
  MapPin,
  Medal,
  Phone,
  Plus,
  Search,
  Trash2,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { BulkActionBar } from "../components/shared/BulkActionBar";
import { EmptyState } from "../components/shared/EmptyState";
import type {
  FilterField,
  FilterValues,
} from "../components/shared/FilterPanel";
import { FilterPanel } from "../components/shared/FilterPanel";
import { StatCardSkeleton } from "../components/shared/LoadingSkeleton";
import { ModalForm } from "../components/shared/ModalForm";
import { PageHeader } from "../components/shared/PageHeader";
import { StatCard } from "../components/shared/StatCard";
import { StatusBadge } from "../components/shared/StatusBadge";
import { mockBranches } from "../data/mockBranches";
import { mockUsers } from "../data/mockUsers";
import type { Branch, BranchStatus, User } from "../types";
import { exportToCSV } from "../utils/csvExport";

const PAGE_SIZE = 6;

const RANK_COLORS: Record<number, string> = {
  1: "bg-amber-50 border-amber-300 text-amber-700",
  2: "bg-muted/30 border-border text-muted-foreground",
  3: "bg-orange-50 border-orange-300 text-orange-700",
};

const RANK_MEDAL: Record<number, string> = { 1: "🥇", 2: "🥈", 3: "🥉" };

function formatRevenue(v: number): string {
  if (v >= 1_000_000) return `₹${(v / 1_000_000).toFixed(2)}M`;
  if (v >= 1_000) return `₹${(v / 1_000).toFixed(0)}K`;
  return `₹${v}`;
}

function PerformanceBar({ value }: { value: number }) {
  const color =
    value >= 90
      ? "bg-green-500"
      : value >= 75
        ? "bg-primary"
        : value >= 60
          ? "bg-amber-500"
          : "bg-red-500";
  return (
    <div className="flex items-center gap-2">
      <div className="w-20 h-1.5 rounded-full bg-muted overflow-hidden">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-xs font-semibold text-foreground w-8">
        {value}%
      </span>
    </div>
  );
}

type ActiveTab = "directory" | "ranking";
type SortField = "name" | "revenue" | "staffCount";

const BRANCH_FILTER_FIELDS: FilterField[] = [
  {
    key: "name",
    label: "Branch Name",
    type: "text",
    placeholder: "Search branch name…",
  },
  {
    key: "status",
    label: "Status",
    type: "select",
    options: [
      { label: "Active", value: "Active" },
      { label: "Inactive", value: "Inactive" },
      { label: "Suspended", value: "Suspended" },
    ],
  },
  {
    key: "city",
    label: "City",
    type: "text",
    placeholder: "Search city…",
  },
];

function branchesToCSV(branches: Branch[]): Record<string, unknown>[] {
  return branches.map((b) => ({
    Name: b.name,
    Code: b.code,
    City: b.city,
    State: b.state,
    Status: b.status,
    Manager: b.managerName,
    "Staff Count": b.staffCount,
    Revenue: b.revenue,
    "Target Revenue": b.targetRevenue,
    Performance: `${b.performance}%`,
    Phone: b.phone,
  }));
}

export default function BranchesPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("directory");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sortField, setSortField] = useState<SortField>("name");
  const [page, setPage] = useState(1);
  const [loading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editBranch, setEditBranch] = useState<Branch | null>(null);
  const [saving, setSaving] = useState(false);
  const [filterValues, setFilterValues] = useState<FilterValues>({});
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Form state
  const [form, setForm] = useState({
    name: "",
    code: "",
    city: "",
    state: "",
    address: "",
    phone: "",
    managerId: "",
    status: "Active" as BranchStatus,
  });

  const managers = useMemo(
    () =>
      mockUsers.filter(
        (u) => u.role === "branch_manager" || u.role === "admin",
      ),
    [],
  );

  const filtered = useMemo(() => {
    let list = [...mockBranches];

    // Toolbar search
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          b.city.toLowerCase().includes(q) ||
          b.managerName.toLowerCase().includes(q) ||
          b.code.toLowerCase().includes(q),
      );
    }
    if (statusFilter !== "all") {
      list = list.filter((b) => b.status === statusFilter);
    }

    // FilterPanel values
    const fpName = filterValues.name as string | undefined;
    const fpStatus = filterValues.status as string | undefined;
    const fpCity = filterValues.city as string | undefined;

    if (fpName?.trim()) {
      const q = fpName.toLowerCase();
      list = list.filter(
        (b) =>
          b.name.toLowerCase().includes(q) || b.code.toLowerCase().includes(q),
      );
    }
    if (fpStatus) {
      list = list.filter((b) => b.status === fpStatus);
    }
    if (fpCity?.trim()) {
      const q = fpCity.toLowerCase();
      list = list.filter((b) => b.city.toLowerCase().includes(q));
    }

    list.sort((a, b) => {
      if (sortField === "revenue") return b.revenue - a.revenue;
      if (sortField === "staffCount") return b.staffCount - a.staffCount;
      return a.name.localeCompare(b.name);
    });
    return list;
  }, [search, statusFilter, sortField, filterValues]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const ranked = useMemo(
    () => [...mockBranches].sort((a, b) => a.rank - b.rank),
    [],
  );

  const stats = useMemo(() => {
    const active = mockBranches.filter((b) => b.status === "Active").length;
    const totalStaff = mockBranches.reduce((s, b) => s + b.staffCount, 0);
    const totalRev = mockBranches.reduce((s, b) => s + b.revenue, 0);
    return { active, totalStaff, totalRev };
  }, []);

  function openAdd() {
    setForm({
      name: "",
      code: "",
      city: "",
      state: "",
      address: "",
      phone: "",
      managerId: "",
      status: "Active",
    });
    setShowAddModal(true);
  }

  function openEdit(b: Branch) {
    setForm({
      name: b.name,
      code: b.code,
      city: b.city,
      state: b.state,
      address: b.address,
      phone: b.phone,
      managerId: b.managerId,
      status: b.status,
    });
    setEditBranch(b);
  }

  function handleSave() {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setShowAddModal(false);
      setEditBranch(null);
    }, 1100);
  }

  function handleSearchChange(v: string) {
    setSearch(v);
    setPage(1);
  }

  function handleStatusChange(v: string) {
    setStatusFilter(v);
    setPage(1);
  }

  function handleFilterChange(values: FilterValues) {
    setFilterValues(values);
    setPage(1);
  }

  function handleExportAll() {
    exportToCSV(branchesToCSV(filtered), "branches_export");
  }

  function handleExportSelected() {
    const selected = filtered.filter((b) => selectedIds.includes(b.id));
    exportToCSV(branchesToCSV(selected), "branches_selected_export");
  }

  function handleBulkDelete() {
    console.log("Delete branches:", selectedIds);
    setSelectedIds([]);
  }

  function toggleSelection(id: string) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  function toggleAllPage() {
    const pageIds = paginated.map((b) => b.id);
    const allSelected = pageIds.every((id) => selectedIds.includes(id));
    if (allSelected) {
      setSelectedIds((prev) => prev.filter((id) => !pageIds.includes(id)));
    } else {
      setSelectedIds((prev) => [
        ...prev,
        ...pageIds.filter((id) => !prev.includes(id)),
      ]);
    }
  }

  const pageIds = paginated.map((b) => b.id);
  const allPageSelected =
    pageIds.length > 0 && pageIds.every((id) => selectedIds.includes(id));

  return (
    <div className="space-y-4 sm:space-y-5">
      <PageHeader
        title="Branch Management"
        subtitle={`${mockBranches.length} branches across India`}
        breadcrumbs={[{ label: "Home" }, { label: "Branches" }]}
        actions={
          <div className="flex items-center gap-2 flex-wrap">
            <Button
              size="sm"
              variant="outline"
              className="rounded-xl gap-1.5"
              onClick={handleExportAll}
              data-ocid="branches.export_csv.button"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export CSV</span>
            </Button>
            <Button
              size="sm"
              className="rounded-xl gap-1.5"
              onClick={openAdd}
              data-ocid="branches.add_branch.open_modal_button"
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="hidden xs:inline sm:inline">Add Branch</span>
            </Button>
          </div>
        }
      />

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {loading ? (
          ["sk-a", "sk-b", "sk-c", "sk-d"].map((k) => (
            <StatCardSkeleton key={k} />
          ))
        ) : (
          <>
            <StatCard
              title="Total Branches"
              value={mockBranches.length}
              icon={Building2}
              iconColor="text-primary"
              change={2}
              data-ocid="branches.stat.total"
            />
            <StatCard
              title="Active Branches"
              value={stats.active}
              icon={TrendingUp}
              iconColor="text-green-600"
              change={0}
              data-ocid="branches.stat.active"
            />
            <StatCard
              title="Total Staff"
              value={stats.totalStaff}
              icon={Users}
              iconColor="text-secondary"
              change={5}
              data-ocid="branches.stat.staff"
            />
            <StatCard
              title="Monthly Revenue"
              value="$2.4M"
              icon={TrendingUp}
              iconColor="text-accent-foreground"
              change={8}
              data-ocid="branches.stat.revenue"
            />
          </>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-muted/40 p-1 rounded-xl w-full sm:w-fit border border-border overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveTab("directory")}
          className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${activeTab === "directory" ? "bg-card shadow-card text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          data-ocid="branches.directory.tab"
        >
          Directory
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("ranking")}
          className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${activeTab === "ranking" ? "bg-card shadow-card text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          data-ocid="branches.ranking.tab"
        >
          <Medal className="w-3.5 h-3.5 inline mr-1.5" />
          Branch Ranking
        </button>
      </div>

      {activeTab === "directory" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="bg-card rounded-2xl border border-border shadow-card"
        >
          {/* Filter row */}
          <div className="flex flex-wrap gap-2 sm:gap-3 p-3 sm:p-4 border-b border-border">
            <div className="relative flex-1 min-w-[160px] sm:min-w-48">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <Input
                placeholder="Search branches…"
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-9 h-8 rounded-xl text-sm"
                data-ocid="branches.search.input"
              />
            </div>
            <Select value={statusFilter} onValueChange={handleStatusChange}>
              <SelectTrigger
                className="h-8 w-32 sm:w-36 rounded-xl text-xs"
                data-ocid="branches.status.select"
              >
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
                <SelectItem value="Suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={sortField}
              onValueChange={(v) => setSortField(v as SortField)}
            >
              <SelectTrigger
                className="h-8 w-32 sm:w-36 rounded-xl text-xs"
                data-ocid="branches.sort.select"
              >
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Sort: Name</SelectItem>
                <SelectItem value="revenue">Sort: Revenue</SelectItem>
                <SelectItem value="staffCount">Sort: Staff Count</SelectItem>
              </SelectContent>
            </Select>
            <Button
              size="sm"
              variant="outline"
              className="h-8 rounded-xl gap-1.5 text-xs"
              onClick={handleExportAll}
              data-ocid="branches.filter_row.export_csv.button"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export CSV</span>
            </Button>
            <FilterPanel
              filters={BRANCH_FILTER_FIELDS}
              presetKey="branches"
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Table */}
          {paginated.length === 0 ? (
            <EmptyState
              icon={Building2}
              title="No branches found"
              description="Try adjusting your search or filters."
              data-ocid="branches.empty_state"
            />
          ) : (
            <div className="overflow-x-auto">
              <table
                className="w-full text-left text-sm"
                style={{ minWidth: "640px" }}
              >
                <thead>
                  <tr className="border-b border-border bg-muted/20">
                    <th className="px-3 py-3 w-10">
                      <input
                        type="checkbox"
                        aria-label="Select all on page"
                        checked={allPageSelected}
                        onChange={toggleAllPage}
                        className="rounded border-border accent-primary cursor-pointer"
                        data-ocid="branches.select_all.checkbox"
                      />
                    </th>
                    {[
                      "Branch",
                      "Location",
                      "Manager",
                      "Staff",
                      "Revenue",
                      "Performance",
                      "Status",
                      "Actions",
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paginated.map((branch, idx) => {
                    const isSelected = selectedIds.includes(branch.id);
                    return (
                      <motion.tr
                        key={branch.id}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                        className={`border-b border-border last:border-0 hover:bg-muted/20 transition-colors group ${isSelected ? "bg-primary/5" : ""}`}
                        data-ocid={`branches.item.${idx + 1}`}
                      >
                        <td className="px-3 py-3 w-10">
                          <input
                            type="checkbox"
                            aria-label={`Select ${branch.name}`}
                            checked={isSelected}
                            onChange={() => toggleSelection(branch.id)}
                            className="rounded border-border accent-primary cursor-pointer"
                            data-ocid={`branches.checkbox.${idx + 1}`}
                          />
                        </td>
                        <td className="px-4 py-3">
                          <div>
                            <p className="text-xs font-semibold text-foreground">
                              {branch.name}
                            </p>
                            <p className="text-[10px] text-muted-foreground font-mono">
                              {branch.code}
                            </p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="w-3 h-3 shrink-0" />
                            <span>
                              {branch.city}, {branch.state}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-xs text-foreground">
                            {branch.managerName}
                          </p>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <span className="text-xs font-semibold text-foreground">
                            {branch.staffCount}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <span className="text-xs font-semibold text-foreground">
                            {formatRevenue(branch.revenue)}
                          </span>
                          <p className="text-[10px] text-muted-foreground">
                            of {formatRevenue(branch.targetRevenue)}
                          </p>
                        </td>
                        <td className="px-4 py-3">
                          <PerformanceBar value={branch.performance} />
                        </td>
                        <td className="px-4 py-3">
                          <StatusBadge status={branch.status} />
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-7 w-7 rounded-lg"
                              data-ocid={`branches.edit_button.${idx + 1}`}
                              onClick={() => openEdit(branch)}
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-7 w-7 rounded-lg"
                              data-ocid={`branches.view_button.${idx + 1}`}
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-7 w-7 rounded-lg text-destructive hover:text-destructive"
                              data-ocid={`branches.delete_button.${idx + 1}`}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </Button>
                          </div>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-4 py-3 border-t border-border flex-wrap gap-2">
              <p className="text-xs text-muted-foreground">
                Showing {(page - 1) * PAGE_SIZE + 1}–
                {Math.min(page * PAGE_SIZE, filtered.length)} of{" "}
                {filtered.length}
              </p>
              <div className="flex items-center gap-1 flex-wrap">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-7 w-7 rounded-lg"
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
                  data-ocid="branches.pagination_prev"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pg) => (
                    <button
                      key={`page-${pg}`}
                      type="button"
                      onClick={() => setPage(pg)}
                      className={`h-7 w-7 rounded-lg text-xs font-semibold transition-all ${pg === page ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}
                      data-ocid={`branches.page.${pg}`}
                    >
                      {pg}
                    </button>
                  ),
                )}
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-7 w-7 rounded-lg"
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => p + 1)}
                  data-ocid="branches.pagination_next"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      )}

      {activeTab === "ranking" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="bg-card rounded-2xl border border-border shadow-card overflow-hidden"
          data-ocid="branches.ranking_section"
        >
          <div className="px-5 py-4 border-b border-border">
            <h3 className="text-sm font-display font-semibold text-foreground">
              Branch Revenue Ranking
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Ranked by monthly revenue performance
            </p>
          </div>
          <div className="divide-y divide-border">
            {ranked.map((branch, idx) => {
              const rankClass =
                RANK_COLORS[branch.rank] ??
                "bg-muted/30 border-border text-muted-foreground";
              const pct = Math.round(
                (branch.revenue / branch.targetRevenue) * 100,
              );
              return (
                <motion.div
                  key={branch.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 hover:bg-muted/20 transition-colors"
                  data-ocid={`branches.ranking.item.${idx + 1}`}
                >
                  {/* Rank badge */}
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-xl border font-bold text-sm shrink-0 ${rankClass}`}
                  >
                    {RANK_MEDAL[branch.rank] ?? `#${branch.rank}`}
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-foreground truncate">
                        {branch.name}
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground hidden sm:inline">
                        {branch.code}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {branch.city}, {branch.state}
                      <span className="mx-1 hidden sm:inline">·</span>
                      <Users className="w-3 h-3 hidden sm:inline" />
                      <span className="hidden sm:inline">
                        {branch.staffCount} staff
                      </span>
                    </div>
                  </div>
                  {/* Revenue */}
                  <div className="text-right shrink-0 hidden sm:block">
                    <p className="text-sm font-bold text-foreground">
                      {formatRevenue(branch.revenue)}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      of {formatRevenue(branch.targetRevenue)}
                    </p>
                  </div>
                  {/* Progress */}
                  <div className="w-24 sm:w-28 shrink-0 hidden md:block">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-muted-foreground">
                        Target
                      </span>
                      <span
                        className={`text-[10px] font-semibold ${pct >= 100 ? "text-green-600" : "text-amber-600"}`}
                      >
                        {pct}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className={`h-full rounded-full ${pct >= 100 ? "bg-green-500" : "bg-primary"}`}
                        style={{ width: `${Math.min(pct, 100)}%` }}
                      />
                    </div>
                  </div>
                  {/* Status */}
                  <div className="shrink-0">
                    <StatusBadge status={branch.status} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Bulk Action Bar */}
      <BulkActionBar
        count={selectedIds.length}
        onExport={handleExportSelected}
        onDelete={handleBulkDelete}
        onDeselect={() => setSelectedIds([])}
      />

      {/* Add Branch Modal */}
      <ModalForm
        open={showAddModal}
        onOpenChange={setShowAddModal}
        title="Add New Branch"
        description="Fill in the details to create a new branch."
        onSubmit={handleSave}
        submitLabel="Create Branch"
        loading={saving}
        data-ocid="add_branch.dialog"
      >
        <BranchFormFields form={form} setForm={setForm} managers={managers} />
      </ModalForm>

      {/* Edit Branch Modal */}
      <ModalForm
        open={editBranch !== null}
        onOpenChange={(open) => {
          if (!open) setEditBranch(null);
        }}
        title={`Edit Branch — ${editBranch?.name ?? ""}`}
        description="Update branch information."
        onSubmit={handleSave}
        submitLabel="Save Changes"
        loading={saving}
        data-ocid="edit_branch.dialog"
      >
        <BranchFormFields form={form} setForm={setForm} managers={managers} />
      </ModalForm>
    </div>
  );
}

// ── Branch Form ────────────────────────────────────────────────────────────────
interface FormState {
  name: string;
  code: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  managerId: string;
  status: BranchStatus;
}

function BranchFormFields({
  form,
  setForm,
  managers,
}: {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
  managers: User[];
}) {
  function update(key: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">Branch Name *</Label>
          <Input
            placeholder="e.g. Ahmedabad East"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="rounded-xl text-sm h-9"
            data-ocid="branch_form.name.input"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">Branch Code *</Label>
          <Input
            placeholder="e.g. AMD-E01"
            value={form.code}
            onChange={(e) => update("code", e.target.value)}
            className="rounded-xl text-sm h-9 font-mono"
            data-ocid="branch_form.code.input"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label className="text-xs font-medium">Full Address</Label>
        <Input
          placeholder="Street, Area, Pincode"
          value={form.address}
          onChange={(e) => update("address", e.target.value)}
          className="rounded-xl text-sm h-9"
          data-ocid="branch_form.address.input"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">City</Label>
          <Input
            placeholder="City"
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
            className="rounded-xl text-sm h-9"
            data-ocid="branch_form.city.input"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">State</Label>
          <Input
            placeholder="State"
            value={form.state}
            onChange={(e) => update("state", e.target.value)}
            className="rounded-xl text-sm h-9"
            data-ocid="branch_form.state.input"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">Phone</Label>
          <div className="relative">
            <Phone className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <Input
              placeholder="+91 …"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="rounded-xl text-sm h-9 pl-8"
              data-ocid="branch_form.phone.input"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">Status</Label>
          <Select
            value={form.status}
            onValueChange={(v) => update("status", v)}
          >
            <SelectTrigger
              className="rounded-xl text-sm h-9"
              data-ocid="branch_form.status.select"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
              <SelectItem value="Suspended">Suspended</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label className="text-xs font-medium">Branch Manager</Label>
        <Select
          value={form.managerId}
          onValueChange={(v) => update("managerId", v)}
        >
          <SelectTrigger
            className="rounded-xl text-sm h-9"
            data-ocid="branch_form.manager.select"
          >
            <SelectValue placeholder="Assign a manager" />
          </SelectTrigger>
          <SelectContent>
            {managers.map((m) => (
              <SelectItem key={m.id} value={m.id}>
                {m.name} — {m.designation}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
