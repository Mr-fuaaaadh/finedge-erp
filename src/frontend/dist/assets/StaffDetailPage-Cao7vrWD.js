import { e as createLucideIcon, a4 as useParams, u as useNavigate, a5 as getUserById, r as reactExports, T as Target, a as TrendingUp, C as Clock, j as jsxRuntimeExports, q as Badge, B as Button, L as Link, m as motion, i as Building2 } from "./index-CgV9Taym.js";
import { C as Card, a as CardHeader, c as CardTitle, b as CardContent } from "./card-BIrGk5lN.js";
import { S as Separator } from "./separator-n_ZCSSuO.js";
import { B as Breadcrumb } from "./Breadcrumb-Vnwm27w7.js";
import { P as PriorityBadge } from "./PriorityBadge-C2Id1hb0.js";
import { g as getAttendanceByUser } from "./mockAttendance-Cj4ZUs0_.js";
import { m as mockTasks } from "./mockTasks-ZIylUAUd.js";
import { U as UserPlus } from "./user-plus-CUs32BvV.js";
import { D as Download } from "./download-CT_NJYb_.js";
import { S as SquarePen } from "./square-pen-DGyTVHfZ.js";
import { M as Mail } from "./mail-DtpfkiRi.js";
import { P as Phone } from "./phone-B0agrxx4.js";
import { C as Calendar } from "./calendar-B7TqCTx5.js";
import { M as MapPin } from "./map-pin-BzQ-JiWE.js";
import { A as Award } from "./award-DC1LhMVJ.js";
import { C as ClipboardList } from "./clipboard-list-BlI2NnA_.js";
import "./minus-D6KT2NO-.js";
import "./triangle-alert-t2GMGPuS.js";
import "./zap-D7uWetWS.js";
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
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ],
  ["path", { d: "m9 9.5 2 2 4-4", key: "1dth82" }]
];
const BookCheck = createLucideIcon("book-check", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 10h2", key: "8sgtl7" }],
  ["path", { d: "M16 14h2", key: "epxaof" }],
  ["path", { d: "M6.17 15a3 3 0 0 1 5.66 0", key: "n6f512" }],
  ["circle", { cx: "9", cy: "11", r: "2", key: "yxgjnd" }],
  ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2", key: "qneu4z" }]
];
const IdCard = createLucideIcon("id-card", __iconNode);
const STATUS_RING = {
  Active: "ring-green-500/40",
  Inactive: "ring-border",
  "On Leave": "ring-amber-400/40"
};
const STATUS_DOT = {
  Active: "bg-green-500",
  Inactive: "bg-muted-foreground",
  "On Leave": "bg-amber-500"
};
const TASK_STATUS_COLORS = {
  Done: "bg-green-50 text-green-700 border-green-200",
  "In Progress": "bg-primary/10 text-primary border-primary/20",
  Review: "bg-secondary/10 text-secondary border-secondary/20",
  Todo: "bg-muted text-muted-foreground border-border"
};
function MiniStat({
  icon: Icon,
  label,
  value,
  sub,
  idx
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: idx * 0.07 },
      className: "bg-card rounded-2xl border border-border p-4 shadow-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: label })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-display font-bold text-foreground leading-tight", children: value }),
        sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-0.5", children: sub })
      ]
    }
  );
}
function InfoRow({
  icon: Icon,
  label,
  value,
  mono = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 py-2.5 border-b border-border last:border-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-muted-foreground mt-0.5 shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mb-0.5", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: `text-sm font-medium text-foreground break-words ${mono ? "font-mono text-xs" : ""}`,
          children: value
        }
      )
    ] })
  ] });
}
function ProgressBar({
  label,
  value,
  color = "bg-primary"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-foreground", children: [
        value,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: `h-full rounded-full ${color}`,
        initial: { width: 0 },
        animate: { width: `${value}%` },
        transition: { duration: 0.8, ease: "easeOut" }
      }
    ) })
  ] });
}
function StaffDetailPage() {
  const { staffId } = useParams({ from: "/layout/staff/$staffId" });
  const navigate = useNavigate();
  const staffFromData = getUserById(staffId);
  const staff = staffFromData ?? {
    id: staffId,
    name: "Priya Sharma",
    email: "priya.sharma@fincore.in",
    phone: "+91 87654 32109",
    role: "finance_manager",
    department: "Finance",
    branchName: "Head Office",
    designation: "Finance Director",
    avatar: "https://placehold.co/80x80/0891b2/ffffff?text=PS",
    status: "Active",
    joinDate: "2019-07-01",
    performanceScore: 92,
    salary: 18e4
  };
  const assignedTasks = reactExports.useMemo(
    () => mockTasks.filter((t) => t.assignedToId === staffId).slice(0, 5),
    [staffId]
  );
  const attendanceRecords = reactExports.useMemo(() => {
    const all = getAttendanceByUser(staffId);
    return all.filter((a) => a.date.startsWith("2025-04"));
  }, [staffId]);
  const attendanceSummary = reactExports.useMemo(() => {
    const present = attendanceRecords.filter(
      (a) => a.status === "Present" || a.status === "Late" || a.status === "Half Day"
    ).length;
    const absent = attendanceRecords.filter(
      (a) => a.status === "Absent"
    ).length;
    const leaves = attendanceRecords.filter((a) => a.status === "Leave").length;
    const total = attendanceRecords.length;
    return {
      present,
      absent,
      leaves,
      rate: total > 0 ? Math.round(present / total * 100) : 95
    };
  }, [attendanceRecords]);
  const tasksDone = assignedTasks.filter((t) => t.status === "Done").length;
  const leadsAssigned = 12;
  const targetProgress = staff.performanceScore;
  const miniStats = [
    {
      icon: Target,
      label: "Performance Score",
      value: `${staff.performanceScore}%`,
      sub: "Current month"
    },
    {
      icon: BookCheck,
      label: "Tasks Completed",
      value: tasksDone,
      sub: `of ${assignedTasks.length} assigned`
    },
    {
      icon: TrendingUp,
      label: "Leads Assigned",
      value: leadsAssigned,
      sub: "This month"
    },
    {
      icon: Clock,
      label: "Attendance Rate",
      value: `${attendanceSummary.rate}%`,
      sub: `${attendanceSummary.leaves} leaves this month`
    }
  ];
  const tenure = reactExports.useMemo(() => {
    const start = new Date(staff.joinDate);
    const now = /* @__PURE__ */ new Date();
    const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    if (months < 12) return `${months} months`;
    const years = Math.floor(months / 12);
    const rem = months % 12;
    return rem > 0 ? `${years}y ${rem}m` : `${years} years`;
  }, [staff.joinDate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-full bg-background", "data-ocid": "staff_detail.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border sticky top-0 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Breadcrumb,
        {
          items: [{ label: "Staff", href: "/staff" }, { label: staff.name }],
          className: "mb-2"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `relative shrink-0 ring-2 rounded-2xl ${STATUS_RING[staff.status]}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: staff.avatar,
                    alt: staff.name,
                    className: "w-14 h-14 rounded-2xl object-cover"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-card ${STATUS_DOT[staff.status]}`
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display font-bold text-foreground truncate", children: staff.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              staff.designation,
              " ·",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize", children: staff.role.replace(/_/g, " ") })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: "outline",
              className: staff.status === "Active" ? "border-green-200 bg-green-50 text-green-700" : staff.status === "On Leave" ? "border-amber-200 bg-amber-50 text-amber-700" : "border-border text-muted-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `w-1.5 h-1.5 rounded-full mr-1.5 inline-block ${STATUS_DOT[staff.status]}`
                  }
                ),
                staff.status
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "gap-1.5 rounded-xl",
              onClick: () => navigate({ to: "/tasks/new" }),
              "data-ocid": "staff_detail.assign_task.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Assign Task" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "gap-1.5 rounded-xl",
              "data-ocid": "staff_detail.download_report.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Report" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              className: "gap-1.5 rounded-xl",
              asChild: true,
              "data-ocid": "staff_detail.edit_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/staff/$staffId/edit", params: { staffId: staff.id }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Edit Profile" })
              ] })
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4", children: miniStats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(MiniStat, { ...s, idx: i }, s.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -12 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.15 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "staff_detail.personal_info.card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IdCard, { className: "w-4 h-4 text-primary" }),
                  "Personal Information"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { icon: Mail, label: "Email", value: staff.email }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { icon: Phone, label: "Phone", value: staff.phone }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    InfoRow,
                    {
                      icon: Building2,
                      label: "Branch",
                      value: staff.branchName
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    InfoRow,
                    {
                      icon: IdCard,
                      label: "Employee ID",
                      value: `EMP-${staff.id.toUpperCase()}`,
                      mono: true
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    InfoRow,
                    {
                      icon: Calendar,
                      label: "Start Date",
                      value: new Date(staff.joinDate).toLocaleDateString(
                        "en-IN",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { icon: Clock, label: "Tenure", value: tenure }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    InfoRow,
                    {
                      icon: MapPin,
                      label: "Address",
                      value: "12, Linking Road, Bandra West, Mumbai 400050"
                    }
                  )
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -12 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.22 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "staff_detail.attendance.card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-primary" }),
                  "Attendance — April 2025"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ProgressBar,
                    {
                      label: "Attendance Rate",
                      value: attendanceSummary.rate,
                      color: attendanceSummary.rate >= 90 ? "bg-green-500" : attendanceSummary.rate >= 75 ? "bg-primary" : "bg-amber-500"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: [
                    {
                      label: "Present",
                      value: attendanceSummary.present,
                      color: "text-green-600"
                    },
                    {
                      label: "Absent",
                      value: attendanceSummary.absent,
                      color: "text-destructive"
                    },
                    {
                      label: "On Leave",
                      value: attendanceSummary.leaves,
                      color: "text-amber-600"
                    }
                  ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "text-center p-2 rounded-xl bg-muted/40",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-base font-bold ${item.color}`, children: item.value }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: item.label })
                      ]
                    },
                    item.label
                  )) })
                ] })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 12 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.18 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "staff_detail.performance.card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4 text-primary" }),
                  "Performance Overview"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ProgressBar,
                    {
                      label: "Overall Performance Score",
                      value: staff.performanceScore,
                      color: staff.performanceScore >= 90 ? "bg-green-500" : staff.performanceScore >= 75 ? "bg-primary" : "bg-amber-500"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ProgressBar,
                    {
                      label: "Target Achievement",
                      value: targetProgress,
                      color: "bg-secondary"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ProgressBar,
                    {
                      label: "Task Completion Rate",
                      value: assignedTasks.length > 0 ? Math.round(tasksDone / assignedTasks.length * 100) : 0
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Monthly Salary" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground", children: [
                        "₹",
                        (staff.salary / 1e3).toFixed(0),
                        "K"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Department" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: staff.department })
                    ] })
                  ] })
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 12 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.25 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "staff_detail.tasks.card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2 flex-row items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-4 h-4 text-primary" }),
                    "Assigned Tasks"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      asChild: true,
                      variant: "ghost",
                      size: "sm",
                      className: "text-xs text-muted-foreground h-7",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/tasks", children: "View all" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: assignedTasks.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "py-8 text-center",
                    "data-ocid": "staff_detail.tasks.empty_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-8 h-8 text-muted-foreground/40 mx-auto mb-2" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No tasks assigned" })
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: assignedTasks.map((task, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-start gap-3 p-3 rounded-xl hover:bg-muted/40 transition-colors group",
                    "data-ocid": `staff_detail.tasks.item.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground truncate group-hover:text-primary transition-colors", children: task.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: [
                          "Due:",
                          " ",
                          new Date(task.dueDate).toLocaleDateString(
                            "en-IN"
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: task.priority }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `text-[10px] font-semibold px-2 py-0.5 rounded-lg border ${TASK_STATUS_COLORS[task.status] ?? "bg-muted text-muted-foreground border-border"}`,
                            children: task.status
                          }
                        )
                      ] })
                    ]
                  },
                  task.id
                )) }) })
              ] })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
export {
  StaffDetailPage as default
};
