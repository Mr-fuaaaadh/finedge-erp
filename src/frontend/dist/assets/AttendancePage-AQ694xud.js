import { e as createLucideIcon, j as jsxRuntimeExports, X, h as cn, u as useNavigate, r as reactExports, B as Button, C as Clock, U as Users, m as motion, d as mockUsers, s as ue, k as Search } from "./index-CgV9Taym.js";
import { R as Root, C as Content, a as Close, T as Title, P as Portal, O as Overlay } from "./index-DD6-NRsj.js";
import { I as Input } from "./input-CQX-6uHe.js";
import { L as Label } from "./label-DBZIDZNQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BSYwbXVq.js";
import { S as Sheet, a as SheetContent, b as SheetHeader, c as SheetTitle } from "./sheet-zOTEzS56.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-C2Wpqlzr.js";
import { C as ChartCard } from "./ChartCard-DfiZ9ngf.js";
import { F as FilterPanel } from "./FilterPanel-BsxdNak1.js";
import { P as PageHeader } from "./PageHeader-CHVHFP_Q.js";
import { S as StatCard } from "./StatCard-DkWGxI9F.js";
import { S as StatusBadge } from "./StatusBadge-BopRiVPx.js";
import { m as mockAttendance } from "./mockAttendance-Cj4ZUs0_.js";
import { e as exportToCSV } from "./csvExport-CI-f4_Rc.js";
import { D as Download } from "./download-CT_NJYb_.js";
import { F as FileText } from "./file-text-D2QEU7vO.js";
import { C as CalendarDays } from "./calendar-days-C9hU70Su.js";
import { U as UserCheck } from "./user-check-Cq4-6NA0.js";
import { A as Activity } from "./activity-BBoCXC0i.js";
import { C as CircleAlert } from "./circle-alert-D6br3TaJ.js";
import { R as ResponsiveContainer, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, B as Bar } from "./generateCategoricalChart-BdurIGga.js";
import { B as BarChart } from "./BarChart-U3L8K1-a.js";
import { C as CircleCheck } from "./circle-check-DLxW8y4N.js";
import { S as Shield } from "./shield-B-sXR3Uu.js";
import { R as RefreshCw } from "./refresh-cw-CgHN_PR2.js";
import "./card-BIrGk5lN.js";
import "./trash-2-D2vYGX4E.js";
import "./minus-D6KT2NO-.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "17", x2: "22", y1: "8", y2: "13", key: "3nzzx3" }],
  ["line", { x1: "22", x2: "17", y1: "8", y2: "13", key: "1swrse" }]
];
const UserX = createLucideIcon("user-x", __iconNode);
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { "data-slot": "dialog", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
const biometricDevices = [
  {
    id: "BIO-001",
    location: "Mumbai Central",
    lastSync: "2025-04-22 08:45",
    status: "Online",
    recordsSynced: 142
  },
  {
    id: "BIO-002",
    location: "Delhi NCR",
    lastSync: "2025-04-22 08:52",
    status: "Online",
    recordsSynced: 187
  },
  {
    id: "BIO-003",
    location: "Bengaluru East",
    lastSync: "2025-04-22 09:01",
    status: "Online",
    recordsSynced: 128
  },
  {
    id: "BIO-004",
    location: "Hyderabad West",
    lastSync: "2025-04-22 07:30",
    status: "Offline",
    recordsSynced: 0
  },
  {
    id: "BIO-005",
    location: "Chennai South",
    lastSync: "2025-04-22 08:58",
    status: "Online",
    recordsSynced: 113
  }
];
const BRANCHES = [
  "All Branches",
  "Mumbai Central",
  "Delhi NCR",
  "Bengaluru East",
  "Hyderabad West",
  "Chennai South"
];
const STATUSES_LIST = [
  "All Statuses",
  "Present",
  "Absent",
  "Late",
  "Half Day",
  "Leave"
];
const branchMap = {
  b1: "Mumbai Central",
  b2: "Delhi NCR",
  b3: "Bengaluru East",
  b4: "Hyderabad West",
  b5: "Chennai South",
  b7: "Kolkata North"
};
const TODAY = "2025-04-22";
function getPresetRange(preset) {
  if (preset === "today") return { start: TODAY, end: TODAY };
  if (preset === "week") return { start: "2025-04-16", end: TODAY };
  if (preset === "month") return { start: "2025-04-01", end: TODAY };
  return { start: "", end: "" };
}
const attendanceFilterFields = [
  {
    key: "employee",
    label: "Employee Name",
    type: "text",
    placeholder: "Search employee…"
  },
  {
    key: "branch",
    label: "Branch",
    type: "select",
    options: BRANCHES.slice(1).map((b) => ({ label: b, value: b }))
  },
  {
    key: "status",
    label: "Status",
    type: "select",
    options: STATUSES_LIST.slice(1).map((s) => ({ label: s, value: s }))
  },
  { key: "daterange", label: "Date Range", type: "daterange" }
];
function QuickFilterBar({
  preset,
  onPreset,
  startDate,
  endDate,
  onStartDate,
  onEndDate
}) {
  const presets = [
    { label: "Today", value: "today" },
    { label: "This Week", value: "week" },
    { label: "This Month", value: "month" },
    { label: "Custom", value: "custom" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
    presets.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => onPreset(p.value),
        "data-ocid": `attendance.quick_filter.${p.value}`,
        className: `h-7 px-3 text-xs font-medium rounded-lg border transition-smooth ${preset === p.value ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"}`,
        children: p.label
      },
      p.value
    )),
    preset === "custom" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          type: "date",
          value: startDate,
          onChange: (e) => onStartDate(e.target.value),
          className: "h-7 text-xs w-[130px] rounded-lg",
          "data-ocid": "attendance.quick_filter.custom_start_input"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "–" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          type: "date",
          value: endDate,
          onChange: (e) => onEndDate(e.target.value),
          className: "h-7 text-xs w-[130px] rounded-lg",
          "data-ocid": "attendance.quick_filter.custom_end_input"
        }
      )
    ] })
  ] });
}
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
  onExport
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border rounded-2xl shadow-card px-3 sm:px-4 py-2.5 flex flex-wrap items-end gap-2",
      "data-ocid": "attendance.inline_filters",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 flex-1 min-w-[130px] max-w-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] text-muted-foreground", children: "Employee" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: employeeSearch,
                onChange: (e) => onEmployeeSearch(e.target.value),
                placeholder: "Search name…",
                className: "h-8 pl-7 text-xs rounded-xl",
                "data-ocid": "attendance.filter.employee_search_input"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] text-muted-foreground", children: "From" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "date",
              value: startDate,
              onChange: (e) => onStartDate(e.target.value),
              className: "h-8 text-xs w-[130px] sm:w-36 rounded-xl",
              "data-ocid": "attendance.filter.start_date_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] text-muted-foreground", children: "To" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "date",
              value: endDate,
              onChange: (e) => onEndDate(e.target.value),
              className: "h-8 text-xs w-[130px] sm:w-36 rounded-xl",
              "data-ocid": "attendance.filter.end_date_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] text-muted-foreground", children: "Branch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: branch, onValueChange: onBranch, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "h-8 text-xs w-[130px] sm:w-40 rounded-xl",
                "data-ocid": "attendance.filter.branch_select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: BRANCHES.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: b, children: b }, b)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] text-muted-foreground", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: status, onValueChange: onStatus, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "h-8 text-xs w-[120px] sm:w-36 rounded-xl",
                "data-ocid": "attendance.filter.status_select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: STATUSES_LIST.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            className: "h-8 rounded-xl gap-1.5 text-xs ml-auto self-end",
            onClick: onExport,
            "data-ocid": "attendance.filter.export_csv_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Export CSV" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "CSV" })
            ]
          }
        )
      ]
    }
  );
}
function AttendanceDetailSheet({
  record,
  open,
  onClose
}) {
  if (!record) return null;
  const user = mockUsers.find((u) => u.id === record.userId);
  const branch = branchMap[record.branchId] ?? record.branchId;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open, onOpenChange: (o) => !o && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SheetContent,
    {
      side: "right",
      className: "w-full sm:max-w-md",
      "data-ocid": "attendance.detail_sheet",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { className: "pb-4 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "font-display text-base", children: "Attendance Detail" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-5 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            user ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: user.avatar,
                alt: user.name,
                className: "w-12 h-12 rounded-full ring-2 ring-border"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-sm font-bold", children: record.userName.slice(0, 2) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-sm text-foreground", children: record.userName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: (user == null ? void 0 : user.designation) ?? "Staff" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: branch })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [
            { label: "Date", value: record.date },
            {
              label: "Status",
              value: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: record.status })
            },
            { label: "Check In", value: record.checkIn ?? "—" },
            { label: "Check Out", value: record.checkOut ?? "—" },
            { label: "Work Hours", value: `${record.workHours}h` },
            {
              label: "Overtime",
              value: record.overtime > 0 ? `+${record.overtime}h` : "—"
            }
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 rounded-xl p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mb-1", children: item.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: item.value })
          ] }, item.label)) }),
          record.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 rounded-xl p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mb-1", children: "Notes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground", children: record.notes })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: "w-full rounded-xl",
              onClick: onClose,
              "data-ocid": "attendance.detail_sheet.close_button",
              children: "Close"
            }
          )
        ] })
      ]
    }
  ) });
}
function CalendarHeatmap() {
  const [hoveredDate, setHoveredDate] = reactExports.useState(null);
  const months = ["2025-02", "2025-03", "2025-04"];
  const monthNames = {
    "2025-02": "February 2025",
    "2025-03": "March 2025",
    "2025-04": "April 2025"
  };
  function getDayColor(date) {
    const records = mockAttendance.filter((a) => a.date === date);
    if (records.length === 0) return "bg-muted";
    const present = records.filter(
      (r) => r.status === "Present" || r.status === "Late"
    ).length;
    const ratio = present / records.length;
    if (ratio >= 0.95) return "bg-green-500";
    if (ratio >= 0.8) return "bg-green-300";
    if (ratio >= 0.6) return "bg-yellow-400";
    return "bg-red-400";
  }
  function getAbsenteesForDate(date) {
    return mockAttendance.filter(
      (a) => a.date === date && (a.status === "Absent" || a.status === "Late")
    ).map((a) => ({ name: a.userName, status: a.status }));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-[320px]", children: months.map((month) => {
      const daysInMonth = month === "2025-02" ? 28 : 30;
      const firstDayOfWeek = (/* @__PURE__ */ new Date(`${month}-01`)).getDay();
      const offsetSlots = Array.from(
        { length: firstDayOfWeek },
        (_, idx) => ({
          key: `${month}-pad-${idx}`,
          date: null
        })
      );
      const daySlots = Array.from({ length: daysInMonth }, (_, idx) => {
        const d = idx + 1;
        const dateStr = `${month}-${String(d).padStart(2, "0")}`;
        return { key: dateStr, date: dateStr };
      });
      const allSlots = [...offsetSlots, ...daySlots];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-2", children: monthNames[month] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-7 gap-1", children: [
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "text-[10px] text-muted-foreground text-center pb-1",
              children: d
            },
            d
          )),
          allSlots.map(({ key, date }) => {
            if (!date) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}, key);
            const dayOfWeek = new Date(date).getDay();
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
            const color = isWeekend ? "bg-muted/40" : getDayColor(date);
            const absentees = hoveredDate === date ? getAbsenteesForDate(date) : [];
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: `w-full aspect-square rounded-md ${color} transition-transform hover:scale-110 cursor-pointer`,
                  onMouseEnter: () => setHoveredDate(date),
                  onMouseLeave: () => setHoveredDate(null),
                  "aria-label": date,
                  "data-ocid": `attendance.heatmap.day.${date}`
                }
              ),
              hoveredDate === date && absentees.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute z-50 bottom-full mb-1 left-1/2 -translate-x-1/2 bg-card border border-border rounded-xl shadow-elevated p-2 min-w-40 pointer-events-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-foreground mb-1", children: date }),
                absentees.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-1.5 py-0.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `w-1.5 h-1.5 rounded-full ${a.status === "Absent" ? "bg-red-500" : "bg-amber-500"}`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-foreground", children: a.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground ml-auto", children: a.status })
                    ]
                  },
                  a.name
                ))
              ] })
            ] }, date);
          })
        ] })
      ] }, month);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 sm:gap-4 pt-2 border-t border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-medium", children: "Legend:" }),
      [
        { color: "bg-green-500", label: "Full attendance (≥95%)" },
        { color: "bg-green-300", label: "Good (80–94%)" },
        { color: "bg-yellow-400", label: "Moderate (60–79%)" },
        { color: "bg-red-400", label: "Low (<60%)" },
        { color: "bg-muted", label: "No data / Weekend" }
      ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-3 h-3 rounded-sm ${item.color}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: item.label })
      ] }, item.label))
    ] })
  ] });
}
function AttendancePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = reactExports.useState("daily");
  const [selectedDate, setSelectedDate] = reactExports.useState(TODAY);
  const [selectedMonth, setSelectedMonth] = reactExports.useState("2025-04");
  const [syncing, setSyncing] = reactExports.useState(false);
  const [manualEntryOpen, setManualEntryOpen] = reactExports.useState(false);
  const [filterValues, setFilterValues] = reactExports.useState({});
  const [datePreset, setDatePreset] = reactExports.useState("today");
  const [customStart, setCustomStart] = reactExports.useState("");
  const [customEnd, setCustomEnd] = reactExports.useState("");
  const [inlineStartDate, setInlineStartDate] = reactExports.useState("");
  const [inlineEndDate, setInlineEndDate] = reactExports.useState("");
  const [inlineBranch, setInlineBranch] = reactExports.useState("All Branches");
  const [inlineStatus, setInlineStatus] = reactExports.useState("All Statuses");
  const [inlineEmployee, setInlineEmployee] = reactExports.useState("");
  const [detailRecord, setDetailRecord] = reactExports.useState(
    null
  );
  const [detailOpen, setDetailOpen] = reactExports.useState(false);
  function handlePresetChange(preset) {
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
  const dailyRecords = reactExports.useMemo(() => {
    const advEmployee = filterValues.employee ?? "";
    const advBranch = filterValues.branch ?? "";
    const advStatus = filterValues.status ?? "";
    const advDateRange = filterValues.daterange;
    const effectiveStart = inlineStartDate || (advDateRange == null ? void 0 : advDateRange.from) || "";
    const effectiveEnd = inlineEndDate || (advDateRange == null ? void 0 : advDateRange.to) || "";
    return mockAttendance.filter((a) => {
      if (effectiveStart || effectiveEnd) {
        if (effectiveStart && a.date < effectiveStart) return false;
        if (effectiveEnd && a.date > effectiveEnd) return false;
      } else {
        if (a.date !== selectedDate) return false;
      }
      const branchToUse = (inlineBranch !== "All Branches" ? inlineBranch : "") || advBranch;
      if (branchToUse && branchMap[a.branchId] !== branchToUse) return false;
      const statusToUse = (inlineStatus !== "All Statuses" ? inlineStatus : "") || advStatus;
      if (statusToUse && a.status !== statusToUse) return false;
      const employeeToUse = inlineEmployee || advEmployee;
      if (employeeToUse && !a.userName.toLowerCase().includes(employeeToUse.toLowerCase()))
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
    filterValues
  ]);
  const lateEntries = mockAttendance.filter((a) => a.date === selectedDate && a.status === "Late").map((a) => ({ ...a, minutesLate: 45 }));
  const monthlyRecords = mockAttendance.filter(
    (a) => a.date.startsWith(selectedMonth)
  );
  const uniqueUsers = [...new Set(monthlyRecords.map((a) => a.userId))];
  const monthlySummary = uniqueUsers.map((uid) => {
    var _a;
    const records = monthlyRecords.filter((a) => a.userId === uid);
    const present = records.filter(
      (a) => a.status === "Present" || a.status === "Late"
    ).length;
    const absent = records.filter((a) => a.status === "Absent").length;
    const late = records.filter((a) => a.status === "Late").length;
    const totalHours = records.reduce((s, r) => s + r.workHours, 0);
    const overtime = records.reduce((s, r) => s + r.overtime, 0);
    const name = ((_a = records[0]) == null ? void 0 : _a.userName) ?? "Unknown";
    const total = records.length;
    return {
      uid,
      name,
      present,
      absent,
      late,
      totalHours: totalHours.toFixed(1),
      overtime: overtime.toFixed(1),
      pct: total > 0 ? Math.round(present / total * 100) : 0
    };
  });
  const deptData = [
    { dept: "Sales", present: 18, absent: 2, late: 3 },
    { dept: "Finance", present: 12, absent: 1, late: 2 },
    { dept: "Operations", present: 22, absent: 3, late: 4 },
    { dept: "HR", present: 8, absent: 0, late: 1 },
    { dept: "Marketing", present: 10, absent: 1, late: 2 },
    { dept: "IT", present: 6, absent: 1, late: 0 }
  ];
  const todayAll = mockAttendance.filter((a) => a.date === TODAY);
  const presentToday = todayAll.filter((a) => a.status === "Present").length;
  const absentToday = todayAll.filter((a) => a.status === "Absent").length;
  const lateToday = todayAll.filter((a) => a.status === "Late").length;
  const onLeaveToday = todayAll.filter(
    (a) => a.status === "Leave" || a.status === "Half Day"
  ).length;
  const overtimeHours = todayAll.reduce((s, a) => s + a.overtime, 0);
  function handleSync() {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      ue.success("Biometric sync complete", {
        description: "570 records synced from 4 devices."
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
        Status: a.status
      }));
      exportToCSV(rows, "attendance_daily");
    } else if (activeTab === "monthly") {
      const rows = monthlySummary.map((s) => ({
        "Staff Name": s.name,
        Present: s.present,
        Absent: s.absent,
        Late: s.late,
        "Total Hours": s.totalHours,
        Overtime: s.overtime,
        "Attendance %": s.pct
      }));
      exportToCSV(rows, "attendance_monthly");
    }
    ue.success("Attendance data exported to CSV");
  }
  function handleRowClick(record) {
    setDetailRecord(record);
    setDetailOpen(true);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Attendance Management",
        subtitle: "Daily logs, monthly summaries, calendar heatmap, and biometric sync",
        breadcrumbs: [{ label: "Home" }, { label: "Attendance" }],
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FilterPanel,
            {
              filters: attendanceFilterFields,
              presetKey: "attendance",
              onFilterChange: setFilterValues
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: "rounded-xl gap-1.5",
              onClick: handleExportCSV,
              "data-ocid": "attendance.export_csv_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
                "Export CSV"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: "rounded-xl gap-1.5",
              onClick: () => navigate({ to: "/attendance/request" }),
              "data-ocid": "attendance.request_leave_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Request Leave" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Leave" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => setManualEntryOpen(true),
              size: "sm",
              className: "rounded-xl",
              "data-ocid": "attendance.manual_entry_open_modal_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-4 h-4 mr-2" }),
                "Manual Entry"
              ]
            }
          )
        ] }),
        "data-ocid": "attendance.header"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 mb-4 sm:mb-6", children: [
      {
        title: "Present Today",
        value: presentToday + 68,
        icon: UserCheck,
        iconColor: "text-green-600"
      },
      {
        title: "Absent Today",
        value: absentToday + 6,
        icon: UserX,
        iconColor: "text-red-500"
      },
      {
        title: "Late Today",
        value: lateToday + 9,
        icon: Clock,
        iconColor: "text-amber-600"
      },
      {
        title: "On Leave",
        value: onLeaveToday + 4,
        icon: Users,
        iconColor: "text-purple-600"
      },
      {
        title: "Overtime Hours",
        value: `${(overtimeHours + 31.5).toFixed(0)}h`,
        icon: Activity,
        iconColor: "text-secondary"
      }
    ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.07 },
        className: i === 4 ? "col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-1" : "",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            title: s.title,
            value: s.value,
            icon: s.icon,
            iconColor: s.iconColor,
            "data-ocid": `attendance.stat.${i + 1}`
          }
        )
      },
      s.title
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TabsList,
        {
          className: "mb-4 flex-wrap overflow-x-auto",
          "data-ocid": "attendance.tabs",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "daily", "data-ocid": "attendance.tab.daily", children: "Daily Log" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "monthly", "data-ocid": "attendance.tab.monthly", children: "Monthly Summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "heatmap", "data-ocid": "attendance.tab.heatmap", children: "Calendar Heatmap" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "biometric", "data-ocid": "attendance.tab.biometric", children: "Biometric Sync" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "daily", className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          QuickFilterBar,
          {
            preset: datePreset,
            onPreset: handlePresetChange,
            startDate: customStart,
            endDate: customEnd,
            onStartDate: (v) => {
              setCustomStart(v);
              setInlineStartDate(v);
            },
            onEndDate: (v) => {
              setCustomEnd(v);
              setInlineEndDate(v);
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AttendanceInlineFilters,
          {
            startDate: inlineStartDate,
            endDate: inlineEndDate,
            branch: inlineBranch,
            status: inlineStatus,
            employeeSearch: inlineEmployee,
            onStartDate: setInlineStartDate,
            onEndDate: setInlineEndDate,
            onBranch: setInlineBranch,
            onStatus: setInlineStatus,
            onEmployeeSearch: setInlineEmployee,
            onExport: handleExportCSV
          }
        ),
        !inlineStartDate && !inlineEndDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Date:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "date",
              value: selectedDate,
              onChange: (e) => setSelectedDate(e.target.value),
              className: "h-8 text-xs w-36 sm:w-40",
              "data-ocid": "attendance.date_input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            dailyRecords.length,
            " records"
          ] })
        ] }),
        (inlineStartDate || inlineEndDate) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground px-1", children: [
          dailyRecords.length,
          " records matching filters"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "bg-card border border-border rounded-2xl shadow-card overflow-hidden",
            "data-ocid": "attendance.daily_table",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm min-w-[640px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/30 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: [
                "Staff Name",
                "Branch",
                "Check In",
                "Check Out",
                "Hours",
                "OT",
                "Status",
                "Actions"
              ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "th",
                {
                  className: "px-4 py-2.5 text-left text-xs font-semibold text-muted-foreground",
                  children: h
                },
                h
              )) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: dailyRecords.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "td",
                {
                  colSpan: 8,
                  className: "px-4 py-8 text-center text-sm text-muted-foreground",
                  "data-ocid": "attendance.daily_table.empty_state",
                  children: "No records for selected date / filters"
                }
              ) }) : dailyRecords.map((a, i) => {
                const user = mockUsers.find((u) => u.id === a.userId);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    className: "hover:bg-muted/20 transition-smooth cursor-pointer",
                    onClick: () => handleRowClick(a),
                    onKeyDown: (e) => e.key === "Enter" && handleRowClick(a),
                    tabIndex: 0,
                    "data-ocid": `attendance.daily_table.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        user && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: user.avatar,
                            alt: user.name,
                            className: "w-6 h-6 rounded-full"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: a.userName })
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs text-muted-foreground", children: branchMap[a.branchId] ?? a.branchId }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs font-mono text-foreground", children: a.checkIn ?? "—" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs font-mono text-foreground", children: a.checkOut ?? "—" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5 text-xs font-semibold text-foreground text-right", children: [
                        a.workHours,
                        "h"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs font-semibold text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: a.overtime > 0 ? "text-amber-600" : "text-muted-foreground",
                          children: a.overtime > 0 ? `+${a.overtime}h` : "—"
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: a.status }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          className: "text-xs text-primary hover:underline",
                          onClick: (e) => {
                            e.stopPropagation();
                            handleRowClick(a);
                          },
                          "data-ocid": `attendance.daily_table.edit_button.${i + 1}`,
                          children: "View"
                        }
                      ) })
                    ]
                  },
                  a.id
                );
              }) })
            ] }) })
          }
        ),
        lateEntries.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-amber-200 dark:border-amber-900/40 rounded-2xl shadow-card p-4",
            "data-ocid": "attendance.late_tracker",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 text-amber-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-display font-semibold text-foreground", children: "Late Entry Tracker" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "— checked in after 09:30 AM" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2", children: lateEntries.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-3 bg-amber-50 dark:bg-amber-900/10 rounded-xl px-3 py-2",
                  "data-ocid": `attendance.late_tracker.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-amber-600 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground truncate", children: e.userName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: branchMap[e.branchId] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono font-bold text-amber-700", children: e.checkIn }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-amber-600", children: [
                        "+",
                        e.minutesLate,
                        " min late"
                      ] })
                    ] })
                  ]
                },
                e.id
              )) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "monthly", className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs text-muted-foreground", children: "Month:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "select",
            {
              value: selectedMonth,
              onChange: (e) => setSelectedMonth(e.target.value),
              className: "h-8 px-2 text-xs border border-input rounded-lg bg-background text-foreground",
              "data-ocid": "attendance.month_select",
              children: ["2025-02", "2025-03", "2025-04"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: m, children: (/* @__PURE__ */ new Date(`${m}-01`)).toLocaleString("en-IN", {
                month: "long",
                year: "numeric"
              }) }, m))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "bg-card border border-border rounded-2xl shadow-card overflow-hidden",
            "data-ocid": "attendance.monthly_table",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm min-w-[560px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/30 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: [
                "Staff Name",
                "Present",
                "Absent",
                "Late",
                "Total Hours",
                "Overtime",
                "Attendance %"
              ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "th",
                {
                  className: "px-4 py-2.5 text-left text-xs font-semibold text-muted-foreground",
                  children: h
                },
                h
              )) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: monthlySummary.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: "hover:bg-muted/20 transition-smooth",
                  "data-ocid": `attendance.monthly_table.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs font-semibold text-foreground", children: s.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs text-green-600 font-medium", children: s.present }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs text-red-500 font-medium", children: s.absent }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs text-amber-600 font-medium", children: s.late }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5 text-xs text-foreground font-mono", children: [
                      s.totalHours,
                      "h"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5 text-xs text-foreground font-mono", children: [
                      s.overtime,
                      "h"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1.5 rounded-full bg-muted overflow-hidden min-w-16 max-w-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: `h-full rounded-full ${s.pct >= 90 ? "bg-green-500" : s.pct >= 75 ? "bg-amber-500" : "bg-red-500"}`,
                          style: { width: `${s.pct}%` }
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: `text-xs font-bold w-8 text-right ${s.pct >= 90 ? "text-green-600" : s.pct >= 75 ? "text-amber-600" : "text-red-500"}`,
                          children: [
                            s.pct,
                            "%"
                          ]
                        }
                      )
                    ] }) })
                  ]
                },
                s.uid
              )) })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChartCard,
            {
              title: "Department-wise Attendance",
              subtitle: `Summary for ${selectedMonth}`,
              "data-ocid": "attendance.dept_chart",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                BarChart,
                {
                  data: deptData,
                  margin: { top: 4, right: 8, left: 0, bottom: 0 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CartesianGrid,
                      {
                        strokeDasharray: "3 3",
                        vertical: false,
                        stroke: "oklch(0.91 0.01 0)"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      XAxis,
                      {
                        dataKey: "dept",
                        tick: { fontSize: 11 },
                        axisLine: false,
                        tickLine: false
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      YAxis,
                      {
                        tick: { fontSize: 11 },
                        axisLine: false,
                        tickLine: false
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Bar,
                      {
                        dataKey: "present",
                        name: "Present",
                        fill: "oklch(0.55 0.15 155)",
                        radius: [3, 3, 0, 0],
                        maxBarSize: 20
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Bar,
                      {
                        dataKey: "late",
                        name: "Late",
                        fill: "oklch(0.68 0.18 75)",
                        radius: [3, 3, 0, 0],
                        maxBarSize: 20
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Bar,
                      {
                        dataKey: "absent",
                        name: "Absent",
                        fill: "oklch(0.63 0.24 17)",
                        radius: [3, 3, 0, 0],
                        maxBarSize: 20
                      }
                    )
                  ]
                }
              ) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChartCard,
            {
              title: "Overtime by Department",
              subtitle: `Hours for ${selectedMonth}`,
              "data-ocid": "attendance.overtime_chart",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                BarChart,
                {
                  data: [
                    { dept: "Sales", hours: 28 },
                    { dept: "Finance", hours: 12 },
                    { dept: "Operations", hours: 41 },
                    { dept: "HR", hours: 6 },
                    { dept: "Marketing", hours: 18 },
                    { dept: "IT", hours: 15 }
                  ],
                  margin: { top: 4, right: 8, left: 0, bottom: 0 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CartesianGrid,
                      {
                        strokeDasharray: "3 3",
                        vertical: false,
                        stroke: "oklch(0.91 0.01 0)"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      XAxis,
                      {
                        dataKey: "dept",
                        tick: { fontSize: 11 },
                        axisLine: false,
                        tickLine: false
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      YAxis,
                      {
                        tick: { fontSize: 11 },
                        axisLine: false,
                        tickLine: false
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Bar,
                      {
                        dataKey: "hours",
                        name: "Overtime Hours",
                        fill: "oklch(0.68 0.18 75)",
                        radius: [3, 3, 0, 0],
                        maxBarSize: 20
                      }
                    )
                  ]
                }
              ) })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "heatmap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-2xl shadow-card p-4 sm:p-6",
          "data-ocid": "attendance.heatmap",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-4 h-4 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-display font-semibold text-foreground", children: "3-Month Attendance Heatmap" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground hidden sm:inline", children: "— hover a day to see absences" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarHeatmap, {}) })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "biometric", className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
          {
            icon: CircleCheck,
            label: "Last Sync",
            value: "2 hours ago",
            sub: "All devices checked",
            color: "text-green-600",
            bg: "bg-green-50 dark:bg-green-900/10"
          },
          {
            icon: Shield,
            label: "Devices Online",
            value: "4 / 5",
            sub: "1 device offline",
            color: "text-primary",
            bg: "bg-primary/5"
          },
          {
            icon: CircleAlert,
            label: "Failed Records",
            value: "2",
            sub: "Needs attention",
            color: "text-red-500",
            bg: "bg-red-50 dark:bg-red-900/10"
          }
        ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.08 },
            className: `rounded-2xl border border-border shadow-card p-4 flex items-center gap-4 ${s.bg}`,
            "data-ocid": `attendance.biometric_stat.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-10 h-10 rounded-xl flex items-center justify-center bg-card shadow-card ${s.color}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: s.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-display font-bold text-foreground", children: s.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: s.sub })
              ] })
            ]
          },
          s.label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3", children: biometricDevices.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.97 },
            animate: { opacity: 1, scale: 1 },
            transition: { delay: i * 0.06 },
            className: "bg-card border border-border rounded-2xl p-3.5 shadow-card",
            "data-ocid": `attendance.biometric_device.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono font-bold text-primary", children: d.id }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: `inline-flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded-lg ${d.status === "Online" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : d.status === "Offline" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : "bg-amber-100 text-amber-700"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `w-1.5 h-1.5 rounded-full ${d.status === "Online" ? "bg-green-500" : d.status === "Offline" ? "bg-red-500" : "bg-amber-500"}`
                        }
                      ),
                      d.status
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-0.5", children: d.location }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mb-2", children: [
                "Last sync: ",
                d.lastSync
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: d.recordsSynced.toLocaleString() }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "records synced" })
            ]
          },
          d.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-2xl shadow-card overflow-hidden",
            "data-ocid": "attendance.biometric_table",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-3 border-b border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-display font-semibold text-foreground", children: "Device Sync Log" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: handleSync,
                    disabled: syncing,
                    "data-ocid": "attendance.sync_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        RefreshCw,
                        {
                          className: `w-3.5 h-3.5 mr-2 ${syncing ? "animate-spin" : ""}`
                        }
                      ),
                      syncing ? "Syncing…" : "Trigger Manual Sync"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm min-w-[480px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/30 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: [
                  "Device ID",
                  "Location",
                  "Last Sync Time",
                  "Status",
                  "Records Synced"
                ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "th",
                  {
                    className: "px-4 py-2.5 text-left text-xs font-semibold text-muted-foreground",
                    children: h
                  },
                  h
                )) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: biometricDevices.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    className: "hover:bg-muted/20 transition-smooth",
                    "data-ocid": `attendance.biometric_table.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs font-mono font-semibold text-primary", children: d.id }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs text-foreground", children: d.location }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs text-muted-foreground font-mono", children: d.lastSync }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: `inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-lg ${d.status === "Online" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : d.status === "Offline" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : "bg-amber-100 text-amber-700"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: `w-1.5 h-1.5 rounded-full ${d.status === "Online" ? "bg-green-500" : d.status === "Offline" ? "bg-red-500" : "bg-amber-500"}`
                              }
                            ),
                            d.status
                          ]
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs font-semibold text-foreground text-right", children: d.recordsSynced.toLocaleString() })
                    ]
                  },
                  d.id
                )) })
              ] }) })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AttendanceDetailSheet,
      {
        record: detailRecord,
        open: detailOpen,
        onClose: () => setDetailOpen(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: manualEntryOpen, onOpenChange: setManualEntryOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "sm:max-w-md rounded-2xl",
        "data-ocid": "attendance.manual_entry_dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "Manual Attendance Entry" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Staff Member" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { "data-ocid": "attendance.manual_staff_select", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select staff member" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: mockUsers.filter((u) => u.role === "staff").slice(0, 10).map((u) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: u.id, children: u.name }, u.id)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "date",
                    defaultValue: TODAY,
                    className: "text-sm",
                    "data-ocid": "attendance.manual_date_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { defaultValue: "Present", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "text-sm",
                      "data-ocid": "attendance.manual_status_select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Present", "Absent", "Late", "Half Day", "Leave"].map(
                    (s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Check In" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "time",
                    defaultValue: "09:00",
                    className: "text-sm",
                    "data-ocid": "attendance.manual_checkin_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Check Out" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "time",
                    defaultValue: "18:00",
                    className: "text-sm",
                    "data-ocid": "attendance.manual_checkout_input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Notes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "Optional remarks…",
                  className: "text-sm",
                  "data-ocid": "attendance.manual_notes_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  onClick: () => setManualEntryOpen(false),
                  "data-ocid": "attendance.manual_entry_cancel_button",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: () => {
                    setManualEntryOpen(false);
                    ue.success("Attendance entry saved successfully.");
                  },
                  "data-ocid": "attendance.manual_entry_submit_button",
                  children: "Save Entry"
                }
              )
            ] })
          ] })
        ]
      }
    ) })
  ] });
}
export {
  AttendancePage as default
};
