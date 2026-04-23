import { Button } from "@/components/ui/button";
import {
  ArrowDownRight,
  ArrowUpRight,
  DollarSign,
  Download,
  TrendingDown,
  TrendingUp,
  Wallet,
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
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartCard } from "../../components/shared/ChartCard";
import { PageHeader } from "../../components/shared/PageHeader";
import { StatCard } from "../../components/shared/StatCard";
import {
  mockBranchFinanceSummary,
  mockMonthlyFinance,
} from "../../data/mockFinance";
import { exportToCSV } from "../../utils/csvExport";

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
  { name: "Mutual Funds", value: 10, color: CHART_PURPLE },
];

export default function FinanceDashboard() {
  const totalRevenue = mockMonthlyFinance.reduce((s, m) => s + m.revenue, 0);
  const totalExpenses = mockMonthlyFinance.reduce((s, m) => s + m.expenses, 0);
  const netProfit = totalRevenue - totalExpenses;
  const profitMargin = Math.round((netProfit / totalRevenue) * 100);
  const loanPortfolio = mockMonthlyFinance.reduce(
    (s, m) => s + m.loanDisbursed,
    0,
  );

  const plData = mockMonthlyFinance.map((m) => ({ ...m }));

  const branchTable = [...mockBranchFinanceSummary]
    .sort((a, b) => b.totalRevenue - a.totalRevenue)
    .map((b, i) => ({
      ...b,
      rank: i + 1,
      growth: Number.parseFloat((Math.random() * 20 - 5).toFixed(1)),
    }));

  const repaymentData = mockMonthlyFinance.map((m) => ({
    month: m.month,
    disbursed: m.loanDisbursed,
    repaid: Math.round(m.loanDisbursed * 0.82),
  }));

  const kpis = [
    {
      title: "Total Revenue (YTD)",
      value: `₹${(totalRevenue / 1000000).toFixed(1)}M`,
      change: 14,
      icon: TrendingUp,
      iconColor: "text-green-600",
    },
    {
      title: "Total Expenses",
      value: `₹${(totalExpenses / 1000000).toFixed(1)}M`,
      change: -3,
      icon: TrendingDown,
      iconColor: "text-destructive",
    },
    {
      title: `Net Profit (${profitMargin}% margin)`,
      value: `₹${(netProfit / 1000000).toFixed(1)}M`,
      change: 18,
      icon: DollarSign,
      iconColor: "text-primary",
    },
    {
      title: "Loan Portfolio",
      value: `₹${(loanPortfolio / 1000000).toFixed(1)}M`,
      change: 9,
      icon: Wallet,
      iconColor: "text-secondary",
    },
  ];

  function handleExportCSV() {
    const exportData = [
      ...kpis.map((k) => ({
        Category: "KPI",
        Metric: k.title,
        Value: k.value,
        "Change (%)": k.change,
      })),
      ...branchTable.map((b) => ({
        Category: "Branch",
        Metric: b.branchName,
        Revenue: `₹${(b.totalRevenue / 1000000).toFixed(2)}M`,
        Expenses: `₹${(b.totalExpenses / 1000000).toFixed(2)}M`,
        Profit: `₹${(b.totalProfit / 1000000).toFixed(2)}M`,
        "Margin (%)": b.profitMargin,
      })),
    ];
    exportToCSV(exportData as Record<string, unknown>[], "finance-dashboard");
  }

  return (
    <div>
      <PageHeader
        title="Finance Dashboard"
        subtitle={`Enterprise financial overview — FY 2024 · As of ${new Date().toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}`}
        breadcrumbs={[{ label: "Dashboard" }, { label: "Finance" }]}
        actions={
          <Button
            variant="outline"
            size="sm"
            onClick={handleExportCSV}
            className="gap-1.5 text-xs"
            data-ocid="finance_dashboard.export_button"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Export CSV</span>
            <span className="xs:hidden">Export</span>
          </Button>
        }
        data-ocid="finance_dashboard.header"
      />

      {/* KPI Cards — 2 col on mobile, 4 on md+ */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
        {kpis.map((kpi, i) => (
          <motion.div
            key={kpi.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.35 }}
          >
            <StatCard
              title={kpi.title}
              value={kpi.value}
              change={kpi.change}
              icon={kpi.icon}
              iconColor={kpi.iconColor}
              data-ocid={`finance_dashboard.kpi.${i + 1}`}
            />
          </motion.div>
        ))}
      </div>

      {/* P&L Area Chart */}
      <motion.div
        className="mb-4 sm:mb-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38 }}
      >
        <ChartCard
          title="Profit & Loss Statement"
          subtitle="12-month revenue, expenses & profit trend"
          periods={["2024", "YTD", "Q4"]}
          data-ocid="finance_dashboard.pl_chart"
        >
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart
              data={plData}
              margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="finRevGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={CHART_PRIMARY}
                    stopOpacity={0.15}
                  />
                  <stop
                    offset="95%"
                    stopColor={CHART_PRIMARY}
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient id="finExpGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={CHART_RED} stopOpacity={0.15} />
                  <stop offset="95%" stopColor={CHART_RED} stopOpacity={0} />
                </linearGradient>
                <linearGradient id="finProfGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={CHART_GREEN} stopOpacity={0.2} />
                  <stop offset="95%" stopColor={CHART_GREEN} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke={CHART_GRID}
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
                tickFormatter={(v: number) => `₹${(v / 1000000).toFixed(1)}M`}
              />
              <Tooltip
                formatter={(v: number, name: string) => [
                  `₹${(v / 1000000).toFixed(2)}M`,
                  name,
                ]}
                contentStyle={{ borderRadius: "8px", fontSize: 11 }}
              />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Area
                type="monotone"
                dataKey="revenue"
                name="Revenue"
                stroke={CHART_PRIMARY}
                strokeWidth={2}
                fill="url(#finRevGrad)"
              />
              <Area
                type="monotone"
                dataKey="expenses"
                name="Expenses"
                stroke={CHART_RED}
                strokeWidth={2}
                fill="url(#finExpGrad)"
              />
              <Area
                type="monotone"
                dataKey="profit"
                name="Net Profit"
                stroke={CHART_GREEN}
                strokeWidth={2.5}
                fill="url(#finProfGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </motion.div>

      {/* Branch Revenue Table */}
      <motion.div
        className="mb-4 sm:mb-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.46 }}
      >
        <ChartCard
          title="Branch-wise Revenue"
          subtitle="Full-year consolidated per branch"
          data-ocid="finance_dashboard.branch_revenue_table"
        >
          <div className="overflow-x-auto mt-1 -mx-1">
            <table className="w-full text-xs min-w-[520px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2.5 px-2 font-semibold text-muted-foreground">
                    #
                  </th>
                  <th className="text-left py-2.5 px-2 font-semibold text-muted-foreground">
                    Branch
                  </th>
                  <th className="text-right py-2.5 px-2 font-semibold text-muted-foreground">
                    Revenue
                  </th>
                  <th className="text-right py-2.5 px-2 font-semibold text-muted-foreground hidden sm:table-cell">
                    Expenses
                  </th>
                  <th className="text-right py-2.5 px-2 font-semibold text-muted-foreground">
                    Net Profit
                  </th>
                  <th className="text-right py-2.5 px-2 font-semibold text-muted-foreground hidden md:table-cell">
                    Margin
                  </th>
                  <th className="text-right py-2.5 px-2 font-semibold text-muted-foreground">
                    Growth
                  </th>
                </tr>
              </thead>
              <tbody>
                {branchTable.map((branch, i) => (
                  <tr
                    key={branch.branchId}
                    className="border-b border-border/50 hover:bg-muted/30 transition-smooth"
                    data-ocid={`finance_dashboard.branch_revenue_table.item.${i + 1}`}
                  >
                    <td className="py-3 px-2 text-muted-foreground font-semibold">
                      {branch.rank}
                    </td>
                    <td className="py-3 px-2 font-semibold text-foreground">
                      {branch.branchName}
                    </td>
                    <td className="py-3 px-2 text-right font-semibold text-foreground">
                      ₹{(branch.totalRevenue / 1000000).toFixed(2)}M
                    </td>
                    <td className="py-3 px-2 text-right text-muted-foreground hidden sm:table-cell">
                      ₹{(branch.totalExpenses / 1000000).toFixed(2)}M
                    </td>
                    <td className="py-3 px-2 text-right font-semibold text-green-600 dark:text-green-400">
                      ₹{(branch.totalProfit / 1000000).toFixed(2)}M
                    </td>
                    <td className="py-3 px-2 text-right hidden md:table-cell">
                      <span
                        className={`font-bold ${branch.profitMargin >= 40 ? "text-green-600 dark:text-green-400" : "text-amber-600"}`}
                      >
                        {branch.profitMargin}%
                      </span>
                    </td>
                    <td className="py-3 px-2 text-right">
                      <span
                        className={`flex items-center justify-end gap-0.5 font-semibold ${branch.growth >= 0 ? "text-green-600 dark:text-green-400" : "text-destructive"}`}
                      >
                        {branch.growth >= 0 ? (
                          <ArrowUpRight className="w-3 h-3" />
                        ) : (
                          <ArrowDownRight className="w-3 h-3" />
                        )}
                        {Math.abs(branch.growth)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-border bg-muted/20">
                  <td
                    className="py-2.5 px-2 font-bold text-foreground"
                    colSpan={2}
                  >
                    Total
                  </td>
                  <td className="py-2.5 px-2 text-right font-bold text-foreground">
                    ₹{(totalRevenue / 1000000).toFixed(2)}M
                  </td>
                  <td className="py-2.5 px-2 text-right font-bold text-muted-foreground hidden sm:table-cell">
                    ₹{(totalExpenses / 1000000).toFixed(2)}M
                  </td>
                  <td className="py-2.5 px-2 text-right font-bold text-green-600 dark:text-green-400">
                    ₹{(netProfit / 1000000).toFixed(2)}M
                  </td>
                  <td className="py-2.5 px-2 text-right font-bold text-primary hidden md:table-cell">
                    {profitMargin}%
                  </td>
                  <td className="py-2.5 px-2 text-right font-bold text-green-600">
                    +12.4%
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </ChartCard>
      </motion.div>

      {/* Loan Disbursement + Investment Portfolio + Repayment Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.54 }}
        >
          <ChartCard
            title="Loan Disbursement"
            subtitle="Monthly disbursals (2024)"
            data-ocid="finance_dashboard.loan_disbursement_chart"
          >
            <ResponsiveContainer width="100%" height={200}>
              <BarChart
                data={mockMonthlyFinance}
                margin={{ top: 4, right: 4, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke={CHART_GRID}
                />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v: number) => `₹${(v / 1000000).toFixed(0)}M`}
                />
                <Tooltip
                  formatter={(v: number) => [
                    `₹${(v / 1000000).toFixed(2)}M`,
                    "Disbursed",
                  ]}
                  contentStyle={{ fontSize: 11 }}
                />
                <Bar
                  dataKey="loanDisbursed"
                  name="Disbursed"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={20}
                >
                  {mockMonthlyFinance.map((entry, i) => (
                    <Cell
                      key={`cell-${entry.month}`}
                      fill={CHART_PRIMARY}
                      fillOpacity={0.6 + i * 0.032}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <ChartCard
            title="Investment Portfolio"
            subtitle="Asset class distribution"
            data-ocid="finance_dashboard.investment_portfolio_chart"
          >
            <ResponsiveContainer width="100%" height={140}>
              <PieChart>
                <Pie
                  data={investmentPortfolio}
                  cx="50%"
                  cy="50%"
                  innerRadius={44}
                  outerRadius={64}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {investmentPortfolio.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(v: number) => [`${v}%`, "Allocation"]}
                  contentStyle={{ fontSize: 11 }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-1.5 mt-1">
              {investmentPortfolio.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: item.color }}
                    />
                    <span className="text-muted-foreground truncate">
                      {item.name}
                    </span>
                  </div>
                  <span className="font-semibold text-foreground shrink-0">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </ChartCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.66 }}
        >
          <ChartCard
            title="Repayment Analytics"
            subtitle="Disbursed vs repaid (2024)"
            data-ocid="finance_dashboard.repayment_analytics_chart"
          >
            <ResponsiveContainer width="100%" height={200}>
              <LineChart
                data={repaymentData}
                margin={{ top: 4, right: 4, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke={CHART_GRID}
                />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v: number) => `₹${(v / 1000000).toFixed(0)}M`}
                />
                <Tooltip
                  formatter={(v: number, name: string) => [
                    `₹${(v / 1000000).toFixed(2)}M`,
                    name,
                  ]}
                  contentStyle={{ fontSize: 11 }}
                />
                <Legend wrapperStyle={{ fontSize: 10 }} />
                <Line
                  type="monotone"
                  dataKey="disbursed"
                  name="Disbursed"
                  stroke={CHART_PRIMARY}
                  strokeWidth={2}
                  dot={{ r: 2 }}
                  activeDot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="repaid"
                  name="Repaid"
                  stroke={CHART_GREEN}
                  strokeWidth={2}
                  dot={{ r: 2 }}
                  activeDot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>

            <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-border">
              <div className="text-center p-2 rounded-xl bg-muted/40">
                <p className="text-sm font-display font-bold text-foreground">
                  ₹{(loanPortfolio / 1000000).toFixed(1)}M
                </p>
                <p className="text-[10px] text-muted-foreground">
                  Total Disbursed
                </p>
              </div>
              <div className="text-center p-2 rounded-xl bg-primary/5">
                <p className="text-sm font-display font-bold text-green-700 dark:text-green-400">
                  ₹{((loanPortfolio * 0.82) / 1000000).toFixed(1)}M
                </p>
                <p className="text-[10px] text-muted-foreground">
                  Total Repaid
                </p>
              </div>
            </div>
          </ChartCard>
        </motion.div>
      </div>
    </div>
  );
}
