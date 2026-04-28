import { a4 as useParams, u as useNavigate, r as reactExports, d as mockUsers, j as jsxRuntimeExports, C as Clock, p as User, X, q as Badge, B as Button, s as ue } from "./index-CgV9Taym.js";
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
import { T as TriangleAlert } from "./triangle-alert-t2GMGPuS.js";
import { A as Archive } from "./archive-D3cSLEei.js";
import "./Breadcrumb-Vnwm27w7.js";
const STATUSES = ["Todo", "In Progress", "Review", "Done"];
const PRIORITIES = ["High", "Medium", "Low"];
const CATEGORIES = ["Sales", "Operations", "Admin", "Finance", "HR"];
function EditTaskPage() {
  const { taskId } = useParams({ from: "/layout/tasks/$taskId/edit" });
  const navigate = useNavigate();
  const task = reactExports.useMemo(
    () => mockTasks.find((t) => t.id === taskId) ?? mockTasks[0],
    [taskId]
  );
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [showArchiveConfirm, setShowArchiveConfirm] = reactExports.useState(false);
  const [tagList, setTagList] = reactExports.useState(task.tags);
  const [assignees, setAssignees] = reactExports.useState([task.assignedToId]);
  const [form, setForm] = reactExports.useState({
    title: task.title,
    description: task.description,
    status: task.status,
    priority: task.priority,
    dueDate: task.dueDate.split("T")[0],
    estimatedHours: "",
    branchId: task.branchId,
    category: "",
    tags: "",
    progress: String(task.progress)
  });
  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
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
  function removeAssignee(id) {
    setAssignees((prev) => prev.filter((a) => a !== id));
  }
  function addAssignee(id) {
    if (!assignees.includes(id)) setAssignees((prev) => [...prev, id]);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.title.trim()) {
      ue.error("Task title is required");
      return;
    }
    if (!form.dueDate) {
      ue.error("Due date is required");
      return;
    }
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1e3));
    setIsSubmitting(false);
    ue.success("Task updated successfully");
    navigate({ to: "/tasks/$taskId", params: { taskId } });
  }
  async function handleArchive() {
    await new Promise((r) => setTimeout(r, 800));
    ue.success("Task archived");
    setShowArchiveConfirm(false);
    navigate({ to: "/tasks" });
  }
  const staffOptions = mockUsers.filter((u) => u.status === "Active");
  const selectedAssignees = staffOptions.filter(
    (u) => assignees.includes(u.id)
  );
  const createdAt = new Date(task.createdAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const updatedAt = (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    FormPage,
    {
      breadcrumbs: [
        { label: "Tasks", href: "/tasks" },
        { label: task.title, href: `/tasks/${taskId}` },
        { label: "Edit" }
      ],
      title: `Edit: ${task.title}`,
      description: `Created ${createdAt} · Last updated ${updatedAt}`,
      backTo: `/tasks/${taskId}`,
      submitLabel: "Save Changes",
      onSubmit: handleSubmit,
      isSubmitting,
      ocidPrefix: "edit_task",
      extraActions: showArchiveConfirm ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-destructive font-medium", children: "Archive this task?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            variant: "destructive",
            size: "sm",
            className: "h-8 text-xs",
            onClick: handleArchive,
            "data-ocid": "edit_task.archive_confirm_button",
            children: "Confirm"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            size: "sm",
            className: "h-8 text-xs",
            onClick: () => setShowArchiveConfirm(false),
            "data-ocid": "edit_task.archive_cancel_button",
            children: "Cancel"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "sm",
          className: "text-destructive border-destructive/30 hover:bg-destructive/10 gap-1.5 text-xs",
          onClick: () => setShowArchiveConfirm(true),
          "data-ocid": "edit_task.archive_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Archive, { className: "w-3.5 h-3.5" }),
            "Archive Task"
          ]
        }
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 p-3 rounded-xl bg-muted/40 border border-border text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-medium text-foreground", children: [
            "#",
            task.id
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Created ",
            createdAt
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Updated ",
            updatedAt
          ] }),
          task.completedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-green-600", children: [
              "Completed ",
              new Date(task.completedAt).toLocaleDateString("en-IN")
            ] })
          ] })
        ] }),
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
                  value: form.title,
                  onChange: (e) => update("title", e.target.value),
                  "data-ocid": "edit_task.title.input"
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
                  value: form.description,
                  onChange: (e) => update("description", e.target.value),
                  className: "resize-none",
                  "data-ocid": "edit_task.description.textarea"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: form.status,
                    onValueChange: (v) => update("status", v),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "edit_task.status.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Priority" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: form.priority,
                    onValueChange: (v) => update("priority", v),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "edit_task.priority.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: PRIORITIES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p, children: p }, p)) })
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
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "edit_task.category.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select category" }) }),
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
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "edit_task.branch.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select branch" }) }),
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
            "Scheduling & Progress"
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
                    "data-ocid": "edit_task.due_date.input"
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
                    "data-ocid": "edit_task.estimated_hours.input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "progress", children: "Progress" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-primary", children: [
                  form.progress,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "progress",
                  type: "range",
                  min: "0",
                  max: "100",
                  step: "5",
                  value: form.progress,
                  onChange: (e) => update("progress", e.target.value),
                  className: "h-2 cursor-pointer",
                  "data-ocid": "edit_task.progress.input"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full rounded-full bg-primary transition-all duration-300",
                  style: { width: `${form.progress}%` }
                }
              ) })
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
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "edit_task.assignee.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select staff to assign…" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: staffOptions.filter((u) => !assignees.includes(u.id)).map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: u.id, children: [
                  u.name,
                  " — ",
                  u.designation
                ] }, u.id)) })
              ] })
            ] }),
            selectedAssignees.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex flex-wrap gap-2",
                "data-ocid": "edit_task.assignees_list",
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
                          "data-ocid": `edit_task.remove_assignee.${u.id}`,
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4 text-primary" }),
            "Tags"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Type tag and press Enter or comma…",
                value: form.tags,
                onChange: (e) => update("tags", e.target.value),
                onKeyDown: handleTagKeyDown,
                "data-ocid": "edit_task.tags.input"
              }
            ),
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
                      "data-ocid": `edit_task.remove_tag.${tag}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-2.5 h-2.5" })
                    }
                  )
                ]
              },
              tag
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-destructive/20 bg-destructive/5 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-destructive mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-destructive", children: "Danger Zone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Archiving this task will remove it from active views. This action can be reversed by an admin." })
          ] })
        ] }) })
      ]
    }
  );
}
export {
  EditTaskPage as default
};
