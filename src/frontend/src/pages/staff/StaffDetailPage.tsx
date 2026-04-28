import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import {
  Award,
  BookCheck,
  Building2,
  Calendar,
  ClipboardList,
  Clock,
  Download,
  Edit,
  IdCard,
  Mail,
  MapPin,
  Phone,
  Target,
  TrendingUp,
  UserPlus,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo } from "react";
import { Breadcrumb } from "../../components/shared/Breadcrumb";
import { PriorityBadge } from "../../components/shared/PriorityBadge";
import { StatusBadge } from "../../components/shared/StatusBadge";
import { getAttendanceByUser } from "../../data/mockAttendance";
import { mockTasks } from "../../data/mockTasks";
import { getUserById } from "../../data/mockUsers";
import type { UserStatus } from "../../types";

// ── Helpers ────────────────────────────────────────────────────────────────────

const STATUS_RING: Record<UserStatus, string> = {
  Active: "ring-green-500/40",
  Inactive: "ring-border",
  "On Leave": "ring-amber-400/40",
};

const STATUS_DOT: Record<UserStatus, string> = {
  Active: "bg-green-500",
  Inactive: "bg-muted-foreground",
  "On Leave": "bg-amber-500",
};

const TASK_STATUS_COLORS: Record<string, string> = {
  Done: "bg-green-50 text-green-700 border-green-200",
  "In Progress": "bg-primary/10 text-primary border-primary/20",
  Review: "bg-secondary/10 text-secondary border-secondary/20",
  Todo: "bg-muted text-muted-foreground border-border",
};

// ── Stat mini card ─────────────────────────────────────────────────────────────

function MiniStat({
  icon: Icon,
  label,
  value,
  sub,
  idx,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  sub?: string;
  idx: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.07 }}
      className="bg-card rounded-2xl border border-border p-4 shadow-card"
    >
      <div className="flex items-center gap-2 mb-1.5">
        <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Icon className="w-3.5 h-3.5 text-primary" />
        </span>
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
      <p className="text-lg font-display font-bold text-foreground leading-tight">
        {value}
      </p>
      {sub && <p className="text-[11px] text-muted-foreground mt-0.5">{sub}</p>}
    </motion.div>
  );
}

// ── Info row ───────────────────────────────────────────────────────────────────

function InfoRow({
  icon: Icon,
  label,
  value,
  mono = false,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-border last:border-0">
      <Icon className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="text-[11px] text-muted-foreground mb-0.5">{label}</p>
        <p
          className={`text-sm font-medium text-foreground break-words ${mono ? "font-mono text-xs" : ""}`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

// ── Progress bar ───────────────────────────────────────────────────────────────

function ProgressBar({
  label,
  value,
  color = "bg-primary",
}: {
  label: string;
  value: number;
  color?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="text-xs font-semibold text-foreground">{value}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────

export default function StaffDetailPage() {
  const { staffId } = useParams({ from: "/layout/staff/$staffId" });
  const navigate = useNavigate();

  // Use real mock data; fall back to a representative default
  const staffFromData = getUserById(staffId);
  const staff = staffFromData ?? {
    id: staffId,
    name: "Priya Sharma",
    email: "priya.sharma@fincore.in",
    phone: "+91 87654 32109",
    role: "finance_manager" as const,
    department: "Finance" as const,
    branchId: "hq",
    branchName: "Head Office",
    designation: "Finance Director",
    avatar: "https://placehold.co/80x80/0891b2/ffffff?text=PS",
    status: "Active" as const,
    joinDate: "2019-07-01",
    performanceScore: 92,
    salary: 180000,
  };

  // Tasks assigned to this staff member
  const assignedTasks = useMemo(
    () => mockTasks.filter((t) => t.assignedToId === staffId).slice(0, 5),
    [staffId],
  );

  // Attendance for this month
  const attendanceRecords = useMemo(() => {
    const all = getAttendanceByUser(staffId);
    return all.filter((a) => a.date.startsWith("2025-04"));
  }, [staffId]);

  const attendanceSummary = useMemo(() => {
    const present = attendanceRecords.filter(
      (a) =>
        a.status === "Present" ||
        a.status === "Late" ||
        a.status === "Half Day",
    ).length;
    const absent = attendanceRecords.filter(
      (a) => a.status === "Absent",
    ).length;
    const leaves = attendanceRecords.filter((a) => a.status === "Leave").length;
    const total = attendanceRecords.length;
    return {
      present,
      absent,
      leaves,
      rate: total > 0 ? Math.round((present / total) * 100) : 95,
    };
  }, [attendanceRecords]);

  // KPI data for this month
  const tasksDone = assignedTasks.filter((t) => t.status === "Done").length;
  const leadsAssigned = 12; // mock — would come from backend
  const targetProgress = staff.performanceScore;

  const miniStats = [
    {
      icon: Target,
      label: "Performance Score",
      value: `${staff.performanceScore}%`,
      sub: "Current month",
    },
    {
      icon: BookCheck,
      label: "Tasks Completed",
      value: tasksDone,
      sub: `of ${assignedTasks.length} assigned`,
    },
    {
      icon: TrendingUp,
      label: "Leads Assigned",
      value: leadsAssigned,
      sub: "This month",
    },
    {
      icon: Clock,
      label: "Attendance Rate",
      value: `${attendanceSummary.rate}%`,
      sub: `${attendanceSummary.leaves} leaves this month`,
    },
  ];

  const tenure = useMemo(() => {
    const start = new Date(staff.joinDate);
    const now = new Date();
    const months =
      (now.getFullYear() - start.getFullYear()) * 12 +
      (now.getMonth() - start.getMonth());
    if (months < 12) return `${months} months`;
    const years = Math.floor(months / 12);
    const rem = months % 12;
    return rem > 0 ? `${years}y ${rem}m` : `${years} years`;
  }, [staff.joinDate]);

  return (
    <div className="min-h-full bg-background" data-ocid="staff_detail.page">
      {/* ── Sticky header ──────────────────────────────────────────────────── */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <Breadcrumb
            items={[{ label: "Staff", href: "/staff" }, { label: staff.name }]}
            className="mb-2"
          />
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {/* Avatar + name */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div
                className={`relative shrink-0 ring-2 rounded-2xl ${STATUS_RING[staff.status]}`}
              >
                <img
                  src={staff.avatar}
                  alt={staff.name}
                  className="w-14 h-14 rounded-2xl object-cover"
                />
                <span
                  className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-card ${STATUS_DOT[staff.status]}`}
                />
              </div>
              <div className="min-w-0">
                <h1 className="text-xl font-display font-bold text-foreground truncate">
                  {staff.name}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {staff.designation} ·{" "}
                  <span className="capitalize">
                    {staff.role.replace(/_/g, " ")}
                  </span>
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 flex-wrap shrink-0">
              <Badge
                variant="outline"
                className={
                  staff.status === "Active"
                    ? "border-green-200 bg-green-50 text-green-700"
                    : staff.status === "On Leave"
                      ? "border-amber-200 bg-amber-50 text-amber-700"
                      : "border-border text-muted-foreground"
                }
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full mr-1.5 inline-block ${STATUS_DOT[staff.status]}`}
                />
                {staff.status}
              </Badge>
              <Button
                size="sm"
                variant="outline"
                className="gap-1.5 rounded-xl"
                onClick={() => navigate({ to: "/tasks/new" })}
                data-ocid="staff_detail.assign_task.button"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Assign Task</span>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="gap-1.5 rounded-xl"
                data-ocid="staff_detail.download_report.button"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Report</span>
              </Button>
              <Button
                size="sm"
                className="gap-1.5 rounded-xl"
                asChild
                data-ocid="staff_detail.edit_button"
              >
                <Link to="/staff/$staffId/edit" params={{ staffId: staff.id }}>
                  <Edit className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Edit Profile</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content ────────────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Mini stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {miniStats.map((s, i) => (
            <MiniStat key={s.label} {...s} idx={i} />
          ))}
        </div>

        {/* Main two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* ── Left: Profile info ────────────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
            >
              <Card data-ocid="staff_detail.personal_info.card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <IdCard className="w-4 h-4 text-primary" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <InfoRow icon={Mail} label="Email" value={staff.email} />
                  <InfoRow icon={Phone} label="Phone" value={staff.phone} />
                  <InfoRow
                    icon={Building2}
                    label="Branch"
                    value={staff.branchName}
                  />
                  <InfoRow
                    icon={IdCard}
                    label="Employee ID"
                    value={`EMP-${staff.id.toUpperCase()}`}
                    mono
                  />
                  <InfoRow
                    icon={Calendar}
                    label="Start Date"
                    value={new Date(staff.joinDate).toLocaleDateString(
                      "en-IN",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      },
                    )}
                  />
                  <InfoRow icon={Clock} label="Tenure" value={tenure} />
                  <InfoRow
                    icon={MapPin}
                    label="Address"
                    value="12, Linking Road, Bandra West, Mumbai 400050"
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* Attendance Summary */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.22 }}
            >
              <Card data-ocid="staff_detail.attendance.card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Attendance — April 2025
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ProgressBar
                    label="Attendance Rate"
                    value={attendanceSummary.rate}
                    color={
                      attendanceSummary.rate >= 90
                        ? "bg-green-500"
                        : attendanceSummary.rate >= 75
                          ? "bg-primary"
                          : "bg-amber-500"
                    }
                  />
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      {
                        label: "Present",
                        value: attendanceSummary.present,
                        color: "text-green-600",
                      },
                      {
                        label: "Absent",
                        value: attendanceSummary.absent,
                        color: "text-destructive",
                      },
                      {
                        label: "On Leave",
                        value: attendanceSummary.leaves,
                        color: "text-amber-600",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="text-center p-2 rounded-xl bg-muted/40"
                      >
                        <p className={`text-base font-bold ${item.color}`}>
                          {item.value}
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* ── Right: Performance + Tasks ───────────────────────────────── */}
          <div className="lg:col-span-3 space-y-6">
            {/* Performance */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.18 }}
            >
              <Card data-ocid="staff_detail.performance.card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    Performance Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ProgressBar
                    label="Overall Performance Score"
                    value={staff.performanceScore}
                    color={
                      staff.performanceScore >= 90
                        ? "bg-green-500"
                        : staff.performanceScore >= 75
                          ? "bg-primary"
                          : "bg-amber-500"
                    }
                  />
                  <ProgressBar
                    label="Target Achievement"
                    value={targetProgress}
                    color="bg-secondary"
                  />
                  <ProgressBar
                    label="Task Completion Rate"
                    value={
                      assignedTasks.length > 0
                        ? Math.round((tasksDone / assignedTasks.length) * 100)
                        : 0
                    }
                  />
                  <Separator />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[11px] text-muted-foreground">
                        Monthly Salary
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        ₹{(staff.salary / 1000).toFixed(0)}K
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground">
                        Department
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        {staff.department}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Assigned Tasks */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
            >
              <Card data-ocid="staff_detail.tasks.card">
                <CardHeader className="pb-2 flex-row items-center justify-between">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    <ClipboardList className="w-4 h-4 text-primary" />
                    Assigned Tasks
                  </CardTitle>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-xs text-muted-foreground h-7"
                  >
                    <Link to="/tasks">View all</Link>
                  </Button>
                </CardHeader>
                <CardContent>
                  {assignedTasks.length === 0 ? (
                    <div
                      className="py-8 text-center"
                      data-ocid="staff_detail.tasks.empty_state"
                    >
                      <ClipboardList className="w-8 h-8 text-muted-foreground/40 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        No tasks assigned
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {assignedTasks.map((task, idx) => (
                        <div
                          key={task.id}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/40 transition-colors group"
                          data-ocid={`staff_detail.tasks.item.${idx + 1}`}
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-foreground truncate group-hover:text-primary transition-colors">
                              {task.title}
                            </p>
                            <p className="text-[10px] text-muted-foreground mt-0.5">
                              Due:{" "}
                              {new Date(task.dueDate).toLocaleDateString(
                                "en-IN",
                              )}
                            </p>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <PriorityBadge priority={task.priority} />
                            <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-lg border ${TASK_STATUS_COLORS[task.status] ?? "bg-muted text-muted-foreground border-border"}`}
                            >
                              {task.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
