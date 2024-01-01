import { w as watchLoading, N as NButton, C as COver, _ as _sfc_main$1 } from "./loading-e3f50597.js";
import { d as defineComponent, r as ref, f as computed, ag as to, b0 as commentApi, y as openBlock, B as createBlock, A as withCtx, v as createVNode, E as createBaseVNode, F as toDisplayString, G as unref, H as createTextVNode, z as createElementBlock, L as Fragment, M as renderList, D as createCommentVNode, b1 as hasLabel } from "./index-d7777b86.js";
import { C as CMarkdown } from "./CMarkdown-9b75f261.js";
import { N as NTime, _ as _sfc_main$2 } from "./CReactions.vue_vue_type_script_setup_true_lang-4f774dae.js";
import { a as appConfig } from "../app.config.js";
import { N as NCard } from "./Card-f7545e27.js";
import { N as NSpace } from "./_plugin-vue_export-helper-d6e0fff0.js";
const _hoisted_1 = ["href"];
const _hoisted_2 = { class: "flex" };
const _hoisted_3 = ["href"];
const _hoisted_4 = ["src"];
const _hoisted_5 = ["href"];
const _hoisted_6 = { class: "font-bold text-xl hover:text-green-300" };
const _hoisted_7 = { class: "text-center" };
const _hoisted_8 = {
  key: 1,
  class: "text-center"
};
const cPerPage = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CComments",
  props: {
    issue: {},
    name: {}
  },
  setup(__props) {
    const props = __props;
    const comments = ref([]);
    const cState = watchLoading({
      state: "loading",
      fail: "评论查询失败!"
    });
    const isOver = ref(false);
    let cPage = 1;
    queryComments(props.issue.number.toString(), cPage);
    const closeComment = computed(() => {
      return props.issue == null ? false : hasLabel(props.issue.labels, appConfig.label.hiddenCommentLabel);
    });
    async function queryComments(issueId, page) {
      cState.value = "loading";
      const [err, data] = await to(commentApi.qCommentsByIssueId(issueId, {
        page: page.toString(),
        per_page: cPerPage.toString()
      }));
      if (err) {
        cState.value = "fail";
        return;
      }
      if (data.length == 0 || data.length < cPerPage) {
        isOver.value = true;
      }
      comments.value.push(...data);
      cState.value = "success";
    }
    function nextPage() {
      const oldSize = comments.value.length;
      const nPage = oldSize == 0 ? 1 : cPage + 1;
      queryComments(props.issue.number.toString(), nPage).then(() => {
        if (oldSize != comments.value.length) {
          cPage += nPage;
        }
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(NSpace), { vertical: "" }, {
        default: withCtx(() => [
          createVNode(unref(NCard), {
            class: "font-bold",
            size: "small",
            bordered: false
          }, {
            default: withCtx(() => [
              createBaseVNode("p", null, toDisplayString(_ctx.name) + ":", 1)
            ]),
            _: 1
          }),
          createVNode(unref(NCard), {
            size: "small",
            bordered: false
          }, {
            default: withCtx(() => [
              createBaseVNode("a", {
                href: _ctx.issue.html_url,
                target: "_blank"
              }, [
                createVNode(unref(NButton), {
                  class: "w-full",
                  type: "info"
                }, {
                  default: withCtx(() => [
                    createTextVNode("去" + toDisplayString(_ctx.name), 1)
                  ]),
                  _: 1
                })
              ], 8, _hoisted_1)
            ]),
            _: 1
          }),
          closeComment.value ? (openBlock(), createBlock(unref(NCard), {
            key: 0,
            class: "font-bold p-2 text-center",
            size: "small",
            bordered: false
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.name) + "已影藏 ", 1)
            ]),
            _: 1
          })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            comments.value.length > 0 ? (openBlock(), createBlock(unref(NSpace), {
              key: 0,
              vertical: ""
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(comments.value, (comment) => {
                  return openBlock(), createBlock(unref(NCard), {
                    size: "small",
                    key: comment.id,
                    bordered: false
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_2, [
                        createBaseVNode("a", {
                          target: "_blank",
                          href: comment.user.html_url
                        }, [
                          createBaseVNode("img", {
                            src: comment.user.avatar_url,
                            class: "rounded-md block w-16 h-16 flex-shrink-0 hover:scale-105 duration-100"
                          }, null, 8, _hoisted_4)
                        ], 8, _hoisted_3),
                        createVNode(unref(NSpace), {
                          vertical: "",
                          class: "ml-2 flex-grow w-0"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("a", {
                              target: "_blank",
                              href: comment.user.html_url
                            }, [
                              createBaseVNode("span", _hoisted_6, toDisplayString(comment.user.login), 1)
                            ], 8, _hoisted_5),
                            createVNode(unref(NSpace), { align: "center" }, {
                              default: withCtx(() => [
                                createVNode(unref(NTime), {
                                  time: new Date(comment.updated_at),
                                  type: "relative"
                                }, null, 8, ["time"]),
                                createVNode(_sfc_main$2, {
                                  class: "inline-block",
                                  reactions: comment.reactions
                                }, null, 8, ["reactions"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(NCard), {
                              bordered: false,
                              size: "small",
                              class: "w-full overflow-hidden"
                            }, {
                              default: withCtx(() => [
                                createVNode(CMarkdown, {
                                  text: comment.body,
                                  class: "rounded-lg",
                                  id: comment.id
                                }, null, 8, ["text", "id"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(unref(_sfc_main$1), { state: unref(cState) }, {
              fail: withCtx(() => [
                createBaseVNode("div", _hoisted_7, [
                  createVNode(unref(NButton), {
                    onClick: nextPage,
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
                isOver.value ? (openBlock(), createBlock(unref(COver), { key: 0 })) : (openBlock(), createElementBlock("div", _hoisted_8, [
                  createVNode(unref(NButton), {
                    onClick: nextPage,
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
          ], 64))
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as _
};
