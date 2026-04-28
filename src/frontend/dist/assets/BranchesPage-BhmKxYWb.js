import { u as useNavigate, r as reactExports, j as jsxRuntimeExports, B as Button, i as Building2, a as TrendingUp, U as Users, m as motion, k as Search, l as ChevronLeft, n as ChevronRight } from "./index-CgV9Taym.js";
import { I as Input } from "./input-CQX-6uHe.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BSYwbXVq.js";
import { B as BulkActionBar } from "./BulkActionBar-B8bgbp_D.js";
import { E as EmptyState } from "./EmptyState-COP87N-z.js";
import { F as FilterPanel } from "./FilterPanel-BsxdNak1.js";
import { S as StatCardSkeleton } from "./LoadingSkeleton-9AS8ogPa.js";
import { P as PageHeader } from "./PageHeader-CHVHFP_Q.js";
import { S as StatCard } from "./StatCard-DkWGxI9F.js";
import { S as StatusBadge } from "./StatusBadge-BopRiVPx.js";
import { m as mockBranches } from "./mockBranches-6NlnyQQY.js";
import { e as exportToCSV } from "./csvExport-CI-f4_Rc.js";
import { D as Download } from "./download-CT_NJYb_.js";
import { P as Plus } from "./plus-C9sMXHJA.js";
import { M as Medal } from "./medal-C6vDlhYs.js";
import { M as MapPin } from "./map-pin-BzQ-JiWE.js";
import { S as SquarePen } from "./square-pen-DGyTVHfZ.js";
import { E as Eye } from "./eye-BK4ofIs8.js";
import { T as Trash2 } from "./trash-2-D2vYGX4E.js";
import "./label-DBZIDZNQ.js";
import "./card-BIrGk5lN.js";
import "./minus-D6KT2NO-.js";
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
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = reactExports.useState("directory");
  const [search, setSearch] = reactExports.useState("");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [sortField, setSortField] = reactExports.useState("name");
  const [page, setPage] = reactExports.useState(1);
  const [loading] = reactExports.useState(false);
  const [filterValues, setFilterValues] = reactExports.useState({});
  const [selectedIds, setSelectedIds] = reactExports.useState([]);
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
    if (fpStatus) list = list.filter((b) => b.status === fpStatus);
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
              onClick: () => navigate({ to: "/branches/new" }),
              "data-ocid": "branches.add_branch.button",
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
          value: formatRevenue(stats.totalRev),
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
                              onClick: () => navigate({
                                to: `/branches/${branch.id}/edit`
                              }),
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
                              onClick: () => navigate({ to: `/branches/${branch.id}` }),
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
                              onClick: () => {
                                setSelectedIds([branch.id]);
                                handleBulkDelete();
                              },
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
                className: "flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 hover:bg-muted/20 transition-colors cursor-pointer",
                "data-ocid": `branches.ranking.item.${idx + 1}`,
                onClick: () => navigate({ to: `/branches/${branch.id}` }),
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
    )
  ] });
}
export {
  BranchesPage as default
};
