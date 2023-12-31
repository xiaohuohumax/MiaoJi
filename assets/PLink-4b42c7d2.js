import { d as defineComponent, r as ref, B as createBlock, A as withCtx, G as unref, ag as to, ah as issueApi, aj as gAnchors, y as openBlock, v as createVNode, z as createElementBlock, M as renderList, L as Fragment, E as createBaseVNode, H as createTextVNode, D as createCommentVNode, F as toDisplayString } from "./index-d862e802.js";
import { _ as _sfc_main$1 } from "./CSubTitle.vue_vue_type_script_setup_true_lang-64cb751a.js";
import { w as watchLoading, N as NButton, C as COver, _ as _sfc_main$2 } from "./COver-eb0f379e.js";
import { a as appConfig } from "../app.config.js";
import { N as NGrid, a as NGridItem } from "./Grid-da49ed8c.js";
import { N as NCard } from "./Card-9da4f331.js";
import { N as NSpace } from "./_plugin-vue_export-helper-84dbfeef.js";
import "./VResizeObserver-660fe53e.js";
const _hoisted_1 = ["href"];
const _hoisted_2 = ["src", "alt"];
const _hoisted_3 = {
  size: "small",
  class: "flex items-center text-xl hover:text-green-300"
};
const _hoisted_4 = ["href"];
const _hoisted_5 = {
  size: "small",
  class: "flex items-center hover:text-green-300"
};
const _hoisted_6 = ["href"];
const _hoisted_7 = { class: "text-center" };
const _hoisted_8 = {
  key: 1,
  class: "text-center"
};
const _hoisted_9 = ["href"];
const perPage = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PLink",
  setup(__props) {
    let page = 1;
    const links = ref([]);
    const lState = watchLoading({
      state: "loading",
      fail: "友链查询失败!"
    });
    const isOver = ref(false);
    async function queryLinks(page2) {
      lState.value = "loading";
      const [err, data] = await to(issueApi.qIssuePage({
        labels: appConfig.label.linkLabel,
        state: "all",
        page: page2.toString(),
        per_page: perPage.toString()
      }));
      if (err) {
        lState.value = "fail";
        return;
      }
      if (data.length == 0 || data.length < perPage) {
        isOver.value = true;
      }
      const d = data.map((d2) => {
        const anchors = gAnchors(d2.body);
        return { ...d2, anchor: anchors.length > 0 ? anchors[0] : null };
      });
      links.value.push(...d);
      lState.value = "success";
    }
    queryLinks(page);
    function nextPage() {
      const oldSize = links.value.length;
      const nPage = page + 1;
      queryLinks(nPage).then(() => {
        if (oldSize != links.value.length) {
          page += nPage;
        }
      });
    }
    const applyLink = ref(null);
    const aLState = ref("loading");
    async function queryApplyLink() {
      const [err, res] = await to(issueApi.qIssuePage({
        labels: appConfig.label.applyLinkLabel,
        state: "all",
        page: "1",
        per_page: "1"
      }));
      if (err || res.length == 0) {
        aLState.value = "fail";
        return;
      }
      applyLink.value = res[0];
      aLState.value = "success";
    }
    queryApplyLink();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(NSpace), { vertical: "" }, {
        default: withCtx(() => [
          createVNode(_sfc_main$1, { context: "友链" }),
          createVNode(unref(NGrid), {
            cols: "1 s:2 m:3 l:4 xl:5 2xl:6",
            responsive: "screen",
            "x-gap": 12,
            "y-gap": 12
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(links.value, (link) => {
                return openBlock(), createBlock(unref(NGridItem), {
                  key: link.number
                }, {
                  default: withCtx(() => [
                    createVNode(unref(NCard), {
                      size: "small",
                      bordered: false
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NSpace), { class: "h-full" }, {
                          default: withCtx(() => [
                            createBaseVNode("a", {
                              class: "font-bold flex-shrink-0 mt-1",
                              target: "_blank",
                              href: link.user.html_url
                            }, [
                              createBaseVNode("img", {
                                class: "w-16 rounded-md mx-auto hover:scale-105 duration-100",
                                src: link.user.avatar_url,
                                alt: link.user.login
                              }, null, 8, _hoisted_2)
                            ], 8, _hoisted_1),
                            createVNode(unref(NSpace), {
                              size: "small",
                              vertical: "",
                              class: "flex-grow"
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_3, [
                                  createBaseVNode("a", {
                                    href: link.anchor ? link.anchor.href : link.user.html_url,
                                    target: "_blank"
                                  }, toDisplayString(link.anchor ? link.anchor.content : link.title), 9, _hoisted_4)
                                ]),
                                createBaseVNode("div", _hoisted_5, [
                                  createBaseVNode("a", {
                                    href: link.user.html_url,
                                    target: "_blank"
                                  }, toDisplayString(link.user.login), 9, _hoisted_6)
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          }),
          createVNode(_sfc_main$2, { state: unref(lState) }, {
            fail: withCtx(() => [
              createBaseVNode("div", _hoisted_7, [
                createVNode(unref(NButton), { onClick: nextPage }, {
                  default: withCtx(() => [
                    createTextVNode(" 重试 ")
                  ]),
                  _: 1
                })
              ])
            ]),
            default: withCtx(() => [
              isOver.value ? (openBlock(), createBlock(COver, { key: 0 })) : (openBlock(), createElementBlock("div", _hoisted_8, [
                createVNode(unref(NButton), { onClick: nextPage }, {
                  default: withCtx(() => [
                    createTextVNode(" 更多 ")
                  ]),
                  _: 1
                })
              ]))
            ]),
            _: 1
          }, 8, ["state"]),
          aLState.value == "success" ? (openBlock(), createBlock(unref(NCard), {
            key: 0,
            size: "small",
            bordered: false
          }, {
            default: withCtx(() => [
              createBaseVNode("a", {
                href: applyLink.value.html_url,
                target: "_blank"
              }, [
                createVNode(unref(NButton), {
                  class: "w-full",
                  type: "info"
                }, {
                  default: withCtx(() => [
                    createTextVNode("去申请")
                  ]),
                  _: 1
                })
              ], 8, _hoisted_9)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
