import { a4 as useParams, u as useNavigate, a6 as getUsersByBranch, r as reactExports, j as jsxRuntimeExports, i as Building2, B as Button, U as Users, m as motion, q as Badge, T as Target, a as TrendingUp } from "./index-CgV9Taym.js";
import { C as Card, b as CardContent } from "./card-BIrGk5lN.js";
import { S as Separator } from "./separator-n_ZCSSuO.js";
import { P as PageHeader } from "./PageHeader-CHVHFP_Q.js";
import { S as StatusBadge } from "./StatusBadge-BopRiVPx.js";
import { g as getBranchById } from "./mockBranches-6NlnyQQY.js";
import { D as Download } from "./download-CT_NJYb_.js";
import { S as SquarePen } from "./square-pen-DGyTVHfZ.js";
import { M as MapPin } from "./map-pin-BzQ-JiWE.js";
import { P as Phone } from "./phone-B0agrxx4.js";
import { M as Mail } from "./mail-DtpfkiRi.js";
import { C as Calendar } from "./calendar-B7TqCTx5.js";
import { C as CircleCheck } from "./circle-check-DLxW8y4N.js";
import { A as Award } from "./award-DC1LhMVJ.js";
const RANK_MEDAL = { 1: "🥇", 2: "🥈", 3: "🥉" };
const MONTH_LABELS = [
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun"
];
function formatRevenue(v) {
  if (v >= 1e6) return `₹${(v / 1e6).toFixed(2)}M`;
  if (v >= 1e3) return `₹${(v / 1e3).toFixed(0)}K`;
  return `₹${v}`;
}
function mockMonthlyRevenue(baseRevenue) {
  const base = baseRevenue / 1e6;
  return MONTH_LABELS.map((_, i) => {
    const noise = (Math.sin(i * 1.3) + Math.cos(i * 0.7)) * 0.15;
    return Math.max(0.5, +(base * (0.85 + noise + i * 8e-3)).toFixed(2));
  });
}
function KPICard({
  label,
  value,
  suffix = "%",
  icon: Icon,
  color,
  trend
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border border-border shadow-card rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-medium text-muted-foreground uppercase tracking-wide", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-display font-bold text-foreground mt-1", children: [
        value,
        suffix
      ] }),
      trend && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "p",
        {
          className: `text-[11px] font-medium mt-0.5 ${trend === "up" ? "text-green-600" : "text-red-500"}`,
          children: [
            trend === "up" ? "↑" : "↓",
            " vs last month"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `flex items-center justify-center w-9 h-9 rounded-xl bg-muted/60 ${color} shrink-0`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" })
      }
    )
  ] }) }) });
}
const ACTIVITIES = [
  {
    id: "a1",
    type: "target",
    label: "Revenue target revised upward",
    time: "2 days ago"
  },
  {
    id: "a2",
    type: "staff",
    label: "New staff member onboarded",
    time: "5 days ago"
  },
  {
    id: "a3",
    type: "lead",
    label: "Lead conversion milestone reached",
    time: "1 week ago"
  },
  {
    id: "a4",
    type: "audit",
    label: "Quarterly audit completed",
    time: "2 weeks ago"
  },
  {
    id: "a5",
    type: "review",
    label: "Performance review submitted",
    time: "3 weeks ago"
  }
];
const ACTIVITY_DOT = {
  target: "bg-green-500",
  staff: "bg-primary",
  lead: "bg-amber-500",
  audit: "bg-purple-500",
  review: "bg-muted-foreground"
};
function BranchDetailPage() {
  const { branchId } = useParams({ from: "/layout/branches/$branchId" });
  const navigate = useNavigate();
  const branch = getBranchById(branchId);
  const staff = getUsersByBranch(branchId);
  const monthlyRevenue = reactExports.useMemo(
    () => branch ? mockMonthlyRevenue(branch.revenue) : [],
    [branch]
  );
  const revenueMaxM = monthlyRevenue.length > 0 ? Math.max(...monthlyRevenue) : 1;
  const pct = branch ? Math.round(branch.revenue / branch.targetRevenue * 100) : 0;
  const targetM = branch ? branch.targetRevenue / 1e6 : 0;
  if (!branch) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-64 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-10 h-10 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Branch not found." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          size: "sm",
          onClick: () => navigate({ to: "/branches" }),
          children: "Back to Branches"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 sm:space-y-5", "data-ocid": "branch_detail.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: branch.name,
        subtitle: `${branch.city}, ${branch.state} · ${branch.code}`,
        breadcrumbs: [
          { label: "Home" },
          { label: "Branches", href: "/branches" },
          { label: branch.name }
        ],
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "rounded-xl gap-1.5",
              "data-ocid": "branch_detail.download_report.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Download Report" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "rounded-xl gap-1.5",
              onClick: () => navigate({ to: "/staff" }),
              "data-ocid": "branch_detail.view_staff.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "View Staff" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "rounded-xl gap-1.5",
              onClick: () => navigate({
                to: "/branches/$branchId/edit",
                params: { branchId }
              }),
              "data-ocid": "branch_detail.edit_branch.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Edit Branch" })
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 },
        className: "bg-card border border-border rounded-2xl shadow-card p-4 sm:p-6",
        "data-ocid": "branch_detail.hero.card",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-7 h-7 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold text-foreground truncate", children: branch.name }),
                RANK_MEDAL[branch.rank] && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", title: `Rank #${branch.rank}`, children: RANK_MEDAL[branch.rank] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: branch.status })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 font-mono", children: branch.code })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 sm:gap-6 flex-wrap text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-foreground", children: branch.staffCount }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Staff" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { orientation: "vertical", className: "h-8 hidden sm:block" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-foreground", children: branch.leadsConverted }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Leads Won" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { orientation: "vertical", className: "h-8 hidden sm:block" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-bold text-foreground", children: [
                branch.performance,
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Performance" })
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-1 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -12 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.3, delay: 0.05 },
            className: "bg-card border border-border rounded-2xl shadow-card",
            "data-ocid": "branch_detail.overview.card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-display font-semibold text-foreground", children: "Overview" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-muted-foreground mt-0.5 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Address" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground font-medium", children: branch.address })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 text-muted-foreground shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Phone" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground font-medium", children: branch.phone })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 text-muted-foreground shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Email" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground font-medium break-all", children: branch.email })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-muted-foreground shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Branch Manager" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground font-medium", children: branch.managerName })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-muted-foreground shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Established" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground font-medium", children: new Date(branch.createdAt).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    }) })
                  ] })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -12 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.3, delay: 0.1 },
            className: "bg-card border border-border rounded-2xl shadow-card",
            "data-ocid": "branch_detail.staff.card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-border flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-display font-semibold text-foreground", children: "Staff Members" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px]", children: staff.length })
              ] }),
              staff.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "p-6 text-center text-sm text-muted-foreground",
                  "data-ocid": "branch_detail.staff.empty_state",
                  children: "No staff assigned to this branch."
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border max-h-72 overflow-y-auto", children: staff.map((member, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "w-full flex items-center gap-3 px-4 py-2.5 hover:bg-muted/20 transition-colors text-left",
                  "data-ocid": `branch_detail.staff.item.${idx + 1}`,
                  onClick: () => navigate({ to: `/staff/${member.id}` }),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: member.avatar,
                        alt: member.name,
                        className: "w-7 h-7 rounded-full shrink-0"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground truncate", children: member.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate", children: member.designation })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      StatusBadge,
                      {
                        status: member.status,
                        className: "text-[9px] shrink-0"
                      }
                    )
                  ]
                },
                member.id
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -12 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.3, delay: 0.15 },
            className: "bg-card border border-border rounded-2xl shadow-card",
            "data-ocid": "branch_detail.activity.card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-display font-semibold text-foreground", children: "Recent Activity" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 space-y-3", children: ACTIVITIES.map((act, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start gap-3",
                  "data-ocid": `branch_detail.activity.item.${idx + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `mt-1.5 w-2 h-2 rounded-full shrink-0 ${ACTIVITY_DOT[act.type] ?? "bg-muted"}`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground leading-snug", children: act.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: act.time })
                    ] })
                  ]
                },
                act.id
              )) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 12 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.3, delay: 0.08 },
            className: "bg-card border border-border rounded-2xl shadow-card",
            "data-ocid": "branch_detail.revenue.card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 sm:px-5 py-4 border-b border-border flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-display font-semibold text-foreground", children: "Revenue Analytics" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-0.5", children: "Monthly revenue vs target (₹M)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold font-display text-foreground", children: formatRevenue(branch.revenue) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "This month" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-36 sm:h-44 flex items-end gap-1 relative mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute left-0 right-0 border-t border-dashed border-amber-400/70 pointer-events-none",
                      style: { bottom: `${targetM / revenueMaxM * 100}%` },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-4 right-0 text-[9px] text-amber-600 font-medium", children: "Target" })
                    }
                  ),
                  monthlyRevenue.map((val, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "flex-1 flex flex-col items-center",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-full rounded-t-sm bg-primary/70 hover:bg-primary transition-colors",
                          style: {
                            height: `${Math.round(val / revenueMaxM * 100)}%`,
                            minHeight: "4px"
                          },
                          title: `${MONTH_LABELS[i]}: ₹${val.toFixed(2)}M`
                        }
                      )
                    },
                    MONTH_LABELS[i]
                  ))
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: MONTH_LABELS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "flex-1 text-center text-[9px] text-muted-foreground",
                    children: m
                  },
                  m
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-medium", children: "Target Achievement" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: `font-bold ${pct >= 100 ? "text-green-600" : pct >= 80 ? "text-primary" : "text-amber-600"}`,
                        children: [
                          pct,
                          "%"
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `h-full rounded-full transition-all ${pct >= 100 ? "bg-green-500" : pct >= 80 ? "bg-primary" : "bg-amber-500"}`,
                      style: { width: `${Math.min(pct, 100)}%` }
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      formatRevenue(branch.revenue),
                      " earned"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      formatRevenue(branch.targetRevenue),
                      " target"
                    ] })
                  ] })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.3, delay: 0.12 },
            className: "grid grid-cols-2 gap-3 sm:gap-4",
            "data-ocid": "branch_detail.kpi.section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                KPICard,
                {
                  label: "Revenue Achievement",
                  value: pct,
                  icon: Target,
                  color: "text-primary",
                  trend: pct >= 90 ? "up" : "down"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                KPICard,
                {
                  label: "Overall Performance",
                  value: branch.performance,
                  icon: TrendingUp,
                  color: "text-green-600",
                  trend: branch.performance >= 85 ? "up" : "down"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                KPICard,
                {
                  label: "Lead Conversion",
                  value: Math.round(
                    branch.leadsConverted / (branch.staffCount * 12) * 100
                  ),
                  icon: CircleCheck,
                  color: "text-amber-600",
                  trend: "up"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                KPICard,
                {
                  label: "Branch Rank",
                  value: branch.rank,
                  suffix: "",
                  icon: Award,
                  color: "text-purple-600"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.3, delay: 0.16 },
            className: "bg-card border border-border rounded-2xl shadow-card overflow-hidden",
            "data-ocid": "branch_detail.staff_table.card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 sm:px-5 py-4 border-b border-border flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-display font-semibold text-foreground", children: "Staff Directory" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 rounded-xl text-xs gap-1",
                    onClick: () => navigate({ to: "/staff/new" }),
                    "data-ocid": "branch_detail.add_staff.button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3 h-3" }),
                      "Add Staff"
                    ]
                  }
                )
              ] }),
              staff.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "p-8 text-center",
                  "data-ocid": "branch_detail.staff_table.empty_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-8 h-8 text-muted-foreground mx-auto mb-2" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No staff assigned to this branch." })
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", style: { minWidth: "480px" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border bg-muted/20", children: [
                  "Name",
                  "Role",
                  "Department",
                  "Performance",
                  "Status"
                ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "th",
                  {
                    className: "px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
                    children: h
                  },
                  h
                )) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: staff.map((member, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    className: "border-b border-border last:border-0 hover:bg-muted/20 transition-colors cursor-pointer",
                    "data-ocid": `branch_detail.staff_table.item.${idx + 1}`,
                    onClick: () => navigate({ to: `/staff/${member.id}` }),
                    onKeyDown: (e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        navigate({ to: `/staff/${member.id}` });
                      }
                    },
                    tabIndex: 0,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: member.avatar,
                            alt: member.name,
                            className: "w-6 h-6 rounded-full shrink-0"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground truncate", children: member.name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate", children: member.email })
                        ] })
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] capitalize text-muted-foreground", children: member.role.replace("_", " ") }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: member.department }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: `h-full rounded-full ${member.performanceScore >= 85 ? "bg-green-500" : member.performanceScore >= 70 ? "bg-primary" : "bg-amber-500"}`,
                            style: { width: `${member.performanceScore}%` }
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-foreground", children: member.performanceScore })
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: member.status }) })
                    ]
                  },
                  member.id
                )) })
              ] }) })
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  BranchDetailPage as default
};
