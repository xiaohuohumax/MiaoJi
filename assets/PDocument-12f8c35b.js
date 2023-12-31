import { d as defineComponent, r as ref, B as createBlock, A as withCtx, G as unref, ag as to, ah as issueApi, ai as updateTitle, O as useRouter, y as openBlock, v as createVNode, E as createBaseVNode, F as toDisplayString, H as createTextVNode, z as createElementBlock, M as renderList, af as removeFuncLabels, L as Fragment } from "./index-d862e802.js";
import { w as watchLoading, _ as _sfc_main$1 } from "./COver-eb0f379e.js";
import { _ as _sfc_main$4 } from "./CLabel.vue_vue_type_script_setup_true_lang-810b9aa6.js";
import { C as CMarkdown } from "./CMarkdown-9b25e5ed.js";
import { N as NTime, _ as _sfc_main$2 } from "./CReactions.vue_vue_type_script_setup_true_lang-7b4b304d.js";
import { _ as _sfc_main$3 } from "./CComments.vue_vue_type_script_setup_true_lang-c2c6bdad.js";
import { N as NCard } from "./Card-9da4f331.js";
import { N as NSpace } from "./_plugin-vue_export-helper-84dbfeef.js";
import "../app.config.js";
const _hoisted_1 = { class: "text-2xl font-bold align-middle" };
const _hoisted_2 = ["href"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PDocument",
  props: {
    id: {}
  },
  setup(__props) {
    const props = __props;
    const document = ref(null);
    const dState = watchLoading({
      state: "loading",
      fail: "文章查询失败!"
    });
    async function queryDocument() {
      dState.value = "loading";
      const [err, data] = await to(issueApi.qIssueById(props.id));
      if (err || data == null) {
        dState.value = "fail";
        return;
      }
      document.value = data;
      dState.value = "success";
      updateTitle({ after: document.value.title });
    }
    queryDocument();
    const router = useRouter();
    function gotoHome(label) {
      router.push({ path: "/", query: { label: label.name } });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { state: unref(dState) }, {
        fail: withCtx(() => [
          createVNode(unref(NCard), {
            size: "small",
            bordered: false
          }, {
            default: withCtx(() => [
              createBaseVNode("button", {
                class: "p-2 w-full font-bold",
                onClick: queryDocument
              }, " 重新加载 ")
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createVNode(unref(NSpace), { vertical: "" }, {
            default: withCtx(() => [
              createVNode(unref(NCard), {
                size: "small",
                bordered: false
              }, {
                default: withCtx(() => [
                  createVNode(unref(NSpace), {
                    class: "text-sm relative",
                    vertical: ""
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("p", _hoisted_1, toDisplayString(document.value.title), 1),
                      createVNode(unref(NSpace), null, {
                        default: withCtx(() => [
                          createBaseVNode("a", {
                            target: "_blank",
                            href: document.value.user.html_url
                          }, [
                            createBaseVNode("span", null, toDisplayString(document.value.user.login), 1)
                          ], 8, _hoisted_2),
                          createBaseVNode("span", null, [
                            createTextVNode(" 创建于: "),
                            createVNode(unref(NTime), {
                              time: new Date(document.value.created_at)
                            }, null, 8, ["time"])
                          ]),
                          createBaseVNode("span", null, [
                            createTextVNode(" 更新于: "),
                            createVNode(unref(NTime), {
                              time: new Date(document.value.updated_at),
                              type: "relative"
                            }, null, 8, ["time"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NSpace), { align: "center" }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(removeFuncLabels)(document.value.labels), (label) => {
                            return openBlock(), createBlock(_sfc_main$4, {
                              key: label.id,
                              "hidden-des": true,
                              onClick: ($event) => gotoHome(label),
                              label,
                              class: "font-bold"
                            }, null, 8, ["onClick", "label"]);
                          }), 128)),
                          createVNode(_sfc_main$2, {
                            reactions: document.value.reactions
                          }, null, 8, ["reactions"])
                        ]),
                        _: 1
                      }),
                      createVNode(CMarkdown, {
                        text: document.value.body,
                        id: document.value.number
                      }, null, 8, ["text", "id"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_sfc_main$3, {
                issue: document.value,
                name: "评论"
              }, null, 8, ["issue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["state"]);
    };
  }
});
export {
  _sfc_main as default
};
