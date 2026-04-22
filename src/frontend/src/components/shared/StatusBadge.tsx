import { cn } from "@/lib/utils";

type StatusVariant =
  | "Active"
  | "Inactive"
  | "Pending"
  | "Suspended"
  | "On Leave"
  | "New"
  | "In Progress"
  | "Converted"
  | "Rejected"
  | "Todo"
  | "Review"
  | "Done"
  | "Present"
  | "Absent"
  | "Late"
  | "Half Day"
  | "Leave";

const statusStyles: Record<StatusVariant, string> = {
  Active:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Inactive: "bg-muted text-muted-foreground",
  Pending:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Suspended: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  "On Leave":
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  New: "bg-primary/10 text-primary",
  "In Progress":
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Converted:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Rejected: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  Todo: "bg-muted text-muted-foreground",
  Review: "bg-secondary/10 text-secondary",
  Done: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Present:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Absent: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  Late: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  "Half Day":
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  Leave: "bg-muted text-muted-foreground",
};

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const style =
    statusStyles[status as StatusVariant] ?? "bg-muted text-muted-foreground";

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-lg text-[11px] font-semibold",
        style,
        className,
      )}
    >
      {status}
    </span>
  );
}
