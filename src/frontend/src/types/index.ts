// ─── Enums / Union Types ──────────────────────────────────────────────────────

export type Role = "admin" | "branch_manager" | "staff" | "finance_manager";

export type Department =
  | "Sales"
  | "Finance"
  | "Operations"
  | "HR"
  | "Marketing"
  | "IT";

export type LeadStatus = "New" | "In Progress" | "Converted" | "Rejected";

export type LeadSource =
  | "Website"
  | "Referral"
  | "Cold Call"
  | "Social Media"
  | "Email Campaign"
  | "Walk-in";

export type TaskStatus = "Todo" | "In Progress" | "Review" | "Done";
export type TaskPriority = "High" | "Medium" | "Low";

export type AttendanceStatus =
  | "Present"
  | "Absent"
  | "Late"
  | "Half Day"
  | "Leave";

export type BranchStatus = "Active" | "Inactive" | "Suspended";
export type UserStatus = "Active" | "Inactive" | "On Leave";

// ─── Core Entities ────────────────────────────────────────────────────────────

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: Role;
  department: Department;
  branchId: string;
  branchName: string;
  designation: string;
  avatar: string;
  status: UserStatus;
  joinDate: string;
  performanceScore: number;
  salary: number;
}

export interface Branch {
  id: string;
  name: string;
  code: string;
  city: string;
  state: string;
  address: string;
  managerId: string;
  managerName: string;
  staffCount: number;
  status: BranchStatus;
  createdAt: string;
  phone: string;
  email: string;
  revenue: number;
  targetRevenue: number;
  leadsConverted: number;
  performance: number;
  rank: number;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  source: LeadSource;
  status: LeadStatus;
  assignedTo: string;
  assignedToId: string;
  branchId: string;
  branchName: string;
  value: number;
  createdAt: string;
  updatedAt: string;
  notes: string;
  activities: Activity[];
  followUpDate: string | null;
  product: string;
}

export interface Activity {
  id: string;
  type: "call" | "email" | "meeting" | "note" | "status_change";
  title: string;
  description: string;
  createdAt: string;
  createdBy: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignedTo: string;
  assignedToId: string;
  assignedBy: string;
  branchId: string;
  dueDate: string;
  createdAt: string;
  completedAt: string | null;
  progress: number;
  tags: string[];
  comments: TaskComment[];
}

export interface TaskComment {
  id: string;
  author: string;
  text: string;
  createdAt: string;
}

export interface AttendanceRecord {
  id: string;
  userId: string;
  userName: string;
  branchId: string;
  date: string;
  checkIn: string | null;
  checkOut: string | null;
  status: AttendanceStatus;
  workHours: number;
  overtime: number;
  notes: string;
}

export interface FinanceRecord {
  id: string;
  month: string;
  year: number;
  branchId: string;
  branchName: string;
  revenue: number;
  expenses: number;
  profit: number;
  loanDisbursed: number;
  loanRepaid: number;
  investmentIncome: number;
  operationalCost: number;
}

export interface MonthlyFinance {
  month: string;
  revenue: number;
  expenses: number;
  profit: number;
  loanDisbursed: number;
}

export interface PerformanceMetric {
  userId: string;
  userName: string;
  branchId: string;
  branchName: string;
  role: Role;
  taskCompletion: number;
  targetAchievement: number;
  attendanceRate: number;
  leadConversion: number;
  productivityScore: number;
  rank: number;
  trend: "up" | "down" | "stable";
  monthlyScores: number[];
}

export interface BranchPerformance {
  branchId: string;
  branchName: string;
  revenue: number;
  targetRevenue: number;
  staffCount: number;
  leadsConverted: number;
  taskCompletion: number;
  score: number;
  rank: number;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
  createdAt: string;
}

export interface KPIData {
  label: string;
  value: number | string;
  change: number;
  trend: "up" | "down" | "stable";
  target?: number;
  unit?: string;
  sparkline?: number[];
}

// ─── Enterprise Features ──────────────────────────────────────────────────────

export type AuditAction =
  | "CREATE"
  | "UPDATE"
  | "DELETE"
  | "LOGIN"
  | "LOGOUT"
  | "EXPORT"
  | "VIEW";

export type AuditResource =
  | "Branch"
  | "Staff"
  | "Lead"
  | "Task"
  | "Attendance"
  | "Finance"
  | "Report";

export interface AuditLog {
  id: string;
  timestamp: Date;
  userId: string;
  userName: string;
  userRole: Role;
  action: AuditAction;
  resource: AuditResource;
  resourceId: string;
  details: string;
  ipAddress: string;
}

export interface FilterPreset {
  id: string;
  name: string;
  filters: Record<string, unknown>;
  createdAt: Date;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: "info" | "warning" | "error" | "success";
  timestamp: Date;
  read: boolean;
  link: string | undefined;
}
