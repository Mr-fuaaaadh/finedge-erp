import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  Line,
  LineChart,
  Tooltip as ReTooltip,
  ResponsiveContainer,
} from "recharts";

interface KPIWidgetProps {
  label: string;
  value: number | string;
  unit?: string;
  prefix?: string;
  target?: number;
  sparkline?: number[];
  trend?: "up" | "down" | "stable";
  loading?: boolean;
  "data-ocid"?: string;
}

export function KPIWidget({
  label,
  value,
  unit,
  prefix,
  target,
  sparkline,
  trend,
  loading = false,
  "data-ocid": dataOcid,
}: KPIWidgetProps) {
  if (loading) {
    return (
      <Card className="shadow-card border border-border rounded-2xl">
        <CardContent className="p-3 sm:p-4 lg:p-5">
          <Skeleton className="h-3 w-24 mb-3" />
          <Skeleton className="h-8 w-28 mb-2" />
          <Skeleton className="h-10 w-full" />
        </CardContent>
      </Card>
    );
  }

  const numericValue =
    typeof value === "number" ? value : Number.parseFloat(String(value));
  const pct = target
    ? Math.min(100, Math.round((numericValue / target) * 100))
    : null;

  const sparkData = sparkline?.map((v, i) => ({ i, v })) ?? [];

  const trendColor =
    trend === "up" ? "#16a34a" : trend === "down" ? "#dc2626" : "#6b7280";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      data-ocid={dataOcid}
    >
      <Card className="shadow-card border border-border rounded-2xl">
        <CardContent className="p-3 sm:p-4 lg:p-5">
          <p className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {label}
          </p>
          <p className="mt-1.5 text-2xl sm:text-3xl font-display font-bold text-foreground">
            {prefix}
            {typeof value === "number" ? value.toLocaleString() : value}
            {unit && (
              <span className="text-base sm:text-lg ml-1 font-normal text-muted-foreground">
                {unit}
              </span>
            )}
          </p>
          {target && pct !== null && (
            <div className="mt-2 sm:mt-3 space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>vs target</span>
                <span
                  className={cn(
                    "font-semibold",
                    pct >= 100
                      ? "text-green-600"
                      : pct >= 80
                        ? "text-amber-600"
                        : "text-red-500",
                  )}
                >
                  {pct}%
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                <div
                  className={cn(
                    "h-full rounded-full transition-all duration-500",
                    pct >= 100
                      ? "bg-green-500"
                      : pct >= 80
                        ? "bg-amber-500"
                        : "bg-red-500",
                  )}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          )}
          {sparkline && sparkline.length > 0 && (
            <div className="mt-2 sm:mt-3 h-10 sm:h-12">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparkData}>
                  <Line
                    type="monotone"
                    dataKey="v"
                    stroke={trendColor}
                    strokeWidth={2}
                    dot={false}
                  />
                  <ReTooltip
                    contentStyle={{ display: "none" }}
                    cursor={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
