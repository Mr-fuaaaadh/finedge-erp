import { a4 as useParams, u as useNavigate, a5 as getUserById, r as reactExports, d as mockUsers, j as jsxRuntimeExports, p as User, i as Building2, B as Button, s as ue } from "./index-CgV9Taym.js";
import { A as AlertDialog, a as AlertDialogTrigger, b as AlertDialogContent, c as AlertDialogHeader, d as AlertDialogTitle, e as AlertDialogDescription, f as AlertDialogFooter, g as AlertDialogCancel, h as AlertDialogAction } from "./alert-dialog-DoM-TyKs.js";
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
import { U as UserMinus } from "./user-minus-C_DTFA8Z.js";
import { T as Trash2 } from "./trash-2-D2vYGX4E.js";
import "./index-DD6-NRsj.js";
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
  return errors;
}
function EditStaffPage() {
  const { staffId } = useParams({ from: "/layout/staff/$staffId/edit" });
  const navigate = useNavigate();
  const existingStaff = getUserById(staffId);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState({});
  const [form, setForm] = reactExports.useState(() => ({
    name: (existingStaff == null ? void 0 : existingStaff.name) ?? "Priya Sharma",
    email: (existingStaff == null ? void 0 : existingStaff.email) ?? "priya.sharma@fincore.in",
    phone: (existingStaff == null ? void 0 : existingStaff.phone) ?? "+91 98765 00001",
    role: (existingStaff == null ? void 0 : existingStaff.role) ?? "branch_manager",
    department: (existingStaff == null ? void 0 : existingStaff.department) ?? "Sales",
    designation: (existingStaff == null ? void 0 : existingStaff.designation) ?? "Branch Manager",
    branchId: (existingStaff == null ? void 0 : existingStaff.branchId) ?? "b1",
    employeeId: `EMP-${staffId == null ? void 0 : staffId.toUpperCase()}`,
    startDate: (existingStaff == null ? void 0 : existingStaff.joinDate) ?? "2022-03-15",
    managerId: "",
    salary: String((existingStaff == null ? void 0 : existingStaff.salary) ?? 85e3),
    status: (existingStaff == null ? void 0 : existingStaff.status) ?? "Active",
    address: "12, Linking Road, Bandra West, Mumbai 400050"
  }));
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
    ue.success("Staff record updated successfully");
    navigate({ to: "/staff/$staffId", params: { staffId } });
  }
  async function handleDeactivate() {
    await new Promise((r) => setTimeout(r, 800));
    ue.success(`${form.name} has been deactivated`);
    navigate({ to: "/staff" });
  }
  async function handleDelete() {
    await new Promise((r) => setTimeout(r, 800));
    ue.success(`${form.name} has been permanently deleted`);
    navigate({ to: "/staff" });
  }
  const seniorStaff = mockUsers.filter(
    (u) => (u.role === "branch_manager" || u.role === "admin" || u.role === "finance_manager") && u.id !== staffId
  );
  const staffName = (existingStaff == null ? void 0 : existingStaff.name) ?? form.name;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    FormPage,
    {
      breadcrumbs: [
        { label: "Staff", href: "/staff" },
        { label: staffName, href: `/staff/${staffId}` },
        { label: "Edit" }
      ],
      title: `Edit — ${staffName}`,
      description: "Update employee information and assignment",
      backTo: `/staff/${staffId}`,
      submitLabel: "Save Changes",
      onSubmit: handleSubmit,
      isSubmitting,
      ocidPrefix: "edit_staff",
      extraActions: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mr-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              variant: "outline",
              size: "sm",
              className: "gap-1.5 text-amber-600 border-amber-200 hover:bg-amber-50 hover:border-amber-300",
              "data-ocid": "edit_staff.deactivate_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(UserMinus, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Deactivate" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { "data-ocid": "edit_staff.deactivate.dialog", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "Deactivate Staff Member?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
                staffName,
                " will be marked as inactive and will lose access to the system. This can be reversed by editing their status."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { "data-ocid": "edit_staff.deactivate.cancel_button", children: "Cancel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AlertDialogAction,
                {
                  onClick: handleDeactivate,
                  className: "bg-amber-500 hover:bg-amber-600 text-white",
                  "data-ocid": "edit_staff.deactivate.confirm_button",
                  children: "Deactivate"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              variant: "outline",
              size: "sm",
              className: "gap-1.5 text-destructive border-destructive/30 hover:bg-destructive/5",
              "data-ocid": "edit_staff.delete_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Delete" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { "data-ocid": "edit_staff.delete.dialog", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "Permanently Delete Staff Member?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
                "This will permanently delete ",
                staffName,
                "'s record including all assigned tasks, attendance history, and performance data. This action cannot be undone."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { "data-ocid": "edit_staff.delete.cancel_button", children: "Cancel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AlertDialogAction,
                {
                  onClick: handleDelete,
                  className: "bg-destructive hover:bg-destructive/90 text-destructive-foreground",
                  "data-ocid": "edit_staff.delete.confirm_button",
                  children: "Delete Permanently"
                }
              )
            ] })
          ] })
        ] })
      ] }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-semibold text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-primary" }),
            "Personal Information"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "es-name", children: [
                "Full Name ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "es-name",
                  value: form.name,
                  onChange: (e) => update("name", e.target.value),
                  className: errors.name ? "border-destructive" : "",
                  "data-ocid": "edit_staff.name.input"
                }
              ),
              errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-destructive",
                  "data-ocid": "edit_staff.name.field_error",
                  children: errors.name
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "es-email", children: [
                "Email ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "es-email",
                    type: "email",
                    className: `pl-9 ${errors.email ? "border-destructive" : ""}`,
                    value: form.email,
                    onChange: (e) => update("email", e.target.value),
                    "data-ocid": "edit_staff.email.input"
                  }
                )
              ] }),
              errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs text-destructive",
                  "data-ocid": "edit_staff.email.field_error",
                  children: errors.email
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "es-phone", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "es-phone",
                    className: "pl-9",
                    value: form.phone,
                    onChange: (e) => update("phone", e.target.value),
                    "data-ocid": "edit_staff.phone.input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "es-emp-id", children: "Employee ID" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "es-emp-id",
                  value: form.employeeId,
                  onChange: (e) => update("employeeId", e.target.value),
                  "data-ocid": "edit_staff.employee_id.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "es-start-date", children: "Start Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "es-start-date",
                    type: "date",
                    className: "pl-9",
                    value: form.startDate,
                    onChange: (e) => update("startDate", e.target.value),
                    "data-ocid": "edit_staff.start_date.input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "es-address", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 inline mr-1.5 text-muted-foreground" }),
                "Address"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "es-address",
                  rows: 2,
                  value: form.address,
                  onChange: (e) => update("address", e.target.value),
                  className: "resize-none",
                  "data-ocid": "edit_staff.address.textarea"
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
                        "data-ocid": "edit_staff.role.select",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
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
                  "data-ocid": "edit_staff.role.field_error",
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
                        "data-ocid": "edit_staff.department.select",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: DEPARTMENTS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: d, children: d }, d)) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "es-designation", children: "Designation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "es-designation",
                  value: form.designation,
                  onChange: (e) => update("designation", e.target.value),
                  "data-ocid": "edit_staff.designation.input"
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
                        "data-ocid": "edit_staff.branch.select",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hq", children: "Head Office" }),
                      mockBranches.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: b.id, children: b.name }, b.id))
                    ] })
                  ]
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "edit_staff.manager.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select manager" }) }),
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
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "edit_staff.status.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "es-salary", children: "Monthly Salary (₹)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "es-salary",
                  type: "number",
                  className: "pl-9",
                  value: form.salary,
                  onChange: (e) => update("salary", e.target.value),
                  "data-ocid": "edit_staff.salary.input"
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
  EditStaffPage as default
};
