const statuses = [
  "Present",
  "Present",
  "Present",
  "Present",
  "Present",
  "Late",
  "Present",
  "Present",
  "Absent",
  "Present",
  "Present",
  "Present",
  "Present",
  "Half Day",
  "Present",
  "Present",
  "Present",
  "Late",
  "Present",
  "Present",
  "Leave",
  "Present",
  "Present",
  "Present",
  "Present",
  "Present",
  "Late",
  "Present",
  "Present",
  "Present"
];
const users = [
  { id: "u5", name: "Vijay Menon", branchId: "b1" },
  { id: "u6", name: "Kavita Singh", branchId: "b2" },
  { id: "u7", name: "Rohit Joshi", branchId: "b3" },
  { id: "u8", name: "Ananya Nair", branchId: "b1" },
  { id: "u9", name: "Deepak Gupta", branchId: "b4" },
  { id: "u10", name: "Meera Pillai", branchId: "b2" },
  { id: "u14", name: "Lakshmi Iyer", branchId: "b3" },
  { id: "u15", name: "Nikhil Bose", branchId: "b5" },
  { id: "u19", name: "Manish Dubey", branchId: "b7" },
  { id: "u20", name: "Riya Ghosh", branchId: "b7" }
];
function generateCheckIn(status) {
  if (status === "Absent" || status === "Leave") return null;
  if (status === "Late") return "10:15";
  if (status === "Half Day") return "09:05";
  return "09:02";
}
function generateCheckOut(status) {
  if (status === "Absent" || status === "Leave") return null;
  if (status === "Half Day") return "13:30";
  return "18:00";
}
function generateWorkHours(status) {
  if (status === "Absent" || status === "Leave") return 0;
  if (status === "Half Day") return 4.5;
  if (status === "Late") return 7.5;
  return 9;
}
function generateOvertime(status, i) {
  if (status !== "Present") return 0;
  return i % 7 === 0 ? 1.5 : i % 11 === 0 ? 2 : 0;
}
const months = ["2025-02", "2025-03", "2025-04"];
const mockAttendance = [];
let idCounter = 1;
for (const month of months) {
  const daysInMonth = month === "2025-02" ? 28 : 30;
  for (const user of users) {
    for (let d = 1; d <= daysInMonth; d++) {
      const dayOfWeek = (/* @__PURE__ */ new Date(
        `${month}-${String(d).padStart(2, "0")}`
      )).getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) continue;
      const statusIndex = (d - 1) % statuses.length;
      const status = statuses[statusIndex];
      mockAttendance.push({
        id: `att-${idCounter++}`,
        userId: user.id,
        userName: user.name,
        branchId: user.branchId,
        date: `${month}-${String(d).padStart(2, "0")}`,
        checkIn: generateCheckIn(status),
        checkOut: generateCheckOut(status),
        status,
        workHours: generateWorkHours(status),
        overtime: generateOvertime(status, d),
        notes: status === "Late" ? "Traffic delay reported" : status === "Leave" ? "Approved leave" : ""
      });
    }
  }
}
function getAttendanceByUser(userId) {
  return mockAttendance.filter((a) => a.userId === userId);
}
export {
  getAttendanceByUser as g,
  mockAttendance as m
};
