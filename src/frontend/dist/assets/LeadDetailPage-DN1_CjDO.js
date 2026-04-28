import { a4 as useParams, u as useNavigate, r as reactExports, j as jsxRuntimeExports, B as Button, q as Badge, L as Link, m as motion, p as User, i as Building2, a as TrendingUp, s as ue } from "./index-CgV9Taym.js";
import { C as Card, a as CardHeader, c as CardTitle, b as CardContent } from "./card-BIrGk5lN.js";
import { S as Separator } from "./separator-n_ZCSSuO.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-C2Wpqlzr.js";
import { T as Textarea } from "./textarea-DRhbSqfF.js";
import { B as Breadcrumb } from "./Breadcrumb-Vnwm27w7.js";
import { P as PriorityBadge } from "./PriorityBadge-C2Id1hb0.js";
import { S as StatusBadge } from "./StatusBadge-BopRiVPx.js";
import { g as getLeadById } from "./mockLeads-Dc7n7Nj3.js";
import { T as TriangleAlert } from "./triangle-alert-t2GMGPuS.js";
import { S as SquarePen } from "./square-pen-DGyTVHfZ.js";
import { C as CircleCheck } from "./circle-check-DLxW8y4N.js";
import { T as Trash2 } from "./trash-2-D2vYGX4E.js";
import { M as Mail } from "./mail-DtpfkiRi.js";
import { P as Phone } from "./phone-B0agrxx4.js";
import { T as Tag } from "./tag-gTZruAkA.js";
import { I as IndianRupee } from "./indian-rupee-BvtpXdiF.js";
import { C as CalendarDays } from "./calendar-days-C9hU70Su.js";
import { A as ArrowRight } from "./arrow-right-DGj6Aqng.js";
import { P as Plus } from "./plus-C9sMXHJA.js";
import { M as MessageSquare } from "./message-square-D_chnuLn.js";
import "./minus-D6KT2NO-.js";
import "./zap-D7uWetWS.js";
function leadPriority(value) {
  return value >= 1e6 ? "High" : value >= 5e5 ? "Medium" : "Low";
}
const STATUS_COLORS = {
  New: "bg-primary/10 text-primary",
  "In Progress": "bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400",
  Converted: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400",
  Rejected: "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400"
};
const ACTIVITY_ICONS = {
  call: Phone,
  email: Mail,
  meeting: User,
  note: MessageSquare,
  status_change: Tag
};
const ACTIVITY_COLORS = {
  call: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
  email: "bg-primary/10 text-primary",
  meeting: "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
  note: "bg-muted text-muted-foreground",
  status_change: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
};
function InfoRow({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-muted-foreground mt-0.5 shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground break-words", children: value })
    ] })
  ] });
}
function ActivityTimeline({ activities }) {
  if (activities.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "py-10 text-center",
        "data-ocid": "lead_detail.activity.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-8 h-8 text-muted-foreground mx-auto mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No activity logged yet" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0", children: activities.map((activity, index) => {
    const Icon = ACTIVITY_ICONS[activity.type] ?? MessageSquare;
    const colorClass = ACTIVITY_COLORS[activity.type] ?? "bg-muted text-muted-foreground";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: index * 0.07 },
        className: "flex gap-3",
        "data-ocid": `lead_detail.activity.item.${index + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `flex items-center justify-center w-8 h-8 rounded-full shrink-0 ${colorClass}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" })
              }
            ),
            index < activities.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px flex-1 bg-border my-1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 pb-4 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline gap-x-2 gap-y-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: activity.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: new Date(activity.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric"
              }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: activity.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3" }),
              activity.createdBy
            ] })
          ] })
        ]
      },
      activity.id
    );
  }) });
}
function DeleteConfirm({
  leadName,
  onConfirm,
  onCancel
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-background/80 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl shadow-elevated p-6 w-full max-w-sm space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5 text-destructive" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Delete Lead" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
          "Delete ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: leadName }),
          "? This cannot be undone."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          size: "sm",
          onClick: onCancel,
          "data-ocid": "lead_detail.delete_cancel.button",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "destructive",
          size: "sm",
          onClick: onConfirm,
          "data-ocid": "lead_detail.delete_confirm.button",
          children: "Delete Lead"
        }
      )
    ] })
  ] }) });
}
const RELATED_TASKS = [
  {
    id: "t1",
    title: "Send follow-up email with updated proposal",
    dueDate: "2026-05-02",
    status: "Todo",
    assignee: "Priya Sharma"
  },
  {
    id: "t2",
    title: "Schedule KYC document collection",
    dueDate: "2026-05-05",
    status: "In Progress",
    assignee: "Rahul Gupta"
  }
];
function LeadDetailPage() {
  const { leadId } = useParams({ from: "/layout/leads/$leadId" });
  const navigate = useNavigate();
  const [showDeleteConfirm, setShowDeleteConfirm] = reactExports.useState(false);
  const [noteText, setNoteText] = reactExports.useState("");
  const [notes, setNotes] = reactExports.useState([]);
  const lead = getLeadById(leadId);
  if (!lead) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-full flex items-center justify-center",
        "data-ocid": "lead_detail.error_state",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-10 h-10 text-muted-foreground mx-auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Lead not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => navigate({ to: "/leads" }),
              children: "Back to Leads"
            }
          )
        ] })
      }
    );
  }
  const priority = leadPriority(lead.value);
  function handleConvert() {
    ue.success(`${lead.name} marked as Converted`);
  }
  function handleDeleteConfirm() {
    ue.success(`Lead "${lead.name}" deleted`);
    navigate({ to: "/leads" });
  }
  function addNote() {
    if (noteText.trim()) {
      setNotes((prev) => [noteText.trim(), ...prev]);
      setNoteText("");
    }
  }
  const allNotes = lead.notes ? [lead.notes, ...notes] : notes;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-full bg-background", "data-ocid": "lead_detail.page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border sticky top-0 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Breadcrumb,
          {
            items: [{ label: "Leads", href: "/leads" }, { label: lead.name }],
            className: "mb-2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display font-bold text-foreground truncate", children: lead.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-0.5", children: [
              lead.company,
              " · ",
              lead.branchName
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: STATUS_COLORS[lead.status], children: lead.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "gap-1.5",
                asChild: true,
                "data-ocid": "lead_detail.edit_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/leads/$leadId/edit", params: { leadId: lead.id }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-3.5 h-3.5" }),
                  "Edit"
                ] })
              }
            ),
            lead.status !== "Converted" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                className: "gap-1.5",
                onClick: handleConvert,
                "data-ocid": "lead_detail.convert_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
                  "Convert"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "destructive",
                className: "gap-1.5",
                onClick: () => setShowDeleteConfirm(true),
                "data-ocid": "lead_detail.delete_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }),
                  "Delete"
                ]
              }
            )
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-1 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -12 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.3 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "lead_detail.info.card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-primary" }),
                  "Contact Details"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { icon: Mail, label: "Email", value: lead.email }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { icon: Phone, label: "Phone", value: lead.phone }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    InfoRow,
                    {
                      icon: Building2,
                      label: "Company",
                      value: lead.company
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    InfoRow,
                    {
                      icon: Building2,
                      label: "Branch",
                      value: lead.branchName
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    InfoRow,
                    {
                      icon: User,
                      label: "Assigned To",
                      value: lead.assignedTo
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { icon: Tag, label: "Source", value: lead.source }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    InfoRow,
                    {
                      icon: TrendingUp,
                      label: "Product",
                      value: lead.product
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    InfoRow,
                    {
                      icon: IndianRupee,
                      label: "Deal Value",
                      value: `₹${(lead.value / 1e5).toFixed(1)}L (₹${lead.value.toLocaleString("en-IN")})`
                    }
                  ),
                  lead.followUpDate && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    InfoRow,
                    {
                      icon: CalendarDays,
                      label: "Follow-up",
                      value: new Date(lead.followUpDate).toLocaleDateString(
                        "en-IN",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    InfoRow,
                    {
                      icon: ArrowRight,
                      label: "Created",
                      value: new Date(lead.createdAt).toLocaleDateString(
                        "en-IN",
                        { day: "numeric", month: "long", year: "numeric" }
                      )
                    }
                  )
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -12 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.3, delay: 0.1 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "lead_detail.tasks.card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold", children: "Related Tasks" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "ghost",
                      size: "sm",
                      className: "h-6 w-6 rounded-lg p-0",
                      asChild: true,
                      "data-ocid": "lead_detail.add_task.button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/tasks/new", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }) })
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-2", children: RELATED_TASKS.map((task, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "p-2.5 rounded-xl border border-border bg-muted/20 space-y-1",
                    "data-ocid": `lead_detail.task.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground leading-snug", children: task.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
                          "Due:",
                          " ",
                          new Date(task.dueDate).toLocaleDateString(
                            "en-IN",
                            { day: "numeric", month: "short" }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: task.status })
                      ] })
                    ]
                  },
                  task.id
                )) })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 12 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.3 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "activity", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold", children: "Lead Activity" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "rounded-xl h-8", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      TabsTrigger,
                      {
                        value: "activity",
                        className: "text-xs rounded-xl h-7",
                        "data-ocid": "lead_detail.activity.tab",
                        children: "Timeline"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      TabsTrigger,
                      {
                        value: "notes",
                        className: "text-xs rounded-xl h-7",
                        "data-ocid": "lead_detail.notes.tab",
                        children: "Notes"
                      }
                    )
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "activity", className: "mt-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ActivityTimeline, { activities: lead.activities }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "outline",
                        size: "sm",
                        className: "w-full gap-1.5",
                        "data-ocid": "lead_detail.add_activity.button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
                          "Log Activity"
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "notes", className: "mt-0 space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Textarea,
                        {
                          placeholder: "Add a note about this lead…",
                          value: noteText,
                          onChange: (e) => setNoteText(e.target.value),
                          rows: 3,
                          className: "resize-none text-sm rounded-xl",
                          "data-ocid": "lead_detail.note.textarea"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          size: "sm",
                          className: "gap-1.5 rounded-xl",
                          onClick: addNote,
                          "data-ocid": "lead_detail.add_note.button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
                            "Add Note"
                          ]
                        }
                      )
                    ] }),
                    allNotes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-sm text-muted-foreground text-center py-6",
                        "data-ocid": "lead_detail.notes.empty_state",
                        children: "No notes yet"
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: allNotes.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "bg-muted/30 rounded-xl p-3 border border-border",
                        "data-ocid": `lead_detail.note.item.${i + 1}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: n }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5", children: i === 0 ? "Initial note" : "Added recently" })
                        ]
                      },
                      `note-${n.slice(0, 12)}-${i}`
                    )) })
                  ] })
                ] })
              ] }) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: 0.15 },
              className: "grid grid-cols-2 sm:grid-cols-3 gap-3",
              children: [
                {
                  label: "Activities",
                  value: lead.activities.length,
                  icon: MessageSquare,
                  color: "text-primary"
                },
                {
                  label: "Deal Value",
                  value: `₹${(lead.value / 1e5).toFixed(1)}L`,
                  icon: IndianRupee,
                  color: "text-green-600"
                },
                {
                  label: "Last Updated",
                  value: new Date(lead.updatedAt).toLocaleDateString(
                    "en-IN",
                    { day: "numeric", month: "short" }
                  ),
                  icon: CalendarDays,
                  color: "text-amber-600"
                }
              ].map(({ label, value, icon: Icon, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-card border border-border rounded-2xl p-4 text-center",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-5 h-5 mx-auto mb-1.5 ${color}` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-0.5", children: label })
                  ]
                },
                label
              ))
            }
          )
        ] })
      ] }) })
    ] }),
    showDeleteConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
      DeleteConfirm,
      {
        leadName: lead.name,
        onConfirm: handleDeleteConfirm,
        onCancel: () => setShowDeleteConfirm(false)
      }
    )
  ] });
}
export {
  LeadDetailPage as default
};
