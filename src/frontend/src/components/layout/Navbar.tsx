import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Bell, ChevronDown, Menu, Moon, Search, Sun } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";
import { useUIStore } from "../../store/uiStore";
import type { Notification } from "../../types";

const mockNotifications: Notification[] = [
  {
    id: "n1",
    title: "New Lead Assigned",
    message: "Aisha Rahman (Crescent Exports) has been assigned to you.",
    type: "info",
    read: false,
    createdAt: "2025-04-22T09:30:00Z",
  },
  {
    id: "n2",
    title: "Task Due Tomorrow",
    message: "Compliance Audit — Delhi NCR is due on April 25.",
    type: "warning",
    read: false,
    createdAt: "2025-04-22T08:00:00Z",
  },
  {
    id: "n3",
    title: "Q1 Report Ready",
    message: "Q1 Loan Portfolio Performance report has been completed.",
    type: "success",
    read: true,
    createdAt: "2025-04-21T17:00:00Z",
  },
  {
    id: "n4",
    title: "Branch Performance Update",
    message: "Delhi NCR has exceeded monthly revenue target by 2%.",
    type: "success",
    read: true,
    createdAt: "2025-04-20T14:00:00Z",
  },
  {
    id: "n5",
    title: "Staff Leave Request",
    message: "Deepak Gupta has requested leave for April 23–24.",
    type: "info",
    read: false,
    createdAt: "2025-04-19T10:00:00Z",
  },
];

export function Navbar() {
  const { user } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const { toggleMobileSidebar } = useUIStore();
  const [notifications, setNotifications] =
    useState<Notification[]>(mockNotifications);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  const notifTypeColor: Record<Notification["type"], string> = {
    info: "bg-primary/10 text-primary",
    success:
      "bg-emerald-100/70 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    warning:
      "bg-amber-100/70 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    error: "bg-destructive/10 text-destructive",
  };

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header
      data-ocid="navbar"
      className="h-14 sm:h-16 border-b border-border bg-card flex items-center px-3 sm:px-4 lg:px-6 gap-3 shrink-0 shadow-xs"
    >
      {/* Hamburger — visible on mobile only */}
      <Button
        variant="ghost"
        size="icon"
        className="rounded-xl lg:hidden shrink-0"
        onClick={toggleMobileSidebar}
        aria-label="Open sidebar"
        data-ocid="navbar.hamburger_button"
      >
        <Menu className="w-5 h-5" />
      </Button>

      {/* Search — hidden on xs, visible on sm+ */}
      <div className="hidden sm:flex flex-1 items-center gap-2 max-w-xs">
        <button
          type="button"
          data-ocid="navbar.search_button"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-lg bg-muted/40 hover:bg-muted/60 transition-smooth w-full"
        >
          <Search className="w-4 h-4 shrink-0" />
          <span className="hidden md:inline">Search…</span>
        </button>
      </div>

      {/* Search icon only on xs */}
      <Button
        variant="ghost"
        size="icon"
        className="rounded-xl sm:hidden"
        aria-label="Search"
        data-ocid="navbar.search_icon_button"
      >
        <Search className="w-4 h-4" />
      </Button>

      <div className="flex items-center gap-1 sm:gap-2 ml-auto">
        {/* Theme toggle */}
        <Button
          variant="ghost"
          size="icon"
          data-ocid="navbar.theme_toggle"
          onClick={toggleTheme}
          className="rounded-xl"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              data-ocid="navbar.notifications_button"
              className="rounded-xl relative"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-destructive text-destructive-foreground text-[9px] flex items-center justify-center font-bold">
                  {unreadCount}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            data-ocid="navbar.notifications_dropdown"
            align="end"
            className="w-[calc(100vw-2rem)] sm:w-80 max-h-[70vh] overflow-y-auto"
          >
            <DropdownMenuLabel className="flex items-center justify-between">
              <span>Notifications</span>
              {unreadCount > 0 && (
                <button
                  type="button"
                  onClick={markAllRead}
                  className="text-xs text-primary hover:underline"
                >
                  Mark all read
                </button>
              )}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notifications.map((n) => (
              <DropdownMenuItem
                key={n.id}
                data-ocid={`notification.${n.id}.item`}
                className={cn(
                  "flex flex-col gap-0.5 px-3 py-2.5 cursor-default",
                  !n.read && "bg-muted/30",
                )}
              >
                <div className="flex items-start gap-2">
                  <span
                    className={cn(
                      "mt-0.5 px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase shrink-0",
                      notifTypeColor[n.type],
                    )}
                  >
                    {n.type}
                  </span>
                  <span className="text-xs font-semibold text-foreground leading-tight">
                    {n.title}
                  </span>
                  {!n.read && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground ml-10 leading-tight">
                  {n.message}
                </p>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              data-ocid="navbar.user_menu_button"
              className="flex items-center gap-2 rounded-xl px-1.5 sm:px-2 py-1.5 hover:bg-muted/60 transition-smooth"
            >
              <Avatar className="w-7 h-7">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="text-xs bg-primary/10 text-primary font-semibold">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="text-left hidden sm:block">
                <p className="text-xs font-semibold text-foreground leading-none">
                  {user.name}
                </p>
                <p className="text-[10px] text-muted-foreground mt-0.5">
                  <Badge
                    variant="secondary"
                    className="text-[9px] px-1 py-0 h-3.5"
                  >
                    {user.role.replace("_", " ").toUpperCase()}
                  </Badge>
                </p>
              </div>
              <ChevronDown className="w-3 h-3 text-muted-foreground hidden sm:block" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            data-ocid="navbar.user_dropdown"
            align="end"
            className="w-48"
          >
            <DropdownMenuLabel>
              <div>
                <p className="font-semibold text-sm">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem data-ocid="navbar.profile_link">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem data-ocid="navbar.settings_link">
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              data-ocid="navbar.signout_button"
              className="text-destructive"
            >
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
