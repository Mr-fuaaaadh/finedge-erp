import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: React.ReactNode;
  className?: string;
  "data-ocid"?: string;
}

export function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  actions,
  className,
  "data-ocid": dataOcid,
}: PageHeaderProps) {
  return (
    <div
      data-ocid={dataOcid}
      className={cn(
        "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4 sm:mb-6",
        className,
      )}
    >
      <div className="min-w-0 flex-1">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1 mb-1.5 flex-wrap">
            {breadcrumbs.map((crumb) => (
              <span key={crumb.label} className="flex items-center gap-1">
                {crumb.label !== breadcrumbs[0].label && (
                  <ChevronRight className="w-3 h-3 text-muted-foreground" />
                )}
                {crumb.href ? (
                  <a
                    href={crumb.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-xs text-muted-foreground">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-lg sm:text-xl font-display font-bold text-foreground leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 line-clamp-2">
            {subtitle}
          </p>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-2 shrink-0 flex-wrap">
          {actions}
        </div>
      )}
    </div>
  );
}
