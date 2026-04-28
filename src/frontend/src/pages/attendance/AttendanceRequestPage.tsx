import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "@tanstack/react-router";
import { AlertCircle, CalendarDays, Paperclip, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { FormPage } from "../../components/shared/FormPage";
import { mockUsers } from "../../data/mockUsers";
import type { AttendanceRequestType } from "../../types";

// ─── Constants ────────────────────────────────────────────────────────────────
const REQUEST_TYPES: {
  value: AttendanceRequestType;
  label: string;
  description: string;
}[] = [
  {
    value: "Leave",
    label: "Leave",
    description: "Full day(s) away from office",
  },
  {
    value: "Work From Home",
    label: "Work From Home",
    description: "Working remotely",
  },
  {
    value: "Half Day",
    label: "Half Day",
    description: "Morning or afternoon off",
  },
  {
    value: "Regularization",
    label: "Regularization",
    description: "Correct an attendance record",
  },
];

const COLLEAGUES = mockUsers.filter((u) => u.role === "staff").slice(0, 8);
const CURRENT_USER = mockUsers.find((u) => u.role === "admin");
const CURRENT_USER_MANAGER = "Priya Sharma";

// ─── Calendar Preview ─────────────────────────────────────────────────────────
function CalendarPreview({
  startDate,
  endDate,
}: { startDate: string; endDate: string }) {
  const month = startDate ? startDate.slice(0, 7) : "2025-04";
  const [year, mon] = month.split("-").map(Number);
  const daysInMonth = new Date(year, mon, 0).getDate();
  const firstDayOfWeek = new Date(`${month}-01`).getDay();
  const monthLabel = new Date(`${month}-01`).toLocaleString("en-IN", {
    month: "long",
    year: "numeric",
  });

  const inRange = (d: number) => {
    const dateStr = `${month}-${String(d).padStart(2, "0")}`;
    if (!startDate) return false;
    if (!endDate) return dateStr === startDate;
    return dateStr >= startDate && dateStr <= endDate;
  };
  const isStart = (d: number) =>
    startDate === `${month}-${String(d).padStart(2, "0")}`;
  const isEnd = (d: number) =>
    endDate === `${month}-${String(d).padStart(2, "0")}`;

  return (
    <div className="bg-card border border-border rounded-2xl p-4 shadow-card">
      <div className="flex items-center gap-2 mb-3">
        <CalendarDays className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-display font-semibold text-foreground">
          Calendar Preview
        </h3>
      </div>
      <p className="text-xs font-semibold text-muted-foreground mb-3 text-center">
        {monthLabel}
      </p>
      <div className="grid grid-cols-7 gap-0.5 text-center">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div
            key={d}
            className="text-[10px] text-muted-foreground pb-1 font-medium"
          >
            {d}
          </div>
        ))}
        {Array.from({ length: firstDayOfWeek }, (_v, _i) => null).map(
          (_v, idx) => (
            <div key={`offset-${month}-slot-${idx + 1}`} />
          ),
        )}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const d = i + 1;
          const dayOfWeek = new Date(
            `${month}-${String(d).padStart(2, "0")}`,
          ).getDay();
          const weekend = dayOfWeek === 0 || dayOfWeek === 6;
          const highlighted = inRange(d);
          const start = isStart(d);
          const end = isEnd(d);
          return (
            <div
              key={d}
              className={[
                "aspect-square flex items-center justify-center text-[11px] font-medium",
                weekend ? "text-muted-foreground/40" : "text-foreground",
                highlighted && !start && !end
                  ? "bg-primary/15 text-primary"
                  : "",
                start ? "bg-primary text-primary-foreground rounded-l-md" : "",
                end && !start
                  ? "bg-primary text-primary-foreground rounded-r-md"
                  : "",
                start && end
                  ? "bg-primary text-primary-foreground rounded-md"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {d}
            </div>
          );
        })}
      </div>
      {(startDate || endDate) && (
        <div className="mt-3 pt-3 border-t border-border space-y-1">
          {startDate && (
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">From</span>
              <span className="font-semibold text-foreground">{startDate}</span>
            </div>
          )}
          {endDate && (
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">To</span>
              <span className="font-semibold text-foreground">{endDate}</span>
            </div>
          )}
        </div>
      )}
      {!startDate && (
        <p className="text-[11px] text-muted-foreground text-center mt-3 italic">
          Select dates to preview
        </p>
      )}
    </div>
  );
}

// ─── Duration Badge ───────────────────────────────────────────────────────────
function DurationBadge({
  startDate,
  endDate,
  requestType,
}: {
  startDate: string;
  endDate: string;
  requestType: AttendanceRequestType | "";
}) {
  const days = useMemo(() => {
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
  const label =
    requestType === "Half Day"
      ? "0.5 day"
      : `${days} working day${days !== 1 ? "s" : ""}`;
  return (
    <div className="flex items-center gap-2 mt-1">
      <span
        className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-lg border border-primary/20"
        data-ocid="attendance_request.duration_badge"
      >
        <CalendarDays className="w-3 h-3" />
        {label}
      </span>
      <span className="text-xs text-muted-foreground">excluding weekends</span>
    </div>
  );
}

// ─── Validation ───────────────────────────────────────────────────────────────
interface FormErrors {
  requestType?: string;
  startDate?: string;
  endDate?: string;
  reason?: string;
}

function validate(fields: {
  requestType: AttendanceRequestType | "";
  startDate: string;
  endDate: string;
  reason: string;
}): FormErrors {
  const errors: FormErrors = {};
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

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function AttendanceRequestPage() {
  const navigate = useNavigate();

  const [requestType, setRequestType] = useState<AttendanceRequestType | "">(
    "",
  );
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [coverPerson, setCoverPerson] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  function handleBlur(field: string) {
    setTouched((t) => ({ ...t, [field]: true }));
    const errs = validate({ requestType, startDate, endDate, reason });
    setErrors(errs);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({
      requestType: true,
      startDate: true,
      endDate: true,
      reason: true,
    });
    const errs = validate({ requestType, startDate, endDate, reason });
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Leave request submitted for approval", {
        description: `Your ${requestType} request from ${startDate} to ${endDate} has been sent to your manager.`,
      });
      navigate({ to: "/attendance" });
    }, 1200);
  }

  const showError = (field: keyof FormErrors) =>
    touched[field] && errors[field];

  return (
    <FormPage
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Attendance", href: "/attendance" },
        { label: "Request Leave / Absence" },
      ]}
      title="Request Leave / Absence"
      description="Submit a leave, work from home, or regularization request for manager approval."
      backTo="/attendance"
      backLabel="Back to Attendance"
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      submitLabel="Submit Request"
      ocidPrefix="attendance_request"
    >
      {/* Two-column on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        {/* ── Left: Form fields ── */}
        <div className="space-y-5">
          {/* Request Type — visual card selector */}
          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-foreground">
              Request Type <span className="text-red-500">*</span>
            </Label>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-2"
              data-ocid="attendance_request.type_selector"
            >
              {REQUEST_TYPES.map((rt) => (
                <button
                  key={rt.value}
                  type="button"
                  onClick={() => {
                    setRequestType(rt.value);
                    handleBlur("requestType");
                  }}
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    (() => {
                      setRequestType(rt.value);
                      handleBlur("requestType");
                    })()
                  }
                  data-ocid={`attendance_request.type.${rt.value.toLowerCase().replace(/\s+/g, "_")}`}
                  className={`flex flex-col items-start text-left p-3 rounded-xl border-2 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    requestType === rt.value
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border bg-card text-foreground hover:border-primary/40"
                  }`}
                >
                  <span className="text-sm font-semibold">{rt.label}</span>
                  <span className="text-[11px] text-muted-foreground mt-0.5">
                    {rt.description}
                  </span>
                </button>
              ))}
            </div>
            {showError("requestType") && (
              <p
                className="text-xs text-red-500 flex items-center gap-1 mt-1"
                data-ocid="attendance_request.type.field_error"
              >
                <AlertCircle className="w-3 h-3" />
                {errors.requestType}
              </p>
            )}
          </div>

          {/* Date range */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label
                htmlFor="startDate"
                className="text-sm font-medium text-foreground"
              >
                Start Date <span className="text-red-500">*</span>
              </Label>
              <Input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                onBlur={() => handleBlur("startDate")}
                className={`text-sm ${showError("startDate") ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                data-ocid="attendance_request.start_date_input"
              />
              {showError("startDate") && (
                <p
                  className="text-xs text-red-500 flex items-center gap-1"
                  data-ocid="attendance_request.start_date.field_error"
                >
                  <AlertCircle className="w-3 h-3" />
                  {errors.startDate}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label
                htmlFor="endDate"
                className="text-sm font-medium text-foreground"
              >
                End Date <span className="text-red-500">*</span>
              </Label>
              <Input
                id="endDate"
                type="date"
                value={endDate}
                min={startDate || undefined}
                onChange={(e) => setEndDate(e.target.value)}
                onBlur={() => handleBlur("endDate")}
                className={`text-sm ${showError("endDate") ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                data-ocid="attendance_request.end_date_input"
              />
              {showError("endDate") && (
                <p
                  className="text-xs text-red-500 flex items-center gap-1"
                  data-ocid="attendance_request.end_date.field_error"
                >
                  <AlertCircle className="w-3 h-3" />
                  {errors.endDate}
                </p>
              )}
            </div>
          </div>

          {/* Auto-calculated duration */}
          <DurationBadge
            startDate={startDate}
            endDate={endDate}
            requestType={requestType}
          />

          {/* Reason */}
          <div className="space-y-1.5">
            <Label
              htmlFor="reason"
              className="text-sm font-medium text-foreground"
            >
              Reason <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="reason"
              placeholder="Please provide a detailed reason for your request (minimum 10 characters)…"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              onBlur={() => handleBlur("reason")}
              rows={3}
              className={`text-sm resize-none ${showError("reason") ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              data-ocid="attendance_request.reason_textarea"
            />
            <div className="flex items-center justify-between">
              {showError("reason") ? (
                <p
                  className="text-xs text-red-500 flex items-center gap-1"
                  data-ocid="attendance_request.reason.field_error"
                >
                  <AlertCircle className="w-3 h-3" />
                  {errors.reason}
                </p>
              ) : (
                <span />
              )}
              <span
                className={`text-[11px] ml-auto ${reason.trim().length >= 10 ? "text-green-600" : "text-muted-foreground"}`}
              >
                {reason.trim().length}/10+ chars
              </span>
            </div>
          </div>

          {/* Supporting Document */}
          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-foreground">
              Supporting Document
            </Label>
            <label
              htmlFor="supportingDoc"
              className="flex items-center gap-3 border border-dashed border-border rounded-xl p-3 cursor-pointer hover:border-primary/50 hover:bg-muted/30 transition-smooth"
              data-ocid="attendance_request.document_upload_button"
            >
              <Paperclip className="w-4 h-4 text-muted-foreground shrink-0" />
              <div>
                <p className="text-sm text-foreground font-medium">
                  Attach a document
                </p>
                <p className="text-xs text-muted-foreground">
                  Medical certificate, approval email, etc. (PDF, JPG, PNG)
                </p>
              </div>
              <input
                id="supportingDoc"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                aria-label="Upload supporting document"
              />
            </label>
          </div>

          <div className="border-t border-border" />

          {/* Emergency Contact (for leave) */}
          {(requestType === "Leave" || requestType === "") && (
            <div className="space-y-1.5">
              <Label
                htmlFor="emergencyContact"
                className="text-sm font-medium text-foreground"
              >
                Emergency Contact
                <span className="text-xs text-muted-foreground ml-1.5 font-normal">
                  (for leave requests)
                </span>
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <Input
                  id="emergencyContact"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={emergencyContact}
                  onChange={(e) => setEmergencyContact(e.target.value)}
                  className="pl-9 text-sm"
                  data-ocid="attendance_request.emergency_contact_input"
                />
              </div>
            </div>
          )}

          {/* Reporting Manager — read-only */}
          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-foreground">
              Reporting Manager
            </Label>
            <Input
              value={CURRENT_USER_MANAGER}
              readOnly
              className="text-sm bg-muted/30 cursor-not-allowed text-muted-foreground"
              data-ocid="attendance_request.reporting_manager_input"
            />
            <p className="text-[11px] text-muted-foreground">
              Auto-filled from your profile
            </p>
          </div>

          {/* Cover Person */}
          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-foreground">
              Cover Person
              <span className="text-xs text-muted-foreground ml-1.5 font-normal">
                (colleague covering your responsibilities)
              </span>
            </Label>
            <Select value={coverPerson} onValueChange={setCoverPerson}>
              <SelectTrigger
                className="text-sm"
                data-ocid="attendance_request.cover_person_select"
              >
                <SelectValue placeholder="Select a colleague…" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="_none">— No cover required —</SelectItem>
                {COLLEAGUES.map((u) => (
                  <SelectItem key={u.id} value={u.id}>
                    {u.name} — {u.designation}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* What happens next info */}
          <div className="flex items-start gap-2.5 bg-primary/5 border border-primary/20 rounded-xl p-3.5">
            <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-foreground mb-0.5">
                What happens next?
              </p>
              <p className="text-xs text-muted-foreground">
                Your request will be sent to{" "}
                <strong className="text-foreground">
                  {CURRENT_USER_MANAGER}
                </strong>{" "}
                for approval. You'll receive a notification once reviewed. Leave
                is subject to team availability.
              </p>
            </div>
          </div>
        </div>

        {/* ── Right: Calendar preview + submitter info ── */}
        <div className="space-y-3">
          <CalendarPreview startDate={startDate} endDate={endDate} />

          {CURRENT_USER && (
            <div className="bg-card border border-border rounded-2xl p-3.5 shadow-card">
              <p className="text-xs text-muted-foreground mb-2 font-medium">
                Submitting as
              </p>
              <div className="flex items-center gap-2.5">
                <img
                  src={CURRENT_USER.avatar}
                  alt={CURRENT_USER.name}
                  className="w-8 h-8 rounded-full"
                />
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-foreground truncate">
                    {CURRENT_USER.name}
                  </p>
                  <p className="text-[10px] text-muted-foreground truncate">
                    {CURRENT_USER.designation}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Quick actions */}
          <div className="bg-card border border-border rounded-2xl p-3.5 shadow-card space-y-2">
            <p className="text-xs text-muted-foreground font-medium">
              Quick links
            </p>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="w-full justify-start text-xs h-8 rounded-lg"
              onClick={() => navigate({ to: "/attendance" })}
              data-ocid="attendance_request.view_history_button"
            >
              <CalendarDays className="w-3.5 h-3.5 mr-2" />
              View attendance history
            </Button>
          </div>
        </div>
      </div>
    </FormPage>
  );
}
