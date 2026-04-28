import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Edit,
  IndianRupee,
  Mail,
  MessageSquare,
  Phone,
  Phone as PhoneIcon,
  Plus,
  Tag,
  Trash2,
  TrendingUp,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { Breadcrumb } from "../../components/shared/Breadcrumb";
import { PriorityBadge } from "../../components/shared/PriorityBadge";
import { StatusBadge } from "../../components/shared/StatusBadge";
import { getLeadById } from "../../data/mockLeads";
import type { Activity, LeadStatus, TaskPriority } from "../../types";

// ─── Utils ────────────────────────────────────────────────────────────────────

function leadPriority(value: number): TaskPriority {
  return value >= 1000000 ? "High" : value >= 500000 ? "Medium" : "Low";
}

const STATUS_COLORS: Record<LeadStatus, string> = {
  New: "bg-primary/10 text-primary",
  "In Progress":
    "bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400",
  Converted:
    "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400",
  Rejected: "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400",
};

const ACTIVITY_ICONS: Record<Activity["type"], React.ElementType> = {
  call: PhoneIcon,
  email: Mail,
  meeting: User,
  note: MessageSquare,
  status_change: Tag,
};

const ACTIVITY_COLORS: Record<Activity["type"], string> = {
  call: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
  email: "bg-primary/10 text-primary",
  meeting:
    "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
  note: "bg-muted text-muted-foreground",
  status_change:
    "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground break-words">
          {value}
        </p>
      </div>
    </div>
  );
}

function ActivityTimeline({ activities }: { activities: Activity[] }) {
  if (activities.length === 0) {
    return (
      <div
        className="py-10 text-center"
        data-ocid="lead_detail.activity.empty_state"
      >
        <MessageSquare className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
        <p className="text-sm text-muted-foreground">No activity logged yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-0">
      {activities.map((activity, index) => {
        const Icon = ACTIVITY_ICONS[activity.type] ?? MessageSquare;
        const colorClass =
          ACTIVITY_COLORS[activity.type] ?? "bg-muted text-muted-foreground";
        return (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07 }}
            className="flex gap-3"
            data-ocid={`lead_detail.activity.item.${index + 1}`}
          >
            <div className="flex flex-col items-center">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 ${colorClass}`}
              >
                <Icon className="w-4 h-4" />
              </div>
              {index < activities.length - 1 && (
                <div className="w-px flex-1 bg-border my-1" />
              )}
            </div>
            <div className="flex-1 pb-4 min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <p className="text-sm font-medium text-foreground">
                  {activity.title}
                </p>
                <span className="text-xs text-muted-foreground">
                  {new Date(activity.createdAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">
                {activity.description}
              </p>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <User className="w-3 h-3" />
                {activity.createdBy}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
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
            data-ocid="lead_detail.delete_cancel.button"
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={onConfirm}
            data-ocid="lead_detail.delete_confirm.button"
          >
            Delete Lead
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─── Mock tasks related to lead ───────────────────────────────────────────────

const RELATED_TASKS = [
  {
    id: "t1",
    title: "Send follow-up email with updated proposal",
    dueDate: "2026-05-02",
    status: "Todo",
    assignee: "Priya Sharma",
  },
  {
    id: "t2",
    title: "Schedule KYC document collection",
    dueDate: "2026-05-05",
    status: "In Progress",
    assignee: "Rahul Gupta",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LeadDetailPage() {
  const { leadId } = useParams({ from: "/layout/leads/$leadId" });
  const navigate = useNavigate();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState<string[]>([]);

  // Load from mock store; fall back to a skeleton lead if not found
  const lead = getLeadById(leadId);

  if (!lead) {
    return (
      <div
        className="min-h-full flex items-center justify-center"
        data-ocid="lead_detail.error_state"
      >
        <div className="text-center space-y-3">
          <AlertTriangle className="w-10 h-10 text-muted-foreground mx-auto" />
          <p className="text-sm text-muted-foreground">Lead not found</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate({ to: "/leads" })}
          >
            Back to Leads
          </Button>
        </div>
      </div>
    );
  }

  const priority = leadPriority(lead.value);

  function handleConvert() {
    toast.success(`${lead!.name} marked as Converted`);
  }

  function handleDeleteConfirm() {
    toast.success(`Lead "${lead!.name}" deleted`);
    navigate({ to: "/leads" });
  }

  function addNote() {
    if (noteText.trim()) {
      setNotes((prev) => [noteText.trim(), ...prev]);
      setNoteText("");
    }
  }

  const allNotes = lead.notes ? [lead.notes, ...notes] : notes;

  return (
    <>
      <div className="min-h-full bg-background" data-ocid="lead_detail.page">
        {/* ── Sticky header ──────────────────────────────────────────── */}
        <div className="bg-card border-b border-border sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <Breadcrumb
              items={[{ label: "Leads", href: "/leads" }, { label: lead.name }]}
              className="mb-2"
            />
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex-1 min-w-0">
                <h1 className="text-xl font-display font-bold text-foreground truncate">
                  {lead.name}
                </h1>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {lead.company} · {lead.branchName}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <Badge className={STATUS_COLORS[lead.status]}>
                  {lead.status}
                </Badge>
                <PriorityBadge priority={priority} />
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-1.5"
                  asChild
                  data-ocid="lead_detail.edit_button"
                >
                  <Link to="/leads/$leadId/edit" params={{ leadId: lead.id }}>
                    <Edit className="w-3.5 h-3.5" />
                    Edit
                  </Link>
                </Button>
                {lead.status !== "Converted" && (
                  <Button
                    size="sm"
                    className="gap-1.5"
                    onClick={handleConvert}
                    data-ocid="lead_detail.convert_button"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Convert
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="destructive"
                  className="gap-1.5"
                  onClick={() => setShowDeleteConfirm(true)}
                  data-ocid="lead_detail.delete_button"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Content ─────────────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* ── Left: Lead Info ──────────────────────────────────── */}
            <div className="lg:col-span-1 space-y-4">
              {/* Contact card */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card data-ocid="lead_detail.info.card">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-semibold flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Contact Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <InfoRow icon={Mail} label="Email" value={lead.email} />
                    <InfoRow icon={Phone} label="Phone" value={lead.phone} />
                    <InfoRow
                      icon={Building2}
                      label="Company"
                      value={lead.company}
                    />
                    <InfoRow
                      icon={Building2}
                      label="Branch"
                      value={lead.branchName}
                    />
                    <InfoRow
                      icon={User}
                      label="Assigned To"
                      value={lead.assignedTo}
                    />
                    <Separator />
                    <InfoRow icon={Tag} label="Source" value={lead.source} />
                    <InfoRow
                      icon={TrendingUp}
                      label="Product"
                      value={lead.product}
                    />
                    <InfoRow
                      icon={IndianRupee}
                      label="Deal Value"
                      value={`₹${(lead.value / 100000).toFixed(1)}L (₹${lead.value.toLocaleString("en-IN")})`}
                    />
                    {lead.followUpDate && (
                      <InfoRow
                        icon={CalendarDays}
                        label="Follow-up"
                        value={new Date(lead.followUpDate).toLocaleDateString(
                          "en-IN",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          },
                        )}
                      />
                    )}
                    <InfoRow
                      icon={ArrowRight}
                      label="Created"
                      value={new Date(lead.createdAt).toLocaleDateString(
                        "en-IN",
                        { day: "numeric", month: "long", year: "numeric" },
                      )}
                    />
                  </CardContent>
                </Card>
              </motion.div>

              {/* Related tasks */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Card data-ocid="lead_detail.tasks.card">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-semibold">
                        Related Tasks
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 rounded-lg p-0"
                        asChild
                        data-ocid="lead_detail.add_task.button"
                      >
                        <Link to="/tasks/new">
                          <Plus className="w-3.5 h-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {RELATED_TASKS.map((task, i) => (
                      <div
                        key={task.id}
                        className="p-2.5 rounded-xl border border-border bg-muted/20 space-y-1"
                        data-ocid={`lead_detail.task.item.${i + 1}`}
                      >
                        <p className="text-xs font-medium text-foreground leading-snug">
                          {task.title}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-muted-foreground">
                            Due:{" "}
                            {new Date(task.dueDate).toLocaleDateString(
                              "en-IN",
                              { day: "numeric", month: "short" },
                            )}
                          </span>
                          <StatusBadge status={task.status} />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* ── Right: Timeline + Notes ───────────────────────────── */}
            <div className="lg:col-span-2 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <Tabs defaultValue="activity">
                    <CardHeader className="pb-0">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <CardTitle className="text-sm font-semibold">
                          Lead Activity
                        </CardTitle>
                        <TabsList className="rounded-xl h-8">
                          <TabsTrigger
                            value="activity"
                            className="text-xs rounded-xl h-7"
                            data-ocid="lead_detail.activity.tab"
                          >
                            Timeline
                          </TabsTrigger>
                          <TabsTrigger
                            value="notes"
                            className="text-xs rounded-xl h-7"
                            data-ocid="lead_detail.notes.tab"
                          >
                            Notes
                          </TabsTrigger>
                        </TabsList>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-4">
                      <TabsContent value="activity" className="mt-0">
                        <ActivityTimeline activities={lead.activities} />
                        <Separator className="my-3" />
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full gap-1.5"
                          data-ocid="lead_detail.add_activity.button"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          Log Activity
                        </Button>
                      </TabsContent>

                      <TabsContent value="notes" className="mt-0 space-y-4">
                        <div className="space-y-2">
                          <Textarea
                            placeholder="Add a note about this lead…"
                            value={noteText}
                            onChange={(e) => setNoteText(e.target.value)}
                            rows={3}
                            className="resize-none text-sm rounded-xl"
                            data-ocid="lead_detail.note.textarea"
                          />
                          <Button
                            size="sm"
                            className="gap-1.5 rounded-xl"
                            onClick={addNote}
                            data-ocid="lead_detail.add_note.button"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            Add Note
                          </Button>
                        </div>
                        {allNotes.length === 0 ? (
                          <p
                            className="text-sm text-muted-foreground text-center py-6"
                            data-ocid="lead_detail.notes.empty_state"
                          >
                            No notes yet
                          </p>
                        ) : (
                          <div className="space-y-2">
                            {allNotes.map((n, i) => (
                              <div
                                key={`note-${n.slice(0, 12)}-${i}`}
                                className="bg-muted/30 rounded-xl p-3 border border-border"
                                data-ocid={`lead_detail.note.item.${i + 1}`}
                              >
                                <p className="text-sm text-foreground">{n}</p>
                                <p className="text-xs text-muted-foreground mt-1.5">
                                  {i === 0 ? "Initial note" : "Added recently"}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </TabsContent>
                    </CardContent>
                  </Tabs>
                </Card>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              >
                {[
                  {
                    label: "Activities",
                    value: lead.activities.length,
                    icon: MessageSquare,
                    color: "text-primary",
                  },
                  {
                    label: "Deal Value",
                    value: `₹${(lead.value / 100000).toFixed(1)}L`,
                    icon: IndianRupee,
                    color: "text-green-600",
                  },
                  {
                    label: "Last Updated",
                    value: new Date(lead.updatedAt).toLocaleDateString(
                      "en-IN",
                      { day: "numeric", month: "short" },
                    ),
                    icon: CalendarDays,
                    color: "text-amber-600",
                  },
                ].map(({ label, value, icon: Icon, color }) => (
                  <div
                    key={label}
                    className="bg-card border border-border rounded-2xl p-4 text-center"
                  >
                    <Icon className={`w-5 h-5 mx-auto mb-1.5 ${color}`} />
                    <p className="text-sm font-bold text-foreground">{value}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      {label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {showDeleteConfirm && (
        <DeleteConfirm
          leadName={lead.name}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setShowDeleteConfirm(false)}
        />
      )}
    </>
  );
}
