import { AnimatePresence, motion } from "motion/react";
import { useAuth } from "../../hooks/useAuth";
import type { Role } from "../../types";

const roles: { value: Role; label: string; color: string }[] = [
  {
    value: "admin",
    label: "Admin",
    color: "bg-primary text-primary-foreground",
  },
  {
    value: "branch_manager",
    label: "Branch Manager",
    color: "bg-secondary text-secondary-foreground",
  },
  { value: "staff", label: "Staff", color: "bg-accent text-accent-foreground" },
  {
    value: "finance_manager",
    label: "Finance Manager",
    color: "bg-destructive/80 text-destructive-foreground",
  },
];

export function RoleSwitcher() {
  const { role, setRole } = useAuth();

  return (
    <div data-ocid="role_switcher" className="fixed bottom-6 right-6 z-50">
      <div className="bg-card border border-border rounded-2xl shadow-elevated p-3 space-y-1.5 min-w-[180px]">
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider px-1 mb-2">
          Demo: Switch Role
        </p>
        {roles.map((r) => (
          <motion.button
            key={r.value}
            type="button"
            data-ocid={`role_switcher.${r.value}.button`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setRole(r.value)}
            className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-semibold transition-smooth ${
              role === r.value
                ? r.color
                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
            }`}
          >
            <AnimatePresence mode="wait">
              <span>{r.label}</span>
            </AnimatePresence>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
