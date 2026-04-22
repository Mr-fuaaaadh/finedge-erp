import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Calendar,
  FileText,
  Mail,
  Phone,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import type { Activity } from "../../types";

const activityIcons: Record<Activity["type"], React.ElementType> = {
  call: Phone,
  email: Mail,
  meeting: Users,
  note: FileText,
  status_change: ArrowRight,
};

const activityColors: Record<Activity["type"], string> = {
  call: "bg-primary/10 text-primary",
  email: "bg-secondary/10 text-secondary",
  meeting: "bg-accent/10 text-accent-foreground",
  note: "bg-muted text-muted-foreground",
  status_change:
    "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
};

interface TimelineProps {
  activities: Activity[];
  "data-ocid"?: string;
}

export function Timeline({ activities, "data-ocid": dataOcid }: TimelineProps) {
  if (activities.length === 0) {
    return (
      <p className="text-sm text-muted-foreground text-center py-6">
        No activity yet.
      </p>
    );
  }

  return (
    <div data-ocid={dataOcid} className="relative">
      {/* Vertical line */}
      <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
      <div className="space-y-4">
        {activities.map((activity, i) => {
          const Icon = activityIcons[activity.type] ?? FileText;
          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              data-ocid={`timeline.item.${i + 1}`}
              className="relative flex gap-4 pl-1"
            >
              {/* Icon */}
              <div
                className={cn(
                  "relative z-10 flex items-center justify-center w-8 h-8 rounded-full shrink-0 border-2 border-background",
                  activityColors[activity.type],
                )}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>
              {/* Content */}
              <div className="flex-1 pb-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold text-foreground">
                    {activity.title}
                  </p>
                  <time className="text-[10px] text-muted-foreground whitespace-nowrap mt-0.5">
                    {new Date(activity.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {activity.description}
                </p>
                <p className="text-[10px] text-muted-foreground mt-1 flex items-center gap-1">
                  <Calendar className="w-2.5 h-2.5" />
                  {activity.createdBy}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
