import { p as pxfy } from "./Card-3fcb523c.js";
import { aa as vShow, f as computed, r as ref, i as onBeforeUnmount, Z as createInjectionKey, d as defineComponent, p as inject, h, a0 as getCurrentInstance, u as useConfig, $ as useMemo, o as onMounted, a1 as provide, t as toRef, m as mergeProps, a5 as cloneVNode } from "./index-9ab0a72d.js";
import { i as isBrowser, V as VResizeObserver, b as beforeNextFrameOnce } from "./VResizeObserver-36278d00.js";
import { i as isBrowser$1, b as flatten, g as getSlot } from "./_plugin-vue_export-helper-5fb8bf2a.js";
function parseResponsiveProp(reponsiveProp) {
  if (typeof reponsiveProp === "number") {
    return {
      "": reponsiveProp.toString()
    };
  }
  const params = {};
  reponsiveProp.split(/ +/).forEach((pairLiteral) => {
    if (pairLiteral === "")
      return;
    const [prefix, value] = pairLiteral.split(":");
    if (value === void 0) {
      params[""] = prefix;
    } else {
      params[prefix] = value;
    }
  });
  return params;
}
function parseResponsivePropValue(reponsiveProp, activeKeyOrSize) {
  var _a;
  if (reponsiveProp === void 0 || reponsiveProp === null)
    return void 0;
  const classObj = parseResponsiveProp(reponsiveProp);
  if (activeKeyOrSize === void 0)
    return classObj[""];
  if (typeof activeKeyOrSize === "string") {
    return (_a = classObj[activeKeyOrSize]) !== null && _a !== void 0 ? _a : classObj[""];
  } else if (Array.isArray(activeKeyOrSize)) {
    for (let i = activeKeyOrSize.length - 1; i >= 0; --i) {
      const key = activeKeyOrSize[i];
      if (key in classObj)
        return classObj[key];
    }
    return classObj[""];
  } else {
    let activeValue = void 0;
    let activeKey = -1;
    Object.keys(classObj).forEach((key) => {
      const keyAsNum = Number(key);
      if (!Number.isNaN(keyAsNum) && activeKeyOrSize >= keyAsNum && keyAsNum >= activeKey) {
        activeKey = keyAsNum;
        activeValue = classObj[key];
      }
    });
    return activeValue;
  }
}
function isNodeVShowFalse(vNode) {
  var _a;
  const showDir = (_a = vNode.dirs) === null || _a === void 0 ? void 0 : _a.find(({ dir }) => dir === vShow);
  return !!(showDir && showDir.value === false);
}
const defaultBreakpointOptions = {
  // mobile
  // 0 ~ 640 doesn't mean it should display well in all the range,
  // but means you should treat it like a mobile phone.)
  xs: 0,
  s: 640,
  m: 1024,
  l: 1280,
  xl: 1536,
  "2xl": 1920
  // normal desktop display
};
function createMediaQuery(screenWidth) {
  return `(min-width: ${screenWidth}px)`;
}
const mqlMap = {};
function useBreakpoints(screens = defaultBreakpointOptions) {
  if (!isBrowser)
    return computed(() => []);
  if (typeof window.matchMedia !== "function")
    return computed(() => []);
  const breakpointStatusRef = ref({});
  const breakpoints = Object.keys(screens);
  const updateBreakpoints = (e, breakpointName) => {
    if (e.matches)
      breakpointStatusRef.value[breakpointName] = true;
    else
      breakpointStatusRef.value[breakpointName] = false;
  };
  breakpoints.forEach((key) => {
    const breakpointValue = screens[key];
    let mql;
    let cbs;
    if (mqlMap[breakpointValue] === void 0) {
      mql = window.matchMedia(createMediaQuery(breakpointValue));
      if (mql.addEventListener) {
        mql.addEventListener("change", (e) => {
          cbs.forEach((cb) => {
            cb(e, key);
          });
        });
      } else if (mql.addListener) {
        mql.addListener((e) => {
          cbs.forEach((cb) => {
            cb(e, key);
          });
        });
      }
      cbs = /* @__PURE__ */ new Set();
      mqlMap[breakpointValue] = {
        mql,
        cbs
      };
    } else {
      mql = mqlMap[breakpointValue].mql;
      cbs = mqlMap[breakpointValue].cbs;
    }
    cbs.add(updateBreakpoints);
    if (mql.matches) {
      cbs.forEach((cb) => {
        cb(mql, key);
      });
    }
  });
  onBeforeUnmount(() => {
    breakpoints.forEach((breakpoint) => {
      const { cbs } = mqlMap[screens[breakpoint]];
      if (cbs.has(updateBreakpoints)) {
        cbs.delete(updateBreakpoints);
      }
    });
  });
  return computed(() => {
    const { value } = breakpointStatusRef;
    return breakpoints.filter((key) => value[key]);
  });
}
const defaultSpan$1 = 1;
const gridInjectionKey = createInjectionKey("n-grid");
const defaultSpan = 1;
const gridItemProps = {
  span: {
    type: [Number, String],
    default: defaultSpan
  },
  offset: {
    type: [Number, String],
    default: 0
  },
  suffix: Boolean,
  // private props
  privateOffset: Number,
  privateSpan: Number,
  privateColStart: Number,
  privateShow: {
    type: Boolean,
    default: true
  }
};
const NGridItem = defineComponent({
  __GRID_ITEM__: true,
  name: "GridItem",
  alias: ["Gi"],
  props: gridItemProps,
  setup() {
    const {
      isSsrRef,
      xGapRef,
      itemStyleRef,
      overflowRef,
      layoutShiftDisabledRef
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(gridInjectionKey);
    const self = getCurrentInstance();
    return {
      overflow: overflowRef,
      itemStyle: itemStyleRef,
      layoutShiftDisabled: layoutShiftDisabledRef,
      mergedXGap: computed(() => {
        return pxfy(xGapRef.value || 0);
      }),
      deriveStyle: () => {
        void isSsrRef.value;
        const {
          privateSpan = defaultSpan,
          privateShow = true,
          privateColStart = void 0,
          privateOffset = 0
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        } = self.vnode.props;
        const { value: xGap } = xGapRef;
        const mergedXGap = pxfy(xGap || 0);
        return {
          display: !privateShow ? "none" : "",
          gridColumn: `${privateColStart !== null && privateColStart !== void 0 ? privateColStart : `span ${privateSpan}`} / span ${privateSpan}`,
          marginLeft: privateOffset ? `calc((100% - (${privateSpan} - 1) * ${mergedXGap}) / ${privateSpan} * ${privateOffset} + ${mergedXGap} * ${privateOffset})` : ""
        };
      }
    };
  },
  render() {
    var _a, _b;
    if (this.layoutShiftDisabled) {
      const { span, offset, mergedXGap } = this;
      return h("div", { style: {
        gridColumn: `span ${span} / span ${span}`,
        marginLeft: offset ? `calc((100% - (${span} - 1) * ${mergedXGap}) / ${span} * ${offset} + ${mergedXGap} * ${offset})` : ""
      } }, this.$slots);
    }
    return h("div", { style: [this.itemStyle, this.deriveStyle()] }, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a, { overflow: this.overflow }));
  }
});
const defaultBreakpoints = {
  xs: 0,
  // mobile
  s: 640,
  // tablet
  m: 1024,
  // laptop s
  l: 1280,
  // laptop
  xl: 1536,
  // laptop l
  xxl: 1920
  // normal desktop display
};
const defaultCols = 24;
const SSR_ATTR_NAME = "__ssr__";
const gridProps = {
  layoutShiftDisabled: Boolean,
  responsive: {
    type: [String, Boolean],
    default: "self"
  },
  cols: {
    type: [Number, String],
    default: defaultCols
  },
  itemResponsive: Boolean,
  collapsed: Boolean,
  // may create grid rows < collapsedRows since a item may take all the row
  collapsedRows: {
    type: Number,
    default: 1
  },
  itemStyle: [Object, String],
  xGap: {
    type: [Number, String],
    default: 0
  },
  yGap: {
    type: [Number, String],
    default: 0
  }
};
const NGrid = defineComponent({
  name: "Grid",
  inheritAttrs: false,
  props: gridProps,
  setup(props) {
    const { mergedClsPrefixRef, mergedBreakpointsRef } = useConfig(props);
    const numRegex = /^\d+$/;
    const widthRef = ref(void 0);
    const breakpointsRef = useBreakpoints((mergedBreakpointsRef === null || mergedBreakpointsRef === void 0 ? void 0 : mergedBreakpointsRef.value) || defaultBreakpoints);
    const isResponsiveRef = useMemo(() => {
      if (props.itemResponsive)
        return true;
      if (!numRegex.test(props.cols.toString()))
        return true;
      if (!numRegex.test(props.xGap.toString()))
        return true;
      if (!numRegex.test(props.yGap.toString()))
        return true;
      return false;
    });
    const responsiveQueryRef = computed(() => {
      if (!isResponsiveRef.value)
        return void 0;
      return props.responsive === "self" ? widthRef.value : breakpointsRef.value;
    });
    const responsiveColsRef = useMemo(() => {
      var _a;
      return (_a = Number(parseResponsivePropValue(props.cols.toString(), responsiveQueryRef.value))) !== null && _a !== void 0 ? _a : defaultCols;
    });
    const responsiveXGapRef = useMemo(() => parseResponsivePropValue(props.xGap.toString(), responsiveQueryRef.value));
    const responsiveYGapRef = useMemo(() => parseResponsivePropValue(props.yGap.toString(), responsiveQueryRef.value));
    const handleResize = (entry) => {
      widthRef.value = entry.contentRect.width;
    };
    const handleResizeRaf = (entry) => {
      beforeNextFrameOnce(handleResize, entry);
    };
    const overflowRef = ref(false);
    const handleResizeRef = computed(() => {
      if (props.responsive === "self") {
        return handleResizeRaf;
      }
      return void 0;
    });
    const isSsrRef = ref(false);
    const contentElRef = ref();
    onMounted(() => {
      const { value: contentEl } = contentElRef;
      if (contentEl) {
        if (contentEl.hasAttribute(SSR_ATTR_NAME)) {
          contentEl.removeAttribute(SSR_ATTR_NAME);
          isSsrRef.value = true;
        }
      }
    });
    provide(gridInjectionKey, {
      layoutShiftDisabledRef: toRef(props, "layoutShiftDisabled"),
      isSsrRef,
      itemStyleRef: toRef(props, "itemStyle"),
      xGapRef: responsiveXGapRef,
      overflowRef
    });
    return {
      isSsr: !isBrowser$1,
      contentEl: contentElRef,
      mergedClsPrefix: mergedClsPrefixRef,
      style: computed(() => {
        if (props.layoutShiftDisabled) {
          return {
            width: "100%",
            display: "grid",
            gridTemplateColumns: `repeat(${props.cols}, minmax(0, 1fr))`,
            columnGap: pxfy(props.xGap),
            rowGap: pxfy(props.yGap)
          };
        }
        return {
          width: "100%",
          display: "grid",
          gridTemplateColumns: `repeat(${responsiveColsRef.value}, minmax(0, 1fr))`,
          columnGap: pxfy(responsiveXGapRef.value),
          rowGap: pxfy(responsiveYGapRef.value)
        };
      }),
      isResponsive: isResponsiveRef,
      responsiveQuery: responsiveQueryRef,
      responsiveCols: responsiveColsRef,
      handleResize: handleResizeRef,
      overflow: overflowRef
    };
  },
  render() {
    if (this.layoutShiftDisabled) {
      return h("div", mergeProps({
        ref: "contentEl",
        class: `${this.mergedClsPrefix}-grid`,
        style: this.style
      }, this.$attrs), this.$slots);
    }
    const renderContent = () => {
      var _a, _b, _c, _d, _e, _f, _g;
      this.overflow = false;
      const rawChildren = flatten(getSlot(this));
      const childrenAndRawSpan = [];
      const { collapsed, collapsedRows, responsiveCols, responsiveQuery } = this;
      rawChildren.forEach((child) => {
        var _a2, _b2, _c2, _d2, _e2;
        if (((_a2 = child === null || child === void 0 ? void 0 : child.type) === null || _a2 === void 0 ? void 0 : _a2.__GRID_ITEM__) !== true)
          return;
        if (isNodeVShowFalse(child)) {
          const clonedNode = cloneVNode(child);
          if (clonedNode.props) {
            clonedNode.props.privateShow = false;
          } else {
            clonedNode.props = { privateShow: false };
          }
          childrenAndRawSpan.push({
            child: clonedNode,
            rawChildSpan: 0
          });
          return;
        }
        child.dirs = ((_b2 = child.dirs) === null || _b2 === void 0 ? void 0 : _b2.filter(({ dir }) => dir !== vShow)) || null;
        if (((_c2 = child.dirs) === null || _c2 === void 0 ? void 0 : _c2.length) === 0) {
          child.dirs = null;
        }
        const clonedChild = cloneVNode(child);
        const rawChildSpan = Number((_e2 = parseResponsivePropValue((_d2 = clonedChild.props) === null || _d2 === void 0 ? void 0 : _d2.span, responsiveQuery)) !== null && _e2 !== void 0 ? _e2 : defaultSpan$1);
        if (rawChildSpan === 0)
          return;
        childrenAndRawSpan.push({
          child: clonedChild,
          rawChildSpan
        });
      });
      let suffixSpan = 0;
      const maybeSuffixNode = (_a = childrenAndRawSpan[childrenAndRawSpan.length - 1]) === null || _a === void 0 ? void 0 : _a.child;
      if (maybeSuffixNode === null || maybeSuffixNode === void 0 ? void 0 : maybeSuffixNode.props) {
        const suffixPropValue = (_b = maybeSuffixNode.props) === null || _b === void 0 ? void 0 : _b.suffix;
        if (suffixPropValue !== void 0 && suffixPropValue !== false) {
          suffixSpan = Number((_d = parseResponsivePropValue((_c = maybeSuffixNode.props) === null || _c === void 0 ? void 0 : _c.span, responsiveQuery)) !== null && _d !== void 0 ? _d : defaultSpan$1);
          maybeSuffixNode.props.privateSpan = suffixSpan;
          maybeSuffixNode.props.privateColStart = responsiveCols + 1 - suffixSpan;
          maybeSuffixNode.props.privateShow = (_e = maybeSuffixNode.props.privateShow) !== null && _e !== void 0 ? _e : true;
        }
      }
      let spanCounter = 0;
      let done = false;
      for (const { child, rawChildSpan } of childrenAndRawSpan) {
        if (done) {
          this.overflow = true;
        }
        if (!done) {
          const childOffset = Number((_g = parseResponsivePropValue((_f = child.props) === null || _f === void 0 ? void 0 : _f.offset, responsiveQuery)) !== null && _g !== void 0 ? _g : 0);
          const childSpan = Math.min(rawChildSpan + childOffset, responsiveCols);
          if (!child.props) {
            child.props = {
              privateSpan: childSpan,
              privateOffset: childOffset
            };
          } else {
            child.props.privateSpan = childSpan;
            child.props.privateOffset = childOffset;
          }
          if (collapsed) {
            const remainder = spanCounter % responsiveCols;
            if (childSpan + remainder > responsiveCols) {
              spanCounter += responsiveCols - remainder;
            }
            if (childSpan + spanCounter + suffixSpan > collapsedRows * responsiveCols) {
              done = true;
            } else {
              spanCounter += childSpan;
            }
          }
        }
        if (done) {
          if (child.props) {
            if (child.props.privateShow !== true) {
              child.props.privateShow = false;
            }
          } else {
            child.props = {
              privateShow: false
            };
          }
        }
      }
      return h("div", mergeProps({
        ref: "contentEl",
        class: `${this.mergedClsPrefix}-grid`,
        style: this.style,
        [SSR_ATTR_NAME]: this.isSsr || void 0
      }, this.$attrs), childrenAndRawSpan.map(({ child }) => child));
    };
    return this.isResponsive && this.responsive === "self" ? h(VResizeObserver, { onResize: this.handleResize }, {
      default: renderContent
    }) : renderContent();
  }
});
export {
  NGrid as N,
  NGridItem as a
};
