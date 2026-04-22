import { b as createLucideIcon, r as reactExports, o as useControllableState, j as jsxRuntimeExports, p as Root2$1, q as useId, s as useComposedRefs, t as Primitive, v as composeEventHandlers, A as Anchor, w as Presence, x as Portal$1, y as createPopperScope, z as hideOthers, E as ReactRemoveScroll, F as createContextScope, H as createSlot, I as useFocusGuards, J as FocusScope, K as DismissableLayer, L as Content, M as Arrow, f as cn, N as createCollection, O as useDirection, Q as useSize, B as Button, C as Clock, m as motion, n as Badge, k as ChevronLeft, l as ChevronRight } from "./index-BjKYYUic.js";
import { e as clamp, u as usePrevious, I as Input, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-Bt-NdUTF.js";
import { L as Label } from "./dialog-u123pluM.js";
import { L as LayoutGrid, D as DataTable, S as ScrollArea, T as Textarea, U as User } from "./DataTable-DPsPBWLq.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-COosJg6Y.js";
import { P as Plus, L as LoaderCircle, M as ModalForm } from "./ModalForm-a_27LVw7.js";
import { P as PageHeader, S as StatCard } from "./StatCard-DFAq4Vlm.js";
import { P as PriorityBadge } from "./PriorityBadge-n4cWzeXf.js";
import { S as StatusBadge } from "./StatusBadge-lygjOIG7.js";
import { m as mockTasks } from "./mockTasks-ZIylUAUd.js";
import { C as CircleCheck } from "./circle-check-Bz0wAFxc.js";
import { C as CalendarDays } from "./calendar-days-CvoFkPZK.js";
import "./zap-q_2Ro6um.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 18H3", key: "1amg6g" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }]
];
const AlignLeft = createLucideIcon("align-left", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", key: "i9b6wo" }],
  ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }]
];
const Flag = createLucideIcon("flag", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { x: "3", y: "5", width: "6", height: "6", rx: "1", key: "1defrl" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "M13 6h8", key: "15sg57" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 18h8", key: "oe0vm4" }]
];
const ListTodo = createLucideIcon("list-todo", __iconNode);
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
var PAGE_KEYS = ["PageUp", "PageDown"];
var ARROW_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var BACK_KEYS = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
};
var SLIDER_NAME = "Slider";
var [Collection, useCollection, createCollectionScope] = createCollection(SLIDER_NAME);
var [createSliderContext] = createContextScope(SLIDER_NAME, [
  createCollectionScope
]);
var [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME);
var Slider$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      name,
      min = 0,
      max = 100,
      step = 1,
      orientation = "horizontal",
      disabled = false,
      minStepsBetweenThumbs = 0,
      defaultValue = [min],
      value,
      onValueChange = () => {
      },
      onValueCommit = () => {
      },
      inverted = false,
      form,
      ...sliderProps
    } = props;
    const thumbRefs = reactExports.useRef(/* @__PURE__ */ new Set());
    const valueIndexToChangeRef = reactExports.useRef(0);
    const isHorizontal = orientation === "horizontal";
    const SliderOrientation = isHorizontal ? SliderHorizontal : SliderVertical;
    const [values = [], setValues] = useControllableState({
      prop: value,
      defaultProp: defaultValue,
      onChange: (value2) => {
        var _a;
        const thumbs = [...thumbRefs.current];
        (_a = thumbs[valueIndexToChangeRef.current]) == null ? void 0 : _a.focus();
        onValueChange(value2);
      }
    });
    const valuesBeforeSlideStartRef = reactExports.useRef(values);
    function handleSlideStart(value2) {
      const closestIndex = getClosestValueIndex(values, value2);
      updateValues(value2, closestIndex);
    }
    function handleSlideMove(value2) {
      updateValues(value2, valueIndexToChangeRef.current);
    }
    function handleSlideEnd() {
      const prevValue = valuesBeforeSlideStartRef.current[valueIndexToChangeRef.current];
      const nextValue = values[valueIndexToChangeRef.current];
      const hasChanged = nextValue !== prevValue;
      if (hasChanged) onValueCommit(values);
    }
    function updateValues(value2, atIndex, { commit } = { commit: false }) {
      const decimalCount = getDecimalCount(step);
      const snapToStep = roundValue(Math.round((value2 - min) / step) * step + min, decimalCount);
      const nextValue = clamp(snapToStep, [min, max]);
      setValues((prevValues = []) => {
        const nextValues = getNextSortedValues(prevValues, nextValue, atIndex);
        if (hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
          valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
          const hasChanged = String(nextValues) !== String(prevValues);
          if (hasChanged && commit) onValueCommit(nextValues);
          return hasChanged ? nextValues : prevValues;
        } else {
          return prevValues;
        }
      });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SliderProvider,
      {
        scope: props.__scopeSlider,
        name,
        disabled,
        min,
        max,
        valueIndexToChangeRef,
        thumbs: thumbRefs.current,
        values,
        orientation,
        form,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: props.__scopeSlider, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: props.__scopeSlider, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SliderOrientation,
          {
            "aria-disabled": disabled,
            "data-disabled": disabled ? "" : void 0,
            ...sliderProps,
            ref: forwardedRef,
            onPointerDown: composeEventHandlers(sliderProps.onPointerDown, () => {
              if (!disabled) valuesBeforeSlideStartRef.current = values;
            }),
            min,
            max,
            inverted,
            onSlideStart: disabled ? void 0 : handleSlideStart,
            onSlideMove: disabled ? void 0 : handleSlideMove,
            onSlideEnd: disabled ? void 0 : handleSlideEnd,
            onHomeKeyDown: () => !disabled && updateValues(min, 0, { commit: true }),
            onEndKeyDown: () => !disabled && updateValues(max, values.length - 1, { commit: true }),
            onStepKeyDown: ({ event, direction: stepDirection }) => {
              if (!disabled) {
                const isPageKey = PAGE_KEYS.includes(event.key);
                const isSkipKey = isPageKey || event.shiftKey && ARROW_KEYS.includes(event.key);
                const multiplier = isSkipKey ? 10 : 1;
                const atIndex = valueIndexToChangeRef.current;
                const value2 = values[atIndex];
                const stepInDirection = step * multiplier * stepDirection;
                updateValues(value2 + stepInDirection, atIndex, { commit: true });
              }
            }
          }
        ) }) })
      }
    );
  }
);
Slider$1.displayName = SLIDER_NAME;
var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
});
var SliderHorizontal = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      min,
      max,
      dir,
      inverted,
      onSlideStart,
      onSlideMove,
      onSlideEnd,
      onStepKeyDown,
      ...sliderProps
    } = props;
    const [slider, setSlider] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setSlider(node));
    const rectRef = reactExports.useRef(void 0);
    const direction = useDirection(dir);
    const isDirectionLTR = direction === "ltr";
    const isSlidingFromLeft = isDirectionLTR && !inverted || !isDirectionLTR && inverted;
    function getValueFromPointer(pointerPosition) {
      const rect = rectRef.current || slider.getBoundingClientRect();
      const input = [0, rect.width];
      const output = isSlidingFromLeft ? [min, max] : [max, min];
      const value = linearScale(input, output);
      rectRef.current = rect;
      return value(pointerPosition - rect.left);
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SliderOrientationProvider,
      {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromLeft ? "left" : "right",
        endEdge: isSlidingFromLeft ? "right" : "left",
        direction: isSlidingFromLeft ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SliderImpl,
          {
            dir: direction,
            "data-orientation": "horizontal",
            ...sliderProps,
            ref: composedRefs,
            style: {
              ...sliderProps.style,
              ["--radix-slider-thumb-transform"]: "translateX(-50%)"
            },
            onSlideStart: (event) => {
              const value = getValueFromPointer(event.clientX);
              onSlideStart == null ? void 0 : onSlideStart(value);
            },
            onSlideMove: (event) => {
              const value = getValueFromPointer(event.clientX);
              onSlideMove == null ? void 0 : onSlideMove(value);
            },
            onSlideEnd: () => {
              rectRef.current = void 0;
              onSlideEnd == null ? void 0 : onSlideEnd();
            },
            onStepKeyDown: (event) => {
              const slideDirection = isSlidingFromLeft ? "from-left" : "from-right";
              const isBackKey = BACK_KEYS[slideDirection].includes(event.key);
              onStepKeyDown == null ? void 0 : onStepKeyDown({ event, direction: isBackKey ? -1 : 1 });
            }
          }
        )
      }
    );
  }
);
var SliderVertical = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      min,
      max,
      inverted,
      onSlideStart,
      onSlideMove,
      onSlideEnd,
      onStepKeyDown,
      ...sliderProps
    } = props;
    const sliderRef = reactExports.useRef(null);
    const ref = useComposedRefs(forwardedRef, sliderRef);
    const rectRef = reactExports.useRef(void 0);
    const isSlidingFromBottom = !inverted;
    function getValueFromPointer(pointerPosition) {
      const rect = rectRef.current || sliderRef.current.getBoundingClientRect();
      const input = [0, rect.height];
      const output = isSlidingFromBottom ? [max, min] : [min, max];
      const value = linearScale(input, output);
      rectRef.current = rect;
      return value(pointerPosition - rect.top);
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SliderOrientationProvider,
      {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromBottom ? "bottom" : "top",
        endEdge: isSlidingFromBottom ? "top" : "bottom",
        size: "height",
        direction: isSlidingFromBottom ? 1 : -1,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SliderImpl,
          {
            "data-orientation": "vertical",
            ...sliderProps,
            ref,
            style: {
              ...sliderProps.style,
              ["--radix-slider-thumb-transform"]: "translateY(50%)"
            },
            onSlideStart: (event) => {
              const value = getValueFromPointer(event.clientY);
              onSlideStart == null ? void 0 : onSlideStart(value);
            },
            onSlideMove: (event) => {
              const value = getValueFromPointer(event.clientY);
              onSlideMove == null ? void 0 : onSlideMove(value);
            },
            onSlideEnd: () => {
              rectRef.current = void 0;
              onSlideEnd == null ? void 0 : onSlideEnd();
            },
            onStepKeyDown: (event) => {
              const slideDirection = isSlidingFromBottom ? "from-bottom" : "from-top";
              const isBackKey = BACK_KEYS[slideDirection].includes(event.key);
              onStepKeyDown == null ? void 0 : onStepKeyDown({ event, direction: isBackKey ? -1 : 1 });
            }
          }
        )
      }
    );
  }
);
var SliderImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSlider,
      onSlideStart,
      onSlideMove,
      onSlideEnd,
      onHomeKeyDown,
      onEndKeyDown,
      onStepKeyDown,
      ...sliderProps
    } = props;
    const context = useSliderContext(SLIDER_NAME, __scopeSlider);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        ...sliderProps,
        ref: forwardedRef,
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          if (event.key === "Home") {
            onHomeKeyDown(event);
            event.preventDefault();
          } else if (event.key === "End") {
            onEndKeyDown(event);
            event.preventDefault();
          } else if (PAGE_KEYS.concat(ARROW_KEYS).includes(event.key)) {
            onStepKeyDown(event);
            event.preventDefault();
          }
        }),
        onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
          const target = event.target;
          target.setPointerCapture(event.pointerId);
          event.preventDefault();
          if (context.thumbs.has(target)) {
            target.focus();
          } else {
            onSlideStart(event);
          }
        }),
        onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
          const target = event.target;
          if (target.hasPointerCapture(event.pointerId)) onSlideMove(event);
        }),
        onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
          const target = event.target;
          if (target.hasPointerCapture(event.pointerId)) {
            target.releasePointerCapture(event.pointerId);
            onSlideEnd(event);
          }
        })
      }
    );
  }
);
var TRACK_NAME = "SliderTrack";
var SliderTrack = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, ...trackProps } = props;
    const context = useSliderContext(TRACK_NAME, __scopeSlider);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-disabled": context.disabled ? "" : void 0,
        "data-orientation": context.orientation,
        ...trackProps,
        ref: forwardedRef
      }
    );
  }
);
SliderTrack.displayName = TRACK_NAME;
var RANGE_NAME = "SliderRange";
var SliderRange = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, ...rangeProps } = props;
    const context = useSliderContext(RANGE_NAME, __scopeSlider);
    const orientation = useSliderOrientationContext(RANGE_NAME, __scopeSlider);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const valuesCount = context.values.length;
    const percentages = context.values.map(
      (value) => convertValueToPercentage(value, context.min, context.max)
    );
    const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
    const offsetEnd = 100 - Math.max(...percentages);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-orientation": context.orientation,
        "data-disabled": context.disabled ? "" : void 0,
        ...rangeProps,
        ref: composedRefs,
        style: {
          ...props.style,
          [orientation.startEdge]: offsetStart + "%",
          [orientation.endEdge]: offsetEnd + "%"
        }
      }
    );
  }
);
SliderRange.displayName = RANGE_NAME;
var THUMB_NAME = "SliderThumb";
var SliderThumb = reactExports.forwardRef(
  (props, forwardedRef) => {
    const getItems = useCollection(props.__scopeSlider);
    const [thumb, setThumb] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setThumb(node));
    const index = reactExports.useMemo(
      () => thumb ? getItems().findIndex((item) => item.ref.current === thumb) : -1,
      [getItems, thumb]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SliderThumbImpl, { ...props, ref: composedRefs, index });
  }
);
var SliderThumbImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, index, name, ...thumbProps } = props;
    const context = useSliderContext(THUMB_NAME, __scopeSlider);
    const orientation = useSliderOrientationContext(THUMB_NAME, __scopeSlider);
    const [thumb, setThumb] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setThumb(node));
    const isFormControl = thumb ? context.form || !!thumb.closest("form") : true;
    const size = useSize(thumb);
    const value = context.values[index];
    const percent = value === void 0 ? 0 : convertValueToPercentage(value, context.min, context.max);
    const label = getLabel(index, context.values.length);
    const orientationSize = size == null ? void 0 : size[orientation.size];
    const thumbInBoundsOffset = orientationSize ? getThumbInBoundsOffset(orientationSize, percent, orientation.direction) : 0;
    reactExports.useEffect(() => {
      if (thumb) {
        context.thumbs.add(thumb);
        return () => {
          context.thumbs.delete(thumb);
        };
      }
    }, [thumb, context.thumbs]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [orientation.startEdge]: `calc(${percent}% + ${thumbInBoundsOffset}px)`
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.ItemSlot, { scope: props.__scopeSlider, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Primitive.span,
            {
              role: "slider",
              "aria-label": props["aria-label"] || label,
              "aria-valuemin": context.min,
              "aria-valuenow": value,
              "aria-valuemax": context.max,
              "aria-orientation": context.orientation,
              "data-orientation": context.orientation,
              "data-disabled": context.disabled ? "" : void 0,
              tabIndex: context.disabled ? void 0 : 0,
              ...thumbProps,
              ref: composedRefs,
              style: value === void 0 ? { display: "none" } : props.style,
              onFocus: composeEventHandlers(props.onFocus, () => {
                context.valueIndexToChangeRef.current = index;
              })
            }
          ) }),
          isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
            SliderBubbleInput,
            {
              name: name ?? (context.name ? context.name + (context.values.length > 1 ? "[]" : "") : void 0),
              form: context.form,
              value
            },
            index
          )
        ]
      }
    );
  }
);
SliderThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "RadioBubbleInput";
var SliderBubbleInput = reactExports.forwardRef(
  ({ __scopeSlider, value, ...props }, forwardedRef) => {
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(ref, forwardedRef);
    const prevValue = usePrevious(value);
    reactExports.useEffect(() => {
      const input = ref.current;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(inputProto, "value");
      const setValue = descriptor.set;
      if (prevValue !== value && setValue) {
        const event = new Event("input", { bubbles: true });
        setValue.call(input, value);
        input.dispatchEvent(event);
      }
    }, [prevValue, value]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.input,
      {
        style: { display: "none" },
        ...props,
        ref: composedRefs,
        defaultValue: value
      }
    );
  }
);
SliderBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getNextSortedValues(prevValues = [], nextValue, atIndex) {
  const nextValues = [...prevValues];
  nextValues[atIndex] = nextValue;
  return nextValues.sort((a, b) => a - b);
}
function convertValueToPercentage(value, min, max) {
  const maxSteps = max - min;
  const percentPerStep = 100 / maxSteps;
  const percentage = percentPerStep * (value - min);
  return clamp(percentage, [0, 100]);
}
function getLabel(index, totalValues) {
  if (totalValues > 2) {
    return `Value ${index + 1} of ${totalValues}`;
  } else if (totalValues === 2) {
    return ["Minimum", "Maximum"][index];
  } else {
    return void 0;
  }
}
function getClosestValueIndex(values, nextValue) {
  if (values.length === 1) return 0;
  const distances = values.map((value) => Math.abs(value - nextValue));
  const closestDistance = Math.min(...distances);
  return distances.indexOf(closestDistance);
}
function getThumbInBoundsOffset(width, left, direction) {
  const halfWidth = width / 2;
  const halfPercent = 50;
  const offset = linearScale([0, halfPercent], [0, halfWidth]);
  return (halfWidth - offset(left) * direction) * direction;
}
function getStepsBetweenValues(values) {
  return values.slice(0, -1).map((value, index) => values[index + 1] - value);
}
function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
  if (minStepsBetweenValues > 0) {
    const stepsBetweenValues = getStepsBetweenValues(values);
    const actualMinStepsBetweenValues = Math.min(...stepsBetweenValues);
    return actualMinStepsBetweenValues >= minStepsBetweenValues;
  }
  return true;
}
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1]) return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function getDecimalCount(value) {
  return (String(value).split(".")[1] || "").length;
}
function roundValue(value, decimalCount) {
  const rounder = Math.pow(10, decimalCount);
  return Math.round(value * rounder) / rounder;
}
var Root = Slider$1;
var Track = SliderTrack;
var Range = SliderRange;
var Thumb = SliderThumb;
function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}) {
  const _values = reactExports.useMemo(
    () => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max],
    [value, defaultValue, min, max]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Root,
    {
      "data-slot": "slider",
      defaultValue,
      value,
      min,
      max,
      className: cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Track,
          {
            "data-slot": "slider-track",
            className: cn(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Range,
              {
                "data-slot": "slider-range",
                className: cn(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: _values.length }, (value2, _) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Thumb,
          {
            "data-slot": "slider-thumb",
            className: "border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          `${value2}`
        ))
      ]
    }
  );
}
const STATUSES = ["Todo", "In Progress", "Review", "Done"];
const COLUMN_STYLES = {
  Todo: {
    header: "bg-muted/60 border-border",
    dot: "bg-muted-foreground",
    accent: "text-muted-foreground"
  },
  "In Progress": {
    header: "bg-amber-50 border-amber-200 dark:bg-amber-900/10",
    dot: "bg-amber-500",
    accent: "text-amber-600"
  },
  Review: {
    header: "bg-secondary/8 border-secondary/20",
    dot: "bg-secondary",
    accent: "text-secondary"
  },
  Done: {
    header: "bg-green-50 border-green-200 dark:bg-green-900/10",
    dot: "bg-green-500",
    accent: "text-green-600"
  }
};
const PRIORITY_OPTIONS = ["High", "Medium", "Low"];
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function TaskKanbanCard({
  task,
  onDragStart
}) {
  const isOverdue = task.status !== "Done" && new Date(task.dueDate) < /* @__PURE__ */ new Date();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 6 },
      animate: { opacity: 1, y: 0 },
      whileHover: { scale: 1.01 },
      draggable: true,
      onDragStart: (e) => onDragStart(e, task),
      className: "bg-card border border-border rounded-xl p-3.5 cursor-grab active:cursor-grabbing shadow-card hover:shadow-elevated transition-smooth",
      "data-ocid": `tasks.kanban.card.${task.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground line-clamp-2 flex-1", children: task.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: task.priority })
        ] }),
        task.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground line-clamp-2 mb-2", children: task.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full rounded-full bg-primary transition-all",
              style: { width: `${task.progress}%` }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-semibold text-muted-foreground w-7 text-right", children: [
            task.progress,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[10px] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[80px]", children: task.assignedTo })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "flex items-center gap-1 text-[10px]",
                isOverdue ? "text-red-500" : "text-muted-foreground"
              ),
              children: [
                isOverdue && /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { className: "w-3 h-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-3 h-3" }),
                new Date(task.dueDate).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short"
                })
              ]
            }
          )
        ] }),
        task.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mt-2 pt-2 border-t border-border", children: task.tags.slice(0, 3).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-[9px] font-medium bg-muted text-muted-foreground px-1.5 py-0.5 rounded-md",
            children: tag
          },
          tag
        )) })
      ]
    }
  );
}
function TaskKanbanColumn({
  status,
  tasks,
  onDragStart,
  onDragOver,
  onDrop,
  onAddNew
}) {
  const [isDragOver, setIsDragOver] = reactExports.useState(false);
  const styles = COLUMN_STYLES[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex flex-col min-w-[240px] flex-1 rounded-2xl border transition-smooth",
        isDragOver ? "border-primary/50 bg-primary/3" : "border-border bg-muted/20"
      ),
      onDragOver: (e) => {
        e.preventDefault();
        onDragOver(e);
        setIsDragOver(true);
      },
      onDragLeave: () => setIsDragOver(false),
      onDrop: (e) => {
        onDrop(e, status);
        setIsDragOver(false);
      },
      "data-ocid": `tasks.kanban.column.${status.toLowerCase().replace(/ /g, "_")}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "flex items-center justify-between px-4 py-3 rounded-t-2xl border-b",
              styles.header
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("w-2 h-2 rounded-full", styles.dot) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: status }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-card border",
                      styles.accent
                    ),
                    children: tasks.length
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "w-6 h-6 rounded-lg",
                  onClick: onAddNew,
                  "data-ocid": `tasks.kanban.add.${status.toLowerCase().replace(/ /g, "_")}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "flex-1 max-h-[520px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 space-y-2.5", children: tasks.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8 text-center text-[11px] text-muted-foreground", children: "No tasks" }) : tasks.map((task) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          TaskKanbanCard,
          {
            task,
            onDragStart
          },
          task.id
        )) }) })
      ]
    }
  );
}
const listColumns = [
  {
    key: "title",
    header: "Task",
    sortable: true,
    render: (row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground line-clamp-1", children: row.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground line-clamp-1", children: row.description })
    ] })
  },
  {
    key: "priority",
    header: "Priority",
    render: (row) => /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: row.priority })
  },
  {
    key: "assignedTo",
    header: "Assignee",
    render: (row) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground", children: row.assignedTo })
  },
  {
    key: "branchId",
    header: "Branch",
    render: (row) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px] font-medium", children: row.branchId === "hq" ? "HQ" : row.branchId.toUpperCase() })
  },
  {
    key: "dueDate",
    header: "Due Date",
    sortable: true,
    render: (row) => {
      const overdue = row.status !== "Done" && new Date(row.dueDate) < /* @__PURE__ */ new Date();
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: cn(
            "text-xs",
            overdue ? "text-red-500 font-semibold" : "text-muted-foreground"
          ),
          children: new Date(row.dueDate).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short"
          })
        }
      );
    }
  },
  {
    key: "progress",
    header: "Progress",
    align: "right",
    render: (row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-full rounded-full bg-primary",
          style: { width: `${row.progress}%` }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-foreground w-8", children: [
        row.progress,
        "%"
      ] })
    ] })
  },
  {
    key: "status",
    header: "Status",
    render: (row) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: row.status })
  }
];
function CalendarView({ tasks }) {
  const today = /* @__PURE__ */ new Date();
  const [viewDate, setViewDate] = reactExports.useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [
    ...Array(firstDayOfMonth).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1)
  ];
  while (cells.length % 7 !== 0) cells.push(null);
  const tasksByDay = reactExports.useMemo(() => {
    const map = {};
    for (const task of tasks) {
      const d = new Date(task.dueDate);
      if (d.getFullYear() === year && d.getMonth() === month) {
        const day = d.getDate();
        if (!map[day]) map[day] = [];
        map[day].push(task);
      }
    }
    return map;
  }, [tasks, year, month]);
  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      className: "bg-card rounded-2xl border border-border shadow-card overflow-hidden",
      "data-ocid": "tasks.calendar",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b bg-muted/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "icon",
              className: "rounded-xl",
              onClick: prevMonth,
              "data-ocid": "tasks.calendar.prev_month",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold text-foreground", children: [
            MONTH_NAMES[month],
            " ",
            year
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "icon",
              className: "rounded-xl",
              onClick: nextMonth,
              "data-ocid": "tasks.calendar.next_month",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 border-b", children: DAY_NAMES.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "text-center text-[10px] font-semibold text-muted-foreground py-2",
            children: d
          },
          d
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7", children: cells.map((day, idx) => {
          const isToday = day !== null && today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
          const dayTasks = day !== null ? tasksByDay[day] ?? [] : [];
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "min-h-[72px] p-1.5 border-r border-b last:border-r-0 relative",
                day === null ? "bg-muted/10" : "bg-card",
                idx % 7 === 6 ? "border-r-0" : ""
              ),
              "data-ocid": day ? `tasks.calendar.day.${day}` : void 0,
              children: day !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "text-xs font-medium w-6 h-6 flex items-center justify-center rounded-full mb-1",
                      isToday ? "bg-primary text-primary-foreground" : "text-foreground"
                    ),
                    children: day
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0.5", children: dayTasks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "w-full text-left",
                      "data-ocid": `tasks.calendar.day.${day}.popover`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
                        dayTasks.slice(0, 2).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: cn(
                              "text-[9px] px-1.5 py-0.5 rounded truncate font-medium",
                              t.priority === "High" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : t.priority === "Medium" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" : "bg-primary/10 text-primary"
                            ),
                            children: t.title
                          },
                          t.id
                        )),
                        dayTasks.length > 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-muted-foreground px-1", children: [
                          "+",
                          dayTasks.length - 2,
                          " more"
                        ] })
                      ] })
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    PopoverContent,
                    {
                      className: "w-72 p-3",
                      "data-ocid": `tasks.calendar.day.${day}.popover_content`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold mb-2 text-foreground", children: [
                          MONTH_NAMES[month],
                          " ",
                          day,
                          " — ",
                          dayTasks.length,
                          " task",
                          dayTasks.length > 1 ? "s" : ""
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: dayTasks.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "flex items-start gap-2 p-2 rounded-xl bg-muted/30 border border-border",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: t.priority }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground line-clamp-2", children: t.title }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate", children: t.assignedTo })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: t.status })
                            ]
                          },
                          t.id
                        )) })
                      ]
                    }
                  )
                ] }) })
              ] })
            },
            `cell-${idx}-${day ?? "empty"}`
          );
        }) })
      ]
    }
  );
}
function CreateTaskForm() {
  const [progress, setProgress] = reactExports.useState([0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Task Title *" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "Enter task title",
          className: "rounded-xl text-sm",
          "data-ocid": "add_task.title.input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Description" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          placeholder: "Describe what needs to be done…",
          rows: 3,
          className: "rounded-xl text-sm resize-none",
          "data-ocid": "add_task.description.textarea"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Priority" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "rounded-xl text-sm",
              "data-ocid": "add_task.priority.select",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select priority" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: PRIORITY_OPTIONS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p, children: p }, p)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "rounded-xl text-sm",
              "data-ocid": "add_task.status.select",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select status" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Assigned To" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Staff member name",
            className: "rounded-xl text-sm",
            "data-ocid": "add_task.assignee.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Branch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "rounded-xl text-sm",
              "data-ocid": "add_task.branch.select",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select branch" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
            "HQ",
            "b1 — Mumbai Central",
            "b2 — Delhi NCR",
            "b3 — Bengaluru East",
            "b4 — Hyderabad West"
          ].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: b, children: b }, b)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Due Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "date",
            className: "rounded-xl text-sm",
            "data-ocid": "add_task.due_date.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Parent Task (optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "rounded-xl text-sm",
              "data-ocid": "add_task.parent.select",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "None" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", children: "None" }),
            mockTasks.slice(0, 6).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: t.id, children: [
              t.title.slice(0, 35),
              "…"
            ] }, t.id))
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs", children: [
        "Initial Progress — ",
        progress[0],
        "%"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Slider,
        {
          value: progress,
          onValueChange: setProgress,
          min: 0,
          max: 100,
          step: 5,
          className: "w-full",
          "data-ocid": "add_task.progress.slider"
        }
      )
    ] })
  ] });
}
function TasksPage() {
  const [tasks, setTasks] = reactExports.useState(mockTasks);
  const [showAddModal, setShowAddModal] = reactExports.useState(false);
  const [saving, setSaving] = reactExports.useState(false);
  const [dragState, setDragState] = reactExports.useState(null);
  const stats = reactExports.useMemo(
    () => ({
      total: tasks.length,
      inProgress: tasks.filter((t) => t.status === "In Progress").length,
      review: tasks.filter((t) => t.status === "Review").length,
      done: tasks.filter((t) => t.status === "Done").length,
      overdue: tasks.filter(
        (t) => t.status !== "Done" && new Date(t.dueDate) < /* @__PURE__ */ new Date()
      ).length
    }),
    [tasks]
  );
  const handleDragStart = (e, task) => {
    setDragState({ taskId: task.id, fromCol: task.status });
    e.dataTransfer.effectAllowed = "move";
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  const handleDrop = (e, toCol) => {
    e.preventDefault();
    if (!dragState || dragState.fromCol === toCol) return;
    setTasks(
      (prev) => prev.map(
        (t) => t.id === dragState.taskId ? { ...t, status: toCol } : t
      )
    );
    setDragState(null);
  };
  const handleAdd = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setShowAddModal(false);
    }, 1200);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Task Management",
        subtitle: `${stats.total} tasks across all branches`,
        breadcrumbs: [{ label: "Home" }, { label: "Tasks" }],
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "rounded-xl gap-1.5",
            onClick: () => setShowAddModal(true),
            "data-ocid": "tasks.add_task.open_modal_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
              "Create Task"
            ]
          }
        ),
        "data-ocid": "tasks.header"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mb-4 sm:mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "Total Tasks",
          value: stats.total,
          icon: ListTodo,
          change: 4,
          "data-ocid": "tasks.stat.total"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "In Progress",
          value: stats.inProgress,
          icon: LoaderCircle,
          iconColor: "text-amber-500",
          "data-ocid": "tasks.stat.in_progress"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "In Review",
          value: stats.review,
          icon: AlignLeft,
          iconColor: "text-secondary",
          "data-ocid": "tasks.stat.review"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "Completed",
          value: stats.done,
          icon: CircleCheck,
          iconColor: "text-green-600",
          change: 15,
          "data-ocid": "tasks.stat.done"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          title: "Overdue",
          value: stats.overdue,
          icon: Clock,
          iconColor: "text-red-500",
          change: -8,
          "data-ocid": "tasks.stat.overdue"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "kanban", "data-ocid": "tasks.view_tabs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-4 rounded-xl overflow-x-auto flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "kanban",
            "data-ocid": "tasks.kanban.tab",
            className: "gap-1.5 text-xs rounded-xl",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "w-3.5 h-3.5" }),
              "Kanban"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "list",
            "data-ocid": "tasks.list.tab",
            className: "gap-1.5 text-xs rounded-xl",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ListTodo, { className: "w-3.5 h-3.5" }),
              "List"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "calendar",
            "data-ocid": "tasks.calendar.tab",
            className: "gap-1.5 text-xs rounded-xl",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-3.5 h-3.5" }),
              "Calendar"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "kanban", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "flex gap-3 overflow-x-auto pb-3",
          children: STATUSES.map((status) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            TaskKanbanColumn,
            {
              status,
              tasks: tasks.filter((t) => t.status === status),
              onDragStart: handleDragStart,
              onDragOver: handleDragOver,
              onDrop: handleDrop,
              onAddNew: () => setShowAddModal(true)
            },
            status
          ))
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "list", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "bg-card rounded-2xl border border-border shadow-card p-5",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            DataTable,
            {
              data: tasks,
              columns: listColumns,
              searchKeys: ["title", "assignedTo", "assignedBy", "branchId"],
              searchPlaceholder: "Search tasks…",
              "data-ocid": "tasks.list.table"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "calendar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarView, { tasks }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModalForm,
      {
        open: showAddModal,
        onOpenChange: setShowAddModal,
        title: "Create New Task",
        description: "Assign and configure a task for your team.",
        onSubmit: handleAdd,
        submitLabel: "Create Task",
        loading: saving,
        "data-ocid": "add_task",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreateTaskForm, {})
      }
    )
  ] });
}
export {
  TasksPage as default
};
