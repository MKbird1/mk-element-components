import { inject as H, defineComponent as M, ref as j, computed as q, resolveComponent as t, openBlock as o, createElementBlock as u, createVNode as d, withCtx as l, mergeProps as I, createBlock as r, createCommentVNode as m, Fragment as _, renderList as b, resolveDynamicComponent as f, createElementVNode as y, toDisplayString as v } from "vue";
/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
var E;
(function(e) {
  e.pop = "pop", e.push = "push";
})(E || (E = {}));
var S;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(S || (S = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var g;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(g || (g = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
const K = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function P() {
  return H(K);
}
const R = M({
  components: {},
  props: {
    minHeight: {
      type: Number
    },
    menuList: {
      type: Array,
      required: !0
    },
    useCollapse: {
      type: Boolean,
      default: !0
    },
    defaultActive: {
      type: String
    },
    router: {
      type: Boolean,
      default: !0
    },
    name: {
      type: String,
      default: "name"
    },
    icon: {
      type: String,
      default: "icon"
    },
    index: {
      type: String,
      default: "index"
    },
    children: {
      type: String,
      default: "children"
    }
  },
  setup(e, c) {
    const s = j(!1), a = () => {
      s.value = !s.value;
    }, i = P(), h = q(() => i.matched[0].path);
    return { isCollapse: s, clickButton: a, routers: h };
  }
});
const z = (e, c) => {
  const s = e.__vccOpts || e;
  for (const [a, i] of c)
    s[a] = i;
  return s;
}, G = { class: "eleMain" }, J = { class: "name" }, Q = { class: "name" }, U = { class: "name" };
function W(e, c, s, a, i, h) {
  const C = t("el-icon-fold"), N = t("el-icon-expand"), k = t("el-menu-item"), w = t("el-sub-menu"), $ = t("el-menu"), V = t("el-aside"), B = t("router-view"), D = t("el-main"), O = t("el-container");
  return o(), u("div", G, [
    d(O, null, {
      default: l(() => [
        d(V, { width: "auto" }, {
          default: l(() => [
            d($, I({
              "default-active": `${e.defaultActive}`,
              class: "el-menu-vertical-demo",
              collapse: e.isCollapse,
              router: e.router,
              style: `min-height: ${e.minHeight}px`
            }, e.$attrs), {
              default: l(() => [
                e.useCollapse ? (o(), u("div", {
                  key: 0,
                  class: "fold",
                  onClick: c[0] || (c[0] = (...n) => e.clickButton && e.clickButton(...n))
                }, [
                  e.isCollapse ? (o(), r(N, { key: 1 })) : (o(), r(C, { key: 0 }))
                ])) : m("", !0),
                (o(!0), u(_, null, b(e.menuList, (n, L) => (o(), u(_, { key: L }, [
                  !n[e.children] || !n[e.children].length ? (o(), r(k, {
                    key: 0,
                    index: `${n[e.index]}`
                  }, {
                    default: l(() => [
                      (o(), r(f(n[e.icon]))),
                      y("span", J, v(n[e.name]), 1)
                    ]),
                    _: 2
                  }, 1032, ["index"])) : m("", !0),
                  n[e.children] && n[e.children].length ? (o(), r(w, {
                    key: 1,
                    index: `${n[e.index]}`
                  }, {
                    title: l(() => [
                      (o(), r(f(n[e.icon]))),
                      y("span", Q, v(n[e.name]), 1)
                    ]),
                    default: l(() => [
                      (o(!0), u(_, null, b(n[e.children], (p, A) => (o(), r(k, {
                        key: A,
                        index: `${p[e.index]}`
                      }, {
                        default: l(() => [
                          (o(), r(f(p[e.icon]))),
                          y("span", U, v(p[e.name]), 1)
                        ]),
                        _: 2
                      }, 1032, ["index"]))), 128))
                    ]),
                    _: 2
                  }, 1032, ["index"])) : m("", !0)
                ], 64))), 128))
              ]),
              _: 1
            }, 16, ["default-active", "collapse", "router", "style"])
          ]),
          _: 1
        }),
        d(D, null, {
          default: l(() => [
            d(B)
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const X = /* @__PURE__ */ z(R, [["render", W], ["__scopeId", "data-v-edd2c61b"]]), Z = {
  install(e) {
    e.component("mk-menu", X);
  }
};
export {
  Z as default
};
