import { u as useNavigate, r as reactExports, j as jsxRuntimeExports, B as Button, s as ue, d as mockUsers } from "./index-CgV9Taym.js";
import { I as Input } from "./input-CQX-6uHe.js";
import { L as Label } from "./label-DBZIDZNQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BSYwbXVq.js";
import { T as Textarea } from "./textarea-DRhbSqfF.js";
import { F as FormPage } from "./FormPage-HwyGab_x.js";
import { C as CircleAlert } from "./circle-alert-D6br3TaJ.js";
import { P as Paperclip } from "./paperclip-By3Rkw6y.js";
import { P as Phone } from "./phone-B0agrxx4.js";
import { C as CalendarDays } from "./calendar-days-C9hU70Su.js";
import "./Breadcrumb-Vnwm27w7.js";
const REQUEST_TYPES = [
  {
    value: "Leave",
    label: "Leave",
    description: "Full day(s) away from office"
  },
  {
    value: "Work From Home",
    label: "Work From Home",
    description: "Working remotely"
  },
  {
    value: "Half Day",
    label: "Half Day",
    description: "Morning or afternoon off"
  },
  {
    value: "Regularization",
    label: "Regularization",
    description: "Correct an attendance record"
  }
];
const COLLEAGUES = mockUsers.filter((u) => u.role === "staff").slice(0, 8);
const CURRENT_USER = mockUsers.find((u) => u.role === "admin");
const CURRENT_USER_MANAGER = "Priya Sharma";
function CalendarPreview({
  startDate,
  endDate
}) {
  const month = startDate ? startDate.slice(0, 7) : "2025-04";
  const [year, mon] = month.split("-").map(Number);
  const daysInMonth = new Date(year, mon, 0).getDate();
  const firstDayOfWeek = (/* @__PURE__ */ new Date(`${month}-01`)).getDay();
  const monthLabel = (/* @__PURE__ */ new Date(`${month}-01`)).toLocaleString("en-IN", {
    month: "long",
    year: "numeric"
  });
  const inRange = (d) => {
    const dateStr = `${month}-${String(d).padStart(2, "0")}`;
    if (!startDate) return false;
    if (!endDate) return dateStr === startDate;
    return dateStr >= startDate && dateStr <= endDate;
  };
  const isStart = (d) => startDate === `${month}-${String(d).padStart(2, "0")}`;
  const isEnd = (d) => endDate === `${month}-${String(d).padStart(2, "0")}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-4 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-4 h-4 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-display font-semibold text-foreground", children: "Calendar Preview" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-3 text-center", children: monthLabel }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-7 gap-0.5 text-center", children: [
      ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "text-[10px] text-muted-foreground pb-1 font-medium",
          children: d
        },
        d
      )),
      Array.from({ length: firstDayOfWeek }, (_v, _i) => null).map(
        (_v, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}, `offset-${month}-slot-${idx + 1}`)
      ),
      Array.from({ length: daysInMonth }, (_, i) => {
        const d = i + 1;
        const dayOfWeek = (/* @__PURE__ */ new Date(
          `${month}-${String(d).padStart(2, "0")}`
        )).getDay();
        const weekend = dayOfWeek === 0 || dayOfWeek === 6;
        const highlighted = inRange(d);
        const start = isStart(d);
        const end = isEnd(d);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: [
              "aspect-square flex items-center justify-center text-[11px] font-medium",
              weekend ? "text-muted-foreground/40" : "text-foreground",
              highlighted && !start && !end ? "bg-primary/15 text-primary" : "",
              start ? "bg-primary text-primary-foreground rounded-l-md" : "",
              end && !start ? "bg-primary text-primary-foreground rounded-r-md" : "",
              start && end ? "bg-primary text-primary-foreground rounded-md" : ""
            ].filter(Boolean).join(" "),
            children: d
          },
          d
        );
      })
    ] }),
    (startDate || endDate) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-3 border-t border-border space-y-1", children: [
      startDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "From" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: startDate })
      ] }),
      endDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "To" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: endDate })
      ] })
    ] }),
    !startDate && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground text-center mt-3 italic", children: "Select dates to preview" })
  ] });
}
function DurationBadge({
  startDate,
  endDate,
  requestType
}) {
  const days = reactExports.useMemo(() => {
    if (!startDate || !endDate) return null;
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (end < start) return null;
    let count = 0;
    const cur = new Date(start);
    while (cur <= end) {
      const dow = cur.getDay();
      if (dow !== 0 && dow !== 6) count++;
      cur.setDate(cur.getDate() + 1);
    }
    return count;
  }, [startDate, endDate]);
  if (!days) return null;
  const label = requestType === "Half Day" ? "0.5 day" : `${days} working day${days !== 1 ? "s" : ""}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        className: "inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-lg border border-primary/20",
        "data-ocid": "attendance_request.duration_badge",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-3 h-3" }),
          label
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "excluding weekends" })
  ] });
}
function validate(fields) {
  const errors = {};
  if (!fields.requestType) errors.requestType = "Please select a request type";
  if (!fields.startDate) errors.startDate = "Start date is required";
  if (!fields.endDate) errors.endDate = "End date is required";
  if (fields.startDate && fields.endDate && fields.endDate < fields.startDate) {
    errors.endDate = "End date must be on or after start date";
  }
  if (!fields.reason.trim()) errors.reason = "Reason is required";
  else if (fields.reason.trim().length < 10)
    errors.reason = "Reason must be at least 10 characters";
  return errors;
}
function AttendanceRequestPage() {
  const navigate = useNavigate();
  const [requestType, setRequestType] = reactExports.useState(
    ""
  );
  const [startDate, setStartDate] = reactExports.useState("");
  const [endDate, setEndDate] = reactExports.useState("");
  const [reason, setReason] = reactExports.useState("");
  const [emergencyContact, setEmergencyContact] = reactExports.useState("");
  const [coverPerson, setCoverPerson] = reactExports.useState("");
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState({});
  const [touched, setTouched] = reactExports.useState({});
  function handleBlur(field) {
    setTouched((t) => ({ ...t, [field]: true }));
    const errs = validate({ requestType, startDate, endDate, reason });
    setErrors(errs);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTouched({
      requestType: true,
      startDate: true,
      endDate: true,
      reason: true
    });
    const errs = validate({ requestType, startDate, endDate, reason });
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      ue.success("Leave request submitted for approval", {
        description: `Your ${requestType} request from ${startDate} to ${endDate} has been sent to your manager.`
      });
      navigate({ to: "/attendance" });
    }, 1200);
  }
  const showError = (field) => touched[field] && errors[field];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    FormPage,
    {
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Attendance", href: "/attendance" },
        { label: "Request Leave / Absence" }
      ],
      title: "Request Leave / Absence",
      description: "Submit a leave, work from home, or regularization request for manager approval.",
      backTo: "/attendance",
      backLabel: "Back to Attendance",
      onSubmit: handleSubmit,
      isSubmitting,
      submitLabel: "Submit Request",
      ocidPrefix: "attendance_request",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-medium text-foreground", children: [
              "Request Type ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
                "data-ocid": "attendance_request.type_selector",
                children: REQUEST_TYPES.map((rt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setRequestType(rt.value);
                      handleBlur("requestType");
                    },
                    onKeyDown: (e) => e.key === "Enter" && (() => {
                      setRequestType(rt.value);
                      handleBlur("requestType");
                    })(),
                    "data-ocid": `attendance_request.type.${rt.value.toLowerCase().replace(/\s+/g, "_")}`,
                    className: `flex flex-col items-start text-left p-3 rounded-xl border-2 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${requestType === rt.value ? "border-primary bg-primary/5 text-primary" : "border-border bg-card text-foreground hover:border-primary/40"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: rt.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground mt-0.5", children: rt.description })
                    ]
                  },
                  rt.value
                ))
              }
            ),
            showError("requestType") && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "text-xs text-red-500 flex items-center gap-1 mt-1",
                "data-ocid": "attendance_request.type.field_error",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3" }),
                  errors.requestType
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Label,
                {
                  htmlFor: "startDate",
                  className: "text-sm font-medium text-foreground",
                  children: [
                    "Start Date ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "startDate",
                  type: "date",
                  value: startDate,
                  onChange: (e) => setStartDate(e.target.value),
                  onBlur: () => handleBlur("startDate"),
                  className: `text-sm ${showError("startDate") ? "border-red-500 focus-visible:ring-red-500" : ""}`,
                  "data-ocid": "attendance_request.start_date_input"
                }
              ),
              showError("startDate") && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "text-xs text-red-500 flex items-center gap-1",
                  "data-ocid": "attendance_request.start_date.field_error",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3" }),
                    errors.startDate
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Label,
                {
                  htmlFor: "endDate",
                  className: "text-sm font-medium text-foreground",
                  children: [
                    "End Date ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "endDate",
                  type: "date",
                  value: endDate,
                  min: startDate || void 0,
                  onChange: (e) => setEndDate(e.target.value),
                  onBlur: () => handleBlur("endDate"),
                  className: `text-sm ${showError("endDate") ? "border-red-500 focus-visible:ring-red-500" : ""}`,
                  "data-ocid": "attendance_request.end_date_input"
                }
              ),
              showError("endDate") && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "text-xs text-red-500 flex items-center gap-1",
                  "data-ocid": "attendance_request.end_date.field_error",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3" }),
                    errors.endDate
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            DurationBadge,
            {
              startDate,
              endDate,
              requestType
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Label,
              {
                htmlFor: "reason",
                className: "text-sm font-medium text-foreground",
                children: [
                  "Reason ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: "*" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "reason",
                placeholder: "Please provide a detailed reason for your request (minimum 10 characters)…",
                value: reason,
                onChange: (e) => setReason(e.target.value),
                onBlur: () => handleBlur("reason"),
                rows: 3,
                className: `text-sm resize-none ${showError("reason") ? "border-red-500 focus-visible:ring-red-500" : ""}`,
                "data-ocid": "attendance_request.reason_textarea"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              showError("reason") ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "text-xs text-red-500 flex items-center gap-1",
                  "data-ocid": "attendance_request.reason.field_error",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3 h-3" }),
                    errors.reason
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: `text-[11px] ml-auto ${reason.trim().length >= 10 ? "text-green-600" : "text-muted-foreground"}`,
                  children: [
                    reason.trim().length,
                    "/10+ chars"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium text-foreground", children: "Supporting Document" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "label",
              {
                htmlFor: "supportingDoc",
                className: "flex items-center gap-3 border border-dashed border-border rounded-xl p-3 cursor-pointer hover:border-primary/50 hover:bg-muted/30 transition-smooth",
                "data-ocid": "attendance_request.document_upload_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { className: "w-4 h-4 text-muted-foreground shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-medium", children: "Attach a document" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Medical certificate, approval email, etc. (PDF, JPG, PNG)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "supportingDoc",
                      type: "file",
                      accept: ".pdf,.jpg,.jpeg,.png",
                      className: "hidden",
                      "aria-label": "Upload supporting document"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border" }),
          (requestType === "Leave" || requestType === "") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Label,
              {
                htmlFor: "emergencyContact",
                className: "text-sm font-medium text-foreground",
                children: [
                  "Emergency Contact",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-1.5 font-normal", children: "(for leave requests)" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "emergencyContact",
                  type: "tel",
                  placeholder: "+91 98765 43210",
                  value: emergencyContact,
                  onChange: (e) => setEmergencyContact(e.target.value),
                  className: "pl-9 text-sm",
                  "data-ocid": "attendance_request.emergency_contact_input"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium text-foreground", children: "Reporting Manager" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: CURRENT_USER_MANAGER,
                readOnly: true,
                className: "text-sm bg-muted/30 cursor-not-allowed text-muted-foreground",
                "data-ocid": "attendance_request.reporting_manager_input"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Auto-filled from your profile" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-medium text-foreground", children: [
              "Cover Person",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-1.5 font-normal", children: "(colleague covering your responsibilities)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: coverPerson, onValueChange: setCoverPerson, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "text-sm",
                  "data-ocid": "attendance_request.cover_person_select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select a colleague…" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "_none", children: "— No cover required —" }),
                COLLEAGUES.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: u.id, children: [
                  u.name,
                  " — ",
                  u.designation
                ] }, u.id))
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5 bg-primary/5 border border-primary/20 rounded-xl p-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 text-primary shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-0.5", children: "What happens next?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                "Your request will be sent to",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: CURRENT_USER_MANAGER }),
                " ",
                "for approval. You'll receive a notification once reviewed. Leave is subject to team availability."
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarPreview, { startDate, endDate }),
          CURRENT_USER && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-3.5 shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-2 font-medium", children: "Submitting as" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: CURRENT_USER.avatar,
                  alt: CURRENT_USER.name,
                  className: "w-8 h-8 rounded-full"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground truncate", children: CURRENT_USER.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate", children: CURRENT_USER.designation })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-3.5 shadow-card space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium", children: "Quick links" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "sm",
                className: "w-full justify-start text-xs h-8 rounded-lg",
                onClick: () => navigate({ to: "/attendance" }),
                "data-ocid": "attendance_request.view_history_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-3.5 h-3.5 mr-2" }),
                  "View attendance history"
                ]
              }
            )
          ] })
        ] })
      ] })
    }
  );
}
export {
  AttendanceRequestPage as default
};
