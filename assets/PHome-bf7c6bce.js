import { P as upperFirst, Q as toString, d as defineComponent, h, R as replaceable, c as cB, b as c, S as cE, U as iconSwitchTransition, V as useStyle, t as toRef, W as NIconSwitchTransition, N as NBaseIcon, X as NBaseLoading, Y as createInjectionKey, r as ref, e as watch, p as inject, f as computed, a as cM, Z as cNotM, u as useConfig, g as useTheme, _ as useMemo, o as onMounted, $ as getCurrentInstance, w as watchEffect, a0 as provide, a1 as useRtl, j as useThemeClass, L as Fragment, n as nextTick, a2 as inputLight, a3 as createKey, a4 as cloneVNode, q as throwError, a5 as onBeforeUpdate, a6 as indexMap, i as onBeforeUnmount, a7 as onUpdated, a8 as withDirectives, a9 as vShow, T as Transition, aa as normalizeStyle, ab as carouselLight, I as IconWrapper, v as createVNode, J as useAppStore, G as unref, y as openBlock, B as createBlock, A as withCtx, z as createElementBlock, M as renderList, D as createCommentVNode, ac as onBeforeRouteUpdate, ad as onActivated, ae as onBeforeRouteLeave, O as useRouter, x as resolveComponent, E as createBaseVNode, H as createTextVNode, F as toDisplayString, af as removeFuncLabels, ag as to, ah as issueApi } from "./index-2ff28f77.js";
import { i as isSafari, u as useFormItem, w as watchLoading, N as NButton, C as COver, _ as _sfc_main$2 } from "./COver-141fd53a.js";
import { _ as _sfc_main$3 } from "./CLabel.vue_vue_type_script_setup_true_lang-5f2d3974.js";
import { C as CMarkdown } from "./CMarkdown-bbf8b408.js";
import { u as useLocale, N as NTime, _ as _sfc_main$4 } from "./CReactions.vue_vue_type_script_setup_true_lang-47dc8c86.js";
import { a as appConfig } from "../app.config.js";
import { c as createCompounder, N as NScrollbar, o as on, a as off, k as keep, g as getPreciseEventTarget, b as NImage } from "./Image-f2290e6d.js";
import { u as useMergedState } from "./fade-in-scale-up.cssr-de48a42b.js";
import { b as flatten, N as NSpace } from "./_plugin-vue_export-helper-2b0fed72.js";
import { V as VResizeObserver } from "./VResizeObserver-df570f05.js";
import { r as resolveSlot, a as resolveSlotWithProps, b as resolveWrappedSlot, c as call, g as getMargin, N as NCard } from "./Card-bc1cf177.js";
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});
const camelCase$1 = camelCase;
const EyeIcon = defineComponent({
  name: "Eye",
  render() {
    return h(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
      h("path", { d: "M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z", fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "32" }),
      h("circle", { cx: "256", cy: "256", r: "80", fill: "none", stroke: "currentColor", "stroke-miterlimit": "10", "stroke-width": "32" })
    );
  }
});
const EyeOffIcon = defineComponent({
  name: "EyeOff",
  render() {
    return h(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
      h("path", { d: "M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z", fill: "currentColor" }),
      h("path", { d: "M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z", fill: "currentColor" }),
      h("path", { d: "M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z", fill: "currentColor" }),
      h("path", { d: "M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z", fill: "currentColor" }),
      h("path", { d: "M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z", fill: "currentColor" })
    );
  }
});
const ChevronDownIcon = defineComponent({
  name: "ChevronDown",
  render() {
    return h(
      "svg",
      { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      h("path", { d: "M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z", fill: "currentColor" })
    );
  }
});
const ClearIcon = replaceable("clear", h(
  "svg",
  { viewBox: "0 0 16 16", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
  h(
    "g",
    { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
    h(
      "g",
      { fill: "currentColor", "fill-rule": "nonzero" },
      h("path", { d: "M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z" })
    )
  )
));
const style$2 = cB("base-clear", `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [c(">", [cE("clear", `
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `, [c("&:hover", `
 color: var(--n-clear-color-hover)!important;
 `), c("&:active", `
 color: var(--n-clear-color-pressed)!important;
 `)]), cE("placeholder", `
 display: flex;
 `), cE("clear, placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [iconSwitchTransition({
  originalTransform: "translateX(-50%) translateY(-50%)",
  left: "50%",
  top: "50%"
})])])]);
const NBaseClear = defineComponent({
  name: "BaseClear",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    show: Boolean,
    onClear: Function
  },
  setup(props) {
    useStyle("-base-clear", style$2, toRef(props, "clsPrefix"));
    return {
      handleMouseDown(e) {
        var _a;
        e.preventDefault();
        (_a = props.onClear) === null || _a === void 0 ? void 0 : _a.call(props, e);
      }
    };
  },
  render() {
    const { clsPrefix } = this;
    return h(
      "div",
      { class: `${clsPrefix}-base-clear` },
      h(NIconSwitchTransition, null, {
        default: () => {
          var _a, _b;
          return this.show ? h("div", { key: "dismiss", class: `${clsPrefix}-base-clear__clear`, onClick: this.onClear, onMousedown: this.handleMouseDown, "data-clear": true }, resolveSlot(this.$slots.icon, () => [
            h(NBaseIcon, { clsPrefix }, {
              default: () => h(ClearIcon, null)
            })
          ])) : h("div", { key: "icon", class: `${clsPrefix}-base-clear__placeholder` }, (_b = (_a = this.$slots).placeholder) === null || _b === void 0 ? void 0 : _b.call(_a));
        }
      })
    );
  }
});
const NBaseSuffix = defineComponent({
  name: "InternalSelectionSuffix",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    showArrow: {
      type: Boolean,
      default: void 0
    },
    showClear: {
      type: Boolean,
      default: void 0
    },
    loading: {
      type: Boolean,
      default: false
    },
    onClear: Function
  },
  setup(props, { slots }) {
    return () => {
      const { clsPrefix } = props;
      return h(NBaseLoading, { clsPrefix, class: `${clsPrefix}-base-suffix`, strokeWidth: 24, scale: 0.85, show: props.loading }, {
        default: () => props.showArrow ? h(NBaseClear, { clsPrefix, show: props.showClear, onClear: props.onClear }, {
          placeholder: () => h(NBaseIcon, { clsPrefix, class: `${clsPrefix}-base-suffix__arrow` }, {
            default: () => resolveSlot(slots.default, () => [
              h(ChevronDownIcon, null)
            ])
          })
        }) : null
      });
    };
  }
});
const inputInjectionKey = createInjectionKey("n-input");
function len(s) {
  let count = 0;
  for (const _ of s) {
    count++;
  }
  return count;
}
function isEmptyInputValue(value) {
  return value === "" || value == null;
}
function useCursor(inputElRef) {
  const selectionRef = ref(null);
  function recordCursor() {
    const { value: input } = inputElRef;
    if (!(input === null || input === void 0 ? void 0 : input.focus)) {
      reset();
      return;
    }
    const { selectionStart, selectionEnd, value } = input;
    if (selectionStart == null || selectionEnd == null) {
      reset();
      return;
    }
    selectionRef.value = {
      start: selectionStart,
      end: selectionEnd,
      beforeText: value.slice(0, selectionStart),
      afterText: value.slice(selectionEnd)
    };
  }
  function restoreCursor() {
    var _a;
    const { value: selection } = selectionRef;
    const { value: inputEl } = inputElRef;
    if (!selection || !inputEl) {
      return;
    }
    const { value } = inputEl;
    const { start, beforeText, afterText } = selection;
    let startPos = value.length;
    if (value.endsWith(afterText)) {
      startPos = value.length - afterText.length;
    } else if (value.startsWith(beforeText)) {
      startPos = beforeText.length;
    } else {
      const beforeLastChar = beforeText[start - 1];
      const newIndex = value.indexOf(beforeLastChar, start - 1);
      if (newIndex !== -1) {
        startPos = newIndex + 1;
      }
    }
    (_a = inputEl.setSelectionRange) === null || _a === void 0 ? void 0 : _a.call(inputEl, startPos, startPos);
  }
  function reset() {
    selectionRef.value = null;
  }
  watch(inputElRef, reset);
  return {
    recordCursor,
    restoreCursor
  };
}
const WordCount = defineComponent({
  name: "InputWordCount",
  setup(_, { slots }) {
    const { mergedValueRef, maxlengthRef, mergedClsPrefixRef, countGraphemesRef } = (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      inject(inputInjectionKey)
    );
    const wordCountRef = computed(() => {
      const { value: mergedValue } = mergedValueRef;
      if (mergedValue === null || Array.isArray(mergedValue))
        return 0;
      return (countGraphemesRef.value || len)(mergedValue);
    });
    return () => {
      const { value: maxlength } = maxlengthRef;
      const { value: mergedValue } = mergedValueRef;
      return h("span", { class: `${mergedClsPrefixRef.value}-input-word-count` }, resolveSlotWithProps(slots.default, {
        value: mergedValue === null || Array.isArray(mergedValue) ? "" : mergedValue
      }, () => [
        maxlength === void 0 ? wordCountRef.value : `${wordCountRef.value} / ${maxlength}`
      ]));
    };
  }
});
const style$1 = cB("input", `
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`, [
  // common
  cE("input, textarea", `
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),
  cE("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder", `
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),
  cE("input-el, textarea-el", `
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `, [c("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), c("&::placeholder", `
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `), c("&:-webkit-autofill ~", [cE("placeholder", "display: none;")])]),
  cM("round", [cNotM("textarea", "border-radius: calc(var(--n-height) / 2);")]),
  cE("placeholder", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `, [c("span", `
 width: 100%;
 display: inline-block;
 `)]),
  cM("textarea", [cE("placeholder", "overflow: visible;")]),
  cNotM("autosize", "width: 100%;"),
  cM("autosize", [cE("textarea-el, input-el", `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),
  // input
  cB("input-wrapper", `
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),
  cE("input-mirror", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),
  cE("input-el", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [c("&[type=password]::-ms-reveal", "display: none;"), c("+", [cE("placeholder", `
 display: flex;
 align-items: center; 
 `)])]),
  cNotM("textarea", [cE("placeholder", "white-space: nowrap;")]),
  cE("eye", `
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),
  // textarea
  cM("textarea", "width: 100%;", [cB("input-word-count", `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), cM("resizable", [cB("input-wrapper", `
 resize: vertical;
 min-height: var(--n-height);
 `)]), cE("textarea-el, textarea-mirror, placeholder", `
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `), cE("textarea-mirror", `
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),
  // pair
  cM("pair", [cE("input-el, placeholder", "text-align: center;"), cE("separator", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `, [cB("icon", `
 color: var(--n-icon-color);
 `), cB("base-icon", `
 color: var(--n-icon-color);
 `)])]),
  cM("disabled", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [cE("border", "border: var(--n-border-disabled);"), cE("input-el, textarea-el", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), cE("placeholder", "color: var(--n-placeholder-color-disabled);"), cE("separator", "color: var(--n-text-color-disabled);", [cB("icon", `
 color: var(--n-icon-color-disabled);
 `), cB("base-icon", `
 color: var(--n-icon-color-disabled);
 `)]), cB("input-word-count", `
 color: var(--n-count-text-color-disabled);
 `), cE("suffix, prefix", "color: var(--n-text-color-disabled);", [cB("icon", `
 color: var(--n-icon-color-disabled);
 `), cB("internal-icon", `
 color: var(--n-icon-color-disabled);
 `)])]),
  cNotM("disabled", [cE("eye", `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [c("&:hover", `
 color: var(--n-icon-color-hover);
 `), c("&:active", `
 color: var(--n-icon-color-pressed);
 `)]), c("&:hover", [cE("state-border", "border: var(--n-border-hover);")]), cM("focus", "background-color: var(--n-color-focus);", [cE("state-border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),
  cE("border, state-border", `
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),
  cE("state-border", `
 border-color: #0000;
 z-index: 1;
 `),
  cE("prefix", "margin-right: 4px;"),
  cE("suffix", `
 margin-left: 4px;
 `),
  cE("suffix, prefix", `
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `, [cB("base-loading", `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), cB("base-clear", `
 font-size: var(--n-icon-size);
 `, [cE("placeholder", [cB("base-icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), c(">", [cB("icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), cB("base-icon", `
 font-size: var(--n-icon-size);
 `)]),
  cB("input-word-count", `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),
  ["warning", "error"].map((status) => cM(`${status}-status`, [cNotM("disabled", [cB("base-loading", `
 color: var(--n-loading-color-${status})
 `), cE("input-el, textarea-el", `
 caret-color: var(--n-caret-color-${status});
 `), cE("state-border", `
 border: var(--n-border-${status});
 `), c("&:hover", [cE("state-border", `
 border: var(--n-border-hover-${status});
 `)]), c("&:focus", `
 background-color: var(--n-color-focus-${status});
 `, [cE("state-border", `
 box-shadow: var(--n-box-shadow-focus-${status});
 border: var(--n-border-focus-${status});
 `)]), cM("focus", `
 background-color: var(--n-color-focus-${status});
 `, [cE("state-border", `
 box-shadow: var(--n-box-shadow-focus-${status});
 border: var(--n-border-focus-${status});
 `)])])]))
]);
const safariStyle = cB("input", [cM("disabled", [cE("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);
const inputProps = Object.assign(Object.assign({}, useTheme.props), {
  bordered: {
    type: Boolean,
    default: void 0
  },
  type: {
    type: String,
    default: "text"
  },
  placeholder: [Array, String],
  defaultValue: {
    type: [String, Array],
    default: null
  },
  value: [String, Array],
  disabled: {
    type: Boolean,
    default: void 0
  },
  size: String,
  rows: {
    type: [Number, String],
    default: 3
  },
  round: Boolean,
  minlength: [String, Number],
  maxlength: [String, Number],
  clearable: Boolean,
  autosize: {
    type: [Boolean, Object],
    default: false
  },
  pair: Boolean,
  separator: String,
  readonly: {
    type: [String, Boolean],
    default: false
  },
  passivelyActivated: Boolean,
  showPasswordOn: String,
  stateful: {
    type: Boolean,
    default: true
  },
  autofocus: Boolean,
  inputProps: Object,
  resizable: {
    type: Boolean,
    default: true
  },
  showCount: Boolean,
  loading: {
    type: Boolean,
    default: void 0
  },
  allowInput: Function,
  renderCount: Function,
  onMousedown: Function,
  onKeydown: Function,
  onKeyup: [Function, Array],
  onInput: [Function, Array],
  onFocus: [Function, Array],
  onBlur: [Function, Array],
  onClick: [Function, Array],
  onChange: [Function, Array],
  onClear: [Function, Array],
  countGraphemes: Function,
  status: String,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  /** private */
  textDecoration: [String, Array],
  attrSize: {
    type: Number,
    default: 20
  },
  onInputBlur: [Function, Array],
  onInputFocus: [Function, Array],
  onDeactivate: [Function, Array],
  onActivate: [Function, Array],
  onWrapperFocus: [Function, Array],
  onWrapperBlur: [Function, Array],
  internalDeactivateOnEnter: Boolean,
  internalForceFocus: Boolean,
  internalLoadingBeforeSuffix: {
    type: Boolean,
    default: true
  },
  /** deprecated */
  showPasswordToggle: Boolean
});
const NInput = defineComponent({
  name: "Input",
  props: inputProps,
  setup(props) {
    const { mergedClsPrefixRef, mergedBorderedRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
    const themeRef = useTheme("Input", "-input", style$1, inputLight, props, mergedClsPrefixRef);
    if (isSafari) {
      useStyle("-input-safari", safariStyle, mergedClsPrefixRef);
    }
    const wrapperElRef = ref(null);
    const textareaElRef = ref(null);
    const textareaMirrorElRef = ref(null);
    const inputMirrorElRef = ref(null);
    const inputElRef = ref(null);
    const inputEl2Ref = ref(null);
    const currentFocusedInputRef = ref(null);
    const focusedInputCursorControl = useCursor(currentFocusedInputRef);
    const textareaScrollbarInstRef = ref(null);
    const { localeRef } = useLocale("Input");
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const formItem = useFormItem(props);
    const { mergedSizeRef, mergedDisabledRef, mergedStatusRef } = formItem;
    const focusedRef = ref(false);
    const hoverRef = ref(false);
    const isComposingRef = ref(false);
    const activatedRef = ref(false);
    let syncSource = null;
    const mergedPlaceholderRef = computed(() => {
      const { placeholder, pair } = props;
      if (pair) {
        if (Array.isArray(placeholder)) {
          return placeholder;
        } else if (placeholder === void 0) {
          return ["", ""];
        }
        return [placeholder, placeholder];
      } else if (placeholder === void 0) {
        return [localeRef.value.placeholder];
      } else {
        return [placeholder];
      }
    });
    const showPlaceholder1Ref = computed(() => {
      const { value: isComposing } = isComposingRef;
      const { value: mergedValue } = mergedValueRef;
      const { value: mergedPlaceholder } = mergedPlaceholderRef;
      return !isComposing && (isEmptyInputValue(mergedValue) || Array.isArray(mergedValue) && isEmptyInputValue(mergedValue[0])) && mergedPlaceholder[0];
    });
    const showPlaceholder2Ref = computed(() => {
      const { value: isComposing } = isComposingRef;
      const { value: mergedValue } = mergedValueRef;
      const { value: mergedPlaceholder } = mergedPlaceholderRef;
      return !isComposing && mergedPlaceholder[1] && (isEmptyInputValue(mergedValue) || Array.isArray(mergedValue) && isEmptyInputValue(mergedValue[1]));
    });
    const mergedFocusRef = useMemo(() => {
      return props.internalForceFocus || focusedRef.value;
    });
    const showClearButton = useMemo(() => {
      if (mergedDisabledRef.value || props.readonly || !props.clearable || !mergedFocusRef.value && !hoverRef.value) {
        return false;
      }
      const { value: mergedValue } = mergedValueRef;
      const { value: mergedFocus } = mergedFocusRef;
      if (props.pair) {
        return !!(Array.isArray(mergedValue) && (mergedValue[0] || mergedValue[1])) && (hoverRef.value || mergedFocus);
      } else {
        return !!mergedValue && (hoverRef.value || mergedFocus);
      }
    });
    const mergedShowPasswordOnRef = computed(() => {
      const { showPasswordOn } = props;
      if (showPasswordOn) {
        return showPasswordOn;
      }
      if (props.showPasswordToggle)
        return "click";
      return void 0;
    });
    const passwordVisibleRef = ref(false);
    const textDecorationStyleRef = computed(() => {
      const { textDecoration } = props;
      if (!textDecoration)
        return ["", ""];
      if (Array.isArray(textDecoration)) {
        return textDecoration.map((v) => ({
          textDecoration: v
        }));
      }
      return [
        {
          textDecoration
        }
      ];
    });
    const textAreaScrollContainerWidthRef = ref(void 0);
    const updateTextAreaStyle = () => {
      var _a, _b;
      if (props.type === "textarea") {
        const { autosize } = props;
        if (autosize) {
          textAreaScrollContainerWidthRef.value = (_b = (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.$el) === null || _b === void 0 ? void 0 : _b.offsetWidth;
        }
        if (!textareaElRef.value)
          return;
        if (typeof autosize === "boolean")
          return;
        const { paddingTop: stylePaddingTop, paddingBottom: stylePaddingBottom, lineHeight: styleLineHeight } = window.getComputedStyle(textareaElRef.value);
        const paddingTop = Number(stylePaddingTop.slice(0, -2));
        const paddingBottom = Number(stylePaddingBottom.slice(0, -2));
        const lineHeight = Number(styleLineHeight.slice(0, -2));
        const { value: textareaMirrorEl } = textareaMirrorElRef;
        if (!textareaMirrorEl)
          return;
        if (autosize.minRows) {
          const minRows = Math.max(autosize.minRows, 1);
          const styleMinHeight = `${paddingTop + paddingBottom + lineHeight * minRows}px`;
          textareaMirrorEl.style.minHeight = styleMinHeight;
        }
        if (autosize.maxRows) {
          const styleMaxHeight = `${paddingTop + paddingBottom + lineHeight * autosize.maxRows}px`;
          textareaMirrorEl.style.maxHeight = styleMaxHeight;
        }
      }
    };
    const maxlengthRef = computed(() => {
      const { maxlength } = props;
      return maxlength === void 0 ? void 0 : Number(maxlength);
    });
    onMounted(() => {
      const { value } = mergedValueRef;
      if (!Array.isArray(value)) {
        syncMirror(value);
      }
    });
    const vm = getCurrentInstance().proxy;
    function doUpdateValue(value) {
      const { onUpdateValue, "onUpdate:value": _onUpdateValue, onInput } = props;
      const { nTriggerFormInput } = formItem;
      if (onUpdateValue)
        call(onUpdateValue, value);
      if (_onUpdateValue)
        call(_onUpdateValue, value);
      if (onInput)
        call(onInput, value);
      uncontrolledValueRef.value = value;
      nTriggerFormInput();
    }
    function doChange(value) {
      const { onChange } = props;
      const { nTriggerFormChange } = formItem;
      if (onChange)
        call(onChange, value);
      uncontrolledValueRef.value = value;
      nTriggerFormChange();
    }
    function doBlur(e) {
      const { onBlur } = props;
      const { nTriggerFormBlur } = formItem;
      if (onBlur)
        call(onBlur, e);
      nTriggerFormBlur();
    }
    function doFocus(e) {
      const { onFocus } = props;
      const { nTriggerFormFocus } = formItem;
      if (onFocus)
        call(onFocus, e);
      nTriggerFormFocus();
    }
    function doClear(e) {
      const { onClear } = props;
      if (onClear)
        call(onClear, e);
    }
    function doUpdateValueBlur(e) {
      const { onInputBlur } = props;
      if (onInputBlur)
        call(onInputBlur, e);
    }
    function doUpdateValueFocus(e) {
      const { onInputFocus } = props;
      if (onInputFocus)
        call(onInputFocus, e);
    }
    function doDeactivate() {
      const { onDeactivate } = props;
      if (onDeactivate)
        call(onDeactivate);
    }
    function doActivate() {
      const { onActivate } = props;
      if (onActivate)
        call(onActivate);
    }
    function doClick(e) {
      const { onClick } = props;
      if (onClick)
        call(onClick, e);
    }
    function doWrapperFocus(e) {
      const { onWrapperFocus } = props;
      if (onWrapperFocus)
        call(onWrapperFocus, e);
    }
    function doWrapperBlur(e) {
      const { onWrapperBlur } = props;
      if (onWrapperBlur)
        call(onWrapperBlur, e);
    }
    function handleCompositionStart() {
      isComposingRef.value = true;
    }
    function handleCompositionEnd(e) {
      isComposingRef.value = false;
      if (e.target === inputEl2Ref.value) {
        handleInput(e, 1);
      } else {
        handleInput(e, 0);
      }
    }
    function handleInput(e, index = 0, event = "input") {
      const targetValue = e.target.value;
      syncMirror(targetValue);
      if (e instanceof InputEvent && !e.isComposing) {
        isComposingRef.value = false;
      }
      if (props.type === "textarea") {
        const { value: textareaScrollbarInst } = textareaScrollbarInstRef;
        if (textareaScrollbarInst) {
          textareaScrollbarInst.syncUnifiedContainer();
        }
      }
      syncSource = targetValue;
      if (isComposingRef.value)
        return;
      focusedInputCursorControl.recordCursor();
      const isIncomingValueValid = allowInput(targetValue);
      if (isIncomingValueValid) {
        if (!props.pair) {
          event === "input" ? doUpdateValue(targetValue) : doChange(targetValue);
        } else {
          let { value } = mergedValueRef;
          if (!Array.isArray(value)) {
            value = ["", ""];
          } else {
            value = [value[0], value[1]];
          }
          value[index] = targetValue;
          event === "input" ? doUpdateValue(value) : doChange(value);
        }
      }
      vm.$forceUpdate();
      if (!isIncomingValueValid) {
        void nextTick(focusedInputCursorControl.restoreCursor);
      }
    }
    function allowInput(value) {
      const { countGraphemes, maxlength, minlength } = props;
      if (countGraphemes) {
        let graphemesCount;
        if (maxlength !== void 0) {
          if (graphemesCount === void 0) {
            graphemesCount = countGraphemes(value);
          }
          if (graphemesCount > Number(maxlength))
            return false;
        }
        if (minlength !== void 0) {
          if (graphemesCount === void 0) {
            graphemesCount = countGraphemes(value);
          }
          if (graphemesCount < Number(maxlength))
            return false;
        }
      }
      const { allowInput: allowInput2 } = props;
      if (typeof allowInput2 === "function") {
        return allowInput2(value);
      }
      return true;
    }
    function handleInputBlur(e) {
      doUpdateValueBlur(e);
      if (e.relatedTarget === wrapperElRef.value) {
        doDeactivate();
      }
      if (!(e.relatedTarget !== null && (e.relatedTarget === inputElRef.value || e.relatedTarget === inputEl2Ref.value || e.relatedTarget === textareaElRef.value))) {
        activatedRef.value = false;
      }
      dealWithEvent(e, "blur");
      currentFocusedInputRef.value = null;
    }
    function handleInputFocus(e, index) {
      doUpdateValueFocus(e);
      focusedRef.value = true;
      activatedRef.value = true;
      doActivate();
      dealWithEvent(e, "focus");
      if (index === 0) {
        currentFocusedInputRef.value = inputElRef.value;
      } else if (index === 1) {
        currentFocusedInputRef.value = inputEl2Ref.value;
      } else if (index === 2) {
        currentFocusedInputRef.value = textareaElRef.value;
      }
    }
    function handleWrapperBlur(e) {
      if (props.passivelyActivated) {
        doWrapperBlur(e);
        dealWithEvent(e, "blur");
      }
    }
    function handleWrapperFocus(e) {
      if (props.passivelyActivated) {
        focusedRef.value = true;
        doWrapperFocus(e);
        dealWithEvent(e, "focus");
      }
    }
    function dealWithEvent(e, type) {
      if (e.relatedTarget !== null && (e.relatedTarget === inputElRef.value || e.relatedTarget === inputEl2Ref.value || e.relatedTarget === textareaElRef.value || e.relatedTarget === wrapperElRef.value))
        ;
      else {
        if (type === "focus") {
          doFocus(e);
          focusedRef.value = true;
        } else if (type === "blur") {
          doBlur(e);
          focusedRef.value = false;
        }
      }
    }
    function handleChange(e, index) {
      handleInput(e, index, "change");
    }
    function handleClick(e) {
      doClick(e);
    }
    function handleClear(e) {
      doClear(e);
      if (props.pair) {
        doUpdateValue(["", ""]);
        doChange(["", ""]);
      } else {
        doUpdateValue("");
        doChange("");
      }
    }
    function handleMouseDown(e) {
      const { onMousedown } = props;
      if (onMousedown)
        onMousedown(e);
      const { tagName } = e.target;
      if (tagName !== "INPUT" && tagName !== "TEXTAREA") {
        if (props.resizable) {
          const { value: wrapperEl } = wrapperElRef;
          if (wrapperEl) {
            const { left, top, width, height } = wrapperEl.getBoundingClientRect();
            const resizeHandleSize = 14;
            if (left + width - resizeHandleSize < e.clientX && e.clientX < left + width && top + height - resizeHandleSize < e.clientY && e.clientY < top + height) {
              return;
            }
          }
        }
        e.preventDefault();
        if (!focusedRef.value) {
          focus();
        }
      }
    }
    function handleMouseEnter() {
      var _a;
      hoverRef.value = true;
      if (props.type === "textarea") {
        (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.handleMouseEnterWrapper();
      }
    }
    function handleMouseLeave() {
      var _a;
      hoverRef.value = false;
      if (props.type === "textarea") {
        (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.handleMouseLeaveWrapper();
      }
    }
    function handlePasswordToggleClick() {
      if (mergedDisabledRef.value)
        return;
      if (mergedShowPasswordOnRef.value !== "click")
        return;
      passwordVisibleRef.value = !passwordVisibleRef.value;
    }
    function handlePasswordToggleMousedown(e) {
      if (mergedDisabledRef.value)
        return;
      e.preventDefault();
      const preventDefaultOnce = (e2) => {
        e2.preventDefault();
        off("mouseup", document, preventDefaultOnce);
      };
      on("mouseup", document, preventDefaultOnce);
      if (mergedShowPasswordOnRef.value !== "mousedown")
        return;
      passwordVisibleRef.value = true;
      const hidePassword = () => {
        passwordVisibleRef.value = false;
        off("mouseup", document, hidePassword);
      };
      on("mouseup", document, hidePassword);
    }
    function handleWrapperKeyup(e) {
      if (props.onKeyup)
        call(props.onKeyup, e);
    }
    function handleWrapperKeydown(e) {
      if (props.onKeydown)
        call(props.onKeydown, e);
      switch (e.key) {
        case "Escape":
          handleWrapperKeydownEsc();
          break;
        case "Enter":
          handleWrapperKeydownEnter(e);
          break;
      }
    }
    function handleWrapperKeydownEnter(e) {
      var _a, _b;
      if (props.passivelyActivated) {
        const { value: focused } = activatedRef;
        if (focused) {
          if (props.internalDeactivateOnEnter) {
            handleWrapperKeydownEsc();
          }
          return;
        }
        e.preventDefault();
        if (props.type === "textarea") {
          (_a = textareaElRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        } else {
          (_b = inputElRef.value) === null || _b === void 0 ? void 0 : _b.focus();
        }
      }
    }
    function handleWrapperKeydownEsc() {
      if (props.passivelyActivated) {
        activatedRef.value = false;
        void nextTick(() => {
          var _a;
          (_a = wrapperElRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        });
      }
    }
    function focus() {
      var _a, _b, _c;
      if (mergedDisabledRef.value)
        return;
      if (props.passivelyActivated) {
        (_a = wrapperElRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      } else {
        (_b = textareaElRef.value) === null || _b === void 0 ? void 0 : _b.focus();
        (_c = inputElRef.value) === null || _c === void 0 ? void 0 : _c.focus();
      }
    }
    function blur() {
      var _a;
      if ((_a = wrapperElRef.value) === null || _a === void 0 ? void 0 : _a.contains(document.activeElement)) {
        document.activeElement.blur();
      }
    }
    function select() {
      var _a, _b;
      (_a = textareaElRef.value) === null || _a === void 0 ? void 0 : _a.select();
      (_b = inputElRef.value) === null || _b === void 0 ? void 0 : _b.select();
    }
    function activate() {
      if (mergedDisabledRef.value)
        return;
      if (textareaElRef.value)
        textareaElRef.value.focus();
      else if (inputElRef.value)
        inputElRef.value.focus();
    }
    function deactivate() {
      const { value: wrapperEl } = wrapperElRef;
      if ((wrapperEl === null || wrapperEl === void 0 ? void 0 : wrapperEl.contains(document.activeElement)) && wrapperEl !== document.activeElement) {
        handleWrapperKeydownEsc();
      }
    }
    function scrollTo(options) {
      if (props.type === "textarea") {
        const { value: textareaEl } = textareaElRef;
        textareaEl === null || textareaEl === void 0 ? void 0 : textareaEl.scrollTo(options);
      } else {
        const { value: inputEl } = inputElRef;
        inputEl === null || inputEl === void 0 ? void 0 : inputEl.scrollTo(options);
      }
    }
    function syncMirror(value) {
      const { type, pair, autosize } = props;
      if (!pair && autosize) {
        if (type === "textarea") {
          const { value: textareaMirrorEl } = textareaMirrorElRef;
          if (textareaMirrorEl) {
            textareaMirrorEl.textContent = (value !== null && value !== void 0 ? value : "") + "\r\n";
          }
        } else {
          const { value: inputMirrorEl } = inputMirrorElRef;
          if (inputMirrorEl) {
            if (value) {
              inputMirrorEl.textContent = value;
            } else {
              inputMirrorEl.innerHTML = "&nbsp;";
            }
          }
        }
      }
    }
    function handleTextAreaMirrorResize() {
      updateTextAreaStyle();
    }
    const placeholderStyleRef = ref({
      top: "0"
    });
    function handleTextAreaScroll(e) {
      var _a;
      const { scrollTop } = e.target;
      placeholderStyleRef.value.top = `${-scrollTop}px`;
      (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.syncUnifiedContainer();
    }
    let stopWatchMergedValue1 = null;
    watchEffect(() => {
      const { autosize, type } = props;
      if (autosize && type === "textarea") {
        stopWatchMergedValue1 = watch(mergedValueRef, (value) => {
          if (!Array.isArray(value) && value !== syncSource) {
            syncMirror(value);
          }
        });
      } else {
        stopWatchMergedValue1 === null || stopWatchMergedValue1 === void 0 ? void 0 : stopWatchMergedValue1();
      }
    });
    let stopWatchMergedValue2 = null;
    watchEffect(() => {
      if (props.type === "textarea") {
        stopWatchMergedValue2 = watch(mergedValueRef, (value) => {
          var _a;
          if (!Array.isArray(value) && value !== syncSource) {
            (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.syncUnifiedContainer();
          }
        });
      } else {
        stopWatchMergedValue2 === null || stopWatchMergedValue2 === void 0 ? void 0 : stopWatchMergedValue2();
      }
    });
    provide(inputInjectionKey, {
      mergedValueRef,
      maxlengthRef,
      mergedClsPrefixRef,
      countGraphemesRef: toRef(props, "countGraphemes")
    });
    const exposedProps = {
      wrapperElRef,
      inputElRef,
      textareaElRef,
      isCompositing: isComposingRef,
      focus,
      blur,
      select,
      deactivate,
      activate,
      scrollTo
    };
    const rtlEnabledRef = useRtl("Input", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { value: size } = mergedSizeRef;
      const { common: { cubicBezierEaseInOut }, self: { color, borderRadius, textColor, caretColor, caretColorError, caretColorWarning, textDecorationColor, border, borderDisabled, borderHover, borderFocus, placeholderColor, placeholderColorDisabled, lineHeightTextarea, colorDisabled, colorFocus, textColorDisabled, boxShadowFocus, iconSize, colorFocusWarning, boxShadowFocusWarning, borderWarning, borderFocusWarning, borderHoverWarning, colorFocusError, boxShadowFocusError, borderError, borderFocusError, borderHoverError, clearSize, clearColor, clearColorHover, clearColorPressed, iconColor, iconColorDisabled, suffixTextColor, countTextColor, countTextColorDisabled, iconColorHover, iconColorPressed, loadingColor, loadingColorError, loadingColorWarning, [createKey("padding", size)]: padding, [createKey("fontSize", size)]: fontSize, [createKey("height", size)]: height } } = themeRef.value;
      const { left: paddingLeft, right: paddingRight } = getMargin(padding);
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-count-text-color": countTextColor,
        "--n-count-text-color-disabled": countTextColorDisabled,
        "--n-color": color,
        "--n-font-size": fontSize,
        "--n-border-radius": borderRadius,
        "--n-height": height,
        "--n-padding-left": paddingLeft,
        "--n-padding-right": paddingRight,
        "--n-text-color": textColor,
        "--n-caret-color": caretColor,
        "--n-text-decoration-color": textDecorationColor,
        "--n-border": border,
        "--n-border-disabled": borderDisabled,
        "--n-border-hover": borderHover,
        "--n-border-focus": borderFocus,
        "--n-placeholder-color": placeholderColor,
        "--n-placeholder-color-disabled": placeholderColorDisabled,
        "--n-icon-size": iconSize,
        "--n-line-height-textarea": lineHeightTextarea,
        "--n-color-disabled": colorDisabled,
        "--n-color-focus": colorFocus,
        "--n-text-color-disabled": textColorDisabled,
        "--n-box-shadow-focus": boxShadowFocus,
        "--n-loading-color": loadingColor,
        // form warning
        "--n-caret-color-warning": caretColorWarning,
        "--n-color-focus-warning": colorFocusWarning,
        "--n-box-shadow-focus-warning": boxShadowFocusWarning,
        "--n-border-warning": borderWarning,
        "--n-border-focus-warning": borderFocusWarning,
        "--n-border-hover-warning": borderHoverWarning,
        "--n-loading-color-warning": loadingColorWarning,
        // form error
        "--n-caret-color-error": caretColorError,
        "--n-color-focus-error": colorFocusError,
        "--n-box-shadow-focus-error": boxShadowFocusError,
        "--n-border-error": borderError,
        "--n-border-focus-error": borderFocusError,
        "--n-border-hover-error": borderHoverError,
        "--n-loading-color-error": loadingColorError,
        // clear-button
        "--n-clear-color": clearColor,
        "--n-clear-size": clearSize,
        "--n-clear-color-hover": clearColorHover,
        "--n-clear-color-pressed": clearColorPressed,
        "--n-icon-color": iconColor,
        "--n-icon-color-hover": iconColorHover,
        "--n-icon-color-pressed": iconColorPressed,
        "--n-icon-color-disabled": iconColorDisabled,
        "--n-suffix-text-color": suffixTextColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("input", computed(() => {
      const { value: size } = mergedSizeRef;
      return size[0];
    }), cssVarsRef, props) : void 0;
    return Object.assign(Object.assign({}, exposedProps), {
      // DOM ref
      wrapperElRef,
      inputElRef,
      inputMirrorElRef,
      inputEl2Ref,
      textareaElRef,
      textareaMirrorElRef,
      textareaScrollbarInstRef,
      // value
      rtlEnabled: rtlEnabledRef,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      passwordVisible: passwordVisibleRef,
      mergedPlaceholder: mergedPlaceholderRef,
      showPlaceholder1: showPlaceholder1Ref,
      showPlaceholder2: showPlaceholder2Ref,
      mergedFocus: mergedFocusRef,
      isComposing: isComposingRef,
      activated: activatedRef,
      showClearButton,
      mergedSize: mergedSizeRef,
      mergedDisabled: mergedDisabledRef,
      textDecorationStyle: textDecorationStyleRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      mergedShowPasswordOn: mergedShowPasswordOnRef,
      placeholderStyle: placeholderStyleRef,
      mergedStatus: mergedStatusRef,
      textAreaScrollContainerWidth: textAreaScrollContainerWidthRef,
      // methods
      handleTextAreaScroll,
      handleCompositionStart,
      handleCompositionEnd,
      handleInput,
      handleInputBlur,
      handleInputFocus,
      handleWrapperBlur,
      handleWrapperFocus,
      handleMouseEnter,
      handleMouseLeave,
      handleMouseDown,
      handleChange,
      handleClick,
      handleClear,
      handlePasswordToggleClick,
      handlePasswordToggleMousedown,
      handleWrapperKeydown,
      handleWrapperKeyup,
      handleTextAreaMirrorResize,
      getTextareaScrollContainer: () => {
        return textareaElRef.value;
      },
      mergedTheme: themeRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    var _a, _b;
    const { mergedClsPrefix, mergedStatus, themeClass, type, countGraphemes, onRender } = this;
    const $slots = this.$slots;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h(
      "div",
      { ref: "wrapperElRef", class: [
        `${mergedClsPrefix}-input`,
        themeClass,
        mergedStatus && `${mergedClsPrefix}-input--${mergedStatus}-status`,
        {
          [`${mergedClsPrefix}-input--rtl`]: this.rtlEnabled,
          [`${mergedClsPrefix}-input--disabled`]: this.mergedDisabled,
          [`${mergedClsPrefix}-input--textarea`]: type === "textarea",
          [`${mergedClsPrefix}-input--resizable`]: this.resizable && !this.autosize,
          [`${mergedClsPrefix}-input--autosize`]: this.autosize,
          [`${mergedClsPrefix}-input--round`]: this.round && !(type === "textarea"),
          [`${mergedClsPrefix}-input--pair`]: this.pair,
          [`${mergedClsPrefix}-input--focus`]: this.mergedFocus,
          [`${mergedClsPrefix}-input--stateful`]: this.stateful
        }
      ], style: this.cssVars, tabindex: !this.mergedDisabled && this.passivelyActivated && !this.activated ? 0 : void 0, onFocus: this.handleWrapperFocus, onBlur: this.handleWrapperBlur, onClick: this.handleClick, onMousedown: this.handleMouseDown, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onCompositionstart: this.handleCompositionStart, onCompositionend: this.handleCompositionEnd, onKeyup: this.handleWrapperKeyup, onKeydown: this.handleWrapperKeydown },
      h(
        "div",
        { class: `${mergedClsPrefix}-input-wrapper` },
        resolveWrappedSlot($slots.prefix, (children) => children && h("div", { class: `${mergedClsPrefix}-input__prefix` }, children)),
        type === "textarea" ? h(NScrollbar, { ref: "textareaScrollbarInstRef", class: `${mergedClsPrefix}-input__textarea`, container: this.getTextareaScrollContainer, triggerDisplayManually: true, useUnifiedContainer: true, internalHoistYRail: true }, {
          default: () => {
            var _a2, _b2;
            const { textAreaScrollContainerWidth } = this;
            const scrollContainerWidthStyle = {
              width: this.autosize && textAreaScrollContainerWidth && `${textAreaScrollContainerWidth}px`
            };
            return h(
              Fragment,
              null,
              h("textarea", Object.assign({}, this.inputProps, { ref: "textareaElRef", class: [
                `${mergedClsPrefix}-input__textarea-el`,
                (_a2 = this.inputProps) === null || _a2 === void 0 ? void 0 : _a2.class
              ], autofocus: this.autofocus, rows: Number(this.rows), placeholder: this.placeholder, value: this.mergedValue, disabled: this.mergedDisabled, maxlength: countGraphemes ? void 0 : this.maxlength, minlength: countGraphemes ? void 0 : this.minlength, readonly: this.readonly, tabindex: this.passivelyActivated && !this.activated ? -1 : void 0, style: [
                this.textDecorationStyle[0],
                (_b2 = this.inputProps) === null || _b2 === void 0 ? void 0 : _b2.style,
                scrollContainerWidthStyle
              ], onBlur: this.handleInputBlur, onFocus: (e) => {
                this.handleInputFocus(e, 2);
              }, onInput: this.handleInput, onChange: this.handleChange, onScroll: this.handleTextAreaScroll })),
              this.showPlaceholder1 ? h("div", { class: `${mergedClsPrefix}-input__placeholder`, style: [
                this.placeholderStyle,
                scrollContainerWidthStyle
              ], key: "placeholder" }, this.mergedPlaceholder[0]) : null,
              this.autosize ? h(VResizeObserver, { onResize: this.handleTextAreaMirrorResize }, {
                default: () => h("div", { ref: "textareaMirrorElRef", class: `${mergedClsPrefix}-input__textarea-mirror`, key: "mirror" })
              }) : null
            );
          }
        }) : h(
          "div",
          { class: `${mergedClsPrefix}-input__input` },
          h("input", Object.assign({ type: type === "password" && this.mergedShowPasswordOn && this.passwordVisible ? "text" : type }, this.inputProps, { ref: "inputElRef", class: [
            `${mergedClsPrefix}-input__input-el`,
            (_a = this.inputProps) === null || _a === void 0 ? void 0 : _a.class
          ], style: [
            this.textDecorationStyle[0],
            (_b = this.inputProps) === null || _b === void 0 ? void 0 : _b.style
          ], tabindex: this.passivelyActivated && !this.activated ? -1 : void 0, placeholder: this.mergedPlaceholder[0], disabled: this.mergedDisabled, maxlength: countGraphemes ? void 0 : this.maxlength, minlength: countGraphemes ? void 0 : this.minlength, value: Array.isArray(this.mergedValue) ? this.mergedValue[0] : this.mergedValue, readonly: this.readonly, autofocus: this.autofocus, size: this.attrSize, onBlur: this.handleInputBlur, onFocus: (e) => {
            this.handleInputFocus(e, 0);
          }, onInput: (e) => {
            this.handleInput(e, 0);
          }, onChange: (e) => {
            this.handleChange(e, 0);
          } })),
          this.showPlaceholder1 ? h(
            "div",
            { class: `${mergedClsPrefix}-input__placeholder` },
            h("span", null, this.mergedPlaceholder[0])
          ) : null,
          this.autosize ? h("div", { class: `${mergedClsPrefix}-input__input-mirror`, key: "mirror", ref: "inputMirrorElRef" }, " ") : null
        ),
        !this.pair && resolveWrappedSlot($slots.suffix, (children) => {
          return children || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? h("div", { class: `${mergedClsPrefix}-input__suffix` }, [
            resolveWrappedSlot($slots["clear-icon-placeholder"], (children2) => {
              return (this.clearable || children2) && h(NBaseClear, { clsPrefix: mergedClsPrefix, show: this.showClearButton, onClear: this.handleClear }, {
                placeholder: () => children2,
                icon: () => {
                  var _a2, _b2;
                  return (_b2 = (_a2 = this.$slots)["clear-icon"]) === null || _b2 === void 0 ? void 0 : _b2.call(_a2);
                }
              });
            }),
            !this.internalLoadingBeforeSuffix ? children : null,
            this.loading !== void 0 ? h(NBaseSuffix, { clsPrefix: mergedClsPrefix, loading: this.loading, showArrow: false, showClear: false, style: this.cssVars }) : null,
            this.internalLoadingBeforeSuffix ? children : null,
            this.showCount && this.type !== "textarea" ? h(WordCount, null, {
              default: (props) => {
                var _a2;
                return (_a2 = $slots.count) === null || _a2 === void 0 ? void 0 : _a2.call($slots, props);
              }
            }) : null,
            this.mergedShowPasswordOn && this.type === "password" ? h("div", { class: `${mergedClsPrefix}-input__eye`, onMousedown: this.handlePasswordToggleMousedown, onClick: this.handlePasswordToggleClick }, this.passwordVisible ? resolveSlot($slots["password-visible-icon"], () => [
              h(NBaseIcon, { clsPrefix: mergedClsPrefix }, { default: () => h(EyeIcon, null) })
            ]) : resolveSlot($slots["password-invisible-icon"], () => [
              h(NBaseIcon, { clsPrefix: mergedClsPrefix }, { default: () => h(EyeOffIcon, null) })
            ])) : null
          ]) : null;
        })
      ),
      this.pair ? h("span", { class: `${mergedClsPrefix}-input__separator` }, resolveSlot($slots.separator, () => [this.separator])) : null,
      this.pair ? h(
        "div",
        { class: `${mergedClsPrefix}-input-wrapper` },
        h(
          "div",
          { class: `${mergedClsPrefix}-input__input` },
          h("input", { ref: "inputEl2Ref", type: this.type, class: `${mergedClsPrefix}-input__input-el`, tabindex: this.passivelyActivated && !this.activated ? -1 : void 0, placeholder: this.mergedPlaceholder[1], disabled: this.mergedDisabled, maxlength: countGraphemes ? void 0 : this.maxlength, minlength: countGraphemes ? void 0 : this.minlength, value: Array.isArray(this.mergedValue) ? this.mergedValue[1] : void 0, readonly: this.readonly, style: this.textDecorationStyle[1], onBlur: this.handleInputBlur, onFocus: (e) => {
            this.handleInputFocus(e, 1);
          }, onInput: (e) => {
            this.handleInput(e, 1);
          }, onChange: (e) => {
            this.handleChange(e, 1);
          } }),
          this.showPlaceholder2 ? h(
            "div",
            { class: `${mergedClsPrefix}-input__placeholder` },
            h("span", null, this.mergedPlaceholder[1])
          ) : null
        ),
        resolveWrappedSlot($slots.suffix, (children) => {
          return (this.clearable || children) && h("div", { class: `${mergedClsPrefix}-input__suffix` }, [
            this.clearable && h(NBaseClear, { clsPrefix: mergedClsPrefix, show: this.showClearButton, onClear: this.handleClear }, {
              icon: () => {
                var _a2;
                return (_a2 = $slots["clear-icon"]) === null || _a2 === void 0 ? void 0 : _a2.call($slots);
              },
              placeholder: () => {
                var _a2;
                return (_a2 = $slots["clear-icon-placeholder"]) === null || _a2 === void 0 ? void 0 : _a2.call($slots);
              }
            }),
            children
          ]);
        })
      ) : null,
      this.mergedBordered ? h("div", { class: `${mergedClsPrefix}-input__border` }) : null,
      this.mergedBordered ? h("div", { class: `${mergedClsPrefix}-input__state-border` }) : null,
      this.showCount && type === "textarea" ? h(WordCount, null, {
        default: (props) => {
          var _a2;
          const { renderCount } = this;
          if (renderCount) {
            return renderCount(props);
          }
          return (_a2 = $slots.count) === null || _a2 === void 0 ? void 0 : _a2.call($slots, props);
        }
      }) : null
    );
  }
});
function addDuplicateSlides(slides) {
  const { length } = slides;
  if (length > 1) {
    slides.push(duplicateSlide(slides[0], 0, "append"));
    slides.unshift(duplicateSlide(slides[length - 1], length - 1, "prepend"));
    return slides;
  }
  return slides;
}
function duplicateSlide(child, index, position) {
  return cloneVNode(child, {
    // for patch
    key: `carousel-item-duplicate-${index}-${position}`
  });
}
function getDisplayIndex(current, length, duplicatedable) {
  return !duplicatedable ? current : current === 0 ? length - 3 : current === length - 1 ? 0 : current - 1;
}
function getRealIndex(current, duplicatedable) {
  return !duplicatedable ? current : current + 1;
}
function getPrevIndex(current, length, duplicatedable) {
  if (current < 0)
    return null;
  return current === 0 ? duplicatedable ? length - 1 : null : current - 1;
}
function getNextIndex(current, length, duplicatedable) {
  if (current > length - 1)
    return null;
  return current === length - 1 ? duplicatedable ? 0 : null : current + 1;
}
function getDisplayTotalView(total, duplicatedable) {
  return duplicatedable && total > 3 ? total - 2 : total;
}
function isTouchEvent(e) {
  return window.TouchEvent && e instanceof window.TouchEvent;
}
function calculateSize(element, innerOnly) {
  let { offsetWidth: width, offsetHeight: height } = element;
  if (innerOnly) {
    const style2 = getComputedStyle(element);
    width = width - parseFloat(style2.getPropertyValue("padding-left")) - parseFloat(style2.getPropertyValue("padding-right"));
    height = height - parseFloat(style2.getPropertyValue("padding-top")) - parseFloat(style2.getPropertyValue("padding-bottom"));
  }
  return { width, height };
}
function clampValue(value, min, max) {
  return value < min ? min : value > max ? max : value;
}
function resolveSpeed(value) {
  if (value === void 0)
    return 0;
  if (typeof value === "number")
    return value;
  const timeRE = /^((\d+)?\.?\d+?)(ms|s)?$/;
  const match = value.match(timeRE);
  if (match) {
    const [, number, , unit = "ms"] = match;
    return Number(number) * (unit === "ms" ? 1 : 1e3);
  }
  return 0;
}
const carouselMethodsInjectionKey = createInjectionKey("n-carousel-methods");
const provideCarouselContext = (contextValue) => {
  provide(carouselMethodsInjectionKey, contextValue);
};
const useCarouselContext = (location = "unknown", component = "component") => {
  const CarouselContext = inject(carouselMethodsInjectionKey);
  if (!CarouselContext) {
    throwError(location, `\`${component}\` must be placed inside \`n-carousel\`.`);
  }
  return CarouselContext;
};
const carouselDotsProps = {
  total: {
    type: Number,
    default: 0
  },
  currentIndex: {
    type: Number,
    default: 0
  },
  dotType: {
    type: String,
    default: "dot"
  },
  trigger: {
    type: String,
    default: "click"
  },
  keyboard: Boolean
};
const NCarouselDots = defineComponent({
  name: "CarouselDots",
  props: carouselDotsProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props);
    const dotElsRef = ref([]);
    const NCarousel2 = useCarouselContext();
    function handleKeydown(e, current) {
      switch (e.key) {
        case "Enter":
        case " ":
          e.preventDefault();
          NCarousel2.to(current);
          return;
      }
      if (props.keyboard) {
        handleKeyboard(e);
      }
    }
    function handleMouseenter(current) {
      if (props.trigger === "hover") {
        NCarousel2.to(current);
      }
    }
    function handleClick(current) {
      if (props.trigger === "click") {
        NCarousel2.to(current);
      }
    }
    function handleKeyboard(e) {
      var _a;
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return;
      }
      const nodeName = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.nodeName.toLowerCase();
      if (nodeName === "input" || nodeName === "textarea") {
        return;
      }
      const { code: keycode } = e;
      const isVerticalNext = keycode === "PageUp" || keycode === "ArrowUp";
      const isVerticalPrev = keycode === "PageDown" || keycode === "ArrowDown";
      const isHorizontalNext = keycode === "PageUp" || keycode === "ArrowRight";
      const isHorizontalPrev = keycode === "PageDown" || keycode === "ArrowLeft";
      const vertical = NCarousel2.isVertical();
      const wantToNext = vertical ? isVerticalNext : isHorizontalNext;
      const wantToPrev = vertical ? isVerticalPrev : isHorizontalPrev;
      if (!wantToNext && !wantToPrev) {
        return;
      }
      e.preventDefault();
      if (wantToNext && !NCarousel2.isNextDisabled()) {
        NCarousel2.next();
        focusDot(NCarousel2.currentIndexRef.value);
      } else if (wantToPrev && !NCarousel2.isPrevDisabled()) {
        NCarousel2.prev();
        focusDot(NCarousel2.currentIndexRef.value);
      }
    }
    function focusDot(index) {
      var _a;
      (_a = dotElsRef.value[index]) === null || _a === void 0 ? void 0 : _a.focus();
    }
    onBeforeUpdate(() => dotElsRef.value.length = 0);
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      dotEls: dotElsRef,
      handleKeydown,
      handleMouseenter,
      handleClick
    };
  },
  render() {
    const { mergedClsPrefix, dotEls } = this;
    return h("div", { class: [
      `${mergedClsPrefix}-carousel__dots`,
      `${mergedClsPrefix}-carousel__dots--${this.dotType}`
    ], role: "tablist" }, indexMap(this.total, (i) => {
      const selected = i === this.currentIndex;
      return h("div", { "aria-selected": selected, ref: (el) => dotEls.push(el), role: "button", tabindex: "0", class: [
        `${mergedClsPrefix}-carousel__dot`,
        selected && `${mergedClsPrefix}-carousel__dot--active`
      ], key: i, onClick: () => {
        this.handleClick(i);
      }, onMouseenter: () => {
        this.handleMouseenter(i);
      }, onKeydown: (e) => {
        this.handleKeydown(e, i);
      } });
    }));
  }
});
const backwardIcon = h(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" },
  h(
    "g",
    { fill: "none" },
    h("path", { d: "M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z", fill: "currentColor" })
  )
);
const forwardIcon = h(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" },
  h(
    "g",
    { fill: "none" },
    h("path", { d: "M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z", fill: "currentColor" })
  )
);
const NCarouselArrow = defineComponent({
  name: "CarouselArrow",
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props);
    const { isVertical, isPrevDisabled, isNextDisabled, prev, next } = useCarouselContext();
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      isVertical,
      isPrevDisabled,
      isNextDisabled,
      prev,
      next
    };
  },
  render() {
    const { mergedClsPrefix } = this;
    return h(
      "div",
      { class: `${mergedClsPrefix}-carousel__arrow-group` },
      h("div", { class: [
        `${mergedClsPrefix}-carousel__arrow`,
        this.isPrevDisabled() && `${mergedClsPrefix}-carousel__arrow--disabled`
      ], role: "button", onClick: this.prev }, backwardIcon),
      h("div", { class: [
        `${mergedClsPrefix}-carousel__arrow`,
        this.isNextDisabled() && `${mergedClsPrefix}-carousel__arrow--disabled`
      ], role: "button", onClick: this.next }, forwardIcon)
    );
  }
});
const CarouselItemName = "CarouselItem";
const isCarouselItem = (child) => {
  var _a;
  return ((_a = child.type) === null || _a === void 0 ? void 0 : _a.name) === CarouselItemName;
};
const NCarouselItem = defineComponent({
  name: CarouselItemName,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props);
    const NCarousel2 = useCarouselContext(camelCase$1(CarouselItemName), `n-${camelCase$1(CarouselItemName)}`);
    const selfElRef = ref();
    const indexRef = computed(() => {
      const { value: selfEl } = selfElRef;
      return selfEl ? NCarousel2.getSlideIndex(selfEl) : -1;
    });
    const isPrevRef = computed(() => NCarousel2.isPrev(indexRef.value));
    const isNextRef = computed(() => NCarousel2.isNext(indexRef.value));
    const isActiveRef = computed(() => NCarousel2.isActive(indexRef.value));
    const styleRef = computed(() => NCarousel2.getSlideStyle(indexRef.value));
    onMounted(() => {
      NCarousel2.addSlide(selfElRef.value);
    });
    onBeforeUnmount(() => {
      NCarousel2.removeSlide(selfElRef.value);
    });
    function handleClick(event) {
      const { value: index } = indexRef;
      if (index !== void 0) {
        NCarousel2 === null || NCarousel2 === void 0 ? void 0 : NCarousel2.onCarouselItemClick(index, event);
      }
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      selfElRef,
      isPrev: isPrevRef,
      isNext: isNextRef,
      isActive: isActiveRef,
      index: indexRef,
      style: styleRef,
      handleClick
    };
  },
  render() {
    var _a;
    const { $slots: slots, mergedClsPrefix, isPrev, isNext, isActive, index, style: style2 } = this;
    const className = [
      `${mergedClsPrefix}-carousel__slide`,
      {
        [`${mergedClsPrefix}-carousel__slide--current`]: isActive,
        [`${mergedClsPrefix}-carousel__slide--prev`]: isPrev,
        [`${mergedClsPrefix}-carousel__slide--next`]: isNext
      }
    ];
    return h("div", {
      ref: "selfElRef",
      class: className,
      role: "option",
      tabindex: "-1",
      "data-index": index,
      "aria-hidden": !isActive,
      style: style2,
      // We use ts-ignore for vue-tsc, since it seems to patch native event
      // for vue components
      // @ts-expect-error vue's tsx has type for capture events
      onClickCapture: this.handleClick
    }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots, {
      isPrev,
      isNext,
      isActive,
      index
    }));
  }
});
const style = cB("carousel", `
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`, [cE("slides", `
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `, [cE("slide", `
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `, [c("> img", `
 display: block;
 `)])]), cE("dots", `
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `, [cM("dot", [cE("dot", `
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `, [c("&:focus", `
 background-color: var(--n-dot-color-focus);
 `), cM("active", `
 background-color: var(--n-dot-color-active);
 `)])]), cM("line", [cE("dot", `
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `, [c("&:focus", `
 background-color: var(--n-dot-color-focus);
 `), cM("active", `
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]), cE("arrow", `
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `, [c("svg", `
 height: 1em;
 width: 1em;
 `), c("&:hover", `
 background-color: rgba(255, 255, 255, .3);
 `)]), cM("vertical", `
 touch-action: pan-x;
 `, [cE("slides", `
 flex-direction: column;
 `), cM("fade", [cE("slide", `
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]), cM("card", [cE("slide", `
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `, [cM("current", `
 transform: translateY(-50%) translateZ(0);
 `), cM("prev", `
 transform: translateY(-100%) translateZ(-200px);
 `), cM("next", `
 transform: translateY(0%) translateZ(-200px);
 `)])])]), cM("usercontrol", [cE("slides", [c(">", [c("div", `
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]), cM("left", [cE("dots", `
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `, [cM("line", [cE("dot", `
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `, [cM("active", `
 height: var(--n-dot-line-width-active);
 `)])])]), cE("dot", `
 margin: 4px 0;
 `)]), cE("arrow-group", `
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `), cM("vertical", [cE("arrow", `
 transform: rotate(90deg);
 `)]), cM("show-arrow", [cM("bottom", [cE("dots", `
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]), cM("top", [cE("dots", `
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]), cM("left", [cE("dots", `
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]), cM("right", [cE("dots", `
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]), cM("left", [cE("arrow-group", `
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `, [c("> *:first-child", `
 margin-bottom: 12px;
 `)])]), cM("right", [cE("dots", `
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `, [cM("line", [cE("dot", `
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `, [cM("active", `
 height: var(--n-dot-line-width-active);
 `)])])]), cE("dot", `
 margin: 4px 0;
 `), cE("arrow-group", `
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `, [c("> *:first-child", `
 margin-bottom: 12px;
 `)])]), cM("top", [cE("dots", `
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `, [cM("line", [cE("dot", `
 margin: 0 4px;
 `)])]), cE("dot", `
 margin: 0 4px;
 `), cE("arrow-group", `
 top: 12px;
 right: 12px;
 `, [c("> *:first-child", `
 margin-right: 12px;
 `)])]), cM("bottom", [cE("dots", `
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `, [cM("line", [cE("dot", `
 margin: 0 4px;
 `)])]), cE("dot", `
 margin: 0 4px;
 `), cE("arrow-group", `
 bottom: 12px;
 right: 12px;
 `, [c("> *:first-child", `
 margin-right: 12px;
 `)])]), cM("fade", [cE("slide", `
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `, [cM("current", `
 opacity: 1;
 pointer-events: auto;
 `)])]), cM("card", [cE("slides", `
 perspective: 1000px;
 `), cE("slide", `
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `, [cM("current", `
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `), cM("prev", `
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `), cM("next", `
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]);
const transitionProperties = [
  "transitionDuration",
  "transitionTimingFunction"
];
const carouselProps = Object.assign(Object.assign({}, useTheme.props), { defaultIndex: {
  type: Number,
  default: 0
}, currentIndex: Number, showArrow: Boolean, dotType: {
  type: String,
  default: "dot"
}, dotPlacement: {
  type: String,
  default: "bottom"
}, slidesPerView: {
  type: [Number, String],
  default: 1
}, spaceBetween: {
  type: Number,
  default: 0
}, centeredSlides: Boolean, direction: {
  type: String,
  default: "horizontal"
}, autoplay: Boolean, interval: {
  type: Number,
  default: 5e3
}, loop: {
  type: Boolean,
  default: true
}, effect: {
  type: String,
  default: "slide"
}, showDots: {
  type: Boolean,
  default: true
}, trigger: {
  type: String,
  default: "click"
}, transitionStyle: {
  type: Object,
  default: () => ({
    transitionDuration: "300ms"
  })
}, transitionProps: Object, draggable: Boolean, prevSlideStyle: [Object, String], nextSlideStyle: [Object, String], touchable: {
  type: Boolean,
  default: true
}, mousewheel: Boolean, keyboard: Boolean, "onUpdate:currentIndex": Function, onUpdateCurrentIndex: Function });
let globalDragging = false;
const NCarousel = defineComponent({
  name: "Carousel",
  props: carouselProps,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const selfElRef = ref(null);
    const slidesElRef = ref(null);
    const slideElsRef = ref([]);
    const slideVNodesRef = { value: [] };
    const verticalRef = computed(() => props.direction === "vertical");
    const sizeAxisRef = computed(() => verticalRef.value ? "height" : "width");
    const spaceAxisRef = computed(() => verticalRef.value ? "bottom" : "right");
    const sequenceLayoutRef = computed(() => props.effect === "slide");
    const duplicatedableRef = computed(
      // duplicate the copy operation in `slide` mode,
      // because only its DOM is sequence layout
      () => props.loop && props.slidesPerView === 1 && sequenceLayoutRef.value
    );
    const userWantsControlRef = computed(() => props.effect === "custom");
    const displaySlidesPerViewRef = computed(() => !sequenceLayoutRef.value || props.centeredSlides ? 1 : props.slidesPerView);
    const realSlidesPerViewRef = computed(() => userWantsControlRef.value ? 1 : props.slidesPerView);
    const autoSlideSizeRef = computed(() => displaySlidesPerViewRef.value === "auto" || props.slidesPerView === "auto" && props.centeredSlides);
    const perViewSizeRef = ref({ width: 0, height: 0 });
    const slideSizesRef = computed(() => {
      const { value: slidesEls } = slideElsRef;
      if (!slidesEls.length)
        return [];
      const { value: autoSlideSize } = autoSlideSizeRef;
      if (autoSlideSize) {
        return slidesEls.map((slide) => calculateSize(slide));
      }
      const { value: slidesPerView } = realSlidesPerViewRef;
      const { value: perViewSize } = perViewSizeRef;
      const { value: axis } = sizeAxisRef;
      let axisSize = perViewSize[axis];
      if (slidesPerView !== "auto") {
        const { spaceBetween } = props;
        const remaining = axisSize - (slidesPerView - 1) * spaceBetween;
        const percentage = 1 / Math.max(1, slidesPerView);
        axisSize = remaining * percentage;
      }
      const slideSize = Object.assign(Object.assign({}, perViewSize), { [axis]: axisSize });
      return slidesEls.map(() => slideSize);
    });
    const slideTranlatesRef = computed(() => {
      const { value: slideSizes } = slideSizesRef;
      if (!slideSizes.length)
        return [];
      const { centeredSlides, spaceBetween } = props;
      const { value: axis } = sizeAxisRef;
      const { [axis]: perViewSize } = perViewSizeRef.value;
      let previousTranslate2 = 0;
      return slideSizes.map(({ [axis]: slideSize }) => {
        let translate = previousTranslate2;
        if (centeredSlides) {
          translate += (slideSize - perViewSize) / 2;
        }
        previousTranslate2 += slideSize + spaceBetween;
        return translate;
      });
    });
    const isMountedRef = ref(false);
    const transitionStyleRef = computed(() => {
      const { transitionStyle } = props;
      return transitionStyle ? keep(transitionStyle, transitionProperties) : {};
    });
    const speedRef = computed(() => userWantsControlRef.value ? 0 : resolveSpeed(transitionStyleRef.value.transitionDuration));
    const slideStylesRef = computed(() => {
      const { value: slidesEls } = slideElsRef;
      if (!slidesEls.length)
        return [];
      const useComputedSize = !(autoSlideSizeRef.value || realSlidesPerViewRef.value === 1);
      const getSlideSize = (index) => {
        if (useComputedSize) {
          const { value: axis } = sizeAxisRef;
          return {
            [axis]: `${slideSizesRef.value[index][axis]}px`
          };
        }
      };
      if (userWantsControlRef.value) {
        return slidesEls.map((_, i) => getSlideSize(i));
      }
      const { effect, spaceBetween } = props;
      const { value: spaceAxis } = spaceAxisRef;
      return slidesEls.reduce((styles, _, i) => {
        const style2 = Object.assign(Object.assign({}, getSlideSize(i)), { [`margin-${spaceAxis}`]: `${spaceBetween}px` });
        styles.push(style2);
        if (isMountedRef.value && (effect === "fade" || effect === "card")) {
          Object.assign(style2, transitionStyleRef.value);
        }
        return styles;
      }, []);
    });
    const totalViewRef = computed(() => {
      const { value: slidesPerView } = displaySlidesPerViewRef;
      const { length: totalSlides } = slideElsRef.value;
      if (slidesPerView !== "auto") {
        return Math.max(totalSlides - slidesPerView, 0) + 1;
      } else {
        const { value: slideSizes } = slideSizesRef;
        const { length } = slideSizes;
        if (!length)
          return totalSlides;
        const { value: translates } = slideTranlatesRef;
        const { value: axis } = sizeAxisRef;
        const perViewSize = perViewSizeRef.value[axis];
        let lastViewSize = slideSizes[slideSizes.length - 1][axis];
        let i = length;
        while (i > 1 && lastViewSize < perViewSize) {
          i--;
          lastViewSize += translates[i] - translates[i - 1];
        }
        return clampValue(i + 1, 1, length);
      }
    });
    const displayTotalViewRef = computed(() => getDisplayTotalView(totalViewRef.value, duplicatedableRef.value));
    const defaultRealIndex = getRealIndex(props.defaultIndex, duplicatedableRef.value);
    const uncontrolledDisplayIndexRef = ref(getDisplayIndex(defaultRealIndex, totalViewRef.value, duplicatedableRef.value));
    const mergedDisplayIndexRef = useMergedState(toRef(props, "currentIndex"), uncontrolledDisplayIndexRef);
    const realIndexRef = computed(() => getRealIndex(mergedDisplayIndexRef.value, duplicatedableRef.value));
    function toRealIndex(index) {
      var _a, _b;
      index = clampValue(index, 0, totalViewRef.value - 1);
      const displayIndex = getDisplayIndex(index, totalViewRef.value, duplicatedableRef.value);
      const { value: lastDisplayIndex } = mergedDisplayIndexRef;
      if (displayIndex !== mergedDisplayIndexRef.value) {
        uncontrolledDisplayIndexRef.value = displayIndex;
        (_a = props["onUpdate:currentIndex"]) === null || _a === void 0 ? void 0 : _a.call(props, displayIndex, lastDisplayIndex);
        (_b = props.onUpdateCurrentIndex) === null || _b === void 0 ? void 0 : _b.call(props, displayIndex, lastDisplayIndex);
      }
    }
    function getRealPrevIndex(index = realIndexRef.value) {
      return getPrevIndex(index, totalViewRef.value, props.loop);
    }
    function getRealNextIndex(index = realIndexRef.value) {
      return getNextIndex(index, totalViewRef.value, props.loop);
    }
    function isRealPrev(slideOrIndex) {
      const index = getSlideIndex(slideOrIndex);
      return index !== null && getRealPrevIndex() === index;
    }
    function isRealNext(slideOrIndex) {
      const index = getSlideIndex(slideOrIndex);
      return index !== null && getRealNextIndex() === index;
    }
    function isRealActive(slideOrIndex) {
      return realIndexRef.value === getSlideIndex(slideOrIndex);
    }
    function isDisplayActive(index) {
      return mergedDisplayIndexRef.value === index;
    }
    function isPrevDisabled() {
      return getRealPrevIndex() === null;
    }
    function isNextDisabled() {
      return getRealNextIndex() === null;
    }
    function to2(index) {
      const realIndex = clampValue(getRealIndex(index, duplicatedableRef.value), 0, totalViewRef.value);
      if (index !== mergedDisplayIndexRef.value || realIndex !== realIndexRef.value) {
        toRealIndex(realIndex);
      }
    }
    function prev() {
      const prevIndex = getRealPrevIndex();
      if (prevIndex !== null)
        toRealIndex(prevIndex);
    }
    function next() {
      const nextIndex = getRealNextIndex();
      if (nextIndex !== null)
        toRealIndex(nextIndex);
    }
    function prevIfSlideTransitionEnd() {
      if (!inTransition || !duplicatedableRef.value)
        prev();
    }
    function nextIfSlideTransitionEnd() {
      if (!inTransition || !duplicatedableRef.value)
        next();
    }
    let inTransition = false;
    let previousTranslate = 0;
    const translateStyleRef = ref({});
    function updateTranslate(translate, speed = 0) {
      translateStyleRef.value = Object.assign({}, transitionStyleRef.value, {
        transform: verticalRef.value ? `translateY(${-translate}px)` : `translateX(${-translate}px)`,
        transitionDuration: `${speed}ms`
      });
    }
    function fixTranslate(speed = 0) {
      if (sequenceLayoutRef.value) {
        translateTo(realIndexRef.value, speed);
      } else if (previousTranslate !== 0) {
        if (!inTransition && speed > 0) {
          inTransition = true;
        }
        updateTranslate(previousTranslate = 0, speed);
      }
    }
    function translateTo(index, speed) {
      const translate = getTranslate(index);
      if (translate !== previousTranslate && speed > 0) {
        inTransition = true;
      }
      previousTranslate = getTranslate(realIndexRef.value);
      updateTranslate(translate, speed);
    }
    function getTranslate(index) {
      let translate;
      if (index >= totalViewRef.value - 1) {
        translate = getLastViewTranslate();
      } else {
        translate = slideTranlatesRef.value[index] || 0;
      }
      return translate;
    }
    function getLastViewTranslate() {
      if (displaySlidesPerViewRef.value === "auto") {
        const { value: axis } = sizeAxisRef;
        const { [axis]: perViewSize } = perViewSizeRef.value;
        const { value: translates } = slideTranlatesRef;
        const lastTranslate = translates[translates.length - 1];
        let overallSize;
        if (lastTranslate === void 0) {
          overallSize = perViewSize;
        } else {
          const { value: slideSizes } = slideSizesRef;
          overallSize = lastTranslate + slideSizes[slideSizes.length - 1][axis];
        }
        return overallSize - perViewSize;
      } else {
        const { value: translates } = slideTranlatesRef;
        return translates[totalViewRef.value - 1] || 0;
      }
    }
    const carouselContext = {
      currentIndexRef: mergedDisplayIndexRef,
      to: to2,
      prev: prevIfSlideTransitionEnd,
      next: nextIfSlideTransitionEnd,
      isVertical: () => verticalRef.value,
      isHorizontal: () => !verticalRef.value,
      isPrev: isRealPrev,
      isNext: isRealNext,
      isActive: isRealActive,
      isPrevDisabled,
      isNextDisabled,
      getSlideIndex,
      getSlideStyle,
      addSlide,
      removeSlide,
      onCarouselItemClick
    };
    provideCarouselContext(carouselContext);
    function addSlide(slide) {
      if (!slide)
        return;
      slideElsRef.value.push(slide);
    }
    function removeSlide(slide) {
      if (!slide)
        return;
      const index = getSlideIndex(slide);
      if (index !== -1) {
        slideElsRef.value.splice(index, 1);
      }
    }
    function getSlideIndex(slideOrIndex) {
      return typeof slideOrIndex === "number" ? slideOrIndex : slideOrIndex ? slideElsRef.value.indexOf(slideOrIndex) : -1;
    }
    function getSlideStyle(slide) {
      const index = getSlideIndex(slide);
      if (index !== -1) {
        const styles = [slideStylesRef.value[index]];
        const isPrev = carouselContext.isPrev(index);
        const isNext = carouselContext.isNext(index);
        if (isPrev) {
          styles.push(props.prevSlideStyle || "");
        }
        if (isNext) {
          styles.push(props.nextSlideStyle || "");
        }
        return normalizeStyle(styles);
      }
    }
    function onCarouselItemClick(index, event) {
      let allowClick = !inTransition && !dragging && !isEffectiveDrag;
      if (props.effect === "card" && allowClick && !isRealActive(index)) {
        to2(index);
        allowClick = false;
      }
      if (!allowClick) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
    let autoplayTimer = null;
    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }
    function resetAutoplay() {
      stopAutoplay();
      const disabled = !props.autoplay || displayTotalViewRef.value < 2;
      if (!disabled) {
        autoplayTimer = window.setInterval(next, props.interval);
      }
    }
    let dragStartX = 0;
    let dragStartY = 0;
    let dragOffset = 0;
    let dragStartTime = 0;
    let dragging = false;
    let isEffectiveDrag = false;
    function handleTouchstart(event) {
      var _a;
      if (globalDragging)
        return;
      if (!((_a = slidesElRef.value) === null || _a === void 0 ? void 0 : _a.contains(getPreciseEventTarget(event)))) {
        return;
      }
      globalDragging = true;
      dragging = true;
      isEffectiveDrag = false;
      dragStartTime = Date.now();
      stopAutoplay();
      if (event.type !== "touchstart" && !event.target.isContentEditable) {
        event.preventDefault();
      }
      const touchEvent = isTouchEvent(event) ? event.touches[0] : event;
      if (verticalRef.value) {
        dragStartY = touchEvent.clientY;
      } else {
        dragStartX = touchEvent.clientX;
      }
      if (props.touchable) {
        on("touchmove", document, handleTouchmove);
        on("touchend", document, handleTouchend);
        on("touchcancel", document, handleTouchend);
      }
      if (props.draggable) {
        on("mousemove", document, handleTouchmove);
        on("mouseup", document, handleTouchend);
      }
    }
    function handleTouchmove(event) {
      const { value: vertical } = verticalRef;
      const { value: axis } = sizeAxisRef;
      const touchEvent = isTouchEvent(event) ? event.touches[0] : event;
      const offset = vertical ? touchEvent.clientY - dragStartY : touchEvent.clientX - dragStartX;
      const perViewSize = perViewSizeRef.value[axis];
      dragOffset = clampValue(offset, -perViewSize, perViewSize);
      if (event.cancelable) {
        event.preventDefault();
      }
      if (sequenceLayoutRef.value) {
        updateTranslate(previousTranslate - dragOffset, 0);
      }
    }
    function handleTouchend() {
      const { value: realIndex } = realIndexRef;
      let currentIndex = realIndex;
      if (!inTransition && dragOffset !== 0 && sequenceLayoutRef.value) {
        const currentTranslate = previousTranslate - dragOffset;
        const translates = [
          ...slideTranlatesRef.value.slice(0, totalViewRef.value - 1),
          getLastViewTranslate()
        ];
        let prevOffset = null;
        for (let i = 0; i < translates.length; i++) {
          const offset = Math.abs(translates[i] - currentTranslate);
          if (prevOffset !== null && prevOffset < offset) {
            break;
          }
          prevOffset = offset;
          currentIndex = i;
        }
      }
      if (currentIndex === realIndex) {
        const timeElapsed = Date.now() - dragStartTime;
        const { value: axis } = sizeAxisRef;
        const perViewSize = perViewSizeRef.value[axis];
        if (dragOffset > perViewSize / 2 || dragOffset / timeElapsed > 0.4) {
          currentIndex = getRealPrevIndex(realIndex);
        } else if (dragOffset < -perViewSize / 2 || dragOffset / timeElapsed < -0.4) {
          currentIndex = getRealNextIndex(realIndex);
        }
      }
      if (currentIndex !== null && currentIndex !== realIndex) {
        isEffectiveDrag = true;
        toRealIndex(currentIndex);
        void nextTick(() => {
          if (!duplicatedableRef.value || uncontrolledDisplayIndexRef.value !== mergedDisplayIndexRef.value) {
            fixTranslate(speedRef.value);
          }
        });
      } else {
        fixTranslate(speedRef.value);
      }
      resetDragStatus();
      resetAutoplay();
    }
    function resetDragStatus() {
      if (dragging) {
        globalDragging = false;
      }
      dragging = false;
      dragStartX = 0;
      dragStartY = 0;
      dragOffset = 0;
      dragStartTime = 0;
      off("touchmove", document, handleTouchmove);
      off("touchend", document, handleTouchend);
      off("touchcancel", document, handleTouchend);
      off("mousemove", document, handleTouchmove);
      off("mouseup", document, handleTouchend);
    }
    function handleTransitionEnd() {
      if (sequenceLayoutRef.value && inTransition) {
        const { value: realIndex } = realIndexRef;
        translateTo(realIndex, 0);
      } else {
        resetAutoplay();
      }
      if (sequenceLayoutRef.value) {
        translateStyleRef.value.transitionDuration = "0ms";
      }
      inTransition = false;
    }
    function handleMousewheel(event) {
      event.preventDefault();
      if (inTransition)
        return;
      let { deltaX, deltaY } = event;
      if (event.shiftKey && !deltaX) {
        deltaX = deltaY;
      }
      const prevMultiplier = -1;
      const nextMultiplier = 1;
      const m = (deltaX || deltaY) > 0 ? nextMultiplier : prevMultiplier;
      let rx = 0;
      let ry = 0;
      if (verticalRef.value) {
        ry = m;
      } else {
        rx = m;
      }
      const responseStep = 10;
      if (ry * deltaY >= responseStep || rx * deltaX >= responseStep) {
        if (m === nextMultiplier && !isNextDisabled()) {
          next();
        } else if (m === prevMultiplier && !isPrevDisabled()) {
          prev();
        }
      }
    }
    function handleResize() {
      perViewSizeRef.value = calculateSize(selfElRef.value, true);
      resetAutoplay();
    }
    function handleSlideResize() {
      var _a, _b;
      if (autoSlideSizeRef.value) {
        (_b = (_a = slideSizesRef.effect).scheduler) === null || _b === void 0 ? void 0 : _b.call(_a);
        slideSizesRef.effect.run();
      }
    }
    function handleMouseenter() {
      if (props.autoplay) {
        stopAutoplay();
      }
    }
    function handleMouseleave() {
      if (props.autoplay) {
        resetAutoplay();
      }
    }
    onMounted(() => {
      watchEffect(resetAutoplay);
      requestAnimationFrame(() => isMountedRef.value = true);
    });
    onBeforeUnmount(() => {
      resetDragStatus();
      stopAutoplay();
    });
    onUpdated(() => {
      const { value: slidesEls } = slideElsRef;
      const { value: slideVNodes } = slideVNodesRef;
      const indexMap2 = /* @__PURE__ */ new Map();
      const getDisplayIndex2 = (el) => (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        indexMap2.has(el) ? indexMap2.get(el) : -1
      );
      let isChanged = false;
      for (let i = 0; i < slidesEls.length; i++) {
        const index = slideVNodes.findIndex((v) => v.el === slidesEls[i]);
        if (index !== i) {
          isChanged = true;
        }
        indexMap2.set(slidesEls[i], index);
      }
      if (isChanged) {
        slidesEls.sort((a, b) => getDisplayIndex2(a) - getDisplayIndex2(b));
      }
    });
    watch(realIndexRef, (realIndex, lastRealIndex) => {
      if (realIndex === lastRealIndex)
        return;
      resetAutoplay();
      if (sequenceLayoutRef.value) {
        if (duplicatedableRef.value && displayTotalViewRef.value > 2) {
          const { value: length } = totalViewRef;
          if (realIndex === length - 2 && lastRealIndex === 1) {
            realIndex = 0;
          } else if (realIndex === 1 && lastRealIndex === length - 2) {
            realIndex = length - 1;
          }
        }
        translateTo(realIndex, speedRef.value);
      } else {
        fixTranslate();
      }
    }, { immediate: true });
    watch([duplicatedableRef, displaySlidesPerViewRef], () => void nextTick(() => {
      toRealIndex(realIndexRef.value);
    }));
    watch(slideTranlatesRef, () => {
      sequenceLayoutRef.value && fixTranslate();
    }, {
      deep: true
    });
    watch(sequenceLayoutRef, (value) => {
      if (!value) {
        inTransition = false;
        updateTranslate(previousTranslate = 0);
      } else {
        fixTranslate();
      }
    });
    const slidesControlListenersRef = computed(() => {
      return {
        onTouchstartPassive: props.touchable ? handleTouchstart : void 0,
        onMousedown: props.draggable ? handleTouchstart : void 0,
        onWheel: props.mousewheel ? handleMousewheel : void 0
      };
    });
    const arrowSlotPropsRef = computed(() => Object.assign(Object.assign({}, keep(carouselContext, [
      "to",
      "prev",
      "next",
      "isPrevDisabled",
      "isNextDisabled"
    ])), { total: displayTotalViewRef.value, currentIndex: mergedDisplayIndexRef.value }));
    const dotSlotPropsRef = computed(() => ({
      total: displayTotalViewRef.value,
      currentIndex: mergedDisplayIndexRef.value,
      to: carouselContext.to
    }));
    const caroulseExposedMethod = {
      getCurrentIndex: () => mergedDisplayIndexRef.value,
      to: to2,
      prev,
      next
    };
    const themeRef = useTheme("Carousel", "-carousel", style, carouselLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { common: { cubicBezierEaseInOut }, self: { dotSize, dotColor, dotColorActive, dotColorFocus, dotLineWidth, dotLineWidthActive, arrowColor } } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-dot-color": dotColor,
        "--n-dot-color-focus": dotColorFocus,
        "--n-dot-color-active": dotColorActive,
        "--n-dot-size": dotSize,
        "--n-dot-line-width": dotLineWidth,
        "--n-dot-line-width-active": dotLineWidthActive,
        "--n-arrow-color": arrowColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("carousel", void 0, cssVarsRef, props) : void 0;
    return Object.assign(Object.assign({
      mergedClsPrefix: mergedClsPrefixRef,
      selfElRef,
      slidesElRef,
      slideVNodes: slideVNodesRef,
      duplicatedable: duplicatedableRef,
      userWantsControl: userWantsControlRef,
      autoSlideSize: autoSlideSizeRef,
      displayIndex: mergedDisplayIndexRef,
      realIndex: realIndexRef,
      slideStyles: slideStylesRef,
      translateStyle: translateStyleRef,
      slidesControlListeners: slidesControlListenersRef,
      handleTransitionEnd,
      handleResize,
      handleSlideResize,
      handleMouseenter,
      handleMouseleave,
      isActive: isDisplayActive,
      arrowSlotProps: arrowSlotPropsRef,
      dotSlotProps: dotSlotPropsRef
    }, caroulseExposedMethod), { cssVars: inlineThemeDisabled ? void 0 : cssVarsRef, themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass, onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender });
  },
  render() {
    var _a;
    const { mergedClsPrefix, showArrow, userWantsControl, slideStyles, dotType, dotPlacement, slidesControlListeners, transitionProps = {}, arrowSlotProps, dotSlotProps, $slots: { default: defaultSlot, dots: dotsSlot, arrow: arrowSlot } } = this;
    const children = defaultSlot && flatten(defaultSlot()) || [];
    let slides = filterCarouselItem(children);
    if (!slides.length) {
      slides = children.map((ch) => h(NCarouselItem, null, {
        default: () => cloneVNode(ch)
      }));
    }
    if (this.duplicatedable) {
      slides = addDuplicateSlides(slides);
    }
    this.slideVNodes.value = slides;
    if (this.autoSlideSize) {
      slides = slides.map((slide) => h(VResizeObserver, { onResize: this.handleSlideResize }, {
        default: () => slide
      }));
    }
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h(
      "div",
      Object.assign({ ref: "selfElRef", class: [
        this.themeClass,
        `${mergedClsPrefix}-carousel`,
        this.direction === "vertical" && `${mergedClsPrefix}-carousel--vertical`,
        this.showArrow && `${mergedClsPrefix}-carousel--show-arrow`,
        `${mergedClsPrefix}-carousel--${dotPlacement}`,
        `${mergedClsPrefix}-carousel--${this.direction}`,
        `${mergedClsPrefix}-carousel--${this.effect}`,
        userWantsControl && `${mergedClsPrefix}-carousel--usercontrol`
      ], style: this.cssVars }, slidesControlListeners, { onMouseenter: this.handleMouseenter, onMouseleave: this.handleMouseleave }),
      h(VResizeObserver, { onResize: this.handleResize }, {
        default: () => h("div", { ref: "slidesElRef", class: `${mergedClsPrefix}-carousel__slides`, role: "listbox", style: this.translateStyle, onTransitionend: this.handleTransitionEnd }, userWantsControl ? slides.map((slide, i) => h("div", { style: slideStyles[i], key: i }, withDirectives(h(Transition, Object.assign({}, transitionProps), {
          default: () => slide
        }), [[vShow, this.isActive(i)]]))) : slides)
      }),
      this.showDots && dotSlotProps.total > 1 && resolveSlotWithProps(dotsSlot, dotSlotProps, () => [
        h(NCarouselDots, { key: dotType + dotPlacement, total: dotSlotProps.total, currentIndex: dotSlotProps.currentIndex, dotType, trigger: this.trigger, keyboard: this.keyboard })
      ]),
      showArrow && resolveSlotWithProps(arrowSlot, arrowSlotProps, () => [
        h(NCarouselArrow, null)
      ])
    );
  }
});
function filterCarouselItem(vnodes) {
  return vnodes.reduce((carouselItems, vnode) => {
    if (isCarouselItem(vnode)) {
      carouselItems.push(vnode);
    }
    return carouselItems;
  }, []);
}
const CloseOne = IconWrapper("close-one", false, function(props) {
  return createVNode("svg", {
    "width": props.size,
    "height": props.size,
    "viewBox": "0 0 48 48",
    "fill": "none"
  }, [createVNode("path", {
    "d": "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    "fill": props.colors[1],
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linejoin": props.strokeLinejoin
  }, null), createVNode("path", {
    "d": "M29.6567 18.3432L18.343 29.6569",
    "stroke": props.colors[2],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null), createVNode("path", {
    "d": "M18.3433 18.3432L29.657 29.6569",
    "stroke": props.colors[2],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null)]);
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CBanner",
  setup(__props) {
    const issuesStore = useAppStore();
    return (_ctx, _cache) => {
      return unref(issuesStore).banners.length > 0 ? (openBlock(), createBlock(unref(NCarousel), {
        key: 0,
        autoplay: ""
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(issuesStore).banners, (banner) => {
            return openBlock(), createElementBlock("div", {
              class: "h-48 md:h-56 lg:h-64 xl:h-72 w-full inline-block rounded-md overflow-hidden",
              key: banner.src
            }, [
              createVNode(unref(NImage), {
                "object-fit": "cover",
                width: "100%",
                height: "100%",
                class: "w-full h-full",
                src: banner.src,
                alt: banner.alt
              }, null, 8, ["src", "alt"])
            ]);
          }), 128))
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1 = { class: "text-center" };
const _hoisted_2 = {
  key: 1,
  class: "text-center"
};
const perPage = 20;
const beginBttom = 100;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PHome",
  props: {
    label: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const issuesStore = useAppStore();
    const documents = ref([]);
    const dState = watchLoading({
      state: "loading",
      fail: "文章查询失败!"
    });
    const isOver = ref(false);
    let page = 1;
    async function queryDocuments(page2, labels) {
      dState.value = "loading";
      const labelString = [...labels, appConfig.label.docLabel].filter((l) => l.trim() != "").join(",");
      const [err, data] = await to(issueApi.qIssuePage({
        state: "all",
        page: page2.toString(),
        labels: labelString,
        per_page: perPage.toString()
      }));
      if (err) {
        dState.value = "fail";
        return;
      }
      if (data.length == 0 || data.length < perPage) {
        isOver.value = true;
      }
      documents.value.push(...data);
      dState.value = "success";
    }
    let st;
    function nextPage(op) {
      if (st) {
        clearTimeout(st);
      }
      function next() {
        queryDocuments(page + op, selectLabels.value.map((l) => l.name)).then(() => {
          page += op;
        });
      }
      st = setTimeout(next, 500);
    }
    const select = ref(props.label);
    const selectLabels = ref([]);
    function selectChange() {
      page = 1;
      documents.value = [];
      isOver.value = false;
      selectLabels.value = issuesStore.selectNotFuncLabels(select.value);
      nextPage(0);
    }
    selectChange();
    watch(() => select.value, selectChange);
    function labelChange(label) {
      router.replace({ query: { label } });
    }
    onBeforeRouteUpdate(({ query }) => {
      window.scrollTo(0, 0);
      if (typeof (query == null ? void 0 : query.label) === "string") {
        select.value = query.label;
      }
    });
    let oldSTop = 0;
    function handleScroll() {
      const sTop = document.documentElement.scrollTop;
      const cHeight = document.documentElement.clientHeight;
      const sHeight = document.documentElement.scrollHeight;
      const viewH = sTop + cHeight + beginBttom;
      if (oldSTop < sTop && viewH >= sHeight && !isOver.value) {
        nextPage(1);
      }
      oldSTop = sTop;
    }
    onActivated(() => {
      if (props.label && props.label != select.value) {
        window.scrollTo(0, 0);
        select.value = props.label;
      } else {
        window.scrollTo(0, oldSTop);
      }
      window.addEventListener("scroll", handleScroll);
    });
    onBeforeRouteLeave(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createBlock(unref(NSpace), { vertical: "" }, {
        default: withCtx(() => [
          createVNode(unref(NCard), {
            size: "small",
            bordered: false
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$1)
            ]),
            _: 1
          }),
          createVNode(unref(NCard), {
            size: "small",
            bordered: false
          }, {
            default: withCtx(() => [
              createVNode(unref(NInput), {
                size: "large",
                placeholder: "搜索标签",
                value: select.value,
                "onUpdate:value": _cache[1] || (_cache[1] = ($event) => select.value = $event)
              }, {
                suffix: withCtx(() => [
                  createVNode(unref(CloseOne), {
                    size: "1.5rem",
                    class: "cursor-pointer mx-2",
                    onClick: _cache[0] || (_cache[0] = ($event) => labelChange(""))
                  })
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          }),
          selectLabels.value.length > 0 ? (openBlock(), createBlock(unref(NCard), {
            key: 0,
            size: "small",
            bordered: false
          }, {
            default: withCtx(() => [
              createVNode(unref(NSpace), null, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(selectLabels.value, (label) => {
                    return openBlock(), createBlock(_sfc_main$3, {
                      key: label.id,
                      "hidden-des": false,
                      label,
                      onClick: ($event) => labelChange(label.name),
                      class: "font-bold"
                    }, null, 8, ["label", "onClick"]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(documents.value, (document2) => {
            return openBlock(), createBlock(unref(NCard), {
              key: document2.number,
              size: "small",
              bordered: false
            }, {
              default: withCtx(() => [
                createVNode(unref(NSpace), {
                  vertical: "",
                  size: "small"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_RouterLink, {
                      to: `/doc/${document2.number}`,
                      class: "text-2xl font-bold duration-100 hover:text-green-300"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(document2.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"]),
                    createVNode(unref(NSpace), {
                      align: "center",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NTime), {
                          time: new Date(document2.updated_at),
                          type: "relative"
                        }, null, 8, ["time"]),
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(removeFuncLabels)(document2.labels), (label) => {
                          return openBlock(), createBlock(_sfc_main$3, {
                            key: label.id,
                            "hidden-des": true,
                            label,
                            class: "font-bold",
                            onClick: ($event) => labelChange(label.name)
                          }, null, 8, ["label", "onClick"]);
                        }), 128)),
                        createVNode(_sfc_main$4, {
                          reactions: document2.reactions
                        }, null, 8, ["reactions"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                createVNode(CMarkdown, {
                  text: document2.body,
                  id: document2.number
                }, null, 8, ["text", "id"])
              ]),
              _: 2
            }, 1024);
          }), 128)),
          createVNode(_sfc_main$2, { state: unref(dState) }, {
            fail: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode(unref(NButton), {
                  onClick: _cache[2] || (_cache[2] = ($event) => nextPage(0)),
                  class: "mx-auto"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" 重试 ")
                  ]),
                  _: 1
                })
              ])
            ]),
            default: withCtx(() => [
              isOver.value ? (openBlock(), createBlock(COver, { key: 0 })) : (openBlock(), createElementBlock("div", _hoisted_2, [
                createVNode(unref(NButton), {
                  onClick: _cache[3] || (_cache[3] = ($event) => nextPage(1)),
                  class: "mx-auto"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" 更多 ")
                  ]),
                  _: 1
                })
              ]))
            ]),
            _: 1
          }, 8, ["state"])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
