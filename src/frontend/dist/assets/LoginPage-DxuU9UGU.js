import { e as createLucideIcon, u as useNavigate, b as useAuth, r as reactExports, j as jsxRuntimeExports, i as Building2, U as Users, a as TrendingUp, h as cn, B as Button, s as ue } from "./index-CgV9Taym.js";
import { C as Card, b as CardContent } from "./card-BIrGk5lN.js";
import { I as Input } from "./input-CQX-6uHe.js";
import { L as Label } from "./label-DBZIDZNQ.js";
import { S as Separator } from "./separator-n_ZCSSuO.js";
import { C as ChartColumn } from "./chart-column-BpQJ6ukI.js";
import { S as Shield } from "./shield-B-sXR3Uu.js";
import { C as CircleCheck } from "./circle-check-DLxW8y4N.js";
import { M as Mail } from "./mail-DtpfkiRi.js";
import { L as Lock } from "./lock-DHgLsdA8.js";
import { E as Eye } from "./eye-BK4ofIs8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const EyeOff = createLucideIcon("eye-off", __iconNode);
const DEMO_ROLES = [
  {
    role: "admin",
    label: "Admin",
    email: "admin@finedge.in",
    badge: "bg-primary/15 text-primary border-primary/30"
  },
  {
    role: "branch_manager",
    label: "Branch Manager",
    email: "manager@finedge.in",
    badge: "bg-secondary/20 text-secondary-foreground border-secondary/30"
  },
  {
    role: "staff",
    label: "Staff",
    email: "staff@finedge.in",
    badge: "bg-accent/20 text-accent-foreground border-accent/30"
  },
  {
    role: "finance_manager",
    label: "Finance Manager",
    email: "finance@finedge.in",
    badge: "bg-muted text-muted-foreground border-border"
  }
];
const FEATURES = [
  {
    icon: ChartColumn,
    title: "Real-Time Analytics",
    desc: "Live dashboards across all branches and departments"
  },
  {
    icon: Users,
    title: "Team Management",
    desc: "Role-based access for every level of your organisation"
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    desc: "Leaderboards, KPIs, and conversion metrics at a glance"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Audit logs, 2FA, and granular permissions"
  }
];
function LoginPage() {
  const navigate = useNavigate();
  const { setRole } = useAuth();
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [errors, setErrors] = reactExports.useState({});
  function validate() {
    const newErrors = {};
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.password || form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  async function onSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1e3));
    setIsSubmitting(false);
    ue.success("Welcome back! Redirecting to your dashboard…");
    navigate({ to: "/dashboard" });
  }
  function loginAs(role, label) {
    setRole(role);
    ue.success(`Signed in as ${label}`);
    navigate({ to: "/dashboard" });
  }
  function handleForgotPassword() {
    ue.success("Password reset link sent to your email", {
      description: "Check your inbox and follow the instructions."
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen flex flex-col lg:flex-row overflow-auto",
      "data-ocid": "login.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "hidden lg:flex lg:w-1/2 xl:w-[55%] flex-col justify-between p-10 xl:p-14 relative overflow-hidden",
            style: {
              background: "oklch(var(--primary)) linear-gradient(135deg, oklch(var(--primary)) 0%, oklch(0.32 0.1 265) 60%, oklch(0.28 0.08 235) 100%)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 translate-x-32 -translate-y-32",
                  style: { background: "oklch(var(--primary-foreground))" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 -translate-x-24 translate-y-24",
                  style: { background: "oklch(var(--secondary))" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-6 h-6 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-display font-bold text-lg leading-tight", children: "FinEdge ERP" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs", children: "Enterprise Platform" })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl xl:text-5xl font-display font-bold text-white leading-tight mb-4", children: [
                    "One platform.",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "Total control."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-lg leading-relaxed max-w-md", children: "Manage branches, staff, leads, and finances — all in one enterprise-grade operations suite built for India's financial sector." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4 max-w-md", children: FEATURES.map(({ icon: Icon, title, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-9 h-9 rounded-lg bg-white/15 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4.5 h-4.5 text-white" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-sm font-semibold", children: title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs mt-0.5", children: desc })
                  ] })
                ] }, title)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-white/50" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-xs", children: "Trusted by 120+ financial institutions across India" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-background flex flex-col items-center justify-center p-6 sm:p-10 min-h-screen lg:min-h-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center mb-8 lg:hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-14 h-14 rounded-2xl bg-primary mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-7 h-7 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: "FinEdge ERP" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Enterprise CRM & Operations Platform" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:block mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold text-foreground", children: "Welcome back" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Sign in to your FinEdge account" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-elevated border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6 pb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-5", noValidate: true, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", className: "font-medium", children: "Email address" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "email",
                        type: "email",
                        className: cn(
                          "pl-9",
                          errors.email && "border-destructive focus-visible:ring-destructive"
                        ),
                        placeholder: "you@finedge.in",
                        autoComplete: "email",
                        value: form.email,
                        onChange: (e) => {
                          setForm((f) => ({ ...f, email: e.target.value }));
                          setErrors((err) => ({ ...err, email: void 0 }));
                        },
                        "data-ocid": "login.email.input"
                      }
                    )
                  ] }),
                  errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs text-destructive",
                      "data-ocid": "login.email.field_error",
                      children: errors.email
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", className: "font-medium", children: "Password" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: handleForgotPassword,
                        className: "text-xs text-primary hover:underline transition-colors",
                        "data-ocid": "login.forgot_password.button",
                        children: "Forgot password?"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "password",
                        type: showPassword ? "text" : "password",
                        className: cn(
                          "pl-9 pr-10",
                          errors.password && "border-destructive focus-visible:ring-destructive"
                        ),
                        placeholder: "••••••••",
                        autoComplete: "current-password",
                        value: form.password,
                        onChange: (e) => {
                          setForm((f) => ({ ...f, password: e.target.value }));
                          setErrors((err) => ({ ...err, password: void 0 }));
                        },
                        "data-ocid": "login.password.input"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setShowPassword((v) => !v),
                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
                        "aria-label": showPassword ? "Hide password" : "Show password",
                        "data-ocid": "login.toggle_password.button",
                        children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
                      }
                    )
                  ] }),
                  errors.password && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs text-destructive",
                      "data-ocid": "login.password.field_error",
                      children: errors.password
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "rememberMe",
                      type: "checkbox",
                      className: "w-4 h-4 rounded border-border accent-primary cursor-pointer",
                      checked: form.rememberMe,
                      onChange: (e) => setForm((f) => ({ ...f, rememberMe: e.target.checked })),
                      "data-ocid": "login.remember_me.checkbox"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "rememberMe",
                      className: "text-sm text-muted-foreground cursor-pointer select-none",
                      children: "Keep me signed in for 30 days"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    className: "w-full",
                    disabled: isSubmitting,
                    "data-ocid": "login.submit_button",
                    children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" }),
                      "Signing in…"
                    ] }) : "Sign In"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-3 text-xs text-muted-foreground whitespace-nowrap", children: "Demo access — choose a role" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 mt-5", children: DEMO_ROLES.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => loginAs(d.role, d.label),
                    "data-ocid": `login.demo_${d.role}.button`,
                    className: cn(
                      "flex flex-col items-start px-3 py-2.5 rounded-xl border transition-smooth text-left",
                      d.badge,
                      "hover:opacity-90"
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold leading-tight", children: d.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs opacity-60 truncate w-full mt-0.5", children: d.email })
                    ]
                  },
                  d.role
                )) })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground mt-6", children: [
              "© ",
              (/* @__PURE__ */ new Date()).getFullYear(),
              " FinEdge ERP. All rights reserved."
            ] })
          ] })
        ] })
      ]
    }
  );
}
export {
  LoginPage as default
};
