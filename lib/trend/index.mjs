import { defineComponent as u, useSlots as i, computed as y, openBlock as n, createElementBlock as s, createElementVNode as c, normalizeStyle as l, renderSlot as f, toDisplayString as _, createBlock as p, resolveDynamicComponent as a } from "vue";
const g = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [r, d] of o)
    t[r] = d;
  return t;
}, m = u({
  props: {
    type: {
      type: String,
      default: "up"
    },
    upIcon: {
      type: String,
      default: "el-icon-arrowup"
    },
    downIcon: {
      type: String,
      default: "el-icon-arrowdown"
    },
    text: {
      type: String,
      default: "\u6587\u5B57"
    },
    upIconColor: {
      type: String,
      default: "#f5222d"
    },
    downIconColor: {
      type: String,
      default: "#52c41a"
    },
    upTextColor: {
      type: String,
      default: "rgb(0,0,0)"
    },
    downTextColor: {
      type: String,
      default: "rgb(0,0,0)"
    }
  },
  setup(e) {
    let o = i(), t = y(() => e.type === "up" ? e.upTextColor : e.downTextColor);
    return {
      slots: o,
      textColor: t
    };
  }
}), C = { class: "trend" }, S = { key: 1 }, v = { class: "icon" };
function k(e, o, t, r, d, I) {
  return n(), s("div", C, [
    c("div", {
      class: "text",
      style: l({ color: e.textColor })
    }, [
      e.slots.default ? f(e.$slots, "default", { key: 0 }, void 0, !0) : (n(), s("div", S, _(e.text), 1))
    ], 4),
    c("div", v, [
      e.type === "up" ? (n(), p(a(`${e.upIcon}`), {
        key: 0,
        style: l({ color: e.upIconColor })
      }, null, 8, ["style"])) : (n(), p(a(`${e.downIcon}`), {
        key: 1,
        style: l({ color: e.downIconColor })
      }, null, 8, ["style"]))
    ])
  ]);
}
const w = /* @__PURE__ */ g(m, [["render", k], ["__scopeId", "data-v-4753d9da"]]), x = {
  install(e) {
    e.component("mk-trend", w);
  }
};
export {
  x as default
};
