import { e as createLucideIcon, j as jsxRuntimeExports, U as Users, m as motion, h as cn, u as useNavigate, r as reactExports, B as Button, a as TrendingUp, i as Building2, p as User, q as Badge } from "./index-CgV9Taym.js";
import { I as Input } from "./input-CQX-6uHe.js";
import { L as LayoutGrid, D as DataTable, S as ScrollArea } from "./DataTable-BoxipDIM.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BSYwbXVq.js";
import { S as Sheet, a as SheetContent, b as SheetHeader, c as SheetTitle } from "./sheet-zOTEzS56.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-C2Wpqlzr.js";
import { T as Textarea } from "./textarea-DRhbSqfF.js";
import { P as PageHeader } from "./PageHeader-CHVHFP_Q.js";
import { P as PriorityBadge } from "./PriorityBadge-C2Id1hb0.js";
import { S as StatCard } from "./StatCard-DkWGxI9F.js";
import { S as StatusBadge } from "./StatusBadge-BopRiVPx.js";
import { A as ArrowRight } from "./arrow-right-DGj6Aqng.js";
import { F as FileText } from "./file-text-D2QEU7vO.js";
import { M as Mail } from "./mail-DtpfkiRi.js";
import { P as Phone } from "./phone-B0agrxx4.js";
import { C as Calendar } from "./calendar-B7TqCTx5.js";
import { m as mockLeads } from "./mockLeads-Dc7n7Nj3.js";
import { e as exportToCSV } from "./csvExport-CI-f4_Rc.js";
import { P as Plus } from "./plus-C9sMXHJA.js";
import { C as CircleCheck } from "./circle-check-DLxW8y4N.js";
import { C as CircleX } from "./circle-x-BmYOJkkP.js";
import { D as Download } from "./download-CT_NJYb_.js";
import { I as IndianRupee } from "./indian-rupee-BvtpXdiF.js";
import { E as Eye } from "./eye-BK4ofIs8.js";
import { S as SquarePen } from "./square-pen-DGyTVHfZ.js";
import { R as ResponsiveContainer, a as Cell, T as Tooltip, C as CartesianGrid, X as XAxis, Y as YAxis, L as Legend, B as Bar } from "./generateCategoricalChart-BdurIGga.js";
import { P as PieChart, a as Pie } from "./PieChart-Cfyalh1f.js";
import { B as BarChart } from "./BarChart-U3L8K1-a.js";
import { C as CalendarDays } from "./calendar-days-C9hU70Su.js";
import "./EmptyState-COP87N-z.js";
import "./index-DD6-NRsj.js";
import "./minus-D6KT2NO-.js";
import "./triangle-alert-t2GMGPuS.js";
import "./zap-D7uWetWS.js";
import "./card-BIrGk5lN.js";
import "./PolarAngleAxis-DQ_IuN8o.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
];
const List = createLucideIcon("list", __iconNode);
const activityIcons = {
  call: Phone,
  email: Mail,
  meeting: Users,
  note: FileText,
  status_change: ArrowRight
};
const activityColors = {
  call: "bg-primary/10 text-primary",
  email: "bg-secondary/10 text-secondary",
  meeting: "bg-accent/10 text-accent-foreground",
  note: "bg-muted text-muted-foreground",
  status_change: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
};
function Timeline({ activities, "data-ocid": dataOcid }) {
  if (activities.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-center py-6", children: "No activity yet." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": dataOcid, className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-5 top-0 bottom-0 w-px bg-border" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: activities.map((activity, i) => {
      const Icon = activityIcons[activity.type] ?? FileText;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -8 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: i * 0.05 },
          "data-ocid": `timeline.item.${i + 1}`,
          className: "relative flex gap-4 pl-1",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn(
                  "relative z-10 flex items-center justify-center w-8 h-8 rounded-full shrink-0 border-2 border-background",
                  activityColors[activity.type]
                ),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 pb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: activity.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("time", { className: "text-[10px] text-muted-foreground whitespace-nowrap mt-0.5", children: new Date(activity.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric"
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: activity.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mt-1 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-2.5 h-2.5" }),
                activity.createdBy
              ] })
            ] })
          ]
        },
        activity.id
      );
    }) })
  ] });
}
const STATUSES = ["New", "In Progress", "Converted", "Rejected"];
const COLUMN_STYLES = {
  New: {
    header: "bg-primary/8 border-primary/20",
    dot: "bg-primary",
    accent: "text-primary"
  },
  "In Progress": {
    header: "bg-amber-50 border-amber-200 dark:bg-amber-900/10",
    dot: "bg-amber-500",
    accent: "text-amber-600"
  },
  Converted: {
    header: "bg-green-50 border-green-200 dark:bg-green-900/10",
    dot: "bg-green-500",
    accent: "text-green-600"
  },
  Rejected: {
    header: "bg-red-50 border-red-200 dark:bg-red-900/10",
    dot: "bg-red-500",
    accent: "text-red-600"
  }
};
const SOURCE_COLORS = {
  Website: "oklch(0.62 0.12 265)",
  Referral: "oklch(0.60 0.1 185)",
  "Cold Call": "oklch(0.68 0.18 75)",
  "Social Media": "oklch(0.55 0.15 155)",
  "Email Campaign": "oklch(0.58 0.12 260)",
  "Walk-in": "oklch(0.63 0.16 30)"
};
const SOURCE_LABELS = [
  "Website",
  "Referral",
  "Cold Call",
  "Social Media",
  "Email Campaign",
  "Walk-in"
];
function leadPriority(value) {
  return value >= 1e6 ? "High" : value >= 5e5 ? "Medium" : "Low";
}
function leadsToCSV(leads) {
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
    Created: l.createdAt
  }));
}
function LeadKanbanCard({
  lead,
  onDragStart,
  onView,
  onEdit
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 6 },
      animate: { opacity: 1, y: 0 },
      whileHover: { scale: 1.01 },
      draggable: true,
      onDragStart: (e) => onDragStart(e, lead),
      className: "bg-card border border-border rounded-xl p-3.5 shadow-card hover:shadow-elevated transition-smooth group",
      "data-ocid": `leads.kanban.card.${lead.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => onView(lead),
              className: "flex-1 min-w-0 text-left",
              "data-ocid": `leads.kanban.view.${lead.id}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground truncate hover:text-primary transition-colors", children: lead.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate mt-0.5", children: lead.company })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: leadPriority(lead.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium bg-primary/8 text-primary px-1.5 py-0.5 rounded-md", children: lead.source }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded-md truncate", children: lead.product })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[10px] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[80px]", children: lead.assignedTo })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-foreground flex items-center gap-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "w-3 h-3" }),
            (lead.value / 1e5).toFixed(1),
            "L"
          ] })
        ] }),
        lead.followUpDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center gap-1 text-[10px] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-3 h-3" }),
          "Follow-up:",
          " ",
          new Date(lead.followUpDate).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short"
          })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 pt-2 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "h-6 text-[10px] rounded-lg flex-1 gap-1",
              onClick: () => onView(lead),
              "data-ocid": `leads.kanban.view_button.${lead.id}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3" }),
                "View"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "h-6 text-[10px] rounded-lg flex-1 gap-1",
              onClick: () => onEdit(lead),
              "data-ocid": `leads.kanban.edit_button.${lead.id}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-3 h-3" }),
                "Edit"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function KanbanColumn({
  status,
  leads,
  onDragStart,
  onDragOver,
  onDrop,
  onView,
  onEdit,
  onAddNew
}) {
  const [isDragOver, setIsDragOver] = reactExports.useState(false);
  const styles = COLUMN_STYLES[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex flex-col min-w-[240px] flex-1 rounded-2xl border transition-smooth",
        isDragOver ? "border-primary/50 bg-primary/3" : "border-border bg-muted/20"
      ),
      onDragOver: (e) => {
        e.preventDefault();
        onDragOver(e);
        setIsDragOver(true);
      },
      onDragLeave: () => setIsDragOver(false),
      onDrop: (e) => {
        onDrop(e, status);
        setIsDragOver(false);
      },
      "data-ocid": `leads.kanban.column.${status.toLowerCase().replace(/ /g, "_")}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "flex items-center justify-between px-4 py-3 rounded-t-2xl border-b",
              styles.header
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("w-2 h-2 rounded-full", styles.dot) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: status }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-card border",
                      styles.accent
                    ),
                    children: leads.length
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "w-6 h-6 rounded-lg",
                  onClick: () => onAddNew(status),
                  "data-ocid": `leads.kanban.add.${status.toLowerCase().replace(/ /g, "_")}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "flex-1 max-h-[520px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 space-y-2.5", children: leads.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8 text-center text-[11px] text-muted-foreground", children: "No leads" }) : leads.map((lead) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          LeadKanbanCard,
          {
            lead,
            onDragStart,
            onView,
            onEdit
          },
          lead.id
        )) }) })
      ]
    }
  );
}
const MOCK_CALLS = [
  {
    date: "Apr 15, 2025",
    duration: "18 min",
    outcome: "Positive",
    notes: "Client is interested, will review proposal."
  },
  {
    date: "Mar 28, 2025",
    duration: "9 min",
    outcome: "Follow-up needed",
    notes: "Requested extended repayment schedule."
  },
  {
    date: "Mar 10, 2025",
    duration: "5 min",
    outcome: "No answer",
    notes: "Left voicemail."
  }
];
const MOCK_MEETINGS = [
  {
    date: "Apr 12, 2025",
    type: "Video call",
    attendees: "Client, AM",
    outcome: "Term sheet shared"
  },
  {
    date: "Mar 20, 2025",
    type: "In-person",
    attendees: "Client, RM, AM",
    outcome: "Proposal reviewed"
  }
];
function LeadDetailSheet({
  lead,
  open,
  onClose,
  onNavigateToDetail,
  onNavigateToEdit
}) {
  const [note, setNote] = reactExports.useState("");
  const [notes, setNotes] = reactExports.useState([(lead == null ? void 0 : lead.notes) ?? ""]);
  if (!lead) return null;
  const addNote = () => {
    if (note.trim()) {
      setNotes((n) => [note.trim(), ...n]);
      setNote("");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SheetContent,
    {
      side: "right",
      className: "w-full max-w-xl p-0 flex flex-col",
      "data-ocid": "leads.detail.sheet",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetHeader, { className: "px-6 py-5 border-b bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "text-base font-display font-bold text-foreground truncate", children: lead.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-3.5 h-3.5" }),
                lead.company
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: lead.status }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-foreground flex items-center gap-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "w-3.5 h-3.5" }),
                (lead.value / 1e5).toFixed(1),
                "L"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "flex-1 h-7 text-xs rounded-xl gap-1.5",
                onClick: () => {
                  onClose();
                  onNavigateToDetail(lead);
                },
                "data-ocid": "leads.detail.view_full.button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3" }),
                  "Full View"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "flex-1 h-7 text-xs rounded-xl gap-1.5",
                onClick: () => {
                  onClose();
                  onNavigateToEdit(lead);
                },
                "data-ocid": "leads.detail.edit.button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-3 h-3" }),
                  "Edit Lead"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Tabs,
          {
            defaultValue: "overview",
            className: "flex flex-col flex-1 overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { className: "mx-6 mt-4 mb-2 rounded-xl self-start overflow-x-auto flex-wrap", children: ["overview", "activity", "notes", "calls", "meetings"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                TabsTrigger,
                {
                  value: t,
                  className: "text-xs rounded-xl capitalize",
                  "data-ocid": `leads.detail.${t}.tab`,
                  children: t
                },
                t
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(ScrollArea, { className: "flex-1 px-6 pb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "overview", className: "mt-0 space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
                    { icon: Mail, label: "Email", value: lead.email },
                    { icon: Phone, label: "Phone", value: lead.phone },
                    { icon: User, label: "Assigned To", value: lead.assignedTo },
                    { icon: ArrowRight, label: "Source", value: lead.source },
                    { icon: Building2, label: "Branch", value: lead.branchName },
                    { icon: TrendingUp, label: "Product", value: lead.product }
                  ].map(({ icon: Icon, label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "bg-muted/30 rounded-xl p-3 border border-border",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] font-medium text-muted-foreground uppercase tracking-wide flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3 h-3" }),
                          label
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mt-1 truncate", children: value })
                      ]
                    },
                    label
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 rounded-xl p-3 border border-border", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-medium text-muted-foreground uppercase tracking-wide mb-1", children: "Created" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground", children: new Date(lead.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric"
                    }) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "activity", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Timeline,
                  {
                    activities: lead.activities,
                    "data-ocid": "leads.detail.activity.timeline"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "notes", className: "mt-0 space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        value: note,
                        onChange: (e) => setNote(e.target.value),
                        placeholder: "Add a note…",
                        className: "rounded-xl text-sm resize-none",
                        rows: 3,
                        "data-ocid": "leads.detail.note.textarea"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        className: "rounded-xl gap-1.5",
                        onClick: addNote,
                        "data-ocid": "leads.detail.add_note.button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
                          "Add Note"
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: notes.filter(Boolean).map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "bg-muted/30 rounded-xl p-3 border border-border",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground", children: n }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-1.5", children: i === 0 ? "Just now" : `Note ${i + 1}` })
                      ]
                    },
                    `note-${i}-${n.slice(0, 8)}`
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "calls", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: MOCK_CALLS.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "bg-muted/30 rounded-xl p-3 border border-border",
                    "data-ocid": `leads.detail.call.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: c.date }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: c.duration })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] mb-1", children: c.outcome }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: c.notes })
                    ]
                  },
                  `call-${c.date}-${i}`
                )) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "meetings", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: MOCK_MEETINGS.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "bg-muted/30 rounded-xl p-3 border border-border",
                    "data-ocid": `leads.detail.meeting.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: m.date }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", children: m.type })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[10px] text-muted-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3 h-3" }),
                        m.attendees
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-1", children: m.outcome })
                    ]
                  },
                  `meeting-${m.date}-${i}`
                )) }) })
              ] })
            ]
          }
        )
      ]
    }
  ) });
}
function buildColumns(onView, onEdit) {
  return [
    {
      key: "name",
      header: "Lead",
      sortable: true,
      render: (row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "text-left hover:text-primary transition-colors",
          onClick: () => onView(row),
          "data-ocid": `leads.table.row.name.${row.id}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: row.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: row.company })
          ]
        }
      )
    },
    {
      key: "source",
      header: "Source",
      sortable: true,
      render: (row) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: row.source })
    },
    {
      key: "assignedTo",
      header: "Assigned To",
      render: (row) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground", children: row.assignedTo })
    },
    {
      key: "value",
      header: "Value",
      align: "right",
      render: (row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-foreground flex items-center justify-end gap-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "w-3 h-3" }),
        (row.value / 1e5).toFixed(1),
        "L"
      ] })
    },
    {
      key: "status",
      header: "Status",
      render: (row) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: row.status })
    },
    {
      key: "followUpDate",
      header: "Follow-up",
      render: (row) => row.followUpDate ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: new Date(row.followUpDate).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short"
      }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "—" })
    },
    {
      key: "id",
      header: "",
      render: (row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-7 text-xs rounded-xl gap-1",
            onClick: () => onView(row),
            "data-ocid": `leads.table.view.${row.id}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3" }),
              "View"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "h-7 text-xs rounded-xl gap-1",
            onClick: () => onEdit(row),
            "data-ocid": `leads.table.edit.${row.id}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-3 h-3" }),
              "Edit"
            ]
          }
        )
      ] })
    }
  ];
}
function LeadAnalytics({ leads }) {
  const sourceData = SOURCE_LABELS.map((src) => {
    const srcLeads = leads.filter((l) => l.source === src);
    const converted = srcLeads.filter((l) => l.status === "Converted").length;
    return {
      source: src,
      total: srcLeads.length,
      converted,
      rate: srcLeads.length > 0 ? Math.round(converted / srcLeads.length * 100) : 0,
      fill: SOURCE_COLORS[src]
    };
  }).filter((d) => d.total > 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 12 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.4 },
      className: "mt-6 grid grid-cols-1 md:grid-cols-2 gap-4",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border shadow-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-primary" }),
            "Lead Sources"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-center flex-wrap sm:flex-nowrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 180, minWidth: 140, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Pie,
                {
                  data: sourceData,
                  dataKey: "total",
                  nameKey: "source",
                  cx: "50%",
                  cy: "50%",
                  innerRadius: 45,
                  outerRadius: 75,
                  strokeWidth: 2,
                  children: sourceData.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: d.fill }, `pie-${d.source}-${i}`))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Tooltip,
                {
                  formatter: (v) => [`${v} leads`, "Total"],
                  contentStyle: { fontSize: 11, borderRadius: 8 }
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-[120px] space-y-1.5", children: sourceData.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "w-2.5 h-2.5 rounded-full shrink-0",
                  style: { background: d.fill }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground truncate flex-1", children: d.source }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-foreground", children: d.total })
            ] }, d.source)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border shadow-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary" }),
            "Conversion Rate by Source"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 180, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            BarChart,
            {
              data: sourceData,
              margin: { top: 4, right: 4, left: -24, bottom: 4 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "oklch(0.91 0.01 0)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  XAxis,
                  {
                    dataKey: "source",
                    tick: { fontSize: 9 },
                    tickLine: false,
                    axisLine: false,
                    interval: 0,
                    angle: -30,
                    textAnchor: "end",
                    height: 42
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  YAxis,
                  {
                    tick: { fontSize: 9 },
                    tickLine: false,
                    axisLine: false,
                    unit: "%"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tooltip,
                  {
                    formatter: (v) => [`${v}%`, "Conversion"],
                    contentStyle: { fontSize: 11, borderRadius: 8 }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { iconSize: 8, wrapperStyle: { fontSize: 10 } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "rate", name: "Conversion %", radius: [4, 4, 0, 0], children: sourceData.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: d.fill }, `bar-${d.source}-${i}`)) })
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
function LeadsPage() {
  const navigate = useNavigate();
  const [leads, setLeads] = reactExports.useState(mockLeads);
  const [selectedLead, setSelectedLead] = reactExports.useState(null);
  const [sheetOpen, setSheetOpen] = reactExports.useState(false);
  const [dragState, setDragState] = reactExports.useState(null);
  const [search, setSearch] = reactExports.useState("");
  const [filterStatus, setFilterStatus] = reactExports.useState("All");
  const [filterSource, setFilterSource] = reactExports.useState("All");
  const stats = reactExports.useMemo(
    () => ({
      total: leads.length,
      new: leads.filter((l) => l.status === "New").length,
      inProgress: leads.filter((l) => l.status === "In Progress").length,
      converted: leads.filter((l) => l.status === "Converted").length,
      rejected: leads.filter((l) => l.status === "Rejected").length
    }),
    [leads]
  );
  const handleDragStart = (e, lead) => {
    setDragState({ cardId: lead.id, fromCol: lead.status });
    e.dataTransfer.effectAllowed = "move";
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  const handleDrop = (e, toCol) => {
    e.preventDefault();
    if (!dragState || dragState.fromCol === toCol) return;
    setLeads(
      (prev) => prev.map(
        (l) => l.id === dragState.cardId ? { ...l, status: toCol } : l
      )
    );
    setDragState(null);
  };
  const openSheet = reactExports.useCallback((lead) => {
    setSelectedLead(lead);
    setSheetOpen(true);
  }, []);
  const navigateToDetail = reactExports.useCallback(
    (lead) => navigate({ to: "/leads/$leadId", params: { leadId: lead.id } }),
    [navigate]
  );
  const navigateToEdit = reactExports.useCallback(
    (lead) => navigate({ to: "/leads/$leadId/edit", params: { leadId: lead.id } }),
    [navigate]
  );
  const filteredLeads = reactExports.useMemo(() => {
    let data = leads;
    if (filterStatus !== "All")
      data = data.filter((l) => l.status === filterStatus);
    if (filterSource !== "All")
      data = data.filter((l) => l.source === filterSource);
    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter(
        (l) => l.name.toLowerCase().includes(q) || l.company.toLowerCase().includes(q) || l.assignedTo.toLowerCase().includes(q)
      );
    }
    return data;
  }, [leads, filterStatus, filterSource, search]);
  const columns = reactExports.useMemo(
    () => buildColumns(openSheet, navigateToEdit),
    [openSheet, navigateToEdit]
  );
  function handleExportCSV() {
    exportToCSV(leadsToCSV(filteredLeads), "leads_export");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Lead Management",
        subtitle: `${stats.total} total leads · ${stats.converted} converted`,
        breadcrumbs: [{ label: "Home" }, { label: "Leads / CRM" }],
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "rounded-xl gap-1.5",
            onClick: () => navigate({ to: "/leads/new" }),
            "data-ocid": "leads.add_lead.primary_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
              "Add Lead"
            ]
          }
        ),
        "data-ocid": "leads.header"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mb-4 sm:mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "Total Leads",
          value: stats.total,
          icon: Users,
          change: 8,
          "data-ocid": "leads.stat.total"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "New",
          value: stats.new,
          icon: Plus,
          iconColor: "text-primary",
          "data-ocid": "leads.stat.new"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "In Progress",
          value: stats.inProgress,
          icon: ArrowRight,
          iconColor: "text-amber-500",
          "data-ocid": "leads.stat.in_progress"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "Converted",
          value: stats.converted,
          icon: CircleCheck,
          iconColor: "text-green-600",
          change: 12,
          "data-ocid": "leads.stat.converted"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "Rejected",
          value: stats.rejected,
          icon: CircleX,
          iconColor: "text-red-500",
          change: -3,
          "data-ocid": "leads.stat.rejected"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "kanban", "data-ocid": "leads.view_tabs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-4 rounded-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "kanban",
            "data-ocid": "leads.kanban.tab",
            className: "gap-1.5 text-xs rounded-xl",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "w-3.5 h-3.5" }),
              "Kanban Board"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "table",
            "data-ocid": "leads.table.tab",
            className: "gap-1.5 text-xs rounded-xl",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(List, { className: "w-3.5 h-3.5" }),
              "Table View"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "kanban", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3 md:hidden", children: STATUSES.map((status) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          KanbanColumn,
          {
            status,
            leads: leads.filter((l) => l.status === status),
            onDragStart: handleDragStart,
            onDragOver: handleDragOver,
            onDrop: handleDrop,
            onView: openSheet,
            onEdit: navigateToEdit,
            onAddNew: () => navigate({ to: "/leads/new" })
          },
          status
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex gap-3 overflow-x-auto pb-3", children: STATUSES.map((status) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          KanbanColumn,
          {
            status,
            leads: leads.filter((l) => l.status === status),
            onDragStart: handleDragStart,
            onDragOver: handleDragOver,
            onDrop: handleDrop,
            onView: openSheet,
            onEdit: navigateToEdit,
            onAddNew: () => navigate({ to: "/leads/new" })
          },
          status
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "table", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "bg-card rounded-2xl border border-border shadow-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 sm:gap-3 p-3 sm:p-4 border-b border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex-1 min-w-[160px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "Search leads…",
                  value: search,
                  onChange: (e) => setSearch(e.target.value),
                  className: "rounded-xl text-sm h-8 pl-3",
                  "data-ocid": "leads.table.search.input"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: filterStatus,
                  onValueChange: (v) => setFilterStatus(v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        className: "w-[120px] sm:w-[130px] rounded-xl h-8 text-xs",
                        "data-ocid": "leads.table.status.select",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Status" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "All", children: "All Statuses" }),
                      STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s))
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: filterSource,
                  onValueChange: (v) => setFilterSource(v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        className: "w-[130px] sm:w-[150px] rounded-xl h-8 text-xs",
                        "data-ocid": "leads.table.source.select",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Source" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "All", children: "All Sources" }),
                      SOURCE_LABELS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s))
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-8 rounded-xl gap-1.5 text-xs",
                  onClick: handleExportCSV,
                  "data-ocid": "leads.table.export_csv.button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Export CSV" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              DataTable,
              {
                data: filteredLeads,
                columns,
                searchKeys: ["name", "company", "assignedTo"],
                searchPlaceholder: "Search leads…",
                "data-ocid": "leads.table"
              }
            ) })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LeadAnalytics, { leads }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      LeadDetailSheet,
      {
        lead: selectedLead,
        open: sheetOpen,
        onClose: () => setSheetOpen(false),
        onNavigateToDetail: navigateToDetail,
        onNavigateToEdit: navigateToEdit
      }
    )
  ] });
}
export {
  LeadsPage as default
};
