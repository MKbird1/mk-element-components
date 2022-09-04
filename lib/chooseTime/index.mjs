import { defineComponent as f, ref as s, watch as o, resolveComponent as T, openBlock as g, createElementBlock as S, createElementVNode as m, createVNode as p, mergeProps as u } from "vue";
const h = f({
  components: {},
  props: {
    startPlaceholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4"
    },
    endPlaceholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4"
    },
    startTimeStart: {
      type: String,
      default: "08:00"
    },
    startStep: {
      type: String,
      default: "00:30"
    },
    startTimeEnd: {
      type: String,
      default: "24:00"
    },
    endTimeStart: {
      type: String,
      default: "08:00"
    },
    endStep: {
      type: String,
      default: "00:30"
    },
    endTimeEnd: {
      type: String,
      default: "24:00"
    }
  },
  emits: ["startChange", "endChange"],
  setup(e, t) {
    let n = s(""), a = s(""), l = s(!0);
    return o(
      () => n.value,
      (r) => {
        r === "" ? (a.value = "", l.value = !0) : (l.value = !1, t.emit("startChange", r));
      }
    ), o(
      () => a.value,
      (r) => {
        r !== "" && t.emit("endChange", {
          startTime: n.value,
          endTime: r
        });
      }
    ), { startTime: n, endTime: a, endTimeDisabled: l };
  }
}), c = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t)
    n[a] = l;
  return n;
}, y = { style: { display: "flex" } }, v = { style: { "margin-right": "20px" } };
function E(e, t, n, a, l, r) {
  const i = T("el-time-select");
  return g(), S("div", y, [
    m("div", v, [
      p(i, u({
        modelValue: e.startTime,
        "onUpdate:modelValue": t[0] || (t[0] = (d) => e.startTime = d),
        placeholder: e.startPlaceholder,
        start: e.startTimeStart,
        step: e.startStep,
        end: e.startTimeEnd
      }, e.$attrs.startOptions), null, 16, ["modelValue", "placeholder", "start", "step", "end"])
    ]),
    m("div", null, [
      p(i, u({
        modelValue: e.endTime,
        "onUpdate:modelValue": t[1] || (t[1] = (d) => e.endTime = d),
        "min-time": e.startTime,
        placeholder: e.endPlaceholder,
        start: e.endTimeStart,
        step: e.endStep,
        end: e.endTimeEnd,
        disabled: e.endTimeDisabled
      }, e.$attrs.endOptions), null, 16, ["modelValue", "min-time", "placeholder", "start", "step", "end", "disabled"])
    ])
  ]);
}
const F = /* @__PURE__ */ c(h, [["render", E]]), C = {
  install(e) {
    e.component("mk-choose-time", F);
  }
};
export {
  C as default
};
