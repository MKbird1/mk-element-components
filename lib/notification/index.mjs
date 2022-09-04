import { defineComponent as d, resolveComponent as c, openBlock as r, createBlock as s, withCtx as t, renderSlot as _, createVNode as u, resolveDynamicComponent as f } from "vue";
const m = d({
  props: {
    icon: {
      type: String,
      default: "el-icon-bell"
    },
    value: {
      type: [String, Number],
      default: ""
    },
    max: {
      type: Number
    },
    isDot: {
      type: Boolean,
      default: !1
    }
  },
  components: {},
  setup(e) {
  }
});
const v = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [a, p] of n)
    o[a] = p;
  return o;
};
function y(e, n, o, a, p, b) {
  const i = c("el-badge"), l = c("el-popover");
  return r(), s(l, {
    "popper-class": "notification-popper-class",
    placement: "bottom",
    width: 300,
    trigger: "click"
  }, {
    default: t(() => [
      _(e.$slots, "default", {}, void 0, !0)
    ]),
    reference: t(() => [
      u(i, {
        style: { cursor: "pointer" },
        value: e.value,
        max: e.max,
        "is-dot": e.isDot
      }, {
        default: t(() => [
          (r(), s(f(`${e.icon}`)))
        ]),
        _: 1
      }, 8, ["value", "max", "is-dot"])
    ]),
    _: 3
  });
}
const g = /* @__PURE__ */ v(m, [["render", y], ["__scopeId", "data-v-9c769e93"]]), k = {
  install(e) {
    e.component("mk-notification", g);
  }
};
export {
  k as default
};
