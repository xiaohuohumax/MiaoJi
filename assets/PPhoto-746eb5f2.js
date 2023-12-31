import { d as defineComponent, r as ref, B as createBlock, A as withCtx, G as unref, ah as to, ai as issueApi, am as gImages, y as openBlock, v as createVNode, z as createElementBlock, M as renderList, L as Fragment, D as createCommentVNode, E as createBaseVNode, H as createTextVNode, F as toDisplayString } from "./index-766f9230.js";
import { _ as _sfc_main$1 } from "./CSubTitle.vue_vue_type_script_setup_true_lang-ad70fd5e.js";
import { w as watchLoading, N as NButton, C as COver, _ as _sfc_main$2 } from "./COver-cf9908d9.js";
import { N as NTime, _ as _sfc_main$3 } from "./CReactions.vue_vue_type_script_setup_true_lang-bce368a9.js";
import { a as appConfig } from "../app.config.js";
import { N as NGrid, a as NGridItem } from "./Grid-dc23a54d.js";
import { N as NSpace } from "./_plugin-vue_export-helper-76661c52.js";
import { N as NCard } from "./Card-9e30a367.js";
import "./VResizeObserver-dc842312.js";
const _hoisted_1 = ["src", "alt"];
const _hoisted_2 = { class: "text-lg mt-2 group-hover:text-green-300" };
const _hoisted_3 = { class: "text-center" };
const _hoisted_4 = {
  key: 1,
  class: "text-center"
};
const perPage = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PPhoto",
  setup(__props) {
    let page = 1;
    const photos = ref([]);
    const pState = watchLoading({
      state: "loading",
      fail: "相册查询失败!"
    });
    const isOver = ref(false);
    async function queryPhotos(page2) {
      pState.value = "loading";
      const [err, data] = await to(issueApi.qIssuePage({
        labels: appConfig.label.photoLabel,
        state: "all",
        page: page2.toString(),
        per_page: perPage.toString()
      }));
      if (err) {
        pState.value = "fail";
        return;
      }
      if (data.length == 0 || data.length < perPage) {
        isOver.value = true;
      }
      const p = data.map((d) => ({ ...d, images: gImages(d.body) }));
      photos.value.push(...p);
      pState.value = "success";
    }
    queryPhotos(page);
    function nextPage() {
      const oldSize = photos.value.length;
      const nPage = page + 1;
      queryPhotos(nPage).then(() => {
        if (oldSize != photos.value.length) {
          page += nPage;
        }
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(NSpace), { vertical: "" }, {
        default: withCtx(() => [
          createVNode(_sfc_main$1, { context: "相册" }),
          photos.value.length > 0 ? (openBlock(), createBlock(unref(NGrid), {
            key: 0,
            cols: "1 s:2 m:3 l:4 xl:5 2xl:6",
            responsive: "screen",
            "x-gap": 8,
            "y-gap": 8
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(photos.value, (photo) => {
                return openBlock(), createBlock(unref(NGridItem), {
                  class: "group cursor-pointer",
                  key: photo.number,
                  onClick: ($event) => _ctx.$router.push("/photo/" + photo.number)
                }, {
                  default: withCtx(() => [
                    createVNode(unref(NCard), {
                      size: "small",
                      bordered: false
                    }, {
                      default: withCtx(() => {
                        var _a, _b;
                        return [
                          createBaseVNode("img", {
                            class: "object-cover rounded-md",
                            src: (_a = photo.images[0]) == null ? void 0 : _a.src,
                            alt: (_b = photo.images[0]) == null ? void 0 : _b.alt
                          }, null, 8, _hoisted_1),
                          createVNode(unref(NSpace), { vertical: "" }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_2, toDisplayString(photo.title), 1),
                              createBaseVNode("div", null, [
                                createVNode(unref(NTime), {
                                  time: new Date(photo.updated_at),
                                  type: "relative"
                                }, null, 8, ["time"]),
                                createTextVNode("更新 ")
                              ]),
                              createVNode(_sfc_main$3, {
                                reactions: photo.reactions
                              }, null, 8, ["reactions"])
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["onClick"]);
              }), 128))
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_sfc_main$2, { state: unref(pState) }, {
            fail: withCtx(() => [
              createBaseVNode("div", _hoisted_3, [
                createVNode(unref(NButton), { onClick: nextPage }, {
                  default: withCtx(() => [
                    createTextVNode(" 重试 ")
                  ]),
                  _: 1
                })
              ])
            ]),
            default: withCtx(() => [
              isOver.value ? (openBlock(), createBlock(COver, { key: 0 })) : (openBlock(), createElementBlock("div", _hoisted_4, [
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
