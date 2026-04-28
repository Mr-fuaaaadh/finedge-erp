import { e as createLucideIcon, b as useAuth, r as reactExports, j as jsxRuntimeExports, B as Button, C as Clock, m as motion, q as Badge, l as ChevronLeft, n as ChevronRight, U as Users, i as Building2 } from "./index-CgV9Taym.js";
import { I as Input } from "./input-CQX-6uHe.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BSYwbXVq.js";
import { e as exportToCSV } from "./csvExport-CI-f4_Rc.js";
import { P as PageHeader } from "./PageHeader-CHVHFP_Q.js";
import { D as Download } from "./download-CT_NJYb_.js";
import { F as FileText } from "./file-text-D2QEU7vO.js";
import { C as ChartColumn } from "./chart-column-BpQJ6ukI.js";
import { C as CalendarDays } from "./calendar-days-C9hU70Su.js";
import { C as ClipboardList } from "./clipboard-list-BlI2NnA_.js";
import { U as UserCheck } from "./user-check-Cq4-6NA0.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = createLucideIcon("briefcase", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  [
    "path",
    {
      d: "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",
      key: "1jlk70"
    }
  ],
  [
    "path",
    {
      d: "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",
      key: "18rp1v"
    }
  ]
];
const ShieldOff = createLucideIcon("shield-off", __iconNode);
function daysAgo(days, hours = 0, minutes = 0) {
  const d = /* @__PURE__ */ new Date();
  d.setDate(d.getDate() - days);
  d.setHours(hours, minutes, 0, 0);
  return d;
}
function ip(a, b) {
  return `192.168.${a}.${b}`;
}
const raw = [
  [
    "al-001",
    daysAgo(0, 9, 12),
    "u-001",
    "Arjun Mehta",
    "admin",
    "LOGIN",
    "Staff",
    "sys",
    "Admin login from Mumbai HQ",
    ip(1, 10)
  ],
  [
    "al-002",
    daysAgo(0, 9, 15),
    "u-001",
    "Arjun Mehta",
    "admin",
    "VIEW",
    "Report",
    "rpt-001",
    "Viewed monthly finance summary report",
    ip(1, 10)
  ],
  [
    "al-003",
    daysAgo(0, 10, 5),
    "u-002",
    "Priya Sharma",
    "branch_manager",
    "LOGIN",
    "Staff",
    "sys",
    "Branch manager login from Pune office",
    ip(2, 22)
  ],
  [
    "al-004",
    daysAgo(0, 10, 8),
    "u-002",
    "Priya Sharma",
    "branch_manager",
    "UPDATE",
    "Lead",
    "ld-042",
    "Updated lead status to In Progress",
    ip(2, 22)
  ],
  [
    "al-005",
    daysAgo(0, 11, 30),
    "u-003",
    "Rohan Verma",
    "staff",
    "CREATE",
    "Task",
    "tk-101",
    "Created new task: Follow up with HDFC client",
    ip(3, 45)
  ],
  [
    "al-006",
    daysAgo(0, 11, 55),
    "u-004",
    "Neha Gupta",
    "finance_manager",
    "LOGIN",
    "Staff",
    "sys",
    "Finance manager login from Delhi branch",
    ip(4, 88)
  ],
  [
    "al-007",
    daysAgo(0, 12, 10),
    "u-004",
    "Neha Gupta",
    "finance_manager",
    "EXPORT",
    "Finance",
    "fin-2024-03",
    "Exported Q1 finance report to CSV",
    ip(4, 88)
  ],
  [
    "al-008",
    daysAgo(0, 13, 0),
    "u-001",
    "Arjun Mehta",
    "admin",
    "CREATE",
    "Branch",
    "br-012",
    "Created new branch: Jaipur East",
    ip(1, 10)
  ],
  [
    "al-009",
    daysAgo(0, 14, 20),
    "u-005",
    "Kavya Nair",
    "staff",
    "UPDATE",
    "Attendance",
    "att-0523",
    "Marked attendance as Present for today",
    ip(5, 67)
  ],
  [
    "al-010",
    daysAgo(0, 16, 45),
    "u-001",
    "Arjun Mehta",
    "admin",
    "DELETE",
    "Lead",
    "ld-007",
    "Deleted duplicate lead entry for Ravi Industries",
    ip(1, 10)
  ],
  [
    "al-011",
    daysAgo(1, 8, 30),
    "u-006",
    "Suresh Pillai",
    "branch_manager",
    "LOGIN",
    "Staff",
    "sys",
    "Branch manager login from Chennai office",
    ip(6, 11)
  ],
  [
    "al-012",
    daysAgo(1, 8, 45),
    "u-006",
    "Suresh Pillai",
    "branch_manager",
    "CREATE",
    "Lead",
    "ld-098",
    "Added new lead: Infosys partnership inquiry",
    ip(6, 11)
  ],
  [
    "al-013",
    daysAgo(1, 9, 15),
    "u-003",
    "Rohan Verma",
    "staff",
    "UPDATE",
    "Task",
    "tk-089",
    "Updated task progress to 75%",
    ip(3, 45)
  ],
  [
    "al-014",
    daysAgo(1, 10, 0),
    "u-007",
    "Anjali Singh",
    "finance_manager",
    "VIEW",
    "Finance",
    "fin-2024-02",
    "Reviewed February expense breakdown",
    ip(7, 33)
  ],
  [
    "al-015",
    daysAgo(1, 11, 30),
    "u-002",
    "Priya Sharma",
    "branch_manager",
    "UPDATE",
    "Staff",
    "usr-015",
    "Updated staff designation to Senior Sales Executive",
    ip(2, 22)
  ],
  [
    "al-016",
    daysAgo(1, 12, 0),
    "u-001",
    "Arjun Mehta",
    "admin",
    "UPDATE",
    "Branch",
    "br-003",
    "Updated branch status to Active",
    ip(1, 10)
  ],
  [
    "al-017",
    daysAgo(1, 14, 10),
    "u-008",
    "Vikram Rao",
    "staff",
    "CREATE",
    "Attendance",
    "att-0522",
    "Logged overtime 2.5 hours for project delivery",
    ip(8, 55)
  ],
  [
    "al-018",
    daysAgo(1, 15, 30),
    "u-009",
    "Meena Joshi",
    "admin",
    "EXPORT",
    "Report",
    "rpt-002",
    "Exported staff performance report Q1 2024",
    ip(1, 12)
  ],
  [
    "al-019",
    daysAgo(1, 17, 0),
    "u-006",
    "Suresh Pillai",
    "branch_manager",
    "LOGOUT",
    "Staff",
    "sys",
    "Session ended",
    ip(6, 11)
  ],
  [
    "al-020",
    daysAgo(2, 9, 0),
    "u-010",
    "Divya Menon",
    "staff",
    "LOGIN",
    "Staff",
    "sys",
    "Staff login from Hyderabad branch",
    ip(9, 77)
  ],
  [
    "al-021",
    daysAgo(2, 9, 20),
    "u-010",
    "Divya Menon",
    "staff",
    "UPDATE",
    "Lead",
    "ld-055",
    "Added follow-up note: Called client, meeting scheduled",
    ip(9, 77)
  ],
  [
    "al-022",
    daysAgo(2, 10, 45),
    "u-001",
    "Arjun Mehta",
    "admin",
    "DELETE",
    "Staff",
    "usr-031",
    "Removed inactive staff record from database",
    ip(1, 10)
  ],
  [
    "al-023",
    daysAgo(2, 11, 0),
    "u-004",
    "Neha Gupta",
    "finance_manager",
    "CREATE",
    "Finance",
    "fin-2024-04",
    "Created April finance record for Delhi branch",
    ip(4, 88)
  ],
  [
    "al-024",
    daysAgo(2, 13, 30),
    "u-011",
    "Rahul Kapoor",
    "branch_manager",
    "UPDATE",
    "Branch",
    "br-007",
    "Updated target revenue for FY 2024-25",
    ip(10, 44)
  ],
  [
    "al-025",
    daysAgo(3, 8, 10),
    "u-012",
    "Pooja Iyer",
    "staff",
    "VIEW",
    "Report",
    "rpt-003",
    "Viewed personal performance dashboard",
    ip(11, 21)
  ],
  [
    "al-026",
    daysAgo(3, 9, 0),
    "u-001",
    "Arjun Mehta",
    "admin",
    "LOGIN",
    "Staff",
    "sys",
    "Admin session started",
    ip(1, 10)
  ],
  [
    "al-027",
    daysAgo(3, 9, 30),
    "u-001",
    "Arjun Mehta",
    "admin",
    "CREATE",
    "Staff",
    "usr-049",
    "Onboarded new staff member: Kiran Desai, Sales Exec",
    ip(1, 10)
  ],
  [
    "al-028",
    daysAgo(3, 10, 0),
    "u-013",
    "Amit Tiwari",
    "finance_manager",
    "VIEW",
    "Finance",
    "fin-2024-01",
    "Accessed loan disbursement records for January",
    ip(12, 99)
  ],
  [
    "al-029",
    daysAgo(3, 11, 15),
    "u-003",
    "Rohan Verma",
    "staff",
    "DELETE",
    "Task",
    "tk-072",
    "Deleted cancelled task: Old Q3 target review",
    ip(3, 45)
  ],
  [
    "al-030",
    daysAgo(3, 14, 0),
    "u-002",
    "Priya Sharma",
    "branch_manager",
    "EXPORT",
    "Report",
    "rpt-004",
    "Exported Pune branch weekly leads report",
    ip(2, 22)
  ],
  [
    "al-031",
    daysAgo(4, 8, 30),
    "u-014",
    "Sanjay Kumar",
    "staff",
    "CREATE",
    "Lead",
    "ld-112",
    "Created lead: Tata Motors fleet financing",
    ip(13, 55)
  ],
  [
    "al-032",
    daysAgo(4, 9, 45),
    "u-009",
    "Meena Joshi",
    "admin",
    "UPDATE",
    "Branch",
    "br-001",
    "Changed branch manager assignment for Mumbai HQ",
    ip(1, 12)
  ],
  [
    "al-033",
    daysAgo(4, 10, 30),
    "u-015",
    "Lakshmi Rao",
    "branch_manager",
    "VIEW",
    "Staff",
    "usr-022",
    "Reviewed staff profile and performance metrics",
    ip(14, 30)
  ],
  [
    "al-034",
    daysAgo(4, 12, 0),
    "u-007",
    "Anjali Singh",
    "finance_manager",
    "UPDATE",
    "Finance",
    "fin-2024-02",
    "Adjusted February operational costs entry",
    ip(7, 33)
  ],
  [
    "al-035",
    daysAgo(5, 9, 0),
    "u-001",
    "Arjun Mehta",
    "admin",
    "EXPORT",
    "Finance",
    "fin-all",
    "Bulk exported all finance records for audit",
    ip(1, 10)
  ],
  [
    "al-036",
    daysAgo(5, 10, 15),
    "u-016",
    "Ravi Chandran",
    "staff",
    "UPDATE",
    "Attendance",
    "att-0515",
    "Corrected check-in time from 09:10 to 09:00",
    ip(15, 62)
  ],
  [
    "al-037",
    daysAgo(5, 11, 0),
    "u-011",
    "Rahul Kapoor",
    "branch_manager",
    "CREATE",
    "Task",
    "tk-120",
    "Assigned monthly target review task to team",
    ip(10, 44)
  ],
  [
    "al-038",
    daysAgo(6, 8, 0),
    "u-013",
    "Amit Tiwari",
    "finance_manager",
    "LOGIN",
    "Staff",
    "sys",
    "Finance manager login",
    ip(12, 99)
  ],
  [
    "al-039",
    daysAgo(6, 8, 30),
    "u-013",
    "Amit Tiwari",
    "finance_manager",
    "VIEW",
    "Finance",
    "fin-2024-03",
    "Viewed March profit and loss statement",
    ip(12, 99)
  ],
  [
    "al-040",
    daysAgo(6, 9, 10),
    "u-017",
    "Geeta Pillai",
    "staff",
    "CREATE",
    "Lead",
    "ld-123",
    "New lead added: Wipro IT infrastructure deal",
    ip(16, 40)
  ],
  [
    "al-041",
    daysAgo(7, 10, 30),
    "u-001",
    "Arjun Mehta",
    "admin",
    "UPDATE",
    "Staff",
    "usr-007",
    "Promoted staff: Anita Desai to Senior Manager",
    ip(1, 10)
  ],
  [
    "al-042",
    daysAgo(7, 11, 0),
    "u-018",
    "Sunil Bose",
    "branch_manager",
    "DELETE",
    "Lead",
    "ld-030",
    "Removed stale lead inactive for 6 months",
    ip(17, 88)
  ],
  [
    "al-043",
    daysAgo(8, 9, 0),
    "u-019",
    "Harini Nair",
    "staff",
    "VIEW",
    "Attendance",
    "att-0510",
    "Checked personal attendance history",
    ip(18, 22)
  ],
  [
    "al-044",
    daysAgo(8, 10, 0),
    "u-004",
    "Neha Gupta",
    "finance_manager",
    "EXPORT",
    "Finance",
    "fin-q1",
    "Exported Q1 consolidated finance data",
    ip(4, 88)
  ],
  [
    "al-045",
    daysAgo(9, 8, 15),
    "u-009",
    "Meena Joshi",
    "admin",
    "CREATE",
    "Branch",
    "br-015",
    "New branch setup: Kolkata South",
    ip(1, 12)
  ],
  [
    "al-046",
    daysAgo(9, 9, 30),
    "u-020",
    "Deepak Verma",
    "staff",
    "UPDATE",
    "Task",
    "tk-105",
    "Marked task as Done: Client onboarding checklist",
    ip(19, 66)
  ],
  [
    "al-047",
    daysAgo(10, 10, 0),
    "u-015",
    "Lakshmi Rao",
    "branch_manager",
    "EXPORT",
    "Report",
    "rpt-006",
    "Exported Bengaluru branch monthly performance CSV",
    ip(14, 30)
  ],
  [
    "al-048",
    daysAgo(10, 11, 30),
    "u-001",
    "Arjun Mehta",
    "admin",
    "DELETE",
    "Branch",
    "br-009",
    "Deactivated closed Surat West branch",
    ip(1, 10)
  ],
  [
    "al-049",
    daysAgo(12, 9, 0),
    "u-007",
    "Anjali Singh",
    "finance_manager",
    "CREATE",
    "Finance",
    "fin-2024-03-del",
    "Created March finance record for Delhi branch",
    ip(7, 33)
  ],
  [
    "al-050",
    daysAgo(14, 8, 0),
    "u-018",
    "Sunil Bose",
    "branch_manager",
    "LOGIN",
    "Staff",
    "sys",
    "Login from Ahmedabad branch portal",
    ip(17, 88)
  ],
  [
    "al-051",
    daysAgo(15, 9, 15),
    "u-016",
    "Ravi Chandran",
    "staff",
    "CREATE",
    "Lead",
    "ld-135",
    "Added lead: Bajaj Finance retail expansion",
    ip(15, 62)
  ],
  [
    "al-052",
    daysAgo(18, 10, 30),
    "u-013",
    "Amit Tiwari",
    "finance_manager",
    "UPDATE",
    "Finance",
    "fin-2024-02",
    "Updated investment income for February",
    ip(12, 99)
  ],
  [
    "al-053",
    daysAgo(20, 9, 0),
    "u-002",
    "Priya Sharma",
    "branch_manager",
    "VIEW",
    "Report",
    "rpt-007",
    "Reviewed staff KPI report for Q4",
    ip(2, 22)
  ],
  [
    "al-054",
    daysAgo(22, 8, 30),
    "u-003",
    "Rohan Verma",
    "staff",
    "LOGOUT",
    "Staff",
    "sys",
    "Session terminated",
    ip(3, 45)
  ],
  [
    "al-055",
    daysAgo(25, 11, 0),
    "u-001",
    "Arjun Mehta",
    "admin",
    "EXPORT",
    "Report",
    "rpt-annual",
    "Exported annual compliance audit trail report",
    ip(1, 10)
  ],
  [
    "al-056",
    daysAgo(28, 14, 0),
    "u-009",
    "Meena Joshi",
    "admin",
    "UPDATE",
    "Staff",
    "usr-041",
    "Updated staff salary record for FY 2024-25",
    ip(1, 12)
  ],
  [
    "al-057",
    daysAgo(30, 8, 0),
    "u-004",
    "Neha Gupta",
    "finance_manager",
    "LOGIN",
    "Staff",
    "sys",
    "Start of month finance audit session",
    ip(4, 88)
  ]
];
const mockAuditLogs = raw.map(
  ([
    id,
    timestamp,
    userId,
    userName,
    userRole,
    action,
    resource,
    resourceId,
    details,
    ipAddress
  ]) => ({
    id,
    timestamp,
    userId,
    userName,
    userRole,
    action,
    resource,
    resourceId,
    details,
    ipAddress
  })
);
const PAGE_SIZE = 20;
const ACTION_STYLES = {
  CREATE: "bg-primary/10 text-primary border-primary/20",
  UPDATE: "bg-secondary/10 text-secondary border-secondary/20",
  DELETE: "bg-destructive/10 text-destructive border-destructive/20",
  LOGIN: "bg-muted text-muted-foreground border-border",
  LOGOUT: "bg-muted text-muted-foreground border-border",
  EXPORT: "bg-accent/20 text-accent-foreground border-accent/30",
  VIEW: "bg-card text-foreground border-border"
};
const RESOURCE_ICONS = {
  Branch: Building2,
  Staff: Users,
  Lead: UserCheck,
  Task: ClipboardList,
  Attendance: CalendarDays,
  Finance: ChartColumn,
  Report: FileText
};
const ROLE_LABELS = {
  admin: "Admin",
  branch_manager: "Branch Mgr",
  staff: "Staff",
  finance_manager: "Finance Mgr"
};
function formatTimestamp(d) {
  return d.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
}
function toDateString(d) {
  return d.toISOString().slice(0, 10);
}
function ActionBadge({ action }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold border ${ACTION_STYLES[action]}`,
      children: action
    }
  );
}
function ResourceCell({ resource }) {
  const Icon = RESOURCE_ICONS[resource];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-foreground whitespace-nowrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5 text-muted-foreground shrink-0" }),
    resource
  ] });
}
function RoleBadge({ role }) {
  const colors = {
    admin: "bg-primary/10 text-primary border-primary/20",
    branch_manager: "bg-secondary/10 text-secondary border-secondary/20",
    staff: "bg-muted text-muted-foreground border-border",
    finance_manager: "bg-accent/20 text-accent-foreground border-accent/30"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold border ${colors[role]}`,
      children: ROLE_LABELS[role]
    }
  );
}
function AccessDenied() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldOff, { className: "w-8 h-8 text-destructive" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground", children: "Access Denied" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1 max-w-xs", children: "Audit logs are restricted to administrators only. Contact your system admin to request access." })
    ] })
  ] });
}
function AuditLogsPage() {
  const { role } = useAuth();
  const [search, setSearch] = reactExports.useState("");
  const [actionFilter, setActionFilter] = reactExports.useState("all");
  const [roleFilter, setRoleFilter] = reactExports.useState("all");
  const [dateFrom, setDateFrom] = reactExports.useState("");
  const [dateTo, setDateTo] = reactExports.useState("");
  const [page, setPage] = reactExports.useState(1);
  const filtered = reactExports.useMemo(() => {
    if (role !== "admin") return [];
    let list = [...mockAuditLogs].sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
    );
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (l) => l.userName.toLowerCase().includes(q) || l.details.toLowerCase().includes(q) || l.resource.toLowerCase().includes(q)
      );
    }
    if (actionFilter !== "all") {
      list = list.filter((l) => l.action === actionFilter);
    }
    if (roleFilter !== "all") {
      list = list.filter((l) => l.userRole === roleFilter);
    }
    if (dateFrom) {
      const from = new Date(dateFrom);
      list = list.filter((l) => l.timestamp >= from);
    }
    if (dateTo) {
      const to = new Date(dateTo);
      to.setHours(23, 59, 59, 999);
      list = list.filter((l) => l.timestamp <= to);
    }
    return list;
  }, [search, actionFilter, roleFilter, dateFrom, dateTo, role]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  if (role !== "admin") return /* @__PURE__ */ jsxRuntimeExports.jsx(AccessDenied, {});
  function handleFilterChange(setter) {
    return (v) => {
      setter(v);
      setPage(1);
    };
  }
  function handleExport() {
    const rows = filtered.map((l) => ({
      Timestamp: formatTimestamp(l.timestamp),
      User: l.userName,
      Role: ROLE_LABELS[l.userRole],
      Action: l.action,
      Resource: l.resource,
      ResourceID: l.resourceId,
      Details: l.details,
      "IP Address": l.ipAddress
    }));
    exportToCSV(rows, "audit-logs");
  }
  const startDate = dateFrom || toDateString(new Date(Date.now() - 30 * 864e5));
  const endDate = dateTo || toDateString(/* @__PURE__ */ new Date());
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 sm:space-y-5", "data-ocid": "audit_logs.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Audit Logs",
        subtitle: "System activity and compliance trail",
        breadcrumbs: [
          { label: "Home" },
          { label: "Admin" },
          { label: "Audit Logs" }
        ],
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "rounded-xl gap-1.5 text-xs",
            onClick: handleExport,
            "data-ocid": "audit_logs.export_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
              "Export CSV"
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-card border border-border rounded-lg px-3 py-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3.5 h-3.5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: mockAuditLogs.length }),
          " ",
          "total entries"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-card border border-border rounded-lg px-3 py-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-3.5 h-3.5 text-secondary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: filtered.length }),
          " ",
          "matching"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-card border border-border rounded-lg px-3 py-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          startDate,
          " → ",
          endDate
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 6 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.2 },
        className: "bg-card rounded-2xl border border-border shadow-card p-3 sm:p-4",
        "data-ocid": "audit_logs.filters.panel",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 sm:gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[180px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-[11px]", children: "🔍" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Search user, resource, details…",
                value: search,
                onChange: (e) => {
                  setSearch(e.target.value);
                  setPage(1);
                },
                className: "pl-8 h-8 rounded-xl text-xs",
                "data-ocid": "audit_logs.search.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5 min-w-[130px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground font-medium px-0.5", children: "From" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "date",
                value: dateFrom,
                onChange: (e) => handleFilterChange(setDateFrom)(e.target.value),
                className: "h-8 rounded-xl text-xs",
                "data-ocid": "audit_logs.date_from.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5 min-w-[130px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground font-medium px-0.5", children: "To" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "date",
                value: dateTo,
                onChange: (e) => handleFilterChange(setDateTo)(e.target.value),
                className: "h-8 rounded-xl text-xs",
                "data-ocid": "audit_logs.date_to.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: actionFilter,
              onValueChange: handleFilterChange(setActionFilter),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "h-8 w-36 rounded-xl text-xs",
                    "data-ocid": "audit_logs.action.select",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Action" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Actions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "CREATE", children: "CREATE" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "UPDATE", children: "UPDATE" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "DELETE", children: "DELETE" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "LOGIN", children: "LOGIN" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "LOGOUT", children: "LOGOUT" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "EXPORT", children: "EXPORT" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "VIEW", children: "VIEW" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: roleFilter,
              onValueChange: handleFilterChange(setRoleFilter),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "h-8 w-40 rounded-xl text-xs",
                    "data-ocid": "audit_logs.role.select",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "User Role" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Roles" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "admin", children: "Admin" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "branch_manager", children: "Branch Manager" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "staff", children: "Staff" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "finance_manager", children: "Finance Manager" })
                ] })
              ]
            }
          ),
          (search || actionFilter !== "all" || roleFilter !== "all" || dateFrom || dateTo) && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "ghost",
              className: "h-8 rounded-xl text-xs text-muted-foreground",
              onClick: () => {
                setSearch("");
                setActionFilter("all");
                setRoleFilter("all");
                setDateFrom("");
                setDateTo("");
                setPage(1);
              },
              "data-ocid": "audit_logs.clear_filters.button",
              children: "Clear filters"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.25, delay: 0.05 },
        className: "bg-card rounded-2xl border border-border shadow-card overflow-hidden",
        "data-ocid": "audit_logs.table",
        children: [
          filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col items-center justify-center py-16 gap-3 text-center",
              "data-ocid": "audit_logs.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-6 h-6 text-muted-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "No audit entries found" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Try adjusting your filters or date range." })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-sm min-w-[700px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border bg-muted/20", children: [
              "Timestamp",
              "User",
              "Action",
              "Resource",
              "Details",
              "IP Address"
            ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "th",
              {
                className: "px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap",
                children: h
              },
              h
            )) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: paginated.map((log, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.tr,
              {
                initial: { opacity: 0, x: -6 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: idx * 0.025 },
                className: "border-b border-border last:border-0 hover:bg-muted/20 transition-colors",
                "data-ocid": `audit_logs.item.${(page - 1) * PAGE_SIZE + idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px]", children: formatTimestamp(log.timestamp) })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground whitespace-nowrap", children: log.userName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBadge, { role: log.userRole })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBadge, { action: log.action }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResourceCell, { resource: log.resource }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 max-w-[280px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground line-clamp-2 leading-relaxed", children: log.details }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: "font-mono text-[10px] px-1.5 py-0.5",
                      children: log.ipAddress
                    }
                  ) })
                ]
              },
              log.id
            )) })
          ] }) }),
          totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "Showing",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                (page - 1) * PAGE_SIZE + 1,
                "–",
                Math.min(page * PAGE_SIZE, filtered.length)
              ] }),
              " ",
              "of",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: filtered.length }),
              " ",
              "entries"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "icon",
                  variant: "ghost",
                  className: "h-7 w-7 rounded-lg",
                  disabled: page === 1,
                  onClick: () => setPage((p) => p - 1),
                  "data-ocid": "audit_logs.pagination_prev",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-3.5 h-3.5" })
                }
              ),
              Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                const pg = totalPages <= 5 ? i + 1 : page <= 3 ? i + 1 : page >= totalPages - 2 ? totalPages - 4 + i : page - 2 + i;
                return pg;
              }).map((pg) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setPage(pg),
                  className: `h-7 w-7 rounded-lg text-xs font-semibold transition-all ${pg === page ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`,
                  "data-ocid": `audit_logs.page.${pg}`,
                  children: pg
                },
                `pg-${pg}`
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "icon",
                  variant: "ghost",
                  className: "h-7 w-7 rounded-lg",
                  disabled: page === totalPages,
                  onClick: () => setPage((p) => p + 1),
                  "data-ocid": "audit_logs.pagination_next",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}
export {
  AuditLogsPage as default
};
