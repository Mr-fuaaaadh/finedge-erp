import { cn } from "@/lib/utils";
import { useNavigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type React from "react";
import { Button } from "../ui/button";
import { Breadcrumb, type BreadcrumbItem } from "./Breadcrumb";

interface FormPageProps {
  /** Breadcrumb path items */
  breadcrumbs: BreadcrumbItem[];
  /** Form page title */
  title: string;
  /** Optional subtitle / description */
  description?: string;
  /** Back navigation path; if omitted uses router history */
  backTo?: string;
  /** Label for back button */
  backLabel?: string;
  /** Form content */
  children: React.ReactNode;
  /** Submit handler — called when primary action is triggered */
  onSubmit: (e: React.FormEvent) => void;
  /** Whether the form is processing a submission */
  isSubmitting?: boolean;
  /** Label for submit button */
  submitLabel?: string;
  /** Called when cancel is clicked */
  onCancel?: () => void;
  /** Extra actions rendered beside submit/cancel */
  extraActions?: React.ReactNode;
  /** Additional className on the inner form container */
  className?: string;
  /** data-ocid prefix for deterministic markers */
  ocidPrefix?: string;
}

/**
 * Full-page form wrapper used by all CRUD form pages.
 * Provides: breadcrumb, back button, title, responsive max-w-2xl container,
 * and a sticky action footer on mobile.
 */
export function FormPage({
  breadcrumbs,
  title,
  description,
  backTo,
  backLabel = "Back",
  children,
  onSubmit,
  isSubmitting = false,
  submitLabel = "Save",
  onCancel,
  extraActions,
  className,
  ocidPrefix = "form",
}: FormPageProps) {
  const navigate = useNavigate();

  function handleBack() {
    if (backTo) {
      navigate({ to: backTo });
    } else {
      history.back();
    }
  }

  function handleCancel() {
    if (onCancel) {
      onCancel();
    } else {
      handleBack();
    }
  }

  return (
    <div className="min-h-full flex flex-col" data-ocid={`${ocidPrefix}.page`}>
      {/* ─── Page header ──────────────────────────────────────────────── */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-2xl mx-auto w-full px-4 sm:px-6 py-3 sm:py-4">
          {/* Breadcrumb */}
          <Breadcrumb items={breadcrumbs} className="mb-2" />

          {/* Back + title row */}
          <div className="flex items-start gap-3">
            <button
              type="button"
              onClick={handleBack}
              data-ocid={`${ocidPrefix}.back_button`}
              aria-label={backLabel}
              className="flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors mt-0.5 shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="min-w-0 flex-1">
              <h1 className="text-lg sm:text-xl font-display font-bold text-foreground leading-tight">
                {title}
              </h1>
              {description && (
                <p className="text-sm text-muted-foreground mt-0.5 leading-snug">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Form body ────────────────────────────────────────────────── */}
      <form
        onSubmit={onSubmit}
        className={cn("flex-1 flex flex-col", className)}
        noValidate
      >
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-2xl mx-auto w-full px-4 sm:px-6 py-6 space-y-6">
            {children}
          </div>
        </div>

        {/* ─── Sticky action footer ────────────────────────────────── */}
        <div className="bg-card border-t border-border">
          <div className="max-w-2xl mx-auto w-full px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-3 justify-end flex-wrap">
              {extraActions}
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                disabled={isSubmitting}
                data-ocid={`${ocidPrefix}.cancel_button`}
                className="min-w-[80px]"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                data-ocid={`${ocidPrefix}.submit_button`}
                className="min-w-[100px]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Saving…
                  </span>
                ) : (
                  submitLabel
                )}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
