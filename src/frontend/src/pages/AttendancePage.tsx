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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "@tanstack/react-router";
import {
  Activity,
  AlertCircle,
  CalendarDays,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  RefreshCw,
  Search,
  Shield,
  UserCheck,
  UserX,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
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
import { FilterPanel } from "../components/shared/FilterPanel";
import type {
  FilterField,
  FilterValues,
} from "../components/shared/FilterPanel";
import { PageHeader } from "../components/shared/PageHeader";
import { StatCard } from "../components/shared/StatCard";
import { StatusBadge } from "../components/shared/StatusBadge";
import { mockAttendance } from "../data/mockAttendance";
import { mockUsers } from "../data/mockUsers";
import type { AttendanceRecord } from "../types";
import { exportToCSV } from "../utils/csvExport";

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
const STATUSES_LIST = [
  "All Statuses",
  "Present",
  "Absent",
  "Late",
  "Half Day",
  "Leave",
];

const branchMap: Record<string, string> = {
  b1: "Mumbai Central",
  b2: "Delhi NCR",
  b3: "Bengaluru East",
  b4: "Hyderabad West",
  b5: "Chennai South",
  b7: "Kolkata North",
};

// ─── Quick date preset filter ─────────────────────────────────────────────────
type DatePreset = "today" | "week" | "month" | "custom";

const TODAY = "2025-04-22";

function getPresetRange(preset: DatePreset): { start: string; end: string } {
  if (preset === "today") return { start: TODAY, end: TODAY };
  if (preset === "week") return { start: "2025-04-16", end: TODAY };
  if (preset === "month") return { start: "2025-04-01", end: TODAY };
  return { start: "", end: "" };
}

// ─── Filter fields (for advanced FilterPanel) ─────────────────────────────────
const attendanceFilterFields: FilterField[] = [
  {
    key: "employee",
    label: "Employee Name",
    type: "text",
    placeholder: "Search employee…",
  },
  {
    key: "branch",
    label: "Branch",
    type: "select",
    options: BRANCHES.slice(1).map((b) => ({ label: b, value: b })),
  },
  {
    key: "status",
    label: "Status",
    type: "select",
    options: STATUSES_LIST.slice(1).map((s) => ({ label: s, value: s })),
  },
  { key: "daterange", label: "Date Range", type: "daterange" },
];

// ─── Quick Filter Bar ─────────────────────────────────────────────────────────
function QuickFilterBar({
  preset,
  onPreset,
  startDate,
  endDate,
  onStartDate,
  onEndDate,
}: {
  preset: DatePreset;
  onPreset: (p: DatePreset) => void;
  startDate: string;
  endDate: string;
  onStartDate: (v: string) => void;
  onEndDate: (v: string) => void;
}) {
  const presets: { label: string; value: DatePreset }[] = [
    { label: "Today", value: "today" },
    { label: "This Week", value: "week" },
    { label: "This Month", value: "month" },
    { label: "Custom", value: "custom" },
  ];
  return (
    <div className="flex flex-wrap items-center gap-2">
      {presets.map((p) => (
        <button
          key={p.value}
          type="button"
          onClick={() => onPreset(p.value)}
          data-ocid={`attendance.quick_filter.${p.value}`}
          className={`h-7 px-3 text-xs font-medium rounded-lg border transition-smooth ${
            preset === p.value
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
          }`}
        >
          {p.label}
        </button>
      ))}
      {preset === "custom" && (
        <div className="flex items-center gap-1.5 flex-wrap">
          <Input
            type="date"
            value={startDate}
            onChange={(e) => onStartDate(e.target.value)}
            className="h-7 text-xs w-[130px] rounded-lg"
            data-ocid="attendance.quick_filter.custom_start_input"
          />
          <span className="text-xs text-muted-foreground">–</span>
          <Input
            type="date"
            value={endDate}
            onChange={(e) => onEndDate(e.target.value)}
            className="h-7 text-xs w-[130px] rounded-lg"
            data-ocid="attendance.quick_filter.custom_end_input"
          />
        </div>
      )}
    </div>
  );
}

// ─── Inline Filter Row ────────────────────────────────────────────────────────
function AttendanceInlineFilters({
  startDate,
  endDate,
  branch,
  status,
  employeeSearch,
  onStartDate,
  onEndDate,
  onBranch,
  onStatus,
  onEmployeeSearch,
  onExport,
}: {
  startDate: string;
  endDate: string;
  branch: string;
  status: string;
  employeeSearch: string;
  onStartDate: (v: string) => void;
  onEndDate: (v: string) => void;
  onBranch: (v: string) => void;
  onStatus: (v: string) => void;
  onEmployeeSearch: (v: string) => void;
  onExport: () => void;
}) {
  return (
    <div
      className="bg-card border border-border rounded-2xl shadow-card px-3 sm:px-4 py-2.5 flex flex-wrap items-end gap-2"
      data-ocid="attendance.inline_filters"
    >
      <div className="flex flex-col gap-1 flex-1 min-w-[130px] max-w-xs">
        <Label className="text-[10px] text-muted-foreground">Employee</Label>
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground pointer-events-none" />
          <Input
            value={employeeSearch}
            onChange={(e) => onEmployeeSearch(e.target.value)}
            placeholder="Search name…"
            className="h-8 pl-7 text-xs rounded-xl"
            data-ocid="attendance.filter.employee_search_input"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <Label className="text-[10px] text-muted-foreground">From</Label>
        <Input
          type="date"
          value={startDate}
          onChange={(e) => onStartDate(e.target.value)}
          className="h-8 text-xs w-[130px] sm:w-36 rounded-xl"
          data-ocid="attendance.filter.start_date_input"
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label className="text-[10px] text-muted-foreground">To</Label>
        <Input
          type="date"
          value={endDate}
          onChange={(e) => onEndDate(e.target.value)}
          className="h-8 text-xs w-[130px] sm:w-36 rounded-xl"
          data-ocid="attendance.filter.end_date_input"
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label className="text-[10px] text-muted-foreground">Branch</Label>
        <Select value={branch} onValueChange={onBranch}>
          <SelectTrigger
            className="h-8 text-xs w-[130px] sm:w-40 rounded-xl"
            data-ocid="attendance.filter.branch_select"
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
        <Label className="text-[10px] text-muted-foreground">Status</Label>
        <Select value={status} onValueChange={onStatus}>
          <SelectTrigger
            className="h-8 text-xs w-[120px] sm:w-36 rounded-xl"
            data-ocid="attendance.filter.status_select"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {STATUSES_LIST.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="h-8 rounded-xl gap-1.5 text-xs ml-auto self-end"
        onClick={onExport}
        data-ocid="attendance.filter.export_csv_button"
      >
        <Download className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Export CSV</span>
        <span className="sm:hidden">CSV</span>
      </Button>
    </div>
  );
}

// ─── Staff Attendance Detail Sheet ───────────────────────────────────────────
function AttendanceDetailSheet({
  record,
  open,
  onClose,
}: {
  record: AttendanceRecord | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!record) return null;
  const user = mockUsers.find((u) => u.id === record.userId);
  const branch = branchMap[record.branchId] ?? record.branchId;

  return (
    <Sheet open={open} onOpenChange={(o) => !o && onClose()}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md"
        data-ocid="attendance.detail_sheet"
      >
        <SheetHeader className="pb-4 border-b border-border">
          <SheetTitle className="font-display text-base">
            Attendance Detail
          </SheetTitle>
        </SheetHeader>
        <div className="pt-5 space-y-5">
          {/* Staff info */}
          <div className="flex items-center gap-3">
            {user ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-12 h-12 rounded-full ring-2 ring-border"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-sm font-bold">
                {record.userName.slice(0, 2)}
              </div>
            )}
            <div>
              <p className="font-display font-semibold text-sm text-foreground">
                {record.userName}
              </p>
              <p className="text-xs text-muted-foreground">
                {user?.designation ?? "Staff"}
              </p>
              <p className="text-xs text-muted-foreground">{branch}</p>
            </div>
          </div>

          {/* Date & status */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Date", value: record.date },
              {
                label: "Status",
                value: <StatusBadge status={record.status} />,
              },
              { label: "Check In", value: record.checkIn ?? "—" },
              { label: "Check Out", value: record.checkOut ?? "—" },
              { label: "Work Hours", value: `${record.workHours}h` },
              {
                label: "Overtime",
                value: record.overtime > 0 ? `+${record.overtime}h` : "—",
              },
            ].map((item) => (
              <div key={item.label} className="bg-muted/30 rounded-xl p-3">
                <p className="text-[10px] text-muted-foreground mb-1">
                  {item.label}
                </p>
                <div className="text-sm font-semibold text-foreground">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Notes */}
          {record.notes && (
            <div className="bg-muted/30 rounded-xl p-3">
              <p className="text-[10px] text-muted-foreground mb-1">Notes</p>
              <p className="text-xs text-foreground">{record.notes}</p>
            </div>
          )}

          <Button
            variant="outline"
            size="sm"
            className="w-full rounded-xl"
            onClick={onClose}
            data-ocid="attendance.detail_sheet.close_button"
          >
            Close
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// ─── Calendar Heatmap ─────────────────────────────────────────────────────────
function CalendarHeatmap() {
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);
  const months = ["2025-02", "2025-03", "2025-04"];
  const monthNames: Record<string, string> = {
    "2025-02": "February 2025",
    "2025-03": "March 2025",
    "2025-04": "April 2025",
  };

  function getDayColor(date: string): string {
    const records = mockAttendance.filter((a) => a.date === date);
    if (records.length === 0) return "bg-muted";
    const present = records.filter(
      (r) => r.status === "Present" || r.status === "Late",
    ).length;
    const ratio = present / records.length;
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
      <div className="overflow-x-auto">
        <div className="min-w-[320px]">
          {months.map((month) => {
            const daysInMonth = month === "2025-02" ? 28 : 30;
            const firstDayOfWeek = new Date(`${month}-01`).getDay();
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
              <div key={month} className="mb-5">
                <p className="text-xs font-semibold text-muted-foreground mb-2">
                  {monthNames[month]}
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
        </div>
      </div>
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
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("daily");
  const [selectedDate, setSelectedDate] = useState(TODAY);
  const [selectedMonth, setSelectedMonth] = useState("2025-04");
  const [syncing, setSyncing] = useState(false);
  const [manualEntryOpen, setManualEntryOpen] = useState(false);
  const [filterValues, setFilterValues] = useState<FilterValues>({});

  // Quick date preset
  const [datePreset, setDatePreset] = useState<DatePreset>("today");
  const [customStart, setCustomStart] = useState("");
  const [customEnd, setCustomEnd] = useState("");

  // Inline filter state
  const [inlineStartDate, setInlineStartDate] = useState("");
  const [inlineEndDate, setInlineEndDate] = useState("");
  const [inlineBranch, setInlineBranch] = useState("All Branches");
  const [inlineStatus, setInlineStatus] = useState("All Statuses");
  const [inlineEmployee, setInlineEmployee] = useState("");

  // Detail sheet state
  const [detailRecord, setDetailRecord] = useState<AttendanceRecord | null>(
    null,
  );
  const [detailOpen, setDetailOpen] = useState(false);

  function handlePresetChange(preset: DatePreset) {
    setDatePreset(preset);
    const range = getPresetRange(preset);
    if (preset !== "custom") {
      setInlineStartDate(range.start);
      setInlineEndDate(range.end);
    } else {
      setInlineStartDate(customStart);
      setInlineEndDate(customEnd);
    }
  }

  // Compute filtered records
  const dailyRecords = useMemo(() => {
    const advEmployee = (filterValues.employee as string | undefined) ?? "";
    const advBranch = (filterValues.branch as string | undefined) ?? "";
    const advStatus = (filterValues.status as string | undefined) ?? "";
    const advDateRange = filterValues.daterange as
      | { from: string; to: string }
      | undefined;

    const effectiveStart = inlineStartDate || advDateRange?.from || "";
    const effectiveEnd = inlineEndDate || advDateRange?.to || "";

    return mockAttendance.filter((a) => {
      if (effectiveStart || effectiveEnd) {
        if (effectiveStart && a.date < effectiveStart) return false;
        if (effectiveEnd && a.date > effectiveEnd) return false;
      } else {
        if (a.date !== selectedDate) return false;
      }
      const branchToUse =
        (inlineBranch !== "All Branches" ? inlineBranch : "") || advBranch;
      if (branchToUse && branchMap[a.branchId] !== branchToUse) return false;
      const statusToUse =
        (inlineStatus !== "All Statuses" ? inlineStatus : "") || advStatus;
      if (statusToUse && a.status !== statusToUse) return false;
      const employeeToUse = inlineEmployee || advEmployee;
      if (
        employeeToUse &&
        !a.userName.toLowerCase().includes(employeeToUse.toLowerCase())
      )
        return false;
      return true;
    });
  }, [
    selectedDate,
    inlineStartDate,
    inlineEndDate,
    inlineBranch,
    inlineStatus,
    inlineEmployee,
    filterValues,
  ]);

  const lateEntries = mockAttendance
    .filter((a) => a.date === selectedDate && a.status === "Late")
    .map((a) => ({ ...a, minutesLate: 45 }));

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

  const deptData = [
    { dept: "Sales", present: 18, absent: 2, late: 3 },
    { dept: "Finance", present: 12, absent: 1, late: 2 },
    { dept: "Operations", present: 22, absent: 3, late: 4 },
    { dept: "HR", present: 8, absent: 0, late: 1 },
    { dept: "Marketing", present: 10, absent: 1, late: 2 },
    { dept: "IT", present: 6, absent: 1, late: 0 },
  ];

  const todayAll = mockAttendance.filter((a) => a.date === TODAY);
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

  function handleExportCSV() {
    if (activeTab === "daily") {
      const rows = dailyRecords.map((a) => ({
        "Staff Name": a.userName,
        Branch: branchMap[a.branchId] ?? a.branchId,
        Date: a.date,
        "Check In": a.checkIn ?? "—",
        "Check Out": a.checkOut ?? "—",
        "Work Hours": a.workHours,
        Overtime: a.overtime,
        Status: a.status,
      }));
      exportToCSV(rows as Record<string, unknown>[], "attendance_daily");
    } else if (activeTab === "monthly") {
      const rows = monthlySummary.map((s) => ({
        "Staff Name": s.name,
        Present: s.present,
        Absent: s.absent,
        Late: s.late,
        "Total Hours": s.totalHours,
        Overtime: s.overtime,
        "Attendance %": s.pct,
      }));
      exportToCSV(rows as Record<string, unknown>[], "attendance_monthly");
    }
    toast.success("Attendance data exported to CSV");
  }

  function handleRowClick(record: AttendanceRecord) {
    setDetailRecord(record);
    setDetailOpen(true);
  }

  return (
    <div>
      <PageHeader
        title="Attendance Management"
        subtitle="Daily logs, monthly summaries, calendar heatmap, and biometric sync"
        breadcrumbs={[{ label: "Home" }, { label: "Attendance" }]}
        actions={
          <div className="flex items-center gap-2 flex-wrap">
            <FilterPanel
              filters={attendanceFilterFields}
              presetKey="attendance"
              onFilterChange={setFilterValues}
            />
            <Button
              variant="outline"
              size="sm"
              className="rounded-xl gap-1.5"
              onClick={handleExportCSV}
              data-ocid="attendance.export_csv_button"
            >
              <Download className="w-3.5 h-3.5" />
              Export CSV
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-xl gap-1.5"
              onClick={() => navigate({ to: "/attendance/request" })}
              data-ocid="attendance.request_leave_button"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Request Leave</span>
              <span className="sm:hidden">Leave</span>
            </Button>
            <Button
              onClick={() => setManualEntryOpen(true)}
              size="sm"
              className="rounded-xl"
              data-ocid="attendance.manual_entry_open_modal_button"
            >
              <CalendarDays className="w-4 h-4 mr-2" />
              Manual Entry
            </Button>
          </div>
        }
        data-ocid="attendance.header"
      />

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 mb-4 sm:mb-6">
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
            className={
              i === 4
                ? "col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-1"
                : ""
            }
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
          {/* Quick filter preset bar */}
          <QuickFilterBar
            preset={datePreset}
            onPreset={handlePresetChange}
            startDate={customStart}
            endDate={customEnd}
            onStartDate={(v) => {
              setCustomStart(v);
              setInlineStartDate(v);
            }}
            onEndDate={(v) => {
              setCustomEnd(v);
              setInlineEndDate(v);
            }}
          />

          {/* Inline filters */}
          <AttendanceInlineFilters
            startDate={inlineStartDate}
            endDate={inlineEndDate}
            branch={inlineBranch}
            status={inlineStatus}
            employeeSearch={inlineEmployee}
            onStartDate={setInlineStartDate}
            onEndDate={setInlineEndDate}
            onBranch={setInlineBranch}
            onStatus={setInlineStatus}
            onEmployeeSearch={setInlineEmployee}
            onExport={handleExportCSV}
          />

          {/* Legacy single date selector (when no range active) */}
          {!inlineStartDate && !inlineEndDate && (
            <div className="flex items-center gap-3 flex-wrap">
              <Label className="text-xs text-muted-foreground">Date:</Label>
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="h-8 text-xs w-36 sm:w-40"
                data-ocid="attendance.date_input"
              />
              <span className="text-xs text-muted-foreground">
                {dailyRecords.length} records
              </span>
            </div>
          )}

          {(inlineStartDate || inlineEndDate) && (
            <div className="text-xs text-muted-foreground px-1">
              {dailyRecords.length} records matching filters
            </div>
          )}

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
                          className="hover:bg-muted/20 transition-smooth cursor-pointer"
                          onClick={() => handleRowClick(a)}
                          onKeyDown={(e) =>
                            e.key === "Enter" && handleRowClick(a)
                          }
                          tabIndex={0}
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
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRowClick(a);
                              }}
                              data-ocid={`attendance.daily_table.edit_button.${i + 1}`}
                            >
                              View
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

          {/* Analytics: stack on mobile, side-by-side on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <ChartCard
              title="Overtime by Department"
              subtitle={`Hours for ${selectedMonth}`}
              data-ocid="attendance.overtime_chart"
            >
              <ResponsiveContainer width="100%" height={220}>
                <BarChart
                  data={[
                    { dept: "Sales", hours: 28 },
                    { dept: "Finance", hours: 12 },
                    { dept: "Operations", hours: 41 },
                    { dept: "HR", hours: 6 },
                    { dept: "Marketing", hours: 18 },
                    { dept: "IT", hours: 15 },
                  ]}
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
                    dataKey="hours"
                    name="Overtime Hours"
                    fill="oklch(0.68 0.18 75)"
                    radius={[3, 3, 0, 0]}
                    maxBarSize={20}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </TabsContent>

        {/* ── Calendar Heatmap ── */}
        <TabsContent value="heatmap">
          <div
            className="bg-card border border-border rounded-2xl shadow-card p-4 sm:p-6"
            data-ocid="attendance.heatmap"
          >
            <div className="flex items-center gap-2 mb-5">
              <CalendarDays className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-display font-semibold text-foreground">
                3-Month Attendance Heatmap
              </h3>
              <span className="text-xs text-muted-foreground hidden sm:inline">
                — hover a day to see absences
              </span>
            </div>
            <div className="overflow-x-auto">
              <CalendarHeatmap />
            </div>
          </div>
        </TabsContent>

        {/* ── Biometric Sync ── */}
        <TabsContent value="biometric" className="space-y-4">
          {/* Status Cards — 1 col mobile, 2 cols md, 3 cols lg */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

          {/* Device Cards — 1 col mobile, 2 cols md, 4 cols lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {biometricDevices.map((d, i) => (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                className="bg-card border border-border rounded-2xl p-3.5 shadow-card"
                data-ocid={`attendance.biometric_device.${i + 1}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-primary">
                    {d.id}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded-lg ${d.status === "Online" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : d.status === "Offline" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : "bg-amber-100 text-amber-700"}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${d.status === "Online" ? "bg-green-500" : d.status === "Offline" ? "bg-red-500" : "bg-amber-500"}`}
                    />
                    {d.status}
                  </span>
                </div>
                <p className="text-xs font-semibold text-foreground mb-0.5">
                  {d.location}
                </p>
                <p className="text-[10px] text-muted-foreground mb-2">
                  Last sync: {d.lastSync}
                </p>
                <p className="text-sm font-bold text-foreground">
                  {d.recordsSynced.toLocaleString()}
                </p>
                <p className="text-[10px] text-muted-foreground">
                  records synced
                </p>
              </motion.div>
            ))}
            {/* 5th device fill row on lg */}
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
                          className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-lg ${d.status === "Online" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : d.status === "Offline" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : "bg-amber-100 text-amber-700"}`}
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

      {/* Attendance Detail Sheet */}
      <AttendanceDetailSheet
        record={detailRecord}
        open={detailOpen}
        onClose={() => setDetailOpen(false)}
      />

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
                  defaultValue={TODAY}
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
