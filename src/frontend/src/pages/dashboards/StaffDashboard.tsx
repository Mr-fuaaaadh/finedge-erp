import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "@tanstack/react-router";
import {
  Award,
  CalendarDays,
  CheckCircle2,
  Clock,
  Download,
  Phone,
  Plus,
  Star,
  Target,
  Timer,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { ChartCard } from "../../components/shared/ChartCard";
import { PageHeader } from "../../components/shared/PageHeader";
import { PriorityBadge } from "../../components/shared/PriorityBadge";
import { StatCard } from "../../components/shared/StatCard";
import { StatusBadge } from "../../components/shared/StatusBadge";
import { mockLeads } from "../../data/mockLeads";
import { mockTasks } from "../../data/mockTasks";
import { useAuth } from "../../hooks/useAuth";
import { exportToCSV } from "../../utils/csvExport";

const today = new Date();

function formatDueDate(dateStr: string) {
  const d = new Date(dateStr);
  const diff = Math.ceil(
    (d.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  );
  if (diff < 0) return "Overdue";
  if (diff === 0) return "Today";
  if (diff === 1) return "Tomorrow";
  return `${diff}d left`;
}

export default function StaffDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const myLeads = mockLeads.filter((l) => l.assignedToId === user.id);
  const myTasks = mockTasks.filter((t) => t.assignedToId === user.id);

  const recentLeads = [...myLeads]
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
    )
    .slice(0, 5);

  const upcomingFollowUps = myLeads
    .filter((l) => l.followUpDate && new Date(l.followUpDate) >= today)
    .sort(
      (a, b) =>
        new Date(a.followUpDate!).getTime() -
        new Date(b.followUpDate!).getTime(),
    )
    .slice(0, 4);

  const dailyTargets = [
    {
      label: "Leads Contacted",
      done: 8,
      total: 10,
      icon: Phone,
      color: "text-primary",
    },
    {
      label: "Calls Made",
      done: 5,
      total: 8,
      icon: Phone,
      color: "text-secondary",
    },
    {
      label: "Tasks Completed",
      done: myTasks.filter((t) => t.status === "Done").length || 4,
      total: 5,
      icon: CheckCircle2,
      color: "text-green-600",
    },
  ];

  const kpis = [
    {
      title: "My Leads",
      value: myLeads.length || 12,
      change: 2,
      icon: Target,
      iconColor: "text-primary",
    },
    {
      title: "Tasks Today",
      value: myTasks.filter((t) => t.status !== "Done").length || 5,
      change: 0,
      icon: Zap,
      iconColor: "text-amber-600",
    },
    {
      title: "Attendance Streak",
      value: "18 days",
      change: 3,
      icon: Award,
      iconColor: "text-green-600",
    },
    {
      title: "Performance Score",
      value: `${user.performanceScore}/100`,
      change: 2,
      icon: Star,
      iconColor: "text-secondary",
    },
  ];

  const getDueColor = (dateStr: string) => {
    const diff = Math.ceil(
      (new Date(dateStr).getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
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
        "Change (%)": k.change,
      })),
      ...myTasks.map((t) => ({
        Category: "Task",
        Metric: t.title,
        Value: t.status,
        "Change (%)": t.progress,
      })),
    ];
    exportToCSV(
      exportData as Record<string, unknown>[],
      `my-dashboard-${user.name.replace(/\s+/g, "-").toLowerCase()}`,
    );
  }

  const quickActions = [
    {
      label: "New Lead",
      icon: Plus,
      href: "/leads/new",
      ocid: "staff_dashboard.quick_action.new_lead",
    },
    {
      label: "New Task",
      icon: Zap,
      href: "/tasks/new",
      ocid: "staff_dashboard.quick_action.new_task",
    },
  ];

  return (
    <div>
      {/* Welcome Banner */}
      <motion.div
        className="mb-4 sm:mb-6 p-3 sm:p-5 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 shadow-card"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        data-ocid="staff_dashboard.welcome"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border-2 border-primary/30 shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h1 className="text-base sm:text-lg font-display font-bold text-foreground truncate">
              Good {greeting}, {user.name.split(" ")[0]}! 👋
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
              {today.toLocaleDateString("en-IN", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              — {user.branchName} · {user.designation}
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Performance Score</p>
              <p className="text-2xl font-display font-bold text-primary">
                {user.performanceScore}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </motion.div>

      <PageHeader
        title="My Dashboard"
        subtitle="Personal performance and task overview"
        breadcrumbs={[{ label: "Dashboard" }, { label: user.name }]}
        actions={
          <div className="flex items-center gap-2 flex-wrap">
            {quickActions.map((action) => (
              <Button
                key={action.label}
                variant="outline"
                size="sm"
                onClick={() => navigate({ to: action.href })}
                className="gap-1.5 text-xs min-h-[36px]"
                data-ocid={action.ocid}
              >
                <action.icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{action.label}</span>
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={handleExportCSV}
              className="gap-1.5 text-xs min-h-[36px]"
              data-ocid="staff_dashboard.export_button"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export</span>
            </Button>
          </div>
        }
        data-ocid="staff_dashboard.header"
      />

      {/* KPI Cards — 1 col mobile, 2 col sm, 3 col lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
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
              data-ocid={`staff_dashboard.kpi.${i + 1}`}
            />
          </motion.div>
        ))}
      </div>

      {/* Quick Action Pills — mobile-only */}
      <div className="flex gap-2 mb-4 sm:hidden flex-wrap">
        {quickActions.map((action) => (
          <button
            key={action.label}
            type="button"
            onClick={() => navigate({ to: action.href })}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary/10 text-primary text-xs font-semibold min-h-[44px] border border-primary/20"
            data-ocid={`${action.ocid}_mobile`}
          >
            <action.icon className="w-3.5 h-3.5" />
            {action.label}
          </button>
        ))}
      </div>

      {/* Tasks + Leads — stack on mobile, 2 cols on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38 }}
        >
          <ChartCard
            title="Assigned Tasks"
            subtitle="Active and upcoming"
            data-ocid="staff_dashboard.tasks_list"
          >
            {/* Cards on mobile */}
            <div className="space-y-2 mt-1 lg:hidden">
              {myTasks
                .filter((t) => t.status !== "Done")
                .slice(0, 5)
                .map((task, i) => (
                  <div
                    key={task.id}
                    className="p-2.5 rounded-xl border border-border/60 bg-muted/20 hover:bg-muted/40 transition-smooth"
                    data-ocid={`staff_dashboard.tasks_list.item.${i + 1}`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <p className="text-xs font-semibold text-foreground leading-snug line-clamp-2 flex-1">
                        {task.title}
                      </p>
                      <PriorityBadge priority={task.priority} />
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <StatusBadge status={task.status} />
                      <span
                        className={`text-[10px] font-medium flex items-center gap-1 ${getDueColor(task.dueDate)}`}
                      >
                        <Clock className="w-2.5 h-2.5" />
                        {formatDueDate(task.dueDate)}
                      </span>
                      {task.progress > 0 && (
                        <div className="flex items-center gap-1 ml-auto">
                          <div className="w-14 h-1 rounded-full bg-muted overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full"
                              style={{ width: `${task.progress}%` }}
                            />
                          </div>
                          <span className="text-[10px] text-muted-foreground">
                            {task.progress}%
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              {myTasks.filter((t) => t.status !== "Done").length === 0 && (
                <div
                  className="flex flex-col items-center py-8 text-center"
                  data-ocid="staff_dashboard.tasks_list.empty_state"
                >
                  <CheckCircle2 className="w-8 h-8 text-green-500 mb-2" />
                  <p className="text-sm font-semibold text-foreground">
                    All caught up!
                  </p>
                  <p className="text-xs text-muted-foreground">
                    No pending tasks assigned
                  </p>
                </div>
              )}
            </div>

            {/* Table on desktop */}
            <div className="hidden lg:block mt-1 overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-1 font-semibold text-muted-foreground">
                      Task
                    </th>
                    <th className="text-left py-2 px-1 font-semibold text-muted-foreground">
                      Priority
                    </th>
                    <th className="text-left py-2 px-1 font-semibold text-muted-foreground">
                      Status
                    </th>
                    <th className="text-right py-2 px-1 font-semibold text-muted-foreground">
                      Due
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {myTasks
                    .filter((t) => t.status !== "Done")
                    .slice(0, 6)
                    .map((task, i) => (
                      <tr
                        key={task.id}
                        className="border-b border-border/40 hover:bg-muted/30 transition-smooth"
                        data-ocid={`staff_dashboard.tasks_list.item.${i + 1}`}
                      >
                        <td className="py-2.5 px-1 font-semibold text-foreground max-w-[160px] truncate">
                          {task.title}
                        </td>
                        <td className="py-2.5 px-1">
                          <PriorityBadge priority={task.priority} />
                        </td>
                        <td className="py-2.5 px-1">
                          <StatusBadge status={task.status} />
                        </td>
                        <td
                          className={`py-2.5 px-1 text-right font-medium text-[11px] ${getDueColor(task.dueDate)}`}
                        >
                          {formatDueDate(task.dueDate)}
                        </td>
                      </tr>
                    ))}
                  {myTasks.filter((t) => t.status !== "Done").length === 0 && (
                    <tr>
                      <td
                        colSpan={4}
                        className="py-6 text-center text-xs text-muted-foreground"
                        data-ocid="staff_dashboard.tasks_list.empty_state"
                      >
                        No pending tasks
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </ChartCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.44 }}
        >
          <ChartCard
            title="My Leads"
            subtitle="5 most recently updated"
            data-ocid="staff_dashboard.leads_table"
          >
            {/* Scrollable list with status badges */}
            <div className="mt-1 space-y-2 max-h-[280px] overflow-y-auto pr-1">
              {recentLeads.map((lead, i) => (
                <div
                  key={lead.id}
                  className="flex items-center gap-2 p-2 rounded-xl bg-muted/20 hover:bg-muted/40 transition-smooth border border-border/40"
                  data-ocid={`staff_dashboard.leads_table.item.${i + 1}`}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-foreground truncate">
                      {lead.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground truncate">
                      {lead.company}
                    </p>
                  </div>
                  <StatusBadge status={lead.status} />
                  <span className="text-xs font-semibold text-foreground shrink-0">
                    ₹{(lead.value / 1000).toFixed(0)}K
                  </span>
                </div>
              ))}
              {recentLeads.length === 0 && (
                <div
                  className="flex flex-col items-center py-8 text-center"
                  data-ocid="staff_dashboard.leads_table.empty_state"
                >
                  <Target className="w-8 h-8 text-muted-foreground mb-2" />
                  <p className="text-sm font-semibold text-foreground">
                    No leads yet
                  </p>
                  <p className="text-xs text-muted-foreground">
                    No leads assigned to you
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate({ to: "/leads/new" })}
                    className="mt-3 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold min-h-[36px] border border-primary/20"
                    data-ocid="staff_dashboard.leads_table.empty_state.add_lead_button"
                  >
                    + Add Lead
                  </button>
                </div>
              )}
            </div>
          </ChartCard>
        </motion.div>
      </div>

      {/* Follow-ups Timeline + Daily Targets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <ChartCard
            title="Upcoming Follow-ups"
            subtitle="Next 3 days"
            data-ocid="staff_dashboard.followups_timeline"
          >
            <div className="mt-2 space-y-3">
              {upcomingFollowUps.map((lead, i) => {
                const followDate = new Date(lead.followUpDate!);
                const diff = Math.ceil(
                  (followDate.getTime() - today.getTime()) /
                    (1000 * 60 * 60 * 24),
                );
                return (
                  <div
                    key={lead.id}
                    className="flex items-start gap-3 relative pl-4"
                    data-ocid={`staff_dashboard.followups_timeline.item.${i + 1}`}
                  >
                    <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
                    {i < upcomingFollowUps.length - 1 && (
                      <div className="absolute left-[4.5px] top-4 bottom-[-12px] w-0.5 bg-border" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs font-semibold text-foreground truncate">
                          {lead.name}
                        </p>
                        <span
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md shrink-0 ${
                            diff === 0
                              ? "bg-amber-100 text-amber-700"
                              : diff === 1
                                ? "bg-primary/10 text-primary"
                                : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {diff === 0
                            ? "Today"
                            : diff === 1
                              ? "Tomorrow"
                              : `${diff}d`}
                        </span>
                      </div>
                      <p className="text-[10px] text-muted-foreground">
                        {lead.company} · {lead.product}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <CalendarDays className="w-2.5 h-2.5 text-muted-foreground" />
                        <span className="text-[10px] text-muted-foreground">
                          {followDate.toLocaleDateString("en-IN", {
                            month: "short",
                            day: "numeric",
                          })}{" "}
                          ·{" "}
                          {followDate.toLocaleTimeString("en-IN", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                        <StatusBadge status={lead.status} />
                      </div>
                    </div>
                  </div>
                );
              })}
              {upcomingFollowUps.length === 0 && (
                <div
                  className="flex flex-col items-center py-8 text-center"
                  data-ocid="staff_dashboard.followups_timeline.empty_state"
                >
                  <CalendarDays className="w-8 h-8 text-muted-foreground mb-2" />
                  <p className="text-sm font-semibold text-foreground">
                    No follow-ups scheduled
                  </p>
                  <p className="text-xs text-muted-foreground">
                    You're all clear for the next 3 days
                  </p>
                </div>
              )}
            </div>
          </ChartCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.56 }}
        >
          <ChartCard
            title="Daily Targets"
            subtitle="Today's activity progress"
            data-ocid="staff_dashboard.daily_targets"
          >
            <div className="space-y-4 mt-2">
              {dailyTargets.map((target, i) => (
                <div
                  key={target.label}
                  data-ocid={`staff_dashboard.daily_targets.item.${i + 1}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-6 h-6 rounded-lg bg-muted/60 flex items-center justify-center ${target.color}`}
                      >
                        <target.icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-foreground">
                        {target.label}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-base font-display font-bold text-foreground">
                        {target.done}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        / {target.total}
                      </span>
                    </div>
                  </div>
                  <Progress
                    value={Math.round((target.done / target.total) * 100)}
                    className="h-2"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-[10px] text-muted-foreground">
                      {target.total - target.done} remaining
                    </span>
                    <span
                      className={`text-[10px] font-semibold ${target.done >= target.total ? "text-green-600" : "text-muted-foreground"}`}
                    >
                      {Math.round((target.done / target.total) * 100)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-border flex items-center gap-3 p-3 rounded-xl bg-primary/5 border-primary/15">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Timer className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-foreground">
                  Daily Completion Rate
                </p>
                <p className="text-[10px] text-muted-foreground">
                  Based on today's activities
                </p>
              </div>
              <div className="text-xl font-display font-bold text-primary shrink-0">
                {Math.round(
                  (dailyTargets.reduce((s, t) => s + t.done / t.total, 0) /
                    dailyTargets.length) *
                    100,
                )}
                %
              </div>
            </div>
          </ChartCard>
        </motion.div>
      </div>
    </div>
  );
}
