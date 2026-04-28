import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  BadgeCheck,
  Building2,
  CalendarDays,
  IndianRupee,
  Mail,
  MapPin,
  Phone,
  Trash2,
  User,
  UserCog,
  UserMinus,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { FormPage } from "../../components/shared/FormPage";
import { mockBranches } from "../../data/mockBranches";
import { getUserById, mockUsers } from "../../data/mockUsers";
import type { Department, Role, UserStatus } from "../../types";

// ── Constants ──────────────────────────────────────────────────────────────────

const ROLES: { value: Role; label: string }[] = [
  { value: "staff", label: "Staff" },
  { value: "branch_manager", label: "Branch Manager" },
  { value: "finance_manager", label: "Finance Manager" },
  { value: "admin", label: "Admin" },
];

const DEPARTMENTS: Department[] = [
  "Sales",
  "Finance",
  "Operations",
  "HR",
  "Marketing",
  "IT",
];

const STATUSES: UserStatus[] = ["Active", "Inactive", "On Leave"];

// ── Form State ─────────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  email: string;
  phone: string;
  role: Role | "";
  department: Department | "";
  designation: string;
  branchId: string;
  employeeId: string;
  startDate: string;
  managerId: string;
  salary: string;
  status: UserStatus;
  address: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  role?: string;
  department?: string;
  branchId?: string;
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Full name is required";
  if (!form.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Enter a valid email address";
  if (!form.role) errors.role = "Role is required";
  if (!form.department) errors.department = "Department is required";
  if (!form.branchId) errors.branchId = "Branch is required";
  return errors;
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function EditStaffPage() {
  const { staffId } = useParams({ from: "/layout/staff/$staffId/edit" });
  const navigate = useNavigate();

  const existingStaff = getUserById(staffId);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState<FormState>(() => ({
    name: existingStaff?.name ?? "Priya Sharma",
    email: existingStaff?.email ?? "priya.sharma@fincore.in",
    phone: existingStaff?.phone ?? "+91 98765 00001",
    role: (existingStaff?.role ?? "branch_manager") as Role,
    department: (existingStaff?.department ?? "Sales") as Department,
    designation: existingStaff?.designation ?? "Branch Manager",
    branchId: existingStaff?.branchId ?? "b1",
    employeeId: `EMP-${staffId?.toUpperCase()}`,
    startDate: existingStaff?.joinDate ?? "2022-03-15",
    managerId: "",
    salary: String(existingStaff?.salary ?? 85000),
    status: existingStaff?.status ?? "Active",
    address: "12, Linking Road, Bandra West, Mumbai 400050",
  }));

  function update<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors before submitting");
      return;
    }
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    toast.success("Staff record updated successfully");
    navigate({ to: "/staff/$staffId", params: { staffId } });
  }

  async function handleDeactivate() {
    await new Promise((r) => setTimeout(r, 800));
    toast.success(`${form.name} has been deactivated`);
    navigate({ to: "/staff" });
  }

  async function handleDelete() {
    await new Promise((r) => setTimeout(r, 800));
    toast.success(`${form.name} has been permanently deleted`);
    navigate({ to: "/staff" });
  }

  const seniorStaff = mockUsers.filter(
    (u) =>
      (u.role === "branch_manager" ||
        u.role === "admin" ||
        u.role === "finance_manager") &&
      u.id !== staffId,
  );

  const staffName = existingStaff?.name ?? form.name;

  return (
    <FormPage
      breadcrumbs={[
        { label: "Staff", href: "/staff" },
        { label: staffName, href: `/staff/${staffId}` },
        { label: "Edit" },
      ]}
      title={`Edit — ${staffName}`}
      description="Update employee information and assignment"
      backTo={`/staff/${staffId}`}
      submitLabel="Save Changes"
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      ocidPrefix="edit_staff"
      extraActions={
        <div className="flex items-center gap-2 mr-auto">
          {/* Deactivate */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="gap-1.5 text-amber-600 border-amber-200 hover:bg-amber-50 hover:border-amber-300"
                data-ocid="edit_staff.deactivate_button"
              >
                <UserMinus className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Deactivate</span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent data-ocid="edit_staff.deactivate.dialog">
              <AlertDialogHeader>
                <AlertDialogTitle>Deactivate Staff Member?</AlertDialogTitle>
                <AlertDialogDescription>
                  {staffName} will be marked as inactive and will lose access to
                  the system. This can be reversed by editing their status.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel data-ocid="edit_staff.deactivate.cancel_button">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDeactivate}
                  className="bg-amber-500 hover:bg-amber-600 text-white"
                  data-ocid="edit_staff.deactivate.confirm_button"
                >
                  Deactivate
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {/* Delete */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="gap-1.5 text-destructive border-destructive/30 hover:bg-destructive/5"
                data-ocid="edit_staff.delete_button"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Delete</span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent data-ocid="edit_staff.delete.dialog">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Permanently Delete Staff Member?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently delete {staffName}'s record including
                  all assigned tasks, attendance history, and performance data.
                  This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel data-ocid="edit_staff.delete.cancel_button">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDelete}
                  className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                  data-ocid="edit_staff.delete.confirm_button"
                >
                  Delete Permanently
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      }
    >
      {/* ── Personal Information ────────────────────────────────────────────── */}
      <section>
        <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <User className="w-4 h-4 text-primary" />
          Personal Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="es-name">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="es-name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={errors.name ? "border-destructive" : ""}
              data-ocid="edit_staff.name.input"
            />
            {errors.name && (
              <p
                className="text-xs text-destructive"
                data-ocid="edit_staff.name.field_error"
              >
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <Label htmlFor="es-email">
              Email <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                id="es-email"
                type="email"
                className={`pl-9 ${errors.email ? "border-destructive" : ""}`}
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                data-ocid="edit_staff.email.input"
              />
            </div>
            {errors.email && (
              <p
                className="text-xs text-destructive"
                data-ocid="edit_staff.email.field_error"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <Label htmlFor="es-phone">Phone</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                id="es-phone"
                className="pl-9"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                data-ocid="edit_staff.phone.input"
              />
            </div>
          </div>

          {/* Employee ID */}
          <div className="space-y-1.5">
            <Label htmlFor="es-emp-id">Employee ID</Label>
            <Input
              id="es-emp-id"
              value={form.employeeId}
              onChange={(e) => update("employeeId", e.target.value)}
              data-ocid="edit_staff.employee_id.input"
            />
          </div>

          {/* Start Date */}
          <div className="space-y-1.5">
            <Label htmlFor="es-start-date">Start Date</Label>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                id="es-start-date"
                type="date"
                className="pl-9"
                value={form.startDate}
                onChange={(e) => update("startDate", e.target.value)}
                data-ocid="edit_staff.start_date.input"
              />
            </div>
          </div>

          {/* Address */}
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="es-address">
              <MapPin className="w-3.5 h-3.5 inline mr-1.5 text-muted-foreground" />
              Address
            </Label>
            <Textarea
              id="es-address"
              rows={2}
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
              className="resize-none"
              data-ocid="edit_staff.address.textarea"
            />
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Role & Assignment ───────────────────────────────────────────────── */}
      <section>
        <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <Building2 className="w-4 h-4 text-primary" />
          Role &amp; Assignment
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Role */}
          <div className="space-y-1.5">
            <Label>
              Role <span className="text-destructive">*</span>
            </Label>
            <Select
              value={form.role}
              onValueChange={(v) => update("role", v as Role)}
            >
              <SelectTrigger
                className={errors.role ? "border-destructive" : ""}
                data-ocid="edit_staff.role.select"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ROLES.map((r) => (
                  <SelectItem key={r.value} value={r.value}>
                    {r.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.role && (
              <p
                className="text-xs text-destructive"
                data-ocid="edit_staff.role.field_error"
              >
                {errors.role}
              </p>
            )}
          </div>

          {/* Department */}
          <div className="space-y-1.5">
            <Label>
              Department <span className="text-destructive">*</span>
            </Label>
            <Select
              value={form.department}
              onValueChange={(v) => update("department", v as Department)}
            >
              <SelectTrigger
                className={errors.department ? "border-destructive" : ""}
                data-ocid="edit_staff.department.select"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {DEPARTMENTS.map((d) => (
                  <SelectItem key={d} value={d}>
                    {d}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Designation */}
          <div className="space-y-1.5">
            <Label htmlFor="es-designation">Designation</Label>
            <Input
              id="es-designation"
              value={form.designation}
              onChange={(e) => update("designation", e.target.value)}
              data-ocid="edit_staff.designation.input"
            />
          </div>

          {/* Branch */}
          <div className="space-y-1.5">
            <Label>
              Branch <span className="text-destructive">*</span>
            </Label>
            <Select
              value={form.branchId}
              onValueChange={(v) => update("branchId", v)}
            >
              <SelectTrigger
                className={errors.branchId ? "border-destructive" : ""}
                data-ocid="edit_staff.branch.select"
              >
                <SelectValue />
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

          {/* Manager */}
          <div className="space-y-1.5">
            <Label>
              <UserCog className="w-3.5 h-3.5 inline mr-1.5 text-muted-foreground" />
              Reporting Manager
            </Label>
            <Select
              value={form.managerId}
              onValueChange={(v) => update("managerId", v)}
            >
              <SelectTrigger data-ocid="edit_staff.manager.select">
                <SelectValue placeholder="Select manager" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No manager</SelectItem>
                {seniorStaff.map((u) => (
                  <SelectItem key={u.id} value={u.id}>
                    {u.name} — {u.designation}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Status */}
          <div className="space-y-1.5">
            <Label>
              <BadgeCheck className="w-3.5 h-3.5 inline mr-1.5 text-muted-foreground" />
              Status
            </Label>
            <Select
              value={form.status}
              onValueChange={(v) => update("status", v as UserStatus)}
            >
              <SelectTrigger data-ocid="edit_staff.status.select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {STATUSES.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Compensation ────────────────────────────────────────────────────── */}
      <section>
        <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <IndianRupee className="w-4 h-4 text-primary" />
          Compensation
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="es-salary">Monthly Salary (₹)</Label>
            <div className="relative">
              <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                id="es-salary"
                type="number"
                className="pl-9"
                value={form.salary}
                onChange={(e) => update("salary", e.target.value)}
                data-ocid="edit_staff.salary.input"
              />
            </div>
          </div>
        </div>
      </section>
    </FormPage>
  );
}
