import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  CalendarDays,
  CheckSquare,
  Clock,
  DollarSign,
  Download,
  Target,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Funnel,
  FunnelChart,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartCard } from "../../components/shared/ChartCard";
import { PageHeader } from "../../components/shared/PageHeader";
import { PriorityBadge } from "../../components/shared/PriorityBadge";
import { StatCard } from "../../components/shared/StatCard";
import { StatusBadge } from "../../components/shared/StatusBadge";
import { mockFinanceRecords } from "../../data/mockFinance";
import { mockLeads } from "../../data/mockLeads";
import { mockTasks } from "../../data/mockTasks";
import { mockUsers } from "../../data/mockUsers";
import { useAuth } from "../../hooks/useAuth";
import { exportToCSV } from "../../utils/csvExport";

const CHART_PRIMARY = "oklch(0.42 0.08 265)";
const CHART_SECONDARY = "oklch(0.60 0.10 185)";
const CHART_GREEN = "oklch(0.55 0.15 155)";
const CHART_GRID = "oklch(0.91 0.01 0)";

export default function BranchDashboard() {
  const { user } = useAuth();
  const branchId = user.branchId;
  const branchStaff = mockUsers.filter(
    (u) => u.branchId === branchId && u.role === "staff",
  );
  const branchLeads = mockLeads.filter((l) => l.branchId === branchId);
  const branchTasks = mockTasks.filter((t) => t.branchId === branchId);
  const branchFinance = mockFinanceRecords.filter(
    (f) => f.branchId === branchId,
  );

  const totalRevenue = branchFinance.reduce((s, f) => s + f.revenue, 0);
  const convertedLeads = branchLeads.filter(
    (l) => l.status === "Converted",
  ).length;
  const doneTasks = branchTasks.filter((t) => t.status === "Done").length;
  const totalBranchTasks = branchTasks.length;
  const taskCompletionPct = totalBranchTasks
    ? Math.round((doneTasks / totalBranchTasks) * 100)
    : 0;
  const activeLeads = branchLeads.filter(
    (l) => l.status === "New" || l.status === "In Progress",
  ).length;

  // Monthly performance (area chart)
  const monthlyPerfData = branchFinance.slice(-8).map((f) => ({
    month: f.month,
    revenue: f.revenue,
    profit: f.profit,
    target: Math.round(f.revenue * 1.08),
  }));

  // Funnel data
  const funnelTotal = branchLeads.length || 1;
  const funnelData = [
    {
      name: "New Leads",
      value:
        branchLeads.filter((l) => l.status === "New").length +
        convertedLeads +
        branchLeads.filter((l) => l.status === "In Progress").length,
      fill: CHART_PRIMARY,
    },
    {
      name: "In Progress",
      value:
        branchLeads.filter((l) => l.status === "In Progress").length +
        convertedLeads,
      fill: CHART_SECONDARY,
    },
    { name: "Converted", value: convertedLeads, fill: CHART_GREEN },
  ];

  const upcomingTasks = [
    ...branchTasks,
    ...mockTasks.filter((t) => t.assignedToId === user.id),
  ]
    .filter((t) => t.status !== "Done")
    .sort(
      (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime(),
    )
    .slice(0, 5);

  const staffTargets = branchStaff.slice(0, 5).map((s) => ({
    ...s,
    target: 100,
    achieved: s.performanceScore,
  }));

  const kpis = [
    {
      title: "Branch Revenue",
      value: `₹${(totalRevenue / 1000000).toFixed(2)}M`,
      change: 6,
      icon: DollarSign,
      iconColor: "text-green-600",
    },
    {
      title: "Staff Count",
      value: branchStaff.length || 18,
      change: 2,
      icon: Users,
      iconColor: "text-primary",
    },
    {
      title: "Active Leads",
      value: activeLeads || 42,
      change: 8,
      icon: Target,
      iconColor: "text-amber-600",
    },
    {
      title: "Task Completion",
      value: `${taskCompletionPct || 78}%`,
      change: 3,
      icon: CheckSquare,
      iconColor: "text-secondary",
    },
  ];

  function handleExportCSV() {
    const exportData = kpis.map((k) => ({
      Metric: k.title,
      Value: k.value,
      "Change (%)": k.change,
      Branch: user.branchName,
    }));
    exportToCSV(
      exportData as Record<string, unknown>[],
      `branch-dashboard-${user.branchName.toLowerCase().replace(/\s+/g, "-")}`,
    );
  }

  return (
    <div>
      <PageHeader
        title={`${user.branchName} Dashboard`}
        subtitle={`Branch performance overview — ${new Date().toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}`}
        breadcrumbs={[{ label: "Dashboard" }, { label: user.branchName }]}
        actions={
          <Button
            variant="outline"
            size="sm"
            onClick={handleExportCSV}
            className="gap-1.5 text-xs"
            data-ocid="branch_dashboard.export_button"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Export CSV</span>
            <span className="xs:hidden">Export</span>
          </Button>
        }
        data-ocid="branch_dashboard.header"
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
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
              data-ocid={`branch_dashboard.kpi.${i + 1}`}
            />
          </motion.div>
        ))}
      </div>

      {/* Staff Targets + Lead Conversion Funnel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.38 }}
        >
          <ChartCard
            title="Staff Targets"
            subtitle="Top performers — target vs achieved"
            data-ocid="branch_dashboard.staff_targets"
          >
            <div className="space-y-3 mt-1">
              {staffTargets.map((staff, i) => (
                <div
                  key={staff.id}
                  className="flex items-center gap-3"
                  data-ocid={`branch_dashboard.staff_targets.item.${i + 1}`}
                >
                  <img
                    src={staff.avatar}
                    alt={staff.name}
                    className="w-8 h-8 rounded-full border border-border shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-foreground truncate">
                        {staff.name}
                      </span>
                      <span className="text-xs font-bold text-primary ml-2 shrink-0">
                        {staff.achieved}%
                      </span>
                    </div>
                    <Progress value={staff.achieved} className="h-1.5" />
                  </div>
                  <div className="text-xs text-muted-foreground shrink-0 w-16 text-right">
                    {staff.achieved}/{staff.target}
                  </div>
                </div>
              ))}
              {staffTargets.length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-4">
                  No staff data available
                </p>
              )}
            </div>
          </ChartCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.44 }}
        >
          <ChartCard
            title="Lead Conversion Funnel"
            subtitle="New → In Progress → Converted"
            data-ocid="branch_dashboard.lead_funnel"
          >
            {funnelData[0].value > 0 ? (
              <ResponsiveContainer width="100%" height={200}>
                <FunnelChart>
                  <Tooltip
                    formatter={(v: number) => [v, "Leads"]}
                    contentStyle={{ fontSize: 11 }}
                  />
                  <Funnel dataKey="value" data={funnelData} isAnimationActive>
                    {funnelData.map((entry) => (
                      <Cell key={entry.name} fill={entry.fill} />
                    ))}
                    <LabelList
                      position="right"
                      fill="oklch(0.18 0 0)"
                      stroke="none"
                      dataKey="name"
                      fontSize={11}
                    />
                    <LabelList
                      position="center"
                      fill="white"
                      stroke="none"
                      dataKey="value"
                      fontSize={12}
                      fontWeight={700}
                    />
                  </Funnel>
                </FunnelChart>
              </ResponsiveContainer>
            ) : (
              <div className="space-y-3 mt-2">
                {(["New", "In Progress", "Converted"] as const).map(
                  (status) => {
                    const count = branchLeads.filter(
                      (l) => l.status === status,
                    ).length;
                    const pct = funnelTotal
                      ? Math.round((count / funnelTotal) * 100)
                      : 0;
                    return (
                      <div key={status} className="flex items-center gap-3">
                        <StatusBadge
                          status={status}
                          className="w-20 justify-center"
                        />
                        <div className="flex-1">
                          <Progress value={pct} className="h-2" />
                        </div>
                        <span className="text-xs font-semibold text-foreground w-8 text-right">
                          {count}
                        </span>
                      </div>
                    );
                  },
                )}
              </div>
            )}
            {/* Conversion stats */}
            <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-border">
              {[
                { label: "Total Leads", value: branchLeads.length },
                { label: "Converted", value: convertedLeads },
                {
                  label: "Conv. Rate",
                  value: `${branchLeads.length ? Math.round((convertedLeads / branchLeads.length) * 100) : 0}%`,
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-2 rounded-xl bg-muted/40"
                >
                  <p className="text-lg font-display font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ChartCard>
        </motion.div>
      </div>

      {/* Monthly Performance + Upcoming Tasks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <motion.div
          className="md:col-span-2 lg:col-span-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <ChartCard
            title="Monthly Performance"
            subtitle="Revenue, profit & target trend"
            data-ocid="branch_dashboard.monthly_performance"
          >
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart
                data={monthlyPerfData}
                margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="revGradBranch"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor={CHART_PRIMARY}
                      stopOpacity={0.18}
                    />
                    <stop
                      offset="95%"
                      stopColor={CHART_PRIMARY}
                      stopOpacity={0}
                    />
                  </linearGradient>
                  <linearGradient
                    id="profGradBranch"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor={CHART_GREEN}
                      stopOpacity={0.18}
                    />
                    <stop
                      offset="95%"
                      stopColor={CHART_GREEN}
                      stopOpacity={0}
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
                  tickFormatter={(v: number) => `₹${(v / 100000).toFixed(0)}L`}
                />
                <Tooltip
                  formatter={(v: number, name: string) => [
                    `₹${(v / 100000).toFixed(1)}L`,
                    name,
                  ]}
                  contentStyle={{ fontSize: 11 }}
                />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  name="Revenue"
                  stroke={CHART_PRIMARY}
                  strokeWidth={2}
                  fill="url(#revGradBranch)"
                />
                <Area
                  type="monotone"
                  dataKey="profit"
                  name="Profit"
                  stroke={CHART_GREEN}
                  strokeWidth={2}
                  fill="url(#profGradBranch)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.56 }}
        >
          <ChartCard
            title="Upcoming Tasks"
            subtitle="Next 5 by due date"
            data-ocid="branch_dashboard.upcoming_tasks"
          >
            <div className="space-y-2 mt-1">
              {upcomingTasks.length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-6">
                  No upcoming tasks
                </p>
              )}
              {upcomingTasks.map((task, i) => (
                <div
                  key={task.id}
                  className="p-2.5 rounded-xl border border-border/60 bg-muted/20 hover:bg-muted/40 transition-smooth"
                  data-ocid={`branch_dashboard.upcoming_tasks.item.${i + 1}`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <p className="text-xs font-semibold text-foreground leading-snug line-clamp-2 flex-1">
                      {task.title}
                    </p>
                    <PriorityBadge priority={task.priority} />
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <CalendarDays className="w-3 h-3 text-muted-foreground" />
                    <span className="text-[10px] text-muted-foreground">
                      {new Date(task.dueDate).toLocaleDateString("en-IN", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <Clock className="w-3 h-3 text-muted-foreground ml-1" />
                    <StatusBadge status={task.status} />
                  </div>
                </div>
              ))}
            </div>
          </ChartCard>
        </motion.div>
      </div>
    </div>
  );
}
