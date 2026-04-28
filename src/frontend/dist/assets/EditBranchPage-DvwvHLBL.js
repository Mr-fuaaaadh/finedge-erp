import { a4 as useParams, u as useNavigate, r as reactExports, d as mockUsers, j as jsxRuntimeExports, i as Building2, B as Button, s as ue } from "./index-CgV9Taym.js";
import { A as AlertDialog, a as AlertDialogTrigger, b as AlertDialogContent, c as AlertDialogHeader, d as AlertDialogTitle, e as AlertDialogDescription, f as AlertDialogFooter, g as AlertDialogCancel, h as AlertDialogAction } from "./alert-dialog-DoM-TyKs.js";
import { I as Input } from "./input-CQX-6uHe.js";
import { L as Label } from "./label-DBZIDZNQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BSYwbXVq.js";
import { S as Separator } from "./separator-n_ZCSSuO.js";
import { T as Textarea } from "./textarea-DRhbSqfF.js";
import { F as FormPage } from "./FormPage-HwyGab_x.js";
import { g as getBranchById } from "./mockBranches-6NlnyQQY.js";
import { T as TriangleAlert } from "./triangle-alert-t2GMGPuS.js";
import { M as MapPin } from "./map-pin-BzQ-JiWE.js";
import { P as Phone } from "./phone-B0agrxx4.js";
import { M as Mail } from "./mail-DtpfkiRi.js";
import "./index-DD6-NRsj.js";
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
function EditBranchPage() {
  const { branchId } = useParams({ from: "/layout/branches/$branchId/edit" });
  const navigate = useNavigate();
  const branch = getBranchById(branchId);
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
  reactExports.useEffect(() => {
    if (branch) {
      setForm({
        name: branch.name,
        code: branch.code,
        city: branch.city,
        state: branch.state,
        country: "India",
        address: branch.address,
        phone: branch.phone,
        email: branch.email,
        managerId: branch.managerId,
        targetRevenue: String(branch.targetRevenue),
        status: branch.status,
        establishedDate: branch.createdAt
      });
    }
  }, [branch]);
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
    ue.success("Branch updated successfully");
    navigate({ to: "/branches/$branchId", params: { branchId } });
  }
  if (!branch) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-64 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-10 h-10 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Branch not found." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          size: "sm",
          onClick: () => navigate({ to: "/branches" }),
          children: "Back to Branches"
        }
      )
    ] });
  }
  const closeBranchAction = /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        type: "button",
        variant: "outline",
        className: "border-destructive text-destructive hover:bg-destructive/10",
        "data-ocid": "edit_branch.close_branch.open_modal_button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5 mr-1.5" }),
          "Close Branch"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { "data-ocid": "edit_branch.close_branch.dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "Close this branch?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
          "Closing ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: branch.name }),
          " will mark it as inactive and remove it from active operations. This can be reversed by an administrator."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { "data-ocid": "edit_branch.close_branch.cancel_button", children: "Keep Branch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AlertDialogAction,
          {
            className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            onClick: () => {
              ue.success(`${branch.name} has been closed`);
              navigate({ to: "/branches" });
            },
            "data-ocid": "edit_branch.close_branch.confirm_button",
            children: "Close Branch"
          }
        )
      ] })
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    FormPage,
    {
      breadcrumbs: [
        { label: "Branches", href: "/branches" },
        { label: branch.name, href: `/branches/${branchId}` },
        { label: "Edit" }
      ],
      title: `Edit — ${branch.name}`,
      description: "Update branch details and operational settings.",
      backTo: `/branches/${branchId}`,
      submitLabel: "Save Changes",
      onSubmit: handleSubmit,
      isSubmitting,
      onCancel: () => navigate({ to: "/branches/$branchId", params: { branchId } }),
      extraActions: closeBranchAction,
      ocidPrefix: "edit_branch",
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
                  value: form.name,
                  onChange: (e) => update("name", e.target.value),
                  className: errors.name ? "border-destructive" : "",
                  "data-ocid": "edit_branch.name.input"
                }
              ),
              errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-[11px] text-destructive",
                  "data-ocid": "edit_branch.name.field_error",
                  children: errors.name
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "code", children: [
                "Branch Code ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "code",
                  value: form.code,
                  onChange: (e) => update("code", e.target.value.toUpperCase()),
                  className: `font-mono ${errors.code ? "border-destructive" : ""}`,
                  "data-ocid": "edit_branch.code.input"
                }
              ),
              errors.code && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-[11px] text-destructive",
                  "data-ocid": "edit_branch.code.field_error",
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "edit_branch.status.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
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
                  "data-ocid": "edit_branch.established_date.input"
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
                  rows: 3,
                  value: form.address,
                  onChange: (e) => update("address", e.target.value),
                  className: `resize-none ${errors.address ? "border-destructive" : ""}`,
                  "data-ocid": "edit_branch.address.textarea"
                }
              ),
              errors.address && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-[11px] text-destructive",
                  "data-ocid": "edit_branch.address.field_error",
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
                  value: form.city,
                  onChange: (e) => update("city", e.target.value),
                  className: errors.city ? "border-destructive" : "",
                  "data-ocid": "edit_branch.city.input"
                }
              ),
              errors.city && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-[11px] text-destructive",
                  "data-ocid": "edit_branch.city.field_error",
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "edit_branch.state.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select state…" }) }),
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
                  "data-ocid": "edit_branch.country.input"
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
                    value: form.phone,
                    onChange: (e) => update("phone", e.target.value),
                    "data-ocid": "edit_branch.phone.input"
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
                    value: form.email,
                    onChange: (e) => update("email", e.target.value),
                    "data-ocid": "edit_branch.email.input"
                  }
                )
              ] }),
              errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-[11px] text-destructive",
                  "data-ocid": "edit_branch.email.field_error",
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "edit_branch.manager.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Assign a manager" }) }),
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
                  value: form.targetRevenue,
                  onChange: (e) => update("targetRevenue", e.target.value),
                  "data-ocid": "edit_branch.target_revenue.input"
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
  EditBranchPage as default
};
