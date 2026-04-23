import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
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

function KanbanCardItem({
  card,
  colId,
  dragging,
  onDragStart,
  onDragEnd,
  dataOcid,
}: {
  card: KanbanCard;
  colId: string;
  dragging: { cardId: string; fromCol: string } | null;
  onDragStart: (cardId: string, fromCol: string) => void;
  onDragEnd: () => void;
  dataOcid?: string;
}) {
  return (
    <motion.div
      key={card.id}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.15 }}
      draggable
      onDragStart={() => onDragStart(card.id, colId)}
      onDragEnd={onDragEnd}
      data-ocid={dataOcid ?? `kanban.card.${card.id}`}
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
  );
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
  // Mobile accordion: track which columns are open (default all open)
  const [openCols, setOpenCols] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(columns.map((c) => [c.id, true])),
  );

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

  function toggleCol(colId: string) {
    setOpenCols((prev) => ({ ...prev, [colId]: !prev[colId] }));
  }

  return (
    <div data-ocid={dataOcid} className="w-full">
      {/* ── Mobile: vertical accordion (< md) ── */}
      <div className="flex flex-col gap-3 md:hidden">
        {columns.map((col) => {
          const isOpen = openCols[col.id] ?? true;
          const colOcid = `${dataOcid ?? "kanban"}.column.${col.id.toLowerCase().replace(/\s+/g, "_")}`;
          return (
            <Collapsible
              key={col.id}
              open={isOpen}
              onOpenChange={() => toggleCol(col.id)}
              data-ocid={colOcid}
              className={cn(
                "rounded-2xl border border-border bg-muted/30 transition-smooth overflow-hidden",
                overCol === col.id && "ring-2 ring-primary/40",
              )}
            >
              {/* Accordion header */}
              <CollapsibleTrigger
                className="w-full flex items-center justify-between px-4 py-3 border-b border-border hover:bg-muted/20 transition-colors"
                data-ocid={`${colOcid}.toggle`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: col.color }}
                  />
                  <span className="text-sm font-semibold text-foreground">
                    {col.label}
                  </span>
                  <Badge variant="secondary" className="text-xs">
                    {col.cards.length}
                  </Badge>
                </div>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-muted-foreground transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </CollapsibleTrigger>

              {/* Cards */}
              <CollapsibleContent>
                <div className="p-3 space-y-2">
                  <AnimatePresence>
                    {col.cards.map((card) => (
                      <KanbanCardItem
                        key={card.id}
                        card={card}
                        colId={col.id}
                        dragging={dragging}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        dataOcid={`kanban.card.${card.id}`}
                      />
                    ))}
                  </AnimatePresence>
                  {col.cards.length === 0 && (
                    <p className="text-xs text-muted-foreground text-center py-6">
                      No cards
                    </p>
                  )}
                </div>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </div>

      {/* ── Desktop: horizontal scroll (md+) ── */}
      <div className="hidden md:flex gap-4 overflow-x-auto pb-4">
        {columns.map((col) => {
          const colOcid = `${dataOcid ?? "kanban"}.column.${col.id.toLowerCase().replace(/\s+/g, "_")}`;
          return (
            <div
              key={col.id}
              data-ocid={colOcid}
              className={cn(
                "flex flex-col rounded-2xl border border-border bg-muted/30 transition-smooth",
                "min-w-[280px] flex-shrink-0",
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
                    <KanbanCardItem
                      key={card.id}
                      card={card}
                      colId={col.id}
                      dragging={dragging}
                      onDragStart={handleDragStart}
                      onDragEnd={handleDragEnd}
                      dataOcid={`kanban.card.${card.id}`}
                    />
                  ))}
                </AnimatePresence>
                {col.cards.length === 0 && (
                  <p className="text-xs text-muted-foreground text-center py-6">
                    Drop cards here
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
