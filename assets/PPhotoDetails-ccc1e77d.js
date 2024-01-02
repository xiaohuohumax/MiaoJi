import { w as watchLoading, _ as _sfc_main$3 } from "./loading-5daa8d28.js";
import { d as defineComponent, r as ref, B as createBlock, A as withCtx, G as unref, ag as to, ah as issueApi, al as gImages, ai as updateTitle, y as openBlock, v as createVNode, E as createBaseVNode, F as toDisplayString, H as createTextVNode, z as createElementBlock, M as renderList, af as removeFuncLabels, L as Fragment } from "./index-1df43889.js";
import { _ as _sfc_main$4 } from "./CLabel.vue_vue_type_script_setup_true_lang-e3e0b22c.js";
import { N as NTime, _ as _sfc_main$1 } from "./CReactions.vue_vue_type_script_setup_true_lang-4cab32e7.js";
import { _ as _sfc_main$2 } from "./CComments.vue_vue_type_script_setup_true_lang-692921f5.js";
import { N as NCard } from "./Card-da1fd150.js";
import { N as NSpace } from "./_plugin-vue_export-helper-68b6f5d3.js";
import { N as NGrid, a as NGridItem } from "./Grid-d10f9474.js";
import { b as NImage } from "./Image-15fff38a.js";
import "../app.config.js";
import "./CMarkdown-293ad8fa.js";
import "./VResizeObserver-bba63b1a.js";
import "./fade-in-scale-up.cssr-36221e4e.js";
const _hoisted_1 = { class: "text-2xl font-bold align-middle" };
const _hoisted_2 = ["href"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PPhotoDetails",
  props: {
    id: {}
  },
  setup(__props) {
    const props = __props;
    const photo = ref(null);
    const pState = watchLoading({
      state: "loading",
      fail: "文章查询失败!"
    });
    async function queryPhoto() {
      pState.value = "loading";
      const [err, data] = await to(issueApi.qIssueById(props.id));
      if (err || data == null) {
        pState.value = "fail";
        return;
      }
      photo.value = { ...data, images: gImages(data.body) };
      pState.value = "success";
      updateTitle({ after: photo.value.title });
    }
    queryPhoto();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$3), { state: unref(pState) }, {
        fail: withCtx(() => [
          createVNode(unref(NCard), {
            size: "small",
            bordered: false
          }, {
            default: withCtx(() => [
              createBaseVNode("button", {
                class: "p-2 w-full font-bold",
                onClick: queryPhoto
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
                      createBaseVNode("p", _hoisted_1, toDisplayString(photo.value.title), 1),
                      createVNode(unref(NSpace), null, {
                        default: withCtx(() => [
                          createBaseVNode("a", {
                            target: "_blank",
                            href: photo.value.user.html_url
                          }, [
                            createBaseVNode("span", null, toDisplayString(photo.value.user.login), 1)
                          ], 8, _hoisted_2),
                          createBaseVNode("span", null, [
                            createVNode(unref(NTime), {
                              time: new Date(photo.value.created_at)
                            }, null, 8, ["time"])
                          ]),
                          createBaseVNode("span", null, [
                            createVNode(unref(NTime), {
                              time: new Date(photo.value.updated_at),
                              type: "relative"
                            }, null, 8, ["time"]),
                            createTextVNode("更新 ")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NSpace), { align: "center" }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(removeFuncLabels)(photo.value.labels), (label) => {
                            return openBlock(), createBlock(_sfc_main$4, {
                              key: label.id,
                              "hidden-des": true,
                              onClick: ($event) => _ctx.$router.push({ path: "/", query: { label: label.name } }),
                              label,
                              class: "font-bold"
                            }, null, 8, ["onClick", "label"]);
                          }), 128)),
                          createVNode(_sfc_main$1, {
                            reactions: photo.value.reactions
                          }, null, 8, ["reactions"])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NGrid), {
                        cols: "1 s:2 m:3 l:4 xl:5 2xl:6",
                        responsive: "screen",
                        "x-gap": 8
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(photo.value.images, (img) => {
                            return openBlock(), createBlock(unref(NGridItem), {
                              key: img.src
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(NImage), {
                                  class: "rounded-md",
                                  src: img.src,
                                  alt: img.alt
                                }, null, 8, ["src", "alt"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_sfc_main$2, {
                issue: photo.value,
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
