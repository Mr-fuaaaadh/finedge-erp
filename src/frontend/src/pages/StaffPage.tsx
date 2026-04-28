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
import { useNavigate } from "@tanstack/react-router";
import {
  Check,
  Download,
  Eye,
  Grid3X3,
  LayoutList,
  Pencil,
  Plus,
  Search,
  Shield,
  UserCheck,
  UserMinus,
  Users,
  X,
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
import {
  CardSkeleton,
  StatCardSkeleton,
} from "../components/shared/LoadingSkeleton";
import { PageHeader } from "../components/shared/PageHeader";
import { StatCard } from "../components/shared/StatCard";
import { StatusBadge } from "../components/shared/StatusBadge";
import { mockBranches } from "../data/mockBranches";
import { mockUsers } from "../data/mockUsers";
import type { Department, Role, User, UserStatus } from "../types";
import { exportToCSV } from "../utils/csvExport";

// ── Types ──────────────────────────────────────────────────────────────────────

type ViewMode = "grid" | "table";
type ActiveTab = "directory" | "role-matrix";

// ── Constants ──────────────────────────────────────────────────────────────────

const DEPARTMENTS: Department[] = [
  "Sales",
  "Finance",
  "Operations",
  "HR",
  "Marketing",
  "IT",
];

const ROLES: { value: Role; label: string }[] = [
  { value: "admin", label: "Admin" },
  { value: "branch_manager", label: "Branch Manager" },
  { value: "finance_manager", label: "Finance Manager" },
  { value: "staff", label: "Staff" },
];

const MODULES = [
  "Dashboard",
  "Branches",
  "Staff",
  "Leads",
  "Tasks",
  "Attendance",
  "Finance",
  "Performance",
] as const;

type Module = (typeof MODULES)[number];

const ROLE_PERMISSIONS: Record<Role, Partial<Record<Module, boolean>>> = {
  admin: {
    Dashboard: true,
    Branches: true,
    Staff: true,
    Leads: true,
    Tasks: true,
    Attendance: true,
    Finance: true,
    Performance: true,
  },
  branch_manager: {
    Dashboard: true,
    Branches: false,
    Staff: true,
    Leads: true,
    Tasks: true,
    Attendance: true,
    Finance: false,
    Performance: true,
  },
  finance_manager: {
    Dashboard: true,
    Branches: false,
    Staff: false,
    Leads: false,
    Tasks: true,
    Attendance: false,
    Finance: true,
    Performance: true,
  },
  staff: {
    Dashboard: true,
    Branches: false,
    Staff: false,
    Leads: true,
    Tasks: true,
    Attendance: true,
    Finance: false,
    Performance: false,
  },
};

const ROLE_COLORS: Record<Role, string> = {
  admin: "bg-primary/10 text-primary border-primary/20",
  branch_manager: "bg-secondary/10 text-secondary border-secondary/20",
  finance_manager: "bg-accent/20 text-accent-foreground border-accent/30",
  staff: "bg-muted text-muted-foreground border-border",
};

const SCORE_COLOR = (v: number) =>
  v >= 90
    ? "text-green-600"
    : v >= 75
      ? "text-primary"
      : v >= 60
        ? "text-amber-600"
        : "text-red-500";

const STAFF_FILTER_FIELDS: FilterField[] = [
  { key: "name", label: "Name", type: "text", placeholder: "Search by name…" },
  {
    key: "department",
    label: "Department",
    type: "select",
    options: DEPARTMENTS.map((d) => ({ label: d, value: d })),
  },
  {
    key: "role",
    label: "Role",
    type: "select",
    options: ROLES.map((r) => ({ label: r.label, value: r.value })),
  },
  {
    key: "status",
    label: "Status",
    type: "select",
    options: [
      { label: "Active", value: "Active" },
      { label: "Inactive", value: "Inactive" },
      { label: "On Leave", value: "On Leave" },
    ],
  },
];

function usersToCSV(users: User[]): Record<string, unknown>[] {
  return users.map((u) => ({
    Name: u.name,
    Email: u.email,
    Phone: u.phone,
    Role: u.role,
    Department: u.department,
    Designation: u.designation,
    Branch: u.branchName,
    Status: u.status,
    "Performance Score": u.performanceScore,
    "Join Date": u.joinDate,
  }));
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function RoleBadge({ role }: { role: Role }) {
  return (
    <span
      className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-lg border ${ROLE_COLORS[role]}`}
    >
      {role.replace("_", " ")}
    </span>
  );
}

function ScoreGauge({ value }: { value: number }) {
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
      <div className="w-14 h-1.5 rounded-full bg-muted overflow-hidden">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className={`text-xs font-bold ${SCORE_COLOR(value)}`}>{value}</span>
    </div>
  );
}

function StaffGridCard({
  user,
  idx,
  onView,
  onEdit,
}: {
  user: User;
  idx: number;
  onView: (u: User) => void;
  onEdit: (u: User) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.04 }}
      className="bg-card rounded-2xl border border-border shadow-card p-4 hover:shadow-elevated transition-smooth group"
      data-ocid={`staff.grid.item.${idx + 1}`}
    >
      <div className="flex items-start justify-between mb-3">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-11 h-11 rounded-xl object-cover border-2 border-border"
        />
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="icon"
            variant="ghost"
            className="h-7 w-7 rounded-lg"
            onClick={() => onView(user)}
            aria-label="View profile"
            data-ocid={`staff.grid.view_button.${idx + 1}`}
          >
            <Eye className="w-3.5 h-3.5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="h-7 w-7 rounded-lg"
            onClick={() => onEdit(user)}
            aria-label="Edit staff"
            data-ocid={`staff.grid.edit_button.${idx + 1}`}
          >
            <Pencil className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
      <button
        type="button"
        onClick={() => onView(user)}
        className="text-left w-full min-w-0 block"
      >
        <p className="text-sm font-display font-semibold text-foreground truncate hover:text-primary transition-colors">
          {user.name}
        </p>
        <p className="text-[11px] text-muted-foreground truncate">
          {user.designation}
        </p>
      </button>
      <div className="mt-2 space-y-1.5">
        <div className="flex items-center justify-between">
          <RoleBadge role={user.role} />
          <StatusBadge status={user.status} />
        </div>
        <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
          <span className="truncate">{user.department}</span>
          <span>·</span>
          <span className="truncate">{user.branchName}</span>
        </div>
        <div className="flex items-center justify-between pt-1 border-t border-border">
          <span className="text-[10px] text-muted-foreground">Performance</span>
          <ScoreGauge value={user.performanceScore} />
        </div>
      </div>
    </motion.div>
  );
}

// ── Role Matrix ────────────────────────────────────────────────────────────────

function RoleMatrix() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-2xl border border-border shadow-card overflow-hidden"
      data-ocid="staff.role_matrix.section"
    >
      <div className="px-5 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-display font-semibold text-foreground">
            Role Permission Matrix
          </h3>
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">
          Access rights for each role across all system modules
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm" style={{ minWidth: "560px" }}>
          <thead>
            <tr className="border-b border-border bg-muted/20">
              <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted-foreground w-40">
                Role
              </th>
              {MODULES.map((mod) => (
                <th
                  key={mod}
                  className="px-3 py-3 text-center text-[10px] font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap"
                >
                  {mod}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROLES.map(({ value: roleVal, label }, idx) => (
              <tr
                key={roleVal}
                className="border-b border-border last:border-0 hover:bg-muted/10 transition-colors"
                data-ocid={`staff.role_matrix.row.${idx + 1}`}
              >
                <td className="px-5 py-3.5">
                  <RoleBadge role={roleVal} />
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {label}
                  </p>
                </td>
                {MODULES.map((mod) => {
                  const allowed = ROLE_PERMISSIONS[roleVal]?.[mod] ?? false;
                  return (
                    <td key={mod} className="px-3 py-3.5 text-center">
                      {allowed ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-50 border border-green-200">
                          <Check className="w-3 h-3 text-green-600" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-muted/60 border border-border">
                          <X className="w-3 h-3 text-muted-foreground" />
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────

export default function StaffPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<ActiveTab>("directory");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading] = useState(false);
  const [filterValues, setFilterValues] = useState<FilterValues>({});
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const staffList = useMemo(
    () => mockUsers.filter((u) => u.role !== "admin"),
    [],
  );

  const filtered = useMemo(() => {
    let list = [...staffList];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (u) =>
          u.name.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q) ||
          u.designation.toLowerCase().includes(q) ||
          u.branchName.toLowerCase().includes(q),
      );
    }
    if (deptFilter !== "all")
      list = list.filter((u) => u.department === deptFilter);
    if (roleFilter !== "all") list = list.filter((u) => u.role === roleFilter);
    if (statusFilter !== "all")
      list = list.filter((u) => u.status === statusFilter);

    const fpName = filterValues.name as string | undefined;
    const fpDept = filterValues.department as string | undefined;
    const fpRole = filterValues.role as string | undefined;
    const fpStatus = filterValues.status as string | undefined;

    if (fpName?.trim()) {
      const q = fpName.toLowerCase();
      list = list.filter(
        (u) =>
          u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q),
      );
    }
    if (fpDept) list = list.filter((u) => u.department === fpDept);
    if (fpRole) list = list.filter((u) => u.role === fpRole);
    if (fpStatus) list = list.filter((u) => u.status === fpStatus);

    return list;
  }, [staffList, search, deptFilter, roleFilter, statusFilter, filterValues]);

  const stats = useMemo(() => {
    const active = staffList.filter((u) => u.status === "Active").length;
    const onLeave = staffList.filter((u) => u.status === "On Leave").length;
    const depts = new Set(staffList.map((u) => u.department)).size;
    return { total: staffList.length, active, depts, onLeave };
  }, [staffList]);

  function handleExportAll() {
    exportToCSV(usersToCSV(filtered), "staff_export");
  }

  function handleExportSelected() {
    const selected = filtered.filter((u) => selectedIds.includes(u.id));
    exportToCSV(usersToCSV(selected), "staff_selected_export");
  }

  function handleBulkDelete() {
    console.log("Delete staff:", selectedIds);
    setSelectedIds([]);
  }

  return (
    <div className="space-y-4 sm:space-y-5">
      <PageHeader
        title="Staff Management"
        subtitle={`${staffList.length} team members across all branches`}
        breadcrumbs={[{ label: "Home" }, { label: "Staff" }]}
        actions={
          <div className="flex items-center gap-2 flex-wrap">
            <Button
              size="sm"
              variant="outline"
              className="rounded-xl gap-1.5"
              onClick={handleExportAll}
              data-ocid="staff.export_csv.button"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export CSV</span>
            </Button>
            <Button
              size="sm"
              className="rounded-xl gap-1.5"
              onClick={() => navigate({ to: "/staff/new" })}
              data-ocid="staff.add_staff.button"
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Add Staff Member</span>
            </Button>
          </div>
        }
      />

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <StatCardSkeleton key={`stat-skel-${["a", "b", "c", "d"][i]}`} />
          ))
        ) : (
          <>
            <StatCard
              title="Total Staff"
              value={127}
              icon={Users}
              iconColor="text-primary"
              change={5}
              data-ocid="staff.stat.total"
            />
            <StatCard
              title="Active"
              value={stats.active}
              icon={UserCheck}
              iconColor="text-green-600"
              change={3}
              data-ocid="staff.stat.active"
            />
            <StatCard
              title="Departments"
              value={8}
              icon={Grid3X3}
              iconColor="text-secondary"
              data-ocid="staff.stat.departments"
            />
            <StatCard
              title="On Leave"
              value={6}
              icon={UserMinus}
              iconColor="text-amber-600"
              change={-2}
              data-ocid="staff.stat.on_leave"
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
          data-ocid="staff.directory.tab"
        >
          <Users className="w-3.5 h-3.5 inline mr-1.5" />
          Directory
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("role-matrix")}
          className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${activeTab === "role-matrix" ? "bg-card shadow-card text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          data-ocid="staff.role_matrix.tab"
        >
          <Shield className="w-3.5 h-3.5 inline mr-1.5" />
          Role Matrix
        </button>
      </div>

      {activeTab === "directory" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="space-y-4"
        >
          {/* Filters toolbar */}
          <div className="bg-card rounded-2xl border border-border shadow-card p-4">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <div className="relative flex-1 min-w-[160px] sm:min-w-48">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <Input
                  placeholder="Search name, email…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 h-8 rounded-xl text-sm"
                  data-ocid="staff.search.input"
                />
              </div>
              <Select value={deptFilter} onValueChange={setDeptFilter}>
                <SelectTrigger
                  className="h-8 w-28 sm:w-36 rounded-xl text-xs"
                  data-ocid="staff.department.select"
                >
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Depts</SelectItem>
                  {DEPARTMENTS.map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger
                  className="h-8 w-28 sm:w-36 rounded-xl text-xs"
                  data-ocid="staff.role.select"
                >
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  {ROLES.map((r) => (
                    <SelectItem key={r.value} value={r.value}>
                      {r.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger
                  className="h-8 w-28 sm:w-32 rounded-xl text-xs"
                  data-ocid="staff.status.select"
                >
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                  <SelectItem value="On Leave">On Leave</SelectItem>
                </SelectContent>
              </Select>
              <Button
                size="sm"
                variant="outline"
                className="h-8 rounded-xl gap-1.5 text-xs"
                onClick={handleExportAll}
                data-ocid="staff.filter_row.export_csv.button"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Export CSV</span>
              </Button>
              <FilterPanel
                filters={STAFF_FILTER_FIELDS}
                presetKey="staff"
                onFilterChange={setFilterValues}
              />
              {/* View toggle */}
              <div className="flex items-center gap-1 bg-muted/40 rounded-xl p-1 border border-border ml-auto">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-lg transition-all ${viewMode === "grid" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`}
                  data-ocid="staff.grid_view.toggle"
                  aria-label="Grid view"
                >
                  <Grid3X3 className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("table")}
                  className={`p-1.5 rounded-lg transition-all ${viewMode === "table" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`}
                  data-ocid="staff.table_view.toggle"
                  aria-label="Table view"
                >
                  <LayoutList className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between px-1">
            <p className="text-xs text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {filtered.length}
              </span>{" "}
              of {staffList.length} staff members
            </p>
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="bg-card rounded-2xl border border-border shadow-card">
              <EmptyState
                icon={Users}
                title="No staff members found"
                description="Try adjusting your search terms or filters."
                data-ocid="staff.empty_state"
              />
            </div>
          )}

          {/* Grid view */}
          {viewMode === "grid" && filtered.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {loading
                ? ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"].map((k) => (
                    <CardSkeleton key={k} />
                  ))
                : filtered.map((user, idx) => (
                    <StaffGridCard
                      key={user.id}
                      user={user}
                      idx={idx}
                      onView={(u) =>
                        navigate({
                          to: "/staff/$staffId",
                          params: { staffId: u.id },
                        })
                      }
                      onEdit={(u) =>
                        navigate({
                          to: "/staff/$staffId/edit",
                          params: { staffId: u.id },
                        })
                      }
                    />
                  ))}
            </div>
          )}

          {/* Table view */}
          {viewMode === "table" && filtered.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-card rounded-2xl border border-border shadow-card overflow-hidden"
              data-ocid="staff.table"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-sm" style={{ minWidth: "700px" }}>
                  <thead>
                    <tr className="border-b border-border bg-muted/20">
                      <th className="px-3 py-3 w-10 sticky left-0 bg-muted/20">
                        <input
                          type="checkbox"
                          aria-label="Select all"
                          checked={
                            filtered.length > 0 &&
                            filtered.every((u) => selectedIds.includes(u.id))
                          }
                          onChange={() => {
                            const allSelected = filtered.every((u) =>
                              selectedIds.includes(u.id),
                            );
                            if (allSelected) {
                              setSelectedIds((prev) =>
                                prev.filter(
                                  (id) => !filtered.some((u) => u.id === id),
                                ),
                              );
                            } else {
                              setSelectedIds((prev) => [
                                ...prev,
                                ...filtered
                                  .filter((u) => !prev.includes(u.id))
                                  .map((u) => u.id),
                              ]);
                            }
                          }}
                          className="rounded border-border accent-primary cursor-pointer"
                          data-ocid="staff.table.select_all.checkbox"
                        />
                      </th>
                      {[
                        "Staff Member",
                        "Department",
                        "Role",
                        "Branch",
                        "Performance",
                        "Status",
                        "Actions",
                      ].map((h) => (
                        <th
                          key={h}
                          className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((user, idx) => {
                      const isSelected = selectedIds.includes(user.id);
                      return (
                        <motion.tr
                          key={user.id}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className={`border-b border-border last:border-0 hover:bg-muted/10 transition-colors group ${isSelected ? "bg-primary/5" : ""}`}
                          data-ocid={`staff.table.item.${idx + 1}`}
                        >
                          <td className="px-3 py-3 w-10 sticky left-0 bg-card group-hover:bg-muted/10">
                            <input
                              type="checkbox"
                              aria-label={`Select ${user.name}`}
                              checked={isSelected}
                              onChange={() => {
                                setSelectedIds((prev) =>
                                  prev.includes(user.id)
                                    ? prev.filter((id) => id !== user.id)
                                    : [...prev, user.id],
                                );
                              }}
                              className="rounded border-border accent-primary cursor-pointer"
                              data-ocid={`staff.table.checkbox.${idx + 1}`}
                            />
                          </td>
                          <td className="px-4 py-3">
                            <button
                              type="button"
                              onClick={() =>
                                navigate({
                                  to: "/staff/$staffId",
                                  params: { staffId: user.id },
                                })
                              }
                              className="flex items-center gap-2.5 group/name text-left"
                            >
                              <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-8 h-8 rounded-xl object-cover shrink-0"
                              />
                              <div className="min-w-0">
                                <p className="text-xs font-semibold text-foreground truncate group-hover/name:text-primary transition-colors">
                                  {user.name}
                                </p>
                                <p className="text-[10px] text-muted-foreground truncate">
                                  {user.email}
                                </p>
                              </div>
                            </button>
                          </td>
                          <td className="px-4 py-3">
                            <p className="text-xs text-foreground">
                              {user.department}
                            </p>
                            <p className="text-[10px] text-muted-foreground">
                              {user.designation}
                            </p>
                          </td>
                          <td className="px-4 py-3">
                            <RoleBadge role={user.role} />
                          </td>
                          <td className="px-4 py-3">
                            <p className="text-xs text-foreground">
                              {user.branchName}
                            </p>
                          </td>
                          <td className="px-4 py-3">
                            <ScoreGauge value={user.performanceScore} />
                          </td>
                          <td className="px-4 py-3">
                            <StatusBadge status={user.status} />
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-7 w-7 rounded-lg"
                                onClick={() =>
                                  navigate({
                                    to: "/staff/$staffId",
                                    params: { staffId: user.id },
                                  })
                                }
                                aria-label="View profile"
                                data-ocid={`staff.table.view_button.${idx + 1}`}
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </Button>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-7 w-7 rounded-lg"
                                onClick={() =>
                                  navigate({
                                    to: "/staff/$staffId/edit",
                                    params: { staffId: user.id },
                                  })
                                }
                                aria-label="Edit staff"
                                data-ocid={`staff.table.edit_button.${idx + 1}`}
                              >
                                <Pencil className="w-3.5 h-3.5" />
                              </Button>
                            </div>
                          </td>
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}

      {activeTab === "role-matrix" && <RoleMatrix />}

      {/* Bulk Action Bar */}
      <BulkActionBar
        count={selectedIds.length}
        onExport={handleExportSelected}
        onDelete={handleBulkDelete}
        onDeselect={() => setSelectedIds([])}
      />
    </div>
  );
}
