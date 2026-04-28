import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  AlignLeft,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  Edit,
  Flag,
  LayoutGrid,
  ListTodo,
  Loader2,
  Plus,
  Search,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useMemo, useState } from "react";
import { toast } from "sonner";
import { BulkActionBar } from "../components/shared/BulkActionBar";
import { DataTable } from "../components/shared/DataTable";
import type { Column } from "../components/shared/DataTable";
import { FilterPanel } from "../components/shared/FilterPanel";
import type {
  FilterField,
  FilterValues,
} from "../components/shared/FilterPanel";
import { PageHeader } from "../components/shared/PageHeader";
import { PriorityBadge } from "../components/shared/PriorityBadge";
import { StatCard } from "../components/shared/StatCard";
import { StatusBadge } from "../components/shared/StatusBadge";
import { mockTasks } from "../data/mockTasks";
import type { Task, TaskPriority, TaskStatus } from "../types";
import { exportToCSV } from "../utils/csvExport";

// ─── Types ────────────────────────────────────────────────────────────────────

type DragState = { taskId: string; fromCol: TaskStatus } | null;

// ─── Constants ────────────────────────────────────────────────────────────────

const STATUSES: TaskStatus[] = ["Todo", "In Progress", "Review", "Done"];

const COLUMN_STYLES: Record<
  TaskStatus,
  { header: string; dot: string; accent: string }
> = {
  Todo: {
    header: "bg-muted/60 border-border",
    dot: "bg-muted-foreground",
    accent: "text-muted-foreground",
  },
  "In Progress": {
    header: "bg-amber-50 border-amber-200 dark:bg-amber-900/10",
    dot: "bg-amber-500",
    accent: "text-amber-600",
  },
  Review: {
    header: "bg-secondary/8 border-secondary/20",
    dot: "bg-secondary",
    accent: "text-secondary",
  },
  Done: {
    header: "bg-green-50 border-green-200 dark:bg-green-900/10",
    dot: "bg-green-500",
    accent: "text-green-600",
  },
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
  "December",
];

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// ─── Filter fields config ─────────────────────────────────────────────────────

const taskFilterFields: FilterField[] = [
  {
    key: "search",
    label: "Search",
    type: "text",
    placeholder: "Task title or description…",
  },
  {
    key: "priority",
    label: "Priority",
    type: "select",
    options: [
      { label: "Low", value: "Low" },
      { label: "Medium", value: "Medium" },
      { label: "High", value: "High" },
    ],
  },
  {
    key: "status",
    label: "Status",
    type: "select",
    options: [
      { label: "Todo", value: "Todo" },
      { label: "In Progress", value: "In Progress" },
      { label: "Review", value: "Review" },
      { label: "Done", value: "Done" },
    ],
  },
  {
    key: "assignee",
    label: "Assignee",
    type: "text",
    placeholder: "Staff name…",
  },
];

// ─── Kanban Card ──────────────────────────────────────────────────────────────

function TaskKanbanCard({
  task,
  onDragStart,
  onNavigate,
}: {
  task: Task;
  onDragStart: (e: React.DragEvent, task: Task) => void;
  onNavigate: (taskId: string) => void;
}) {
  const isOverdue =
    task.status !== "Done" && new Date(task.dueDate) < new Date();

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      draggable
      onDragStart={(e) => onDragStart(e as unknown as React.DragEvent, task)}
      onClick={() => onNavigate(task.id)}
      className="bg-card border border-border rounded-xl p-3.5 cursor-pointer shadow-card hover:shadow-elevated transition-smooth group"
      data-ocid={`tasks.kanban.card.${task.id}`}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <p className="text-xs font-semibold text-foreground line-clamp-2 flex-1 group-hover:text-primary transition-colors">
          {task.title}
        </p>
        <PriorityBadge priority={task.priority} />
      </div>

      {task.description && (
        <p className="text-[10px] text-muted-foreground line-clamp-2 mb-2">
          {task.description}
        </p>
      )}

      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-2.5">
        <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${task.progress}%` }}
          />
        </div>
        <span className="text-[10px] font-semibold text-muted-foreground w-7 text-right">
          {task.progress}%
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
          <User className="w-3 h-3" />
          <span className="truncate max-w-[80px]">{task.assignedTo}</span>
        </div>
        <div
          className={cn(
            "flex items-center gap-1 text-[10px]",
            isOverdue ? "text-red-500" : "text-muted-foreground",
          )}
        >
          {isOverdue && <Flag className="w-3 h-3" />}
          <CalendarDays className="w-3 h-3" />
          {new Date(task.dueDate).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
          })}
        </div>
      </div>

      {task.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2 pt-2 border-t border-border">
          {task.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-medium bg-muted text-muted-foreground px-1.5 py-0.5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

// ─── Kanban Column ────────────────────────────────────────────────────────────

function TaskKanbanColumn({
  status,
  tasks,
  onDragStart,
  onDragOver,
  onDrop,
  onAddNew,
  onNavigate,
}: {
  status: TaskStatus;
  tasks: Task[];
  onDragStart: (e: React.DragEvent, task: Task) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent, toCol: TaskStatus) => void;
  onAddNew: () => void;
  onNavigate: (taskId: string) => void;
}) {
  const [isDragOver, setIsDragOver] = useState(false);
  const styles = COLUMN_STYLES[status];

  return (
    <div
      className={cn(
        "flex flex-col min-w-[240px] w-[280px] flex-shrink-0 sm:flex-1 rounded-2xl border transition-smooth snap-start",
        isDragOver
          ? "border-primary/50 bg-primary/3"
          : "border-border bg-muted/20",
      )}
      onDragOver={(e) => {
        e.preventDefault();
        onDragOver(e);
        setIsDragOver(true);
      }}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={(e) => {
        onDrop(e, status);
        setIsDragOver(false);
      }}
      data-ocid={`tasks.kanban.column.${status.toLowerCase().replace(/ /g, "_")}`}
    >
      <div
        className={cn(
          "flex items-center justify-between px-4 py-3 rounded-t-2xl border-b",
          styles.header,
        )}
      >
        <div className="flex items-center gap-2">
          <span className={cn("w-2 h-2 rounded-full", styles.dot)} />
          <span className="text-xs font-semibold text-foreground">
            {status}
          </span>
          <span
            className={cn(
              "text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-card border",
              styles.accent,
            )}
          >
            {tasks.length}
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="w-6 h-6 rounded-lg"
          onClick={onAddNew}
          data-ocid={`tasks.kanban.add.${status.toLowerCase().replace(/ /g, "_")}`}
        >
          <Plus className="w-3.5 h-3.5" />
        </Button>
      </div>
      <ScrollArea className="flex-1 max-h-[520px]">
        <div className="p-3 space-y-2.5">
          {tasks.length === 0 ? (
            <div className="py-8 text-center text-[11px] text-muted-foreground">
              No tasks
            </div>
          ) : (
            tasks.map((task) => (
              <TaskKanbanCard
                key={task.id}
                task={task}
                onDragStart={onDragStart}
                onNavigate={onNavigate}
              />
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
}

// ─── List view columns ────────────────────────────────────────────────────────

function makeListColumns(onNavigate: (taskId: string) => void): Column<Task>[] {
  return [
    {
      key: "title",
      header: "Task",
      sortable: true,
      render: (row) => (
        <button
          type="button"
          onClick={() => onNavigate(row.id)}
          className="text-left group"
          data-ocid={`tasks.list.row.${row.id}.link`}
        >
          <p className="text-xs font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {row.title}
          </p>
          <p className="text-[10px] text-muted-foreground line-clamp-1">
            {row.description}
          </p>
        </button>
      ),
    },
    {
      key: "priority",
      header: "Priority",
      render: (row) => <PriorityBadge priority={row.priority} />,
    },
    {
      key: "assignedTo",
      header: "Assignee",
      render: (row) => (
        <span className="text-xs text-foreground">{row.assignedTo}</span>
      ),
    },
    {
      key: "branchId",
      header: "Branch",
      render: (row) => (
        <Badge variant="outline" className="text-[10px] font-medium">
          {row.branchId === "hq" ? "HQ" : row.branchId.toUpperCase()}
        </Badge>
      ),
    },
    {
      key: "dueDate",
      header: "Due Date",
      sortable: true,
      render: (row) => {
        const overdue =
          row.status !== "Done" && new Date(row.dueDate) < new Date();
        return (
          <span
            className={cn(
              "text-xs",
              overdue ? "text-red-500 font-semibold" : "text-muted-foreground",
            )}
          >
            {new Date(row.dueDate).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
            })}
          </span>
        );
      },
    },
    {
      key: "progress",
      header: "Progress",
      align: "right",
      render: (row) => (
        <div className="flex items-center justify-end gap-2">
          <div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${row.progress}%` }}
            />
          </div>
          <span className="text-xs font-semibold text-foreground w-8">
            {row.progress}%
          </span>
        </div>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      key: "id",
      header: "",
      align: "right",
      render: (row) => (
        <Link
          to="/tasks/$taskId/edit"
          params={{ taskId: row.id }}
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-lg hover:bg-muted/60"
          data-ocid={`tasks.list.row.${row.id}.edit_button`}
        >
          <Edit className="w-3 h-3" />
          Edit
        </Link>
      ),
    },
  ];
}

// ─── Calendar View ────────────────────────────────────────────────────────────

function CalendarView({
  tasks,
  onNavigate,
}: {
  tasks: Task[];
  onNavigate: (taskId: string) => void;
}) {
  const today = new Date();
  const [viewDate, setViewDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [
    ...Array<null>(firstDayOfMonth).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  while (cells.length % 7 !== 0) cells.push(null);

  const tasksByDay = useMemo(() => {
    const map: Record<number, Task[]> = {};
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

  const selectedDayTasks = selectedDay ? (tasksByDay[selectedDay] ?? []) : [];

  const prevMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
    setSelectedDay(null);
  };
  const nextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
    setSelectedDay(null);
  };

  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-card rounded-2xl border border-border shadow-card overflow-hidden"
        data-ocid="tasks.calendar"
      >
        {/* Calendar header */}
        <div className="flex items-center justify-between px-5 py-4 border-b bg-muted/20">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl"
            onClick={prevMonth}
            data-ocid="tasks.calendar.prev_month"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <h3 className="text-sm font-semibold text-foreground">
            {MONTH_NAMES[month]} {year}
          </h3>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl"
            onClick={nextMonth}
            data-ocid="tasks.calendar.next_month"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 border-b">
          {DAY_NAMES.map((d) => (
            <div
              key={d}
              className="text-center text-[10px] font-semibold text-muted-foreground py-2"
            >
              <span className="hidden sm:inline">{d}</span>
              <span className="sm:hidden">{d[0]}</span>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-7">
          {cells.map((day, idx) => {
            const isToday =
              day !== null &&
              today.getDate() === day &&
              today.getMonth() === month &&
              today.getFullYear() === year;
            const dayTasks = day !== null ? (tasksByDay[day] ?? []) : [];
            const isSelected = day !== null && selectedDay === day;

            return (
              <div
                key={`cell-${idx}-${day ?? "empty"}`}
                role={day !== null ? "button" : undefined}
                tabIndex={day !== null ? 0 : undefined}
                className={cn(
                  "min-h-[60px] sm:min-h-[80px] p-1 sm:p-1.5 border-r border-b last:border-r-0 relative cursor-pointer",
                  day === null
                    ? "bg-muted/10 cursor-default"
                    : "bg-card hover:bg-muted/20 transition-colors",
                  isSelected
                    ? "bg-primary/5 ring-1 ring-inset ring-primary/30"
                    : "",
                  idx % 7 === 6 ? "border-r-0" : "",
                )}
                onClick={() =>
                  day !== null &&
                  setSelectedDay(day === selectedDay ? null : day)
                }
                onKeyDown={(e) => {
                  if ((e.key === "Enter" || e.key === " ") && day !== null)
                    setSelectedDay(day === selectedDay ? null : day);
                }}
                data-ocid={day ? `tasks.calendar.day.${day}` : undefined}
              >
                {day !== null && (
                  <>
                    <span
                      className={cn(
                        "text-[10px] sm:text-xs font-medium w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full mb-0.5 sm:mb-1",
                        isToday
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground",
                      )}
                    >
                      {day}
                    </span>

                    <div className="hidden sm:block space-y-0.5">
                      {dayTasks.slice(0, 2).map((t) => (
                        <Popover key={t.id}>
                          <PopoverTrigger asChild>
                            <button
                              type="button"
                              onClick={(e) => e.stopPropagation()}
                              className={cn(
                                "w-full text-left text-[9px] px-1.5 py-0.5 rounded truncate font-medium",
                                t.priority === "High"
                                  ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                                  : t.priority === "Medium"
                                    ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                                    : "bg-primary/10 text-primary",
                              )}
                            >
                              {t.title}
                            </button>
                          </PopoverTrigger>
                          <PopoverContent
                            className="w-72 p-3"
                            data-ocid={`tasks.calendar.day.${day}.popover_content`}
                          >
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <p className="text-xs font-semibold text-foreground">
                                {t.title}
                              </p>
                              <StatusBadge status={t.status} />
                            </div>
                            <p className="text-[10px] text-muted-foreground mb-2">
                              {t.assignedTo}
                            </p>
                            <Button
                              size="sm"
                              variant="outline"
                              className="w-full text-xs h-7"
                              onClick={() => onNavigate(t.id)}
                            >
                              View Task
                            </Button>
                          </PopoverContent>
                        </Popover>
                      ))}
                      {dayTasks.length > 2 && (
                        <span className="text-[9px] text-muted-foreground px-1">
                          +{dayTasks.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Mobile: dot indicator */}
                    {dayTasks.length > 0 && (
                      <div className="sm:hidden flex gap-0.5 mt-0.5 justify-center">
                        {dayTasks.slice(0, 3).map((t) => (
                          <span
                            key={t.id}
                            className={cn(
                              "w-1 h-1 rounded-full",
                              t.priority === "High"
                                ? "bg-red-500"
                                : t.priority === "Medium"
                                  ? "bg-amber-500"
                                  : "bg-primary",
                            )}
                          />
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Mobile selected day task list */}
      {selectedDay !== null && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-2xl border border-border shadow-card p-4"
          data-ocid="tasks.calendar.selected_day_panel"
        >
          <h3 className="text-sm font-semibold text-foreground mb-3">
            {MONTH_NAMES[month]} {selectedDay} — {selectedDayTasks.length} task
            {selectedDayTasks.length !== 1 ? "s" : ""}
          </h3>
          {selectedDayTasks.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">
              No tasks due on this date
            </p>
          ) : (
            <div className="space-y-2">
              {selectedDayTasks.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => onNavigate(t.id)}
                  className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl bg-muted/30 border border-border hover:bg-muted/60 transition-colors group"
                  data-ocid={`tasks.calendar.selected.${t.id}`}
                >
                  <PriorityBadge priority={t.priority} />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {t.title}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {t.assignedTo}
                    </p>
                  </div>
                  <StatusBadge status={t.status} />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

// ─── Inline Filter Row ────────────────────────────────────────────────────────

function TaskInlineFilters({
  search,
  priority,
  status,
  onSearch,
  onPriority,
  onStatus,
  onExport,
}: {
  search: string;
  priority: string;
  status: string;
  onSearch: (v: string) => void;
  onPriority: (v: string) => void;
  onStatus: (v: string) => void;
  onExport: () => void;
}) {
  return (
    <div
      className="flex flex-wrap items-center gap-2 mb-4 bg-card border border-border rounded-2xl shadow-card px-3 sm:px-4 py-2.5"
      data-ocid="tasks.inline_filters"
    >
      <div className="relative flex-1 min-w-[140px] max-w-xs">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
        <Input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search tasks…"
          className="h-8 pl-8 text-xs rounded-xl"
          data-ocid="tasks.filter.search_input"
        />
      </div>

      <Select value={priority} onValueChange={onPriority}>
        <SelectTrigger
          className="h-8 text-xs w-[120px] rounded-xl"
          data-ocid="tasks.filter.priority_select"
        >
          <SelectValue placeholder="Priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Priorities</SelectItem>
          <SelectItem value="Low">Low</SelectItem>
          <SelectItem value="Medium">Medium</SelectItem>
          <SelectItem value="High">High</SelectItem>
        </SelectContent>
      </Select>

      <Select value={status} onValueChange={onStatus}>
        <SelectTrigger
          className="h-8 text-xs w-[130px] rounded-xl"
          data-ocid="tasks.filter.status_select"
        >
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Statuses</SelectItem>
          <SelectItem value="Todo">Todo</SelectItem>
          <SelectItem value="In Progress">In Progress</SelectItem>
          <SelectItem value="Review">Review</SelectItem>
          <SelectItem value="Done">Done</SelectItem>
        </SelectContent>
      </Select>

      <Button
        variant="outline"
        size="sm"
        className="h-8 rounded-xl gap-1.5 text-xs ml-auto"
        onClick={onExport}
        data-ocid="tasks.filter.export_csv_button"
      >
        <Download className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Export CSV</span>
        <span className="sm:hidden">CSV</span>
      </Button>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function TasksPage() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [dragState, setDragState] = useState<DragState>(null);
  const [filterValues, setFilterValues] = useState<FilterValues>({});
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const [inlineSearch, setInlineSearch] = useState("");
  const [inlinePriority, setInlinePriority] = useState("all");
  const [inlineStatus, setInlineStatus] = useState("all");

  const stats = useMemo(
    () => ({
      total: tasks.length,
      inProgress: tasks.filter((t) => t.status === "In Progress").length,
      review: tasks.filter((t) => t.status === "Review").length,
      done: tasks.filter((t) => t.status === "Done").length,
      overdue: tasks.filter(
        (t) => t.status !== "Done" && new Date(t.dueDate) < new Date(),
      ).length,
    }),
    [tasks],
  );

  const filteredTasks = useMemo(() => {
    return tasks.filter((t) => {
      const advSearch = (filterValues.search as string | undefined) ?? "";
      const advPriority = (filterValues.priority as string | undefined) ?? "";
      const advStatus = (filterValues.status as string | undefined) ?? "";
      const advAssignee = (filterValues.assignee as string | undefined) ?? "";

      if (
        advSearch &&
        !t.title.toLowerCase().includes(advSearch.toLowerCase()) &&
        !t.description?.toLowerCase().includes(advSearch.toLowerCase())
      )
        return false;
      if (advPriority && t.priority !== advPriority) return false;
      if (advStatus && t.status !== advStatus) return false;
      if (
        advAssignee &&
        !t.assignedTo.toLowerCase().includes(advAssignee.toLowerCase())
      )
        return false;

      if (
        inlineSearch &&
        !t.title.toLowerCase().includes(inlineSearch.toLowerCase()) &&
        !t.description?.toLowerCase().includes(inlineSearch.toLowerCase())
      )
        return false;
      if (
        inlinePriority &&
        inlinePriority !== "all" &&
        t.priority !== inlinePriority
      )
        return false;
      if (inlineStatus && inlineStatus !== "all" && t.status !== inlineStatus)
        return false;

      return true;
    });
  }, [tasks, filterValues, inlineSearch, inlinePriority, inlineStatus]);

  const handleDragStart = (e: React.DragEvent, task: Task) => {
    setDragState({ taskId: task.id, fromCol: task.status });
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, toCol: TaskStatus) => {
    e.preventDefault();
    if (!dragState || dragState.fromCol === toCol) return;
    setTasks((prev) =>
      prev.map((t) =>
        t.id === dragState.taskId ? { ...t, status: toCol } : t,
      ),
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
      "Progress %": t.progress,
    }));
    exportToCSV(rows as Record<string, unknown>[], "tasks_export");
    toast.success("Tasks exported to CSV");
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
      "Progress %": t.progress,
    }));
    exportToCSV(rows as Record<string, unknown>[], "tasks_selected_export");
    toast.success(`${selected.length} tasks exported`);
  };

  const handleBulkDelete = () => {
    setTasks((prev) => prev.filter((t) => !selectedIds.includes(t.id)));
    toast.success(`${selectedIds.length} tasks deleted`);
    setSelectedIds([]);
  };

  const handleNavigateToTask = useCallback(
    (taskId: string) => {
      navigate({ to: "/tasks/$taskId", params: { taskId } });
    },
    [navigate],
  );

  const listColumns = useMemo(
    () => makeListColumns(handleNavigateToTask),
    [handleNavigateToTask],
  );

  return (
    <div>
      <PageHeader
        title="Task Management"
        subtitle={`${stats.total} tasks across all branches`}
        breadcrumbs={[{ label: "Home" }, { label: "Tasks" }]}
        actions={
          <div className="flex items-center gap-2 flex-wrap">
            <FilterPanel
              filters={taskFilterFields}
              presetKey="tasks"
              onFilterChange={setFilterValues}
            />
            <Button
              variant="outline"
              size="sm"
              className="rounded-xl gap-1.5"
              onClick={handleExportCSV}
              data-ocid="tasks.export_csv_button"
            >
              <Download className="w-3.5 h-3.5" />
              Export CSV
            </Button>
            <Button
              size="sm"
              className="rounded-xl gap-1.5"
              onClick={() => navigate({ to: "/tasks/new" })}
              data-ocid="tasks.add_task.primary_button"
            >
              <Plus className="w-3.5 h-3.5" />
              Create Task
            </Button>
          </div>
        }
        data-ocid="tasks.header"
      />

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mb-4 sm:mb-5">
        <StatCard
          title="Total Tasks"
          value={stats.total}
          icon={ListTodo}
          change={4}
          data-ocid="tasks.stat.total"
        />
        <StatCard
          title="In Progress"
          value={stats.inProgress}
          icon={Loader2}
          iconColor="text-amber-500"
          data-ocid="tasks.stat.in_progress"
        />
        <StatCard
          title="In Review"
          value={stats.review}
          icon={AlignLeft}
          iconColor="text-secondary"
          data-ocid="tasks.stat.review"
        />
        <StatCard
          title="Completed"
          value={stats.done}
          icon={CheckCircle2}
          iconColor="text-green-600"
          change={15}
          data-ocid="tasks.stat.done"
        />
        <StatCard
          title="Overdue"
          value={stats.overdue}
          icon={Clock}
          iconColor="text-red-500"
          change={-8}
          data-ocid="tasks.stat.overdue"
        />
      </div>

      {/* Views */}
      <Tabs defaultValue="kanban" data-ocid="tasks.view_tabs">
        <TabsList className="mb-4 rounded-xl">
          <TabsTrigger
            value="kanban"
            data-ocid="tasks.kanban.tab"
            className="gap-1.5 text-xs rounded-xl"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            Kanban
          </TabsTrigger>
          <TabsTrigger
            value="list"
            data-ocid="tasks.list.tab"
            className="gap-1.5 text-xs rounded-xl"
          >
            <ListTodo className="w-3.5 h-3.5" />
            List
          </TabsTrigger>
          <TabsTrigger
            value="calendar"
            data-ocid="tasks.calendar.tab"
            className="gap-1.5 text-xs rounded-xl"
          >
            <CalendarDays className="w-3.5 h-3.5" />
            Calendar
          </TabsTrigger>
        </TabsList>

        <TaskInlineFilters
          search={inlineSearch}
          priority={inlinePriority}
          status={inlineStatus}
          onSearch={setInlineSearch}
          onPriority={setInlinePriority}
          onStatus={setInlineStatus}
          onExport={handleExportCSV}
        />

        {/* Kanban view — horizontally scrollable with snap on mobile */}
        <TabsContent value="kanban">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "thin" }}
          >
            {STATUSES.map((status) => (
              <TaskKanbanColumn
                key={status}
                status={status}
                tasks={filteredTasks.filter((t) => t.status === status)}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onAddNew={() => navigate({ to: "/tasks/new" })}
                onNavigate={handleNavigateToTask}
              />
            ))}
          </motion.div>
        </TabsContent>

        {/* List view */}
        <TabsContent value="list">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-card rounded-2xl border border-border shadow-card p-4 sm:p-5"
          >
            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <DataTable
                data={filteredTasks}
                columns={listColumns}
                searchKeys={["title", "assignedTo", "assignedBy", "branchId"]}
                searchPlaceholder="Search tasks…"
                selectable
                onSelectionChange={setSelectedIds}
                data-ocid="tasks.list.table"
              />
            </div>
          </motion.div>
        </TabsContent>

        {/* Calendar view */}
        <TabsContent value="calendar">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <CalendarView
              tasks={filteredTasks}
              onNavigate={handleNavigateToTask}
            />
          </motion.div>
        </TabsContent>
      </Tabs>

      {/* Bulk Action Bar — sticky bottom on mobile */}
      <BulkActionBar
        count={selectedIds.length}
        onExport={handleBulkExport}
        onDelete={handleBulkDelete}
        onDeselect={() => setSelectedIds([])}
      />
    </div>
  );
}
