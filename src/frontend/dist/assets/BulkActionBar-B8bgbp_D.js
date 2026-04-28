import { j as jsxRuntimeExports, A as AnimatePresence, m as motion, q as Badge, B as Button, X } from "./index-CgV9Taym.js";
import { D as Download } from "./download-CT_NJYb_.js";
import { T as Trash2 } from "./trash-2-D2vYGX4E.js";
function BulkActionBar({
  count,
  onExport,
  onDelete,
  onDeselect
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { y: 80, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 80, opacity: 0 },
      transition: { type: "spring", stiffness: 400, damping: 35 },
      "data-ocid": "bulk_action_bar",
      className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[min(90vw,36rem)]",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass shadow-elevated rounded-2xl px-3 sm:px-4 py-3 flex items-center gap-2 sm:gap-3 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Badge,
          {
            variant: "secondary",
            className: "shrink-0 font-semibold text-xs",
            "data-ocid": "bulk_action_bar.count",
            children: [
              count,
              " selected"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: onExport,
              className: "h-8 rounded-xl gap-1.5 text-xs",
              "data-ocid": "bulk_action_bar.export_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden xs:inline", children: "Export" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "destructive",
              size: "sm",
              onClick: onDelete,
              className: "h-8 rounded-xl gap-1.5 text-xs",
              "data-ocid": "bulk_action_bar.delete_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden xs:inline", children: "Delete" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "icon",
              onClick: onDeselect,
              className: "h-8 w-8 rounded-xl",
              "aria-label": "Deselect all",
              "data-ocid": "bulk_action_bar.deselect_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
            }
          )
        ] })
      ] })
    },
    "bulk-action-bar"
  ) });
}
export {
  BulkActionBar as B
};
