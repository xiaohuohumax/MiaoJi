import { bp as isVNode, a_ as Comment, L as Fragment, b as c, c as cB, bq as asModal, a as cM, U as cE, br as insideModal, bs as insidePopover, d as defineComponent, u as useConfig, g as useTheme, a2 as useRtl, f as computed, j as useThemeClass, h, bt as NBaseClose, bu as cardLight, a4 as createKey } from "./index-7a7392d0.js";
function depx(value) {
  if (typeof value === "string") {
    if (value.endsWith("px")) {
      return Number(value.slice(0, value.length - 2));
    }
    return Number(value);
  }
  return value;
}
function pxfy(value) {
  if (value === void 0 || value === null)
    return void 0;
  if (typeof value === "number")
    return `${value}px`;
  if (value.endsWith("px"))
    return value;
  return `${value}px`;
}
function getMargin(value, position) {
  const parts = value.trim().split(/\s+/g);
  const margin = {
    top: parts[0]
  };
  switch (parts.length) {
    case 1:
      margin.right = parts[0];
      margin.bottom = parts[0];
      margin.left = parts[0];
      break;
    case 2:
      margin.right = parts[1];
      margin.left = parts[1];
      margin.bottom = parts[0];
      break;
    case 3:
      margin.right = parts[1];
      margin.bottom = parts[2];
      margin.left = parts[1];
      break;
    case 4:
      margin.right = parts[1];
      margin.bottom = parts[2];
      margin.left = parts[3];
      break;
    default:
      throw new Error("[seemly/getMargin]:" + value + " is not a valid value.");
  }
  if (position === void 0)
    return margin;
  return margin[position];
}
function getGap(value, orient) {
  const [rowGap, colGap] = value.split(" ");
  if (!orient)
    return {
      row: rowGap,
      col: colGap || rowGap
    };
  return orient === "row" ? rowGap : colGap;
}
function call(funcs, ...args) {
  if (Array.isArray(funcs)) {
    funcs.forEach((func) => call(func, ...args));
  } else
    return funcs(...args);
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child)) {
      return true;
    }
    if (child.type === Comment) {
      return false;
    }
    if (child.type === Fragment && !ensureValidVNode(child.children)) {
      return false;
    }
    return true;
  }) ? vnodes : null;
}
function resolveSlot(slot, fallback) {
  return slot && ensureValidVNode(slot()) || fallback();
}
function resolveSlotWithProps(slot, props, fallback) {
  return slot && ensureValidVNode(slot(props)) || fallback(props);
}
function resolveWrappedSlot(slot, wrapper) {
  const children = slot && ensureValidVNode(slot());
  return wrapper(children || null);
}
function isSlotEmpty(slot) {
  return !(slot && ensureValidVNode(slot()));
}
const style = c([cB("card", `
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [asModal({
  background: "var(--n-color-modal)"
}), cM("hoverable", [c("&:hover", "box-shadow: var(--n-box-shadow);")]), cM("content-segmented", [c(">", [cE("content", {
  paddingTop: "var(--n-padding-bottom)"
})])]), cM("content-soft-segmented", [c(">", [cE("content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]), cM("footer-segmented", [c(">", [cE("footer", {
  paddingTop: "var(--n-padding-bottom)"
})])]), cM("footer-soft-segmented", [c(">", [cE("footer", `
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]), c(">", [cB("card-header", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `, [cE("main", `
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `), cE("extra", `
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), cE("close", `
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), cE("action", `
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `), cE("content", "flex: 1; min-width: 0;"), cE("content, footer", `
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `, [c("&:first-child", {
  paddingTop: "var(--n-padding-bottom)"
})]), cE("action", `
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]), cB("card-cover", `
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `, [c("img", `
 display: block;
 width: 100%;
 `)]), cM("bordered", `
 border: 1px solid var(--n-border-color);
 `, [c("&:target", "border-color: var(--n-color-target);")]), cM("action-segmented", [c(">", [cE("action", [c("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), cM("content-segmented, content-soft-segmented", [c(">", [cE("content", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [c("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), cM("footer-segmented, footer-soft-segmented", [c(">", [cE("footer", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [c("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), cM("embedded", `
 background-color: var(--n-color-embedded);
 `)]), insideModal(cB("card", `
 background: var(--n-color-modal);
 `, [cM("embedded", `
 background-color: var(--n-color-embedded-modal);
 `)])), insidePopover(cB("card", `
 background: var(--n-color-popover);
 `, [cM("embedded", `
 background-color: var(--n-color-embedded-popover);
 `)]))]);
const cardBaseProps = {
  title: String,
  contentClass: String,
  contentStyle: [Object, String],
  headerClass: String,
  headerStyle: [Object, String],
  headerExtraClass: String,
  headerExtraStyle: [Object, String],
  footerClass: String,
  footerStyle: [Object, String],
  embedded: Boolean,
  segmented: {
    type: [Boolean, Object],
    default: false
  },
  size: {
    type: String,
    default: "medium"
  },
  bordered: {
    type: Boolean,
    default: true
  },
  closable: Boolean,
  hoverable: Boolean,
  role: String,
  onClose: [Function, Array],
  tag: {
    type: String,
    default: "div"
  }
};
const cardProps = Object.assign(Object.assign({}, useTheme.props), cardBaseProps);
const NCard = defineComponent({
  name: "Card",
  props: cardProps,
  setup(props) {
    const handleCloseClick = () => {
      const { onClose } = props;
      if (onClose)
        call(onClose);
    };
    const { inlineThemeDisabled, mergedClsPrefixRef, mergedRtlRef } = useConfig(props);
    const themeRef = useTheme("Card", "-card", style, cardLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Card", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { size } = props;
      const { self: { color, colorModal, colorTarget, textColor, titleTextColor, titleFontWeight, borderColor, actionColor, borderRadius, lineHeight, closeIconColor, closeIconColorHover, closeIconColorPressed, closeColorHover, closeColorPressed, closeBorderRadius, closeIconSize, closeSize, boxShadow, colorPopover, colorEmbedded, colorEmbeddedModal, colorEmbeddedPopover, [createKey("padding", size)]: padding, [createKey("fontSize", size)]: fontSize, [createKey("titleFontSize", size)]: titleFontSize }, common: { cubicBezierEaseInOut } } = themeRef.value;
      const { top: paddingTop, left: paddingLeft, bottom: paddingBottom } = getMargin(padding);
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-border-radius": borderRadius,
        "--n-color": color,
        "--n-color-modal": colorModal,
        "--n-color-popover": colorPopover,
        "--n-color-embedded": colorEmbedded,
        "--n-color-embedded-modal": colorEmbeddedModal,
        "--n-color-embedded-popover": colorEmbeddedPopover,
        "--n-color-target": colorTarget,
        "--n-text-color": textColor,
        "--n-line-height": lineHeight,
        "--n-action-color": actionColor,
        "--n-title-text-color": titleTextColor,
        "--n-title-font-weight": titleFontWeight,
        "--n-close-icon-color": closeIconColor,
        "--n-close-icon-color-hover": closeIconColorHover,
        "--n-close-icon-color-pressed": closeIconColorPressed,
        "--n-close-color-hover": closeColorHover,
        "--n-close-color-pressed": closeColorPressed,
        "--n-border-color": borderColor,
        "--n-box-shadow": boxShadow,
        // size
        "--n-padding-top": paddingTop,
        "--n-padding-bottom": paddingBottom,
        "--n-padding-left": paddingLeft,
        "--n-font-size": fontSize,
        "--n-title-font-size": titleFontSize,
        "--n-close-size": closeSize,
        "--n-close-icon-size": closeIconSize,
        "--n-close-border-radius": closeBorderRadius
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("card", computed(() => {
      return props.size[0];
    }), cssVarsRef, props) : void 0;
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: themeRef,
      handleCloseClick,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const { footerStyle, headerExtraClass, headerClass, contentClass, segmented, bordered, hoverable, mergedClsPrefix, rtlEnabled, onRender, embedded, tag: Component, $slots } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h(
      Component,
      { class: [
        `${mergedClsPrefix}-card`,
        this.themeClass,
        embedded && `${mergedClsPrefix}-card--embedded`,
        {
          [`${mergedClsPrefix}-card--rtl`]: rtlEnabled,
          [`${mergedClsPrefix}-card--content${typeof segmented !== "boolean" && segmented.content === "soft" ? "-soft" : ""}-segmented`]: segmented === true || segmented !== false && segmented.content,
          [`${mergedClsPrefix}-card--footer${typeof segmented !== "boolean" && segmented.footer === "soft" ? "-soft" : ""}-segmented`]: segmented === true || segmented !== false && segmented.footer,
          [`${mergedClsPrefix}-card--action-segmented`]: segmented === true || segmented !== false && segmented.action,
          [`${mergedClsPrefix}-card--bordered`]: bordered,
          [`${mergedClsPrefix}-card--hoverable`]: hoverable
        }
      ], style: this.cssVars, role: this.role },
      resolveWrappedSlot($slots.cover, (children) => children && h("div", { class: `${mergedClsPrefix}-card-cover`, role: "none" }, children)),
      resolveWrappedSlot($slots.header, (children) => {
        return children || this.title || this.closable ? h(
          "div",
          { class: [`${mergedClsPrefix}-card-header`, headerClass], style: this.headerStyle },
          h("div", { class: `${mergedClsPrefix}-card-header__main`, role: "heading" }, children || this.title),
          resolveWrappedSlot($slots["header-extra"], (children2) => children2 && h("div", { class: [
            `${mergedClsPrefix}-card-header__extra`,
            headerExtraClass
          ], style: this.headerExtraStyle }, children2)),
          this.closable ? h(NBaseClose, { clsPrefix: mergedClsPrefix, class: `${mergedClsPrefix}-card-header__close`, onClick: this.handleCloseClick, absolute: true }) : null
        ) : null;
      }),
      resolveWrappedSlot($slots.default, (children) => children && h("div", { class: [`${mergedClsPrefix}-card__content`, contentClass], style: this.contentStyle, role: "none" }, children)),
      resolveWrappedSlot($slots.footer, (children) => children && [
        h("div", { class: [`${mergedClsPrefix}-card__footer`, footerStyle], style: this.footerStyle, role: "none" }, children)
      ]),
      resolveWrappedSlot($slots.action, (children) => children && h("div", { class: `${mergedClsPrefix}-card__action`, role: "none" }, children))
    );
  }
});
export {
  NCard as N,
  resolveSlotWithProps as a,
  resolveWrappedSlot as b,
  call as c,
  getGap as d,
  depx as e,
  getMargin as g,
  isSlotEmpty as i,
  pxfy as p,
  resolveSlot as r
};
