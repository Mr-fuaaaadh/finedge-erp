import { e as createLucideIcon, b as useAuth, u as useNavigate, T as Target, j as jsxRuntimeExports, m as motion, a as TrendingUp, B as Button, C as Clock } from "./index-CgV9Taym.js";
import { P as Progress } from "./progress-BS3oRTu6.js";
import { C as ChartCard } from "./ChartCard-DfiZ9ngf.js";
import { P as PageHeader } from "./PageHeader-CHVHFP_Q.js";
import { P as PriorityBadge } from "./PriorityBadge-C2Id1hb0.js";
import { S as StatCard } from "./StatCard-DkWGxI9F.js";
import { S as StatusBadge } from "./StatusBadge-BopRiVPx.js";
import { m as mockLeads } from "./mockLeads-Dc7n7Nj3.js";
import { m as mockTasks } from "./mockTasks-ZIylUAUd.js";
import { e as exportToCSV } from "./csvExport-CI-f4_Rc.js";
import { P as Phone } from "./phone-B0agrxx4.js";
import { C as CircleCheck } from "./circle-check-DLxW8y4N.js";
import { Z as Zap } from "./zap-D7uWetWS.js";
import { A as Award } from "./award-DC1LhMVJ.js";
import { P as Plus } from "./plus-C9sMXHJA.js";
import { D as Download } from "./download-CT_NJYb_.js";
import { C as CalendarDays } from "./calendar-days-C9hU70Su.js";
import "./card-BIrGk5lN.js";
import "./minus-D6KT2NO-.js";
import "./triangle-alert-t2GMGPuS.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
];
const Timer = createLucideIcon("timer", __iconNode);
const today = /* @__PURE__ */ new Date();
function formatDueDate(dateStr) {
  const d = new Date(dateStr);
  const diff = Math.ceil(
    (d.getTime() - today.getTime()) / (1e3 * 60 * 60 * 24)
  );
  if (diff < 0) return "Overdue";
  if (diff === 0) return "Today";
  if (diff === 1) return "Tomorrow";
  return `${diff}d left`;
}
function StaffDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const myLeads = mockLeads.filter((l) => l.assignedToId === user.id);
  const myTasks = mockTasks.filter((t) => t.assignedToId === user.id);
  const recentLeads = [...myLeads].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  ).slice(0, 5);
  const upcomingFollowUps = myLeads.filter((l) => l.followUpDate && new Date(l.followUpDate) >= today).sort(
    (a, b) => new Date(a.followUpDate).getTime() - new Date(b.followUpDate).getTime()
  ).slice(0, 4);
  const dailyTargets = [
    {
      label: "Leads Contacted",
      done: 8,
      total: 10,
      icon: Phone,
      color: "text-primary"
    },
    {
      label: "Calls Made",
      done: 5,
      total: 8,
      icon: Phone,
      color: "text-secondary"
    },
    {
      label: "Tasks Completed",
      done: myTasks.filter((t) => t.status === "Done").length || 4,
      total: 5,
      icon: CircleCheck,
      color: "text-green-600"
    }
  ];
  const kpis = [
    {
      title: "My Leads",
      value: myLeads.length || 12,
      change: 2,
      icon: Target,
      iconColor: "text-primary"
    },
    {
      title: "Tasks Today",
      value: myTasks.filter((t) => t.status !== "Done").length || 5,
      change: 0,
      icon: Zap,
      iconColor: "text-amber-600"
    },
    {
      title: "Attendance Streak",
      value: "18 days",
      change: 3,
      icon: Award,
      iconColor: "text-green-600"
    },
    {
      title: "Performance Score",
      value: `${user.performanceScore}/100`,
      change: 2,
      icon: Star,
      iconColor: "text-secondary"
    }
  ];
  const getDueColor = (dateStr) => {
    const diff = Math.ceil(
      (new Date(dateStr).getTime() - today.getTime()) / (1e3 * 60 * 60 * 24)
    );
    if (diff < 0) return "text-destructive";
    if (diff === 0) return "text-amber-600";
    return "text-muted-foreground";
  };
  const hour = today.getHours();
  const greeting = hour < 12 ? "morning" : hour < 17 ? "afternoon" : "evening";
  function handleExportCSV() {
    const exportData = [
      ...kpis.map((k) => ({
        Category: "KPI",
        Metric: k.title,
        Value: k.value,
        "Change (%)": k.change
      })),
      ...myTasks.map((t) => ({
        Category: "Task",
        Metric: t.title,
        Value: t.status,
        "Change (%)": t.progress
      }))
    ];
    exportToCSV(
      exportData,
      `my-dashboard-${user.name.replace(/\s+/g, "-").toLowerCase()}`
    );
  }
  const quickActions = [
    {
      label: "New Lead",
      icon: Plus,
      href: "/leads/new",
      ocid: "staff_dashboard.quick_action.new_lead"
    },
    {
      label: "New Task",
      icon: Zap,
      href: "/tasks/new",
      ocid: "staff_dashboard.quick_action.new_task"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "mb-4 sm:mb-6 p-3 sm:p-5 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 shadow-card",
        initial: { opacity: 0, y: -12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
        "data-ocid": "staff_dashboard.welcome",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 sm:gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: user.avatar,
              alt: user.name,
              className: "w-10 h-10 sm:w-12 sm:h-12 rounded-xl border-2 border-primary/30 shrink-0"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-base sm:text-lg font-display font-bold text-foreground truncate", children: [
              "Good ",
              greeting,
              ", ",
              user.name.split(" ")[0],
              "! 👋"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs sm:text-sm text-muted-foreground line-clamp-2", children: [
              today.toLocaleDateString("en-IN", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
              }),
              " ",
              "— ",
              user.branchName,
              " · ",
              user.designation
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-2 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Performance Score" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display font-bold text-primary", children: user.performanceScore })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-6 h-6 text-primary" }) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "My Dashboard",
        subtitle: "Personal performance and task overview",
        breadcrumbs: [{ label: "Dashboard" }, { label: user.name }],
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          quickActions.map((action) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => navigate({ to: action.href }),
              className: "gap-1.5 text-xs min-h-[36px]",
              "data-ocid": action.ocid,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(action.icon, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: action.label })
              ]
            },
            action.label
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: handleExportCSV,
              className: "gap-1.5 text-xs min-h-[36px]",
              "data-ocid": "staff_dashboard.export_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Export" })
              ]
            }
          )
        ] }),
        "data-ocid": "staff_dashboard.header"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6", children: kpis.map((kpi, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.08, duration: 0.35 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            title: kpi.title,
            value: kpi.value,
            change: kpi.change,
            icon: kpi.icon,
            iconColor: kpi.iconColor,
            "data-ocid": `staff_dashboard.kpi.${i + 1}`
          }
        )
      },
      kpi.title
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-4 sm:hidden flex-wrap", children: quickActions.map((action) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => navigate({ to: action.href }),
        className: "flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary/10 text-primary text-xs font-semibold min-h-[44px] border border-primary/20",
        "data-ocid": `${action.ocid}_mobile`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(action.icon, { className: "w-3.5 h-3.5" }),
          action.label
        ]
      },
      action.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.38 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            ChartCard,
            {
              title: "Assigned Tasks",
              subtitle: "Active and upcoming",
              "data-ocid": "staff_dashboard.tasks_list",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mt-1 lg:hidden", children: [
                  myTasks.filter((t) => t.status !== "Done").slice(0, 5).map((task, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "p-2.5 rounded-xl border border-border/60 bg-muted/20 hover:bg-muted/40 transition-smooth",
                      "data-ocid": `staff_dashboard.tasks_list.item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground leading-snug line-clamp-2 flex-1", children: task.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: task.priority })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: task.status }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "span",
                            {
                              className: `text-[10px] font-medium flex items-center gap-1 ${getDueColor(task.dueDate)}`,
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-2.5 h-2.5" }),
                                formatDueDate(task.dueDate)
                              ]
                            }
                          ),
                          task.progress > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 ml-auto", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-1 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "h-full bg-primary rounded-full",
                                style: { width: `${task.progress}%` }
                              }
                            ) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
                              task.progress,
                              "%"
                            ] })
                          ] })
                        ] })
                      ]
                    },
                    task.id
                  )),
                  myTasks.filter((t) => t.status !== "Done").length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex flex-col items-center py-8 text-center",
                      "data-ocid": "staff_dashboard.tasks_list.empty_state",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-8 h-8 text-green-500 mb-2" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "All caught up!" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "No pending tasks assigned" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block mt-1 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-1 font-semibold text-muted-foreground", children: "Task" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-1 font-semibold text-muted-foreground", children: "Priority" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-1 font-semibold text-muted-foreground", children: "Status" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2 px-1 font-semibold text-muted-foreground", children: "Due" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
                    myTasks.filter((t) => t.status !== "Done").slice(0, 6).map((task, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "tr",
                      {
                        className: "border-b border-border/40 hover:bg-muted/30 transition-smooth",
                        "data-ocid": `staff_dashboard.tasks_list.item.${i + 1}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-1 font-semibold text-foreground max-w-[160px] truncate", children: task.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: task.priority }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: task.status }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "td",
                            {
                              className: `py-2.5 px-1 text-right font-medium text-[11px] ${getDueColor(task.dueDate)}`,
                              children: formatDueDate(task.dueDate)
                            }
                          )
                        ]
                      },
                      task.id
                    )),
                    myTasks.filter((t) => t.status !== "Done").length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        colSpan: 4,
                        className: "py-6 text-center text-xs text-muted-foreground",
                        "data-ocid": "staff_dashboard.tasks_list.empty_state",
                        children: "No pending tasks"
                      }
                    ) })
                  ] })
                ] }) })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.44 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChartCard,
            {
              title: "My Leads",
              subtitle: "5 most recently updated",
              "data-ocid": "staff_dashboard.leads_table",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 space-y-2 max-h-[280px] overflow-y-auto pr-1", children: [
                recentLeads.map((lead, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 p-2 rounded-xl bg-muted/20 hover:bg-muted/40 transition-smooth border border-border/40",
                    "data-ocid": `staff_dashboard.leads_table.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground truncate", children: lead.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate", children: lead.company })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: lead.status }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-foreground shrink-0", children: [
                        "₹",
                        (lead.value / 1e3).toFixed(0),
                        "K"
                      ] })
                    ]
                  },
                  lead.id
                )),
                recentLeads.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex flex-col items-center py-8 text-center",
                    "data-ocid": "staff_dashboard.leads_table.empty_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-8 h-8 text-muted-foreground mb-2" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "No leads yet" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "No leads assigned to you" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => navigate({ to: "/leads/new" }),
                          className: "mt-3 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold min-h-[36px] border border-primary/20",
                          "data-ocid": "staff_dashboard.leads_table.empty_state.add_lead_button",
                          children: "+ Add Lead"
                        }
                      )
                    ]
                  }
                )
              ] })
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.5 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChartCard,
            {
              title: "Upcoming Follow-ups",
              subtitle: "Next 3 days",
              "data-ocid": "staff_dashboard.followups_timeline",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 space-y-3", children: [
                upcomingFollowUps.map((lead, i) => {
                  const followDate = new Date(lead.followUpDate);
                  const diff = Math.ceil(
                    (followDate.getTime() - today.getTime()) / (1e3 * 60 * 60 * 24)
                  );
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-start gap-3 relative pl-4",
                      "data-ocid": `staff_dashboard.followups_timeline.item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-primary shrink-0" }),
                        i < upcomingFollowUps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[4.5px] top-4 bottom-[-12px] w-0.5 bg-border" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground truncate", children: lead.name }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: `text-[10px] font-bold px-1.5 py-0.5 rounded-md shrink-0 ${diff === 0 ? "bg-amber-100 text-amber-700" : diff === 1 ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`,
                                children: diff === 0 ? "Today" : diff === 1 ? "Tomorrow" : `${diff}d`
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
                            lead.company,
                            " · ",
                            lead.product
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-0.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-2.5 h-2.5 text-muted-foreground" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
                              followDate.toLocaleDateString("en-IN", {
                                month: "short",
                                day: "numeric"
                              }),
                              " ",
                              "·",
                              " ",
                              followDate.toLocaleTimeString("en-IN", {
                                hour: "2-digit",
                                minute: "2-digit"
                              })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: lead.status })
                          ] })
                        ] })
                      ]
                    },
                    lead.id
                  );
                }),
                upcomingFollowUps.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex flex-col items-center py-8 text-center",
                    "data-ocid": "staff_dashboard.followups_timeline.empty_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-8 h-8 text-muted-foreground mb-2" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "No follow-ups scheduled" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "You're all clear for the next 3 days" })
                    ]
                  }
                )
              ] })
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.56 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            ChartCard,
            {
              title: "Daily Targets",
              subtitle: "Today's activity progress",
              "data-ocid": "staff_dashboard.daily_targets",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mt-2", children: dailyTargets.map((target, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    "data-ocid": `staff_dashboard.daily_targets.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: `w-6 h-6 rounded-lg bg-muted/60 flex items-center justify-center ${target.color}`,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(target.icon, { className: "w-3.5 h-3.5" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: target.label })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-display font-bold text-foreground", children: target.done }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                            "/ ",
                            target.total
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Progress,
                        {
                          value: Math.round(target.done / target.total * 100),
                          className: "h-2"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
                          target.total - target.done,
                          " remaining"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: `text-[10px] font-semibold ${target.done >= target.total ? "text-green-600" : "text-muted-foreground"}`,
                            children: [
                              Math.round(target.done / target.total * 100),
                              "%"
                            ]
                          }
                        )
                      ] })
                    ]
                  },
                  target.label
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-border flex items-center gap-3 p-3 rounded-xl bg-primary/5 border-primary/15", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "w-5 h-5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: "Daily Completion Rate" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Based on today's activities" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl font-display font-bold text-primary shrink-0", children: [
                    Math.round(
                      dailyTargets.reduce((s, t) => s + t.done / t.total, 0) / dailyTargets.length * 100
                    ),
                    "%"
                  ] })
                ] })
              ]
            }
          )
        }
      )
    ] })
  ] });
}
export {
  StaffDashboard as default
};
