import { defineComponent as ft, computed as B, ref as J, onMounted as gt, watch as ye, resolveComponent as A, resolveDirective as vt, openBlock as d, createElementBlock as _, withDirectives as pt, createBlock as C, mergeProps as dt, withCtx as Y, Fragment as F, renderList as yt, createCommentVNode as S, createElementVNode as bt, withModifiers as be, renderSlot as G, createVNode as X, toDisplayString as $t, resolveDynamicComponent as ht, normalizeStyle as _t } from "vue";
var U = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function mt() {
  this.__data__ = [], this.size = 0;
}
var Tt = mt;
function jt(e, t) {
  return e === t || e !== e && t !== t;
}
var Ke = jt, At = Ke;
function Ct(e, t) {
  for (var r = e.length; r--; )
    if (At(e[r][0], t))
      return r;
  return -1;
}
var V = Ct, St = V, wt = Array.prototype, Ot = wt.splice;
function It(e) {
  var t = this.__data__, r = St(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : Ot.call(t, r, 1), --this.size, !0;
}
var Pt = It, Et = V;
function kt(e) {
  var t = this.__data__, r = Et(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Lt = kt, Mt = V;
function xt(e) {
  return Mt(this.__data__, e) > -1;
}
var Dt = xt, Bt = V;
function Ft(e, t) {
  var r = this.__data__, a = Bt(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
var Gt = Ft, Ut = Tt, Nt = Pt, zt = Lt, Vt = Dt, Kt = Gt;
function w(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
w.prototype.clear = Ut;
w.prototype.delete = Nt;
w.prototype.get = zt;
w.prototype.has = Vt;
w.prototype.set = Kt;
var K = w, Rt = K;
function Ht() {
  this.__data__ = new Rt(), this.size = 0;
}
var qt = Ht;
function Wt(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Jt = Wt;
function Yt(e) {
  return this.__data__.get(e);
}
var Xt = Yt;
function Zt(e) {
  return this.__data__.has(e);
}
var Qt = Zt, er = typeof U == "object" && U && U.Object === Object && U, Re = er, tr = Re, rr = typeof self == "object" && self && self.Object === Object && self, ar = tr || rr || Function("return this")(), $ = ar, nr = $, or = nr.Symbol, oe = or, $e = oe, He = Object.prototype, ir = He.hasOwnProperty, sr = He.toString, L = $e ? $e.toStringTag : void 0;
function lr(e) {
  var t = ir.call(e, L), r = e[L];
  try {
    e[L] = void 0;
    var a = !0;
  } catch {
  }
  var i = sr.call(e);
  return a && (t ? e[L] = r : delete e[L]), i;
}
var cr = lr, ur = Object.prototype, fr = ur.toString;
function gr(e) {
  return fr.call(e);
}
var vr = gr, he = oe, pr = cr, dr = vr, yr = "[object Null]", br = "[object Undefined]", _e = he ? he.toStringTag : void 0;
function $r(e) {
  return e == null ? e === void 0 ? br : yr : _e && _e in Object(e) ? pr(e) : dr(e);
}
var R = $r;
function hr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var x = hr, _r = R, mr = x, Tr = "[object AsyncFunction]", jr = "[object Function]", Ar = "[object GeneratorFunction]", Cr = "[object Proxy]";
function Sr(e) {
  if (!mr(e))
    return !1;
  var t = _r(e);
  return t == jr || t == Ar || t == Tr || t == Cr;
}
var qe = Sr, wr = $, Or = wr["__core-js_shared__"], Ir = Or, Z = Ir, me = function() {
  var e = /[^.]+$/.exec(Z && Z.keys && Z.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Pr(e) {
  return !!me && me in e;
}
var Er = Pr, kr = Function.prototype, Lr = kr.toString;
function Mr(e) {
  if (e != null) {
    try {
      return Lr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var We = Mr, xr = qe, Dr = Er, Br = x, Fr = We, Gr = /[\\^$.*+?()[\]{}|]/g, Ur = /^\[object .+?Constructor\]$/, Nr = Function.prototype, zr = Object.prototype, Vr = Nr.toString, Kr = zr.hasOwnProperty, Rr = RegExp(
  "^" + Vr.call(Kr).replace(Gr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Hr(e) {
  if (!Br(e) || Dr(e))
    return !1;
  var t = xr(e) ? Rr : Ur;
  return t.test(Fr(e));
}
var qr = Hr;
function Wr(e, t) {
  return e == null ? void 0 : e[t];
}
var Jr = Wr, Yr = qr, Xr = Jr;
function Zr(e, t) {
  var r = Xr(e, t);
  return Yr(r) ? r : void 0;
}
var j = Zr, Qr = j, ea = $, ta = Qr(ea, "Map"), ie = ta, ra = j, aa = ra(Object, "create"), H = aa, Te = H;
function na() {
  this.__data__ = Te ? Te(null) : {}, this.size = 0;
}
var oa = na;
function ia(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var sa = ia, la = H, ca = "__lodash_hash_undefined__", ua = Object.prototype, fa = ua.hasOwnProperty;
function ga(e) {
  var t = this.__data__;
  if (la) {
    var r = t[e];
    return r === ca ? void 0 : r;
  }
  return fa.call(t, e) ? t[e] : void 0;
}
var va = ga, pa = H, da = Object.prototype, ya = da.hasOwnProperty;
function ba(e) {
  var t = this.__data__;
  return pa ? t[e] !== void 0 : ya.call(t, e);
}
var $a = ba, ha = H, _a = "__lodash_hash_undefined__";
function ma(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ha && t === void 0 ? _a : t, this;
}
var Ta = ma, ja = oa, Aa = sa, Ca = va, Sa = $a, wa = Ta;
function O(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
O.prototype.clear = ja;
O.prototype.delete = Aa;
O.prototype.get = Ca;
O.prototype.has = Sa;
O.prototype.set = wa;
var Oa = O, je = Oa, Ia = K, Pa = ie;
function Ea() {
  this.size = 0, this.__data__ = {
    hash: new je(),
    map: new (Pa || Ia)(),
    string: new je()
  };
}
var ka = Ea;
function La(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Ma = La, xa = Ma;
function Da(e, t) {
  var r = e.__data__;
  return xa(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var q = Da, Ba = q;
function Fa(e) {
  var t = Ba(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Ga = Fa, Ua = q;
function Na(e) {
  return Ua(this, e).get(e);
}
var za = Na, Va = q;
function Ka(e) {
  return Va(this, e).has(e);
}
var Ra = Ka, Ha = q;
function qa(e, t) {
  var r = Ha(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
var Wa = qa, Ja = ka, Ya = Ga, Xa = za, Za = Ra, Qa = Wa;
function I(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
I.prototype.clear = Ja;
I.prototype.delete = Ya;
I.prototype.get = Xa;
I.prototype.has = Za;
I.prototype.set = Qa;
var en = I, tn = K, rn = ie, an = en, nn = 200;
function on(e, t) {
  var r = this.__data__;
  if (r instanceof tn) {
    var a = r.__data__;
    if (!rn || a.length < nn - 1)
      return a.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new an(a);
  }
  return r.set(e, t), this.size = r.size, this;
}
var sn = on, ln = K, cn = qt, un = Jt, fn = Xt, gn = Qt, vn = sn;
function P(e) {
  var t = this.__data__ = new ln(e);
  this.size = t.size;
}
P.prototype.clear = cn;
P.prototype.delete = un;
P.prototype.get = fn;
P.prototype.has = gn;
P.prototype.set = vn;
var pn = P;
function dn(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var yn = dn, bn = j, $n = function() {
  try {
    var e = bn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), hn = $n, Ae = hn;
function _n(e, t, r) {
  t == "__proto__" && Ae ? Ae(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Je = _n, mn = Je, Tn = Ke, jn = Object.prototype, An = jn.hasOwnProperty;
function Cn(e, t, r) {
  var a = e[t];
  (!(An.call(e, t) && Tn(a, r)) || r === void 0 && !(t in e)) && mn(e, t, r);
}
var Ye = Cn, Sn = Ye, wn = Je;
function On(e, t, r, a) {
  var i = !r;
  r || (r = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var l = t[s], v = a ? a(r[l], e[l], l, r, e) : void 0;
    v === void 0 && (v = e[l]), i ? wn(r, l, v) : Sn(r, l, v);
  }
  return r;
}
var W = On;
function In(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var Pn = In;
function En(e) {
  return e != null && typeof e == "object";
}
var D = En, kn = R, Ln = D, Mn = "[object Arguments]";
function xn(e) {
  return Ln(e) && kn(e) == Mn;
}
var Dn = xn, Ce = Dn, Bn = D, Xe = Object.prototype, Fn = Xe.hasOwnProperty, Gn = Xe.propertyIsEnumerable, Un = Ce(function() {
  return arguments;
}()) ? Ce : function(e) {
  return Bn(e) && Fn.call(e, "callee") && !Gn.call(e, "callee");
}, Nn = Un, zn = Array.isArray, se = zn, z = { exports: {} };
function Vn() {
  return !1;
}
var Kn = Vn;
(function(e, t) {
  var r = $, a = Kn, i = t && !t.nodeType && t, s = i && !0 && e && !e.nodeType && e, o = s && s.exports === i, l = o ? r.Buffer : void 0, v = l ? l.isBuffer : void 0, f = v || a;
  e.exports = f;
})(z, z.exports);
var Rn = 9007199254740991, Hn = /^(?:0|[1-9]\d*)$/;
function qn(e, t) {
  var r = typeof e;
  return t = t == null ? Rn : t, !!t && (r == "number" || r != "symbol" && Hn.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Wn = qn, Jn = 9007199254740991;
function Yn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Jn;
}
var Ze = Yn, Xn = R, Zn = Ze, Qn = D, eo = "[object Arguments]", to = "[object Array]", ro = "[object Boolean]", ao = "[object Date]", no = "[object Error]", oo = "[object Function]", io = "[object Map]", so = "[object Number]", lo = "[object Object]", co = "[object RegExp]", uo = "[object Set]", fo = "[object String]", go = "[object WeakMap]", vo = "[object ArrayBuffer]", po = "[object DataView]", yo = "[object Float32Array]", bo = "[object Float64Array]", $o = "[object Int8Array]", ho = "[object Int16Array]", _o = "[object Int32Array]", mo = "[object Uint8Array]", To = "[object Uint8ClampedArray]", jo = "[object Uint16Array]", Ao = "[object Uint32Array]", u = {};
u[yo] = u[bo] = u[$o] = u[ho] = u[_o] = u[mo] = u[To] = u[jo] = u[Ao] = !0;
u[eo] = u[to] = u[vo] = u[ro] = u[po] = u[ao] = u[no] = u[oo] = u[io] = u[so] = u[lo] = u[co] = u[uo] = u[fo] = u[go] = !1;
function Co(e) {
  return Qn(e) && Zn(e.length) && !!u[Xn(e)];
}
var So = Co;
function wo(e) {
  return function(t) {
    return e(t);
  };
}
var le = wo, M = { exports: {} };
(function(e, t) {
  var r = Re, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, o = s && r.process, l = function() {
    try {
      var v = i && i.require && i.require("util").types;
      return v || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(M, M.exports);
var Oo = So, Io = le, Se = M.exports, we = Se && Se.isTypedArray, Po = we ? Io(we) : Oo, Eo = Po, ko = Pn, Lo = Nn, Mo = se, xo = z.exports, Do = Wn, Bo = Eo, Fo = Object.prototype, Go = Fo.hasOwnProperty;
function Uo(e, t) {
  var r = Mo(e), a = !r && Lo(e), i = !r && !a && xo(e), s = !r && !a && !i && Bo(e), o = r || a || i || s, l = o ? ko(e.length, String) : [], v = l.length;
  for (var f in e)
    (t || Go.call(e, f)) && !(o && (f == "length" || i && (f == "offset" || f == "parent") || s && (f == "buffer" || f == "byteLength" || f == "byteOffset") || Do(f, v))) && l.push(f);
  return l;
}
var Qe = Uo, No = Object.prototype;
function zo(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || No;
  return e === r;
}
var ce = zo;
function Vo(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var et = Vo, Ko = et, Ro = Ko(Object.keys, Object), Ho = Ro, qo = ce, Wo = Ho, Jo = Object.prototype, Yo = Jo.hasOwnProperty;
function Xo(e) {
  if (!qo(e))
    return Wo(e);
  var t = [];
  for (var r in Object(e))
    Yo.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Zo = Xo, Qo = qe, ei = Ze;
function ti(e) {
  return e != null && ei(e.length) && !Qo(e);
}
var tt = ti, ri = Qe, ai = Zo, ni = tt;
function oi(e) {
  return ni(e) ? ri(e) : ai(e);
}
var ue = oi, ii = W, si = ue;
function li(e, t) {
  return e && ii(t, si(t), e);
}
var ci = li;
function ui(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var fi = ui, gi = x, vi = ce, pi = fi, di = Object.prototype, yi = di.hasOwnProperty;
function bi(e) {
  if (!gi(e))
    return pi(e);
  var t = vi(e), r = [];
  for (var a in e)
    a == "constructor" && (t || !yi.call(e, a)) || r.push(a);
  return r;
}
var $i = bi, hi = Qe, _i = $i, mi = tt;
function Ti(e) {
  return mi(e) ? hi(e, !0) : _i(e);
}
var fe = Ti, ji = W, Ai = fe;
function Ci(e, t) {
  return e && ji(t, Ai(t), e);
}
var Si = Ci, Q = { exports: {} };
(function(e, t) {
  var r = $, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, o = s ? r.Buffer : void 0, l = o ? o.allocUnsafe : void 0;
  function v(f, m) {
    if (m)
      return f.slice();
    var y = f.length, h = l ? l(y) : new f.constructor(y);
    return f.copy(h), h;
  }
  e.exports = v;
})(Q, Q.exports);
function wi(e, t) {
  var r = -1, a = e.length;
  for (t || (t = Array(a)); ++r < a; )
    t[r] = e[r];
  return t;
}
var Oi = wi;
function Ii(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, i = 0, s = []; ++r < a; ) {
    var o = e[r];
    t(o, r, e) && (s[i++] = o);
  }
  return s;
}
var Pi = Ii;
function Ei() {
  return [];
}
var rt = Ei, ki = Pi, Li = rt, Mi = Object.prototype, xi = Mi.propertyIsEnumerable, Oe = Object.getOwnPropertySymbols, Di = Oe ? function(e) {
  return e == null ? [] : (e = Object(e), ki(Oe(e), function(t) {
    return xi.call(e, t);
  }));
} : Li, ge = Di, Bi = W, Fi = ge;
function Gi(e, t) {
  return Bi(e, Fi(e), t);
}
var Ui = Gi;
function Ni(e, t) {
  for (var r = -1, a = t.length, i = e.length; ++r < a; )
    e[i + r] = t[r];
  return e;
}
var at = Ni, zi = et, Vi = zi(Object.getPrototypeOf, Object), nt = Vi, Ki = at, Ri = nt, Hi = ge, qi = rt, Wi = Object.getOwnPropertySymbols, Ji = Wi ? function(e) {
  for (var t = []; e; )
    Ki(t, Hi(e)), e = Ri(e);
  return t;
} : qi, ot = Ji, Yi = W, Xi = ot;
function Zi(e, t) {
  return Yi(e, Xi(e), t);
}
var Qi = Zi, es = at, ts = se;
function rs(e, t, r) {
  var a = t(e);
  return ts(e) ? a : es(a, r(e));
}
var it = rs, as = it, ns = ge, os = ue;
function is(e) {
  return as(e, os, ns);
}
var ss = is, ls = it, cs = ot, us = fe;
function fs(e) {
  return ls(e, us, cs);
}
var gs = fs, vs = j, ps = $, ds = vs(ps, "DataView"), ys = ds, bs = j, $s = $, hs = bs($s, "Promise"), _s = hs, ms = j, Ts = $, js = ms(Ts, "Set"), As = js, Cs = j, Ss = $, ws = Cs(Ss, "WeakMap"), Os = ws, ee = ys, te = ie, re = _s, ae = As, ne = Os, st = R, E = We, Ie = "[object Map]", Is = "[object Object]", Pe = "[object Promise]", Ee = "[object Set]", ke = "[object WeakMap]", Le = "[object DataView]", Ps = E(ee), Es = E(te), ks = E(re), Ls = E(ae), Ms = E(ne), T = st;
(ee && T(new ee(new ArrayBuffer(1))) != Le || te && T(new te()) != Ie || re && T(re.resolve()) != Pe || ae && T(new ae()) != Ee || ne && T(new ne()) != ke) && (T = function(e) {
  var t = st(e), r = t == Is ? e.constructor : void 0, a = r ? E(r) : "";
  if (a)
    switch (a) {
      case Ps:
        return Le;
      case Es:
        return Ie;
      case ks:
        return Pe;
      case Ls:
        return Ee;
      case Ms:
        return ke;
    }
  return t;
});
var ve = T, xs = Object.prototype, Ds = xs.hasOwnProperty;
function Bs(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Ds.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Fs = Bs, Gs = $, Us = Gs.Uint8Array, Ns = Us, Me = Ns;
function zs(e) {
  var t = new e.constructor(e.byteLength);
  return new Me(t).set(new Me(e)), t;
}
var pe = zs, Vs = pe;
function Ks(e, t) {
  var r = t ? Vs(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Rs = Ks, Hs = /\w*$/;
function qs(e) {
  var t = new e.constructor(e.source, Hs.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Ws = qs, xe = oe, De = xe ? xe.prototype : void 0, Be = De ? De.valueOf : void 0;
function Js(e) {
  return Be ? Object(Be.call(e)) : {};
}
var Ys = Js, Xs = pe;
function Zs(e, t) {
  var r = t ? Xs(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Qs = Zs, el = pe, tl = Rs, rl = Ws, al = Ys, nl = Qs, ol = "[object Boolean]", il = "[object Date]", sl = "[object Map]", ll = "[object Number]", cl = "[object RegExp]", ul = "[object Set]", fl = "[object String]", gl = "[object Symbol]", vl = "[object ArrayBuffer]", pl = "[object DataView]", dl = "[object Float32Array]", yl = "[object Float64Array]", bl = "[object Int8Array]", $l = "[object Int16Array]", hl = "[object Int32Array]", _l = "[object Uint8Array]", ml = "[object Uint8ClampedArray]", Tl = "[object Uint16Array]", jl = "[object Uint32Array]";
function Al(e, t, r) {
  var a = e.constructor;
  switch (t) {
    case vl:
      return el(e);
    case ol:
    case il:
      return new a(+e);
    case pl:
      return tl(e, r);
    case dl:
    case yl:
    case bl:
    case $l:
    case hl:
    case _l:
    case ml:
    case Tl:
    case jl:
      return nl(e, r);
    case sl:
      return new a();
    case ll:
    case fl:
      return new a(e);
    case cl:
      return rl(e);
    case ul:
      return new a();
    case gl:
      return al(e);
  }
}
var Cl = Al, Sl = x, Fe = Object.create, wl = function() {
  function e() {
  }
  return function(t) {
    if (!Sl(t))
      return {};
    if (Fe)
      return Fe(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), Ol = wl, Il = Ol, Pl = nt, El = ce;
function kl(e) {
  return typeof e.constructor == "function" && !El(e) ? Il(Pl(e)) : {};
}
var Ll = kl, Ml = ve, xl = D, Dl = "[object Map]";
function Bl(e) {
  return xl(e) && Ml(e) == Dl;
}
var Fl = Bl, Gl = Fl, Ul = le, Ge = M.exports, Ue = Ge && Ge.isMap, Nl = Ue ? Ul(Ue) : Gl, zl = Nl, Vl = ve, Kl = D, Rl = "[object Set]";
function Hl(e) {
  return Kl(e) && Vl(e) == Rl;
}
var ql = Hl, Wl = ql, Jl = le, Ne = M.exports, ze = Ne && Ne.isSet, Yl = ze ? Jl(ze) : Wl, Xl = Yl, Zl = pn, Ql = yn, ec = Ye, tc = ci, rc = Si, ac = Q.exports, nc = Oi, oc = Ui, ic = Qi, sc = ss, lc = gs, cc = ve, uc = Fs, fc = Cl, gc = Ll, vc = se, pc = z.exports, dc = zl, yc = x, bc = Xl, $c = ue, hc = fe, _c = 1, mc = 2, Tc = 4, lt = "[object Arguments]", jc = "[object Array]", Ac = "[object Boolean]", Cc = "[object Date]", Sc = "[object Error]", ct = "[object Function]", wc = "[object GeneratorFunction]", Oc = "[object Map]", Ic = "[object Number]", ut = "[object Object]", Pc = "[object RegExp]", Ec = "[object Set]", kc = "[object String]", Lc = "[object Symbol]", Mc = "[object WeakMap]", xc = "[object ArrayBuffer]", Dc = "[object DataView]", Bc = "[object Float32Array]", Fc = "[object Float64Array]", Gc = "[object Int8Array]", Uc = "[object Int16Array]", Nc = "[object Int32Array]", zc = "[object Uint8Array]", Vc = "[object Uint8ClampedArray]", Kc = "[object Uint16Array]", Rc = "[object Uint32Array]", c = {};
c[lt] = c[jc] = c[xc] = c[Dc] = c[Ac] = c[Cc] = c[Bc] = c[Fc] = c[Gc] = c[Uc] = c[Nc] = c[Oc] = c[Ic] = c[ut] = c[Pc] = c[Ec] = c[kc] = c[Lc] = c[zc] = c[Vc] = c[Kc] = c[Rc] = !0;
c[Sc] = c[ct] = c[Mc] = !1;
function N(e, t, r, a, i, s) {
  var o, l = t & _c, v = t & mc, f = t & Tc;
  if (r && (o = i ? r(e, a, i, s) : r(e)), o !== void 0)
    return o;
  if (!yc(e))
    return e;
  var m = vc(e);
  if (m) {
    if (o = uc(e), !l)
      return nc(e, o);
  } else {
    var y = cc(e), h = y == ct || y == wc;
    if (pc(e))
      return ac(e, l);
    if (y == ut || y == lt || h && !i) {
      if (o = v || h ? {} : gc(e), !l)
        return v ? ic(e, rc(o, e)) : oc(e, tc(o, e));
    } else {
      if (!c[y])
        return i ? e : {};
      o = fc(e, y, l);
    }
  }
  s || (s = new Zl());
  var g = s.get(e);
  if (g)
    return g;
  s.set(e, o), bc(e) ? e.forEach(function(n) {
    o.add(N(n, t, r, n, e, s));
  }) : dc(e) && e.forEach(function(n, b) {
    o.set(b, N(n, t, r, b, e, s));
  });
  var k = f ? v ? lc : sc : v ? hc : $c, p = m ? void 0 : k(e);
  return Ql(p || e, function(n, b) {
    p && (b = n, n = e[b]), ec(o, b, N(n, t, r, b, e, s));
  }), o;
}
var Hc = N, qc = Hc, Wc = 1, Jc = 4;
function Yc(e) {
  return qc(e, Wc | Jc);
}
var Ve = Yc;
const Xc = ft({
  components: {},
  props: {
    options: {
      type: Array,
      required: !0
    },
    data: {
      type: Array,
      required: !0
    },
    elementLoadingText: {
      type: String
    },
    elementLoadingSpinner: {
      type: String
    },
    elementLoadingBackground: {
      type: String
    },
    elementLoadingSvg: {
      type: String
    },
    elementLoadingSvgViewBox: {
      type: String
    },
    editIcon: {
      type: String,
      default: "el-icon-edit"
    },
    isEditRow: {
      type: Boolean,
      default: !1
    },
    editRowIndex: {
      type: String,
      default: ""
    },
    pagination: {
      type: Boolean,
      default: !1
    },
    paginationAlign: {
      type: String,
      default: "left"
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40]
    },
    total: {
      type: Number,
      default: 0
    }
  },
  emits: [
    "conform",
    "cancel",
    "update:editRowIndex",
    "size-change",
    "current-change"
  ],
  setup(e, t) {
    let r = B(
      () => e.options.filter((n) => !n.action)
    ), a = B(() => e.options.find((n) => n.action)), i = B(() => !e.data || !e.data.length), s = J(""), o = J(Ve(e.data)), l = J(e.editRowIndex);
    gt(() => {
      o.value.map((n) => {
        n.rowEdit = !1;
      });
    }), ye(
      () => e.data,
      (n) => {
        o.value = Ve(n), o.value.map((b) => {
          b.rowEdit = !1;
        });
      },
      { deep: !0 }
    ), ye(
      () => e.editRowIndex,
      (n) => {
        n && (l.value = n);
      }
    );
    let v = (n, b) => {
      b.label === a.value.label && e.isEditRow && e.editRowIndex && l.value === e.editRowIndex && (n.rowEdit = !n.rowEdit, o.value.map((de) => {
        de != n && (de.rowEdit = !1);
      }), n.rowEdit || t.emit("update:editRowIndex", ""));
    }, f = (n) => {
      s.value = n.$index + n.column.id;
    }, m = (n) => {
      t.emit("conform", n);
    }, y = (n) => {
      t.emit("cancel", n);
    }, h = () => {
      s.value = "";
    }, g = (n) => {
      t.emit("size-change", n);
    }, k = (n) => {
      t.emit("current-change", n);
    }, p = B(() => e.paginationAlign === "left" ? "flex-start" : e.paginationAlign === "right" ? "flex-end" : "center");
    return {
      tableOption: r,
      actionOption: a,
      isLoading: i,
      clickEdit: f,
      currentEdit: s,
      check: m,
      close: y,
      clickEditCell: h,
      tableData: o,
      rowClick: v,
      cloneEditRowIndex: l,
      handleSizeChange: g,
      handleCurrentChange: k,
      justifyContent: p
    };
  }
});
const Zc = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [a, i] of t)
    r[a] = i;
  return r;
}, Qc = {
  key: 0,
  style: { display: "flex" }
}, eu = {
  key: 1,
  class: "icons"
}, tu = { key: 1 };
function ru(e, t, r, a, i, s) {
  const o = A("el-input"), l = A("el-icon-check"), v = A("el-icon-close"), f = A("el-table-column"), m = A("el-table"), y = A("el-pagination"), h = vt("loading");
  return d(), _("div", null, [
    pt((d(), C(m, dt(e.$attrs, {
      data: e.tableData,
      "element-loading-text": e.elementLoadingText,
      "element-loading-spinner": e.elementLoadingSpinner,
      "element-loading-background": e.elementLoadingBackground,
      "element-loading-svg": e.elementLoadingSvg,
      "element-loading-svg-view-box": e.elementLoadingSvgViewBox,
      onRowClick: e.rowClick
    }), {
      default: Y(() => [
        (d(!0), _(F, null, yt(e.tableOption, (g, k) => (d(), C(f, {
          key: k,
          label: g.label,
          prop: g.prop,
          align: g.align,
          width: g.width
        }, {
          default: Y((p) => [
            p.row.rowEdit ? (d(), _(F, { key: 0 }, [
              g.prop ? (d(), C(o, {
                key: 0,
                size: "small",
                modelValue: p.row[g.prop],
                "onUpdate:modelValue": (n) => p.row[g.prop] = n
              }, null, 8, ["modelValue", "onUpdate:modelValue"])) : S("", !0)
            ], 64)) : (d(), _(F, { key: 1 }, [
              p.$index + p.column.id === e.currentEdit ? (d(), _("div", Qc, [
                g.prop ? (d(), C(o, {
                  key: 0,
                  size: "small",
                  modelValue: p.row[g.prop],
                  "onUpdate:modelValue": (n) => p.row[g.prop] = n
                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : S("", !0),
                bt("div", {
                  onClick: t[0] || (t[0] = be((...n) => e.clickEditCell && e.clickEditCell(...n), ["stop"]))
                }, [
                  e.$slots.editCell ? G(e.$slots, "editCell", {
                    key: 0,
                    scope: p
                  }, void 0, !0) : (d(), _("div", eu, [
                    X(l, {
                      class: "check",
                      onClick: (n) => e.check(p)
                    }, null, 8, ["onClick"]),
                    X(v, {
                      class: "close",
                      onClick: (n) => e.close(p)
                    }, null, 8, ["onClick"])
                  ]))
                ])
              ])) : (d(), _(F, { key: 1 }, [
                g.slot ? G(e.$slots, g.slot, {
                  key: 0,
                  scope: p
                }, void 0, !0) : g.prop ? (d(), _("span", tu, $t(p.row[g.prop]), 1)) : S("", !0),
                g.editable ? (d(), C(ht(e.editIcon), {
                  key: 2,
                  class: "edit",
                  onClick: be((n) => e.clickEdit(p), ["stop"])
                }, null, 8, ["onClick"])) : S("", !0)
              ], 64))
            ], 64))
          ]),
          _: 2
        }, 1032, ["label", "prop", "align", "width"]))), 128)),
        e.actionOption ? (d(), C(f, {
          key: 0,
          label: e.actionOption.label,
          width: e.actionOption.width,
          align: e.actionOption.align
        }, {
          default: Y((g) => [
            g.row.rowEdit ? G(e.$slots, "editRow", {
              key: 0,
              scope: g
            }, void 0, !0) : G(e.$slots, "action", {
              key: 1,
              scope: g
            }, void 0, !0)
          ]),
          _: 3
        }, 8, ["label", "width", "align"])) : S("", !0)
      ]),
      _: 3
    }, 16, ["data", "element-loading-text", "element-loading-spinner", "element-loading-background", "element-loading-svg", "element-loading-svg-view-box", "onRowClick"])), [
      [h, e.isLoading]
    ]),
    e.pagination ? (d(), _("div", {
      key: 0,
      class: "pagination",
      style: _t({ justifyContent: e.justifyContent })
    }, [
      X(y, {
        currentPage: e.currentPage,
        "page-size": e.pageSize,
        "page-sizes": e.pageSizes,
        layout: "total, sizes, prev, pager, next, jumper",
        total: e.total,
        onSizeChange: e.handleSizeChange,
        onCurrentChange: e.handleCurrentChange
      }, null, 8, ["currentPage", "page-size", "page-sizes", "total", "onSizeChange", "onCurrentChange"])
    ], 4)) : S("", !0)
  ]);
}
const au = /* @__PURE__ */ Zc(Xc, [["render", ru], ["__scopeId", "data-v-837eb952"]]), ou = {
  install(e) {
    e.component("mk-table", au);
  }
};
export {
  ou as default
};
