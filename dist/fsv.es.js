function Dy(u, c) {
  for (var o = 0; o < c.length; o++) {
    const r = c[o];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const f in r)
        if (f !== "default" && !(f in u)) {
          const m = Object.getOwnPropertyDescriptor(r, f);
          m && Object.defineProperty(u, f, m.get ? m : {
            enumerable: !0,
            get: () => r[f]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
}
function Nh(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var Pr = { exports: {} }, le = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Km;
function wy() {
  if (Km) return le;
  Km = 1;
  var u = Symbol.for("react.transitional.element"), c = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), y = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), z = Symbol.iterator;
  function D(x) {
    return x === null || typeof x != "object" ? null : (x = z && x[z] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var H = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, R = Object.assign, q = {};
  function Y(x, L, Q) {
    this.props = x, this.context = L, this.refs = q, this.updater = Q || H;
  }
  Y.prototype.isReactComponent = {}, Y.prototype.setState = function(x, L) {
    if (typeof x != "object" && typeof x != "function" && x != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, x, L, "setState");
  }, Y.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function X() {
  }
  X.prototype = Y.prototype;
  function k(x, L, Q) {
    this.props = x, this.context = L, this.refs = q, this.updater = Q || H;
  }
  var W = k.prototype = new X();
  W.constructor = k, R(W, Y.prototype), W.isPureReactComponent = !0;
  var P = Array.isArray;
  function re() {
  }
  var V = { H: null, A: null, T: null, S: null }, te = Object.prototype.hasOwnProperty;
  function ne(x, L, Q) {
    var K = Q.ref;
    return {
      $$typeof: u,
      type: x,
      key: L,
      ref: K !== void 0 ? K : null,
      props: Q
    };
  }
  function be(x, L) {
    return ne(x.type, L, x.props);
  }
  function xe(x) {
    return typeof x == "object" && x !== null && x.$$typeof === u;
  }
  function ee(x) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(Q) {
      return L[Q];
    });
  }
  var At = /\/+/g;
  function nt(x, L) {
    return typeof x == "object" && x !== null && x.key != null ? ee("" + x.key) : L.toString(36);
  }
  function et(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (typeof x.status == "string" ? x.then(re, re) : (x.status = "pending", x.then(
          function(L) {
            x.status === "pending" && (x.status = "fulfilled", x.value = L);
          },
          function(L) {
            x.status === "pending" && (x.status = "rejected", x.reason = L);
          }
        )), x.status) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function j(x, L, Q, K, ae) {
    var oe = typeof x;
    (oe === "undefined" || oe === "boolean") && (x = null);
    var Te = !1;
    if (x === null) Te = !0;
    else
      switch (oe) {
        case "bigint":
        case "string":
        case "number":
          Te = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case u:
            case c:
              Te = !0;
              break;
            case A:
              return Te = x._init, j(
                Te(x._payload),
                L,
                Q,
                K,
                ae
              );
          }
      }
    if (Te)
      return ae = ae(x), Te = K === "" ? "." + nt(x, 0) : K, P(ae) ? (Q = "", Te != null && (Q = Te.replace(At, "$&/") + "/"), j(ae, L, Q, "", function(ta) {
        return ta;
      })) : ae != null && (xe(ae) && (ae = be(
        ae,
        Q + (ae.key == null || x && x.key === ae.key ? "" : ("" + ae.key).replace(
          At,
          "$&/"
        ) + "/") + Te
      )), L.push(ae)), 1;
    Te = 0;
    var at = K === "" ? "." : K + ":";
    if (P(x))
      for (var Le = 0; Le < x.length; Le++)
        K = x[Le], oe = at + nt(K, Le), Te += j(
          K,
          L,
          Q,
          oe,
          ae
        );
    else if (Le = D(x), typeof Le == "function")
      for (x = Le.call(x), Le = 0; !(K = x.next()).done; )
        K = K.value, oe = at + nt(K, Le++), Te += j(
          K,
          L,
          Q,
          oe,
          ae
        );
    else if (oe === "object") {
      if (typeof x.then == "function")
        return j(
          et(x),
          L,
          Q,
          K,
          ae
        );
      throw L = String(x), Error(
        "Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Te;
  }
  function G(x, L, Q) {
    if (x == null) return x;
    var K = [], ae = 0;
    return j(x, K, "", "", function(oe) {
      return L.call(Q, oe, ae++);
    }), K;
  }
  function $(x) {
    if (x._status === -1) {
      var L = x._result;
      L = L(), L.then(
        function(Q) {
          (x._status === 0 || x._status === -1) && (x._status = 1, x._result = Q);
        },
        function(Q) {
          (x._status === 0 || x._status === -1) && (x._status = 2, x._result = Q);
        }
      ), x._status === -1 && (x._status = 0, x._result = L);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var ve = typeof reportError == "function" ? reportError : function(x) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var L = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
        error: x
      });
      if (!window.dispatchEvent(L)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", x);
      return;
    }
    console.error(x);
  }, Ee = {
    map: G,
    forEach: function(x, L, Q) {
      G(
        x,
        function() {
          L.apply(this, arguments);
        },
        Q
      );
    },
    count: function(x) {
      var L = 0;
      return G(x, function() {
        L++;
      }), L;
    },
    toArray: function(x) {
      return G(x, function(L) {
        return L;
      }) || [];
    },
    only: function(x) {
      if (!xe(x))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return x;
    }
  };
  return le.Activity = T, le.Children = Ee, le.Component = Y, le.Fragment = o, le.Profiler = f, le.PureComponent = k, le.StrictMode = r, le.Suspense = S, le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, le.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(x) {
      return V.H.useMemoCache(x);
    }
  }, le.cache = function(x) {
    return function() {
      return x.apply(null, arguments);
    };
  }, le.cacheSignal = function() {
    return null;
  }, le.cloneElement = function(x, L, Q) {
    if (x == null)
      throw Error(
        "The argument must be a React element, but you passed " + x + "."
      );
    var K = R({}, x.props), ae = x.key;
    if (L != null)
      for (oe in L.key !== void 0 && (ae = "" + L.key), L)
        !te.call(L, oe) || oe === "key" || oe === "__self" || oe === "__source" || oe === "ref" && L.ref === void 0 || (K[oe] = L[oe]);
    var oe = arguments.length - 2;
    if (oe === 1) K.children = Q;
    else if (1 < oe) {
      for (var Te = Array(oe), at = 0; at < oe; at++)
        Te[at] = arguments[at + 2];
      K.children = Te;
    }
    return ne(x.type, ae, K);
  }, le.createContext = function(x) {
    return x = {
      $$typeof: y,
      _currentValue: x,
      _currentValue2: x,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, x.Provider = x, x.Consumer = {
      $$typeof: m,
      _context: x
    }, x;
  }, le.createElement = function(x, L, Q) {
    var K, ae = {}, oe = null;
    if (L != null)
      for (K in L.key !== void 0 && (oe = "" + L.key), L)
        te.call(L, K) && K !== "key" && K !== "__self" && K !== "__source" && (ae[K] = L[K]);
    var Te = arguments.length - 2;
    if (Te === 1) ae.children = Q;
    else if (1 < Te) {
      for (var at = Array(Te), Le = 0; Le < Te; Le++)
        at[Le] = arguments[Le + 2];
      ae.children = at;
    }
    if (x && x.defaultProps)
      for (K in Te = x.defaultProps, Te)
        ae[K] === void 0 && (ae[K] = Te[K]);
    return ne(x, oe, ae);
  }, le.createRef = function() {
    return { current: null };
  }, le.forwardRef = function(x) {
    return { $$typeof: h, render: x };
  }, le.isValidElement = xe, le.lazy = function(x) {
    return {
      $$typeof: A,
      _payload: { _status: -1, _result: x },
      _init: $
    };
  }, le.memo = function(x, L) {
    return {
      $$typeof: g,
      type: x,
      compare: L === void 0 ? null : L
    };
  }, le.startTransition = function(x) {
    var L = V.T, Q = {};
    V.T = Q;
    try {
      var K = x(), ae = V.S;
      ae !== null && ae(Q, K), typeof K == "object" && K !== null && typeof K.then == "function" && K.then(re, ve);
    } catch (oe) {
      ve(oe);
    } finally {
      L !== null && Q.types !== null && (L.types = Q.types), V.T = L;
    }
  }, le.unstable_useCacheRefresh = function() {
    return V.H.useCacheRefresh();
  }, le.use = function(x) {
    return V.H.use(x);
  }, le.useActionState = function(x, L, Q) {
    return V.H.useActionState(x, L, Q);
  }, le.useCallback = function(x, L) {
    return V.H.useCallback(x, L);
  }, le.useContext = function(x) {
    return V.H.useContext(x);
  }, le.useDebugValue = function() {
  }, le.useDeferredValue = function(x, L) {
    return V.H.useDeferredValue(x, L);
  }, le.useEffect = function(x, L) {
    return V.H.useEffect(x, L);
  }, le.useEffectEvent = function(x) {
    return V.H.useEffectEvent(x);
  }, le.useId = function() {
    return V.H.useId();
  }, le.useImperativeHandle = function(x, L, Q) {
    return V.H.useImperativeHandle(x, L, Q);
  }, le.useInsertionEffect = function(x, L) {
    return V.H.useInsertionEffect(x, L);
  }, le.useLayoutEffect = function(x, L) {
    return V.H.useLayoutEffect(x, L);
  }, le.useMemo = function(x, L) {
    return V.H.useMemo(x, L);
  }, le.useOptimistic = function(x, L) {
    return V.H.useOptimistic(x, L);
  }, le.useReducer = function(x, L, Q) {
    return V.H.useReducer(x, L, Q);
  }, le.useRef = function(x) {
    return V.H.useRef(x);
  }, le.useState = function(x) {
    return V.H.useState(x);
  }, le.useSyncExternalStore = function(x, L, Q) {
    return V.H.useSyncExternalStore(
      x,
      L,
      Q
    );
  }, le.useTransition = function() {
    return V.H.useTransition();
  }, le.version = "19.2.4", le;
}
var Jm;
function zo() {
  return Jm || (Jm = 1, Pr.exports = wy()), Pr.exports;
}
var p = zo();
const fl = /* @__PURE__ */ Nh(p), Uy = /* @__PURE__ */ Dy({
  __proto__: null,
  default: fl
}, [p]);
var eo = { exports: {} }, ka = {}, to = { exports: {} }, lo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var km;
function Hy() {
  return km || (km = 1, (function(u) {
    function c(j, G) {
      var $ = j.length;
      j.push(G);
      e: for (; 0 < $; ) {
        var ve = $ - 1 >>> 1, Ee = j[ve];
        if (0 < f(Ee, G))
          j[ve] = G, j[$] = Ee, $ = ve;
        else break e;
      }
    }
    function o(j) {
      return j.length === 0 ? null : j[0];
    }
    function r(j) {
      if (j.length === 0) return null;
      var G = j[0], $ = j.pop();
      if ($ !== G) {
        j[0] = $;
        e: for (var ve = 0, Ee = j.length, x = Ee >>> 1; ve < x; ) {
          var L = 2 * (ve + 1) - 1, Q = j[L], K = L + 1, ae = j[K];
          if (0 > f(Q, $))
            K < Ee && 0 > f(ae, Q) ? (j[ve] = ae, j[K] = $, ve = K) : (j[ve] = Q, j[L] = $, ve = L);
          else if (K < Ee && 0 > f(ae, $))
            j[ve] = ae, j[K] = $, ve = K;
          else break e;
        }
      }
      return G;
    }
    function f(j, G) {
      var $ = j.sortIndex - G.sortIndex;
      return $ !== 0 ? $ : j.id - G.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      u.unstable_now = function() {
        return m.now();
      };
    } else {
      var y = Date, h = y.now();
      u.unstable_now = function() {
        return y.now() - h;
      };
    }
    var S = [], g = [], A = 1, T = null, z = 3, D = !1, H = !1, R = !1, q = !1, Y = typeof setTimeout == "function" ? setTimeout : null, X = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
    function W(j) {
      for (var G = o(g); G !== null; ) {
        if (G.callback === null) r(g);
        else if (G.startTime <= j)
          r(g), G.sortIndex = G.expirationTime, c(S, G);
        else break;
        G = o(g);
      }
    }
    function P(j) {
      if (R = !1, W(j), !H)
        if (o(S) !== null)
          H = !0, re || (re = !0, ee());
        else {
          var G = o(g);
          G !== null && et(P, G.startTime - j);
        }
    }
    var re = !1, V = -1, te = 5, ne = -1;
    function be() {
      return q ? !0 : !(u.unstable_now() - ne < te);
    }
    function xe() {
      if (q = !1, re) {
        var j = u.unstable_now();
        ne = j;
        var G = !0;
        try {
          e: {
            H = !1, R && (R = !1, X(V), V = -1), D = !0;
            var $ = z;
            try {
              t: {
                for (W(j), T = o(S); T !== null && !(T.expirationTime > j && be()); ) {
                  var ve = T.callback;
                  if (typeof ve == "function") {
                    T.callback = null, z = T.priorityLevel;
                    var Ee = ve(
                      T.expirationTime <= j
                    );
                    if (j = u.unstable_now(), typeof Ee == "function") {
                      T.callback = Ee, W(j), G = !0;
                      break t;
                    }
                    T === o(S) && r(S), W(j);
                  } else r(S);
                  T = o(S);
                }
                if (T !== null) G = !0;
                else {
                  var x = o(g);
                  x !== null && et(
                    P,
                    x.startTime - j
                  ), G = !1;
                }
              }
              break e;
            } finally {
              T = null, z = $, D = !1;
            }
            G = void 0;
          }
        } finally {
          G ? ee() : re = !1;
        }
      }
    }
    var ee;
    if (typeof k == "function")
      ee = function() {
        k(xe);
      };
    else if (typeof MessageChannel < "u") {
      var At = new MessageChannel(), nt = At.port2;
      At.port1.onmessage = xe, ee = function() {
        nt.postMessage(null);
      };
    } else
      ee = function() {
        Y(xe, 0);
      };
    function et(j, G) {
      V = Y(function() {
        j(u.unstable_now());
      }, G);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, u.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : te = 0 < j ? Math.floor(1e3 / j) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return z;
    }, u.unstable_next = function(j) {
      switch (z) {
        case 1:
        case 2:
        case 3:
          var G = 3;
          break;
        default:
          G = z;
      }
      var $ = z;
      z = G;
      try {
        return j();
      } finally {
        z = $;
      }
    }, u.unstable_requestPaint = function() {
      q = !0;
    }, u.unstable_runWithPriority = function(j, G) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var $ = z;
      z = j;
      try {
        return G();
      } finally {
        z = $;
      }
    }, u.unstable_scheduleCallback = function(j, G, $) {
      var ve = u.unstable_now();
      switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? ve + $ : ve) : $ = ve, j) {
        case 1:
          var Ee = -1;
          break;
        case 2:
          Ee = 250;
          break;
        case 5:
          Ee = 1073741823;
          break;
        case 4:
          Ee = 1e4;
          break;
        default:
          Ee = 5e3;
      }
      return Ee = $ + Ee, j = {
        id: A++,
        callback: G,
        priorityLevel: j,
        startTime: $,
        expirationTime: Ee,
        sortIndex: -1
      }, $ > ve ? (j.sortIndex = $, c(g, j), o(S) === null && j === o(g) && (R ? (X(V), V = -1) : R = !0, et(P, $ - ve))) : (j.sortIndex = Ee, c(S, j), H || D || (H = !0, re || (re = !0, ee()))), j;
    }, u.unstable_shouldYield = be, u.unstable_wrapCallback = function(j) {
      var G = z;
      return function() {
        var $ = z;
        z = G;
        try {
          return j.apply(this, arguments);
        } finally {
          z = $;
        }
      };
    };
  })(lo)), lo;
}
var Wm;
function By() {
  return Wm || (Wm = 1, to.exports = Hy()), to.exports;
}
var no = { exports: {} }, tt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fm;
function Ly() {
  if (Fm) return tt;
  Fm = 1;
  var u = zo();
  function c(S) {
    var g = "https://react.dev/errors/" + S;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var A = 2; A < arguments.length; A++)
        g += "&args[]=" + encodeURIComponent(arguments[A]);
    }
    return "Minified React error #" + S + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var r = {
    d: {
      f: o,
      r: function() {
        throw Error(c(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, f = Symbol.for("react.portal");
  function m(S, g, A) {
    var T = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: T == null ? null : "" + T,
      children: S,
      containerInfo: g,
      implementation: A
    };
  }
  var y = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(S, g) {
    if (S === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, tt.createPortal = function(S, g) {
    var A = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(c(299));
    return m(S, g, null, A);
  }, tt.flushSync = function(S) {
    var g = y.T, A = r.p;
    try {
      if (y.T = null, r.p = 2, S) return S();
    } finally {
      y.T = g, r.p = A, r.d.f();
    }
  }, tt.preconnect = function(S, g) {
    typeof S == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, r.d.C(S, g));
  }, tt.prefetchDNS = function(S) {
    typeof S == "string" && r.d.D(S);
  }, tt.preinit = function(S, g) {
    if (typeof S == "string" && g && typeof g.as == "string") {
      var A = g.as, T = h(A, g.crossOrigin), z = typeof g.integrity == "string" ? g.integrity : void 0, D = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      A === "style" ? r.d.S(
        S,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: T,
          integrity: z,
          fetchPriority: D
        }
      ) : A === "script" && r.d.X(S, {
        crossOrigin: T,
        integrity: z,
        fetchPriority: D,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, tt.preinitModule = function(S, g) {
    if (typeof S == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var A = h(
            g.as,
            g.crossOrigin
          );
          r.d.M(S, {
            crossOrigin: A,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && r.d.M(S);
  }, tt.preload = function(S, g) {
    if (typeof S == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var A = g.as, T = h(A, g.crossOrigin);
      r.d.L(S, A, {
        crossOrigin: T,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, tt.preloadModule = function(S, g) {
    if (typeof S == "string")
      if (g) {
        var A = h(g.as, g.crossOrigin);
        r.d.m(S, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: A,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else r.d.m(S);
  }, tt.requestFormReset = function(S) {
    r.d.r(S);
  }, tt.unstable_batchedUpdates = function(S, g) {
    return S(g);
  }, tt.useFormState = function(S, g, A) {
    return y.H.useFormState(S, g, A);
  }, tt.useFormStatus = function() {
    return y.H.useHostTransitionStatus();
  }, tt.version = "19.2.4", tt;
}
var $m;
function Ch() {
  if ($m) return no.exports;
  $m = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), no.exports = Ly(), no.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Im;
function qy() {
  if (Im) return ka;
  Im = 1;
  var u = By(), c = zo(), o = Ch();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function m(e) {
    var t = e, l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function y(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function S(e) {
    if (m(e) !== e)
      throw Error(r(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (t = m(e), t === null) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var l = e, n = t; ; ) {
      var a = l.return;
      if (a === null) break;
      var i = a.alternate;
      if (i === null) {
        if (n = a.return, n !== null) {
          l = n;
          continue;
        }
        break;
      }
      if (a.child === i.child) {
        for (i = a.child; i; ) {
          if (i === l) return S(a), e;
          if (i === n) return S(a), t;
          i = i.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== n.return) l = a, n = i;
      else {
        for (var s = !1, d = a.child; d; ) {
          if (d === l) {
            s = !0, l = a, n = i;
            break;
          }
          if (d === n) {
            s = !0, n = a, l = i;
            break;
          }
          d = d.sibling;
        }
        if (!s) {
          for (d = i.child; d; ) {
            if (d === l) {
              s = !0, l = i, n = a;
              break;
            }
            if (d === n) {
              s = !0, n = i, l = a;
              break;
            }
            d = d.sibling;
          }
          if (!s) throw Error(r(189));
        }
      }
      if (l.alternate !== n) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? e : t;
  }
  function A(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = A(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var T = Object.assign, z = Symbol.for("react.element"), D = Symbol.for("react.transitional.element"), H = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), k = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), be = Symbol.for("react.memo_cache_sentinel"), xe = Symbol.iterator;
  function ee(e) {
    return e === null || typeof e != "object" ? null : (e = xe && e[xe] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var At = Symbol.for("react.client.reference");
  function nt(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === At ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case R:
        return "Fragment";
      case Y:
        return "Profiler";
      case q:
        return "StrictMode";
      case P:
        return "Suspense";
      case re:
        return "SuspenseList";
      case ne:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case H:
          return "Portal";
        case k:
          return e.displayName || "Context";
        case X:
          return (e._context.displayName || "Context") + ".Consumer";
        case W:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case V:
          return t = e.displayName || null, t !== null ? t : nt(e.type) || "Memo";
        case te:
          t = e._payload, e = e._init;
          try {
            return nt(e(t));
          } catch {
          }
      }
    return null;
  }
  var et = Array.isArray, j = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ve = [], Ee = -1;
  function x(e) {
    return { current: e };
  }
  function L(e) {
    0 > Ee || (e.current = ve[Ee], ve[Ee] = null, Ee--);
  }
  function Q(e, t) {
    Ee++, ve[Ee] = e.current, e.current = t;
  }
  var K = x(null), ae = x(null), oe = x(null), Te = x(null);
  function at(e, t) {
    switch (Q(oe, t), Q(ae, e), Q(K, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? vm(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = vm(t), e = gm(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    L(K), Q(K, e);
  }
  function Le() {
    L(K), L(ae), L(oe);
  }
  function ta(e) {
    e.memoizedState !== null && Q(Te, e);
    var t = K.current, l = gm(t, e.type);
    t !== l && (Q(ae, e), Q(K, l));
  }
  function lu(e) {
    ae.current === e && (L(K), L(ae)), Te.current === e && (L(Te), Qa._currentValue = $);
  }
  var Ui, Qo;
  function Gl(e) {
    if (Ui === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        Ui = t && t[1] || "", Qo = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ui + e + Qo;
  }
  var Hi = !1;
  function Bi(e, t) {
    if (!e || Hi) return "";
    Hi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var B = function() {
                throw Error();
              };
              if (Object.defineProperty(B.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(B, []);
                } catch (O) {
                  var M = O;
                }
                Reflect.construct(e, [], B);
              } else {
                try {
                  B.call();
                } catch (O) {
                  M = O;
                }
                e.call(B.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (O) {
                M = O;
              }
              (B = e()) && typeof B.catch == "function" && B.catch(function() {
              });
            }
          } catch (O) {
            if (O && M && typeof O.stack == "string")
              return [O.stack, M.stack];
          }
          return [null, null];
        }
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        n.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = n.DetermineComponentFrameRoot(), s = i[0], d = i[1];
      if (s && d) {
        var b = s.split(`
`), _ = d.split(`
`);
        for (a = n = 0; n < b.length && !b[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; a < _.length && !_[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (n === b.length || a === _.length)
          for (n = b.length - 1, a = _.length - 1; 1 <= n && 0 <= a && b[n] !== _[a]; )
            a--;
        for (; 1 <= n && 0 <= a; n--, a--)
          if (b[n] !== _[a]) {
            if (n !== 1 || a !== 1)
              do
                if (n--, a--, 0 > a || b[n] !== _[a]) {
                  var w = `
` + b[n].replace(" at new ", " at ");
                  return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), w;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      Hi = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? Gl(l) : "";
  }
  function s0(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Gl(e.type);
      case 16:
        return Gl("Lazy");
      case 13:
        return e.child !== t && t !== null ? Gl("Suspense Fallback") : Gl("Suspense");
      case 19:
        return Gl("SuspenseList");
      case 0:
      case 15:
        return Bi(e.type, !1);
      case 11:
        return Bi(e.type.render, !1);
      case 1:
        return Bi(e.type, !0);
      case 31:
        return Gl("Activity");
      default:
        return "";
    }
  }
  function Zo(e) {
    try {
      var t = "", l = null;
      do
        t += s0(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var Li = Object.prototype.hasOwnProperty, qi = u.unstable_scheduleCallback, Yi = u.unstable_cancelCallback, f0 = u.unstable_shouldYield, d0 = u.unstable_requestPaint, ht = u.unstable_now, m0 = u.unstable_getCurrentPriorityLevel, Ko = u.unstable_ImmediatePriority, Jo = u.unstable_UserBlockingPriority, nu = u.unstable_NormalPriority, h0 = u.unstable_LowPriority, ko = u.unstable_IdlePriority, v0 = u.log, g0 = u.unstable_setDisableYieldValue, la = null, vt = null;
  function ml(e) {
    if (typeof v0 == "function" && g0(e), vt && typeof vt.setStrictMode == "function")
      try {
        vt.setStrictMode(la, e);
      } catch {
      }
  }
  var gt = Math.clz32 ? Math.clz32 : b0, y0 = Math.log, p0 = Math.LN2;
  function b0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (y0(e) / p0 | 0) | 0;
  }
  var au = 256, uu = 262144, iu = 4194304;
  function Xl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function cu(e, t, l) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var a = 0, i = e.suspendedLanes, s = e.pingedLanes;
    e = e.warmLanes;
    var d = n & 134217727;
    return d !== 0 ? (n = d & ~i, n !== 0 ? a = Xl(n) : (s &= d, s !== 0 ? a = Xl(s) : l || (l = d & ~e, l !== 0 && (a = Xl(l))))) : (d = n & ~i, d !== 0 ? a = Xl(d) : s !== 0 ? a = Xl(s) : l || (l = n & ~e, l !== 0 && (a = Xl(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : a;
  }
  function na(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function S0(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Wo() {
    var e = iu;
    return iu <<= 1, (iu & 62914560) === 0 && (iu = 4194304), e;
  }
  function Gi(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function aa(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function x0(e, t, l, n, a, i) {
    var s = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var d = e.entanglements, b = e.expirationTimes, _ = e.hiddenUpdates;
    for (l = s & ~l; 0 < l; ) {
      var w = 31 - gt(l), B = 1 << w;
      d[w] = 0, b[w] = -1;
      var M = _[w];
      if (M !== null)
        for (_[w] = null, w = 0; w < M.length; w++) {
          var O = M[w];
          O !== null && (O.lane &= -536870913);
        }
      l &= ~B;
    }
    n !== 0 && Fo(e, n, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(s & ~t));
  }
  function Fo(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var n = 31 - gt(t);
    e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 261930;
  }
  function $o(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var n = 31 - gt(l), a = 1 << n;
      a & t | e[n] & t && (e[n] |= t), l &= ~a;
    }
  }
  function Io(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : Xi(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function Xi(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Vi(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Po() {
    var e = G.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : qm(e.type));
  }
  function es(e, t) {
    var l = G.p;
    try {
      return G.p = e, t();
    } finally {
      G.p = l;
    }
  }
  var hl = Math.random().toString(36).slice(2), We = "__reactFiber$" + hl, ct = "__reactProps$" + hl, rn = "__reactContainer$" + hl, Qi = "__reactEvents$" + hl, E0 = "__reactListeners$" + hl, T0 = "__reactHandles$" + hl, ts = "__reactResources$" + hl, ua = "__reactMarker$" + hl;
  function Zi(e) {
    delete e[We], delete e[ct], delete e[Qi], delete e[E0], delete e[T0];
  }
  function on(e) {
    var t = e[We];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[rn] || l[We]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = Tm(e); e !== null; ) {
            if (l = e[We]) return l;
            e = Tm(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function sn(e) {
    if (e = e[We] || e[rn]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ia(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function fn(e) {
    var t = e[ts];
    return t || (t = e[ts] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Je(e) {
    e[ua] = !0;
  }
  var ls = /* @__PURE__ */ new Set(), ns = {};
  function Vl(e, t) {
    dn(e, t), dn(e + "Capture", t);
  }
  function dn(e, t) {
    for (ns[e] = t, e = 0; e < t.length; e++)
      ls.add(t[e]);
  }
  var A0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), as = {}, us = {};
  function N0(e) {
    return Li.call(us, e) ? !0 : Li.call(as, e) ? !1 : A0.test(e) ? us[e] = !0 : (as[e] = !0, !1);
  }
  function ru(e, t, l) {
    if (N0(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var n = t.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function ou(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function Kt(e, t, l, n) {
    if (n === null) e.removeAttribute(l);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + n);
    }
  }
  function Nt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function is(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function C0(e, t, l) {
    var n = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var a = n.get, i = n.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(s) {
          l = "" + s, i.call(this, s);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(s) {
          l = "" + s;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Ki(e) {
    if (!e._valueTracker) {
      var t = is(e) ? "checked" : "value";
      e._valueTracker = C0(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function cs(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), n = "";
    return e && (n = is(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
  }
  function su(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var _0 = /[\n"\\]/g;
  function Ct(e) {
    return e.replace(
      _0,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ji(e, t, l, n, a, i, s, d) {
    e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Nt(t)) : e.value !== "" + Nt(t) && (e.value = "" + Nt(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? ki(e, s, Nt(t)) : l != null ? ki(e, s, Nt(l)) : n != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.name = "" + Nt(d) : e.removeAttribute("name");
  }
  function rs(e, t, l, n, a, i, s, d) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        Ki(e);
        return;
      }
      l = l != null ? "" + Nt(l) : "", t = t != null ? "" + Nt(t) : l, d || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = d ? e.checked : !!n, e.defaultChecked = !!n, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), Ki(e);
  }
  function ki(e, t, l) {
    t === "number" && su(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function mn(e, t, l, n) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < l.length; a++)
        t["$" + l[a]] = !0;
      for (l = 0; l < e.length; l++)
        a = t.hasOwnProperty("$" + e[l].value), e[l].selected !== a && (e[l].selected = a), a && n && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + Nt(l), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === l) {
          e[a].selected = !0, n && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function os(e, t, l) {
    if (t != null && (t = "" + Nt(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Nt(l) : "";
  }
  function ss(e, t, l, n) {
    if (t == null) {
      if (n != null) {
        if (l != null) throw Error(r(92));
        if (et(n)) {
          if (1 < n.length) throw Error(r(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), t = l;
    }
    l = Nt(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n), Ki(e);
  }
  function hn(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var z0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function fs(e, t, l) {
    var n = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || z0.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function ds(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var a in t)
        n = t[a], t.hasOwnProperty(a) && l[a] !== n && fs(e, a, n);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && fs(e, i, t[i]);
  }
  function Wi(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var M0 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), O0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function fu(e) {
    return O0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Jt() {
  }
  var Fi = null;
  function $i(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var vn = null, gn = null;
  function ms(e) {
    var t = sn(e);
    if (t && (e = t.stateNode)) {
      var l = e[ct] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Ji(
            e,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), t = l.name, l.type === "radio" && t != null) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + Ct(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var n = l[t];
              if (n !== e && n.form === e.form) {
                var a = n[ct] || null;
                if (!a) throw Error(r(90));
                Ji(
                  n,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name
                );
              }
            }
            for (t = 0; t < l.length; t++)
              n = l[t], n.form === e.form && cs(n);
          }
          break e;
        case "textarea":
          os(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && mn(e, !!l.multiple, t, !1);
      }
    }
  }
  var Ii = !1;
  function hs(e, t, l) {
    if (Ii) return e(t, l);
    Ii = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (Ii = !1, (vn !== null || gn !== null) && (Iu(), vn && (t = vn, e = gn, gn = vn = null, ms(t), e)))
        for (t = 0; t < e.length; t++) ms(e[t]);
    }
  }
  function ca(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var n = l[ct] || null;
    if (n === null) return null;
    l = n[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function")
      throw Error(
        r(231, t, typeof l)
      );
    return l;
  }
  var kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Pi = !1;
  if (kt)
    try {
      var ra = {};
      Object.defineProperty(ra, "passive", {
        get: function() {
          Pi = !0;
        }
      }), window.addEventListener("test", ra, ra), window.removeEventListener("test", ra, ra);
    } catch {
      Pi = !1;
    }
  var vl = null, ec = null, du = null;
  function vs() {
    if (du) return du;
    var e, t = ec, l = t.length, n, a = "value" in vl ? vl.value : vl.textContent, i = a.length;
    for (e = 0; e < l && t[e] === a[e]; e++) ;
    var s = l - e;
    for (n = 1; n <= s && t[l - n] === a[i - n]; n++) ;
    return du = a.slice(e, 1 < n ? 1 - n : void 0);
  }
  function mu(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function hu() {
    return !0;
  }
  function gs() {
    return !1;
  }
  function rt(e) {
    function t(l, n, a, i, s) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = s, this.currentTarget = null;
      for (var d in e)
        e.hasOwnProperty(d) && (l = e[d], this[d] = l ? l(i) : i[d]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? hu : gs, this.isPropagationStopped = gs, this;
    }
    return T(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = hu);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = hu);
      },
      persist: function() {
      },
      isPersistent: hu
    }), t;
  }
  var Ql = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, vu = rt(Ql), oa = T({}, Ql, { view: 0, detail: 0 }), R0 = rt(oa), tc, lc, sa, gu = T({}, oa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ac,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== sa && (sa && e.type === "mousemove" ? (tc = e.screenX - sa.screenX, lc = e.screenY - sa.screenY) : lc = tc = 0, sa = e), tc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : lc;
    }
  }), ys = rt(gu), j0 = T({}, gu, { dataTransfer: 0 }), D0 = rt(j0), w0 = T({}, oa, { relatedTarget: 0 }), nc = rt(w0), U0 = T({}, Ql, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), H0 = rt(U0), B0 = T({}, Ql, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), L0 = rt(B0), q0 = T({}, Ql, { data: 0 }), ps = rt(q0), Y0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, G0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, X0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function V0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = X0[e]) ? !!t[e] : !1;
  }
  function ac() {
    return V0;
  }
  var Q0 = T({}, oa, {
    key: function(e) {
      if (e.key) {
        var t = Y0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = mu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? G0[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ac,
    charCode: function(e) {
      return e.type === "keypress" ? mu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? mu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Z0 = rt(Q0), K0 = T({}, gu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), bs = rt(K0), J0 = T({}, oa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ac
  }), k0 = rt(J0), W0 = T({}, Ql, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), F0 = rt(W0), $0 = T({}, gu, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), I0 = rt($0), P0 = T({}, Ql, {
    newState: 0,
    oldState: 0
  }), eg = rt(P0), tg = [9, 13, 27, 32], uc = kt && "CompositionEvent" in window, fa = null;
  kt && "documentMode" in document && (fa = document.documentMode);
  var lg = kt && "TextEvent" in window && !fa, Ss = kt && (!uc || fa && 8 < fa && 11 >= fa), xs = " ", Es = !1;
  function Ts(e, t) {
    switch (e) {
      case "keyup":
        return tg.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function As(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var yn = !1;
  function ng(e, t) {
    switch (e) {
      case "compositionend":
        return As(t);
      case "keypress":
        return t.which !== 32 ? null : (Es = !0, xs);
      case "textInput":
        return e = t.data, e === xs && Es ? null : e;
      default:
        return null;
    }
  }
  function ag(e, t) {
    if (yn)
      return e === "compositionend" || !uc && Ts(e, t) ? (e = vs(), du = ec = vl = null, yn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ss && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ug = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Ns(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ug[e.type] : t === "textarea";
  }
  function Cs(e, t, l, n) {
    vn ? gn ? gn.push(n) : gn = [n] : vn = n, t = ui(t, "onChange"), 0 < t.length && (l = new vu(
      "onChange",
      "change",
      null,
      l,
      n
    ), e.push({ event: l, listeners: t }));
  }
  var da = null, ma = null;
  function ig(e) {
    om(e, 0);
  }
  function yu(e) {
    var t = ia(e);
    if (cs(t)) return e;
  }
  function _s(e, t) {
    if (e === "change") return t;
  }
  var zs = !1;
  if (kt) {
    var ic;
    if (kt) {
      var cc = "oninput" in document;
      if (!cc) {
        var Ms = document.createElement("div");
        Ms.setAttribute("oninput", "return;"), cc = typeof Ms.oninput == "function";
      }
      ic = cc;
    } else ic = !1;
    zs = ic && (!document.documentMode || 9 < document.documentMode);
  }
  function Os() {
    da && (da.detachEvent("onpropertychange", Rs), ma = da = null);
  }
  function Rs(e) {
    if (e.propertyName === "value" && yu(ma)) {
      var t = [];
      Cs(
        t,
        ma,
        e,
        $i(e)
      ), hs(ig, t);
    }
  }
  function cg(e, t, l) {
    e === "focusin" ? (Os(), da = t, ma = l, da.attachEvent("onpropertychange", Rs)) : e === "focusout" && Os();
  }
  function rg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return yu(ma);
  }
  function og(e, t) {
    if (e === "click") return yu(t);
  }
  function sg(e, t) {
    if (e === "input" || e === "change")
      return yu(t);
  }
  function fg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var yt = typeof Object.is == "function" ? Object.is : fg;
  function ha(e, t) {
    if (yt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), n = Object.keys(t);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!Li.call(t, a) || !yt(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function js(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ds(e, t) {
    var l = js(e);
    e = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (n = e + l.textContent.length, e <= t && n >= t)
          return { node: l, offset: t - e };
        e = n;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = js(l);
    }
  }
  function ws(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ws(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Us(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = su(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = su(e.document);
    }
    return t;
  }
  function rc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var dg = kt && "documentMode" in document && 11 >= document.documentMode, pn = null, oc = null, va = null, sc = !1;
  function Hs(e, t, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    sc || pn == null || pn !== su(n) || (n = pn, "selectionStart" in n && rc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), va && ha(va, n) || (va = n, n = ui(oc, "onSelect"), 0 < n.length && (t = new vu(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: n }), t.target = pn)));
  }
  function Zl(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var bn = {
    animationend: Zl("Animation", "AnimationEnd"),
    animationiteration: Zl("Animation", "AnimationIteration"),
    animationstart: Zl("Animation", "AnimationStart"),
    transitionrun: Zl("Transition", "TransitionRun"),
    transitionstart: Zl("Transition", "TransitionStart"),
    transitioncancel: Zl("Transition", "TransitionCancel"),
    transitionend: Zl("Transition", "TransitionEnd")
  }, fc = {}, Bs = {};
  kt && (Bs = document.createElement("div").style, "AnimationEvent" in window || (delete bn.animationend.animation, delete bn.animationiteration.animation, delete bn.animationstart.animation), "TransitionEvent" in window || delete bn.transitionend.transition);
  function Kl(e) {
    if (fc[e]) return fc[e];
    if (!bn[e]) return e;
    var t = bn[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in Bs)
        return fc[e] = t[l];
    return e;
  }
  var Ls = Kl("animationend"), qs = Kl("animationiteration"), Ys = Kl("animationstart"), mg = Kl("transitionrun"), hg = Kl("transitionstart"), vg = Kl("transitioncancel"), Gs = Kl("transitionend"), Xs = /* @__PURE__ */ new Map(), dc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  dc.push("scrollEnd");
  function Ht(e, t) {
    Xs.set(e, t), Vl(t, [e]);
  }
  var pu = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, _t = [], Sn = 0, mc = 0;
  function bu() {
    for (var e = Sn, t = mc = Sn = 0; t < e; ) {
      var l = _t[t];
      _t[t++] = null;
      var n = _t[t];
      _t[t++] = null;
      var a = _t[t];
      _t[t++] = null;
      var i = _t[t];
      if (_t[t++] = null, n !== null && a !== null) {
        var s = n.pending;
        s === null ? a.next = a : (a.next = s.next, s.next = a), n.pending = a;
      }
      i !== 0 && Vs(l, a, i);
    }
  }
  function Su(e, t, l, n) {
    _t[Sn++] = e, _t[Sn++] = t, _t[Sn++] = l, _t[Sn++] = n, mc |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function hc(e, t, l, n) {
    return Su(e, t, l, n), xu(e);
  }
  function Jl(e, t) {
    return Su(e, null, null, t), xu(e);
  }
  function Vs(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, i = e.return; i !== null; )
      i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - gt(l), e = i.hiddenUpdates, n = e[a], n === null ? e[a] = [t] : n.push(t), t.lane = l | 536870912), i) : null;
  }
  function xu(e) {
    if (50 < Ba)
      throw Ba = 0, Tr = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var xn = {};
  function gg(e, t, l, n) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function pt(e, t, l, n) {
    return new gg(e, t, l, n);
  }
  function vc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Wt(e, t) {
    var l = e.alternate;
    return l === null ? (l = pt(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function Qs(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Eu(e, t, l, n, a, i) {
    var s = 0;
    if (n = e, typeof e == "function") vc(e) && (s = 1);
    else if (typeof e == "string")
      s = xy(
        e,
        l,
        K.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ne:
          return e = pt(31, l, t, a), e.elementType = ne, e.lanes = i, e;
        case R:
          return kl(l.children, a, i, t);
        case q:
          s = 8, a |= 24;
          break;
        case Y:
          return e = pt(12, l, t, a | 2), e.elementType = Y, e.lanes = i, e;
        case P:
          return e = pt(13, l, t, a), e.elementType = P, e.lanes = i, e;
        case re:
          return e = pt(19, l, t, a), e.elementType = re, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case k:
                s = 10;
                break e;
              case X:
                s = 9;
                break e;
              case W:
                s = 11;
                break e;
              case V:
                s = 14;
                break e;
              case te:
                s = 16, n = null;
                break e;
            }
          s = 29, l = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), n = null;
      }
    return t = pt(s, l, t, a), t.elementType = e, t.type = n, t.lanes = i, t;
  }
  function kl(e, t, l, n) {
    return e = pt(7, e, n, t), e.lanes = l, e;
  }
  function gc(e, t, l) {
    return e = pt(6, e, null, t), e.lanes = l, e;
  }
  function Zs(e) {
    var t = pt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function yc(e, t, l) {
    return t = pt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = l, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Ks = /* @__PURE__ */ new WeakMap();
  function zt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Ks.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: Zo(t)
      }, Ks.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Zo(t)
    };
  }
  var En = [], Tn = 0, Tu = null, ga = 0, Mt = [], Ot = 0, gl = null, Yt = 1, Gt = "";
  function Ft(e, t) {
    En[Tn++] = ga, En[Tn++] = Tu, Tu = e, ga = t;
  }
  function Js(e, t, l) {
    Mt[Ot++] = Yt, Mt[Ot++] = Gt, Mt[Ot++] = gl, gl = e;
    var n = Yt;
    e = Gt;
    var a = 32 - gt(n) - 1;
    n &= ~(1 << a), l += 1;
    var i = 32 - gt(t) + a;
    if (30 < i) {
      var s = a - a % 5;
      i = (n & (1 << s) - 1).toString(32), n >>= s, a -= s, Yt = 1 << 32 - gt(t) + a | l << a | n, Gt = i + e;
    } else
      Yt = 1 << i | l << a | n, Gt = e;
  }
  function pc(e) {
    e.return !== null && (Ft(e, 1), Js(e, 1, 0));
  }
  function bc(e) {
    for (; e === Tu; )
      Tu = En[--Tn], En[Tn] = null, ga = En[--Tn], En[Tn] = null;
    for (; e === gl; )
      gl = Mt[--Ot], Mt[Ot] = null, Gt = Mt[--Ot], Mt[Ot] = null, Yt = Mt[--Ot], Mt[Ot] = null;
  }
  function ks(e, t) {
    Mt[Ot++] = Yt, Mt[Ot++] = Gt, Mt[Ot++] = gl, Yt = t.id, Gt = t.overflow, gl = e;
  }
  var Fe = null, Re = null, he = !1, yl = null, Rt = !1, Sc = Error(r(519));
  function pl(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ya(zt(t, e)), Sc;
  }
  function Ws(e) {
    var t = e.stateNode, l = e.type, n = e.memoizedProps;
    switch (t[We] = e, t[ct] = n, l) {
      case "dialog":
        fe("cancel", t), fe("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        fe("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < qa.length; l++)
          fe(qa[l], t);
        break;
      case "source":
        fe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        fe("error", t), fe("load", t);
        break;
      case "details":
        fe("toggle", t);
        break;
      case "input":
        fe("invalid", t), rs(
          t,
          n.value,
          n.defaultValue,
          n.checked,
          n.defaultChecked,
          n.type,
          n.name,
          !0
        );
        break;
      case "select":
        fe("invalid", t);
        break;
      case "textarea":
        fe("invalid", t), ss(t, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || mm(t.textContent, l) ? (n.popover != null && (fe("beforetoggle", t), fe("toggle", t)), n.onScroll != null && fe("scroll", t), n.onScrollEnd != null && fe("scrollend", t), n.onClick != null && (t.onclick = Jt), t = !0) : t = !1, t || pl(e, !0);
  }
  function Fs(e) {
    for (Fe = e.return; Fe; )
      switch (Fe.tag) {
        case 5:
        case 31:
        case 13:
          Rt = !1;
          return;
        case 27:
        case 3:
          Rt = !0;
          return;
        default:
          Fe = Fe.return;
      }
  }
  function An(e) {
    if (e !== Fe) return !1;
    if (!he) return Fs(e), he = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Lr(e.type, e.memoizedProps)), l = !l), l && Re && pl(e), Fs(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Re = Em(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Re = Em(e);
    } else
      t === 27 ? (t = Re, jl(e.type) ? (e = Vr, Vr = null, Re = e) : Re = t) : Re = Fe ? Dt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Wl() {
    Re = Fe = null, he = !1;
  }
  function xc() {
    var e = yl;
    return e !== null && (dt === null ? dt = e : dt.push.apply(
      dt,
      e
    ), yl = null), e;
  }
  function ya(e) {
    yl === null ? yl = [e] : yl.push(e);
  }
  var Ec = x(null), Fl = null, $t = null;
  function bl(e, t, l) {
    Q(Ec, t._currentValue), t._currentValue = l;
  }
  function It(e) {
    e._currentValue = Ec.current, L(Ec);
  }
  function Tc(e, t, l) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function Ac(e, t, l, n) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var i = a.dependencies;
      if (i !== null) {
        var s = a.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var d = i;
          i = a;
          for (var b = 0; b < t.length; b++)
            if (d.context === t[b]) {
              i.lanes |= l, d = i.alternate, d !== null && (d.lanes |= l), Tc(
                i.return,
                l,
                e
              ), n || (s = null);
              break e;
            }
          i = d.next;
        }
      } else if (a.tag === 18) {
        if (s = a.return, s === null) throw Error(r(341));
        s.lanes |= l, i = s.alternate, i !== null && (i.lanes |= l), Tc(s, l, e), s = null;
      } else s = a.child;
      if (s !== null) s.return = a;
      else
        for (s = a; s !== null; ) {
          if (s === e) {
            s = null;
            break;
          }
          if (a = s.sibling, a !== null) {
            a.return = s.return, s = a;
            break;
          }
          s = s.return;
        }
      a = s;
    }
  }
  function Nn(e, t, l, n) {
    e = null;
    for (var a = t, i = !1; a !== null; ) {
      if (!i) {
        if ((a.flags & 524288) !== 0) i = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var s = a.alternate;
        if (s === null) throw Error(r(387));
        if (s = s.memoizedProps, s !== null) {
          var d = a.type;
          yt(a.pendingProps.value, s.value) || (e !== null ? e.push(d) : e = [d]);
        }
      } else if (a === Te.current) {
        if (s = a.alternate, s === null) throw Error(r(387));
        s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Qa) : e = [Qa]);
      }
      a = a.return;
    }
    e !== null && Ac(
      t,
      e,
      l,
      n
    ), t.flags |= 262144;
  }
  function Au(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!yt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function $l(e) {
    Fl = e, $t = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function $e(e) {
    return $s(Fl, e);
  }
  function Nu(e, t) {
    return Fl === null && $l(e), $s(e, t);
  }
  function $s(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, $t === null) {
      if (e === null) throw Error(r(308));
      $t = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else $t = $t.next = t;
    return l;
  }
  var yg = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(l, n) {
        e.push(n);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(l) {
        return l();
      });
    };
  }, pg = u.unstable_scheduleCallback, bg = u.unstable_NormalPriority, Ge = {
    $$typeof: k,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Nc() {
    return {
      controller: new yg(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function pa(e) {
    e.refCount--, e.refCount === 0 && pg(bg, function() {
      e.controller.abort();
    });
  }
  var ba = null, Cc = 0, Cn = 0, _n = null;
  function Sg(e, t) {
    if (ba === null) {
      var l = ba = [];
      Cc = 0, Cn = Mr(), _n = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return Cc++, t.then(Is, Is), t;
  }
  function Is() {
    if (--Cc === 0 && ba !== null) {
      _n !== null && (_n.status = "fulfilled");
      var e = ba;
      ba = null, Cn = 0, _n = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function xg(e, t) {
    var l = [], n = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        l.push(a);
      }
    };
    return e.then(
      function() {
        n.status = "fulfilled", n.value = t;
        for (var a = 0; a < l.length; a++) (0, l[a])(t);
      },
      function(a) {
        for (n.status = "rejected", n.reason = a, a = 0; a < l.length; a++)
          (0, l[a])(void 0);
      }
    ), n;
  }
  var Ps = j.S;
  j.S = function(e, t) {
    Bd = ht(), typeof t == "object" && t !== null && typeof t.then == "function" && Sg(e, t), Ps !== null && Ps(e, t);
  };
  var Il = x(null);
  function _c() {
    var e = Il.current;
    return e !== null ? e : Me.pooledCache;
  }
  function Cu(e, t) {
    t === null ? Q(Il, Il.current) : Q(Il, t.pool);
  }
  function ef() {
    var e = _c();
    return e === null ? null : { parent: Ge._currentValue, pool: e };
  }
  var zn = Error(r(460)), zc = Error(r(474)), _u = Error(r(542)), zu = { then: function() {
  } };
  function tf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function lf(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Jt, Jt), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, af(e), e;
      default:
        if (typeof t.status == "string") t.then(Jt, Jt);
        else {
          if (e = Me, e !== null && 100 < e.shellSuspendCounter)
            throw Error(r(482));
          e = t, e.status = "pending", e.then(
            function(n) {
              if (t.status === "pending") {
                var a = t;
                a.status = "fulfilled", a.value = n;
              }
            },
            function(n) {
              if (t.status === "pending") {
                var a = t;
                a.status = "rejected", a.reason = n;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, af(e), e;
        }
        throw en = t, zn;
    }
  }
  function Pl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (en = l, zn) : l;
    }
  }
  var en = null;
  function nf() {
    if (en === null) throw Error(r(459));
    var e = en;
    return en = null, e;
  }
  function af(e) {
    if (e === zn || e === _u)
      throw Error(r(483));
  }
  var Mn = null, Sa = 0;
  function Mu(e) {
    var t = Sa;
    return Sa += 1, Mn === null && (Mn = []), lf(Mn, e, t);
  }
  function xa(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Ou(e, t) {
    throw t.$$typeof === z ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function uf(e) {
    function t(N, E) {
      if (e) {
        var C = N.deletions;
        C === null ? (N.deletions = [E], N.flags |= 16) : C.push(E);
      }
    }
    function l(N, E) {
      if (!e) return null;
      for (; E !== null; )
        t(N, E), E = E.sibling;
      return null;
    }
    function n(N) {
      for (var E = /* @__PURE__ */ new Map(); N !== null; )
        N.key !== null ? E.set(N.key, N) : E.set(N.index, N), N = N.sibling;
      return E;
    }
    function a(N, E) {
      return N = Wt(N, E), N.index = 0, N.sibling = null, N;
    }
    function i(N, E, C) {
      return N.index = C, e ? (C = N.alternate, C !== null ? (C = C.index, C < E ? (N.flags |= 67108866, E) : C) : (N.flags |= 67108866, E)) : (N.flags |= 1048576, E);
    }
    function s(N) {
      return e && N.alternate === null && (N.flags |= 67108866), N;
    }
    function d(N, E, C, U) {
      return E === null || E.tag !== 6 ? (E = gc(C, N.mode, U), E.return = N, E) : (E = a(E, C), E.return = N, E);
    }
    function b(N, E, C, U) {
      var F = C.type;
      return F === R ? w(
        N,
        E,
        C.props.children,
        U,
        C.key
      ) : E !== null && (E.elementType === F || typeof F == "object" && F !== null && F.$$typeof === te && Pl(F) === E.type) ? (E = a(E, C.props), xa(E, C), E.return = N, E) : (E = Eu(
        C.type,
        C.key,
        C.props,
        null,
        N.mode,
        U
      ), xa(E, C), E.return = N, E);
    }
    function _(N, E, C, U) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== C.containerInfo || E.stateNode.implementation !== C.implementation ? (E = yc(C, N.mode, U), E.return = N, E) : (E = a(E, C.children || []), E.return = N, E);
    }
    function w(N, E, C, U, F) {
      return E === null || E.tag !== 7 ? (E = kl(
        C,
        N.mode,
        U,
        F
      ), E.return = N, E) : (E = a(E, C), E.return = N, E);
    }
    function B(N, E, C) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = gc(
          "" + E,
          N.mode,
          C
        ), E.return = N, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case D:
            return C = Eu(
              E.type,
              E.key,
              E.props,
              null,
              N.mode,
              C
            ), xa(C, E), C.return = N, C;
          case H:
            return E = yc(
              E,
              N.mode,
              C
            ), E.return = N, E;
          case te:
            return E = Pl(E), B(N, E, C);
        }
        if (et(E) || ee(E))
          return E = kl(
            E,
            N.mode,
            C,
            null
          ), E.return = N, E;
        if (typeof E.then == "function")
          return B(N, Mu(E), C);
        if (E.$$typeof === k)
          return B(
            N,
            Nu(N, E),
            C
          );
        Ou(N, E);
      }
      return null;
    }
    function M(N, E, C, U) {
      var F = E !== null ? E.key : null;
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return F !== null ? null : d(N, E, "" + C, U);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case D:
            return C.key === F ? b(N, E, C, U) : null;
          case H:
            return C.key === F ? _(N, E, C, U) : null;
          case te:
            return C = Pl(C), M(N, E, C, U);
        }
        if (et(C) || ee(C))
          return F !== null ? null : w(N, E, C, U, null);
        if (typeof C.then == "function")
          return M(
            N,
            E,
            Mu(C),
            U
          );
        if (C.$$typeof === k)
          return M(
            N,
            E,
            Nu(N, C),
            U
          );
        Ou(N, C);
      }
      return null;
    }
    function O(N, E, C, U, F) {
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return N = N.get(C) || null, d(E, N, "" + U, F);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case D:
            return N = N.get(
              U.key === null ? C : U.key
            ) || null, b(E, N, U, F);
          case H:
            return N = N.get(
              U.key === null ? C : U.key
            ) || null, _(E, N, U, F);
          case te:
            return U = Pl(U), O(
              N,
              E,
              C,
              U,
              F
            );
        }
        if (et(U) || ee(U))
          return N = N.get(C) || null, w(E, N, U, F, null);
        if (typeof U.then == "function")
          return O(
            N,
            E,
            C,
            Mu(U),
            F
          );
        if (U.$$typeof === k)
          return O(
            N,
            E,
            C,
            Nu(E, U),
            F
          );
        Ou(E, U);
      }
      return null;
    }
    function Z(N, E, C, U) {
      for (var F = null, ye = null, J = E, ie = E = 0, me = null; J !== null && ie < C.length; ie++) {
        J.index > ie ? (me = J, J = null) : me = J.sibling;
        var pe = M(
          N,
          J,
          C[ie],
          U
        );
        if (pe === null) {
          J === null && (J = me);
          break;
        }
        e && J && pe.alternate === null && t(N, J), E = i(pe, E, ie), ye === null ? F = pe : ye.sibling = pe, ye = pe, J = me;
      }
      if (ie === C.length)
        return l(N, J), he && Ft(N, ie), F;
      if (J === null) {
        for (; ie < C.length; ie++)
          J = B(N, C[ie], U), J !== null && (E = i(
            J,
            E,
            ie
          ), ye === null ? F = J : ye.sibling = J, ye = J);
        return he && Ft(N, ie), F;
      }
      for (J = n(J); ie < C.length; ie++)
        me = O(
          J,
          N,
          ie,
          C[ie],
          U
        ), me !== null && (e && me.alternate !== null && J.delete(
          me.key === null ? ie : me.key
        ), E = i(
          me,
          E,
          ie
        ), ye === null ? F = me : ye.sibling = me, ye = me);
      return e && J.forEach(function(Bl) {
        return t(N, Bl);
      }), he && Ft(N, ie), F;
    }
    function I(N, E, C, U) {
      if (C == null) throw Error(r(151));
      for (var F = null, ye = null, J = E, ie = E = 0, me = null, pe = C.next(); J !== null && !pe.done; ie++, pe = C.next()) {
        J.index > ie ? (me = J, J = null) : me = J.sibling;
        var Bl = M(N, J, pe.value, U);
        if (Bl === null) {
          J === null && (J = me);
          break;
        }
        e && J && Bl.alternate === null && t(N, J), E = i(Bl, E, ie), ye === null ? F = Bl : ye.sibling = Bl, ye = Bl, J = me;
      }
      if (pe.done)
        return l(N, J), he && Ft(N, ie), F;
      if (J === null) {
        for (; !pe.done; ie++, pe = C.next())
          pe = B(N, pe.value, U), pe !== null && (E = i(pe, E, ie), ye === null ? F = pe : ye.sibling = pe, ye = pe);
        return he && Ft(N, ie), F;
      }
      for (J = n(J); !pe.done; ie++, pe = C.next())
        pe = O(J, N, ie, pe.value, U), pe !== null && (e && pe.alternate !== null && J.delete(pe.key === null ? ie : pe.key), E = i(pe, E, ie), ye === null ? F = pe : ye.sibling = pe, ye = pe);
      return e && J.forEach(function(jy) {
        return t(N, jy);
      }), he && Ft(N, ie), F;
    }
    function ze(N, E, C, U) {
      if (typeof C == "object" && C !== null && C.type === R && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case D:
            e: {
              for (var F = C.key; E !== null; ) {
                if (E.key === F) {
                  if (F = C.type, F === R) {
                    if (E.tag === 7) {
                      l(
                        N,
                        E.sibling
                      ), U = a(
                        E,
                        C.props.children
                      ), U.return = N, N = U;
                      break e;
                    }
                  } else if (E.elementType === F || typeof F == "object" && F !== null && F.$$typeof === te && Pl(F) === E.type) {
                    l(
                      N,
                      E.sibling
                    ), U = a(E, C.props), xa(U, C), U.return = N, N = U;
                    break e;
                  }
                  l(N, E);
                  break;
                } else t(N, E);
                E = E.sibling;
              }
              C.type === R ? (U = kl(
                C.props.children,
                N.mode,
                U,
                C.key
              ), U.return = N, N = U) : (U = Eu(
                C.type,
                C.key,
                C.props,
                null,
                N.mode,
                U
              ), xa(U, C), U.return = N, N = U);
            }
            return s(N);
          case H:
            e: {
              for (F = C.key; E !== null; ) {
                if (E.key === F)
                  if (E.tag === 4 && E.stateNode.containerInfo === C.containerInfo && E.stateNode.implementation === C.implementation) {
                    l(
                      N,
                      E.sibling
                    ), U = a(E, C.children || []), U.return = N, N = U;
                    break e;
                  } else {
                    l(N, E);
                    break;
                  }
                else t(N, E);
                E = E.sibling;
              }
              U = yc(C, N.mode, U), U.return = N, N = U;
            }
            return s(N);
          case te:
            return C = Pl(C), ze(
              N,
              E,
              C,
              U
            );
        }
        if (et(C))
          return Z(
            N,
            E,
            C,
            U
          );
        if (ee(C)) {
          if (F = ee(C), typeof F != "function") throw Error(r(150));
          return C = F.call(C), I(
            N,
            E,
            C,
            U
          );
        }
        if (typeof C.then == "function")
          return ze(
            N,
            E,
            Mu(C),
            U
          );
        if (C.$$typeof === k)
          return ze(
            N,
            E,
            Nu(N, C),
            U
          );
        Ou(N, C);
      }
      return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C, E !== null && E.tag === 6 ? (l(N, E.sibling), U = a(E, C), U.return = N, N = U) : (l(N, E), U = gc(C, N.mode, U), U.return = N, N = U), s(N)) : l(N, E);
    }
    return function(N, E, C, U) {
      try {
        Sa = 0;
        var F = ze(
          N,
          E,
          C,
          U
        );
        return Mn = null, F;
      } catch (J) {
        if (J === zn || J === _u) throw J;
        var ye = pt(29, J, null, N.mode);
        return ye.lanes = U, ye.return = N, ye;
      } finally {
      }
    };
  }
  var tn = uf(!0), cf = uf(!1), Sl = !1;
  function Mc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Oc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function xl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function El(e, t, l) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (Se & 2) !== 0) {
      var a = n.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = xu(e), Vs(e, null, l), t;
    }
    return Su(e, n, t, l), xu(e);
  }
  function Ea(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, $o(e, l);
    }
  }
  function Rc(e, t) {
    var l = e.updateQueue, n = e.alternate;
    if (n !== null && (n = n.updateQueue, l === n)) {
      var a = null, i = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var s = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          i === null ? a = i = s : i = i.next = s, l = l.next;
        } while (l !== null);
        i === null ? a = i = t : i = i.next = t;
      } else a = i = t;
      l = {
        baseState: n.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: i,
        shared: n.shared,
        callbacks: n.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
  }
  var jc = !1;
  function Ta() {
    if (jc) {
      var e = _n;
      if (e !== null) throw e;
    }
  }
  function Aa(e, t, l, n) {
    jc = !1;
    var a = e.updateQueue;
    Sl = !1;
    var i = a.firstBaseUpdate, s = a.lastBaseUpdate, d = a.shared.pending;
    if (d !== null) {
      a.shared.pending = null;
      var b = d, _ = b.next;
      b.next = null, s === null ? i = _ : s.next = _, s = b;
      var w = e.alternate;
      w !== null && (w = w.updateQueue, d = w.lastBaseUpdate, d !== s && (d === null ? w.firstBaseUpdate = _ : d.next = _, w.lastBaseUpdate = b));
    }
    if (i !== null) {
      var B = a.baseState;
      s = 0, w = _ = b = null, d = i;
      do {
        var M = d.lane & -536870913, O = M !== d.lane;
        if (O ? (de & M) === M : (n & M) === M) {
          M !== 0 && M === Cn && (jc = !0), w !== null && (w = w.next = {
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: null,
            next: null
          });
          e: {
            var Z = e, I = d;
            M = t;
            var ze = l;
            switch (I.tag) {
              case 1:
                if (Z = I.payload, typeof Z == "function") {
                  B = Z.call(ze, B, M);
                  break e;
                }
                B = Z;
                break e;
              case 3:
                Z.flags = Z.flags & -65537 | 128;
              case 0:
                if (Z = I.payload, M = typeof Z == "function" ? Z.call(ze, B, M) : Z, M == null) break e;
                B = T({}, B, M);
                break e;
              case 2:
                Sl = !0;
            }
          }
          M = d.callback, M !== null && (e.flags |= 64, O && (e.flags |= 8192), O = a.callbacks, O === null ? a.callbacks = [M] : O.push(M));
        } else
          O = {
            lane: M,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          }, w === null ? (_ = w = O, b = B) : w = w.next = O, s |= M;
        if (d = d.next, d === null) {
          if (d = a.shared.pending, d === null)
            break;
          O = d, d = O.next, O.next = null, a.lastBaseUpdate = O, a.shared.pending = null;
        }
      } while (!0);
      w === null && (b = B), a.baseState = b, a.firstBaseUpdate = _, a.lastBaseUpdate = w, i === null && (a.shared.lanes = 0), _l |= s, e.lanes = s, e.memoizedState = B;
    }
  }
  function rf(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function of(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        rf(l[e], t);
  }
  var On = x(null), Ru = x(0);
  function sf(e, t) {
    e = cl, Q(Ru, e), Q(On, t), cl = e | t.baseLanes;
  }
  function Dc() {
    Q(Ru, cl), Q(On, On.current);
  }
  function wc() {
    cl = Ru.current, L(On), L(Ru);
  }
  var bt = x(null), jt = null;
  function Tl(e) {
    var t = e.alternate;
    Q(qe, qe.current & 1), Q(bt, e), jt === null && (t === null || On.current !== null || t.memoizedState !== null) && (jt = e);
  }
  function Uc(e) {
    Q(qe, qe.current), Q(bt, e), jt === null && (jt = e);
  }
  function ff(e) {
    e.tag === 22 ? (Q(qe, qe.current), Q(bt, e), jt === null && (jt = e)) : Al();
  }
  function Al() {
    Q(qe, qe.current), Q(bt, bt.current);
  }
  function St(e) {
    L(bt), jt === e && (jt = null), L(qe);
  }
  var qe = x(0);
  function ju(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Gr(l) || Xr(l)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Pt = 0, ue = null, Ce = null, Xe = null, Du = !1, Rn = !1, ln = !1, wu = 0, Na = 0, jn = null, Eg = 0;
  function He() {
    throw Error(r(321));
  }
  function Hc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!yt(e[l], t[l])) return !1;
    return !0;
  }
  function Bc(e, t, l, n, a, i) {
    return Pt = i, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, j.H = e === null || e.memoizedState === null ? kf : Ic, ln = !1, i = l(n, a), ln = !1, Rn && (i = mf(
      t,
      l,
      n,
      a
    )), df(e), i;
  }
  function df(e) {
    j.H = za;
    var t = Ce !== null && Ce.next !== null;
    if (Pt = 0, Xe = Ce = ue = null, Du = !1, Na = 0, jn = null, t) throw Error(r(300));
    e === null || Ve || (e = e.dependencies, e !== null && Au(e) && (Ve = !0));
  }
  function mf(e, t, l, n) {
    ue = e;
    var a = 0;
    do {
      if (Rn && (jn = null), Na = 0, Rn = !1, 25 <= a) throw Error(r(301));
      if (a += 1, Xe = Ce = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      j.H = Wf, i = t(l, n);
    } while (Rn);
    return i;
  }
  function Tg() {
    var e = j.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ca(t) : t, e = e.useState()[0], (Ce !== null ? Ce.memoizedState : null) !== e && (ue.flags |= 1024), t;
  }
  function Lc() {
    var e = wu !== 0;
    return wu = 0, e;
  }
  function qc(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Yc(e) {
    if (Du) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Du = !1;
    }
    Pt = 0, Xe = Ce = ue = null, Rn = !1, Na = wu = 0, jn = null;
  }
  function ut() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Xe === null ? ue.memoizedState = Xe = e : Xe = Xe.next = e, Xe;
  }
  function Ye() {
    if (Ce === null) {
      var e = ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ce.next;
    var t = Xe === null ? ue.memoizedState : Xe.next;
    if (t !== null)
      Xe = t, Ce = e;
    else {
      if (e === null)
        throw ue.alternate === null ? Error(r(467)) : Error(r(310));
      Ce = e, e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null
      }, Xe === null ? ue.memoizedState = Xe = e : Xe = Xe.next = e;
    }
    return Xe;
  }
  function Uu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ca(e) {
    var t = Na;
    return Na += 1, jn === null && (jn = []), e = lf(jn, e, t), t = ue, (Xe === null ? t.memoizedState : Xe.next) === null && (t = t.alternate, j.H = t === null || t.memoizedState === null ? kf : Ic), e;
  }
  function Hu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ca(e);
      if (e.$$typeof === k) return $e(e);
    }
    throw Error(r(438, String(e)));
  }
  function Gc(e) {
    var t = null, l = ue.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var n = ue.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (t = {
        data: n.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = Uu(), ue.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++)
        l[n] = be;
    return t.index++, l;
  }
  function el(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Bu(e) {
    var t = Ye();
    return Xc(t, Ce, e);
  }
  function Xc(e, t, l) {
    var n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = l;
    var a = e.baseQueue, i = n.pending;
    if (i !== null) {
      if (a !== null) {
        var s = a.next;
        a.next = i.next, i.next = s;
      }
      t.baseQueue = a = i, n.pending = null;
    }
    if (i = e.baseState, a === null) e.memoizedState = i;
    else {
      t = a.next;
      var d = s = null, b = null, _ = t, w = !1;
      do {
        var B = _.lane & -536870913;
        if (B !== _.lane ? (de & B) === B : (Pt & B) === B) {
          var M = _.revertLane;
          if (M === 0)
            b !== null && (b = b.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }), B === Cn && (w = !0);
          else if ((Pt & M) === M) {
            _ = _.next, M === Cn && (w = !0);
            continue;
          } else
            B = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, b === null ? (d = b = B, s = i) : b = b.next = B, ue.lanes |= M, _l |= M;
          B = _.action, ln && l(i, B), i = _.hasEagerState ? _.eagerState : l(i, B);
        } else
          M = {
            lane: B,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, b === null ? (d = b = M, s = i) : b = b.next = M, ue.lanes |= B, _l |= B;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (b === null ? s = i : b.next = d, !yt(i, e.memoizedState) && (Ve = !0, w && (l = _n, l !== null)))
        throw l;
      e.memoizedState = i, e.baseState = s, e.baseQueue = b, n.lastRenderedState = i;
    }
    return a === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function Vc(e) {
    var t = Ye(), l = t.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = e;
    var n = l.dispatch, a = l.pending, i = t.memoizedState;
    if (a !== null) {
      l.pending = null;
      var s = a = a.next;
      do
        i = e(i, s.action), s = s.next;
      while (s !== a);
      yt(i, t.memoizedState) || (Ve = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), l.lastRenderedState = i;
    }
    return [i, n];
  }
  function hf(e, t, l) {
    var n = ue, a = Ye(), i = he;
    if (i) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = t();
    var s = !yt(
      (Ce || a).memoizedState,
      l
    );
    if (s && (a.memoizedState = l, Ve = !0), a = a.queue, Kc(yf.bind(null, n, a, e), [
      e
    ]), a.getSnapshot !== t || s || Xe !== null && Xe.memoizedState.tag & 1) {
      if (n.flags |= 2048, Dn(
        9,
        { destroy: void 0 },
        gf.bind(
          null,
          n,
          a,
          l,
          t
        ),
        null
      ), Me === null) throw Error(r(349));
      i || (Pt & 127) !== 0 || vf(n, t, l);
    }
    return l;
  }
  function vf(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ue.updateQueue, t === null ? (t = Uu(), ue.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function gf(e, t, l, n) {
    t.value = l, t.getSnapshot = n, pf(t) && bf(e);
  }
  function yf(e, t, l) {
    return l(function() {
      pf(t) && bf(e);
    });
  }
  function pf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !yt(e, l);
    } catch {
      return !0;
    }
  }
  function bf(e) {
    var t = Jl(e, 2);
    t !== null && mt(t, e, 2);
  }
  function Qc(e) {
    var t = ut();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), ln) {
        ml(!0);
        try {
          l();
        } finally {
          ml(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: el,
      lastRenderedState: e
    }, t;
  }
  function Sf(e, t, l, n) {
    return e.baseState = l, Xc(
      e,
      Ce,
      typeof n == "function" ? n : el
    );
  }
  function Ag(e, t, l, n, a) {
    if (Yu(e)) throw Error(r(485));
    if (e = t.action, e !== null) {
      var i = {
        payload: a,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(s) {
          i.listeners.push(s);
        }
      };
      j.T !== null ? l(!0) : i.isTransition = !1, n(i), l = t.pending, l === null ? (i.next = t.pending = i, xf(t, i)) : (i.next = l.next, t.pending = l.next = i);
    }
  }
  function xf(e, t) {
    var l = t.action, n = t.payload, a = e.state;
    if (t.isTransition) {
      var i = j.T, s = {};
      j.T = s;
      try {
        var d = l(a, n), b = j.S;
        b !== null && b(s, d), Ef(e, t, d);
      } catch (_) {
        Zc(e, t, _);
      } finally {
        i !== null && s.types !== null && (i.types = s.types), j.T = i;
      }
    } else
      try {
        i = l(a, n), Ef(e, t, i);
      } catch (_) {
        Zc(e, t, _);
      }
  }
  function Ef(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        Tf(e, t, n);
      },
      function(n) {
        return Zc(e, t, n);
      }
    ) : Tf(e, t, l);
  }
  function Tf(e, t, l) {
    t.status = "fulfilled", t.value = l, Af(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, xf(e, l)));
  }
  function Zc(e, t, l) {
    var n = e.pending;
    if (e.pending = null, n !== null) {
      n = n.next;
      do
        t.status = "rejected", t.reason = l, Af(t), t = t.next;
      while (t !== n);
    }
    e.action = null;
  }
  function Af(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Nf(e, t) {
    return t;
  }
  function Cf(e, t) {
    if (he) {
      var l = Me.formState;
      if (l !== null) {
        e: {
          var n = ue;
          if (he) {
            if (Re) {
              t: {
                for (var a = Re, i = Rt; a.nodeType !== 8; ) {
                  if (!i) {
                    a = null;
                    break t;
                  }
                  if (a = Dt(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                i = a.data, a = i === "F!" || i === "F" ? a : null;
              }
              if (a) {
                Re = Dt(
                  a.nextSibling
                ), n = a.data === "F!";
                break e;
              }
            }
            pl(n);
          }
          n = !1;
        }
        n && (t = l[0]);
      }
    }
    return l = ut(), l.memoizedState = l.baseState = t, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Nf,
      lastRenderedState: t
    }, l.queue = n, l = Zf.bind(
      null,
      ue,
      n
    ), n.dispatch = l, n = Qc(!1), i = $c.bind(
      null,
      ue,
      !1,
      n.queue
    ), n = ut(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, n.queue = a, l = Ag.bind(
      null,
      ue,
      a,
      i,
      l
    ), a.dispatch = l, n.memoizedState = e, [t, l, !1];
  }
  function _f(e) {
    var t = Ye();
    return zf(t, Ce, e);
  }
  function zf(e, t, l) {
    if (t = Xc(
      e,
      t,
      Nf
    )[0], e = Bu(el)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var n = Ca(t);
      } catch (s) {
        throw s === zn ? _u : s;
      }
    else n = t;
    t = Ye();
    var a = t.queue, i = a.dispatch;
    return l !== t.memoizedState && (ue.flags |= 2048, Dn(
      9,
      { destroy: void 0 },
      Ng.bind(null, a, l),
      null
    )), [n, i, e];
  }
  function Ng(e, t) {
    e.action = t;
  }
  function Mf(e) {
    var t = Ye(), l = Ce;
    if (l !== null)
      return zf(t, l, e);
    Ye(), t = t.memoizedState, l = Ye();
    var n = l.queue.dispatch;
    return l.memoizedState = e, [t, n, !1];
  }
  function Dn(e, t, l, n) {
    return e = { tag: e, create: l, deps: n, inst: t, next: null }, t = ue.updateQueue, t === null && (t = Uu(), ue.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
  }
  function Of() {
    return Ye().memoizedState;
  }
  function Lu(e, t, l, n) {
    var a = ut();
    ue.flags |= e, a.memoizedState = Dn(
      1 | t,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function qu(e, t, l, n) {
    var a = Ye();
    n = n === void 0 ? null : n;
    var i = a.memoizedState.inst;
    Ce !== null && n !== null && Hc(n, Ce.memoizedState.deps) ? a.memoizedState = Dn(t, i, l, n) : (ue.flags |= e, a.memoizedState = Dn(
      1 | t,
      i,
      l,
      n
    ));
  }
  function Rf(e, t) {
    Lu(8390656, 8, e, t);
  }
  function Kc(e, t) {
    qu(2048, 8, e, t);
  }
  function Cg(e) {
    ue.flags |= 4;
    var t = ue.updateQueue;
    if (t === null)
      t = Uu(), ue.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function jf(e) {
    var t = Ye().memoizedState;
    return Cg({ ref: t, nextImpl: e }), function() {
      if ((Se & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Df(e, t) {
    return qu(4, 2, e, t);
  }
  function wf(e, t) {
    return qu(4, 4, e, t);
  }
  function Uf(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function() {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Hf(e, t, l) {
    l = l != null ? l.concat([e]) : null, qu(4, 4, Uf.bind(null, t, e), l);
  }
  function Jc() {
  }
  function Bf(e, t) {
    var l = Ye();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && Hc(t, n[1]) ? n[0] : (l.memoizedState = [e, t], e);
  }
  function Lf(e, t) {
    var l = Ye();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    if (t !== null && Hc(t, n[1]))
      return n[0];
    if (n = e(), ln) {
      ml(!0);
      try {
        e();
      } finally {
        ml(!1);
      }
    }
    return l.memoizedState = [n, t], n;
  }
  function kc(e, t, l) {
    return l === void 0 || (Pt & 1073741824) !== 0 && (de & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = qd(), ue.lanes |= e, _l |= e, l);
  }
  function qf(e, t, l, n) {
    return yt(l, t) ? l : On.current !== null ? (e = kc(e, l, n), yt(e, t) || (Ve = !0), e) : (Pt & 42) === 0 || (Pt & 1073741824) !== 0 && (de & 261930) === 0 ? (Ve = !0, e.memoizedState = l) : (e = qd(), ue.lanes |= e, _l |= e, t);
  }
  function Yf(e, t, l, n, a) {
    var i = G.p;
    G.p = i !== 0 && 8 > i ? i : 8;
    var s = j.T, d = {};
    j.T = d, $c(e, !1, t, l);
    try {
      var b = a(), _ = j.S;
      if (_ !== null && _(d, b), b !== null && typeof b == "object" && typeof b.then == "function") {
        var w = xg(
          b,
          n
        );
        _a(
          e,
          t,
          w,
          Tt(e)
        );
      } else
        _a(
          e,
          t,
          n,
          Tt(e)
        );
    } catch (B) {
      _a(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: B },
        Tt()
      );
    } finally {
      G.p = i, s !== null && d.types !== null && (s.types = d.types), j.T = s;
    }
  }
  function _g() {
  }
  function Wc(e, t, l, n) {
    if (e.tag !== 5) throw Error(r(476));
    var a = Gf(e).queue;
    Yf(
      e,
      a,
      t,
      $,
      l === null ? _g : function() {
        return Xf(e), l(n);
      }
    );
  }
  function Gf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: $,
      baseState: $,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: el,
        lastRenderedState: $
      },
      next: null
    };
    var l = {};
    return t.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: el,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Xf(e) {
    var t = Gf(e);
    t.next === null && (t = e.alternate.memoizedState), _a(
      e,
      t.next.queue,
      {},
      Tt()
    );
  }
  function Fc() {
    return $e(Qa);
  }
  function Vf() {
    return Ye().memoizedState;
  }
  function Qf() {
    return Ye().memoizedState;
  }
  function zg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Tt();
          e = xl(l);
          var n = El(t, e, l);
          n !== null && (mt(n, t, l), Ea(n, t, l)), t = { cache: Nc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Mg(e, t, l) {
    var n = Tt();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Yu(e) ? Kf(t, l) : (l = hc(e, t, l, n), l !== null && (mt(l, e, n), Jf(l, t, n)));
  }
  function Zf(e, t, l) {
    var n = Tt();
    _a(e, t, l, n);
  }
  function _a(e, t, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Yu(e)) Kf(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var s = t.lastRenderedState, d = i(s, l);
          if (a.hasEagerState = !0, a.eagerState = d, yt(d, s))
            return Su(e, t, a, 0), Me === null && bu(), !1;
        } catch {
        } finally {
        }
      if (l = hc(e, t, a, n), l !== null)
        return mt(l, e, n), Jf(l, t, n), !0;
    }
    return !1;
  }
  function $c(e, t, l, n) {
    if (n = {
      lane: 2,
      revertLane: Mr(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Yu(e)) {
      if (t) throw Error(r(479));
    } else
      t = hc(
        e,
        l,
        n,
        2
      ), t !== null && mt(t, e, 2);
  }
  function Yu(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue;
  }
  function Kf(e, t) {
    Rn = Du = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function Jf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, $o(e, l);
    }
  }
  var za = {
    readContext: $e,
    use: Hu,
    useCallback: He,
    useContext: He,
    useEffect: He,
    useImperativeHandle: He,
    useLayoutEffect: He,
    useInsertionEffect: He,
    useMemo: He,
    useReducer: He,
    useRef: He,
    useState: He,
    useDebugValue: He,
    useDeferredValue: He,
    useTransition: He,
    useSyncExternalStore: He,
    useId: He,
    useHostTransitionStatus: He,
    useFormState: He,
    useActionState: He,
    useOptimistic: He,
    useMemoCache: He,
    useCacheRefresh: He
  };
  za.useEffectEvent = He;
  var kf = {
    readContext: $e,
    use: Hu,
    useCallback: function(e, t) {
      return ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: $e,
    useEffect: Rf,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, Lu(
        4194308,
        4,
        Uf.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return Lu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Lu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = ut();
      t = t === void 0 ? null : t;
      var n = e();
      if (ln) {
        ml(!0);
        try {
          e();
        } finally {
          ml(!1);
        }
      }
      return l.memoizedState = [n, t], n;
    },
    useReducer: function(e, t, l) {
      var n = ut();
      if (l !== void 0) {
        var a = l(t);
        if (ln) {
          ml(!0);
          try {
            l(t);
          } finally {
            ml(!1);
          }
        }
      } else a = t;
      return n.memoizedState = n.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, n.queue = e, e = e.dispatch = Mg.bind(
        null,
        ue,
        e
      ), [n.memoizedState, e];
    },
    useRef: function(e) {
      var t = ut();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Qc(e);
      var t = e.queue, l = Zf.bind(null, ue, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: Jc,
    useDeferredValue: function(e, t) {
      var l = ut();
      return kc(l, e, t);
    },
    useTransition: function() {
      var e = Qc(!1);
      return e = Yf.bind(
        null,
        ue,
        e.queue,
        !0,
        !1
      ), ut().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var n = ue, a = ut();
      if (he) {
        if (l === void 0)
          throw Error(r(407));
        l = l();
      } else {
        if (l = t(), Me === null)
          throw Error(r(349));
        (de & 127) !== 0 || vf(n, t, l);
      }
      a.memoizedState = l;
      var i = { value: l, getSnapshot: t };
      return a.queue = i, Rf(yf.bind(null, n, i, e), [
        e
      ]), n.flags |= 2048, Dn(
        9,
        { destroy: void 0 },
        gf.bind(
          null,
          n,
          i,
          l,
          t
        ),
        null
      ), l;
    },
    useId: function() {
      var e = ut(), t = Me.identifierPrefix;
      if (he) {
        var l = Gt, n = Yt;
        l = (n & ~(1 << 32 - gt(n) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = wu++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = Eg++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Fc,
    useFormState: Cf,
    useActionState: Cf,
    useOptimistic: function(e) {
      var t = ut();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = $c.bind(
        null,
        ue,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Gc,
    useCacheRefresh: function() {
      return ut().memoizedState = zg.bind(
        null,
        ue
      );
    },
    useEffectEvent: function(e) {
      var t = ut(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((Se & 2) !== 0)
          throw Error(r(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Ic = {
    readContext: $e,
    use: Hu,
    useCallback: Bf,
    useContext: $e,
    useEffect: Kc,
    useImperativeHandle: Hf,
    useInsertionEffect: Df,
    useLayoutEffect: wf,
    useMemo: Lf,
    useReducer: Bu,
    useRef: Of,
    useState: function() {
      return Bu(el);
    },
    useDebugValue: Jc,
    useDeferredValue: function(e, t) {
      var l = Ye();
      return qf(
        l,
        Ce.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Bu(el)[0], t = Ye().memoizedState;
      return [
        typeof e == "boolean" ? e : Ca(e),
        t
      ];
    },
    useSyncExternalStore: hf,
    useId: Vf,
    useHostTransitionStatus: Fc,
    useFormState: _f,
    useActionState: _f,
    useOptimistic: function(e, t) {
      var l = Ye();
      return Sf(l, Ce, e, t);
    },
    useMemoCache: Gc,
    useCacheRefresh: Qf
  };
  Ic.useEffectEvent = jf;
  var Wf = {
    readContext: $e,
    use: Hu,
    useCallback: Bf,
    useContext: $e,
    useEffect: Kc,
    useImperativeHandle: Hf,
    useInsertionEffect: Df,
    useLayoutEffect: wf,
    useMemo: Lf,
    useReducer: Vc,
    useRef: Of,
    useState: function() {
      return Vc(el);
    },
    useDebugValue: Jc,
    useDeferredValue: function(e, t) {
      var l = Ye();
      return Ce === null ? kc(l, e, t) : qf(
        l,
        Ce.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Vc(el)[0], t = Ye().memoizedState;
      return [
        typeof e == "boolean" ? e : Ca(e),
        t
      ];
    },
    useSyncExternalStore: hf,
    useId: Vf,
    useHostTransitionStatus: Fc,
    useFormState: Mf,
    useActionState: Mf,
    useOptimistic: function(e, t) {
      var l = Ye();
      return Ce !== null ? Sf(l, Ce, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Gc,
    useCacheRefresh: Qf
  };
  Wf.useEffectEvent = jf;
  function Pc(e, t, l, n) {
    t = e.memoizedState, l = l(n, t), l = l == null ? t : T({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var er = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var n = Tt(), a = xl(n);
      a.payload = t, l != null && (a.callback = l), t = El(e, a, n), t !== null && (mt(t, e, n), Ea(t, e, n));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var n = Tt(), a = xl(n);
      a.tag = 1, a.payload = t, l != null && (a.callback = l), t = El(e, a, n), t !== null && (mt(t, e, n), Ea(t, e, n));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Tt(), n = xl(l);
      n.tag = 2, t != null && (n.callback = t), t = El(e, n, l), t !== null && (mt(t, e, l), Ea(t, e, l));
    }
  };
  function Ff(e, t, l, n, a, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, s) : t.prototype && t.prototype.isPureReactComponent ? !ha(l, n) || !ha(a, i) : !0;
  }
  function $f(e, t, l, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && er.enqueueReplaceState(t, t.state, null);
  }
  function nn(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var n in t)
        n !== "ref" && (l[n] = t[n]);
    }
    if (e = e.defaultProps) {
      l === t && (l = T({}, l));
      for (var a in e)
        l[a] === void 0 && (l[a] = e[a]);
    }
    return l;
  }
  function If(e) {
    pu(e);
  }
  function Pf(e) {
    console.error(e);
  }
  function ed(e) {
    pu(e);
  }
  function Gu(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function td(e, t, l) {
    try {
      var n = e.onCaughtError;
      n(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function tr(e, t, l) {
    return l = xl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Gu(e, t);
    }, l;
  }
  function ld(e) {
    return e = xl(e), e.tag = 3, e;
  }
  function nd(e, t, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var i = n.value;
      e.payload = function() {
        return a(i);
      }, e.callback = function() {
        td(t, l, n);
      };
    }
    var s = l.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (e.callback = function() {
      td(t, l, n), typeof a != "function" && (zl === null ? zl = /* @__PURE__ */ new Set([this]) : zl.add(this));
      var d = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: d !== null ? d : ""
      });
    });
  }
  function Og(e, t, l, n, a) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (t = l.alternate, t !== null && Nn(
        t,
        l,
        a,
        !0
      ), l = bt.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return jt === null ? Pu() : l.alternate === null && Be === 0 && (Be = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === zu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : t.add(n), Cr(e, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === zu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Cr(e, n, a)), !1;
        }
        throw Error(r(435, l.tag));
      }
      return Cr(e, n, a), Pu(), !1;
    }
    if (he)
      return t = bt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== Sc && (e = Error(r(422), { cause: n }), ya(zt(e, l)))) : (n !== Sc && (t = Error(r(423), {
        cause: n
      }), ya(
        zt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = zt(n, l), a = tr(
        e.stateNode,
        n,
        a
      ), Rc(e, a), Be !== 4 && (Be = 2)), !1;
    var i = Error(r(520), { cause: n });
    if (i = zt(i, l), Ha === null ? Ha = [i] : Ha.push(i), Be !== 4 && (Be = 2), t === null) return !0;
    n = zt(n, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = a & -a, l.lanes |= e, e = tr(l.stateNode, n, e), Rc(l, e), !1;
        case 1:
          if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (zl === null || !zl.has(i))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = ld(a), nd(
              a,
              e,
              l,
              n
            ), Rc(l, a), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var lr = Error(r(461)), Ve = !1;
  function Ie(e, t, l, n) {
    t.child = e === null ? cf(t, null, l, n) : tn(
      t,
      e.child,
      l,
      n
    );
  }
  function ad(e, t, l, n, a) {
    l = l.render;
    var i = t.ref;
    if ("ref" in n) {
      var s = {};
      for (var d in n)
        d !== "ref" && (s[d] = n[d]);
    } else s = n;
    return $l(t), n = Bc(
      e,
      t,
      l,
      s,
      i,
      a
    ), d = Lc(), e !== null && !Ve ? (qc(e, t, a), tl(e, t, a)) : (he && d && pc(t), t.flags |= 1, Ie(e, t, n, a), t.child);
  }
  function ud(e, t, l, n, a) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" && !vc(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, id(
        e,
        t,
        i,
        n,
        a
      )) : (e = Eu(
        l.type,
        null,
        n,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !sr(e, a)) {
      var s = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ha, l(s, n) && e.ref === t.ref)
        return tl(e, t, a);
    }
    return t.flags |= 1, e = Wt(i, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function id(e, t, l, n, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (ha(i, n) && e.ref === t.ref)
        if (Ve = !1, t.pendingProps = n = i, sr(e, a))
          (e.flags & 131072) !== 0 && (Ve = !0);
        else
          return t.lanes = e.lanes, tl(e, t, a);
    }
    return nr(
      e,
      t,
      l,
      n,
      a
    );
  }
  function cd(e, t, l, n) {
    var a = n.children, i = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | l : l, e !== null) {
          for (n = t.child = e.child, a = 0; n !== null; )
            a = a | n.lanes | n.childLanes, n = n.sibling;
          n = a & ~i;
        } else n = 0, t.child = null;
        return rd(
          e,
          t,
          i,
          l,
          n
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Cu(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? sf(t, i) : Dc(), ff(t);
      else
        return n = t.lanes = 536870912, rd(
          e,
          t,
          i !== null ? i.baseLanes | l : l,
          l,
          n
        );
    } else
      i !== null ? (Cu(t, i.cachePool), sf(t, i), Al(), t.memoizedState = null) : (e !== null && Cu(t, null), Dc(), Al());
    return Ie(e, t, a, l), t.child;
  }
  function Ma(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function rd(e, t, l, n, a) {
    var i = _c();
    return i = i === null ? null : { parent: Ge._currentValue, pool: i }, t.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, e !== null && Cu(t, null), Dc(), ff(t), e !== null && Nn(e, t, n, !0), t.childLanes = a, null;
  }
  function Xu(e, t) {
    return t = Qu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function od(e, t, l) {
    return tn(t, e.child, null, l), e = Xu(t, t.pendingProps), e.flags |= 2, St(t), t.memoizedState = null, e;
  }
  function Rg(e, t, l) {
    var n = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (he) {
        if (n.mode === "hidden")
          return e = Xu(t, n), t.lanes = 536870912, Ma(null, e);
        if (Uc(t), (e = Re) ? (e = xm(
          e,
          Rt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: gl !== null ? { id: Yt, overflow: Gt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Zs(e), l.return = t, t.child = l, Fe = t, Re = null)) : e = null, e === null) throw pl(t);
        return t.lanes = 536870912, null;
      }
      return Xu(t, n);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var s = i.dehydrated;
      if (Uc(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = od(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (Ve || Nn(e, t, l, !1), a = (l & e.childLanes) !== 0, Ve || a) {
        if (n = Me, n !== null && (s = Io(n, l), s !== 0 && s !== i.retryLane))
          throw i.retryLane = s, Jl(e, s), mt(n, e, s), lr;
        Pu(), t = od(
          e,
          t,
          l
        );
      } else
        e = i.treeContext, Re = Dt(s.nextSibling), Fe = t, he = !0, yl = null, Rt = !1, e !== null && ks(t, e), t = Xu(t, n), t.flags |= 4096;
      return t;
    }
    return e = Wt(e.child, {
      mode: n.mode,
      children: n.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Vu(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(r(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function nr(e, t, l, n, a) {
    return $l(t), l = Bc(
      e,
      t,
      l,
      n,
      void 0,
      a
    ), n = Lc(), e !== null && !Ve ? (qc(e, t, a), tl(e, t, a)) : (he && n && pc(t), t.flags |= 1, Ie(e, t, l, a), t.child);
  }
  function sd(e, t, l, n, a, i) {
    return $l(t), t.updateQueue = null, l = mf(
      t,
      n,
      l,
      a
    ), df(e), n = Lc(), e !== null && !Ve ? (qc(e, t, i), tl(e, t, i)) : (he && n && pc(t), t.flags |= 1, Ie(e, t, l, i), t.child);
  }
  function fd(e, t, l, n, a) {
    if ($l(t), t.stateNode === null) {
      var i = xn, s = l.contextType;
      typeof s == "object" && s !== null && (i = $e(s)), i = new l(n, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = er, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = n, i.state = t.memoizedState, i.refs = {}, Mc(t), s = l.contextType, i.context = typeof s == "object" && s !== null ? $e(s) : xn, i.state = t.memoizedState, s = l.getDerivedStateFromProps, typeof s == "function" && (Pc(
        t,
        l,
        s,
        n
      ), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (s = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), s !== i.state && er.enqueueReplaceState(i, i.state, null), Aa(t, n, i, a), Ta(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    } else if (e === null) {
      i = t.stateNode;
      var d = t.memoizedProps, b = nn(l, d);
      i.props = b;
      var _ = i.context, w = l.contextType;
      s = xn, typeof w == "object" && w !== null && (s = $e(w));
      var B = l.getDerivedStateFromProps;
      w = typeof B == "function" || typeof i.getSnapshotBeforeUpdate == "function", d = t.pendingProps !== d, w || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (d || _ !== s) && $f(
        t,
        i,
        n,
        s
      ), Sl = !1;
      var M = t.memoizedState;
      i.state = M, Aa(t, n, i, a), Ta(), _ = t.memoizedState, d || M !== _ || Sl ? (typeof B == "function" && (Pc(
        t,
        l,
        B,
        n
      ), _ = t.memoizedState), (b = Sl || Ff(
        t,
        l,
        b,
        n,
        M,
        _,
        s
      )) ? (w || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = _), i.props = n, i.state = _, i.context = s, n = b) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      i = t.stateNode, Oc(e, t), s = t.memoizedProps, w = nn(l, s), i.props = w, B = t.pendingProps, M = i.context, _ = l.contextType, b = xn, typeof _ == "object" && _ !== null && (b = $e(_)), d = l.getDerivedStateFromProps, (_ = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== B || M !== b) && $f(
        t,
        i,
        n,
        b
      ), Sl = !1, M = t.memoizedState, i.state = M, Aa(t, n, i, a), Ta();
      var O = t.memoizedState;
      s !== B || M !== O || Sl || e !== null && e.dependencies !== null && Au(e.dependencies) ? (typeof d == "function" && (Pc(
        t,
        l,
        d,
        n
      ), O = t.memoizedState), (w = Sl || Ff(
        t,
        l,
        w,
        n,
        M,
        O,
        b
      ) || e !== null && e.dependencies !== null && Au(e.dependencies)) ? (_ || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, O, b), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        n,
        O,
        b
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = O), i.props = n, i.state = O, i.context = b, n = w) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), n = !1);
    }
    return i = n, Vu(e, t), n = (t.flags & 128) !== 0, i || n ? (i = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && n ? (t.child = tn(
      t,
      e.child,
      null,
      a
    ), t.child = tn(
      t,
      null,
      l,
      a
    )) : Ie(e, t, l, a), t.memoizedState = i.state, e = t.child) : e = tl(
      e,
      t,
      a
    ), e;
  }
  function dd(e, t, l, n) {
    return Wl(), t.flags |= 256, Ie(e, t, l, n), t.child;
  }
  var ar = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ur(e) {
    return { baseLanes: e, cachePool: ef() };
  }
  function ir(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Et), e;
  }
  function md(e, t, l) {
    var n = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, s;
    if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (qe.current & 2) !== 0), s && (a = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (he) {
        if (a ? Tl(t) : Al(), (e = Re) ? (e = xm(
          e,
          Rt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: gl !== null ? { id: Yt, overflow: Gt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Zs(e), l.return = t, t.child = l, Fe = t, Re = null)) : e = null, e === null) throw pl(t);
        return Xr(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var d = n.children;
      return n = n.fallback, a ? (Al(), a = t.mode, d = Qu(
        { mode: "hidden", children: d },
        a
      ), n = kl(
        n,
        a,
        l,
        null
      ), d.return = t, n.return = t, d.sibling = n, t.child = d, n = t.child, n.memoizedState = ur(l), n.childLanes = ir(
        e,
        s,
        l
      ), t.memoizedState = ar, Ma(null, n)) : (Tl(t), cr(t, d));
    }
    var b = e.memoizedState;
    if (b !== null && (d = b.dehydrated, d !== null)) {
      if (i)
        t.flags & 256 ? (Tl(t), t.flags &= -257, t = rr(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Al(), t.child = e.child, t.flags |= 128, t = null) : (Al(), d = n.fallback, a = t.mode, n = Qu(
          { mode: "visible", children: n.children },
          a
        ), d = kl(
          d,
          a,
          l,
          null
        ), d.flags |= 2, n.return = t, d.return = t, n.sibling = d, t.child = n, tn(
          t,
          e.child,
          null,
          l
        ), n = t.child, n.memoizedState = ur(l), n.childLanes = ir(
          e,
          s,
          l
        ), t.memoizedState = ar, t = Ma(null, n));
      else if (Tl(t), Xr(d)) {
        if (s = d.nextSibling && d.nextSibling.dataset, s) var _ = s.dgst;
        s = _, n = Error(r(419)), n.stack = "", n.digest = s, ya({ value: n, source: null, stack: null }), t = rr(
          e,
          t,
          l
        );
      } else if (Ve || Nn(e, t, l, !1), s = (l & e.childLanes) !== 0, Ve || s) {
        if (s = Me, s !== null && (n = Io(s, l), n !== 0 && n !== b.retryLane))
          throw b.retryLane = n, Jl(e, n), mt(s, e, n), lr;
        Gr(d) || Pu(), t = rr(
          e,
          t,
          l
        );
      } else
        Gr(d) ? (t.flags |= 192, t.child = e.child, t = null) : (e = b.treeContext, Re = Dt(
          d.nextSibling
        ), Fe = t, he = !0, yl = null, Rt = !1, e !== null && ks(t, e), t = cr(
          t,
          n.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (Al(), d = n.fallback, a = t.mode, b = e.child, _ = b.sibling, n = Wt(b, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = b.subtreeFlags & 65011712, _ !== null ? d = Wt(
      _,
      d
    ) : (d = kl(
      d,
      a,
      l,
      null
    ), d.flags |= 2), d.return = t, n.return = t, n.sibling = d, t.child = n, Ma(null, n), n = t.child, d = e.child.memoizedState, d === null ? d = ur(l) : (a = d.cachePool, a !== null ? (b = Ge._currentValue, a = a.parent !== b ? { parent: b, pool: b } : a) : a = ef(), d = {
      baseLanes: d.baseLanes | l,
      cachePool: a
    }), n.memoizedState = d, n.childLanes = ir(
      e,
      s,
      l
    ), t.memoizedState = ar, Ma(e.child, n)) : (Tl(t), l = e.child, e = l.sibling, l = Wt(l, {
      mode: "visible",
      children: n.children
    }), l.return = t, l.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function cr(e, t) {
    return t = Qu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Qu(e, t) {
    return e = pt(22, e, null, t), e.lanes = 0, e;
  }
  function rr(e, t, l) {
    return tn(t, e.child, null, l), e = cr(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function hd(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Tc(e.return, t, l);
  }
  function or(e, t, l, n, a, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: l,
      tailMode: a,
      treeForkCount: i
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = n, s.tail = l, s.tailMode = a, s.treeForkCount = i);
  }
  function vd(e, t, l) {
    var n = t.pendingProps, a = n.revealOrder, i = n.tail;
    n = n.children;
    var s = qe.current, d = (s & 2) !== 0;
    if (d ? (s = s & 1 | 2, t.flags |= 128) : s &= 1, Q(qe, s), Ie(e, t, n, l), n = he ? ga : 0, !d && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && hd(e, l, t);
        else if (e.tag === 19)
          hd(e, l, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (a) {
      case "forwards":
        for (l = t.child, a = null; l !== null; )
          e = l.alternate, e !== null && ju(e) === null && (a = l), l = l.sibling;
        l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), or(
          t,
          !1,
          a,
          l,
          i,
          n
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && ju(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = l, l = a, a = e;
        }
        or(
          t,
          !0,
          l,
          null,
          i,
          n
        );
        break;
      case "together":
        or(
          t,
          !1,
          null,
          null,
          void 0,
          n
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function tl(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), _l |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (Nn(
          e,
          t,
          l,
          !1
        ), (l & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (e = t.child, l = Wt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = Wt(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function sr(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Au(e)));
  }
  function jg(e, t, l) {
    switch (t.tag) {
      case 3:
        at(t, t.stateNode.containerInfo), bl(t, Ge, e.memoizedState.cache), Wl();
        break;
      case 27:
      case 5:
        ta(t);
        break;
      case 4:
        at(t, t.stateNode.containerInfo);
        break;
      case 10:
        bl(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Uc(t), null;
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Tl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? md(e, t, l) : (Tl(t), e = tl(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        Tl(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (n = (l & t.childLanes) !== 0, n || (Nn(
          e,
          t,
          l,
          !1
        ), n = (l & t.childLanes) !== 0), a) {
          if (n)
            return vd(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Q(qe, qe.current), n) break;
        return null;
      case 22:
        return t.lanes = 0, cd(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        bl(t, Ge, e.memoizedState.cache);
    }
    return tl(e, t, l);
  }
  function gd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ve = !0;
      else {
        if (!sr(e, l) && (t.flags & 128) === 0)
          return Ve = !1, jg(
            e,
            t,
            l
          );
        Ve = (e.flags & 131072) !== 0;
      }
    else
      Ve = !1, he && (t.flags & 1048576) !== 0 && Js(t, ga, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (e = Pl(t.elementType), t.type = e, typeof e == "function")
            vc(e) ? (n = nn(e, n), t.tag = 1, t = fd(
              null,
              t,
              e,
              n,
              l
            )) : (t.tag = 0, t = nr(
              null,
              t,
              e,
              n,
              l
            ));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === W) {
                t.tag = 11, t = ad(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              } else if (a === V) {
                t.tag = 14, t = ud(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              }
            }
            throw t = nt(e) || e, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return nr(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return n = t.type, a = nn(
          n,
          t.pendingProps
        ), fd(
          e,
          t,
          n,
          a,
          l
        );
      case 3:
        e: {
          if (at(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(r(387));
          n = t.pendingProps;
          var i = t.memoizedState;
          a = i.element, Oc(e, t), Aa(t, n, null, l);
          var s = t.memoizedState;
          if (n = s.cache, bl(t, Ge, n), n !== i.cache && Ac(
            t,
            [Ge],
            l,
            !0
          ), Ta(), n = s.element, i.isDehydrated)
            if (i = {
              element: n,
              isDehydrated: !1,
              cache: s.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = dd(
                e,
                t,
                n,
                l
              );
              break e;
            } else if (n !== a) {
              a = zt(
                Error(r(424)),
                t
              ), ya(a), t = dd(
                e,
                t,
                n,
                l
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Re = Dt(e.firstChild), Fe = t, he = !0, yl = null, Rt = !0, l = cf(
                t,
                null,
                n,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if (Wl(), n === a) {
              t = tl(
                e,
                t,
                l
              );
              break e;
            }
            Ie(e, t, n, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Vu(e, t), e === null ? (l = _m(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : he || (l = t.type, e = t.pendingProps, n = ii(
          oe.current
        ).createElement(l), n[We] = t, n[ct] = e, Pe(n, l, e), Je(n), t.stateNode = n) : t.memoizedState = _m(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ta(t), e === null && he && (n = t.stateNode = Am(
          t.type,
          t.pendingProps,
          oe.current
        ), Fe = t, Rt = !0, a = Re, jl(t.type) ? (Vr = a, Re = Dt(n.firstChild)) : Re = a), Ie(
          e,
          t,
          t.pendingProps.children,
          l
        ), Vu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && he && ((a = n = Re) && (n = ry(
          n,
          t.type,
          t.pendingProps,
          Rt
        ), n !== null ? (t.stateNode = n, Fe = t, Re = Dt(n.firstChild), Rt = !1, a = !0) : a = !1), a || pl(t)), ta(t), a = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, n = i.children, Lr(a, i) ? n = null : s !== null && Lr(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = Bc(
          e,
          t,
          Tg,
          null,
          null,
          l
        ), Qa._currentValue = a), Vu(e, t), Ie(e, t, n, l), t.child;
      case 6:
        return e === null && he && ((e = l = Re) && (l = oy(
          l,
          t.pendingProps,
          Rt
        ), l !== null ? (t.stateNode = l, Fe = t, Re = null, e = !0) : e = !1), e || pl(t)), null;
      case 13:
        return md(e, t, l);
      case 4:
        return at(
          t,
          t.stateNode.containerInfo
        ), n = t.pendingProps, e === null ? t.child = tn(
          t,
          null,
          n,
          l
        ) : Ie(e, t, n, l), t.child;
      case 11:
        return ad(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return Ie(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return Ie(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return Ie(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return n = t.pendingProps, bl(t, t.type, n.value), Ie(e, t, n.children, l), t.child;
      case 9:
        return a = t.type._context, n = t.pendingProps.children, $l(t), a = $e(a), n = n(a), t.flags |= 1, Ie(e, t, n, l), t.child;
      case 14:
        return ud(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return id(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return vd(e, t, l);
      case 31:
        return Rg(e, t, l);
      case 22:
        return cd(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return $l(t), n = $e(Ge), e === null ? (a = _c(), a === null && (a = Me, i = Nc(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), t.memoizedState = { parent: n, cache: a }, Mc(t), bl(t, Ge, a)) : ((e.lanes & l) !== 0 && (Oc(e, t), Aa(t, null, null, l), Ta()), a = e.memoizedState, i = t.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), bl(t, Ge, n)) : (n = i.cache, bl(t, Ge, n), n !== a.cache && Ac(
          t,
          [Ge],
          l,
          !0
        ))), Ie(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function ll(e) {
    e.flags |= 4;
  }
  function fr(e, t, l, n, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Vd()) e.flags |= 8192;
        else
          throw en = zu, zc;
    } else e.flags &= -16777217;
  }
  function yd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !jm(t))
      if (Vd()) e.flags |= 8192;
      else
        throw en = zu, zc;
  }
  function Zu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Wo() : 536870912, e.lanes |= t, Bn |= t);
  }
  function Oa(e, t) {
    if (!he)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), t = t.sibling;
          l === null ? e.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = e.tail;
          for (var n = null; l !== null; )
            l.alternate !== null && (n = l), l = l.sibling;
          n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
      }
  }
  function je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, n = 0;
    if (t)
      for (var a = e.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = e, a = a.sibling;
    else
      for (a = e.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= n, e.childLanes = l, t;
  }
  function Dg(e, t, l) {
    var n = t.pendingProps;
    switch (bc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return je(t), null;
      case 1:
        return je(t), null;
      case 3:
        return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), It(Ge), Le(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (An(t) ? ll(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, xc())), je(t), null;
      case 26:
        var a = t.type, i = t.memoizedState;
        return e === null ? (ll(t), i !== null ? (je(t), yd(t, i)) : (je(t), fr(
          t,
          a,
          null,
          n,
          l
        ))) : i ? i !== e.memoizedState ? (ll(t), je(t), yd(t, i)) : (je(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && ll(t), je(t), fr(
          t,
          a,
          e,
          n,
          l
        )), null;
      case 27:
        if (lu(t), l = oe.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && ll(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(r(166));
            return je(t), null;
          }
          e = K.current, An(t) ? Ws(t) : (e = Am(a, n, l), t.stateNode = e, ll(t));
        }
        return je(t), null;
      case 5:
        if (lu(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && ll(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(r(166));
            return je(t), null;
          }
          if (i = K.current, An(t))
            Ws(t);
          else {
            var s = ii(
              oe.current
            );
            switch (i) {
              case 1:
                i = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                i = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    i = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    i = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    i = s.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof n.is == "string" ? s.createElement("select", {
                      is: n.is
                    }) : s.createElement("select"), n.multiple ? i.multiple = !0 : n.size && (i.size = n.size);
                    break;
                  default:
                    i = typeof n.is == "string" ? s.createElement(a, { is: n.is }) : s.createElement(a);
                }
            }
            i[We] = t, i[ct] = n;
            e: for (s = t.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                i.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === t) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === t)
                  break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            t.stateNode = i;
            e: switch (Pe(i, a, n), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
            n && ll(t);
          }
        }
        return je(t), fr(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== n && ll(t);
        else {
          if (typeof n != "string" && t.stateNode === null)
            throw Error(r(166));
          if (e = oe.current, An(t)) {
            if (e = t.stateNode, l = t.memoizedProps, n = null, a = Fe, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            e[We] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || mm(e.nodeValue, l)), e || pl(t, !0);
          } else
            e = ii(e).createTextNode(
              n
            ), e[We] = t, t.stateNode = e;
        }
        return je(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (n = An(t), l !== null) {
            if (e === null) {
              if (!n) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[We] = t;
            } else
              Wl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            je(t), e = !1;
          } else
            l = xc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (St(t), t) : (St(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return je(t), null;
      case 13:
        if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = An(t), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
              a[We] = t;
            } else
              Wl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            je(t), a = !1;
          } else
            a = xc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (St(t), t) : (St(t), null);
        }
        return St(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = n !== null, e = e !== null && e.memoizedState !== null, l && (n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Zu(t, t.updateQueue), je(t), null);
      case 4:
        return Le(), e === null && Dr(t.stateNode.containerInfo), je(t), null;
      case 10:
        return It(t.type), je(t), null;
      case 19:
        if (L(qe), n = t.memoizedState, n === null) return je(t), null;
        if (a = (t.flags & 128) !== 0, i = n.rendering, i === null)
          if (a) Oa(n, !1);
          else {
            if (Be !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = ju(e), i !== null) {
                  for (t.flags |= 128, Oa(n, !1), e = i.updateQueue, t.updateQueue = e, Zu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    Qs(l, e), l = l.sibling;
                  return Q(
                    qe,
                    qe.current & 1 | 2
                  ), he && Ft(t, n.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null && ht() > Fu && (t.flags |= 128, a = !0, Oa(n, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = ju(i), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Zu(t, e), Oa(n, !0), n.tail === null && n.tailMode === "hidden" && !i.alternate && !he)
                return je(t), null;
            } else
              2 * ht() - n.renderingStartTime > Fu && l !== 536870912 && (t.flags |= 128, a = !0, Oa(n, !1), t.lanes = 4194304);
          n.isBackwards ? (i.sibling = t.child, t.child = i) : (e = n.last, e !== null ? e.sibling = i : t.child = i, n.last = i);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = ht(), e.sibling = null, l = qe.current, Q(
          qe,
          a ? l & 1 | 2 : l & 1
        ), he && Ft(t, n.treeForkCount), e) : (je(t), null);
      case 22:
      case 23:
        return St(t), wc(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t), l = t.updateQueue, l !== null && Zu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && L(Il), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), It(Ge), je(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function wg(e, t) {
    switch (bc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return It(Ge), Le(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return lu(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (St(t), t.alternate === null)
            throw Error(r(340));
          Wl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (St(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          Wl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return L(qe), null;
      case 4:
        return Le(), null;
      case 10:
        return It(t.type), null;
      case 22:
      case 23:
        return St(t), wc(), e !== null && L(Il), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return It(Ge), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function pd(e, t) {
    switch (bc(t), t.tag) {
      case 3:
        It(Ge), Le();
        break;
      case 26:
      case 27:
      case 5:
        lu(t);
        break;
      case 4:
        Le();
        break;
      case 31:
        t.memoizedState !== null && St(t);
        break;
      case 13:
        St(t);
        break;
      case 19:
        L(qe);
        break;
      case 10:
        It(t.type);
        break;
      case 22:
      case 23:
        St(t), wc(), e !== null && L(Il);
        break;
      case 24:
        It(Ge);
    }
  }
  function Ra(e, t) {
    try {
      var l = t.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var a = n.next;
        l = a;
        do {
          if ((l.tag & e) === e) {
            n = void 0;
            var i = l.create, s = l.inst;
            n = i(), s.destroy = n;
          }
          l = l.next;
        } while (l !== a);
      }
    } catch (d) {
      Ne(t, t.return, d);
    }
  }
  function Nl(e, t, l) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            var s = n.inst, d = s.destroy;
            if (d !== void 0) {
              s.destroy = void 0, a = t;
              var b = l, _ = d;
              try {
                _();
              } catch (w) {
                Ne(
                  a,
                  b,
                  w
                );
              }
            }
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (w) {
      Ne(t, t.return, w);
    }
  }
  function bd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        of(t, l);
      } catch (n) {
        Ne(e, e.return, n);
      }
    }
  }
  function Sd(e, t, l) {
    l.props = nn(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      Ne(e, t, n);
    }
  }
  function ja(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        typeof l == "function" ? e.refCleanup = l(n) : l.current = n;
      }
    } catch (a) {
      Ne(e, t, a);
    }
  }
  function Xt(e, t) {
    var l = e.ref, n = e.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          Ne(e, t, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          Ne(e, t, a);
        }
      else l.current = null;
  }
  function xd(e) {
    var t = e.type, l = e.memoizedProps, n = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && n.focus();
          break e;
        case "img":
          l.src ? n.src = l.src : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (a) {
      Ne(e, e.return, a);
    }
  }
  function dr(e, t, l) {
    try {
      var n = e.stateNode;
      ly(n, e.type, l, t), n[ct] = t;
    } catch (a) {
      Ne(e, e.return, a);
    }
  }
  function Ed(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && jl(e.type) || e.tag === 4;
  }
  function mr(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ed(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && jl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function hr(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Jt));
    else if (n !== 4 && (n === 27 && jl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (hr(e, t, l), e = e.sibling; e !== null; )
        hr(e, t, l), e = e.sibling;
  }
  function Ku(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (n !== 4 && (n === 27 && jl(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Ku(e, t, l), e = e.sibling; e !== null; )
        Ku(e, t, l), e = e.sibling;
  }
  function Td(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var n = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      Pe(t, n, l), t[We] = e, t[ct] = l;
    } catch (i) {
      Ne(e, e.return, i);
    }
  }
  var nl = !1, Qe = !1, vr = !1, Ad = typeof WeakSet == "function" ? WeakSet : Set, ke = null;
  function Ug(e, t) {
    if (e = e.containerInfo, Hr = mi, e = Us(e), rc(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var a = n.anchorOffset, i = n.focusNode;
            n = n.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break e;
            }
            var s = 0, d = -1, b = -1, _ = 0, w = 0, B = e, M = null;
            t: for (; ; ) {
              for (var O; B !== l || a !== 0 && B.nodeType !== 3 || (d = s + a), B !== i || n !== 0 && B.nodeType !== 3 || (b = s + n), B.nodeType === 3 && (s += B.nodeValue.length), (O = B.firstChild) !== null; )
                M = B, B = O;
              for (; ; ) {
                if (B === e) break t;
                if (M === l && ++_ === a && (d = s), M === i && ++w === n && (b = s), (O = B.nextSibling) !== null) break;
                B = M, M = B.parentNode;
              }
              B = O;
            }
            l = d === -1 || b === -1 ? null : { start: d, end: b };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Br = { focusedElem: e, selectionRange: l }, mi = !1, ke = t; ke !== null; )
      if (t = ke, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ke = e;
      else
        for (; ke !== null; ) {
          switch (t = ke, i = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (l = 0; l < e.length; l++)
                  a = e[l], a.ref.impl = a.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                e = void 0, l = t, a = i.memoizedProps, i = i.memoizedState, n = l.stateNode;
                try {
                  var Z = nn(
                    l.type,
                    a
                  );
                  e = n.getSnapshotBeforeUpdate(
                    Z,
                    i
                  ), n.__reactInternalSnapshotBeforeUpdate = e;
                } catch (I) {
                  Ne(
                    l,
                    l.return,
                    I
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9)
                  Yr(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Yr(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, ke = e;
            break;
          }
          ke = t.return;
        }
  }
  function Nd(e, t, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ul(e, l), n & 4 && Ra(5, l);
        break;
      case 1:
        if (ul(e, l), n & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (s) {
              Ne(l, l.return, s);
            }
          else {
            var a = nn(
              l.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                a,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (s) {
              Ne(
                l,
                l.return,
                s
              );
            }
          }
        n & 64 && bd(l), n & 512 && ja(l, l.return);
        break;
      case 3:
        if (ul(e, l), n & 64 && (e = l.updateQueue, e !== null)) {
          if (t = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            of(e, t);
          } catch (s) {
            Ne(l, l.return, s);
          }
        }
        break;
      case 27:
        t === null && n & 4 && Td(l);
      case 26:
      case 5:
        ul(e, l), t === null && n & 4 && xd(l), n & 512 && ja(l, l.return);
        break;
      case 12:
        ul(e, l);
        break;
      case 31:
        ul(e, l), n & 4 && zd(e, l);
        break;
      case 13:
        ul(e, l), n & 4 && Md(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = Qg.bind(
          null,
          l
        ), sy(e, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || nl, !n) {
          t = t !== null && t.memoizedState !== null || Qe, a = nl;
          var i = Qe;
          nl = n, (Qe = t) && !i ? il(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : ul(e, l), nl = a, Qe = i;
        }
        break;
      case 30:
        break;
      default:
        ul(e, l);
    }
  }
  function Cd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Cd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Zi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var we = null, ot = !1;
  function al(e, t, l) {
    for (l = l.child; l !== null; )
      _d(e, t, l), l = l.sibling;
  }
  function _d(e, t, l) {
    if (vt && typeof vt.onCommitFiberUnmount == "function")
      try {
        vt.onCommitFiberUnmount(la, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Qe || Xt(l, t), al(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Qe || Xt(l, t);
        var n = we, a = ot;
        jl(l.type) && (we = l.stateNode, ot = !1), al(
          e,
          t,
          l
        ), Ga(l.stateNode), we = n, ot = a;
        break;
      case 5:
        Qe || Xt(l, t);
      case 6:
        if (n = we, a = ot, we = null, al(
          e,
          t,
          l
        ), we = n, ot = a, we !== null)
          if (ot)
            try {
              (we.nodeType === 9 ? we.body : we.nodeName === "HTML" ? we.ownerDocument.body : we).removeChild(l.stateNode);
            } catch (i) {
              Ne(
                l,
                t,
                i
              );
            }
          else
            try {
              we.removeChild(l.stateNode);
            } catch (i) {
              Ne(
                l,
                t,
                i
              );
            }
        break;
      case 18:
        we !== null && (ot ? (e = we, bm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Zn(e)) : bm(we, l.stateNode));
        break;
      case 4:
        n = we, a = ot, we = l.stateNode.containerInfo, ot = !0, al(
          e,
          t,
          l
        ), we = n, ot = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Nl(2, l, t), Qe || Nl(4, l, t), al(
          e,
          t,
          l
        );
        break;
      case 1:
        Qe || (Xt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && Sd(
          l,
          t,
          n
        )), al(
          e,
          t,
          l
        );
        break;
      case 21:
        al(
          e,
          t,
          l
        );
        break;
      case 22:
        Qe = (n = Qe) || l.memoizedState !== null, al(
          e,
          t,
          l
        ), Qe = n;
        break;
      default:
        al(
          e,
          t,
          l
        );
    }
  }
  function zd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Zn(e);
      } catch (l) {
        Ne(t, t.return, l);
      }
    }
  }
  function Md(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Zn(e);
      } catch (l) {
        Ne(t, t.return, l);
      }
  }
  function Hg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Ad()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Ad()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function Ju(e, t) {
    var l = Hg(e);
    t.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = Zg.bind(null, e, n);
        n.then(a, a);
      }
    });
  }
  function st(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n], i = e, s = t, d = s;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (jl(d.type)) {
                we = d.stateNode, ot = !1;
                break e;
              }
              break;
            case 5:
              we = d.stateNode, ot = !1;
              break e;
            case 3:
            case 4:
              we = d.stateNode.containerInfo, ot = !0;
              break e;
          }
          d = d.return;
        }
        if (we === null) throw Error(r(160));
        _d(i, s, a), we = null, ot = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Od(t, e), t = t.sibling;
  }
  var Bt = null;
  function Od(e, t) {
    var l = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        st(t, e), ft(e), n & 4 && (Nl(3, e, e.return), Ra(3, e), Nl(5, e, e.return));
        break;
      case 1:
        st(t, e), ft(e), n & 512 && (Qe || l === null || Xt(l, l.return)), n & 64 && nl && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = Bt;
        if (st(t, e), ft(e), n & 512 && (Qe || l === null || Xt(l, l.return)), n & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (n = e.memoizedState, l === null)
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  n = e.type, l = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (n) {
                    case "title":
                      i = a.getElementsByTagName("title")[0], (!i || i[ua] || i[We] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n), a.head.insertBefore(
                        i,
                        a.querySelector("head > title")
                      )), Pe(i, n, l), i[We] = e, Je(i), n = i;
                      break e;
                    case "link":
                      var s = Om(
                        "link",
                        "href",
                        a
                      ).get(n + (l.href || ""));
                      if (s) {
                        for (var d = 0; d < s.length; d++)
                          if (i = s[d], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            s.splice(d, 1);
                            break t;
                          }
                      }
                      i = a.createElement(n), Pe(i, n, l), a.head.appendChild(i);
                      break;
                    case "meta":
                      if (s = Om(
                        "meta",
                        "content",
                        a
                      ).get(n + (l.content || ""))) {
                        for (d = 0; d < s.length; d++)
                          if (i = s[d], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            s.splice(d, 1);
                            break t;
                          }
                      }
                      i = a.createElement(n), Pe(i, n, l), a.head.appendChild(i);
                      break;
                    default:
                      throw Error(r(468, n));
                  }
                  i[We] = e, Je(i), n = i;
                }
                e.stateNode = n;
              } else
                Rm(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Mm(
                a,
                n,
                e.memoizedProps
              );
          else
            i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? Rm(
              a,
              e.type,
              e.stateNode
            ) : Mm(
              a,
              n,
              e.memoizedProps
            )) : n === null && e.stateNode !== null && dr(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        st(t, e), ft(e), n & 512 && (Qe || l === null || Xt(l, l.return)), l !== null && n & 4 && dr(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (st(t, e), ft(e), n & 512 && (Qe || l === null || Xt(l, l.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            hn(a, "");
          } catch (Z) {
            Ne(e, e.return, Z);
          }
        }
        n & 4 && e.stateNode != null && (a = e.memoizedProps, dr(
          e,
          a,
          l !== null ? l.memoizedProps : a
        )), n & 1024 && (vr = !0);
        break;
      case 6:
        if (st(t, e), ft(e), n & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          n = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = n;
          } catch (Z) {
            Ne(e, e.return, Z);
          }
        }
        break;
      case 3:
        if (oi = null, a = Bt, Bt = ci(t.containerInfo), st(t, e), Bt = a, ft(e), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Zn(t.containerInfo);
          } catch (Z) {
            Ne(e, e.return, Z);
          }
        vr && (vr = !1, Rd(e));
        break;
      case 4:
        n = Bt, Bt = ci(
          e.stateNode.containerInfo
        ), st(t, e), ft(e), Bt = n;
        break;
      case 12:
        st(t, e), ft(e);
        break;
      case 31:
        st(t, e), ft(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Ju(e, n)));
        break;
      case 13:
        st(t, e), ft(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Wu = ht()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Ju(e, n)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var b = l !== null && l.memoizedState !== null, _ = nl, w = Qe;
        if (nl = _ || a, Qe = w || b, st(t, e), Qe = w, nl = _, ft(e), n & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || b || nl || Qe || an(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                b = l = t;
                try {
                  if (i = b.stateNode, a)
                    s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                  else {
                    d = b.stateNode;
                    var B = b.memoizedProps.style, M = B != null && B.hasOwnProperty("display") ? B.display : null;
                    d.style.display = M == null || typeof M == "boolean" ? "" : ("" + M).trim();
                  }
                } catch (Z) {
                  Ne(b, b.return, Z);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                b = t;
                try {
                  b.stateNode.nodeValue = a ? "" : b.memoizedProps;
                } catch (Z) {
                  Ne(b, b.return, Z);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                b = t;
                try {
                  var O = b.stateNode;
                  a ? Sm(O, !0) : Sm(b.stateNode, !1);
                } catch (Z) {
                  Ne(b, b.return, Z);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), t = t.return;
            }
            l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
          }
        n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, Ju(e, l))));
        break;
      case 19:
        st(t, e), ft(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Ju(e, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        st(t, e), ft(e);
    }
  }
  function ft(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, n = e.return; n !== null; ) {
          if (Ed(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, i = mr(e);
            Ku(e, i, a);
            break;
          case 5:
            var s = l.stateNode;
            l.flags & 32 && (hn(s, ""), l.flags &= -33);
            var d = mr(e);
            Ku(e, d, s);
            break;
          case 3:
          case 4:
            var b = l.stateNode.containerInfo, _ = mr(e);
            hr(
              e,
              _,
              b
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (w) {
        Ne(e, e.return, w);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Rd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Rd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function ul(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Nd(e, t.alternate, t), t = t.sibling;
  }
  function an(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Nl(4, t, t.return), an(t);
          break;
        case 1:
          Xt(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && Sd(
            t,
            t.return,
            l
          ), an(t);
          break;
        case 27:
          Ga(t.stateNode);
        case 26:
        case 5:
          Xt(t, t.return), an(t);
          break;
        case 22:
          t.memoizedState === null && an(t);
          break;
        case 30:
          an(t);
          break;
        default:
          an(t);
      }
      e = e.sibling;
    }
  }
  function il(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate, a = e, i = t, s = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          il(
            a,
            i,
            l
          ), Ra(4, i);
          break;
        case 1:
          if (il(
            a,
            i,
            l
          ), n = i, a = n.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (_) {
              Ne(n, n.return, _);
            }
          if (n = i, a = n.updateQueue, a !== null) {
            var d = n.stateNode;
            try {
              var b = a.shared.hiddenCallbacks;
              if (b !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < b.length; a++)
                  rf(b[a], d);
            } catch (_) {
              Ne(n, n.return, _);
            }
          }
          l && s & 64 && bd(i), ja(i, i.return);
          break;
        case 27:
          Td(i);
        case 26:
        case 5:
          il(
            a,
            i,
            l
          ), l && n === null && s & 4 && xd(i), ja(i, i.return);
          break;
        case 12:
          il(
            a,
            i,
            l
          );
          break;
        case 31:
          il(
            a,
            i,
            l
          ), l && s & 4 && zd(a, i);
          break;
        case 13:
          il(
            a,
            i,
            l
          ), l && s & 4 && Md(a, i);
          break;
        case 22:
          i.memoizedState === null && il(
            a,
            i,
            l
          ), ja(i, i.return);
          break;
        case 30:
          break;
        default:
          il(
            a,
            i,
            l
          );
      }
      t = t.sibling;
    }
  }
  function gr(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && pa(l));
  }
  function yr(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && pa(e));
  }
  function Lt(e, t, l, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        jd(
          e,
          t,
          l,
          n
        ), t = t.sibling;
  }
  function jd(e, t, l, n) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Lt(
          e,
          t,
          l,
          n
        ), a & 2048 && Ra(9, t);
        break;
      case 1:
        Lt(
          e,
          t,
          l,
          n
        );
        break;
      case 3:
        Lt(
          e,
          t,
          l,
          n
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && pa(e)));
        break;
      case 12:
        if (a & 2048) {
          Lt(
            e,
            t,
            l,
            n
          ), e = t.stateNode;
          try {
            var i = t.memoizedProps, s = i.id, d = i.onPostCommit;
            typeof d == "function" && d(
              s,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (b) {
            Ne(t, t.return, b);
          }
        } else
          Lt(
            e,
            t,
            l,
            n
          );
        break;
      case 31:
        Lt(
          e,
          t,
          l,
          n
        );
        break;
      case 13:
        Lt(
          e,
          t,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, s = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Lt(
          e,
          t,
          l,
          n
        ) : Da(e, t) : i._visibility & 2 ? Lt(
          e,
          t,
          l,
          n
        ) : (i._visibility |= 2, wn(
          e,
          t,
          l,
          n,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && gr(s, t);
        break;
      case 24:
        Lt(
          e,
          t,
          l,
          n
        ), a & 2048 && yr(t.alternate, t);
        break;
      default:
        Lt(
          e,
          t,
          l,
          n
        );
    }
  }
  function wn(e, t, l, n, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, s = t, d = l, b = n, _ = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          wn(
            i,
            s,
            d,
            b,
            a
          ), Ra(8, s);
          break;
        case 23:
          break;
        case 22:
          var w = s.stateNode;
          s.memoizedState !== null ? w._visibility & 2 ? wn(
            i,
            s,
            d,
            b,
            a
          ) : Da(
            i,
            s
          ) : (w._visibility |= 2, wn(
            i,
            s,
            d,
            b,
            a
          )), a && _ & 2048 && gr(
            s.alternate,
            s
          );
          break;
        case 24:
          wn(
            i,
            s,
            d,
            b,
            a
          ), a && _ & 2048 && yr(s.alternate, s);
          break;
        default:
          wn(
            i,
            s,
            d,
            b,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Da(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, n = t, a = n.flags;
        switch (n.tag) {
          case 22:
            Da(l, n), a & 2048 && gr(
              n.alternate,
              n
            );
            break;
          case 24:
            Da(l, n), a & 2048 && yr(n.alternate, n);
            break;
          default:
            Da(l, n);
        }
        t = t.sibling;
      }
  }
  var wa = 8192;
  function Un(e, t, l) {
    if (e.subtreeFlags & wa)
      for (e = e.child; e !== null; )
        Dd(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function Dd(e, t, l) {
    switch (e.tag) {
      case 26:
        Un(
          e,
          t,
          l
        ), e.flags & wa && e.memoizedState !== null && Ey(
          l,
          Bt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Un(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var n = Bt;
        Bt = ci(e.stateNode.containerInfo), Un(
          e,
          t,
          l
        ), Bt = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = wa, wa = 16777216, Un(
          e,
          t,
          l
        ), wa = n) : Un(
          e,
          t,
          l
        ));
        break;
      default:
        Un(
          e,
          t,
          l
        );
    }
  }
  function wd(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Ua(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          ke = n, Hd(
            n,
            e
          );
        }
      wd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Ud(e), e = e.sibling;
  }
  function Ud(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ua(e), e.flags & 2048 && Nl(9, e, e.return);
        break;
      case 3:
        Ua(e);
        break;
      case 12:
        Ua(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, ku(e)) : Ua(e);
        break;
      default:
        Ua(e);
    }
  }
  function ku(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          ke = n, Hd(
            n,
            e
          );
        }
      wd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Nl(8, t, t.return), ku(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, ku(t));
          break;
        default:
          ku(t);
      }
      e = e.sibling;
    }
  }
  function Hd(e, t) {
    for (; ke !== null; ) {
      var l = ke;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Nl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          pa(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, ke = n;
      else
        e: for (l = e; ke !== null; ) {
          n = ke;
          var a = n.sibling, i = n.return;
          if (Cd(n), n === l) {
            ke = null;
            break e;
          }
          if (a !== null) {
            a.return = i, ke = a;
            break e;
          }
          ke = i;
        }
    }
  }
  var Bg = {
    getCacheForType: function(e) {
      var t = $e(Ge), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return $e(Ge).controller.signal;
    }
  }, Lg = typeof WeakMap == "function" ? WeakMap : Map, Se = 0, Me = null, se = null, de = 0, Ae = 0, xt = null, Cl = !1, Hn = !1, pr = !1, cl = 0, Be = 0, _l = 0, un = 0, br = 0, Et = 0, Bn = 0, Ha = null, dt = null, Sr = !1, Wu = 0, Bd = 0, Fu = 1 / 0, $u = null, zl = null, Ke = 0, Ml = null, Ln = null, rl = 0, xr = 0, Er = null, Ld = null, Ba = 0, Tr = null;
  function Tt() {
    return (Se & 2) !== 0 && de !== 0 ? de & -de : j.T !== null ? Mr() : Po();
  }
  function qd() {
    if (Et === 0)
      if ((de & 536870912) === 0 || he) {
        var e = uu;
        uu <<= 1, (uu & 3932160) === 0 && (uu = 262144), Et = e;
      } else Et = 536870912;
    return e = bt.current, e !== null && (e.flags |= 32), Et;
  }
  function mt(e, t, l) {
    (e === Me && (Ae === 2 || Ae === 9) || e.cancelPendingCommit !== null) && (qn(e, 0), Ol(
      e,
      de,
      Et,
      !1
    )), aa(e, l), ((Se & 2) === 0 || e !== Me) && (e === Me && ((Se & 2) === 0 && (un |= l), Be === 4 && Ol(
      e,
      de,
      Et,
      !1
    )), Vt(e));
  }
  function Yd(e, t, l) {
    if ((Se & 6) !== 0) throw Error(r(327));
    var n = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || na(e, t), a = n ? Gg(e, t) : Nr(e, t, !0), i = n;
    do {
      if (a === 0) {
        Hn && !n && Ol(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, i && !qg(l)) {
          a = Nr(e, t, !1), i = !1;
          continue;
        }
        if (a === 2) {
          if (i = t, e.errorRecoveryDisabledLanes & i)
            var s = 0;
          else
            s = e.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
          if (s !== 0) {
            t = s;
            e: {
              var d = e;
              a = Ha;
              var b = d.current.memoizedState.isDehydrated;
              if (b && (qn(d, s).flags |= 256), s = Nr(
                d,
                s,
                !1
              ), s !== 2) {
                if (pr && !b) {
                  d.errorRecoveryDisabledLanes |= i, un |= i, a = 4;
                  break e;
                }
                i = dt, dt = a, i !== null && (dt === null ? dt = i : dt.push.apply(
                  dt,
                  i
                ));
              }
              a = s;
            }
            if (i = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          qn(e, 0), Ol(e, t, 0, !0);
          break;
        }
        e: {
          switch (n = e, i = a, i) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ol(
                n,
                t,
                Et,
                !Cl
              );
              break e;
            case 2:
              dt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (a = Wu + 300 - ht(), 10 < a)) {
            if (Ol(
              n,
              t,
              Et,
              !Cl
            ), cu(n, 0, !0) !== 0) break e;
            rl = t, n.timeoutHandle = ym(
              Gd.bind(
                null,
                n,
                l,
                dt,
                $u,
                Sr,
                t,
                Et,
                un,
                Bn,
                Cl,
                i,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break e;
          }
          Gd(
            n,
            l,
            dt,
            $u,
            Sr,
            t,
            Et,
            un,
            Bn,
            Cl,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Vt(e);
  }
  function Gd(e, t, l, n, a, i, s, d, b, _, w, B, M, O) {
    if (e.timeoutHandle = -1, B = t.subtreeFlags, B & 8192 || (B & 16785408) === 16785408) {
      B = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Jt
      }, Dd(
        t,
        i,
        B
      );
      var Z = (i & 62914560) === i ? Wu - ht() : (i & 4194048) === i ? Bd - ht() : 0;
      if (Z = Ty(
        B,
        Z
      ), Z !== null) {
        rl = i, e.cancelPendingCommit = Z(
          Wd.bind(
            null,
            e,
            t,
            i,
            l,
            n,
            a,
            s,
            d,
            b,
            w,
            B,
            null,
            M,
            O
          )
        ), Ol(e, i, s, !_);
        return;
      }
    }
    Wd(
      e,
      t,
      i,
      l,
      n,
      a,
      s,
      d,
      b
    );
  }
  function qg(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var n = 0; n < l.length; n++) {
          var a = l[n], i = a.getSnapshot;
          a = a.value;
          try {
            if (!yt(i(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = t.child, t.subtreeFlags & 16384 && l !== null)
        l.return = t, t = l;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Ol(e, t, l, n) {
    t &= ~br, t &= ~un, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var i = 31 - gt(a), s = 1 << i;
      n[i] = -1, a &= ~s;
    }
    l !== 0 && Fo(e, l, t);
  }
  function Iu() {
    return (Se & 6) === 0 ? (La(0), !1) : !0;
  }
  function Ar() {
    if (se !== null) {
      if (Ae === 0)
        var e = se.return;
      else
        e = se, $t = Fl = null, Yc(e), Mn = null, Sa = 0, e = se;
      for (; e !== null; )
        pd(e.alternate, e), e = e.return;
      se = null;
    }
  }
  function qn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, uy(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), rl = 0, Ar(), Me = e, se = l = Wt(e.current, null), de = t, Ae = 0, xt = null, Cl = !1, Hn = na(e, t), pr = !1, Bn = Et = br = un = _l = Be = 0, dt = Ha = null, Sr = !1, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - gt(n), i = 1 << a;
        t |= e[a], n &= ~i;
      }
    return cl = t, bu(), l;
  }
  function Xd(e, t) {
    ue = null, j.H = za, t === zn || t === _u ? (t = nf(), Ae = 3) : t === zc ? (t = nf(), Ae = 4) : Ae = t === lr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, xt = t, se === null && (Be = 1, Gu(
      e,
      zt(t, e.current)
    ));
  }
  function Vd() {
    var e = bt.current;
    return e === null ? !0 : (de & 4194048) === de ? jt === null : (de & 62914560) === de || (de & 536870912) !== 0 ? e === jt : !1;
  }
  function Qd() {
    var e = j.H;
    return j.H = za, e === null ? za : e;
  }
  function Zd() {
    var e = j.A;
    return j.A = Bg, e;
  }
  function Pu() {
    Be = 4, Cl || (de & 4194048) !== de && bt.current !== null || (Hn = !0), (_l & 134217727) === 0 && (un & 134217727) === 0 || Me === null || Ol(
      Me,
      de,
      Et,
      !1
    );
  }
  function Nr(e, t, l) {
    var n = Se;
    Se |= 2;
    var a = Qd(), i = Zd();
    (Me !== e || de !== t) && ($u = null, qn(e, t)), t = !1;
    var s = Be;
    e: do
      try {
        if (Ae !== 0 && se !== null) {
          var d = se, b = xt;
          switch (Ae) {
            case 8:
              Ar(), s = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              bt.current === null && (t = !0);
              var _ = Ae;
              if (Ae = 0, xt = null, Yn(e, d, b, _), l && Hn) {
                s = 0;
                break e;
              }
              break;
            default:
              _ = Ae, Ae = 0, xt = null, Yn(e, d, b, _);
          }
        }
        Yg(), s = Be;
        break;
      } catch (w) {
        Xd(e, w);
      }
    while (!0);
    return t && e.shellSuspendCounter++, $t = Fl = null, Se = n, j.H = a, j.A = i, se === null && (Me = null, de = 0, bu()), s;
  }
  function Yg() {
    for (; se !== null; ) Kd(se);
  }
  function Gg(e, t) {
    var l = Se;
    Se |= 2;
    var n = Qd(), a = Zd();
    Me !== e || de !== t ? ($u = null, Fu = ht() + 500, qn(e, t)) : Hn = na(
      e,
      t
    );
    e: do
      try {
        if (Ae !== 0 && se !== null) {
          t = se;
          var i = xt;
          t: switch (Ae) {
            case 1:
              Ae = 0, xt = null, Yn(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (tf(i)) {
                Ae = 0, xt = null, Jd(t);
                break;
              }
              t = function() {
                Ae !== 2 && Ae !== 9 || Me !== e || (Ae = 7), Vt(e);
              }, i.then(t, t);
              break e;
            case 3:
              Ae = 7;
              break e;
            case 4:
              Ae = 5;
              break e;
            case 7:
              tf(i) ? (Ae = 0, xt = null, Jd(t)) : (Ae = 0, xt = null, Yn(e, t, i, 7));
              break;
            case 5:
              var s = null;
              switch (se.tag) {
                case 26:
                  s = se.memoizedState;
                case 5:
                case 27:
                  var d = se;
                  if (s ? jm(s) : d.stateNode.complete) {
                    Ae = 0, xt = null;
                    var b = d.sibling;
                    if (b !== null) se = b;
                    else {
                      var _ = d.return;
                      _ !== null ? (se = _, ei(_)) : se = null;
                    }
                    break t;
                  }
              }
              Ae = 0, xt = null, Yn(e, t, i, 5);
              break;
            case 6:
              Ae = 0, xt = null, Yn(e, t, i, 6);
              break;
            case 8:
              Ar(), Be = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        Xg();
        break;
      } catch (w) {
        Xd(e, w);
      }
    while (!0);
    return $t = Fl = null, j.H = n, j.A = a, Se = l, se !== null ? 0 : (Me = null, de = 0, bu(), Be);
  }
  function Xg() {
    for (; se !== null && !f0(); )
      Kd(se);
  }
  function Kd(e) {
    var t = gd(e.alternate, e, cl);
    e.memoizedProps = e.pendingProps, t === null ? ei(e) : se = t;
  }
  function Jd(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = sd(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          de
        );
        break;
      case 11:
        t = sd(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          de
        );
        break;
      case 5:
        Yc(t);
      default:
        pd(l, t), t = se = Qs(t, cl), t = gd(l, t, cl);
    }
    e.memoizedProps = e.pendingProps, t === null ? ei(e) : se = t;
  }
  function Yn(e, t, l, n) {
    $t = Fl = null, Yc(t), Mn = null, Sa = 0;
    var a = t.return;
    try {
      if (Og(
        e,
        a,
        t,
        l,
        de
      )) {
        Be = 1, Gu(
          e,
          zt(l, e.current)
        ), se = null;
        return;
      }
    } catch (i) {
      if (a !== null) throw se = a, i;
      Be = 1, Gu(
        e,
        zt(l, e.current)
      ), se = null;
      return;
    }
    t.flags & 32768 ? (he || n === 1 ? e = !0 : Hn || (de & 536870912) !== 0 ? e = !1 : (Cl = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = bt.current, n !== null && n.tag === 13 && (n.flags |= 16384))), kd(t, e)) : ei(t);
  }
  function ei(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        kd(
          t,
          Cl
        );
        return;
      }
      e = t.return;
      var l = Dg(
        t.alternate,
        t,
        cl
      );
      if (l !== null) {
        se = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        se = t;
        return;
      }
      se = t = e;
    } while (t !== null);
    Be === 0 && (Be = 5);
  }
  function kd(e, t) {
    do {
      var l = wg(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, se = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        se = e;
        return;
      }
      se = e = l;
    } while (e !== null);
    Be = 6, se = null;
  }
  function Wd(e, t, l, n, a, i, s, d, b) {
    e.cancelPendingCommit = null;
    do
      ti();
    while (Ke !== 0);
    if ((Se & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (i = t.lanes | t.childLanes, i |= mc, x0(
        e,
        l,
        i,
        s,
        d,
        b
      ), e === Me && (se = Me = null, de = 0), Ln = t, Ml = e, rl = l, xr = i, Er = a, Ld = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Kg(nu, function() {
        return em(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
        n = j.T, j.T = null, a = G.p, G.p = 2, s = Se, Se |= 4;
        try {
          Ug(e, t, l);
        } finally {
          Se = s, G.p = a, j.T = n;
        }
      }
      Ke = 1, Fd(), $d(), Id();
    }
  }
  function Fd() {
    if (Ke === 1) {
      Ke = 0;
      var e = Ml, t = Ln, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = j.T, j.T = null;
        var n = G.p;
        G.p = 2;
        var a = Se;
        Se |= 4;
        try {
          Od(t, e);
          var i = Br, s = Us(e.containerInfo), d = i.focusedElem, b = i.selectionRange;
          if (s !== d && d && d.ownerDocument && ws(
            d.ownerDocument.documentElement,
            d
          )) {
            if (b !== null && rc(d)) {
              var _ = b.start, w = b.end;
              if (w === void 0 && (w = _), "selectionStart" in d)
                d.selectionStart = _, d.selectionEnd = Math.min(
                  w,
                  d.value.length
                );
              else {
                var B = d.ownerDocument || document, M = B && B.defaultView || window;
                if (M.getSelection) {
                  var O = M.getSelection(), Z = d.textContent.length, I = Math.min(b.start, Z), ze = b.end === void 0 ? I : Math.min(b.end, Z);
                  !O.extend && I > ze && (s = ze, ze = I, I = s);
                  var N = Ds(
                    d,
                    I
                  ), E = Ds(
                    d,
                    ze
                  );
                  if (N && E && (O.rangeCount !== 1 || O.anchorNode !== N.node || O.anchorOffset !== N.offset || O.focusNode !== E.node || O.focusOffset !== E.offset)) {
                    var C = B.createRange();
                    C.setStart(N.node, N.offset), O.removeAllRanges(), I > ze ? (O.addRange(C), O.extend(E.node, E.offset)) : (C.setEnd(E.node, E.offset), O.addRange(C));
                  }
                }
              }
            }
            for (B = [], O = d; O = O.parentNode; )
              O.nodeType === 1 && B.push({
                element: O,
                left: O.scrollLeft,
                top: O.scrollTop
              });
            for (typeof d.focus == "function" && d.focus(), d = 0; d < B.length; d++) {
              var U = B[d];
              U.element.scrollLeft = U.left, U.element.scrollTop = U.top;
            }
          }
          mi = !!Hr, Br = Hr = null;
        } finally {
          Se = a, G.p = n, j.T = l;
        }
      }
      e.current = t, Ke = 2;
    }
  }
  function $d() {
    if (Ke === 2) {
      Ke = 0;
      var e = Ml, t = Ln, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = j.T, j.T = null;
        var n = G.p;
        G.p = 2;
        var a = Se;
        Se |= 4;
        try {
          Nd(e, t.alternate, t);
        } finally {
          Se = a, G.p = n, j.T = l;
        }
      }
      Ke = 3;
    }
  }
  function Id() {
    if (Ke === 4 || Ke === 3) {
      Ke = 0, d0();
      var e = Ml, t = Ln, l = rl, n = Ld;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ke = 5 : (Ke = 0, Ln = Ml = null, Pd(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (zl = null), Vi(l), t = t.stateNode, vt && typeof vt.onCommitFiberRoot == "function")
        try {
          vt.onCommitFiberRoot(
            la,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        t = j.T, a = G.p, G.p = 2, j.T = null;
        try {
          for (var i = e.onRecoverableError, s = 0; s < n.length; s++) {
            var d = n[s];
            i(d.value, {
              componentStack: d.stack
            });
          }
        } finally {
          j.T = t, G.p = a;
        }
      }
      (rl & 3) !== 0 && ti(), Vt(e), a = e.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? e === Tr ? Ba++ : (Ba = 0, Tr = e) : Ba = 0, La(0);
    }
  }
  function Pd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, pa(t)));
  }
  function ti() {
    return Fd(), $d(), Id(), em();
  }
  function em() {
    if (Ke !== 5) return !1;
    var e = Ml, t = xr;
    xr = 0;
    var l = Vi(rl), n = j.T, a = G.p;
    try {
      G.p = 32 > l ? 32 : l, j.T = null, l = Er, Er = null;
      var i = Ml, s = rl;
      if (Ke = 0, Ln = Ml = null, rl = 0, (Se & 6) !== 0) throw Error(r(331));
      var d = Se;
      if (Se |= 4, Ud(i.current), jd(
        i,
        i.current,
        s,
        l
      ), Se = d, La(0, !1), vt && typeof vt.onPostCommitFiberRoot == "function")
        try {
          vt.onPostCommitFiberRoot(la, i);
        } catch {
        }
      return !0;
    } finally {
      G.p = a, j.T = n, Pd(e, t);
    }
  }
  function tm(e, t, l) {
    t = zt(l, t), t = tr(e.stateNode, t, 2), e = El(e, t, 2), e !== null && (aa(e, 2), Vt(e));
  }
  function Ne(e, t, l) {
    if (e.tag === 3)
      tm(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          tm(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (zl === null || !zl.has(n))) {
            e = zt(l, e), l = ld(2), n = El(t, l, 2), n !== null && (nd(
              l,
              n,
              t,
              e
            ), aa(n, 2), Vt(n));
            break;
          }
        }
        t = t.return;
      }
  }
  function Cr(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new Lg();
      var a = /* @__PURE__ */ new Set();
      n.set(t, a);
    } else
      a = n.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(t, a));
    a.has(l) || (pr = !0, a.add(l), e = Vg.bind(null, e, t, l), t.then(e, e));
  }
  function Vg(e, t, l) {
    var n = e.pingCache;
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Me === e && (de & l) === l && (Be === 4 || Be === 3 && (de & 62914560) === de && 300 > ht() - Wu ? (Se & 2) === 0 && qn(e, 0) : br |= l, Bn === de && (Bn = 0)), Vt(e);
  }
  function lm(e, t) {
    t === 0 && (t = Wo()), e = Jl(e, t), e !== null && (aa(e, t), Vt(e));
  }
  function Qg(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), lm(e, l);
  }
  function Zg(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var n = e.stateNode, a = e.memoizedState;
        a !== null && (l = a.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    n !== null && n.delete(t), lm(e, l);
  }
  function Kg(e, t) {
    return qi(e, t);
  }
  var li = null, Gn = null, _r = !1, ni = !1, zr = !1, Rl = 0;
  function Vt(e) {
    e !== Gn && e.next === null && (Gn === null ? li = Gn = e : Gn = Gn.next = e), ni = !0, _r || (_r = !0, kg());
  }
  function La(e, t) {
    if (!zr && ni) {
      zr = !0;
      do
        for (var l = !1, n = li; n !== null; ) {
          if (e !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var s = n.suspendedLanes, d = n.pingedLanes;
              i = (1 << 31 - gt(42 | e) + 1) - 1, i &= a & ~(s & ~d), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, im(n, i));
          } else
            i = de, i = cu(
              n,
              n === Me ? i : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (i & 3) === 0 || na(n, i) || (l = !0, im(n, i));
          n = n.next;
        }
      while (l);
      zr = !1;
    }
  }
  function Jg() {
    nm();
  }
  function nm() {
    ni = _r = !1;
    var e = 0;
    Rl !== 0 && ay() && (e = Rl);
    for (var t = ht(), l = null, n = li; n !== null; ) {
      var a = n.next, i = am(n, t);
      i === 0 ? (n.next = null, l === null ? li = a : l.next = a, a === null && (Gn = l)) : (l = n, (e !== 0 || (i & 3) !== 0) && (ni = !0)), n = a;
    }
    Ke !== 0 && Ke !== 5 || La(e), Rl !== 0 && (Rl = 0);
  }
  function am(e, t) {
    for (var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var s = 31 - gt(i), d = 1 << s, b = a[s];
      b === -1 ? ((d & l) === 0 || (d & n) !== 0) && (a[s] = S0(d, t)) : b <= t && (e.expiredLanes |= d), i &= ~d;
    }
    if (t = Me, l = de, l = cu(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, l === 0 || e === t && (Ae === 2 || Ae === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && Yi(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || na(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (n !== null && Yi(n), Vi(l)) {
        case 2:
        case 8:
          l = Jo;
          break;
        case 32:
          l = nu;
          break;
        case 268435456:
          l = ko;
          break;
        default:
          l = nu;
      }
      return n = um.bind(null, e), l = qi(l, n), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return n !== null && n !== null && Yi(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function um(e, t) {
    if (Ke !== 0 && Ke !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (ti() && e.callbackNode !== l)
      return null;
    var n = de;
    return n = cu(
      e,
      e === Me ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (Yd(e, n, t), am(e, ht()), e.callbackNode != null && e.callbackNode === l ? um.bind(null, e) : null);
  }
  function im(e, t) {
    if (ti()) return null;
    Yd(e, t, !0);
  }
  function kg() {
    iy(function() {
      (Se & 6) !== 0 ? qi(
        Ko,
        Jg
      ) : nm();
    });
  }
  function Mr() {
    if (Rl === 0) {
      var e = Cn;
      e === 0 && (e = au, au <<= 1, (au & 261888) === 0 && (au = 256)), Rl = e;
    }
    return Rl;
  }
  function cm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : fu("" + e);
  }
  function rm(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function Wg(e, t, l, n, a) {
    if (t === "submit" && l && l.stateNode === a) {
      var i = cm(
        (a[ct] || null).action
      ), s = n.submitter;
      s && (t = (t = s[ct] || null) ? cm(t.formAction) : s.getAttribute("formAction"), t !== null && (i = t, s = null));
      var d = new vu(
        "action",
        "action",
        null,
        n,
        a
      );
      e.push({
        event: d,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (Rl !== 0) {
                  var b = s ? rm(a, s) : new FormData(a);
                  Wc(
                    l,
                    {
                      pending: !0,
                      data: b,
                      method: a.method,
                      action: i
                    },
                    null,
                    b
                  );
                }
              } else
                typeof i == "function" && (d.preventDefault(), b = s ? rm(a, s) : new FormData(a), Wc(
                  l,
                  {
                    pending: !0,
                    data: b,
                    method: a.method,
                    action: i
                  },
                  i,
                  b
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var Or = 0; Or < dc.length; Or++) {
    var Rr = dc[Or], Fg = Rr.toLowerCase(), $g = Rr[0].toUpperCase() + Rr.slice(1);
    Ht(
      Fg,
      "on" + $g
    );
  }
  Ht(Ls, "onAnimationEnd"), Ht(qs, "onAnimationIteration"), Ht(Ys, "onAnimationStart"), Ht("dblclick", "onDoubleClick"), Ht("focusin", "onFocus"), Ht("focusout", "onBlur"), Ht(mg, "onTransitionRun"), Ht(hg, "onTransitionStart"), Ht(vg, "onTransitionCancel"), Ht(Gs, "onTransitionEnd"), dn("onMouseEnter", ["mouseout", "mouseover"]), dn("onMouseLeave", ["mouseout", "mouseover"]), dn("onPointerEnter", ["pointerout", "pointerover"]), dn("onPointerLeave", ["pointerout", "pointerover"]), Vl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Vl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Vl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Vl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Vl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Vl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var qa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ig = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qa)
  );
  function om(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var n = e[l], a = n.event;
      n = n.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var s = n.length - 1; 0 <= s; s--) {
            var d = n[s], b = d.instance, _ = d.currentTarget;
            if (d = d.listener, b !== i && a.isPropagationStopped())
              break e;
            i = d, a.currentTarget = _;
            try {
              i(a);
            } catch (w) {
              pu(w);
            }
            a.currentTarget = null, i = b;
          }
        else
          for (s = 0; s < n.length; s++) {
            if (d = n[s], b = d.instance, _ = d.currentTarget, d = d.listener, b !== i && a.isPropagationStopped())
              break e;
            i = d, a.currentTarget = _;
            try {
              i(a);
            } catch (w) {
              pu(w);
            }
            a.currentTarget = null, i = b;
          }
      }
    }
  }
  function fe(e, t) {
    var l = t[Qi];
    l === void 0 && (l = t[Qi] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    l.has(n) || (sm(t, e, 2, !1), l.add(n));
  }
  function jr(e, t, l) {
    var n = 0;
    t && (n |= 4), sm(
      l,
      e,
      n,
      t
    );
  }
  var ai = "_reactListening" + Math.random().toString(36).slice(2);
  function Dr(e) {
    if (!e[ai]) {
      e[ai] = !0, ls.forEach(function(l) {
        l !== "selectionchange" && (Ig.has(l) || jr(l, !1, e), jr(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ai] || (t[ai] = !0, jr("selectionchange", !1, t));
    }
  }
  function sm(e, t, l, n) {
    switch (qm(t)) {
      case 2:
        var a = Cy;
        break;
      case 8:
        a = _y;
        break;
      default:
        a = kr;
    }
    l = a.bind(
      null,
      t,
      l,
      e
    ), a = void 0, !Pi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, l, !0) : a !== void 0 ? e.addEventListener(t, l, {
      passive: a
    }) : e.addEventListener(t, l, !1);
  }
  function wr(e, t, l, n, a) {
    var i = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (; ; ) {
        if (n === null) return;
        var s = n.tag;
        if (s === 3 || s === 4) {
          var d = n.stateNode.containerInfo;
          if (d === a) break;
          if (s === 4)
            for (s = n.return; s !== null; ) {
              var b = s.tag;
              if ((b === 3 || b === 4) && s.stateNode.containerInfo === a)
                return;
              s = s.return;
            }
          for (; d !== null; ) {
            if (s = on(d), s === null) return;
            if (b = s.tag, b === 5 || b === 6 || b === 26 || b === 27) {
              n = i = s;
              continue e;
            }
            d = d.parentNode;
          }
        }
        n = n.return;
      }
    hs(function() {
      var _ = i, w = $i(l), B = [];
      e: {
        var M = Xs.get(e);
        if (M !== void 0) {
          var O = vu, Z = e;
          switch (e) {
            case "keypress":
              if (mu(l) === 0) break e;
            case "keydown":
            case "keyup":
              O = Z0;
              break;
            case "focusin":
              Z = "focus", O = nc;
              break;
            case "focusout":
              Z = "blur", O = nc;
              break;
            case "beforeblur":
            case "afterblur":
              O = nc;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              O = ys;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = D0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = k0;
              break;
            case Ls:
            case qs:
            case Ys:
              O = H0;
              break;
            case Gs:
              O = F0;
              break;
            case "scroll":
            case "scrollend":
              O = R0;
              break;
            case "wheel":
              O = I0;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = L0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = bs;
              break;
            case "toggle":
            case "beforetoggle":
              O = eg;
          }
          var I = (t & 4) !== 0, ze = !I && (e === "scroll" || e === "scrollend"), N = I ? M !== null ? M + "Capture" : null : M;
          I = [];
          for (var E = _, C; E !== null; ) {
            var U = E;
            if (C = U.stateNode, U = U.tag, U !== 5 && U !== 26 && U !== 27 || C === null || N === null || (U = ca(E, N), U != null && I.push(
              Ya(E, U, C)
            )), ze) break;
            E = E.return;
          }
          0 < I.length && (M = new O(
            M,
            Z,
            null,
            l,
            w
          ), B.push({ event: M, listeners: I }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (M = e === "mouseover" || e === "pointerover", O = e === "mouseout" || e === "pointerout", M && l !== Fi && (Z = l.relatedTarget || l.fromElement) && (on(Z) || Z[rn]))
            break e;
          if ((O || M) && (M = w.window === w ? w : (M = w.ownerDocument) ? M.defaultView || M.parentWindow : window, O ? (Z = l.relatedTarget || l.toElement, O = _, Z = Z ? on(Z) : null, Z !== null && (ze = m(Z), I = Z.tag, Z !== ze || I !== 5 && I !== 27 && I !== 6) && (Z = null)) : (O = null, Z = _), O !== Z)) {
            if (I = ys, U = "onMouseLeave", N = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (I = bs, U = "onPointerLeave", N = "onPointerEnter", E = "pointer"), ze = O == null ? M : ia(O), C = Z == null ? M : ia(Z), M = new I(
              U,
              E + "leave",
              O,
              l,
              w
            ), M.target = ze, M.relatedTarget = C, U = null, on(w) === _ && (I = new I(
              N,
              E + "enter",
              Z,
              l,
              w
            ), I.target = C, I.relatedTarget = ze, U = I), ze = U, O && Z)
              t: {
                for (I = Pg, N = O, E = Z, C = 0, U = N; U; U = I(U))
                  C++;
                U = 0;
                for (var F = E; F; F = I(F))
                  U++;
                for (; 0 < C - U; )
                  N = I(N), C--;
                for (; 0 < U - C; )
                  E = I(E), U--;
                for (; C--; ) {
                  if (N === E || E !== null && N === E.alternate) {
                    I = N;
                    break t;
                  }
                  N = I(N), E = I(E);
                }
                I = null;
              }
            else I = null;
            O !== null && fm(
              B,
              M,
              O,
              I,
              !1
            ), Z !== null && ze !== null && fm(
              B,
              ze,
              Z,
              I,
              !0
            );
          }
        }
        e: {
          if (M = _ ? ia(_) : window, O = M.nodeName && M.nodeName.toLowerCase(), O === "select" || O === "input" && M.type === "file")
            var ye = _s;
          else if (Ns(M))
            if (zs)
              ye = sg;
            else {
              ye = rg;
              var J = cg;
            }
          else
            O = M.nodeName, !O || O.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? _ && Wi(_.elementType) && (ye = _s) : ye = og;
          if (ye && (ye = ye(e, _))) {
            Cs(
              B,
              ye,
              l,
              w
            );
            break e;
          }
          J && J(e, M, _), e === "focusout" && _ && M.type === "number" && _.memoizedProps.value != null && ki(M, "number", M.value);
        }
        switch (J = _ ? ia(_) : window, e) {
          case "focusin":
            (Ns(J) || J.contentEditable === "true") && (pn = J, oc = _, va = null);
            break;
          case "focusout":
            va = oc = pn = null;
            break;
          case "mousedown":
            sc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            sc = !1, Hs(B, l, w);
            break;
          case "selectionchange":
            if (dg) break;
          case "keydown":
          case "keyup":
            Hs(B, l, w);
        }
        var ie;
        if (uc)
          e: {
            switch (e) {
              case "compositionstart":
                var me = "onCompositionStart";
                break e;
              case "compositionend":
                me = "onCompositionEnd";
                break e;
              case "compositionupdate":
                me = "onCompositionUpdate";
                break e;
            }
            me = void 0;
          }
        else
          yn ? Ts(e, l) && (me = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (me = "onCompositionStart");
        me && (Ss && l.locale !== "ko" && (yn || me !== "onCompositionStart" ? me === "onCompositionEnd" && yn && (ie = vs()) : (vl = w, ec = "value" in vl ? vl.value : vl.textContent, yn = !0)), J = ui(_, me), 0 < J.length && (me = new ps(
          me,
          e,
          null,
          l,
          w
        ), B.push({ event: me, listeners: J }), ie ? me.data = ie : (ie = As(l), ie !== null && (me.data = ie)))), (ie = lg ? ng(e, l) : ag(e, l)) && (me = ui(_, "onBeforeInput"), 0 < me.length && (J = new ps(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          w
        ), B.push({
          event: J,
          listeners: me
        }), J.data = ie)), Wg(
          B,
          e,
          _,
          l,
          w
        );
      }
      om(B, t);
    });
  }
  function Ya(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function ui(e, t) {
    for (var l = t + "Capture", n = []; e !== null; ) {
      var a = e, i = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = ca(e, l), a != null && n.unshift(
        Ya(e, a, i)
      ), a = ca(e, t), a != null && n.push(
        Ya(e, a, i)
      )), e.tag === 3) return n;
      e = e.return;
    }
    return [];
  }
  function Pg(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function fm(e, t, l, n, a) {
    for (var i = t._reactName, s = []; l !== null && l !== n; ) {
      var d = l, b = d.alternate, _ = d.stateNode;
      if (d = d.tag, b !== null && b === n) break;
      d !== 5 && d !== 26 && d !== 27 || _ === null || (b = _, a ? (_ = ca(l, i), _ != null && s.unshift(
        Ya(l, _, b)
      )) : a || (_ = ca(l, i), _ != null && s.push(
        Ya(l, _, b)
      ))), l = l.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var ey = /\r\n?/g, ty = /\u0000|\uFFFD/g;
  function dm(e) {
    return (typeof e == "string" ? e : "" + e).replace(ey, `
`).replace(ty, "");
  }
  function mm(e, t) {
    return t = dm(t), dm(e) === t;
  }
  function _e(e, t, l, n, a, i) {
    switch (l) {
      case "children":
        typeof n == "string" ? t === "body" || t === "textarea" && n === "" || hn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && hn(e, "" + n);
        break;
      case "className":
        ou(e, "class", n);
        break;
      case "tabIndex":
        ou(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ou(e, l, n);
        break;
      case "style":
        ds(e, n, i);
        break;
      case "data":
        if (t !== "object") {
          ou(e, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(l);
          break;
        }
        n = fu("" + n), e.setAttribute(l, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (l === "formAction" ? (t !== "input" && _e(e, t, "name", a.name, a, null), _e(
            e,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), _e(
            e,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), _e(
            e,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (_e(e, t, "encType", a.encType, a, null), _e(e, t, "method", a.method, a, null), _e(e, t, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(l);
          break;
        }
        n = fu("" + n), e.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (e.onclick = Jt);
        break;
      case "onScroll":
        n != null && fe("scroll", e);
        break;
      case "onScrollEnd":
        n != null && fe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(r(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(r(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        e.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        l = fu("" + n), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "" + n) : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        n === !0 ? e.setAttribute(l, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, n) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? e.setAttribute(l, n) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? e.removeAttribute(l) : e.setAttribute(l, n);
        break;
      case "popover":
        fe("beforetoggle", e), fe("toggle", e), ru(e, "popover", n);
        break;
      case "xlinkActuate":
        Kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        Kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        Kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        Kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        Kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        Kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        Kt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        Kt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        Kt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        ru(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = M0.get(l) || l, ru(e, l, n));
    }
  }
  function Ur(e, t, l, n, a, i) {
    switch (l) {
      case "style":
        ds(e, n, i);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(r(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(r(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string" ? hn(e, n) : (typeof n == "number" || typeof n == "bigint") && hn(e, "" + n);
        break;
      case "onScroll":
        n != null && fe("scroll", e);
        break;
      case "onScrollEnd":
        n != null && fe("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = Jt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ns.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), t = l.slice(2, a ? l.length - 7 : void 0), i = e[ct] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, a), typeof n == "function")) {
              typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, a);
              break e;
            }
            l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : ru(e, l, n);
          }
    }
  }
  function Pe(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        fe("error", e), fe("load", e);
        var n = !1, a = !1, i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var s = l[i];
            if (s != null)
              switch (i) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  _e(e, t, i, s, l, null);
              }
          }
        a && _e(e, t, "srcSet", l.srcSet, l, null), n && _e(e, t, "src", l.src, l, null);
        return;
      case "input":
        fe("invalid", e);
        var d = i = s = a = null, b = null, _ = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var w = l[n];
            if (w != null)
              switch (n) {
                case "name":
                  a = w;
                  break;
                case "type":
                  s = w;
                  break;
                case "checked":
                  b = w;
                  break;
                case "defaultChecked":
                  _ = w;
                  break;
                case "value":
                  i = w;
                  break;
                case "defaultValue":
                  d = w;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (w != null)
                    throw Error(r(137, t));
                  break;
                default:
                  _e(e, t, n, w, l, null);
              }
          }
        rs(
          e,
          i,
          d,
          b,
          _,
          s,
          a,
          !1
        );
        return;
      case "select":
        fe("invalid", e), n = s = i = null;
        for (a in l)
          if (l.hasOwnProperty(a) && (d = l[a], d != null))
            switch (a) {
              case "value":
                i = d;
                break;
              case "defaultValue":
                s = d;
                break;
              case "multiple":
                n = d;
              default:
                _e(e, t, a, d, l, null);
            }
        t = i, l = s, e.multiple = !!n, t != null ? mn(e, !!n, t, !1) : l != null && mn(e, !!n, l, !0);
        return;
      case "textarea":
        fe("invalid", e), i = a = n = null;
        for (s in l)
          if (l.hasOwnProperty(s) && (d = l[s], d != null))
            switch (s) {
              case "value":
                n = d;
                break;
              case "defaultValue":
                a = d;
                break;
              case "children":
                i = d;
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(r(91));
                break;
              default:
                _e(e, t, s, d, l, null);
            }
        ss(e, n, a, i);
        return;
      case "option":
        for (b in l)
          if (l.hasOwnProperty(b) && (n = l[b], n != null))
            switch (b) {
              case "selected":
                e.selected = n && typeof n != "function" && typeof n != "symbol";
                break;
              default:
                _e(e, t, b, n, l, null);
            }
        return;
      case "dialog":
        fe("beforetoggle", e), fe("toggle", e), fe("cancel", e), fe("close", e);
        break;
      case "iframe":
      case "object":
        fe("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < qa.length; n++)
          fe(qa[n], e);
        break;
      case "image":
        fe("error", e), fe("load", e);
        break;
      case "details":
        fe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        fe("error", e), fe("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (_ in l)
          if (l.hasOwnProperty(_) && (n = l[_], n != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                _e(e, t, _, n, l, null);
            }
        return;
      default:
        if (Wi(t)) {
          for (w in l)
            l.hasOwnProperty(w) && (n = l[w], n !== void 0 && Ur(
              e,
              t,
              w,
              n,
              l,
              void 0
            ));
          return;
        }
    }
    for (d in l)
      l.hasOwnProperty(d) && (n = l[d], n != null && _e(e, t, d, n, l, null));
  }
  function ly(e, t, l, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var a = null, i = null, s = null, d = null, b = null, _ = null, w = null;
        for (O in l) {
          var B = l[O];
          if (l.hasOwnProperty(O) && B != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = B;
              default:
                n.hasOwnProperty(O) || _e(e, t, O, null, n, B);
            }
        }
        for (var M in n) {
          var O = n[M];
          if (B = l[M], n.hasOwnProperty(M) && (O != null || B != null))
            switch (M) {
              case "type":
                i = O;
                break;
              case "name":
                a = O;
                break;
              case "checked":
                _ = O;
                break;
              case "defaultChecked":
                w = O;
                break;
              case "value":
                s = O;
                break;
              case "defaultValue":
                d = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(r(137, t));
                break;
              default:
                O !== B && _e(
                  e,
                  t,
                  M,
                  O,
                  n,
                  B
                );
            }
        }
        Ji(
          e,
          s,
          d,
          b,
          _,
          w,
          i,
          a
        );
        return;
      case "select":
        O = s = d = M = null;
        for (i in l)
          if (b = l[i], l.hasOwnProperty(i) && b != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                O = b;
              default:
                n.hasOwnProperty(i) || _e(
                  e,
                  t,
                  i,
                  null,
                  n,
                  b
                );
            }
        for (a in n)
          if (i = n[a], b = l[a], n.hasOwnProperty(a) && (i != null || b != null))
            switch (a) {
              case "value":
                M = i;
                break;
              case "defaultValue":
                d = i;
                break;
              case "multiple":
                s = i;
              default:
                i !== b && _e(
                  e,
                  t,
                  a,
                  i,
                  n,
                  b
                );
            }
        t = d, l = s, n = O, M != null ? mn(e, !!l, M, !1) : !!n != !!l && (t != null ? mn(e, !!l, t, !0) : mn(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        O = M = null;
        for (d in l)
          if (a = l[d], l.hasOwnProperty(d) && a != null && !n.hasOwnProperty(d))
            switch (d) {
              case "value":
                break;
              case "children":
                break;
              default:
                _e(e, t, d, null, n, a);
            }
        for (s in n)
          if (a = n[s], i = l[s], n.hasOwnProperty(s) && (a != null || i != null))
            switch (s) {
              case "value":
                M = a;
                break;
              case "defaultValue":
                O = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(r(91));
                break;
              default:
                a !== i && _e(e, t, s, a, n, i);
            }
        os(e, M, O);
        return;
      case "option":
        for (var Z in l)
          if (M = l[Z], l.hasOwnProperty(Z) && M != null && !n.hasOwnProperty(Z))
            switch (Z) {
              case "selected":
                e.selected = !1;
                break;
              default:
                _e(
                  e,
                  t,
                  Z,
                  null,
                  n,
                  M
                );
            }
        for (b in n)
          if (M = n[b], O = l[b], n.hasOwnProperty(b) && M !== O && (M != null || O != null))
            switch (b) {
              case "selected":
                e.selected = M && typeof M != "function" && typeof M != "symbol";
                break;
              default:
                _e(
                  e,
                  t,
                  b,
                  M,
                  n,
                  O
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var I in l)
          M = l[I], l.hasOwnProperty(I) && M != null && !n.hasOwnProperty(I) && _e(e, t, I, null, n, M);
        for (_ in n)
          if (M = n[_], O = l[_], n.hasOwnProperty(_) && M !== O && (M != null || O != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(r(137, t));
                break;
              default:
                _e(
                  e,
                  t,
                  _,
                  M,
                  n,
                  O
                );
            }
        return;
      default:
        if (Wi(t)) {
          for (var ze in l)
            M = l[ze], l.hasOwnProperty(ze) && M !== void 0 && !n.hasOwnProperty(ze) && Ur(
              e,
              t,
              ze,
              void 0,
              n,
              M
            );
          for (w in n)
            M = n[w], O = l[w], !n.hasOwnProperty(w) || M === O || M === void 0 && O === void 0 || Ur(
              e,
              t,
              w,
              M,
              n,
              O
            );
          return;
        }
    }
    for (var N in l)
      M = l[N], l.hasOwnProperty(N) && M != null && !n.hasOwnProperty(N) && _e(e, t, N, null, n, M);
    for (B in n)
      M = n[B], O = l[B], !n.hasOwnProperty(B) || M === O || M == null && O == null || _e(e, t, B, M, n, O);
  }
  function hm(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function ny() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var a = l[n], i = a.transferSize, s = a.initiatorType, d = a.duration;
        if (i && d && hm(s)) {
          for (s = 0, d = a.responseEnd, n += 1; n < l.length; n++) {
            var b = l[n], _ = b.startTime;
            if (_ > d) break;
            var w = b.transferSize, B = b.initiatorType;
            w && hm(B) && (b = b.responseEnd, s += w * (b < d ? 1 : (d - _) / (b - _)));
          }
          if (--n, t += 8 * (i + s) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Hr = null, Br = null;
  function ii(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function vm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function gm(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Lr(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var qr = null;
  function ay() {
    var e = window.event;
    return e && e.type === "popstate" ? e === qr ? !1 : (qr = e, !0) : (qr = null, !1);
  }
  var ym = typeof setTimeout == "function" ? setTimeout : void 0, uy = typeof clearTimeout == "function" ? clearTimeout : void 0, pm = typeof Promise == "function" ? Promise : void 0, iy = typeof queueMicrotask == "function" ? queueMicrotask : typeof pm < "u" ? function(e) {
    return pm.resolve(null).then(e).catch(cy);
  } : ym;
  function cy(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function jl(e) {
    return e === "head";
  }
  function bm(e, t) {
    var l = t, n = 0;
    do {
      var a = l.nextSibling;
      if (e.removeChild(l), a && a.nodeType === 8)
        if (l = a.data, l === "/$" || l === "/&") {
          if (n === 0) {
            e.removeChild(a), Zn(t);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          Ga(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, Ga(l);
          for (var i = l.firstChild; i; ) {
            var s = i.nextSibling, d = i.nodeName;
            i[ua] || d === "SCRIPT" || d === "STYLE" || d === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = s;
          }
        } else
          l === "body" && Ga(e.ownerDocument.body);
      l = a;
    } while (l);
    Zn(t);
  }
  function Sm(e, t) {
    var l = e;
    e = 0;
    do {
      var n = l.nextSibling;
      if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), n && n.nodeType === 8)
        if (l = n.data, l === "/$") {
          if (e === 0) break;
          e--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
      l = n;
    } while (l);
  }
  function Yr(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Yr(l), Zi(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function ry(e, t, l, n) {
    for (; e.nodeType === 1; ) {
      var a = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (n) {
        if (!e[ua])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (i !== a.rel || e.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || e.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (i = e.getAttribute("src"), (i !== (a.src == null ? null : a.src) || e.getAttribute("type") !== (a.type == null ? null : a.type) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && e.getAttribute("name") === i)
          return e;
      } else return e;
      if (e = Dt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function oy(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Dt(e.nextSibling), e === null)) return null;
    return e;
  }
  function xm(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Dt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Gr(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Xr(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function sy(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading")
      t();
    else {
      var n = function() {
        t(), l.removeEventListener("DOMContentLoaded", n);
      };
      l.addEventListener("DOMContentLoaded", n), e._reactRetry = n;
    }
  }
  function Dt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Vr = null;
  function Em(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return Dt(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Tm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else l !== "/$" && l !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Am(e, t, l) {
    switch (t = ii(l), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(r(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(r(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function Ga(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Zi(e);
  }
  var wt = /* @__PURE__ */ new Map(), Nm = /* @__PURE__ */ new Set();
  function ci(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ol = G.d;
  G.d = {
    f: fy,
    r: dy,
    D: my,
    C: hy,
    L: vy,
    m: gy,
    X: py,
    S: yy,
    M: by
  };
  function fy() {
    var e = ol.f(), t = Iu();
    return e || t;
  }
  function dy(e) {
    var t = sn(e);
    t !== null && t.tag === 5 && t.type === "form" ? Xf(t) : ol.r(e);
  }
  var Xn = typeof document > "u" ? null : document;
  function Cm(e, t, l) {
    var n = Xn;
    if (n && typeof t == "string" && t) {
      var a = Ct(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), Nm.has(a) || (Nm.add(a), e = { rel: e, crossOrigin: l, href: t }, n.querySelector(a) === null && (t = n.createElement("link"), Pe(t, "link", e), Je(t), n.head.appendChild(t)));
    }
  }
  function my(e) {
    ol.D(e), Cm("dns-prefetch", e, null);
  }
  function hy(e, t) {
    ol.C(e, t), Cm("preconnect", e, t);
  }
  function vy(e, t, l) {
    ol.L(e, t, l);
    var n = Xn;
    if (n && e && t) {
      var a = 'link[rel="preload"][as="' + Ct(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + Ct(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + Ct(
        l.imageSizes
      ) + '"]')) : a += '[href="' + Ct(e) + '"]';
      var i = a;
      switch (t) {
        case "style":
          i = Vn(e);
          break;
        case "script":
          i = Qn(e);
      }
      wt.has(i) || (e = T(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), wt.set(i, e), n.querySelector(a) !== null || t === "style" && n.querySelector(Xa(i)) || t === "script" && n.querySelector(Va(i)) || (t = n.createElement("link"), Pe(t, "link", e), Je(t), n.head.appendChild(t)));
    }
  }
  function gy(e, t) {
    ol.m(e, t);
    var l = Xn;
    if (l && e) {
      var n = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + Ct(n) + '"][href="' + Ct(e) + '"]', i = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Qn(e);
      }
      if (!wt.has(i) && (e = T({ rel: "modulepreload", href: e }, t), wt.set(i, e), l.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Va(i)))
              return;
        }
        n = l.createElement("link"), Pe(n, "link", e), Je(n), l.head.appendChild(n);
      }
    }
  }
  function yy(e, t, l) {
    ol.S(e, t, l);
    var n = Xn;
    if (n && e) {
      var a = fn(n).hoistableStyles, i = Vn(e);
      t = t || "default";
      var s = a.get(i);
      if (!s) {
        var d = { loading: 0, preload: null };
        if (s = n.querySelector(
          Xa(i)
        ))
          d.loading = 5;
        else {
          e = T(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = wt.get(i)) && Qr(e, l);
          var b = s = n.createElement("link");
          Je(b), Pe(b, "link", e), b._p = new Promise(function(_, w) {
            b.onload = _, b.onerror = w;
          }), b.addEventListener("load", function() {
            d.loading |= 1;
          }), b.addEventListener("error", function() {
            d.loading |= 2;
          }), d.loading |= 4, ri(s, t, n);
        }
        s = {
          type: "stylesheet",
          instance: s,
          count: 1,
          state: d
        }, a.set(i, s);
      }
    }
  }
  function py(e, t) {
    ol.X(e, t);
    var l = Xn;
    if (l && e) {
      var n = fn(l).hoistableScripts, a = Qn(e), i = n.get(a);
      i || (i = l.querySelector(Va(a)), i || (e = T({ src: e, async: !0 }, t), (t = wt.get(a)) && Zr(e, t), i = l.createElement("script"), Je(i), Pe(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function by(e, t) {
    ol.M(e, t);
    var l = Xn;
    if (l && e) {
      var n = fn(l).hoistableScripts, a = Qn(e), i = n.get(a);
      i || (i = l.querySelector(Va(a)), i || (e = T({ src: e, async: !0, type: "module" }, t), (t = wt.get(a)) && Zr(e, t), i = l.createElement("script"), Je(i), Pe(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function _m(e, t, l, n) {
    var a = (a = oe.current) ? ci(a) : null;
    if (!a) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Vn(l.href), l = fn(
          a
        ).hoistableStyles, n = l.get(t), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = Vn(l.href);
          var i = fn(
            a
          ).hoistableStyles, s = i.get(e);
          if (s || (a = a.ownerDocument || a, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, s), (i = a.querySelector(
            Xa(e)
          )) && !i._p && (s.instance = i, s.state.loading = 5), wt.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, wt.set(e, l), i || Sy(
            a,
            e,
            l,
            s.state
          ))), t && n === null)
            throw Error(r(528, ""));
          return s;
        }
        if (t && n !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Qn(l), l = fn(
          a
        ).hoistableScripts, n = l.get(t), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, e));
    }
  }
  function Vn(e) {
    return 'href="' + Ct(e) + '"';
  }
  function Xa(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function zm(e) {
    return T({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Sy(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
      return n.loading |= 1;
    }), t.addEventListener("error", function() {
      return n.loading |= 2;
    }), Pe(t, "link", l), Je(t), e.head.appendChild(t));
  }
  function Qn(e) {
    return '[src="' + Ct(e) + '"]';
  }
  function Va(e) {
    return "script[async]" + e;
  }
  function Mm(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var n = e.querySelector(
            'style[data-href~="' + Ct(l.href) + '"]'
          );
          if (n)
            return t.instance = n, Je(n), n;
          var a = T({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (e.ownerDocument || e).createElement(
            "style"
          ), Je(n), Pe(n, "style", a), ri(n, l.precedence, e), t.instance = n;
        case "stylesheet":
          a = Vn(l.href);
          var i = e.querySelector(
            Xa(a)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, Je(i), i;
          n = zm(l), (a = wt.get(a)) && Qr(n, a), i = (e.ownerDocument || e).createElement("link"), Je(i);
          var s = i;
          return s._p = new Promise(function(d, b) {
            s.onload = d, s.onerror = b;
          }), Pe(i, "link", n), t.state.loading |= 4, ri(i, l.precedence, e), t.instance = i;
        case "script":
          return i = Qn(l.src), (a = e.querySelector(
            Va(i)
          )) ? (t.instance = a, Je(a), a) : (n = l, (a = wt.get(i)) && (n = T({}, l), Zr(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), Je(a), Pe(a, "link", n), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, ri(n, l.precedence, e));
    return t.instance;
  }
  function ri(e, t, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, i = a, s = 0; s < n.length; s++) {
      var d = n[s];
      if (d.dataset.precedence === t) i = d;
      else if (i !== a) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function Qr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Zr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var oi = null;
  function Om(e, t, l) {
    if (oi === null) {
      var n = /* @__PURE__ */ new Map(), a = oi = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = oi, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(e)) return n;
    for (n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++) {
      var i = l[a];
      if (!(i[ua] || i[We] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = i.getAttribute(t) || "";
        s = e + s;
        var d = n.get(s);
        d ? d.push(i) : n.set(s, [i]);
      }
    }
    return n;
  }
  function Rm(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function xy(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function jm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Ey(e, t, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = Vn(n.href), i = t.querySelector(
          Xa(a)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = si.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = i, Je(i);
          return;
        }
        i = t.ownerDocument || t, n = zm(n), (a = wt.get(a)) && Qr(n, a), i = i.createElement("link"), Je(i);
        var s = i;
        s._p = new Promise(function(d, b) {
          s.onload = d, s.onerror = b;
        }), Pe(i, "link", n), l.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = si.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var Kr = 0;
  function Ty(e, t) {
    return e.stylesheets && e.count === 0 && di(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (e.stylesheets && di(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Kr === 0 && (Kr = 62500 * ny());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && di(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > Kr ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function si() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) di(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var fi = null;
  function di(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, fi = /* @__PURE__ */ new Map(), t.forEach(Ay, e), fi = null, si.call(e));
  }
  function Ay(e, t) {
    if (!(t.state.loading & 4)) {
      var l = fi.get(e);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), fi.set(e, l);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < a.length; i++) {
          var s = a[i];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (l.set(s.dataset.precedence, s), n = s);
        }
        n && l.set(null, n);
      }
      a = t.instance, s = a.getAttribute("data-precedence"), i = l.get(s) || n, i === n && l.set(null, a), l.set(s, a), this.count++, n = si.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Qa = {
    $$typeof: k,
    Provider: null,
    Consumer: null,
    _currentValue: $,
    _currentValue2: $,
    _threadCount: 0
  };
  function Ny(e, t, l, n, a, i, s, d, b) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Gi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gi(0), this.hiddenUpdates = Gi(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Dm(e, t, l, n, a, i, s, d, b, _, w, B) {
    return e = new Ny(
      e,
      t,
      l,
      s,
      b,
      _,
      w,
      B,
      d
    ), t = 1, i === !0 && (t |= 24), i = pt(3, null, null, t), e.current = i, i.stateNode = e, t = Nc(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: t
    }, Mc(i), e;
  }
  function wm(e) {
    return e ? (e = xn, e) : xn;
  }
  function Um(e, t, l, n, a, i) {
    a = wm(a), n.context === null ? n.context = a : n.pendingContext = a, n = xl(t), n.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = El(e, n, t), l !== null && (mt(l, e, t), Ea(l, e, t));
  }
  function Hm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Jr(e, t) {
    Hm(e, t), (e = e.alternate) && Hm(e, t);
  }
  function Bm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Jl(e, 67108864);
      t !== null && mt(t, e, 67108864), Jr(e, 67108864);
    }
  }
  function Lm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Tt();
      t = Xi(t);
      var l = Jl(e, t);
      l !== null && mt(l, e, t), Jr(e, t);
    }
  }
  var mi = !0;
  function Cy(e, t, l, n) {
    var a = j.T;
    j.T = null;
    var i = G.p;
    try {
      G.p = 2, kr(e, t, l, n);
    } finally {
      G.p = i, j.T = a;
    }
  }
  function _y(e, t, l, n) {
    var a = j.T;
    j.T = null;
    var i = G.p;
    try {
      G.p = 8, kr(e, t, l, n);
    } finally {
      G.p = i, j.T = a;
    }
  }
  function kr(e, t, l, n) {
    if (mi) {
      var a = Wr(n);
      if (a === null)
        wr(
          e,
          t,
          n,
          hi,
          l
        ), Ym(e, n);
      else if (My(
        a,
        e,
        t,
        l,
        n
      ))
        n.stopPropagation();
      else if (Ym(e, n), t & 4 && -1 < zy.indexOf(e)) {
        for (; a !== null; ) {
          var i = sn(a);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var s = Xl(i.pendingLanes);
                  if (s !== 0) {
                    var d = i;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; s; ) {
                      var b = 1 << 31 - gt(s);
                      d.entanglements[1] |= b, s &= ~b;
                    }
                    Vt(i), (Se & 6) === 0 && (Fu = ht() + 500, La(0));
                  }
                }
                break;
              case 31:
              case 13:
                d = Jl(i, 2), d !== null && mt(d, i, 2), Iu(), Jr(i, 2);
            }
          if (i = Wr(n), i === null && wr(
            e,
            t,
            n,
            hi,
            l
          ), i === a) break;
          a = i;
        }
        a !== null && n.stopPropagation();
      } else
        wr(
          e,
          t,
          n,
          null,
          l
        );
    }
  }
  function Wr(e) {
    return e = $i(e), Fr(e);
  }
  var hi = null;
  function Fr(e) {
    if (hi = null, e = on(e), e !== null) {
      var t = m(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = y(t), e !== null) return e;
          e = null;
        } else if (l === 31) {
          if (e = h(t), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return hi = e, null;
  }
  function qm(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (m0()) {
          case Ko:
            return 2;
          case Jo:
            return 8;
          case nu:
          case h0:
            return 32;
          case ko:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var $r = !1, Dl = null, wl = null, Ul = null, Za = /* @__PURE__ */ new Map(), Ka = /* @__PURE__ */ new Map(), Hl = [], zy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ym(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Dl = null;
        break;
      case "dragenter":
      case "dragleave":
        wl = null;
        break;
      case "mouseover":
      case "mouseout":
        Ul = null;
        break;
      case "pointerover":
      case "pointerout":
        Za.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ka.delete(t.pointerId);
    }
  }
  function Ja(e, t, l, n, a, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: i,
      targetContainers: [a]
    }, t !== null && (t = sn(t), t !== null && Bm(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function My(e, t, l, n, a) {
    switch (t) {
      case "focusin":
        return Dl = Ja(
          Dl,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return wl = Ja(
          wl,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "mouseover":
        return Ul = Ja(
          Ul,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "pointerover":
        var i = a.pointerId;
        return Za.set(
          i,
          Ja(
            Za.get(i) || null,
            e,
            t,
            l,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return i = a.pointerId, Ka.set(
          i,
          Ja(
            Ka.get(i) || null,
            e,
            t,
            l,
            n,
            a
          )
        ), !0;
    }
    return !1;
  }
  function Gm(e) {
    var t = on(e.target);
    if (t !== null) {
      var l = m(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = y(l), t !== null) {
            e.blockedOn = t, es(e.priority, function() {
              Lm(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = h(l), t !== null) {
            e.blockedOn = t, es(e.priority, function() {
              Lm(l);
            });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function vi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Wr(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        Fi = n, l.target.dispatchEvent(n), Fi = null;
      } else
        return t = sn(l), t !== null && Bm(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function Xm(e, t, l) {
    vi(e) && l.delete(t);
  }
  function Oy() {
    $r = !1, Dl !== null && vi(Dl) && (Dl = null), wl !== null && vi(wl) && (wl = null), Ul !== null && vi(Ul) && (Ul = null), Za.forEach(Xm), Ka.forEach(Xm);
  }
  function gi(e, t) {
    e.blockedOn === t && (e.blockedOn = null, $r || ($r = !0, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      Oy
    )));
  }
  var yi = null;
  function Vm(e) {
    yi !== e && (yi = e, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      function() {
        yi === e && (yi = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], n = e[t + 1], a = e[t + 2];
          if (typeof n != "function") {
            if (Fr(n || l) === null)
              continue;
            break;
          }
          var i = sn(l);
          i !== null && (e.splice(t, 3), t -= 3, Wc(
            i,
            {
              pending: !0,
              data: a,
              method: l.method,
              action: n
            },
            n,
            a
          ));
        }
      }
    ));
  }
  function Zn(e) {
    function t(b) {
      return gi(b, e);
    }
    Dl !== null && gi(Dl, e), wl !== null && gi(wl, e), Ul !== null && gi(Ul, e), Za.forEach(t), Ka.forEach(t);
    for (var l = 0; l < Hl.length; l++) {
      var n = Hl[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < Hl.length && (l = Hl[0], l.blockedOn === null); )
      Gm(l), l.blockedOn === null && Hl.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], i = l[n + 1], s = a[ct] || null;
        if (typeof i == "function")
          s || Vm(l);
        else if (s) {
          var d = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, s = i[ct] || null)
              d = s.formAction;
            else if (Fr(a) !== null) continue;
          } else d = s.action;
          typeof d == "function" ? l[n + 1] = d : (l.splice(n, 3), n -= 3), Vm(l);
        }
      }
  }
  function Qm() {
    function e(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(s) {
            return a = s;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      a !== null && (a(), a = null), n || setTimeout(l, 20);
    }
    function l() {
      if (!n && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var n = !1, a = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100), function() {
        n = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), a !== null && (a(), a = null);
      };
    }
  }
  function Ir(e) {
    this._internalRoot = e;
  }
  pi.prototype.render = Ir.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var l = t.current, n = Tt();
    Um(l, n, e, t, null, null);
  }, pi.prototype.unmount = Ir.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Um(e.current, 2, null, e, null, null), Iu(), t[rn] = null;
    }
  };
  function pi(e) {
    this._internalRoot = e;
  }
  pi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Po();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Hl.length && t !== 0 && t < Hl[l].priority; l++) ;
      Hl.splice(l, 0, e), l === 0 && Gm(e);
    }
  };
  var Zm = c.version;
  if (Zm !== "19.2.4")
    throw Error(
      r(
        527,
        Zm,
        "19.2.4"
      )
    );
  G.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = g(t), e = e !== null ? A(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Ry = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bi.isDisabled && bi.supportsFiber)
      try {
        la = bi.inject(
          Ry
        ), vt = bi;
      } catch {
      }
  }
  return ka.createRoot = function(e, t) {
    if (!f(e)) throw Error(r(299));
    var l = !1, n = "", a = If, i = Pf, s = ed;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Dm(
      e,
      1,
      !1,
      null,
      null,
      l,
      n,
      null,
      a,
      i,
      s,
      Qm
    ), e[rn] = t.current, Dr(e), new Ir(t);
  }, ka.hydrateRoot = function(e, t, l) {
    if (!f(e)) throw Error(r(299));
    var n = !1, a = "", i = If, s = Pf, d = ed, b = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (s = l.onCaughtError), l.onRecoverableError !== void 0 && (d = l.onRecoverableError), l.formState !== void 0 && (b = l.formState)), t = Dm(
      e,
      1,
      !0,
      t,
      l ?? null,
      n,
      a,
      b,
      i,
      s,
      d,
      Qm
    ), t.context = wm(null), l = t.current, n = Tt(), n = Xi(n), a = xl(n), a.callback = null, El(l, a, n), l = n, t.current.lanes = l, aa(t, l), Vt(t), e[rn] = t.current, Dr(e), new pi(t);
  }, ka.version = "19.2.4", ka;
}
var Pm;
function Yy() {
  if (Pm) return eo.exports;
  Pm = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), eo.exports = qy(), eo.exports;
}
var Gy = Yy(), ao = { exports: {} }, Wa = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eh;
function Xy() {
  if (eh) return Wa;
  eh = 1;
  var u = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function o(r, f, m) {
    var y = null;
    if (m !== void 0 && (y = "" + m), f.key !== void 0 && (y = "" + f.key), "key" in f) {
      m = {};
      for (var h in f)
        h !== "key" && (m[h] = f[h]);
    } else m = f;
    return f = m.ref, {
      $$typeof: u,
      type: r,
      key: y,
      ref: f !== void 0 ? f : null,
      props: m
    };
  }
  return Wa.Fragment = c, Wa.jsx = o, Wa.jsxs = o, Wa;
}
var th;
function Vy() {
  return th || (th = 1, ao.exports = Xy()), ao.exports;
}
var v = Vy();
function _h(u) {
  var c, o, r = "";
  if (typeof u == "string" || typeof u == "number") r += u;
  else if (typeof u == "object") if (Array.isArray(u)) {
    var f = u.length;
    for (c = 0; c < f; c++) u[c] && (o = _h(u[c])) && (r && (r += " "), r += o);
  } else for (o in u) u[o] && (r && (r += " "), r += o);
  return r;
}
function zh() {
  for (var u, c, o = 0, r = "", f = arguments.length; o < f; o++) (u = arguments[o]) && (c = _h(u)) && (r && (r += " "), r += c);
  return r;
}
const Mo = "-", Qy = (u) => {
  const c = Ky(u), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: r
  } = u;
  return {
    getClassGroupId: (y) => {
      const h = y.split(Mo);
      return h[0] === "" && h.length !== 1 && h.shift(), Mh(h, c) || Zy(y);
    },
    getConflictingClassGroupIds: (y, h) => {
      const S = o[y] || [];
      return h && r[y] ? [...S, ...r[y]] : S;
    }
  };
}, Mh = (u, c) => {
  var y;
  if (u.length === 0)
    return c.classGroupId;
  const o = u[0], r = c.nextPart.get(o), f = r ? Mh(u.slice(1), r) : void 0;
  if (f)
    return f;
  if (c.validators.length === 0)
    return;
  const m = u.join(Mo);
  return (y = c.validators.find(({
    validator: h
  }) => h(m))) == null ? void 0 : y.classGroupId;
}, lh = /^\[(.+)\]$/, Zy = (u) => {
  if (lh.test(u)) {
    const c = lh.exec(u)[1], o = c == null ? void 0 : c.substring(0, c.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, Ky = (u) => {
  const {
    theme: c,
    prefix: o
  } = u, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ky(Object.entries(u.classGroups), o).forEach(([m, y]) => {
    vo(y, r, m, c);
  }), r;
}, vo = (u, c, o, r) => {
  u.forEach((f) => {
    if (typeof f == "string") {
      const m = f === "" ? c : nh(c, f);
      m.classGroupId = o;
      return;
    }
    if (typeof f == "function") {
      if (Jy(f)) {
        vo(f(r), c, o, r);
        return;
      }
      c.validators.push({
        validator: f,
        classGroupId: o
      });
      return;
    }
    Object.entries(f).forEach(([m, y]) => {
      vo(y, nh(c, m), o, r);
    });
  });
}, nh = (u, c) => {
  let o = u;
  return c.split(Mo).forEach((r) => {
    o.nextPart.has(r) || o.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(r);
  }), o;
}, Jy = (u) => u.isThemeGetter, ky = (u, c) => c ? u.map(([o, r]) => {
  const f = r.map((m) => typeof m == "string" ? c + m : typeof m == "object" ? Object.fromEntries(Object.entries(m).map(([y, h]) => [c + y, h])) : m);
  return [o, f];
}) : u, Wy = (u) => {
  if (u < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let c = 0, o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const f = (m, y) => {
    o.set(m, y), c++, c > u && (c = 0, r = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(m) {
      let y = o.get(m);
      if (y !== void 0)
        return y;
      if ((y = r.get(m)) !== void 0)
        return f(m, y), y;
    },
    set(m, y) {
      o.has(m) ? o.set(m, y) : f(m, y);
    }
  };
}, Oh = "!", Fy = (u) => {
  const {
    separator: c,
    experimentalParseClassName: o
  } = u, r = c.length === 1, f = c[0], m = c.length, y = (h) => {
    const S = [];
    let g = 0, A = 0, T;
    for (let q = 0; q < h.length; q++) {
      let Y = h[q];
      if (g === 0) {
        if (Y === f && (r || h.slice(q, q + m) === c)) {
          S.push(h.slice(A, q)), A = q + m;
          continue;
        }
        if (Y === "/") {
          T = q;
          continue;
        }
      }
      Y === "[" ? g++ : Y === "]" && g--;
    }
    const z = S.length === 0 ? h : h.substring(A), D = z.startsWith(Oh), H = D ? z.substring(1) : z, R = T && T > A ? T - A : void 0;
    return {
      modifiers: S,
      hasImportantModifier: D,
      baseClassName: H,
      maybePostfixModifierPosition: R
    };
  };
  return o ? (h) => o({
    className: h,
    parseClassName: y
  }) : y;
}, $y = (u) => {
  if (u.length <= 1)
    return u;
  const c = [];
  let o = [];
  return u.forEach((r) => {
    r[0] === "[" ? (c.push(...o.sort(), r), o = []) : o.push(r);
  }), c.push(...o.sort()), c;
}, Iy = (u) => ({
  cache: Wy(u.cacheSize),
  parseClassName: Fy(u),
  ...Qy(u)
}), Py = /\s+/, ep = (u, c) => {
  const {
    parseClassName: o,
    getClassGroupId: r,
    getConflictingClassGroupIds: f
  } = c, m = [], y = u.trim().split(Py);
  let h = "";
  for (let S = y.length - 1; S >= 0; S -= 1) {
    const g = y[S], {
      modifiers: A,
      hasImportantModifier: T,
      baseClassName: z,
      maybePostfixModifierPosition: D
    } = o(g);
    let H = !!D, R = r(H ? z.substring(0, D) : z);
    if (!R) {
      if (!H) {
        h = g + (h.length > 0 ? " " + h : h);
        continue;
      }
      if (R = r(z), !R) {
        h = g + (h.length > 0 ? " " + h : h);
        continue;
      }
      H = !1;
    }
    const q = $y(A).join(":"), Y = T ? q + Oh : q, X = Y + R;
    if (m.includes(X))
      continue;
    m.push(X);
    const k = f(R, H);
    for (let W = 0; W < k.length; ++W) {
      const P = k[W];
      m.push(Y + P);
    }
    h = g + (h.length > 0 ? " " + h : h);
  }
  return h;
};
function tp() {
  let u = 0, c, o, r = "";
  for (; u < arguments.length; )
    (c = arguments[u++]) && (o = Rh(c)) && (r && (r += " "), r += o);
  return r;
}
const Rh = (u) => {
  if (typeof u == "string")
    return u;
  let c, o = "";
  for (let r = 0; r < u.length; r++)
    u[r] && (c = Rh(u[r])) && (o && (o += " "), o += c);
  return o;
};
function lp(u, ...c) {
  let o, r, f, m = y;
  function y(S) {
    const g = c.reduce((A, T) => T(A), u());
    return o = Iy(g), r = o.cache.get, f = o.cache.set, m = h, h(S);
  }
  function h(S) {
    const g = r(S);
    if (g)
      return g;
    const A = ep(S, o);
    return f(S, A), A;
  }
  return function() {
    return m(tp.apply(null, arguments));
  };
}
const De = (u) => {
  const c = (o) => o[u] || [];
  return c.isThemeGetter = !0, c;
}, jh = /^\[(?:([a-z-]+):)?(.+)\]$/i, np = /^\d+\/\d+$/, ap = /* @__PURE__ */ new Set(["px", "full", "screen"]), up = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ip = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, cp = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, rp = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, op = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, sl = (u) => Wn(u) || ap.has(u) || np.test(u), Ll = (u) => Pn(u, "length", yp), Wn = (u) => !!u && !Number.isNaN(Number(u)), uo = (u) => Pn(u, "number", Wn), Fa = (u) => !!u && Number.isInteger(Number(u)), sp = (u) => u.endsWith("%") && Wn(u.slice(0, -1)), ce = (u) => jh.test(u), ql = (u) => up.test(u), fp = /* @__PURE__ */ new Set(["length", "size", "percentage"]), dp = (u) => Pn(u, fp, Dh), mp = (u) => Pn(u, "position", Dh), hp = /* @__PURE__ */ new Set(["image", "url"]), vp = (u) => Pn(u, hp, bp), gp = (u) => Pn(u, "", pp), $a = () => !0, Pn = (u, c, o) => {
  const r = jh.exec(u);
  return r ? r[1] ? typeof c == "string" ? r[1] === c : c.has(r[1]) : o(r[2]) : !1;
}, yp = (u) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ip.test(u) && !cp.test(u)
), Dh = () => !1, pp = (u) => rp.test(u), bp = (u) => op.test(u), Sp = () => {
  const u = De("colors"), c = De("spacing"), o = De("blur"), r = De("brightness"), f = De("borderColor"), m = De("borderRadius"), y = De("borderSpacing"), h = De("borderWidth"), S = De("contrast"), g = De("grayscale"), A = De("hueRotate"), T = De("invert"), z = De("gap"), D = De("gradientColorStops"), H = De("gradientColorStopPositions"), R = De("inset"), q = De("margin"), Y = De("opacity"), X = De("padding"), k = De("saturate"), W = De("scale"), P = De("sepia"), re = De("skew"), V = De("space"), te = De("translate"), ne = () => ["auto", "contain", "none"], be = () => ["auto", "hidden", "clip", "visible", "scroll"], xe = () => ["auto", ce, c], ee = () => [ce, c], At = () => ["", sl, Ll], nt = () => ["auto", Wn, ce], et = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], j = () => ["solid", "dashed", "dotted", "double", "none"], G = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], $ = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ve = () => ["", "0", ce], Ee = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], x = () => [Wn, ce];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [$a],
      spacing: [sl, Ll],
      blur: ["none", "", ql, ce],
      brightness: x(),
      borderColor: [u],
      borderRadius: ["none", "", "full", ql, ce],
      borderSpacing: ee(),
      borderWidth: At(),
      contrast: x(),
      grayscale: ve(),
      hueRotate: x(),
      invert: ve(),
      gap: ee(),
      gradientColorStops: [u],
      gradientColorStopPositions: [sp, Ll],
      inset: xe(),
      margin: xe(),
      opacity: x(),
      padding: ee(),
      saturate: x(),
      scale: x(),
      sepia: ve(),
      skew: x(),
      space: ee(),
      translate: ee()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ce]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ql]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Ee()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Ee()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...et(), ce]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: be()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": be()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": be()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ne()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ne()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ne()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [R]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [R]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [R]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [R]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [R]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [R]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [R]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [R]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [R]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Fa, ce]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: xe()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", ce]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ve()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ve()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Fa, ce]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [$a]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Fa, ce]
        }, ce]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": nt()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": nt()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [$a]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Fa, ce]
        }, ce]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": nt()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": nt()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", ce]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ce]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [z]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [z]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [z]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...$()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...$(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...$(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [X]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [X]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [X]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [X]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [X]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [X]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [X]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [X]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [X]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [q]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [q]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [q]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [q]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [q]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [q]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [q]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [q]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [q]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [V]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [V]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ce, c]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ce, c, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ce, c, "none", "full", "min", "max", "fit", "prose", {
          screen: [ql]
        }, ql]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ce, c, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ce, c, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ce, c, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ce, c, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ql, Ll]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", uo]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [$a]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ce]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Wn, uo]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", sl, ce]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ce]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ce]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [u]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [Y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [u]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [Y]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...j(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", sl, Ll]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", sl, ce]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [u]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: ee()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ce]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ce]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [Y]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...et(), mp]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", dp]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, vp]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [u]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [H]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [H]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [H]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [D]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [D]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [D]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [m]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [m]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [m]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [m]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [m]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [m]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [m]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [m]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [m]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [m]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [m]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [m]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [m]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [m]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [m]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [h]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [h]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [h]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [h]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [h]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [h]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [h]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [h]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [h]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [Y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...j(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [h]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [h]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [Y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: j()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [f]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [f]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [f]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [f]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [f]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [f]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [f]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [f]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [f]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [f]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...j()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [sl, ce]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [sl, Ll]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [u]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: At()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [u]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [Y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [sl, Ll]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [u]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", ql, gp]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [$a]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...G(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": G()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [o]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [S]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ql, ce]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [g]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [A]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [T]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [k]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [P]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [o]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [S]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [g]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [A]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [T]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [k]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [P]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [y]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [y]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [y]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ce]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: x()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ce]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: x()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ce]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [W]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [W]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [W]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Fa, ce]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [te]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [te]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [re]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [re]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ce]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", u]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ce]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [u]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": ee()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": ee()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": ee()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": ee()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": ee()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": ee()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": ee()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": ee()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": ee()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": ee()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": ee()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": ee()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": ee()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": ee()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": ee()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": ee()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": ee()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": ee()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ce]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [u, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [sl, Ll, uo]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [u, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, xp = /* @__PURE__ */ lp(Sp);
function ge(...u) {
  return xp(zh(u));
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ep = (u) => u.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Tp = (u) => u.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (c, o, r) => r ? r.toUpperCase() : o.toLowerCase()
), ah = (u) => {
  const c = Tp(u);
  return c.charAt(0).toUpperCase() + c.slice(1);
}, wh = (...u) => u.filter((c, o, r) => !!c && c.trim() !== "" && r.indexOf(c) === o).join(" ").trim(), Ap = (u) => {
  for (const c in u)
    if (c.startsWith("aria-") || c === "role" || c === "title")
      return !0;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Np = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cp = p.forwardRef(
  ({
    color: u = "currentColor",
    size: c = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: r,
    className: f = "",
    children: m,
    iconNode: y,
    ...h
  }, S) => p.createElement(
    "svg",
    {
      ref: S,
      ...Np,
      width: c,
      height: c,
      stroke: u,
      strokeWidth: r ? Number(o) * 24 / Number(c) : o,
      className: wh("lucide", f),
      ...!m && !Ap(h) && { "aria-hidden": "true" },
      ...h
    },
    [
      ...y.map(([g, A]) => p.createElement(g, A)),
      ...Array.isArray(m) ? m : [m]
    ]
  )
);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oe = (u, c) => {
  const o = p.forwardRef(
    ({ className: r, ...f }, m) => p.createElement(Cp, {
      ref: m,
      iconNode: c,
      className: wh(
        `lucide-${Ep(ah(u))}`,
        `lucide-${u}`,
        r
      ),
      ...f
    })
  );
  return o.displayName = ah(u), o;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _p = [
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
], zp = Oe("box", _p);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mp = [
  [
    "path",
    { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1", key: "ezmyqa" }
  ],
  [
    "path",
    {
      d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
      key: "e1hn23"
    }
  ]
], Op = Oe("braces", Mp);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rp = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], go = Oe("check", Rp);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jp = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Uh = Oe("chevron-down", jp);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dp = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Oo = Oe("chevron-right", Dp);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wp = [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65", key: "1pfsoa" }],
  ["path", { d: "M19.08 19.08A10 10 0 1 1 4.92 4.92", key: "1ablyi" }]
], Up = Oe("circle-off", wp);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hp = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], yo = Oe("copy", Hp);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bp = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
], Lp = Oe("database", Bp);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qp = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Yp = Oe("eye", qp);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gp = [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  [
    "path",
    { d: "M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "fq0c9t" }
  ],
  [
    "path",
    { d: "M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "4gibmv" }
  ]
], ea = Oe("file-json-2", Gp);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xp = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], Vp = Oe("folder-open", Xp);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qp = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
], Zp = Oe("folder", Qp);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kp = [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]
], Jp = Oe("git-branch", Kp);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kp = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], uh = Oe("hash", kp);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wp = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
], Hh = Oe("layers", Wp);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fp = [
  ["path", { d: "M11 5h10", key: "1cz7ny" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 19h10", key: "11t30w" }],
  ["path", { d: "M4 4h1v5", key: "10yrso" }],
  ["path", { d: "M4 9h2", key: "r1h2o0" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02", key: "xtkcd5" }]
], Bh = Oe("list-ordered", Fp);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $p = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], Ip = Oe("list", $p);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pp = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], eb = Oe("lock", Pp);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tb = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], ih = Oe("search", tb);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lb = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
], nb = Oe("shield-alert", lb);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ab = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
], ub = Oe("tag", ab);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ib = [
  ["path", { d: "M21 5H3", key: "1fi0y6" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 19H3", key: "z6ezky" }]
], cb = Oe("text-align-start", ib);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rb = [
  ["path", { d: "m16 16-3 3 3 3", key: "117b85" }],
  ["path", { d: "M3 12h14.5a1 1 0 0 1 0 7H13", key: "18xa6z" }],
  ["path", { d: "M3 19h6", key: "1ygdsz" }],
  ["path", { d: "M3 5h18", key: "1u36vt" }]
], ob = Oe("text-wrap", rb);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sb = [
  ["circle", { cx: "9", cy: "12", r: "3", key: "u3jwor" }],
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "7", key: "g7kal2" }]
], fb = Oe("toggle-left", sb);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const db = [
  ["path", { d: "M12 4v16", key: "1654pz" }],
  ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
  ["path", { d: "M9 20h6", key: "s66wpe" }]
], mb = Oe("type", db);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hb = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], vb = Oe("x", hb), Lh = p.forwardRef(
  ({ className: u, type: c, ...o }, r) => /* @__PURE__ */ v.jsx(
    "input",
    {
      type: c,
      className: ge(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        u
      ),
      ref: r,
      ...o
    }
  )
);
Lh.displayName = "Input";
const ch = (u) => typeof u == "boolean" ? `${u}` : u === 0 ? "0" : u, rh = zh, Ro = (u, c) => (o) => {
  var r;
  if ((c == null ? void 0 : c.variants) == null) return rh(u, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
  const { variants: f, defaultVariants: m } = c, y = Object.keys(f).map((g) => {
    const A = o == null ? void 0 : o[g], T = m == null ? void 0 : m[g];
    if (A === null) return null;
    const z = ch(A) || ch(T);
    return f[g][z];
  }), h = o && Object.entries(o).reduce((g, A) => {
    let [T, z] = A;
    return z === void 0 || (g[T] = z), g;
  }, {}), S = c == null || (r = c.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((g, A) => {
    let { class: T, className: z, ...D } = A;
    return Object.entries(D).every((H) => {
      let [R, q] = H;
      return Array.isArray(q) ? q.includes({
        ...m,
        ...h
      }[R]) : {
        ...m,
        ...h
      }[R] === q;
    }) ? [
      ...g,
      T,
      z
    ] : g;
  }, []);
  return rh(u, y, S, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
}, gb = Ro(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function qh({ className: u, variant: c, ...o }) {
  return /* @__PURE__ */ v.jsx("div", { className: ge(gb({ variant: c }), u), ...o });
}
var Yh = Ch();
const yb = /* @__PURE__ */ Nh(Yh);
function oh(u, c) {
  if (typeof u == "function")
    return u(c);
  u != null && (u.current = c);
}
function Gh(...u) {
  return (c) => {
    let o = !1;
    const r = u.map((f) => {
      const m = oh(f, c);
      return !o && typeof m == "function" && (o = !0), m;
    });
    if (o)
      return () => {
        for (let f = 0; f < r.length; f++) {
          const m = r[f];
          typeof m == "function" ? m() : oh(u[f], null);
        }
      };
  };
}
function lt(...u) {
  return p.useCallback(Gh(...u), u);
}
var $n = p.forwardRef((u, c) => {
  const { children: o, ...r } = u, f = p.Children.toArray(o), m = f.find(bb);
  if (m) {
    const y = m.props.children, h = f.map((S) => S === m ? p.Children.count(y) > 1 ? p.Children.only(null) : p.isValidElement(y) ? y.props.children : null : S);
    return /* @__PURE__ */ v.jsx(po, { ...r, ref: c, children: p.isValidElement(y) ? p.cloneElement(y, void 0, h) : null });
  }
  return /* @__PURE__ */ v.jsx(po, { ...r, ref: c, children: o });
});
$n.displayName = "Slot";
var po = p.forwardRef((u, c) => {
  const { children: o, ...r } = u;
  if (p.isValidElement(o)) {
    const f = xb(o);
    return p.cloneElement(o, {
      ...Sb(r, o.props),
      // @ts-ignore
      ref: c ? Gh(c, f) : f
    });
  }
  return p.Children.count(o) > 1 ? p.Children.only(null) : null;
});
po.displayName = "SlotClone";
var pb = ({ children: u }) => /* @__PURE__ */ v.jsx(v.Fragment, { children: u });
function bb(u) {
  return p.isValidElement(u) && u.type === pb;
}
function Sb(u, c) {
  const o = { ...c };
  for (const r in c) {
    const f = u[r], m = c[r];
    /^on[A-Z]/.test(r) ? f && m ? o[r] = (...h) => {
      m(...h), f(...h);
    } : f && (o[r] = f) : r === "style" ? o[r] = { ...f, ...m } : r === "className" && (o[r] = [f, m].filter(Boolean).join(" "));
  }
  return { ...u, ...o };
}
function xb(u) {
  var r, f;
  let c = (r = Object.getOwnPropertyDescriptor(u.props, "ref")) == null ? void 0 : r.get, o = c && "isReactWarning" in c && c.isReactWarning;
  return o ? u.ref : (c = (f = Object.getOwnPropertyDescriptor(u, "ref")) == null ? void 0 : f.get, o = c && "isReactWarning" in c && c.isReactWarning, o ? u.props.ref : u.props.ref || u.ref);
}
var Eb = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Ze = Eb.reduce((u, c) => {
  const o = p.forwardRef((r, f) => {
    const { asChild: m, ...y } = r, h = m ? $n : c;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ v.jsx(h, { ...y, ref: f });
  });
  return o.displayName = `Primitive.${c}`, { ...u, [c]: o };
}, {});
function Tb(u, c) {
  u && Yh.flushSync(() => u.dispatchEvent(c));
}
var Pa = globalThis != null && globalThis.document ? p.useLayoutEffect : () => {
};
function Ab(u, c) {
  return p.useReducer((o, r) => c[o][r] ?? o, u);
}
var dl = (u) => {
  const { present: c, children: o } = u, r = Nb(c), f = typeof o == "function" ? o({ present: r.isPresent }) : p.Children.only(o), m = lt(r.ref, Cb(f));
  return typeof o == "function" || r.isPresent ? p.cloneElement(f, { ref: m }) : null;
};
dl.displayName = "Presence";
function Nb(u) {
  const [c, o] = p.useState(), r = p.useRef({}), f = p.useRef(u), m = p.useRef("none"), y = u ? "mounted" : "unmounted", [h, S] = Ab(y, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return p.useEffect(() => {
    const g = Si(r.current);
    m.current = h === "mounted" ? g : "none";
  }, [h]), Pa(() => {
    const g = r.current, A = f.current;
    if (A !== u) {
      const z = m.current, D = Si(g);
      u ? S("MOUNT") : D === "none" || (g == null ? void 0 : g.display) === "none" ? S("UNMOUNT") : S(A && z !== D ? "ANIMATION_OUT" : "UNMOUNT"), f.current = u;
    }
  }, [u, S]), Pa(() => {
    if (c) {
      let g;
      const A = c.ownerDocument.defaultView ?? window, T = (D) => {
        const R = Si(r.current).includes(D.animationName);
        if (D.target === c && R && (S("ANIMATION_END"), !f.current)) {
          const q = c.style.animationFillMode;
          c.style.animationFillMode = "forwards", g = A.setTimeout(() => {
            c.style.animationFillMode === "forwards" && (c.style.animationFillMode = q);
          });
        }
      }, z = (D) => {
        D.target === c && (m.current = Si(r.current));
      };
      return c.addEventListener("animationstart", z), c.addEventListener("animationcancel", T), c.addEventListener("animationend", T), () => {
        A.clearTimeout(g), c.removeEventListener("animationstart", z), c.removeEventListener("animationcancel", T), c.removeEventListener("animationend", T);
      };
    } else
      S("ANIMATION_END");
  }, [c, S]), {
    isPresent: ["mounted", "unmountSuspended"].includes(h),
    ref: p.useCallback((g) => {
      g && (r.current = getComputedStyle(g)), o(g);
    }, [])
  };
}
function Si(u) {
  return (u == null ? void 0 : u.animationName) || "none";
}
function Cb(u) {
  var r, f;
  let c = (r = Object.getOwnPropertyDescriptor(u.props, "ref")) == null ? void 0 : r.get, o = c && "isReactWarning" in c && c.isReactWarning;
  return o ? u.ref : (c = (f = Object.getOwnPropertyDescriptor(u, "ref")) == null ? void 0 : f.get, o = c && "isReactWarning" in c && c.isReactWarning, o ? u.props.ref : u.props.ref || u.ref);
}
function _b(u, c) {
  const o = p.createContext(c), r = (m) => {
    const { children: y, ...h } = m, S = p.useMemo(() => h, Object.values(h));
    return /* @__PURE__ */ v.jsx(o.Provider, { value: S, children: y });
  };
  r.displayName = u + "Provider";
  function f(m) {
    const y = p.useContext(o);
    if (y) return y;
    if (c !== void 0) return c;
    throw new Error(`\`${m}\` must be used within \`${u}\``);
  }
  return [r, f];
}
function tu(u, c = []) {
  let o = [];
  function r(m, y) {
    const h = p.createContext(y), S = o.length;
    o = [...o, y];
    const g = (T) => {
      var Y;
      const { scope: z, children: D, ...H } = T, R = ((Y = z == null ? void 0 : z[u]) == null ? void 0 : Y[S]) || h, q = p.useMemo(() => H, Object.values(H));
      return /* @__PURE__ */ v.jsx(R.Provider, { value: q, children: D });
    };
    g.displayName = m + "Provider";
    function A(T, z) {
      var R;
      const D = ((R = z == null ? void 0 : z[u]) == null ? void 0 : R[S]) || h, H = p.useContext(D);
      if (H) return H;
      if (y !== void 0) return y;
      throw new Error(`\`${T}\` must be used within \`${m}\``);
    }
    return [g, A];
  }
  const f = () => {
    const m = o.map((y) => p.createContext(y));
    return function(h) {
      const S = (h == null ? void 0 : h[u]) || m;
      return p.useMemo(
        () => ({ [`__scope${u}`]: { ...h, [u]: S } }),
        [h, S]
      );
    };
  };
  return f.scopeName = u, [r, zb(f, ...c)];
}
function zb(...u) {
  const c = u[0];
  if (u.length === 1) return c;
  const o = () => {
    const r = u.map((f) => ({
      useScope: f(),
      scopeName: f.scopeName
    }));
    return function(m) {
      const y = r.reduce((h, { useScope: S, scopeName: g }) => {
        const T = S(m)[`__scope${g}`];
        return { ...h, ...T };
      }, {});
      return p.useMemo(() => ({ [`__scope${c.scopeName}`]: y }), [y]);
    };
  };
  return o.scopeName = c.scopeName, o;
}
function it(u) {
  const c = p.useRef(u);
  return p.useEffect(() => {
    c.current = u;
  }), p.useMemo(() => (...o) => {
    var r;
    return (r = c.current) == null ? void 0 : r.call(c, ...o);
  }, []);
}
var Mb = p.createContext(void 0);
function jo(u) {
  const c = p.useContext(Mb);
  return u || c || "ltr";
}
function Ob(u, [c, o]) {
  return Math.min(o, Math.max(c, u));
}
function Ue(u, c, { checkForDefaultPrevented: o = !0 } = {}) {
  return function(f) {
    if (u == null || u(f), o === !1 || !f.defaultPrevented)
      return c == null ? void 0 : c(f);
  };
}
function Rb(u, c) {
  return p.useReducer((o, r) => c[o][r] ?? o, u);
}
var Do = "ScrollArea", [Xh] = tu(Do), [jb, Ut] = Xh(Do), Vh = p.forwardRef(
  (u, c) => {
    const {
      __scopeScrollArea: o,
      type: r = "hover",
      dir: f,
      scrollHideDelay: m = 600,
      ...y
    } = u, [h, S] = p.useState(null), [g, A] = p.useState(null), [T, z] = p.useState(null), [D, H] = p.useState(null), [R, q] = p.useState(null), [Y, X] = p.useState(0), [k, W] = p.useState(0), [P, re] = p.useState(!1), [V, te] = p.useState(!1), ne = lt(c, (xe) => S(xe)), be = jo(f);
    return /* @__PURE__ */ v.jsx(
      jb,
      {
        scope: o,
        type: r,
        dir: be,
        scrollHideDelay: m,
        scrollArea: h,
        viewport: g,
        onViewportChange: A,
        content: T,
        onContentChange: z,
        scrollbarX: D,
        onScrollbarXChange: H,
        scrollbarXEnabled: P,
        onScrollbarXEnabledChange: re,
        scrollbarY: R,
        onScrollbarYChange: q,
        scrollbarYEnabled: V,
        onScrollbarYEnabledChange: te,
        onCornerWidthChange: X,
        onCornerHeightChange: W,
        children: /* @__PURE__ */ v.jsx(
          Ze.div,
          {
            dir: be,
            ...y,
            ref: ne,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": Y + "px",
              "--radix-scroll-area-corner-height": k + "px",
              ...u.style
            }
          }
        )
      }
    );
  }
);
Vh.displayName = Do;
var Qh = "ScrollAreaViewport", Zh = p.forwardRef(
  (u, c) => {
    const { __scopeScrollArea: o, children: r, nonce: f, ...m } = u, y = Ut(Qh, o), h = p.useRef(null), S = lt(c, h, y.onViewportChange);
    return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: f
        }
      ),
      /* @__PURE__ */ v.jsx(
        Ze.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...m,
          ref: S,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: y.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: y.scrollbarYEnabled ? "scroll" : "hidden",
            ...u.style
          },
          children: /* @__PURE__ */ v.jsx("div", { ref: y.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
Zh.displayName = Qh;
var Zt = "ScrollAreaScrollbar", wo = p.forwardRef(
  (u, c) => {
    const { forceMount: o, ...r } = u, f = Ut(Zt, u.__scopeScrollArea), { onScrollbarXEnabledChange: m, onScrollbarYEnabledChange: y } = f, h = u.orientation === "horizontal";
    return p.useEffect(() => (h ? m(!0) : y(!0), () => {
      h ? m(!1) : y(!1);
    }), [h, m, y]), f.type === "hover" ? /* @__PURE__ */ v.jsx(Db, { ...r, ref: c, forceMount: o }) : f.type === "scroll" ? /* @__PURE__ */ v.jsx(wb, { ...r, ref: c, forceMount: o }) : f.type === "auto" ? /* @__PURE__ */ v.jsx(Kh, { ...r, ref: c, forceMount: o }) : f.type === "always" ? /* @__PURE__ */ v.jsx(Uo, { ...r, ref: c }) : null;
  }
);
wo.displayName = Zt;
var Db = p.forwardRef((u, c) => {
  const { forceMount: o, ...r } = u, f = Ut(Zt, u.__scopeScrollArea), [m, y] = p.useState(!1);
  return p.useEffect(() => {
    const h = f.scrollArea;
    let S = 0;
    if (h) {
      const g = () => {
        window.clearTimeout(S), y(!0);
      }, A = () => {
        S = window.setTimeout(() => y(!1), f.scrollHideDelay);
      };
      return h.addEventListener("pointerenter", g), h.addEventListener("pointerleave", A), () => {
        window.clearTimeout(S), h.removeEventListener("pointerenter", g), h.removeEventListener("pointerleave", A);
      };
    }
  }, [f.scrollArea, f.scrollHideDelay]), /* @__PURE__ */ v.jsx(dl, { present: o || m, children: /* @__PURE__ */ v.jsx(
    Kh,
    {
      "data-state": m ? "visible" : "hidden",
      ...r,
      ref: c
    }
  ) });
}), wb = p.forwardRef((u, c) => {
  const { forceMount: o, ...r } = u, f = Ut(Zt, u.__scopeScrollArea), m = u.orientation === "horizontal", y = ji(() => S("SCROLL_END"), 100), [h, S] = Rb("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return p.useEffect(() => {
    if (h === "idle") {
      const g = window.setTimeout(() => S("HIDE"), f.scrollHideDelay);
      return () => window.clearTimeout(g);
    }
  }, [h, f.scrollHideDelay, S]), p.useEffect(() => {
    const g = f.viewport, A = m ? "scrollLeft" : "scrollTop";
    if (g) {
      let T = g[A];
      const z = () => {
        const D = g[A];
        T !== D && (S("SCROLL"), y()), T = D;
      };
      return g.addEventListener("scroll", z), () => g.removeEventListener("scroll", z);
    }
  }, [f.viewport, m, S, y]), /* @__PURE__ */ v.jsx(dl, { present: o || h !== "hidden", children: /* @__PURE__ */ v.jsx(
    Uo,
    {
      "data-state": h === "hidden" ? "hidden" : "visible",
      ...r,
      ref: c,
      onPointerEnter: Ue(u.onPointerEnter, () => S("POINTER_ENTER")),
      onPointerLeave: Ue(u.onPointerLeave, () => S("POINTER_LEAVE"))
    }
  ) });
}), Kh = p.forwardRef((u, c) => {
  const o = Ut(Zt, u.__scopeScrollArea), { forceMount: r, ...f } = u, [m, y] = p.useState(!1), h = u.orientation === "horizontal", S = ji(() => {
    if (o.viewport) {
      const g = o.viewport.offsetWidth < o.viewport.scrollWidth, A = o.viewport.offsetHeight < o.viewport.scrollHeight;
      y(h ? g : A);
    }
  }, 10);
  return In(o.viewport, S), In(o.content, S), /* @__PURE__ */ v.jsx(dl, { present: r || m, children: /* @__PURE__ */ v.jsx(
    Uo,
    {
      "data-state": m ? "visible" : "hidden",
      ...f,
      ref: c
    }
  ) });
}), Uo = p.forwardRef((u, c) => {
  const { orientation: o = "vertical", ...r } = u, f = Ut(Zt, u.__scopeScrollArea), m = p.useRef(null), y = p.useRef(0), [h, S] = p.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), g = $h(h.viewport, h.content), A = {
    ...r,
    sizes: h,
    onSizesChange: S,
    hasThumb: g > 0 && g < 1,
    onThumbChange: (z) => m.current = z,
    onThumbPointerUp: () => y.current = 0,
    onThumbPointerDown: (z) => y.current = z
  };
  function T(z, D) {
    return Yb(z, y.current, h, D);
  }
  return o === "horizontal" ? /* @__PURE__ */ v.jsx(
    Ub,
    {
      ...A,
      ref: c,
      onThumbPositionChange: () => {
        if (f.viewport && m.current) {
          const z = f.viewport.scrollLeft, D = sh(z, h, f.dir);
          m.current.style.transform = `translate3d(${D}px, 0, 0)`;
        }
      },
      onWheelScroll: (z) => {
        f.viewport && (f.viewport.scrollLeft = z);
      },
      onDragScroll: (z) => {
        f.viewport && (f.viewport.scrollLeft = T(z, f.dir));
      }
    }
  ) : o === "vertical" ? /* @__PURE__ */ v.jsx(
    Hb,
    {
      ...A,
      ref: c,
      onThumbPositionChange: () => {
        if (f.viewport && m.current) {
          const z = f.viewport.scrollTop, D = sh(z, h);
          m.current.style.transform = `translate3d(0, ${D}px, 0)`;
        }
      },
      onWheelScroll: (z) => {
        f.viewport && (f.viewport.scrollTop = z);
      },
      onDragScroll: (z) => {
        f.viewport && (f.viewport.scrollTop = T(z));
      }
    }
  ) : null;
}), Ub = p.forwardRef((u, c) => {
  const { sizes: o, onSizesChange: r, ...f } = u, m = Ut(Zt, u.__scopeScrollArea), [y, h] = p.useState(), S = p.useRef(null), g = lt(c, S, m.onScrollbarXChange);
  return p.useEffect(() => {
    S.current && h(getComputedStyle(S.current));
  }, [S]), /* @__PURE__ */ v.jsx(
    kh,
    {
      "data-orientation": "horizontal",
      ...f,
      ref: g,
      sizes: o,
      style: {
        bottom: 0,
        left: m.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: m.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Ri(o) + "px",
        ...u.style
      },
      onThumbPointerDown: (A) => u.onThumbPointerDown(A.x),
      onDragScroll: (A) => u.onDragScroll(A.x),
      onWheelScroll: (A, T) => {
        if (m.viewport) {
          const z = m.viewport.scrollLeft + A.deltaX;
          u.onWheelScroll(z), Ph(z, T) && A.preventDefault();
        }
      },
      onResize: () => {
        S.current && m.viewport && y && r({
          content: m.viewport.scrollWidth,
          viewport: m.viewport.offsetWidth,
          scrollbar: {
            size: S.current.clientWidth,
            paddingStart: zi(y.paddingLeft),
            paddingEnd: zi(y.paddingRight)
          }
        });
      }
    }
  );
}), Hb = p.forwardRef((u, c) => {
  const { sizes: o, onSizesChange: r, ...f } = u, m = Ut(Zt, u.__scopeScrollArea), [y, h] = p.useState(), S = p.useRef(null), g = lt(c, S, m.onScrollbarYChange);
  return p.useEffect(() => {
    S.current && h(getComputedStyle(S.current));
  }, [S]), /* @__PURE__ */ v.jsx(
    kh,
    {
      "data-orientation": "vertical",
      ...f,
      ref: g,
      sizes: o,
      style: {
        top: 0,
        right: m.dir === "ltr" ? 0 : void 0,
        left: m.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": Ri(o) + "px",
        ...u.style
      },
      onThumbPointerDown: (A) => u.onThumbPointerDown(A.y),
      onDragScroll: (A) => u.onDragScroll(A.y),
      onWheelScroll: (A, T) => {
        if (m.viewport) {
          const z = m.viewport.scrollTop + A.deltaY;
          u.onWheelScroll(z), Ph(z, T) && A.preventDefault();
        }
      },
      onResize: () => {
        S.current && m.viewport && y && r({
          content: m.viewport.scrollHeight,
          viewport: m.viewport.offsetHeight,
          scrollbar: {
            size: S.current.clientHeight,
            paddingStart: zi(y.paddingTop),
            paddingEnd: zi(y.paddingBottom)
          }
        });
      }
    }
  );
}), [Bb, Jh] = Xh(Zt), kh = p.forwardRef((u, c) => {
  const {
    __scopeScrollArea: o,
    sizes: r,
    hasThumb: f,
    onThumbChange: m,
    onThumbPointerUp: y,
    onThumbPointerDown: h,
    onThumbPositionChange: S,
    onDragScroll: g,
    onWheelScroll: A,
    onResize: T,
    ...z
  } = u, D = Ut(Zt, o), [H, R] = p.useState(null), q = lt(c, (ne) => R(ne)), Y = p.useRef(null), X = p.useRef(""), k = D.viewport, W = r.content - r.viewport, P = it(A), re = it(S), V = ji(T, 10);
  function te(ne) {
    if (Y.current) {
      const be = ne.clientX - Y.current.left, xe = ne.clientY - Y.current.top;
      g({ x: be, y: xe });
    }
  }
  return p.useEffect(() => {
    const ne = (be) => {
      const xe = be.target;
      (H == null ? void 0 : H.contains(xe)) && P(be, W);
    };
    return document.addEventListener("wheel", ne, { passive: !1 }), () => document.removeEventListener("wheel", ne, { passive: !1 });
  }, [k, H, W, P]), p.useEffect(re, [r, re]), In(H, V), In(D.content, V), /* @__PURE__ */ v.jsx(
    Bb,
    {
      scope: o,
      scrollbar: H,
      hasThumb: f,
      onThumbChange: it(m),
      onThumbPointerUp: it(y),
      onThumbPositionChange: re,
      onThumbPointerDown: it(h),
      children: /* @__PURE__ */ v.jsx(
        Ze.div,
        {
          ...z,
          ref: q,
          style: { position: "absolute", ...z.style },
          onPointerDown: Ue(u.onPointerDown, (ne) => {
            ne.button === 0 && (ne.target.setPointerCapture(ne.pointerId), Y.current = H.getBoundingClientRect(), X.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", D.viewport && (D.viewport.style.scrollBehavior = "auto"), te(ne));
          }),
          onPointerMove: Ue(u.onPointerMove, te),
          onPointerUp: Ue(u.onPointerUp, (ne) => {
            const be = ne.target;
            be.hasPointerCapture(ne.pointerId) && be.releasePointerCapture(ne.pointerId), document.body.style.webkitUserSelect = X.current, D.viewport && (D.viewport.style.scrollBehavior = ""), Y.current = null;
          })
        }
      )
    }
  );
}), _i = "ScrollAreaThumb", Wh = p.forwardRef(
  (u, c) => {
    const { forceMount: o, ...r } = u, f = Jh(_i, u.__scopeScrollArea);
    return /* @__PURE__ */ v.jsx(dl, { present: o || f.hasThumb, children: /* @__PURE__ */ v.jsx(Lb, { ref: c, ...r }) });
  }
), Lb = p.forwardRef(
  (u, c) => {
    const { __scopeScrollArea: o, style: r, ...f } = u, m = Ut(_i, o), y = Jh(_i, o), { onThumbPositionChange: h } = y, S = lt(
      c,
      (T) => y.onThumbChange(T)
    ), g = p.useRef(void 0), A = ji(() => {
      g.current && (g.current(), g.current = void 0);
    }, 100);
    return p.useEffect(() => {
      const T = m.viewport;
      if (T) {
        const z = () => {
          if (A(), !g.current) {
            const D = Gb(T, h);
            g.current = D, h();
          }
        };
        return h(), T.addEventListener("scroll", z), () => T.removeEventListener("scroll", z);
      }
    }, [m.viewport, A, h]), /* @__PURE__ */ v.jsx(
      Ze.div,
      {
        "data-state": y.hasThumb ? "visible" : "hidden",
        ...f,
        ref: S,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: Ue(u.onPointerDownCapture, (T) => {
          const D = T.target.getBoundingClientRect(), H = T.clientX - D.left, R = T.clientY - D.top;
          y.onThumbPointerDown({ x: H, y: R });
        }),
        onPointerUp: Ue(u.onPointerUp, y.onThumbPointerUp)
      }
    );
  }
);
Wh.displayName = _i;
var Ho = "ScrollAreaCorner", Fh = p.forwardRef(
  (u, c) => {
    const o = Ut(Ho, u.__scopeScrollArea), r = !!(o.scrollbarX && o.scrollbarY);
    return o.type !== "scroll" && r ? /* @__PURE__ */ v.jsx(qb, { ...u, ref: c }) : null;
  }
);
Fh.displayName = Ho;
var qb = p.forwardRef((u, c) => {
  const { __scopeScrollArea: o, ...r } = u, f = Ut(Ho, o), [m, y] = p.useState(0), [h, S] = p.useState(0), g = !!(m && h);
  return In(f.scrollbarX, () => {
    var T;
    const A = ((T = f.scrollbarX) == null ? void 0 : T.offsetHeight) || 0;
    f.onCornerHeightChange(A), S(A);
  }), In(f.scrollbarY, () => {
    var T;
    const A = ((T = f.scrollbarY) == null ? void 0 : T.offsetWidth) || 0;
    f.onCornerWidthChange(A), y(A);
  }), g ? /* @__PURE__ */ v.jsx(
    Ze.div,
    {
      ...r,
      ref: c,
      style: {
        width: m,
        height: h,
        position: "absolute",
        right: f.dir === "ltr" ? 0 : void 0,
        left: f.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...u.style
      }
    }
  ) : null;
});
function zi(u) {
  return u ? parseInt(u, 10) : 0;
}
function $h(u, c) {
  const o = u / c;
  return isNaN(o) ? 0 : o;
}
function Ri(u) {
  const c = $h(u.viewport, u.content), o = u.scrollbar.paddingStart + u.scrollbar.paddingEnd, r = (u.scrollbar.size - o) * c;
  return Math.max(r, 18);
}
function Yb(u, c, o, r = "ltr") {
  const f = Ri(o), m = f / 2, y = c || m, h = f - y, S = o.scrollbar.paddingStart + y, g = o.scrollbar.size - o.scrollbar.paddingEnd - h, A = o.content - o.viewport, T = r === "ltr" ? [0, A] : [A * -1, 0];
  return Ih([S, g], T)(u);
}
function sh(u, c, o = "ltr") {
  const r = Ri(c), f = c.scrollbar.paddingStart + c.scrollbar.paddingEnd, m = c.scrollbar.size - f, y = c.content - c.viewport, h = m - r, S = o === "ltr" ? [0, y] : [y * -1, 0], g = Ob(u, S);
  return Ih([0, y], [0, h])(g);
}
function Ih(u, c) {
  return (o) => {
    if (u[0] === u[1] || c[0] === c[1]) return c[0];
    const r = (c[1] - c[0]) / (u[1] - u[0]);
    return c[0] + r * (o - u[0]);
  };
}
function Ph(u, c) {
  return u > 0 && u < c;
}
var Gb = (u, c = () => {
}) => {
  let o = { left: u.scrollLeft, top: u.scrollTop }, r = 0;
  return (function f() {
    const m = { left: u.scrollLeft, top: u.scrollTop }, y = o.left !== m.left, h = o.top !== m.top;
    (y || h) && c(), o = m, r = window.requestAnimationFrame(f);
  })(), () => window.cancelAnimationFrame(r);
};
function ji(u, c) {
  const o = it(u), r = p.useRef(0);
  return p.useEffect(() => () => window.clearTimeout(r.current), []), p.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(o, c);
  }, [o, c]);
}
function In(u, c) {
  const o = it(c);
  Pa(() => {
    let r = 0;
    if (u) {
      const f = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(o);
      });
      return f.observe(u), () => {
        window.cancelAnimationFrame(r), f.unobserve(u);
      };
    }
  }, [u, o]);
}
var ev = Vh, Xb = Zh, Vb = Fh;
const eu = p.forwardRef(({ className: u, children: c, ...o }, r) => /* @__PURE__ */ v.jsxs(
  ev,
  {
    ref: r,
    className: ge("relative overflow-hidden", u),
    ...o,
    children: [
      /* @__PURE__ */ v.jsx(Xb, { className: "h-full w-full rounded-[inherit]", children: c }),
      /* @__PURE__ */ v.jsx(tv, {}),
      /* @__PURE__ */ v.jsx(Vb, {})
    ]
  }
));
eu.displayName = ev.displayName;
const tv = p.forwardRef(({ className: u, orientation: c = "vertical", ...o }, r) => /* @__PURE__ */ v.jsx(
  wo,
  {
    ref: r,
    orientation: c,
    className: ge(
      "flex touch-none select-none transition-colors",
      c === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      c === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      u
    ),
    ...o,
    children: /* @__PURE__ */ v.jsx(Wh, { className: "relative flex-1 rounded-full bg-border" })
  }
));
tv.displayName = wo.displayName;
function Qb({ className: u }) {
  return /* @__PURE__ */ v.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", fill: "none", className: u, children: [
    /* @__PURE__ */ v.jsx("path", { d: "M16 2C16 2 10 8 10 14c0 2.5 1.2 4.7 3 6.2C12.4 18.5 12 16.8 12 15c0-3 4-7 4-7s4 4 4 7c0 1.8-.4 3.5-1 5.2 1.8-1.5 3-3.7 3-6.2C22 8 16 2 16 2z", fill: "url(#fsv-grad)" }),
    /* @__PURE__ */ v.jsx("text", { x: "7", y: "27", fontFamily: "monospace", fontWeight: "700", fontSize: "11", fill: "#f5f5f5", opacity: "0.95", children: "{" }),
    /* @__PURE__ */ v.jsx("text", { x: "21", y: "27", fontFamily: "monospace", fontWeight: "700", fontSize: "11", fill: "#f5f5f5", opacity: "0.95", children: "}" }),
    /* @__PURE__ */ v.jsx("defs", { children: /* @__PURE__ */ v.jsxs("linearGradient", { id: "fsv-grad", x1: "16", y1: "2", x2: "16", y2: "22", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ v.jsx("stop", { offset: "0%", stopColor: "#f59e0b" }),
      /* @__PURE__ */ v.jsx("stop", { offset: "100%", stopColor: "#ef4444" })
    ] }) })
  ] });
}
function lv(u) {
  return u.reduce((c, o) => c + 1 + (o.subcollections ? lv(o.subcollections) : 0), 0);
}
function nv(u, c) {
  const o = [];
  for (const r of u)
    (r.name.toLowerCase().includes(c) || r.description.toLowerCase().includes(c) || r.path.toLowerCase().includes(c)) && o.push(r), r.subcollections && o.push(...nv(r.subcollections, c));
  return o;
}
function bo(u) {
  const c = [];
  for (const o of u)
    c.push(o.id), o.subcollections && c.push(...bo(o.subcollections));
  return c;
}
function Zb({
  collections: u,
  selectedId: c,
  onSelect: o,
  title: r
}) {
  const [f, m] = p.useState(""), [y, h] = p.useState(() => {
    const D = {};
    for (const H of bo(u))
      D[H] = !0;
    return D;
  });
  p.useEffect(() => {
    const D = {};
    for (const H of bo(u))
      D[H] = y[H] !== void 0 ? y[H] : !0;
    h(D);
  }, [u]);
  const S = p.useCallback((D) => {
    h((H) => ({ ...H, [D]: !H[D] }));
  }, []), g = (D) => D ? D >= 1e6 ? `${(D / 1e6).toFixed(1)}M` : D >= 1e3 ? `${(D / 1e3).toFixed(1)}K` : D.toString() : null, A = lv(u), T = f.trim().length > 0, z = T ? nv(u, f.toLowerCase()) : [];
  return /* @__PURE__ */ v.jsxs("aside", { className: "flex h-full w-80 shrink-0 flex-col border-r border-border bg-card", children: [
    /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-3 border-b border-border px-4 py-4", children: [
      /* @__PURE__ */ v.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15", children: /* @__PURE__ */ v.jsx(Qb, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ v.jsx("span", { className: "text-sm font-semibold text-foreground tracking-tight", children: r || "FireSchema" }),
        /* @__PURE__ */ v.jsx("span", { className: "text-[11px] text-muted-foreground", children: "Firestore Schema Viewer" })
      ] })
    ] }),
    /* @__PURE__ */ v.jsx("div", { className: "px-3 py-3", children: /* @__PURE__ */ v.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ v.jsx(ih, { className: "absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" }),
      /* @__PURE__ */ v.jsx(
        Lh,
        {
          placeholder: "Search collections & paths...",
          value: f,
          onChange: (D) => m(D.target.value),
          className: "h-8 bg-secondary/50 pl-8 text-xs placeholder:text-muted-foreground"
        }
      )
    ] }) }),
    /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-between px-4 py-1.5", children: [
      /* @__PURE__ */ v.jsx("span", { className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground", children: "Firestore Schema" }),
      /* @__PURE__ */ v.jsxs(
        qh,
        {
          variant: "secondary",
          className: "h-5 px-1.5 text-[10px] font-medium",
          children: [
            A,
            " ",
            A === 1 ? "schema" : "schemas"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ v.jsx(eu, { className: "flex-1 px-2", children: /* @__PURE__ */ v.jsx("div", { className: "flex flex-col gap-0.5 py-1 pb-4", children: T ? z.length > 0 ? z.map((D) => /* @__PURE__ */ v.jsx(
      Kb,
      {
        collection: D,
        isSelected: c === D.id,
        onSelect: o
      },
      D.id
    )) : /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col items-center gap-2 py-8 text-center", children: [
      /* @__PURE__ */ v.jsx(ih, { className: "h-7 w-7 text-muted-foreground/30" }),
      /* @__PURE__ */ v.jsx("p", { className: "text-xs text-muted-foreground", children: "No results found" })
    ] }) : u.map((D) => /* @__PURE__ */ v.jsx(
      av,
      {
        collection: D,
        selectedId: c,
        expanded: y,
        onSelect: o,
        onToggle: S,
        formatCount: g,
        depth: 0
      },
      D.id
    )) }) })
  ] });
}
function av({
  collection: u,
  selectedId: c,
  expanded: o,
  onSelect: r,
  onToggle: f,
  formatCount: m,
  depth: y
}) {
  const h = u.subcollections && u.subcollections.length > 0, S = !!o[u.id], g = c === u.id, A = [
    "border-primary/30",
    "border-cyan-400/30",
    "border-emerald-400/30",
    "border-amber-400/30"
  ], T = A[y % A.length], z = [
    "text-primary",
    "text-cyan-400",
    "text-emerald-400",
    "text-amber-400"
  ], D = z[y % z.length];
  return /* @__PURE__ */ v.jsxs("div", { children: [
    /* @__PURE__ */ v.jsxs(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: () => r(u),
        onKeyDown: (H) => {
          (H.key === "Enter" || H.key === " ") && r(u);
        },
        className: ge(
          "group flex w-full items-center gap-1.5 rounded-md px-2 py-2 text-left text-sm transition-all cursor-pointer",
          g ? "bg-primary/10 text-foreground" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
        ),
        style: { paddingLeft: `${y * 16 + 8}px` },
        children: [
          h ? /* @__PURE__ */ v.jsx(
            "button",
            {
              type: "button",
              onClick: (H) => {
                H.stopPropagation(), f(u.id);
              },
              className: "flex h-5 w-5 shrink-0 items-center justify-center rounded transition-colors hover:bg-secondary",
              children: S ? /* @__PURE__ */ v.jsx(Uh, { className: ge("h-3.5 w-3.5", g ? D : "") }) : /* @__PURE__ */ v.jsx(Oo, { className: "h-3.5 w-3.5" })
            }
          ) : /* @__PURE__ */ v.jsx("span", { className: "w-5 shrink-0" }),
          h ? S ? /* @__PURE__ */ v.jsx(Vp, { className: ge("h-4 w-4 shrink-0", g ? D : "text-muted-foreground/70") }) : /* @__PURE__ */ v.jsx(Zp, { className: ge("h-4 w-4 shrink-0", g ? D : "text-muted-foreground/70") }) : /* @__PURE__ */ v.jsx(ea, { className: ge("h-4 w-4 shrink-0", g ? D : "text-muted-foreground/70") }),
          /* @__PURE__ */ v.jsx("span", { className: ge("flex-1 truncate font-mono text-xs", g && "font-semibold"), children: u.name }),
          /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1.5", children: [
            h && /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-0.5 opacity-60", children: [
              /* @__PURE__ */ v.jsx(Hh, { className: "h-3 w-3" }),
              /* @__PURE__ */ v.jsx("span", { className: "text-[10px]", children: u.subcollections.length })
            ] }),
            u.documentCount && /* @__PURE__ */ v.jsx("span", { className: "text-[10px] tabular-nums text-muted-foreground/70", children: m(u.documentCount) })
          ] })
        ]
      }
    ),
    h && S && /* @__PURE__ */ v.jsx("div", { className: ge("ml-4 border-l-2 pl-0", T), children: u.subcollections.map((H) => /* @__PURE__ */ v.jsx(
      av,
      {
        collection: H,
        selectedId: c,
        expanded: o,
        onSelect: r,
        onToggle: f,
        formatCount: m,
        depth: y + 1
      },
      H.id
    )) })
  ] });
}
function Kb({
  collection: u,
  isSelected: c,
  onSelect: o
}) {
  return /* @__PURE__ */ v.jsxs(
    "button",
    {
      type: "button",
      onClick: () => o(u),
      className: ge(
        "flex w-full flex-col gap-1 rounded-md px-3 py-2.5 text-left transition-all",
        c ? "bg-primary/10 text-foreground" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
      ),
      children: [
        /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ v.jsx(ea, { className: ge("h-3.5 w-3.5 shrink-0", c ? "text-primary" : "") }),
          /* @__PURE__ */ v.jsx("span", { className: "font-mono text-xs font-semibold", children: u.name })
        ] }),
        /* @__PURE__ */ v.jsx("span", { className: "ml-5.5 font-mono text-[10px] text-muted-foreground/70 truncate", children: u.path })
      ]
    }
  );
}
const Jb = {
  string: "text-emerald-400",
  number: "text-blue-400",
  integer: "text-blue-400",
  boolean: "text-amber-400",
  object: "text-orange-400",
  array: "text-cyan-400",
  null: "text-red-400"
};
function kb(u) {
  const c = u + "CollectionProvider", [o, r] = tu(c), [f, m] = o(
    c,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), y = (D) => {
    const { scope: H, children: R } = D, q = fl.useRef(null), Y = fl.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ v.jsx(f, { scope: H, itemMap: Y, collectionRef: q, children: R });
  };
  y.displayName = c;
  const h = u + "CollectionSlot", S = fl.forwardRef(
    (D, H) => {
      const { scope: R, children: q } = D, Y = m(h, R), X = lt(H, Y.collectionRef);
      return /* @__PURE__ */ v.jsx($n, { ref: X, children: q });
    }
  );
  S.displayName = h;
  const g = u + "CollectionItemSlot", A = "data-radix-collection-item", T = fl.forwardRef(
    (D, H) => {
      const { scope: R, children: q, ...Y } = D, X = fl.useRef(null), k = lt(H, X), W = m(g, R);
      return fl.useEffect(() => (W.itemMap.set(X, { ref: X, ...Y }), () => void W.itemMap.delete(X))), /* @__PURE__ */ v.jsx($n, { [A]: "", ref: k, children: q });
    }
  );
  T.displayName = g;
  function z(D) {
    const H = m(u + "CollectionConsumer", D);
    return fl.useCallback(() => {
      const q = H.collectionRef.current;
      if (!q) return [];
      const Y = Array.from(q.querySelectorAll(`[${A}]`));
      return Array.from(H.itemMap.values()).sort(
        (W, P) => Y.indexOf(W.ref.current) - Y.indexOf(P.ref.current)
      );
    }, [H.collectionRef, H.itemMap]);
  }
  return [
    { Provider: y, Slot: S, ItemSlot: T },
    z,
    r
  ];
}
var Wb = Uy.useId || (() => {
}), Fb = 0;
function Ia(u) {
  const [c, o] = p.useState(Wb());
  return Pa(() => {
    o((r) => r ?? String(Fb++));
  }, [u]), c ? `radix-${c}` : "";
}
function Bo({
  prop: u,
  defaultProp: c,
  onChange: o = () => {
  }
}) {
  const [r, f] = $b({ defaultProp: c, onChange: o }), m = u !== void 0, y = m ? u : r, h = it(o), S = p.useCallback(
    (g) => {
      if (m) {
        const T = typeof g == "function" ? g(u) : g;
        T !== u && h(T);
      } else
        f(g);
    },
    [m, u, f, h]
  );
  return [y, S];
}
function $b({
  defaultProp: u,
  onChange: c
}) {
  const o = p.useState(u), [r] = o, f = p.useRef(r), m = it(c);
  return p.useEffect(() => {
    f.current !== r && (m(r), f.current = r);
  }, [r, f, m]), o;
}
var io = "rovingFocusGroup.onEntryFocus", Ib = { bubbles: !1, cancelable: !0 }, Di = "RovingFocusGroup", [So, uv, Pb] = kb(Di), [e1, iv] = tu(
  Di,
  [Pb]
), [t1, l1] = e1(Di), cv = p.forwardRef(
  (u, c) => /* @__PURE__ */ v.jsx(So.Provider, { scope: u.__scopeRovingFocusGroup, children: /* @__PURE__ */ v.jsx(So.Slot, { scope: u.__scopeRovingFocusGroup, children: /* @__PURE__ */ v.jsx(n1, { ...u, ref: c }) }) })
);
cv.displayName = Di;
var n1 = p.forwardRef((u, c) => {
  const {
    __scopeRovingFocusGroup: o,
    orientation: r,
    loop: f = !1,
    dir: m,
    currentTabStopId: y,
    defaultCurrentTabStopId: h,
    onCurrentTabStopIdChange: S,
    onEntryFocus: g,
    preventScrollOnEntryFocus: A = !1,
    ...T
  } = u, z = p.useRef(null), D = lt(c, z), H = jo(m), [R = null, q] = Bo({
    prop: y,
    defaultProp: h,
    onChange: S
  }), [Y, X] = p.useState(!1), k = it(g), W = uv(o), P = p.useRef(!1), [re, V] = p.useState(0);
  return p.useEffect(() => {
    const te = z.current;
    if (te)
      return te.addEventListener(io, k), () => te.removeEventListener(io, k);
  }, [k]), /* @__PURE__ */ v.jsx(
    t1,
    {
      scope: o,
      orientation: r,
      dir: H,
      loop: f,
      currentTabStopId: R,
      onItemFocus: p.useCallback(
        (te) => q(te),
        [q]
      ),
      onItemShiftTab: p.useCallback(() => X(!0), []),
      onFocusableItemAdd: p.useCallback(
        () => V((te) => te + 1),
        []
      ),
      onFocusableItemRemove: p.useCallback(
        () => V((te) => te - 1),
        []
      ),
      children: /* @__PURE__ */ v.jsx(
        Ze.div,
        {
          tabIndex: Y || re === 0 ? -1 : 0,
          "data-orientation": r,
          ...T,
          ref: D,
          style: { outline: "none", ...u.style },
          onMouseDown: Ue(u.onMouseDown, () => {
            P.current = !0;
          }),
          onFocus: Ue(u.onFocus, (te) => {
            const ne = !P.current;
            if (te.target === te.currentTarget && ne && !Y) {
              const be = new CustomEvent(io, Ib);
              if (te.currentTarget.dispatchEvent(be), !be.defaultPrevented) {
                const xe = W().filter((j) => j.focusable), ee = xe.find((j) => j.active), At = xe.find((j) => j.id === R), et = [ee, At, ...xe].filter(
                  Boolean
                ).map((j) => j.ref.current);
                sv(et, A);
              }
            }
            P.current = !1;
          }),
          onBlur: Ue(u.onBlur, () => X(!1))
        }
      )
    }
  );
}), rv = "RovingFocusGroupItem", ov = p.forwardRef(
  (u, c) => {
    const {
      __scopeRovingFocusGroup: o,
      focusable: r = !0,
      active: f = !1,
      tabStopId: m,
      ...y
    } = u, h = Ia(), S = m || h, g = l1(rv, o), A = g.currentTabStopId === S, T = uv(o), { onFocusableItemAdd: z, onFocusableItemRemove: D } = g;
    return p.useEffect(() => {
      if (r)
        return z(), () => D();
    }, [r, z, D]), /* @__PURE__ */ v.jsx(
      So.ItemSlot,
      {
        scope: o,
        id: S,
        focusable: r,
        active: f,
        children: /* @__PURE__ */ v.jsx(
          Ze.span,
          {
            tabIndex: A ? 0 : -1,
            "data-orientation": g.orientation,
            ...y,
            ref: c,
            onMouseDown: Ue(u.onMouseDown, (H) => {
              r ? g.onItemFocus(S) : H.preventDefault();
            }),
            onFocus: Ue(u.onFocus, () => g.onItemFocus(S)),
            onKeyDown: Ue(u.onKeyDown, (H) => {
              if (H.key === "Tab" && H.shiftKey) {
                g.onItemShiftTab();
                return;
              }
              if (H.target !== H.currentTarget) return;
              const R = i1(H, g.orientation, g.dir);
              if (R !== void 0) {
                if (H.metaKey || H.ctrlKey || H.altKey || H.shiftKey) return;
                H.preventDefault();
                let Y = T().filter((X) => X.focusable).map((X) => X.ref.current);
                if (R === "last") Y.reverse();
                else if (R === "prev" || R === "next") {
                  R === "prev" && Y.reverse();
                  const X = Y.indexOf(H.currentTarget);
                  Y = g.loop ? c1(Y, X + 1) : Y.slice(X + 1);
                }
                setTimeout(() => sv(Y));
              }
            })
          }
        )
      }
    );
  }
);
ov.displayName = rv;
var a1 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function u1(u, c) {
  return c !== "rtl" ? u : u === "ArrowLeft" ? "ArrowRight" : u === "ArrowRight" ? "ArrowLeft" : u;
}
function i1(u, c, o) {
  const r = u1(u.key, o);
  if (!(c === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(c === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return a1[r];
}
function sv(u, c = !1) {
  const o = document.activeElement;
  for (const r of u)
    if (r === o || (r.focus({ preventScroll: c }), document.activeElement !== o)) return;
}
function c1(u, c) {
  return u.map((o, r) => u[(c + r) % u.length]);
}
var r1 = cv, o1 = ov, Lo = "Tabs", [s1] = tu(Lo, [
  iv
]), fv = iv(), [f1, qo] = s1(Lo), dv = p.forwardRef(
  (u, c) => {
    const {
      __scopeTabs: o,
      value: r,
      onValueChange: f,
      defaultValue: m,
      orientation: y = "horizontal",
      dir: h,
      activationMode: S = "automatic",
      ...g
    } = u, A = jo(h), [T, z] = Bo({
      prop: r,
      onChange: f,
      defaultProp: m
    });
    return /* @__PURE__ */ v.jsx(
      f1,
      {
        scope: o,
        baseId: Ia(),
        value: T,
        onValueChange: z,
        orientation: y,
        dir: A,
        activationMode: S,
        children: /* @__PURE__ */ v.jsx(
          Ze.div,
          {
            dir: A,
            "data-orientation": y,
            ...g,
            ref: c
          }
        )
      }
    );
  }
);
dv.displayName = Lo;
var mv = "TabsList", hv = p.forwardRef(
  (u, c) => {
    const { __scopeTabs: o, loop: r = !0, ...f } = u, m = qo(mv, o), y = fv(o);
    return /* @__PURE__ */ v.jsx(
      r1,
      {
        asChild: !0,
        ...y,
        orientation: m.orientation,
        dir: m.dir,
        loop: r,
        children: /* @__PURE__ */ v.jsx(
          Ze.div,
          {
            role: "tablist",
            "aria-orientation": m.orientation,
            ...f,
            ref: c
          }
        )
      }
    );
  }
);
hv.displayName = mv;
var vv = "TabsTrigger", gv = p.forwardRef(
  (u, c) => {
    const { __scopeTabs: o, value: r, disabled: f = !1, ...m } = u, y = qo(vv, o), h = fv(o), S = bv(y.baseId, r), g = Sv(y.baseId, r), A = r === y.value;
    return /* @__PURE__ */ v.jsx(
      o1,
      {
        asChild: !0,
        ...h,
        focusable: !f,
        active: A,
        children: /* @__PURE__ */ v.jsx(
          Ze.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": A,
            "aria-controls": g,
            "data-state": A ? "active" : "inactive",
            "data-disabled": f ? "" : void 0,
            disabled: f,
            id: S,
            ...m,
            ref: c,
            onMouseDown: Ue(u.onMouseDown, (T) => {
              !f && T.button === 0 && T.ctrlKey === !1 ? y.onValueChange(r) : T.preventDefault();
            }),
            onKeyDown: Ue(u.onKeyDown, (T) => {
              [" ", "Enter"].includes(T.key) && y.onValueChange(r);
            }),
            onFocus: Ue(u.onFocus, () => {
              const T = y.activationMode !== "manual";
              !A && !f && T && y.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
gv.displayName = vv;
var yv = "TabsContent", pv = p.forwardRef(
  (u, c) => {
    const { __scopeTabs: o, value: r, forceMount: f, children: m, ...y } = u, h = qo(yv, o), S = bv(h.baseId, r), g = Sv(h.baseId, r), A = r === h.value, T = p.useRef(A);
    return p.useEffect(() => {
      const z = requestAnimationFrame(() => T.current = !1);
      return () => cancelAnimationFrame(z);
    }, []), /* @__PURE__ */ v.jsx(dl, { present: f || A, children: ({ present: z }) => /* @__PURE__ */ v.jsx(
      Ze.div,
      {
        "data-state": A ? "active" : "inactive",
        "data-orientation": h.orientation,
        role: "tabpanel",
        "aria-labelledby": S,
        hidden: !z,
        id: g,
        tabIndex: 0,
        ...y,
        ref: c,
        style: {
          ...u.style,
          animationDuration: T.current ? "0s" : void 0
        },
        children: z && m
      }
    ) });
  }
);
pv.displayName = yv;
function bv(u, c) {
  return `${u}-trigger-${c}`;
}
function Sv(u, c) {
  return `${u}-content-${c}`;
}
var d1 = dv, xv = hv, Ev = gv, Tv = pv;
const m1 = d1, Av = p.forwardRef(({ className: u, ...c }, o) => /* @__PURE__ */ v.jsx(
  xv,
  {
    ref: o,
    className: ge(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      u
    ),
    ...c
  }
));
Av.displayName = xv.displayName;
const xo = p.forwardRef(({ className: u, ...c }, o) => /* @__PURE__ */ v.jsx(
  Ev,
  {
    ref: o,
    className: ge(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      u
    ),
    ...c
  }
));
xo.displayName = Ev.displayName;
const Eo = p.forwardRef(({ className: u, ...c }, o) => /* @__PURE__ */ v.jsx(
  Tv,
  {
    ref: o,
    className: ge(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      u
    ),
    ...c
  }
));
Eo.displayName = Tv.displayName;
function h1(u, c = globalThis == null ? void 0 : globalThis.document) {
  const o = it(u);
  p.useEffect(() => {
    const r = (f) => {
      f.key === "Escape" && o(f);
    };
    return c.addEventListener("keydown", r, { capture: !0 }), () => c.removeEventListener("keydown", r, { capture: !0 });
  }, [o, c]);
}
var v1 = "DismissableLayer", To = "dismissableLayer.update", g1 = "dismissableLayer.pointerDownOutside", y1 = "dismissableLayer.focusOutside", fh, Nv = p.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Cv = p.forwardRef(
  (u, c) => {
    const {
      disableOutsidePointerEvents: o = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: f,
      onFocusOutside: m,
      onInteractOutside: y,
      onDismiss: h,
      ...S
    } = u, g = p.useContext(Nv), [A, T] = p.useState(null), z = (A == null ? void 0 : A.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, D] = p.useState({}), H = lt(c, (V) => T(V)), R = Array.from(g.layers), [q] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1), Y = R.indexOf(q), X = A ? R.indexOf(A) : -1, k = g.layersWithOutsidePointerEventsDisabled.size > 0, W = X >= Y, P = S1((V) => {
      const te = V.target, ne = [...g.branches].some((be) => be.contains(te));
      !W || ne || (f == null || f(V), y == null || y(V), V.defaultPrevented || h == null || h());
    }, z), re = x1((V) => {
      const te = V.target;
      [...g.branches].some((be) => be.contains(te)) || (m == null || m(V), y == null || y(V), V.defaultPrevented || h == null || h());
    }, z);
    return h1((V) => {
      X === g.layers.size - 1 && (r == null || r(V), !V.defaultPrevented && h && (V.preventDefault(), h()));
    }, z), p.useEffect(() => {
      if (A)
        return o && (g.layersWithOutsidePointerEventsDisabled.size === 0 && (fh = z.body.style.pointerEvents, z.body.style.pointerEvents = "none"), g.layersWithOutsidePointerEventsDisabled.add(A)), g.layers.add(A), dh(), () => {
          o && g.layersWithOutsidePointerEventsDisabled.size === 1 && (z.body.style.pointerEvents = fh);
        };
    }, [A, z, o, g]), p.useEffect(() => () => {
      A && (g.layers.delete(A), g.layersWithOutsidePointerEventsDisabled.delete(A), dh());
    }, [A, g]), p.useEffect(() => {
      const V = () => D({});
      return document.addEventListener(To, V), () => document.removeEventListener(To, V);
    }, []), /* @__PURE__ */ v.jsx(
      Ze.div,
      {
        ...S,
        ref: H,
        style: {
          pointerEvents: k ? W ? "auto" : "none" : void 0,
          ...u.style
        },
        onFocusCapture: Ue(u.onFocusCapture, re.onFocusCapture),
        onBlurCapture: Ue(u.onBlurCapture, re.onBlurCapture),
        onPointerDownCapture: Ue(
          u.onPointerDownCapture,
          P.onPointerDownCapture
        )
      }
    );
  }
);
Cv.displayName = v1;
var p1 = "DismissableLayerBranch", b1 = p.forwardRef((u, c) => {
  const o = p.useContext(Nv), r = p.useRef(null), f = lt(c, r);
  return p.useEffect(() => {
    const m = r.current;
    if (m)
      return o.branches.add(m), () => {
        o.branches.delete(m);
      };
  }, [o.branches]), /* @__PURE__ */ v.jsx(Ze.div, { ...u, ref: f });
});
b1.displayName = p1;
function S1(u, c = globalThis == null ? void 0 : globalThis.document) {
  const o = it(u), r = p.useRef(!1), f = p.useRef(() => {
  });
  return p.useEffect(() => {
    const m = (h) => {
      if (h.target && !r.current) {
        let S = function() {
          _v(
            g1,
            o,
            g,
            { discrete: !0 }
          );
        };
        const g = { originalEvent: h };
        h.pointerType === "touch" ? (c.removeEventListener("click", f.current), f.current = S, c.addEventListener("click", f.current, { once: !0 })) : S();
      } else
        c.removeEventListener("click", f.current);
      r.current = !1;
    }, y = window.setTimeout(() => {
      c.addEventListener("pointerdown", m);
    }, 0);
    return () => {
      window.clearTimeout(y), c.removeEventListener("pointerdown", m), c.removeEventListener("click", f.current);
    };
  }, [c, o]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function x1(u, c = globalThis == null ? void 0 : globalThis.document) {
  const o = it(u), r = p.useRef(!1);
  return p.useEffect(() => {
    const f = (m) => {
      m.target && !r.current && _v(y1, o, { originalEvent: m }, {
        discrete: !1
      });
    };
    return c.addEventListener("focusin", f), () => c.removeEventListener("focusin", f);
  }, [c, o]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function dh() {
  const u = new CustomEvent(To);
  document.dispatchEvent(u);
}
function _v(u, c, o, { discrete: r }) {
  const f = o.originalEvent.target, m = new CustomEvent(u, { bubbles: !1, cancelable: !0, detail: o });
  c && f.addEventListener(u, c, { once: !0 }), r ? Tb(f, m) : f.dispatchEvent(m);
}
var co = "focusScope.autoFocusOnMount", ro = "focusScope.autoFocusOnUnmount", mh = { bubbles: !1, cancelable: !0 }, E1 = "FocusScope", zv = p.forwardRef((u, c) => {
  const {
    loop: o = !1,
    trapped: r = !1,
    onMountAutoFocus: f,
    onUnmountAutoFocus: m,
    ...y
  } = u, [h, S] = p.useState(null), g = it(f), A = it(m), T = p.useRef(null), z = lt(c, (R) => S(R)), D = p.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  p.useEffect(() => {
    if (r) {
      let R = function(k) {
        if (D.paused || !h) return;
        const W = k.target;
        h.contains(W) ? T.current = W : Yl(T.current, { select: !0 });
      }, q = function(k) {
        if (D.paused || !h) return;
        const W = k.relatedTarget;
        W !== null && (h.contains(W) || Yl(T.current, { select: !0 }));
      }, Y = function(k) {
        if (document.activeElement === document.body)
          for (const P of k)
            P.removedNodes.length > 0 && Yl(h);
      };
      document.addEventListener("focusin", R), document.addEventListener("focusout", q);
      const X = new MutationObserver(Y);
      return h && X.observe(h, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", R), document.removeEventListener("focusout", q), X.disconnect();
      };
    }
  }, [r, h, D.paused]), p.useEffect(() => {
    if (h) {
      vh.add(D);
      const R = document.activeElement;
      if (!h.contains(R)) {
        const Y = new CustomEvent(co, mh);
        h.addEventListener(co, g), h.dispatchEvent(Y), Y.defaultPrevented || (T1(z1(Mv(h)), { select: !0 }), document.activeElement === R && Yl(h));
      }
      return () => {
        h.removeEventListener(co, g), setTimeout(() => {
          const Y = new CustomEvent(ro, mh);
          h.addEventListener(ro, A), h.dispatchEvent(Y), Y.defaultPrevented || Yl(R ?? document.body, { select: !0 }), h.removeEventListener(ro, A), vh.remove(D);
        }, 0);
      };
    }
  }, [h, g, A, D]);
  const H = p.useCallback(
    (R) => {
      if (!o && !r || D.paused) return;
      const q = R.key === "Tab" && !R.altKey && !R.ctrlKey && !R.metaKey, Y = document.activeElement;
      if (q && Y) {
        const X = R.currentTarget, [k, W] = A1(X);
        k && W ? !R.shiftKey && Y === W ? (R.preventDefault(), o && Yl(k, { select: !0 })) : R.shiftKey && Y === k && (R.preventDefault(), o && Yl(W, { select: !0 })) : Y === X && R.preventDefault();
      }
    },
    [o, r, D.paused]
  );
  return /* @__PURE__ */ v.jsx(Ze.div, { tabIndex: -1, ...y, ref: z, onKeyDown: H });
});
zv.displayName = E1;
function T1(u, { select: c = !1 } = {}) {
  const o = document.activeElement;
  for (const r of u)
    if (Yl(r, { select: c }), document.activeElement !== o) return;
}
function A1(u) {
  const c = Mv(u), o = hh(c, u), r = hh(c.reverse(), u);
  return [o, r];
}
function Mv(u) {
  const c = [], o = document.createTreeWalker(u, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const f = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || f ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; o.nextNode(); ) c.push(o.currentNode);
  return c;
}
function hh(u, c) {
  for (const o of u)
    if (!N1(o, { upTo: c })) return o;
}
function N1(u, { upTo: c }) {
  if (getComputedStyle(u).visibility === "hidden") return !0;
  for (; u; ) {
    if (c !== void 0 && u === c) return !1;
    if (getComputedStyle(u).display === "none") return !0;
    u = u.parentElement;
  }
  return !1;
}
function C1(u) {
  return u instanceof HTMLInputElement && "select" in u;
}
function Yl(u, { select: c = !1 } = {}) {
  if (u && u.focus) {
    const o = document.activeElement;
    u.focus({ preventScroll: !0 }), u !== o && C1(u) && c && u.select();
  }
}
var vh = _1();
function _1() {
  let u = [];
  return {
    add(c) {
      const o = u[0];
      c !== o && (o == null || o.pause()), u = gh(u, c), u.unshift(c);
    },
    remove(c) {
      var o;
      u = gh(u, c), (o = u[0]) == null || o.resume();
    }
  };
}
function gh(u, c) {
  const o = [...u], r = o.indexOf(c);
  return r !== -1 && o.splice(r, 1), o;
}
function z1(u) {
  return u.filter((c) => c.tagName !== "A");
}
var M1 = "Portal", Ov = p.forwardRef((u, c) => {
  var h;
  const { container: o, ...r } = u, [f, m] = p.useState(!1);
  Pa(() => m(!0), []);
  const y = o || f && ((h = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : h.body);
  return y ? yb.createPortal(/* @__PURE__ */ v.jsx(Ze.div, { ...r, ref: c }), y) : null;
});
Ov.displayName = M1;
var oo = 0;
function O1() {
  p.useEffect(() => {
    const u = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", u[0] ?? yh()), document.body.insertAdjacentElement("beforeend", u[1] ?? yh()), oo++, () => {
      oo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((c) => c.remove()), oo--;
    };
  }, []);
}
function yh() {
  const u = document.createElement("span");
  return u.setAttribute("data-radix-focus-guard", ""), u.tabIndex = 0, u.style.outline = "none", u.style.opacity = "0", u.style.position = "fixed", u.style.pointerEvents = "none", u;
}
var Qt = function() {
  return Qt = Object.assign || function(c) {
    for (var o, r = 1, f = arguments.length; r < f; r++) {
      o = arguments[r];
      for (var m in o) Object.prototype.hasOwnProperty.call(o, m) && (c[m] = o[m]);
    }
    return c;
  }, Qt.apply(this, arguments);
};
function Rv(u, c) {
  var o = {};
  for (var r in u) Object.prototype.hasOwnProperty.call(u, r) && c.indexOf(r) < 0 && (o[r] = u[r]);
  if (u != null && typeof Object.getOwnPropertySymbols == "function")
    for (var f = 0, r = Object.getOwnPropertySymbols(u); f < r.length; f++)
      c.indexOf(r[f]) < 0 && Object.prototype.propertyIsEnumerable.call(u, r[f]) && (o[r[f]] = u[r[f]]);
  return o;
}
function R1(u, c, o) {
  if (o || arguments.length === 2) for (var r = 0, f = c.length, m; r < f; r++)
    (m || !(r in c)) && (m || (m = Array.prototype.slice.call(c, 0, r)), m[r] = c[r]);
  return u.concat(m || Array.prototype.slice.call(c));
}
var Ni = "right-scroll-bar-position", Ci = "width-before-scroll-bar", j1 = "with-scroll-bars-hidden", D1 = "--removed-body-scroll-bar-size";
function so(u, c) {
  return typeof u == "function" ? u(c) : u && (u.current = c), u;
}
function w1(u, c) {
  var o = p.useState(function() {
    return {
      // value
      value: u,
      // last callback
      callback: c,
      // "memoized" public interface
      facade: {
        get current() {
          return o.value;
        },
        set current(r) {
          var f = o.value;
          f !== r && (o.value = r, o.callback(r, f));
        }
      }
    };
  })[0];
  return o.callback = c, o.facade;
}
var U1 = typeof window < "u" ? p.useLayoutEffect : p.useEffect, ph = /* @__PURE__ */ new WeakMap();
function H1(u, c) {
  var o = w1(null, function(r) {
    return u.forEach(function(f) {
      return so(f, r);
    });
  });
  return U1(function() {
    var r = ph.get(o);
    if (r) {
      var f = new Set(r), m = new Set(u), y = o.current;
      f.forEach(function(h) {
        m.has(h) || so(h, null);
      }), m.forEach(function(h) {
        f.has(h) || so(h, y);
      });
    }
    ph.set(o, u);
  }, [u]), o;
}
function B1(u) {
  return u;
}
function L1(u, c) {
  c === void 0 && (c = B1);
  var o = [], r = !1, f = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return o.length ? o[o.length - 1] : u;
    },
    useMedium: function(m) {
      var y = c(m, r);
      return o.push(y), function() {
        o = o.filter(function(h) {
          return h !== y;
        });
      };
    },
    assignSyncMedium: function(m) {
      for (r = !0; o.length; ) {
        var y = o;
        o = [], y.forEach(m);
      }
      o = {
        push: function(h) {
          return m(h);
        },
        filter: function() {
          return o;
        }
      };
    },
    assignMedium: function(m) {
      r = !0;
      var y = [];
      if (o.length) {
        var h = o;
        o = [], h.forEach(m), y = o;
      }
      var S = function() {
        var A = y;
        y = [], A.forEach(m);
      }, g = function() {
        return Promise.resolve().then(S);
      };
      g(), o = {
        push: function(A) {
          y.push(A), g();
        },
        filter: function(A) {
          return y = y.filter(A), o;
        }
      };
    }
  };
  return f;
}
function q1(u) {
  u === void 0 && (u = {});
  var c = L1(null);
  return c.options = Qt({ async: !0, ssr: !1 }, u), c;
}
var jv = function(u) {
  var c = u.sideCar, o = Rv(u, ["sideCar"]);
  if (!c)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = c.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return p.createElement(r, Qt({}, o));
};
jv.isSideCarExport = !0;
function Y1(u, c) {
  return u.useMedium(c), jv;
}
var Dv = q1(), fo = function() {
}, wi = p.forwardRef(function(u, c) {
  var o = p.useRef(null), r = p.useState({
    onScrollCapture: fo,
    onWheelCapture: fo,
    onTouchMoveCapture: fo
  }), f = r[0], m = r[1], y = u.forwardProps, h = u.children, S = u.className, g = u.removeScrollBar, A = u.enabled, T = u.shards, z = u.sideCar, D = u.noRelative, H = u.noIsolation, R = u.inert, q = u.allowPinchZoom, Y = u.as, X = Y === void 0 ? "div" : Y, k = u.gapMode, W = Rv(u, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), P = z, re = H1([o, c]), V = Qt(Qt({}, W), f);
  return p.createElement(
    p.Fragment,
    null,
    A && p.createElement(P, { sideCar: Dv, removeScrollBar: g, shards: T, noRelative: D, noIsolation: H, inert: R, setCallbacks: m, allowPinchZoom: !!q, lockRef: o, gapMode: k }),
    y ? p.cloneElement(p.Children.only(h), Qt(Qt({}, V), { ref: re })) : p.createElement(X, Qt({}, V, { className: S, ref: re }), h)
  );
});
wi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
wi.classNames = {
  fullWidth: Ci,
  zeroRight: Ni
};
var G1 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function X1() {
  if (!document)
    return null;
  var u = document.createElement("style");
  u.type = "text/css";
  var c = G1();
  return c && u.setAttribute("nonce", c), u;
}
function V1(u, c) {
  u.styleSheet ? u.styleSheet.cssText = c : u.appendChild(document.createTextNode(c));
}
function Q1(u) {
  var c = document.head || document.getElementsByTagName("head")[0];
  c.appendChild(u);
}
var Z1 = function() {
  var u = 0, c = null;
  return {
    add: function(o) {
      u == 0 && (c = X1()) && (V1(c, o), Q1(c)), u++;
    },
    remove: function() {
      u--, !u && c && (c.parentNode && c.parentNode.removeChild(c), c = null);
    }
  };
}, K1 = function() {
  var u = Z1();
  return function(c, o) {
    p.useEffect(function() {
      return u.add(c), function() {
        u.remove();
      };
    }, [c && o]);
  };
}, wv = function() {
  var u = K1(), c = function(o) {
    var r = o.styles, f = o.dynamic;
    return u(r, f), null;
  };
  return c;
}, J1 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, mo = function(u) {
  return parseInt(u || "", 10) || 0;
}, k1 = function(u) {
  var c = window.getComputedStyle(document.body), o = c[u === "padding" ? "paddingLeft" : "marginLeft"], r = c[u === "padding" ? "paddingTop" : "marginTop"], f = c[u === "padding" ? "paddingRight" : "marginRight"];
  return [mo(o), mo(r), mo(f)];
}, W1 = function(u) {
  if (u === void 0 && (u = "margin"), typeof window > "u")
    return J1;
  var c = k1(u), o = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: c[0],
    top: c[1],
    right: c[2],
    gap: Math.max(0, r - o + c[2] - c[0])
  };
}, F1 = wv(), Fn = "data-scroll-locked", $1 = function(u, c, o, r) {
  var f = u.left, m = u.top, y = u.right, h = u.gap;
  return o === void 0 && (o = "margin"), `
  .`.concat(j1, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(h, "px ").concat(r, `;
  }
  body[`).concat(Fn, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    c && "position: relative ".concat(r, ";"),
    o === "margin" && `
    padding-left: `.concat(f, `px;
    padding-top: `).concat(m, `px;
    padding-right: `).concat(y, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(h, "px ").concat(r, `;
    `),
    o === "padding" && "padding-right: ".concat(h, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ni, ` {
    right: `).concat(h, "px ").concat(r, `;
  }
  
  .`).concat(Ci, ` {
    margin-right: `).concat(h, "px ").concat(r, `;
  }
  
  .`).concat(Ni, " .").concat(Ni, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ci, " .").concat(Ci, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Fn, `] {
    `).concat(D1, ": ").concat(h, `px;
  }
`);
}, bh = function() {
  var u = parseInt(document.body.getAttribute(Fn) || "0", 10);
  return isFinite(u) ? u : 0;
}, I1 = function() {
  p.useEffect(function() {
    return document.body.setAttribute(Fn, (bh() + 1).toString()), function() {
      var u = bh() - 1;
      u <= 0 ? document.body.removeAttribute(Fn) : document.body.setAttribute(Fn, u.toString());
    };
  }, []);
}, P1 = function(u) {
  var c = u.noRelative, o = u.noImportant, r = u.gapMode, f = r === void 0 ? "margin" : r;
  I1();
  var m = p.useMemo(function() {
    return W1(f);
  }, [f]);
  return p.createElement(F1, { styles: $1(m, !c, f, o ? "" : "!important") });
}, Ao = !1;
if (typeof window < "u")
  try {
    var xi = Object.defineProperty({}, "passive", {
      get: function() {
        return Ao = !0, !0;
      }
    });
    window.addEventListener("test", xi, xi), window.removeEventListener("test", xi, xi);
  } catch {
    Ao = !1;
  }
var Kn = Ao ? { passive: !1 } : !1, eS = function(u) {
  return u.tagName === "TEXTAREA";
}, Uv = function(u, c) {
  if (!(u instanceof Element))
    return !1;
  var o = window.getComputedStyle(u);
  return (
    // not-not-scrollable
    o[c] !== "hidden" && // contains scroll inside self
    !(o.overflowY === o.overflowX && !eS(u) && o[c] === "visible")
  );
}, tS = function(u) {
  return Uv(u, "overflowY");
}, lS = function(u) {
  return Uv(u, "overflowX");
}, Sh = function(u, c) {
  var o = c.ownerDocument, r = c;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var f = Hv(u, r);
    if (f) {
      var m = Bv(u, r), y = m[1], h = m[2];
      if (y > h)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== o.body);
  return !1;
}, nS = function(u) {
  var c = u.scrollTop, o = u.scrollHeight, r = u.clientHeight;
  return [
    c,
    o,
    r
  ];
}, aS = function(u) {
  var c = u.scrollLeft, o = u.scrollWidth, r = u.clientWidth;
  return [
    c,
    o,
    r
  ];
}, Hv = function(u, c) {
  return u === "v" ? tS(c) : lS(c);
}, Bv = function(u, c) {
  return u === "v" ? nS(c) : aS(c);
}, uS = function(u, c) {
  return u === "h" && c === "rtl" ? -1 : 1;
}, iS = function(u, c, o, r, f) {
  var m = uS(u, window.getComputedStyle(c).direction), y = m * r, h = o.target, S = c.contains(h), g = !1, A = y > 0, T = 0, z = 0;
  do {
    if (!h)
      break;
    var D = Bv(u, h), H = D[0], R = D[1], q = D[2], Y = R - q - m * H;
    (H || Y) && Hv(u, h) && (T += Y, z += H);
    var X = h.parentNode;
    h = X && X.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? X.host : X;
  } while (
    // portaled content
    !S && h !== document.body || // self content
    S && (c.contains(h) || c === h)
  );
  return (A && Math.abs(T) < 1 || !A && Math.abs(z) < 1) && (g = !0), g;
}, Ei = function(u) {
  return "changedTouches" in u ? [u.changedTouches[0].clientX, u.changedTouches[0].clientY] : [0, 0];
}, xh = function(u) {
  return [u.deltaX, u.deltaY];
}, Eh = function(u) {
  return u && "current" in u ? u.current : u;
}, cS = function(u, c) {
  return u[0] === c[0] && u[1] === c[1];
}, rS = function(u) {
  return `
  .block-interactivity-`.concat(u, ` {pointer-events: none;}
  .allow-interactivity-`).concat(u, ` {pointer-events: all;}
`);
}, oS = 0, Jn = [];
function sS(u) {
  var c = p.useRef([]), o = p.useRef([0, 0]), r = p.useRef(), f = p.useState(oS++)[0], m = p.useState(wv)[0], y = p.useRef(u);
  p.useEffect(function() {
    y.current = u;
  }, [u]), p.useEffect(function() {
    if (u.inert) {
      document.body.classList.add("block-interactivity-".concat(f));
      var R = R1([u.lockRef.current], (u.shards || []).map(Eh), !0).filter(Boolean);
      return R.forEach(function(q) {
        return q.classList.add("allow-interactivity-".concat(f));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(f)), R.forEach(function(q) {
          return q.classList.remove("allow-interactivity-".concat(f));
        });
      };
    }
  }, [u.inert, u.lockRef.current, u.shards]);
  var h = p.useCallback(function(R, q) {
    if ("touches" in R && R.touches.length === 2 || R.type === "wheel" && R.ctrlKey)
      return !y.current.allowPinchZoom;
    var Y = Ei(R), X = o.current, k = "deltaX" in R ? R.deltaX : X[0] - Y[0], W = "deltaY" in R ? R.deltaY : X[1] - Y[1], P, re = R.target, V = Math.abs(k) > Math.abs(W) ? "h" : "v";
    if ("touches" in R && V === "h" && re.type === "range")
      return !1;
    var te = window.getSelection(), ne = te && te.anchorNode, be = ne ? ne === re || ne.contains(re) : !1;
    if (be)
      return !1;
    var xe = Sh(V, re);
    if (!xe)
      return !0;
    if (xe ? P = V : (P = V === "v" ? "h" : "v", xe = Sh(V, re)), !xe)
      return !1;
    if (!r.current && "changedTouches" in R && (k || W) && (r.current = P), !P)
      return !0;
    var ee = r.current || P;
    return iS(ee, q, R, ee === "h" ? k : W);
  }, []), S = p.useCallback(function(R) {
    var q = R;
    if (!(!Jn.length || Jn[Jn.length - 1] !== m)) {
      var Y = "deltaY" in q ? xh(q) : Ei(q), X = c.current.filter(function(P) {
        return P.name === q.type && (P.target === q.target || q.target === P.shadowParent) && cS(P.delta, Y);
      })[0];
      if (X && X.should) {
        q.cancelable && q.preventDefault();
        return;
      }
      if (!X) {
        var k = (y.current.shards || []).map(Eh).filter(Boolean).filter(function(P) {
          return P.contains(q.target);
        }), W = k.length > 0 ? h(q, k[0]) : !y.current.noIsolation;
        W && q.cancelable && q.preventDefault();
      }
    }
  }, []), g = p.useCallback(function(R, q, Y, X) {
    var k = { name: R, delta: q, target: Y, should: X, shadowParent: fS(Y) };
    c.current.push(k), setTimeout(function() {
      c.current = c.current.filter(function(W) {
        return W !== k;
      });
    }, 1);
  }, []), A = p.useCallback(function(R) {
    o.current = Ei(R), r.current = void 0;
  }, []), T = p.useCallback(function(R) {
    g(R.type, xh(R), R.target, h(R, u.lockRef.current));
  }, []), z = p.useCallback(function(R) {
    g(R.type, Ei(R), R.target, h(R, u.lockRef.current));
  }, []);
  p.useEffect(function() {
    return Jn.push(m), u.setCallbacks({
      onScrollCapture: T,
      onWheelCapture: T,
      onTouchMoveCapture: z
    }), document.addEventListener("wheel", S, Kn), document.addEventListener("touchmove", S, Kn), document.addEventListener("touchstart", A, Kn), function() {
      Jn = Jn.filter(function(R) {
        return R !== m;
      }), document.removeEventListener("wheel", S, Kn), document.removeEventListener("touchmove", S, Kn), document.removeEventListener("touchstart", A, Kn);
    };
  }, []);
  var D = u.removeScrollBar, H = u.inert;
  return p.createElement(
    p.Fragment,
    null,
    H ? p.createElement(m, { styles: rS(f) }) : null,
    D ? p.createElement(P1, { noRelative: u.noRelative, gapMode: u.gapMode }) : null
  );
}
function fS(u) {
  for (var c = null; u !== null; )
    u instanceof ShadowRoot && (c = u.host, u = u.host), u = u.parentNode;
  return c;
}
const dS = Y1(Dv, sS);
var Lv = p.forwardRef(function(u, c) {
  return p.createElement(wi, Qt({}, u, { ref: c, sideCar: dS }));
});
Lv.classNames = wi.classNames;
var mS = function(u) {
  if (typeof document > "u")
    return null;
  var c = Array.isArray(u) ? u[0] : u;
  return c.ownerDocument.body;
}, kn = /* @__PURE__ */ new WeakMap(), Ti = /* @__PURE__ */ new WeakMap(), Ai = {}, ho = 0, qv = function(u) {
  return u && (u.host || qv(u.parentNode));
}, hS = function(u, c) {
  return c.map(function(o) {
    if (u.contains(o))
      return o;
    var r = qv(o);
    return r && u.contains(r) ? r : (console.error("aria-hidden", o, "in not contained inside", u, ". Doing nothing"), null);
  }).filter(function(o) {
    return !!o;
  });
}, vS = function(u, c, o, r) {
  var f = hS(c, Array.isArray(u) ? u : [u]);
  Ai[o] || (Ai[o] = /* @__PURE__ */ new WeakMap());
  var m = Ai[o], y = [], h = /* @__PURE__ */ new Set(), S = new Set(f), g = function(T) {
    !T || h.has(T) || (h.add(T), g(T.parentNode));
  };
  f.forEach(g);
  var A = function(T) {
    !T || S.has(T) || Array.prototype.forEach.call(T.children, function(z) {
      if (h.has(z))
        A(z);
      else
        try {
          var D = z.getAttribute(r), H = D !== null && D !== "false", R = (kn.get(z) || 0) + 1, q = (m.get(z) || 0) + 1;
          kn.set(z, R), m.set(z, q), y.push(z), R === 1 && H && Ti.set(z, !0), q === 1 && z.setAttribute(o, "true"), H || z.setAttribute(r, "true");
        } catch (Y) {
          console.error("aria-hidden: cannot operate on ", z, Y);
        }
    });
  };
  return A(c), h.clear(), ho++, function() {
    y.forEach(function(T) {
      var z = kn.get(T) - 1, D = m.get(T) - 1;
      kn.set(T, z), m.set(T, D), z || (Ti.has(T) || T.removeAttribute(r), Ti.delete(T)), D || T.removeAttribute(o);
    }), ho--, ho || (kn = /* @__PURE__ */ new WeakMap(), kn = /* @__PURE__ */ new WeakMap(), Ti = /* @__PURE__ */ new WeakMap(), Ai = {});
  };
}, gS = function(u, c, o) {
  o === void 0 && (o = "data-aria-hidden");
  var r = Array.from(Array.isArray(u) ? u : [u]), f = mS(u);
  return f ? (r.push.apply(r, Array.from(f.querySelectorAll("[aria-live], script"))), vS(r, f, o, "aria-hidden")) : function() {
    return null;
  };
}, Yo = "Dialog", [Yv] = tu(Yo), [yS, qt] = Yv(Yo), Gv = (u) => {
  const {
    __scopeDialog: c,
    children: o,
    open: r,
    defaultOpen: f,
    onOpenChange: m,
    modal: y = !0
  } = u, h = p.useRef(null), S = p.useRef(null), [g = !1, A] = Bo({
    prop: r,
    defaultProp: f,
    onChange: m
  });
  return /* @__PURE__ */ v.jsx(
    yS,
    {
      scope: c,
      triggerRef: h,
      contentRef: S,
      contentId: Ia(),
      titleId: Ia(),
      descriptionId: Ia(),
      open: g,
      onOpenChange: A,
      onOpenToggle: p.useCallback(() => A((T) => !T), [A]),
      modal: y,
      children: o
    }
  );
};
Gv.displayName = Yo;
var Xv = "DialogTrigger", pS = p.forwardRef(
  (u, c) => {
    const { __scopeDialog: o, ...r } = u, f = qt(Xv, o), m = lt(c, f.triggerRef);
    return /* @__PURE__ */ v.jsx(
      Ze.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": f.open,
        "aria-controls": f.contentId,
        "data-state": Vo(f.open),
        ...r,
        ref: m,
        onClick: Ue(u.onClick, f.onOpenToggle)
      }
    );
  }
);
pS.displayName = Xv;
var Go = "DialogPortal", [bS, Vv] = Yv(Go, {
  forceMount: void 0
}), Qv = (u) => {
  const { __scopeDialog: c, forceMount: o, children: r, container: f } = u, m = qt(Go, c);
  return /* @__PURE__ */ v.jsx(bS, { scope: c, forceMount: o, children: p.Children.map(r, (y) => /* @__PURE__ */ v.jsx(dl, { present: o || m.open, children: /* @__PURE__ */ v.jsx(Ov, { asChild: !0, container: f, children: y }) })) });
};
Qv.displayName = Go;
var Mi = "DialogOverlay", Zv = p.forwardRef(
  (u, c) => {
    const o = Vv(Mi, u.__scopeDialog), { forceMount: r = o.forceMount, ...f } = u, m = qt(Mi, u.__scopeDialog);
    return m.modal ? /* @__PURE__ */ v.jsx(dl, { present: r || m.open, children: /* @__PURE__ */ v.jsx(SS, { ...f, ref: c }) }) : null;
  }
);
Zv.displayName = Mi;
var SS = p.forwardRef(
  (u, c) => {
    const { __scopeDialog: o, ...r } = u, f = qt(Mi, o);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ v.jsx(Lv, { as: $n, allowPinchZoom: !0, shards: [f.contentRef], children: /* @__PURE__ */ v.jsx(
        Ze.div,
        {
          "data-state": Vo(f.open),
          ...r,
          ref: c,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), cn = "DialogContent", Kv = p.forwardRef(
  (u, c) => {
    const o = Vv(cn, u.__scopeDialog), { forceMount: r = o.forceMount, ...f } = u, m = qt(cn, u.__scopeDialog);
    return /* @__PURE__ */ v.jsx(dl, { present: r || m.open, children: m.modal ? /* @__PURE__ */ v.jsx(xS, { ...f, ref: c }) : /* @__PURE__ */ v.jsx(ES, { ...f, ref: c }) });
  }
);
Kv.displayName = cn;
var xS = p.forwardRef(
  (u, c) => {
    const o = qt(cn, u.__scopeDialog), r = p.useRef(null), f = lt(c, o.contentRef, r);
    return p.useEffect(() => {
      const m = r.current;
      if (m) return gS(m);
    }, []), /* @__PURE__ */ v.jsx(
      Jv,
      {
        ...u,
        ref: f,
        trapFocus: o.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Ue(u.onCloseAutoFocus, (m) => {
          var y;
          m.preventDefault(), (y = o.triggerRef.current) == null || y.focus();
        }),
        onPointerDownOutside: Ue(u.onPointerDownOutside, (m) => {
          const y = m.detail.originalEvent, h = y.button === 0 && y.ctrlKey === !0;
          (y.button === 2 || h) && m.preventDefault();
        }),
        onFocusOutside: Ue(
          u.onFocusOutside,
          (m) => m.preventDefault()
        )
      }
    );
  }
), ES = p.forwardRef(
  (u, c) => {
    const o = qt(cn, u.__scopeDialog), r = p.useRef(!1), f = p.useRef(!1);
    return /* @__PURE__ */ v.jsx(
      Jv,
      {
        ...u,
        ref: c,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (m) => {
          var y, h;
          (y = u.onCloseAutoFocus) == null || y.call(u, m), m.defaultPrevented || (r.current || (h = o.triggerRef.current) == null || h.focus(), m.preventDefault()), r.current = !1, f.current = !1;
        },
        onInteractOutside: (m) => {
          var S, g;
          (S = u.onInteractOutside) == null || S.call(u, m), m.defaultPrevented || (r.current = !0, m.detail.originalEvent.type === "pointerdown" && (f.current = !0));
          const y = m.target;
          ((g = o.triggerRef.current) == null ? void 0 : g.contains(y)) && m.preventDefault(), m.detail.originalEvent.type === "focusin" && f.current && m.preventDefault();
        }
      }
    );
  }
), Jv = p.forwardRef(
  (u, c) => {
    const { __scopeDialog: o, trapFocus: r, onOpenAutoFocus: f, onCloseAutoFocus: m, ...y } = u, h = qt(cn, o), S = p.useRef(null), g = lt(c, S);
    return O1(), /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx(
        zv,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: f,
          onUnmountAutoFocus: m,
          children: /* @__PURE__ */ v.jsx(
            Cv,
            {
              role: "dialog",
              id: h.contentId,
              "aria-describedby": h.descriptionId,
              "aria-labelledby": h.titleId,
              "data-state": Vo(h.open),
              ...y,
              ref: g,
              onDismiss: () => h.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ v.jsx(TS, { titleId: h.titleId }),
        /* @__PURE__ */ v.jsx(NS, { contentRef: S, descriptionId: h.descriptionId })
      ] })
    ] });
  }
), Xo = "DialogTitle", kv = p.forwardRef(
  (u, c) => {
    const { __scopeDialog: o, ...r } = u, f = qt(Xo, o);
    return /* @__PURE__ */ v.jsx(Ze.h2, { id: f.titleId, ...r, ref: c });
  }
);
kv.displayName = Xo;
var Wv = "DialogDescription", Fv = p.forwardRef(
  (u, c) => {
    const { __scopeDialog: o, ...r } = u, f = qt(Wv, o);
    return /* @__PURE__ */ v.jsx(Ze.p, { id: f.descriptionId, ...r, ref: c });
  }
);
Fv.displayName = Wv;
var $v = "DialogClose", Iv = p.forwardRef(
  (u, c) => {
    const { __scopeDialog: o, ...r } = u, f = qt($v, o);
    return /* @__PURE__ */ v.jsx(
      Ze.button,
      {
        type: "button",
        ...r,
        ref: c,
        onClick: Ue(u.onClick, () => f.onOpenChange(!1))
      }
    );
  }
);
Iv.displayName = $v;
function Vo(u) {
  return u ? "open" : "closed";
}
var Pv = "DialogTitleWarning", [ZS, e0] = _b(Pv, {
  contentName: cn,
  titleName: Xo,
  docsSlug: "dialog"
}), TS = ({ titleId: u }) => {
  const c = e0(Pv), o = `\`${c.contentName}\` requires a \`${c.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${c.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${c.docsSlug}`;
  return p.useEffect(() => {
    u && (document.getElementById(u) || console.error(o));
  }, [o, u]), null;
}, AS = "DialogDescriptionWarning", NS = ({ contentRef: u, descriptionId: c }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${e0(AS).contentName}}.`;
  return p.useEffect(() => {
    var m;
    const f = (m = u.current) == null ? void 0 : m.getAttribute("aria-describedby");
    c && f && (document.getElementById(c) || console.warn(r));
  }, [r, u, c]), null;
}, CS = Gv, _S = Qv, t0 = Zv, l0 = Kv, n0 = kv, a0 = Fv, zS = Iv;
const MS = CS, OS = _S, u0 = p.forwardRef(({ className: u, ...c }, o) => /* @__PURE__ */ v.jsx(
  t0,
  {
    className: ge(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      u
    ),
    ...c,
    ref: o
  }
));
u0.displayName = t0.displayName;
const RS = Ro(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), i0 = p.forwardRef(({ side: u = "right", className: c, children: o, ...r }, f) => /* @__PURE__ */ v.jsxs(OS, { children: [
  /* @__PURE__ */ v.jsx(u0, {}),
  /* @__PURE__ */ v.jsxs(
    l0,
    {
      ref: f,
      className: ge(RS({ side: u }), c),
      ...r,
      children: [
        o,
        /* @__PURE__ */ v.jsxs(zS, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ v.jsx(vb, { className: "h-4 w-4" }),
          /* @__PURE__ */ v.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
i0.displayName = l0.displayName;
const c0 = ({
  className: u,
  ...c
}) => /* @__PURE__ */ v.jsx(
  "div",
  {
    className: ge(
      "flex flex-col space-y-2 text-center sm:text-left",
      u
    ),
    ...c
  }
);
c0.displayName = "SheetHeader";
const r0 = p.forwardRef(({ className: u, ...c }, o) => /* @__PURE__ */ v.jsx(
  n0,
  {
    ref: o,
    className: ge("text-lg font-semibold text-foreground", u),
    ...c
  }
));
r0.displayName = n0.displayName;
const o0 = p.forwardRef(({ className: u, ...c }, o) => /* @__PURE__ */ v.jsx(
  a0,
  {
    ref: o,
    className: ge("text-sm text-muted-foreground", u),
    ...c
  }
));
o0.displayName = a0.displayName;
const jS = Ro(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Oi = p.forwardRef(
  ({ className: u, variant: c, size: o, asChild: r = !1, ...f }, m) => {
    const y = r ? $n : "button";
    return /* @__PURE__ */ v.jsx(
      y,
      {
        className: ge(jS({ variant: c, size: o, className: u })),
        ref: m,
        ...f
      }
    );
  }
);
Oi.displayName = "Button";
const DS = {
  string: mb,
  number: uh,
  integer: uh,
  boolean: fb,
  object: zp,
  array: Bh,
  null: Up
};
function No(u, c) {
  var r;
  if (!u) return {};
  const o = {};
  for (const [f, m] of Object.entries(u))
    switch (Array.isArray(m.type) ? m.type[0] : m.type) {
      case "string":
        o[f] = "";
        break;
      case "number":
      case "integer":
        o[f] = 0;
        break;
      case "boolean":
        o[f] = !1;
        break;
      case "null":
        o[f] = null;
        break;
      case "array":
        ((r = m.items) == null ? void 0 : r.type) === "object" && m.items.properties ? o[f] = [No(m.items.properties, m.items.required)] : o[f] = [];
        break;
      case "object":
        o[f] = No(m.properties, m.required);
        break;
      default:
        o[f] = null;
    }
  return o;
}
function Co(u, c) {
  var r, f, m;
  if (!u) return {};
  const o = {};
  for (const [y, h] of Object.entries(u)) {
    const S = Array.isArray(h.type) ? h.type[0] : h.type;
    if (h.enum && h.enum.length > 0)
      o[y] = h.enum[0];
    else if (h.default !== void 0)
      o[y] = h.default;
    else
      switch (S) {
        case "string":
          h.format === "date-time" ? o[y] = "2025-11-11T15:22:49.516Z" : h.format === "email" ? o[y] = "user@example.com" : h.format === "uri" ? o[y] = "https://example.com" : h.pattern ? o[y] = `<${y}>` : o[y] = `example-${y}`;
          break;
        case "number":
          o[y] = h.minimum !== void 0 ? h.minimum : 0;
          break;
        case "integer":
          o[y] = h.minimum !== void 0 ? h.minimum : 1;
          break;
        case "boolean":
          o[y] = !1;
          break;
        case "null":
          o[y] = null;
          break;
        case "array":
          ((r = h.items) == null ? void 0 : r.type) === "object" && h.items.properties ? o[y] = [Co(h.items.properties, h.items.required)] : ((f = h.items) == null ? void 0 : f.type) === "integer" ? o[y] = [1, 2, 3] : ((m = h.items) == null ? void 0 : m.type) === "string" ? o[y] = ["example"] : o[y] = [];
          break;
        case "object":
          h.properties ? o[y] = Co(h.properties, h.required) : o[y] = {};
          break;
        default:
          o[y] = null;
      }
  }
  return o;
}
function wS({ collection: u }) {
  const [c, o] = p.useState(!1), [r, f] = p.useState(!1), [m, y] = p.useState(!1), h = p.useCallback(() => {
    const z = No(
      u.schema.properties,
      u.schema.required
    );
    navigator.clipboard.writeText(JSON.stringify(z, null, 2)), o(!0), setTimeout(() => o(!1), 2e3);
  }, [u]), S = p.useCallback(() => {
    navigator.clipboard.writeText(u.path), f(!0), setTimeout(() => f(!1), 2e3);
  }, [u.path]), g = u.schema.required || [], A = u.schema.properties ? Object.keys(u.schema.properties).length : 0, T = u.path.split("/").filter(Boolean);
  return /* @__PURE__ */ v.jsxs("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col gap-3 border-b border-border px-6 py-5", children: [
      /* @__PURE__ */ v.jsxs(
        "button",
        {
          type: "button",
          onClick: S,
          className: "group/path flex w-fit items-center gap-0.5 rounded-md border border-border bg-secondary/30 px-3 py-1.5 transition-colors hover:border-primary/30 hover:bg-secondary/50",
          title: "Click to copy path",
          children: [
            T.map((z, D) => /* @__PURE__ */ v.jsxs(p.Fragment, { children: [
              D > 0 && /* @__PURE__ */ v.jsx(Oo, { className: "h-3 w-3 shrink-0 text-muted-foreground/30" }),
              /* @__PURE__ */ v.jsx(
                "span",
                {
                  className: ge(
                    "font-mono text-[11px]",
                    z.startsWith("{") ? "text-muted-foreground/70" : "font-medium text-foreground"
                  ),
                  children: z
                }
              )
            ] }, D)),
            r ? /* @__PURE__ */ v.jsx(go, { className: "ml-2 h-3 w-3 shrink-0 text-emerald-400" }) : /* @__PURE__ */ v.jsx(yo, { className: "ml-2 h-3 w-3 shrink-0 text-muted-foreground/40 transition-colors group-hover/path:text-foreground" })
          ]
        }
      ),
      /* @__PURE__ */ v.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ v.jsx("h1", { className: "font-mono text-xl font-bold text-foreground", children: u.schema.title || u.name }),
            /* @__PURE__ */ v.jsx(qh, { variant: "outline", className: "font-mono text-[10px]", children: u.schema.type }),
            u.schema.$id && /* @__PURE__ */ v.jsx("span", { className: "font-mono text-[10px] text-muted-foreground/60", children: u.schema.$id })
          ] }),
          /* @__PURE__ */ v.jsx("p", { className: "max-w-2xl text-sm text-muted-foreground leading-relaxed", children: u.description || u.schema.description }),
          /* @__PURE__ */ v.jsxs("div", { className: "mt-0.5 flex items-center gap-3 text-[11px]", children: [
            /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1.5 rounded-md bg-secondary/50 px-2 py-1", children: [
              /* @__PURE__ */ v.jsx(ea, { className: "h-3 w-3 text-primary" }),
              /* @__PURE__ */ v.jsx("span", { className: "text-foreground font-medium", children: A }),
              /* @__PURE__ */ v.jsx("span", { className: "text-muted-foreground", children: "fields" })
            ] }),
            /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1.5 rounded-md bg-secondary/50 px-2 py-1", children: [
              /* @__PURE__ */ v.jsx(eb, { className: "h-3 w-3 text-red-400" }),
              /* @__PURE__ */ v.jsx("span", { className: "text-foreground font-medium", children: g.length }),
              /* @__PURE__ */ v.jsx("span", { className: "text-muted-foreground", children: "required" })
            ] }),
            u.schema.additionalProperties === !1 && /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1.5 rounded-md bg-amber-400/10 px-2 py-1", children: [
              /* @__PURE__ */ v.jsx(nb, { className: "h-3 w-3 text-amber-400" }),
              /* @__PURE__ */ v.jsx("span", { className: "text-amber-400 font-medium", children: "strict" })
            ] }),
            u.documentCount && /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1.5 rounded-md bg-secondary/50 px-2 py-1", children: [
              /* @__PURE__ */ v.jsx(ub, { className: "h-3 w-3 text-muted-foreground" }),
              /* @__PURE__ */ v.jsx("span", { className: "text-foreground font-medium", children: u.documentCount.toLocaleString() }),
              /* @__PURE__ */ v.jsx("span", { className: "text-muted-foreground", children: "docs" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
          /* @__PURE__ */ v.jsxs(
            Oi,
            {
              variant: "outline",
              size: "sm",
              onClick: () => y(!0),
              className: "gap-2 text-xs bg-transparent",
              children: [
                /* @__PURE__ */ v.jsx(Yp, { className: "h-3.5 w-3.5" }),
                "See Example"
              ]
            }
          ),
          /* @__PURE__ */ v.jsx(
            Oi,
            {
              variant: "outline",
              size: "sm",
              onClick: h,
              className: "gap-2 text-xs bg-transparent",
              children: c ? /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                /* @__PURE__ */ v.jsx(go, { className: "h-3.5 w-3.5 text-emerald-400" }),
                "Copied"
              ] }) : /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                /* @__PURE__ */ v.jsx(yo, { className: "h-3.5 w-3.5" }),
                "Copy JSON Empty"
              ] })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ v.jsxs(m1, { defaultValue: "tree", className: "flex flex-1 flex-col overflow-hidden", children: [
      /* @__PURE__ */ v.jsx("div", { className: "border-b border-border px-6", children: /* @__PURE__ */ v.jsxs(Av, { className: "h-10 bg-transparent p-0", children: [
        /* @__PURE__ */ v.jsxs(
          xo,
          {
            value: "tree",
            className: "gap-2 rounded-none border-b-2 border-transparent px-4 text-xs data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none",
            children: [
              /* @__PURE__ */ v.jsx(Ip, { className: "h-3.5 w-3.5" }),
              "Schema Tree"
            ]
          }
        ),
        /* @__PURE__ */ v.jsxs(
          xo,
          {
            value: "json",
            className: "gap-2 rounded-none border-b-2 border-transparent px-4 text-xs data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none",
            children: [
              /* @__PURE__ */ v.jsx(Op, { className: "h-3.5 w-3.5" }),
              "Raw JSON"
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ v.jsx(Eo, { value: "tree", className: "mt-0 flex-1 overflow-hidden", children: /* @__PURE__ */ v.jsx(eu, { className: "h-full", children: /* @__PURE__ */ v.jsx("div", { className: "p-6", children: /* @__PURE__ */ v.jsx(
        _o,
        {
          properties: u.schema.properties || {},
          required: g,
          depth: 0
        }
      ) }) }) }),
      /* @__PURE__ */ v.jsx(Eo, { value: "json", className: "mt-0 flex-1 overflow-hidden", children: /* @__PURE__ */ v.jsx(eu, { className: "h-full", children: /* @__PURE__ */ v.jsx("pre", { className: "p-6 font-mono text-xs leading-6 text-foreground/90", children: JSON.stringify(u.schema, null, 2) }) }) })
    ] }),
    /* @__PURE__ */ v.jsx(
      US,
      {
        open: m,
        onOpenChange: y,
        collection: u
      }
    )
  ] });
}
function US({
  open: u,
  onOpenChange: c,
  collection: o
}) {
  const [r, f] = p.useState("pretty"), [m, y] = p.useState(!1), h = Co(
    o.schema.properties,
    o.schema.required
  ), S = JSON.stringify(h, null, 2), g = JSON.stringify(h), A = r === "pretty" ? S : g, T = () => {
    navigator.clipboard.writeText(A), y(!0), setTimeout(() => y(!1), 2e3);
  };
  return /* @__PURE__ */ v.jsx(MS, { open: u, onOpenChange: c, children: /* @__PURE__ */ v.jsxs(i0, { className: "flex w-full flex-col border-border bg-card sm:max-w-lg", children: [
    /* @__PURE__ */ v.jsxs(c0, { children: [
      /* @__PURE__ */ v.jsx(r0, { className: "font-mono text-foreground", children: "Example Document" }),
      /* @__PURE__ */ v.jsxs(o0, { className: "text-muted-foreground", children: [
        "Auto-generated example for",
        " ",
        /* @__PURE__ */ v.jsx("span", { className: "font-mono text-primary", children: o.name }),
        " ",
        "based on the JSON Schema."
      ] })
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-between border-b border-border pb-3", children: [
      /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1 rounded-md bg-secondary/50 p-0.5", children: [
        /* @__PURE__ */ v.jsxs(
          "button",
          {
            type: "button",
            onClick: () => f("pretty"),
            className: ge(
              "flex items-center gap-1.5 rounded px-2.5 py-1 text-[11px] font-medium transition-colors",
              r === "pretty" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            ),
            children: [
              /* @__PURE__ */ v.jsx(cb, { className: "h-3 w-3" }),
              "Pretty"
            ]
          }
        ),
        /* @__PURE__ */ v.jsxs(
          "button",
          {
            type: "button",
            onClick: () => f("inline"),
            className: ge(
              "flex items-center gap-1.5 rounded px-2.5 py-1 text-[11px] font-medium transition-colors",
              r === "inline" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            ),
            children: [
              /* @__PURE__ */ v.jsx(ob, { className: "h-3 w-3" }),
              "Inline"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ v.jsx(
        Oi,
        {
          variant: "outline",
          size: "sm",
          onClick: T,
          className: "gap-2 text-xs bg-transparent",
          children: m ? /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
            /* @__PURE__ */ v.jsx(go, { className: "h-3.5 w-3.5 text-emerald-400" }),
            "Copied"
          ] }) : /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
            /* @__PURE__ */ v.jsx(yo, { className: "h-3.5 w-3.5" }),
            "Copy"
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ v.jsx(eu, { className: "flex-1 rounded-md border border-border bg-background", children: /* @__PURE__ */ v.jsx("pre", { className: ge(
      "p-4 font-mono text-xs text-foreground/90",
      r === "pretty" ? "leading-6" : "leading-6 whitespace-pre-wrap break-all"
    ), children: A }) })
  ] }) });
}
function _o({
  properties: u,
  required: c,
  depth: o
}) {
  return /* @__PURE__ */ v.jsx("div", { className: ge("flex flex-col gap-0.5", o > 0 && "mt-0.5"), children: Object.entries(u).map(([r, f]) => /* @__PURE__ */ v.jsx(
    HS,
    {
      name: r,
      property: f,
      isRequired: c.includes(r),
      depth: o
    },
    r
  )) });
}
function HS({
  name: u,
  property: c,
  isRequired: o,
  depth: r
}) {
  var q, Y;
  const [f, m] = p.useState(r < 1), y = c.type === "object" && c.properties && Object.keys(c.properties).length > 0, h = c.type === "array", S = h && ((q = c.items) == null ? void 0 : q.type) === "object" && ((Y = c.items) == null ? void 0 : Y.properties), g = y || S, A = Array.isArray(c.type) ? c.type[0] : c.type, T = Array.isArray(c.type) ? c.type.join(" | ") : c.type, z = DS[A] || ea, D = Jb[A] || "text-muted-foreground", H = [];
  c.format && H.push({ label: "format", value: c.format }), c.pattern && H.push({ label: "pattern", value: c.pattern }), c.minimum !== void 0 && H.push({ label: "min", value: String(c.minimum) }), c.maximum !== void 0 && H.push({ label: "max", value: String(c.maximum) }), c.minLength !== void 0 && H.push({ label: "minLength", value: String(c.minLength) }), c.maxLength !== void 0 && H.push({ label: "maxLength", value: String(c.maxLength) }), c.default !== void 0 && H.push({
    label: "default",
    value: JSON.stringify(c.default)
  });
  const R = [
    "border-primary/20",
    "border-cyan-400/20",
    "border-emerald-400/20",
    "border-amber-400/20"
  ];
  return /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ v.jsxs(
      "div",
      {
        className: ge(
          "group flex flex-col rounded-lg border border-transparent px-3 py-2.5 transition-all",
          "hover:border-border hover:bg-secondary/20",
          f && g && "border-border bg-secondary/10"
        ),
        children: [
          /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2", children: [
            g ? /* @__PURE__ */ v.jsx(
              "button",
              {
                type: "button",
                onClick: () => m(!f),
                className: ge(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded transition-colors",
                  "hover:bg-secondary text-muted-foreground hover:text-foreground"
                ),
                children: f ? /* @__PURE__ */ v.jsx(Uh, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ v.jsx(Oo, { className: "h-3.5 w-3.5" })
              }
            ) : /* @__PURE__ */ v.jsx("span", { className: "w-5 shrink-0" }),
            /* @__PURE__ */ v.jsx(z, { className: ge("h-3.5 w-3.5 shrink-0", D) }),
            /* @__PURE__ */ v.jsx("span", { className: "font-mono text-[13px] font-semibold text-foreground", children: u }),
            o && /* @__PURE__ */ v.jsx("span", { className: "font-mono text-sm font-bold text-red-400", title: "Required field", children: "*" }),
            /* @__PURE__ */ v.jsx("span", { className: ge("font-mono text-[11px]", D), children: h && c.items ? `${T}<${Array.isArray(c.items.type) ? c.items.type.join("|") : c.items.type}>` : T }),
            c.description && /* @__PURE__ */ v.jsx("span", { className: "ml-auto max-w-[45%] truncate text-right text-[11px] text-muted-foreground leading-relaxed", children: c.description })
          ] }),
          H.length > 0 && /* @__PURE__ */ v.jsx("div", { className: "mt-1.5 ml-[44px] flex flex-wrap items-center gap-1.5", children: H.map((X) => /* @__PURE__ */ v.jsxs(
            "span",
            {
              className: "inline-flex items-center gap-1 rounded bg-secondary/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground",
              children: [
                /* @__PURE__ */ v.jsxs("span", { className: "text-foreground/60", children: [
                  X.label,
                  ":"
                ] }),
                /* @__PURE__ */ v.jsx("span", { className: "text-foreground/90", children: X.value })
              ]
            },
            X.label
          )) }),
          c.enum && /* @__PURE__ */ v.jsxs("div", { className: "mt-1.5 ml-[44px] flex flex-wrap items-center gap-1", children: [
            /* @__PURE__ */ v.jsx("span", { className: "text-[10px] text-muted-foreground mr-0.5", children: "enum:" }),
            c.enum.map((X) => /* @__PURE__ */ v.jsx(
              "span",
              {
                className: "rounded-full border border-border bg-secondary/40 px-2 py-0.5 font-mono text-[10px] text-foreground/80",
                children: String(X)
              },
              String(X)
            ))
          ] })
        ]
      }
    ),
    f && y && /* @__PURE__ */ v.jsx(
      "div",
      {
        className: ge(
          "ml-6 border-l-2 pl-3",
          R[r % R.length]
        ),
        children: /* @__PURE__ */ v.jsx(
          _o,
          {
            properties: c.properties,
            required: c.required || [],
            depth: r + 1
          }
        )
      }
    ),
    f && S && /* @__PURE__ */ v.jsxs(
      "div",
      {
        className: ge(
          "ml-6 border-l-2 pl-3",
          R[r % R.length]
        ),
        children: [
          /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2 px-3 py-2 text-[11px] text-muted-foreground", children: [
            /* @__PURE__ */ v.jsx(Bh, { className: "h-3 w-3 text-cyan-400" }),
            /* @__PURE__ */ v.jsx("span", { className: "font-medium", children: "Array item schema" }),
            c.items.required && /* @__PURE__ */ v.jsxs("span", { className: "text-muted-foreground/60", children: [
              "(",
              c.items.required.length,
              " required)"
            ] })
          ] }),
          /* @__PURE__ */ v.jsx(
            _o,
            {
              properties: c.items.properties,
              required: c.items.required || [],
              depth: r + 1
            }
          )
        ]
      }
    )
  ] });
}
function BS() {
  return /* @__PURE__ */ v.jsxs("div", { className: "flex h-full flex-col items-center justify-center gap-4", children: [
    /* @__PURE__ */ v.jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/50", children: /* @__PURE__ */ v.jsx(ea, { className: "h-8 w-8 text-muted-foreground/50" }) }),
    /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col items-center gap-1 text-center", children: [
      /* @__PURE__ */ v.jsx("h2", { className: "text-lg font-semibold text-foreground", children: "Select a Collection" }),
      /* @__PURE__ */ v.jsx("p", { className: "max-w-sm text-sm text-muted-foreground leading-relaxed", children: "Choose a collection from the sidebar to view its JSON Schema documentation and structure." })
    ] })
  ] });
}
function LS(u) {
  let c = 0, o = 0, r = 0, f = 0, m = 0;
  function y(h, S) {
    for (const g of h)
      c++, r += g.schema.properties ? Object.keys(g.schema.properties).length : 0, f += g.documentCount || 0, S > m && (m = S), g.subcollections && g.subcollections.length > 0 && (o += g.subcollections.length, y(g.subcollections, S + 1));
  }
  return y(u, 0), { schemas: c, subcollections: o, fields: r, documents: f, maxDepth: m };
}
function Th({ collections: u }) {
  const { schemas: c, subcollections: o, fields: r, documents: f } = LS(u), m = [
    {
      label: "Schemas",
      value: c,
      icon: Lp,
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      label: "Subcollections",
      value: o,
      icon: Jp,
      color: "text-cyan-400",
      bg: "bg-cyan-400/10"
    },
    {
      label: "Total Fields",
      value: r,
      icon: ea,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10"
    },
    ...f > 0 ? [{
      label: "Documents",
      value: f.toLocaleString(),
      icon: Hh,
      color: "text-amber-400",
      bg: "bg-amber-400/10"
    }] : []
  ], y = m.length === 4 ? "grid-cols-4" : "grid-cols-3";
  return /* @__PURE__ */ v.jsx("div", { className: `grid ${y} gap-3`, children: m.map((h) => /* @__PURE__ */ v.jsxs(
    "div",
    {
      className: "flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3",
      children: [
        /* @__PURE__ */ v.jsx(
          "div",
          {
            className: `flex h-9 w-9 items-center justify-center rounded-md ${h.bg} ${h.color}`,
            children: /* @__PURE__ */ v.jsx(h.icon, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ v.jsx("span", { className: "text-lg font-bold text-foreground tabular-nums", children: h.value }),
          /* @__PURE__ */ v.jsx("span", { className: "text-[11px] text-muted-foreground", children: h.label })
        ] })
      ]
    },
    h.label
  )) });
}
function qS({ collections: u, title: c }) {
  const [o, r] = p.useState(null);
  return /* @__PURE__ */ v.jsxs("div", { className: "dark flex h-screen w-full overflow-hidden bg-background text-foreground", children: [
    /* @__PURE__ */ v.jsx(
      Zb,
      {
        collections: u,
        selectedId: (o == null ? void 0 : o.id) ?? null,
        onSelect: r,
        title: c
      }
    ),
    /* @__PURE__ */ v.jsx("main", { className: "flex flex-1 flex-col overflow-hidden", children: o ? /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx("div", { className: "border-b border-border p-4", children: /* @__PURE__ */ v.jsx(Th, { collections: u }) }),
      /* @__PURE__ */ v.jsx("div", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ v.jsx(wS, { collection: o }) })
    ] }) : /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx("div", { className: "border-b border-border p-4", children: /* @__PURE__ */ v.jsx(Th, { collections: u }) }),
      /* @__PURE__ */ v.jsx("div", { className: "flex-1", children: /* @__PURE__ */ v.jsx(BS, {}) })
    ] }) })
  ] });
}
function YS(u) {
  return "/" + u.replace(".schema.json", "").split("/").map((c) => {
    const r = `${c.endsWith("s") ? c.slice(0, -1) : c}Id`.replace(/-/g, "_");
    return `${c}/{${r}}`;
  }).join("/");
}
function Ah(u) {
  const c = [...u].sort(
    (f, m) => f.path.split("/").length - m.path.split("/").length
  ), o = [], r = /* @__PURE__ */ new Map();
  for (const { path: f, content: m } of c) {
    const y = {
      id: m.collection,
      name: m.collection,
      description: m.description || "",
      path: YS(f),
      schema: m.schema,
      subcollections: [],
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      documentCount: m.documentCount
    }, h = f.split("/").slice(0, -1).join("/");
    if (!h)
      o.push(y);
    else {
      const S = h + ".schema.json", g = r.get(S);
      g ? (g.subcollections || (g.subcollections = []), g.subcollections.push(y)) : (console.warn(`[FSV] Parent collection not found for "${f}". Expected "${S}" to exist.`), o.push(y));
    }
    r.set(f, y);
  }
  return o;
}
function GS(u) {
  return typeof u[0] == "object" && u[0] !== null && "schema" in u[0] && "collection" in u[0];
}
function XS(u) {
  return typeof u[0] == "object" && u[0] !== null && "path" in u[0] && "id" in u[0];
}
async function VS(u) {
  if (u.length === 0) return [];
  if (XS(u))
    return u;
  if (typeof u[0] == "string") {
    const c = await Promise.all(
      u.map(async (o) => ({
        path: o.replace(/^.*schemas\//, ""),
        content: await fetch(o).then((r) => r.json())
      }))
    );
    return Ah(c);
  }
  if (GS(u)) {
    const c = u.map((o, r) => ({
      path: o._path || `${o.collection}.schema.json`,
      content: o
    }));
    return Ah(c);
  }
  return u;
}
async function QS(u, c) {
  const o = document.querySelector(u);
  if (!o) throw new Error(`[FSV] Element not found: ${u}`);
  const r = await VS(c.schemas);
  Gy.createRoot(o).render(
    fl.createElement(qS, { collections: r, title: c.title })
  );
}
window.FirestoreSchemaViewer = { render: QS };
export {
  QS as render
};
