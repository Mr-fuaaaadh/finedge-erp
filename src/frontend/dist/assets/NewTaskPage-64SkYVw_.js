import { u as useNavigate, r as reactExports, d as mockUsers, j as jsxRuntimeExports, C as Clock, p as User, X, q as Badge, G as GitBranch, s as ue } from "./index-CgV9Taym.js";
import { I as Input } from "./input-CQX-6uHe.js";
import { L as Label } from "./label-DBZIDZNQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BSYwbXVq.js";
import { S as Separator } from "./separator-n_ZCSSuO.js";
import { T as Textarea } from "./textarea-DRhbSqfF.js";
import { F as FormPage } from "./FormPage-HwyGab_x.js";
import { m as mockBranches } from "./mockBranches-6NlnyQQY.js";
import { m as mockTasks } from "./mockTasks-ZIylUAUd.js";
import { T as Tag } from "./tag-gTZruAkA.js";
import { C as CalendarDays } from "./calendar-days-C9hU70Su.js";
import { L as Layers } from "./layers-IXQV0ikI.js";
import "./Breadcrumb-Vnwm27w7.js";
const STATUSES = ["Todo", "In Progress", "Review", "Done"];
const PRIORITIES = ["High", "Medium", "Low"];
const CATEGORIES = ["Sales", "Operations", "Admin", "Finance", "HR"];
function NewTaskPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [assignees, setAssignees] = reactExports.useState([]);
  const [tagList, setTagList] = reactExports.useState([]);
  const [form, setForm] = reactExports.useState({
    title: "",
    description: "",
    status: "Todo",
    priority: "Medium",
    dueDate: "",
    estimatedHours: "",
    branchId: "",
    category: "",
    tags: "",
    parentTaskId: ""
  });
  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }
  function addAssignee(userId) {
    if (!assignees.includes(userId)) {
      setAssignees((prev) => [...prev, userId]);
    }
  }
  function removeAssignee(userId) {
    setAssignees((prev) => prev.filter((id) => id !== userId));
  }
  function handleTagKeyDown(e) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const val = form.tags.trim().replace(/,$/, "");
      if (val && !tagList.includes(val)) {
        setTagList((prev) => [...prev, val]);
      }
      update("tags", "");
    }
  }
  function removeTag(tag) {
    setTagList((prev) => prev.filter((t) => t !== tag));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.title.trim()) {
      ue.error("Task title is required");
      return;
    }
    if (!form.priority) {
      ue.error("Please select a priority");
      return;
    }
    if (!form.status) {
      ue.error("Please select a status");
      return;
    }
    if (!form.dueDate) {
      ue.error("Due date is required");
      return;
    }
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1e3));
    setIsSubmitting(false);
    ue.success("Task created successfully");
    navigate({ to: "/tasks" });
  }
  const staffOptions = mockUsers.filter((u) => u.status === "Active");
  const selectedAssignees = staffOptions.filter(
    (u) => assignees.includes(u.id)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    FormPage,
    {
      breadcrumbs: [{ label: "Tasks", href: "/tasks" }, { label: "New Task" }],
      title: "Create New Task",
      description: "Assign and configure a task for your team across branches",
      backTo: "/tasks",
      submitLabel: "Create Task",
      onSubmit: handleSubmit,
      isSubmitting,
      ocidPrefix: "new_task",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-semibold text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4 text-primary" }),
            "Task Details"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "title", children: [
                "Task Title ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "title",
                  placeholder: "e.g. Review quarterly loan performance report",
                  value: form.title,
                  onChange: (e) => update("title", e.target.value),
                  "data-ocid": "new_task.title.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "description", children: "Description" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "description",
                  rows: 4,
                  placeholder: "Describe the task objectives, deliverables, and acceptance criteria…",
                  value: form.description,
                  onChange: (e) => update("description", e.target.value),
                  className: "resize-none",
                  "data-ocid": "new_task.description.textarea"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                  "Priority ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: form.priority,
                    onValueChange: (v) => update("priority", v),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "new_task.priority.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: PRIORITIES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p, children: p }, p)) })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                  "Status ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: form.status,
                    onValueChange: (v) => update("status", v),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "new_task.status.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Category" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: form.category,
                    onValueChange: (v) => update("category", v),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "new_task.category.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select category" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Branch" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: form.branchId,
                    onValueChange: (v) => update("branchId", v),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "new_task.branch.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select branch" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hq", children: "Head Office" }),
                        mockBranches.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: b.id, children: b.name }, b.id))
                      ] })
                    ]
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-semibold text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-4 h-4 text-primary" }),
            "Scheduling"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "dueDate", children: [
                "Due Date ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "dueDate",
                    type: "date",
                    className: "pl-9",
                    value: form.dueDate,
                    onChange: (e) => update("dueDate", e.target.value),
                    "data-ocid": "new_task.due_date.input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "estimatedHours", children: "Estimated Hours" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "estimatedHours",
                    type: "number",
                    min: "0",
                    step: "0.5",
                    className: "pl-9",
                    placeholder: "e.g. 8",
                    value: form.estimatedHours,
                    onChange: (e) => update("estimatedHours", e.target.value),
                    "data-ocid": "new_task.estimated_hours.input"
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-semibold text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-primary" }),
            "Assignees"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Add Staff Member" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: addAssignee, value: "", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "new_task.assignee.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select staff to assign…" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: staffOptions.filter((u) => !assignees.includes(u.id)).map((u) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: u.id, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: u.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-[10px]", children: [
                    u.designation,
                    " · ",
                    u.branchName
                  ] })
                ] }) }, u.id)) })
              ] })
            ] }),
            selectedAssignees.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex flex-wrap gap-2",
                "data-ocid": "new_task.assignees_list",
                children: selectedAssignees.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-1.5 bg-muted/60 border border-border rounded-lg px-2.5 py-1",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded-full bg-primary/10 text-primary text-[9px] font-bold flex items-center justify-center shrink-0", children: u.name.split(" ").map((n) => n[0]).join("").slice(0, 2) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground", children: u.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => removeAssignee(u.id),
                          className: "text-muted-foreground hover:text-destructive transition-colors ml-0.5",
                          "aria-label": `Remove ${u.name}`,
                          "data-ocid": `new_task.remove_assignee.${u.id}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
                        }
                      )
                    ]
                  },
                  u.id
                ))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-semibold text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4 text-primary" }),
            "Additional Settings"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "tags", children: "Tags" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "tags",
                      placeholder: "Type tag and press Enter or comma…",
                      value: form.tags,
                      onChange: (e) => update("tags", e.target.value),
                      onKeyDown: handleTagKeyDown,
                      className: "pl-9",
                      "data-ocid": "new_task.tags.input"
                    }
                  )
                ] }),
                tagList.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: tagList.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    variant: "secondary",
                    className: "gap-1 pr-1.5 text-xs",
                    children: [
                      tag,
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => removeTag(tag),
                          "aria-label": `Remove tag ${tag}`,
                          className: "hover:text-destructive transition-colors",
                          "data-ocid": `new_task.remove_tag.${tag}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-2.5 h-2.5" })
                        }
                      )
                    ]
                  },
                  tag
                )) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Parent Task (optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(GitBranch, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: form.parentTaskId,
                    onValueChange: (v) => update("parentTaskId", v),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectTrigger,
                        {
                          className: "pl-9",
                          "data-ocid": "new_task.parent_task.select",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "None — this is a top-level task" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", children: "None" }),
                        mockTasks.slice(0, 10).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t.id, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground font-mono", children: [
                            "#",
                            t.id
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.title.length > 50 ? `${t.title.slice(0, 50)}…` : t.title })
                        ] }) }, t.id))
                      ] })
                    ]
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          "Fields marked with ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" }),
          " are required."
        ] })
      ]
    }
  );
}
export {
  NewTaskPage as default
};
