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
  Check,
  ChevronDown,
  ChevronUp,
  Grid3X3,
  LayoutList,
  Minus,
  Pencil,
  Plus,
  Search,
  Shield,
  UserCheck,
  UserMinus,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { EmptyState } from "../components/shared/EmptyState";
import {
  CardSkeleton,
  StatCardSkeleton,
} from "../components/shared/LoadingSkeleton";
import { ModalForm } from "../components/shared/ModalForm";
import { PageHeader } from "../components/shared/PageHeader";
import { StatCard } from "../components/shared/StatCard";
import { StatusBadge } from "../components/shared/StatusBadge";
import { mockBranches } from "../data/mockBranches";
import { mockUsers } from "../data/mockUsers";
import type { Department, Role, User, UserStatus } from "../types";

// ── Types ─────────────────────────────────────────────────────────────────────

type ViewMode = "grid" | "table";
type ActiveTab = "directory" | "role-matrix";

interface StaffFormState {
  name: string;
  email: string;
  phone: string;
  designation: string;
  department: Department | "";
  role: Role | "";
  branchId: string;
  status: UserStatus;
}

// ── Constants ─────────────────────────────────────────────────────────────────

const DEPARTMENTS: Department[] = [
  "Sales",
  "Finance",
  "Operations",
  "HR",
  "Marketing",
  "IT",
];
const ALL_DEPARTMENTS = [
  ...DEPARTMENTS,
  "Legal" as Department,
  "Support" as Department,
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
  onEdit,
}: { user: User; idx: number; onEdit: (u: User) => void }) {
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
            onClick={() => onEdit(user)}
            data-ocid={`staff.grid.edit_button.${idx + 1}`}
          >
            <svg
              aria-label="Edit"
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <title>Edit</title>
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </Button>
        </div>
      </div>
      <div className="min-w-0">
        <p className="text-sm font-display font-semibold text-foreground truncate">
          {user.name}
        </p>
        <p className="text-[11px] text-muted-foreground truncate">
          {user.designation}
        </p>
      </div>
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
        <table className="w-full text-sm">
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

// ── Staff Form ─────────────────────────────────────────────────────────────────

function StaffFormFields({
  form,
  setForm,
}: {
  form: StaffFormState;
  setForm: React.Dispatch<React.SetStateAction<StaffFormState>>;
}) {
  function update<K extends keyof StaffFormState>(
    key: K,
    value: StaffFormState[K],
  ) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">Full Name *</Label>
          <Input
            placeholder="Full name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="rounded-xl text-sm h-9"
            data-ocid="staff_form.name.input"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">Email *</Label>
          <Input
            type="email"
            placeholder="email@fincore.in"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="rounded-xl text-sm h-9"
            data-ocid="staff_form.email.input"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">Phone</Label>
          <Input
            placeholder="+91 …"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="rounded-xl text-sm h-9"
            data-ocid="staff_form.phone.input"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">Designation</Label>
          <Input
            placeholder="Job title"
            value={form.designation}
            onChange={(e) => update("designation", e.target.value)}
            className="rounded-xl text-sm h-9"
            data-ocid="staff_form.designation.input"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">Department</Label>
          <Select
            value={form.department}
            onValueChange={(v) => update("department", v as Department)}
          >
            <SelectTrigger
              className="rounded-xl text-sm h-9"
              data-ocid="staff_form.department.select"
            >
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              {ALL_DEPARTMENTS.map((d) => (
                <SelectItem key={d} value={d}>
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">Role</Label>
          <Select
            value={form.role}
            onValueChange={(v) => update("role", v as Role)}
          >
            <SelectTrigger
              className="rounded-xl text-sm h-9"
              data-ocid="staff_form.role.select"
            >
              <SelectValue placeholder="Assign role" />
            </SelectTrigger>
            <SelectContent>
              {ROLES.map((r) => (
                <SelectItem key={r.value} value={r.value}>
                  {r.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">Branch</Label>
          <Select
            value={form.branchId}
            onValueChange={(v) => update("branchId", v)}
          >
            <SelectTrigger
              className="rounded-xl text-sm h-9"
              data-ocid="staff_form.branch.select"
            >
              <SelectValue placeholder="Assign branch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hq">Head Office</SelectItem>
              {mockBranches.map((b) => (
                <SelectItem key={b.id} value={b.id}>
                  {b.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">Status</Label>
          <Select
            value={form.status}
            onValueChange={(v) => update("status", v as UserStatus)}
          >
            <SelectTrigger
              className="rounded-xl text-sm h-9"
              data-ocid="staff_form.status.select"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
              <SelectItem value="On Leave">On Leave</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────

export default function StaffPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("directory");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");
  const [branchFilter, setBranchFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [saving, setSaving] = useState(false);

  const emptyForm: StaffFormState = {
    name: "",
    email: "",
    phone: "",
    designation: "",
    department: "",
    role: "",
    branchId: "",
    status: "Active",
  };
  const [form, setForm] = useState<StaffFormState>(emptyForm);

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
    if (branchFilter !== "all")
      list = list.filter((u) => u.branchId === branchFilter);
    if (statusFilter !== "all")
      list = list.filter((u) => u.status === statusFilter);
    return list;
  }, [staffList, search, deptFilter, roleFilter, branchFilter, statusFilter]);

  const stats = useMemo(() => {
    const active = staffList.filter((u) => u.status === "Active").length;
    const onLeave = staffList.filter((u) => u.status === "On Leave").length;
    const depts = new Set(staffList.map((u) => u.department)).size;
    return { total: staffList.length, active, depts, onLeave };
  }, [staffList]);

  function openAdd() {
    setForm(emptyForm);
    setShowAddModal(true);
  }

  function openEdit(u: User) {
    setForm({
      name: u.name,
      email: u.email,
      phone: u.phone,
      designation: u.designation,
      department: u.department,
      role: u.role,
      branchId: u.branchId,
      status: u.status,
    });
    setEditUser(u);
  }

  function handleSave() {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setShowAddModal(false);
      setEditUser(null);
    }, 1100);
  }

  return (
    <div className="space-y-4 sm:space-y-5">
      <PageHeader
        title="Staff Management"
        subtitle={`${staffList.length} team members across all branches`}
        breadcrumbs={[{ label: "Home" }, { label: "Staff" }]}
        actions={
          <Button
            size="sm"
            className="rounded-xl gap-1.5"
            onClick={openAdd}
            data-ocid="staff.add_staff.open_modal_button"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Staff Member
          </Button>
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
          className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeTab === "directory" ? "bg-card shadow-card text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          data-ocid="staff.directory.tab"
        >
          <Users className="w-3.5 h-3.5 inline mr-1.5" />
          Directory
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("role-matrix")}
          className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeTab === "role-matrix" ? "bg-card shadow-card text-foreground" : "text-muted-foreground hover:text-foreground"}`}
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
          {/* Filters */}
          <div className="bg-card rounded-2xl border border-border shadow-card p-4">
            <div className="flex flex-wrap gap-3">
              <div className="relative flex-1 min-w-48">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <Input
                  placeholder="Search name, email, role, branch…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 h-8 rounded-xl text-sm"
                  data-ocid="staff.search.input"
                />
              </div>
              <Select value={deptFilter} onValueChange={setDeptFilter}>
                <SelectTrigger
                  className="h-8 w-36 rounded-xl text-xs"
                  data-ocid="staff.department.select"
                >
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {DEPARTMENTS.map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger
                  className="h-8 w-36 rounded-xl text-xs"
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
              <Select value={branchFilter} onValueChange={setBranchFilter}>
                <SelectTrigger
                  className="h-8 w-36 rounded-xl text-xs"
                  data-ocid="staff.branch.select"
                >
                  <SelectValue placeholder="Branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Branches</SelectItem>
                  <SelectItem value="hq">Head Office</SelectItem>
                  {mockBranches.map((b) => (
                    <SelectItem key={b.id} value={b.id}>
                      {b.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger
                  className="h-8 w-32 rounded-xl text-xs"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {loading
                ? ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"].map((k) => (
                    <CardSkeleton key={k} />
                  ))
                : filtered.map((user, idx) => (
                    <StaffGridCard
                      key={user.id}
                      user={user}
                      idx={idx}
                      onEdit={openEdit}
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
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/20">
                      {[
                        "Staff Member",
                        "Department",
                        "Role",
                        "Branch",
                        "Performance",
                        "Attendance",
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
                    {filtered.map((user, idx) => (
                      <motion.tr
                        key={user.id}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        className="border-b border-border last:border-0 hover:bg-muted/10 transition-colors group"
                        data-ocid={`staff.table.item.${idx + 1}`}
                      >
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2.5">
                            <img
                              src={user.avatar}
                              alt={user.name}
                              className="w-8 h-8 rounded-xl object-cover"
                            />
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-foreground truncate">
                                {user.name}
                              </p>
                              <p className="text-[10px] text-muted-foreground truncate">
                                {user.email}
                              </p>
                            </div>
                          </div>
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
                              onClick={() => openEdit(user)}
                              data-ocid={`staff.table.edit_button.${idx + 1}`}
                            >
                              <svg
                                className="w-3.5 h-3.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <title>Edit</title>
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                              </svg>
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-7 w-7 rounded-lg text-destructive hover:text-destructive"
                              data-ocid={`staff.table.delete_button.${idx + 1}`}
                            >
                              <X className="w-3.5 h-3.5" />
                            </Button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}

      {activeTab === "role-matrix" && <RoleMatrix />}

      {/* Add Staff Modal */}
      <ModalForm
        open={showAddModal}
        onOpenChange={setShowAddModal}
        title="Add Staff Member"
        description="Create a new employee record."
        onSubmit={handleSave}
        submitLabel="Create Staff"
        loading={saving}
        data-ocid="add_staff.dialog"
      >
        <StaffFormFields form={form} setForm={setForm} />
      </ModalForm>

      {/* Edit Staff Modal */}
      <ModalForm
        open={editUser !== null}
        onOpenChange={(open) => {
          if (!open) setEditUser(null);
        }}
        title={`Edit Staff — ${editUser?.name ?? ""}`}
        description="Update employee information."
        onSubmit={handleSave}
        submitLabel="Save Changes"
        loading={saving}
        data-ocid="edit_staff.dialog"
      >
        <StaffFormFields form={form} setForm={setForm} />
      </ModalForm>
    </div>
  );
}
