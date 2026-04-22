import { create } from "zustand";
import { persist } from "zustand/middleware";
import { mockUsers } from "../data/mockUsers";
import type { Role, User } from "../types";

interface AuthState {
  role: Role;
  user: User;
  setRole: (role: Role) => void;
}

const roleUserMap: Record<Role, User> = {
  admin: mockUsers[0], // Rajesh Kumar
  finance_manager: mockUsers[1], // Priya Sharma
  branch_manager: mockUsers[2], // Amit Patel
  staff: mockUsers[4], // Vijay Menon
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      role: "admin",
      user: roleUserMap.admin,
      setRole: (role: Role) => set({ role, user: roleUserMap[role] }),
    }),
    { name: "fincore-auth" },
  ),
);
