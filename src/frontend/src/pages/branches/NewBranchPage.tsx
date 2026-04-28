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
import { useNavigate } from "@tanstack/react-router";
import { Building2, Mail, MapPin, Phone, RefreshCw } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { FormPage } from "../../components/shared/FormPage";
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

function generateCode(name: string): string {
  if (!name.trim()) return "";
  const words = name.trim().toUpperCase().split(/\s+/);
  const prefix =
    words.length === 1
      ? words[0].slice(0, 3)
      : words
          .map((w) => w[0])
          .join("")
          .slice(0, 3);
  const num = String(Math.floor(Math.random() * 90) + 10);
  return `${prefix}-${num}`;
}

export default function NewBranchPage() {
  const navigate = useNavigate();
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
    toast.success("Branch created successfully");
    navigate({ to: "/branches" });
  }

  return (
    <FormPage
      breadcrumbs={[
        { label: "Branches", href: "/branches" },
        { label: "New Branch" },
      ]}
      title="Create New Branch"
      description="Set up a new office location in the FinEdge network."
      backTo="/branches"
      submitLabel="Create Branch"
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      ocidPrefix="new_branch"
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
              placeholder="e.g. Bengaluru North"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={errors.name ? "border-destructive" : ""}
              data-ocid="new_branch.name.input"
            />
            {errors.name && (
              <p
                className="text-[11px] text-destructive"
                data-ocid="new_branch.name.field_error"
              >
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="code">
              Branch Code <span className="text-destructive">*</span>
            </Label>
            <div className="flex gap-1.5">
              <Input
                id="code"
                placeholder="e.g. BLR-N01"
                value={form.code}
                onChange={(e) => update("code", e.target.value.toUpperCase())}
                className={`font-mono flex-1 ${errors.code ? "border-destructive" : ""}`}
                data-ocid="new_branch.code.input"
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="shrink-0"
                title="Auto-generate from branch name"
                onClick={() => update("code", generateCode(form.name))}
                data-ocid="new_branch.code_generate.button"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </Button>
            </div>
            {errors.code && (
              <p
                className="text-[11px] text-destructive"
                data-ocid="new_branch.code.field_error"
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
              <SelectTrigger data-ocid="new_branch.status.select">
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
              data-ocid="new_branch.established_date.input"
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
              placeholder="Building, Street, Area, Pincode"
              rows={3}
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
              className={`resize-none ${errors.address ? "border-destructive" : ""}`}
              data-ocid="new_branch.address.textarea"
            />
            {errors.address && (
              <p
                className="text-[11px] text-destructive"
                data-ocid="new_branch.address.field_error"
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
              placeholder="e.g. Bengaluru"
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
              className={errors.city ? "border-destructive" : ""}
              data-ocid="new_branch.city.input"
            />
            {errors.city && (
              <p
                className="text-[11px] text-destructive"
                data-ocid="new_branch.city.field_error"
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
              <SelectTrigger data-ocid="new_branch.state.select">
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
              data-ocid="new_branch.country.input"
            />
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact & Ops */}
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
                placeholder="+91 80 1234 5678"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                data-ocid="new_branch.phone.input"
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
                placeholder="branch@fincore.in"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                data-ocid="new_branch.email.input"
              />
            </div>
            {errors.email && (
              <p
                className="text-[11px] text-destructive"
                data-ocid="new_branch.email.field_error"
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
              <SelectTrigger data-ocid="new_branch.manager.select">
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
              placeholder="e.g. 3000000"
              value={form.targetRevenue}
              onChange={(e) => update("targetRevenue", e.target.value)}
              data-ocid="new_branch.target_revenue.input"
            />
          </div>
        </div>
      </section>
    </FormPage>
  );
}
