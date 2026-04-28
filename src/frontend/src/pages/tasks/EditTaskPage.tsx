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
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  AlertTriangle,
  Archive,
  CalendarDays,
  Clock,
  Tag,
  User,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
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
  progress: string;
}

export default function EditTaskPage() {
  const { taskId } = useParams({ from: "/layout/tasks/$taskId/edit" });
  const navigate = useNavigate();

  const task = useMemo(
    () => mockTasks.find((t) => t.id === taskId) ?? mockTasks[0],
    [taskId],
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showArchiveConfirm, setShowArchiveConfirm] = useState(false);
  const [tagList, setTagList] = useState<string[]>(task.tags);
  const [assignees, setAssignees] = useState<string[]>([task.assignedToId]);

  const [form, setForm] = useState<FormState>({
    title: task.title,
    description: task.description,
    status: task.status,
    priority: task.priority,
    dueDate: task.dueDate.split("T")[0],
    estimatedHours: "",
    branchId: task.branchId,
    category: "",
    tags: "",
    progress: String(task.progress),
  });

  function update<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
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

  function removeAssignee(id: string) {
    setAssignees((prev) => prev.filter((a) => a !== id));
  }

  function addAssignee(id: string) {
    if (!assignees.includes(id)) setAssignees((prev) => [...prev, id]);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim()) {
      toast.error("Task title is required");
      return;
    }
    if (!form.dueDate) {
      toast.error("Due date is required");
      return;
    }
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    toast.success("Task updated successfully");
    navigate({ to: "/tasks/$taskId", params: { taskId } });
  }

  async function handleArchive() {
    await new Promise((r) => setTimeout(r, 800));
    toast.success("Task archived");
    setShowArchiveConfirm(false);
    navigate({ to: "/tasks" });
  }

  const staffOptions = mockUsers.filter((u) => u.status === "Active");
  const selectedAssignees = staffOptions.filter((u) =>
    assignees.includes(u.id),
  );

  const createdAt = new Date(task.createdAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const updatedAt = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <FormPage
      breadcrumbs={[
        { label: "Tasks", href: "/tasks" },
        { label: task.title, href: `/tasks/${taskId}` },
        { label: "Edit" },
      ]}
      title={`Edit: ${task.title}`}
      description={`Created ${createdAt} · Last updated ${updatedAt}`}
      backTo={`/tasks/${taskId}`}
      submitLabel="Save Changes"
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      ocidPrefix="edit_task"
      extraActions={
        showArchiveConfirm ? (
          <div className="flex items-center gap-2">
            <span className="text-xs text-destructive font-medium">
              Archive this task?
            </span>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              className="h-8 text-xs"
              onClick={handleArchive}
              data-ocid="edit_task.archive_confirm_button"
            >
              Confirm
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="h-8 text-xs"
              onClick={() => setShowArchiveConfirm(false)}
              data-ocid="edit_task.archive_cancel_button"
            >
              Cancel
            </Button>
          </div>
        ) : (
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="text-destructive border-destructive/30 hover:bg-destructive/10 gap-1.5 text-xs"
            onClick={() => setShowArchiveConfirm(true)}
            data-ocid="edit_task.archive_button"
          >
            <Archive className="w-3.5 h-3.5" />
            Archive Task
          </Button>
        )
      }
    >
      {/* ── Task metadata bar ── */}
      <div className="flex flex-wrap items-center gap-3 p-3 rounded-xl bg-muted/40 border border-border text-xs text-muted-foreground">
        <span className="font-mono font-medium text-foreground">
          #{task.id}
        </span>
        <span>·</span>
        <span>Created {createdAt}</span>
        <span>·</span>
        <span>Updated {updatedAt}</span>
        {task.completedAt && (
          <>
            <span>·</span>
            <span className="text-green-600">
              Completed {new Date(task.completedAt).toLocaleDateString("en-IN")}
            </span>
          </>
        )}
      </div>

      {/* ── Task Details ── */}
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
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              data-ocid="edit_task.title.input"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              rows={4}
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
              className="resize-none"
              data-ocid="edit_task.description.textarea"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>Status</Label>
              <Select
                value={form.status}
                onValueChange={(v) => update("status", v as TaskStatus)}
              >
                <SelectTrigger data-ocid="edit_task.status.select">
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
              <Label>Priority</Label>
              <Select
                value={form.priority}
                onValueChange={(v) => update("priority", v as TaskPriority)}
              >
                <SelectTrigger data-ocid="edit_task.priority.select">
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
              <Label>Category</Label>
              <Select
                value={form.category}
                onValueChange={(v) => update("category", v as Category)}
              >
                <SelectTrigger data-ocid="edit_task.category.select">
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
                <SelectTrigger data-ocid="edit_task.branch.select">
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

      {/* ── Scheduling & Progress ── */}
      <section>
        <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-primary" />
          Scheduling & Progress
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
                data-ocid="edit_task.due_date.input"
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
                data-ocid="edit_task.estimated_hours.input"
              />
            </div>
          </div>

          <div className="space-y-2 sm:col-span-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="progress">Progress</Label>
              <span className="text-sm font-semibold text-primary">
                {form.progress}%
              </span>
            </div>
            <Input
              id="progress"
              type="range"
              min="0"
              max="100"
              step="5"
              value={form.progress}
              onChange={(e) => update("progress", e.target.value)}
              className="h-2 cursor-pointer"
              data-ocid="edit_task.progress.input"
            />
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-300"
                style={{ width: `${form.progress}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Assignees ── */}
      <section>
        <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <User className="w-4 h-4 text-primary" />
          Assignees
        </h2>
        <div className="space-y-3">
          <div className="space-y-1.5">
            <Label>Add Staff Member</Label>
            <Select onValueChange={addAssignee} value="">
              <SelectTrigger data-ocid="edit_task.assignee.select">
                <SelectValue placeholder="Select staff to assign…" />
              </SelectTrigger>
              <SelectContent>
                {staffOptions
                  .filter((u) => !assignees.includes(u.id))
                  .map((u) => (
                    <SelectItem key={u.id} value={u.id}>
                      {u.name} — {u.designation}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>

          {selectedAssignees.length > 0 && (
            <div
              className="flex flex-wrap gap-2"
              data-ocid="edit_task.assignees_list"
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
                    data-ocid={`edit_task.remove_assignee.${u.id}`}
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

      {/* ── Tags ── */}
      <section>
        <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <Tag className="w-4 h-4 text-primary" />
          Tags
        </h2>
        <div className="space-y-2">
          <Input
            placeholder="Type tag and press Enter or comma…"
            value={form.tags}
            onChange={(e) => update("tags", e.target.value)}
            onKeyDown={handleTagKeyDown}
            data-ocid="edit_task.tags.input"
          />
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
                    data-ocid={`edit_task.remove_tag.${tag}`}
                  >
                    <X className="w-2.5 h-2.5" />
                  </button>
                </Badge>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Archive danger zone ── */}
      <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-destructive">
              Danger Zone
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Archiving this task will remove it from active views. This action
              can be reversed by an admin.
            </p>
          </div>
        </div>
      </div>
    </FormPage>
  );
}
