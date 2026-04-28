import { e as createLucideIcon, r as reactExports, H as useControllableState, j as jsxRuntimeExports, K as Root2$1, M as useId, t as useComposedRefs, w as Primitive, z as composeEventHandlers, N as Anchor, x as Presence, O as Portal$1, Q as createPopperScope, V as hideOthers, W as ReactRemoveScroll, y as createContextScope, Y as createSlot, Z as useFocusGuards, _ as FocusScope, $ as DismissableLayer, a0 as Content, a1 as Arrow, h as cn, B as Button, q as Badge, J as ChevronDown, A as AnimatePresence, m as motion } from "./index-CgV9Taym.js";
import { I as Input } from "./input-CQX-6uHe.js";
import { L as Label } from "./label-DBZIDZNQ.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BSYwbXVq.js";
import { T as Trash2 } from "./trash-2-D2vYGX4E.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z", key: "169p4p" }],
  ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }]
];
const BookmarkCheck = createLucideIcon("bookmark-check", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]
];
const Bookmark = createLucideIcon("bookmark", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode);
var POPOVER_NAME = "Popover";
var [createPopoverContext] = createContextScope(POPOVER_NAME, [
  createPopperScope
]);
var usePopperScope = createPopperScope();
var [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME);
var Popover$1 = (props) => {
  const {
    __scopePopover,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = false
  } = props;
  const popperScope = usePopperScope(__scopePopover);
  const triggerRef = reactExports.useRef(null);
  const [hasCustomAnchor, setHasCustomAnchor] = reactExports.useState(false);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: POPOVER_NAME
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2$1, { ...popperScope, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    PopoverProvider,
    {
      scope: __scopePopover,
      contentId: useId(),
      triggerRef,
      open,
      onOpenChange: setOpen,
      onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      hasCustomAnchor,
      onCustomAnchorAdd: reactExports.useCallback(() => setHasCustomAnchor(true), []),
      onCustomAnchorRemove: reactExports.useCallback(() => setHasCustomAnchor(false), []),
      modal,
      children
    }
  ) });
};
Popover$1.displayName = POPOVER_NAME;
var ANCHOR_NAME = "PopoverAnchor";
var PopoverAnchor = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...anchorProps } = props;
    const context = usePopoverContext(ANCHOR_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
    reactExports.useEffect(() => {
      onCustomAnchorAdd();
      return () => onCustomAnchorRemove();
    }, [onCustomAnchorAdd, onCustomAnchorRemove]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Anchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
  }
);
PopoverAnchor.displayName = ANCHOR_NAME;
var TRIGGER_NAME = "PopoverTrigger";
var PopoverTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...triggerProps } = props;
    const context = usePopoverContext(TRIGGER_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    const trigger = /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
    return context.hasCustomAnchor ? trigger : /* @__PURE__ */ jsxRuntimeExports.jsx(Anchor, { asChild: true, ...popperScope, children: trigger });
  }
);
PopoverTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "PopoverPortal";
var [PortalProvider, usePortalContext] = createPopoverContext(PORTAL_NAME, {
  forceMount: void 0
});
var PopoverPortal = (props) => {
  const { __scopePopover, forceMount, children, container } = props;
  const context = usePopoverContext(PORTAL_NAME, __scopePopover);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortalProvider, { scope: __scopePopover, forceMount, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$1, { asChild: true, container, children }) }) });
};
PopoverPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "PopoverContent";
var PopoverContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopePopover);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }
);
PopoverContent$1.displayName = CONTENT_NAME;
var Slot = createSlot("PopoverContent.RemoveScroll");
var PopoverContentModal = reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const isRightClickOutsideRef = reactExports.useRef(false);
    reactExports.useEffect(() => {
      const content = contentRef.current;
      if (content) return hideOthers(content);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ReactRemoveScroll, { as: Slot, allowPinchZoom: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      PopoverContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          var _a;
          event.preventDefault();
          if (!isRightClickOutsideRef.current) (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
        }),
        onPointerDownOutside: composeEventHandlers(
          props.onPointerDownOutside,
          (event) => {
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            isRightClickOutsideRef.current = isRightClick;
          },
          { checkForDefaultPrevented: false }
        ),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault(),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }
);
var PopoverContentNonModal = reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    const hasInteractedOutsideRef = reactExports.useRef(false);
    const hasPointerDownOutsideRef = reactExports.useRef(false);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      PopoverContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          var _a, _b;
          (_a = props.onCloseAutoFocus) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) (_b = context.triggerRef.current) == null ? void 0 : _b.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          var _a, _b;
          (_a = props.onInteractOutside) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = (_b = context.triggerRef.current) == null ? void 0 : _b.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }
);
var PopoverContentImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopePopover,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      ...contentProps
    } = props;
    const context = usePopoverContext(CONTENT_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    useFocusGuards();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      FocusScope,
      {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          DismissableLayer,
          {
            asChild: true,
            disableOutsidePointerEvents,
            onInteractOutside,
            onEscapeKeyDown,
            onPointerDownOutside,
            onFocusOutside,
            onDismiss: () => context.onOpenChange(false),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Content,
              {
                "data-state": getState(context.open),
                role: "dialog",
                id: context.contentId,
                ...popperScope,
                ...contentProps,
                ref: forwardedRef,
                style: {
                  ...contentProps.style,
                  // re-namespace exposed content custom properties
                  ...{
                    "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                  }
                }
              }
            )
          }
        )
      }
    );
  }
);
var CLOSE_NAME = "PopoverClose";
var PopoverClose = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...closeProps } = props;
    const context = usePopoverContext(CLOSE_NAME, __scopePopover);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }
);
PopoverClose.displayName = CLOSE_NAME;
var ARROW_NAME = "PopoverArrow";
var PopoverArrow = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopePopover);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
PopoverArrow.displayName = ARROW_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var Root2 = Popover$1;
var Trigger = PopoverTrigger$1;
var Portal = PopoverPortal;
var Content2 = PopoverContent$1;
function Popover({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content2,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      ),
      ...props
    }
  ) });
}
const STORAGE_KEY_PREFIX = "finedge_filter_presets_";
function loadPresets(presetKey) {
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${presetKey}`);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}
function savePresets(presetKey, presets) {
  localStorage.setItem(
    `${STORAGE_KEY_PREFIX}${presetKey}`,
    JSON.stringify(presets)
  );
}
function hasActiveFilters(values) {
  return Object.values(values).some((v) => {
    if (!v) return false;
    if (typeof v === "string") return v.trim() !== "";
    return v.from !== "" || v.to !== "";
  });
}
function FilterPanel({
  filters,
  presetKey,
  onFilterChange,
  className
}) {
  const [open, setOpen] = reactExports.useState(false);
  const [values, setValues] = reactExports.useState({});
  const [presets, setPresets] = reactExports.useState(
    () => loadPresets(presetKey)
  );
  const [presetName, setPresetName] = reactExports.useState("");
  const [saveOpen, setSaveOpen] = reactExports.useState(false);
  const [loadOpen, setLoadOpen] = reactExports.useState(false);
  const onFilterChangeRef = reactExports.useRef(onFilterChange);
  onFilterChangeRef.current = onFilterChange;
  const activeCount = Object.values(values).filter((v) => {
    if (!v) return false;
    if (typeof v === "string") return v.trim() !== "";
    return v.from !== "" || v.to !== "";
  }).length;
  const handleChange = reactExports.useCallback(
    (key, value) => {
      setValues((prev) => ({ ...prev, [key]: value }));
    },
    []
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
    const newPreset = {
      id: `preset_${Date.now()}`,
      name: presetName.trim(),
      filters: values,
      createdAt: /* @__PURE__ */ new Date()
    };
    const updated = [...presets, newPreset];
    setPresets(updated);
    savePresets(presetKey, updated);
    setPresetName("");
    setSaveOpen(false);
  };
  const handleLoadPreset = (preset) => {
    const loaded = preset.filters;
    setValues(loaded);
    onFilterChangeRef.current(loaded);
    setLoadOpen(false);
    setOpen(false);
  };
  const handleDeletePreset = (id, e) => {
    e.stopPropagation();
    const updated = presets.filter((p) => p.id !== id);
    setPresets(updated);
    savePresets(presetKey, updated);
  };
  reactExports.useEffect(() => {
    if (open) {
      setPresets(loadPresets(presetKey));
    }
  }, [open, presetKey]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("relative", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "outline",
        size: "sm",
        onClick: () => setOpen((o) => !o),
        "data-ocid": "filter_panel.toggle",
        className: "gap-2 h-9 rounded-xl text-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "w-3.5 h-3.5" }),
          "Filters",
          activeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "secondary",
              className: "ml-1 h-4 min-w-[1rem] px-1 text-[10px] font-semibold",
              children: activeCount
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              className: cn(
                "w-3 h-3 transition-transform duration-200",
                open && "rotate-180"
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -8, scale: 0.97 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -8, scale: 0.97 },
        transition: { duration: 0.18, ease: "easeOut" },
        "data-ocid": "filter_panel.panel",
        className: cn(
          "absolute left-0 top-full mt-2 z-50 w-[min(90vw,26rem)]",
          "bg-card border border-border rounded-2xl shadow-elevated p-4 space-y-4"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: "Advanced Filters" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open: loadOpen, onOpenChange: setLoadOpen, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "w-7 h-7",
                    "aria-label": "Load preset",
                    "data-ocid": "filter_panel.load_preset_button",
                    disabled: presets.length === 0,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookmarkCheck, { className: "w-4 h-4" })
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  PopoverContent,
                  {
                    align: "end",
                    className: "w-60 p-2 rounded-xl",
                    "data-ocid": "filter_panel.load_preset_popover",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground px-2 py-1 uppercase tracking-wide", children: "Saved Presets" }),
                      presets.map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "flex items-center justify-between rounded-lg hover:bg-muted/40 transition-smooth px-2 py-1.5 group",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                className: "flex-1 text-left text-sm text-foreground truncate",
                                onClick: () => handleLoadPreset(preset),
                                "data-ocid": `filter_panel.preset.${preset.id}`,
                                children: preset.name
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                "aria-label": `Delete preset ${preset.name}`,
                                onClick: (e) => handleDeletePreset(preset.id, e),
                                onKeyDown: (e) => {
                                  if (e.key === "Enter" || e.key === " ")
                                    handleDeletePreset(
                                      preset.id,
                                      e
                                    );
                                },
                                className: "opacity-0 group-hover:opacity-100 transition-smooth p-0.5 rounded text-destructive hover:bg-destructive/10 shrink-0",
                                "data-ocid": `filter_panel.delete_preset.${preset.id}`,
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                              }
                            )
                          ]
                        },
                        preset.id
                      ))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open: saveOpen, onOpenChange: setSaveOpen, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "w-7 h-7",
                    "aria-label": "Save preset",
                    "data-ocid": "filter_panel.save_preset_button",
                    disabled: !hasActiveFilters(values),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { className: "w-4 h-4" })
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  PopoverContent,
                  {
                    align: "end",
                    className: "w-56 p-3 rounded-xl space-y-2",
                    "data-ocid": "filter_panel.save_preset_popover",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Save Preset" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          placeholder: "Preset name…",
                          value: presetName,
                          onChange: (e) => setPresetName(e.target.value),
                          onKeyDown: (e) => e.key === "Enter" && handleSavePreset(),
                          className: "h-8 rounded-lg text-sm",
                          "data-ocid": "filter_panel.preset_name_input"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "sm",
                          className: "w-full h-8 rounded-lg text-xs",
                          onClick: handleSavePreset,
                          disabled: !presetName.trim(),
                          "data-ocid": "filter_panel.save_preset_confirm_button",
                          children: "Save"
                        }
                      )
                    ]
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: filters.map((field) => {
            var _a, _b;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: `filter-${field.key}`,
                  className: "text-xs font-medium text-muted-foreground",
                  children: field.label
                }
              ),
              field.type === "text" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: `filter-${field.key}`,
                  placeholder: field.placeholder ?? `Search ${field.label}…`,
                  value: values[field.key] ?? "",
                  onChange: (e) => handleChange(field.key, e.target.value),
                  className: "h-8 rounded-lg text-sm",
                  "data-ocid": `filter_panel.${field.key}_input`
                }
              ),
              field.type === "select" && field.options && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: values[field.key] ?? "",
                  onValueChange: (v) => handleChange(field.key, v === "__all__" ? void 0 : v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        id: `filter-${field.key}`,
                        className: "h-8 rounded-lg text-sm",
                        "data-ocid": `filter_panel.${field.key}_select`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          SelectValue,
                          {
                            placeholder: field.placeholder ?? `All ${field.label}s`
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: "__all__", children: [
                        "All ",
                        field.label,
                        "s"
                      ] }),
                      field.options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: opt.value, children: opt.label }, opt.value))
                    ] })
                  ]
                }
              ),
              field.type === "daterange" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "date",
                    value: ((_a = values[field.key]) == null ? void 0 : _a.from) ?? "",
                    onChange: (e) => {
                      var _a2;
                      return handleChange(field.key, {
                        from: e.target.value,
                        to: ((_a2 = values[field.key]) == null ? void 0 : _a2.to) ?? ""
                      });
                    },
                    className: "h-8 rounded-lg text-xs flex-1",
                    "data-ocid": `filter_panel.${field.key}_from`,
                    "aria-label": `${field.label} from`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground shrink-0", children: "to" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "date",
                    value: ((_b = values[field.key]) == null ? void 0 : _b.to) ?? "",
                    onChange: (e) => {
                      var _a2;
                      return handleChange(field.key, {
                        from: ((_a2 = values[field.key]) == null ? void 0 : _a2.from) ?? "",
                        to: e.target.value
                      });
                    },
                    className: "h-8 rounded-lg text-xs flex-1",
                    "data-ocid": `filter_panel.${field.key}_to`,
                    "aria-label": `${field.label} to`
                  }
                )
              ] })
            ] }, field.key);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pt-1 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: handleReset,
                className: "h-8 rounded-lg text-xs gap-1.5",
                "data-ocid": "filter_panel.reset_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3 h-3" }),
                  "Reset"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                onClick: handleApply,
                className: "h-8 rounded-lg text-xs flex-1",
                "data-ocid": "filter_panel.apply_button",
                children: "Apply Filters"
              }
            )
          ] })
        ]
      },
      "filter-panel"
    ) })
  ] });
}
export {
  FilterPanel as F,
  Popover as P,
  PopoverTrigger as a,
  PopoverContent as b
};
