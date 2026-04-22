import { b as createLucideIcon, r as reactExports, a as mockUsers, j as jsxRuntimeExports, B as Button, U as Users, m as motion, i as Search, X } from "./index-BjKYYUic.js";
import { I as Input, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, C as Check } from "./select-Bt-NdUTF.js";
import { L as Label } from "./dialog-u123pluM.js";
import { P as Plus, E as EmptyState, M as ModalForm } from "./ModalForm-a_27LVw7.js";
import { S as StatCardSkeleton, C as CardSkeleton } from "./LoadingSkeleton-BFnm6bxJ.js";
import { P as PageHeader, S as StatCard } from "./StatCard-DFAq4Vlm.js";
import { S as StatusBadge } from "./StatusBadge-lygjOIG7.js";
import { m as mockBranches } from "./mockBranches-D8s3Khu1.js";
import { U as UserCheck, S as Shield } from "./user-check-CflAJNtl.js";
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
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
];
const UserMinus = createLucideIcon("user-minus", __iconNode);
const DEPARTMENTS = [
  "Sales",
  "Finance",
  "Operations",
  "HR",
  "Marketing",
  "IT"
];
const ALL_DEPARTMENTS = [
  ...DEPARTMENTS,
  "Legal",
  "Support"
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "icon",
              variant: "ghost",
              className: "h-7 w-7 rounded-lg",
              onClick: () => onEdit(user),
              "data-ocid": `staff.grid.edit_button.${idx + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  "aria-label": "Edit",
                  className: "w-3.5 h-3.5",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 2,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Edit" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" })
                  ]
                }
              )
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-display font-semibold text-foreground truncate", children: user.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground truncate", children: user.designation })
        ] }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
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
function StaffFormFields({
  form,
  setForm
}) {
  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium", children: "Full Name *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Full name",
            value: form.name,
            onChange: (e) => update("name", e.target.value),
            className: "rounded-xl text-sm h-9",
            "data-ocid": "staff_form.name.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium", children: "Email *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "email",
            placeholder: "email@fincore.in",
            value: form.email,
            onChange: (e) => update("email", e.target.value),
            className: "rounded-xl text-sm h-9",
            "data-ocid": "staff_form.email.input"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium", children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "+91 …",
            value: form.phone,
            onChange: (e) => update("phone", e.target.value),
            className: "rounded-xl text-sm h-9",
            "data-ocid": "staff_form.phone.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium", children: "Designation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Job title",
            value: form.designation,
            onChange: (e) => update("designation", e.target.value),
            className: "rounded-xl text-sm h-9",
            "data-ocid": "staff_form.designation.input"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium", children: "Department" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: form.department,
            onValueChange: (v) => update("department", v),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "rounded-xl text-sm h-9",
                  "data-ocid": "staff_form.department.select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select department" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ALL_DEPARTMENTS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: d, children: d }, d)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium", children: "Role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: form.role,
            onValueChange: (v) => update("role", v),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "rounded-xl text-sm h-9",
                  "data-ocid": "staff_form.role.select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Assign role" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ROLES.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r.value, children: r.label }, r.value)) })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium", children: "Branch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: form.branchId,
            onValueChange: (v) => update("branchId", v),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "rounded-xl text-sm h-9",
                  "data-ocid": "staff_form.branch.select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Assign branch" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hq", children: "Head Office" }),
                mockBranches.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: b.id, children: b.name }, b.id))
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: form.status,
            onValueChange: (v) => update("status", v),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "rounded-xl text-sm h-9",
                  "data-ocid": "staff_form.status.select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Active", children: "Active" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Inactive", children: "Inactive" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "On Leave", children: "On Leave" })
              ] })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function StaffPage() {
  const [activeTab, setActiveTab] = reactExports.useState("directory");
  const [viewMode, setViewMode] = reactExports.useState("grid");
  const [search, setSearch] = reactExports.useState("");
  const [deptFilter, setDeptFilter] = reactExports.useState("all");
  const [roleFilter, setRoleFilter] = reactExports.useState("all");
  const [branchFilter, setBranchFilter] = reactExports.useState("all");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [loading] = reactExports.useState(false);
  const [showAddModal, setShowAddModal] = reactExports.useState(false);
  const [editUser, setEditUser] = reactExports.useState(null);
  const [saving, setSaving] = reactExports.useState(false);
  const emptyForm = {
    name: "",
    email: "",
    phone: "",
    designation: "",
    department: "",
    role: "",
    branchId: "",
    status: "Active"
  };
  const [form, setForm] = reactExports.useState(emptyForm);
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
    if (branchFilter !== "all")
      list = list.filter((u) => u.branchId === branchFilter);
    if (statusFilter !== "all")
      list = list.filter((u) => u.status === statusFilter);
    return list;
  }, [staffList, search, deptFilter, roleFilter, branchFilter, statusFilter]);
  const stats = reactExports.useMemo(() => {
    const active = staffList.filter((u) => u.status === "Active").length;
    const onLeave = staffList.filter((u) => u.status === "On Leave").length;
    const depts = new Set(staffList.map((u) => u.department)).size;
    return { total: staffList.length, active, depts, onLeave };
  }, [staffList]);
  function openAdd() {
    setForm(emptyForm);
    setShowAddModal(true);
  }
  function openEdit(u) {
    setForm({
      name: u.name,
      email: u.email,
      phone: u.phone,
      designation: u.designation,
      department: u.department,
      role: u.role,
      branchId: u.branchId,
      status: u.status
    });
    setEditUser(u);
  }
  function handleSave() {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setShowAddModal(false);
      setEditUser(null);
    }, 1100);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 sm:space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Staff Management",
        subtitle: `${staffList.length} team members across all branches`,
        breadcrumbs: [{ label: "Home" }, { label: "Staff" }],
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "rounded-xl gap-1.5",
            onClick: openAdd,
            "data-ocid": "staff.add_staff.open_modal_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
              "Add Staff Member"
            ]
          }
        )
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
          className: `px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeTab === "directory" ? "bg-card shadow-card text-foreground" : "text-muted-foreground hover:text-foreground"}`,
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
          className: `px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeTab === "role-matrix" ? "bg-card shadow-card text-foreground" : "text-muted-foreground hover:text-foreground"}`,
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-2xl border border-border shadow-card p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-48", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "Search name, email, role, branch…",
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
                  className: "h-8 w-36 rounded-xl text-xs",
                  "data-ocid": "staff.department.select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Department" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Departments" }),
                DEPARTMENTS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: d, children: d }, d))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: roleFilter, onValueChange: setRoleFilter, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "h-8 w-36 rounded-xl text-xs",
                  "data-ocid": "staff.role.select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Role" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Roles" }),
                ROLES.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r.value, children: r.label }, r.value))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: branchFilter, onValueChange: setBranchFilter, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "h-8 w-36 rounded-xl text-xs",
                  "data-ocid": "staff.branch.select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Branch" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Branches" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hq", children: "Head Office" }),
                mockBranches.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: b.id, children: b.name }, b.id))
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: statusFilter, onValueChange: setStatusFilter, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "h-8 w-32 rounded-xl text-xs",
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
          viewMode === "grid" && filtered.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", children: loading ? ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(CardSkeleton, {}, k)) : filtered.map((user, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            StaffGridCard,
            {
              user,
              idx,
              onEdit: openEdit
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
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border bg-muted/20", children: [
                  "Staff Member",
                  "Department",
                  "Role",
                  "Branch",
                  "Performance",
                  "Attendance",
                  "Actions"
                ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "th",
                  {
                    className: "px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap",
                    children: h
                  },
                  h
                )) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.map((user, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.tr,
                  {
                    initial: { opacity: 0, x: -8 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: idx * 0.03 },
                    className: "border-b border-border last:border-0 hover:bg-muted/10 transition-colors group",
                    "data-ocid": `staff.table.item.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: user.avatar,
                            alt: user.name,
                            className: "w-8 h-8 rounded-xl object-cover"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground truncate", children: user.name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate", children: user.email })
                        ] })
                      ] }) }),
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
                            onClick: () => openEdit(user),
                            "data-ocid": `staff.table.edit_button.${idx + 1}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "svg",
                              {
                                className: "w-3.5 h-3.5",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: 2,
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Edit" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" })
                                ]
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            size: "icon",
                            variant: "ghost",
                            className: "h-7 w-7 rounded-lg text-destructive hover:text-destructive",
                            "data-ocid": `staff.table.delete_button.${idx + 1}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" })
                          }
                        )
                      ] }) })
                    ]
                  },
                  user.id
                )) })
              ] }) })
            }
          )
        ]
      }
    ),
    activeTab === "role-matrix" && /* @__PURE__ */ jsxRuntimeExports.jsx(RoleMatrix, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModalForm,
      {
        open: showAddModal,
        onOpenChange: setShowAddModal,
        title: "Add Staff Member",
        description: "Create a new employee record.",
        onSubmit: handleSave,
        submitLabel: "Create Staff",
        loading: saving,
        "data-ocid": "add_staff.dialog",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(StaffFormFields, { form, setForm })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModalForm,
      {
        open: editUser !== null,
        onOpenChange: (open) => {
          if (!open) setEditUser(null);
        },
        title: `Edit Staff — ${(editUser == null ? void 0 : editUser.name) ?? ""}`,
        description: "Update employee information.",
        onSubmit: handleSave,
        submitLabel: "Save Changes",
        loading: saving,
        "data-ocid": "edit_staff.dialog",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(StaffFormFields, { form, setForm })
      }
    )
  ] });
}
export {
  StaffPage as default
};
