import { defineComponent as s, ref as c, onMounted as l, resolveComponent as p, openBlock as i, createBlock as u, mergeProps as m } from "vue";
const f = s({
  components: {},
  props: {
    percentage: {
      type: Number,
      required: !0
    },
    isAnimate: {
      type: Boolean,
      default: !1
    },
    time: {
      type: Number,
      default: 3e3
    }
  },
  setup(e) {
    let t = c(0);
    return l(() => {
      if (e.isAnimate) {
        let n = Math.ceil(e.time / e.percentage), r = setInterval(() => {
          t.value += 1, t.value >= e.percentage && (t.value = e.percentage, clearInterval(r));
        }, n);
      }
    }), { p: t };
  }
}), g = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function _(e, t, n, r, o, v) {
  const a = p("el-progress");
  return i(), u(a, m({ percentage: e.p }, e.$attrs), null, 16, ["percentage"]);
}
const d = /* @__PURE__ */ g(f, [["render", _]]), k = {
  install(e) {
    e.component("mk-progress", d);
  }
};
export {
  k as default
};
