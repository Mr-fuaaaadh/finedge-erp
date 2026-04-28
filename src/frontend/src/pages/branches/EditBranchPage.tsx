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
import { AlertTriangle, Building2, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { FormPage } from "../../components/shared/FormPage";
import { getBranchById } from "../../data/mockBranches";
import { mockUsers } from "../../data/mockUsers";
import type { BranchStatus } from "../../types";

const STATUSES: { label: string; value: BranchStatus }[] = [
  { label: "Active", value: "Active" },
  { label: "Inactive", value: "Inactive" },
  { label: "Under Review", value: "Suspended" },
];

const STATES = [
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Delhi",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "West Bengal",
];

interface FormData {
  name: string;
  code: string;
  city: string;
  state: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  managerId: string;
  targetRevenue: string;
  status: BranchStatus;
  establishedDate: string;
}

export default function EditBranchPage() {
  const { branchId } = useParams({ from: "/layout/branches/$branchId/edit" });
  const navigate = useNavigate();
  const branch = getBranchById(branchId);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );
  const [form, setForm] = useState<FormData>({
    name: "",
    code: "",
    city: "",
    state: "",
    country: "India",
    address: "",
    phone: "",
    email: "",
    managerId: "",
    targetRevenue: "",
    status: "Active",
    establishedDate: "",
  });

  useEffect(() => {
    if (branch) {
      setForm({
        name: branch.name,
        code: branch.code,
        city: branch.city,
        state: branch.state,
        country: "India",
        address: branch.address,
        phone: branch.phone,
        email: branch.email,
        managerId: branch.managerId,
        targetRevenue: String(branch.targetRevenue),
        status: branch.status,
        establishedDate: branch.createdAt,
      });
    }
  }, [branch]);

  const managers = mockUsers.filter(
    (u) => u.role === "branch_manager" || u.role === "admin",
  );

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate(): boolean {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) e.name = "Branch name is required";
    if (!form.code.trim()) e.code = "Branch code is required";
    if (!form.address.trim()) e.address = "Address is required";
    if (!form.city.trim()) e.city = "City is required";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    toast.success("Branch updated successfully");
    navigate({ to: "/branches/$branchId", params: { branchId } });
  }

  if (!branch) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-3">
        <Building2 className="w-10 h-10 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">Branch not found.</p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate({ to: "/branches" })}
        >
          Back to Branches
        </Button>
      </div>
    );
  }

  const closeBranchAction = (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="border-destructive text-destructive hover:bg-destructive/10"
          data-ocid="edit_branch.close_branch.open_modal_button"
        >
          <AlertTriangle className="w-3.5 h-3.5 mr-1.5" />
          Close Branch
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent data-ocid="edit_branch.close_branch.dialog">
        <AlertDialogHeader>
          <AlertDialogTitle>Close this branch?</AlertDialogTitle>
          <AlertDialogDescription>
            Closing <strong>{branch.name}</strong> will mark it as inactive and
            remove it from active operations. This can be reversed by an
            administrator.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel data-ocid="edit_branch.close_branch.cancel_button">
            Keep Branch
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            onClick={() => {
              toast.success(`${branch.name} has been closed`);
              navigate({ to: "/branches" });
            }}
            data-ocid="edit_branch.close_branch.confirm_button"
          >
            Close Branch
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );

  return (
    <FormPage
      breadcrumbs={[
        { label: "Branches", href: "/branches" },
        { label: branch.name, href: `/branches/${branchId}` },
        { label: "Edit" },
      ]}
      title={`Edit — ${branch.name}`}
      description="Update branch details and operational settings."
      backTo={`/branches/${branchId}`}
      submitLabel="Save Changes"
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      onCancel={() =>
        navigate({ to: "/branches/$branchId", params: { branchId } })
      }
      extraActions={closeBranchAction}
      ocidPrefix="edit_branch"
    >
      {/* Branch identity */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <Building2 className="w-4 h-4 text-primary" />
          Branch Identity
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="name">
              Branch Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={errors.name ? "border-destructive" : ""}
              data-ocid="edit_branch.name.input"
            />
            {errors.name && (
              <p
                className="text-[11px] text-destructive"
                data-ocid="edit_branch.name.field_error"
              >
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="code">
              Branch Code <span className="text-destructive">*</span>
            </Label>
            <Input
              id="code"
              value={form.code}
              onChange={(e) => update("code", e.target.value.toUpperCase())}
              className={`font-mono ${errors.code ? "border-destructive" : ""}`}
              data-ocid="edit_branch.code.input"
            />
            {errors.code && (
              <p
                className="text-[11px] text-destructive"
                data-ocid="edit_branch.code.field_error"
              >
                {errors.code}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label>Status</Label>
            <Select
              value={form.status}
              onValueChange={(v) => update("status", v as BranchStatus)}
            >
              <SelectTrigger data-ocid="edit_branch.status.select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {STATUSES.map((s) => (
                  <SelectItem key={s.value} value={s.value}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="establishedDate">Established Date</Label>
            <Input
              id="establishedDate"
              type="date"
              value={form.establishedDate}
              onChange={(e) => update("establishedDate", e.target.value)}
              data-ocid="edit_branch.established_date.input"
            />
          </div>
        </div>
      </section>

      <Separator />

      {/* Location */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          Location
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="address">
              Full Address <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="address"
              rows={3}
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
              className={`resize-none ${errors.address ? "border-destructive" : ""}`}
              data-ocid="edit_branch.address.textarea"
            />
            {errors.address && (
              <p
                className="text-[11px] text-destructive"
                data-ocid="edit_branch.address.field_error"
              >
                {errors.address}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="city">
              City <span className="text-destructive">*</span>
            </Label>
            <Input
              id="city"
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
              className={errors.city ? "border-destructive" : ""}
              data-ocid="edit_branch.city.input"
            />
            {errors.city && (
              <p
                className="text-[11px] text-destructive"
                data-ocid="edit_branch.city.field_error"
              >
                {errors.city}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label>State / Region</Label>
            <Select
              value={form.state}
              onValueChange={(v) => update("state", v)}
            >
              <SelectTrigger data-ocid="edit_branch.state.select">
                <SelectValue placeholder="Select state…" />
              </SelectTrigger>
              <SelectContent>
                {STATES.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              value={form.country}
              onChange={(e) => update("country", e.target.value)}
              data-ocid="edit_branch.country.input"
            />
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <Phone className="w-4 h-4 text-primary" />
          Contact &amp; Operations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="phone">Branch Phone</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                id="phone"
                className="pl-9"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                data-ocid="edit_branch.phone.input"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">Branch Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                id="email"
                type="email"
                className={`pl-9 ${errors.email ? "border-destructive" : ""}`}
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                data-ocid="edit_branch.email.input"
              />
            </div>
            {errors.email && (
              <p
                className="text-[11px] text-destructive"
                data-ocid="edit_branch.email.field_error"
              >
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label>Branch Manager</Label>
            <Select
              value={form.managerId}
              onValueChange={(v) => update("managerId", v)}
            >
              <SelectTrigger data-ocid="edit_branch.manager.select">
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

          <div className="space-y-1.5">
            <Label htmlFor="targetRevenue">Revenue Target (₹)</Label>
            <Input
              id="targetRevenue"
              type="number"
              value={form.targetRevenue}
              onChange={(e) => update("targetRevenue", e.target.value)}
              data-ocid="edit_branch.target_revenue.input"
            />
          </div>
        </div>
      </section>
    </FormPage>
  );
}
