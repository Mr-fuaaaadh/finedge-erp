import { r as reactExports, j as jsxRuntimeExports, m as motion } from "./index-CgV9Taym.js";
import { C as Card, a as CardHeader, b as CardContent } from "./card-BIrGk5lN.js";
import { a as Skeleton } from "./StatCard-DkWGxI9F.js";
function ChartCard({
  title,
  subtitle,
  loading = false,
  children,
  periods,
  "data-ocid": dataOcid,
  action
}) {
  const [activePeriod, setActivePeriod] = reactExports.useState((periods == null ? void 0 : periods[0]) ?? "");
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card border border-border rounded-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-36" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-24 mt-1" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-[200px] sm:h-[240px] w-full rounded-xl" }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3 },
      "data-ocid": dataOcid,
      className: "h-full",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card border border-border rounded-2xl h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2 p-3 sm:p-4 lg:p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-display font-semibold text-foreground truncate", children: title }),
            subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 truncate", children: subtitle })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
            periods && periods.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex rounded-lg overflow-hidden border border-border", children: periods.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setActivePeriod(p),
                className: `px-2 py-1 text-[10px] sm:text-xs font-medium transition-smooth ${activePeriod === p ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"}`,
                children: p
              },
              p
            )) }),
            action
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-0 px-3 sm:px-4 lg:px-5 pb-3 sm:pb-4 lg:pb-5", children })
      ] })
    }
  );
}
export {
  ChartCard as C
};
