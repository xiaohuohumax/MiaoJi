import { w as watchLoading, N as NButton, C as COver, _ as _sfc_main$4 } from "./loading-5daa8d28.js";
import { _ as _sfc_main$1 } from "./CSubTitle.vue_vue_type_script_setup_true_lang-f5bcf0c9.js";
import { d as defineComponent, r as ref, B as createBlock, A as withCtx, G as unref, ag as to, ah as issueApi, y as openBlock, E as createBaseVNode, v as createVNode, H as createTextVNode } from "./index-1df43889.js";
import { C as CMarkdown } from "./CMarkdown-293ad8fa.js";
import { _ as _sfc_main$2 } from "./CReactions.vue_vue_type_script_setup_true_lang-4cab32e7.js";
import { a as appConfig } from "../app.config.js";
import { _ as _sfc_main$3 } from "./CComments.vue_vue_type_script_setup_true_lang-692921f5.js";
import { N as NSpace } from "./_plugin-vue_export-helper-68b6f5d3.js";
import { N as NCard } from "./Card-da1fd150.js";
const _hoisted_1 = { class: "text-center" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PCommunication",
  setup(__props) {
    const communication = ref(null);
    const cState = watchLoading({
      state: "init",
      fail: "留言查询失败!"
    });
    async function queryCommunication() {
      cState.value = "loading";
      const [err, data] = await to(issueApi.qIssuePage({
        labels: appConfig.label.communicationLabel,
        per_page: "1",
        state: "all"
      }));
      if (err) {
        cState.value = "fail";
        return;
      }
      communication.value = data[0];
      cState.value = "success";
    }
    queryCommunication();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$4), { state: unref(cState) }, {
        fail: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(unref(NButton), {
              onClick: queryCommunication,
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
          !communication.value ? (openBlock(), createBlock(unref(COver), { key: 0 }, {
            default: withCtx(() => [
              createTextVNode('未指定"留言"页')
            ]),
            _: 1
          })) : (openBlock(), createBlock(unref(NSpace), {
            key: 1,
            vertical: ""
          }, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$1), {
                context: communication.value.title
              }, null, 8, ["context"]),
              createVNode(unref(NCard), {
                bordered: false,
                size: "small"
              }, {
                default: withCtx(() => [
                  createVNode(unref(NSpace), {
                    vertical: "",
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createVNode(CMarkdown, {
                        text: communication.value.body,
                        id: communication.value.number
                      }, null, 8, ["text", "id"]),
                      createVNode(_sfc_main$2, {
                        reactions: communication.value.reactions
                      }, null, 8, ["reactions"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_sfc_main$3, {
                issue: communication.value,
                name: "留言"
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
