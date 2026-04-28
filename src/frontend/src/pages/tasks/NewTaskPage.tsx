import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "@tanstack/react-router";
import {
  CalendarDays,
  Clock,
  GitBranch,
  Layers,
  Tag,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { FormPage } from "../../components/shared/FormPage";
import { mockBranches } from "../../data/mockBranches";
import { mockTasks } from "../../data/mockTasks";
import { mockUsers } from "../../data/mockUsers";
import type { TaskPriority, TaskStatus } from "../../types";

const STATUSES: TaskStatus[] = ["Todo", "In Progress", "Review", "Done"];
const PRIORITIES: TaskPriority[] = ["High", "Medium", "Low"];
const CATEGORIES = ["Sales", "Operations", "Admin", "Finance", "HR"] as const;
type Category = (typeof CATEGORIES)[number];

interface FormState {
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  estimatedHours: string;
  branchId: string;
  category: Category | "";
  tags: string;
  parentTaskId: string;
}

export default function NewTaskPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [assignees, setAssignees] = useState<string[]>([]);
  const [tagList, setTagList] = useState<string[]>([]);
  const [form, setForm] = useState<FormState>({
    title: "",
    description: "",
    status: "Todo",
    priority: "Medium",
    dueDate: "",
    estimatedHours: "",
    branchId: "",
    category: "",
    tags: "",
    parentTaskId: "",
  });

  function update<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function addAssignee(userId: string) {
    if (!assignees.includes(userId)) {
      setAssignees((prev) => [...prev, userId]);
    }
  }

  function removeAssignee(userId: string) {
    setAssignees((prev) => prev.filter((id) => id !== userId));
  }

  function handleTagKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const val = form.tags.trim().replace(/,$/, "");
      if (val && !tagList.includes(val)) {
        setTagList((prev) => [...prev, val]);
      }
      update("tags", "");
    }
  }

  function removeTag(tag: string) {
    setTagList((prev) => prev.filter((t) => t !== tag));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim()) {
      toast.error("Task title is required");
      return;
    }
    if (!form.priority) {
      toast.error("Please select a priority");
      return;
    }
    if (!form.status) {
      toast.error("Please select a status");
      return;
    }
    if (!form.dueDate) {
      toast.error("Due date is required");
      return;
    }
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    toast.success("Task created successfully");
    navigate({ to: "/tasks" });
  }

  const staffOptions = mockUsers.filter((u) => u.status === "Active");
  const selectedAssignees = staffOptions.filter((u) =>
    assignees.includes(u.id),
  );

  return (
    <FormPage
      breadcrumbs={[{ label: "Tasks", href: "/tasks" }, { label: "New Task" }]}
      title="Create New Task"
      description="Assign and configure a task for your team across branches"
      backTo="/tasks"
      submitLabel="Create Task"
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      ocidPrefix="new_task"
    >
      {/* ── Task Basics ── */}
      <section>
        <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <Tag className="w-4 h-4 text-primary" />
          Task Details
        </h2>
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="title">
              Task Title <span className="text-destructive">*</span>
            </Label>
            <Input
              id="title"
              placeholder="e.g. Review quarterly loan performance report"
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              data-ocid="new_task.title.input"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              rows={4}
              placeholder="Describe the task objectives, deliverables, and acceptance criteria…"
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
              className="resize-none"
              data-ocid="new_task.description.textarea"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>
                Priority <span className="text-destructive">*</span>
              </Label>
              <Select
                value={form.priority}
                onValueChange={(v) => update("priority", v as TaskPriority)}
              >
                <SelectTrigger data-ocid="new_task.priority.select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {PRIORITIES.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label>
                Status <span className="text-destructive">*</span>
              </Label>
              <Select
                value={form.status}
                onValueChange={(v) => update("status", v as TaskStatus)}
              >
                <SelectTrigger data-ocid="new_task.status.select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {STATUSES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label>Category</Label>
              <Select
                value={form.category}
                onValueChange={(v) => update("category", v as Category)}
              >
                <SelectTrigger data-ocid="new_task.category.select">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label>Branch</Label>
              <Select
                value={form.branchId}
                onValueChange={(v) => update("branchId", v)}
              >
                <SelectTrigger data-ocid="new_task.branch.select">
                  <SelectValue placeholder="Select branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hq">Head Office</SelectItem>
                  {mockBranches.map((b) => (
                    <SelectItem key={b.id} value={b.id}>
                      {b.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Scheduling ── */}
      <section>
        <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-primary" />
          Scheduling
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="dueDate">
              Due Date <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                id="dueDate"
                type="date"
                className="pl-9"
                value={form.dueDate}
                onChange={(e) => update("dueDate", e.target.value)}
                data-ocid="new_task.due_date.input"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="estimatedHours">Estimated Hours</Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                id="estimatedHours"
                type="number"
                min="0"
                step="0.5"
                className="pl-9"
                placeholder="e.g. 8"
                value={form.estimatedHours}
                onChange={(e) => update("estimatedHours", e.target.value)}
                data-ocid="new_task.estimated_hours.input"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Assignment ── */}
      <section>
        <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <User className="w-4 h-4 text-primary" />
          Assignees
        </h2>

        <div className="space-y-3">
          <div className="space-y-1.5">
            <Label>Add Staff Member</Label>
            <Select onValueChange={addAssignee} value="">
              <SelectTrigger data-ocid="new_task.assignee.select">
                <SelectValue placeholder="Select staff to assign…" />
              </SelectTrigger>
              <SelectContent>
                {staffOptions
                  .filter((u) => !assignees.includes(u.id))
                  .map((u) => (
                    <SelectItem key={u.id} value={u.id}>
                      <span className="flex items-center gap-2">
                        <span>{u.name}</span>
                        <span className="text-muted-foreground text-[10px]">
                          {u.designation} · {u.branchName}
                        </span>
                      </span>
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>

          {selectedAssignees.length > 0 && (
            <div
              className="flex flex-wrap gap-2"
              data-ocid="new_task.assignees_list"
            >
              {selectedAssignees.map((u) => (
                <div
                  key={u.id}
                  className="flex items-center gap-1.5 bg-muted/60 border border-border rounded-lg px-2.5 py-1"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[9px] font-bold flex items-center justify-center shrink-0">
                    {u.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <span className="text-xs font-medium text-foreground">
                    {u.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeAssignee(u.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors ml-0.5"
                    aria-label={`Remove ${u.name}`}
                    data-ocid={`new_task.remove_assignee.${u.id}`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Separator />

      {/* ── Additional ── */}
      <section>
        <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <Layers className="w-4 h-4 text-primary" />
          Additional Settings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="tags">Tags</Label>
            <div className="space-y-2">
              <div className="relative">
                <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <Input
                  id="tags"
                  placeholder="Type tag and press Enter or comma…"
                  value={form.tags}
                  onChange={(e) => update("tags", e.target.value)}
                  onKeyDown={handleTagKeyDown}
                  className="pl-9"
                  data-ocid="new_task.tags.input"
                />
              </div>
              {tagList.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {tagList.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="gap-1 pr-1.5 text-xs"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        aria-label={`Remove tag ${tag}`}
                        className="hover:text-destructive transition-colors"
                        data-ocid={`new_task.remove_tag.${tag}`}
                      >
                        <X className="w-2.5 h-2.5" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-1.5 sm:col-span-2">
            <Label>Parent Task (optional)</Label>
            <div className="relative">
              <GitBranch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Select
                value={form.parentTaskId}
                onValueChange={(v) => update("parentTaskId", v)}
              >
                <SelectTrigger
                  className="pl-9"
                  data-ocid="new_task.parent_task.select"
                >
                  <SelectValue placeholder="None — this is a top-level task" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  {mockTasks.slice(0, 10).map((t) => (
                    <SelectItem key={t.id} value={t.id}>
                      <span className="flex items-center gap-2">
                        <span className="text-[10px] text-muted-foreground font-mono">
                          #{t.id}
                        </span>
                        <span>
                          {t.title.length > 50
                            ? `${t.title.slice(0, 50)}…`
                            : t.title}
                        </span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Required fields note */}
      <p className="text-xs text-muted-foreground">
        Fields marked with <span className="text-destructive">*</span> are
        required.
      </p>
    </FormPage>
  );
}
