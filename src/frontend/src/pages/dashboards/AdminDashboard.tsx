import {
  Activity,
  Award,
  CheckSquare,
  DollarSign,
  GitBranch,
  Medal,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
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
import { ChartCard } from "../../components/shared/ChartCard";
import { PageHeader } from "../../components/shared/PageHeader";
import { StatCard } from "../../components/shared/StatCard";
import { StatusBadge } from "../../components/shared/StatusBadge";
import { mockBranches } from "../../data/mockBranches";
import { mockMonthlyFinance } from "../../data/mockFinance";
import { mockLeads } from "../../data/mockLeads";
import { mockBranchPerformance } from "../../data/mockPerformance";
import { mockTasks } from "../../data/mockTasks";

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
  { name: "Walk-in", value: 8, color: CHART_PURPLE },
];

const deptProductivityData = [
  { dept: "Sales", score: 88 },
  { dept: "Finance", score: 82 },
  { dept: "Operations", score: 79 },
  { dept: "HR", score: 85 },
  { dept: "Marketing", score: 76 },
  { dept: "IT", score: 91 },
  { dept: "Credit", score: 84 },
  { dept: "Compliance", score: 78 },
];

const attendanceData = [
  { name: "Present", value: 89, color: CHART_GREEN },
  { name: "Late", value: 7, color: CHART_ACCENT },
  { name: "Absent", value: 4, color: "oklch(0.63 0.24 17)" },
];

export default function AdminDashboard() {
  const activeBranches = mockBranches.filter(
    (b) => b.status === "Active",
  ).length;
  const totalBranches = mockBranches.length;
  const doneTasks = mockTasks.filter((t) => t.status === "Done").length;
  const totalTasks = mockTasks.length;
  const taskCompletionPct = Math.round((doneTasks / totalTasks) * 100);

  const taskStatusData = [
    { name: "Done", value: doneTasks, color: CHART_GREEN },
    {
      name: "In Progress",
      value: mockTasks.filter((t) => t.status === "In Progress").length,
      color: CHART_PRIMARY,
    },
    {
      name: "Review",
      value: mockTasks.filter((t) => t.status === "Review").length,
      color: CHART_ACCENT,
    },
    {
      name: "Todo",
      value: mockTasks.filter((t) => t.status === "Todo").length,
      color: CHART_GRID,
    },
  ];

  const kpis = [
    {
      title: "Total Branches",
      value: totalBranches,
      change: 2,
      icon: GitBranch,
      iconColor: "text-primary",
      subtitle: `${activeBranches} active`,
    },
    {
      title: "Total Staff",
      value: 127,
      change: 8,
      icon: Users,
      iconColor: "text-secondary",
    },
    {
      title: "Active Leads",
      value: 284,
      change: 15,
      icon: Target,
      iconColor: "text-amber-600",
    },
    {
      title: "Revenue This Month",
      value: "$2.4M",
      change: 12,
      icon: DollarSign,
      iconColor: "text-green-600",
    },
  ];

  const rankedBranches = [...mockBranchPerformance]
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 5)
    .map((bp) => {
      const branch = mockBranches.find((b) => b.id === bp.branchId);
      return {
        ...bp,
        managerName: branch?.managerName ?? "—",
        status: branch?.status ?? "Active",
        growth: Math.round(
          ((bp.revenue - bp.targetRevenue * 0.92) / (bp.targetRevenue * 0.92)) *
            100,
        ),
      };
    });

  return (
    <div>
      <PageHeader
        title="Admin Dashboard"
        subtitle={`Enterprise overview — ${new Date().toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}`}
        breadcrumbs={[{ label: "Home" }, { label: "Dashboard" }]}
        data-ocid="admin_dashboard.header"
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
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
              data-ocid={`admin_dashboard.kpi.${i + 1}`}
            />
          </motion.div>
        ))}
      </div>

      {/* Revenue + Lead Source */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <ChartCard
            title="Revenue Trend"
            subtitle="12-month consolidated (2024)"
            periods={["2024", "YTD"]}
            data-ocid="admin_dashboard.revenue_chart"
          >
            <ResponsiveContainer width="100%" height={230}>
              <BarChart
                data={mockMonthlyFinance}
                margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="revBarGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor={CHART_PRIMARY}
                      stopOpacity={1}
                    />
                    <stop
                      offset="100%"
                      stopColor={CHART_PRIMARY}
                      stopOpacity={0.7}
                    />
                  </linearGradient>
                  <linearGradient id="expBarGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor={CHART_SECONDARY}
                      stopOpacity={1}
                    />
                    <stop
                      offset="100%"
                      stopColor={CHART_SECONDARY}
                      stopOpacity={0.7}
                    />
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
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid oklch(0.91 0.01 0)",
                    fontSize: 12,
                  }}
                />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Bar
                  dataKey="revenue"
                  name="Revenue"
                  fill="url(#revBarGrad)"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={20}
                />
                <Bar
                  dataKey="expenses"
                  name="Expenses"
                  fill="url(#expBarGrad)"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42 }}
        >
          <ChartCard
            title="Lead Sources"
            subtitle="Distribution by channel"
            data-ocid="admin_dashboard.lead_source_chart"
          >
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={leadSourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={48}
                  outerRadius={68}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {leadSourceData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(v: number) => [`${v}%`, "Share"]} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-1 space-y-1.5">
              {leadSourceData.map((src) => (
                <div
                  key={src.name}
                  className="flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: src.color }}
                    />
                    <span className="text-muted-foreground">{src.name}</span>
                  </div>
                  <span className="font-semibold text-foreground">
                    {src.value}%
                  </span>
                </div>
              ))}
            </div>
          </ChartCard>
        </motion.div>
      </div>

      {/* Branch Ranking Table */}
      <motion.div
        className="mb-4 sm:mb-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <ChartCard
          title="Branch Rankings"
          subtitle="Top 5 branches by revenue performance"
          data-ocid="admin_dashboard.branch_ranking"
        >
          <div className="overflow-x-auto mt-1">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2.5 px-2 font-semibold text-muted-foreground">
                    Rank
                  </th>
                  <th className="text-left py-2.5 px-2 font-semibold text-muted-foreground">
                    Branch
                  </th>
                  <th className="text-left py-2.5 px-2 font-semibold text-muted-foreground">
                    Manager
                  </th>
                  <th className="text-right py-2.5 px-2 font-semibold text-muted-foreground">
                    Revenue
                  </th>
                  <th className="text-right py-2.5 px-2 font-semibold text-muted-foreground">
                    Growth
                  </th>
                  <th className="text-right py-2.5 px-2 font-semibold text-muted-foreground">
                    Score
                  </th>
                  <th className="text-center py-2.5 px-2 font-semibold text-muted-foreground">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {rankedBranches.map((b, i) => (
                  <tr
                    key={b.branchId}
                    className="border-b border-border/50 hover:bg-muted/30 transition-smooth"
                    data-ocid={`admin_dashboard.branch_ranking.item.${i + 1}`}
                  >
                    <td className="py-3 px-2">
                      <div
                        className={`inline-flex items-center justify-center w-6 h-6 rounded-lg text-xs font-bold ${
                          b.rank === 1
                            ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                            : b.rank === 2
                              ? "bg-muted text-muted-foreground"
                              : "bg-background text-muted-foreground border border-border"
                        }`}
                      >
                        {b.rank === 1 ? (
                          <Medal className="w-3.5 h-3.5" />
                        ) : (
                          b.rank
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-2 font-semibold text-foreground">
                      {b.branchName}
                    </td>
                    <td className="py-3 px-2 text-muted-foreground">
                      {b.managerName}
                    </td>
                    <td className="py-3 px-2 text-right font-semibold text-foreground">
                      ₹{(b.revenue / 1000000).toFixed(2)}M
                    </td>
                    <td className="py-3 px-2 text-right">
                      <span
                        className={`font-semibold ${b.growth >= 0 ? "text-green-600 dark:text-green-400" : "text-red-500"}`}
                      >
                        {b.growth >= 0 ? "+" : ""}
                        {b.growth}%
                      </span>
                    </td>
                    <td className="py-3 px-2 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full rounded-full bg-primary transition-all duration-500"
                            style={{ width: `${b.score}%` }}
                          />
                        </div>
                        <span className="font-bold text-primary w-7">
                          {b.score}%
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <StatusBadge status={b.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ChartCard>
      </motion.div>

      {/* Bottom row: 3 charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.58 }}
        >
          <ChartCard
            title="Staff Productivity"
            subtitle="By department (avg score)"
            data-ocid="admin_dashboard.staff_productivity_chart"
          >
            <ResponsiveContainer width="100%" height={200}>
              <BarChart
                data={deptProductivityData}
                layout="vertical"
                margin={{ top: 0, right: 16, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke={CHART_GRID}
                />
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tick={{ fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  type="category"
                  dataKey="dept"
                  tick={{ fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                  width={65}
                />
                <Tooltip
                  formatter={(v: number) => [`${v}%`, "Score"]}
                  contentStyle={{ fontSize: 11 }}
                />
                <Bar
                  dataKey="score"
                  fill={CHART_PRIMARY}
                  radius={[0, 4, 4, 0]}
                  maxBarSize={14}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.64 }}
        >
          <ChartCard
            title="Task Completion"
            subtitle={`${taskCompletionPct}% overall done`}
            data-ocid="admin_dashboard.task_completion_chart"
          >
            <div className="flex flex-col items-center">
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie
                    data={taskStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={44}
                    outerRadius={64}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {taskStatusData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ fontSize: 11 }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="w-full space-y-1.5 mt-1">
                {taskStatusData.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ background: s.color }}
                      />
                      <span className="text-muted-foreground">{s.name}</span>
                    </div>
                    <span className="font-semibold text-foreground">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ChartCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <ChartCard
            title="Attendance Overview"
            subtitle="Today's across all branches"
            data-ocid="admin_dashboard.attendance_overview"
          >
            <div className="flex flex-col items-center">
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie
                    data={attendanceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={44}
                    outerRadius={64}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {attendanceData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v: number) => [`${v}%`, "Share"]} />
                </PieChart>
              </ResponsiveContainer>
              <div className="w-full space-y-2 mt-1">
                {attendanceData.map((s) => (
                  <div key={s.name} className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: s.color }}
                    />
                    <div className="flex-1">
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${s.value}%`, background: s.color }}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground w-16">
                      {s.name}
                    </span>
                    <span className="text-xs font-bold text-foreground w-8 text-right">
                      {s.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity section */}
            <div className="mt-4 pt-3 border-t border-border">
              <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                Recent Activity
              </p>
              <div className="space-y-1.5">
                {[
                  {
                    icon: Award,
                    text: "Delhi NCR exceeded monthly target",
                    time: "2h ago",
                    color: "text-green-600",
                  },
                  {
                    icon: Target,
                    text: "Crescent Exports lead assigned to Kavita",
                    time: "3h ago",
                    color: "text-primary",
                  },
                  {
                    icon: CheckSquare,
                    text: "Q1 Investor Presentation under review",
                    time: "5h ago",
                    color: "text-secondary",
                  },
                  {
                    icon: Users,
                    text: "3 new staff onboarded — Mumbai Central",
                    time: "1d ago",
                    color: "text-accent-foreground",
                  },
                  {
                    icon: Activity,
                    text: "Kochi Maritime compliance flag raised",
                    time: "2d ago",
                    color: "text-destructive",
                  },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-2 py-1">
                    <item.icon
                      className={`w-3 h-3 mt-0.5 shrink-0 ${item.color}`}
                    />
                    <p className="text-[11px] text-foreground leading-snug flex-1 min-w-0">
                      {item.text}
                    </p>
                    <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ChartCard>
        </motion.div>
      </div>
    </div>
  );
}
