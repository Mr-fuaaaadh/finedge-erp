import { e as createLucideIcon, a4 as useParams, u as useNavigate, r as reactExports, d as mockUsers, j as jsxRuntimeExports, q as Badge, B as Button, L as Link, p as User, G as GitBranch, C as Clock, S as SquareCheckBig, m as motion, s as ue } from "./index-CgV9Taym.js";
import { C as Card, a as CardHeader, c as CardTitle, b as CardContent } from "./card-BIrGk5lN.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BSYwbXVq.js";
import { S as Separator } from "./separator-n_ZCSSuO.js";
import { B as Breadcrumb } from "./Breadcrumb-Vnwm27w7.js";
import { P as PriorityBadge } from "./PriorityBadge-C2Id1hb0.js";
import { S as StatusBadge } from "./StatusBadge-BopRiVPx.js";
import { m as mockTasks } from "./mockTasks-ZIylUAUd.js";
import { C as CalendarDays } from "./calendar-days-C9hU70Su.js";
import { C as CircleCheck } from "./circle-check-DLxW8y4N.js";
import { S as SquarePen } from "./square-pen-DGyTVHfZ.js";
import { T as Tag } from "./tag-gTZruAkA.js";
import { U as UserPlus } from "./user-plus-CUs32BvV.js";
import { P as Paperclip } from "./paperclip-By3Rkw6y.js";
import { M as MessageSquare } from "./message-square-D_chnuLn.js";
import { Z as Zap } from "./zap-D7uWetWS.js";
import { A as Archive } from "./archive-D3cSLEei.js";
import "./minus-D6KT2NO-.js";
import "./triangle-alert-t2GMGPuS.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]];
const Circle = createLucideIcon("circle", __iconNode);
const STATUSES = ["Todo", "In Progress", "Review", "Done"];
function buildActivities(taskId) {
  return [
    {
      id: "a1",
      type: "created",
      actor: "Rajesh Kumar",
      content: "Created this task",
      timestamp: "2026-04-20T09:00:00Z"
    },
    {
      id: "a2",
      type: "assigned",
      actor: "Rajesh Kumar",
      content: `Assigned to team member (task ${taskId})`,
      timestamp: "2026-04-20T09:05:00Z"
    },
    {
      id: "a3",
      type: "status_change",
      actor: "System",
      content: "Status changed from Todo → In Progress",
      timestamp: "2026-04-22T10:30:00Z"
    },
    {
      id: "a4",
      type: "progress",
      actor: "Priya Sharma",
      content: "Progress updated to 45%",
      timestamp: "2026-04-23T14:00:00Z"
    },
    {
      id: "a5",
      type: "comment",
      actor: "Vijay Menon",
      content: "Reviewed the deliverables — looks good, minor adjustments needed.",
      timestamp: "2026-04-24T11:15:00Z"
    }
  ];
}
const activityIconMap = {
  created: { icon: Circle, color: "bg-muted text-muted-foreground" },
  assigned: { icon: UserPlus, color: "bg-primary/10 text-primary" },
  status_change: {
    icon: Zap,
    color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
  },
  comment: { icon: MessageSquare, color: "bg-secondary/10 text-secondary" },
  progress: {
    icon: CircleCheck,
    color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
  }
};
function SubtaskItem({
  subtask,
  index,
  onToggle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: -8 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: index * 0.05 },
      className: "flex items-center gap-2.5 py-2 border-b border-border last:border-0",
      "data-ocid": `task_detail.subtask.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => onToggle(subtask.id),
            className: "shrink-0 transition-colors",
            "aria-label": subtask.done ? "Mark incomplete" : "Mark complete",
            "data-ocid": `task_detail.subtask.checkbox.${index + 1}`,
            children: subtask.done ? /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-4 h-4 text-green-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "w-4 h-4 text-muted-foreground" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `text-xs flex-1 ${subtask.done ? "line-through text-muted-foreground" : "text-foreground"}`,
            children: subtask.title
          }
        )
      ]
    }
  );
}
function InfoRow({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-muted-foreground mt-0.5 shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: value })
    ] })
  ] });
}
function TaskDetailPage() {
  const { taskId } = useParams({ from: "/layout/tasks/$taskId" });
  const navigate = useNavigate();
  const task = reactExports.useMemo(
    () => mockTasks.find((t) => t.id === taskId) ?? mockTasks[0],
    [taskId]
  );
  const [status, setStatus] = reactExports.useState(task.status);
  const [subtasks, setSubtasks] = reactExports.useState([
    {
      id: "s1",
      title: "Review existing documentation and requirements",
      done: true
    },
    {
      id: "s2",
      title: "Coordinate with branch managers for inputs",
      done: true
    },
    {
      id: "s3",
      title: "Draft initial version and share for feedback",
      done: false
    },
    { id: "s4", title: "Incorporate feedback and finalize", done: false }
  ]);
  const activities = reactExports.useMemo(() => buildActivities(taskId), [taskId]);
  const assignedUser = mockUsers.find((u) => u.id === task.assignedToId);
  const assignedByUser = mockUsers.find((u) => u.name === task.assignedBy);
  const isOverdue = status !== "Done" && new Date(task.dueDate) < /* @__PURE__ */ new Date();
  const subtasksDone = subtasks.filter((s) => s.done).length;
  function toggleSubtask(id) {
    setSubtasks(
      (prev) => prev.map((s) => s.id === id ? { ...s, done: !s.done } : s)
    );
  }
  function handleStatusChange(newStatus) {
    setStatus(newStatus);
    ue.success(`Status updated to "${newStatus}"`);
  }
  function handleMarkComplete() {
    setStatus("Done");
    ue.success("Task marked as complete!");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-full bg-background", "data-ocid": "task_detail.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border sticky top-0 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Breadcrumb,
        {
          items: [{ label: "Tasks", href: "/tasks" }, { label: task.title }],
          className: "mb-2"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-base sm:text-lg font-display font-bold text-foreground leading-snug line-clamp-2", children: task.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mt-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: task.priority }),
            isOverdue && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-[10px]", children: "Overdue" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-3.5 h-3.5" }),
              "Due",
              " ",
              new Date(task.dueDate).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric"
              })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: status,
              onValueChange: (v) => handleStatusChange(v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "h-8 text-xs w-[140px] rounded-xl",
                    "data-ocid": "task_detail.status_select",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
              ]
            }
          ),
          status !== "Done" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "h-8 text-xs gap-1.5 text-green-700 border-green-300 hover:bg-green-50 dark:text-green-400 dark:border-green-800",
              onClick: handleMarkComplete,
              "data-ocid": "task_detail.mark_complete_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Mark Complete" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              asChild: true,
              className: "h-8 text-xs gap-1.5",
              "data-ocid": "task_detail.edit_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/tasks/$taskId/edit", params: { taskId: task.id }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-3.5 h-3.5" }),
                "Edit"
              ] })
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-1 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4 text-primary" }),
            "Task Info"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              InfoRow,
              {
                icon: User,
                label: "Assigned To",
                value: (assignedUser == null ? void 0 : assignedUser.name) ?? task.assignedTo
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              InfoRow,
              {
                icon: User,
                label: "Assigned By",
                value: (assignedByUser == null ? void 0 : assignedByUser.name) ?? task.assignedBy
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              InfoRow,
              {
                icon: CalendarDays,
                label: "Due Date",
                value: new Date(task.dueDate).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              InfoRow,
              {
                icon: CalendarDays,
                label: "Created",
                value: new Date(task.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              InfoRow,
              {
                icon: GitBranch,
                label: "Branch",
                value: task.branchId === "hq" ? "Head Office" : task.branchId.toUpperCase()
              }
            ),
            task.completedAt && /* @__PURE__ */ jsxRuntimeExports.jsx(
              InfoRow,
              {
                icon: CircleCheck,
                label: "Completed",
                value: new Date(task.completedAt).toLocaleDateString(
                  "en-IN",
                  { day: "numeric", month: "long", year: "numeric" }
                )
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-primary" }),
            "Progress"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: "Completion" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary", children: [
                task.progress,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-full bg-primary rounded-full transition-all duration-700",
                style: { width: `${task.progress}%` }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-3 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                subtasksDone,
                "/",
                subtasks.length,
                " subtasks done"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-primary" }),
            "Assignees"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", "data-ocid": "task_detail.assignees", children: [assignedUser].filter(Boolean).map(
              (u) => u && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0", children: u.name.split(" ").map((n) => n[0]).join("").slice(0, 2) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground truncate", children: u.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate", children: u.designation })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: u.status })
              ] }, u.id)
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "w-full mt-3 text-xs gap-1.5 h-7",
                onClick: () => navigate({
                  to: "/tasks/$taskId/edit",
                  params: { taskId: task.id }
                }),
                "data-ocid": "task_detail.assign_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-3.5 h-3.5" }),
                  "Assign Staff"
                ]
              }
            )
          ] })
        ] }),
        task.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4 text-primary" }),
            "Tags"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: task.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: tag }, tag)) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { className: "w-4 h-4 text-primary" }),
            "Attachments"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "border-2 border-dashed border-border rounded-xl p-6 text-center",
              "data-ocid": "task_detail.attachments.dropzone",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { className: "w-6 h-6 text-muted-foreground mx-auto mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "No attachments yet" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    className: "mt-3 text-xs h-7",
                    "data-ocid": "task_detail.attachments.upload_button",
                    children: "Upload File"
                  }
                )
              ]
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold", children: "Description" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap", children: task.description || "No description provided." }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "w-4 h-4 text-primary" }),
            "Subtasks",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-medium text-muted-foreground bg-muted px-1.5 py-0.5 rounded-md", children: [
              subtasksDone,
              "/",
              subtasks.length
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { "data-ocid": "task_detail.subtasks", children: subtasks.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            SubtaskItem,
            {
              subtask: s,
              index: i,
              onToggle: toggleSubtask
            },
            s.id
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-primary" }),
            "Activity"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", "data-ocid": "task_detail.activity", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 top-0 bottom-0 w-px bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: activities.map((act, i) => {
              const { icon: Icon, color } = activityIconMap[act.type];
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -8 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: i * 0.06 },
                  className: "relative flex gap-3 pl-1",
                  "data-ocid": `task_detail.activity.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `relative z-10 w-7 h-7 rounded-full flex items-center justify-center shrink-0 border-2 border-background ${color}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3 h-3" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 pb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: act.actor }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("time", { className: "text-[10px] text-muted-foreground whitespace-nowrap", children: new Date(act.timestamp).toLocaleDateString(
                          "en-IN",
                          { day: "numeric", month: "short" }
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: act.content })
                    ] })
                  ]
                },
                act.id
              );
            }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-4 h-4 text-primary" }),
            "Comments (",
            task.comments.length,
            ")"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "task_detail.comments", children: task.comments.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-center py-4", children: "No comments yet." }) : task.comments.map((comment, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 8 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: index * 0.08 },
                className: "flex gap-3",
                "data-ocid": `task_detail.comment.item.${index + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0", children: comment.author.split(" ").map((n) => n[0]).join("").slice(0, 2) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 bg-muted/40 rounded-xl px-3 py-2.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: comment.author }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: new Date(comment.createdAt).toLocaleDateString(
                        "en-IN",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric"
                        }
                      ) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: comment.text })
                  ] })
                ]
              },
              comment.id
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "w-full text-xs gap-1.5",
                "data-ocid": "task_detail.add_comment_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-3.5 h-3.5" }),
                  "Add Comment"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-wrap gap-2 pt-1",
            "data-ocid": "task_detail.actions",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "gap-1.5 text-xs",
                  asChild: true,
                  "data-ocid": "task_detail.edit_task_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/tasks/$taskId/edit", params: { taskId: task.id }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-3.5 h-3.5" }),
                    "Edit Task"
                  ] })
                }
              ),
              status !== "Done" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "gap-1.5 text-xs text-green-700 border-green-300 hover:bg-green-50 dark:text-green-400 dark:border-green-800",
                  onClick: handleMarkComplete,
                  "data-ocid": "task_detail.mark_complete_button.2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
                    "Mark Complete"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "gap-1.5 text-xs",
                  onClick: () => navigate({
                    to: "/tasks/$taskId/edit",
                    params: { taskId: task.id }
                  }),
                  "data-ocid": "task_detail.assign_staff_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-3.5 h-3.5" }),
                    "Assign Staff"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "gap-1.5 text-xs text-destructive border-destructive/30 hover:bg-destructive/10 ml-auto",
                  "data-ocid": "task_detail.archive_button",
                  onClick: () => {
                    ue.info("Navigate to edit to archive this task");
                    navigate({
                      to: "/tasks/$taskId/edit",
                      params: { taskId: task.id }
                    });
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Archive, { className: "w-3.5 h-3.5" }),
                    "Archive"
                  ]
                }
              )
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  TaskDetailPage as default
};
