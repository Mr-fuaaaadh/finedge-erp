import { e as createLucideIcon, u as useNavigate, r as reactExports, j as jsxRuntimeExports, q as Badge, B as Button, aa as Bell, h as cn, i as Building2, n as ChevronRight, X, s as ue } from "./index-CgV9Taym.js";
import { B as Breadcrumb } from "./Breadcrumb-Vnwm27w7.js";
import { T as Trash2 } from "./trash-2-D2vYGX4E.js";
import { C as ClipboardList } from "./clipboard-list-BlI2NnA_.js";
import { U as UserPlus } from "./user-plus-CUs32BvV.js";
import { C as CircleX } from "./circle-x-BmYOJkkP.js";
import { T as TriangleAlert } from "./triangle-alert-t2GMGPuS.js";
import { C as CircleCheck } from "./circle-check-DLxW8y4N.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
const CheckCheck = createLucideIcon("check-check", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }]
];
const Megaphone = createLucideIcon("megaphone", __iconNode);
function daysAgo(d, hours = 0) {
  const dt = /* @__PURE__ */ new Date();
  dt.setDate(dt.getDate() - d);
  dt.setHours(dt.getHours() - hours);
  return dt;
}
const MOCK_NOTIFICATIONS = [
  // Today
  {
    id: "N01",
    title: "New Lead: Arjun Mehta",
    message: "High-value lead assigned to you from Mumbai Central branch.",
    detail: "Arjun Mehta (₹18L policy) has been assigned for immediate follow-up. Source: Referral. Priority: High.",
    type: "info",
    category: "Leads",
    timestamp: daysAgo(0, 1),
    read: false,
    link: "/leads"
  },
  {
    id: "N02",
    title: "Task Overdue: Q2 Pipeline Review",
    message: "Task 'Q2 Pipeline Review' was due 2 hours ago.",
    detail: "This task was assigned by Priya Sharma and was due at 12:00 PM. Escalate or mark complete.",
    type: "warning",
    category: "Tasks",
    timestamp: daysAgo(0, 2),
    read: false,
    link: "/tasks"
  },
  {
    id: "N03",
    title: "Branch Target Achieved",
    message: "Pune West branch hit 100% of monthly revenue target!",
    detail: "Pune West completed ₹42.8L against a target of ₹42L. Branch manager: Amit Patel.",
    type: "success",
    category: "Branch Reports",
    timestamp: daysAgo(0, 3),
    read: false,
    link: "/branches"
  },
  {
    id: "N04",
    title: "System Alert: High Memory Usage",
    message: "Canister memory at 78% capacity. Review soon.",
    detail: "Memory usage spike detected at 11:30 AM IST. Consider archiving old audit logs.",
    type: "warning",
    category: "System",
    timestamp: daysAgo(0, 4),
    read: false,
    link: "/audit-logs"
  },
  {
    id: "N05",
    title: "Lead Converted: Meera Nair",
    message: "Lead converted to customer — ₹25L investment product.",
    detail: "Meera Nair (lead ID L-0041) converted by Vijay Menon. Total pipeline value added: ₹25L.",
    type: "success",
    category: "Leads",
    timestamp: daysAgo(0, 5),
    read: false,
    link: "/leads"
  },
  {
    id: "N06",
    title: "New Staff Joined: Rohit Desai",
    message: "Rohit Desai joined Bangalore East branch as Sales Executive.",
    detail: "Onboarding complete. Role: Staff. Department: Sales. Reports to: Branch Manager Pavan Kumar.",
    type: "info",
    category: "Branch Reports",
    timestamp: daysAgo(0, 6),
    read: false,
    link: "/staff"
  },
  // Yesterday
  {
    id: "N07",
    title: "Leave Approved: Kavya Nair",
    message: "Leave request for 1–3 May approved by Priya Sharma.",
    detail: "3 days casual leave approved. No task conflicts detected for this period.",
    type: "success",
    category: "Branch Reports",
    timestamp: daysAgo(1, 2),
    read: true,
    link: "/attendance"
  },
  {
    id: "N08",
    title: "Task Completed: Lead Follow-Ups",
    message: "Vijay Menon completed 12/12 assigned lead follow-ups.",
    detail: "All follow-ups completed before the deadline. Performance score updated.",
    type: "success",
    category: "Tasks",
    timestamp: daysAgo(1, 4),
    read: true,
    link: "/tasks"
  },
  {
    id: "N09",
    title: "Lead Rejected: Prakash Iyer",
    message: "Lead rejected — insufficient documentation.",
    detail: "Lead L-0038 (Prakash Iyer) closed as 'Rejected'. Reason: KYC documents incomplete.",
    type: "error",
    category: "Leads",
    timestamp: daysAgo(1, 5),
    read: true,
    link: "/leads"
  },
  {
    id: "N10",
    title: "Performance Report Ready",
    message: "April 2026 monthly performance report is available.",
    detail: "Report covers: Lead conversion (87%), task completion (92%), branch revenue vs target.",
    type: "info",
    category: "Branch Reports",
    timestamp: daysAgo(1, 7),
    read: true,
    link: "/performance"
  },
  {
    id: "N11",
    title: "System Maintenance Completed",
    message: "Scheduled maintenance completed successfully at 4:00 AM.",
    detail: "All services restored. Downtime: 48 minutes. No data loss.",
    type: "success",
    category: "System",
    timestamp: daysAgo(1, 8),
    read: true,
    link: "/"
  },
  {
    id: "N12",
    title: "New Task Assigned: Client Onboarding",
    message: "Priya Sharma assigned 'Q2 Client Onboarding Checklist' to you.",
    detail: "Due: 5 May 2026. Priority: High. 8 subtasks included.",
    type: "info",
    category: "Tasks",
    timestamp: daysAgo(1, 10),
    read: true,
    link: "/tasks"
  },
  // This week
  {
    id: "N13",
    title: "Branch Report: April Summary",
    message: "April monthly branch report for Mumbai Central is ready.",
    detail: "Revenue: ₹1.2Cr (94% of target). Staff: 24 active. Top performer: Vijay Menon.",
    type: "info",
    category: "Branch Reports",
    timestamp: daysAgo(2, 0),
    read: true,
    link: "/branches"
  },
  {
    id: "N14",
    title: "Lead Reassigned: Sunita Pillai",
    message: "Lead reassigned from Rahul Joshi to you due to absence.",
    detail: "Sunita Pillai is interested in home loan product. Last contact: 22 Apr. Next follow-up pending.",
    type: "info",
    category: "Leads",
    timestamp: daysAgo(2, 3),
    read: true,
    link: "/leads"
  },
  {
    id: "N15",
    title: "Task Reminder: Finance Reconciliation",
    message: "Finance reconciliation task due tomorrow.",
    detail: "Assigned by Finance Manager on 20 Apr. Estimated effort: 4 hours.",
    type: "warning",
    category: "Tasks",
    timestamp: daysAgo(2, 6),
    read: true,
    link: "/tasks"
  },
  {
    id: "N16",
    title: "Security Alert: New Device Login",
    message: "New login detected from Pune — Chrome on Android.",
    detail: "Login at 3:42 PM IST from IP 103.24.81.x. If this wasn't you, change your password.",
    type: "warning",
    category: "System",
    timestamp: daysAgo(3, 0),
    read: true,
    link: "/settings"
  },
  {
    id: "N17",
    title: "Lead Converted: Devika Rao",
    message: "Lead converted to customer — mutual fund product.",
    detail: "Devika Rao (lead ID L-0039) converted. Product: SIP mutual fund, ₹15L AUM.",
    type: "success",
    category: "Leads",
    timestamp: daysAgo(3, 4),
    read: true,
    link: "/leads"
  },
  {
    id: "N18",
    title: "Attendance Alert: Late Check-In",
    message: "3 staff members had late check-ins yesterday.",
    detail: "Staff: Rohit Desai, Anu Krishnan, Santosh Reddy. Flagged for review.",
    type: "warning",
    category: "Branch Reports",
    timestamp: daysAgo(3, 6),
    read: true,
    link: "/attendance"
  },
  {
    id: "N19",
    title: "New Lead: Corporate Inquiry",
    message: "Corporate inquiry from Reliance Capital — ₹50L potential.",
    detail: "Bulk investment inquiry. Routed to senior staff for handling.",
    type: "info",
    category: "Leads",
    timestamp: daysAgo(4, 1),
    read: true,
    link: "/leads"
  },
  {
    id: "N20",
    title: "System: Data Export Complete",
    message: "Q1 2026 data export is ready for download.",
    detail: "Export includes: leads, tasks, attendance, finance records. File size: 14.2 MB (CSV).",
    type: "success",
    category: "System",
    timestamp: daysAgo(4, 3),
    read: true,
    link: "/"
  },
  {
    id: "N21",
    title: "Task Completed: March Audit",
    message: "Audit task completed and submitted to compliance team.",
    detail: "Completed by Admin. No irregularities found. Next audit: July 2026.",
    type: "success",
    category: "Tasks",
    timestamp: daysAgo(4, 5),
    read: true,
    link: "/audit-logs"
  },
  {
    id: "N22",
    title: "Branch Alert: Hyderabad below target",
    message: "Hyderabad North is at 61% of April target with 3 days left.",
    detail: "Current revenue: ₹28.5L. Target: ₹46L. Manager notified. Escalation flag raised.",
    type: "error",
    category: "Branch Reports",
    timestamp: daysAgo(5, 0),
    read: true,
    link: "/branches"
  },
  {
    id: "N23",
    title: "Lead: Follow-Up Overdue",
    message: "4 leads have overdue follow-up dates.",
    detail: "Leads: L-0031 (Riya Singh), L-0033 (Manish Tiwari), L-0036, L-0037. Action required.",
    type: "warning",
    category: "Leads",
    timestamp: daysAgo(5, 4),
    read: true,
    link: "/leads"
  },
  {
    id: "N24",
    title: "Password Changed Successfully",
    message: "Your account password was changed.",
    detail: "Password updated from Chrome on macOS at 10:15 AM IST. Contact support if this wasn't you.",
    type: "success",
    category: "System",
    timestamp: daysAgo(5, 6),
    read: true,
    link: "/settings"
  },
  // Older
  {
    id: "N25",
    title: "Finance Report: March Finalized",
    message: "March 2026 P&L report has been approved by Finance Manager.",
    detail: "Net profit: ₹84.3L. Revenue growth: +12% MoM. Full report available in Finance module.",
    type: "success",
    category: "Branch Reports",
    timestamp: daysAgo(8, 0),
    read: true,
    link: "/finance"
  },
  {
    id: "N26",
    title: "New Branch: Jaipur West Onboarded",
    message: "Jaipur West branch is now live on FinEdge ERP.",
    detail: "Branch code: JW-012. Manager: Sunita Verma. Initial staff: 8 members.",
    type: "info",
    category: "Branch Reports",
    timestamp: daysAgo(9, 2),
    read: true,
    link: "/branches"
  },
  {
    id: "N27",
    title: "Task Escalated: Compliance Filing",
    message: "Compliance filing task escalated to Admin.",
    detail: "Original deadline missed. Escalated by branch manager to Admin for intervention.",
    type: "error",
    category: "Tasks",
    timestamp: daysAgo(10, 0),
    read: true,
    link: "/tasks"
  },
  {
    id: "N28",
    title: "Lead: Bulk Import Completed",
    message: "152 leads imported from Q1 campaign CSV file.",
    detail: "Imported at 2:10 PM IST. Validation pass rate: 94.7% (7 invalid rows skipped).",
    type: "success",
    category: "Leads",
    timestamp: daysAgo(11, 3),
    read: true,
    link: "/leads"
  },
  {
    id: "N29",
    title: "System Upgrade Complete",
    message: "FinEdge ERP upgraded to v3.4.2.",
    detail: "New: Bulk actions on all tables, notification centre, audit log exports, 2FA support.",
    type: "info",
    category: "System",
    timestamp: daysAgo(12, 0),
    read: true,
    link: "/"
  },
  {
    id: "N30",
    title: "Staff Promotion: Vijay Menon",
    message: "Vijay Menon promoted to Senior Sales Executive.",
    detail: "Effective 15 Apr 2026. New designation: Senior Sales Executive. Salary revision pending HR approval.",
    type: "success",
    category: "Branch Reports",
    timestamp: daysAgo(13, 4),
    read: true,
    link: "/staff"
  },
  {
    id: "N31",
    title: "Lead Pipeline: Q1 Summary",
    message: "Q1 2026 lead pipeline closed at ₹6.2Cr total value.",
    detail: "Conversion rate: 38%. Top performing branch: Pune West. Weakest: Hyderabad North.",
    type: "info",
    category: "Leads",
    timestamp: daysAgo(14, 0),
    read: true,
    link: "/leads"
  },
  {
    id: "N32",
    title: "System: Backup Completed",
    message: "Weekly data backup completed at 3:00 AM IST.",
    detail: "Backup size: 2.1 GB. Stored in secure off-chain vault. Next scheduled: next Sunday.",
    type: "success",
    category: "System",
    timestamp: daysAgo(15, 0),
    read: true,
    link: "/"
  }
];
function relativeTime(dt) {
  const diff = Date.now() - dt.getTime();
  const mins = Math.floor(diff / 6e4);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days}d ago`;
  return dt.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}
function groupByDate(notifications) {
  const today = /* @__PURE__ */ new Date();
  const yesterday = /* @__PURE__ */ new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const weekAgo = /* @__PURE__ */ new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  const groups = {
    Today: [],
    Yesterday: [],
    "This Week": [],
    Older: []
  };
  for (const n of notifications) {
    const d = n.timestamp;
    if (d.toDateString() === today.toDateString()) groups.Today.push(n);
    else if (d.toDateString() === yesterday.toDateString())
      groups.Yesterday.push(n);
    else if (d >= weekAgo) groups["This Week"].push(n);
    else groups.Older.push(n);
  }
  return groups;
}
const CATEGORY_ICON = {
  Leads: UserPlus,
  Tasks: ClipboardList,
  "Branch Reports": Building2,
  System: Megaphone
};
const TYPE_ICON = {
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleX
};
const TYPE_STYLE = {
  info: { bg: "bg-primary/10", text: "text-primary", dot: "bg-primary" },
  success: {
    bg: "bg-secondary/15",
    text: "text-secondary-foreground",
    dot: "bg-secondary"
  },
  warning: {
    bg: "bg-accent/15",
    text: "text-accent-foreground",
    dot: "bg-accent"
  },
  error: {
    bg: "bg-destructive/10",
    text: "text-destructive",
    dot: "bg-destructive"
  }
};
const CATEGORIES = [
  "All",
  "Leads",
  "Tasks",
  "Branch Reports",
  "System"
];
function NotificationsPage() {
  const navigate = useNavigate();
  const [items, setItems] = reactExports.useState(MOCK_NOTIFICATIONS);
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [showUnread, setShowUnread] = reactExports.useState(false);
  const [selected, setSelected] = reactExports.useState(null);
  const unreadCount = items.filter((n) => !n.read).length;
  const filtered = items.filter((n) => {
    const catMatch = activeCategory === "All" || n.category === activeCategory;
    const unreadMatch = !showUnread || !n.read;
    return catMatch && unreadMatch;
  });
  const groups = groupByDate(filtered);
  function markAllRead() {
    setItems((prev) => prev.map((n) => ({ ...n, read: true })));
    ue.success("All notifications marked as read");
  }
  function markRead(id) {
    setItems(
      (prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n)
    );
  }
  function dismiss(id) {
    setItems((prev) => prev.filter((n) => n.id !== id));
    if ((selected == null ? void 0 : selected.id) === id) setSelected(null);
    ue.success("Notification removed");
  }
  function clearAll() {
    setItems([]);
    setSelected(null);
    ue.success("All notifications cleared");
  }
  function handleItemClick(n) {
    setSelected(n);
    if (!n.read) markRead(n.id);
  }
  function navigateToResource() {
    if (!selected) return;
    ue.dismiss();
    navigate({ to: selected.link });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-full bg-background", "data-ocid": "notifications.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border-b border-border sticky top-0 z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 sm:px-6 py-3 sm:py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{ label: "Notifications" }], className: "mb-1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-xl font-display font-bold text-foreground flex items-center gap-2", children: [
            "Notifications",
            unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                className: "bg-primary/10 text-primary text-xs",
                "data-ocid": "notifications.unread_count",
                children: [
                  unreadCount,
                  " new"
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "text-xs h-8",
                onClick: () => setShowUnread((v) => !v),
                "data-ocid": "notifications.unread_only.toggle",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Bell,
                    {
                      className: cn(
                        "w-3.5 h-3.5 mr-1.5",
                        showUnread && "text-primary"
                      )
                    }
                  ),
                  showUnread ? "Show all" : "Unread only"
                ]
              }
            ),
            unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "text-xs h-8",
                onClick: markAllRead,
                "data-ocid": "notifications.mark_all_read.button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCheck, { className: "w-3.5 h-3.5 mr-1.5" }),
                  "Mark all read"
                ]
              }
            ),
            items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "text-xs h-8 text-muted-foreground hover:text-destructive",
                onClick: clearAll,
                "data-ocid": "notifications.clear_all.button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5 mr-1.5" }),
                  "Clear all"
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-thin px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 pb-0.5 min-w-max", children: CATEGORIES.map((cat) => {
        const catCount = cat === "All" ? items.filter((n) => !n.read).length : items.filter((n) => n.category === cat && !n.read).length;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setActiveCategory(cat),
            "data-ocid": `notifications.filter_${cat.toLowerCase().replace(/\s+/g, "_")}.tab`,
            className: cn(
              "relative flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap border-b-2",
              activeCategory === cat ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
            ),
            children: [
              cat !== "All" && (() => {
                const Icon = CATEGORY_ICON[cat];
                return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5" });
              })(),
              cat,
              catCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center justify-center min-w-[18px] h-[18px] rounded-full text-[10px] font-bold bg-primary/15 text-primary px-1", children: catCount })
            ]
          },
          cat
        );
      }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-[calc(100vh-var(--topbar-h,140px))] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(
            "flex-1 overflow-y-auto scrollbar-thin",
            selected ? "hidden lg:block lg:max-w-sm xl:max-w-md border-r border-border" : "w-full"
          ),
          children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col items-center justify-center py-24 px-6 text-center",
              "data-ocid": "notifications.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-8 h-8 text-muted-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-1", children: "All caught up!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-xs", children: showUnread ? "No unread notifications." : "No notifications in this category." })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: Object.entries(groups).map(([group, groupItems]) => {
            if (groupItems.length === 0) return null;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": `notifications.group_${group.toLowerCase().replace(/\s+/g, "_")}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 sm:px-5 py-2 bg-muted/30 border-b border-border sticky top-0 z-[1]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: group }) }),
                  groupItems.map((n) => {
                    const TypeIcon = TYPE_ICON[n.type];
                    const style = TYPE_STYLE[n.type];
                    const isSelected = (selected == null ? void 0 : selected.id) === n.id;
                    const globalIdx = filtered.indexOf(n) + 1;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => handleItemClick(n),
                        "data-ocid": `notifications.item.${globalIdx}`,
                        className: cn(
                          "w-full flex items-start gap-3 px-4 sm:px-5 py-4 border-b border-border text-left transition-smooth",
                          isSelected ? "bg-primary/8 border-l-2 border-l-primary" : "hover:bg-muted/40",
                          !n.read && !isSelected && "bg-primary/5"
                        ),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: cn(
                                "w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5",
                                style.bg
                              ),
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                TypeIcon,
                                {
                                  className: cn("w-4.5 h-4.5", style.text)
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-0.5", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "p",
                                {
                                  className: cn(
                                    "text-sm font-semibold truncate",
                                    n.read ? "text-foreground" : "text-foreground"
                                  ),
                                  children: n.title
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground shrink-0", children: relativeTime(n.timestamp) })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2 leading-snug", children: n.message }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1.5", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Badge,
                                {
                                  className: cn(
                                    "text-[10px] px-1.5 py-0 h-4",
                                    style.bg,
                                    style.text
                                  ),
                                  children: n.category
                                }
                              ),
                              !n.read && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: cn(
                                    "w-1.5 h-1.5 rounded-full shrink-0",
                                    style.dot
                                  )
                                }
                              )
                            ] })
                          ] })
                        ]
                      },
                      n.id
                    );
                  })
                ]
              },
              group
            );
          }) })
        }
      ),
      selected ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 lg:flex-none lg:w-[calc(100%-22rem)] xl:w-[calc(100%-28rem)] flex flex-col overflow-hidden bg-background", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 px-5 py-4 border-b border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors lg:hidden",
                onClick: () => setSelected(null),
                "aria-label": "Back to list",
                "data-ocid": "notifications.detail_back.button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 rotate-180" }),
                  "Back"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground truncate", children: selected.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "h-8 text-xs",
              onClick: () => {
                dismiss(selected.id);
              },
              "data-ocid": "notifications.detail_dismiss.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5 mr-1" }),
                "Dismiss"
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto scrollbar-thin p-5 sm:p-6 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0",
                  TYPE_STYLE[selected.type].bg
                ),
                children: (() => {
                  const Icon = TYPE_ICON[selected.type];
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Icon,
                    {
                      className: cn(
                        "w-6 h-6",
                        TYPE_STYLE[selected.type].text
                      )
                    }
                  );
                })()
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-display font-bold text-foreground", children: selected.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: selected.timestamp.toLocaleString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit"
              }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: cn(
                  "text-xs",
                  TYPE_STYLE[selected.type].bg,
                  TYPE_STYLE[selected.type].text
                ),
                children: selected.type.charAt(0).toUpperCase() + selected.type.slice(1)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-xs bg-muted text-muted-foreground", children: selected.category })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: selected.message })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Details" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 rounded-xl bg-muted/40 border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed", children: selected.detail }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "flex-1 sm:flex-none",
                onClick: navigateToResource,
                "data-ocid": "notifications.detail_goto.button",
                children: [
                  "View in",
                  " ",
                  selected.category === "System" ? "Settings" : selected.category,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 ml-1.5" })
                ]
              }
            ),
            !selected.read ? null : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                className: "flex-1 sm:flex-none text-muted-foreground",
                onClick: () => dismiss(selected.id),
                "data-ocid": "notifications.detail_close.button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 mr-1.5" }),
                  "Close"
                ]
              }
            )
          ] })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex flex-1 items-center justify-center bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-8 h-8 text-muted-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "Select a notification to view details" })
      ] }) })
    ] })
  ] });
}
export {
  NotificationsPage as default
};
