import { u as useNavigate, r as reactExports, d as mockUsers, j as jsxRuntimeExports, i as Building2, B as Button, s as ue } from "./index-CgV9Taym.js";
import { I as Input } from "./input-CQX-6uHe.js";
import { L as Label } from "./label-DBZIDZNQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BSYwbXVq.js";
import { S as Separator } from "./separator-n_ZCSSuO.js";
import { T as Textarea } from "./textarea-DRhbSqfF.js";
import { F as FormPage } from "./FormPage-HwyGab_x.js";
import { R as RefreshCw } from "./refresh-cw-CgHN_PR2.js";
import { M as MapPin } from "./map-pin-BzQ-JiWE.js";
import { P as Phone } from "./phone-B0agrxx4.js";
import { M as Mail } from "./mail-DtpfkiRi.js";
import "./Breadcrumb-Vnwm27w7.js";
const STATUSES = [
  { label: "Active", value: "Active" },
  { label: "Inactive", value: "Inactive" },
  { label: "Under Review", value: "Suspended" }
];
const STATES = [
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Delhi",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "West Bengal"
];
function generateCode(name) {
  if (!name.trim()) return "";
  const words = name.trim().toUpperCase().split(/\s+/);
  const prefix = words.length === 1 ? words[0].slice(0, 3) : words.map((w) => w[0]).join("").slice(0, 3);
  const num = String(Math.floor(Math.random() * 90) + 10);
  return `${prefix}-${num}`;
}
function NewBranchPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState(
    {}
  );
  const [form, setForm] = reactExports.useState({
    name: "",
    code: "",
    city: "",
    state: "",
    country: "India",
    address: "",
    phone: "",
    email: "",
    managerId: "",
    targetRevenue: "",
    status: "Active",
    establishedDate: ""
  });
  const managers = mockUsers.filter(
    (u) => u.role === "branch_manager" || u.role === "admin"
  );
  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: void 0 }));
  }
  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Branch name is required";
    if (!form.code.trim()) e.code = "Branch code is required";
    if (!form.address.trim()) e.address = "Address is required";
    if (!form.city.trim()) e.city = "City is required";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1e3));
    setIsSubmitting(false);
    ue.success("Branch created successfully");
    navigate({ to: "/branches" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    FormPage,
    {
      breadcrumbs: [
        { label: "Branches", href: "/branches" },
        { label: "New Branch" }
      ],
      title: "Create New Branch",
      description: "Set up a new office location in the FinEdge network.",
      backTo: "/branches",
      submitLabel: "Create Branch",
      onSubmit: handleSubmit,
      isSubmitting,
      ocidPrefix: "new_branch",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-semibold text-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4 text-primary" }),
            "Branch Identity"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "name", children: [
                "Branch Name ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "name",
                  placeholder: "e.g. Bengaluru North",
                  value: form.name,
                  onChange: (e) => update("name", e.target.value),
                  className: errors.name ? "border-destructive" : "",
                  "data-ocid": "new_branch.name.input"
                }
              ),
              errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-[11px] text-destructive",
                  "data-ocid": "new_branch.name.field_error",
                  children: errors.name
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "code", children: [
                "Branch Code ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "code",
                    placeholder: "e.g. BLR-N01",
                    value: form.code,
                    onChange: (e) => update("code", e.target.value.toUpperCase()),
                    className: `font-mono flex-1 ${errors.code ? "border-destructive" : ""}`,
                    "data-ocid": "new_branch.code.input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    size: "icon",
                    className: "shrink-0",
                    title: "Auto-generate from branch name",
                    onClick: () => update("code", generateCode(form.name)),
                    "data-ocid": "new_branch.code_generate.button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5" })
                  }
                )
              ] }),
              errors.code && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-[11px] text-destructive",
                  "data-ocid": "new_branch.code.field_error",
                  children: errors.code
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.status,
                  onValueChange: (v) => update("status", v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "new_branch.status.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s.value, children: s.label }, s.value)) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "establishedDate", children: "Established Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "establishedDate",
                  type: "date",
                  value: form.establishedDate,
                  onChange: (e) => update("establishedDate", e.target.value),
                  "data-ocid": "new_branch.established_date.input"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-semibold text-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-primary" }),
            "Location"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "address", children: [
                "Full Address ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "address",
                  placeholder: "Building, Street, Area, Pincode",
                  rows: 3,
                  value: form.address,
                  onChange: (e) => update("address", e.target.value),
                  className: `resize-none ${errors.address ? "border-destructive" : ""}`,
                  "data-ocid": "new_branch.address.textarea"
                }
              ),
              errors.address && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-[11px] text-destructive",
                  "data-ocid": "new_branch.address.field_error",
                  children: errors.address
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "city", children: [
                "City ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "city",
                  placeholder: "e.g. Bengaluru",
                  value: form.city,
                  onChange: (e) => update("city", e.target.value),
                  className: errors.city ? "border-destructive" : "",
                  "data-ocid": "new_branch.city.input"
                }
              ),
              errors.city && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-[11px] text-destructive",
                  "data-ocid": "new_branch.city.field_error",
                  children: errors.city
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "State / Region" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.state,
                  onValueChange: (v) => update("state", v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "new_branch.state.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select state…" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: STATES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "country", children: "Country" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "country",
                  value: form.country,
                  onChange: (e) => update("country", e.target.value),
                  "data-ocid": "new_branch.country.input"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-semibold text-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 text-primary" }),
            "Contact & Operations"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", children: "Branch Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "phone",
                    className: "pl-9",
                    placeholder: "+91 80 1234 5678",
                    value: form.phone,
                    onChange: (e) => update("phone", e.target.value),
                    "data-ocid": "new_branch.phone.input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Branch Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "email",
                    type: "email",
                    className: `pl-9 ${errors.email ? "border-destructive" : ""}`,
                    placeholder: "branch@fincore.in",
                    value: form.email,
                    onChange: (e) => update("email", e.target.value),
                    "data-ocid": "new_branch.email.input"
                  }
                )
              ] }),
              errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-[11px] text-destructive",
                  "data-ocid": "new_branch.email.field_error",
                  children: errors.email
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Branch Manager" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.managerId,
                  onValueChange: (v) => update("managerId", v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "new_branch.manager.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Assign a manager" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: managers.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: m.id, children: [
                      m.name,
                      " — ",
                      m.designation
                    ] }, m.id)) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "targetRevenue", children: "Revenue Target (₹)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "targetRevenue",
                  type: "number",
                  placeholder: "e.g. 3000000",
                  value: form.targetRevenue,
                  onChange: (e) => update("targetRevenue", e.target.value),
                  "data-ocid": "new_branch.target_revenue.input"
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  );
}
export {
  NewBranchPage as default
};
