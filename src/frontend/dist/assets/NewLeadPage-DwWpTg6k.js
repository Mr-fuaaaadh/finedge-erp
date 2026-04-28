import { u as useNavigate, r as reactExports, j as jsxRuntimeExports, p as User, i as Building2, s as ue } from "./index-CgV9Taym.js";
import { I as Input } from "./input-CQX-6uHe.js";
import { L as Label } from "./label-DBZIDZNQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BSYwbXVq.js";
import { S as Separator } from "./separator-n_ZCSSuO.js";
import { T as Textarea } from "./textarea-DRhbSqfF.js";
import { F as FormPage } from "./FormPage-HwyGab_x.js";
import { M as Mail } from "./mail-DtpfkiRi.js";
import { P as Phone } from "./phone-B0agrxx4.js";
import { I as IndianRupee } from "./indian-rupee-BvtpXdiF.js";
import { C as CalendarDays } from "./calendar-days-C9hU70Su.js";
import { Z as Zap } from "./zap-D7uWetWS.js";
import "./Breadcrumb-Vnwm27w7.js";
const LEAD_SOURCES = [
  "Website",
  "Referral",
  "Cold Call",
  "Social Media",
  "Email Campaign",
  "Walk-in"
];
const LEAD_STATUSES = [
  "New",
  "In Progress",
  "Converted",
  "Rejected"
];
const PRIORITIES = ["High", "Medium", "Low"];
const PRODUCTS = [
  "SME Business Loan",
  "Home Loan",
  "Personal Loan",
  "Trade Finance",
  "Term Loan",
  "Project Finance",
  "Equipment Finance",
  "Working Capital Loan",
  "Agricultural Loan",
  "Bridge Finance",
  "Startup Business Loan",
  "Inventory Finance",
  "Real Estate Project Finance",
  "Healthcare Equipment Finance",
  "Auto Dealer Finance",
  "Education Institution Loan",
  "Fixed Deposit",
  "Mutual Fund",
  "Insurance",
  "Credit Card"
];
const STAFF_MEMBERS = [
  "Vijay Menon",
  "Kavita Singh",
  "Rohit Joshi",
  "Ananya Nair",
  "Deepak Gupta",
  "Lakshmi Iyer",
  "Suresh Babu",
  "Nikhil Bose",
  "Sneha Kulkarni",
  "Farida Khan",
  "Kiran Rao",
  "Riya Ghosh",
  "Manish Dubey",
  "Pooja Verma",
  "Amit Patel"
];
const BRANCHES = [
  "Mumbai Central",
  "Delhi NCR",
  "Bengaluru East",
  "Hyderabad West",
  "Chennai South",
  "Pune West",
  "Kolkata North"
];
function NewLeadPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    source: "",
    status: "New",
    priority: "Medium",
    product: "",
    value: "",
    assignedTo: "",
    branchName: "",
    followUpDate: "",
    notes: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: void 0 }));
  }
  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Contact name is required";
    if (!form.company.trim()) newErrors.company = "Company is required";
    if (!form.source) newErrors.source = "Lead source is required";
    if (!form.status) newErrors.status = "Status is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) {
      ue.error("Please fill all required fields");
      return;
    }
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1e3));
    setIsSubmitting(false);
    ue.success("Lead created successfully");
    navigate({ to: "/leads" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    FormPage,
    {
      breadcrumbs: [{ label: "Leads", href: "/leads" }, { label: "New Lead" }],
      title: "New Lead",
      description: "Capture a new prospect into the CRM pipeline",
      backTo: "/leads",
      submitLabel: "Create Lead",
      onSubmit: handleSubmit,
      isSubmitting,
      ocidPrefix: "new_lead",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-semibold text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-primary" }),
            "Contact Information"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "name", children: [
                "Contact Name ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "name",
                  placeholder: "e.g. Arjun Mehta",
                  value: form.name,
                  onChange: (e) => update("name", e.target.value),
                  "data-ocid": "new_lead.name.input",
                  "aria-invalid": !!errors.name
                }
              ),
              errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-destructive",
                  "data-ocid": "new_lead.name.field_error",
                  children: errors.name
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "company", children: [
                "Company ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "company",
                    placeholder: "e.g. TechVentures India",
                    className: "pl-9",
                    value: form.company,
                    onChange: (e) => update("company", e.target.value),
                    "data-ocid": "new_lead.company.input",
                    "aria-invalid": !!errors.company
                  }
                )
              ] }),
              errors.company && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-destructive",
                  "data-ocid": "new_lead.company.field_error",
                  children: errors.company
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "email",
                    type: "email",
                    placeholder: "arjun@company.com",
                    className: "pl-9",
                    value: form.email,
                    onChange: (e) => update("email", e.target.value),
                    "data-ocid": "new_lead.email.input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "phone",
                    type: "tel",
                    placeholder: "+91 98765 43210",
                    className: "pl-9",
                    value: form.phone,
                    onChange: (e) => update("phone", e.target.value),
                    "data-ocid": "new_lead.phone.input"
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-semibold text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "w-4 h-4 text-primary" }),
            "Lead Details"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                "Lead Source ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.source,
                  onValueChange: (v) => update("source", v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        "data-ocid": "new_lead.source.select",
                        "aria-invalid": !!errors.source,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select source" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: LEAD_SOURCES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
                  ]
                }
              ),
              errors.source && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-destructive",
                  "data-ocid": "new_lead.source.field_error",
                  children: errors.source
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                "Status ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.status,
                  onValueChange: (v) => update("status", v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "new_lead.status.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: LEAD_STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Priority" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.priority,
                  onValueChange: (v) => update("priority", v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "new_lead.priority.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: PRIORITIES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p, children: p }, p)) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Product / Service" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.product,
                  onValueChange: (v) => update("product", v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "new_lead.product.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select product" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: PRODUCTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p, children: p }, p)) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "value", children: "Expected Value (₹)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "value",
                    type: "number",
                    placeholder: "500000",
                    className: "pl-9",
                    value: form.value,
                    onChange: (e) => update("value", e.target.value),
                    "data-ocid": "new_lead.value.input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "followUpDate", children: "Follow-up Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "followUpDate",
                    type: "date",
                    className: "pl-9",
                    value: form.followUpDate,
                    onChange: (e) => update("followUpDate", e.target.value),
                    "data-ocid": "new_lead.follow_up_date.input"
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-semibold text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-primary" }),
            "Assignment"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Assigned To" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.assignedTo,
                  onValueChange: (v) => update("assignedTo", v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "new_lead.assigned_to.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select staff member" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: STAFF_MEMBERS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Branch" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.branchName,
                  onValueChange: (v) => update("branchName", v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "new_lead.branch.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select branch" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: BRANCHES.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: b, children: b }, b)) })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "notes", children: "Notes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "notes",
              placeholder: "Add any relevant notes about this lead — requirements, context, or initial observations…",
              rows: 4,
              value: form.notes,
              onChange: (e) => update("notes", e.target.value),
              "data-ocid": "new_lead.notes.textarea",
              className: "resize-none"
            }
          )
        ] }) })
      ]
    }
  );
}
export {
  NewLeadPage as default
};
