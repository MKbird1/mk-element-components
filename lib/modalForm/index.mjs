import { defineComponent as c, ref as s, watch as a, resolveComponent as p, openBlock as v, createElementBlock as b, normalizeClass as g, createVNode as d, mergeProps as y, withCtx as r, renderSlot as i } from "vue";
const O = c({
  components: {},
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      required: !0
    },
    isScroll: {
      type: Boolean,
      default: !0
    },
    onChange: {
      type: Function
    },
    beforeUpload: {
      type: Function
    },
    onPreview: {
      type: Function
    },
    onRemove: {
      type: Function
    },
    beforeRemove: {
      type: Function
    },
    onSuccess: {
      type: Function
    },
    onExceed: {
      type: Function
    }
  },
  emits: ["update:visible"],
  setup(e, n) {
    let o = s(e.visible);
    a(
      () => e.visible,
      (t) => {
        o.value = t;
      }
    ), a(
      () => o.value,
      (t) => {
        n.emit("update:visible", t);
      }
    );
    let l = s();
    return { dialogVisible: o, form: l };
  }
}), h = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [l, t] of n)
    o[l] = t;
  return o;
};
function B(e, n, o, l, t, F) {
  const m = p("mk-form"), u = p("el-dialog");
  return v(), b("div", {
    class: g({ "m-choose-icon-dialog-body-height": e.isScroll })
  }, [
    d(u, y({
      modelValue: e.dialogVisible,
      "onUpdate:modelValue": n[0] || (n[0] = (f) => e.dialogVisible = f)
    }, e.$attrs), {
      default: r(() => [
        d(m, {
          "label-width": "100px",
          ref: "form",
          options: e.options,
          onOnChange: e.onChange,
          onBeforeUpload: e.beforeUpload,
          onOnPreview: e.onPreview,
          onOnRemove: e.onRemove,
          onBeforeRemove: e.beforeRemove,
          onOnSuccess: e.onSuccess,
          onOnExceed: e.onExceed
        }, {
          uploadArea: r(() => [
            i(e.$slots, "uploadArea")
          ]),
          uploadTip: r(() => [
            i(e.$slots, "uploadTip")
          ]),
          _: 3
        }, 8, ["options", "onOnChange", "onBeforeUpload", "onOnPreview", "onOnRemove", "onBeforeRemove", "onOnSuccess", "onOnExceed"])
      ]),
      footer: r(() => [
        i(e.$slots, "footer", { form: e.form })
      ]),
      _: 3
    }, 16, ["modelValue"])
  ], 2);
}
const C = /* @__PURE__ */ h(O, [["render", B]]), $ = {
  install(e) {
    e.component("mk-modal-form", C);
  }
};
export {
  $ as default
};
