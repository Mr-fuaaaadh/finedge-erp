import { j as jsxRuntimeExports, B as Button, G as GitBranch, U as Users, T as Target, D as DollarSign, m as motion, S as SquareCheckBig } from "./index--w3DYRFQ.js";
import { C as ChartCard } from "./ChartCard-BEulRt6P.js";
import { P as PageHeader, D as Download, e as exportToCSV } from "./csvExport-DThDKCEu.js";
import { S as StatCard } from "./StatCard-Dmm7jm2H.js";
import { S as StatusBadge } from "./StatusBadge-D9PldgHP.js";
import { m as mockBranches } from "./mockBranches-D8s3Khu1.js";
import { m as mockMonthlyFinance } from "./mockFinance-Cb7hJvCp.js";
import { m as mockBranchPerformance } from "./mockPerformance-BYkWSlSF.js";
import { m as mockTasks } from "./mockTasks-ZIylUAUd.js";
import { R as ResponsiveContainer, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, L as Legend, B as Bar, a as Cell } from "./generateCategoricalChart-CVvru8ED.js";
import { B as BarChart } from "./BarChart-C9wnbT7l.js";
import { P as PieChart, a as Pie } from "./PieChart-C34hjOom.js";
import { M as Medal } from "./medal-pQMWa539.js";
import { A as Award } from "./award-CBS1kBw4.js";
import { A as Activity } from "./activity-DzUsqlv9.js";
import "./PolarAngleAxis-Di9qdXjh.js";
const CHART_PRIMARY = "oklch(0.42 0.08 265)";
const CHART_SECONDARY = "oklch(0.60 0.10 185)";
const CHART_ACCENT = "oklch(0.68 0.18 75)";
const CHART_GREEN = "oklch(0.55 0.15 155)";
const CHART_PURPLE = "oklch(0.58 0.12 260)";
const CHART_GRID = "oklch(0.91 0.01 0)";
const leadSourceData = [
  { name: "Referral", value: 38, color: CHART_PRIMARY },
  { name: "Website", value: 24, color: CHART_SECONDARY },
  { name: "Cold Call", value: 18, color: CHART_ACCENT },
  { name: "Social Media", value: 12, color: CHART_GREEN },
  { name: "Walk-in", value: 8, color: CHART_PURPLE }
];
const deptProductivityData = [
  { dept: "Sales", score: 88 },
  { dept: "Finance", score: 82 },
  { dept: "Operations", score: 79 },
  { dept: "HR", score: 85 },
  { dept: "Marketing", score: 76 },
  { dept: "IT", score: 91 },
  { dept: "Credit", score: 84 },
  { dept: "Compliance", score: 78 }
];
const attendanceData = [
  { name: "Present", value: 89, color: CHART_GREEN },
  { name: "Late", value: 7, color: CHART_ACCENT },
  { name: "Absent", value: 4, color: "oklch(0.63 0.24 17)" }
];
function AdminDashboard() {
  const activeBranches = mockBranches.filter(
    (b) => b.status === "Active"
  ).length;
  const totalBranches = mockBranches.length;
  const doneTasks = mockTasks.filter((t) => t.status === "Done").length;
  const totalTasks = mockTasks.length;
  const taskCompletionPct = Math.round(doneTasks / totalTasks * 100);
  const taskStatusData = [
    { name: "Done", value: doneTasks, color: CHART_GREEN },
    {
      name: "In Progress",
      value: mockTasks.filter((t) => t.status === "In Progress").length,
      color: CHART_PRIMARY
    },
    {
      name: "Review",
      value: mockTasks.filter((t) => t.status === "Review").length,
      color: CHART_ACCENT
    },
    {
      name: "Todo",
      value: mockTasks.filter((t) => t.status === "Todo").length,
      color: CHART_GRID
    }
  ];
  const kpis = [
    {
      title: "Total Branches",
      value: totalBranches,
      change: 2,
      icon: GitBranch,
      iconColor: "text-primary",
      subtitle: `${activeBranches} active`
    },
    {
      title: "Total Staff",
      value: 127,
      change: 8,
      icon: Users,
      iconColor: "text-secondary"
    },
    {
      title: "Active Leads",
      value: 284,
      change: 15,
      icon: Target,
      iconColor: "text-amber-600"
    },
    {
      title: "Revenue This Month",
      value: "$2.4M",
      change: 12,
      icon: DollarSign,
      iconColor: "text-green-600"
    }
  ];
  const rankedBranches = [...mockBranchPerformance].sort((a, b) => a.rank - b.rank).slice(0, 5).map((bp) => {
    const branch = mockBranches.find((b) => b.id === bp.branchId);
    return {
      ...bp,
      managerName: (branch == null ? void 0 : branch.managerName) ?? "—",
      status: (branch == null ? void 0 : branch.status) ?? "Active",
      growth: Math.round(
        (bp.revenue - bp.targetRevenue * 0.92) / (bp.targetRevenue * 0.92) * 100
      )
    };
  });
  function handleExportCSV() {
    const exportData = kpis.map((k) => ({
      Metric: k.title,
      Value: k.value,
      "Change (%)": k.change
    }));
    exportToCSV(
      exportData,
      "admin-dashboard-kpis"
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Admin Dashboard",
        subtitle: `Enterprise overview — ${(/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}`,
        breadcrumbs: [{ label: "Home" }, { label: "Dashboard" }],
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: handleExportCSV,
            className: "gap-1.5 text-xs",
            "data-ocid": "admin_dashboard.export_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden xs:inline", children: "Export Dashboard" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "xs:hidden", children: "Export" })
            ]
          }
        ),
        "data-ocid": "admin_dashboard.header"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6", children: kpis.map((kpi, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
            "data-ocid": `admin_dashboard.kpi.${i + 1}`
          }
        )
      },
      kpi.title
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "md:col-span-2 lg:col-span-2",
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.35 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChartCard,
            {
              title: "Revenue Trend",
              subtitle: "12-month consolidated (2024)",
              periods: ["2024", "YTD"],
              "data-ocid": "admin_dashboard.revenue_chart",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 230, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                BarChart,
                {
                  data: mockMonthlyFinance,
                  margin: { top: 4, right: 8, left: 0, bottom: 0 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "revBarGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "stop",
                          {
                            offset: "0%",
                            stopColor: CHART_PRIMARY,
                            stopOpacity: 1
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "stop",
                          {
                            offset: "100%",
                            stopColor: CHART_PRIMARY,
                            stopOpacity: 0.7
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "expBarGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "stop",
                          {
                            offset: "0%",
                            stopColor: CHART_SECONDARY,
                            stopOpacity: 1
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "stop",
                          {
                            offset: "100%",
                            stopColor: CHART_SECONDARY,
                            stopOpacity: 0.7
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CartesianGrid,
                      {
                        strokeDasharray: "3 3",
                        vertical: false,
                        stroke: CHART_GRID
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      XAxis,
                      {
                        dataKey: "month",
                        tick: { fontSize: 11 },
                        axisLine: false,
                        tickLine: false
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      YAxis,
                      {
                        tick: { fontSize: 11 },
                        axisLine: false,
                        tickLine: false,
                        tickFormatter: (v) => `₹${(v / 1e6).toFixed(1)}M`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Tooltip,
                      {
                        formatter: (v, name) => [
                          `₹${(v / 1e6).toFixed(2)}M`,
                          name
                        ],
                        contentStyle: {
                          borderRadius: "8px",
                          border: "1px solid oklch(0.91 0.01 0)",
                          fontSize: 12
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: { fontSize: 11 } }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Bar,
                      {
                        dataKey: "revenue",
                        name: "Revenue",
                        fill: "url(#revBarGrad)",
                        radius: [4, 4, 0, 0],
                        maxBarSize: 20
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Bar,
                      {
                        dataKey: "expenses",
                        name: "Expenses",
                        fill: "url(#expBarGrad)",
                        radius: [4, 4, 0, 0],
                        maxBarSize: 20
                      }
                    )
                  ]
                }
              ) })
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.42 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            ChartCard,
            {
              title: "Lead Sources",
              subtitle: "Distribution by channel",
              "data-ocid": "admin_dashboard.lead_source_chart",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Pie,
                    {
                      data: leadSourceData,
                      cx: "50%",
                      cy: "50%",
                      innerRadius: 48,
                      outerRadius: 68,
                      paddingAngle: 3,
                      dataKey: "value",
                      children: leadSourceData.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.color }, entry.name))
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => [`${v}%`, "Share"] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 space-y-1.5", children: leadSourceData.map((src) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-between text-xs",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "w-2 h-2 rounded-full shrink-0",
                            style: { background: src.color }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: src.name })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                        src.value,
                        "%"
                      ] })
                    ]
                  },
                  src.name
                )) })
              ]
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "mb-4 sm:mb-6",
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.5 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChartCard,
          {
            title: "Branch Rankings",
            subtitle: "Top 5 branches by revenue performance",
            "data-ocid": "admin_dashboard.branch_ranking",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto mt-1 -mx-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs min-w-[480px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2.5 px-2 font-semibold text-muted-foreground", children: "Rank" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2.5 px-2 font-semibold text-muted-foreground", children: "Branch" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2.5 px-2 font-semibold text-muted-foreground hidden sm:table-cell", children: "Manager" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2.5 px-2 font-semibold text-muted-foreground", children: "Revenue" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2.5 px-2 font-semibold text-muted-foreground", children: "Growth" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2.5 px-2 font-semibold text-muted-foreground hidden md:table-cell", children: "Score" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2.5 px-2 font-semibold text-muted-foreground hidden sm:table-cell", children: "Status" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rankedBranches.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: "border-b border-border/50 hover:bg-muted/30 transition-smooth",
                  "data-ocid": `admin_dashboard.branch_ranking.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `inline-flex items-center justify-center w-6 h-6 rounded-lg text-xs font-bold ${b.rank === 1 ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" : b.rank === 2 ? "bg-muted text-muted-foreground" : "bg-background text-muted-foreground border border-border"}`,
                        children: b.rank === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Medal, { className: "w-3.5 h-3.5" }) : b.rank
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 font-semibold text-foreground", children: b.branchName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 text-muted-foreground hidden sm:table-cell", children: b.managerName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-2 text-right font-semibold text-foreground", children: [
                      "₹",
                      (b.revenue / 1e6).toFixed(2),
                      "M"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: `font-semibold ${b.growth >= 0 ? "text-green-600 dark:text-green-400" : "text-red-500"}`,
                        children: [
                          b.growth >= 0 ? "+" : "",
                          b.growth,
                          "%"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 text-right hidden md:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "h-full rounded-full bg-primary transition-all duration-500",
                          style: { width: `${b.score}%` }
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary w-7", children: [
                        b.score,
                        "%"
                      ] })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 text-center hidden sm:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: b.status }) })
                  ]
                },
                b.branchId
              )) })
            ] }) })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.58 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChartCard,
            {
              title: "Staff Productivity",
              subtitle: "By department (avg score)",
              "data-ocid": "admin_dashboard.staff_productivity_chart",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                BarChart,
                {
                  data: deptProductivityData,
                  layout: "vertical",
                  margin: { top: 0, right: 16, left: 0, bottom: 0 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CartesianGrid,
                      {
                        strokeDasharray: "3 3",
                        horizontal: false,
                        stroke: CHART_GRID
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      XAxis,
                      {
                        type: "number",
                        domain: [0, 100],
                        tick: { fontSize: 10 },
                        axisLine: false,
                        tickLine: false
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      YAxis,
                      {
                        type: "category",
                        dataKey: "dept",
                        tick: { fontSize: 10 },
                        axisLine: false,
                        tickLine: false,
                        width: 65
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Tooltip,
                      {
                        formatter: (v) => [`${v}%`, "Score"],
                        contentStyle: { fontSize: 11 }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Bar,
                      {
                        dataKey: "score",
                        fill: CHART_PRIMARY,
                        radius: [0, 4, 4, 0],
                        maxBarSize: 14
                      }
                    )
                  ]
                }
              ) })
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.64 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChartCard,
            {
              title: "Task Completion",
              subtitle: `${taskCompletionPct}% overall done`,
              "data-ocid": "admin_dashboard.task_completion_chart",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Pie,
                    {
                      data: taskStatusData,
                      cx: "50%",
                      cy: "50%",
                      innerRadius: 44,
                      outerRadius: 64,
                      paddingAngle: 2,
                      dataKey: "value",
                      children: taskStatusData.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.color }, entry.name))
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { fontSize: 11 } })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full space-y-1.5 mt-1", children: taskStatusData.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-between text-xs",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "w-2 h-2 rounded-full shrink-0",
                            style: { background: s.color }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: s.name })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: s.value })
                    ]
                  },
                  s.name
                )) })
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
          transition: { delay: 0.7 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            ChartCard,
            {
              title: "Attendance Overview",
              subtitle: "Today's across all branches",
              "data-ocid": "admin_dashboard.attendance_overview",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Pie,
                      {
                        data: attendanceData,
                        cx: "50%",
                        cy: "50%",
                        innerRadius: 44,
                        outerRadius: 64,
                        paddingAngle: 2,
                        dataKey: "value",
                        children: attendanceData.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.color }, entry.name))
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => [`${v}%`, "Share"] })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full space-y-2 mt-1", children: attendanceData.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-2 h-2 rounded-full shrink-0",
                        style: { background: s.color }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-full rounded-full transition-all duration-500",
                        style: { width: `${s.value}%`, background: s.color }
                      }
                    ) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground w-16", children: s.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-foreground w-8 text-right", children: [
                      s.value,
                      "%"
                    ] })
                  ] }, s.name)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide", children: "Recent Activity" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: [
                    {
                      icon: Award,
                      text: "Delhi NCR exceeded monthly target",
                      time: "2h ago",
                      color: "text-green-600"
                    },
                    {
                      icon: Target,
                      text: "Crescent Exports lead assigned to Kavita",
                      time: "3h ago",
                      color: "text-primary"
                    },
                    {
                      icon: SquareCheckBig,
                      text: "Q1 Investor Presentation under review",
                      time: "5h ago",
                      color: "text-secondary"
                    },
                    {
                      icon: Users,
                      text: "3 new staff onboarded — Mumbai Central",
                      time: "1d ago",
                      color: "text-accent-foreground"
                    },
                    {
                      icon: Activity,
                      text: "Kochi Maritime compliance flag raised",
                      time: "2d ago",
                      color: "text-destructive"
                    }
                  ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 py-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      item.icon,
                      {
                        className: `w-3 h-3 mt-0.5 shrink-0 ${item.color}`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-foreground leading-snug flex-1 min-w-0", children: item.text }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground whitespace-nowrap", children: item.time })
                  ] }, item.text)) })
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
  AdminDashboard as default
};
