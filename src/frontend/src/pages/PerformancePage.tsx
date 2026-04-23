import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Award,
  Download,
  Medal,
  Minus,
  Search,
  Target,
  TrendingDown,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
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
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "sonner";
import { ChartCard } from "../components/shared/ChartCard";
import { PageHeader } from "../components/shared/PageHeader";
import { StatCard } from "../components/shared/StatCard";
import {
  mockBranchPerformance,
  mockLeaderboard,
  mockPerformanceMetrics,
} from "../data/mockPerformance";
import { exportToCSV } from "../utils/csvExport";

// ─── Static chart data ────────────────────────────────────────────────────────
const distributionData = [
  { range: "90–100", staff: 2 },
  { range: "80–89", staff: 5 },
  { range: "70–79", staff: 6 },
  { range: "60–69", staff: 3 },
  { range: "<60", staff: 1 },
];

const kpiRadarData = [
  { metric: "Task Completion", score: 82 },
  { metric: "Lead Conversion", score: 71 },
  { metric: "Attendance", score: 92 },
  { metric: "Target Achievement", score: 85 },
  { metric: "Customer Satisfaction", score: 78 },
];

const branchComparisonData = mockBranchPerformance.map((b) => ({
  name: b.branchName.split(" ")[0],
  score: b.score,
  tasks: b.taskCompletion,
  leads: Math.round((b.leadsConverted / 200) * 100),
  attendance: [95, 90, 88, 82, 91][mockBranchPerformance.indexOf(b)] ?? 88,
  target: Math.round((b.revenue / b.targetRevenue) * 100),
}));

const trendMonths = [
  "May",
  "Jun",
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
];
const trendData = trendMonths.map((m, i) => ({
  month: m,
  overall: 78 + Math.round(Math.sin(i / 3) * 3 + i * 0.3),
  sales: 76 + Math.round(Math.sin(i / 2.5) * 4 + i * 0.2),
  finance: 80 + Math.round(Math.sin(i / 4) * 2 + i * 0.25),
  operations: 75 + Math.round(Math.cos(i / 3) * 3 + i * 0.3),
}));

const momData = trendMonths.map((m, i) => ({
  month: m,
  productivity: 74 + i * 0.5 + Math.round(Math.sin(i / 2) * 2),
}));

const DEPARTMENTS = [
  "All Departments",
  "Sales",
  "Finance",
  "Operations",
  "HR",
  "Marketing",
  "IT",
];
const BRANCHES_LIST = [
  "All Branches",
  "Mumbai Central",
  "Delhi NCR",
  "Bengaluru East",
  "Hyderabad West",
  "Chennai South",
  "Kolkata North",
];
const PERIOD_OPTIONS = [
  "This Week",
  "This Month",
  "This Quarter",
  "This Year",
] as const;
type PeriodOption = (typeof PERIOD_OPTIONS)[number];

// Augmented leaderboard data
const fullLeaderboard = mockLeaderboard.map((e, i) => {
  const dept =
    [
      "Sales",
      "Finance",
      "Sales",
      "Marketing",
      "HR",
      "Finance",
      "HR",
      "Sales",
      "Sales",
      "Operations",
    ][i] ?? "Operations";
  return {
    ...e,
    department: dept,
    tasks: [91, 90, 88, 85, 88, 78, 74, 91, 88, 68][i] ?? 80,
    leads: [78, 74, 65, 72, 76, 70, 62, 82, 76, 58][i] ?? 70,
    attendance: [98, 97, 96, 95, 95, 93, 91, 95, 90, 82][i] ?? 90,
    target: [94, 87, 92, 88, 86, 80, 76, 94, 86, 70][i] ?? 82,
  };
});

// ─── Podium Cards ──────────────────────────────────────────────────────────────
function PodiumCard({
  position,
  name,
  score,
  department,
  isTop,
}: {
  position: number;
  name: string;
  score: number;
  department: string;
  isTop?: boolean;
}) {
  const configs = {
    1: {
      bg: "bg-amber-50 dark:bg-amber-900/10",
      border: "border-amber-200 dark:border-amber-800/40",
      icon: Trophy,
      iconColor: "text-amber-600",
      badge: "bg-amber-100 text-amber-700",
    },
    2: {
      bg: "bg-muted/30",
      border: "border-border",
      icon: Medal,
      iconColor: "text-muted-foreground",
      badge: "bg-muted text-muted-foreground",
    },
    3: {
      bg: "bg-orange-50 dark:bg-orange-900/10",
      border: "border-orange-200 dark:border-orange-800/40",
      icon: Award,
      iconColor: "text-orange-600",
      badge: "bg-orange-100 text-orange-700",
    },
  };
  const c = configs[position as 1 | 2 | 3];
  const Icon = c.icon;
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  return (
    <motion.div
      initial={{ opacity: 0, y: isTop ? -8 : 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: (position - 1) * 0.1 }}
      className={`rounded-2xl border shadow-card p-4 text-center flex flex-col items-center gap-2 ${c.bg} ${c.border} ${isTop ? "scale-105" : ""}`}
      data-ocid={`performance.podium.${position}`}
    >
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.badge}`}
      >
        <Icon className={`w-5 h-5 ${c.iconColor}`} />
      </div>
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm ${c.badge}`}
      >
        {initials}
      </div>
      <div>
        <p className="text-xs font-display font-bold text-foreground">
          {name.split(" ")[0]}
        </p>
        <p className="text-[10px] text-muted-foreground">{department}</p>
      </div>
      <p className={`text-xl font-display font-black ${c.iconColor}`}>
        {score}
      </p>
      <span
        className={`text-[10px] font-semibold px-2 py-0.5 rounded-lg ${c.badge}`}
      >
        #{position}
      </span>
    </motion.div>
  );
}

// ─── Low Performer Card ────────────────────────────────────────────────────────
function LowPerformerCard({
  name,
  score,
  improvement,
  index,
}: {
  name: string;
  score: number;
  improvement: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08 }}
      className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/40 rounded-2xl p-3 flex items-center gap-3"
      data-ocid={`performance.low_performer.${index + 1}`}
    >
      <div className="w-9 h-9 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0">
        <span className="text-xs font-display font-bold text-red-600">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-foreground truncate">{name}</p>
        <p className="text-[10px] text-red-600 font-medium">Score: {score}</p>
      </div>
      <Badge variant="secondary" className="text-[10px] shrink-0">
        {improvement}
      </Badge>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function PerformancePage() {
  const [period, setPeriod] = useState<PeriodOption>("This Month");
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("All Departments");
  const [branchFilter, setBranchFilter] = useState("All Branches");

  const sorted = [...mockPerformanceMetrics].sort((a, b) => a.rank - b.rank);
  const top3 = sorted.slice(0, 3);
  const bottom3 = sorted.slice(-3).reverse();

  const avgScore = Math.round(
    mockPerformanceMetrics.reduce((s, m) => s + m.productivityScore, 0) /
      mockPerformanceMetrics.length,
  );
  const topScore = sorted[0]?.productivityScore ?? 0;
  const lowestScore = sorted[sorted.length - 1]?.productivityScore ?? 0;

  const filteredLeaderboard = fullLeaderboard.filter((e) => {
    const matchSearch =
      search === "" || e.name.toLowerCase().includes(search.toLowerCase());
    const matchDept =
      deptFilter === "All Departments" || e.department === deptFilter;
    const matchBranch =
      branchFilter === "All Branches" || e.branch === branchFilter;
    return matchSearch && matchDept && matchBranch;
  });

  function handleExportCSV() {
    const rows = filteredLeaderboard.map((e) => ({
      Rank: e.position,
      Name: e.name,
      Department: e.department,
      Branch: e.branch,
      Score: e.score,
      "Tasks %": e.tasks,
      "Leads %": e.leads,
      "Attendance %": e.attendance,
      "Target %": e.target,
      Period: period,
    }));
    exportToCSV(rows as Record<string, unknown>[], "performance_leaderboard");
    toast.success("Performance data exported to CSV");
  }

  return (
    <div>
      <PageHeader
        title="Performance Analytics"
        subtitle="Staff and branch productivity, leaderboard, and trend analysis"
        breadcrumbs={[{ label: "Home" }, { label: "Performance" }]}
        actions={
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex rounded-xl overflow-hidden border border-border">
              {(
                ["This Month", "This Quarter", "This Year"] as PeriodOption[]
              ).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPeriod(p)}
                  data-ocid={`performance.period_toggle.${p.toLowerCase().replace(/\s+/g, "_")}`}
                  className={`px-3 py-1.5 text-xs font-semibold transition-smooth ${period === p ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted/60"}`}
                >
                  {p}
                </button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleExportCSV}
              className="rounded-xl gap-1.5"
              data-ocid="performance.export_csv_button"
            >
              <Download className="w-3.5 h-3.5" />
              Export CSV
            </Button>
          </div>
        }
        data-ocid="performance.header"
      />

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
        {[
          {
            title: "Avg Performance",
            value: `${avgScore}`,
            icon: Zap,
            iconColor: "text-primary",
            change: 3,
          },
          {
            title: "Top Performer",
            value: `${topScore}`,
            icon: Trophy,
            iconColor: "text-amber-600",
            change: 2,
          },
          {
            title: "Lowest Score",
            value: `${lowestScore}`,
            icon: TrendingDown,
            iconColor: "text-red-500",
            change: -1,
          },
          {
            title: "Team Target",
            value: "82%",
            icon: Target,
            iconColor: "text-green-600",
            change: 5,
          },
        ].map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
          >
            <StatCard
              title={s.title}
              value={s.value}
              change={s.change}
              icon={s.icon}
              iconColor={s.iconColor}
              data-ocid={`performance.stat.${i + 1}`}
            />
          </motion.div>
        ))}
      </div>

      <Tabs defaultValue="overview">
        <TabsList
          className="mb-4 overflow-x-auto flex-wrap"
          data-ocid="performance.tabs"
        >
          <TabsTrigger value="overview" data-ocid="performance.tab.overview">
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="leaderboard"
            data-ocid="performance.tab.leaderboard"
          >
            Leaderboard
          </TabsTrigger>
          <TabsTrigger value="branches" data-ocid="performance.tab.branches">
            Branch Comparison
          </TabsTrigger>
          <TabsTrigger value="trends" data-ocid="performance.tab.trends">
            Trends
          </TabsTrigger>
        </TabsList>

        {/* ── Overview ── */}
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {/* Distribution Bar */}
            <ChartCard
              title="Performance Distribution"
              subtitle="Staff count by score range"
              data-ocid="performance.distribution_chart"
            >
              <ResponsiveContainer width="100%" height={220}>
                <BarChart
                  data={distributionData}
                  margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="oklch(0.91 0.01 0)"
                  />
                  <XAxis
                    dataKey="range"
                    tick={{ fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip />
                  <Bar
                    dataKey="staff"
                    name="Staff Count"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={36}
                  >
                    {distributionData.map((d) => (
                      <Cell
                        key={`cell-${d.range}`}
                        fill={
                          d.range === "90–100"
                            ? "oklch(0.55 0.15 155)"
                            : d.range === "80–89"
                              ? "oklch(0.42 0.08 265)"
                              : d.range === "70–79"
                                ? "oklch(0.60 0.10 185)"
                                : d.range === "60–69"
                                  ? "oklch(0.68 0.18 75)"
                                  : "oklch(0.63 0.24 17)"
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* KPI Radar */}
            <ChartCard
              title="KPI Radar"
              subtitle="5 key performance metrics — org average"
              data-ocid="performance.kpi_radar"
            >
              <ResponsiveContainer width="100%" height={220}>
                <RadarChart
                  data={kpiRadarData}
                  margin={{ top: 4, right: 20, left: 20, bottom: 4 }}
                >
                  <PolarGrid stroke="oklch(0.91 0.01 0)" />
                  <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10 }} />
                  <Radar
                    name="Score"
                    dataKey="score"
                    stroke="oklch(0.42 0.08 265)"
                    fill="oklch(0.42 0.08 265)"
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                  <Tooltip formatter={(v: number) => [`${v}%`]} />
                </RadarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          {/* Top 3 Podium */}
          <div
            className="bg-card border border-border rounded-2xl shadow-card p-5"
            data-ocid="performance.podium_section"
          >
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-4 h-4 text-amber-600" />
              <h3 className="text-sm font-display font-semibold text-foreground">
                Top Performers
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
              <PodiumCard
                position={2}
                name={top3[1]?.userName ?? "—"}
                score={top3[1]?.productivityScore ?? 0}
                department={top3[1]?.branchName ?? "—"}
              />
              <PodiumCard
                position={1}
                name={top3[0]?.userName ?? "—"}
                score={top3[0]?.productivityScore ?? 0}
                department={top3[0]?.branchName ?? "—"}
                isTop
              />
              <PodiumCard
                position={3}
                name={top3[2]?.userName ?? "—"}
                score={top3[2]?.productivityScore ?? 0}
                department={top3[2]?.branchName ?? "—"}
              />
            </div>
          </div>

          {/* Bottom 3 needing attention */}
          <div
            className="bg-card border border-border rounded-2xl shadow-card p-5"
            data-ocid="performance.low_performers_section"
          >
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 text-red-500" />
              <h3 className="text-sm font-display font-semibold text-foreground">
                Needs Attention
              </h3>
              <span className="text-xs text-muted-foreground">
                — bottom 3 performers
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {bottom3.map((m, i) => (
                <LowPerformerCard
                  key={m.userId}
                  name={m.userName}
                  score={m.productivityScore}
                  improvement={
                    ["Lead Training", "Attendance", "Task Mgmt"][i] ?? "Review"
                  }
                  index={i}
                />
              ))}
            </div>
          </div>
        </TabsContent>

        {/* ── Leaderboard ── */}
        <TabsContent value="leaderboard" className="space-y-4">
          {/* Filters */}
          <div className="bg-card border border-border rounded-2xl shadow-card p-4 flex flex-wrap items-end gap-3">
            <div className="relative flex-1 min-w-[180px]">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <Input
                placeholder="Search staff…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8 h-8 text-xs"
                data-ocid="performance.leaderboard_search"
              />
            </div>
            <Select
              value={period}
              onValueChange={(v) => setPeriod(v as PeriodOption)}
            >
              <SelectTrigger
                className="h-8 text-xs w-36"
                aria-label="Filter by period"
                data-ocid="performance.leaderboard_period_select"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {PERIOD_OPTIONS.map((p) => (
                  <SelectItem key={p} value={p}>
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={deptFilter} onValueChange={setDeptFilter}>
              <SelectTrigger
                className="h-8 text-xs w-44"
                aria-label="Filter by department"
                data-ocid="performance.leaderboard_dept_select"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {DEPARTMENTS.map((d) => (
                  <SelectItem key={d} value={d}>
                    {d}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={branchFilter} onValueChange={setBranchFilter}>
              <SelectTrigger
                className="h-8 text-xs w-44"
                aria-label="Filter by branch"
                data-ocid="performance.leaderboard_branch_select"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {BRANCHES_LIST.map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="text-xs text-muted-foreground self-end pb-1 ml-auto">
              {filteredLeaderboard.length} staff
            </span>
          </div>

          <div
            className="bg-card border border-border rounded-2xl shadow-card overflow-hidden"
            data-ocid="performance.leaderboard_table"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[700px]">
                <thead className="bg-muted/30 border-b border-border">
                  <tr>
                    {[
                      "Rank",
                      "Staff",
                      "Department",
                      "Branch",
                      "Score",
                      "Tasks %",
                      "Leads %",
                      "Attend %",
                      "Target %",
                      "Trend",
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-3 py-2.5 text-left text-xs font-semibold text-muted-foreground"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredLeaderboard.length === 0 ? (
                    <tr>
                      <td
                        colSpan={10}
                        className="px-4 py-8 text-center text-sm text-muted-foreground"
                        data-ocid="performance.leaderboard_table.empty_state"
                      >
                        No staff match the current filters
                      </td>
                    </tr>
                  ) : (
                    filteredLeaderboard.map((e, i) => {
                      const isGreen = e.score >= 85;
                      const isRed = e.score < 75;
                      return (
                        <tr
                          key={e.userId}
                          className="hover:bg-muted/20 transition-smooth"
                          data-ocid={`performance.leaderboard_table.item.${i + 1}`}
                        >
                          <td className="px-3 py-2.5">
                            <div
                              className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold ${e.position === 1 ? "bg-amber-100 text-amber-700" : e.position === 2 ? "bg-muted text-foreground" : e.position === 3 ? "bg-orange-100 text-orange-600" : "border border-border text-muted-foreground"}`}
                            >
                              {e.position === 1 ? (
                                <Trophy className="w-3.5 h-3.5" />
                              ) : e.position === 2 ? (
                                <Medal className="w-3.5 h-3.5" />
                              ) : e.position === 3 ? (
                                <Award className="w-3.5 h-3.5" />
                              ) : (
                                e.position
                              )}
                            </div>
                          </td>
                          <td className="px-3 py-2.5">
                            <p className="text-xs font-semibold text-foreground">
                              {e.name}
                            </p>
                          </td>
                          <td className="px-3 py-2.5 text-xs text-muted-foreground">
                            {e.department}
                          </td>
                          <td className="px-3 py-2.5 text-xs text-muted-foreground">
                            {e.branch.split(" ")[0]}
                          </td>
                          <td className="px-3 py-2.5">
                            <span
                              className={`text-sm font-display font-bold ${isGreen ? "text-green-600" : isRed ? "text-red-500" : "text-amber-600"}`}
                            >
                              {e.score}
                            </span>
                          </td>
                          <td className="px-3 py-2.5 text-xs text-foreground">
                            {e.tasks}%
                          </td>
                          <td className="px-3 py-2.5 text-xs text-foreground">
                            {e.leads}%
                          </td>
                          <td className="px-3 py-2.5 text-xs text-foreground">
                            {e.attendance}%
                          </td>
                          <td className="px-3 py-2.5 text-xs text-foreground">
                            {e.target}%
                          </td>
                          <td className="px-3 py-2.5">
                            {e.change > 0 ? (
                              <TrendingUp className="w-3.5 h-3.5 text-green-500" />
                            ) : e.change < 0 ? (
                              <TrendingDown className="w-3.5 h-3.5 text-red-500" />
                            ) : (
                              <Minus className="w-3.5 h-3.5 text-muted-foreground" />
                            )}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        {/* ── Branch Comparison ── */}
        <TabsContent value="branches" className="space-y-4">
          <ChartCard
            title="Branch Performance Comparison"
            subtitle="5 metrics across all branches"
            data-ocid="performance.branch_comparison_chart"
          >
            <ResponsiveContainer width="100%" height={280}>
              <BarChart
                data={branchComparisonData}
                margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="oklch(0.91 0.01 0)"
                />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 100]}
                />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="score"
                  name="Overall Score"
                  fill="oklch(0.42 0.08 265)"
                  radius={[3, 3, 0, 0]}
                  maxBarSize={14}
                />
                <Bar
                  dataKey="tasks"
                  name="Task Completion"
                  fill="oklch(0.60 0.10 185)"
                  radius={[3, 3, 0, 0]}
                  maxBarSize={14}
                />
                <Bar
                  dataKey="leads"
                  name="Lead Conversion"
                  fill="oklch(0.68 0.18 75)"
                  radius={[3, 3, 0, 0]}
                  maxBarSize={14}
                />
                <Bar
                  dataKey="attendance"
                  name="Attendance"
                  fill="oklch(0.55 0.15 155)"
                  radius={[3, 3, 0, 0]}
                  maxBarSize={14}
                />
                <Bar
                  dataKey="target"
                  name="Target %"
                  fill="oklch(0.58 0.12 260)"
                  radius={[3, 3, 0, 0]}
                  maxBarSize={14}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <div
            className="bg-card border border-border rounded-2xl shadow-card overflow-hidden"
            data-ocid="performance.branch_comparison_table"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[560px]">
                <thead className="bg-muted/30 border-b border-border">
                  <tr>
                    {[
                      "Branch",
                      "Manager",
                      "Avg Score",
                      "Tasks %",
                      "Leads %",
                      "Rank",
                      "Change",
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
                  {mockBranchPerformance
                    .sort((a, b) => a.rank - b.rank)
                    .map((b, i) => {
                      const managers = [
                        "Sunita Reddy",
                        "Amit Patel",
                        "Pooja Verma",
                        "Nisha Thomas",
                        "Suresh Babu",
                      ];
                      const changes = [2, 0, -1, 1, 0];
                      const ch = changes[i] ?? 0;
                      return (
                        <tr
                          key={b.branchId}
                          className="hover:bg-muted/20 transition-smooth"
                          data-ocid={`performance.branch_comparison_table.item.${i + 1}`}
                        >
                          <td className="px-4 py-2.5 text-xs font-semibold text-foreground">
                            {b.branchName}
                          </td>
                          <td className="px-4 py-2.5 text-xs text-muted-foreground">
                            {managers[i]}
                          </td>
                          <td className="px-4 py-2.5">
                            <span
                              className={`text-sm font-display font-bold ${b.score >= 90 ? "text-green-600" : b.score >= 85 ? "text-primary" : "text-amber-600"}`}
                            >
                              {b.score}
                            </span>
                          </td>
                          <td className="px-4 py-2.5 text-xs text-foreground">
                            {b.taskCompletion}%
                          </td>
                          <td className="px-4 py-2.5 text-xs text-foreground">
                            {Math.round((b.leadsConverted / 200) * 100)}%
                          </td>
                          <td className="px-4 py-2.5">
                            <span className="w-6 h-6 rounded-lg bg-muted flex items-center justify-center text-xs font-bold text-foreground">
                              #{b.rank}
                            </span>
                          </td>
                          <td className="px-4 py-2.5">
                            <span
                              className={`flex items-center gap-0.5 text-xs font-semibold ${ch > 0 ? "text-green-600" : ch < 0 ? "text-red-500" : "text-muted-foreground"}`}
                            >
                              {ch > 0 ? (
                                <TrendingUp className="w-3.5 h-3.5" />
                              ) : ch < 0 ? (
                                <TrendingDown className="w-3.5 h-3.5" />
                              ) : (
                                <Minus className="w-3.5 h-3.5" />
                              )}
                              {ch !== 0 && `${Math.abs(ch)}`}
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

        {/* ── Trends ── */}
        <TabsContent value="trends" className="space-y-4">
          <ChartCard
            title="12-Month Performance Trend"
            subtitle="Overall score + department breakdown"
            periods={["12M", "6M", "3M"]}
            data-ocid="performance.trend_chart"
          >
            <ResponsiveContainer width="100%" height={260}>
              <LineChart
                data={trendData}
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
                  domain={[65, 95]}
                />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="overall"
                  name="Overall"
                  stroke="oklch(0.42 0.08 265)"
                  strokeWidth={2.5}
                  dot={{ r: 3 }}
                />
                <Line
                  type="monotone"
                  dataKey="sales"
                  name="Sales"
                  stroke="oklch(0.68 0.18 75)"
                  strokeWidth={1.5}
                  dot={false}
                  strokeDasharray="4 3"
                />
                <Line
                  type="monotone"
                  dataKey="finance"
                  name="Finance"
                  stroke="oklch(0.55 0.15 155)"
                  strokeWidth={1.5}
                  dot={false}
                  strokeDasharray="4 3"
                />
                <Line
                  type="monotone"
                  dataKey="operations"
                  name="Operations"
                  stroke="oklch(0.60 0.10 185)"
                  strokeWidth={1.5}
                  dot={false}
                  strokeDasharray="4 3"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Productivity Area */}
            <ChartCard
              title="Productivity Score Trend"
              subtitle="Month-over-month org average"
              data-ocid="performance.productivity_trend"
            >
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart
                  data={momData}
                  margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="prodGrad" x1="0" y1="0" x2="0" y2="1">
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
                    domain={[70, 82]}
                  />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="productivity"
                    name="Productivity"
                    stroke="oklch(0.42 0.08 265)"
                    strokeWidth={2}
                    fill="url(#prodGrad)"
                    dot={{ r: 3 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* Month-over-month summary */}
            <div
              className="bg-card border border-border rounded-2xl shadow-card p-5 space-y-3"
              data-ocid="performance.mom_summary"
            >
              <h3 className="text-sm font-display font-semibold text-foreground">
                Month-over-Month Summary
              </h3>
              {[
                { metric: "Overall Score", prev: 78, curr: 80, unit: "" },
                { metric: "Task Completion", prev: 80, curr: 83, unit: "%" },
                { metric: "Lead Conversion", prev: 69, curr: 71, unit: "%" },
                { metric: "Attendance Rate", prev: 91, curr: 92, unit: "%" },
                { metric: "Target Achievement", prev: 84, curr: 87, unit: "%" },
              ].map((m, i) => {
                const diff = m.curr - m.prev;
                return (
                  <div
                    key={m.metric}
                    className="flex items-center gap-3"
                    data-ocid={`performance.mom_summary.item.${i + 1}`}
                  >
                    <span className="text-xs text-muted-foreground flex-1">
                      {m.metric}
                    </span>
                    <span className="text-xs font-mono text-foreground">
                      {m.prev}
                      {m.unit}
                    </span>
                    <div className="w-16 h-1 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${(m.curr / 100) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono font-bold text-foreground">
                      {m.curr}
                      {m.unit}
                    </span>
                    <span
                      className={`text-xs font-semibold w-10 text-right ${diff > 0 ? "text-green-600" : diff < 0 ? "text-red-500" : "text-muted-foreground"}`}
                    >
                      {diff > 0 ? `+${diff}` : diff}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
