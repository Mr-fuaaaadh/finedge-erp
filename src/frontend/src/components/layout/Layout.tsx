import { cn } from "@/lib/utils";
import { Outlet } from "@tanstack/react-router";
import { useTheme } from "../../hooks/useTheme";
import { useUIStore } from "../../store/uiStore";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export function Layout() {
  useTheme();
  const { sidebarCollapsed, mobileOpen, closeMobileSidebar } = useUIStore();

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background">
      {/* Mobile overlay backdrop — only on <md */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={closeMobileSidebar}
          onKeyDown={(e) => e.key === "Escape" && closeMobileSidebar()}
          role="presentation"
        />
      )}

      <Sidebar />

      {/* Main content
          – mobile (<md): full width, no left margin
          – tablet (md-lg): ml-16 (icon sidebar width)
          – desktop (lg+): ml-16 collapsed | ml-60 expanded
      */}
      <div
        className={cn(
          "flex flex-col flex-1 min-w-0 overflow-hidden transition-all duration-300",
          // tablet: always icon-only (w-16)
          "md:ml-16",
          // desktop: respect collapsed state
          sidebarCollapsed ? "lg:ml-16" : "lg:ml-60",
        )}
      >
        <Navbar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin bg-muted/20 p-3 sm:p-4 lg:p-6">
          <Outlet />
        </main>
        <footer className="border-t border-border bg-card px-4 sm:px-6 py-2.5 shrink-0">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
