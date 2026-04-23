import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Download,
  IndianRupee,
  LayoutGrid,
  List,
  Mail,
  Phone,
  Plus,
  TrendingUp,
  User,
  Users,
  XCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DataTable } from "../components/shared/DataTable";
import type { Column } from "../components/shared/DataTable";
import { ModalForm } from "../components/shared/ModalForm";
import { PageHeader } from "../components/shared/PageHeader";
import { PriorityBadge } from "../components/shared/PriorityBadge";
import { StatCard } from "../components/shared/StatCard";
import { StatusBadge } from "../components/shared/StatusBadge";
import { Timeline } from "../components/shared/Timeline";
import { mockLeads } from "../data/mockLeads";
import type { Lead, LeadSource, LeadStatus } from "../types";
import { exportToCSV } from "../utils/csvExport";

// ─── Types ────────────────────────────────────────────────────────────────────

type DragState = { cardId: string; fromCol: string } | null;

// ─── Constants ───────────────────────────────────────────────────────────────

const STATUSES: LeadStatus[] = ["New", "In Progress", "Converted", "Rejected"];

const COLUMN_STYLES: Record<
  LeadStatus,
  { header: string; dot: string; accent: string }
> = {
  New: {
    header: "bg-primary/8 border-primary/20",
    dot: "bg-primary",
    accent: "text-primary",
  },
  "In Progress": {
    header: "bg-amber-50 border-amber-200 dark:bg-amber-900/10",
    dot: "bg-amber-500",
    accent: "text-amber-600",
  },
  Converted: {
    header: "bg-green-50 border-green-200 dark:bg-green-900/10",
    dot: "bg-green-500",
    accent: "text-green-600",
  },
  Rejected: {
    header: "bg-red-50 border-red-200 dark:bg-red-900/10",
    dot: "bg-red-500",
    accent: "text-red-600",
  },
};

const SOURCE_COLORS: Record<LeadSource, string> = {
  Website: "oklch(0.62 0.12 265)",
  Referral: "oklch(0.60 0.1 185)",
  "Cold Call": "oklch(0.68 0.18 75)",
  "Social Media": "oklch(0.55 0.15 155)",
  "Email Campaign": "oklch(0.58 0.12 260)",
  "Walk-in": "oklch(0.63 0.16 30)",
};

const SOURCE_LABELS: LeadSource[] = [
  "Website",
  "Referral",
  "Cold Call",
  "Social Media",
  "Email Campaign",
  "Walk-in",
];

function leadsToCSV(leads: Lead[]): Record<string, unknown>[] {
  return leads.map((l) => ({
    Name: l.name,
    Company: l.company,
    Email: l.email,
    Phone: l.phone,
    Source: l.source,
    Status: l.status,
    "Assigned To": l.assignedTo,
    Branch: l.branchName,
    Product: l.product,
    "Value (₹)": l.value,
    "Follow Up": l.followUpDate ?? "",
    Created: l.createdAt,
  }));
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function LeadKanbanCard({
  lead,
  onDragStart,
  onSelect,
}: {
  lead: Lead;
  onDragStart: (e: React.DragEvent, lead: Lead) => void;
  onSelect: (lead: Lead) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      draggable
      onDragStart={(e) => onDragStart(e as unknown as React.DragEvent, lead)}
      onClick={() => onSelect(lead)}
      className="bg-card border border-border rounded-xl p-3.5 cursor-grab active:cursor-grabbing shadow-card hover:shadow-elevated transition-smooth group"
      data-ocid={`leads.kanban.card.${lead.id}`}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-foreground truncate">
            {lead.name}
          </p>
          <p className="text-[10px] text-muted-foreground truncate mt-0.5">
            {lead.company}
          </p>
        </div>
        <PriorityBadge
          priority={
            lead.value >= 1000000
              ? "High"
              : lead.value >= 500000
                ? "Medium"
                : "Low"
          }
        />
      </div>

      <div className="flex items-center gap-1.5 mb-2.5">
        <span className="text-[10px] font-medium bg-primary/8 text-primary px-1.5 py-0.5 rounded-md">
          {lead.source}
        </span>
        <span className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded-md truncate">
          {lead.product}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
          <User className="w-3 h-3" />
          <span className="truncate max-w-[80px]">{lead.assignedTo}</span>
        </div>
        <span className="text-xs font-bold text-foreground flex items-center gap-0.5">
          <IndianRupee className="w-3 h-3" />
          {(lead.value / 100000).toFixed(1)}L
        </span>
      </div>

      {lead.followUpDate && (
        <div className="mt-2 pt-2 border-t border-border flex items-center gap-1 text-[10px] text-muted-foreground">
          <CalendarDays className="w-3 h-3" />
          Follow-up:{" "}
          {new Date(lead.followUpDate).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
          })}
        </div>
      )}
    </motion.div>
  );
}

function KanbanColumn({
  status,
  leads,
  onDragStart,
  onDragOver,
  onDrop,
  onSelect,
  onAddNew,
}: {
  status: LeadStatus;
  leads: Lead[];
  onDragStart: (e: React.DragEvent, lead: Lead) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent, toCol: LeadStatus) => void;
  onSelect: (lead: Lead) => void;
  onAddNew: (status: LeadStatus) => void;
}) {
  const [isDragOver, setIsDragOver] = useState(false);
  const styles = COLUMN_STYLES[status];

  return (
    <div
      className={cn(
        "flex flex-col min-w-[240px] flex-1 rounded-2xl border transition-smooth",
        isDragOver
          ? "border-primary/50 bg-primary/3"
          : "border-border bg-muted/20",
      )}
      onDragOver={(e) => {
        e.preventDefault();
        onDragOver(e);
        setIsDragOver(true);
      }}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={(e) => {
        onDrop(e, status);
        setIsDragOver(false);
      }}
      data-ocid={`leads.kanban.column.${status.toLowerCase().replace(/ /g, "_")}`}
    >
      {/* Column header */}
      <div
        className={cn(
          "flex items-center justify-between px-4 py-3 rounded-t-2xl border-b",
          styles.header,
        )}
      >
        <div className="flex items-center gap-2">
          <span className={cn("w-2 h-2 rounded-full", styles.dot)} />
          <span className="text-xs font-semibold text-foreground">
            {status}
          </span>
          <span
            className={cn(
              "text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-card border",
              styles.accent,
            )}
          >
            {leads.length}
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="w-6 h-6 rounded-lg"
          onClick={() => onAddNew(status)}
          data-ocid={`leads.kanban.add.${status.toLowerCase().replace(/ /g, "_")}`}
        >
          <Plus className="w-3.5 h-3.5" />
        </Button>
      </div>

      {/* Cards */}
      <ScrollArea className="flex-1 max-h-[520px]">
        <div className="p-3 space-y-2.5">
          {leads.length === 0 ? (
            <div className="py-8 text-center text-[11px] text-muted-foreground">
              No leads
            </div>
          ) : (
            leads.map((lead) => (
              <LeadKanbanCard
                key={lead.id}
                lead={lead}
                onDragStart={onDragStart}
                onSelect={onSelect}
              />
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
}

// ─── Lead Detail Sheet ────────────────────────────────────────────────────────

const MOCK_CALLS = [
  {
    date: "Apr 15, 2025",
    duration: "18 min",
    outcome: "Positive",
    notes: "Client is interested, will review proposal.",
  },
  {
    date: "Mar 28, 2025",
    duration: "9 min",
    outcome: "Follow-up needed",
    notes: "Requested extended repayment schedule.",
  },
  {
    date: "Mar 10, 2025",
    duration: "5 min",
    outcome: "No answer",
    notes: "Left voicemail.",
  },
];

const MOCK_MEETINGS = [
  {
    date: "Apr 12, 2025",
    type: "Video call",
    attendees: "Client, AM",
    outcome: "Term sheet shared",
  },
  {
    date: "Mar 20, 2025",
    type: "In-person",
    attendees: "Client, RM, AM",
    outcome: "Proposal reviewed",
  },
];

function LeadDetailSheet({
  lead,
  open,
  onClose,
}: {
  lead: Lead | null;
  open: boolean;
  onClose: () => void;
}) {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<string[]>([lead?.notes ?? ""]);

  if (!lead) return null;

  const addNote = () => {
    if (note.trim()) {
      setNotes((n) => [note.trim(), ...n]);
      setNote("");
    }
  };

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent
        side="right"
        className="w-full max-w-xl p-0 flex flex-col"
        data-ocid="leads.detail.sheet"
      >
        {/* Header */}
        <SheetHeader className="px-6 py-5 border-b bg-card">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <SheetTitle className="text-base font-display font-bold text-foreground truncate">
                {lead.name}
              </SheetTitle>
              <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                {lead.company}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <StatusBadge status={lead.status} />
              <span className="text-sm font-bold text-foreground flex items-center gap-0.5">
                <IndianRupee className="w-3.5 h-3.5" />
                {(lead.value / 100000).toFixed(1)}L
              </span>
            </div>
          </div>
        </SheetHeader>

        <Tabs
          defaultValue="overview"
          className="flex flex-col flex-1 overflow-hidden"
        >
          <TabsList className="mx-6 mt-4 mb-2 rounded-xl self-start overflow-x-auto flex-wrap">
            {["overview", "activity", "notes", "calls", "meetings"].map((t) => (
              <TabsTrigger
                key={t}
                value={t}
                className="text-xs rounded-xl capitalize"
                data-ocid={`leads.detail.${t}.tab`}
              >
                {t}
              </TabsTrigger>
            ))}
          </TabsList>

          <ScrollArea className="flex-1 px-6 pb-6">
            {/* Overview */}
            <TabsContent value="overview" className="mt-0 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: Mail, label: "Email", value: lead.email },
                  { icon: Phone, label: "Phone", value: lead.phone },
                  { icon: User, label: "Assigned To", value: lead.assignedTo },
                  { icon: ArrowRight, label: "Source", value: lead.source },
                  { icon: Building2, label: "Branch", value: lead.branchName },
                  { icon: TrendingUp, label: "Product", value: lead.product },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="bg-muted/30 rounded-xl p-3 border border-border"
                  >
                    <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide flex items-center gap-1">
                      <Icon className="w-3 h-3" />
                      {label}
                    </p>
                    <p className="text-xs font-semibold text-foreground mt-1 truncate">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="bg-muted/30 rounded-xl p-3 border border-border">
                <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide mb-1">
                  Created
                </p>
                <p className="text-xs text-foreground">
                  {new Date(lead.createdAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </TabsContent>

            {/* Activity */}
            <TabsContent value="activity" className="mt-0">
              <Timeline
                activities={lead.activities}
                data-ocid="leads.detail.activity.timeline"
              />
            </TabsContent>

            {/* Notes */}
            <TabsContent value="notes" className="mt-0 space-y-4">
              <div className="space-y-2">
                <Textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Add a note…"
                  className="rounded-xl text-sm resize-none"
                  rows={3}
                  data-ocid="leads.detail.note.textarea"
                />
                <Button
                  size="sm"
                  className="rounded-xl gap-1.5"
                  onClick={addNote}
                  data-ocid="leads.detail.add_note.button"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Note
                </Button>
              </div>
              <div className="space-y-2">
                {notes.filter(Boolean).map((n, i) => (
                  <div
                    key={`note-${i}-${n.slice(0, 8)}`}
                    className="bg-muted/30 rounded-xl p-3 border border-border"
                  >
                    <p className="text-xs text-foreground">{n}</p>
                    <p className="text-[10px] text-muted-foreground mt-1.5">
                      {i === 0 ? "Just now" : `Note ${i + 1}`}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Calls */}
            <TabsContent value="calls" className="mt-0">
              <div className="space-y-2">
                {MOCK_CALLS.map((c, i) => (
                  <div
                    key={`call-${c.date}-${i}`}
                    className="bg-muted/30 rounded-xl p-3 border border-border"
                    data-ocid={`leads.detail.call.item.${i + 1}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-foreground">
                        {c.date}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {c.duration}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-[10px] mb-1">
                      {c.outcome}
                    </Badge>
                    <p className="text-[11px] text-muted-foreground">
                      {c.notes}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Meetings */}
            <TabsContent value="meetings" className="mt-0">
              <div className="space-y-2">
                {MOCK_MEETINGS.map((m, i) => (
                  <div
                    key={`meeting-${m.date}-${i}`}
                    className="bg-muted/30 rounded-xl p-3 border border-border"
                    data-ocid={`leads.detail.meeting.item.${i + 1}`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-foreground">
                        {m.date}
                      </span>
                      <Badge variant="outline" className="text-[10px]">
                        {m.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                      <Users className="w-3 h-3" />
                      {m.attendees}
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-1">
                      {m.outcome}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}

// ─── Table columns ────────────────────────────────────────────────────────────

function buildColumns(onSelect: (lead: Lead) => void): Column<Lead>[] {
  return [
    {
      key: "name",
      header: "Lead",
      sortable: true,
      render: (row) => (
        <button
          type="button"
          className="text-left hover:text-primary transition-colors"
          onClick={() => onSelect(row)}
          data-ocid={`leads.table.row.name.${row.id}`}
        >
          <p className="text-xs font-semibold text-foreground">{row.name}</p>
          <p className="text-[10px] text-muted-foreground">{row.company}</p>
        </button>
      ),
    },
    {
      key: "source",
      header: "Source",
      sortable: true,
      render: (row) => (
        <span className="text-xs text-muted-foreground">{row.source}</span>
      ),
    },
    {
      key: "assignedTo",
      header: "Assigned To",
      render: (row) => (
        <span className="text-xs text-foreground">{row.assignedTo}</span>
      ),
    },
    {
      key: "value",
      header: "Value",
      align: "right",
      render: (row) => (
        <span className="text-xs font-semibold text-foreground flex items-center justify-end gap-0.5">
          <IndianRupee className="w-3 h-3" />
          {(row.value / 100000).toFixed(1)}L
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      key: "followUpDate",
      header: "Follow-up",
      render: (row) =>
        row.followUpDate ? (
          <span className="text-xs text-muted-foreground">
            {new Date(row.followUpDate).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
            })}
          </span>
        ) : (
          <span className="text-xs text-muted-foreground">—</span>
        ),
    },
    {
      key: "id",
      header: "",
      render: (row) => (
        <Button
          variant="ghost"
          size="sm"
          className="h-7 text-xs rounded-xl"
          onClick={() => onSelect(row)}
          data-ocid={`leads.table.view.${row.id}`}
        >
          View
        </Button>
      ),
    },
  ];
}

// ─── Analytics section ────────────────────────────────────────────────────────

function LeadAnalytics({ leads }: { leads: Lead[] }) {
  const sourceData = SOURCE_LABELS.map((src) => {
    const srcLeads = leads.filter((l) => l.source === src);
    const converted = srcLeads.filter((l) => l.status === "Converted").length;
    return {
      source: src,
      total: srcLeads.length,
      converted,
      rate:
        srcLeads.length > 0
          ? Math.round((converted / srcLeads.length) * 100)
          : 0,
      fill: SOURCE_COLORS[src],
    };
  }).filter((d) => d.total > 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {/* Donut */}
      <div className="bg-card rounded-2xl border border-border shadow-card p-5">
        <p className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-primary" />
          Lead Sources
        </p>
        <div className="flex gap-4 items-center flex-wrap sm:flex-nowrap">
          <ResponsiveContainer width="100%" height={180} minWidth={140}>
            <PieChart>
              <Pie
                data={sourceData}
                dataKey="total"
                nameKey="source"
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={75}
                strokeWidth={2}
              >
                {sourceData.map((d, i) => (
                  <Cell key={`pie-${d.source}-${i}`} fill={d.fill} />
                ))}
              </Pie>
              <Tooltip
                formatter={(v: number) => [`${v} leads`, "Total"]}
                contentStyle={{ fontSize: 11, borderRadius: 8 }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex-1 min-w-[120px] space-y-1.5">
            {sourceData.map((d) => (
              <div key={d.source} className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: d.fill }}
                />
                <span className="text-[11px] text-muted-foreground truncate flex-1">
                  {d.source}
                </span>
                <span className="text-[11px] font-semibold text-foreground">
                  {d.total}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bar chart: conversion rate */}
      <div className="bg-card rounded-2xl border border-border shadow-card p-5">
        <p className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-primary" />
          Conversion Rate by Source
        </p>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart
            data={sourceData}
            margin={{ top: 4, right: 4, left: -24, bottom: 4 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.91 0.01 0)" />
            <XAxis
              dataKey="source"
              tick={{ fontSize: 9 }}
              tickLine={false}
              axisLine={false}
              interval={0}
              angle={-30}
              textAnchor="end"
              height={42}
            />
            <YAxis
              tick={{ fontSize: 9 }}
              tickLine={false}
              axisLine={false}
              unit="%"
            />
            <Tooltip
              formatter={(v: number) => [`${v}%`, "Conversion"]}
              contentStyle={{ fontSize: 11, borderRadius: 8 }}
            />
            <Legend iconSize={8} wrapperStyle={{ fontSize: 10 }} />
            <Bar dataKey="rate" name="Conversion %" radius={[4, 4, 0, 0]}>
              {sourceData.map((d, i) => (
                <Cell key={`bar-${d.source}-${i}`} fill={d.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>(mockLeads);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [dragState, setDragState] = useState<DragState>(null);

  // Table filters
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<LeadStatus | "All">("All");
  const [filterSource, setFilterSource] = useState<LeadSource | "All">("All");

  const stats = useMemo(
    () => ({
      total: leads.length,
      new: leads.filter((l) => l.status === "New").length,
      inProgress: leads.filter((l) => l.status === "In Progress").length,
      converted: leads.filter((l) => l.status === "Converted").length,
      rejected: leads.filter((l) => l.status === "Rejected").length,
    }),
    [leads],
  );

  // Kanban drag
  const handleDragStart = (e: React.DragEvent, lead: Lead) => {
    setDragState({ cardId: lead.id, fromCol: lead.status });
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, toCol: LeadStatus) => {
    e.preventDefault();
    if (!dragState || dragState.fromCol === toCol) return;
    setLeads((prev) =>
      prev.map((l) =>
        l.id === dragState.cardId ? { ...l, status: toCol } : l,
      ),
    );
    setDragState(null);
  };

  const openLead = useCallback((lead: Lead) => {
    setSelectedLead(lead);
    setSheetOpen(true);
  }, []);

  const handleAdd = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setShowAddModal(false);
    }, 1200);
  };

  // Filtered table data
  const filteredLeads = useMemo(() => {
    let data = leads;
    if (filterStatus !== "All")
      data = data.filter((l) => l.status === filterStatus);
    if (filterSource !== "All")
      data = data.filter((l) => l.source === filterSource);
    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          l.company.toLowerCase().includes(q) ||
          l.assignedTo.toLowerCase().includes(q),
      );
    }
    return data;
  }, [leads, filterStatus, filterSource, search]);

  const columns = useMemo(() => buildColumns(openLead), [openLead]);

  function handleExportCSV() {
    exportToCSV(leadsToCSV(filteredLeads), "leads_export");
  }

  return (
    <div>
      <PageHeader
        title="Lead Management"
        subtitle={`${stats.total} total leads · ${stats.converted} converted`}
        breadcrumbs={[{ label: "Home" }, { label: "Leads / CRM" }]}
        actions={
          <Button
            size="sm"
            className="rounded-xl gap-1.5"
            onClick={() => setShowAddModal(true)}
            data-ocid="leads.add_lead.open_modal_button"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Lead
          </Button>
        }
        data-ocid="leads.header"
      />

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mb-4 sm:mb-5">
        <StatCard
          title="Total Leads"
          value={stats.total}
          icon={Users}
          change={8}
          data-ocid="leads.stat.total"
        />
        <StatCard
          title="New"
          value={stats.new}
          icon={Plus}
          iconColor="text-primary"
          data-ocid="leads.stat.new"
        />
        <StatCard
          title="In Progress"
          value={stats.inProgress}
          icon={ArrowRight}
          iconColor="text-amber-500"
          data-ocid="leads.stat.in_progress"
        />
        <StatCard
          title="Converted"
          value={stats.converted}
          icon={CheckCircle2}
          iconColor="text-green-600"
          change={12}
          data-ocid="leads.stat.converted"
        />
        <StatCard
          title="Rejected"
          value={stats.rejected}
          icon={XCircle}
          iconColor="text-red-500"
          change={-3}
          data-ocid="leads.stat.rejected"
        />
      </div>

      {/* Views */}
      <Tabs defaultValue="kanban" data-ocid="leads.view_tabs">
        <TabsList className="mb-4 rounded-xl">
          <TabsTrigger
            value="kanban"
            data-ocid="leads.kanban.tab"
            className="gap-1.5 text-xs rounded-xl"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            Kanban Board
          </TabsTrigger>
          <TabsTrigger
            value="table"
            data-ocid="leads.table.tab"
            className="gap-1.5 text-xs rounded-xl"
          >
            <List className="w-3.5 h-3.5" />
            Table View
          </TabsTrigger>
        </TabsList>

        {/* Kanban — desktop: horizontal scroll; mobile: vertical columns */}
        <TabsContent value="kanban">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Mobile: stacked columns */}
            <div className="flex flex-col gap-3 md:hidden">
              {STATUSES.map((status) => (
                <KanbanColumn
                  key={status}
                  status={status}
                  leads={leads.filter((l) => l.status === status)}
                  onDragStart={handleDragStart}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onSelect={openLead}
                  onAddNew={() => setShowAddModal(true)}
                />
              ))}
            </div>
            {/* Desktop: horizontal scroll */}
            <div className="hidden md:flex gap-3 overflow-x-auto pb-3">
              {STATUSES.map((status) => (
                <KanbanColumn
                  key={status}
                  status={status}
                  leads={leads.filter((l) => l.status === status)}
                  onDragStart={handleDragStart}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onSelect={openLead}
                  onAddNew={() => setShowAddModal(true)}
                />
              ))}
            </div>
          </motion.div>
        </TabsContent>

        {/* Table */}
        <TabsContent value="table">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-card rounded-2xl border border-border shadow-card"
          >
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-3 sm:p-4 border-b border-border">
              <div className="relative flex-1 min-w-[160px]">
                <Input
                  placeholder="Search leads…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="rounded-xl text-sm h-8 pl-3"
                  data-ocid="leads.table.search.input"
                />
              </div>
              <Select
                value={filterStatus}
                onValueChange={(v) => setFilterStatus(v as LeadStatus | "All")}
              >
                <SelectTrigger
                  className="w-[120px] sm:w-[130px] rounded-xl h-8 text-xs"
                  data-ocid="leads.table.status.select"
                >
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Statuses</SelectItem>
                  {STATUSES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={filterSource}
                onValueChange={(v) => setFilterSource(v as LeadSource | "All")}
              >
                <SelectTrigger
                  className="w-[130px] sm:w-[150px] rounded-xl h-8 text-xs"
                  data-ocid="leads.table.source.select"
                >
                  <SelectValue placeholder="Source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Sources</SelectItem>
                  {SOURCE_LABELS.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                size="sm"
                variant="outline"
                className="h-8 rounded-xl gap-1.5 text-xs"
                onClick={handleExportCSV}
                data-ocid="leads.table.export_csv.button"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Export CSV</span>
              </Button>
            </div>
            <div className="overflow-x-auto p-5">
              <DataTable
                data={filteredLeads}
                columns={columns}
                searchKeys={["name", "company", "assignedTo"]}
                searchPlaceholder="Search leads…"
                data-ocid="leads.table"
              />
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>

      {/* Analytics */}
      <LeadAnalytics leads={leads} />

      {/* Lead Detail Sheet */}
      <LeadDetailSheet
        lead={selectedLead}
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
      />

      {/* Add Lead Modal */}
      <ModalForm
        open={showAddModal}
        onOpenChange={setShowAddModal}
        title="Add New Lead"
        description="Enter lead contact and product details."
        onSubmit={handleAdd}
        submitLabel="Create Lead"
        loading={saving}
        data-ocid="add_lead"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-xs">Contact Name</Label>
              <Input
                placeholder="Full name"
                className="rounded-xl text-sm"
                data-ocid="add_lead.name.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Company</Label>
              <Input
                placeholder="Company name"
                className="rounded-xl text-sm"
                data-ocid="add_lead.company.input"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-xs">Phone</Label>
              <Input
                placeholder="+91 …"
                className="rounded-xl text-sm"
                data-ocid="add_lead.phone.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Email</Label>
              <Input
                type="email"
                placeholder="email@company.com"
                className="rounded-xl text-sm"
                data-ocid="add_lead.email.input"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-xs">Lead Source</Label>
              <Select>
                <SelectTrigger
                  className="rounded-xl text-sm"
                  data-ocid="add_lead.source.select"
                >
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
                <SelectContent>
                  {SOURCE_LABELS.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Loan Value (₹)</Label>
              <Input
                type="number"
                placeholder="500000"
                className="rounded-xl text-sm"
                data-ocid="add_lead.value.input"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Notes</Label>
            <Textarea
              placeholder="Initial qualification notes…"
              rows={3}
              className="rounded-xl text-sm resize-none"
              data-ocid="add_lead.notes.textarea"
            />
          </div>
        </div>
      </ModalForm>
    </div>
  );
}
