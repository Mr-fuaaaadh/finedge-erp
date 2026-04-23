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

// Lazy-loaded page modules
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

// Dashboard redirect based on role
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

// Root route
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <RoleSwitcher />
      <Toaster richColors position="top-right" />
    </>
  ),
});

// Layout route wrapper
const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "layout",
  component: Layout,
});

// Dashboard index → redirect
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

const branchesRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/branches",
  component: () => (
    <PageSuspense>
      <BranchesPage />
    </PageSuspense>
  ),
});

const staffRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/staff",
  component: () => (
    <PageSuspense>
      <StaffPage />
    </PageSuspense>
  ),
});

const leadsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/leads",
  component: () => (
    <PageSuspense>
      <LeadsPage />
    </PageSuspense>
  ),
});

const tasksRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/tasks",
  component: () => (
    <PageSuspense>
      <TasksPage />
    </PageSuspense>
  ),
});

const attendanceRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/attendance",
  component: () => (
    <PageSuspense>
      <AttendancePage />
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

// Root redirect
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Navigate to="/dashboard" />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  layoutRoute.addChildren([
    dashboardIndexRoute,
    adminDashRoute,
    branchDashRoute,
    staffDashRoute,
    financeDashRoute,
    branchesRoute,
    staffRoute,
    leadsRoute,
    tasksRoute,
    attendanceRoute,
    financeRoute,
    performanceRoute,
    auditLogsRoute,
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
