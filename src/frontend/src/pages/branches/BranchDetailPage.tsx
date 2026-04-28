import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  Award,
  Building2,
  Calendar,
  CheckCircle2,
  Download,
  Edit,
  Mail,
  MapPin,
  Phone,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo } from "react";
import { PageHeader } from "../../components/shared/PageHeader";
import { StatusBadge } from "../../components/shared/StatusBadge";
import { getBranchById } from "../../data/mockBranches";
import { getUsersByBranch } from "../../data/mockUsers";

const RANK_MEDAL: Record<number, string> = { 1: "🥇", 2: "🥈", 3: "🥉" };
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
  "Jun",
];

function formatRevenue(v: number): string {
  if (v >= 1_000_000) return `₹${(v / 1_000_000).toFixed(2)}M`;
  if (v >= 1_000) return `₹${(v / 1_000).toFixed(0)}K`;
  return `₹${v}`;
}

function mockMonthlyRevenue(baseRevenue: number): number[] {
  const base = baseRevenue / 1_000_000;
  return MONTH_LABELS.map((_, i) => {
    const noise = (Math.sin(i * 1.3) + Math.cos(i * 0.7)) * 0.15;
    return Math.max(0.5, +(base * (0.85 + noise + i * 0.008)).toFixed(2));
  });
}

function KPICard({
  label,
  value,
  suffix = "%",
  icon: Icon,
  color,
  trend,
}: {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ElementType;
  color: string;
  trend?: "up" | "down";
}) {
  return (
    <Card className="border border-border shadow-card rounded-2xl">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
              {label}
            </p>
            <p className="text-2xl font-display font-bold text-foreground mt-1">
              {value}
              {suffix}
            </p>
            {trend && (
              <p
                className={`text-[11px] font-medium mt-0.5 ${trend === "up" ? "text-green-600" : "text-red-500"}`}
              >
                {trend === "up" ? "↑" : "↓"} vs last month
              </p>
            )}
          </div>
          <div
            className={`flex items-center justify-center w-9 h-9 rounded-xl bg-muted/60 ${color} shrink-0`}
          >
            <Icon className="w-4 h-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const ACTIVITIES = [
  {
    id: "a1",
    type: "target",
    label: "Revenue target revised upward",
    time: "2 days ago",
  },
  {
    id: "a2",
    type: "staff",
    label: "New staff member onboarded",
    time: "5 days ago",
  },
  {
    id: "a3",
    type: "lead",
    label: "Lead conversion milestone reached",
    time: "1 week ago",
  },
  {
    id: "a4",
    type: "audit",
    label: "Quarterly audit completed",
    time: "2 weeks ago",
  },
  {
    id: "a5",
    type: "review",
    label: "Performance review submitted",
    time: "3 weeks ago",
  },
];

const ACTIVITY_DOT: Record<string, string> = {
  target: "bg-green-500",
  staff: "bg-primary",
  lead: "bg-amber-500",
  audit: "bg-purple-500",
  review: "bg-muted-foreground",
};

export default function BranchDetailPage() {
  const { branchId } = useParams({ from: "/layout/branches/$branchId" });
  const navigate = useNavigate();
  const branch = getBranchById(branchId);
  const staff = getUsersByBranch(branchId);

  const monthlyRevenue = useMemo(
    () => (branch ? mockMonthlyRevenue(branch.revenue) : []),
    [branch],
  );
  const revenueMaxM =
    monthlyRevenue.length > 0 ? Math.max(...monthlyRevenue) : 1;
  const pct = branch
    ? Math.round((branch.revenue / branch.targetRevenue) * 100)
    : 0;
  const targetM = branch ? branch.targetRevenue / 1_000_000 : 0;

  if (!branch) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-3">
        <Building2 className="w-10 h-10 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">Branch not found.</p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate({ to: "/branches" })}
        >
          Back to Branches
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-5" data-ocid="branch_detail.page">
      <PageHeader
        title={branch.name}
        subtitle={`${branch.city}, ${branch.state} · ${branch.code}`}
        breadcrumbs={[
          { label: "Home" },
          { label: "Branches", href: "/branches" },
          { label: branch.name },
        ]}
        actions={
          <div className="flex items-center gap-2 flex-wrap">
            <Button
              size="sm"
              variant="outline"
              className="rounded-xl gap-1.5"
              data-ocid="branch_detail.download_report.button"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download Report</span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="rounded-xl gap-1.5"
              onClick={() => navigate({ to: "/staff" })}
              data-ocid="branch_detail.view_staff.button"
            >
              <Users className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">View Staff</span>
            </Button>
            <Button
              size="sm"
              className="rounded-xl gap-1.5"
              onClick={() =>
                navigate({
                  to: "/branches/$branchId/edit",
                  params: { branchId },
                })
              }
              data-ocid="branch_detail.edit_branch.button"
            >
              <Edit className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Edit Branch</span>
            </Button>
          </div>
        }
      />

      {/* Hero card */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-card border border-border rounded-2xl shadow-card p-4 sm:p-6"
        data-ocid="branch_detail.hero.card"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <Building2 className="w-7 h-7 text-primary" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg font-display font-bold text-foreground truncate">
                  {branch.name}
                </h2>
                {RANK_MEDAL[branch.rank] && (
                  <span className="text-lg" title={`Rank #${branch.rank}`}>
                    {RANK_MEDAL[branch.rank]}
                  </span>
                )}
                <StatusBadge status={branch.status} />
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 font-mono">
                {branch.code}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap text-sm">
            <div className="text-center">
              <p className="text-lg font-bold text-foreground">
                {branch.staffCount}
              </p>
              <p className="text-[11px] text-muted-foreground">Staff</p>
            </div>
            <Separator orientation="vertical" className="h-8 hidden sm:block" />
            <div className="text-center">
              <p className="text-lg font-bold text-foreground">
                {branch.leadsConverted}
              </p>
              <p className="text-[11px] text-muted-foreground">Leads Won</p>
            </div>
            <Separator orientation="vertical" className="h-8 hidden sm:block" />
            <div className="text-center">
              <p className="text-lg font-bold text-foreground">
                {branch.performance}%
              </p>
              <p className="text-[11px] text-muted-foreground">Performance</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main grid: 1-col on mobile, 3-col on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
        {/* Left column */}
        <div className="lg:col-span-1 space-y-4">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="bg-card border border-border rounded-2xl shadow-card"
            data-ocid="branch_detail.overview.card"
          >
            <div className="px-4 py-3 border-b border-border">
              <h3 className="text-sm font-display font-semibold text-foreground">
                Overview
              </h3>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                <div>
                  <p className="text-[11px] text-muted-foreground">Address</p>
                  <p className="text-xs text-foreground font-medium">
                    {branch.address}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-[11px] text-muted-foreground">Phone</p>
                  <p className="text-xs text-foreground font-medium">
                    {branch.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-[11px] text-muted-foreground">Email</p>
                  <p className="text-xs text-foreground font-medium break-all">
                    {branch.email}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-[11px] text-muted-foreground">
                    Branch Manager
                  </p>
                  <p className="text-xs text-foreground font-medium">
                    {branch.managerName}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-[11px] text-muted-foreground">
                    Established
                  </p>
                  <p className="text-xs text-foreground font-medium">
                    {new Date(branch.createdAt).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Staff list compact */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-card border border-border rounded-2xl shadow-card"
            data-ocid="branch_detail.staff.card"
          >
            <div className="px-4 py-3 border-b border-border flex items-center justify-between">
              <h3 className="text-sm font-display font-semibold text-foreground">
                Staff Members
              </h3>
              <Badge variant="secondary" className="text-[10px]">
                {staff.length}
              </Badge>
            </div>
            {staff.length === 0 ? (
              <div
                className="p-6 text-center text-sm text-muted-foreground"
                data-ocid="branch_detail.staff.empty_state"
              >
                No staff assigned to this branch.
              </div>
            ) : (
              <div className="divide-y divide-border max-h-72 overflow-y-auto">
                {staff.map((member, idx) => (
                  <button
                    key={member.id}
                    type="button"
                    className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-muted/20 transition-colors text-left"
                    data-ocid={`branch_detail.staff.item.${idx + 1}`}
                    onClick={() => navigate({ to: `/staff/${member.id}` })}
                  >
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-7 h-7 rounded-full shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-foreground truncate">
                        {member.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground truncate">
                        {member.designation}
                      </p>
                    </div>
                    <StatusBadge
                      status={member.status}
                      className="text-[9px] shrink-0"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="bg-card border border-border rounded-2xl shadow-card"
            data-ocid="branch_detail.activity.card"
          >
            <div className="px-4 py-3 border-b border-border">
              <h3 className="text-sm font-display font-semibold text-foreground">
                Recent Activity
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {ACTIVITIES.map((act, idx) => (
                <div
                  key={act.id}
                  className="flex items-start gap-3"
                  data-ocid={`branch_detail.activity.item.${idx + 1}`}
                >
                  <div
                    className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${ACTIVITY_DOT[act.type] ?? "bg-muted"}`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-foreground leading-snug">
                      {act.label}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {act.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column: charts + KPIs + staff table */}
        <div className="lg:col-span-2 space-y-4">
          {/* Revenue analytics */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.08 }}
            className="bg-card border border-border rounded-2xl shadow-card"
            data-ocid="branch_detail.revenue.card"
          >
            <div className="px-4 sm:px-5 py-4 border-b border-border flex items-center justify-between">
              <div>
                <h3 className="text-sm font-display font-semibold text-foreground">
                  Revenue Analytics
                </h3>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  Monthly revenue vs target (₹M)
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold font-display text-foreground">
                  {formatRevenue(branch.revenue)}
                </p>
                <p className="text-[11px] text-muted-foreground">This month</p>
              </div>
            </div>

            <div className="p-4 sm:p-5">
              {/* Bar chart */}
              <div className="h-36 sm:h-44 flex items-end gap-1 relative mb-1">
                {/* Target dashed line */}
                <div
                  className="absolute left-0 right-0 border-t border-dashed border-amber-400/70 pointer-events-none"
                  style={{ bottom: `${(targetM / revenueMaxM) * 100}%` }}
                >
                  <span className="absolute -top-4 right-0 text-[9px] text-amber-600 font-medium">
                    Target
                  </span>
                </div>
                {monthlyRevenue.map((val, i) => (
                  <div
                    key={MONTH_LABELS[i]}
                    className="flex-1 flex flex-col items-center"
                  >
                    <div
                      className="w-full rounded-t-sm bg-primary/70 hover:bg-primary transition-colors"
                      style={{
                        height: `${Math.round((val / revenueMaxM) * 100)}%`,
                        minHeight: "4px",
                      }}
                      title={`${MONTH_LABELS[i]}: ₹${val.toFixed(2)}M`}
                    />
                  </div>
                ))}
              </div>
              {/* Month labels */}
              <div className="flex gap-1">
                {MONTH_LABELS.map((m) => (
                  <span
                    key={m}
                    className="flex-1 text-center text-[9px] text-muted-foreground"
                  >
                    {m}
                  </span>
                ))}
              </div>

              {/* Progress bar */}
              <div className="mt-4 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-medium">
                    Target Achievement
                  </span>
                  <span
                    className={`font-bold ${pct >= 100 ? "text-green-600" : pct >= 80 ? "text-primary" : "text-amber-600"}`}
                  >
                    {pct}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${pct >= 100 ? "bg-green-500" : pct >= 80 ? "bg-primary" : "bg-amber-500"}`}
                    style={{ width: `${Math.min(pct, 100)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-muted-foreground">
                  <span>{formatRevenue(branch.revenue)} earned</span>
                  <span>{formatRevenue(branch.targetRevenue)} target</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* KPI grid */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.12 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
            data-ocid="branch_detail.kpi.section"
          >
            <KPICard
              label="Revenue Achievement"
              value={pct}
              icon={Target}
              color="text-primary"
              trend={pct >= 90 ? "up" : "down"}
            />
            <KPICard
              label="Overall Performance"
              value={branch.performance}
              icon={TrendingUp}
              color="text-green-600"
              trend={branch.performance >= 85 ? "up" : "down"}
            />
            <KPICard
              label="Lead Conversion"
              value={Math.round(
                (branch.leadsConverted / (branch.staffCount * 12)) * 100,
              )}
              icon={CheckCircle2}
              color="text-amber-600"
              trend="up"
            />
            <KPICard
              label="Branch Rank"
              value={branch.rank}
              suffix=""
              icon={Award}
              color="text-purple-600"
            />
          </motion.div>

          {/* Staff table */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.16 }}
            className="bg-card border border-border rounded-2xl shadow-card overflow-hidden"
            data-ocid="branch_detail.staff_table.card"
          >
            <div className="px-4 sm:px-5 py-4 border-b border-border flex items-center justify-between">
              <h3 className="text-sm font-display font-semibold text-foreground">
                Staff Directory
              </h3>
              <Button
                size="sm"
                variant="outline"
                className="h-7 rounded-xl text-xs gap-1"
                onClick={() => navigate({ to: "/staff/new" })}
                data-ocid="branch_detail.add_staff.button"
              >
                <Users className="w-3 h-3" />
                Add Staff
              </Button>
            </div>
            {staff.length === 0 ? (
              <div
                className="p-8 text-center"
                data-ocid="branch_detail.staff_table.empty_state"
              >
                <Users className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  No staff assigned to this branch.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm" style={{ minWidth: "480px" }}>
                  <thead>
                    <tr className="border-b border-border bg-muted/20">
                      {[
                        "Name",
                        "Role",
                        "Department",
                        "Performance",
                        "Status",
                      ].map((h) => (
                        <th
                          key={h}
                          className="px-4 py-2.5 text-left text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {staff.map((member, idx) => (
                      <tr
                        key={member.id}
                        className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors cursor-pointer"
                        data-ocid={`branch_detail.staff_table.item.${idx + 1}`}
                        onClick={() => navigate({ to: `/staff/${member.id}` })}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            navigate({ to: `/staff/${member.id}` });
                          }
                        }}
                        tabIndex={0}
                      >
                        <td className="px-4 py-2.5">
                          <div className="flex items-center gap-2.5">
                            <img
                              src={member.avatar}
                              alt={member.name}
                              className="w-6 h-6 rounded-full shrink-0"
                            />
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-foreground truncate">
                                {member.name}
                              </p>
                              <p className="text-[10px] text-muted-foreground truncate">
                                {member.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-2.5">
                          <span className="text-[11px] capitalize text-muted-foreground">
                            {member.role.replace("_", " ")}
                          </span>
                        </td>
                        <td className="px-4 py-2.5">
                          <span className="text-[11px] text-muted-foreground">
                            {member.department}
                          </span>
                        </td>
                        <td className="px-4 py-2.5">
                          <div className="flex items-center gap-1.5">
                            <div className="w-14 h-1.5 rounded-full bg-muted overflow-hidden">
                              <div
                                className={`h-full rounded-full ${member.performanceScore >= 85 ? "bg-green-500" : member.performanceScore >= 70 ? "bg-primary" : "bg-amber-500"}`}
                                style={{ width: `${member.performanceScore}%` }}
                              />
                            </div>
                            <span className="text-[10px] font-semibold text-foreground">
                              {member.performanceScore}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-2.5">
                          <StatusBadge status={member.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
