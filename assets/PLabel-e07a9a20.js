import { d as defineComponent, J as useAppStore, z as createElementBlock, v as createVNode, A as withCtx, G as unref, L as Fragment, O as useRouter, y as openBlock, a8 as withDirectives, a9 as vShow, M as renderList, E as createBaseVNode, H as createTextVNode, ag as to, B as createBlock } from "./index-d862e802.js";
import { _ as _sfc_main$2 } from "./CSubTitle.vue_vue_type_script_setup_true_lang-64cb751a.js";
import { w as watchLoading, _ as _sfc_main$1, C as COver, N as NButton } from "./COver-eb0f379e.js";
import { _ as _sfc_main$3 } from "./CLabel.vue_vue_type_script_setup_true_lang-810b9aa6.js";
import { N as NCard } from "./Card-9da4f331.js";
import { N as NSpace } from "./_plugin-vue_export-helper-84dbfeef.js";
import "../app.config.js";
const _hoisted_1 = { class: "text-center" };
const _hoisted_2 = { class: "text-center" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PLabel",
  setup(__props) {
    const issuesStore = useAppStore();
    const router = useRouter();
    const lState = watchLoading({
      state: "success",
      fail: "标签刷新失败!",
      success: "标签刷新成功!"
    });
    async function refresh() {
      lState.value = "loading";
      const [err] = await to(issuesStore.loadLabels(1));
      lState.value = err ? "fail" : "success";
    }
    function gotoHome(label) {
      router.push({ path: "/", query: { label: label.name } });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(NSpace), { vertical: "" }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, { context: "标签" }),
            withDirectives(createVNode(unref(NCard), {
              size: "small",
              bordered: false
            }, {
              default: withCtx(() => [
                createVNode(unref(NSpace), null, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(issuesStore).notFuncLabels, (label) => {
                      return openBlock(), createBlock(unref(NButton), {
                        ghost: "",
                        class: "max-w-full",
                        key: label.name,
                        onClick: ($event) => gotoHome(label),
                        color: "#" + label.color
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$3, {
                            class: "truncate",
                            label,
                            "hidden-des": false
                          }, null, 8, ["label"])
                        ]),
                        _: 2
                      }, 1032, ["onClick", "color"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 512), [
              [vShow, unref(issuesStore).notFuncLabels.length > 0]
            ]),
            createVNode(COver)
          ]),
          _: 1
        }),
        createVNode(_sfc_main$1, {
          state: unref(lState),
          class: "my-2"
        }, {
          fail: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createVNode(unref(NButton), {
                onClick: refresh,
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
            createBaseVNode("div", _hoisted_2, [
              createVNode(unref(NButton), {
                onClick: refresh,
                class: "mx-auto"
              }, {
                default: withCtx(() => [
                  createTextVNode(" 刷新 ")
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["state"])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};