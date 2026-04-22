import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UIState {
  sidebarCollapsed: boolean;
  mobileOpen: boolean;
  theme: "light" | "dark";
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  toggleMobileSidebar: () => void;
  openMobileSidebar: () => void;
  closeMobileSidebar: () => void;
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      sidebarCollapsed: false,
      mobileOpen: false,
      theme: "light",
      toggleSidebar: () =>
        set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
      toggleMobileSidebar: () =>
        set((state) => ({ mobileOpen: !state.mobileOpen })),
      openMobileSidebar: () => set({ mobileOpen: true }),
      closeMobileSidebar: () => set({ mobileOpen: false }),
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "fincore-ui",
      partialize: (state) => ({
        sidebarCollapsed: state.sidebarCollapsed,
        theme: state.theme,
      }),
    },
  ),
);
