import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";
import { useState } from "react";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  loading?: boolean;
  children: React.ReactNode;
  periods?: string[];
  "data-ocid"?: string;
  action?: React.ReactNode;
}

export function ChartCard({
  title,
  subtitle,
  loading = false,
  children,
  periods,
  "data-ocid": dataOcid,
  action,
}: ChartCardProps) {
  const [activePeriod, setActivePeriod] = useState(periods?.[0] ?? "");

  if (loading) {
    return (
      <Card className="shadow-card border border-border rounded-2xl">
        <CardHeader className="pb-3">
          <Skeleton className="h-4 w-36" />
          <Skeleton className="h-3 w-24 mt-1" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[200px] sm:h-[240px] w-full rounded-xl" />
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      data-ocid={dataOcid}
      className="h-full"
    >
      <Card className="shadow-card border border-border rounded-2xl h-full">
        <CardHeader className="pb-2 p-3 sm:p-4 lg:p-5">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-display font-semibold text-foreground truncate">
                {title}
              </h3>
              {subtitle && (
                <p className="text-xs text-muted-foreground mt-0.5 truncate">
                  {subtitle}
                </p>
              )}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {periods && periods.length > 1 && (
                <div className="flex rounded-lg overflow-hidden border border-border">
                  {periods.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setActivePeriod(p)}
                      className={`px-2 py-1 text-[10px] sm:text-xs font-medium transition-smooth ${
                        activePeriod === p
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}
              {action}
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0 px-3 sm:px-4 lg:px-5 pb-3 sm:pb-4 lg:pb-5">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export { Button };
