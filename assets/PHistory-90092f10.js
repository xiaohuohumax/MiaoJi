import { c as cB, a as cM, b as c, U as cE, d as defineComponent, u as useConfig, g as useTheme, a1 as provide, h, Z as createInjectionKey, al as timelineLight, p as inject, s as throwError, f as computed, j as useThemeClass, a4 as createKey, r as ref, B as createBlock, A as withCtx, G as unref, ah as to, ai as issueApi, y as openBlock, v as createVNode, z as createElementBlock, M as renderList, L as Fragment, D as createCommentVNode, E as createBaseVNode, H as createTextVNode, F as toDisplayString } from "./index-766f9230.js";
import { _ as _sfc_main$1 } from "./CSubTitle.vue_vue_type_script_setup_true_lang-ad70fd5e.js";
import { w as watchLoading, N as NButton, C as COver, _ as _sfc_main$2 } from "./COver-cf9908d9.js";
import { C as CMarkdown } from "./CMarkdown-845f11ce.js";
import { _ as _sfc_main$3, N as NTime } from "./CReactions.vue_vue_type_script_setup_true_lang-bce368a9.js";
import { a as appConfig } from "../app.config.js";
import { b as resolveWrappedSlot, r as resolveSlot, N as NCard } from "./Card-9e30a367.js";
import { i as isBrowser, f as formatLength, N as NSpace } from "./_plugin-vue_export-helper-76661c52.js";
let houdiniRegistered = false;
function useHoudini() {
  if (!isBrowser)
    return;
  if (!window.CSS)
    return;
  if (!houdiniRegistered) {
    houdiniRegistered = true;
    if ("registerProperty" in (window === null || window === void 0 ? void 0 : window.CSS)) {
      try {
        ;
        CSS.registerProperty({
          name: "--n-color-start",
          syntax: "<color>",
          inherits: false,
          initialValue: "#0000"
        });
        CSS.registerProperty({
          name: "--n-color-end",
          syntax: "<color>",
          inherits: false,
          initialValue: "#0000"
        });
      } catch (e) {
      }
    }
  }
}
const lineHeight = 1.25;
const style = cB("timeline", `
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${lineHeight};
`, [cM("horizontal", `
 flex-direction: row;
 `, [c(">", [cB("timeline-item", `
 flex-shrink: 0;
 padding-right: 40px;
 `, [cM("dashed-line-type", [c(">", [cB("timeline-item-timeline", [cE("line", `
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]), c(">", [cB("timeline-item-content", `
 margin-top: calc(var(--n-icon-size) + 12px);
 `, [c(">", [cE("meta", `
 margin-top: 6px;
 margin-bottom: unset;
 `)])]), cB("timeline-item-timeline", `
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `, [cE("line", `
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]), cM("right-placement", [cB("timeline-item", [cB("timeline-item-content", `
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `), cB("timeline-item-timeline", `
 width: var(--n-icon-size);
 right: 0;
 `)])]), cM("left-placement", [cB("timeline-item", [cB("timeline-item-content", `
 margin-left: calc(var(--n-icon-size) + 12px);
 `), cB("timeline-item-timeline", `
 left: 0;
 `)])]), cB("timeline-item", `
 position: relative;
 `, [c("&:last-child", [cB("timeline-item-timeline", [cE("line", `
 display: none;
 `)]), cB("timeline-item-content", [cE("meta", `
 margin-bottom: 0;
 `)])]), cB("timeline-item-content", [cE("title", `
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `), cE("content", `
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `), cE("meta", `
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]), cM("dashed-line-type", [cB("timeline-item-timeline", [cE("line", `
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]), cB("timeline-item-timeline", `
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${lineHeight} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `, [cE("circle", `
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `), cE("icon", `
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `), cE("line", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]);
const timelineProps = Object.assign(Object.assign({}, useTheme.props), { horizontal: Boolean, itemPlacement: {
  type: String,
  default: "left"
}, size: {
  type: String,
  default: "medium"
}, iconSize: Number });
const timelineInjectionKey = createInjectionKey("n-timeline");
const NTimeline = defineComponent({
  name: "Timeline",
  props: timelineProps,
  setup(props, { slots }) {
    const { mergedClsPrefixRef } = useConfig(props);
    const themeRef = useTheme("Timeline", "-timeline", style, timelineLight, props, mergedClsPrefixRef);
    provide(timelineInjectionKey, {
      props,
      mergedThemeRef: themeRef,
      mergedClsPrefixRef
    });
    return () => {
      const { value: mergedClsPrefix } = mergedClsPrefixRef;
      return h("div", { class: [
        `${mergedClsPrefix}-timeline`,
        props.horizontal && `${mergedClsPrefix}-timeline--horizontal`,
        `${mergedClsPrefix}-timeline--${props.size}-size`,
        !props.horizontal && `${mergedClsPrefix}-timeline--${props.itemPlacement}-placement`
      ] }, slots);
    };
  }
});
const timelineItemProps = {
  time: [String, Number],
  title: String,
  content: String,
  color: String,
  lineType: {
    type: String,
    default: "default"
  },
  type: {
    type: String,
    default: "default"
  }
};
const NTimelineItem = defineComponent({
  name: "TimelineItem",
  props: timelineItemProps,
  setup(props) {
    const NTimeline2 = inject(timelineInjectionKey);
    if (!NTimeline2) {
      throwError("timeline-item", "`n-timeline-item` must be placed inside `n-timeline`.");
    }
    useHoudini();
    const { inlineThemeDisabled } = useConfig();
    const cssVarsRef = computed(() => {
      const { props: { size, iconSize: iconSizeProp }, mergedThemeRef } = NTimeline2;
      const { type } = props;
      const { self: { titleTextColor, contentTextColor, metaTextColor, lineColor, titleFontWeight, contentFontSize, [createKey("iconSize", size)]: iconSize, [createKey("titleMargin", size)]: titleMargin, [createKey("titleFontSize", size)]: titleFontSize, [createKey("circleBorder", type)]: circleBorder, [createKey("iconColor", type)]: iconColor }, common: { cubicBezierEaseInOut } } = mergedThemeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-circle-border": circleBorder,
        "--n-icon-color": iconColor,
        "--n-content-font-size": contentFontSize,
        "--n-content-text-color": contentTextColor,
        "--n-line-color": lineColor,
        "--n-meta-text-color": metaTextColor,
        "--n-title-font-size": titleFontSize,
        "--n-title-font-weight": titleFontWeight,
        "--n-title-margin": titleMargin,
        "--n-title-text-color": titleTextColor,
        "--n-icon-size": formatLength(iconSizeProp) || iconSize
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("timeline-item", computed(() => {
      const { props: { size, iconSize: iconSizeProp } } = NTimeline2;
      const { type } = props;
      return `${size[0]}${iconSizeProp || "a"}${type[0]}`;
    }), cssVarsRef, NTimeline2.props) : void 0;
    return {
      mergedClsPrefix: NTimeline2.mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const { mergedClsPrefix, color, onRender, $slots } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h(
      "div",
      { class: [
        `${mergedClsPrefix}-timeline-item`,
        this.themeClass,
        `${mergedClsPrefix}-timeline-item--${this.type}-type`,
        `${mergedClsPrefix}-timeline-item--${this.lineType}-line-type`
      ], style: this.cssVars },
      h(
        "div",
        { class: `${mergedClsPrefix}-timeline-item-timeline` },
        h("div", { class: `${mergedClsPrefix}-timeline-item-timeline__line` }),
        resolveWrappedSlot($slots.icon, (children) => {
          return children ? h("div", { class: `${mergedClsPrefix}-timeline-item-timeline__icon`, style: { color } }, children) : h("div", { class: `${mergedClsPrefix}-timeline-item-timeline__circle`, style: { borderColor: color } });
        })
      ),
      h(
        "div",
        { class: `${mergedClsPrefix}-timeline-item-content` },
        resolveWrappedSlot($slots.header, (children) => {
          const mergedChildren = children || this.title;
          if (mergedChildren) {
            return h("div", { class: `${mergedClsPrefix}-timeline-item-content__title` }, children || this.title);
          }
          return null;
        }),
        h("div", { class: `${mergedClsPrefix}-timeline-item-content__content` }, resolveSlot($slots.default, () => [this.content])),
        h("div", { class: `${mergedClsPrefix}-timeline-item-content__meta` }, resolveSlot($slots.footer, () => [this.time]))
      )
    );
  }
});
const _hoisted_1 = { class: "text-xl" };
const _hoisted_2 = { class: "text-center" };
const _hoisted_3 = {
  key: 1,
  class: "text-center"
};
const perPage = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PHistory",
  setup(__props) {
    let page = 1;
    const historys = ref([]);
    const hState = watchLoading({
      state: "loading",
      fail: "历史查询失败!"
    });
    const isOver = ref(false);
    async function queryIssues(page2) {
      hState.value = "loading";
      const [err, data] = await to(issueApi.qIssuePage({
        labels: appConfig.label.historyLabel,
        state: "all",
        page: page2.toString(),
        per_page: perPage.toString()
      }));
      if (err) {
        hState.value = "fail";
        return;
      }
      if (data.length == 0 || data.length < perPage) {
        isOver.value = true;
      }
      historys.value.push(...data);
      hState.value = "success";
    }
    queryIssues(page);
    function nextPage() {
      const oldSize = historys.value.length;
      const nPage = page + 1;
      queryIssues(nPage).then(() => {
        if (oldSize != historys.value.length) {
          page += nPage;
        }
      });
    }
    function gHistoryColor({ labels }) {
      const colorLabel = labels.find(({ name }) => name.startsWith(appConfig.label.historyLabel) && name.length > appConfig.label.historyLabel.length);
      return colorLabel != null ? "#" + colorLabel.color : "default";
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(NSpace), { vertical: "" }, {
        default: withCtx(() => [
          createVNode(_sfc_main$1, { context: "历史" }),
          historys.value.length > 0 ? (openBlock(), createBlock(unref(NCard), {
            key: 0,
            size: "small",
            bordered: false
          }, {
            default: withCtx(() => [
              createVNode(unref(NTimeline), null, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(historys.value, (history) => {
                    return openBlock(), createBlock(unref(NTimelineItem), {
                      key: history.number,
                      color: gHistoryColor(history)
                    }, {
                      header: withCtx(() => [
                        createBaseVNode("div", _hoisted_1, toDisplayString(history.title), 1)
                      ]),
                      footer: withCtx(() => [
                        createVNode(unref(NSpace), {
                          vertical: "",
                          size: "small"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$3, {
                              reactions: history.reactions
                            }, null, 8, ["reactions"]),
                            createVNode(unref(NSpace), null, {
                              default: withCtx(() => [
                                createBaseVNode("span", null, [
                                  createTextVNode(" 创建于: "),
                                  createVNode(unref(NTime), {
                                    time: new Date(history.created_at)
                                  }, null, 8, ["time"])
                                ]),
                                createBaseVNode("span", null, [
                                  createTextVNode(" 更新于: "),
                                  createVNode(unref(NTime), {
                                    time: new Date(history.updated_at),
                                    type: "relative"
                                  }, null, 8, ["time"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(CMarkdown, {
                              text: history.body,
                              id: history.number
                            }, null, 8, ["text", "id"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["color"]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_sfc_main$2, {
            state: unref(hState),
            class: "my-2"
          }, {
            fail: withCtx(() => [
              createBaseVNode("div", _hoisted_2, [
                createVNode(unref(NButton), { onClick: nextPage }, {
                  default: withCtx(() => [
                    createTextVNode(" 重试 ")
                  ]),
                  _: 1
                })
              ])
            ]),
            default: withCtx(() => [
              isOver.value ? (openBlock(), createBlock(COver, { key: 0 })) : (openBlock(), createElementBlock("div", _hoisted_3, [
                createVNode(unref(NButton), { onClick: nextPage }, {
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
