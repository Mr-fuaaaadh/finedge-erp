import { u as useNavigate, r as reactExports, d as mockUsers, j as jsxRuntimeExports, p as User, i as Building2, s as ue } from "./index-CgV9Taym.js";
import { I as Input } from "./input-CQX-6uHe.js";
import { L as Label } from "./label-DBZIDZNQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BSYwbXVq.js";
import { S as Separator } from "./separator-n_ZCSSuO.js";
import { T as Textarea } from "./textarea-DRhbSqfF.js";
import { F as FormPage } from "./FormPage-HwyGab_x.js";
import { m as mockBranches } from "./mockBranches-6NlnyQQY.js";
import { M as Mail } from "./mail-DtpfkiRi.js";
import { P as Phone } from "./phone-B0agrxx4.js";
import { C as CalendarDays } from "./calendar-days-C9hU70Su.js";
import { M as MapPin } from "./map-pin-BzQ-JiWE.js";
import { U as UserCog, B as BadgeCheck } from "./user-cog-Dl4YMcK_.js";
import { I as IndianRupee } from "./indian-rupee-BvtpXdiF.js";
import "./Breadcrumb-Vnwm27w7.js";
const ROLES = [
  { value: "staff", label: "Staff" },
  { value: "branch_manager", label: "Branch Manager" },
  { value: "finance_manager", label: "Finance Manager" },
  { value: "admin", label: "Admin" }
];
const DEPARTMENTS = [
  "Sales",
  "Finance",
  "Operations",
  "HR",
  "Marketing",
  "IT"
];
const STATUSES = ["Active", "Inactive", "On Leave"];
function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Full name is required";
  if (!form.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Enter a valid email address";
  if (!form.role) errors.role = "Role is required";
  if (!form.department) errors.department = "Department is required";
  if (!form.branchId) errors.branchId = "Branch is required";
  if (!form.employeeId.trim()) errors.employeeId = "Employee ID is required";
  return errors;
}
function NewStaffPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState({});
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    department: "",
    designation: "",
    branchId: "",
    employeeId: "",
    startDate: "",
    managerId: "",
    salary: "",
    status: "Active",
    address: ""
  });
  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: void 0 }));
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      ue.error("Please fix the errors before submitting");
      return;
    }
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1e3));
    setIsSubmitting(false);
    ue.success(`${form.name} has been added successfully`);
    navigate({ to: "/staff" });
  }
  const seniorStaff = mockUsers.filter(
    (u) => u.role === "branch_manager" || u.role === "admin" || u.role === "finance_manager"
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    FormPage,
    {
      breadcrumbs: [
        { label: "Staff", href: "/staff" },
        { label: "New Staff Member" }
      ],
      title: "Add New Staff Member",
      description: "Onboard a new team member and set up their profile",
      backTo: "/staff",
      submitLabel: "Add Staff Member",
      onSubmit: handleSubmit,
      isSubmitting,
      ocidPrefix: "new_staff",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-semibold text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-primary" }),
            "Personal Information"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "ns-name", children: [
                "Full Name ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "ns-name",
                  placeholder: "e.g. Arjun Mehta",
                  value: form.name,
                  onChange: (e) => update("name", e.target.value),
                  className: errors.name ? "border-destructive" : "",
                  "data-ocid": "new_staff.name.input"
                }
              ),
              errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-destructive",
                  "data-ocid": "new_staff.name.field_error",
                  children: errors.name
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "ns-email", children: [
                "Email ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "ns-email",
                    type: "email",
                    className: `pl-9 ${errors.email ? "border-destructive" : ""}`,
                    placeholder: "arjun@fincore.in",
                    value: form.email,
                    onChange: (e) => update("email", e.target.value),
                    "data-ocid": "new_staff.email.input"
                  }
                )
              ] }),
              errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-destructive",
                  "data-ocid": "new_staff.email.field_error",
                  children: errors.email
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ns-phone", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "ns-phone",
                    className: "pl-9",
                    placeholder: "+91 99999 00000",
                    value: form.phone,
                    onChange: (e) => update("phone", e.target.value),
                    "data-ocid": "new_staff.phone.input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "ns-emp-id", children: [
                "Employee ID ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "ns-emp-id",
                  placeholder: "EMP-2026-001",
                  value: form.employeeId,
                  onChange: (e) => update("employeeId", e.target.value),
                  className: errors.employeeId ? "border-destructive" : "",
                  "data-ocid": "new_staff.employee_id.input"
                }
              ),
              errors.employeeId && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-destructive",
                  "data-ocid": "new_staff.employee_id.field_error",
                  children: errors.employeeId
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ns-start-date", children: "Start Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "ns-start-date",
                    type: "date",
                    className: "pl-9",
                    value: form.startDate,
                    onChange: (e) => update("startDate", e.target.value),
                    "data-ocid": "new_staff.start_date.input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "ns-address", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 inline mr-1.5 text-muted-foreground" }),
                "Address"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "ns-address",
                  placeholder: "Residential address",
                  rows: 2,
                  value: form.address,
                  onChange: (e) => update("address", e.target.value),
                  className: "resize-none",
                  "data-ocid": "new_staff.address.textarea"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-semibold text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4 text-primary" }),
            "Role & Assignment"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                "Role ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.role,
                  onValueChange: (v) => update("role", v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        className: errors.role ? "border-destructive" : "",
                        "data-ocid": "new_staff.role.select",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select role" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ROLES.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r.value, children: r.label }, r.value)) })
                  ]
                }
              ),
              errors.role && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-destructive",
                  "data-ocid": "new_staff.role.field_error",
                  children: errors.role
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                "Department ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.department,
                  onValueChange: (v) => update("department", v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        className: errors.department ? "border-destructive" : "",
                        "data-ocid": "new_staff.department.select",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select department" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: DEPARTMENTS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: d, children: d }, d)) })
                  ]
                }
              ),
              errors.department && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-destructive",
                  "data-ocid": "new_staff.department.field_error",
                  children: errors.department
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ns-designation", children: "Designation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "ns-designation",
                  placeholder: "e.g. Senior Relationship Manager",
                  value: form.designation,
                  onChange: (e) => update("designation", e.target.value),
                  "data-ocid": "new_staff.designation.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                "Branch ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.branchId,
                  onValueChange: (v) => update("branchId", v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        className: errors.branchId ? "border-destructive" : "",
                        "data-ocid": "new_staff.branch.select",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select branch" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hq", children: "Head Office" }),
                      mockBranches.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: b.id, children: b.name }, b.id))
                    ] })
                  ]
                }
              ),
              errors.branchId && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-destructive",
                  "data-ocid": "new_staff.branch.field_error",
                  children: errors.branchId
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(UserCog, { className: "w-3.5 h-3.5 inline mr-1.5 text-muted-foreground" }),
                "Reporting Manager"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.managerId,
                  onValueChange: (v) => update("managerId", v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "new_staff.manager.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select manager" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", children: "No manager" }),
                      seniorStaff.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: u.id, children: [
                        u.name,
                        " — ",
                        u.designation
                      ] }, u.id))
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "w-3.5 h-3.5 inline mr-1.5 text-muted-foreground" }),
                "Status"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.status,
                  onValueChange: (v) => update("status", v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "new_staff.status.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-semibold text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "w-4 h-4 text-primary" }),
            "Compensation"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "ns-salary", children: "Monthly Salary (₹)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "ns-salary",
                  type: "number",
                  className: "pl-9",
                  placeholder: "55000",
                  value: form.salary,
                  onChange: (e) => update("salary", e.target.value),
                  "data-ocid": "new_staff.salary.input"
                }
              )
            ] })
          ] }) })
        ] })
      ]
    }
  );
}
export {
  NewStaffPage as default
};
