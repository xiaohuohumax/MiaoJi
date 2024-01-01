import { w as watchLoading, N as NButton, C as COver, _ as _sfc_main$4 } from "./loading-e3f50597.js";
import { _ as _sfc_main$1 } from "./CSubTitle.vue_vue_type_script_setup_true_lang-d5c7aea0.js";
import { d as defineComponent, r as ref, B as createBlock, A as withCtx, G as unref, ag as to, ah as issueApi, y as openBlock, E as createBaseVNode, v as createVNode, H as createTextVNode } from "./index-d7777b86.js";
import { C as CMarkdown } from "./CMarkdown-9b75f261.js";
import { _ as _sfc_main$2 } from "./CReactions.vue_vue_type_script_setup_true_lang-4f774dae.js";
import { a as appConfig } from "../app.config.js";
import { _ as _sfc_main$3 } from "./CComments.vue_vue_type_script_setup_true_lang-e6b69b19.js";
import { N as NSpace } from "./_plugin-vue_export-helper-d6e0fff0.js";
import { N as NCard } from "./Card-f7545e27.js";
const _hoisted_1 = { class: "text-center" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PAbout",
  setup(__props) {
    const about = ref(null);
    const aState = watchLoading({
      state: "loading",
      fail: "查询失败!"
    });
    async function queryIssue() {
      aState.value = "loading";
      const [err, data] = await to(issueApi.qIssuePage({
        labels: appConfig.label.aboutLabel,
        per_page: "1",
        state: "all"
      }));
      if (err) {
        aState.value = "fail";
        return;
      }
      about.value = data[0];
      aState.value = "success";
    }
    queryIssue();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$4), { state: unref(aState) }, {
        fail: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(unref(NButton), {
              onClick: queryIssue,
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
          !about.value ? (openBlock(), createBlock(unref(COver), { key: 0 }, {
            default: withCtx(() => [
              createTextVNode('未指定"关于"页')
            ]),
            _: 1
          })) : (openBlock(), createBlock(unref(NSpace), {
            key: 1,
            vertical: ""
          }, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$1), {
                context: about.value.title
              }, null, 8, ["context"]),
              createVNode(unref(NCard), {
                size: "small",
                bordered: false
              }, {
                default: withCtx(() => [
                  createVNode(unref(NSpace), { vertical: "" }, {
                    default: withCtx(() => [
                      createVNode(CMarkdown, {
                        text: about.value.body,
                        id: about.value.number
                      }, null, 8, ["text", "id"]),
                      createVNode(_sfc_main$2, {
                        reactions: about.value.reactions
                      }, null, 8, ["reactions"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_sfc_main$3, {
                issue: about.value,
                name: "评论"
              }, null, 8, ["issue"])
            ]),
            _: 1
          }))
        ]),
        _: 1
      }, 8, ["state"]);
    };
  }
});
export {
  _sfc_main as default
};
