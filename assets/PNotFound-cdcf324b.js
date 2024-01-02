import { d as defineComponent, B as createBlock, A as withCtx, G as unref, y as openBlock, E as createBaseVNode } from "./index-1df43889.js";
import { N as NCard } from "./Card-da1fd150.js";
import "../app.config.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "font-bold text-center" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "text-2xl" }, " 404 Not Found "),
  /* @__PURE__ */ createBaseVNode("p", null, "这里啥也没有~~")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PNotFound",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(NCard), {
        size: "small",
        bordered: false
      }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
