import { j as jsxRuntimeExports, n as ChevronRight, h as cn, L as Link } from "./index-CgV9Taym.js";
function Breadcrumb({ items, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "nav",
    {
      "aria-label": "Breadcrumb",
      className: cn("flex items-center gap-1 flex-wrap", className),
      "data-ocid": "breadcrumb",
      children: items.map((item, index) => {
        const isLast = index === items.length - 1;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
          index > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-muted-foreground shrink-0" }),
          isLast || !item.href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn(
                "text-sm font-medium",
                isLast ? "text-foreground" : "text-muted-foreground hover:text-foreground transition-colors"
              ),
              "aria-current": isLast ? "page" : void 0,
              children: item.label
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: item.href,
              "data-ocid": `breadcrumb.${item.label.toLowerCase().replace(/\s+/g, "_")}.link`,
              className: "text-sm font-medium text-muted-foreground hover:text-primary transition-colors",
              children: item.label
            }
          )
        ] }, item.label);
      })
    }
  );
}
export {
  Breadcrumb as B
};
