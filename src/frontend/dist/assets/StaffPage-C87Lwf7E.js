import { e as createLucideIcon, u as useNavigate, r as reactExports, d as mockUsers, j as jsxRuntimeExports, B as Button, U as Users, m as motion, k as Search, o as Check, X } from "./index-CgV9Taym.js";
import { I as Input } from "./input-CQX-6uHe.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BSYwbXVq.js";
import { B as BulkActionBar } from "./BulkActionBar-B8bgbp_D.js";
import { E as EmptyState } from "./EmptyState-COP87N-z.js";
import { F as FilterPanel } from "./FilterPanel-BsxdNak1.js";
import { S as StatCardSkeleton, C as CardSkeleton } from "./LoadingSkeleton-9AS8ogPa.js";
import { P as PageHeader } from "./PageHeader-CHVHFP_Q.js";
import { S as StatCard } from "./StatCard-DkWGxI9F.js";
import { S as StatusBadge } from "./StatusBadge-BopRiVPx.js";
import { e as exportToCSV } from "./csvExport-CI-f4_Rc.js";
import { D as Download } from "./download-CT_NJYb_.js";
import { P as Plus } from "./plus-C9sMXHJA.js";
import { U as UserCheck } from "./user-check-Cq4-6NA0.js";
import { U as UserMinus } from "./user-minus-C_DTFA8Z.js";
import { S as Shield } from "./shield-B-sXR3Uu.js";
import { E as Eye } from "./eye-BK4ofIs8.js";
import "./trash-2-D2vYGX4E.js";
import "./label-DBZIDZNQ.js";
import "./card-BIrGk5lN.js";
import "./minus-D6KT2NO-.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
];
const Grid3x3 = createLucideIcon("grid-3x3", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }],
  ["path", { d: "M14 4h7", key: "3xa0d5" }],
  ["path", { d: "M14 9h7", key: "1icrd9" }],
  ["path", { d: "M14 15h7", key: "1mj8o2" }],
  ["path", { d: "M14 20h7", key: "11slyb" }]
];
const LayoutList = createLucideIcon("layout-list", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
const Pencil = createLucideIcon("pencil", __iconNode);
const DEPARTMENTS = [
  "Sales",
  "Finance",
  "Operations",
  "HR",
  "Marketing",
  "IT"
];
const ROLES = [
  { value: "admin", label: "Admin" },
  { value: "branch_manager", label: "Branch Manager" },
  { value: "finance_manager", label: "Finance Manager" },
  { value: "staff", label: "Staff" }
];
const MODULES = [
  "Dashboard",
  "Branches",
  "Staff",
  "Leads",
  "Tasks",
  "Attendance",
  "Finance",
  "Performance"
];
const ROLE_PERMISSIONS = {
  admin: {
    Dashboard: true,
    Branches: true,
    Staff: true,
    Leads: true,
    Tasks: true,
    Attendance: true,
    Finance: true,
    Performance: true
  },
  branch_manager: {
    Dashboard: true,
    Branches: false,
    Staff: true,
    Leads: true,
    Tasks: true,
    Attendance: true,
    Finance: false,
    Performance: true
  },
  finance_manager: {
    Dashboard: true,
    Branches: false,
    Staff: false,
    Leads: false,
    Tasks: true,
    Attendance: false,
    Finance: true,
    Performance: true
  },
  staff: {
    Dashboard: true,
    Branches: false,
    Staff: false,
    Leads: true,
    Tasks: true,
    Attendance: true,
    Finance: false,
    Performance: false
  }
};
const ROLE_COLORS = {
  admin: "bg-primary/10 text-primary border-primary/20",
  branch_manager: "bg-secondary/10 text-secondary border-secondary/20",
  finance_manager: "bg-accent/20 text-accent-foreground border-accent/30",
  staff: "bg-muted text-muted-foreground border-border"
};
const SCORE_COLOR = (v) => v >= 90 ? "text-green-600" : v >= 75 ? "text-primary" : v >= 60 ? "text-amber-600" : "text-red-500";
const STAFF_FILTER_FIELDS = [
  { key: "name", label: "Name", type: "text", placeholder: "Search by name…" },
  {
    key: "department",
    label: "Department",
    type: "select",
    options: DEPARTMENTS.map((d) => ({ label: d, value: d }))
  },
  {
    key: "role",
    label: "Role",
    type: "select",
    options: ROLES.map((r) => ({ label: r.label, value: r.value }))
  },
  {
    key: "status",
    label: "Status",
    type: "select",
    options: [
      { label: "Active", value: "Active" },
      { label: "Inactive", value: "Inactive" },
      { label: "On Leave", value: "On Leave" }
    ]
  }
];
function usersToCSV(users) {
  return users.map((u) => ({
    Name: u.name,
    Email: u.email,
    Phone: u.phone,
    Role: u.role,
    Department: u.department,
    Designation: u.designation,
    Branch: u.branchName,
    Status: u.status,
    "Performance Score": u.performanceScore,
    "Join Date": u.joinDate
  }));
}
function RoleBadge({ role }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-lg border ${ROLE_COLORS[role]}`,
      children: role.replace("_", " ")
    }
  );
}
function ScoreGauge({ value }) {
  const color = value >= 90 ? "bg-green-500" : value >= 75 ? "bg-primary" : value >= 60 ? "bg-amber-500" : "bg-red-500";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `h-full rounded-full ${color}`,
        style: { width: `${value}%` }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-bold ${SCORE_COLOR(value)}`, children: value })
  ] });
}
function StaffGridCard({
  user,
  idx,
  onView,
  onEdit
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: idx * 0.04 },
      className: "bg-card rounded-2xl border border-border shadow-card p-4 hover:shadow-elevated transition-smooth group",
      "data-ocid": `staff.grid.item.${idx + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: user.avatar,
              alt: user.name,
              className: "w-11 h-11 rounded-xl object-cover border-2 border-border"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "icon",
                variant: "ghost",
                className: "h-7 w-7 rounded-lg",
                onClick: () => onView(user),
                "aria-label": "View profile",
                "data-ocid": `staff.grid.view_button.${idx + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "icon",
                variant: "ghost",
                className: "h-7 w-7 rounded-lg",
                onClick: () => onEdit(user),
                "aria-label": "Edit staff",
                "data-ocid": `staff.grid.edit_button.${idx + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => onView(user),
            className: "text-left w-full min-w-0 block",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-display font-semibold text-foreground truncate hover:text-primary transition-colors", children: user.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground truncate", children: user.designation })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBadge, { role: user.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: user.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[11px] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: user.department }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: user.branchName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-1 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Performance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreGauge, { value: user.performanceScore })
          ] })
        ] })
      ]
    }
  );
}
function RoleMatrix() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      className: "bg-card rounded-2xl border border-border shadow-card overflow-hidden",
      "data-ocid": "staff.role_matrix.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-display font-semibold text-foreground", children: "Role Permission Matrix" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Access rights for each role across all system modules" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", style: { minWidth: "560px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted-foreground w-40", children: "Role" }),
            MODULES.map((mod) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "th",
              {
                className: "px-3 py-3 text-center text-[10px] font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap",
                children: mod
              },
              mod
            ))
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: ROLES.map(({ value: roleVal, label }, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "border-b border-border last:border-0 hover:bg-muted/10 transition-colors",
              "data-ocid": `staff.role_matrix.row.${idx + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-3.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBadge, { role: roleVal }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: label })
                ] }),
                MODULES.map((mod) => {
                  var _a;
                  const allowed = ((_a = ROLE_PERMISSIONS[roleVal]) == null ? void 0 : _a[mod]) ?? false;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3.5 text-center", children: allowed ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-50 border border-green-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 text-green-600" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-6 h-6 rounded-full bg-muted/60 border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3 text-muted-foreground" }) }) }, mod);
                })
              ]
            },
            roleVal
          )) })
        ] }) })
      ]
    }
  );
}
function StaffPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = reactExports.useState("directory");
  const [viewMode, setViewMode] = reactExports.useState("grid");
  const [search, setSearch] = reactExports.useState("");
  const [deptFilter, setDeptFilter] = reactExports.useState("all");
  const [roleFilter, setRoleFilter] = reactExports.useState("all");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [loading] = reactExports.useState(false);
  const [filterValues, setFilterValues] = reactExports.useState({});
  const [selectedIds, setSelectedIds] = reactExports.useState([]);
  const staffList = reactExports.useMemo(
    () => mockUsers.filter((u) => u.role !== "admin"),
    []
  );
  const filtered = reactExports.useMemo(() => {
    let list = [...staffList];
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.designation.toLowerCase().includes(q) || u.branchName.toLowerCase().includes(q)
      );
    }
    if (deptFilter !== "all")
      list = list.filter((u) => u.department === deptFilter);
    if (roleFilter !== "all") list = list.filter((u) => u.role === roleFilter);
    if (statusFilter !== "all")
      list = list.filter((u) => u.status === statusFilter);
    const fpName = filterValues.name;
    const fpDept = filterValues.department;
    const fpRole = filterValues.role;
    const fpStatus = filterValues.status;
    if (fpName == null ? void 0 : fpName.trim()) {
      const q = fpName.toLowerCase();
      list = list.filter(
        (u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
      );
    }
    if (fpDept) list = list.filter((u) => u.department === fpDept);
    if (fpRole) list = list.filter((u) => u.role === fpRole);
    if (fpStatus) list = list.filter((u) => u.status === fpStatus);
    return list;
  }, [staffList, search, deptFilter, roleFilter, statusFilter, filterValues]);
  const stats = reactExports.useMemo(() => {
    const active = staffList.filter((u) => u.status === "Active").length;
    const onLeave = staffList.filter((u) => u.status === "On Leave").length;
    const depts = new Set(staffList.map((u) => u.department)).size;
    return { total: staffList.length, active, depts, onLeave };
  }, [staffList]);
  function handleExportAll() {
    exportToCSV(usersToCSV(filtered), "staff_export");
  }
  function handleExportSelected() {
    const selected = filtered.filter((u) => selectedIds.includes(u.id));
    exportToCSV(usersToCSV(selected), "staff_selected_export");
  }
  function handleBulkDelete() {
    console.log("Delete staff:", selectedIds);
    setSelectedIds([]);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 sm:space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Staff Management",
        subtitle: `${staffList.length} team members across all branches`,
        breadcrumbs: [{ label: "Home" }, { label: "Staff" }],
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "rounded-xl gap-1.5",
              onClick: handleExportAll,
              "data-ocid": "staff.export_csv.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Export CSV" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "rounded-xl gap-1.5",
              onClick: () => navigate({ to: "/staff/new" }),
              "data-ocid": "staff.add_staff.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden xs:inline", children: "Add Staff Member" })
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4", children: loading ? Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatCardSkeleton, {}, `stat-skel-${["a", "b", "c", "d"][i]}`)) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "Total Staff",
          value: 127,
          icon: Users,
          iconColor: "text-primary",
          change: 5,
          "data-ocid": "staff.stat.total"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "Active",
          value: stats.active,
          icon: UserCheck,
          iconColor: "text-green-600",
          change: 3,
          "data-ocid": "staff.stat.active"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "Departments",
          value: 8,
          icon: Grid3x3,
          iconColor: "text-secondary",
          "data-ocid": "staff.stat.departments"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "On Leave",
          value: 6,
          icon: UserMinus,
          iconColor: "text-amber-600",
          change: -2,
          "data-ocid": "staff.stat.on_leave"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 bg-muted/40 p-1 rounded-xl w-full sm:w-fit border border-border overflow-x-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setActiveTab("directory"),
          className: `px-4 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${activeTab === "directory" ? "bg-card shadow-card text-foreground" : "text-muted-foreground hover:text-foreground"}`,
          "data-ocid": "staff.directory.tab",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5 inline mr-1.5" }),
            "Directory"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setActiveTab("role-matrix"),
          className: `px-4 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${activeTab === "role-matrix" ? "bg-card shadow-card text-foreground" : "text-muted-foreground hover:text-foreground"}`,
          "data-ocid": "staff.role_matrix.tab",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-3.5 h-3.5 inline mr-1.5" }),
            "Role Matrix"
          ]
        }
      )
    ] }),
    activeTab === "directory" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.25 },
        className: "space-y-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-2xl border border-border shadow-card p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 sm:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[160px] sm:min-w-48", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "Search name, email…",
                  value: search,
                  onChange: (e) => setSearch(e.target.value),
                  className: "pl-9 h-8 rounded-xl text-sm",
                  "data-ocid": "staff.search.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: deptFilter, onValueChange: setDeptFilter, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "h-8 w-28 sm:w-36 rounded-xl text-xs",
                  "data-ocid": "staff.department.select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Department" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Depts" }),
                DEPARTMENTS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: d, children: d }, d))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: roleFilter, onValueChange: setRoleFilter, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "h-8 w-28 sm:w-36 rounded-xl text-xs",
                  "data-ocid": "staff.role.select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Role" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Roles" }),
                ROLES.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r.value, children: r.label }, r.value))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: statusFilter, onValueChange: setStatusFilter, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "h-8 w-28 sm:w-32 rounded-xl text-xs",
                  "data-ocid": "staff.status.select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Status" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Statuses" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Active", children: "Active" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Inactive", children: "Inactive" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "On Leave", children: "On Leave" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-8 rounded-xl gap-1.5 text-xs",
                onClick: handleExportAll,
                "data-ocid": "staff.filter_row.export_csv.button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Export CSV" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FilterPanel,
              {
                filters: STAFF_FILTER_FIELDS,
                presetKey: "staff",
                onFilterChange: setFilterValues
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 bg-muted/40 rounded-xl p-1 border border-border ml-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setViewMode("grid"),
                  className: `p-1.5 rounded-lg transition-all ${viewMode === "grid" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`,
                  "data-ocid": "staff.grid_view.toggle",
                  "aria-label": "Grid view",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Grid3x3, { className: "w-3.5 h-3.5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setViewMode("table"),
                  className: `p-1.5 rounded-lg transition-all ${viewMode === "table" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`,
                  "data-ocid": "staff.table_view.toggle",
                  "aria-label": "Table view",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutList, { className: "w-3.5 h-3.5" })
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between px-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            "Showing",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: filtered.length }),
            " ",
            "of ",
            staffList.length,
            " staff members"
          ] }) }),
          filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-2xl border border-border shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            EmptyState,
            {
              icon: Users,
              title: "No staff members found",
              description: "Try adjusting your search terms or filters.",
              "data-ocid": "staff.empty_state"
            }
          ) }),
          viewMode === "grid" && filtered.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4", children: loading ? ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(CardSkeleton, {}, k)) : filtered.map((user, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            StaffGridCard,
            {
              user,
              idx,
              onView: (u) => navigate({
                to: "/staff/$staffId",
                params: { staffId: u.id }
              }),
              onEdit: (u) => navigate({
                to: "/staff/$staffId/edit",
                params: { staffId: u.id }
              })
            },
            user.id
          )) }),
          viewMode === "table" && filtered.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              className: "bg-card rounded-2xl border border-border shadow-card overflow-hidden",
              "data-ocid": "staff.table",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", style: { minWidth: "700px" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/20", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3 w-10 sticky left-0 bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "aria-label": "Select all",
                      checked: filtered.length > 0 && filtered.every((u) => selectedIds.includes(u.id)),
                      onChange: () => {
                        const allSelected = filtered.every(
                          (u) => selectedIds.includes(u.id)
                        );
                        if (allSelected) {
                          setSelectedIds(
                            (prev) => prev.filter(
                              (id) => !filtered.some((u) => u.id === id)
                            )
                          );
                        } else {
                          setSelectedIds((prev) => [
                            ...prev,
                            ...filtered.filter((u) => !prev.includes(u.id)).map((u) => u.id)
                          ]);
                        }
                      },
                      className: "rounded border-border accent-primary cursor-pointer",
                      "data-ocid": "staff.table.select_all.checkbox"
                    }
                  ) }),
                  [
                    "Staff Member",
                    "Department",
                    "Role",
                    "Branch",
                    "Performance",
                    "Status",
                    "Actions"
                  ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "th",
                    {
                      className: "px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap",
                      children: h
                    },
                    h
                  ))
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.map((user, idx) => {
                  const isSelected = selectedIds.includes(user.id);
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.tr,
                    {
                      initial: { opacity: 0, x: -8 },
                      animate: { opacity: 1, x: 0 },
                      transition: { delay: idx * 0.03 },
                      className: `border-b border-border last:border-0 hover:bg-muted/10 transition-colors group ${isSelected ? "bg-primary/5" : ""}`,
                      "data-ocid": `staff.table.item.${idx + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 w-10 sticky left-0 bg-card group-hover:bg-muted/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "checkbox",
                            "aria-label": `Select ${user.name}`,
                            checked: isSelected,
                            onChange: () => {
                              setSelectedIds(
                                (prev) => prev.includes(user.id) ? prev.filter((id) => id !== user.id) : [...prev, user.id]
                              );
                            },
                            className: "rounded border-border accent-primary cursor-pointer",
                            "data-ocid": `staff.table.checkbox.${idx + 1}`
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            onClick: () => navigate({
                              to: "/staff/$staffId",
                              params: { staffId: user.id }
                            }),
                            className: "flex items-center gap-2.5 group/name text-left",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "img",
                                {
                                  src: user.avatar,
                                  alt: user.name,
                                  className: "w-8 h-8 rounded-xl object-cover shrink-0"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground truncate group-hover/name:text-primary transition-colors", children: user.name }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate", children: user.email })
                              ] })
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground", children: user.department }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: user.designation })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBadge, { role: user.role }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground", children: user.branchName }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreGauge, { value: user.performanceScore }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: user.status }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Button,
                            {
                              size: "icon",
                              variant: "ghost",
                              className: "h-7 w-7 rounded-lg",
                              onClick: () => navigate({
                                to: "/staff/$staffId",
                                params: { staffId: user.id }
                              }),
                              "aria-label": "View profile",
                              "data-ocid": `staff.table.view_button.${idx + 1}`,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Button,
                            {
                              size: "icon",
                              variant: "ghost",
                              className: "h-7 w-7 rounded-lg",
                              onClick: () => navigate({
                                to: "/staff/$staffId/edit",
                                params: { staffId: user.id }
                              }),
                              "aria-label": "Edit staff",
                              "data-ocid": `staff.table.edit_button.${idx + 1}`,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-3.5 h-3.5" })
                            }
                          )
                        ] }) })
                      ]
                    },
                    user.id
                  );
                }) })
              ] }) })
            }
          )
        ]
      }
    ),
    activeTab === "role-matrix" && /* @__PURE__ */ jsxRuntimeExports.jsx(RoleMatrix, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BulkActionBar,
      {
        count: selectedIds.length,
        onExport: handleExportSelected,
        onDelete: handleBulkDelete,
        onDeselect: () => setSelectedIds([])
      }
    )
  ] });
}
export {
  StaffPage as default
};
