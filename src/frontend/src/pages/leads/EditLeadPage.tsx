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
  AlertTriangle,
  Building2,
  CalendarDays,
  IndianRupee,
  Mail,
  Phone,
  Trash2,
  User,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { FormPage } from "../../components/shared/FormPage";
import { getLeadById } from "../../data/mockLeads";
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

function leadPriority(value: number): TaskPriority {
  return value >= 1000000 ? "High" : value >= 500000 ? "Medium" : "Low";
}

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

// ─── Delete Confirmation ──────────────────────────────────────────────────────

function DeleteConfirm({
  leadName,
  onConfirm,
  onCancel,
}: {
  leadName: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-2xl shadow-elevated p-6 w-full max-w-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 text-destructive" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Delete Lead</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Delete <span className="font-medium">{leadName}</span>? This
              cannot be undone.
            </p>
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={onCancel}
            data-ocid="edit_lead.delete_cancel.button"
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={onConfirm}
            data-ocid="edit_lead.delete_confirm.button"
          >
            Delete Lead
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EditLeadPage() {
  const { leadId } = useParams({ from: "/layout/leads/$leadId/edit" });
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Load real lead data from mock store
  const existingLead = getLeadById(leadId);

  const [form, setForm] = useState<FormState>({
    name: existingLead?.name ?? "Unknown Lead",
    company: existingLead?.company ?? "",
    email: existingLead?.email ?? "",
    phone: existingLead?.phone ?? "",
    source: existingLead?.source ?? "",
    status: existingLead?.status ?? "New",
    priority: leadPriority(existingLead?.value ?? 0),
    product: existingLead?.product ?? "",
    value: String(existingLead?.value ?? ""),
    assignedTo: existingLead?.assignedTo ?? "",
    branchName: existingLead?.branchName ?? "",
    followUpDate: existingLead?.followUpDate
      ? existingLead.followUpDate.split("T")[0]
      : "",
    notes: existingLead?.notes ?? "",
  });

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.source) {
      toast.error("Please fill all required fields");
      return;
    }
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    toast.success("Lead updated successfully");
    navigate({ to: "/leads/$leadId", params: { leadId } });
  }

  function handleDeleteConfirm() {
    toast.success(`Lead "${form.name}" deleted`);
    navigate({ to: "/leads" });
  }

  const leadDisplayName = existingLead?.name ?? `Lead #${leadId}`;

  return (
    <>
      <FormPage
        breadcrumbs={[
          { label: "Leads", href: "/leads" },
          { label: leadDisplayName, href: `/leads/${leadId}` },
          { label: "Edit" },
        ]}
        title="Edit Lead"
        description={`Editing lead for ${leadDisplayName}`}
        backTo={`/leads/${leadId}`}
        submitLabel="Save Changes"
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        ocidPrefix="edit_lead"
        extraActions={
          <Button
            type="button"
            variant="destructive"
            size="sm"
            className="gap-1.5"
            onClick={() => setShowDeleteConfirm(true)}
            data-ocid="edit_lead.delete_button"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Delete Lead
          </Button>
        }
      >
        {/* ── Contact Information ──────────────────────────────────── */}
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
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                data-ocid="edit_lead.name.input"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="company">Company</Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <Input
                  id="company"
                  className="pl-9"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  data-ocid="edit_lead.company.input"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <Input
                  id="email"
                  type="email"
                  className="pl-9"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  data-ocid="edit_lead.email.input"
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
                  className="pl-9"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  data-ocid="edit_lead.phone.input"
                />
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* ── Lead Details ─────────────────────────────────────────── */}
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
                <SelectTrigger data-ocid="edit_lead.source.select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {LEAD_SOURCES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label>Status</Label>
              <Select
                value={form.status}
                onValueChange={(v) => update("status", v as LeadStatus)}
              >
                <SelectTrigger data-ocid="edit_lead.status.select">
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
                <SelectTrigger data-ocid="edit_lead.priority.select">
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
              <Label>Product</Label>
              <Select
                value={form.product}
                onValueChange={(v) => update("product", v)}
              >
                <SelectTrigger data-ocid="edit_lead.product.select">
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
                  className="pl-9"
                  value={form.value}
                  onChange={(e) => update("value", e.target.value)}
                  data-ocid="edit_lead.value.input"
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
                  data-ocid="edit_lead.follow_up_date.input"
                />
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* ── Assignment ──────────────────────────────────────────── */}
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
                <SelectTrigger data-ocid="edit_lead.assigned_to.select">
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
                <SelectTrigger data-ocid="edit_lead.branch.select">
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

        {/* ── Notes ─────────────────────────────────────────────────── */}
        <section>
          <div className="space-y-1.5">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              rows={4}
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              data-ocid="edit_lead.notes.textarea"
              className="resize-none"
            />
          </div>
        </section>
      </FormPage>

      {showDeleteConfirm && (
        <DeleteConfirm
          leadName={form.name}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setShowDeleteConfirm(false)}
        />
      )}
    </>
  );
}
