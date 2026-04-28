import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb navigation — renders a clickable trail of path segments.
 * Last item is always non-clickable (current page).
 */
export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center gap-1 flex-wrap", className)}
      data-ocid="breadcrumb"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-1">
            {index > 0 && (
              <ChevronRight className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
            )}
            {isLast || !item.href ? (
              <span
                className={cn(
                  "text-sm font-medium",
                  isLast
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground transition-colors",
                )}
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                data-ocid={`breadcrumb.${item.label.toLowerCase().replace(/\s+/g, "_")}.link`}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
