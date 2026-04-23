import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockAuditLogs } from "@/data/mockAuditLogs";
import { useAuth } from "@/hooks/useAuth";
import type { AuditAction, AuditLog, AuditResource, Role } from "@/types";
import { exportToCSV } from "@/utils/csvExport";
import {
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Clock,
  Download,
  FileText,
  ShieldOff,
  UserCheck,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { PageHeader } from "../components/shared/PageHeader";

const PAGE_SIZE = 20;

// ── Color maps ──────────────────────────────────────────────────────────────

const ACTION_STYLES: Record<AuditAction, string> = {
  CREATE: "bg-primary/10 text-primary border-primary/20",
  UPDATE: "bg-secondary/10 text-secondary border-secondary/20",
  DELETE: "bg-destructive/10 text-destructive border-destructive/20",
  LOGIN: "bg-muted text-muted-foreground border-border",
  LOGOUT: "bg-muted text-muted-foreground border-border",
  EXPORT: "bg-accent/20 text-accent-foreground border-accent/30",
  VIEW: "bg-card text-foreground border-border",
};

const RESOURCE_ICONS: Record<AuditResource, React.ElementType> = {
  Branch: Building2,
  Staff: Users,
  Lead: UserCheck,
  Task: ClipboardList,
  Attendance: CalendarDays,
  Finance: BarChart3,
  Report: FileText,
};

const ROLE_LABELS: Record<Role, string> = {
  admin: "Admin",
  branch_manager: "Branch Mgr",
  staff: "Staff",
  finance_manager: "Finance Mgr",
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatTimestamp(d: Date): string {
  return d.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function toDateString(d: Date): string {
  return d.toISOString().slice(0, 10);
}

// ── Sub-components ───────────────────────────────────────────────────────────

function ActionBadge({ action }: { action: AuditAction }) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold border ${ACTION_STYLES[action]}`}
    >
      {action}
    </span>
  );
}

function ResourceCell({ resource }: { resource: AuditResource }) {
  const Icon = RESOURCE_ICONS[resource];
  return (
    <div className="flex items-center gap-1.5 text-xs text-foreground whitespace-nowrap">
      <Icon className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
      {resource}
    </div>
  );
}

function RoleBadge({ role }: { role: Role }) {
  const colors: Record<Role, string> = {
    admin: "bg-primary/10 text-primary border-primary/20",
    branch_manager: "bg-secondary/10 text-secondary border-secondary/20",
    staff: "bg-muted text-muted-foreground border-border",
    finance_manager: "bg-accent/20 text-accent-foreground border-accent/30",
  };
  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold border ${colors[role]}`}
    >
      {ROLE_LABELS[role]}
    </span>
  );
}

// ── Access Denied ─────────────────────────────────────────────────────────────

function AccessDenied() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4">
      <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center">
        <ShieldOff className="w-8 h-8 text-destructive" />
      </div>
      <div>
        <h2 className="text-xl font-display font-bold text-foreground">
          Access Denied
        </h2>
        <p className="text-sm text-muted-foreground mt-1 max-w-xs">
          Audit logs are restricted to administrators only. Contact your system
          admin to request access.
        </p>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function AuditLogsPage() {
  const { role } = useAuth();

  const [search, setSearch] = useState("");
  const [actionFilter, setActionFilter] = useState<string>("all");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (role !== "admin") return [];
    let list = [...mockAuditLogs].sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime(),
    );

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (l) =>
          l.userName.toLowerCase().includes(q) ||
          l.details.toLowerCase().includes(q) ||
          l.resource.toLowerCase().includes(q),
      );
    }
    if (actionFilter !== "all") {
      list = list.filter((l) => l.action === actionFilter);
    }
    if (roleFilter !== "all") {
      list = list.filter((l) => l.userRole === roleFilter);
    }
    if (dateFrom) {
      const from = new Date(dateFrom);
      list = list.filter((l) => l.timestamp >= from);
    }
    if (dateTo) {
      const to = new Date(dateTo);
      to.setHours(23, 59, 59, 999);
      list = list.filter((l) => l.timestamp <= to);
    }
    return list;
  }, [search, actionFilter, roleFilter, dateFrom, dateTo, role]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  if (role !== "admin") return <AccessDenied />;

  function handleFilterChange(setter: (v: string) => void) {
    return (v: string) => {
      setter(v);
      setPage(1);
    };
  }

  function handleExport() {
    const rows = filtered.map((l) => ({
      Timestamp: formatTimestamp(l.timestamp),
      User: l.userName,
      Role: ROLE_LABELS[l.userRole],
      Action: l.action,
      Resource: l.resource,
      ResourceID: l.resourceId,
      Details: l.details,
      "IP Address": l.ipAddress,
    }));
    exportToCSV(rows as unknown as Record<string, unknown>[], "audit-logs");
  }

  const startDate =
    dateFrom || toDateString(new Date(Date.now() - 30 * 86400000));
  const endDate = dateTo || toDateString(new Date());

  return (
    <div className="space-y-4 sm:space-y-5" data-ocid="audit_logs.page">
      <PageHeader
        title="Audit Logs"
        subtitle="System activity and compliance trail"
        breadcrumbs={[
          { label: "Home" },
          { label: "Admin" },
          { label: "Audit Logs" },
        ]}
        actions={
          <Button
            size="sm"
            variant="outline"
            className="rounded-xl gap-1.5 text-xs"
            onClick={handleExport}
            data-ocid="audit_logs.export_button"
          >
            <Download className="w-3.5 h-3.5" />
            Export CSV
          </Button>
        }
      />

      {/* Summary bar */}
      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5 bg-card border border-border rounded-lg px-3 py-1.5">
          <BookOpen className="w-3.5 h-3.5 text-primary" />
          <span>
            <span className="font-semibold text-foreground">
              {mockAuditLogs.length}
            </span>{" "}
            total entries
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-card border border-border rounded-lg px-3 py-1.5">
          <Briefcase className="w-3.5 h-3.5 text-secondary" />
          <span>
            <span className="font-semibold text-foreground">
              {filtered.length}
            </span>{" "}
            matching
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-card border border-border rounded-lg px-3 py-1.5">
          <Clock className="w-3.5 h-3.5 text-muted-foreground" />
          <span>
            {startDate} → {endDate}
          </span>
        </div>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-card rounded-2xl border border-border shadow-card p-3 sm:p-4"
        data-ocid="audit_logs.filters.panel"
      >
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {/* Search */}
          <div className="relative flex-1 min-w-[180px]">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-[11px]">
              🔍
            </span>
            <Input
              placeholder="Search user, resource, details…"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="pl-8 h-8 rounded-xl text-xs"
              data-ocid="audit_logs.search.input"
            />
          </div>

          {/* Date From */}
          <div className="flex flex-col gap-0.5 min-w-[130px]">
            <span className="text-[10px] text-muted-foreground font-medium px-0.5">
              From
            </span>
            <Input
              type="date"
              value={dateFrom}
              onChange={(e) => handleFilterChange(setDateFrom)(e.target.value)}
              className="h-8 rounded-xl text-xs"
              data-ocid="audit_logs.date_from.input"
            />
          </div>

          {/* Date To */}
          <div className="flex flex-col gap-0.5 min-w-[130px]">
            <span className="text-[10px] text-muted-foreground font-medium px-0.5">
              To
            </span>
            <Input
              type="date"
              value={dateTo}
              onChange={(e) => handleFilterChange(setDateTo)(e.target.value)}
              className="h-8 rounded-xl text-xs"
              data-ocid="audit_logs.date_to.input"
            />
          </div>

          {/* Action filter */}
          <Select
            value={actionFilter}
            onValueChange={handleFilterChange(setActionFilter)}
          >
            <SelectTrigger
              className="h-8 w-36 rounded-xl text-xs"
              data-ocid="audit_logs.action.select"
            >
              <SelectValue placeholder="Action" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Actions</SelectItem>
              <SelectItem value="CREATE">CREATE</SelectItem>
              <SelectItem value="UPDATE">UPDATE</SelectItem>
              <SelectItem value="DELETE">DELETE</SelectItem>
              <SelectItem value="LOGIN">LOGIN</SelectItem>
              <SelectItem value="LOGOUT">LOGOUT</SelectItem>
              <SelectItem value="EXPORT">EXPORT</SelectItem>
              <SelectItem value="VIEW">VIEW</SelectItem>
            </SelectContent>
          </Select>

          {/* Role filter */}
          <Select
            value={roleFilter}
            onValueChange={handleFilterChange(setRoleFilter)}
          >
            <SelectTrigger
              className="h-8 w-40 rounded-xl text-xs"
              data-ocid="audit_logs.role.select"
            >
              <SelectValue placeholder="User Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="branch_manager">Branch Manager</SelectItem>
              <SelectItem value="staff">Staff</SelectItem>
              <SelectItem value="finance_manager">Finance Manager</SelectItem>
            </SelectContent>
          </Select>

          {/* Clear */}
          {(search ||
            actionFilter !== "all" ||
            roleFilter !== "all" ||
            dateFrom ||
            dateTo) && (
            <Button
              size="sm"
              variant="ghost"
              className="h-8 rounded-xl text-xs text-muted-foreground"
              onClick={() => {
                setSearch("");
                setActionFilter("all");
                setRoleFilter("all");
                setDateFrom("");
                setDateTo("");
                setPage(1);
              }}
              data-ocid="audit_logs.clear_filters.button"
            >
              Clear filters
            </Button>
          )}
        </div>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.05 }}
        className="bg-card rounded-2xl border border-border shadow-card overflow-hidden"
        data-ocid="audit_logs.table"
      >
        {filtered.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-16 gap-3 text-center"
            data-ocid="audit_logs.empty_state"
          >
            <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center">
              <FileText className="w-6 h-6 text-muted-foreground" />
            </div>
            <p className="text-sm font-semibold text-foreground">
              No audit entries found
            </p>
            <p className="text-xs text-muted-foreground">
              Try adjusting your filters or date range.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm min-w-[700px]">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  {[
                    "Timestamp",
                    "User",
                    "Action",
                    "Resource",
                    "Details",
                    "IP Address",
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
                {paginated.map((log: AuditLog, idx) => (
                  <motion.tr
                    key={log.id}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.025 }}
                    className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors"
                    data-ocid={`audit_logs.item.${(page - 1) * PAGE_SIZE + idx + 1}`}
                  >
                    {/* Timestamp */}
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 shrink-0" />
                        <span className="font-mono text-[11px]">
                          {formatTimestamp(log.timestamp)}
                        </span>
                      </div>
                    </td>

                    {/* User */}
                    <td className="px-4 py-3">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-semibold text-foreground whitespace-nowrap">
                          {log.userName}
                        </span>
                        <RoleBadge role={log.userRole} />
                      </div>
                    </td>

                    {/* Action */}
                    <td className="px-4 py-3">
                      <ActionBadge action={log.action} />
                    </td>

                    {/* Resource */}
                    <td className="px-4 py-3">
                      <ResourceCell resource={log.resource} />
                    </td>

                    {/* Details */}
                    <td className="px-4 py-3 max-w-[280px]">
                      <p className="text-xs text-foreground line-clamp-2 leading-relaxed">
                        {log.details}
                      </p>
                    </td>

                    {/* IP */}
                    <td className="px-4 py-3">
                      <Badge
                        variant="outline"
                        className="font-mono text-[10px] px-1.5 py-0.5"
                      >
                        {log.ipAddress}
                      </Badge>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {(page - 1) * PAGE_SIZE + 1}–
                {Math.min(page * PAGE_SIZE, filtered.length)}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-foreground">
                {filtered.length}
              </span>{" "}
              entries
            </p>
            <div className="flex items-center gap-1">
              <Button
                size="icon"
                variant="ghost"
                className="h-7 w-7 rounded-lg"
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                data-ocid="audit_logs.pagination_prev"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </Button>
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                const pg =
                  totalPages <= 5
                    ? i + 1
                    : page <= 3
                      ? i + 1
                      : page >= totalPages - 2
                        ? totalPages - 4 + i
                        : page - 2 + i;
                return pg;
              }).map((pg) => (
                <button
                  key={`pg-${pg}`}
                  type="button"
                  onClick={() => setPage(pg)}
                  className={`h-7 w-7 rounded-lg text-xs font-semibold transition-all ${pg === page ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}
                  data-ocid={`audit_logs.page.${pg}`}
                >
                  {pg}
                </button>
              ))}
              <Button
                size="icon"
                variant="ghost"
                className="h-7 w-7 rounded-lg"
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
                data-ocid="audit_logs.pagination_next"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
