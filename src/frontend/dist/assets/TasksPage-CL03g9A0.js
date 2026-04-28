import { e as createLucideIcon, u as useNavigate, r as reactExports, j as jsxRuntimeExports, B as Button, C as Clock, m as motion, s as ue, q as Badge, h as cn, L as Link, k as Search, l as ChevronLeft, n as ChevronRight, p as User } from "./index-CgV9Taym.js";
import { I as Input } from "./input-CQX-6uHe.js";
import { F as FilterPanel, P as Popover, a as PopoverTrigger, b as PopoverContent } from "./FilterPanel-BsxdNak1.js";
import { L as LayoutGrid, D as DataTable, S as ScrollArea } from "./DataTable-BoxipDIM.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BSYwbXVq.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-C2Wpqlzr.js";
import { B as BulkActionBar } from "./BulkActionBar-B8bgbp_D.js";
import { P as PageHeader } from "./PageHeader-CHVHFP_Q.js";
import { P as PriorityBadge } from "./PriorityBadge-C2Id1hb0.js";
import { S as StatCard } from "./StatCard-DkWGxI9F.js";
import { S as StatusBadge } from "./StatusBadge-BopRiVPx.js";
import { m as mockTasks } from "./mockTasks-ZIylUAUd.js";
import { e as exportToCSV } from "./csvExport-CI-f4_Rc.js";
import { D as Download } from "./download-CT_NJYb_.js";
import { P as Plus } from "./plus-C9sMXHJA.js";
import { C as CircleCheck } from "./circle-check-DLxW8y4N.js";
import { C as CalendarDays } from "./calendar-days-C9hU70Su.js";
import { S as SquarePen } from "./square-pen-DGyTVHfZ.js";
import "./label-DBZIDZNQ.js";
import "./trash-2-D2vYGX4E.js";
import "./EmptyState-COP87N-z.js";
import "./minus-D6KT2NO-.js";
import "./triangle-alert-t2GMGPuS.js";
import "./zap-D7uWetWS.js";
import "./card-BIrGk5lN.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 18H3", key: "1amg6g" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }]
];
const AlignLeft = createLucideIcon("align-left", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", key: "i9b6wo" }],
  ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }]
];
const Flag = createLucideIcon("flag", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { x: "3", y: "5", width: "6", height: "6", rx: "1", key: "1defrl" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "M13 6h8", key: "15sg57" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 18h8", key: "oe0vm4" }]
];
const ListTodo = createLucideIcon("list-todo", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode);
const STATUSES = ["Todo", "In Progress", "Review", "Done"];
const COLUMN_STYLES = {
  Todo: {
    header: "bg-muted/60 border-border",
    dot: "bg-muted-foreground",
    accent: "text-muted-foreground"
  },
  "In Progress": {
    header: "bg-amber-50 border-amber-200 dark:bg-amber-900/10",
    dot: "bg-amber-500",
    accent: "text-amber-600"
  },
  Review: {
    header: "bg-secondary/8 border-secondary/20",
    dot: "bg-secondary",
    accent: "text-secondary"
  },
  Done: {
    header: "bg-green-50 border-green-200 dark:bg-green-900/10",
    dot: "bg-green-500",
    accent: "text-green-600"
  }
};
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const taskFilterFields = [
  {
    key: "search",
    label: "Search",
    type: "text",
    placeholder: "Task title or description…"
  },
  {
    key: "priority",
    label: "Priority",
    type: "select",
    options: [
      { label: "Low", value: "Low" },
      { label: "Medium", value: "Medium" },
      { label: "High", value: "High" }
    ]
  },
  {
    key: "status",
    label: "Status",
    type: "select",
    options: [
      { label: "Todo", value: "Todo" },
      { label: "In Progress", value: "In Progress" },
      { label: "Review", value: "Review" },
      { label: "Done", value: "Done" }
    ]
  },
  {
    key: "assignee",
    label: "Assignee",
    type: "text",
    placeholder: "Staff name…"
  }
];
function TaskKanbanCard({
  task,
  onDragStart,
  onNavigate
}) {
  const isOverdue = task.status !== "Done" && new Date(task.dueDate) < /* @__PURE__ */ new Date();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 6 },
      animate: { opacity: 1, y: 0 },
      whileHover: { scale: 1.01 },
      draggable: true,
      onDragStart: (e) => onDragStart(e, task),
      onClick: () => onNavigate(task.id),
      className: "bg-card border border-border rounded-xl p-3.5 cursor-pointer shadow-card hover:shadow-elevated transition-smooth group",
      "data-ocid": `tasks.kanban.card.${task.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground line-clamp-2 flex-1 group-hover:text-primary transition-colors", children: task.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: task.priority })
        ] }),
        task.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground line-clamp-2 mb-2", children: task.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full rounded-full bg-primary transition-all",
              style: { width: `${task.progress}%` }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-semibold text-muted-foreground w-7 text-right", children: [
            task.progress,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[10px] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[80px]", children: task.assignedTo })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "flex items-center gap-1 text-[10px]",
                isOverdue ? "text-red-500" : "text-muted-foreground"
              ),
              children: [
                isOverdue && /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { className: "w-3 h-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-3 h-3" }),
                new Date(task.dueDate).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short"
                })
              ]
            }
          )
        ] }),
        task.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mt-2 pt-2 border-t border-border", children: task.tags.slice(0, 3).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-[9px] font-medium bg-muted text-muted-foreground px-1.5 py-0.5 rounded-md",
            children: tag
          },
          tag
        )) })
      ]
    }
  );
}
function TaskKanbanColumn({
  status,
  tasks,
  onDragStart,
  onDragOver,
  onDrop,
  onAddNew,
  onNavigate
}) {
  const [isDragOver, setIsDragOver] = reactExports.useState(false);
  const styles = COLUMN_STYLES[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex flex-col min-w-[240px] w-[280px] flex-shrink-0 sm:flex-1 rounded-2xl border transition-smooth snap-start",
        isDragOver ? "border-primary/50 bg-primary/3" : "border-border bg-muted/20"
      ),
      onDragOver: (e) => {
        e.preventDefault();
        onDragOver(e);
        setIsDragOver(true);
      },
      onDragLeave: () => setIsDragOver(false),
      onDrop: (e) => {
        onDrop(e, status);
        setIsDragOver(false);
      },
      "data-ocid": `tasks.kanban.column.${status.toLowerCase().replace(/ /g, "_")}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "flex items-center justify-between px-4 py-3 rounded-t-2xl border-b",
              styles.header
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("w-2 h-2 rounded-full", styles.dot) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: status }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-card border",
                      styles.accent
                    ),
                    children: tasks.length
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "w-6 h-6 rounded-lg",
                  onClick: onAddNew,
                  "data-ocid": `tasks.kanban.add.${status.toLowerCase().replace(/ /g, "_")}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "flex-1 max-h-[520px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 space-y-2.5", children: tasks.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8 text-center text-[11px] text-muted-foreground", children: "No tasks" }) : tasks.map((task) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          TaskKanbanCard,
          {
            task,
            onDragStart,
            onNavigate
          },
          task.id
        )) }) })
      ]
    }
  );
}
function makeListColumns(onNavigate) {
  return [
    {
      key: "title",
      header: "Task",
      sortable: true,
      render: (row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => onNavigate(row.id),
          className: "text-left group",
          "data-ocid": `tasks.list.row.${row.id}.link`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors", children: row.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground line-clamp-1", children: row.description })
          ]
        }
      )
    },
    {
      key: "priority",
      header: "Priority",
      render: (row) => /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: row.priority })
    },
    {
      key: "assignedTo",
      header: "Assignee",
      render: (row) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground", children: row.assignedTo })
    },
    {
      key: "branchId",
      header: "Branch",
      render: (row) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] font-medium", children: row.branchId === "hq" ? "HQ" : row.branchId.toUpperCase() })
    },
    {
      key: "dueDate",
      header: "Due Date",
      sortable: true,
      render: (row) => {
        const overdue = row.status !== "Done" && new Date(row.dueDate) < /* @__PURE__ */ new Date();
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: cn(
              "text-xs",
              overdue ? "text-red-500 font-semibold" : "text-muted-foreground"
            ),
            children: new Date(row.dueDate).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short"
            })
          }
        );
      }
    },
    {
      key: "progress",
      header: "Progress",
      align: "right",
      render: (row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full rounded-full bg-primary",
            style: { width: `${row.progress}%` }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-foreground w-8", children: [
          row.progress,
          "%"
        ] })
      ] })
    },
    {
      key: "status",
      header: "Status",
      render: (row) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: row.status })
    },
    {
      key: "id",
      header: "",
      align: "right",
      render: (row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/tasks/$taskId/edit",
          params: { taskId: row.id },
          onClick: (e) => e.stopPropagation(),
          className: "inline-flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-lg hover:bg-muted/60",
          "data-ocid": `tasks.list.row.${row.id}.edit_button`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-3 h-3" }),
            "Edit"
          ]
        }
      )
    }
  ];
}
function CalendarView({
  tasks,
  onNavigate
}) {
  const today = /* @__PURE__ */ new Date();
  const [viewDate, setViewDate] = reactExports.useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDay, setSelectedDay] = reactExports.useState(null);
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [
    ...Array(firstDayOfMonth).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1)
  ];
  while (cells.length % 7 !== 0) cells.push(null);
  const tasksByDay = reactExports.useMemo(() => {
    const map = {};
    for (const task of tasks) {
      const d = new Date(task.dueDate);
      if (d.getFullYear() === year && d.getMonth() === month) {
        const day = d.getDate();
        if (!map[day]) map[day] = [];
        map[day].push(task);
      }
    }
    return map;
  }, [tasks, year, month]);
  const selectedDayTasks = selectedDay ? tasksByDay[selectedDay] ?? [] : [];
  const prevMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
    setSelectedDay(null);
  };
  const nextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
    setSelectedDay(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "bg-card rounded-2xl border border-border shadow-card overflow-hidden",
        "data-ocid": "tasks.calendar",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b bg-muted/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "icon",
                className: "rounded-xl",
                onClick: prevMonth,
                "data-ocid": "tasks.calendar.prev_month",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold text-foreground", children: [
              MONTH_NAMES[month],
              " ",
              year
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "icon",
                className: "rounded-xl",
                onClick: nextMonth,
                "data-ocid": "tasks.calendar.next_month",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 border-b", children: DAY_NAMES.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center text-[10px] font-semibold text-muted-foreground py-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: d }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: d[0] })
              ]
            },
            d
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7", children: cells.map((day, idx) => {
            const isToday = day !== null && today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
            const dayTasks = day !== null ? tasksByDay[day] ?? [] : [];
            const isSelected = day !== null && selectedDay === day;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                role: day !== null ? "button" : void 0,
                tabIndex: day !== null ? 0 : void 0,
                className: cn(
                  "min-h-[60px] sm:min-h-[80px] p-1 sm:p-1.5 border-r border-b last:border-r-0 relative cursor-pointer",
                  day === null ? "bg-muted/10 cursor-default" : "bg-card hover:bg-muted/20 transition-colors",
                  isSelected ? "bg-primary/5 ring-1 ring-inset ring-primary/30" : "",
                  idx % 7 === 6 ? "border-r-0" : ""
                ),
                onClick: () => day !== null && setSelectedDay(day === selectedDay ? null : day),
                onKeyDown: (e) => {
                  if ((e.key === "Enter" || e.key === " ") && day !== null)
                    setSelectedDay(day === selectedDay ? null : day);
                },
                "data-ocid": day ? `tasks.calendar.day.${day}` : void 0,
                children: day !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: cn(
                        "text-[10px] sm:text-xs font-medium w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full mb-0.5 sm:mb-1",
                        isToday ? "bg-primary text-primary-foreground" : "text-foreground"
                      ),
                      children: day
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:block space-y-0.5", children: [
                    dayTasks.slice(0, 2).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: (e) => e.stopPropagation(),
                          className: cn(
                            "w-full text-left text-[9px] px-1.5 py-0.5 rounded truncate font-medium",
                            t.priority === "High" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : t.priority === "Medium" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" : "bg-primary/10 text-primary"
                          ),
                          children: t.title
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        PopoverContent,
                        {
                          className: "w-72 p-3",
                          "data-ocid": `tasks.calendar.day.${day}.popover_content`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: t.title }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: t.status })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mb-2", children: t.assignedTo }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Button,
                              {
                                size: "sm",
                                variant: "outline",
                                className: "w-full text-xs h-7",
                                onClick: () => onNavigate(t.id),
                                children: "View Task"
                              }
                            )
                          ]
                        }
                      )
                    ] }, t.id)),
                    dayTasks.length > 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-muted-foreground px-1", children: [
                      "+",
                      dayTasks.length - 2,
                      " more"
                    ] })
                  ] }),
                  dayTasks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:hidden flex gap-0.5 mt-0.5 justify-center", children: dayTasks.slice(0, 3).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: cn(
                        "w-1 h-1 rounded-full",
                        t.priority === "High" ? "bg-red-500" : t.priority === "Medium" ? "bg-amber-500" : "bg-primary"
                      )
                    },
                    t.id
                  )) })
                ] })
              },
              `cell-${idx}-${day ?? "empty"}`
            );
          }) })
        ]
      }
    ),
    selectedDay !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        className: "bg-card rounded-2xl border border-border shadow-card p-4",
        "data-ocid": "tasks.calendar.selected_day_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold text-foreground mb-3", children: [
            MONTH_NAMES[month],
            " ",
            selectedDay,
            " — ",
            selectedDayTasks.length,
            " task",
            selectedDayTasks.length !== 1 ? "s" : ""
          ] }),
          selectedDayTasks.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-center py-4", children: "No tasks due on this date" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: selectedDayTasks.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => onNavigate(t.id),
              className: "w-full text-left flex items-start gap-3 p-2.5 rounded-xl bg-muted/30 border border-border hover:bg-muted/60 transition-colors group",
              "data-ocid": `tasks.calendar.selected.${t.id}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: t.priority }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1", children: t.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: t.assignedTo })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: t.status })
              ]
            },
            t.id
          )) })
        ]
      }
    )
  ] });
}
function TaskInlineFilters({
  search,
  priority,
  status,
  onSearch,
  onPriority,
  onStatus,
  onExport
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-wrap items-center gap-2 mb-4 bg-card border border-border rounded-2xl shadow-card px-3 sm:px-4 py-2.5",
      "data-ocid": "tasks.inline_filters",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[140px] max-w-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: search,
              onChange: (e) => onSearch(e.target.value),
              placeholder: "Search tasks…",
              className: "h-8 pl-8 text-xs rounded-xl",
              "data-ocid": "tasks.filter.search_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: priority, onValueChange: onPriority, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "h-8 text-xs w-[120px] rounded-xl",
              "data-ocid": "tasks.filter.priority_select",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Priority" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Priorities" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Low", children: "Low" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Medium", children: "Medium" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "High", children: "High" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: status, onValueChange: onStatus, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "h-8 text-xs w-[130px] rounded-xl",
              "data-ocid": "tasks.filter.status_select",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Status" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Statuses" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Todo", children: "Todo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "In Progress", children: "In Progress" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Review", children: "Review" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Done", children: "Done" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            className: "h-8 rounded-xl gap-1.5 text-xs ml-auto",
            onClick: onExport,
            "data-ocid": "tasks.filter.export_csv_button",
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
function TasksPage() {
  const navigate = useNavigate();
  const [tasks, setTasks] = reactExports.useState(mockTasks);
  const [dragState, setDragState] = reactExports.useState(null);
  const [filterValues, setFilterValues] = reactExports.useState({});
  const [selectedIds, setSelectedIds] = reactExports.useState([]);
  const [inlineSearch, setInlineSearch] = reactExports.useState("");
  const [inlinePriority, setInlinePriority] = reactExports.useState("all");
  const [inlineStatus, setInlineStatus] = reactExports.useState("all");
  const stats = reactExports.useMemo(
    () => ({
      total: tasks.length,
      inProgress: tasks.filter((t) => t.status === "In Progress").length,
      review: tasks.filter((t) => t.status === "Review").length,
      done: tasks.filter((t) => t.status === "Done").length,
      overdue: tasks.filter(
        (t) => t.status !== "Done" && new Date(t.dueDate) < /* @__PURE__ */ new Date()
      ).length
    }),
    [tasks]
  );
  const filteredTasks = reactExports.useMemo(() => {
    return tasks.filter((t) => {
      var _a, _b;
      const advSearch = filterValues.search ?? "";
      const advPriority = filterValues.priority ?? "";
      const advStatus = filterValues.status ?? "";
      const advAssignee = filterValues.assignee ?? "";
      if (advSearch && !t.title.toLowerCase().includes(advSearch.toLowerCase()) && !((_a = t.description) == null ? void 0 : _a.toLowerCase().includes(advSearch.toLowerCase())))
        return false;
      if (advPriority && t.priority !== advPriority) return false;
      if (advStatus && t.status !== advStatus) return false;
      if (advAssignee && !t.assignedTo.toLowerCase().includes(advAssignee.toLowerCase()))
        return false;
      if (inlineSearch && !t.title.toLowerCase().includes(inlineSearch.toLowerCase()) && !((_b = t.description) == null ? void 0 : _b.toLowerCase().includes(inlineSearch.toLowerCase())))
        return false;
      if (inlinePriority && inlinePriority !== "all" && t.priority !== inlinePriority)
        return false;
      if (inlineStatus && inlineStatus !== "all" && t.status !== inlineStatus)
        return false;
      return true;
    });
  }, [tasks, filterValues, inlineSearch, inlinePriority, inlineStatus]);
  const handleDragStart = (e, task) => {
    setDragState({ taskId: task.id, fromCol: task.status });
    e.dataTransfer.effectAllowed = "move";
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  const handleDrop = (e, toCol) => {
    e.preventDefault();
    if (!dragState || dragState.fromCol === toCol) return;
    setTasks(
      (prev) => prev.map(
        (t) => t.id === dragState.taskId ? { ...t, status: toCol } : t
      )
    );
    setDragState(null);
  };
  const handleExportCSV = () => {
    const rows = filteredTasks.map((t) => ({
      ID: t.id,
      Title: t.title,
      Priority: t.priority,
      Status: t.status,
      "Assigned To": t.assignedTo,
      Branch: t.branchId,
      "Due Date": t.dueDate,
      "Progress %": t.progress
    }));
    exportToCSV(rows, "tasks_export");
    ue.success("Tasks exported to CSV");
  };
  const handleBulkExport = () => {
    const selected = filteredTasks.filter((t) => selectedIds.includes(t.id));
    const rows = selected.map((t) => ({
      ID: t.id,
      Title: t.title,
      Priority: t.priority,
      Status: t.status,
      "Assigned To": t.assignedTo,
      Branch: t.branchId,
      "Due Date": t.dueDate,
      "Progress %": t.progress
    }));
    exportToCSV(rows, "tasks_selected_export");
    ue.success(`${selected.length} tasks exported`);
  };
  const handleBulkDelete = () => {
    setTasks((prev) => prev.filter((t) => !selectedIds.includes(t.id)));
    ue.success(`${selectedIds.length} tasks deleted`);
    setSelectedIds([]);
  };
  const handleNavigateToTask = reactExports.useCallback(
    (taskId) => {
      navigate({ to: "/tasks/$taskId", params: { taskId } });
    },
    [navigate]
  );
  const listColumns = reactExports.useMemo(
    () => makeListColumns(handleNavigateToTask),
    [handleNavigateToTask]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Task Management",
        subtitle: `${stats.total} tasks across all branches`,
        breadcrumbs: [{ label: "Home" }, { label: "Tasks" }],
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FilterPanel,
            {
              filters: taskFilterFields,
              presetKey: "tasks",
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
              "data-ocid": "tasks.export_csv_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
                "Export CSV"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "rounded-xl gap-1.5",
              onClick: () => navigate({ to: "/tasks/new" }),
              "data-ocid": "tasks.add_task.primary_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
                "Create Task"
              ]
            }
          )
        ] }),
        "data-ocid": "tasks.header"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mb-4 sm:mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "Total Tasks",
          value: stats.total,
          icon: ListTodo,
          change: 4,
          "data-ocid": "tasks.stat.total"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "In Progress",
          value: stats.inProgress,
          icon: LoaderCircle,
          iconColor: "text-amber-500",
          "data-ocid": "tasks.stat.in_progress"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "In Review",
          value: stats.review,
          icon: AlignLeft,
          iconColor: "text-secondary",
          "data-ocid": "tasks.stat.review"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "Completed",
          value: stats.done,
          icon: CircleCheck,
          iconColor: "text-green-600",
          change: 15,
          "data-ocid": "tasks.stat.done"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "Overdue",
          value: stats.overdue,
          icon: Clock,
          iconColor: "text-red-500",
          change: -8,
          "data-ocid": "tasks.stat.overdue"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "kanban", "data-ocid": "tasks.view_tabs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-4 rounded-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "kanban",
            "data-ocid": "tasks.kanban.tab",
            className: "gap-1.5 text-xs rounded-xl",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "w-3.5 h-3.5" }),
              "Kanban"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "list",
            "data-ocid": "tasks.list.tab",
            className: "gap-1.5 text-xs rounded-xl",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ListTodo, { className: "w-3.5 h-3.5" }),
              "List"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "calendar",
            "data-ocid": "tasks.calendar.tab",
            className: "gap-1.5 text-xs rounded-xl",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-3.5 h-3.5" }),
              "Calendar"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TaskInlineFilters,
        {
          search: inlineSearch,
          priority: inlinePriority,
          status: inlineStatus,
          onSearch: setInlineSearch,
          onPriority: setInlinePriority,
          onStatus: setInlineStatus,
          onExport: handleExportCSV
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "kanban", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory",
          style: { scrollbarWidth: "thin" },
          children: STATUSES.map((status) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            TaskKanbanColumn,
            {
              status,
              tasks: filteredTasks.filter((t) => t.status === status),
              onDragStart: handleDragStart,
              onDragOver: handleDragOver,
              onDrop: handleDrop,
              onAddNew: () => navigate({ to: "/tasks/new" }),
              onNavigate: handleNavigateToTask
            },
            status
          ))
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "list", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "bg-card rounded-2xl border border-border shadow-card p-4 sm:p-5",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            DataTable,
            {
              data: filteredTasks,
              columns: listColumns,
              searchKeys: ["title", "assignedTo", "assignedBy", "branchId"],
              searchPlaceholder: "Search tasks…",
              selectable: true,
              onSelectionChange: setSelectedIds,
              "data-ocid": "tasks.list.table"
            }
          ) })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "calendar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CalendarView,
        {
          tasks: filteredTasks,
          onNavigate: handleNavigateToTask
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BulkActionBar,
      {
        count: selectedIds.length,
        onExport: handleBulkExport,
        onDelete: handleBulkDelete,
        onDeselect: () => setSelectedIds([])
      }
    )
  ] });
}
export {
  TasksPage as default
};
