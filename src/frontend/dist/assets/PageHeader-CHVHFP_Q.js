import { j as jsxRuntimeExports, n as ChevronRight, h as cn } from "./index-CgV9Taym.js";
function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  actions,
  className,
  "data-ocid": dataOcid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": dataOcid,
      className: cn(
        "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4 sm:mb-6",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          breadcrumbs && breadcrumbs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex items-center gap-1 mb-1.5 flex-wrap", children: breadcrumbs.map((crumb) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            crumb.label !== breadcrumbs[0].label && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3 text-muted-foreground" }),
            crumb.href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: crumb.href,
                className: "text-xs text-muted-foreground hover:text-foreground transition-smooth",
                children: crumb.label
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: crumb.label })
          ] }, crumb.label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg sm:text-xl font-display font-bold text-foreground leading-tight", children: title }),
          subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-muted-foreground mt-0.5 line-clamp-2", children: subtitle })
        ] }),
        actions && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 shrink-0 flex-wrap", children: actions })
      ]
    }
  );
}
export {
  PageHeader as P
};
