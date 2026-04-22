import { cn } from "@/lib/utils";
import { AlertTriangle, Minus, Zap } from "lucide-react";
import type { TaskPriority } from "../../types";

const priorityConfig: Record<
  TaskPriority,
  { label: string; className: string; Icon: React.ElementType }
> = {
  High: {
    label: "High",
    className: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    Icon: Zap,
  },
  Medium: {
    label: "Medium",
    className:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    Icon: AlertTriangle,
  },
  Low: {
    label: "Low",
    className: "bg-muted text-muted-foreground",
    Icon: Minus,
  },
};

interface PriorityBadgeProps {
  priority: TaskPriority;
  className?: string;
}

export function PriorityBadge({ priority, className }: PriorityBadgeProps) {
  const { label, className: cls, Icon } = priorityConfig[priority];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-semibold",
        cls,
        className,
      )}
    >
      <Icon className="w-2.5 h-2.5" />
      {label}
    </span>
  );
}
