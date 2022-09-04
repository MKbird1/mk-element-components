import { defineComponent as m, ref as s, watch as u, resolveComponent as c, openBlock as f, createElementBlock as h, createElementVNode as i, createVNode as p, mergeProps as D } from "vue";
const b = m({
  components: {},
  props: {
    startPlaceholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9\u5F00\u59CB\u65E5\u671F"
    },
    endPlaceholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9\u7ED3\u675F\u65E5\u671F"
    },
    disableToday: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["startChange", "endChange"],
  setup(e, a) {
    let l = s(null), d = s(null), n = s(!0), r = (t) => {
      if (e.disableToday)
        return t.getTime() < Date.now() - 1e3 * 60 * 60 * 24;
    }, o = (t) => {
      if (l.value)
        return t.getTime() < l.value.getTime() + 1e3 * 60 * 60 * 24;
    };
    return u(
      () => l.value,
      (t) => {
        t ? (a.emit("startChange", t), n.value = !1) : (n.value = !0, d.value = null);
      }
    ), u(
      () => d.value,
      (t) => {
        t && a.emit("endChange", {
          startDate: l.value,
          endDate: t
        });
      }
    ), {
      startDisabledDate: r,
      endDisabledDate: o,
      startDate: l,
      endDate: d,
      endDateDisabled: n
    };
  }
}), g = (e, a) => {
  const l = e.__vccOpts || e;
  for (const [d, n] of a)
    l[d] = n;
  return l;
}, v = { style: { display: "flex" } }, y = { style: { "margin-right": "20px" } };
function V(e, a, l, d, n, r) {
  const o = c("el-date-picker");
  return f(), h("div", v, [
    i("div", y, [
      p(o, D({
        modelValue: e.startDate,
        "onUpdate:modelValue": a[0] || (a[0] = (t) => e.startDate = t),
        type: "date",
        placeholder: e.startPlaceholder,
        disabledDate: e.startDisabledDate
      }, e.$attrs.startOptions), null, 16, ["modelValue", "placeholder", "disabledDate"])
    ]),
    i("div", null, [
      p(o, D({
        modelValue: e.endDate,
        "onUpdate:modelValue": a[1] || (a[1] = (t) => e.endDate = t),
        type: "date",
        placeholder: e.endPlaceholder,
        disabled: e.endDateDisabled,
        disabledDate: e.endDisabledDate
      }, e.$attrs.endOptions), null, 16, ["modelValue", "placeholder", "disabled", "disabledDate"])
    ])
  ]);
}
const C = /* @__PURE__ */ g(b, [["render", V]]), k = {
  install(e) {
    e.component("mk-choose-date", C);
  }
};
export {
  k as default
};
