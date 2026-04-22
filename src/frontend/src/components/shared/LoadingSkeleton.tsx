import { Skeleton } from "@/components/ui/skeleton";

export function StatCardSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-card p-5">
      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-7 w-32" />
          <Skeleton className="h-3 w-16" />
        </div>
        <Skeleton className="w-10 h-10 rounded-xl" />
      </div>
    </div>
  );
}

export function TableRowSkeleton({ cols = 5 }: { cols?: number }) {
  return (
    <tr className="border-b border-border">
      {["c1", "c2", "c3", "c4", "c5"].slice(0, cols).map((k) => (
        <td key={k} className="px-4 py-3">
          <Skeleton className="h-4 w-full" />
        </td>
      ))}
    </tr>
  );
}

export function ChartSkeleton({ height = 200 }: { height?: number }) {
  return (
    <Skeleton className="w-full rounded-xl" style={{ height: `${height}px` }} />
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-card p-5 space-y-3">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-1/2" />
      <Skeleton className="h-20 w-full rounded-xl" />
    </div>
  );
}
