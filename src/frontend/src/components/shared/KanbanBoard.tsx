import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { TaskPriority } from "../../types";
import { PriorityBadge } from "./PriorityBadge";

export interface KanbanCard {
  id: string;
  title: string;
  priority: TaskPriority;
  assignee: string;
  dueDate: string;
  tags?: string[];
  progress?: number;
}

export interface KanbanColumn {
  id: string;
  label: string;
  color: string;
  cards: KanbanCard[];
}

interface KanbanBoardProps {
  columns: KanbanColumn[];
  onCardMove?: (cardId: string, fromCol: string, toCol: string) => void;
  "data-ocid"?: string;
}

export function KanbanBoard({
  columns,
  onCardMove,
  "data-ocid": dataOcid,
}: KanbanBoardProps) {
  const [dragging, setDragging] = useState<{
    cardId: string;
    fromCol: string;
  } | null>(null);
  const [overCol, setOverCol] = useState<string | null>(null);

  const handleDragStart = (cardId: string, fromCol: string) => {
    setDragging({ cardId, fromCol });
  };

  const handleDragOver = (e: React.DragEvent, colId: string) => {
    e.preventDefault();
    setOverCol(colId);
  };

  const handleDrop = (e: React.DragEvent, toCol: string) => {
    e.preventDefault();
    if (dragging && dragging.fromCol !== toCol) {
      onCardMove?.(dragging.cardId, dragging.fromCol, toCol);
    }
    setDragging(null);
    setOverCol(null);
  };

  const handleDragEnd = () => {
    setDragging(null);
    setOverCol(null);
  };

  return (
    <div data-ocid={dataOcid} className="w-full">
      {/* Mobile: vertical stack, Desktop: horizontal scroll */}
      <div className="flex flex-col gap-4 md:flex-row md:gap-4 md:overflow-x-auto md:pb-4">
        {columns.map((col) => (
          <div
            key={col.id}
            data-ocid={`${dataOcid}.column.${col.id.toLowerCase().replace(/\s+/g, "_")}`}
            className={cn(
              "flex flex-col rounded-2xl border border-border bg-muted/30 transition-smooth",
              "w-full md:min-w-[280px] md:max-w-[320px] md:shrink-0",
              overCol === col.id && "ring-2 ring-primary/40",
            )}
            style={{ minHeight: "200px" }}
            onDragOver={(e) => handleDragOver(e, col.id)}
            onDrop={(e) => handleDrop(e, col.id)}
          >
            {/* Column header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: col.color }}
                />
                <span className="text-sm font-semibold text-foreground">
                  {col.label}
                </span>
              </div>
              <Badge variant="secondary" className="text-xs">
                {col.cards.length}
              </Badge>
            </div>

            {/* Cards */}
            <div className="flex-1 p-3 space-y-2 overflow-y-auto">
              <AnimatePresence>
                {col.cards.map((card) => (
                  <motion.div
                    key={card.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    draggable
                    onDragStart={() => handleDragStart(card.id, col.id)}
                    onDragEnd={handleDragEnd}
                    data-ocid={`kanban.card.${card.id}`}
                    className={cn(
                      "bg-card rounded-xl border border-border p-3 cursor-grab active:cursor-grabbing shadow-xs hover:shadow-card transition-smooth",
                      "min-h-[64px]",
                      dragging?.cardId === card.id && "opacity-50",
                    )}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <p className="text-xs font-semibold text-foreground leading-tight line-clamp-2">
                        {card.title}
                      </p>
                      <PriorityBadge priority={card.priority} />
                    </div>
                    {card.progress !== undefined && (
                      <div className="mb-2">
                        <div className="h-1 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full rounded-full bg-primary transition-all"
                            style={{ width: `${card.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[10px] text-muted-foreground truncate">
                        {card.assignee}
                      </span>
                      <span className="text-[10px] text-muted-foreground whitespace-nowrap ml-2">
                        {new Date(card.dueDate).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {col.cards.length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-6">
                  Drop cards here
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
