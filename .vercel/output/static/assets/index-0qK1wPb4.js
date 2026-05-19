const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/login-qA9FsfLi.js",
      "assets/button-CmpoKRFv.js",
      "assets/input-BJpobJm8.js",
      "assets/proxy-CNoJBy2S.js",
      "assets/createLucideIcon-_P2Vc871.js",
      "assets/arrow-right-Q-N9FBuB.js",
      "assets/dashboard-C4YZvTXn.js",
      "assets/users-D_hOZg8s.js",
      "assets/search-DOKoJ-68.js",
      "assets/areas-de-atuacao-Cy6LlbYp.js",
      "assets/Contact-XmhCTeU7.js",
      "assets/chevron-right-CT9zOBCR.js",
      "assets/map-pin-RWc1RILk.js",
      "assets/index-ITSRaNyF.js",
      "assets/arrow-up-right-D6EW5tBq.js",
      "assets/index-BQHj7eJk.js",
      "assets/plus-CmbJoqKT.js",
      "assets/clock-Blu_oA68.js",
      "assets/clients-Dtt5AyZh.js",
      "assets/ellipsis-vertical-BapVau-a.js",
      "assets/cases-VEy8A-F4.js",
      "assets/agenda-CmIbY1E_.js",
    ]),
) => i.map((i) => d[i]);
function r0(a, i) {
  for (var u = 0; u < i.length; u++) {
    const s = i[u];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const c in s)
        if (c !== "default" && !(c in a)) {
          const f = Object.getOwnPropertyDescriptor(s, c);
          f && Object.defineProperty(a, c, f.get ? f : { enumerable: !0, get: () => s[c] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
function Cp(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Po = { exports: {} },
  zi = {};
var Lm;
function s0() {
  if (Lm) return zi;
  Lm = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function u(s, c, f) {
    var h = null;
    if ((f !== void 0 && (h = "" + f), c.key !== void 0 && (h = "" + c.key), "key" in c)) {
      f = {};
      for (var p in c) p !== "key" && (f[p] = c[p]);
    } else f = c;
    return ((c = f.ref), { $$typeof: a, type: s, key: h, ref: c !== void 0 ? c : null, props: f });
  }
  return ((zi.Fragment = i), (zi.jsx = u), (zi.jsxs = u), zi);
}
var Um;
function o0() {
  return (Um || ((Um = 1), (Po.exports = s0())), Po.exports);
}
var Z = o0(),
  Fo = { exports: {} },
  st = {};
var Nm;
function c0() {
  if (Nm) return st;
  Nm = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    S = Symbol.for("react.lazy"),
    g = Symbol.for("react.activity"),
    _ = Symbol.iterator;
  function E(M) {
    return M === null || typeof M != "object"
      ? null
      : ((M = (_ && M[_]) || M["@@iterator"]), typeof M == "function" ? M : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    w = Object.assign,
    A = {};
  function z(M, Y, k) {
    ((this.props = M), (this.context = Y), (this.refs = A), (this.updater = k || O));
  }
  ((z.prototype.isReactComponent = {}),
    (z.prototype.setState = function (M, Y) {
      if (typeof M != "object" && typeof M != "function" && M != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, M, Y, "setState");
    }),
    (z.prototype.forceUpdate = function (M) {
      this.updater.enqueueForceUpdate(this, M, "forceUpdate");
    }));
  function V() {}
  V.prototype = z.prototype;
  function Q(M, Y, k) {
    ((this.props = M), (this.context = Y), (this.refs = A), (this.updater = k || O));
  }
  var H = (Q.prototype = new V());
  ((H.constructor = Q), w(H, z.prototype), (H.isPureReactComponent = !0));
  var I = Array.isArray;
  function F() {}
  var X = { H: null, A: null, T: null, S: null },
    J = Object.prototype.hasOwnProperty;
  function P(M, Y, k) {
    var $ = k.ref;
    return { $$typeof: a, type: M, key: Y, ref: $ !== void 0 ? $ : null, props: k };
  }
  function ut(M, Y) {
    return P(M.type, Y, M.props);
  }
  function tt(M) {
    return typeof M == "object" && M !== null && M.$$typeof === a;
  }
  function dt(M) {
    var Y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      M.replace(/[=:]/g, function (k) {
        return Y[k];
      })
    );
  }
  var vt = /\/+/g;
  function Yt(M, Y) {
    return typeof M == "object" && M !== null && M.key != null ? dt("" + M.key) : Y.toString(36);
  }
  function Ot(M) {
    switch (M.status) {
      case "fulfilled":
        return M.value;
      case "rejected":
        throw M.reason;
      default:
        switch (
          (typeof M.status == "string"
            ? M.then(F, F)
            : ((M.status = "pending"),
              M.then(
                function (Y) {
                  M.status === "pending" && ((M.status = "fulfilled"), (M.value = Y));
                },
                function (Y) {
                  M.status === "pending" && ((M.status = "rejected"), (M.reason = Y));
                },
              )),
          M.status)
        ) {
          case "fulfilled":
            return M.value;
          case "rejected":
            throw M.reason;
        }
    }
    throw M;
  }
  function j(M, Y, k, $, nt) {
    var ft = typeof M;
    (ft === "undefined" || ft === "boolean") && (M = null);
    var St = !1;
    if (M === null) St = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          St = !0;
          break;
        case "object":
          switch (M.$$typeof) {
            case a:
            case i:
              St = !0;
              break;
            case S:
              return ((St = M._init), j(St(M._payload), Y, k, $, nt));
          }
      }
    if (St)
      return (
        (nt = nt(M)),
        (St = $ === "" ? "." + Yt(M, 0) : $),
        I(nt)
          ? ((k = ""),
            St != null && (k = St.replace(vt, "$&/") + "/"),
            j(nt, Y, k, "", function (tn) {
              return tn;
            }))
          : nt != null &&
            (tt(nt) &&
              (nt = ut(
                nt,
                k +
                  (nt.key == null || (M && M.key === nt.key)
                    ? ""
                    : ("" + nt.key).replace(vt, "$&/") + "/") +
                  St,
              )),
            Y.push(nt)),
        1
      );
    St = 0;
    var Xt = $ === "" ? "." : $ + ":";
    if (I(M))
      for (var Dt = 0; Dt < M.length; Dt++)
        (($ = M[Dt]), (ft = Xt + Yt($, Dt)), (St += j($, Y, k, ft, nt)));
    else if (((Dt = E(M)), typeof Dt == "function"))
      for (M = Dt.call(M), Dt = 0; !($ = M.next()).done; )
        (($ = $.value), (ft = Xt + Yt($, Dt++)), (St += j($, Y, k, ft, nt)));
    else if (ft === "object") {
      if (typeof M.then == "function") return j(Ot(M), Y, k, $, nt);
      throw (
        (Y = String(M)),
        Error(
          "Objects are not valid as a React child (found: " +
            (Y === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : Y) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return St;
  }
  function K(M, Y, k) {
    if (M == null) return M;
    var $ = [],
      nt = 0;
    return (
      j(M, $, "", "", function (ft) {
        return Y.call(k, ft, nt++);
      }),
      $
    );
  }
  function it(M) {
    if (M._status === -1) {
      var Y = M._result;
      ((Y = Y()),
        Y.then(
          function (k) {
            (M._status === 0 || M._status === -1) && ((M._status = 1), (M._result = k));
          },
          function (k) {
            (M._status === 0 || M._status === -1) && ((M._status = 2), (M._result = k));
          },
        ),
        M._status === -1 && ((M._status = 0), (M._result = Y)));
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var Rt =
      typeof reportError == "function"
        ? reportError
        : function (M) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var Y = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof M == "object" && M !== null && typeof M.message == "string"
                    ? String(M.message)
                    : String(M),
                error: M,
              });
              if (!window.dispatchEvent(Y)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", M);
              return;
            }
            console.error(M);
          },
    At = {
      map: K,
      forEach: function (M, Y, k) {
        K(
          M,
          function () {
            Y.apply(this, arguments);
          },
          k,
        );
      },
      count: function (M) {
        var Y = 0;
        return (
          K(M, function () {
            Y++;
          }),
          Y
        );
      },
      toArray: function (M) {
        return (
          K(M, function (Y) {
            return Y;
          }) || []
        );
      },
      only: function (M) {
        if (!tt(M))
          throw Error("React.Children.only expected to receive a single React element child.");
        return M;
      },
    };
  return (
    (st.Activity = g),
    (st.Children = At),
    (st.Component = z),
    (st.Fragment = u),
    (st.Profiler = c),
    (st.PureComponent = Q),
    (st.StrictMode = s),
    (st.Suspense = y),
    (st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X),
    (st.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (M) {
        return X.H.useMemoCache(M);
      },
    }),
    (st.cache = function (M) {
      return function () {
        return M.apply(null, arguments);
      };
    }),
    (st.cacheSignal = function () {
      return null;
    }),
    (st.cloneElement = function (M, Y, k) {
      if (M == null) throw Error("The argument must be a React element, but you passed " + M + ".");
      var $ = w({}, M.props),
        nt = M.key;
      if (Y != null)
        for (ft in (Y.key !== void 0 && (nt = "" + Y.key), Y))
          !J.call(Y, ft) ||
            ft === "key" ||
            ft === "__self" ||
            ft === "__source" ||
            (ft === "ref" && Y.ref === void 0) ||
            ($[ft] = Y[ft]);
      var ft = arguments.length - 2;
      if (ft === 1) $.children = k;
      else if (1 < ft) {
        for (var St = Array(ft), Xt = 0; Xt < ft; Xt++) St[Xt] = arguments[Xt + 2];
        $.children = St;
      }
      return P(M.type, nt, $);
    }),
    (st.createContext = function (M) {
      return (
        (M = {
          $$typeof: h,
          _currentValue: M,
          _currentValue2: M,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (M.Provider = M),
        (M.Consumer = { $$typeof: f, _context: M }),
        M
      );
    }),
    (st.createElement = function (M, Y, k) {
      var $,
        nt = {},
        ft = null;
      if (Y != null)
        for ($ in (Y.key !== void 0 && (ft = "" + Y.key), Y))
          J.call(Y, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (nt[$] = Y[$]);
      var St = arguments.length - 2;
      if (St === 1) nt.children = k;
      else if (1 < St) {
        for (var Xt = Array(St), Dt = 0; Dt < St; Dt++) Xt[Dt] = arguments[Dt + 2];
        nt.children = Xt;
      }
      if (M && M.defaultProps)
        for ($ in ((St = M.defaultProps), St)) nt[$] === void 0 && (nt[$] = St[$]);
      return P(M, ft, nt);
    }),
    (st.createRef = function () {
      return { current: null };
    }),
    (st.forwardRef = function (M) {
      return { $$typeof: p, render: M };
    }),
    (st.isValidElement = tt),
    (st.lazy = function (M) {
      return { $$typeof: S, _payload: { _status: -1, _result: M }, _init: it };
    }),
    (st.memo = function (M, Y) {
      return { $$typeof: m, type: M, compare: Y === void 0 ? null : Y };
    }),
    (st.startTransition = function (M) {
      var Y = X.T,
        k = {};
      X.T = k;
      try {
        var $ = M(),
          nt = X.S;
        (nt !== null && nt(k, $),
          typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(F, Rt));
      } catch (ft) {
        Rt(ft);
      } finally {
        (Y !== null && k.types !== null && (Y.types = k.types), (X.T = Y));
      }
    }),
    (st.unstable_useCacheRefresh = function () {
      return X.H.useCacheRefresh();
    }),
    (st.use = function (M) {
      return X.H.use(M);
    }),
    (st.useActionState = function (M, Y, k) {
      return X.H.useActionState(M, Y, k);
    }),
    (st.useCallback = function (M, Y) {
      return X.H.useCallback(M, Y);
    }),
    (st.useContext = function (M) {
      return X.H.useContext(M);
    }),
    (st.useDebugValue = function () {}),
    (st.useDeferredValue = function (M, Y) {
      return X.H.useDeferredValue(M, Y);
    }),
    (st.useEffect = function (M, Y) {
      return X.H.useEffect(M, Y);
    }),
    (st.useEffectEvent = function (M) {
      return X.H.useEffectEvent(M);
    }),
    (st.useId = function () {
      return X.H.useId();
    }),
    (st.useImperativeHandle = function (M, Y, k) {
      return X.H.useImperativeHandle(M, Y, k);
    }),
    (st.useInsertionEffect = function (M, Y) {
      return X.H.useInsertionEffect(M, Y);
    }),
    (st.useLayoutEffect = function (M, Y) {
      return X.H.useLayoutEffect(M, Y);
    }),
    (st.useMemo = function (M, Y) {
      return X.H.useMemo(M, Y);
    }),
    (st.useOptimistic = function (M, Y) {
      return X.H.useOptimistic(M, Y);
    }),
    (st.useReducer = function (M, Y, k) {
      return X.H.useReducer(M, Y, k);
    }),
    (st.useRef = function (M) {
      return X.H.useRef(M);
    }),
    (st.useState = function (M) {
      return X.H.useState(M);
    }),
    (st.useSyncExternalStore = function (M, Y, k) {
      return X.H.useSyncExternalStore(M, Y, k);
    }),
    (st.useTransition = function () {
      return X.H.useTransition();
    }),
    (st.version = "19.2.5"),
    st
  );
}
var jm;
function Qi() {
  return (jm || ((jm = 1), (Fo.exports = c0())), Fo.exports);
}
var at = Qi();
const Dl = Cp(at),
  h2 = r0({ __proto__: null, default: Dl }, [at]);
var $o = { exports: {} },
  Ci = {},
  Io = { exports: {} },
  Wo = {};
var Bm;
function f0() {
  return (
    Bm ||
      ((Bm = 1),
      (function (a) {
        function i(j, K) {
          var it = j.length;
          j.push(K);
          t: for (; 0 < it; ) {
            var Rt = (it - 1) >>> 1,
              At = j[Rt];
            if (0 < c(At, K)) ((j[Rt] = K), (j[it] = At), (it = Rt));
            else break t;
          }
        }
        function u(j) {
          return j.length === 0 ? null : j[0];
        }
        function s(j) {
          if (j.length === 0) return null;
          var K = j[0],
            it = j.pop();
          if (it !== K) {
            j[0] = it;
            t: for (var Rt = 0, At = j.length, M = At >>> 1; Rt < M; ) {
              var Y = 2 * (Rt + 1) - 1,
                k = j[Y],
                $ = Y + 1,
                nt = j[$];
              if (0 > c(k, it))
                $ < At && 0 > c(nt, k)
                  ? ((j[Rt] = nt), (j[$] = it), (Rt = $))
                  : ((j[Rt] = k), (j[Y] = it), (Rt = Y));
              else if ($ < At && 0 > c(nt, it)) ((j[Rt] = nt), (j[$] = it), (Rt = $));
              else break t;
            }
          }
          return K;
        }
        function c(j, K) {
          var it = j.sortIndex - K.sortIndex;
          return it !== 0 ? it : j.id - K.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" && typeof performance.now == "function")
        ) {
          var f = performance;
          a.unstable_now = function () {
            return f.now();
          };
        } else {
          var h = Date,
            p = h.now();
          a.unstable_now = function () {
            return h.now() - p;
          };
        }
        var y = [],
          m = [],
          S = 1,
          g = null,
          _ = 3,
          E = !1,
          O = !1,
          w = !1,
          A = !1,
          z = typeof setTimeout == "function" ? setTimeout : null,
          V = typeof clearTimeout == "function" ? clearTimeout : null,
          Q = typeof setImmediate < "u" ? setImmediate : null;
        function H(j) {
          for (var K = u(m); K !== null; ) {
            if (K.callback === null) s(m);
            else if (K.startTime <= j) (s(m), (K.sortIndex = K.expirationTime), i(y, K));
            else break;
            K = u(m);
          }
        }
        function I(j) {
          if (((w = !1), H(j), !O))
            if (u(y) !== null) ((O = !0), F || ((F = !0), dt()));
            else {
              var K = u(m);
              K !== null && Ot(I, K.startTime - j);
            }
        }
        var F = !1,
          X = -1,
          J = 5,
          P = -1;
        function ut() {
          return A ? !0 : !(a.unstable_now() - P < J);
        }
        function tt() {
          if (((A = !1), F)) {
            var j = a.unstable_now();
            P = j;
            var K = !0;
            try {
              t: {
                ((O = !1), w && ((w = !1), V(X), (X = -1)), (E = !0));
                var it = _;
                try {
                  e: {
                    for (H(j), g = u(y); g !== null && !(g.expirationTime > j && ut()); ) {
                      var Rt = g.callback;
                      if (typeof Rt == "function") {
                        ((g.callback = null), (_ = g.priorityLevel));
                        var At = Rt(g.expirationTime <= j);
                        if (((j = a.unstable_now()), typeof At == "function")) {
                          ((g.callback = At), H(j), (K = !0));
                          break e;
                        }
                        (g === u(y) && s(y), H(j));
                      } else s(y);
                      g = u(y);
                    }
                    if (g !== null) K = !0;
                    else {
                      var M = u(m);
                      (M !== null && Ot(I, M.startTime - j), (K = !1));
                    }
                  }
                  break t;
                } finally {
                  ((g = null), (_ = it), (E = !1));
                }
                K = void 0;
              }
            } finally {
              K ? dt() : (F = !1);
            }
          }
        }
        var dt;
        if (typeof Q == "function")
          dt = function () {
            Q(tt);
          };
        else if (typeof MessageChannel < "u") {
          var vt = new MessageChannel(),
            Yt = vt.port2;
          ((vt.port1.onmessage = tt),
            (dt = function () {
              Yt.postMessage(null);
            }));
        } else
          dt = function () {
            z(tt, 0);
          };
        function Ot(j, K) {
          X = z(function () {
            j(a.unstable_now());
          }, K);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (j) {
            j.callback = null;
          }),
          (a.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (J = 0 < j ? Math.floor(1e3 / j) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return _;
          }),
          (a.unstable_next = function (j) {
            switch (_) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = _;
            }
            var it = _;
            _ = K;
            try {
              return j();
            } finally {
              _ = it;
            }
          }),
          (a.unstable_requestPaint = function () {
            A = !0;
          }),
          (a.unstable_runWithPriority = function (j, K) {
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
            var it = _;
            _ = j;
            try {
              return K();
            } finally {
              _ = it;
            }
          }),
          (a.unstable_scheduleCallback = function (j, K, it) {
            var Rt = a.unstable_now();
            switch (
              (typeof it == "object" && it !== null
                ? ((it = it.delay), (it = typeof it == "number" && 0 < it ? Rt + it : Rt))
                : (it = Rt),
              j)
            ) {
              case 1:
                var At = -1;
                break;
              case 2:
                At = 250;
                break;
              case 5:
                At = 1073741823;
                break;
              case 4:
                At = 1e4;
                break;
              default:
                At = 5e3;
            }
            return (
              (At = it + At),
              (j = {
                id: S++,
                callback: K,
                priorityLevel: j,
                startTime: it,
                expirationTime: At,
                sortIndex: -1,
              }),
              it > Rt
                ? ((j.sortIndex = it),
                  i(m, j),
                  u(y) === null && j === u(m) && (w ? (V(X), (X = -1)) : (w = !0), Ot(I, it - Rt)))
                : ((j.sortIndex = At), i(y, j), O || E || ((O = !0), F || ((F = !0), dt()))),
              j
            );
          }),
          (a.unstable_shouldYield = ut),
          (a.unstable_wrapCallback = function (j) {
            var K = _;
            return function () {
              var it = _;
              _ = K;
              try {
                return j.apply(this, arguments);
              } finally {
                _ = it;
              }
            };
          }));
      })(Wo)),
    Wo
  );
}
var Hm;
function d0() {
  return (Hm || ((Hm = 1), (Io.exports = f0())), Io.exports);
}
var tc = { exports: {} },
  fe = {};
var qm;
function h0() {
  if (qm) return fe;
  qm = 1;
  var a = Qi();
  function i(y) {
    var m = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++) m += "&args[]=" + encodeURIComponent(arguments[S]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var s = {
      d: {
        f: u,
        r: function () {
          throw Error(i(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function f(y, m, S) {
    var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: g == null ? null : "" + g,
      children: y,
      containerInfo: m,
      implementation: S,
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(y, m) {
    if (y === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (fe.createPortal = function (y, m) {
      var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)) throw Error(i(299));
      return f(y, m, null, S);
    }),
    (fe.flushSync = function (y) {
      var m = h.T,
        S = s.p;
      try {
        if (((h.T = null), (s.p = 2), y)) return y();
      } finally {
        ((h.T = m), (s.p = S), s.d.f());
      }
    }),
    (fe.preconnect = function (y, m) {
      typeof y == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m = typeof m == "string" ? (m === "use-credentials" ? m : "") : void 0))
          : (m = null),
        s.d.C(y, m));
    }),
    (fe.prefetchDNS = function (y) {
      typeof y == "string" && s.d.D(y);
    }),
    (fe.preinit = function (y, m) {
      if (typeof y == "string" && m && typeof m.as == "string") {
        var S = m.as,
          g = p(S, m.crossOrigin),
          _ = typeof m.integrity == "string" ? m.integrity : void 0,
          E = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        S === "style"
          ? s.d.S(y, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: g,
              integrity: _,
              fetchPriority: E,
            })
          : S === "script" &&
            s.d.X(y, {
              crossOrigin: g,
              integrity: _,
              fetchPriority: E,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (fe.preinitModule = function (y, m) {
      if (typeof y == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var S = p(m.as, m.crossOrigin);
            s.d.M(y, {
              crossOrigin: S,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && s.d.M(y);
    }),
    (fe.preload = function (y, m) {
      if (typeof y == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
        var S = m.as,
          g = p(S, m.crossOrigin);
        s.d.L(y, S, {
          crossOrigin: g,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (fe.preloadModule = function (y, m) {
      if (typeof y == "string")
        if (m) {
          var S = p(m.as, m.crossOrigin);
          s.d.m(y, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: S,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else s.d.m(y);
    }),
    (fe.requestFormReset = function (y) {
      s.d.r(y);
    }),
    (fe.unstable_batchedUpdates = function (y, m) {
      return y(m);
    }),
    (fe.useFormState = function (y, m, S) {
      return h.H.useFormState(y, m, S);
    }),
    (fe.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (fe.version = "19.2.5"),
    fe
  );
}
var Ym;
function wp() {
  if (Ym) return tc.exports;
  Ym = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (tc.exports = h0()), tc.exports);
}
var Gm;
function m0() {
  if (Gm) return Ci;
  Gm = 1;
  var a = d0(),
    i = Qi(),
    u = wp();
  function s(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function f(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null))
        return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null))
        return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (f(t) !== t) throw Error(s(188));
  }
  function m(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = f(t)), e === null)) throw Error(s(188));
      return e !== t ? null : t;
    }
    for (var n = t, l = e; ; ) {
      var r = n.return;
      if (r === null) break;
      var o = r.alternate;
      if (o === null) {
        if (((l = r.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (r.child === o.child) {
        for (o = r.child; o; ) {
          if (o === n) return (y(r), t);
          if (o === l) return (y(r), e);
          o = o.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== l.return) ((n = r), (l = o));
      else {
        for (var d = !1, v = r.child; v; ) {
          if (v === n) {
            ((d = !0), (n = r), (l = o));
            break;
          }
          if (v === l) {
            ((d = !0), (l = r), (n = o));
            break;
          }
          v = v.sibling;
        }
        if (!d) {
          for (v = o.child; v; ) {
            if (v === n) {
              ((d = !0), (n = o), (l = r));
              break;
            }
            if (v === l) {
              ((d = !0), (l = o), (n = r));
              break;
            }
            v = v.sibling;
          }
          if (!d) throw Error(s(189));
        }
      }
      if (n.alternate !== l) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? t : e;
  }
  function S(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = S(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var g = Object.assign,
    _ = Symbol.for("react.element"),
    E = Symbol.for("react.transitional.element"),
    O = Symbol.for("react.portal"),
    w = Symbol.for("react.fragment"),
    A = Symbol.for("react.strict_mode"),
    z = Symbol.for("react.profiler"),
    V = Symbol.for("react.consumer"),
    Q = Symbol.for("react.context"),
    H = Symbol.for("react.forward_ref"),
    I = Symbol.for("react.suspense"),
    F = Symbol.for("react.suspense_list"),
    X = Symbol.for("react.memo"),
    J = Symbol.for("react.lazy"),
    P = Symbol.for("react.activity"),
    ut = Symbol.for("react.memo_cache_sentinel"),
    tt = Symbol.iterator;
  function dt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (tt && t[tt]) || t["@@iterator"]), typeof t == "function" ? t : null);
  }
  var vt = Symbol.for("react.client.reference");
  function Yt(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === vt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case w:
        return "Fragment";
      case z:
        return "Profiler";
      case A:
        return "StrictMode";
      case I:
        return "Suspense";
      case F:
        return "SuspenseList";
      case P:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case O:
          return "Portal";
        case Q:
          return t.displayName || "Context";
        case V:
          return (t._context.displayName || "Context") + ".Consumer";
        case H:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case X:
          return ((e = t.displayName || null), e !== null ? e : Yt(t.type) || "Memo");
        case J:
          ((e = t._payload), (t = t._init));
          try {
            return Yt(t(e));
          } catch {}
      }
    return null;
  }
  var Ot = Array.isArray,
    j = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    it = { pending: !1, data: null, method: null, action: null },
    Rt = [],
    At = -1;
  function M(t) {
    return { current: t };
  }
  function Y(t) {
    0 > At || ((t.current = Rt[At]), (Rt[At] = null), At--);
  }
  function k(t, e) {
    (At++, (Rt[At] = t.current), (t.current = e));
  }
  var $ = M(null),
    nt = M(null),
    ft = M(null),
    St = M(null);
  function Xt(t, e) {
    switch ((k(ft, e), k(nt, t), k($, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? nm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI))) ((e = nm(e)), (t = am(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (Y($), k($, t));
  }
  function Dt() {
    (Y($), Y(nt), Y(ft));
  }
  function tn(t) {
    t.memoizedState !== null && k(St, t);
    var e = $.current,
      n = am(e, t.type);
    e !== n && (k(nt, t), k($, n));
  }
  function en(t) {
    (nt.current === t && (Y($), Y(nt)), St.current === t && (Y(St), (Ai._currentValue = it)));
  }
  var xn, Ul;
  function Ke(t) {
    if (xn === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ((xn = (e && e[1]) || ""),
          (Ul =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      xn +
      t +
      Ul
    );
  }
  var Nl = !1;
  function Ya(t, e) {
    if (!t || Nl) return "";
    Nl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var G = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(G.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(G, []);
                } catch (N) {
                  var U = N;
                }
                Reflect.construct(t, [], G);
              } else {
                try {
                  G.call();
                } catch (N) {
                  U = N;
                }
                t.call(G.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                U = N;
              }
              (G = t()) && typeof G.catch == "function" && G.catch(function () {});
            }
          } catch (N) {
            if (N && U && typeof N.stack == "string") return [N.stack, U.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
      r &&
        r.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var o = l.DetermineComponentFrameRoot(),
        d = o[0],
        v = o[1];
      if (d && v) {
        var R = d.split(`
`),
          L = v.split(`
`);
        for (r = l = 0; l < R.length && !R[l].includes("DetermineComponentFrameRoot"); ) l++;
        for (; r < L.length && !L[r].includes("DetermineComponentFrameRoot"); ) r++;
        if (l === R.length || r === L.length)
          for (l = R.length - 1, r = L.length - 1; 1 <= l && 0 <= r && R[l] !== L[r]; ) r--;
        for (; 1 <= l && 0 <= r; l--, r--)
          if (R[l] !== L[r]) {
            if (l !== 1 || r !== 1)
              do
                if ((l--, r--, 0 > r || R[l] !== L[r])) {
                  var B =
                    `
` + R[l].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      B.includes("<anonymous>") &&
                      (B = B.replace("<anonymous>", t.displayName)),
                    B
                  );
                }
              while (1 <= l && 0 <= r);
            break;
          }
      }
    } finally {
      ((Nl = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : "") ? Ke(n) : "";
  }
  function ki(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ke(t.type);
      case 16:
        return Ke("Lazy");
      case 13:
        return t.child !== e && e !== null ? Ke("Suspense Fallback") : Ke("Suspense");
      case 19:
        return Ke("SuspenseList");
      case 0:
      case 15:
        return Ya(t.type, !1);
      case 11:
        return Ya(t.type.render, !1);
      case 1:
        return Ya(t.type, !0);
      case 31:
        return Ke("Activity");
      default:
        return "";
    }
  }
  function nn(t) {
    try {
      var e = "",
        n = null;
      do ((e += ki(t, n)), (n = t), (t = t.return));
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var fa = Object.prototype.hasOwnProperty,
    Ve = a.unstable_scheduleCallback,
    jl = a.unstable_cancelCallback,
    Pi = a.unstable_shouldYield,
    Nr = a.unstable_requestPaint,
    ce = a.unstable_now,
    Nt = a.unstable_getCurrentPriorityLevel,
    ae = a.unstable_ImmediatePriority,
    Je = a.unstable_UserBlockingPriority,
    Ga = a.unstable_NormalPriority,
    Vy = a.unstable_LowPriority,
    Nc = a.unstable_IdlePriority,
    Xy = a.log,
    Qy = a.unstable_setDisableYieldValue,
    Bl = null,
    Re = null;
  function Mn(t) {
    if ((typeof Xy == "function" && Qy(t), Re && typeof Re.setStrictMode == "function"))
      try {
        Re.setStrictMode(Bl, t);
      } catch {}
  }
  var Te = Math.clz32 ? Math.clz32 : Jy,
    Zy = Math.log,
    Ky = Math.LN2;
  function Jy(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Zy(t) / Ky) | 0)) | 0);
  }
  var Fi = 256,
    $i = 262144,
    Ii = 4194304;
  function da(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function Wi(t, e, n) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var r = 0,
      o = t.suspendedLanes,
      d = t.pingedLanes;
    t = t.warmLanes;
    var v = l & 134217727;
    return (
      v !== 0
        ? ((l = v & ~o),
          l !== 0
            ? (r = da(l))
            : ((d &= v), d !== 0 ? (r = da(d)) : n || ((n = v & ~t), n !== 0 && (r = da(n)))))
        : ((v = l & ~o),
          v !== 0
            ? (r = da(v))
            : d !== 0
              ? (r = da(d))
              : n || ((n = l & ~t), n !== 0 && (r = da(n)))),
      r === 0
        ? 0
        : e !== 0 &&
            e !== r &&
            (e & o) === 0 &&
            ((o = r & -r), (n = e & -e), o >= n || (o === 32 && (n & 4194048) !== 0))
          ? e
          : r
    );
  }
  function Hl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function ky(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
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
        return e + 5e3;
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
  function jc() {
    var t = Ii;
    return ((Ii <<= 1), (Ii & 62914560) === 0 && (Ii = 4194304), t);
  }
  function jr(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function ql(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Py(t, e, n, l, r, o) {
    var d = t.pendingLanes;
    ((t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0));
    var v = t.entanglements,
      R = t.expirationTimes,
      L = t.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var B = 31 - Te(n),
        G = 1 << B;
      ((v[B] = 0), (R[B] = -1));
      var U = L[B];
      if (U !== null)
        for (L[B] = null, B = 0; B < U.length; B++) {
          var N = U[B];
          N !== null && (N.lane &= -536870913);
        }
      n &= ~G;
    }
    (l !== 0 && Bc(t, l, 0),
      o !== 0 && r === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(d & ~e)));
  }
  function Bc(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var l = 31 - Te(e);
    ((t.entangledLanes |= e),
      (t.entanglements[l] = t.entanglements[l] | 1073741824 | (n & 261930)));
  }
  function Hc(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var l = 31 - Te(n),
        r = 1 << l;
      ((r & e) | (t[l] & e) && (t[l] |= e), (n &= ~r));
    }
  }
  function qc(t, e) {
    var n = e & -e;
    return ((n = (n & 42) !== 0 ? 1 : Br(n)), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n);
  }
  function Br(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Hr(t) {
    return ((t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function Yc() {
    var t = K.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : xm(t.type));
  }
  function Gc(t, e) {
    var n = K.p;
    try {
      return ((K.p = t), e());
    } finally {
      K.p = n;
    }
  }
  var On = Math.random().toString(36).slice(2),
    le = "__reactFiber$" + On,
    he = "__reactProps$" + On,
    Va = "__reactContainer$" + On,
    qr = "__reactEvents$" + On,
    Fy = "__reactListeners$" + On,
    $y = "__reactHandles$" + On,
    Vc = "__reactResources$" + On,
    Yl = "__reactMarker$" + On;
  function Yr(t) {
    (delete t[le], delete t[he], delete t[qr], delete t[Fy], delete t[$y]);
  }
  function Xa(t) {
    var e = t[le];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Va] || n[le])) {
        if (((n = e.alternate), e.child !== null || (n !== null && n.child !== null)))
          for (t = cm(t); t !== null; ) {
            if ((n = t[le])) return n;
            t = cm(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function Qa(t) {
    if ((t = t[le] || t[Va])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function Gl(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(s(33));
  }
  function Za(t) {
    var e = t[Vc];
    return (e || (e = t[Vc] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), e);
  }
  function te(t) {
    t[Yl] = !0;
  }
  var Xc = new Set(),
    Qc = {};
  function ha(t, e) {
    (Ka(t, e), Ka(t + "Capture", e));
  }
  function Ka(t, e) {
    for (Qc[t] = e, t = 0; t < e.length; t++) Xc.add(e[t]);
  }
  var Iy = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Zc = {},
    Kc = {};
  function Wy(t) {
    return fa.call(Kc, t)
      ? !0
      : fa.call(Zc, t)
        ? !1
        : Iy.test(t)
          ? (Kc[t] = !0)
          : ((Zc[t] = !0), !1);
  }
  function tu(t, e, n) {
    if (Wy(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function eu(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function an(t, e, n, l) {
    if (l === null) t.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + l);
    }
  }
  function De(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Jc(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function tv(t, e, n) {
    var l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var r = l.get,
        o = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return r.call(this);
          },
          set: function (d) {
            ((n = "" + d), o.call(this, d));
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (d) {
            n = "" + d;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function Gr(t) {
    if (!t._valueTracker) {
      var e = Jc(t) ? "checked" : "value";
      t._valueTracker = tv(t, e, "" + t[e]);
    }
  }
  function kc(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      l = "";
    return (
      t && (l = Jc(t) ? (t.checked ? "true" : "false") : t.value),
      (t = l),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function nu(t) {
    if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")) return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var ev = /[\n"\\]/g;
  function Le(t) {
    return t.replace(ev, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Vr(t, e, n, l, r, o, d, v) {
    ((t.name = ""),
      d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean"
        ? (t.type = d)
        : t.removeAttribute("type"),
      e != null
        ? d === "number"
          ? ((e === 0 && t.value === "") || t.value != e) && (t.value = "" + De(e))
          : t.value !== "" + De(e) && (t.value = "" + De(e))
        : (d !== "submit" && d !== "reset") || t.removeAttribute("value"),
      e != null
        ? Xr(t, d, De(e))
        : n != null
          ? Xr(t, d, De(n))
          : l != null && t.removeAttribute("value"),
      r == null && o != null && (t.defaultChecked = !!o),
      r != null && (t.checked = r && typeof r != "function" && typeof r != "symbol"),
      v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean"
        ? (t.name = "" + De(v))
        : t.removeAttribute("name"));
  }
  function Pc(t, e, n, l, r, o, d, v) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (t.type = o),
      e != null || n != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || e != null)) {
        Gr(t);
        return;
      }
      ((n = n != null ? "" + De(n) : ""),
        (e = e != null ? "" + De(e) : n),
        v || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((l = l ?? r),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (t.checked = v ? t.checked : !!l),
      (t.defaultChecked = !!l),
      d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (t.name = d),
      Gr(t));
  }
  function Xr(t, e, n) {
    (e === "number" && nu(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function Ja(t, e, n, l) {
    if (((t = t.options), e)) {
      e = {};
      for (var r = 0; r < n.length; r++) e["$" + n[r]] = !0;
      for (n = 0; n < t.length; n++)
        ((r = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== r && (t[n].selected = r),
          r && l && (t[n].defaultSelected = !0));
    } else {
      for (n = "" + De(n), e = null, r = 0; r < t.length; r++) {
        if (t[r].value === n) {
          ((t[r].selected = !0), l && (t[r].defaultSelected = !0));
          return;
        }
        e !== null || t[r].disabled || (e = t[r]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Fc(t, e, n) {
    if (e != null && ((e = "" + De(e)), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + De(n) : "";
  }
  function $c(t, e, n, l) {
    if (e == null) {
      if (l != null) {
        if (n != null) throw Error(s(92));
        if (Ot(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        n = l;
      }
      (n == null && (n = ""), (e = n));
    }
    ((n = De(e)),
      (t.defaultValue = n),
      (l = t.textContent),
      l === n && l !== "" && l !== null && (t.value = l),
      Gr(t));
  }
  function ka(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var nv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Ic(t, e, n) {
    var l = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? l
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : l
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || nv.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function Wc(t, e, n) {
    if (e != null && typeof e != "object") throw Error(s(62));
    if (((t = t.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (e != null && e.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? t.setProperty(l, "")
            : l === "float"
              ? (t.cssFloat = "")
              : (t[l] = ""));
      for (var r in e) ((l = e[r]), e.hasOwnProperty(r) && n[r] !== l && Ic(t, r, l));
    } else for (var o in e) e.hasOwnProperty(o) && Ic(t, o, e[o]);
  }
  function Qr(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var av = new Map([
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
      ["xHeight", "x-height"],
    ]),
    lv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function au(t) {
    return lv.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function ln() {}
  var Zr = null;
  function Kr(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Pa = null,
    Fa = null;
  function tf(t) {
    var e = Qa(t);
    if (e && (t = e.stateNode)) {
      var n = t[he] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Vr(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll('input[name="' + Le("" + e) + '"][type="radio"]'), e = 0;
              e < n.length;
              e++
            ) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var r = l[he] || null;
                if (!r) throw Error(s(90));
                Vr(
                  l,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name,
                );
              }
            }
            for (e = 0; e < n.length; e++) ((l = n[e]), l.form === t.form && kc(l));
          }
          break t;
        case "textarea":
          Fc(t, n.value, n.defaultValue);
          break t;
        case "select":
          ((e = n.value), e != null && Ja(t, !!n.multiple, e, !1));
      }
    }
  }
  var Jr = !1;
  function ef(t, e, n) {
    if (Jr) return t(e, n);
    Jr = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (
        ((Jr = !1),
        (Pa !== null || Fa !== null) &&
          (Qu(), Pa && ((e = Pa), (t = Fa), (Fa = Pa = null), tf(e), t)))
      )
        for (e = 0; e < t.length; e++) tf(t[e]);
    }
  }
  function Vl(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[he] || null;
    if (l === null) return null;
    n = l[e];
    t: switch (e) {
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
        ((l = !l.disabled) ||
          ((t = t.type),
          (l = !(t === "button" || t === "input" || t === "select" || t === "textarea"))),
          (t = !l));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(s(231, e, typeof n));
    return n;
  }
  var un = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    kr = !1;
  if (un)
    try {
      var Xl = {};
      (Object.defineProperty(Xl, "passive", {
        get: function () {
          kr = !0;
        },
      }),
        window.addEventListener("test", Xl, Xl),
        window.removeEventListener("test", Xl, Xl));
    } catch {
      kr = !1;
    }
  var zn = null,
    Pr = null,
    lu = null;
  function nf() {
    if (lu) return lu;
    var t,
      e = Pr,
      n = e.length,
      l,
      r = "value" in zn ? zn.value : zn.textContent,
      o = r.length;
    for (t = 0; t < n && e[t] === r[t]; t++);
    var d = n - t;
    for (l = 1; l <= d && e[n - l] === r[o - l]; l++);
    return (lu = r.slice(t, 1 < l ? 1 - l : void 0));
  }
  function iu(t) {
    var e = t.keyCode;
    return (
      "charCode" in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function uu() {
    return !0;
  }
  function af() {
    return !1;
  }
  function me(t) {
    function e(n, l, r, o, d) {
      ((this._reactName = n),
        (this._targetInst = r),
        (this.type = l),
        (this.nativeEvent = o),
        (this.target = d),
        (this.currentTarget = null));
      for (var v in t) t.hasOwnProperty(v) && ((n = t[v]), (this[v] = n ? n(o) : o[v]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? uu
          : af),
        (this.isPropagationStopped = af),
        this
      );
    }
    return (
      g(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = uu));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = uu));
        },
        persist: function () {},
        isPersistent: uu,
      }),
      e
    );
  }
  var ma = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ru = me(ma),
    Ql = g({}, ma, { view: 0, detail: 0 }),
    iv = me(Ql),
    Fr,
    $r,
    Zl,
    su = g({}, Ql, {
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
      getModifierState: Wr,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Zl &&
              (Zl && t.type === "mousemove"
                ? ((Fr = t.screenX - Zl.screenX), ($r = t.screenY - Zl.screenY))
                : ($r = Fr = 0),
              (Zl = t)),
            Fr);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : $r;
      },
    }),
    lf = me(su),
    uv = g({}, su, { dataTransfer: 0 }),
    rv = me(uv),
    sv = g({}, Ql, { relatedTarget: 0 }),
    Ir = me(sv),
    ov = g({}, ma, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    cv = me(ov),
    fv = g({}, ma, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    dv = me(fv),
    hv = g({}, ma, { data: 0 }),
    uf = me(hv),
    mv = {
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
      MozPrintableKey: "Unidentified",
    },
    pv = {
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
      224: "Meta",
    },
    yv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function vv(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = yv[t]) ? !!e[t] : !1;
  }
  function Wr() {
    return vv;
  }
  var gv = g({}, Ql, {
      key: function (t) {
        if (t.key) {
          var e = mv[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = iu(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? pv[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Wr,
      charCode: function (t) {
        return t.type === "keypress" ? iu(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? iu(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    Sv = me(gv),
    bv = g({}, su, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    rf = me(bv),
    _v = g({}, Ql, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Wr,
    }),
    Ev = me(_v),
    Rv = g({}, ma, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Tv = me(Rv),
    Av = g({}, su, {
      deltaX: function (t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    xv = me(Av),
    Mv = g({}, ma, { newState: 0, oldState: 0 }),
    Ov = me(Mv),
    zv = [9, 13, 27, 32],
    ts = un && "CompositionEvent" in window,
    Kl = null;
  un && "documentMode" in document && (Kl = document.documentMode);
  var Cv = un && "TextEvent" in window && !Kl,
    sf = un && (!ts || (Kl && 8 < Kl && 11 >= Kl)),
    of = " ",
    cf = !1;
  function ff(t, e) {
    switch (t) {
      case "keyup":
        return zv.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function df(t) {
    return ((t = t.detail), typeof t == "object" && "data" in t ? t.data : null);
  }
  var $a = !1;
  function wv(t, e) {
    switch (t) {
      case "compositionend":
        return df(e);
      case "keypress":
        return e.which !== 32 ? null : ((cf = !0), of);
      case "textInput":
        return ((t = e.data), t === of && cf ? null : t);
      default:
        return null;
    }
  }
  function Dv(t, e) {
    if ($a)
      return t === "compositionend" || (!ts && ff(t, e))
        ? ((t = nf()), (lu = Pr = zn = null), ($a = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return sf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Lv = {
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
    week: !0,
  };
  function hf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Lv[t.type] : e === "textarea";
  }
  function mf(t, e, n, l) {
    (Pa ? (Fa ? Fa.push(l) : (Fa = [l])) : (Pa = l),
      (e = $u(e, "onChange")),
      0 < e.length &&
        ((n = new ru("onChange", "change", null, n, l)), t.push({ event: n, listeners: e })));
  }
  var Jl = null,
    kl = null;
  function Uv(t) {
    Fh(t, 0);
  }
  function ou(t) {
    var e = Gl(t);
    if (kc(e)) return t;
  }
  function pf(t, e) {
    if (t === "change") return e;
  }
  var yf = !1;
  if (un) {
    var es;
    if (un) {
      var ns = "oninput" in document;
      if (!ns) {
        var vf = document.createElement("div");
        (vf.setAttribute("oninput", "return;"), (ns = typeof vf.oninput == "function"));
      }
      es = ns;
    } else es = !1;
    yf = es && (!document.documentMode || 9 < document.documentMode);
  }
  function gf() {
    Jl && (Jl.detachEvent("onpropertychange", Sf), (kl = Jl = null));
  }
  function Sf(t) {
    if (t.propertyName === "value" && ou(kl)) {
      var e = [];
      (mf(e, kl, t, Kr(t)), ef(Uv, e));
    }
  }
  function Nv(t, e, n) {
    t === "focusin"
      ? (gf(), (Jl = e), (kl = n), Jl.attachEvent("onpropertychange", Sf))
      : t === "focusout" && gf();
  }
  function jv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return ou(kl);
  }
  function Bv(t, e) {
    if (t === "click") return ou(e);
  }
  function Hv(t, e) {
    if (t === "input" || t === "change") return ou(e);
  }
  function qv(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Ae = typeof Object.is == "function" ? Object.is : qv;
  function Pl(t, e) {
    if (Ae(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
    var n = Object.keys(t),
      l = Object.keys(e);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var r = n[l];
      if (!fa.call(e, r) || !Ae(t[r], e[r])) return !1;
    }
    return !0;
  }
  function bf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function _f(t, e) {
    var n = bf(t);
    t = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = t + n.textContent.length), t <= e && l >= e)) return { node: n, offset: e - t };
        t = l;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = bf(n);
    }
  }
  function Ef(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Ef(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function Rf(t) {
    t =
      t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = nu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = nu(t.document);
    }
    return e;
  }
  function as(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Yv = un && "documentMode" in document && 11 >= document.documentMode,
    Ia = null,
    ls = null,
    Fl = null,
    is = !1;
  function Tf(t, e, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    is ||
      Ia == null ||
      Ia !== nu(l) ||
      ((l = Ia),
      "selectionStart" in l && as(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Fl && Pl(Fl, l)) ||
        ((Fl = l),
        (l = $u(ls, "onSelect")),
        0 < l.length &&
          ((e = new ru("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: l }),
          (e.target = Ia))));
  }
  function pa(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Wa = {
      animationend: pa("Animation", "AnimationEnd"),
      animationiteration: pa("Animation", "AnimationIteration"),
      animationstart: pa("Animation", "AnimationStart"),
      transitionrun: pa("Transition", "TransitionRun"),
      transitionstart: pa("Transition", "TransitionStart"),
      transitioncancel: pa("Transition", "TransitionCancel"),
      transitionend: pa("Transition", "TransitionEnd"),
    },
    us = {},
    Af = {};
  un &&
    ((Af = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Wa.animationend.animation,
      delete Wa.animationiteration.animation,
      delete Wa.animationstart.animation),
    "TransitionEvent" in window || delete Wa.transitionend.transition);
  function ya(t) {
    if (us[t]) return us[t];
    if (!Wa[t]) return t;
    var e = Wa[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in Af) return (us[t] = e[n]);
    return t;
  }
  var xf = ya("animationend"),
    Mf = ya("animationiteration"),
    Of = ya("animationstart"),
    Gv = ya("transitionrun"),
    Vv = ya("transitionstart"),
    Xv = ya("transitioncancel"),
    zf = ya("transitionend"),
    Cf = new Map(),
    rs =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  rs.push("scrollEnd");
  function Xe(t, e) {
    (Cf.set(t, e), ha(e, [t]));
  }
  var cu =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" && t !== null && typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    Ue = [],
    tl = 0,
    ss = 0;
  function fu() {
    for (var t = tl, e = (ss = tl = 0); e < t; ) {
      var n = Ue[e];
      Ue[e++] = null;
      var l = Ue[e];
      Ue[e++] = null;
      var r = Ue[e];
      Ue[e++] = null;
      var o = Ue[e];
      if (((Ue[e++] = null), l !== null && r !== null)) {
        var d = l.pending;
        (d === null ? (r.next = r) : ((r.next = d.next), (d.next = r)), (l.pending = r));
      }
      o !== 0 && wf(n, r, o);
    }
  }
  function du(t, e, n, l) {
    ((Ue[tl++] = t),
      (Ue[tl++] = e),
      (Ue[tl++] = n),
      (Ue[tl++] = l),
      (ss |= l),
      (t.lanes |= l),
      (t = t.alternate),
      t !== null && (t.lanes |= l));
  }
  function os(t, e, n, l) {
    return (du(t, e, n, l), hu(t));
  }
  function va(t, e) {
    return (du(t, null, null, e), hu(t));
  }
  function wf(t, e, n) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n);
    for (var r = !1, o = t.return; o !== null; )
      ((o.childLanes |= n),
        (l = o.alternate),
        l !== null && (l.childLanes |= n),
        o.tag === 22 && ((t = o.stateNode), t === null || t._visibility & 1 || (r = !0)),
        (t = o),
        (o = o.return));
    return t.tag === 3
      ? ((o = t.stateNode),
        r &&
          e !== null &&
          ((r = 31 - Te(n)),
          (t = o.hiddenUpdates),
          (l = t[r]),
          l === null ? (t[r] = [e]) : l.push(e),
          (e.lane = n | 536870912)),
        o)
      : null;
  }
  function hu(t) {
    if (50 < gi) throw ((gi = 0), (So = null), Error(s(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var el = {};
  function Qv(t, e, n, l) {
    ((this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function xe(t, e, n, l) {
    return new Qv(t, e, n, l);
  }
  function cs(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function rn(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = xe(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function Df(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function mu(t, e, n, l, r, o) {
    var d = 0;
    if (((l = t), typeof t == "function")) cs(t) && (d = 1);
    else if (typeof t == "string")
      d = Pg(t, n, $.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case P:
          return ((t = xe(31, n, e, r)), (t.elementType = P), (t.lanes = o), t);
        case w:
          return ga(n.children, r, o, e);
        case A:
          ((d = 8), (r |= 24));
          break;
        case z:
          return ((t = xe(12, n, e, r | 2)), (t.elementType = z), (t.lanes = o), t);
        case I:
          return ((t = xe(13, n, e, r)), (t.elementType = I), (t.lanes = o), t);
        case F:
          return ((t = xe(19, n, e, r)), (t.elementType = F), (t.lanes = o), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Q:
                d = 10;
                break t;
              case V:
                d = 9;
                break t;
              case H:
                d = 11;
                break t;
              case X:
                d = 14;
                break t;
              case J:
                ((d = 16), (l = null));
                break t;
            }
          ((d = 29), (n = Error(s(130, t === null ? "null" : typeof t, ""))), (l = null));
      }
    return ((e = xe(d, n, e, r)), (e.elementType = t), (e.type = l), (e.lanes = o), e);
  }
  function ga(t, e, n, l) {
    return ((t = xe(7, t, l, e)), (t.lanes = n), t);
  }
  function fs(t, e, n) {
    return ((t = xe(6, t, null, e)), (t.lanes = n), t);
  }
  function Lf(t) {
    var e = xe(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function ds(t, e, n) {
    return (
      (e = xe(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Uf = new WeakMap();
  function Ne(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Uf.get(t);
      return n !== void 0 ? n : ((e = { value: t, source: e, stack: nn(e) }), Uf.set(t, e), e);
    }
    return { value: t, source: e, stack: nn(e) };
  }
  var nl = [],
    al = 0,
    pu = null,
    $l = 0,
    je = [],
    Be = 0,
    Cn = null,
    ke = 1,
    Pe = "";
  function sn(t, e) {
    ((nl[al++] = $l), (nl[al++] = pu), (pu = t), ($l = e));
  }
  function Nf(t, e, n) {
    ((je[Be++] = ke), (je[Be++] = Pe), (je[Be++] = Cn), (Cn = t));
    var l = ke;
    t = Pe;
    var r = 32 - Te(l) - 1;
    ((l &= ~(1 << r)), (n += 1));
    var o = 32 - Te(e) + r;
    if (30 < o) {
      var d = r - (r % 5);
      ((o = (l & ((1 << d) - 1)).toString(32)),
        (l >>= d),
        (r -= d),
        (ke = (1 << (32 - Te(e) + r)) | (n << r) | l),
        (Pe = o + t));
    } else ((ke = (1 << o) | (n << r) | l), (Pe = t));
  }
  function hs(t) {
    t.return !== null && (sn(t, 1), Nf(t, 1, 0));
  }
  function ms(t) {
    for (; t === pu; ) ((pu = nl[--al]), (nl[al] = null), ($l = nl[--al]), (nl[al] = null));
    for (; t === Cn; )
      ((Cn = je[--Be]),
        (je[Be] = null),
        (Pe = je[--Be]),
        (je[Be] = null),
        (ke = je[--Be]),
        (je[Be] = null));
  }
  function jf(t, e) {
    ((je[Be++] = ke), (je[Be++] = Pe), (je[Be++] = Cn), (ke = e.id), (Pe = e.overflow), (Cn = t));
  }
  var ie = null,
    jt = null,
    gt = !1,
    wn = null,
    He = !1,
    ps = Error(s(519));
  function Dn(t) {
    var e = Error(
      s(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""),
    );
    throw (Il(Ne(e, t)), ps);
  }
  function Bf(t) {
    var e = t.stateNode,
      n = t.type,
      l = t.memoizedProps;
    switch (((e[le] = t), (e[he] = l), n)) {
      case "dialog":
        (mt("cancel", e), mt("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        mt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < bi.length; n++) mt(bi[n], e);
        break;
      case "source":
        mt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (mt("error", e), mt("load", e));
        break;
      case "details":
        mt("toggle", e);
        break;
      case "input":
        (mt("invalid", e),
          Pc(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0));
        break;
      case "select":
        mt("invalid", e);
        break;
      case "textarea":
        (mt("invalid", e), $c(e, l.value, l.defaultValue, l.children));
    }
    ((n = l.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      l.suppressHydrationWarning === !0 ||
      tm(e.textContent, n)
        ? (l.popover != null && (mt("beforetoggle", e), mt("toggle", e)),
          l.onScroll != null && mt("scroll", e),
          l.onScrollEnd != null && mt("scrollend", e),
          l.onClick != null && (e.onclick = ln),
          (e = !0))
        : (e = !1),
      e || Dn(t, !0));
  }
  function Hf(t) {
    for (ie = t.return; ie; )
      switch (ie.tag) {
        case 5:
        case 31:
        case 13:
          He = !1;
          return;
        case 27:
        case 3:
          He = !0;
          return;
        default:
          ie = ie.return;
      }
  }
  function ll(t) {
    if (t !== ie) return !1;
    if (!gt) return (Hf(t), (gt = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type), (n = !(n !== "form" && n !== "button") || Uo(t.type, t.memoizedProps))),
        (n = !n)),
      n && jt && Dn(t),
      Hf(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(s(317));
      jt = om(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(s(317));
      jt = om(t);
    } else
      e === 27
        ? ((e = jt), Kn(t.type) ? ((t = qo), (qo = null), (jt = t)) : (jt = e))
        : (jt = ie ? Ye(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Sa() {
    ((jt = ie = null), (gt = !1));
  }
  function ys() {
    var t = wn;
    return (t !== null && (ge === null ? (ge = t) : ge.push.apply(ge, t), (wn = null)), t);
  }
  function Il(t) {
    wn === null ? (wn = [t]) : wn.push(t);
  }
  var vs = M(null),
    ba = null,
    on = null;
  function Ln(t, e, n) {
    (k(vs, e._currentValue), (e._currentValue = n));
  }
  function cn(t) {
    ((t._currentValue = vs.current), Y(vs));
  }
  function gs(t, e, n) {
    for (; t !== null; ) {
      var l = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), l !== null && (l.childLanes |= e))
          : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function Ss(t, e, n, l) {
    var r = t.child;
    for (r !== null && (r.return = t); r !== null; ) {
      var o = r.dependencies;
      if (o !== null) {
        var d = r.child;
        o = o.firstContext;
        t: for (; o !== null; ) {
          var v = o;
          o = r;
          for (var R = 0; R < e.length; R++)
            if (v.context === e[R]) {
              ((o.lanes |= n),
                (v = o.alternate),
                v !== null && (v.lanes |= n),
                gs(o.return, n, t),
                l || (d = null));
              break t;
            }
          o = v.next;
        }
      } else if (r.tag === 18) {
        if (((d = r.return), d === null)) throw Error(s(341));
        ((d.lanes |= n), (o = d.alternate), o !== null && (o.lanes |= n), gs(d, n, t), (d = null));
      } else d = r.child;
      if (d !== null) d.return = r;
      else
        for (d = r; d !== null; ) {
          if (d === t) {
            d = null;
            break;
          }
          if (((r = d.sibling), r !== null)) {
            ((r.return = d.return), (d = r));
            break;
          }
          d = d.return;
        }
      r = d;
    }
  }
  function il(t, e, n, l) {
    t = null;
    for (var r = e, o = !1; r !== null; ) {
      if (!o) {
        if ((r.flags & 524288) !== 0) o = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var d = r.alternate;
        if (d === null) throw Error(s(387));
        if (((d = d.memoizedProps), d !== null)) {
          var v = r.type;
          Ae(r.pendingProps.value, d.value) || (t !== null ? t.push(v) : (t = [v]));
        }
      } else if (r === St.current) {
        if (((d = r.alternate), d === null)) throw Error(s(387));
        d.memoizedState.memoizedState !== r.memoizedState.memoizedState &&
          (t !== null ? t.push(Ai) : (t = [Ai]));
      }
      r = r.return;
    }
    (t !== null && Ss(e, t, n, l), (e.flags |= 262144));
  }
  function yu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ae(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function _a(t) {
    ((ba = t), (on = null), (t = t.dependencies), t !== null && (t.firstContext = null));
  }
  function ue(t) {
    return qf(ba, t);
  }
  function vu(t, e) {
    return (ba === null && _a(t), qf(t, e));
  }
  function qf(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), on === null)) {
      if (t === null) throw Error(s(308));
      ((on = e), (t.dependencies = { lanes: 0, firstContext: e }), (t.flags |= 524288));
    } else on = on.next = e;
    return n;
  }
  var Zv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  t.push(l);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                }));
            };
          },
    Kv = a.unstable_scheduleCallback,
    Jv = a.unstable_NormalPriority,
    Kt = {
      $$typeof: Q,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function bs() {
    return { controller: new Zv(), data: new Map(), refCount: 0 };
  }
  function Wl(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Kv(Jv, function () {
          t.controller.abort();
        }));
  }
  var ti = null,
    _s = 0,
    ul = 0,
    rl = null;
  function kv(t, e) {
    if (ti === null) {
      var n = (ti = []);
      ((_s = 0),
        (ul = Ao()),
        (rl = {
          status: "pending",
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        }));
    }
    return (_s++, e.then(Yf, Yf), e);
  }
  function Yf() {
    if (--_s === 0 && ti !== null) {
      rl !== null && (rl.status = "fulfilled");
      var t = ti;
      ((ti = null), (ul = 0), (rl = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Pv(t, e) {
    var n = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (r) {
          n.push(r);
        },
      };
    return (
      t.then(
        function () {
          ((l.status = "fulfilled"), (l.value = e));
          for (var r = 0; r < n.length; r++) (0, n[r])(e);
        },
        function (r) {
          for (l.status = "rejected", l.reason = r, r = 0; r < n.length; r++) (0, n[r])(void 0);
        },
      ),
      l
    );
  }
  var Gf = j.S;
  j.S = function (t, e) {
    ((Th = ce()),
      typeof e == "object" && e !== null && typeof e.then == "function" && kv(t, e),
      Gf !== null && Gf(t, e));
  };
  var Ea = M(null);
  function Es() {
    var t = Ea.current;
    return t !== null ? t : Lt.pooledCache;
  }
  function gu(t, e) {
    e === null ? k(Ea, Ea.current) : k(Ea, e.pool);
  }
  function Vf() {
    var t = Es();
    return t === null ? null : { parent: Kt._currentValue, pool: t };
  }
  var sl = Error(s(460)),
    Rs = Error(s(474)),
    Su = Error(s(542)),
    bu = { then: function () {} };
  function Xf(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function Qf(t, e, n) {
    switch (
      ((n = t[n]), n === void 0 ? t.push(e) : n !== e && (e.then(ln, ln), (e = n)), e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Kf(t), t);
      default:
        if (typeof e.status == "string") e.then(ln, ln);
        else {
          if (((t = Lt), t !== null && 100 < t.shellSuspendCounter)) throw Error(s(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (l) {
                if (e.status === "pending") {
                  var r = e;
                  ((r.status = "fulfilled"), (r.value = l));
                }
              },
              function (l) {
                if (e.status === "pending") {
                  var r = e;
                  ((r.status = "rejected"), (r.reason = l));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Kf(t), t);
        }
        throw ((Ta = e), sl);
    }
  }
  function Ra(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? ((Ta = n), sl) : n;
    }
  }
  var Ta = null;
  function Zf() {
    if (Ta === null) throw Error(s(459));
    var t = Ta;
    return ((Ta = null), t);
  }
  function Kf(t) {
    if (t === sl || t === Su) throw Error(s(483));
  }
  var ol = null,
    ei = 0;
  function _u(t) {
    var e = ei;
    return ((ei += 1), ol === null && (ol = []), Qf(ol, t, e));
  }
  function ni(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function Eu(t, e) {
    throw e.$$typeof === _
      ? Error(s(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          s(
            31,
            t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t,
          ),
        ));
  }
  function Jf(t) {
    function e(C, x) {
      if (t) {
        var D = C.deletions;
        D === null ? ((C.deletions = [x]), (C.flags |= 16)) : D.push(x);
      }
    }
    function n(C, x) {
      if (!t) return null;
      for (; x !== null; ) (e(C, x), (x = x.sibling));
      return null;
    }
    function l(C) {
      for (var x = new Map(); C !== null; )
        (C.key !== null ? x.set(C.key, C) : x.set(C.index, C), (C = C.sibling));
      return x;
    }
    function r(C, x) {
      return ((C = rn(C, x)), (C.index = 0), (C.sibling = null), C);
    }
    function o(C, x, D) {
      return (
        (C.index = D),
        t
          ? ((D = C.alternate),
            D !== null
              ? ((D = D.index), D < x ? ((C.flags |= 67108866), x) : D)
              : ((C.flags |= 67108866), x))
          : ((C.flags |= 1048576), x)
      );
    }
    function d(C) {
      return (t && C.alternate === null && (C.flags |= 67108866), C);
    }
    function v(C, x, D, q) {
      return x === null || x.tag !== 6
        ? ((x = fs(D, C.mode, q)), (x.return = C), x)
        : ((x = r(x, D)), (x.return = C), x);
    }
    function R(C, x, D, q) {
      var lt = D.type;
      return lt === w
        ? B(C, x, D.props.children, q, D.key)
        : x !== null &&
            (x.elementType === lt ||
              (typeof lt == "object" && lt !== null && lt.$$typeof === J && Ra(lt) === x.type))
          ? ((x = r(x, D.props)), ni(x, D), (x.return = C), x)
          : ((x = mu(D.type, D.key, D.props, null, C.mode, q)), ni(x, D), (x.return = C), x);
    }
    function L(C, x, D, q) {
      return x === null ||
        x.tag !== 4 ||
        x.stateNode.containerInfo !== D.containerInfo ||
        x.stateNode.implementation !== D.implementation
        ? ((x = ds(D, C.mode, q)), (x.return = C), x)
        : ((x = r(x, D.children || [])), (x.return = C), x);
    }
    function B(C, x, D, q, lt) {
      return x === null || x.tag !== 7
        ? ((x = ga(D, C.mode, q, lt)), (x.return = C), x)
        : ((x = r(x, D)), (x.return = C), x);
    }
    function G(C, x, D) {
      if ((typeof x == "string" && x !== "") || typeof x == "number" || typeof x == "bigint")
        return ((x = fs("" + x, C.mode, D)), (x.return = C), x);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case E:
            return ((D = mu(x.type, x.key, x.props, null, C.mode, D)), ni(D, x), (D.return = C), D);
          case O:
            return ((x = ds(x, C.mode, D)), (x.return = C), x);
          case J:
            return ((x = Ra(x)), G(C, x, D));
        }
        if (Ot(x) || dt(x)) return ((x = ga(x, C.mode, D, null)), (x.return = C), x);
        if (typeof x.then == "function") return G(C, _u(x), D);
        if (x.$$typeof === Q) return G(C, vu(C, x), D);
        Eu(C, x);
      }
      return null;
    }
    function U(C, x, D, q) {
      var lt = x !== null ? x.key : null;
      if ((typeof D == "string" && D !== "") || typeof D == "number" || typeof D == "bigint")
        return lt !== null ? null : v(C, x, "" + D, q);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case E:
            return D.key === lt ? R(C, x, D, q) : null;
          case O:
            return D.key === lt ? L(C, x, D, q) : null;
          case J:
            return ((D = Ra(D)), U(C, x, D, q));
        }
        if (Ot(D) || dt(D)) return lt !== null ? null : B(C, x, D, q, null);
        if (typeof D.then == "function") return U(C, x, _u(D), q);
        if (D.$$typeof === Q) return U(C, x, vu(C, D), q);
        Eu(C, D);
      }
      return null;
    }
    function N(C, x, D, q, lt) {
      if ((typeof q == "string" && q !== "") || typeof q == "number" || typeof q == "bigint")
        return ((C = C.get(D) || null), v(x, C, "" + q, lt));
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case E:
            return ((C = C.get(q.key === null ? D : q.key) || null), R(x, C, q, lt));
          case O:
            return ((C = C.get(q.key === null ? D : q.key) || null), L(x, C, q, lt));
          case J:
            return ((q = Ra(q)), N(C, x, D, q, lt));
        }
        if (Ot(q) || dt(q)) return ((C = C.get(D) || null), B(x, C, q, lt, null));
        if (typeof q.then == "function") return N(C, x, D, _u(q), lt);
        if (q.$$typeof === Q) return N(C, x, D, vu(x, q), lt);
        Eu(x, q);
      }
      return null;
    }
    function W(C, x, D, q) {
      for (
        var lt = null, bt = null, et = x, ct = (x = 0), yt = null;
        et !== null && ct < D.length;
        ct++
      ) {
        et.index > ct ? ((yt = et), (et = null)) : (yt = et.sibling);
        var _t = U(C, et, D[ct], q);
        if (_t === null) {
          et === null && (et = yt);
          break;
        }
        (t && et && _t.alternate === null && e(C, et),
          (x = o(_t, x, ct)),
          bt === null ? (lt = _t) : (bt.sibling = _t),
          (bt = _t),
          (et = yt));
      }
      if (ct === D.length) return (n(C, et), gt && sn(C, ct), lt);
      if (et === null) {
        for (; ct < D.length; ct++)
          ((et = G(C, D[ct], q)),
            et !== null &&
              ((x = o(et, x, ct)), bt === null ? (lt = et) : (bt.sibling = et), (bt = et)));
        return (gt && sn(C, ct), lt);
      }
      for (et = l(et); ct < D.length; ct++)
        ((yt = N(et, C, ct, D[ct], q)),
          yt !== null &&
            (t && yt.alternate !== null && et.delete(yt.key === null ? ct : yt.key),
            (x = o(yt, x, ct)),
            bt === null ? (lt = yt) : (bt.sibling = yt),
            (bt = yt)));
      return (
        t &&
          et.forEach(function ($n) {
            return e(C, $n);
          }),
        gt && sn(C, ct),
        lt
      );
    }
    function rt(C, x, D, q) {
      if (D == null) throw Error(s(151));
      for (
        var lt = null, bt = null, et = x, ct = (x = 0), yt = null, _t = D.next();
        et !== null && !_t.done;
        ct++, _t = D.next()
      ) {
        et.index > ct ? ((yt = et), (et = null)) : (yt = et.sibling);
        var $n = U(C, et, _t.value, q);
        if ($n === null) {
          et === null && (et = yt);
          break;
        }
        (t && et && $n.alternate === null && e(C, et),
          (x = o($n, x, ct)),
          bt === null ? (lt = $n) : (bt.sibling = $n),
          (bt = $n),
          (et = yt));
      }
      if (_t.done) return (n(C, et), gt && sn(C, ct), lt);
      if (et === null) {
        for (; !_t.done; ct++, _t = D.next())
          ((_t = G(C, _t.value, q)),
            _t !== null &&
              ((x = o(_t, x, ct)), bt === null ? (lt = _t) : (bt.sibling = _t), (bt = _t)));
        return (gt && sn(C, ct), lt);
      }
      for (et = l(et); !_t.done; ct++, _t = D.next())
        ((_t = N(et, C, ct, _t.value, q)),
          _t !== null &&
            (t && _t.alternate !== null && et.delete(_t.key === null ? ct : _t.key),
            (x = o(_t, x, ct)),
            bt === null ? (lt = _t) : (bt.sibling = _t),
            (bt = _t)));
      return (
        t &&
          et.forEach(function (u0) {
            return e(C, u0);
          }),
        gt && sn(C, ct),
        lt
      );
    }
    function wt(C, x, D, q) {
      if (
        (typeof D == "object" &&
          D !== null &&
          D.type === w &&
          D.key === null &&
          (D = D.props.children),
        typeof D == "object" && D !== null)
      ) {
        switch (D.$$typeof) {
          case E:
            t: {
              for (var lt = D.key; x !== null; ) {
                if (x.key === lt) {
                  if (((lt = D.type), lt === w)) {
                    if (x.tag === 7) {
                      (n(C, x.sibling), (q = r(x, D.props.children)), (q.return = C), (C = q));
                      break t;
                    }
                  } else if (
                    x.elementType === lt ||
                    (typeof lt == "object" && lt !== null && lt.$$typeof === J && Ra(lt) === x.type)
                  ) {
                    (n(C, x.sibling), (q = r(x, D.props)), ni(q, D), (q.return = C), (C = q));
                    break t;
                  }
                  n(C, x);
                  break;
                } else e(C, x);
                x = x.sibling;
              }
              D.type === w
                ? ((q = ga(D.props.children, C.mode, q, D.key)), (q.return = C), (C = q))
                : ((q = mu(D.type, D.key, D.props, null, C.mode, q)),
                  ni(q, D),
                  (q.return = C),
                  (C = q));
            }
            return d(C);
          case O:
            t: {
              for (lt = D.key; x !== null; ) {
                if (x.key === lt)
                  if (
                    x.tag === 4 &&
                    x.stateNode.containerInfo === D.containerInfo &&
                    x.stateNode.implementation === D.implementation
                  ) {
                    (n(C, x.sibling), (q = r(x, D.children || [])), (q.return = C), (C = q));
                    break t;
                  } else {
                    n(C, x);
                    break;
                  }
                else e(C, x);
                x = x.sibling;
              }
              ((q = ds(D, C.mode, q)), (q.return = C), (C = q));
            }
            return d(C);
          case J:
            return ((D = Ra(D)), wt(C, x, D, q));
        }
        if (Ot(D)) return W(C, x, D, q);
        if (dt(D)) {
          if (((lt = dt(D)), typeof lt != "function")) throw Error(s(150));
          return ((D = lt.call(D)), rt(C, x, D, q));
        }
        if (typeof D.then == "function") return wt(C, x, _u(D), q);
        if (D.$$typeof === Q) return wt(C, x, vu(C, D), q);
        Eu(C, D);
      }
      return (typeof D == "string" && D !== "") || typeof D == "number" || typeof D == "bigint"
        ? ((D = "" + D),
          x !== null && x.tag === 6
            ? (n(C, x.sibling), (q = r(x, D)), (q.return = C), (C = q))
            : (n(C, x), (q = fs(D, C.mode, q)), (q.return = C), (C = q)),
          d(C))
        : n(C, x);
    }
    return function (C, x, D, q) {
      try {
        ei = 0;
        var lt = wt(C, x, D, q);
        return ((ol = null), lt);
      } catch (et) {
        if (et === sl || et === Su) throw et;
        var bt = xe(29, et, null, C.mode);
        return ((bt.lanes = q), (bt.return = C), bt);
      }
    };
  }
  var Aa = Jf(!0),
    kf = Jf(!1),
    Un = !1;
  function Ts(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function As(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function Nn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function jn(t, e, n) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Tt & 2) !== 0)) {
      var r = l.pending;
      return (
        r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
        (l.pending = e),
        (e = hu(t)),
        wf(t, null, n),
        e
      );
    }
    return (du(t, l, e, n), hu(t));
  }
  function ai(t, e, n) {
    if (((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (n |= l), (e.lanes = n), Hc(t, n));
    }
  }
  function xs(t, e) {
    var n = t.updateQueue,
      l = t.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var r = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
          (o === null ? (r = o = d) : (o = o.next = d), (n = n.next));
        } while (n !== null);
        o === null ? (r = o = e) : (o = o.next = e);
      } else r = o = e;
      ((n = {
        baseState: l.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: o,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (t.updateQueue = n));
      return;
    }
    ((t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e));
  }
  var Ms = !1;
  function li() {
    if (Ms) {
      var t = rl;
      if (t !== null) throw t;
    }
  }
  function ii(t, e, n, l) {
    Ms = !1;
    var r = t.updateQueue;
    Un = !1;
    var o = r.firstBaseUpdate,
      d = r.lastBaseUpdate,
      v = r.shared.pending;
    if (v !== null) {
      r.shared.pending = null;
      var R = v,
        L = R.next;
      ((R.next = null), d === null ? (o = L) : (d.next = L), (d = R));
      var B = t.alternate;
      B !== null &&
        ((B = B.updateQueue),
        (v = B.lastBaseUpdate),
        v !== d && (v === null ? (B.firstBaseUpdate = L) : (v.next = L), (B.lastBaseUpdate = R)));
    }
    if (o !== null) {
      var G = r.baseState;
      ((d = 0), (B = L = R = null), (v = o));
      do {
        var U = v.lane & -536870913,
          N = U !== v.lane;
        if (N ? (pt & U) === U : (l & U) === U) {
          (U !== 0 && U === ul && (Ms = !0),
            B !== null &&
              (B = B.next =
                { lane: 0, tag: v.tag, payload: v.payload, callback: null, next: null }));
          t: {
            var W = t,
              rt = v;
            U = e;
            var wt = n;
            switch (rt.tag) {
              case 1:
                if (((W = rt.payload), typeof W == "function")) {
                  G = W.call(wt, G, U);
                  break t;
                }
                G = W;
                break t;
              case 3:
                W.flags = (W.flags & -65537) | 128;
              case 0:
                if (
                  ((W = rt.payload), (U = typeof W == "function" ? W.call(wt, G, U) : W), U == null)
                )
                  break t;
                G = g({}, G, U);
                break t;
              case 2:
                Un = !0;
            }
          }
          ((U = v.callback),
            U !== null &&
              ((t.flags |= 64),
              N && (t.flags |= 8192),
              (N = r.callbacks),
              N === null ? (r.callbacks = [U]) : N.push(U)));
        } else
          ((N = { lane: U, tag: v.tag, payload: v.payload, callback: v.callback, next: null }),
            B === null ? ((L = B = N), (R = G)) : (B = B.next = N),
            (d |= U));
        if (((v = v.next), v === null)) {
          if (((v = r.shared.pending), v === null)) break;
          ((N = v),
            (v = N.next),
            (N.next = null),
            (r.lastBaseUpdate = N),
            (r.shared.pending = null));
        }
      } while (!0);
      (B === null && (R = G),
        (r.baseState = R),
        (r.firstBaseUpdate = L),
        (r.lastBaseUpdate = B),
        o === null && (r.shared.lanes = 0),
        (Gn |= d),
        (t.lanes = d),
        (t.memoizedState = G));
    }
  }
  function Pf(t, e) {
    if (typeof t != "function") throw Error(s(191, t));
    t.call(e);
  }
  function Ff(t, e) {
    var n = t.callbacks;
    if (n !== null) for (t.callbacks = null, t = 0; t < n.length; t++) Pf(n[t], e);
  }
  var cl = M(null),
    Ru = M(0);
  function $f(t, e) {
    ((t = Sn), k(Ru, t), k(cl, e), (Sn = t | e.baseLanes));
  }
  function Os() {
    (k(Ru, Sn), k(cl, cl.current));
  }
  function zs() {
    ((Sn = Ru.current), Y(cl), Y(Ru));
  }
  var Me = M(null),
    qe = null;
  function Bn(t) {
    var e = t.alternate;
    (k(Qt, Qt.current & 1),
      k(Me, t),
      qe === null && (e === null || cl.current !== null || e.memoizedState !== null) && (qe = t));
  }
  function Cs(t) {
    (k(Qt, Qt.current), k(Me, t), qe === null && (qe = t));
  }
  function If(t) {
    t.tag === 22 ? (k(Qt, Qt.current), k(Me, t), qe === null && (qe = t)) : Hn();
  }
  function Hn() {
    (k(Qt, Qt.current), k(Me, Me.current));
  }
  function Oe(t) {
    (Y(Me), qe === t && (qe = null), Y(Qt));
  }
  var Qt = M(0);
  function Tu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Bo(n) || Ho(n))) return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var fn = 0,
    ot = null,
    zt = null,
    Jt = null,
    Au = !1,
    fl = !1,
    xa = !1,
    xu = 0,
    ui = 0,
    dl = null,
    Fv = 0;
  function Gt() {
    throw Error(s(321));
  }
  function ws(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++) if (!Ae(t[n], e[n])) return !1;
    return !0;
  }
  function Ds(t, e, n, l, r, o) {
    return (
      (fn = o),
      (ot = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (j.H = t === null || t.memoizedState === null ? Nd : Js),
      (xa = !1),
      (o = n(l, r)),
      (xa = !1),
      fl && (o = td(e, n, l, r)),
      Wf(t),
      o
    );
  }
  function Wf(t) {
    j.H = oi;
    var e = zt !== null && zt.next !== null;
    if (((fn = 0), (Jt = zt = ot = null), (Au = !1), (ui = 0), (dl = null), e)) throw Error(s(300));
    t === null || kt || ((t = t.dependencies), t !== null && yu(t) && (kt = !0));
  }
  function td(t, e, n, l) {
    ot = t;
    var r = 0;
    do {
      if ((fl && (dl = null), (ui = 0), (fl = !1), 25 <= r)) throw Error(s(301));
      if (((r += 1), (Jt = zt = null), t.updateQueue != null)) {
        var o = t.updateQueue;
        ((o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0));
      }
      ((j.H = jd), (o = e(n, l)));
    } while (fl);
    return o;
  }
  function $v() {
    var t = j.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? ri(e) : e),
      (t = t.useState()[0]),
      (zt !== null ? zt.memoizedState : null) !== t && (ot.flags |= 1024),
      e
    );
  }
  function Ls() {
    var t = xu !== 0;
    return ((xu = 0), t);
  }
  function Us(t, e, n) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n));
  }
  function Ns(t) {
    if (Au) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      Au = !1;
    }
    ((fn = 0), (Jt = zt = ot = null), (fl = !1), (ui = xu = 0), (dl = null));
  }
  function de() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Jt === null ? (ot.memoizedState = Jt = t) : (Jt = Jt.next = t), Jt);
  }
  function Zt() {
    if (zt === null) {
      var t = ot.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = zt.next;
    var e = Jt === null ? ot.memoizedState : Jt.next;
    if (e !== null) ((Jt = e), (zt = t));
    else {
      if (t === null) throw ot.alternate === null ? Error(s(467)) : Error(s(310));
      ((zt = t),
        (t = {
          memoizedState: zt.memoizedState,
          baseState: zt.baseState,
          baseQueue: zt.baseQueue,
          queue: zt.queue,
          next: null,
        }),
        Jt === null ? (ot.memoizedState = Jt = t) : (Jt = Jt.next = t));
    }
    return Jt;
  }
  function Mu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ri(t) {
    var e = ui;
    return (
      (ui += 1),
      dl === null && (dl = []),
      (t = Qf(dl, t, e)),
      (e = ot),
      (Jt === null ? e.memoizedState : Jt.next) === null &&
        ((e = e.alternate), (j.H = e === null || e.memoizedState === null ? Nd : Js)),
      t
    );
  }
  function Ou(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return ri(t);
      if (t.$$typeof === Q) return ue(t);
    }
    throw Error(s(438, String(t)));
  }
  function js(t) {
    var e = null,
      n = ot.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var l = ot.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (e = {
              data: l.data.map(function (r) {
                return r.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = Mu()), (ot.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), l = 0; l < t; l++) n[l] = ut;
    return (e.index++, n);
  }
  function dn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function zu(t) {
    var e = Zt();
    return Bs(e, zt, t);
  }
  function Bs(t, e, n) {
    var l = t.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = n;
    var r = t.baseQueue,
      o = l.pending;
    if (o !== null) {
      if (r !== null) {
        var d = r.next;
        ((r.next = o.next), (o.next = d));
      }
      ((e.baseQueue = r = o), (l.pending = null));
    }
    if (((o = t.baseState), r === null)) t.memoizedState = o;
    else {
      e = r.next;
      var v = (d = null),
        R = null,
        L = e,
        B = !1;
      do {
        var G = L.lane & -536870913;
        if (G !== L.lane ? (pt & G) === G : (fn & G) === G) {
          var U = L.revertLane;
          if (U === 0)
            (R !== null &&
              (R = R.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: L.action,
                  hasEagerState: L.hasEagerState,
                  eagerState: L.eagerState,
                  next: null,
                }),
              G === ul && (B = !0));
          else if ((fn & U) === U) {
            ((L = L.next), U === ul && (B = !0));
            continue;
          } else
            ((G = {
              lane: 0,
              revertLane: L.revertLane,
              gesture: null,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null,
            }),
              R === null ? ((v = R = G), (d = o)) : (R = R.next = G),
              (ot.lanes |= U),
              (Gn |= U));
          ((G = L.action), xa && n(o, G), (o = L.hasEagerState ? L.eagerState : n(o, G)));
        } else
          ((U = {
            lane: G,
            revertLane: L.revertLane,
            gesture: L.gesture,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null,
          }),
            R === null ? ((v = R = U), (d = o)) : (R = R.next = U),
            (ot.lanes |= G),
            (Gn |= G));
        L = L.next;
      } while (L !== null && L !== e);
      if (
        (R === null ? (d = o) : (R.next = v),
        !Ae(o, t.memoizedState) && ((kt = !0), B && ((n = rl), n !== null)))
      )
        throw n;
      ((t.memoizedState = o), (t.baseState = d), (t.baseQueue = R), (l.lastRenderedState = o));
    }
    return (r === null && (l.lanes = 0), [t.memoizedState, l.dispatch]);
  }
  function Hs(t) {
    var e = Zt(),
      n = e.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = t;
    var l = n.dispatch,
      r = n.pending,
      o = e.memoizedState;
    if (r !== null) {
      n.pending = null;
      var d = (r = r.next);
      do ((o = t(o, d.action)), (d = d.next));
      while (d !== r);
      (Ae(o, e.memoizedState) || (kt = !0),
        (e.memoizedState = o),
        e.baseQueue === null && (e.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, l];
  }
  function ed(t, e, n) {
    var l = ot,
      r = Zt(),
      o = gt;
    if (o) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = e();
    var d = !Ae((zt || r).memoizedState, n);
    if (
      (d && ((r.memoizedState = n), (kt = !0)),
      (r = r.queue),
      Gs(ld.bind(null, l, r, t), [t]),
      r.getSnapshot !== e || d || (Jt !== null && Jt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        hl(9, { destroy: void 0 }, ad.bind(null, l, r, n, e), null),
        Lt === null)
      )
        throw Error(s(349));
      o || (fn & 127) !== 0 || nd(l, e, n);
    }
    return n;
  }
  function nd(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = ot.updateQueue),
      e === null
        ? ((e = Mu()), (ot.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function ad(t, e, n, l) {
    ((e.value = n), (e.getSnapshot = l), id(e) && ud(t));
  }
  function ld(t, e, n) {
    return n(function () {
      id(e) && ud(t);
    });
  }
  function id(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Ae(t, n);
    } catch {
      return !0;
    }
  }
  function ud(t) {
    var e = va(t, 2);
    e !== null && Se(e, t, 2);
  }
  function qs(t) {
    var e = de();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), xa)) {
        Mn(!0);
        try {
          n();
        } finally {
          Mn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function rd(t, e, n, l) {
    return ((t.baseState = n), Bs(t, zt, typeof l == "function" ? l : dn));
  }
  function Iv(t, e, n, l, r) {
    if (Du(t)) throw Error(s(485));
    if (((t = e.action), t !== null)) {
      var o = {
        payload: r,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          o.listeners.push(d);
        },
      };
      (j.T !== null ? n(!0) : (o.isTransition = !1),
        l(o),
        (n = e.pending),
        n === null
          ? ((o.next = e.pending = o), sd(e, o))
          : ((o.next = n.next), (e.pending = n.next = o)));
    }
  }
  function sd(t, e) {
    var n = e.action,
      l = e.payload,
      r = t.state;
    if (e.isTransition) {
      var o = j.T,
        d = {};
      j.T = d;
      try {
        var v = n(r, l),
          R = j.S;
        (R !== null && R(d, v), od(t, e, v));
      } catch (L) {
        Ys(t, e, L);
      } finally {
        (o !== null && d.types !== null && (o.types = d.types), (j.T = o));
      }
    } else
      try {
        ((o = n(r, l)), od(t, e, o));
      } catch (L) {
        Ys(t, e, L);
      }
  }
  function od(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (l) {
            cd(t, e, l);
          },
          function (l) {
            return Ys(t, e, l);
          },
        )
      : cd(t, e, n);
  }
  function cd(t, e, n) {
    ((e.status = "fulfilled"),
      (e.value = n),
      fd(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next), n === e ? (t.pending = null) : ((n = n.next), (e.next = n), sd(t, n))));
  }
  function Ys(t, e, n) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do ((e.status = "rejected"), (e.reason = n), fd(e), (e = e.next));
      while (e !== l);
    }
    t.action = null;
  }
  function fd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function dd(t, e) {
    return e;
  }
  function hd(t, e) {
    if (gt) {
      var n = Lt.formState;
      if (n !== null) {
        t: {
          var l = ot;
          if (gt) {
            if (jt) {
              e: {
                for (var r = jt, o = He; r.nodeType !== 8; ) {
                  if (!o) {
                    r = null;
                    break e;
                  }
                  if (((r = Ye(r.nextSibling)), r === null)) {
                    r = null;
                    break e;
                  }
                }
                ((o = r.data), (r = o === "F!" || o === "F" ? r : null));
              }
              if (r) {
                ((jt = Ye(r.nextSibling)), (l = r.data === "F!"));
                break t;
              }
            }
            Dn(l);
          }
          l = !1;
        }
        l && (e = n[0]);
      }
    }
    return (
      (n = de()),
      (n.memoizedState = n.baseState = e),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dd,
        lastRenderedState: e,
      }),
      (n.queue = l),
      (n = Dd.bind(null, ot, l)),
      (l.dispatch = n),
      (l = qs(!1)),
      (o = Ks.bind(null, ot, !1, l.queue)),
      (l = de()),
      (r = { state: e, dispatch: null, action: t, pending: null }),
      (l.queue = r),
      (n = Iv.bind(null, ot, r, o, n)),
      (r.dispatch = n),
      (l.memoizedState = t),
      [e, n, !1]
    );
  }
  function md(t) {
    var e = Zt();
    return pd(e, zt, t);
  }
  function pd(t, e, n) {
    if (
      ((e = Bs(t, e, dd)[0]),
      (t = zu(dn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var l = ri(e);
      } catch (d) {
        throw d === sl ? Su : d;
      }
    else l = e;
    e = Zt();
    var r = e.queue,
      o = r.dispatch;
    return (
      n !== e.memoizedState &&
        ((ot.flags |= 2048), hl(9, { destroy: void 0 }, Wv.bind(null, r, n), null)),
      [l, o, t]
    );
  }
  function Wv(t, e) {
    t.action = e;
  }
  function yd(t) {
    var e = Zt(),
      n = zt;
    if (n !== null) return pd(e, n, t);
    (Zt(), (e = e.memoizedState), (n = Zt()));
    var l = n.queue.dispatch;
    return ((n.memoizedState = t), [e, l, !1]);
  }
  function hl(t, e, n, l) {
    return (
      (t = { tag: t, create: n, deps: l, inst: e, next: null }),
      (e = ot.updateQueue),
      e === null && ((e = Mu()), (ot.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((l = n.next), (n.next = t), (t.next = l), (e.lastEffect = t)),
      t
    );
  }
  function vd() {
    return Zt().memoizedState;
  }
  function Cu(t, e, n, l) {
    var r = de();
    ((ot.flags |= t),
      (r.memoizedState = hl(1 | e, { destroy: void 0 }, n, l === void 0 ? null : l)));
  }
  function wu(t, e, n, l) {
    var r = Zt();
    l = l === void 0 ? null : l;
    var o = r.memoizedState.inst;
    zt !== null && l !== null && ws(l, zt.memoizedState.deps)
      ? (r.memoizedState = hl(e, o, n, l))
      : ((ot.flags |= t), (r.memoizedState = hl(1 | e, o, n, l)));
  }
  function gd(t, e) {
    Cu(8390656, 8, t, e);
  }
  function Gs(t, e) {
    wu(2048, 8, t, e);
  }
  function tg(t) {
    ot.flags |= 4;
    var e = ot.updateQueue;
    if (e === null) ((e = Mu()), (ot.updateQueue = e), (e.events = [t]));
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function Sd(t) {
    var e = Zt().memoizedState;
    return (
      tg({ ref: e, nextImpl: t }),
      function () {
        if ((Tt & 2) !== 0) throw Error(s(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function bd(t, e) {
    return wu(4, 2, t, e);
  }
  function _d(t, e) {
    return wu(4, 4, t, e);
  }
  function Ed(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Rd(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), wu(4, 4, Ed.bind(null, e, t), n));
  }
  function Vs() {}
  function Td(t, e) {
    var n = Zt();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && ws(e, l[1]) ? l[0] : ((n.memoizedState = [t, e]), t);
  }
  function Ad(t, e) {
    var n = Zt();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && ws(e, l[1])) return l[0];
    if (((l = t()), xa)) {
      Mn(!0);
      try {
        t();
      } finally {
        Mn(!1);
      }
    }
    return ((n.memoizedState = [l, e]), l);
  }
  function Xs(t, e, n) {
    return n === void 0 || ((fn & 1073741824) !== 0 && (pt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = xh()), (ot.lanes |= t), (Gn |= t), n);
  }
  function xd(t, e, n, l) {
    return Ae(n, e)
      ? n
      : cl.current !== null
        ? ((t = Xs(t, n, l)), Ae(t, e) || (kt = !0), t)
        : (fn & 42) === 0 || ((fn & 1073741824) !== 0 && (pt & 261930) === 0)
          ? ((kt = !0), (t.memoizedState = n))
          : ((t = xh()), (ot.lanes |= t), (Gn |= t), e);
  }
  function Md(t, e, n, l, r) {
    var o = K.p;
    K.p = o !== 0 && 8 > o ? o : 8;
    var d = j.T,
      v = {};
    ((j.T = v), Ks(t, !1, e, n));
    try {
      var R = r(),
        L = j.S;
      if (
        (L !== null && L(v, R), R !== null && typeof R == "object" && typeof R.then == "function")
      ) {
        var B = Pv(R, l);
        si(t, e, B, we(t));
      } else si(t, e, l, we(t));
    } catch (G) {
      si(t, e, { then: function () {}, status: "rejected", reason: G }, we());
    } finally {
      ((K.p = o), d !== null && v.types !== null && (d.types = v.types), (j.T = d));
    }
  }
  function eg() {}
  function Qs(t, e, n, l) {
    if (t.tag !== 5) throw Error(s(476));
    var r = Od(t).queue;
    Md(
      t,
      r,
      e,
      it,
      n === null
        ? eg
        : function () {
            return (zd(t), n(l));
          },
    );
  }
  function Od(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: it,
      baseState: it,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dn,
        lastRenderedState: it,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: dn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function zd(t) {
    var e = Od(t);
    (e.next === null && (e = t.alternate.memoizedState), si(t, e.next.queue, {}, we()));
  }
  function Zs() {
    return ue(Ai);
  }
  function Cd() {
    return Zt().memoizedState;
  }
  function wd() {
    return Zt().memoizedState;
  }
  function ng(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = we();
          t = Nn(n);
          var l = jn(e, t, n);
          (l !== null && (Se(l, e, n), ai(l, e, n)), (e = { cache: bs() }), (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function ag(t, e, n) {
    var l = we();
    ((n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Du(t) ? Ld(e, n) : ((n = os(t, e, n, l)), n !== null && (Se(n, t, l), Ud(n, e, l))));
  }
  function Dd(t, e, n) {
    var l = we();
    si(t, e, n, l);
  }
  function si(t, e, n, l) {
    var r = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Du(t)) Ld(e, r);
    else {
      var o = t.alternate;
      if (
        t.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = e.lastRenderedReducer), o !== null)
      )
        try {
          var d = e.lastRenderedState,
            v = o(d, n);
          if (((r.hasEagerState = !0), (r.eagerState = v), Ae(v, d)))
            return (du(t, e, r, 0), Lt === null && fu(), !1);
        } catch {}
      if (((n = os(t, e, r, l)), n !== null)) return (Se(n, t, l), Ud(n, e, l), !0);
    }
    return !1;
  }
  function Ks(t, e, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Ao(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Du(t))
    ) {
      if (e) throw Error(s(479));
    } else ((e = os(t, n, l, 2)), e !== null && Se(e, t, 2));
  }
  function Du(t) {
    var e = t.alternate;
    return t === ot || (e !== null && e === ot);
  }
  function Ld(t, e) {
    fl = Au = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e));
  }
  function Ud(t, e, n) {
    if ((n & 4194048) !== 0) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (n |= l), (e.lanes = n), Hc(t, n));
    }
  }
  var oi = {
    readContext: ue,
    use: Ou,
    useCallback: Gt,
    useContext: Gt,
    useEffect: Gt,
    useImperativeHandle: Gt,
    useLayoutEffect: Gt,
    useInsertionEffect: Gt,
    useMemo: Gt,
    useReducer: Gt,
    useRef: Gt,
    useState: Gt,
    useDebugValue: Gt,
    useDeferredValue: Gt,
    useTransition: Gt,
    useSyncExternalStore: Gt,
    useId: Gt,
    useHostTransitionStatus: Gt,
    useFormState: Gt,
    useActionState: Gt,
    useOptimistic: Gt,
    useMemoCache: Gt,
    useCacheRefresh: Gt,
  };
  oi.useEffectEvent = Gt;
  var Nd = {
      readContext: ue,
      use: Ou,
      useCallback: function (t, e) {
        return ((de().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: ue,
      useEffect: gd,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null), Cu(4194308, 4, Ed.bind(null, e, t), n));
      },
      useLayoutEffect: function (t, e) {
        return Cu(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Cu(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = de();
        e = e === void 0 ? null : e;
        var l = t();
        if (xa) {
          Mn(!0);
          try {
            t();
          } finally {
            Mn(!1);
          }
        }
        return ((n.memoizedState = [l, e]), l);
      },
      useReducer: function (t, e, n) {
        var l = de();
        if (n !== void 0) {
          var r = n(e);
          if (xa) {
            Mn(!0);
            try {
              n(e);
            } finally {
              Mn(!1);
            }
          }
        } else r = e;
        return (
          (l.memoizedState = l.baseState = r),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: r,
          }),
          (l.queue = t),
          (t = t.dispatch = ag.bind(null, ot, t)),
          [l.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = de();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = qs(t);
        var e = t.queue,
          n = Dd.bind(null, ot, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: Vs,
      useDeferredValue: function (t, e) {
        var n = de();
        return Xs(n, t, e);
      },
      useTransition: function () {
        var t = qs(!1);
        return ((t = Md.bind(null, ot, t.queue, !0, !1)), (de().memoizedState = t), [!1, t]);
      },
      useSyncExternalStore: function (t, e, n) {
        var l = ot,
          r = de();
        if (gt) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = e()), Lt === null)) throw Error(s(349));
          (pt & 127) !== 0 || nd(l, e, n);
        }
        r.memoizedState = n;
        var o = { value: n, getSnapshot: e };
        return (
          (r.queue = o),
          gd(ld.bind(null, l, o, t), [t]),
          (l.flags |= 2048),
          hl(9, { destroy: void 0 }, ad.bind(null, l, o, n, e), null),
          n
        );
      },
      useId: function () {
        var t = de(),
          e = Lt.identifierPrefix;
        if (gt) {
          var n = Pe,
            l = ke;
          ((n = (l & ~(1 << (32 - Te(l) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = xu++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_"));
        } else ((n = Fv++), (e = "_" + e + "r_" + n.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Zs,
      useFormState: hd,
      useActionState: hd,
      useOptimistic: function (t) {
        var e = de();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((e.queue = n), (e = Ks.bind(null, ot, !0, n)), (n.dispatch = e), [t, e]);
      },
      useMemoCache: js,
      useCacheRefresh: function () {
        return (de().memoizedState = ng.bind(null, ot));
      },
      useEffectEvent: function (t) {
        var e = de(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((Tt & 2) !== 0) throw Error(s(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Js = {
      readContext: ue,
      use: Ou,
      useCallback: Td,
      useContext: ue,
      useEffect: Gs,
      useImperativeHandle: Rd,
      useInsertionEffect: bd,
      useLayoutEffect: _d,
      useMemo: Ad,
      useReducer: zu,
      useRef: vd,
      useState: function () {
        return zu(dn);
      },
      useDebugValue: Vs,
      useDeferredValue: function (t, e) {
        var n = Zt();
        return xd(n, zt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = zu(dn)[0],
          e = Zt().memoizedState;
        return [typeof t == "boolean" ? t : ri(t), e];
      },
      useSyncExternalStore: ed,
      useId: Cd,
      useHostTransitionStatus: Zs,
      useFormState: md,
      useActionState: md,
      useOptimistic: function (t, e) {
        var n = Zt();
        return rd(n, zt, t, e);
      },
      useMemoCache: js,
      useCacheRefresh: wd,
    };
  Js.useEffectEvent = Sd;
  var jd = {
    readContext: ue,
    use: Ou,
    useCallback: Td,
    useContext: ue,
    useEffect: Gs,
    useImperativeHandle: Rd,
    useInsertionEffect: bd,
    useLayoutEffect: _d,
    useMemo: Ad,
    useReducer: Hs,
    useRef: vd,
    useState: function () {
      return Hs(dn);
    },
    useDebugValue: Vs,
    useDeferredValue: function (t, e) {
      var n = Zt();
      return zt === null ? Xs(n, t, e) : xd(n, zt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Hs(dn)[0],
        e = Zt().memoizedState;
      return [typeof t == "boolean" ? t : ri(t), e];
    },
    useSyncExternalStore: ed,
    useId: Cd,
    useHostTransitionStatus: Zs,
    useFormState: yd,
    useActionState: yd,
    useOptimistic: function (t, e) {
      var n = Zt();
      return zt !== null ? rd(n, zt, t, e) : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: js,
    useCacheRefresh: wd,
  };
  jd.useEffectEvent = Sd;
  function ks(t, e, n, l) {
    ((e = t.memoizedState),
      (n = n(l, e)),
      (n = n == null ? e : g({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var Ps = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var l = we(),
        r = Nn(l);
      ((r.payload = e),
        n != null && (r.callback = n),
        (e = jn(t, r, l)),
        e !== null && (Se(e, t, l), ai(e, t, l)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var l = we(),
        r = Nn(l);
      ((r.tag = 1),
        (r.payload = e),
        n != null && (r.callback = n),
        (e = jn(t, r, l)),
        e !== null && (Se(e, t, l), ai(e, t, l)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = we(),
        l = Nn(n);
      ((l.tag = 2),
        e != null && (l.callback = e),
        (e = jn(t, l, n)),
        e !== null && (Se(e, t, n), ai(e, t, n)));
    },
  };
  function Bd(t, e, n, l, r, o, d) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(l, o, d)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Pl(n, l) || !Pl(r, o)
          : !0
    );
  }
  function Hd(t, e, n, l) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, l),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, l),
      e.state !== t && Ps.enqueueReplaceState(e, e.state, null));
  }
  function Ma(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var l in e) l !== "ref" && (n[l] = e[l]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = g({}, n));
      for (var r in t) n[r] === void 0 && (n[r] = t[r]);
    }
    return n;
  }
  function qd(t) {
    cu(t);
  }
  function Yd(t) {
    console.error(t);
  }
  function Gd(t) {
    cu(t);
  }
  function Lu(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Vd(t, e, n) {
    try {
      var l = t.onCaughtError;
      l(n.value, { componentStack: n.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function Fs(t, e, n) {
    return (
      (n = Nn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Lu(t, e);
      }),
      n
    );
  }
  function Xd(t) {
    return ((t = Nn(t)), (t.tag = 3), t);
  }
  function Qd(t, e, n, l) {
    var r = n.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = l.value;
      ((t.payload = function () {
        return r(o);
      }),
        (t.callback = function () {
          Vd(e, n, l);
        }));
    }
    var d = n.stateNode;
    d !== null &&
      typeof d.componentDidCatch == "function" &&
      (t.callback = function () {
        (Vd(e, n, l),
          typeof r != "function" && (Vn === null ? (Vn = new Set([this])) : Vn.add(this)));
        var v = l.stack;
        this.componentDidCatch(l.value, { componentStack: v !== null ? v : "" });
      });
  }
  function lg(t, e, n, l, r) {
    if (((n.flags |= 32768), l !== null && typeof l == "object" && typeof l.then == "function")) {
      if (((e = n.alternate), e !== null && il(e, n, r, !0), (n = Me.current), n !== null)) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              qe === null ? Zu() : n.alternate === null && Vt === 0 && (Vt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = r),
              l === bu
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([l])) : e.add(l),
                  Eo(t, l, r)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === bu
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue), n === null ? (e.retryQueue = new Set([l])) : n.add(l)),
                  Eo(t, l, r)),
              !1
            );
        }
        throw Error(s(435, n.tag));
      }
      return (Eo(t, l, r), Zu(), !1);
    }
    if (gt)
      return (
        (e = Me.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = r),
            l !== ps && ((t = Error(s(422), { cause: l })), Il(Ne(t, n))))
          : (l !== ps && ((e = Error(s(423), { cause: l })), Il(Ne(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (r &= -r),
            (t.lanes |= r),
            (l = Ne(l, n)),
            (r = Fs(t.stateNode, l, r)),
            xs(t, r),
            Vt !== 4 && (Vt = 2)),
        !1
      );
    var o = Error(s(520), { cause: l });
    if (((o = Ne(o, n)), vi === null ? (vi = [o]) : vi.push(o), Vt !== 4 && (Vt = 2), e === null))
      return !0;
    ((l = Ne(l, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = r & -r),
            (n.lanes |= t),
            (t = Fs(n.stateNode, l, t)),
            xs(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (o = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  (Vn === null || !Vn.has(o)))))
          )
            return (
              (n.flags |= 65536),
              (r &= -r),
              (n.lanes |= r),
              (r = Xd(r)),
              Qd(r, t, n, l),
              xs(n, r),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var $s = Error(s(461)),
    kt = !1;
  function re(t, e, n, l) {
    e.child = t === null ? kf(e, null, n, l) : Aa(e, t.child, n, l);
  }
  function Zd(t, e, n, l, r) {
    n = n.render;
    var o = e.ref;
    if ("ref" in l) {
      var d = {};
      for (var v in l) v !== "ref" && (d[v] = l[v]);
    } else d = l;
    return (
      _a(e),
      (l = Ds(t, e, n, d, o, r)),
      (v = Ls()),
      t !== null && !kt
        ? (Us(t, e, r), hn(t, e, r))
        : (gt && v && hs(e), (e.flags |= 1), re(t, e, l, r), e.child)
    );
  }
  function Kd(t, e, n, l, r) {
    if (t === null) {
      var o = n.type;
      return typeof o == "function" && !cs(o) && o.defaultProps === void 0 && n.compare === null
        ? ((e.tag = 15), (e.type = o), Jd(t, e, o, l, r))
        : ((t = mu(n.type, null, l, e, e.mode, r)), (t.ref = e.ref), (t.return = e), (e.child = t));
    }
    if (((o = t.child), !io(t, r))) {
      var d = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Pl), n(d, l) && t.ref === e.ref))
        return hn(t, e, r);
    }
    return ((e.flags |= 1), (t = rn(o, l)), (t.ref = e.ref), (t.return = e), (e.child = t));
  }
  function Jd(t, e, n, l, r) {
    if (t !== null) {
      var o = t.memoizedProps;
      if (Pl(o, l) && t.ref === e.ref)
        if (((kt = !1), (e.pendingProps = l = o), io(t, r))) (t.flags & 131072) !== 0 && (kt = !0);
        else return ((e.lanes = t.lanes), hn(t, e, r));
    }
    return Is(t, e, n, l, r);
  }
  function kd(t, e, n, l) {
    var r = l.children,
      o = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((o = o !== null ? o.baseLanes | n : n), t !== null)) {
          for (l = e.child = t.child, r = 0; l !== null; )
            ((r = r | l.lanes | l.childLanes), (l = l.sibling));
          l = r & ~o;
        } else ((l = 0), (e.child = null));
        return Pd(t, e, o, n, l);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && gu(e, o !== null ? o.cachePool : null),
          o !== null ? $f(e, o) : Os(),
          If(e));
      else return ((l = e.lanes = 536870912), Pd(t, e, o !== null ? o.baseLanes | n : n, n, l));
    } else
      o !== null
        ? (gu(e, o.cachePool), $f(e, o), Hn(), (e.memoizedState = null))
        : (t !== null && gu(e, null), Os(), Hn());
    return (re(t, e, r, n), e.child);
  }
  function ci(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function Pd(t, e, n, l, r) {
    var o = Es();
    return (
      (o = o === null ? null : { parent: Kt._currentValue, pool: o }),
      (e.memoizedState = { baseLanes: n, cachePool: o }),
      t !== null && gu(e, null),
      Os(),
      If(e),
      t !== null && il(t, e, l, !0),
      (e.childLanes = r),
      null
    );
  }
  function Uu(t, e) {
    return (
      (e = ju({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Fd(t, e, n) {
    return (
      Aa(e, t.child, null, n),
      (t = Uu(e, e.pendingProps)),
      (t.flags |= 2),
      Oe(e),
      (e.memoizedState = null),
      t
    );
  }
  function ig(t, e, n) {
    var l = e.pendingProps,
      r = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (gt) {
        if (l.mode === "hidden") return ((t = Uu(e, l)), (e.lanes = 536870912), ci(null, t));
        if (
          (Cs(e),
          (t = jt)
            ? ((t = sm(t, He)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Cn !== null ? { id: ke, overflow: Pe } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Lf(t)),
                (n.return = e),
                (e.child = n),
                (ie = e),
                (jt = null)))
            : (t = null),
          t === null)
        )
          throw Dn(e);
        return ((e.lanes = 536870912), null);
      }
      return Uu(e, l);
    }
    var o = t.memoizedState;
    if (o !== null) {
      var d = o.dehydrated;
      if ((Cs(e), r))
        if (e.flags & 256) ((e.flags &= -257), (e = Fd(t, e, n)));
        else if (e.memoizedState !== null) ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(s(558));
      else if ((kt || il(t, e, n, !1), (r = (n & t.childLanes) !== 0), kt || r)) {
        if (((l = Lt), l !== null && ((d = qc(l, n)), d !== 0 && d !== o.retryLane)))
          throw ((o.retryLane = d), va(t, d), Se(l, t, d), $s);
        (Zu(), (e = Fd(t, e, n)));
      } else
        ((t = o.treeContext),
          (jt = Ye(d.nextSibling)),
          (ie = e),
          (gt = !0),
          (wn = null),
          (He = !1),
          t !== null && jf(e, t),
          (e = Uu(e, l)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = rn(t.child, { mode: l.mode, children: l.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Nu(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(s(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Is(t, e, n, l, r) {
    return (
      _a(e),
      (n = Ds(t, e, n, l, void 0, r)),
      (l = Ls()),
      t !== null && !kt
        ? (Us(t, e, r), hn(t, e, r))
        : (gt && l && hs(e), (e.flags |= 1), re(t, e, n, r), e.child)
    );
  }
  function $d(t, e, n, l, r, o) {
    return (
      _a(e),
      (e.updateQueue = null),
      (n = td(e, l, n, r)),
      Wf(t),
      (l = Ls()),
      t !== null && !kt
        ? (Us(t, e, o), hn(t, e, o))
        : (gt && l && hs(e), (e.flags |= 1), re(t, e, n, o), e.child)
    );
  }
  function Id(t, e, n, l, r) {
    if ((_a(e), e.stateNode === null)) {
      var o = el,
        d = n.contextType;
      (typeof d == "object" && d !== null && (o = ue(d)),
        (o = new n(l, o)),
        (e.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = Ps),
        (e.stateNode = o),
        (o._reactInternals = e),
        (o = e.stateNode),
        (o.props = l),
        (o.state = e.memoizedState),
        (o.refs = {}),
        Ts(e),
        (d = n.contextType),
        (o.context = typeof d == "object" && d !== null ? ue(d) : el),
        (o.state = e.memoizedState),
        (d = n.getDerivedStateFromProps),
        typeof d == "function" && (ks(e, n, d, l), (o.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((d = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
          d !== o.state && Ps.enqueueReplaceState(o, o.state, null),
          ii(e, l, o, r),
          li(),
          (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        (l = !0));
    } else if (t === null) {
      o = e.stateNode;
      var v = e.memoizedProps,
        R = Ma(n, v);
      o.props = R;
      var L = o.context,
        B = n.contextType;
      ((d = el), typeof B == "object" && B !== null && (d = ue(B)));
      var G = n.getDerivedStateFromProps;
      ((B = typeof G == "function" || typeof o.getSnapshotBeforeUpdate == "function"),
        (v = e.pendingProps !== v),
        B ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((v || L !== d) && Hd(e, o, l, d)),
        (Un = !1));
      var U = e.memoizedState;
      ((o.state = U),
        ii(e, l, o, r),
        li(),
        (L = e.memoizedState),
        v || U !== L || Un
          ? (typeof G == "function" && (ks(e, n, G, l), (L = e.memoizedState)),
            (R = Un || Bd(e, n, R, l, U, L, d))
              ? (B ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" && o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" && (e.flags |= 4194308))
              : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
                (e.memoizedProps = l),
                (e.memoizedState = L)),
            (o.props = l),
            (o.state = L),
            (o.context = d),
            (l = R))
          : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), (l = !1)));
    } else {
      ((o = e.stateNode),
        As(t, e),
        (d = e.memoizedProps),
        (B = Ma(n, d)),
        (o.props = B),
        (G = e.pendingProps),
        (U = o.context),
        (L = n.contextType),
        (R = el),
        typeof L == "object" && L !== null && (R = ue(L)),
        (v = n.getDerivedStateFromProps),
        (L = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((d !== G || U !== R) && Hd(e, o, l, R)),
        (Un = !1),
        (U = e.memoizedState),
        (o.state = U),
        ii(e, l, o, r),
        li());
      var N = e.memoizedState;
      d !== G || U !== N || Un || (t !== null && t.dependencies !== null && yu(t.dependencies))
        ? (typeof v == "function" && (ks(e, n, v, l), (N = e.memoizedState)),
          (B =
            Un ||
            Bd(e, n, B, l, U, N, R) ||
            (t !== null && t.dependencies !== null && yu(t.dependencies)))
            ? (L ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(l, N, R),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(l, N, R)),
              typeof o.componentDidUpdate == "function" && (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (d === t.memoizedProps && U === t.memoizedState) ||
                (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (d === t.memoizedProps && U === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = l),
              (e.memoizedState = N)),
          (o.props = l),
          (o.state = N),
          (o.context = R),
          (l = B))
        : (typeof o.componentDidUpdate != "function" ||
            (d === t.memoizedProps && U === t.memoizedState) ||
            (e.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (d === t.memoizedProps && U === t.memoizedState) ||
            (e.flags |= 1024),
          (l = !1));
    }
    return (
      (o = l),
      Nu(t, e),
      (l = (e.flags & 128) !== 0),
      o || l
        ? ((o = e.stateNode),
          (n = l && typeof n.getDerivedStateFromError != "function" ? null : o.render()),
          (e.flags |= 1),
          t !== null && l
            ? ((e.child = Aa(e, t.child, null, r)), (e.child = Aa(e, null, n, r)))
            : re(t, e, n, r),
          (e.memoizedState = o.state),
          (t = e.child))
        : (t = hn(t, e, r)),
      t
    );
  }
  function Wd(t, e, n, l) {
    return (Sa(), (e.flags |= 256), re(t, e, n, l), e.child);
  }
  var Ws = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function to(t) {
    return { baseLanes: t, cachePool: Vf() };
  }
  function eo(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= Ce), t);
  }
  function th(t, e, n) {
    var l = e.pendingProps,
      r = !1,
      o = (e.flags & 128) !== 0,
      d;
    if (
      ((d = o) || (d = t !== null && t.memoizedState === null ? !1 : (Qt.current & 2) !== 0),
      d && ((r = !0), (e.flags &= -129)),
      (d = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (gt) {
        if (
          (r ? Bn(e) : Hn(),
          (t = jt)
            ? ((t = sm(t, He)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Cn !== null ? { id: ke, overflow: Pe } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Lf(t)),
                (n.return = e),
                (e.child = n),
                (ie = e),
                (jt = null)))
            : (t = null),
          t === null)
        )
          throw Dn(e);
        return (Ho(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var v = l.children;
      return (
        (l = l.fallback),
        r
          ? (Hn(),
            (r = e.mode),
            (v = ju({ mode: "hidden", children: v }, r)),
            (l = ga(l, r, n, null)),
            (v.return = e),
            (l.return = e),
            (v.sibling = l),
            (e.child = v),
            (l = e.child),
            (l.memoizedState = to(n)),
            (l.childLanes = eo(t, d, n)),
            (e.memoizedState = Ws),
            ci(null, l))
          : (Bn(e), no(e, v))
      );
    }
    var R = t.memoizedState;
    if (R !== null && ((v = R.dehydrated), v !== null)) {
      if (o)
        e.flags & 256
          ? (Bn(e), (e.flags &= -257), (e = ao(t, e, n)))
          : e.memoizedState !== null
            ? (Hn(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (Hn(),
              (v = l.fallback),
              (r = e.mode),
              (l = ju({ mode: "visible", children: l.children }, r)),
              (v = ga(v, r, n, null)),
              (v.flags |= 2),
              (l.return = e),
              (v.return = e),
              (l.sibling = v),
              (e.child = l),
              Aa(e, t.child, null, n),
              (l = e.child),
              (l.memoizedState = to(n)),
              (l.childLanes = eo(t, d, n)),
              (e.memoizedState = Ws),
              (e = ci(null, l)));
      else if ((Bn(e), Ho(v))) {
        if (((d = v.nextSibling && v.nextSibling.dataset), d)) var L = d.dgst;
        ((d = L),
          (l = Error(s(419))),
          (l.stack = ""),
          (l.digest = d),
          Il({ value: l, source: null, stack: null }),
          (e = ao(t, e, n)));
      } else if ((kt || il(t, e, n, !1), (d = (n & t.childLanes) !== 0), kt || d)) {
        if (((d = Lt), d !== null && ((l = qc(d, n)), l !== 0 && l !== R.retryLane)))
          throw ((R.retryLane = l), va(t, l), Se(d, t, l), $s);
        (Bo(v) || Zu(), (e = ao(t, e, n)));
      } else
        Bo(v)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = R.treeContext),
            (jt = Ye(v.nextSibling)),
            (ie = e),
            (gt = !0),
            (wn = null),
            (He = !1),
            t !== null && jf(e, t),
            (e = no(e, l.children)),
            (e.flags |= 4096));
      return e;
    }
    return r
      ? (Hn(),
        (v = l.fallback),
        (r = e.mode),
        (R = t.child),
        (L = R.sibling),
        (l = rn(R, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = R.subtreeFlags & 65011712),
        L !== null ? (v = rn(L, v)) : ((v = ga(v, r, n, null)), (v.flags |= 2)),
        (v.return = e),
        (l.return = e),
        (l.sibling = v),
        (e.child = l),
        ci(null, l),
        (l = e.child),
        (v = t.child.memoizedState),
        v === null
          ? (v = to(n))
          : ((r = v.cachePool),
            r !== null
              ? ((R = Kt._currentValue), (r = r.parent !== R ? { parent: R, pool: R } : r))
              : (r = Vf()),
            (v = { baseLanes: v.baseLanes | n, cachePool: r })),
        (l.memoizedState = v),
        (l.childLanes = eo(t, d, n)),
        (e.memoizedState = Ws),
        ci(t.child, l))
      : (Bn(e),
        (n = t.child),
        (t = n.sibling),
        (n = rn(n, { mode: "visible", children: l.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((d = e.deletions), d === null ? ((e.deletions = [t]), (e.flags |= 16)) : d.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function no(t, e) {
    return ((e = ju({ mode: "visible", children: e }, t.mode)), (e.return = t), (t.child = e));
  }
  function ju(t, e) {
    return ((t = xe(22, t, null, e)), (t.lanes = 0), t);
  }
  function ao(t, e, n) {
    return (
      Aa(e, t.child, null, n),
      (t = no(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function eh(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    (l !== null && (l.lanes |= e), gs(t.return, e, n));
  }
  function lo(t, e, n, l, r, o) {
    var d = t.memoizedState;
    d === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: r,
          treeForkCount: o,
        })
      : ((d.isBackwards = e),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = l),
        (d.tail = n),
        (d.tailMode = r),
        (d.treeForkCount = o));
  }
  function nh(t, e, n) {
    var l = e.pendingProps,
      r = l.revealOrder,
      o = l.tail;
    l = l.children;
    var d = Qt.current,
      v = (d & 2) !== 0;
    if (
      (v ? ((d = (d & 1) | 2), (e.flags |= 128)) : (d &= 1),
      k(Qt, d),
      re(t, e, l, n),
      (l = gt ? $l : 0),
      !v && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && eh(t, n, e);
        else if (t.tag === 19) eh(t, n, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (r) {
      case "forwards":
        for (n = e.child, r = null; n !== null; )
          ((t = n.alternate), t !== null && Tu(t) === null && (r = n), (n = n.sibling));
        ((n = r),
          n === null ? ((r = e.child), (e.child = null)) : ((r = n.sibling), (n.sibling = null)),
          lo(e, !1, r, n, o, l));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, r = e.child, e.child = null; r !== null; ) {
          if (((t = r.alternate), t !== null && Tu(t) === null)) {
            e.child = r;
            break;
          }
          ((t = r.sibling), (r.sibling = n), (n = r), (r = t));
        }
        lo(e, !0, n, null, o, l);
        break;
      case "together":
        lo(e, !1, null, null, void 0, l);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function hn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies), (Gn |= e.lanes), (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((il(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(s(153));
    if (e.child !== null) {
      for (t = e.child, n = rn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        ((t = t.sibling), (n = n.sibling = rn(t, t.pendingProps)), (n.return = e));
      n.sibling = null;
    }
    return e.child;
  }
  function io(t, e) {
    return (t.lanes & e) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && yu(t)));
  }
  function ug(t, e, n) {
    switch (e.tag) {
      case 3:
        (Xt(e, e.stateNode.containerInfo), Ln(e, Kt, t.memoizedState.cache), Sa());
        break;
      case 27:
      case 5:
        tn(e);
        break;
      case 4:
        Xt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Ln(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), Cs(e), null);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Bn(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? th(t, e, n)
              : (Bn(e), (t = hn(t, e, n)), t !== null ? t.sibling : null);
        Bn(e);
        break;
      case 19:
        var r = (t.flags & 128) !== 0;
        if (
          ((l = (n & e.childLanes) !== 0),
          l || (il(t, e, n, !1), (l = (n & e.childLanes) !== 0)),
          r)
        ) {
          if (l) return nh(t, e, n);
          e.flags |= 128;
        }
        if (
          ((r = e.memoizedState),
          r !== null && ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
          k(Qt, Qt.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), kd(t, e, n, e.pendingProps));
      case 24:
        Ln(e, Kt, t.memoizedState.cache);
    }
    return hn(t, e, n);
  }
  function ah(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) kt = !0;
      else {
        if (!io(t, n) && (e.flags & 128) === 0) return ((kt = !1), ug(t, e, n));
        kt = (t.flags & 131072) !== 0;
      }
    else ((kt = !1), gt && (e.flags & 1048576) !== 0 && Nf(e, $l, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (((t = Ra(e.elementType)), (e.type = t), typeof t == "function"))
            cs(t)
              ? ((l = Ma(t, l)), (e.tag = 1), (e = Id(null, e, t, l, n)))
              : ((e.tag = 0), (e = Is(null, e, t, l, n)));
          else {
            if (t != null) {
              var r = t.$$typeof;
              if (r === H) {
                ((e.tag = 11), (e = Zd(null, e, t, l, n)));
                break t;
              } else if (r === X) {
                ((e.tag = 14), (e = Kd(null, e, t, l, n)));
                break t;
              }
            }
            throw ((e = Yt(t) || t), Error(s(306, e, "")));
          }
        }
        return e;
      case 0:
        return Is(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((l = e.type), (r = Ma(l, e.pendingProps)), Id(t, e, l, r, n));
      case 3:
        t: {
          if ((Xt(e, e.stateNode.containerInfo), t === null)) throw Error(s(387));
          l = e.pendingProps;
          var o = e.memoizedState;
          ((r = o.element), As(t, e), ii(e, l, null, n));
          var d = e.memoizedState;
          if (
            ((l = d.cache),
            Ln(e, Kt, l),
            l !== o.cache && Ss(e, [Kt], n, !0),
            li(),
            (l = d.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: l, isDehydrated: !1, cache: d.cache }),
              (e.updateQueue.baseState = o),
              (e.memoizedState = o),
              e.flags & 256)
            ) {
              e = Wd(t, e, l, n);
              break t;
            } else if (l !== r) {
              ((r = Ne(Error(s(424)), e)), Il(r), (e = Wd(t, e, l, n)));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                  jt = Ye(t.firstChild),
                  ie = e,
                  gt = !0,
                  wn = null,
                  He = !0,
                  n = kf(e, null, l, n),
                  e.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Sa(), l === r)) {
              e = hn(t, e, n);
              break t;
            }
            re(t, e, l, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Nu(t, e),
          t === null
            ? (n = mm(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : gt ||
                ((n = e.type),
                (t = e.pendingProps),
                (l = Iu(ft.current).createElement(n)),
                (l[le] = e),
                (l[he] = t),
                se(l, n, t),
                te(l),
                (e.stateNode = l))
            : (e.memoizedState = mm(e.type, t.memoizedProps, e.pendingProps, t.memoizedState)),
          null
        );
      case 27:
        return (
          tn(e),
          t === null &&
            gt &&
            ((l = e.stateNode = fm(e.type, e.pendingProps, ft.current)),
            (ie = e),
            (He = !0),
            (r = jt),
            Kn(e.type) ? ((qo = r), (jt = Ye(l.firstChild))) : (jt = r)),
          re(t, e, e.pendingProps.children, n),
          Nu(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            gt &&
            ((r = l = jt) &&
              ((l = jg(l, e.type, e.pendingProps, He)),
              l !== null
                ? ((e.stateNode = l), (ie = e), (jt = Ye(l.firstChild)), (He = !1), (r = !0))
                : (r = !1)),
            r || Dn(e)),
          tn(e),
          (r = e.type),
          (o = e.pendingProps),
          (d = t !== null ? t.memoizedProps : null),
          (l = o.children),
          Uo(r, o) ? (l = null) : d !== null && Uo(r, d) && (e.flags |= 32),
          e.memoizedState !== null && ((r = Ds(t, e, $v, null, null, n)), (Ai._currentValue = r)),
          Nu(t, e),
          re(t, e, l, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            gt &&
            ((t = n = jt) &&
              ((n = Bg(n, e.pendingProps, He)),
              n !== null ? ((e.stateNode = n), (ie = e), (jt = null), (t = !0)) : (t = !1)),
            t || Dn(e)),
          null
        );
      case 13:
        return th(t, e, n);
      case 4:
        return (
          Xt(e, e.stateNode.containerInfo),
          (l = e.pendingProps),
          t === null ? (e.child = Aa(e, null, l, n)) : re(t, e, l, n),
          e.child
        );
      case 11:
        return Zd(t, e, e.type, e.pendingProps, n);
      case 7:
        return (re(t, e, e.pendingProps, n), e.child);
      case 8:
        return (re(t, e, e.pendingProps.children, n), e.child);
      case 12:
        return (re(t, e, e.pendingProps.children, n), e.child);
      case 10:
        return ((l = e.pendingProps), Ln(e, e.type, l.value), re(t, e, l.children, n), e.child);
      case 9:
        return (
          (r = e.type._context),
          (l = e.pendingProps.children),
          _a(e),
          (r = ue(r)),
          (l = l(r)),
          (e.flags |= 1),
          re(t, e, l, n),
          e.child
        );
      case 14:
        return Kd(t, e, e.type, e.pendingProps, n);
      case 15:
        return Jd(t, e, e.type, e.pendingProps, n);
      case 19:
        return nh(t, e, n);
      case 31:
        return ig(t, e, n);
      case 22:
        return kd(t, e, n, e.pendingProps);
      case 24:
        return (
          _a(e),
          (l = ue(Kt)),
          t === null
            ? ((r = Es()),
              r === null &&
                ((r = Lt),
                (o = bs()),
                (r.pooledCache = o),
                o.refCount++,
                o !== null && (r.pooledCacheLanes |= n),
                (r = o)),
              (e.memoizedState = { parent: l, cache: r }),
              Ts(e),
              Ln(e, Kt, r))
            : ((t.lanes & n) !== 0 && (As(t, e), ii(e, null, null, n), li()),
              (r = t.memoizedState),
              (o = e.memoizedState),
              r.parent !== l
                ? ((r = { parent: l, cache: l }),
                  (e.memoizedState = r),
                  e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = r),
                  Ln(e, Kt, l))
                : ((l = o.cache), Ln(e, Kt, l), l !== r.cache && Ss(e, [Kt], n, !0))),
          re(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(s(156, e.tag));
  }
  function mn(t) {
    t.flags |= 4;
  }
  function uo(t, e, n, l, r) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (r & 335544128) === r))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Ch()) t.flags |= 8192;
        else throw ((Ta = bu), Rs);
    } else t.flags &= -16777217;
  }
  function lh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Sm(e)))
      if (Ch()) t.flags |= 8192;
      else throw ((Ta = bu), Rs);
  }
  function Bu(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 && ((e = t.tag !== 22 ? jc() : 536870912), (t.lanes |= e), (vl |= e)));
  }
  function fi(t, e) {
    if (!gt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; ) (e.alternate !== null && (n = e), (e = e.sibling));
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var l = null; n !== null; ) (n.alternate !== null && (l = n), (n = n.sibling));
          l === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Bt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      l = 0;
    if (e)
      for (var r = t.child; r !== null; )
        ((n |= r.lanes | r.childLanes),
          (l |= r.subtreeFlags & 65011712),
          (l |= r.flags & 65011712),
          (r.return = t),
          (r = r.sibling));
    else
      for (r = t.child; r !== null; )
        ((n |= r.lanes | r.childLanes),
          (l |= r.subtreeFlags),
          (l |= r.flags),
          (r.return = t),
          (r = r.sibling));
    return ((t.subtreeFlags |= l), (t.childLanes = n), e);
  }
  function rg(t, e, n) {
    var l = e.pendingProps;
    switch ((ms(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Bt(e), null);
      case 1:
        return (Bt(e), null);
      case 3:
        return (
          (n = e.stateNode),
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          cn(Kt),
          Dt(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (ll(e)
              ? mn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), ys())),
          Bt(e),
          null
        );
      case 26:
        var r = e.type,
          o = e.memoizedState;
        return (
          t === null
            ? (mn(e), o !== null ? (Bt(e), lh(e, o)) : (Bt(e), uo(e, r, null, l, n)))
            : o
              ? o !== t.memoizedState
                ? (mn(e), Bt(e), lh(e, o))
                : (Bt(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps), t !== l && mn(e), Bt(e), uo(e, r, t, l, n)),
          null
        );
      case 27:
        if ((en(e), (n = ft.current), (r = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== l && mn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(s(166));
            return (Bt(e), null);
          }
          ((t = $.current), ll(e) ? Bf(e) : ((t = fm(r, l, n)), (e.stateNode = t), mn(e)));
        }
        return (Bt(e), null);
      case 5:
        if ((en(e), (r = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== l && mn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(s(166));
            return (Bt(e), null);
          }
          if (((o = $.current), ll(e))) Bf(e);
          else {
            var d = Iu(ft.current);
            switch (o) {
              case 1:
                o = d.createElementNS("http://www.w3.org/2000/svg", r);
                break;
              case 2:
                o = d.createElementNS("http://www.w3.org/1998/Math/MathML", r);
                break;
              default:
                switch (r) {
                  case "svg":
                    o = d.createElementNS("http://www.w3.org/2000/svg", r);
                    break;
                  case "math":
                    o = d.createElementNS("http://www.w3.org/1998/Math/MathML", r);
                    break;
                  case "script":
                    ((o = d.createElement("div")),
                      (o.innerHTML = "<script><\/script>"),
                      (o = o.removeChild(o.firstChild)));
                    break;
                  case "select":
                    ((o =
                      typeof l.is == "string"
                        ? d.createElement("select", { is: l.is })
                        : d.createElement("select")),
                      l.multiple ? (o.multiple = !0) : l.size && (o.size = l.size));
                    break;
                  default:
                    o =
                      typeof l.is == "string"
                        ? d.createElement(r, { is: l.is })
                        : d.createElement(r);
                }
            }
            ((o[le] = e), (o[he] = l));
            t: for (d = e.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6) o.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                ((d.child.return = d), (d = d.child));
                continue;
              }
              if (d === e) break t;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === e) break t;
                d = d.return;
              }
              ((d.sibling.return = d.return), (d = d.sibling));
            }
            e.stateNode = o;
            t: switch ((se(o, r, l), r)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break t;
              case "img":
                l = !0;
                break t;
              default:
                l = !1;
            }
            l && mn(e);
          }
        }
        return (Bt(e), uo(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n), null);
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && mn(e);
        else {
          if (typeof l != "string" && e.stateNode === null) throw Error(s(166));
          if (((t = ft.current), ll(e))) {
            if (((t = e.stateNode), (n = e.memoizedProps), (l = null), (r = ie), r !== null))
              switch (r.tag) {
                case 27:
                case 5:
                  l = r.memoizedProps;
              }
            ((t[le] = e),
              (t = !!(
                t.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                tm(t.nodeValue, n)
              )),
              t || Dn(e, !0));
          } else ((t = Iu(t).createTextNode(l)), (t[le] = e), (e.stateNode = t));
        }
        return (Bt(e), null);
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((l = ll(e)), n !== null)) {
            if (t === null) {
              if (!l) throw Error(s(318));
              if (((t = e.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
                throw Error(s(557));
              t[le] = e;
            } else (Sa(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (Bt(e), (t = !1));
          } else
            ((n = ys()),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n),
              (t = !0));
          if (!t) return e.flags & 256 ? (Oe(e), e) : (Oe(e), null);
          if ((e.flags & 128) !== 0) throw Error(s(558));
        }
        return (Bt(e), null);
      case 13:
        if (
          ((l = e.memoizedState),
          t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((r = ll(e)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!r) throw Error(s(318));
              if (((r = e.memoizedState), (r = r !== null ? r.dehydrated : null), !r))
                throw Error(s(317));
              r[le] = e;
            } else (Sa(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (Bt(e), (r = !1));
          } else
            ((r = ys()),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = r),
              (r = !0));
          if (!r) return e.flags & 256 ? (Oe(e), e) : (Oe(e), null);
        }
        return (
          Oe(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = l !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((l = e.child),
                (r = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (r = l.alternate.memoizedState.cachePool.pool),
                (o = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (o = l.memoizedState.cachePool.pool),
                o !== r && (l.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              Bu(e, e.updateQueue),
              Bt(e),
              null)
        );
      case 4:
        return (Dt(), t === null && zo(e.stateNode.containerInfo), Bt(e), null);
      case 10:
        return (cn(e.type), Bt(e), null);
      case 19:
        if ((Y(Qt), (l = e.memoizedState), l === null)) return (Bt(e), null);
        if (((r = (e.flags & 128) !== 0), (o = l.rendering), o === null))
          if (r) fi(l, !1);
          else {
            if (Vt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((o = Tu(t)), o !== null)) {
                  for (
                    e.flags |= 128,
                      fi(l, !1),
                      t = o.updateQueue,
                      e.updateQueue = t,
                      Bu(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;
                  )
                    (Df(n, t), (n = n.sibling));
                  return (k(Qt, (Qt.current & 1) | 2), gt && sn(e, l.treeForkCount), e.child);
                }
                t = t.sibling;
              }
            l.tail !== null &&
              ce() > Vu &&
              ((e.flags |= 128), (r = !0), fi(l, !1), (e.lanes = 4194304));
          }
        else {
          if (!r)
            if (((t = Tu(o)), t !== null)) {
              if (
                ((e.flags |= 128),
                (r = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Bu(e, t),
                fi(l, !0),
                l.tail === null && l.tailMode === "hidden" && !o.alternate && !gt)
              )
                return (Bt(e), null);
            } else
              2 * ce() - l.renderingStartTime > Vu &&
                n !== 536870912 &&
                ((e.flags |= 128), (r = !0), fi(l, !1), (e.lanes = 4194304));
          l.isBackwards
            ? ((o.sibling = e.child), (e.child = o))
            : ((t = l.last), t !== null ? (t.sibling = o) : (e.child = o), (l.last = o));
        }
        return l.tail !== null
          ? ((t = l.tail),
            (l.rendering = t),
            (l.tail = t.sibling),
            (l.renderingStartTime = ce()),
            (t.sibling = null),
            (n = Qt.current),
            k(Qt, r ? (n & 1) | 2 : n & 1),
            gt && sn(e, l.treeForkCount),
            t)
          : (Bt(e), null);
      case 22:
      case 23:
        return (
          Oe(e),
          zs(),
          (l = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== l && (e.flags |= 8192)
            : l && (e.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Bt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Bt(e),
          (n = e.updateQueue),
          n !== null && Bu(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (l = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          l !== n && (e.flags |= 2048),
          t !== null && Y(Ea),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          cn(Kt),
          Bt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, e.tag));
  }
  function sg(t, e) {
    switch ((ms(e), e.tag)) {
      case 1:
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 3:
        return (
          cn(Kt),
          Dt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 26:
      case 27:
      case 5:
        return (en(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((Oe(e), e.alternate === null)) throw Error(s(340));
          Sa();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 13:
        if ((Oe(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
          if (e.alternate === null) throw Error(s(340));
          Sa();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 19:
        return (Y(Qt), null);
      case 4:
        return (Dt(), null);
      case 10:
        return (cn(e.type), null);
      case 22:
      case 23:
        return (
          Oe(e),
          zs(),
          t !== null && Y(Ea),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (cn(Kt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ih(t, e) {
    switch ((ms(e), e.tag)) {
      case 3:
        (cn(Kt), Dt());
        break;
      case 26:
      case 27:
      case 5:
        en(e);
        break;
      case 4:
        Dt();
        break;
      case 31:
        e.memoizedState !== null && Oe(e);
        break;
      case 13:
        Oe(e);
        break;
      case 19:
        Y(Qt);
        break;
      case 10:
        cn(e.type);
        break;
      case 22:
      case 23:
        (Oe(e), zs(), t !== null && Y(Ea));
        break;
      case 24:
        cn(Kt);
    }
  }
  function di(t, e) {
    try {
      var n = e.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var r = l.next;
        n = r;
        do {
          if ((n.tag & t) === t) {
            l = void 0;
            var o = n.create,
              d = n.inst;
            ((l = o()), (d.destroy = l));
          }
          n = n.next;
        } while (n !== r);
      }
    } catch (v) {
      Mt(e, e.return, v);
    }
  }
  function qn(t, e, n) {
    try {
      var l = e.updateQueue,
        r = l !== null ? l.lastEffect : null;
      if (r !== null) {
        var o = r.next;
        l = o;
        do {
          if ((l.tag & t) === t) {
            var d = l.inst,
              v = d.destroy;
            if (v !== void 0) {
              ((d.destroy = void 0), (r = e));
              var R = n,
                L = v;
              try {
                L();
              } catch (B) {
                Mt(r, R, B);
              }
            }
          }
          l = l.next;
        } while (l !== o);
      }
    } catch (B) {
      Mt(e, e.return, B);
    }
  }
  function uh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Ff(e, n);
      } catch (l) {
        Mt(t, t.return, l);
      }
    }
  }
  function rh(t, e, n) {
    ((n.props = Ma(t.type, t.memoizedProps)), (n.state = t.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (l) {
      Mt(t, e, l);
    }
  }
  function hi(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(l)) : (n.current = l);
      }
    } catch (r) {
      Mt(t, e, r);
    }
  }
  function Fe(t, e) {
    var n = t.ref,
      l = t.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (r) {
          Mt(t, e, r);
        } finally {
          ((t.refCleanup = null), (t = t.alternate), t != null && (t.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Mt(t, e, r);
        }
      else n.current = null;
  }
  function sh(t) {
    var e = t.type,
      n = t.memoizedProps,
      l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break t;
        case "img":
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (r) {
      Mt(t, t.return, r);
    }
  }
  function ro(t, e, n) {
    try {
      var l = t.stateNode;
      (Cg(l, t.type, n, e), (l[he] = e));
    } catch (r) {
      Mt(t, t.return, r);
    }
  }
  function oh(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || (t.tag === 27 && Kn(t.type)) || t.tag === 4
    );
  }
  function so(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || oh(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if ((t.tag === 27 && Kn(t.type)) || t.flags & 2 || t.child === null || t.tag === 4)
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function oo(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      ((t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(t, e)
          : ((e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = ln)));
    else if (
      l !== 4 &&
      (l === 27 && Kn(t.type) && ((n = t.stateNode), (e = null)), (t = t.child), t !== null)
    )
      for (oo(t, e, n), t = t.sibling; t !== null; ) (oo(t, e, n), (t = t.sibling));
  }
  function Hu(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6) ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
    else if (l !== 4 && (l === 27 && Kn(t.type) && (n = t.stateNode), (t = t.child), t !== null))
      for (Hu(t, e, n), t = t.sibling; t !== null; ) (Hu(t, e, n), (t = t.sibling));
  }
  function ch(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var l = t.type, r = e.attributes; r.length; ) e.removeAttributeNode(r[0]);
      (se(e, l, n), (e[le] = t), (e[he] = n));
    } catch (o) {
      Mt(t, t.return, o);
    }
  }
  var pn = !1,
    Pt = !1,
    co = !1,
    fh = typeof WeakSet == "function" ? WeakSet : Set,
    ee = null;
  function og(t, e) {
    if (((t = t.containerInfo), (Do = ir), (t = Rf(t)), as(t))) {
      if ("selectionStart" in t) var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var r = l.anchorOffset,
              o = l.focusNode;
            l = l.focusOffset;
            try {
              (n.nodeType, o.nodeType);
            } catch {
              n = null;
              break t;
            }
            var d = 0,
              v = -1,
              R = -1,
              L = 0,
              B = 0,
              G = t,
              U = null;
            e: for (;;) {
              for (
                var N;
                G !== n || (r !== 0 && G.nodeType !== 3) || (v = d + r),
                  G !== o || (l !== 0 && G.nodeType !== 3) || (R = d + l),
                  G.nodeType === 3 && (d += G.nodeValue.length),
                  (N = G.firstChild) !== null;
              )
                ((U = G), (G = N));
              for (;;) {
                if (G === t) break e;
                if (
                  (U === n && ++L === r && (v = d),
                  U === o && ++B === l && (R = d),
                  (N = G.nextSibling) !== null)
                )
                  break;
                ((G = U), (U = G.parentNode));
              }
              G = N;
            }
            n = v === -1 || R === -1 ? null : { start: v, end: R };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Lo = { focusedElem: t, selectionRange: n }, ir = !1, ee = e; ee !== null; )
      if (((e = ee), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
        ((t.return = e), (ee = t));
      else
        for (; ee !== null; ) {
          switch (((e = ee), (o = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue), (t = t !== null ? t.events : null), t !== null)
              )
                for (n = 0; n < t.length; n++) ((r = t[n]), (r.ref.impl = r.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && o !== null) {
                ((t = void 0),
                  (n = e),
                  (r = o.memoizedProps),
                  (o = o.memoizedState),
                  (l = n.stateNode));
                try {
                  var W = Ma(n.type, r);
                  ((t = l.getSnapshotBeforeUpdate(W, o)),
                    (l.__reactInternalSnapshotBeforeUpdate = t));
                } catch (rt) {
                  Mt(n, n.return, rt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)) jo(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      jo(t);
                      break;
                    default:
                      t.textContent = "";
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
              if ((t & 1024) !== 0) throw Error(s(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (ee = t));
            break;
          }
          ee = e.return;
        }
  }
  function dh(t, e, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (vn(t, n), l & 4 && di(5, n));
        break;
      case 1:
        if ((vn(t, n), l & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (d) {
              Mt(n, n.return, d);
            }
          else {
            var r = Ma(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(r, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              Mt(n, n.return, d);
            }
          }
        (l & 64 && uh(n), l & 512 && hi(n, n.return));
        break;
      case 3:
        if ((vn(t, n), l & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Ff(t, e);
          } catch (d) {
            Mt(n, n.return, d);
          }
        }
        break;
      case 27:
        e === null && l & 4 && ch(n);
      case 26:
      case 5:
        (vn(t, n), e === null && l & 4 && sh(n), l & 512 && hi(n, n.return));
        break;
      case 12:
        vn(t, n);
        break;
      case 31:
        (vn(t, n), l & 4 && ph(t, n));
        break;
      case 13:
        (vn(t, n),
          l & 4 && yh(t, n),
          l & 64 &&
            ((t = n.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null && ((n = gg.bind(null, n)), Hg(t, n)))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || pn), !l)) {
          ((e = (e !== null && e.memoizedState !== null) || Pt), (r = pn));
          var o = Pt;
          ((pn = l),
            (Pt = e) && !o ? gn(t, n, (n.subtreeFlags & 8772) !== 0) : vn(t, n),
            (pn = r),
            (Pt = o));
        }
        break;
      case 30:
        break;
      default:
        vn(t, n);
    }
  }
  function hh(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), hh(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Yr(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var Ht = null,
    pe = !1;
  function yn(t, e, n) {
    for (n = n.child; n !== null; ) (mh(t, e, n), (n = n.sibling));
  }
  function mh(t, e, n) {
    if (Re && typeof Re.onCommitFiberUnmount == "function")
      try {
        Re.onCommitFiberUnmount(Bl, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Pt || Fe(n, e),
          yn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Pt || Fe(n, e);
        var l = Ht,
          r = pe;
        (Kn(n.type) && ((Ht = n.stateNode), (pe = !1)),
          yn(t, e, n),
          Ei(n.stateNode),
          (Ht = l),
          (pe = r));
        break;
      case 5:
        Pt || Fe(n, e);
      case 6:
        if (((l = Ht), (r = pe), (Ht = null), yn(t, e, n), (Ht = l), (pe = r), Ht !== null))
          if (pe)
            try {
              (Ht.nodeType === 9
                ? Ht.body
                : Ht.nodeName === "HTML"
                  ? Ht.ownerDocument.body
                  : Ht
              ).removeChild(n.stateNode);
            } catch (o) {
              Mt(n, e, o);
            }
          else
            try {
              Ht.removeChild(n.stateNode);
            } catch (o) {
              Mt(n, e, o);
            }
        break;
      case 18:
        Ht !== null &&
          (pe
            ? ((t = Ht),
              um(
                t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
                n.stateNode,
              ),
              Al(t))
            : um(Ht, n.stateNode));
        break;
      case 4:
        ((l = Ht),
          (r = pe),
          (Ht = n.stateNode.containerInfo),
          (pe = !0),
          yn(t, e, n),
          (Ht = l),
          (pe = r));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (qn(2, n, e), Pt || qn(4, n, e), yn(t, e, n));
        break;
      case 1:
        (Pt ||
          (Fe(n, e), (l = n.stateNode), typeof l.componentWillUnmount == "function" && rh(n, e, l)),
          yn(t, e, n));
        break;
      case 21:
        yn(t, e, n);
        break;
      case 22:
        ((Pt = (l = Pt) || n.memoizedState !== null), yn(t, e, n), (Pt = l));
        break;
      default:
        yn(t, e, n);
    }
  }
  function ph(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        Al(t);
      } catch (n) {
        Mt(e, e.return, n);
      }
    }
  }
  function yh(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Al(t);
      } catch (n) {
        Mt(e, e.return, n);
      }
  }
  function cg(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new fh()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new fh()),
          e
        );
      default:
        throw Error(s(435, t.tag));
    }
  }
  function qu(t, e) {
    var n = cg(t);
    e.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var r = Sg.bind(null, t, l);
        l.then(r, r);
      }
    });
  }
  function ye(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var r = n[l],
          o = t,
          d = e,
          v = d;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Kn(v.type)) {
                ((Ht = v.stateNode), (pe = !1));
                break t;
              }
              break;
            case 5:
              ((Ht = v.stateNode), (pe = !1));
              break t;
            case 3:
            case 4:
              ((Ht = v.stateNode.containerInfo), (pe = !0));
              break t;
          }
          v = v.return;
        }
        if (Ht === null) throw Error(s(160));
        (mh(o, d, r),
          (Ht = null),
          (pe = !1),
          (o = r.alternate),
          o !== null && (o.return = null),
          (r.return = null));
      }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) (vh(e, t), (e = e.sibling));
  }
  var Qe = null;
  function vh(t, e) {
    var n = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ye(e, t), ve(t), l & 4 && (qn(3, t, t.return), di(3, t), qn(5, t, t.return)));
        break;
      case 1:
        (ye(e, t),
          ve(t),
          l & 512 && (Pt || n === null || Fe(n, n.return)),
          l & 64 &&
            pn &&
            ((t = t.updateQueue),
            t !== null &&
              ((l = t.callbacks),
              l !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? l : n.concat(l))))));
        break;
      case 26:
        var r = Qe;
        if ((ye(e, t), ve(t), l & 512 && (Pt || n === null || Fe(n, n.return)), l & 4)) {
          var o = n !== null ? n.memoizedState : null;
          if (((l = t.memoizedState), n === null))
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  ((l = t.type), (n = t.memoizedProps), (r = r.ownerDocument || r));
                  e: switch (l) {
                    case "title":
                      ((o = r.getElementsByTagName("title")[0]),
                        (!o ||
                          o[Yl] ||
                          o[le] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = r.createElement(l)),
                          r.head.insertBefore(o, r.querySelector("head > title"))),
                        se(o, l, n),
                        (o[le] = t),
                        te(o),
                        (l = o));
                      break t;
                    case "link":
                      var d = vm("link", "href", r).get(l + (n.href || ""));
                      if (d) {
                        for (var v = 0; v < d.length; v++)
                          if (
                            ((o = d[v]),
                            o.getAttribute("href") ===
                              (n.href == null || n.href === "" ? null : n.href) &&
                              o.getAttribute("rel") === (n.rel == null ? null : n.rel) &&
                              o.getAttribute("title") === (n.title == null ? null : n.title) &&
                              o.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            d.splice(v, 1);
                            break e;
                          }
                      }
                      ((o = r.createElement(l)), se(o, l, n), r.head.appendChild(o));
                      break;
                    case "meta":
                      if ((d = vm("meta", "content", r).get(l + (n.content || "")))) {
                        for (v = 0; v < d.length; v++)
                          if (
                            ((o = d[v]),
                            o.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              o.getAttribute("name") === (n.name == null ? null : n.name) &&
                              o.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              o.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              o.getAttribute("charset") === (n.charSet == null ? null : n.charSet))
                          ) {
                            d.splice(v, 1);
                            break e;
                          }
                      }
                      ((o = r.createElement(l)), se(o, l, n), r.head.appendChild(o));
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  ((o[le] = t), te(o), (l = o));
                }
                t.stateNode = l;
              } else gm(r, t.type, t.stateNode);
            else t.stateNode = ym(r, l, t.memoizedProps);
          else
            o !== l
              ? (o === null
                  ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                  : o.count--,
                l === null ? gm(r, t.type, t.stateNode) : ym(r, l, t.memoizedProps))
              : l === null && t.stateNode !== null && ro(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (ye(e, t),
          ve(t),
          l & 512 && (Pt || n === null || Fe(n, n.return)),
          n !== null && l & 4 && ro(t, t.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((ye(e, t), ve(t), l & 512 && (Pt || n === null || Fe(n, n.return)), t.flags & 32)) {
          r = t.stateNode;
          try {
            ka(r, "");
          } catch (W) {
            Mt(t, t.return, W);
          }
        }
        (l & 4 &&
          t.stateNode != null &&
          ((r = t.memoizedProps), ro(t, r, n !== null ? n.memoizedProps : r)),
          l & 1024 && (co = !0));
        break;
      case 6:
        if ((ye(e, t), ve(t), l & 4)) {
          if (t.stateNode === null) throw Error(s(162));
          ((l = t.memoizedProps), (n = t.stateNode));
          try {
            n.nodeValue = l;
          } catch (W) {
            Mt(t, t.return, W);
          }
        }
        break;
      case 3:
        if (
          ((er = null),
          (r = Qe),
          (Qe = Wu(e.containerInfo)),
          ye(e, t),
          (Qe = r),
          ve(t),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Al(e.containerInfo);
          } catch (W) {
            Mt(t, t.return, W);
          }
        co && ((co = !1), gh(t));
        break;
      case 4:
        ((l = Qe), (Qe = Wu(t.stateNode.containerInfo)), ye(e, t), ve(t), (Qe = l));
        break;
      case 12:
        (ye(e, t), ve(t));
        break;
      case 31:
        (ye(e, t),
          ve(t),
          l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), qu(t, l))));
        break;
      case 13:
        (ye(e, t),
          ve(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
            (Gu = ce()),
          l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), qu(t, l))));
        break;
      case 22:
        r = t.memoizedState !== null;
        var R = n !== null && n.memoizedState !== null,
          L = pn,
          B = Pt;
        if (((pn = L || r), (Pt = B || R), ye(e, t), (Pt = B), (pn = L), ve(t), l & 8192))
          t: for (
            e = t.stateNode,
              e._visibility = r ? e._visibility & -2 : e._visibility | 1,
              r && (n === null || R || pn || Pt || Oa(t)),
              n = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                R = n = e;
                try {
                  if (((o = R.stateNode), r))
                    ((d = o.style),
                      typeof d.setProperty == "function"
                        ? d.setProperty("display", "none", "important")
                        : (d.display = "none"));
                  else {
                    v = R.stateNode;
                    var G = R.memoizedProps.style,
                      U = G != null && G.hasOwnProperty("display") ? G.display : null;
                    v.style.display = U == null || typeof U == "boolean" ? "" : ("" + U).trim();
                  }
                } catch (W) {
                  Mt(R, R.return, W);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                R = e;
                try {
                  R.stateNode.nodeValue = r ? "" : R.memoizedProps;
                } catch (W) {
                  Mt(R, R.return, W);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                R = e;
                try {
                  var N = R.stateNode;
                  r ? rm(N, !0) : rm(R.stateNode, !1);
                } catch (W) {
                  Mt(R, R.return, W);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) || e.memoizedState === null || e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (n === e && (n = null), (e = e.return));
            }
            (n === e && (n = null), (e.sibling.return = e.return), (e = e.sibling));
          }
        l & 4 &&
          ((l = t.updateQueue),
          l !== null && ((n = l.retryQueue), n !== null && ((l.retryQueue = null), qu(t, n))));
        break;
      case 19:
        (ye(e, t),
          ve(t),
          l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), qu(t, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ye(e, t), ve(t));
    }
  }
  function ve(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, l = t.return; l !== null; ) {
          if (oh(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(s(160));
        switch (n.tag) {
          case 27:
            var r = n.stateNode,
              o = so(t);
            Hu(t, o, r);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (ka(d, ""), (n.flags &= -33));
            var v = so(t);
            Hu(t, v, d);
            break;
          case 3:
          case 4:
            var R = n.stateNode.containerInfo,
              L = so(t);
            oo(t, L, R);
            break;
          default:
            throw Error(s(161));
        }
      } catch (B) {
        Mt(t, t.return, B);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function gh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (gh(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), (t = t.sibling));
      }
  }
  function vn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (dh(t, e.alternate, e), (e = e.sibling));
  }
  function Oa(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (qn(4, e, e.return), Oa(e));
          break;
        case 1:
          Fe(e, e.return);
          var n = e.stateNode;
          (typeof n.componentWillUnmount == "function" && rh(e, e.return, n), Oa(e));
          break;
        case 27:
          Ei(e.stateNode);
        case 26:
        case 5:
          (Fe(e, e.return), Oa(e));
          break;
        case 22:
          e.memoizedState === null && Oa(e);
          break;
        case 30:
          Oa(e);
          break;
        default:
          Oa(e);
      }
      t = t.sibling;
    }
  }
  function gn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate,
        r = t,
        o = e,
        d = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          (gn(r, o, n), di(4, o));
          break;
        case 1:
          if ((gn(r, o, n), (l = o), (r = l.stateNode), typeof r.componentDidMount == "function"))
            try {
              r.componentDidMount();
            } catch (L) {
              Mt(l, l.return, L);
            }
          if (((l = o), (r = l.updateQueue), r !== null)) {
            var v = l.stateNode;
            try {
              var R = r.shared.hiddenCallbacks;
              if (R !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < R.length; r++) Pf(R[r], v);
            } catch (L) {
              Mt(l, l.return, L);
            }
          }
          (n && d & 64 && uh(o), hi(o, o.return));
          break;
        case 27:
          ch(o);
        case 26:
        case 5:
          (gn(r, o, n), n && l === null && d & 4 && sh(o), hi(o, o.return));
          break;
        case 12:
          gn(r, o, n);
          break;
        case 31:
          (gn(r, o, n), n && d & 4 && ph(r, o));
          break;
        case 13:
          (gn(r, o, n), n && d & 4 && yh(r, o));
          break;
        case 22:
          (o.memoizedState === null && gn(r, o, n), hi(o, o.return));
          break;
        case 30:
          break;
        default:
          gn(r, o, n);
      }
      e = e.sibling;
    }
  }
  function fo(t, e) {
    var n = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Wl(n)));
  }
  function ho(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Wl(t)));
  }
  function Ze(t, e, n, l) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Sh(t, e, n, l), (e = e.sibling));
  }
  function Sh(t, e, n, l) {
    var r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Ze(t, e, n, l), r & 2048 && di(9, e));
        break;
      case 1:
        Ze(t, e, n, l);
        break;
      case 3:
        (Ze(t, e, n, l),
          r & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Wl(t))));
        break;
      case 12:
        if (r & 2048) {
          (Ze(t, e, n, l), (t = e.stateNode));
          try {
            var o = e.memoizedProps,
              d = o.id,
              v = o.onPostCommit;
            typeof v == "function" &&
              v(d, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (R) {
            Mt(e, e.return, R);
          }
        } else Ze(t, e, n, l);
        break;
      case 31:
        Ze(t, e, n, l);
        break;
      case 13:
        Ze(t, e, n, l);
        break;
      case 23:
        break;
      case 22:
        ((o = e.stateNode),
          (d = e.alternate),
          e.memoizedState !== null
            ? o._visibility & 2
              ? Ze(t, e, n, l)
              : mi(t, e)
            : o._visibility & 2
              ? Ze(t, e, n, l)
              : ((o._visibility |= 2), ml(t, e, n, l, (e.subtreeFlags & 10256) !== 0 || !1)),
          r & 2048 && fo(d, e));
        break;
      case 24:
        (Ze(t, e, n, l), r & 2048 && ho(e.alternate, e));
        break;
      default:
        Ze(t, e, n, l);
    }
  }
  function ml(t, e, n, l, r) {
    for (r = r && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var o = t,
        d = e,
        v = n,
        R = l,
        L = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (ml(o, d, v, R, r), di(8, d));
          break;
        case 23:
          break;
        case 22:
          var B = d.stateNode;
          (d.memoizedState !== null
            ? B._visibility & 2
              ? ml(o, d, v, R, r)
              : mi(o, d)
            : ((B._visibility |= 2), ml(o, d, v, R, r)),
            r && L & 2048 && fo(d.alternate, d));
          break;
        case 24:
          (ml(o, d, v, R, r), r && L & 2048 && ho(d.alternate, d));
          break;
        default:
          ml(o, d, v, R, r);
      }
      e = e.sibling;
    }
  }
  function mi(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          l = e,
          r = l.flags;
        switch (l.tag) {
          case 22:
            (mi(n, l), r & 2048 && fo(l.alternate, l));
            break;
          case 24:
            (mi(n, l), r & 2048 && ho(l.alternate, l));
            break;
          default:
            mi(n, l);
        }
        e = e.sibling;
      }
  }
  var pi = 8192;
  function pl(t, e, n) {
    if (t.subtreeFlags & pi) for (t = t.child; t !== null; ) (bh(t, e, n), (t = t.sibling));
  }
  function bh(t, e, n) {
    switch (t.tag) {
      case 26:
        (pl(t, e, n),
          t.flags & pi && t.memoizedState !== null && Fg(n, Qe, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        pl(t, e, n);
        break;
      case 3:
      case 4:
        var l = Qe;
        ((Qe = Wu(t.stateNode.containerInfo)), pl(t, e, n), (Qe = l));
        break;
      case 22:
        t.memoizedState === null &&
          ((l = t.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = pi), (pi = 16777216), pl(t, e, n), (pi = l))
            : pl(t, e, n));
        break;
      default:
        pl(t, e, n);
    }
  }
  function _h(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function yi(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          ((ee = l), Rh(l, t));
        }
      _h(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Eh(t), (t = t.sibling));
  }
  function Eh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (yi(t), t.flags & 2048 && qn(9, t, t.return));
        break;
      case 3:
        yi(t);
        break;
      case 12:
        yi(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Yu(t))
          : yi(t);
        break;
      default:
        yi(t);
    }
  }
  function Yu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          ((ee = l), Rh(l, t));
        }
      _h(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (qn(8, e, e.return), Yu(e));
          break;
        case 22:
          ((n = e.stateNode), n._visibility & 2 && ((n._visibility &= -3), Yu(e)));
          break;
        default:
          Yu(e);
      }
      t = t.sibling;
    }
  }
  function Rh(t, e) {
    for (; ee !== null; ) {
      var n = ee;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          qn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Wl(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) ((l.return = n), (ee = l));
      else
        t: for (n = t; ee !== null; ) {
          l = ee;
          var r = l.sibling,
            o = l.return;
          if ((hh(l), l === n)) {
            ee = null;
            break t;
          }
          if (r !== null) {
            ((r.return = o), (ee = r));
            break t;
          }
          ee = o;
        }
    }
  }
  var fg = {
      getCacheForType: function (t) {
        var e = ue(Kt),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
      cacheSignal: function () {
        return ue(Kt).controller.signal;
      },
    },
    dg = typeof WeakMap == "function" ? WeakMap : Map,
    Tt = 0,
    Lt = null,
    ht = null,
    pt = 0,
    xt = 0,
    ze = null,
    Yn = !1,
    yl = !1,
    mo = !1,
    Sn = 0,
    Vt = 0,
    Gn = 0,
    za = 0,
    po = 0,
    Ce = 0,
    vl = 0,
    vi = null,
    ge = null,
    yo = !1,
    Gu = 0,
    Th = 0,
    Vu = 1 / 0,
    Xu = null,
    Vn = null,
    $t = 0,
    Xn = null,
    gl = null,
    bn = 0,
    vo = 0,
    go = null,
    Ah = null,
    gi = 0,
    So = null;
  function we() {
    return (Tt & 2) !== 0 && pt !== 0 ? pt & -pt : j.T !== null ? Ao() : Yc();
  }
  function xh() {
    if (Ce === 0)
      if ((pt & 536870912) === 0 || gt) {
        var t = $i;
        (($i <<= 1), ($i & 3932160) === 0 && ($i = 262144), (Ce = t));
      } else Ce = 536870912;
    return ((t = Me.current), t !== null && (t.flags |= 32), Ce);
  }
  function Se(t, e, n) {
    (((t === Lt && (xt === 2 || xt === 9)) || t.cancelPendingCommit !== null) &&
      (Sl(t, 0), Qn(t, pt, Ce, !1)),
      ql(t, n),
      ((Tt & 2) === 0 || t !== Lt) &&
        (t === Lt && ((Tt & 2) === 0 && (za |= n), Vt === 4 && Qn(t, pt, Ce, !1)), $e(t)));
  }
  function Mh(t, e, n) {
    if ((Tt & 6) !== 0) throw Error(s(327));
    var l = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || Hl(t, e),
      r = l ? pg(t, e) : _o(t, e, !0),
      o = l;
    do {
      if (r === 0) {
        yl && !l && Qn(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), o && !hg(n))) {
          ((r = _o(t, e, !1)), (o = !1));
          continue;
        }
        if (r === 2) {
          if (((o = e), t.errorRecoveryDisabledLanes & o)) var d = 0;
          else
            ((d = t.pendingLanes & -536870913), (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0));
          if (d !== 0) {
            e = d;
            t: {
              var v = t;
              r = vi;
              var R = v.current.memoizedState.isDehydrated;
              if ((R && (Sl(v, d).flags |= 256), (d = _o(v, d, !1)), d !== 2)) {
                if (mo && !R) {
                  ((v.errorRecoveryDisabledLanes |= o), (za |= o), (r = 4));
                  break t;
                }
                ((o = ge), (ge = r), o !== null && (ge === null ? (ge = o) : ge.push.apply(ge, o)));
              }
              r = d;
            }
            if (((o = !1), r !== 2)) continue;
          }
        }
        if (r === 1) {
          (Sl(t, 0), Qn(t, e, 0, !0));
          break;
        }
        t: {
          switch (((l = t), (o = r), o)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Qn(l, e, Ce, !Yn);
              break t;
            case 2:
              ge = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((e & 62914560) === e && ((r = Gu + 300 - ce()), 10 < r)) {
            if ((Qn(l, e, Ce, !Yn), Wi(l, 0, !0) !== 0)) break t;
            ((bn = e),
              (l.timeoutHandle = lm(
                Oh.bind(null, l, n, ge, Xu, yo, e, Ce, za, vl, Yn, o, "Throttled", -0, 0),
                r,
              )));
            break t;
          }
          Oh(l, n, ge, Xu, yo, e, Ce, za, vl, Yn, o, null, -0, 0);
        }
      }
      break;
    } while (!0);
    $e(t);
  }
  function Oh(t, e, n, l, r, o, d, v, R, L, B, G, U, N) {
    if (((t.timeoutHandle = -1), (G = e.subtreeFlags), G & 8192 || (G & 16785408) === 16785408)) {
      ((G = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ln,
      }),
        bh(e, o, G));
      var W = (o & 62914560) === o ? Gu - ce() : (o & 4194048) === o ? Th - ce() : 0;
      if (((W = $g(G, W)), W !== null)) {
        ((bn = o),
          (t.cancelPendingCommit = W(jh.bind(null, t, e, o, n, l, r, d, v, R, B, G, null, U, N))),
          Qn(t, o, d, !L));
        return;
      }
    }
    jh(t, e, o, n, l, r, d, v, R);
  }
  function hg(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var r = n[l],
            o = r.getSnapshot;
          r = r.value;
          try {
            if (!Ae(o(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null)) ((n.return = e), (e = n));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function Qn(t, e, n, l) {
    ((e &= ~po),
      (e &= ~za),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      l && (t.warmLanes |= e),
      (l = t.expirationTimes));
    for (var r = e; 0 < r; ) {
      var o = 31 - Te(r),
        d = 1 << o;
      ((l[o] = -1), (r &= ~d));
    }
    n !== 0 && Bc(t, n, e);
  }
  function Qu() {
    return (Tt & 6) === 0 ? (Si(0), !1) : !0;
  }
  function bo() {
    if (ht !== null) {
      if (xt === 0) var t = ht.return;
      else ((t = ht), (on = ba = null), Ns(t), (ol = null), (ei = 0), (t = ht));
      for (; t !== null; ) (ih(t.alternate, t), (t = t.return));
      ht = null;
    }
  }
  function Sl(t, e) {
    var n = t.timeoutHandle;
    (n !== -1 && ((t.timeoutHandle = -1), Lg(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (bn = 0),
      bo(),
      (Lt = t),
      (ht = n = rn(t.current, null)),
      (pt = e),
      (xt = 0),
      (ze = null),
      (Yn = !1),
      (yl = Hl(t, e)),
      (mo = !1),
      (vl = Ce = po = za = Gn = Vt = 0),
      (ge = vi = null),
      (yo = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var r = 31 - Te(l),
          o = 1 << r;
        ((e |= t[r]), (l &= ~o));
      }
    return ((Sn = e), fu(), n);
  }
  function zh(t, e) {
    ((ot = null),
      (j.H = oi),
      e === sl || e === Su
        ? ((e = Zf()), (xt = 3))
        : e === Rs
          ? ((e = Zf()), (xt = 4))
          : (xt =
              e === $s
                ? 8
                : e !== null && typeof e == "object" && typeof e.then == "function"
                  ? 6
                  : 1),
      (ze = e),
      ht === null && ((Vt = 1), Lu(t, Ne(e, t.current))));
  }
  function Ch() {
    var t = Me.current;
    return t === null
      ? !0
      : (pt & 4194048) === pt
        ? qe === null
        : (pt & 62914560) === pt || (pt & 536870912) !== 0
          ? t === qe
          : !1;
  }
  function wh() {
    var t = j.H;
    return ((j.H = oi), t === null ? oi : t);
  }
  function Dh() {
    var t = j.A;
    return ((j.A = fg), t);
  }
  function Zu() {
    ((Vt = 4),
      Yn || ((pt & 4194048) !== pt && Me.current !== null) || (yl = !0),
      ((Gn & 134217727) === 0 && (za & 134217727) === 0) || Lt === null || Qn(Lt, pt, Ce, !1));
  }
  function _o(t, e, n) {
    var l = Tt;
    Tt |= 2;
    var r = wh(),
      o = Dh();
    ((Lt !== t || pt !== e) && ((Xu = null), Sl(t, e)), (e = !1));
    var d = Vt;
    t: do
      try {
        if (xt !== 0 && ht !== null) {
          var v = ht,
            R = ze;
          switch (xt) {
            case 8:
              (bo(), (d = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Me.current === null && (e = !0);
              var L = xt;
              if (((xt = 0), (ze = null), bl(t, v, R, L), n && yl)) {
                d = 0;
                break t;
              }
              break;
            default:
              ((L = xt), (xt = 0), (ze = null), bl(t, v, R, L));
          }
        }
        (mg(), (d = Vt));
        break;
      } catch (B) {
        zh(t, B);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (on = ba = null),
      (Tt = l),
      (j.H = r),
      (j.A = o),
      ht === null && ((Lt = null), (pt = 0), fu()),
      d
    );
  }
  function mg() {
    for (; ht !== null; ) Lh(ht);
  }
  function pg(t, e) {
    var n = Tt;
    Tt |= 2;
    var l = wh(),
      r = Dh();
    Lt !== t || pt !== e ? ((Xu = null), (Vu = ce() + 500), Sl(t, e)) : (yl = Hl(t, e));
    t: do
      try {
        if (xt !== 0 && ht !== null) {
          e = ht;
          var o = ze;
          e: switch (xt) {
            case 1:
              ((xt = 0), (ze = null), bl(t, e, o, 1));
              break;
            case 2:
            case 9:
              if (Xf(o)) {
                ((xt = 0), (ze = null), Uh(e));
                break;
              }
              ((e = function () {
                ((xt !== 2 && xt !== 9) || Lt !== t || (xt = 7), $e(t));
              }),
                o.then(e, e));
              break t;
            case 3:
              xt = 7;
              break t;
            case 4:
              xt = 5;
              break t;
            case 7:
              Xf(o) ? ((xt = 0), (ze = null), Uh(e)) : ((xt = 0), (ze = null), bl(t, e, o, 7));
              break;
            case 5:
              var d = null;
              switch (ht.tag) {
                case 26:
                  d = ht.memoizedState;
                case 5:
                case 27:
                  var v = ht;
                  if (d ? Sm(d) : v.stateNode.complete) {
                    ((xt = 0), (ze = null));
                    var R = v.sibling;
                    if (R !== null) ht = R;
                    else {
                      var L = v.return;
                      L !== null ? ((ht = L), Ku(L)) : (ht = null);
                    }
                    break e;
                  }
              }
              ((xt = 0), (ze = null), bl(t, e, o, 5));
              break;
            case 6:
              ((xt = 0), (ze = null), bl(t, e, o, 6));
              break;
            case 8:
              (bo(), (Vt = 6));
              break t;
            default:
              throw Error(s(462));
          }
        }
        yg();
        break;
      } catch (B) {
        zh(t, B);
      }
    while (!0);
    return (
      (on = ba = null),
      (j.H = l),
      (j.A = r),
      (Tt = n),
      ht !== null ? 0 : ((Lt = null), (pt = 0), fu(), Vt)
    );
  }
  function yg() {
    for (; ht !== null && !Pi(); ) Lh(ht);
  }
  function Lh(t) {
    var e = ah(t.alternate, t, Sn);
    ((t.memoizedProps = t.pendingProps), e === null ? Ku(t) : (ht = e));
  }
  function Uh(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = $d(n, e, e.pendingProps, e.type, void 0, pt);
        break;
      case 11:
        e = $d(n, e, e.pendingProps, e.type.render, e.ref, pt);
        break;
      case 5:
        Ns(e);
      default:
        (ih(n, e), (e = ht = Df(e, Sn)), (e = ah(n, e, Sn)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Ku(t) : (ht = e));
  }
  function bl(t, e, n, l) {
    ((on = ba = null), Ns(e), (ol = null), (ei = 0));
    var r = e.return;
    try {
      if (lg(t, r, e, n, pt)) {
        ((Vt = 1), Lu(t, Ne(n, t.current)), (ht = null));
        return;
      }
    } catch (o) {
      if (r !== null) throw ((ht = r), o);
      ((Vt = 1), Lu(t, Ne(n, t.current)), (ht = null));
      return;
    }
    e.flags & 32768
      ? (gt || l === 1
          ? (t = !0)
          : yl || (pt & 536870912) !== 0
            ? (t = !1)
            : ((Yn = t = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = Me.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
        Nh(e, t))
      : Ku(e);
  }
  function Ku(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Nh(e, Yn);
        return;
      }
      t = e.return;
      var n = rg(e.alternate, e, Sn);
      if (n !== null) {
        ht = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ht = e;
        return;
      }
      ht = e = t;
    } while (e !== null);
    Vt === 0 && (Vt = 5);
  }
  function Nh(t, e) {
    do {
      var n = sg(t.alternate, t);
      if (n !== null) {
        ((n.flags &= 32767), (ht = n));
        return;
      }
      if (
        ((n = t.return),
        n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ht = t;
        return;
      }
      ht = t = n;
    } while (t !== null);
    ((Vt = 6), (ht = null));
  }
  function jh(t, e, n, l, r, o, d, v, R) {
    t.cancelPendingCommit = null;
    do Ju();
    while ($t !== 0);
    if ((Tt & 6) !== 0) throw Error(s(327));
    if (e !== null) {
      if (e === t.current) throw Error(s(177));
      if (
        ((o = e.lanes | e.childLanes),
        (o |= ss),
        Py(t, n, o, d, v, R),
        t === Lt && ((ht = Lt = null), (pt = 0)),
        (gl = e),
        (Xn = t),
        (bn = n),
        (vo = o),
        (go = r),
        (Ah = l),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            bg(Ga, function () {
              return (Gh(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (l = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = j.T), (j.T = null), (r = K.p), (K.p = 2), (d = Tt), (Tt |= 4));
        try {
          og(t, e, n);
        } finally {
          ((Tt = d), (K.p = r), (j.T = l));
        }
      }
      (($t = 1), Bh(), Hh(), qh());
    }
  }
  function Bh() {
    if ($t === 1) {
      $t = 0;
      var t = Xn,
        e = gl,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        ((n = j.T), (j.T = null));
        var l = K.p;
        K.p = 2;
        var r = Tt;
        Tt |= 4;
        try {
          vh(e, t);
          var o = Lo,
            d = Rf(t.containerInfo),
            v = o.focusedElem,
            R = o.selectionRange;
          if (d !== v && v && v.ownerDocument && Ef(v.ownerDocument.documentElement, v)) {
            if (R !== null && as(v)) {
              var L = R.start,
                B = R.end;
              if ((B === void 0 && (B = L), "selectionStart" in v))
                ((v.selectionStart = L), (v.selectionEnd = Math.min(B, v.value.length)));
              else {
                var G = v.ownerDocument || document,
                  U = (G && G.defaultView) || window;
                if (U.getSelection) {
                  var N = U.getSelection(),
                    W = v.textContent.length,
                    rt = Math.min(R.start, W),
                    wt = R.end === void 0 ? rt : Math.min(R.end, W);
                  !N.extend && rt > wt && ((d = wt), (wt = rt), (rt = d));
                  var C = _f(v, rt),
                    x = _f(v, wt);
                  if (
                    C &&
                    x &&
                    (N.rangeCount !== 1 ||
                      N.anchorNode !== C.node ||
                      N.anchorOffset !== C.offset ||
                      N.focusNode !== x.node ||
                      N.focusOffset !== x.offset)
                  ) {
                    var D = G.createRange();
                    (D.setStart(C.node, C.offset),
                      N.removeAllRanges(),
                      rt > wt
                        ? (N.addRange(D), N.extend(x.node, x.offset))
                        : (D.setEnd(x.node, x.offset), N.addRange(D)));
                  }
                }
              }
            }
            for (G = [], N = v; (N = N.parentNode); )
              N.nodeType === 1 && G.push({ element: N, left: N.scrollLeft, top: N.scrollTop });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < G.length; v++) {
              var q = G[v];
              ((q.element.scrollLeft = q.left), (q.element.scrollTop = q.top));
            }
          }
          ((ir = !!Do), (Lo = Do = null));
        } finally {
          ((Tt = r), (K.p = l), (j.T = n));
        }
      }
      ((t.current = e), ($t = 2));
    }
  }
  function Hh() {
    if ($t === 2) {
      $t = 0;
      var t = Xn,
        e = gl,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = j.T), (j.T = null));
        var l = K.p;
        K.p = 2;
        var r = Tt;
        Tt |= 4;
        try {
          dh(t, e.alternate, e);
        } finally {
          ((Tt = r), (K.p = l), (j.T = n));
        }
      }
      $t = 3;
    }
  }
  function qh() {
    if ($t === 4 || $t === 3) {
      (($t = 0), Nr());
      var t = Xn,
        e = gl,
        n = bn,
        l = Ah;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? ($t = 5)
        : (($t = 0), (gl = Xn = null), Yh(t, t.pendingLanes));
      var r = t.pendingLanes;
      if (
        (r === 0 && (Vn = null),
        Hr(n),
        (e = e.stateNode),
        Re && typeof Re.onCommitFiberRoot == "function")
      )
        try {
          Re.onCommitFiberRoot(Bl, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((e = j.T), (r = K.p), (K.p = 2), (j.T = null));
        try {
          for (var o = t.onRecoverableError, d = 0; d < l.length; d++) {
            var v = l[d];
            o(v.value, { componentStack: v.stack });
          }
        } finally {
          ((j.T = e), (K.p = r));
        }
      }
      ((bn & 3) !== 0 && Ju(),
        $e(t),
        (r = t.pendingLanes),
        (n & 261930) !== 0 && (r & 42) !== 0 ? (t === So ? gi++ : ((gi = 0), (So = t))) : (gi = 0),
        Si(0));
    }
  }
  function Yh(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Wl(e)));
  }
  function Ju() {
    return (Bh(), Hh(), qh(), Gh());
  }
  function Gh() {
    if ($t !== 5) return !1;
    var t = Xn,
      e = vo;
    vo = 0;
    var n = Hr(bn),
      l = j.T,
      r = K.p;
    try {
      ((K.p = 32 > n ? 32 : n), (j.T = null), (n = go), (go = null));
      var o = Xn,
        d = bn;
      if ((($t = 0), (gl = Xn = null), (bn = 0), (Tt & 6) !== 0)) throw Error(s(331));
      var v = Tt;
      if (
        ((Tt |= 4),
        Eh(o.current),
        Sh(o, o.current, d, n),
        (Tt = v),
        Si(0, !1),
        Re && typeof Re.onPostCommitFiberRoot == "function")
      )
        try {
          Re.onPostCommitFiberRoot(Bl, o);
        } catch {}
      return !0;
    } finally {
      ((K.p = r), (j.T = l), Yh(t, e));
    }
  }
  function Vh(t, e, n) {
    ((e = Ne(n, e)),
      (e = Fs(t.stateNode, e, 2)),
      (t = jn(t, e, 2)),
      t !== null && (ql(t, 2), $e(t)));
  }
  function Mt(t, e, n) {
    if (t.tag === 3) Vh(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Vh(e, t, n);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" && (Vn === null || !Vn.has(l)))
          ) {
            ((t = Ne(n, t)),
              (n = Xd(2)),
              (l = jn(e, n, 2)),
              l !== null && (Qd(n, l, e, t), ql(l, 2), $e(l)));
            break;
          }
        }
        e = e.return;
      }
  }
  function Eo(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new dg();
      var r = new Set();
      l.set(e, r);
    } else ((r = l.get(e)), r === void 0 && ((r = new Set()), l.set(e, r)));
    r.has(n) || ((mo = !0), r.add(n), (t = vg.bind(null, t, e, n)), e.then(t, t));
  }
  function vg(t, e, n) {
    var l = t.pingCache;
    (l !== null && l.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Lt === t &&
        (pt & n) === n &&
        (Vt === 4 || (Vt === 3 && (pt & 62914560) === pt && 300 > ce() - Gu)
          ? (Tt & 2) === 0 && Sl(t, 0)
          : (po |= n),
        vl === pt && (vl = 0)),
      $e(t));
  }
  function Xh(t, e) {
    (e === 0 && (e = jc()), (t = va(t, e)), t !== null && (ql(t, e), $e(t)));
  }
  function gg(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), Xh(t, n));
  }
  function Sg(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var l = t.stateNode,
          r = t.memoizedState;
        r !== null && (n = r.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    (l !== null && l.delete(e), Xh(t, n));
  }
  function bg(t, e) {
    return Ve(t, e);
  }
  var ku = null,
    _l = null,
    Ro = !1,
    Pu = !1,
    To = !1,
    Zn = 0;
  function $e(t) {
    (t !== _l && t.next === null && (_l === null ? (ku = _l = t) : (_l = _l.next = t)),
      (Pu = !0),
      Ro || ((Ro = !0), Eg()));
  }
  function Si(t, e) {
    if (!To && Pu) {
      To = !0;
      do
        for (var n = !1, l = ku; l !== null; ) {
          if (t !== 0) {
            var r = l.pendingLanes;
            if (r === 0) var o = 0;
            else {
              var d = l.suspendedLanes,
                v = l.pingedLanes;
              ((o = (1 << (31 - Te(42 | t) + 1)) - 1),
                (o &= r & ~(d & ~v)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0));
            }
            o !== 0 && ((n = !0), Jh(l, o));
          } else
            ((o = pt),
              (o = Wi(
                l,
                l === Lt ? o : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (o & 3) === 0 || Hl(l, o) || ((n = !0), Jh(l, o)));
          l = l.next;
        }
      while (n);
      To = !1;
    }
  }
  function _g() {
    Qh();
  }
  function Qh() {
    Pu = Ro = !1;
    var t = 0;
    Zn !== 0 && Dg() && (t = Zn);
    for (var e = ce(), n = null, l = ku; l !== null; ) {
      var r = l.next,
        o = Zh(l, e);
      (o === 0
        ? ((l.next = null), n === null ? (ku = r) : (n.next = r), r === null && (_l = n))
        : ((n = l), (t !== 0 || (o & 3) !== 0) && (Pu = !0)),
        (l = r));
    }
    (($t !== 0 && $t !== 5) || Si(t), Zn !== 0 && (Zn = 0));
  }
  function Zh(t, e) {
    for (
      var n = t.suspendedLanes,
        l = t.pingedLanes,
        r = t.expirationTimes,
        o = t.pendingLanes & -62914561;
      0 < o;
    ) {
      var d = 31 - Te(o),
        v = 1 << d,
        R = r[d];
      (R === -1
        ? ((v & n) === 0 || (v & l) !== 0) && (r[d] = ky(v, e))
        : R <= e && (t.expiredLanes |= v),
        (o &= ~v));
    }
    if (
      ((e = Lt),
      (n = pt),
      (n = Wi(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      (l = t.callbackNode),
      n === 0 || (t === e && (xt === 2 || xt === 9)) || t.cancelPendingCommit !== null)
    )
      return (l !== null && l !== null && jl(l), (t.callbackNode = null), (t.callbackPriority = 0));
    if ((n & 3) === 0 || Hl(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((l !== null && jl(l), Hr(n))) {
        case 2:
        case 8:
          n = Je;
          break;
        case 32:
          n = Ga;
          break;
        case 268435456:
          n = Nc;
          break;
        default:
          n = Ga;
      }
      return (
        (l = Kh.bind(null, t)),
        (n = Ve(n, l)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      l !== null && l !== null && jl(l),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Kh(t, e) {
    if ($t !== 0 && $t !== 5) return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (Ju() && t.callbackNode !== n) return null;
    var l = pt;
    return (
      (l = Wi(t, t === Lt ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      l === 0
        ? null
        : (Mh(t, l, e),
          Zh(t, ce()),
          t.callbackNode != null && t.callbackNode === n ? Kh.bind(null, t) : null)
    );
  }
  function Jh(t, e) {
    if (Ju()) return null;
    Mh(t, e, !0);
  }
  function Eg() {
    Ug(function () {
      (Tt & 6) !== 0 ? Ve(ae, _g) : Qh();
    });
  }
  function Ao() {
    if (Zn === 0) {
      var t = ul;
      (t === 0 && ((t = Fi), (Fi <<= 1), (Fi & 261888) === 0 && (Fi = 256)), (Zn = t));
    }
    return Zn;
  }
  function kh(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : au("" + t);
  }
  function Ph(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function Rg(t, e, n, l, r) {
    if (e === "submit" && n && n.stateNode === r) {
      var o = kh((r[he] || null).action),
        d = l.submitter;
      d &&
        ((e = (e = d[he] || null) ? kh(e.formAction) : d.getAttribute("formAction")),
        e !== null && ((o = e), (d = null)));
      var v = new ru("action", "action", null, l, r);
      t.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Zn !== 0) {
                  var R = d ? Ph(r, d) : new FormData(r);
                  Qs(n, { pending: !0, data: R, method: r.method, action: o }, null, R);
                }
              } else
                typeof o == "function" &&
                  (v.preventDefault(),
                  (R = d ? Ph(r, d) : new FormData(r)),
                  Qs(n, { pending: !0, data: R, method: r.method, action: o }, o, R));
            },
            currentTarget: r,
          },
        ],
      });
    }
  }
  for (var xo = 0; xo < rs.length; xo++) {
    var Mo = rs[xo],
      Tg = Mo.toLowerCase(),
      Ag = Mo[0].toUpperCase() + Mo.slice(1);
    Xe(Tg, "on" + Ag);
  }
  (Xe(xf, "onAnimationEnd"),
    Xe(Mf, "onAnimationIteration"),
    Xe(Of, "onAnimationStart"),
    Xe("dblclick", "onDoubleClick"),
    Xe("focusin", "onFocus"),
    Xe("focusout", "onBlur"),
    Xe(Gv, "onTransitionRun"),
    Xe(Vv, "onTransitionStart"),
    Xe(Xv, "onTransitionCancel"),
    Xe(zf, "onTransitionEnd"),
    Ka("onMouseEnter", ["mouseout", "mouseover"]),
    Ka("onMouseLeave", ["mouseout", "mouseover"]),
    Ka("onPointerEnter", ["pointerout", "pointerover"]),
    Ka("onPointerLeave", ["pointerout", "pointerover"]),
    ha("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    ha(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    ha("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ha("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    ha(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    ha(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var bi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    xg = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bi),
    );
  function Fh(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n],
        r = l.event;
      l = l.listeners;
      t: {
        var o = void 0;
        if (e)
          for (var d = l.length - 1; 0 <= d; d--) {
            var v = l[d],
              R = v.instance,
              L = v.currentTarget;
            if (((v = v.listener), R !== o && r.isPropagationStopped())) break t;
            ((o = v), (r.currentTarget = L));
            try {
              o(r);
            } catch (B) {
              cu(B);
            }
            ((r.currentTarget = null), (o = R));
          }
        else
          for (d = 0; d < l.length; d++) {
            if (
              ((v = l[d]),
              (R = v.instance),
              (L = v.currentTarget),
              (v = v.listener),
              R !== o && r.isPropagationStopped())
            )
              break t;
            ((o = v), (r.currentTarget = L));
            try {
              o(r);
            } catch (B) {
              cu(B);
            }
            ((r.currentTarget = null), (o = R));
          }
      }
    }
  }
  function mt(t, e) {
    var n = e[qr];
    n === void 0 && (n = e[qr] = new Set());
    var l = t + "__bubble";
    n.has(l) || ($h(e, t, 2, !1), n.add(l));
  }
  function Oo(t, e, n) {
    var l = 0;
    (e && (l |= 4), $h(n, t, l, e));
  }
  var Fu = "_reactListening" + Math.random().toString(36).slice(2);
  function zo(t) {
    if (!t[Fu]) {
      ((t[Fu] = !0),
        Xc.forEach(function (n) {
          n !== "selectionchange" && (xg.has(n) || Oo(n, !1, t), Oo(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Fu] || ((e[Fu] = !0), Oo("selectionchange", !1, e));
    }
  }
  function $h(t, e, n, l) {
    switch (xm(e)) {
      case 2:
        var r = t0;
        break;
      case 8:
        r = e0;
        break;
      default:
        r = Qo;
    }
    ((n = r.bind(null, e, n, t)),
      (r = void 0),
      !kr || (e !== "touchstart" && e !== "touchmove" && e !== "wheel") || (r = !0),
      l
        ? r !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: r })
          : t.addEventListener(e, n, !0)
        : r !== void 0
          ? t.addEventListener(e, n, { passive: r })
          : t.addEventListener(e, n, !1));
  }
  function Co(t, e, n, l, r) {
    var o = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (;;) {
        if (l === null) return;
        var d = l.tag;
        if (d === 3 || d === 4) {
          var v = l.stateNode.containerInfo;
          if (v === r) break;
          if (d === 4)
            for (d = l.return; d !== null; ) {
              var R = d.tag;
              if ((R === 3 || R === 4) && d.stateNode.containerInfo === r) return;
              d = d.return;
            }
          for (; v !== null; ) {
            if (((d = Xa(v)), d === null)) return;
            if (((R = d.tag), R === 5 || R === 6 || R === 26 || R === 27)) {
              l = o = d;
              continue t;
            }
            v = v.parentNode;
          }
        }
        l = l.return;
      }
    ef(function () {
      var L = o,
        B = Kr(n),
        G = [];
      t: {
        var U = Cf.get(t);
        if (U !== void 0) {
          var N = ru,
            W = t;
          switch (t) {
            case "keypress":
              if (iu(n) === 0) break t;
            case "keydown":
            case "keyup":
              N = Sv;
              break;
            case "focusin":
              ((W = "focus"), (N = Ir));
              break;
            case "focusout":
              ((W = "blur"), (N = Ir));
              break;
            case "beforeblur":
            case "afterblur":
              N = Ir;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = lf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = rv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = Ev;
              break;
            case xf:
            case Mf:
            case Of:
              N = cv;
              break;
            case zf:
              N = Tv;
              break;
            case "scroll":
            case "scrollend":
              N = iv;
              break;
            case "wheel":
              N = xv;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = dv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = rf;
              break;
            case "toggle":
            case "beforetoggle":
              N = Ov;
          }
          var rt = (e & 4) !== 0,
            wt = !rt && (t === "scroll" || t === "scrollend"),
            C = rt ? (U !== null ? U + "Capture" : null) : U;
          rt = [];
          for (var x = L, D; x !== null; ) {
            var q = x;
            if (
              ((D = q.stateNode),
              (q = q.tag),
              (q !== 5 && q !== 26 && q !== 27) ||
                D === null ||
                C === null ||
                ((q = Vl(x, C)), q != null && rt.push(_i(x, q, D))),
              wt)
            )
              break;
            x = x.return;
          }
          0 < rt.length && ((U = new N(U, W, null, n, B)), G.push({ event: U, listeners: rt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((U = t === "mouseover" || t === "pointerover"),
            (N = t === "mouseout" || t === "pointerout"),
            U && n !== Zr && (W = n.relatedTarget || n.fromElement) && (Xa(W) || W[Va]))
          )
            break t;
          if (
            (N || U) &&
            ((U =
              B.window === B
                ? B
                : (U = B.ownerDocument)
                  ? U.defaultView || U.parentWindow
                  : window),
            N
              ? ((W = n.relatedTarget || n.toElement),
                (N = L),
                (W = W ? Xa(W) : null),
                W !== null &&
                  ((wt = f(W)), (rt = W.tag), W !== wt || (rt !== 5 && rt !== 27 && rt !== 6)) &&
                  (W = null))
              : ((N = null), (W = L)),
            N !== W)
          ) {
            if (
              ((rt = lf),
              (q = "onMouseLeave"),
              (C = "onMouseEnter"),
              (x = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((rt = rf), (q = "onPointerLeave"), (C = "onPointerEnter"), (x = "pointer")),
              (wt = N == null ? U : Gl(N)),
              (D = W == null ? U : Gl(W)),
              (U = new rt(q, x + "leave", N, n, B)),
              (U.target = wt),
              (U.relatedTarget = D),
              (q = null),
              Xa(B) === L &&
                ((rt = new rt(C, x + "enter", W, n, B)),
                (rt.target = D),
                (rt.relatedTarget = wt),
                (q = rt)),
              (wt = q),
              N && W)
            )
              e: {
                for (rt = Mg, C = N, x = W, D = 0, q = C; q; q = rt(q)) D++;
                q = 0;
                for (var lt = x; lt; lt = rt(lt)) q++;
                for (; 0 < D - q; ) ((C = rt(C)), D--);
                for (; 0 < q - D; ) ((x = rt(x)), q--);
                for (; D--; ) {
                  if (C === x || (x !== null && C === x.alternate)) {
                    rt = C;
                    break e;
                  }
                  ((C = rt(C)), (x = rt(x)));
                }
                rt = null;
              }
            else rt = null;
            (N !== null && Ih(G, U, N, rt, !1), W !== null && wt !== null && Ih(G, wt, W, rt, !0));
          }
        }
        t: {
          if (
            ((U = L ? Gl(L) : window),
            (N = U.nodeName && U.nodeName.toLowerCase()),
            N === "select" || (N === "input" && U.type === "file"))
          )
            var bt = pf;
          else if (hf(U))
            if (yf) bt = Hv;
            else {
              bt = jv;
              var et = Nv;
            }
          else
            ((N = U.nodeName),
              !N || N.toLowerCase() !== "input" || (U.type !== "checkbox" && U.type !== "radio")
                ? L && Qr(L.elementType) && (bt = pf)
                : (bt = Bv));
          if (bt && (bt = bt(t, L))) {
            mf(G, bt, n, B);
            break t;
          }
          (et && et(t, U, L),
            t === "focusout" &&
              L &&
              U.type === "number" &&
              L.memoizedProps.value != null &&
              Xr(U, "number", U.value));
        }
        switch (((et = L ? Gl(L) : window), t)) {
          case "focusin":
            (hf(et) || et.contentEditable === "true") && ((Ia = et), (ls = L), (Fl = null));
            break;
          case "focusout":
            Fl = ls = Ia = null;
            break;
          case "mousedown":
            is = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((is = !1), Tf(G, n, B));
            break;
          case "selectionchange":
            if (Yv) break;
          case "keydown":
          case "keyup":
            Tf(G, n, B);
        }
        var ct;
        if (ts)
          t: {
            switch (t) {
              case "compositionstart":
                var yt = "onCompositionStart";
                break t;
              case "compositionend":
                yt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                yt = "onCompositionUpdate";
                break t;
            }
            yt = void 0;
          }
        else
          $a
            ? ff(t, n) && (yt = "onCompositionEnd")
            : t === "keydown" && n.keyCode === 229 && (yt = "onCompositionStart");
        (yt &&
          (sf &&
            n.locale !== "ko" &&
            ($a || yt !== "onCompositionStart"
              ? yt === "onCompositionEnd" && $a && (ct = nf())
              : ((zn = B), (Pr = "value" in zn ? zn.value : zn.textContent), ($a = !0))),
          (et = $u(L, yt)),
          0 < et.length &&
            ((yt = new uf(yt, t, null, n, B)),
            G.push({ event: yt, listeners: et }),
            ct ? (yt.data = ct) : ((ct = df(n)), ct !== null && (yt.data = ct)))),
          (ct = Cv ? wv(t, n) : Dv(t, n)) &&
            ((yt = $u(L, "onBeforeInput")),
            0 < yt.length &&
              ((et = new uf("onBeforeInput", "beforeinput", null, n, B)),
              G.push({ event: et, listeners: yt }),
              (et.data = ct))),
          Rg(G, t, L, n, B));
      }
      Fh(G, e);
    });
  }
  function _i(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function $u(t, e) {
    for (var n = e + "Capture", l = []; t !== null; ) {
      var r = t,
        o = r.stateNode;
      if (
        ((r = r.tag),
        (r !== 5 && r !== 26 && r !== 27) ||
          o === null ||
          ((r = Vl(t, n)),
          r != null && l.unshift(_i(t, r, o)),
          (r = Vl(t, e)),
          r != null && l.push(_i(t, r, o))),
        t.tag === 3)
      )
        return l;
      t = t.return;
    }
    return [];
  }
  function Mg(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Ih(t, e, n, l, r) {
    for (var o = e._reactName, d = []; n !== null && n !== l; ) {
      var v = n,
        R = v.alternate,
        L = v.stateNode;
      if (((v = v.tag), R !== null && R === l)) break;
      ((v !== 5 && v !== 26 && v !== 27) ||
        L === null ||
        ((R = L),
        r
          ? ((L = Vl(n, o)), L != null && d.unshift(_i(n, L, R)))
          : r || ((L = Vl(n, o)), L != null && d.push(_i(n, L, R)))),
        (n = n.return));
    }
    d.length !== 0 && t.push({ event: e, listeners: d });
  }
  var Og = /\r\n?/g,
    zg = /\u0000|\uFFFD/g;
  function Wh(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Og,
        `
`,
      )
      .replace(zg, "");
  }
  function tm(t, e) {
    return ((e = Wh(e)), Wh(t) === e);
  }
  function Ct(t, e, n, l, r, o) {
    switch (n) {
      case "children":
        typeof l == "string"
          ? e === "body" || (e === "textarea" && l === "") || ka(t, l)
          : (typeof l == "number" || typeof l == "bigint") && e !== "body" && ka(t, "" + l);
        break;
      case "className":
        eu(t, "class", l);
        break;
      case "tabIndex":
        eu(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        eu(t, n, l);
        break;
      case "style":
        Wc(t, l, o);
        break;
      case "data":
        if (e !== "object") {
          eu(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((l = au("" + l)), t.setAttribute(n, l));
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof o == "function" &&
            (n === "formAction"
              ? (e !== "input" && Ct(t, e, "name", r.name, r, null),
                Ct(t, e, "formEncType", r.formEncType, r, null),
                Ct(t, e, "formMethod", r.formMethod, r, null),
                Ct(t, e, "formTarget", r.formTarget, r, null))
              : (Ct(t, e, "encType", r.encType, r, null),
                Ct(t, e, "method", r.method, r, null),
                Ct(t, e, "target", r.target, r, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((l = au("" + l)), t.setAttribute(n, l));
        break;
      case "onClick":
        l != null && (t.onclick = ln);
        break;
      case "onScroll":
        l != null && mt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && mt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((n = l.__html), n != null)) {
            if (r.children != null) throw Error(s(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
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
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        ((n = au("" + l)), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(n, "" + l)
          : t.removeAttribute(n);
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
        l && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0
          ? t.setAttribute(n, "")
          : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol"
            ? t.setAttribute(n, l)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l
          ? t.setAttribute(n, l)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? t.removeAttribute(n)
          : t.setAttribute(n, l);
        break;
      case "popover":
        (mt("beforetoggle", t), mt("toggle", t), tu(t, "popover", l));
        break;
      case "xlinkActuate":
        an(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        an(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        an(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        an(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        an(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        an(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        an(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        an(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        an(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        tu(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || (n[0] !== "o" && n[0] !== "O") || (n[1] !== "n" && n[1] !== "N")) &&
          ((n = av.get(n) || n), tu(t, n, l));
    }
  }
  function wo(t, e, n, l, r, o) {
    switch (n) {
      case "style":
        Wc(t, l, o);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((n = l.__html), n != null)) {
            if (r.children != null) throw Error(s(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? ka(t, l)
          : (typeof l == "number" || typeof l == "bigint") && ka(t, "" + l);
        break;
      case "onScroll":
        l != null && mt("scroll", t);
        break;
      case "onScrollEnd":
        l != null && mt("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = ln);
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
        if (!Qc.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((r = n.endsWith("Capture")),
              (e = n.slice(2, r ? n.length - 7 : void 0)),
              (o = t[he] || null),
              (o = o != null ? o[n] : null),
              typeof o == "function" && t.removeEventListener(e, o, r),
              typeof l == "function")
            ) {
              (typeof o != "function" &&
                o !== null &&
                (n in t ? (t[n] = null) : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, l, r));
              break t;
            }
            n in t ? (t[n] = l) : l === !0 ? t.setAttribute(n, "") : tu(t, n, l);
          }
    }
  }
  function se(t, e, n) {
    switch (e) {
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
        (mt("error", t), mt("load", t));
        var l = !1,
          r = !1,
          o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var d = n[o];
            if (d != null)
              switch (o) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, e));
                default:
                  Ct(t, e, o, d, n, null);
              }
          }
        (r && Ct(t, e, "srcSet", n.srcSet, n, null), l && Ct(t, e, "src", n.src, n, null));
        return;
      case "input":
        mt("invalid", t);
        var v = (o = d = r = null),
          R = null,
          L = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var B = n[l];
            if (B != null)
              switch (l) {
                case "name":
                  r = B;
                  break;
                case "type":
                  d = B;
                  break;
                case "checked":
                  R = B;
                  break;
                case "defaultChecked":
                  L = B;
                  break;
                case "value":
                  o = B;
                  break;
                case "defaultValue":
                  v = B;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (B != null) throw Error(s(137, e));
                  break;
                default:
                  Ct(t, e, l, B, n, null);
              }
          }
        Pc(t, o, v, R, L, d, r, !1);
        return;
      case "select":
        (mt("invalid", t), (l = d = o = null));
        for (r in n)
          if (n.hasOwnProperty(r) && ((v = n[r]), v != null))
            switch (r) {
              case "value":
                o = v;
                break;
              case "defaultValue":
                d = v;
                break;
              case "multiple":
                l = v;
              default:
                Ct(t, e, r, v, n, null);
            }
        ((e = o),
          (n = d),
          (t.multiple = !!l),
          e != null ? Ja(t, !!l, e, !1) : n != null && Ja(t, !!l, n, !0));
        return;
      case "textarea":
        (mt("invalid", t), (o = r = l = null));
        for (d in n)
          if (n.hasOwnProperty(d) && ((v = n[d]), v != null))
            switch (d) {
              case "value":
                l = v;
                break;
              case "defaultValue":
                r = v;
                break;
              case "children":
                o = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(s(91));
                break;
              default:
                Ct(t, e, d, v, n, null);
            }
        $c(t, l, r, o);
        return;
      case "option":
        for (R in n)
          n.hasOwnProperty(R) &&
            ((l = n[R]), l != null) &&
            (R === "selected"
              ? (t.selected = l && typeof l != "function" && typeof l != "symbol")
              : Ct(t, e, R, l, n, null));
        return;
      case "dialog":
        (mt("beforetoggle", t), mt("toggle", t), mt("cancel", t), mt("close", t));
        break;
      case "iframe":
      case "object":
        mt("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < bi.length; l++) mt(bi[l], t);
        break;
      case "image":
        (mt("error", t), mt("load", t));
        break;
      case "details":
        mt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (mt("error", t), mt("load", t));
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
        for (L in n)
          if (n.hasOwnProperty(L) && ((l = n[L]), l != null))
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, e));
              default:
                Ct(t, e, L, l, n, null);
            }
        return;
      default:
        if (Qr(e)) {
          for (B in n)
            n.hasOwnProperty(B) && ((l = n[B]), l !== void 0 && wo(t, e, B, l, n, void 0));
          return;
        }
    }
    for (v in n) n.hasOwnProperty(v) && ((l = n[v]), l != null && Ct(t, e, v, l, n, null));
  }
  function Cg(t, e, n, l) {
    switch (e) {
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
        var r = null,
          o = null,
          d = null,
          v = null,
          R = null,
          L = null,
          B = null;
        for (N in n) {
          var G = n[N];
          if (n.hasOwnProperty(N) && G != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                R = G;
              default:
                l.hasOwnProperty(N) || Ct(t, e, N, null, l, G);
            }
        }
        for (var U in l) {
          var N = l[U];
          if (((G = n[U]), l.hasOwnProperty(U) && (N != null || G != null)))
            switch (U) {
              case "type":
                o = N;
                break;
              case "name":
                r = N;
                break;
              case "checked":
                L = N;
                break;
              case "defaultChecked":
                B = N;
                break;
              case "value":
                d = N;
                break;
              case "defaultValue":
                v = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(s(137, e));
                break;
              default:
                N !== G && Ct(t, e, U, N, l, G);
            }
        }
        Vr(t, d, v, R, L, B, o, r);
        return;
      case "select":
        N = d = v = U = null;
        for (o in n)
          if (((R = n[o]), n.hasOwnProperty(o) && R != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                N = R;
              default:
                l.hasOwnProperty(o) || Ct(t, e, o, null, l, R);
            }
        for (r in l)
          if (((o = l[r]), (R = n[r]), l.hasOwnProperty(r) && (o != null || R != null)))
            switch (r) {
              case "value":
                U = o;
                break;
              case "defaultValue":
                v = o;
                break;
              case "multiple":
                d = o;
              default:
                o !== R && Ct(t, e, r, o, l, R);
            }
        ((e = v),
          (n = d),
          (l = N),
          U != null
            ? Ja(t, !!n, U, !1)
            : !!l != !!n && (e != null ? Ja(t, !!n, e, !0) : Ja(t, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        N = U = null;
        for (v in n)
          if (((r = n[v]), n.hasOwnProperty(v) && r != null && !l.hasOwnProperty(v)))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ct(t, e, v, null, l, r);
            }
        for (d in l)
          if (((r = l[d]), (o = n[d]), l.hasOwnProperty(d) && (r != null || o != null)))
            switch (d) {
              case "value":
                U = r;
                break;
              case "defaultValue":
                N = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(s(91));
                break;
              default:
                r !== o && Ct(t, e, d, r, l, o);
            }
        Fc(t, U, N);
        return;
      case "option":
        for (var W in n)
          ((U = n[W]),
            n.hasOwnProperty(W) &&
              U != null &&
              !l.hasOwnProperty(W) &&
              (W === "selected" ? (t.selected = !1) : Ct(t, e, W, null, l, U)));
        for (R in l)
          ((U = l[R]),
            (N = n[R]),
            l.hasOwnProperty(R) &&
              U !== N &&
              (U != null || N != null) &&
              (R === "selected"
                ? (t.selected = U && typeof U != "function" && typeof U != "symbol")
                : Ct(t, e, R, U, l, N)));
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
        for (var rt in n)
          ((U = n[rt]),
            n.hasOwnProperty(rt) && U != null && !l.hasOwnProperty(rt) && Ct(t, e, rt, null, l, U));
        for (L in l)
          if (((U = l[L]), (N = n[L]), l.hasOwnProperty(L) && U !== N && (U != null || N != null)))
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null) throw Error(s(137, e));
                break;
              default:
                Ct(t, e, L, U, l, N);
            }
        return;
      default:
        if (Qr(e)) {
          for (var wt in n)
            ((U = n[wt]),
              n.hasOwnProperty(wt) &&
                U !== void 0 &&
                !l.hasOwnProperty(wt) &&
                wo(t, e, wt, void 0, l, U));
          for (B in l)
            ((U = l[B]),
              (N = n[B]),
              !l.hasOwnProperty(B) ||
                U === N ||
                (U === void 0 && N === void 0) ||
                wo(t, e, B, U, l, N));
          return;
        }
    }
    for (var C in n)
      ((U = n[C]),
        n.hasOwnProperty(C) && U != null && !l.hasOwnProperty(C) && Ct(t, e, C, null, l, U));
    for (G in l)
      ((U = l[G]),
        (N = n[G]),
        !l.hasOwnProperty(G) || U === N || (U == null && N == null) || Ct(t, e, G, U, l, N));
  }
  function em(t) {
    switch (t) {
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
  function wg() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, n = performance.getEntriesByType("resource"), l = 0;
        l < n.length;
        l++
      ) {
        var r = n[l],
          o = r.transferSize,
          d = r.initiatorType,
          v = r.duration;
        if (o && v && em(d)) {
          for (d = 0, v = r.responseEnd, l += 1; l < n.length; l++) {
            var R = n[l],
              L = R.startTime;
            if (L > v) break;
            var B = R.transferSize,
              G = R.initiatorType;
            B && em(G) && ((R = R.responseEnd), (d += B * (R < v ? 1 : (v - L) / (R - L))));
          }
          if ((--l, (e += (8 * (o + d)) / (r.duration / 1e3)), t++, 10 < t)) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var Do = null,
    Lo = null;
  function Iu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function nm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function am(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Uo(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var No = null;
  function Dg() {
    var t = window.event;
    return t && t.type === "popstate" ? (t === No ? !1 : ((No = t), !0)) : ((No = null), !1);
  }
  var lm = typeof setTimeout == "function" ? setTimeout : void 0,
    Lg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    im = typeof Promise == "function" ? Promise : void 0,
    Ug =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof im < "u"
          ? function (t) {
              return im.resolve(null).then(t).catch(Ng);
            }
          : lm;
  function Ng(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Kn(t) {
    return t === "head";
  }
  function um(t, e) {
    var n = e,
      l = 0;
    do {
      var r = n.nextSibling;
      if ((t.removeChild(n), r && r.nodeType === 8))
        if (((n = r.data), n === "/$" || n === "/&")) {
          if (l === 0) {
            (t.removeChild(r), Al(e));
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") l++;
        else if (n === "html") Ei(t.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = t.ownerDocument.head), Ei(n));
          for (var o = n.firstChild; o; ) {
            var d = o.nextSibling,
              v = o.nodeName;
            (o[Yl] ||
              v === "SCRIPT" ||
              v === "STYLE" ||
              (v === "LINK" && o.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(o),
              (o = d));
          }
        } else n === "body" && Ei(t.ownerDocument.body);
      n = r;
    } while (n);
    Al(e);
  }
  function rm(t, e) {
    var n = t;
    t = 0;
    do {
      var l = n.nextSibling;
      if (
        (n.nodeType === 1
          ? e
            ? ((n._stashedDisplay = n.style.display), (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (e
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        l && l.nodeType === 8)
      )
        if (((n = l.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = l;
    } while (n);
  }
  function jo(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (jo(n), Yr(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function jg(t, e, n, l) {
    for (; t.nodeType === 1; ) {
      var r = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
        if (!t[Yl])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((o = t.getAttribute("rel")),
                o === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                o !== r.rel ||
                t.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) ||
                t.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) ||
                t.getAttribute("title") !== (r.title == null ? null : r.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((o = t.getAttribute("src")),
                (o !== (r.src == null ? null : r.src) ||
                  t.getAttribute("type") !== (r.type == null ? null : r.type) ||
                  t.getAttribute("crossorigin") !==
                    (r.crossOrigin == null ? null : r.crossOrigin)) &&
                  o &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var o = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && t.getAttribute("name") === o) return t;
      } else return t;
      if (((t = Ye(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Bg(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n) ||
        ((t = Ye(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function sm(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e) ||
        ((t = Ye(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Bo(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Ho(t) {
    return t.data === "$!" || (t.data === "$?" && t.ownerDocument.readyState !== "loading");
  }
  function Hg(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var l = function () {
        (e(), n.removeEventListener("DOMContentLoaded", l));
      };
      (n.addEventListener("DOMContentLoaded", l), (t._reactRetry = l));
    }
  }
  function Ye(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var qo = null;
  function om(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return Ye(t.nextSibling);
          e--;
        } else (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function cm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else (n !== "/$" && n !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function fm(t, e, n) {
    switch (((e = Iu(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(s(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(s(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  function Ei(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Yr(t);
  }
  var Ge = new Map(),
    dm = new Set();
  function Wu(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var _n = K.d;
  K.d = { f: qg, r: Yg, D: Gg, C: Vg, L: Xg, m: Qg, X: Kg, S: Zg, M: Jg };
  function qg() {
    var t = _n.f(),
      e = Qu();
    return t || e;
  }
  function Yg(t) {
    var e = Qa(t);
    e !== null && e.tag === 5 && e.type === "form" ? zd(e) : _n.r(t);
  }
  var El = typeof document > "u" ? null : document;
  function hm(t, e, n) {
    var l = El;
    if (l && typeof e == "string" && e) {
      var r = Le(e);
      ((r = 'link[rel="' + t + '"][href="' + r + '"]'),
        typeof n == "string" && (r += '[crossorigin="' + n + '"]'),
        dm.has(r) ||
          (dm.add(r),
          (t = { rel: t, crossOrigin: n, href: e }),
          l.querySelector(r) === null &&
            ((e = l.createElement("link")), se(e, "link", t), te(e), l.head.appendChild(e))));
    }
  }
  function Gg(t) {
    (_n.D(t), hm("dns-prefetch", t, null));
  }
  function Vg(t, e) {
    (_n.C(t, e), hm("preconnect", t, e));
  }
  function Xg(t, e, n) {
    _n.L(t, e, n);
    var l = El;
    if (l && t && e) {
      var r = 'link[rel="preload"][as="' + Le(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((r += '[imagesrcset="' + Le(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" && (r += '[imagesizes="' + Le(n.imageSizes) + '"]'))
        : (r += '[href="' + Le(t) + '"]');
      var o = r;
      switch (e) {
        case "style":
          o = Rl(t);
          break;
        case "script":
          o = Tl(t);
      }
      Ge.has(o) ||
        ((t = g(
          { rel: "preload", href: e === "image" && n && n.imageSrcSet ? void 0 : t, as: e },
          n,
        )),
        Ge.set(o, t),
        l.querySelector(r) !== null ||
          (e === "style" && l.querySelector(Ri(o))) ||
          (e === "script" && l.querySelector(Ti(o))) ||
          ((e = l.createElement("link")), se(e, "link", t), te(e), l.head.appendChild(e)));
    }
  }
  function Qg(t, e) {
    _n.m(t, e);
    var n = El;
    if (n && t) {
      var l = e && typeof e.as == "string" ? e.as : "script",
        r = 'link[rel="modulepreload"][as="' + Le(l) + '"][href="' + Le(t) + '"]',
        o = r;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = Tl(t);
      }
      if (
        !Ge.has(o) &&
        ((t = g({ rel: "modulepreload", href: t }, e)), Ge.set(o, t), n.querySelector(r) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Ti(o))) return;
        }
        ((l = n.createElement("link")), se(l, "link", t), te(l), n.head.appendChild(l));
      }
    }
  }
  function Zg(t, e, n) {
    _n.S(t, e, n);
    var l = El;
    if (l && t) {
      var r = Za(l).hoistableStyles,
        o = Rl(t);
      e = e || "default";
      var d = r.get(o);
      if (!d) {
        var v = { loading: 0, preload: null };
        if ((d = l.querySelector(Ri(o)))) v.loading = 5;
        else {
          ((t = g({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Ge.get(o)) && Yo(t, n));
          var R = (d = l.createElement("link"));
          (te(R),
            se(R, "link", t),
            (R._p = new Promise(function (L, B) {
              ((R.onload = L), (R.onerror = B));
            })),
            R.addEventListener("load", function () {
              v.loading |= 1;
            }),
            R.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            tr(d, e, l));
        }
        ((d = { type: "stylesheet", instance: d, count: 1, state: v }), r.set(o, d));
      }
    }
  }
  function Kg(t, e) {
    _n.X(t, e);
    var n = El;
    if (n && t) {
      var l = Za(n).hoistableScripts,
        r = Tl(t),
        o = l.get(r);
      o ||
        ((o = n.querySelector(Ti(r))),
        o ||
          ((t = g({ src: t, async: !0 }, e)),
          (e = Ge.get(r)) && Go(t, e),
          (o = n.createElement("script")),
          te(o),
          se(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        l.set(r, o));
    }
  }
  function Jg(t, e) {
    _n.M(t, e);
    var n = El;
    if (n && t) {
      var l = Za(n).hoistableScripts,
        r = Tl(t),
        o = l.get(r);
      o ||
        ((o = n.querySelector(Ti(r))),
        o ||
          ((t = g({ src: t, async: !0, type: "module" }, e)),
          (e = Ge.get(r)) && Go(t, e),
          (o = n.createElement("script")),
          te(o),
          se(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        l.set(r, o));
    }
  }
  function mm(t, e, n, l) {
    var r = (r = ft.current) ? Wu(r) : null;
    if (!r) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = Rl(n.href)),
            (n = Za(r).hoistableStyles),
            (l = n.get(e)),
            l || ((l = { type: "style", instance: null, count: 0, state: null }), n.set(e, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = Rl(n.href);
          var o = Za(r).hoistableStyles,
            d = o.get(t);
          if (
            (d ||
              ((r = r.ownerDocument || r),
              (d = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(t, d),
              (o = r.querySelector(Ri(t))) && !o._p && ((d.instance = o), (d.state.loading = 5)),
              Ge.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Ge.set(t, n),
                o || kg(r, t, n, d.state))),
            e && l === null)
          )
            throw Error(s(528, ""));
          return d;
        }
        if (e && l !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" && e && typeof e != "function" && typeof e != "symbol"
            ? ((e = Tl(n)),
              (n = Za(r).hoistableScripts),
              (l = n.get(e)),
              l || ((l = { type: "script", instance: null, count: 0, state: null }), n.set(e, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, t));
    }
  }
  function Rl(t) {
    return 'href="' + Le(t) + '"';
  }
  function Ri(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function pm(t) {
    return g({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function kg(t, e, n, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (l.loading = 1)
      : ((e = t.createElement("link")),
        (l.preload = e),
        e.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        se(e, "link", n),
        te(e),
        t.head.appendChild(e));
  }
  function Tl(t) {
    return '[src="' + Le(t) + '"]';
  }
  function Ti(t) {
    return "script[async]" + t;
  }
  function ym(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var l = t.querySelector('style[data-href~="' + Le(n.href) + '"]');
          if (l) return ((e.instance = l), te(l), l);
          var r = g({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (t.ownerDocument || t).createElement("style")),
            te(l),
            se(l, "style", r),
            tr(l, n.precedence, t),
            (e.instance = l)
          );
        case "stylesheet":
          r = Rl(n.href);
          var o = t.querySelector(Ri(r));
          if (o) return ((e.state.loading |= 4), (e.instance = o), te(o), o);
          ((l = pm(n)),
            (r = Ge.get(r)) && Yo(l, r),
            (o = (t.ownerDocument || t).createElement("link")),
            te(o));
          var d = o;
          return (
            (d._p = new Promise(function (v, R) {
              ((d.onload = v), (d.onerror = R));
            })),
            se(o, "link", l),
            (e.state.loading |= 4),
            tr(o, n.precedence, t),
            (e.instance = o)
          );
        case "script":
          return (
            (o = Tl(n.src)),
            (r = t.querySelector(Ti(o)))
              ? ((e.instance = r), te(r), r)
              : ((l = n),
                (r = Ge.get(o)) && ((l = g({}, n)), Go(l, r)),
                (t = t.ownerDocument || t),
                (r = t.createElement("script")),
                te(r),
                se(r, "link", l),
                t.head.appendChild(r),
                (e.instance = r))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((l = e.instance), (e.state.loading |= 4), tr(l, n.precedence, t));
    return e.instance;
  }
  function tr(t, e, n) {
    for (
      var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        r = l.length ? l[l.length - 1] : null,
        o = r,
        d = 0;
      d < l.length;
      d++
    ) {
      var v = l[d];
      if (v.dataset.precedence === e) o = v;
      else if (o !== r) break;
    }
    o
      ? o.parentNode.insertBefore(t, o.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function Yo(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Go(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var er = null;
  function vm(t, e, n) {
    if (er === null) {
      var l = new Map(),
        r = (er = new Map());
      r.set(n, l);
    } else ((r = er), (l = r.get(n)), l || ((l = new Map()), r.set(n, l)));
    if (l.has(t)) return l;
    for (l.set(t, null), n = n.getElementsByTagName(t), r = 0; r < n.length; r++) {
      var o = n[r];
      if (
        !(o[Yl] || o[le] || (t === "link" && o.getAttribute("rel") === "stylesheet")) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var d = o.getAttribute(e) || "";
        d = t + d;
        var v = l.get(d);
        v ? v.push(o) : l.set(d, [o]);
      }
    }
    return l;
  }
  function gm(t, e, n) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null));
  }
  function Pg(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        return e.rel === "stylesheet"
          ? ((t = e.disabled), typeof e.precedence == "string" && t == null)
          : !0;
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Sm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Fg(t, e, n, l) {
    if (
      n.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var r = Rl(l.href),
          o = e.querySelector(Ri(r));
        if (o) {
          ((e = o._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = nr.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = o),
            te(o));
          return;
        }
        ((o = e.ownerDocument || e),
          (l = pm(l)),
          (r = Ge.get(r)) && Yo(l, r),
          (o = o.createElement("link")),
          te(o));
        var d = o;
        ((d._p = new Promise(function (v, R) {
          ((d.onload = v), (d.onerror = R));
        })),
          se(o, "link", l),
          (n.instance = o));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++,
          (n = nr.bind(t)),
          e.addEventListener("load", n),
          e.addEventListener("error", n)));
    }
  }
  var Vo = 0;
  function $g(t, e) {
    return (
      t.stylesheets && t.count === 0 && lr(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var l = setTimeout(function () {
              if ((t.stylesheets && lr(t, t.stylesheets), t.unsuspend)) {
                var o = t.unsuspend;
                ((t.unsuspend = null), o());
              }
            }, 6e4 + e);
            0 < t.imgBytes && Vo === 0 && (Vo = 62500 * wg());
            var r = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 && (t.stylesheets && lr(t, t.stylesheets), t.unsuspend))
                ) {
                  var o = t.unsuspend;
                  ((t.unsuspend = null), o());
                }
              },
              (t.imgBytes > Vo ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = n),
              function () {
                ((t.unsuspend = null), clearTimeout(l), clearTimeout(r));
              }
            );
          }
        : null
    );
  }
  function nr() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) lr(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var ar = null;
  function lr(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++, (ar = new Map()), e.forEach(Ig, t), (ar = null), nr.call(t)));
  }
  function Ig(t, e) {
    if (!(e.state.loading & 4)) {
      var n = ar.get(t);
      if (n) var l = n.get(null);
      else {
        ((n = new Map()), ar.set(t, n));
        for (
          var r = t.querySelectorAll("link[data-precedence],style[data-precedence]"), o = 0;
          o < r.length;
          o++
        ) {
          var d = r[o];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
            (n.set(d.dataset.precedence, d), (l = d));
        }
        l && n.set(null, l);
      }
      ((r = e.instance),
        (d = r.getAttribute("data-precedence")),
        (o = n.get(d) || l),
        o === l && n.set(null, r),
        n.set(d, r),
        this.count++,
        (l = nr.bind(this)),
        r.addEventListener("load", l),
        r.addEventListener("error", l),
        o
          ? o.parentNode.insertBefore(r, o.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(r, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var Ai = {
    $$typeof: Q,
    Provider: null,
    Consumer: null,
    _currentValue: it,
    _currentValue2: it,
    _threadCount: 0,
  };
  function Wg(t, e, n, l, r, o, d, v, R) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = jr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = jr(0)),
      (this.hiddenUpdates = jr(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = r),
      (this.onCaughtError = o),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = R),
      (this.incompleteTransitions = new Map()));
  }
  function bm(t, e, n, l, r, o, d, v, R, L, B, G) {
    return (
      (t = new Wg(t, e, n, d, R, L, B, G, v)),
      (e = 1),
      o === !0 && (e |= 24),
      (o = xe(3, null, null, e)),
      (t.current = o),
      (o.stateNode = t),
      (e = bs()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (o.memoizedState = { element: l, isDehydrated: n, cache: e }),
      Ts(o),
      t
    );
  }
  function _m(t) {
    return t ? ((t = el), t) : el;
  }
  function Em(t, e, n, l, r, o) {
    ((r = _m(r)),
      l.context === null ? (l.context = r) : (l.pendingContext = r),
      (l = Nn(e)),
      (l.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (l.callback = o),
      (n = jn(t, l, e)),
      n !== null && (Se(n, t, e), ai(n, t, e)));
  }
  function Rm(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Xo(t, e) {
    (Rm(t, e), (t = t.alternate) && Rm(t, e));
  }
  function Tm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = va(t, 67108864);
      (e !== null && Se(e, t, 67108864), Xo(t, 67108864));
    }
  }
  function Am(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = we();
      e = Br(e);
      var n = va(t, e);
      (n !== null && Se(n, t, e), Xo(t, e));
    }
  }
  var ir = !0;
  function t0(t, e, n, l) {
    var r = j.T;
    j.T = null;
    var o = K.p;
    try {
      ((K.p = 2), Qo(t, e, n, l));
    } finally {
      ((K.p = o), (j.T = r));
    }
  }
  function e0(t, e, n, l) {
    var r = j.T;
    j.T = null;
    var o = K.p;
    try {
      ((K.p = 8), Qo(t, e, n, l));
    } finally {
      ((K.p = o), (j.T = r));
    }
  }
  function Qo(t, e, n, l) {
    if (ir) {
      var r = Zo(l);
      if (r === null) (Co(t, e, l, ur, n), Mm(t, l));
      else if (a0(r, t, e, n, l)) l.stopPropagation();
      else if ((Mm(t, l), e & 4 && -1 < n0.indexOf(t))) {
        for (; r !== null; ) {
          var o = Qa(r);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var d = da(o.pendingLanes);
                  if (d !== 0) {
                    var v = o;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; d; ) {
                      var R = 1 << (31 - Te(d));
                      ((v.entanglements[1] |= R), (d &= ~R));
                    }
                    ($e(o), (Tt & 6) === 0 && ((Vu = ce() + 500), Si(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((v = va(o, 2)), v !== null && Se(v, o, 2), Qu(), Xo(o, 2));
            }
          if (((o = Zo(l)), o === null && Co(t, e, l, ur, n), o === r)) break;
          r = o;
        }
        r !== null && l.stopPropagation();
      } else Co(t, e, l, null, n);
    }
  }
  function Zo(t) {
    return ((t = Kr(t)), Ko(t));
  }
  var ur = null;
  function Ko(t) {
    if (((ur = null), (t = Xa(t)), t !== null)) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = h(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = p(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((ur = t), null);
  }
  function xm(t) {
    switch (t) {
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
        switch (Nt()) {
          case ae:
            return 2;
          case Je:
            return 8;
          case Ga:
          case Vy:
            return 32;
          case Nc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Jo = !1,
    Jn = null,
    kn = null,
    Pn = null,
    xi = new Map(),
    Mi = new Map(),
    Fn = [],
    n0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Mm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Jn = null;
        break;
      case "dragenter":
      case "dragleave":
        kn = null;
        break;
      case "mouseover":
      case "mouseout":
        Pn = null;
        break;
      case "pointerover":
      case "pointerout":
        xi.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Mi.delete(e.pointerId);
    }
  }
  function Oi(t, e, n, l, r, o) {
    return t === null || t.nativeEvent !== o
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: o,
          targetContainers: [r],
        }),
        e !== null && ((e = Qa(e)), e !== null && Tm(e)),
        t)
      : ((t.eventSystemFlags |= l),
        (e = t.targetContainers),
        r !== null && e.indexOf(r) === -1 && e.push(r),
        t);
  }
  function a0(t, e, n, l, r) {
    switch (e) {
      case "focusin":
        return ((Jn = Oi(Jn, t, e, n, l, r)), !0);
      case "dragenter":
        return ((kn = Oi(kn, t, e, n, l, r)), !0);
      case "mouseover":
        return ((Pn = Oi(Pn, t, e, n, l, r)), !0);
      case "pointerover":
        var o = r.pointerId;
        return (xi.set(o, Oi(xi.get(o) || null, t, e, n, l, r)), !0);
      case "gotpointercapture":
        return ((o = r.pointerId), Mi.set(o, Oi(Mi.get(o) || null, t, e, n, l, r)), !0);
    }
    return !1;
  }
  function Om(t) {
    var e = Xa(t.target);
    if (e !== null) {
      var n = f(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = h(n)), e !== null)) {
            ((t.blockedOn = e),
              Gc(t.priority, function () {
                Am(n);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = p(n)), e !== null)) {
            ((t.blockedOn = e),
              Gc(t.priority, function () {
                Am(n);
              }));
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function rr(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Zo(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((Zr = l), n.target.dispatchEvent(l), (Zr = null));
      } else return ((e = Qa(n)), e !== null && Tm(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function zm(t, e, n) {
    rr(t) && n.delete(e);
  }
  function l0() {
    ((Jo = !1),
      Jn !== null && rr(Jn) && (Jn = null),
      kn !== null && rr(kn) && (kn = null),
      Pn !== null && rr(Pn) && (Pn = null),
      xi.forEach(zm),
      Mi.forEach(zm));
  }
  function sr(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Jo || ((Jo = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, l0)));
  }
  var or = null;
  function Cm(t) {
    or !== t &&
      ((or = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        or === t && (or = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            l = t[e + 1],
            r = t[e + 2];
          if (typeof l != "function") {
            if (Ko(l || n) === null) continue;
            break;
          }
          var o = Qa(n);
          o !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Qs(o, { pending: !0, data: r, method: n.method, action: l }, l, r));
        }
      }));
  }
  function Al(t) {
    function e(R) {
      return sr(R, t);
    }
    (Jn !== null && sr(Jn, t),
      kn !== null && sr(kn, t),
      Pn !== null && sr(Pn, t),
      xi.forEach(e),
      Mi.forEach(e));
    for (var n = 0; n < Fn.length; n++) {
      var l = Fn[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Fn.length && ((n = Fn[0]), n.blockedOn === null); )
      (Om(n), n.blockedOn === null && Fn.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var r = n[l],
          o = n[l + 1],
          d = r[he] || null;
        if (typeof o == "function") d || Cm(n);
        else if (d) {
          var v = null;
          if (o && o.hasAttribute("formAction")) {
            if (((r = o), (d = o[he] || null))) v = d.formAction;
            else if (Ko(r) !== null) continue;
          } else v = d.action;
          (typeof v == "function" ? (n[l + 1] = v) : (n.splice(l, 3), (l -= 3)), Cm(n));
        }
      }
  }
  function wm() {
    function t(o) {
      o.canIntercept &&
        o.info === "react-transition" &&
        o.intercept({
          handler: function () {
            return new Promise(function (d) {
              return (r = d);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (r !== null && (r(), (r = null)), l || setTimeout(n, 20));
    }
    function n() {
      if (!l && !navigation.transition) {
        var o = navigation.currentEntry;
        o &&
          o.url != null &&
          navigation.navigate(o.url, {
            state: o.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var l = !1,
        r = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          ((l = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            r !== null && (r(), (r = null)));
        }
      );
    }
  }
  function ko(t) {
    this._internalRoot = t;
  }
  ((cr.prototype.render = ko.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(s(409));
      var n = e.current,
        l = we();
      Em(n, l, t, e, null, null);
    }),
    (cr.prototype.unmount = ko.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (Em(t.current, 2, null, t, null, null), Qu(), (e[Va] = null));
        }
      }));
  function cr(t) {
    this._internalRoot = t;
  }
  cr.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Yc();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Fn.length && e !== 0 && e < Fn[n].priority; n++);
      (Fn.splice(n, 0, t), n === 0 && Om(t));
    }
  };
  var Dm = i.version;
  if (Dm !== "19.2.5") throw Error(s(527, Dm, "19.2.5"));
  K.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(s(188))
        : ((t = Object.keys(t).join(",")), Error(s(268, t)));
    return ((t = m(e)), (t = t !== null ? S(t) : null), (t = t === null ? null : t.stateNode), t);
  };
  var i0 = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.2.5",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fr.isDisabled && fr.supportsFiber)
      try {
        ((Bl = fr.inject(i0)), (Re = fr));
      } catch {}
  }
  return (
    (Ci.createRoot = function (t, e) {
      if (!c(t)) throw Error(s(299));
      var n = !1,
        l = "",
        r = qd,
        o = Yd,
        d = Gd;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (r = e.onUncaughtError),
          e.onCaughtError !== void 0 && (o = e.onCaughtError),
          e.onRecoverableError !== void 0 && (d = e.onRecoverableError)),
        (e = bm(t, 1, !1, null, null, n, l, null, r, o, d, wm)),
        (t[Va] = e.current),
        zo(t),
        new ko(e)
      );
    }),
    (Ci.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(s(299));
      var l = !1,
        r = "",
        o = qd,
        d = Yd,
        v = Gd,
        R = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (v = n.onRecoverableError),
          n.formState !== void 0 && (R = n.formState)),
        (e = bm(t, 1, !0, e, n ?? null, l, r, R, o, d, v, wm)),
        (e.context = _m(null)),
        (n = e.current),
        (l = we()),
        (l = Br(l)),
        (r = Nn(l)),
        (r.callback = null),
        jn(n, r, l),
        (n = l),
        (e.current.lanes = n),
        ql(e, n),
        $e(e),
        (t[Va] = e.current),
        zo(t),
        new cr(e)
      );
    }),
    (Ci.version = "19.2.5"),
    Ci
  );
}
var Vm;
function p0() {
  if (Vm) return $o.exports;
  Vm = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), ($o.exports = m0()), $o.exports);
}
var y0 = p0(),
  v0 = "__TSS_CONTEXT",
  yc = Symbol.for("TSS_SERVER_FUNCTION"),
  g0 = "application/x-tss-framed",
  En = { JSON: 0, CHUNK: 1, END: 2, ERROR: 3 },
  S0 = /;\s*v=(\d+)/;
function b0(a) {
  const i = a.match(S0);
  return i ? parseInt(i[1], 10) : void 0;
}
function _0(a) {
  const i = b0(a);
  if (i !== void 0 && i !== 1)
    throw new Error(
      `Incompatible framed protocol version: server=${i}, client=1. Please ensure client and server are using compatible versions.`,
    );
}
var Dp = () => window.__TSS_START_OPTIONS__,
  Lp = !1;
function qi(a) {
  return a[a.length - 1];
}
function E0(a) {
  return typeof a == "function";
}
function ta(a, i) {
  return E0(a) ? a(i) : a;
}
var R0 = Object.prototype.hasOwnProperty,
  Xm = Object.prototype.propertyIsEnumerable,
  T0 = () => Object.create(null),
  Ca = (a, i) => wa(a, i, T0);
function wa(a, i, u = () => ({}), s = 0) {
  if (a === i) return a;
  if (s > 500) return i;
  const c = i,
    f = Km(a) && Km(c);
  if (!f && !(Ll(a) && Ll(c))) return c;
  const h = f ? a : Qm(a);
  if (!h) return c;
  const p = f ? c : Qm(c);
  if (!p) return c;
  const y = h.length,
    m = p.length,
    S = f ? new Array(m) : u();
  let g = 0;
  for (let _ = 0; _ < m; _++) {
    const E = f ? _ : p[_],
      O = a[E],
      w = c[E];
    if (O === w) {
      ((S[E] = O), (f ? _ < y : R0.call(a, E)) && g++);
      continue;
    }
    if (O === null || w === null || typeof O != "object" || typeof w != "object") {
      S[E] = w;
      continue;
    }
    const A = wa(O, w, u, s + 1);
    ((S[E] = A), A === O && g++);
  }
  return y === m && g === y ? a : S;
}
function Qm(a) {
  const i = Object.getOwnPropertyNames(a);
  for (const c of i) if (!Xm.call(a, c)) return !1;
  const u = Object.getOwnPropertySymbols(a);
  if (u.length === 0) return i;
  const s = i;
  for (const c of u) {
    if (!Xm.call(a, c)) return !1;
    s.push(c);
  }
  return s;
}
function Ll(a) {
  if (!Zm(a)) return !1;
  const i = a.constructor;
  if (typeof i > "u") return !0;
  const u = i.prototype;
  return !(!Zm(u) || !u.hasOwnProperty("isPrototypeOf"));
}
function Zm(a) {
  return Object.prototype.toString.call(a) === "[object Object]";
}
function Km(a) {
  return Array.isArray(a) && a.length === Object.keys(a).length;
}
function be(a, i, u) {
  if (a === i) return !0;
  if (typeof a != typeof i) return !1;
  if (Array.isArray(a) && Array.isArray(i)) {
    if (a.length !== i.length) return !1;
    for (let s = 0, c = a.length; s < c; s++) if (!be(a[s], i[s], u)) return !1;
    return !0;
  }
  if (Ll(a) && Ll(i)) {
    const s = u?.ignoreUndefined ?? !0;
    if (u?.partial) {
      for (const h in i) if ((!s || i[h] !== void 0) && !be(a[h], i[h], u)) return !1;
      return !0;
    }
    let c = 0;
    if (!s) c = Object.keys(a).length;
    else for (const h in a) a[h] !== void 0 && c++;
    let f = 0;
    for (const h in i) if ((!s || i[h] !== void 0) && (f++, f > c || !be(a[h], i[h], u))) return !1;
    return c === f;
  }
  return !1;
}
function Ba(a) {
  let i, u;
  const s = new Promise((c, f) => {
    ((i = c), (u = f));
  });
  return (
    (s.status = "pending"),
    (s.resolve = (c) => {
      ((s.status = "resolved"), (s.value = c), i(c), a?.(c));
    }),
    (s.reject = (c) => {
      ((s.status = "rejected"), u(c));
    }),
    s
  );
}
function A0(a) {
  return typeof a?.message != "string"
    ? !1
    : a.message.startsWith("Failed to fetch dynamically imported module") ||
        a.message.startsWith("error loading dynamically imported module") ||
        a.message.startsWith("Importing a module script failed");
}
function Yi(a) {
  return !!(a && typeof a == "object" && typeof a.then == "function");
}
function x0(a) {
  return a.replace(/[\x00-\x1f\x7f]/g, "");
}
function Jm(a) {
  let i;
  try {
    i = decodeURI(a);
  } catch {
    i = a.replaceAll(/%[0-9A-F]{2}/gi, (u) => {
      try {
        return decodeURI(u);
      } catch {
        return u;
      }
    });
  }
  return x0(i);
}
var M0 = ["http:", "https:", "mailto:", "tel:"];
function br(a, i) {
  if (!a) return !1;
  try {
    const u = new URL(a);
    return !i.has(u.protocol);
  } catch {
    return !1;
  }
}
var O0 = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029",
  },
  z0 = /[&><\u2028\u2029]/g;
function C0(a) {
  return a.replace(z0, (i) => O0[i]);
}
function wi(a) {
  if (!a) return { path: a, handledProtocolRelativeURL: !1 };
  if (!/[%\\\x00-\x1f\x7f]/.test(a) && !a.startsWith("//"))
    return { path: a, handledProtocolRelativeURL: !1 };
  const i = /%25|%5C/gi;
  let u = 0,
    s = "",
    c;
  for (; (c = i.exec(a)) !== null; ) ((s += Jm(a.slice(u, c.index)) + c[0]), (u = i.lastIndex));
  s = s + Jm(u ? a.slice(u) : a);
  let f = !1;
  return (
    s.startsWith("//") && ((f = !0), (s = "/" + s.replace(/^\/+/, ""))),
    { path: s, handledProtocolRelativeURL: f }
  );
}
function w0(a) {
  return /\s|[^\u0000-\u007F]/.test(a) ? a.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : a;
}
function D0(a, i) {
  if (a === i) return !0;
  if (a.length !== i.length) return !1;
  for (let u = 0; u < a.length; u++) if (a[u] !== i[u]) return !1;
  return !0;
}
function Ee() {
  throw new Error("Invariant failed");
}
function Gi(a) {
  const i = new Map();
  let u, s;
  const c = (f) => {
    f.next &&
      (f.prev
        ? ((f.prev.next = f.next),
          (f.next.prev = f.prev),
          (f.next = void 0),
          s && ((s.next = f), (f.prev = s)))
        : ((f.next.prev = void 0),
          (u = f.next),
          (f.next = void 0),
          s && ((f.prev = s), (s.next = f))),
      (s = f));
  };
  return {
    get(f) {
      const h = i.get(f);
      if (h) return (c(h), h.value);
    },
    set(f, h) {
      if (i.size >= a && u) {
        const y = u;
        (i.delete(y.key),
          y.next && ((u = y.next), (y.next.prev = void 0)),
          y === s && (s = void 0));
      }
      const p = i.get(f);
      if (p) ((p.value = h), c(p));
      else {
        const y = { key: f, value: h, prev: s };
        (s && (s.next = y), (s = y), u || (u = y), i.set(f, y));
      }
    },
    clear() {
      (i.clear(), (u = void 0), (s = void 0));
    },
  };
}
var Da = 4,
  Up = 5;
function L0(a) {
  const i = a.indexOf("{");
  if (i === -1) return null;
  const u = a.indexOf("}", i);
  return u === -1 || i + 1 >= a.length ? null : [i, u];
}
function Tc(a, i, u = new Uint16Array(6)) {
  const s = a.indexOf("/", i),
    c = s === -1 ? a.length : s,
    f = a.substring(i, c);
  if (!f || !f.includes("$"))
    return ((u[0] = 0), (u[1] = i), (u[2] = i), (u[3] = c), (u[4] = c), (u[5] = c), u);
  if (f === "$") {
    const p = a.length;
    return ((u[0] = 2), (u[1] = i), (u[2] = i), (u[3] = p), (u[4] = p), (u[5] = p), u);
  }
  if (f.charCodeAt(0) === 36)
    return ((u[0] = 1), (u[1] = i), (u[2] = i + 1), (u[3] = c), (u[4] = c), (u[5] = c), u);
  const h = L0(f);
  if (h) {
    const [p, y] = h,
      m = f.charCodeAt(p + 1);
    if (m === 45) {
      if (p + 2 < f.length && f.charCodeAt(p + 2) === 36) {
        const S = p + 3,
          g = y;
        if (S < g)
          return (
            (u[0] = 3),
            (u[1] = i + p),
            (u[2] = i + S),
            (u[3] = i + g),
            (u[4] = i + y + 1),
            (u[5] = c),
            u
          );
      }
    } else if (m === 36) {
      const S = p + 1,
        g = p + 2;
      return g === y
        ? ((u[0] = 2),
          (u[1] = i + p),
          (u[2] = i + S),
          (u[3] = i + g),
          (u[4] = i + y + 1),
          (u[5] = a.length),
          u)
        : ((u[0] = 1),
          (u[1] = i + p),
          (u[2] = i + g),
          (u[3] = i + y),
          (u[4] = i + y + 1),
          (u[5] = c),
          u);
    }
  }
  return ((u[0] = 0), (u[1] = i), (u[2] = i), (u[3] = c), (u[4] = c), (u[5] = c), u);
}
function Mr(a, i, u, s, c, f, h) {
  h?.(u);
  let p = s;
  {
    const y = u.fullPath ?? u.from,
      m = y.length,
      S = u.options?.caseSensitive ?? a,
      g = !!(u.options?.params?.parse && u.options?.skipRouteOnParseError?.params);
    for (; p < m; ) {
      const E = Tc(y, p, i);
      let O;
      const w = p,
        A = E[5];
      switch (((p = A + 1), f++, E[0])) {
        case 0: {
          const z = y.substring(E[2], E[3]);
          if (S) {
            const V = c.static?.get(z);
            if (V) O = V;
            else {
              c.static ??= new Map();
              const Q = La(u.fullPath ?? u.from);
              ((Q.parent = c), (Q.depth = f), (O = Q), c.static.set(z, Q));
            }
          } else {
            const V = z.toLowerCase(),
              Q = c.staticInsensitive?.get(V);
            if (Q) O = Q;
            else {
              c.staticInsensitive ??= new Map();
              const H = La(u.fullPath ?? u.from);
              ((H.parent = c), (H.depth = f), (O = H), c.staticInsensitive.set(V, H));
            }
          }
          break;
        }
        case 1: {
          const z = y.substring(w, E[1]),
            V = y.substring(E[4], A),
            Q = S && !!(z || V),
            H = z ? (Q ? z : z.toLowerCase()) : void 0,
            I = V ? (Q ? V : V.toLowerCase()) : void 0,
            F =
              !g &&
              c.dynamic?.find(
                (X) =>
                  !X.skipOnParamError && X.caseSensitive === Q && X.prefix === H && X.suffix === I,
              );
          if (F) O = F;
          else {
            const X = nc(1, u.fullPath ?? u.from, Q, H, I);
            ((O = X), (X.depth = f), (X.parent = c), (c.dynamic ??= []), c.dynamic.push(X));
          }
          break;
        }
        case 3: {
          const z = y.substring(w, E[1]),
            V = y.substring(E[4], A),
            Q = S && !!(z || V),
            H = z ? (Q ? z : z.toLowerCase()) : void 0,
            I = V ? (Q ? V : V.toLowerCase()) : void 0,
            F =
              !g &&
              c.optional?.find(
                (X) =>
                  !X.skipOnParamError && X.caseSensitive === Q && X.prefix === H && X.suffix === I,
              );
          if (F) O = F;
          else {
            const X = nc(3, u.fullPath ?? u.from, Q, H, I);
            ((O = X), (X.parent = c), (X.depth = f), (c.optional ??= []), c.optional.push(X));
          }
          break;
        }
        case 2: {
          const z = y.substring(w, E[1]),
            V = y.substring(E[4], A),
            Q = S && !!(z || V),
            H = z ? (Q ? z : z.toLowerCase()) : void 0,
            I = V ? (Q ? V : V.toLowerCase()) : void 0,
            F = nc(2, u.fullPath ?? u.from, Q, H, I);
          ((O = F), (F.parent = c), (F.depth = f), (c.wildcard ??= []), c.wildcard.push(F));
        }
      }
      c = O;
    }
    if (g && u.children && !u.isRoot && u.id && u.id.charCodeAt(u.id.lastIndexOf("/") + 1) === 95) {
      const E = La(u.fullPath ?? u.from);
      ((E.kind = Up),
        (E.parent = c),
        f++,
        (E.depth = f),
        (c.pathless ??= []),
        c.pathless.push(E),
        (c = E));
    }
    const _ = (u.path || !u.children) && !u.isRoot;
    if (_ && y.endsWith("/")) {
      const E = La(u.fullPath ?? u.from);
      ((E.kind = Da), (E.parent = c), f++, (E.depth = f), (c.index = E), (c = E));
    }
    ((c.parse = u.options?.params?.parse ?? null),
      (c.skipOnParamError = g),
      (c.parsingPriority = u.options?.skipRouteOnParseError?.priority ?? 0),
      _ && !c.route && ((c.route = u), (c.fullPath = u.fullPath ?? u.from)));
  }
  if (u.children) for (const y of u.children) Mr(a, i, y, p, c, f, h);
}
function ec(a, i) {
  if (a.skipOnParamError && !i.skipOnParamError) return -1;
  if (!a.skipOnParamError && i.skipOnParamError) return 1;
  if (a.skipOnParamError && i.skipOnParamError && (a.parsingPriority || i.parsingPriority))
    return i.parsingPriority - a.parsingPriority;
  if (a.prefix && i.prefix && a.prefix !== i.prefix) {
    if (a.prefix.startsWith(i.prefix)) return -1;
    if (i.prefix.startsWith(a.prefix)) return 1;
  }
  if (a.suffix && i.suffix && a.suffix !== i.suffix) {
    if (a.suffix.endsWith(i.suffix)) return -1;
    if (i.suffix.endsWith(a.suffix)) return 1;
  }
  return a.prefix && !i.prefix
    ? -1
    : !a.prefix && i.prefix
      ? 1
      : a.suffix && !i.suffix
        ? -1
        : !a.suffix && i.suffix
          ? 1
          : a.caseSensitive && !i.caseSensitive
            ? -1
            : !a.caseSensitive && i.caseSensitive
              ? 1
              : 0;
}
function In(a) {
  if (a.pathless) for (const i of a.pathless) In(i);
  if (a.static) for (const i of a.static.values()) In(i);
  if (a.staticInsensitive) for (const i of a.staticInsensitive.values()) In(i);
  if (a.dynamic?.length) {
    a.dynamic.sort(ec);
    for (const i of a.dynamic) In(i);
  }
  if (a.optional?.length) {
    a.optional.sort(ec);
    for (const i of a.optional) In(i);
  }
  if (a.wildcard?.length) {
    a.wildcard.sort(ec);
    for (const i of a.wildcard) In(i);
  }
}
function La(a) {
  return {
    kind: 0,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: a,
    parent: null,
    parse: null,
    skipOnParamError: !1,
    parsingPriority: 0,
  };
}
function nc(a, i, u, s, c) {
  return {
    kind: a,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: i,
    parent: null,
    parse: null,
    skipOnParamError: !1,
    parsingPriority: 0,
    caseSensitive: u,
    prefix: s,
    suffix: c,
  };
}
function U0(a, i) {
  const u = La("/"),
    s = new Uint16Array(6);
  for (const c of a) Mr(!1, s, c, 1, u, 0);
  (In(u), (i.masksTree = u), (i.flatCache = Gi(1e3)));
}
function N0(a, i) {
  a ||= "/";
  const u = i.flatCache.get(a);
  if (u) return u;
  const s = Ac(a, i.masksTree);
  return (i.flatCache.set(a, s), s);
}
function j0(a, i, u, s, c) {
  ((a ||= "/"), (s ||= "/"));
  const f = i ? `case\0${a}` : a;
  let h = c.singleCache.get(f);
  return (
    h || ((h = La("/")), Mr(i, new Uint16Array(6), { from: a }, 1, h, 0), c.singleCache.set(f, h)),
    Ac(s, h, u)
  );
}
function B0(a, i, u = !1) {
  const s = u ? a : `nofuzz\0${a}`,
    c = i.matchCache.get(s);
  if (c !== void 0) return c;
  a ||= "/";
  let f;
  try {
    f = Ac(a, i.segmentTree, u);
  } catch (h) {
    if (h instanceof URIError) f = null;
    else throw h;
  }
  return (f && (f.branch = Y0(f.route)), i.matchCache.set(s, f), f);
}
function H0(a) {
  return a === "/" ? a : a.replace(/\/{1,}$/, "");
}
function q0(a, i = !1, u) {
  const s = La(a.fullPath),
    c = new Uint16Array(6),
    f = {},
    h = {};
  let p = 0;
  return (
    Mr(i, c, a, 1, s, 0, (y) => {
      if ((u?.(y, p), y.id in f && Ee(), (f[y.id] = y), p !== 0 && y.path)) {
        const m = H0(y.fullPath);
        (!h[m] || y.fullPath.endsWith("/")) && (h[m] = y);
      }
      p++;
    }),
    In(s),
    {
      processedTree: {
        segmentTree: s,
        singleCache: Gi(1e3),
        matchCache: Gi(1e3),
        flatCache: null,
        masksTree: null,
      },
      routesById: f,
      routesByPath: h,
    }
  );
}
function Ac(a, i, u = !1) {
  const s = a.split("/"),
    c = V0(a, s, i, u);
  if (!c) return null;
  const [f] = Np(a, s, c);
  return { route: c.node.route, rawParams: f, parsedParams: c.parsedParams };
}
function Np(a, i, u) {
  const s = G0(u.node);
  let c = null;
  const f = Object.create(null);
  let h = u.extract?.part ?? 0,
    p = u.extract?.node ?? 0,
    y = u.extract?.path ?? 0,
    m = u.extract?.segment ?? 0;
  for (; p < s.length; h++, p++, y++, m++) {
    const S = s[p];
    if (S.kind === Da) break;
    if (S.kind === Up) {
      (m--, h--, y--);
      continue;
    }
    const g = i[h],
      _ = y;
    if ((g && (y += g.length), S.kind === 1)) {
      c ??= u.node.fullPath.split("/");
      const E = c[m],
        O = S.prefix?.length ?? 0;
      if (E.charCodeAt(O) === 123) {
        const w = S.suffix?.length ?? 0,
          A = E.substring(O + 2, E.length - w - 1),
          z = g.substring(O, g.length - w);
        f[A] = decodeURIComponent(z);
      } else {
        const w = E.substring(1);
        f[w] = decodeURIComponent(g);
      }
    } else if (S.kind === 3) {
      if (u.skipped & (1 << p)) {
        (h--, (y = _ - 1));
        continue;
      }
      c ??= u.node.fullPath.split("/");
      const E = c[m],
        O = S.prefix?.length ?? 0,
        w = S.suffix?.length ?? 0,
        A = E.substring(O + 3, E.length - w - 1),
        z = S.suffix || S.prefix ? g.substring(O, g.length - w) : g;
      z && (f[A] = decodeURIComponent(z));
    } else if (S.kind === 2) {
      const E = S,
        O = a.substring(_ + (E.prefix?.length ?? 0), a.length - (E.suffix?.length ?? 0)),
        w = decodeURIComponent(O);
      ((f["*"] = w), (f._splat = w));
      break;
    }
  }
  return (
    u.rawParams && Object.assign(f, u.rawParams),
    [f, { part: h, node: p, path: y, segment: m }]
  );
}
function Y0(a) {
  const i = [a];
  for (; a.parentRoute; ) ((a = a.parentRoute), i.push(a));
  return (i.reverse(), i);
}
function G0(a) {
  const i = Array(a.depth + 1);
  do ((i[a.depth] = a), (a = a.parent));
  while (a);
  return i;
}
function V0(a, i, u, s) {
  if (a === "/" && u.index) return { node: u.index, skipped: 0 };
  const c = !qi(i),
    f = c && a !== "/",
    h = i.length - (c ? 1 : 0),
    p = [{ node: u, index: 1, skipped: 0, depth: 1, statics: 1, dynamics: 0, optionals: 0 }];
  let y = null,
    m = null,
    S = null;
  for (; p.length; ) {
    const g = p.pop(),
      { node: _, index: E, skipped: O, depth: w, statics: A, dynamics: z, optionals: V } = g;
    let { extract: Q, rawParams: H, parsedParams: I } = g;
    if (_.skipOnParamError) {
      if (!ac(a, i, g)) continue;
      ((H = g.rawParams), (Q = g.extract), (I = g.parsedParams));
    }
    s && _.route && _.kind !== Da && Di(m, g) && (m = g);
    const F = E === h;
    if (
      F &&
      (_.route && !f && Di(S, g) && (S = g), !_.optional && !_.wildcard && !_.index && !_.pathless)
    )
      continue;
    const X = F ? void 0 : i[E];
    let J;
    if (F && _.index) {
      const P = {
        node: _.index,
        index: E,
        skipped: O,
        depth: w + 1,
        statics: A,
        dynamics: z,
        optionals: V,
        extract: Q,
        rawParams: H,
        parsedParams: I,
      };
      let ut = !0;
      if ((_.index.skipOnParamError && (ac(a, i, P) || (ut = !1)), ut)) {
        if (A === h && !z && !V && !O) return P;
        Di(S, P) && (S = P);
      }
    }
    if (_.wildcard && Di(y, g))
      for (const P of _.wildcard) {
        const { prefix: ut, suffix: tt } = P;
        if (ut && (F || !(P.caseSensitive ? X : (J ??= X.toLowerCase())).startsWith(ut))) continue;
        if (tt) {
          if (F) continue;
          const vt = i.slice(E).join("/").slice(-tt.length);
          if ((P.caseSensitive ? vt : vt.toLowerCase()) !== tt) continue;
        }
        const dt = {
          node: P,
          index: h,
          skipped: O,
          depth: w,
          statics: A,
          dynamics: z,
          optionals: V,
          extract: Q,
          rawParams: H,
          parsedParams: I,
        };
        if (!(P.skipOnParamError && !ac(a, i, dt))) {
          y = dt;
          break;
        }
      }
    if (_.optional) {
      const P = O | (1 << w),
        ut = w + 1;
      for (let tt = _.optional.length - 1; tt >= 0; tt--) {
        const dt = _.optional[tt];
        p.push({
          node: dt,
          index: E,
          skipped: P,
          depth: ut,
          statics: A,
          dynamics: z,
          optionals: V,
          extract: Q,
          rawParams: H,
          parsedParams: I,
        });
      }
      if (!F)
        for (let tt = _.optional.length - 1; tt >= 0; tt--) {
          const dt = _.optional[tt],
            { prefix: vt, suffix: Yt } = dt;
          if (vt || Yt) {
            const Ot = dt.caseSensitive ? X : (J ??= X.toLowerCase());
            if ((vt && !Ot.startsWith(vt)) || (Yt && !Ot.endsWith(Yt))) continue;
          }
          p.push({
            node: dt,
            index: E + 1,
            skipped: O,
            depth: ut,
            statics: A,
            dynamics: z,
            optionals: V + 1,
            extract: Q,
            rawParams: H,
            parsedParams: I,
          });
        }
    }
    if (!F && _.dynamic && X)
      for (let P = _.dynamic.length - 1; P >= 0; P--) {
        const ut = _.dynamic[P],
          { prefix: tt, suffix: dt } = ut;
        if (tt || dt) {
          const vt = ut.caseSensitive ? X : (J ??= X.toLowerCase());
          if ((tt && !vt.startsWith(tt)) || (dt && !vt.endsWith(dt))) continue;
        }
        p.push({
          node: ut,
          index: E + 1,
          skipped: O,
          depth: w + 1,
          statics: A,
          dynamics: z + 1,
          optionals: V,
          extract: Q,
          rawParams: H,
          parsedParams: I,
        });
      }
    if (!F && _.staticInsensitive) {
      const P = _.staticInsensitive.get((J ??= X.toLowerCase()));
      P &&
        p.push({
          node: P,
          index: E + 1,
          skipped: O,
          depth: w + 1,
          statics: A + 1,
          dynamics: z,
          optionals: V,
          extract: Q,
          rawParams: H,
          parsedParams: I,
        });
    }
    if (!F && _.static) {
      const P = _.static.get(X);
      P &&
        p.push({
          node: P,
          index: E + 1,
          skipped: O,
          depth: w + 1,
          statics: A + 1,
          dynamics: z,
          optionals: V,
          extract: Q,
          rawParams: H,
          parsedParams: I,
        });
    }
    if (_.pathless) {
      const P = w + 1;
      for (let ut = _.pathless.length - 1; ut >= 0; ut--) {
        const tt = _.pathless[ut];
        p.push({
          node: tt,
          index: E,
          skipped: O,
          depth: P,
          statics: A,
          dynamics: z,
          optionals: V,
          extract: Q,
          rawParams: H,
          parsedParams: I,
        });
      }
    }
  }
  if (S && y) return Di(y, S) ? S : y;
  if (S) return S;
  if (y) return y;
  if (s && m) {
    let g = m.index;
    for (let E = 0; E < m.index; E++) g += i[E].length;
    const _ = g === a.length ? "/" : a.slice(g);
    return ((m.rawParams ??= Object.create(null)), (m.rawParams["**"] = decodeURIComponent(_)), m);
  }
  return null;
}
function ac(a, i, u) {
  try {
    const [s, c] = Np(a, i, u);
    ((u.rawParams = s), (u.extract = c));
    const f = u.node.parse(s);
    return ((u.parsedParams = Object.assign(Object.create(null), u.parsedParams, f)), !0);
  } catch {
    return null;
  }
}
function Di(a, i) {
  return a
    ? i.statics > a.statics ||
        (i.statics === a.statics &&
          (i.dynamics > a.dynamics ||
            (i.dynamics === a.dynamics &&
              (i.optionals > a.optionals ||
                (i.optionals === a.optionals &&
                  ((i.node.kind === Da) > (a.node.kind === Da) ||
                    ((i.node.kind === Da) == (a.node.kind === Da) && i.depth > a.depth)))))))
    : !0;
}
function pr(a) {
  return xc(a.filter((i) => i !== void 0).join("/"));
}
function xc(a) {
  return a.replace(/\/{2,}/g, "/");
}
function jp(a) {
  return a === "/" ? a : a.replace(/^\/{1,}/, "");
}
function na(a) {
  const i = a.length;
  return i > 1 && a[i - 1] === "/" ? a.replace(/\/{1,}$/, "") : a;
}
function Bp(a) {
  return na(jp(a));
}
function _r(a, i) {
  return a?.endsWith("/") && a !== "/" && a !== `${i}/` ? a.slice(0, -1) : a;
}
function X0(a, i, u) {
  return _r(a, u) === _r(i, u);
}
function Q0({ base: a, to: i, trailingSlash: u = "never", cache: s }) {
  const c = i.startsWith("/"),
    f = !c && i === ".";
  let h;
  if (s) {
    h = c ? i : f ? a : a + "\0" + i;
    const g = s.get(h);
    if (g) return g;
  }
  let p;
  if (f) p = a.split("/");
  else if (c) p = i.split("/");
  else {
    for (p = a.split("/"); p.length > 1 && qi(p) === ""; ) p.pop();
    const g = i.split("/");
    for (let _ = 0, E = g.length; _ < E; _++) {
      const O = g[_];
      O === ""
        ? _
          ? _ === E - 1 && p.push(O)
          : (p = [O])
        : O === ".."
          ? p.pop()
          : O === "." || p.push(O);
    }
  }
  p.length > 1 && (qi(p) === "" ? u === "never" && p.pop() : u === "always" && p.push(""));
  let y,
    m = "";
  for (let g = 0; g < p.length; g++) {
    g > 0 && (m += "/");
    const _ = p[g];
    if (!_) continue;
    y = Tc(_, 0, y);
    const E = y[0];
    if (E === 0) {
      m += _;
      continue;
    }
    const O = y[5],
      w = _.substring(0, y[1]),
      A = _.substring(y[4], O),
      z = _.substring(y[2], y[3]);
    E === 1
      ? (m += w || A ? `${w}{$${z}}${A}` : `$${z}`)
      : E === 2
        ? (m += w || A ? `${w}{$}${A}` : "$")
        : (m += `${w}{-$${z}}${A}`);
  }
  m = xc(m);
  const S = m || "/";
  return (h && s && s.set(h, S), S);
}
function Z0(a) {
  const i = new Map(a.map((c) => [encodeURIComponent(c), c])),
    u = Array.from(i.keys())
      .map((c) => c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|"),
    s = new RegExp(u, "g");
  return (c) => c.replace(s, (f) => i.get(f) ?? f);
}
function lc(a, i, u) {
  const s = i[a];
  return typeof s != "string"
    ? s
    : a === "_splat"
      ? /^[a-zA-Z0-9\-._~!/]*$/.test(s)
        ? s
        : s
            .split("/")
            .map((c) => Pm(c, u))
            .join("/")
      : Pm(s, u);
}
function km({ path: a, params: i, decoder: u, ...s }) {
  let c = !1;
  const f = Object.create(null);
  if (!a || a === "/") return { interpolatedPath: "/", usedParams: f, isMissingParams: c };
  if (!a.includes("$")) return { interpolatedPath: a, usedParams: f, isMissingParams: c };
  const h = a.length;
  let p = 0,
    y,
    m = "";
  for (; p < h; ) {
    const S = p;
    y = Tc(a, S, y);
    const g = y[5];
    if (((p = g + 1), S === g)) continue;
    const _ = y[0];
    if (_ === 0) {
      m += "/" + a.substring(S, g);
      continue;
    }
    if (_ === 2) {
      const E = i._splat;
      ((f._splat = E), (f["*"] = E));
      const O = a.substring(S, y[1]),
        w = a.substring(y[4], g);
      if (!E) {
        ((c = !0), (O || w) && (m += "/" + O + w));
        continue;
      }
      const A = lc("_splat", i, u);
      m += "/" + O + A + w;
      continue;
    }
    if (_ === 1) {
      const E = a.substring(y[2], y[3]);
      (!c && !(E in i) && (c = !0), (f[E] = i[E]));
      const O = a.substring(S, y[1]),
        w = a.substring(y[4], g),
        A = lc(E, i, u) ?? "undefined";
      m += "/" + O + A + w;
      continue;
    }
    if (_ === 3) {
      const E = a.substring(y[2], y[3]),
        O = i[E];
      if (O == null) continue;
      f[E] = O;
      const w = a.substring(S, y[1]),
        A = a.substring(y[4], g),
        z = lc(E, i, u) ?? "";
      m += "/" + w + z + A;
      continue;
    }
  }
  return (
    a.endsWith("/") && (m += "/"),
    { usedParams: f, interpolatedPath: m || "/", isMissingParams: c }
  );
}
function Pm(a, i) {
  const u = encodeURIComponent(a);
  return i?.(u) ?? u;
}
function ne(a) {
  return a?.isNotFound === !0;
}
function K0() {
  try {
    return typeof window < "u" && typeof window.sessionStorage == "object"
      ? window.sessionStorage
      : void 0;
  } catch {
    return;
  }
}
var J0 = "tsr-scroll-restoration-v1_3";
function k0() {
  const a = K0();
  if (!a) return null;
  let i = {};
  try {
    const s = JSON.parse(a.getItem("tsr-scroll-restoration-v1_3") || "{}");
    Ll(s) && (i = s);
  } catch {}
  return {
    get state() {
      return i;
    },
    set: (s) => {
      i = ta(s, i) || i;
    },
    persist: () => {
      try {
        a.setItem(J0, JSON.stringify(i));
      } catch {}
    },
  };
}
var Fm = k0(),
  P0 = (a) => a.state.__TSR_key || a.href;
function F0(a) {
  const i = [];
  let u;
  for (; (u = a.parentNode); )
    (i.push(`${a.tagName}:nth-child(${Array.prototype.indexOf.call(u.children, a) + 1})`), (a = u));
  return `${i.reverse().join(" > ")}`.toLowerCase();
}
var dr = !1,
  Li = "window",
  $m = "data-scroll-restoration-id";
function $0(a, i) {
  if (!Fm) return;
  const u = Fm;
  if (
    ((a.options.scrollRestoration ?? !1) && (a.isScrollRestoring = !0),
    a.isScrollRestorationSetup || !u)
  )
    return;
  ((a.isScrollRestorationSetup = !0), (dr = !1));
  const s = a.options.getScrollRestorationKey || P0,
    c = new Map();
  window.history.scrollRestoration = "manual";
  const f = (p) => {
      if (!(dr || !a.isScrollRestoring))
        if (p.target === document || p.target === window)
          c.set(Li, { scrollX: window.scrollX || 0, scrollY: window.scrollY || 0 });
        else {
          const y = p.target;
          c.set(y, { scrollX: y.scrollLeft || 0, scrollY: y.scrollTop || 0 });
        }
    },
    h = (p) => {
      if (!a.isScrollRestoring || !p || c.size === 0 || !u) return;
      const y = (u.state[p] ||= {});
      for (const [m, S] of c) {
        let g;
        if (m === Li) g = Li;
        else if (m.isConnected) {
          const _ = m.getAttribute($m);
          g = _ ? `[${$m}="${_}"]` : F0(m);
        }
        g && (y[g] = S);
      }
    };
  (document.addEventListener("scroll", f, !0),
    a.subscribe("onBeforeLoad", (p) => {
      (h(p.fromLocation ? s(p.fromLocation) : void 0), c.clear());
    }),
    window.addEventListener("pagehide", () => {
      (h(s(a.stores.resolvedLocation.get() ?? a.stores.location.get())), u.persist());
    }),
    a.subscribe("onRendered", (p) => {
      const y = s(p.toLocation),
        m = a.options.scrollRestorationBehavior,
        S = a.options.scrollToTopSelectors;
      if ((c.clear(), !a.resetNextScroll)) {
        a.resetNextScroll = !0;
        return;
      }
      if (
        !(
          typeof a.options.scrollRestoration == "function" &&
          !a.options.scrollRestoration({ location: a.latestLocation })
        )
      ) {
        dr = !0;
        try {
          const g = a.isScrollRestoring ? u.state[y] : void 0;
          let _ = !1;
          if (g)
            for (const E in g) {
              const O = g[E];
              if (!Ll(O)) continue;
              const { scrollX: w, scrollY: A } = O;
              if (!(!Number.isFinite(w) || !Number.isFinite(A))) {
                if (E === Li) (window.scrollTo({ top: A, left: w, behavior: m }), (_ = !0));
                else if (E) {
                  let z;
                  try {
                    z = document.querySelector(E);
                  } catch {
                    continue;
                  }
                  z && ((z.scrollLeft = w), (z.scrollTop = A), (_ = !0));
                }
              }
            }
          if (!_) {
            const E = a.history.location.hash.slice(1);
            if (E) {
              const O = window.history.state?.__hashScrollIntoViewOptions ?? !0;
              if (O) {
                const w = document.getElementById(E);
                w && w.scrollIntoView(O);
              }
            } else {
              const O = { top: 0, left: 0, behavior: m };
              if ((window.scrollTo(O), S))
                for (const w of S) {
                  if (w === Li) continue;
                  const A = typeof w == "function" ? w() : document.querySelector(w);
                  A && A.scrollTo(O);
                }
            }
          }
        } finally {
          dr = !1;
        }
        a.isScrollRestoring && u.set((g) => ((g[y] ||= {}), g));
      }
    }));
}
function Hp(a, i = String) {
  const u = new URLSearchParams();
  for (const s in a) {
    const c = a[s];
    c !== void 0 && u.set(s, i(c));
  }
  return u.toString();
}
function ic(a) {
  return a ? (a === "false" ? !1 : a === "true" ? !0 : +a * 0 === 0 && +a + "" === a ? +a : a) : "";
}
function I0(a) {
  const i = new URLSearchParams(a),
    u = Object.create(null);
  for (const [s, c] of i.entries()) {
    const f = u[s];
    f == null ? (u[s] = ic(c)) : Array.isArray(f) ? f.push(ic(c)) : (u[s] = [f, ic(c)]);
  }
  return u;
}
var W0 = eS(JSON.parse),
  tS = nS(JSON.stringify, JSON.parse);
function eS(a) {
  return (i) => {
    i[0] === "?" && (i = i.substring(1));
    const u = I0(i);
    for (const s in u) {
      const c = u[s];
      if (typeof c == "string")
        try {
          u[s] = a(c);
        } catch {}
    }
    return u;
  };
}
function nS(a, i) {
  const u = typeof i == "function";
  function s(c) {
    if (typeof c == "object" && c !== null)
      try {
        return a(c);
      } catch {}
    else if (u && typeof c == "string")
      try {
        return (i(c), a(c));
      } catch {}
    return c;
  }
  return (c) => {
    const f = Hp(c, s);
    return f ? `?${f}` : "";
  };
}
var Na = "__root__";
function qp(a) {
  if (
    ((a.statusCode = a.statusCode || a.code || 307),
    !a._builtLocation && !a.reloadDocument && typeof a.href == "string")
  )
    try {
      (new URL(a.href), (a.reloadDocument = !0));
    } catch {}
  const i = new Headers(a.headers);
  a.href && i.get("Location") === null && i.set("Location", a.href);
  const u = new Response(null, { status: a.statusCode, headers: i });
  if (((u.options = a), a.throw)) throw u;
  return u;
}
function _e(a) {
  return a instanceof Response && !!a.options;
}
function aS(a) {
  if (a !== null && typeof a == "object" && a.isSerializedRedirect) return qp(a);
}
function lS(a) {
  return {
    input: ({ url: i }) => {
      for (const u of a) i = vc(u, i);
      return i;
    },
    output: ({ url: i }) => {
      for (let u = a.length - 1; u >= 0; u--) i = Yp(a[u], i);
      return i;
    },
  };
}
function iS(a) {
  const i = Bp(a.basepath),
    u = `/${i}`,
    s = `${u}/`,
    c = a.caseSensitive ? u : u.toLowerCase(),
    f = a.caseSensitive ? s : s.toLowerCase();
  return {
    input: ({ url: h }) => {
      const p = a.caseSensitive ? h.pathname : h.pathname.toLowerCase();
      return (
        p === c ? (h.pathname = "/") : p.startsWith(f) && (h.pathname = h.pathname.slice(u.length)),
        h
      );
    },
    output: ({ url: h }) => ((h.pathname = pr(["/", i, h.pathname])), h),
  };
}
function vc(a, i) {
  const u = a?.input?.({ url: i });
  if (u) {
    if (typeof u == "string") return new URL(u);
    if (u instanceof URL) return u;
  }
  return i;
}
function Yp(a, i) {
  const u = a?.output?.({ url: i });
  if (u) {
    if (typeof u == "string") return new URL(u);
    if (u instanceof URL) return u;
  }
  return i;
}
function uS(a, i) {
  const { createMutableStore: u, createReadonlyStore: s, batch: c, init: f } = i,
    h = new Map(),
    p = new Map(),
    y = new Map(),
    m = u(a.status),
    S = u(a.loadedAt),
    g = u(a.isLoading),
    _ = u(a.isTransitioning),
    E = u(a.location),
    O = u(a.resolvedLocation),
    w = u(a.statusCode),
    A = u(a.redirect),
    z = u([]),
    V = u([]),
    Q = u([]),
    H = s(() => uc(h, z.get())),
    I = s(() => uc(p, V.get())),
    F = s(() => uc(y, Q.get())),
    X = s(() => z.get()[0]),
    J = s(() => z.get().some((K) => h.get(K)?.get().status === "pending")),
    P = s(() => ({
      locationHref: E.get().href,
      resolvedLocationHref: O.get()?.href,
      status: m.get(),
    })),
    ut = s(() => ({
      status: m.get(),
      loadedAt: S.get(),
      isLoading: g.get(),
      isTransitioning: _.get(),
      matches: H.get(),
      location: E.get(),
      resolvedLocation: O.get(),
      statusCode: w.get(),
      redirect: A.get(),
    })),
    tt = Gi(64);
  function dt(K) {
    let it = tt.get(K);
    return (
      it ||
        ((it = s(() => {
          const Rt = z.get();
          for (const At of Rt) {
            const M = h.get(At);
            if (M && M.routeId === K) return M.get();
          }
        })),
        tt.set(K, it)),
      it
    );
  }
  const vt = {
    status: m,
    loadedAt: S,
    isLoading: g,
    isTransitioning: _,
    location: E,
    resolvedLocation: O,
    statusCode: w,
    redirect: A,
    matchesId: z,
    pendingIds: V,
    cachedIds: Q,
    matches: H,
    pendingMatches: I,
    cachedMatches: F,
    firstId: X,
    hasPending: J,
    matchRouteDeps: P,
    matchStores: h,
    pendingMatchStores: p,
    cachedMatchStores: y,
    __store: ut,
    getRouteMatchStore: dt,
    setMatches: Yt,
    setPending: Ot,
    setCached: j,
  };
  (Yt(a.matches), f?.(vt));
  function Yt(K) {
    rc(K, h, z, u, c);
  }
  function Ot(K) {
    rc(K, p, V, u, c);
  }
  function j(K) {
    rc(K, y, Q, u, c);
  }
  return vt;
}
function uc(a, i) {
  const u = [];
  for (const s of i) {
    const c = a.get(s);
    c && u.push(c.get());
  }
  return u;
}
function rc(a, i, u, s, c) {
  const f = a.map((p) => p.id),
    h = new Set(f);
  c(() => {
    for (const p of i.keys()) h.has(p) || i.delete(p);
    for (const p of a) {
      const y = i.get(p.id);
      if (!y) {
        const m = s(p);
        ((m.routeId = p.routeId), i.set(p.id, m));
        continue;
      }
      ((y.routeId = p.routeId), y.get() !== p && y.set(p));
    }
    D0(u.get(), f) || u.set(f);
  });
}
var gc = (a) => {
    if (!a.rendered) return ((a.rendered = !0), a.onReady?.());
  },
  rS = (a) =>
    a.stores.matchesId.get().some((i) => a.stores.matchStores.get(i)?.get()._forcePending),
  Or = (a, i) => !!(a.preload && !a.router.stores.matchStores.has(i)),
  ja = (a, i, u = !0) => {
    const s = { ...(a.router.options.context ?? {}) },
      c = u ? i : i - 1;
    for (let f = 0; f <= c; f++) {
      const h = a.matches[f];
      if (!h) continue;
      const p = a.router.getMatch(h.id);
      p && Object.assign(s, p.__routeContext, p.__beforeLoadContext);
    }
    return s;
  },
  Im = (a, i) => {
    if (!a.matches.length) return;
    const u = i.routeId,
      s = a.matches.findIndex((h) => h.routeId === a.router.routeTree.id),
      c = s >= 0 ? s : 0;
    let f = u
      ? a.matches.findIndex((h) => h.routeId === u)
      : (a.firstBadMatchIndex ?? a.matches.length - 1);
    f < 0 && (f = c);
    for (let h = f; h >= 0; h--) {
      const p = a.matches[h];
      if (a.router.looseRoutesById[p.routeId].options.notFoundComponent) return h;
    }
    return u ? f : c;
  },
  ea = (a, i, u) => {
    if (!(!_e(u) && !ne(u)))
      throw (
        (_e(u) && u.redirectHandled && !u.options.reloadDocument) ||
          (i &&
            (i._nonReactive.beforeLoadPromise?.resolve(),
            i._nonReactive.loaderPromise?.resolve(),
            (i._nonReactive.beforeLoadPromise = void 0),
            (i._nonReactive.loaderPromise = void 0),
            (i._nonReactive.error = u),
            a.updateMatch(i.id, (s) => ({
              ...s,
              status: _e(u)
                ? "redirected"
                : ne(u)
                  ? "notFound"
                  : s.status === "pending"
                    ? "success"
                    : s.status,
              context: ja(a, i.index),
              isFetching: !1,
              error: u,
            })),
            ne(u) && !u.routeId && (u.routeId = i.routeId),
            i._nonReactive.loadPromise?.resolve()),
          _e(u) &&
            ((a.rendered = !0),
            (u.options._fromLocation = a.location),
            (u.redirectHandled = !0),
            (u = a.router.resolveRedirect(u)))),
        u
      );
  },
  Gp = (a, i) => {
    const u = a.router.getMatch(i);
    return !!(!u || u._nonReactive.dehydrated);
  },
  Wm = (a, i, u) => {
    const s = ja(a, u);
    a.updateMatch(i, (c) => ({ ...c, context: s }));
  },
  Ui = (a, i, u, s) => {
    const { id: c, routeId: f } = a.matches[i],
      h = a.router.looseRoutesById[f];
    if (u instanceof Promise) throw u;
    ((u.routerCode = s), (a.firstBadMatchIndex ??= i), ea(a, a.router.getMatch(c), u));
    try {
      h.options.onError?.(u);
    } catch (p) {
      ((u = p), ea(a, a.router.getMatch(c), u));
    }
    (a.updateMatch(
      c,
      (p) => (
        p._nonReactive.beforeLoadPromise?.resolve(),
        (p._nonReactive.beforeLoadPromise = void 0),
        p._nonReactive.loadPromise?.resolve(),
        {
          ...p,
          error: u,
          status: "error",
          isFetching: !1,
          updatedAt: Date.now(),
          abortController: new AbortController(),
        }
      ),
    ),
      !a.preload && !_e(u) && !ne(u) && (a.serialError ??= u));
  },
  Vp = (a, i, u, s) => {
    if (s._nonReactive.pendingTimeout !== void 0) return;
    const c = u.options.pendingMs ?? a.router.options.defaultPendingMs;
    if (
      a.onReady &&
      !Or(a, i) &&
      (u.options.loader || u.options.beforeLoad || Qp(u)) &&
      typeof c == "number" &&
      c !== 1 / 0 &&
      (u.options.pendingComponent ?? a.router.options?.defaultPendingComponent)
    ) {
      const f = setTimeout(() => {
        gc(a);
      }, c);
      s._nonReactive.pendingTimeout = f;
    }
  },
  sS = (a, i, u) => {
    const s = a.router.getMatch(i);
    if (!s._nonReactive.beforeLoadPromise && !s._nonReactive.loaderPromise) return;
    Vp(a, i, u, s);
    const c = () => {
      const f = a.router.getMatch(i);
      f.preload && (f.status === "redirected" || f.status === "notFound") && ea(a, f, f.error);
    };
    return s._nonReactive.beforeLoadPromise ? s._nonReactive.beforeLoadPromise.then(c) : c();
  },
  oS = (a, i, u, s) => {
    const c = a.router.getMatch(i);
    let f = c._nonReactive.loadPromise;
    c._nonReactive.loadPromise = Ba(() => {
      (f?.resolve(), (f = void 0));
    });
    const { paramsError: h, searchError: p } = c;
    (h && Ui(a, u, h, "PARSE_PARAMS"), p && Ui(a, u, p, "VALIDATE_SEARCH"), Vp(a, i, s, c));
    const y = new AbortController();
    let m = !1;
    const S = () => {
        m ||
          ((m = !0),
          a.updateMatch(i, (H) => ({
            ...H,
            isFetching: "beforeLoad",
            fetchCount: H.fetchCount + 1,
            abortController: y,
          })));
      },
      g = () => {
        (c._nonReactive.beforeLoadPromise?.resolve(),
          (c._nonReactive.beforeLoadPromise = void 0),
          a.updateMatch(i, (H) => ({ ...H, isFetching: !1 })));
      };
    if (!s.options.beforeLoad) {
      a.router.batch(() => {
        (S(), g());
      });
      return;
    }
    c._nonReactive.beforeLoadPromise = Ba();
    const _ = { ...ja(a, u, !1), ...c.__routeContext },
      { search: E, params: O, cause: w } = c,
      A = Or(a, i),
      z = {
        search: E,
        abortController: y,
        params: O,
        preload: A,
        context: _,
        location: a.location,
        navigate: (H) => a.router.navigate({ ...H, _fromLocation: a.location }),
        buildLocation: a.router.buildLocation,
        cause: A ? "preload" : w,
        matches: a.matches,
        routeId: s.id,
        ...a.router.options.additionalContext,
      },
      V = (H) => {
        if (H === void 0) {
          a.router.batch(() => {
            (S(), g());
          });
          return;
        }
        ((_e(H) || ne(H)) && (S(), Ui(a, u, H, "BEFORE_LOAD")),
          a.router.batch(() => {
            (S(), a.updateMatch(i, (I) => ({ ...I, __beforeLoadContext: H })), g());
          }));
      };
    let Q;
    try {
      if (((Q = s.options.beforeLoad(z)), Yi(Q)))
        return (
          S(),
          Q.catch((H) => {
            Ui(a, u, H, "BEFORE_LOAD");
          }).then(V)
        );
    } catch (H) {
      (S(), Ui(a, u, H, "BEFORE_LOAD"));
    }
    V(Q);
  },
  cS = (a, i) => {
    const { id: u, routeId: s } = a.matches[i],
      c = a.router.looseRoutesById[s],
      f = () => p(),
      h = () => oS(a, u, i, c),
      p = () => {
        if (Gp(a, u)) return;
        const y = sS(a, u, c);
        return Yi(y) ? y.then(h) : h();
      };
    return f();
  },
  fS = (a, i, u) => {
    const s = a.router.getMatch(i);
    if (!s || (!u.options.head && !u.options.scripts && !u.options.headers)) return;
    const c = {
      ssr: a.router.options.ssr,
      matches: a.matches,
      match: s,
      params: s.params,
      loaderData: s.loaderData,
    };
    return Promise.all([u.options.head?.(c), u.options.scripts?.(c), u.options.headers?.(c)]).then(
      ([f, h, p]) => ({
        meta: f?.meta,
        links: f?.links,
        headScripts: f?.scripts,
        headers: p,
        scripts: h,
        styles: f?.styles,
      }),
    );
  },
  Xp = (a, i, u, s, c) => {
    const f = i[s - 1],
      { params: h, loaderDeps: p, abortController: y, cause: m } = a.router.getMatch(u),
      S = ja(a, s),
      g = Or(a, u);
    return {
      params: h,
      deps: p,
      preload: !!g,
      parentMatchPromise: f,
      abortController: y,
      context: S,
      location: a.location,
      navigate: (_) => a.router.navigate({ ..._, _fromLocation: a.location }),
      cause: g ? "preload" : m,
      route: c,
      ...a.router.options.additionalContext,
    };
  },
  tp = async (a, i, u, s, c) => {
    try {
      const f = a.router.getMatch(u);
      try {
        (!(Lp ?? a.router.isServer) || f.ssr === !0) && Vi(c);
        const h = c.options.loader,
          p = typeof h == "function" ? h : h?.handler,
          y = p?.(Xp(a, i, u, s, c)),
          m = !!p && Yi(y);
        if (
          ((m ||
            c._lazyPromise ||
            c._componentsPromise ||
            c.options.head ||
            c.options.scripts ||
            c.options.headers ||
            f._nonReactive.minPendingPromise) &&
            a.updateMatch(u, (g) => ({ ...g, isFetching: "loader" })),
          p)
        ) {
          const g = m ? await y : y;
          (ea(a, a.router.getMatch(u), g),
            g !== void 0 && a.updateMatch(u, (_) => ({ ..._, loaderData: g })));
        }
        c._lazyPromise && (await c._lazyPromise);
        const S = f._nonReactive.minPendingPromise;
        (S && (await S),
          c._componentsPromise && (await c._componentsPromise),
          a.updateMatch(u, (g) => ({
            ...g,
            error: void 0,
            context: ja(a, s),
            status: "success",
            isFetching: !1,
            updatedAt: Date.now(),
          })));
      } catch (h) {
        let p = h;
        if (p?.name === "AbortError") {
          if (f.abortController.signal.aborted) {
            (f._nonReactive.loaderPromise?.resolve(), (f._nonReactive.loaderPromise = void 0));
            return;
          }
          a.updateMatch(u, (m) => ({
            ...m,
            status: m.status === "pending" ? "success" : m.status,
            isFetching: !1,
            context: ja(a, s),
          }));
          return;
        }
        const y = f._nonReactive.minPendingPromise;
        (y && (await y),
          ne(h) && (await c.options.notFoundComponent?.preload?.()),
          ea(a, a.router.getMatch(u), h));
        try {
          c.options.onError?.(h);
        } catch (m) {
          ((p = m), ea(a, a.router.getMatch(u), m));
        }
        (!_e(p) && !ne(p) && (await Vi(c, ["errorComponent"])),
          a.updateMatch(u, (m) => ({
            ...m,
            error: p,
            context: ja(a, s),
            status: "error",
            isFetching: !1,
          })));
      }
    } catch (f) {
      const h = a.router.getMatch(u);
      (h && (h._nonReactive.loaderPromise = void 0), ea(a, h, f));
    }
  },
  dS = async (a, i, u) => {
    async function s(E, O, w, A, z) {
      const V = Date.now() - O.updatedAt,
        Q = E
          ? (z.options.preloadStaleTime ?? a.router.options.defaultPreloadStaleTime ?? 3e4)
          : (z.options.staleTime ?? a.router.options.defaultStaleTime ?? 0),
        H = z.options.shouldReload,
        I = typeof H == "function" ? H(Xp(a, i, c, u, z)) : H,
        { status: F, invalid: X } = A,
        J = V >= Q && (!!a.forceStaleReload || A.cause === "enter" || (w !== void 0 && w !== A.id));
      ((h = F === "success" && (X || (I ?? J))),
        (E && z.options.preload === !1) ||
          (h && !a.sync && S
            ? ((p = !0),
              (async () => {
                try {
                  await tp(a, i, c, u, z);
                  const P = a.router.getMatch(c);
                  (P._nonReactive.loaderPromise?.resolve(),
                    P._nonReactive.loadPromise?.resolve(),
                    (P._nonReactive.loaderPromise = void 0),
                    (P._nonReactive.loadPromise = void 0));
                } catch (P) {
                  _e(P) && (await a.router.navigate(P.options));
                }
              })())
            : F !== "success" || h
              ? await tp(a, i, c, u, z)
              : Wm(a, c, u)));
    }
    const { id: c, routeId: f } = a.matches[u];
    let h = !1,
      p = !1;
    const y = a.router.looseRoutesById[f],
      m = y.options.loader,
      S =
        ((typeof m == "function" ? void 0 : m?.staleReloadMode) ??
          a.router.options.defaultStaleReloadMode) !== "blocking";
    if (Gp(a, c)) {
      if (!a.router.getMatch(c)) return a.matches[u];
      Wm(a, c, u);
    } else {
      const E = a.router.getMatch(c),
        O = a.router.stores.matchesId.get()[u],
        w =
          ((O && a.router.stores.matchStores.get(O)) || null)?.routeId === f
            ? O
            : a.router.stores.matches.get().find((z) => z.routeId === f)?.id,
        A = Or(a, c);
      if (E._nonReactive.loaderPromise) {
        if (E.status === "success" && !a.sync && !E.preload && S) return E;
        await E._nonReactive.loaderPromise;
        const z = a.router.getMatch(c),
          V = z._nonReactive.error || z.error;
        (V && ea(a, z, V), z.status === "pending" && (await s(A, E, w, z, y)));
      } else {
        const z = A && !a.router.stores.matchStores.has(c),
          V = a.router.getMatch(c);
        ((V._nonReactive.loaderPromise = Ba()),
          z !== V.preload && a.updateMatch(c, (Q) => ({ ...Q, preload: z })),
          await s(A, E, w, V, y));
      }
    }
    const g = a.router.getMatch(c);
    (p ||
      (g._nonReactive.loaderPromise?.resolve(),
      g._nonReactive.loadPromise?.resolve(),
      (g._nonReactive.loadPromise = void 0)),
      clearTimeout(g._nonReactive.pendingTimeout),
      (g._nonReactive.pendingTimeout = void 0),
      p || (g._nonReactive.loaderPromise = void 0),
      (g._nonReactive.dehydrated = void 0));
    const _ = p ? g.isFetching : !1;
    return _ !== g.isFetching || g.invalid !== !1
      ? (a.updateMatch(c, (E) => ({ ...E, isFetching: _, invalid: !1 })), a.router.getMatch(c))
      : g;
  };
async function ep(a) {
  const i = a,
    u = [];
  rS(i.router) && gc(i);
  let s;
  for (let _ = 0; _ < i.matches.length; _++) {
    try {
      const E = cS(i, _);
      Yi(E) && (await E);
    } catch (E) {
      if (_e(E)) throw E;
      if (ne(E)) s = E;
      else if (!i.preload) throw E;
      break;
    }
    if (i.serialError || i.firstBadMatchIndex != null) break;
  }
  const c = i.firstBadMatchIndex ?? i.matches.length,
    f = s && !i.preload ? Im(i, s) : void 0,
    h = s && i.preload ? 0 : f !== void 0 ? Math.min(f + 1, c) : c;
  let p, y;
  for (let _ = 0; _ < h; _++) u.push(dS(i, u, _));
  try {
    await Promise.all(u);
  } catch {
    const _ = await Promise.allSettled(u);
    for (const E of _) {
      if (E.status !== "rejected") continue;
      const O = E.reason;
      if (_e(O)) throw O;
      ne(O) ? (p ??= O) : (y ??= O);
    }
    if (y !== void 0) throw y;
  }
  const m = p ?? (s && !i.preload ? s : void 0);
  let S = i.firstBadMatchIndex !== void 0 ? i.firstBadMatchIndex : i.matches.length - 1;
  if (!m && s && i.preload) return i.matches;
  if (m) {
    const _ = Im(i, m);
    _ === void 0 && Ee();
    const E = i.matches[_],
      O = i.router.looseRoutesById[E.routeId],
      w = i.router.options?.defaultNotFoundComponent;
    (!O.options.notFoundComponent && w && (O.options.notFoundComponent = w),
      (m.routeId = E.routeId));
    const A = E.routeId === i.router.routeTree.id;
    (i.updateMatch(E.id, (z) => ({
      ...z,
      ...(A
        ? { status: "success", globalNotFound: !0, error: void 0 }
        : { status: "notFound", error: m }),
      isFetching: !1,
    })),
      (S = _),
      await Vi(O, ["notFoundComponent"]));
  } else if (!i.preload) {
    const _ = i.matches[0];
    _.globalNotFound ||
      (i.router.getMatch(_.id)?.globalNotFound &&
        i.updateMatch(_.id, (E) => ({ ...E, globalNotFound: !1, error: void 0 })));
  }
  if (i.serialError && i.firstBadMatchIndex !== void 0) {
    const _ = i.router.looseRoutesById[i.matches[i.firstBadMatchIndex].routeId];
    await Vi(_, ["errorComponent"]);
  }
  for (let _ = 0; _ <= S; _++) {
    const { id: E, routeId: O } = i.matches[_],
      w = i.router.looseRoutesById[O];
    try {
      const A = fS(i, E, w);
      if (A) {
        const z = await A;
        i.updateMatch(E, (V) => ({ ...V, ...z }));
      }
    } catch (A) {
      console.error(`Error executing head for route ${O}:`, A);
    }
  }
  const g = gc(i);
  if ((Yi(g) && (await g), m)) throw m;
  if (i.serialError && !i.preload && !i.onReady) throw i.serialError;
  return i.matches;
}
function np(a, i) {
  const u = i.map((s) => a.options[s]?.preload?.()).filter(Boolean);
  if (u.length !== 0) return Promise.all(u);
}
function Vi(a, i = yr) {
  !a._lazyLoaded &&
    a._lazyPromise === void 0 &&
    (a.lazyFn
      ? (a._lazyPromise = a.lazyFn().then((s) => {
          const { id: c, ...f } = s.options;
          (Object.assign(a.options, f), (a._lazyLoaded = !0), (a._lazyPromise = void 0));
        }))
      : (a._lazyLoaded = !0));
  const u = () =>
    a._componentsLoaded
      ? void 0
      : i === yr
        ? (() => {
            if (a._componentsPromise === void 0) {
              const s = np(a, yr);
              s
                ? (a._componentsPromise = s.then(() => {
                    ((a._componentsLoaded = !0), (a._componentsPromise = void 0));
                  }))
                : (a._componentsLoaded = !0);
            }
            return a._componentsPromise;
          })()
        : np(a, i);
  return a._lazyPromise ? a._lazyPromise.then(u) : u();
}
function Qp(a) {
  for (const i of yr) if (a.options[i]?.preload) return !0;
  return !1;
}
var yr = ["component", "errorComponent", "pendingComponent", "notFoundComponent"],
  aa = "__TSR_index",
  ap = "popstate",
  lp = "beforeunload";
function hS(a) {
  let i = a.getLocation();
  const u = new Set(),
    s = (h) => {
      ((i = a.getLocation()), u.forEach((p) => p({ location: i, action: h })));
    },
    c = (h) => {
      (a.notifyOnIndexChange ?? !0) ? s(h) : (i = a.getLocation());
    },
    f = async ({ task: h, navigateOpts: p, ...y }) => {
      if (p?.ignoreBlocker ?? !1) {
        h();
        return;
      }
      const m = a.getBlockers?.() ?? [],
        S = y.type === "PUSH" || y.type === "REPLACE";
      if (typeof document < "u" && m.length && S)
        for (const g of m) {
          const _ = Er(y.path, y.state);
          if (await g.blockerFn({ currentLocation: i, nextLocation: _, action: y.type })) {
            a.onBlocked?.();
            return;
          }
        }
      h();
    };
  return {
    get location() {
      return i;
    },
    get length() {
      return a.getLength();
    },
    subscribers: u,
    subscribe: (h) => (
      u.add(h),
      () => {
        u.delete(h);
      }
    ),
    push: (h, p, y) => {
      const m = i.state[aa];
      ((p = ip(m + 1, p)),
        f({
          task: () => {
            (a.pushState(h, p), s({ type: "PUSH" }));
          },
          navigateOpts: y,
          type: "PUSH",
          path: h,
          state: p,
        }));
    },
    replace: (h, p, y) => {
      const m = i.state[aa];
      ((p = ip(m, p)),
        f({
          task: () => {
            (a.replaceState(h, p), s({ type: "REPLACE" }));
          },
          navigateOpts: y,
          type: "REPLACE",
          path: h,
          state: p,
        }));
    },
    go: (h, p) => {
      f({
        task: () => {
          (a.go(h), c({ type: "GO", index: h }));
        },
        navigateOpts: p,
        type: "GO",
      });
    },
    back: (h) => {
      f({
        task: () => {
          (a.back(h?.ignoreBlocker ?? !1), c({ type: "BACK" }));
        },
        navigateOpts: h,
        type: "BACK",
      });
    },
    forward: (h) => {
      f({
        task: () => {
          (a.forward(h?.ignoreBlocker ?? !1), c({ type: "FORWARD" }));
        },
        navigateOpts: h,
        type: "FORWARD",
      });
    },
    canGoBack: () => i.state[aa] !== 0,
    createHref: (h) => a.createHref(h),
    block: (h) => {
      if (!a.setBlockers) return () => {};
      const p = a.getBlockers?.() ?? [];
      return (
        a.setBlockers([...p, h]),
        () => {
          const y = a.getBlockers?.() ?? [];
          a.setBlockers?.(y.filter((m) => m !== h));
        }
      );
    },
    flush: () => a.flush?.(),
    destroy: () => a.destroy?.(),
    notify: s,
  };
}
function ip(a, i) {
  i || (i = {});
  const u = Mc();
  return { ...i, key: u, __TSR_key: u, [aa]: a };
}
function mS(a) {
  const i = typeof document < "u" ? window : void 0,
    u = i.history.pushState,
    s = i.history.replaceState;
  let c = [];
  const f = () => c,
    h = (J) => (c = J),
    p = (J) => J,
    y = () => Er(`${i.location.pathname}${i.location.search}${i.location.hash}`, i.history.state);
  if (!i.history.state?.__TSR_key && !i.history.state?.key) {
    const J = Mc();
    i.history.replaceState({ [aa]: 0, key: J, __TSR_key: J }, "");
  }
  let m = y(),
    S,
    g = !1,
    _ = !1,
    E = !1,
    O = !1;
  const w = () => m;
  let A, z;
  const V = () => {
      A &&
        ((X._ignoreSubscribers = !0),
        (A.isPush ? i.history.pushState : i.history.replaceState)(A.state, "", A.href),
        (X._ignoreSubscribers = !1),
        (A = void 0),
        (z = void 0),
        (S = void 0));
    },
    Q = (J, P, ut) => {
      const tt = p(P);
      (z || (S = m),
        (m = Er(P, ut)),
        (A = { href: tt, state: ut, isPush: A?.isPush || J === "push" }),
        z || (z = Promise.resolve().then(() => V())));
    },
    H = (J) => {
      ((m = y()), X.notify({ type: J }));
    },
    I = async () => {
      if (_) {
        _ = !1;
        return;
      }
      const J = y(),
        P = J.state[aa] - m.state[aa],
        ut = P === 1,
        tt = P === -1,
        dt = (!ut && !tt) || g;
      g = !1;
      const vt = dt ? "GO" : tt ? "BACK" : "FORWARD",
        Yt = dt ? { type: "GO", index: P } : { type: tt ? "BACK" : "FORWARD" };
      if (E) E = !1;
      else {
        const Ot = f();
        if (typeof document < "u" && Ot.length) {
          for (const j of Ot)
            if (await j.blockerFn({ currentLocation: m, nextLocation: J, action: vt })) {
              ((_ = !0), i.history.go(1), X.notify(Yt));
              return;
            }
        }
      }
      ((m = y()), X.notify(Yt));
    },
    F = (J) => {
      if (O) {
        O = !1;
        return;
      }
      let P = !1;
      const ut = f();
      if (typeof document < "u" && ut.length)
        for (const tt of ut) {
          const dt = tt.enableBeforeUnload ?? !0;
          if (dt === !0) {
            P = !0;
            break;
          }
          if (typeof dt == "function" && dt() === !0) {
            P = !0;
            break;
          }
        }
      if (P) return (J.preventDefault(), (J.returnValue = ""));
    },
    X = hS({
      getLocation: w,
      getLength: () => i.history.length,
      pushState: (J, P) => Q("push", J, P),
      replaceState: (J, P) => Q("replace", J, P),
      back: (J) => (J && (E = !0), (O = !0), i.history.back()),
      forward: (J) => {
        (J && (E = !0), (O = !0), i.history.forward());
      },
      go: (J) => {
        ((g = !0), i.history.go(J));
      },
      createHref: (J) => p(J),
      flush: V,
      destroy: () => {
        ((i.history.pushState = u),
          (i.history.replaceState = s),
          i.removeEventListener(lp, F, { capture: !0 }),
          i.removeEventListener(ap, I));
      },
      onBlocked: () => {
        S && m !== S && (m = S);
      },
      getBlockers: f,
      setBlockers: h,
      notifyOnIndexChange: !1,
    });
  return (
    i.addEventListener(lp, F, { capture: !0 }),
    i.addEventListener(ap, I),
    (i.history.pushState = function (...J) {
      const P = u.apply(i.history, J);
      return (X._ignoreSubscribers || H("PUSH"), P);
    }),
    (i.history.replaceState = function (...J) {
      const P = s.apply(i.history, J);
      return (X._ignoreSubscribers || H("REPLACE"), P);
    }),
    X
  );
}
function pS(a) {
  let i = a.replace(/[\x00-\x1f\x7f]/g, "");
  return (i.startsWith("//") && (i = "/" + i.replace(/^\/+/, "")), i);
}
function Er(a, i) {
  const u = pS(a),
    s = u.indexOf("#"),
    c = u.indexOf("?"),
    f = Mc();
  return {
    href: u,
    pathname: u.substring(0, s > 0 ? (c > 0 ? Math.min(s, c) : s) : c > 0 ? c : u.length),
    hash: s > -1 ? u.substring(s) : "",
    search: c > -1 ? u.slice(c, s === -1 ? void 0 : s) : "",
    state: i || { [aa]: 0, key: f, __TSR_key: f },
  };
}
function Mc() {
  return (Math.random() + 1).toString(36).substring(7);
}
function yS(a) {
  return a instanceof Error ? { name: a.name, message: a.message } : { data: a };
}
function zl(a, i) {
  const u = i,
    s = a;
  return {
    fromLocation: u,
    toLocation: s,
    pathChanged: u?.pathname !== s.pathname,
    hrefChanged: u?.href !== s.href,
    hashChanged: u?.hash !== s.hash,
  };
}
var vS = class {
    constructor(a, i) {
      ((this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
        (this.resetNextScroll = !0),
        (this.shouldViewTransition = void 0),
        (this.isViewTransitionTypesSupported = void 0),
        (this.subscribers = new Set()),
        (this.isScrollRestoring = !1),
        (this.isScrollRestorationSetup = !1),
        (this.startTransition = (u) => u()),
        (this.update = (u) => {
          const s = this.options,
            c = this.basepath ?? s?.basepath ?? "/",
            f = this.basepath === void 0,
            h = s?.rewrite;
          if (
            ((this.options = { ...s, ...u }),
            (this.isServer = this.options.isServer ?? typeof document > "u"),
            (this.protocolAllowlist = new Set(this.options.protocolAllowlist)),
            this.options.pathParamsAllowedCharacters &&
              (this.pathParamsDecoder = Z0(this.options.pathParamsAllowedCharacters)),
            (!this.history || (this.options.history && this.options.history !== this.history)) &&
              (this.options.history
                ? (this.history = this.options.history)
                : (this.history = mS())),
            (this.origin = this.options.origin),
            this.origin ||
              (window?.origin && window.origin !== "null"
                ? (this.origin = window.origin)
                : (this.origin = "http://localhost")),
            this.history && this.updateLatestLocation(),
            this.options.routeTree !== this.routeTree)
          ) {
            this.routeTree = this.options.routeTree;
            let S;
            ((this.resolvePathCache = Gi(1e3)), (S = this.buildRouteTree()), this.setRoutes(S));
          }
          if (!this.stores && this.latestLocation) {
            const S = this.getStoreConfig(this);
            ((this.batch = S.batch), (this.stores = uS(SS(this.latestLocation), S)), $0(this));
          }
          let p = !1;
          const y = this.options.basepath ?? "/",
            m = this.options.rewrite;
          if (f || c !== y || h !== m) {
            this.basepath = y;
            const S = [],
              g = Bp(y);
            (g && g !== "/" && S.push(iS({ basepath: y })),
              m && S.push(m),
              (this.rewrite = S.length === 0 ? void 0 : S.length === 1 ? S[0] : lS(S)),
              this.history && this.updateLatestLocation(),
              (p = !0));
          }
          (p && this.stores && this.stores.location.set(this.latestLocation),
            typeof window < "u" &&
              "CSS" in window &&
              typeof window.CSS?.supports == "function" &&
              (this.isViewTransitionTypesSupported = window.CSS.supports(
                "selector(:active-view-transition-type(a)",
              )));
        }),
        (this.updateLatestLocation = () => {
          this.latestLocation = this.parseLocation(this.history.location, this.latestLocation);
        }),
        (this.buildRouteTree = () => {
          const u = q0(this.routeTree, this.options.caseSensitive, (s, c) => {
            s.init({ originalIndex: c });
          });
          return (this.options.routeMasks && U0(this.options.routeMasks, u.processedTree), u);
        }),
        (this.subscribe = (u, s) => {
          const c = { eventType: u, fn: s };
          return (
            this.subscribers.add(c),
            () => {
              this.subscribers.delete(c);
            }
          );
        }),
        (this.emit = (u) => {
          this.subscribers.forEach((s) => {
            s.eventType === u.type && s.fn(u);
          });
        }),
        (this.parseLocation = (u, s) => {
          const c = ({ pathname: y, search: m, hash: S, href: g, state: _ }) => {
              if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(y)) {
                const z = this.options.parseSearch(m),
                  V = this.options.stringifySearch(z);
                return {
                  href: y + V + S,
                  publicHref: y + V + S,
                  pathname: wi(y).path,
                  external: !1,
                  searchStr: V,
                  search: Ca(s?.search, z),
                  hash: wi(S.slice(1)).path,
                  state: wa(s?.state, _),
                };
              }
              const E = new URL(g, this.origin),
                O = vc(this.rewrite, E),
                w = this.options.parseSearch(O.search),
                A = this.options.stringifySearch(w);
              return (
                (O.search = A),
                {
                  href: O.href.replace(O.origin, ""),
                  publicHref: g,
                  pathname: wi(O.pathname).path,
                  external: !!this.rewrite && O.origin !== this.origin,
                  searchStr: A,
                  search: Ca(s?.search, w),
                  hash: wi(O.hash.slice(1)).path,
                  state: wa(s?.state, _),
                }
              );
            },
            f = c(u),
            { __tempLocation: h, __tempKey: p } = f.state;
          if (h && (!p || p === this.tempLocationKey)) {
            const y = c(h);
            return (
              (y.state.key = f.state.key),
              (y.state.__TSR_key = f.state.__TSR_key),
              delete y.state.__tempLocation,
              { ...y, maskedLocation: f }
            );
          }
          return f;
        }),
        (this.resolvePathWithBase = (u, s) =>
          Q0({
            base: u,
            to: xc(s),
            trailingSlash: this.options.trailingSlash,
            cache: this.resolvePathCache,
          })),
        (this.matchRoutes = (u, s, c) =>
          typeof u == "string"
            ? this.matchRoutesInternal({ pathname: u, search: s }, c)
            : this.matchRoutesInternal(u, s)),
        (this.getMatchedRoutes = (u) =>
          bS({ pathname: u, routesById: this.routesById, processedTree: this.processedTree })),
        (this.cancelMatch = (u) => {
          const s = this.getMatch(u);
          s &&
            (s.abortController.abort(),
            clearTimeout(s._nonReactive.pendingTimeout),
            (s._nonReactive.pendingTimeout = void 0));
        }),
        (this.cancelMatches = () => {
          (this.stores.pendingIds.get().forEach((u) => {
            this.cancelMatch(u);
          }),
            this.stores.matchesId.get().forEach((u) => {
              if (this.stores.pendingMatchStores.has(u)) return;
              const s = this.stores.matchStores.get(u)?.get();
              s && (s.status === "pending" || s.isFetching === "loader") && this.cancelMatch(u);
            }));
        }),
        (this.buildLocation = (u) => {
          const s = (f = {}) => {
              const h = f._fromLocation || this.pendingBuiltLocation || this.latestLocation,
                p = this.matchRoutesLightweight(h);
              f.from;
              const y = f.unsafeRelative === "path" ? h.pathname : (f.from ?? p.fullPath),
                m = this.resolvePathWithBase(y, "."),
                S = p.search,
                g = Object.assign(Object.create(null), p.params),
                _ = f.to
                  ? this.resolvePathWithBase(m, `${f.to}`)
                  : this.resolvePathWithBase(m, "."),
                E =
                  f.params === !1 || f.params === null
                    ? Object.create(null)
                    : (f.params ?? !0) === !0
                      ? g
                      : Object.assign(g, ta(f.params, g)),
                O = this.getMatchedRoutes(_);
              let w = O.matchedRoutes;
              if (
                ((!O.foundRoute || (O.foundRoute.path !== "/" && O.routeParams["**"])) &&
                  this.options.notFoundRoute &&
                  (w = [...w, this.options.notFoundRoute]),
                Object.keys(E).length > 0)
              )
                for (const ut of w) {
                  const tt = ut.options.params?.stringify ?? ut.options.stringifyParams;
                  if (tt)
                    try {
                      Object.assign(E, tt(E));
                    } catch {}
                }
              const A = u.leaveParams
                ? _
                : wi(
                    km({
                      path: _,
                      params: E,
                      decoder: this.pathParamsDecoder,
                      server: this.isServer,
                    }).interpolatedPath,
                  ).path;
              let z = S;
              if (u._includeValidateSearch && this.options.search?.strict) {
                const ut = {};
                (w.forEach((tt) => {
                  if (tt.options.validateSearch)
                    try {
                      Object.assign(ut, vr(tt.options.validateSearch, { ...ut, ...z }));
                    } catch {}
                }),
                  (z = ut));
              }
              ((z = _S({
                search: z,
                dest: f,
                destRoutes: w,
                _includeValidateSearch: u._includeValidateSearch,
              })),
                (z = Ca(S, z)));
              const V = this.options.stringifySearch(z),
                Q = f.hash === !0 ? h.hash : f.hash ? ta(f.hash, h.hash) : void 0,
                H = Q ? `#${Q}` : "";
              let I = f.state === !0 ? h.state : f.state ? ta(f.state, h.state) : {};
              I = wa(h.state, I);
              const F = `${A}${V}${H}`;
              let X,
                J,
                P = !1;
              if (this.rewrite) {
                const ut = new URL(F, this.origin),
                  tt = Yp(this.rewrite, ut);
                ((X = ut.href.replace(ut.origin, "")),
                  tt.origin !== this.origin
                    ? ((J = tt.href), (P = !0))
                    : (J = tt.pathname + tt.search + tt.hash));
              } else ((X = w0(F)), (J = X));
              return {
                publicHref: J,
                href: X,
                pathname: A,
                search: z,
                searchStr: V,
                state: I,
                hash: Q ?? "",
                external: P,
                unmaskOnReload: f.unmaskOnReload,
              };
            },
            c = (f = {}, h) => {
              const p = s(f);
              let y = h ? s(h) : void 0;
              if (!y) {
                const m = Object.create(null);
                if (this.options.routeMasks) {
                  const S = N0(p.pathname, this.processedTree);
                  if (S) {
                    Object.assign(m, S.rawParams);
                    const { from: g, params: _, ...E } = S.route,
                      O =
                        _ === !1 || _ === null
                          ? Object.create(null)
                          : (_ ?? !0) === !0
                            ? m
                            : Object.assign(m, ta(_, m));
                    ((h = { from: u.from, ...E, params: O }), (y = s(h)));
                  }
                }
              }
              return (y && (p.maskedLocation = y), p);
            };
          return u.mask ? c(u, { from: u.from, ...u.mask }) : c(u);
        }),
        (this.commitLocation = async ({ viewTransition: u, ignoreBlocker: s, ...c }) => {
          const f = () => {
              const y = ["key", "__TSR_key", "__TSR_index", "__hashScrollIntoViewOptions"];
              y.forEach((S) => {
                c.state[S] = this.latestLocation.state[S];
              });
              const m = be(c.state, this.latestLocation.state);
              return (
                y.forEach((S) => {
                  delete c.state[S];
                }),
                m
              );
            },
            h = na(this.latestLocation.href) === na(c.href);
          let p = this.commitLocationPromise;
          if (
            ((this.commitLocationPromise = Ba(() => {
              (p?.resolve(), (p = void 0));
            })),
            h && f())
          )
            this.load();
          else {
            let { maskedLocation: y, hashScrollIntoView: m, ...S } = c;
            (y &&
              ((S = {
                ...y,
                state: {
                  ...y.state,
                  __tempKey: void 0,
                  __tempLocation: {
                    ...S,
                    search: S.searchStr,
                    state: {
                      ...S.state,
                      __tempKey: void 0,
                      __tempLocation: void 0,
                      __TSR_key: void 0,
                      key: void 0,
                    },
                  },
                },
              }),
              (S.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
                (S.state.__tempKey = this.tempLocationKey)),
              (S.state.__hashScrollIntoViewOptions =
                m ?? this.options.defaultHashScrollIntoView ?? !0),
              (this.shouldViewTransition = u),
              this.history[c.replace ? "replace" : "push"](S.publicHref, S.state, {
                ignoreBlocker: s,
              }));
          }
          return (
            (this.resetNextScroll = c.resetScroll ?? !0),
            this.history.subscribers.size || this.load(),
            this.commitLocationPromise
          );
        }),
        (this.buildAndCommitLocation = ({
          replace: u,
          resetScroll: s,
          hashScrollIntoView: c,
          viewTransition: f,
          ignoreBlocker: h,
          href: p,
          ...y
        } = {}) => {
          if (p) {
            const g = this.history.location.state.__TSR_index,
              _ = Er(p, { __TSR_index: u ? g : g + 1 }),
              E = new URL(_.pathname, this.origin);
            ((y.to = vc(this.rewrite, E).pathname),
              (y.search = this.options.parseSearch(_.search)),
              (y.hash = _.hash.slice(1)));
          }
          const m = this.buildLocation({ ...y, _includeValidateSearch: !0 });
          this.pendingBuiltLocation = m;
          const S = this.commitLocation({
            ...m,
            viewTransition: f,
            replace: u,
            resetScroll: s,
            hashScrollIntoView: c,
            ignoreBlocker: h,
          });
          return (
            Promise.resolve().then(() => {
              this.pendingBuiltLocation === m && (this.pendingBuiltLocation = void 0);
            }),
            S
          );
        }),
        (this.navigate = async ({ to: u, reloadDocument: s, href: c, publicHref: f, ...h }) => {
          let p = !1;
          if (c)
            try {
              (new URL(`${c}`), (p = !0));
            } catch {}
          if ((p && !s && (s = !0), s)) {
            if (u !== void 0 || !c) {
              const m = this.buildLocation({ to: u, ...h });
              ((c = c ?? m.publicHref), (f = f ?? m.publicHref));
            }
            const y = !p && f ? f : c;
            if (br(y, this.protocolAllowlist)) return Promise.resolve();
            if (!h.ignoreBlocker) {
              const m = this.history.getBlockers?.() ?? [];
              for (const S of m)
                if (
                  S?.blockerFn &&
                  (await S.blockerFn({
                    currentLocation: this.latestLocation,
                    nextLocation: this.latestLocation,
                    action: "PUSH",
                  }))
                )
                  return Promise.resolve();
            }
            return (
              h.replace ? window.location.replace(y) : (window.location.href = y),
              Promise.resolve()
            );
          }
          return this.buildAndCommitLocation({ ...h, href: c, to: u, _isNavigate: !0 });
        }),
        (this.beforeLoad = () => {
          (this.cancelMatches(), this.updateLatestLocation());
          const u = this.matchRoutes(this.latestLocation),
            s = this.stores.cachedMatches.get().filter((c) => !u.some((f) => f.id === c.id));
          this.batch(() => {
            (this.stores.status.set("pending"),
              this.stores.statusCode.set(200),
              this.stores.isLoading.set(!0),
              this.stores.location.set(this.latestLocation),
              this.stores.setPending(u),
              this.stores.setCached(s));
          });
        }),
        (this.load = async (u) => {
          let s, c, f;
          const h = this.stores.resolvedLocation.get() ?? this.stores.location.get();
          for (
            f = new Promise((y) => {
              this.startTransition(async () => {
                try {
                  this.beforeLoad();
                  const m = this.latestLocation,
                    S = zl(m, this.stores.resolvedLocation.get());
                  (this.stores.redirect.get() || this.emit({ type: "onBeforeNavigate", ...S }),
                    this.emit({ type: "onBeforeLoad", ...S }),
                    await ep({
                      router: this,
                      sync: u?.sync,
                      forceStaleReload: h.href === m.href,
                      matches: this.stores.pendingMatches.get(),
                      location: m,
                      updateMatch: this.updateMatch,
                      onReady: async () => {
                        this.startTransition(() => {
                          this.startViewTransition(async () => {
                            let g = null,
                              _ = null,
                              E = null,
                              O = null;
                            this.batch(() => {
                              const w = this.stores.pendingMatches.get(),
                                A = w.length,
                                z = this.stores.matches.get();
                              g = A
                                ? z.filter((H) => !this.stores.pendingMatchStores.has(H.id))
                                : null;
                              const V = new Set();
                              for (const H of this.stores.pendingMatchStores.values())
                                H.routeId && V.add(H.routeId);
                              const Q = new Set();
                              for (const H of this.stores.matchStores.values())
                                H.routeId && Q.add(H.routeId);
                              ((_ = A ? z.filter((H) => !V.has(H.routeId)) : null),
                                (E = A ? w.filter((H) => !Q.has(H.routeId)) : null),
                                (O = A ? w.filter((H) => Q.has(H.routeId)) : z),
                                this.stores.isLoading.set(!1),
                                this.stores.loadedAt.set(Date.now()),
                                A &&
                                  (this.stores.setMatches(w),
                                  this.stores.setPending([]),
                                  this.stores.setCached([
                                    ...this.stores.cachedMatches.get(),
                                    ...g.filter(
                                      (H) =>
                                        H.status !== "error" &&
                                        H.status !== "notFound" &&
                                        H.status !== "redirected",
                                    ),
                                  ]),
                                  this.clearExpiredCache()));
                            });
                            for (const [w, A] of [
                              [_, "onLeave"],
                              [E, "onEnter"],
                              [O, "onStay"],
                            ])
                              if (w)
                                for (const z of w) this.looseRoutesById[z.routeId].options[A]?.(z);
                          });
                        });
                      },
                    }));
                } catch (m) {
                  _e(m)
                    ? ((s = m), this.navigate({ ...s.options, replace: !0, ignoreBlocker: !0 }))
                    : ne(m) && (c = m);
                  const S = s
                    ? s.status
                    : c
                      ? 404
                      : this.stores.matches.get().some((g) => g.status === "error")
                        ? 500
                        : 200;
                  this.batch(() => {
                    (this.stores.statusCode.set(S), this.stores.redirect.set(s));
                  });
                }
                (this.latestLoadPromise === f &&
                  (this.commitLocationPromise?.resolve(),
                  (this.latestLoadPromise = void 0),
                  (this.commitLocationPromise = void 0)),
                  y());
              });
            }),
              this.latestLoadPromise = f,
              await f;
            this.latestLoadPromise && f !== this.latestLoadPromise;
          )
            await this.latestLoadPromise;
          let p;
          (this.hasNotFoundMatch()
            ? (p = 404)
            : this.stores.matches.get().some((y) => y.status === "error") && (p = 500),
            p !== void 0 && this.stores.statusCode.set(p));
        }),
        (this.startViewTransition = (u) => {
          const s = this.shouldViewTransition ?? this.options.defaultViewTransition;
          if (
            ((this.shouldViewTransition = void 0),
            s &&
              typeof document < "u" &&
              "startViewTransition" in document &&
              typeof document.startViewTransition == "function")
          ) {
            let c;
            if (typeof s == "object" && this.isViewTransitionTypesSupported) {
              const f = this.latestLocation,
                h = this.stores.resolvedLocation.get(),
                p = typeof s.types == "function" ? s.types(zl(f, h)) : s.types;
              if (p === !1) {
                u();
                return;
              }
              c = { update: u, types: p };
            } else c = u;
            document.startViewTransition(c);
          } else u();
        }),
        (this.updateMatch = (u, s) => {
          this.startTransition(() => {
            const c = this.stores.pendingMatchStores.get(u);
            if (c) {
              c.set(s);
              return;
            }
            const f = this.stores.matchStores.get(u);
            if (f) {
              f.set(s);
              return;
            }
            const h = this.stores.cachedMatchStores.get(u);
            if (h) {
              const p = s(h.get());
              p.status === "redirected"
                ? this.stores.cachedMatchStores.delete(u) &&
                  this.stores.cachedIds.set((y) => y.filter((m) => m !== u))
                : h.set(p);
            }
          });
        }),
        (this.getMatch = (u) =>
          this.stores.cachedMatchStores.get(u)?.get() ??
          this.stores.pendingMatchStores.get(u)?.get() ??
          this.stores.matchStores.get(u)?.get()),
        (this.invalidate = (u) => {
          const s = (c) =>
            (u?.filter?.(c) ?? !0)
              ? {
                  ...c,
                  invalid: !0,
                  ...(u?.forcePending || c.status === "error" || c.status === "notFound"
                    ? { status: "pending", error: void 0 }
                    : void 0),
                }
              : c;
          return (
            this.batch(() => {
              (this.stores.setMatches(this.stores.matches.get().map(s)),
                this.stores.setCached(this.stores.cachedMatches.get().map(s)),
                this.stores.setPending(this.stores.pendingMatches.get().map(s)));
            }),
            (this.shouldViewTransition = !1),
            this.load({ sync: u?.sync })
          );
        }),
        (this.getParsedLocationHref = (u) => u.publicHref || "/"),
        (this.resolveRedirect = (u) => {
          const s = u.headers.get("Location");
          if (!u.options.href || u.options._builtLocation) {
            const c = u.options._builtLocation ?? this.buildLocation(u.options),
              f = this.getParsedLocationHref(c);
            ((u.options.href = f), u.headers.set("Location", f));
          } else if (s)
            try {
              const c = new URL(s);
              if (this.origin && c.origin === this.origin) {
                const f = c.pathname + c.search + c.hash;
                ((u.options.href = f), u.headers.set("Location", f));
              }
            } catch {}
          if (
            u.options.href &&
            !u.options._builtLocation &&
            br(u.options.href, this.protocolAllowlist)
          )
            throw new Error("Redirect blocked: unsafe protocol");
          return (u.headers.get("Location") || u.headers.set("Location", u.options.href), u);
        }),
        (this.clearCache = (u) => {
          const s = u?.filter;
          s !== void 0
            ? this.stores.setCached(this.stores.cachedMatches.get().filter((c) => !s(c)))
            : this.stores.setCached([]);
        }),
        (this.clearExpiredCache = () => {
          const u = Date.now(),
            s = (c) => {
              const f = this.looseRoutesById[c.routeId];
              if (!f.options.loader) return !0;
              const h =
                (c.preload
                  ? (f.options.preloadGcTime ?? this.options.defaultPreloadGcTime)
                  : (f.options.gcTime ?? this.options.defaultGcTime)) ?? 300 * 1e3;
              return c.status === "error" ? !0 : u - c.updatedAt >= h;
            };
          this.clearCache({ filter: s });
        }),
        (this.loadRouteChunk = Vi),
        (this.preloadRoute = async (u) => {
          const s = u._builtLocation ?? this.buildLocation(u);
          let c = this.matchRoutes(s, { throwOnError: !0, preload: !0, dest: u });
          const f = new Set([...this.stores.matchesId.get(), ...this.stores.pendingIds.get()]),
            h = new Set([...f, ...this.stores.cachedIds.get()]),
            p = c.filter((y) => !h.has(y.id));
          if (p.length) {
            const y = this.stores.cachedMatches.get();
            this.stores.setCached([...y, ...p]);
          }
          try {
            return (
              (c = await ep({
                router: this,
                matches: c,
                location: s,
                preload: !0,
                updateMatch: (y, m) => {
                  f.has(y) ? (c = c.map((S) => (S.id === y ? m(S) : S))) : this.updateMatch(y, m);
                },
              })),
              c
            );
          } catch (y) {
            if (_e(y))
              return y.options.reloadDocument
                ? void 0
                : await this.preloadRoute({ ...y.options, _fromLocation: s });
            ne(y) || console.error(y);
            return;
          }
        }),
        (this.matchRoute = (u, s) => {
          const c = {
              ...u,
              to: u.to ? this.resolvePathWithBase(u.from || "", u.to) : void 0,
              params: u.params || {},
              leaveParams: !0,
            },
            f = this.buildLocation(c);
          if (s?.pending && this.stores.status.get() !== "pending") return !1;
          const h = (s?.pending === void 0 ? !this.stores.isLoading.get() : s.pending)
              ? this.latestLocation
              : this.stores.resolvedLocation.get() || this.stores.location.get(),
            p = j0(
              f.pathname,
              s?.caseSensitive ?? !1,
              s?.fuzzy ?? !1,
              h.pathname,
              this.processedTree,
            );
          return !p || (u.params && !be(p.rawParams, u.params, { partial: !0 }))
            ? !1
            : (s?.includeSearch ?? !0)
              ? be(h.search, f.search, { partial: !0 })
                ? p.rawParams
                : !1
              : p.rawParams;
        }),
        (this.hasNotFoundMatch = () =>
          this.stores.matches.get().some((u) => u.status === "notFound" || u.globalNotFound)),
        (this.getStoreConfig = i),
        this.update({
          defaultPreloadDelay: 50,
          defaultPendingMs: 1e3,
          defaultPendingMinMs: 500,
          context: void 0,
          ...a,
          caseSensitive: a.caseSensitive ?? !1,
          notFoundMode: a.notFoundMode ?? "fuzzy",
          stringifySearch: a.stringifySearch ?? tS,
          parseSearch: a.parseSearch ?? W0,
          protocolAllowlist: a.protocolAllowlist ?? M0,
        }),
        typeof document < "u" && (self.__TSR_ROUTER__ = this));
    }
    isShell() {
      return !!this.options.isShell;
    }
    isPrerendering() {
      return !!this.options.isPrerendering;
    }
    get state() {
      return this.stores.__store.get();
    }
    setRoutes({ routesById: a, routesByPath: i, processedTree: u }) {
      ((this.routesById = a), (this.routesByPath = i), (this.processedTree = u));
      const s = this.options.notFoundRoute;
      s && (s.init({ originalIndex: 99999999999 }), (this.routesById[s.id] = s));
    }
    get looseRoutesById() {
      return this.routesById;
    }
    getParentContext(a) {
      return a?.id
        ? (a.context ?? this.options.context ?? void 0)
        : (this.options.context ?? void 0);
    }
    matchRoutesInternal(a, i) {
      const u = this.getMatchedRoutes(a.pathname),
        { foundRoute: s, routeParams: c, parsedParams: f } = u;
      let { matchedRoutes: h } = u,
        p = !1;
      (s ? s.path !== "/" && c["**"] : na(a.pathname)) &&
        (this.options.notFoundRoute ? (h = [...h, this.options.notFoundRoute]) : (p = !0));
      const y = p ? RS(this.options.notFoundMode, h) : void 0,
        m = new Array(h.length),
        S = new Map();
      for (const g of this.stores.matchStores.values()) g.routeId && S.set(g.routeId, g.get());
      for (let g = 0; g < h.length; g++) {
        const _ = h[g],
          E = m[g - 1];
        let O, w, A;
        {
          const vt = E?.search ?? a.search,
            Yt = E?._strictSearch ?? void 0;
          try {
            const Ot = vr(_.options.validateSearch, { ...vt }) ?? void 0;
            ((O = { ...vt, ...Ot }), (w = { ...Yt, ...Ot }), (A = void 0));
          } catch (Ot) {
            let j = Ot;
            if ((Ot instanceof Rr || (j = new Rr(Ot.message, { cause: Ot })), i?.throwOnError))
              throw j;
            ((O = vt), (w = {}), (A = j));
          }
        }
        const z = _.options.loaderDeps?.({ search: O }) ?? "",
          V = z ? JSON.stringify(z) : "",
          { interpolatedPath: Q, usedParams: H } = km({
            path: _.fullPath,
            params: c,
            decoder: this.pathParamsDecoder,
            server: this.isServer,
          }),
          I = _.id + Q + V,
          F = this.getMatch(I),
          X = S.get(_.id),
          J = F?._strictParams ?? H;
        let P;
        if (!F)
          try {
            up(_, H, f, J);
          } catch (vt) {
            if (
              (ne(vt) || _e(vt) ? (P = vt) : (P = new gS(vt.message, { cause: vt })),
              i?.throwOnError)
            )
              throw P;
          }
        Object.assign(c, J);
        const ut = X ? "stay" : "enter";
        let tt;
        if (F)
          tt = {
            ...F,
            cause: ut,
            params: X?.params ?? c,
            _strictParams: J,
            search: Ca(X ? X.search : F.search, O),
            _strictSearch: w,
          };
        else {
          const vt =
            _.options.loader || _.options.beforeLoad || _.lazyFn || Qp(_) ? "pending" : "success";
          tt = {
            id: I,
            ssr: _.options.ssr,
            index: g,
            routeId: _.id,
            params: X?.params ?? c,
            _strictParams: J,
            pathname: Q,
            updatedAt: Date.now(),
            search: X ? Ca(X.search, O) : O,
            _strictSearch: w,
            searchError: void 0,
            status: vt,
            isFetching: !1,
            error: void 0,
            paramsError: P,
            __routeContext: void 0,
            _nonReactive: { loadPromise: Ba() },
            __beforeLoadContext: void 0,
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: ut,
            loaderDeps: X ? wa(X.loaderDeps, z) : z,
            invalid: !1,
            preload: !1,
            links: void 0,
            scripts: void 0,
            headScripts: void 0,
            meta: void 0,
            staticData: _.options.staticData || {},
            fullPath: _.fullPath,
          };
        }
        (i?.preload || (tt.globalNotFound = y === _.id), (tt.searchError = A));
        const dt = this.getParentContext(E);
        ((tt.context = { ...dt, ...tt.__routeContext, ...tt.__beforeLoadContext }), (m[g] = tt));
      }
      for (let g = 0; g < m.length; g++) {
        const _ = m[g],
          E = this.looseRoutesById[_.routeId],
          O = this.getMatch(_.id),
          w = S.get(_.routeId);
        if (((_.params = w ? Ca(w.params, c) : c), !O)) {
          const A = m[g - 1],
            z = this.getParentContext(A);
          if (E.options.context) {
            const V = {
              deps: _.loaderDeps,
              params: _.params,
              context: z ?? {},
              location: a,
              navigate: (Q) => this.navigate({ ...Q, _fromLocation: a }),
              buildLocation: this.buildLocation,
              cause: _.cause,
              abortController: _.abortController,
              preload: !!_.preload,
              matches: m,
              routeId: E.id,
            };
            _.__routeContext = E.options.context(V) ?? void 0;
          }
          _.context = { ...z, ..._.__routeContext, ..._.__beforeLoadContext };
        }
      }
      return m;
    }
    matchRoutesLightweight(a) {
      const {
          matchedRoutes: i,
          routeParams: u,
          parsedParams: s,
        } = this.getMatchedRoutes(a.pathname),
        c = qi(i),
        f = { ...a.search };
      for (const S of i)
        try {
          Object.assign(f, vr(S.options.validateSearch, f));
        } catch {}
      const h = qi(this.stores.matchesId.get()),
        p = h && this.stores.matchStores.get(h)?.get(),
        y = p && p.routeId === c.id && p.pathname === a.pathname;
      let m;
      if (y) m = p.params;
      else {
        const S = Object.assign(Object.create(null), u);
        for (const g of i)
          try {
            up(g, u, s ?? {}, S);
          } catch {}
        m = S;
      }
      return { matchedRoutes: i, fullPath: c.fullPath, search: f, params: m };
    }
  },
  Rr = class extends Error {},
  gS = class extends Error {};
function SS(a) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: "idle",
    resolvedLocation: void 0,
    location: a,
    matches: [],
    statusCode: 200,
  };
}
function vr(a, i) {
  if (a == null) return {};
  if ("~standard" in a) {
    const u = a["~standard"].validate(i);
    if (u instanceof Promise) throw new Rr("Async validation not supported");
    if (u.issues) throw new Rr(JSON.stringify(u.issues, void 0, 2), { cause: u });
    return u.value;
  }
  return "parse" in a ? a.parse(i) : typeof a == "function" ? a(i) : {};
}
function bS({ pathname: a, routesById: i, processedTree: u }) {
  const s = Object.create(null),
    c = na(a);
  let f, h;
  const p = B0(c, u, !0);
  return (
    p &&
      ((f = p.route),
      Object.assign(s, p.rawParams),
      (h = Object.assign(Object.create(null), p.parsedParams))),
    { matchedRoutes: p?.branch || [i.__root__], routeParams: s, foundRoute: f, parsedParams: h }
  );
}
function _S({ search: a, dest: i, destRoutes: u, _includeValidateSearch: s }) {
  return ES(u)(a, i, s ?? !1);
}
function ES(a) {
  const i = { dest: null, _includeValidateSearch: !1, middlewares: [] };
  for (const c of a) {
    if ("search" in c.options)
      c.options.search?.middlewares && i.middlewares.push(...c.options.search.middlewares);
    else if (c.options.preSearchFilters || c.options.postSearchFilters) {
      const f = ({ search: h, next: p }) => {
        let y = h;
        "preSearchFilters" in c.options &&
          c.options.preSearchFilters &&
          (y = c.options.preSearchFilters.reduce((S, g) => g(S), h));
        const m = p(y);
        return "postSearchFilters" in c.options && c.options.postSearchFilters
          ? c.options.postSearchFilters.reduce((S, g) => g(S), m)
          : m;
      };
      i.middlewares.push(f);
    }
    if (c.options.validateSearch) {
      const f = ({ search: h, next: p }) => {
        const y = p(h);
        if (!i._includeValidateSearch) return y;
        try {
          return { ...y, ...(vr(c.options.validateSearch, y) ?? void 0) };
        } catch {
          return y;
        }
      };
      i.middlewares.push(f);
    }
  }
  const u = ({ search: c }) => {
    const f = i.dest;
    return f.search ? (f.search === !0 ? c : ta(f.search, c)) : {};
  };
  i.middlewares.push(u);
  const s = (c, f, h) => {
    if (c >= h.length) return f;
    const p = h[c];
    return p({ search: f, next: (m) => s(c + 1, m, h) });
  };
  return function (f, h, p) {
    return ((i.dest = h), (i._includeValidateSearch = p), s(0, f, i.middlewares));
  };
}
function RS(a, i) {
  if (a !== "root")
    for (let u = i.length - 1; u >= 0; u--) {
      const s = i[u];
      if (s.children) return s.id;
    }
  return Na;
}
function up(a, i, u, s) {
  const c = a.options.params?.parse ?? a.options.parseParams;
  if (c)
    if (a.options.skipRouteOnParseError) for (const f in i) f in u && (s[f] = u[f]);
    else {
      const f = c(s);
      Object.assign(s, f);
    }
}
var We = Symbol.for("TSR_DEFERRED_PROMISE");
function TS(a, i) {
  const u = a;
  return (
    u[We] ||
      ((u[We] = { status: "pending" }),
      u
        .then((s) => {
          ((u[We].status = "success"), (u[We].data = s));
        })
        .catch((s) => {
          ((u[We].status = "error"), (u[We].error = { data: yS(s), __isServerError: !0 }));
        })),
    u
  );
}
var AS = "Error preloading route! ☝️";
function rp(a, i) {
  if (a) return typeof a == "string" ? a : a[i];
}
function xS(a) {
  return typeof a == "string" ? { href: a, crossOrigin: void 0 } : a;
}
var Zp = class {
    get to() {
      return this._to;
    }
    get id() {
      return this._id;
    }
    get path() {
      return this._path;
    }
    get fullPath() {
      return this._fullPath;
    }
    constructor(a) {
      if (
        ((this.init = (i) => {
          this.originalIndex = i.originalIndex;
          const u = this.options,
            s = !u?.path && !u?.id;
          ((this.parentRoute = this.options.getParentRoute?.()),
            s ? (this._path = Na) : this.parentRoute || Ee());
          let c = s ? Na : u?.path;
          c && c !== "/" && (c = jp(c));
          const f = u?.id || c;
          let h = s ? Na : pr([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, f]);
          (c === "__root__" && (c = "/"), h !== "__root__" && (h = pr(["/", h])));
          const p = h === "__root__" ? "/" : pr([this.parentRoute.fullPath, c]);
          ((this._path = c), (this._id = h), (this._fullPath = p), (this._to = na(p)));
        }),
        (this.addChildren = (i) => this._addFileChildren(i)),
        (this._addFileChildren = (i) => (
          Array.isArray(i) && (this.children = i),
          typeof i == "object" && i !== null && (this.children = Object.values(i)),
          this
        )),
        (this._addFileTypes = () => this),
        (this.updateLoader = (i) => (Object.assign(this.options, i), this)),
        (this.update = (i) => (Object.assign(this.options, i), this)),
        (this.lazy = (i) => ((this.lazyFn = i), this)),
        (this.redirect = (i) => qp({ from: this.fullPath, ...i })),
        (this.options = a || {}),
        (this.isRoot = !a?.getParentRoute),
        a?.id && a?.path)
      )
        throw new Error("Route cannot have both an 'id' and a 'path' option.");
    }
  },
  MS = class extends Zp {
    constructor(a) {
      super(a);
    }
  };
function OS(a) {
  if (typeof document < "u" && document.querySelector) {
    const i = a.stores.location.get(),
      u = i.state.__hashScrollIntoViewOptions ?? !0;
    if (u && i.hash !== "") {
      const s = document.getElementById(i.hash);
      s && s.scrollIntoView(u);
    }
  }
}
var zS = ((a) => (
    (a[(a.AggregateError = 1)] = "AggregateError"),
    (a[(a.ArrowFunction = 2)] = "ArrowFunction"),
    (a[(a.ErrorPrototypeStack = 4)] = "ErrorPrototypeStack"),
    (a[(a.ObjectAssign = 8)] = "ObjectAssign"),
    (a[(a.BigIntTypedArray = 16)] = "BigIntTypedArray"),
    (a[(a.RegExp = 32)] = "RegExp"),
    a
  ))(zS || {}),
  Rn = Symbol.asyncIterator,
  Kp = Symbol.hasInstance,
  Cl = Symbol.isConcatSpreadable,
  Tn = Symbol.iterator,
  Jp = Symbol.match,
  kp = Symbol.matchAll,
  Pp = Symbol.replace,
  Fp = Symbol.search,
  $p = Symbol.species,
  Ip = Symbol.split,
  Wp = Symbol.toPrimitive,
  wl = Symbol.toStringTag,
  ty = Symbol.unscopables,
  ey = {
    [Rn]: 0,
    [Kp]: 1,
    [Cl]: 2,
    [Tn]: 3,
    [Jp]: 4,
    [kp]: 5,
    [Pp]: 6,
    [Fp]: 7,
    [$p]: 8,
    [Ip]: 9,
    [Wp]: 10,
    [wl]: 11,
    [ty]: 12,
  },
  CS = {
    0: Rn,
    1: Kp,
    2: Cl,
    3: Tn,
    4: Jp,
    5: kp,
    6: Pp,
    7: Fp,
    8: $p,
    9: Ip,
    10: Wp,
    11: wl,
    12: ty,
  },
  b = void 0,
  wS = {
    2: !0,
    3: !1,
    1: b,
    0: null,
    4: -0,
    5: Number.POSITIVE_INFINITY,
    6: Number.NEGATIVE_INFINITY,
    7: Number.NaN,
  },
  DS = {
    0: "Error",
    1: "EvalError",
    2: "RangeError",
    3: "ReferenceError",
    4: "SyntaxError",
    5: "TypeError",
    6: "URIError",
  },
  LS = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError,
  };
function Et(a, i, u, s, c, f, h, p, y, m, S, g) {
  return { t: a, i, s: u, c: s, m: c, p: f, e: h, a: p, f: y, b: m, o: S, l: g };
}
function la(a) {
  return Et(2, b, a, b, b, b, b, b, b, b, b, b);
}
var ny = la(2),
  ay = la(3),
  US = la(1),
  NS = la(0),
  jS = la(4),
  BS = la(5),
  HS = la(6),
  qS = la(7);
function YS(a) {
  switch (a) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case `
`:
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return b;
  }
}
function ia(a) {
  let i = "",
    u = 0,
    s;
  for (let c = 0, f = a.length; c < f; c++)
    ((s = YS(a[c])), s && ((i += a.slice(u, c) + s), (u = c + 1)));
  return (u === 0 ? (i = a) : (i += a.slice(u)), i);
}
function GS(a) {
  switch (a) {
    case "\\\\":
      return "\\";
    case '\\"':
      return '"';
    case "\\n":
      return `
`;
    case "\\r":
      return "\r";
    case "\\b":
      return "\b";
    case "\\t":
      return "	";
    case "\\f":
      return "\f";
    case "\\x3C":
      return "<";
    case "\\u2028":
      return "\u2028";
    case "\\u2029":
      return "\u2029";
    default:
      return a;
  }
}
function ua(a) {
  return a.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, GS);
}
var hr = "__SEROVAL_REFS__",
  ly = new Map(),
  Ol = new Map();
function iy(a) {
  return ly.has(a);
}
function VS(a) {
  return Ol.has(a);
}
function XS(a) {
  if (iy(a)) return ly.get(a);
  throw new b1(a);
}
function QS(a) {
  if (VS(a)) return Ol.get(a);
  throw new _1(a);
}
typeof globalThis < "u"
  ? Object.defineProperty(globalThis, hr, {
      value: Ol,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof window < "u"
    ? Object.defineProperty(window, hr, {
        value: Ol,
        configurable: !0,
        writable: !1,
        enumerable: !1,
      })
    : typeof self < "u"
      ? Object.defineProperty(self, hr, {
          value: Ol,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        })
      : typeof global < "u" &&
        Object.defineProperty(global, hr, {
          value: Ol,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        });
function Oc(a) {
  return a instanceof EvalError
    ? 1
    : a instanceof RangeError
      ? 2
      : a instanceof ReferenceError
        ? 3
        : a instanceof SyntaxError
          ? 4
          : a instanceof TypeError
            ? 5
            : a instanceof URIError
              ? 6
              : 0;
}
function ZS(a) {
  let i = DS[Oc(a)];
  return a.name !== i
    ? { name: a.name }
    : a.constructor.name !== i
      ? { name: a.constructor.name }
      : {};
}
function uy(a, i) {
  let u = ZS(a),
    s = Object.getOwnPropertyNames(a);
  for (let c = 0, f = s.length, h; c < f; c++)
    ((h = s[c]),
      h !== "name" &&
        h !== "message" &&
        (h === "stack" ? i & 4 && ((u = u || {}), (u[h] = a[h])) : ((u = u || {}), (u[h] = a[h]))));
  return u;
}
function ry(a) {
  return Object.isFrozen(a) ? 3 : Object.isSealed(a) ? 2 : Object.isExtensible(a) ? 0 : 1;
}
function KS(a) {
  switch (a) {
    case Number.POSITIVE_INFINITY:
      return BS;
    case Number.NEGATIVE_INFINITY:
      return HS;
  }
  return a !== a ? qS : Object.is(a, -0) ? jS : Et(0, b, a, b, b, b, b, b, b, b, b, b);
}
function sy(a) {
  return Et(1, b, ia(a), b, b, b, b, b, b, b, b, b);
}
function JS(a) {
  return Et(3, b, "" + a, b, b, b, b, b, b, b, b, b);
}
function kS(a) {
  return Et(4, a, b, b, b, b, b, b, b, b, b, b);
}
function PS(a, i) {
  let u = i.valueOf();
  return Et(5, a, u !== u ? "" : i.toISOString(), b, b, b, b, b, b, b, b, b);
}
function FS(a, i) {
  return Et(6, a, b, ia(i.source), i.flags, b, b, b, b, b, b, b);
}
function $S(a, i) {
  return Et(17, a, ey[i], b, b, b, b, b, b, b, b, b);
}
function IS(a, i) {
  return Et(18, a, ia(XS(i)), b, b, b, b, b, b, b, b, b);
}
function WS(a, i, u) {
  return Et(25, a, u, ia(i), b, b, b, b, b, b, b, b);
}
function t1(a, i, u) {
  return Et(9, a, b, b, b, b, b, u, b, b, ry(i), b);
}
function e1(a, i) {
  return Et(21, a, b, b, b, b, b, b, i, b, b, b);
}
function n1(a, i, u) {
  return Et(15, a, b, i.constructor.name, b, b, b, b, u, i.byteOffset, b, i.length);
}
function a1(a, i, u) {
  return Et(16, a, b, i.constructor.name, b, b, b, b, u, i.byteOffset, b, i.byteLength);
}
function l1(a, i, u) {
  return Et(20, a, b, b, b, b, b, b, u, i.byteOffset, b, i.byteLength);
}
function i1(a, i, u) {
  return Et(13, a, Oc(i), b, ia(i.message), u, b, b, b, b, b, b);
}
function u1(a, i, u) {
  return Et(14, a, Oc(i), b, ia(i.message), u, b, b, b, b, b, b);
}
function r1(a, i) {
  return Et(7, a, b, b, b, b, b, i, b, b, b, b);
}
function s1(a, i) {
  return Et(28, b, b, b, b, b, b, [a, i], b, b, b, b);
}
function o1(a, i) {
  return Et(30, b, b, b, b, b, b, [a, i], b, b, b, b);
}
function c1(a, i, u) {
  return Et(31, a, b, b, b, b, b, u, i, b, b, b);
}
function f1(a, i) {
  return Et(32, a, b, b, b, b, b, b, i, b, b, b);
}
function d1(a, i) {
  return Et(33, a, b, b, b, b, b, b, i, b, b, b);
}
function h1(a, i) {
  return Et(34, a, b, b, b, b, b, b, i, b, b, b);
}
function m1(a, i, u, s) {
  return Et(35, a, u, b, b, b, b, i, b, b, b, s);
}
var p1 = { parsing: 1, serialization: 2, deserialization: 3 };
function y1(a) {
  return `Seroval Error (step: ${p1[a]})`;
}
var v1 = (a, i) => y1(a),
  oy = class extends Error {
    constructor(a, i) {
      (super(v1(a)), (this.cause = i));
    }
  },
  sp = class extends oy {
    constructor(a) {
      super("parsing", a);
    }
  },
  g1 = class extends oy {
    constructor(a) {
      super("deserialization", a);
    }
  };
function An(a) {
  return `Seroval Error (specific: ${a})`;
}
var zr = class extends Error {
    constructor(i) {
      (super(An(1)), (this.value = i));
    }
  },
  cy = class extends Error {
    constructor(i) {
      super(An(2));
    }
  },
  S1 = class extends Error {
    constructor(a) {
      super(An(3));
    }
  },
  Zi = class extends Error {
    constructor(a) {
      super(An(4));
    }
  },
  b1 = class extends Error {
    constructor(a) {
      (super(An(5)), (this.value = a));
    }
  },
  _1 = class extends Error {
    constructor(a) {
      super(An(6));
    }
  },
  E1 = class extends Error {
    constructor(a) {
      super(An(7));
    }
  },
  ra = class extends Error {
    constructor(a) {
      super(An(8));
    }
  },
  R1 = class extends Error {
    constructor(i) {
      super(An(9));
    }
  },
  T1 = class {
    constructor(a, i) {
      ((this.value = a), (this.replacement = i));
    }
  },
  Cr = () => {
    let a = { p: 0, s: 0, f: 0 };
    return (
      (a.p = new Promise((i, u) => {
        ((a.s = i), (a.f = u));
      })),
      a
    );
  },
  A1 = (a, i) => {
    (a.s(i), (a.p.s = 1), (a.p.v = i));
  },
  x1 = (a, i) => {
    (a.f(i), (a.p.s = 2), (a.p.v = i));
  };
Cr.toString();
A1.toString();
x1.toString();
var M1 = () => {
    let a = [],
      i = [],
      u = !0,
      s = !1,
      c = 0,
      f = (y, m, S) => {
        for (S = 0; S < c; S++) i[S] && i[S][m](y);
      },
      h = (y, m, S, g) => {
        for (m = 0, S = a.length; m < S; m++)
          ((g = a[m]), !u && m === S - 1 ? y[s ? "return" : "throw"](g) : y.next(g));
      },
      p = (y, m) => (
        u && ((m = c++), (i[m] = y)),
        h(y),
        () => {
          u && ((i[m] = i[c]), (i[c--] = void 0));
        }
      );
    return {
      __SEROVAL_STREAM__: !0,
      on: (y) => p(y),
      next: (y) => {
        u && (a.push(y), f(y, "next"));
      },
      throw: (y) => {
        u && (a.push(y), f(y, "throw"), (u = !1), (s = !1), (i.length = 0));
      },
      return: (y) => {
        u && (a.push(y), f(y, "return"), (u = !1), (s = !0), (i.length = 0));
      },
    };
  },
  O1 = (a) => (i) => () => {
    let u = 0,
      s = {
        [a]: () => s,
        next: () => {
          if (u > i.d) return { done: !0, value: void 0 };
          let c = u++,
            f = i.v[c];
          if (c === i.t) throw f;
          return { done: c === i.d, value: f };
        },
      };
    return s;
  },
  z1 = (a, i) => (u) => () => {
    let s = 0,
      c = -1,
      f = !1,
      h = [],
      p = [],
      y = (S = 0, g = p.length) => {
        for (; S < g; S++) p[S].s({ done: !0, value: void 0 });
      };
    u.on({
      next: (S) => {
        let g = p.shift();
        (g && g.s({ done: !1, value: S }), h.push(S));
      },
      throw: (S) => {
        let g = p.shift();
        (g && g.f(S), y(), (c = h.length), (f = !0), h.push(S));
      },
      return: (S) => {
        let g = p.shift();
        (g && g.s({ done: !0, value: S }), y(), (c = h.length), h.push(S));
      },
    });
    let m = {
      [a]: () => m,
      next: () => {
        if (c === -1) {
          let _ = s++;
          if (_ >= h.length) {
            let E = i();
            return (p.push(E), E.p);
          }
          return { done: !1, value: h[_] };
        }
        if (s > c) return { done: !0, value: void 0 };
        let S = s++,
          g = h[S];
        if (S !== c) return { done: !1, value: g };
        if (f) throw g;
        return { done: !0, value: g };
      },
    };
    return m;
  },
  fy = (a) => {
    let i = atob(a),
      u = i.length,
      s = new Uint8Array(u);
    for (let c = 0; c < u; c++) s[c] = i.charCodeAt(c);
    return s.buffer;
  };
fy.toString();
function C1(a) {
  return "__SEROVAL_SEQUENCE__" in a;
}
function dy(a, i, u) {
  return { __SEROVAL_SEQUENCE__: !0, v: a, t: i, d: u };
}
function w1(a) {
  let i = [],
    u = -1,
    s = -1,
    c = a[Tn]();
  for (;;)
    try {
      let f = c.next();
      if ((i.push(f.value), f.done)) {
        s = i.length - 1;
        break;
      }
    } catch (f) {
      ((u = i.length), i.push(f));
    }
  return dy(i, u, s);
}
var D1 = O1(Tn);
function L1(a) {
  return D1(a);
}
var U1 = {},
  N1 = {},
  j1 = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} };
function wr(a) {
  return "__SEROVAL_STREAM__" in a;
}
function Ha() {
  return M1();
}
function B1(a) {
  let i = Ha(),
    u = a[Rn]();
  async function s() {
    try {
      let c = await u.next();
      c.done ? i.return(c.value) : (i.next(c.value), await s());
    } catch (c) {
      i.throw(c);
    }
  }
  return (s().catch(() => {}), i);
}
var H1 = z1(Rn, Cr);
function q1(a) {
  return H1(a);
}
async function Y1(a) {
  try {
    return [1, await a];
  } catch (i) {
    return [0, i];
  }
}
function G1(a, i) {
  return {
    plugins: i.plugins,
    mode: a,
    marked: new Set(),
    features: 63 ^ (i.disabledFeatures || 0),
    refs: i.refs || new Map(),
    depthLimit: i.depthLimit || 1e3,
  };
}
function gr(a, i) {
  a.marked.add(i);
}
function V1(a, i) {
  let u = a.refs.size;
  return (a.refs.set(i, u), u);
}
function Dr(a, i) {
  let u = a.refs.get(i);
  return u != null ? (gr(a, u), { type: 1, value: kS(u) }) : { type: 0, value: V1(a, i) };
}
function zc(a, i) {
  let u = Dr(a, i);
  return u.type === 1 ? u : iy(i) ? { type: 2, value: IS(u.value, i) } : u;
}
function Ua(a, i) {
  let u = zc(a, i);
  if (u.type !== 0) return u.value;
  if (i in ey) return $S(u.value, i);
  throw new zr(i);
}
function Lr(a, i) {
  let u = Dr(a, j1[i]);
  return u.type === 1 ? u.value : Et(26, u.value, i, b, b, b, b, b, b, b, b, b);
}
function X1(a) {
  let i = Dr(a, U1);
  return i.type === 1 ? i.value : Et(27, i.value, b, b, b, b, b, b, Ua(a, Tn), b, b, b);
}
function Q1(a) {
  let i = Dr(a, N1);
  return i.type === 1 ? i.value : Et(29, i.value, b, b, b, b, b, [Lr(a, 1), Ua(a, Rn)], b, b, b, b);
}
function Z1(a, i, u, s) {
  return Et(u ? 11 : 10, a, b, b, b, s, b, b, b, b, ry(i), b);
}
function K1(a, i, u, s) {
  return Et(8, i, b, b, b, b, { k: u, v: s }, b, Lr(a, 0), b, b, b);
}
function J1(a, i, u) {
  let s = new Uint8Array(u),
    c = "";
  for (let f = 0, h = s.length; f < h; f++) c += String.fromCharCode(s[f]);
  return Et(19, i, ia(btoa(c)), b, b, b, b, b, Lr(a, 5), b, b, b);
}
function k1(a, i) {
  return { base: G1(a, i), child: void 0 };
}
var P1 = class {
  constructor(a, i) {
    ((this._p = a), (this.depth = i));
  }
  parse(a) {
    return It(this._p, this.depth, a);
  }
};
async function F1(a, i, u) {
  let s = [];
  for (let c = 0, f = u.length; c < f; c++) c in u ? (s[c] = await It(a, i, u[c])) : (s[c] = 0);
  return s;
}
async function $1(a, i, u, s) {
  return t1(u, s, await F1(a, i, s));
}
async function Cc(a, i, u) {
  let s = Object.entries(u),
    c = [],
    f = [];
  for (let h = 0, p = s.length; h < p; h++) (c.push(ia(s[h][0])), f.push(await It(a, i, s[h][1])));
  return (
    Tn in u && (c.push(Ua(a.base, Tn)), f.push(s1(X1(a.base), await It(a, i, w1(u))))),
    Rn in u && (c.push(Ua(a.base, Rn)), f.push(o1(Q1(a.base), await It(a, i, B1(u))))),
    wl in u && (c.push(Ua(a.base, wl)), f.push(sy(u[wl]))),
    Cl in u && (c.push(Ua(a.base, Cl)), f.push(u[Cl] ? ny : ay)),
    { k: c, v: f }
  );
}
async function sc(a, i, u, s, c) {
  return Z1(u, s, c, await Cc(a, i, s));
}
async function I1(a, i, u, s) {
  return e1(u, await It(a, i, s.valueOf()));
}
async function W1(a, i, u, s) {
  return n1(u, s, await It(a, i, s.buffer));
}
async function tb(a, i, u, s) {
  return a1(u, s, await It(a, i, s.buffer));
}
async function eb(a, i, u, s) {
  return l1(u, s, await It(a, i, s.buffer));
}
async function op(a, i, u, s) {
  let c = uy(s, a.base.features);
  return i1(u, s, c ? await Cc(a, i, c) : b);
}
async function nb(a, i, u, s) {
  let c = uy(s, a.base.features);
  return u1(u, s, c ? await Cc(a, i, c) : b);
}
async function ab(a, i, u, s) {
  let c = [],
    f = [];
  for (let [h, p] of s.entries()) (c.push(await It(a, i, h)), f.push(await It(a, i, p)));
  return K1(a.base, u, c, f);
}
async function lb(a, i, u, s) {
  let c = [];
  for (let f of s.keys()) c.push(await It(a, i, f));
  return r1(u, c);
}
async function hy(a, i, u, s) {
  let c = a.base.plugins;
  if (c)
    for (let f = 0, h = c.length; f < h; f++) {
      let p = c[f];
      if (p.parse.async && p.test(s))
        return WS(u, p.tag, await p.parse.async(s, new P1(a, i), { id: u }));
    }
  return b;
}
async function ib(a, i, u, s) {
  let [c, f] = await Y1(s);
  return Et(12, u, c, b, b, b, b, b, await It(a, i, f), b, b, b);
}
function ub(a, i, u, s, c) {
  let f = [],
    h = u.on({
      next: (p) => {
        (gr(this.base, i),
          It(this, a, p).then(
            (y) => {
              f.push(f1(i, y));
            },
            (y) => {
              (c(y), h());
            },
          ));
      },
      throw: (p) => {
        (gr(this.base, i),
          It(this, a, p).then(
            (y) => {
              (f.push(d1(i, y)), s(f), h());
            },
            (y) => {
              (c(y), h());
            },
          ));
      },
      return: (p) => {
        (gr(this.base, i),
          It(this, a, p).then(
            (y) => {
              (f.push(h1(i, y)), s(f), h());
            },
            (y) => {
              (c(y), h());
            },
          ));
      },
    });
}
async function rb(a, i, u, s) {
  return c1(u, Lr(a.base, 4), await new Promise(ub.bind(a, i, u, s)));
}
async function sb(a, i, u, s) {
  let c = [];
  for (let f = 0, h = s.v.length; f < h; f++) c[f] = await It(a, i, s.v[f]);
  return m1(u, c, s.t, s.d);
}
async function ob(a, i, u, s) {
  if (Array.isArray(s)) return $1(a, i, u, s);
  if (wr(s)) return rb(a, i, u, s);
  if (C1(s)) return sb(a, i, u, s);
  let c = s.constructor;
  if (c === T1) return It(a, i, s.replacement);
  let f = await hy(a, i, u, s);
  if (f) return f;
  switch (c) {
    case Object:
      return sc(a, i, u, s, !1);
    case b:
      return sc(a, i, u, s, !0);
    case Date:
      return PS(u, s);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return op(a, i, u, s);
    case Number:
    case Boolean:
    case String:
    case BigInt:
      return I1(a, i, u, s);
    case ArrayBuffer:
      return J1(a.base, u, s);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
      return W1(a, i, u, s);
    case DataView:
      return eb(a, i, u, s);
    case Map:
      return ab(a, i, u, s);
    case Set:
      return lb(a, i, u, s);
  }
  if (c === Promise || s instanceof Promise) return ib(a, i, u, s);
  let h = a.base.features;
  if (h & 32 && c === RegExp) return FS(u, s);
  if (h & 16)
    switch (c) {
      case BigInt64Array:
      case BigUint64Array:
        return tb(a, i, u, s);
    }
  if (h & 1 && typeof AggregateError < "u" && (c === AggregateError || s instanceof AggregateError))
    return nb(a, i, u, s);
  if (s instanceof Error) return op(a, i, u, s);
  if (Tn in s || Rn in s) return sc(a, i, u, s, !!c);
  throw new zr(s);
}
async function cb(a, i, u) {
  let s = zc(a.base, u);
  if (s.type !== 0) return s.value;
  let c = await hy(a, i, s.value, u);
  if (c) return c;
  throw new zr(u);
}
async function It(a, i, u) {
  switch (typeof u) {
    case "boolean":
      return u ? ny : ay;
    case "undefined":
      return US;
    case "string":
      return sy(u);
    case "number":
      return KS(u);
    case "bigint":
      return JS(u);
    case "object": {
      if (u) {
        let s = zc(a.base, u);
        return s.type === 0 ? await ob(a, i + 1, s.value, u) : s.value;
      }
      return NS;
    }
    case "symbol":
      return Ua(a.base, u);
    case "function":
      return cb(a, i, u);
    default:
      throw new zr(u);
  }
}
async function fb(a, i) {
  try {
    return await It(a, 0, i);
  } catch (u) {
    throw u instanceof sp ? u : new sp(u);
  }
}
var db = ((a) => ((a[(a.Vanilla = 1)] = "Vanilla"), (a[(a.Cross = 2)] = "Cross"), a))(db || {});
function my(a, i) {
  for (let u = 0, s = i.length; u < s; u++) {
    let c = i[u];
    a.has(c) || (a.add(c), c.extends && my(a, c.extends));
  }
}
function py(a) {
  if (a) {
    let i = new Set();
    return (my(i, a), [...i]);
  }
}
function hb(a) {
  switch (a) {
    case "Int8Array":
      return Int8Array;
    case "Int16Array":
      return Int16Array;
    case "Int32Array":
      return Int32Array;
    case "Uint8Array":
      return Uint8Array;
    case "Uint16Array":
      return Uint16Array;
    case "Uint32Array":
      return Uint32Array;
    case "Uint8ClampedArray":
      return Uint8ClampedArray;
    case "Float32Array":
      return Float32Array;
    case "Float64Array":
      return Float64Array;
    case "BigInt64Array":
      return BigInt64Array;
    case "BigUint64Array":
      return BigUint64Array;
    default:
      throw new E1(a);
  }
}
var mb = 1e6,
  pb = 1e4,
  yb = 2e4;
function yy(a, i) {
  switch (i) {
    case 3:
      return Object.freeze(a);
    case 1:
      return Object.preventExtensions(a);
    case 2:
      return Object.seal(a);
    default:
      return a;
  }
}
var vb = 1e3;
function gb(a, i) {
  var u;
  return {
    mode: a,
    plugins: i.plugins,
    refs: i.refs || new Map(),
    features: (u = i.features) != null ? u : 63 ^ (i.disabledFeatures || 0),
    depthLimit: i.depthLimit || vb,
  };
}
function Sb(a) {
  return { mode: 2, base: gb(2, a), child: b };
}
var bb = class {
  constructor(a, i) {
    ((this._p = a), (this.depth = i));
  }
  deserialize(a) {
    return Ut(this._p, this.depth, a);
  }
};
function vy(a, i) {
  if (i < 0 || !Number.isFinite(i) || !Number.isInteger(i)) throw new ra({ t: 4, i });
  if (a.refs.has(i)) throw new Error("Conflicted ref id: " + i);
}
function _b(a, i, u) {
  return (vy(a.base, i), a.state.marked.has(i) && a.base.refs.set(i, u), u);
}
function Eb(a, i, u) {
  return (vy(a.base, i), a.base.refs.set(i, u), u);
}
function Wt(a, i, u) {
  return a.mode === 1 ? _b(a, i, u) : Eb(a, i, u);
}
function Sc(a, i, u) {
  if (Object.hasOwn(i, u)) return i[u];
  throw new ra(a);
}
function Rb(a, i) {
  return Wt(a, i.i, QS(ua(i.s)));
}
function Tb(a, i, u) {
  let s = u.a,
    c = s.length,
    f = Wt(a, u.i, new Array(c));
  for (let h = 0, p; h < c; h++) ((p = s[h]), p && (f[h] = Ut(a, i, p)));
  return (yy(f, u.o), f);
}
function Ab(a) {
  switch (a) {
    case "constructor":
    case "__proto__":
    case "prototype":
    case "__defineGetter__":
    case "__defineSetter__":
    case "__lookupGetter__":
    case "__lookupSetter__":
      return !1;
    default:
      return !0;
  }
}
function xb(a) {
  switch (a) {
    case Rn:
    case Cl:
    case wl:
    case Tn:
      return !0;
    default:
      return !1;
  }
}
function cp(a, i, u) {
  Ab(i)
    ? (a[i] = u)
    : Object.defineProperty(a, i, { value: u, configurable: !0, enumerable: !0, writable: !0 });
}
function Mb(a, i, u, s, c) {
  if (typeof s == "string") cp(u, ua(s), Ut(a, i, c));
  else {
    let f = Ut(a, i, s);
    switch (typeof f) {
      case "string":
        cp(u, f, Ut(a, i, c));
        break;
      case "symbol":
        xb(f) && (u[f] = Ut(a, i, c));
        break;
      default:
        throw new ra(s);
    }
  }
}
function gy(a, i, u, s) {
  let c = u.k;
  if (c.length > 0) for (let f = 0, h = u.v, p = c.length; f < p; f++) Mb(a, i, s, c[f], h[f]);
  return s;
}
function Ob(a, i, u) {
  let s = Wt(a, u.i, u.t === 10 ? {} : Object.create(null));
  return (gy(a, i, u.p, s), yy(s, u.o), s);
}
function zb(a, i) {
  return Wt(a, i.i, new Date(i.s));
}
function Cb(a, i) {
  if (a.base.features & 32) {
    let u = ua(i.c);
    if (u.length > yb) throw new ra(i);
    return Wt(a, i.i, new RegExp(u, i.m));
  }
  throw new cy(i);
}
function wb(a, i, u) {
  let s = Wt(a, u.i, new Set());
  for (let c = 0, f = u.a, h = f.length; c < h; c++) s.add(Ut(a, i, f[c]));
  return s;
}
function Db(a, i, u) {
  let s = Wt(a, u.i, new Map());
  for (let c = 0, f = u.e.k, h = u.e.v, p = f.length; c < p; c++)
    s.set(Ut(a, i, f[c]), Ut(a, i, h[c]));
  return s;
}
function Lb(a, i) {
  if (i.s.length > mb) throw new ra(i);
  return Wt(a, i.i, fy(ua(i.s)));
}
function Ub(a, i, u) {
  var s;
  let c = hb(u.c),
    f = Ut(a, i, u.f),
    h = (s = u.b) != null ? s : 0;
  if (h < 0 || h > f.byteLength) throw new ra(u);
  return Wt(a, u.i, new c(f, h, u.l));
}
function Nb(a, i, u) {
  var s;
  let c = Ut(a, i, u.f),
    f = (s = u.b) != null ? s : 0;
  if (f < 0 || f > c.byteLength) throw new ra(u);
  return Wt(a, u.i, new DataView(c, f, u.l));
}
function Sy(a, i, u, s) {
  if (u.p) {
    let c = gy(a, i, u.p, {});
    Object.defineProperties(s, Object.getOwnPropertyDescriptors(c));
  }
  return s;
}
function jb(a, i, u) {
  let s = Wt(a, u.i, new AggregateError([], ua(u.m)));
  return Sy(a, i, u, s);
}
function Bb(a, i, u) {
  let s = Sc(u, LS, u.s),
    c = Wt(a, u.i, new s(ua(u.m)));
  return Sy(a, i, u, c);
}
function Hb(a, i, u) {
  let s = Cr(),
    c = Wt(a, u.i, s.p),
    f = Ut(a, i, u.f);
  return (u.s ? s.s(f) : s.f(f), c);
}
function qb(a, i, u) {
  return Wt(a, u.i, Object(Ut(a, i, u.f)));
}
function Yb(a, i, u) {
  let s = a.base.plugins;
  if (s) {
    let c = ua(u.c);
    for (let f = 0, h = s.length; f < h; f++) {
      let p = s[f];
      if (p.tag === c) return Wt(a, u.i, p.deserialize(u.s, new bb(a, i), { id: u.i }));
    }
  }
  throw new S1(u.c);
}
function Gb(a, i) {
  return Wt(a, i.i, Wt(a, i.s, Cr()).p);
}
function Vb(a, i, u) {
  let s = a.base.refs.get(u.i);
  if (s) return (s.s(Ut(a, i, u.a[1])), b);
  throw new Zi("Promise");
}
function Xb(a, i, u) {
  let s = a.base.refs.get(u.i);
  if (s) return (s.f(Ut(a, i, u.a[1])), b);
  throw new Zi("Promise");
}
function Qb(a, i, u) {
  Ut(a, i, u.a[0]);
  let s = Ut(a, i, u.a[1]);
  return L1(s);
}
function Zb(a, i, u) {
  Ut(a, i, u.a[0]);
  let s = Ut(a, i, u.a[1]);
  return q1(s);
}
function Kb(a, i, u) {
  let s = Wt(a, u.i, Ha()),
    c = u.a,
    f = c.length;
  if (f) for (let h = 0; h < f; h++) Ut(a, i, c[h]);
  return s;
}
function Jb(a, i, u) {
  let s = a.base.refs.get(u.i);
  if (s && wr(s)) return (s.next(Ut(a, i, u.f)), b);
  throw new Zi("Stream");
}
function kb(a, i, u) {
  let s = a.base.refs.get(u.i);
  if (s && wr(s)) return (s.throw(Ut(a, i, u.f)), b);
  throw new Zi("Stream");
}
function Pb(a, i, u) {
  let s = a.base.refs.get(u.i);
  if (s && wr(s)) return (s.return(Ut(a, i, u.f)), b);
  throw new Zi("Stream");
}
function Fb(a, i, u) {
  return (Ut(a, i, u.f), b);
}
function $b(a, i, u) {
  return (Ut(a, i, u.a[1]), b);
}
function Ib(a, i, u) {
  let s = Wt(a, u.i, dy([], u.s, u.l));
  for (let c = 0, f = u.a.length; c < f; c++) s.v[c] = Ut(a, i, u.a[c]);
  return s;
}
function Ut(a, i, u) {
  if (i > a.base.depthLimit) throw new R1(a.base.depthLimit);
  switch (((i += 1), u.t)) {
    case 2:
      return Sc(u, wS, u.s);
    case 0:
      return Number(u.s);
    case 1:
      return ua(String(u.s));
    case 3:
      if (String(u.s).length > pb) throw new ra(u);
      return BigInt(u.s);
    case 4:
      return a.base.refs.get(u.i);
    case 18:
      return Rb(a, u);
    case 9:
      return Tb(a, i, u);
    case 10:
    case 11:
      return Ob(a, i, u);
    case 5:
      return zb(a, u);
    case 6:
      return Cb(a, u);
    case 7:
      return wb(a, i, u);
    case 8:
      return Db(a, i, u);
    case 19:
      return Lb(a, u);
    case 16:
    case 15:
      return Ub(a, i, u);
    case 20:
      return Nb(a, i, u);
    case 14:
      return jb(a, i, u);
    case 13:
      return Bb(a, i, u);
    case 12:
      return Hb(a, i, u);
    case 17:
      return Sc(u, CS, u.s);
    case 21:
      return qb(a, i, u);
    case 25:
      return Yb(a, i, u);
    case 22:
      return Gb(a, u);
    case 23:
      return Vb(a, i, u);
    case 24:
      return Xb(a, i, u);
    case 28:
      return Qb(a, i, u);
    case 30:
      return Zb(a, i, u);
    case 31:
      return Kb(a, i, u);
    case 32:
      return Jb(a, i, u);
    case 33:
      return kb(a, i, u);
    case 34:
      return Pb(a, i, u);
    case 27:
      return Fb(a, i, u);
    case 29:
      return $b(a, i, u);
    case 35:
      return Ib(a, i, u);
    default:
      throw new cy(u);
  }
}
function Wb(a, i) {
  try {
    return Ut(a, 0, i);
  } catch (u) {
    throw new g1(u);
  }
}
var t_ = () => T;
t_.toString();
function fp(a, i) {
  let u = py(i.plugins),
    s = Sb({
      plugins: u,
      refs: i.refs,
      features: i.features,
      disabledFeatures: i.disabledFeatures,
      depthLimit: i.depthLimit,
    });
  return Wb(s, a);
}
async function e_(a, i = {}) {
  let u = py(i.plugins),
    s = k1(1, { plugins: u, disabledFeatures: i.disabledFeatures });
  return { t: await fb(s, a), f: s.base.features, m: Array.from(s.base.marked) };
}
function n_(a) {
  return {
    tag: "$TSR/t/" + a.key,
    test: a.test,
    parse: {
      sync(i, u, s) {
        return { v: u.parse(a.toSerializable(i)) };
      },
      async async(i, u, s) {
        return { v: await u.parse(a.toSerializable(i)) };
      },
      stream(i, u, s) {
        return { v: u.parse(a.toSerializable(i)) };
      },
    },
    serialize: void 0,
    deserialize(i, u, s) {
      return a.fromSerializable(u.deserialize(i.v));
    },
  };
}
var a_ = class {
    constructor(a, i) {
      ((this.stream = a), (this.hint = i?.hint ?? "binary"));
    }
  },
  Tr = globalThis.Buffer,
  by = !!Tr && typeof Tr.from == "function";
function _y(a) {
  if (a.length === 0) return "";
  if (by) return Tr.from(a).toString("base64");
  const i = 32768,
    u = [];
  for (let s = 0; s < a.length; s += i) {
    const c = a.subarray(s, s + i);
    u.push(String.fromCharCode.apply(null, c));
  }
  return btoa(u.join(""));
}
function Ey(a) {
  if (a.length === 0) return new Uint8Array(0);
  if (by) {
    const s = Tr.from(a, "base64");
    return new Uint8Array(s.buffer, s.byteOffset, s.byteLength);
  }
  const i = atob(a),
    u = new Uint8Array(i.length);
  for (let s = 0; s < i.length; s++) u[s] = i.charCodeAt(s);
  return u;
}
var Ni = Object.create(null),
  ji = Object.create(null),
  l_ = (a) =>
    new ReadableStream({
      start(i) {
        a.on({
          next(u) {
            try {
              i.enqueue(Ey(u));
            } catch {}
          },
          throw(u) {
            i.error(u);
          },
          return() {
            try {
              i.close();
            } catch {}
          },
        });
      },
    }),
  i_ = new TextEncoder(),
  u_ = (a) =>
    new ReadableStream({
      start(i) {
        a.on({
          next(u) {
            try {
              typeof u == "string" ? i.enqueue(i_.encode(u)) : i.enqueue(Ey(u.$b64));
            } catch {}
          },
          throw(u) {
            i.error(u);
          },
          return() {
            try {
              i.close();
            } catch {}
          },
        });
      },
    }),
  r_ =
    "(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))",
  s_ =
    "(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})";
function dp(a) {
  const i = Ha(),
    u = a.getReader();
  return (
    (async () => {
      try {
        for (;;) {
          const { done: s, value: c } = await u.read();
          if (s) {
            i.return(void 0);
            break;
          }
          i.next(_y(c));
        }
      } catch (s) {
        i.throw(s);
      } finally {
        u.releaseLock();
      }
    })(),
    i
  );
}
function hp(a) {
  const i = Ha(),
    u = a.getReader(),
    s = new TextDecoder("utf-8", { fatal: !0 });
  return (
    (async () => {
      try {
        for (;;) {
          const { done: c, value: f } = await u.read();
          if (c) {
            try {
              const h = s.decode();
              h.length > 0 && i.next(h);
            } catch {}
            i.return(void 0);
            break;
          }
          try {
            const h = s.decode(f, { stream: !0 });
            h.length > 0 && i.next(h);
          } catch {
            i.next({ $b64: _y(f) });
          }
        }
      } catch (c) {
        i.throw(c);
      } finally {
        u.releaseLock();
      }
    })(),
    i
  );
}
var o_ = {
  tag: "tss/RawStream",
  extends: [
    {
      tag: "tss/RawStreamFactory",
      test(a) {
        return a === Ni;
      },
      parse: {
        sync(a, i, u) {
          return {};
        },
        async async(a, i, u) {
          return {};
        },
        stream(a, i, u) {
          return {};
        },
      },
      serialize(a, i, u) {
        return r_;
      },
      deserialize(a, i, u) {
        return Ni;
      },
    },
    {
      tag: "tss/RawStreamFactoryText",
      test(a) {
        return a === ji;
      },
      parse: {
        sync(a, i, u) {
          return {};
        },
        async async(a, i, u) {
          return {};
        },
        stream(a, i, u) {
          return {};
        },
      },
      serialize(a, i, u) {
        return s_;
      },
      deserialize(a, i, u) {
        return ji;
      },
    },
  ],
  test(a) {
    return a instanceof a_;
  },
  parse: {
    sync(a, i, u) {
      const s = a.hint === "text" ? ji : Ni;
      return { hint: i.parse(a.hint), factory: i.parse(s), stream: i.parse(Ha()) };
    },
    async async(a, i, u) {
      const s = a.hint === "text" ? ji : Ni,
        c = a.hint === "text" ? hp(a.stream) : dp(a.stream);
      return { hint: await i.parse(a.hint), factory: await i.parse(s), stream: await i.parse(c) };
    },
    stream(a, i, u) {
      const s = a.hint === "text" ? ji : Ni,
        c = a.hint === "text" ? hp(a.stream) : dp(a.stream);
      return { hint: i.parse(a.hint), factory: i.parse(s), stream: i.parse(c) };
    },
  },
  serialize(a, i, u) {
    return "(" + i.serialize(a.factory) + ")(" + i.serialize(a.stream) + ")";
  },
  deserialize(a, i, u) {
    const s = i.deserialize(a.stream);
    return i.deserialize(a.hint) === "text" ? u_(s) : l_(s);
  },
};
function c_(a) {
  return {
    tag: "tss/RawStream",
    test: () => !1,
    parse: {},
    serialize() {
      throw new Error(
        "RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.",
      );
    },
    deserialize(i, u, s) {
      return a(typeof u?.deserialize == "function" ? u.deserialize(i.streamId) : i.streamId);
    },
  };
}
var f_ = {
    tag: "$TSR/Error",
    test(a) {
      return a instanceof Error;
    },
    parse: {
      sync(a, i) {
        return { message: i.parse(a.message) };
      },
      async async(a, i) {
        return { message: await i.parse(a.message) };
      },
      stream(a, i) {
        return { message: i.parse(a.message) };
      },
    },
    serialize(a, i) {
      return "new Error(" + i.serialize(a.message) + ")";
    },
    deserialize(a, i) {
      return new Error(i.deserialize(a.message));
    },
  },
  Wn = {},
  Ry = (a) =>
    new ReadableStream({
      start: (i) => {
        a.on({
          next: (u) => {
            try {
              i.enqueue(u);
            } catch {}
          },
          throw: (u) => {
            i.error(u);
          },
          return: () => {
            try {
              i.close();
            } catch {}
          },
        });
      },
    }),
  d_ = {
    tag: "seroval-plugins/web/ReadableStreamFactory",
    test(a) {
      return a === Wn;
    },
    parse: {
      sync() {
        return Wn;
      },
      async async() {
        return await Promise.resolve(Wn);
      },
      stream() {
        return Wn;
      },
    },
    serialize() {
      return Ry.toString();
    },
    deserialize() {
      return Wn;
    },
  };
function mp(a) {
  let i = Ha(),
    u = a.getReader();
  async function s() {
    try {
      let c = await u.read();
      c.done ? i.return(c.value) : (i.next(c.value), await s());
    } catch (c) {
      i.throw(c);
    }
  }
  return (s().catch(() => {}), i);
}
var h_ = {
    tag: "seroval/plugins/web/ReadableStream",
    extends: [d_],
    test(a) {
      return typeof ReadableStream > "u" ? !1 : a instanceof ReadableStream;
    },
    parse: {
      sync(a, i) {
        return { factory: i.parse(Wn), stream: i.parse(Ha()) };
      },
      async async(a, i) {
        return { factory: await i.parse(Wn), stream: await i.parse(mp(a)) };
      },
      stream(a, i) {
        return { factory: i.parse(Wn), stream: i.parse(mp(a)) };
      },
    },
    serialize(a, i) {
      return "(" + i.serialize(a.factory) + ")(" + i.serialize(a.stream) + ")";
    },
    deserialize(a, i) {
      let u = i.deserialize(a.stream);
      return Ry(u);
    },
  },
  m_ = h_,
  p_ = [f_, o_, m_];
function y_() {
  return [...(Dp()?.serializationAdapters?.map(n_) ?? []), ...p_];
}
var pp = new TextDecoder(),
  v_ = new Uint8Array(0),
  yp = 16 * 1024 * 1024,
  vp = 32 * 1024 * 1024,
  gp = 1024,
  Sp = 1e5;
function g_(a) {
  const i = new Map(),
    u = new Map(),
    s = new Set();
  let c = !1,
    f = null,
    h = 0,
    p;
  const y = new ReadableStream({
    start(g) {
      p = g;
    },
    cancel() {
      c = !0;
      try {
        f?.cancel();
      } catch {}
      (i.forEach((g) => {
        try {
          g.error(new Error("Framed response cancelled"));
        } catch {}
      }),
        i.clear(),
        u.clear(),
        s.clear());
    },
  });
  function m(g) {
    const _ = u.get(g);
    if (_) return _;
    if (s.has(g))
      return new ReadableStream({
        start(O) {
          O.close();
        },
      });
    if (u.size >= gp) throw new Error(`Too many raw streams in framed response (max ${gp})`);
    const E = new ReadableStream({
      start(O) {
        i.set(g, O);
      },
      cancel() {
        (s.add(g), i.delete(g), u.delete(g));
      },
    });
    return (u.set(g, E), E);
  }
  function S(g) {
    return (m(g), i.get(g));
  }
  return (
    (async () => {
      const g = a.getReader();
      f = g;
      const _ = [];
      let E = 0;
      function O() {
        if (E < 9) return null;
        const A = _[0];
        if (A.length >= 9)
          return {
            type: A[0],
            streamId: ((A[1] << 24) | (A[2] << 16) | (A[3] << 8) | A[4]) >>> 0,
            length: ((A[5] << 24) | (A[6] << 16) | (A[7] << 8) | A[8]) >>> 0,
          };
        const z = new Uint8Array(9);
        let V = 0,
          Q = 9;
        for (let H = 0; H < _.length && Q > 0; H++) {
          const I = _[H],
            F = Math.min(I.length, Q);
          (z.set(I.subarray(0, F), V), (V += F), (Q -= F));
        }
        return {
          type: z[0],
          streamId: ((z[1] << 24) | (z[2] << 16) | (z[3] << 8) | z[4]) >>> 0,
          length: ((z[5] << 24) | (z[6] << 16) | (z[7] << 8) | z[8]) >>> 0,
        };
      }
      function w(A) {
        if (A === 0) return v_;
        const z = new Uint8Array(A);
        let V = 0,
          Q = A;
        for (; Q > 0 && _.length > 0; ) {
          const H = _[0];
          if (!H) break;
          const I = Math.min(H.length, Q);
          (z.set(H.subarray(0, I), V),
            (V += I),
            (Q -= I),
            I === H.length ? _.shift() : (_[0] = H.subarray(I)));
        }
        return ((E -= A), z);
      }
      try {
        for (;;) {
          const { done: A, value: z } = await g.read();
          if (c || A) break;
          if (z) {
            if (E + z.length > vp) throw new Error(`Framed response buffer exceeded ${vp} bytes`);
            for (_.push(z), E += z.length; ; ) {
              const V = O();
              if (!V) break;
              const { type: Q, streamId: H, length: I } = V;
              if (Q !== En.JSON && Q !== En.CHUNK && Q !== En.END && Q !== En.ERROR)
                throw new Error(`Unknown frame type: ${Q}`);
              if (Q === En.JSON) {
                if (H !== 0) throw new Error("Invalid JSON frame streamId (expected 0)");
              } else if (H === 0) throw new Error("Invalid raw frame streamId (expected non-zero)");
              if (I > yp) throw new Error(`Frame payload too large: ${I} bytes (max ${yp})`);
              const F = 9 + I;
              if (E < F) break;
              if (++h > Sp) throw new Error(`Too many frames in framed response (max ${Sp})`);
              w(9);
              const X = w(I);
              switch (Q) {
                case En.JSON:
                  try {
                    p.enqueue(pp.decode(X));
                  } catch {}
                  break;
                case En.CHUNK: {
                  const J = S(H);
                  J && J.enqueue(X);
                  break;
                }
                case En.END: {
                  const J = S(H);
                  if ((s.add(H), J)) {
                    try {
                      J.close();
                    } catch {}
                    i.delete(H);
                  }
                  break;
                }
                case En.ERROR: {
                  const J = S(H);
                  if ((s.add(H), J)) {
                    const P = pp.decode(X);
                    (J.error(new Error(P)), i.delete(H));
                  }
                  break;
                }
              }
            }
          }
        }
        if (E !== 0) throw new Error("Incomplete frame at end of framed response");
        try {
          p.close();
        } catch {}
        (i.forEach((A) => {
          try {
            A.close();
          } catch {}
        }),
          i.clear());
      } catch (A) {
        try {
          p.error(A);
        } catch {}
        (i.forEach((z) => {
          try {
            z.error(A);
          } catch {}
        }),
          i.clear());
      } finally {
        try {
          g.releaseLock();
        } catch {}
        f = null;
      }
    })(),
    { getOrCreateStream: m, jsonChunks: y }
  );
}
var Xi = null;
async function bc(a) {
  a.length > 0 && (await Promise.allSettled(a));
}
var S_ = Object.prototype.hasOwnProperty;
function Ty(a) {
  for (const i in a) if (S_.call(a, i)) return !0;
  return !1;
}
async function b_(a, i, u) {
  Xi || (Xi = y_());
  const s = i[0],
    c = s.fetch ?? u,
    f = s.data instanceof FormData ? "formData" : "payload",
    h = s.headers ? new Headers(s.headers) : new Headers();
  if (
    (h.set("x-tsr-serverFn", "true"),
    f === "payload" && h.set("accept", `${g0}, application/x-ndjson, application/json`),
    s.method === "GET")
  ) {
    if (f === "formData") throw new Error("FormData is not supported with GET requests");
    const y = await Ay(s);
    if (y !== void 0) {
      const m = Hp({ payload: y });
      a.includes("?") ? (a += `&${m}`) : (a += `?${m}`);
    }
  }
  let p;
  if (s.method === "POST") {
    const y = await __(s);
    (y?.contentType && h.set("content-type", y.contentType), (p = y?.body));
  }
  return await E_(async () => c(a, { method: s.method, headers: h, signal: s.signal, body: p }));
}
async function Ay(a) {
  let i = !1;
  const u = {};
  if (
    (a.data !== void 0 && ((i = !0), (u.data = a.data)),
    a.context && Ty(a.context) && ((i = !0), (u.context = a.context)),
    i)
  )
    return xy(u);
}
async function xy(a) {
  return JSON.stringify(await Promise.resolve(e_(a, { plugins: Xi })));
}
async function __(a) {
  if (a.data instanceof FormData) {
    let u;
    return (
      a.context && Ty(a.context) && (u = await xy(a.context)),
      u !== void 0 && a.data.set(v0, u),
      { body: a.data }
    );
  }
  const i = await Ay(a);
  if (i) return { body: i, contentType: "application/json" };
}
async function E_(a) {
  let i;
  try {
    i = await a();
  } catch (s) {
    if (s instanceof Response) i = s;
    else throw (console.log(s), s);
  }
  if (i.headers.get("x-tss-raw") === "true") return i;
  const u = i.headers.get("content-type");
  if ((u || Ee(), i.headers.get("x-tss-serialized"))) {
    let s;
    if (u.includes("application/x-tss-framed")) {
      if ((_0(u), !i.body)) throw new Error("No response body for framed response");
      const { getOrCreateStream: c, jsonChunks: f } = g_(i.body),
        h = [c_(c), ...(Xi || [])],
        p = new Map();
      s = await R_({
        jsonStream: f,
        onMessage: (y) => fp(y, { refs: p, plugins: h }),
        onError(y, m) {
          console.error(y, m);
        },
      });
    } else if (u.includes("application/json")) {
      const c = await i.json(),
        f = [];
      ((s = fp(c, { plugins: Xi })), await bc(f));
    }
    if ((s || Ee(), s instanceof Error)) throw s;
    return s;
  }
  if (u.includes("application/json")) {
    const s = await i.json(),
      c = aS(s);
    if (c) throw c;
    if (ne(s)) throw s;
    return s;
  }
  if (!i.ok) throw new Error(await i.text());
  return i;
}
async function R_({ jsonStream: a, onMessage: i, onError: u }) {
  const s = a.getReader(),
    { value: c, done: f } = await s.read();
  if (f || !c) throw new Error("Stream ended before first object");
  const h = JSON.parse(c);
  let p = !1;
  const y = (async () => {
    try {
      for (;;) {
        const { value: g, done: _ } = await s.read();
        if (_) break;
        if (g)
          try {
            const E = [];
            try {
              i(JSON.parse(g));
            } finally {
            }
            await bc(E);
          } catch (E) {
            u?.(`Invalid JSON: ${g}`, E);
          }
      }
    } catch (g) {
      p || u?.("Stream processing error:", g);
    }
  })();
  let m;
  const S = [];
  try {
    m = i(h);
  } catch (g) {
    throw ((p = !0), s.cancel().catch(() => {}), g);
  }
  return (
    await bc(S),
    Promise.resolve(m).catch(() => {
      ((p = !0), s.cancel().catch(() => {}));
    }),
    y.finally(() => {
      try {
        s.releaseLock();
      } catch {}
    }),
    m
  );
}
function T_(a) {
  const i = "/_serverFn/" + a;
  return Object.assign(
    (...c) => {
      const f = Dp()?.serverFns?.fetch;
      return b_(i, c, f ?? fetch);
    },
    { url: i, serverFnMeta: { id: a }, [yc]: !0 },
  );
}
var A_ = {
  key: "$TSS/serverfn",
  test: (a) => (typeof a != "function" || !(yc in a) ? !1 : !!a[yc]),
  toSerializable: ({ serverFnMeta: a }) => ({ functionId: a.id }),
  fromSerializable: ({ functionId: a }) => T_(a),
};
function bp(a) {
  return a.replaceAll("\0", "/").replaceAll("�", "/");
}
function x_(a, i) {
  ((a.id = i.i),
    (a.__beforeLoadContext = i.b),
    (a.loaderData = i.l),
    (a.status = i.s),
    (a.ssr = i.ssr),
    (a.updatedAt = i.u),
    (a.error = i.e),
    i.g !== void 0 && (a.globalNotFound = i.g));
}
async function M_(a) {
  window.$_TSR || Ee();
  const i = a.options.serializationAdapters;
  if (i?.length) {
    const A = new Map();
    (i.forEach((z) => {
      A.set(z.key, z.fromSerializable);
    }),
      (window.$_TSR.t = A),
      window.$_TSR.buffer.forEach((z) => z()));
  }
  ((window.$_TSR.initialized = !0), window.$_TSR.router || Ee());
  const u = window.$_TSR.router;
  (u.matches.forEach((A) => {
    A.i = bp(A.i);
  }),
    u.lastMatchId && (u.lastMatchId = bp(u.lastMatchId)));
  const { manifest: s, dehydratedData: c, lastMatchId: f } = u;
  a.ssr = { manifest: s };
  const h = document.querySelector('meta[property="csp-nonce"]')?.content;
  a.options.ssr = { nonce: h };
  const p = a.matchRoutes(a.stores.location.get()),
    y = Promise.all(p.map((A) => a.loadRouteChunk(a.looseRoutesById[A.routeId])));
  function m(A) {
    const z = a.looseRoutesById[A.routeId].options.pendingMinMs ?? a.options.defaultPendingMinMs;
    if (z) {
      const V = Ba();
      ((A._nonReactive.minPendingPromise = V),
        (A._forcePending = !0),
        setTimeout(() => {
          (V.resolve(),
            a.updateMatch(
              A.id,
              (Q) => ((Q._nonReactive.minPendingPromise = void 0), { ...Q, _forcePending: void 0 }),
            ));
        }, z));
    }
  }
  function S(A) {
    const z = a.looseRoutesById[A.routeId];
    z && (z.options.ssr = A.ssr);
  }
  let g;
  (p.forEach((A) => {
    const z = u.matches.find((V) => V.i === A.id);
    if (!z) {
      ((A._nonReactive.dehydrated = !1), (A.ssr = !1), S(A));
      return;
    }
    (x_(A, z),
      S(A),
      (A._nonReactive.dehydrated = A.ssr !== !1),
      (A.ssr === "data-only" || A.ssr === !1) && g === void 0 && ((g = A.index), m(A)));
  }),
    a.stores.setMatches(p),
    await a.options.hydrate?.(c));
  const _ = a.stores.matches.get(),
    E = a.stores.location.get();
  await Promise.all(
    _.map(async (A) => {
      try {
        const z = a.looseRoutesById[A.routeId],
          V = _[A.index - 1]?.context ?? a.options.context;
        if (z.options.context) {
          const F = {
            deps: A.loaderDeps,
            params: A.params,
            context: V ?? {},
            location: E,
            navigate: (X) => a.navigate({ ...X, _fromLocation: E }),
            buildLocation: a.buildLocation,
            cause: A.cause,
            abortController: A.abortController,
            preload: !1,
            matches: p,
            routeId: z.id,
          };
          A.__routeContext = z.options.context(F) ?? void 0;
        }
        A.context = { ...V, ...A.__routeContext, ...A.__beforeLoadContext };
        const Q = {
            ssr: a.options.ssr,
            matches: _,
            match: A,
            params: A.params,
            loaderData: A.loaderData,
          },
          H = await z.options.head?.(Q),
          I = await z.options.scripts?.(Q);
        ((A.meta = H?.meta),
          (A.links = H?.links),
          (A.headScripts = H?.scripts),
          (A.styles = H?.styles),
          (A.scripts = I));
      } catch (z) {
        if (ne(z))
          ((A.error = { isNotFound: !0 }),
            console.error(`NotFound error during hydration for routeId: ${A.routeId}`, z));
        else
          throw (
            (A.error = z),
            console.error(`Error during hydration for route ${A.routeId}:`, z),
            z
          );
      }
    }),
  );
  const O = p[p.length - 1].id !== f;
  if (!p.some((A) => A.ssr === !1) && !O)
    return (
      p.forEach((A) => {
        A._nonReactive.dehydrated = void 0;
      }),
      a.stores.resolvedLocation.set(a.stores.location.get()),
      y
    );
  const w = Promise.resolve()
    .then(() => a.load())
    .catch((A) => {
      console.error("Error during router hydration:", A);
    });
  if (O) {
    const A = p[1];
    (A || Ee(),
      m(A),
      (A._displayPending = !0),
      (A._nonReactive.displayPendingPromise = w),
      w.then(() => {
        a.batch(() => {
          (a.stores.status.get() === "pending" &&
            (a.stores.status.set("idle"), a.stores.resolvedLocation.set(a.stores.location.get())),
            a.updateMatch(A.id, (z) => ({
              ...z,
              _displayPending: void 0,
              displayPendingPromise: void 0,
            })));
        });
      }));
  }
  return y;
}
var Ar = at.use,
  Hi = typeof window < "u" ? at.useLayoutEffect : at.useEffect;
function oc(a) {
  const i = at.useRef({ value: a, prev: null }),
    u = i.current.value;
  return (a !== u && (i.current = { value: a, prev: u }), i.current.prev);
}
function O_(a, i, u = {}, s = {}) {
  at.useEffect(() => {
    if (!a.current || s.disabled || typeof IntersectionObserver != "function") return;
    const c = new IntersectionObserver(([f]) => {
      i(f);
    }, u);
    return (
      c.observe(a.current),
      () => {
        c.disconnect();
      }
    );
  }, [i, u, s.disabled, a]);
}
function z_(a) {
  const i = at.useRef(null);
  return (at.useImperativeHandle(a, () => i.current, []), i);
}
function C_({ promise: a }) {
  if (Ar) return Ar(a);
  const i = TS(a);
  if (i[We].status === "pending") throw i;
  if (i[We].status === "error") throw i[We].error;
  return i[We].data;
}
function w_(a) {
  const i = Z.jsx(D_, { ...a });
  return a.fallback ? Z.jsx(at.Suspense, { fallback: a.fallback, children: i }) : i;
}
function D_(a) {
  const i = C_(a);
  return a.children(i);
}
function wc(a) {
  const i = a.errorComponent ?? Dc;
  return Z.jsx(L_, {
    getResetKey: a.getResetKey,
    onCatch: a.onCatch,
    children: ({ error: u, reset: s }) =>
      u ? at.createElement(i, { error: u, reset: s }) : a.children,
  });
}
var L_ = class extends at.Component {
  constructor(...a) {
    (super(...a), (this.state = { error: null }));
  }
  static getDerivedStateFromProps(a, i) {
    const u = a.getResetKey();
    return i.error && i.resetKey !== u ? { resetKey: u, error: null } : { resetKey: u };
  }
  static getDerivedStateFromError(a) {
    return { error: a };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidCatch(a, i) {
    this.props.onCatch && this.props.onCatch(a, i);
  }
  render() {
    return this.props.children({
      error: this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
};
function Dc({ error: a }) {
  const [i, u] = at.useState(!1);
  return Z.jsxs("div", {
    style: { padding: ".5rem", maxWidth: "100%" },
    children: [
      Z.jsxs("div", {
        style: { display: "flex", alignItems: "center", gap: ".5rem" },
        children: [
          Z.jsx("strong", { style: { fontSize: "1rem" }, children: "Something went wrong!" }),
          Z.jsx("button", {
            style: {
              appearance: "none",
              fontSize: ".6em",
              border: "1px solid currentColor",
              padding: ".1rem .2rem",
              fontWeight: "bold",
              borderRadius: ".25rem",
            },
            onClick: () => u((s) => !s),
            children: i ? "Hide Error" : "Show Error",
          }),
        ],
      }),
      Z.jsx("div", { style: { height: ".25rem" } }),
      i
        ? Z.jsx("div", {
            children: Z.jsx("pre", {
              style: {
                fontSize: ".7em",
                border: "1px solid red",
                borderRadius: ".25rem",
                padding: ".3rem",
                color: "red",
                overflow: "auto",
              },
              children: a.message ? Z.jsx("code", { children: a.message }) : null,
            }),
          })
        : null,
    ],
  });
}
function U_({ children: a, fallback: i = null }) {
  return Lc() ? Z.jsx(Dl.Fragment, { children: a }) : Z.jsx(Dl.Fragment, { children: i });
}
function Lc() {
  return Dl.useSyncExternalStore(
    N_,
    () => !0,
    () => !1,
  );
}
function N_() {
  return () => {};
}
var My = at.createContext(null);
function oe(a) {
  return at.useContext(My);
}
var Ur = at.createContext(void 0),
  j_ = at.createContext(void 0),
  qt = ((a) => (
    (a[(a.None = 0)] = "None"),
    (a[(a.Mutable = 1)] = "Mutable"),
    (a[(a.Watching = 2)] = "Watching"),
    (a[(a.RecursedCheck = 4)] = "RecursedCheck"),
    (a[(a.Recursed = 8)] = "Recursed"),
    (a[(a.Dirty = 16)] = "Dirty"),
    (a[(a.Pending = 32)] = "Pending"),
    a
  ))(qt || {});
function B_({ update: a, notify: i, unwatched: u }) {
  return { link: s, unlink: c, propagate: f, checkDirty: h, shallowPropagate: p };
  function s(m, S, g) {
    const _ = S.depsTail;
    if (_ !== void 0 && _.dep === m) return;
    const E = _ !== void 0 ? _.nextDep : S.deps;
    if (E !== void 0 && E.dep === m) {
      ((E.version = g), (S.depsTail = E));
      return;
    }
    const O = m.subsTail;
    if (O !== void 0 && O.version === g && O.sub === S) return;
    const w =
      (S.depsTail =
      m.subsTail =
        { version: g, dep: m, sub: S, prevDep: _, nextDep: E, prevSub: O, nextSub: void 0 });
    (E !== void 0 && (E.prevDep = w),
      _ !== void 0 ? (_.nextDep = w) : (S.deps = w),
      O !== void 0 ? (O.nextSub = w) : (m.subs = w));
  }
  function c(m, S = m.sub) {
    const g = m.dep,
      _ = m.prevDep,
      E = m.nextDep,
      O = m.nextSub,
      w = m.prevSub;
    return (
      E !== void 0 ? (E.prevDep = _) : (S.depsTail = _),
      _ !== void 0 ? (_.nextDep = E) : (S.deps = E),
      O !== void 0 ? (O.prevSub = w) : (g.subsTail = w),
      w !== void 0 ? (w.nextSub = O) : (g.subs = O) === void 0 && u(g),
      E
    );
  }
  function f(m) {
    let S = m.nextSub,
      g;
    t: do {
      const _ = m.sub;
      let E = _.flags;
      if (
        (E & 60
          ? E & 12
            ? E & 4
              ? !(E & 48) && y(m, _)
                ? ((_.flags = E | 40), (E &= 1))
                : (E = 0)
              : (_.flags = (E & -9) | 32)
            : (E = 0)
          : (_.flags = E | 32),
        E & 2 && i(_),
        E & 1)
      ) {
        const O = _.subs;
        if (O !== void 0) {
          const w = (m = O).nextSub;
          w !== void 0 && ((g = { value: S, prev: g }), (S = w));
          continue;
        }
      }
      if ((m = S) !== void 0) {
        S = m.nextSub;
        continue;
      }
      for (; g !== void 0; )
        if (((m = g.value), (g = g.prev), m !== void 0)) {
          S = m.nextSub;
          continue t;
        }
      break;
    } while (!0);
  }
  function h(m, S) {
    let g,
      _ = 0,
      E = !1;
    t: do {
      const O = m.dep,
        w = O.flags;
      if (S.flags & 16) E = !0;
      else if ((w & 17) === 17) {
        if (a(O)) {
          const A = O.subs;
          (A.nextSub !== void 0 && p(A), (E = !0));
        }
      } else if ((w & 33) === 33) {
        ((m.nextSub !== void 0 || m.prevSub !== void 0) && (g = { value: m, prev: g }),
          (m = O.deps),
          (S = O),
          ++_);
        continue;
      }
      if (!E) {
        const A = m.nextDep;
        if (A !== void 0) {
          m = A;
          continue;
        }
      }
      for (; _--; ) {
        const A = S.subs,
          z = A.nextSub !== void 0;
        if ((z ? ((m = g.value), (g = g.prev)) : (m = A), E)) {
          if (a(S)) {
            (z && p(A), (S = m.sub));
            continue;
          }
          E = !1;
        } else S.flags &= -33;
        S = m.sub;
        const V = m.nextDep;
        if (V !== void 0) {
          m = V;
          continue t;
        }
      }
      return E;
    } while (!0);
  }
  function p(m) {
    do {
      const S = m.sub,
        g = S.flags;
      (g & 48) === 32 && ((S.flags = g | 16), (g & 6) === 2 && i(S));
    } while ((m = m.nextSub) !== void 0);
  }
  function y(m, S) {
    let g = S.depsTail;
    for (; g !== void 0; ) {
      if (g === m) return !0;
      g = g.prevDep;
    }
    return !1;
  }
}
function H_(a, i, u) {
  const s = typeof a == "object",
    c = s ? a : void 0;
  return {
    next: (s ? a.next : a)?.bind(c),
    error: (s ? a.error : i)?.bind(c),
    complete: (s ? a.complete : u)?.bind(c),
  };
}
const _c = [];
let Sr = 0;
const {
  link: _p,
  unlink: q_,
  propagate: Y_,
  checkDirty: Oy,
  shallowPropagate: Ep,
} = B_({
  update(a) {
    return a._update();
  },
  notify(a) {
    ((_c[Ec++] = a), (a.flags &= ~qt.Watching));
  },
  unwatched(a) {
    a.depsTail !== void 0 && ((a.depsTail = void 0), (a.flags = qt.Mutable | qt.Dirty), xr(a));
  },
});
let mr = 0,
  Ec = 0,
  Ie,
  Rc = 0;
function zy(a) {
  try {
    (++Rc, a());
  } finally {
    --Rc || Cy();
  }
}
function xr(a) {
  const i = a.depsTail;
  let u = i !== void 0 ? i.nextDep : a.deps;
  for (; u !== void 0; ) u = q_(u, a);
}
function Cy() {
  if (!(Rc > 0)) {
    for (; mr < Ec; ) {
      const a = _c[mr];
      ((_c[mr++] = void 0), a.notify());
    }
    ((mr = 0), (Ec = 0));
  }
}
function Rp(a, i) {
  const u = typeof a == "function",
    s = a,
    c = {
      _snapshot: u ? void 0 : a,
      subs: void 0,
      subsTail: void 0,
      deps: void 0,
      depsTail: void 0,
      flags: u ? qt.None : qt.Mutable,
      get() {
        return (Ie !== void 0 && _p(c, Ie, Sr), c._snapshot);
      },
      subscribe(f) {
        const h = H_(f),
          p = { current: !1 },
          y = G_(() => {
            (c.get(), p.current ? h.next?.(c._snapshot) : (p.current = !0));
          });
        return {
          unsubscribe: () => {
            y.stop();
          },
        };
      },
      _update(f) {
        const h = Ie,
          p = i?.compare ?? Object.is;
        if (u) ((Ie = c), ++Sr, (c.depsTail = void 0));
        else if (f === void 0) return !1;
        u && (c.flags = qt.Mutable | qt.RecursedCheck);
        try {
          const y = c._snapshot,
            m = typeof f == "function" ? f(y) : f === void 0 && u ? s(y) : f;
          return y === void 0 || !p(y, m) ? ((c._snapshot = m), !0) : !1;
        } finally {
          ((Ie = h), u && (c.flags &= ~qt.RecursedCheck), xr(c));
        }
      },
    };
  return (
    u
      ? ((c.flags = qt.Mutable | qt.Dirty),
        (c.get = function () {
          const f = c.flags;
          if (f & qt.Dirty || (f & qt.Pending && Oy(c.deps, c))) {
            if (c._update()) {
              const h = c.subs;
              h !== void 0 && Ep(h);
            }
          } else f & qt.Pending && (c.flags = f & ~qt.Pending);
          return (Ie !== void 0 && _p(c, Ie, Sr), c._snapshot);
        }))
      : (c.set = function (f) {
          if (c._update(f)) {
            const h = c.subs;
            h !== void 0 && (Y_(h), Ep(h), Cy());
          }
        }),
    c
  );
}
function G_(a) {
  const i = () => {
      const s = Ie;
      ((Ie = u), ++Sr, (u.depsTail = void 0), (u.flags = qt.Watching | qt.RecursedCheck));
      try {
        return a();
      } finally {
        ((Ie = s), (u.flags &= ~qt.RecursedCheck), xr(u));
      }
    },
    u = {
      deps: void 0,
      depsTail: void 0,
      subs: void 0,
      subsTail: void 0,
      flags: qt.Watching | qt.RecursedCheck,
      notify() {
        const s = this.flags;
        s & qt.Dirty || (s & qt.Pending && Oy(this.deps, this)) ? i() : (this.flags = qt.Watching);
      },
      stop() {
        ((this.flags = qt.None), (this.depsTail = void 0), xr(this));
      },
    };
  return (i(), u);
}
var cc = { exports: {} },
  fc = {},
  dc = { exports: {} },
  hc = {};
var Tp;
function V_() {
  if (Tp) return hc;
  Tp = 1;
  var a = Qi();
  function i(g, _) {
    return (g === _ && (g !== 0 || 1 / g === 1 / _)) || (g !== g && _ !== _);
  }
  var u = typeof Object.is == "function" ? Object.is : i,
    s = a.useState,
    c = a.useEffect,
    f = a.useLayoutEffect,
    h = a.useDebugValue;
  function p(g, _) {
    var E = _(),
      O = s({ inst: { value: E, getSnapshot: _ } }),
      w = O[0].inst,
      A = O[1];
    return (
      f(
        function () {
          ((w.value = E), (w.getSnapshot = _), y(w) && A({ inst: w }));
        },
        [g, E, _],
      ),
      c(
        function () {
          return (
            y(w) && A({ inst: w }),
            g(function () {
              y(w) && A({ inst: w });
            })
          );
        },
        [g],
      ),
      h(E),
      E
    );
  }
  function y(g) {
    var _ = g.getSnapshot;
    g = g.value;
    try {
      var E = _();
      return !u(g, E);
    } catch {
      return !0;
    }
  }
  function m(g, _) {
    return _();
  }
  var S =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? m
      : p;
  return (
    (hc.useSyncExternalStore = a.useSyncExternalStore !== void 0 ? a.useSyncExternalStore : S),
    hc
  );
}
var Ap;
function X_() {
  return (Ap || ((Ap = 1), (dc.exports = V_())), dc.exports);
}
var xp;
function Q_() {
  if (xp) return fc;
  xp = 1;
  var a = Qi(),
    i = X_();
  function u(m, S) {
    return (m === S && (m !== 0 || 1 / m === 1 / S)) || (m !== m && S !== S);
  }
  var s = typeof Object.is == "function" ? Object.is : u,
    c = i.useSyncExternalStore,
    f = a.useRef,
    h = a.useEffect,
    p = a.useMemo,
    y = a.useDebugValue;
  return (
    (fc.useSyncExternalStoreWithSelector = function (m, S, g, _, E) {
      var O = f(null);
      if (O.current === null) {
        var w = { hasValue: !1, value: null };
        O.current = w;
      } else w = O.current;
      O = p(
        function () {
          function z(F) {
            if (!V) {
              if (((V = !0), (Q = F), (F = _(F)), E !== void 0 && w.hasValue)) {
                var X = w.value;
                if (E(X, F)) return (H = X);
              }
              return (H = F);
            }
            if (((X = H), s(Q, F))) return X;
            var J = _(F);
            return E !== void 0 && E(X, J) ? ((Q = F), X) : ((Q = F), (H = J));
          }
          var V = !1,
            Q,
            H,
            I = g === void 0 ? null : g;
          return [
            function () {
              return z(S());
            },
            I === null
              ? void 0
              : function () {
                  return z(I());
                },
          ];
        },
        [S, g, _, E],
      );
      var A = c(m, O[0], O[1]);
      return (
        h(
          function () {
            ((w.hasValue = !0), (w.value = A));
          },
          [A],
        ),
        y(A),
        A
      );
    }),
    fc
  );
}
var Mp;
function Z_() {
  return (Mp || ((Mp = 1), (cc.exports = Q_())), cc.exports);
}
var K_ = Z_();
function J_(a, i) {
  return a === i;
}
function Ft(a, i, u = J_) {
  const s = at.useCallback(
      (h) => {
        if (!a) return () => {};
        const { unsubscribe: p } = a.subscribe(h);
        return p;
      },
      [a],
    ),
    c = at.useCallback(() => a?.get(), [a]);
  return K_.useSyncExternalStoreWithSelector(s, c, c, i, u);
}
var k_ = { get: () => {}, subscribe: () => ({ unsubscribe: () => {} }) };
function qa(a) {
  const i = oe(),
    u = at.useContext(a.from ? j_ : Ur),
    s = a.from ?? u,
    c = s ? (a.from ? i.stores.getRouteMatchStore(s) : i.stores.matchStores.get(s)) : void 0,
    f = at.useRef(void 0);
  return Ft(c ?? k_, (h) => {
    if (((a.shouldThrow ?? !0) && !h && Ee(), h === void 0)) return;
    const p = a.select ? a.select(h) : h;
    if (a.structuralSharing ?? i.options.defaultStructuralSharing) {
      const y = wa(f.current, p);
      return ((f.current = y), y);
    }
    return p;
  });
}
function wy(a) {
  return qa({
    from: a.from,
    strict: a.strict,
    structuralSharing: a.structuralSharing,
    select: (i) => (a.select ? a.select(i.loaderData) : i.loaderData),
  });
}
function Dy(a) {
  const { select: i, ...u } = a;
  return qa({ ...u, select: (s) => (i ? i(s.loaderDeps) : s.loaderDeps) });
}
function Ly(a) {
  return qa({
    from: a.from,
    shouldThrow: a.shouldThrow,
    structuralSharing: a.structuralSharing,
    strict: a.strict,
    select: (i) => {
      const u = a.strict === !1 ? i.params : i._strictParams;
      return a.select ? a.select(u) : u;
    },
  });
}
function Uy(a) {
  return qa({
    from: a.from,
    strict: a.strict,
    shouldThrow: a.shouldThrow,
    structuralSharing: a.structuralSharing,
    select: (i) => (a.select ? a.select(i.search) : i.search),
  });
}
function Ny(a) {
  const i = oe();
  return at.useCallback((u) => i.navigate({ ...u, from: u.from ?? a?.from }), [a?.from, i]);
}
function jy(a) {
  return qa({ ...a, select: (i) => (a.select ? a.select(i.context) : i.context) });
}
var By = wp();
const v2 = Cp(By);
function P_(a, i) {
  const u = oe(),
    s = z_(i),
    {
      activeProps: c,
      inactiveProps: f,
      activeOptions: h,
      to: p,
      preload: y,
      preloadDelay: m,
      preloadIntentProximity: S,
      hashScrollIntoView: g,
      replace: _,
      startTransition: E,
      resetScroll: O,
      viewTransition: w,
      children: A,
      target: z,
      disabled: V,
      style: Q,
      className: H,
      onClick: I,
      onBlur: F,
      onFocus: X,
      onMouseEnter: J,
      onMouseLeave: P,
      onTouchStart: ut,
      ignoreBlocker: tt,
      params: dt,
      search: vt,
      hash: Yt,
      state: Ot,
      mask: j,
      reloadDocument: K,
      unsafeRelative: it,
      from: Rt,
      _fromLocation: At,
      ...M
    } = a,
    Y = Lc(),
    k = at.useMemo(
      () => a,
      [
        u,
        a.from,
        a._fromLocation,
        a.hash,
        a.to,
        a.search,
        a.params,
        a.state,
        a.mask,
        a.unsafeRelative,
      ],
    ),
    $ = Ft(
      u.stores.location,
      (Nt) => Nt,
      (Nt, ae) => Nt.href === ae.href,
    ),
    nt = at.useMemo(() => {
      const Nt = { _fromLocation: $, ...k };
      return u.buildLocation(Nt);
    }, [u, $, k]),
    ft = nt.maskedLocation ? nt.maskedLocation.publicHref : nt.publicHref,
    St = nt.maskedLocation ? nt.maskedLocation.external : nt.external,
    Xt = at.useMemo(() => eE(ft, St, u.history, V), [V, St, ft, u.history]),
    Dt = at.useMemo(() => {
      if (Xt?.external) return br(Xt.href, u.protocolAllowlist) ? void 0 : Xt.href;
      if (!nE(p) && !(typeof p != "string" || p.indexOf(":") === -1))
        try {
          return (new URL(p), br(p, u.protocolAllowlist) ? void 0 : p);
        } catch {}
    }, [p, Xt, u.protocolAllowlist]),
    tn = at.useMemo(() => {
      if (Dt) return !1;
      if (h?.exact) {
        if (!X0($.pathname, nt.pathname, u.basepath)) return !1;
      } else {
        const Nt = _r($.pathname, u.basepath),
          ae = _r(nt.pathname, u.basepath);
        if (!(Nt.startsWith(ae) && (Nt.length === ae.length || Nt[ae.length] === "/"))) return !1;
      }
      return (h?.includeSearch ?? !0) &&
        !be($.search, nt.search, { partial: !h?.exact, ignoreUndefined: !h?.explicitUndefined })
        ? !1
        : h?.includeHash
          ? Y && $.hash === nt.hash
          : !0;
    }, [
      h?.exact,
      h?.explicitUndefined,
      h?.includeHash,
      h?.includeSearch,
      $,
      Dt,
      Y,
      nt.hash,
      nt.pathname,
      nt.search,
      u.basepath,
    ]),
    en = tn ? (ta(c, {}) ?? F_) : mc,
    xn = tn ? mc : (ta(f, {}) ?? mc),
    Ul = [H, en.className, xn.className].filter(Boolean).join(" "),
    Ke = (Q || en.style || xn.style) && { ...Q, ...en.style, ...xn.style },
    [Nl, Ya] = at.useState(!1),
    ki = at.useRef(!1),
    nn = a.reloadDocument || Dt ? !1 : (y ?? u.options.defaultPreload),
    fa = m ?? u.options.defaultPreloadDelay ?? 0,
    Ve = at.useCallback(() => {
      u.preloadRoute({ ...k, _builtLocation: nt }).catch((Nt) => {
        (console.warn(Nt), console.warn(AS));
      });
    }, [u, k, nt]);
  (O_(
    s,
    at.useCallback(
      (Nt) => {
        Nt?.isIntersecting && Ve();
      },
      [Ve],
    ),
    tE,
    { disabled: !!V || nn !== "viewport" },
  ),
    at.useEffect(() => {
      ki.current || (!V && nn === "render" && (Ve(), (ki.current = !0)));
    }, [V, Ve, nn]));
  const jl = (Nt) => {
    const ae = Nt.currentTarget.getAttribute("target"),
      Je = z !== void 0 ? z : ae;
    if (!V && !aE(Nt) && !Nt.defaultPrevented && (!Je || Je === "_self") && Nt.button === 0) {
      (Nt.preventDefault(),
        By.flushSync(() => {
          Ya(!0);
        }));
      const Ga = u.subscribe("onResolved", () => {
        (Ga(), Ya(!1));
      });
      u.navigate({
        ...k,
        replace: _,
        resetScroll: O,
        hashScrollIntoView: g,
        startTransition: E,
        viewTransition: w,
        ignoreBlocker: tt,
      });
    }
  };
  if (Dt)
    return {
      ...M,
      ref: s,
      href: Dt,
      ...(A && { children: A }),
      ...(z && { target: z }),
      ...(V && { disabled: V }),
      ...(Q && { style: Q }),
      ...(H && { className: H }),
      ...(I && { onClick: I }),
      ...(F && { onBlur: F }),
      ...(X && { onFocus: X }),
      ...(J && { onMouseEnter: J }),
      ...(P && { onMouseLeave: P }),
      ...(ut && { onTouchStart: ut }),
    };
  const Pi = (Nt) => {
      if (V || nn !== "intent") return;
      if (!fa) {
        Ve();
        return;
      }
      const ae = Nt.currentTarget;
      if (Bi.has(ae)) return;
      const Je = setTimeout(() => {
        (Bi.delete(ae), Ve());
      }, fa);
      Bi.set(ae, Je);
    },
    Nr = (Nt) => {
      V || nn !== "intent" || Ve();
    },
    ce = (Nt) => {
      if (V || !nn || !fa) return;
      const ae = Nt.currentTarget,
        Je = Bi.get(ae);
      Je && (clearTimeout(Je), Bi.delete(ae));
    };
  return {
    ...M,
    ...en,
    ...xn,
    href: Xt?.href,
    ref: s,
    onClick: xl([I, jl]),
    onBlur: xl([F, ce]),
    onFocus: xl([X, Pi]),
    onMouseEnter: xl([J, Pi]),
    onMouseLeave: xl([P, ce]),
    onTouchStart: xl([ut, Nr]),
    disabled: !!V,
    target: z,
    ...(Ke && { style: Ke }),
    ...(Ul && { className: Ul }),
    ...(V && $_),
    ...(tn && I_),
    ...(Y && Nl && W_),
  };
}
var mc = {},
  F_ = { className: "active" },
  $_ = { role: "link", "aria-disabled": !0 },
  I_ = { "data-status": "active", "aria-current": "page" },
  W_ = { "data-transitioning": "transitioning" },
  Bi = new WeakMap(),
  tE = { rootMargin: "100px" },
  xl = (a) => (i) => {
    for (const u of a)
      if (u) {
        if (i.defaultPrevented) return;
        u(i);
      }
  };
function eE(a, i, u, s) {
  if (!s) return i ? { href: a, external: !0 } : { href: u.createHref(a) || "/", external: !1 };
}
function nE(a) {
  if (typeof a != "string") return !1;
  const i = a.charCodeAt(0);
  return i === 47 ? a.charCodeAt(1) !== 47 : i === 46;
}
var Uc = at.forwardRef((a, i) => {
  const { _asChild: u, ...s } = a,
    { type: c, ...f } = P_(s, i),
    h =
      typeof s.children == "function"
        ? s.children({ isActive: f["data-status"] === "active" })
        : s.children;
  if (!u) {
    const { disabled: p, ...y } = f;
    return at.createElement("a", y, h);
  }
  return at.createElement(u, f, h);
});
function aE(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
var lE = class extends Zp {
  constructor(i) {
    (super(i),
      (this.useMatch = (u) =>
        qa({ select: u?.select, from: this.id, structuralSharing: u?.structuralSharing })),
      (this.useRouteContext = (u) => jy({ ...u, from: this.id })),
      (this.useSearch = (u) =>
        Uy({ select: u?.select, structuralSharing: u?.structuralSharing, from: this.id })),
      (this.useParams = (u) =>
        Ly({ select: u?.select, structuralSharing: u?.structuralSharing, from: this.id })),
      (this.useLoaderDeps = (u) => Dy({ ...u, from: this.id })),
      (this.useLoaderData = (u) => wy({ ...u, from: this.id })),
      (this.useNavigate = () => Ny({ from: this.fullPath })),
      (this.Link = Dl.forwardRef((u, s) => Z.jsx(Uc, { ref: s, from: this.fullPath, ...u }))));
  }
};
function iE(a) {
  return new lE(a);
}
var uE = class extends MS {
  constructor(a) {
    (super(a),
      (this.useMatch = (i) =>
        qa({ select: i?.select, from: this.id, structuralSharing: i?.structuralSharing })),
      (this.useRouteContext = (i) => jy({ ...i, from: this.id })),
      (this.useSearch = (i) =>
        Uy({ select: i?.select, structuralSharing: i?.structuralSharing, from: this.id })),
      (this.useParams = (i) =>
        Ly({ select: i?.select, structuralSharing: i?.structuralSharing, from: this.id })),
      (this.useLoaderDeps = (i) => Dy({ ...i, from: this.id })),
      (this.useLoaderData = (i) => wy({ ...i, from: this.id })),
      (this.useNavigate = () => Ny({ from: this.fullPath })),
      (this.Link = Dl.forwardRef((i, u) => Z.jsx(Uc, { ref: u, from: this.fullPath, ...i }))));
  }
};
function rE(a) {
  return new uE(a);
}
function sa(a) {
  return new sE(a, { silent: !0 }).createRoute;
}
var sE = class {
  constructor(a, i) {
    ((this.path = a),
      (this.createRoute = (u) => {
        const s = iE(u);
        return ((s.isRoot = !1), s);
      }),
      (this.silent = i?.silent));
  }
};
function oa(a, i) {
  let u, s, c, f;
  const h = () => (
      u ||
        (u = a()
          .then((y) => {
            ((u = void 0), (s = y[i]));
          })
          .catch((y) => {
            if (
              ((c = y),
              A0(c) && c instanceof Error && typeof window < "u" && typeof sessionStorage < "u")
            ) {
              const m = `tanstack_router_reload:${c.message}`;
              sessionStorage.getItem(m) || (sessionStorage.setItem(m, "1"), (f = !0));
            }
          })),
      u
    ),
    p = function (m) {
      if (f) throw (window.location.reload(), new Promise(() => {}));
      if (c) throw c;
      if (!s)
        if (Ar) Ar(h());
        else throw h();
      return at.createElement(s, m);
    };
  return ((p.preload = h), p);
}
function oE(a) {
  const i = oe(),
    u = `not-found-${Ft(i.stores.location, (s) => s.pathname)}-${Ft(i.stores.status, (s) => s)}`;
  return Z.jsx(wc, {
    getResetKey: () => u,
    onCatch: (s, c) => {
      if (ne(s)) a.onCatch?.(s, c);
      else throw s;
    },
    errorComponent: ({ error: s }) => {
      if (ne(s)) return a.fallback?.(s);
      throw s;
    },
    children: a.children,
  });
}
function cE() {
  return Z.jsx("p", { children: "Not Found" });
}
function Ml(a) {
  return Z.jsx(Z.Fragment, { children: a.children });
}
function Hy(a, i, u) {
  return i.options.notFoundComponent
    ? Z.jsx(i.options.notFoundComponent, { ...u })
    : a.options.defaultNotFoundComponent
      ? Z.jsx(a.options.defaultNotFoundComponent, { ...u })
      : Z.jsx(cE, {});
}
function fE(a) {
  return null;
}
function dE() {
  return (fE(oe()), null);
}
var qy = at.memo(function ({ matchId: i }) {
  const u = oe(),
    s = u.stores.matchStores.get(i);
  s || Ee();
  const c = Ft(u.stores.loadedAt, (h) => h),
    f = Ft(s, (h) => h);
  return Z.jsx(hE, {
    router: u,
    matchId: i,
    resetKey: c,
    matchState: at.useMemo(() => {
      const h = f.routeId,
        p = u.routesById[h].parentRoute?.id;
      return { routeId: h, ssr: f.ssr, _displayPending: f._displayPending, parentRouteId: p };
    }, [f._displayPending, f.routeId, f.ssr, u.routesById]),
  });
});
function hE({ router: a, matchId: i, resetKey: u, matchState: s }) {
  const c = a.routesById[s.routeId],
    f = c.options.pendingComponent ?? a.options.defaultPendingComponent,
    h = f ? Z.jsx(f, {}) : null,
    p = c.options.errorComponent ?? a.options.defaultErrorComponent,
    y = c.options.onCatch ?? a.options.defaultOnCatch,
    m = c.isRoot
      ? (c.options.notFoundComponent ?? a.options.notFoundRoute?.options.component)
      : c.options.notFoundComponent,
    S = s.ssr === !1 || s.ssr === "data-only",
    g =
      (!c.isRoot || c.options.wrapInSuspense || S) &&
      (c.options.wrapInSuspense ?? f ?? (c.options.errorComponent?.preload || S))
        ? at.Suspense
        : Ml,
    _ = p ? wc : Ml,
    E = m ? oE : Ml;
  return Z.jsxs(c.isRoot ? (c.options.shellComponent ?? Ml) : Ml, {
    children: [
      Z.jsx(Ur.Provider, {
        value: i,
        children: Z.jsx(g, {
          fallback: h,
          children: Z.jsx(_, {
            getResetKey: () => u,
            errorComponent: p || Dc,
            onCatch: (O, w) => {
              if (ne(O)) throw ((O.routeId ??= s.routeId), O);
              y?.(O, w);
            },
            children: Z.jsx(E, {
              fallback: (O) => {
                if (
                  ((O.routeId ??= s.routeId),
                  !m || (O.routeId && O.routeId !== s.routeId) || (!O.routeId && !c.isRoot))
                )
                  throw O;
                return at.createElement(m, O);
              },
              children:
                S || s._displayPending
                  ? Z.jsx(U_, { fallback: h, children: Z.jsx(Op, { matchId: i }) })
                  : Z.jsx(Op, { matchId: i }),
            }),
          }),
        }),
      }),
      s.parentRouteId === Na
        ? Z.jsxs(Z.Fragment, {
            children: [
              Z.jsx(mE, { resetKey: u }),
              a.options.scrollRestoration && Lp ? Z.jsx(dE, {}) : null,
            ],
          })
        : null,
    ],
  });
}
function mE({ resetKey: a }) {
  const i = oe(),
    u = at.useRef(void 0);
  return (
    Hi(() => {
      const s = i.latestLocation.href;
      (u.current === void 0 || u.current !== s) &&
        (i.emit({
          type: "onRendered",
          ...zl(i.stores.location.get(), i.stores.resolvedLocation.get()),
        }),
        (u.current = s));
    }, [i.latestLocation.state.__TSR_key, a, i]),
    null
  );
}
var Op = at.memo(function ({ matchId: i }) {
    const u = oe(),
      s = (S, g) => u.getMatch(S.id)?._nonReactive[g] ?? S._nonReactive[g],
      c = u.stores.matchStores.get(i);
    c || Ee();
    const f = Ft(c, (S) => S),
      h = f.routeId,
      p = u.routesById[h],
      y = at.useMemo(() => {
        const S = (u.routesById[h].options.remountDeps ?? u.options.defaultRemountDeps)?.({
          routeId: h,
          loaderDeps: f.loaderDeps,
          params: f._strictParams,
          search: f._strictSearch,
        });
        return S ? JSON.stringify(S) : void 0;
      }, [
        h,
        f.loaderDeps,
        f._strictParams,
        f._strictSearch,
        u.options.defaultRemountDeps,
        u.routesById,
      ]),
      m = at.useMemo(() => {
        const S = p.options.component ?? u.options.defaultComponent;
        return S ? Z.jsx(S, {}, y) : Z.jsx(Yy, {});
      }, [y, p.options.component, u.options.defaultComponent]);
    if (f._displayPending) throw s(f, "displayPendingPromise");
    if (f._forcePending) throw s(f, "minPendingPromise");
    if (f.status === "pending") {
      const S = p.options.pendingMinMs ?? u.options.defaultPendingMinMs;
      if (S) {
        const g = u.getMatch(f.id);
        if (g && !g._nonReactive.minPendingPromise) {
          const _ = Ba();
          ((g._nonReactive.minPendingPromise = _),
            setTimeout(() => {
              (_.resolve(), (g._nonReactive.minPendingPromise = void 0));
            }, S));
        }
      }
      throw s(f, "loadPromise");
    }
    if (f.status === "notFound") return (ne(f.error) || Ee(), Hy(u, p, f.error));
    if (f.status === "redirected") throw (_e(f.error) || Ee(), s(f, "loadPromise"));
    if (f.status === "error") throw f.error;
    return m;
  }),
  Yy = at.memo(function () {
    const i = oe(),
      u = at.useContext(Ur);
    let s,
      c = !1,
      f;
    {
      const m = u ? i.stores.matchStores.get(u) : void 0;
      (([s, c] = Ft(m, (S) => [S?.routeId, S?.globalNotFound ?? !1])),
        (f = Ft(i.stores.matchesId, (S) => S[S.findIndex((g) => g === u) + 1])));
    }
    const h = s ? i.routesById[s] : void 0,
      p = i.options.defaultPendingComponent ? Z.jsx(i.options.defaultPendingComponent, {}) : null;
    if (c) return (h || Ee(), Hy(i, h, void 0));
    if (!f) return null;
    const y = Z.jsx(qy, { matchId: f });
    return s === Na ? Z.jsx(at.Suspense, { fallback: p, children: y }) : y;
  });
function pE() {
  const a = oe(),
    i = at.useRef({ router: a, mounted: !1 }),
    [u, s] = at.useState(!1),
    c = Ft(a.stores.isLoading, (g) => g),
    f = Ft(a.stores.hasPending, (g) => g),
    h = oc(c),
    p = c || u || f,
    y = oc(p),
    m = c || f,
    S = oc(m);
  return (
    (a.startTransition = (g) => {
      (s(!0),
        at.startTransition(() => {
          (g(), s(!1));
        }));
    }),
    at.useEffect(() => {
      const g = a.history.subscribe(a.load),
        _ = a.buildLocation({
          to: a.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        na(a.latestLocation.publicHref) !== na(_.publicHref) &&
          a.commitLocation({ ..._, replace: !0 }),
        () => {
          g();
        }
      );
    }, [a, a.history]),
    Hi(() => {
      if ((typeof window < "u" && a.ssr) || (i.current.router === a && i.current.mounted)) return;
      ((i.current = { router: a, mounted: !0 }),
        (async () => {
          try {
            await a.load();
          } catch (_) {
            console.error(_);
          }
        })());
    }, [a]),
    Hi(() => {
      h &&
        !c &&
        a.emit({ type: "onLoad", ...zl(a.stores.location.get(), a.stores.resolvedLocation.get()) });
    }, [h, a, c]),
    Hi(() => {
      S &&
        !m &&
        a.emit({
          type: "onBeforeRouteMount",
          ...zl(a.stores.location.get(), a.stores.resolvedLocation.get()),
        });
    }, [m, S, a]),
    Hi(() => {
      if (y && !p) {
        const g = zl(a.stores.location.get(), a.stores.resolvedLocation.get());
        (a.emit({ type: "onResolved", ...g }),
          zy(() => {
            (a.stores.status.set("idle"), a.stores.resolvedLocation.set(a.stores.location.get()));
          }),
          g.hrefChanged && OS(a));
      }
    }, [p, y, a]),
    null
  );
}
function yE() {
  const a = oe(),
    i = a.routesById[Na].options.pendingComponent ?? a.options.defaultPendingComponent,
    u = i ? Z.jsx(i, {}) : null,
    s = Z.jsxs(typeof document < "u" && a.ssr ? Ml : at.Suspense, {
      fallback: u,
      children: [Z.jsx(pE, {}), Z.jsx(vE, {})],
    });
  return a.options.InnerWrap ? Z.jsx(a.options.InnerWrap, { children: s }) : s;
}
function vE() {
  const a = oe(),
    i = Ft(a.stores.firstId, (c) => c),
    u = Ft(a.stores.loadedAt, (c) => c),
    s = i ? Z.jsx(qy, { matchId: i }) : null;
  return Z.jsx(Ur.Provider, {
    value: i,
    children: a.options.disableGlobalCatchBoundary
      ? s
      : Z.jsx(wc, { getResetKey: () => u, errorComponent: Dc, onCatch: void 0, children: s }),
  });
}
var gE = (a) => ({ createMutableStore: Rp, createReadonlyStore: Rp, batch: zy }),
  SE = (a) => new bE(a),
  bE = class extends vS {
    constructor(a) {
      super(a, gE);
    }
  };
function _E({ router: a, children: i, ...u }) {
  Object.keys(u).length > 0 &&
    a.update({ ...a.options, ...u, context: { ...a.options.context, ...u.context } });
  const s = Z.jsx(My.Provider, { value: a, children: i });
  return a.options.Wrap ? Z.jsx(a.options.Wrap, { children: s }) : s;
}
function EE({ router: a, ...i }) {
  return Z.jsx(_E, { router: a, ...i, children: Z.jsx(yE, {}) });
}
function Gy({ tag: a, attrs: i, children: u, nonce: s }) {
  switch (a) {
    case "title":
      return Z.jsx("title", { ...i, suppressHydrationWarning: !0, children: u });
    case "meta":
      return Z.jsx("meta", { ...i, suppressHydrationWarning: !0 });
    case "link":
      return Z.jsx("link", { ...i, nonce: s, suppressHydrationWarning: !0 });
    case "style":
      return Z.jsx("style", { ...i, dangerouslySetInnerHTML: { __html: u }, nonce: s });
    case "script":
      return Z.jsx(RE, { attrs: i, children: u });
    default:
      return null;
  }
}
function RE({ attrs: a, children: i }) {
  oe();
  const u = Lc(),
    s =
      typeof a?.type == "string" &&
      a.type !== "" &&
      a.type !== "text/javascript" &&
      a.type !== "module";
  if (
    (at.useEffect(() => {
      if (!s) {
        if (a?.src) {
          const c = (() => {
            try {
              const h = document.baseURI || window.location.href;
              return new URL(a.src, h).href;
            } catch {
              return a.src;
            }
          })();
          if (Array.from(document.querySelectorAll("script[src]")).find((h) => h.src === c)) return;
          const f = document.createElement("script");
          for (const [h, p] of Object.entries(a))
            h !== "suppressHydrationWarning" &&
              p !== void 0 &&
              p !== !1 &&
              f.setAttribute(h, typeof p == "boolean" ? "" : String(p));
          return (
            document.head.appendChild(f),
            () => {
              f.parentNode && f.parentNode.removeChild(f);
            }
          );
        }
        if (typeof i == "string") {
          const c = typeof a?.type == "string" ? a.type : "text/javascript",
            f = typeof a?.nonce == "string" ? a.nonce : void 0;
          if (
            Array.from(document.querySelectorAll("script:not([src])")).find((p) => {
              if (!(p instanceof HTMLScriptElement)) return !1;
              const y = p.getAttribute("type") ?? "text/javascript",
                m = p.getAttribute("nonce") ?? void 0;
              return p.textContent === i && y === c && m === f;
            })
          )
            return;
          const h = document.createElement("script");
          if (((h.textContent = i), a))
            for (const [p, y] of Object.entries(a))
              p !== "suppressHydrationWarning" &&
                y !== void 0 &&
                y !== !1 &&
                h.setAttribute(p, typeof y == "boolean" ? "" : String(y));
          return (
            document.head.appendChild(h),
            () => {
              h.parentNode && h.parentNode.removeChild(h);
            }
          );
        }
      }
    }, [a, i, s]),
    s && typeof i == "string")
  )
    return Z.jsx("script", {
      ...a,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: i },
    });
  if (!u) {
    if (a?.src) return Z.jsx("script", { ...a, suppressHydrationWarning: !0 });
    if (typeof i == "string")
      return Z.jsx("script", {
        ...a,
        dangerouslySetInnerHTML: { __html: i },
        suppressHydrationWarning: !0,
      });
  }
  return null;
}
var TE = (a) => {
  const i = oe(),
    u = i.options.ssr?.nonce,
    s = Ft(i.stores.matches, (m) => m.map((S) => S.meta).filter(Boolean), be),
    c = at.useMemo(() => {
      const m = [],
        S = {};
      let g;
      for (let _ = s.length - 1; _ >= 0; _--) {
        const E = s[_];
        for (let O = E.length - 1; O >= 0; O--) {
          const w = E[O];
          if (w)
            if (w.title) g || (g = { tag: "title", children: w.title });
            else if ("script:ld+json" in w)
              try {
                const A = JSON.stringify(w["script:ld+json"]);
                m.push({ tag: "script", attrs: { type: "application/ld+json" }, children: C0(A) });
              } catch {}
            else {
              const A = w.name ?? w.property;
              if (A) {
                if (S[A]) continue;
                S[A] = !0;
              }
              m.push({ tag: "meta", attrs: { ...w, nonce: u } });
            }
        }
      }
      return (
        g && m.push(g),
        u && m.push({ tag: "meta", attrs: { property: "csp-nonce", content: u } }),
        m.reverse(),
        m
      );
    }, [s, u]),
    f = Ft(
      i.stores.matches,
      (m) => {
        const S = m
            .map((E) => E.links)
            .filter(Boolean)
            .flat(1)
            .map((E) => ({ tag: "link", attrs: { ...E, nonce: u } })),
          g = i.ssr?.manifest,
          _ = m
            .map((E) => g?.routes[E.routeId]?.assets ?? [])
            .filter(Boolean)
            .flat(1)
            .filter((E) => E.tag === "link")
            .map((E) => ({
              tag: "link",
              attrs: {
                ...E.attrs,
                crossOrigin: rp(a, "stylesheet") ?? E.attrs?.crossOrigin,
                suppressHydrationWarning: !0,
                nonce: u,
              },
            }));
        return [...S, ..._];
      },
      be,
    ),
    h = Ft(
      i.stores.matches,
      (m) => {
        const S = [];
        return (
          m
            .map((g) => i.looseRoutesById[g.routeId])
            .forEach((g) =>
              i.ssr?.manifest?.routes[g.id]?.preloads?.filter(Boolean).forEach((_) => {
                const E = xS(_);
                S.push({
                  tag: "link",
                  attrs: {
                    rel: "modulepreload",
                    href: E.href,
                    crossOrigin: rp(a, "modulepreload") ?? E.crossOrigin,
                    nonce: u,
                  },
                });
              }),
            ),
          S
        );
      },
      be,
    ),
    p = Ft(
      i.stores.matches,
      (m) =>
        m
          .map((S) => S.styles)
          .flat(1)
          .filter(Boolean)
          .map(({ children: S, ...g }) => ({
            tag: "style",
            attrs: { ...g, nonce: u },
            children: S,
          })),
      be,
    ),
    y = Ft(
      i.stores.matches,
      (m) =>
        m
          .map((S) => S.headScripts)
          .flat(1)
          .filter(Boolean)
          .map(({ children: S, ...g }) => ({
            tag: "script",
            attrs: { ...g, nonce: u },
            children: S,
          })),
      be,
    );
  return AE([...c, ...h, ...f, ...p, ...y], (m) => JSON.stringify(m));
};
function AE(a, i) {
  const u = new Set();
  return a.filter((s) => {
    const c = i(s);
    return u.has(c) ? !1 : (u.add(c), !0);
  });
}
function xE(a) {
  const i = TE(a.assetCrossOrigin),
    u = oe().options.ssr?.nonce;
  return Z.jsx(Z.Fragment, {
    children: i.map((s) =>
      at.createElement(Gy, { ...s, key: `tsr-meta-${JSON.stringify(s)}`, nonce: u }),
    ),
  });
}
var ME = () => {
  const a = oe(),
    i = a.options.ssr?.nonce,
    u = (f) => {
      const h = [],
        p = a.ssr?.manifest;
      return p
        ? (f
            .map((y) => a.looseRoutesById[y.routeId])
            .forEach((y) =>
              p.routes[y.id]?.assets
                ?.filter((m) => m.tag === "script")
                .forEach((m) => {
                  h.push({ tag: "script", attrs: { ...m.attrs, nonce: i }, children: m.children });
                }),
            ),
          h)
        : [];
    },
    s = (f) =>
      f
        .map((h) => h.scripts)
        .flat(1)
        .filter(Boolean)
        .map(({ children: h, ...p }) => ({
          tag: "script",
          attrs: { ...p, suppressHydrationWarning: !0, nonce: i },
          children: h,
        })),
    c = Ft(a.stores.matches, u, be);
  return OE(a, Ft(a.stores.matches, s, be), c);
};
function OE(a, i, u) {
  let s;
  a.serverSsr && (s = a.serverSsr.takeBufferedScripts());
  const c = [...i, ...u];
  return (
    s && c.unshift(s),
    Z.jsx(Z.Fragment, {
      children: c.map((f, h) => at.createElement(Gy, { ...f, key: `tsr-scripts-${f.tag}-${h}` })),
    })
  );
}
const zE = "/assets/styles-DCywtOue.css";
function CE() {
  return Z.jsx("div", {
    className: "flex min-h-screen items-center justify-center bg-background px-4",
    children: Z.jsxs("div", {
      className: "max-w-md text-center",
      children: [
        Z.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
        Z.jsx("h2", {
          className: "mt-4 text-xl font-semibold text-foreground",
          children: "Page not found",
        }),
        Z.jsx("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children: "The page you're looking for doesn't exist or has been moved.",
        }),
        Z.jsx("div", {
          className: "mt-6",
          children: Z.jsx(Uc, {
            to: "/",
            className:
              "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
            children: "Go home",
          }),
        }),
      ],
    }),
  });
}
const Ki = rE({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ayrton Pedrosa Advocacia | Advocacia Estratégica" },
      {
        name: "description",
        content:
          "Advocacia especializada em diversas áreas do Direito. Soluções jurídicas para empresas e pessoas físicas com foco em resultados.",
      },
      { name: "author", content: "Ayrton Pedrosa Advocacia" },
      { property: "og:title", content: "Ayrton Pedrosa Advocacia | Advocacia Estratégica" },
      {
        property: "og:description",
        content:
          "Advocacia especializada em diversas áreas do Direito. Soluções jurídicas para empresas e pessoas físicas com foco em resultados.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Ayrton Pedrosa Advocacia | Advocacia Estratégica" },
      {
        name: "twitter:description",
        content:
          "Advocacia especializada em diversas áreas do Direito. Soluções jurídicas para empresas e pessoas físicas com foco em resultados.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e4f90fee-a862-4645-ae81-c13e4296f5f3/id-preview-38c93f09--f9098de7-9c16-4ca9-b189-cf5cf21c3116.lovable.app-1777393605246.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e4f90fee-a862-4645-ae81-c13e4296f5f3/id-preview-38c93f09--f9098de7-9c16-4ca9-b189-cf5cf21c3116.lovable.app-1777393605246.png",
      },
    ],
    links: [{ rel: "stylesheet", href: zE }],
  }),
  shellComponent: wE,
  component: DE,
  notFoundComponent: CE,
});
function wE({ children: a }) {
  return Z.jsxs("html", {
    lang: "en",
    children: [
      Z.jsx("head", { children: Z.jsx(xE, {}) }),
      Z.jsxs("body", { children: [a, Z.jsx(ME, {})] }),
    ],
  });
}
function DE() {
  return Z.jsx(Yy, {});
}
const LE = "modulepreload",
  UE = function (a) {
    return "/" + a;
  },
  zp = {},
  ca = function (i, u, s) {
    let c = Promise.resolve();
    if (u && u.length > 0) {
      let y = function (m) {
        return Promise.all(
          m.map((S) =>
            Promise.resolve(S).then(
              (g) => ({ status: "fulfilled", value: g }),
              (g) => ({ status: "rejected", reason: g }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const h = document.querySelector("meta[property=csp-nonce]"),
        p = h?.nonce || h?.getAttribute("nonce");
      c = y(
        u.map((m) => {
          if (((m = UE(m)), m in zp)) return;
          zp[m] = !0;
          const S = m.endsWith(".css"),
            g = S ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${m}"]${g}`)) return;
          const _ = document.createElement("link");
          if (
            ((_.rel = S ? "stylesheet" : LE),
            S || (_.as = "script"),
            (_.crossOrigin = ""),
            (_.href = m),
            p && _.setAttribute("nonce", p),
            document.head.appendChild(_),
            S)
          )
            return new Promise((E, O) => {
              (_.addEventListener("load", E),
                _.addEventListener("error", () => O(new Error(`Unable to preload CSS for ${m}`))));
            });
        }),
      );
    }
    function f(h) {
      const p = new Event("vite:preloadError", { cancelable: !0 });
      if (((p.payload = h), window.dispatchEvent(p), !p.defaultPrevented)) throw h;
    }
    return c.then((h) => {
      for (const p of h || []) p.status === "rejected" && f(p.reason);
      return i().catch(f);
    });
  },
  NE = () => ca(() => import("./login-qA9FsfLi.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5])),
  jE = sa("/login")({ component: oa(NE, "component") }),
  BE = () => ca(() => import("./dashboard-C4YZvTXn.js"), __vite__mapDeps([6, 4, 7, 8])),
  HE = sa("/dashboard")({ component: oa(BE, "component") }),
  qE = () =>
    ca(
      () => import("./areas-de-atuacao-Cy6LlbYp.js"),
      __vite__mapDeps([9, 10, 4, 1, 11, 3, 2, 12, 5]),
    ),
  YE = sa("/areas-de-atuacao")({ component: oa(qE, "component") }),
  GE = () =>
    ca(() => import("./index-ITSRaNyF.js"), __vite__mapDeps([13, 10, 4, 1, 11, 3, 2, 12, 14])),
  VE = sa("/")({
    component: oa(GE, "component"),
    loader: () => ({ year: new Date().getFullYear() }),
  }),
  XE = () => ca(() => import("./index-BQHj7eJk.js"), __vite__mapDeps([15, 1, 16, 4, 7, 17, 3, 11])),
  QE = sa("/dashboard/")({ component: oa(XE, "component") }),
  ZE = () =>
    ca(() => import("./clients-Dtt5AyZh.js"), __vite__mapDeps([18, 1, 16, 4, 8, 3, 19, 14])),
  KE = sa("/dashboard/clients")({ component: oa(ZE, "component") }),
  JE = () =>
    ca(() => import("./cases-VEy8A-F4.js"), __vite__mapDeps([20, 1, 16, 4, 8, 3, 19, 17, 14])),
  kE = sa("/dashboard/cases")({ component: oa(JE, "component") }),
  PE = () =>
    ca(() => import("./agenda-CmIbY1E_.js"), __vite__mapDeps([21, 1, 4, 16, 11, 17, 12, 19])),
  FE = sa("/dashboard/agenda")({ component: oa(PE, "component") }),
  $E = jE.update({ id: "/login", path: "/login", getParentRoute: () => Ki }),
  Ji = HE.update({ id: "/dashboard", path: "/dashboard", getParentRoute: () => Ki }),
  IE = YE.update({ id: "/areas-de-atuacao", path: "/areas-de-atuacao", getParentRoute: () => Ki }),
  WE = VE.update({ id: "/", path: "/", getParentRoute: () => Ki }),
  t2 = QE.update({ id: "/", path: "/", getParentRoute: () => Ji }),
  e2 = KE.update({ id: "/clients", path: "/clients", getParentRoute: () => Ji }),
  n2 = kE.update({ id: "/cases", path: "/cases", getParentRoute: () => Ji }),
  a2 = FE.update({ id: "/agenda", path: "/agenda", getParentRoute: () => Ji }),
  l2 = {
    DashboardAgendaRoute: a2,
    DashboardCasesRoute: n2,
    DashboardClientsRoute: e2,
    DashboardIndexRoute: t2,
  },
  i2 = Ji._addFileChildren(l2),
  u2 = { IndexRoute: WE, AreasDeAtuacaoRoute: IE, DashboardRoute: i2, LoginRoute: $E },
  r2 = Ki._addFileChildren(u2);
function s2({ error: a, reset: i }) {
  const u = oe();
  return Z.jsx("div", {
    className: "flex min-h-screen items-center justify-center bg-background px-4",
    children: Z.jsxs("div", {
      className: "max-w-md text-center",
      children: [
        Z.jsx("div", {
          className:
            "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10",
          children: Z.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-8 w-8 text-destructive",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: Z.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
            }),
          }),
        }),
        Z.jsx("h1", {
          className: "text-2xl font-bold tracking-tight text-foreground",
          children: "Something went wrong",
        }),
        Z.jsx("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children: "An unexpected error occurred. Please try again.",
        }),
        !1,
        Z.jsxs("div", {
          className: "mt-6 flex items-center justify-center gap-3",
          children: [
            Z.jsx("button", {
              onClick: () => {
                (u.invalidate(), i());
              },
              className:
                "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
              children: "Try again",
            }),
            Z.jsx("a", {
              href: "/",
              className:
                "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
              children: "Go home",
            }),
          ],
        }),
      ],
    }),
  });
}
const o2 = () =>
  SE({
    routeTree: r2,
    context: {},
    scrollRestoration: !0,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: s2,
  });
async function c2() {
  const a = await o2();
  let i;
  return (
    (i = []),
    (window.__TSS_START_OPTIONS__ = { serializationAdapters: i }),
    i.push(A_),
    a.options.serializationAdapters && i.push(...a.options.serializationAdapters),
    a.update({ basepath: "", serializationAdapters: i }),
    a.stores.matchesId.get().length || (await M_(a)),
    a
  );
}
async function f2() {
  const a = await c2();
  return (window.$_TSR?.h(), a);
}
var pc;
function d2() {
  return (pc || (pc = f2()), Z.jsx(w_, { promise: pc, children: (a) => Z.jsx(EE, { router: a }) }));
}
at.startTransition(() => {
  y0.hydrateRoot(document, Z.jsx(at.StrictMode, { children: Z.jsx(d2, {}) }));
});
export { Uc as L, Yy as O, h2 as R, Dl as a, v2 as b, VE as c, at as d, Z as j, By as r, Ny as u };
