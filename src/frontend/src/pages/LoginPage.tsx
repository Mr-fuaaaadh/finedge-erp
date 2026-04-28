import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useNavigate } from "@tanstack/react-router";
import {
  BarChart3,
  Building2,
  CheckCircle2,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "../hooks/useAuth";
import type { Role } from "../types";

interface LoginFormState {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const DEMO_ROLES: {
  role: Role;
  label: string;
  email: string;
  badge: string;
}[] = [
  {
    role: "admin",
    label: "Admin",
    email: "admin@finedge.in",
    badge: "bg-primary/15 text-primary border-primary/30",
  },
  {
    role: "branch_manager",
    label: "Branch Manager",
    email: "manager@finedge.in",
    badge: "bg-secondary/20 text-secondary-foreground border-secondary/30",
  },
  {
    role: "staff",
    label: "Staff",
    email: "staff@finedge.in",
    badge: "bg-accent/20 text-accent-foreground border-accent/30",
  },
  {
    role: "finance_manager",
    label: "Finance Manager",
    email: "finance@finedge.in",
    badge: "bg-muted text-muted-foreground border-border",
  },
];

const FEATURES = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    desc: "Live dashboards across all branches and departments",
  },
  {
    icon: Users,
    title: "Team Management",
    desc: "Role-based access for every level of your organisation",
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    desc: "Leaderboards, KPIs, and conversion metrics at a glance",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Audit logs, 2FA, and granular permissions",
  },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const { setRole } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<LoginFormState>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.password || form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    toast.success("Welcome back! Redirecting to your dashboard…");
    navigate({ to: "/dashboard" });
  }

  function loginAs(role: Role, label: string) {
    setRole(role);
    toast.success(`Signed in as ${label}`);
    navigate({ to: "/dashboard" });
  }

  function handleForgotPassword() {
    toast.success("Password reset link sent to your email", {
      description: "Check your inbox and follow the instructions.",
    });
  }

  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row overflow-auto"
      data-ocid="login.page"
    >
      {/* ── Left Brand Panel ─────────────────────────────────────────────── */}
      <div
        className="hidden lg:flex lg:w-1/2 xl:w-[55%] flex-col justify-between p-10 xl:p-14 relative overflow-hidden"
        style={{
          background:
            "oklch(var(--primary)) linear-gradient(135deg, oklch(var(--primary)) 0%, oklch(0.32 0.1 265) 60%, oklch(0.28 0.08 235) 100%)",
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 translate-x-32 -translate-y-32"
          style={{ background: "oklch(var(--primary-foreground))" }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 -translate-x-24 translate-y-24"
          style={{ background: "oklch(var(--secondary))" }}
        />

        {/* Logo */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white font-display font-bold text-lg leading-tight">
                FinEdge ERP
              </p>
              <p className="text-white/60 text-xs">Enterprise Platform</p>
            </div>
          </div>
        </div>

        {/* Hero text */}
        <div className="relative z-10 space-y-6">
          <div>
            <h1 className="text-4xl xl:text-5xl font-display font-bold text-white leading-tight mb-4">
              One platform.
              <br />
              Total control.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              Manage branches, staff, leads, and finances — all in one
              enterprise-grade operations suite built for India's financial
              sector.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 gap-4 max-w-md">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/15 shrink-0">
                  <Icon className="w-4.5 h-4.5 text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{title}</p>
                  <p className="text-white/60 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-white/50" />
          <p className="text-white/50 text-xs">
            Trusted by 120+ financial institutions across India
          </p>
        </div>
      </div>

      {/* ── Right Form Panel ─────────────────────────────────────────────── */}
      <div className="flex-1 bg-background flex flex-col items-center justify-center p-6 sm:p-10 min-h-screen lg:min-h-0">
        {/* Mobile logo */}
        <div className="flex flex-col items-center mb-8 lg:hidden">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary mb-3">
            <Building2 className="w-7 h-7 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-display font-bold text-foreground">
            FinEdge ERP
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Enterprise CRM & Operations Platform
          </p>
        </div>

        <div className="w-full max-w-md">
          {/* Desktop heading */}
          <div className="hidden lg:block mb-8">
            <h2 className="text-2xl font-display font-bold text-foreground">
              Welcome back
            </h2>
            <p className="text-muted-foreground mt-1">
              Sign in to your FinEdge account
            </p>
          </div>

          <Card className="shadow-elevated border border-border">
            <CardContent className="pt-6 pb-6">
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                {/* Email */}
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="font-medium">
                    Email address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <Input
                      id="email"
                      type="email"
                      className={cn(
                        "pl-9",
                        errors.email &&
                          "border-destructive focus-visible:ring-destructive",
                      )}
                      placeholder="you@finedge.in"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => {
                        setForm((f) => ({ ...f, email: e.target.value }));
                        setErrors((err) => ({ ...err, email: undefined }));
                      }}
                      data-ocid="login.email.input"
                    />
                  </div>
                  {errors.email && (
                    <p
                      className="text-xs text-destructive"
                      data-ocid="login.email.field_error"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="font-medium">
                      Password
                    </Label>
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="text-xs text-primary hover:underline transition-colors"
                      data-ocid="login.forgot_password.button"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      className={cn(
                        "pl-9 pr-10",
                        errors.password &&
                          "border-destructive focus-visible:ring-destructive",
                      )}
                      placeholder="••••••••"
                      autoComplete="current-password"
                      value={form.password}
                      onChange={(e) => {
                        setForm((f) => ({ ...f, password: e.target.value }));
                        setErrors((err) => ({ ...err, password: undefined }));
                      }}
                      data-ocid="login.password.input"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      data-ocid="login.toggle_password.button"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p
                      className="text-xs text-destructive"
                      data-ocid="login.password.field_error"
                    >
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Remember me */}
                <div className="flex items-center gap-2">
                  <input
                    id="rememberMe"
                    type="checkbox"
                    className="w-4 h-4 rounded border-border accent-primary cursor-pointer"
                    checked={form.rememberMe}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, rememberMe: e.target.checked }))
                    }
                    data-ocid="login.remember_me.checkbox"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="text-sm text-muted-foreground cursor-pointer select-none"
                  >
                    Keep me signed in for 30 days
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                  data-ocid="login.submit_button"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Signing in…
                    </span>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>

              {/* Demo access */}
              <div className="mt-6">
                <div className="relative">
                  <Separator />
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-3 text-xs text-muted-foreground whitespace-nowrap">
                    Demo access — choose a role
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-5">
                  {DEMO_ROLES.map((d) => (
                    <button
                      key={d.role}
                      type="button"
                      onClick={() => loginAs(d.role, d.label)}
                      data-ocid={`login.demo_${d.role}.button`}
                      className={cn(
                        "flex flex-col items-start px-3 py-2.5 rounded-xl border transition-smooth text-left",
                        d.badge,
                        "hover:opacity-90",
                      )}
                    >
                      <span className="text-xs font-semibold leading-tight">
                        {d.label}
                      </span>
                      <span className="text-xs opacity-60 truncate w-full mt-0.5">
                        {d.email}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-xs text-muted-foreground mt-6">
            © {new Date().getFullYear()} FinEdge ERP. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
