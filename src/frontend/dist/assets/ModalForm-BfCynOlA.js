import { b as createLucideIcon, j as jsxRuntimeExports, m as motion, B as Button, f as cn } from "./index--w3DYRFQ.js";
import { D as Dialog, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogDescription, f as DialogFooter } from "./dialog-BKDxYpuf.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ]
];
const Inbox = createLucideIcon("inbox", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode);
function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  action,
  className,
  "data-ocid": dataOcid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3 },
      "data-ocid": dataOcid,
      className: cn(
        "flex flex-col items-center justify-center py-16 px-4 text-center",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-muted/60 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-7 h-7 text-muted-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-display font-semibold text-foreground mb-1", children: title }),
        description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground max-w-xs", children: description }),
        action && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            onClick: action.onClick,
            className: "mt-4 rounded-xl",
            "data-ocid": `${dataOcid}.action_button`,
            children: action.label
          }
        )
      ]
    }
  );
}
function ModalForm({
  open,
  onOpenChange,
  title,
  description,
  children,
  onSubmit,
  onCancel,
  submitLabel = "Save",
  cancelLabel = "Cancel",
  loading = false,
  destructive = false,
  "data-ocid": dataOcid
}) {
  const handleCancel = () => {
    onCancel == null ? void 0 : onCancel();
    onOpenChange(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      "data-ocid": dataOcid ? `${dataOcid}.dialog` : "modal.dialog",
      className: "rounded-2xl w-[calc(100vw-2rem)] max-w-lg mx-auto max-h-[90dvh] flex flex-col overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display text-base sm:text-lg", children: title }),
          description && /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-xs sm:text-sm text-muted-foreground", children: description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto py-2 pr-1 scrollbar-thin", children }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "shrink-0 flex-col-reverse sm:flex-row gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              onClick: handleCancel,
              disabled: loading,
              className: "w-full sm:w-auto",
              "data-ocid": dataOcid ? `${dataOcid}.cancel_button` : "modal.cancel_button",
              children: cancelLabel
            }
          ),
          onSubmit && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: destructive ? "destructive" : "default",
              onClick: onSubmit,
              disabled: loading,
              className: "w-full sm:w-auto",
              "data-ocid": dataOcid ? `${dataOcid}.submit_button` : "modal.submit_button",
              children: [
                loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3.5 h-3.5 mr-1.5 animate-spin" }),
                submitLabel
              ]
            }
          )
        ] })
      ]
    }
  ) });
}
export {
  EmptyState as E,
  LoaderCircle as L,
  ModalForm as M,
  Plus as P
};
