import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  Bookmark,
  BookmarkCheck,
  ChevronDown,
  RotateCcw,
  SlidersHorizontal,
  Trash2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { FilterPreset } from "../../types";

// ─── Types ────────────────────────────────────────────────────────────────────

export type FilterFieldType = "text" | "select" | "daterange";

export interface FilterField {
  key: string;
  label: string;
  type: FilterFieldType;
  placeholder?: string;
  options?: { label: string; value: string }[];
}

export type FilterValues = Record<
  string,
  string | { from: string; to: string } | undefined
>;

interface FilterPanelProps {
  filters: FilterField[];
  presetKey: string; // localStorage namespace
  onFilterChange: (values: FilterValues) => void;
  className?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const STORAGE_KEY_PREFIX = "finedge_filter_presets_";

function loadPresets(presetKey: string): FilterPreset[] {
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${presetKey}`);
    if (!raw) return [];
    return JSON.parse(raw) as FilterPreset[];
  } catch {
    return [];
  }
}

function savePresets(presetKey: string, presets: FilterPreset[]): void {
  localStorage.setItem(
    `${STORAGE_KEY_PREFIX}${presetKey}`,
    JSON.stringify(presets),
  );
}

function hasActiveFilters(values: FilterValues): boolean {
  return Object.values(values).some((v) => {
    if (!v) return false;
    if (typeof v === "string") return v.trim() !== "";
    return v.from !== "" || v.to !== "";
  });
}

// ─── Component ────────────────────────────────────────────────────────────────

export function FilterPanel({
  filters,
  presetKey,
  onFilterChange,
  className,
}: FilterPanelProps) {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<FilterValues>({});
  const [presets, setPresets] = useState<FilterPreset[]>(() =>
    loadPresets(presetKey),
  );
  const [presetName, setPresetName] = useState("");
  const [saveOpen, setSaveOpen] = useState(false);
  const [loadOpen, setLoadOpen] = useState(false);
  const onFilterChangeRef = useRef(onFilterChange);
  onFilterChangeRef.current = onFilterChange;

  const activeCount = Object.values(values).filter((v) => {
    if (!v) return false;
    if (typeof v === "string") return v.trim() !== "";
    return v.from !== "" || v.to !== "";
  }).length;

  const handleChange = useCallback(
    (key: string, value: string | { from: string; to: string } | undefined) => {
      setValues((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const handleApply = () => {
    onFilterChangeRef.current(values);
    setOpen(false);
  };

  const handleReset = () => {
    setValues({});
    onFilterChangeRef.current({});
    setOpen(false);
  };

  const handleSavePreset = () => {
    if (!presetName.trim()) return;
    const newPreset: FilterPreset = {
      id: `preset_${Date.now()}`,
      name: presetName.trim(),
      filters: values as Record<string, unknown>,
      createdAt: new Date(),
    };
    const updated = [...presets, newPreset];
    setPresets(updated);
    savePresets(presetKey, updated);
    setPresetName("");
    setSaveOpen(false);
  };

  const handleLoadPreset = (preset: FilterPreset) => {
    const loaded = preset.filters as FilterValues;
    setValues(loaded);
    onFilterChangeRef.current(loaded);
    setLoadOpen(false);
    setOpen(false);
  };

  const handleDeletePreset = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = presets.filter((p) => p.id !== id);
    setPresets(updated);
    savePresets(presetKey, updated);
  };

  // Sync presets from localStorage when panel opens
  useEffect(() => {
    if (open) {
      setPresets(loadPresets(presetKey));
    }
  }, [open, presetKey]);

  return (
    <div className={cn("relative", className)}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen((o) => !o)}
        data-ocid="filter_panel.toggle"
        className="gap-2 h-9 rounded-xl text-sm"
      >
        <SlidersHorizontal className="w-3.5 h-3.5" />
        Filters
        {activeCount > 0 && (
          <Badge
            variant="secondary"
            className="ml-1 h-4 min-w-[1rem] px-1 text-[10px] font-semibold"
          >
            {activeCount}
          </Badge>
        )}
        <ChevronDown
          className={cn(
            "w-3 h-3 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="filter-panel"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            data-ocid="filter_panel.panel"
            className={cn(
              "absolute left-0 top-full mt-2 z-50 w-[min(90vw,26rem)]",
              "bg-card border border-border rounded-2xl shadow-elevated p-4 space-y-4",
            )}
          >
            {/* Header row */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground">
                Advanced Filters
              </span>
              <div className="flex items-center gap-1">
                {/* Load preset */}
                <Popover open={loadOpen} onOpenChange={setLoadOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-7 h-7"
                      aria-label="Load preset"
                      data-ocid="filter_panel.load_preset_button"
                      disabled={presets.length === 0}
                    >
                      <BookmarkCheck className="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    align="end"
                    className="w-60 p-2 rounded-xl"
                    data-ocid="filter_panel.load_preset_popover"
                  >
                    <p className="text-xs font-semibold text-muted-foreground px-2 py-1 uppercase tracking-wide">
                      Saved Presets
                    </p>
                    {presets.map((preset) => (
                      <div
                        key={preset.id}
                        className="flex items-center justify-between rounded-lg hover:bg-muted/40 transition-smooth px-2 py-1.5 group"
                      >
                        <button
                          type="button"
                          className="flex-1 text-left text-sm text-foreground truncate"
                          onClick={() => handleLoadPreset(preset)}
                          data-ocid={`filter_panel.preset.${preset.id}`}
                        >
                          {preset.name}
                        </button>
                        <button
                          type="button"
                          aria-label={`Delete preset ${preset.name}`}
                          onClick={(e) => handleDeletePreset(preset.id, e)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ")
                              handleDeletePreset(
                                preset.id,
                                e as unknown as React.MouseEvent,
                              );
                          }}
                          className="opacity-0 group-hover:opacity-100 transition-smooth p-0.5 rounded text-destructive hover:bg-destructive/10 shrink-0"
                          data-ocid={`filter_panel.delete_preset.${preset.id}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </PopoverContent>
                </Popover>

                {/* Save preset */}
                <Popover open={saveOpen} onOpenChange={setSaveOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-7 h-7"
                      aria-label="Save preset"
                      data-ocid="filter_panel.save_preset_button"
                      disabled={!hasActiveFilters(values)}
                    >
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    align="end"
                    className="w-56 p-3 rounded-xl space-y-2"
                    data-ocid="filter_panel.save_preset_popover"
                  >
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Save Preset
                    </p>
                    <Input
                      placeholder="Preset name…"
                      value={presetName}
                      onChange={(e) => setPresetName(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSavePreset()}
                      className="h-8 rounded-lg text-sm"
                      data-ocid="filter_panel.preset_name_input"
                    />
                    <Button
                      size="sm"
                      className="w-full h-8 rounded-lg text-xs"
                      onClick={handleSavePreset}
                      disabled={!presetName.trim()}
                      data-ocid="filter_panel.save_preset_confirm_button"
                    >
                      Save
                    </Button>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Filter fields */}
            <div className="space-y-3">
              {filters.map((field) => (
                <div key={field.key} className="space-y-1">
                  <Label
                    htmlFor={`filter-${field.key}`}
                    className="text-xs font-medium text-muted-foreground"
                  >
                    {field.label}
                  </Label>

                  {field.type === "text" && (
                    <Input
                      id={`filter-${field.key}`}
                      placeholder={
                        field.placeholder ?? `Search ${field.label}…`
                      }
                      value={(values[field.key] as string) ?? ""}
                      onChange={(e) => handleChange(field.key, e.target.value)}
                      className="h-8 rounded-lg text-sm"
                      data-ocid={`filter_panel.${field.key}_input`}
                    />
                  )}

                  {field.type === "select" && field.options && (
                    <Select
                      value={(values[field.key] as string) ?? ""}
                      onValueChange={(v) =>
                        handleChange(field.key, v === "__all__" ? undefined : v)
                      }
                    >
                      <SelectTrigger
                        id={`filter-${field.key}`}
                        className="h-8 rounded-lg text-sm"
                        data-ocid={`filter_panel.${field.key}_select`}
                      >
                        <SelectValue
                          placeholder={
                            field.placeholder ?? `All ${field.label}s`
                          }
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="__all__">
                          All {field.label}s
                        </SelectItem>
                        {field.options.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}

                  {field.type === "daterange" && (
                    <div className="flex items-center gap-1.5">
                      <Input
                        type="date"
                        value={
                          (values[field.key] as { from: string; to: string })
                            ?.from ?? ""
                        }
                        onChange={(e) =>
                          handleChange(field.key, {
                            from: e.target.value,
                            to:
                              (
                                values[field.key] as {
                                  from: string;
                                  to: string;
                                }
                              )?.to ?? "",
                          })
                        }
                        className="h-8 rounded-lg text-xs flex-1"
                        data-ocid={`filter_panel.${field.key}_from`}
                        aria-label={`${field.label} from`}
                      />
                      <span className="text-xs text-muted-foreground shrink-0">
                        to
                      </span>
                      <Input
                        type="date"
                        value={
                          (values[field.key] as { from: string; to: string })
                            ?.to ?? ""
                        }
                        onChange={(e) =>
                          handleChange(field.key, {
                            from:
                              (
                                values[field.key] as {
                                  from: string;
                                  to: string;
                                }
                              )?.from ?? "",
                            to: e.target.value,
                          })
                        }
                        className="h-8 rounded-lg text-xs flex-1"
                        data-ocid={`filter_panel.${field.key}_to`}
                        aria-label={`${field.label} to`}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-1 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="h-8 rounded-lg text-xs gap-1.5"
                data-ocid="filter_panel.reset_button"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </Button>
              <Button
                size="sm"
                onClick={handleApply}
                className="h-8 rounded-lg text-xs flex-1"
                data-ocid="filter_panel.apply_button"
              >
                Apply Filters
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
