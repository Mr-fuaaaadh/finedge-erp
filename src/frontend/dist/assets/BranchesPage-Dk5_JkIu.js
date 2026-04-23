import { b as createLucideIcon, r as reactExports, a as mockUsers, j as jsxRuntimeExports, B as Button, h as Building2, d as TrendingUp, U as Users, m as motion, i as Search, k as ChevronLeft, l as ChevronRight } from "./index--w3DYRFQ.js";
import { I as Input, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-Bi2YwvFw.js";
import { L as Label } from "./dialog-BKDxYpuf.js";
import { B as BulkActionBar } from "./BulkActionBar-CicLN5Gj.js";
import { P as Plus, E as EmptyState, M as ModalForm } from "./ModalForm-BfCynOlA.js";
import { F as FilterPanel, T as Trash2 } from "./FilterPanel-DMESu4f3.js";
import { S as StatCardSkeleton } from "./LoadingSkeleton-1gnXzP5H.js";
import { P as PageHeader, D as Download, e as exportToCSV } from "./csvExport-DThDKCEu.js";
import { S as StatCard } from "./StatCard-Dmm7jm2H.js";
import { S as StatusBadge } from "./StatusBadge-D9PldgHP.js";
import { m as mockBranches } from "./mockBranches-D8s3Khu1.js";
import { M as Medal } from "./medal-pQMWa539.js";
import { P as Phone } from "./phone-CI2nt2_X.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
];
const SquarePen = createLucideIcon("square-pen", __iconNode);
const PAGE_SIZE = 6;
const RANK_COLORS = {
  1: "bg-amber-50 border-amber-300 text-amber-700",
  2: "bg-muted/30 border-border text-muted-foreground",
  3: "bg-orange-50 border-orange-300 text-orange-700"
};
const RANK_MEDAL = { 1: "🥇", 2: "🥈", 3: "🥉" };
function formatRevenue(v) {
  if (v >= 1e6) return `₹${(v / 1e6).toFixed(2)}M`;
  if (v >= 1e3) return `₹${(v / 1e3).toFixed(0)}K`;
  return `₹${v}`;
}
function PerformanceBar({ value }) {
  const color = value >= 90 ? "bg-green-500" : value >= 75 ? "bg-primary" : value >= 60 ? "bg-amber-500" : "bg-red-500";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `h-full rounded-full ${color}`,
        style: { width: `${value}%` }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-foreground w-8", children: [
      value,
      "%"
    ] })
  ] });
}
const BRANCH_FILTER_FIELDS = [
  {
    key: "name",
    label: "Branch Name",
    type: "text",
    placeholder: "Search branch name…"
  },
  {
    key: "status",
    label: "Status",
    type: "select",
    options: [
      { label: "Active", value: "Active" },
      { label: "Inactive", value: "Inactive" },
      { label: "Suspended", value: "Suspended" }
    ]
  },
  {
    key: "city",
    label: "City",
    type: "text",
    placeholder: "Search city…"
  }
];
function branchesToCSV(branches) {
  return branches.map((b) => ({
    Name: b.name,
    Code: b.code,
    City: b.city,
    State: b.state,
    Status: b.status,
    Manager: b.managerName,
    "Staff Count": b.staffCount,
    Revenue: b.revenue,
    "Target Revenue": b.targetRevenue,
    Performance: `${b.performance}%`,
    Phone: b.phone
  }));
}
function BranchesPage() {
  const [activeTab, setActiveTab] = reactExports.useState("directory");
  const [search, setSearch] = reactExports.useState("");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [sortField, setSortField] = reactExports.useState("name");
  const [page, setPage] = reactExports.useState(1);
  const [loading] = reactExports.useState(false);
  const [showAddModal, setShowAddModal] = reactExports.useState(false);
  const [editBranch, setEditBranch] = reactExports.useState(null);
  const [saving, setSaving] = reactExports.useState(false);
  const [filterValues, setFilterValues] = reactExports.useState({});
  const [selectedIds, setSelectedIds] = reactExports.useState([]);
  const [form, setForm] = reactExports.useState({
    name: "",
    code: "",
    city: "",
    state: "",
    address: "",
    phone: "",
    managerId: "",
    status: "Active"
  });
  const managers = reactExports.useMemo(
    () => mockUsers.filter(
      (u) => u.role === "branch_manager" || u.role === "admin"
    ),
    []
  );
  const filtered = reactExports.useMemo(() => {
    let list = [...mockBranches];
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (b) => b.name.toLowerCase().includes(q) || b.city.toLowerCase().includes(q) || b.managerName.toLowerCase().includes(q) || b.code.toLowerCase().includes(q)
      );
    }
    if (statusFilter !== "all") {
      list = list.filter((b) => b.status === statusFilter);
    }
    const fpName = filterValues.name;
    const fpStatus = filterValues.status;
    const fpCity = filterValues.city;
    if (fpName == null ? void 0 : fpName.trim()) {
      const q = fpName.toLowerCase();
      list = list.filter(
        (b) => b.name.toLowerCase().includes(q) || b.code.toLowerCase().includes(q)
      );
    }
    if (fpStatus) {
      list = list.filter((b) => b.status === fpStatus);
    }
    if (fpCity == null ? void 0 : fpCity.trim()) {
      const q = fpCity.toLowerCase();
      list = list.filter((b) => b.city.toLowerCase().includes(q));
    }
    list.sort((a, b) => {
      if (sortField === "revenue") return b.revenue - a.revenue;
      if (sortField === "staffCount") return b.staffCount - a.staffCount;
      return a.name.localeCompare(b.name);
    });
    return list;
  }, [search, statusFilter, sortField, filterValues]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const ranked = reactExports.useMemo(
    () => [...mockBranches].sort((a, b) => a.rank - b.rank),
    []
  );
  const stats = reactExports.useMemo(() => {
    const active = mockBranches.filter((b) => b.status === "Active").length;
    const totalStaff = mockBranches.reduce((s, b) => s + b.staffCount, 0);
    const totalRev = mockBranches.reduce((s, b) => s + b.revenue, 0);
    return { active, totalStaff, totalRev };
  }, []);
  function openAdd() {
    setForm({
      name: "",
      code: "",
      city: "",
      state: "",
      address: "",
      phone: "",
      managerId: "",
      status: "Active"
    });
    setShowAddModal(true);
  }
  function openEdit(b) {
    setForm({
      name: b.name,
      code: b.code,
      city: b.city,
      state: b.state,
      address: b.address,
      phone: b.phone,
      managerId: b.managerId,
      status: b.status
    });
    setEditBranch(b);
  }
  function handleSave() {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setShowAddModal(false);
      setEditBranch(null);
    }, 1100);
  }
  function handleSearchChange(v) {
    setSearch(v);
    setPage(1);
  }
  function handleStatusChange(v) {
    setStatusFilter(v);
    setPage(1);
  }
  function handleFilterChange(values) {
    setFilterValues(values);
    setPage(1);
  }
  function handleExportAll() {
    exportToCSV(branchesToCSV(filtered), "branches_export");
  }
  function handleExportSelected() {
    const selected = filtered.filter((b) => selectedIds.includes(b.id));
    exportToCSV(branchesToCSV(selected), "branches_selected_export");
  }
  function handleBulkDelete() {
    console.log("Delete branches:", selectedIds);
    setSelectedIds([]);
  }
  function toggleSelection(id) {
    setSelectedIds(
      (prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }
  function toggleAllPage() {
    const pageIds2 = paginated.map((b) => b.id);
    const allSelected = pageIds2.every((id) => selectedIds.includes(id));
    if (allSelected) {
      setSelectedIds((prev) => prev.filter((id) => !pageIds2.includes(id)));
    } else {
      setSelectedIds((prev) => [
        ...prev,
        ...pageIds2.filter((id) => !prev.includes(id))
      ]);
    }
  }
  const pageIds = paginated.map((b) => b.id);
  const allPageSelected = pageIds.length > 0 && pageIds.every((id) => selectedIds.includes(id));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 sm:space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Branch Management",
        subtitle: `${mockBranches.length} branches across India`,
        breadcrumbs: [{ label: "Home" }, { label: "Branches" }],
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "rounded-xl gap-1.5",
              onClick: handleExportAll,
              "data-ocid": "branches.export_csv.button",
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
              onClick: openAdd,
              "data-ocid": "branches.add_branch.open_modal_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden xs:inline sm:inline", children: "Add Branch" })
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4", children: loading ? ["sk-a", "sk-b", "sk-c", "sk-d"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatCardSkeleton, {}, k)) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "Total Branches",
          value: mockBranches.length,
          icon: Building2,
          iconColor: "text-primary",
          change: 2,
          "data-ocid": "branches.stat.total"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "Active Branches",
          value: stats.active,
          icon: TrendingUp,
          iconColor: "text-green-600",
          change: 0,
          "data-ocid": "branches.stat.active"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "Total Staff",
          value: stats.totalStaff,
          icon: Users,
          iconColor: "text-secondary",
          change: 5,
          "data-ocid": "branches.stat.staff"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "Monthly Revenue",
          value: "$2.4M",
          icon: TrendingUp,
          iconColor: "text-accent-foreground",
          change: 8,
          "data-ocid": "branches.stat.revenue"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 bg-muted/40 p-1 rounded-xl w-full sm:w-fit border border-border overflow-x-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setActiveTab("directory"),
          className: `px-4 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${activeTab === "directory" ? "bg-card shadow-card text-foreground" : "text-muted-foreground hover:text-foreground"}`,
          "data-ocid": "branches.directory.tab",
          children: "Directory"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setActiveTab("ranking"),
          className: `px-4 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${activeTab === "ranking" ? "bg-card shadow-card text-foreground" : "text-muted-foreground hover:text-foreground"}`,
          "data-ocid": "branches.ranking.tab",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Medal, { className: "w-3.5 h-3.5 inline mr-1.5" }),
            "Branch Ranking"
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
        className: "bg-card rounded-2xl border border-border shadow-card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 sm:gap-3 p-3 sm:p-4 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[160px] sm:min-w-48", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "Search branches…",
                  value: search,
                  onChange: (e) => handleSearchChange(e.target.value),
                  className: "pl-9 h-8 rounded-xl text-sm",
                  "data-ocid": "branches.search.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: statusFilter, onValueChange: handleStatusChange, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "h-8 w-32 sm:w-36 rounded-xl text-xs",
                  "data-ocid": "branches.status.select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Status" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Statuses" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Active", children: "Active" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Inactive", children: "Inactive" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Suspended", children: "Suspended" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: sortField,
                onValueChange: (v) => setSortField(v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "h-8 w-32 sm:w-36 rounded-xl text-xs",
                      "data-ocid": "branches.sort.select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Sort by" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "name", children: "Sort: Name" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "revenue", children: "Sort: Revenue" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "staffCount", children: "Sort: Staff Count" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-8 rounded-xl gap-1.5 text-xs",
                onClick: handleExportAll,
                "data-ocid": "branches.filter_row.export_csv.button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Export CSV" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              FilterPanel,
              {
                filters: BRANCH_FILTER_FIELDS,
                presetKey: "branches",
                onFilterChange: handleFilterChange
              }
            )
          ] }),
          paginated.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            EmptyState,
            {
              icon: Building2,
              title: "No branches found",
              description: "Try adjusting your search or filters.",
              "data-ocid": "branches.empty_state"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "table",
            {
              className: "w-full text-left text-sm",
              style: { minWidth: "640px" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/20", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3 w-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "aria-label": "Select all on page",
                      checked: allPageSelected,
                      onChange: toggleAllPage,
                      className: "rounded border-border accent-primary cursor-pointer",
                      "data-ocid": "branches.select_all.checkbox"
                    }
                  ) }),
                  [
                    "Branch",
                    "Location",
                    "Manager",
                    "Staff",
                    "Revenue",
                    "Performance",
                    "Status",
                    "Actions"
                  ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "th",
                    {
                      className: "px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap",
                      children: h
                    },
                    h
                  ))
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: paginated.map((branch, idx) => {
                  const isSelected = selectedIds.includes(branch.id);
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.tr,
                    {
                      initial: { opacity: 0, x: -8 },
                      animate: { opacity: 1, x: 0 },
                      transition: { delay: idx * 0.04 },
                      className: `border-b border-border last:border-0 hover:bg-muted/20 transition-colors group ${isSelected ? "bg-primary/5" : ""}`,
                      "data-ocid": `branches.item.${idx + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 w-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "checkbox",
                            "aria-label": `Select ${branch.name}`,
                            checked: isSelected,
                            onChange: () => toggleSelection(branch.id),
                            className: "rounded border-border accent-primary cursor-pointer",
                            "data-ocid": `branches.checkbox.${idx + 1}`
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: branch.name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground font-mono", children: branch.code })
                        ] }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3 shrink-0" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                            branch.city,
                            ", ",
                            branch.state
                          ] })
                        ] }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground", children: branch.managerName }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: branch.staffCount }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: formatRevenue(branch.revenue) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
                            "of ",
                            formatRevenue(branch.targetRevenue)
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PerformanceBar, { value: branch.performance }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: branch.status }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Button,
                            {
                              size: "icon",
                              variant: "ghost",
                              className: "h-7 w-7 rounded-lg",
                              "data-ocid": `branches.edit_button.${idx + 1}`,
                              onClick: () => openEdit(branch),
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-3.5 h-3.5" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Button,
                            {
                              size: "icon",
                              variant: "ghost",
                              className: "h-7 w-7 rounded-lg",
                              "data-ocid": `branches.view_button.${idx + 1}`,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Button,
                            {
                              size: "icon",
                              variant: "ghost",
                              className: "h-7 w-7 rounded-lg text-destructive hover:text-destructive",
                              "data-ocid": `branches.delete_button.${idx + 1}`,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                            }
                          )
                        ] }) })
                      ]
                    },
                    branch.id
                  );
                }) })
              ]
            }
          ) }),
          totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-t border-border flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "Showing ",
              (page - 1) * PAGE_SIZE + 1,
              "–",
              Math.min(page * PAGE_SIZE, filtered.length),
              " of",
              " ",
              filtered.length
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "icon",
                  variant: "ghost",
                  className: "h-7 w-7 rounded-lg",
                  disabled: page === 1,
                  onClick: () => setPage((p) => p - 1),
                  "data-ocid": "branches.pagination_prev",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-3.5 h-3.5" })
                }
              ),
              Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pg) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setPage(pg),
                    className: `h-7 w-7 rounded-lg text-xs font-semibold transition-all ${pg === page ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`,
                    "data-ocid": `branches.page.${pg}`,
                    children: pg
                  },
                  `page-${pg}`
                )
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "icon",
                  variant: "ghost",
                  className: "h-7 w-7 rounded-lg",
                  disabled: page === totalPages,
                  onClick: () => setPage((p) => p + 1),
                  "data-ocid": "branches.pagination_next",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                }
              )
            ] })
          ] })
        ]
      }
    ),
    activeTab === "ranking" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.25 },
        className: "bg-card rounded-2xl border border-border shadow-card overflow-hidden",
        "data-ocid": "branches.ranking_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-display font-semibold text-foreground", children: "Branch Revenue Ranking" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Ranked by monthly revenue performance" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: ranked.map((branch, idx) => {
            const rankClass = RANK_COLORS[branch.rank] ?? "bg-muted/30 border-border text-muted-foreground";
            const pct = Math.round(
              branch.revenue / branch.targetRevenue * 100
            );
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -12 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: idx * 0.05 },
                className: "flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 hover:bg-muted/20 transition-colors",
                "data-ocid": `branches.ranking.item.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `flex items-center justify-center w-8 h-8 rounded-xl border font-bold text-sm shrink-0 ${rankClass}`,
                      children: RANK_MEDAL[branch.rank] ?? `#${branch.rank}`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground truncate", children: branch.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-muted-foreground hidden sm:inline", children: branch.code })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[11px] text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3" }),
                      branch.city,
                      ", ",
                      branch.state,
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1 hidden sm:inline", children: "·" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3 h-3 hidden sm:inline" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden sm:inline", children: [
                        branch.staffCount,
                        " staff"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0 hidden sm:block", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: formatRevenue(branch.revenue) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
                      "of ",
                      formatRevenue(branch.targetRevenue)
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-24 sm:w-28 shrink-0 hidden md:block", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Target" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: `text-[10px] font-semibold ${pct >= 100 ? "text-green-600" : "text-amber-600"}`,
                          children: [
                            pct,
                            "%"
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `h-full rounded-full ${pct >= 100 ? "bg-green-500" : "bg-primary"}`,
                        style: { width: `${Math.min(pct, 100)}%` }
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: branch.status }) })
                ]
              },
              branch.id
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BulkActionBar,
      {
        count: selectedIds.length,
        onExport: handleExportSelected,
        onDelete: handleBulkDelete,
        onDeselect: () => setSelectedIds([])
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModalForm,
      {
        open: showAddModal,
        onOpenChange: setShowAddModal,
        title: "Add New Branch",
        description: "Fill in the details to create a new branch.",
        onSubmit: handleSave,
        submitLabel: "Create Branch",
        loading: saving,
        "data-ocid": "add_branch.dialog",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(BranchFormFields, { form, setForm, managers })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModalForm,
      {
        open: editBranch !== null,
        onOpenChange: (open) => {
          if (!open) setEditBranch(null);
        },
        title: `Edit Branch — ${(editBranch == null ? void 0 : editBranch.name) ?? ""}`,
        description: "Update branch information.",
        onSubmit: handleSave,
        submitLabel: "Save Changes",
        loading: saving,
        "data-ocid": "edit_branch.dialog",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(BranchFormFields, { form, setForm, managers })
      }
    )
  ] });
}
function BranchFormFields({
  form,
  setForm,
  managers
}) {
  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium", children: "Branch Name *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "e.g. Ahmedabad East",
            value: form.name,
            onChange: (e) => update("name", e.target.value),
            className: "rounded-xl text-sm h-9",
            "data-ocid": "branch_form.name.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium", children: "Branch Code *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "e.g. AMD-E01",
            value: form.code,
            onChange: (e) => update("code", e.target.value),
            className: "rounded-xl text-sm h-9 font-mono",
            "data-ocid": "branch_form.code.input"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium", children: "Full Address" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "Street, Area, Pincode",
          value: form.address,
          onChange: (e) => update("address", e.target.value),
          className: "rounded-xl text-sm h-9",
          "data-ocid": "branch_form.address.input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium", children: "City" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "City",
            value: form.city,
            onChange: (e) => update("city", e.target.value),
            className: "rounded-xl text-sm h-9",
            "data-ocid": "branch_form.city.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium", children: "State" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "State",
            value: form.state,
            onChange: (e) => update("state", e.target.value),
            className: "rounded-xl text-sm h-9",
            "data-ocid": "branch_form.state.input"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium", children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "+91 …",
              value: form.phone,
              onChange: (e) => update("phone", e.target.value),
              className: "rounded-xl text-sm h-9 pl-8",
              "data-ocid": "branch_form.phone.input"
            }
          )
        ] })
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
                  "data-ocid": "branch_form.status.select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Active", children: "Active" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Inactive", children: "Inactive" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Suspended", children: "Suspended" })
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium", children: "Branch Manager" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: form.managerId,
          onValueChange: (v) => update("managerId", v),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "rounded-xl text-sm h-9",
                "data-ocid": "branch_form.manager.select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Assign a manager" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: managers.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: m.id, children: [
              m.name,
              " — ",
              m.designation
            ] }, m.id)) })
          ]
        }
      )
    ] })
  ] });
}
export {
  BranchesPage as default
};
