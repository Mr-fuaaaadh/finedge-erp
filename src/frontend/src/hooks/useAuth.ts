import { useAuthStore } from "../store/authStore";
import type { Role } from "../types";

export function useAuth() {
  const { role, user, setRole } = useAuthStore();

  const isAdmin = role === "admin";
  const isBranchManager = role === "branch_manager";
  const isStaff = role === "staff";
  const isFinanceManager = role === "finance_manager";

  const hasPermission = (allowedRoles: Role[]): boolean =>
    allowedRoles.includes(role);

  return {
    role,
    user,
    setRole,
    isAdmin,
    isBranchManager,
    isStaff,
    isFinanceManager,
    hasPermission,
  };
}
