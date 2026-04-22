import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Activity,
  AlertCircle,
  CalendarDays,
  CheckCircle2,
  Clock,
  RefreshCw,
  Shield,
  UserCheck,
  UserX,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "sonner";
import { ChartCard } from "../components/shared/ChartCard";
import { PageHeader } from "../components/shared/PageHeader";
import { StatCard } from "../components/shared/StatCard";
import { StatusBadge } from "../components/shared/StatusBadge";
import { mockAttendance } from "../data/mockAttendance";
import { mockUsers } from "../data/mockUsers";

// ─── Types ────────────────────────────────────────────────────────────────────
interface BiometricDevice {
  id: string;
  location: string;
  lastSync: string;
  status: "Online" | "Offline" | "Pending";
  recordsSynced: number;
}

// ─── Mock data ────────────────────────────────────────────────────────────────
const biometricDevices: BiometricDevice[] = [
  {
    id: "BIO-001",
    location: "Mumbai Central",
    lastSync: "2025-04-22 08:45",
    status: "Online",
    recordsSynced: 142,
  },
  {
    id: "BIO-002",
    location: "Delhi NCR",
    lastSync: "2025-04-22 08:52",
    status: "Online",
    recordsSynced: 187,
  },
  {
    id: "BIO-003",
    location: "Bengaluru East",
    lastSync: "2025-04-22 09:01",
    status: "Online",
    recordsSynced: 128,
  },
  {
    id: "BIO-004",
    location: "Hyderabad West",
    lastSync: "2025-04-22 07:30",
    status: "Offline",
    recordsSynced: 0,
  },
  {
    id: "BIO-005",
    location: "Chennai South",
    lastSync: "2025-04-22 08:58",
    status: "Online",
    recordsSynced: 113,
  },
];

const BRANCHES = [
  "All Branches",
  "Mumbai Central",
  "Delhi NCR",
  "Bengaluru East",
  "Hyderabad West",
  "Chennai South",
];
const STATUSES = [
  "All Statuses",
  "Present",
  "Absent",
  "Late",
  "Half Day",
  "Leave",
];

// Map branchId to name
const branchMap: Record<string, string> = {
  b1: "Mumbai Central",
  b2: "Delhi NCR",
  b3: "Bengaluru East",
  b4: "Hyderabad West",
  b5: "Chennai South",
  b7: "Kolkata North",
};

// ─── Calendar Heatmap ─────────────────────────────────────────────────────────
function CalendarHeatmap() {
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);

  const months = ["2025-02", "2025-03", "2025-04"];
  const monthNames = {
    "2025-02": "February 2025",
    "2025-03": "March 2025",
    "2025-04": "April 2025",
  };

  function getDayColor(date: string): string {
    const records = mockAttendance.filter((a) => a.date === date);
    if (records.length === 0) return "bg-muted";
    const total = records.length;
    const present = records.filter(
      (r) => r.status === "Present" || r.status === "Late",
    ).length;
    const ratio = present / total;
    if (ratio >= 0.95) return "bg-green-500";
    if (ratio >= 0.8) return "bg-green-300";
    if (ratio >= 0.6) return "bg-yellow-400";
    return "bg-red-400";
  }

  function getAbsenteesForDate(date: string) {
    return mockAttendance
      .filter(
        (a) =>
          a.date === date && (a.status === "Absent" || a.status === "Late"),
      )
      .map((a) => ({ name: a.userName, status: a.status }));
  }

  return (
    <div className="space-y-6">
      {months.map((month) => {
        const daysInMonth = month === "2025-02" ? 28 : 30;
        const firstDayOfWeek = new Date(`${month}-01`).getDay();
        // Build offset slots with stable keys, then actual days
        const offsetSlots = Array.from(
          { length: firstDayOfWeek },
          (_, idx) => ({
            key: `${month}-pad-${idx}`,
            date: null as string | null,
          }),
        );
        const daySlots = Array.from({ length: daysInMonth }, (_, idx) => {
          const d = idx + 1;
          const dateStr = `${month}-${String(d).padStart(2, "0")}`;
          return { key: dateStr, date: dateStr };
        });
        const allSlots = [...offsetSlots, ...daySlots];

        return (
          <div key={month}>
            <p className="text-xs font-semibold text-muted-foreground mb-2">
              {monthNames[month as keyof typeof monthNames]}
            </p>
            <div className="grid grid-cols-7 gap-1">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                <div
                  key={d}
                  className="text-[10px] text-muted-foreground text-center pb-1"
                >
                  {d}
                </div>
              ))}
              {allSlots.map(({ key, date }) => {
                if (!date) return <div key={key} />;
                const dayOfWeek = new Date(date).getDay();
                const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
                const color = isWeekend ? "bg-muted/40" : getDayColor(date);
                const absentees =
                  hoveredDate === date ? getAbsenteesForDate(date) : [];

                return (
                  <div key={date} className="relative group">
                    <button
                      type="button"
                      className={`w-full aspect-square rounded-md ${color} transition-transform hover:scale-110 cursor-pointer`}
                      onMouseEnter={() => setHoveredDate(date)}
                      onMouseLeave={() => setHoveredDate(null)}
                      aria-label={date}
                      data-ocid={`attendance.heatmap.day.${date}`}
                    />
                    {hoveredDate === date && absentees.length > 0 && (
                      <div className="absolute z-50 bottom-full mb-1 left-1/2 -translate-x-1/2 bg-card border border-border rounded-xl shadow-elevated p-2 min-w-40 pointer-events-none">
                        <p className="text-[10px] font-bold text-foreground mb-1">
                          {date}
                        </p>
                        {absentees.map((a) => (
                          <div
                            key={a.name}
                            className="flex items-center gap-1.5 py-0.5"
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${a.status === "Absent" ? "bg-red-500" : "bg-amber-500"}`}
                            />
                            <span className="text-[10px] text-foreground">
                              {a.name}
                            </span>
                            <span className="text-[10px] text-muted-foreground ml-auto">
                              {a.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 pt-2 border-t border-border">
        <span className="text-xs text-muted-foreground font-medium">
          Legend:
        </span>
        {[
          { color: "bg-green-500", label: "Full attendance (≥95%)" },
          { color: "bg-green-300", label: "Good (80–94%)" },
          { color: "bg-yellow-400", label: "Moderate (60–79%)" },
          { color: "bg-red-400", label: "Low (<60%)" },
          { color: "bg-muted", label: "No data / Weekend" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <div className={`w-3 h-3 rounded-sm ${item.color}`} />
            <span className="text-[10px] text-muted-foreground">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function AttendancePage() {
  const [activeTab, setActiveTab] = useState("daily");
  const [selectedDate, setSelectedDate] = useState("2025-04-22");
  const [selectedMonth, setSelectedMonth] = useState("2025-04");
  const [branchFilter, setBranchFilter] = useState("All Branches");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [syncing, setSyncing] = useState(false);
  const [manualEntryOpen, setManualEntryOpen] = useState(false);

  // Daily filtered records
  const dailyRecords = mockAttendance
    .filter((a) => a.date === selectedDate)
    .filter(
      (a) =>
        branchFilter === "All Branches" ||
        branchMap[a.branchId] === branchFilter,
    )
    .filter(
      (a) => statusFilter === "All Statuses" || a.status === statusFilter,
    );

  // Late entries (check-in after 09:30)
  const lateEntries = mockAttendance
    .filter((a) => a.date === selectedDate && a.status === "Late")
    .map((a) => ({
      ...a,
      minutesLate: 45,
    }));

  // Monthly summary per user
  const monthlyRecords = mockAttendance.filter((a) =>
    a.date.startsWith(selectedMonth),
  );
  const uniqueUsers = [...new Set(monthlyRecords.map((a) => a.userId))];
  const monthlySummary = uniqueUsers.map((uid) => {
    const records = monthlyRecords.filter((a) => a.userId === uid);
    const present = records.filter(
      (a) => a.status === "Present" || a.status === "Late",
    ).length;
    const absent = records.filter((a) => a.status === "Absent").length;
    const late = records.filter((a) => a.status === "Late").length;
    const totalHours = records.reduce((s, r) => s + r.workHours, 0);
    const overtime = records.reduce((s, r) => s + r.overtime, 0);
    const name = records[0]?.userName ?? "Unknown";
    const total = records.length;
    return {
      uid,
      name,
      present,
      absent,
      late,
      totalHours: totalHours.toFixed(1),
      overtime: overtime.toFixed(1),
      pct: total > 0 ? Math.round((present / total) * 100) : 0,
    };
  });

  // Dept summary chart data
  const deptData = [
    { dept: "Sales", present: 18, absent: 2, late: 3 },
    { dept: "Finance", present: 12, absent: 1, late: 2 },
    { dept: "Operations", present: 22, absent: 3, late: 4 },
    { dept: "HR", present: 8, absent: 0, late: 1 },
    { dept: "Marketing", present: 10, absent: 1, late: 2 },
    { dept: "IT", present: 6, absent: 1, late: 0 },
  ];

  // Today stats
  const todayAll = mockAttendance.filter((a) => a.date === "2025-04-22");
  const presentToday = todayAll.filter((a) => a.status === "Present").length;
  const absentToday = todayAll.filter((a) => a.status === "Absent").length;
  const lateToday = todayAll.filter((a) => a.status === "Late").length;
  const onLeaveToday = todayAll.filter(
    (a) => a.status === "Leave" || a.status === "Half Day",
  ).length;
  const overtimeHours = todayAll.reduce((s, a) => s + a.overtime, 0);

  function handleSync() {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      toast.success("Biometric sync complete", {
        description: "570 records synced from 4 devices.",
      });
    }, 2200);
  }

  return (
    <div>
      <PageHeader
        title="Attendance Management"
        subtitle="Daily logs, monthly summaries, calendar heatmap, and biometric sync"
        breadcrumbs={[{ label: "Home" }, { label: "Attendance" }]}
        actions={
          <Button
            onClick={() => setManualEntryOpen(true)}
            data-ocid="attendance.manual_entry_open_modal_button"
          >
            <CalendarDays className="w-4 h-4 mr-2" />
            Manual Entry
          </Button>
        }
        data-ocid="attendance.header"
      />

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-4 sm:mb-6">
        {[
          {
            title: "Present Today",
            value: presentToday + 68,
            icon: UserCheck,
            iconColor: "text-green-600",
          },
          {
            title: "Absent Today",
            value: absentToday + 6,
            icon: UserX,
            iconColor: "text-red-500",
          },
          {
            title: "Late Today",
            value: lateToday + 9,
            icon: Clock,
            iconColor: "text-amber-600",
          },
          {
            title: "On Leave",
            value: onLeaveToday + 4,
            icon: Users,
            iconColor: "text-purple-600",
          },
          {
            title: "Overtime Hours",
            value: `${(overtimeHours + 31.5).toFixed(0)}h`,
            icon: Activity,
            iconColor: "text-secondary",
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
              icon={s.icon}
              iconColor={s.iconColor}
              data-ocid={`attendance.stat.${i + 1}`}
            />
          </motion.div>
        ))}
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList
          className="mb-4 flex-wrap overflow-x-auto"
          data-ocid="attendance.tabs"
        >
          <TabsTrigger value="daily" data-ocid="attendance.tab.daily">
            Daily Log
          </TabsTrigger>
          <TabsTrigger value="monthly" data-ocid="attendance.tab.monthly">
            Monthly Summary
          </TabsTrigger>
          <TabsTrigger value="heatmap" data-ocid="attendance.tab.heatmap">
            Calendar Heatmap
          </TabsTrigger>
          <TabsTrigger value="biometric" data-ocid="attendance.tab.biometric">
            Biometric Sync
          </TabsTrigger>
        </TabsList>

        {/* ── Daily Log ── */}
        <TabsContent value="daily" className="space-y-4">
          {/* Filters */}
          <div className="bg-card border border-border rounded-2xl shadow-card p-3 sm:p-4 flex flex-wrap items-end gap-2 sm:gap-3">
            <div className="flex flex-col gap-1">
              <Label className="text-xs text-muted-foreground">Date</Label>
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="h-8 text-xs w-40"
                data-ocid="attendance.date_input"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label className="text-xs text-muted-foreground">Branch</Label>
              <Select value={branchFilter} onValueChange={setBranchFilter}>
                <SelectTrigger
                  className="h-8 text-xs w-44"
                  data-ocid="attendance.branch_select"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {BRANCHES.map((b) => (
                    <SelectItem key={b} value={b}>
                      {b}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1">
              <Label className="text-xs text-muted-foreground">Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger
                  className="h-8 text-xs w-40"
                  data-ocid="attendance.status_select"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {STATUSES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <span className="text-xs text-muted-foreground ml-auto self-end pb-1">
              {dailyRecords.length} records
            </span>
          </div>

          {/* Table */}
          <div
            className="bg-card border border-border rounded-2xl shadow-card overflow-hidden"
            data-ocid="attendance.daily_table"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[640px]">
                <thead className="bg-muted/30 border-b border-border">
                  <tr>
                    {[
                      "Staff Name",
                      "Branch",
                      "Check In",
                      "Check Out",
                      "Hours",
                      "OT",
                      "Status",
                      "Actions",
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
                  {dailyRecords.length === 0 ? (
                    <tr>
                      <td
                        colSpan={8}
                        className="px-4 py-8 text-center text-sm text-muted-foreground"
                        data-ocid="attendance.daily_table.empty_state"
                      >
                        No records for selected date / filters
                      </td>
                    </tr>
                  ) : (
                    dailyRecords.map((a, i) => {
                      const user = mockUsers.find((u) => u.id === a.userId);
                      return (
                        <tr
                          key={a.id}
                          className="hover:bg-muted/20 transition-smooth"
                          data-ocid={`attendance.daily_table.item.${i + 1}`}
                        >
                          <td className="px-4 py-2.5">
                            <div className="flex items-center gap-2">
                              {user && (
                                <img
                                  src={user.avatar}
                                  alt={user.name}
                                  className="w-6 h-6 rounded-full"
                                />
                              )}
                              <span className="text-xs font-semibold text-foreground">
                                {a.userName}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2.5 text-xs text-muted-foreground">
                            {branchMap[a.branchId] ?? a.branchId}
                          </td>
                          <td className="px-4 py-2.5 text-xs font-mono text-foreground">
                            {a.checkIn ?? "—"}
                          </td>
                          <td className="px-4 py-2.5 text-xs font-mono text-foreground">
                            {a.checkOut ?? "—"}
                          </td>
                          <td className="px-4 py-2.5 text-xs font-semibold text-foreground text-right">
                            {a.workHours}h
                          </td>
                          <td className="px-4 py-2.5 text-xs font-semibold text-right">
                            <span
                              className={
                                a.overtime > 0
                                  ? "text-amber-600"
                                  : "text-muted-foreground"
                              }
                            >
                              {a.overtime > 0 ? `+${a.overtime}h` : "—"}
                            </span>
                          </td>
                          <td className="px-4 py-2.5">
                            <StatusBadge status={a.status} />
                          </td>
                          <td className="px-4 py-2.5">
                            <button
                              type="button"
                              className="text-xs text-primary hover:underline"
                              data-ocid={`attendance.daily_table.edit_button.${i + 1}`}
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Late Entry Tracker */}
          {lateEntries.length > 0 && (
            <div
              className="bg-card border border-amber-200 dark:border-amber-900/40 rounded-2xl shadow-card p-4"
              data-ocid="attendance.late_tracker"
            >
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <h3 className="text-sm font-display font-semibold text-foreground">
                  Late Entry Tracker
                </h3>
                <span className="text-xs text-muted-foreground">
                  — checked in after 09:30 AM
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {lateEntries.map((e, i) => (
                  <div
                    key={e.id}
                    className="flex items-center gap-3 bg-amber-50 dark:bg-amber-900/10 rounded-xl px-3 py-2"
                    data-ocid={`attendance.late_tracker.item.${i + 1}`}
                  >
                    <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-foreground truncate">
                        {e.userName}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {branchMap[e.branchId]}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs font-mono font-bold text-amber-700">
                        {e.checkIn}
                      </p>
                      <p className="text-[10px] text-amber-600">
                        +{e.minutesLate} min late
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </TabsContent>

        {/* ── Monthly Summary ── */}
        <TabsContent value="monthly" className="space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <Label className="text-xs text-muted-foreground">Month:</Label>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="h-8 px-2 text-xs border border-input rounded-lg bg-background text-foreground"
              data-ocid="attendance.month_select"
            >
              {["2025-02", "2025-03", "2025-04"].map((m) => (
                <option key={m} value={m}>
                  {new Date(`${m}-01`).toLocaleString("en-IN", {
                    month: "long",
                    year: "numeric",
                  })}
                </option>
              ))}
            </select>
          </div>

          <div
            className="bg-card border border-border rounded-2xl shadow-card overflow-hidden"
            data-ocid="attendance.monthly_table"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[560px]">
                <thead className="bg-muted/30 border-b border-border">
                  <tr>
                    {[
                      "Staff Name",
                      "Present",
                      "Absent",
                      "Late",
                      "Total Hours",
                      "Overtime",
                      "Attendance %",
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
                  {monthlySummary.map((s, i) => (
                    <tr
                      key={s.uid}
                      className="hover:bg-muted/20 transition-smooth"
                      data-ocid={`attendance.monthly_table.item.${i + 1}`}
                    >
                      <td className="px-4 py-2.5 text-xs font-semibold text-foreground">
                        {s.name}
                      </td>
                      <td className="px-4 py-2.5 text-xs text-green-600 font-medium">
                        {s.present}
                      </td>
                      <td className="px-4 py-2.5 text-xs text-red-500 font-medium">
                        {s.absent}
                      </td>
                      <td className="px-4 py-2.5 text-xs text-amber-600 font-medium">
                        {s.late}
                      </td>
                      <td className="px-4 py-2.5 text-xs text-foreground font-mono">
                        {s.totalHours}h
                      </td>
                      <td className="px-4 py-2.5 text-xs text-foreground font-mono">
                        {s.overtime}h
                      </td>
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden min-w-16 max-w-24">
                            <div
                              className={`h-full rounded-full ${s.pct >= 90 ? "bg-green-500" : s.pct >= 75 ? "bg-amber-500" : "bg-red-500"}`}
                              style={{ width: `${s.pct}%` }}
                            />
                          </div>
                          <span
                            className={`text-xs font-bold w-8 text-right ${s.pct >= 90 ? "text-green-600" : s.pct >= 75 ? "text-amber-600" : "text-red-500"}`}
                          >
                            {s.pct}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <ChartCard
            title="Department-wise Attendance"
            subtitle={`Summary for ${selectedMonth}`}
            data-ocid="attendance.dept_chart"
          >
            <ResponsiveContainer width="100%" height={220}>
              <BarChart
                data={deptData}
                margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="oklch(0.91 0.01 0)"
                />
                <XAxis
                  dataKey="dept"
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
                  dataKey="present"
                  name="Present"
                  fill="oklch(0.55 0.15 155)"
                  radius={[3, 3, 0, 0]}
                  maxBarSize={20}
                />
                <Bar
                  dataKey="late"
                  name="Late"
                  fill="oklch(0.68 0.18 75)"
                  radius={[3, 3, 0, 0]}
                  maxBarSize={20}
                />
                <Bar
                  dataKey="absent"
                  name="Absent"
                  fill="oklch(0.63 0.24 17)"
                  radius={[3, 3, 0, 0]}
                  maxBarSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </TabsContent>

        {/* ── Calendar Heatmap ── */}
        <TabsContent value="heatmap">
          <div
            className="bg-card border border-border rounded-2xl shadow-card p-6"
            data-ocid="attendance.heatmap"
          >
            <div className="flex items-center gap-2 mb-5">
              <CalendarDays className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-display font-semibold text-foreground">
                3-Month Attendance Heatmap
              </h3>
              <span className="text-xs text-muted-foreground">
                — hover a day to see absences
              </span>
            </div>
            <CalendarHeatmap />
          </div>
        </TabsContent>

        {/* ── Biometric Sync ── */}
        <TabsContent value="biometric" className="space-y-4">
          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: CheckCircle2,
                label: "Last Sync",
                value: "2 hours ago",
                sub: "All devices checked",
                color: "text-green-600",
                bg: "bg-green-50 dark:bg-green-900/10",
              },
              {
                icon: Shield,
                label: "Devices Online",
                value: "4 / 5",
                sub: "1 device offline",
                color: "text-primary",
                bg: "bg-primary/5",
              },
              {
                icon: AlertCircle,
                label: "Failed Records",
                value: "2",
                sub: "Needs attention",
                color: "text-red-500",
                bg: "bg-red-50 dark:bg-red-900/10",
              },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`rounded-2xl border border-border shadow-card p-4 flex items-center gap-4 ${s.bg}`}
                data-ocid={`attendance.biometric_stat.${i + 1}`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center bg-card shadow-card ${s.color}`}
                >
                  <s.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="text-lg font-display font-bold text-foreground">
                    {s.value}
                  </p>
                  <p className="text-[10px] text-muted-foreground">{s.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sync Log Table */}
          <div
            className="bg-card border border-border rounded-2xl shadow-card overflow-hidden"
            data-ocid="attendance.biometric_table"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-border">
              <h3 className="text-sm font-display font-semibold text-foreground">
                Device Sync Log
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSync}
                disabled={syncing}
                data-ocid="attendance.sync_button"
              >
                <RefreshCw
                  className={`w-3.5 h-3.5 mr-2 ${syncing ? "animate-spin" : ""}`}
                />
                {syncing ? "Syncing…" : "Trigger Manual Sync"}
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[480px]">
                <thead className="bg-muted/30 border-b border-border">
                  <tr>
                    {[
                      "Device ID",
                      "Location",
                      "Last Sync Time",
                      "Status",
                      "Records Synced",
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
                  {biometricDevices.map((d, i) => (
                    <tr
                      key={d.id}
                      className="hover:bg-muted/20 transition-smooth"
                      data-ocid={`attendance.biometric_table.item.${i + 1}`}
                    >
                      <td className="px-4 py-2.5 text-xs font-mono font-semibold text-primary">
                        {d.id}
                      </td>
                      <td className="px-4 py-2.5 text-xs text-foreground">
                        {d.location}
                      </td>
                      <td className="px-4 py-2.5 text-xs text-muted-foreground font-mono">
                        {d.lastSync}
                      </td>
                      <td className="px-4 py-2.5">
                        <span
                          className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-lg ${
                            d.status === "Online"
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : d.status === "Offline"
                                ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                                : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${d.status === "Online" ? "bg-green-500" : d.status === "Offline" ? "bg-red-500" : "bg-amber-500"}`}
                          />
                          {d.status}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-xs font-semibold text-foreground text-right">
                        {d.recordsSynced.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Manual Entry Modal */}
      <Dialog open={manualEntryOpen} onOpenChange={setManualEntryOpen}>
        <DialogContent
          className="sm:max-w-md rounded-2xl"
          data-ocid="attendance.manual_entry_dialog"
        >
          <DialogHeader>
            <DialogTitle className="font-display">
              Manual Attendance Entry
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-1.5">
              <Label className="text-xs">Staff Member</Label>
              <Select data-ocid="attendance.manual_staff_select">
                <SelectTrigger className="text-sm">
                  <SelectValue placeholder="Select staff member" />
                </SelectTrigger>
                <SelectContent>
                  {mockUsers
                    .filter((u) => u.role === "staff")
                    .slice(0, 10)
                    .map((u) => (
                      <SelectItem key={u.id} value={u.id}>
                        {u.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label className="text-xs">Date</Label>
                <Input
                  type="date"
                  defaultValue="2025-04-22"
                  className="text-sm"
                  data-ocid="attendance.manual_date_input"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Status</Label>
                <Select defaultValue="Present">
                  <SelectTrigger
                    className="text-sm"
                    data-ocid="attendance.manual_status_select"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {["Present", "Absent", "Late", "Half Day", "Leave"].map(
                      (s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ),
                    )}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Check In</Label>
                <Input
                  type="time"
                  defaultValue="09:00"
                  className="text-sm"
                  data-ocid="attendance.manual_checkin_input"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Check Out</Label>
                <Input
                  type="time"
                  defaultValue="18:00"
                  className="text-sm"
                  data-ocid="attendance.manual_checkout_input"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Notes</Label>
              <Input
                placeholder="Optional remarks…"
                className="text-sm"
                data-ocid="attendance.manual_notes_input"
              />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button
                variant="outline"
                onClick={() => setManualEntryOpen(false)}
                data-ocid="attendance.manual_entry_cancel_button"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  setManualEntryOpen(false);
                  toast.success("Attendance entry saved successfully.");
                }}
                data-ocid="attendance.manual_entry_submit_button"
              >
                Save Entry
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
