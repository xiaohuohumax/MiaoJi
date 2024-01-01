import { b as flatten, f as formatLength, i as isBrowser$1 } from "./_plugin-vue_export-helper-2b0fed72.js";
import { am as warn$1, d as defineComponent, o as onMounted, i as onBeforeUnmount, f as computed, Y as createInjectionKey, p as inject, r as ref, _ as useMemo, a0 as provide, $ as getCurrentInstance, a8 as withDirectives, an as CssRender, ao as useSsrAdapter, e as watch, n as nextTick, t as toRef, k as isMounted, h, ap as createId, L as Fragment, ad as onActivated, aq as onDeactivated, ar as getNative, as as root, at as overArg, au as isPrototype, av as isArrayLike, aw as arrayLikeKeys, ax as isArray, ay as isSymbol, az as MapCache, Q as toString, aA as toSource, aB as baseGetTag, aC as Map$1, aD as Symbol$1, aE as eq, aF as Uint8Array, aG as isBuffer, aH as Stack, aI as isTypedArray, aJ as isObjectLike, aK as isObject, aL as isLength, aM as isIndex, aN as isArguments, aO as identity, aP as baseFor, aQ as arrayMap, R as replaceable, c as cB, b as c$1, a as cM, S as cE, aR as fadeInTransition, g as useTheme, u as useConfig, a1 as useRtl, w as watchEffect, j as useThemeClass, aS as scrollbarLight, T as Transition, m as mergeProps, Z as cNotM, aT as cCB, aU as popoverLight, a9 as vShow, a4 as cloneVNode, aV as Text, aW as tooltipLight, aX as imageLight, N as NBaseIcon, aa as normalizeStyle } from "./index-2ff28f77.js";
import { g as getSlot, a as getFirstVNode, L as LazyTeleport, u as useMergedState, f as fadeInScaleUpTransition } from "./fade-in-scale-up.cssr-de48a42b.js";
import { u as useLocale } from "./CReactions.vue_vue_type_script_setup_true_lang-47dc8c86.js";
import { i as isBrowser, b as beforeNextFrameOnce, V as VResizeObserver } from "./VResizeObserver-df570f05.js";
import { i as isSlotEmpty, b as resolveWrappedSlot, c as call } from "./Card-bc1cf177.js";
function getPreciseEventTarget(event) {
  return event.composedPath()[0] || null;
}
function keep(object, keys2 = [], rest) {
  const keepedObject = {};
  keys2.forEach((key) => {
    keepedObject[key] = object[key];
  });
  return Object.assign(keepedObject, rest);
}
function getFirstSlotVNode(slots, slotName = "default", props = void 0) {
  const slot = slots[slotName];
  if (!slot) {
    warn$1("getFirstSlotVNode", `slot[${slotName}] is empty`);
    return null;
  }
  const slotContent = flatten(slot(props));
  if (slotContent.length === 1) {
    return slotContent[0];
  } else {
    warn$1("getFirstSlotVNode", `slot[${slotName}] should have exactly one child`);
    return null;
  }
}
const Wrapper = defineComponent({
  render() {
    var _a, _b;
    return (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
});
let _isJsdom;
function isJsdom() {
  if (_isJsdom === void 0) {
    _isJsdom = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
  }
  return _isJsdom;
}
let fontsReady;
let isFontReady;
const init = () => {
  var _a, _b;
  fontsReady = isBrowser ? (_b = (_a = document) === null || _a === void 0 ? void 0 : _a.fonts) === null || _b === void 0 ? void 0 : _b.ready : void 0;
  isFontReady = false;
  if (fontsReady !== void 0) {
    void fontsReady.then(() => {
      isFontReady = true;
    });
  } else {
    isFontReady = true;
  }
};
init();
function onFontsReady(cb) {
  if (isFontReady)
    return;
  let deactivated = false;
  onMounted(() => {
    if (!isFontReady) {
      fontsReady === null || fontsReady === void 0 ? void 0 : fontsReady.then(() => {
        if (deactivated)
          return;
        cb();
      });
    }
  });
  onBeforeUnmount(() => {
    deactivated = true;
  });
}
function getEventTarget(e) {
  const path = e.composedPath();
  return path[0];
}
const traps = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function createTrapHandler(name, el, originalHandler) {
  if (name === "mousemoveoutside") {
    const moveHandler = (e) => {
      if (el.contains(getEventTarget(e)))
        return;
      originalHandler(e);
    };
    return {
      mousemove: moveHandler,
      touchstart: moveHandler
    };
  } else if (name === "clickoutside") {
    let mouseDownOutside = false;
    const downHandler = (e) => {
      mouseDownOutside = !el.contains(getEventTarget(e));
    };
    const upHanlder = (e) => {
      if (!mouseDownOutside)
        return;
      if (el.contains(getEventTarget(e)))
        return;
      originalHandler(e);
    };
    return {
      mousedown: downHandler,
      mouseup: upHanlder,
      touchstart: downHandler,
      touchend: upHanlder
    };
  }
  console.error(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `[evtd/create-trap-handler]: name \`${name}\` is invalid. This could be a bug of evtd.`
  );
  return {};
}
function ensureTrapHandlers(name, el, handler) {
  const handlers = traps[name];
  let elHandlers = handlers.get(el);
  if (elHandlers === void 0) {
    handlers.set(el, elHandlers = /* @__PURE__ */ new WeakMap());
  }
  let trapHandler = elHandlers.get(handler);
  if (trapHandler === void 0) {
    elHandlers.set(handler, trapHandler = createTrapHandler(name, el, handler));
  }
  return trapHandler;
}
function trapOn(name, el, handler, options) {
  if (name === "mousemoveoutside" || name === "clickoutside") {
    const trapHandlers = ensureTrapHandlers(name, el, handler);
    Object.keys(trapHandlers).forEach((key) => {
      on(key, document, trapHandlers[key], options);
    });
    return true;
  }
  return false;
}
function trapOff(name, el, handler, options) {
  if (name === "mousemoveoutside" || name === "clickoutside") {
    const trapHandlers = ensureTrapHandlers(name, el, handler);
    Object.keys(trapHandlers).forEach((key) => {
      off(key, document, trapHandlers[key], options);
    });
    return true;
  }
  return false;
}
function createDelegate() {
  if (typeof window === "undefined") {
    return {
      on: () => {
      },
      off: () => {
      }
    };
  }
  const propagationStopped = /* @__PURE__ */ new WeakMap();
  const immediatePropagationStopped = /* @__PURE__ */ new WeakMap();
  function trackPropagation() {
    propagationStopped.set(this, true);
  }
  function trackImmediate() {
    propagationStopped.set(this, true);
    immediatePropagationStopped.set(this, true);
  }
  function spy(event, propName, fn) {
    const source = event[propName];
    event[propName] = function() {
      fn.apply(event, arguments);
      return source.apply(event, arguments);
    };
    return event;
  }
  function unspy(event, propName) {
    event[propName] = Event.prototype[propName];
  }
  const currentTargets = /* @__PURE__ */ new WeakMap();
  const currentTargetDescriptor = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function getCurrentTarget() {
    var _a;
    return (_a = currentTargets.get(this)) !== null && _a !== void 0 ? _a : null;
  }
  function defineCurrentTarget(event, getter) {
    if (currentTargetDescriptor === void 0)
      return;
    Object.defineProperty(event, "currentTarget", {
      configurable: true,
      enumerable: true,
      get: getter !== null && getter !== void 0 ? getter : currentTargetDescriptor.get
    });
  }
  const phaseToTypeToElToHandlers = {
    bubble: {},
    capture: {}
  };
  const typeToWindowEventHandlers = {};
  function createUnifiedHandler() {
    const delegeteHandler = function(e) {
      const { type, eventPhase, bubbles } = e;
      const target = getEventTarget(e);
      if (eventPhase === 2)
        return;
      const phase = eventPhase === 1 ? "capture" : "bubble";
      let cursor = target;
      const path = [];
      while (true) {
        if (cursor === null)
          cursor = window;
        path.push(cursor);
        if (cursor === window) {
          break;
        }
        cursor = cursor.parentNode || null;
      }
      const captureElToHandlers = phaseToTypeToElToHandlers.capture[type];
      const bubbleElToHandlers = phaseToTypeToElToHandlers.bubble[type];
      spy(e, "stopPropagation", trackPropagation);
      spy(e, "stopImmediatePropagation", trackImmediate);
      defineCurrentTarget(e, getCurrentTarget);
      if (phase === "capture") {
        if (captureElToHandlers === void 0)
          return;
        for (let i = path.length - 1; i >= 0; --i) {
          if (propagationStopped.has(e))
            break;
          const target2 = path[i];
          const handlers = captureElToHandlers.get(target2);
          if (handlers !== void 0) {
            currentTargets.set(e, target2);
            for (const handler of handlers) {
              if (immediatePropagationStopped.has(e))
                break;
              handler(e);
            }
          }
          if (i === 0 && !bubbles && bubbleElToHandlers !== void 0) {
            const bubbleHandlers = bubbleElToHandlers.get(target2);
            if (bubbleHandlers !== void 0) {
              for (const handler of bubbleHandlers) {
                if (immediatePropagationStopped.has(e))
                  break;
                handler(e);
              }
            }
          }
        }
      } else if (phase === "bubble") {
        if (bubbleElToHandlers === void 0)
          return;
        for (let i = 0; i < path.length; ++i) {
          if (propagationStopped.has(e))
            break;
          const target2 = path[i];
          const handlers = bubbleElToHandlers.get(target2);
          if (handlers !== void 0) {
            currentTargets.set(e, target2);
            for (const handler of handlers) {
              if (immediatePropagationStopped.has(e))
                break;
              handler(e);
            }
          }
        }
      }
      unspy(e, "stopPropagation");
      unspy(e, "stopImmediatePropagation");
      defineCurrentTarget(e);
    };
    delegeteHandler.displayName = "evtdUnifiedHandler";
    return delegeteHandler;
  }
  function createUnifiedWindowEventHandler() {
    const delegateHandler = function(e) {
      const { type, eventPhase } = e;
      if (eventPhase !== 2)
        return;
      const handlers = typeToWindowEventHandlers[type];
      if (handlers === void 0)
        return;
      handlers.forEach((handler) => handler(e));
    };
    delegateHandler.displayName = "evtdUnifiedWindowEventHandler";
    return delegateHandler;
  }
  const unifiedHandler = createUnifiedHandler();
  const unfiendWindowEventHandler = createUnifiedWindowEventHandler();
  function ensureElToHandlers(phase, type) {
    const phaseHandlers = phaseToTypeToElToHandlers[phase];
    if (phaseHandlers[type] === void 0) {
      phaseHandlers[type] = /* @__PURE__ */ new Map();
      window.addEventListener(type, unifiedHandler, phase === "capture");
    }
    return phaseHandlers[type];
  }
  function ensureWindowEventHandlers(type) {
    const windowEventHandlers = typeToWindowEventHandlers[type];
    if (windowEventHandlers === void 0) {
      typeToWindowEventHandlers[type] = /* @__PURE__ */ new Set();
      window.addEventListener(type, unfiendWindowEventHandler);
    }
    return typeToWindowEventHandlers[type];
  }
  function ensureHandlers(elToHandlers, el) {
    let elHandlers = elToHandlers.get(el);
    if (elHandlers === void 0) {
      elToHandlers.set(el, elHandlers = /* @__PURE__ */ new Set());
    }
    return elHandlers;
  }
  function handlerExist(el, phase, type, handler) {
    const elToHandlers = phaseToTypeToElToHandlers[phase][type];
    if (elToHandlers !== void 0) {
      const handlers = elToHandlers.get(el);
      if (handlers !== void 0) {
        if (handlers.has(handler))
          return true;
      }
    }
    return false;
  }
  function windowEventHandlerExist(type, handler) {
    const handlers = typeToWindowEventHandlers[type];
    if (handlers !== void 0) {
      if (handlers.has(handler)) {
        return true;
      }
    }
    return false;
  }
  function on2(type, el, handler, options) {
    let mergedHandler;
    if (typeof options === "object" && options.once === true) {
      mergedHandler = (e) => {
        off2(type, el, mergedHandler, options);
        handler(e);
      };
    } else {
      mergedHandler = handler;
    }
    const trapped = trapOn(type, el, mergedHandler, options);
    if (trapped)
      return;
    const phase = options === true || typeof options === "object" && options.capture === true ? "capture" : "bubble";
    const elToHandlers = ensureElToHandlers(phase, type);
    const handlers = ensureHandlers(elToHandlers, el);
    if (!handlers.has(mergedHandler))
      handlers.add(mergedHandler);
    if (el === window) {
      const windowEventHandlers = ensureWindowEventHandlers(type);
      if (!windowEventHandlers.has(mergedHandler)) {
        windowEventHandlers.add(mergedHandler);
      }
    }
  }
  function off2(type, el, handler, options) {
    const trapped = trapOff(type, el, handler, options);
    if (trapped)
      return;
    const capture = options === true || typeof options === "object" && options.capture === true;
    const phase = capture ? "capture" : "bubble";
    const elToHandlers = ensureElToHandlers(phase, type);
    const handlers = ensureHandlers(elToHandlers, el);
    if (el === window) {
      const mirrorPhase = capture ? "bubble" : "capture";
      if (!handlerExist(el, mirrorPhase, type, handler) && windowEventHandlerExist(type, handler)) {
        const windowEventHandlers = typeToWindowEventHandlers[type];
        windowEventHandlers.delete(handler);
        if (windowEventHandlers.size === 0) {
          window.removeEventListener(type, unfiendWindowEventHandler);
          typeToWindowEventHandlers[type] = void 0;
        }
      }
    }
    if (handlers.has(handler))
      handlers.delete(handler);
    if (handlers.size === 0) {
      elToHandlers.delete(el);
    }
    if (elToHandlers.size === 0) {
      window.removeEventListener(type, unifiedHandler, phase === "capture");
      phaseToTypeToElToHandlers[phase][type] = void 0;
    }
  }
  return {
    on: on2,
    off: off2
  };
}
const { on, off } = createDelegate();
function useCompitable(reactive, keys2) {
  return computed(() => {
    for (const key of keys2) {
      if (reactive[key] !== void 0)
        return reactive[key];
    }
    return reactive[keys2[keys2.length - 1]];
  });
}
const isIos = (typeof window === "undefined" ? false : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function useIsIos() {
  return isIos;
}
const internalSelectionMenuBodyInjectionKey = createInjectionKey("n-internal-select-menu-body");
const modalBodyInjectionKey = createInjectionKey("n-modal-body");
const drawerBodyInjectionKey = createInjectionKey("n-drawer-body");
const popoverBodyInjectionKey = createInjectionKey("n-popover-body");
const teleportDisabled = "__disabled__";
function useAdjustedTo(props) {
  const modal = inject(modalBodyInjectionKey, null);
  const drawer = inject(drawerBodyInjectionKey, null);
  const popover = inject(popoverBodyInjectionKey, null);
  const selectMenu = inject(internalSelectionMenuBodyInjectionKey, null);
  const fullscreenElementRef = ref();
  if (typeof document !== "undefined") {
    fullscreenElementRef.value = document.fullscreenElement;
    const handleFullscreenChange = () => {
      fullscreenElementRef.value = document.fullscreenElement;
    };
    onMounted(() => {
      on("fullscreenchange", document, handleFullscreenChange);
    });
    onBeforeUnmount(() => {
      off("fullscreenchange", document, handleFullscreenChange);
    });
  }
  return useMemo(() => {
    var _a;
    const { to } = props;
    if (to !== void 0) {
      if (to === false)
        return teleportDisabled;
      if (to === true)
        return fullscreenElementRef.value || "body";
      return to;
    }
    if (modal === null || modal === void 0 ? void 0 : modal.value) {
      return (_a = modal.value.$el) !== null && _a !== void 0 ? _a : modal.value;
    }
    if (drawer === null || drawer === void 0 ? void 0 : drawer.value)
      return drawer.value;
    if (popover === null || popover === void 0 ? void 0 : popover.value)
      return popover.value;
    if (selectMenu === null || selectMenu === void 0 ? void 0 : selectMenu.value)
      return selectMenu.value;
    return to !== null && to !== void 0 ? to : fullscreenElementRef.value || "body";
  });
}
useAdjustedTo.tdkey = teleportDisabled;
useAdjustedTo.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
let viewMeasurer = null;
function ensureViewBoundingRect() {
  if (viewMeasurer === null) {
    viewMeasurer = document.getElementById("v-binder-view-measurer");
    if (viewMeasurer === null) {
      viewMeasurer = document.createElement("div");
      viewMeasurer.id = "v-binder-view-measurer";
      const { style: style2 } = viewMeasurer;
      style2.position = "fixed";
      style2.left = "0";
      style2.right = "0";
      style2.top = "0";
      style2.bottom = "0";
      style2.pointerEvents = "none";
      style2.visibility = "hidden";
      document.body.appendChild(viewMeasurer);
    }
  }
  return viewMeasurer.getBoundingClientRect();
}
function getPointRect(x, y) {
  const viewRect = ensureViewBoundingRect();
  return {
    top: y,
    left: x,
    height: 0,
    width: 0,
    right: viewRect.width - x,
    bottom: viewRect.height - y
  };
}
function getRect(el) {
  const elRect = el.getBoundingClientRect();
  const viewRect = ensureViewBoundingRect();
  return {
    left: elRect.left - viewRect.left,
    top: elRect.top - viewRect.top,
    bottom: viewRect.height + viewRect.top - elRect.bottom,
    right: viewRect.width + viewRect.left - elRect.right,
    width: elRect.width,
    height: elRect.height
  };
}
function getParentNode(node) {
  if (node.nodeType === 9) {
    return null;
  }
  return node.parentNode;
}
function getScrollParent(node) {
  if (node === null)
    return null;
  const parentNode = getParentNode(node);
  if (parentNode === null) {
    return null;
  }
  if (parentNode.nodeType === 9) {
    return document;
  }
  if (parentNode.nodeType === 1) {
    const { overflow, overflowX, overflowY } = getComputedStyle(parentNode);
    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return parentNode;
    }
  }
  return getScrollParent(parentNode);
}
const Binder = defineComponent({
  name: "Binder",
  props: {
    syncTargetWithParent: Boolean,
    syncTarget: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    var _a;
    provide("VBinder", (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy);
    const VBinder2 = inject("VBinder", null);
    const targetRef = ref(null);
    const setTargetRef = (el) => {
      targetRef.value = el;
      if (VBinder2 && props.syncTargetWithParent) {
        VBinder2.setTargetRef(el);
      }
    };
    let scrollableNodes = [];
    const ensureScrollListener = () => {
      let cursor = targetRef.value;
      while (true) {
        cursor = getScrollParent(cursor);
        if (cursor === null)
          break;
        scrollableNodes.push(cursor);
      }
      for (const el of scrollableNodes) {
        on("scroll", el, onScroll, true);
      }
    };
    const removeScrollListeners = () => {
      for (const el of scrollableNodes) {
        off("scroll", el, onScroll, true);
      }
      scrollableNodes = [];
    };
    const followerScrollListeners = /* @__PURE__ */ new Set();
    const addScrollListener = (listener) => {
      if (followerScrollListeners.size === 0) {
        ensureScrollListener();
      }
      if (!followerScrollListeners.has(listener)) {
        followerScrollListeners.add(listener);
      }
    };
    const removeScrollListener = (listener) => {
      if (followerScrollListeners.has(listener)) {
        followerScrollListeners.delete(listener);
      }
      if (followerScrollListeners.size === 0) {
        removeScrollListeners();
      }
    };
    const onScroll = () => {
      beforeNextFrameOnce(onScrollRaf);
    };
    const onScrollRaf = () => {
      followerScrollListeners.forEach((listener) => listener());
    };
    const followerResizeListeners = /* @__PURE__ */ new Set();
    const addResizeListener = (listener) => {
      if (followerResizeListeners.size === 0) {
        on("resize", window, onResize);
      }
      if (!followerResizeListeners.has(listener)) {
        followerResizeListeners.add(listener);
      }
    };
    const removeResizeListener = (listener) => {
      if (followerResizeListeners.has(listener)) {
        followerResizeListeners.delete(listener);
      }
      if (followerResizeListeners.size === 0) {
        off("resize", window, onResize);
      }
    };
    const onResize = () => {
      followerResizeListeners.forEach((listener) => listener());
    };
    onBeforeUnmount(() => {
      off("resize", window, onResize);
      removeScrollListeners();
    });
    return {
      targetRef,
      setTargetRef,
      addScrollListener,
      removeScrollListener,
      addResizeListener,
      removeResizeListener
    };
  },
  render() {
    return getSlot("binder", this.$slots);
  }
});
const VBinder = Binder;
const VTarget = defineComponent({
  name: "Target",
  setup() {
    const { setTargetRef, syncTarget } = inject("VBinder");
    const setTargetDirective = {
      mounted: setTargetRef,
      updated: setTargetRef
    };
    return {
      syncTarget,
      setTargetDirective
    };
  },
  render() {
    const { syncTarget, setTargetDirective } = this;
    if (syncTarget) {
      return withDirectives(getFirstVNode("follower", this.$slots), [
        [setTargetDirective]
      ]);
    }
    return getFirstVNode("follower", this.$slots);
  }
});
const ctxKey$1 = "@@mmoContext";
const mousemoveoutside = {
  mounted(el, { value }) {
    el[ctxKey$1] = {
      handler: void 0
    };
    if (typeof value === "function") {
      el[ctxKey$1].handler = value;
      on("mousemoveoutside", el, value);
    }
  },
  updated(el, { value }) {
    const ctx2 = el[ctxKey$1];
    if (typeof value === "function") {
      if (ctx2.handler) {
        if (ctx2.handler !== value) {
          off("mousemoveoutside", el, ctx2.handler);
          ctx2.handler = value;
          on("mousemoveoutside", el, value);
        }
      } else {
        el[ctxKey$1].handler = value;
        on("mousemoveoutside", el, value);
      }
    } else {
      if (ctx2.handler) {
        off("mousemoveoutside", el, ctx2.handler);
        ctx2.handler = void 0;
      }
    }
  },
  unmounted(el) {
    const { handler } = el[ctxKey$1];
    if (handler) {
      off("mousemoveoutside", el, handler);
    }
    el[ctxKey$1].handler = void 0;
  }
};
const mousemoveoutside$1 = mousemoveoutside;
const ctxKey = "@@coContext";
const clickoutside = {
  mounted(el, { value, modifiers }) {
    el[ctxKey] = {
      handler: void 0
    };
    if (typeof value === "function") {
      el[ctxKey].handler = value;
      on("clickoutside", el, value, {
        capture: modifiers.capture
      });
    }
  },
  updated(el, { value, modifiers }) {
    const ctx2 = el[ctxKey];
    if (typeof value === "function") {
      if (ctx2.handler) {
        if (ctx2.handler !== value) {
          off("clickoutside", el, ctx2.handler, {
            capture: modifiers.capture
          });
          ctx2.handler = value;
          on("clickoutside", el, value, {
            capture: modifiers.capture
          });
        }
      } else {
        el[ctxKey].handler = value;
        on("clickoutside", el, value, {
          capture: modifiers.capture
        });
      }
    } else {
      if (ctx2.handler) {
        off("clickoutside", el, ctx2.handler, {
          capture: modifiers.capture
        });
        ctx2.handler = void 0;
      }
    }
  },
  unmounted(el, { modifiers }) {
    const { handler } = el[ctxKey];
    if (handler) {
      off("clickoutside", el, handler, {
        capture: modifiers.capture
      });
    }
    el[ctxKey].handler = void 0;
  }
};
const clickoutside$1 = clickoutside;
function warn(location, message) {
  console.error(`[vdirs/${location}]: ${message}`);
}
class ZIndexManager {
  constructor() {
    this.elementZIndex = /* @__PURE__ */ new Map();
    this.nextZIndex = 2e3;
  }
  get elementCount() {
    return this.elementZIndex.size;
  }
  ensureZIndex(el, zIndex) {
    const { elementZIndex } = this;
    if (zIndex !== void 0) {
      el.style.zIndex = `${zIndex}`;
      elementZIndex.delete(el);
      return;
    }
    const { nextZIndex } = this;
    if (elementZIndex.has(el)) {
      const currentZIndex = elementZIndex.get(el);
      if (currentZIndex + 1 === this.nextZIndex)
        return;
    }
    el.style.zIndex = `${nextZIndex}`;
    elementZIndex.set(el, nextZIndex);
    this.nextZIndex = nextZIndex + 1;
    this.squashState();
  }
  unregister(el, zIndex) {
    const { elementZIndex } = this;
    if (elementZIndex.has(el)) {
      elementZIndex.delete(el);
    } else if (zIndex === void 0) {
      warn("z-index-manager/unregister-element", "Element not found when unregistering.");
    }
    this.squashState();
  }
  squashState() {
    const { elementCount } = this;
    if (!elementCount) {
      this.nextZIndex = 2e3;
    }
    if (this.nextZIndex - elementCount > 2500)
      this.rearrange();
  }
  rearrange() {
    const elementZIndexPair = Array.from(this.elementZIndex.entries());
    elementZIndexPair.sort((pair1, pair2) => {
      return pair1[1] - pair2[1];
    });
    this.nextZIndex = 2e3;
    elementZIndexPair.forEach((pair) => {
      const el = pair[0];
      const zIndex = this.nextZIndex++;
      if (`${zIndex}` !== el.style.zIndex)
        el.style.zIndex = `${zIndex}`;
    });
  }
}
const zIndexManager = new ZIndexManager();
const ctx = "@@ziContext";
const zindexable = {
  mounted(el, bindings) {
    const { value = {} } = bindings;
    const { zIndex, enabled } = value;
    el[ctx] = {
      enabled: !!enabled,
      initialized: false
    };
    if (enabled) {
      zIndexManager.ensureZIndex(el, zIndex);
      el[ctx].initialized = true;
    }
  },
  updated(el, bindings) {
    const { value = {} } = bindings;
    const { zIndex, enabled } = value;
    const cachedEnabled = el[ctx].enabled;
    if (enabled && !cachedEnabled) {
      zIndexManager.ensureZIndex(el, zIndex);
      el[ctx].initialized = true;
    }
    el[ctx].enabled = !!enabled;
  },
  unmounted(el, bindings) {
    if (!el[ctx].initialized)
      return;
    const { value = {} } = bindings;
    const { zIndex } = value;
    zIndexManager.unregister(el, zIndex);
  }
};
const zindexable$1 = zindexable;
const { c } = CssRender();
const cssrAnchorMetaName = "vueuc-style";
function resolveTo(selector) {
  if (typeof selector === "string") {
    return document.querySelector(selector);
  }
  return selector();
}
const oppositionPositions = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
};
const oppositeAligns = {
  start: "end",
  center: "center",
  end: "start"
};
const propToCompare = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
};
const transformOrigins = {
  "bottom-start": "top left",
  bottom: "top center",
  "bottom-end": "top right",
  "top-start": "bottom left",
  top: "bottom center",
  "top-end": "bottom right",
  "right-start": "top left",
  right: "center left",
  "right-end": "bottom left",
  "left-start": "top right",
  left: "center right",
  "left-end": "bottom right"
};
const overlapTransformOrigin = {
  "bottom-start": "bottom left",
  bottom: "bottom center",
  "bottom-end": "bottom right",
  "top-start": "top left",
  top: "top center",
  "top-end": "top right",
  "right-start": "top right",
  right: "center right",
  "right-end": "bottom right",
  "left-start": "top left",
  left: "center left",
  "left-end": "bottom left"
};
const oppositeAlignCssPositionProps = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
};
const keepOffsetDirection = {
  top: true,
  bottom: false,
  left: true,
  right: false
  // left--
};
const cssPositionToOppositeAlign = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function getPlacementAndOffsetOfFollower(placement, targetRect, followerRect, shift, flip, overlap) {
  if (!flip || overlap) {
    return { placement, top: 0, left: 0 };
  }
  const [position, align] = placement.split("-");
  let properAlign = align !== null && align !== void 0 ? align : "center";
  let properOffset = {
    top: 0,
    left: 0
  };
  const deriveOffset = (oppositeAlignCssSizeProp, alignCssPositionProp, offsetVertically2) => {
    let left = 0;
    let top = 0;
    const diff = followerRect[oppositeAlignCssSizeProp] - targetRect[alignCssPositionProp] - targetRect[oppositeAlignCssSizeProp];
    if (diff > 0 && shift) {
      if (offsetVertically2) {
        top = keepOffsetDirection[alignCssPositionProp] ? diff : -diff;
      } else {
        left = keepOffsetDirection[alignCssPositionProp] ? diff : -diff;
      }
    }
    return {
      left,
      top
    };
  };
  const offsetVertically = position === "left" || position === "right";
  if (properAlign !== "center") {
    const oppositeAlignCssPositionProp = oppositeAlignCssPositionProps[placement];
    const currentAlignCssPositionProp = oppositionPositions[oppositeAlignCssPositionProp];
    const oppositeAlignCssSizeProp = propToCompare[oppositeAlignCssPositionProp];
    if (followerRect[oppositeAlignCssSizeProp] > targetRect[oppositeAlignCssSizeProp]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        targetRect[oppositeAlignCssPositionProp] + targetRect[oppositeAlignCssSizeProp] < followerRect[oppositeAlignCssSizeProp]
      ) {
        const followerOverTargetSize = (followerRect[oppositeAlignCssSizeProp] - targetRect[oppositeAlignCssSizeProp]) / 2;
        if (targetRect[oppositeAlignCssPositionProp] < followerOverTargetSize || targetRect[currentAlignCssPositionProp] < followerOverTargetSize) {
          if (targetRect[oppositeAlignCssPositionProp] < targetRect[currentAlignCssPositionProp]) {
            properAlign = oppositeAligns[align];
            properOffset = deriveOffset(oppositeAlignCssSizeProp, currentAlignCssPositionProp, offsetVertically);
          } else {
            properOffset = deriveOffset(oppositeAlignCssSizeProp, oppositeAlignCssPositionProp, offsetVertically);
          }
        } else {
          properAlign = "center";
        }
      }
    } else if (followerRect[oppositeAlignCssSizeProp] < targetRect[oppositeAlignCssSizeProp]) {
      if (targetRect[currentAlignCssPositionProp] < 0 && // opposite align has larger space
      // ------------[   target   ]
      // ----------------[follower]
      targetRect[oppositeAlignCssPositionProp] > targetRect[currentAlignCssPositionProp]) {
        properAlign = oppositeAligns[align];
      }
    }
  } else {
    const possibleAlternativeAlignCssPositionProp1 = position === "bottom" || position === "top" ? "left" : "top";
    const possibleAlternativeAlignCssPositionProp2 = oppositionPositions[possibleAlternativeAlignCssPositionProp1];
    const alternativeAlignCssSizeProp = propToCompare[possibleAlternativeAlignCssPositionProp1];
    const followerOverTargetSize = (followerRect[alternativeAlignCssSizeProp] - targetRect[alternativeAlignCssSizeProp]) / 2;
    if (
      // center is not enough
      // ----------- [ target ]--|
      // -------[     follower     ]
      targetRect[possibleAlternativeAlignCssPositionProp1] < followerOverTargetSize || targetRect[possibleAlternativeAlignCssPositionProp2] < followerOverTargetSize
    ) {
      if (targetRect[possibleAlternativeAlignCssPositionProp1] > targetRect[possibleAlternativeAlignCssPositionProp2]) {
        properAlign = cssPositionToOppositeAlign[possibleAlternativeAlignCssPositionProp1];
        properOffset = deriveOffset(alternativeAlignCssSizeProp, possibleAlternativeAlignCssPositionProp1, offsetVertically);
      } else {
        properAlign = cssPositionToOppositeAlign[possibleAlternativeAlignCssPositionProp2];
        properOffset = deriveOffset(alternativeAlignCssSizeProp, possibleAlternativeAlignCssPositionProp2, offsetVertically);
      }
    }
  }
  let properPosition = position;
  if (
    // space is not enough
    targetRect[position] < followerRect[propToCompare[position]] && // opposite position's space is larger
    targetRect[position] < targetRect[oppositionPositions[position]]
  ) {
    properPosition = oppositionPositions[position];
  }
  return {
    placement: properAlign !== "center" ? `${properPosition}-${properAlign}` : properPosition,
    left: properOffset.left,
    top: properOffset.top
  };
}
function getProperTransformOrigin(placement, overlap) {
  if (overlap)
    return overlapTransformOrigin[placement];
  return transformOrigins[placement];
}
function getOffset(placement, offsetRect, targetRect, offsetTopToStandardPlacement, offsetLeftToStandardPlacement, overlap) {
  if (overlap) {
    switch (placement) {
      case "bottom-start":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left)}px`,
          transform: "translateY(-100%)"
        };
      case "bottom-end":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
          transform: "translateX(-100%) translateY(-100%)"
        };
      case "top-start":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left)}px`,
          transform: ""
        };
      case "top-end":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
          transform: "translateX(-100%)"
        };
      case "right-start":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
          transform: "translateX(-100%)"
        };
      case "right-end":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
          transform: "translateX(-100%) translateY(-100%)"
        };
      case "left-start":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left)}px`,
          transform: ""
        };
      case "left-end":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left)}px`,
          transform: "translateY(-100%)"
        };
      case "top":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width / 2)}px`,
          transform: "translateX(-50%)"
        };
      case "right":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height / 2)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
          transform: "translateX(-100%) translateY(-50%)"
        };
      case "left":
        return {
          top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height / 2)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left)}px`,
          transform: "translateY(-50%)"
        };
      case "bottom":
      default:
        return {
          top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
          left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width / 2)}px`,
          transform: "translateX(-50%) translateY(-100%)"
        };
    }
  }
  switch (placement) {
    case "bottom-start":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
        transform: ""
      };
    case "bottom-end":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width + offsetLeftToStandardPlacement)}px`,
        transform: "translateX(-100%)"
      };
    case "top-start":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
        transform: "translateY(-100%)"
      };
    case "top-end":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width + offsetLeftToStandardPlacement)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "right-start":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width + offsetLeftToStandardPlacement)}px`,
        transform: ""
      };
    case "right-end":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width + offsetLeftToStandardPlacement)}px`,
        transform: "translateY(-100%)"
      };
    case "left-start":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
        transform: "translateX(-100%)"
      };
    case "left-end":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "top":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width / 2 + offsetLeftToStandardPlacement)}px`,
        transform: "translateY(-100%) translateX(-50%)"
      };
    case "right":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height / 2 + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width + offsetLeftToStandardPlacement)}px`,
        transform: "translateY(-50%)"
      };
    case "left":
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height / 2 + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
        transform: "translateY(-50%) translateX(-100%)"
      };
    case "bottom":
    default:
      return {
        top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height + offsetTopToStandardPlacement)}px`,
        left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width / 2 + offsetLeftToStandardPlacement)}px`,
        transform: "translateX(-50%)"
      };
  }
}
const style$3 = c([
  c(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  c(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    c("> *", {
      pointerEvents: "all"
    })
  ])
]);
const VFollower = defineComponent({
  name: "Follower",
  inheritAttrs: false,
  props: {
    show: Boolean,
    enabled: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String,
      default: "bottom"
    },
    syncTrigger: {
      type: Array,
      default: ["resize", "scroll"]
    },
    to: [String, Object],
    flip: {
      type: Boolean,
      default: true
    },
    internalShift: Boolean,
    x: Number,
    y: Number,
    width: String,
    minWidth: String,
    containerClass: String,
    teleportDisabled: Boolean,
    zindexable: {
      type: Boolean,
      default: true
    },
    zIndex: Number,
    overlap: Boolean
  },
  setup(props) {
    const VBinder2 = inject("VBinder");
    const mergedEnabledRef = useMemo(() => {
      return props.enabled !== void 0 ? props.enabled : props.show;
    });
    const followerRef = ref(null);
    const offsetContainerRef = ref(null);
    const ensureListeners = () => {
      const { syncTrigger } = props;
      if (syncTrigger.includes("scroll")) {
        VBinder2.addScrollListener(syncPosition);
      }
      if (syncTrigger.includes("resize")) {
        VBinder2.addResizeListener(syncPosition);
      }
    };
    const removeListeners = () => {
      VBinder2.removeScrollListener(syncPosition);
      VBinder2.removeResizeListener(syncPosition);
    };
    onMounted(() => {
      if (mergedEnabledRef.value) {
        syncPosition();
        ensureListeners();
      }
    });
    const ssrAdapter = useSsrAdapter();
    style$3.mount({
      id: "vueuc/binder",
      head: true,
      anchorMetaName: cssrAnchorMetaName,
      ssr: ssrAdapter
    });
    onBeforeUnmount(() => {
      removeListeners();
    });
    onFontsReady(() => {
      if (mergedEnabledRef.value) {
        syncPosition();
      }
    });
    const syncPosition = () => {
      if (!mergedEnabledRef.value) {
        return;
      }
      const follower = followerRef.value;
      if (follower === null)
        return;
      const target = VBinder2.targetRef;
      const { x, y, overlap } = props;
      const targetRect = x !== void 0 && y !== void 0 ? getPointRect(x, y) : getRect(target);
      follower.style.setProperty("--v-target-width", `${Math.round(targetRect.width)}px`);
      follower.style.setProperty("--v-target-height", `${Math.round(targetRect.height)}px`);
      const { width, minWidth, placement, internalShift, flip } = props;
      follower.setAttribute("v-placement", placement);
      if (overlap) {
        follower.setAttribute("v-overlap", "");
      } else {
        follower.removeAttribute("v-overlap");
      }
      const { style: style2 } = follower;
      if (width === "target") {
        style2.width = `${targetRect.width}px`;
      } else if (width !== void 0) {
        style2.width = width;
      } else {
        style2.width = "";
      }
      if (minWidth === "target") {
        style2.minWidth = `${targetRect.width}px`;
      } else if (minWidth !== void 0) {
        style2.minWidth = minWidth;
      } else {
        style2.minWidth = "";
      }
      const followerRect = getRect(follower);
      const offsetContainerRect = getRect(offsetContainerRef.value);
      const { left: offsetLeftToStandardPlacement, top: offsetTopToStandardPlacement, placement: properPlacement } = getPlacementAndOffsetOfFollower(placement, targetRect, followerRect, internalShift, flip, overlap);
      const properTransformOrigin = getProperTransformOrigin(properPlacement, overlap);
      const { left, top, transform } = getOffset(properPlacement, offsetContainerRect, targetRect, offsetTopToStandardPlacement, offsetLeftToStandardPlacement, overlap);
      follower.setAttribute("v-placement", properPlacement);
      follower.style.setProperty("--v-offset-left", `${Math.round(offsetLeftToStandardPlacement)}px`);
      follower.style.setProperty("--v-offset-top", `${Math.round(offsetTopToStandardPlacement)}px`);
      follower.style.transform = `translateX(${left}) translateY(${top}) ${transform}`;
      follower.style.setProperty("--v-transform-origin", properTransformOrigin);
      follower.style.transformOrigin = properTransformOrigin;
    };
    watch(mergedEnabledRef, (value) => {
      if (value) {
        ensureListeners();
        syncOnNextTick();
      } else {
        removeListeners();
      }
    });
    const syncOnNextTick = () => {
      nextTick().then(syncPosition).catch((e) => console.error(e));
    };
    [
      "placement",
      "x",
      "y",
      "internalShift",
      "flip",
      "width",
      "overlap",
      "minWidth"
    ].forEach((prop) => {
      watch(toRef(props, prop), syncPosition);
    });
    ["teleportDisabled"].forEach((prop) => {
      watch(toRef(props, prop), syncOnNextTick);
    });
    watch(toRef(props, "syncTrigger"), (value) => {
      if (!value.includes("resize")) {
        VBinder2.removeResizeListener(syncPosition);
      } else {
        VBinder2.addResizeListener(syncPosition);
      }
      if (!value.includes("scroll")) {
        VBinder2.removeScrollListener(syncPosition);
      } else {
        VBinder2.addScrollListener(syncPosition);
      }
    });
    const isMountedRef = isMounted();
    const mergedToRef = useMemo(() => {
      const { to } = props;
      if (to !== void 0)
        return to;
      if (isMountedRef.value) {
        return void 0;
      }
      return void 0;
    });
    return {
      VBinder: VBinder2,
      mergedEnabled: mergedEnabledRef,
      offsetContainerRef,
      followerRef,
      mergedTo: mergedToRef,
      syncPosition
    };
  },
  render() {
    return h(LazyTeleport, {
      show: this.show,
      to: this.mergedTo,
      disabled: this.teleportDisabled
    }, {
      default: () => {
        var _a, _b;
        const vNode = h("div", {
          class: ["v-binder-follower-container", this.containerClass],
          ref: "offsetContainerRef"
        }, [
          h("div", {
            class: "v-binder-follower-content",
            ref: "followerRef"
          }, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a))
        ]);
        if (this.zindexable) {
          return withDirectives(vNode, [
            [
              zindexable$1,
              {
                enabled: this.mergedEnabled,
                zIndex: this.zIndex
              }
            ]
          ]);
        }
        return vNode;
      }
    });
  }
});
function isHTMLElement(node) {
  return node instanceof HTMLElement;
}
function focusFirstDescendant(node) {
  for (let i = 0; i < node.childNodes.length; i++) {
    const child = node.childNodes[i];
    if (isHTMLElement(child)) {
      if (attemptFocus(child) || focusFirstDescendant(child)) {
        return true;
      }
    }
  }
  return false;
}
function focusLastDescendant(element) {
  for (let i = element.childNodes.length - 1; i >= 0; i--) {
    const child = element.childNodes[i];
    if (isHTMLElement(child)) {
      if (attemptFocus(child) || focusLastDescendant(child)) {
        return true;
      }
    }
  }
  return false;
}
function attemptFocus(element) {
  if (!isFocusable(element)) {
    return false;
  }
  try {
    element.focus({ preventScroll: true });
  } catch (e) {
  }
  return document.activeElement === element;
}
function isFocusable(element) {
  if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null) {
    return true;
  }
  if (element.getAttribute("disabled")) {
    return false;
  }
  switch (element.nodeName) {
    case "A":
      return !!element.href && element.rel !== "ignore";
    case "INPUT":
      return element.type !== "hidden" && element.type !== "file";
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return true;
    default:
      return false;
  }
}
let stack = [];
const FocusTrap = defineComponent({
  name: "FocusTrap",
  props: {
    disabled: Boolean,
    active: Boolean,
    autoFocus: {
      type: Boolean,
      default: true
    },
    onEsc: Function,
    initialFocusTo: String,
    finalFocusTo: String,
    returnFocusOnDeactivated: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const id = createId();
    const focusableStartRef = ref(null);
    const focusableEndRef = ref(null);
    let activated = false;
    let ignoreInternalFocusChange = false;
    const lastFocusedElement = typeof document === "undefined" ? null : document.activeElement;
    function isCurrentActive() {
      const currentActiveId = stack[stack.length - 1];
      return currentActiveId === id;
    }
    function handleDocumentKeydown(e) {
      var _a;
      if (e.code === "Escape") {
        if (isCurrentActive()) {
          (_a = props.onEsc) === null || _a === void 0 ? void 0 : _a.call(props, e);
        }
      }
    }
    onMounted(() => {
      watch(() => props.active, (value) => {
        if (value) {
          activate();
          on("keydown", document, handleDocumentKeydown);
        } else {
          off("keydown", document, handleDocumentKeydown);
          if (activated) {
            deactivate();
          }
        }
      }, {
        immediate: true
      });
    });
    onBeforeUnmount(() => {
      off("keydown", document, handleDocumentKeydown);
      if (activated)
        deactivate();
    });
    function handleDocumentFocus(e) {
      if (ignoreInternalFocusChange)
        return;
      if (isCurrentActive()) {
        const mainEl = getMainEl();
        if (mainEl === null)
          return;
        if (mainEl.contains(getPreciseEventTarget(e)))
          return;
        resetFocusTo("first");
      }
    }
    function getMainEl() {
      const focusableStartEl = focusableStartRef.value;
      if (focusableStartEl === null)
        return null;
      let mainEl = focusableStartEl;
      while (true) {
        mainEl = mainEl.nextSibling;
        if (mainEl === null)
          break;
        if (mainEl instanceof Element && mainEl.tagName === "DIV") {
          break;
        }
      }
      return mainEl;
    }
    function activate() {
      var _a;
      if (props.disabled)
        return;
      stack.push(id);
      if (props.autoFocus) {
        const { initialFocusTo } = props;
        if (initialFocusTo === void 0) {
          resetFocusTo("first");
        } else {
          (_a = resolveTo(initialFocusTo)) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
        }
      }
      activated = true;
      document.addEventListener("focus", handleDocumentFocus, true);
    }
    function deactivate() {
      var _a;
      if (props.disabled)
        return;
      document.removeEventListener("focus", handleDocumentFocus, true);
      stack = stack.filter((idInStack) => idInStack !== id);
      if (isCurrentActive())
        return;
      const { finalFocusTo } = props;
      if (finalFocusTo !== void 0) {
        (_a = resolveTo(finalFocusTo)) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
      } else if (props.returnFocusOnDeactivated) {
        if (lastFocusedElement instanceof HTMLElement) {
          ignoreInternalFocusChange = true;
          lastFocusedElement.focus({ preventScroll: true });
          ignoreInternalFocusChange = false;
        }
      }
    }
    function resetFocusTo(target) {
      if (!isCurrentActive())
        return;
      if (props.active) {
        const focusableStartEl = focusableStartRef.value;
        const focusableEndEl = focusableEndRef.value;
        if (focusableStartEl !== null && focusableEndEl !== null) {
          const mainEl = getMainEl();
          if (mainEl == null || mainEl === focusableEndEl) {
            ignoreInternalFocusChange = true;
            focusableStartEl.focus({ preventScroll: true });
            ignoreInternalFocusChange = false;
            return;
          }
          ignoreInternalFocusChange = true;
          const focused = target === "first" ? focusFirstDescendant(mainEl) : focusLastDescendant(mainEl);
          ignoreInternalFocusChange = false;
          if (!focused) {
            ignoreInternalFocusChange = true;
            focusableStartEl.focus({ preventScroll: true });
            ignoreInternalFocusChange = false;
          }
        }
      }
    }
    function handleStartFocus(e) {
      if (ignoreInternalFocusChange)
        return;
      const mainEl = getMainEl();
      if (mainEl === null)
        return;
      if (e.relatedTarget !== null && mainEl.contains(e.relatedTarget)) {
        resetFocusTo("last");
      } else {
        resetFocusTo("first");
      }
    }
    function handleEndFocus(e) {
      if (ignoreInternalFocusChange)
        return;
      if (e.relatedTarget !== null && e.relatedTarget === focusableStartRef.value) {
        resetFocusTo("last");
      } else {
        resetFocusTo("first");
      }
    }
    return {
      focusableStartRef,
      focusableEndRef,
      focusableStyle: "position: absolute; height: 0; width: 0;",
      handleStartFocus,
      handleEndFocus
    };
  },
  render() {
    const { default: defaultSlot } = this.$slots;
    if (defaultSlot === void 0)
      return null;
    if (this.disabled)
      return defaultSlot();
    const { active, focusableStyle } = this;
    return h(Fragment, null, [
      h("div", {
        "aria-hidden": "true",
        tabindex: active ? "0" : "-1",
        ref: "focusableStartRef",
        style: focusableStyle,
        onFocus: this.handleStartFocus
      }),
      defaultSlot(),
      h("div", {
        "aria-hidden": "true",
        style: focusableStyle,
        ref: "focusableEndRef",
        tabindex: active ? "0" : "-1",
        onFocus: this.handleEndFocus
      })
    ]);
  }
});
function useReactivated(callback) {
  const isDeactivatedRef = { isDeactivated: false };
  let activateStateInitialized = false;
  onActivated(() => {
    isDeactivatedRef.isDeactivated = false;
    if (!activateStateInitialized) {
      activateStateInitialized = true;
      return;
    }
    callback();
  });
  onDeactivated(() => {
    isDeactivatedRef.isDeactivated = true;
    if (!activateStateInitialized) {
      activateStateInitialized = true;
    }
  });
  return isDeactivatedRef;
}
var WeakMap$1 = getNative(root, "WeakMap");
const WeakMap$2 = WeakMap$1;
var nativeKeys = overArg(Object.keys, Object);
const nativeKeys$1 = nativeKeys;
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$2.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
const stringToPath$1 = stringToPath;
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath$1(toString(value));
}
var INFINITY = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : void 0;
}
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
function arrayPush(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1, length = array == null ? 0 : array.length;
  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}
function basePropertyOf(object) {
  return function(key) {
    return object == null ? void 0 : object[key];
  };
}
var deburredLetters = {
  // Latin-1 Supplement block.
  "À": "A",
  "Á": "A",
  "Â": "A",
  "Ã": "A",
  "Ä": "A",
  "Å": "A",
  "à": "a",
  "á": "a",
  "â": "a",
  "ã": "a",
  "ä": "a",
  "å": "a",
  "Ç": "C",
  "ç": "c",
  "Ð": "D",
  "ð": "d",
  "È": "E",
  "É": "E",
  "Ê": "E",
  "Ë": "E",
  "è": "e",
  "é": "e",
  "ê": "e",
  "ë": "e",
  "Ì": "I",
  "Í": "I",
  "Î": "I",
  "Ï": "I",
  "ì": "i",
  "í": "i",
  "î": "i",
  "ï": "i",
  "Ñ": "N",
  "ñ": "n",
  "Ò": "O",
  "Ó": "O",
  "Ô": "O",
  "Õ": "O",
  "Ö": "O",
  "Ø": "O",
  "ò": "o",
  "ó": "o",
  "ô": "o",
  "õ": "o",
  "ö": "o",
  "ø": "o",
  "Ù": "U",
  "Ú": "U",
  "Û": "U",
  "Ü": "U",
  "ù": "u",
  "ú": "u",
  "û": "u",
  "ü": "u",
  "Ý": "Y",
  "ý": "y",
  "ÿ": "y",
  "Æ": "Ae",
  "æ": "ae",
  "Þ": "Th",
  "þ": "th",
  "ß": "ss",
  // Latin Extended-A block.
  "Ā": "A",
  "Ă": "A",
  "Ą": "A",
  "ā": "a",
  "ă": "a",
  "ą": "a",
  "Ć": "C",
  "Ĉ": "C",
  "Ċ": "C",
  "Č": "C",
  "ć": "c",
  "ĉ": "c",
  "ċ": "c",
  "č": "c",
  "Ď": "D",
  "Đ": "D",
  "ď": "d",
  "đ": "d",
  "Ē": "E",
  "Ĕ": "E",
  "Ė": "E",
  "Ę": "E",
  "Ě": "E",
  "ē": "e",
  "ĕ": "e",
  "ė": "e",
  "ę": "e",
  "ě": "e",
  "Ĝ": "G",
  "Ğ": "G",
  "Ġ": "G",
  "Ģ": "G",
  "ĝ": "g",
  "ğ": "g",
  "ġ": "g",
  "ģ": "g",
  "Ĥ": "H",
  "Ħ": "H",
  "ĥ": "h",
  "ħ": "h",
  "Ĩ": "I",
  "Ī": "I",
  "Ĭ": "I",
  "Į": "I",
  "İ": "I",
  "ĩ": "i",
  "ī": "i",
  "ĭ": "i",
  "į": "i",
  "ı": "i",
  "Ĵ": "J",
  "ĵ": "j",
  "Ķ": "K",
  "ķ": "k",
  "ĸ": "k",
  "Ĺ": "L",
  "Ļ": "L",
  "Ľ": "L",
  "Ŀ": "L",
  "Ł": "L",
  "ĺ": "l",
  "ļ": "l",
  "ľ": "l",
  "ŀ": "l",
  "ł": "l",
  "Ń": "N",
  "Ņ": "N",
  "Ň": "N",
  "Ŋ": "N",
  "ń": "n",
  "ņ": "n",
  "ň": "n",
  "ŋ": "n",
  "Ō": "O",
  "Ŏ": "O",
  "Ő": "O",
  "ō": "o",
  "ŏ": "o",
  "ő": "o",
  "Ŕ": "R",
  "Ŗ": "R",
  "Ř": "R",
  "ŕ": "r",
  "ŗ": "r",
  "ř": "r",
  "Ś": "S",
  "Ŝ": "S",
  "Ş": "S",
  "Š": "S",
  "ś": "s",
  "ŝ": "s",
  "ş": "s",
  "š": "s",
  "Ţ": "T",
  "Ť": "T",
  "Ŧ": "T",
  "ţ": "t",
  "ť": "t",
  "ŧ": "t",
  "Ũ": "U",
  "Ū": "U",
  "Ŭ": "U",
  "Ů": "U",
  "Ű": "U",
  "Ų": "U",
  "ũ": "u",
  "ū": "u",
  "ŭ": "u",
  "ů": "u",
  "ű": "u",
  "ų": "u",
  "Ŵ": "W",
  "ŵ": "w",
  "Ŷ": "Y",
  "ŷ": "y",
  "Ÿ": "Y",
  "Ź": "Z",
  "Ż": "Z",
  "Ž": "Z",
  "ź": "z",
  "ż": "z",
  "ž": "z",
  "Ĳ": "IJ",
  "ĳ": "ij",
  "Œ": "Oe",
  "œ": "oe",
  "ŉ": "'n",
  "ſ": "s"
};
var deburrLetter = basePropertyOf(deburredLetters);
const deburrLetter$1 = deburrLetter;
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var rsComboMarksRange$1 = "\\u0300-\\u036f", reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$1 = "\\u20d0-\\u20ff", rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;
var rsCombo$1 = "[" + rsComboRange$1 + "]";
var reComboMark = RegExp(rsCombo$1, "g");
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter$1).replace(reComboMark, "");
}
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}
var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
var rsApos$1 = "['’]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos$1 + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos$1 + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
var reUnicodeWord = RegExp([
  rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
  rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
  rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
  rsUpper + "+" + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join("|"), "g");
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? void 0 : pattern;
  if (pattern === void 0) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}
var rsApos = "['’]";
var reApos = RegExp(rsApos, "g");
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
  };
}
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$2 = Object.prototype;
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
const getSymbols$1 = getSymbols;
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols$1);
}
var DataView = getNative(root, "DataView");
const DataView$1 = DataView;
var Promise$1 = getNative(root, "Promise");
const Promise$2 = Promise$1;
var Set$1 = getNative(root, "Set");
const Set$2 = Set$1;
var mapTag$1 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$1 = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag$1 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$2);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$1 || Map$1 && getTag(new Map$1()) != mapTag$1 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag$1 || WeakMap$2 && getTag(new WeakMap$2()) != weakMapTag) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$1;
        case mapCtorString:
          return mapTag$1;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$1;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
const getTag$1 = getTag;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack2) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack2.get(array);
  var othStacked = stack2.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack2.set(array, other);
  stack2.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack2) : customizer(arrValue, othValue, index, array, other, stack2);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack2))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack2))) {
      result = false;
      break;
    }
  }
  stack2["delete"](array);
  stack2["delete"](other);
  return result;
}
function mapToArray(map2) {
  var index = -1, result = Array(map2.size);
  map2.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
function setToArray(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack2) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack2.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack2.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack2);
      stack2["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack2) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack2.get(object);
  var othStacked = stack2.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack2.set(object, other);
  stack2.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack2) : customizer(objValue, othValue, key, object, other, stack2);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack2) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack2["delete"](object);
  stack2["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack2) {
  var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag$1(object), othTag = othIsArr ? arrayTag : getTag$1(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack2 || (stack2 = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack2) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack2);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack2 || (stack2 = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack2);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack2 || (stack2 = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack2);
}
function baseIsEqual(value, other, bitmask, customizer, stack2) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack2);
}
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack2 = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack2);
      }
      if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack2) : result)) {
        return false;
      }
    }
  }
  return true;
}
function isStrictComparable(value) {
  return value === value && !isObject(value);
}
function getMatchData(object) {
  var result = keys(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
function baseProperty(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var baseEach = createBaseEach(baseForOwn);
const baseEach$1 = baseEach;
function baseMap(collection, iteratee) {
  var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
  baseEach$1(collection, function(value, key, collection2) {
    result[++index] = iteratee(value, key, collection2);
  });
  return result;
}
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee));
}
var kebabCase = createCompounder(function(result, word, index) {
  return result + (index ? "-" : "") + word.toLowerCase();
});
const kebabCase$1 = kebabCase;
const RotateClockwiseIcon = replaceable("rotateClockwise", h(
  "svg",
  { viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
  h("path", { d: "M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z", fill: "currentColor" }),
  h("path", { d: "M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z", fill: "currentColor" })
));
const RotateCounterclockwiseIcon = replaceable("rotateClockwise", h(
  "svg",
  { viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
  h("path", { d: "M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z", fill: "currentColor" }),
  h("path", { d: "M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z", fill: "currentColor" })
));
const ZoomInIcon = replaceable("zoomIn", h(
  "svg",
  { viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
  h("path", { d: "M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z", fill: "currentColor" }),
  h("path", { d: "M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z", fill: "currentColor" })
));
const ZoomOutIcon = replaceable("zoomOut", h(
  "svg",
  { viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
  h("path", { d: "M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z", fill: "currentColor" }),
  h("path", { d: "M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z", fill: "currentColor" })
));
const ResizeSmallIcon = defineComponent({
  name: "ResizeSmall",
  render() {
    return h(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" },
      h(
        "g",
        { fill: "none" },
        h("path", { d: "M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z", fill: "currentColor" })
      )
    );
  }
});
const style$2 = cB("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [c$1(">", [cB("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [c$1("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), c$1(">", [cB("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)])])]), c$1(">, +", [cB("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 -webkit-user-select: none;
 `, [cM("horizontal", `
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `, [c$1(">", [cE("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), cM("vertical", `
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `, [c$1(">", [cE("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), cM("disabled", [c$1(">", [cE("scrollbar", {
  pointerEvents: "none"
})])]), c$1(">", [cE("scrollbar", `
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [fadeInTransition(), c$1("&:hover", {
  backgroundColor: "var(--n-scrollbar-color-hover)"
})])])])])]);
const scrollbarProps = Object.assign(Object.assign({}, useTheme.props), {
  size: {
    type: Number,
    default: 5
  },
  duration: {
    type: Number,
    default: 0
  },
  scrollable: {
    type: Boolean,
    default: true
  },
  xScrollable: Boolean,
  trigger: {
    type: String,
    default: "hover"
  },
  useUnifiedContainer: Boolean,
  triggerDisplayManually: Boolean,
  // If container is set, resize observer won't not attached
  container: Function,
  content: Function,
  containerClass: String,
  containerStyle: [String, Object],
  contentClass: String,
  contentStyle: [String, Object],
  horizontalRailStyle: [String, Object],
  verticalRailStyle: [String, Object],
  onScroll: Function,
  onWheel: Function,
  onResize: Function,
  internalOnUpdateScrollLeft: Function,
  internalHoistYRail: Boolean
});
const Scrollbar = defineComponent({
  name: "Scrollbar",
  props: scrollbarProps,
  inheritAttrs: false,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
    const rtlEnabledRef = useRtl("Scrollbar", mergedRtlRef, mergedClsPrefixRef);
    const wrapperRef = ref(null);
    const containerRef = ref(null);
    const contentRef = ref(null);
    const yRailRef = ref(null);
    const xRailRef = ref(null);
    const contentHeightRef = ref(null);
    const contentWidthRef = ref(null);
    const containerHeightRef = ref(null);
    const containerWidthRef = ref(null);
    const yRailSizeRef = ref(null);
    const xRailSizeRef = ref(null);
    const containerScrollTopRef = ref(0);
    const containerScrollLeftRef = ref(0);
    const isShowXBarRef = ref(false);
    const isShowYBarRef = ref(false);
    let yBarPressed = false;
    let xBarPressed = false;
    let xBarVanishTimerId;
    let yBarVanishTimerId;
    let memoYTop = 0;
    let memoXLeft = 0;
    let memoMouseX = 0;
    let memoMouseY = 0;
    const isIos2 = useIsIos();
    const yBarSizeRef = computed(() => {
      const { value: containerHeight } = containerHeightRef;
      const { value: contentHeight } = contentHeightRef;
      const { value: yRailSize } = yRailSizeRef;
      if (containerHeight === null || contentHeight === null || yRailSize === null) {
        return 0;
      } else {
        return Math.min(containerHeight, yRailSize * containerHeight / contentHeight + props.size * 1.5);
      }
    });
    const yBarSizePxRef = computed(() => {
      return `${yBarSizeRef.value}px`;
    });
    const xBarSizeRef = computed(() => {
      const { value: containerWidth } = containerWidthRef;
      const { value: contentWidth } = contentWidthRef;
      const { value: xRailSize } = xRailSizeRef;
      if (containerWidth === null || contentWidth === null || xRailSize === null) {
        return 0;
      } else {
        return xRailSize * containerWidth / contentWidth + props.size * 1.5;
      }
    });
    const xBarSizePxRef = computed(() => {
      return `${xBarSizeRef.value}px`;
    });
    const yBarTopRef = computed(() => {
      const { value: containerHeight } = containerHeightRef;
      const { value: containerScrollTop } = containerScrollTopRef;
      const { value: contentHeight } = contentHeightRef;
      const { value: yRailSize } = yRailSizeRef;
      if (containerHeight === null || contentHeight === null || yRailSize === null) {
        return 0;
      } else {
        const heightDiff = contentHeight - containerHeight;
        if (!heightDiff)
          return 0;
        return containerScrollTop / heightDiff * (yRailSize - yBarSizeRef.value);
      }
    });
    const yBarTopPxRef = computed(() => {
      return `${yBarTopRef.value}px`;
    });
    const xBarLeftRef = computed(() => {
      const { value: containerWidth } = containerWidthRef;
      const { value: containerScrollLeft } = containerScrollLeftRef;
      const { value: contentWidth } = contentWidthRef;
      const { value: xRailSize } = xRailSizeRef;
      if (containerWidth === null || contentWidth === null || xRailSize === null) {
        return 0;
      } else {
        const widthDiff = contentWidth - containerWidth;
        if (!widthDiff)
          return 0;
        return containerScrollLeft / widthDiff * (xRailSize - xBarSizeRef.value);
      }
    });
    const xBarLeftPxRef = computed(() => {
      return `${xBarLeftRef.value}px`;
    });
    const needYBarRef = computed(() => {
      const { value: containerHeight } = containerHeightRef;
      const { value: contentHeight } = contentHeightRef;
      return containerHeight !== null && contentHeight !== null && contentHeight > containerHeight;
    });
    const needXBarRef = computed(() => {
      const { value: containerWidth } = containerWidthRef;
      const { value: contentWidth } = contentWidthRef;
      return containerWidth !== null && contentWidth !== null && contentWidth > containerWidth;
    });
    const mergedShowXBarRef = computed(() => {
      const { trigger } = props;
      return trigger === "none" || isShowXBarRef.value;
    });
    const mergedShowYBarRef = computed(() => {
      const { trigger } = props;
      return trigger === "none" || isShowYBarRef.value;
    });
    const mergedContainerRef = computed(() => {
      const { container } = props;
      if (container)
        return container();
      return containerRef.value;
    });
    const mergedContentRef = computed(() => {
      const { content } = props;
      if (content)
        return content();
      return contentRef.value;
    });
    const activateState = useReactivated(() => {
      if (!props.container) {
        scrollTo({
          top: containerScrollTopRef.value,
          left: containerScrollLeftRef.value
        });
      }
    });
    const handleContentResize = () => {
      if (activateState.isDeactivated)
        return;
      sync();
    };
    const handleContainerResize = (e) => {
      if (activateState.isDeactivated)
        return;
      const { onResize } = props;
      if (onResize)
        onResize(e);
      sync();
    };
    const scrollTo = (options, y) => {
      if (!props.scrollable)
        return;
      if (typeof options === "number") {
        scrollToPosition(y !== null && y !== void 0 ? y : 0, options, 0, false, "auto");
        return;
      }
      const { left, top, index, elSize, position, behavior, el, debounce = true } = options;
      if (left !== void 0 || top !== void 0) {
        scrollToPosition(left !== null && left !== void 0 ? left : 0, top !== null && top !== void 0 ? top : 0, 0, false, behavior);
      }
      if (el !== void 0) {
        scrollToPosition(0, el.offsetTop, el.offsetHeight, debounce, behavior);
      } else if (index !== void 0 && elSize !== void 0) {
        scrollToPosition(0, index * elSize, elSize, debounce, behavior);
      } else if (position === "bottom") {
        scrollToPosition(0, Number.MAX_SAFE_INTEGER, 0, false, behavior);
      } else if (position === "top") {
        scrollToPosition(0, 0, 0, false, behavior);
      }
    };
    const scrollBy = (options, y) => {
      if (!props.scrollable)
        return;
      const { value: container } = mergedContainerRef;
      if (!container)
        return;
      if (typeof options === "object") {
        container.scrollBy(options);
      } else {
        container.scrollBy(options, y || 0);
      }
    };
    function scrollToPosition(left, top, elSize, debounce, behavior) {
      const { value: container } = mergedContainerRef;
      if (!container)
        return;
      if (debounce) {
        const { scrollTop, offsetHeight } = container;
        if (top > scrollTop) {
          if (top + elSize <= scrollTop + offsetHeight)
            ;
          else {
            container.scrollTo({
              left,
              top: top + elSize - offsetHeight,
              behavior
            });
          }
          return;
        }
      }
      container.scrollTo({
        left,
        top,
        behavior
      });
    }
    function handleMouseEnterWrapper() {
      showXBar();
      showYBar();
      sync();
    }
    function handleMouseLeaveWrapper() {
      hideBar();
    }
    function hideBar() {
      hideYBar();
      hideXBar();
    }
    function hideYBar() {
      if (yBarVanishTimerId !== void 0) {
        window.clearTimeout(yBarVanishTimerId);
      }
      yBarVanishTimerId = window.setTimeout(() => {
        isShowYBarRef.value = false;
      }, props.duration);
    }
    function hideXBar() {
      if (xBarVanishTimerId !== void 0) {
        window.clearTimeout(xBarVanishTimerId);
      }
      xBarVanishTimerId = window.setTimeout(() => {
        isShowXBarRef.value = false;
      }, props.duration);
    }
    function showXBar() {
      if (xBarVanishTimerId !== void 0) {
        window.clearTimeout(xBarVanishTimerId);
      }
      isShowXBarRef.value = true;
    }
    function showYBar() {
      if (yBarVanishTimerId !== void 0) {
        window.clearTimeout(yBarVanishTimerId);
      }
      isShowYBarRef.value = true;
    }
    function handleScroll(e) {
      const { onScroll } = props;
      if (onScroll)
        onScroll(e);
      syncScrollState();
    }
    function syncScrollState() {
      const { value: container } = mergedContainerRef;
      if (container) {
        containerScrollTopRef.value = container.scrollTop;
        containerScrollLeftRef.value = container.scrollLeft * ((rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? -1 : 1);
      }
    }
    function syncPositionState() {
      const { value: content } = mergedContentRef;
      if (content) {
        contentHeightRef.value = content.offsetHeight;
        contentWidthRef.value = content.offsetWidth;
      }
      const { value: container } = mergedContainerRef;
      if (container) {
        containerHeightRef.value = container.offsetHeight;
        containerWidthRef.value = container.offsetWidth;
      }
      const { value: xRailEl } = xRailRef;
      const { value: yRailEl } = yRailRef;
      if (xRailEl) {
        xRailSizeRef.value = xRailEl.offsetWidth;
      }
      if (yRailEl) {
        yRailSizeRef.value = yRailEl.offsetHeight;
      }
    }
    function syncUnifiedContainer() {
      const { value: container } = mergedContainerRef;
      if (container) {
        containerScrollTopRef.value = container.scrollTop;
        containerScrollLeftRef.value = container.scrollLeft * ((rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? -1 : 1);
        containerHeightRef.value = container.offsetHeight;
        containerWidthRef.value = container.offsetWidth;
        contentHeightRef.value = container.scrollHeight;
        contentWidthRef.value = container.scrollWidth;
      }
      const { value: xRailEl } = xRailRef;
      const { value: yRailEl } = yRailRef;
      if (xRailEl) {
        xRailSizeRef.value = xRailEl.offsetWidth;
      }
      if (yRailEl) {
        yRailSizeRef.value = yRailEl.offsetHeight;
      }
    }
    function sync() {
      if (!props.scrollable)
        return;
      if (props.useUnifiedContainer) {
        syncUnifiedContainer();
      } else {
        syncPositionState();
        syncScrollState();
      }
    }
    function isMouseUpAway(e) {
      var _a;
      return !((_a = wrapperRef.value) === null || _a === void 0 ? void 0 : _a.contains(getPreciseEventTarget(e)));
    }
    function handleXScrollMouseDown(e) {
      e.preventDefault();
      e.stopPropagation();
      xBarPressed = true;
      on("mousemove", window, handleXScrollMouseMove, true);
      on("mouseup", window, handleXScrollMouseUp, true);
      memoXLeft = containerScrollLeftRef.value;
      memoMouseX = (rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? window.innerWidth - e.clientX : e.clientX;
    }
    function handleXScrollMouseMove(e) {
      if (!xBarPressed)
        return;
      if (xBarVanishTimerId !== void 0) {
        window.clearTimeout(xBarVanishTimerId);
      }
      if (yBarVanishTimerId !== void 0) {
        window.clearTimeout(yBarVanishTimerId);
      }
      const { value: containerWidth } = containerWidthRef;
      const { value: contentWidth } = contentWidthRef;
      const { value: xBarSize } = xBarSizeRef;
      if (containerWidth === null || contentWidth === null)
        return;
      const dX = (rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? window.innerWidth - e.clientX - memoMouseX : e.clientX - memoMouseX;
      const dScrollLeft = dX * (contentWidth - containerWidth) / (containerWidth - xBarSize);
      const toScrollLeftUpperBound = contentWidth - containerWidth;
      let toScrollLeft = memoXLeft + dScrollLeft;
      toScrollLeft = Math.min(toScrollLeftUpperBound, toScrollLeft);
      toScrollLeft = Math.max(toScrollLeft, 0);
      const { value: container } = mergedContainerRef;
      if (container) {
        container.scrollLeft = toScrollLeft * ((rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? -1 : 1);
        const { internalOnUpdateScrollLeft } = props;
        if (internalOnUpdateScrollLeft)
          internalOnUpdateScrollLeft(toScrollLeft);
      }
    }
    function handleXScrollMouseUp(e) {
      e.preventDefault();
      e.stopPropagation();
      off("mousemove", window, handleXScrollMouseMove, true);
      off("mouseup", window, handleXScrollMouseUp, true);
      xBarPressed = false;
      sync();
      if (isMouseUpAway(e)) {
        hideBar();
      }
    }
    function handleYScrollMouseDown(e) {
      e.preventDefault();
      e.stopPropagation();
      yBarPressed = true;
      on("mousemove", window, handleYScrollMouseMove, true);
      on("mouseup", window, handleYScrollMouseUp, true);
      memoYTop = containerScrollTopRef.value;
      memoMouseY = e.clientY;
    }
    function handleYScrollMouseMove(e) {
      if (!yBarPressed)
        return;
      if (xBarVanishTimerId !== void 0) {
        window.clearTimeout(xBarVanishTimerId);
      }
      if (yBarVanishTimerId !== void 0) {
        window.clearTimeout(yBarVanishTimerId);
      }
      const { value: containerHeight } = containerHeightRef;
      const { value: contentHeight } = contentHeightRef;
      const { value: yBarSize } = yBarSizeRef;
      if (containerHeight === null || contentHeight === null)
        return;
      const dY = e.clientY - memoMouseY;
      const dScrollTop = dY * (contentHeight - containerHeight) / (containerHeight - yBarSize);
      const toScrollTopUpperBound = contentHeight - containerHeight;
      let toScrollTop = memoYTop + dScrollTop;
      toScrollTop = Math.min(toScrollTopUpperBound, toScrollTop);
      toScrollTop = Math.max(toScrollTop, 0);
      const { value: container } = mergedContainerRef;
      if (container) {
        container.scrollTop = toScrollTop;
      }
    }
    function handleYScrollMouseUp(e) {
      e.preventDefault();
      e.stopPropagation();
      off("mousemove", window, handleYScrollMouseMove, true);
      off("mouseup", window, handleYScrollMouseUp, true);
      yBarPressed = false;
      sync();
      if (isMouseUpAway(e)) {
        hideBar();
      }
    }
    watchEffect(() => {
      const { value: needXBar } = needXBarRef;
      const { value: needYBar } = needYBarRef;
      const { value: mergedClsPrefix } = mergedClsPrefixRef;
      const { value: xRailEl } = xRailRef;
      const { value: yRailEl } = yRailRef;
      if (xRailEl) {
        if (!needXBar) {
          xRailEl.classList.add(`${mergedClsPrefix}-scrollbar-rail--disabled`);
        } else {
          xRailEl.classList.remove(`${mergedClsPrefix}-scrollbar-rail--disabled`);
        }
      }
      if (yRailEl) {
        if (!needYBar) {
          yRailEl.classList.add(`${mergedClsPrefix}-scrollbar-rail--disabled`);
        } else {
          yRailEl.classList.remove(`${mergedClsPrefix}-scrollbar-rail--disabled`);
        }
      }
    });
    onMounted(() => {
      if (props.container)
        return;
      sync();
    });
    onBeforeUnmount(() => {
      if (xBarVanishTimerId !== void 0) {
        window.clearTimeout(xBarVanishTimerId);
      }
      if (yBarVanishTimerId !== void 0) {
        window.clearTimeout(yBarVanishTimerId);
      }
      off("mousemove", window, handleYScrollMouseMove, true);
      off("mouseup", window, handleYScrollMouseUp, true);
    });
    const themeRef = useTheme("Scrollbar", "-scrollbar", style$2, scrollbarLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { common: { cubicBezierEaseInOut, scrollbarBorderRadius, scrollbarHeight, scrollbarWidth }, self: { color, colorHover } } = themeRef.value;
      return {
        "--n-scrollbar-bezier": cubicBezierEaseInOut,
        "--n-scrollbar-color": color,
        "--n-scrollbar-color-hover": colorHover,
        "--n-scrollbar-border-radius": scrollbarBorderRadius,
        "--n-scrollbar-width": scrollbarWidth,
        "--n-scrollbar-height": scrollbarHeight
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("scrollbar", void 0, cssVarsRef, props) : void 0;
    const exposedMethods = {
      scrollTo,
      scrollBy,
      sync,
      syncUnifiedContainer,
      handleMouseEnterWrapper,
      handleMouseLeaveWrapper
    };
    return Object.assign(Object.assign({}, exposedMethods), {
      mergedClsPrefix: mergedClsPrefixRef,
      rtlEnabled: rtlEnabledRef,
      containerScrollTop: containerScrollTopRef,
      wrapperRef,
      containerRef,
      contentRef,
      yRailRef,
      xRailRef,
      needYBar: needYBarRef,
      needXBar: needXBarRef,
      yBarSizePx: yBarSizePxRef,
      xBarSizePx: xBarSizePxRef,
      yBarTopPx: yBarTopPxRef,
      xBarLeftPx: xBarLeftPxRef,
      isShowXBar: mergedShowXBarRef,
      isShowYBar: mergedShowYBarRef,
      isIos: isIos2,
      handleScroll,
      handleContentResize,
      handleContainerResize,
      handleYScrollMouseDown,
      handleXScrollMouseDown,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    var _a;
    const { $slots, mergedClsPrefix, triggerDisplayManually, rtlEnabled, internalHoistYRail } = this;
    if (!this.scrollable)
      return (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots);
    const triggerIsNone = this.trigger === "none";
    const createYRail = (className, style2) => {
      return h("div", { ref: "yRailRef", class: [
        `${mergedClsPrefix}-scrollbar-rail`,
        `${mergedClsPrefix}-scrollbar-rail--vertical`,
        className
      ], "data-scrollbar-rail": true, style: [style2 || "", this.verticalRailStyle], "aria-hiddens": true }, h(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        triggerIsNone ? Wrapper : Transition,
        triggerIsNone ? null : { name: "fade-in-transition" },
        {
          default: () => this.needYBar && this.isShowYBar && !this.isIos ? h("div", { class: `${mergedClsPrefix}-scrollbar-rail__scrollbar`, style: {
            height: this.yBarSizePx,
            top: this.yBarTopPx
          }, onMousedown: this.handleYScrollMouseDown }) : null
        }
      ));
    };
    const createChildren = () => {
      var _a2, _b;
      (_a2 = this.onRender) === null || _a2 === void 0 ? void 0 : _a2.call(this);
      return h("div", mergeProps(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [
          `${mergedClsPrefix}-scrollbar`,
          this.themeClass,
          rtlEnabled && `${mergedClsPrefix}-scrollbar--rtl`
        ],
        style: this.cssVars,
        onMouseenter: triggerDisplayManually ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: triggerDisplayManually ? void 0 : this.handleMouseLeaveWrapper
      }), [
        this.container ? (_b = $slots.default) === null || _b === void 0 ? void 0 : _b.call($slots) : h(
          "div",
          { role: "none", ref: "containerRef", class: [
            `${mergedClsPrefix}-scrollbar-container`,
            this.containerClass
          ], style: this.containerStyle, onScroll: this.handleScroll, onWheel: this.onWheel },
          h(VResizeObserver, { onResize: this.handleContentResize }, {
            default: () => h("div", { ref: "contentRef", role: "none", style: [
              {
                width: this.xScrollable ? "fit-content" : null
              },
              this.contentStyle
            ], class: [
              `${mergedClsPrefix}-scrollbar-content`,
              this.contentClass
            ] }, $slots)
          })
        ),
        internalHoistYRail ? null : createYRail(void 0, void 0),
        this.xScrollable && h("div", { ref: "xRailRef", class: [
          `${mergedClsPrefix}-scrollbar-rail`,
          `${mergedClsPrefix}-scrollbar-rail--horizontal`
        ], style: this.horizontalRailStyle, "data-scrollbar-rail": true, "aria-hidden": true }, h(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          triggerIsNone ? Wrapper : Transition,
          triggerIsNone ? null : { name: "fade-in-transition" },
          {
            default: () => this.needXBar && this.isShowXBar && !this.isIos ? h("div", { class: `${mergedClsPrefix}-scrollbar-rail__scrollbar`, style: {
              width: this.xBarSizePx,
              right: rtlEnabled ? this.xBarLeftPx : void 0,
              left: rtlEnabled ? void 0 : this.xBarLeftPx
            }, onMousedown: this.handleXScrollMouseDown }) : null
          }
        ))
      ]);
    };
    const scrollbarNode = this.container ? createChildren() : h(VResizeObserver, { onResize: this.handleContainerResize }, {
      default: createChildren
    });
    if (internalHoistYRail) {
      return h(
        Fragment,
        null,
        scrollbarNode,
        createYRail(this.themeClass, this.cssVars)
      );
    } else {
      return scrollbarNode;
    }
  }
});
const NScrollbar = Scrollbar;
const XScrollbar = Scrollbar;
const oppositePlacement = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
};
const arrowSize = "var(--n-arrow-height) * 1.414";
const style$1 = c$1([cB("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [c$1(">", [cB("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), cNotM("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [cNotM("scrollable", [cNotM("show-header-or-footer", "padding: var(--n-padding);")])]), cE("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), cE("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), cM("scrollable, show-header-or-footer", [cE("content", `
 padding: var(--n-padding);
 `)])]), cB("popover-shared", `
 transform-origin: inherit;
 `, [
  cB("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [cB("popover-arrow", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${arrowSize});
 height: calc(${arrowSize});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),
  // body transition
  c$1("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `),
  c$1("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `),
  c$1("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),
  c$1("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)
]), placementStyle("top-start", `
 top: calc(${arrowSize} / -2);
 left: calc(${getArrowOffset("top-start")} - var(--v-offset-left));
 `), placementStyle("top", `
 top: calc(${arrowSize} / -2);
 transform: translateX(calc(${arrowSize} / -2)) rotate(45deg);
 left: 50%;
 `), placementStyle("top-end", `
 top: calc(${arrowSize} / -2);
 right: calc(${getArrowOffset("top-end")} + var(--v-offset-left));
 `), placementStyle("bottom-start", `
 bottom: calc(${arrowSize} / -2);
 left: calc(${getArrowOffset("bottom-start")} - var(--v-offset-left));
 `), placementStyle("bottom", `
 bottom: calc(${arrowSize} / -2);
 transform: translateX(calc(${arrowSize} / -2)) rotate(45deg);
 left: 50%;
 `), placementStyle("bottom-end", `
 bottom: calc(${arrowSize} / -2);
 right: calc(${getArrowOffset("bottom-end")} + var(--v-offset-left));
 `), placementStyle("left-start", `
 left: calc(${arrowSize} / -2);
 top: calc(${getArrowOffset("left-start")} - var(--v-offset-top));
 `), placementStyle("left", `
 left: calc(${arrowSize} / -2);
 transform: translateY(calc(${arrowSize} / -2)) rotate(45deg);
 top: 50%;
 `), placementStyle("left-end", `
 left: calc(${arrowSize} / -2);
 bottom: calc(${getArrowOffset("left-end")} + var(--v-offset-top));
 `), placementStyle("right-start", `
 right: calc(${arrowSize} / -2);
 top: calc(${getArrowOffset("right-start")} - var(--v-offset-top));
 `), placementStyle("right", `
 right: calc(${arrowSize} / -2);
 transform: translateY(calc(${arrowSize} / -2)) rotate(45deg);
 top: 50%;
 `), placementStyle("right-end", `
 right: calc(${arrowSize} / -2);
 bottom: calc(${getArrowOffset("right-end")} + var(--v-offset-top));
 `), ...map({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (placements, direction) => {
  const isVertical = ["right", "left"].includes(direction);
  const sizeType = isVertical ? "width" : "height";
  return placements.map((placement) => {
    const isReverse = placement.split("-")[1] === "end";
    const targetSize = `var(--v-target-${sizeType}, 0px)`;
    const centerOffset = `calc((${targetSize} - ${arrowSize}) / 2)`;
    const offset = getArrowOffset(placement);
    return c$1(`[v-placement="${placement}"] >`, [cB("popover-shared", [cM("center-arrow", [cB("popover-arrow", `${direction}: calc(max(${centerOffset}, ${offset}) ${isReverse ? "+" : "-"} var(--v-offset-${isVertical ? "left" : "top"}));`)])])]);
  });
})]);
function getArrowOffset(placement) {
  return ["top", "bottom"].includes(placement.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function placementStyle(placement, arrowStyleLiteral) {
  const position = placement.split("-")[0];
  const sizeStyle = ["top", "bottom"].includes(position) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return c$1(`[v-placement="${placement}"] >`, [cB("popover-shared", `
 margin-${oppositePlacement[position]}: var(--n-space);
 `, [cM("show-arrow", `
 margin-${oppositePlacement[position]}: var(--n-space-arrow);
 `), cM("overlap", `
 margin: 0;
 `), cCB("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${position}: 100%;
 ${oppositePlacement[position]}: auto;
 ${sizeStyle}
 `, [cB("popover-arrow", arrowStyleLiteral)])])]);
}
const popoverBodyProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
  show: Boolean,
  trigger: String,
  showArrow: Boolean,
  delay: Number,
  duration: Number,
  raw: Boolean,
  arrowPointToCenter: Boolean,
  arrowClass: String,
  arrowStyle: [String, Object],
  arrowWrapperClass: String,
  arrowWrapperStyle: [String, Object],
  displayDirective: String,
  x: Number,
  y: Number,
  flip: Boolean,
  overlap: Boolean,
  placement: String,
  width: [Number, String],
  keepAliveOnHover: Boolean,
  scrollable: Boolean,
  contentClass: String,
  contentStyle: [Object, String],
  headerClass: String,
  headerStyle: [Object, String],
  footerClass: String,
  footerStyle: [Object, String],
  // private
  internalDeactivateImmediately: Boolean,
  animated: Boolean,
  onClickoutside: Function,
  internalTrapFocus: Boolean,
  internalOnAfterLeave: Function,
  // deprecated
  minWidth: Number,
  maxWidth: Number
});
const renderArrow = ({ arrowClass, arrowStyle, arrowWrapperClass, arrowWrapperStyle, clsPrefix }) => {
  return h(
    "div",
    { key: "__popover-arrow__", style: arrowWrapperStyle, class: [`${clsPrefix}-popover-arrow-wrapper`, arrowWrapperClass] },
    h("div", { class: [`${clsPrefix}-popover-arrow`, arrowClass], style: arrowStyle })
  );
};
const NPopoverBody = defineComponent({
  name: "PopoverBody",
  inheritAttrs: false,
  props: popoverBodyProps,
  setup(props, { slots, attrs }) {
    const { namespaceRef, mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Popover", "-popover", style$1, popoverLight, props, mergedClsPrefixRef);
    const followerRef = ref(null);
    const NPopover2 = inject("NPopover");
    const bodyRef = ref(null);
    const followerEnabledRef = ref(props.show);
    const displayedRef = ref(false);
    watchEffect(() => {
      const { show } = props;
      if (show && !isJsdom() && !props.internalDeactivateImmediately) {
        displayedRef.value = true;
      }
    });
    const directivesRef = computed(() => {
      const { trigger, onClickoutside } = props;
      const directives = [];
      const { positionManuallyRef: { value: positionManually } } = NPopover2;
      if (!positionManually) {
        if (trigger === "click" && !onClickoutside) {
          directives.push([
            clickoutside$1,
            handleClickOutside,
            void 0,
            { capture: true }
          ]);
        }
        if (trigger === "hover") {
          directives.push([mousemoveoutside$1, handleMouseMoveOutside]);
        }
      }
      if (onClickoutside) {
        directives.push([
          clickoutside$1,
          handleClickOutside,
          void 0,
          { capture: true }
        ]);
      }
      if (props.displayDirective === "show" || props.animated && displayedRef.value) {
        directives.push([vShow, props.show]);
      }
      return directives;
    });
    const styleRef = computed(() => {
      const width = props.width === "trigger" ? void 0 : formatLength(props.width);
      const style2 = [];
      if (width) {
        style2.push({ width });
      }
      const { maxWidth, minWidth } = props;
      if (maxWidth) {
        style2.push({ maxWidth: formatLength(maxWidth) });
      }
      if (minWidth) {
        style2.push({ maxWidth: formatLength(minWidth) });
      }
      if (!inlineThemeDisabled) {
        style2.push(cssVarsRef.value);
      }
      return style2;
    });
    const cssVarsRef = computed(() => {
      const { common: { cubicBezierEaseInOut, cubicBezierEaseIn, cubicBezierEaseOut }, self: { space, spaceArrow, padding, fontSize, textColor, dividerColor, color, boxShadow, borderRadius, arrowHeight, arrowOffset, arrowOffsetVertical } } = themeRef.value;
      return {
        "--n-box-shadow": boxShadow,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-bezier-ease-in": cubicBezierEaseIn,
        "--n-bezier-ease-out": cubicBezierEaseOut,
        "--n-font-size": fontSize,
        "--n-text-color": textColor,
        "--n-color": color,
        "--n-divider-color": dividerColor,
        "--n-border-radius": borderRadius,
        "--n-arrow-height": arrowHeight,
        "--n-arrow-offset": arrowOffset,
        "--n-arrow-offset-vertical": arrowOffsetVertical,
        "--n-padding": padding,
        "--n-space": space,
        "--n-space-arrow": spaceArrow
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("popover", void 0, cssVarsRef, props) : void 0;
    NPopover2.setBodyInstance({
      syncPosition
    });
    onBeforeUnmount(() => {
      NPopover2.setBodyInstance(null);
    });
    watch(toRef(props, "show"), (value) => {
      if (props.animated)
        return;
      if (value) {
        followerEnabledRef.value = true;
      } else {
        followerEnabledRef.value = false;
      }
    });
    function syncPosition() {
      var _a;
      (_a = followerRef.value) === null || _a === void 0 ? void 0 : _a.syncPosition();
    }
    function handleMouseEnter(e) {
      if (props.trigger === "hover" && props.keepAliveOnHover && props.show) {
        NPopover2.handleMouseEnter(e);
      }
    }
    function handleMouseLeave(e) {
      if (props.trigger === "hover" && props.keepAliveOnHover) {
        NPopover2.handleMouseLeave(e);
      }
    }
    function handleMouseMoveOutside(e) {
      if (props.trigger === "hover" && !getTriggerElement().contains(getPreciseEventTarget(e))) {
        NPopover2.handleMouseMoveOutside(e);
      }
    }
    function handleClickOutside(e) {
      if (props.trigger === "click" && !getTriggerElement().contains(getPreciseEventTarget(e)) || props.onClickoutside) {
        NPopover2.handleClickOutside(e);
      }
    }
    function getTriggerElement() {
      return NPopover2.getTriggerElement();
    }
    provide(popoverBodyInjectionKey, bodyRef);
    provide(drawerBodyInjectionKey, null);
    provide(modalBodyInjectionKey, null);
    function renderContentNode() {
      themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender();
      const shouldRenderDom = props.displayDirective === "show" || props.show || props.animated && displayedRef.value;
      if (!shouldRenderDom) {
        return null;
      }
      let contentNode;
      const renderBody = NPopover2.internalRenderBodyRef.value;
      const { value: mergedClsPrefix } = mergedClsPrefixRef;
      if (!renderBody) {
        const { value: extraClass } = NPopover2.extraClassRef;
        const { internalTrapFocus } = props;
        const hasHeaderOrFooter = !isSlotEmpty(slots.header) || !isSlotEmpty(slots.footer);
        const renderContentInnerNode = () => {
          var _a, _b;
          const body = hasHeaderOrFooter ? h(
            Fragment,
            null,
            resolveWrappedSlot(slots.header, (children) => {
              return children ? h("div", { class: [
                `${mergedClsPrefix}-popover__header`,
                props.headerClass
              ], style: props.headerStyle }, children) : null;
            }),
            resolveWrappedSlot(slots.default, (children) => {
              return children ? h("div", { class: [
                `${mergedClsPrefix}-popover__content`,
                props.contentClass
              ], style: props.contentStyle }, slots) : null;
            }),
            resolveWrappedSlot(slots.footer, (children) => {
              return children ? h("div", { class: [
                `${mergedClsPrefix}-popover__footer`,
                props.footerClass
              ], style: props.footerStyle }, children) : null;
            })
          ) : props.scrollable ? (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots) : h("div", { class: [
            `${mergedClsPrefix}-popover__content`,
            props.contentClass
          ], style: props.contentStyle }, slots);
          const maybeScrollableBody = props.scrollable ? h(XScrollbar, { contentClass: hasHeaderOrFooter ? void 0 : `${mergedClsPrefix}-popover__content ${(_b = props.contentClass) !== null && _b !== void 0 ? _b : ""}`, contentStyle: hasHeaderOrFooter ? void 0 : props.contentStyle }, {
            default: () => body
          }) : body;
          const arrow = props.showArrow ? renderArrow({
            arrowClass: props.arrowClass,
            arrowStyle: props.arrowStyle,
            arrowWrapperClass: props.arrowWrapperClass,
            arrowWrapperStyle: props.arrowWrapperStyle,
            clsPrefix: mergedClsPrefix
          }) : null;
          return [maybeScrollableBody, arrow];
        };
        contentNode = h("div", mergeProps({
          class: [
            `${mergedClsPrefix}-popover`,
            `${mergedClsPrefix}-popover-shared`,
            themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass.value,
            extraClass.map((v) => `${mergedClsPrefix}-${v}`),
            {
              [`${mergedClsPrefix}-popover--scrollable`]: props.scrollable,
              [`${mergedClsPrefix}-popover--show-header-or-footer`]: hasHeaderOrFooter,
              [`${mergedClsPrefix}-popover--raw`]: props.raw,
              [`${mergedClsPrefix}-popover-shared--overlap`]: props.overlap,
              [`${mergedClsPrefix}-popover-shared--show-arrow`]: props.showArrow,
              [`${mergedClsPrefix}-popover-shared--center-arrow`]: props.arrowPointToCenter
            }
          ],
          ref: bodyRef,
          style: styleRef.value,
          onKeydown: NPopover2.handleKeydown,
          onMouseenter: handleMouseEnter,
          onMouseleave: handleMouseLeave
        }, attrs), internalTrapFocus ? h(FocusTrap, { active: props.show, autoFocus: true }, { default: renderContentInnerNode }) : renderContentInnerNode());
      } else {
        contentNode = renderBody(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [
            `${mergedClsPrefix}-popover-shared`,
            themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass.value,
            props.overlap && `${mergedClsPrefix}-popover-shared--overlap`,
            props.showArrow && `${mergedClsPrefix}-popover-shared--show-arrow`,
            props.arrowPointToCenter && `${mergedClsPrefix}-popover-shared--center-arrow`
          ],
          bodyRef,
          styleRef.value,
          handleMouseEnter,
          handleMouseLeave
        );
      }
      return withDirectives(contentNode, directivesRef.value);
    }
    return {
      displayed: displayedRef,
      namespace: namespaceRef,
      isMounted: NPopover2.isMountedRef,
      zIndex: NPopover2.zIndexRef,
      followerRef,
      adjustedTo: useAdjustedTo(props),
      followerEnabled: followerEnabledRef,
      renderContentNode
    };
  },
  render() {
    return h(VFollower, { ref: "followerRef", zIndex: this.zIndex, show: this.show, enabled: this.followerEnabled, to: this.adjustedTo, x: this.x, y: this.y, flip: this.flip, placement: this.placement, containerClass: this.namespace, overlap: this.overlap, width: this.width === "trigger" ? "target" : void 0, teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey }, {
      default: () => {
        return this.animated ? h(Transition, {
          name: "popover-transition",
          appear: this.isMounted,
          // Don't use watch to enable follower, since the transition may
          // make position sync timing very subtle and buggy.
          onEnter: () => {
            this.followerEnabled = true;
          },
          onAfterLeave: () => {
            var _a;
            (_a = this.internalOnAfterLeave) === null || _a === void 0 ? void 0 : _a.call(this);
            this.followerEnabled = false;
            this.displayed = false;
          }
        }, {
          default: this.renderContentNode
        }) : this.renderContentNode();
      }
    });
  }
});
const bodyPropKeys = Object.keys(popoverBodyProps);
const triggerEventMap = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function appendEvents(vNode, trigger, events) {
  triggerEventMap[trigger].forEach((eventName) => {
    if (!vNode.props)
      vNode.props = {};
    else {
      vNode.props = Object.assign({}, vNode.props);
    }
    const originalHandler = vNode.props[eventName];
    const handler = events[eventName];
    if (!originalHandler)
      vNode.props[eventName] = handler;
    else {
      vNode.props[eventName] = (...args) => {
        originalHandler(...args);
        handler(...args);
      };
    }
  });
}
const popoverBaseProps = {
  show: {
    type: Boolean,
    default: void 0
  },
  defaultShow: Boolean,
  showArrow: {
    type: Boolean,
    default: true
  },
  trigger: {
    type: String,
    default: "hover"
  },
  delay: {
    type: Number,
    default: 100
  },
  duration: {
    type: Number,
    default: 100
  },
  raw: Boolean,
  placement: {
    type: String,
    default: "top"
  },
  x: Number,
  y: Number,
  arrowPointToCenter: Boolean,
  disabled: Boolean,
  getDisabled: Function,
  displayDirective: {
    type: String,
    default: "if"
  },
  arrowClass: String,
  arrowStyle: [String, Object],
  arrowWrapperClass: String,
  arrowWrapperStyle: [String, Object],
  flip: {
    type: Boolean,
    default: true
  },
  animated: {
    type: Boolean,
    default: true
  },
  width: {
    type: [Number, String],
    default: void 0
  },
  overlap: Boolean,
  keepAliveOnHover: {
    type: Boolean,
    default: true
  },
  zIndex: Number,
  to: useAdjustedTo.propTo,
  scrollable: Boolean,
  contentClass: String,
  contentStyle: [Object, String],
  headerClass: String,
  headerStyle: [Object, String],
  footerClass: String,
  footerStyle: [Object, String],
  // events
  onClickoutside: Function,
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  // internal
  internalDeactivateImmediately: Boolean,
  internalSyncTargetWithParent: Boolean,
  internalInheritedEventHandlers: {
    type: Array,
    default: () => []
  },
  internalTrapFocus: Boolean,
  internalExtraClass: {
    type: Array,
    default: () => []
  },
  // deprecated
  onShow: [Function, Array],
  onHide: [Function, Array],
  arrow: {
    type: Boolean,
    default: void 0
  },
  minWidth: Number,
  maxWidth: Number
};
const popoverProps = Object.assign(Object.assign(Object.assign({}, useTheme.props), popoverBaseProps), { internalOnAfterLeave: Function, internalRenderBody: Function });
const NPopover = defineComponent({
  name: "Popover",
  inheritAttrs: false,
  props: popoverProps,
  __popover__: true,
  setup(props) {
    const isMountedRef = isMounted();
    const binderInstRef = ref(null);
    const controlledShowRef = computed(() => props.show);
    const uncontrolledShowRef = ref(props.defaultShow);
    const mergedShowWithoutDisabledRef = useMergedState(controlledShowRef, uncontrolledShowRef);
    const mergedShowConsideringDisabledPropRef = useMemo(() => {
      if (props.disabled)
        return false;
      return mergedShowWithoutDisabledRef.value;
    });
    const getMergedDisabled = () => {
      if (props.disabled)
        return true;
      const { getDisabled } = props;
      if (getDisabled === null || getDisabled === void 0 ? void 0 : getDisabled())
        return true;
      return false;
    };
    const getMergedShow = () => {
      if (getMergedDisabled())
        return false;
      return mergedShowWithoutDisabledRef.value;
    };
    const compatibleShowArrowRef = useCompitable(props, ["arrow", "showArrow"]);
    const mergedShowArrowRef = computed(() => {
      if (props.overlap)
        return false;
      return compatibleShowArrowRef.value;
    });
    let bodyInstance = null;
    const showTimerIdRef = ref(null);
    const hideTimerIdRef = ref(null);
    const positionManuallyRef = useMemo(() => {
      return props.x !== void 0 && props.y !== void 0;
    });
    function doUpdateShow(value) {
      const { "onUpdate:show": _onUpdateShow, onUpdateShow, onShow, onHide } = props;
      uncontrolledShowRef.value = value;
      if (_onUpdateShow) {
        call(_onUpdateShow, value);
      }
      if (onUpdateShow) {
        call(onUpdateShow, value);
      }
      if (value && onShow) {
        call(onShow, true);
      }
      if (value && onHide) {
        call(onHide, false);
      }
    }
    function syncPosition() {
      if (bodyInstance) {
        bodyInstance.syncPosition();
      }
    }
    function clearShowTimer() {
      const { value: showTimerId } = showTimerIdRef;
      if (showTimerId) {
        window.clearTimeout(showTimerId);
        showTimerIdRef.value = null;
      }
    }
    function clearHideTimer() {
      const { value: hideTimerId } = hideTimerIdRef;
      if (hideTimerId) {
        window.clearTimeout(hideTimerId);
        hideTimerIdRef.value = null;
      }
    }
    function handleFocus() {
      const mergedDisabled = getMergedDisabled();
      if (props.trigger === "focus" && !mergedDisabled) {
        if (getMergedShow())
          return;
        doUpdateShow(true);
      }
    }
    function handleBlur() {
      const mergedDisabled = getMergedDisabled();
      if (props.trigger === "focus" && !mergedDisabled) {
        if (!getMergedShow())
          return;
        doUpdateShow(false);
      }
    }
    function handleMouseEnter() {
      const mergedDisabled = getMergedDisabled();
      if (props.trigger === "hover" && !mergedDisabled) {
        clearHideTimer();
        if (showTimerIdRef.value !== null)
          return;
        if (getMergedShow())
          return;
        const delayCallback = () => {
          doUpdateShow(true);
          showTimerIdRef.value = null;
        };
        const { delay } = props;
        if (delay === 0) {
          delayCallback();
        } else {
          showTimerIdRef.value = window.setTimeout(delayCallback, delay);
        }
      }
    }
    function handleMouseLeave() {
      const mergedDisabled = getMergedDisabled();
      if (props.trigger === "hover" && !mergedDisabled) {
        clearShowTimer();
        if (hideTimerIdRef.value !== null)
          return;
        if (!getMergedShow())
          return;
        const delayedCallback = () => {
          doUpdateShow(false);
          hideTimerIdRef.value = null;
        };
        const { duration } = props;
        if (duration === 0) {
          delayedCallback();
        } else {
          hideTimerIdRef.value = window.setTimeout(delayedCallback, duration);
        }
      }
    }
    function handleMouseMoveOutside() {
      handleMouseLeave();
    }
    function handleClickOutside(e) {
      var _a;
      if (!getMergedShow())
        return;
      if (props.trigger === "click") {
        clearShowTimer();
        clearHideTimer();
        doUpdateShow(false);
      }
      (_a = props.onClickoutside) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function handleClick() {
      if (props.trigger === "click" && !getMergedDisabled()) {
        clearShowTimer();
        clearHideTimer();
        const nextShow = !getMergedShow();
        doUpdateShow(nextShow);
      }
    }
    function handleKeydown(e) {
      if (!props.internalTrapFocus)
        return;
      if (e.key === "Escape") {
        clearShowTimer();
        clearHideTimer();
        doUpdateShow(false);
      }
    }
    function setShow(value) {
      uncontrolledShowRef.value = value;
    }
    function getTriggerElement() {
      var _a;
      return (_a = binderInstRef.value) === null || _a === void 0 ? void 0 : _a.targetRef;
    }
    function setBodyInstance(value) {
      bodyInstance = value;
    }
    provide("NPopover", {
      getTriggerElement,
      handleKeydown,
      handleMouseEnter,
      handleMouseLeave,
      handleClickOutside,
      handleMouseMoveOutside,
      setBodyInstance,
      positionManuallyRef,
      isMountedRef,
      zIndexRef: toRef(props, "zIndex"),
      extraClassRef: toRef(props, "internalExtraClass"),
      internalRenderBodyRef: toRef(props, "internalRenderBody")
    });
    watchEffect(() => {
      if (mergedShowWithoutDisabledRef.value && getMergedDisabled()) {
        doUpdateShow(false);
      }
    });
    const returned = {
      binderInstRef,
      positionManually: positionManuallyRef,
      mergedShowConsideringDisabledProp: mergedShowConsideringDisabledPropRef,
      // if to show popover body
      uncontrolledShow: uncontrolledShowRef,
      mergedShowArrow: mergedShowArrowRef,
      getMergedShow,
      setShow,
      handleClick,
      handleMouseEnter,
      handleMouseLeave,
      handleFocus,
      handleBlur,
      syncPosition
    };
    return returned;
  },
  render() {
    var _a;
    const { positionManually, $slots: slots } = this;
    let triggerVNode;
    let popoverInside = false;
    if (!positionManually) {
      if (slots.activator) {
        triggerVNode = getFirstSlotVNode(slots, "activator");
      } else {
        triggerVNode = getFirstSlotVNode(slots, "trigger");
      }
      if (triggerVNode) {
        triggerVNode = cloneVNode(triggerVNode);
        triggerVNode = triggerVNode.type === Text ? h("span", [triggerVNode]) : triggerVNode;
        const handlers = {
          onClick: this.handleClick,
          onMouseenter: this.handleMouseEnter,
          onMouseleave: this.handleMouseLeave,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        };
        if ((_a = triggerVNode.type) === null || _a === void 0 ? void 0 : _a.__popover__) {
          popoverInside = true;
          if (!triggerVNode.props) {
            triggerVNode.props = {
              internalSyncTargetWithParent: true,
              internalInheritedEventHandlers: []
            };
          }
          triggerVNode.props.internalSyncTargetWithParent = true;
          if (!triggerVNode.props.internalInheritedEventHandlers) {
            triggerVNode.props.internalInheritedEventHandlers = [handlers];
          } else {
            triggerVNode.props.internalInheritedEventHandlers = [
              handlers,
              ...triggerVNode.props.internalInheritedEventHandlers
            ];
          }
        } else {
          const { internalInheritedEventHandlers } = this;
          const ascendantAndCurrentHandlers = [
            handlers,
            ...internalInheritedEventHandlers
          ];
          const mergedHandlers = {
            onBlur: (e) => {
              ascendantAndCurrentHandlers.forEach((_handlers) => {
                _handlers.onBlur(e);
              });
            },
            onFocus: (e) => {
              ascendantAndCurrentHandlers.forEach((_handlers) => {
                _handlers.onFocus(e);
              });
            },
            onClick: (e) => {
              ascendantAndCurrentHandlers.forEach((_handlers) => {
                _handlers.onClick(e);
              });
            },
            onMouseenter: (e) => {
              ascendantAndCurrentHandlers.forEach((_handlers) => {
                _handlers.onMouseenter(e);
              });
            },
            onMouseleave: (e) => {
              ascendantAndCurrentHandlers.forEach((_handlers) => {
                _handlers.onMouseleave(e);
              });
            }
          };
          appendEvents(triggerVNode, internalInheritedEventHandlers ? "nested" : positionManually ? "manual" : this.trigger, mergedHandlers);
        }
      }
    }
    return h(VBinder, { ref: "binderInstRef", syncTarget: !popoverInside, syncTargetWithParent: this.internalSyncTargetWithParent }, {
      default: () => {
        void this.mergedShowConsideringDisabledProp;
        const mergedShow = this.getMergedShow();
        return [
          this.internalTrapFocus && mergedShow ? withDirectives(h("div", { style: { position: "fixed", inset: 0 } }), [
            [
              zindexable$1,
              {
                enabled: mergedShow,
                zIndex: this.zIndex
              }
            ]
          ]) : null,
          positionManually ? null : h(VTarget, null, {
            default: () => triggerVNode
          }),
          h(NPopoverBody, keep(this.$props, bodyPropKeys, Object.assign(Object.assign({}, this.$attrs), { showArrow: this.mergedShowArrow, show: mergedShow })), {
            default: () => {
              var _a2, _b;
              return (_b = (_a2 = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a2);
            },
            header: () => {
              var _a2, _b;
              return (_b = (_a2 = this.$slots).header) === null || _b === void 0 ? void 0 : _b.call(_a2);
            },
            footer: () => {
              var _a2, _b;
              return (_b = (_a2 = this.$slots).footer) === null || _b === void 0 ? void 0 : _b.call(_a2);
            }
          })
        ];
      }
    });
  }
});
const isImageSupportNativeLazy = isBrowser$1 && "loading" in document.createElement("img");
const resolveOptionsAndHash = (options = {}) => {
  var _a;
  const { root: root2 = null } = options;
  return {
    hash: `${options.rootMargin || "0px 0px 0px 0px"}-${Array.isArray(options.threshold) ? options.threshold.join(",") : (_a = options.threshold) !== null && _a !== void 0 ? _a : "0"}`,
    options: Object.assign(Object.assign({}, options), { root: (typeof root2 === "string" ? document.querySelector(root2) : root2) || document.documentElement })
  };
};
const observers = /* @__PURE__ */ new WeakMap();
const unobserveHandleMap = /* @__PURE__ */ new WeakMap();
const shouldStartLoadingRefMap = /* @__PURE__ */ new WeakMap();
const observeIntersection = (el, options, shouldStartLoadingRef) => {
  if (!el)
    return () => {
    };
  const resolvedOptionsAndHash = resolveOptionsAndHash(options);
  const { root: root2 } = resolvedOptionsAndHash.options;
  let rootObservers;
  const _rootObservers = observers.get(root2);
  if (_rootObservers) {
    rootObservers = _rootObservers;
  } else {
    rootObservers = /* @__PURE__ */ new Map();
    observers.set(root2, rootObservers);
  }
  let observer;
  let observerAndObservedElements;
  if (rootObservers.has(resolvedOptionsAndHash.hash)) {
    observerAndObservedElements = // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    rootObservers.get(resolvedOptionsAndHash.hash);
    if (!observerAndObservedElements[1].has(el)) {
      observer = observerAndObservedElements[0];
      observerAndObservedElements[1].add(el);
      observer.observe(el);
    }
  } else {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const _unobserve = unobserveHandleMap.get(entry.target);
          const _shouldStartLoadingRef = shouldStartLoadingRefMap.get(entry.target);
          if (_unobserve)
            _unobserve();
          if (_shouldStartLoadingRef) {
            _shouldStartLoadingRef.value = true;
          }
        }
      });
    }, resolvedOptionsAndHash.options);
    observer.observe(el);
    observerAndObservedElements = [observer, /* @__PURE__ */ new Set([el])];
    rootObservers.set(resolvedOptionsAndHash.hash, observerAndObservedElements);
  }
  let unobservered = false;
  const unobserve = () => {
    if (unobservered)
      return;
    unobserveHandleMap.delete(el);
    shouldStartLoadingRefMap.delete(el);
    unobservered = true;
    if (observerAndObservedElements[1].has(el)) {
      observerAndObservedElements[0].unobserve(el);
      observerAndObservedElements[1].delete(el);
    }
    if (observerAndObservedElements[1].size <= 0) {
      rootObservers.delete(resolvedOptionsAndHash.hash);
    }
    if (!rootObservers.size) {
      observers.delete(root2);
    }
  };
  unobserveHandleMap.set(el, unobserve);
  shouldStartLoadingRefMap.set(el, shouldStartLoadingRef);
  return unobserve;
};
const tooltipProps = Object.assign(Object.assign({}, popoverBaseProps), useTheme.props);
const NTooltip = defineComponent({
  name: "Tooltip",
  props: tooltipProps,
  __popover__: true,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props);
    const themeRef = useTheme("Tooltip", "-tooltip", void 0, tooltipLight, props, mergedClsPrefixRef);
    const popoverRef = ref(null);
    const tooltipExposedMethod = {
      syncPosition() {
        popoverRef.value.syncPosition();
      },
      setShow(show) {
        popoverRef.value.setShow(show);
      }
    };
    return Object.assign(Object.assign({}, tooltipExposedMethod), { popoverRef, mergedTheme: themeRef, popoverThemeOverrides: computed(() => {
      return themeRef.value.self;
    }) });
  },
  render() {
    const { mergedTheme, internalExtraClass } = this;
    return h(NPopover, Object.assign(Object.assign({}, this.$props), { theme: mergedTheme.peers.Popover, themeOverrides: mergedTheme.peerOverrides.Popover, builtinThemeOverrides: this.popoverThemeOverrides, internalExtraClass: internalExtraClass.concat("tooltip"), ref: "popoverRef" }), this.$slots);
  }
});
const imagePreviewSharedProps = Object.assign(Object.assign({}, useTheme.props), { onPreviewPrev: Function, onPreviewNext: Function, showToolbar: { type: Boolean, default: true }, showToolbarTooltip: Boolean });
const imageContextKey = createInjectionKey("n-image");
globalThis && globalThis.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const download = (url, name) => {
  if (!url)
    return;
  const a = document.createElement("a");
  a.href = url;
  if (name !== void 0) {
    a.download = name;
  }
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
const prevIcon = h(
  "svg",
  { viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
  h("path", { d: "M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z", fill: "currentColor" })
);
const nextIcon = h(
  "svg",
  { viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
  h("path", { d: "M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z", fill: "currentColor" })
);
const closeIcon = h(
  "svg",
  { viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
  h("path", { d: "M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z", fill: "currentColor" })
);
const downloadIcon = h(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 1024 1024" },
  h("path", { fill: "currentColor", d: "M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" })
);
const style = c$1([c$1("body >", [cB("image-container", "position: fixed;")]), cB("image-preview-container", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 `), cB("image-preview-overlay", `
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background: rgba(0, 0, 0, .3);
 `, [fadeInTransition()]), cB("image-preview-toolbar", `
 z-index: 1;
 position: absolute;
 left: 50%;
 transform: translateX(-50%);
 border-radius: var(--n-toolbar-border-radius);
 height: 48px;
 bottom: 40px;
 padding: 0 12px;
 background: var(--n-toolbar-color);
 box-shadow: var(--n-toolbar-box-shadow);
 color: var(--n-toolbar-icon-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `, [cB("base-icon", `
 padding: 0 8px;
 font-size: 28px;
 cursor: pointer;
 `), fadeInTransition()]), cB("image-preview-wrapper", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 pointer-events: none;
 `, [fadeInScaleUpTransition()]), cB("image-preview", `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: all;
 margin: auto;
 max-height: calc(100vh - 32px);
 max-width: calc(100vw - 32px);
 transition: transform .3s var(--n-bezier);
 `), cB("image", `
 display: inline-flex;
 max-height: 100%;
 max-width: 100%;
 `, [cNotM("preview-disabled", `
 cursor: pointer;
 `), c$1("img", `
 border-radius: inherit;
 `)])]);
const BLEEDING = 32;
const NImagePreview = defineComponent({
  name: "ImagePreview",
  props: Object.assign(Object.assign({}, imagePreviewSharedProps), { onNext: Function, onPrev: Function, clsPrefix: {
    type: String,
    required: true
  } }),
  setup(props) {
    const themeRef = useTheme("Image", "-image", style, imageLight, props, toRef(props, "clsPrefix"));
    let thumbnailEl = null;
    const previewRef = ref(null);
    const previewWrapperRef = ref(null);
    const previewSrcRef = ref(void 0);
    const showRef = ref(false);
    const displayedRef = ref(false);
    const { localeRef } = useLocale("Image");
    function syncTransformOrigin() {
      const { value: previewWrapper } = previewWrapperRef;
      if (!thumbnailEl || !previewWrapper)
        return;
      const { style: style2 } = previewWrapper;
      const tbox = thumbnailEl.getBoundingClientRect();
      const tx = tbox.left + tbox.width / 2;
      const ty = tbox.top + tbox.height / 2;
      style2.transformOrigin = `${tx}px ${ty}px`;
    }
    function handleKeydown(e) {
      var _a, _b;
      switch (e.key) {
        case " ":
          e.preventDefault();
          break;
        case "ArrowLeft":
          (_a = props.onPrev) === null || _a === void 0 ? void 0 : _a.call(props);
          break;
        case "ArrowRight":
          (_b = props.onNext) === null || _b === void 0 ? void 0 : _b.call(props);
          break;
        case "Escape":
          toggleShow();
          break;
      }
    }
    watch(showRef, (value) => {
      if (value) {
        on("keydown", document, handleKeydown);
      } else
        off("keydown", document, handleKeydown);
    });
    onBeforeUnmount(() => {
      off("keydown", document, handleKeydown);
    });
    let startX = 0;
    let startY = 0;
    let offsetX = 0;
    let offsetY = 0;
    let startOffsetX = 0;
    let startOffsetY = 0;
    let mouseDownClientX = 0;
    let mouseDownClientY = 0;
    let dragging = false;
    function handleMouseMove(e) {
      const { clientX, clientY } = e;
      offsetX = clientX - startX;
      offsetY = clientY - startY;
      beforeNextFrameOnce(derivePreviewStyle);
    }
    function getMoveStrategy(opts) {
      const { mouseUpClientX, mouseUpClientY, mouseDownClientX: mouseDownClientX2, mouseDownClientY: mouseDownClientY2 } = opts;
      const deltaHorizontal = mouseDownClientX2 - mouseUpClientX;
      const deltaVertical = mouseDownClientY2 - mouseUpClientY;
      const moveVerticalDirection = `vertical${deltaVertical > 0 ? "Top" : "Bottom"}`;
      const moveHorizontalDirection = `horizontal${deltaHorizontal > 0 ? "Left" : "Right"}`;
      return {
        moveVerticalDirection,
        moveHorizontalDirection,
        deltaHorizontal,
        deltaVertical
      };
    }
    function getDerivedOffset(moveStrategy) {
      const { value: preview } = previewRef;
      if (!preview)
        return { offsetX: 0, offsetY: 0 };
      const pbox = preview.getBoundingClientRect();
      const { moveVerticalDirection, moveHorizontalDirection, deltaHorizontal, deltaVertical } = moveStrategy || {};
      let nextOffsetX = 0;
      let nextOffsetY = 0;
      if (pbox.width <= window.innerWidth) {
        nextOffsetX = 0;
      } else if (pbox.left > 0) {
        nextOffsetX = (pbox.width - window.innerWidth) / 2;
      } else if (pbox.right < window.innerWidth) {
        nextOffsetX = -(pbox.width - window.innerWidth) / 2;
      } else if (moveHorizontalDirection === "horizontalRight") {
        nextOffsetX = Math.min((pbox.width - window.innerWidth) / 2, startOffsetX - (deltaHorizontal !== null && deltaHorizontal !== void 0 ? deltaHorizontal : 0));
      } else {
        nextOffsetX = Math.max(-((pbox.width - window.innerWidth) / 2), startOffsetX - (deltaHorizontal !== null && deltaHorizontal !== void 0 ? deltaHorizontal : 0));
      }
      if (pbox.height <= window.innerHeight) {
        nextOffsetY = 0;
      } else if (pbox.top > 0) {
        nextOffsetY = (pbox.height - window.innerHeight) / 2;
      } else if (pbox.bottom < window.innerHeight) {
        nextOffsetY = -(pbox.height - window.innerHeight) / 2;
      } else if (moveVerticalDirection === "verticalBottom") {
        nextOffsetY = Math.min((pbox.height - window.innerHeight) / 2, startOffsetY - (deltaVertical !== null && deltaVertical !== void 0 ? deltaVertical : 0));
      } else {
        nextOffsetY = Math.max(-((pbox.height - window.innerHeight) / 2), startOffsetY - (deltaVertical !== null && deltaVertical !== void 0 ? deltaVertical : 0));
      }
      return {
        offsetX: nextOffsetX,
        offsetY: nextOffsetY
      };
    }
    function handleMouseUp(e) {
      off("mousemove", document, handleMouseMove);
      off("mouseup", document, handleMouseUp);
      const { clientX: mouseUpClientX, clientY: mouseUpClientY } = e;
      dragging = false;
      const moveStrategy = getMoveStrategy({
        mouseUpClientX,
        mouseUpClientY,
        mouseDownClientX,
        mouseDownClientY
      });
      const offset = getDerivedOffset(moveStrategy);
      offsetX = offset.offsetX;
      offsetY = offset.offsetY;
      derivePreviewStyle();
    }
    const imageContext = inject(imageContextKey, null);
    function handlePreviewMousedown(e) {
      var _a, _b;
      (_b = (_a = imageContext === null || imageContext === void 0 ? void 0 : imageContext.previewedImgPropsRef.value) === null || _a === void 0 ? void 0 : _a.onMousedown) === null || _b === void 0 ? void 0 : _b.call(_a, e);
      if (e.button !== 0)
        return;
      const { clientX, clientY } = e;
      dragging = true;
      startX = clientX - offsetX;
      startY = clientY - offsetY;
      startOffsetX = offsetX;
      startOffsetY = offsetY;
      mouseDownClientX = clientX;
      mouseDownClientY = clientY;
      derivePreviewStyle();
      on("mousemove", document, handleMouseMove);
      on("mouseup", document, handleMouseUp);
    }
    function handlePreviewDblclick(e) {
      var _a, _b;
      (_b = (_a = imageContext === null || imageContext === void 0 ? void 0 : imageContext.previewedImgPropsRef.value) === null || _a === void 0 ? void 0 : _a.onDblclick) === null || _b === void 0 ? void 0 : _b.call(_a, e);
      const originalImageSizeScale = getOrignalImageSizeScale();
      scale = scale === originalImageSizeScale ? 1 : originalImageSizeScale;
      derivePreviewStyle();
    }
    const scaleRadix = 1.5;
    let scaleExp = 0;
    let scale = 1;
    let rotate = 0;
    function resetScale() {
      scale = 1;
      scaleExp = 0;
    }
    function handleSwitchPrev() {
      var _a;
      resetScale();
      rotate = 0;
      (_a = props.onPrev) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    function handleSwitchNext() {
      var _a;
      resetScale();
      rotate = 0;
      (_a = props.onNext) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    function rotateCounterclockwise() {
      rotate -= 90;
      derivePreviewStyle();
    }
    function rotateClockwise() {
      rotate += 90;
      derivePreviewStyle();
    }
    function getMaxScale() {
      const { value: preview } = previewRef;
      if (!preview)
        return 1;
      const { innerWidth, innerHeight } = window;
      const heightMaxScale = Math.max(1, preview.naturalHeight / (innerHeight - BLEEDING));
      const widthMaxScale = Math.max(1, preview.naturalWidth / (innerWidth - BLEEDING));
      return Math.max(3, heightMaxScale * 2, widthMaxScale * 2);
    }
    function getOrignalImageSizeScale() {
      const { value: preview } = previewRef;
      if (!preview)
        return 1;
      const { innerWidth, innerHeight } = window;
      const heightScale = preview.naturalHeight / (innerHeight - BLEEDING);
      const widthScale = preview.naturalWidth / (innerWidth - BLEEDING);
      if (heightScale < 1 && widthScale < 1) {
        return 1;
      }
      return Math.max(heightScale, widthScale);
    }
    function zoomIn() {
      const maxScale = getMaxScale();
      if (scale < maxScale) {
        scaleExp += 1;
        scale = Math.min(maxScale, Math.pow(scaleRadix, scaleExp));
        derivePreviewStyle();
      }
    }
    function zoomOut() {
      if (scale > 0.5) {
        const originalScale = scale;
        scaleExp -= 1;
        scale = Math.max(0.5, Math.pow(scaleRadix, scaleExp));
        const diff = originalScale - scale;
        derivePreviewStyle(false);
        const offset = getDerivedOffset();
        scale += diff;
        derivePreviewStyle(false);
        scale -= diff;
        offsetX = offset.offsetX;
        offsetY = offset.offsetY;
        derivePreviewStyle();
      }
    }
    function handleDownloadClick() {
      const src = previewSrcRef.value;
      if (src) {
        download(src, void 0);
      }
    }
    function derivePreviewStyle(transition = true) {
      var _a;
      const { value: preview } = previewRef;
      if (!preview)
        return;
      const { style: style2 } = preview;
      const controlledStyle = normalizeStyle((_a = imageContext === null || imageContext === void 0 ? void 0 : imageContext.previewedImgPropsRef.value) === null || _a === void 0 ? void 0 : _a.style);
      let controlledStyleString = "";
      if (typeof controlledStyle === "string") {
        controlledStyleString = controlledStyle + ";";
      } else {
        for (const key in controlledStyle) {
          controlledStyleString += `${kebabCase$1(key)}: ${controlledStyle[key]};`;
        }
      }
      const transformStyle = `transform-origin: center; transform: translateX(${offsetX}px) translateY(${offsetY}px) rotate(${rotate}deg) scale(${scale});`;
      if (dragging) {
        style2.cssText = controlledStyleString + "cursor: grabbing; transition: none;" + transformStyle;
      } else {
        style2.cssText = controlledStyleString + "cursor: grab;" + transformStyle + (transition ? "" : "transition: none;");
      }
      if (!transition) {
        void preview.offsetHeight;
      }
    }
    function toggleShow() {
      showRef.value = !showRef.value;
      displayedRef.value = true;
    }
    function resizeToOrignalImageSize() {
      scale = getOrignalImageSizeScale();
      scaleExp = Math.ceil(Math.log(scale) / Math.log(scaleRadix));
      offsetX = 0;
      offsetY = 0;
      derivePreviewStyle();
    }
    const exposedMethods = {
      setPreviewSrc: (src) => {
        previewSrcRef.value = src;
      },
      setThumbnailEl: (el) => {
        thumbnailEl = el;
      },
      toggleShow
    };
    function withTooltip(node, tooltipKey) {
      if (props.showToolbarTooltip) {
        const { value: theme } = themeRef;
        return h(NTooltip, { to: false, theme: theme.peers.Tooltip, themeOverrides: theme.peerOverrides.Tooltip, keepAliveOnHover: false }, {
          default: () => {
            return localeRef.value[tooltipKey];
          },
          trigger: () => node
        });
      } else {
        return node;
      }
    }
    const cssVarsRef = computed(() => {
      const { common: { cubicBezierEaseInOut }, self: { toolbarIconColor, toolbarBorderRadius, toolbarBoxShadow, toolbarColor } } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-toolbar-icon-color": toolbarIconColor,
        "--n-toolbar-color": toolbarColor,
        "--n-toolbar-border-radius": toolbarBorderRadius,
        "--n-toolbar-box-shadow": toolbarBoxShadow
      };
    });
    const { inlineThemeDisabled } = useConfig();
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("image-preview", void 0, cssVarsRef, props) : void 0;
    return Object.assign({
      previewRef,
      previewWrapperRef,
      previewSrc: previewSrcRef,
      show: showRef,
      appear: isMounted(),
      displayed: displayedRef,
      previewedImgProps: imageContext === null || imageContext === void 0 ? void 0 : imageContext.previewedImgPropsRef,
      handleWheel(e) {
        e.preventDefault();
      },
      handlePreviewMousedown,
      handlePreviewDblclick,
      syncTransformOrigin,
      handleAfterLeave: () => {
        resetScale();
        rotate = 0;
        displayedRef.value = false;
      },
      handleDragStart: (e) => {
        var _a, _b;
        (_b = (_a = imageContext === null || imageContext === void 0 ? void 0 : imageContext.previewedImgPropsRef.value) === null || _a === void 0 ? void 0 : _a.onDragstart) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        e.preventDefault();
      },
      zoomIn,
      zoomOut,
      handleDownloadClick,
      rotateCounterclockwise,
      rotateClockwise,
      handleSwitchPrev,
      handleSwitchNext,
      withTooltip,
      resizeToOrignalImageSize,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    }, exposedMethods);
  },
  render() {
    var _a, _b;
    const { clsPrefix } = this;
    return h(
      Fragment,
      null,
      (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a),
      h(LazyTeleport, { show: this.show }, {
        default: () => {
          var _a2;
          if (!(this.show || this.displayed)) {
            return null;
          }
          (_a2 = this.onRender) === null || _a2 === void 0 ? void 0 : _a2.call(this);
          return withDirectives(h(
            "div",
            { class: [
              `${clsPrefix}-image-preview-container`,
              this.themeClass
            ], style: this.cssVars, onWheel: this.handleWheel },
            h(Transition, { name: "fade-in-transition", appear: this.appear }, {
              default: () => this.show ? h("div", { class: `${clsPrefix}-image-preview-overlay`, onClick: this.toggleShow }) : null
            }),
            this.showToolbar ? h(Transition, { name: "fade-in-transition", appear: this.appear }, {
              default: () => {
                if (!this.show)
                  return null;
                const { withTooltip } = this;
                return h(
                  "div",
                  { class: `${clsPrefix}-image-preview-toolbar` },
                  this.onPrev ? h(
                    Fragment,
                    null,
                    withTooltip(h(NBaseIcon, { clsPrefix, onClick: this.handleSwitchPrev }, { default: () => prevIcon }), "tipPrevious"),
                    withTooltip(h(NBaseIcon, { clsPrefix, onClick: this.handleSwitchNext }, { default: () => nextIcon }), "tipNext")
                  ) : null,
                  withTooltip(h(NBaseIcon, { clsPrefix, onClick: this.rotateCounterclockwise }, {
                    default: () => h(RotateCounterclockwiseIcon, null)
                  }), "tipCounterclockwise"),
                  withTooltip(h(NBaseIcon, { clsPrefix, onClick: this.rotateClockwise }, {
                    default: () => h(RotateClockwiseIcon, null)
                  }), "tipClockwise"),
                  withTooltip(h(NBaseIcon, { clsPrefix, onClick: this.resizeToOrignalImageSize }, {
                    default: () => {
                      return h(ResizeSmallIcon, null);
                    }
                  }), "tipOriginalSize"),
                  withTooltip(h(NBaseIcon, { clsPrefix, onClick: this.zoomOut }, { default: () => h(ZoomOutIcon, null) }), "tipZoomOut"),
                  withTooltip(h(NBaseIcon, { clsPrefix, onClick: this.zoomIn }, { default: () => h(ZoomInIcon, null) }), "tipZoomIn"),
                  withTooltip(h(NBaseIcon, { clsPrefix, onClick: this.handleDownloadClick }, { default: () => downloadIcon }), "tipDownload"),
                  withTooltip(h(NBaseIcon, { clsPrefix, onClick: this.toggleShow }, { default: () => closeIcon }), "tipClose")
                );
              }
            }) : null,
            h(Transition, {
              name: "fade-in-scale-up-transition",
              onAfterLeave: this.handleAfterLeave,
              appear: this.appear,
              // BUG:
              // onEnter will be called twice, I don't know why
              // Maybe it is a bug of vue
              onEnter: this.syncTransformOrigin,
              onBeforeLeave: this.syncTransformOrigin
            }, {
              default: () => {
                const { previewedImgProps = {} } = this;
                return withDirectives(h(
                  "div",
                  { class: `${clsPrefix}-image-preview-wrapper`, ref: "previewWrapperRef" },
                  h("img", Object.assign({}, previewedImgProps, { draggable: false, onMousedown: this.handlePreviewMousedown, onDblclick: this.handlePreviewDblclick, class: [
                    `${clsPrefix}-image-preview`,
                    previewedImgProps.class
                  ], key: this.previewSrc, src: this.previewSrc, ref: "previewRef", onDragstart: this.handleDragStart }))
                ), [[vShow, this.show]]);
              }
            })
          ), [[zindexable$1, { enabled: this.show }]]);
        }
      })
    );
  }
});
const imageGroupInjectionKey = createInjectionKey("n-image-group");
const imageProps = Object.assign({ alt: String, height: [String, Number], imgProps: Object, previewedImgProps: Object, lazy: Boolean, intersectionObserverOptions: Object, objectFit: {
  type: String,
  default: "fill"
}, previewSrc: String, fallbackSrc: String, width: [String, Number], src: String, previewDisabled: Boolean, loadDescription: String, onError: Function, onLoad: Function }, imagePreviewSharedProps);
const NImage = defineComponent({
  name: "Image",
  props: imageProps,
  inheritAttrs: false,
  setup(props) {
    const imageRef = ref(null);
    const showErrorRef = ref(false);
    const previewInstRef = ref(null);
    const imageGroupHandle = inject(imageGroupInjectionKey, null);
    const { mergedClsPrefixRef } = imageGroupHandle || useConfig(props);
    const exposedMethods = {
      click: () => {
        if (props.previewDisabled || showErrorRef.value)
          return;
        const mergedPreviewSrc = props.previewSrc || props.src;
        if (imageGroupHandle) {
          imageGroupHandle.setPreviewSrc(mergedPreviewSrc);
          imageGroupHandle.setThumbnailEl(imageRef.value);
          imageGroupHandle.toggleShow();
          return;
        }
        const { value: previewInst } = previewInstRef;
        if (!previewInst)
          return;
        previewInst.setPreviewSrc(mergedPreviewSrc);
        previewInst.setThumbnailEl(imageRef.value);
        previewInst.toggleShow();
      }
    };
    const shouldStartLoadingRef = ref(!props.lazy);
    onMounted(() => {
      var _a;
      (_a = imageRef.value) === null || _a === void 0 ? void 0 : _a.setAttribute("data-group-id", (imageGroupHandle === null || imageGroupHandle === void 0 ? void 0 : imageGroupHandle.groupId) || "");
    });
    onMounted(() => {
      if (props.lazy && props.intersectionObserverOptions) {
        let unobserve;
        const stopWatchHandle = watchEffect(() => {
          unobserve === null || unobserve === void 0 ? void 0 : unobserve();
          unobserve = void 0;
          unobserve = observeIntersection(imageRef.value, props.intersectionObserverOptions, shouldStartLoadingRef);
        });
        onBeforeUnmount(() => {
          stopWatchHandle();
          unobserve === null || unobserve === void 0 ? void 0 : unobserve();
        });
      }
    });
    watchEffect(() => {
      var _a;
      void props.src;
      void ((_a = props.imgProps) === null || _a === void 0 ? void 0 : _a.src);
      showErrorRef.value = false;
    });
    const loadedRef = ref(false);
    provide(imageContextKey, {
      previewedImgPropsRef: toRef(props, "previewedImgProps")
    });
    return Object.assign({
      mergedClsPrefix: mergedClsPrefixRef,
      groupId: imageGroupHandle === null || imageGroupHandle === void 0 ? void 0 : imageGroupHandle.groupId,
      previewInstRef,
      imageRef,
      showError: showErrorRef,
      shouldStartLoading: shouldStartLoadingRef,
      loaded: loadedRef,
      mergedOnClick: (e) => {
        var _a, _b;
        exposedMethods.click();
        (_b = (_a = props.imgProps) === null || _a === void 0 ? void 0 : _a.onClick) === null || _b === void 0 ? void 0 : _b.call(_a, e);
      },
      mergedOnError: (e) => {
        if (!shouldStartLoadingRef.value)
          return;
        showErrorRef.value = true;
        const { onError, imgProps: { onError: imgPropsOnError } = {} } = props;
        onError === null || onError === void 0 ? void 0 : onError(e);
        imgPropsOnError === null || imgPropsOnError === void 0 ? void 0 : imgPropsOnError(e);
      },
      mergedOnLoad: (e) => {
        const { onLoad, imgProps: { onLoad: imgPropsOnLoad } = {} } = props;
        onLoad === null || onLoad === void 0 ? void 0 : onLoad(e);
        imgPropsOnLoad === null || imgPropsOnLoad === void 0 ? void 0 : imgPropsOnLoad(e);
        loadedRef.value = true;
      }
    }, exposedMethods);
  },
  render() {
    var _a, _b;
    const { mergedClsPrefix, imgProps = {}, loaded, $attrs, lazy } = this;
    const placeholderNode = (_b = (_a = this.$slots).placeholder) === null || _b === void 0 ? void 0 : _b.call(_a);
    const loadSrc = this.src || imgProps.src;
    const imgNode = h("img", Object.assign(Object.assign({}, imgProps), {
      ref: "imageRef",
      width: this.width || imgProps.width,
      height: this.height || imgProps.height,
      src: this.showError ? this.fallbackSrc : lazy && this.intersectionObserverOptions ? this.shouldStartLoading ? loadSrc : void 0 : loadSrc,
      alt: this.alt || imgProps.alt,
      "aria-label": this.alt || imgProps.alt,
      onClick: this.mergedOnClick,
      onError: this.mergedOnError,
      onLoad: this.mergedOnLoad,
      // If interseciton observer options is set, do not use native lazy
      loading: isImageSupportNativeLazy && lazy && !this.intersectionObserverOptions ? "lazy" : "eager",
      style: [
        imgProps.style || "",
        placeholderNode && !loaded ? { height: "0", width: "0", visibility: "hidden" } : "",
        { objectFit: this.objectFit }
      ],
      "data-error": this.showError,
      "data-preview-src": this.previewSrc || this.src
    }));
    return h(
      "div",
      Object.assign({}, $attrs, { role: "none", class: [
        $attrs.class,
        `${mergedClsPrefix}-image`,
        (this.previewDisabled || this.showError) && `${mergedClsPrefix}-image--preview-disabled`
      ] }),
      this.groupId ? imgNode : h(NImagePreview, { theme: this.theme, themeOverrides: this.themeOverrides, clsPrefix: mergedClsPrefix, ref: "previewInstRef", showToolbar: this.showToolbar, showToolbarTooltip: this.showToolbarTooltip }, {
        default: () => imgNode
      }),
      !loaded && placeholderNode
    );
  }
});
export {
  NScrollbar as N,
  off as a,
  NImage as b,
  createCompounder as c,
  getPreciseEventTarget as g,
  keep as k,
  on as o
};
