import { a4 as useParams, u as useNavigate, r as reactExports, j as jsxRuntimeExports, p as User, i as Building2, B as Button, s as ue } from "./index-CgV9Taym.js";
import { I as Input } from "./input-CQX-6uHe.js";
import { L as Label } from "./label-DBZIDZNQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BSYwbXVq.js";
import { S as Separator } from "./separator-n_ZCSSuO.js";
import { T as Textarea } from "./textarea-DRhbSqfF.js";
import { F as FormPage } from "./FormPage-HwyGab_x.js";
import { g as getLeadById } from "./mockLeads-Dc7n7Nj3.js";
import { M as Mail } from "./mail-DtpfkiRi.js";
import { P as Phone } from "./phone-B0agrxx4.js";
import { I as IndianRupee } from "./indian-rupee-BvtpXdiF.js";
import { C as CalendarDays } from "./calendar-days-C9hU70Su.js";
import { Z as Zap } from "./zap-D7uWetWS.js";
import { T as Trash2 } from "./trash-2-D2vYGX4E.js";
import { T as TriangleAlert } from "./triangle-alert-t2GMGPuS.js";
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
function leadPriority(value) {
  return value >= 1e6 ? "High" : value >= 5e5 ? "Medium" : "Low";
}
function DeleteConfirm({
  leadName,
  onConfirm,
  onCancel
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-background/80 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl shadow-elevated p-6 w-full max-w-sm space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5 text-destructive" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Delete Lead" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
          "Delete ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: leadName }),
          "? This cannot be undone."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          size: "sm",
          onClick: onCancel,
          "data-ocid": "edit_lead.delete_cancel.button",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "destructive",
          size: "sm",
          onClick: onConfirm,
          "data-ocid": "edit_lead.delete_confirm.button",
          children: "Delete Lead"
        }
      )
    ] })
  ] }) });
}
function EditLeadPage() {
  const { leadId } = useParams({ from: "/layout/leads/$leadId/edit" });
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = reactExports.useState(false);
  const existingLead = getLeadById(leadId);
  const [form, setForm] = reactExports.useState({
    name: (existingLead == null ? void 0 : existingLead.name) ?? "Unknown Lead",
    company: (existingLead == null ? void 0 : existingLead.company) ?? "",
    email: (existingLead == null ? void 0 : existingLead.email) ?? "",
    phone: (existingLead == null ? void 0 : existingLead.phone) ?? "",
    source: (existingLead == null ? void 0 : existingLead.source) ?? "",
    status: (existingLead == null ? void 0 : existingLead.status) ?? "New",
    priority: leadPriority((existingLead == null ? void 0 : existingLead.value) ?? 0),
    product: (existingLead == null ? void 0 : existingLead.product) ?? "",
    value: String((existingLead == null ? void 0 : existingLead.value) ?? ""),
    assignedTo: (existingLead == null ? void 0 : existingLead.assignedTo) ?? "",
    branchName: (existingLead == null ? void 0 : existingLead.branchName) ?? "",
    followUpDate: (existingLead == null ? void 0 : existingLead.followUpDate) ? existingLead.followUpDate.split("T")[0] : "",
    notes: (existingLead == null ? void 0 : existingLead.notes) ?? ""
  });
  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.source) {
      ue.error("Please fill all required fields");
      return;
    }
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1e3));
    setIsSubmitting(false);
    ue.success("Lead updated successfully");
    navigate({ to: "/leads/$leadId", params: { leadId } });
  }
  function handleDeleteConfirm() {
    ue.success(`Lead "${form.name}" deleted`);
    navigate({ to: "/leads" });
  }
  const leadDisplayName = (existingLead == null ? void 0 : existingLead.name) ?? `Lead #${leadId}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      FormPage,
      {
        breadcrumbs: [
          { label: "Leads", href: "/leads" },
          { label: leadDisplayName, href: `/leads/${leadId}` },
          { label: "Edit" }
        ],
        title: "Edit Lead",
        description: `Editing lead for ${leadDisplayName}`,
        backTo: `/leads/${leadId}`,
        submitLabel: "Save Changes",
        onSubmit: handleSubmit,
        isSubmitting,
        ocidPrefix: "edit_lead",
        extraActions: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            variant: "destructive",
            size: "sm",
            className: "gap-1.5",
            onClick: () => setShowDeleteConfirm(true),
            "data-ocid": "edit_lead.delete_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }),
              "Delete Lead"
            ]
          }
        ),
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
                    value: form.name,
                    onChange: (e) => update("name", e.target.value),
                    "data-ocid": "edit_lead.name.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "company", children: "Company" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "company",
                      className: "pl-9",
                      value: form.company,
                      onChange: (e) => update("company", e.target.value),
                      "data-ocid": "edit_lead.company.input"
                    }
                  )
                ] })
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
                      className: "pl-9",
                      value: form.email,
                      onChange: (e) => update("email", e.target.value),
                      "data-ocid": "edit_lead.email.input"
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
                      className: "pl-9",
                      value: form.phone,
                      onChange: (e) => update("phone", e.target.value),
                      "data-ocid": "edit_lead.phone.input"
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
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "edit_lead.source.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: LEAD_SOURCES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
                    ]
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
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "edit_lead.status.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
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
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "edit_lead.priority.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: PRIORITIES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p, children: p }, p)) })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Product" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: form.product,
                    onValueChange: (v) => update("product", v),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "edit_lead.product.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select product" }) }),
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
                      className: "pl-9",
                      value: form.value,
                      onChange: (e) => update("value", e.target.value),
                      "data-ocid": "edit_lead.value.input"
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
                      "data-ocid": "edit_lead.follow_up_date.input"
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
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "edit_lead.assigned_to.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select staff member" }) }),
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
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "edit_lead.branch.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select branch" }) }),
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
                rows: 4,
                value: form.notes,
                onChange: (e) => update("notes", e.target.value),
                "data-ocid": "edit_lead.notes.textarea",
                className: "resize-none"
              }
            )
          ] }) })
        ]
      }
    ),
    showDeleteConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
      DeleteConfirm,
      {
        leadName: form.name,
        onConfirm: handleDeleteConfirm,
        onCancel: () => setShowDeleteConfirm(false)
      }
    )
  ] });
}
export {
  EditLeadPage as default
};
