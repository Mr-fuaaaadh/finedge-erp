import { e as createLucideIcon, j as jsxRuntimeExports, m as motion, B as Button, h as cn } from "./index-CgV9Taym.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ]
];
const Inbox = createLucideIcon("inbox", __iconNode);
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
export {
  EmptyState as E
};
