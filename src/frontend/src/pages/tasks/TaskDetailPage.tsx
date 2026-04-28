import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import {
  Archive,
  CalendarDays,
  CheckCircle2,
  CheckSquare,
  Circle,
  Clock,
  Edit,
  GitBranch,
  MessageSquare,
  Paperclip,
  Tag,
  User,
  UserPlus,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Breadcrumb } from "../../components/shared/Breadcrumb";
import { PriorityBadge } from "../../components/shared/PriorityBadge";
import { StatusBadge } from "../../components/shared/StatusBadge";
import { mockTasks } from "../../data/mockTasks";
import { mockUsers } from "../../data/mockUsers";
import type { TaskStatus } from "../../types";

const STATUSES: TaskStatus[] = ["Todo", "In Progress", "Review", "Done"];

// ─── Mock activity for a task ─────────────────────────────────────────────────

interface TaskActivity {
  id: string;
  type: "assigned" | "status_change" | "comment" | "created" | "progress";
  actor: string;
  content: string;
  timestamp: string;
}

function buildActivities(taskId: string): TaskActivity[] {
  return [
    {
      id: "a1",
      type: "created",
      actor: "Rajesh Kumar",
      content: "Created this task",
      timestamp: "2026-04-20T09:00:00Z",
    },
    {
      id: "a2",
      type: "assigned",
      actor: "Rajesh Kumar",
      content: `Assigned to team member (task ${taskId})`,
      timestamp: "2026-04-20T09:05:00Z",
    },
    {
      id: "a3",
      type: "status_change",
      actor: "System",
      content: "Status changed from Todo → In Progress",
      timestamp: "2026-04-22T10:30:00Z",
    },
    {
      id: "a4",
      type: "progress",
      actor: "Priya Sharma",
      content: "Progress updated to 45%",
      timestamp: "2026-04-23T14:00:00Z",
    },
    {
      id: "a5",
      type: "comment",
      actor: "Vijay Menon",
      content:
        "Reviewed the deliverables — looks good, minor adjustments needed.",
      timestamp: "2026-04-24T11:15:00Z",
    },
  ];
}

const activityIconMap: Record<
  TaskActivity["type"],
  { icon: React.ElementType; color: string }
> = {
  created: { icon: Circle, color: "bg-muted text-muted-foreground" },
  assigned: { icon: UserPlus, color: "bg-primary/10 text-primary" },
  status_change: {
    icon: Zap,
    color:
      "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
  },
  comment: { icon: MessageSquare, color: "bg-secondary/10 text-secondary" },
  progress: {
    icon: CheckCircle2,
    color:
      "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  },
};

// ─── Subtask item ─────────────────────────────────────────────────────────────

interface Subtask {
  id: string;
  title: string;
  done: boolean;
}

function SubtaskItem({
  subtask,
  index,
  onToggle,
}: {
  subtask: Subtask;
  index: number;
  onToggle: (id: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="flex items-center gap-2.5 py-2 border-b border-border last:border-0"
      data-ocid={`task_detail.subtask.item.${index + 1}`}
    >
      <button
        type="button"
        onClick={() => onToggle(subtask.id)}
        className="shrink-0 transition-colors"
        aria-label={subtask.done ? "Mark incomplete" : "Mark complete"}
        data-ocid={`task_detail.subtask.checkbox.${index + 1}`}
      >
        {subtask.done ? (
          <CheckSquare className="w-4 h-4 text-green-600" />
        ) : (
          <Circle className="w-4 h-4 text-muted-foreground" />
        )}
      </button>
      <span
        className={`text-xs flex-1 ${subtask.done ? "line-through text-muted-foreground" : "text-foreground"}`}
      >
        {subtask.title}
      </span>
    </motion.div>
  );
}

// ─── Info row helper ──────────────────────────────────────────────────────────

function InfoRow({
  icon: Icon,
  label,
  value,
}: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
          {label}
        </p>
        <p className="text-sm font-medium text-foreground truncate">{value}</p>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function TaskDetailPage() {
  const { taskId } = useParams({ from: "/layout/tasks/$taskId" });
  const navigate = useNavigate();

  const task = useMemo(
    () => mockTasks.find((t) => t.id === taskId) ?? mockTasks[0],
    [taskId],
  );

  const [status, setStatus] = useState<TaskStatus>(task.status);
  const [subtasks, setSubtasks] = useState<Subtask[]>([
    {
      id: "s1",
      title: "Review existing documentation and requirements",
      done: true,
    },
    {
      id: "s2",
      title: "Coordinate with branch managers for inputs",
      done: true,
    },
    {
      id: "s3",
      title: "Draft initial version and share for feedback",
      done: false,
    },
    { id: "s4", title: "Incorporate feedback and finalize", done: false },
  ]);

  const activities = useMemo(() => buildActivities(taskId), [taskId]);

  const assignedUser = mockUsers.find((u) => u.id === task.assignedToId);
  const assignedByUser = mockUsers.find((u) => u.name === task.assignedBy);

  const isOverdue = status !== "Done" && new Date(task.dueDate) < new Date();
  const subtasksDone = subtasks.filter((s) => s.done).length;

  function toggleSubtask(id: string) {
    setSubtasks((prev) =>
      prev.map((s) => (s.id === id ? { ...s, done: !s.done } : s)),
    );
  }

  function handleStatusChange(newStatus: TaskStatus) {
    setStatus(newStatus);
    toast.success(`Status updated to "${newStatus}"`);
  }

  function handleMarkComplete() {
    setStatus("Done");
    toast.success("Task marked as complete!");
  }

  return (
    <div className="min-h-full bg-background" data-ocid="task_detail.page">
      {/* ── Sticky header ── */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <Breadcrumb
            items={[{ label: "Tasks", href: "/tasks" }, { label: task.title }]}
            className="mb-2"
          />

          <div className="flex flex-col sm:flex-row sm:items-start gap-3">
            <div className="flex-1 min-w-0">
              <h1 className="text-base sm:text-lg font-display font-bold text-foreground leading-snug line-clamp-2">
                {task.title}
              </h1>
              <div className="flex flex-wrap items-center gap-2 mt-1.5">
                <PriorityBadge priority={task.priority} />
                {isOverdue && (
                  <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-[10px]">
                    Overdue
                  </Badge>
                )}
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <CalendarDays className="w-3.5 h-3.5" />
                  Due{" "}
                  {new Date(task.dueDate).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </div>
              </div>
            </div>

            {/* Status quick-change + actions */}
            <div className="flex items-center gap-2 flex-wrap shrink-0">
              <Select
                value={status}
                onValueChange={(v) => handleStatusChange(v as TaskStatus)}
              >
                <SelectTrigger
                  className="h-8 text-xs w-[140px] rounded-xl"
                  data-ocid="task_detail.status_select"
                >
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

              {status !== "Done" && (
                <Button
                  size="sm"
                  variant="outline"
                  className="h-8 text-xs gap-1.5 text-green-700 border-green-300 hover:bg-green-50 dark:text-green-400 dark:border-green-800"
                  onClick={handleMarkComplete}
                  data-ocid="task_detail.mark_complete_button"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mark Complete</span>
                </Button>
              )}

              <Button
                size="sm"
                asChild
                className="h-8 text-xs gap-1.5"
                data-ocid="task_detail.edit_button"
              >
                <Link to="/tasks/$taskId/edit" params={{ taskId: task.id }}>
                  <Edit className="w-3.5 h-3.5" />
                  Edit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* ── LEFT column ── */}
          <div className="lg:col-span-1 space-y-4">
            {/* Task Info */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold flex items-center gap-1.5">
                  <Tag className="w-4 h-4 text-primary" />
                  Task Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <InfoRow
                  icon={User}
                  label="Assigned To"
                  value={assignedUser?.name ?? task.assignedTo}
                />
                <InfoRow
                  icon={User}
                  label="Assigned By"
                  value={assignedByUser?.name ?? task.assignedBy}
                />
                <InfoRow
                  icon={CalendarDays}
                  label="Due Date"
                  value={new Date(task.dueDate).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                />
                <InfoRow
                  icon={CalendarDays}
                  label="Created"
                  value={new Date(task.createdAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                />
                <InfoRow
                  icon={GitBranch}
                  label="Branch"
                  value={
                    task.branchId === "hq"
                      ? "Head Office"
                      : task.branchId.toUpperCase()
                  }
                />
                {task.completedAt && (
                  <InfoRow
                    icon={CheckCircle2}
                    label="Completed"
                    value={new Date(task.completedAt).toLocaleDateString(
                      "en-IN",
                      { day: "numeric", month: "long", year: "numeric" },
                    )}
                  />
                )}
              </CardContent>
            </Card>

            {/* Progress */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary" />
                  Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground text-xs">
                    Completion
                  </span>
                  <span className="font-bold text-primary">
                    {task.progress}%
                  </span>
                </div>
                <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-700"
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                  <span>
                    {subtasksDone}/{subtasks.length} subtasks done
                  </span>
                  <StatusBadge status={status} />
                </div>
              </CardContent>
            </Card>

            {/* Assignees */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold flex items-center gap-1.5">
                  <User className="w-4 h-4 text-primary" />
                  Assignees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2.5" data-ocid="task_detail.assignees">
                  {[assignedUser].filter(Boolean).map(
                    (u) =>
                      u && (
                        <div key={u.id} className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                            {u.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold text-foreground truncate">
                              {u.name}
                            </p>
                            <p className="text-[10px] text-muted-foreground truncate">
                              {u.designation}
                            </p>
                          </div>
                          <StatusBadge status={u.status} />
                        </div>
                      ),
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-3 text-xs gap-1.5 h-7"
                  onClick={() =>
                    navigate({
                      to: "/tasks/$taskId/edit",
                      params: { taskId: task.id },
                    })
                  }
                  data-ocid="task_detail.assign_button"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  Assign Staff
                </Button>
              </CardContent>
            </Card>

            {/* Tags */}
            {task.tags.length > 0 && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold flex items-center gap-1.5">
                    <Tag className="w-4 h-4 text-primary" />
                    Tags
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {task.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Attachments placeholder */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold flex items-center gap-1.5">
                  <Paperclip className="w-4 h-4 text-primary" />
                  Attachments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="border-2 border-dashed border-border rounded-xl p-6 text-center"
                  data-ocid="task_detail.attachments.dropzone"
                >
                  <Paperclip className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">
                    No attachments yet
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-3 text-xs h-7"
                    data-ocid="task_detail.attachments.upload_button"
                  >
                    Upload File
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ── RIGHT column ── */}
          <div className="lg:col-span-2 space-y-4">
            {/* Description */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold">
                  Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {task.description || "No description provided."}
                </p>
              </CardContent>
            </Card>

            {/* Subtasks */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-semibold flex items-center gap-1.5">
                    <CheckSquare className="w-4 h-4 text-primary" />
                    Subtasks
                    <span className="text-[10px] font-medium text-muted-foreground bg-muted px-1.5 py-0.5 rounded-md">
                      {subtasksDone}/{subtasks.length}
                    </span>
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent data-ocid="task_detail.subtasks">
                {subtasks.map((s, i) => (
                  <SubtaskItem
                    key={s.id}
                    subtask={s}
                    index={i}
                    onToggle={toggleSubtask}
                  />
                ))}
              </CardContent>
            </Card>

            {/* Activity Timeline */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary" />
                  Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative" data-ocid="task_detail.activity">
                  {/* Vertical line */}
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
                  <div className="space-y-4">
                    {activities.map((act, i) => {
                      const { icon: Icon, color } = activityIconMap[act.type];
                      return (
                        <motion.div
                          key={act.id}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06 }}
                          className="relative flex gap-3 pl-1"
                          data-ocid={`task_detail.activity.item.${i + 1}`}
                        >
                          <div
                            className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center shrink-0 border-2 border-background ${color}`}
                          >
                            <Icon className="w-3 h-3" />
                          </div>
                          <div className="flex-1 min-w-0 pb-1">
                            <div className="flex items-baseline justify-between gap-2">
                              <p className="text-xs font-semibold text-foreground">
                                {act.actor}
                              </p>
                              <time className="text-[10px] text-muted-foreground whitespace-nowrap">
                                {new Date(act.timestamp).toLocaleDateString(
                                  "en-IN",
                                  { day: "numeric", month: "short" },
                                )}
                              </time>
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {act.content}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comments */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Comments ({task.comments.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4" data-ocid="task_detail.comments">
                  {task.comments.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      No comments yet.
                    </p>
                  ) : (
                    task.comments.map((comment, index) => (
                      <motion.div
                        key={comment.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 }}
                        className="flex gap-3"
                        data-ocid={`task_detail.comment.item.${index + 1}`}
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">
                          {comment.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </div>
                        <div className="flex-1 min-w-0 bg-muted/40 rounded-xl px-3 py-2.5">
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-1">
                            <p className="text-xs font-semibold text-foreground">
                              {comment.author}
                            </p>
                            <p className="text-[10px] text-muted-foreground">
                              {new Date(comment.createdAt).toLocaleDateString(
                                "en-IN",
                                {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                },
                              )}
                            </p>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {comment.text}
                          </p>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
                <Separator className="my-3" />
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs gap-1.5"
                  data-ocid="task_detail.add_comment_button"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Add Comment
                </Button>
              </CardContent>
            </Card>

            {/* Action buttons */}
            <div
              className="flex flex-wrap gap-2 pt-1"
              data-ocid="task_detail.actions"
            >
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 text-xs"
                asChild
                data-ocid="task_detail.edit_task_button"
              >
                <Link to="/tasks/$taskId/edit" params={{ taskId: task.id }}>
                  <Edit className="w-3.5 h-3.5" />
                  Edit Task
                </Link>
              </Button>
              {status !== "Done" && (
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-1.5 text-xs text-green-700 border-green-300 hover:bg-green-50 dark:text-green-400 dark:border-green-800"
                  onClick={handleMarkComplete}
                  data-ocid="task_detail.mark_complete_button.2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Mark Complete
                </Button>
              )}
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 text-xs"
                onClick={() =>
                  navigate({
                    to: "/tasks/$taskId/edit",
                    params: { taskId: task.id },
                  })
                }
                data-ocid="task_detail.assign_staff_button"
              >
                <UserPlus className="w-3.5 h-3.5" />
                Assign Staff
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 text-xs text-destructive border-destructive/30 hover:bg-destructive/10 ml-auto"
                data-ocid="task_detail.archive_button"
                onClick={() => {
                  toast.info("Navigate to edit to archive this task");
                  navigate({
                    to: "/tasks/$taskId/edit",
                    params: { taskId: task.id },
                  });
                }}
              >
                <Archive className="w-3.5 h-3.5" />
                Archive
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
