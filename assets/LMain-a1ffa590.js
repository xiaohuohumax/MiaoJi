import { r as ref, h, c as cB, a as cM, b as c, d as defineComponent, u as useConfig, w as watchEffect, e as watch, t as toRef, f as computed, g as useTheme, o as onMounted, i as onBeforeUnmount, j as useThemeClass, k as isMounted, T as Transition, m as mergeProps, n as nextTick, N as NBaseIcon, l as backTopLight, p as inject, q as loadingBarApiInjectionKey, s as throwError, I as IconWrapper, v as createVNode, x as resolveComponent, y as openBlock, z as createElementBlock, A as withCtx, B as createBlock, K as KeepAlive, C as resolveDynamicComponent, D as createCommentVNode, E as createBaseVNode, F as toDisplayString, G as unref, H as createTextVNode, J as useAppStore, L as Fragment, M as renderList, O as useRouter, P as useMessage } from "./index-9ab0a72d.js";
import { f as formatLength, _ as _export_sfc, N as NSpace, a as NIcon } from "./_plugin-vue_export-helper-5fb8bf2a.js";
import { a as appConfig } from "../app.config.js";
import { r as resolveSlot, N as NCard } from "./Card-3fcb523c.js";
import { f as fadeInScaleUpTransition, u as useMergedState, L as LazyTeleport } from "./fade-in-scale-up.cssr-f60307be.js";
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
    return document.documentElement;
  }
  if (parentNode.nodeType === 1) {
    const { overflow, overflowX, overflowY } = getComputedStyle(parentNode);
    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return parentNode;
    }
  }
  return getScrollParent(parentNode);
}
function unwrapElement(target) {
  if (typeof target === "string")
    return document.querySelector(target);
  if (typeof target === "function")
    return target();
  return target;
}
const lockHtmlScrollRightCompensationRef = ref("0px");
function isDocument(node) {
  return node.nodeName === "#document";
}
const BackTopIcon = h(
  "svg",
  { viewBox: "0 0 24 24", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xlinkHref: "http://www.w3.org/1999/xlink" },
  h(
    "g",
    { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" },
    h(
      "g",
      { transform: "translate(-139.000000, -4423.000000)", "fill-rule": "nonzero" },
      h(
        "g",
        { transform: "translate(120.000000, 4285.000000)" },
        h(
          "g",
          { transform: "translate(7.000000, 126.000000)" },
          h(
            "g",
            { transform: "translate(24.000000, 24.000000) scale(1, -1) translate(-24.000000, -24.000000) translate(12.000000, 12.000000)" },
            h(
              "g",
              { transform: "translate(4.000000, 2.000000)" },
              h("path", { d: "M8,0 C8.51283584,0 8.93550716,0.38604019 8.99327227,0.883378875 L9,1 L9,10.584 L12.2928932,7.29289322 C12.6834175,6.90236893 13.3165825,6.90236893 13.7071068,7.29289322 C14.0675907,7.65337718 14.0953203,8.22060824 13.7902954,8.61289944 L13.7071068,8.70710678 L8.70710678,13.7071068 L8.62544899,13.7803112 L8.618,13.784 L8.59530661,13.8036654 L8.4840621,13.8753288 L8.37133602,13.9287745 L8.22929083,13.9735893 L8.14346259,13.9897165 L8.03324678,13.9994506 L7.9137692,13.9962979 L7.77070917,13.9735893 L7.6583843,13.9401293 L7.57677845,13.9063266 L7.47929125,13.8540045 L7.4048407,13.8036865 L7.38131006,13.7856883 C7.35030318,13.7612383 7.32077858,13.7349921 7.29289322,13.7071068 L2.29289322,8.70710678 L2.20970461,8.61289944 C1.90467972,8.22060824 1.93240926,7.65337718 2.29289322,7.29289322 C2.65337718,6.93240926 3.22060824,6.90467972 3.61289944,7.20970461 L3.70710678,7.29289322 L7,10.585 L7,1 L7.00672773,0.883378875 C7.06449284,0.38604019 7.48716416,0 8,0 Z" }),
              h("path", { d: "M14.9333333,15.9994506 C15.5224371,15.9994506 16,16.4471659 16,16.9994506 C16,17.5122865 15.5882238,17.9349578 15.0577292,17.9927229 L14.9333333,17.9994506 L1.06666667,17.9994506 C0.477562934,17.9994506 0,17.5517354 0,16.9994506 C0,16.4866148 0.411776203,16.0639435 0.9422708,16.0061783 L1.06666667,15.9994506 L14.9333333,15.9994506 Z" })
            )
          )
        )
      )
    )
  )
);
const style = cB("back-top", `
 position: fixed;
 right: 40px;
 bottom: 40px;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 height: var(--n-height);
 min-width: var(--n-width);
 box-shadow: var(--n-box-shadow);
 background-color: var(--n-color);
`, [fadeInScaleUpTransition(), cM("transition-disabled", {
  transition: "none !important"
}), cB("base-icon", `
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `), c("svg", {
  pointerEvents: "none"
}), c("&:hover", {
  boxShadow: "var(--n-box-shadow-hover)"
}, [cB("base-icon", {
  color: "var(--n-icon-color-hover)"
})]), c("&:active", {
  boxShadow: "var(--n-box-shadow-pressed)"
}, [cB("base-icon", {
  color: "var(--n-icon-color-pressed)"
})])]);
const backTopProps = Object.assign(Object.assign({}, useTheme.props), {
  show: {
    type: Boolean,
    default: void 0
  },
  right: {
    type: [Number, String],
    default: 40
  },
  bottom: {
    type: [Number, String],
    default: 40
  },
  to: {
    type: [String, Object],
    default: "body"
  },
  visibilityHeight: {
    type: Number,
    default: 180
  },
  listenTo: [String, Object, Function],
  "onUpdate:show": {
    type: Function,
    default: () => {
    }
  },
  // deprecated
  target: Function,
  onShow: Function,
  onHide: Function
});
const NBackTop = defineComponent({
  name: "BackTop",
  // make style applied to back-top button
  inheritAttrs: false,
  props: backTopProps,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const scrollTopRef = ref(null);
    const uncontrolledShowRef = ref(false);
    watchEffect(() => {
      const { value: scrollTop } = scrollTopRef;
      if (scrollTop === null) {
        uncontrolledShowRef.value = false;
        return;
      }
      uncontrolledShowRef.value = scrollTop >= props.visibilityHeight;
    });
    const DomInfoReadyRef = ref(false);
    watch(uncontrolledShowRef, (value) => {
      var _a;
      if (DomInfoReadyRef.value) {
        (_a = props["onUpdate:show"]) === null || _a === void 0 ? void 0 : _a.call(props, value);
      }
    });
    const controlledShowRef = toRef(props, "show");
    const mergedShowRef = useMergedState(controlledShowRef, uncontrolledShowRef);
    const transitionDisabledRef = ref(true);
    const placeholderRef = ref(null);
    const styleRef = computed(() => {
      return {
        right: `calc(${formatLength(props.right)} + ${lockHtmlScrollRightCompensationRef.value})`,
        bottom: formatLength(props.bottom)
      };
    });
    let scrollElement;
    let scrollListenerRegistered;
    watch(mergedShowRef, (value) => {
      var _a, _b;
      if (DomInfoReadyRef.value) {
        if (value) {
          (_a = props.onShow) === null || _a === void 0 ? void 0 : _a.call(props);
        }
        (_b = props.onHide) === null || _b === void 0 ? void 0 : _b.call(props);
      }
    });
    const themeRef = useTheme("BackTop", "-back-top", style, backTopLight, props, mergedClsPrefixRef);
    function init() {
      var _a;
      if (scrollListenerRegistered)
        return;
      scrollListenerRegistered = true;
      const scrollEl = ((_a = props.target) === null || _a === void 0 ? void 0 : _a.call(props)) || unwrapElement(props.listenTo) || getScrollParent(placeholderRef.value);
      if (!scrollEl) {
        return;
      }
      scrollElement = scrollEl === document.documentElement ? document : scrollEl;
      const { to } = props;
      typeof to === "string" ? document.querySelector(to) : to;
      scrollElement.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    function handleClick() {
      (isDocument(scrollElement) ? document.documentElement : scrollElement).scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    function handleScroll() {
      scrollTopRef.value = (isDocument(scrollElement) ? document.documentElement : scrollElement).scrollTop;
      if (!DomInfoReadyRef.value) {
        void nextTick(() => {
          DomInfoReadyRef.value = true;
        });
      }
    }
    function handleAfterEnter() {
      transitionDisabledRef.value = false;
    }
    onMounted(() => {
      init();
      transitionDisabledRef.value = mergedShowRef.value;
    });
    onBeforeUnmount(() => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    });
    const cssVarsRef = computed(() => {
      const { self: { color, boxShadow, boxShadowHover, boxShadowPressed, iconColor, iconColorHover, iconColorPressed, width, height, iconSize, borderRadius, textColor }, common: { cubicBezierEaseInOut } } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-border-radius": borderRadius,
        "--n-height": height,
        "--n-width": width,
        "--n-box-shadow": boxShadow,
        "--n-box-shadow-hover": boxShadowHover,
        "--n-box-shadow-pressed": boxShadowPressed,
        "--n-color": color,
        "--n-icon-size": iconSize,
        "--n-icon-color": iconColor,
        "--n-icon-color-hover": iconColorHover,
        "--n-icon-color-pressed": iconColorPressed,
        "--n-text-color": textColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("back-top", void 0, cssVarsRef, props) : void 0;
    return {
      placeholderRef,
      style: styleRef,
      mergedShow: mergedShowRef,
      isMounted: isMounted(),
      scrollElement: ref(null),
      scrollTop: scrollTopRef,
      DomInfoReady: DomInfoReadyRef,
      transitionDisabled: transitionDisabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      handleAfterEnter,
      handleScroll,
      handleClick,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const { mergedClsPrefix } = this;
    return h(
      "div",
      { ref: "placeholderRef", class: `${mergedClsPrefix}-back-top-placeholder`, style: "display: none", "aria-hidden": true },
      h(LazyTeleport, { to: this.to, show: this.mergedShow }, {
        default: () => h(Transition, { name: "fade-in-scale-up-transition", appear: this.isMounted, onAfterEnter: this.handleAfterEnter }, {
          default: () => {
            var _a;
            (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
            return this.mergedShow ? h("div", mergeProps(this.$attrs, {
              class: [
                `${mergedClsPrefix}-back-top`,
                this.themeClass,
                this.transitionDisabled && `${mergedClsPrefix}-back-top--transition-disabled`
              ],
              style: [this.style, this.cssVars],
              onClick: this.handleClick
            }), resolveSlot(this.$slots.default, () => [
              h(NBaseIcon, { clsPrefix: mergedClsPrefix }, { default: () => BackTopIcon })
            ])) : null;
          }
        })
      })
    );
  }
});
function useLoadingBar() {
  const loadingBar = inject(loadingBarApiInjectionKey, null);
  if (loadingBar === null) {
    throwError("use-loading-bar", "No outer <n-loading-bar-provider /> founded.");
  }
  return loadingBar;
}
const GithubOne = IconWrapper("github-one", true, function(props) {
  return createVNode("svg", {
    "width": props.size,
    "height": props.size,
    "viewBox": "0 0 48 48",
    "fill": "none"
  }, [createVNode("path", {
    "d": "M29.3444 30.4765C31.7481 29.977 33.9292 29.1108 35.6247 27.8391C38.5202 25.6676 40 22.3136 40 18.9999C40 16.6752 39.1187 14.505 37.5929 12.6668C36.7427 11.6425 39.2295 3.99989 37.02 5.02919C34.8105 6.05848 31.5708 8.33679 29.8726 7.83398C28.0545 7.29565 26.0733 6.99989 24 6.99989C22.1992 6.99989 20.4679 7.22301 18.8526 7.6344C16.5046 8.23237 14.2591 5.99989 12 5.02919C9.74086 4.05848 10.9736 11.9632 10.3026 12.7944C8.84119 14.6051 8 16.7288 8 18.9999C8 22.3136 9.79086 25.6676 12.6863 27.8391C14.6151 29.2857 17.034 30.2076 19.7401 30.6619",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap
  }, null), createVNode("path", {
    "d": "M19.7397 30.6619C18.5812 31.937 18.002 33.1478 18.002 34.2944C18.002 35.441 18.002 38.3464 18.002 43.0106",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap
  }, null), createVNode("path", {
    "d": "M29.3446 30.4766C30.4423 31.9174 30.9912 33.211 30.9912 34.3576C30.9912 35.5042 30.9912 38.3885 30.9912 43.0107",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap
  }, null), createVNode("path", {
    "d": "M6 31.2155C6.89887 31.3254 7.56554 31.7387 8 32.4554C8.65169 33.5303 11.0742 37.518 13.8251 37.518C15.6591 37.518 17.0515 37.518 18.0024 37.518",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap
  }, null)]);
});
const ToTop = IconWrapper("to-top", false, function(props) {
  return createVNode("svg", {
    "width": props.size,
    "height": props.size,
    "viewBox": "0 0 48 48",
    "fill": "none"
  }, [createVNode("path", {
    "d": "M24.0083 14.1006V42.0001",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null), createVNode("path", {
    "d": "M12 26L24 14L36 26",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null), createVNode("path", {
    "d": "M12 6H36",
    "stroke": props.colors[0],
    "stroke-width": props.strokeWidth,
    "stroke-linecap": props.strokeLinecap,
    "stroke-linejoin": props.strokeLinejoin
  }, null)]);
});
const _sfc_main$3 = {};
const _hoisted_1$3 = { class: "container mx-auto" };
function _sfc_render(_ctx, _cache) {
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createVNode(_component_router_view, null, {
      default: withCtx(({ Component, route }) => [
        (openBlock(), createBlock(KeepAlive, null, [
          route.meta.keepAlive ? (openBlock(), createBlock(resolveDynamicComponent(Component), { key: 0 })) : createCommentVNode("", true)
        ], 1024)),
        !route.meta.keepAlive ? (openBlock(), createBlock(resolveDynamicComponent(Component), { key: 0 })) : createCommentVNode("", true)
      ]),
      _: 1
    })
  ]);
}
const LBody = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render]]);
const _hoisted_1$2 = {
  size: "small",
  class: "text-center py-8 flex justify-center items-center text-xs"
};
const _hoisted_2$1 = ["href"];
const _hoisted_3$1 = ["href"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LFooter",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(unref(NSpace), null, {
          default: withCtx(() => [
            createBaseVNode("a", {
              href: unref(appConfig).author.url,
              target: "_blank",
              class: "hover:text-green-300"
            }, toDisplayString(unref(appConfig).name), 9, _hoisted_2$1),
            createBaseVNode("span", null, " v" + toDisplayString(unref(appConfig).version), 1),
            createBaseVNode("a", {
              href: unref(appConfig).author.url,
              target: "_blank",
              class: "hover:text-green-300 flex items-center"
            }, [
              createVNode(unref(GithubOne), { class: "inline-block" }),
              createTextVNode(" " + toDisplayString(unref(appConfig).author.name), 1)
            ], 8, _hoisted_3$1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const _imports_0 = "/MiaoJi/logo.png";
const _hoisted_1$1 = { class: "sticky top-0 z-50" };
const _hoisted_2 = { class: "flex justify-between items-center" };
const _hoisted_3 = { class: "text-xl flex-shrink-0 group" };
const _hoisted_4 = ["alt"];
const _hoisted_5 = { class: "ml-2 group-hover:text-green-300" };
const _hoisted_6 = { class: "hidden md:inline" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", { class: "hidden md:inline" }, "切换", -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LHeader",
  setup(__props) {
    const appStore = useAppStore();
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(unref(NCard), {
          size: "small",
          class: "container mx-auto",
          bordered: false
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createVNode(_component_RouterLink, {
                  to: "/",
                  title: "首页",
                  class: "flex items-center font-bold"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("img", {
                      class: "w-10 md:w-16 hover:scale-105 duration-100",
                      src: _imports_0,
                      alt: unref(appConfig).name
                    }, null, 8, _hoisted_4),
                    createBaseVNode("span", _hoisted_5, toDisplayString(unref(appConfig).name), 1)
                  ]),
                  _: 1
                })
              ]),
              createVNode(unref(NSpace), { class: "font-bold text-lg" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(appStore).menus, (menu) => {
                    return openBlock(), createElementBlock(Fragment, null, [
                      unref(appStore).hasLabels(menu.labels) ? (openBlock(), createBlock(_component_RouterLink, {
                        to: menu.path,
                        class: "group flex items-center hover:scale-105 duration-100",
                        key: menu.name
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NIcon), { class: "group-hover:text-green-300" }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(resolveDynamicComponent(menu.icon), {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": 5
                              }))
                            ]),
                            _: 2
                          }, 1024),
                          createBaseVNode("span", _hoisted_6, toDisplayString(menu.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"])) : createCommentVNode("", true)
                    ], 64);
                  }), 256)),
                  createBaseVNode("div", {
                    onClick: _cache[0] || (_cache[0] = ($event) => unref(appStore).toggleTheme()),
                    class: "group flex items-center cursor-pointer hover:scale-105 duration-100"
                  }, [
                    createVNode(unref(NIcon), { class: "group-hover:text-green-300" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(unref(appStore).theme.icon), {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": 5
                        }))
                      ]),
                      _: 1
                    }),
                    _hoisted_7
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
const _hoisted_1 = { class: "flex flex-col min-h-svh" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LMain",
  setup(__props) {
    const router = useRouter();
    const appStore = useAppStore();
    const bar = useLoadingBar();
    router.beforeEach((_to, _from, next) => {
      bar.start();
      next();
    });
    router.afterEach(() => bar.finish());
    const message = useMessage();
    appStore.loadLabels(5).catch(() => {
      message.error("加载标签失败!");
    });
    appStore.loadBanners();
    appStore.loopLoadLabels();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_sfc_main$1),
          createVNode(LBody, { class: "my-2 flex-grow" }),
          createVNode(_sfc_main$2)
        ]),
        createVNode(unref(NBackTop), {
          bottom: 40,
          right: 40,
          "visibility-height": 300,
          class: "hidden md:flex"
        }, {
          default: withCtx(() => [
            createVNode(unref(ToTop), { size: "1.5em" })
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
