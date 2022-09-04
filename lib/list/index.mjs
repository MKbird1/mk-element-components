import { defineComponent as N, resolveComponent as i, openBlock as t, createElementBlock as o, createVNode as m, withCtx as p, Fragment as v, renderList as y, createBlock as h, createCommentVNode as l, createElementVNode as u, toDisplayString as r, createTextVNode as V, normalizeClass as z, resolveDynamicComponent as B } from "vue";
const D = N({
  components: {},
  props: {
    list: {
      type: Array,
      required: !0
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  emits: ["clickItem", "clickAction"],
  setup(s, a) {
    return {
      clickItem: (c, d) => {
        a.emit("clickItem", { item: c, index: d });
      },
      clickAction: (c, d) => {
        a.emit("clickAction", { item: c, index: d });
      }
    };
  }
});
const E = (s, a) => {
  const _ = s.__vccOpts || s;
  for (const [k, c] of a)
    _[k] = c;
  return _;
}, L = { class: "list-tabs__item" }, T = ["onClick"], q = {
  key: 0,
  class: "avatar"
}, w = { class: "content" }, F = {
  key: 0,
  class: "title"
}, O = {
  key: 1,
  class: "time"
}, S = {
  key: 2,
  class: "time"
}, j = { class: "actions" }, G = ["onClick"], H = {
  key: 0,
  class: "a-icon"
}, J = { class: "a-text" };
function K(s, a, _, k, c, d) {
  const b = i("el-avatar"), g = i("el-tag"), C = i("el-scrollbar"), A = i("el-tab-pane"), $ = i("el-tabs");
  return t(), o("div", L, [
    m($, null, {
      default: p(() => [
        (t(!0), o(v, null, y(s.list, (f, I) => (t(), h(A, {
          key: I,
          label: f.title
        }, {
          default: p(() => [
            m(C, { "max-height": "300px" }, {
              default: p(() => [
                (t(!0), o(v, null, y(f.content, (e, n) => (t(), o("div", {
                  class: "container",
                  onClick: (x) => s.clickItem(e, n),
                  key: n
                }, [
                  e.avatar ? (t(), o("div", q, [
                    m(b, {
                      size: "small",
                      src: e.avatar
                    }, null, 8, ["src"])
                  ])) : l("", !0),
                  u("div", w, [
                    e.title ? (t(), o("div", F, [
                      u("div", null, r(e.title), 1),
                      e.tag ? (t(), h(g, {
                        key: 0,
                        size: "small",
                        type: e.tagType
                      }, {
                        default: p(() => [
                          V(r(e.tag), 1)
                        ]),
                        _: 2
                      }, 1032, ["type"])) : l("", !0)
                    ])) : l("", !0),
                    e.desc ? (t(), o("div", O, r(e.desc), 1)) : l("", !0),
                    e.time ? (t(), o("div", S, r(e.time), 1)) : l("", !0)
                  ])
                ], 8, T))), 128)),
                u("div", j, [
                  (t(!0), o(v, null, y(s.actions, (e, n) => (t(), o("div", {
                    class: z(["a-item", { border: n !== s.actions.length }]),
                    key: n,
                    onClick: (x) => s.clickAction(e, n)
                  }, [
                    e.icon ? (t(), o("div", H, [
                      (t(), h(B(`${e.icon}`)))
                    ])) : l("", !0),
                    u("div", J, r(e.text), 1)
                  ], 10, G))), 128))
                ])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1032, ["label"]))), 128))
      ]),
      _: 1
    })
  ]);
}
const M = /* @__PURE__ */ E(D, [["render", K], ["__scopeId", "data-v-1b1966d4"]]), Q = {
  install(s) {
    s.component("mk-list", M);
  }
};
export {
  Q as default
};
