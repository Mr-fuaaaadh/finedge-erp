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
  Building2,
  CalendarDays,
  IndianRupee,
  Mail,
  Phone,
  User,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { FormPage } from "../../components/shared/FormPage";
import type { LeadSource, LeadStatus, TaskPriority } from "../../types";

// ─── Constants ────────────────────────────────────────────────────────────────

const LEAD_SOURCES: LeadSource[] = [
  "Website",
  "Referral",
  "Cold Call",
  "Social Media",
  "Email Campaign",
  "Walk-in",
];

const LEAD_STATUSES: LeadStatus[] = [
  "New",
  "In Progress",
  "Converted",
  "Rejected",
];

const PRIORITIES: TaskPriority[] = ["High", "Medium", "Low"];

const PRODUCTS = [
  "SME Business Loan",
  "Home Loan",
  "Personal Loan",
  "Trade Finance",
  "Term Loan",
  "Project Finance",
  "Equipment Finance",
  "Working Capital Loan",
  "Agricultural Loan",
  "Bridge Finance",
  "Startup Business Loan",
  "Inventory Finance",
  "Real Estate Project Finance",
  "Healthcare Equipment Finance",
  "Auto Dealer Finance",
  "Education Institution Loan",
  "Fixed Deposit",
  "Mutual Fund",
  "Insurance",
  "Credit Card",
];

const STAFF_MEMBERS = [
  "Vijay Menon",
  "Kavita Singh",
  "Rohit Joshi",
  "Ananya Nair",
  "Deepak Gupta",
  "Lakshmi Iyer",
  "Suresh Babu",
  "Nikhil Bose",
  "Sneha Kulkarni",
  "Farida Khan",
  "Kiran Rao",
  "Riya Ghosh",
  "Manish Dubey",
  "Pooja Verma",
  "Amit Patel",
];

const BRANCHES = [
  "Mumbai Central",
  "Delhi NCR",
  "Bengaluru East",
  "Hyderabad West",
  "Chennai South",
  "Pune West",
  "Kolkata North",
];

// ─── Form state ───────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  source: LeadSource | "";
  status: LeadStatus;
  priority: TaskPriority;
  product: string;
  value: string;
  assignedTo: string;
  branchName: string;
  followUpDate: string;
  notes: string;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function NewLeadPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    source: "",
    status: "New",
    priority: "Medium",
    product: "",
    value: "",
    assignedTo: "",
    branchName: "",
    followUpDate: "",
    notes: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) newErrors.name = "Contact name is required";
    if (!form.company.trim()) newErrors.company = "Company is required";
    if (!form.source) newErrors.source = "Lead source is required";
    if (!form.status) newErrors.status = "Status is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fill all required fields");
      return;
    }
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    toast.success("Lead created successfully");
    navigate({ to: "/leads" });
  }

  return (
    <FormPage
      breadcrumbs={[{ label: "Leads", href: "/leads" }, { label: "New Lead" }]}
      title="New Lead"
      description="Capture a new prospect into the CRM pipeline"
      backTo="/leads"
      submitLabel="Create Lead"
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      ocidPrefix="new_lead"
    >
      {/* ── Contact Information ─────────────────────────────────────── */}
      <section>
        <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <User className="w-4 h-4 text-primary" />
          Contact Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="name">
              Contact Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              placeholder="e.g. Arjun Mehta"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              data-ocid="new_lead.name.input"
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p
                className="text-xs text-destructive"
                data-ocid="new_lead.name.field_error"
              >
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="company">
              Company <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                id="company"
                placeholder="e.g. TechVentures India"
                className="pl-9"
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                data-ocid="new_lead.company.input"
                aria-invalid={!!errors.company}
              />
            </div>
            {errors.company && (
              <p
                className="text-xs text-destructive"
                data-ocid="new_lead.company.field_error"
              >
                {errors.company}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                id="email"
                type="email"
                placeholder="arjun@company.com"
                className="pl-9"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                data-ocid="new_lead.email.input"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                className="pl-9"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                data-ocid="new_lead.phone.input"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Lead Details ─────────────────────────────────────────────── */}
      <section>
        <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <IndianRupee className="w-4 h-4 text-primary" />
          Lead Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label>
              Lead Source <span className="text-destructive">*</span>
            </Label>
            <Select
              value={form.source}
              onValueChange={(v) => update("source", v)}
            >
              <SelectTrigger
                data-ocid="new_lead.source.select"
                aria-invalid={!!errors.source}
              >
                <SelectValue placeholder="Select source" />
              </SelectTrigger>
              <SelectContent>
                {LEAD_SOURCES.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.source && (
              <p
                className="text-xs text-destructive"
                data-ocid="new_lead.source.field_error"
              >
                {errors.source}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label>
              Status <span className="text-destructive">*</span>
            </Label>
            <Select
              value={form.status}
              onValueChange={(v) => update("status", v as LeadStatus)}
            >
              <SelectTrigger data-ocid="new_lead.status.select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {LEAD_STATUSES.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label>Priority</Label>
            <Select
              value={form.priority}
              onValueChange={(v) => update("priority", v as TaskPriority)}
            >
              <SelectTrigger data-ocid="new_lead.priority.select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {PRIORITIES.map((p) => (
                  <SelectItem key={p} value={p}>
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label>Product / Service</Label>
            <Select
              value={form.product}
              onValueChange={(v) => update("product", v)}
            >
              <SelectTrigger data-ocid="new_lead.product.select">
                <SelectValue placeholder="Select product" />
              </SelectTrigger>
              <SelectContent>
                {PRODUCTS.map((p) => (
                  <SelectItem key={p} value={p}>
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="value">Expected Value (₹)</Label>
            <div className="relative">
              <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                id="value"
                type="number"
                placeholder="500000"
                className="pl-9"
                value={form.value}
                onChange={(e) => update("value", e.target.value)}
                data-ocid="new_lead.value.input"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="followUpDate">Follow-up Date</Label>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                id="followUpDate"
                type="date"
                className="pl-9"
                value={form.followUpDate}
                onChange={(e) => update("followUpDate", e.target.value)}
                data-ocid="new_lead.follow_up_date.input"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Assignment ───────────────────────────────────────────────── */}
      <section>
        <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <Zap className="w-4 h-4 text-primary" />
          Assignment
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label>Assigned To</Label>
            <Select
              value={form.assignedTo}
              onValueChange={(v) => update("assignedTo", v)}
            >
              <SelectTrigger data-ocid="new_lead.assigned_to.select">
                <SelectValue placeholder="Select staff member" />
              </SelectTrigger>
              <SelectContent>
                {STAFF_MEMBERS.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label>Branch</Label>
            <Select
              value={form.branchName}
              onValueChange={(v) => update("branchName", v)}
            >
              <SelectTrigger data-ocid="new_lead.branch.select">
                <SelectValue placeholder="Select branch" />
              </SelectTrigger>
              <SelectContent>
                {BRANCHES.map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Notes ────────────────────────────────────────────────────── */}
      <section>
        <div className="space-y-1.5">
          <Label htmlFor="notes">Notes</Label>
          <Textarea
            id="notes"
            placeholder="Add any relevant notes about this lead — requirements, context, or initial observations…"
            rows={4}
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            data-ocid="new_lead.notes.textarea"
            className="resize-none"
          />
        </div>
      </section>
    </FormPage>
  );
}
