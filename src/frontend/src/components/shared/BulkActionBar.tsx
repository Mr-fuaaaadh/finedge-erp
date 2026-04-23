import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Trash2, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface BulkActionBarProps {
  count: number;
  onExport: () => void;
  onDelete: () => void;
  onDeselect: () => void;
}

export function BulkActionBar({
  count,
  onExport,
  onDelete,
  onDeselect,
}: BulkActionBarProps) {
  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.div
          key="bulk-action-bar"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
          data-ocid="bulk_action_bar"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[min(90vw,36rem)]"
        >
          <div className="glass shadow-elevated rounded-2xl px-3 sm:px-4 py-3 flex items-center gap-2 sm:gap-3 flex-wrap">
            {/* Selection count */}
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <Badge
                variant="secondary"
                className="shrink-0 font-semibold text-xs"
                data-ocid="bulk_action_bar.count"
              >
                {count} selected
              </Badge>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1.5 shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={onExport}
                className="h-8 rounded-xl gap-1.5 text-xs"
                data-ocid="bulk_action_bar.export_button"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Export</span>
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={onDelete}
                className="h-8 rounded-xl gap-1.5 text-xs"
                data-ocid="bulk_action_bar.delete_button"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Delete</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={onDeselect}
                className="h-8 w-8 rounded-xl"
                aria-label="Deselect all"
                data-ocid="bulk_action_bar.deselect_button"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
