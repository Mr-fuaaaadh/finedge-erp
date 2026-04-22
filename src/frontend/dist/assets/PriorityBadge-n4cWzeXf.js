import { b as createLucideIcon, j as jsxRuntimeExports, f as cn } from "./index-BjKYYUic.js";
import { M as Minus } from "./StatCard-DFAq4Vlm.js";
import { Z as Zap } from "./zap-q_2Ro6um.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode);
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
