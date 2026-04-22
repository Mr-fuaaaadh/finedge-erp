import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { Inbox } from "lucide-react";
import { motion } from "motion/react";

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
  "data-ocid"?: string;
}

export function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  action,
  className,
  "data-ocid": dataOcid,
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      data-ocid={dataOcid}
      className={cn(
        "flex flex-col items-center justify-center py-16 px-4 text-center",
        className,
      )}
    >
      <div className="w-14 h-14 rounded-2xl bg-muted/60 flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-muted-foreground" />
      </div>
      <h3 className="text-sm font-display font-semibold text-foreground mb-1">
        {title}
      </h3>
      {description && (
        <p className="text-xs text-muted-foreground max-w-xs">{description}</p>
      )}
      {action && (
        <Button
          size="sm"
          onClick={action.onClick}
          className="mt-4 rounded-xl"
          data-ocid={`${dataOcid}.action_button`}
        >
          {action.label}
        </Button>
      )}
    </motion.div>
  );
}
