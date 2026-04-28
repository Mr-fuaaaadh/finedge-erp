import {
  Navigate,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Toaster } from "sonner";
import { Layout } from "./components/layout/Layout";
import { RoleSwitcher } from "./components/shared/RoleSwitcher";
import { useAuth } from "./hooks/useAuth";

// Lazy-loaded page modules — existing
const AdminDashboard = lazy(() => import("./pages/dashboards/AdminDashboard"));
const BranchDashboard = lazy(
  () => import("./pages/dashboards/BranchDashboard"),
);
const StaffDashboard = lazy(() => import("./pages/dashboards/StaffDashboard"));
const FinanceDashboard = lazy(
  () => import("./pages/dashboards/FinanceDashboard"),
);
const BranchesPage = lazy(() => import("./pages/BranchesPage"));
const StaffPage = lazy(() => import("./pages/StaffPage"));
const LeadsPage = lazy(() => import("./pages/LeadsPage"));
const TasksPage = lazy(() => import("./pages/TasksPage"));
const AttendancePage = lazy(() => import("./pages/AttendancePage"));
const FinancePage = lazy(() => import("./pages/FinancePage"));
const PerformancePage = lazy(() => import("./pages/PerformancePage"));
const AuditLogsPage = lazy(() => import("./pages/AuditLogsPage"));

// Lazy-loaded page modules — new form/detail pages
const NewLeadPage = lazy(() => import("./pages/leads/NewLeadPage"));
const LeadDetailPage = lazy(() => import("./pages/leads/LeadDetailPage"));
const EditLeadPage = lazy(() => import("./pages/leads/EditLeadPage"));
const NewStaffPage = lazy(() => import("./pages/staff/NewStaffPage"));
const StaffDetailPage = lazy(() => import("./pages/staff/StaffDetailPage"));
const EditStaffPage = lazy(() => import("./pages/staff/EditStaffPage"));
const NewBranchPage = lazy(() => import("./pages/branches/NewBranchPage"));
const BranchDetailPage = lazy(
  () => import("./pages/branches/BranchDetailPage"),
);
const EditBranchPage = lazy(() => import("./pages/branches/EditBranchPage"));
const NewTaskPage = lazy(() => import("./pages/tasks/NewTaskPage"));
const TaskDetailPage = lazy(() => import("./pages/tasks/TaskDetailPage"));
const EditTaskPage = lazy(() => import("./pages/tasks/EditTaskPage"));
const AttendanceRequestPage = lazy(
  () => import("./pages/attendance/AttendanceRequestPage"),
);
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));
const NotificationsPage = lazy(() => import("./pages/NotificationsPage"));

function PageSuspense({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

function DashboardRedirect() {
  const { role } = useAuth();
  const dest =
    role === "admin"
      ? "/dashboard/admin"
      : role === "branch_manager"
        ? "/dashboard/branch"
        : role === "finance_manager"
          ? "/dashboard/finance"
          : "/dashboard/staff";
  return <Navigate to={dest} />;
}

// ─── Root ─────────────────────────────────────────────────────────────────────
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <RoleSwitcher />
      <Toaster richColors position="top-right" />
    </>
  ),
});

// ─── Layout wrapper ───────────────────────────────────────────────────────────
const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "layout",
  component: Layout,
});

// ─── Login (outside layout) ───────────────────────────────────────────────────
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: () => (
    <PageSuspense>
      <LoginPage />
    </PageSuspense>
  ),
});

// ─── Root redirect ────────────────────────────────────────────────────────────
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Navigate to="/dashboard" />,
});

// ─── Dashboard routes ─────────────────────────────────────────────────────────
const dashboardIndexRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/dashboard",
  component: DashboardRedirect,
});
const adminDashRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/dashboard/admin",
  component: () => (
    <PageSuspense>
      <AdminDashboard />
    </PageSuspense>
  ),
});
const branchDashRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/dashboard/branch",
  component: () => (
    <PageSuspense>
      <BranchDashboard />
    </PageSuspense>
  ),
});
const staffDashRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/dashboard/staff",
  component: () => (
    <PageSuspense>
      <StaffDashboard />
    </PageSuspense>
  ),
});
const financeDashRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/dashboard/finance",
  component: () => (
    <PageSuspense>
      <FinanceDashboard />
    </PageSuspense>
  ),
});

// ─── Branches routes ──────────────────────────────────────────────────────────
const branchesRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/branches",
  component: () => (
    <PageSuspense>
      <BranchesPage />
    </PageSuspense>
  ),
});
const newBranchRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/branches/new",
  component: () => (
    <PageSuspense>
      <NewBranchPage />
    </PageSuspense>
  ),
});
const branchDetailRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/branches/$branchId",
  component: () => (
    <PageSuspense>
      <BranchDetailPage />
    </PageSuspense>
  ),
});
const editBranchRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/branches/$branchId/edit",
  component: () => (
    <PageSuspense>
      <EditBranchPage />
    </PageSuspense>
  ),
});

// ─── Staff routes ─────────────────────────────────────────────────────────────
const staffRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/staff",
  component: () => (
    <PageSuspense>
      <StaffPage />
    </PageSuspense>
  ),
});
const newStaffRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/staff/new",
  component: () => (
    <PageSuspense>
      <NewStaffPage />
    </PageSuspense>
  ),
});
const staffDetailRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/staff/$staffId",
  component: () => (
    <PageSuspense>
      <StaffDetailPage />
    </PageSuspense>
  ),
});
const editStaffRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/staff/$staffId/edit",
  component: () => (
    <PageSuspense>
      <EditStaffPage />
    </PageSuspense>
  ),
});

// ─── Leads routes ─────────────────────────────────────────────────────────────
const leadsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/leads",
  component: () => (
    <PageSuspense>
      <LeadsPage />
    </PageSuspense>
  ),
});
const newLeadRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/leads/new",
  component: () => (
    <PageSuspense>
      <NewLeadPage />
    </PageSuspense>
  ),
});
const leadDetailRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/leads/$leadId",
  component: () => (
    <PageSuspense>
      <LeadDetailPage />
    </PageSuspense>
  ),
});
const editLeadRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/leads/$leadId/edit",
  component: () => (
    <PageSuspense>
      <EditLeadPage />
    </PageSuspense>
  ),
});

// ─── Tasks routes ─────────────────────────────────────────────────────────────
const tasksRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/tasks",
  component: () => (
    <PageSuspense>
      <TasksPage />
    </PageSuspense>
  ),
});
const newTaskRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/tasks/new",
  component: () => (
    <PageSuspense>
      <NewTaskPage />
    </PageSuspense>
  ),
});
const taskDetailRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/tasks/$taskId",
  component: () => (
    <PageSuspense>
      <TaskDetailPage />
    </PageSuspense>
  ),
});
const editTaskRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/tasks/$taskId/edit",
  component: () => (
    <PageSuspense>
      <EditTaskPage />
    </PageSuspense>
  ),
});

// ─── Other module routes ──────────────────────────────────────────────────────
const attendanceRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/attendance",
  component: () => (
    <PageSuspense>
      <AttendancePage />
    </PageSuspense>
  ),
});
const attendanceRequestRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/attendance/request",
  component: () => (
    <PageSuspense>
      <AttendanceRequestPage />
    </PageSuspense>
  ),
});
const financeRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/finance",
  component: () => (
    <PageSuspense>
      <FinancePage />
    </PageSuspense>
  ),
});
const performanceRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/performance",
  component: () => (
    <PageSuspense>
      <PerformancePage />
    </PageSuspense>
  ),
});
const auditLogsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/audit-logs",
  component: () => (
    <PageSuspense>
      <AuditLogsPage />
    </PageSuspense>
  ),
});
const settingsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/settings",
  component: () => (
    <PageSuspense>
      <SettingsPage />
    </PageSuspense>
  ),
});
const notificationsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/notifications",
  component: () => (
    <PageSuspense>
      <NotificationsPage />
    </PageSuspense>
  ),
});

// ─── Route tree ───────────────────────────────────────────────────────────────
const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  layoutRoute.addChildren([
    dashboardIndexRoute,
    adminDashRoute,
    branchDashRoute,
    staffDashRoute,
    financeDashRoute,
    // Branches — specific routes before parameterised
    branchesRoute,
    newBranchRoute,
    branchDetailRoute,
    editBranchRoute,
    // Staff
    staffRoute,
    newStaffRoute,
    staffDetailRoute,
    editStaffRoute,
    // Leads
    leadsRoute,
    newLeadRoute,
    leadDetailRoute,
    editLeadRoute,
    // Tasks
    tasksRoute,
    newTaskRoute,
    taskDetailRoute,
    editTaskRoute,
    // Other
    attendanceRoute,
    attendanceRequestRoute,
    financeRoute,
    performanceRoute,
    auditLogsRoute,
    settingsRoute,
    notificationsRoute,
  ]),
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
