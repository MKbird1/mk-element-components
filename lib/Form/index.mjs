import { defineComponent as Cn, ref as Kt, onMounted as Tn, watch as Dn, nextTick as In, resolveComponent as ae, openBlock as dt, createBlock as xt, mergeProps as Jt, withCtx as Nt, createElementBlock as Wt, Fragment as ie, renderList as Ie, resolveDynamicComponent as le, createCommentVNode as Bt, renderSlot as se, createVNode as Pn } from "vue";
var Xt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Rn(P) {
  return P && P.__esModule && Object.prototype.hasOwnProperty.call(P, "default") ? P.default : P;
}
function Mn() {
  this.__data__ = [], this.size = 0;
}
var Nn = Mn;
function Bn(P, O) {
  return P === O || P !== P && O !== O;
}
var _e = Bn, Fn = _e;
function On(P, O) {
  for (var o = P.length; o--; )
    if (Fn(P[o][0], O))
      return o;
  return -1;
}
var qt = On, Ln = qt, $n = Array.prototype, Hn = $n.splice;
function bn(P) {
  var O = this.__data__, o = Ln(O, P);
  if (o < 0)
    return !1;
  var n = O.length - 1;
  return o == n ? O.pop() : Hn.call(O, o, 1), --this.size, !0;
}
var jn = bn, Un = qt;
function wn(P) {
  var O = this.__data__, o = Un(O, P);
  return o < 0 ? void 0 : O[o][1];
}
var Qn = wn, Yn = qt;
function zn(P) {
  return Yn(this.__data__, P) > -1;
}
var Gn = zn, Vn = qt;
function Kn(P, O) {
  var o = this.__data__, n = Vn(o, P);
  return n < 0 ? (++this.size, o.push([P, O])) : o[n][1] = O, this;
}
var Jn = Kn, Wn = Nn, Xn = jn, Zn = Qn, kn = Gn, qn = Jn;
function Ft(P) {
  var O = -1, o = P == null ? 0 : P.length;
  for (this.clear(); ++O < o; ) {
    var n = P[O];
    this.set(n[0], n[1]);
  }
}
Ft.prototype.clear = Wn;
Ft.prototype.delete = Xn;
Ft.prototype.get = Zn;
Ft.prototype.has = kn;
Ft.prototype.set = qn;
var _t = Ft, _n = _t;
function tr() {
  this.__data__ = new _n(), this.size = 0;
}
var er = tr;
function nr(P) {
  var O = this.__data__, o = O.delete(P);
  return this.size = O.size, o;
}
var rr = nr;
function or(P) {
  return this.__data__.get(P);
}
var ar = or;
function ir(P) {
  return this.__data__.has(P);
}
var lr = ir, sr = typeof Xt == "object" && Xt && Xt.Object === Object && Xt, tn = sr, ur = tn, fr = typeof self == "object" && self && self.Object === Object && self, cr = ur || fr || Function("return this")(), pt = cr, dr = pt, vr = dr.Symbol, he = vr, Pe = he, en = Object.prototype, pr = en.hasOwnProperty, mr = en.toString, wt = Pe ? Pe.toStringTag : void 0;
function hr(P) {
  var O = pr.call(P, wt), o = P[wt];
  try {
    P[wt] = void 0;
    var n = !0;
  } catch {
  }
  var t = mr.call(P);
  return n && (O ? P[wt] = o : delete P[wt]), t;
}
var gr = hr, Ar = Object.prototype, yr = Ar.toString;
function Er(P) {
  return yr.call(P);
}
var xr = Er, Re = he, Sr = gr, Cr = xr, Tr = "[object Null]", Dr = "[object Undefined]", Me = Re ? Re.toStringTag : void 0;
function Ir(P) {
  return P == null ? P === void 0 ? Dr : Tr : Me && Me in Object(P) ? Sr(P) : Cr(P);
}
var te = Ir;
function Pr(P) {
  var O = typeof P;
  return P != null && (O == "object" || O == "function");
}
var Yt = Pr, Rr = te, Mr = Yt, Nr = "[object AsyncFunction]", Br = "[object Function]", Fr = "[object GeneratorFunction]", Or = "[object Proxy]";
function Lr(P) {
  if (!Mr(P))
    return !1;
  var O = Rr(P);
  return O == Br || O == Fr || O == Nr || O == Or;
}
var nn = Lr, $r = pt, Hr = $r["__core-js_shared__"], br = Hr, ue = br, Ne = function() {
  var P = /[^.]+$/.exec(ue && ue.keys && ue.keys.IE_PROTO || "");
  return P ? "Symbol(src)_1." + P : "";
}();
function jr(P) {
  return !!Ne && Ne in P;
}
var Ur = jr, wr = Function.prototype, Qr = wr.toString;
function Yr(P) {
  if (P != null) {
    try {
      return Qr.call(P);
    } catch {
    }
    try {
      return P + "";
    } catch {
    }
  }
  return "";
}
var rn = Yr, zr = nn, Gr = Ur, Vr = Yt, Kr = rn, Jr = /[\\^$.*+?()[\]{}|]/g, Wr = /^\[object .+?Constructor\]$/, Xr = Function.prototype, Zr = Object.prototype, kr = Xr.toString, qr = Zr.hasOwnProperty, _r = RegExp(
  "^" + kr.call(qr).replace(Jr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function to(P) {
  if (!Vr(P) || Gr(P))
    return !1;
  var O = zr(P) ? _r : Wr;
  return O.test(Kr(P));
}
var eo = to;
function no(P, O) {
  return P == null ? void 0 : P[O];
}
var ro = no, oo = eo, ao = ro;
function io(P, O) {
  var o = ao(P, O);
  return oo(o) ? o : void 0;
}
var Ct = io, lo = Ct, so = pt, uo = lo(so, "Map"), ge = uo, fo = Ct, co = fo(Object, "create"), ee = co, Be = ee;
function vo() {
  this.__data__ = Be ? Be(null) : {}, this.size = 0;
}
var po = vo;
function mo(P) {
  var O = this.has(P) && delete this.__data__[P];
  return this.size -= O ? 1 : 0, O;
}
var ho = mo, go = ee, Ao = "__lodash_hash_undefined__", yo = Object.prototype, Eo = yo.hasOwnProperty;
function xo(P) {
  var O = this.__data__;
  if (go) {
    var o = O[P];
    return o === Ao ? void 0 : o;
  }
  return Eo.call(O, P) ? O[P] : void 0;
}
var So = xo, Co = ee, To = Object.prototype, Do = To.hasOwnProperty;
function Io(P) {
  var O = this.__data__;
  return Co ? O[P] !== void 0 : Do.call(O, P);
}
var Po = Io, Ro = ee, Mo = "__lodash_hash_undefined__";
function No(P, O) {
  var o = this.__data__;
  return this.size += this.has(P) ? 0 : 1, o[P] = Ro && O === void 0 ? Mo : O, this;
}
var Bo = No, Fo = po, Oo = ho, Lo = So, $o = Po, Ho = Bo;
function Ot(P) {
  var O = -1, o = P == null ? 0 : P.length;
  for (this.clear(); ++O < o; ) {
    var n = P[O];
    this.set(n[0], n[1]);
  }
}
Ot.prototype.clear = Fo;
Ot.prototype.delete = Oo;
Ot.prototype.get = Lo;
Ot.prototype.has = $o;
Ot.prototype.set = Ho;
var bo = Ot, Fe = bo, jo = _t, Uo = ge;
function wo() {
  this.size = 0, this.__data__ = {
    hash: new Fe(),
    map: new (Uo || jo)(),
    string: new Fe()
  };
}
var Qo = wo;
function Yo(P) {
  var O = typeof P;
  return O == "string" || O == "number" || O == "symbol" || O == "boolean" ? P !== "__proto__" : P === null;
}
var zo = Yo, Go = zo;
function Vo(P, O) {
  var o = P.__data__;
  return Go(O) ? o[typeof O == "string" ? "string" : "hash"] : o.map;
}
var ne = Vo, Ko = ne;
function Jo(P) {
  var O = Ko(this, P).delete(P);
  return this.size -= O ? 1 : 0, O;
}
var Wo = Jo, Xo = ne;
function Zo(P) {
  return Xo(this, P).get(P);
}
var ko = Zo, qo = ne;
function _o(P) {
  return qo(this, P).has(P);
}
var ta = _o, ea = ne;
function na(P, O) {
  var o = ea(this, P), n = o.size;
  return o.set(P, O), this.size += o.size == n ? 0 : 1, this;
}
var ra = na, oa = Qo, aa = Wo, ia = ko, la = ta, sa = ra;
function Lt(P) {
  var O = -1, o = P == null ? 0 : P.length;
  for (this.clear(); ++O < o; ) {
    var n = P[O];
    this.set(n[0], n[1]);
  }
}
Lt.prototype.clear = oa;
Lt.prototype.delete = aa;
Lt.prototype.get = ia;
Lt.prototype.has = la;
Lt.prototype.set = sa;
var ua = Lt, fa = _t, ca = ge, da = ua, va = 200;
function pa(P, O) {
  var o = this.__data__;
  if (o instanceof fa) {
    var n = o.__data__;
    if (!ca || n.length < va - 1)
      return n.push([P, O]), this.size = ++o.size, this;
    o = this.__data__ = new da(n);
  }
  return o.set(P, O), this.size = o.size, this;
}
var ma = pa, ha = _t, ga = er, Aa = rr, ya = ar, Ea = lr, xa = ma;
function $t(P) {
  var O = this.__data__ = new ha(P);
  this.size = O.size;
}
$t.prototype.clear = ga;
$t.prototype.delete = Aa;
$t.prototype.get = ya;
$t.prototype.has = Ea;
$t.prototype.set = xa;
var Sa = $t;
function Ca(P, O) {
  for (var o = -1, n = P == null ? 0 : P.length; ++o < n && O(P[o], o, P) !== !1; )
    ;
  return P;
}
var Ta = Ca, Da = Ct, Ia = function() {
  try {
    var P = Da(Object, "defineProperty");
    return P({}, "", {}), P;
  } catch {
  }
}(), Pa = Ia, Oe = Pa;
function Ra(P, O, o) {
  O == "__proto__" && Oe ? Oe(P, O, {
    configurable: !0,
    enumerable: !0,
    value: o,
    writable: !0
  }) : P[O] = o;
}
var on = Ra, Ma = on, Na = _e, Ba = Object.prototype, Fa = Ba.hasOwnProperty;
function Oa(P, O, o) {
  var n = P[O];
  (!(Fa.call(P, O) && Na(n, o)) || o === void 0 && !(O in P)) && Ma(P, O, o);
}
var an = Oa, La = an, $a = on;
function Ha(P, O, o, n) {
  var t = !o;
  o || (o = {});
  for (var e = -1, i = O.length; ++e < i; ) {
    var r = O[e], a = n ? n(o[r], P[r], r, o, P) : void 0;
    a === void 0 && (a = P[r]), t ? $a(o, r, a) : La(o, r, a);
  }
  return o;
}
var re = Ha;
function ba(P, O) {
  for (var o = -1, n = Array(P); ++o < P; )
    n[o] = O(o);
  return n;
}
var ja = ba;
function Ua(P) {
  return P != null && typeof P == "object";
}
var zt = Ua, wa = te, Qa = zt, Ya = "[object Arguments]";
function za(P) {
  return Qa(P) && wa(P) == Ya;
}
var Ga = za, Le = Ga, Va = zt, ln = Object.prototype, Ka = ln.hasOwnProperty, Ja = ln.propertyIsEnumerable, Wa = Le(function() {
  return arguments;
}()) ? Le : function(P) {
  return Va(P) && Ka.call(P, "callee") && !Ja.call(P, "callee");
}, Xa = Wa, Za = Array.isArray, Ae = Za, kt = { exports: {} };
function ka() {
  return !1;
}
var qa = ka;
(function(P, O) {
  var o = pt, n = qa, t = O && !O.nodeType && O, e = t && !0 && P && !P.nodeType && P, i = e && e.exports === t, r = i ? o.Buffer : void 0, a = r ? r.isBuffer : void 0, u = a || n;
  P.exports = u;
})(kt, kt.exports);
var _a = 9007199254740991, ti = /^(?:0|[1-9]\d*)$/;
function ei(P, O) {
  var o = typeof P;
  return O = O == null ? _a : O, !!O && (o == "number" || o != "symbol" && ti.test(P)) && P > -1 && P % 1 == 0 && P < O;
}
var ni = ei, ri = 9007199254740991;
function oi(P) {
  return typeof P == "number" && P > -1 && P % 1 == 0 && P <= ri;
}
var sn = oi, ai = te, ii = sn, li = zt, si = "[object Arguments]", ui = "[object Array]", fi = "[object Boolean]", ci = "[object Date]", di = "[object Error]", vi = "[object Function]", pi = "[object Map]", mi = "[object Number]", hi = "[object Object]", gi = "[object RegExp]", Ai = "[object Set]", yi = "[object String]", Ei = "[object WeakMap]", xi = "[object ArrayBuffer]", Si = "[object DataView]", Ci = "[object Float32Array]", Ti = "[object Float64Array]", Di = "[object Int8Array]", Ii = "[object Int16Array]", Pi = "[object Int32Array]", Ri = "[object Uint8Array]", Mi = "[object Uint8ClampedArray]", Ni = "[object Uint16Array]", Bi = "[object Uint32Array]", ot = {};
ot[Ci] = ot[Ti] = ot[Di] = ot[Ii] = ot[Pi] = ot[Ri] = ot[Mi] = ot[Ni] = ot[Bi] = !0;
ot[si] = ot[ui] = ot[xi] = ot[fi] = ot[Si] = ot[ci] = ot[di] = ot[vi] = ot[pi] = ot[mi] = ot[hi] = ot[gi] = ot[Ai] = ot[yi] = ot[Ei] = !1;
function Fi(P) {
  return li(P) && ii(P.length) && !!ot[ai(P)];
}
var Oi = Fi;
function Li(P) {
  return function(O) {
    return P(O);
  };
}
var ye = Li, Qt = { exports: {} };
(function(P, O) {
  var o = tn, n = O && !O.nodeType && O, t = n && !0 && P && !P.nodeType && P, e = t && t.exports === n, i = e && o.process, r = function() {
    try {
      var a = t && t.require && t.require("util").types;
      return a || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  P.exports = r;
})(Qt, Qt.exports);
var $i = Oi, Hi = ye, $e = Qt.exports, He = $e && $e.isTypedArray, bi = He ? Hi(He) : $i, ji = bi, Ui = ja, wi = Xa, Qi = Ae, Yi = kt.exports, zi = ni, Gi = ji, Vi = Object.prototype, Ki = Vi.hasOwnProperty;
function Ji(P, O) {
  var o = Qi(P), n = !o && wi(P), t = !o && !n && Yi(P), e = !o && !n && !t && Gi(P), i = o || n || t || e, r = i ? Ui(P.length, String) : [], a = r.length;
  for (var u in P)
    (O || Ki.call(P, u)) && !(i && (u == "length" || t && (u == "offset" || u == "parent") || e && (u == "buffer" || u == "byteLength" || u == "byteOffset") || zi(u, a))) && r.push(u);
  return r;
}
var un = Ji, Wi = Object.prototype;
function Xi(P) {
  var O = P && P.constructor, o = typeof O == "function" && O.prototype || Wi;
  return P === o;
}
var Ee = Xi;
function Zi(P, O) {
  return function(o) {
    return P(O(o));
  };
}
var fn = Zi, ki = fn, qi = ki(Object.keys, Object), _i = qi, tl = Ee, el = _i, nl = Object.prototype, rl = nl.hasOwnProperty;
function ol(P) {
  if (!tl(P))
    return el(P);
  var O = [];
  for (var o in Object(P))
    rl.call(P, o) && o != "constructor" && O.push(o);
  return O;
}
var al = ol, il = nn, ll = sn;
function sl(P) {
  return P != null && ll(P.length) && !il(P);
}
var cn = sl, ul = un, fl = al, cl = cn;
function dl(P) {
  return cl(P) ? ul(P) : fl(P);
}
var xe = dl, vl = re, pl = xe;
function ml(P, O) {
  return P && vl(O, pl(O), P);
}
var hl = ml;
function gl(P) {
  var O = [];
  if (P != null)
    for (var o in Object(P))
      O.push(o);
  return O;
}
var Al = gl, yl = Yt, El = Ee, xl = Al, Sl = Object.prototype, Cl = Sl.hasOwnProperty;
function Tl(P) {
  if (!yl(P))
    return xl(P);
  var O = El(P), o = [];
  for (var n in P)
    n == "constructor" && (O || !Cl.call(P, n)) || o.push(n);
  return o;
}
var Dl = Tl, Il = un, Pl = Dl, Rl = cn;
function Ml(P) {
  return Rl(P) ? Il(P, !0) : Pl(P);
}
var Se = Ml, Nl = re, Bl = Se;
function Fl(P, O) {
  return P && Nl(O, Bl(O), P);
}
var Ol = Fl, fe = { exports: {} };
(function(P, O) {
  var o = pt, n = O && !O.nodeType && O, t = n && !0 && P && !P.nodeType && P, e = t && t.exports === n, i = e ? o.Buffer : void 0, r = i ? i.allocUnsafe : void 0;
  function a(u, g) {
    if (g)
      return u.slice();
    var d = u.length, h = r ? r(d) : new u.constructor(d);
    return u.copy(h), h;
  }
  P.exports = a;
})(fe, fe.exports);
function Ll(P, O) {
  var o = -1, n = P.length;
  for (O || (O = Array(n)); ++o < n; )
    O[o] = P[o];
  return O;
}
var $l = Ll;
function Hl(P, O) {
  for (var o = -1, n = P == null ? 0 : P.length, t = 0, e = []; ++o < n; ) {
    var i = P[o];
    O(i, o, P) && (e[t++] = i);
  }
  return e;
}
var bl = Hl;
function jl() {
  return [];
}
var dn = jl, Ul = bl, wl = dn, Ql = Object.prototype, Yl = Ql.propertyIsEnumerable, be = Object.getOwnPropertySymbols, zl = be ? function(P) {
  return P == null ? [] : (P = Object(P), Ul(be(P), function(O) {
    return Yl.call(P, O);
  }));
} : wl, Ce = zl, Gl = re, Vl = Ce;
function Kl(P, O) {
  return Gl(P, Vl(P), O);
}
var Jl = Kl;
function Wl(P, O) {
  for (var o = -1, n = O.length, t = P.length; ++o < n; )
    P[t + o] = O[o];
  return P;
}
var vn = Wl, Xl = fn, Zl = Xl(Object.getPrototypeOf, Object), pn = Zl, kl = vn, ql = pn, _l = Ce, ts = dn, es = Object.getOwnPropertySymbols, ns = es ? function(P) {
  for (var O = []; P; )
    kl(O, _l(P)), P = ql(P);
  return O;
} : ts, mn = ns, rs = re, os = mn;
function as(P, O) {
  return rs(P, os(P), O);
}
var is = as, ls = vn, ss = Ae;
function us(P, O, o) {
  var n = O(P);
  return ss(P) ? n : ls(n, o(P));
}
var hn = us, fs = hn, cs = Ce, ds = xe;
function vs(P) {
  return fs(P, ds, cs);
}
var ps = vs, ms = hn, hs = mn, gs = Se;
function As(P) {
  return ms(P, gs, hs);
}
var ys = As, Es = Ct, xs = pt, Ss = Es(xs, "DataView"), Cs = Ss, Ts = Ct, Ds = pt, Is = Ts(Ds, "Promise"), Ps = Is, Rs = Ct, Ms = pt, Ns = Rs(Ms, "Set"), Bs = Ns, Fs = Ct, Os = pt, Ls = Fs(Os, "WeakMap"), $s = Ls, ce = Cs, de = ge, ve = Ps, pe = Bs, me = $s, gn = te, Ht = rn, je = "[object Map]", Hs = "[object Object]", Ue = "[object Promise]", we = "[object Set]", Qe = "[object WeakMap]", Ye = "[object DataView]", bs = Ht(ce), js = Ht(de), Us = Ht(ve), ws = Ht(pe), Qs = Ht(me), St = gn;
(ce && St(new ce(new ArrayBuffer(1))) != Ye || de && St(new de()) != je || ve && St(ve.resolve()) != Ue || pe && St(new pe()) != we || me && St(new me()) != Qe) && (St = function(P) {
  var O = gn(P), o = O == Hs ? P.constructor : void 0, n = o ? Ht(o) : "";
  if (n)
    switch (n) {
      case bs:
        return Ye;
      case js:
        return je;
      case Us:
        return Ue;
      case ws:
        return we;
      case Qs:
        return Qe;
    }
  return O;
});
var Te = St, Ys = Object.prototype, zs = Ys.hasOwnProperty;
function Gs(P) {
  var O = P.length, o = new P.constructor(O);
  return O && typeof P[0] == "string" && zs.call(P, "index") && (o.index = P.index, o.input = P.input), o;
}
var Vs = Gs, Ks = pt, Js = Ks.Uint8Array, Ws = Js, ze = Ws;
function Xs(P) {
  var O = new P.constructor(P.byteLength);
  return new ze(O).set(new ze(P)), O;
}
var De = Xs, Zs = De;
function ks(P, O) {
  var o = O ? Zs(P.buffer) : P.buffer;
  return new P.constructor(o, P.byteOffset, P.byteLength);
}
var qs = ks, _s = /\w*$/;
function tu(P) {
  var O = new P.constructor(P.source, _s.exec(P));
  return O.lastIndex = P.lastIndex, O;
}
var eu = tu, Ge = he, Ve = Ge ? Ge.prototype : void 0, Ke = Ve ? Ve.valueOf : void 0;
function nu(P) {
  return Ke ? Object(Ke.call(P)) : {};
}
var ru = nu, ou = De;
function au(P, O) {
  var o = O ? ou(P.buffer) : P.buffer;
  return new P.constructor(o, P.byteOffset, P.length);
}
var iu = au, lu = De, su = qs, uu = eu, fu = ru, cu = iu, du = "[object Boolean]", vu = "[object Date]", pu = "[object Map]", mu = "[object Number]", hu = "[object RegExp]", gu = "[object Set]", Au = "[object String]", yu = "[object Symbol]", Eu = "[object ArrayBuffer]", xu = "[object DataView]", Su = "[object Float32Array]", Cu = "[object Float64Array]", Tu = "[object Int8Array]", Du = "[object Int16Array]", Iu = "[object Int32Array]", Pu = "[object Uint8Array]", Ru = "[object Uint8ClampedArray]", Mu = "[object Uint16Array]", Nu = "[object Uint32Array]";
function Bu(P, O, o) {
  var n = P.constructor;
  switch (O) {
    case Eu:
      return lu(P);
    case du:
    case vu:
      return new n(+P);
    case xu:
      return su(P, o);
    case Su:
    case Cu:
    case Tu:
    case Du:
    case Iu:
    case Pu:
    case Ru:
    case Mu:
    case Nu:
      return cu(P, o);
    case pu:
      return new n();
    case mu:
    case Au:
      return new n(P);
    case hu:
      return uu(P);
    case gu:
      return new n();
    case yu:
      return fu(P);
  }
}
var Fu = Bu, Ou = Yt, Je = Object.create, Lu = function() {
  function P() {
  }
  return function(O) {
    if (!Ou(O))
      return {};
    if (Je)
      return Je(O);
    P.prototype = O;
    var o = new P();
    return P.prototype = void 0, o;
  };
}(), $u = Lu, Hu = $u, bu = pn, ju = Ee;
function Uu(P) {
  return typeof P.constructor == "function" && !ju(P) ? Hu(bu(P)) : {};
}
var wu = Uu, Qu = Te, Yu = zt, zu = "[object Map]";
function Gu(P) {
  return Yu(P) && Qu(P) == zu;
}
var Vu = Gu, Ku = Vu, Ju = ye, We = Qt.exports, Xe = We && We.isMap, Wu = Xe ? Ju(Xe) : Ku, Xu = Wu, Zu = Te, ku = zt, qu = "[object Set]";
function _u(P) {
  return ku(P) && Zu(P) == qu;
}
var tf = _u, ef = tf, nf = ye, Ze = Qt.exports, ke = Ze && Ze.isSet, rf = ke ? nf(ke) : ef, of = rf, af = Sa, lf = Ta, sf = an, uf = hl, ff = Ol, cf = fe.exports, df = $l, vf = Jl, pf = is, mf = ps, hf = ys, gf = Te, Af = Vs, yf = Fu, Ef = wu, xf = Ae, Sf = kt.exports, Cf = Xu, Tf = Yt, Df = of, If = xe, Pf = Se, Rf = 1, Mf = 2, Nf = 4, An = "[object Arguments]", Bf = "[object Array]", Ff = "[object Boolean]", Of = "[object Date]", Lf = "[object Error]", yn = "[object Function]", $f = "[object GeneratorFunction]", Hf = "[object Map]", bf = "[object Number]", En = "[object Object]", jf = "[object RegExp]", Uf = "[object Set]", wf = "[object String]", Qf = "[object Symbol]", Yf = "[object WeakMap]", zf = "[object ArrayBuffer]", Gf = "[object DataView]", Vf = "[object Float32Array]", Kf = "[object Float64Array]", Jf = "[object Int8Array]", Wf = "[object Int16Array]", Xf = "[object Int32Array]", Zf = "[object Uint8Array]", kf = "[object Uint8ClampedArray]", qf = "[object Uint16Array]", _f = "[object Uint32Array]", rt = {};
rt[An] = rt[Bf] = rt[zf] = rt[Gf] = rt[Ff] = rt[Of] = rt[Vf] = rt[Kf] = rt[Jf] = rt[Wf] = rt[Xf] = rt[Hf] = rt[bf] = rt[En] = rt[jf] = rt[Uf] = rt[wf] = rt[Qf] = rt[Zf] = rt[kf] = rt[qf] = rt[_f] = !0;
rt[Lf] = rt[yn] = rt[Yf] = !1;
function Zt(P, O, o, n, t, e) {
  var i, r = O & Rf, a = O & Mf, u = O & Nf;
  if (o && (i = t ? o(P, n, t, e) : o(P)), i !== void 0)
    return i;
  if (!Tf(P))
    return P;
  var g = xf(P);
  if (g) {
    if (i = Af(P), !r)
      return df(P, i);
  } else {
    var d = gf(P), h = d == yn || d == $f;
    if (Sf(P))
      return cf(P, r);
    if (d == En || d == An || h && !t) {
      if (i = a || h ? {} : Ef(P), !r)
        return a ? pf(P, ff(i, P)) : vf(P, uf(i, P));
    } else {
      if (!rt[d])
        return t ? P : {};
      i = yf(P, d, r);
    }
  }
  e || (e = new af());
  var c = e.get(P);
  if (c)
    return c;
  e.set(P, i), Df(P) ? P.forEach(function(s) {
    i.add(Zt(s, O, o, s, P, e));
  }) : Cf(P) && P.forEach(function(s, m) {
    i.set(m, Zt(s, O, o, m, P, e));
  });
  var l = u ? a ? hf : mf : a ? Pf : If, f = g ? void 0 : l(P);
  return lf(f || P, function(s, m) {
    f && (m = s, s = P[m]), sf(i, m, Zt(s, O, o, m, P, e));
  }), i;
}
var tc = Zt, ec = tc, nc = 1, rc = 4;
function oc(P) {
  return ec(P, nc | rc);
}
var qe = oc, xn = { exports: {} };
(function(P, O) {
  (function(n, t) {
    P.exports = t();
  })(window, function() {
    return function(o) {
      var n = {};
      function t(e) {
        if (n[e])
          return n[e].exports;
        var i = n[e] = {
          i: e,
          l: !1,
          exports: {}
        };
        return o[e].call(i.exports, i, i.exports, t), i.l = !0, i.exports;
      }
      return t.m = o, t.c = n, t.d = function(e, i, r) {
        t.o(e, i) || Object.defineProperty(e, i, { enumerable: !0, get: r });
      }, t.r = function(e) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
      }, t.t = function(e, i) {
        if (i & 1 && (e = t(e)), i & 8 || i & 4 && typeof e == "object" && e && e.__esModule)
          return e;
        var r = /* @__PURE__ */ Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), i & 2 && typeof e != "string")
          for (var a in e)
            t.d(r, a, function(u) {
              return e[u];
            }.bind(null, a));
        return r;
      }, t.n = function(e) {
        var i = e && e.__esModule ? function() {
          return e.default;
        } : function() {
          return e;
        };
        return t.d(i, "a", i), i;
      }, t.o = function(e, i) {
        return Object.prototype.hasOwnProperty.call(e, i);
      }, t.p = "", t(t.s = 141);
    }([
      function(o, n) {
        function t(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }
        o.exports = t;
      },
      function(o, n, t) {
        o.exports = t(142);
      },
      function(o, n, t) {
        t.r(n), t.d(n, "__extends", function() {
          return i;
        }), t.d(n, "__assign", function() {
          return r;
        }), t.d(n, "__rest", function() {
          return a;
        }), t.d(n, "__decorate", function() {
          return u;
        }), t.d(n, "__param", function() {
          return g;
        }), t.d(n, "__metadata", function() {
          return d;
        }), t.d(n, "__awaiter", function() {
          return h;
        }), t.d(n, "__generator", function() {
          return c;
        }), t.d(n, "__createBinding", function() {
          return l;
        }), t.d(n, "__exportStar", function() {
          return f;
        }), t.d(n, "__values", function() {
          return s;
        }), t.d(n, "__read", function() {
          return m;
        }), t.d(n, "__spread", function() {
          return v;
        }), t.d(n, "__spreadArrays", function() {
          return p;
        }), t.d(n, "__spreadArray", function() {
          return A;
        }), t.d(n, "__await", function() {
          return y;
        }), t.d(n, "__asyncGenerator", function() {
          return x;
        }), t.d(n, "__asyncDelegator", function() {
          return S;
        }), t.d(n, "__asyncValues", function() {
          return D;
        }), t.d(n, "__makeTemplateObject", function() {
          return I;
        }), t.d(n, "__importStar", function() {
          return E;
        }), t.d(n, "__importDefault", function() {
          return T;
        }), t.d(n, "__classPrivateFieldGet", function() {
          return R;
        }), t.d(n, "__classPrivateFieldSet", function() {
          return N;
        });
        /*! *****************************************************************************
        	Copyright (c) Microsoft Corporation.
        
        	Permission to use, copy, modify, and/or distribute this software for any
        	purpose with or without fee is hereby granted.
        
        	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        	PERFORMANCE OF THIS SOFTWARE.
        	***************************************************************************** */
        var e = function(M, B) {
          return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(F, L) {
            F.__proto__ = L;
          } || function(F, L) {
            for (var b in L)
              Object.prototype.hasOwnProperty.call(L, b) && (F[b] = L[b]);
          }, e(M, B);
        };
        function i(M, B) {
          if (typeof B != "function" && B !== null)
            throw new TypeError("Class extends value " + String(B) + " is not a constructor or null");
          e(M, B);
          function F() {
            this.constructor = M;
          }
          M.prototype = B === null ? Object.create(B) : (F.prototype = B.prototype, new F());
        }
        var r = function() {
          return r = Object.assign || function(B) {
            for (var F, L = 1, b = arguments.length; L < b; L++) {
              F = arguments[L];
              for (var $ in F)
                Object.prototype.hasOwnProperty.call(F, $) && (B[$] = F[$]);
            }
            return B;
          }, r.apply(this, arguments);
        };
        function a(M, B) {
          var F = {};
          for (var L in M)
            Object.prototype.hasOwnProperty.call(M, L) && B.indexOf(L) < 0 && (F[L] = M[L]);
          if (M != null && typeof Object.getOwnPropertySymbols == "function")
            for (var b = 0, L = Object.getOwnPropertySymbols(M); b < L.length; b++)
              B.indexOf(L[b]) < 0 && Object.prototype.propertyIsEnumerable.call(M, L[b]) && (F[L[b]] = M[L[b]]);
          return F;
        }
        function u(M, B, F, L) {
          var b = arguments.length, $ = b < 3 ? B : L === null ? L = Object.getOwnPropertyDescriptor(B, F) : L, H;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
            $ = Reflect.decorate(M, B, F, L);
          else
            for (var j = M.length - 1; j >= 0; j--)
              (H = M[j]) && ($ = (b < 3 ? H($) : b > 3 ? H(B, F, $) : H(B, F)) || $);
          return b > 3 && $ && Object.defineProperty(B, F, $), $;
        }
        function g(M, B) {
          return function(F, L) {
            B(F, L, M);
          };
        }
        function d(M, B) {
          if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
            return Reflect.metadata(M, B);
        }
        function h(M, B, F, L) {
          function b($) {
            return $ instanceof F ? $ : new F(function(H) {
              H($);
            });
          }
          return new (F || (F = Promise))(function($, H) {
            function j(W) {
              try {
                U(L.next(W));
              } catch (K) {
                H(K);
              }
            }
            function V(W) {
              try {
                U(L.throw(W));
              } catch (K) {
                H(K);
              }
            }
            function U(W) {
              W.done ? $(W.value) : b(W.value).then(j, V);
            }
            U((L = L.apply(M, B || [])).next());
          });
        }
        function c(M, B) {
          var F = { label: 0, sent: function() {
            if ($[0] & 1)
              throw $[1];
            return $[1];
          }, trys: [], ops: [] }, L, b, $, H;
          return H = { next: j(0), throw: j(1), return: j(2) }, typeof Symbol == "function" && (H[Symbol.iterator] = function() {
            return this;
          }), H;
          function j(U) {
            return function(W) {
              return V([U, W]);
            };
          }
          function V(U) {
            if (L)
              throw new TypeError("Generator is already executing.");
            for (; F; )
              try {
                if (L = 1, b && ($ = U[0] & 2 ? b.return : U[0] ? b.throw || (($ = b.return) && $.call(b), 0) : b.next) && !($ = $.call(b, U[1])).done)
                  return $;
                switch (b = 0, $ && (U = [U[0] & 2, $.value]), U[0]) {
                  case 0:
                  case 1:
                    $ = U;
                    break;
                  case 4:
                    return F.label++, { value: U[1], done: !1 };
                  case 5:
                    F.label++, b = U[1], U = [0];
                    continue;
                  case 7:
                    U = F.ops.pop(), F.trys.pop();
                    continue;
                  default:
                    if ($ = F.trys, !($ = $.length > 0 && $[$.length - 1]) && (U[0] === 6 || U[0] === 2)) {
                      F = 0;
                      continue;
                    }
                    if (U[0] === 3 && (!$ || U[1] > $[0] && U[1] < $[3])) {
                      F.label = U[1];
                      break;
                    }
                    if (U[0] === 6 && F.label < $[1]) {
                      F.label = $[1], $ = U;
                      break;
                    }
                    if ($ && F.label < $[2]) {
                      F.label = $[2], F.ops.push(U);
                      break;
                    }
                    $[2] && F.ops.pop(), F.trys.pop();
                    continue;
                }
                U = B.call(M, F);
              } catch (W) {
                U = [6, W], b = 0;
              } finally {
                L = $ = 0;
              }
            if (U[0] & 5)
              throw U[1];
            return { value: U[0] ? U[1] : void 0, done: !0 };
          }
        }
        var l = Object.create ? function(M, B, F, L) {
          L === void 0 && (L = F), Object.defineProperty(M, L, { enumerable: !0, get: function() {
            return B[F];
          } });
        } : function(M, B, F, L) {
          L === void 0 && (L = F), M[L] = B[F];
        };
        function f(M, B) {
          for (var F in M)
            F !== "default" && !Object.prototype.hasOwnProperty.call(B, F) && l(B, M, F);
        }
        function s(M) {
          var B = typeof Symbol == "function" && Symbol.iterator, F = B && M[B], L = 0;
          if (F)
            return F.call(M);
          if (M && typeof M.length == "number")
            return {
              next: function() {
                return M && L >= M.length && (M = void 0), { value: M && M[L++], done: !M };
              }
            };
          throw new TypeError(B ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function m(M, B) {
          var F = typeof Symbol == "function" && M[Symbol.iterator];
          if (!F)
            return M;
          var L = F.call(M), b, $ = [], H;
          try {
            for (; (B === void 0 || B-- > 0) && !(b = L.next()).done; )
              $.push(b.value);
          } catch (j) {
            H = { error: j };
          } finally {
            try {
              b && !b.done && (F = L.return) && F.call(L);
            } finally {
              if (H)
                throw H.error;
            }
          }
          return $;
        }
        function v() {
          for (var M = [], B = 0; B < arguments.length; B++)
            M = M.concat(m(arguments[B]));
          return M;
        }
        function p() {
          for (var M = 0, B = 0, F = arguments.length; B < F; B++)
            M += arguments[B].length;
          for (var L = Array(M), b = 0, B = 0; B < F; B++)
            for (var $ = arguments[B], H = 0, j = $.length; H < j; H++, b++)
              L[b] = $[H];
          return L;
        }
        function A(M, B) {
          for (var F = 0, L = B.length, b = M.length; F < L; F++, b++)
            M[b] = B[F];
          return M;
        }
        function y(M) {
          return this instanceof y ? (this.v = M, this) : new y(M);
        }
        function x(M, B, F) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var L = F.apply(M, B || []), b, $ = [];
          return b = {}, H("next"), H("throw"), H("return"), b[Symbol.asyncIterator] = function() {
            return this;
          }, b;
          function H(w) {
            L[w] && (b[w] = function(Y) {
              return new Promise(function(J, k) {
                $.push([w, Y, J, k]) > 1 || j(w, Y);
              });
            });
          }
          function j(w, Y) {
            try {
              V(L[w](Y));
            } catch (J) {
              K($[0][3], J);
            }
          }
          function V(w) {
            w.value instanceof y ? Promise.resolve(w.value.v).then(U, W) : K($[0][2], w);
          }
          function U(w) {
            j("next", w);
          }
          function W(w) {
            j("throw", w);
          }
          function K(w, Y) {
            w(Y), $.shift(), $.length && j($[0][0], $[0][1]);
          }
        }
        function S(M) {
          var B, F;
          return B = {}, L("next"), L("throw", function(b) {
            throw b;
          }), L("return"), B[Symbol.iterator] = function() {
            return this;
          }, B;
          function L(b, $) {
            B[b] = M[b] ? function(H) {
              return (F = !F) ? { value: y(M[b](H)), done: b === "return" } : $ ? $(H) : H;
            } : $;
          }
        }
        function D(M) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var B = M[Symbol.asyncIterator], F;
          return B ? B.call(M) : (M = typeof s == "function" ? s(M) : M[Symbol.iterator](), F = {}, L("next"), L("throw"), L("return"), F[Symbol.asyncIterator] = function() {
            return this;
          }, F);
          function L($) {
            F[$] = M[$] && function(H) {
              return new Promise(function(j, V) {
                H = M[$](H), b(j, V, H.done, H.value);
              });
            };
          }
          function b($, H, j, V) {
            Promise.resolve(V).then(function(U) {
              $({ value: U, done: j });
            }, H);
          }
        }
        function I(M, B) {
          return Object.defineProperty ? Object.defineProperty(M, "raw", { value: B }) : M.raw = B, M;
        }
        var C = Object.create ? function(M, B) {
          Object.defineProperty(M, "default", { enumerable: !0, value: B });
        } : function(M, B) {
          M.default = B;
        };
        function E(M) {
          if (M && M.__esModule)
            return M;
          var B = {};
          if (M != null)
            for (var F in M)
              F !== "default" && Object.prototype.hasOwnProperty.call(M, F) && l(B, M, F);
          return C(B, M), B;
        }
        function T(M) {
          return M && M.__esModule ? M : { default: M };
        }
        function R(M, B) {
          if (!B.has(M))
            throw new TypeError("attempted to get private field on non-instance");
          return B.get(M);
        }
        function N(M, B, F) {
          if (!B.has(M))
            throw new TypeError("attempted to set private field on non-instance");
          return B.set(M, F), F;
        }
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(89)), a = e(t(4)), u = e(t(26)), g = e(t(17)), d = e(t(121)), h = e(t(27)), c = e(t(91)), l = e(t(70)), f = e(t(28)), s = e(t(57));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.DomElement = void 0;
        var m = t(2), v = t(6), p = [];
        function A(C) {
          var E = document.createElement("div");
          E.innerHTML = C;
          var T = E.children;
          return v.toArray(T);
        }
        function y(C) {
          return C ? C instanceof HTMLCollection || C instanceof NodeList : !1;
        }
        function x(C) {
          var E = document.querySelectorAll(C);
          return v.toArray(E);
        }
        function S(C) {
          var E = [], T = [];
          return (0, r.default)(C) ? E = C : E = C.split(";"), (0, a.default)(E).call(E, function(R) {
            var N, M = (0, u.default)(N = R.split(":")).call(N, function(B) {
              return (0, g.default)(B).call(B);
            });
            M.length === 2 && T.push(M[0] + ":" + M[1]);
          }), T;
        }
        var D = function() {
          function C(E) {
            if (this.elems = [], this.length = this.elems.length, this.dataSource = new d.default(), !!E) {
              if (E instanceof C)
                return E;
              var T = [], R = E instanceof Node ? E.nodeType : -1;
              if (this.selector = E, R === 1 || R === 9)
                T = [E];
              else if (y(E))
                T = v.toArray(E);
              else if (E instanceof Array)
                T = E;
              else if (typeof E == "string") {
                var N, M = (0, g.default)(N = E.replace(`/
/mg`, "")).call(N);
                (0, h.default)(M).call(M, "<") === 0 ? T = A(M) : T = x(M);
              }
              var B = T.length;
              if (!B)
                return this;
              for (var F = 0; F < B; F++)
                this.elems.push(T[F]);
              this.length = B;
            }
          }
          return (0, i.default)(C.prototype, "id", {
            get: function() {
              return this.elems[0].id;
            },
            enumerable: !1,
            configurable: !0
          }), C.prototype.forEach = function(E) {
            for (var T = 0; T < this.length; T++) {
              var R = this.elems[T], N = E.call(R, R, T);
              if (N === !1)
                break;
            }
            return this;
          }, C.prototype.clone = function(E) {
            var T;
            E === void 0 && (E = !1);
            var R = [];
            return (0, a.default)(T = this.elems).call(T, function(N) {
              R.push(N.cloneNode(!!E));
            }), I(R);
          }, C.prototype.get = function(E) {
            E === void 0 && (E = 0);
            var T = this.length;
            return E >= T && (E = E % T), I(this.elems[E]);
          }, C.prototype.first = function() {
            return this.get(0);
          }, C.prototype.last = function() {
            var E = this.length;
            return this.get(E - 1);
          }, C.prototype.on = function(E, T, R) {
            var N;
            return E ? (typeof T == "function" && (R = T, T = ""), (0, a.default)(N = this).call(N, function(M) {
              if (!T) {
                M.addEventListener(E, R);
                return;
              }
              var B = function(L) {
                var b = L.target;
                b.matches(T) && R.call(b, L);
              };
              M.addEventListener(E, B), p.push({
                elem: M,
                selector: T,
                fn: R,
                agentFn: B
              });
            })) : this;
          }, C.prototype.off = function(E, T, R) {
            var N;
            return E ? (typeof T == "function" && (R = T, T = ""), (0, a.default)(N = this).call(N, function(M) {
              if (T) {
                for (var B = -1, F = 0; F < p.length; F++) {
                  var L = p[F];
                  if (L.selector === T && L.fn === R && L.elem === M) {
                    B = F;
                    break;
                  }
                }
                if (B !== -1) {
                  var b = (0, c.default)(p).call(p, B, 1)[0].agentFn;
                  M.removeEventListener(E, b);
                }
              } else
                M.removeEventListener(E, R);
            })) : this;
          }, C.prototype.attr = function(E, T) {
            var R;
            return T == null ? this.elems[0].getAttribute(E) || "" : (0, a.default)(R = this).call(R, function(N) {
              N.setAttribute(E, T);
            });
          }, C.prototype.removeAttr = function(E) {
            var T;
            (0, a.default)(T = this).call(T, function(R) {
              R.removeAttribute(E);
            });
          }, C.prototype.addClass = function(E) {
            var T;
            return E ? (0, a.default)(T = this).call(T, function(R) {
              if (R.className) {
                var N = R.className.split(/\s/);
                N = (0, l.default)(N).call(N, function(M) {
                  return !!(0, g.default)(M).call(M);
                }), (0, h.default)(N).call(N, E) < 0 && N.push(E), R.className = N.join(" ");
              } else
                R.className = E;
            }) : this;
          }, C.prototype.removeClass = function(E) {
            var T;
            return E ? (0, a.default)(T = this).call(T, function(R) {
              if (!!R.className) {
                var N = R.className.split(/\s/);
                N = (0, l.default)(N).call(N, function(M) {
                  return M = (0, g.default)(M).call(M), !(!M || M === E);
                }), R.className = N.join(" ");
              }
            }) : this;
          }, C.prototype.hasClass = function(E) {
            if (!E)
              return !1;
            var T = this.elems[0];
            if (!T.className)
              return !1;
            var R = T.className.split(/\s/);
            return (0, f.default)(R).call(R, E);
          }, C.prototype.css = function(E, T) {
            var R, N;
            return T == "" ? N = "" : N = E + ":" + T + ";", (0, a.default)(R = this).call(R, function(M) {
              var B, F = (0, g.default)(B = M.getAttribute("style") || "").call(B);
              if (F) {
                var L = S(F);
                L = (0, u.default)(L).call(L, function(b) {
                  return (0, h.default)(b).call(b, E) === 0 ? N : b;
                }), N != "" && (0, h.default)(L).call(L, N) < 0 && L.push(N), N == "" && (L = S(L)), M.setAttribute("style", L.join("; "));
              } else
                M.setAttribute("style", N);
            });
          }, C.prototype.getBoundingClientRect = function() {
            var E = this.elems[0];
            return E.getBoundingClientRect();
          }, C.prototype.show = function() {
            return this.css("display", "block");
          }, C.prototype.hide = function() {
            return this.css("display", "none");
          }, C.prototype.children = function() {
            var E = this.elems[0];
            return E ? I(E.children) : null;
          }, C.prototype.childNodes = function() {
            var E = this.elems[0];
            return E ? I(E.childNodes) : null;
          }, C.prototype.replaceChildAll = function(E) {
            for (var T = this.getNode(), R = this.elems[0]; R.hasChildNodes(); )
              T.firstChild && R.removeChild(T.firstChild);
            this.append(E);
          }, C.prototype.append = function(E) {
            var T;
            return (0, a.default)(T = this).call(T, function(R) {
              (0, a.default)(E).call(E, function(N) {
                R.appendChild(N);
              });
            });
          }, C.prototype.remove = function() {
            var E;
            return (0, a.default)(E = this).call(E, function(T) {
              if (T.remove)
                T.remove();
              else {
                var R = T.parentElement;
                R && R.removeChild(T);
              }
            });
          }, C.prototype.isContain = function(E) {
            var T = this.elems[0], R = E.elems[0];
            return T.contains(R);
          }, C.prototype.getNodeName = function() {
            var E = this.elems[0];
            return E.nodeName;
          }, C.prototype.getNode = function(E) {
            E === void 0 && (E = 0);
            var T;
            return T = this.elems[E], T;
          }, C.prototype.find = function(E) {
            var T = this.elems[0];
            return I(T.querySelectorAll(E));
          }, C.prototype.text = function(E) {
            if (E) {
              var R;
              return (0, a.default)(R = this).call(R, function(N) {
                N.innerHTML = E;
              });
            } else {
              var T = this.elems[0];
              return T.innerHTML.replace(/<[^>]+>/g, function() {
                return "";
              });
            }
          }, C.prototype.html = function(E) {
            var T = this.elems[0];
            return E ? (T.innerHTML = E, this) : T.innerHTML;
          }, C.prototype.val = function() {
            var E, T = this.elems[0];
            return (0, g.default)(E = T.value).call(E);
          }, C.prototype.focus = function() {
            var E;
            return (0, a.default)(E = this).call(E, function(T) {
              T.focus();
            });
          }, C.prototype.prev = function() {
            var E = this.elems[0];
            return I(E.previousElementSibling);
          }, C.prototype.next = function() {
            var E = this.elems[0];
            return I(E.nextElementSibling);
          }, C.prototype.getNextSibling = function() {
            var E = this.elems[0];
            return I(E.nextSibling);
          }, C.prototype.parent = function() {
            var E = this.elems[0];
            return I(E.parentElement);
          }, C.prototype.parentUntil = function(E, T) {
            var R = T || this.elems[0];
            if (R.nodeName === "BODY")
              return null;
            var N = R.parentElement;
            return N === null ? null : N.matches(E) ? I(N) : this.parentUntil(E, N);
          }, C.prototype.parentUntilEditor = function(E, T, R) {
            var N = R || this.elems[0];
            if (I(N).equal(T.$textContainerElem) || I(N).equal(T.$toolbarElem))
              return null;
            var M = N.parentElement;
            return M === null ? null : M.matches(E) ? I(M) : this.parentUntilEditor(E, T, M);
          }, C.prototype.equal = function(E) {
            return E instanceof C ? this.elems[0] === E.elems[0] : E instanceof HTMLElement ? this.elems[0] === E : !1;
          }, C.prototype.insertBefore = function(E) {
            var T, R = I(E), N = R.elems[0];
            return N ? (0, a.default)(T = this).call(T, function(M) {
              var B = N.parentNode;
              B == null || B.insertBefore(M, N);
            }) : this;
          }, C.prototype.insertAfter = function(E) {
            var T, R = I(E), N = R.elems[0], M = N && N.nextSibling;
            return N ? (0, a.default)(T = this).call(T, function(B) {
              var F = N.parentNode;
              M ? F.insertBefore(B, M) : F.appendChild(B);
            }) : this;
          }, C.prototype.data = function(E, T) {
            if (T != null)
              this.dataSource.set(E, T);
            else
              return this.dataSource.get(E);
          }, C.prototype.getNodeTop = function(E) {
            if (this.length < 1)
              return this;
            var T = this.parent();
            return E.$textElem.equal(this) || E.$textElem.equal(T) ? this : (T.prior = this, T.getNodeTop(E));
          }, C.prototype.getOffsetData = function() {
            var E = this.elems[0];
            return {
              top: E.offsetTop,
              left: E.offsetLeft,
              width: E.offsetWidth,
              height: E.offsetHeight,
              parent: E.offsetParent
            };
          }, C.prototype.scrollTop = function(E) {
            var T = this.elems[0];
            T.scrollTo({
              top: E
            });
          }, C;
        }();
        n.DomElement = D;
        function I() {
          for (var C = [], E = 0; E < arguments.length; E++)
            C[E] = arguments[E];
          return new ((0, s.default)(D).apply(D, m.__spreadArrays([void 0], C)))();
        }
        n.default = I;
      },
      function(o, n, t) {
        o.exports = t(180);
      },
      function(o, n, t) {
        var e = t(8), i = t(71).f, r = t(101), a = t(9), u = t(40), g = t(19), d = t(16), h = function(c) {
          var l = function(f, s, m) {
            if (this instanceof c) {
              switch (arguments.length) {
                case 0:
                  return new c();
                case 1:
                  return new c(f);
                case 2:
                  return new c(f, s);
              }
              return new c(f, s, m);
            }
            return c.apply(this, arguments);
          };
          return l.prototype = c.prototype, l;
        };
        o.exports = function(c, l) {
          var f = c.target, s = c.global, m = c.stat, v = c.proto, p = s ? e : m ? e[f] : (e[f] || {}).prototype, A = s ? a : a[f] || (a[f] = {}), y = A.prototype, x, S, D, I, C, E, T, R, N;
          for (I in l)
            x = r(s ? I : f + (m ? "." : "#") + I, c.forced), S = !x && p && d(p, I), E = A[I], S && (c.noTargetGet ? (N = i(p, I), T = N && N.value) : T = p[I]), C = S && T ? T : l[I], !(S && typeof E == typeof C) && (c.bind && S ? R = u(C, e) : c.wrap && S ? R = h(C) : v && typeof C == "function" ? R = u(Function.call, C) : R = C, (c.sham || C && C.sham || E && E.sham) && g(R, "sham", !0), A[I] = R, v && (D = f + "Prototype", d(a, D) || g(a, D, {}), a[D][I] = C, c.real && y && !y[I] && g(y, I, C)));
        };
      },
      function(o, n, t) {
        var e = t(0), i = e(t(92)), r = e(t(1)), a = e(t(256)), u = e(t(45)), g = e(t(46)), d = e(t(89)), h = e(t(26));
        (0, r.default)(n, "__esModule", {
          value: !0
        }), n.hexToRgb = n.getRandomCode = n.toArray = n.deepClone = n.isFunction = n.debounce = n.throttle = n.arrForEach = n.forEach = n.replaceSpecialSymbol = n.replaceHtmlSymbol = n.getRandom = n.UA = void 0;
        var c = t(2), l = function() {
          function E() {
            this._ua = navigator.userAgent;
            var T = this._ua.match(/(Edge?)\/(\d+)/);
            this.isOldEdge = !!(T && T[1] == "Edge" && (0, a.default)(T[2]) < 19), this.isFirefox = !!(/Firefox\/\d+/.test(this._ua) && !/Seamonkey\/\d+/.test(this._ua));
          }
          return E.prototype.isIE = function() {
            return "ActiveXObject" in window;
          }, E.prototype.isWebkit = function() {
            return /webkit/i.test(this._ua);
          }, E;
        }();
        n.UA = new l();
        function f(E) {
          var T;
          return E === void 0 && (E = ""), E + (0, u.default)(T = Math.random().toString()).call(T, 2);
        }
        n.getRandom = f;
        function s(E) {
          return E.replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/"/gm, "&quot;").replace(/(\r\n|\r|\n)/g, "<br/>");
        }
        n.replaceHtmlSymbol = s;
        function m(E) {
          return E.replace(/&lt;/gm, "<").replace(/&gt;/gm, ">").replace(/&quot;/gm, '"');
        }
        n.replaceSpecialSymbol = m;
        function v(E, T) {
          for (var R in E)
            if (Object.prototype.hasOwnProperty.call(E, R)) {
              var N = T(R, E[R]);
              if (N === !1)
                break;
            }
        }
        n.forEach = v;
        function p(E, T) {
          var R, N, M, B = E.length || 0;
          for (R = 0; R < B && (N = E[R], M = T.call(E, N, R), M !== !1); R++)
            ;
        }
        n.arrForEach = p;
        function A(E, T) {
          T === void 0 && (T = 200);
          var R = !1;
          return function() {
            for (var N = this, M = [], B = 0; B < arguments.length; B++)
              M[B] = arguments[B];
            R || (R = !0, (0, g.default)(function() {
              R = !1, E.call.apply(E, c.__spreadArrays([N], M));
            }, T));
          };
        }
        n.throttle = A;
        function y(E, T) {
          T === void 0 && (T = 200);
          var R = 0;
          return function() {
            for (var N = this, M = [], B = 0; B < arguments.length; B++)
              M[B] = arguments[B];
            R && window.clearTimeout(R), R = (0, g.default)(function() {
              R = 0, E.call.apply(E, c.__spreadArrays([N], M));
            }, T);
          };
        }
        n.debounce = y;
        function x(E) {
          return typeof E == "function";
        }
        n.isFunction = x;
        function S(E) {
          if ((0, i.default)(E) !== "object" || typeof E == "function" || E === null)
            return E;
          var T;
          (0, d.default)(E) && (T = []), (0, d.default)(E) || (T = {});
          for (var R in E)
            Object.prototype.hasOwnProperty.call(E, R) && (T[R] = S(E[R]));
          return T;
        }
        n.deepClone = S;
        function D(E) {
          return (0, u.default)(Array.prototype).call(E);
        }
        n.toArray = D;
        function I() {
          var E;
          return (0, u.default)(E = Math.random().toString(36)).call(E, -5);
        }
        n.getRandomCode = I;
        function C(E) {
          var T = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(E);
          if (T == null)
            return null;
          var R = (0, h.default)(T).call(T, function(F) {
            return (0, a.default)(F, 16);
          }), N = R[1], M = R[2], B = R[3];
          return "rgb(" + N + ", " + M + ", " + B + ")";
        }
        n.hexToRgb = C;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.EMPTY_P_REGEX = n.EMPTY_P_LAST_REGEX = n.EMPTY_P = n.urlRegex = n.EMPTY_FN = void 0;
        function r() {
        }
        n.EMPTY_FN = r, n.urlRegex = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/g, n.EMPTY_P = '<p data-we-empty-p=""><br></p>', n.EMPTY_P_LAST_REGEX = /<p data-we-empty-p=""><br\/?><\/p>$/gim, n.EMPTY_P_REGEX = /<p data-we-empty-p="">/gim;
      },
      function(o, n, t) {
        (function(e) {
          var i = function(r) {
            return r && r.Math == Math && r;
          };
          o.exports = i(typeof globalThis == "object" && globalThis) || i(typeof window == "object" && window) || i(typeof self == "object" && self) || i(typeof e == "object" && e) || Function("return this")();
        }).call(this, t(145));
      },
      function(o, n) {
        o.exports = {};
      },
      function(o, n, t) {
        var e = t(8), i = t(74), r = t(16), a = t(64), u = t(76), g = t(106), d = i("wks"), h = e.Symbol, c = g ? h : h && h.withoutSetter || a;
        o.exports = function(l) {
          return r(d, l) || (u && r(h, l) ? d[l] = h[l] : d[l] = c("Symbol." + l)), d[l];
        };
      },
      function(o, n) {
        o.exports = function(t) {
          try {
            return !!t();
          } catch {
            return !0;
          }
        };
      },
      function(o, n, t) {
        var e = t(9), i = t(16), r = t(93), a = t(18).f;
        o.exports = function(u) {
          var g = e.Symbol || (e.Symbol = {});
          i(g, u) || a(g, u, {
            value: r.f(u)
          });
        };
      },
      function(o, n) {
        o.exports = function(t) {
          return typeof t == "object" ? t !== null : typeof t == "function";
        };
      },
      function(o, n, t) {
        var e = t(11);
        o.exports = !e(function() {
          return Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1] != 7;
        });
      },
      function(o, n, t) {
        var e = t(9);
        o.exports = function(i) {
          return e[i + "Prototype"];
        };
      },
      function(o, n) {
        var t = {}.hasOwnProperty;
        o.exports = function(e, i) {
          return t.call(e, i);
        };
      },
      function(o, n, t) {
        o.exports = t(192);
      },
      function(o, n, t) {
        var e = t(14), i = t(100), r = t(25), a = t(60), u = Object.defineProperty;
        n.f = e ? u : function(d, h, c) {
          if (r(d), h = a(h, !0), r(c), i)
            try {
              return u(d, h, c);
            } catch {
            }
          if ("get" in c || "set" in c)
            throw TypeError("Accessors not supported");
          return "value" in c && (d[h] = c.value), d;
        };
      },
      function(o, n, t) {
        var e = t(14), i = t(18), r = t(48);
        o.exports = e ? function(a, u, g) {
          return i.f(a, u, r(1, g));
        } : function(a, u, g) {
          return a[u] = g, a;
        };
      },
      function(o, n, t) {
        var e = function() {
          var p;
          return function() {
            return typeof p > "u" && (p = Boolean(window && document && document.all && !window.atob)), p;
          };
        }(), i = function() {
          var p = {};
          return function(y) {
            if (typeof p[y] > "u") {
              var x = document.querySelector(y);
              if (window.HTMLIFrameElement && x instanceof window.HTMLIFrameElement)
                try {
                  x = x.contentDocument.head;
                } catch {
                  x = null;
                }
              p[y] = x;
            }
            return p[y];
          };
        }(), r = [];
        function a(v) {
          for (var p = -1, A = 0; A < r.length; A++)
            if (r[A].identifier === v) {
              p = A;
              break;
            }
          return p;
        }
        function u(v, p) {
          for (var A = {}, y = [], x = 0; x < v.length; x++) {
            var S = v[x], D = p.base ? S[0] + p.base : S[0], I = A[D] || 0, C = "".concat(D, " ").concat(I);
            A[D] = I + 1;
            var E = a(C), T = {
              css: S[1],
              media: S[2],
              sourceMap: S[3]
            };
            E !== -1 ? (r[E].references++, r[E].updater(T)) : r.push({
              identifier: C,
              updater: m(T, p),
              references: 1
            }), y.push(C);
          }
          return y;
        }
        function g(v) {
          var p = document.createElement("style"), A = v.attributes || {};
          if (typeof A.nonce > "u") {
            var y = t.nc;
            y && (A.nonce = y);
          }
          if (Object.keys(A).forEach(function(S) {
            p.setAttribute(S, A[S]);
          }), typeof v.insert == "function")
            v.insert(p);
          else {
            var x = i(v.insert || "head");
            if (!x)
              throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            x.appendChild(p);
          }
          return p;
        }
        function d(v) {
          if (v.parentNode === null)
            return !1;
          v.parentNode.removeChild(v);
        }
        var h = function() {
          var p = [];
          return function(y, x) {
            return p[y] = x, p.filter(Boolean).join(`
`);
          };
        }();
        function c(v, p, A, y) {
          var x = A ? "" : y.media ? "@media ".concat(y.media, " {").concat(y.css, "}") : y.css;
          if (v.styleSheet)
            v.styleSheet.cssText = h(p, x);
          else {
            var S = document.createTextNode(x), D = v.childNodes;
            D[p] && v.removeChild(D[p]), D.length ? v.insertBefore(S, D[p]) : v.appendChild(S);
          }
        }
        function l(v, p, A) {
          var y = A.css, x = A.media, S = A.sourceMap;
          if (x ? v.setAttribute("media", x) : v.removeAttribute("media"), S && typeof btoa < "u" && (y += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(S)))), " */")), v.styleSheet)
            v.styleSheet.cssText = y;
          else {
            for (; v.firstChild; )
              v.removeChild(v.firstChild);
            v.appendChild(document.createTextNode(y));
          }
        }
        var f = null, s = 0;
        function m(v, p) {
          var A, y, x;
          if (p.singleton) {
            var S = s++;
            A = f || (f = g(p)), y = c.bind(null, A, S, !1), x = c.bind(null, A, S, !0);
          } else
            A = g(p), y = l.bind(null, A, p), x = function() {
              d(A);
            };
          return y(v), function(I) {
            if (I) {
              if (I.css === v.css && I.media === v.media && I.sourceMap === v.sourceMap)
                return;
              y(v = I);
            } else
              x();
          };
        }
        o.exports = function(v, p) {
          p = p || {}, !p.singleton && typeof p.singleton != "boolean" && (p.singleton = e()), v = v || [];
          var A = u(v, p);
          return function(x) {
            if (x = x || [], Object.prototype.toString.call(x) === "[object Array]") {
              for (var S = 0; S < A.length; S++) {
                var D = A[S], I = a(D);
                r[I].references--;
              }
              for (var C = u(x, p), E = 0; E < A.length; E++) {
                var T = A[E], R = a(T);
                r[R].references === 0 && (r[R].updater(), r.splice(R, 1));
              }
              A = C;
            }
          };
        };
      },
      function(o, n, t) {
        o.exports = function(r) {
          var a = [];
          return a.toString = function() {
            return this.map(function(g) {
              var d = e(g, r);
              return g[2] ? "@media ".concat(g[2], " {").concat(d, "}") : d;
            }).join("");
          }, a.i = function(u, g, d) {
            typeof u == "string" && (u = [[null, u, ""]]);
            var h = {};
            if (d)
              for (var c = 0; c < this.length; c++) {
                var l = this[c][0];
                l != null && (h[l] = !0);
              }
            for (var f = 0; f < u.length; f++) {
              var s = [].concat(u[f]);
              d && h[s[0]] || (g && (s[2] ? s[2] = "".concat(g, " and ").concat(s[2]) : s[2] = g), a.push(s));
            }
          }, a;
        };
        function e(r, a) {
          var u = r[1] || "", g = r[3];
          if (!g)
            return u;
          if (a && typeof btoa == "function") {
            var d = i(g), h = g.sources.map(function(c) {
              return "/*# sourceURL=".concat(g.sourceRoot || "").concat(c, " */");
            });
            return [u].concat(h).concat([d]).join(`
`);
          }
          return [u].join(`
`);
        }
        function i(r) {
          var a = btoa(unescape(encodeURIComponent(JSON.stringify(r)))), u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a);
          return "/*# ".concat(u, " */");
        }
      },
      function(o, n, t) {
        var e = t(14), i = t(11), r = t(16), a = Object.defineProperty, u = {}, g = function(d) {
          throw d;
        };
        o.exports = function(d, h) {
          if (r(u, d))
            return u[d];
          h || (h = {});
          var c = [][d], l = r(h, "ACCESSORS") ? h.ACCESSORS : !1, f = r(h, 0) ? h[0] : g, s = r(h, 1) ? h[1] : void 0;
          return u[d] = !!c && !i(function() {
            if (l && !e)
              return !0;
            var m = { length: -1 };
            l ? a(m, 1, { enumerable: !0, get: g }) : m[1] = 1, c.call(m, f, s);
          });
        };
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(95)), u = function(g) {
          r.__extends(d, g);
          function d(h, c) {
            return g.call(this, h, c) || this;
          }
          return d;
        }(a.default);
        n.default = u;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4)), a = e(t(46));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var u = t(2), g = u.__importDefault(t(3)), d = u.__importDefault(t(95)), h = u.__importDefault(t(134)), c = function(l) {
          u.__extends(f, l);
          function f(s, m, v) {
            var p = l.call(this, s, m) || this;
            v.title = m.i18next.t("menus.dropListMenu." + v.title);
            var A = m.config.lang === "zh-CN" ? "" : "w-e-drop-list-tl";
            if (A !== "" && v.type === "list") {
              var y;
              (0, r.default)(y = v.list).call(y, function(S) {
                var D = S.$elem, I = g.default(D.children());
                if (I.length > 0) {
                  var C = I == null ? void 0 : I.getNodeName();
                  C && C === "I" && D.addClass(A);
                }
              });
            }
            var x = new h.default(p, v);
            return p.dropList = x, s.on("click", function() {
              var S;
              m.selection.getRange() != null && (s.css("z-index", m.zIndex.get("menu")), (0, r.default)(S = m.txt.eventHooks.dropListMenuHoverEvents).call(S, function(D) {
                return D();
              }), x.show());
            }).on("mouseleave", function() {
              s.css("z-index", "auto"), x.hideTimeoutId = (0, a.default)(function() {
                x.hide();
              });
            }), p;
          }
          return f;
        }(d.default);
        n.default = c;
      },
      function(o, n, t) {
        var e = t(13);
        o.exports = function(i) {
          if (!e(i))
            throw TypeError(String(i) + " is not an object");
          return i;
        };
      },
      function(o, n, t) {
        o.exports = t(188);
      },
      function(o, n, t) {
        o.exports = t(201);
      },
      function(o, n, t) {
        o.exports = t(213);
      },
      function(o, n, t) {
        o.exports = t(283);
      },
      function(o, n, t) {
        var e = t(72), i = t(49);
        o.exports = function(r) {
          return e(i(r));
        };
      },
      function(o, n, t) {
        var e = t(49);
        o.exports = function(i) {
          return Object(e(i));
        };
      },
      function(o, n, t) {
        var e = t(40), i = t(72), r = t(31), a = t(35), u = t(88), g = [].push, d = function(h) {
          var c = h == 1, l = h == 2, f = h == 3, s = h == 4, m = h == 6, v = h == 5 || m;
          return function(p, A, y, x) {
            for (var S = r(p), D = i(S), I = e(A, y, 3), C = a(D.length), E = 0, T = x || u, R = c ? T(p, C) : l ? T(p, 0) : void 0, N, M; C > E; E++)
              if ((v || E in D) && (N = D[E], M = I(N, E, S), h)) {
                if (c)
                  R[E] = M;
                else if (M)
                  switch (h) {
                    case 3:
                      return !0;
                    case 5:
                      return N;
                    case 6:
                      return E;
                    case 2:
                      g.call(R, N);
                  }
                else if (s)
                  return !1;
              }
            return m ? -1 : f || s ? s : R;
          };
        };
        o.exports = {
          forEach: d(0),
          map: d(1),
          filter: d(2),
          some: d(3),
          every: d(4),
          find: d(5),
          findIndex: d(6)
        };
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4)), a = e(t(29)), u = e(t(132));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var g = t(2), d = g.__importDefault(t(3)), h = t(7), c = function() {
          function l(f, s) {
            this.menu = f, this.conf = s, this.$container = d.default('<div class="w-e-panel-container"></div>');
            var m = f.editor;
            m.txt.eventHooks.clickEvents.push(l.hideCurAllPanels), m.txt.eventHooks.toolbarClickEvents.push(l.hideCurAllPanels), m.txt.eventHooks.dropListMenuHoverEvents.push(l.hideCurAllPanels);
          }
          return l.prototype.create = function() {
            var f = this, s = this.menu;
            if (!l.createdMenus.has(s)) {
              var m = this.conf, v = this.$container, p = m.width || 300, A = s.editor.$toolbarElem.getBoundingClientRect(), y = s.$elem.getBoundingClientRect(), x = A.height + A.top - y.top, S = (A.width - p) / 2 + A.left - y.left, D = 300;
              Math.abs(S) > D && (y.left < document.documentElement.clientWidth / 2 ? S = -y.width / 2 : S = -p + y.width / 2), v.css("width", p + "px").css("margin-top", x + "px").css("margin-left", S + "px").css("z-index", s.editor.zIndex.get("panel"));
              var I = d.default('<i class="w-e-icon-close w-e-panel-close"></i>');
              v.append(I), I.on("click", function() {
                f.remove();
              });
              var C = d.default('<ul class="w-e-panel-tab-title"></ul>'), E = d.default('<div class="w-e-panel-tab-content"></div>');
              v.append(C).append(E);
              var T = m.height;
              T && E.css("height", T + "px").css("overflow-y", "auto");
              var R = m.tabs || [], N = [], M = [];
              (0, r.default)(R).call(R, function(F, L) {
                if (!!F) {
                  var b = F.title || "", $ = F.tpl || "", H = d.default('<li class="w-e-item">' + b + "</li>");
                  C.append(H);
                  var j = d.default($);
                  E.append(j), N.push(H), M.push(j), L === 0 ? (H.data("active", !0), H.addClass("w-e-active")) : j.hide(), H.on("click", function() {
                    H.data("active") || ((0, r.default)(N).call(N, function(V) {
                      V.data("active", !1), V.removeClass("w-e-active");
                    }), (0, r.default)(M).call(M, function(V) {
                      V.hide();
                    }), H.data("active", !0), H.addClass("w-e-active"), j.show());
                  });
                }
              }), v.on("click", function(F) {
                F.stopPropagation();
              }), s.$elem.append(v), m.setLinkValue && m.setLinkValue(v, "text"), m.setLinkValue && m.setLinkValue(v, "link"), (0, r.default)(R).call(R, function(F, L) {
                if (!!F) {
                  var b = F.events || [];
                  (0, r.default)(b).call(b, function($) {
                    var H, j = $.selector, V = $.type, U = $.fn || h.EMPTY_FN, W = M[L], K = (H = $.bindEnter) !== null && H !== void 0 ? H : !1, w = function(J) {
                      return g.__awaiter(f, void 0, void 0, function() {
                        var k;
                        return g.__generator(this, function(nt) {
                          switch (nt.label) {
                            case 0:
                              return J.stopPropagation(), [
                                4,
                                U(J)
                              ];
                            case 1:
                              return k = nt.sent(), k && this.remove(), [
                                2
                              ];
                          }
                        });
                      });
                    };
                    (0, a.default)(W).call(W, j).on(V, w), K && V === "click" && W.on("keyup", function(Y) {
                      Y.keyCode == 13 && w(Y);
                    });
                  });
                }
              });
              var B = (0, a.default)(v).call(v, "input[type=text],textarea");
              B.length && B.get(0).focus(), l.hideCurAllPanels(), s.setPanel(this), l.createdMenus.add(s);
            }
          }, l.prototype.remove = function() {
            var f = this.menu, s = this.$container;
            s && s.remove(), l.createdMenus.delete(f);
          }, l.hideCurAllPanels = function() {
            var f;
            l.createdMenus.size !== 0 && (0, r.default)(f = l.createdMenus).call(f, function(s) {
              var m = s.panel;
              m && m.remove();
            });
          }, l.createdMenus = new u.default(), l;
        }();
        n.default = c;
      },
      function(o, n) {
        var t = {}.toString;
        o.exports = function(e) {
          return t.call(e).slice(8, -1);
        };
      },
      function(o, n, t) {
        var e = t(62), i = Math.min;
        o.exports = function(r) {
          return r > 0 ? i(e(r), 9007199254740991) : 0;
        };
      },
      function(o, n, t) {
        var e = t(9), i = t(8), r = function(a) {
          return typeof a == "function" ? a : void 0;
        };
        o.exports = function(a, u) {
          return arguments.length < 2 ? r(e[a]) || r(i[a]) : e[a] && e[a][u] || i[a] && i[a][u];
        };
      },
      function(o, n, t) {
        var e = t(81), i = t(18).f, r = t(19), a = t(16), u = t(170), g = t(10), d = g("toStringTag");
        o.exports = function(h, c, l, f) {
          if (h) {
            var s = l ? h : h.prototype;
            a(s, d) || i(s, d, { configurable: !0, value: c }), f && !e && r(s, "toString", u);
          }
        };
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(95)), u = function(g) {
          r.__extends(d, g);
          function d(h, c) {
            return g.call(this, h, c) || this;
          }
          return d.prototype.setPanel = function(h) {
            this.panel = h;
          }, d;
        }(a.default);
        n.default = u;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4)), a = e(t(57));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var u = t(2), g = u.__importDefault(t(3)), d = function() {
          function h(c, l, f) {
            this.editor = c, this.$targetElem = l, this.conf = f, this._show = !1, this._isInsertTextContainer = !1;
            var s = g.default("<div></div>");
            s.addClass("w-e-tooltip"), this.$container = s;
          }
          return h.prototype.getPositionData = function() {
            var c = this.$container, l = 0, f = 0, s = 20, m = document.documentElement.scrollTop, v = this.$targetElem.getBoundingClientRect(), p = this.editor.$textElem.getBoundingClientRect(), A = this.$targetElem.getOffsetData(), y = g.default(A.parent), x = this.editor.$textElem.elems[0].scrollTop;
            if (this._isInsertTextContainer = y.equal(this.editor.$textContainerElem), this._isInsertTextContainer) {
              var S = y.getBoundingClientRect().height, D = A.top, I = A.left, C = A.height, E = D - x;
              E > s + 5 ? (l = E - s - 15, c.addClass("w-e-tooltip-up")) : E + C + s < S ? (l = E + C + 10, c.addClass("w-e-tooltip-down")) : (l = (E > 0 ? E : 0) + s + 10, c.addClass("w-e-tooltip-down")), I < 0 ? f = 0 : f = I;
            } else
              v.top < s || v.top - p.top < s ? (l = v.bottom + m + 5, c.addClass("w-e-tooltip-down")) : (l = v.top + m - s - 15, c.addClass("w-e-tooltip-up")), v.left < 0 ? f = 0 : f = v.left;
            return {
              top: l,
              left: f
            };
          }, h.prototype.appendMenus = function() {
            var c = this, l = this.conf, f = this.editor, s = this.$targetElem, m = this.$container;
            (0, r.default)(l).call(l, function(v, p) {
              var A = v.$elem, y = g.default("<div></div>");
              y.addClass("w-e-tooltip-item-wrapper "), y.append(A), m.append(y), A.on("click", function(x) {
                x.preventDefault();
                var S = v.onClick(f, s);
                S && c.remove();
              });
            });
          }, h.prototype.create = function() {
            var c, l, f = this.editor, s = this.$container;
            this.appendMenus();
            var m = this.getPositionData(), v = m.top, p = m.left;
            s.css("top", v + "px"), s.css("left", p + "px"), s.css("z-index", f.zIndex.get("tooltip")), this._isInsertTextContainer ? this.editor.$textContainerElem.append(s) : g.default("body").append(s), this._show = !0, f.beforeDestroy((0, a.default)(c = this.remove).call(c, this)), f.txt.eventHooks.onBlurEvents.push((0, a.default)(l = this.remove).call(l, this));
          }, h.prototype.remove = function() {
            this.$container.remove(), this._show = !1;
          }, (0, i.default)(h.prototype, "isShow", {
            get: function() {
              return this._show;
            },
            enumerable: !1,
            configurable: !0
          }), h;
        }();
        n.default = d;
      },
      function(o, n, t) {
        var e = t(41);
        o.exports = function(i, r, a) {
          if (e(i), r === void 0)
            return i;
          switch (a) {
            case 0:
              return function() {
                return i.call(r);
              };
            case 1:
              return function(u) {
                return i.call(r, u);
              };
            case 2:
              return function(u, g) {
                return i.call(r, u, g);
              };
            case 3:
              return function(u, g, d) {
                return i.call(r, u, g, d);
              };
          }
          return function() {
            return i.apply(r, arguments);
          };
        };
      },
      function(o, n) {
        o.exports = function(t) {
          if (typeof t != "function")
            throw TypeError(String(t) + " is not a function");
          return t;
        };
      },
      function(o, n, t) {
        var e = t(165), i = t(8), r = t(13), a = t(19), u = t(16), g = t(63), d = t(51), h = i.WeakMap, c, l, f, s = function(S) {
          return f(S) ? l(S) : c(S, {});
        }, m = function(S) {
          return function(D) {
            var I;
            if (!r(D) || (I = l(D)).type !== S)
              throw TypeError("Incompatible receiver, " + S + " required");
            return I;
          };
        };
        if (e) {
          var v = new h(), p = v.get, A = v.has, y = v.set;
          c = function(S, D) {
            return y.call(v, S, D), D;
          }, l = function(S) {
            return p.call(v, S) || {};
          }, f = function(S) {
            return A.call(v, S);
          };
        } else {
          var x = g("state");
          d[x] = !0, c = function(S, D) {
            return a(S, x, D), D;
          }, l = function(S) {
            return u(S, x) ? S[x] : {};
          }, f = function(S) {
            return u(S, x);
          };
        }
        o.exports = {
          set: c,
          get: l,
          has: f,
          enforce: s,
          getterFor: m
        };
      },
      function(o, n) {
        o.exports = !0;
      },
      function(o, n) {
        o.exports = {};
      },
      function(o, n, t) {
        o.exports = t(261);
      },
      function(o, n, t) {
        o.exports = t(265);
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.createElementFragment = n.createDocumentFragment = n.createElement = n.insertBefore = n.getEndPoint = n.getStartPoint = n.updateRange = n.filterSelectionNodes = void 0;
        var a = t(2), u = t(137), g = a.__importDefault(t(3));
        function d(p) {
          var A = [];
          return (0, r.default)(p).call(p, function(y) {
            var x = y.getNodeName();
            if (x !== u.ListType.OrderedList && x !== u.ListType.UnorderedList)
              A.push(y);
            else if (y.prior)
              A.push(y.prior);
            else {
              var S = y.children();
              S == null || (0, r.default)(S).call(S, function(D) {
                A.push(g.default(D));
              });
            }
          }), A;
        }
        n.filterSelectionNodes = d;
        function h(p, A, y) {
          var x = p.selection, S = document.createRange();
          A.length > 1 ? (S.setStart(A.elems[0], 0), S.setEnd(A.elems[A.length - 1], A.elems[A.length - 1].childNodes.length)) : S.selectNodeContents(A.elems[0]), y && S.collapse(!1), x.saveRange(S), x.restoreSelection();
        }
        n.updateRange = h;
        function c(p) {
          var A;
          return p.prior ? p.prior : g.default((A = p.children()) === null || A === void 0 ? void 0 : A.elems[0]);
        }
        n.getStartPoint = c;
        function l(p) {
          var A;
          return p.prior ? p.prior : g.default((A = p.children()) === null || A === void 0 ? void 0 : A.last().elems[0]);
        }
        n.getEndPoint = l;
        function f(p, A, y) {
          y === void 0 && (y = null), p.parent().elems[0].insertBefore(A, y);
        }
        n.insertBefore = f;
        function s(p) {
          return document.createElement(p);
        }
        n.createElement = s;
        function m() {
          return document.createDocumentFragment();
        }
        n.createDocumentFragment = m;
        function v(p, A, y) {
          return y === void 0 && (y = "li"), (0, r.default)(p).call(p, function(x) {
            var S = s(y);
            S.innerHTML = x.html(), A.appendChild(S), x.remove();
          }), A;
        }
        n.createElementFragment = v;
      },
      function(o, n) {
        o.exports = function(t, e) {
          return {
            enumerable: !(t & 1),
            configurable: !(t & 2),
            writable: !(t & 4),
            value: e
          };
        };
      },
      function(o, n) {
        o.exports = function(t) {
          if (t == null)
            throw TypeError("Can't call method on " + t);
          return t;
        };
      },
      function(o, n, t) {
        var e = t(164).charAt, i = t(42), r = t(75), a = "String Iterator", u = i.set, g = i.getterFor(a);
        r(String, "String", function(d) {
          u(this, {
            type: a,
            string: String(d),
            index: 0
          });
        }, function() {
          var h = g(this), c = h.string, l = h.index, f;
          return l >= c.length ? { value: void 0, done: !0 } : (f = e(c, l), h.index += f.length, { value: f, done: !1 });
        });
      },
      function(o, n) {
        o.exports = {};
      },
      function(o, n, t) {
        var e = t(107), i = t(80);
        o.exports = Object.keys || function(a) {
          return e(a, i);
        };
      },
      function(o, n, t) {
        var e = t(19);
        o.exports = function(i, r, a, u) {
          u && u.enumerable ? i[r] = a : e(i, r, a);
        };
      },
      function(o, n, t) {
        t(173);
        var e = t(174), i = t(8), r = t(65), a = t(19), u = t(44), g = t(10), d = g("toStringTag");
        for (var h in e) {
          var c = i[h], l = c && c.prototype;
          l && r(l) !== d && a(l, d, h), u[h] = u.Array;
        }
      },
      function(o, n, t) {
        var e = t(34);
        o.exports = Array.isArray || function(r) {
          return e(r) == "Array";
        };
      },
      function(o, n, t) {
        var e = t(11), i = t(10), r = t(86), a = i("species");
        o.exports = function(u) {
          return r >= 51 || !e(function() {
            var g = [], d = g.constructor = {};
            return d[a] = function() {
              return { foo: 1 };
            }, g[u](Boolean).foo !== 1;
          });
        };
      },
      function(o, n, t) {
        o.exports = t(222);
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.ListHandle = void 0;
        var r = t(2), a = r.__importDefault(t(373)), u = function() {
          function g(d) {
            this.options = d, this.selectionRangeElem = new a.default();
          }
          return g;
        }();
        n.ListHandle = u;
      },
      function(o, n, t) {
        var e = {}.propertyIsEnumerable, i = Object.getOwnPropertyDescriptor, r = i && !e.call({ 1: 2 }, 1);
        n.f = r ? function(u) {
          var g = i(this, u);
          return !!g && g.enumerable;
        } : e;
      },
      function(o, n, t) {
        var e = t(13);
        o.exports = function(i, r) {
          if (!e(i))
            return i;
          var a, u;
          if (r && typeof (a = i.toString) == "function" && !e(u = a.call(i)) || typeof (a = i.valueOf) == "function" && !e(u = a.call(i)) || !r && typeof (a = i.toString) == "function" && !e(u = a.call(i)))
            return u;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      function(o, n) {
      },
      function(o, n) {
        var t = Math.ceil, e = Math.floor;
        o.exports = function(i) {
          return isNaN(i = +i) ? 0 : (i > 0 ? e : t)(i);
        };
      },
      function(o, n, t) {
        var e = t(74), i = t(64), r = e("keys");
        o.exports = function(a) {
          return r[a] || (r[a] = i(a));
        };
      },
      function(o, n) {
        var t = 0, e = Math.random();
        o.exports = function(i) {
          return "Symbol(" + String(i === void 0 ? "" : i) + ")_" + (++t + e).toString(36);
        };
      },
      function(o, n, t) {
        var e = t(81), i = t(34), r = t(10), a = r("toStringTag"), u = i(function() {
          return arguments;
        }()) == "Arguments", g = function(d, h) {
          try {
            return d[h];
          } catch {
          }
        };
        o.exports = e ? i : function(d) {
          var h, c, l;
          return d === void 0 ? "Undefined" : d === null ? "Null" : typeof (c = g(h = Object(d), a)) == "string" ? c : u ? i(h) : (l = i(h)) == "Object" && typeof h.callee == "function" ? "Arguments" : l;
        };
      },
      function(o, n, t) {
        var e = t(25), i = t(112), r = t(35), a = t(40), u = t(113), g = t(114), d = function(c, l) {
          this.stopped = c, this.result = l;
        }, h = o.exports = function(c, l, f, s, m) {
          var v = a(l, f, s ? 2 : 1), p, A, y, x, S, D, I;
          if (m)
            p = c;
          else {
            if (A = u(c), typeof A != "function")
              throw TypeError("Target is not iterable");
            if (i(A)) {
              for (y = 0, x = r(c.length); x > y; y++)
                if (S = s ? v(e(I = c[y])[0], I[1]) : v(c[y]), S && S instanceof d)
                  return S;
              return new d(!1);
            }
            p = A.call(c);
          }
          for (D = p.next; !(I = D.call(p)).done; )
            if (S = g(p, v, I.value, s), typeof S == "object" && S && S instanceof d)
              return S;
          return new d(!1);
        };
        h.stop = function(c) {
          return new d(!0, c);
        };
      },
      function(o, n, t) {
        var e = t(11);
        o.exports = function(i, r) {
          var a = [][i];
          return !!a && e(function() {
            a.call(null, r || function() {
              throw 1;
            }, 1);
          });
        };
      },
      function(o, n) {
        o.exports = `	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`;
      },
      function(o, n, t) {
        var e = t(60), i = t(18), r = t(48);
        o.exports = function(a, u, g) {
          var d = e(u);
          d in a ? i.f(a, d, r(0, g)) : a[d] = g;
        };
      },
      function(o, n, t) {
        o.exports = t(209);
      },
      function(o, n, t) {
        var e = t(14), i = t(59), r = t(48), a = t(30), u = t(60), g = t(16), d = t(100), h = Object.getOwnPropertyDescriptor;
        n.f = e ? h : function(l, f) {
          if (l = a(l), f = u(f, !0), d)
            try {
              return h(l, f);
            } catch {
            }
          if (g(l, f))
            return r(!i.f.call(l, f), l[f]);
        };
      },
      function(o, n, t) {
        var e = t(11), i = t(34), r = "".split;
        o.exports = e(function() {
          return !Object("z").propertyIsEnumerable(0);
        }) ? function(a) {
          return i(a) == "String" ? r.call(a, "") : Object(a);
        } : Object;
      },
      function(o, n, t) {
        var e = t(8), i = t(13), r = e.document, a = i(r) && i(r.createElement);
        o.exports = function(u) {
          return a ? r.createElement(u) : {};
        };
      },
      function(o, n, t) {
        var e = t(43), i = t(103);
        (o.exports = function(r, a) {
          return i[r] || (i[r] = a !== void 0 ? a : {});
        })("versions", []).push({
          version: "3.6.4",
          mode: e ? "pure" : "global",
          copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)"
        });
      },
      function(o, n, t) {
        var e = t(5), i = t(167), r = t(105), a = t(171), u = t(37), g = t(19), d = t(53), h = t(10), c = t(43), l = t(44), f = t(104), s = f.IteratorPrototype, m = f.BUGGY_SAFARI_ITERATORS, v = h("iterator"), p = "keys", A = "values", y = "entries", x = function() {
          return this;
        };
        o.exports = function(S, D, I, C, E, T, R) {
          i(I, D, C);
          var N = function(U) {
            if (U === E && b)
              return b;
            if (!m && U in F)
              return F[U];
            switch (U) {
              case p:
                return function() {
                  return new I(this, U);
                };
              case A:
                return function() {
                  return new I(this, U);
                };
              case y:
                return function() {
                  return new I(this, U);
                };
            }
            return function() {
              return new I(this);
            };
          }, M = D + " Iterator", B = !1, F = S.prototype, L = F[v] || F["@@iterator"] || E && F[E], b = !m && L || N(E), $ = D == "Array" && F.entries || L, H, j, V;
          if ($ && (H = r($.call(new S())), s !== Object.prototype && H.next && (!c && r(H) !== s && (a ? a(H, s) : typeof H[v] != "function" && g(H, v, x)), u(H, M, !0, !0), c && (l[M] = x))), E == A && L && L.name !== A && (B = !0, b = function() {
            return L.call(this);
          }), (!c || R) && F[v] !== b && g(F, v, b), l[D] = b, E)
            if (j = {
              values: N(A),
              keys: T ? b : N(p),
              entries: N(y)
            }, R)
              for (V in j)
                (m || B || !(V in F)) && d(F, V, j[V]);
            else
              e({ target: D, proto: !0, forced: m || B }, j);
          return j;
        };
      },
      function(o, n, t) {
        var e = t(11);
        o.exports = !!Object.getOwnPropertySymbols && !e(function() {
          return !String(Symbol());
        });
      },
      function(o, n, t) {
        var e = t(25), i = t(169), r = t(80), a = t(51), u = t(108), g = t(73), d = t(63), h = ">", c = "<", l = "prototype", f = "script", s = d("IE_PROTO"), m = function() {
        }, v = function(S) {
          return c + f + h + S + c + "/" + f + h;
        }, p = function(S) {
          S.write(v("")), S.close();
          var D = S.parentWindow.Object;
          return S = null, D;
        }, A = function() {
          var S = g("iframe"), D = "java" + f + ":", I;
          return S.style.display = "none", u.appendChild(S), S.src = String(D), I = S.contentWindow.document, I.open(), I.write(v("document.F=Object")), I.close(), I.F;
        }, y, x = function() {
          try {
            y = document.domain && new ActiveXObject("htmlfile");
          } catch {
          }
          x = y ? p(y) : A();
          for (var S = r.length; S--; )
            delete x[l][r[S]];
          return x();
        };
        a[s] = !0, o.exports = Object.create || function(D, I) {
          var C;
          return D !== null ? (m[l] = e(D), C = new m(), m[l] = null, C[s] = D) : C = x(), I === void 0 ? C : i(C, I);
        };
      },
      function(o, n, t) {
        var e = t(30), i = t(35), r = t(79), a = function(u) {
          return function(g, d, h) {
            var c = e(g), l = i(c.length), f = r(h, l), s;
            if (u && d != d) {
              for (; l > f; )
                if (s = c[f++], s != s)
                  return !0;
            } else
              for (; l > f; f++)
                if ((u || f in c) && c[f] === d)
                  return u || f || 0;
            return !u && -1;
          };
        };
        o.exports = {
          includes: a(!0),
          indexOf: a(!1)
        };
      },
      function(o, n, t) {
        var e = t(62), i = Math.max, r = Math.min;
        o.exports = function(a, u) {
          var g = e(a);
          return g < 0 ? i(g + u, 0) : r(g, u);
        };
      },
      function(o, n) {
        o.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf"
        ];
      },
      function(o, n, t) {
        var e = t(10), i = e("toStringTag"), r = {};
        r[i] = "z", o.exports = String(r) === "[object z]";
      },
      function(o, n) {
        o.exports = function() {
        };
      },
      function(o, n) {
        o.exports = function(t, e, i) {
          if (!(t instanceof e))
            throw TypeError("Incorrect " + (i ? i + " " : "") + "invocation");
          return t;
        };
      },
      function(o, n, t) {
        var e = t(36);
        o.exports = e("navigator", "userAgent") || "";
      },
      function(o, n, t) {
        var e = t(41), i = function(r) {
          var a, u;
          this.promise = new r(function(g, d) {
            if (a !== void 0 || u !== void 0)
              throw TypeError("Bad Promise constructor");
            a = g, u = d;
          }), this.resolve = e(a), this.reject = e(u);
        };
        o.exports.f = function(r) {
          return new i(r);
        };
      },
      function(o, n, t) {
        var e = t(8), i = t(84), r = e.process, a = r && r.versions, u = a && a.v8, g, d;
        u ? (g = u.split("."), d = g[0] + g[1]) : i && (g = i.match(/Edge\/(\d+)/), (!g || g[1] >= 74) && (g = i.match(/Chrome\/(\d+)/), g && (d = g[1]))), o.exports = d && +d;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = a.__importDefault(t(3)), g = t(6), d = a.__importDefault(t(267)), h = a.__importDefault(t(280)), c = a.__importDefault(t(281)), l = a.__importDefault(t(282)), f = a.__importDefault(t(301)), s = a.__importStar(t(416)), m = a.__importDefault(t(417)), v = a.__importDefault(t(418)), p = a.__importDefault(t(419)), A = a.__importStar(t(420)), y = a.__importDefault(t(423)), x = a.__importDefault(t(424)), S = a.__importDefault(t(425)), D = a.__importDefault(t(427)), I = a.__importDefault(t(437)), C = a.__importDefault(t(440)), E = a.__importStar(t(441)), T = a.__importDefault(t(23)), R = a.__importDefault(t(134)), N = a.__importDefault(t(24)), M = a.__importDefault(t(33)), B = a.__importDefault(t(38)), F = a.__importDefault(t(39)), L = 1, b = function() {
          function $(H, j) {
            this.pluginsFunctionList = {}, this.beforeDestroyHooks = [], this.id = "wangEditor-" + L++, this.toolbarSelector = H, this.textSelector = j, s.selectorValidator(this), this.config = g.deepClone(d.default), this.$toolbarElem = u.default("<div></div>"), this.$textContainerElem = u.default("<div></div>"), this.$textElem = u.default("<div></div>"), this.toolbarElemId = "", this.textElemId = "", this.isFocus = !1, this.isComposing = !1, this.isCompatibleMode = !1, this.selection = new h.default(this), this.cmd = new c.default(this), this.txt = new l.default(this), this.menus = new f.default(this), this.zIndex = new x.default(), this.change = new S.default(this), this.history = new D.default(this), this.onSelectionChange = new C.default(this);
            var V = I.default(this), U = V.disable, W = V.enable;
            this.disable = U, this.enable = W, this.isEnable = !0;
          }
          return $.prototype.initSelection = function(H) {
            m.default(this, H);
          }, $.prototype.create = function() {
            this.zIndex.init(this), this.isCompatibleMode = this.config.compatibleMode(), this.isCompatibleMode || (this.config.onchangeTimeout = 30), p.default(this), s.default(this), this.txt.init(), this.menus.init(), A.default(this), this.initSelection(!0), v.default(this), this.change.observe(), this.history.observe(), E.default(this);
          }, $.prototype.beforeDestroy = function(H) {
            return this.beforeDestroyHooks.push(H), this;
          }, $.prototype.destroy = function() {
            var H, j = this;
            (0, r.default)(H = this.beforeDestroyHooks).call(H, function(V) {
              return V.call(j);
            }), this.$toolbarElem.remove(), this.$textContainerElem.remove();
          }, $.prototype.fullScreen = function() {
            A.setFullScreen(this);
          }, $.prototype.unFullScreen = function() {
            A.setUnFullScreen(this);
          }, $.prototype.scrollToHead = function(H) {
            y.default(this, H);
          }, $.registerMenu = function(H, j) {
            !j || typeof j != "function" || ($.globalCustomMenuConstructorList[H] = j);
          }, $.prototype.registerPlugin = function(H, j) {
            E.registerPlugin(H, j, this.pluginsFunctionList);
          }, $.registerPlugin = function(H, j) {
            E.registerPlugin(H, j, $.globalPluginsFunctionList);
          }, $.$ = u.default, $.BtnMenu = T.default, $.DropList = R.default, $.DropListMenu = N.default, $.Panel = M.default, $.PanelMenu = B.default, $.Tooltip = F.default, $.globalCustomMenuConstructorList = {}, $.globalPluginsFunctionList = {}, $;
        }();
        n.default = b;
      },
      function(o, n, t) {
        var e = t(13), i = t(55), r = t(10), a = r("species");
        o.exports = function(u, g) {
          var d;
          return i(u) && (d = u.constructor, typeof d == "function" && (d === Array || i(d.prototype)) ? d = void 0 : e(d) && (d = d[a], d === null && (d = void 0))), new (d === void 0 ? Array : d)(g === 0 ? 0 : g);
        };
      },
      function(o, n, t) {
        o.exports = t(185);
      },
      function(o, n, t) {
        var e = t(49), i = t(68), r = "[" + i + "]", a = RegExp("^" + r + r + "*"), u = RegExp(r + r + "*$"), g = function(d) {
          return function(h) {
            var c = String(e(h));
            return d & 1 && (c = c.replace(a, "")), d & 2 && (c = c.replace(u, "")), c;
          };
        };
        o.exports = {
          start: g(1),
          end: g(2),
          trim: g(3)
        };
      },
      function(o, n, t) {
        o.exports = t(205);
      },
      function(o, n, t) {
        var e = t(227), i = t(230);
        function r(a) {
          return typeof i == "function" && typeof e == "symbol" ? o.exports = r = function(g) {
            return typeof g;
          } : o.exports = r = function(g) {
            return g && typeof i == "function" && g.constructor === i && g !== i.prototype ? "symbol" : typeof g;
          }, r(a);
        }
        o.exports = r;
      },
      function(o, n, t) {
        var e = t(10);
        n.f = e;
      },
      function(o, n, t) {
        o.exports = t(306);
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = a.__importDefault(t(33)), g = function() {
          function d(h, c) {
            var l = this;
            this.$elem = h, this.editor = c, this._active = !1, h.on("click", function(f) {
              var s;
              u.default.hideCurAllPanels(), (0, r.default)(s = c.txt.eventHooks.menuClickEvents).call(s, function(m) {
                return m();
              }), f.stopPropagation(), c.selection.getRange() != null && l.clickHandler(f);
            });
          }
          return d.prototype.clickHandler = function(h) {
          }, d.prototype.active = function() {
            this._active = !0, this.$elem.addClass("w-e-active");
          }, d.prototype.unActive = function() {
            this._active = !1, this.$elem.removeClass("w-e-active");
          }, (0, i.default)(d.prototype, "isActive", {
            get: function() {
              return this._active;
            },
            enumerable: !1,
            configurable: !0
          }), d;
        }();
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(28));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.getParentNodeA = n.EXTRA_TAG = void 0, n.EXTRA_TAG = ["B", "FONT", "I", "STRIKE"];
        function a(g) {
          for (var d = g.elems[0]; d && (0, r.default)(h = n.EXTRA_TAG).call(h, d.nodeName); ) {
            var h;
            if (d = d.parentElement, d.nodeName === "A")
              return d;
          }
        }
        n.getParentNodeA = a;
        function u(g) {
          var d, h = g.selection.getSelectionContainerElem();
          if (!(!((d = h == null ? void 0 : h.elems) === null || d === void 0) && d.length))
            return !1;
          if (h.getNodeName() === "A")
            return !0;
          var c = a(h);
          return !!(c && c.nodeName === "A");
        }
        n.default = u;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(57)), a = e(t(4)), u = e(t(27));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var g = t(2), d = t(6), h = g.__importDefault(t(135)), c = g.__importDefault(t(136)), l = function() {
          function f(s) {
            this.editor = s;
          }
          return f.prototype.insertImg = function(s, m, v) {
            var p = this.editor, A = p.config, y = "validate.", x = function(T, R) {
              return R === void 0 && (R = y), p.i18next.t(R + T);
            }, S = s.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            S = S.replace("'", '"');
            var D = "";
            v && (D = v.replace("'", '"'), D = "data-href='" + encodeURIComponent(D) + "' ");
            var I = "";
            m && (I = m.replace(/</g, "&lt;").replace(/>/g, "&gt;"), I = I.replace("'", '"'), I = "alt='" + I + "' "), p.cmd.do("insertHTML", "<img src='" + S + "' " + I + D + 'style="max-width:100%;" contenteditable="false"/>'), A.linkImgCallback(s, m, v);
            var C = document.createElement("img");
            C.onload = function() {
              C = null;
            }, C.onerror = function() {
              A.customAlert(x("\u63D2\u5165\u56FE\u7247\u9519\u8BEF"), "error", "wangEditor: " + x("\u63D2\u5165\u56FE\u7247\u9519\u8BEF") + "\uFF0C" + x("\u56FE\u7247\u94FE\u63A5") + ' "' + s + '"\uFF0C' + x("\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25")), C = null;
            }, C.onabort = function() {
              return C = null;
            }, C.src = s;
          }, f.prototype.uploadImg = function(s) {
            var m = this;
            if (!!s.length) {
              var v = this.editor, p = v.config, A = "validate.", y = function(w) {
                return v.i18next.t(A + w);
              }, x = p.uploadImgServer, S = p.uploadImgShowBase64, D = p.uploadImgMaxSize, I = D / 1024 / 1024, C = p.uploadImgMaxLength, E = p.uploadFileName, T = p.uploadImgParams, R = p.uploadImgParamsWithUrl, N = p.uploadImgHeaders, M = p.uploadImgHooks, B = p.uploadImgTimeout, F = p.withCredentials, L = p.customUploadImg;
              if (!(!L && !x && !S)) {
                var b = [], $ = [];
                if (d.arrForEach(s, function(K) {
                  if (!!K) {
                    var w = K.name || K.type.replace("/", "."), Y = K.size;
                    if (!(!w || !Y)) {
                      var J = v.config.uploadImgAccept.join("|"), k = ".(" + J + ")$", nt = new RegExp(k, "i");
                      if (nt.test(w) === !1) {
                        $.push("\u3010" + w + "\u3011" + y("\u4E0D\u662F\u56FE\u7247"));
                        return;
                      }
                      if (D < Y) {
                        $.push("\u3010" + w + "\u3011" + y("\u5927\u4E8E") + " " + I + "M");
                        return;
                      }
                      b.push(K);
                    }
                  }
                }), $.length) {
                  p.customAlert(y("\u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7") + `: 
` + $.join(`
`), "warning");
                  return;
                }
                if (b.length === 0) {
                  p.customAlert(y("\u4F20\u5165\u7684\u6587\u4EF6\u4E0D\u5408\u6CD5"), "warning");
                  return;
                }
                if (b.length > C) {
                  p.customAlert(y("\u4E00\u6B21\u6700\u591A\u4E0A\u4F20") + C + y("\u5F20\u56FE\u7247"), "warning");
                  return;
                }
                if (L && typeof L == "function") {
                  var H;
                  L(b, (0, r.default)(H = this.insertImg).call(H, this));
                  return;
                }
                var j = new FormData();
                if ((0, a.default)(b).call(b, function(K, w) {
                  var Y = E || K.name;
                  b.length > 1 && (Y = Y + (w + 1)), j.append(Y, K);
                }), x) {
                  var V = x.split("#");
                  x = V[0];
                  var U = V[1] || "";
                  (0, a.default)(d).call(d, T, function(K, w) {
                    R && ((0, u.default)(x).call(x, "?") > 0 ? x += "&" : x += "?", x = x + K + "=" + w), j.append(K, w);
                  }), U && (x += "#" + U);
                  var W = h.default(x, {
                    timeout: B,
                    formData: j,
                    headers: N,
                    withCredentials: !!F,
                    beforeSend: function(w) {
                      if (M.before)
                        return M.before(w, v, b);
                    },
                    onTimeout: function(w) {
                      p.customAlert(y("\u4E0A\u4F20\u56FE\u7247\u8D85\u65F6"), "error"), M.timeout && M.timeout(w, v);
                    },
                    onProgress: function(w, Y) {
                      var J = new c.default(v);
                      Y.lengthComputable && (w = Y.loaded / Y.total, J.show(w));
                    },
                    onError: function(w) {
                      p.customAlert(y("\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF"), "error", y("\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF") + "\uFF0C" + y("\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001") + ": " + w.status), M.error && M.error(w, v);
                    },
                    onFail: function(w, Y) {
                      p.customAlert(y("\u4E0A\u4F20\u56FE\u7247\u5931\u8D25"), "error", y("\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + ("\uFF0C" + y("\u8FD4\u56DE\u7ED3\u679C") + ": ") + Y), M.fail && M.fail(w, v, Y);
                    },
                    onSuccess: function(w, Y) {
                      if (M.customInsert) {
                        var J;
                        M.customInsert((0, r.default)(J = m.insertImg).call(J, m), Y, v);
                        return;
                      }
                      if (Y.errno != "0") {
                        p.customAlert(y("\u4E0A\u4F20\u56FE\u7247\u5931\u8D25"), "error", y("\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + "\uFF0C" + y("\u8FD4\u56DE\u7ED3\u679C") + " errno=" + Y.errno), M.fail && M.fail(w, v, Y);
                        return;
                      }
                      var k = Y.data;
                      (0, a.default)(k).call(k, function(nt) {
                        typeof nt == "string" ? m.insertImg(nt) : m.insertImg(nt.url, nt.alt, nt.href);
                      }), M.success && M.success(w, v, Y);
                    }
                  });
                  typeof W == "string" && p.customAlert(W, "error");
                  return;
                }
                S && d.arrForEach(s, function(K) {
                  var w = m, Y = new FileReader();
                  Y.readAsDataURL(K), Y.onload = function() {
                    if (!!this.result) {
                      var J = this.result.toString();
                      w.insertImg(J, J);
                    }
                  };
                });
              }
            }
          }, f;
        }();
        n.default = l;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(410)), a = e(t(4)), u = e(t(45));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.dealTextNode = n.isAllTodo = n.isTodo = n.getCursorNextNode = void 0;
        function g(f) {
          return f.length ? f.attr("class") === "w-e-todo" : !1;
        }
        n.isTodo = g;
        function d(f) {
          var s = f.selection.getSelectionRangeTopNodes();
          if (s.length !== 0)
            return (0, r.default)(s).call(s, function(m) {
              return g(m);
            });
        }
        n.isAllTodo = d;
        function h(f, s, m) {
          var v;
          if (!!f.hasChildNodes()) {
            var p = f.cloneNode(), A = !1;
            s.nodeValue === "" && (A = !0);
            var y = [];
            return (0, a.default)(v = f.childNodes).call(v, function(x) {
              if (!c(x, s) && A && (p.appendChild(x.cloneNode(!0)), x.nodeName !== "BR" && y.push(x)), c(x, s)) {
                if (x.nodeType === 1) {
                  var S = h(x, s, m);
                  S && S.textContent !== "" && (p == null || p.appendChild(S));
                }
                if (x.nodeType === 3 && s.isEqualNode(x)) {
                  var D = l(x, m);
                  p.textContent = D;
                }
                A = !0;
              }
            }), (0, a.default)(y).call(y, function(x) {
              var S = x;
              S.remove();
            }), p;
          }
        }
        n.getCursorNextNode = h;
        function c(f, s) {
          return f.nodeType === 3 ? f.nodeValue === s.nodeValue : f.contains(s);
        }
        function l(f, s, m) {
          m === void 0 && (m = !0);
          var v = f.nodeValue, p = v == null ? void 0 : (0, u.default)(v).call(v, 0, s);
          if (v = v == null ? void 0 : (0, u.default)(v).call(v, s), !m) {
            var A = v;
            v = p, p = A;
          }
          return f.nodeValue = p, v;
        }
        n.dealTextNode = l;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(430), a = function() {
          function u(g) {
            this.maxSize = g, this.isRe = !1, this.data = new r.CeilStack(g), this.revokeData = new r.CeilStack(g);
          }
          return (0, i.default)(u.prototype, "size", {
            get: function() {
              return [this.data.size, this.revokeData.size];
            },
            enumerable: !1,
            configurable: !0
          }), u.prototype.resetMaxSize = function(g) {
            this.data.resetMax(g), this.revokeData.resetMax(g);
          }, u.prototype.save = function(g) {
            return this.isRe && (this.revokeData.clear(), this.isRe = !1), this.data.instack(g), this;
          }, u.prototype.revoke = function(g) {
            !this.isRe && (this.isRe = !0);
            var d = this.data.outstack();
            return d ? (this.revokeData.instack(d), g(d), !0) : !1;
          }, u.prototype.restore = function(g) {
            !this.isRe && (this.isRe = !0);
            var d = this.revokeData.outstack();
            return d ? (this.data.instack(d), g(d), !0) : !1;
          }, u;
        }();
        n.default = a;
      },
      function(o, n, t) {
        var e = t(14), i = t(11), r = t(73);
        o.exports = !e && !i(function() {
          return Object.defineProperty(r("div"), "a", {
            get: function() {
              return 7;
            }
          }).a != 7;
        });
      },
      function(o, n, t) {
        var e = t(11), i = /#|\.prototype\./, r = function(h, c) {
          var l = u[a(h)];
          return l == d ? !0 : l == g ? !1 : typeof c == "function" ? e(c) : !!c;
        }, a = r.normalize = function(h) {
          return String(h).replace(i, ".").toLowerCase();
        }, u = r.data = {}, g = r.NATIVE = "N", d = r.POLYFILL = "P";
        o.exports = r;
      },
      function(o, n, t) {
        var e = t(103), i = Function.toString;
        typeof e.inspectSource != "function" && (e.inspectSource = function(r) {
          return i.call(r);
        }), o.exports = e.inspectSource;
      },
      function(o, n, t) {
        var e = t(8), i = t(166), r = "__core-js_shared__", a = e[r] || i(r, {});
        o.exports = a;
      },
      function(o, n, t) {
        var e = t(105), i = t(19), r = t(16), a = t(10), u = t(43), g = a("iterator"), d = !1, h = function() {
          return this;
        }, c, l, f;
        [].keys && (f = [].keys(), "next" in f ? (l = e(e(f)), l !== Object.prototype && (c = l)) : d = !0), c == null && (c = {}), !u && !r(c, g) && i(c, g, h), o.exports = {
          IteratorPrototype: c,
          BUGGY_SAFARI_ITERATORS: d
        };
      },
      function(o, n, t) {
        var e = t(16), i = t(31), r = t(63), a = t(168), u = r("IE_PROTO"), g = Object.prototype;
        o.exports = a ? Object.getPrototypeOf : function(d) {
          return d = i(d), e(d, u) ? d[u] : typeof d.constructor == "function" && d instanceof d.constructor ? d.constructor.prototype : d instanceof Object ? g : null;
        };
      },
      function(o, n, t) {
        var e = t(76);
        o.exports = e && !Symbol.sham && typeof Symbol.iterator == "symbol";
      },
      function(o, n, t) {
        var e = t(16), i = t(30), r = t(78).indexOf, a = t(51);
        o.exports = function(u, g) {
          var d = i(u), h = 0, c = [], l;
          for (l in d)
            !e(a, l) && e(d, l) && c.push(l);
          for (; g.length > h; )
            e(d, l = g[h++]) && (~r(c, l) || c.push(l));
          return c;
        };
      },
      function(o, n, t) {
        var e = t(36);
        o.exports = e("document", "documentElement");
      },
      function(o, n, t) {
        var e = t(8);
        o.exports = e.Promise;
      },
      function(o, n, t) {
        var e = t(53);
        o.exports = function(i, r, a) {
          for (var u in r)
            a && a.unsafe && i[u] ? i[u] = r[u] : e(i, u, r[u], a);
          return i;
        };
      },
      function(o, n, t) {
        var e = t(36), i = t(18), r = t(10), a = t(14), u = r("species");
        o.exports = function(g) {
          var d = e(g), h = i.f;
          a && d && !d[u] && h(d, u, {
            configurable: !0,
            get: function() {
              return this;
            }
          });
        };
      },
      function(o, n, t) {
        var e = t(10), i = t(44), r = e("iterator"), a = Array.prototype;
        o.exports = function(u) {
          return u !== void 0 && (i.Array === u || a[r] === u);
        };
      },
      function(o, n, t) {
        var e = t(65), i = t(44), r = t(10), a = r("iterator");
        o.exports = function(u) {
          if (u != null)
            return u[a] || u["@@iterator"] || i[e(u)];
        };
      },
      function(o, n, t) {
        var e = t(25);
        o.exports = function(i, r, a, u) {
          try {
            return u ? r(e(a)[0], a[1]) : r(a);
          } catch (d) {
            var g = i.return;
            throw g !== void 0 && e(g.call(i)), d;
          }
        };
      },
      function(o, n, t) {
        var e = t(10), i = e("iterator"), r = !1;
        try {
          var a = 0, u = {
            next: function() {
              return { done: !!a++ };
            },
            return: function() {
              r = !0;
            }
          };
          u[i] = function() {
            return this;
          }, Array.from(u, function() {
            throw 2;
          });
        } catch {
        }
        o.exports = function(g, d) {
          if (!d && !r)
            return !1;
          var h = !1;
          try {
            var c = {};
            c[i] = function() {
              return {
                next: function() {
                  return { done: h = !0 };
                }
              };
            }, g(c);
          } catch {
          }
          return h;
        };
      },
      function(o, n, t) {
        var e = t(25), i = t(41), r = t(10), a = r("species");
        o.exports = function(u, g) {
          var d = e(u).constructor, h;
          return d === void 0 || (h = e(d)[a]) == null ? g : i(h);
        };
      },
      function(o, n, t) {
        var e = t(8), i = t(11), r = t(34), a = t(40), u = t(108), g = t(73), d = t(118), h = e.location, c = e.setImmediate, l = e.clearImmediate, f = e.process, s = e.MessageChannel, m = e.Dispatch, v = 0, p = {}, A = "onreadystatechange", y, x, S, D = function(T) {
          if (p.hasOwnProperty(T)) {
            var R = p[T];
            delete p[T], R();
          }
        }, I = function(T) {
          return function() {
            D(T);
          };
        }, C = function(T) {
          D(T.data);
        }, E = function(T) {
          e.postMessage(T + "", h.protocol + "//" + h.host);
        };
        (!c || !l) && (c = function(R) {
          for (var N = [], M = 1; arguments.length > M; )
            N.push(arguments[M++]);
          return p[++v] = function() {
            (typeof R == "function" ? R : Function(R)).apply(void 0, N);
          }, y(v), v;
        }, l = function(R) {
          delete p[R];
        }, r(f) == "process" ? y = function(T) {
          f.nextTick(I(T));
        } : m && m.now ? y = function(T) {
          m.now(I(T));
        } : s && !d ? (x = new s(), S = x.port2, x.port1.onmessage = C, y = a(S.postMessage, S, 1)) : e.addEventListener && typeof postMessage == "function" && !e.importScripts && !i(E) && h.protocol !== "file:" ? (y = E, e.addEventListener("message", C, !1)) : A in g("script") ? y = function(T) {
          u.appendChild(g("script"))[A] = function() {
            u.removeChild(this), D(T);
          };
        } : y = function(T) {
          setTimeout(I(T), 0);
        }), o.exports = {
          set: c,
          clear: l
        };
      },
      function(o, n, t) {
        var e = t(84);
        o.exports = /(iphone|ipod|ipad).*applewebkit/i.test(e);
      },
      function(o, n, t) {
        var e = t(25), i = t(13), r = t(85);
        o.exports = function(a, u) {
          if (e(a), i(u) && u.constructor === a)
            return u;
          var g = r.f(a), d = g.resolve;
          return d(u), g.promise;
        };
      },
      function(o, n) {
        o.exports = function(t) {
          try {
            return { error: !1, value: t() };
          } catch (e) {
            return { error: !0, value: e };
          }
        };
      },
      function(o, n, t) {
        o.exports = t(197);
      },
      function(o, n, t) {
        var e = t(5), i = t(8), r = t(123), a = t(11), u = t(19), g = t(66), d = t(83), h = t(13), c = t(37), l = t(18).f, f = t(32).forEach, s = t(14), m = t(42), v = m.set, p = m.getterFor;
        o.exports = function(A, y, x) {
          var S = A.indexOf("Map") !== -1, D = A.indexOf("Weak") !== -1, I = S ? "set" : "add", C = i[A], E = C && C.prototype, T = {}, R;
          if (!s || typeof C != "function" || !(D || E.forEach && !a(function() {
            new C().entries().next();
          })))
            R = x.getConstructor(y, A, S, I), r.REQUIRED = !0;
          else {
            R = y(function(M, B) {
              v(d(M, R, A), {
                type: A,
                collection: new C()
              }), B != null && g(B, M[I], M, S);
            });
            var N = p(A);
            f(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(M) {
              var B = M == "add" || M == "set";
              M in E && !(D && M == "clear") && u(R.prototype, M, function(F, L) {
                var b = N(this).collection;
                if (!B && D && !h(F))
                  return M == "get" ? void 0 : !1;
                var $ = b[M](F === 0 ? 0 : F, L);
                return B ? this : $;
              });
            }), D || l(R.prototype, "size", {
              configurable: !0,
              get: function() {
                return N(this).collection.size;
              }
            });
          }
          return c(R, A, !1, !0), T[A] = R, e({ global: !0, forced: !0 }, T), D || x.setStrong(R, A, S), R;
        };
      },
      function(o, n, t) {
        var e = t(51), i = t(13), r = t(16), a = t(18).f, u = t(64), g = t(200), d = u("meta"), h = 0, c = Object.isExtensible || function() {
          return !0;
        }, l = function(p) {
          a(p, d, { value: {
            objectID: "O" + ++h,
            weakData: {}
          } });
        }, f = function(p, A) {
          if (!i(p))
            return typeof p == "symbol" ? p : (typeof p == "string" ? "S" : "P") + p;
          if (!r(p, d)) {
            if (!c(p))
              return "F";
            if (!A)
              return "E";
            l(p);
          }
          return p[d].objectID;
        }, s = function(p, A) {
          if (!r(p, d)) {
            if (!c(p))
              return !0;
            if (!A)
              return !1;
            l(p);
          }
          return p[d].weakData;
        }, m = function(p) {
          return g && v.REQUIRED && c(p) && !r(p, d) && l(p), p;
        }, v = o.exports = {
          REQUIRED: !1,
          fastKey: f,
          getWeakData: s,
          onFreeze: m
        };
        e[d] = !0;
      },
      function(o, n, t) {
        var e = t(18).f, i = t(77), r = t(110), a = t(40), u = t(83), g = t(66), d = t(75), h = t(111), c = t(14), l = t(123).fastKey, f = t(42), s = f.set, m = f.getterFor;
        o.exports = {
          getConstructor: function(v, p, A, y) {
            var x = v(function(C, E) {
              u(C, x, p), s(C, {
                type: p,
                index: i(null),
                first: void 0,
                last: void 0,
                size: 0
              }), c || (C.size = 0), E != null && g(E, C[y], C, A);
            }), S = m(p), D = function(C, E, T) {
              var R = S(C), N = I(C, E), M, B;
              return N ? N.value = T : (R.last = N = {
                index: B = l(E, !0),
                key: E,
                value: T,
                previous: M = R.last,
                next: void 0,
                removed: !1
              }, R.first || (R.first = N), M && (M.next = N), c ? R.size++ : C.size++, B !== "F" && (R.index[B] = N)), C;
            }, I = function(C, E) {
              var T = S(C), R = l(E), N;
              if (R !== "F")
                return T.index[R];
              for (N = T.first; N; N = N.next)
                if (N.key == E)
                  return N;
            };
            return r(x.prototype, {
              clear: function() {
                for (var E = this, T = S(E), R = T.index, N = T.first; N; )
                  N.removed = !0, N.previous && (N.previous = N.previous.next = void 0), delete R[N.index], N = N.next;
                T.first = T.last = void 0, c ? T.size = 0 : E.size = 0;
              },
              delete: function(C) {
                var E = this, T = S(E), R = I(E, C);
                if (R) {
                  var N = R.next, M = R.previous;
                  delete T.index[R.index], R.removed = !0, M && (M.next = N), N && (N.previous = M), T.first == R && (T.first = N), T.last == R && (T.last = M), c ? T.size-- : E.size--;
                }
                return !!R;
              },
              forEach: function(E) {
                for (var T = S(this), R = a(E, arguments.length > 1 ? arguments[1] : void 0, 3), N; N = N ? N.next : T.first; )
                  for (R(N.value, N.key, this); N && N.removed; )
                    N = N.previous;
              },
              has: function(E) {
                return !!I(this, E);
              }
            }), r(x.prototype, A ? {
              get: function(E) {
                var T = I(this, E);
                return T && T.value;
              },
              set: function(E, T) {
                return D(this, E === 0 ? 0 : E, T);
              }
            } : {
              add: function(E) {
                return D(this, E = E === 0 ? 0 : E, E);
              }
            }), c && e(x.prototype, "size", {
              get: function() {
                return S(this).size;
              }
            }), x;
          },
          setStrong: function(v, p, A) {
            var y = p + " Iterator", x = m(p), S = m(y);
            d(v, p, function(D, I) {
              s(this, {
                type: y,
                target: D,
                state: x(D),
                kind: I,
                last: void 0
              });
            }, function() {
              for (var D = S(this), I = D.kind, C = D.last; C && C.removed; )
                C = C.previous;
              return !D.target || !(D.last = C = C ? C.next : D.state.first) ? (D.target = void 0, { value: void 0, done: !0 }) : I == "keys" ? { value: C.key, done: !1 } : I == "values" ? { value: C.value, done: !1 } : { value: [C.key, C.value], done: !1 };
            }, A ? "entries" : "values", !A, !0), h(p);
          }
        };
      },
      function(o, n, t) {
        var e = t(12);
        e("iterator");
      },
      function(o, n, t) {
        var e = t(107), i = t(80), r = i.concat("length", "prototype");
        n.f = Object.getOwnPropertyNames || function(u) {
          return e(u, r);
        };
      },
      function(o, n) {
        n.f = Object.getOwnPropertySymbols;
      },
      function(o, n, t) {
        o.exports = t(268);
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.default = {
          zIndex: 1e4
        };
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.default = {
          focus: !0,
          height: 300,
          placeholder: "\u8BF7\u8F93\u5165\u6B63\u6587",
          zIndexFullScreen: 10002,
          showFullScreen: !0
        };
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.getPasteImgs = n.getPasteHtml = n.getPasteText = void 0;
        var a = t(2), u = t(6), g = a.__importDefault(t(292));
        function d(l) {
          var f = l.clipboardData, s = "";
          return f == null ? s = window.clipboardData && window.clipboardData.getData("text") : s = f.getData("text/plain"), u.replaceHtmlSymbol(s);
        }
        n.getPasteText = d;
        function h(l, f, s) {
          f === void 0 && (f = !0), s === void 0 && (s = !1);
          var m = l.clipboardData, v = "";
          if (m && (v = m.getData("text/html")), !v) {
            var p = d(l);
            if (!p)
              return "";
            v = "<p>" + p + "</p>";
          }
          return v = v.replace(/<(\d)/gm, function(A, y) {
            return "&lt;" + y;
          }), v = v.replace(/<(\/?meta.*?)>/gim, ""), v = g.default(v, f, s), v;
        }
        n.getPasteHtml = h;
        function c(l) {
          var f, s = [], m = d(l);
          if (m)
            return s;
          var v = (f = l.clipboardData) === null || f === void 0 ? void 0 : f.items;
          return v && (0, r.default)(u).call(u, v, function(p, A) {
            var y = A.type;
            /image/i.test(y) && s.push(A.getAsFile());
          }), s;
        }
        n.getPasteImgs = c;
      },
      function(o, n, t) {
        o.exports = t(294);
      },
      function(o, n, t) {
        o.exports = t(310);
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4)), a = e(t(46));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var u = t(2), g = u.__importDefault(t(3)), d = t(7), h = function() {
          function c(l, f) {
            var s = this;
            this.hideTimeoutId = 0, this.menu = l, this.conf = f;
            var m = g.default('<div class="w-e-droplist"></div>'), v = g.default("<p>" + f.title + "</p>");
            v.addClass("w-e-dp-title"), m.append(v);
            var p = f.list || [], A = f.type || "list", y = f.clickHandler || d.EMPTY_FN, x = g.default('<ul class="' + (A === "list" ? "w-e-list" : "w-e-block") + '"></ul>');
            (0, r.default)(p).call(p, function(S) {
              var D = S.$elem, I = S.value, C = g.default('<li class="w-e-item"></li>');
              D && (C.append(D), x.append(C), C.on("click", function(E) {
                y(I), E.stopPropagation(), s.hideTimeoutId = (0, a.default)(function() {
                  s.hide();
                });
              }));
            }), m.append(x), m.on("mouseleave", function() {
              s.hideTimeoutId = (0, a.default)(function() {
                s.hide();
              });
            }), this.$container = m, this.rendered = !1, this._show = !1;
          }
          return c.prototype.show = function() {
            this.hideTimeoutId && clearTimeout(this.hideTimeoutId);
            var l = this.menu, f = l.$elem, s = this.$container;
            if (!this._show) {
              if (this.rendered)
                s.show();
              else {
                var m = f.getBoundingClientRect().height || 0, v = this.conf.width || 100;
                s.css("margin-top", m + "px").css("width", v + "px"), f.append(s), this.rendered = !0;
              }
              this._show = !0;
            }
          }, c.prototype.hide = function() {
            var l = this.$container;
            !this._show || (l.hide(), this._show = !1);
          }, (0, i.default)(c.prototype, "isShow", {
            get: function() {
              return this._show;
            },
            enumerable: !1,
            configurable: !0
          }), c;
        }();
        n.default = h;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(92)), r = e(t(1)), a = e(t(4));
        (0, r.default)(n, "__esModule", {
          value: !0
        });
        var u = t(6);
        function g(d, h) {
          var c = new XMLHttpRequest();
          if (c.open("POST", d), c.timeout = h.timeout || 10 * 1e3, c.ontimeout = function() {
            console.error("wangEditor - \u8BF7\u6C42\u8D85\u65F6"), h.onTimeout && h.onTimeout(c);
          }, c.upload && (c.upload.onprogress = function(f) {
            var s = f.loaded / f.total;
            h.onProgress && h.onProgress(s, f);
          }), h.headers && (0, a.default)(u).call(u, h.headers, function(f, s) {
            c.setRequestHeader(f, s);
          }), c.withCredentials = !!h.withCredentials, h.beforeSend) {
            var l = h.beforeSend(c);
            if (l && (0, i.default)(l) === "object" && l.prevent)
              return l.msg;
          }
          return c.onreadystatechange = function() {
            if (c.readyState === 4) {
              var f = c.status;
              if (!(f < 200) && !(f >= 300 && f < 400)) {
                if (f >= 400) {
                  console.error("wangEditor - XHR \u62A5\u9519\uFF0C\u72B6\u6001\u7801 " + f), h.onError && h.onError(c);
                  return;
                }
                var s = c.responseText, m;
                if ((0, i.default)(s) !== "object")
                  try {
                    m = JSON.parse(s);
                  } catch {
                    console.error("wangEditor - \u8FD4\u56DE\u7ED3\u679C\u4E0D\u662F JSON \u683C\u5F0F", s), h.onFail && h.onFail(c, s);
                    return;
                  }
                else
                  m = s;
                h.onSuccess(c, m);
              }
            }
          }, c.send(h.formData || null), c;
        }
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(342)), a = e(t(46));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var u = t(2), g = u.__importDefault(t(3)), d = function() {
          function h(c) {
            this.editor = c, this.$textContainer = c.$textContainerElem, this.$bar = g.default('<div class="w-e-progress"></div>'), this.isShow = !1, this.time = 0, this.timeoutId = 0;
          }
          return h.prototype.show = function(c) {
            var l = this;
            if (!this.isShow) {
              this.isShow = !0;
              var f = this.$bar, s = this.$textContainer;
              s.append(f), (0, r.default)() - this.time > 100 && c <= 1 && (f.css("width", c * 100 + "%"), this.time = (0, r.default)());
              var m = this.timeoutId;
              m && clearTimeout(m), this.timeoutId = (0, a.default)(function() {
                l.hide();
              }, 500);
            }
          }, h.prototype.hide = function() {
            var c = this.$bar;
            c.remove(), this.isShow = !1, this.time = 0, this.timeoutId = 0;
          }, h;
        }();
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.ListType = void 0;
        var r = t(2), a = r.__importDefault(t(3)), u = r.__importDefault(t(24)), g = t(47), d = r.__importStar(t(371)), h;
        (function(l) {
          l.OrderedList = "OL", l.UnorderedList = "UL";
        })(h = n.ListType || (n.ListType = {}));
        var c = function(l) {
          r.__extends(f, l);
          function f(s) {
            var m = this, v = a.default(`<div class="w-e-menu" data-title="\u5E8F\u5217">
                <i class="w-e-icon-list2"></i>
            </div>`), p = {
              width: 130,
              title: "\u5E8F\u5217",
              type: "list",
              list: [{
                $elem: a.default(`
                        <p>
                            <i class="w-e-icon-list2 w-e-drop-list-item"></i>
                            ` + s.i18next.t("menus.dropListMenu.list.\u65E0\u5E8F\u5217\u8868") + `
                        <p>`),
                value: h.UnorderedList
              }, {
                $elem: a.default(`<p>
                            <i class="w-e-icon-list-numbered w-e-drop-list-item"></i>
                            ` + s.i18next.t("menus.dropListMenu.list.\u6709\u5E8F\u5217\u8868") + `
                        <p>`),
                value: h.OrderedList
              }],
              clickHandler: function(y) {
                m.command(y);
              }
            };
            return m = l.call(this, v, s, p) || this, m;
          }
          return f.prototype.command = function(s) {
            var m = this.editor, v = m.selection.getSelectionContainerElem();
            v !== void 0 && (this.handleSelectionRangeNodes(s), this.tryChangeActive());
          }, f.prototype.validator = function(s, m, v) {
            return !(!s.length || !m.length || v.equal(s) || v.equal(m));
          }, f.prototype.handleSelectionRangeNodes = function(s) {
            var m = this.editor, v = m.selection, p = s.toLowerCase(), A = v.getSelectionContainerElem(), y = v.getSelectionStartElem().getNodeTop(m), x = v.getSelectionEndElem().getNodeTop(m);
            if (!!this.validator(y, x, m.$textElem)) {
              var S = v.getRange(), D = S == null ? void 0 : S.collapsed;
              m.$textElem.equal(A) || (A = A.getNodeTop(m));
              var I = {
                editor: m,
                listType: s,
                listTarget: p,
                $selectionElem: A,
                $startElem: y,
                $endElem: x
              }, C;
              this.isOrderElem(A) ? C = d.ClassType.Wrap : this.isOrderElem(y) && this.isOrderElem(x) ? C = d.ClassType.Join : this.isOrderElem(y) ? C = d.ClassType.StartJoin : this.isOrderElem(x) ? C = d.ClassType.EndJoin : C = d.ClassType.Other;
              var E = new d.default(d.createListHandle(C, I, S));
              g.updateRange(m, E.getSelectionRangeElem(), !!D);
            }
          }, f.prototype.isOrderElem = function(s) {
            var m = s.getNodeName();
            return m === h.OrderedList || m === h.UnorderedList;
          }, f.prototype.tryChangeActive = function() {
          }, f;
        }(u.default);
        n.default = c;
      },
      function(o, n, t) {
        o.exports = t(395);
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        function r(a) {
          var u = a.selection.getSelectionContainerElem();
          return u != null && u.length ? !!(u.getNodeName() == "CODE" || u.getNodeName() == "PRE" || u.parent().getNodeName() == "CODE" || u.parent().getNodeName() == "PRE" || /hljs/.test(u.parent().attr("class"))) : !1;
        }
        n.default = r;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(29));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.todo = void 0;
        var a = t(2), u = a.__importDefault(t(3)), g = function() {
          function h(c) {
            var l;
            this.template = '<ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span></li></ul>', this.checked = !1, this.$todo = u.default(this.template), this.$child = (l = c == null ? void 0 : c.childNodes()) === null || l === void 0 ? void 0 : l.clone(!0);
          }
          return h.prototype.init = function() {
            var c = this.$child, l = this.getInputContainer();
            c && c.insertAfter(l);
          }, h.prototype.getInput = function() {
            var c = this.$todo, l = (0, r.default)(c).call(c, "input");
            return l;
          }, h.prototype.getInputContainer = function() {
            var c = this.getInput().parent();
            return c;
          }, h.prototype.getTodo = function() {
            return this.$todo;
          }, h;
        }();
        n.todo = g;
        function d(h) {
          var c = new g(h);
          return c.init(), c;
        }
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2);
        t(146), t(148), t(152), t(154), t(156), t(158), t(160);
        var a = r.__importDefault(t(87));
        r.__exportStar(t(442), n);
        try {
        } catch {
          throw new Error("\u8BF7\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u8FD0\u884C");
        }
        n.default = a.default;
      },
      function(o, n, t) {
        var e = t(143);
        o.exports = e;
      },
      function(o, n, t) {
        t(144);
        var e = t(9), i = e.Object, r = o.exports = function(u, g, d) {
          return i.defineProperty(u, g, d);
        };
        i.defineProperty.sham && (r.sham = !0);
      },
      function(o, n, t) {
        var e = t(5), i = t(14), r = t(18);
        e({ target: "Object", stat: !0, forced: !i, sham: !i }, {
          defineProperty: r.f
        });
      },
      function(o, n) {
        var t;
        t = function() {
          return this;
        }();
        try {
          t = t || new Function("return this")();
        } catch {
          typeof window == "object" && (t = window);
        }
        o.exports = t;
      },
      function(o, n, t) {
        var e = t(20), i = t(147);
        i = i.__esModule ? i.default : i, typeof i == "string" && (i = [[o.i, i, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(i, r), o.exports = i.locals || {};
      },
      function(o, n, t) {
        var e = t(21);
        n = e(!1), n.push([o.i, `.w-e-toolbar,
.w-e-text-container,
.w-e-menu-panel {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #fff;
  /*\u8868\u60C5\u83DC\u5355\u6837\u5F0F*/
  /*\u5206\u5272\u7EBF\u6837\u5F0F*/
}
.w-e-toolbar h1,
.w-e-text-container h1,
.w-e-menu-panel h1 {
  font-size: 32px !important;
}
.w-e-toolbar h2,
.w-e-text-container h2,
.w-e-menu-panel h2 {
  font-size: 24px !important;
}
.w-e-toolbar h3,
.w-e-text-container h3,
.w-e-menu-panel h3 {
  font-size: 18.72px !important;
}
.w-e-toolbar h4,
.w-e-text-container h4,
.w-e-menu-panel h4 {
  font-size: 16px !important;
}
.w-e-toolbar h5,
.w-e-text-container h5,
.w-e-menu-panel h5 {
  font-size: 13.28px !important;
}
.w-e-toolbar p,
.w-e-text-container p,
.w-e-menu-panel p {
  font-size: 16px !important;
}
.w-e-toolbar .eleImg,
.w-e-text-container .eleImg,
.w-e-menu-panel .eleImg {
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  padding: 0 3px;
}
.w-e-toolbar *,
.w-e-text-container *,
.w-e-menu-panel * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.w-e-toolbar hr,
.w-e-text-container hr,
.w-e-menu-panel hr {
  cursor: pointer;
  display: block;
  height: 0px;
  border: 0;
  border-top: 3px solid #ccc;
  margin: 20px 0;
}
.w-e-clear-fix:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-drop-list-item {
  position: relative;
  top: 1px;
  padding-right: 7px;
  color: #333 !important;
}
.w-e-drop-list-tl {
  padding-left: 10px;
  text-align: left;
}
`, ""]), o.exports = n;
      },
      function(o, n, t) {
        var e = t(20), i = t(149);
        i = i.__esModule ? i.default : i, typeof i == "string" && (i = [[o.i, i, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(i, r), o.exports = i.locals || {};
      },
      function(o, n, t) {
        var e = t(21), i = t(150), r = t(151);
        n = e(!1);
        var a = i(r);
        n.push([o.i, `@font-face {
  font-family: 'w-e-icon';
  src: url(` + a + `) format('truetype');
  font-weight: normal;
  font-style: normal;
}
[class^="w-e-icon-"],
[class*=" w-e-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'w-e-icon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.w-e-icon-close:before {
  content: "\\f00d";
}
.w-e-icon-upload2:before {
  content: "\\e9c6";
}
.w-e-icon-trash-o:before {
  content: "\\f014";
}
.w-e-icon-header:before {
  content: "\\f1dc";
}
.w-e-icon-pencil2:before {
  content: "\\e906";
}
.w-e-icon-paint-brush:before {
  content: "\\f1fc";
}
.w-e-icon-image:before {
  content: "\\e90d";
}
.w-e-icon-play:before {
  content: "\\e912";
}
.w-e-icon-location:before {
  content: "\\e947";
}
.w-e-icon-undo:before {
  content: "\\e965";
}
.w-e-icon-redo:before {
  content: "\\e966";
}
.w-e-icon-quotes-left:before {
  content: "\\e977";
}
.w-e-icon-list-numbered:before {
  content: "\\e9b9";
}
.w-e-icon-list2:before {
  content: "\\e9bb";
}
.w-e-icon-link:before {
  content: "\\e9cb";
}
.w-e-icon-happy:before {
  content: "\\e9df";
}
.w-e-icon-bold:before {
  content: "\\ea62";
}
.w-e-icon-underline:before {
  content: "\\ea63";
}
.w-e-icon-italic:before {
  content: "\\ea64";
}
.w-e-icon-strikethrough:before {
  content: "\\ea65";
}
.w-e-icon-table2:before {
  content: "\\ea71";
}
.w-e-icon-paragraph-left:before {
  content: "\\ea77";
}
.w-e-icon-paragraph-center:before {
  content: "\\ea78";
}
.w-e-icon-paragraph-right:before {
  content: "\\ea79";
}
.w-e-icon-paragraph-justify:before {
  content: "\\ea7a";
}
.w-e-icon-terminal:before {
  content: "\\f120";
}
.w-e-icon-page-break:before {
  content: "\\ea68";
}
.w-e-icon-cancel-circle:before {
  content: "\\ea0d";
}
.w-e-icon-font:before {
  content: "\\ea5c";
}
.w-e-icon-text-heigh:before {
  content: "\\ea5f";
}
.w-e-icon-paint-format:before {
  content: "\\e90c";
}
.w-e-icon-indent-increase:before {
  content: "\\ea7b";
}
.w-e-icon-indent-decrease:before {
  content: "\\ea7c";
}
.w-e-icon-row-height:before {
  content: "\\e9be";
}
.w-e-icon-fullscreen_exit:before {
  content: "\\e900";
}
.w-e-icon-fullscreen:before {
  content: "\\e901";
}
.w-e-icon-split-line:before {
  content: "\\ea0b";
}
.w-e-icon-checkbox-checked:before {
  content: "\\ea52";
}
`, ""]), o.exports = n;
      },
      function(o, n, t) {
        o.exports = function(e, i) {
          return i || (i = {}), e = e && e.__esModule ? e.default : e, typeof e != "string" ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), i.hash && (e += i.hash), /["'() \t\n]/.test(e) || i.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e);
        };
      },
      function(o, n, t) {
        t.r(n), n.default = "data:font/woff;base64,d09GRgABAAAAABskAAsAAAAAGtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIPFWNtYXAAAAFoAAABHAAAARz2mfAgZ2FzcAAAAoQAAAAIAAAACAAAABBnbHlmAAACjAAAFXwAABV8IH7+mGhlYWQAABgIAAAANgAAADYb6gumaGhlYQAAGEAAAAAkAAAAJAkjBWlobXR4AAAYZAAAAKQAAACkmYcEbmxvY2EAABkIAAAAVAAAAFReAmKYbWF4cAAAGVwAAAAgAAAAIAA0ALZuYW1lAAAZfAAAAYYAAAGGmUoJ+3Bvc3QAABsEAAAAIAAAACAAAwAAAAMD7wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8fwDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAQAAAAA8ACAABAAcAAEAIOkB6QbpDekS6UfpZul36bnpu+m+6cbpy+nf6gvqDepS6lzqX+pl6nHqfPAN8BTxIPHc8fz//f//AAAAAAAg6QDpBukM6RLpR+ll6Xfpuem76b7pxunL6d/qC+oN6lLqXOpf6mLqcep38A3wFPEg8dzx/P/9//8AAf/jFwQXABb7FvcWwxamFpYWVRZUFlIWSxZHFjQWCRYIFcQVuxW5FbcVrBWnEBcQEQ8GDksOLAADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAEEAAQO/A38ABQALABEAFwAAATMVIREzAxEhFSMVATUzESE1ETUhESM1Av/A/sJ+fgE+wP4Cfv7CAT5+Ar9+AT78ggE+fsACvsD+wn7+An7+wsAAAAAABABBAAEDvwN/AAUACwARABcAAAEhESM1IxM1MxEhNQERIRUjFREVMxUhEQKBAT5+wMB+/sL9wAE+wMD+wgN//sLA/X7A/sJ+AcIBPn7A/v7AfgE+AAAAAAIAAP/ABAADwAAEABMAAAE3AScBAy4BJxM3ASMBAyUBNQEHAYCAAcBA/kCfFzsyY4ABgMD+gMACgAGA/oBOAUBAAcBA/kD+nTI7FwERTgGA/oD9gMABgMD+gIAAAgAA/8AEAAOAACkALQAAAREjNTQmIyEiBh0BFBYzITI2PQEzESEVIyIGFREUFjsBMjY1ETQmKwE1ASE1IQQAwCYa/UAaJiYaAsAaJoD9wCANExMNgA0TEw0gAUD9QALAAYABgEAaJiYawBomJhpA/wCAEw3+wA0TEw0BQA0TQAGAQAAABAAAAAAEAAOAABAAIQAtADQAAAE4ATEROAExITgBMRE4ATEhNSEiBhURFBYzITI2NRE0JiMHFAYjIiY1NDYzMhYTITUTATM3A8D8gAOA/IAaJiYaA4AaJiYagDgoKDg4KCg4QP0A4AEAQOADQP0AAwBAJhr9ABomJhoDABom4Cg4OCgoODj9uIABgP7AwAAAAgAAAEAEAANAADgAPAAAASYnLgEnJiMiBw4BBwYHBgcOAQcGFRQXHgEXFhcWFx4BFxYzMjc+ATc2NzY3PgE3NjU0Jy4BJyYnARENAQPVNjg5djw9Pz89PHY5ODYLBwgLAwMDAwsIBws2ODl2PD0/Pz08djk4NgsHCAsDAwMDCwgHC/2rAUD+wAMgCAYGCAICAgIIBgYIKSoqWS0uLy8uLVkqKikIBgYIAgICAggGBggpKipZLS4vLy4tWSoqKf3gAYDAwAAAAAACAMD/wANAA8AAGwAnAAABIgcOAQcGFRQXHgEXFjEwNz4BNzY1NCcuAScmAyImNTQ2MzIWFRQGAgBCOzpXGRkyMngyMjIyeDIyGRlXOjtCUHBwUFBwcAPAGRlXOjtCeH19zEFBQUHMfX14Qjs6VxkZ/gBwUFBwcFBQcAAAAQAAAAAEAAOAACsAAAEiBw4BBwYHJxEhJz4BMzIXHgEXFhUUBw4BBwYHFzY3PgE3NjU0Jy4BJyYjAgA1MjJcKSkjlgGAkDWLUFBFRmkeHgkJIhgYHlUoICAtDAwoKIteXWoDgAoLJxscI5b+gJA0PB4eaUZFUCsoKUkgIRpgIysrYjY2OWpdXosoKAABAAAAAAQAA4AAKgAAExQXHgEXFhc3JicuAScmNTQ3PgE3NjMyFhcHIREHJicuAScmIyIHDgEHBgAMDC0gIChVHhgYIgkJHh5pRkVQUIs1kAGAliMpKVwyMjVqXV6LKCgBgDk2NmIrKyNgGiEgSSkoK1BFRmkeHjw0kAGAliMcGycLCigoi15dAAAAAAIAAABABAEDAAAmAE0AABMyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+ASEyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+AeEuKSk9ERISET0pKS4uKSk9ERIBIyN6UlFdQHUtCRAHCBICSS4pKT0REhIRPSkpLi4pKT0REgEjI3pSUV1AdS0JEAcIEgIAEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBAAAGAED/wAQAA8AAAwAHAAsAEQAdACkAACUhFSERIRUhESEVIScRIzUjNRMVMxUjNTc1IzUzFRURIzUzNSM1MzUjNQGAAoD9gAKA/YACgP2AwEBAQIDAgIDAwICAgICAgAIAgAIAgMD/AMBA/fIyQJI8MkCS7v7AQEBAQEAABgAA/8AEAAPAAAMABwALABcAIwAvAAABIRUhESEVIREhFSEBNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYBgAKA/YACgP2AAoD9gP6ASzU1S0s1NUtLNTVLSzU1S0s1NUtLNTVLA4CA/wCA/wCAA0A1S0s1NUtL/rU1S0s1NUtL/rU1S0s1NUtLAAUAAABABWADAAADAAcACwAOABEAABMhFSEVIRUhFSEVIQEXNzUnBwADgPyAA4D8gAOA/IAD4MDAwMADAMBAwEDAAUDAwEDAwAAAAAADAAAAAAQAA6AAAwANABQAADchFSElFSE1EyEVITUhJQkBIxEjEQAEAPwABAD8AIABAAEAAQD9YAEgASDggEBAwEBAAQCAgMABIP7g/wABAAAAAAACAB7/zAPiA7QAMwBkAAABIiYnJicmNDc2PwE+ATMyFhcWFxYUBwYPAQYiJyY0PwE2NCcuASMiBg8BBhQXFhQHDgEjAyImJyYnJjQ3Nj8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFxYUBwYPAQ4BIwG4ChMIIxISEhIjwCNZMTFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PCBMKuDFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PDysQIxISEhIjwCNZMQFECAckLS1eLS0kwCIlJSIkLS1eLS0kVxAQDysPWCl0KRQVFRTAKXQpDysQBwj+iCUiJC0tXi0tJFcQEA8rD1gpdCkUFRUUwCl0KQ8rEA8PJC0tXi0tJMAiJQAAAAAFAAD/wAQAA8AAGwA3AFMAXwBrAAAFMjc+ATc2NTQnLgEnJiMiBw4BBwYVFBceARcWEzIXHgEXFhUUBw4BBwYjIicuAScmNTQ3PgE3NhMyNz4BNzY3BgcOAQcGIyInLgEnJicWFx4BFxYnNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiYCAGpdXosoKCgoi15dampdXosoKCgoi15dalZMTHEgISEgcUxMVlZMTHEgISEgcUxMVisrKlEmJiMFHBtWODc/Pzc4VhscBSMmJlEqK9UlGxslJRsbJQGAJRsbJSUbGyVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoA6AhIHFMTFZWTExxICEhIHFMTFZWTExxICH+CQYGFRAQFEM6OlYYGRkYVjo6QxQQEBUGBvcoODgoKDg4KCg4OCgoODgAAAEAAAFABAACQAAPAAATFRQWMyEyNj0BNCYjISIGABMNA8ANExMN/EANEwIgwA0TEw3ADRMTAAAAAwAA/8AEAAPAABsANwBDAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmAyInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBhMHJwcXBxc3FzcnNwIAal1eiygoKCiLXl1qal1eiygoKCiLXl1qVkxMcSAhISBxTExWVkxMcSAhISBxTExKoKBgoKBgoKBgoKADwCgoi15dampdXosoKCgoi15dampdXosoKPxgISBxTExWVkxMcSAhISBxTExWVkxMcSAhAqCgoGCgoGCgoGCgoAACAAD/wAQAA8AADwAVAAABISIGFREUFjMhMjY1ETQmASc3FwEXA4D9ADVLSzUDADVLS/4L7VqTATNaA8BLNf0ANUtLNQMANUv85e5akgEyWgAAAAABAGX/wAObA8AAKQAAASImIyIHDgEHBhUUFjMuATU0NjcwBwYCBwYHFSETMzcjNx4BMzI2Nw4BAyBEaEZxU1RtGhtJSAYNZUoQEEs8PFkBPWzGLNc0LVUmLlAYHT0DsBAeHWE+P0FNOwsmN5lvA31+/sWPkCMZAgCA9gkPN2sJBwAAAAACAAAAAAQAA4AACQAXAAAlMwcnMxEjNxcjJREnIxEzFSE1MxEjBxEDgICgoICAoKCA/wBAwID+gIDAQMDAwAIAwMDA/wCA/UBAQALAgAEAAAMAwAAAA0ADgAAWAB8AKAAAAT4BNTQnLgEnJiMhESEyNz4BNzY1NCYBMzIWFRQGKwETIxEzMhYVFAYCxBwgFBRGLi81/sABgDUvLkYUFET+hGUqPDwpZp+fnyw+PgHbIlQvNS8uRhQU/IAUFEYuLzVGdAFGSzU1S/6AAQBLNTVLAAAAAAIAwAAAA0ADgAAfACMAAAEzERQHDgEHBiMiJy4BJyY1ETMRFBYXHgEzMjY3PgE1ASEVIQLAgBkZVzo7QkI7OlcZGYAbGBxJKChJHBgb/gACgP2AA4D+YDw0NU4WFxcWTjU0PAGg/mAeOBcYGxsYFzge/qCAAAAAAAEAgAAAA4ADgAALAAABFSMBMxUhNTMBIzUDgID+wID+QIABQIADgED9AEBAAwBAAAEAAAAABAADgAA9AAABFSMeARUUBgcOASMiJicuATUzFBYzMjY1NCYjITUhLgEnLgE1NDY3PgEzMhYXHgEVIzQmIyIGFRQWMzIWFwQA6xUWNTAscT4+cSwwNYByTk5yck7+AAEsAgQBMDU1MCxxPj5xLDA1gHJOTnJyTjtuKwHAQB1BIjViJCEkJCEkYjU0TEw0NExAAQMBJGI1NWIkISQkISRiNTRMTDQ0TCEfAAAACgAAAAAEAAOAAAMABwALAA8AEwAXABsAHwAjACcAABMRIREBNSEVHQEhNQEVITUjFSE1ESEVISUhFSERNSEVASEVISE1IRUABAD9gAEA/wABAP8AQP8AAQD/AAKAAQD/AAEA/IABAP8AAoABAAOA/IADgP3AwMBAwMACAMDAwMD/AMDAwAEAwMD+wMDAwAAABQAAAAAEAAOAAAMABwALAA8AEwAAEyEVIRUhFSERIRUhESEVIREhFSEABAD8AAKA/YACgP2ABAD8AAQA/AADgIBAgP8AgAFAgP8AgAAAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhFyEVIREhFSEDIRUhESEVIQAEAPwAwAKA/YACgP2AwAQA/AAEAPwAA4CAQID/AIABQID/AIAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEFIRUhESEVIQEhFSERIRUhAAQA/AABgAKA/YACgP2A/oAEAPwABAD8AAOAgECA/wCAAUCA/wCAAAAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEVIRUhFSEVIRUhFSEVIRUhAAQA/AAEAPwABAD8AAQA/AAEAPwAA4CAQIBAgECAQIAAAAAGAAAAAAQAA4AAAwAHAAsADwATABYAABMhFSEFIRUhFSEVIRUhFSEFIRUhGQEFAAQA/AABgAKA/YACgP2AAoD9gP6ABAD8AAEAA4CAQIBAgECAQIABAAGAwAAAAAYAAAAABAADgAADAAcACwAPABMAFgAAEyEVIQUhFSEVIRUhFSEVIQUhFSEBESUABAD8AAGAAoD9gAKA/YACgP2A/oAEAPwAAQD/AAOAgECAQIBAgECAAoD+gMAAAQA/AD8C5gLmACwAACUUDwEGIyIvAQcGIyIvASY1ND8BJyY1ND8BNjMyHwE3NjMyHwEWFRQPARcWFQLmEE4QFxcQqKgQFxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQwxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQEE4QFxcQqKgQFwAAAAYAAAAAAyUDbgAUACgAPABNAFUAggAAAREUBwYrASInJjURNDc2OwEyFxYVMxEUBwYrASInJjURNDc2OwEyFxYXERQHBisBIicmNRE0NzY7ATIXFhMRIREUFxYXFjMhMjc2NzY1ASEnJicjBgcFFRQHBisBERQHBiMhIicmNREjIicmPQE0NzY7ATc2NzY7ATIXFh8BMzIXFhUBJQYFCCQIBQYGBQgkCAUGkgUFCCUIBQUFBQglCAUFkgUFCCUIBQUFBQglCAUFSf4ABAQFBAIB2wIEBAQE/oABABsEBrUGBAH3BgUINxobJv4lJhsbNwgFBQUFCLEoCBcWF7cXFhYJKLAIBQYCEv63CAUFBQUIAUkIBQYGBQj+twgFBQUFCAFJCAUGBgUI/rcIBQUFBQgBSQgFBgYF/lsCHf3jDQsKBQUFBQoLDQJmQwUCAgVVJAgGBf3jMCIjISIvAiAFBggkCAUFYBUPDw8PFWAFBQgAAgAHAEkDtwKvABoALgAACQEGIyIvASY1ND8BJyY1ND8BNjMyFwEWFRQHARUUBwYjISInJj0BNDc2MyEyFxYBTv72BgcIBR0GBuHhBgYdBQgHBgEKBgYCaQUFCP3bCAUFBQUIAiUIBQUBhf72BgYcBggHBuDhBgcHBh0FBf71BQgHBv77JQgFBQUFCCUIBQUFBQAAAAEAIwAAA90DbgCzAAAlIicmIyIHBiMiJyY1NDc2NzY3Njc2PQE0JyYjISIHBh0BFBcWFxYzFhcWFRQHBiMiJyYjIgcGIyInJjU0NzY3Njc2NzY9ARE0NTQ1NCc0JyYnJicmJyYnJiMiJyY1NDc2MzIXFjMyNzYzMhcWFRQHBiMGBwYHBh0BFBcWMyEyNzY9ATQnJicmJyY1NDc2MzIXFjMyNzYzMhcWFRQHBgciBwYHBhURFBcWFxYXMhcWFRQHBiMDwRkzMhoZMjMZDQgHCQoNDBEQChIBBxX+fhYHARUJEhMODgwLBwcOGzU1GhgxMRgNBwcJCQsMEA8JEgECAQIDBAQFCBIRDQ0KCwcHDho1NRoYMDEYDgcHCQoMDRAQCBQBBw8BkA4HARQKFxcPDgcHDhkzMhkZMTEZDgcHCgoNDRARCBQUCRERDg0KCwcHDgACAgICDAsPEQkJAQEDAwUMROAMBQMDBQzUUQ0GAQIBCAgSDwwNAgICAgwMDhEICQECAwMFDUUhAdACDQ0ICA4OCgoLCwcHAwYBAQgIEg8MDQICAgINDA8RCAgBAgEGDFC2DAcBAQcMtlAMBgEBBgcWDwwNAgICAg0MDxEICAEBAgYNT/3mRAwGAgIBCQgRDwwNAAACAAD/twP/A7cAEwA5AAABMhcWFRQHAgcGIyInJjU0NwE2MwEWFxYfARYHBiMiJyYnJicmNRYXFhcWFxYzMjc2NzY3Njc2NzY3A5soHh4avkw3RUg0NDUBbSEp/fgXJicvAQJMTHtHNjYhIRARBBMUEBASEQkXCA8SExUVHR0eHikDtxsaKCQz/plGNDU0SUkwAUsf/bErHx8NKHpNTBobLi86OkQDDw4LCwoKFiUbGhERCgsEBAIAAQAAAAAAAIWwaoFfDzz1AAsEAAAAAADbteOZAAAAANu145kAAP+3BWADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAFgAAA//8FYAABAAAAAAAAAAAAAAAAAAAAKQQAAAAAAAAAAAAAAAIAAAAEAABBBAAAQQQAAAAEAAAABAAAAAQAAAAEAADABAAAAAQAAAAEAAAABAAAQAQAAAAFgAAABAAAAAQAAB4EAAAABAAAAAQAAAAEAAAABAAAZQQAAAAEAADABAAAwAQAAIAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAMlAD8DJQAAA74ABwQAACMD/wAAAAAAAAAKABQAHgBKAHYApADmAS4BkgHQAhYCXALQAw4DWAN+A6gEPgTeBPoFZAWOBdAF+AY6BnYGjgbmBy4HVgd+B6gHzgf8CCoIbgkmCXAKYgq+AAEAAAApALQACgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
      },
      function(o, n, t) {
        var e = t(20), i = t(153);
        i = i.__esModule ? i.default : i, typeof i == "string" && (i = [[o.i, i, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(i, r), o.exports = i.locals || {};
      },
      function(o, n, t) {
        var e = t(21);
        n = e(!1), n.push([o.i, `.w-e-toolbar {
  display: flex;
  padding: 0 6px;
  flex-wrap: wrap;
  position: relative;
  /* \u5355\u4E2A\u83DC\u5355 */
}
.w-e-toolbar .w-e-menu {
  position: relative;
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
}
.w-e-toolbar .w-e-menu i {
  color: #999;
}
.w-e-toolbar .w-e-menu:hover {
  background-color: #F6F6F6;
}
.w-e-toolbar .w-e-menu:hover i {
  color: #333;
}
.w-e-toolbar .w-e-active i {
  color: #1e88e5;
}
.w-e-toolbar .w-e-active:hover i {
  color: #1e88e5;
}
.w-e-menu-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-menu-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-item-wrapper {
  font-size: 14px;
  margin: 0 5px;
}
`, ""]), o.exports = n;
      },
      function(o, n, t) {
        var e = t(20), i = t(155);
        i = i.__esModule ? i.default : i, typeof i == "string" && (i = [[o.i, i, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(i, r), o.exports = i.locals || {};
      },
      function(o, n, t) {
        var e = t(21);
        n = e(!1), n.push([o.i, `.w-e-text-container {
  position: relative;
  height: 100%;
}
.w-e-text-container .w-e-progress {
  position: absolute;
  background-color: #1e88e5;
  top: 0;
  left: 0;
  height: 1px;
}
.w-e-text-container .placeholder {
  color: #D4D4D4;
  position: absolute;
  font-size: 11pt;
  line-height: 22px;
  left: 10px;
  top: 10px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  z-index: -1;
}
.w-e-text {
  padding: 0 10px;
  overflow-y: auto;
}
.w-e-text p,
.w-e-text h1,
.w-e-text h2,
.w-e-text h3,
.w-e-text h4,
.w-e-text h5,
.w-e-text table,
.w-e-text pre {
  margin: 10px 0;
  line-height: 1.5;
}
.w-e-text ul,
.w-e-text ol {
  margin: 10px 0 10px 20px;
}
.w-e-text blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}
.w-e-text code {
  display: inline-block;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
.w-e-text pre code {
  display: block;
}
.w-e-text table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.w-e-text table td,
.w-e-text table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
  min-height: 30px;
  height: 30px;
}
.w-e-text table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
  background-color: #f1f1f1;
}
.w-e-text:focus {
  outline: none;
}
.w-e-text img {
  cursor: pointer;
}
.w-e-text img:hover {
  box-shadow: 0 0 5px #333;
}
.w-e-text .w-e-todo {
  margin: 0 0 0 20px;
}
.w-e-text .w-e-todo li {
  list-style: none;
  font-size: 1em;
}
.w-e-text .w-e-todo li span:nth-child(1) {
  position: relative;
  left: -18px;
}
.w-e-text .w-e-todo li span:nth-child(1) input {
  position: absolute;
  margin-right: 3px;
}
.w-e-text .w-e-todo li span:nth-child(1) input[type=checkbox] {
  top: 50%;
  margin-top: -6px;
}
.w-e-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-item-wrapper {
  cursor: pointer;
  font-size: 14px;
  margin: 0 5px;
}
.w-e-tooltip-item-wrapper:hover {
  color: #ccc;
  text-decoration: underline;
}
`, ""]), o.exports = n;
      },
      function(o, n, t) {
        var e = t(20), i = t(157);
        i = i.__esModule ? i.default : i, typeof i == "string" && (i = [[o.i, i, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(i, r), o.exports = i.locals || {};
      },
      function(o, n, t) {
        var e = t(21);
        n = e(!1), n.push([o.i, `.w-e-menu .w-e-panel-container {
  position: absolute;
  top: 0;
  left: 50%;
  border: 1px solid #ccc;
  border-top: 0;
  box-shadow: 1px 1px 2px #ccc;
  color: #333;
  background-color: #fff;
  text-align: left;
  /* \u4E3A emotion panel \u5B9A\u5236\u7684\u6837\u5F0F */
  /* \u4E0A\u4F20\u56FE\u7247\u3001\u4E0A\u4F20\u89C6\u9891\u7684 panel \u5B9A\u5236\u6837\u5F0F */
}
.w-e-menu .w-e-panel-container .w-e-panel-close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;
  margin: 2px 5px 0 0;
  cursor: pointer;
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-close:hover {
  color: #333;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title {
  list-style: none;
  display: flex;
  font-size: 14px;
  margin: 2px 10px 0 10px;
  border-bottom: 1px solid #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-item {
  padding: 3px 5px;
  color: #999;
  cursor: pointer;
  margin: 0 3px;
  position: relative;
  top: 1px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-active {
  color: #333;
  border-bottom: 1px solid #333;
  cursor: default;
  font-weight: 700;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content {
  padding: 10px 15px 10px 15px;
  font-size: 16px;
  /* \u8F93\u5165\u6846\u7684\u6837\u5F0F */
  /* \u6309\u94AE\u7684\u6837\u5F0F */
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content button:focus {
  outline: none;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea {
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px;
  margin-top: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus {
  border-color: #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text] {
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  height: 20px;
  color: #333;
  text-align: left;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].small {
  width: 30px;
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].block {
  display: block;
  width: 100%;
  margin: 10px 0;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {
  border-bottom: 2px solid #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {
  font-size: 14px;
  color: #1e88e5;
  border: none;
  padding: 5px 10px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 3px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {
  float: left;
  margin-right: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {
  float: right;
  margin-left: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {
  color: #c24f4a;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {
  background-color: #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-menu .w-e-panel-container .w-e-emoticon-container .w-e-item {
  cursor: pointer;
  font-size: 18px;
  padding: 0 3px;
  display: inline-block;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container,
.w-e-menu .w-e-panel-container .w-e-up-video-container {
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn {
  display: inline-block;
  color: #999;
  cursor: pointer;
  font-size: 60px;
  line-height: 1;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn:hover {
  color: #333;
}
`, ""]), o.exports = n;
      },
      function(o, n, t) {
        var e = t(20), i = t(159);
        i = i.__esModule ? i.default : i, typeof i == "string" && (i = [[o.i, i, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(i, r), o.exports = i.locals || {};
      },
      function(o, n, t) {
        var e = t(21);
        n = e(!1), n.push([o.i, `.w-e-toolbar .w-e-droplist {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  border-right-color: #ccc;
  border-bottom-color: #ccc;
}
.w-e-toolbar .w-e-droplist .w-e-dp-title {
  text-align: center;
  color: #999;
  line-height: 2;
  border-bottom: 1px solid #f1f1f1;
  font-size: 13px;
}
.w-e-toolbar .w-e-droplist ul.w-e-list {
  list-style: none;
  line-height: 1;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {
  color: #333;
  padding: 5px 0;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {
  background-color: #f1f1f1;
}
.w-e-toolbar .w-e-droplist ul.w-e-block {
  list-style: none;
  text-align: left;
  padding: 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {
  display: inline-block;
  padding: 3px 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {
  background-color: #f1f1f1;
}
`, ""]), o.exports = n;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(161));
        Element.prototype.matches || (Element.prototype.matches = function(r) {
          var a = this.ownerDocument.querySelectorAll(r), u = a.length;
          for (u; u >= 0 && a.item(u) !== this; u--)
            ;
          return u > -1;
        }), i.default || (window.Promise = i.default);
      },
      function(o, n, t) {
        o.exports = t(162);
      },
      function(o, n, t) {
        var e = t(163);
        o.exports = e;
      },
      function(o, n, t) {
        t(61), t(50), t(54), t(175), t(178), t(179);
        var e = t(9);
        o.exports = e.Promise;
      },
      function(o, n, t) {
        var e = t(62), i = t(49), r = function(a) {
          return function(u, g) {
            var d = String(i(u)), h = e(g), c = d.length, l, f;
            return h < 0 || h >= c ? a ? "" : void 0 : (l = d.charCodeAt(h), l < 55296 || l > 56319 || h + 1 === c || (f = d.charCodeAt(h + 1)) < 56320 || f > 57343 ? a ? d.charAt(h) : l : a ? d.slice(h, h + 2) : (l - 55296 << 10) + (f - 56320) + 65536);
          };
        };
        o.exports = {
          codeAt: r(!1),
          charAt: r(!0)
        };
      },
      function(o, n, t) {
        var e = t(8), i = t(102), r = e.WeakMap;
        o.exports = typeof r == "function" && /native code/.test(i(r));
      },
      function(o, n, t) {
        var e = t(8), i = t(19);
        o.exports = function(r, a) {
          try {
            i(e, r, a);
          } catch {
            e[r] = a;
          }
          return a;
        };
      },
      function(o, n, t) {
        var e = t(104).IteratorPrototype, i = t(77), r = t(48), a = t(37), u = t(44), g = function() {
          return this;
        };
        o.exports = function(d, h, c) {
          var l = h + " Iterator";
          return d.prototype = i(e, { next: r(1, c) }), a(d, l, !1, !0), u[l] = g, d;
        };
      },
      function(o, n, t) {
        var e = t(11);
        o.exports = !e(function() {
          function i() {
          }
          return i.prototype.constructor = null, Object.getPrototypeOf(new i()) !== i.prototype;
        });
      },
      function(o, n, t) {
        var e = t(14), i = t(18), r = t(25), a = t(52);
        o.exports = e ? Object.defineProperties : function(g, d) {
          r(g);
          for (var h = a(d), c = h.length, l = 0, f; c > l; )
            i.f(g, f = h[l++], d[f]);
          return g;
        };
      },
      function(o, n, t) {
        var e = t(81), i = t(65);
        o.exports = e ? {}.toString : function() {
          return "[object " + i(this) + "]";
        };
      },
      function(o, n, t) {
        var e = t(25), i = t(172);
        o.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
          var r = !1, a = {}, u;
          try {
            u = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, u.call(a, []), r = a instanceof Array;
          } catch {
          }
          return function(d, h) {
            return e(d), i(h), r ? u.call(d, h) : d.__proto__ = h, d;
          };
        }() : void 0);
      },
      function(o, n, t) {
        var e = t(13);
        o.exports = function(i) {
          if (!e(i) && i !== null)
            throw TypeError("Can't set " + String(i) + " as a prototype");
          return i;
        };
      },
      function(o, n, t) {
        var e = t(30), i = t(82), r = t(44), a = t(42), u = t(75), g = "Array Iterator", d = a.set, h = a.getterFor(g);
        o.exports = u(Array, "Array", function(c, l) {
          d(this, {
            type: g,
            target: e(c),
            index: 0,
            kind: l
          });
        }, function() {
          var c = h(this), l = c.target, f = c.kind, s = c.index++;
          return !l || s >= l.length ? (c.target = void 0, { value: void 0, done: !0 }) : f == "keys" ? { value: s, done: !1 } : f == "values" ? { value: l[s], done: !1 } : { value: [s, l[s]], done: !1 };
        }, "values"), r.Arguments = r.Array, i("keys"), i("values"), i("entries");
      },
      function(o, n) {
        o.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0
        };
      },
      function(o, n, t) {
        var e = t(5), i = t(43), r = t(8), a = t(36), u = t(109), g = t(53), d = t(110), h = t(37), c = t(111), l = t(13), f = t(41), s = t(83), m = t(34), v = t(102), p = t(66), A = t(115), y = t(116), x = t(117).set, S = t(176), D = t(119), I = t(177), C = t(85), E = t(120), T = t(42), R = t(101), N = t(10), M = t(86), B = N("species"), F = "Promise", L = T.get, b = T.set, $ = T.getterFor(F), H = u, j = r.TypeError, V = r.document, U = r.process, W = a("fetch"), K = C.f, w = K, Y = m(U) == "process", J = !!(V && V.createEvent && r.dispatchEvent), k = "unhandledrejection", nt = "rejectionhandled", at = 0, ct = 1, Gt = 2, st = 1, bt = 2, Tt, ut, mt, Dt, ht = R(F, function() {
          var X = v(H) !== String(H);
          if (!X && (M === 66 || !Y && typeof PromiseRejectionEvent != "function") || i && !H.prototype.finally)
            return !0;
          if (M >= 51 && /native code/.test(H))
            return !1;
          var Q = H.resolve(1), q = function(G) {
            G(function() {
            }, function() {
            });
          }, tt = Q.constructor = {};
          return tt[B] = q, !(Q.then(function() {
          }) instanceof q);
        }), oe = ht || !A(function(X) {
          H.all(X).catch(function() {
          });
        }), It = function(X) {
          var Q;
          return l(X) && typeof (Q = X.then) == "function" ? Q : !1;
        }, yt = function(X, Q, q) {
          if (!Q.notified) {
            Q.notified = !0;
            var tt = Q.reactions;
            S(function() {
              for (var G = Q.value, z = Q.state == ct, Z = 0; tt.length > Z; ) {
                var _ = tt[Z++], et = z ? _.ok : _.fail, it = _.resolve, ft = _.reject, vt = _.domain, lt, Ut, Vt;
                try {
                  et ? (z || (Q.rejection === bt && Mt(X, Q), Q.rejection = st), et === !0 ? lt = G : (vt && vt.enter(), lt = et(G), vt && (vt.exit(), Vt = !0)), lt === _.promise ? ft(j("Promise-chain cycle")) : (Ut = It(lt)) ? Ut.call(lt, it, ft) : it(lt)) : ft(G);
                } catch (Sn) {
                  vt && !Vt && vt.exit(), ft(Sn);
                }
              }
              Q.reactions = [], Q.notified = !1, q && !Q.rejection && jt(X, Q);
            });
          }
        }, Pt = function(X, Q, q) {
          var tt, G;
          J ? (tt = V.createEvent("Event"), tt.promise = Q, tt.reason = q, tt.initEvent(X, !1, !0), r.dispatchEvent(tt)) : tt = { promise: Q, reason: q }, (G = r["on" + X]) ? G(tt) : X === k && I("Unhandled promise rejection", q);
        }, jt = function(X, Q) {
          x.call(r, function() {
            var q = Q.value, tt = Rt(Q), G;
            if (tt && (G = E(function() {
              Y ? U.emit("unhandledRejection", q, X) : Pt(k, X, q);
            }), Q.rejection = Y || Rt(Q) ? bt : st, G.error))
              throw G.value;
          });
        }, Rt = function(X) {
          return X.rejection !== st && !X.parent;
        }, Mt = function(X, Q) {
          x.call(r, function() {
            Y ? U.emit("rejectionHandled", X) : Pt(nt, X, Q.value);
          });
        }, gt = function(X, Q, q, tt) {
          return function(G) {
            X(Q, q, G, tt);
          };
        }, At = function(X, Q, q, tt) {
          Q.done || (Q.done = !0, tt && (Q = tt), Q.value = q, Q.state = Gt, yt(X, Q, !0));
        }, Et = function(X, Q, q, tt) {
          if (!Q.done) {
            Q.done = !0, tt && (Q = tt);
            try {
              if (X === q)
                throw j("Promise can't be resolved itself");
              var G = It(q);
              G ? S(function() {
                var z = { done: !1 };
                try {
                  G.call(
                    q,
                    gt(Et, X, z, Q),
                    gt(At, X, z, Q)
                  );
                } catch (Z) {
                  At(X, z, Z, Q);
                }
              }) : (Q.value = q, Q.state = ct, yt(X, Q, !1));
            } catch (z) {
              At(X, { done: !1 }, z, Q);
            }
          }
        };
        ht && (H = function(Q) {
          s(this, H, F), f(Q), Tt.call(this);
          var q = L(this);
          try {
            Q(gt(Et, this, q), gt(At, this, q));
          } catch (tt) {
            At(this, q, tt);
          }
        }, Tt = function(Q) {
          b(this, {
            type: F,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: at,
            value: void 0
          });
        }, Tt.prototype = d(H.prototype, {
          then: function(Q, q) {
            var tt = $(this), G = K(y(this, H));
            return G.ok = typeof Q == "function" ? Q : !0, G.fail = typeof q == "function" && q, G.domain = Y ? U.domain : void 0, tt.parent = !0, tt.reactions.push(G), tt.state != at && yt(this, tt, !1), G.promise;
          },
          catch: function(X) {
            return this.then(void 0, X);
          }
        }), ut = function() {
          var X = new Tt(), Q = L(X);
          this.promise = X, this.resolve = gt(Et, X, Q), this.reject = gt(At, X, Q);
        }, C.f = K = function(X) {
          return X === H || X === mt ? new ut(X) : w(X);
        }, !i && typeof u == "function" && (Dt = u.prototype.then, g(u.prototype, "then", function(Q, q) {
          var tt = this;
          return new H(function(G, z) {
            Dt.call(tt, G, z);
          }).then(Q, q);
        }, { unsafe: !0 }), typeof W == "function" && e({ global: !0, enumerable: !0, forced: !0 }, {
          fetch: function(Q) {
            return D(H, W.apply(r, arguments));
          }
        }))), e({ global: !0, wrap: !0, forced: ht }, {
          Promise: H
        }), h(H, F, !1, !0), c(F), mt = a(F), e({ target: F, stat: !0, forced: ht }, {
          reject: function(Q) {
            var q = K(this);
            return q.reject.call(void 0, Q), q.promise;
          }
        }), e({ target: F, stat: !0, forced: i || ht }, {
          resolve: function(Q) {
            return D(i && this === mt ? H : this, Q);
          }
        }), e({ target: F, stat: !0, forced: oe }, {
          all: function(Q) {
            var q = this, tt = K(q), G = tt.resolve, z = tt.reject, Z = E(function() {
              var _ = f(q.resolve), et = [], it = 0, ft = 1;
              p(Q, function(vt) {
                var lt = it++, Ut = !1;
                et.push(void 0), ft++, _.call(q, vt).then(function(Vt) {
                  Ut || (Ut = !0, et[lt] = Vt, --ft || G(et));
                }, z);
              }), --ft || G(et);
            });
            return Z.error && z(Z.value), tt.promise;
          },
          race: function(Q) {
            var q = this, tt = K(q), G = tt.reject, z = E(function() {
              var Z = f(q.resolve);
              p(Q, function(_) {
                Z.call(q, _).then(tt.resolve, G);
              });
            });
            return z.error && G(z.value), tt.promise;
          }
        });
      },
      function(o, n, t) {
        var e = t(8), i = t(71).f, r = t(34), a = t(117).set, u = t(118), g = e.MutationObserver || e.WebKitMutationObserver, d = e.process, h = e.Promise, c = r(d) == "process", l = i(e, "queueMicrotask"), f = l && l.value, s, m, v, p, A, y, x, S;
        f || (s = function() {
          var D, I;
          for (c && (D = d.domain) && D.exit(); m; ) {
            I = m.fn, m = m.next;
            try {
              I();
            } catch (C) {
              throw m ? p() : v = void 0, C;
            }
          }
          v = void 0, D && D.enter();
        }, c ? p = function() {
          d.nextTick(s);
        } : g && !u ? (A = !0, y = document.createTextNode(""), new g(s).observe(y, { characterData: !0 }), p = function() {
          y.data = A = !A;
        }) : h && h.resolve ? (x = h.resolve(void 0), S = x.then, p = function() {
          S.call(x, s);
        }) : p = function() {
          a.call(e, s);
        }), o.exports = f || function(D) {
          var I = { fn: D, next: void 0 };
          v && (v.next = I), m || (m = I, p()), v = I;
        };
      },
      function(o, n, t) {
        var e = t(8);
        o.exports = function(i, r) {
          var a = e.console;
          a && a.error && (arguments.length === 1 ? a.error(i) : a.error(i, r));
        };
      },
      function(o, n, t) {
        var e = t(5), i = t(41), r = t(85), a = t(120), u = t(66);
        e({ target: "Promise", stat: !0 }, {
          allSettled: function(d) {
            var h = this, c = r.f(h), l = c.resolve, f = c.reject, s = a(function() {
              var m = i(h.resolve), v = [], p = 0, A = 1;
              u(d, function(y) {
                var x = p++, S = !1;
                v.push(void 0), A++, m.call(h, y).then(function(D) {
                  S || (S = !0, v[x] = { status: "fulfilled", value: D }, --A || l(v));
                }, function(D) {
                  S || (S = !0, v[x] = { status: "rejected", reason: D }, --A || l(v));
                });
              }), --A || l(v);
            });
            return s.error && f(s.value), c.promise;
          }
        });
      },
      function(o, n, t) {
        var e = t(5), i = t(43), r = t(109), a = t(11), u = t(36), g = t(116), d = t(119), h = t(53), c = !!r && a(function() {
          r.prototype.finally.call({ then: function() {
          } }, function() {
          });
        });
        e({ target: "Promise", proto: !0, real: !0, forced: c }, {
          finally: function(l) {
            var f = g(this, u("Promise")), s = typeof l == "function";
            return this.then(
              s ? function(m) {
                return d(f, l()).then(function() {
                  return m;
                });
              } : l,
              s ? function(m) {
                return d(f, l()).then(function() {
                  throw m;
                });
              } : l
            );
          }
        }), !i && typeof r == "function" && !r.prototype.finally && h(r.prototype, "finally", u("Promise").prototype.finally);
      },
      function(o, n, t) {
        t(54);
        var e = t(181), i = t(65), r = Array.prototype, a = {
          DOMTokenList: !0,
          NodeList: !0
        };
        o.exports = function(u) {
          var g = u.forEach;
          return u === r || u instanceof Array && g === r.forEach || a.hasOwnProperty(i(u)) ? e : g;
        };
      },
      function(o, n, t) {
        var e = t(182);
        o.exports = e;
      },
      function(o, n, t) {
        t(183);
        var e = t(15);
        o.exports = e("Array").forEach;
      },
      function(o, n, t) {
        var e = t(5), i = t(184);
        e({ target: "Array", proto: !0, forced: [].forEach != i }, {
          forEach: i
        });
      },
      function(o, n, t) {
        var e = t(32).forEach, i = t(67), r = t(22), a = i("forEach"), u = r("forEach");
        o.exports = !a || !u ? function(d) {
          return e(this, d, arguments.length > 1 ? arguments[1] : void 0);
        } : [].forEach;
      },
      function(o, n, t) {
        var e = t(186);
        o.exports = e;
      },
      function(o, n, t) {
        t(187);
        var e = t(9);
        o.exports = e.Array.isArray;
      },
      function(o, n, t) {
        var e = t(5), i = t(55);
        e({ target: "Array", stat: !0 }, {
          isArray: i
        });
      },
      function(o, n, t) {
        var e = t(189);
        o.exports = e;
      },
      function(o, n, t) {
        var e = t(190), i = Array.prototype;
        o.exports = function(r) {
          var a = r.map;
          return r === i || r instanceof Array && a === i.map ? e : a;
        };
      },
      function(o, n, t) {
        t(191);
        var e = t(15);
        o.exports = e("Array").map;
      },
      function(o, n, t) {
        var e = t(5), i = t(32).map, r = t(56), a = t(22), u = r("map"), g = a("map");
        e({ target: "Array", proto: !0, forced: !u || !g }, {
          map: function(h) {
            return i(this, h, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(o, n, t) {
        var e = t(193);
        o.exports = e;
      },
      function(o, n, t) {
        var e = t(194), i = String.prototype;
        o.exports = function(r) {
          var a = r.trim;
          return typeof r == "string" || r === i || r instanceof String && a === i.trim ? e : a;
        };
      },
      function(o, n, t) {
        t(195);
        var e = t(15);
        o.exports = e("String").trim;
      },
      function(o, n, t) {
        var e = t(5), i = t(90).trim, r = t(196);
        e({ target: "String", proto: !0, forced: r("trim") }, {
          trim: function() {
            return i(this);
          }
        });
      },
      function(o, n, t) {
        var e = t(11), i = t(68), r = "\u200B\x85\u180E";
        o.exports = function(a) {
          return e(function() {
            return !!i[a]() || r[a]() != r || i[a].name !== a;
          });
        };
      },
      function(o, n, t) {
        var e = t(198);
        o.exports = e;
      },
      function(o, n, t) {
        t(199), t(61), t(50), t(54);
        var e = t(9);
        o.exports = e.Map;
      },
      function(o, n, t) {
        var e = t(122), i = t(124);
        o.exports = e("Map", function(r) {
          return function() {
            return r(this, arguments.length ? arguments[0] : void 0);
          };
        }, i);
      },
      function(o, n, t) {
        var e = t(11);
        o.exports = !e(function() {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      },
      function(o, n, t) {
        var e = t(202);
        o.exports = e;
      },
      function(o, n, t) {
        var e = t(203), i = Array.prototype;
        o.exports = function(r) {
          var a = r.indexOf;
          return r === i || r instanceof Array && a === i.indexOf ? e : a;
        };
      },
      function(o, n, t) {
        t(204);
        var e = t(15);
        o.exports = e("Array").indexOf;
      },
      function(o, n, t) {
        var e = t(5), i = t(78).indexOf, r = t(67), a = t(22), u = [].indexOf, g = !!u && 1 / [1].indexOf(1, -0) < 0, d = r("indexOf"), h = a("indexOf", { ACCESSORS: !0, 1: 0 });
        e({ target: "Array", proto: !0, forced: g || !d || !h }, {
          indexOf: function(l) {
            return g ? u.apply(this, arguments) || 0 : i(this, l, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(o, n, t) {
        var e = t(206);
        o.exports = e;
      },
      function(o, n, t) {
        var e = t(207), i = Array.prototype;
        o.exports = function(r) {
          var a = r.splice;
          return r === i || r instanceof Array && a === i.splice ? e : a;
        };
      },
      function(o, n, t) {
        t(208);
        var e = t(15);
        o.exports = e("Array").splice;
      },
      function(o, n, t) {
        var e = t(5), i = t(79), r = t(62), a = t(35), u = t(31), g = t(88), d = t(69), h = t(56), c = t(22), l = h("splice"), f = c("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), s = Math.max, m = Math.min, v = 9007199254740991, p = "Maximum allowed length exceeded";
        e({ target: "Array", proto: !0, forced: !l || !f }, {
          splice: function(y, x) {
            var S = u(this), D = a(S.length), I = i(y, D), C = arguments.length, E, T, R, N, M, B;
            if (C === 0 ? E = T = 0 : C === 1 ? (E = 0, T = D - I) : (E = C - 2, T = m(s(r(x), 0), D - I)), D + E - T > v)
              throw TypeError(p);
            for (R = g(S, T), N = 0; N < T; N++)
              M = I + N, M in S && d(R, N, S[M]);
            if (R.length = T, E < T) {
              for (N = I; N < D - T; N++)
                M = N + T, B = N + E, M in S ? S[B] = S[M] : delete S[B];
              for (N = D; N > D - T + E; N--)
                delete S[N - 1];
            } else if (E > T)
              for (N = D - T; N > I; N--)
                M = N + T - 1, B = N + E - 1, M in S ? S[B] = S[M] : delete S[B];
            for (N = 0; N < E; N++)
              S[N + I] = arguments[N + 2];
            return S.length = D - T + E, R;
          }
        });
      },
      function(o, n, t) {
        var e = t(210);
        o.exports = e;
      },
      function(o, n, t) {
        var e = t(211), i = Array.prototype;
        o.exports = function(r) {
          var a = r.filter;
          return r === i || r instanceof Array && a === i.filter ? e : a;
        };
      },
      function(o, n, t) {
        t(212);
        var e = t(15);
        o.exports = e("Array").filter;
      },
      function(o, n, t) {
        var e = t(5), i = t(32).filter, r = t(56), a = t(22), u = r("filter"), g = a("filter");
        e({ target: "Array", proto: !0, forced: !u || !g }, {
          filter: function(h) {
            return i(this, h, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(o, n, t) {
        var e = t(214);
        o.exports = e;
      },
      function(o, n, t) {
        var e = t(215), i = t(217), r = Array.prototype, a = String.prototype;
        o.exports = function(u) {
          var g = u.includes;
          return u === r || u instanceof Array && g === r.includes ? e : typeof u == "string" || u === a || u instanceof String && g === a.includes ? i : g;
        };
      },
      function(o, n, t) {
        t(216);
        var e = t(15);
        o.exports = e("Array").includes;
      },
      function(o, n, t) {
        var e = t(5), i = t(78).includes, r = t(82), a = t(22), u = a("indexOf", { ACCESSORS: !0, 1: 0 });
        e({ target: "Array", proto: !0, forced: !u }, {
          includes: function(d) {
            return i(this, d, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), r("includes");
      },
      function(o, n, t) {
        t(218);
        var e = t(15);
        o.exports = e("String").includes;
      },
      function(o, n, t) {
        var e = t(5), i = t(219), r = t(49), a = t(221);
        e({ target: "String", proto: !0, forced: !a("includes") }, {
          includes: function(g) {
            return !!~String(r(this)).indexOf(i(g), arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(o, n, t) {
        var e = t(220);
        o.exports = function(i) {
          if (e(i))
            throw TypeError("The method doesn't accept regular expressions");
          return i;
        };
      },
      function(o, n, t) {
        var e = t(13), i = t(34), r = t(10), a = r("match");
        o.exports = function(u) {
          var g;
          return e(u) && ((g = u[a]) !== void 0 ? !!g : i(u) == "RegExp");
        };
      },
      function(o, n, t) {
        var e = t(10), i = e("match");
        o.exports = function(r) {
          var a = /./;
          try {
            "/./"[r](a);
          } catch {
            try {
              return a[i] = !1, "/./"[r](a);
            } catch {
            }
          }
          return !1;
        };
      },
      function(o, n, t) {
        var e = t(223);
        o.exports = e;
      },
      function(o, n, t) {
        var e = t(224), i = Function.prototype;
        o.exports = function(r) {
          var a = r.bind;
          return r === i || r instanceof Function && a === i.bind ? e : a;
        };
      },
      function(o, n, t) {
        t(225);
        var e = t(15);
        o.exports = e("Function").bind;
      },
      function(o, n, t) {
        var e = t(5), i = t(226);
        e({ target: "Function", proto: !0 }, {
          bind: i
        });
      },
      function(o, n, t) {
        var e = t(41), i = t(13), r = [].slice, a = {}, u = function(g, d, h) {
          if (!(d in a)) {
            for (var c = [], l = 0; l < d; l++)
              c[l] = "a[" + l + "]";
            a[d] = Function("C,a", "return new C(" + c.join(",") + ")");
          }
          return a[d](g, h);
        };
        o.exports = Function.bind || function(d) {
          var h = e(this), c = r.call(arguments, 1), l = function() {
            var s = c.concat(r.call(arguments));
            return this instanceof l ? u(h, s.length, s) : h.apply(d, s);
          };
          return i(h.prototype) && (l.prototype = h.prototype), l;
        };
      },
      function(o, n, t) {
        o.exports = t(228);
      },
      function(o, n, t) {
        var e = t(229);
        o.exports = e;
      },
      function(o, n, t) {
        t(125), t(50), t(54);
        var e = t(93);
        o.exports = e.f("iterator");
      },
      function(o, n, t) {
        o.exports = t(231);
      },
      function(o, n, t) {
        var e = t(232);
        t(251), t(252), t(253), t(254), t(255), o.exports = e;
      },
      function(o, n, t) {
        t(233), t(61), t(234), t(236), t(237), t(238), t(239), t(125), t(240), t(241), t(242), t(243), t(244), t(245), t(246), t(247), t(248), t(249), t(250);
        var e = t(9);
        o.exports = e.Symbol;
      },
      function(o, n, t) {
        var e = t(5), i = t(11), r = t(55), a = t(13), u = t(31), g = t(35), d = t(69), h = t(88), c = t(56), l = t(10), f = t(86), s = l("isConcatSpreadable"), m = 9007199254740991, v = "Maximum allowed index exceeded", p = f >= 51 || !i(function() {
          var S = [];
          return S[s] = !1, S.concat()[0] !== S;
        }), A = c("concat"), y = function(S) {
          if (!a(S))
            return !1;
          var D = S[s];
          return D !== void 0 ? !!D : r(S);
        }, x = !p || !A;
        e({ target: "Array", proto: !0, forced: x }, {
          concat: function(D) {
            var I = u(this), C = h(I, 0), E = 0, T, R, N, M, B;
            for (T = -1, N = arguments.length; T < N; T++)
              if (B = T === -1 ? I : arguments[T], y(B)) {
                if (M = g(B.length), E + M > m)
                  throw TypeError(v);
                for (R = 0; R < M; R++, E++)
                  R in B && d(C, E, B[R]);
              } else {
                if (E >= m)
                  throw TypeError(v);
                d(C, E++, B);
              }
            return C.length = E, C;
          }
        });
      },
      function(o, n, t) {
        var e = t(5), i = t(8), r = t(36), a = t(43), u = t(14), g = t(76), d = t(106), h = t(11), c = t(16), l = t(55), f = t(13), s = t(25), m = t(31), v = t(30), p = t(60), A = t(48), y = t(77), x = t(52), S = t(126), D = t(235), I = t(127), C = t(71), E = t(18), T = t(59), R = t(19), N = t(53), M = t(74), B = t(63), F = t(51), L = t(64), b = t(10), $ = t(93), H = t(12), j = t(37), V = t(42), U = t(32).forEach, W = B("hidden"), K = "Symbol", w = "prototype", Y = b("toPrimitive"), J = V.set, k = V.getterFor(K), nt = Object[w], at = i.Symbol, ct = r("JSON", "stringify"), Gt = C.f, st = E.f, bt = D.f, Tt = T.f, ut = M("symbols"), mt = M("op-symbols"), Dt = M("string-to-symbol-registry"), ht = M("symbol-to-string-registry"), oe = M("wks"), It = i.QObject, yt = !It || !It[w] || !It[w].findChild, Pt = u && h(function() {
          return y(st({}, "a", {
            get: function() {
              return st(this, "a", { value: 7 }).a;
            }
          })).a != 7;
        }) ? function(G, z, Z) {
          var _ = Gt(nt, z);
          _ && delete nt[z], st(G, z, Z), _ && G !== nt && st(nt, z, _);
        } : st, jt = function(G, z) {
          var Z = ut[G] = y(at[w]);
          return J(Z, {
            type: K,
            tag: G,
            description: z
          }), u || (Z.description = z), Z;
        }, Rt = d ? function(G) {
          return typeof G == "symbol";
        } : function(G) {
          return Object(G) instanceof at;
        }, Mt = function(z, Z, _) {
          z === nt && Mt(mt, Z, _), s(z);
          var et = p(Z, !0);
          return s(_), c(ut, et) ? (_.enumerable ? (c(z, W) && z[W][et] && (z[W][et] = !1), _ = y(_, { enumerable: A(0, !1) })) : (c(z, W) || st(z, W, A(1, {})), z[W][et] = !0), Pt(z, et, _)) : st(z, et, _);
        }, gt = function(z, Z) {
          s(z);
          var _ = v(Z), et = x(_).concat(q(_));
          return U(et, function(it) {
            (!u || Et.call(_, it)) && Mt(z, it, _[it]);
          }), z;
        }, At = function(z, Z) {
          return Z === void 0 ? y(z) : gt(y(z), Z);
        }, Et = function(z) {
          var Z = p(z, !0), _ = Tt.call(this, Z);
          return this === nt && c(ut, Z) && !c(mt, Z) ? !1 : _ || !c(this, Z) || !c(ut, Z) || c(this, W) && this[W][Z] ? _ : !0;
        }, X = function(z, Z) {
          var _ = v(z), et = p(Z, !0);
          if (!(_ === nt && c(ut, et) && !c(mt, et))) {
            var it = Gt(_, et);
            return it && c(ut, et) && !(c(_, W) && _[W][et]) && (it.enumerable = !0), it;
          }
        }, Q = function(z) {
          var Z = bt(v(z)), _ = [];
          return U(Z, function(et) {
            !c(ut, et) && !c(F, et) && _.push(et);
          }), _;
        }, q = function(z) {
          var Z = z === nt, _ = bt(Z ? mt : v(z)), et = [];
          return U(_, function(it) {
            c(ut, it) && (!Z || c(nt, it)) && et.push(ut[it]);
          }), et;
        };
        if (g || (at = function() {
          if (this instanceof at)
            throw TypeError("Symbol is not a constructor");
          var z = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]), Z = L(z), _ = function(et) {
            this === nt && _.call(mt, et), c(this, W) && c(this[W], Z) && (this[W][Z] = !1), Pt(this, Z, A(1, et));
          };
          return u && yt && Pt(nt, Z, { configurable: !0, set: _ }), jt(Z, z);
        }, N(at[w], "toString", function() {
          return k(this).tag;
        }), N(at, "withoutSetter", function(G) {
          return jt(L(G), G);
        }), T.f = Et, E.f = Mt, C.f = X, S.f = D.f = Q, I.f = q, $.f = function(G) {
          return jt(b(G), G);
        }, u && (st(at[w], "description", {
          configurable: !0,
          get: function() {
            return k(this).description;
          }
        }), a || N(nt, "propertyIsEnumerable", Et, { unsafe: !0 }))), e({ global: !0, wrap: !0, forced: !g, sham: !g }, {
          Symbol: at
        }), U(x(oe), function(G) {
          H(G);
        }), e({ target: K, stat: !0, forced: !g }, {
          for: function(G) {
            var z = String(G);
            if (c(Dt, z))
              return Dt[z];
            var Z = at(z);
            return Dt[z] = Z, ht[Z] = z, Z;
          },
          keyFor: function(z) {
            if (!Rt(z))
              throw TypeError(z + " is not a symbol");
            if (c(ht, z))
              return ht[z];
          },
          useSetter: function() {
            yt = !0;
          },
          useSimple: function() {
            yt = !1;
          }
        }), e({ target: "Object", stat: !0, forced: !g, sham: !u }, {
          create: At,
          defineProperty: Mt,
          defineProperties: gt,
          getOwnPropertyDescriptor: X
        }), e({ target: "Object", stat: !0, forced: !g }, {
          getOwnPropertyNames: Q,
          getOwnPropertySymbols: q
        }), e({ target: "Object", stat: !0, forced: h(function() {
          I.f(1);
        }) }, {
          getOwnPropertySymbols: function(z) {
            return I.f(m(z));
          }
        }), ct) {
          var tt = !g || h(function() {
            var G = at();
            return ct([G]) != "[null]" || ct({ a: G }) != "{}" || ct(Object(G)) != "{}";
          });
          e({ target: "JSON", stat: !0, forced: tt }, {
            stringify: function(z, Z, _) {
              for (var et = [z], it = 1, ft; arguments.length > it; )
                et.push(arguments[it++]);
              if (ft = Z, !(!f(Z) && z === void 0 || Rt(z)))
                return l(Z) || (Z = function(vt, lt) {
                  if (typeof ft == "function" && (lt = ft.call(this, vt, lt)), !Rt(lt))
                    return lt;
                }), et[1] = Z, ct.apply(null, et);
            }
          });
        }
        at[w][Y] || R(at[w], Y, at[w].valueOf), j(at, K), F[W] = !0;
      },
      function(o, n, t) {
        var e = t(30), i = t(126).f, r = {}.toString, a = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], u = function(g) {
          try {
            return i(g);
          } catch {
            return a.slice();
          }
        };
        o.exports.f = function(d) {
          return a && r.call(d) == "[object Window]" ? u(d) : i(e(d));
        };
      },
      function(o, n, t) {
        var e = t(12);
        e("asyncIterator");
      },
      function(o, n) {
      },
      function(o, n, t) {
        var e = t(12);
        e("hasInstance");
      },
      function(o, n, t) {
        var e = t(12);
        e("isConcatSpreadable");
      },
      function(o, n, t) {
        var e = t(12);
        e("match");
      },
      function(o, n, t) {
        var e = t(12);
        e("matchAll");
      },
      function(o, n, t) {
        var e = t(12);
        e("replace");
      },
      function(o, n, t) {
        var e = t(12);
        e("search");
      },
      function(o, n, t) {
        var e = t(12);
        e("species");
      },
      function(o, n, t) {
        var e = t(12);
        e("split");
      },
      function(o, n, t) {
        var e = t(12);
        e("toPrimitive");
      },
      function(o, n, t) {
        var e = t(12);
        e("toStringTag");
      },
      function(o, n, t) {
        var e = t(12);
        e("unscopables");
      },
      function(o, n, t) {
        var e = t(37);
        e(Math, "Math", !0);
      },
      function(o, n, t) {
        var e = t(8), i = t(37);
        i(e.JSON, "JSON", !0);
      },
      function(o, n, t) {
        var e = t(12);
        e("asyncDispose");
      },
      function(o, n, t) {
        var e = t(12);
        e("dispose");
      },
      function(o, n, t) {
        var e = t(12);
        e("observable");
      },
      function(o, n, t) {
        var e = t(12);
        e("patternMatch");
      },
      function(o, n, t) {
        var e = t(12);
        e("replaceAll");
      },
      function(o, n, t) {
        o.exports = t(257);
      },
      function(o, n, t) {
        var e = t(258);
        o.exports = e;
      },
      function(o, n, t) {
        t(259);
        var e = t(9);
        o.exports = e.parseInt;
      },
      function(o, n, t) {
        var e = t(5), i = t(260);
        e({ global: !0, forced: parseInt != i }, {
          parseInt: i
        });
      },
      function(o, n, t) {
        var e = t(8), i = t(90).trim, r = t(68), a = e.parseInt, u = /^[+-]?0[Xx]/, g = a(r + "08") !== 8 || a(r + "0x16") !== 22;
        o.exports = g ? function(h, c) {
          var l = i(String(h));
          return a(l, c >>> 0 || (u.test(l) ? 16 : 10));
        } : a;
      },
      function(o, n, t) {
        var e = t(262);
        o.exports = e;
      },
      function(o, n, t) {
        var e = t(263), i = Array.prototype;
        o.exports = function(r) {
          var a = r.slice;
          return r === i || r instanceof Array && a === i.slice ? e : a;
        };
      },
      function(o, n, t) {
        t(264);
        var e = t(15);
        o.exports = e("Array").slice;
      },
      function(o, n, t) {
        var e = t(5), i = t(13), r = t(55), a = t(79), u = t(35), g = t(30), d = t(69), h = t(10), c = t(56), l = t(22), f = c("slice"), s = l("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), m = h("species"), v = [].slice, p = Math.max;
        e({ target: "Array", proto: !0, forced: !f || !s }, {
          slice: function(y, x) {
            var S = g(this), D = u(S.length), I = a(y, D), C = a(x === void 0 ? D : x, D), E, T, R;
            if (r(S) && (E = S.constructor, typeof E == "function" && (E === Array || r(E.prototype)) ? E = void 0 : i(E) && (E = E[m], E === null && (E = void 0)), E === Array || E === void 0))
              return v.call(S, I, C);
            for (T = new (E === void 0 ? Array : E)(p(C - I, 0)), R = 0; I < C; I++, R++)
              I in S && d(T, R, S[I]);
            return T.length = R, T;
          }
        });
      },
      function(o, n, t) {
        t(266);
        var e = t(9);
        o.exports = e.setTimeout;
      },
      function(o, n, t) {
        var e = t(5), i = t(8), r = t(84), a = [].slice, u = /MSIE .\./.test(r), g = function(d) {
          return function(h, c) {
            var l = arguments.length > 2, f = l ? a.call(arguments, 2) : void 0;
            return d(l ? function() {
              (typeof h == "function" ? h : Function(h)).apply(this, f);
            } : h, c);
          };
        };
        e({ global: !0, bind: !0, forced: u }, {
          setTimeout: g(i.setTimeout),
          setInterval: g(i.setInterval)
        });
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(128));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = a.__importDefault(t(272)), g = a.__importDefault(t(273)), d = a.__importDefault(t(129)), h = a.__importDefault(t(274)), c = a.__importDefault(t(275)), l = a.__importDefault(t(276)), f = a.__importDefault(t(130)), s = a.__importDefault(t(277)), m = a.__importDefault(t(278)), v = a.__importDefault(t(279)), p = (0, r.default)(
          {},
          u.default,
          g.default,
          d.default,
          c.default,
          h.default,
          l.default,
          f.default,
          s.default,
          m.default,
          v.default,
          {
            linkCheck: function(y, x) {
              return !0;
            }
          }
        );
        n.default = p;
      },
      function(o, n, t) {
        var e = t(269);
        o.exports = e;
      },
      function(o, n, t) {
        t(270);
        var e = t(9);
        o.exports = e.Object.assign;
      },
      function(o, n, t) {
        var e = t(5), i = t(271);
        e({ target: "Object", stat: !0, forced: Object.assign !== i }, {
          assign: i
        });
      },
      function(o, n, t) {
        var e = t(14), i = t(11), r = t(52), a = t(127), u = t(59), g = t(31), d = t(72), h = Object.assign, c = Object.defineProperty;
        o.exports = !h || i(function() {
          if (e && h({ b: 1 }, h(c({}, "a", {
            enumerable: !0,
            get: function() {
              c(this, "b", {
                value: 3,
                enumerable: !1
              });
            }
          }), { b: 2 })).b !== 1)
            return !0;
          var l = {}, f = {}, s = Symbol(), m = "abcdefghijklmnopqrst";
          return l[s] = 7, m.split("").forEach(function(v) {
            f[v] = v;
          }), h({}, l)[s] != 7 || r(h({}, f)).join("") != m;
        }) ? function(f, s) {
          for (var m = g(f), v = arguments.length, p = 1, A = a.f, y = u.f; v > p; )
            for (var x = d(arguments[p++]), S = A ? r(x).concat(A(x)) : r(x), D = S.length, I = 0, C; D > I; )
              C = S[I++], (!e || y.call(x, C)) && (m[C] = x[C]);
          return m;
        } : h;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.default = {
          menus: [
            "head",
            "bold",
            "fontSize",
            "fontName",
            "italic",
            "underline",
            "strikeThrough",
            "indent",
            "lineHeight",
            "foreColor",
            "backColor",
            "link",
            "list",
            "todo",
            "justify",
            "quote",
            "emoticon",
            "image",
            "video",
            "table",
            "code",
            "splitLine",
            "undo",
            "redo"
          ],
          fontNames: ["\u9ED1\u4F53", "\u4EFF\u5B8B", "\u6977\u4F53", "\u6807\u6977\u4F53", "\u534E\u6587\u4EFF\u5B8B", "\u534E\u6587\u6977\u4F53", "\u5B8B\u4F53", "\u5FAE\u8F6F\u96C5\u9ED1", "Arial", "Tahoma", "Verdana", "Times New Roman", "Courier New"],
          fontSizes: {
            "x-small": {
              name: "10px",
              value: "1"
            },
            small: {
              name: "13px",
              value: "2"
            },
            normal: {
              name: "16px",
              value: "3"
            },
            large: {
              name: "18px",
              value: "4"
            },
            "x-large": {
              name: "24px",
              value: "5"
            },
            "xx-large": {
              name: "32px",
              value: "6"
            },
            "xxx-large": {
              name: "48px",
              value: "7"
            }
          },
          colors: ["#000000", "#ffffff", "#eeece0", "#1c487f", "#4d80bf", "#c24f4a", "#8baa4a", "#7b5ba1", "#46acc8", "#f9963b"],
          languageType: ["Bash", "C", "C#", "C++", "CSS", "Java", "JavaScript", "JSON", "TypeScript", "Plain text", "Html", "XML", "SQL", "Go", "Kotlin", "Lua", "Markdown", "PHP", "Python", "Shell Session", "Ruby"],
          languageTab: "\u3000\u3000\u3000\u3000",
          emotions: [{
            title: "\u8868\u60C5",
            type: "emoji",
            content: "\u{1F600} \u{1F603} \u{1F604} \u{1F601} \u{1F606} \u{1F605} \u{1F602} \u{1F923} \u{1F60A} \u{1F607} \u{1F642} \u{1F643} \u{1F609} \u{1F60C} \u{1F60D} \u{1F618} \u{1F617} \u{1F619} \u{1F61A} \u{1F60B} \u{1F61B} \u{1F61D} \u{1F61C} \u{1F913} \u{1F60E} \u{1F60F} \u{1F612} \u{1F61E} \u{1F614} \u{1F61F} \u{1F615} \u{1F641} \u{1F623} \u{1F616} \u{1F62B} \u{1F629} \u{1F622} \u{1F62D} \u{1F624} \u{1F620} \u{1F621} \u{1F633} \u{1F631} \u{1F628} \u{1F917} \u{1F914} \u{1F636} \u{1F611} \u{1F62C} \u{1F644} \u{1F62F} \u{1F634} \u{1F637} \u{1F911} \u{1F608} \u{1F921} \u{1F4A9} \u{1F47B} \u{1F480} \u{1F440} \u{1F463}".split(/\s/)
          }, {
            title: "\u624B\u52BF",
            type: "emoji",
            content: "\u{1F450} \u{1F64C} \u{1F44F} \u{1F91D} \u{1F44D} \u{1F44E} \u{1F44A} \u270A \u{1F91B} \u{1F91C} \u{1F91E} \u270C\uFE0F \u{1F918} \u{1F44C} \u{1F448} \u{1F449} \u{1F446} \u{1F447} \u261D\uFE0F \u270B \u{1F91A} \u{1F590} \u{1F596} \u{1F44B} \u{1F919} \u{1F4AA} \u{1F595} \u270D\uFE0F \u{1F64F}".split(/\s/)
          }],
          lineHeights: ["1", "1.15", "1.6", "2", "2.5", "3"],
          undoLimit: 20,
          indentation: "2em",
          showMenuTooltips: !0,
          menuTooltipPosition: "up"
        };
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(7);
        function a(u, g, d) {
          window.alert(u), d && console.error("wangEditor: " + d);
        }
        n.default = {
          onchangeTimeout: 200,
          onchange: null,
          onfocus: r.EMPTY_FN,
          onblur: r.EMPTY_FN,
          onCatalogChange: null,
          customAlert: a
        };
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.default = {
          pasteFilterStyle: !0,
          pasteIgnoreImg: !1,
          pasteTextHandle: function(a) {
            return a;
          }
        };
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.default = {
          styleWithCSS: !1
        };
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(7);
        n.default = {
          linkImgCheck: function(u, g, d) {
            return !0;
          },
          showLinkImg: !0,
          showLinkImgAlt: !0,
          showLinkImgHref: !0,
          linkImgCallback: r.EMPTY_FN,
          uploadImgAccept: ["jpg", "jpeg", "png", "gif", "bmp"],
          uploadImgServer: "",
          uploadImgShowBase64: !1,
          uploadImgMaxSize: 5 * 1024 * 1024,
          uploadImgMaxLength: 100,
          uploadFileName: "",
          uploadImgParams: {},
          uploadImgParamsWithUrl: !1,
          uploadImgHeaders: {},
          uploadImgHooks: {},
          uploadImgTimeout: 10 * 1e3,
          withCredentials: !1,
          customUploadImg: null,
          uploadImgFromMedia: null
        };
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.default = {
          lang: "zh-CN",
          languages: {
            "zh-CN": {
              wangEditor: {
                \u91CD\u7F6E: "\u91CD\u7F6E",
                \u63D2\u5165: "\u63D2\u5165",
                \u9ED8\u8BA4: "\u9ED8\u8BA4",
                \u521B\u5EFA: "\u521B\u5EFA",
                \u4FEE\u6539: "\u4FEE\u6539",
                \u5982: "\u5982",
                \u8BF7\u8F93\u5165\u6B63\u6587: "\u8BF7\u8F93\u5165\u6B63\u6587",
                menus: {
                  title: {
                    \u6807\u9898: "\u6807\u9898",
                    \u52A0\u7C97: "\u52A0\u7C97",
                    \u5B57\u53F7: "\u5B57\u53F7",
                    \u5B57\u4F53: "\u5B57\u4F53",
                    \u659C\u4F53: "\u659C\u4F53",
                    \u4E0B\u5212\u7EBF: "\u4E0B\u5212\u7EBF",
                    \u5220\u9664\u7EBF: "\u5220\u9664\u7EBF",
                    \u7F29\u8FDB: "\u7F29\u8FDB",
                    \u884C\u9AD8: "\u884C\u9AD8",
                    \u6587\u5B57\u989C\u8272: "\u6587\u5B57\u989C\u8272",
                    \u80CC\u666F\u8272: "\u80CC\u666F\u8272",
                    \u94FE\u63A5: "\u94FE\u63A5",
                    \u5E8F\u5217: "\u5E8F\u5217",
                    \u5BF9\u9F50: "\u5BF9\u9F50",
                    \u5F15\u7528: "\u5F15\u7528",
                    \u8868\u60C5: "\u8868\u60C5",
                    \u56FE\u7247: "\u56FE\u7247",
                    \u89C6\u9891: "\u89C6\u9891",
                    \u8868\u683C: "\u8868\u683C",
                    \u4EE3\u7801: "\u4EE3\u7801",
                    \u5206\u5272\u7EBF: "\u5206\u5272\u7EBF",
                    \u6062\u590D: "\u6062\u590D",
                    \u64A4\u9500: "\u64A4\u9500",
                    \u5168\u5C4F: "\u5168\u5C4F",
                    \u53D6\u6D88\u5168\u5C4F: "\u53D6\u6D88\u5168\u5C4F",
                    \u5F85\u529E\u4E8B\u9879: "\u5F85\u529E\u4E8B\u9879"
                  },
                  dropListMenu: {
                    \u8BBE\u7F6E\u6807\u9898: "\u8BBE\u7F6E\u6807\u9898",
                    \u80CC\u666F\u989C\u8272: "\u80CC\u666F\u989C\u8272",
                    \u6587\u5B57\u989C\u8272: "\u6587\u5B57\u989C\u8272",
                    \u8BBE\u7F6E\u5B57\u53F7: "\u8BBE\u7F6E\u5B57\u53F7",
                    \u8BBE\u7F6E\u5B57\u4F53: "\u8BBE\u7F6E\u5B57\u4F53",
                    \u8BBE\u7F6E\u7F29\u8FDB: "\u8BBE\u7F6E\u7F29\u8FDB",
                    \u5BF9\u9F50\u65B9\u5F0F: "\u5BF9\u9F50\u65B9\u5F0F",
                    \u8BBE\u7F6E\u884C\u9AD8: "\u8BBE\u7F6E\u884C\u9AD8",
                    \u5E8F\u5217: "\u5E8F\u5217",
                    head: {
                      \u6B63\u6587: "\u6B63\u6587"
                    },
                    indent: {
                      \u589E\u52A0\u7F29\u8FDB: "\u589E\u52A0\u7F29\u8FDB",
                      \u51CF\u5C11\u7F29\u8FDB: "\u51CF\u5C11\u7F29\u8FDB"
                    },
                    justify: {
                      \u9760\u5DE6: "\u9760\u5DE6",
                      \u5C45\u4E2D: "\u5C45\u4E2D",
                      \u9760\u53F3: "\u9760\u53F3",
                      \u4E24\u7AEF: "\u4E24\u7AEF"
                    },
                    list: {
                      \u65E0\u5E8F\u5217\u8868: "\u65E0\u5E8F\u5217\u8868",
                      \u6709\u5E8F\u5217\u8868: "\u6709\u5E8F\u5217\u8868"
                    }
                  },
                  panelMenus: {
                    emoticon: {
                      \u9ED8\u8BA4: "\u9ED8\u8BA4",
                      \u65B0\u6D6A: "\u65B0\u6D6A",
                      emoji: "emoji",
                      \u624B\u52BF: "\u624B\u52BF"
                    },
                    image: {
                      \u4E0A\u4F20\u56FE\u7247: "\u4E0A\u4F20\u56FE\u7247",
                      \u7F51\u7EDC\u56FE\u7247: "\u7F51\u7EDC\u56FE\u7247",
                      \u56FE\u7247\u5730\u5740: "\u56FE\u7247\u5730\u5740",
                      \u56FE\u7247\u6587\u5B57\u8BF4\u660E: "\u56FE\u7247\u6587\u5B57\u8BF4\u660E",
                      \u8DF3\u8F6C\u94FE\u63A5: "\u8DF3\u8F6C\u94FE\u63A5"
                    },
                    link: {
                      \u94FE\u63A5: "\u94FE\u63A5",
                      \u94FE\u63A5\u6587\u5B57: "\u94FE\u63A5\u6587\u5B57",
                      \u53D6\u6D88\u94FE\u63A5: "\u53D6\u6D88\u94FE\u63A5",
                      \u67E5\u770B\u94FE\u63A5: "\u67E5\u770B\u94FE\u63A5"
                    },
                    video: {
                      \u63D2\u5165\u89C6\u9891: "\u63D2\u5165\u89C6\u9891",
                      \u4E0A\u4F20\u89C6\u9891: "\u4E0A\u4F20\u89C6\u9891"
                    },
                    table: {
                      \u884C: "\u884C",
                      \u5217: "\u5217",
                      \u7684: "\u7684",
                      \u8868\u683C: "\u8868\u683C",
                      \u6DFB\u52A0\u884C: "\u6DFB\u52A0\u884C",
                      \u5220\u9664\u884C: "\u5220\u9664\u884C",
                      \u6DFB\u52A0\u5217: "\u6DFB\u52A0\u5217",
                      \u5220\u9664\u5217: "\u5220\u9664\u5217",
                      \u8BBE\u7F6E\u8868\u5934: "\u8BBE\u7F6E\u8868\u5934",
                      \u53D6\u6D88\u8868\u5934: "\u53D6\u6D88\u8868\u5934",
                      \u63D2\u5165\u8868\u683C: "\u63D2\u5165\u8868\u683C",
                      \u5220\u9664\u8868\u683C: "\u5220\u9664\u8868\u683C"
                    },
                    code: {
                      \u5220\u9664\u4EE3\u7801: "\u5220\u9664\u4EE3\u7801",
                      \u4FEE\u6539\u4EE3\u7801: "\u4FEE\u6539\u4EE3\u7801",
                      \u63D2\u5165\u4EE3\u7801: "\u63D2\u5165\u4EE3\u7801"
                    }
                  }
                },
                validate: {
                  \u5F20\u56FE\u7247: "\u5F20\u56FE\u7247",
                  \u5927\u4E8E: "\u5927\u4E8E",
                  \u56FE\u7247\u94FE\u63A5: "\u56FE\u7247\u94FE\u63A5",
                  \u4E0D\u662F\u56FE\u7247: "\u4E0D\u662F\u56FE\u7247",
                  \u8FD4\u56DE\u7ED3\u679C: "\u8FD4\u56DE\u7ED3\u679C",
                  \u4E0A\u4F20\u56FE\u7247\u8D85\u65F6: "\u4E0A\u4F20\u56FE\u7247\u8D85\u65F6",
                  \u4E0A\u4F20\u56FE\u7247\u9519\u8BEF: "\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF",
                  \u4E0A\u4F20\u56FE\u7247\u5931\u8D25: "\u4E0A\u4F20\u56FE\u7247\u5931\u8D25",
                  \u63D2\u5165\u56FE\u7247\u9519\u8BEF: "\u63D2\u5165\u56FE\u7247\u9519\u8BEF",
                  \u4E00\u6B21\u6700\u591A\u4E0A\u4F20: "\u4E00\u6B21\u6700\u591A\u4E0A\u4F20",
                  \u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25: "\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25",
                  \u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7: "\u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7",
                  \u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001: "\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001",
                  \u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF",
                  \u8BF7\u66FF\u6362\u4E3A\u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B: "\u8BF7\u66FF\u6362\u4E3A\u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B",
                  \u60A8\u63D2\u5165\u7684\u7F51\u7EDC\u56FE\u7247\u65E0\u6CD5\u8BC6\u522B: "\u60A8\u63D2\u5165\u7684\u7F51\u7EDC\u56FE\u7247\u65E0\u6CD5\u8BC6\u522B",
                  \u60A8\u521A\u624D\u63D2\u5165\u7684\u56FE\u7247\u94FE\u63A5\u672A\u901A\u8FC7\u7F16\u8F91\u5668\u6821\u9A8C: "\u60A8\u521A\u624D\u63D2\u5165\u7684\u56FE\u7247\u94FE\u63A5\u672A\u901A\u8FC7\u7F16\u8F91\u5668\u6821\u9A8C",
                  \u63D2\u5165\u89C6\u9891\u9519\u8BEF: "\u63D2\u5165\u89C6\u9891\u9519\u8BEF",
                  \u89C6\u9891\u94FE\u63A5: "\u89C6\u9891\u94FE\u63A5",
                  \u4E0D\u662F\u89C6\u9891: "\u4E0D\u662F\u89C6\u9891",
                  \u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7: "\u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7",
                  \u4E2A\u89C6\u9891: "\u4E2A\u89C6\u9891",
                  \u4E0A\u4F20\u89C6\u9891\u8D85\u65F6: "\u4E0A\u4F20\u89C6\u9891\u8D85\u65F6",
                  \u4E0A\u4F20\u89C6\u9891\u9519\u8BEF: "\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF",
                  \u4E0A\u4F20\u89C6\u9891\u5931\u8D25: "\u4E0A\u4F20\u89C6\u9891\u5931\u8D25",
                  \u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF"
                }
              }
            },
            en: {
              wangEditor: {
                \u91CD\u7F6E: "reset",
                \u63D2\u5165: "insert",
                \u9ED8\u8BA4: "default",
                \u521B\u5EFA: "create",
                \u4FEE\u6539: "edit",
                \u5982: "like",
                \u8BF7\u8F93\u5165\u6B63\u6587: "please enter the text",
                menus: {
                  title: {
                    \u6807\u9898: "head",
                    \u52A0\u7C97: "bold",
                    \u5B57\u53F7: "font size",
                    \u5B57\u4F53: "font family",
                    \u659C\u4F53: "italic",
                    \u4E0B\u5212\u7EBF: "underline",
                    \u5220\u9664\u7EBF: "strikethrough",
                    \u7F29\u8FDB: "indent",
                    \u884C\u9AD8: "line heihgt",
                    \u6587\u5B57\u989C\u8272: "font color",
                    \u80CC\u666F\u8272: "background",
                    \u94FE\u63A5: "link",
                    \u5E8F\u5217: "numbered list",
                    \u5BF9\u9F50: "align",
                    \u5F15\u7528: "quote",
                    \u8868\u60C5: "emoticons",
                    \u56FE\u7247: "image",
                    \u89C6\u9891: "media",
                    \u8868\u683C: "table",
                    \u4EE3\u7801: "code",
                    \u5206\u5272\u7EBF: "split line",
                    \u6062\u590D: "redo",
                    \u64A4\u9500: "undo",
                    \u5168\u5C4F: "fullscreen",
                    \u53D6\u6D88\u5168\u5C4F: "cancel fullscreen",
                    \u5F85\u529E\u4E8B\u9879: "todo"
                  },
                  dropListMenu: {
                    \u8BBE\u7F6E\u6807\u9898: "title",
                    \u80CC\u666F\u989C\u8272: "background",
                    \u6587\u5B57\u989C\u8272: "font color",
                    \u8BBE\u7F6E\u5B57\u53F7: "font size",
                    \u8BBE\u7F6E\u5B57\u4F53: "font family",
                    \u8BBE\u7F6E\u7F29\u8FDB: "indent",
                    \u5BF9\u9F50\u65B9\u5F0F: "align",
                    \u8BBE\u7F6E\u884C\u9AD8: "line heihgt",
                    \u5E8F\u5217: "list",
                    head: {
                      \u6B63\u6587: "text"
                    },
                    indent: {
                      \u589E\u52A0\u7F29\u8FDB: "indent",
                      \u51CF\u5C11\u7F29\u8FDB: "outdent"
                    },
                    justify: {
                      \u9760\u5DE6: "left",
                      \u5C45\u4E2D: "center",
                      \u9760\u53F3: "right",
                      \u4E24\u7AEF: "justify"
                    },
                    list: {
                      \u65E0\u5E8F\u5217\u8868: "unordered",
                      \u6709\u5E8F\u5217\u8868: "ordered"
                    }
                  },
                  panelMenus: {
                    emoticon: {
                      \u8868\u60C5: "emoji",
                      \u624B\u52BF: "gesture"
                    },
                    image: {
                      \u4E0A\u4F20\u56FE\u7247: "upload image",
                      \u7F51\u7EDC\u56FE\u7247: "network image",
                      \u56FE\u7247\u5730\u5740: "image link",
                      \u56FE\u7247\u6587\u5B57\u8BF4\u660E: "image alt",
                      \u8DF3\u8F6C\u94FE\u63A5: "hyperlink"
                    },
                    link: {
                      \u94FE\u63A5: "link",
                      \u94FE\u63A5\u6587\u5B57: "link text",
                      \u53D6\u6D88\u94FE\u63A5: "unlink",
                      \u67E5\u770B\u94FE\u63A5: "view links"
                    },
                    video: {
                      \u63D2\u5165\u89C6\u9891: "insert video",
                      \u4E0A\u4F20\u89C6\u9891: "upload local video"
                    },
                    table: {
                      \u884C: "rows",
                      \u5217: "columns",
                      \u7684: " ",
                      \u8868\u683C: "table",
                      \u6DFB\u52A0\u884C: "insert row",
                      \u5220\u9664\u884C: "delete row",
                      \u6DFB\u52A0\u5217: "insert column",
                      \u5220\u9664\u5217: "delete column",
                      \u8BBE\u7F6E\u8868\u5934: "set header",
                      \u53D6\u6D88\u8868\u5934: "cancel header",
                      \u63D2\u5165\u8868\u683C: "insert table",
                      \u5220\u9664\u8868\u683C: "delete table"
                    },
                    code: {
                      \u5220\u9664\u4EE3\u7801: "delete code",
                      \u4FEE\u6539\u4EE3\u7801: "edit code",
                      \u63D2\u5165\u4EE3\u7801: "insert code"
                    }
                  }
                },
                validate: {
                  \u5F20\u56FE\u7247: "images",
                  \u5927\u4E8E: "greater than",
                  \u56FE\u7247\u94FE\u63A5: "image link",
                  \u4E0D\u662F\u56FE\u7247: "is not image",
                  \u8FD4\u56DE\u7ED3\u679C: "return results",
                  \u4E0A\u4F20\u56FE\u7247\u8D85\u65F6: "upload image timeout",
                  \u4E0A\u4F20\u56FE\u7247\u9519\u8BEF: "upload image error",
                  \u4E0A\u4F20\u56FE\u7247\u5931\u8D25: "upload image failed",
                  \u63D2\u5165\u56FE\u7247\u9519\u8BEF: "insert image error",
                  \u4E00\u6B21\u6700\u591A\u4E0A\u4F20: "once most at upload",
                  \u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25: "download link failed",
                  \u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7: "image validate failed",
                  \u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001: "server return status",
                  \u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "upload image return results error",
                  \u8BF7\u66FF\u6362\u4E3A\u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B: "please replace with a supported image type",
                  \u60A8\u63D2\u5165\u7684\u7F51\u7EDC\u56FE\u7247\u65E0\u6CD5\u8BC6\u522B: "the network picture you inserted is not recognized",
                  \u60A8\u521A\u624D\u63D2\u5165\u7684\u56FE\u7247\u94FE\u63A5\u672A\u901A\u8FC7\u7F16\u8F91\u5668\u6821\u9A8C: "the image link you just inserted did not pass the editor verification",
                  \u63D2\u5165\u89C6\u9891\u9519\u8BEF: "insert video error",
                  \u89C6\u9891\u94FE\u63A5: "video link",
                  \u4E0D\u662F\u89C6\u9891: "is not video",
                  \u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7: "video validate failed",
                  \u4E2A\u89C6\u9891: "videos",
                  \u4E0A\u4F20\u89C6\u9891\u8D85\u65F6: "upload video timeout",
                  \u4E0A\u4F20\u89C6\u9891\u9519\u8BEF: "upload video error",
                  \u4E0A\u4F20\u89C6\u9891\u5931\u8D25: "upload video failed",
                  \u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "upload video return results error"
                }
              }
            }
          }
        };
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(6);
        function a() {
          return !!(r.UA.isIE() || r.UA.isOldEdge);
        }
        n.default = {
          compatibleMode: a,
          historyMaxSize: 30
        };
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(7);
        n.default = {
          onlineVideoCheck: function(u) {
            return !0;
          },
          onlineVideoCallback: r.EMPTY_FN,
          showLinkVideo: !0,
          uploadVideoAccept: ["mp4"],
          uploadVideoServer: "",
          uploadVideoMaxSize: 1 * 1024 * 1024 * 1024,
          uploadVideoName: "",
          uploadVideoParams: {},
          uploadVideoParamsWithUrl: !1,
          uploadVideoHeaders: {},
          uploadVideoHooks: {},
          uploadVideoTimeout: 1e3 * 60 * 60 * 2,
          withVideoCredentials: !1,
          customUploadVideo: null,
          customInsertVideo: null
        };
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(17));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = a.__importDefault(t(3)), g = t(6), d = t(7), h = function() {
          function c(l) {
            this._currentRange = null, this.editor = l;
          }
          return c.prototype.getRange = function() {
            return this._currentRange;
          }, c.prototype.saveRange = function(l) {
            if (l) {
              this._currentRange = l;
              return;
            }
            var f = window.getSelection();
            if (f.rangeCount !== 0) {
              var s = f.getRangeAt(0), m = this.getSelectionContainerElem(s);
              if (!!(m != null && m.length) && !(m.attr("contenteditable") === "false" || m.parentUntil("[contenteditable=false]"))) {
                var v = this.editor, p = v.$textElem;
                if (p.isContain(m)) {
                  if (p.elems[0] === m.elems[0]) {
                    var A;
                    if ((0, r.default)(A = p.html()).call(A) === d.EMPTY_P) {
                      var y = p.children(), x = y == null ? void 0 : y.last();
                      v.selection.createRangeByElem(x, !0, !0), v.selection.restoreSelection();
                    }
                  }
                  this._currentRange = s;
                }
              }
            }
          }, c.prototype.collapseRange = function(l) {
            l === void 0 && (l = !1);
            var f = this._currentRange;
            f && f.collapse(l);
          }, c.prototype.getSelectionText = function() {
            var l = this._currentRange;
            return l ? l.toString() : "";
          }, c.prototype.getSelectionContainerElem = function(l) {
            var f;
            f = l || this._currentRange;
            var s;
            if (f)
              return s = f.commonAncestorContainer, u.default(s.nodeType === 1 ? s : s.parentNode);
          }, c.prototype.getSelectionStartElem = function(l) {
            var f;
            f = l || this._currentRange;
            var s;
            if (f)
              return s = f.startContainer, u.default(s.nodeType === 1 ? s : s.parentNode);
          }, c.prototype.getSelectionEndElem = function(l) {
            var f;
            f = l || this._currentRange;
            var s;
            if (f)
              return s = f.endContainer, u.default(s.nodeType === 1 ? s : s.parentNode);
          }, c.prototype.isSelectionEmpty = function() {
            var l = this._currentRange;
            return !!(l && l.startContainer && l.startContainer === l.endContainer && l.startOffset === l.endOffset);
          }, c.prototype.restoreSelection = function() {
            var l = window.getSelection(), f = this._currentRange;
            l && f && (l.removeAllRanges(), l.addRange(f));
          }, c.prototype.createEmptyRange = function() {
            var l = this.editor, f = this.getRange(), s;
            if (!!f && !!this.isSelectionEmpty())
              try {
                g.UA.isWebkit() ? (l.cmd.do("insertHTML", "&#8203;"), f.setEnd(f.endContainer, f.endOffset + 1), this.saveRange(f)) : (s = u.default("<strong>&#8203;</strong>"), l.cmd.do("insertElem", s), this.createRangeByElem(s, !0));
              } catch {
              }
          }, c.prototype.createRangeByElems = function(l, f) {
            var s = window.getSelection ? window.getSelection() : document.getSelection();
            s == null || s.removeAllRanges();
            var m = document.createRange();
            m.setStart(l, 0), m.setEnd(f, f.childNodes.length || 1), this.saveRange(m), this.restoreSelection();
          }, c.prototype.createRangeByElem = function(l, f, s) {
            if (!!l.length) {
              var m = l.elems[0], v = document.createRange();
              s ? v.selectNodeContents(m) : v.selectNode(m), f != null && (v.collapse(f), f || (this.saveRange(v), this.editor.selection.moveCursor(m))), this.saveRange(v);
            }
          }, c.prototype.getSelectionRangeTopNodes = function() {
            var l, f, s, m = (l = this.getSelectionStartElem()) === null || l === void 0 ? void 0 : l.getNodeTop(this.editor), v = (f = this.getSelectionEndElem()) === null || f === void 0 ? void 0 : f.getNodeTop(this.editor);
            return s = this.recordSelectionNodes(u.default(m), u.default(v)), s;
          }, c.prototype.moveCursor = function(l, f) {
            var s, m = this.getRange(), v = l.nodeType === 3 ? (s = l.nodeValue) === null || s === void 0 ? void 0 : s.length : l.childNodes.length;
            (g.UA.isFirefox || g.UA.isIE()) && v !== 0 && (l.nodeType === 3 || l.childNodes[v - 1].nodeName === "BR") && (v = v - 1);
            var p = f != null ? f : v;
            !m || l && (m.setStart(l, p), m.setEnd(l, p), this.restoreSelection());
          }, c.prototype.getCursorPos = function() {
            var l = window.getSelection();
            return l == null ? void 0 : l.anchorOffset;
          }, c.prototype.clearWindowSelectionRange = function() {
            var l = window.getSelection();
            l && l.removeAllRanges();
          }, c.prototype.recordSelectionNodes = function(l, f) {
            var s = [], m = !0;
            try {
              for (var v = l, p = this.editor.$textElem; m; ) {
                var A = v == null ? void 0 : v.getNodeTop(this.editor);
                A.getNodeName() === "BODY" && (m = !1), A.length > 0 && (s.push(u.default(v)), (f == null ? void 0 : f.equal(A)) || p.equal(A) ? m = !1 : v = A.getNextSibling());
              }
            } catch {
              m = !1;
            }
            return s;
          }, c.prototype.setRangeToElem = function(l) {
            var f = this.getRange();
            f == null || f.setStart(l, 0), f == null || f.setEnd(l, 0);
          }, c;
        }();
        n.default = h;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(3)), u = function() {
          function g(d) {
            this.editor = d;
          }
          return g.prototype.do = function(d, h) {
            var c = this.editor;
            c.config.styleWithCSS && document.execCommand("styleWithCSS", !1, "true");
            var l = c.selection;
            if (!!l.getRange()) {
              switch (l.restoreSelection(), d) {
                case "insertHTML":
                  this.insertHTML(h);
                  break;
                case "insertElem":
                  this.insertElem(h);
                  break;
                default:
                  this.execCommand(d, h);
                  break;
              }
              c.menus.changeActive(), l.saveRange(), l.restoreSelection();
            }
          }, g.prototype.insertHTML = function(d) {
            var h = this.editor, c = h.selection.getRange();
            if (c != null) {
              if (this.queryCommandSupported("insertHTML"))
                this.execCommand("insertHTML", d);
              else if (c.insertNode) {
                if (c.deleteContents(), a.default(d).elems.length > 0)
                  c.insertNode(a.default(d).elems[0]);
                else {
                  var l = document.createElement("p");
                  l.appendChild(document.createTextNode(d)), c.insertNode(l);
                }
                h.selection.collapseRange();
              }
            }
          }, g.prototype.insertElem = function(d) {
            var h = this.editor, c = h.selection.getRange();
            c != null && c.insertNode && (c.deleteContents(), c.insertNode(d.elems[0]));
          }, g.prototype.execCommand = function(d, h) {
            document.execCommand(d, !1, h);
          }, g.prototype.queryCommandValue = function(d) {
            return document.queryCommandValue(d);
          }, g.prototype.queryCommandState = function(d) {
            return document.queryCommandState(d);
          }, g.prototype.queryCommandSupported = function(d) {
            return document.queryCommandSupported(d);
          }, g;
        }();
        n.default = u;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(29)), a = e(t(4)), u = e(t(17)), g = e(t(27)), d = e(t(46));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var h = t(2), c = h.__importDefault(t(3)), l = h.__importDefault(t(287)), f = t(6), s = h.__importDefault(t(299)), m = h.__importDefault(t(300)), v = t(7), p = function() {
          function A(y) {
            this.editor = y, this.eventHooks = {
              onBlurEvents: [],
              changeEvents: [],
              dropEvents: [],
              clickEvents: [],
              keydownEvents: [],
              keyupEvents: [],
              tabUpEvents: [],
              tabDownEvents: [],
              enterUpEvents: [],
              enterDownEvents: [],
              deleteUpEvents: [],
              deleteDownEvents: [],
              pasteEvents: [],
              linkClickEvents: [],
              codeClickEvents: [],
              textScrollEvents: [],
              toolbarClickEvents: [],
              imgClickEvents: [],
              imgDragBarMouseDownEvents: [],
              tableClickEvents: [],
              menuClickEvents: [],
              dropListMenuHoverEvents: [],
              splitLineEvents: [],
              videoClickEvents: []
            };
          }
          return A.prototype.init = function() {
            this._saveRange(), this._bindEventHooks(), l.default(this);
          }, A.prototype.togglePlaceholder = function() {
            var y, x = this.html(), S = (0, r.default)(y = this.editor.$textContainerElem).call(y, ".placeholder");
            S.hide(), !this.editor.isComposing && (!x || x === " ") && S.show();
          }, A.prototype.clear = function() {
            this.html(v.EMPTY_P);
          }, A.prototype.html = function(y) {
            var x = this.editor, S = x.$textElem;
            if (y == null) {
              var D = S.html();
              D = D.replace(/\u200b/gm, ""), D = D.replace(/<p><\/p>/gim, ""), D = D.replace(v.EMPTY_P_LAST_REGEX, ""), D = D.replace(v.EMPTY_P_REGEX, "<p>");
              var I = D.match(/<(img|br|hr|input)[^>]*>/gi);
              return I !== null && (0, a.default)(I).call(I, function(C) {
                C.match(/\/>/) || (D = D.replace(C, C.substring(0, C.length - 1) + "/>"));
              }), D;
            }
            y = (0, u.default)(y).call(y), y === "" && (y = v.EMPTY_P), (0, g.default)(y).call(y, "<") !== 0 && (y = "<p>" + y + "</p>"), S.html(y), x.initSelection();
          }, A.prototype.setJSON = function(y) {
            var x = m.default(y).children(), S = this.editor, D = S.$textElem;
            !x || D.replaceChildAll(x);
          }, A.prototype.getJSON = function() {
            var y = this.editor, x = y.$textElem;
            return s.default(x);
          }, A.prototype.text = function(y) {
            var x = this.editor, S = x.$textElem;
            if (y == null) {
              var D = S.text();
              return D = D.replace(/\u200b/gm, ""), D;
            }
            S.text("<p>" + y + "</p>"), x.initSelection();
          }, A.prototype.append = function(y) {
            var x = this.editor;
            (0, g.default)(y).call(y, "<") !== 0 && (y = "<p>" + y + "</p>"), this.html(this.html() + y), x.initSelection();
          }, A.prototype._saveRange = function() {
            var y = this.editor, x = y.$textElem, S = c.default(document);
            function D() {
              y.selection.saveRange(), y.menus.changeActive();
            }
            x.on("keyup", D);
            function I() {
              D(), x.off("click", I);
            }
            x.on("click", I);
            function C() {
              D(), S.off("mouseup", C);
            }
            function E() {
              S.on("mouseup", C), x.off("mouseleave", E);
            }
            x.on("mousedown", function() {
              x.on("mouseleave", E);
            }), x.on("mouseup", function(T) {
              x.off("mouseleave", E), (0, d.default)(function() {
                var R = y.selection, N = R.getRange();
                N !== null && D();
              }, 0);
            });
          }, A.prototype._bindEventHooks = function() {
            var y = this.editor, x = y.$textElem, S = this.eventHooks;
            x.on("click", function(I) {
              var C = S.clickEvents;
              (0, a.default)(C).call(C, function(E) {
                return E(I);
              });
            }), x.on("keyup", function(I) {
              if (I.keyCode === 13) {
                var C = S.enterUpEvents;
                (0, a.default)(C).call(C, function(E) {
                  return E(I);
                });
              }
            }), x.on("keyup", function(I) {
              var C = S.keyupEvents;
              (0, a.default)(C).call(C, function(E) {
                return E(I);
              });
            }), x.on("keydown", function(I) {
              var C = S.keydownEvents;
              (0, a.default)(C).call(C, function(E) {
                return E(I);
              });
            }), x.on("keyup", function(I) {
              if (!(I.keyCode !== 8 && I.keyCode !== 46)) {
                var C = S.deleteUpEvents;
                (0, a.default)(C).call(C, function(E) {
                  return E(I);
                });
              }
            }), x.on("keydown", function(I) {
              if (!(I.keyCode !== 8 && I.keyCode !== 46)) {
                var C = S.deleteDownEvents;
                (0, a.default)(C).call(C, function(E) {
                  return E(I);
                });
              }
            }), x.on("paste", function(I) {
              if (!f.UA.isIE()) {
                I.preventDefault();
                var C = S.pasteEvents;
                (0, a.default)(C).call(C, function(E) {
                  return E(I);
                });
              }
            }), x.on("keydown", function(I) {
              (y.isFocus || y.isCompatibleMode) && (I.ctrlKey || I.metaKey) && I.keyCode === 90 && (I.preventDefault(), I.shiftKey ? y.history.restore() : y.history.revoke());
            }), x.on("keyup", function(I) {
              if (I.keyCode === 9) {
                I.preventDefault();
                var C = S.tabUpEvents;
                (0, a.default)(C).call(C, function(E) {
                  return E(I);
                });
              }
            }), x.on("keydown", function(I) {
              if (I.keyCode === 9) {
                I.preventDefault();
                var C = S.tabDownEvents;
                (0, a.default)(C).call(C, function(E) {
                  return E(I);
                });
              }
            }), x.on(
              "scroll",
              f.throttle(function(I) {
                var C = S.textScrollEvents;
                (0, a.default)(C).call(C, function(E) {
                  return E(I);
                });
              }, 100)
            );
            function D(I) {
              I.preventDefault();
            }
            c.default(document).on("dragleave", D).on("drop", D).on("dragenter", D).on("dragover", D), y.beforeDestroy(function() {
              c.default(document).off("dragleave", D).off("drop", D).off("dragenter", D).off("dragover", D);
            }), x.on("drop", function(I) {
              I.preventDefault();
              var C = S.dropEvents;
              (0, a.default)(C).call(C, function(E) {
                return E(I);
              });
            }), x.on("click", function(I) {
              var C = null, E = I.target, T = c.default(E);
              if (T.getNodeName() === "A")
                C = T;
              else {
                var R = T.parentUntil("a");
                R != null && (C = R);
              }
              if (!!C) {
                var N = S.linkClickEvents;
                (0, a.default)(N).call(N, function(M) {
                  return M(C);
                });
              }
            }), x.on("click", function(I) {
              var C = null, E = I.target, T = c.default(E);
              if (T.getNodeName() === "IMG" && !T.elems[0].getAttribute("data-emoji") && (I.stopPropagation(), C = T), !!C) {
                var R = S.imgClickEvents;
                (0, a.default)(R).call(R, function(N) {
                  return N(C);
                });
              }
            }), x.on("click", function(I) {
              var C = null, E = I.target, T = c.default(E);
              if (T.getNodeName() === "PRE")
                C = T;
              else {
                var R = T.parentUntil("pre");
                R !== null && (C = R);
              }
              if (!!C) {
                var N = S.codeClickEvents;
                (0, a.default)(N).call(N, function(M) {
                  return M(C);
                });
              }
            }), x.on("click", function(I) {
              var C = null, E = I.target, T = c.default(E);
              if (T.getNodeName() === "HR" && (C = T), !!C) {
                y.selection.createRangeByElem(C), y.selection.restoreSelection();
                var R = S.splitLineEvents;
                (0, a.default)(R).call(R, function(N) {
                  return N(C);
                });
              }
            }), y.$toolbarElem.on("click", function(I) {
              var C = S.toolbarClickEvents;
              (0, a.default)(C).call(C, function(E) {
                return E(I);
              });
            }), y.$textContainerElem.on("mousedown", function(I) {
              var C = I.target, E = c.default(C);
              if (E.hasClass("w-e-img-drag-rb")) {
                var T = S.imgDragBarMouseDownEvents;
                (0, a.default)(T).call(T, function(R) {
                  return R();
                });
              }
            }), x.on("click", function(I) {
              var C = null, E = I.target;
              if (C = c.default(E).parentUntilEditor("TABLE", y, E), !!C) {
                var T = S.tableClickEvents;
                (0, a.default)(T).call(T, function(R) {
                  return R(C, I);
                });
              }
            }), x.on("keydown", function(I) {
              if (I.keyCode === 13) {
                var C = S.enterDownEvents;
                (0, a.default)(C).call(C, function(E) {
                  return E(I);
                });
              }
            }), x.on("click", function(I) {
              var C = null, E = I.target, T = c.default(E);
              if (T.getNodeName() === "VIDEO" && (I.stopPropagation(), C = T), !!C) {
                var R = S.videoClickEvents;
                (0, a.default)(R).call(R, function(N) {
                  return N(C);
                });
              }
            });
          }, A;
        }();
        n.default = p;
      },
      function(o, n, t) {
        var e = t(284);
        o.exports = e;
      },
      function(o, n, t) {
        var e = t(285), i = Array.prototype;
        o.exports = function(r) {
          var a = r.find;
          return r === i || r instanceof Array && a === i.find ? e : a;
        };
      },
      function(o, n, t) {
        t(286);
        var e = t(15);
        o.exports = e("Array").find;
      },
      function(o, n, t) {
        var e = t(5), i = t(32).find, r = t(82), a = t(22), u = "find", g = !0, d = a(u);
        u in [] && Array(1)[u](function() {
          g = !1;
        }), e({ target: "Array", proto: !0, forced: g || !d }, {
          find: function(c) {
            return i(this, c, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), r(u);
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(288)), u = r.__importStar(t(289)), g = r.__importDefault(t(290)), d = r.__importDefault(t(291)), h = r.__importDefault(t(298));
        function c(l) {
          var f = l.editor, s = l.eventHooks;
          a.default(f, s.enterUpEvents, s.enterDownEvents), u.default(f, s.deleteUpEvents, s.deleteDownEvents), u.cutToKeepP(f, s.keyupEvents), g.default(f, s.tabDownEvents), d.default(f, s.pasteEvents), h.default(f, s.imgClickEvents);
        }
        n.default = c;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(27));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = t(7), g = a.__importDefault(t(3));
        function d(h, c, l) {
          function f(v) {
            var p, A = g.default(u.EMPTY_P);
            if (A.insertBefore(v), (0, r.default)(p = v.html()).call(p, "<img") >= 0) {
              A.remove();
              return;
            }
            h.selection.createRangeByElem(A, !0, !0), h.selection.restoreSelection(), v.remove();
          }
          function s() {
            var v = h.$textElem, p = h.selection.getSelectionContainerElem(), A = p.parent();
            if (A.html() === "<code><br></code>") {
              f(A);
              return;
            }
            if (p.getNodeName() === "FONT" && p.text() === "" && p.attr("face") === "monospace") {
              f(A);
              return;
            }
            if (!!A.equal(v)) {
              var y = p.getNodeName();
              y === "P" && p.attr("data-we-empty-p") === null || p.text() || f(p);
            }
          }
          c.push(s);
          function m(v) {
            var p;
            h.selection.saveRange((p = getSelection()) === null || p === void 0 ? void 0 : p.getRangeAt(0));
            var A = h.selection.getSelectionContainerElem();
            A.id === h.textElemId && (v.preventDefault(), h.cmd.do("insertHTML", "<p><br></p>"));
          }
          l.push(m);
        }
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(17)), a = e(t(28));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.cutToKeepP = void 0;
        var u = t(2), g = t(7), d = u.__importDefault(t(3));
        function h(l, f, s) {
          function m() {
            var p = l.$textElem, A = l.$textElem.html(), y = l.$textElem.text(), x = (0, r.default)(A).call(A), S = ["<p><br></p>", "<br>", '<p data-we-empty-p=""></p>', g.EMPTY_P];
            if (/^\s*$/.test(y) && (!x || (0, a.default)(S).call(S, x))) {
              p.html(g.EMPTY_P);
              var D = p.getNode();
              l.selection.createRangeByElems(D.childNodes[0], D.childNodes[0]);
              var I = l.selection.getSelectionContainerElem();
              l.selection.restoreSelection(), l.selection.moveCursor(I.getNode(), 0);
            }
          }
          f.push(m);
          function v(p) {
            var A, y = l.$textElem, x = (0, r.default)(A = y.html().toLowerCase()).call(A);
            if (x === g.EMPTY_P) {
              p.preventDefault();
              return;
            }
          }
          s.push(v);
        }
        function c(l, f) {
          function s(m) {
            var v;
            if (m.keyCode === 88) {
              var p = l.$textElem, A = (0, r.default)(v = p.html().toLowerCase()).call(v);
              if (!A || A === "<br>") {
                var y = d.default(g.EMPTY_P);
                p.html(" "), p.append(y), l.selection.createRangeByElem(y, !1, !0), l.selection.restoreSelection(), l.selection.moveCursor(y.getNode(), 0);
              }
            }
          }
          f.push(s);
        }
        n.cutToKeepP = c, n.default = h;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        function r(a, u) {
          function g() {
            if (!!a.cmd.queryCommandSupported("insertHTML")) {
              var d = a.selection.getSelectionContainerElem();
              if (!!d) {
                var h = d.parent(), c = d.getNodeName(), l = h.getNodeName();
                c == "CODE" || l === "CODE" || l === "PRE" || /hljs/.test(l) ? a.cmd.do("insertHTML", a.config.languageTab) : a.cmd.do("insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;");
              }
            }
          }
          u.push(g);
        }
        n.default = r;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(17)), a = e(t(4));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var u = t(131), g = t(6), d = t(7);
        function h(m) {
          var v, p = (0, r.default)(v = m.replace(/<div>/gim, "<p>").replace(/<\/div>/gim, "</p>")).call(v), A = document.createElement("div");
          return A.innerHTML = p, A.innerHTML.replace(/<p><\/p>/gim, "");
        }
        function c(m) {
          var v = m.replace(/<br>|<br\/>/gm, `
`).replace(/<[^>]+>/gm, "");
          return v;
        }
        function l(m) {
          var v;
          if (m === "")
            return !1;
          var p = document.createElement("div");
          return p.innerHTML = m, ((v = p.firstChild) === null || v === void 0 ? void 0 : v.nodeName) === "P";
        }
        function f(m) {
          if (!(m != null && m.length))
            return !1;
          var v = m.elems[0];
          return v.nodeName === "P" && v.innerHTML === "<br>";
        }
        function s(m, v) {
          function p(A) {
            var y = m.config, x = y.pasteFilterStyle, S = y.pasteIgnoreImg, D = y.pasteTextHandle, I = u.getPasteHtml(A, x, S), C = u.getPasteText(A);
            C = C.replace(/\n/gm, "<br>");
            var E = m.selection.getSelectionContainerElem();
            if (!!E) {
              var T = E == null ? void 0 : E.getNodeName(), R = E == null ? void 0 : E.getNodeTop(m), N = "";
              if (R.elems[0] && (N = R == null ? void 0 : R.getNodeName()), T === "CODE" || N === "PRE") {
                D && g.isFunction(D) && (C = "" + (D(C) || "")), m.cmd.do("insertHTML", c(C));
                return;
              }
              if (d.urlRegex.test(C) && x) {
                D && g.isFunction(D) && (C = "" + (D(C) || ""));
                var M = C.replace(d.urlRegex, function(V) {
                  return '<a href="' + V + '" target="_blank">' + V + "</a>";
                }), B = m.selection.getRange(), F = document.createElement("div"), L = document.createDocumentFragment();
                if (F.innerHTML = M, B == null)
                  return;
                for (; F.childNodes.length; )
                  L.append(F.childNodes[0]);
                var b = L.querySelectorAll("a");
                (0, a.default)(b).call(b, function(V) {
                  V.innerText = V.href;
                }), B.insertNode && (B.deleteContents(), B.insertNode(L)), m.selection.clearWindowSelectionRange();
                return;
              }
              if (!!I)
                try {
                  D && g.isFunction(D) && (I = "" + (D(I) || ""));
                  var $ = /[\.\#\@]?\w+[ ]+\{[^}]*\}/.test(I);
                  if ($ && x)
                    m.cmd.do("insertHTML", "" + h(C));
                  else {
                    var H = h(I);
                    if (l(H)) {
                      var j = m.$textElem;
                      if (m.cmd.do("insertHTML", H), j.equal(E)) {
                        m.selection.createEmptyRange();
                        return;
                      }
                      f(R) && R.remove();
                    } else
                      m.cmd.do("insertHTML", H);
                  }
                } catch {
                  D && g.isFunction(D) && (C = "" + (D(C) || "")), m.cmd.do("insertHTML", "" + h(C));
                }
            }
          }
          v.push(p);
        }
        n.default = s;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(17)), a = e(t(4)), u = e(t(28));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var g = t(2), d = t(293), h = g.__importDefault(t(297));
        function c(v) {
          var p = /<span>.*?<\/span>/gi, A = /<span>(.*?)<\/span>/;
          return v.replace(p, function(y) {
            var x = y.match(A);
            return x == null ? "" : x[1];
          });
        }
        function l(v, p) {
          var A;
          return v = (0, r.default)(A = v.toLowerCase()).call(A), !!(d.IGNORE_TAGS.has(v) || p && v === "img");
        }
        function f(v, p) {
          var A = "";
          A = "<" + v;
          var y = [];
          (0, a.default)(p).call(p, function(S) {
            y.push(S.name + '="' + S.value + '"');
          }), y.length > 0 && (A = A + " " + y.join(" "));
          var x = d.EMPTY_TAGS.has(v);
          return A = A + (x ? "/" : "") + ">", A;
        }
        function s(v) {
          return "</" + v + ">";
        }
        function m(v, p, A) {
          p === void 0 && (p = !0), A === void 0 && (A = !1);
          var y = [], x = "";
          function S(E) {
            E = (0, r.default)(E).call(E), E && (d.EMPTY_TAGS.has(E) || (x = E));
          }
          function D() {
            x = "";
          }
          var I = new h.default();
          I.parse(v, {
            startElement: function(T, R) {
              if (S(T), !l(T, A)) {
                var N = d.NECESSARY_ATTRS.get(T) || [], M = [];
                (0, a.default)(R).call(R, function(F) {
                  var L = F.name;
                  if (L === "style") {
                    p || M.push(F);
                    return;
                  }
                  (0, u.default)(N).call(N, L) !== !1 && M.push(F);
                });
                var B = f(T, M);
                y.push(B);
              }
            },
            characters: function(T) {
              !T || l(x, A) || y.push(T);
            },
            endElement: function(T) {
              if (!l(T, A)) {
                var R = s(T);
                y.push(R), D();
              }
            },
            comment: function(T) {
              S(T);
            }
          });
          var C = y.join("");
          return C = c(C), C;
        }
        n.default = m;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(132)), a = e(t(121));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.TOP_LEVEL_TAGS = n.EMPTY_TAGS = n.NECESSARY_ATTRS = n.IGNORE_TAGS = void 0, n.IGNORE_TAGS = new r.default(["doctype", "!doctype", "html", "head", "meta", "body", "script", "style", "link", "frame", "iframe", "title", "svg", "center", "o:p"]), n.NECESSARY_ATTRS = new a.default([["img", ["src", "alt"]], ["a", ["href", "target"]], ["td", ["colspan", "rowspan"]], ["th", ["colspan", "rowspan"]]]), n.EMPTY_TAGS = new r.default(["area", "base", "basefont", "br", "col", "hr", "img", "input", "isindex", "embed"]), n.TOP_LEVEL_TAGS = new r.default(["h1", "h2", "h3", "h4", "h5", "p", "ul", "ol", "table", "blockquote", "pre", "hr", "form"]);
      },
      function(o, n, t) {
        var e = t(295);
        o.exports = e;
      },
      function(o, n, t) {
        t(296), t(61), t(50), t(54);
        var e = t(9);
        o.exports = e.Set;
      },
      function(o, n, t) {
        var e = t(122), i = t(124);
        o.exports = e("Set", function(r) {
          return function() {
            return r(this, arguments.length ? arguments[0] : void 0);
          };
        }, i);
      },
      function(o, n) {
        function t() {
        }
        t.prototype = {
          handler: null,
          startTagRe: /^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*((\"[^"]*\")|(\'[^']*\')|[^>\s]+))?)*)\s*\/?\s*>/m,
          endTagRe: /^<\/([^>\s]+)[^>]*>/m,
          attrRe: /([^=\s]+)(\s*=\s*((\"([^"]*)\")|(\'([^']*)\')|[^>\s]+))?/gm,
          parse: function(e, i) {
            i && (this.contentHandler = i);
            for (var r, a, u, g = !1, d = this; e.length > 0; )
              e.substring(0, 4) == "<!--" ? (u = e.indexOf("-->"), u != -1 ? (this.contentHandler.comment(e.substring(4, u)), e = e.substring(u + 3), g = !1) : g = !0) : e.substring(0, 2) == "</" ? this.endTagRe.test(e) ? (r = RegExp.lastMatch, a = RegExp.rightContext, r.replace(this.endTagRe, function() {
                return d.parseEndTag.apply(d, arguments);
              }), e = a, g = !1) : g = !0 : e.charAt(0) == "<" && (this.startTagRe.test(e) ? (r = RegExp.lastMatch, a = RegExp.rightContext, r.replace(this.startTagRe, function() {
                return d.parseStartTag.apply(d, arguments);
              }), e = a, g = !1) : g = !0), g && (u = e.indexOf("<"), u == -1 ? (this.contentHandler.characters(e), e = "") : (this.contentHandler.characters(e.substring(0, u)), e = e.substring(u))), g = !0;
          },
          parseStartTag: function(e, i, r) {
            var a = this.parseAttributes(i, r);
            this.contentHandler.startElement(i, a);
          },
          parseEndTag: function(e, i) {
            this.contentHandler.endElement(i);
          },
          parseAttributes: function(e, i) {
            var r = this, a = [];
            return i.replace(this.attrRe, function(u, g, d, h, c, l, f, s) {
              a.push(r.parseAttribute(e, u, g, d, h, c, l, f, s));
            }), a;
          },
          parseAttribute: function(e, i, r) {
            var a = "";
            arguments[7] ? a = arguments[8] : arguments[5] ? a = arguments[6] : arguments[3] && (a = arguments[4]);
            var u = !a && !arguments[3];
            return { name: r, value: u ? null : a };
          }
        }, o.exports = t;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        function r(a, u) {
          function g(d) {
            a.selection.createRangeByElem(d), a.selection.restoreSelection();
          }
          u.push(g);
        }
        n.default = r;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = t(6), g = a.__importDefault(t(3));
        function d(h) {
          var c = [], l = h.childNodes() || [];
          return (0, r.default)(l).call(l, function(f) {
            var s, m = f.nodeType;
            if (m === 3 && (s = f.textContent || "", s = u.replaceHtmlSymbol(s)), m === 1) {
              s = {}, s = s, s.tag = f.nodeName.toLowerCase();
              for (var v = [], p = f.attributes, A = p.length || 0, y = 0; y < A; y++) {
                var x = p[y];
                v.push({
                  name: x.name,
                  value: x.value
                });
              }
              s.attrs = v, s.children = d(g.default(f));
            }
            s && c.push(s);
          }), c;
        }
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(92)), r = e(t(1)), a = e(t(4));
        (0, r.default)(n, "__esModule", {
          value: !0
        });
        var u = t(2), g = u.__importDefault(t(3));
        function d(h, c) {
          c === void 0 && (c = document.createElement("div"));
          var l = c;
          return (0, a.default)(h).call(h, function(f) {
            var s;
            if (typeof f == "string" && (s = document.createTextNode(f)), (0, i.default)(f) === "object") {
              var m;
              s = document.createElement(f.tag), (0, a.default)(m = f.attrs).call(m, function(v) {
                g.default(s).attr(v.name, v.value);
              }), f.children && f.children.length > 0 && d(f.children, s.getRootNode());
            }
            s && l.appendChild(s);
          }), g.default(l);
        }
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(89)), a = e(t(70)), u = e(t(28)), g = e(t(302)), d = e(t(4)), h = e(t(94)), c = e(t(133)), l = e(t(46)), f = e(t(57));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var s = t(2), m = s.__importDefault(t(87)), v = s.__importDefault(t(314)), p = s.__importDefault(t(3)), A = function() {
          function y(x) {
            this.editor = x, this.menuList = [], this.constructorList = v.default;
          }
          return y.prototype.extend = function(x, S) {
            !S || typeof S != "function" || (this.constructorList[x] = S);
          }, y.prototype.init = function() {
            var x, S, D = this, I = this.editor.config, C = I.excludeMenus;
            (0, r.default)(C) === !1 && (C = []), I.menus = (0, a.default)(x = I.menus).call(x, function(L) {
              return (0, u.default)(C).call(C, L) === !1;
            });
            var E = (0, g.default)(m.default.globalCustomMenuConstructorList);
            E = (0, a.default)(E).call(E, function(L) {
              return (0, u.default)(C).call(C, L);
            }), (0, d.default)(E).call(E, function(L) {
              delete m.default.globalCustomMenuConstructorList[L];
            }), (0, d.default)(S = I.menus).call(S, function(L) {
              var b = D.constructorList[L];
              D._initMenuList(L, b);
            });
            for (var T = 0, R = (0, h.default)(m.default.globalCustomMenuConstructorList); T < R.length; T++) {
              var N = R[T], M = N[0], B = N[1], F = B;
              this._initMenuList(M, F);
            }
            this._addToToolbar(), I.showMenuTooltips && this._bindMenuTooltips();
          }, y.prototype._initMenuList = function(x, S) {
            var D;
            if (!(S == null || typeof S != "function"))
              if ((0, c.default)(D = this.menuList).call(D, function(C) {
                return C.key === x;
              }))
                console.warn("\u83DC\u5355\u540D\u79F0\u91CD\u590D:" + x);
              else {
                var I = new S(this.editor);
                I.key = x, this.menuList.push(I);
              }
          }, y.prototype._bindMenuTooltips = function() {
            var x = this.editor, S = x.$toolbarElem, D = x.config, I = D.menuTooltipPosition, C = p.default('<div class="w-e-menu-tooltip w-e-menu-tooltip-' + I + `">
            <div class="w-e-menu-tooltip-item-wrapper">
              <div></div>
            </div>
          </div>`);
            C.css("visibility", "hidden"), S.append(C), C.css("z-index", x.zIndex.get("tooltip"));
            var E = 0;
            function T() {
              E && clearTimeout(E);
            }
            function R() {
              T(), C.css("visibility", "hidden");
            }
            S.on("mouseover", function(N) {
              var M = N.target, B = p.default(M), F, L;
              if (B.isContain(S)) {
                R();
                return;
              }
              if (B.parentUntil(".w-e-droplist") != null)
                R();
              else if (B.attr("data-title"))
                F = B.attr("data-title"), L = B;
              else {
                var b = B.parentUntil(".w-e-menu");
                b != null && (F = b.attr("data-title"), L = b);
              }
              if (F && L) {
                T();
                var $ = L.getOffsetData();
                C.text(x.i18next.t("menus.title." + F));
                var H = C.getOffsetData(), j = $.left + $.width / 2 - H.width / 2;
                C.css("left", j + "px"), I === "up" ? C.css("top", $.top - H.height - 8 + "px") : I === "down" && C.css("top", $.top + $.height + 8 + "px"), E = (0, l.default)(function() {
                  C.css("visibility", "visible");
                }, 200);
              } else
                R();
            }).on("mouseleave", function() {
              R();
            });
          }, y.prototype._addToToolbar = function() {
            var x, S = this.editor, D = S.$toolbarElem;
            (0, d.default)(x = this.menuList).call(x, function(I) {
              var C = I.$elem;
              C && D.append(C);
            });
          }, y.prototype.menuFind = function(x) {
            for (var S = this.menuList, D = 0, I = S.length; D < I; D++)
              if (S[D].key === x)
                return S[D];
            return S[0];
          }, y.prototype.changeActive = function() {
            var x;
            (0, d.default)(x = this.menuList).call(x, function(S) {
              var D;
              (0, l.default)((0, f.default)(D = S.tryChangeActive).call(D, S), 100);
            });
          }, y;
        }();
        n.default = A;
      },
      function(o, n, t) {
        o.exports = t(303);
      },
      function(o, n, t) {
        var e = t(304);
        o.exports = e;
      },
      function(o, n, t) {
        t(305);
        var e = t(9);
        o.exports = e.Object.keys;
      },
      function(o, n, t) {
        var e = t(5), i = t(31), r = t(52), a = t(11), u = a(function() {
          r(1);
        });
        e({ target: "Object", stat: !0, forced: u }, {
          keys: function(d) {
            return r(i(d));
          }
        });
      },
      function(o, n, t) {
        var e = t(307);
        o.exports = e;
      },
      function(o, n, t) {
        t(308);
        var e = t(9);
        o.exports = e.Object.entries;
      },
      function(o, n, t) {
        var e = t(5), i = t(309).entries;
        e({ target: "Object", stat: !0 }, {
          entries: function(a) {
            return i(a);
          }
        });
      },
      function(o, n, t) {
        var e = t(14), i = t(52), r = t(30), a = t(59).f, u = function(g) {
          return function(d) {
            for (var h = r(d), c = i(h), l = c.length, f = 0, s = [], m; l > f; )
              m = c[f++], (!e || a.call(h, m)) && s.push(g ? [m, h[m]] : h[m]);
            return s;
          };
        };
        o.exports = {
          entries: u(!0),
          values: u(!1)
        };
      },
      function(o, n, t) {
        var e = t(311);
        o.exports = e;
      },
      function(o, n, t) {
        var e = t(312), i = Array.prototype;
        o.exports = function(r) {
          var a = r.some;
          return r === i || r instanceof Array && a === i.some ? e : a;
        };
      },
      function(o, n, t) {
        t(313);
        var e = t(15);
        o.exports = e("Array").some;
      },
      function(o, n, t) {
        var e = t(5), i = t(32).some, r = t(67), a = t(22), u = r("some"), g = a("some");
        e({ target: "Array", proto: !0, forced: !u || !g }, {
          some: function(h) {
            return i(this, h, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(315)), u = r.__importDefault(t(316)), g = r.__importDefault(t(321)), d = r.__importDefault(t(326)), h = r.__importDefault(t(327)), c = r.__importDefault(t(328)), l = r.__importDefault(t(329)), f = r.__importDefault(t(331)), s = r.__importDefault(t(333)), m = r.__importDefault(t(334)), v = r.__importDefault(t(337)), p = r.__importDefault(t(338)), A = r.__importDefault(t(339)), y = r.__importDefault(t(350)), x = r.__importDefault(t(365)), S = r.__importDefault(t(369)), D = r.__importDefault(t(137)), I = r.__importDefault(t(378)), C = r.__importDefault(t(380)), E = r.__importDefault(t(381)), T = r.__importDefault(t(382)), R = r.__importDefault(t(401)), N = r.__importDefault(t(406)), M = r.__importDefault(t(409));
        n.default = {
          bold: a.default,
          head: u.default,
          italic: d.default,
          link: g.default,
          underline: h.default,
          strikeThrough: c.default,
          fontName: l.default,
          fontSize: f.default,
          justify: s.default,
          quote: m.default,
          backColor: v.default,
          foreColor: p.default,
          video: A.default,
          image: y.default,
          indent: x.default,
          emoticon: S.default,
          list: D.default,
          lineHeight: I.default,
          undo: C.default,
          redo: E.default,
          table: T.default,
          code: R.default,
          splitLine: N.default,
          todo: M.default
        };
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(23)), u = r.__importDefault(t(3)), g = function(d) {
          r.__extends(h, d);
          function h(c) {
            var l = this, f = u.default(`<div class="w-e-menu" data-title="\u52A0\u7C97">
                <i class="w-e-icon-bold"></i>
            </div>`);
            return l = d.call(this, f, c) || this, l;
          }
          return h.prototype.clickHandler = function() {
            var c = this.editor, l = c.selection.isSelectionEmpty();
            l && c.selection.createEmptyRange(), c.cmd.do("bold"), l && (c.selection.collapseRange(), c.selection.restoreSelection());
          }, h.prototype.tryChangeActive = function() {
            var c = this.editor;
            c.cmd.queryCommandState("bold") ? this.active() : this.unActive();
          }, h;
        }(a.default);
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(27)), a = e(t(29)), u = e(t(4)), g = e(t(317)), d = e(t(28));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var h = t(2), c = h.__importDefault(t(24)), l = h.__importDefault(t(3)), f = t(6), s = t(7), m = function(v) {
          h.__extends(p, v);
          function p(A) {
            var y = this, x = l.default('<div class="w-e-menu" data-title="\u6807\u9898"><i class="w-e-icon-header"></i></div>'), S = {
              width: 100,
              title: "\u8BBE\u7F6E\u6807\u9898",
              type: "list",
              list: [{
                $elem: l.default("<h1>H1</h1>"),
                value: "<h1>"
              }, {
                $elem: l.default("<h2>H2</h2>"),
                value: "<h2>"
              }, {
                $elem: l.default("<h3>H3</h3>"),
                value: "<h3>"
              }, {
                $elem: l.default("<h4>H4</h4>"),
                value: "<h4>"
              }, {
                $elem: l.default("<h5>H5</h5>"),
                value: "<h5>"
              }, {
                $elem: l.default("<p>" + A.i18next.t("menus.dropListMenu.head.\u6B63\u6587") + "</p>"),
                value: "<p>"
              }],
              clickHandler: function(C) {
                y.command(C);
              }
            };
            y = v.call(this, x, A, S) || this;
            var D = A.config.onCatalogChange;
            return D && (y.oldCatalogs = [], y.addListenerCatalog(), y.getCatalogs()), y;
          }
          return p.prototype.command = function(A) {
            var y = this.editor, x = y.selection.getSelectionContainerElem();
            if (x && y.$textElem.equal(x))
              this.setMultilineHead(A);
            else {
              var S;
              if ((0, r.default)(S = ["OL", "UL", "LI", "TABLE", "TH", "TR", "CODE", "HR"]).call(S, l.default(x).getNodeName()) > -1)
                return;
              y.cmd.do("formatBlock", A);
            }
            A !== "<p>" && this.addUidForSelectionElem();
          }, p.prototype.addUidForSelectionElem = function() {
            var A = this.editor, y = A.selection.getSelectionContainerElem(), x = f.getRandomCode();
            l.default(y).attr("id", x);
          }, p.prototype.addListenerCatalog = function() {
            var A = this, y = this.editor;
            y.txt.eventHooks.changeEvents.push(function() {
              A.getCatalogs();
            });
          }, p.prototype.getCatalogs = function() {
            var A = this.editor, y = this.editor.$textElem, x = A.config.onCatalogChange, S = (0, a.default)(y).call(y, "h1,h2,h3,h4,h5"), D = [];
            (0, u.default)(S).call(S, function(I, C) {
              var E = l.default(I), T = E.attr("id"), R = E.getNodeName(), N = E.text();
              T || (T = f.getRandomCode(), E.attr("id", T)), N && D.push({
                tag: R,
                id: T,
                text: N
              });
            }), (0, g.default)(this.oldCatalogs) !== (0, g.default)(D) && (this.oldCatalogs = D, x && x(D));
          }, p.prototype.setMultilineHead = function(A) {
            var y = this, x, S, D = this.editor, I = D.selection, C = (x = I.getSelectionContainerElem()) === null || x === void 0 ? void 0 : x.elems[0], E = ["IMG", "VIDEO", "TABLE", "TH", "TR", "UL", "OL", "PRE", "HR", "BLOCKQUOTE"], T = l.default(I.getSelectionStartElem()), R = l.default(I.getSelectionEndElem());
            R.elems[0].outerHTML === l.default(s.EMPTY_P).elems[0].outerHTML && !R.elems[0].nextSibling && (R = R.prev());
            var N = [];
            N.push(T.getNodeTop(D));
            var M = [], B = (S = I.getRange()) === null || S === void 0 ? void 0 : S.commonAncestorContainer.childNodes;
            B == null || (0, u.default)(B).call(B, function(b, $) {
              b === N[0].getNode() && M.push($), b === R.getNodeTop(D).getNode() && M.push($);
            });
            for (var F = 0; N[F].getNode() !== R.getNodeTop(D).getNode(); ) {
              if (!N[F].elems[0])
                return;
              var L = l.default(N[F].next().getNode());
              N.push(L), F++;
            }
            N == null || (0, u.default)(N).call(N, function(b, $) {
              if (!y.hasTag(b, E)) {
                var H = l.default(A), j = b.parent().getNode();
                H.html("" + b.html()), j.insertBefore(H.getNode(), b.getNode()), b.remove();
              }
            }), I.createRangeByElems(C.children[M[0]], C.children[M[1]]);
          }, p.prototype.hasTag = function(A, y) {
            var x = this, S;
            if (!A)
              return !1;
            if ((0, d.default)(y).call(y, A == null ? void 0 : A.getNodeName()))
              return !0;
            var D = !1;
            return (S = A.children()) === null || S === void 0 || (0, u.default)(S).call(S, function(I) {
              D = x.hasTag(l.default(I), y);
            }), D;
          }, p.prototype.tryChangeActive = function() {
            var A = this.editor, y = /^h/i, x = A.cmd.queryCommandValue("formatBlock");
            y.test(x) ? this.active() : this.unActive();
          }, p;
        }(c.default);
        n.default = m;
      },
      function(o, n, t) {
        o.exports = t(318);
      },
      function(o, n, t) {
        var e = t(319);
        o.exports = e;
      },
      function(o, n, t) {
        t(320);
        var e = t(9);
        e.JSON || (e.JSON = { stringify: JSON.stringify }), o.exports = function(r, a, u) {
          return e.JSON.stringify.apply(null, arguments);
        };
      },
      function(o, n, t) {
        var e = t(5), i = t(36), r = t(11), a = i("JSON", "stringify"), u = /[\uD800-\uDFFF]/g, g = /^[\uD800-\uDBFF]$/, d = /^[\uDC00-\uDFFF]$/, h = function(l, f, s) {
          var m = s.charAt(f - 1), v = s.charAt(f + 1);
          return g.test(l) && !d.test(v) || d.test(l) && !g.test(m) ? "\\u" + l.charCodeAt(0).toString(16) : l;
        }, c = r(function() {
          return a("\uDF06\uD834") !== '"\\udf06\\ud834"' || a("\uDEAD") !== '"\\udead"';
        });
        a && e({ target: "JSON", stat: !0, forced: c }, {
          stringify: function(f, s, m) {
            var v = a.apply(null, arguments);
            return typeof v == "string" ? v.replace(u, h) : v;
          }
        });
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(17));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = a.__importDefault(t(38)), g = a.__importDefault(t(3)), d = a.__importDefault(t(322)), h = a.__importStar(t(96)), c = a.__importDefault(t(33)), l = a.__importDefault(t(324)), f = t(7), s = function(m) {
          a.__extends(v, m);
          function v(p) {
            var A = this, y = g.default('<div class="w-e-menu" data-title="\u94FE\u63A5"><i class="w-e-icon-link"></i></div>');
            return A = m.call(this, y, p) || this, l.default(p), A;
          }
          return v.prototype.clickHandler = function() {
            var p = this.editor, A, y = p.selection.getSelectionContainerElem(), x = p.$textElem, S = x.html(), D = (0, r.default)(S).call(S);
            if (D === f.EMPTY_P) {
              var I = x.children();
              p.selection.createRangeByElem(I, !0, !0), y = p.selection.getSelectionContainerElem();
            }
            if (!(y && p.$textElem.equal(y)))
              if (this.isActive) {
                var C = "", E = "";
                if (A = p.selection.getSelectionContainerElem(), !A)
                  return;
                if (A.getNodeName() !== "A") {
                  var T = h.getParentNodeA(A);
                  A = g.default(T);
                }
                C = A.elems[0].innerText, E = A.attr("href"), this.createPanel(C, E);
              } else
                p.selection.isSelectionEmpty() ? this.createPanel("", "") : this.createPanel(p.selection.getSelectionText(), "");
          }, v.prototype.createPanel = function(p, A) {
            var y = d.default(this.editor, p, A), x = new c.default(this, y);
            x.create();
          }, v.prototype.tryChangeActive = function() {
            var p = this.editor;
            h.default(p) ? this.active() : this.unActive();
          }, v;
        }(u.default);
        n.default = s;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(28)), a = e(t(17)), u = e(t(29));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var g = t(2), d = t(6), h = g.__importDefault(t(3)), c = g.__importStar(t(96)), l = t(323);
        function f(s, m, v) {
          var p = d.getRandom("input-link"), A = d.getRandom("input-text"), y = d.getRandom("btn-ok"), x = d.getRandom("btn-del"), S = c.default(s) ? "inline-block" : "none", D;
          function I() {
            if (!!c.default(s)) {
              var N = s.selection.getSelectionContainerElem();
              !N || (s.selection.createRangeByElem(N), s.selection.restoreSelection(), D = N);
            }
          }
          function C(N, M) {
            var B = N.replace(/</g, "&lt;").replace(/>/g, "&gt;"), F = h.default('<a target="_blank">' + B + "</a>"), L = F.elems[0];
            L.innerText = N, L.href = M, c.default(s) && I(), s.cmd.do("insertElem", F);
          }
          function E() {
            if (!!c.default(s))
              if (I(), D.getNodeName() === "A") {
                var N, M = D.elems[0], B = M.parentElement;
                B && (0, r.default)(N = c.EXTRA_TAG).call(N, B.nodeName) ? B.innerHTML = M.innerHTML : s.cmd.do("insertHTML", "<span>" + M.innerHTML + "</span>");
              } else {
                var F = c.getParentNodeA(D), L = F.innerHTML;
                s.cmd.do("insertHTML", "<span>" + L + "</span>");
              }
          }
          function T(N, M) {
            var B = s.config.linkCheck(N, M);
            if (B !== void 0) {
              if (B === !0)
                return !0;
              s.config.customAlert(B, "warning");
            }
            return !1;
          }
          var R = {
            width: 300,
            height: 0,
            tabs: [{
              title: s.i18next.t("menus.panelMenus.link.\u94FE\u63A5"),
              tpl: `<div>
                        <input
                            id="` + A + `"
                            type="text"
                            class="block"
                            placeholder="` + s.i18next.t("menus.panelMenus.link.\u94FE\u63A5\u6587\u5B57") + `"/>
                        </td>
                        <input
                            id="` + p + `"
                            type="text"
                            class="block"
                            placeholder="` + s.i18next.t("\u5982") + ` https://..."/>
                        </td>
                        <div class="w-e-button-container">
                            <button type="button" id="` + y + `" class="right">
                                ` + s.i18next.t("\u63D2\u5165") + `
                            </button>
                            <button type="button" id="` + x + '" class="gray right" style="display:' + S + `">
                                ` + s.i18next.t("menus.panelMenus.link.\u53D6\u6D88\u94FE\u63A5") + `
                            </button>
                        </div>
                    </div>`,
              events: [
                {
                  selector: "#" + y,
                  type: "click",
                  fn: function() {
                    var M, B, F, L, b, $ = s.selection.getSelectionContainerElem(), H = $ == null ? void 0 : $.elems[0];
                    s.selection.restoreSelection();
                    var j = s.selection.getSelectionRangeTopNodes()[0].getNode(), V = window.getSelection(), U = h.default("#" + p), W = h.default("#" + A), K = (0, a.default)(M = U.val()).call(M), w = (0, a.default)(B = W.val()).call(B), Y = "";
                    V && !(V != null && V.isCollapsed) && (Y = (L = l.insertHtml(V, j)) === null || L === void 0 ? void 0 : (0, a.default)(L).call(L));
                    var J = Y == null ? void 0 : Y.replace(/<.*?>/g, ""), k = (b = J == null ? void 0 : J.length) !== null && b !== void 0 ? b : 0;
                    if (k <= w.length) {
                      var nt = w.substring(0, k), at = w.substring(k);
                      J === nt && (w = J + at);
                    }
                    if (!!K && (w || (w = K), !!T(w, K))) {
                      if ((H == null ? void 0 : H.nodeName) === "A")
                        return H.setAttribute("href", K), H.innerText = w, !0;
                      if ((H == null ? void 0 : H.nodeName) !== "A" && (0, r.default)(F = c.EXTRA_TAG).call(F, H.nodeName)) {
                        var ct = c.getParentNodeA($);
                        if (ct)
                          return ct.setAttribute("href", K), H.innerText = w, !0;
                      }
                      return C(w, K), !0;
                    }
                  },
                  bindEnter: !0
                },
                {
                  selector: "#" + x,
                  type: "click",
                  fn: function() {
                    return E(), !0;
                  }
                }
              ]
            }],
            setLinkValue: function(M, B) {
              var F = "", L = "", b;
              B === "text" && (F = "#" + A, L = m), B === "link" && (F = "#" + p, L = v), b = (0, u.default)(M).call(M, F).elems[0], b.value = L;
            }
          };
          return R;
        }
        n.default = f;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.insertHtml = n.createPartHtml = n.makeHtmlString = n.getTopNode = void 0;
        function a(l, f) {
          var s = l, m = l;
          do {
            if (s.textContent === f)
              break;
            m = s, s.parentNode && (s = s == null ? void 0 : s.parentNode);
          } while ((s == null ? void 0 : s.nodeName) !== "P");
          return m;
        }
        n.getTopNode = a;
        function u(l, f) {
          var s = l.nodeName, m = "";
          if (l.nodeType === 3 || /^(h|H)[1-6]$/.test(s))
            return f;
          if (l.nodeType === 1) {
            var v = l.getAttribute("style"), p = l.getAttribute("face"), A = l.getAttribute("color");
            v && (m = m + (' style="' + v + '"')), p && (m = m + (' face="' + p + '"')), A && (m = m + (' color="' + A + '"'));
          }
          return s = s.toLowerCase(), "<" + s + m + ">" + f + "</" + s + ">";
        }
        n.makeHtmlString = u;
        function g(l, f, s, m) {
          var v, p = (v = f.textContent) === null || v === void 0 ? void 0 : v.substring(s, m), A = f, y = "";
          do
            y = u(A, p != null ? p : ""), p = y, A = A == null ? void 0 : A.parentElement;
          while (A && A.textContent !== l);
          return y;
        }
        n.createPartHtml = g;
        function d(l, f) {
          var s, m, v, p, A, y = l.anchorNode, x = l.focusNode, S = l.anchorOffset, D = l.focusOffset, I = (s = f.textContent) !== null && s !== void 0 ? s : "", C = h(f), E = "", T = "", R = "", N = "", M = y, B = x, F = y;
          if (y != null && y.isEqualNode(x != null ? x : null)) {
            var L = g(I, y, S, D);
            return L = c(C, L), L;
          }
          for (y && (T = g(I, y, S != null ? S : 0)), x && (N = g(I, x, 0, D)), y && (M = a(y, I)), x && (B = a(x, I)), F = (m = M == null ? void 0 : M.nextSibling) !== null && m !== void 0 ? m : y; !(F != null && F.isEqualNode(B != null ? B : null)); ) {
            var b = F == null ? void 0 : F.nodeName;
            if (b === "#text")
              R = R + (F == null ? void 0 : F.textContent);
            else {
              var $ = (p = (v = F == null ? void 0 : F.firstChild) === null || v === void 0 ? void 0 : v.parentElement) === null || p === void 0 ? void 0 : p.innerHTML;
              F && (R = R + u(F, $ != null ? $ : ""));
            }
            var H = (A = F == null ? void 0 : F.nextSibling) !== null && A !== void 0 ? A : F;
            if (H === F)
              break;
            F = H;
          }
          return E = "" + T + R + N, E = c(C, E), E;
        }
        n.insertHtml = d;
        function h(l) {
          for (var f, s = (f = l.textContent) !== null && f !== void 0 ? f : "", m = []; (l == null ? void 0 : l.textContent) === s; )
            l.nodeName !== "P" && l.nodeName !== "TABLE" && m.push(l), l = l.childNodes[0];
          return m;
        }
        function c(l, f) {
          return (0, r.default)(l).call(l, function(s) {
            f = u(s, f);
          }), f;
        }
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(325));
        function u(g) {
          a.default(g);
        }
        n.default = u;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(28));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = a.__importDefault(t(3)), g = a.__importDefault(t(39)), d = t(96);
        function h(l) {
          var f;
          function s(v) {
            var p = [{
              $elem: u.default("<span>" + l.i18next.t("menus.panelMenus.link.\u67E5\u770B\u94FE\u63A5") + "</span>"),
              onClick: function(y, x) {
                var S = x.attr("href");
                return window.open(S, "_target"), !0;
              }
            }, {
              $elem: u.default("<span>" + l.i18next.t("menus.panelMenus.link.\u53D6\u6D88\u94FE\u63A5") + "</span>"),
              onClick: function(y, x) {
                var S, D;
                y.selection.createRangeByElem(x), y.selection.restoreSelection();
                var I = x.childNodes();
                if ((I == null ? void 0 : I.getNodeName()) === "IMG") {
                  var C = (D = (S = y.selection.getSelectionContainerElem()) === null || S === void 0 ? void 0 : S.children()) === null || D === void 0 ? void 0 : D.elems[0].children[0];
                  y.cmd.do("insertHTML", `<img 
                                src=` + (C == null ? void 0 : C.getAttribute("src")) + ` 
                                style=` + (C == null ? void 0 : C.getAttribute("style")) + ">");
                } else {
                  var E, T = x.elems[0], R = T.innerHTML, N = T.parentElement;
                  N && (0, r.default)(E = d.EXTRA_TAG).call(E, N.nodeName) ? N.innerHTML = R : y.cmd.do("insertHTML", "<span>" + R + "</span>");
                }
                return !0;
              }
            }];
            f = new g.default(l, v, p), f.create();
          }
          function m() {
            f && (f.remove(), f = null);
          }
          return {
            showLinkTooltip: s,
            hideLinkTooltip: m
          };
        }
        function c(l) {
          var f = h(l), s = f.showLinkTooltip, m = f.hideLinkTooltip;
          l.txt.eventHooks.linkClickEvents.push(s), l.txt.eventHooks.clickEvents.push(m), l.txt.eventHooks.keyupEvents.push(m), l.txt.eventHooks.toolbarClickEvents.push(m), l.txt.eventHooks.menuClickEvents.push(m), l.txt.eventHooks.textScrollEvents.push(m);
        }
        n.default = c;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(23)), u = r.__importDefault(t(3)), g = function(d) {
          r.__extends(h, d);
          function h(c) {
            var l = this, f = u.default(`<div class="w-e-menu" data-title="\u659C\u4F53">
                <i class="w-e-icon-italic"></i>
            </div>`);
            return l = d.call(this, f, c) || this, l;
          }
          return h.prototype.clickHandler = function() {
            var c = this.editor, l = c.selection.isSelectionEmpty();
            l && c.selection.createEmptyRange(), c.cmd.do("italic"), l && (c.selection.collapseRange(), c.selection.restoreSelection());
          }, h.prototype.tryChangeActive = function() {
            var c = this.editor;
            c.cmd.queryCommandState("italic") ? this.active() : this.unActive();
          }, h;
        }(a.default);
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(23)), u = r.__importDefault(t(3)), g = function(d) {
          r.__extends(h, d);
          function h(c) {
            var l = this, f = u.default(`<div class="w-e-menu" data-title="\u4E0B\u5212\u7EBF">
                <i class="w-e-icon-underline"></i>
            </div>`);
            return l = d.call(this, f, c) || this, l;
          }
          return h.prototype.clickHandler = function() {
            var c = this.editor, l = c.selection.isSelectionEmpty();
            l && c.selection.createEmptyRange(), c.cmd.do("underline"), l && (c.selection.collapseRange(), c.selection.restoreSelection());
          }, h.prototype.tryChangeActive = function() {
            var c = this.editor;
            c.cmd.queryCommandState("underline") ? this.active() : this.unActive();
          }, h;
        }(a.default);
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(23)), u = r.__importDefault(t(3)), g = function(d) {
          r.__extends(h, d);
          function h(c) {
            var l = this, f = u.default(`<div class="w-e-menu" data-title="\u5220\u9664\u7EBF">
                <i class="w-e-icon-strikethrough"></i>
            </div>`);
            return l = d.call(this, f, c) || this, l;
          }
          return h.prototype.clickHandler = function() {
            var c = this.editor, l = c.selection.isSelectionEmpty();
            l && c.selection.createEmptyRange(), c.cmd.do("strikeThrough"), l && (c.selection.collapseRange(), c.selection.restoreSelection());
          }, h.prototype.tryChangeActive = function() {
            var c = this.editor;
            c.cmd.queryCommandState("strikeThrough") ? this.active() : this.unActive();
          }, h;
        }(a.default);
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(24)), u = r.__importDefault(t(3)), g = r.__importDefault(t(330)), d = function(h) {
          r.__extends(c, h);
          function c(l) {
            var f = this, s = u.default(`<div class="w-e-menu" data-title="\u5B57\u4F53">
                <i class="w-e-icon-font"></i>
            </div>`), m = new g.default(l.config.fontNames), v = {
              width: 100,
              title: "\u8BBE\u7F6E\u5B57\u4F53",
              type: "list",
              list: m.getItemList(),
              clickHandler: function(A) {
                f.command(A);
              }
            };
            return f = h.call(this, s, l, v) || this, f;
          }
          return c.prototype.command = function(l) {
            var f, s = this.editor, m = s.selection.isSelectionEmpty(), v = (f = s.selection.getSelectionContainerElem()) === null || f === void 0 ? void 0 : f.elems[0];
            if (v != null) {
              var p = (v == null ? void 0 : v.nodeName.toLowerCase()) !== "p", A = (v == null ? void 0 : v.getAttribute("face")) === l;
              if (m) {
                if (p && !A) {
                  var y = s.selection.getSelectionRangeTopNodes();
                  s.selection.createRangeByElem(y[0]), s.selection.moveCursor(y[0].elems[0]);
                }
                s.selection.setRangeToElem(v), s.selection.createEmptyRange();
              }
              s.cmd.do("fontName", l), m && (s.selection.collapseRange(), s.selection.restoreSelection());
            }
          }, c.prototype.tryChangeActive = function() {
          }, c;
        }(a.default);
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = a.__importDefault(t(3)), g = function() {
          function d(h) {
            var c = this;
            this.itemList = [], (0, r.default)(h).call(h, function(l) {
              var f = typeof l == "string" ? l : l.value, s = typeof l == "string" ? l : l.name;
              c.itemList.push({
                $elem: u.default(`<p style="font-family:'` + f + `'">` + s + "</p>"),
                value: s
              });
            });
          }
          return d.prototype.getItemList = function() {
            return this.itemList;
          }, d;
        }();
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(24)), u = r.__importDefault(t(3)), g = r.__importDefault(t(332)), d = function(h) {
          r.__extends(c, h);
          function c(l) {
            var f = this, s = u.default(`<div class="w-e-menu" data-title="\u5B57\u53F7">
                <i class="w-e-icon-text-heigh"></i>
            </div>`), m = new g.default(l.config.fontSizes), v = {
              width: 160,
              title: "\u8BBE\u7F6E\u5B57\u53F7",
              type: "list",
              list: m.getItemList(),
              clickHandler: function(A) {
                f.command(A);
              }
            };
            return f = h.call(this, s, l, v) || this, f;
          }
          return c.prototype.command = function(l) {
            var f, s = this.editor, m = s.selection.isSelectionEmpty(), v = (f = s.selection.getSelectionContainerElem()) === null || f === void 0 ? void 0 : f.elems[0];
            v != null && (s.cmd.do("fontSize", l), m && (s.selection.collapseRange(), s.selection.restoreSelection()));
          }, c.prototype.tryChangeActive = function() {
          }, c;
        }(a.default);
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(3)), u = function() {
          function g(d) {
            this.itemList = [];
            for (var h in d) {
              var c = d[h];
              this.itemList.push({
                $elem: a.default('<p style="font-size:' + h + '">' + c.name + "</p>"),
                value: c.value
              });
            }
          }
          return g.prototype.getItemList = function() {
            return this.itemList;
          }, g;
        }();
        n.default = u;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4)), a = e(t(27));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var u = t(2), g = u.__importDefault(t(24)), d = u.__importDefault(t(3)), h = ["LI"], c = ["BLOCKQUOTE"], l = function(f) {
          u.__extends(s, f);
          function s(m) {
            var v = this, p = d.default('<div class="w-e-menu" data-title="\u5BF9\u9F50"><i class="w-e-icon-paragraph-left"></i></div>'), A = {
              width: 100,
              title: "\u5BF9\u9F50\u65B9\u5F0F",
              type: "list",
              list: [{
                $elem: d.default(`<p>
                            <i class="w-e-icon-paragraph-left w-e-drop-list-item"></i>
                            ` + m.i18next.t("menus.dropListMenu.justify.\u9760\u5DE6") + `
                        </p>`),
                value: "left"
              }, {
                $elem: d.default(`<p>
                            <i class="w-e-icon-paragraph-center w-e-drop-list-item"></i>
                            ` + m.i18next.t("menus.dropListMenu.justify.\u5C45\u4E2D") + `
                        </p>`),
                value: "center"
              }, {
                $elem: d.default(`<p>
                            <i class="w-e-icon-paragraph-right w-e-drop-list-item"></i>
                            ` + m.i18next.t("menus.dropListMenu.justify.\u9760\u53F3") + `
                        </p>`),
                value: "right"
              }, {
                $elem: d.default(`<p>
                            <i class="w-e-icon-paragraph-justify w-e-drop-list-item"></i>
                            ` + m.i18next.t("menus.dropListMenu.justify.\u4E24\u7AEF") + `
                        </p>`),
                value: "justify"
              }],
              clickHandler: function(x) {
                v.command(x);
              }
            };
            return v = f.call(this, p, m, A) || this, v;
          }
          return s.prototype.command = function(m) {
            var v = this.editor, p = v.selection, A = p.getSelectionContainerElem();
            p.saveRange();
            var y = v.selection.getSelectionRangeTopNodes();
            if (A != null && A.length)
              if (this.isSpecialNode(A, y[0]) || this.isSpecialTopNode(y[0])) {
                var x = this.getSpecialNodeUntilTop(A, y[0]);
                if (x == null)
                  return;
                d.default(x).css("text-align", m);
              } else
                (0, r.default)(y).call(y, function(S) {
                  S.css("text-align", m);
                });
            p.restoreSelection();
          }, s.prototype.getSpecialNodeUntilTop = function(m, v) {
            for (var p = m.elems[0], A = v.elems[0]; p != null; ) {
              if ((0, a.default)(h).call(h, p == null ? void 0 : p.nodeName) !== -1 || p.parentNode === A)
                return p;
              p = p.parentNode;
            }
            return p;
          }, s.prototype.isSpecialNode = function(m, v) {
            var p = this.getSpecialNodeUntilTop(m, v);
            return p == null ? !1 : (0, a.default)(h).call(h, p.nodeName) !== -1;
          }, s.prototype.isSpecialTopNode = function(m) {
            var v;
            return m == null ? !1 : (0, a.default)(c).call(c, (v = m.elems[0]) === null || v === void 0 ? void 0 : v.nodeName) !== -1;
          }, s.prototype.tryChangeActive = function() {
          }, s;
        }(g.default);
        n.default = l;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = a.__importDefault(t(3)), g = a.__importDefault(t(23)), d = a.__importDefault(t(335)), h = a.__importDefault(t(336)), c = t(7), l = function(f) {
          a.__extends(s, f);
          function s(m) {
            var v = this, p = u.default(`<div class="w-e-menu" data-title="\u5F15\u7528">
                <i class="w-e-icon-quotes-left"></i>
            </div>`);
            return v = f.call(this, p, m) || this, d.default(m), v;
          }
          return s.prototype.clickHandler = function() {
            var m, v, p = this.editor, A = p.selection.isSelectionEmpty(), y = p.selection.getSelectionRangeTopNodes(), x = y[y.length - 1], S = this.getTopNodeName();
            if (S === "BLOCKQUOTE") {
              var D = u.default(x.childNodes()), I = D.length, C = x;
              (0, r.default)(D).call(D, function(N) {
                var M = u.default(N);
                M.insertAfter(C), C = M;
              }), x.remove(), p.selection.moveCursor(D.elems[I - 1]), this.tryChangeActive();
            } else {
              var E = h.default(y);
              if (p.$textElem.equal(x)) {
                var T = (m = p.selection.getSelectionContainerElem()) === null || m === void 0 ? void 0 : m.elems[0];
                p.selection.createRangeByElems(T.children[0], T.children[0]), y = p.selection.getSelectionRangeTopNodes(), E = h.default(y), x.append(E);
              } else
                E.insertAfter(x);
              this.delSelectNode(y);
              var R = (v = E.childNodes()) === null || v === void 0 ? void 0 : v.last().getNode();
              if (R == null)
                return;
              R.textContent ? p.selection.moveCursor(R) : p.selection.moveCursor(R, 0), this.tryChangeActive(), u.default(c.EMPTY_P).insertAfter(E);
              return;
            }
            A && (p.selection.collapseRange(), p.selection.restoreSelection());
          }, s.prototype.tryChangeActive = function() {
            var m, v = this.editor, p = (m = v.selection.getSelectionRangeTopNodes()[0]) === null || m === void 0 ? void 0 : m.getNodeName();
            p === "BLOCKQUOTE" ? this.active() : this.unActive();
          }, s.prototype.getTopNodeName = function() {
            var m = this.editor, v = m.selection.getSelectionRangeTopNodes()[0], p = v == null ? void 0 : v.getNodeName();
            return p;
          }, s.prototype.delSelectNode = function(m) {
            (0, r.default)(m).call(m, function(v) {
              v.remove();
            });
          }, s;
        }(g.default);
        n.default = l;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = t(7), u = r.__importDefault(t(3));
        function g(d) {
          function h(c) {
            var l, f = d.selection.getSelectionContainerElem(), s = d.selection.getSelectionRangeTopNodes()[0];
            if ((s == null ? void 0 : s.getNodeName()) === "BLOCKQUOTE") {
              if (f.getNodeName() === "BLOCKQUOTE") {
                var m = (l = f.childNodes()) === null || l === void 0 ? void 0 : l.getNode();
                d.selection.moveCursor(m);
              }
              if (f.text() === "") {
                c.preventDefault(), f.remove();
                var v = u.default(a.EMPTY_P);
                v.insertAfter(s), d.selection.moveCursor(v.getNode(), 0);
              }
              s.text() === "" && s.remove();
            }
          }
          d.txt.eventHooks.enterDownEvents.push(h);
        }
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = a.__importDefault(t(3));
        function g(d) {
          var h = u.default("<blockquote></blockquote>");
          return (0, r.default)(d).call(d, function(c) {
            h.append(c.clone(!0));
          }), h;
        }
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(26));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = a.__importDefault(t(24)), g = a.__importDefault(t(3)), d = t(6), h = function(c) {
          a.__extends(l, c);
          function l(f) {
            var s, m = this, v = g.default(`<div class="w-e-menu" data-title="\u80CC\u666F\u8272">
                <i class="w-e-icon-paint-brush"></i>
            </div>`), p = {
              width: 120,
              title: "\u80CC\u666F\u989C\u8272",
              type: "inline-block",
              list: (0, r.default)(s = f.config.colors).call(s, function(A) {
                return {
                  $elem: g.default('<i style="color:' + A + ';" class="w-e-icon-paint-brush"></i>'),
                  value: A
                };
              }),
              clickHandler: function(y) {
                m.command(y);
              }
            };
            return m = c.call(this, v, f, p) || this, m;
          }
          return l.prototype.command = function(f) {
            var s, m = this.editor, v = m.selection.isSelectionEmpty(), p = (s = m.selection.getSelectionContainerElem()) === null || s === void 0 ? void 0 : s.elems[0];
            if (p != null) {
              var A = (p == null ? void 0 : p.nodeName.toLowerCase()) !== "p", y = p == null ? void 0 : p.style.backgroundColor, x = d.hexToRgb(f) === y;
              if (v) {
                if (A && !x) {
                  var S = m.selection.getSelectionRangeTopNodes();
                  m.selection.createRangeByElem(S[0]), m.selection.moveCursor(S[0].elems[0]);
                }
                m.selection.createEmptyRange();
              }
              m.cmd.do("backColor", f), v && (m.selection.collapseRange(), m.selection.restoreSelection());
            }
          }, l.prototype.tryChangeActive = function() {
          }, l;
        }(u.default);
        n.default = h;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(26));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = a.__importDefault(t(24)), g = a.__importDefault(t(3)), d = function(h) {
          a.__extends(c, h);
          function c(l) {
            var f, s = this, m = g.default(`<div class="w-e-menu" data-title="\u6587\u5B57\u989C\u8272">
                <i class="w-e-icon-pencil2"></i>
            </div>`), v = {
              width: 120,
              title: "\u6587\u5B57\u989C\u8272",
              type: "inline-block",
              list: (0, r.default)(f = l.config.colors).call(f, function(p) {
                return {
                  $elem: g.default('<i style="color:' + p + ';" class="w-e-icon-pencil2"></i>'),
                  value: p
                };
              }),
              clickHandler: function(A) {
                s.command(A);
              }
            };
            return s = h.call(this, m, l, v) || this, s;
          }
          return c.prototype.command = function(l) {
            var f, s = this.editor, m = s.selection.isSelectionEmpty(), v = (f = s.selection.getSelectionContainerElem()) === null || f === void 0 ? void 0 : f.elems[0];
            if (v != null) {
              var p = s.selection.getSelectionText();
              if (v.nodeName === "A" && v.textContent === p) {
                var A = g.default("<span>&#8203;</span>").getNode();
                v.appendChild(A);
              }
              s.cmd.do("foreColor", l), m && (s.selection.collapseRange(), s.selection.restoreSelection());
            }
          }, c.prototype.tryChangeActive = function() {
          }, c;
        }(u.default);
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(3)), u = r.__importDefault(t(33)), g = r.__importDefault(t(38)), d = r.__importDefault(t(340)), h = r.__importDefault(t(346)), c = function(l) {
          r.__extends(f, l);
          function f(s) {
            var m = this, v = a.default(`<div class="w-e-menu" data-title="\u89C6\u9891">
                <i class="w-e-icon-play"></i>
            </div>`);
            return m = l.call(this, v, s) || this, h.default(s), m;
          }
          return f.prototype.clickHandler = function() {
            this.createPanel("");
          }, f.prototype.createPanel = function(s) {
            var m = d.default(this.editor, s), v = new u.default(this, m);
            v.create();
          }, f.prototype.tryChangeActive = function() {
          }, f;
        }(g.default);
        n.default = c;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(17));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = t(6), g = a.__importDefault(t(3)), d = a.__importDefault(t(341)), h = t(7);
        function c(l, f) {
          var s = l.config, m = new d.default(l), v = u.getRandom("input-iframe"), p = u.getRandom("btn-ok"), A = u.getRandom("input-upload"), y = u.getRandom("btn-local-ok");
          function x(C) {
            l.cmd.do("insertHTML", C + h.EMPTY_P), l.config.onlineVideoCallback(C);
          }
          function S(C) {
            var E = l.config.onlineVideoCheck(C);
            return E === !0 ? !0 : (typeof E == "string" && l.config.customAlert(E, "error"), !1);
          }
          var D = [{
            title: l.i18next.t("menus.panelMenus.video.\u4E0A\u4F20\u89C6\u9891"),
            tpl: `<div class="w-e-up-video-container">
                    <div id="` + y + `" class="w-e-up-btn">
                        <i class="w-e-icon-upload2"></i>
                    </div>
                    <div style="display:none;">
                        <input id="` + A + `" type="file" accept="video/*"/>
                    </div>
                 </div>`,
            events: [
              {
                selector: "#" + y,
                type: "click",
                fn: function() {
                  var E = g.default("#" + A), T = E.elems[0];
                  if (T)
                    T.click();
                  else
                    return !0;
                }
              },
              {
                selector: "#" + A,
                type: "change",
                fn: function() {
                  var E = g.default("#" + A), T = E.elems[0];
                  if (!T)
                    return !0;
                  var R = T.files;
                  return R.length && m.uploadVideo(R), !0;
                }
              }
            ]
          }, {
            title: l.i18next.t("menus.panelMenus.video.\u63D2\u5165\u89C6\u9891"),
            tpl: `<div>
                    <input 
                        id="` + v + `" 
                        type="text" 
                        class="block" 
                        placeholder="` + l.i18next.t("\u5982") + `\uFF1A<iframe src=... ></iframe>"/>
                    </td>
                    <div class="w-e-button-container">
                        <button type="button" id="` + p + `" class="right">
                            ` + l.i18next.t("\u63D2\u5165") + `
                        </button>
                    </div>
                </div>`,
            events: [
              {
                selector: "#" + p,
                type: "click",
                fn: function() {
                  var E, T = g.default("#" + v), R = (0, r.default)(E = T.val()).call(E);
                  if (!!R && !!S(R))
                    return x(R), !0;
                },
                bindEnter: !0
              }
            ]
          }], I = {
            width: 300,
            height: 0,
            tabs: []
          };
          return window.FileReader && (s.uploadVideoServer || s.customUploadVideo) && I.tabs.push(D[0]), s.showLinkVideo && I.tabs.push(D[1]), I;
        }
        n.default = c;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(133)), a = e(t(57)), u = e(t(4)), g = e(t(27));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var d = t(2), h = t(6), c = d.__importDefault(t(135)), l = d.__importDefault(t(136)), f = t(7), s = t(6), m = function() {
          function v(p) {
            this.editor = p;
          }
          return v.prototype.uploadVideo = function(p) {
            var A = this;
            if (!!p.length) {
              var y = this.editor, x = y.config, S = "validate.", D = function(J) {
                return y.i18next.t(S + J);
              }, I = x.uploadVideoServer, C = x.uploadVideoMaxSize, E = C / 1024, T = x.uploadVideoName, R = x.uploadVideoParams, N = x.uploadVideoParamsWithUrl, M = x.uploadVideoHeaders, B = x.uploadVideoHooks, F = x.uploadVideoTimeout, L = x.withVideoCredentials, b = x.customUploadVideo, $ = x.uploadVideoAccept, H = [], j = [];
              if (h.arrForEach(p, function(Y) {
                var J = Y.name, k = Y.size / 1024 / 1024;
                if (!(!J || !k)) {
                  if (!($ instanceof Array)) {
                    j.push("\u3010" + $ + "\u3011" + D("uploadVideoAccept \u4E0D\u662FArray"));
                    return;
                  }
                  if (!(0, r.default)($).call($, function(nt) {
                    return nt === J.split(".")[J.split(".").length - 1];
                  })) {
                    j.push("\u3010" + J + "\u3011" + D("\u4E0D\u662F\u89C6\u9891"));
                    return;
                  }
                  if (E < k) {
                    j.push("\u3010" + J + "\u3011" + D("\u5927\u4E8E") + " " + E + "M");
                    return;
                  }
                  H.push(Y);
                }
              }), j.length) {
                x.customAlert(D("\u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7") + `: 
` + j.join(`
`), "warning");
                return;
              }
              if (H.length === 0) {
                x.customAlert(D("\u4F20\u5165\u7684\u6587\u4EF6\u4E0D\u5408\u6CD5"), "warning");
                return;
              }
              if (b && typeof b == "function") {
                var V;
                b(H, (0, a.default)(V = this.insertVideo).call(V, this));
                return;
              }
              var U = new FormData();
              if ((0, u.default)(H).call(H, function(Y, J) {
                var k = T || Y.name;
                H.length > 1 && (k = k + (J + 1)), U.append(k, Y);
              }), I) {
                var W = I.split("#");
                I = W[0];
                var K = W[1] || "";
                (0, u.default)(h).call(h, R, function(Y, J) {
                  N && ((0, g.default)(I).call(I, "?") > 0 ? I += "&" : I += "?", I = I + Y + "=" + J), U.append(Y, J);
                }), K && (I += "#" + K);
                var w = c.default(I, {
                  timeout: F,
                  formData: U,
                  headers: M,
                  withCredentials: !!L,
                  beforeSend: function(J) {
                    if (B.before)
                      return B.before(J, y, H);
                  },
                  onTimeout: function(J) {
                    x.customAlert(D("\u4E0A\u4F20\u89C6\u9891\u8D85\u65F6"), "error"), B.timeout && B.timeout(J, y);
                  },
                  onProgress: function(J, k) {
                    var nt = new l.default(y);
                    k.lengthComputable && (J = k.loaded / k.total, nt.show(J));
                  },
                  onError: function(J) {
                    x.customAlert(D("\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF"), "error", D("\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF") + "\uFF0C" + D("\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001") + ": " + J.status), B.error && B.error(J, y);
                  },
                  onFail: function(J, k) {
                    x.customAlert(D("\u4E0A\u4F20\u89C6\u9891\u5931\u8D25"), "error", D("\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + ("\uFF0C" + D("\u8FD4\u56DE\u7ED3\u679C") + ": ") + k), B.fail && B.fail(J, y, k);
                  },
                  onSuccess: function(J, k) {
                    if (B.customInsert) {
                      var nt;
                      B.customInsert((0, a.default)(nt = A.insertVideo).call(nt, A), k, y);
                      return;
                    }
                    if (k.errno != "0") {
                      x.customAlert(D("\u4E0A\u4F20\u89C6\u9891\u5931\u8D25"), "error", D("\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + "\uFF0C" + D("\u8FD4\u56DE\u7ED3\u679C") + " errno=" + k.errno), B.fail && B.fail(J, y, k);
                      return;
                    }
                    var at = k.data;
                    A.insertVideo(at.url), B.success && B.success(J, y, k);
                  }
                });
                typeof w == "string" && x.customAlert(w, "error");
              }
            }
          }, v.prototype.insertVideo = function(p) {
            var A = this.editor, y = A.config, x = "validate.", S = function(C, E) {
              return E === void 0 && (E = x), A.i18next.t(E + C);
            };
            if (!y.customInsertVideo)
              s.UA.isFirefox ? A.cmd.do("insertHTML", '<p data-we-video-p="true"><video src="' + p + '" controls="controls" style="max-width:100%"></video></p><p>&#8203</p>') : A.cmd.do("insertHTML", '<video src="' + p + '" controls="controls" style="max-width:100%"></video>' + f.EMPTY_P);
            else {
              y.customInsertVideo(p);
              return;
            }
            var D = document.createElement("video");
            D.onload = function() {
              D = null;
            }, D.onerror = function() {
              y.customAlert(S("\u63D2\u5165\u89C6\u9891\u9519\u8BEF"), "error", "wangEditor: " + S("\u63D2\u5165\u89C6\u9891\u9519\u8BEF") + "\uFF0C" + S("\u89C6\u9891\u94FE\u63A5") + ' "' + p + '"\uFF0C' + S("\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25")), D = null;
            }, D.onabort = function() {
              return D = null;
            }, D.src = p;
          }, v;
        }();
        n.default = m;
      },
      function(o, n, t) {
        o.exports = t(343);
      },
      function(o, n, t) {
        var e = t(344);
        o.exports = e;
      },
      function(o, n, t) {
        t(345);
        var e = t(9);
        o.exports = e.Date.now;
      },
      function(o, n, t) {
        var e = t(5);
        e({ target: "Date", stat: !0 }, {
          now: function() {
            return new Date().getTime();
          }
        });
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(347)), u = r.__importDefault(t(349));
        function g(d) {
          a.default(d), u.default(d);
        }
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.createShowHideFn = void 0;
        var r = t(2), a = r.__importDefault(t(3)), u = r.__importDefault(t(39)), g = r.__importDefault(t(348));
        function d(c) {
          var l, f = function(p, A) {
            return A === void 0 && (A = ""), c.i18next.t(A + p);
          };
          function s(v) {
            var p = [{
              $elem: a.default("<span class='w-e-icon-trash-o'></span>"),
              onClick: function(y, x) {
                return x.remove(), !0;
              }
            }, {
              $elem: a.default("<span>100%</span>"),
              onClick: function(y, x) {
                return x.attr("width", "100%"), x.removeAttr("height"), !0;
              }
            }, {
              $elem: a.default("<span>50%</span>"),
              onClick: function(y, x) {
                return x.attr("width", "50%"), x.removeAttr("height"), !0;
              }
            }, {
              $elem: a.default("<span>30%</span>"),
              onClick: function(y, x) {
                return x.attr("width", "30%"), x.removeAttr("height"), !0;
              }
            }, {
              $elem: a.default("<span>" + f("\u91CD\u7F6E") + "</span>"),
              onClick: function(y, x) {
                return x.removeAttr("width"), x.removeAttr("height"), !0;
              }
            }, {
              $elem: a.default("<span>" + f("menus.justify.\u9760\u5DE6") + "</span>"),
              onClick: function(y, x) {
                return g.default(x, "left"), !0;
              }
            }, {
              $elem: a.default("<span>" + f("menus.justify.\u5C45\u4E2D") + "</span>"),
              onClick: function(y, x) {
                return g.default(x, "center"), !0;
              }
            }, {
              $elem: a.default("<span>" + f("menus.justify.\u9760\u53F3") + "</span>"),
              onClick: function(y, x) {
                return g.default(x, "right"), !0;
              }
            }];
            l = new u.default(c, v, p), l.create();
          }
          function m() {
            l && (l.remove(), l = null);
          }
          return {
            showVideoTooltip: s,
            hideVideoTooltip: m
          };
        }
        n.createShowHideFn = d;
        function h(c) {
          var l = d(c), f = l.showVideoTooltip, s = l.hideVideoTooltip;
          c.txt.eventHooks.videoClickEvents.push(f), c.txt.eventHooks.clickEvents.push(s), c.txt.eventHooks.keyupEvents.push(s), c.txt.eventHooks.toolbarClickEvents.push(s), c.txt.eventHooks.menuClickEvents.push(s), c.txt.eventHooks.textScrollEvents.push(s), c.txt.eventHooks.changeEvents.push(s);
        }
        n.default = h;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(28));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = a.__importDefault(t(3));
        function g(h, c) {
          var l = ["P"], f = d(h, l);
          f && u.default(f).css("text-align", c);
        }
        n.default = g;
        function d(h, c) {
          for (var l, f = h.elems[0]; f != null; ) {
            if ((0, r.default)(c).call(c, f == null ? void 0 : f.nodeName))
              return f;
            if (((l = f == null ? void 0 : f.parentNode) === null || l === void 0 ? void 0 : l.nodeName) === "BODY")
              return null;
            f = f.parentNode;
          }
          return f;
        }
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(6);
        function a(u) {
          if (!!r.UA.isFirefox) {
            var g = u.txt, d = u.selection, h = g.eventHooks.keydownEvents;
            h.push(function(c) {
              var l = d.getSelectionContainerElem();
              if (l) {
                var f = l.getNodeTop(u), s = f.length && f.prev().length ? f.prev() : null;
                s && s.attr("data-we-video-p") && d.getCursorPos() === 0 && c.keyCode === 8 && s.remove();
              }
            });
          }
        }
        n.default = a;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(26));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = t(7), g = a.__importDefault(t(3)), d = a.__importDefault(t(33)), h = a.__importDefault(t(38)), c = a.__importDefault(t(351)), l = a.__importDefault(t(364)), f = function(s) {
          a.__extends(m, s);
          function m(v) {
            var p = this, A = g.default('<div class="w-e-menu" data-title="\u56FE\u7247"><i class="w-e-icon-image"></i></div>'), y = l.default(v);
            if (y.onlyUploadConf) {
              var x;
              A = y.onlyUploadConf.$elem, (0, r.default)(x = y.onlyUploadConf.events).call(x, function(S) {
                var D = S.type, I = S.fn || u.EMPTY_FN;
                A.on(D, function(C) {
                  C.stopPropagation(), I(C);
                });
              });
            }
            return p = s.call(this, A, v) || this, p.imgPanelConfig = y, c.default(v), p;
          }
          return m.prototype.clickHandler = function() {
            this.imgPanelConfig.onlyUploadConf || this.createPanel();
          }, m.prototype.createPanel = function() {
            var v = this.imgPanelConfig, p = new d.default(this, v);
            this.setPanel(p), p.create();
          }, m.prototype.tryChangeActive = function() {
          }, m;
        }(h.default);
        n.default = f;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(352)), u = r.__importDefault(t(353)), g = r.__importDefault(t(354)), d = r.__importDefault(t(362)), h = r.__importDefault(t(363));
        function c(l) {
          a.default(l), u.default(l), g.default(l), d.default(l), h.default(l);
        }
        n.default = c;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = t(131), u = r.__importDefault(t(97));
        function g(l, f) {
          var s = l.config, m = s.pasteFilterStyle, v = s.pasteIgnoreImg, p = a.getPasteHtml(f, m, v);
          if (p)
            return !0;
          var A = a.getPasteText(f);
          return !!A;
        }
        function d(l, f) {
          for (var s, m = ((s = f.clipboardData) === null || s === void 0 ? void 0 : s.types) || [], v = 0; v < m.length; v++) {
            var p = m[v];
            if (p === "Files")
              return !0;
          }
          return !1;
        }
        function h(l, f) {
          if (!(!d(f, l) && g(f, l))) {
            var s = a.getPasteImgs(l);
            if (!!s.length) {
              var m = new u.default(f);
              m.uploadImg(s);
            }
          }
        }
        function c(l) {
          l.txt.eventHooks.pasteEvents.unshift(function(f) {
            h(f, l);
          });
        }
        n.default = c;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(97));
        function u(g) {
          function d(h) {
            var c = h.dataTransfer && h.dataTransfer.files;
            if (!(!c || !c.length)) {
              var l = new a.default(g);
              l.uploadImg(c);
            }
          }
          g.txt.eventHooks.dropEvents.push(d);
        }
        n.default = u;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(29)), a = e(t(355));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.createShowHideFn = void 0;
        var u = t(2), g = u.__importDefault(t(3));
        t(360);
        var d = t(6);
        function h(m, v, p, A, y) {
          m.attr("style", "width:" + v + "px; height:" + p + "px; left:" + A + "px; top:" + y + "px;");
        }
        function c(m, v) {
          var p = g.default(`<div class="w-e-img-drag-mask">
            <div class="w-e-img-drag-show-size"></div>
            <div class="w-e-img-drag-rb"></div>
         </div>`);
          return p.hide(), v.append(p), p;
        }
        function l(m, v, p) {
          var A = m.getBoundingClientRect(), y = p.getBoundingClientRect(), x = y.width.toFixed(2), S = y.height.toFixed(2);
          (0, r.default)(v).call(v, ".w-e-img-drag-show-size").text(x + "px * " + S + "px"), h(v, (0, a.default)(x), (0, a.default)(S), y.left - A.left, y.top - A.top), v.show();
        }
        function f(m) {
          var v = m.$textContainerElem, p, A = c(m, v);
          function y(D, I) {
            D.on("click", function(C) {
              C.stopPropagation();
            }), D.on("mousedown", ".w-e-img-drag-rb", function(C) {
              if (C.preventDefault(), !p)
                return;
              var E = C.clientX, T = C.clientY, R = I.getBoundingClientRect(), N = p.getBoundingClientRect(), M = N.width, B = N.height, F = N.left - R.left, L = N.top - R.top, b = M / B, $ = M, H = B, j = g.default(document);
              function V() {
                j.off("mousemove", U), j.off("mouseup", W);
              }
              function U(K) {
                K.stopPropagation(), K.preventDefault(), $ = M + (K.clientX - E), H = B + (K.clientY - T), $ / H != b && (H = $ / b), $ = (0, a.default)($.toFixed(2)), H = (0, a.default)(H.toFixed(2)), (0, r.default)(D).call(D, ".w-e-img-drag-show-size").text($.toFixed(2).replace(".00", "") + "px * " + H.toFixed(2).replace(".00", "") + "px"), h(D, $, H, F, L);
              }
              j.on("mousemove", U);
              function W() {
                p.attr("width", $ + ""), p.attr("height", H + "");
                var K = p.getBoundingClientRect();
                h(D, $, H, K.left - R.left, K.top - R.top), V();
              }
              j.on("mouseup", W), j.on("mouseleave", V);
            });
          }
          function x(D) {
            if (d.UA.isIE())
              return !1;
            D && (p = D, l(v, A, p));
          }
          function S() {
            (0, r.default)(v).call(v, ".w-e-img-drag-mask").hide();
          }
          return y(A, v), g.default(document).on("click", S), m.beforeDestroy(function() {
            g.default(document).off("click", S);
          }), {
            showDrag: x,
            hideDrag: S
          };
        }
        n.createShowHideFn = f;
        function s(m) {
          var v = f(m), p = v.showDrag, A = v.hideDrag;
          m.txt.eventHooks.imgClickEvents.push(p), m.txt.eventHooks.textScrollEvents.push(A), m.txt.eventHooks.keyupEvents.push(A), m.txt.eventHooks.toolbarClickEvents.push(A), m.txt.eventHooks.menuClickEvents.push(A), m.txt.eventHooks.changeEvents.push(A);
        }
        n.default = s;
      },
      function(o, n, t) {
        o.exports = t(356);
      },
      function(o, n, t) {
        var e = t(357);
        o.exports = e;
      },
      function(o, n, t) {
        t(358);
        var e = t(9);
        o.exports = e.parseFloat;
      },
      function(o, n, t) {
        var e = t(5), i = t(359);
        e({ global: !0, forced: parseFloat != i }, {
          parseFloat: i
        });
      },
      function(o, n, t) {
        var e = t(8), i = t(90).trim, r = t(68), a = e.parseFloat, u = 1 / a(r + "-0") !== -1 / 0;
        o.exports = u ? function(d) {
          var h = i(String(d)), c = a(h);
          return c === 0 && h.charAt(0) == "-" ? -0 : c;
        } : a;
      },
      function(o, n, t) {
        var e = t(20), i = t(361);
        i = i.__esModule ? i.default : i, typeof i == "string" && (i = [[o.i, i, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(i, r), o.exports = i.locals || {};
      },
      function(o, n, t) {
        var e = t(21);
        n = e(!1), n.push([o.i, `.w-e-text-container {
  overflow: hidden;
}
.w-e-img-drag-mask {
  position: absolute;
  z-index: 1;
  border: 1px dashed #ccc;
  box-sizing: border-box;
}
.w-e-img-drag-mask .w-e-img-drag-rb {
  position: absolute;
  right: -5px;
  bottom: -5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ccc;
  cursor: se-resize;
}
.w-e-img-drag-mask .w-e-img-drag-show-size {
  min-width: 110px;
  height: 22px;
  line-height: 22px;
  font-size: 14px;
  color: #999;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #999;
  color: #fff;
  border-radius: 2px;
  padding: 0 5px;
}
`, ""]), o.exports = n;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.createShowHideFn = void 0;
        var r = t(2), a = r.__importDefault(t(3)), u = r.__importDefault(t(39));
        function g(h) {
          var c, l = function(v, p) {
            return p === void 0 && (p = ""), h.i18next.t(p + v);
          };
          function f(m) {
            var v = [{
              $elem: a.default("<span class='w-e-icon-trash-o'></span>"),
              onClick: function(A, y) {
                return A.selection.createRangeByElem(y), A.selection.restoreSelection(), A.cmd.do("delete"), !0;
              }
            }, {
              $elem: a.default("<span>30%</span>"),
              onClick: function(A, y) {
                return y.attr("width", "30%"), y.removeAttr("height"), !0;
              }
            }, {
              $elem: a.default("<span>50%</span>"),
              onClick: function(A, y) {
                return y.attr("width", "50%"), y.removeAttr("height"), !0;
              }
            }, {
              $elem: a.default("<span>100%</span>"),
              onClick: function(A, y) {
                return y.attr("width", "100%"), y.removeAttr("height"), !0;
              }
            }];
            v.push({
              $elem: a.default("<span>" + l("\u91CD\u7F6E") + "</span>"),
              onClick: function(A, y) {
                return y.removeAttr("width"), y.removeAttr("height"), !0;
              }
            }), m.attr("data-href") && v.push({
              $elem: a.default("<span>" + l("\u67E5\u770B\u94FE\u63A5") + "</span>"),
              onClick: function(A, y) {
                var x = y.attr("data-href");
                return x && (x = decodeURIComponent(x), window.open(x, "_target")), !0;
              }
            }), c = new u.default(h, m, v), c.create();
          }
          function s() {
            c && (c.remove(), c = null);
          }
          return {
            showImgTooltip: f,
            hideImgTooltip: s
          };
        }
        n.createShowHideFn = g;
        function d(h) {
          var c = g(h), l = c.showImgTooltip, f = c.hideImgTooltip;
          h.txt.eventHooks.imgClickEvents.push(l), h.txt.eventHooks.clickEvents.push(f), h.txt.eventHooks.keyupEvents.push(f), h.txt.eventHooks.toolbarClickEvents.push(f), h.txt.eventHooks.menuClickEvents.push(f), h.txt.eventHooks.textScrollEvents.push(f), h.txt.eventHooks.imgDragBarMouseDownEvents.push(f), h.txt.eventHooks.changeEvents.push(f);
        }
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        function r(a) {
          var u = a.txt, g = a.selection, d = u.eventHooks.keydownEvents;
          d.push(function(h) {
            var c = g.getSelectionContainerElem(), l = g.getRange();
            if (!(!l || !c || h.keyCode !== 8 || !g.isSelectionEmpty())) {
              var f = l.startContainer, s = l.startOffset, m = null;
              if (s === 0)
                for (; f !== c.elems[0] && c.elems[0].contains(f) && f.parentNode && !m; ) {
                  if (f.previousSibling) {
                    m = f.previousSibling;
                    break;
                  }
                  f = f.parentNode;
                }
              else
                f.nodeType !== 3 && (m = f.childNodes[s - 1]);
              if (!!m) {
                for (var v = m; v.childNodes.length; )
                  v = v.childNodes[v.childNodes.length - 1];
                v instanceof HTMLElement && v.tagName === "IMG" && (v.remove(), h.preventDefault());
              }
            }
          });
        }
        n.default = r;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(26)), a = e(t(17));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var u = t(2), g = u.__importDefault(t(3)), d = t(6), h = u.__importDefault(t(97));
        function c(l) {
          var f, s = l.config, m = new h.default(l), v = d.getRandom("up-trigger-id"), p = d.getRandom("up-file-id"), A = d.getRandom("input-link-url"), y = d.getRandom("input-link-url-alt"), x = d.getRandom("input-link-url-href"), S = d.getRandom("btn-link"), D = "menus.panelMenus.image.", I = function(b, $) {
            return $ === void 0 && ($ = D), l.i18next.t($ + b);
          };
          function C(L, b, $) {
            var H = s.linkImgCheck(L);
            return H === !0 ? !0 : (typeof H == "string" && s.customAlert(H, "error"), !1);
          }
          var E = s.uploadImgMaxLength === 1 ? "" : 'multiple="multiple"', T = (0, r.default)(f = s.uploadImgAccept).call(f, function(L) {
            return "image/" + L;
          }).join(","), R = function(b, $, H) {
            return '<div class="' + b + '" data-title="' + H + `">
            <div id="` + v + `" class="w-e-up-btn">
                <i class="` + $ + `"></i>
            </div>
            <div style="display:none;">
                <input id="` + p + '" type="file" ' + E + ' accept="' + T + `"/>
            </div>
        </div>`;
          }, N = [
            {
              selector: "#" + v,
              type: "click",
              fn: function() {
                var b = s.uploadImgFromMedia;
                if (b && typeof b == "function")
                  return b(), !0;
                var $ = g.default("#" + p), H = $.elems[0];
                if (H)
                  H.click();
                else
                  return !0;
              }
            },
            {
              selector: "#" + p,
              type: "change",
              fn: function() {
                var b = g.default("#" + p), $ = b.elems[0];
                if (!$)
                  return !0;
                var H = $.files;
                return H != null && H.length && m.uploadImg(H), $ && ($.value = ""), !0;
              }
            }
          ], M = [`<input
            id="` + A + `"
            type="text"
            class="block"
            placeholder="` + I("\u56FE\u7247\u5730\u5740") + '"/>'];
          s.showLinkImgAlt && M.push(`
        <input
            id="` + y + `"
            type="text"
            class="block"
            placeholder="` + I("\u56FE\u7247\u6587\u5B57\u8BF4\u660E") + '"/>'), s.showLinkImgHref && M.push(`
        <input
            id="` + x + `"
            type="text"
            class="block"
            placeholder="` + I("\u8DF3\u8F6C\u94FE\u63A5") + '"/>');
          var B = [
            {
              title: I("\u4E0A\u4F20\u56FE\u7247"),
              tpl: R("w-e-up-img-container", "w-e-icon-upload2", ""),
              events: N
            },
            {
              title: I("\u7F51\u7EDC\u56FE\u7247"),
              tpl: `<div>
                    ` + M.join("") + `
                    <div class="w-e-button-container">
                        <button type="button" id="` + S + '" class="right">' + I("\u63D2\u5165", "") + `</button>
                    </div>
                </div>`,
              events: [{
                selector: "#" + S,
                type: "click",
                fn: function() {
                  var b, $ = g.default("#" + A), H = (0, a.default)(b = $.val()).call(b);
                  if (!!H) {
                    var j;
                    if (s.showLinkImgAlt) {
                      var V;
                      j = (0, a.default)(V = g.default("#" + y).val()).call(V);
                    }
                    var U;
                    if (s.showLinkImgHref) {
                      var W;
                      U = (0, a.default)(W = g.default("#" + x).val()).call(W);
                    }
                    if (!!C(H))
                      return m.insertImg(H, j, U), !0;
                  }
                },
                bindEnter: !0
              }]
            }
          ], F = {
            width: 300,
            height: 0,
            tabs: [],
            onlyUploadConf: {
              $elem: g.default(R("w-e-menu", "w-e-icon-image", "\u56FE\u7247")),
              events: N
            }
          };
          return window.FileReader && (s.uploadImgShowBase64 || s.uploadImgServer || s.customUploadImg || s.uploadImgFromMedia) && F.tabs.push(B[0]), s.showLinkImg && (F.tabs.push(B[1]), F.onlyUploadConf = void 0), F;
        }
        n.default = c;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = a.__importDefault(t(3)), g = a.__importDefault(t(24)), d = a.__importDefault(t(366)), h = function(c) {
          a.__extends(l, c);
          function l(f) {
            var s = this, m = u.default(`<div class="w-e-menu" data-title="\u7F29\u8FDB">
                <i class="w-e-icon-indent-increase"></i>
            </div>`), v = {
              width: 130,
              title: "\u8BBE\u7F6E\u7F29\u8FDB",
              type: "list",
              list: [{
                $elem: u.default(`<p>
                            <i class="w-e-icon-indent-increase w-e-drop-list-item"></i>
                            ` + f.i18next.t("menus.dropListMenu.indent.\u589E\u52A0\u7F29\u8FDB") + `
                        <p>`),
                value: "increase"
              }, {
                $elem: u.default(`<p>
                            <i class="w-e-icon-indent-decrease w-e-drop-list-item"></i>
                            ` + f.i18next.t("menus.dropListMenu.indent.\u51CF\u5C11\u7F29\u8FDB") + `
                        <p>`),
                value: "decrease"
              }],
              clickHandler: function(A) {
                s.command(A);
              }
            };
            return s = c.call(this, m, f, v) || this, s;
          }
          return l.prototype.command = function(f) {
            var s = this.editor, m = s.selection.getSelectionContainerElem();
            if (m && s.$textElem.equal(m)) {
              var v = s.selection.getSelectionRangeTopNodes();
              v.length > 0 && (0, r.default)(v).call(v, function(p) {
                d.default(u.default(p), f, s);
              });
            } else
              m && m.length > 0 && (0, r.default)(m).call(m, function(p) {
                d.default(u.default(p), f, s);
              });
            s.selection.restoreSelection(), this.tryChangeActive();
          }, l.prototype.tryChangeActive = function() {
            var f = this.editor, s = f.selection.getSelectionStartElem(), m = u.default(s).getNodeTop(f);
            m.length <= 0 || (m.elems[0].style.paddingLeft != "" ? this.active() : this.unActive());
          }, l;
        }(g.default);
        n.default = h;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(45)), a = e(t(17));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var u = t(2), g = u.__importDefault(t(367)), d = u.__importDefault(t(368)), h = /^(\d+)(\w+)$/, c = /^(\d+)%$/;
        function l(s) {
          var m = s.config.indentation;
          if (typeof m == "string") {
            if (h.test(m)) {
              var v, p = (0, r.default)(v = (0, a.default)(m).call(m).match(h)).call(v, 1, 3), A = p[0], y = p[1];
              return {
                value: Number(A),
                unit: y
              };
            } else if (c.test(m))
              return {
                value: Number((0, a.default)(m).call(m).match(c)[1]),
                unit: "%"
              };
          } else if (m.value !== void 0 && m.unit)
            return m;
          return {
            value: 2,
            unit: "em"
          };
        }
        function f(s, m, v) {
          var p = s.getNodeTop(v), A = /^(P|H[0-9]*)$/;
          A.test(p.getNodeName()) && (m === "increase" ? g.default(p, l(v)) : m === "decrease" && d.default(p, l(v)));
        }
        n.default = f;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(45));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        function a(u, g) {
          var d = u.elems[0];
          if (d.style.paddingLeft === "")
            u.css("padding-left", g.value + g.unit);
          else {
            var h = d.style.paddingLeft, c = (0, r.default)(h).call(h, 0, h.length - g.unit.length), l = Number(c) + g.value;
            u.css("padding-left", "" + l + g.unit);
          }
        }
        n.default = a;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(45));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        function a(u, g) {
          var d = u.elems[0];
          if (d.style.paddingLeft !== "") {
            var h = d.style.paddingLeft, c = (0, r.default)(h).call(h, 0, h.length - g.unit.length), l = Number(c) - g.value;
            l > 0 ? u.css("padding-left", "" + l + g.unit) : u.css("padding-left", "");
          }
        }
        n.default = a;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(3)), u = r.__importDefault(t(38)), g = r.__importDefault(t(33)), d = r.__importDefault(t(370)), h = function(c) {
          r.__extends(l, c);
          function l(f) {
            var s = this, m = a.default(`<div class="w-e-menu" data-title="\u8868\u60C5">
                <i class="w-e-icon-happy"></i>
            </div>`);
            return s = c.call(this, m, f) || this, s;
          }
          return l.prototype.createPanel = function() {
            var f = d.default(this.editor), s = new g.default(this, f);
            s.create();
          }, l.prototype.clickHandler = function() {
            this.createPanel();
          }, l.prototype.tryChangeActive = function() {
          }, l;
        }(u.default);
        n.default = h;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(26)), a = e(t(70)), u = e(t(17));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var g = t(2), d = g.__importDefault(t(3));
        function h(c) {
          var l = c.config.emotions;
          function f(v) {
            var p = [];
            if (v.type == "image") {
              var A;
              p = (0, r.default)(A = v.content).call(A, function(x) {
                return typeof x == "string" ? "" : '<span  title="' + x.alt + `">
                    <img class="eleImg" data-emoji="` + x.alt + '" style src="' + x.src + '" alt="[' + x.alt + `]">
                </span>`;
              }), p = (0, a.default)(p).call(p, function(x) {
                return x !== "";
              });
            } else {
              var y;
              p = (0, r.default)(y = v.content).call(y, function(x) {
                return '<span class="eleImg" title="' + x + '">' + x + "</span>";
              });
            }
            return p.join("").replace(/&nbsp;/g, "");
          }
          var s = (0, r.default)(l).call(l, function(v) {
            return {
              title: c.i18next.t("menus.panelMenus.emoticon." + v.title),
              tpl: "<div>" + f(v) + "</div>",
              events: [{
                selector: ".eleImg",
                type: "click",
                fn: function(A) {
                  var y = d.default(A.target), x = y.getNodeName(), S;
                  if (x === "IMG") {
                    var D;
                    S = (0, u.default)(D = y.parent().html()).call(D);
                  } else
                    S = "<span>" + y.html() + "</span>";
                  return c.cmd.do("insertHTML", S), !0;
                }
              }]
            };
          }), m = {
            width: 300,
            height: 230,
            tabs: s
          };
          return m;
        }
        n.default = h;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.createListHandle = n.ClassType = void 0;
        var r = t(2), a = r.__importDefault(t(3)), u = r.__importDefault(t(372)), g = r.__importDefault(t(374)), d = r.__importDefault(t(375)), h = r.__importDefault(t(376)), c = r.__importDefault(t(377)), l;
        (function(v) {
          v.Wrap = "WrapListHandle", v.Join = "JoinListHandle", v.StartJoin = "StartJoinListHandle", v.EndJoin = "EndJoinListHandle", v.Other = "OtherListHandle";
        })(l = n.ClassType || (n.ClassType = {}));
        var f = {
          WrapListHandle: u.default,
          JoinListHandle: g.default,
          StartJoinListHandle: d.default,
          EndJoinListHandle: h.default,
          OtherListHandle: c.default
        };
        function s(v, p, A) {
          if (v === l.Other && A === void 0)
            throw new Error("other \u7C7B\u9700\u8981\u4F20\u5165 range");
          return v !== l.Other ? new f[v](p) : new f[v](p, A);
        }
        n.createListHandle = s;
        var m = function() {
          function v(p) {
            this.handle = p, this.handle.exec();
          }
          return v.prototype.getSelectionRangeElem = function() {
            return a.default(this.handle.selectionRangeElem.get());
          }, v;
        }();
        n.default = m;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = a.__importDefault(t(3)), g = t(58), d = t(47), h = function(c) {
          a.__extends(l, c);
          function l(f) {
            return c.call(this, f) || this;
          }
          return l.prototype.exec = function() {
            var f = this.options, s = f.listType, m = f.listTarget, v = f.$selectionElem, p = f.$startElem, A = f.$endElem, y, x = [], S = v == null ? void 0 : v.getNodeName(), D = p.prior, I = A.prior;
            if (!p.prior && !A.prior || !(D != null && D.prev().length) && !(I != null && I.next().length)) {
              var C;
              (0, r.default)(C = v == null ? void 0 : v.children()).call(C, function(F) {
                x.push(u.default(F));
              }), S === s ? y = d.createElementFragment(
                x,
                d.createDocumentFragment(),
                "p"
              ) : (y = d.createElement(m), (0, r.default)(x).call(x, function(F) {
                y.appendChild(F.elems[0]);
              })), this.selectionRangeElem.set(y), d.insertBefore(v, y, v.elems[0]), v.remove();
            } else {
              for (var E = D; E.length; )
                x.push(E), I != null && I.equal(E) ? E = u.default(void 0) : E = E.next();
              var T = D.prev(), R = I.next();
              if (S === s ? y = d.createElementFragment(
                x,
                d.createDocumentFragment(),
                "p"
              ) : (y = d.createElement(m), (0, r.default)(x).call(x, function(F) {
                y.append(F.elems[0]);
              })), T.length && R.length) {
                for (var N = []; R.length; )
                  N.push(R), R = R.next();
                var M = d.createElement(S);
                (0, r.default)(N).call(N, function(F) {
                  M.append(F.elems[0]);
                }), u.default(M).insertAfter(v), this.selectionRangeElem.set(y);
                var B = v.next();
                B.length ? d.insertBefore(v, y, B.elems[0]) : v.parent().elems[0].append(y);
              } else if (!T.length)
                this.selectionRangeElem.set(y), d.insertBefore(v, y, v.elems[0]);
              else {
                this.selectionRangeElem.set(y);
                var B = v.next();
                B.length ? d.insertBefore(v, y, B.elems[0]) : v.parent().elems[0].append(y);
              }
            }
          }, l;
        }(g.ListHandle);
        n.default = h;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = function() {
          function u() {
            this._element = null;
          }
          return u.prototype.set = function(g) {
            if (g instanceof DocumentFragment) {
              var d, h = [];
              (0, r.default)(d = g.childNodes).call(d, function(c) {
                h.push(c);
              }), g = h;
            }
            this._element = g;
          }, u.prototype.get = function() {
            return this._element;
          }, u.prototype.clear = function() {
            this._element = null;
          }, u;
        }();
        n.default = a;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = a.__importDefault(t(3)), g = t(58), d = t(47), h = function(c) {
          a.__extends(l, c);
          function l(f) {
            return c.call(this, f) || this;
          }
          return l.prototype.exec = function() {
            var f, s, m, v, p, A, y, x = this.options, S = x.editor, D = x.listType, I = x.listTarget, C = x.$startElem, E = x.$endElem, T, R = S.selection.getSelectionRangeTopNodes(), N = C == null ? void 0 : C.getNodeName(), M = E == null ? void 0 : E.getNodeName();
            if (N === M)
              if (R.length > 2)
                if (R.shift(), R.pop(), T = d.createElementFragment(
                  d.filterSelectionNodes(R),
                  d.createDocumentFragment()
                ), N === D)
                  (f = E.children()) === null || f === void 0 || (0, r.default)(f).call(f, function(K) {
                    T.append(K);
                  }), E.remove(), this.selectionRangeElem.set(T), C.elems[0].append(T);
                else {
                  for (var B = document.createDocumentFragment(), F = document.createDocumentFragment(), L = d.getStartPoint(C); L.length; ) {
                    var b = L.elems[0];
                    L = L.next(), B.append(b);
                  }
                  for (var $ = d.getEndPoint(E), H = []; $.length; )
                    H.unshift($.elems[0]), $ = $.prev();
                  (0, r.default)(H).call(H, function(K) {
                    F.append(K);
                  });
                  var j = d.createElement(I);
                  j.append(B), j.append(T), j.append(F), T = j, this.selectionRangeElem.set(T), u.default(j).insertAfter(C), !(!((s = C.children()) === null || s === void 0) && s.length) && C.remove(), !(!((m = E.children()) === null || m === void 0) && m.length) && E.remove();
                }
              else {
                R.length = 0;
                for (var L = d.getStartPoint(C); L.length; )
                  R.push(L), L = L.next();
                for (var $ = d.getEndPoint(E), H = []; $.length; )
                  H.unshift($), $ = $.prev();
                R.push.apply(R, H), N === D ? (T = d.createElementFragment(R, d.createDocumentFragment(), "p"), this.selectionRangeElem.set(T), d.insertBefore(C, T, E.elems[0])) : (T = d.createElement(I), (0, r.default)(R).call(R, function(J) {
                  T.append(J.elems[0]);
                }), this.selectionRangeElem.set(T), u.default(T).insertAfter(C)), !(!((v = C.children()) === null || v === void 0) && v.length) && E.remove(), !(!((p = E.children()) === null || p === void 0) && p.length) && E.remove();
              }
            else {
              for (var V = [], $ = d.getEndPoint(E); $.length; )
                V.unshift($), $ = $.prev();
              for (var U = [], L = d.getStartPoint(C); L.length; )
                U.push(L), L = L.next();
              if (T = d.createDocumentFragment(), R.shift(), R.pop(), (0, r.default)(U).call(U, function(Y) {
                return T.append(Y.elems[0]);
              }), T = d.createElementFragment(
                d.filterSelectionNodes(R),
                T
              ), (0, r.default)(V).call(V, function(Y) {
                return T.append(Y.elems[0]);
              }), this.selectionRangeElem.set(T), N === D)
                C.elems[0].append(T), !(!((A = E.children()) === null || A === void 0) && A.length) && E.remove();
              else if (!((y = E.children()) === null || y === void 0) && y.length) {
                var W = E.children();
                d.insertBefore(W, T, W.elems[0]);
              } else
                E.elems[0].append(T);
            }
          }, l;
        }(g.ListHandle);
        n.default = h;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = a.__importDefault(t(3)), g = t(58), d = t(47), h = function(c) {
          a.__extends(l, c);
          function l(f) {
            return c.call(this, f) || this;
          }
          return l.prototype.exec = function() {
            var f, s = this.options, m = s.editor, v = s.listType, p = s.listTarget, A = s.$startElem, y, x = m.selection.getSelectionRangeTopNodes(), S = A == null ? void 0 : A.getNodeName();
            x.shift();
            for (var D = [], I = d.getStartPoint(A); I.length; )
              D.push(I), I = I.next();
            S === v ? (y = d.createDocumentFragment(), (0, r.default)(D).call(D, function(C) {
              return y.append(C.elems[0]);
            }), y = d.createElementFragment(
              d.filterSelectionNodes(x),
              y
            ), this.selectionRangeElem.set(y), A.elems[0].append(y)) : (y = d.createElement(p), (0, r.default)(D).call(D, function(C) {
              return y.append(C.elems[0]);
            }), y = d.createElementFragment(
              d.filterSelectionNodes(x),
              y
            ), this.selectionRangeElem.set(y), u.default(y).insertAfter(A), !(!((f = A.children()) === null || f === void 0) && f.length) && A.remove());
          }, l;
        }(g.ListHandle);
        n.default = h;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = a.__importDefault(t(3)), g = t(58), d = t(47), h = function(c) {
          a.__extends(l, c);
          function l(f) {
            return c.call(this, f) || this;
          }
          return l.prototype.exec = function() {
            var f, s, m = this.options, v = m.editor, p = m.listType, A = m.listTarget, y = m.$endElem, x, S = v.selection.getSelectionRangeTopNodes(), D = y == null ? void 0 : y.getNodeName();
            S.pop();
            for (var I = [], C = d.getEndPoint(y); C.length; )
              I.unshift(C), C = C.prev();
            if (D === p)
              if (x = d.createElementFragment(
                d.filterSelectionNodes(S),
                d.createDocumentFragment()
              ), (0, r.default)(I).call(I, function(R) {
                return x.append(R.elems[0]);
              }), this.selectionRangeElem.set(x), !((f = y.children()) === null || f === void 0) && f.length) {
                var E = y.children();
                d.insertBefore(E, x, E.elems[0]);
              } else
                y.elems[0].append(x);
            else {
              var T = d.filterSelectionNodes(S);
              T.push.apply(T, I), x = d.createElementFragment(
                T,
                d.createElement(A)
              ), this.selectionRangeElem.set(x), u.default(x).insertBefore(y), !(!((s = y.children()) === null || s === void 0) && s.length) && y.remove();
            }
          }, l;
        }(g.ListHandle);
        n.default = h;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = t(58), u = t(47), g = function(d) {
          r.__extends(h, d);
          function h(c, l) {
            var f = d.call(this, c) || this;
            return f.range = l, f;
          }
          return h.prototype.exec = function() {
            var c = this.options, l = c.editor, f = c.listTarget, s = l.selection.getSelectionRangeTopNodes(), m = u.createElementFragment(
              u.filterSelectionNodes(s),
              u.createElement(f)
            );
            this.selectionRangeElem.set(m), this.range.insertNode(m);
          }, h;
        }(a.ListHandle);
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4)), a = e(t(27));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var u = t(2), g = u.__importDefault(t(24)), d = u.__importDefault(t(3)), h = u.__importDefault(t(379)), c = function(l) {
          u.__extends(f, l);
          function f(s) {
            var m = this, v = d.default(`<div class="w-e-menu" data-title="\u884C\u9AD8">
                    <i class="w-e-icon-row-height"></i>
                </div>`), p = new h.default(s, s.config.lineHeights), A = {
              width: 100,
              title: "\u8BBE\u7F6E\u884C\u9AD8",
              type: "list",
              list: p.getItemList(),
              clickHandler: function(x) {
                s.selection.saveRange(), m.command(x);
              }
            };
            return m = l.call(this, v, s, A) || this, m;
          }
          return f.prototype.command = function(s) {
            var m = this.editor;
            m.selection.restoreSelection();
            var v = d.default(m.selection.getSelectionContainerElem());
            if (!!v.elems.length) {
              if (v && m.$textElem.equal(v)) {
                for (var p = !1, A = d.default(m.selection.getSelectionStartElem()).elems[0], y = d.default(m.selection.getSelectionEndElem()).elems[0], x = this.getDom(A), S = this.getDom(y), D = v.elems[0].children, I = 0; I < D.length; I++) {
                  var C = D[I];
                  if (d.default(C).getNodeName() === "P" && (C === x && (p = !0), p && (d.default(C).css("line-height", s), C === S))) {
                    p = !1;
                    return;
                  }
                }
                m.selection.createRangeByElems(A, y);
                return;
              }
              var E = v.elems[0], T = this.getDom(E);
              d.default(T).getNodeName() === "P" && (d.default(T).css("line-height", s), m.selection.createRangeByElems(T, T));
            }
          }, f.prototype.getDom = function(s) {
            var m = d.default(s).elems[0];
            if (!m.parentNode)
              return m;
            function v(p, A) {
              var y = d.default(p.parentNode);
              return A.$textElem.equal(y) ? p : v(y.elems[0], A);
            }
            return m = v(m, this.editor), m;
          }, f.prototype.styleProcessing = function(s) {
            var m = "";
            return (0, r.default)(s).call(s, function(v) {
              v !== "" && (0, a.default)(v).call(v, "line-height") === -1 && (m = m + v + ";");
            }), m;
          }, f.prototype.setRange = function(s, m) {
            var v = this.editor, p = window.getSelection ? window.getSelection() : document.getSelection();
            p == null || p.removeAllRanges();
            var A = document.createRange(), y = s, x = m;
            A.setStart(y, 0), A.setEnd(x, 1), p == null || p.addRange(A), v.selection.saveRange(), p == null || p.removeAllRanges(), v.selection.restoreSelection();
          }, f.prototype.tryChangeActive = function() {
            var s = this.editor, m = s.selection.getSelectionContainerElem();
            if (!(m && s.$textElem.equal(m))) {
              var v = d.default(s.selection.getSelectionStartElem());
              if (v.length !== 0) {
                v = this.getDom(v.elems[0]);
                var p = v.getAttribute("style") ? v.getAttribute("style") : "";
                p && (0, a.default)(p).call(p, "line-height") !== -1 ? this.active() : this.unActive();
              }
            }
          }, f;
        }(g.default);
        n.default = c;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = a.__importDefault(t(3)), g = function() {
          function d(h, c) {
            var l = this;
            this.itemList = [{
              $elem: u.default("<span>" + h.i18next.t("\u9ED8\u8BA4") + "</span>"),
              value: ""
            }], (0, r.default)(c).call(c, function(f) {
              l.itemList.push({
                $elem: u.default("<span>" + f + "</span>"),
                value: f
              });
            });
          }
          return d.prototype.getItemList = function() {
            return this.itemList;
          }, d;
        }();
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(3)), u = r.__importDefault(t(23)), g = function(d) {
          r.__extends(h, d);
          function h(c) {
            var l = this, f = a.default(`<div class="w-e-menu" data-title="\u64A4\u9500">
                <i class="w-e-icon-undo"></i>
            </div>`);
            return l = d.call(this, f, c) || this, l;
          }
          return h.prototype.clickHandler = function() {
            var c = this.editor;
            c.history.revoke();
            var l = c.$textElem.children();
            if (!!(l != null && l.length)) {
              var f = l.last();
              c.selection.createRangeByElem(f, !1, !0), c.selection.restoreSelection();
            }
          }, h.prototype.tryChangeActive = function() {
            this.editor.isCompatibleMode || (this.editor.history.size[0] ? this.active() : this.unActive());
          }, h;
        }(u.default);
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(3)), u = r.__importDefault(t(23)), g = function(d) {
          r.__extends(h, d);
          function h(c) {
            var l = this, f = a.default(`<div class="w-e-menu" data-title="\u6062\u590D">
                <i class="w-e-icon-redo"></i>
            </div>`);
            return l = d.call(this, f, c) || this, l;
          }
          return h.prototype.clickHandler = function() {
            var c = this.editor;
            c.history.restore();
            var l = c.$textElem.children();
            if (!!(l != null && l.length)) {
              var f = l.last();
              c.selection.createRangeByElem(f, !1, !0), c.selection.restoreSelection();
            }
          }, h.prototype.tryChangeActive = function() {
            this.editor.isCompatibleMode || (this.editor.history.size[1] ? this.active() : this.unActive());
          }, h;
        }(u.default);
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(38)), u = r.__importDefault(t(3)), g = r.__importDefault(t(383)), d = r.__importDefault(t(33)), h = r.__importDefault(t(392)), c = function(l) {
          r.__extends(f, l);
          function f(s) {
            var m = this, v = u.default('<div class="w-e-menu" data-title="\u8868\u683C"><i class="w-e-icon-table2"></i></div>');
            return m = l.call(this, v, s) || this, h.default(s), m;
          }
          return f.prototype.clickHandler = function() {
            this.createPanel();
          }, f.prototype.createPanel = function() {
            var s = g.default(this.editor), m = new d.default(this, s);
            m.create();
          }, f.prototype.tryChangeActive = function() {
          }, f;
        }(a.default);
        n.default = c;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(384));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = t(6), g = a.__importDefault(t(3));
        t(389);
        var d = a.__importDefault(t(391));
        function h(l) {
          return l > 0 && (0, r.default)(l);
        }
        function c(l) {
          var f = new d.default(l), s = u.getRandom("w-col-id"), m = u.getRandom("w-row-id"), v = u.getRandom("btn-link"), p = "menus.panelMenus.table.", A = function(D) {
            return l.i18next.t(D);
          }, y = [{
            title: A(p + "\u63D2\u5165\u8868\u683C"),
            tpl: `<div>
                    <div class="w-e-table">
                        <span>` + A("\u521B\u5EFA") + `</span>
                        <input id="` + m + `"  type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + A(p + "\u884C") + `</span>
                        <input id="` + s + `" type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + (A(p + "\u5217") + A(p + "\u7684") + A(p + "\u8868\u683C")) + `</span>
                    </div>
                    <div class="w-e-button-container">
                        <button type="button" id="` + v + '" class="right">' + A("\u63D2\u5165") + `</button>
                    </div>
                </div>`,
            events: [{
              selector: "#" + v,
              type: "click",
              fn: function() {
                var D = Number(g.default("#" + s).val()), I = Number(g.default("#" + m).val());
                return h(I) && h(D) ? (f.createAction(I, D), !0) : (l.config.customAlert("\u8868\u683C\u884C\u5217\u8BF7\u8F93\u5165\u6B63\u6574\u6570", "warning"), !1);
              },
              bindEnter: !0
            }]
          }], x = {
            width: 330,
            height: 0,
            tabs: []
          };
          return x.tabs.push(y[0]), x;
        }
        n.default = c;
      },
      function(o, n, t) {
        o.exports = t(385);
      },
      function(o, n, t) {
        var e = t(386);
        o.exports = e;
      },
      function(o, n, t) {
        t(387);
        var e = t(9);
        o.exports = e.Number.isInteger;
      },
      function(o, n, t) {
        var e = t(5), i = t(388);
        e({ target: "Number", stat: !0 }, {
          isInteger: i
        });
      },
      function(o, n, t) {
        var e = t(13), i = Math.floor;
        o.exports = function(a) {
          return !e(a) && isFinite(a) && i(a) === a;
        };
      },
      function(o, n, t) {
        var e = t(20), i = t(390);
        i = i.__esModule ? i.default : i, typeof i == "string" && (i = [[o.i, i, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(i, r), o.exports = i.locals || {};
      },
      function(o, n, t) {
        var e = t(21);
        n = e(!1), n.push([o.i, `.w-e-table {
  display: flex;
}
.w-e-table .w-e-table-input {
  width: 40px;
  text-align: center!important;
  margin: 0 5px;
}
`, ""]), o.exports = n;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = t(7), u = r.__importDefault(t(3)), g = function() {
          function d(h) {
            this.editor = h;
          }
          return d.prototype.createAction = function(h, c) {
            var l = this.editor, f = u.default(l.selection.getSelectionContainerElem()), s = u.default(f.elems[0]).parentUntilEditor("UL", l), m = u.default(f.elems[0]).parentUntilEditor("OL", l);
            if (!(s || m)) {
              var v = this.createTableHtml(h, c);
              l.cmd.do("insertHTML", v);
            }
          }, d.prototype.createTableHtml = function(h, c) {
            for (var l = "", f = "", s = 0; s < h; s++) {
              f = "";
              for (var m = 0; m < c; m++)
                s === 0 ? f = f + "<th></th>" : f = f + "<td></td>";
              l = l + "<tr>" + f + "</tr>";
            }
            var v = '<table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody>' + l + ("</tbody></table>" + a.EMPTY_P);
            return v;
          }, d;
        }();
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(393)), u = t(400);
        function g(d) {
          a.default(d), u.bindEventKeyboardEvent(d), u.bindClickEvent(d);
        }
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(3)), u = r.__importDefault(t(39)), g = r.__importDefault(t(394)), d = r.__importDefault(t(399)), h = t(7);
        function c(m) {
          var v;
          function p(y) {
            var x = new d.default(m), S = "menus.panelMenus.table.", D = function(E, T) {
              return T === void 0 && (T = S), m.i18next.t(T + E);
            }, I = [{
              $elem: a.default("<span>" + D("\u5220\u9664\u8868\u683C") + "</span>"),
              onClick: function(E, T) {
                return E.selection.createRangeByElem(T), E.selection.restoreSelection(), E.cmd.do("insertHTML", h.EMPTY_P), !0;
              }
            }, {
              $elem: a.default("<span>" + D("\u6DFB\u52A0\u884C") + "</span>"),
              onClick: function(E, T) {
                var R = l(E);
                if (R)
                  return !0;
                var N = a.default(E.selection.getSelectionStartElem()), M = x.getRowNode(N.elems[0]);
                if (!M)
                  return !0;
                var B = Number(x.getCurrentRowIndex(T.elems[0], M)), F = x.getTableHtml(T.elems[0]), L = x.getTableHtml(g.default.ProcessingRow(a.default(F), B).elems[0]);
                return L = s(T, L), E.selection.createRangeByElem(T), E.selection.restoreSelection(), E.cmd.do("insertHTML", L), !0;
              }
            }, {
              $elem: a.default("<span>" + D("\u5220\u9664\u884C") + "</span>"),
              onClick: function(E, T) {
                var R = l(E);
                if (R)
                  return !0;
                var N = a.default(E.selection.getSelectionStartElem()), M = x.getRowNode(N.elems[0]);
                if (!M)
                  return !0;
                var B = Number(x.getCurrentRowIndex(T.elems[0], M)), F = x.getTableHtml(T.elems[0]), L = g.default.DeleteRow(a.default(F), B).elems[0].children[0].children.length, b = "";
                return E.selection.createRangeByElem(T), E.selection.restoreSelection(), L === 0 ? b = h.EMPTY_P : b = x.getTableHtml(g.default.DeleteRow(a.default(F), B).elems[0]), b = s(T, b), E.cmd.do("insertHTML", b), !0;
              }
            }, {
              $elem: a.default("<span>" + D("\u6DFB\u52A0\u5217") + "</span>"),
              onClick: function(E, T) {
                var R = l(E);
                if (R)
                  return !0;
                var N = a.default(E.selection.getSelectionStartElem()), M = x.getCurrentColIndex(N.elems[0]), B = x.getTableHtml(T.elems[0]), F = x.getTableHtml(g.default.ProcessingCol(a.default(B), M).elems[0]);
                return F = s(T, F), E.selection.createRangeByElem(T), E.selection.restoreSelection(), E.cmd.do("insertHTML", F), !0;
              }
            }, {
              $elem: a.default("<span>" + D("\u5220\u9664\u5217") + "</span>"),
              onClick: function(E, T) {
                var R = l(E);
                if (R)
                  return !0;
                var N = a.default(E.selection.getSelectionStartElem()), M = x.getCurrentColIndex(N.elems[0]), B = x.getTableHtml(T.elems[0]), F = g.default.DeleteCol(a.default(B), M), L = F.elems[0].children[0].children[0].children.length, b = "";
                return E.selection.createRangeByElem(T), E.selection.restoreSelection(), L === 0 ? b = h.EMPTY_P : b = x.getTableHtml(F.elems[0]), b = s(T, b), E.cmd.do("insertHTML", b), !0;
              }
            }, {
              $elem: a.default("<span>" + D("\u8BBE\u7F6E\u8868\u5934") + "</span>"),
              onClick: function(E, T) {
                var R = l(E);
                if (R)
                  return !0;
                var N = a.default(E.selection.getSelectionStartElem()), M = x.getRowNode(N.elems[0]);
                if (!M)
                  return !0;
                var B = Number(x.getCurrentRowIndex(T.elems[0], M));
                B !== 0 && (B = 0);
                var F = x.getTableHtml(T.elems[0]), L = x.getTableHtml(g.default.setTheHeader(a.default(F), B, "th").elems[0]);
                return L = s(T, L), E.selection.createRangeByElem(T), E.selection.restoreSelection(), E.cmd.do("insertHTML", L), !0;
              }
            }, {
              $elem: a.default("<span>" + D("\u53D6\u6D88\u8868\u5934") + "</span>"),
              onClick: function(E, T) {
                var R = a.default(E.selection.getSelectionStartElem()), N = x.getRowNode(R.elems[0]);
                if (!N)
                  return !0;
                var M = Number(x.getCurrentRowIndex(T.elems[0], N));
                M !== 0 && (M = 0);
                var B = x.getTableHtml(T.elems[0]), F = x.getTableHtml(g.default.setTheHeader(a.default(B), M, "td").elems[0]);
                return F = s(T, F), E.selection.createRangeByElem(T), E.selection.restoreSelection(), E.cmd.do("insertHTML", F), !0;
              }
            }];
            v = new u.default(m, y, I), v.create();
          }
          function A() {
            v && (v.remove(), v = null);
          }
          return {
            showTableTooltip: p,
            hideTableTooltip: A
          };
        }
        function l(m) {
          var v = m.selection.getSelectionStartElem(), p = m.selection.getSelectionEndElem();
          return (v == null ? void 0 : v.elems[0]) !== (p == null ? void 0 : p.elems[0]);
        }
        function f(m) {
          var v = c(m), p = v.showTableTooltip, A = v.hideTableTooltip;
          m.txt.eventHooks.tableClickEvents.push(p), m.txt.eventHooks.clickEvents.push(A), m.txt.eventHooks.keyupEvents.push(A), m.txt.eventHooks.toolbarClickEvents.push(A), m.txt.eventHooks.menuClickEvents.push(A), m.txt.eventHooks.textScrollEvents.push(A);
        }
        n.default = f;
        function s(m, v) {
          var p = m.elems[0].nextSibling;
          return (!p || p.innerHTML === "<br>") && (v += "" + h.EMPTY_P), v;
        }
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(45)), a = e(t(91)), u = e(t(4)), g = e(t(138));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var d = t(2), h = d.__importDefault(t(3));
        function c(A, y) {
          for (var x = p(A), S = (0, r.default)(Array.prototype).apply(x.children), D = S[0].children.length, I = document.createElement("tr"), C = 0; C < D; C++) {
            var E = document.createElement("td");
            I.appendChild(E);
          }
          return (0, a.default)(S).call(S, y + 1, 0, I), v(x, S), h.default(x.parentNode);
        }
        function l(A, y) {
          for (var x = p(A), S = (0, r.default)(Array.prototype).apply(x.children), D = function(E) {
            var T, R = [];
            for ((0, u.default)(T = (0, g.default)(S[E].children)).call(T, function(B) {
              R.push(B);
            }); S[E].children.length !== 0; )
              S[E].removeChild(S[E].children[0]);
            var N = h.default(R[0]).getNodeName() !== "TH" ? document.createElement("td") : document.createElement("th");
            (0, a.default)(R).call(R, y + 1, 0, N);
            for (var M = 0; M < R.length; M++)
              S[E].appendChild(R[M]);
          }, I = 0; I < S.length; I++)
            D(I);
          return v(x, S), h.default(x.parentNode);
        }
        function f(A, y) {
          var x = p(A), S = (0, r.default)(Array.prototype).apply(x.children);
          return (0, a.default)(S).call(S, y, 1), v(x, S), h.default(x.parentNode);
        }
        function s(A, y) {
          for (var x = p(A), S = (0, r.default)(Array.prototype).apply(x.children), D = function(E) {
            var T, R = [];
            for ((0, u.default)(T = (0, g.default)(S[E].children)).call(T, function(M) {
              R.push(M);
            }); S[E].children.length !== 0; )
              S[E].removeChild(S[E].children[0]);
            (0, a.default)(R).call(R, y, 1);
            for (var N = 0; N < R.length; N++)
              S[E].appendChild(R[N]);
          }, I = 0; I < S.length; I++)
            D(I);
          return v(x, S), h.default(x.parentNode);
        }
        function m(A, y, x) {
          for (var S = p(A), D = (0, r.default)(Array.prototype).apply(S.children), I = D[y].children, C = document.createElement("tr"), E = function(N) {
            var M, B = document.createElement(x), F = I[N];
            (0, u.default)(M = (0, g.default)(F.childNodes)).call(M, function(L) {
              B.appendChild(L);
            }), C.appendChild(B);
          }, T = 0; T < I.length; T++)
            E(T);
          return (0, a.default)(D).call(D, y, 1, C), v(S, D), h.default(S.parentNode);
        }
        function v(A, y) {
          for (; A.children.length !== 0; )
            A.removeChild(A.children[0]);
          for (var x = 0; x < y.length; x++)
            A.appendChild(y[x]);
        }
        function p(A) {
          var y = A.elems[0].children[0];
          return y.nodeName === "COLGROUP" && (y = A.elems[0].children[A.elems[0].children.length - 1]), y;
        }
        n.default = {
          ProcessingRow: c,
          ProcessingCol: l,
          DeleteRow: f,
          DeleteCol: s,
          setTheHeader: m
        };
      },
      function(o, n, t) {
        var e = t(396);
        o.exports = e;
      },
      function(o, n, t) {
        t(50), t(397);
        var e = t(9);
        o.exports = e.Array.from;
      },
      function(o, n, t) {
        var e = t(5), i = t(398), r = t(115), a = !r(function(u) {
          Array.from(u);
        });
        e({ target: "Array", stat: !0, forced: a }, {
          from: i
        });
      },
      function(o, n, t) {
        var e = t(40), i = t(31), r = t(114), a = t(112), u = t(35), g = t(69), d = t(113);
        o.exports = function(c) {
          var l = i(c), f = typeof this == "function" ? this : Array, s = arguments.length, m = s > 1 ? arguments[1] : void 0, v = m !== void 0, p = d(l), A = 0, y, x, S, D, I, C;
          if (v && (m = e(m, s > 2 ? arguments[2] : void 0, 2)), p != null && !(f == Array && a(p)))
            for (D = p.call(l), I = D.next, x = new f(); !(S = I.call(D)).done; A++)
              C = v ? r(D, m, [S.value, A], !0) : S.value, g(x, A, C);
          else
            for (y = u(l.length), x = new f(y); y > A; A++)
              C = v ? m(l[A], A) : l[A], g(x, A, C);
          return x.length = A, x;
        };
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4)), a = e(t(138));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var u = t(2), g = u.__importDefault(t(3)), d = function() {
          function h(c) {
            this.editor = c;
          }
          return h.prototype.getRowNode = function(c) {
            var l, f = g.default(c).elems[0];
            return f.parentNode && (f = (l = g.default(f).parentUntil("TR", f)) === null || l === void 0 ? void 0 : l.elems[0]), f;
          }, h.prototype.getCurrentRowIndex = function(c, l) {
            var f, s = 0, m = c.children[0];
            return m.nodeName === "COLGROUP" && (m = c.children[c.children.length - 1]), (0, r.default)(f = (0, a.default)(m.children)).call(f, function(v, p) {
              v === l && (s = p);
            }), s;
          }, h.prototype.getCurrentColIndex = function(c) {
            var l, f, s = 0, m = g.default(c).getNodeName() === "TD" || g.default(c).getNodeName() === "TH" ? c : (f = g.default(c).parentUntil("TD", c)) === null || f === void 0 ? void 0 : f.elems[0], v = g.default(m).parent();
            return (0, r.default)(l = (0, a.default)(v.elems[0].children)).call(l, function(p, A) {
              p === m && (s = A);
            }), s;
          }, h.prototype.getTableHtml = function(c) {
            var l = '<table border="0" width="100%" cellpadding="0" cellspacing="0">' + g.default(c).html() + "</table>";
            return l;
          }, h;
        }();
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.bindEventKeyboardEvent = n.bindClickEvent = void 0;
        var r = t(2), a = r.__importDefault(t(3));
        function u(h) {
          if (!h.length)
            return !1;
          var c = h.elems[0];
          return c.nodeName === "P" && c.innerHTML === "<br>";
        }
        function g(h) {
          function c(l, f) {
            if (f.detail >= 3) {
              var s = window.getSelection();
              if (s) {
                var m = s.focusNode, v = s.anchorNode, p = a.default(v == null ? void 0 : v.parentElement);
                if (!l.isContain(a.default(m))) {
                  var A = p.elems[0].tagName === "TD" ? p : p.parentUntilEditor("td", h);
                  if (A) {
                    var y = h.selection.getRange();
                    y == null || y.setEnd(A.elems[0], A.elems[0].childNodes.length), h.selection.restoreSelection();
                  }
                }
              }
            }
          }
          h.txt.eventHooks.tableClickEvents.push(c);
        }
        n.bindClickEvent = g;
        function d(h) {
          var c = h.txt, l = h.selection, f = c.eventHooks.keydownEvents;
          f.push(function(s) {
            h.selection.saveRange();
            var m = l.getSelectionContainerElem();
            if (m) {
              var v = m.getNodeTop(h), p = v.length && v.prev().length ? v.prev() : null;
              if (p && p.getNodeName() === "TABLE" && l.isSelectionEmpty() && l.getCursorPos() === 0 && s.keyCode === 8) {
                var A = v.next(), y = !!A.length;
                y && u(v) && (v.remove(), h.selection.setRangeToElem(A.elems[0])), s.preventDefault();
              }
            }
          });
        }
        n.bindEventKeyboardEvent = d;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(26));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.formatCodeHtml = void 0;
        var a = t(2), u = a.__importDefault(t(38)), g = a.__importDefault(t(3)), d = t(6), h = a.__importDefault(t(402)), c = a.__importDefault(t(139)), l = a.__importDefault(t(33)), f = a.__importDefault(t(403));
        function s(v, p) {
          if (!p)
            return p;
          return p = y(p), p = A(p), p = d.replaceSpecialSymbol(p), p;
          function A(x) {
            var S = x.match(/<pre[\s|\S]+?\/pre>/g);
            return S === null || (0, r.default)(S).call(S, function(D) {
              x = x.replace(D, D.replace(/<\/code><code>/g, `
`).replace(/<br>/g, ""));
            }), x;
          }
          function y(x) {
            var S, D = x.match(/<span\sclass="hljs[\s|\S]+?\/span>/gm);
            if (!D || !D.length)
              return x;
            for (var I = (0, r.default)(S = d.deepClone(D)).call(S, function(E) {
              return E = E.replace(/<span\sclass="hljs[^>]+>/, ""), E.replace(/<\/span>/, "");
            }), C = 0; C < D.length; C++)
              x = x.replace(D[C], I[C]);
            return y(x);
          }
        }
        n.formatCodeHtml = s;
        var m = function(v) {
          a.__extends(p, v);
          function p(A) {
            var y = this, x = g.default('<div class="w-e-menu" data-title="\u4EE3\u7801"><i class="w-e-icon-terminal"></i></div>');
            return y = v.call(this, x, A) || this, f.default(A), y;
          }
          return p.prototype.insertLineCode = function(A) {
            var y = this.editor, x = g.default("<code>" + A + "</code>");
            y.cmd.do("insertElem", x), y.selection.createRangeByElem(x, !1), y.selection.restoreSelection();
          }, p.prototype.clickHandler = function() {
            var A = this.editor, y = A.selection.getSelectionText();
            this.isActive || (A.selection.isSelectionEmpty() ? this.createPanel("", "") : this.insertLineCode(y));
          }, p.prototype.createPanel = function(A, y) {
            var x = h.default(this.editor, A, y), S = new l.default(this, x);
            S.create();
          }, p.prototype.tryChangeActive = function() {
            var A = this.editor;
            c.default(A) ? this.active() : this.unActive();
          }, p;
        }(u.default);
        n.default = m;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(26));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = t(6), g = a.__importDefault(t(3)), d = a.__importDefault(t(139)), h = t(7);
        function c(l, f, s) {
          var m, v = u.getRandom("input-iframe"), p = u.getRandom("select"), A = u.getRandom("btn-ok");
          function y(I, C) {
            var E, T = d.default(l);
            T && x();
            var R = (E = l.selection.getSelectionStartElem()) === null || E === void 0 ? void 0 : E.elems[0].innerHTML;
            R && l.cmd.do("insertHTML", h.EMPTY_P);
            var N = C.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            l.highlight && (N = l.highlight.highlightAuto(N).value), l.cmd.do("insertHTML", '<pre><code class="' + I + '">' + N + "</code></pre>");
            var M = l.selection.getSelectionStartElem(), B = M == null ? void 0 : M.getNodeTop(l);
            (B == null ? void 0 : B.getNextSibling().elems.length) === 0 && g.default(h.EMPTY_P).insertAfter(B);
          }
          function x() {
            if (!!d.default(l)) {
              var I = l.selection.getSelectionStartElem(), C = I == null ? void 0 : I.getNodeTop(l);
              !C || (l.selection.createRangeByElem(C), l.selection.restoreSelection());
            }
          }
          var S = function(C) {
            return l.i18next.t(C);
          }, D = {
            width: 500,
            height: 0,
            tabs: [{
              title: S("menus.panelMenus.code.\u63D2\u5165\u4EE3\u7801"),
              tpl: `<div>
                        <select name="" id="` + p + `">
                            ` + (0, r.default)(m = l.config.languageType).call(m, function(I) {
                return "<option " + (s == I ? "selected" : "") + ' value ="' + I + '">' + I + "</option>";
              }) + `
                        </select>
                        <textarea id="` + v + '" type="text" class="wang-code-textarea" placeholder="" style="height: 160px">' + f.replace(/&quot;/g, '"') + `</textarea>
                        <div class="w-e-button-container">
                            <button type="button" id="` + A + '" class="right">' + (d.default(l) ? S("\u4FEE\u6539") : S("\u63D2\u5165")) + `</button>
                        </div>
                    </div>`,
              events: [
                {
                  selector: "#" + A,
                  type: "click",
                  fn: function() {
                    var C = document.getElementById(v), E = g.default("#" + p), T = E.val(), R = C.value;
                    if (!!R)
                      return d.default(l) ? !1 : (y(T, R), !0);
                  }
                }
              ]
            }]
          };
          return D;
        }
        n.default = c;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(404)), u = r.__importDefault(t(405));
        function g(d) {
          a.default(d), u.default(d);
        }
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.createShowHideFn = void 0;
        var r = t(2), a = r.__importDefault(t(3)), u = r.__importDefault(t(39));
        function g(h) {
          var c;
          function l(s) {
            var m = "menus.panelMenus.code.", v = function(y, x) {
              return x === void 0 && (x = m), h.i18next.t(x + y);
            }, p = [{
              $elem: a.default("<span>" + v("\u5220\u9664\u4EE3\u7801") + "</span>"),
              onClick: function(y, x) {
                return x.remove(), !0;
              }
            }];
            c = new u.default(h, s, p), c.create();
          }
          function f() {
            c && (c.remove(), c = null);
          }
          return {
            showCodeTooltip: l,
            hideCodeTooltip: f
          };
        }
        n.createShowHideFn = g;
        function d(h) {
          var c = g(h), l = c.showCodeTooltip, f = c.hideCodeTooltip;
          h.txt.eventHooks.codeClickEvents.push(l), h.txt.eventHooks.clickEvents.push(f), h.txt.eventHooks.toolbarClickEvents.push(f), h.txt.eventHooks.menuClickEvents.push(f), h.txt.eventHooks.textScrollEvents.push(f);
        }
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = t(7), u = r.__importDefault(t(3));
        function g(d) {
          var h = d.$textElem, c = d.selection, l = d.txt, f = l.eventHooks.keydownEvents;
          f.push(function(s) {
            var m;
            if (s.keyCode === 40) {
              var v = c.getSelectionContainerElem(), p = (m = h.children()) === null || m === void 0 ? void 0 : m.last();
              if ((v == null ? void 0 : v.elems[0].tagName) === "XMP" && (p == null ? void 0 : p.elems[0].tagName) === "PRE") {
                var A = u.default(a.EMPTY_P);
                h.append(A);
              }
            }
          }), f.push(function(s) {
            d.selection.saveRange();
            var m = c.getSelectionContainerElem();
            if (m) {
              var v = m.getNodeTop(d), p = v == null ? void 0 : v.prev(), A = v == null ? void 0 : v.getNextSibling();
              if (p.length && (p == null ? void 0 : p.getNodeName()) === "PRE" && A.length === 0 && c.getCursorPos() === 0 && s.keyCode === 8) {
                var y = u.default(a.EMPTY_P);
                h.append(y);
              }
            }
          });
        }
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(23)), u = r.__importDefault(t(3)), g = r.__importDefault(t(407)), d = t(6), h = t(7), c = function(l) {
          r.__extends(f, l);
          function f(s) {
            var m = this, v = u.default('<div class="w-e-menu" data-title="\u5206\u5272\u7EBF"><i class="w-e-icon-split-line"></i></div>');
            return m = l.call(this, v, s) || this, g.default(s), m;
          }
          return f.prototype.clickHandler = function() {
            var s = this.editor, m = s.selection.getRange(), v = s.selection.getSelectionContainerElem();
            if (!!(v != null && v.length)) {
              var p = u.default(v.elems[0]), A = p.parentUntil("TABLE", v.elems[0]), y = p.children();
              p.getNodeName() !== "CODE" && (A && u.default(A.elems[0]).getNodeName() === "TABLE" || y && y.length !== 0 && u.default(y.elems[0]).getNodeName() === "IMG" && !(m != null && m.collapsed) || this.createSplitLine());
            }
          }, f.prototype.createSplitLine = function() {
            var s = "<hr/>" + h.EMPTY_P;
            d.UA.isFirefox && (s = "<hr/><p></p>"), this.editor.cmd.do("insertHTML", s);
          }, f.prototype.tryChangeActive = function() {
          }, f;
        }(a.default);
        n.default = c;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(408));
        function u(g) {
          a.default(g);
        }
        n.default = u;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(3)), u = r.__importDefault(t(39));
        function g(h) {
          var c;
          function l(s) {
            var m = [{
              $elem: a.default("<span>" + h.i18next.t("menus.panelMenus.\u5220\u9664") + "</span>"),
              onClick: function(p, A) {
                return p.selection.createRangeByElem(A), p.selection.restoreSelection(), p.cmd.do("delete"), !0;
              }
            }];
            c = new u.default(h, s, m), c.create();
          }
          function f() {
            c && (c.remove(), c = null);
          }
          return {
            showSplitLineTooltip: l,
            hideSplitLineTooltip: f
          };
        }
        function d(h) {
          var c = g(h), l = c.showSplitLineTooltip, f = c.hideSplitLineTooltip;
          h.txt.eventHooks.splitLineEvents.push(l), h.txt.eventHooks.clickEvents.push(f), h.txt.eventHooks.keyupEvents.push(f), h.txt.eventHooks.toolbarClickEvents.push(f), h.txt.eventHooks.menuClickEvents.push(f), h.txt.eventHooks.textScrollEvents.push(f);
        }
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = a.__importDefault(t(3)), g = a.__importDefault(t(23)), d = t(98), h = a.__importDefault(t(415)), c = a.__importDefault(t(140)), l = function(f) {
          a.__extends(s, f);
          function s(m) {
            var v = this, p = u.default(`<div class="w-e-menu" data-title="\u5F85\u529E\u4E8B\u9879">
                    <i class="w-e-icon-checkbox-checked"></i>
                </div>`);
            return v = f.call(this, p, m) || this, h.default(m), v;
          }
          return s.prototype.clickHandler = function() {
            var m = this.editor;
            d.isAllTodo(m) ? (this.cancelTodo(), this.tryChangeActive()) : this.setTodo();
          }, s.prototype.tryChangeActive = function() {
            d.isAllTodo(this.editor) ? this.active() : this.unActive();
          }, s.prototype.setTodo = function() {
            var m = this.editor, v = m.selection.getSelectionRangeTopNodes();
            (0, r.default)(v).call(v, function(p) {
              var A, y = p == null ? void 0 : p.getNodeName();
              if (y === "P") {
                var x = c.default(p), S = x.getTodo(), D = (A = S.children()) === null || A === void 0 ? void 0 : A.getNode();
                S.insertAfter(p), m.selection.moveCursor(D), p.remove();
              }
            }), this.tryChangeActive();
          }, s.prototype.cancelTodo = function() {
            var m = this.editor, v = m.selection.getSelectionRangeTopNodes();
            (0, r.default)(v).call(v, function(p) {
              var A, y, x, S = (y = (A = p.childNodes()) === null || A === void 0 ? void 0 : A.childNodes()) === null || y === void 0 ? void 0 : y.clone(!0), D = u.default("<p></p>");
              D.append(S), D.insertAfter(p), (x = D.childNodes()) === null || x === void 0 || x.get(0).remove(), m.selection.moveCursor(D.getNode()), p.remove();
            });
          }, s;
        }(g.default);
        n.default = l;
      },
      function(o, n, t) {
        o.exports = t(411);
      },
      function(o, n, t) {
        var e = t(412);
        o.exports = e;
      },
      function(o, n, t) {
        var e = t(413), i = Array.prototype;
        o.exports = function(r) {
          var a = r.every;
          return r === i || r instanceof Array && a === i.every ? e : a;
        };
      },
      function(o, n, t) {
        t(414);
        var e = t(15);
        o.exports = e("Array").every;
      },
      function(o, n, t) {
        var e = t(5), i = t(32).every, r = t(67), a = t(22), u = r("every"), g = a("every");
        e({ target: "Array", proto: !0, forced: !u || !g }, {
          every: function(h) {
            return i(this, h, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = a.__importDefault(t(3)), g = t(98), d = a.__importDefault(t(140)), h = t(98), c = t(7);
        function l(f) {
          function s(A) {
            var y, x;
            if (g.isAllTodo(f)) {
              A.preventDefault();
              var S = f.selection, D = S.getSelectionRangeTopNodes()[0], I = (y = D.childNodes()) === null || y === void 0 ? void 0 : y.get(0), C = (x = window.getSelection()) === null || x === void 0 ? void 0 : x.anchorNode, E = S.getRange();
              if (!(E != null && E.collapsed)) {
                var T = E == null ? void 0 : E.commonAncestorContainer.childNodes, R = E == null ? void 0 : E.startContainer, N = E == null ? void 0 : E.endContainer, M = E == null ? void 0 : E.startOffset, B = E == null ? void 0 : E.endOffset, F = 0, L = 0, b = [];
                T == null || (0, r.default)(T).call(T, function(J, k) {
                  J.contains(R) && (F = k), J.contains(N) && (L = k);
                }), L - F > 1 && (T == null || (0, r.default)(T).call(T, function(J, k) {
                  k <= F || k >= L || b.push(J);
                }), (0, r.default)(b).call(b, function(J) {
                  J.remove();
                })), h.dealTextNode(R, M), h.dealTextNode(N, B, !1), f.selection.moveCursor(N, 0);
              }
              if (D.text() === "") {
                var $ = u.default(c.EMPTY_P);
                $.insertAfter(D), S.moveCursor($.getNode()), D.remove();
                return;
              }
              var H = S.getCursorPos(), j = g.getCursorNextNode(I == null ? void 0 : I.getNode(), C, H), V = d.default(u.default(j)), U = V.getInputContainer(), W = U.parent().getNode(), K = V.getTodo(), w = U.getNode().nextSibling;
              if ((I == null ? void 0 : I.text()) === "" && (I == null || I.append(u.default("<br>"))), K.insertAfter(D), !w || (w == null ? void 0 : w.textContent) === "") {
                if ((w == null ? void 0 : w.nodeName) !== "BR") {
                  var Y = u.default("<br>");
                  Y.insertAfter(U);
                }
                S.moveCursor(W, 1);
              } else
                S.moveCursor(W);
            }
          }
          function m(A) {
            var y, x;
            if (g.isAllTodo(f)) {
              var S = f.selection, D = S.getSelectionRangeTopNodes()[0], I = (y = D.childNodes()) === null || y === void 0 ? void 0 : y.getNode(), C = u.default("<p></p>"), E = C.getNode(), T = (x = window.getSelection()) === null || x === void 0 ? void 0 : x.anchorNode, R = S.getCursorPos(), N = T.previousSibling;
              if (D.text() === "") {
                A.preventDefault();
                var M = u.default(c.EMPTY_P);
                M.insertAfter(D), D.remove(), S.moveCursor(M.getNode(), 0);
                return;
              }
              if ((N == null ? void 0 : N.nodeName) === "SPAN" && N.childNodes[0].nodeName === "INPUT" && R === 0) {
                var B;
                A.preventDefault(), I == null || (0, r.default)(B = I.childNodes).call(B, function(F, L) {
                  L !== 0 && E.appendChild(F.cloneNode(!0));
                }), C.insertAfter(D), D.remove();
              }
            }
          }
          function v() {
            var A = f.selection, y = A.getSelectionRangeTopNodes()[0];
            y && h.isTodo(y) && y.text() === "" && (u.default(c.EMPTY_P).insertAfter(y), y.remove());
          }
          function p(A) {
            A && A.target instanceof HTMLInputElement && A.target.type === "checkbox" && (A.target.checked ? A.target.setAttribute("checked", "true") : A.target.removeAttribute("checked"));
          }
          f.txt.eventHooks.enterDownEvents.push(s), f.txt.eventHooks.deleteUpEvents.push(v), f.txt.eventHooks.deleteDownEvents.push(m), f.txt.eventHooks.clickEvents.push(p);
        }
        n.default = l;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.selectorValidator = void 0;
        var r = t(2), a = r.__importDefault(t(3)), u = t(6), g = t(7), d = r.__importDefault(t(130)), h = {
          border: "1px solid #c9d8db",
          toolbarBgColor: "#FFF",
          toolbarBottomBorder: "1px solid #EEE"
        };
        function c(f) {
          var s = f.toolbarSelector, m = a.default(s), v = f.textSelector, p = f.config, A = p.height, y = f.i18next, x = a.default("<div></div>"), S = a.default("<div></div>"), D, I, C = null;
          v == null ? (I = m.children(), m.append(x).append(S), x.css("background-color", h.toolbarBgColor).css("border", h.border).css("border-bottom", h.toolbarBottomBorder), S.css("border", h.border).css("border-top", "none").css("height", A + "px")) : (m.append(x), C = a.default(v).children(), a.default(v).append(S), I = S.children()), D = a.default("<div></div>"), D.attr("contenteditable", "true").css("width", "100%").css("height", "100%");
          var E, T = f.config.placeholder;
          T !== d.default.placeholder ? E = a.default("<div>" + T + "</div>") : E = a.default("<div>" + y.t(T) + "</div>"), E.addClass("placeholder"), I && I.length ? (D.append(I), E.hide()) : D.append(a.default(g.EMPTY_P)), C && C.length && (D.append(C), E.hide()), S.append(D), S.append(E), x.addClass("w-e-toolbar").css("z-index", f.zIndex.get("toolbar")), S.addClass("w-e-text-container"), S.css("z-index", f.zIndex.get()), D.addClass("w-e-text");
          var R = u.getRandom("toolbar-elem");
          x.attr("id", R);
          var N = u.getRandom("text-elem");
          D.attr("id", N);
          var M = S.getBoundingClientRect().height, B = D.getBoundingClientRect().height;
          M !== B && D.css("min-height", M + "px"), f.$toolbarElem = x, f.$textContainerElem = S, f.$textElem = D, f.toolbarElemId = R, f.textElemId = N;
        }
        n.default = c;
        function l(f) {
          var s = "data-we-id", m = /^wangEditor-\d+$/, v = f.textSelector, p = f.toolbarSelector, A = {
            bar: a.default("<div></div>"),
            text: a.default("<div></div>")
          };
          if (p == null)
            throw new Error("\u9519\u8BEF\uFF1A\u521D\u59CB\u5316\u7F16\u8F91\u5668\u65F6\u5019\u672A\u4F20\u5165\u4EFB\u4F55\u53C2\u6570\uFF0C\u8BF7\u67E5\u9605\u6587\u6863");
          if (A.bar = a.default(p), !A.bar.elems.length)
            throw new Error("\u65E0\u6548\u7684\u8282\u70B9\u9009\u62E9\u5668\uFF1A" + p);
          if (m.test(A.bar.attr(s)))
            throw new Error("\u521D\u59CB\u5316\u8282\u70B9\u5DF2\u5B58\u5728\u7F16\u8F91\u5668\u5B9E\u4F8B\uFF0C\u65E0\u6CD5\u91CD\u590D\u521B\u5EFA\u7F16\u8F91\u5668");
          if (v) {
            if (A.text = a.default(v), !A.text.elems.length)
              throw new Error("\u65E0\u6548\u7684\u8282\u70B9\u9009\u62E9\u5668\uFF1A" + v);
            if (m.test(A.text.attr(s)))
              throw new Error("\u521D\u59CB\u5316\u8282\u70B9\u5DF2\u5B58\u5728\u7F16\u8F91\u5668\u5B9E\u4F8B\uFF0C\u65E0\u6CD5\u91CD\u590D\u521B\u5EFA\u7F16\u8F91\u5668");
          }
          A.bar.attr(s, f.id), A.text.attr(s, f.id), f.beforeDestroy(function() {
            A.bar.removeAttr(s), A.text.removeAttr(s);
          });
        }
        n.selectorValidator = l;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(3)), u = t(7);
        function g(d, h) {
          var c = d.$textElem, l = c.children();
          if (!l || !l.length) {
            c.append(a.default(u.EMPTY_P)), g(d);
            return;
          }
          var f = l.last();
          if (h) {
            var s = f.html().toLowerCase(), m = f.getNodeName();
            if (s !== "<br>" && s !== "<br/>" || m !== "P") {
              c.append(a.default(u.EMPTY_P)), g(d);
              return;
            }
          }
          d.selection.createRangeByElem(f, !1, !0), d.config.focus ? d.selection.restoreSelection() : d.selection.clearWindowSelectionRange();
        }
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = a.__importDefault(t(3));
        function g(s) {
          d(s), h(s), c(s);
        }
        function d(s) {
          s.txt.eventHooks.changeEvents.push(function() {
            var m = s.config.onchange;
            if (m) {
              var v = s.txt.html() || "";
              s.isFocus = !0, m(v);
            }
            s.txt.togglePlaceholder();
          });
        }
        function h(s) {
          s.isFocus = !1;
          function m(v) {
            var p = v.target, A = u.default(p), y = s.$textElem, x = s.$toolbarElem, S = y.isContain(A), D = x.isContain(A), I = x.elems[0] == v.target;
            if (S)
              s.isFocus || f(s), s.isFocus = !0;
            else {
              if (D && !I || !s.isFocus)
                return;
              l(s), s.isFocus = !1;
            }
          }
          document.activeElement === s.$textElem.elems[0] && s.config.focus && (f(s), s.isFocus = !0), u.default(document).on("click", m), s.beforeDestroy(function() {
            u.default(document).off("click", m);
          });
        }
        function c(s) {
          s.$textElem.on("compositionstart", function() {
            s.isComposing = !0, s.txt.togglePlaceholder();
          }).on("compositionend", function() {
            s.isComposing = !1, s.txt.togglePlaceholder();
          });
        }
        function l(s) {
          var m, v = s.config, p = v.onblur, A = s.txt.html() || "";
          (0, r.default)(m = s.txt.eventHooks.onBlurEvents).call(m, function(y) {
            return y();
          }), p(A);
        }
        function f(s) {
          var m = s.config, v = m.onfocus, p = s.txt.html() || "";
          v(p);
        }
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        function r(a) {
          var u = a.config, g = u.lang, d = u.languages;
          if (a.i18next != null) {
            try {
              a.i18next.init({
                ns: "wangEditor",
                lng: g,
                defaultNS: "wangEditor",
                resources: d
              });
            } catch (h) {
              throw new Error("i18next:" + h);
            }
            return;
          }
          a.i18next = {
            t: function(c) {
              var l = c.split(".");
              return l[l.length - 1];
            }
          };
        }
        n.default = r;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(29));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.setUnFullScreen = n.setFullScreen = void 0;
        var a = t(2), u = a.__importDefault(t(3));
        t(421);
        var g = "w-e-icon-fullscreen", d = "w-e-icon-fullscreen_exit", h = "w-e-full-screen-editor";
        n.setFullScreen = function(l) {
          var f = u.default(l.toolbarSelector), s = l.$textContainerElem, m = l.$toolbarElem, v = (0, r.default)(m).call(m, "i." + g), p = l.config;
          v.removeClass(g), v.addClass(d), f.addClass(h), f.css("z-index", p.zIndexFullScreen);
          var A = m.getBoundingClientRect();
          s.css("height", "calc(100% - " + A.height + "px)");
        }, n.setUnFullScreen = function(l) {
          var f = u.default(l.toolbarSelector), s = l.$textContainerElem, m = l.$toolbarElem, v = (0, r.default)(m).call(m, "i." + d), p = l.config;
          v.removeClass(d), v.addClass(g), f.removeClass(h), f.css("z-index", "auto"), s.css("height", p.height + "px");
        };
        var c = function(f) {
          if (!f.textSelector && !!f.config.showFullScreen) {
            var s = f.$toolbarElem, m = u.default(`<div class="w-e-menu" data-title="\u5168\u5C4F">
            <i class="` + g + `"></i>
        </div>`);
            m.on("click", function(v) {
              var p, A = (0, r.default)(p = u.default(v.currentTarget)).call(p, "i");
              A.hasClass(g) ? (m.attr("data-title", "\u53D6\u6D88\u5168\u5C4F"), n.setFullScreen(f)) : (m.attr("data-title", "\u5168\u5C4F"), n.setUnFullScreen(f));
            }), s.append(m);
          }
        };
        n.default = c;
      },
      function(o, n, t) {
        var e = t(20), i = t(422);
        i = i.__esModule ? i.default : i, typeof i == "string" && (i = [[o.i, i, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(i, r), o.exports = i.locals || {};
      },
      function(o, n, t) {
        var e = t(21);
        n = e(!1), n.push([o.i, `.w-e-full-screen-editor {
  position: fixed;
  width: 100%!important;
  height: 100%!important;
  left: 0;
  top: 0;
}
`, ""]), o.exports = n;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(29));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = function(g, d) {
          var h, c = g.isEnable ? g.$textElem : (0, r.default)(h = g.$textContainerElem).call(h, ".w-e-content-mantle"), l = (0, r.default)(c).call(c, "[id='" + d + "']"), f = l.getOffsetData().top;
          c.scrollTop(f);
        };
        n.default = a;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(129)), u = {
          menu: 2,
          panel: 2,
          toolbar: 1,
          tooltip: 1,
          textContainer: 1
        }, g = function() {
          function d() {
            this.tier = u, this.baseZIndex = a.default.zIndex;
          }
          return d.prototype.get = function(h) {
            return h && this.tier[h] ? this.baseZIndex + this.tier[h] : this.baseZIndex;
          }, d.prototype.init = function(h) {
            this.baseZIndex == a.default.zIndex && (this.baseZIndex = h.config.zIndex);
          }, d;
        }();
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(70)), a = e(t(4));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var u = t(2), g = u.__importDefault(t(426)), d = t(6), h = t(7);
        function c(f, s) {
          return (0, r.default)(f).call(f, function(m) {
            var v = m.type, p = m.target, A = m.attributeName;
            return v != "attributes" || v == "attributes" && (A == "contenteditable" || p != s);
          });
        }
        var l = function(f) {
          u.__extends(s, f);
          function s(m) {
            var v = f.call(this, function(p, A) {
              var y;
              if (p = c(p, A.target), (y = v.data).push.apply(y, p), m.isCompatibleMode)
                v.asyncSave();
              else if (!m.isComposing)
                return v.asyncSave();
            }) || this;
            return v.editor = m, v.data = [], v.asyncSave = h.EMPTY_FN, v;
          }
          return s.prototype.save = function() {
            this.data.length && (this.editor.history.save(this.data), this.data.length = 0, this.emit());
          }, s.prototype.emit = function() {
            var m;
            (0, a.default)(m = this.editor.txt.eventHooks.changeEvents).call(m, function(v) {
              return v();
            });
          }, s.prototype.observe = function() {
            var m = this;
            f.prototype.observe.call(this, this.editor.$textElem.elems[0]);
            var v = this.editor.config.onchangeTimeout;
            this.asyncSave = d.debounce(function() {
              m.save();
            }, v), this.editor.isCompatibleMode || this.editor.$textElem.on("compositionend", function() {
              m.asyncSave();
            });
          }, s;
        }(g.default);
        n.default = l;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = function() {
          function a(u, g) {
            var d = this;
            this.options = {
              subtree: !0,
              childList: !0,
              attributes: !0,
              attributeOldValue: !0,
              characterData: !0,
              characterDataOldValue: !0
            }, this.callback = function(h) {
              u(h, d);
            }, this.observer = new MutationObserver(this.callback), g && (this.options = g);
          }
          return (0, i.default)(a.prototype, "target", {
            get: function() {
              return this.node;
            },
            enumerable: !1,
            configurable: !0
          }), a.prototype.observe = function(u) {
            this.node instanceof Node || (this.node = u, this.connect());
          }, a.prototype.connect = function() {
            if (this.node)
              return this.observer.observe(this.node, this.options), this;
            throw new Error("\u8FD8\u672A\u521D\u59CB\u5316\u7ED1\u5B9A\uFF0C\u8BF7\u60A8\u5148\u7ED1\u5B9A\u6709\u6548\u7684 Node \u8282\u70B9");
          }, a.prototype.disconnect = function() {
            var u = this.observer.takeRecords();
            u.length && this.callback(u), this.observer.disconnect();
          }, a;
        }();
        n.default = r;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(428)), u = r.__importDefault(t(435)), g = r.__importDefault(t(436)), d = function() {
          function h(c) {
            this.editor = c, this.content = new a.default(c), this.scroll = new u.default(c), this.range = new g.default(c);
          }
          return (0, i.default)(h.prototype, "size", {
            get: function() {
              return this.scroll.size;
            },
            enumerable: !1,
            configurable: !0
          }), h.prototype.observe = function() {
            this.content.observe(), this.scroll.observe(), !this.editor.isCompatibleMode && this.range.observe();
          }, h.prototype.save = function(c) {
            c.length && (this.content.save(c), this.scroll.save(), !this.editor.isCompatibleMode && this.range.save());
          }, h.prototype.revoke = function() {
            this.editor.change.disconnect();
            var c = this.content.revoke();
            c && (this.scroll.revoke(), this.editor.isCompatibleMode || (this.range.revoke(), this.editor.$textElem.focus())), this.editor.change.connect(), c && this.editor.change.emit();
          }, h.prototype.restore = function() {
            this.editor.change.disconnect();
            var c = this.content.restore();
            c && (this.scroll.restore(), this.editor.isCompatibleMode || (this.range.restore(), this.editor.$textElem.focus())), this.editor.change.connect(), c && this.editor.change.emit();
          }, h;
        }();
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(429)), u = r.__importDefault(t(433)), g = function() {
          function d(h) {
            this.editor = h;
          }
          return d.prototype.observe = function() {
            this.editor.isCompatibleMode ? this.cache = new u.default(this.editor) : this.cache = new a.default(this.editor), this.cache.observe();
          }, d.prototype.save = function(h) {
            this.editor.isCompatibleMode ? this.cache.save() : this.cache.compile(h);
          }, d.prototype.revoke = function() {
            var h;
            return (h = this.cache) === null || h === void 0 ? void 0 : h.revoke();
          }, d.prototype.restore = function() {
            var h;
            return (h = this.cache) === null || h === void 0 ? void 0 : h.restore();
          }, d;
        }();
        n.default = g;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(99)), u = r.__importDefault(t(431)), g = t(432), d = function(h) {
          r.__extends(c, h);
          function c(l) {
            var f = h.call(this, l.config.historyMaxSize) || this;
            return f.editor = l, f;
          }
          return c.prototype.observe = function() {
            this.resetMaxSize(this.editor.config.historyMaxSize);
          }, c.prototype.compile = function(l) {
            return this.save(u.default(l)), this;
          }, c.prototype.revoke = function() {
            return h.prototype.revoke.call(this, function(l) {
              g.revoke(l);
            });
          }, c.prototype.restore = function() {
            return h.prototype.restore.call(this, function(l) {
              g.restore(l);
            });
          }, c;
        }(a.default);
        n.default = d;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.CeilStack = void 0;
        var r = function() {
          function a(u) {
            u === void 0 && (u = 0), this.data = [], this.max = 0, this.reset = !1, u = Math.abs(u), u && (this.max = u);
          }
          return a.prototype.resetMax = function(u) {
            u = Math.abs(u), !this.reset && !isNaN(u) && (this.max = u, this.reset = !0);
          }, (0, i.default)(a.prototype, "size", {
            get: function() {
              return this.data.length;
            },
            enumerable: !1,
            configurable: !0
          }), a.prototype.instack = function(u) {
            return this.data.unshift(u), this.max && this.size > this.max && (this.data.length = this.max), this;
          }, a.prototype.outstack = function() {
            return this.data.shift();
          }, a.prototype.clear = function() {
            return this.data.length = 0, this;
          }, a;
        }();
        n.CeilStack = r;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4)), a = e(t(27));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.compliePosition = n.complieNodes = n.compileValue = n.compileType = void 0;
        var u = t(6);
        function g(m) {
          switch (m) {
            case "childList":
              return "node";
            case "attributes":
              return "attr";
            default:
              return "text";
          }
        }
        n.compileType = g;
        function d(m) {
          switch (m.type) {
            case "attributes":
              return m.target.getAttribute(m.attributeName) || "";
            case "characterData":
              return m.target.textContent;
            default:
              return "";
          }
        }
        n.compileValue = d;
        function h(m) {
          var v = {};
          return m.addedNodes.length && (v.add = u.toArray(m.addedNodes)), m.removedNodes.length && (v.remove = u.toArray(m.removedNodes)), v;
        }
        n.complieNodes = h;
        function c(m) {
          var v;
          return m.previousSibling ? v = {
            type: "before",
            target: m.previousSibling
          } : m.nextSibling ? v = {
            type: "after",
            target: m.nextSibling
          } : v = {
            type: "parent",
            target: m.target
          }, v;
        }
        n.compliePosition = c;
        var l = ["UL", "OL", "H1", "H2", "H3", "H4", "H5", "H6"];
        function f(m) {
          var v = [], p = !1, A = [];
          return (0, r.default)(m).call(m, function(y, x) {
            var S = {
              type: g(y.type),
              target: y.target,
              attr: y.attributeName || "",
              value: d(y) || "",
              oldValue: y.oldValue || "",
              nodes: h(y),
              position: c(y)
            };
            if (v.push(S), !!u.UA.isFirefox) {
              if (p && y.addedNodes.length && y.addedNodes[0].nodeType == 1) {
                var D = y.addedNodes[0], I = {
                  type: "node",
                  target: D,
                  attr: "",
                  value: "",
                  oldValue: "",
                  nodes: {
                    add: [p]
                  },
                  position: {
                    type: "parent",
                    target: D
                  }
                };
                (0, a.default)(l).call(l, D.nodeName) != -1 ? (I.nodes.add = u.toArray(D.childNodes), v.push(I)) : p.nodeType == 3 ? (s(D, A) && (I.nodes.add = u.toArray(D.childNodes)), v.push(I)) : (0, a.default)(l).call(l, y.target.nodeName) == -1 && s(D, A) && (I.nodes.add = u.toArray(D.childNodes), v.push(I));
              }
              S.type == "node" && y.removedNodes.length == 1 ? (p = y.removedNodes[0], A.push(p)) : (p = !1, A.length = 0);
            }
          }), v;
        }
        n.default = f;
        function s(m, v) {
          for (var p = 0, A = v.length - 1; A > 0 && m.contains(v[A]); A--)
            p++;
          return p;
        }
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(4)), a = e(t(94));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.restore = n.revoke = void 0;
        function u(A, y) {
          var x = A.position.target;
          switch (A.position.type) {
            case "before":
              x.nextSibling ? (x = x.nextSibling, (0, r.default)(y).call(y, function(S) {
                A.target.insertBefore(S, x);
              })) : (0, r.default)(y).call(y, function(S) {
                A.target.appendChild(S);
              });
              break;
            case "after":
              (0, r.default)(y).call(y, function(S) {
                A.target.insertBefore(S, x);
              });
              break;
            default:
              (0, r.default)(y).call(y, function(S) {
                x.appendChild(S);
              });
              break;
          }
        }
        function g(A) {
          for (var y = 0, x = (0, a.default)(A.nodes); y < x.length; y++) {
            var S = x[y], D = S[0], I = S[1];
            switch (D) {
              case "add":
                (0, r.default)(I).call(I, function(C) {
                  A.target.removeChild(C);
                });
                break;
              default: {
                u(A, I);
                break;
              }
            }
          }
        }
        function d(A) {
          var y = A.target;
          A.oldValue == null ? y.removeAttribute(A.attr) : y.setAttribute(A.attr, A.oldValue);
        }
        function h(A) {
          A.target.textContent = A.oldValue;
        }
        var c = {
          node: g,
          text: h,
          attr: d
        };
        function l(A) {
          for (var y = A.length - 1; y > -1; y--) {
            var x = A[y];
            c[x.type](x);
          }
        }
        n.revoke = l;
        function f(A) {
          for (var y = 0, x = (0, a.default)(A.nodes); y < x.length; y++) {
            var S = x[y], D = S[0], I = S[1];
            switch (D) {
              case "add": {
                u(A, I);
                break;
              }
              default: {
                (0, r.default)(I).call(I, function(C) {
                  C.parentNode.removeChild(C);
                });
                break;
              }
            }
          }
        }
        function s(A) {
          A.target.textContent = A.value;
        }
        function m(A) {
          A.target.setAttribute(A.attr, A.value);
        }
        var v = {
          node: f,
          text: s,
          attr: m
        };
        function p(A) {
          for (var y = 0, x = A; y < x.length; y++) {
            var S = x[y];
            v[S.type](S);
          }
        }
        n.restore = p;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(434), a = function() {
          function u(g) {
            this.editor = g, this.data = new r.TailChain();
          }
          return u.prototype.observe = function() {
            this.data.resetMax(this.editor.config.historyMaxSize), this.data.insertLast(this.editor.$textElem.html());
          }, u.prototype.save = function() {
            return this.data.insertLast(this.editor.$textElem.html()), this;
          }, u.prototype.revoke = function() {
            var g = this.data.prev();
            return g ? (this.editor.$textElem.html(g), !0) : !1;
          }, u.prototype.restore = function() {
            var g = this.data.next();
            return g ? (this.editor.$textElem.html(g), !0) : !1;
          }, u;
        }();
        n.default = a;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(91));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.TailChain = void 0;
        var a = function() {
          function u() {
            this.data = [], this.max = 0, this.point = 0, this.isRe = !1;
          }
          return u.prototype.resetMax = function(g) {
            g = Math.abs(g), g && (this.max = g);
          }, (0, i.default)(u.prototype, "size", {
            get: function() {
              return this.data.length;
            },
            enumerable: !1,
            configurable: !0
          }), u.prototype.insertLast = function(g) {
            if (this.isRe) {
              var d;
              (0, r.default)(d = this.data).call(d, this.point + 1), this.isRe = !1;
            }
            for (this.data.push(g); this.max && this.size > this.max; )
              this.data.shift();
            return this.point = this.size - 1, this;
          }, u.prototype.current = function() {
            return this.data[this.point];
          }, u.prototype.prev = function() {
            if (!this.isRe && (this.isRe = !0), this.point--, this.point < 0) {
              this.point = 0;
              return;
            }
            return this.current();
          }, u.prototype.next = function() {
            if (!this.isRe && (this.isRe = !0), this.point++, this.point >= this.size) {
              this.point = this.size - 1;
              return;
            }
            return this.current();
          }, u;
        }();
        n.TailChain = a;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(99)), u = function(g) {
          r.__extends(d, g);
          function d(h) {
            var c = g.call(this, h.config.historyMaxSize) || this;
            return c.editor = h, c.last = 0, c.target = h.$textElem.elems[0], c;
          }
          return d.prototype.observe = function() {
            var h = this;
            this.target = this.editor.$textElem.elems[0], this.editor.$textElem.on("scroll", function() {
              h.last = h.target.scrollTop;
            }), this.resetMaxSize(this.editor.config.historyMaxSize);
          }, d.prototype.save = function() {
            return g.prototype.save.call(this, [this.last, this.target.scrollTop]), this;
          }, d.prototype.revoke = function() {
            var h = this;
            return g.prototype.revoke.call(this, function(c) {
              h.target.scrollTop = c[0];
            });
          }, d.prototype.restore = function() {
            var h = this;
            return g.prototype.restore.call(this, function(c) {
              h.target.scrollTop = c[1];
            });
          }, d;
        }(a.default);
        n.default = u;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = t(2), a = r.__importDefault(t(99)), u = r.__importDefault(t(3)), g = t(6);
        function d(c) {
          return {
            start: [c.startContainer, c.startOffset],
            end: [c.endContainer, c.endOffset],
            root: c.commonAncestorContainer,
            collapsed: c.collapsed
          };
        }
        var h = function(c) {
          r.__extends(l, c);
          function l(f) {
            var s = c.call(this, f.config.historyMaxSize) || this;
            return s.editor = f, s.lastRange = d(document.createRange()), s.root = f.$textElem.elems[0], s.updateLastRange = g.debounce(function() {
              s.lastRange = d(s.rangeHandle);
            }, f.config.onchangeTimeout), s;
          }
          return (0, i.default)(l.prototype, "rangeHandle", {
            get: function() {
              var s = document.getSelection();
              return s && s.rangeCount ? s.getRangeAt(0) : document.createRange();
            },
            enumerable: !1,
            configurable: !0
          }), l.prototype.observe = function() {
            var f = this;
            this.root = this.editor.$textElem.elems[0], this.resetMaxSize(this.editor.config.historyMaxSize);
            function s() {
              var v = f.rangeHandle;
              (f.root === v.commonAncestorContainer || f.root.contains(v.commonAncestorContainer)) && (f.editor.isComposing || f.updateLastRange());
            }
            function m(v) {
              (v.key == "Backspace" || v.key == "Delete") && f.updateLastRange();
            }
            u.default(document).on("selectionchange", s), this.editor.beforeDestroy(function() {
              u.default(document).off("selectionchange", s);
            }), f.editor.$textElem.on("keydown", m);
          }, l.prototype.save = function() {
            var f = d(this.rangeHandle);
            return c.prototype.save.call(this, [this.lastRange, f]), this.lastRange = f, this;
          }, l.prototype.set = function(f) {
            try {
              if (f) {
                var s = this.rangeHandle;
                return s.setStart.apply(s, f.start), s.setEnd.apply(s, f.end), this.editor.menus.changeActive(), !0;
              }
            } catch {
              return !1;
            }
            return !1;
          }, l.prototype.revoke = function() {
            var f = this;
            return c.prototype.revoke.call(this, function(s) {
              f.set(s[0]);
            });
          }, l.prototype.restore = function() {
            var f = this;
            return c.prototype.restore.call(this, function(s) {
              f.set(s[1]);
            });
          }, l;
        }(a.default);
        n.default = h;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(29));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var a = t(2), u = a.__importDefault(t(3));
        t(438);
        function g(d) {
          var h = !1, c, l;
          d.txt.eventHooks.changeEvents.push(function() {
            h && (0, r.default)(c).call(c, ".w-e-content-preview").html(d.$textElem.html());
          });
          function f() {
            if (!h) {
              d.$textElem.hide();
              var m = d.zIndex.get("textContainer"), v = d.txt.html();
              c = u.default('<div class="w-e-content-mantle" style="z-index:' + m + `">
                <div class="w-e-content-preview w-e-text">` + v + `</div>
            </div>`), d.$textContainerElem.append(c);
              var p = d.zIndex.get("menu");
              l = u.default('<div class="w-e-menue-mantle" style="z-index:' + p + '"></div>'), d.$toolbarElem.append(l), h = !0, d.isEnable = !1;
            }
          }
          function s() {
            !h || (c.remove(), l.remove(), d.$textElem.show(), h = !1, d.isEnable = !0);
          }
          return {
            disable: f,
            enable: s
          };
        }
        n.default = g;
      },
      function(o, n, t) {
        var e = t(20), i = t(439);
        i = i.__esModule ? i.default : i, typeof i == "string" && (i = [[o.i, i, ""]]);
        var r = {};
        r.insert = "head", r.singleton = !1, e(i, r), o.exports = i.locals || {};
      },
      function(o, n, t) {
        var e = t(21);
        n = e(!1), n.push([o.i, `.w-e-content-mantle {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.w-e-content-mantle .w-e-content-preview {
  width: 100%;
  min-height: 100%;
  padding: 0 10px;
  line-height: 1.5;
}
.w-e-content-mantle .w-e-content-preview img {
  cursor: default;
}
.w-e-content-mantle .w-e-content-preview img:hover {
  box-shadow: none;
}
.w-e-menue-mantle {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
`, ""]), o.exports = n;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
        var r = function() {
          function a(u) {
            var g = this;
            this.editor = u;
            var d = function() {
              var c = document.activeElement;
              c === u.$textElem.elems[0] && g.emit();
            };
            window.document.addEventListener("selectionchange", d), this.editor.beforeDestroy(function() {
              window.document.removeEventListener("selectionchange", d);
            });
          }
          return a.prototype.emit = function() {
            var u, g = this.editor.config.onSelectionChange;
            if (g) {
              var d = this.editor.selection;
              d.saveRange(), d.isSelectionEmpty() || g({
                text: d.getSelectionText(),
                html: (u = d.getSelectionContainerElem()) === null || u === void 0 ? void 0 : u.elems[0].innerHTML,
                selection: d
              });
            }
          }, a;
        }();
        n.default = r;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1)), r = e(t(128)), a = e(t(94)), u = e(t(4));
        (0, i.default)(n, "__esModule", {
          value: !0
        }), n.registerPlugin = void 0;
        var g = t(2), d = g.__importDefault(t(87)), h = t(6);
        function c(f, s, m) {
          if (!f)
            throw new TypeError("name is not define");
          if (!s)
            throw new TypeError("options is not define");
          if (!s.intention)
            throw new TypeError("options.intention is not define");
          if (s.intention && typeof s.intention != "function")
            throw new TypeError("options.intention is not function");
          m[f] && console.warn("plugin " + f + " \u5DF2\u5B58\u5728\uFF0C\u5DF2\u8986\u76D6\u3002"), m[f] = s;
        }
        n.registerPlugin = c;
        function l(f) {
          var s = (0, r.default)({}, h.deepClone(d.default.globalPluginsFunctionList), h.deepClone(f.pluginsFunctionList)), m = (0, a.default)(s);
          (0, u.default)(m).call(m, function(v) {
            var p = v[0], A = v[1];
            console.info("plugin " + p + " initializing");
            var y = A.intention, x = A.config;
            y(f, x), console.info("plugin " + p + " initialization complete");
          });
        }
        n.default = l;
      },
      function(o, n, t) {
        var e = t(0), i = e(t(1));
        (0, i.default)(n, "__esModule", {
          value: !0
        });
      }
    ]).default;
  });
})(xn);
const ac = /* @__PURE__ */ Rn(xn.exports), ic = Cn({
  props: {
    options: {
      type: Array,
      required: !0
    },
    httpRequest: {
      type: Function
    }
  },
  emits: [
    "on-preview",
    "on-remove",
    "on-success",
    "on-error",
    "on-progress",
    "on-change",
    "before-upload",
    "before-remove",
    "on-exceed"
  ],
  setup(P, O) {
    let o = Kt(null), n = Kt(null), t = Kt(null), e = Kt(), i = () => {
      if (P.options && P.options.length) {
        let p = {}, A = {};
        P.options.map((y) => {
          p[y.prop] = y.value, A[y.prop] = y.rules, y.type === "editor" && In(() => {
            if (document.getElementById("editor")) {
              const x = new ac("#editor");
              x.config.placeholder = "", x.create(), x.txt.html(y.value), x.config.onchange = (S) => {
                o.value[y.prop] = S;
              }, e.value = x;
            }
          });
        }), o.value = qe(p), n.value = qe(A);
      }
    }, r = () => {
      if (t.value.resetFields(), P.options && P.options.length) {
        let p = P.options.find((A) => A.type === "editor");
        e.value.txt.html(p.value);
      }
    }, a = () => t.value.validate, u = () => o.value, g = (p) => {
      O.emit("on-preview", p);
    }, d = (p, A) => {
      O.emit("on-remove", { file: p, fileList: A });
    }, h = (p, A, y) => {
      let x = P.options.find((S) => S.type === "upload");
      o.value[x.prop] = { response: p, file: A, fileList: y }, O.emit("on-success", { response: p, file: A, fileList: y });
    }, c = (p, A, y) => {
      O.emit("on-error", { err: p, file: A, fileList: y });
    }, l = (p, A, y) => {
      O.emit("on-progress", { event: p, file: A, fileList: y });
    }, f = (p, A) => {
      O.emit("on-change", { file: p, fileList: A });
    }, s = (p) => {
      O.emit("before-upload", p);
    }, m = (p, A) => {
      O.emit("before-remove", { file: p, fileList: A });
    }, v = (p, A) => {
      O.emit("on-exceed", { files: p, fileList: A });
    };
    return Tn(() => {
      i();
    }), Dn(
      () => P.options,
      () => {
        i();
      },
      { deep: !0 }
    ), {
      model: o,
      rules: n,
      form: t,
      onPreview: g,
      onRemove: d,
      onSuccess: h,
      onError: c,
      onProgress: l,
      onChange: f,
      beforeUpload: s,
      beforeRemove: m,
      onExceed: v,
      resetFields: r,
      validate: a,
      getFormData: u
    };
  }
}), lc = (P, O) => {
  const o = P.__vccOpts || P;
  for (const [n, t] of O)
    o[n] = t;
  return o;
}, sc = {
  key: 2,
  id: "editor"
};
function uc(P, O, o, n, t, e) {
  const i = ae("el-upload"), r = ae("el-form-item"), a = ae("el-form");
  return P.model ? (dt(), xt(a, Jt({
    key: 0,
    ref: "form",
    "validate-on-rule-change": !1
  }, P.$attrs, {
    model: P.model,
    rules: P.rules
  }), {
    default: Nt(() => [
      (dt(!0), Wt(ie, null, Ie(P.options, (u, g) => (dt(), Wt(ie, { key: g }, [
        !u.children || !u.children.length ? (dt(), xt(r, {
          key: 0,
          label: u.label,
          prop: u.prop
        }, {
          default: Nt(() => [
            u.type !== "upload" && u.type !== "editor" ? (dt(), xt(le(`el-${u.type}`), Jt({ key: 0 }, u.attrs, {
              placeholder: u.placeholder,
              modelValue: P.model[u.prop],
              "onUpdate:modelValue": (d) => P.model[u.prop] = d
            }), null, 16, ["placeholder", "modelValue", "onUpdate:modelValue"])) : Bt("", !0),
            u.type === "upload" ? (dt(), xt(i, Jt({ key: 1 }, u.uploadAttrs, {
              "on-preview": P.onPreview,
              "on-remove": P.onRemove,
              "on-success": P.onSuccess,
              "on-error": P.onError,
              "on-progress": P.onProgress,
              "on-change": P.onChange,
              "before-upload": P.beforeUpload,
              "before-remove": P.beforeRemove,
              "http-request": P.httpRequest,
              "on-exceed": P.onExceed
            }), {
              default: Nt(() => [
                se(P.$slots, "uploadArea"),
                se(P.$slots, "uploadTip")
              ]),
              _: 2
            }, 1040, ["on-preview", "on-remove", "on-success", "on-error", "on-progress", "on-change", "before-upload", "before-remove", "http-request", "on-exceed"])) : Bt("", !0),
            u.type === "editor" ? (dt(), Wt("div", sc)) : Bt("", !0)
          ]),
          _: 2
        }, 1032, ["label", "prop"])) : Bt("", !0),
        u.children && u.children.length ? (dt(), xt(r, {
          key: 1,
          label: u.label,
          prop: u.prop
        }, {
          default: Nt(() => [
            (dt(), xt(le(`el-${u.type}`), Jt(u.attrs, {
              placeholder: u.placeholder,
              modelValue: P.model[u.prop],
              "onUpdate:modelValue": (d) => P.model[u.prop] = d
            }), {
              default: Nt(() => [
                (dt(!0), Wt(ie, null, Ie(u.children, (d, h) => (dt(), xt(le(`el-${d.type}`), {
                  key: h,
                  label: d.label,
                  value: d.value,
                  prop: d.prop
                }, null, 8, ["label", "value", "prop"]))), 128))
              ]),
              _: 2
            }, 1040, ["placeholder", "modelValue", "onUpdate:modelValue"]))
          ]),
          _: 2
        }, 1032, ["label", "prop"])) : Bt("", !0)
      ], 64))), 128)),
      Pn(r, null, {
        default: Nt(() => [
          se(P.$slots, "action", {
            form: P.form,
            model: P.model
          })
        ]),
        _: 3
      })
    ]),
    _: 3
  }, 16, ["model", "rules"])) : Bt("", !0);
}
const fc = /* @__PURE__ */ lc(ic, [["render", uc]]), dc = {
  install(P) {
    P.component("mk-form", fc);
  }
};
export {
  dc as default
};
