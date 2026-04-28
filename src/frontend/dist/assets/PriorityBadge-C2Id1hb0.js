import { j as jsxRuntimeExports, h as cn } from "./index-CgV9Taym.js";
import { M as Minus } from "./minus-D6KT2NO-.js";
import { T as TriangleAlert } from "./triangle-alert-t2GMGPuS.js";
import { Z as Zap } from "./zap-D7uWetWS.js";
const priorityConfig = {
  High: {
    label: "High",
    className: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    Icon: Zap
  },
  Medium: {
    label: "Medium",
    className: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    Icon: TriangleAlert
  },
  Low: {
    label: "Low",
    className: "bg-muted text-muted-foreground",
    Icon: Minus
  }
};
function PriorityBadge({ priority, className }) {
  const { label, className: cls, Icon } = priorityConfig[priority];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-semibold",
        cls,
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-2.5 h-2.5" }),
        label
      ]
    }
  );
}
export {
  PriorityBadge as P
};
