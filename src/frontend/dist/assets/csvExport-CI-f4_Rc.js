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
  exportToCSV as e
};
