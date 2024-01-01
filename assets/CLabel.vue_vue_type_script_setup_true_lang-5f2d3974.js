import { d as defineComponent, y as openBlock, z as createElementBlock, E as createBaseVNode, aa as normalizeStyle, H as createTextVNode, F as toDisplayString } from "./index-2ff28f77.js";
const _hoisted_1 = { class: "p-1 text-left text-wrap max-w-full cursor-pointer hover:scale-105 duration-100" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CLabel",
  props: {
    label: {},
    hiddenDes: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("span", {
          class: "inline-block p-1 rounded-full shadow-md",
          style: normalizeStyle({
            backgroundColor: "#" + _ctx.label.color
          })
        }, null, 4),
        createTextVNode(" " + toDisplayString(_ctx.label.name) + toDisplayString(_ctx.hiddenDes ? "" : `(${_ctx.label.description})`), 1)
      ]);
    };
  }
});
export {
  _sfc_main as _
};
