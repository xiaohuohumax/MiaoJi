import { d as defineComponent, y as openBlock, B as createBlock, A as withCtx, E as createBaseVNode, F as toDisplayString, G as unref } from "./index-7a7392d0.js";
import { N as NCard } from "./Card-755bbea7.js";
const _hoisted_1 = { class: "font-bold text-lg" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CSubTitle",
  props: {
    context: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(NCard), {
        size: "small",
        bordered: false
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, toDisplayString(_ctx.context), 1)
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as _
};
