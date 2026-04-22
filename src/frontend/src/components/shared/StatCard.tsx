import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Minus, TrendingDown, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ElementType;
  iconColor?: string;
  loading?: boolean;
  prefix?: string;
  suffix?: string;
  "data-ocid"?: string;
}

export function StatCard({
  title,
  value,
  change,
  icon: Icon,
  iconColor = "text-primary",
  loading = false,
  prefix,
  suffix,
  "data-ocid": dataOcid,
}: StatCardProps) {
  if (loading) {
    return (
      <Card className="shadow-card border border-border rounded-2xl">
        <CardContent className="p-3 sm:p-4 lg:p-5">
          <div className="flex items-start justify-between">
            <div className="flex-1 space-y-2">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-3 w-14" />
            </div>
            <Skeleton className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl" />
          </div>
        </CardContent>
      </Card>
    );
  }

  const trendColor =
    change === undefined
      ? "text-muted-foreground"
      : change > 0
        ? "text-green-600 dark:text-green-400"
        : change < 0
          ? "text-red-500 dark:text-red-400"
          : "text-muted-foreground";

  const TrendIcon =
    change === undefined
      ? Minus
      : change > 0
        ? TrendingUp
        : change < 0
          ? TrendingDown
          : Minus;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      data-ocid={dataOcid}
    >
      <Card className="shadow-card border border-border rounded-2xl hover:shadow-elevated transition-smooth">
        <CardContent className="p-3 sm:p-4 lg:p-5">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <p className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wide truncate">
                {title}
              </p>
              <p className="mt-1 text-xl sm:text-2xl font-display font-bold text-foreground">
                {prefix && (
                  <span className="text-base sm:text-lg mr-0.5">{prefix}</span>
                )}
                {typeof value === "number" ? value.toLocaleString() : value}
                {suffix && (
                  <span className="text-sm sm:text-base ml-0.5">{suffix}</span>
                )}
              </p>
              {change !== undefined && (
                <div
                  className={cn(
                    "flex items-center gap-1 mt-1 text-[10px] sm:text-xs font-medium",
                    trendColor,
                  )}
                >
                  <TrendIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>
                    {change > 0 ? "+" : ""}
                    {change}%
                  </span>
                </div>
              )}
            </div>
            {Icon && (
              <div
                className={cn(
                  "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-muted/60 shrink-0",
                  iconColor,
                )}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
