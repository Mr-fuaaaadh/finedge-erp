import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";
import {
  Building2,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  Clock,
  DollarSign,
  GitBranch,
  LayoutDashboard,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { useUIStore } from "../../store/uiStore";
import type { Role } from "../../types";

interface NavItem {
  label: string;
  icon: React.ElementType;
  path: string;
  allowedRoles: Role[];
}

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
    allowedRoles: ["admin", "branch_manager", "staff", "finance_manager"],
  },
  {
    label: "Branches",
    icon: GitBranch,
    path: "/branches",
    allowedRoles: ["admin", "finance_manager"],
  },
  {
    label: "Staff",
    icon: Users,
    path: "/staff",
    allowedRoles: ["admin", "branch_manager"],
  },
  {
    label: "Leads / CRM",
    icon: Target,
    path: "/leads",
    allowedRoles: ["admin", "branch_manager", "staff"],
  },
  {
    label: "Tasks",
    icon: CheckSquare,
    path: "/tasks",
    allowedRoles: ["admin", "branch_manager", "staff", "finance_manager"],
  },
  {
    label: "Attendance",
    icon: Clock,
    path: "/attendance",
    allowedRoles: ["admin", "branch_manager", "staff"],
  },
  {
    label: "Finance",
    icon: DollarSign,
    path: "/finance",
    allowedRoles: ["admin", "finance_manager"],
  },
  {
    label: "Performance",
    icon: TrendingUp,
    path: "/performance",
    allowedRoles: ["admin", "branch_manager", "finance_manager"],
  },
  {
    label: "Audit Logs",
    icon: ShieldCheck,
    path: "/audit-logs",
    allowedRoles: ["admin"],
  },
];

export function Sidebar() {
  const { sidebarCollapsed, toggleSidebar, mobileOpen, closeMobileSidebar } =
    useUIStore();
  const { role } = useAuth();
  const location = useLocation();

  const visibleItems = navItems.filter((item) =>
    item.allowedRoles.includes(role),
  );

  return (
    <>
      {/* ─── Desktop sidebar: lg+ — fixed, always visible, toggleable width ─── */}
      <aside
        data-ocid="sidebar"
        className={cn(
          "fixed left-0 top-0 h-screen flex-col bg-card border-r border-border transition-all duration-300 z-30",
          "hidden lg:flex",
          sidebarCollapsed ? "w-16" : "w-60",
        )}
      >
        <SidebarContent
          sidebarCollapsed={sidebarCollapsed}
          toggleSidebar={toggleSidebar}
          visibleItems={visibleItems}
          location={location}
          isMobile={false}
        />
      </aside>

      {/* ─── Tablet sidebar: md to lg — always visible, icon-only (w-16) ─── */}
      <aside
        data-ocid="sidebar.tablet"
        className={cn(
          "fixed left-0 top-0 h-screen w-16 flex-col bg-card border-r border-border z-30",
          "hidden md:flex lg:hidden",
        )}
      >
        <SidebarContent
          sidebarCollapsed={true}
          toggleSidebar={() => {}}
          visibleItems={visibleItems}
          location={location}
          isMobile={false}
          isTablet={true}
        />
      </aside>

      {/* ─── Mobile drawer: <md — overlay, slides in from left ─── */}
      <aside
        data-ocid="sidebar.mobile"
        className={cn(
          "fixed left-0 top-0 h-screen w-72 flex-col bg-card border-r border-border transition-transform duration-300 ease-in-out z-50",
          "flex md:hidden",
          mobileOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full",
        )}
      >
        <SidebarContent
          sidebarCollapsed={false}
          toggleSidebar={closeMobileSidebar}
          visibleItems={visibleItems}
          location={location}
          isMobile={true}
          onNavClick={closeMobileSidebar}
        />
      </aside>
    </>
  );
}

interface SidebarContentProps {
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
  visibleItems: NavItem[];
  location: ReturnType<typeof useLocation>;
  isMobile: boolean;
  isTablet?: boolean;
  onNavClick?: () => void;
}

function SidebarContent({
  sidebarCollapsed,
  toggleSidebar,
  visibleItems,
  location,
  isMobile,
  isTablet,
  onNavClick,
}: SidebarContentProps) {
  const showLabels = !sidebarCollapsed || isMobile;

  return (
    <>
      {/* Brand */}
      <div className="flex items-center gap-3 px-3 py-4 border-b border-border h-14 sm:h-16 shrink-0">
        <div
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded-lg bg-primary shrink-0",
            !showLabels && "mx-auto",
          )}
        >
          <Building2 className="w-4 h-4 text-primary-foreground" />
        </div>
        {showLabels && (
          <div className="overflow-hidden flex-1 min-w-0">
            <p className="text-sm font-display font-bold text-foreground truncate">
              FinEdge ERP
            </p>
            <p className="text-xs text-muted-foreground truncate">
              Enterprise CRM
            </p>
          </div>
        )}
        {/* Close button on mobile */}
        {isMobile && (
          <button
            type="button"
            onClick={toggleSidebar}
            className="ml-auto flex items-center justify-center w-7 h-7 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-smooth shrink-0"
            aria-label="Close sidebar"
            data-ocid="sidebar.mobile.close_button"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto scrollbar-thin py-3 px-2 space-y-0.5">
        {visibleItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            location.pathname === item.path ||
            location.pathname.startsWith(`${item.path}/`);
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onNavClick}
              data-ocid={`nav.${item.label.toLowerCase().replace(/[^a-z0-9]/g, "_")}.link`}
              title={!showLabels ? item.label : undefined}
              className={cn(
                "flex items-center gap-3 rounded-xl text-sm font-medium transition-smooth",
                "min-h-[44px] py-2",
                showLabels ? "px-3" : "px-0 justify-center",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
              )}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {showLabels && <span className="truncate">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Collapse toggle — desktop only (not tablet, not mobile) */}
      {!isMobile && !isTablet && (
        <div className="border-t border-border p-2">
          <button
            type="button"
            data-ocid="sidebar.toggle"
            onClick={toggleSidebar}
            className="flex items-center justify-center w-full py-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-smooth"
            aria-label={
              sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"
            }
          >
            {sidebarCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>
      )}
    </>
  );
}
