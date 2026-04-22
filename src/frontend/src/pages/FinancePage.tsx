import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  DollarSign,
  Layers,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import {
  Area,
  AreaChart,
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
import { ChartCard } from "../components/shared/ChartCard";
import { PageHeader } from "../components/shared/PageHeader";
import { StatCard } from "../components/shared/StatCard";
import {
  mockBranchFinanceSummary,
  mockMonthlyFinance,
} from "../data/mockFinance";

// ─── Static mock data ──────────────────────────────────────────────────────────
const expenseBreakdown = [
  { name: "Operations", value: 35, color: "oklch(0.42 0.08 265)" },
  { name: "Salary", value: 28, color: "oklch(0.60 0.10 185)" },
  { name: "Marketing", value: 18, color: "oklch(0.68 0.18 75)" },
  { name: "IT", value: 12, color: "oklch(0.55 0.15 155)" },
  { name: "Other", value: 7, color: "oklch(0.58 0.12 260)" },
];

const investmentPortfolio = [
  { name: "Fixed Deposits", value: 40, color: "oklch(0.42 0.08 265)" },
  { name: "Mutual Funds", value: 25, color: "oklch(0.60 0.10 185)" },
  { name: "Bonds", value: 20, color: "oklch(0.68 0.18 75)" },
  { name: "Equity", value: 10, color: "oklch(0.55 0.15 155)" },
  { name: "Others", value: 5, color: "oklch(0.58 0.12 260)" },
];

const investmentTable = [
  {
    asset: "Fixed Deposits",
    principal: 18.4,
    current: 20.1,
    returns: 9.2,
    maturity: "2026-03-31",
  },
  {
    asset: "Mutual Funds",
    principal: 11.5,
    current: 13.8,
    returns: 20.0,
    maturity: "Open-ended",
  },
  {
    asset: "Bonds (Govt)",
    principal: 9.2,
    current: 9.9,
    returns: 7.6,
    maturity: "2027-06-30",
  },
  {
    asset: "Equity Portfolio",
    principal: 4.6,
    current: 5.9,
    returns: 28.3,
    maturity: "Open-ended",
  },
  {
    asset: "Others",
    principal: 2.3,
    current: 2.5,
    returns: 8.7,
    maturity: "2025-12-31",
  },
];

const loanPortfolio = [
  {
    id: "LN-2024-001",
    borrower: "Arvind Traders Ltd",
    amount: 25000000,
    disbursed: "2024-01-15",
    tenure: "36 months",
    repaid: 42,
    status: "Active",
  },
  {
    id: "LN-2024-002",
    borrower: "Meenakshi Enterprises",
    amount: 12500000,
    disbursed: "2024-02-20",
    tenure: "24 months",
    repaid: 58,
    status: "Active",
  },
  {
    id: "LN-2024-003",
    borrower: "Global Infra Corp",
    amount: 50000000,
    disbursed: "2024-03-05",
    tenure: "60 months",
    repaid: 20,
    status: "Active",
  },
  {
    id: "LN-2024-004",
    borrower: "Sunrise Hospitality",
    amount: 8000000,
    disbursed: "2023-11-10",
    tenure: "18 months",
    repaid: 88,
    status: "Active",
  },
  {
    id: "LN-2024-005",
    borrower: "TechBridge Solutions",
    amount: 15000000,
    disbursed: "2024-04-01",
    tenure: "48 months",
    repaid: 10,
    status: "Active",
  },
  {
    id: "LN-2023-008",
    borrower: "Shree Agro Foods",
    amount: 6000000,
    disbursed: "2022-06-12",
    tenure: "24 months",
    repaid: 100,
    status: "Closed",
  },
  {
    id: "LN-2024-006",
    borrower: "Prime Real Estate",
    amount: 75000000,
    disbursed: "2024-01-30",
    tenure: "84 months",
    repaid: 8,
    status: "Overdue",
  },
];

const quarterlyData = [
  { quarter: "Q1 2024", revenue: 14200000, expenses: 7800000 },
  { quarter: "Q2 2024", revenue: 15800000, expenses: 8100000 },
  { quarter: "Q3 2024", revenue: 16900000, expenses: 8600000 },
  { quarter: "Q4 2024", revenue: 18400000, expenses: 9200000 },
];

const branchRevHorizontal = mockBranchFinanceSummary.map((b) => ({
  name: b.branchName.split(" ")[0],
  revenue: Math.round(b.totalRevenue / 1000000),
  expenses: Math.round(b.totalExpenses / 1000000),
}));

// ─── Helpers ──────────────────────────────────────────────────────────────────
function fmt(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n}`;
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function FinancePage() {
  return (
    <div>
      <PageHeader
        title="Finance Dashboard"
        subtitle="Revenue, expenses, P&L analytics, loans, and investments"
        breadcrumbs={[{ label: "Home" }, { label: "Finance" }]}
        actions={
          <div className="flex items-center gap-2">
            <select
              className="h-8 px-2 text-xs border border-input rounded-lg bg-background text-foreground"
              data-ocid="finance.period_select"
            >
              <option>FY 2024–25</option>
              <option>FY 2023–24</option>
              <option>FY 2022–23</option>
            </select>
            <Button
              variant="outline"
              size="sm"
              data-ocid="finance.export_button"
            >
              <BarChart3 className="w-3.5 h-3.5 mr-2" />
              Export
            </Button>
          </div>
        }
        data-ocid="finance.header"
      />

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
        {[
          {
            title: "Total Revenue",
            value: "$2.4M",
            change: 12,
            icon: DollarSign,
            iconColor: "text-primary",
          },
          {
            title: "Total Expenses",
            value: "$1.1M",
            change: -3,
            icon: TrendingDown,
            iconColor: "text-red-500",
          },
          {
            title: "Net Profit",
            value: "$1.3M",
            change: 28,
            icon: TrendingUp,
            iconColor: "text-green-600",
          },
          {
            title: "Loan Portfolio",
            value: "$45.2M",
            change: 6,
            icon: Layers,
            iconColor: "text-secondary",
          },
        ].map((kpi, i) => (
          <motion.div
            key={kpi.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
          >
            <StatCard
              title={kpi.title}
              value={kpi.value}
              change={kpi.change}
              icon={kpi.icon}
              iconColor={kpi.iconColor}
              data-ocid={`finance.kpi.${i + 1}`}
            />
          </motion.div>
        ))}
      </div>

      <Tabs defaultValue="overview">
        <TabsList
          className="mb-4 overflow-x-auto flex-wrap"
          data-ocid="finance.tabs"
        >
          <TabsTrigger value="overview" data-ocid="finance.tab.overview">
            Overview
          </TabsTrigger>
          <TabsTrigger value="branch" data-ocid="finance.tab.branch">
            Branch Revenue
          </TabsTrigger>
          <TabsTrigger value="loans" data-ocid="finance.tab.loans">
            Loans
          </TabsTrigger>
          <TabsTrigger value="investments" data-ocid="finance.tab.investments">
            Investment
          </TabsTrigger>
        </TabsList>

        {/* ── Overview ── */}
        <TabsContent value="overview" className="space-y-4">
          {/* P&L Area Chart */}
          <ChartCard
            title="P&L Overview"
            subtitle="12-month Revenue, Expenses, and Net Profit"
            periods={["Full Year", "H2", "H1"]}
            data-ocid="finance.pl_chart"
          >
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart
                data={mockMonthlyFinance}
                margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="oklch(0.42 0.08 265)"
                      stopOpacity={0.2}
                    />
                    <stop
                      offset="95%"
                      stopColor="oklch(0.42 0.08 265)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                  <linearGradient id="profitGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="oklch(0.55 0.15 155)"
                      stopOpacity={0.2}
                    />
                    <stop
                      offset="95%"
                      stopColor="oklch(0.55 0.15 155)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="oklch(0.91 0.01 0)"
                />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `₹${(v / 1000000).toFixed(0)}M`}
                />
                <Tooltip
                  formatter={(v: number) => [`₹${(v / 1000000).toFixed(2)}M`]}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  name="Revenue"
                  stroke="oklch(0.42 0.08 265)"
                  strokeWidth={2}
                  fill="url(#revGrad)"
                />
                <Area
                  type="monotone"
                  dataKey="expenses"
                  name="Expenses"
                  stroke="oklch(0.63 0.24 17)"
                  strokeWidth={2}
                  fill="none"
                  strokeDasharray="4 3"
                />
                <Area
                  type="monotone"
                  dataKey="profit"
                  name="Net Profit"
                  stroke="oklch(0.55 0.15 155)"
                  strokeWidth={2.5}
                  fill="url(#profitGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {/* Quarterly Bar Chart */}
            <ChartCard
              title="Revenue vs Expense"
              subtitle="Quarterly comparison"
              data-ocid="finance.quarterly_chart"
            >
              <ResponsiveContainer width="100%" height={220}>
                <BarChart
                  data={quarterlyData}
                  margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="oklch(0.91 0.01 0)"
                  />
                  <XAxis
                    dataKey="quarter"
                    tick={{ fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `₹${(v / 1000000).toFixed(0)}M`}
                  />
                  <Tooltip
                    formatter={(v: number) => [`₹${(v / 1000000).toFixed(2)}M`]}
                  />
                  <Bar
                    dataKey="revenue"
                    name="Revenue"
                    fill="oklch(0.42 0.08 265)"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={28}
                  />
                  <Bar
                    dataKey="expenses"
                    name="Expenses"
                    fill="oklch(0.60 0.10 185)"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={28}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* Expense Donut */}
            <ChartCard
              title="Expense Breakdown"
              subtitle="Category-wise distribution"
              data-ocid="finance.expense_donut"
            >
              <div className="flex items-center gap-4">
                <ResponsiveContainer width={160} height={160}>
                  <PieChart>
                    <Pie
                      data={expenseBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={45}
                      outerRadius={72}
                      dataKey="value"
                      paddingAngle={3}
                    >
                      {expenseBreakdown.map((e) => (
                        <Cell key={e.name} fill={e.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(v: number) => [`${v}%`]} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex-1 space-y-2">
                  {expenseBreakdown.map((e) => (
                    <div key={e.name} className="flex items-center gap-2">
                      <div
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ background: e.color }}
                      />
                      <span className="text-xs text-foreground flex-1">
                        {e.name}
                      </span>
                      <span className="text-xs font-bold text-foreground">
                        {e.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ChartCard>
          </div>
        </TabsContent>

        {/* ── Branch Revenue ── */}
        <TabsContent value="branch" className="space-y-4">
          <ChartCard
            title="Branch Revenue Comparison"
            subtitle="Annual revenue vs expenses (₹ millions)"
            data-ocid="finance.branch_revenue_chart"
          >
            <ResponsiveContainer width="100%" height={240}>
              <BarChart
                data={branchRevHorizontal}
                layout="vertical"
                margin={{ top: 4, right: 24, left: 8, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke="oklch(0.91 0.01 0)"
                />
                <XAxis
                  type="number"
                  tick={{ fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `₹${v}M`}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  width={80}
                />
                <Tooltip formatter={(v: number) => [`₹${v}M`]} />
                <Bar
                  dataKey="revenue"
                  name="Revenue"
                  fill="oklch(0.42 0.08 265)"
                  radius={[0, 4, 4, 0]}
                  maxBarSize={20}
                />
                <Bar
                  dataKey="expenses"
                  name="Expenses"
                  fill="oklch(0.60 0.10 185)"
                  radius={[0, 4, 4, 0]}
                  maxBarSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <div
            className="bg-card border border-border rounded-2xl shadow-card overflow-hidden"
            data-ocid="finance.branch_revenue_table"
          >
            <div className="px-5 py-3 border-b border-border">
              <h3 className="text-sm font-display font-semibold text-foreground">
                Branch Revenue Details
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[560px]">
                <thead className="bg-muted/30 border-b border-border">
                  <tr>
                    {[
                      "Branch",
                      "Manager",
                      "Revenue",
                      "Expenses",
                      "Net Profit",
                      "Margin",
                      "QoQ",
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-2.5 text-left text-xs font-semibold text-muted-foreground"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {mockBranchFinanceSummary.map((b, i) => {
                    const growth = [8, 12, 6, -2, 4][i] ?? 0;
                    const managers = [
                      "Amit Patel",
                      "Sunita Reddy",
                      "Pooja Verma",
                      "Suresh Babu",
                      "Nisha Thomas",
                    ];
                    return (
                      <tr
                        key={b.branchId}
                        className="hover:bg-muted/20 transition-smooth"
                        data-ocid={`finance.branch_revenue_table.item.${i + 1}`}
                      >
                        <td className="px-4 py-2.5 text-xs font-semibold text-foreground">
                          {b.branchName}
                        </td>
                        <td className="px-4 py-2.5 text-xs text-muted-foreground">
                          {managers[i]}
                        </td>
                        <td className="px-4 py-2.5 text-xs text-foreground font-mono">
                          ₹{(b.totalRevenue / 1000000).toFixed(2)}M
                        </td>
                        <td className="px-4 py-2.5 text-xs text-foreground font-mono">
                          ₹{(b.totalExpenses / 1000000).toFixed(2)}M
                        </td>
                        <td className="px-4 py-2.5 text-xs font-semibold text-green-600 font-mono">
                          ₹{(b.totalProfit / 1000000).toFixed(2)}M
                        </td>
                        <td className="px-4 py-2.5">
                          <span
                            className={`text-xs font-bold ${b.profitMargin >= 40 ? "text-green-600" : b.profitMargin >= 30 ? "text-amber-600" : "text-red-500"}`}
                          >
                            {b.profitMargin}%
                          </span>
                        </td>
                        <td className="px-4 py-2.5">
                          <span
                            className={`flex items-center gap-0.5 text-xs font-semibold ${growth >= 0 ? "text-green-600" : "text-red-500"}`}
                          >
                            {growth >= 0 ? (
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            ) : (
                              <ArrowDownRight className="w-3.5 h-3.5" />
                            )}
                            {Math.abs(growth)}%
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        {/* ── Loans ── */}
        <TabsContent value="loans" className="space-y-4">
          {/* Repayment Analytics cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                label: "On-time Repayment",
                value: "91.4%",
                sub: "+2.1% vs last quarter",
                good: true,
              },
              {
                label: "Overdue Amount",
                value: "₹3.2M",
                sub: "6 accounts overdue",
                good: false,
              },
              {
                label: "NPA Ratio",
                value: "1.8%",
                sub: "Within acceptable limits",
                good: true,
              },
            ].map((s, i) => (
              <div
                key={s.label}
                className="bg-card border border-border rounded-2xl shadow-card p-4"
                data-ocid={`finance.loan_stat.${i + 1}`}
              >
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p
                  className={`text-2xl font-display font-bold mt-1 ${s.good ? "text-green-600" : "text-red-500"}`}
                >
                  {s.value}
                </p>
                <p className="text-[10px] text-muted-foreground mt-0.5">
                  {s.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Loan Disbursement Chart */}
          <ChartCard
            title="Loan Disbursement & Repayment"
            subtitle="Monthly book (₹ millions, 2024)"
            data-ocid="finance.loan_chart"
          >
            <ResponsiveContainer width="100%" height={220}>
              <BarChart
                data={mockMonthlyFinance}
                margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="oklch(0.91 0.01 0)"
                />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `₹${(v / 1000000).toFixed(0)}M`}
                />
                <Tooltip
                  formatter={(v: number) => [`₹${(v / 1000000).toFixed(2)}M`]}
                />
                <Bar
                  dataKey="loanDisbursed"
                  name="Disbursed"
                  fill="oklch(0.68 0.18 75)"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={28}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Loan Portfolio Table */}
          <div
            className="bg-card border border-border rounded-2xl shadow-card overflow-hidden"
            data-ocid="finance.loan_portfolio_table"
          >
            <div className="px-5 py-3 border-b border-border">
              <h3 className="text-sm font-display font-semibold text-foreground">
                Loan Portfolio
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[600px]">
                <thead className="bg-muted/30 border-b border-border">
                  <tr>
                    {[
                      "Loan ID",
                      "Borrower",
                      "Amount",
                      "Disbursed",
                      "Tenure",
                      "Repaid %",
                      "Status",
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-2.5 text-left text-xs font-semibold text-muted-foreground"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {loanPortfolio.map((l, i) => (
                    <tr
                      key={l.id}
                      className="hover:bg-muted/20 transition-smooth"
                      data-ocid={`finance.loan_portfolio_table.item.${i + 1}`}
                    >
                      <td className="px-4 py-2.5 text-xs font-mono font-semibold text-primary">
                        {l.id}
                      </td>
                      <td className="px-4 py-2.5 text-xs font-semibold text-foreground">
                        {l.borrower}
                      </td>
                      <td className="px-4 py-2.5 text-xs text-foreground font-mono">
                        {fmt(l.amount)}
                      </td>
                      <td className="px-4 py-2.5 text-xs text-muted-foreground">
                        {l.disbursed}
                      </td>
                      <td className="px-4 py-2.5 text-xs text-muted-foreground">
                        {l.tenure}
                      </td>
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden">
                            <div
                              className={`h-full rounded-full ${l.repaid === 100 ? "bg-green-500" : l.repaid >= 50 ? "bg-primary" : "bg-amber-500"}`}
                              style={{ width: `${l.repaid}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold text-foreground">
                            {l.repaid}%
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-2.5">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-lg text-[11px] font-semibold ${
                            l.status === "Active"
                              ? "bg-primary/10 text-primary"
                              : l.status === "Closed"
                                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          }`}
                        >
                          {l.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        {/* ── Investment ── */}
        <TabsContent value="investments" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <ChartCard
              title="Investment Portfolio"
              subtitle="Asset class allocation"
              data-ocid="finance.investment_donut"
            >
              <div className="flex items-center gap-6 py-2">
                <ResponsiveContainer width={180} height={180}>
                  <PieChart>
                    <Pie
                      data={investmentPortfolio}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      dataKey="value"
                      paddingAngle={3}
                    >
                      {investmentPortfolio.map((e) => (
                        <Cell key={e.name} fill={e.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(v: number) => [`${v}%`]} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex-1 space-y-2.5">
                  {investmentPortfolio.map((e) => (
                    <div key={e.name} className="flex items-center gap-2">
                      <div
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ background: e.color }}
                      />
                      <span className="text-xs text-foreground flex-1">
                        {e.name}
                      </span>
                      <span className="text-xs font-bold text-foreground">
                        {e.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ChartCard>

            {/* Total invested summary */}
            <div className="space-y-3">
              {[
                {
                  label: "Total Principal Invested",
                  value: "₹46.0M",
                  trend: null,
                },
                {
                  label: "Current Portfolio Value",
                  value: "₹52.2M",
                  trend: +13.5,
                },
                { label: "Unrealized Gains", value: "₹6.2M", trend: +13.5 },
                { label: "Avg. Return Rate", value: "13.5%", trend: null },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card border border-border rounded-2xl shadow-card p-4 flex items-center justify-between"
                  data-ocid={`finance.investment_summary.${i + 1}`}
                >
                  <span className="text-xs text-muted-foreground">
                    {s.label}
                  </span>
                  <div className="text-right">
                    <span className="text-base font-display font-bold text-foreground">
                      {s.value}
                    </span>
                    {s.trend !== null && (
                      <span className="block text-[10px] text-green-600 font-medium">
                        +{s.trend}% YoY
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Investment Table */}
          <div
            className="bg-card border border-border rounded-2xl shadow-card overflow-hidden"
            data-ocid="finance.investment_table"
          >
            <div className="px-5 py-3 border-b border-border">
              <h3 className="text-sm font-display font-semibold text-foreground">
                Investment Tracking
              </h3>
            </div>
            <table className="w-full text-sm">
              <thead className="bg-muted/30 border-b border-border">
                <tr>
                  {[
                    "Asset Class",
                    "Principal (₹M)",
                    "Current Value (₹M)",
                    "Returns %",
                    "Maturity Date",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-2.5 text-left text-xs font-semibold text-muted-foreground"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {investmentTable.map((inv, i) => (
                  <tr
                    key={inv.asset}
                    className="hover:bg-muted/20 transition-smooth"
                    data-ocid={`finance.investment_table.item.${i + 1}`}
                  >
                    <td className="px-4 py-2.5 text-xs font-semibold text-foreground">
                      {inv.asset}
                    </td>
                    <td className="px-4 py-2.5 text-xs text-foreground font-mono">
                      ₹{inv.principal}M
                    </td>
                    <td className="px-4 py-2.5 text-xs text-foreground font-mono">
                      ₹{inv.current}M
                    </td>
                    <td className="px-4 py-2.5">
                      <span
                        className={`text-xs font-bold ${inv.returns >= 15 ? "text-green-600" : inv.returns >= 8 ? "text-amber-600" : "text-foreground"}`}
                      >
                        +{inv.returns}%
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-xs text-muted-foreground">
                      {inv.maturity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
