import { b as createLucideIcon, j as jsxRuntimeExports, f as cn, m as motion, d as TrendingUp } from "./index--w3DYRFQ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = createLucideIcon("minus", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
];
const TrendingDown = createLucideIcon("trending-down", __iconNode);
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}
function StatCard({
  title,
  value,
  change,
  icon: Icon,
  iconColor = "text-primary",
  loading = false,
  prefix,
  suffix,
  "data-ocid": dataOcid
}) {
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card border border-border rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-3 sm:p-4 lg:p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-14" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-8 h-8 sm:w-10 sm:h-10 rounded-xl" })
    ] }) }) });
  }
  const trendColor = change === void 0 ? "text-muted-foreground" : change > 0 ? "text-green-600 dark:text-green-400" : change < 0 ? "text-red-500 dark:text-red-400" : "text-muted-foreground";
  const TrendIcon = change === void 0 ? Minus : change > 0 ? TrendingUp : change < 0 ? TrendingDown : Minus;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3 },
      "data-ocid": dataOcid,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card border border-border rounded-2xl hover:shadow-elevated transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-3 sm:p-4 lg:p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wide truncate", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xl sm:text-2xl font-display font-bold text-foreground", children: [
            prefix && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base sm:text-lg mr-0.5", children: prefix }),
            typeof value === "number" ? value.toLocaleString() : value,
            suffix && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm sm:text-base ml-0.5", children: suffix })
          ] }),
          change !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "flex items-center gap-1 mt-1 text-[10px] sm:text-xs font-medium",
                trendColor
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendIcon, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  change > 0 ? "+" : "",
                  change,
                  "%"
                ] })
              ]
            }
          )
        ] }),
        Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn(
              "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-muted/60 shrink-0",
              iconColor
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 sm:w-5 sm:h-5" })
          }
        )
      ] }) }) })
    }
  );
}
export {
  Card as C,
  Minus as M,
  StatCard as S,
  TrendingDown as T,
  Skeleton as a,
  CardHeader as b,
  CardContent as c
};
