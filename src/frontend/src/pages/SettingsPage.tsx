import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  Bell,
  Camera,
  CheckCircle2,
  Database,
  Globe,
  Laptop,
  Lock,
  LogOut,
  Monitor,
  Moon,
  Palette,
  Server,
  Shield,
  Smartphone,
  Sun,
  Terminal,
  User,
  WrenchIcon,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Breadcrumb } from "../components/shared/Breadcrumb";
import { useAuth } from "../hooks/useAuth";
import type {
  SettingsNotifications,
  SettingsProfile,
  ThemeMode,
} from "../types";

// ── Mock active sessions ──────────────────────────────────────────────────────
const ACTIVE_SESSIONS = [
  {
    id: "s1",
    device: "Chrome on macOS",
    location: "Mumbai, Maharashtra",
    lastActive: "Now (current session)",
    icon: Monitor,
    isCurrent: true,
  },
  {
    id: "s2",
    device: "Safari on iPhone 15",
    location: "Mumbai, Maharashtra",
    lastActive: "2 hours ago",
    icon: Smartphone,
    isCurrent: false,
  },
  {
    id: "s3",
    device: "FinEdge Mobile App",
    location: "Pune, Maharashtra",
    lastActive: "Yesterday 6:30 PM",
    icon: Laptop,
    isCurrent: false,
  },
];

// ── Accent colour swatches ────────────────────────────────────────────────────
const ACCENT_COLORS = [
  { name: "Indigo", cls: "bg-primary", ring: "ring-primary" },
  { name: "Teal", cls: "bg-secondary", ring: "ring-secondary" },
  { name: "Amber", cls: "bg-accent", ring: "ring-accent" },
  { name: "Emerald", cls: "bg-chart-4", ring: "ring-chart-4" },
  { name: "Violet", cls: "bg-chart-5", ring: "ring-chart-5" },
  { name: "Rose", cls: "bg-destructive", ring: "ring-destructive" },
];

const TIMEZONES = [
  "Asia/Kolkata (IST +5:30)",
  "Asia/Dubai (GST +4:00)",
  "Asia/Singapore (SGT +8:00)",
  "Europe/London (GMT +0:00)",
  "America/New_York (EST -5:00)",
];

const LANGUAGES = ["English", "Hindi", "Tamil", "Telugu", "Marathi", "Bengali"];

const FREQ_OPTIONS = [
  { value: "immediate", label: "Immediate" },
  { value: "daily", label: "Daily Digest" },
  { value: "weekly", label: "Weekly Summary" },
];

export default function SettingsPage() {
  const { isAdmin, user } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");
  const [isSaving, setIsSaving] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [accentColor, setAccentColor] = useState("Indigo");
  const [sidebarStyle, setSidebarStyle] = useState<
    "expanded" | "collapsed" | "auto"
  >("expanded");
  const [density, setDensity] = useState<"comfortable" | "compact">(
    "comfortable",
  );
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
  const [notifFreq, setNotifFreq] = useState("immediate");

  const [profile, setProfile] = useState<SettingsProfile>({
    name: user?.name ?? "Priya Sharma",
    email: user?.email ?? "priya.sharma@finedge.in",
    phone: user?.phone ?? "+91 98765 00001",
    designation: user?.designation ?? "Branch Manager",
    bio: "Experienced branch manager with 8+ years in financial services. Specialised in retail lending and team development.",
    avatar: user?.name?.slice(0, 2).toUpperCase() ?? "PS",
  });

  const [notifs, setNotifs] = useState<SettingsNotifications>({
    emailLeads: true,
    emailTasks: true,
    emailAttendance: false,
    emailReports: true,
    pushLeads: true,
    pushTasks: false,
    pushAttendance: true,
  });

  const [passwords, setPasswords] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  async function handleSave() {
    setIsSaving(true);
    await new Promise((r) => setTimeout(r, 900));
    setIsSaving(false);
    toast.success("Settings saved successfully");
  }

  function updateProfile(field: keyof SettingsProfile, value: string) {
    setProfile((prev) => ({ ...prev, [field]: value }));
  }

  function toggleNotif(field: keyof SettingsNotifications) {
    setNotifs((prev) => ({ ...prev, [field]: !prev[field] }));
  }

  function handleChangePassword() {
    if (!passwords.current) {
      toast.error("Enter your current password");
      return;
    }
    if (passwords.newPass.length < 8) {
      toast.error("New password must be at least 8 characters");
      return;
    }
    if (passwords.newPass !== passwords.confirm) {
      toast.error("Passwords do not match");
      return;
    }
    toast.success("Password updated successfully");
    setPasswords({ current: "", newPass: "", confirm: "" });
  }

  return (
    <div className="min-h-full bg-background" data-ocid="settings.page">
      {/* Sticky header */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <Breadcrumb items={[{ label: "Settings" }]} className="mb-1.5" />
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-xl font-display font-bold text-foreground">
              Settings
            </h1>
            <Button
              onClick={handleSave}
              disabled={isSaving}
              data-ocid="settings.save_button"
            >
              {isSaving ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  Saving…
                </span>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Mobile: scrollable horizontal tabs */}
          <div className="overflow-x-auto pb-1 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
            <TabsList
              className="w-max sm:w-auto flex gap-1 h-auto"
              data-ocid="settings.tabs"
            >
              {[
                { value: "profile", icon: User, label: "Profile" },
                { value: "notifications", icon: Bell, label: "Notifications" },
                { value: "security", icon: Lock, label: "Security" },
                { value: "appearance", icon: Palette, label: "Appearance" },
                ...(isAdmin
                  ? [{ value: "system", icon: Server, label: "System" }]
                  : []),
              ].map(({ value, icon: Icon, label }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="flex items-center gap-1.5 whitespace-nowrap"
                  data-ocid={`settings.${value}.tab`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* ── Profile ─────────────────────────────────────────────────── */}
          <TabsContent value="profile" className="space-y-5">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold">Avatar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-5">
                  <div className="relative shrink-0">
                    <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary font-display font-bold text-2xl">
                      {profile.avatar}
                    </div>
                    <button
                      type="button"
                      className="absolute -bottom-1 -right-1 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground shadow hover:opacity-90 transition-smooth"
                      aria-label="Upload avatar"
                      data-ocid="settings.avatar.upload_button"
                      onClick={() => toast.info("Avatar upload coming soon")}
                    >
                      <Camera className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {profile.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {profile.designation}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {profile.email}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold">
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="p-name">Full Name</Label>
                    <Input
                      id="p-name"
                      value={profile.name}
                      onChange={(e) => updateProfile("name", e.target.value)}
                      data-ocid="settings.profile_name.input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="p-email">Email</Label>
                    <Input
                      id="p-email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => updateProfile("email", e.target.value)}
                      data-ocid="settings.profile_email.input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="p-phone">Phone</Label>
                    <Input
                      id="p-phone"
                      value={profile.phone}
                      onChange={(e) => updateProfile("phone", e.target.value)}
                      data-ocid="settings.profile_phone.input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="p-designation">
                      Designation
                      <Badge className="ml-2 text-xs bg-muted text-muted-foreground font-normal">
                        read-only
                      </Badge>
                    </Label>
                    <Input
                      id="p-designation"
                      value={profile.designation}
                      readOnly
                      className="opacity-60"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Department</Label>
                    <Select defaultValue={user?.department ?? "Sales"}>
                      <SelectTrigger data-ocid="settings.department.select">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          "Sales",
                          "Finance",
                          "Operations",
                          "HR",
                          "Marketing",
                          "IT",
                        ].map((d) => (
                          <SelectItem key={d} value={d}>
                            {d}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Language</Label>
                    <Select defaultValue="English">
                      <SelectTrigger data-ocid="settings.language.select">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {LANGUAGES.map((l) => (
                          <SelectItem key={l} value={l}>
                            {l}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <Label htmlFor="p-bio">Bio</Label>
                    <Textarea
                      id="p-bio"
                      rows={3}
                      value={profile.bio}
                      onChange={(e) => updateProfile("bio", e.target.value)}
                      placeholder="A short bio about yourself…"
                      data-ocid="settings.profile_bio.textarea"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── Notifications ────────────────────────────────────────────── */}
          <TabsContent value="notifications" className="space-y-5">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className="text-sm font-semibold">
                    Notification Frequency
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3 flex-wrap">
                  {FREQ_OPTIONS.map((f) => (
                    <button
                      key={f.value}
                      type="button"
                      onClick={() => setNotifFreq(f.value)}
                      data-ocid={`settings.freq_${f.value}.button`}
                      className={cn(
                        "px-4 py-2 rounded-lg border text-sm font-medium transition-smooth",
                        notifFreq === f.value
                          ? "bg-primary/10 border-primary/40 text-primary"
                          : "border-border text-muted-foreground hover:bg-muted/50",
                      )}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold">
                  Email Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <NotifRow
                  label="Lead Updates"
                  description="New assignments, status changes, follow-up reminders"
                  checked={notifs.emailLeads}
                  onToggle={() => toggleNotif("emailLeads")}
                  ocid="settings.email_leads.switch"
                />
                <NotifRow
                  label="Task Reminders"
                  description="Due dates, overdue alerts, task assignments"
                  checked={notifs.emailTasks}
                  onToggle={() => toggleNotif("emailTasks")}
                  ocid="settings.email_tasks.switch"
                />
                <NotifRow
                  label="Attendance Alerts"
                  description="Leave approval/rejection and WFH notifications"
                  checked={notifs.emailAttendance}
                  onToggle={() => toggleNotif("emailAttendance")}
                  ocid="settings.email_attendance.switch"
                />
                <NotifRow
                  label="Weekly Reports"
                  description="Performance summary and analytics digest"
                  checked={notifs.emailReports}
                  onToggle={() => toggleNotif("emailReports")}
                  ocid="settings.email_reports.switch"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold">
                  Push Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <NotifRow
                  label="Lead Alerts"
                  description="Real-time lead assignment and conversion notifications"
                  checked={notifs.pushLeads}
                  onToggle={() => toggleNotif("pushLeads")}
                  ocid="settings.push_leads.switch"
                />
                <NotifRow
                  label="Task Alerts"
                  description="Urgent task notifications and deadline reminders"
                  checked={notifs.pushTasks}
                  onToggle={() => toggleNotif("pushTasks")}
                  ocid="settings.push_tasks.switch"
                />
                <NotifRow
                  label="Attendance Notifications"
                  description="Check-in reminders and attendance request updates"
                  checked={notifs.pushAttendance}
                  onToggle={() => toggleNotif("pushAttendance")}
                  ocid="settings.push_attendance.switch"
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── Security ─────────────────────────────────────────────────── */}
          <TabsContent value="security" className="space-y-5">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold">
                  Change Password
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="s-current">Current Password</Label>
                  <Input
                    id="s-current"
                    type="password"
                    placeholder="••••••••"
                    value={passwords.current}
                    onChange={(e) =>
                      setPasswords((p) => ({ ...p, current: e.target.value }))
                    }
                    data-ocid="settings.current_password.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="s-new">New Password</Label>
                  <Input
                    id="s-new"
                    type="password"
                    placeholder="Min. 8 characters"
                    value={passwords.newPass}
                    onChange={(e) =>
                      setPasswords((p) => ({ ...p, newPass: e.target.value }))
                    }
                    data-ocid="settings.new_password.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="s-confirm">Confirm New Password</Label>
                  <Input
                    id="s-confirm"
                    type="password"
                    placeholder="Repeat new password"
                    value={passwords.confirm}
                    onChange={(e) =>
                      setPasswords((p) => ({ ...p, confirm: e.target.value }))
                    }
                    data-ocid="settings.confirm_password.input"
                  />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleChangePassword}
                  data-ocid="settings.change_password.button"
                >
                  Update Password
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold">
                  Two-Factor Authentication
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Shield className="w-4.5 h-4.5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Authenticator App
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Use an authenticator app to generate one-time codes for
                        extra security.
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={twoFAEnabled}
                    onCheckedChange={(v) => {
                      setTwoFAEnabled(v);
                      toast.success(v ? "2FA enabled" : "2FA disabled");
                    }}
                    data-ocid="settings.2fa.switch"
                  />
                </div>
                {twoFAEnabled && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <p className="text-xs text-primary font-medium">
                      Two-factor authentication is active on your account.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className="text-sm font-semibold">
                    Active Sessions
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive hover:text-destructive hover:border-destructive/40 text-xs h-7"
                    onClick={() =>
                      toast.success("All other devices signed out")
                    }
                    data-ocid="settings.sign_out_all.button"
                  >
                    <LogOut className="w-3.5 h-3.5 mr-1.5" />
                    Sign out all
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {ACTIVE_SESSIONS.map((session) => {
                  const Icon = session.icon;
                  return (
                    <div
                      key={session.id}
                      className="flex items-start gap-3 p-3 rounded-lg border border-border"
                      data-ocid={`settings.session.${session.id}`}
                    >
                      <div
                        className={cn(
                          "w-9 h-9 rounded-lg flex items-center justify-center shrink-0",
                          session.isCurrent ? "bg-primary/10" : "bg-muted",
                        )}
                      >
                        <Icon
                          className={cn(
                            "w-4.5 h-4.5",
                            session.isCurrent
                              ? "text-primary"
                              : "text-muted-foreground",
                          )}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-sm font-medium text-foreground truncate">
                            {session.device}
                          </p>
                          {session.isCurrent && (
                            <Badge className="text-xs bg-primary/10 text-primary">
                              Current
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {session.location} · {session.lastActive}
                        </p>
                      </div>
                      {!session.isCurrent && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs h-7 text-muted-foreground hover:text-destructive shrink-0"
                          onClick={() => toast.success("Session terminated")}
                          data-ocid={`settings.terminate_session.${session.id}.button`}
                        >
                          Revoke
                        </Button>
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── Appearance ───────────────────────────────────────────────── */}
          <TabsContent value="appearance" className="space-y-5">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold">Theme</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "light" as ThemeMode, icon: Sun, label: "Light" },
                    { value: "dark" as ThemeMode, icon: Moon, label: "Dark" },
                    {
                      value: "system" as ThemeMode,
                      icon: Globe,
                      label: "System",
                    },
                  ].map(({ value: t, icon: Icon, label }) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTheme(t)}
                      data-ocid={`settings.theme_${t}.button`}
                      className={cn(
                        "flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl border-2 transition-smooth",
                        theme === t
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-muted-foreground/40",
                      )}
                    >
                      <Icon
                        className={cn(
                          "w-5 h-5",
                          theme === t
                            ? "text-primary"
                            : "text-muted-foreground",
                        )}
                      />
                      <span className="text-xs font-medium text-foreground">
                        {label}
                      </span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold">
                  Accent Color
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3 flex-wrap">
                  {ACCENT_COLORS.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      title={c.name}
                      onClick={() => setAccentColor(c.name)}
                      data-ocid={`settings.accent_${c.name.toLowerCase()}.button`}
                      className={cn(
                        "w-9 h-9 rounded-full transition-smooth ring-2 ring-offset-2 ring-offset-background",
                        c.cls,
                        accentColor === c.name ? c.ring : "ring-transparent",
                      )}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold">
                  Sidebar Style
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3 flex-wrap">
                  {(
                    [
                      { value: "expanded", label: "Expanded" },
                      { value: "collapsed", label: "Collapsed" },
                      { value: "auto", label: "Auto (responsive)" },
                    ] as const
                  ).map(({ value: s, label }) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSidebarStyle(s)}
                      data-ocid={`settings.sidebar_${s}.button`}
                      className={cn(
                        "px-4 py-2 rounded-lg border text-sm font-medium transition-smooth",
                        sidebarStyle === s
                          ? "bg-primary/10 border-primary/40 text-primary"
                          : "border-border text-muted-foreground hover:bg-muted/50",
                      )}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold">Density</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 max-w-xs">
                  {(
                    [
                      {
                        value: "comfortable",
                        label: "Comfortable",
                        desc: "More breathing room",
                      },
                      {
                        value: "compact",
                        label: "Compact",
                        desc: "Show more content",
                      },
                    ] as const
                  ).map(({ value: d, label, desc }) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDensity(d)}
                      data-ocid={`settings.density_${d}.button`}
                      className={cn(
                        "flex flex-col items-start p-3 rounded-xl border-2 text-left transition-smooth",
                        density === d
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-muted-foreground/40",
                      )}
                    >
                      <span
                        className={cn(
                          "text-sm font-semibold",
                          density === d ? "text-primary" : "text-foreground",
                        )}
                      >
                        {label}
                      </span>
                      <span className="text-xs text-muted-foreground mt-0.5">
                        {desc}
                      </span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold">
                  Timezone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="max-w-sm space-y-1.5">
                  <Label>Timezone</Label>
                  <Select defaultValue={TIMEZONES[0]}>
                    <SelectTrigger data-ocid="settings.timezone.select">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {TIMEZONES.map((tz) => (
                        <SelectItem key={tz} value={tz}>
                          {tz}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── System (Admin only) ───────────────────────────────────────── */}
          {isAdmin && (
            <TabsContent value="system" className="space-y-5">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold">
                    Application Info
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { label: "Version", value: "v3.4.2 (build 20260428)" },
                      { label: "Environment", value: "Production" },
                      { label: "Last Deploy", value: "28 Apr 2026 09:15 IST" },
                      { label: "Platform", value: "Internet Computer (ICP)" },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="flex items-center justify-between gap-3 text-sm"
                      >
                        <span className="text-muted-foreground">{label}</span>
                        <span className="font-medium text-foreground font-mono text-xs">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold">
                    Maintenance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                        <WrenchIcon className="w-4.5 h-4.5 text-destructive" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Maintenance Mode
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          When enabled, only admins can access the platform.
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={maintenanceMode}
                      onCheckedChange={(v) => {
                        setMaintenanceMode(v);
                        toast.warning(
                          v
                            ? "Maintenance mode enabled"
                            : "Maintenance mode disabled",
                        );
                      }}
                      data-ocid="settings.maintenance_mode.switch"
                    />
                  </div>
                  <Separator />
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        toast.success("Cache cleared successfully")
                      }
                      data-ocid="settings.clear_cache.button"
                    >
                      <Database className="w-4 h-4 mr-2" />
                      Clear Cache
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        toast.success("Export started — check your email")
                      }
                      data-ocid="settings.export_data.button"
                    >
                      <Terminal className="w-4 h-4 mr-2" />
                      Export All Data
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  );
}

function NotifRow({
  label,
  description,
  checked,
  onToggle,
  ocid,
}: {
  label: string;
  description: string;
  checked: boolean;
  onToggle: () => void;
  ocid: string;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <Switch
        checked={checked}
        onCheckedChange={onToggle}
        data-ocid={ocid}
        className="shrink-0 mt-0.5"
      />
    </div>
  );
}
