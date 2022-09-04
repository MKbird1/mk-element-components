import { defineComponent as Ki, ref as Ji, watch as Qi, onMounted as ea, openBlock as ta, createElementBlock as ra } from "vue";
var At = function(t, e) {
  return At = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, At(t, e);
};
function R(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  At(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var h = function() {
  return h = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, h.apply(this, arguments);
};
function A(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, a; n < i; n++)
      (a || !(n in e)) && (a || (a = Array.prototype.slice.call(e, 0, n)), a[n] = e[n]);
  return t.concat(a || Array.prototype.slice.call(e));
}
var lt, w, Dn, Te, Sr, Cn, Xe = {}, Rn = [], na = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function K(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function wn(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ee(t, e, r) {
  var n, i, a, o = {};
  for (a in e)
    a == "key" ? n = e[a] : a == "ref" ? i = e[a] : o[a] = e[a];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? lt.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null)
    for (a in t.defaultProps)
      o[a] === void 0 && (o[a] = t.defaultProps[a]);
  return qe(t, o, n, i, null);
}
function qe(t, e, r, n, i) {
  var a = { type: t, props: e, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++Dn : i };
  return i == null && w.vnode != null && w.vnode(a), a;
}
function ia() {
  return { current: null };
}
function se(t) {
  return t.children;
}
function q(t, e) {
  this.props = t, this.context = e;
}
function me(t, e) {
  if (e == null)
    return t.__ ? me(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var r; e < t.__k.length; e++)
    if ((r = t.__k[e]) != null && r.__e != null)
      return r.__e;
  return typeof t.type == "function" ? me(t) : null;
}
function Tn(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((r = t.__k[e]) != null && r.__e != null) {
        t.__e = t.__c.base = r.__e;
        break;
      }
    return Tn(t);
  }
}
function Nt(t) {
  (!t.__d && (t.__d = !0) && Te.push(t) && !$e.__r++ || Sr !== w.debounceRendering) && ((Sr = w.debounceRendering) || setTimeout)($e);
}
function $e() {
  for (var t; $e.__r = Te.length; )
    t = Te.sort(function(e, r) {
      return e.__v.__b - r.__v.__b;
    }), Te = [], t.some(function(e) {
      var r, n, i, a, o, s;
      e.__d && (o = (a = (r = e).__v).__e, (s = r.__P) && (n = [], (i = K({}, a)).__v = a.__v + 1, jt(s, a, i, r.__n, s.ownerSVGElement !== void 0, a.__h != null ? [o] : null, n, o == null ? me(a) : o, a.__h), In(n, a), a.__e != o && Tn(a)));
    });
}
function _n(t, e, r, n, i, a, o, s, l, u) {
  var c, f, d, v, p, E, S, g = n && n.__k || Rn, b = g.length;
  for (r.__k = [], c = 0; c < e.length; c++)
    if ((v = r.__k[c] = (v = e[c]) == null || typeof v == "boolean" ? null : typeof v == "string" || typeof v == "number" || typeof v == "bigint" ? qe(null, v, null, null, v) : Array.isArray(v) ? qe(se, { children: v }, null, null, null) : v.__b > 0 ? qe(v.type, v.props, v.key, null, v.__v) : v) != null) {
      if (v.__ = r, v.__b = r.__b + 1, (d = g[c]) === null || d && v.key == d.key && v.type === d.type)
        g[c] = void 0;
      else
        for (f = 0; f < b; f++) {
          if ((d = g[f]) && v.key == d.key && v.type === d.type) {
            g[f] = void 0;
            break;
          }
          d = null;
        }
      jt(t, v, d = d || Xe, i, a, o, s, l, u), p = v.__e, (f = v.ref) && d.ref != f && (S || (S = []), d.ref && S.push(d.ref, null, v), S.push(f, v.__c || p, v)), p != null ? (E == null && (E = p), typeof v.type == "function" && v.__k === d.__k ? v.__d = l = Mn(v, l, t) : l = kn(t, v, d, g, p, l), typeof r.type == "function" && (r.__d = l)) : l && d.__e == l && l.parentNode != t && (l = me(d));
    }
  for (r.__e = E, c = b; c--; )
    g[c] != null && (typeof r.type == "function" && g[c].__e != null && g[c].__e == r.__d && (r.__d = me(n, c + 1)), Hn(g[c], g[c]));
  if (S)
    for (c = 0; c < S.length; c++)
      Pn(S[c], S[++c], S[++c]);
}
function Mn(t, e, r) {
  for (var n, i = t.__k, a = 0; i && a < i.length; a++)
    (n = i[a]) && (n.__ = t, e = typeof n.type == "function" ? Mn(n, e, r) : kn(r, n, n, i, n.__e, e));
  return e;
}
function Ke(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(r) {
    Ke(r, e);
  }) : e.push(t)), e;
}
function kn(t, e, r, n, i, a) {
  var o, s, l;
  if (e.__d !== void 0)
    o = e.__d, e.__d = void 0;
  else if (r == null || i != a || i.parentNode == null)
    e:
      if (a == null || a.parentNode !== t)
        t.appendChild(i), o = null;
      else {
        for (s = a, l = 0; (s = s.nextSibling) && l < n.length; l += 2)
          if (s == i)
            break e;
        t.insertBefore(i, a), o = a;
      }
  return o !== void 0 ? o : i.nextSibling;
}
function aa(t, e, r, n, i) {
  var a;
  for (a in r)
    a === "children" || a === "key" || a in e || Je(t, a, null, r[a], n);
  for (a in e)
    i && typeof e[a] != "function" || a === "children" || a === "key" || a === "value" || a === "checked" || r[a] === e[a] || Je(t, a, e[a], r[a], n);
}
function br(t, e, r) {
  e[0] === "-" ? t.setProperty(e, r) : t[e] = r == null ? "" : typeof r != "number" || na.test(e) ? r : r + "px";
}
function Je(t, e, r, n, i) {
  var a;
  e:
    if (e === "style")
      if (typeof r == "string")
        t.style.cssText = r;
      else {
        if (typeof n == "string" && (t.style.cssText = n = ""), n)
          for (e in n)
            r && e in r || br(t.style, e, "");
        if (r)
          for (e in r)
            n && r[e] === n[e] || br(t.style, e, r[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      a = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + a] = r, r ? n || t.addEventListener(e, a ? Cr : Dr, a) : t.removeEventListener(e, a ? Cr : Dr, a);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = r == null ? "" : r;
          break e;
        } catch {
        }
      typeof r == "function" || (r != null && (r !== !1 || e[0] === "a" && e[1] === "r") ? t.setAttribute(e, r) : t.removeAttribute(e));
    }
}
function Dr(t) {
  this.l[t.type + !1](w.event ? w.event(t) : t);
}
function Cr(t) {
  this.l[t.type + !0](w.event ? w.event(t) : t);
}
function jt(t, e, r, n, i, a, o, s, l) {
  var u, c, f, d, v, p, E, S, g, b, D, C, k, T = e.type;
  if (e.constructor !== void 0)
    return null;
  r.__h != null && (l = r.__h, s = e.__e = r.__e, e.__h = null, a = [s]), (u = w.__b) && u(e);
  try {
    e:
      if (typeof T == "function") {
        if (S = e.props, g = (u = T.contextType) && n[u.__c], b = u ? g ? g.props.value : u.__ : n, r.__c ? E = (c = e.__c = r.__c).__ = c.__E : ("prototype" in T && T.prototype.render ? e.__c = c = new T(S, b) : (e.__c = c = new q(S, b), c.constructor = T, c.render = sa), g && g.sub(c), c.props = S, c.state || (c.state = {}), c.context = b, c.__n = n, f = c.__d = !0, c.__h = []), c.__s == null && (c.__s = c.state), T.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = K({}, c.__s)), K(c.__s, T.getDerivedStateFromProps(S, c.__s))), d = c.props, v = c.state, f)
          T.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (T.getDerivedStateFromProps == null && S !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(S, b), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(S, c.__s, b) === !1 || e.__v === r.__v) {
            c.props = S, c.state = c.__s, e.__v !== r.__v && (c.__d = !1), c.__v = e, e.__e = r.__e, e.__k = r.__k, e.__k.forEach(function(P) {
              P && (P.__ = e);
            }), c.__h.length && o.push(c);
            break e;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(S, c.__s, b), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(d, v, p);
          });
        }
        if (c.context = b, c.props = S, c.__v = e, c.__P = t, D = w.__r, C = 0, "prototype" in T && T.prototype.render)
          c.state = c.__s, c.__d = !1, D && D(e), u = c.render(c.props, c.state, c.context);
        else
          do
            c.__d = !1, D && D(e), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++C < 25);
        c.state = c.__s, c.getChildContext != null && (n = K(K({}, n), c.getChildContext())), f || c.getSnapshotBeforeUpdate == null || (p = c.getSnapshotBeforeUpdate(d, v)), k = u != null && u.type === se && u.key == null ? u.props.children : u, _n(t, Array.isArray(k) ? k : [k], e, r, n, i, a, o, s, l), c.base = e.__e, e.__h = null, c.__h.length && o.push(c), E && (c.__E = c.__ = null), c.__e = !1;
      } else
        a == null && e.__v === r.__v ? (e.__k = r.__k, e.__e = r.__e) : e.__e = oa(r.__e, e, r, n, i, a, o, l);
    (u = w.diffed) && u(e);
  } catch (P) {
    e.__v = null, (l || a != null) && (e.__e = s, e.__h = !!l, a[a.indexOf(s)] = null), w.__e(P, e, r);
  }
}
function In(t, e) {
  w.__c && w.__c(e, t), t.some(function(r) {
    try {
      t = r.__h, r.__h = [], t.some(function(n) {
        n.call(r);
      });
    } catch (n) {
      w.__e(n, r.__v);
    }
  });
}
function oa(t, e, r, n, i, a, o, s) {
  var l, u, c, f = r.props, d = e.props, v = e.type, p = 0;
  if (v === "svg" && (i = !0), a != null) {
    for (; p < a.length; p++)
      if ((l = a[p]) && "setAttribute" in l == !!v && (v ? l.localName === v : l.nodeType === 3)) {
        t = l, a[p] = null;
        break;
      }
  }
  if (t == null) {
    if (v === null)
      return document.createTextNode(d);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, d.is && d), a = null, s = !1;
  }
  if (v === null)
    f === d || s && t.data === d || (t.data = d);
  else {
    if (a = a && lt.call(t.childNodes), u = (f = r.props || Xe).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !s) {
      if (a != null)
        for (f = {}, p = 0; p < t.attributes.length; p++)
          f[t.attributes[p].name] = t.attributes[p].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === t.innerHTML) || (t.innerHTML = c && c.__html || ""));
    }
    if (aa(t, d, f, i, s), c)
      e.__k = [];
    else if (p = e.props.children, _n(t, Array.isArray(p) ? p : [p], e, r, n, i && v !== "foreignObject", a, o, a ? a[0] : r.__k && me(r, 0), s), a != null)
      for (p = a.length; p--; )
        a[p] != null && wn(a[p]);
    s || ("value" in d && (p = d.value) !== void 0 && (p !== t.value || v === "progress" && !p || v === "option" && p !== f.value) && Je(t, "value", p, f.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== t.checked && Je(t, "checked", p, f.checked, !1));
  }
  return t;
}
function Pn(t, e, r) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (n) {
    w.__e(n, r);
  }
}
function Hn(t, e, r) {
  var n, i;
  if (w.unmount && w.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || Pn(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (a) {
        w.__e(a, e);
      }
    n.base = n.__P = null;
  }
  if (n = t.__k)
    for (i = 0; i < n.length; i++)
      n[i] && Hn(n[i], e, typeof t.type != "function");
  r || t.__e == null || wn(t.__e), t.__e = t.__d = void 0;
}
function sa(t, e, r) {
  return this.constructor(t, r);
}
function He(t, e, r) {
  var n, i, a;
  w.__ && w.__(t, e), i = (n = typeof r == "function") ? null : r && r.__k || e.__k, a = [], jt(e, t = (!n && r || e).__k = ee(se, null, [t]), i || Xe, Xe, e.ownerSVGElement !== void 0, !n && r ? [r] : i ? null : e.firstChild ? lt.call(e.childNodes) : null, a, !n && r ? r : i ? i.__e : e.firstChild, n), In(a, t);
}
function la(t, e) {
  var r = { __c: e = "__cC" + Cn++, __: t, Consumer: function(n, i) {
    return n.children(i);
  }, Provider: function(n) {
    var i, a;
    return this.getChildContext || (i = [], (a = {})[e] = this, this.getChildContext = function() {
      return a;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value !== o.value && i.some(Nt);
    }, this.sub = function(o) {
      i.push(o);
      var s = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        i.splice(i.indexOf(o), 1), s && s.call(o);
      };
    }), n.children;
  } };
  return r.Provider.__ = r.Consumer.contextType = r;
}
lt = Rn.slice, w = { __e: function(t, e, r, n) {
  for (var i, a, o; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, n || {}), o = i.__d), o)
          return i.__E = i;
      } catch (s) {
        t = s;
      }
  throw t;
} }, Dn = 0, q.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = K({}, this.state), typeof t == "function" && (t = t(K({}, r), this.props)), t && K(r, t), t != null && this.__v && (e && this.__h.push(e), Nt(this));
}, q.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Nt(this));
}, q.prototype.render = se, Te = [], $e.__r = 0, Cn = 0;
var j, yt, Rr, xn = [], Et = [], wr = w.__b, Tr = w.__r, _r = w.diffed, Mr = w.__c, kr = w.unmount;
function ua() {
  for (var t; t = xn.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(Ye), t.__H.__h.forEach(Ot), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], w.__e(e, t.__v);
      }
}
w.__b = function(t) {
  j = null, wr && wr(t);
}, w.__r = function(t) {
  Tr && Tr(t);
  var e = (j = t.__c).__H;
  e && (yt === j ? (e.__h = [], j.__h = [], e.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = Et, r.__N = r.i = void 0;
  })) : (e.__h.forEach(Ye), e.__h.forEach(Ot), e.__h = [])), yt = j;
}, w.diffed = function(t) {
  _r && _r(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (xn.push(e) !== 1 && Rr === w.requestAnimationFrame || ((Rr = w.requestAnimationFrame) || function(r) {
    var n, i = function() {
      clearTimeout(a), Ir && cancelAnimationFrame(n), setTimeout(r);
    }, a = setTimeout(i, 100);
    Ir && (n = requestAnimationFrame(i));
  })(ua)), e.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== Et && (r.__ = r.__V), r.i = void 0, r.__V = Et;
  })), yt = j = null;
}, w.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.forEach(Ye), r.__h = r.__h.filter(function(n) {
        return !n.__ || Ot(n);
      });
    } catch (n) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], w.__e(n, r.__v);
    }
  }), Mr && Mr(t, e);
}, w.unmount = function(t) {
  kr && kr(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      Ye(n);
    } catch (i) {
      e = i;
    }
  }), e && w.__e(e, r.__v));
};
var Ir = typeof requestAnimationFrame == "function";
function Ye(t) {
  var e = j, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), j = e;
}
function Ot(t) {
  var e = j;
  t.__c = t.__(), j = e;
}
function ca(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function Pr(t, e) {
  for (var r in t)
    if (r !== "__source" && !(r in e))
      return !0;
  for (var n in e)
    if (n !== "__source" && t[n] !== e[n])
      return !0;
  return !1;
}
function Hr(t) {
  this.props = t;
}
(Hr.prototype = new q()).isPureReactComponent = !0, Hr.prototype.shouldComponentUpdate = function(t, e) {
  return Pr(this.props, t) || Pr(this.state, e);
};
var xr = w.__b;
w.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), xr && xr(t);
};
var fa = w.__e;
w.__e = function(t, e, r, n) {
  if (t.then) {
    for (var i, a = e; a = a.__; )
      if ((i = a.__c) && i.__c)
        return e.__e == null && (e.__e = r.__e, e.__k = r.__k), i.__c(t, e);
  }
  fa(t, e, r, n);
};
var Ar = w.unmount;
function St() {
  this.__u = 0, this.t = null, this.__b = null;
}
function An(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function We() {
  this.u = null, this.o = null;
}
w.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), Ar && Ar(t);
}, (St.prototype = new q()).__c = function(t, e) {
  var r = e.__c, n = this;
  n.t == null && (n.t = []), n.t.push(r);
  var i = An(n.__v), a = !1, o = function() {
    a || (a = !0, r.__R = null, i ? i(s) : s());
  };
  r.__R = o;
  var s = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var u = n.state.__a;
        n.__v.__k[0] = function f(d, v, p) {
          return d && (d.__v = null, d.__k = d.__k && d.__k.map(function(E) {
            return f(E, v, p);
          }), d.__c && d.__c.__P === v && (d.__e && p.insertBefore(d.__e, d.__d), d.__c.__e = !0, d.__c.__P = p)), d;
        }(u, u.__c.__P, u.__c.__O);
      }
      var c;
      for (n.setState({ __a: n.__b = null }); c = n.t.pop(); )
        c.forceUpdate();
    }
  }, l = e.__h === !0;
  n.__u++ || l || n.setState({ __a: n.__b = n.__v.__k[0] }), t.then(o, o);
}, St.prototype.componentWillUnmount = function() {
  this.t = [];
}, St.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = function a(o, s, l) {
        return o && (o.__c && o.__c.__H && (o.__c.__H.__.forEach(function(u) {
          typeof u.__c == "function" && u.__c();
        }), o.__c.__H = null), (o = ca({}, o)).__c != null && (o.__c.__P === l && (o.__c.__P = s), o.__c = null), o.__k = o.__k && o.__k.map(function(u) {
          return a(u, s, l);
        })), o;
      }(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var i = e.__a && ee(se, null, t.fallback);
  return i && (i.__h = null), [ee(se, null, e.__a ? null : t.children), i];
};
var Nr = function(t, e, r) {
  if (++r[1] === r[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
    for (r = t.u; r; ) {
      for (; r.length > 3; )
        r.pop()();
      if (r[1] < r[0])
        break;
      t.u = r = r[2];
    }
};
function da(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function va(t) {
  var e = this, r = t.i;
  e.componentWillUnmount = function() {
    He(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== r && e.componentWillUnmount(), t.__v ? (e.l || (e.i = r, e.l = { nodeType: 1, parentNode: r, childNodes: [], appendChild: function(n) {
    this.childNodes.push(n), e.i.appendChild(n);
  }, insertBefore: function(n, i) {
    this.childNodes.push(n), e.i.appendChild(n);
  }, removeChild: function(n) {
    this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.i.removeChild(n);
  } }), He(ee(da, { context: e.context }, t.__v), e.l)) : e.l && e.componentWillUnmount();
}
function pa(t, e) {
  var r = ee(va, { __v: t, i: e });
  return r.containerInfo = e, r;
}
(We.prototype = new q()).__a = function(t) {
  var e = this, r = An(e.__v), n = e.o.get(t);
  return n[0]++, function(i) {
    var a = function() {
      e.props.revealOrder ? (n.push(i), Nr(e, t, n)) : i();
    };
    r ? r(a) : a();
  };
}, We.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = Ke(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var r = e.length; r--; )
    this.o.set(e[r], this.u = [1, 0, this.u]);
  return t.children;
}, We.prototype.componentDidUpdate = We.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, r) {
    Nr(t, r, e);
  });
};
var ha = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, ga = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, ma = typeof document < "u", ya = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t);
};
q.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(q.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var Or = w.event;
function Ea() {
}
function Sa() {
  return this.cancelBubble;
}
function ba() {
  return this.defaultPrevented;
}
w.event = function(t) {
  return Or && (t = Or(t)), t.persist = Ea, t.isPropagationStopped = Sa, t.isDefaultPrevented = ba, t.nativeEvent = t;
};
var Lr = { configurable: !0, get: function() {
  return this.class;
} }, Vr = w.vnode;
w.vnode = function(t) {
  var e = t.type, r = t.props, n = r;
  if (typeof e == "string") {
    var i = e.indexOf("-") === -1;
    for (var a in n = {}, r) {
      var o = r[a];
      ma && a === "children" && e === "noscript" || a === "value" && "defaultValue" in r && o == null || (a === "defaultValue" && "value" in r && r.value == null ? a = "value" : a === "download" && o === !0 ? o = "" : /ondoubleclick/i.test(a) ? a = "ondblclick" : /^onchange(textarea|input)/i.test(a + e) && !ya(r.type) ? a = "oninput" : /^onfocus$/i.test(a) ? a = "onfocusin" : /^onblur$/i.test(a) ? a = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(a) ? a = a.toLowerCase() : i && ga.test(a) ? a = a.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : o === null && (o = void 0), /^oninput$/i.test(a) && (a = a.toLowerCase(), n[a] && (a = "oninputCapture")), n[a] = o);
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = Ke(r.children).forEach(function(s) {
      s.props.selected = n.value.indexOf(s.props.value) != -1;
    })), e == "select" && n.defaultValue != null && (n.value = Ke(r.children).forEach(function(s) {
      s.props.selected = n.multiple ? n.defaultValue.indexOf(s.props.value) != -1 : n.defaultValue == s.props.value;
    })), t.props = n, r.class != r.className && (Lr.enumerable = "className" in r, r.className != null && (n.class = r.className), Object.defineProperty(n, "className", Lr));
  }
  t.$$typeof = ha, Vr && Vr(t);
};
var Ur = w.__r;
w.__r = function(t) {
  Ur && Ur(t), t.__c;
};
var Wr = typeof globalThis < "u" ? globalThis : window;
Wr.FullCalendarVDom ? console.warn("FullCalendar VDOM already loaded") : Wr.FullCalendarVDom = {
  Component: q,
  createElement: ee,
  render: He,
  createRef: ia,
  Fragment: se,
  createContext: Ra,
  createPortal: pa,
  flushSync: Da,
  unmountComponentAtNode: wa
};
function Da(t) {
  t();
  var e = w.debounceRendering, r = [];
  function n(i) {
    r.push(i);
  }
  for (w.debounceRendering = n, He(ee(Ca, {}), document.createElement("div")); r.length; )
    r.shift()();
  w.debounceRendering = e;
}
var Ca = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.render = function() {
    return ee("div", {});
  }, e.prototype.componentDidMount = function() {
    this.setState({});
  }, e;
}(q);
function Ra(t) {
  var e = la(t), r = e.Provider;
  return e.Provider = function() {
    var n = this, i = !this.getChildContext, a = r.apply(this, arguments);
    if (i) {
      var o = [];
      this.shouldComponentUpdate = function(s) {
        n.props.value !== s.value && o.forEach(function(l) {
          l.context = s.value, l.forceUpdate();
        });
      }, this.sub = function(s) {
        o.push(s);
        var l = s.componentWillUnmount;
        s.componentWillUnmount = function() {
          o.splice(o.indexOf(s), 1), l && l.call(s);
        };
      };
    }
    return a;
  }, e;
}
function wa(t) {
  He(null, t);
}
if (typeof FullCalendarVDom > "u")
  throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");
var Zt = FullCalendarVDom.Component, m = FullCalendarVDom.createElement, Ta = FullCalendarVDom.render, G = FullCalendarVDom.createRef, B = FullCalendarVDom.Fragment, Nn = FullCalendarVDom.createContext, _a = FullCalendarVDom.createPortal, Br = FullCalendarVDom.flushSync, Ma = FullCalendarVDom.unmountComponentAtNode;
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var ve = function() {
  function t(e, r) {
    this.context = e, this.internalEventSource = r;
  }
  return t.prototype.remove = function() {
    this.context.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: this.internalEventSource.sourceId
    });
  }, t.prototype.refetch = function() {
    this.context.dispatch({
      type: "FETCH_EVENT_SOURCES",
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: !0
    });
  }, Object.defineProperty(t.prototype, "id", {
    get: function() {
      return this.internalEventSource.publicId;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "url", {
    get: function() {
      return this.internalEventSource.meta.url;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "format", {
    get: function() {
      return this.internalEventSource.meta.format;
    },
    enumerable: !1,
    configurable: !0
  }), t;
}();
function Xt(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function U(t, e) {
  if (t.closest)
    return t.closest(e);
  if (!document.documentElement.contains(t))
    return null;
  do {
    if (ka(t, e))
      return t;
    t = t.parentElement || t.parentNode;
  } while (t !== null && t.nodeType === 1);
  return null;
}
function ka(t, e) {
  var r = t.matches || t.matchesSelector || t.msMatchesSelector;
  return r.call(t, e);
}
function Ia(t, e) {
  for (var r = t instanceof HTMLElement ? [t] : t, n = [], i = 0; i < r.length; i += 1)
    for (var a = r[i].querySelectorAll(e), o = 0; o < a.length; o += 1)
      n.push(a[o]);
  return n;
}
var Pa = /(top|left|right|bottom|width|height)$/i;
function _e(t, e) {
  for (var r in e)
    On(t, r, e[r]);
}
function On(t, e, r) {
  r == null ? t.style[e] = "" : typeof r == "number" && Pa.test(e) ? t.style[e] = r + "px" : t.style[e] = r;
}
function Ln(t) {
  var e, r;
  return (r = (e = t.composedPath) === null || e === void 0 ? void 0 : e.call(t)[0]) !== null && r !== void 0 ? r : t.target;
}
function Vn(t) {
  return t.getRootNode ? t.getRootNode() : document;
}
var Fr = 0;
function ut() {
  return Fr += 1, "fc-dom-" + Fr;
}
function ct(t) {
  t.preventDefault();
}
function Ha(t, e) {
  return function(r) {
    var n = U(r.target, t);
    n && e.call(n, r, n);
  };
}
function Un(t, e, r, n) {
  var i = Ha(r, n);
  return t.addEventListener(e, i), function() {
    t.removeEventListener(e, i);
  };
}
function xa(t, e, r, n) {
  var i;
  return Un(t, "mouseover", e, function(a, o) {
    if (o !== i) {
      i = o, r(a, o);
      var s = function(l) {
        i = null, n(l, o), o.removeEventListener("mouseleave", s);
      };
      o.addEventListener("mouseleave", s);
    }
  });
}
var zr = [
  "webkitTransitionEnd",
  "otransitionend",
  "oTransitionEnd",
  "msTransitionEnd",
  "transitionend"
];
function Aa(t, e) {
  var r = function(n) {
    e(n), zr.forEach(function(i) {
      t.removeEventListener(i, r);
    });
  };
  zr.forEach(function(n) {
    t.addEventListener(n, r);
  });
}
function Wn(t) {
  return h({ onClick: t }, Bn(t));
}
function Bn(t) {
  return {
    tabIndex: 0,
    onKeyDown: function(e) {
      (e.key === "Enter" || e.key === " ") && (t(e), e.preventDefault());
    }
  };
}
var Gr = 0;
function be() {
  return Gr += 1, String(Gr);
}
function $t() {
  document.body.classList.add("fc-not-allowed");
}
function Kt() {
  document.body.classList.remove("fc-not-allowed");
}
function Na(t) {
  t.classList.add("fc-unselectable"), t.addEventListener("selectstart", ct);
}
function Oa(t) {
  t.classList.remove("fc-unselectable"), t.removeEventListener("selectstart", ct);
}
function La(t) {
  t.addEventListener("contextmenu", ct);
}
function Va(t) {
  t.removeEventListener("contextmenu", ct);
}
function Ua(t) {
  var e = [], r = [], n, i;
  for (typeof t == "string" ? r = t.split(/\s*,\s*/) : typeof t == "function" ? r = [t] : Array.isArray(t) && (r = t), n = 0; n < r.length; n += 1)
    i = r[n], typeof i == "string" ? e.push(i.charAt(0) === "-" ? { field: i.substring(1), order: -1 } : { field: i, order: 1 }) : typeof i == "function" && e.push({ func: i });
  return e;
}
function Wa(t, e, r) {
  var n, i;
  for (n = 0; n < r.length; n += 1)
    if (i = Ba(t, e, r[n]), i)
      return i;
  return 0;
}
function Ba(t, e, r) {
  return r.func ? r.func(t, e) : Fa(t[r.field], e[r.field]) * (r.order || 1);
}
function Fa(t, e) {
  return !t && !e ? 0 : e == null ? -1 : t == null ? 1 : typeof t == "string" || typeof e == "string" ? String(t).localeCompare(String(e)) : t - e;
}
function bt(t, e) {
  var r = String(t);
  return "000".substr(0, e - r.length) + r;
}
function Me(t, e, r) {
  return typeof t == "function" ? t.apply(void 0, e) : typeof t == "string" ? e.reduce(function(n, i, a) {
    return n.replace("$" + a, i || "");
  }, t) : r;
}
function za(t, e) {
  return t - e;
}
function Dt(t) {
  return t % 1 === 0;
}
function Ga(t) {
  var e = t.querySelector(".fc-scrollgrid-shrink-frame"), r = t.querySelector(".fc-scrollgrid-shrink-cushion");
  if (!e)
    throw new Error("needs fc-scrollgrid-shrink-frame className");
  if (!r)
    throw new Error("needs fc-scrollgrid-shrink-cushion className");
  return t.getBoundingClientRect().width - e.getBoundingClientRect().width + r.getBoundingClientRect().width;
}
var qa = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function qr(t, e) {
  var r = J(t);
  return r[2] += e * 7, F(r);
}
function W(t, e) {
  var r = J(t);
  return r[2] += e, F(r);
}
function le(t, e) {
  var r = J(t);
  return r[6] += e, F(r);
}
function Ya(t, e) {
  return De(t, e) / 7;
}
function De(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60 * 24);
}
function ja(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60);
}
function Za(t, e) {
  return (e.valueOf() - t.valueOf()) / (1e3 * 60);
}
function Xa(t, e) {
  return (e.valueOf() - t.valueOf()) / 1e3;
}
function $a(t, e) {
  var r = H(t), n = H(e);
  return {
    years: 0,
    months: 0,
    days: Math.round(De(r, n)),
    milliseconds: e.valueOf() - n.valueOf() - (t.valueOf() - r.valueOf())
  };
}
function Ka(t, e) {
  var r = Qe(t, e);
  return r !== null && r % 7 === 0 ? r / 7 : null;
}
function Qe(t, e) {
  return Q(t) === Q(e) ? Math.round(De(t, e)) : null;
}
function H(t) {
  return F([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ]);
}
function Ja(t) {
  return F([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours()
  ]);
}
function Qa(t) {
  return F([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes()
  ]);
}
function eo(t) {
  return F([
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds()
  ]);
}
function to(t, e, r) {
  var n = t.getUTCFullYear(), i = Ct(t, n, e, r);
  if (i < 1)
    return Ct(t, n - 1, e, r);
  var a = Ct(t, n + 1, e, r);
  return a >= 1 ? Math.min(i, a) : i;
}
function Ct(t, e, r, n) {
  var i = F([e, 0, 1 + ro(e, r, n)]), a = H(t), o = Math.round(De(i, a));
  return Math.floor(o / 7) + 1;
}
function ro(t, e, r) {
  var n = 7 + e - r, i = (7 + F([t, 0, n]).getUTCDay() - e) % 7;
  return -i + n - 1;
}
function Yr(t) {
  return [
    t.getFullYear(),
    t.getMonth(),
    t.getDate(),
    t.getHours(),
    t.getMinutes(),
    t.getSeconds(),
    t.getMilliseconds()
  ];
}
function jr(t) {
  return new Date(
    t[0],
    t[1] || 0,
    t[2] == null ? 1 : t[2],
    t[3] || 0,
    t[4] || 0,
    t[5] || 0
  );
}
function J(t) {
  return [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate(),
    t.getUTCHours(),
    t.getUTCMinutes(),
    t.getUTCSeconds(),
    t.getUTCMilliseconds()
  ];
}
function F(t) {
  return t.length === 1 && (t = t.concat([0])), new Date(Date.UTC.apply(Date, t));
}
function Fn(t) {
  return !isNaN(t.valueOf());
}
function Q(t) {
  return t.getUTCHours() * 1e3 * 60 * 60 + t.getUTCMinutes() * 1e3 * 60 + t.getUTCSeconds() * 1e3 + t.getUTCMilliseconds();
}
function Jt(t, e, r, n) {
  return {
    instanceId: be(),
    defId: t,
    range: e,
    forcedStartTzo: r == null ? null : r,
    forcedEndTzo: n == null ? null : n
  };
}
var et = Object.prototype.hasOwnProperty;
function Qt(t, e) {
  var r = {};
  if (e)
    for (var n in e) {
      for (var i = [], a = t.length - 1; a >= 0; a -= 1) {
        var o = t[a][n];
        if (typeof o == "object" && o)
          i.unshift(o);
        else if (o !== void 0) {
          r[n] = o;
          break;
        }
      }
      i.length && (r[n] = Qt(i));
    }
  for (var a = t.length - 1; a >= 0; a -= 1) {
    var s = t[a];
    for (var l in s)
      l in r || (r[l] = s[l]);
  }
  return r;
}
function ue(t, e) {
  var r = {};
  for (var n in t)
    e(t[n], n) && (r[n] = t[n]);
  return r;
}
function ce(t, e) {
  var r = {};
  for (var n in t)
    r[n] = e(t[n], n);
  return r;
}
function zn(t) {
  for (var e = {}, r = 0, n = t; r < n.length; r++) {
    var i = n[r];
    e[i] = !0;
  }
  return e;
}
function er(t) {
  var e = [];
  for (var r in t)
    e.push(t[r]);
  return e;
}
function X(t, e) {
  if (t === e)
    return !0;
  for (var r in t)
    if (et.call(t, r) && !(r in e))
      return !1;
  for (var r in e)
    if (et.call(e, r) && t[r] !== e[r])
      return !1;
  return !0;
}
function Zr(t, e) {
  var r = [];
  for (var n in t)
    et.call(t, n) && (n in e || r.push(n));
  for (var n in e)
    et.call(e, n) && t[n] !== e[n] && r.push(n);
  return r;
}
function Rt(t, e, r) {
  if (r === void 0 && (r = {}), t === e)
    return !0;
  for (var n in e)
    if (!(n in t && no(t[n], e[n], r[n])))
      return !1;
  for (var n in t)
    if (!(n in e))
      return !1;
  return !0;
}
function no(t, e, r) {
  return t === e || r === !0 ? !0 : r ? r(t, e) : !1;
}
function io(t, e, r, n) {
  e === void 0 && (e = 0), n === void 0 && (n = 1);
  var i = [];
  r == null && (r = Object.keys(t).length);
  for (var a = e; a < r; a += n) {
    var o = t[a];
    o !== void 0 && i.push(o);
  }
  return i;
}
function ao(t, e, r, n) {
  for (var i = 0; i < n.length; i += 1) {
    var a = n[i].parse(t, r);
    if (a) {
      var o = t.allDay;
      return o == null && (o = e, o == null && (o = a.allDayGuess, o == null && (o = !1))), {
        allDay: o,
        duration: a.duration,
        typeData: a.typeData,
        typeId: i
      };
    }
  }
  return null;
}
function ye(t, e, r) {
  var n = r.dateEnv, i = r.pluginHooks, a = r.options, o = t.defs, s = t.instances;
  s = ue(s, function(S) {
    return !o[S.defId].recurringDef;
  });
  for (var l in o) {
    var u = o[l];
    if (u.recurringDef) {
      var c = u.recurringDef.duration;
      c || (c = u.allDay ? a.defaultAllDayEventDuration : a.defaultTimedEventDuration);
      for (var f = oo(u, c, e, n, i.recurringTypes), d = 0, v = f; d < v.length; d++) {
        var p = v[d], E = Jt(l, {
          start: p,
          end: n.add(p, c)
        });
        s[E.instanceId] = E;
      }
    }
  }
  return { defs: o, instances: s };
}
function oo(t, e, r, n, i) {
  var a = i[t.recurringDef.typeId], o = a.expand(t.recurringDef.typeData, {
    start: n.subtract(r.start, e),
    end: r.end
  }, n);
  return t.allDay && (o = o.map(H)), o;
}
var so = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function I(t, e) {
  var r;
  return typeof t == "string" ? lo(t) : typeof t == "object" && t ? Xr(t) : typeof t == "number" ? Xr((r = {}, r[e || "milliseconds"] = t, r)) : null;
}
function lo(t) {
  var e = so.exec(t);
  if (e) {
    var r = e[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: r * (e[2] ? parseInt(e[2], 10) : 0),
      milliseconds: r * ((e[3] ? parseInt(e[3], 10) : 0) * 60 * 60 * 1e3 + (e[4] ? parseInt(e[4], 10) : 0) * 60 * 1e3 + (e[5] ? parseInt(e[5], 10) : 0) * 1e3 + (e[6] ? parseInt(e[6], 10) : 0))
    };
  }
  return null;
}
function Xr(t) {
  var e = {
    years: t.years || t.year || 0,
    months: t.months || t.month || 0,
    days: t.days || t.day || 0,
    milliseconds: (t.hours || t.hour || 0) * 60 * 60 * 1e3 + (t.minutes || t.minute || 0) * 60 * 1e3 + (t.seconds || t.second || 0) * 1e3 + (t.milliseconds || t.millisecond || t.ms || 0)
  }, r = t.weeks || t.week;
  return r && (e.days += r * 7, e.specifiedWeeks = !0), e;
}
function uo(t, e) {
  return t.years === e.years && t.months === e.months && t.days === e.days && t.milliseconds === e.milliseconds;
}
function co(t, e) {
  return {
    years: t.years - e.years,
    months: t.months - e.months,
    days: t.days - e.days,
    milliseconds: t.milliseconds - e.milliseconds
  };
}
function fo(t) {
  return he(t) / 365;
}
function vo(t) {
  return he(t) / 30;
}
function he(t) {
  return xe(t) / 864e5;
}
function xe(t) {
  return t.years * (365 * 864e5) + t.months * (30 * 864e5) + t.days * 864e5 + t.milliseconds;
}
function Lt(t) {
  var e = t.milliseconds;
  if (e) {
    if (e % 1e3 !== 0)
      return { unit: "millisecond", value: e };
    if (e % (1e3 * 60) !== 0)
      return { unit: "second", value: e / 1e3 };
    if (e % (1e3 * 60 * 60) !== 0)
      return { unit: "minute", value: e / (1e3 * 60) };
    if (e)
      return { unit: "hour", value: e / (1e3 * 60 * 60) };
  }
  return t.days ? t.specifiedWeeks && t.days % 7 === 0 ? { unit: "week", value: t.days / 7 } : { unit: "day", value: t.days } : t.months ? { unit: "month", value: t.months } : t.years ? { unit: "year", value: t.years } : { unit: "millisecond", value: 0 };
}
function po(t, e, r) {
  r === void 0 && (r = !1);
  var n = t.toISOString();
  return n = n.replace(".000", ""), r && (n = n.replace("T00:00:00Z", "")), n.length > 10 && (e == null ? n = n.replace("Z", "") : e !== 0 && (n = n.replace("Z", tr(e, !0)))), n;
}
function Gn(t) {
  return t.toISOString().replace(/T.*$/, "");
}
function tr(t, e) {
  e === void 0 && (e = !1);
  var r = t < 0 ? "-" : "+", n = Math.abs(t), i = Math.floor(n / 60), a = Math.round(n % 60);
  return e ? r + bt(i, 2) + ":" + bt(a, 2) : "GMT" + r + i + (a ? ":" + bt(a, 2) : "");
}
function Ee(t, e, r) {
  if (t === e)
    return !0;
  var n = t.length, i;
  if (n !== e.length)
    return !1;
  for (i = 0; i < n; i += 1)
    if (!(r ? r(t[i], e[i]) : t[i] === e[i]))
      return !1;
  return !0;
}
function M(t, e, r) {
  var n, i;
  return function() {
    for (var a = [], o = 0; o < arguments.length; o++)
      a[o] = arguments[o];
    if (!n)
      i = t.apply(this, a);
    else if (!Ee(n, a)) {
      r && r(i);
      var s = t.apply(this, a);
      (!e || !e(s, i)) && (i = s);
    }
    return n = a, i;
  };
}
function je(t, e, r) {
  var n = this, i, a;
  return function(o) {
    if (!i)
      a = t.call(n, o);
    else if (!X(i, o)) {
      r && r(a);
      var s = t.call(n, o);
      (!e || !e(s, a)) && (a = s);
    }
    return i = o, a;
  };
}
var $r = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
}, tt = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
}, Be = /\s*([ap])\.?m\.?/i, ho = /,/g, go = /\s+/g, mo = /\u200e/g, yo = /UTC|GMT/, Eo = function() {
  function t(e) {
    var r = {}, n = {}, i = 0;
    for (var a in e)
      a in $r ? (n[a] = e[a], i = Math.max($r[a], i)) : (r[a] = e[a], a in tt && (i = Math.max(tt[a], i)));
    this.standardDateProps = r, this.extendedSettings = n, this.severity = i, this.buildFormattingFunc = M(Kr);
  }
  return t.prototype.format = function(e, r) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, r)(e);
  }, t.prototype.formatRange = function(e, r, n, i) {
    var a = this, o = a.standardDateProps, s = a.extendedSettings, l = wo(e.marker, r.marker, n.calendarSystem);
    if (!l)
      return this.format(e, n);
    var u = l;
    u > 1 && (o.year === "numeric" || o.year === "2-digit") && (o.month === "numeric" || o.month === "2-digit") && (o.day === "numeric" || o.day === "2-digit") && (u = 1);
    var c = this.format(e, n), f = this.format(r, n);
    if (c === f)
      return c;
    var d = To(o, u), v = Kr(d, s, n), p = v(e), E = v(r), S = _o(c, p, f, E), g = s.separator || i || n.defaultSeparator || "";
    return S ? S.before + p + g + E + S.after : c + g + f;
  }, t.prototype.getLargestUnit = function() {
    switch (this.severity) {
      case 7:
      case 6:
      case 5:
        return "year";
      case 4:
        return "month";
      case 3:
        return "week";
      case 2:
        return "day";
      default:
        return "time";
    }
  }, t;
}();
function Kr(t, e, r) {
  var n = Object.keys(t).length;
  return n === 1 && t.timeZoneName === "short" ? function(i) {
    return tr(i.timeZoneOffset);
  } : n === 0 && e.week ? function(i) {
    return Ro(r.computeWeekNumber(i.marker), r.weekText, r.weekTextLong, r.locale, e.week);
  } : So(t, e, r);
}
function So(t, e, r) {
  t = h({}, t), e = h({}, e), bo(t, e), t.timeZone = "UTC";
  var n = new Intl.DateTimeFormat(r.locale.codes, t), i;
  if (e.omitZeroMinute) {
    var a = h({}, t);
    delete a.minute, i = new Intl.DateTimeFormat(r.locale.codes, a);
  }
  return function(o) {
    var s = o.marker, l;
    i && !s.getUTCMinutes() ? l = i : l = n;
    var u = l.format(s);
    return Do(u, o, t, e, r);
  };
}
function bo(t, e) {
  t.timeZoneName && (t.hour || (t.hour = "2-digit"), t.minute || (t.minute = "2-digit")), t.timeZoneName === "long" && (t.timeZoneName = "short"), e.omitZeroMinute && (t.second || t.millisecond) && delete e.omitZeroMinute;
}
function Do(t, e, r, n, i) {
  return t = t.replace(mo, ""), r.timeZoneName === "short" && (t = Co(t, i.timeZone === "UTC" || e.timeZoneOffset == null ? "UTC" : tr(e.timeZoneOffset))), n.omitCommas && (t = t.replace(ho, "").trim()), n.omitZeroMinute && (t = t.replace(":00", "")), n.meridiem === !1 ? t = t.replace(Be, "").trim() : n.meridiem === "narrow" ? t = t.replace(Be, function(a, o) {
    return o.toLocaleLowerCase();
  }) : n.meridiem === "short" ? t = t.replace(Be, function(a, o) {
    return o.toLocaleLowerCase() + "m";
  }) : n.meridiem === "lowercase" && (t = t.replace(Be, function(a) {
    return a.toLocaleLowerCase();
  })), t = t.replace(go, " "), t = t.trim(), t;
}
function Co(t, e) {
  var r = !1;
  return t = t.replace(yo, function() {
    return r = !0, e;
  }), r || (t += " " + e), t;
}
function Ro(t, e, r, n, i) {
  var a = [];
  return i === "long" ? a.push(r) : (i === "short" || i === "narrow") && a.push(e), (i === "long" || i === "short") && a.push(" "), a.push(n.simpleNumberFormat.format(t)), n.options.direction === "rtl" && a.reverse(), a.join("");
}
function wo(t, e, r) {
  return r.getMarkerYear(t) !== r.getMarkerYear(e) ? 5 : r.getMarkerMonth(t) !== r.getMarkerMonth(e) ? 4 : r.getMarkerDay(t) !== r.getMarkerDay(e) ? 2 : Q(t) !== Q(e) ? 1 : 0;
}
function To(t, e) {
  var r = {};
  for (var n in t)
    (!(n in tt) || tt[n] <= e) && (r[n] = t[n]);
  return r;
}
function _o(t, e, r, n) {
  for (var i = 0; i < t.length; ) {
    var a = t.indexOf(e, i);
    if (a === -1)
      break;
    var o = t.substr(0, a);
    i = a + e.length;
    for (var s = t.substr(i), l = 0; l < r.length; ) {
      var u = r.indexOf(n, l);
      if (u === -1)
        break;
      var c = r.substr(0, u);
      l = u + n.length;
      var f = r.substr(l);
      if (o === c && s === f)
        return {
          before: o,
          after: s
        };
    }
  }
  return null;
}
function Jr(t, e) {
  var r = e.markerToArray(t.marker);
  return {
    marker: t.marker,
    timeZoneOffset: t.timeZoneOffset,
    array: r,
    year: r[0],
    month: r[1],
    day: r[2],
    hour: r[3],
    minute: r[4],
    second: r[5],
    millisecond: r[6]
  };
}
function rt(t, e, r, n) {
  var i = Jr(t, r.calendarSystem), a = e ? Jr(e, r.calendarSystem) : null;
  return {
    date: i,
    start: i,
    end: a,
    timeZone: r.timeZone,
    localeCodes: r.locale.codes,
    defaultSeparator: n || r.defaultSeparator
  };
}
var Mo = function() {
  function t(e) {
    this.cmdStr = e;
  }
  return t.prototype.format = function(e, r, n) {
    return r.cmdFormatter(this.cmdStr, rt(e, null, r, n));
  }, t.prototype.formatRange = function(e, r, n, i) {
    return n.cmdFormatter(this.cmdStr, rt(e, r, n, i));
  }, t;
}(), ko = function() {
  function t(e) {
    this.func = e;
  }
  return t.prototype.format = function(e, r, n) {
    return this.func(rt(e, null, r, n));
  }, t.prototype.formatRange = function(e, r, n, i) {
    return this.func(rt(e, r, n, i));
  }, t;
}();
function V(t) {
  return typeof t == "object" && t ? new Eo(t) : typeof t == "string" ? new Mo(t) : typeof t == "function" ? new ko(t) : null;
}
var Qr = {
  navLinkDayClick: y,
  navLinkWeekClick: y,
  duration: I,
  bootstrapFontAwesome: y,
  buttonIcons: y,
  customButtons: y,
  defaultAllDayEventDuration: I,
  defaultTimedEventDuration: I,
  nextDayThreshold: I,
  scrollTime: I,
  scrollTimeReset: Boolean,
  slotMinTime: I,
  slotMaxTime: I,
  dayPopoverFormat: V,
  slotDuration: I,
  snapDuration: I,
  headerToolbar: y,
  footerToolbar: y,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: V,
  dayHeaderClassNames: y,
  dayHeaderContent: y,
  dayHeaderDidMount: y,
  dayHeaderWillUnmount: y,
  dayCellClassNames: y,
  dayCellContent: y,
  dayCellDidMount: y,
  dayCellWillUnmount: y,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: y,
  weekNumbers: Boolean,
  weekNumberClassNames: y,
  weekNumberContent: y,
  weekNumberDidMount: y,
  weekNumberWillUnmount: y,
  editable: Boolean,
  viewClassNames: y,
  viewDidMount: y,
  viewWillUnmount: y,
  nowIndicator: Boolean,
  nowIndicatorClassNames: y,
  nowIndicatorContent: y,
  nowIndicatorDidMount: y,
  nowIndicatorWillUnmount: y,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: y,
  locale: y,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: y,
  eventOrder: Ua,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: y,
  contentHeight: y,
  direction: String,
  weekNumberFormat: V,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: y,
  initialDate: y,
  now: y,
  eventDataTransform: y,
  stickyHeaderDates: y,
  stickyFooterScrollbar: y,
  viewHeight: y,
  defaultAllDay: Boolean,
  eventSourceFailure: y,
  eventSourceSuccess: y,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: y,
  eventConstraint: y,
  eventAllow: y,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: y,
  eventContent: y,
  eventDidMount: y,
  eventWillUnmount: y,
  selectConstraint: y,
  selectOverlap: y,
  selectAllow: y,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: y,
  slotLaneClassNames: y,
  slotLaneContent: y,
  slotLaneDidMount: y,
  slotLaneWillUnmount: y,
  slotLabelClassNames: y,
  slotLabelContent: y,
  slotLabelDidMount: y,
  slotLabelWillUnmount: y,
  dayMaxEvents: y,
  dayMaxEventRows: y,
  dayMinWidth: Number,
  slotLabelInterval: I,
  allDayText: String,
  allDayClassNames: y,
  allDayContent: y,
  allDayDidMount: y,
  allDayWillUnmount: y,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: V,
  rerenderDelay: Number,
  moreLinkText: y,
  moreLinkHint: y,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMaxStack: Number,
  eventMinHeight: Number,
  eventMinWidth: Number,
  eventShortHeight: Number,
  slotEventOverlap: Boolean,
  plugins: y,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: I,
  hiddenDays: y,
  monthMode: Boolean,
  fixedWeekCount: Boolean,
  validRange: y,
  visibleRange: y,
  titleFormat: y,
  eventInteractive: Boolean,
  noEventsText: String,
  viewHint: y,
  navLinkHint: y,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: y,
  moreLinkClassNames: y,
  moreLinkContent: y,
  moreLinkDidMount: y,
  moreLinkWillUnmount: y
}, ke = {
  eventDisplay: "auto",
  defaultRangeSeparator: " - ",
  titleRangeSeparator: " \u2013 ",
  defaultTimedEventDuration: "01:00:00",
  defaultAllDayEventDuration: { day: 1 },
  forceEventDuration: !1,
  nextDayThreshold: "00:00:00",
  dayHeaders: !0,
  initialView: "",
  aspectRatio: 1.35,
  headerToolbar: {
    start: "title",
    center: "",
    end: "today prev,next"
  },
  weekends: !0,
  weekNumbers: !1,
  weekNumberCalculation: "local",
  editable: !1,
  nowIndicator: !1,
  scrollTime: "06:00:00",
  scrollTimeReset: !0,
  slotMinTime: "00:00:00",
  slotMaxTime: "24:00:00",
  showNonCurrentDates: !0,
  lazyFetching: !0,
  startParam: "start",
  endParam: "end",
  timeZoneParam: "timeZone",
  timeZone: "local",
  locales: [],
  locale: "",
  themeSystem: "standard",
  dragRevertDuration: 500,
  dragScroll: !0,
  allDayMaintainDuration: !1,
  unselectAuto: !0,
  dropAccept: "*",
  eventOrder: "start,-duration,allDay,title",
  dayPopoverFormat: { month: "long", day: "numeric", year: "numeric" },
  handleWindowResize: !0,
  windowResizeDelay: 100,
  longPressDelay: 1e3,
  eventDragMinDistance: 5,
  expandRows: !1,
  navLinks: !1,
  selectable: !1,
  eventMinHeight: 15,
  eventMinWidth: 30,
  eventShortHeight: 30
}, en = {
  datesSet: y,
  eventsSet: y,
  eventAdd: y,
  eventChange: y,
  eventRemove: y,
  windowResize: y,
  eventClick: y,
  eventMouseEnter: y,
  eventMouseLeave: y,
  select: y,
  unselect: y,
  loading: y,
  _unmount: y,
  _beforeprint: y,
  _afterprint: y,
  _noEventDrop: y,
  _noEventResize: y,
  _resize: y,
  _scrollRequest: y
}, tn = {
  buttonText: y,
  buttonHints: y,
  views: y,
  plugins: y,
  initialEvents: y,
  events: y,
  eventSources: y
}, ne = {
  headerToolbar: de,
  footerToolbar: de,
  buttonText: de,
  buttonHints: de,
  buttonIcons: de,
  dateIncrement: de
};
function de(t, e) {
  return typeof t == "object" && typeof e == "object" && t && e ? X(t, e) : t === e;
}
var Io = {
  type: String,
  component: y,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: y,
  usesMinMaxTime: Boolean,
  classNames: y,
  content: y,
  didMount: y,
  willUnmount: y
};
function wt(t) {
  return Qt(t, ne);
}
function rr(t, e) {
  var r = {}, n = {};
  for (var i in e)
    i in t && (r[i] = e[i](t[i]));
  for (var i in t)
    i in e || (n[i] = t[i]);
  return { refined: r, extra: n };
}
function y(t) {
  return t;
}
function nt(t, e, r, n) {
  for (var i = Y(), a = ar(r), o = 0, s = t; o < s.length; o++) {
    var l = s[o], u = Yn(l, e, r, n, a);
    u && Vt(u, i);
  }
  return i;
}
function Vt(t, e) {
  return e === void 0 && (e = Y()), e.defs[t.def.defId] = t.def, t.instance && (e.instances[t.instance.instanceId] = t.instance), e;
}
function nr(t, e) {
  var r = t.instances[e];
  if (r) {
    var n = t.defs[r.defId], i = ft(t, function(a) {
      return Po(n, a);
    });
    return i.defs[n.defId] = n, i.instances[r.instanceId] = r, i;
  }
  return Y();
}
function Po(t, e) {
  return Boolean(t.groupId && t.groupId === e.groupId);
}
function Y() {
  return { defs: {}, instances: {} };
}
function ir(t, e) {
  return {
    defs: h(h({}, t.defs), e.defs),
    instances: h(h({}, t.instances), e.instances)
  };
}
function ft(t, e) {
  var r = ue(t.defs, e), n = ue(t.instances, function(i) {
    return r[i.defId];
  });
  return { defs: r, instances: n };
}
function Ho(t, e) {
  var r = t.defs, n = t.instances, i = {}, a = {};
  for (var o in r)
    e.defs[o] || (i[o] = r[o]);
  for (var s in n)
    !e.instances[s] && i[n[s].defId] && (a[s] = n[s]);
  return {
    defs: i,
    instances: a
  };
}
function xo(t, e) {
  return Array.isArray(t) ? nt(t, null, e, !0) : typeof t == "object" && t ? nt([t], null, e, !0) : t != null ? String(t) : null;
}
function Ut(t) {
  return Array.isArray(t) ? t : typeof t == "string" ? t.split(/\s+/) : [];
}
var it = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: y,
  overlap: y,
  allow: y,
  className: Ut,
  classNames: Ut,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
}, Ao = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: "",
  borderColor: "",
  textColor: "",
  classNames: []
};
function at(t, e) {
  var r = xo(t.constraint, e);
  return {
    display: t.display || null,
    startEditable: t.startEditable != null ? t.startEditable : t.editable,
    durationEditable: t.durationEditable != null ? t.durationEditable : t.editable,
    constraints: r != null ? [r] : [],
    overlap: t.overlap != null ? t.overlap : null,
    allows: t.allow != null ? [t.allow] : [],
    backgroundColor: t.backgroundColor || t.color || "",
    borderColor: t.borderColor || t.color || "",
    textColor: t.textColor || "",
    classNames: (t.className || []).concat(t.classNames || [])
  };
}
function No(t) {
  return t.reduce(Oo, Ao);
}
function Oo(t, e) {
  return {
    display: e.display != null ? e.display : t.display,
    startEditable: e.startEditable != null ? e.startEditable : t.startEditable,
    durationEditable: e.durationEditable != null ? e.durationEditable : t.durationEditable,
    constraints: t.constraints.concat(e.constraints),
    overlap: typeof e.overlap == "boolean" ? e.overlap : t.overlap,
    allows: t.allows.concat(e.allows),
    backgroundColor: e.backgroundColor || t.backgroundColor,
    borderColor: e.borderColor || t.borderColor,
    textColor: e.textColor || t.textColor,
    classNames: t.classNames.concat(e.classNames)
  };
}
var Ze = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
}, qn = {
  start: y,
  end: y,
  date: y,
  allDay: Boolean
}, Lo = h(h(h({}, Ze), qn), { extendedProps: y });
function Yn(t, e, r, n, i) {
  i === void 0 && (i = ar(r));
  var a = jn(t, r, i), o = a.refined, s = a.extra, l = Uo(e, r), u = ao(o, l, r.dateEnv, r.pluginHooks.recurringTypes);
  if (u) {
    var c = Wt(o, s, e ? e.sourceId : "", u.allDay, Boolean(u.duration), r);
    return c.recurringDef = {
      typeId: u.typeId,
      typeData: u.typeData,
      duration: u.duration
    }, { def: c, instance: null };
  }
  var f = Vo(o, l, r, n);
  if (f) {
    var c = Wt(o, s, e ? e.sourceId : "", f.allDay, f.hasEnd, r), d = Jt(c.defId, f.range, f.forcedStartTzo, f.forcedEndTzo);
    return { def: c, instance: d };
  }
  return null;
}
function jn(t, e, r) {
  return r === void 0 && (r = ar(e)), rr(t, r);
}
function ar(t) {
  return h(h(h({}, it), Lo), t.pluginHooks.eventRefiners);
}
function Wt(t, e, r, n, i, a) {
  for (var o = {
    title: t.title || "",
    groupId: t.groupId || "",
    publicId: t.id || "",
    url: t.url || "",
    recurringDef: null,
    defId: be(),
    sourceId: r,
    allDay: n,
    hasEnd: i,
    interactive: t.interactive,
    ui: at(t, a),
    extendedProps: h(h({}, t.extendedProps || {}), e)
  }, s = 0, l = a.pluginHooks.eventDefMemberAdders; s < l.length; s++) {
    var u = l[s];
    h(o, u(t));
  }
  return Object.freeze(o.ui.classNames), Object.freeze(o.extendedProps), o;
}
function Vo(t, e, r, n) {
  var i = t.allDay, a, o = null, s = !1, l, u = null, c = t.start != null ? t.start : t.date;
  if (a = r.dateEnv.createMarkerMeta(c), a)
    o = a.marker;
  else if (!n)
    return null;
  return t.end != null && (l = r.dateEnv.createMarkerMeta(t.end)), i == null && (e != null ? i = e : i = (!a || a.isTimeUnspecified) && (!l || l.isTimeUnspecified)), i && o && (o = H(o)), l && (u = l.marker, i && (u = H(u)), o && u <= o && (u = null)), u ? s = !0 : n || (s = r.options.forceEventDuration || !1, u = r.dateEnv.add(o, i ? r.options.defaultAllDayEventDuration : r.options.defaultTimedEventDuration)), {
    allDay: i,
    hasEnd: s,
    range: { start: o, end: u },
    forcedStartTzo: a ? a.forcedTzo : null,
    forcedEndTzo: l ? l.forcedTzo : null
  };
}
function Uo(t, e) {
  var r = null;
  return t && (r = t.defaultAllDay), r == null && (r = e.options.defaultAllDay), r;
}
function Zn(t) {
  var e = Math.floor(De(t.start, t.end)) || 1, r = H(t.start), n = W(r, e);
  return { start: r, end: n };
}
function Xn(t, e) {
  e === void 0 && (e = I(0));
  var r = null, n = null;
  if (t.end) {
    n = H(t.end);
    var i = t.end.valueOf() - n.valueOf();
    i && i >= xe(e) && (n = W(n, 1));
  }
  return t.start && (r = H(t.start), n && n <= r && (n = W(r, 1))), { start: r, end: n };
}
function pe(t, e, r, n) {
  return n === "year" ? I(r.diffWholeYears(t, e), "year") : n === "month" ? I(r.diffWholeMonths(t, e), "month") : $a(t, e);
}
function Wo(t, e) {
  var r = null, n = null;
  return t.start && (r = e.createMarker(t.start)), t.end && (n = e.createMarker(t.end)), !r && !n || r && n && n < r ? null : { start: r, end: n };
}
function rn(t, e) {
  var r = [], n = e.start, i, a;
  for (t.sort(Bo), i = 0; i < t.length; i += 1)
    a = t[i], a.start > n && r.push({ start: n, end: a.start }), a.end > n && (n = a.end);
  return n < e.end && r.push({ start: n, end: e.end }), r;
}
function Bo(t, e) {
  return t.start.valueOf() - e.start.valueOf();
}
function Ae(t, e) {
  var r = t.start, n = t.end, i = null;
  return e.start !== null && (r === null ? r = e.start : r = new Date(Math.max(r.valueOf(), e.start.valueOf()))), e.end != null && (n === null ? n = e.end : n = new Date(Math.min(n.valueOf(), e.end.valueOf()))), (r === null || n === null || r < n) && (i = { start: r, end: n }), i;
}
function Fo(t, e) {
  return (t.start === null ? null : t.start.valueOf()) === (e.start === null ? null : e.start.valueOf()) && (t.end === null ? null : t.end.valueOf()) === (e.end === null ? null : e.end.valueOf());
}
function or(t, e) {
  return (t.end === null || e.start === null || t.end > e.start) && (t.start === null || e.end === null || t.start < e.end);
}
function dt(t, e) {
  return (t.start === null || e.start !== null && e.start >= t.start) && (t.end === null || e.end !== null && e.end <= t.end);
}
function ae(t, e) {
  return (t.start === null || e >= t.start) && (t.end === null || e < t.end);
}
function zo(t, e) {
  return e.start != null && t < e.start ? e.start : e.end != null && t >= e.end ? new Date(e.end.valueOf() - 1) : t;
}
function nn(t, e, r, n) {
  var i = {}, a = {}, o = {}, s = [], l = [], u = ot(t.defs, e);
  for (var c in t.defs) {
    var f = t.defs[c], d = u[f.defId];
    d.display === "inverse-background" && (f.groupId ? (i[f.groupId] = [], o[f.groupId] || (o[f.groupId] = f)) : a[c] = []);
  }
  for (var v in t.instances) {
    var p = t.instances[v], f = t.defs[p.defId], d = u[f.defId], E = p.range, S = !f.allDay && n ? Xn(E, n) : E, g = Ae(S, r);
    g && (d.display === "inverse-background" ? f.groupId ? i[f.groupId].push(g) : a[p.defId].push(g) : d.display !== "none" && (d.display === "background" ? s : l).push({
      def: f,
      ui: d,
      instance: p,
      range: g,
      isStart: S.start && S.start.valueOf() === g.start.valueOf(),
      isEnd: S.end && S.end.valueOf() === g.end.valueOf()
    }));
  }
  for (var b in i)
    for (var D = i[b], C = rn(D, r), k = 0, T = C; k < T.length; k++) {
      var P = T[k], f = o[b], d = u[f.defId];
      s.push({
        def: f,
        ui: d,
        instance: null,
        range: P,
        isStart: !1,
        isEnd: !1
      });
    }
  for (var c in a)
    for (var D = a[c], C = rn(D, r), _ = 0, O = C; _ < O.length; _++) {
      var P = O[_];
      s.push({
        def: t.defs[c],
        ui: u[c],
        instance: null,
        range: P,
        isStart: !1,
        isEnd: !1
      });
    }
  return { bg: s, fg: l };
}
function an(t, e) {
  t.fcSeg = e;
}
function Se(t) {
  return t.fcSeg || t.parentNode.fcSeg || null;
}
function ot(t, e) {
  return ce(t, function(r) {
    return $n(r, e);
  });
}
function $n(t, e) {
  var r = [];
  return e[""] && r.push(e[""]), e[t.defId] && r.push(e[t.defId]), r.push(t.ui), No(r);
}
function Go(t, e) {
  var r = t.map(qo);
  return r.sort(function(n, i) {
    return Wa(n, i, e);
  }), r.map(function(n) {
    return n._seg;
  });
}
function qo(t) {
  var e = t.eventRange, r = e.def, n = e.instance ? e.instance.range : e.range, i = n.start ? n.start.valueOf() : 0, a = n.end ? n.end.valueOf() : 0;
  return h(h(h({}, r.extendedProps), r), {
    id: r.publicId,
    start: i,
    end: a,
    duration: a - i,
    allDay: Number(r.allDay),
    _seg: t
  });
}
function Yo(t, e) {
  for (var r = e.pluginHooks, n = r.isDraggableTransformers, i = t.eventRange, a = i.def, o = i.ui, s = o.startEditable, l = 0, u = n; l < u.length; l++) {
    var c = u[l];
    s = c(s, a, o, e);
  }
  return s;
}
function jo(t, e) {
  return t.isStart && t.eventRange.ui.durationEditable && e.options.eventResizableFromStart;
}
function Zo(t, e) {
  return t.isEnd && t.eventRange.ui.durationEditable;
}
function Kn(t, e, r, n, i, a, o) {
  var s = r.dateEnv, l = r.options, u = l.displayEventTime, c = l.displayEventEnd, f = t.eventRange.def, d = t.eventRange.instance;
  u == null && (u = n !== !1), c == null && (c = i !== !1);
  var v = d.range.start, p = d.range.end, E = a || t.start || t.eventRange.range.start, S = o || t.end || t.eventRange.range.end, g = H(v).valueOf() === H(E).valueOf(), b = H(le(p, -1)).valueOf() === H(le(S, -1)).valueOf();
  return u && !f.allDay && (g || b) ? (E = g ? v : E, S = b ? p : S, c && f.hasEnd ? s.formatRange(E, S, e, {
    forcedStartTzo: a ? null : d.forcedStartTzo,
    forcedEndTzo: o ? null : d.forcedEndTzo
  }) : s.format(E, e, {
    forcedTzo: a ? null : d.forcedStartTzo
  })) : "";
}
function Ie(t, e, r) {
  var n = t.eventRange.range;
  return {
    isPast: n.end < (r || e.start),
    isFuture: n.start >= (r || e.end),
    isToday: e && ae(e, n.start)
  };
}
function Xo(t) {
  var e = ["fc-event"];
  return t.isMirror && e.push("fc-event-mirror"), t.isDraggable && e.push("fc-event-draggable"), (t.isStartResizable || t.isEndResizable) && e.push("fc-event-resizable"), t.isDragging && e.push("fc-event-dragging"), t.isResizing && e.push("fc-event-resizing"), t.isSelected && e.push("fc-event-selected"), t.isStart && e.push("fc-event-start"), t.isEnd && e.push("fc-event-end"), t.isPast && e.push("fc-event-past"), t.isToday && e.push("fc-event-today"), t.isFuture && e.push("fc-event-future"), e;
}
function $o(t) {
  return t.instance ? t.instance.instanceId : t.def.defId + ":" + t.range.start.toISOString();
}
function Jn(t, e) {
  var r = t.eventRange, n = r.def, i = r.instance, a = n.url;
  if (a)
    return { href: a };
  var o = e.emitter, s = e.options, l = s.eventInteractive;
  return l == null && (l = n.interactive, l == null && (l = Boolean(o.hasHandlers("eventClick")))), l ? Bn(function(u) {
    o.trigger("eventClick", {
      el: u.target,
      event: new N(e, n, i),
      jsEvent: u,
      view: e.viewApi
    });
  }) : {};
}
var Ko = {
  start: y,
  end: y,
  allDay: Boolean
};
function Jo(t, e, r) {
  var n = Qo(t, e), i = n.range;
  if (!i.start)
    return null;
  if (!i.end) {
    if (r == null)
      return null;
    i.end = e.add(i.start, r);
  }
  return n;
}
function Qo(t, e) {
  var r = rr(t, Ko), n = r.refined, i = r.extra, a = n.start ? e.createMarkerMeta(n.start) : null, o = n.end ? e.createMarkerMeta(n.end) : null, s = n.allDay;
  return s == null && (s = a && a.isTimeUnspecified && (!o || o.isTimeUnspecified)), h({ range: {
    start: a ? a.marker : null,
    end: o ? o.marker : null
  }, allDay: s }, i);
}
function es(t, e) {
  return Fo(t.range, e.range) && t.allDay === e.allDay && ts(t, e);
}
function ts(t, e) {
  for (var r in e)
    if (r !== "range" && r !== "allDay" && t[r] !== e[r])
      return !1;
  for (var r in t)
    if (!(r in e))
      return !1;
  return !0;
}
function rs(t, e) {
  return h(h({}, ei(t.range, e, t.allDay)), { allDay: t.allDay });
}
function Qn(t, e, r) {
  return h(h({}, ei(t, e, r)), { timeZone: e.timeZone });
}
function ei(t, e, r) {
  return {
    start: e.toDate(t.start),
    end: e.toDate(t.end),
    startStr: e.formatIso(t.start, { omitTime: r }),
    endStr: e.formatIso(t.end, { omitTime: r })
  };
}
function ns(t, e, r) {
  var n = jn({ editable: !1 }, r), i = Wt(
    n.refined,
    n.extra,
    "",
    t.allDay,
    !0,
    r
  );
  return {
    def: i,
    ui: $n(i, e),
    instance: Jt(i.defId, t.range),
    range: t.range,
    isStart: !0,
    isEnd: !0
  };
}
function ti(t, e, r) {
  r.emitter.trigger("select", h(h({}, sr(t, r)), { jsEvent: e ? e.origEvent : null, view: r.viewApi || r.calendarApi.view }));
}
function is(t, e) {
  e.emitter.trigger("unselect", {
    jsEvent: t ? t.origEvent : null,
    view: e.viewApi || e.calendarApi.view
  });
}
function sr(t, e) {
  for (var r = {}, n = 0, i = e.pluginHooks.dateSpanTransforms; n < i.length; n++) {
    var a = i[n];
    h(r, a(t, e));
  }
  return h(r, rs(t, e.dateEnv)), r;
}
function on(t, e, r) {
  var n = r.dateEnv, i = r.options, a = e;
  return t ? (a = H(a), a = n.add(a, i.defaultAllDayEventDuration)) : a = n.add(a, i.defaultTimedEventDuration), a;
}
function lr(t, e, r, n) {
  var i = ot(t.defs, e), a = Y();
  for (var o in t.defs) {
    var s = t.defs[o];
    a.defs[o] = as(s, i[o], r, n);
  }
  for (var l in t.instances) {
    var u = t.instances[l], s = a.defs[u.defId];
    a.instances[l] = os(u, s, i[u.defId], r, n);
  }
  return a;
}
function as(t, e, r, n) {
  var i = r.standardProps || {};
  i.hasEnd == null && e.durationEditable && (r.startDelta || r.endDelta) && (i.hasEnd = !0);
  var a = h(h(h({}, t), i), { ui: h(h({}, t.ui), i.ui) });
  r.extendedProps && (a.extendedProps = h(h({}, a.extendedProps), r.extendedProps));
  for (var o = 0, s = n.pluginHooks.eventDefMutationAppliers; o < s.length; o++) {
    var l = s[o];
    l(a, r, n);
  }
  return !a.hasEnd && n.options.forceEventDuration && (a.hasEnd = !0), a;
}
function os(t, e, r, n, i) {
  var a = i.dateEnv, o = n.standardProps && n.standardProps.allDay === !0, s = n.standardProps && n.standardProps.hasEnd === !1, l = h({}, t);
  return o && (l.range = Zn(l.range)), n.datesDelta && r.startEditable && (l.range = {
    start: a.add(l.range.start, n.datesDelta),
    end: a.add(l.range.end, n.datesDelta)
  }), n.startDelta && r.durationEditable && (l.range = {
    start: a.add(l.range.start, n.startDelta),
    end: l.range.end
  }), n.endDelta && r.durationEditable && (l.range = {
    start: l.range.start,
    end: a.add(l.range.end, n.endDelta)
  }), s && (l.range = {
    start: l.range.start,
    end: on(e.allDay, l.range.start, i)
  }), e.allDay && (l.range = {
    start: H(l.range.start),
    end: H(l.range.end)
  }), l.range.end < l.range.start && (l.range.end = on(e.allDay, l.range.start, i)), l;
}
var ss = function() {
  function t(e, r, n) {
    this.type = e, this.getCurrentData = r, this.dateEnv = n;
  }
  return Object.defineProperty(t.prototype, "calendar", {
    get: function() {
      return this.getCurrentData().calendarApi;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "title", {
    get: function() {
      return this.getCurrentData().viewTitle;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "activeStart", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "activeEnd", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "currentStart", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "currentEnd", {
    get: function() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.getOption = function(e) {
    return this.getCurrentData().options[e];
  }, t;
}(), ls = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: y,
  eventDataTransform: y,
  success: y,
  failure: y
};
function ri(t, e, r) {
  r === void 0 && (r = ni(e));
  var n;
  if (typeof t == "string" ? n = { url: t } : typeof t == "function" || Array.isArray(t) ? n = { events: t } : typeof t == "object" && t && (n = t), n) {
    var i = rr(n, r), a = i.refined, o = i.extra, s = us(a, e);
    if (s)
      return {
        _raw: t,
        isFetching: !1,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: a.defaultAllDay,
        eventDataTransform: a.eventDataTransform,
        success: a.success,
        failure: a.failure,
        publicId: a.id || "",
        sourceId: be(),
        sourceDefId: s.sourceDefId,
        meta: s.meta,
        ui: at(a, e),
        extendedProps: o
      };
  }
  return null;
}
function ni(t) {
  return h(h(h({}, it), ls), t.pluginHooks.eventSourceRefiners);
}
function us(t, e) {
  for (var r = e.pluginHooks.eventSourceDefs, n = r.length - 1; n >= 0; n -= 1) {
    var i = r[n], a = i.parseMeta(t);
    if (a)
      return { sourceDefId: n, meta: a };
  }
  return null;
}
function cs(t, e) {
  switch (e.type) {
    case "CHANGE_DATE":
      return e.dateMarker;
    default:
      return t;
  }
}
function fs(t, e) {
  var r = t.initialDate;
  return r != null ? e.createMarker(r) : Ne(t.now, e);
}
function Ne(t, e) {
  return typeof t == "function" && (t = t()), t == null ? e.createNowMarker() : e.createMarker(t);
}
var ds = function() {
  function t() {
  }
  return t.prototype.getCurrentData = function() {
    return this.currentDataManager.getCurrentData();
  }, t.prototype.dispatch = function(e) {
    return this.currentDataManager.dispatch(e);
  }, Object.defineProperty(t.prototype, "view", {
    get: function() {
      return this.getCurrentData().viewApi;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.batchRendering = function(e) {
    e();
  }, t.prototype.updateSize = function() {
    this.trigger("_resize", !0);
  }, t.prototype.setOption = function(e, r) {
    this.dispatch({
      type: "SET_OPTION",
      optionName: e,
      rawOptionValue: r
    });
  }, t.prototype.getOption = function(e) {
    return this.currentDataManager.currentCalendarOptionsInput[e];
  }, t.prototype.getAvailableLocaleCodes = function() {
    return Object.keys(this.getCurrentData().availableRawLocales);
  }, t.prototype.on = function(e, r) {
    var n = this.currentDataManager;
    n.currentCalendarOptionsRefiners[e] ? n.emitter.on(e, r) : console.warn("Unknown listener name '" + e + "'");
  }, t.prototype.off = function(e, r) {
    this.currentDataManager.emitter.off(e, r);
  }, t.prototype.trigger = function(e) {
    for (var r, n = [], i = 1; i < arguments.length; i++)
      n[i - 1] = arguments[i];
    (r = this.currentDataManager.emitter).trigger.apply(r, A([e], n));
  }, t.prototype.changeView = function(e, r) {
    var n = this;
    this.batchRendering(function() {
      if (n.unselect(), r)
        if (r.start && r.end)
          n.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e
          }), n.dispatch({
            type: "SET_OPTION",
            optionName: "visibleRange",
            rawOptionValue: r
          });
        else {
          var i = n.getCurrentData().dateEnv;
          n.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e,
            dateMarker: i.createMarker(r)
          });
        }
      else
        n.dispatch({
          type: "CHANGE_VIEW_TYPE",
          viewType: e
        });
    });
  }, t.prototype.zoomTo = function(e, r) {
    var n = this.getCurrentData(), i;
    r = r || "day", i = n.viewSpecs[r] || this.getUnitViewSpec(r), this.unselect(), i ? this.dispatch({
      type: "CHANGE_VIEW_TYPE",
      viewType: i.type,
      dateMarker: e
    }) : this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e
    });
  }, t.prototype.getUnitViewSpec = function(e) {
    var r = this.getCurrentData(), n = r.viewSpecs, i = r.toolbarConfig, a = [].concat(i.header ? i.header.viewsWithButtons : [], i.footer ? i.footer.viewsWithButtons : []), o, s;
    for (var l in n)
      a.push(l);
    for (o = 0; o < a.length; o += 1)
      if (s = n[a[o]], s && s.singleUnit === e)
        return s;
    return null;
  }, t.prototype.prev = function() {
    this.unselect(), this.dispatch({ type: "PREV" });
  }, t.prototype.next = function() {
    this.unselect(), this.dispatch({ type: "NEXT" });
  }, t.prototype.prevYear = function() {
    var e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e.dateEnv.addYears(e.currentDate, -1)
    });
  }, t.prototype.nextYear = function() {
    var e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: e.dateEnv.addYears(e.currentDate, 1)
    });
  }, t.prototype.today = function() {
    var e = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: Ne(e.calendarOptions.now, e.dateEnv)
    });
  }, t.prototype.gotoDate = function(e) {
    var r = this.getCurrentData();
    this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: r.dateEnv.createMarker(e)
    });
  }, t.prototype.incrementDate = function(e) {
    var r = this.getCurrentData(), n = I(e);
    n && (this.unselect(), this.dispatch({
      type: "CHANGE_DATE",
      dateMarker: r.dateEnv.add(r.currentDate, n)
    }));
  }, t.prototype.getDate = function() {
    var e = this.getCurrentData();
    return e.dateEnv.toDate(e.currentDate);
  }, t.prototype.formatDate = function(e, r) {
    var n = this.getCurrentData().dateEnv;
    return n.format(n.createMarker(e), V(r));
  }, t.prototype.formatRange = function(e, r, n) {
    var i = this.getCurrentData().dateEnv;
    return i.formatRange(i.createMarker(e), i.createMarker(r), V(n), n);
  }, t.prototype.formatIso = function(e, r) {
    var n = this.getCurrentData().dateEnv;
    return n.formatIso(n.createMarker(e), { omitTime: r });
  }, t.prototype.select = function(e, r) {
    var n;
    r == null ? e.start != null ? n = e : n = {
      start: e,
      end: null
    } : n = {
      start: e,
      end: r
    };
    var i = this.getCurrentData(), a = Jo(n, i.dateEnv, I({ days: 1 }));
    a && (this.dispatch({ type: "SELECT_DATES", selection: a }), ti(a, null, i));
  }, t.prototype.unselect = function(e) {
    var r = this.getCurrentData();
    r.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), is(e, r));
  }, t.prototype.addEvent = function(e, r) {
    if (e instanceof N) {
      var n = e._def, i = e._instance, a = this.getCurrentData();
      return a.eventStore.defs[n.defId] || (this.dispatch({
        type: "ADD_EVENTS",
        eventStore: Vt({ def: n, instance: i })
      }), this.triggerEventAdd(e)), e;
    }
    var o = this.getCurrentData(), s;
    if (r instanceof ve)
      s = r.internalEventSource;
    else if (typeof r == "boolean")
      r && (s = er(o.eventSources)[0]);
    else if (r != null) {
      var l = this.getEventSourceById(r);
      if (!l)
        return console.warn('Could not find an event source with ID "' + r + '"'), null;
      s = l.internalEventSource;
    }
    var u = Yn(e, s, o, !1);
    if (u) {
      var c = new N(o, u.def, u.def.recurringDef ? null : u.instance);
      return this.dispatch({
        type: "ADD_EVENTS",
        eventStore: Vt(u)
      }), this.triggerEventAdd(c), c;
    }
    return null;
  }, t.prototype.triggerEventAdd = function(e) {
    var r = this, n = this.getCurrentData().emitter;
    n.trigger("eventAdd", {
      event: e,
      relatedEvents: [],
      revert: function() {
        r.dispatch({
          type: "REMOVE_EVENTS",
          eventStore: ii(e)
        });
      }
    });
  }, t.prototype.getEventById = function(e) {
    var r = this.getCurrentData(), n = r.eventStore, i = n.defs, a = n.instances;
    e = String(e);
    for (var o in i) {
      var s = i[o];
      if (s.publicId === e) {
        if (s.recurringDef)
          return new N(r, s, null);
        for (var l in a) {
          var u = a[l];
          if (u.defId === s.defId)
            return new N(r, s, u);
        }
      }
    }
    return null;
  }, t.prototype.getEvents = function() {
    var e = this.getCurrentData();
    return oe(e.eventStore, e);
  }, t.prototype.removeAllEvents = function() {
    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
  }, t.prototype.getEventSources = function() {
    var e = this.getCurrentData(), r = e.eventSources, n = [];
    for (var i in r)
      n.push(new ve(e, r[i]));
    return n;
  }, t.prototype.getEventSourceById = function(e) {
    var r = this.getCurrentData(), n = r.eventSources;
    e = String(e);
    for (var i in n)
      if (n[i].publicId === e)
        return new ve(r, n[i]);
    return null;
  }, t.prototype.addEventSource = function(e) {
    var r = this.getCurrentData();
    if (e instanceof ve)
      return r.eventSources[e.internalEventSource.sourceId] || this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [e.internalEventSource]
      }), e;
    var n = ri(e, r);
    return n ? (this.dispatch({ type: "ADD_EVENT_SOURCES", sources: [n] }), new ve(r, n)) : null;
  }, t.prototype.removeAllEventSources = function() {
    this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
  }, t.prototype.refetchEvents = function() {
    this.dispatch({ type: "FETCH_EVENT_SOURCES", isRefetch: !0 });
  }, t.prototype.scrollToTime = function(e) {
    var r = I(e);
    r && this.trigger("_scrollRequest", { time: r });
  }, t;
}(), N = function() {
  function t(e, r, n) {
    this._context = e, this._def = r, this._instance = n || null;
  }
  return t.prototype.setProp = function(e, r) {
    var n, i;
    if (e in qn)
      console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
    else if (e === "id")
      r = Ze[e](r), this.mutate({
        standardProps: { publicId: r }
      });
    else if (e in Ze)
      r = Ze[e](r), this.mutate({
        standardProps: (n = {}, n[e] = r, n)
      });
    else if (e in it) {
      var a = it[e](r);
      e === "color" ? a = { backgroundColor: r, borderColor: r } : e === "editable" ? a = { startEditable: r, durationEditable: r } : a = (i = {}, i[e] = r, i), this.mutate({
        standardProps: { ui: a }
      });
    } else
      console.warn("Could not set prop '" + e + "'. Use setExtendedProp instead.");
  }, t.prototype.setExtendedProp = function(e, r) {
    var n;
    this.mutate({
      extendedProps: (n = {}, n[e] = r, n)
    });
  }, t.prototype.setStart = function(e, r) {
    r === void 0 && (r = {});
    var n = this._context.dateEnv, i = n.createMarker(e);
    if (i && this._instance) {
      var a = this._instance.range, o = pe(a.start, i, n, r.granularity);
      r.maintainDuration ? this.mutate({ datesDelta: o }) : this.mutate({ startDelta: o });
    }
  }, t.prototype.setEnd = function(e, r) {
    r === void 0 && (r = {});
    var n = this._context.dateEnv, i;
    if (!(e != null && (i = n.createMarker(e), !i)) && this._instance)
      if (i) {
        var a = pe(this._instance.range.end, i, n, r.granularity);
        this.mutate({ endDelta: a });
      } else
        this.mutate({ standardProps: { hasEnd: !1 } });
  }, t.prototype.setDates = function(e, r, n) {
    n === void 0 && (n = {});
    var i = this._context.dateEnv, a = { allDay: n.allDay }, o = i.createMarker(e), s;
    if (!!o && !(r != null && (s = i.createMarker(r), !s)) && this._instance) {
      var l = this._instance.range;
      n.allDay === !0 && (l = Zn(l));
      var u = pe(l.start, o, i, n.granularity);
      if (s) {
        var c = pe(l.end, s, i, n.granularity);
        uo(u, c) ? this.mutate({ datesDelta: u, standardProps: a }) : this.mutate({ startDelta: u, endDelta: c, standardProps: a });
      } else
        a.hasEnd = !1, this.mutate({ datesDelta: u, standardProps: a });
    }
  }, t.prototype.moveStart = function(e) {
    var r = I(e);
    r && this.mutate({ startDelta: r });
  }, t.prototype.moveEnd = function(e) {
    var r = I(e);
    r && this.mutate({ endDelta: r });
  }, t.prototype.moveDates = function(e) {
    var r = I(e);
    r && this.mutate({ datesDelta: r });
  }, t.prototype.setAllDay = function(e, r) {
    r === void 0 && (r = {});
    var n = { allDay: e }, i = r.maintainDuration;
    i == null && (i = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (n.hasEnd = i), this.mutate({ standardProps: n });
  }, t.prototype.formatRange = function(e) {
    var r = this._context.dateEnv, n = this._instance, i = V(e);
    return this._def.hasEnd ? r.formatRange(n.range.start, n.range.end, i, {
      forcedStartTzo: n.forcedStartTzo,
      forcedEndTzo: n.forcedEndTzo
    }) : r.format(n.range.start, i, {
      forcedTzo: n.forcedStartTzo
    });
  }, t.prototype.mutate = function(e) {
    var r = this._instance;
    if (r) {
      var n = this._def, i = this._context, a = i.getCurrentData().eventStore, o = nr(a, r.instanceId), s = {
        "": {
          display: "",
          startEditable: !0,
          durationEditable: !0,
          constraints: [],
          overlap: null,
          allows: [],
          backgroundColor: "",
          borderColor: "",
          textColor: "",
          classNames: []
        }
      };
      o = lr(o, s, e, i);
      var l = new t(i, n, r);
      this._def = o.defs[n.defId], this._instance = o.instances[r.instanceId], i.dispatch({
        type: "MERGE_EVENTS",
        eventStore: o
      }), i.emitter.trigger("eventChange", {
        oldEvent: l,
        event: this,
        relatedEvents: oe(o, i, r),
        revert: function() {
          i.dispatch({
            type: "RESET_EVENTS",
            eventStore: a
          });
        }
      });
    }
  }, t.prototype.remove = function() {
    var e = this._context, r = ii(this);
    e.dispatch({
      type: "REMOVE_EVENTS",
      eventStore: r
    }), e.emitter.trigger("eventRemove", {
      event: this,
      relatedEvents: [],
      revert: function() {
        e.dispatch({
          type: "MERGE_EVENTS",
          eventStore: r
        });
      }
    });
  }, Object.defineProperty(t.prototype, "source", {
    get: function() {
      var e = this._def.sourceId;
      return e ? new ve(this._context, this._context.getCurrentData().eventSources[e]) : null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "start", {
    get: function() {
      return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "end", {
    get: function() {
      return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "startStr", {
    get: function() {
      var e = this._instance;
      return e ? this._context.dateEnv.formatIso(e.range.start, {
        omitTime: this._def.allDay,
        forcedTzo: e.forcedStartTzo
      }) : "";
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "endStr", {
    get: function() {
      var e = this._instance;
      return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
        omitTime: this._def.allDay,
        forcedTzo: e.forcedEndTzo
      }) : "";
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "id", {
    get: function() {
      return this._def.publicId;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "groupId", {
    get: function() {
      return this._def.groupId;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "allDay", {
    get: function() {
      return this._def.allDay;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "title", {
    get: function() {
      return this._def.title;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "url", {
    get: function() {
      return this._def.url;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "display", {
    get: function() {
      return this._def.ui.display || "auto";
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "startEditable", {
    get: function() {
      return this._def.ui.startEditable;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "durationEditable", {
    get: function() {
      return this._def.ui.durationEditable;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "constraint", {
    get: function() {
      return this._def.ui.constraints[0] || null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "overlap", {
    get: function() {
      return this._def.ui.overlap;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "allow", {
    get: function() {
      return this._def.ui.allows[0] || null;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "backgroundColor", {
    get: function() {
      return this._def.ui.backgroundColor;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "borderColor", {
    get: function() {
      return this._def.ui.borderColor;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "textColor", {
    get: function() {
      return this._def.ui.textColor;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "classNames", {
    get: function() {
      return this._def.ui.classNames;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "extendedProps", {
    get: function() {
      return this._def.extendedProps;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.toPlainObject = function(e) {
    e === void 0 && (e = {});
    var r = this._def, n = r.ui, i = this, a = i.startStr, o = i.endStr, s = {};
    return r.title && (s.title = r.title), a && (s.start = a), o && (s.end = o), r.publicId && (s.id = r.publicId), r.groupId && (s.groupId = r.groupId), r.url && (s.url = r.url), n.display && n.display !== "auto" && (s.display = n.display), e.collapseColor && n.backgroundColor && n.backgroundColor === n.borderColor ? s.color = n.backgroundColor : (n.backgroundColor && (s.backgroundColor = n.backgroundColor), n.borderColor && (s.borderColor = n.borderColor)), n.textColor && (s.textColor = n.textColor), n.classNames.length && (s.classNames = n.classNames), Object.keys(r.extendedProps).length && (e.collapseExtendedProps ? h(s, r.extendedProps) : s.extendedProps = r.extendedProps), s;
  }, t.prototype.toJSON = function() {
    return this.toPlainObject();
  }, t;
}();
function ii(t) {
  var e, r, n = t._def, i = t._instance;
  return {
    defs: (e = {}, e[n.defId] = n, e),
    instances: i ? (r = {}, r[i.instanceId] = i, r) : {}
  };
}
function oe(t, e, r) {
  var n = t.defs, i = t.instances, a = [], o = r ? r.instanceId : "";
  for (var s in i) {
    var l = i[s], u = n[l.defId];
    l.instanceId !== o && a.push(new N(e, u, l));
  }
  return a;
}
var ai = {};
function vs(t, e) {
  ai[t] = e;
}
function ps(t) {
  return new ai[t]();
}
var hs = function() {
  function t() {
  }
  return t.prototype.getMarkerYear = function(e) {
    return e.getUTCFullYear();
  }, t.prototype.getMarkerMonth = function(e) {
    return e.getUTCMonth();
  }, t.prototype.getMarkerDay = function(e) {
    return e.getUTCDate();
  }, t.prototype.arrayToMarker = function(e) {
    return F(e);
  }, t.prototype.markerToArray = function(e) {
    return J(e);
  }, t;
}();
vs("gregory", hs);
var gs = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function ms(t) {
  var e = gs.exec(t);
  if (e) {
    var r = new Date(Date.UTC(Number(e[1]), e[3] ? Number(e[3]) - 1 : 0, Number(e[5] || 1), Number(e[7] || 0), Number(e[8] || 0), Number(e[10] || 0), e[12] ? Number("0." + e[12]) * 1e3 : 0));
    if (Fn(r)) {
      var n = null;
      return e[13] && (n = (e[15] === "-" ? -1 : 1) * (Number(e[16] || 0) * 60 + Number(e[18] || 0))), {
        marker: r,
        isTimeUnspecified: !e[6],
        timeZoneOffset: n
      };
    }
  }
  return null;
}
var ys = function() {
  function t(e) {
    var r = this.timeZone = e.timeZone, n = r !== "local" && r !== "UTC";
    e.namedTimeZoneImpl && n && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(r)), this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl), this.calendarSystem = ps(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, e.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof e.firstDay == "number" && (this.weekDow = e.firstDay), typeof e.weekNumberCalculation == "function" && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = e.weekText != null ? e.weekText : e.locale.options.weekText, this.weekTextLong = (e.weekTextLong != null ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
  }
  return t.prototype.createMarker = function(e) {
    var r = this.createMarkerMeta(e);
    return r === null ? null : r.marker;
  }, t.prototype.createNowMarker = function() {
    return this.canComputeOffset ? this.timestampToMarker(new Date().valueOf()) : F(Yr(new Date()));
  }, t.prototype.createMarkerMeta = function(e) {
    if (typeof e == "string")
      return this.parse(e);
    var r = null;
    return typeof e == "number" ? r = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (r = this.timestampToMarker(e))) : Array.isArray(e) && (r = F(e)), r === null || !Fn(r) ? null : { marker: r, isTimeUnspecified: !1, forcedTzo: null };
  }, t.prototype.parse = function(e) {
    var r = ms(e);
    if (r === null)
      return null;
    var n = r.marker, i = null;
    return r.timeZoneOffset !== null && (this.canComputeOffset ? n = this.timestampToMarker(n.valueOf() - r.timeZoneOffset * 60 * 1e3) : i = r.timeZoneOffset), { marker: n, isTimeUnspecified: r.isTimeUnspecified, forcedTzo: i };
  }, t.prototype.getYear = function(e) {
    return this.calendarSystem.getMarkerYear(e);
  }, t.prototype.getMonth = function(e) {
    return this.calendarSystem.getMarkerMonth(e);
  }, t.prototype.add = function(e, r) {
    var n = this.calendarSystem.markerToArray(e);
    return n[0] += r.years, n[1] += r.months, n[2] += r.days, n[6] += r.milliseconds, this.calendarSystem.arrayToMarker(n);
  }, t.prototype.subtract = function(e, r) {
    var n = this.calendarSystem.markerToArray(e);
    return n[0] -= r.years, n[1] -= r.months, n[2] -= r.days, n[6] -= r.milliseconds, this.calendarSystem.arrayToMarker(n);
  }, t.prototype.addYears = function(e, r) {
    var n = this.calendarSystem.markerToArray(e);
    return n[0] += r, this.calendarSystem.arrayToMarker(n);
  }, t.prototype.addMonths = function(e, r) {
    var n = this.calendarSystem.markerToArray(e);
    return n[1] += r, this.calendarSystem.arrayToMarker(n);
  }, t.prototype.diffWholeYears = function(e, r) {
    var n = this.calendarSystem;
    return Q(e) === Q(r) && n.getMarkerDay(e) === n.getMarkerDay(r) && n.getMarkerMonth(e) === n.getMarkerMonth(r) ? n.getMarkerYear(r) - n.getMarkerYear(e) : null;
  }, t.prototype.diffWholeMonths = function(e, r) {
    var n = this.calendarSystem;
    return Q(e) === Q(r) && n.getMarkerDay(e) === n.getMarkerDay(r) ? n.getMarkerMonth(r) - n.getMarkerMonth(e) + (n.getMarkerYear(r) - n.getMarkerYear(e)) * 12 : null;
  }, t.prototype.greatestWholeUnit = function(e, r) {
    var n = this.diffWholeYears(e, r);
    return n !== null ? { unit: "year", value: n } : (n = this.diffWholeMonths(e, r), n !== null ? { unit: "month", value: n } : (n = Ka(e, r), n !== null ? { unit: "week", value: n } : (n = Qe(e, r), n !== null ? { unit: "day", value: n } : (n = ja(e, r), Dt(n) ? { unit: "hour", value: n } : (n = Za(e, r), Dt(n) ? { unit: "minute", value: n } : (n = Xa(e, r), Dt(n) ? { unit: "second", value: n } : { unit: "millisecond", value: r.valueOf() - e.valueOf() }))))));
  }, t.prototype.countDurationsBetween = function(e, r, n) {
    var i;
    return n.years && (i = this.diffWholeYears(e, r), i !== null) ? i / fo(n) : n.months && (i = this.diffWholeMonths(e, r), i !== null) ? i / vo(n) : n.days && (i = Qe(e, r), i !== null) ? i / he(n) : (r.valueOf() - e.valueOf()) / xe(n);
  }, t.prototype.startOf = function(e, r) {
    return r === "year" ? this.startOfYear(e) : r === "month" ? this.startOfMonth(e) : r === "week" ? this.startOfWeek(e) : r === "day" ? H(e) : r === "hour" ? Ja(e) : r === "minute" ? Qa(e) : r === "second" ? eo(e) : null;
  }, t.prototype.startOfYear = function(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e)
    ]);
  }, t.prototype.startOfMonth = function(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e),
      this.calendarSystem.getMarkerMonth(e)
    ]);
  }, t.prototype.startOfWeek = function(e) {
    return this.calendarSystem.arrayToMarker([
      this.calendarSystem.getMarkerYear(e),
      this.calendarSystem.getMarkerMonth(e),
      e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7
    ]);
  }, t.prototype.computeWeekNumber = function(e) {
    return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : to(e, this.weekDow, this.weekDoy);
  }, t.prototype.format = function(e, r, n) {
    return n === void 0 && (n = {}), r.format({
      marker: e,
      timeZoneOffset: n.forcedTzo != null ? n.forcedTzo : this.offsetForMarker(e)
    }, this);
  }, t.prototype.formatRange = function(e, r, n, i) {
    return i === void 0 && (i = {}), i.isEndExclusive && (r = le(r, -1)), n.formatRange({
      marker: e,
      timeZoneOffset: i.forcedStartTzo != null ? i.forcedStartTzo : this.offsetForMarker(e)
    }, {
      marker: r,
      timeZoneOffset: i.forcedEndTzo != null ? i.forcedEndTzo : this.offsetForMarker(r)
    }, this, i.defaultSeparator);
  }, t.prototype.formatIso = function(e, r) {
    r === void 0 && (r = {});
    var n = null;
    return r.omitTimeZoneOffset || (r.forcedTzo != null ? n = r.forcedTzo : n = this.offsetForMarker(e)), po(e, n, r.omitTime);
  }, t.prototype.timestampToMarker = function(e) {
    return this.timeZone === "local" ? F(Yr(new Date(e))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(e) : F(this.namedTimeZoneImpl.timestampToArray(e));
  }, t.prototype.offsetForMarker = function(e) {
    return this.timeZone === "local" ? -jr(J(e)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(J(e)) : null;
  }, t.prototype.toDate = function(e, r) {
    return this.timeZone === "local" ? jr(J(e)) : this.timeZone === "UTC" ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - this.namedTimeZoneImpl.offsetForArray(J(e)) * 1e3 * 60) : new Date(e.valueOf() - (r || 0));
  }, t;
}(), Es = [], oi = {
  code: "en",
  week: {
    dow: 0,
    doy: 4
  },
  direction: "ltr",
  buttonText: {
    prev: "prev",
    next: "next",
    prevYear: "prev year",
    nextYear: "next year",
    year: "year",
    today: "today",
    month: "month",
    week: "week",
    day: "day",
    list: "list"
  },
  weekText: "W",
  weekTextLong: "Week",
  closeHint: "Close",
  timeHint: "Time",
  eventHint: "Event",
  allDayText: "all-day",
  moreLinkText: "more",
  noEventsText: "No events to display"
}, si = h(h({}, oi), {
  buttonHints: {
    prev: "Previous $0",
    next: "Next $0",
    today: function(t, e) {
      return e === "day" ? "Today" : "This " + t;
    }
  },
  viewHint: "$0 view",
  navLinkHint: "Go to $0",
  moreLinkHint: function(t) {
    return "Show " + t + " more event" + (t === 1 ? "" : "s");
  }
});
function Ss(t) {
  for (var e = t.length > 0 ? t[0].code : "en", r = Es.concat(t), n = {
    en: si
  }, i = 0, a = r; i < a.length; i++) {
    var o = a[i];
    n[o.code] = o;
  }
  return {
    map: n,
    defaultCode: e
  };
}
function li(t, e) {
  return typeof t == "object" && !Array.isArray(t) ? ui(t.code, [t.code], t) : bs(t, e);
}
function bs(t, e) {
  var r = [].concat(t || []), n = Ds(r, e) || si;
  return ui(t, r, n);
}
function Ds(t, e) {
  for (var r = 0; r < t.length; r += 1)
    for (var n = t[r].toLocaleLowerCase().split("-"), i = n.length; i > 0; i -= 1) {
      var a = n.slice(0, i).join("-");
      if (e[a])
        return e[a];
    }
  return null;
}
function ui(t, e, r) {
  var n = Qt([oi, r], ["buttonText"]);
  delete n.code;
  var i = n.week;
  return delete n.week, {
    codeArg: t,
    codes: e,
    week: i,
    simpleNumberFormat: new Intl.NumberFormat(t),
    options: n
  };
}
var Cs = {
  startTime: "09:00",
  endTime: "17:00",
  daysOfWeek: [1, 2, 3, 4, 5],
  display: "inverse-background",
  classNames: "fc-non-business",
  groupId: "_businessHours"
};
function Rs(t, e) {
  return nt(ws(t), null, e);
}
function ws(t) {
  var e;
  return t === !0 ? e = [{}] : Array.isArray(t) ? e = t.filter(function(r) {
    return r.daysOfWeek;
  }) : typeof t == "object" && t ? e = [t] : e = [], e = e.map(function(r) {
    return h(h({}, Cs), r);
  }), e;
}
function Ts(t, e) {
  return t.left >= e.left && t.left < e.right && t.top >= e.top && t.top < e.bottom;
}
function ci(t, e) {
  var r = {
    left: Math.max(t.left, e.left),
    right: Math.min(t.right, e.right),
    top: Math.max(t.top, e.top),
    bottom: Math.min(t.bottom, e.bottom)
  };
  return r.left < r.right && r.top < r.bottom ? r : !1;
}
function _s(t, e) {
  return {
    left: Math.min(Math.max(t.left, e.left), e.right),
    top: Math.min(Math.max(t.top, e.top), e.bottom)
  };
}
function Ms(t) {
  return {
    left: (t.left + t.right) / 2,
    top: (t.top + t.bottom) / 2
  };
}
function ks(t, e) {
  return {
    left: t.left - e.left,
    top: t.top - e.top
  };
}
var Tt;
function fi() {
  return Tt == null && (Tt = Is()), Tt;
}
function Is() {
  if (typeof document > "u")
    return !0;
  var t = document.createElement("div");
  t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.innerHTML = "<table><tr><td><div></div></td></tr></table>", t.querySelector("table").style.height = "100px", t.querySelector("div").style.height = "100%", document.body.appendChild(t);
  var e = t.querySelector("div"), r = e.offsetHeight > 0;
  return document.body.removeChild(t), r;
}
function di(t, e, r, n) {
  return {
    dow: t.getUTCDay(),
    isDisabled: Boolean(n && !ae(n.activeRange, t)),
    isOther: Boolean(n && !ae(n.currentRange, t)),
    isToday: Boolean(e && ae(e, t)),
    isPast: Boolean(r ? t < r : e ? t < e.start : !1),
    isFuture: Boolean(r ? t > r : e ? t >= e.end : !1)
  };
}
function ur(t, e) {
  var r = [
    "fc-day",
    "fc-day-" + qa[t.dow]
  ];
  return t.isDisabled ? r.push("fc-day-disabled") : (t.isToday && (r.push("fc-day-today"), r.push(e.getClass("today"))), t.isPast && r.push("fc-day-past"), t.isFuture && r.push("fc-day-future"), t.isOther && r.push("fc-day-other")), r;
}
var Ps = V({ year: "numeric", month: "long", day: "numeric" }), Hs = V({ week: "long" });
function cr(t, e, r, n) {
  r === void 0 && (r = "day"), n === void 0 && (n = !0);
  var i = t.dateEnv, a = t.options, o = t.calendarApi, s = i.format(e, r === "week" ? Hs : Ps);
  if (a.navLinks) {
    var l = i.toDate(e), u = function(c) {
      var f = r === "day" ? a.navLinkDayClick : r === "week" ? a.navLinkWeekClick : null;
      typeof f == "function" ? f.call(o, i.toDate(e), c) : (typeof f == "string" && (r = f), o.zoomTo(e, r));
    };
    return h({ title: Me(a.navLinkHint, [s, l], s), "data-navlink": "" }, n ? Wn(u) : { onClick: u });
  }
  return { "aria-label": s };
}
var _t = null;
function xs() {
  return _t === null && (_t = As()), _t;
}
function As() {
  var t = document.createElement("div");
  _e(t, {
    position: "absolute",
    top: -1e3,
    left: 0,
    border: 0,
    padding: 0,
    overflow: "scroll",
    direction: "rtl"
  }), t.innerHTML = "<div></div>", document.body.appendChild(t);
  var e = t.firstChild, r = e.getBoundingClientRect().left > t.getBoundingClientRect().left;
  return Xt(t), r;
}
var Mt;
function Ns() {
  return Mt || (Mt = Os()), Mt;
}
function Os() {
  var t = document.createElement("div");
  t.style.overflow = "scroll", t.style.position = "absolute", t.style.top = "-9999px", t.style.left = "-9999px", document.body.appendChild(t);
  var e = vi(t);
  return document.body.removeChild(t), e;
}
function vi(t) {
  return {
    x: t.offsetHeight - t.clientHeight,
    y: t.offsetWidth - t.clientWidth
  };
}
function Ls(t, e) {
  e === void 0 && (e = !1);
  var r = window.getComputedStyle(t), n = parseInt(r.borderLeftWidth, 10) || 0, i = parseInt(r.borderRightWidth, 10) || 0, a = parseInt(r.borderTopWidth, 10) || 0, o = parseInt(r.borderBottomWidth, 10) || 0, s = vi(t), l = s.y - n - i, u = s.x - a - o, c = {
    borderLeft: n,
    borderRight: i,
    borderTop: a,
    borderBottom: o,
    scrollbarBottom: u,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };
  return xs() && r.direction === "rtl" ? c.scrollbarLeft = l : c.scrollbarRight = l, e && (c.paddingLeft = parseInt(r.paddingLeft, 10) || 0, c.paddingRight = parseInt(r.paddingRight, 10) || 0, c.paddingTop = parseInt(r.paddingTop, 10) || 0, c.paddingBottom = parseInt(r.paddingBottom, 10) || 0), c;
}
function Vs(t, e, r) {
  e === void 0 && (e = !1);
  var n = r ? t.getBoundingClientRect() : fr(t), i = Ls(t, e), a = {
    left: n.left + i.borderLeft + i.scrollbarLeft,
    right: n.right - i.borderRight - i.scrollbarRight,
    top: n.top + i.borderTop,
    bottom: n.bottom - i.borderBottom - i.scrollbarBottom
  };
  return e && (a.left += i.paddingLeft, a.right -= i.paddingRight, a.top += i.paddingTop, a.bottom -= i.paddingBottom), a;
}
function fr(t) {
  var e = t.getBoundingClientRect();
  return {
    left: e.left + window.pageXOffset,
    top: e.top + window.pageYOffset,
    right: e.right + window.pageXOffset,
    bottom: e.bottom + window.pageYOffset
  };
}
function Us(t) {
  for (var e = pi(t), r = t.getBoundingClientRect(), n = 0, i = e; n < i.length; n++) {
    var a = i[n], o = ci(r, a.getBoundingClientRect());
    if (o)
      r = o;
    else
      return null;
  }
  return r;
}
function pi(t) {
  for (var e = []; t instanceof HTMLElement; ) {
    var r = window.getComputedStyle(t);
    if (r.position === "fixed")
      break;
    /(auto|scroll)/.test(r.overflow + r.overflowY + r.overflowX) && e.push(t), t = t.parentNode;
  }
  return e;
}
function Ws(t, e, r) {
  var n = !1, i = function() {
    n || (n = !0, e.apply(this, arguments));
  }, a = function() {
    n || (n = !0, r && r.apply(this, arguments));
  }, o = t(i, a);
  o && typeof o.then == "function" && o.then(i, a);
}
var vt = function() {
  function t() {
    this.handlers = {}, this.thisContext = null;
  }
  return t.prototype.setThisContext = function(e) {
    this.thisContext = e;
  }, t.prototype.setOptions = function(e) {
    this.options = e;
  }, t.prototype.on = function(e, r) {
    Bs(this.handlers, e, r);
  }, t.prototype.off = function(e, r) {
    Fs(this.handlers, e, r);
  }, t.prototype.trigger = function(e) {
    for (var r = [], n = 1; n < arguments.length; n++)
      r[n - 1] = arguments[n];
    for (var i = this.handlers[e] || [], a = this.options && this.options[e], o = [].concat(a || [], i), s = 0, l = o; s < l.length; s++) {
      var u = l[s];
      u.apply(this.thisContext, r);
    }
  }, t.prototype.hasHandlers = function(e) {
    return Boolean(this.handlers[e] && this.handlers[e].length || this.options && this.options[e]);
  }, t;
}();
function Bs(t, e, r) {
  (t[e] || (t[e] = [])).push(r);
}
function Fs(t, e, r) {
  r ? t[e] && (t[e] = t[e].filter(function(n) {
    return n !== r;
  })) : delete t[e];
}
var Bt = function() {
  function t(e, r, n, i) {
    this.els = r;
    var a = this.originClientRect = e.getBoundingClientRect();
    n && this.buildElHorizontals(a.left), i && this.buildElVerticals(a.top);
  }
  return t.prototype.buildElHorizontals = function(e) {
    for (var r = [], n = [], i = 0, a = this.els; i < a.length; i++) {
      var o = a[i], s = o.getBoundingClientRect();
      r.push(s.left - e), n.push(s.right - e);
    }
    this.lefts = r, this.rights = n;
  }, t.prototype.buildElVerticals = function(e) {
    for (var r = [], n = [], i = 0, a = this.els; i < a.length; i++) {
      var o = a[i], s = o.getBoundingClientRect();
      r.push(s.top - e), n.push(s.bottom - e);
    }
    this.tops = r, this.bottoms = n;
  }, t.prototype.leftToIndex = function(e) {
    var r = this, n = r.lefts, i = r.rights, a = n.length, o;
    for (o = 0; o < a; o += 1)
      if (e >= n[o] && e < i[o])
        return o;
  }, t.prototype.topToIndex = function(e) {
    var r = this, n = r.tops, i = r.bottoms, a = n.length, o;
    for (o = 0; o < a; o += 1)
      if (e >= n[o] && e < i[o])
        return o;
  }, t.prototype.getWidth = function(e) {
    return this.rights[e] - this.lefts[e];
  }, t.prototype.getHeight = function(e) {
    return this.bottoms[e] - this.tops[e];
  }, t;
}(), dr = function() {
  function t() {
  }
  return t.prototype.getMaxScrollTop = function() {
    return this.getScrollHeight() - this.getClientHeight();
  }, t.prototype.getMaxScrollLeft = function() {
    return this.getScrollWidth() - this.getClientWidth();
  }, t.prototype.canScrollVertically = function() {
    return this.getMaxScrollTop() > 0;
  }, t.prototype.canScrollHorizontally = function() {
    return this.getMaxScrollLeft() > 0;
  }, t.prototype.canScrollUp = function() {
    return this.getScrollTop() > 0;
  }, t.prototype.canScrollDown = function() {
    return this.getScrollTop() < this.getMaxScrollTop();
  }, t.prototype.canScrollLeft = function() {
    return this.getScrollLeft() > 0;
  }, t.prototype.canScrollRight = function() {
    return this.getScrollLeft() < this.getMaxScrollLeft();
  }, t;
}(), zs = function(t) {
  R(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.el = r, n;
  }
  return e.prototype.getScrollTop = function() {
    return this.el.scrollTop;
  }, e.prototype.getScrollLeft = function() {
    return this.el.scrollLeft;
  }, e.prototype.setScrollTop = function(r) {
    this.el.scrollTop = r;
  }, e.prototype.setScrollLeft = function(r) {
    this.el.scrollLeft = r;
  }, e.prototype.getScrollWidth = function() {
    return this.el.scrollWidth;
  }, e.prototype.getScrollHeight = function() {
    return this.el.scrollHeight;
  }, e.prototype.getClientHeight = function() {
    return this.el.clientHeight;
  }, e.prototype.getClientWidth = function() {
    return this.el.clientWidth;
  }, e;
}(dr), Gs = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.getScrollTop = function() {
    return window.pageYOffset;
  }, e.prototype.getScrollLeft = function() {
    return window.pageXOffset;
  }, e.prototype.setScrollTop = function(r) {
    window.scroll(window.pageXOffset, r);
  }, e.prototype.setScrollLeft = function(r) {
    window.scroll(r, window.pageYOffset);
  }, e.prototype.getScrollWidth = function() {
    return document.documentElement.scrollWidth;
  }, e.prototype.getScrollHeight = function() {
    return document.documentElement.scrollHeight;
  }, e.prototype.getClientHeight = function() {
    return document.documentElement.clientHeight;
  }, e.prototype.getClientWidth = function() {
    return document.documentElement.clientWidth;
  }, e;
}(dr), Oe = function() {
  function t(e) {
    this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption]);
  }
  return t.prototype.setIconOverride = function(e) {
    var r, n;
    if (typeof e == "object" && e) {
      r = h({}, this.iconClasses);
      for (n in e)
        r[n] = this.applyIconOverridePrefix(e[n]);
      this.iconClasses = r;
    } else
      e === !1 && (this.iconClasses = {});
  }, t.prototype.applyIconOverridePrefix = function(e) {
    var r = this.iconOverridePrefix;
    return r && e.indexOf(r) !== 0 && (e = r + e), e;
  }, t.prototype.getClass = function(e) {
    return this.classes[e] || "";
  }, t.prototype.getIconClass = function(e, r) {
    var n;
    return r && this.rtlIconClasses ? n = this.rtlIconClasses[e] || this.iconClasses[e] : n = this.iconClasses[e], n ? this.baseIconClass + " " + n : "";
  }, t.prototype.getCustomButtonIconClass = function(e) {
    var r;
    return this.iconOverrideCustomButtonOption && (r = e[this.iconOverrideCustomButtonOption], r) ? this.baseIconClass + " " + this.applyIconOverridePrefix(r) : "";
  }, t;
}();
Oe.prototype.classes = {};
Oe.prototype.iconClasses = {};
Oe.prototype.baseIconClass = "";
Oe.prototype.iconOverridePrefix = "";
var qs = function() {
  function t(e, r, n, i) {
    var a = this;
    this.execFunc = e, this.emitter = r, this.scrollTime = n, this.scrollTimeReset = i, this.handleScrollRequest = function(o) {
      a.queuedRequest = h({}, a.queuedRequest || {}, o), a.drain();
    }, r.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll();
  }
  return t.prototype.detach = function() {
    this.emitter.off("_scrollRequest", this.handleScrollRequest);
  }, t.prototype.update = function(e) {
    e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
  }, t.prototype.fireInitialScroll = function() {
    this.handleScrollRequest({
      time: this.scrollTime
    });
  }, t.prototype.drain = function() {
    this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null);
  }, t;
}(), fe = Nn({});
function Ys(t, e, r, n, i, a, o, s, l, u, c, f, d) {
  return {
    dateEnv: i,
    options: r,
    pluginHooks: o,
    emitter: u,
    dispatch: s,
    getCurrentData: l,
    calendarApi: c,
    viewSpec: t,
    viewApi: e,
    dateProfileGenerator: n,
    theme: a,
    isRtl: r.direction === "rtl",
    addResizeHandler: function(v) {
      u.on("_resize", v);
    },
    removeResizeHandler: function(v) {
      u.off("_resize", v);
    },
    createScrollResponder: function(v) {
      return new qs(v, u, I(r.scrollTime), r.scrollTimeReset);
    },
    registerInteractiveComponent: f,
    unregisterInteractiveComponent: d
  };
}
var pt = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.shouldComponentUpdate = function(r, n) {
    return this.debug && console.log(Zr(r, this.props), Zr(n, this.state)), !Rt(this.props, r, this.propEquality) || !Rt(this.state, n, this.stateEquality);
  }, e.prototype.safeSetState = function(r) {
    Rt(this.state, h(h({}, this.state), r), this.stateEquality) || this.setState(r);
  }, e.addPropsEquality = js, e.addStateEquality = Zs, e.contextType = fe, e;
}(Zt);
pt.prototype.propEquality = {};
pt.prototype.stateEquality = {};
var x = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.contextType = fe, e;
}(pt);
function js(t) {
  var e = Object.create(this.prototype.propEquality);
  h(e, t), this.prototype.propEquality = e;
}
function Zs(t) {
  var e = Object.create(this.prototype.stateEquality);
  h(e, t), this.prototype.stateEquality = e;
}
function $(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
var Ce = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.uid = be(), r;
  }
  return e.prototype.prepareHits = function() {
  }, e.prototype.queryHit = function(r, n, i, a) {
    return null;
  }, e.prototype.isValidSegDownEl = function(r) {
    return !this.props.eventDrag && !this.props.eventResize && !U(r, ".fc-event-mirror");
  }, e.prototype.isValidDateDownEl = function(r) {
    return !U(r, ".fc-event:not(.fc-bg-event)") && !U(r, ".fc-more-link") && !U(r, "a[data-navlink]") && !U(r, ".fc-popover");
  }, e;
}(x);
function te(t) {
  return {
    id: be(),
    deps: t.deps || [],
    reducers: t.reducers || [],
    isLoadingFuncs: t.isLoadingFuncs || [],
    contextInit: [].concat(t.contextInit || []),
    eventRefiners: t.eventRefiners || {},
    eventDefMemberAdders: t.eventDefMemberAdders || [],
    eventSourceRefiners: t.eventSourceRefiners || {},
    isDraggableTransformers: t.isDraggableTransformers || [],
    eventDragMutationMassagers: t.eventDragMutationMassagers || [],
    eventDefMutationAppliers: t.eventDefMutationAppliers || [],
    dateSelectionTransformers: t.dateSelectionTransformers || [],
    datePointTransforms: t.datePointTransforms || [],
    dateSpanTransforms: t.dateSpanTransforms || [],
    views: t.views || {},
    viewPropsTransformers: t.viewPropsTransformers || [],
    isPropsValid: t.isPropsValid || null,
    externalDefTransforms: t.externalDefTransforms || [],
    viewContainerAppends: t.viewContainerAppends || [],
    eventDropTransformers: t.eventDropTransformers || [],
    componentInteractions: t.componentInteractions || [],
    calendarInteractions: t.calendarInteractions || [],
    themeClasses: t.themeClasses || {},
    eventSourceDefs: t.eventSourceDefs || [],
    cmdFormatter: t.cmdFormatter,
    recurringTypes: t.recurringTypes || [],
    namedTimeZonedImpl: t.namedTimeZonedImpl,
    initialView: t.initialView || "",
    elementDraggingImpl: t.elementDraggingImpl,
    optionChangeHandlers: t.optionChangeHandlers || {},
    scrollGridImpl: t.scrollGridImpl || null,
    contentTypeHandlers: t.contentTypeHandlers || {},
    listenerRefiners: t.listenerRefiners || {},
    optionRefiners: t.optionRefiners || {},
    propSetHandlers: t.propSetHandlers || {}
  };
}
function Xs(t, e) {
  var r = {}, n = {
    reducers: [],
    isLoadingFuncs: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    themeClasses: {},
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    namedTimeZonedImpl: null,
    initialView: "",
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollGridImpl: null,
    contentTypeHandlers: {},
    listenerRefiners: {},
    optionRefiners: {},
    propSetHandlers: {}
  };
  function i(a) {
    for (var o = 0, s = a; o < s.length; o++) {
      var l = s[o];
      r[l.id] || (r[l.id] = !0, i(l.deps), n = Ks(n, l));
    }
  }
  return t && i(t), i(e), n;
}
function $s() {
  var t = [], e = [], r;
  return function(n, i) {
    return (!r || !Ee(n, t) || !Ee(i, e)) && (r = Xs(n, i)), t = n, e = i, r;
  };
}
function Ks(t, e) {
  return {
    reducers: t.reducers.concat(e.reducers),
    isLoadingFuncs: t.isLoadingFuncs.concat(e.isLoadingFuncs),
    contextInit: t.contextInit.concat(e.contextInit),
    eventRefiners: h(h({}, t.eventRefiners), e.eventRefiners),
    eventDefMemberAdders: t.eventDefMemberAdders.concat(e.eventDefMemberAdders),
    eventSourceRefiners: h(h({}, t.eventSourceRefiners), e.eventSourceRefiners),
    isDraggableTransformers: t.isDraggableTransformers.concat(e.isDraggableTransformers),
    eventDragMutationMassagers: t.eventDragMutationMassagers.concat(e.eventDragMutationMassagers),
    eventDefMutationAppliers: t.eventDefMutationAppliers.concat(e.eventDefMutationAppliers),
    dateSelectionTransformers: t.dateSelectionTransformers.concat(e.dateSelectionTransformers),
    datePointTransforms: t.datePointTransforms.concat(e.datePointTransforms),
    dateSpanTransforms: t.dateSpanTransforms.concat(e.dateSpanTransforms),
    views: h(h({}, t.views), e.views),
    viewPropsTransformers: t.viewPropsTransformers.concat(e.viewPropsTransformers),
    isPropsValid: e.isPropsValid || t.isPropsValid,
    externalDefTransforms: t.externalDefTransforms.concat(e.externalDefTransforms),
    viewContainerAppends: t.viewContainerAppends.concat(e.viewContainerAppends),
    eventDropTransformers: t.eventDropTransformers.concat(e.eventDropTransformers),
    calendarInteractions: t.calendarInteractions.concat(e.calendarInteractions),
    componentInteractions: t.componentInteractions.concat(e.componentInteractions),
    themeClasses: h(h({}, t.themeClasses), e.themeClasses),
    eventSourceDefs: t.eventSourceDefs.concat(e.eventSourceDefs),
    cmdFormatter: e.cmdFormatter || t.cmdFormatter,
    recurringTypes: t.recurringTypes.concat(e.recurringTypes),
    namedTimeZonedImpl: e.namedTimeZonedImpl || t.namedTimeZonedImpl,
    initialView: t.initialView || e.initialView,
    elementDraggingImpl: t.elementDraggingImpl || e.elementDraggingImpl,
    optionChangeHandlers: h(h({}, t.optionChangeHandlers), e.optionChangeHandlers),
    scrollGridImpl: e.scrollGridImpl || t.scrollGridImpl,
    contentTypeHandlers: h(h({}, t.contentTypeHandlers), e.contentTypeHandlers),
    listenerRefiners: h(h({}, t.listenerRefiners), e.listenerRefiners),
    optionRefiners: h(h({}, t.optionRefiners), e.optionRefiners),
    propSetHandlers: h(h({}, t.propSetHandlers), e.propSetHandlers)
  };
}
var re = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(Oe);
re.prototype.classes = {
  root: "fc-theme-standard",
  tableCellShaded: "fc-cell-shaded",
  buttonGroup: "fc-button-group",
  button: "fc-button fc-button-primary",
  buttonActive: "fc-button-active"
};
re.prototype.baseIconClass = "fc-icon";
re.prototype.iconClasses = {
  close: "fc-icon-x",
  prev: "fc-icon-chevron-left",
  next: "fc-icon-chevron-right",
  prevYear: "fc-icon-chevrons-left",
  nextYear: "fc-icon-chevrons-right"
};
re.prototype.rtlIconClasses = {
  prev: "fc-icon-chevron-right",
  next: "fc-icon-chevron-left",
  prevYear: "fc-icon-chevrons-right",
  nextYear: "fc-icon-chevrons-left"
};
re.prototype.iconOverrideOption = "buttonIcons";
re.prototype.iconOverrideCustomButtonOption = "icon";
re.prototype.iconOverridePrefix = "fc-icon-";
function Js(t, e) {
  var r = {}, n;
  for (n in t)
    Ft(n, r, t, e);
  for (n in e)
    Ft(n, r, t, e);
  return r;
}
function Ft(t, e, r, n) {
  if (e[t])
    return e[t];
  var i = Qs(t, e, r, n);
  return i && (e[t] = i), i;
}
function Qs(t, e, r, n) {
  var i = r[t], a = n[t], o = function(c) {
    return i && i[c] !== null ? i[c] : a && a[c] !== null ? a[c] : null;
  }, s = o("component"), l = o("superType"), u = null;
  if (l) {
    if (l === t)
      throw new Error("Can't have a custom view type that references itself");
    u = Ft(l, e, r, n);
  }
  return !s && u && (s = u.component), s ? {
    type: t,
    component: s,
    defaults: h(h({}, u ? u.defaults : {}), i ? i.rawOptions : {}),
    overrides: h(h({}, u ? u.overrides : {}), a ? a.rawOptions : {})
  } : null;
}
var Re = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.rootElRef = G(), r.handleRootEl = function(n) {
      $(r.rootElRef, n), r.props.elRef && $(r.props.elRef, n);
    }, r;
  }
  return e.prototype.render = function() {
    var r = this, n = this.props, i = n.hookProps;
    return m(vr, { hookProps: i, didMount: n.didMount, willUnmount: n.willUnmount, elRef: this.handleRootEl }, function(a) {
      return m(gi, { hookProps: i, content: n.content, defaultContent: n.defaultContent, backupElRef: r.rootElRef }, function(o, s) {
        return n.children(a, yi(n.classNames, i), o, s);
      });
    });
  }, e;
}(x), hi = Nn(0);
function gi(t) {
  return m(hi.Consumer, null, function(e) {
    return m(el, h({ renderId: e }, t));
  });
}
var el = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.innerElRef = G(), r;
  }
  return e.prototype.render = function() {
    return this.props.children(this.innerElRef, this.renderInnerContent());
  }, e.prototype.componentDidMount = function() {
    this.updateCustomContent();
  }, e.prototype.componentDidUpdate = function() {
    this.updateCustomContent();
  }, e.prototype.componentWillUnmount = function() {
    this.customContentInfo && this.customContentInfo.destroy && this.customContentInfo.destroy();
  }, e.prototype.renderInnerContent = function() {
    var r = this.customContentInfo, n = this.getInnerContent(), i = this.getContentMeta(n);
    return !r || r.contentKey !== i.contentKey ? (r && (r.destroy && r.destroy(), r = this.customContentInfo = null), i.contentKey && (r = this.customContentInfo = h({ contentKey: i.contentKey, contentVal: n[i.contentKey] }, i.buildLifecycleFuncs()))) : r && (r.contentVal = n[i.contentKey]), r ? [] : n;
  }, e.prototype.getInnerContent = function() {
    var r = this.props, n = sn(r.content, r.hookProps);
    return n === void 0 && (n = sn(r.defaultContent, r.hookProps)), n == null ? null : n;
  }, e.prototype.getContentMeta = function(r) {
    var n = this.context.pluginHooks.contentTypeHandlers, i = "", a = null;
    if (r) {
      for (var o in n)
        if (r[o] !== void 0) {
          i = o, a = n[o];
          break;
        }
    }
    return { contentKey: i, buildLifecycleFuncs: a };
  }, e.prototype.updateCustomContent = function() {
    this.customContentInfo && this.customContentInfo.render(
      this.innerElRef.current || this.props.backupElRef.current,
      this.customContentInfo.contentVal
    );
  }, e;
}(x), vr = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.handleRootEl = function(n) {
      r.rootEl = n, r.props.elRef && $(r.props.elRef, n);
    }, r;
  }
  return e.prototype.render = function() {
    return this.props.children(this.handleRootEl);
  }, e.prototype.componentDidMount = function() {
    var r = this.props.didMount;
    r && r(h(h({}, this.props.hookProps), { el: this.rootEl }));
  }, e.prototype.componentWillUnmount = function() {
    var r = this.props.willUnmount;
    r && r(h(h({}, this.props.hookProps), { el: this.rootEl }));
  }, e;
}(x);
function mi() {
  var t, e, r = [];
  return function(n, i) {
    return (!e || !X(e, i) || n !== t) && (t = n, e = i, r = yi(n, i)), r;
  };
}
function yi(t, e) {
  return typeof t == "function" && (t = t(e)), Ut(t);
}
function sn(t, e) {
  return typeof t == "function" ? t(e, m) : t;
}
var zt = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.normalizeClassNames = mi(), r;
  }
  return e.prototype.render = function() {
    var r = this, n = r.props, i = r.context, a = i.options, o = { view: i.viewApi }, s = this.normalizeClassNames(a.viewClassNames, o);
    return m(vr, { hookProps: o, didMount: a.viewDidMount, willUnmount: a.viewWillUnmount, elRef: n.elRef }, function(l) {
      return n.children(l, ["fc-" + n.viewSpec.type + "-view", "fc-view"].concat(s));
    });
  }, e;
}(x);
function ln(t) {
  return ce(t, tl);
}
function tl(t) {
  var e = typeof t == "function" ? { component: t } : t, r = e.component;
  return e.content && (r = rl(e)), {
    superType: e.type,
    component: r,
    rawOptions: e
  };
}
function rl(t) {
  return function(e) {
    return m(fe.Consumer, null, function(r) {
      return m(zt, { viewSpec: r.viewSpec }, function(n, i) {
        var a = h(h({}, e), { nextDayThreshold: r.options.nextDayThreshold });
        return m(Re, { hookProps: a, classNames: t.classNames, content: t.content, didMount: t.didMount, willUnmount: t.willUnmount, elRef: n }, function(o, s, l, u) {
          return m("div", { className: i.concat(s).join(" "), ref: o }, u);
        });
      });
    });
  };
}
function nl(t, e, r, n) {
  var i = ln(t), a = ln(e.views), o = Js(i, a);
  return ce(o, function(s) {
    return il(s, a, e, r, n);
  });
}
function il(t, e, r, n, i) {
  var a = t.overrides.duration || t.defaults.duration || n.duration || r.duration, o = null, s = "", l = "", u = {};
  if (a && (o = al(a), o)) {
    var c = Lt(o);
    s = c.unit, c.value === 1 && (l = s, u = e[s] ? e[s].rawOptions : {});
  }
  var f = function(v) {
    var p = v.buttonText || {}, E = t.defaults.buttonTextKey;
    return E != null && p[E] != null ? p[E] : p[t.type] != null ? p[t.type] : p[l] != null ? p[l] : null;
  }, d = function(v) {
    var p = v.buttonHints || {}, E = t.defaults.buttonTextKey;
    return E != null && p[E] != null ? p[E] : p[t.type] != null ? p[t.type] : p[l] != null ? p[l] : null;
  };
  return {
    type: t.type,
    component: t.component,
    duration: o,
    durationUnit: s,
    singleUnit: l,
    optionDefaults: t.defaults,
    optionOverrides: h(h({}, u), t.overrides),
    buttonTextOverride: f(n) || f(r) || t.overrides.buttonText,
    buttonTextDefault: f(i) || t.defaults.buttonText || f(ke) || t.type,
    buttonTitleOverride: d(n) || d(r) || t.overrides.buttonHint,
    buttonTitleDefault: d(i) || t.defaults.buttonHint || d(ke)
  };
}
var un = {};
function al(t) {
  var e = JSON.stringify(t), r = un[e];
  return r === void 0 && (r = I(t), un[e] = r), r;
}
var Ei = function() {
  function t(e) {
    this.props = e, this.nowDate = Ne(e.nowInput, e.dateEnv), this.initHiddenDays();
  }
  return t.prototype.buildPrev = function(e, r, n) {
    var i = this.props.dateEnv, a = i.subtract(
      i.startOf(r, e.currentRangeUnit),
      e.dateIncrement
    );
    return this.build(a, -1, n);
  }, t.prototype.buildNext = function(e, r, n) {
    var i = this.props.dateEnv, a = i.add(
      i.startOf(r, e.currentRangeUnit),
      e.dateIncrement
    );
    return this.build(a, 1, n);
  }, t.prototype.build = function(e, r, n) {
    n === void 0 && (n = !0);
    var i = this.props, a, o, s, l, u, c;
    return a = this.buildValidRange(), a = this.trimHiddenDays(a), n && (e = zo(e, a)), o = this.buildCurrentRangeInfo(e, r), s = /^(year|month|week|day)$/.test(o.unit), l = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, s), l = this.trimHiddenDays(l), u = l, i.showNonCurrentDates || (u = Ae(u, o.range)), u = this.adjustActiveRange(u), u = Ae(u, a), c = or(o.range, a), {
      validRange: a,
      currentRange: o.range,
      currentRangeUnit: o.unit,
      isRangeAllDay: s,
      activeRange: u,
      renderRange: l,
      slotMinTime: i.slotMinTime,
      slotMaxTime: i.slotMaxTime,
      isValid: c,
      dateIncrement: this.buildDateIncrement(o.duration)
    };
  }, t.prototype.buildValidRange = function() {
    var e = this.props.validRangeInput, r = typeof e == "function" ? e.call(this.props.calendarApi, this.nowDate) : e;
    return this.refineRange(r) || { start: null, end: null };
  }, t.prototype.buildCurrentRangeInfo = function(e, r) {
    var n = this.props, i = null, a = null, o = null, s;
    return n.duration ? (i = n.duration, a = n.durationUnit, o = this.buildRangeFromDuration(e, r, i, a)) : (s = this.props.dayCount) ? (a = "day", o = this.buildRangeFromDayCount(e, r, s)) : (o = this.buildCustomVisibleRange(e)) ? a = n.dateEnv.greatestWholeUnit(o.start, o.end).unit : (i = this.getFallbackDuration(), a = Lt(i).unit, o = this.buildRangeFromDuration(e, r, i, a)), { duration: i, unit: a, range: o };
  }, t.prototype.getFallbackDuration = function() {
    return I({ day: 1 });
  }, t.prototype.adjustActiveRange = function(e) {
    var r = this.props, n = r.dateEnv, i = r.usesMinMaxTime, a = r.slotMinTime, o = r.slotMaxTime, s = e.start, l = e.end;
    return i && (he(a) < 0 && (s = H(s), s = n.add(s, a)), he(o) > 1 && (l = H(l), l = W(l, -1), l = n.add(l, o))), { start: s, end: l };
  }, t.prototype.buildRangeFromDuration = function(e, r, n, i) {
    var a = this.props, o = a.dateEnv, s = a.dateAlignment, l, u, c;
    if (!s) {
      var f = this.props.dateIncrement;
      f && xe(f) < xe(n) ? s = Lt(f).unit : s = i;
    }
    he(n) <= 1 && this.isHiddenDay(l) && (l = this.skipHiddenDays(l, r), l = H(l));
    function d() {
      l = o.startOf(e, s), u = o.add(l, n), c = { start: l, end: u };
    }
    return d(), this.trimHiddenDays(c) || (e = this.skipHiddenDays(e, r), d()), c;
  }, t.prototype.buildRangeFromDayCount = function(e, r, n) {
    var i = this.props, a = i.dateEnv, o = i.dateAlignment, s = 0, l = e, u;
    o && (l = a.startOf(l, o)), l = H(l), l = this.skipHiddenDays(l, r), u = l;
    do
      u = W(u, 1), this.isHiddenDay(u) || (s += 1);
    while (s < n);
    return { start: l, end: u };
  }, t.prototype.buildCustomVisibleRange = function(e) {
    var r = this.props, n = r.visibleRangeInput, i = typeof n == "function" ? n.call(r.calendarApi, r.dateEnv.toDate(e)) : n, a = this.refineRange(i);
    return a && (a.start == null || a.end == null) ? null : a;
  }, t.prototype.buildRenderRange = function(e, r, n) {
    return e;
  }, t.prototype.buildDateIncrement = function(e) {
    var r = this.props.dateIncrement, n;
    return r || ((n = this.props.dateAlignment) ? I(1, n) : e || I({ days: 1 }));
  }, t.prototype.refineRange = function(e) {
    if (e) {
      var r = Wo(e, this.props.dateEnv);
      return r && (r = Xn(r)), r;
    }
    return null;
  }, t.prototype.initHiddenDays = function() {
    var e = this.props.hiddenDays || [], r = [], n = 0, i;
    for (this.props.weekends === !1 && e.push(0, 6), i = 0; i < 7; i += 1)
      (r[i] = e.indexOf(i) !== -1) || (n += 1);
    if (!n)
      throw new Error("invalid hiddenDays");
    this.isHiddenDayHash = r;
  }, t.prototype.trimHiddenDays = function(e) {
    var r = e.start, n = e.end;
    return r && (r = this.skipHiddenDays(r)), n && (n = this.skipHiddenDays(n, -1, !0)), r == null || n == null || r < n ? { start: r, end: n } : null;
  }, t.prototype.isHiddenDay = function(e) {
    return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e];
  }, t.prototype.skipHiddenDays = function(e, r, n) {
    for (r === void 0 && (r = 1), n === void 0 && (n = !1); this.isHiddenDayHash[(e.getUTCDay() + (n ? r : 0) + 7) % 7]; )
      e = W(e, r);
    return e;
  }, t;
}();
function ol(t, e) {
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      t = e.viewType;
  }
  return t;
}
function sl(t, e) {
  var r;
  switch (e.type) {
    case "SET_OPTION":
      return h(h({}, t), (r = {}, r[e.optionName] = e.rawOptionValue, r));
    default:
      return t;
  }
}
function ll(t, e, r, n) {
  var i;
  switch (e.type) {
    case "CHANGE_VIEW_TYPE":
      return n.build(e.dateMarker || r);
    case "CHANGE_DATE":
      return n.build(e.dateMarker);
    case "PREV":
      if (i = n.buildPrev(t, r), i.isValid)
        return i;
      break;
    case "NEXT":
      if (i = n.buildNext(t, r), i.isValid)
        return i;
      break;
  }
  return t;
}
function ul(t, e, r) {
  var n = e ? e.activeRange : null;
  return bi({}, gl(t, r), n, r);
}
function cl(t, e, r, n) {
  var i = r ? r.activeRange : null;
  switch (e.type) {
    case "ADD_EVENT_SOURCES":
      return bi(t, e.sources, i, n);
    case "REMOVE_EVENT_SOURCE":
      return dl(t, e.sourceId);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return r ? Di(t, i, n) : t;
    case "FETCH_EVENT_SOURCES":
      return pr(t, e.sourceIds ? zn(e.sourceIds) : Ci(t, n), i, e.isRefetch || !1, n);
    case "RECEIVE_EVENTS":
    case "RECEIVE_EVENT_ERROR":
      return hl(t, e.sourceId, e.fetchId, e.fetchRange);
    case "REMOVE_ALL_EVENT_SOURCES":
      return {};
    default:
      return t;
  }
}
function fl(t, e, r) {
  var n = e ? e.activeRange : null;
  return pr(t, Ci(t, r), n, !0, r);
}
function Si(t) {
  for (var e in t)
    if (t[e].isFetching)
      return !0;
  return !1;
}
function bi(t, e, r, n) {
  for (var i = {}, a = 0, o = e; a < o.length; a++) {
    var s = o[a];
    i[s.sourceId] = s;
  }
  return r && (i = Di(i, r, n)), h(h({}, t), i);
}
function dl(t, e) {
  return ue(t, function(r) {
    return r.sourceId !== e;
  });
}
function Di(t, e, r) {
  return pr(t, ue(t, function(n) {
    return vl(n, e, r);
  }), e, !1, r);
}
function vl(t, e, r) {
  return Ri(t, r) ? !r.options.lazyFetching || !t.fetchRange || t.isFetching || e.start < t.fetchRange.start || e.end > t.fetchRange.end : !t.latestFetchId;
}
function pr(t, e, r, n, i) {
  var a = {};
  for (var o in t) {
    var s = t[o];
    e[o] ? a[o] = pl(s, r, n, i) : a[o] = s;
  }
  return a;
}
function pl(t, e, r, n) {
  var i = n.options, a = n.calendarApi, o = n.pluginHooks.eventSourceDefs[t.sourceDefId], s = be();
  return o.fetch({
    eventSource: t,
    range: e,
    isRefetch: r,
    context: n
  }, function(l) {
    var u = l.rawEvents;
    i.eventSourceSuccess && (u = i.eventSourceSuccess.call(a, u, l.xhr) || u), t.success && (u = t.success.call(a, u, l.xhr) || u), n.dispatch({
      type: "RECEIVE_EVENTS",
      sourceId: t.sourceId,
      fetchId: s,
      fetchRange: e,
      rawEvents: u
    });
  }, function(l) {
    console.warn(l.message, l), i.eventSourceFailure && i.eventSourceFailure.call(a, l), t.failure && t.failure(l), n.dispatch({
      type: "RECEIVE_EVENT_ERROR",
      sourceId: t.sourceId,
      fetchId: s,
      fetchRange: e,
      error: l
    });
  }), h(h({}, t), { isFetching: !0, latestFetchId: s });
}
function hl(t, e, r, n) {
  var i, a = t[e];
  return a && r === a.latestFetchId ? h(h({}, t), (i = {}, i[e] = h(h({}, a), { isFetching: !1, fetchRange: n }), i)) : t;
}
function Ci(t, e) {
  return ue(t, function(r) {
    return Ri(r, e);
  });
}
function gl(t, e) {
  var r = ni(e), n = [].concat(t.eventSources || []), i = [];
  t.initialEvents && n.unshift(t.initialEvents), t.events && n.unshift(t.events);
  for (var a = 0, o = n; a < o.length; a++) {
    var s = o[a], l = ri(s, e, r);
    l && i.push(l);
  }
  return i;
}
function Ri(t, e) {
  var r = e.pluginHooks.eventSourceDefs;
  return !r[t.sourceDefId].ignoreRange;
}
function ml(t, e, r, n, i) {
  switch (e.type) {
    case "RECEIVE_EVENTS":
      return yl(t, r[e.sourceId], e.fetchId, e.fetchRange, e.rawEvents, i);
    case "ADD_EVENTS":
      return Sl(
        t,
        e.eventStore,
        n ? n.activeRange : null,
        i
      );
    case "RESET_EVENTS":
      return e.eventStore;
    case "MERGE_EVENTS":
      return ir(t, e.eventStore);
    case "PREV":
    case "NEXT":
    case "CHANGE_DATE":
    case "CHANGE_VIEW_TYPE":
      return n ? ye(t, n.activeRange, i) : t;
    case "REMOVE_EVENTS":
      return Ho(t, e.eventStore);
    case "REMOVE_EVENT_SOURCE":
      return wi(t, e.sourceId);
    case "REMOVE_ALL_EVENT_SOURCES":
      return ft(t, function(a) {
        return !a.sourceId;
      });
    case "REMOVE_ALL_EVENTS":
      return Y();
    default:
      return t;
  }
}
function yl(t, e, r, n, i, a) {
  if (e && r === e.latestFetchId) {
    var o = nt(El(i, e, a), e, a);
    return n && (o = ye(o, n, a)), ir(wi(t, e.sourceId), o);
  }
  return t;
}
function El(t, e, r) {
  var n = r.options.eventDataTransform, i = e ? e.eventDataTransform : null;
  return i && (t = cn(t, i)), n && (t = cn(t, n)), t;
}
function cn(t, e) {
  var r;
  if (!e)
    r = t;
  else {
    r = [];
    for (var n = 0, i = t; n < i.length; n++) {
      var a = i[n], o = e(a);
      o ? r.push(o) : o == null && r.push(a);
    }
  }
  return r;
}
function Sl(t, e, r, n) {
  return r && (e = ye(e, r, n)), ir(t, e);
}
function bl(t, e, r) {
  var n = t.defs, i = ce(t.instances, function(a) {
    var o = n[a.defId];
    return o.allDay || o.recurringDef ? a : h(h({}, a), { range: {
      start: r.createMarker(e.toDate(a.range.start, a.forcedStartTzo)),
      end: r.createMarker(e.toDate(a.range.end, a.forcedEndTzo))
    }, forcedStartTzo: r.canComputeOffset ? null : a.forcedStartTzo, forcedEndTzo: r.canComputeOffset ? null : a.forcedEndTzo });
  });
  return { defs: n, instances: i };
}
function wi(t, e) {
  return ft(t, function(r) {
    return r.sourceId !== e;
  });
}
function Dl(t, e) {
  return {
    defs: t.defs,
    instances: ue(t.instances, function(r) {
      return !e[r.instanceId];
    })
  };
}
function Cl(t, e) {
  switch (e.type) {
    case "UNSELECT_DATES":
      return null;
    case "SELECT_DATES":
      return e.selection;
    default:
      return t;
  }
}
function Rl(t, e) {
  switch (e.type) {
    case "UNSELECT_EVENT":
      return "";
    case "SELECT_EVENT":
      return e.eventInstanceId;
    default:
      return t;
  }
}
function wl(t, e) {
  var r;
  switch (e.type) {
    case "UNSET_EVENT_DRAG":
      return null;
    case "SET_EVENT_DRAG":
      return r = e.state, {
        affectedEvents: r.affectedEvents,
        mutatedEvents: r.mutatedEvents,
        isEvent: r.isEvent
      };
    default:
      return t;
  }
}
function Tl(t, e) {
  var r;
  switch (e.type) {
    case "UNSET_EVENT_RESIZE":
      return null;
    case "SET_EVENT_RESIZE":
      return r = e.state, {
        affectedEvents: r.affectedEvents,
        mutatedEvents: r.mutatedEvents,
        isEvent: r.isEvent
      };
    default:
      return t;
  }
}
function _l(t, e, r, n, i) {
  var a = t.headerToolbar ? fn(t.headerToolbar, t, e, r, n, i) : null, o = t.footerToolbar ? fn(t.footerToolbar, t, e, r, n, i) : null;
  return { header: a, footer: o };
}
function fn(t, e, r, n, i, a) {
  var o = {}, s = [], l = !1;
  for (var u in t) {
    var c = t[u], f = Ml(c, e, r, n, i, a);
    o[u] = f.widgets, s.push.apply(s, f.viewsWithButtons), l = l || f.hasTitle;
  }
  return { sectionWidgets: o, viewsWithButtons: s, hasTitle: l };
}
function Ml(t, e, r, n, i, a) {
  var o = e.direction === "rtl", s = e.customButtons || {}, l = r.buttonText || {}, u = e.buttonText || {}, c = r.buttonHints || {}, f = e.buttonHints || {}, d = t ? t.split(" ") : [], v = [], p = !1, E = d.map(function(S) {
    return S.split(",").map(function(g) {
      if (g === "title")
        return p = !0, { buttonName: g };
      var b, D, C, k, T, P;
      if (b = s[g])
        C = function(L) {
          b.click && b.click.call(L.target, L, L.target);
        }, (k = n.getCustomButtonIconClass(b)) || (k = n.getIconClass(g, o)) || (T = b.text), P = b.hint || b.text;
      else if (D = i[g]) {
        v.push(g), C = function() {
          a.changeView(g);
        }, (T = D.buttonTextOverride) || (k = n.getIconClass(g, o)) || (T = D.buttonTextDefault);
        var _ = D.buttonTextOverride || D.buttonTextDefault;
        P = Me(
          D.buttonTitleOverride || D.buttonTitleDefault || e.viewHint,
          [_, g],
          _
        );
      } else if (a[g])
        if (C = function() {
          a[g]();
        }, (T = l[g]) || (k = n.getIconClass(g, o)) || (T = u[g]), g === "prevYear" || g === "nextYear") {
          var O = g === "prevYear" ? "prev" : "next";
          P = Me(c[O] || f[O], [
            u.year || "year",
            "year"
          ], u[g]);
        } else
          P = function(L) {
            return Me(c[g] || f[g], [
              u[L] || L,
              L
            ], u[g]);
          };
      return { buttonName: g, buttonClick: C, buttonIcon: k, buttonText: T, buttonHint: P };
    });
  });
  return { widgets: E, viewsWithButtons: v, hasTitle: p };
}
var kl = {
  ignoreRange: !0,
  parseMeta: function(t) {
    return Array.isArray(t.events) ? t.events : null;
  },
  fetch: function(t, e) {
    e({
      rawEvents: t.eventSource.meta
    });
  }
}, Il = te({
  eventSourceDefs: [kl]
}), Pl = {
  parseMeta: function(t) {
    return typeof t.events == "function" ? t.events : null;
  },
  fetch: function(t, e, r) {
    var n = t.context.dateEnv, i = t.eventSource.meta;
    Ws(i.bind(null, Qn(t.range, n)), function(a) {
      e({ rawEvents: a });
    }, r);
  }
}, Hl = te({
  eventSourceDefs: [Pl]
});
function xl(t, e, r, n, i) {
  t = t.toUpperCase();
  var a = null;
  t === "GET" ? e = Al(e, r) : a = Ti(r);
  var o = new XMLHttpRequest();
  o.open(t, e, !0), t !== "GET" && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.onload = function() {
    if (o.status >= 200 && o.status < 400) {
      var s = !1, l = void 0;
      try {
        l = JSON.parse(o.responseText), s = !0;
      } catch {
      }
      s ? n(l, o) : i("Failure parsing JSON", o);
    } else
      i("Request failed", o);
  }, o.onerror = function() {
    i("Request failed", o);
  }, o.send(a);
}
function Al(t, e) {
  return t + (t.indexOf("?") === -1 ? "?" : "&") + Ti(e);
}
function Ti(t) {
  var e = [];
  for (var r in t)
    e.push(encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
  return e.join("&");
}
var Nl = {
  method: String,
  extraParams: y,
  startParam: String,
  endParam: String,
  timeZoneParam: String
}, Ol = {
  parseMeta: function(t) {
    return t.url && (t.format === "json" || !t.format) ? {
      url: t.url,
      format: "json",
      method: (t.method || "GET").toUpperCase(),
      extraParams: t.extraParams,
      startParam: t.startParam,
      endParam: t.endParam,
      timeZoneParam: t.timeZoneParam
    } : null;
  },
  fetch: function(t, e, r) {
    var n = t.eventSource.meta, i = Vl(n, t.range, t.context);
    xl(n.method, n.url, i, function(a, o) {
      e({ rawEvents: a, xhr: o });
    }, function(a, o) {
      r({ message: a, xhr: o });
    });
  }
}, Ll = te({
  eventSourceRefiners: Nl,
  eventSourceDefs: [Ol]
});
function Vl(t, e, r) {
  var n = r.dateEnv, i = r.options, a, o, s, l, u = {};
  return a = t.startParam, a == null && (a = i.startParam), o = t.endParam, o == null && (o = i.endParam), s = t.timeZoneParam, s == null && (s = i.timeZoneParam), typeof t.extraParams == "function" ? l = t.extraParams() : l = t.extraParams || {}, h(u, l), u[a] = n.formatIso(e.start), u[o] = n.formatIso(e.end), n.timeZone !== "local" && (u[s] = n.timeZone), u;
}
var Ul = {
  daysOfWeek: y,
  startTime: I,
  endTime: I,
  duration: I,
  startRecur: y,
  endRecur: y
}, Wl = {
  parse: function(t, e) {
    if (t.daysOfWeek || t.startTime || t.endTime || t.startRecur || t.endRecur) {
      var r = {
        daysOfWeek: t.daysOfWeek || null,
        startTime: t.startTime || null,
        endTime: t.endTime || null,
        startRecur: t.startRecur ? e.createMarker(t.startRecur) : null,
        endRecur: t.endRecur ? e.createMarker(t.endRecur) : null
      }, n = void 0;
      return t.duration && (n = t.duration), !n && t.startTime && t.endTime && (n = co(t.endTime, t.startTime)), {
        allDayGuess: Boolean(!t.startTime && !t.endTime),
        duration: n,
        typeData: r
      };
    }
    return null;
  },
  expand: function(t, e, r) {
    var n = Ae(e, { start: t.startRecur, end: t.endRecur });
    return n ? Fl(t.daysOfWeek, t.startTime, n, r) : [];
  }
}, Bl = te({
  recurringTypes: [Wl],
  eventRefiners: Ul
});
function Fl(t, e, r, n) {
  for (var i = t ? zn(t) : null, a = H(r.start), o = r.end, s = []; a < o; ) {
    var l = void 0;
    (!i || i[a.getUTCDay()]) && (e ? l = n.add(a, e) : l = a, s.push(l)), a = W(a, 1);
  }
  return s;
}
var zl = te({
  optionChangeHandlers: {
    events: function(t, e) {
      dn([t], e);
    },
    eventSources: dn
  }
});
function dn(t, e) {
  for (var r = er(e.getCurrentData().eventSources), n = [], i = 0, a = t; i < a.length; i++) {
    for (var o = a[i], s = !1, l = 0; l < r.length; l += 1)
      if (r[l]._raw === o) {
        r.splice(l, 1), s = !0;
        break;
      }
    s || n.push(o);
  }
  for (var u = 0, c = r; u < c.length; u++) {
    var f = c[u];
    e.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: f.sourceId
    });
  }
  for (var d = 0, v = n; d < v.length; d++) {
    var p = v[d];
    e.calendarApi.addEventSource(p);
  }
}
function Gl(t, e) {
  e.emitter.trigger("datesSet", h(h({}, Qn(t.activeRange, e.dateEnv)), { view: e.viewApi }));
}
function ql(t, e) {
  var r = e.emitter;
  r.hasHandlers("eventsSet") && r.trigger("eventsSet", oe(t, e));
}
var Yl = [
  Il,
  Hl,
  Ll,
  Bl,
  zl,
  te({
    isLoadingFuncs: [
      function(t) {
        return Si(t.eventSources);
      }
    ],
    contentTypeHandlers: {
      html: jl,
      domNodes: Zl
    },
    propSetHandlers: {
      dateProfile: Gl,
      eventStore: ql
    }
  })
];
function jl() {
  var t = null, e = "";
  function r(i, a) {
    (i !== t || a !== e) && (i.innerHTML = a), t = i, e = a;
  }
  function n() {
    t.innerHTML = "", t = null, e = "";
  }
  return { render: r, destroy: n };
}
function Zl() {
  var t = null, e = [];
  function r(i, a) {
    var o = Array.prototype.slice.call(a);
    if (i !== t || !Ee(e, o)) {
      for (var s = 0, l = o; s < l.length; s++) {
        var u = l[s];
        i.appendChild(u);
      }
      n();
    }
    t = i, e = o;
  }
  function n() {
    e.forEach(Xt), e = [], t = null;
  }
  return { render: r, destroy: n };
}
var hr = function() {
  function t(e) {
    this.drainedOption = e, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0;
  }
  return t.prototype.request = function(e) {
    this.isDirty = !0, this.isPaused() || (this.clearTimeout(), e == null ? this.tryDrain() : this.timeoutId = setTimeout(
      this.tryDrain.bind(this),
      e
    ));
  }, t.prototype.pause = function(e) {
    e === void 0 && (e = "");
    var r = this.pauseDepths;
    r[e] = (r[e] || 0) + 1, this.clearTimeout();
  }, t.prototype.resume = function(e, r) {
    e === void 0 && (e = "");
    var n = this.pauseDepths;
    if (e in n) {
      if (r)
        delete n[e];
      else {
        n[e] -= 1;
        var i = n[e];
        i <= 0 && delete n[e];
      }
      this.tryDrain();
    }
  }, t.prototype.isPaused = function() {
    return Object.keys(this.pauseDepths).length;
  }, t.prototype.tryDrain = function() {
    if (!this.isRunning && !this.isPaused()) {
      for (this.isRunning = !0; this.isDirty; )
        this.isDirty = !1, this.drained();
      this.isRunning = !1;
    }
  }, t.prototype.clear = function() {
    this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {};
  }, t.prototype.clearTimeout = function() {
    this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0);
  }, t.prototype.drained = function() {
    this.drainedOption && this.drainedOption();
  }, t;
}(), Xl = function() {
  function t(e, r) {
    this.runTaskOption = e, this.drainedOption = r, this.queue = [], this.delayedRunner = new hr(this.drain.bind(this));
  }
  return t.prototype.request = function(e, r) {
    this.queue.push(e), this.delayedRunner.request(r);
  }, t.prototype.pause = function(e) {
    this.delayedRunner.pause(e);
  }, t.prototype.resume = function(e, r) {
    this.delayedRunner.resume(e, r);
  }, t.prototype.drain = function() {
    for (var e = this.queue; e.length; ) {
      for (var r = [], n = void 0; n = e.shift(); )
        this.runTask(n), r.push(n);
      this.drained(r);
    }
  }, t.prototype.runTask = function(e) {
    this.runTaskOption && this.runTaskOption(e);
  }, t.prototype.drained = function(e) {
    this.drainedOption && this.drainedOption(e);
  }, t;
}();
function $l(t, e, r) {
  var n;
  return /^(year|month)$/.test(t.currentRangeUnit) ? n = t.currentRange : n = t.activeRange, r.formatRange(n.start, n.end, V(e.titleFormat || Kl(t)), {
    isEndExclusive: t.isRangeAllDay,
    defaultSeparator: e.titleRangeSeparator
  });
}
function Kl(t) {
  var e = t.currentRangeUnit;
  if (e === "year")
    return { year: "numeric" };
  if (e === "month")
    return { year: "numeric", month: "long" };
  var r = Qe(t.currentRange.start, t.currentRange.end);
  return r !== null && r > 1 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "long", day: "numeric" };
}
var _i = function() {
  function t(e) {
    var r = this;
    this.computeOptionsData = M(this._computeOptionsData), this.computeCurrentViewData = M(this._computeCurrentViewData), this.organizeRawLocales = M(Ss), this.buildLocale = M(li), this.buildPluginHooks = $s(), this.buildDateEnv = M(Jl), this.buildTheme = M(Ql), this.parseToolbars = M(_l), this.buildViewSpecs = M(nl), this.buildDateProfileGenerator = je(eu), this.buildViewApi = M(tu), this.buildViewUiProps = je(iu), this.buildEventUiBySource = M(ru, X), this.buildEventUiBases = M(nu), this.parseContextBusinessHours = je(au), this.buildTitle = M($l), this.emitter = new vt(), this.actionRunner = new Xl(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.getCurrentData = function() {
      return r.data;
    }, this.dispatch = function(D) {
      r.actionRunner.request(D);
    }, this.props = e, this.actionRunner.pause();
    var n = {}, i = this.computeOptionsData(e.optionOverrides, n, e.calendarApi), a = i.calendarOptions.initialView || i.pluginHooks.initialView, o = this.computeCurrentViewData(a, i, e.optionOverrides, n);
    e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(o.options);
    var s = fs(i.calendarOptions, i.dateEnv), l = o.dateProfileGenerator.build(s);
    ae(l.activeRange, s) || (s = l.currentRange.start);
    for (var u = {
      dateEnv: i.dateEnv,
      options: i.calendarOptions,
      pluginHooks: i.pluginHooks,
      calendarApi: e.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    }, c = 0, f = i.pluginHooks.contextInit; c < f.length; c++) {
      var d = f[c];
      d(u);
    }
    for (var v = ul(i.calendarOptions, l, u), p = {
      dynamicOptionOverrides: n,
      currentViewType: a,
      currentDate: s,
      dateProfile: l,
      businessHours: this.parseContextBusinessHours(u),
      eventSources: v,
      eventUiBases: {},
      eventStore: Y(),
      renderableEventStore: Y(),
      dateSelection: null,
      eventSelection: "",
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(u).selectionConfig
    }, E = h(h({}, u), p), S = 0, g = i.pluginHooks.reducers; S < g.length; S++) {
      var b = g[S];
      h(p, b(null, null, E));
    }
    kt(p, u) && this.emitter.trigger("loading", !0), this.state = p, this.updateData(), this.actionRunner.resume();
  }
  return t.prototype.resetOptions = function(e, r) {
    var n = this.props;
    n.optionOverrides = r ? h(h({}, n.optionOverrides), e) : e, this.actionRunner.request({
      type: "NOTHING"
    });
  }, t.prototype._handleAction = function(e) {
    var r = this, n = r.props, i = r.state, a = r.emitter, o = sl(i.dynamicOptionOverrides, e), s = this.computeOptionsData(n.optionOverrides, o, n.calendarApi), l = ol(i.currentViewType, e), u = this.computeCurrentViewData(l, s, n.optionOverrides, o);
    n.calendarApi.currentDataManager = this, a.setThisContext(n.calendarApi), a.setOptions(u.options);
    var c = {
      dateEnv: s.dateEnv,
      options: s.calendarOptions,
      pluginHooks: s.pluginHooks,
      calendarApi: n.calendarApi,
      dispatch: this.dispatch,
      emitter: a,
      getCurrentData: this.getCurrentData
    }, f = i.currentDate, d = i.dateProfile;
    this.data && this.data.dateProfileGenerator !== u.dateProfileGenerator && (d = u.dateProfileGenerator.build(f)), f = cs(f, e), d = ll(d, e, f, u.dateProfileGenerator), (e.type === "PREV" || e.type === "NEXT" || !ae(d.currentRange, f)) && (f = d.currentRange.start);
    for (var v = cl(i.eventSources, e, d, c), p = ml(i.eventStore, e, v, d, c), E = Si(v), S = E && !u.options.progressiveEventRendering && i.renderableEventStore || p, g = this.buildViewUiProps(c), b = g.eventUiSingleBase, D = g.selectionConfig, C = this.buildEventUiBySource(v), k = this.buildEventUiBases(S.defs, b, C), T = {
      dynamicOptionOverrides: o,
      currentViewType: l,
      currentDate: f,
      dateProfile: d,
      eventSources: v,
      eventStore: p,
      renderableEventStore: S,
      selectionConfig: D,
      eventUiBases: k,
      businessHours: this.parseContextBusinessHours(c),
      dateSelection: Cl(i.dateSelection, e),
      eventSelection: Rl(i.eventSelection, e),
      eventDrag: wl(i.eventDrag, e),
      eventResize: Tl(i.eventResize, e)
    }, P = h(h({}, c), T), _ = 0, O = s.pluginHooks.reducers; _ < O.length; _++) {
      var L = O[_];
      h(T, L(i, e, P));
    }
    var Z = kt(i, c), z = kt(T, c);
    !Z && z ? a.trigger("loading", !0) : Z && !z && a.trigger("loading", !1), this.state = T, n.onAction && n.onAction(e);
  }, t.prototype.updateData = function() {
    var e = this, r = e.props, n = e.state, i = this.data, a = this.computeOptionsData(r.optionOverrides, n.dynamicOptionOverrides, r.calendarApi), o = this.computeCurrentViewData(n.currentViewType, a, r.optionOverrides, n.dynamicOptionOverrides), s = this.data = h(h(h({ viewTitle: this.buildTitle(n.dateProfile, o.options, a.dateEnv), calendarApi: r.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, a), o), n), l = a.pluginHooks.optionChangeHandlers, u = i && i.calendarOptions, c = a.calendarOptions;
    if (u && u !== c) {
      u.timeZone !== c.timeZone && (n.eventSources = s.eventSources = fl(s.eventSources, n.dateProfile, s), n.eventStore = s.eventStore = bl(s.eventStore, i.dateEnv, s.dateEnv));
      for (var f in l)
        u[f] !== c[f] && l[f](c[f], s);
    }
    r.onData && r.onData(s);
  }, t.prototype._computeOptionsData = function(e, r, n) {
    var i = this.processRawCalendarOptions(e, r), a = i.refinedOptions, o = i.pluginHooks, s = i.localeDefaults, l = i.availableLocaleData, u = i.extra;
    vn(u);
    var c = this.buildDateEnv(a.timeZone, a.locale, a.weekNumberCalculation, a.firstDay, a.weekText, o, l, a.defaultRangeSeparator), f = this.buildViewSpecs(o.views, e, r, s), d = this.buildTheme(a, o), v = this.parseToolbars(a, e, d, f, n);
    return {
      calendarOptions: a,
      pluginHooks: o,
      dateEnv: c,
      viewSpecs: f,
      theme: d,
      toolbarConfig: v,
      localeDefaults: s,
      availableRawLocales: l.map
    };
  }, t.prototype.processRawCalendarOptions = function(e, r) {
    var n = wt([
      ke,
      e,
      r
    ]), i = n.locales, a = n.locale, o = this.organizeRawLocales(i), s = o.map, l = this.buildLocale(a || o.defaultCode, s).options, u = this.buildPluginHooks(e.plugins || [], Yl), c = this.currentCalendarOptionsRefiners = h(h(h(h(h({}, Qr), en), tn), u.listenerRefiners), u.optionRefiners), f = {}, d = wt([
      ke,
      l,
      e,
      r
    ]), v = {}, p = this.currentCalendarOptionsInput, E = this.currentCalendarOptionsRefined, S = !1;
    for (var g in d)
      g !== "plugins" && (d[g] === p[g] || ne[g] && g in p && ne[g](p[g], d[g]) ? v[g] = E[g] : c[g] ? (v[g] = c[g](d[g]), S = !0) : f[g] = p[g]);
    return S && (this.currentCalendarOptionsInput = d, this.currentCalendarOptionsRefined = v), {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks: u,
      availableLocaleData: o,
      localeDefaults: l,
      extra: f
    };
  }, t.prototype._computeCurrentViewData = function(e, r, n, i) {
    var a = r.viewSpecs[e];
    if (!a)
      throw new Error('viewType "' + e + `" is not available. Please make sure you've loaded all neccessary plugins`);
    var o = this.processRawViewOptions(a, r.pluginHooks, r.localeDefaults, n, i), s = o.refinedOptions, l = o.extra;
    vn(l);
    var u = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: a.optionDefaults.dateProfileGeneratorClass,
      duration: a.duration,
      durationUnit: a.durationUnit,
      usesMinMaxTime: a.optionDefaults.usesMinMaxTime,
      dateEnv: r.dateEnv,
      calendarApi: this.props.calendarApi,
      slotMinTime: s.slotMinTime,
      slotMaxTime: s.slotMaxTime,
      showNonCurrentDates: s.showNonCurrentDates,
      dayCount: s.dayCount,
      dateAlignment: s.dateAlignment,
      dateIncrement: s.dateIncrement,
      hiddenDays: s.hiddenDays,
      weekends: s.weekends,
      nowInput: s.now,
      validRangeInput: s.validRange,
      visibleRangeInput: s.visibleRange,
      monthMode: s.monthMode,
      fixedWeekCount: s.fixedWeekCount
    }), c = this.buildViewApi(e, this.getCurrentData, r.dateEnv);
    return { viewSpec: a, options: s, dateProfileGenerator: u, viewApi: c };
  }, t.prototype.processRawViewOptions = function(e, r, n, i, a) {
    var o = wt([
      ke,
      e.optionDefaults,
      n,
      i,
      e.optionOverrides,
      a
    ]), s = h(h(h(h(h(h({}, Qr), en), tn), Io), r.listenerRefiners), r.optionRefiners), l = {}, u = this.currentViewOptionsInput, c = this.currentViewOptionsRefined, f = !1, d = {};
    for (var v in o)
      o[v] === u[v] || ne[v] && ne[v](o[v], u[v]) ? l[v] = c[v] : (o[v] === this.currentCalendarOptionsInput[v] || ne[v] && ne[v](o[v], this.currentCalendarOptionsInput[v]) ? v in this.currentCalendarOptionsRefined && (l[v] = this.currentCalendarOptionsRefined[v]) : s[v] ? l[v] = s[v](o[v]) : d[v] = o[v], f = !0);
    return f && (this.currentViewOptionsInput = o, this.currentViewOptionsRefined = l), {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: d
    };
  }, t;
}();
function Jl(t, e, r, n, i, a, o, s) {
  var l = li(e || o.defaultCode, o.map);
  return new ys({
    calendarSystem: "gregory",
    timeZone: t,
    namedTimeZoneImpl: a.namedTimeZonedImpl,
    locale: l,
    weekNumberCalculation: r,
    firstDay: n,
    weekText: i,
    cmdFormatter: a.cmdFormatter,
    defaultSeparator: s
  });
}
function Ql(t, e) {
  var r = e.themeClasses[t.themeSystem] || re;
  return new r(t);
}
function eu(t) {
  var e = t.dateProfileGeneratorClass || Ei;
  return new e(t);
}
function tu(t, e, r) {
  return new ss(t, e, r);
}
function ru(t) {
  return ce(t, function(e) {
    return e.ui;
  });
}
function nu(t, e, r) {
  var n = { "": e };
  for (var i in t) {
    var a = t[i];
    a.sourceId && r[a.sourceId] && (n[i] = r[a.sourceId]);
  }
  return n;
}
function iu(t) {
  var e = t.options;
  return {
    eventUiSingleBase: at({
      display: e.eventDisplay,
      editable: e.editable,
      startEditable: e.eventStartEditable,
      durationEditable: e.eventDurationEditable,
      constraint: e.eventConstraint,
      overlap: typeof e.eventOverlap == "boolean" ? e.eventOverlap : void 0,
      allow: e.eventAllow,
      backgroundColor: e.eventBackgroundColor,
      borderColor: e.eventBorderColor,
      textColor: e.eventTextColor,
      color: e.eventColor
    }, t),
    selectionConfig: at({
      constraint: e.selectConstraint,
      overlap: typeof e.selectOverlap == "boolean" ? e.selectOverlap : void 0,
      allow: e.selectAllow
    }, t)
  };
}
function kt(t, e) {
  for (var r = 0, n = e.pluginHooks.isLoadingFuncs; r < n.length; r++) {
    var i = n[r];
    if (i(t))
      return !0;
  }
  return !1;
}
function au(t) {
  return Rs(t.options.businessHours, t);
}
function vn(t, e) {
  for (var r in t)
    console.warn("Unknown option '" + r + "'" + (e ? " for view '" + e + "'" : ""));
}
(function(t) {
  R(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.handleData = function(i) {
      n.dataManager ? n.setState(i) : n.state = i;
    }, n.dataManager = new _i({
      optionOverrides: r.optionOverrides,
      calendarApi: r.calendarApi,
      onData: n.handleData
    }), n;
  }
  return e.prototype.render = function() {
    return this.props.children(this.state);
  }, e.prototype.componentDidUpdate = function(r) {
    var n = this.props.optionOverrides;
    n !== r.optionOverrides && this.dataManager.resetOptions(n);
  }, e;
})(Zt);
var ou = function() {
  function t() {
    this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {};
  }
  return t.prototype.addSegs = function(e) {
    for (var r = [], n = 0, i = e; n < i.length; n++) {
      var a = i[n];
      this.insertEntry(a, r);
    }
    return r;
  }, t.prototype.insertEntry = function(e, r) {
    var n = this.findInsertion(e);
    return this.isInsertionValid(n, e) ? (this.insertEntryAt(e, n), 1) : this.handleInvalidInsertion(n, e, r);
  }, t.prototype.isInsertionValid = function(e, r) {
    return (this.maxCoord === -1 || e.levelCoord + r.thickness <= this.maxCoord) && (this.maxStackCnt === -1 || e.stackCnt < this.maxStackCnt);
  }, t.prototype.handleInvalidInsertion = function(e, r, n) {
    return this.allowReslicing && e.touchingEntry ? this.splitEntry(r, e.touchingEntry, n) : (n.push(r), 0);
  }, t.prototype.splitEntry = function(e, r, n) {
    var i = 0, a = [], o = e.span, s = r.span;
    return o.start < s.start && (i += this.insertEntry({
      index: e.index,
      thickness: e.thickness,
      span: { start: o.start, end: s.start }
    }, a)), o.end > s.end && (i += this.insertEntry({
      index: e.index,
      thickness: e.thickness,
      span: { start: s.end, end: o.end }
    }, a)), i ? (n.push.apply(n, A([{
      index: e.index,
      thickness: e.thickness,
      span: Mi(s, o)
    }], a)), i) : (n.push(e), 0);
  }, t.prototype.insertEntryAt = function(e, r) {
    var n = this, i = n.entriesByLevel, a = n.levelCoords;
    r.lateral === -1 ? (It(a, r.level, r.levelCoord), It(i, r.level, [e])) : It(i[r.level], r.lateral, e), this.stackCnts[Pe(e)] = r.stackCnt;
  }, t.prototype.findInsertion = function(e) {
    for (var r = this, n = r.levelCoords, i = r.entriesByLevel, a = r.strictOrder, o = r.stackCnts, s = n.length, l = 0, u = -1, c = -1, f = null, d = 0, v = 0; v < s; v += 1) {
      var p = n[v];
      if (!a && p >= l + e.thickness)
        break;
      for (var E = i[v], S = void 0, g = hn(E, e.span.start, pn), b = g[0] + g[1]; (S = E[b]) && S.span.start < e.span.end; ) {
        var D = p + S.thickness;
        D > l && (l = D, f = S, u = v, c = b), D === l && (d = Math.max(d, o[Pe(S)] + 1)), b += 1;
      }
    }
    var C = 0;
    if (f)
      for (C = u + 1; C < s && n[C] < l; )
        C += 1;
    var k = -1;
    return C < s && n[C] === l && (k = hn(i[C], e.span.end, pn)[0]), {
      touchingLevel: u,
      touchingLateral: c,
      touchingEntry: f,
      stackCnt: d,
      levelCoord: l,
      level: C,
      lateral: k
    };
  }, t.prototype.toRects = function() {
    for (var e = this, r = e.entriesByLevel, n = e.levelCoords, i = r.length, a = [], o = 0; o < i; o += 1)
      for (var s = r[o], l = n[o], u = 0, c = s; u < c.length; u++) {
        var f = c[u];
        a.push(h(h({}, f), { levelCoord: l }));
      }
    return a;
  }, t;
}();
function pn(t) {
  return t.span.end;
}
function Pe(t) {
  return t.index + ":" + t.span.start;
}
function Mi(t, e) {
  var r = Math.max(t.start, e.start), n = Math.min(t.end, e.end);
  return r < n ? { start: r, end: n } : null;
}
function It(t, e, r) {
  t.splice(e, 0, r);
}
function hn(t, e, r) {
  var n = 0, i = t.length;
  if (!i || e < r(t[n]))
    return [0, 0];
  if (e > r(t[i - 1]))
    return [i, 0];
  for (; n < i; ) {
    var a = Math.floor(n + (i - n) / 2), o = r(t[a]);
    if (e < o)
      i = a;
    else if (e > o)
      n = a + 1;
    else
      return [a, 1];
  }
  return [n, 0];
}
var we = function() {
  function t(e) {
    this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null;
  }
  return t.prototype.destroy = function() {
  }, t;
}();
function su(t, e) {
  return {
    component: t,
    el: e.el,
    useEventCenter: e.useEventCenter != null ? e.useEventCenter : !0,
    isHitComboAllowed: e.isHitComboAllowed || null
  };
}
function gr(t) {
  var e;
  return e = {}, e[t.component.uid] = t, e;
}
var Gt = {}, ki = function() {
  function t(e, r) {
    this.emitter = new vt();
  }
  return t.prototype.destroy = function() {
  }, t.prototype.setMirrorIsVisible = function(e) {
  }, t.prototype.setMirrorNeedsRevert = function(e) {
  }, t.prototype.setAutoScrollEnabled = function(e) {
  }, t;
}(), mr = {}, lu = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.render = function() {
    var r = this, n = this.props.widgetGroups.map(function(i) {
      return r.renderWidgetGroup(i);
    });
    return m.apply(void 0, A(["div", { className: "fc-toolbar-chunk" }], n));
  }, e.prototype.renderWidgetGroup = function(r) {
    for (var n = this.props, i = this.context.theme, a = [], o = !0, s = 0, l = r; s < l.length; s++) {
      var u = l[s], c = u.buttonName, f = u.buttonClick, d = u.buttonText, v = u.buttonIcon, p = u.buttonHint;
      if (c === "title")
        o = !1, a.push(m("h2", { className: "fc-toolbar-title", id: n.titleId }, n.title));
      else {
        var E = c === n.activeButton, S = !n.isTodayEnabled && c === "today" || !n.isPrevEnabled && c === "prev" || !n.isNextEnabled && c === "next", g = ["fc-" + c + "-button", i.getClass("button")];
        E && g.push(i.getClass("buttonActive")), a.push(m("button", { type: "button", title: typeof p == "function" ? p(n.navUnit) : p, disabled: S, "aria-pressed": E, className: g.join(" "), onClick: f }, d || (v ? m("span", { className: v }) : "")));
      }
    }
    if (a.length > 1) {
      var b = o && i.getClass("buttonGroup") || "";
      return m.apply(void 0, A(["div", { className: b }], a));
    }
    return a[0];
  }, e;
}(x), gn = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.render = function() {
    var r = this.props, n = r.model, i = r.extraClassName, a = !1, o, s, l = n.sectionWidgets, u = l.center;
    l.left ? (a = !0, o = l.left) : o = l.start, l.right ? (a = !0, s = l.right) : s = l.end;
    var c = [
      i || "",
      "fc-toolbar",
      a ? "fc-toolbar-ltr" : ""
    ];
    return m(
      "div",
      { className: c.join(" ") },
      this.renderSection("start", o || []),
      this.renderSection("center", u || []),
      this.renderSection("end", s || [])
    );
  }, e.prototype.renderSection = function(r, n) {
    var i = this.props;
    return m(lu, { key: r, widgetGroups: n, title: i.title, navUnit: i.navUnit, activeButton: i.activeButton, isTodayEnabled: i.isTodayEnabled, isPrevEnabled: i.isPrevEnabled, isNextEnabled: i.isNextEnabled, titleId: i.titleId });
  }, e;
}(x), uu = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.state = {
      availableWidth: null
    }, r.handleEl = function(n) {
      r.el = n, $(r.props.elRef, n), r.updateAvailableWidth();
    }, r.handleResize = function() {
      r.updateAvailableWidth();
    }, r;
  }
  return e.prototype.render = function() {
    var r = this, n = r.props, i = r.state, a = n.aspectRatio, o = [
      "fc-view-harness",
      a || n.liquid || n.height ? "fc-view-harness-active" : "fc-view-harness-passive"
    ], s = "", l = "";
    return a ? i.availableWidth !== null ? s = i.availableWidth / a : l = 1 / a * 100 + "%" : s = n.height || "", m("div", { "aria-labelledby": n.labeledById, ref: this.handleEl, className: o.join(" "), style: { height: s, paddingBottom: l } }, n.children);
  }, e.prototype.componentDidMount = function() {
    this.context.addResizeHandler(this.handleResize);
  }, e.prototype.componentWillUnmount = function() {
    this.context.removeResizeHandler(this.handleResize);
  }, e.prototype.updateAvailableWidth = function() {
    this.el && this.props.aspectRatio && this.setState({ availableWidth: this.el.offsetWidth });
  }, e;
}(x), cu = function(t) {
  R(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.handleSegClick = function(i, a) {
      var o = n.component, s = o.context, l = Se(a);
      if (l && o.isValidSegDownEl(i.target)) {
        var u = U(i.target, ".fc-event-forced-url"), c = u ? u.querySelector("a[href]").href : "";
        s.emitter.trigger("eventClick", {
          el: a,
          event: new N(o.context, l.eventRange.def, l.eventRange.instance),
          jsEvent: i,
          view: s.viewApi
        }), c && !i.defaultPrevented && (window.location.href = c);
      }
    }, n.destroy = Un(
      r.el,
      "click",
      ".fc-event",
      n.handleSegClick
    ), n;
  }
  return e;
}(we), fu = function(t) {
  R(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.handleEventElRemove = function(i) {
      i === n.currentSegEl && n.handleSegLeave(null, n.currentSegEl);
    }, n.handleSegEnter = function(i, a) {
      Se(a) && (n.currentSegEl = a, n.triggerEvent("eventMouseEnter", i, a));
    }, n.handleSegLeave = function(i, a) {
      n.currentSegEl && (n.currentSegEl = null, n.triggerEvent("eventMouseLeave", i, a));
    }, n.removeHoverListeners = xa(
      r.el,
      ".fc-event",
      n.handleSegEnter,
      n.handleSegLeave
    ), n;
  }
  return e.prototype.destroy = function() {
    this.removeHoverListeners();
  }, e.prototype.triggerEvent = function(r, n, i) {
    var a = this.component, o = a.context, s = Se(i);
    (!n || a.isValidSegDownEl(n.target)) && o.emitter.trigger(r, {
      el: i,
      event: new N(o, s.eventRange.def, s.eventRange.instance),
      jsEvent: n,
      view: o.viewApi
    });
  }, e;
}(we), du = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.buildViewContext = M(Ys), r.buildViewPropTransformers = M(pu), r.buildToolbarProps = M(vu), r.headerRef = G(), r.footerRef = G(), r.interactionsStore = {}, r.state = {
      viewLabelId: ut()
    }, r.registerInteractiveComponent = function(n, i) {
      var a = su(n, i), o = [
        cu,
        fu
      ], s = o.concat(r.props.pluginHooks.componentInteractions), l = s.map(function(u) {
        return new u(a);
      });
      r.interactionsStore[n.uid] = l, Gt[n.uid] = a;
    }, r.unregisterInteractiveComponent = function(n) {
      var i = r.interactionsStore[n.uid];
      if (i) {
        for (var a = 0, o = i; a < o.length; a++) {
          var s = o[a];
          s.destroy();
        }
        delete r.interactionsStore[n.uid];
      }
      delete Gt[n.uid];
    }, r.resizeRunner = new hr(function() {
      r.props.emitter.trigger("_resize", !0), r.props.emitter.trigger("windowResize", { view: r.props.viewApi });
    }), r.handleWindowResize = function(n) {
      var i = r.props.options;
      i.handleWindowResize && n.target === window && r.resizeRunner.request(i.windowResizeDelay);
    }, r;
  }
  return e.prototype.render = function() {
    var r = this.props, n = r.toolbarConfig, i = r.options, a = this.buildToolbarProps(
      r.viewSpec,
      r.dateProfile,
      r.dateProfileGenerator,
      r.currentDate,
      Ne(r.options.now, r.dateEnv),
      r.viewTitle
    ), o = !1, s = "", l;
    r.isHeightAuto || r.forPrint ? s = "" : i.height != null ? o = !0 : i.contentHeight != null ? s = i.contentHeight : l = Math.max(i.aspectRatio, 0.5);
    var u = this.buildViewContext(r.viewSpec, r.viewApi, r.options, r.dateProfileGenerator, r.dateEnv, r.theme, r.pluginHooks, r.dispatch, r.getCurrentData, r.emitter, r.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), c = n.header && n.header.hasTitle ? this.state.viewLabelId : "";
    return m(
      fe.Provider,
      { value: u },
      n.header && m(gn, h({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: n.header, titleId: c }, a)),
      m(
        uu,
        { liquid: o, height: s, aspectRatio: l, labeledById: c },
        this.renderView(r),
        this.buildAppendContent()
      ),
      n.footer && m(gn, h({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: n.footer, titleId: "" }, a))
    );
  }, e.prototype.componentDidMount = function() {
    var r = this.props;
    this.calendarInteractions = r.pluginHooks.calendarInteractions.map(function(a) {
      return new a(r);
    }), window.addEventListener("resize", this.handleWindowResize);
    var n = r.pluginHooks.propSetHandlers;
    for (var i in n)
      n[i](r[i], r);
  }, e.prototype.componentDidUpdate = function(r) {
    var n = this.props, i = n.pluginHooks.propSetHandlers;
    for (var a in i)
      n[a] !== r[a] && i[a](n[a], n);
  }, e.prototype.componentWillUnmount = function() {
    window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
    for (var r = 0, n = this.calendarInteractions; r < n.length; r++) {
      var i = n[r];
      i.destroy();
    }
    this.props.emitter.trigger("_unmount");
  }, e.prototype.buildAppendContent = function() {
    var r = this.props, n = r.pluginHooks.viewContainerAppends.map(function(i) {
      return i(r);
    });
    return m.apply(void 0, A([B, {}], n));
  }, e.prototype.renderView = function(r) {
    for (var n = r.pluginHooks, i = r.viewSpec, a = {
      dateProfile: r.dateProfile,
      businessHours: r.businessHours,
      eventStore: r.renderableEventStore,
      eventUiBases: r.eventUiBases,
      dateSelection: r.dateSelection,
      eventSelection: r.eventSelection,
      eventDrag: r.eventDrag,
      eventResize: r.eventResize,
      isHeightAuto: r.isHeightAuto,
      forPrint: r.forPrint
    }, o = this.buildViewPropTransformers(n.viewPropsTransformers), s = 0, l = o; s < l.length; s++) {
      var u = l[s];
      h(a, u.transform(a, r));
    }
    var c = i.component;
    return m(c, h({}, a));
  }, e;
}(pt);
function vu(t, e, r, n, i, a) {
  var o = r.build(i, void 0, !1), s = r.buildPrev(e, n, !1), l = r.buildNext(e, n, !1);
  return {
    title: a,
    activeButton: t.type,
    navUnit: t.singleUnit,
    isTodayEnabled: o.isValid && !ae(e.currentRange, i),
    isPrevEnabled: s.isValid,
    isNextEnabled: l.isValid
  };
}
function pu(t) {
  return t.map(function(e) {
    return new e();
  });
}
var hu = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.state = {
      forPrint: !1
    }, r.handleBeforePrint = function() {
      r.setState({ forPrint: !0 });
    }, r.handleAfterPrint = function() {
      r.setState({ forPrint: !1 });
    }, r;
  }
  return e.prototype.render = function() {
    var r = this.props, n = r.options, i = this.state.forPrint, a = i || n.height === "auto" || n.contentHeight === "auto", o = !a && n.height != null ? n.height : "", s = [
      "fc",
      i ? "fc-media-print" : "fc-media-screen",
      "fc-direction-" + n.direction,
      r.theme.getClass("root")
    ];
    return fi() || s.push("fc-liquid-hack"), r.children(s, o, a, i);
  }, e.prototype.componentDidMount = function() {
    var r = this.props.emitter;
    r.on("_beforeprint", this.handleBeforePrint), r.on("_afterprint", this.handleAfterPrint);
  }, e.prototype.componentWillUnmount = function() {
    var r = this.props.emitter;
    r.off("_beforeprint", this.handleBeforePrint), r.off("_afterprint", this.handleAfterPrint);
  }, e;
}(x);
function gu(t, e) {
  return !t || e > 10 ? V({ weekday: "short" }) : e > 1 ? V({ weekday: "short", month: "numeric", day: "numeric", omitCommas: !0 }) : V({ weekday: "long" });
}
var Ii = "fc-col-header-cell";
function Pi(t) {
  return t.text;
}
var mu = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.render = function() {
    var r = this.context, n = r.dateEnv, i = r.options, a = r.theme, o = r.viewApi, s = this.props, l = s.date, u = s.dateProfile, c = di(l, s.todayRange, null, u), f = [Ii].concat(ur(c, a)), d = n.format(l, s.dayHeaderFormat), v = !c.isDisabled && s.colCnt > 1 ? cr(this.context, l) : {}, p = h(h(h({ date: n.toDate(l), view: o }, s.extraHookProps), { text: d }), c);
    return m(Re, { hookProps: p, classNames: i.dayHeaderClassNames, content: i.dayHeaderContent, defaultContent: Pi, didMount: i.dayHeaderDidMount, willUnmount: i.dayHeaderWillUnmount }, function(E, S, g, b) {
      return m(
        "th",
        h({ ref: E, role: "columnheader", className: f.concat(S).join(" "), "data-date": c.isDisabled ? void 0 : Gn(l), colSpan: s.colSpan }, s.extraDataAttrs),
        m("div", { className: "fc-scrollgrid-sync-inner" }, !c.isDisabled && m("a", h({ ref: g, className: [
          "fc-col-header-cell-cushion",
          s.isSticky ? "fc-sticky" : ""
        ].join(" ") }, v), b))
      );
    });
  }, e;
}(x), yu = V({ weekday: "long" }), Eu = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.render = function() {
    var r = this.props, n = this.context, i = n.dateEnv, a = n.theme, o = n.viewApi, s = n.options, l = W(new Date(2592e5), r.dow), u = {
      dow: r.dow,
      isDisabled: !1,
      isFuture: !1,
      isPast: !1,
      isToday: !1,
      isOther: !1
    }, c = [Ii].concat(ur(u, a), r.extraClassNames || []), f = i.format(l, r.dayHeaderFormat), d = h(h(h(h({
      date: l
    }, u), { view: o }), r.extraHookProps), { text: f });
    return m(Re, { hookProps: d, classNames: s.dayHeaderClassNames, content: s.dayHeaderContent, defaultContent: Pi, didMount: s.dayHeaderDidMount, willUnmount: s.dayHeaderWillUnmount }, function(v, p, E, S) {
      return m(
        "th",
        h({ ref: v, role: "columnheader", className: c.concat(p).join(" "), colSpan: r.colSpan }, r.extraDataAttrs),
        m(
          "div",
          { className: "fc-scrollgrid-sync-inner" },
          m("a", { "aria-label": i.format(l, yu), className: [
            "fc-col-header-cell-cushion",
            r.isSticky ? "fc-sticky" : ""
          ].join(" "), ref: E }, S)
        )
      );
    });
  }, e;
}(x), Hi = function(t) {
  R(e, t);
  function e(r, n) {
    var i = t.call(this, r, n) || this;
    return i.initialNowDate = Ne(n.options.now, n.dateEnv), i.initialNowQueriedMs = new Date().valueOf(), i.state = i.computeTiming().currentState, i;
  }
  return e.prototype.render = function() {
    var r = this, n = r.props, i = r.state;
    return n.children(i.nowDate, i.todayRange);
  }, e.prototype.componentDidMount = function() {
    this.setTimeout();
  }, e.prototype.componentDidUpdate = function(r) {
    r.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
  }, e.prototype.componentWillUnmount = function() {
    this.clearTimeout();
  }, e.prototype.computeTiming = function() {
    var r = this, n = r.props, i = r.context, a = le(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs), o = i.dateEnv.startOf(a, n.unit), s = i.dateEnv.add(o, I(1, n.unit)), l = s.valueOf() - a.valueOf();
    return l = Math.min(1e3 * 60 * 60 * 24, l), {
      currentState: { nowDate: o, todayRange: mn(o) },
      nextState: { nowDate: s, todayRange: mn(s) },
      waitMs: l
    };
  }, e.prototype.setTimeout = function() {
    var r = this, n = this.computeTiming(), i = n.nextState, a = n.waitMs;
    this.timeoutId = setTimeout(function() {
      r.setState(i, function() {
        r.setTimeout();
      });
    }, a);
  }, e.prototype.clearTimeout = function() {
    this.timeoutId && clearTimeout(this.timeoutId);
  }, e.contextType = fe, e;
}(Zt);
function mn(t) {
  var e = H(t), r = W(e, 1);
  return { start: e, end: r };
}
var Su = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.createDayHeaderFormatter = M(bu), r;
  }
  return e.prototype.render = function() {
    var r = this.context, n = this.props, i = n.dates, a = n.dateProfile, o = n.datesRepDistinctDays, s = n.renderIntro, l = this.createDayHeaderFormatter(r.options.dayHeaderFormat, o, i.length);
    return m(Hi, { unit: "day" }, function(u, c) {
      return m(
        "tr",
        { role: "row" },
        s && s("day"),
        i.map(function(f) {
          return o ? m(mu, { key: f.toISOString(), date: f, dateProfile: a, todayRange: c, colCnt: i.length, dayHeaderFormat: l }) : m(Eu, { key: f.getUTCDay(), dow: f.getUTCDay(), dayHeaderFormat: l });
        })
      );
    });
  }, e;
}(x);
function bu(t, e, r) {
  return t || gu(e, r);
}
var Du = function() {
  function t(e, r) {
    for (var n = e.start, i = e.end, a = [], o = [], s = -1; n < i; )
      r.isHiddenDay(n) ? a.push(s + 0.5) : (s += 1, a.push(s), o.push(n)), n = W(n, 1);
    this.dates = o, this.indices = a, this.cnt = o.length;
  }
  return t.prototype.sliceRange = function(e) {
    var r = this.getDateDayIndex(e.start), n = this.getDateDayIndex(W(e.end, -1)), i = Math.max(0, r), a = Math.min(this.cnt - 1, n);
    return i = Math.ceil(i), a = Math.floor(a), i <= a ? {
      firstIndex: i,
      lastIndex: a,
      isStart: r === i,
      isEnd: n === a
    } : null;
  }, t.prototype.getDateDayIndex = function(e) {
    var r = this.indices, n = Math.floor(De(this.dates[0], e));
    return n < 0 ? r[0] - 1 : n >= r.length ? r[r.length - 1] + 1 : r[n];
  }, t;
}(), Cu = function() {
  function t(e, r) {
    var n = e.dates, i, a, o;
    if (r) {
      for (a = n[0].getUTCDay(), i = 1; i < n.length && n[i].getUTCDay() !== a; i += 1)
        ;
      o = Math.ceil(n.length / i);
    } else
      o = 1, i = n.length;
    this.rowCnt = o, this.colCnt = i, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates();
  }
  return t.prototype.buildCells = function() {
    for (var e = [], r = 0; r < this.rowCnt; r += 1) {
      for (var n = [], i = 0; i < this.colCnt; i += 1)
        n.push(this.buildCell(r, i));
      e.push(n);
    }
    return e;
  }, t.prototype.buildCell = function(e, r) {
    var n = this.daySeries.dates[e * this.colCnt + r];
    return {
      key: n.toISOString(),
      date: n
    };
  }, t.prototype.buildHeaderDates = function() {
    for (var e = [], r = 0; r < this.colCnt; r += 1)
      e.push(this.cells[0][r].date);
    return e;
  }, t.prototype.sliceRange = function(e) {
    var r = this.colCnt, n = this.daySeries.sliceRange(e), i = [];
    if (n)
      for (var a = n.firstIndex, o = n.lastIndex, s = a; s <= o; ) {
        var l = Math.floor(s / r), u = Math.min((l + 1) * r, o + 1);
        i.push({
          row: l,
          firstCol: s % r,
          lastCol: (u - 1) % r,
          isStart: n.isStart && s === a,
          isEnd: n.isEnd && u - 1 === o
        }), s = u;
      }
    return i;
  }, t;
}(), Ru = function() {
  function t() {
    this.sliceBusinessHours = M(this._sliceBusinessHours), this.sliceDateSelection = M(this._sliceDateSpan), this.sliceEventStore = M(this._sliceEventStore), this.sliceEventDrag = M(this._sliceInteraction), this.sliceEventResize = M(this._sliceInteraction), this.forceDayIfListItem = !1;
  }
  return t.prototype.sliceProps = function(e, r, n, i) {
    for (var a = [], o = 4; o < arguments.length; o++)
      a[o - 4] = arguments[o];
    var s = e.eventUiBases, l = this.sliceEventStore.apply(this, A([e.eventStore, s, r, n], a));
    return {
      dateSelectionSegs: this.sliceDateSelection.apply(this, A([e.dateSelection, s, i], a)),
      businessHourSegs: this.sliceBusinessHours.apply(this, A([e.businessHours, r, n, i], a)),
      fgEventSegs: l.fg,
      bgEventSegs: l.bg,
      eventDrag: this.sliceEventDrag.apply(this, A([e.eventDrag, s, r, n], a)),
      eventResize: this.sliceEventResize.apply(this, A([e.eventResize, s, r, n], a)),
      eventSelection: e.eventSelection
    };
  }, t.prototype.sliceNowDate = function(e, r) {
    for (var n = [], i = 2; i < arguments.length; i++)
      n[i - 2] = arguments[i];
    return this._sliceDateSpan.apply(this, A([
      { range: { start: e, end: le(e, 1) }, allDay: !1 },
      {},
      r
    ], n));
  }, t.prototype._sliceBusinessHours = function(e, r, n, i) {
    for (var a = [], o = 4; o < arguments.length; o++)
      a[o - 4] = arguments[o];
    return e ? this._sliceEventStore.apply(this, A([
      ye(e, Pt(r, Boolean(n)), i),
      {},
      r,
      n
    ], a)).bg : [];
  }, t.prototype._sliceEventStore = function(e, r, n, i) {
    for (var a = [], o = 4; o < arguments.length; o++)
      a[o - 4] = arguments[o];
    if (e) {
      var s = nn(e, r, Pt(n, Boolean(i)), i);
      return {
        bg: this.sliceEventRanges(s.bg, a),
        fg: this.sliceEventRanges(s.fg, a)
      };
    }
    return { bg: [], fg: [] };
  }, t.prototype._sliceInteraction = function(e, r, n, i) {
    for (var a = [], o = 4; o < arguments.length; o++)
      a[o - 4] = arguments[o];
    if (!e)
      return null;
    var s = nn(e.mutatedEvents, r, Pt(n, Boolean(i)), i);
    return {
      segs: this.sliceEventRanges(s.fg, a),
      affectedInstances: e.affectedEvents.instances,
      isEvent: e.isEvent
    };
  }, t.prototype._sliceDateSpan = function(e, r, n) {
    for (var i = [], a = 3; a < arguments.length; a++)
      i[a - 3] = arguments[a];
    if (!e)
      return [];
    for (var o = ns(e, r, n), s = this.sliceRange.apply(this, A([e.range], i)), l = 0, u = s; l < u.length; l++) {
      var c = u[l];
      c.eventRange = o;
    }
    return s;
  }, t.prototype.sliceEventRanges = function(e, r) {
    for (var n = [], i = 0, a = e; i < a.length; i++) {
      var o = a[i];
      n.push.apply(n, this.sliceEventRange(o, r));
    }
    return n;
  }, t.prototype.sliceEventRange = function(e, r) {
    var n = e.range;
    this.forceDayIfListItem && e.ui.display === "list-item" && (n = {
      start: n.start,
      end: W(n.start, 1)
    });
    for (var i = this.sliceRange.apply(this, A([n], r)), a = 0, o = i; a < o.length; a++) {
      var s = o[a];
      s.eventRange = e, s.isStart = e.isStart && s.isStart, s.isEnd = e.isEnd && s.isEnd;
    }
    return i;
  }, t;
}();
function Pt(t, e) {
  var r = t.activeRange;
  return e ? r : {
    start: le(r.start, t.slotMinTime.milliseconds),
    end: le(r.end, t.slotMaxTime.milliseconds - 864e5)
  };
}
function xi(t, e, r) {
  var n = t.mutatedEvents.instances;
  for (var i in n)
    if (!dt(e.validRange, n[i].range))
      return !1;
  return Ai({ eventDrag: t }, r);
}
function wu(t, e, r) {
  return dt(e.validRange, t.range) ? Ai({ dateSelection: t }, r) : !1;
}
function Ai(t, e) {
  var r = e.getCurrentData(), n = h({ businessHours: r.businessHours, dateSelection: "", eventStore: r.eventStore, eventUiBases: r.eventUiBases, eventSelection: "", eventDrag: null, eventResize: null }, t);
  return (e.pluginHooks.isPropsValid || Tu)(n, e);
}
function Tu(t, e, r, n) {
  return r === void 0 && (r = {}), !(t.eventDrag && !_u(t, e, r, n) || t.dateSelection && !Mu(t, e, r, n));
}
function _u(t, e, r, n) {
  var i = e.getCurrentData(), a = t.eventDrag, o = a.mutatedEvents, s = o.defs, l = o.instances, u = ot(s, a.isEvent ? t.eventUiBases : { "": i.selectionConfig });
  n && (u = ce(u, n));
  var c = Dl(t.eventStore, a.affectedEvents.instances), f = c.defs, d = c.instances, v = ot(f, t.eventUiBases);
  for (var p in l) {
    var E = l[p], S = E.range, g = u[E.defId], b = s[E.defId];
    if (!Ni(g.constraints, S, c, t.businessHours, e))
      return !1;
    var D = e.options.eventOverlap, C = typeof D == "function" ? D : null;
    for (var k in d) {
      var T = d[k];
      if (or(S, T.range)) {
        var P = v[T.defId].overlap;
        if (P === !1 && a.isEvent || g.overlap === !1 || C && !C(
          new N(e, f[T.defId], T),
          new N(e, b, E)
        ))
          return !1;
      }
    }
    for (var _ = i.eventStore, O = 0, L = g.allows; O < L.length; O++) {
      var Z = L[O], z = h(h({}, r), { range: E.range, allDay: b.allDay }), Ve = _.defs[b.defId], Ue = _.instances[p], mt = void 0;
      if (Ve ? mt = new N(e, Ve, Ue) : mt = new N(e, b), !Z(sr(z, e), mt))
        return !1;
    }
  }
  return !0;
}
function Mu(t, e, r, n) {
  var i = t.eventStore, a = i.defs, o = i.instances, s = t.dateSelection, l = s.range, u = e.getCurrentData().selectionConfig;
  if (n && (u = n(u)), !Ni(u.constraints, l, i, t.businessHours, e))
    return !1;
  var c = e.options.selectOverlap, f = typeof c == "function" ? c : null;
  for (var d in o) {
    var v = o[d];
    if (or(l, v.range) && (u.overlap === !1 || f && !f(new N(e, a[v.defId], v), null)))
      return !1;
  }
  for (var p = 0, E = u.allows; p < E.length; p++) {
    var S = E[p], g = h(h({}, r), s);
    if (!S(sr(g, e), null))
      return !1;
  }
  return !0;
}
function Ni(t, e, r, n, i) {
  for (var a = 0, o = t; a < o.length; a++) {
    var s = o[a];
    if (!Iu(ku(s, e, r, n, i), e))
      return !1;
  }
  return !0;
}
function ku(t, e, r, n, i) {
  return t === "businessHours" ? Ht(ye(n, e, i)) : typeof t == "string" ? Ht(ft(r, function(a) {
    return a.groupId === t;
  })) : typeof t == "object" && t ? Ht(ye(t, e, i)) : [];
}
function Ht(t) {
  var e = t.instances, r = [];
  for (var n in e)
    r.push(e[n].range);
  return r;
}
function Iu(t, e) {
  for (var r = 0, n = t; r < n.length; r++) {
    var i = n[r];
    if (dt(i, e))
      return !0;
  }
  return !1;
}
var Fe = /^(visible|hidden)$/, Pu = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.handleEl = function(n) {
      r.el = n, $(r.props.elRef, n);
    }, r;
  }
  return e.prototype.render = function() {
    var r = this.props, n = r.liquid, i = r.liquidIsAbsolute, a = n && i, o = ["fc-scroller"];
    return n && (i ? o.push("fc-scroller-liquid-absolute") : o.push("fc-scroller-liquid")), m("div", { ref: this.handleEl, className: o.join(" "), style: {
      overflowX: r.overflowX,
      overflowY: r.overflowY,
      left: a && -(r.overcomeLeft || 0) || "",
      right: a && -(r.overcomeRight || 0) || "",
      bottom: a && -(r.overcomeBottom || 0) || "",
      marginLeft: !a && -(r.overcomeLeft || 0) || "",
      marginRight: !a && -(r.overcomeRight || 0) || "",
      marginBottom: !a && -(r.overcomeBottom || 0) || "",
      maxHeight: r.maxHeight || ""
    } }, r.children);
  }, e.prototype.needsXScrolling = function() {
    if (Fe.test(this.props.overflowX))
      return !1;
    for (var r = this.el, n = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), i = r.children, a = 0; a < i.length; a += 1) {
      var o = i[a];
      if (o.getBoundingClientRect().width > n)
        return !0;
    }
    return !1;
  }, e.prototype.needsYScrolling = function() {
    if (Fe.test(this.props.overflowY))
      return !1;
    for (var r = this.el, n = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), i = r.children, a = 0; a < i.length; a += 1) {
      var o = i[a];
      if (o.getBoundingClientRect().height > n)
        return !0;
    }
    return !1;
  }, e.prototype.getXScrollbarWidth = function() {
    return Fe.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
  }, e.prototype.getYScrollbarWidth = function() {
    return Fe.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
  }, e;
}(x), ie = function() {
  function t(e) {
    var r = this;
    this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = function(n, i) {
      var a = r, o = a.depths, s = a.currentMap, l = !1, u = !1;
      n !== null ? (l = i in s, s[i] = n, o[i] = (o[i] || 0) + 1, u = !0) : (o[i] -= 1, o[i] || (delete s[i], delete r.callbackMap[i], l = !0)), r.masterCallback && (l && r.masterCallback(null, String(i)), u && r.masterCallback(n, String(i)));
    };
  }
  return t.prototype.createRef = function(e) {
    var r = this, n = this.callbackMap[e];
    return n || (n = this.callbackMap[e] = function(i) {
      r.handleValue(i, String(e));
    }), n;
  }, t.prototype.collect = function(e, r, n) {
    return io(this.currentMap, e, r, n);
  }, t.prototype.getAll = function() {
    return er(this.currentMap);
  }, t;
}();
function Hu(t) {
  for (var e = Ia(t, ".fc-scrollgrid-shrink"), r = 0, n = 0, i = e; n < i.length; n++) {
    var a = i[n];
    r = Math.max(r, Ga(a));
  }
  return Math.ceil(r);
}
function Oi(t, e) {
  return t.liquid && e.liquid;
}
function xu(t, e) {
  return e.maxHeight != null || Oi(t, e);
}
function Au(t, e, r, n) {
  var i = r.expandRows, a = typeof e.content == "function" ? e.content(r) : m("table", {
    role: "presentation",
    className: [
      e.tableClassName,
      t.syncRowHeights ? "fc-scrollgrid-sync-table" : ""
    ].join(" "),
    style: {
      minWidth: r.tableMinWidth,
      width: r.clientWidth,
      height: i ? r.clientHeight : ""
    }
  }, r.tableColGroupNode, m(n ? "thead" : "tbody", {
    role: "presentation"
  }, typeof e.rowContent == "function" ? e.rowContent(r) : e.rowContent));
  return a;
}
function Nu(t, e) {
  return Ee(t, e, X);
}
function Ou(t, e) {
  for (var r = [], n = 0, i = t; n < i.length; n++)
    for (var a = i[n], o = a.span || 1, s = 0; s < o; s += 1)
      r.push(m("col", { style: {
        width: a.width === "shrink" ? Lu(e) : a.width || "",
        minWidth: a.minWidth || ""
      } }));
  return m.apply(void 0, A(["colgroup", {}], r));
}
function Lu(t) {
  return t == null ? 4 : t;
}
function Vu(t) {
  for (var e = 0, r = t; e < r.length; e++) {
    var n = r[e];
    if (n.width === "shrink")
      return !0;
  }
  return !1;
}
function Uu(t, e) {
  var r = [
    "fc-scrollgrid",
    e.theme.getClass("table")
  ];
  return t && r.push("fc-scrollgrid-liquid"), r;
}
function Wu(t, e) {
  var r = [
    "fc-scrollgrid-section",
    "fc-scrollgrid-section-" + t.type,
    t.className
  ];
  return e && t.liquid && t.maxHeight == null && r.push("fc-scrollgrid-section-liquid"), t.isSticky && r.push("fc-scrollgrid-section-sticky"), r;
}
function Bu(t) {
  return m("div", { className: "fc-scrollgrid-sticky-shim", style: {
    width: t.clientWidth,
    minWidth: t.tableMinWidth
  } });
}
function yn(t) {
  var e = t.stickyHeaderDates;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
function Fu(t) {
  var e = t.stickyFooterScrollbar;
  return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
}
var Li = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.processCols = M(function(n) {
      return n;
    }, Nu), r.renderMicroColGroup = M(Ou), r.scrollerRefs = new ie(), r.scrollerElRefs = new ie(r._handleScrollerEl.bind(r)), r.state = {
      shrinkWidth: null,
      forceYScrollbars: !1,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }, r.handleSizing = function() {
      r.safeSetState(h({ shrinkWidth: r.computeShrinkWidth() }, r.computeScrollerDims()));
    }, r;
  }
  return e.prototype.render = function() {
    var r = this, n = r.props, i = r.state, a = r.context, o = n.sections || [], s = this.processCols(n.cols), l = this.renderMicroColGroup(s, i.shrinkWidth), u = Uu(n.liquid, a);
    n.collapsibleWidth && u.push("fc-scrollgrid-collapsible");
    for (var c = o.length, f = 0, d, v = [], p = [], E = []; f < c && (d = o[f]).type === "header"; )
      v.push(this.renderSection(d, l, !0)), f += 1;
    for (; f < c && (d = o[f]).type === "body"; )
      p.push(this.renderSection(d, l, !1)), f += 1;
    for (; f < c && (d = o[f]).type === "footer"; )
      E.push(this.renderSection(d, l, !0)), f += 1;
    var S = !fi(), g = { role: "rowgroup" };
    return m("table", {
      role: "grid",
      className: u.join(" "),
      style: { height: n.height }
    }, Boolean(!S && v.length) && m.apply(void 0, A(["thead", g], v)), Boolean(!S && p.length) && m.apply(void 0, A(["tbody", g], p)), Boolean(!S && E.length) && m.apply(void 0, A(["tfoot", g], E)), S && m.apply(void 0, A(A(A(["tbody", g], v), p), E)));
  }, e.prototype.renderSection = function(r, n, i) {
    return "outerContent" in r ? m(B, { key: r.key }, r.outerContent) : m("tr", { key: r.key, role: "presentation", className: Wu(r, this.props.liquid).join(" ") }, this.renderChunkTd(r, n, r.chunk, i));
  }, e.prototype.renderChunkTd = function(r, n, i, a) {
    if ("outerContent" in i)
      return i.outerContent;
    var o = this.props, s = this.state, l = s.forceYScrollbars, u = s.scrollerClientWidths, c = s.scrollerClientHeights, f = xu(o, r), d = Oi(o, r), v = o.liquid ? l ? "scroll" : f ? "auto" : "hidden" : "visible", p = r.key, E = Au(r, i, {
      tableColGroupNode: n,
      tableMinWidth: "",
      clientWidth: !o.collapsibleWidth && u[p] !== void 0 ? u[p] : null,
      clientHeight: c[p] !== void 0 ? c[p] : null,
      expandRows: r.expandRows,
      syncRowHeights: !1,
      rowSyncHeights: [],
      reportRowHeightChange: function() {
      }
    }, a);
    return m(a ? "th" : "td", {
      ref: i.elRef,
      role: "presentation"
    }, m(
      "div",
      { className: "fc-scroller-harness" + (d ? " fc-scroller-harness-liquid" : "") },
      m(Pu, { ref: this.scrollerRefs.createRef(p), elRef: this.scrollerElRefs.createRef(p), overflowY: v, overflowX: o.liquid ? "hidden" : "visible", maxHeight: r.maxHeight, liquid: d, liquidIsAbsolute: !0 }, E)
    ));
  }, e.prototype._handleScrollerEl = function(r, n) {
    var i = zu(this.props.sections, n);
    i && $(i.chunk.scrollerElRef, r);
  }, e.prototype.componentDidMount = function() {
    this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
  }, e.prototype.componentDidUpdate = function() {
    this.handleSizing();
  }, e.prototype.componentWillUnmount = function() {
    this.context.removeResizeHandler(this.handleSizing);
  }, e.prototype.computeShrinkWidth = function() {
    return Vu(this.props.cols) ? Hu(this.scrollerElRefs.getAll()) : 0;
  }, e.prototype.computeScrollerDims = function() {
    var r = Ns(), n = this, i = n.scrollerRefs, a = n.scrollerElRefs, o = !1, s = {}, l = {};
    for (var u in i.currentMap) {
      var c = i.currentMap[u];
      if (c && c.needsYScrolling()) {
        o = !0;
        break;
      }
    }
    for (var f = 0, d = this.props.sections; f < d.length; f++) {
      var v = d[f], u = v.key, p = a.currentMap[u];
      if (p) {
        var E = p.parentNode;
        s[u] = Math.floor(E.getBoundingClientRect().width - (o ? r.y : 0)), l[u] = Math.floor(E.getBoundingClientRect().height);
      }
    }
    return { forceYScrollbars: o, scrollerClientWidths: s, scrollerClientHeights: l };
  }, e;
}(x);
Li.addStateEquality({
  scrollerClientWidths: X,
  scrollerClientHeights: X
});
function zu(t, e) {
  for (var r = 0, n = t; r < n.length; r++) {
    var i = n[r];
    if (i.key === e)
      return i;
  }
  return null;
}
var yr = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.elRef = G(), r;
  }
  return e.prototype.render = function() {
    var r = this, n = r.props, i = r.context, a = i.options, o = n.seg, s = o.eventRange, l = s.ui, u = {
      event: new N(i, s.def, s.instance),
      view: i.viewApi,
      timeText: n.timeText,
      textColor: l.textColor,
      backgroundColor: l.backgroundColor,
      borderColor: l.borderColor,
      isDraggable: !n.disableDragging && Yo(o, i),
      isStartResizable: !n.disableResizing && jo(o, i),
      isEndResizable: !n.disableResizing && Zo(o),
      isMirror: Boolean(n.isDragging || n.isResizing || n.isDateSelecting),
      isStart: Boolean(o.isStart),
      isEnd: Boolean(o.isEnd),
      isPast: Boolean(n.isPast),
      isFuture: Boolean(n.isFuture),
      isToday: Boolean(n.isToday),
      isSelected: Boolean(n.isSelected),
      isDragging: Boolean(n.isDragging),
      isResizing: Boolean(n.isResizing)
    }, c = Xo(u).concat(l.classNames);
    return m(Re, { hookProps: u, classNames: a.eventClassNames, content: a.eventContent, defaultContent: n.defaultContent, didMount: a.eventDidMount, willUnmount: a.eventWillUnmount, elRef: this.elRef }, function(f, d, v, p) {
      return n.children(f, c.concat(d), v, p, u);
    });
  }, e.prototype.componentDidMount = function() {
    an(this.elRef.current, this.props.seg);
  }, e.prototype.componentDidUpdate = function(r) {
    var n = this.props.seg;
    n !== r.seg && an(this.elRef.current, n);
  }, e;
}(x), Gu = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.render = function() {
    var r = this, n = r.props, i = r.context, a = n.seg, o = i.options.eventTimeFormat || n.defaultTimeFormat, s = Kn(a, o, i, n.defaultDisplayEventTime, n.defaultDisplayEventEnd);
    return m(yr, { seg: a, timeText: s, disableDragging: n.disableDragging, disableResizing: n.disableResizing, defaultContent: n.defaultContent || qu, isDragging: n.isDragging, isResizing: n.isResizing, isDateSelecting: n.isDateSelecting, isSelected: n.isSelected, isPast: n.isPast, isFuture: n.isFuture, isToday: n.isToday }, function(l, u, c, f, d) {
      return m(
        "a",
        h({ className: n.extraClassNames.concat(u).join(" "), style: {
          borderColor: d.borderColor,
          backgroundColor: d.backgroundColor
        }, ref: l }, Jn(a, i)),
        m("div", { className: "fc-event-main", ref: c, style: { color: d.textColor } }, f),
        d.isStartResizable && m("div", { className: "fc-event-resizer fc-event-resizer-start" }),
        d.isEndResizable && m("div", { className: "fc-event-resizer fc-event-resizer-end" })
      );
    });
  }, e;
}(x);
function qu(t) {
  return m(
    "div",
    { className: "fc-event-main-frame" },
    t.timeText && m("div", { className: "fc-event-time" }, t.timeText),
    m(
      "div",
      { className: "fc-event-title-container" },
      m("div", { className: "fc-event-title fc-sticky" }, t.event.title || m(B, null, "\xA0"))
    )
  );
}
var Yu = V({ day: "numeric" }), Vi = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.render = function() {
    var r = this, n = r.props, i = r.context, a = i.options, o = Ui({
      date: n.date,
      dateProfile: n.dateProfile,
      todayRange: n.todayRange,
      showDayNumber: n.showDayNumber,
      extraProps: n.extraHookProps,
      viewApi: i.viewApi,
      dateEnv: i.dateEnv
    });
    return m(gi, { hookProps: o, content: a.dayCellContent, defaultContent: n.defaultContent }, n.children);
  }, e;
}(x);
function Ui(t) {
  var e = t.date, r = t.dateEnv, n = di(e, t.todayRange, null, t.dateProfile);
  return h(h(h({ date: r.toDate(e), view: t.viewApi }, n), { dayNumberText: t.showDayNumber ? r.format(e, Yu) : "" }), t.extraProps);
}
var Wi = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.refineHookProps = je(Ui), r.normalizeClassNames = mi(), r;
  }
  return e.prototype.render = function() {
    var r = this, n = r.props, i = r.context, a = i.options, o = this.refineHookProps({
      date: n.date,
      dateProfile: n.dateProfile,
      todayRange: n.todayRange,
      showDayNumber: n.showDayNumber,
      extraProps: n.extraHookProps,
      viewApi: i.viewApi,
      dateEnv: i.dateEnv
    }), s = ur(o, i.theme).concat(o.isDisabled ? [] : this.normalizeClassNames(a.dayCellClassNames, o)), l = o.isDisabled ? {} : {
      "data-date": Gn(n.date)
    };
    return m(vr, { hookProps: o, didMount: a.dayCellDidMount, willUnmount: a.dayCellWillUnmount, elRef: n.elRef }, function(u) {
      return n.children(u, s, l, o.isDisabled);
    });
  }, e;
}(x);
function ju(t) {
  return m("div", { className: "fc-" + t });
}
var Zu = function(t) {
  return m(yr, { defaultContent: Xu, seg: t.seg, timeText: "", disableDragging: !0, disableResizing: !0, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: !1, isPast: t.isPast, isFuture: t.isFuture, isToday: t.isToday }, function(e, r, n, i, a) {
    return m("div", { ref: e, className: ["fc-bg-event"].concat(r).join(" "), style: {
      backgroundColor: a.backgroundColor
    } }, i);
  });
};
function Xu(t) {
  var e = t.event.title;
  return e && m("div", { className: "fc-event-title" }, t.event.title);
}
var $u = function(t) {
  return m(fe.Consumer, null, function(e) {
    var r = e.dateEnv, n = e.options, i = t.date, a = n.weekNumberFormat || t.defaultFormat, o = r.computeWeekNumber(i), s = r.format(i, a), l = { num: o, text: s, date: i };
    return m(Re, { hookProps: l, classNames: n.weekNumberClassNames, content: n.weekNumberContent, defaultContent: Ku, didMount: n.weekNumberDidMount, willUnmount: n.weekNumberWillUnmount }, t.children);
  });
};
function Ku(t) {
  return t.text;
}
var xt = 10, Ju = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.state = {
      titleId: ut()
    }, r.handleRootEl = function(n) {
      r.rootEl = n, r.props.elRef && $(r.props.elRef, n);
    }, r.handleDocumentMouseDown = function(n) {
      var i = Ln(n);
      r.rootEl.contains(i) || r.handleCloseClick();
    }, r.handleDocumentKeyDown = function(n) {
      n.key === "Escape" && r.handleCloseClick();
    }, r.handleCloseClick = function() {
      var n = r.props.onClose;
      n && n();
    }, r;
  }
  return e.prototype.render = function() {
    var r = this.context, n = r.theme, i = r.options, a = this, o = a.props, s = a.state, l = [
      "fc-popover",
      n.getClass("popover")
    ].concat(o.extraClassNames || []);
    return _a(m(
      "div",
      h({ id: o.id, className: l.join(" "), "aria-labelledby": s.titleId }, o.extraAttrs, { ref: this.handleRootEl }),
      m(
        "div",
        { className: "fc-popover-header " + n.getClass("popoverHeader") },
        m("span", { className: "fc-popover-title", id: s.titleId }, o.title),
        m("span", { className: "fc-popover-close " + n.getIconClass("close"), title: i.closeHint, onClick: this.handleCloseClick })
      ),
      m("div", { className: "fc-popover-body " + n.getClass("popoverContent") }, o.children)
    ), o.parentEl);
  }, e.prototype.componentDidMount = function() {
    document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
  }, e.prototype.componentWillUnmount = function() {
    document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }, e.prototype.updateSize = function() {
    var r = this.context.isRtl, n = this.props, i = n.alignmentEl, a = n.alignGridTop, o = this.rootEl, s = Us(i);
    if (s) {
      var l = o.getBoundingClientRect(), u = a ? U(i, ".fc-scrollgrid").getBoundingClientRect().top : s.top, c = r ? s.right - l.width : s.left;
      u = Math.max(u, xt), c = Math.min(c, document.documentElement.clientWidth - xt - l.width), c = Math.max(c, xt);
      var f = o.offsetParent.getBoundingClientRect();
      _e(o, {
        top: u - f.top,
        left: c - f.left
      });
    }
  }, e;
}(x), Qu = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.handleRootEl = function(n) {
      r.rootEl = n, n ? r.context.registerInteractiveComponent(r, {
        el: n,
        useEventCenter: !1
      }) : r.context.unregisterInteractiveComponent(r);
    }, r;
  }
  return e.prototype.render = function() {
    var r = this.context, n = r.options, i = r.dateEnv, a = this.props, o = a.startDate, s = a.todayRange, l = a.dateProfile, u = i.format(o, n.dayPopoverFormat);
    return m(Wi, { date: o, dateProfile: l, todayRange: s, elRef: this.handleRootEl }, function(c, f, d) {
      return m(
        Ju,
        { elRef: c, id: a.id, title: u, extraClassNames: ["fc-more-popover"].concat(f), extraAttrs: d, parentEl: a.parentEl, alignmentEl: a.alignmentEl, alignGridTop: a.alignGridTop, onClose: a.onClose },
        m(Vi, { date: o, dateProfile: l, todayRange: s }, function(v, p) {
          return p && m("div", { className: "fc-more-popover-misc", ref: v }, p);
        }),
        a.children
      );
    });
  }, e.prototype.queryHit = function(r, n, i, a) {
    var o = this, s = o.rootEl, l = o.props;
    return r >= 0 && r < i && n >= 0 && n < a ? {
      dateProfile: l.dateProfile,
      dateSpan: h({ allDay: !0, range: {
        start: l.startDate,
        end: l.endDate
      } }, l.extraDateSpan),
      dayEl: s,
      rect: {
        left: 0,
        top: 0,
        right: i,
        bottom: a
      },
      layer: 1
    } : null;
  }, e;
}(Ce), ec = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.linkElRef = G(), r.state = {
      isPopoverOpen: !1,
      popoverId: ut()
    }, r.handleClick = function(n) {
      var i = r, a = i.props, o = i.context, s = o.options.moreLinkClick, l = En(a).start;
      function u(c) {
        var f = c.eventRange, d = f.def, v = f.instance, p = f.range;
        return {
          event: new N(o, d, v),
          start: o.dateEnv.toDate(p.start),
          end: o.dateEnv.toDate(p.end),
          isStart: c.isStart,
          isEnd: c.isEnd
        };
      }
      typeof s == "function" && (s = s({
        date: l,
        allDay: Boolean(a.allDayDate),
        allSegs: a.allSegs.map(u),
        hiddenSegs: a.hiddenSegs.map(u),
        jsEvent: n,
        view: o.viewApi
      })), !s || s === "popover" ? r.setState({ isPopoverOpen: !0 }) : typeof s == "string" && o.calendarApi.zoomTo(l, s);
    }, r.handlePopoverClose = function() {
      r.setState({ isPopoverOpen: !1 });
    }, r;
  }
  return e.prototype.render = function() {
    var r = this, n = this, i = n.props, a = n.state;
    return m(fe.Consumer, null, function(o) {
      var s = o.viewApi, l = o.options, u = o.calendarApi, c = l.moreLinkText, f = i.moreCnt, d = En(i), v = typeof c == "function" ? c.call(u, f) : "+" + f + " " + c, p = Me(l.moreLinkHint, [f], v), E = {
        num: f,
        shortText: "+" + f,
        text: v,
        view: s
      };
      return m(
        B,
        null,
        Boolean(i.moreCnt) && m(Re, { elRef: r.linkElRef, hookProps: E, classNames: l.moreLinkClassNames, content: l.moreLinkContent, defaultContent: i.defaultContent || tc, didMount: l.moreLinkDidMount, willUnmount: l.moreLinkWillUnmount }, function(S, g, b, D) {
          return i.children(S, ["fc-more-link"].concat(g), b, D, r.handleClick, p, a.isPopoverOpen, a.isPopoverOpen ? a.popoverId : "");
        }),
        a.isPopoverOpen && m(Qu, { id: a.popoverId, startDate: d.start, endDate: d.end, dateProfile: i.dateProfile, todayRange: i.todayRange, extraDateSpan: i.extraDateSpan, parentEl: r.parentEl, alignmentEl: i.alignmentElRef.current, alignGridTop: i.alignGridTop, onClose: r.handlePopoverClose }, i.popoverContent())
      );
    });
  }, e.prototype.componentDidMount = function() {
    this.updateParentEl();
  }, e.prototype.componentDidUpdate = function() {
    this.updateParentEl();
  }, e.prototype.updateParentEl = function() {
    this.linkElRef.current && (this.parentEl = U(this.linkElRef.current, ".fc-view-harness"));
  }, e;
}(x);
function tc(t) {
  return t.text;
}
function En(t) {
  if (t.allDayDate)
    return {
      start: t.allDayDate,
      end: W(t.allDayDate, 1)
    };
  var e = t.hiddenSegs;
  return {
    start: rc(e),
    end: ic(e)
  };
}
function rc(t) {
  return t.reduce(nc).eventRange.range.start;
}
function nc(t, e) {
  return t.eventRange.range.start < e.eventRange.range.start ? t : e;
}
function ic(t) {
  return t.reduce(ac).eventRange.range.end;
}
function ac(t, e) {
  return t.eventRange.range.end > e.eventRange.range.end ? t : e;
}
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var oc = function(t) {
  R(e, t);
  function e(r, n) {
    n === void 0 && (n = {});
    var i = t.call(this) || this;
    return i.isRendering = !1, i.isRendered = !1, i.currentClassNames = [], i.customContentRenderId = 0, i.handleAction = function(a) {
      switch (a.type) {
        case "SET_EVENT_DRAG":
        case "SET_EVENT_RESIZE":
          i.renderRunner.tryDrain();
      }
    }, i.handleData = function(a) {
      i.currentData = a, i.renderRunner.request(a.calendarOptions.rerenderDelay);
    }, i.handleRenderRequest = function() {
      if (i.isRendering) {
        i.isRendered = !0;
        var a = i.currentData;
        Br(function() {
          Ta(m(hu, { options: a.calendarOptions, theme: a.theme, emitter: a.emitter }, function(o, s, l, u) {
            return i.setClassNames(o), i.setHeight(s), m(
              hi.Provider,
              { value: i.customContentRenderId },
              m(du, h({ isHeightAuto: l, forPrint: u }, a))
            );
          }), i.el);
        });
      } else
        i.isRendered && (i.isRendered = !1, Ma(i.el), i.setClassNames([]), i.setHeight(""));
    }, i.el = r, i.renderRunner = new hr(i.handleRenderRequest), new _i({
      optionOverrides: n,
      calendarApi: i,
      onAction: i.handleAction,
      onData: i.handleData
    }), i;
  }
  return Object.defineProperty(e.prototype, "view", {
    get: function() {
      return this.currentData.viewApi;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.render = function() {
    var r = this.isRendering;
    r ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), r && this.updateSize();
  }, e.prototype.destroy = function() {
    this.isRendering && (this.isRendering = !1, this.renderRunner.request());
  }, e.prototype.updateSize = function() {
    var r = this;
    Br(function() {
      t.prototype.updateSize.call(r);
    });
  }, e.prototype.batchRendering = function(r) {
    this.renderRunner.pause("batchRendering"), r(), this.renderRunner.resume("batchRendering");
  }, e.prototype.pauseRendering = function() {
    this.renderRunner.pause("pauseRendering");
  }, e.prototype.resumeRendering = function() {
    this.renderRunner.resume("pauseRendering", !0);
  }, e.prototype.resetOptions = function(r, n) {
    this.currentDataManager.resetOptions(r, n);
  }, e.prototype.setClassNames = function(r) {
    if (!Ee(r, this.currentClassNames)) {
      for (var n = this.el.classList, i = 0, a = this.currentClassNames; i < a.length; i++) {
        var o = a[i];
        n.remove(o);
      }
      for (var s = 0, l = r; s < l.length; s++) {
        var o = l[s];
        n.add(o);
      }
      this.currentClassNames = r;
    }
  }, e.prototype.setHeight = function(r) {
    On(this.el, "height", r);
  }, e;
}(ds);
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var sc = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.headerElRef = G(), r;
  }
  return e.prototype.renderSimpleLayout = function(r, n) {
    var i = this, a = i.props, o = i.context, s = [], l = yn(o.options);
    return r && s.push({
      type: "header",
      key: "header",
      isSticky: l,
      chunk: {
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: r
      }
    }), s.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunk: { content: n }
    }), m(zt, { viewSpec: o.viewSpec }, function(u, c) {
      return m(
        "div",
        { ref: u, className: ["fc-daygrid"].concat(c).join(" ") },
        m(Li, { liquid: !a.isHeightAuto && !a.forPrint, collapsibleWidth: a.forPrint, cols: [], sections: s })
      );
    });
  }, e.prototype.renderHScrollLayout = function(r, n, i, a) {
    var o = this.context.pluginHooks.scrollGridImpl;
    if (!o)
      throw new Error("No ScrollGrid implementation");
    var s = this, l = s.props, u = s.context, c = !l.forPrint && yn(u.options), f = !l.forPrint && Fu(u.options), d = [];
    return r && d.push({
      type: "header",
      key: "header",
      isSticky: c,
      chunks: [{
        key: "main",
        elRef: this.headerElRef,
        tableClassName: "fc-col-header",
        rowContent: r
      }]
    }), d.push({
      type: "body",
      key: "body",
      liquid: !0,
      chunks: [{
        key: "main",
        content: n
      }]
    }), f && d.push({
      type: "footer",
      key: "footer",
      isSticky: !0,
      chunks: [{
        key: "main",
        content: Bu
      }]
    }), m(zt, { viewSpec: u.viewSpec }, function(v, p) {
      return m(
        "div",
        { ref: v, className: ["fc-daygrid"].concat(p).join(" ") },
        m(o, { liquid: !l.isHeightAuto && !l.forPrint, collapsibleWidth: l.forPrint, colGroups: [{ cols: [{ span: i, minWidth: a }] }], sections: d })
      );
    });
  }, e;
}(Ce);
function ze(t, e) {
  for (var r = [], n = 0; n < e; n += 1)
    r[n] = [];
  for (var i = 0, a = t; i < a.length; i++) {
    var o = a[i];
    r[o.row].push(o);
  }
  return r;
}
function Ge(t, e) {
  for (var r = [], n = 0; n < e; n += 1)
    r[n] = [];
  for (var i = 0, a = t; i < a.length; i++) {
    var o = a[i];
    r[o.firstCol].push(o);
  }
  return r;
}
function Sn(t, e) {
  var r = [];
  if (t) {
    for (var n = 0; n < e; n += 1)
      r[n] = {
        affectedInstances: t.affectedInstances,
        isEvent: t.isEvent,
        segs: []
      };
    for (var i = 0, a = t.segs; i < a.length; i++) {
      var o = a[i];
      r[o.row].segs.push(o);
    }
  } else
    for (var n = 0; n < e; n += 1)
      r[n] = null;
  return r;
}
var lc = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.render = function() {
    var r = this.props, n = cr(this.context, r.date);
    return m(Vi, { date: r.date, dateProfile: r.dateProfile, todayRange: r.todayRange, showDayNumber: r.showDayNumber, extraHookProps: r.extraHookProps, defaultContent: uc }, function(i, a) {
      return (a || r.forceDayTop) && m(
        "div",
        { className: "fc-daygrid-day-top", ref: i },
        m("a", h({ id: r.dayNumberId, className: "fc-daygrid-day-number" }, n), a || m(B, null, "\xA0"))
      );
    });
  }, e;
}(x);
function uc(t) {
  return t.dayNumberText;
}
var Bi = V({
  hour: "numeric",
  minute: "2-digit",
  omitZeroMinute: !0,
  meridiem: "narrow"
});
function Fi(t) {
  var e = t.eventRange.ui.display;
  return e === "list-item" || e === "auto" && !t.eventRange.def.allDay && t.firstCol === t.lastCol && t.isStart && t.isEnd;
}
var zi = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.render = function() {
    var r = this.props;
    return m(Gu, h({}, r, { extraClassNames: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"], defaultTimeFormat: Bi, defaultDisplayEventEnd: r.defaultDisplayEventEnd, disableResizing: !r.seg.eventRange.def.allDay }));
  }, e;
}(x), Gi = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.render = function() {
    var r = this, n = r.props, i = r.context, a = i.options.eventTimeFormat || Bi, o = Kn(n.seg, a, i, !0, n.defaultDisplayEventEnd);
    return m(yr, { seg: n.seg, timeText: o, defaultContent: cc, isDragging: n.isDragging, isResizing: !1, isDateSelecting: !1, isSelected: n.isSelected, isPast: n.isPast, isFuture: n.isFuture, isToday: n.isToday }, function(s, l, u, c) {
      return m("a", h({ className: ["fc-daygrid-event", "fc-daygrid-dot-event"].concat(l).join(" "), ref: s }, Jn(n.seg, i)), c);
    });
  }, e;
}(x);
function cc(t) {
  return m(
    B,
    null,
    m("div", { className: "fc-daygrid-event-dot", style: { borderColor: t.borderColor || t.backgroundColor } }),
    t.timeText && m("div", { className: "fc-event-time" }, t.timeText),
    m("div", { className: "fc-event-title" }, t.event.title || m(B, null, "\xA0"))
  );
}
var fc = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.compileSegs = M(dc), r;
  }
  return e.prototype.render = function() {
    var r = this.props, n = this.compileSegs(r.singlePlacements), i = n.allSegs, a = n.invisibleSegs;
    return m(ec, { dateProfile: r.dateProfile, todayRange: r.todayRange, allDayDate: r.allDayDate, moreCnt: r.moreCnt, allSegs: i, hiddenSegs: a, alignmentElRef: r.alignmentElRef, alignGridTop: r.alignGridTop, extraDateSpan: r.extraDateSpan, popoverContent: function() {
      var o = (r.eventDrag ? r.eventDrag.affectedInstances : null) || (r.eventResize ? r.eventResize.affectedInstances : null) || {};
      return m(B, null, i.map(function(s) {
        var l = s.eventRange.instance.instanceId;
        return m("div", { className: "fc-daygrid-event-harness", key: l, style: {
          visibility: o[l] ? "hidden" : ""
        } }, Fi(s) ? m(Gi, h({ seg: s, isDragging: !1, isSelected: l === r.eventSelection, defaultDisplayEventEnd: !1 }, Ie(s, r.todayRange))) : m(zi, h({ seg: s, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: l === r.eventSelection, defaultDisplayEventEnd: !1 }, Ie(s, r.todayRange))));
      }));
    } }, function(o, s, l, u, c, f, d, v) {
      return m("a", h({ ref: o, className: ["fc-daygrid-more-link"].concat(s).join(" "), title: f, "aria-expanded": d, "aria-controls": v }, Wn(c)), u);
    });
  }, e;
}(x);
function dc(t) {
  for (var e = [], r = [], n = 0, i = t; n < i.length; n++) {
    var a = i[n];
    e.push(a.seg), a.isVisible || r.push(a.seg);
  }
  return { allSegs: e, invisibleSegs: r };
}
var vc = V({ week: "narrow" }), pc = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.rootElRef = G(), r.state = {
      dayNumberId: ut()
    }, r.handleRootEl = function(n) {
      $(r.rootElRef, n), $(r.props.elRef, n);
    }, r;
  }
  return e.prototype.render = function() {
    var r = this, n = r.context, i = r.props, a = r.state, o = r.rootElRef, s = i.date, l = i.dateProfile, u = cr(n, s, "week");
    return m(Wi, { date: s, dateProfile: l, todayRange: i.todayRange, showDayNumber: i.showDayNumber, extraHookProps: i.extraHookProps, elRef: this.handleRootEl }, function(c, f, d, v) {
      return m(
        "td",
        h({ ref: c, role: "gridcell", className: ["fc-daygrid-day"].concat(f, i.extraClassNames || []).join(" ") }, d, i.extraDataAttrs, i.showDayNumber ? { "aria-labelledby": a.dayNumberId } : {}),
        m(
          "div",
          { className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", ref: i.innerElRef },
          i.showWeekNumber && m($u, { date: s, defaultFormat: vc }, function(p, E, S, g) {
            return m("a", h({ ref: p, className: ["fc-daygrid-week-number"].concat(E).join(" ") }, u), g);
          }),
          !v && m(lc, { date: s, dateProfile: l, showDayNumber: i.showDayNumber, dayNumberId: a.dayNumberId, forceDayTop: i.forceDayTop, todayRange: i.todayRange, extraHookProps: i.extraHookProps }),
          m(
            "div",
            { className: "fc-daygrid-day-events", ref: i.fgContentElRef },
            i.fgContent,
            m(
              "div",
              { className: "fc-daygrid-day-bottom", style: { marginTop: i.moreMarginTop } },
              m(fc, { allDayDate: s, singlePlacements: i.singlePlacements, moreCnt: i.moreCnt, alignmentElRef: o, alignGridTop: !i.showDayNumber, extraDateSpan: i.extraDateSpan, dateProfile: i.dateProfile, eventSelection: i.eventSelection, eventDrag: i.eventDrag, eventResize: i.eventResize, todayRange: i.todayRange })
            )
          ),
          m("div", { className: "fc-daygrid-day-bg" }, i.bgContent)
        )
      );
    });
  }, e;
}(Ce);
function hc(t, e, r, n, i, a, o) {
  var s = new yc();
  s.allowReslicing = !0, s.strictOrder = n, e === !0 || r === !0 ? (s.maxCoord = a, s.hiddenConsumes = !0) : typeof e == "number" ? s.maxStackCnt = e : typeof r == "number" && (s.maxStackCnt = r, s.hiddenConsumes = !0);
  for (var l = [], u = [], c = 0; c < t.length; c += 1) {
    var f = t[c], d = f.eventRange.instance.instanceId, v = i[d];
    v != null ? l.push({
      index: c,
      thickness: v,
      span: {
        start: f.firstCol,
        end: f.lastCol + 1
      }
    }) : u.push(f);
  }
  for (var p = s.addSegs(l), E = s.toRects(), S = gc(E, t, o), g = S.singleColPlacements, b = S.multiColPlacements, D = S.leftoverMargins, C = [], k = [], T = 0, P = u; T < P.length; T++) {
    var f = P[T];
    b[f.firstCol].push({
      seg: f,
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (var _ = f.firstCol; _ <= f.lastCol; _ += 1)
      g[_].push({
        seg: ge(f, _, _ + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (var _ = 0; _ < o.length; _ += 1)
    C.push(0);
  for (var O = 0, L = p; O < L.length; O++) {
    var Z = L[O], f = t[Z.index], z = Z.span;
    b[z.start].push({
      seg: ge(f, z.start, z.end, o),
      isVisible: !1,
      isAbsolute: !0,
      absoluteTop: 0,
      marginTop: 0
    });
    for (var _ = z.start; _ < z.end; _ += 1)
      C[_] += 1, g[_].push({
        seg: ge(f, _, _ + 1, o),
        isVisible: !1,
        isAbsolute: !1,
        absoluteTop: 0,
        marginTop: 0
      });
  }
  for (var _ = 0; _ < o.length; _ += 1)
    k.push(D[_]);
  return { singleColPlacements: g, multiColPlacements: b, moreCnts: C, moreMarginTops: k };
}
function gc(t, e, r) {
  for (var n = mc(t, r.length), i = [], a = [], o = [], s = 0; s < r.length; s += 1) {
    for (var l = n[s], u = [], c = 0, f = 0, d = 0, v = l; d < v.length; d++) {
      var p = v[d], E = e[p.index];
      u.push({
        seg: ge(E, s, s + 1, r),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: p.levelCoord,
        marginTop: p.levelCoord - c
      }), c = p.levelCoord + p.thickness;
    }
    var S = [];
    c = 0, f = 0;
    for (var g = 0, b = l; g < b.length; g++) {
      var p = b[g], E = e[p.index], D = p.span.end - p.span.start > 1, C = p.span.start === s;
      f += p.levelCoord - c, c = p.levelCoord + p.thickness, D ? (f += p.thickness, C && S.push({
        seg: ge(E, p.span.start, p.span.end, r),
        isVisible: !0,
        isAbsolute: !0,
        absoluteTop: p.levelCoord,
        marginTop: 0
      })) : C && (S.push({
        seg: ge(E, p.span.start, p.span.end, r),
        isVisible: !0,
        isAbsolute: !1,
        absoluteTop: p.levelCoord,
        marginTop: f
      }), f = 0);
    }
    i.push(u), a.push(S), o.push(f);
  }
  return { singleColPlacements: i, multiColPlacements: a, leftoverMargins: o };
}
function mc(t, e) {
  for (var r = [], n = 0; n < e; n += 1)
    r.push([]);
  for (var i = 0, a = t; i < a.length; i++)
    for (var o = a[i], n = o.span.start; n < o.span.end; n += 1)
      r[n].push(o);
  return r;
}
function ge(t, e, r, n) {
  if (t.firstCol === e && t.lastCol === r - 1)
    return t;
  var i = t.eventRange, a = i.range, o = Ae(a, {
    start: n[e].date,
    end: W(n[r - 1].date, 1)
  });
  return h(h({}, t), { firstCol: e, lastCol: r - 1, eventRange: {
    def: i.def,
    ui: h(h({}, i.ui), { durationEditable: !1 }),
    instance: i.instance,
    range: o
  }, isStart: t.isStart && o.start.valueOf() === a.start.valueOf(), isEnd: t.isEnd && o.end.valueOf() === a.end.valueOf() });
}
var yc = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.hiddenConsumes = !1, r.forceHidden = {}, r;
  }
  return e.prototype.addSegs = function(r) {
    for (var n = this, i = t.prototype.addSegs.call(this, r), a = this.entriesByLevel, o = function(l) {
      return !n.forceHidden[Pe(l)];
    }, s = 0; s < a.length; s += 1)
      a[s] = a[s].filter(o);
    return i;
  }, e.prototype.handleInvalidInsertion = function(r, n, i) {
    var a = this, o = a.entriesByLevel, s = a.forceHidden, l = r.touchingEntry, u = r.touchingLevel, c = r.touchingLateral;
    if (this.hiddenConsumes && l) {
      var f = Pe(l);
      if (!s[f])
        if (this.allowReslicing) {
          var d = h(h({}, l), { span: Mi(l.span, n.span) }), v = Pe(d);
          s[v] = !0, o[u][c] = d, this.splitEntry(l, n, i);
        } else
          s[f] = !0, i.push(l);
    }
    return t.prototype.handleInvalidInsertion.call(this, r, n, i);
  }, e;
}(ou), qi = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.cellElRefs = new ie(), r.frameElRefs = new ie(), r.fgElRefs = new ie(), r.segHarnessRefs = new ie(), r.rootElRef = G(), r.state = {
      framePositions: null,
      maxContentHeight: null,
      eventInstanceHeights: {}
    }, r;
  }
  return e.prototype.render = function() {
    var r = this, n = this, i = n.props, a = n.state, o = n.context, s = o.options, l = i.cells.length, u = Ge(i.businessHourSegs, l), c = Ge(i.bgEventSegs, l), f = Ge(this.getHighlightSegs(), l), d = Ge(this.getMirrorSegs(), l), v = hc(Go(i.fgEventSegs, s.eventOrder), i.dayMaxEvents, i.dayMaxEventRows, s.eventOrderStrict, a.eventInstanceHeights, a.maxContentHeight, i.cells), p = v.singleColPlacements, E = v.multiColPlacements, S = v.moreCnts, g = v.moreMarginTops, b = i.eventDrag && i.eventDrag.affectedInstances || i.eventResize && i.eventResize.affectedInstances || {};
    return m(
      "tr",
      { ref: this.rootElRef, role: "row" },
      i.renderIntro && i.renderIntro(),
      i.cells.map(function(D, C) {
        var k = r.renderFgSegs(C, i.forPrint ? p[C] : E[C], i.todayRange, b), T = r.renderFgSegs(C, Ec(d[C], E), i.todayRange, {}, Boolean(i.eventDrag), Boolean(i.eventResize), !1);
        return m(pc, { key: D.key, elRef: r.cellElRefs.createRef(D.key), innerElRef: r.frameElRefs.createRef(D.key), dateProfile: i.dateProfile, date: D.date, showDayNumber: i.showDayNumbers, showWeekNumber: i.showWeekNumbers && C === 0, forceDayTop: i.showWeekNumbers, todayRange: i.todayRange, eventSelection: i.eventSelection, eventDrag: i.eventDrag, eventResize: i.eventResize, extraHookProps: D.extraHookProps, extraDataAttrs: D.extraDataAttrs, extraClassNames: D.extraClassNames, extraDateSpan: D.extraDateSpan, moreCnt: S[C], moreMarginTop: g[C], singlePlacements: p[C], fgContentElRef: r.fgElRefs.createRef(D.key), fgContent: m(
          B,
          null,
          m(B, null, k),
          m(B, null, T)
        ), bgContent: m(
          B,
          null,
          r.renderFillSegs(f[C], "highlight"),
          r.renderFillSegs(u[C], "non-business"),
          r.renderFillSegs(c[C], "bg-event")
        ) });
      })
    );
  }, e.prototype.componentDidMount = function() {
    this.updateSizing(!0);
  }, e.prototype.componentDidUpdate = function(r, n) {
    var i = this.props;
    this.updateSizing(!X(r, i));
  }, e.prototype.getHighlightSegs = function() {
    var r = this.props;
    return r.eventDrag && r.eventDrag.segs.length ? r.eventDrag.segs : r.eventResize && r.eventResize.segs.length ? r.eventResize.segs : r.dateSelectionSegs;
  }, e.prototype.getMirrorSegs = function() {
    var r = this.props;
    return r.eventResize && r.eventResize.segs.length ? r.eventResize.segs : [];
  }, e.prototype.renderFgSegs = function(r, n, i, a, o, s, l) {
    var u = this.context, c = this.props.eventSelection, f = this.state.framePositions, d = this.props.cells.length === 1, v = o || s || l, p = [];
    if (f)
      for (var E = 0, S = n; E < S.length; E++) {
        var g = S[E], b = g.seg, D = b.eventRange.instance.instanceId, C = D + ":" + r, k = g.isVisible && !a[D], T = g.isAbsolute, P = "", _ = "";
        T && (u.isRtl ? (_ = 0, P = f.lefts[b.lastCol] - f.lefts[b.firstCol]) : (P = 0, _ = f.rights[b.firstCol] - f.rights[b.lastCol])), p.push(m("div", { className: "fc-daygrid-event-harness" + (T ? " fc-daygrid-event-harness-abs" : ""), key: C, ref: v ? null : this.segHarnessRefs.createRef(C), style: {
          visibility: k ? "" : "hidden",
          marginTop: T ? "" : g.marginTop,
          top: T ? g.absoluteTop : "",
          left: P,
          right: _
        } }, Fi(b) ? m(Gi, h({ seg: b, isDragging: o, isSelected: D === c, defaultDisplayEventEnd: d }, Ie(b, i))) : m(zi, h({ seg: b, isDragging: o, isResizing: s, isDateSelecting: l, isSelected: D === c, defaultDisplayEventEnd: d }, Ie(b, i)))));
      }
    return p;
  }, e.prototype.renderFillSegs = function(r, n) {
    var i = this.context.isRtl, a = this.props.todayRange, o = this.state.framePositions, s = [];
    if (o)
      for (var l = 0, u = r; l < u.length; l++) {
        var c = u[l], f = i ? {
          right: 0,
          left: o.lefts[c.lastCol] - o.lefts[c.firstCol]
        } : {
          left: 0,
          right: o.rights[c.firstCol] - o.rights[c.lastCol]
        };
        s.push(m("div", { key: $o(c.eventRange), className: "fc-daygrid-bg-harness", style: f }, n === "bg-event" ? m(Zu, h({ seg: c }, Ie(c, a))) : ju(n)));
      }
    return m.apply(void 0, A([B, {}], s));
  }, e.prototype.updateSizing = function(r) {
    var n = this, i = n.props, a = n.frameElRefs;
    if (!i.forPrint && i.clientWidth !== null) {
      if (r) {
        var o = i.cells.map(function(f) {
          return a.currentMap[f.key];
        });
        if (o.length) {
          var s = this.rootElRef.current;
          this.setState({
            framePositions: new Bt(
              s,
              o,
              !0,
              !1
            )
          });
        }
      }
      var l = this.state.eventInstanceHeights, u = this.queryEventInstanceHeights(), c = i.dayMaxEvents === !0 || i.dayMaxEventRows === !0;
      this.safeSetState({
        eventInstanceHeights: h(h({}, l), u),
        maxContentHeight: c ? this.computeMaxContentHeight() : null
      });
    }
  }, e.prototype.queryEventInstanceHeights = function() {
    var r = this.segHarnessRefs.currentMap, n = {};
    for (var i in r) {
      var a = Math.round(r[i].getBoundingClientRect().height), o = i.split(":")[0];
      n[o] = Math.max(n[o] || 0, a);
    }
    return n;
  }, e.prototype.computeMaxContentHeight = function() {
    var r = this.props.cells[0].key, n = this.cellElRefs.currentMap[r], i = this.fgElRefs.currentMap[r];
    return n.getBoundingClientRect().bottom - i.getBoundingClientRect().top;
  }, e.prototype.getCellEls = function() {
    var r = this.cellElRefs.currentMap;
    return this.props.cells.map(function(n) {
      return r[n.key];
    });
  }, e;
}(Ce);
qi.addStateEquality({
  eventInstanceHeights: X
});
function Ec(t, e) {
  if (!t.length)
    return [];
  var r = Sc(e);
  return t.map(function(n) {
    return {
      seg: n,
      isVisible: !0,
      isAbsolute: !0,
      absoluteTop: r[n.eventRange.instance.instanceId],
      marginTop: 0
    };
  });
}
function Sc(t) {
  for (var e = {}, r = 0, n = t; r < n.length; r++)
    for (var i = n[r], a = 0, o = i; a < o.length; a++) {
      var s = o[a];
      e[s.seg.eventRange.instance.instanceId] = s.absoluteTop;
    }
  return e;
}
var bc = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.splitBusinessHourSegs = M(ze), r.splitBgEventSegs = M(ze), r.splitFgEventSegs = M(ze), r.splitDateSelectionSegs = M(ze), r.splitEventDrag = M(Sn), r.splitEventResize = M(Sn), r.rowRefs = new ie(), r.handleRootEl = function(n) {
      r.rootEl = n, n ? r.context.registerInteractiveComponent(r, {
        el: n,
        isHitComboAllowed: r.props.isHitComboAllowed
      }) : r.context.unregisterInteractiveComponent(r);
    }, r;
  }
  return e.prototype.render = function() {
    var r = this, n = this.props, i = n.dateProfile, a = n.dayMaxEventRows, o = n.dayMaxEvents, s = n.expandRows, l = n.cells.length, u = this.splitBusinessHourSegs(n.businessHourSegs, l), c = this.splitBgEventSegs(n.bgEventSegs, l), f = this.splitFgEventSegs(n.fgEventSegs, l), d = this.splitDateSelectionSegs(n.dateSelectionSegs, l), v = this.splitEventDrag(n.eventDrag, l), p = this.splitEventResize(n.eventResize, l), E = o === !0 || a === !0;
    E && !s && (E = !1, a = null, o = null);
    var S = [
      "fc-daygrid-body",
      E ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
      s ? "" : "fc-daygrid-body-natural"
    ];
    return m(
      "div",
      { className: S.join(" "), ref: this.handleRootEl, style: {
        width: n.clientWidth,
        minWidth: n.tableMinWidth
      } },
      m(Hi, { unit: "day" }, function(g, b) {
        return m(
          B,
          null,
          m(
            "table",
            { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
              width: n.clientWidth,
              minWidth: n.tableMinWidth,
              height: s ? n.clientHeight : ""
            } },
            n.colGroupNode,
            m("tbody", { role: "presentation" }, n.cells.map(function(D, C) {
              return m(qi, {
                ref: r.rowRefs.createRef(C),
                key: D.length ? D[0].date.toISOString() : C,
                showDayNumbers: l > 1,
                showWeekNumbers: n.showWeekNumbers,
                todayRange: b,
                dateProfile: i,
                cells: D,
                renderIntro: n.renderRowIntro,
                businessHourSegs: u[C],
                eventSelection: n.eventSelection,
                bgEventSegs: c[C].filter(Dc),
                fgEventSegs: f[C],
                dateSelectionSegs: d[C],
                eventDrag: v[C],
                eventResize: p[C],
                dayMaxEvents: o,
                dayMaxEventRows: a,
                clientWidth: n.clientWidth,
                clientHeight: n.clientHeight,
                forPrint: n.forPrint
              });
            }))
          )
        );
      })
    );
  }, e.prototype.prepareHits = function() {
    this.rowPositions = new Bt(
      this.rootEl,
      this.rowRefs.collect().map(function(r) {
        return r.getCellEls()[0];
      }),
      !1,
      !0
    ), this.colPositions = new Bt(
      this.rootEl,
      this.rowRefs.currentMap[0].getCellEls(),
      !0,
      !1
    );
  }, e.prototype.queryHit = function(r, n) {
    var i = this, a = i.colPositions, o = i.rowPositions, s = a.leftToIndex(r), l = o.topToIndex(n);
    if (l != null && s != null) {
      var u = this.props.cells[l][s];
      return {
        dateProfile: this.props.dateProfile,
        dateSpan: h({ range: this.getCellRange(l, s), allDay: !0 }, u.extraDateSpan),
        dayEl: this.getCellEl(l, s),
        rect: {
          left: a.lefts[s],
          right: a.rights[s],
          top: o.tops[l],
          bottom: o.bottoms[l]
        },
        layer: 0
      };
    }
    return null;
  }, e.prototype.getCellEl = function(r, n) {
    return this.rowRefs.currentMap[r].getCellEls()[n];
  }, e.prototype.getCellRange = function(r, n) {
    var i = this.props.cells[r][n].date, a = W(i, 1);
    return { start: i, end: a };
  }, e;
}(Ce);
function Dc(t) {
  return t.eventRange.def.allDay;
}
var Cc = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.forceDayIfListItem = !0, r;
  }
  return e.prototype.sliceRange = function(r, n) {
    return n.sliceRange(r);
  }, e;
}(Ru), Rc = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.slicer = new Cc(), r.tableRef = G(), r;
  }
  return e.prototype.render = function() {
    var r = this, n = r.props, i = r.context;
    return m(bc, h({ ref: this.tableRef }, this.slicer.sliceProps(n, n.dateProfile, n.nextDayThreshold, i, n.dayTableModel), { dateProfile: n.dateProfile, cells: n.dayTableModel.cells, colGroupNode: n.colGroupNode, tableMinWidth: n.tableMinWidth, renderRowIntro: n.renderRowIntro, dayMaxEvents: n.dayMaxEvents, dayMaxEventRows: n.dayMaxEventRows, showWeekNumbers: n.showWeekNumbers, expandRows: n.expandRows, headerAlignElRef: n.headerAlignElRef, clientWidth: n.clientWidth, clientHeight: n.clientHeight, forPrint: n.forPrint }));
  }, e;
}(Ce), wc = function(t) {
  R(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.buildDayTableModel = M(Tc), r.headerRef = G(), r.tableRef = G(), r;
  }
  return e.prototype.render = function() {
    var r = this, n = this.context, i = n.options, a = n.dateProfileGenerator, o = this.props, s = this.buildDayTableModel(o.dateProfile, a), l = i.dayHeaders && m(Su, { ref: this.headerRef, dateProfile: o.dateProfile, dates: s.headerDates, datesRepDistinctDays: s.rowCnt === 1 }), u = function(c) {
      return m(Rc, { ref: r.tableRef, dateProfile: o.dateProfile, dayTableModel: s, businessHours: o.businessHours, dateSelection: o.dateSelection, eventStore: o.eventStore, eventUiBases: o.eventUiBases, eventSelection: o.eventSelection, eventDrag: o.eventDrag, eventResize: o.eventResize, nextDayThreshold: i.nextDayThreshold, colGroupNode: c.tableColGroupNode, tableMinWidth: c.tableMinWidth, dayMaxEvents: i.dayMaxEvents, dayMaxEventRows: i.dayMaxEventRows, showWeekNumbers: i.weekNumbers, expandRows: !o.isHeightAuto, headerAlignElRef: r.headerElRef, clientWidth: c.clientWidth, clientHeight: c.clientHeight, forPrint: o.forPrint });
    };
    return i.dayMinWidth ? this.renderHScrollLayout(l, u, s.colCnt, i.dayMinWidth) : this.renderSimpleLayout(l, u);
  }, e;
}(sc);
function Tc(t, e) {
  var r = new Du(t.renderRange, e);
  return new Cu(r, /year|month|week/.test(t.currentRangeUnit));
}
var _c = function(t) {
  R(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.buildRenderRange = function(r, n, i) {
    var a = this.props.dateEnv, o = t.prototype.buildRenderRange.call(this, r, n, i), s = o.start, l = o.end, u;
    if (/^(year|month)$/.test(n) && (s = a.startOfWeek(s), u = a.startOfWeek(l), u.valueOf() !== l.valueOf() && (l = qr(u, 1))), this.props.monthMode && this.props.fixedWeekCount) {
      var c = Math.ceil(
        Ya(s, l)
      );
      l = qr(l, 6 - c);
    }
    return { start: s, end: l };
  }, e;
}(Ei), Mc = te({
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: wc,
      dateProfileGeneratorClass: _c
    },
    dayGridDay: {
      type: "dayGrid",
      duration: { days: 1 }
    },
    dayGridWeek: {
      type: "dayGrid",
      duration: { weeks: 1 }
    },
    dayGridMonth: {
      type: "dayGrid",
      duration: { months: 1 },
      monthMode: !0,
      fixedWeekCount: !0
    }
  }
});
/*!
FullCalendar v5.11.3
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
mr.touchMouseIgnoreWait = 500;
var qt = 0, st = 0, Yt = !1, Er = function() {
  function t(e) {
    var r = this;
    this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = function(n) {
      if (!r.shouldIgnoreMouse() && kc(n) && r.tryStart(n)) {
        var i = r.createEventFromMouse(n, !0);
        r.emitter.trigger("pointerdown", i), r.initScrollWatch(i), r.shouldIgnoreMove || document.addEventListener("mousemove", r.handleMouseMove), document.addEventListener("mouseup", r.handleMouseUp);
      }
    }, this.handleMouseMove = function(n) {
      var i = r.createEventFromMouse(n);
      r.recordCoords(i), r.emitter.trigger("pointermove", i);
    }, this.handleMouseUp = function(n) {
      document.removeEventListener("mousemove", r.handleMouseMove), document.removeEventListener("mouseup", r.handleMouseUp), r.emitter.trigger("pointerup", r.createEventFromMouse(n)), r.cleanup();
    }, this.handleTouchStart = function(n) {
      if (r.tryStart(n)) {
        r.isTouchDragging = !0;
        var i = r.createEventFromTouch(n, !0);
        r.emitter.trigger("pointerdown", i), r.initScrollWatch(i);
        var a = n.target;
        r.shouldIgnoreMove || a.addEventListener("touchmove", r.handleTouchMove), a.addEventListener("touchend", r.handleTouchEnd), a.addEventListener("touchcancel", r.handleTouchEnd), window.addEventListener("scroll", r.handleTouchScroll, !0);
      }
    }, this.handleTouchMove = function(n) {
      var i = r.createEventFromTouch(n);
      r.recordCoords(i), r.emitter.trigger("pointermove", i);
    }, this.handleTouchEnd = function(n) {
      if (r.isDragging) {
        var i = n.target;
        i.removeEventListener("touchmove", r.handleTouchMove), i.removeEventListener("touchend", r.handleTouchEnd), i.removeEventListener("touchcancel", r.handleTouchEnd), window.removeEventListener("scroll", r.handleTouchScroll, !0), r.emitter.trigger("pointerup", r.createEventFromTouch(n)), r.cleanup(), r.isTouchDragging = !1, Ic();
      }
    }, this.handleTouchScroll = function() {
      r.wasTouchScroll = !0;
    }, this.handleScroll = function(n) {
      if (!r.shouldIgnoreMove) {
        var i = window.pageXOffset - r.prevScrollX + r.prevPageX, a = window.pageYOffset - r.prevScrollY + r.prevPageY;
        r.emitter.trigger("pointermove", {
          origEvent: n,
          isTouch: r.isTouchDragging,
          subjectEl: r.subjectEl,
          pageX: i,
          pageY: a,
          deltaX: i - r.origPageX,
          deltaY: a - r.origPageY
        });
      }
    }, this.containerEl = e, this.emitter = new vt(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), Pc();
  }
  return t.prototype.destroy = function() {
    this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), Hc();
  }, t.prototype.tryStart = function(e) {
    var r = this.querySubjectEl(e), n = e.target;
    return r && (!this.handleSelector || U(n, this.handleSelector)) ? (this.subjectEl = r, this.isDragging = !0, this.wasTouchScroll = !1, !0) : !1;
  }, t.prototype.cleanup = function() {
    Yt = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
  }, t.prototype.querySubjectEl = function(e) {
    return this.selector ? U(e.target, this.selector) : this.containerEl;
  }, t.prototype.shouldIgnoreMouse = function() {
    return qt || this.isTouchDragging;
  }, t.prototype.cancelTouchScroll = function() {
    this.isDragging && (Yt = !0);
  }, t.prototype.initScrollWatch = function(e) {
    this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0));
  }, t.prototype.recordCoords = function(e) {
    this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.pageXOffset, this.prevScrollY = window.pageYOffset);
  }, t.prototype.destroyScrollWatch = function() {
    this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0);
  }, t.prototype.createEventFromMouse = function(e, r) {
    var n = 0, i = 0;
    return r ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (n = e.pageX - this.origPageX, i = e.pageY - this.origPageY), {
      origEvent: e,
      isTouch: !1,
      subjectEl: this.subjectEl,
      pageX: e.pageX,
      pageY: e.pageY,
      deltaX: n,
      deltaY: i
    };
  }, t.prototype.createEventFromTouch = function(e, r) {
    var n = e.touches, i, a, o = 0, s = 0;
    return n && n.length ? (i = n[0].pageX, a = n[0].pageY) : (i = e.pageX, a = e.pageY), r ? (this.origPageX = i, this.origPageY = a) : (o = i - this.origPageX, s = a - this.origPageY), {
      origEvent: e,
      isTouch: !0,
      subjectEl: this.subjectEl,
      pageX: i,
      pageY: a,
      deltaX: o,
      deltaY: s
    };
  }, t;
}();
function kc(t) {
  return t.button === 0 && !t.ctrlKey;
}
function Ic() {
  qt += 1, setTimeout(function() {
    qt -= 1;
  }, mr.touchMouseIgnoreWait);
}
function Pc() {
  st += 1, st === 1 && window.addEventListener("touchmove", Yi, { passive: !1 });
}
function Hc() {
  st -= 1, st || window.removeEventListener("touchmove", Yi, { passive: !1 });
}
function Yi(t) {
  Yt && t.preventDefault();
}
var xc = function() {
  function t() {
    this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0;
  }
  return t.prototype.start = function(e, r, n) {
    this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = r - window.pageXOffset, this.origScreenY = n - window.pageYOffset, this.deltaX = 0, this.deltaY = 0, this.updateElPosition();
  }, t.prototype.handleMove = function(e, r) {
    this.deltaX = e - window.pageXOffset - this.origScreenX, this.deltaY = r - window.pageYOffset - this.origScreenY, this.updateElPosition();
  }, t.prototype.setIsVisible = function(e) {
    e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e);
  }, t.prototype.stop = function(e, r) {
    var n = this, i = function() {
      n.cleanup(), r();
    };
    e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(i, this.revertDuration) : setTimeout(i, 0);
  }, t.prototype.doRevertAnimation = function(e, r) {
    var n = this.mirrorEl, i = this.sourceEl.getBoundingClientRect();
    n.style.transition = "top " + r + "ms,left " + r + "ms", _e(n, {
      left: i.left,
      top: i.top
    }), Aa(n, function() {
      n.style.transition = "", e();
    });
  }, t.prototype.cleanup = function() {
    this.mirrorEl && (Xt(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null;
  }, t.prototype.updateElPosition = function() {
    this.sourceEl && this.isVisible && _e(this.getMirrorEl(), {
      left: this.sourceElRect.left + this.deltaX,
      top: this.sourceElRect.top + this.deltaY
    });
  }, t.prototype.getMirrorEl = function() {
    var e = this.sourceElRect, r = this.mirrorEl;
    return r || (r = this.mirrorEl = this.sourceEl.cloneNode(!0), r.classList.add("fc-unselectable"), r.classList.add("fc-event-dragging"), _e(r, {
      position: "fixed",
      zIndex: this.zIndex,
      visibility: "",
      boxSizing: "border-box",
      width: e.right - e.left,
      height: e.bottom - e.top,
      right: "auto",
      bottom: "auto",
      margin: 0
    }), this.parentNode.appendChild(r)), r;
  }, t;
}(), ji = function(t) {
  R(e, t);
  function e(r, n) {
    var i = t.call(this) || this;
    return i.handleScroll = function() {
      i.scrollTop = i.scrollController.getScrollTop(), i.scrollLeft = i.scrollController.getScrollLeft(), i.handleScrollChange();
    }, i.scrollController = r, i.doesListening = n, i.scrollTop = i.origScrollTop = r.getScrollTop(), i.scrollLeft = i.origScrollLeft = r.getScrollLeft(), i.scrollWidth = r.getScrollWidth(), i.scrollHeight = r.getScrollHeight(), i.clientWidth = r.getClientWidth(), i.clientHeight = r.getClientHeight(), i.clientRect = i.computeClientRect(), i.doesListening && i.getEventTarget().addEventListener("scroll", i.handleScroll), i;
  }
  return e.prototype.destroy = function() {
    this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll);
  }, e.prototype.getScrollTop = function() {
    return this.scrollTop;
  }, e.prototype.getScrollLeft = function() {
    return this.scrollLeft;
  }, e.prototype.setScrollTop = function(r) {
    this.scrollController.setScrollTop(r), this.doesListening || (this.scrollTop = Math.max(Math.min(r, this.getMaxScrollTop()), 0), this.handleScrollChange());
  }, e.prototype.setScrollLeft = function(r) {
    this.scrollController.setScrollLeft(r), this.doesListening || (this.scrollLeft = Math.max(Math.min(r, this.getMaxScrollLeft()), 0), this.handleScrollChange());
  }, e.prototype.getClientWidth = function() {
    return this.clientWidth;
  }, e.prototype.getClientHeight = function() {
    return this.clientHeight;
  }, e.prototype.getScrollWidth = function() {
    return this.scrollWidth;
  }, e.prototype.getScrollHeight = function() {
    return this.scrollHeight;
  }, e.prototype.handleScrollChange = function() {
  }, e;
}(dr), Zi = function(t) {
  R(e, t);
  function e(r, n) {
    return t.call(this, new zs(r), n) || this;
  }
  return e.prototype.getEventTarget = function() {
    return this.scrollController.el;
  }, e.prototype.computeClientRect = function() {
    return Vs(this.scrollController.el);
  }, e;
}(ji), Ac = function(t) {
  R(e, t);
  function e(r) {
    return t.call(this, new Gs(), r) || this;
  }
  return e.prototype.getEventTarget = function() {
    return window;
  }, e.prototype.computeClientRect = function() {
    return {
      left: this.scrollLeft,
      right: this.scrollLeft + this.clientWidth,
      top: this.scrollTop,
      bottom: this.scrollTop + this.clientHeight
    };
  }, e.prototype.handleScrollChange = function() {
    this.clientRect = this.computeClientRect();
  }, e;
}(ji), bn = typeof performance == "function" ? performance.now : Date.now, Nc = function() {
  function t() {
    var e = this;
    this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = function() {
      if (e.isAnimating) {
        var r = e.computeBestEdge(e.pointerScreenX + window.pageXOffset, e.pointerScreenY + window.pageYOffset);
        if (r) {
          var n = bn();
          e.handleSide(r, (n - e.msSinceRequest) / 1e3), e.requestAnimation(n);
        } else
          e.isAnimating = !1;
      }
    };
  }
  return t.prototype.start = function(e, r, n) {
    this.isEnabled && (this.scrollCaches = this.buildCaches(n), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, r));
  }, t.prototype.handleMove = function(e, r) {
    if (this.isEnabled) {
      var n = e - window.pageXOffset, i = r - window.pageYOffset, a = this.pointerScreenY === null ? 0 : i - this.pointerScreenY, o = this.pointerScreenX === null ? 0 : n - this.pointerScreenX;
      a < 0 ? this.everMovedUp = !0 : a > 0 && (this.everMovedDown = !0), o < 0 ? this.everMovedLeft = !0 : o > 0 && (this.everMovedRight = !0), this.pointerScreenX = n, this.pointerScreenY = i, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(bn()));
    }
  }, t.prototype.stop = function() {
    if (this.isEnabled) {
      this.isAnimating = !1;
      for (var e = 0, r = this.scrollCaches; e < r.length; e++) {
        var n = r[e];
        n.destroy();
      }
      this.scrollCaches = null;
    }
  }, t.prototype.requestAnimation = function(e) {
    this.msSinceRequest = e, requestAnimationFrame(this.animate);
  }, t.prototype.handleSide = function(e, r) {
    var n = e.scrollCache, i = this.edgeThreshold, a = i - e.distance, o = a * a / (i * i) * this.maxVelocity * r, s = 1;
    switch (e.name) {
      case "left":
        s = -1;
      case "right":
        n.setScrollLeft(n.getScrollLeft() + o * s);
        break;
      case "top":
        s = -1;
      case "bottom":
        n.setScrollTop(n.getScrollTop() + o * s);
        break;
    }
  }, t.prototype.computeBestEdge = function(e, r) {
    for (var n = this.edgeThreshold, i = null, a = this.scrollCaches || [], o = 0, s = a; o < s.length; o++) {
      var l = s[o], u = l.clientRect, c = e - u.left, f = u.right - e, d = r - u.top, v = u.bottom - r;
      c >= 0 && f >= 0 && d >= 0 && v >= 0 && (d <= n && this.everMovedUp && l.canScrollUp() && (!i || i.distance > d) && (i = { scrollCache: l, name: "top", distance: d }), v <= n && this.everMovedDown && l.canScrollDown() && (!i || i.distance > v) && (i = { scrollCache: l, name: "bottom", distance: v }), c <= n && this.everMovedLeft && l.canScrollLeft() && (!i || i.distance > c) && (i = { scrollCache: l, name: "left", distance: c }), f <= n && this.everMovedRight && l.canScrollRight() && (!i || i.distance > f) && (i = { scrollCache: l, name: "right", distance: f }));
    }
    return i;
  }, t.prototype.buildCaches = function(e) {
    return this.queryScrollEls(e).map(function(r) {
      return r === window ? new Ac(!1) : new Zi(r, !1);
    });
  }, t.prototype.queryScrollEls = function(e) {
    for (var r = [], n = 0, i = this.scrollQuery; n < i.length; n++) {
      var a = i[n];
      typeof a == "object" ? r.push(a) : r.push.apply(r, Array.prototype.slice.call(Vn(e).querySelectorAll(a)));
    }
    return r;
  }, t;
}(), Le = function(t) {
  R(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    i.containerEl = r, i.delay = null, i.minDistance = 0, i.touchScrollAllowed = !0, i.mirrorNeedsRevert = !1, i.isInteracting = !1, i.isDragging = !1, i.isDelayEnded = !1, i.isDistanceSurpassed = !1, i.delayTimeoutId = null, i.onPointerDown = function(o) {
      i.isDragging || (i.isInteracting = !0, i.isDelayEnded = !1, i.isDistanceSurpassed = !1, Na(document.body), La(document.body), o.isTouch || o.origEvent.preventDefault(), i.emitter.trigger("pointerdown", o), i.isInteracting && !i.pointer.shouldIgnoreMove && (i.mirror.setIsVisible(!1), i.mirror.start(o.subjectEl, o.pageX, o.pageY), i.startDelay(o), i.minDistance || i.handleDistanceSurpassed(o)));
    }, i.onPointerMove = function(o) {
      if (i.isInteracting) {
        if (i.emitter.trigger("pointermove", o), !i.isDistanceSurpassed) {
          var s = i.minDistance, l = void 0, u = o.deltaX, c = o.deltaY;
          l = u * u + c * c, l >= s * s && i.handleDistanceSurpassed(o);
        }
        i.isDragging && (o.origEvent.type !== "scroll" && (i.mirror.handleMove(o.pageX, o.pageY), i.autoScroller.handleMove(o.pageX, o.pageY)), i.emitter.trigger("dragmove", o));
      }
    }, i.onPointerUp = function(o) {
      i.isInteracting && (i.isInteracting = !1, Oa(document.body), Va(document.body), i.emitter.trigger("pointerup", o), i.isDragging && (i.autoScroller.stop(), i.tryStopDrag(o)), i.delayTimeoutId && (clearTimeout(i.delayTimeoutId), i.delayTimeoutId = null));
    };
    var a = i.pointer = new Er(r);
    return a.emitter.on("pointerdown", i.onPointerDown), a.emitter.on("pointermove", i.onPointerMove), a.emitter.on("pointerup", i.onPointerUp), n && (a.selector = n), i.mirror = new xc(), i.autoScroller = new Nc(), i;
  }
  return e.prototype.destroy = function() {
    this.pointer.destroy(), this.onPointerUp({});
  }, e.prototype.startDelay = function(r) {
    var n = this;
    typeof this.delay == "number" ? this.delayTimeoutId = setTimeout(function() {
      n.delayTimeoutId = null, n.handleDelayEnd(r);
    }, this.delay) : this.handleDelayEnd(r);
  }, e.prototype.handleDelayEnd = function(r) {
    this.isDelayEnded = !0, this.tryStartDrag(r);
  }, e.prototype.handleDistanceSurpassed = function(r) {
    this.isDistanceSurpassed = !0, this.tryStartDrag(r);
  }, e.prototype.tryStartDrag = function(r) {
    this.isDelayEnded && this.isDistanceSurpassed && (!this.pointer.wasTouchScroll || this.touchScrollAllowed) && (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(r.pageX, r.pageY, this.containerEl), this.emitter.trigger("dragstart", r), this.touchScrollAllowed === !1 && this.pointer.cancelTouchScroll());
  }, e.prototype.tryStopDrag = function(r) {
    this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, r));
  }, e.prototype.stopDrag = function(r) {
    this.isDragging = !1, this.emitter.trigger("dragend", r);
  }, e.prototype.setIgnoreMove = function(r) {
    this.pointer.shouldIgnoreMove = r;
  }, e.prototype.setMirrorIsVisible = function(r) {
    this.mirror.setIsVisible(r);
  }, e.prototype.setMirrorNeedsRevert = function(r) {
    this.mirrorNeedsRevert = r;
  }, e.prototype.setAutoScrollEnabled = function(r) {
    this.autoScroller.isEnabled = r;
  }, e;
}(ki), Oc = function() {
  function t(e) {
    this.origRect = fr(e), this.scrollCaches = pi(e).map(function(r) {
      return new Zi(r, !0);
    });
  }
  return t.prototype.destroy = function() {
    for (var e = 0, r = this.scrollCaches; e < r.length; e++) {
      var n = r[e];
      n.destroy();
    }
  }, t.prototype.computeLeft = function() {
    for (var e = this.origRect.left, r = 0, n = this.scrollCaches; r < n.length; r++) {
      var i = n[r];
      e += i.origScrollLeft - i.getScrollLeft();
    }
    return e;
  }, t.prototype.computeTop = function() {
    for (var e = this.origRect.top, r = 0, n = this.scrollCaches; r < n.length; r++) {
      var i = n[r];
      e += i.origScrollTop - i.getScrollTop();
    }
    return e;
  }, t.prototype.isWithinClipping = function(e, r) {
    for (var n = { left: e, top: r }, i = 0, a = this.scrollCaches; i < a.length; i++) {
      var o = a[i];
      if (!Lc(o.getEventTarget()) && !Ts(n, o.clientRect))
        return !1;
    }
    return !0;
  }, t;
}();
function Lc(t) {
  var e = t.tagName;
  return e === "HTML" || e === "BODY";
}
var ht = function() {
  function t(e, r) {
    var n = this;
    this.useSubjectCenter = !1, this.requireInitial = !0, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = function(i) {
      var a = n.dragging;
      n.initialHit = null, n.movingHit = null, n.finalHit = null, n.prepareHits(), n.processFirstCoord(i), n.initialHit || !n.requireInitial ? (a.setIgnoreMove(!1), n.emitter.trigger("pointerdown", i)) : a.setIgnoreMove(!0);
    }, this.handleDragStart = function(i) {
      n.emitter.trigger("dragstart", i), n.handleMove(i, !0);
    }, this.handleDragMove = function(i) {
      n.emitter.trigger("dragmove", i), n.handleMove(i);
    }, this.handlePointerUp = function(i) {
      n.releaseHits(), n.emitter.trigger("pointerup", i);
    }, this.handleDragEnd = function(i) {
      n.movingHit && n.emitter.trigger("hitupdate", null, !0, i), n.finalHit = n.movingHit, n.movingHit = null, n.emitter.trigger("dragend", i);
    }, this.droppableStore = r, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new vt();
  }
  return t.prototype.processFirstCoord = function(e) {
    var r = { left: e.pageX, top: e.pageY }, n = r, i = e.subjectEl, a;
    i instanceof HTMLElement && (a = fr(i), n = _s(n, a));
    var o = this.initialHit = this.queryHitForOffset(n.left, n.top);
    if (o) {
      if (this.useSubjectCenter && a) {
        var s = ci(a, o.rect);
        s && (n = Ms(s));
      }
      this.coordAdjust = ks(n, r);
    } else
      this.coordAdjust = { left: 0, top: 0 };
  }, t.prototype.handleMove = function(e, r) {
    var n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
    (r || !gt(this.movingHit, n)) && (this.movingHit = n, this.emitter.trigger("hitupdate", n, !1, e));
  }, t.prototype.prepareHits = function() {
    this.offsetTrackers = ce(this.droppableStore, function(e) {
      return e.component.prepareHits(), new Oc(e.el);
    });
  }, t.prototype.releaseHits = function() {
    var e = this.offsetTrackers;
    for (var r in e)
      e[r].destroy();
    this.offsetTrackers = {};
  }, t.prototype.queryHitForOffset = function(e, r) {
    var n = this, i = n.droppableStore, a = n.offsetTrackers, o = null;
    for (var s in i) {
      var l = i[s].component, u = a[s];
      if (u && u.isWithinClipping(e, r)) {
        var c = u.computeLeft(), f = u.computeTop(), d = e - c, v = r - f, p = u.origRect, E = p.right - p.left, S = p.bottom - p.top;
        if (d >= 0 && d < E && v >= 0 && v < S) {
          var g = l.queryHit(d, v, E, S);
          g && dt(g.dateProfile.activeRange, g.dateSpan.range) && (!o || g.layer > o.layer) && (g.componentId = s, g.context = l.context, g.rect.left += c, g.rect.right += c, g.rect.top += f, g.rect.bottom += f, o = g);
        }
      }
    }
    return o;
  }, t;
}();
function gt(t, e) {
  return !t && !e ? !0 : Boolean(t) !== Boolean(e) ? !1 : es(t.dateSpan, e.dateSpan);
}
function Xi(t, e) {
  for (var r = {}, n = 0, i = e.pluginHooks.datePointTransforms; n < i.length; n++) {
    var a = i[n];
    h(r, a(t, e));
  }
  return h(r, Vc(t, e.dateEnv)), r;
}
function Vc(t, e) {
  return {
    date: e.toDate(t.range.start),
    dateStr: e.formatIso(t.range.start, { omitTime: t.allDay }),
    allDay: t.allDay
  };
}
var Uc = function(t) {
  R(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    n.handlePointerDown = function(a) {
      var o = n.dragging, s = a.origEvent.target;
      o.setIgnoreMove(!n.component.isValidDateDownEl(s));
    }, n.handleDragEnd = function(a) {
      var o = n.component, s = n.dragging.pointer;
      if (!s.wasTouchScroll) {
        var l = n.hitDragging, u = l.initialHit, c = l.finalHit;
        if (u && c && gt(u, c)) {
          var f = o.context, d = h(h({}, Xi(u.dateSpan, f)), { dayEl: u.dayEl, jsEvent: a.origEvent, view: f.viewApi || f.calendarApi.view });
          f.emitter.trigger("dateClick", d);
        }
      }
    }, n.dragging = new Le(r.el), n.dragging.autoScroller.isEnabled = !1;
    var i = n.hitDragging = new ht(n.dragging, gr(r));
    return i.emitter.on("pointerdown", n.handlePointerDown), i.emitter.on("dragend", n.handleDragEnd), n;
  }
  return e.prototype.destroy = function() {
    this.dragging.destroy();
  }, e;
}(we), Wc = function(t) {
  R(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    n.dragSelection = null, n.handlePointerDown = function(l) {
      var u = n, c = u.component, f = u.dragging, d = c.context.options, v = d.selectable && c.isValidDateDownEl(l.origEvent.target);
      f.setIgnoreMove(!v), f.delay = l.isTouch ? Bc(c) : null;
    }, n.handleDragStart = function(l) {
      n.component.context.calendarApi.unselect(l);
    }, n.handleHitUpdate = function(l, u) {
      var c = n.component.context, f = null, d = !1;
      if (l) {
        var v = n.hitDragging.initialHit, p = l.componentId === v.componentId && n.isHitComboAllowed && !n.isHitComboAllowed(v, l);
        p || (f = Fc(v, l, c.pluginHooks.dateSelectionTransformers)), (!f || !wu(f, l.dateProfile, c)) && (d = !0, f = null);
      }
      f ? c.dispatch({ type: "SELECT_DATES", selection: f }) : u || c.dispatch({ type: "UNSELECT_DATES" }), d ? $t() : Kt(), u || (n.dragSelection = f);
    }, n.handlePointerUp = function(l) {
      n.dragSelection && (ti(n.dragSelection, l, n.component.context), n.dragSelection = null);
    };
    var i = r.component, a = i.context.options, o = n.dragging = new Le(r.el);
    o.touchScrollAllowed = !1, o.minDistance = a.selectMinDistance || 0, o.autoScroller.isEnabled = a.dragScroll;
    var s = n.hitDragging = new ht(n.dragging, gr(r));
    return s.emitter.on("pointerdown", n.handlePointerDown), s.emitter.on("dragstart", n.handleDragStart), s.emitter.on("hitupdate", n.handleHitUpdate), s.emitter.on("pointerup", n.handlePointerUp), n;
  }
  return e.prototype.destroy = function() {
    this.dragging.destroy();
  }, e;
}(we);
function Bc(t) {
  var e = t.context.options, r = e.selectLongPressDelay;
  return r == null && (r = e.longPressDelay), r;
}
function Fc(t, e, r) {
  var n = t.dateSpan, i = e.dateSpan, a = [
    n.range.start,
    n.range.end,
    i.range.start,
    i.range.end
  ];
  a.sort(za);
  for (var o = {}, s = 0, l = r; s < l.length; s++) {
    var u = l[s], c = u(t, e);
    if (c === !1)
      return null;
    c && h(o, c);
  }
  return o.range = { start: a[0], end: a[3] }, o.allDay = n.allDay, o;
}
var $i = function(t) {
  R(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    n.subjectEl = null, n.subjectSeg = null, n.isDragging = !1, n.eventRange = null, n.relevantEvents = null, n.receivingContext = null, n.validMutation = null, n.mutatedRelevantEvents = null, n.handlePointerDown = function(l) {
      var u = l.origEvent.target, c = n, f = c.component, d = c.dragging, v = d.mirror, p = f.context.options, E = f.context;
      n.subjectEl = l.subjectEl;
      var S = n.subjectSeg = Se(l.subjectEl), g = n.eventRange = S.eventRange, b = g.instance.instanceId;
      n.relevantEvents = nr(E.getCurrentData().eventStore, b), d.minDistance = l.isTouch ? 0 : p.eventDragMinDistance, d.delay = l.isTouch && b !== f.props.eventSelection ? Gc(f) : null, p.fixedMirrorParent ? v.parentNode = p.fixedMirrorParent : v.parentNode = U(u, ".fc"), v.revertDuration = p.dragRevertDuration;
      var D = f.isValidSegDownEl(u) && !U(u, ".fc-event-resizer");
      d.setIgnoreMove(!D), n.isDragging = D && l.subjectEl.classList.contains("fc-event-draggable");
    }, n.handleDragStart = function(l) {
      var u = n.component.context, c = n.eventRange, f = c.instance.instanceId;
      l.isTouch ? f !== n.component.props.eventSelection && u.dispatch({ type: "SELECT_EVENT", eventInstanceId: f }) : u.dispatch({ type: "UNSELECT_EVENT" }), n.isDragging && (u.calendarApi.unselect(l), u.emitter.trigger("eventDragStart", {
        el: n.subjectEl,
        event: new N(u, c.def, c.instance),
        jsEvent: l.origEvent,
        view: u.viewApi
      }));
    }, n.handleHitUpdate = function(l, u) {
      if (!!n.isDragging) {
        var c = n.relevantEvents, f = n.hitDragging.initialHit, d = n.component.context, v = null, p = null, E = null, S = !1, g = {
          affectedEvents: c,
          mutatedEvents: Y(),
          isEvent: !0
        };
        if (l) {
          v = l.context;
          var b = v.options;
          d === v || b.editable && b.droppable ? (p = zc(f, l, v.getCurrentData().pluginHooks.eventDragMutationMassagers), p && (E = lr(c, v.getCurrentData().eventUiBases, p, v), g.mutatedEvents = E, xi(g, l.dateProfile, v) || (S = !0, p = null, E = null, g.mutatedEvents = Y()))) : v = null;
        }
        n.displayDrag(v, g), S ? $t() : Kt(), u || (d === v && gt(f, l) && (p = null), n.dragging.setMirrorNeedsRevert(!p), n.dragging.setMirrorIsVisible(!l || !Vn(n.subjectEl).querySelector(".fc-event-mirror")), n.receivingContext = v, n.validMutation = p, n.mutatedRelevantEvents = E);
      }
    }, n.handlePointerUp = function() {
      n.isDragging || n.cleanup();
    }, n.handleDragEnd = function(l) {
      if (n.isDragging) {
        var u = n.component.context, c = u.viewApi, f = n, d = f.receivingContext, v = f.validMutation, p = n.eventRange.def, E = n.eventRange.instance, S = new N(u, p, E), g = n.relevantEvents, b = n.mutatedRelevantEvents, D = n.hitDragging.finalHit;
        if (n.clearDrag(), u.emitter.trigger("eventDragStop", {
          el: n.subjectEl,
          event: S,
          jsEvent: l.origEvent,
          view: c
        }), v) {
          if (d === u) {
            var C = new N(u, b.defs[p.defId], E ? b.instances[E.instanceId] : null);
            u.dispatch({
              type: "MERGE_EVENTS",
              eventStore: b
            });
            for (var k = {
              oldEvent: S,
              event: C,
              relatedEvents: oe(b, u, E),
              revert: function() {
                u.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: g
                });
              }
            }, T = {}, P = 0, _ = u.getCurrentData().pluginHooks.eventDropTransformers; P < _.length; P++) {
              var O = _[P];
              h(T, O(v, u));
            }
            u.emitter.trigger("eventDrop", h(h(h({}, k), T), { el: l.subjectEl, delta: v.datesDelta, jsEvent: l.origEvent, view: c })), u.emitter.trigger("eventChange", k);
          } else if (d) {
            var L = {
              event: S,
              relatedEvents: oe(g, u, E),
              revert: function() {
                u.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: g
                });
              }
            };
            u.emitter.trigger("eventLeave", h(h({}, L), { draggedEl: l.subjectEl, view: c })), u.dispatch({
              type: "REMOVE_EVENTS",
              eventStore: g
            }), u.emitter.trigger("eventRemove", L);
            var Z = b.defs[p.defId], z = b.instances[E.instanceId], Ve = new N(d, Z, z);
            d.dispatch({
              type: "MERGE_EVENTS",
              eventStore: b
            });
            var Ue = {
              event: Ve,
              relatedEvents: oe(b, d, z),
              revert: function() {
                d.dispatch({
                  type: "REMOVE_EVENTS",
                  eventStore: b
                });
              }
            };
            d.emitter.trigger("eventAdd", Ue), l.isTouch && d.dispatch({
              type: "SELECT_EVENT",
              eventInstanceId: E.instanceId
            }), d.emitter.trigger("drop", h(h({}, Xi(D.dateSpan, d)), { draggedEl: l.subjectEl, jsEvent: l.origEvent, view: D.context.viewApi })), d.emitter.trigger("eventReceive", h(h({}, Ue), { draggedEl: l.subjectEl, view: D.context.viewApi }));
          }
        } else
          u.emitter.trigger("_noEventDrop");
      }
      n.cleanup();
    };
    var i = n.component, a = i.context.options, o = n.dragging = new Le(r.el);
    o.pointer.selector = e.SELECTOR, o.touchScrollAllowed = !1, o.autoScroller.isEnabled = a.dragScroll;
    var s = n.hitDragging = new ht(n.dragging, Gt);
    return s.useSubjectCenter = r.useEventCenter, s.emitter.on("pointerdown", n.handlePointerDown), s.emitter.on("dragstart", n.handleDragStart), s.emitter.on("hitupdate", n.handleHitUpdate), s.emitter.on("pointerup", n.handlePointerUp), s.emitter.on("dragend", n.handleDragEnd), n;
  }
  return e.prototype.destroy = function() {
    this.dragging.destroy();
  }, e.prototype.displayDrag = function(r, n) {
    var i = this.component.context, a = this.receivingContext;
    a && a !== r && (a === i ? a.dispatch({
      type: "SET_EVENT_DRAG",
      state: {
        affectedEvents: n.affectedEvents,
        mutatedEvents: Y(),
        isEvent: !0
      }
    }) : a.dispatch({ type: "UNSET_EVENT_DRAG" })), r && r.dispatch({ type: "SET_EVENT_DRAG", state: n });
  }, e.prototype.clearDrag = function() {
    var r = this.component.context, n = this.receivingContext;
    n && n.dispatch({ type: "UNSET_EVENT_DRAG" }), r !== n && r.dispatch({ type: "UNSET_EVENT_DRAG" });
  }, e.prototype.cleanup = function() {
    this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null;
  }, e.SELECTOR = ".fc-event-draggable, .fc-event-resizable", e;
}(we);
function zc(t, e, r) {
  var n = t.dateSpan, i = e.dateSpan, a = n.range.start, o = i.range.start, s = {};
  n.allDay !== i.allDay && (s.allDay = i.allDay, s.hasEnd = e.context.options.allDayMaintainDuration, i.allDay && (a = H(a)));
  var l = pe(a, o, t.context.dateEnv, t.componentId === e.componentId ? t.largeUnit : null);
  l.milliseconds && (s.allDay = !1);
  for (var u = {
    datesDelta: l,
    standardProps: s
  }, c = 0, f = r; c < f.length; c++) {
    var d = f[c];
    d(u, t, e);
  }
  return u;
}
function Gc(t) {
  var e = t.context.options, r = e.eventLongPressDelay;
  return r == null && (r = e.longPressDelay), r;
}
var qc = function(t) {
  R(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    n.draggingSegEl = null, n.draggingSeg = null, n.eventRange = null, n.relevantEvents = null, n.validMutation = null, n.mutatedRelevantEvents = null, n.handlePointerDown = function(s) {
      var l = n.component, u = n.querySegEl(s), c = Se(u), f = n.eventRange = c.eventRange;
      n.dragging.minDistance = l.context.options.eventDragMinDistance, n.dragging.setIgnoreMove(!n.component.isValidSegDownEl(s.origEvent.target) || s.isTouch && n.component.props.eventSelection !== f.instance.instanceId);
    }, n.handleDragStart = function(s) {
      var l = n.component.context, u = n.eventRange;
      n.relevantEvents = nr(l.getCurrentData().eventStore, n.eventRange.instance.instanceId);
      var c = n.querySegEl(s);
      n.draggingSegEl = c, n.draggingSeg = Se(c), l.calendarApi.unselect(), l.emitter.trigger("eventResizeStart", {
        el: c,
        event: new N(l, u.def, u.instance),
        jsEvent: s.origEvent,
        view: l.viewApi
      });
    }, n.handleHitUpdate = function(s, l, u) {
      var c = n.component.context, f = n.relevantEvents, d = n.hitDragging.initialHit, v = n.eventRange.instance, p = null, E = null, S = !1, g = {
        affectedEvents: f,
        mutatedEvents: Y(),
        isEvent: !0
      };
      if (s) {
        var b = s.componentId === d.componentId && n.isHitComboAllowed && !n.isHitComboAllowed(d, s);
        b || (p = Yc(d, s, u.subjectEl.classList.contains("fc-event-resizer-start"), v.range));
      }
      p && (E = lr(f, c.getCurrentData().eventUiBases, p, c), g.mutatedEvents = E, xi(g, s.dateProfile, c) || (S = !0, p = null, E = null, g.mutatedEvents = null)), E ? c.dispatch({
        type: "SET_EVENT_RESIZE",
        state: g
      }) : c.dispatch({ type: "UNSET_EVENT_RESIZE" }), S ? $t() : Kt(), l || (p && gt(d, s) && (p = null), n.validMutation = p, n.mutatedRelevantEvents = E);
    }, n.handleDragEnd = function(s) {
      var l = n.component.context, u = n.eventRange.def, c = n.eventRange.instance, f = new N(l, u, c), d = n.relevantEvents, v = n.mutatedRelevantEvents;
      if (l.emitter.trigger("eventResizeStop", {
        el: n.draggingSegEl,
        event: f,
        jsEvent: s.origEvent,
        view: l.viewApi
      }), n.validMutation) {
        var p = new N(l, v.defs[u.defId], c ? v.instances[c.instanceId] : null);
        l.dispatch({
          type: "MERGE_EVENTS",
          eventStore: v
        });
        var E = {
          oldEvent: f,
          event: p,
          relatedEvents: oe(v, l, c),
          revert: function() {
            l.dispatch({
              type: "MERGE_EVENTS",
              eventStore: d
            });
          }
        };
        l.emitter.trigger("eventResize", h(h({}, E), { el: n.draggingSegEl, startDelta: n.validMutation.startDelta || I(0), endDelta: n.validMutation.endDelta || I(0), jsEvent: s.origEvent, view: l.viewApi })), l.emitter.trigger("eventChange", E);
      } else
        l.emitter.trigger("_noEventResize");
      n.draggingSeg = null, n.relevantEvents = null, n.validMutation = null;
    };
    var i = r.component, a = n.dragging = new Le(r.el);
    a.pointer.selector = ".fc-event-resizer", a.touchScrollAllowed = !1, a.autoScroller.isEnabled = i.context.options.dragScroll;
    var o = n.hitDragging = new ht(n.dragging, gr(r));
    return o.emitter.on("pointerdown", n.handlePointerDown), o.emitter.on("dragstart", n.handleDragStart), o.emitter.on("hitupdate", n.handleHitUpdate), o.emitter.on("dragend", n.handleDragEnd), n;
  }
  return e.prototype.destroy = function() {
    this.dragging.destroy();
  }, e.prototype.querySegEl = function(r) {
    return U(r.subjectEl, ".fc-event");
  }, e;
}(we);
function Yc(t, e, r, n) {
  var i = t.context.dateEnv, a = t.dateSpan.range.start, o = e.dateSpan.range.start, s = pe(a, o, i, t.largeUnit);
  if (r) {
    if (i.add(n.start, s) < n.end)
      return { startDelta: s };
  } else if (i.add(n.end, s) > n.start)
    return { endDelta: s };
  return null;
}
var jc = function() {
  function t(e) {
    var r = this;
    this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = function(i) {
      i.jsEvent && (r.isRecentPointerDateSelect = !0);
    }, this.onDocumentPointerDown = function(i) {
      var a = r.context.options.unselectCancel, o = Ln(i.origEvent);
      r.matchesCancel = !!U(o, a), r.matchesEvent = !!U(o, $i.SELECTOR);
    }, this.onDocumentPointerUp = function(i) {
      var a = r.context, o = r.documentPointer, s = a.getCurrentData();
      if (!o.wasTouchScroll) {
        if (s.dateSelection && !r.isRecentPointerDateSelect) {
          var l = a.options.unselectAuto;
          l && (!l || !r.matchesCancel) && a.calendarApi.unselect(i);
        }
        s.eventSelection && !r.matchesEvent && a.dispatch({ type: "UNSELECT_EVENT" });
      }
      r.isRecentPointerDateSelect = !1;
    };
    var n = this.documentPointer = new Er(document);
    n.shouldIgnoreMove = !0, n.shouldWatchScroll = !1, n.emitter.on("pointerdown", this.onDocumentPointerDown), n.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
  }
  return t.prototype.destroy = function() {
    this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
  }, t;
}(), Zc = {
  fixedMirrorParent: y
}, Xc = {
  dateClick: y,
  eventDragStart: y,
  eventDragStop: y,
  eventDrop: y,
  eventResizeStart: y,
  eventResizeStop: y,
  eventResize: y,
  drop: y,
  eventReceive: y,
  eventLeave: y
};
mr.dataAttrPrefix = "";
(function(t) {
  R(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    n.shouldIgnoreMove = !1, n.mirrorSelector = "", n.currentMirrorEl = null, n.handlePointerDown = function(a) {
      n.emitter.trigger("pointerdown", a), n.shouldIgnoreMove || n.emitter.trigger("dragstart", a);
    }, n.handlePointerMove = function(a) {
      n.shouldIgnoreMove || n.emitter.trigger("dragmove", a);
    }, n.handlePointerUp = function(a) {
      n.emitter.trigger("pointerup", a), n.shouldIgnoreMove || n.emitter.trigger("dragend", a);
    };
    var i = n.pointer = new Er(r);
    return i.emitter.on("pointerdown", n.handlePointerDown), i.emitter.on("pointermove", n.handlePointerMove), i.emitter.on("pointerup", n.handlePointerUp), n;
  }
  return e.prototype.destroy = function() {
    this.pointer.destroy();
  }, e.prototype.setIgnoreMove = function(r) {
    this.shouldIgnoreMove = r;
  }, e.prototype.setMirrorIsVisible = function(r) {
    if (r)
      this.currentMirrorEl && (this.currentMirrorEl.style.visibility = "", this.currentMirrorEl = null);
    else {
      var n = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null;
      n && (this.currentMirrorEl = n, n.style.visibility = "hidden");
    }
  }, e;
})(ki);
var $c = te({
  componentInteractions: [Uc, Wc, $i, qc],
  calendarInteractions: [jc],
  elementDraggingImpl: Le,
  optionRefiners: Zc,
  listenerRefiners: Xc
});
const Kc = Ki({
  props: {
    local: {
      type: String,
      default: "zh-cn"
    },
    initialView: {
      type: String,
      default: "dayGridMonth"
    },
    buttonText: {
      type: Object,
      default: () => ({
        today: "\u4ECA\u5929",
        month: "\u6708",
        week: "\u5468",
        day: "\u65E5",
        prevYear: "\u4E0A\u4E00\u5E74",
        nextYear: "\u4E0B\u4E00\u5E74",
        prev: "\u4E0A\u4E00\u6708",
        next: "\u4E0B\u4E00\u6708"
      })
    },
    headerToolbar: {
      type: Object,
      default: () => ({
        start: "title",
        center: "",
        end: "prev today next"
      })
    },
    footerToolbar: {
      type: Object
    },
    events: {
      type: Array,
      default: () => []
    },
    eventContent: {
      type: Function
    }
  },
  components: {},
  emits: ["date-click", "event-click"],
  setup(t, e) {
    let r = Ji(), n = () => {
      let i = document.getElementById("calendar");
      i && (r.value = new oc(i, {
        plugins: [Mc, $c],
        initialView: t.initialView,
        locale: t.local,
        buttonText: t.buttonText,
        headerToolbar: t.headerToolbar,
        footerToolbar: t.footerToolbar,
        eventSources: [
          {
            events(a, o) {
              t.events.length ? o(t.events) : o([]);
            }
          }
        ],
        dateClick(a) {
          e.emit("date-click", a);
        },
        eventClick(a) {
          e.emit("event-click", a);
        },
        displayEventEnd: !0,
        eventContent: t.eventContent
      }), r.value.render());
    };
    Qi(
      () => t.events,
      () => {
        n();
      },
      { deep: !0 }
    ), ea(() => {
      n();
    });
  }
}), Jc = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, Qc = { id: "calendar" };
function ef(t, e, r, n, i, a) {
  return ta(), ra("div", Qc);
}
const tf = /* @__PURE__ */ Jc(Kc, [["render", ef]]), nf = {
  install(t) {
    t.component("mk-calendar", tf);
  }
};
export {
  nf as default
};
