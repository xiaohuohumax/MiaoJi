import { H as createTextVNode, L as Fragment, aZ as Comment, c as cB, a as cM, b as c, g as useTheme, d as defineComponent, u as useConfig, f as computed, j as useThemeClass, am as warn, h, m as mergeProps, bm as iconLight, a1 as useRtl, bn as spaceLight, a3 as createKey, p as inject, q as throwError, bo as messageApiInjectionKey } from "./index-d7777b86.js";
import { d as getGap, e as depx } from "./Card-f7545e27.js";
function getSlot(instance, slotName = "default", fallback = []) {
  const slots = instance.$slots;
  const slot = slots[slotName];
  if (slot === void 0)
    return fallback;
  return slot();
}
function flatten(vNodes, filterCommentNode = true, result = []) {
  vNodes.forEach((vNode) => {
    if (vNode === null)
      return;
    if (typeof vNode !== "object") {
      if (typeof vNode === "string" || typeof vNode === "number") {
        result.push(createTextVNode(String(vNode)));
      }
      return;
    }
    if (Array.isArray(vNode)) {
      flatten(vNode, filterCommentNode, result);
      return;
    }
    if (vNode.type === Fragment) {
      if (vNode.children === null)
        return;
      if (Array.isArray(vNode.children)) {
        flatten(vNode.children, filterCommentNode, result);
      }
    } else if (vNode.type !== Comment) {
      result.push(vNode);
    }
  });
  return result;
}
const pureNumberRegex = /^(\d|\.)+$/;
const numberRegex = /(\d|\.)+/;
function formatLength(length, { c: c2 = 1, offset = 0, attachPx = true } = {}) {
  if (typeof length === "number") {
    const result = (length + offset) * c2;
    if (result === 0)
      return "0";
    return `${result}px`;
  } else if (typeof length === "string") {
    if (pureNumberRegex.test(length)) {
      const result = (Number(length) + offset) * c2;
      if (attachPx) {
        if (result === 0)
          return "0";
        return `${result}px`;
      } else {
        return `${result}`;
      }
    } else {
      const result = numberRegex.exec(length);
      if (!result)
        return length;
      return length.replace(numberRegex, String((Number(result[0]) + offset) * c2));
    }
  }
  return length;
}
const isBrowser = typeof document !== "undefined" && typeof window !== "undefined";
const style = cB("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [cM("color-transition", {
  transition: "color .3s var(--n-bezier)"
}), cM("depth", {
  color: "var(--n-color)"
}, [c("svg", {
  opacity: "var(--n-opacity)",
  transition: "opacity .3s var(--n-bezier)"
})]), c("svg", {
  height: "1em",
  width: "1em"
})]);
const iconProps = Object.assign(Object.assign({}, useTheme.props), { depth: [String, Number], size: [Number, String], color: String, component: Object });
const NIcon = defineComponent({
  _n_icon__: true,
  name: "Icon",
  inheritAttrs: false,
  props: iconProps,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Icon", "-icon", style, iconLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { depth } = props;
      const { common: { cubicBezierEaseInOut }, self } = themeRef.value;
      if (depth !== void 0) {
        const { color, [`opacity${depth}Depth`]: opacity } = self;
        return {
          "--n-bezier": cubicBezierEaseInOut,
          "--n-color": color,
          "--n-opacity": opacity
        };
      }
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-color": "",
        "--n-opacity": ""
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("icon", computed(() => `${props.depth || "d"}`), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedStyle: computed(() => {
        const { size, color } = props;
        return {
          fontSize: formatLength(size),
          color
        };
      }),
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const { $parent, depth, mergedClsPrefix, component, onRender, themeClass } = this;
    if ((_a = $parent === null || $parent === void 0 ? void 0 : $parent.$options) === null || _a === void 0 ? void 0 : _a._n_icon__) {
      warn("icon", "don't wrap `n-icon` inside `n-icon`");
    }
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("i", mergeProps(this.$attrs, {
      role: "img",
      class: [
        `${mergedClsPrefix}-icon`,
        themeClass,
        {
          [`${mergedClsPrefix}-icon--depth`]: depth,
          [`${mergedClsPrefix}-icon--color-transition`]: depth !== void 0
        }
      ],
      style: [this.cssVars, this.mergedStyle]
    }), component ? h(component) : this.$slots);
  }
});
let supportFlexGap;
const ensureSupportFlexGap = () => {
  if (!isBrowser)
    return true;
  if (supportFlexGap === void 0) {
    const flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
    document.body.appendChild(flex);
    const isSupported = flex.scrollHeight === 1;
    document.body.removeChild(flex);
    return supportFlexGap = isSupported;
  }
  return supportFlexGap;
};
const spaceProps = Object.assign(Object.assign({}, useTheme.props), {
  align: String,
  justify: {
    type: String,
    default: "start"
  },
  inline: Boolean,
  vertical: Boolean,
  size: {
    type: [String, Number, Array],
    default: "medium"
  },
  wrapItem: {
    type: Boolean,
    default: true
  },
  itemClass: String,
  itemStyle: [String, Object],
  wrap: {
    type: Boolean,
    default: true
  },
  // internal
  internalUseGap: {
    type: Boolean,
    default: void 0
  }
});
const NSpace = defineComponent({
  name: "Space",
  props: spaceProps,
  setup(props) {
    const { mergedClsPrefixRef, mergedRtlRef } = useConfig(props);
    const themeRef = useTheme("Space", "-space", void 0, spaceLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Space", mergedRtlRef, mergedClsPrefixRef);
    return {
      useGap: ensureSupportFlexGap(),
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      margin: computed(() => {
        const { size } = props;
        if (Array.isArray(size)) {
          return {
            horizontal: size[0],
            vertical: size[1]
          };
        }
        if (typeof size === "number") {
          return {
            horizontal: size,
            vertical: size
          };
        }
        const { self: { [createKey("gap", size)]: gap } } = themeRef.value;
        const { row, col } = getGap(gap);
        return {
          horizontal: depx(col),
          vertical: depx(row)
        };
      })
    };
  },
  render() {
    const { vertical, align, inline, justify, itemClass, itemStyle, margin, wrap, mergedClsPrefix, rtlEnabled, useGap, wrapItem, internalUseGap } = this;
    const children = flatten(getSlot(this));
    if (!children.length)
      return null;
    const horizontalMargin = `${margin.horizontal}px`;
    const semiHorizontalMargin = `${margin.horizontal / 2}px`;
    const verticalMargin = `${margin.vertical}px`;
    const semiVerticalMargin = `${margin.vertical / 2}px`;
    const lastIndex = children.length - 1;
    const isJustifySpace = justify.startsWith("space-");
    return h("div", { role: "none", class: [
      `${mergedClsPrefix}-space`,
      rtlEnabled && `${mergedClsPrefix}-space--rtl`
    ], style: {
      display: inline ? "inline-flex" : "flex",
      flexDirection: vertical ? "column" : "row",
      justifyContent: ["start", "end"].includes(justify) ? "flex-" + justify : justify,
      flexWrap: !wrap || vertical ? "nowrap" : "wrap",
      marginTop: useGap || vertical ? "" : `-${semiVerticalMargin}`,
      marginBottom: useGap || vertical ? "" : `-${semiVerticalMargin}`,
      alignItems: align,
      gap: useGap ? `${margin.vertical}px ${margin.horizontal}px` : ""
    } }, !wrapItem && (useGap || internalUseGap) ? children : children.map((child, index) => h("div", { role: "none", class: itemClass, style: [
      itemStyle,
      {
        maxWidth: "100%"
      },
      useGap ? "" : vertical ? {
        marginBottom: index !== lastIndex ? verticalMargin : ""
      } : rtlEnabled ? {
        marginLeft: isJustifySpace ? justify === "space-between" && index === lastIndex ? "" : semiHorizontalMargin : index !== lastIndex ? horizontalMargin : "",
        marginRight: isJustifySpace ? justify === "space-between" && index === 0 ? "" : semiHorizontalMargin : "",
        paddingTop: semiVerticalMargin,
        paddingBottom: semiVerticalMargin
      } : {
        marginRight: isJustifySpace ? justify === "space-between" && index === lastIndex ? "" : semiHorizontalMargin : index !== lastIndex ? horizontalMargin : "",
        marginLeft: isJustifySpace ? justify === "space-between" && index === 0 ? "" : semiHorizontalMargin : "",
        paddingTop: semiVerticalMargin,
        paddingBottom: semiVerticalMargin
      }
    ] }, child)));
  }
});
function useMessage() {
  const api = inject(messageApiInjectionKey, null);
  if (api === null) {
    throwError("use-message", "No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A.");
  }
  return api;
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
export {
  NSpace as N,
  _export_sfc as _,
  NIcon as a,
  flatten as b,
  formatLength as f,
  getSlot as g,
  isBrowser as i,
  useMessage as u
};
