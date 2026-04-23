import { b as createLucideIcon, d as TrendingUp, D as DollarSign, j as jsxRuntimeExports, B as Button, m as motion } from "./index--w3DYRFQ.js";
import { C as ChartCard } from "./ChartCard-BEulRt6P.js";
import { P as PageHeader, D as Download, e as exportToCSV } from "./csvExport-DThDKCEu.js";
import { T as TrendingDown, S as StatCard } from "./StatCard-Dmm7jm2H.js";
import { m as mockMonthlyFinance, b as mockBranchFinanceSummary } from "./mockFinance-Cb7hJvCp.js";
import { R as ResponsiveContainer, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, L as Legend, B as Bar, a as Cell } from "./generateCategoricalChart-CVvru8ED.js";
import { A as AreaChart, a as Area } from "./AreaChart-BDsBOrRQ.js";
import { A as ArrowUpRight, a as ArrowDownRight } from "./arrow-up-right-_u9HcyYx.js";
import { B as BarChart } from "./BarChart-C9wnbT7l.js";
import { P as PieChart, a as Pie } from "./PieChart-C34hjOom.js";
import { L as LineChart, a as Line } from "./LineChart-D336VMeo.js";
import "./PolarAngleAxis-Di9qdXjh.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
];
const Wallet = createLucideIcon("wallet", __iconNode);
const CHART_PRIMARY = "oklch(0.42 0.08 265)";
const CHART_SECONDARY = "oklch(0.60 0.10 185)";
const CHART_ACCENT = "oklch(0.68 0.18 75)";
const CHART_GREEN = "oklch(0.55 0.15 155)";
const CHART_PURPLE = "oklch(0.58 0.12 260)";
const CHART_RED = "oklch(0.63 0.24 17)";
const CHART_GRID = "oklch(0.91 0.01 0)";
const investmentPortfolio = [
  { name: "Government Bonds", value: 35, color: CHART_PRIMARY },
  { name: "Corporate Bonds", value: 22, color: CHART_SECONDARY },
  { name: "Equities", value: 18, color: CHART_GREEN },
  { name: "Real Estate", value: 15, color: CHART_ACCENT },
  { name: "Mutual Funds", value: 10, color: CHART_PURPLE }
];
function FinanceDashboard() {
  const totalRevenue = mockMonthlyFinance.reduce((s, m) => s + m.revenue, 0);
  const totalExpenses = mockMonthlyFinance.reduce((s, m) => s + m.expenses, 0);
  const netProfit = totalRevenue - totalExpenses;
  const profitMargin = Math.round(netProfit / totalRevenue * 100);
  const loanPortfolio = mockMonthlyFinance.reduce(
    (s, m) => s + m.loanDisbursed,
    0
  );
  const plData = mockMonthlyFinance.map((m) => ({ ...m }));
  const branchTable = [...mockBranchFinanceSummary].sort((a, b) => b.totalRevenue - a.totalRevenue).map((b, i) => ({
    ...b,
    rank: i + 1,
    growth: Number.parseFloat((Math.random() * 20 - 5).toFixed(1))
  }));
  const repaymentData = mockMonthlyFinance.map((m) => ({
    month: m.month,
    disbursed: m.loanDisbursed,
    repaid: Math.round(m.loanDisbursed * 0.82)
  }));
  const kpis = [
    {
      title: "Total Revenue (YTD)",
      value: `₹${(totalRevenue / 1e6).toFixed(1)}M`,
      change: 14,
      icon: TrendingUp,
      iconColor: "text-green-600"
    },
    {
      title: "Total Expenses",
      value: `₹${(totalExpenses / 1e6).toFixed(1)}M`,
      change: -3,
      icon: TrendingDown,
      iconColor: "text-destructive"
    },
    {
      title: `Net Profit (${profitMargin}% margin)`,
      value: `₹${(netProfit / 1e6).toFixed(1)}M`,
      change: 18,
      icon: DollarSign,
      iconColor: "text-primary"
    },
    {
      title: "Loan Portfolio",
      value: `₹${(loanPortfolio / 1e6).toFixed(1)}M`,
      change: 9,
      icon: Wallet,
      iconColor: "text-secondary"
    }
  ];
  function handleExportCSV() {
    const exportData = [
      ...kpis.map((k) => ({
        Category: "KPI",
        Metric: k.title,
        Value: k.value,
        "Change (%)": k.change
      })),
      ...branchTable.map((b) => ({
        Category: "Branch",
        Metric: b.branchName,
        Revenue: `₹${(b.totalRevenue / 1e6).toFixed(2)}M`,
        Expenses: `₹${(b.totalExpenses / 1e6).toFixed(2)}M`,
        Profit: `₹${(b.totalProfit / 1e6).toFixed(2)}M`,
        "Margin (%)": b.profitMargin
      }))
    ];
    exportToCSV(exportData, "finance-dashboard");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Finance Dashboard",
        subtitle: `Enterprise financial overview — FY 2024 · As of ${(/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}`,
        breadcrumbs: [{ label: "Dashboard" }, { label: "Finance" }],
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: handleExportCSV,
            className: "gap-1.5 text-xs",
            "data-ocid": "finance_dashboard.export_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden xs:inline", children: "Export CSV" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "xs:hidden", children: "Export" })
            ]
          }
        ),
        "data-ocid": "finance_dashboard.header"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6", children: kpis.map((kpi, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
            "data-ocid": `finance_dashboard.kpi.${i + 1}`
          }
        )
      },
      kpi.title
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "mb-4 sm:mb-6",
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.38 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChartCard,
          {
            title: "Profit & Loss Statement",
            subtitle: "12-month revenue, expenses & profit trend",
            periods: ["2024", "YTD", "Q4"],
            "data-ocid": "finance_dashboard.pl_chart",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              AreaChart,
              {
                data: plData,
                margin: { top: 4, right: 8, left: 0, bottom: 0 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "finRevGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "stop",
                        {
                          offset: "5%",
                          stopColor: CHART_PRIMARY,
                          stopOpacity: 0.15
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "stop",
                        {
                          offset: "95%",
                          stopColor: CHART_PRIMARY,
                          stopOpacity: 0
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "finExpGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: CHART_RED, stopOpacity: 0.15 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: CHART_RED, stopOpacity: 0 })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "finProfGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: CHART_GREEN, stopOpacity: 0.2 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: CHART_GREEN, stopOpacity: 0 })
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
                      contentStyle: { borderRadius: "8px", fontSize: 11 }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: { fontSize: 11 } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Area,
                    {
                      type: "monotone",
                      dataKey: "revenue",
                      name: "Revenue",
                      stroke: CHART_PRIMARY,
                      strokeWidth: 2,
                      fill: "url(#finRevGrad)"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Area,
                    {
                      type: "monotone",
                      dataKey: "expenses",
                      name: "Expenses",
                      stroke: CHART_RED,
                      strokeWidth: 2,
                      fill: "url(#finExpGrad)"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Area,
                    {
                      type: "monotone",
                      dataKey: "profit",
                      name: "Net Profit",
                      stroke: CHART_GREEN,
                      strokeWidth: 2.5,
                      fill: "url(#finProfGrad)"
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
        className: "mb-4 sm:mb-6",
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.46 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChartCard,
          {
            title: "Branch-wise Revenue",
            subtitle: "Full-year consolidated per branch",
            "data-ocid": "finance_dashboard.branch_revenue_table",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto mt-1 -mx-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs min-w-[520px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2.5 px-2 font-semibold text-muted-foreground", children: "#" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2.5 px-2 font-semibold text-muted-foreground", children: "Branch" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2.5 px-2 font-semibold text-muted-foreground", children: "Revenue" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2.5 px-2 font-semibold text-muted-foreground hidden sm:table-cell", children: "Expenses" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2.5 px-2 font-semibold text-muted-foreground", children: "Net Profit" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2.5 px-2 font-semibold text-muted-foreground hidden md:table-cell", children: "Margin" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2.5 px-2 font-semibold text-muted-foreground", children: "Growth" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: branchTable.map((branch, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: "border-b border-border/50 hover:bg-muted/30 transition-smooth",
                  "data-ocid": `finance_dashboard.branch_revenue_table.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 text-muted-foreground font-semibold", children: branch.rank }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 font-semibold text-foreground", children: branch.branchName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-2 text-right font-semibold text-foreground", children: [
                      "₹",
                      (branch.totalRevenue / 1e6).toFixed(2),
                      "M"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-2 text-right text-muted-foreground hidden sm:table-cell", children: [
                      "₹",
                      (branch.totalExpenses / 1e6).toFixed(2),
                      "M"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-2 text-right font-semibold text-green-600 dark:text-green-400", children: [
                      "₹",
                      (branch.totalProfit / 1e6).toFixed(2),
                      "M"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 text-right hidden md:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: `font-bold ${branch.profitMargin >= 40 ? "text-green-600 dark:text-green-400" : "text-amber-600"}`,
                        children: [
                          branch.profitMargin,
                          "%"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-2 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: `flex items-center justify-end gap-0.5 font-semibold ${branch.growth >= 0 ? "text-green-600 dark:text-green-400" : "text-destructive"}`,
                        children: [
                          branch.growth >= 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownRight, { className: "w-3 h-3" }),
                          Math.abs(branch.growth),
                          "%"
                        ]
                      }
                    ) })
                  ]
                },
                branch.branchId
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tfoot", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t-2 border-border bg-muted/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "td",
                  {
                    className: "py-2.5 px-2 font-bold text-foreground",
                    colSpan: 2,
                    children: "Total"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-2 text-right font-bold text-foreground", children: [
                  "₹",
                  (totalRevenue / 1e6).toFixed(2),
                  "M"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-2 text-right font-bold text-muted-foreground hidden sm:table-cell", children: [
                  "₹",
                  (totalExpenses / 1e6).toFixed(2),
                  "M"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-2 text-right font-bold text-green-600 dark:text-green-400", children: [
                  "₹",
                  (netProfit / 1e6).toFixed(2),
                  "M"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-2 text-right font-bold text-primary hidden md:table-cell", children: [
                  profitMargin,
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-right font-bold text-green-600", children: "+12.4%" })
              ] }) })
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
          transition: { delay: 0.54 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChartCard,
            {
              title: "Loan Disbursement",
              subtitle: "Monthly disbursals (2024)",
              "data-ocid": "finance_dashboard.loan_disbursement_chart",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                BarChart,
                {
                  data: mockMonthlyFinance,
                  margin: { top: 4, right: 4, left: 0, bottom: 0 },
                  children: [
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
                        tick: { fontSize: 10 },
                        axisLine: false,
                        tickLine: false
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      YAxis,
                      {
                        tick: { fontSize: 10 },
                        axisLine: false,
                        tickLine: false,
                        tickFormatter: (v) => `₹${(v / 1e6).toFixed(0)}M`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Tooltip,
                      {
                        formatter: (v) => [
                          `₹${(v / 1e6).toFixed(2)}M`,
                          "Disbursed"
                        ],
                        contentStyle: { fontSize: 11 }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Bar,
                      {
                        dataKey: "loanDisbursed",
                        name: "Disbursed",
                        radius: [4, 4, 0, 0],
                        maxBarSize: 20,
                        children: mockMonthlyFinance.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Cell,
                          {
                            fill: CHART_PRIMARY,
                            fillOpacity: 0.6 + i * 0.032
                          },
                          `cell-${entry.month}`
                        ))
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
          transition: { delay: 0.6 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            ChartCard,
            {
              title: "Investment Portfolio",
              subtitle: "Asset class distribution",
              "data-ocid": "finance_dashboard.investment_portfolio_chart",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 140, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Pie,
                    {
                      data: investmentPortfolio,
                      cx: "50%",
                      cy: "50%",
                      innerRadius: 44,
                      outerRadius: 64,
                      paddingAngle: 2,
                      dataKey: "value",
                      children: investmentPortfolio.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.color }, entry.name))
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Tooltip,
                    {
                      formatter: (v) => [`${v}%`, "Allocation"],
                      contentStyle: { fontSize: 11 }
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 mt-1", children: investmentPortfolio.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-between text-xs",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "w-2 h-2 rounded-full shrink-0",
                            style: { background: item.color }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground truncate", children: item.name })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground shrink-0", children: [
                        item.value,
                        "%"
                      ] })
                    ]
                  },
                  item.name
                )) })
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
          transition: { delay: 0.66 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            ChartCard,
            {
              title: "Repayment Analytics",
              subtitle: "Disbursed vs repaid (2024)",
              "data-ocid": "finance_dashboard.repayment_analytics_chart",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  LineChart,
                  {
                    data: repaymentData,
                    margin: { top: 4, right: 4, left: 0, bottom: 0 },
                    children: [
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
                          tick: { fontSize: 10 },
                          axisLine: false,
                          tickLine: false
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        YAxis,
                        {
                          tick: { fontSize: 10 },
                          axisLine: false,
                          tickLine: false,
                          tickFormatter: (v) => `₹${(v / 1e6).toFixed(0)}M`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Tooltip,
                        {
                          formatter: (v, name) => [
                            `₹${(v / 1e6).toFixed(2)}M`,
                            name
                          ],
                          contentStyle: { fontSize: 11 }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: { fontSize: 10 } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Line,
                        {
                          type: "monotone",
                          dataKey: "disbursed",
                          name: "Disbursed",
                          stroke: CHART_PRIMARY,
                          strokeWidth: 2,
                          dot: { r: 2 },
                          activeDot: { r: 4 }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Line,
                        {
                          type: "monotone",
                          dataKey: "repaid",
                          name: "Repaid",
                          stroke: CHART_GREEN,
                          strokeWidth: 2,
                          dot: { r: 2 },
                          activeDot: { r: 4 }
                        }
                      )
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-2 rounded-xl bg-muted/40", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-display font-bold text-foreground", children: [
                      "₹",
                      (loanPortfolio / 1e6).toFixed(1),
                      "M"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Total Disbursed" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-2 rounded-xl bg-primary/5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-display font-bold text-green-700 dark:text-green-400", children: [
                      "₹",
                      (loanPortfolio * 0.82 / 1e6).toFixed(1),
                      "M"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Total Repaid" })
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
  FinanceDashboard as default
};
