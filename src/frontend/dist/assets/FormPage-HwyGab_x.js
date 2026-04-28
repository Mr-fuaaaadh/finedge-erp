import { e as createLucideIcon, u as useNavigate, j as jsxRuntimeExports, B as Button, h as cn } from "./index-CgV9Taym.js";
import { B as Breadcrumb } from "./Breadcrumb-Vnwm27w7.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode);
function FormPage({
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
  ocidPrefix = "form"
}) {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-full flex flex-col", "data-ocid": `${ocidPrefix}.page`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border sticky top-0 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto w-full px-4 sm:px-6 py-3 sm:py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: breadcrumbs, className: "mb-2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleBack,
            "data-ocid": `${ocidPrefix}.back_button`,
            "aria-label": backLabel,
            className: "flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors mt-0.5 shrink-0",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg sm:text-xl font-display font-bold text-foreground leading-tight", children: title }),
          description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5 leading-snug", children: description })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        onSubmit,
        className: cn("flex-1 flex flex-col", className),
        noValidate: true,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto w-full px-4 sm:px-6 py-6 space-y-6", children }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto w-full px-4 sm:px-6 py-3 sm:py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 justify-end flex-wrap", children: [
            extraActions,
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: handleCancel,
                disabled: isSubmitting,
                "data-ocid": `${ocidPrefix}.cancel_button`,
                className: "min-w-[80px]",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                disabled: isSubmitting,
                "data-ocid": `${ocidPrefix}.submit_button`,
                className: "min-w-[100px]",
                children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" }),
                  "Saving…"
                ] }) : submitLabel
              }
            )
          ] }) }) })
        ]
      }
    )
  ] });
}
export {
  FormPage as F
};
