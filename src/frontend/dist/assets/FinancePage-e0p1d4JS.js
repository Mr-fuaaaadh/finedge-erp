import { b as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Button, D as DollarSign, d as TrendingUp, m as motion, z as ue } from "./index--w3DYRFQ.js";
import { I as Input, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-Bi2YwvFw.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-C-giT0DG.js";
import { C as ChartCard } from "./ChartCard-BEulRt6P.js";
import { P as PageHeader, D as Download, e as exportToCSV } from "./csvExport-DThDKCEu.js";
import { T as TrendingDown, S as StatCard } from "./StatCard-Dmm7jm2H.js";
import { b as mockBranchFinanceSummary, m as mockMonthlyFinance } from "./mockFinance-Cb7hJvCp.js";
import { R as ResponsiveContainer, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, L as Legend, B as Bar, a as Cell } from "./generateCategoricalChart-CVvru8ED.js";
import { A as AreaChart, a as Area } from "./AreaChart-BDsBOrRQ.js";
import { B as BarChart } from "./BarChart-C9wnbT7l.js";
import { P as PieChart, a as Pie } from "./PieChart-C34hjOom.js";
import { A as ArrowUpRight, a as ArrowDownRight } from "./arrow-up-right-_u9HcyYx.js";
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
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
];
const Layers = createLucideIcon("layers", __iconNode);
const expenseBreakdown = [
  { name: "Operations", value: 35, color: "oklch(0.42 0.08 265)" },
  { name: "Salary", value: 28, color: "oklch(0.60 0.10 185)" },
  { name: "Marketing", value: 18, color: "oklch(0.68 0.18 75)" },
  { name: "IT", value: 12, color: "oklch(0.55 0.15 155)" },
  { name: "Other", value: 7, color: "oklch(0.58 0.12 260)" }
];
const investmentPortfolio = [
  { name: "Fixed Deposits", value: 40, color: "oklch(0.42 0.08 265)" },
  { name: "Mutual Funds", value: 25, color: "oklch(0.60 0.10 185)" },
  { name: "Bonds", value: 20, color: "oklch(0.68 0.18 75)" },
  { name: "Equity", value: 10, color: "oklch(0.55 0.15 155)" },
  { name: "Others", value: 5, color: "oklch(0.58 0.12 260)" }
];
const investmentTable = [
  {
    asset: "Fixed Deposits",
    principal: 18.4,
    current: 20.1,
    returns: 9.2,
    maturity: "2026-03-31"
  },
  {
    asset: "Mutual Funds",
    principal: 11.5,
    current: 13.8,
    returns: 20,
    maturity: "Open-ended"
  },
  {
    asset: "Bonds (Govt)",
    principal: 9.2,
    current: 9.9,
    returns: 7.6,
    maturity: "2027-06-30"
  },
  {
    asset: "Equity Portfolio",
    principal: 4.6,
    current: 5.9,
    returns: 28.3,
    maturity: "Open-ended"
  },
  {
    asset: "Others",
    principal: 2.3,
    current: 2.5,
    returns: 8.7,
    maturity: "2025-12-31"
  }
];
const loanPortfolio = [
  {
    id: "LN-2024-001",
    borrower: "Arvind Traders Ltd",
    amount: 25e6,
    disbursed: "2024-01-15",
    tenure: "36 months",
    repaid: 42,
    status: "Active"
  },
  {
    id: "LN-2024-002",
    borrower: "Meenakshi Enterprises",
    amount: 125e5,
    disbursed: "2024-02-20",
    tenure: "24 months",
    repaid: 58,
    status: "Active"
  },
  {
    id: "LN-2024-003",
    borrower: "Global Infra Corp",
    amount: 5e7,
    disbursed: "2024-03-05",
    tenure: "60 months",
    repaid: 20,
    status: "Active"
  },
  {
    id: "LN-2024-004",
    borrower: "Sunrise Hospitality",
    amount: 8e6,
    disbursed: "2023-11-10",
    tenure: "18 months",
    repaid: 88,
    status: "Active"
  },
  {
    id: "LN-2024-005",
    borrower: "TechBridge Solutions",
    amount: 15e6,
    disbursed: "2024-04-01",
    tenure: "48 months",
    repaid: 10,
    status: "Active"
  },
  {
    id: "LN-2023-008",
    borrower: "Shree Agro Foods",
    amount: 6e6,
    disbursed: "2022-06-12",
    tenure: "24 months",
    repaid: 100,
    status: "Closed"
  },
  {
    id: "LN-2024-006",
    borrower: "Prime Real Estate",
    amount: 75e6,
    disbursed: "2024-01-30",
    tenure: "84 months",
    repaid: 8,
    status: "Overdue"
  }
];
const quarterlyData = [
  { quarter: "Q1 2024", revenue: 142e5, expenses: 78e5 },
  { quarter: "Q2 2024", revenue: 158e5, expenses: 81e5 },
  { quarter: "Q3 2024", revenue: 169e5, expenses: 86e5 },
  { quarter: "Q4 2024", revenue: 184e5, expenses: 92e5 }
];
const branchRevHorizontal = mockBranchFinanceSummary.map((b) => ({
  name: b.branchName.split(" ")[0],
  revenue: Math.round(b.totalRevenue / 1e6),
  expenses: Math.round(b.totalExpenses / 1e6)
}));
const PERIOD_OPTIONS = [
  "This Month",
  "Last Month",
  "This Quarter",
  "This Year"
];
function fmt(n) {
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`;
  if (n >= 1e3) return `$${(n / 1e3).toFixed(0)}K`;
  return `$${n}`;
}
const MANAGERS = [
  "Amit Patel",
  "Sunita Reddy",
  "Pooja Verma",
  "Suresh Babu",
  "Nisha Thomas"
];
function FinancePage() {
  const [activeTab, setActiveTab] = reactExports.useState("overview");
  const [branchSearch, setBranchSearch] = reactExports.useState("");
  const [branchPeriod, setBranchPeriod] = reactExports.useState("This Month");
  const filteredBranchData = reactExports.useMemo(() => {
    return mockBranchFinanceSummary.filter((b) => {
      if (branchSearch && !b.branchName.toLowerCase().includes(branchSearch.toLowerCase()))
        return false;
      return true;
    });
  }, [branchSearch]);
  function handleExportCSV() {
    if (activeTab === "branch") {
      const rows = filteredBranchData.map((b, i) => ({
        Branch: b.branchName,
        Manager: MANAGERS[i] ?? "",
        Revenue: `₹${(b.totalRevenue / 1e6).toFixed(2)}M`,
        Expenses: `₹${(b.totalExpenses / 1e6).toFixed(2)}M`,
        "Net Profit": `₹${(b.totalProfit / 1e6).toFixed(2)}M`,
        "Margin %": b.profitMargin,
        Period: branchPeriod
      }));
      exportToCSV(rows, "finance_branch_revenue");
    } else if (activeTab === "loans") {
      const rows = loanPortfolio.map((l) => ({
        "Loan ID": l.id,
        Borrower: l.borrower,
        Amount: fmt(l.amount),
        Disbursed: l.disbursed,
        Tenure: l.tenure,
        "Repaid %": l.repaid,
        Status: l.status
      }));
      exportToCSV(rows, "finance_loan_portfolio");
    } else if (activeTab === "investments") {
      const rows = investmentTable.map((inv) => ({
        "Asset Class": inv.asset,
        "Principal (₹M)": inv.principal,
        "Current Value (₹M)": inv.current,
        "Returns %": inv.returns,
        "Maturity Date": inv.maturity
      }));
      exportToCSV(rows, "finance_investments");
    } else {
      const rows = mockMonthlyFinance.map((m) => ({
        Month: m.month,
        Revenue: m.revenue,
        Expenses: m.expenses,
        Profit: m.profit
      }));
      exportToCSV(rows, "finance_overview");
    }
    ue.success("Finance data exported to CSV");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Finance Dashboard",
        subtitle: "Revenue, expenses, P&L analytics, loans, and investments",
        breadcrumbs: [{ label: "Home" }, { label: "Finance" }],
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "h-8 px-2 text-xs border border-input rounded-lg bg-background text-foreground",
              "data-ocid": "finance.period_select",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "FY 2024–25" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "FY 2023–24" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "FY 2022–23" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: handleExportCSV,
              className: "rounded-xl gap-1.5",
              "data-ocid": "finance.export_csv_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
                "Export CSV"
              ]
            }
          )
        ] }),
        "data-ocid": "finance.header"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6", children: [
      {
        title: "Total Revenue",
        value: "$2.4M",
        change: 12,
        icon: DollarSign,
        iconColor: "text-primary"
      },
      {
        title: "Total Expenses",
        value: "$1.1M",
        change: -3,
        icon: TrendingDown,
        iconColor: "text-red-500"
      },
      {
        title: "Net Profit",
        value: "$1.3M",
        change: 28,
        icon: TrendingUp,
        iconColor: "text-green-600"
      },
      {
        title: "Loan Portfolio",
        value: "$45.2M",
        change: 6,
        icon: Layers,
        iconColor: "text-secondary"
      }
    ].map((kpi, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.07 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            title: kpi.title,
            value: kpi.value,
            change: kpi.change,
            icon: kpi.icon,
            iconColor: kpi.iconColor,
            "data-ocid": `finance.kpi.${i + 1}`
          }
        )
      },
      kpi.title
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TabsList,
        {
          className: "mb-4 overflow-x-auto flex-wrap",
          "data-ocid": "finance.tabs",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "overview", "data-ocid": "finance.tab.overview", children: "Overview" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "branch", "data-ocid": "finance.tab.branch", children: "Branch Revenue" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "loans", "data-ocid": "finance.tab.loans", children: "Loans" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "investments", "data-ocid": "finance.tab.investments", children: "Investment" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "overview", className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChartCard,
          {
            title: "P&L Overview",
            subtitle: "12-month Revenue, Expenses, and Net Profit",
            periods: ["Full Year", "H2", "H1"],
            "data-ocid": "finance.pl_chart",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 240, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              AreaChart,
              {
                data: mockMonthlyFinance,
                margin: { top: 4, right: 8, left: 0, bottom: 0 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "revGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "stop",
                        {
                          offset: "5%",
                          stopColor: "oklch(0.42 0.08 265)",
                          stopOpacity: 0.2
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "stop",
                        {
                          offset: "95%",
                          stopColor: "oklch(0.42 0.08 265)",
                          stopOpacity: 0
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "profitGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "stop",
                        {
                          offset: "5%",
                          stopColor: "oklch(0.55 0.15 155)",
                          stopOpacity: 0.2
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "stop",
                        {
                          offset: "95%",
                          stopColor: "oklch(0.55 0.15 155)",
                          stopOpacity: 0
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CartesianGrid,
                    {
                      strokeDasharray: "3 3",
                      vertical: false,
                      stroke: "oklch(0.91 0.01 0)"
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
                      tickFormatter: (v) => `₹${(v / 1e6).toFixed(0)}M`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Tooltip,
                    {
                      formatter: (v) => [`₹${(v / 1e6).toFixed(2)}M`]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Area,
                    {
                      type: "monotone",
                      dataKey: "revenue",
                      name: "Revenue",
                      stroke: "oklch(0.42 0.08 265)",
                      strokeWidth: 2,
                      fill: "url(#revGrad)"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Area,
                    {
                      type: "monotone",
                      dataKey: "expenses",
                      name: "Expenses",
                      stroke: "oklch(0.63 0.24 17)",
                      strokeWidth: 2,
                      fill: "none",
                      strokeDasharray: "4 3"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Area,
                    {
                      type: "monotone",
                      dataKey: "profit",
                      name: "Net Profit",
                      stroke: "oklch(0.55 0.15 155)",
                      strokeWidth: 2.5,
                      fill: "url(#profitGrad)"
                    }
                  )
                ]
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChartCard,
            {
              title: "Revenue vs Expense",
              subtitle: "Quarterly comparison",
              "data-ocid": "finance.quarterly_chart",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                BarChart,
                {
                  data: quarterlyData,
                  margin: { top: 4, right: 8, left: 0, bottom: 0 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CartesianGrid,
                      {
                        strokeDasharray: "3 3",
                        vertical: false,
                        stroke: "oklch(0.91 0.01 0)"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      XAxis,
                      {
                        dataKey: "quarter",
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
                        formatter: (v) => [`₹${(v / 1e6).toFixed(2)}M`]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Bar,
                      {
                        dataKey: "revenue",
                        name: "Revenue",
                        fill: "oklch(0.42 0.08 265)",
                        radius: [4, 4, 0, 0],
                        maxBarSize: 28
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Bar,
                      {
                        dataKey: "expenses",
                        name: "Expenses",
                        fill: "oklch(0.60 0.10 185)",
                        radius: [4, 4, 0, 0],
                        maxBarSize: 28
                      }
                    )
                  ]
                }
              ) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChartCard,
            {
              title: "Expense Breakdown",
              subtitle: "Category-wise distribution",
              "data-ocid": "finance.expense_donut",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: 160, height: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Pie,
                    {
                      data: expenseBreakdown,
                      cx: "50%",
                      cy: "50%",
                      innerRadius: 45,
                      outerRadius: 72,
                      dataKey: "value",
                      paddingAngle: 3,
                      children: expenseBreakdown.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: e.color }, e.name))
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => [`${v}%`] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 space-y-2", children: expenseBreakdown.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-2.5 h-2.5 rounded-full shrink-0",
                      style: { background: e.color }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground flex-1", children: e.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-foreground", children: [
                    e.value,
                    "%"
                  ] })
                ] }, e.name)) })
              ] })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "branch", className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl shadow-card p-3 sm:p-4 flex flex-wrap items-end gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-[180px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "branch-search",
                className: "text-[11px] font-semibold text-muted-foreground mb-1 block",
                children: "Branch Name"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "branch-search",
                placeholder: "Search branch…",
                value: branchSearch,
                onChange: (e) => setBranchSearch(e.target.value),
                className: "h-8 text-xs",
                "data-ocid": "finance.branch_search_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-44 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold text-muted-foreground mb-1", children: "Period" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: branchPeriod,
                onValueChange: (v) => setBranchPeriod(v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "h-8 text-xs",
                      "aria-label": "Filter by period",
                      "data-ocid": "finance.branch_period_select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: PERIOD_OPTIONS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p, children: p }, p)) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground self-end pb-1.5", children: [
            filteredBranchData.length,
            " branches"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChartCard,
          {
            title: "Branch Revenue Comparison",
            subtitle: "Annual revenue vs expenses (₹ millions)",
            "data-ocid": "finance.branch_revenue_chart",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 240, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              BarChart,
              {
                data: branchRevHorizontal,
                layout: "vertical",
                margin: { top: 4, right: 24, left: 8, bottom: 0 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CartesianGrid,
                    {
                      strokeDasharray: "3 3",
                      horizontal: false,
                      stroke: "oklch(0.91 0.01 0)"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    XAxis,
                    {
                      type: "number",
                      tick: { fontSize: 11 },
                      axisLine: false,
                      tickLine: false,
                      tickFormatter: (v) => `₹${v}M`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    YAxis,
                    {
                      type: "category",
                      dataKey: "name",
                      tick: { fontSize: 11 },
                      axisLine: false,
                      tickLine: false,
                      width: 80
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => [`₹${v}M`] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Bar,
                    {
                      dataKey: "revenue",
                      name: "Revenue",
                      fill: "oklch(0.42 0.08 265)",
                      radius: [0, 4, 4, 0],
                      maxBarSize: 20
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Bar,
                    {
                      dataKey: "expenses",
                      name: "Expenses",
                      fill: "oklch(0.60 0.10 185)",
                      radius: [0, 4, 4, 0],
                      maxBarSize: 20
                    }
                  )
                ]
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-2xl shadow-card overflow-hidden",
            "data-ocid": "finance.branch_revenue_table",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-display font-semibold text-foreground", children: "Branch Revenue Details" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm min-w-[560px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/30 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: [
                  "Branch",
                  "Manager",
                  "Revenue",
                  "Expenses",
                  "Net Profit",
                  "Margin",
                  "QoQ"
                ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "th",
                  {
                    className: "px-4 py-2.5 text-left text-xs font-semibold text-muted-foreground",
                    children: h
                  },
                  h
                )) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: filteredBranchData.map((b, i) => {
                  const growth = [8, 12, 6, -2, 4][i] ?? 0;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "tr",
                    {
                      className: "hover:bg-muted/20 transition-smooth",
                      "data-ocid": `finance.branch_revenue_table.item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs font-semibold text-foreground", children: b.branchName }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs text-muted-foreground", children: MANAGERS[i] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5 text-xs text-foreground font-mono", children: [
                          "₹",
                          (b.totalRevenue / 1e6).toFixed(2),
                          "M"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5 text-xs text-foreground font-mono", children: [
                          "₹",
                          (b.totalExpenses / 1e6).toFixed(2),
                          "M"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5 text-xs font-semibold text-green-600 font-mono", children: [
                          "₹",
                          (b.totalProfit / 1e6).toFixed(2),
                          "M"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: `text-xs font-bold ${b.profitMargin >= 40 ? "text-green-600" : b.profitMargin >= 30 ? "text-amber-600" : "text-red-500"}`,
                            children: [
                              b.profitMargin,
                              "%"
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: `flex items-center gap-0.5 text-xs font-semibold ${growth >= 0 ? "text-green-600" : "text-red-500"}`,
                            children: [
                              growth >= 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownRight, { className: "w-3.5 h-3.5" }),
                              Math.abs(growth),
                              "%"
                            ]
                          }
                        ) })
                      ]
                    },
                    b.branchId
                  );
                }) })
              ] }) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "loans", className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4", children: [
          {
            label: "On-time Repayment",
            value: "91.4%",
            sub: "+2.1% vs last quarter",
            good: true
          },
          {
            label: "Overdue Amount",
            value: "₹3.2M",
            sub: "6 accounts overdue",
            good: false
          },
          {
            label: "NPA Ratio",
            value: "1.8%",
            sub: "Within acceptable limits",
            good: true
          }
        ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-2xl shadow-card p-4",
            "data-ocid": `finance.loan_stat.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: s.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: `text-2xl font-display font-bold mt-1 ${s.good ? "text-green-600" : "text-red-500"}`,
                  children: s.value
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: s.sub })
            ]
          },
          s.label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChartCard,
          {
            title: "Loan Disbursement & Repayment",
            subtitle: "Monthly book (₹ millions, 2024)",
            "data-ocid": "finance.loan_chart",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              BarChart,
              {
                data: mockMonthlyFinance,
                margin: { top: 4, right: 8, left: 0, bottom: 0 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CartesianGrid,
                    {
                      strokeDasharray: "3 3",
                      vertical: false,
                      stroke: "oklch(0.91 0.01 0)"
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
                      tickFormatter: (v) => `₹${(v / 1e6).toFixed(0)}M`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Tooltip,
                    {
                      formatter: (v) => [`₹${(v / 1e6).toFixed(2)}M`]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Bar,
                    {
                      dataKey: "loanDisbursed",
                      name: "Disbursed",
                      fill: "oklch(0.68 0.18 75)",
                      radius: [4, 4, 0, 0],
                      maxBarSize: 28
                    }
                  )
                ]
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-2xl shadow-card overflow-hidden",
            "data-ocid": "finance.loan_portfolio_table",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-display font-semibold text-foreground", children: "Loan Portfolio" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm min-w-[600px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/30 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: [
                  "Loan ID",
                  "Borrower",
                  "Amount",
                  "Disbursed",
                  "Tenure",
                  "Repaid %",
                  "Status"
                ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "th",
                  {
                    className: "px-4 py-2.5 text-left text-xs font-semibold text-muted-foreground",
                    children: h
                  },
                  h
                )) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: loanPortfolio.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    className: "hover:bg-muted/20 transition-smooth",
                    "data-ocid": `finance.loan_portfolio_table.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs font-mono font-semibold text-primary", children: l.id }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs font-semibold text-foreground", children: l.borrower }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs text-foreground font-mono", children: fmt(l.amount) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs text-muted-foreground", children: l.disbursed }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs text-muted-foreground", children: l.tenure }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: `h-full rounded-full ${l.repaid === 100 ? "bg-green-500" : l.repaid >= 50 ? "bg-primary" : "bg-amber-500"}`,
                            style: { width: `${l.repaid}%` }
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-foreground", children: [
                          l.repaid,
                          "%"
                        ] })
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `inline-flex items-center px-2 py-0.5 rounded-lg text-[11px] font-semibold ${l.status === "Active" ? "bg-primary/10 text-primary" : l.status === "Closed" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`,
                          children: l.status
                        }
                      ) })
                    ]
                  },
                  l.id
                )) })
              ] }) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "investments", className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChartCard,
            {
              title: "Investment Portfolio",
              subtitle: "Asset class allocation",
              "data-ocid": "finance.investment_donut",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-6 py-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: 180, height: 180, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Pie,
                    {
                      data: investmentPortfolio,
                      cx: "50%",
                      cy: "50%",
                      innerRadius: 50,
                      outerRadius: 80,
                      dataKey: "value",
                      paddingAngle: 3,
                      children: investmentPortfolio.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: e.color }, e.name))
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => [`${v}%`] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 space-y-2.5", children: investmentPortfolio.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-2.5 h-2.5 rounded-full shrink-0",
                      style: { background: e.color }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground flex-1", children: e.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-foreground", children: [
                    e.value,
                    "%"
                  ] })
                ] }, e.name)) })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
            {
              label: "Total Principal Invested",
              value: "₹46.0M",
              trend: null
            },
            {
              label: "Current Portfolio Value",
              value: "₹52.2M",
              trend: 13.5
            },
            { label: "Unrealized Gains", value: "₹6.2M", trend: 13.5 },
            { label: "Avg. Return Rate", value: "13.5%", trend: null }
          ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 12 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: i * 0.08 },
              className: "bg-card border border-border rounded-2xl shadow-card p-4 flex items-center justify-between",
              "data-ocid": `finance.investment_summary.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: s.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-display font-bold text-foreground", children: s.value }),
                  s.trend !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-[10px] text-green-600 font-medium", children: [
                    "+",
                    s.trend,
                    "% YoY"
                  ] })
                ] })
              ]
            },
            s.label
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-2xl shadow-card overflow-hidden",
            "data-ocid": "finance.investment_table",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-display font-semibold text-foreground", children: "Investment Tracking" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm min-w-[480px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/30 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: [
                  "Asset Class",
                  "Principal (₹M)",
                  "Current Value (₹M)",
                  "Returns %",
                  "Maturity Date"
                ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "th",
                  {
                    className: "px-4 py-2.5 text-left text-xs font-semibold text-muted-foreground",
                    children: h
                  },
                  h
                )) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: investmentTable.map((inv, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    className: "hover:bg-muted/20 transition-smooth",
                    "data-ocid": `finance.investment_table.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs font-semibold text-foreground", children: inv.asset }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5 text-xs text-foreground font-mono", children: [
                        "₹",
                        inv.principal,
                        "M"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5 text-xs text-foreground font-mono", children: [
                        "₹",
                        inv.current,
                        "M"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: `text-xs font-bold ${inv.returns >= 15 ? "text-green-600" : inv.returns >= 8 ? "text-amber-600" : "text-foreground"}`,
                          children: [
                            "+",
                            inv.returns,
                            "%"
                          ]
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs text-muted-foreground", children: inv.maturity })
                    ]
                  },
                  inv.asset
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
  FinancePage as default
};
