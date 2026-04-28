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
import { useNavigate } from "@tanstack/react-router";
import {
  BadgeCheck,
  Building2,
  CalendarDays,
  IndianRupee,
  Mail,
  MapPin,
  Phone,
  User,
  UserCog,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { FormPage } from "../../components/shared/FormPage";
import { mockBranches } from "../../data/mockBranches";
import { mockUsers } from "../../data/mockUsers";
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
  employeeId?: string;
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
  if (!form.employeeId.trim()) errors.employeeId = "Employee ID is required";
  return errors;
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function NewStaffPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    role: "",
    department: "",
    designation: "",
    branchId: "",
    employeeId: "",
    startDate: "",
    managerId: "",
    salary: "",
    status: "Active",
    address: "",
  });

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
    toast.success(`${form.name} has been added successfully`);
    navigate({ to: "/staff" });
  }

  const seniorStaff = mockUsers.filter(
    (u) =>
      u.role === "branch_manager" ||
      u.role === "admin" ||
      u.role === "finance_manager",
  );

  return (
    <FormPage
      breadcrumbs={[
        { label: "Staff", href: "/staff" },
        { label: "New Staff Member" },
      ]}
      title="Add New Staff Member"
      description="Onboard a new team member and set up their profile"
      backTo="/staff"
      submitLabel="Add Staff Member"
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      ocidPrefix="new_staff"
    >
      {/* ── Personal Information ────────────────────────────────────────────── */}
      <section>
        <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <User className="w-4 h-4 text-primary" />
          Personal Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name — full width */}
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="ns-name">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="ns-name"
              placeholder="e.g. Arjun Mehta"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={errors.name ? "border-destructive" : ""}
              data-ocid="new_staff.name.input"
            />
            {errors.name && (
              <p
                className="text-xs text-destructive"
                data-ocid="new_staff.name.field_error"
              >
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <Label htmlFor="ns-email">
              Email <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                id="ns-email"
                type="email"
                className={`pl-9 ${errors.email ? "border-destructive" : ""}`}
                placeholder="arjun@fincore.in"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                data-ocid="new_staff.email.input"
              />
            </div>
            {errors.email && (
              <p
                className="text-xs text-destructive"
                data-ocid="new_staff.email.field_error"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <Label htmlFor="ns-phone">Phone</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                id="ns-phone"
                className="pl-9"
                placeholder="+91 99999 00000"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                data-ocid="new_staff.phone.input"
              />
            </div>
          </div>

          {/* Employee ID */}
          <div className="space-y-1.5">
            <Label htmlFor="ns-emp-id">
              Employee ID <span className="text-destructive">*</span>
            </Label>
            <Input
              id="ns-emp-id"
              placeholder="EMP-2026-001"
              value={form.employeeId}
              onChange={(e) => update("employeeId", e.target.value)}
              className={errors.employeeId ? "border-destructive" : ""}
              data-ocid="new_staff.employee_id.input"
            />
            {errors.employeeId && (
              <p
                className="text-xs text-destructive"
                data-ocid="new_staff.employee_id.field_error"
              >
                {errors.employeeId}
              </p>
            )}
          </div>

          {/* Start Date */}
          <div className="space-y-1.5">
            <Label htmlFor="ns-start-date">Start Date</Label>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                id="ns-start-date"
                type="date"
                className="pl-9"
                value={form.startDate}
                onChange={(e) => update("startDate", e.target.value)}
                data-ocid="new_staff.start_date.input"
              />
            </div>
          </div>

          {/* Address — full width */}
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="ns-address">
              <MapPin className="w-3.5 h-3.5 inline mr-1.5 text-muted-foreground" />
              Address
            </Label>
            <Textarea
              id="ns-address"
              placeholder="Residential address"
              rows={2}
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
              className="resize-none"
              data-ocid="new_staff.address.textarea"
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
                data-ocid="new_staff.role.select"
              >
                <SelectValue placeholder="Select role" />
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
                data-ocid="new_staff.role.field_error"
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
                data-ocid="new_staff.department.select"
              >
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                {DEPARTMENTS.map((d) => (
                  <SelectItem key={d} value={d}>
                    {d}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.department && (
              <p
                className="text-xs text-destructive"
                data-ocid="new_staff.department.field_error"
              >
                {errors.department}
              </p>
            )}
          </div>

          {/* Designation */}
          <div className="space-y-1.5">
            <Label htmlFor="ns-designation">Designation</Label>
            <Input
              id="ns-designation"
              placeholder="e.g. Senior Relationship Manager"
              value={form.designation}
              onChange={(e) => update("designation", e.target.value)}
              data-ocid="new_staff.designation.input"
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
                data-ocid="new_staff.branch.select"
              >
                <SelectValue placeholder="Select branch" />
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
            {errors.branchId && (
              <p
                className="text-xs text-destructive"
                data-ocid="new_staff.branch.field_error"
              >
                {errors.branchId}
              </p>
            )}
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
              <SelectTrigger data-ocid="new_staff.manager.select">
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
              <SelectTrigger data-ocid="new_staff.status.select">
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
            <Label htmlFor="ns-salary">Monthly Salary (₹)</Label>
            <div className="relative">
              <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                id="ns-salary"
                type="number"
                className="pl-9"
                placeholder="55000"
                value={form.salary}
                onChange={(e) => update("salary", e.target.value)}
                data-ocid="new_staff.salary.input"
              />
            </div>
          </div>
        </div>
      </section>
    </FormPage>
  );
}
