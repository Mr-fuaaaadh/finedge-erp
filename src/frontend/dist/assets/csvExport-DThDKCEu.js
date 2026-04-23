import { b as createLucideIcon, j as jsxRuntimeExports, l as ChevronRight, f as cn } from "./index--w3DYRFQ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode);
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
function formatCSVValue(value) {
  if (value === null || value === void 0) return "";
  if (value instanceof Date) return value.toISOString();
  if (typeof value === "number") return value.toString();
  if (typeof value === "boolean") return value ? "true" : "false";
  if (typeof value === "object") return JSON.stringify(value);
  const str = String(value);
  if (str.includes('"') || str.includes(",") || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}
function exportToCSV(data, filename) {
  if (!data || data.length === 0) return;
  const headers = Object.keys(data[0]);
  const csvRows = [];
  csvRows.push(headers.map((h) => formatCSVValue(h)).join(","));
  for (const row of data) {
    csvRows.push(headers.map((h) => formatCSVValue(row[h])).join(","));
  }
  const csvString = csvRows.join("\n");
  const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute(
    "download",
    filename.endsWith(".csv") ? filename : `${filename}.csv`
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
export {
  Download as D,
  PageHeader as P,
  exportToCSV as e
};
