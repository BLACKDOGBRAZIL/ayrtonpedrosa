import { c as Z } from "./createLucideIcon-_P2Vc871.js";
import { d as l, j as u, R as vo, r as xo, a as E, b as yo, L as je } from "./index-0qK1wPb4.js";
import { a as st, u as oe, c as Se, B as $n } from "./button-CmpoKRFv.js";
import { C as et } from "./chevron-right-CT9zOBCR.js";
import {
  M as Cs,
  i as Vt,
  u as wo,
  P as Ss,
  b as Rs,
  a as Ns,
  L as Ms,
  m as ne,
} from "./proxy-CNoJBy2S.js";
import { I as Ut } from "./input-BJpobJm8.js";
import { M as As } from "./map-pin-RWc1RILk.js";
function Bn(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Ps(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((r) => {
      const s = Bn(r, t);
      return (!n && typeof s == "function" && (n = !0), s);
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const s = o[r];
          typeof s == "function" ? s() : Bn(e[r], null);
        }
      };
  };
}
function _s(...e) {
  return l.useCallback(Ps(...e), e);
}
class Ts extends l.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (Vt(n) && t.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const o = n.offsetParent,
        r = (Vt(o) && o.offsetWidth) || 0,
        s = (Vt(o) && o.offsetHeight) || 0,
        c = getComputedStyle(n),
        i = this.props.sizeRef.current;
      ((i.height = parseFloat(c.height)),
        (i.width = parseFloat(c.width)),
        (i.top = n.offsetTop),
        (i.left = n.offsetLeft),
        (i.right = r - i.width - i.left),
        (i.bottom = s - i.height - i.top));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function ks({ children: e, isPresent: t, anchorX: n, anchorY: o, root: r, pop: s }) {
  const c = l.useId(),
    i = l.useRef(null),
    p = l.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
    { nonce: d } = l.useContext(Cs),
    f = e.props?.ref ?? e?.ref,
    a = _s(i, f);
  return (
    l.useInsertionEffect(() => {
      const { width: m, height: h, top: v, left: g, right: y, bottom: x } = p.current;
      if (t || s === !1 || !i.current || !m || !h) return;
      const C = n === "left" ? `left: ${g}` : `right: ${y}`,
        b = o === "bottom" ? `bottom: ${x}` : `top: ${v}`;
      i.current.dataset.motionPopId = c;
      const w = document.createElement("style");
      d && (w.nonce = d);
      const S = r ?? document.head;
      return (
        S.appendChild(w),
        w.sheet &&
          w.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${h}px !important;
            ${C}px !important;
            ${b}px !important;
          }
        `),
        () => {
          (i.current?.removeAttribute("data-motion-pop-id"), S.contains(w) && S.removeChild(w));
        }
      );
    }, [t]),
    u.jsx(Ts, {
      isPresent: t,
      childRef: i,
      sizeRef: p,
      pop: s,
      children: s === !1 ? e : l.cloneElement(e, { ref: a }),
    })
  );
}
const Os = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: o,
  custom: r,
  presenceAffectsLayout: s,
  mode: c,
  anchorX: i,
  anchorY: p,
  root: d,
}) => {
  const f = wo(js),
    a = l.useId();
  let m = !0,
    h = l.useMemo(
      () => (
        (m = !1),
        {
          id: a,
          initial: t,
          isPresent: n,
          custom: r,
          onExitComplete: (v) => {
            f.set(v, !0);
            for (const g of f.values()) if (!g) return;
            o && o();
          },
          register: (v) => (f.set(v, !1), () => f.delete(v)),
        }
      ),
      [n, f, o],
    );
  return (
    s && m && (h = { ...h }),
    l.useMemo(() => {
      f.forEach((v, g) => f.set(g, !1));
    }, [n]),
    l.useEffect(() => {
      !n && !f.size && o && o();
    }, [n]),
    (e = u.jsx(ks, {
      pop: c === "popLayout",
      isPresent: n,
      anchorX: i,
      anchorY: p,
      root: d,
      children: e,
    })),
    u.jsx(Ss.Provider, { value: h, children: e })
  );
};
function js() {
  return new Map();
}
const ht = (e) => e.key || "";
function Wn(e) {
  const t = [];
  return (
    l.Children.forEach(e, (n) => {
      l.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const mn = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: o,
  presenceAffectsLayout: r = !0,
  mode: s = "sync",
  propagate: c = !1,
  anchorX: i = "left",
  anchorY: p = "top",
  root: d,
}) => {
  const [f, a] = Rs(c),
    m = l.useMemo(() => Wn(e), [e]),
    h = c && !f ? [] : m.map(ht),
    v = l.useRef(!0),
    g = l.useRef(m),
    y = wo(() => new Map()),
    x = l.useRef(new Set()),
    [C, b] = l.useState(m),
    [w, S] = l.useState(m);
  Ns(() => {
    ((v.current = !1), (g.current = m));
    for (let A = 0; A < w.length; A++) {
      const _ = ht(w[A]);
      h.includes(_) ? (y.delete(_), x.current.delete(_)) : y.get(_) !== !0 && y.set(_, !1);
    }
  }, [w, h.length, h.join("-")]);
  const N = [];
  if (m !== C) {
    let A = [...m];
    for (let _ = 0; _ < w.length; _++) {
      const k = w[_],
        L = ht(k);
      h.includes(L) || (A.splice(_, 0, k), N.push(k));
    }
    return (s === "wait" && N.length && (A = N), S(Wn(A)), b(m), null);
  }
  const { forceRender: R } = l.useContext(Ms);
  return u.jsx(u.Fragment, {
    children: w.map((A) => {
      const _ = ht(A),
        k = c && !f ? !1 : m === w || h.includes(_),
        L = () => {
          if (x.current.has(_)) return;
          if (y.has(_)) (x.current.add(_), y.set(_, !0));
          else return;
          let $ = !0;
          (y.forEach((D) => {
            D || ($ = !1);
          }),
            $ && (R?.(), S(g.current), c && a?.(), o && o()));
        };
      return u.jsx(
        Os,
        {
          isPresent: k,
          initial: !v.current || n ? void 0 : !1,
          custom: t,
          presenceAffectsLayout: r,
          mode: s,
          root: d,
          onExitComplete: k ? void 0 : L,
          anchorX: i,
          anchorY: p,
          children: A,
        },
        _,
      );
    }),
  });
};
const Is = [
    ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
    ["path", { d: "M12 19V5", key: "x0mq9r" }],
  ],
  Ds = Z("arrow-up", Is);
const Ls = [
    ["path", { d: "M10 12h4", key: "a56b0p" }],
    ["path", { d: "M10 8h4", key: "1sr2af" }],
    ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
    [
      "path",
      {
        d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
        key: "secmi2",
      },
    ],
    ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }],
  ],
  dd = Z("building-2", Ls);
const Fs = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  $s = Z("check", Fs);
const Bs = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  Ws = Z("chevron-down", Bs);
const Hs = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  zs = Z("circle-check", Hs);
const Vs = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]],
  Us = Z("circle", Vs);
const Ks = [
    ["path", { d: "m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381", key: "pgg06f" }],
    ["path", { d: "m16 16 6-6", key: "vzrcl6" }],
    ["path", { d: "m21.5 10.5-8-8", key: "a17d9x" }],
    ["path", { d: "m8 8 6-6", key: "18bi4p" }],
    ["path", { d: "m8.5 7.5 8 8", key: "1oyaui" }],
  ],
  fd = Z("gavel", Ks);
const Ys = [
    ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
    ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  bo = Z("instagram", Ys);
const Gs = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  Xs = Z("loader-circle", Gs);
const qs = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }],
  ],
  Eo = Z("mail", qs);
const Zs = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  Qs = Z("menu", Zs);
const Js = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  Co = Z("phone", Js);
const ea = [
    ["path", { d: "M15 12h-5", key: "r7krc0" }],
    ["path", { d: "M15 8h-5", key: "1khuty" }],
    ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
    [
      "path",
      {
        d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
        key: "1ph1d7",
      },
    ],
  ],
  pd = Z("scroll-text", ea);
const ta = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3",
      },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
  ],
  na = Z("send", ta);
const oa = [
    [
      "path",
      {
        d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",
        key: "cpyugq",
      },
    ],
    ["path", { d: "M12 22v-3", key: "kmzjlo" }],
  ],
  md = Z("tree-pine", oa);
const ra = [
    ["path", { d: "M2 22 16 8", key: "60hf96" }],
    [
      "path",
      {
        d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
        key: "1rdhi6",
      },
    ],
    [
      "path",
      {
        d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
        key: "1sdzmb",
      },
    ],
    [
      "path",
      {
        d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
        key: "eoatbi",
      },
    ],
    ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z", key: "19rau1" }],
    [
      "path",
      {
        d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
        key: "tc8ph9",
      },
    ],
    [
      "path",
      {
        d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
        key: "2m8kc5",
      },
    ],
    [
      "path",
      {
        d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
        key: "vex3ng",
      },
    ],
  ],
  hd = Z("wheat", ra);
const sa = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  aa = Z("x", sa);
function F(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (r) {
    if ((e?.(r), n === !1 || !r.defaultPrevented)) return t?.(r);
  };
}
function at(e, t = []) {
  let n = [];
  function o(s, c) {
    const i = l.createContext(c),
      p = n.length;
    n = [...n, c];
    const d = (a) => {
      const { scope: m, children: h, ...v } = a,
        g = m?.[e]?.[p] || i,
        y = l.useMemo(() => v, Object.values(v));
      return u.jsx(g.Provider, { value: y, children: h });
    };
    d.displayName = s + "Provider";
    function f(a, m) {
      const h = m?.[e]?.[p] || i,
        v = l.useContext(h);
      if (v) return v;
      if (c !== void 0) return c;
      throw new Error(`\`${a}\` must be used within \`${s}\``);
    }
    return [d, f];
  }
  const r = () => {
    const s = n.map((c) => l.createContext(c));
    return function (i) {
      const p = i?.[e] || s;
      return l.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: p } }), [i, p]);
    };
  };
  return ((r.scopeName = e), [o, ia(r, ...t)]);
}
function ia(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((r) => ({ useScope: r(), scopeName: r.scopeName }));
    return function (s) {
      const c = o.reduce((i, { useScope: p, scopeName: d }) => {
        const a = p(s)[`__scope${d}`];
        return { ...i, ...a };
      }, {});
      return l.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
var _e = globalThis?.document ? l.useLayoutEffect : () => {},
  ca = vo[" useInsertionEffect ".trim().toString()] || _e;
function So({ prop: e, defaultProp: t, onChange: n = () => {}, caller: o }) {
  const [r, s, c] = la({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    p = i ? e : r;
  {
    const f = l.useRef(e !== void 0);
    l.useEffect(() => {
      const a = f.current;
      (a !== i &&
        console.warn(
          `${o} is changing from ${a ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (f.current = i));
    }, [i, o]);
  }
  const d = l.useCallback(
    (f) => {
      if (i) {
        const a = ua(f) ? f(e) : f;
        a !== e && c.current?.(a);
      } else s(f);
    },
    [i, e, s, c],
  );
  return [p, d];
}
function la({ defaultProp: e, onChange: t }) {
  const [n, o] = l.useState(e),
    r = l.useRef(n),
    s = l.useRef(t);
  return (
    ca(() => {
      s.current = t;
    }, [t]),
    l.useEffect(() => {
      r.current !== n && (s.current?.(n), (r.current = n));
    }, [n, r]),
    [n, o, s]
  );
}
function ua(e) {
  return typeof e == "function";
}
function da(e) {
  const t = fa(e),
    n = l.forwardRef((o, r) => {
      const { children: s, ...c } = o,
        i = l.Children.toArray(s),
        p = i.find(ma);
      if (p) {
        const d = p.props.children,
          f = i.map((a) =>
            a === p
              ? l.Children.count(d) > 1
                ? l.Children.only(null)
                : l.isValidElement(d)
                  ? d.props.children
                  : null
              : a,
          );
        return u.jsx(t, {
          ...c,
          ref: r,
          children: l.isValidElement(d) ? l.cloneElement(d, void 0, f) : null,
        });
      }
      return u.jsx(t, { ...c, ref: r, children: s });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function fa(e) {
  const t = l.forwardRef((n, o) => {
    const { children: r, ...s } = n;
    if (l.isValidElement(r)) {
      const c = ga(r),
        i = ha(s, r.props);
      return (r.type !== l.Fragment && (i.ref = o ? st(o, c) : c), l.cloneElement(r, i));
    }
    return l.Children.count(r) > 1 ? l.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var pa = Symbol("radix.slottable");
function ma(e) {
  return (
    l.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === pa
  );
}
function ha(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o],
      s = t[o];
    /^on[A-Z]/.test(o)
      ? r && s
        ? (n[o] = (...i) => {
            const p = s(...i);
            return (r(...i), p);
          })
        : r && (n[o] = r)
      : o === "style"
        ? (n[o] = { ...r, ...s })
        : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function ga(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var va = [
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
    "select",
    "span",
    "svg",
    "ul",
  ],
  J = va.reduce((e, t) => {
    const n = da(`Primitive.${t}`),
      o = l.forwardRef((r, s) => {
        const { asChild: c, ...i } = r,
          p = c ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          u.jsx(p, { ...i, ref: s })
        );
      });
    return ((o.displayName = `Primitive.${t}`), { ...e, [t]: o });
  }, {});
function Ro(e, t) {
  e && xo.flushSync(() => e.dispatchEvent(t));
}
function Hn(e) {
  const t = xa(e),
    n = l.forwardRef((o, r) => {
      const { children: s, ...c } = o,
        i = l.Children.toArray(s),
        p = i.find(wa);
      if (p) {
        const d = p.props.children,
          f = i.map((a) =>
            a === p
              ? l.Children.count(d) > 1
                ? l.Children.only(null)
                : l.isValidElement(d)
                  ? d.props.children
                  : null
              : a,
          );
        return u.jsx(t, {
          ...c,
          ref: r,
          children: l.isValidElement(d) ? l.cloneElement(d, void 0, f) : null,
        });
      }
      return u.jsx(t, { ...c, ref: r, children: s });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function xa(e) {
  const t = l.forwardRef((n, o) => {
    const { children: r, ...s } = n;
    if (l.isValidElement(r)) {
      const c = Ea(r),
        i = ba(s, r.props);
      return (r.type !== l.Fragment && (i.ref = o ? st(o, c) : c), l.cloneElement(r, i));
    }
    return l.Children.count(r) > 1 ? l.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var ya = Symbol("radix.slottable");
function wa(e) {
  return (
    l.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === ya
  );
}
function ba(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o],
      s = t[o];
    /^on[A-Z]/.test(o)
      ? r && s
        ? (n[o] = (...i) => {
            const p = s(...i);
            return (r(...i), p);
          })
        : r && (n[o] = r)
      : o === "style"
        ? (n[o] = { ...r, ...s })
        : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Ea(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function No(e) {
  const t = e + "CollectionProvider",
    [n, o] = at(t),
    [r, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    c = (g) => {
      const { scope: y, children: x } = g,
        C = E.useRef(null),
        b = E.useRef(new Map()).current;
      return u.jsx(r, { scope: y, itemMap: b, collectionRef: C, children: x });
    };
  c.displayName = t;
  const i = e + "CollectionSlot",
    p = Hn(i),
    d = E.forwardRef((g, y) => {
      const { scope: x, children: C } = g,
        b = s(i, x),
        w = oe(y, b.collectionRef);
      return u.jsx(p, { ref: w, children: C });
    });
  d.displayName = i;
  const f = e + "CollectionItemSlot",
    a = "data-radix-collection-item",
    m = Hn(f),
    h = E.forwardRef((g, y) => {
      const { scope: x, children: C, ...b } = g,
        w = E.useRef(null),
        S = oe(y, w),
        N = s(f, x);
      return (
        E.useEffect(
          () => (
            N.itemMap.set(w, { ref: w, ...b }),
            () => {
              N.itemMap.delete(w);
            }
          ),
        ),
        u.jsx(m, { [a]: "", ref: S, children: C })
      );
    });
  h.displayName = f;
  function v(g) {
    const y = s(e + "CollectionConsumer", g);
    return E.useCallback(() => {
      const C = y.collectionRef.current;
      if (!C) return [];
      const b = Array.from(C.querySelectorAll(`[${a}]`));
      return Array.from(y.itemMap.values()).sort(
        (N, R) => b.indexOf(N.ref.current) - b.indexOf(R.ref.current),
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [{ Provider: c, Slot: d, ItemSlot: h }, v, o];
}
var Ca = l.createContext(void 0);
function Mo(e) {
  const t = l.useContext(Ca);
  return e || t || "ltr";
}
function be(e) {
  const t = l.useRef(e);
  return (
    l.useEffect(() => {
      t.current = e;
    }),
    l.useMemo(
      () =>
        (...n) =>
          t.current?.(...n),
      [],
    )
  );
}
function Sa(e, t = globalThis?.document) {
  const n = be(e);
  l.useEffect(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return (
      t.addEventListener("keydown", o, { capture: !0 }),
      () => t.removeEventListener("keydown", o, { capture: !0 })
    );
  }, [n, t]);
}
var Ra = "DismissableLayer",
  rn = "dismissableLayer.update",
  Na = "dismissableLayer.pointerDownOutside",
  Ma = "dismissableLayer.focusOutside",
  zn,
  Ao = l.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Po = l.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: r,
        onFocusOutside: s,
        onInteractOutside: c,
        onDismiss: i,
        ...p
      } = e,
      d = l.useContext(Ao),
      [f, a] = l.useState(null),
      m = f?.ownerDocument ?? globalThis?.document,
      [, h] = l.useState({}),
      v = oe(t, (R) => a(R)),
      g = Array.from(d.layers),
      [y] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1),
      x = g.indexOf(y),
      C = f ? g.indexOf(f) : -1,
      b = d.layersWithOutsidePointerEventsDisabled.size > 0,
      w = C >= x,
      S = _a((R) => {
        const A = R.target,
          _ = [...d.branches].some((k) => k.contains(A));
        !w || _ || (r?.(R), c?.(R), R.defaultPrevented || i?.());
      }, m),
      N = Ta((R) => {
        const A = R.target;
        [...d.branches].some((k) => k.contains(A)) || (s?.(R), c?.(R), R.defaultPrevented || i?.());
      }, m);
    return (
      Sa((R) => {
        C === d.layers.size - 1 && (o?.(R), !R.defaultPrevented && i && (R.preventDefault(), i()));
      }, m),
      l.useEffect(() => {
        if (f)
          return (
            n &&
              (d.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((zn = m.body.style.pointerEvents), (m.body.style.pointerEvents = "none")),
              d.layersWithOutsidePointerEventsDisabled.add(f)),
            d.layers.add(f),
            Vn(),
            () => {
              n &&
                d.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (m.body.style.pointerEvents = zn);
            }
          );
      }, [f, m, n, d]),
      l.useEffect(
        () => () => {
          f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), Vn());
        },
        [f, d],
      ),
      l.useEffect(() => {
        const R = () => h({});
        return (document.addEventListener(rn, R), () => document.removeEventListener(rn, R));
      }, []),
      u.jsx(J.div, {
        ...p,
        ref: v,
        style: { pointerEvents: b ? (w ? "auto" : "none") : void 0, ...e.style },
        onFocusCapture: F(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: F(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: F(e.onPointerDownCapture, S.onPointerDownCapture),
      })
    );
  });
Po.displayName = Ra;
var Aa = "DismissableLayerBranch",
  Pa = l.forwardRef((e, t) => {
    const n = l.useContext(Ao),
      o = l.useRef(null),
      r = oe(t, o);
    return (
      l.useEffect(() => {
        const s = o.current;
        if (s)
          return (
            n.branches.add(s),
            () => {
              n.branches.delete(s);
            }
          );
      }, [n.branches]),
      u.jsx(J.div, { ...e, ref: r })
    );
  });
Pa.displayName = Aa;
function _a(e, t = globalThis?.document) {
  const n = be(e),
    o = l.useRef(!1),
    r = l.useRef(() => {});
  return (
    l.useEffect(() => {
      const s = (i) => {
          if (i.target && !o.current) {
            let p = function () {
              _o(Na, n, d, { discrete: !0 });
            };
            const d = { originalEvent: i };
            i.pointerType === "touch"
              ? (t.removeEventListener("click", r.current),
                (r.current = p),
                t.addEventListener("click", r.current, { once: !0 }))
              : p();
          } else t.removeEventListener("click", r.current);
          o.current = !1;
        },
        c = window.setTimeout(() => {
          t.addEventListener("pointerdown", s);
        }, 0);
      return () => {
        (window.clearTimeout(c),
          t.removeEventListener("pointerdown", s),
          t.removeEventListener("click", r.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (o.current = !0) }
  );
}
function Ta(e, t = globalThis?.document) {
  const n = be(e),
    o = l.useRef(!1);
  return (
    l.useEffect(() => {
      const r = (s) => {
        s.target && !o.current && _o(Ma, n, { originalEvent: s }, { discrete: !1 });
      };
      return (t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r));
    }, [t, n]),
    { onFocusCapture: () => (o.current = !0), onBlurCapture: () => (o.current = !1) }
  );
}
function Vn() {
  const e = new CustomEvent(rn);
  document.dispatchEvent(e);
}
function _o(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target,
    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && r.addEventListener(e, t, { once: !0 }), o ? Ro(r, s) : r.dispatchEvent(s));
}
var Kt = 0;
function ka() {
  l.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Un()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Un()),
      Kt++,
      () => {
        (Kt === 1 &&
          document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()),
          Kt--);
      }
    );
  }, []);
}
function Un() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var Yt = "focusScope.autoFocusOnMount",
  Gt = "focusScope.autoFocusOnUnmount",
  Kn = { bubbles: !1, cancelable: !0 },
  Oa = "FocusScope",
  To = l.forwardRef((e, t) => {
    const { loop: n = !1, trapped: o = !1, onMountAutoFocus: r, onUnmountAutoFocus: s, ...c } = e,
      [i, p] = l.useState(null),
      d = be(r),
      f = be(s),
      a = l.useRef(null),
      m = oe(t, (g) => p(g)),
      h = l.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (l.useEffect(() => {
      if (o) {
        let g = function (b) {
            if (h.paused || !i) return;
            const w = b.target;
            i.contains(w) ? (a.current = w) : Pe(a.current, { select: !0 });
          },
          y = function (b) {
            if (h.paused || !i) return;
            const w = b.relatedTarget;
            w !== null && (i.contains(w) || Pe(a.current, { select: !0 }));
          },
          x = function (b) {
            if (document.activeElement === document.body)
              for (const S of b) S.removedNodes.length > 0 && Pe(i);
          };
        (document.addEventListener("focusin", g), document.addEventListener("focusout", y));
        const C = new MutationObserver(x);
        return (
          i && C.observe(i, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener("focusin", g),
              document.removeEventListener("focusout", y),
              C.disconnect());
          }
        );
      }
    }, [o, i, h.paused]),
      l.useEffect(() => {
        if (i) {
          Gn.add(h);
          const g = document.activeElement;
          if (!i.contains(g)) {
            const x = new CustomEvent(Yt, Kn);
            (i.addEventListener(Yt, d),
              i.dispatchEvent(x),
              x.defaultPrevented ||
                (ja($a(ko(i)), { select: !0 }), document.activeElement === g && Pe(i)));
          }
          return () => {
            (i.removeEventListener(Yt, d),
              setTimeout(() => {
                const x = new CustomEvent(Gt, Kn);
                (i.addEventListener(Gt, f),
                  i.dispatchEvent(x),
                  x.defaultPrevented || Pe(g ?? document.body, { select: !0 }),
                  i.removeEventListener(Gt, f),
                  Gn.remove(h));
              }, 0));
          };
        }
      }, [i, d, f, h]));
    const v = l.useCallback(
      (g) => {
        if ((!n && !o) || h.paused) return;
        const y = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey,
          x = document.activeElement;
        if (y && x) {
          const C = g.currentTarget,
            [b, w] = Ia(C);
          b && w
            ? !g.shiftKey && x === w
              ? (g.preventDefault(), n && Pe(b, { select: !0 }))
              : g.shiftKey && x === b && (g.preventDefault(), n && Pe(w, { select: !0 }))
            : x === C && g.preventDefault();
        }
      },
      [n, o, h.paused],
    );
    return u.jsx(J.div, { tabIndex: -1, ...c, ref: m, onKeyDown: v });
  });
To.displayName = Oa;
function ja(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e) if ((Pe(o, { select: t }), document.activeElement !== n)) return;
}
function Ia(e) {
  const t = ko(e),
    n = Yn(t, e),
    o = Yn(t.reverse(), e);
  return [n, o];
}
function ko(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (o) => {
        const r = o.tagName === "INPUT" && o.type === "hidden";
        return o.disabled || o.hidden || r
          ? NodeFilter.FILTER_SKIP
          : o.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Yn(e, t) {
  for (const n of e) if (!Da(n, { upTo: t })) return n;
}
function Da(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function La(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Pe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== n && La(e) && t && e.select());
  }
}
var Gn = Fa();
function Fa() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      (t !== n && n?.pause(), (e = Xn(e, t)), e.unshift(t));
    },
    remove(t) {
      ((e = Xn(e, t)), e[0]?.resume());
    },
  };
}
function Xn(e, t) {
  const n = [...e],
    o = n.indexOf(t);
  return (o !== -1 && n.splice(o, 1), n);
}
function $a(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ba = vo[" useId ".trim().toString()] || (() => {}),
  Wa = 0;
function sn(e) {
  const [t, n] = l.useState(Ba());
  return (
    _e(() => {
      n((o) => o ?? String(Wa++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
const Ha = ["top", "right", "bottom", "left"],
  Te = Math.min,
  ae = Math.max,
  Mt = Math.round,
  gt = Math.floor,
  xe = (e) => ({ x: e, y: e }),
  za = { left: "right", right: "left", bottom: "top", top: "bottom" };
function an(e, t, n) {
  return ae(e, Te(t, n));
}
function Ee(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ce(e) {
  return e.split("-")[0];
}
function Ze(e) {
  return e.split("-")[1];
}
function hn(e) {
  return e === "x" ? "y" : "x";
}
function gn(e) {
  return e === "y" ? "height" : "width";
}
function ve(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function vn(e) {
  return hn(ve(e));
}
function Va(e, t, n) {
  n === void 0 && (n = !1);
  const o = Ze(e),
    r = vn(e),
    s = gn(r);
  let c =
    r === "x" ? (o === (n ? "end" : "start") ? "right" : "left") : o === "start" ? "bottom" : "top";
  return (t.reference[s] > t.floating[s] && (c = At(c)), [c, At(c)]);
}
function Ua(e) {
  const t = At(e);
  return [cn(e), t, cn(t)];
}
function cn(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const qn = ["left", "right"],
  Zn = ["right", "left"],
  Ka = ["top", "bottom"],
  Ya = ["bottom", "top"];
function Ga(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? Zn : qn) : t ? qn : Zn;
    case "left":
    case "right":
      return t ? Ka : Ya;
    default:
      return [];
  }
}
function Xa(e, t, n, o) {
  const r = Ze(e);
  let s = Ga(Ce(e), n === "start", o);
  return (r && ((s = s.map((c) => c + "-" + r)), t && (s = s.concat(s.map(cn)))), s);
}
function At(e) {
  const t = Ce(e);
  return za[t] + e.slice(t.length);
}
function qa(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Oo(e) {
  return typeof e != "number" ? qa(e) : { top: e, right: e, bottom: e, left: e };
}
function Pt(e) {
  const { x: t, y: n, width: o, height: r } = e;
  return { width: o, height: r, top: n, left: t, right: t + o, bottom: n + r, x: t, y: n };
}
function Qn(e, t, n) {
  let { reference: o, floating: r } = e;
  const s = ve(t),
    c = vn(t),
    i = gn(c),
    p = Ce(t),
    d = s === "y",
    f = o.x + o.width / 2 - r.width / 2,
    a = o.y + o.height / 2 - r.height / 2,
    m = o[i] / 2 - r[i] / 2;
  let h;
  switch (p) {
    case "top":
      h = { x: f, y: o.y - r.height };
      break;
    case "bottom":
      h = { x: f, y: o.y + o.height };
      break;
    case "right":
      h = { x: o.x + o.width, y: a };
      break;
    case "left":
      h = { x: o.x - r.width, y: a };
      break;
    default:
      h = { x: o.x, y: o.y };
  }
  switch (Ze(t)) {
    case "start":
      h[c] -= m * (n && d ? -1 : 1);
      break;
    case "end":
      h[c] += m * (n && d ? -1 : 1);
      break;
  }
  return h;
}
async function Za(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: o, y: r, platform: s, rects: c, elements: i, strategy: p } = e,
    {
      boundary: d = "clippingAncestors",
      rootBoundary: f = "viewport",
      elementContext: a = "floating",
      altBoundary: m = !1,
      padding: h = 0,
    } = Ee(t, e),
    v = Oo(h),
    y = i[m ? (a === "floating" ? "reference" : "floating") : a],
    x = Pt(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(y))) == null || n
            ? y
            : y.contextElement ||
              (await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating))),
        boundary: d,
        rootBoundary: f,
        strategy: p,
      }),
    ),
    C =
      a === "floating"
        ? { x: o, y: r, width: c.floating.width, height: c.floating.height }
        : c.reference,
    b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)),
    w = (await (s.isElement == null ? void 0 : s.isElement(b)))
      ? (await (s.getScale == null ? void 0 : s.getScale(b))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = Pt(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: i,
            rect: C,
            offsetParent: b,
            strategy: p,
          })
        : C,
    );
  return {
    top: (x.top - S.top + v.top) / w.y,
    bottom: (S.bottom - x.bottom + v.bottom) / w.y,
    left: (x.left - S.left + v.left) / w.x,
    right: (S.right - x.right + v.right) / w.x,
  };
}
const Qa = 50,
  Ja = async (e, t, n) => {
    const {
        placement: o = "bottom",
        strategy: r = "absolute",
        middleware: s = [],
        platform: c,
      } = n,
      i = c.detectOverflow ? c : { ...c, detectOverflow: Za },
      p = await (c.isRTL == null ? void 0 : c.isRTL(t));
    let d = await c.getElementRects({ reference: e, floating: t, strategy: r }),
      { x: f, y: a } = Qn(d, o, p),
      m = o,
      h = 0;
    const v = {};
    for (let g = 0; g < s.length; g++) {
      const y = s[g];
      if (!y) continue;
      const { name: x, fn: C } = y,
        {
          x: b,
          y: w,
          data: S,
          reset: N,
        } = await C({
          x: f,
          y: a,
          initialPlacement: o,
          placement: m,
          strategy: r,
          middlewareData: v,
          rects: d,
          platform: i,
          elements: { reference: e, floating: t },
        });
      ((f = b ?? f),
        (a = w ?? a),
        (v[x] = { ...v[x], ...S }),
        N &&
          h < Qa &&
          (h++,
          typeof N == "object" &&
            (N.placement && (m = N.placement),
            N.rects &&
              (d =
                N.rects === !0
                  ? await c.getElementRects({ reference: e, floating: t, strategy: r })
                  : N.rects),
            ({ x: f, y: a } = Qn(d, m, p))),
          (g = -1)));
    }
    return { x: f, y: a, placement: m, strategy: r, middlewareData: v };
  },
  ei = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const { x: n, y: o, placement: r, rects: s, platform: c, elements: i, middlewareData: p } = t,
        { element: d, padding: f = 0 } = Ee(e, t) || {};
      if (d == null) return {};
      const a = Oo(f),
        m = { x: n, y: o },
        h = vn(r),
        v = gn(h),
        g = await c.getDimensions(d),
        y = h === "y",
        x = y ? "top" : "left",
        C = y ? "bottom" : "right",
        b = y ? "clientHeight" : "clientWidth",
        w = s.reference[v] + s.reference[h] - m[h] - s.floating[v],
        S = m[h] - s.reference[h],
        N = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(d));
      let R = N ? N[b] : 0;
      (!R || !(await (c.isElement == null ? void 0 : c.isElement(N)))) &&
        (R = i.floating[b] || s.floating[v]);
      const A = w / 2 - S / 2,
        _ = R / 2 - g[v] / 2 - 1,
        k = Te(a[x], _),
        L = Te(a[C], _),
        $ = k,
        D = R - g[v] - L,
        B = R / 2 - g[v] / 2 + A,
        K = an($, B, D),
        P =
          !p.arrow &&
          Ze(r) != null &&
          B !== K &&
          s.reference[v] / 2 - (B < $ ? k : L) - g[v] / 2 < 0,
        j = P ? (B < $ ? B - $ : B - D) : 0;
      return {
        [h]: m[h] + j,
        data: { [h]: K, centerOffset: B - K - j, ...(P && { alignmentOffset: j }) },
        reset: P,
      };
    },
  }),
  ti = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, o;
          const {
              placement: r,
              middlewareData: s,
              rects: c,
              initialPlacement: i,
              platform: p,
              elements: d,
            } = t,
            {
              mainAxis: f = !0,
              crossAxis: a = !0,
              fallbackPlacements: m,
              fallbackStrategy: h = "bestFit",
              fallbackAxisSideDirection: v = "none",
              flipAlignment: g = !0,
              ...y
            } = Ee(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const x = Ce(r),
            C = ve(i),
            b = Ce(i) === i,
            w = await (p.isRTL == null ? void 0 : p.isRTL(d.floating)),
            S = m || (b || !g ? [At(i)] : Ua(i)),
            N = v !== "none";
          !m && N && S.push(...Xa(i, g, v, w));
          const R = [i, ...S],
            A = await p.detectOverflow(t, y),
            _ = [];
          let k = ((o = s.flip) == null ? void 0 : o.overflows) || [];
          if ((f && _.push(A[x]), a)) {
            const B = Va(r, c, w);
            _.push(A[B[0]], A[B[1]]);
          }
          if (((k = [...k, { placement: r, overflows: _ }]), !_.every((B) => B <= 0))) {
            var L, $;
            const B = (((L = s.flip) == null ? void 0 : L.index) || 0) + 1,
              K = R[B];
            if (
              K &&
              (!(a === "alignment" ? C !== ve(K) : !1) ||
                k.every((T) => (ve(T.placement) === C ? T.overflows[0] > 0 : !0)))
            )
              return { data: { index: B, overflows: k }, reset: { placement: K } };
            let P =
              ($ = k
                .filter((j) => j.overflows[0] <= 0)
                .sort((j, T) => j.overflows[1] - T.overflows[1])[0]) == null
                ? void 0
                : $.placement;
            if (!P)
              switch (h) {
                case "bestFit": {
                  var D;
                  const j =
                    (D = k
                      .filter((T) => {
                        if (N) {
                          const M = ve(T.placement);
                          return M === C || M === "y";
                        }
                        return !0;
                      })
                      .map((T) => [
                        T.placement,
                        T.overflows.filter((M) => M > 0).reduce((M, H) => M + H, 0),
                      ])
                      .sort((T, M) => T[1] - M[1])[0]) == null
                      ? void 0
                      : D[0];
                  j && (P = j);
                  break;
                }
                case "initialPlacement":
                  P = i;
                  break;
              }
            if (r !== P) return { reset: { placement: P } };
          }
          return {};
        },
      }
    );
  };
function Jn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function eo(e) {
  return Ha.some((t) => e[t] >= 0);
}
const ni = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n, platform: o } = t,
            { strategy: r = "referenceHidden", ...s } = Ee(e, t);
          switch (r) {
            case "referenceHidden": {
              const c = await o.detectOverflow(t, { ...s, elementContext: "reference" }),
                i = Jn(c, n.reference);
              return { data: { referenceHiddenOffsets: i, referenceHidden: eo(i) } };
            }
            case "escaped": {
              const c = await o.detectOverflow(t, { ...s, altBoundary: !0 }),
                i = Jn(c, n.floating);
              return { data: { escapedOffsets: i, escaped: eo(i) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  jo = new Set(["left", "top"]);
async function oi(e, t) {
  const { placement: n, platform: o, elements: r } = e,
    s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)),
    c = Ce(n),
    i = Ze(n),
    p = ve(n) === "y",
    d = jo.has(c) ? -1 : 1,
    f = s && p ? -1 : 1,
    a = Ee(t, e);
  let {
    mainAxis: m,
    crossAxis: h,
    alignmentAxis: v,
  } = typeof a == "number"
    ? { mainAxis: a, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: a.mainAxis || 0, crossAxis: a.crossAxis || 0, alignmentAxis: a.alignmentAxis };
  return (
    i && typeof v == "number" && (h = i === "end" ? v * -1 : v),
    p ? { x: h * f, y: m * d } : { x: m * d, y: h * f }
  );
}
const ri = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, o;
          const { x: r, y: s, placement: c, middlewareData: i } = t,
            p = await oi(t, e);
          return c === ((n = i.offset) == null ? void 0 : n.placement) &&
            (o = i.arrow) != null &&
            o.alignmentOffset
            ? {}
            : { x: r + p.x, y: s + p.y, data: { ...p, placement: c } };
        },
      }
    );
  },
  si = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: o, placement: r, platform: s } = t,
            {
              mainAxis: c = !0,
              crossAxis: i = !1,
              limiter: p = {
                fn: (x) => {
                  let { x: C, y: b } = x;
                  return { x: C, y: b };
                },
              },
              ...d
            } = Ee(e, t),
            f = { x: n, y: o },
            a = await s.detectOverflow(t, d),
            m = ve(Ce(r)),
            h = hn(m);
          let v = f[h],
            g = f[m];
          if (c) {
            const x = h === "y" ? "top" : "left",
              C = h === "y" ? "bottom" : "right",
              b = v + a[x],
              w = v - a[C];
            v = an(b, v, w);
          }
          if (i) {
            const x = m === "y" ? "top" : "left",
              C = m === "y" ? "bottom" : "right",
              b = g + a[x],
              w = g - a[C];
            g = an(b, g, w);
          }
          const y = p.fn({ ...t, [h]: v, [m]: g });
          return { ...y, data: { x: y.x - n, y: y.y - o, enabled: { [h]: c, [m]: i } } };
        },
      }
    );
  },
  ai = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: o, placement: r, rects: s, middlewareData: c } = t,
            { offset: i = 0, mainAxis: p = !0, crossAxis: d = !0 } = Ee(e, t),
            f = { x: n, y: o },
            a = ve(r),
            m = hn(a);
          let h = f[m],
            v = f[a];
          const g = Ee(i, t),
            y =
              typeof g == "number"
                ? { mainAxis: g, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...g };
          if (p) {
            const b = m === "y" ? "height" : "width",
              w = s.reference[m] - s.floating[b] + y.mainAxis,
              S = s.reference[m] + s.reference[b] - y.mainAxis;
            h < w ? (h = w) : h > S && (h = S);
          }
          if (d) {
            var x, C;
            const b = m === "y" ? "width" : "height",
              w = jo.has(Ce(r)),
              S =
                s.reference[a] -
                s.floating[b] +
                ((w && ((x = c.offset) == null ? void 0 : x[a])) || 0) +
                (w ? 0 : y.crossAxis),
              N =
                s.reference[a] +
                s.reference[b] +
                (w ? 0 : ((C = c.offset) == null ? void 0 : C[a]) || 0) -
                (w ? y.crossAxis : 0);
            v < S ? (v = S) : v > N && (v = N);
          }
          return { [m]: h, [a]: v };
        },
      }
    );
  },
  ii = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, o;
          const { placement: r, rects: s, platform: c, elements: i } = t,
            { apply: p = () => {}, ...d } = Ee(e, t),
            f = await c.detectOverflow(t, d),
            a = Ce(r),
            m = Ze(r),
            h = ve(r) === "y",
            { width: v, height: g } = s.floating;
          let y, x;
          a === "top" || a === "bottom"
            ? ((y = a),
              (x =
                m === ((await (c.isRTL == null ? void 0 : c.isRTL(i.floating))) ? "start" : "end")
                  ? "left"
                  : "right"))
            : ((x = a), (y = m === "end" ? "top" : "bottom"));
          const C = g - f.top - f.bottom,
            b = v - f.left - f.right,
            w = Te(g - f[y], C),
            S = Te(v - f[x], b),
            N = !t.middlewareData.shift;
          let R = w,
            A = S;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (A = b),
            (o = t.middlewareData.shift) != null && o.enabled.y && (R = C),
            N && !m)
          ) {
            const k = ae(f.left, 0),
              L = ae(f.right, 0),
              $ = ae(f.top, 0),
              D = ae(f.bottom, 0);
            h
              ? (A = v - 2 * (k !== 0 || L !== 0 ? k + L : ae(f.left, f.right)))
              : (R = g - 2 * ($ !== 0 || D !== 0 ? $ + D : ae(f.top, f.bottom)));
          }
          await p({ ...t, availableWidth: A, availableHeight: R });
          const _ = await c.getDimensions(i.floating);
          return v !== _.width || g !== _.height ? { reset: { rects: !0 } } : {};
        },
      }
    );
  };
function Ot() {
  return typeof window < "u";
}
function Qe(e) {
  return Io(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ie(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ye(e) {
  var t;
  return (t = (Io(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Io(e) {
  return Ot() ? e instanceof Node || e instanceof ie(e).Node : !1;
}
function pe(e) {
  return Ot() ? e instanceof Element || e instanceof ie(e).Element : !1;
}
function Re(e) {
  return Ot() ? e instanceof HTMLElement || e instanceof ie(e).HTMLElement : !1;
}
function to(e) {
  return !Ot() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof ie(e).ShadowRoot;
}
function it(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: r } = me(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && r !== "inline" && r !== "contents";
}
function ci(e) {
  return /^(table|td|th)$/.test(Qe(e));
}
function jt(e) {
  try {
    if (e.matches(":popover-open")) return !0;
  } catch {}
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const li = /transform|translate|scale|rotate|perspective|filter/,
  ui = /paint|layout|strict|content/,
  Ie = (e) => !!e && e !== "none";
let Xt;
function xn(e) {
  const t = pe(e) ? me(e) : e;
  return (
    Ie(t.transform) ||
    Ie(t.translate) ||
    Ie(t.scale) ||
    Ie(t.rotate) ||
    Ie(t.perspective) ||
    (!yn() && (Ie(t.backdropFilter) || Ie(t.filter))) ||
    li.test(t.willChange || "") ||
    ui.test(t.contain || "")
  );
}
function di(e) {
  let t = ke(e);
  for (; Re(t) && !qe(t); ) {
    if (xn(t)) return t;
    if (jt(t)) return null;
    t = ke(t);
  }
  return null;
}
function yn() {
  return (
    Xt == null &&
      (Xt = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")),
    Xt
  );
}
function qe(e) {
  return /^(html|body|#document)$/.test(Qe(e));
}
function me(e) {
  return ie(e).getComputedStyle(e);
}
function It(e) {
  return pe(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function ke(e) {
  if (Qe(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (to(e) && e.host) || ye(e);
  return to(t) ? t.host : t;
}
function Do(e) {
  const t = ke(e);
  return qe(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : Re(t) && it(t) ? t : Do(t);
}
function nt(e, t, n) {
  var o;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const r = Do(e),
    s = r === ((o = e.ownerDocument) == null ? void 0 : o.body),
    c = ie(r);
  if (s) {
    const i = ln(c);
    return t.concat(c, c.visualViewport || [], it(r) ? r : [], i && n ? nt(i) : []);
  } else return t.concat(r, nt(r, [], n));
}
function ln(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Lo(e) {
  const t = me(e);
  let n = parseFloat(t.width) || 0,
    o = parseFloat(t.height) || 0;
  const r = Re(e),
    s = r ? e.offsetWidth : n,
    c = r ? e.offsetHeight : o,
    i = Mt(n) !== s || Mt(o) !== c;
  return (i && ((n = s), (o = c)), { width: n, height: o, $: i });
}
function wn(e) {
  return pe(e) ? e : e.contextElement;
}
function Ge(e) {
  const t = wn(e);
  if (!Re(t)) return xe(1);
  const n = t.getBoundingClientRect(),
    { width: o, height: r, $: s } = Lo(t);
  let c = (s ? Mt(n.width) : n.width) / o,
    i = (s ? Mt(n.height) : n.height) / r;
  return (
    (!c || !Number.isFinite(c)) && (c = 1),
    (!i || !Number.isFinite(i)) && (i = 1),
    { x: c, y: i }
  );
}
const fi = xe(0);
function Fo(e) {
  const t = ie(e);
  return !yn() || !t.visualViewport
    ? fi
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function pi(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== ie(e)) ? !1 : t);
}
function De(e, t, n, o) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const r = e.getBoundingClientRect(),
    s = wn(e);
  let c = xe(1);
  t && (o ? pe(o) && (c = Ge(o)) : (c = Ge(e)));
  const i = pi(s, n, o) ? Fo(s) : xe(0);
  let p = (r.left + i.x) / c.x,
    d = (r.top + i.y) / c.y,
    f = r.width / c.x,
    a = r.height / c.y;
  if (s) {
    const m = ie(s),
      h = o && pe(o) ? ie(o) : o;
    let v = m,
      g = ln(v);
    for (; g && o && h !== v; ) {
      const y = Ge(g),
        x = g.getBoundingClientRect(),
        C = me(g),
        b = x.left + (g.clientLeft + parseFloat(C.paddingLeft)) * y.x,
        w = x.top + (g.clientTop + parseFloat(C.paddingTop)) * y.y;
      ((p *= y.x),
        (d *= y.y),
        (f *= y.x),
        (a *= y.y),
        (p += b),
        (d += w),
        (v = ie(g)),
        (g = ln(v)));
    }
  }
  return Pt({ width: f, height: a, x: p, y: d });
}
function Dt(e, t) {
  const n = It(e).scrollLeft;
  return t ? t.left + n : De(ye(e)).left + n;
}
function $o(e, t) {
  const n = e.getBoundingClientRect(),
    o = n.left + t.scrollLeft - Dt(e, n),
    r = n.top + t.scrollTop;
  return { x: o, y: r };
}
function mi(e) {
  let { elements: t, rect: n, offsetParent: o, strategy: r } = e;
  const s = r === "fixed",
    c = ye(o),
    i = t ? jt(t.floating) : !1;
  if (o === c || (i && s)) return n;
  let p = { scrollLeft: 0, scrollTop: 0 },
    d = xe(1);
  const f = xe(0),
    a = Re(o);
  if ((a || (!a && !s)) && ((Qe(o) !== "body" || it(c)) && (p = It(o)), a)) {
    const h = De(o);
    ((d = Ge(o)), (f.x = h.x + o.clientLeft), (f.y = h.y + o.clientTop));
  }
  const m = c && !a && !s ? $o(c, p) : xe(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - p.scrollLeft * d.x + f.x + m.x,
    y: n.y * d.y - p.scrollTop * d.y + f.y + m.y,
  };
}
function hi(e) {
  return Array.from(e.getClientRects());
}
function gi(e) {
  const t = ye(e),
    n = It(e),
    o = e.ownerDocument.body,
    r = ae(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
    s = ae(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let c = -n.scrollLeft + Dt(e);
  const i = -n.scrollTop;
  return (
    me(o).direction === "rtl" && (c += ae(t.clientWidth, o.clientWidth) - r),
    { width: r, height: s, x: c, y: i }
  );
}
const no = 25;
function vi(e, t) {
  const n = ie(e),
    o = ye(e),
    r = n.visualViewport;
  let s = o.clientWidth,
    c = o.clientHeight,
    i = 0,
    p = 0;
  if (r) {
    ((s = r.width), (c = r.height));
    const f = yn();
    (!f || (f && t === "fixed")) && ((i = r.offsetLeft), (p = r.offsetTop));
  }
  const d = Dt(o);
  if (d <= 0) {
    const f = o.ownerDocument,
      a = f.body,
      m = getComputedStyle(a),
      h =
        (f.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight)) ||
        0,
      v = Math.abs(o.clientWidth - a.clientWidth - h);
    v <= no && (s -= v);
  } else d <= no && (s += d);
  return { width: s, height: c, x: i, y: p };
}
function xi(e, t) {
  const n = De(e, !0, t === "fixed"),
    o = n.top + e.clientTop,
    r = n.left + e.clientLeft,
    s = Re(e) ? Ge(e) : xe(1),
    c = e.clientWidth * s.x,
    i = e.clientHeight * s.y,
    p = r * s.x,
    d = o * s.y;
  return { width: c, height: i, x: p, y: d };
}
function oo(e, t, n) {
  let o;
  if (t === "viewport") o = vi(e, n);
  else if (t === "document") o = gi(ye(e));
  else if (pe(t)) o = xi(t, n);
  else {
    const r = Fo(e);
    o = { x: t.x - r.x, y: t.y - r.y, width: t.width, height: t.height };
  }
  return Pt(o);
}
function Bo(e, t) {
  const n = ke(e);
  return n === t || !pe(n) || qe(n) ? !1 : me(n).position === "fixed" || Bo(n, t);
}
function yi(e, t) {
  const n = t.get(e);
  if (n) return n;
  let o = nt(e, [], !1).filter((i) => pe(i) && Qe(i) !== "body"),
    r = null;
  const s = me(e).position === "fixed";
  let c = s ? ke(e) : e;
  for (; pe(c) && !qe(c); ) {
    const i = me(c),
      p = xn(c);
    (!p && i.position === "fixed" && (r = null),
      (
        s
          ? !p && !r
          : (!p &&
              i.position === "static" &&
              !!r &&
              (r.position === "absolute" || r.position === "fixed")) ||
            (it(c) && !p && Bo(e, c))
      )
        ? (o = o.filter((f) => f !== c))
        : (r = i),
      (c = ke(c)));
  }
  return (t.set(e, o), o);
}
function wi(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: r } = e;
  const c = [...(n === "clippingAncestors" ? (jt(t) ? [] : yi(t, this._c)) : [].concat(n)), o],
    i = oo(t, c[0], r);
  let p = i.top,
    d = i.right,
    f = i.bottom,
    a = i.left;
  for (let m = 1; m < c.length; m++) {
    const h = oo(t, c[m], r);
    ((p = ae(h.top, p)), (d = Te(h.right, d)), (f = Te(h.bottom, f)), (a = ae(h.left, a)));
  }
  return { width: d - a, height: f - p, x: a, y: p };
}
function bi(e) {
  const { width: t, height: n } = Lo(e);
  return { width: t, height: n };
}
function Ei(e, t, n) {
  const o = Re(t),
    r = ye(t),
    s = n === "fixed",
    c = De(e, !0, s, t);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const p = xe(0);
  function d() {
    p.x = Dt(r);
  }
  if (o || (!o && !s))
    if (((Qe(t) !== "body" || it(r)) && (i = It(t)), o)) {
      const h = De(t, !0, s, t);
      ((p.x = h.x + t.clientLeft), (p.y = h.y + t.clientTop));
    } else r && d();
  s && !o && r && d();
  const f = r && !o && !s ? $o(r, i) : xe(0),
    a = c.left + i.scrollLeft - p.x - f.x,
    m = c.top + i.scrollTop - p.y - f.y;
  return { x: a, y: m, width: c.width, height: c.height };
}
function qt(e) {
  return me(e).position === "static";
}
function ro(e, t) {
  if (!Re(e) || me(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (ye(e) === n && (n = n.ownerDocument.body), n);
}
function Wo(e, t) {
  const n = ie(e);
  if (jt(e)) return n;
  if (!Re(e)) {
    let r = ke(e);
    for (; r && !qe(r); ) {
      if (pe(r) && !qt(r)) return r;
      r = ke(r);
    }
    return n;
  }
  let o = ro(e, t);
  for (; o && ci(o) && qt(o); ) o = ro(o, t);
  return o && qe(o) && qt(o) && !xn(o) ? n : o || di(e) || n;
}
const Ci = async function (e) {
  const t = this.getOffsetParent || Wo,
    n = this.getDimensions,
    o = await n(e.floating);
  return {
    reference: Ei(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: o.width, height: o.height },
  };
};
function Si(e) {
  return me(e).direction === "rtl";
}
const Ri = {
  convertOffsetParentRelativeRectToViewportRelativeRect: mi,
  getDocumentElement: ye,
  getClippingRect: wi,
  getOffsetParent: Wo,
  getElementRects: Ci,
  getClientRects: hi,
  getDimensions: bi,
  getScale: Ge,
  isElement: pe,
  isRTL: Si,
};
function Ho(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Ni(e, t) {
  let n = null,
    o;
  const r = ye(e);
  function s() {
    var i;
    (clearTimeout(o), (i = n) == null || i.disconnect(), (n = null));
  }
  function c(i, p) {
    (i === void 0 && (i = !1), p === void 0 && (p = 1), s());
    const d = e.getBoundingClientRect(),
      { left: f, top: a, width: m, height: h } = d;
    if ((i || t(), !m || !h)) return;
    const v = gt(a),
      g = gt(r.clientWidth - (f + m)),
      y = gt(r.clientHeight - (a + h)),
      x = gt(f),
      b = {
        rootMargin: -v + "px " + -g + "px " + -y + "px " + -x + "px",
        threshold: ae(0, Te(1, p)) || 1,
      };
    let w = !0;
    function S(N) {
      const R = N[0].intersectionRatio;
      if (R !== p) {
        if (!w) return c();
        R
          ? c(!1, R)
          : (o = setTimeout(() => {
              c(!1, 1e-7);
            }, 1e3));
      }
      (R === 1 && !Ho(d, e.getBoundingClientRect()) && c(), (w = !1));
    }
    try {
      n = new IntersectionObserver(S, { ...b, root: r.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, b);
    }
    n.observe(e);
  }
  return (c(!0), s);
}
function Mi(e, t, n, o) {
  o === void 0 && (o = {});
  const {
      ancestorScroll: r = !0,
      ancestorResize: s = !0,
      elementResize: c = typeof ResizeObserver == "function",
      layoutShift: i = typeof IntersectionObserver == "function",
      animationFrame: p = !1,
    } = o,
    d = wn(e),
    f = r || s ? [...(d ? nt(d) : []), ...(t ? nt(t) : [])] : [];
  f.forEach((x) => {
    (r && x.addEventListener("scroll", n, { passive: !0 }), s && x.addEventListener("resize", n));
  });
  const a = d && i ? Ni(d, n) : null;
  let m = -1,
    h = null;
  c &&
    ((h = new ResizeObserver((x) => {
      let [C] = x;
      (C &&
        C.target === d &&
        h &&
        t &&
        (h.unobserve(t),
        cancelAnimationFrame(m),
        (m = requestAnimationFrame(() => {
          var b;
          (b = h) == null || b.observe(t);
        }))),
        n());
    })),
    d && !p && h.observe(d),
    t && h.observe(t));
  let v,
    g = p ? De(e) : null;
  p && y();
  function y() {
    const x = De(e);
    (g && !Ho(g, x) && n(), (g = x), (v = requestAnimationFrame(y)));
  }
  return (
    n(),
    () => {
      var x;
      (f.forEach((C) => {
        (r && C.removeEventListener("scroll", n), s && C.removeEventListener("resize", n));
      }),
        a?.(),
        (x = h) == null || x.disconnect(),
        (h = null),
        p && cancelAnimationFrame(v));
    }
  );
}
const Ai = ri,
  Pi = si,
  _i = ti,
  Ti = ii,
  ki = ni,
  so = ei,
  Oi = ai,
  ji = (e, t, n) => {
    const o = new Map(),
      r = { platform: Ri, ...n },
      s = { ...r.platform, _c: o };
    return Ja(e, t, { ...r, platform: s });
  };
var Ii = typeof document < "u",
  Di = function () {},
  Ct = Ii ? l.useLayoutEffect : Di;
function _t(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (o = n; o-- !== 0; ) if (!_t(e[o], t[o])) return !1;
      return !0;
    }
    if (((r = Object.keys(e)), (n = r.length), n !== Object.keys(t).length)) return !1;
    for (o = n; o-- !== 0; ) if (!{}.hasOwnProperty.call(t, r[o])) return !1;
    for (o = n; o-- !== 0; ) {
      const s = r[o];
      if (!(s === "_owner" && e.$$typeof) && !_t(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function zo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ao(e, t) {
  const n = zo(e);
  return Math.round(t * n) / n;
}
function Zt(e) {
  const t = l.useRef(e);
  return (
    Ct(() => {
      t.current = e;
    }),
    t
  );
}
function Li(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: o = [],
      platform: r,
      elements: { reference: s, floating: c } = {},
      transform: i = !0,
      whileElementsMounted: p,
      open: d,
    } = e,
    [f, a] = l.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [m, h] = l.useState(o);
  _t(m, o) || h(o);
  const [v, g] = l.useState(null),
    [y, x] = l.useState(null),
    C = l.useCallback((T) => {
      T !== N.current && ((N.current = T), g(T));
    }, []),
    b = l.useCallback((T) => {
      T !== R.current && ((R.current = T), x(T));
    }, []),
    w = s || v,
    S = c || y,
    N = l.useRef(null),
    R = l.useRef(null),
    A = l.useRef(f),
    _ = p != null,
    k = Zt(p),
    L = Zt(r),
    $ = Zt(d),
    D = l.useCallback(() => {
      if (!N.current || !R.current) return;
      const T = { placement: t, strategy: n, middleware: m };
      (L.current && (T.platform = L.current),
        ji(N.current, R.current, T).then((M) => {
          const H = { ...M, isPositioned: $.current !== !1 };
          B.current &&
            !_t(A.current, H) &&
            ((A.current = H),
            xo.flushSync(() => {
              a(H);
            }));
        }));
    }, [m, t, n, L, $]);
  Ct(() => {
    d === !1 &&
      A.current.isPositioned &&
      ((A.current.isPositioned = !1), a((T) => ({ ...T, isPositioned: !1 })));
  }, [d]);
  const B = l.useRef(!1);
  (Ct(
    () => (
      (B.current = !0),
      () => {
        B.current = !1;
      }
    ),
    [],
  ),
    Ct(() => {
      if ((w && (N.current = w), S && (R.current = S), w && S)) {
        if (k.current) return k.current(w, S, D);
        D();
      }
    }, [w, S, D, k, _]));
  const K = l.useMemo(
      () => ({ reference: N, floating: R, setReference: C, setFloating: b }),
      [C, b],
    ),
    P = l.useMemo(() => ({ reference: w, floating: S }), [w, S]),
    j = l.useMemo(() => {
      const T = { position: n, left: 0, top: 0 };
      if (!P.floating) return T;
      const M = ao(P.floating, f.x),
        H = ao(P.floating, f.y);
      return i
        ? {
            ...T,
            transform: "translate(" + M + "px, " + H + "px)",
            ...(zo(P.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: M, top: H };
    }, [n, i, P.floating, f.x, f.y]);
  return l.useMemo(
    () => ({ ...f, update: D, refs: K, elements: P, floatingStyles: j }),
    [f, D, K, P, j],
  );
}
const Fi = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: o, padding: r } = typeof e == "function" ? e(n) : e;
        return o && t(o)
          ? o.current != null
            ? so({ element: o.current, padding: r }).fn(n)
            : {}
          : o
            ? so({ element: o, padding: r }).fn(n)
            : {};
      },
    };
  },
  $i = (e, t) => {
    const n = Ai(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Bi = (e, t) => {
    const n = Pi(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Wi = (e, t) => ({ fn: Oi(e).fn, options: [e, t] }),
  Hi = (e, t) => {
    const n = _i(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  zi = (e, t) => {
    const n = Ti(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Vi = (e, t) => {
    const n = ki(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  Ui = (e, t) => {
    const n = Fi(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  };
var Ki = "Arrow",
  Vo = l.forwardRef((e, t) => {
    const { children: n, width: o = 10, height: r = 5, ...s } = e;
    return u.jsx(J.svg, {
      ...s,
      ref: t,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : u.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Vo.displayName = Ki;
var Yi = Vo;
function Gi(e) {
  const [t, n] = l.useState(void 0);
  return (
    _e(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const o = new ResizeObserver((r) => {
          if (!Array.isArray(r) || !r.length) return;
          const s = r[0];
          let c, i;
          if ("borderBoxSize" in s) {
            const p = s.borderBoxSize,
              d = Array.isArray(p) ? p[0] : p;
            ((c = d.inlineSize), (i = d.blockSize));
          } else ((c = e.offsetWidth), (i = e.offsetHeight));
          n({ width: c, height: i });
        });
        return (o.observe(e, { box: "border-box" }), () => o.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var bn = "Popper",
  [Uo, Ko] = at(bn),
  [Xi, Yo] = Uo(bn),
  Go = (e) => {
    const { __scopePopper: t, children: n } = e,
      [o, r] = l.useState(null);
    return u.jsx(Xi, { scope: t, anchor: o, onAnchorChange: r, children: n });
  };
Go.displayName = bn;
var Xo = "PopperAnchor",
  qo = l.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e,
      s = Yo(Xo, n),
      c = l.useRef(null),
      i = oe(t, c),
      p = l.useRef(null);
    return (
      l.useEffect(() => {
        const d = p.current;
        ((p.current = o?.current || c.current), d !== p.current && s.onAnchorChange(p.current));
      }),
      o ? null : u.jsx(J.div, { ...r, ref: i })
    );
  });
qo.displayName = Xo;
var En = "PopperContent",
  [qi, Zi] = Uo(En),
  Zo = l.forwardRef((e, t) => {
    const {
        __scopePopper: n,
        side: o = "bottom",
        sideOffset: r = 0,
        align: s = "center",
        alignOffset: c = 0,
        arrowPadding: i = 0,
        avoidCollisions: p = !0,
        collisionBoundary: d = [],
        collisionPadding: f = 0,
        sticky: a = "partial",
        hideWhenDetached: m = !1,
        updatePositionStrategy: h = "optimized",
        onPlaced: v,
        ...g
      } = e,
      y = Yo(En, n),
      [x, C] = l.useState(null),
      b = oe(t, (U) => C(U)),
      [w, S] = l.useState(null),
      N = Gi(w),
      R = N?.width ?? 0,
      A = N?.height ?? 0,
      _ = o + (s !== "center" ? "-" + s : ""),
      k = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f },
      L = Array.isArray(d) ? d : [d],
      $ = L.length > 0,
      D = { padding: k, boundary: L.filter(Ji), altBoundary: $ },
      {
        refs: B,
        floatingStyles: K,
        placement: P,
        isPositioned: j,
        middlewareData: T,
      } = Li({
        strategy: "fixed",
        placement: _,
        whileElementsMounted: (...U) => Mi(...U, { animationFrame: h === "always" }),
        elements: { reference: y.anchor },
        middleware: [
          $i({ mainAxis: r + A, alignmentAxis: c }),
          p && Bi({ mainAxis: !0, crossAxis: !1, limiter: a === "partial" ? Wi() : void 0, ...D }),
          p && Hi({ ...D }),
          zi({
            ...D,
            apply: ({ elements: U, rects: W, availableWidth: Ne, availableHeight: $e }) => {
              const { width: Be, height: Me } = W.reference,
                We = U.floating.style;
              (We.setProperty("--radix-popper-available-width", `${Ne}px`),
                We.setProperty("--radix-popper-available-height", `${$e}px`),
                We.setProperty("--radix-popper-anchor-width", `${Be}px`),
                We.setProperty("--radix-popper-anchor-height", `${Me}px`));
            },
          }),
          w && Ui({ element: w, padding: i }),
          ec({ arrowWidth: R, arrowHeight: A }),
          m && Vi({ strategy: "referenceHidden", ...D }),
        ],
      }),
      [M, H] = er(P),
      G = be(v);
    _e(() => {
      j && G?.();
    }, [j, G]);
    const ce = T.arrow?.x,
      I = T.arrow?.y,
      z = T.arrow?.centerOffset !== 0,
      [V, Y] = l.useState();
    return (
      _e(() => {
        x && Y(window.getComputedStyle(x).zIndex);
      }, [x]),
      u.jsx("div", {
        ref: B.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...K,
          transform: j ? K.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: V,
          "--radix-popper-transform-origin": [T.transformOrigin?.x, T.transformOrigin?.y].join(" "),
          ...(T.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" }),
        },
        dir: e.dir,
        children: u.jsx(qi, {
          scope: n,
          placedSide: M,
          onArrowChange: S,
          arrowX: ce,
          arrowY: I,
          shouldHideArrow: z,
          children: u.jsx(J.div, {
            "data-side": M,
            "data-align": H,
            ...g,
            ref: b,
            style: { ...g.style, animation: j ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Zo.displayName = En;
var Qo = "PopperArrow",
  Qi = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Jo = l.forwardRef(function (t, n) {
    const { __scopePopper: o, ...r } = t,
      s = Zi(Qo, o),
      c = Qi[s.placedSide];
    return u.jsx("span", {
      ref: s.onArrowChange,
      style: {
        position: "absolute",
        left: s.arrowX,
        top: s.arrowY,
        [c]: 0,
        transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[
          s.placedSide
        ],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[s.placedSide],
        visibility: s.shouldHideArrow ? "hidden" : void 0,
      },
      children: u.jsx(Yi, { ...r, ref: n, style: { ...r.style, display: "block" } }),
    });
  });
Jo.displayName = Qo;
function Ji(e) {
  return e !== null;
}
var ec = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: o, middlewareData: r } = t,
      c = r.arrow?.centerOffset !== 0,
      i = c ? 0 : e.arrowWidth,
      p = c ? 0 : e.arrowHeight,
      [d, f] = er(n),
      a = { start: "0%", center: "50%", end: "100%" }[f],
      m = (r.arrow?.x ?? 0) + i / 2,
      h = (r.arrow?.y ?? 0) + p / 2;
    let v = "",
      g = "";
    return (
      d === "bottom"
        ? ((v = c ? a : `${m}px`), (g = `${-p}px`))
        : d === "top"
          ? ((v = c ? a : `${m}px`), (g = `${o.floating.height + p}px`))
          : d === "right"
            ? ((v = `${-p}px`), (g = c ? a : `${h}px`))
            : d === "left" && ((v = `${o.floating.width + p}px`), (g = c ? a : `${h}px`)),
      { data: { x: v, y: g } }
    );
  },
});
function er(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var tc = Go,
  nc = qo,
  oc = Zo,
  rc = Jo,
  sc = "Portal",
  tr = l.forwardRef((e, t) => {
    const { container: n, ...o } = e,
      [r, s] = l.useState(!1);
    _e(() => s(!0), []);
    const c = n || (r && globalThis?.document?.body);
    return c ? yo.createPortal(u.jsx(J.div, { ...o, ref: t }), c) : null;
  });
tr.displayName = sc;
function ac(e, t) {
  return l.useReducer((n, o) => t[n][o] ?? n, e);
}
var ct = (e) => {
  const { present: t, children: n } = e,
    o = ic(t),
    r = typeof n == "function" ? n({ present: o.isPresent }) : l.Children.only(n),
    s = oe(o.ref, cc(r));
  return typeof n == "function" || o.isPresent ? l.cloneElement(r, { ref: s }) : null;
};
ct.displayName = "Presence";
function ic(e) {
  const [t, n] = l.useState(),
    o = l.useRef(null),
    r = l.useRef(e),
    s = l.useRef("none"),
    c = e ? "mounted" : "unmounted",
    [i, p] = ac(c, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    l.useEffect(() => {
      const d = vt(o.current);
      s.current = i === "mounted" ? d : "none";
    }, [i]),
    _e(() => {
      const d = o.current,
        f = r.current;
      if (f !== e) {
        const m = s.current,
          h = vt(d);
        (e
          ? p("MOUNT")
          : h === "none" || d?.display === "none"
            ? p("UNMOUNT")
            : p(f && m !== h ? "ANIMATION_OUT" : "UNMOUNT"),
          (r.current = e));
      }
    }, [e, p]),
    _e(() => {
      if (t) {
        let d;
        const f = t.ownerDocument.defaultView ?? window,
          a = (h) => {
            const g = vt(o.current).includes(CSS.escape(h.animationName));
            if (h.target === t && g && (p("ANIMATION_END"), !r.current)) {
              const y = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (d = f.setTimeout(() => {
                  t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
                })));
            }
          },
          m = (h) => {
            h.target === t && (s.current = vt(o.current));
          };
        return (
          t.addEventListener("animationstart", m),
          t.addEventListener("animationcancel", a),
          t.addEventListener("animationend", a),
          () => {
            (f.clearTimeout(d),
              t.removeEventListener("animationstart", m),
              t.removeEventListener("animationcancel", a),
              t.removeEventListener("animationend", a));
          }
        );
      } else p("ANIMATION_END");
    }, [t, p]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(i),
      ref: l.useCallback((d) => {
        ((o.current = d ? getComputedStyle(d) : null), n(d));
      }, []),
    }
  );
}
function vt(e) {
  return e?.animationName || "none";
}
function cc(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var Qt = "rovingFocusGroup.onEntryFocus",
  lc = { bubbles: !1, cancelable: !0 },
  lt = "RovingFocusGroup",
  [un, nr, uc] = No(lt),
  [dc, or] = at(lt, [uc]),
  [fc, pc] = dc(lt),
  rr = l.forwardRef((e, t) =>
    u.jsx(un.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: u.jsx(un.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: u.jsx(mc, { ...e, ref: t }),
      }),
    }),
  );
rr.displayName = lt;
var mc = l.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: o,
        loop: r = !1,
        dir: s,
        currentTabStopId: c,
        defaultCurrentTabStopId: i,
        onCurrentTabStopIdChange: p,
        onEntryFocus: d,
        preventScrollOnEntryFocus: f = !1,
        ...a
      } = e,
      m = l.useRef(null),
      h = oe(t, m),
      v = Mo(s),
      [g, y] = So({ prop: c, defaultProp: i ?? null, onChange: p, caller: lt }),
      [x, C] = l.useState(!1),
      b = be(d),
      w = nr(n),
      S = l.useRef(!1),
      [N, R] = l.useState(0);
    return (
      l.useEffect(() => {
        const A = m.current;
        if (A) return (A.addEventListener(Qt, b), () => A.removeEventListener(Qt, b));
      }, [b]),
      u.jsx(fc, {
        scope: n,
        orientation: o,
        dir: v,
        loop: r,
        currentTabStopId: g,
        onItemFocus: l.useCallback((A) => y(A), [y]),
        onItemShiftTab: l.useCallback(() => C(!0), []),
        onFocusableItemAdd: l.useCallback(() => R((A) => A + 1), []),
        onFocusableItemRemove: l.useCallback(() => R((A) => A - 1), []),
        children: u.jsx(J.div, {
          tabIndex: x || N === 0 ? -1 : 0,
          "data-orientation": o,
          ...a,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: F(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: F(e.onFocus, (A) => {
            const _ = !S.current;
            if (A.target === A.currentTarget && _ && !x) {
              const k = new CustomEvent(Qt, lc);
              if ((A.currentTarget.dispatchEvent(k), !k.defaultPrevented)) {
                const L = w().filter((P) => P.focusable),
                  $ = L.find((P) => P.active),
                  D = L.find((P) => P.id === g),
                  K = [$, D, ...L].filter(Boolean).map((P) => P.ref.current);
                ir(K, f);
              }
            }
            S.current = !1;
          }),
          onBlur: F(e.onBlur, () => C(!1)),
        }),
      })
    );
  }),
  sr = "RovingFocusGroupItem",
  ar = l.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: o = !0,
        active: r = !1,
        tabStopId: s,
        children: c,
        ...i
      } = e,
      p = sn(),
      d = s || p,
      f = pc(sr, n),
      a = f.currentTabStopId === d,
      m = nr(n),
      { onFocusableItemAdd: h, onFocusableItemRemove: v, currentTabStopId: g } = f;
    return (
      l.useEffect(() => {
        if (o) return (h(), () => v());
      }, [o, h, v]),
      u.jsx(un.ItemSlot, {
        scope: n,
        id: d,
        focusable: o,
        active: r,
        children: u.jsx(J.span, {
          tabIndex: a ? 0 : -1,
          "data-orientation": f.orientation,
          ...i,
          ref: t,
          onMouseDown: F(e.onMouseDown, (y) => {
            o ? f.onItemFocus(d) : y.preventDefault();
          }),
          onFocus: F(e.onFocus, () => f.onItemFocus(d)),
          onKeyDown: F(e.onKeyDown, (y) => {
            if (y.key === "Tab" && y.shiftKey) {
              f.onItemShiftTab();
              return;
            }
            if (y.target !== y.currentTarget) return;
            const x = vc(y, f.orientation, f.dir);
            if (x !== void 0) {
              if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
              y.preventDefault();
              let b = m()
                .filter((w) => w.focusable)
                .map((w) => w.ref.current);
              if (x === "last") b.reverse();
              else if (x === "prev" || x === "next") {
                x === "prev" && b.reverse();
                const w = b.indexOf(y.currentTarget);
                b = f.loop ? xc(b, w + 1) : b.slice(w + 1);
              }
              setTimeout(() => ir(b));
            }
          }),
          children: typeof c == "function" ? c({ isCurrentTabStop: a, hasTabStop: g != null }) : c,
        }),
      })
    );
  });
ar.displayName = sr;
var hc = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function gc(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function vc(e, t, n) {
  const o = gc(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o))
  )
    return hc[o];
}
function ir(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function xc(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var yc = rr,
  wc = ar;
function bc(e) {
  const t = Ec(e),
    n = l.forwardRef((o, r) => {
      const { children: s, ...c } = o,
        i = l.Children.toArray(s),
        p = i.find(Sc);
      if (p) {
        const d = p.props.children,
          f = i.map((a) =>
            a === p
              ? l.Children.count(d) > 1
                ? l.Children.only(null)
                : l.isValidElement(d)
                  ? d.props.children
                  : null
              : a,
          );
        return u.jsx(t, {
          ...c,
          ref: r,
          children: l.isValidElement(d) ? l.cloneElement(d, void 0, f) : null,
        });
      }
      return u.jsx(t, { ...c, ref: r, children: s });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function Ec(e) {
  const t = l.forwardRef((n, o) => {
    const { children: r, ...s } = n;
    if (l.isValidElement(r)) {
      const c = Nc(r),
        i = Rc(s, r.props);
      return (r.type !== l.Fragment && (i.ref = o ? st(o, c) : c), l.cloneElement(r, i));
    }
    return l.Children.count(r) > 1 ? l.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var Cc = Symbol("radix.slottable");
function Sc(e) {
  return (
    l.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === Cc
  );
}
function Rc(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o],
      s = t[o];
    /^on[A-Z]/.test(o)
      ? r && s
        ? (n[o] = (...i) => {
            const p = s(...i);
            return (r(...i), p);
          })
        : r && (n[o] = r)
      : o === "style"
        ? (n[o] = { ...r, ...s })
        : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Nc(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var Mc = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Ue = new WeakMap(),
  xt = new WeakMap(),
  yt = {},
  Jt = 0,
  cr = function (e) {
    return e && (e.host || cr(e.parentNode));
  },
  Ac = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var o = cr(n);
        return o && e.contains(o)
          ? o
          : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  Pc = function (e, t, n, o) {
    var r = Ac(t, Array.isArray(e) ? e : [e]);
    yt[n] || (yt[n] = new WeakMap());
    var s = yt[n],
      c = [],
      i = new Set(),
      p = new Set(r),
      d = function (a) {
        !a || i.has(a) || (i.add(a), d(a.parentNode));
      };
    r.forEach(d);
    var f = function (a) {
      !a ||
        p.has(a) ||
        Array.prototype.forEach.call(a.children, function (m) {
          if (i.has(m)) f(m);
          else
            try {
              var h = m.getAttribute(o),
                v = h !== null && h !== "false",
                g = (Ue.get(m) || 0) + 1,
                y = (s.get(m) || 0) + 1;
              (Ue.set(m, g),
                s.set(m, y),
                c.push(m),
                g === 1 && v && xt.set(m, !0),
                y === 1 && m.setAttribute(n, "true"),
                v || m.setAttribute(o, "true"));
            } catch (x) {
              console.error("aria-hidden: cannot operate on ", m, x);
            }
        });
    };
    return (
      f(t),
      i.clear(),
      Jt++,
      function () {
        (c.forEach(function (a) {
          var m = Ue.get(a) - 1,
            h = s.get(a) - 1;
          (Ue.set(a, m),
            s.set(a, h),
            m || (xt.has(a) || a.removeAttribute(o), xt.delete(a)),
            h || a.removeAttribute(n));
        }),
          Jt--,
          Jt || ((Ue = new WeakMap()), (Ue = new WeakMap()), (xt = new WeakMap()), (yt = {})));
      }
    );
  },
  _c = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var o = Array.from(Array.isArray(e) ? e : [e]),
      r = Mc(e);
    return r
      ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live], script"))),
        Pc(o, r, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  ge = function () {
    return (
      (ge =
        Object.assign ||
        function (t) {
          for (var n, o = 1, r = arguments.length; o < r; o++) {
            n = arguments[o];
            for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
          }
          return t;
        }),
      ge.apply(this, arguments)
    );
  };
function lr(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
        (n[o[r]] = e[o[r]]);
  return n;
}
function Tc(e, t, n) {
  if (n || arguments.length === 2)
    for (var o = 0, r = t.length, s; o < r; o++)
      (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), (s[o] = t[o]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var St = "right-scroll-bar-position",
  Rt = "width-before-scroll-bar",
  kc = "with-scroll-bars-hidden",
  Oc = "--removed-body-scroll-bar-size";
function en(e, t) {
  return (typeof e == "function" ? e(t) : e && (e.current = t), e);
}
function jc(e, t) {
  var n = l.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var r = n.value;
          r !== o && ((n.value = o), n.callback(o, r));
        },
      },
    };
  })[0];
  return ((n.callback = t), n.facade);
}
var Ic = typeof window < "u" ? l.useLayoutEffect : l.useEffect,
  io = new WeakMap();
function Dc(e, t) {
  var n = jc(null, function (o) {
    return e.forEach(function (r) {
      return en(r, o);
    });
  });
  return (
    Ic(
      function () {
        var o = io.get(n);
        if (o) {
          var r = new Set(o),
            s = new Set(e),
            c = n.current;
          (r.forEach(function (i) {
            s.has(i) || en(i, null);
          }),
            s.forEach(function (i) {
              r.has(i) || en(i, c);
            }));
        }
        io.set(n, e);
      },
      [e],
    ),
    n
  );
}
function Lc(e) {
  return e;
}
function Fc(e, t) {
  t === void 0 && (t = Lc);
  var n = [],
    o = !1,
    r = {
      read: function () {
        if (o)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (s) {
        var c = t(s, o);
        return (
          n.push(c),
          function () {
            n = n.filter(function (i) {
              return i !== c;
            });
          }
        );
      },
      assignSyncMedium: function (s) {
        for (o = !0; n.length; ) {
          var c = n;
          ((n = []), c.forEach(s));
        }
        n = {
          push: function (i) {
            return s(i);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (s) {
        o = !0;
        var c = [];
        if (n.length) {
          var i = n;
          ((n = []), i.forEach(s), (c = n));
        }
        var p = function () {
            var f = c;
            ((c = []), f.forEach(s));
          },
          d = function () {
            return Promise.resolve().then(p);
          };
        (d(),
          (n = {
            push: function (f) {
              (c.push(f), d());
            },
            filter: function (f) {
              return ((c = c.filter(f)), n);
            },
          }));
      },
    };
  return r;
}
function $c(e) {
  e === void 0 && (e = {});
  var t = Fc(null);
  return ((t.options = ge({ async: !0, ssr: !1 }, e)), t);
}
var ur = function (e) {
  var t = e.sideCar,
    n = lr(e, ["sideCar"]);
  if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o) throw new Error("Sidecar medium not found");
  return l.createElement(o, ge({}, n));
};
ur.isSideCarExport = !0;
function Bc(e, t) {
  return (e.useMedium(t), ur);
}
var dr = $c(),
  tn = function () {},
  Lt = l.forwardRef(function (e, t) {
    var n = l.useRef(null),
      o = l.useState({ onScrollCapture: tn, onWheelCapture: tn, onTouchMoveCapture: tn }),
      r = o[0],
      s = o[1],
      c = e.forwardProps,
      i = e.children,
      p = e.className,
      d = e.removeScrollBar,
      f = e.enabled,
      a = e.shards,
      m = e.sideCar,
      h = e.noRelative,
      v = e.noIsolation,
      g = e.inert,
      y = e.allowPinchZoom,
      x = e.as,
      C = x === void 0 ? "div" : x,
      b = e.gapMode,
      w = lr(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      S = m,
      N = Dc([n, t]),
      R = ge(ge({}, w), r);
    return l.createElement(
      l.Fragment,
      null,
      f &&
        l.createElement(S, {
          sideCar: dr,
          removeScrollBar: d,
          shards: a,
          noRelative: h,
          noIsolation: v,
          inert: g,
          setCallbacks: s,
          allowPinchZoom: !!y,
          lockRef: n,
          gapMode: b,
        }),
      c
        ? l.cloneElement(l.Children.only(i), ge(ge({}, R), { ref: N }))
        : l.createElement(C, ge({}, R, { className: p, ref: N }), i),
    );
  });
Lt.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Lt.classNames = { fullWidth: Rt, zeroRight: St };
var Wc = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function Hc() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Wc();
  return (t && e.setAttribute("nonce", t), e);
}
function zc(e, t) {
  e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function Vc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Uc = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        (e == 0 && (t = Hc()) && (zc(t, n), Vc(t)), e++);
      },
      remove: function () {
        (e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
      },
    };
  },
  Kc = function () {
    var e = Uc();
    return function (t, n) {
      l.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  fr = function () {
    var e = Kc(),
      t = function (n) {
        var o = n.styles,
          r = n.dynamic;
        return (e(o, r), null);
      };
    return t;
  },
  Yc = { left: 0, top: 0, right: 0, gap: 0 },
  nn = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  Gc = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      o = t[e === "padding" ? "paddingTop" : "marginTop"],
      r = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [nn(n), nn(o), nn(r)];
  },
  Xc = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return Yc;
    var t = Gc(e),
      n = document.documentElement.clientWidth,
      o = window.innerWidth;
    return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, o - n + t[2] - t[0]) };
  },
  qc = fr(),
  Xe = "data-scroll-locked",
  Zc = function (e, t, n, o) {
    var r = e.left,
      s = e.top,
      c = e.right,
      i = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          kc,
          ` {
   overflow: hidden `,
        )
        .concat(
          o,
          `;
   padding-right: `,
        )
        .concat(i, "px ")
        .concat(
          o,
          `;
  }
  body[`,
        )
        .concat(
          Xe,
          `] {
    overflow: hidden `,
        )
        .concat(
          o,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(o, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  r,
                  `px;
    padding-top: `,
                )
                .concat(
                  s,
                  `px;
    padding-right: `,
                )
                .concat(
                  c,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(i, "px ")
                .concat(
                  o,
                  `;
    `,
                ),
            n === "padding" && "padding-right: ".concat(i, "px ").concat(o, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          St,
          ` {
    right: `,
        )
        .concat(i, "px ")
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(
          Rt,
          ` {
    margin-right: `,
        )
        .concat(i, "px ")
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(St, " .")
        .concat(
          St,
          ` {
    right: 0 `,
        )
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(Rt, " .")
        .concat(
          Rt,
          ` {
    margin-right: 0 `,
        )
        .concat(
          o,
          `;
  }
  
  body[`,
        )
        .concat(
          Xe,
          `] {
    `,
        )
        .concat(Oc, ": ")
        .concat(
          i,
          `px;
  }
`,
        )
    );
  },
  co = function () {
    var e = parseInt(document.body.getAttribute(Xe) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  Qc = function () {
    l.useEffect(function () {
      return (
        document.body.setAttribute(Xe, (co() + 1).toString()),
        function () {
          var e = co() - 1;
          e <= 0 ? document.body.removeAttribute(Xe) : document.body.setAttribute(Xe, e.toString());
        }
      );
    }, []);
  },
  Jc = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      o = e.gapMode,
      r = o === void 0 ? "margin" : o;
    Qc();
    var s = l.useMemo(
      function () {
        return Xc(r);
      },
      [r],
    );
    return l.createElement(qc, { styles: Zc(s, !t, r, n ? "" : "!important") });
  },
  dn = !1;
if (typeof window < "u")
  try {
    var wt = Object.defineProperty({}, "passive", {
      get: function () {
        return ((dn = !0), !0);
      },
    });
    (window.addEventListener("test", wt, wt), window.removeEventListener("test", wt, wt));
  } catch {
    dn = !1;
  }
var Ke = dn ? { passive: !1 } : !1,
  el = function (e) {
    return e.tagName === "TEXTAREA";
  },
  pr = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !el(e) && n[t] === "visible");
  },
  tl = function (e) {
    return pr(e, "overflowY");
  },
  nl = function (e) {
    return pr(e, "overflowX");
  },
  lo = function (e, t) {
    var n = t.ownerDocument,
      o = t;
    do {
      typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
      var r = mr(e, o);
      if (r) {
        var s = hr(e, o),
          c = s[1],
          i = s[2];
        if (c > i) return !0;
      }
      o = o.parentNode;
    } while (o && o !== n.body);
    return !1;
  },
  ol = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      o = e.clientHeight;
    return [t, n, o];
  },
  rl = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      o = e.clientWidth;
    return [t, n, o];
  },
  mr = function (e, t) {
    return e === "v" ? tl(t) : nl(t);
  },
  hr = function (e, t) {
    return e === "v" ? ol(t) : rl(t);
  },
  sl = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  al = function (e, t, n, o, r) {
    var s = sl(e, window.getComputedStyle(t).direction),
      c = s * o,
      i = n.target,
      p = t.contains(i),
      d = !1,
      f = c > 0,
      a = 0,
      m = 0;
    do {
      if (!i) break;
      var h = hr(e, i),
        v = h[0],
        g = h[1],
        y = h[2],
        x = g - y - s * v;
      (v || x) && mr(e, i) && ((a += x), (m += v));
      var C = i.parentNode;
      i = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C;
    } while ((!p && i !== document.body) || (p && (t.contains(i) || t === i)));
    return (((f && Math.abs(a) < 1) || (!f && Math.abs(m) < 1)) && (d = !0), d);
  },
  bt = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  uo = function (e) {
    return [e.deltaX, e.deltaY];
  },
  fo = function (e) {
    return e && "current" in e ? e.current : e;
  },
  il = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  cl = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  ll = 0,
  Ye = [];
function ul(e) {
  var t = l.useRef([]),
    n = l.useRef([0, 0]),
    o = l.useRef(),
    r = l.useState(ll++)[0],
    s = l.useState(fr)[0],
    c = l.useRef(e);
  (l.useEffect(
    function () {
      c.current = e;
    },
    [e],
  ),
    l.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(r));
          var g = Tc([e.lockRef.current], (e.shards || []).map(fo), !0).filter(Boolean);
          return (
            g.forEach(function (y) {
              return y.classList.add("allow-interactivity-".concat(r));
            }),
            function () {
              (document.body.classList.remove("block-interactivity-".concat(r)),
                g.forEach(function (y) {
                  return y.classList.remove("allow-interactivity-".concat(r));
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ));
  var i = l.useCallback(function (g, y) {
      if (("touches" in g && g.touches.length === 2) || (g.type === "wheel" && g.ctrlKey))
        return !c.current.allowPinchZoom;
      var x = bt(g),
        C = n.current,
        b = "deltaX" in g ? g.deltaX : C[0] - x[0],
        w = "deltaY" in g ? g.deltaY : C[1] - x[1],
        S,
        N = g.target,
        R = Math.abs(b) > Math.abs(w) ? "h" : "v";
      if ("touches" in g && R === "h" && N.type === "range") return !1;
      var A = window.getSelection(),
        _ = A && A.anchorNode,
        k = _ ? _ === N || _.contains(N) : !1;
      if (k) return !1;
      var L = lo(R, N);
      if (!L) return !0;
      if ((L ? (S = R) : ((S = R === "v" ? "h" : "v"), (L = lo(R, N))), !L)) return !1;
      if ((!o.current && "changedTouches" in g && (b || w) && (o.current = S), !S)) return !0;
      var $ = o.current || S;
      return al($, y, g, $ === "h" ? b : w);
    }, []),
    p = l.useCallback(function (g) {
      var y = g;
      if (!(!Ye.length || Ye[Ye.length - 1] !== s)) {
        var x = "deltaY" in y ? uo(y) : bt(y),
          C = t.current.filter(function (S) {
            return (
              S.name === y.type &&
              (S.target === y.target || y.target === S.shadowParent) &&
              il(S.delta, x)
            );
          })[0];
        if (C && C.should) {
          y.cancelable && y.preventDefault();
          return;
        }
        if (!C) {
          var b = (c.current.shards || [])
              .map(fo)
              .filter(Boolean)
              .filter(function (S) {
                return S.contains(y.target);
              }),
            w = b.length > 0 ? i(y, b[0]) : !c.current.noIsolation;
          w && y.cancelable && y.preventDefault();
        }
      }
    }, []),
    d = l.useCallback(function (g, y, x, C) {
      var b = { name: g, delta: y, target: x, should: C, shadowParent: dl(x) };
      (t.current.push(b),
        setTimeout(function () {
          t.current = t.current.filter(function (w) {
            return w !== b;
          });
        }, 1));
    }, []),
    f = l.useCallback(function (g) {
      ((n.current = bt(g)), (o.current = void 0));
    }, []),
    a = l.useCallback(function (g) {
      d(g.type, uo(g), g.target, i(g, e.lockRef.current));
    }, []),
    m = l.useCallback(function (g) {
      d(g.type, bt(g), g.target, i(g, e.lockRef.current));
    }, []);
  l.useEffect(function () {
    return (
      Ye.push(s),
      e.setCallbacks({ onScrollCapture: a, onWheelCapture: a, onTouchMoveCapture: m }),
      document.addEventListener("wheel", p, Ke),
      document.addEventListener("touchmove", p, Ke),
      document.addEventListener("touchstart", f, Ke),
      function () {
        ((Ye = Ye.filter(function (g) {
          return g !== s;
        })),
          document.removeEventListener("wheel", p, Ke),
          document.removeEventListener("touchmove", p, Ke),
          document.removeEventListener("touchstart", f, Ke));
      }
    );
  }, []);
  var h = e.removeScrollBar,
    v = e.inert;
  return l.createElement(
    l.Fragment,
    null,
    v ? l.createElement(s, { styles: cl(r) }) : null,
    h ? l.createElement(Jc, { noRelative: e.noRelative, gapMode: e.gapMode }) : null,
  );
}
function dl(e) {
  for (var t = null; e !== null; )
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode));
  return t;
}
const fl = Bc(dr, ul);
var gr = l.forwardRef(function (e, t) {
  return l.createElement(Lt, ge({}, e, { ref: t, sideCar: fl }));
});
gr.classNames = Lt.classNames;
var fn = ["Enter", " "],
  pl = ["ArrowDown", "PageUp", "Home"],
  vr = ["ArrowUp", "PageDown", "End"],
  ml = [...pl, ...vr],
  hl = { ltr: [...fn, "ArrowRight"], rtl: [...fn, "ArrowLeft"] },
  gl = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  ut = "Menu",
  [ot, vl, xl] = No(ut),
  [Le, xr] = at(ut, [xl, Ko, or]),
  Ft = Ko(),
  yr = or(),
  [yl, Fe] = Le(ut),
  [wl, dt] = Le(ut),
  wr = (e) => {
    const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: s, modal: c = !0 } = e,
      i = Ft(t),
      [p, d] = l.useState(null),
      f = l.useRef(!1),
      a = be(s),
      m = Mo(r);
    return (
      l.useEffect(() => {
        const h = () => {
            ((f.current = !0),
              document.addEventListener("pointerdown", v, { capture: !0, once: !0 }),
              document.addEventListener("pointermove", v, { capture: !0, once: !0 }));
          },
          v = () => (f.current = !1);
        return (
          document.addEventListener("keydown", h, { capture: !0 }),
          () => {
            (document.removeEventListener("keydown", h, { capture: !0 }),
              document.removeEventListener("pointerdown", v, { capture: !0 }),
              document.removeEventListener("pointermove", v, { capture: !0 }));
          }
        );
      }, []),
      u.jsx(tc, {
        ...i,
        children: u.jsx(yl, {
          scope: t,
          open: n,
          onOpenChange: a,
          content: p,
          onContentChange: d,
          children: u.jsx(wl, {
            scope: t,
            onClose: l.useCallback(() => a(!1), [a]),
            isUsingKeyboardRef: f,
            dir: m,
            modal: c,
            children: o,
          }),
        }),
      })
    );
  };
wr.displayName = ut;
var bl = "MenuAnchor",
  Cn = l.forwardRef((e, t) => {
    const { __scopeMenu: n, ...o } = e,
      r = Ft(n);
    return u.jsx(nc, { ...r, ...o, ref: t });
  });
Cn.displayName = bl;
var Sn = "MenuPortal",
  [El, br] = Le(Sn, { forceMount: void 0 }),
  Er = (e) => {
    const { __scopeMenu: t, forceMount: n, children: o, container: r } = e,
      s = Fe(Sn, t);
    return u.jsx(El, {
      scope: t,
      forceMount: n,
      children: u.jsx(ct, {
        present: n || s.open,
        children: u.jsx(tr, { asChild: !0, container: r, children: o }),
      }),
    });
  };
Er.displayName = Sn;
var ue = "MenuContent",
  [Cl, Rn] = Le(ue),
  Cr = l.forwardRef((e, t) => {
    const n = br(ue, e.__scopeMenu),
      { forceMount: o = n.forceMount, ...r } = e,
      s = Fe(ue, e.__scopeMenu),
      c = dt(ue, e.__scopeMenu);
    return u.jsx(ot.Provider, {
      scope: e.__scopeMenu,
      children: u.jsx(ct, {
        present: o || s.open,
        children: u.jsx(ot.Slot, {
          scope: e.__scopeMenu,
          children: c.modal ? u.jsx(Sl, { ...r, ref: t }) : u.jsx(Rl, { ...r, ref: t }),
        }),
      }),
    });
  }),
  Sl = l.forwardRef((e, t) => {
    const n = Fe(ue, e.__scopeMenu),
      o = l.useRef(null),
      r = oe(t, o);
    return (
      l.useEffect(() => {
        const s = o.current;
        if (s) return _c(s);
      }, []),
      u.jsx(Nn, {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: F(e.onFocusOutside, (s) => s.preventDefault(), {
          checkForDefaultPrevented: !1,
        }),
        onDismiss: () => n.onOpenChange(!1),
      })
    );
  }),
  Rl = l.forwardRef((e, t) => {
    const n = Fe(ue, e.__scopeMenu);
    return u.jsx(Nn, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1),
    });
  }),
  Nl = bc("MenuContent.ScrollLock"),
  Nn = l.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        loop: o = !1,
        trapFocus: r,
        onOpenAutoFocus: s,
        onCloseAutoFocus: c,
        disableOutsidePointerEvents: i,
        onEntryFocus: p,
        onEscapeKeyDown: d,
        onPointerDownOutside: f,
        onFocusOutside: a,
        onInteractOutside: m,
        onDismiss: h,
        disableOutsideScroll: v,
        ...g
      } = e,
      y = Fe(ue, n),
      x = dt(ue, n),
      C = Ft(n),
      b = yr(n),
      w = vl(n),
      [S, N] = l.useState(null),
      R = l.useRef(null),
      A = oe(t, R, y.onContentChange),
      _ = l.useRef(0),
      k = l.useRef(""),
      L = l.useRef(0),
      $ = l.useRef(null),
      D = l.useRef("right"),
      B = l.useRef(0),
      K = v ? gr : l.Fragment,
      P = v ? { as: Nl, allowPinchZoom: !0 } : void 0,
      j = (M) => {
        const H = k.current + M,
          G = w().filter((U) => !U.disabled),
          ce = document.activeElement,
          I = G.find((U) => U.ref.current === ce)?.textValue,
          z = G.map((U) => U.textValue),
          V = Fl(z, H, I),
          Y = G.find((U) => U.textValue === V)?.ref.current;
        ((function U(W) {
          ((k.current = W),
            window.clearTimeout(_.current),
            W !== "" && (_.current = window.setTimeout(() => U(""), 1e3)));
        })(H),
          Y && setTimeout(() => Y.focus()));
      };
    (l.useEffect(() => () => window.clearTimeout(_.current), []), ka());
    const T = l.useCallback((M) => D.current === $.current?.side && Bl(M, $.current?.area), []);
    return u.jsx(Cl, {
      scope: n,
      searchRef: k,
      onItemEnter: l.useCallback(
        (M) => {
          T(M) && M.preventDefault();
        },
        [T],
      ),
      onItemLeave: l.useCallback(
        (M) => {
          T(M) || (R.current?.focus(), N(null));
        },
        [T],
      ),
      onTriggerLeave: l.useCallback(
        (M) => {
          T(M) && M.preventDefault();
        },
        [T],
      ),
      pointerGraceTimerRef: L,
      onPointerGraceIntentChange: l.useCallback((M) => {
        $.current = M;
      }, []),
      children: u.jsx(K, {
        ...P,
        children: u.jsx(To, {
          asChild: !0,
          trapped: r,
          onMountAutoFocus: F(s, (M) => {
            (M.preventDefault(), R.current?.focus({ preventScroll: !0 }));
          }),
          onUnmountAutoFocus: c,
          children: u.jsx(Po, {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onEscapeKeyDown: d,
            onPointerDownOutside: f,
            onFocusOutside: a,
            onInteractOutside: m,
            onDismiss: h,
            children: u.jsx(yc, {
              asChild: !0,
              ...b,
              dir: x.dir,
              orientation: "vertical",
              loop: o,
              currentTabStopId: S,
              onCurrentTabStopIdChange: N,
              onEntryFocus: F(p, (M) => {
                x.isUsingKeyboardRef.current || M.preventDefault();
              }),
              preventScrollOnEntryFocus: !0,
              children: u.jsx(oc, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": $r(y.open),
                "data-radix-menu-content": "",
                dir: x.dir,
                ...C,
                ...g,
                ref: A,
                style: { outline: "none", ...g.style },
                onKeyDown: F(g.onKeyDown, (M) => {
                  const G = M.target.closest("[data-radix-menu-content]") === M.currentTarget,
                    ce = M.ctrlKey || M.altKey || M.metaKey,
                    I = M.key.length === 1;
                  G && (M.key === "Tab" && M.preventDefault(), !ce && I && j(M.key));
                  const z = R.current;
                  if (M.target !== z || !ml.includes(M.key)) return;
                  M.preventDefault();
                  const Y = w()
                    .filter((U) => !U.disabled)
                    .map((U) => U.ref.current);
                  (vr.includes(M.key) && Y.reverse(), Dl(Y));
                }),
                onBlur: F(e.onBlur, (M) => {
                  M.currentTarget.contains(M.target) ||
                    (window.clearTimeout(_.current), (k.current = ""));
                }),
                onPointerMove: F(
                  e.onPointerMove,
                  rt((M) => {
                    const H = M.target,
                      G = B.current !== M.clientX;
                    if (M.currentTarget.contains(H) && G) {
                      const ce = M.clientX > B.current ? "right" : "left";
                      ((D.current = ce), (B.current = M.clientX));
                    }
                  }),
                ),
              }),
            }),
          }),
        }),
      }),
    });
  });
Cr.displayName = ue;
var Ml = "MenuGroup",
  Mn = l.forwardRef((e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return u.jsx(J.div, { role: "group", ...o, ref: t });
  });
Mn.displayName = Ml;
var Al = "MenuLabel",
  Sr = l.forwardRef((e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return u.jsx(J.div, { ...o, ref: t });
  });
Sr.displayName = Al;
var Tt = "MenuItem",
  po = "menu.itemSelect",
  $t = l.forwardRef((e, t) => {
    const { disabled: n = !1, onSelect: o, ...r } = e,
      s = l.useRef(null),
      c = dt(Tt, e.__scopeMenu),
      i = Rn(Tt, e.__scopeMenu),
      p = oe(t, s),
      d = l.useRef(!1),
      f = () => {
        const a = s.current;
        if (!n && a) {
          const m = new CustomEvent(po, { bubbles: !0, cancelable: !0 });
          (a.addEventListener(po, (h) => o?.(h), { once: !0 }),
            Ro(a, m),
            m.defaultPrevented ? (d.current = !1) : c.onClose());
        }
      };
    return u.jsx(Rr, {
      ...r,
      ref: p,
      disabled: n,
      onClick: F(e.onClick, f),
      onPointerDown: (a) => {
        (e.onPointerDown?.(a), (d.current = !0));
      },
      onPointerUp: F(e.onPointerUp, (a) => {
        d.current || a.currentTarget?.click();
      }),
      onKeyDown: F(e.onKeyDown, (a) => {
        const m = i.searchRef.current !== "";
        n ||
          (m && a.key === " ") ||
          (fn.includes(a.key) && (a.currentTarget.click(), a.preventDefault()));
      }),
    });
  });
$t.displayName = Tt;
var Rr = l.forwardRef((e, t) => {
    const { __scopeMenu: n, disabled: o = !1, textValue: r, ...s } = e,
      c = Rn(Tt, n),
      i = yr(n),
      p = l.useRef(null),
      d = oe(t, p),
      [f, a] = l.useState(!1),
      [m, h] = l.useState("");
    return (
      l.useEffect(() => {
        const v = p.current;
        v && h((v.textContent ?? "").trim());
      }, [s.children]),
      u.jsx(ot.ItemSlot, {
        scope: n,
        disabled: o,
        textValue: r ?? m,
        children: u.jsx(wc, {
          asChild: !0,
          ...i,
          focusable: !o,
          children: u.jsx(J.div, {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...s,
            ref: d,
            onPointerMove: F(
              e.onPointerMove,
              rt((v) => {
                o
                  ? c.onItemLeave(v)
                  : (c.onItemEnter(v),
                    v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              }),
            ),
            onPointerLeave: F(
              e.onPointerLeave,
              rt((v) => c.onItemLeave(v)),
            ),
            onFocus: F(e.onFocus, () => a(!0)),
            onBlur: F(e.onBlur, () => a(!1)),
          }),
        }),
      })
    );
  }),
  Pl = "MenuCheckboxItem",
  Nr = l.forwardRef((e, t) => {
    const { checked: n = !1, onCheckedChange: o, ...r } = e;
    return u.jsx(Tr, {
      scope: e.__scopeMenu,
      checked: n,
      children: u.jsx($t, {
        role: "menuitemcheckbox",
        "aria-checked": kt(n) ? "mixed" : n,
        ...r,
        ref: t,
        "data-state": Pn(n),
        onSelect: F(r.onSelect, () => o?.(kt(n) ? !0 : !n), { checkForDefaultPrevented: !1 }),
      }),
    });
  });
Nr.displayName = Pl;
var Mr = "MenuRadioGroup",
  [_l, Tl] = Le(Mr, { value: void 0, onValueChange: () => {} }),
  Ar = l.forwardRef((e, t) => {
    const { value: n, onValueChange: o, ...r } = e,
      s = be(o);
    return u.jsx(_l, {
      scope: e.__scopeMenu,
      value: n,
      onValueChange: s,
      children: u.jsx(Mn, { ...r, ref: t }),
    });
  });
Ar.displayName = Mr;
var Pr = "MenuRadioItem",
  _r = l.forwardRef((e, t) => {
    const { value: n, ...o } = e,
      r = Tl(Pr, e.__scopeMenu),
      s = n === r.value;
    return u.jsx(Tr, {
      scope: e.__scopeMenu,
      checked: s,
      children: u.jsx($t, {
        role: "menuitemradio",
        "aria-checked": s,
        ...o,
        ref: t,
        "data-state": Pn(s),
        onSelect: F(o.onSelect, () => r.onValueChange?.(n), { checkForDefaultPrevented: !1 }),
      }),
    });
  });
_r.displayName = Pr;
var An = "MenuItemIndicator",
  [Tr, kl] = Le(An, { checked: !1 }),
  kr = l.forwardRef((e, t) => {
    const { __scopeMenu: n, forceMount: o, ...r } = e,
      s = kl(An, n);
    return u.jsx(ct, {
      present: o || kt(s.checked) || s.checked === !0,
      children: u.jsx(J.span, { ...r, ref: t, "data-state": Pn(s.checked) }),
    });
  });
kr.displayName = An;
var Ol = "MenuSeparator",
  Or = l.forwardRef((e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return u.jsx(J.div, { role: "separator", "aria-orientation": "horizontal", ...o, ref: t });
  });
Or.displayName = Ol;
var jl = "MenuArrow",
  jr = l.forwardRef((e, t) => {
    const { __scopeMenu: n, ...o } = e,
      r = Ft(n);
    return u.jsx(rc, { ...r, ...o, ref: t });
  });
jr.displayName = jl;
var Il = "MenuSub",
  [gd, Ir] = Le(Il),
  tt = "MenuSubTrigger",
  Dr = l.forwardRef((e, t) => {
    const n = Fe(tt, e.__scopeMenu),
      o = dt(tt, e.__scopeMenu),
      r = Ir(tt, e.__scopeMenu),
      s = Rn(tt, e.__scopeMenu),
      c = l.useRef(null),
      { pointerGraceTimerRef: i, onPointerGraceIntentChange: p } = s,
      d = { __scopeMenu: e.__scopeMenu },
      f = l.useCallback(() => {
        (c.current && window.clearTimeout(c.current), (c.current = null));
      }, []);
    return (
      l.useEffect(() => f, [f]),
      l.useEffect(() => {
        const a = i.current;
        return () => {
          (window.clearTimeout(a), p(null));
        };
      }, [i, p]),
      u.jsx(Cn, {
        asChild: !0,
        ...d,
        children: u.jsx(Rr, {
          id: r.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": n.open,
          "aria-controls": r.contentId,
          "data-state": $r(n.open),
          ...e,
          ref: st(t, r.onTriggerChange),
          onClick: (a) => {
            (e.onClick?.(a),
              !(e.disabled || a.defaultPrevented) &&
                (a.currentTarget.focus(), n.open || n.onOpenChange(!0)));
          },
          onPointerMove: F(
            e.onPointerMove,
            rt((a) => {
              (s.onItemEnter(a),
                !a.defaultPrevented &&
                  !e.disabled &&
                  !n.open &&
                  !c.current &&
                  (s.onPointerGraceIntentChange(null),
                  (c.current = window.setTimeout(() => {
                    (n.onOpenChange(!0), f());
                  }, 100))));
            }),
          ),
          onPointerLeave: F(
            e.onPointerLeave,
            rt((a) => {
              f();
              const m = n.content?.getBoundingClientRect();
              if (m) {
                const h = n.content?.dataset.side,
                  v = h === "right",
                  g = v ? -5 : 5,
                  y = m[v ? "left" : "right"],
                  x = m[v ? "right" : "left"];
                (s.onPointerGraceIntentChange({
                  area: [
                    { x: a.clientX + g, y: a.clientY },
                    { x: y, y: m.top },
                    { x, y: m.top },
                    { x, y: m.bottom },
                    { x: y, y: m.bottom },
                  ],
                  side: h,
                }),
                  window.clearTimeout(i.current),
                  (i.current = window.setTimeout(() => s.onPointerGraceIntentChange(null), 300)));
              } else {
                if ((s.onTriggerLeave(a), a.defaultPrevented)) return;
                s.onPointerGraceIntentChange(null);
              }
            }),
          ),
          onKeyDown: F(e.onKeyDown, (a) => {
            const m = s.searchRef.current !== "";
            e.disabled ||
              (m && a.key === " ") ||
              (hl[o.dir].includes(a.key) &&
                (n.onOpenChange(!0), n.content?.focus(), a.preventDefault()));
          }),
        }),
      })
    );
  });
Dr.displayName = tt;
var Lr = "MenuSubContent",
  Fr = l.forwardRef((e, t) => {
    const n = br(ue, e.__scopeMenu),
      { forceMount: o = n.forceMount, ...r } = e,
      s = Fe(ue, e.__scopeMenu),
      c = dt(ue, e.__scopeMenu),
      i = Ir(Lr, e.__scopeMenu),
      p = l.useRef(null),
      d = oe(t, p);
    return u.jsx(ot.Provider, {
      scope: e.__scopeMenu,
      children: u.jsx(ct, {
        present: o || s.open,
        children: u.jsx(ot.Slot, {
          scope: e.__scopeMenu,
          children: u.jsx(Nn, {
            id: i.contentId,
            "aria-labelledby": i.triggerId,
            ...r,
            ref: d,
            align: "start",
            side: c.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: (f) => {
              (c.isUsingKeyboardRef.current && p.current?.focus(), f.preventDefault());
            },
            onCloseAutoFocus: (f) => f.preventDefault(),
            onFocusOutside: F(e.onFocusOutside, (f) => {
              f.target !== i.trigger && s.onOpenChange(!1);
            }),
            onEscapeKeyDown: F(e.onEscapeKeyDown, (f) => {
              (c.onClose(), f.preventDefault());
            }),
            onKeyDown: F(e.onKeyDown, (f) => {
              const a = f.currentTarget.contains(f.target),
                m = gl[c.dir].includes(f.key);
              a && m && (s.onOpenChange(!1), i.trigger?.focus(), f.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
Fr.displayName = Lr;
function $r(e) {
  return e ? "open" : "closed";
}
function kt(e) {
  return e === "indeterminate";
}
function Pn(e) {
  return kt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Dl(e) {
  const t = document.activeElement;
  for (const n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Ll(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function Fl(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t,
    s = n ? e.indexOf(n) : -1;
  let c = Ll(e, Math.max(s, 0));
  r.length === 1 && (c = c.filter((d) => d !== n));
  const p = c.find((d) => d.toLowerCase().startsWith(r.toLowerCase()));
  return p !== n ? p : void 0;
}
function $l(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, c = t.length - 1; s < t.length; c = s++) {
    const i = t[s],
      p = t[c],
      d = i.x,
      f = i.y,
      a = p.x,
      m = p.y;
    f > o != m > o && n < ((a - d) * (o - f)) / (m - f) + d && (r = !r);
  }
  return r;
}
function Bl(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return $l(n, t);
}
function rt(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
var Wl = wr,
  Hl = Cn,
  zl = Er,
  Vl = Cr,
  Ul = Mn,
  Kl = Sr,
  Yl = $t,
  Gl = Nr,
  Xl = Ar,
  ql = _r,
  Zl = kr,
  Ql = Or,
  Jl = jr,
  eu = Dr,
  tu = Fr,
  Bt = "DropdownMenu",
  [nu] = at(Bt, [xr]),
  ee = xr(),
  [ou, Br] = nu(Bt),
  Wr = (e) => {
    const {
        __scopeDropdownMenu: t,
        children: n,
        dir: o,
        open: r,
        defaultOpen: s,
        onOpenChange: c,
        modal: i = !0,
      } = e,
      p = ee(t),
      d = l.useRef(null),
      [f, a] = So({ prop: r, defaultProp: s ?? !1, onChange: c, caller: Bt });
    return u.jsx(ou, {
      scope: t,
      triggerId: sn(),
      triggerRef: d,
      contentId: sn(),
      open: f,
      onOpenChange: a,
      onOpenToggle: l.useCallback(() => a((m) => !m), [a]),
      modal: i,
      children: u.jsx(Wl, { ...p, open: f, onOpenChange: a, dir: o, modal: i, children: n }),
    });
  };
Wr.displayName = Bt;
var Hr = "DropdownMenuTrigger",
  zr = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, disabled: o = !1, ...r } = e,
      s = Br(Hr, n),
      c = ee(n);
    return u.jsx(Hl, {
      asChild: !0,
      ...c,
      children: u.jsx(J.button, {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        ...r,
        ref: st(t, s.triggerRef),
        onPointerDown: F(e.onPointerDown, (i) => {
          !o &&
            i.button === 0 &&
            i.ctrlKey === !1 &&
            (s.onOpenToggle(), s.open || i.preventDefault());
        }),
        onKeyDown: F(e.onKeyDown, (i) => {
          o ||
            (["Enter", " "].includes(i.key) && s.onOpenToggle(),
            i.key === "ArrowDown" && s.onOpenChange(!0),
            ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        }),
      }),
    });
  });
zr.displayName = Hr;
var ru = "DropdownMenuPortal",
  Vr = (e) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      o = ee(t);
    return u.jsx(zl, { ...o, ...n });
  };
Vr.displayName = ru;
var Ur = "DropdownMenuContent",
  Kr = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = Br(Ur, n),
      s = ee(n),
      c = l.useRef(!1);
    return u.jsx(Vl, {
      id: r.contentId,
      "aria-labelledby": r.triggerId,
      ...s,
      ...o,
      ref: t,
      onCloseAutoFocus: F(e.onCloseAutoFocus, (i) => {
        (c.current || r.triggerRef.current?.focus(), (c.current = !1), i.preventDefault());
      }),
      onInteractOutside: F(e.onInteractOutside, (i) => {
        const p = i.detail.originalEvent,
          d = p.button === 0 && p.ctrlKey === !0,
          f = p.button === 2 || d;
        (!r.modal || f) && (c.current = !0);
      }),
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
Kr.displayName = Ur;
var su = "DropdownMenuGroup",
  au = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = ee(n);
    return u.jsx(Ul, { ...r, ...o, ref: t });
  });
au.displayName = su;
var iu = "DropdownMenuLabel",
  Yr = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = ee(n);
    return u.jsx(Kl, { ...r, ...o, ref: t });
  });
Yr.displayName = iu;
var cu = "DropdownMenuItem",
  Gr = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = ee(n);
    return u.jsx(Yl, { ...r, ...o, ref: t });
  });
Gr.displayName = cu;
var lu = "DropdownMenuCheckboxItem",
  Xr = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = ee(n);
    return u.jsx(Gl, { ...r, ...o, ref: t });
  });
Xr.displayName = lu;
var uu = "DropdownMenuRadioGroup",
  du = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = ee(n);
    return u.jsx(Xl, { ...r, ...o, ref: t });
  });
du.displayName = uu;
var fu = "DropdownMenuRadioItem",
  qr = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = ee(n);
    return u.jsx(ql, { ...r, ...o, ref: t });
  });
qr.displayName = fu;
var pu = "DropdownMenuItemIndicator",
  Zr = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = ee(n);
    return u.jsx(Zl, { ...r, ...o, ref: t });
  });
Zr.displayName = pu;
var mu = "DropdownMenuSeparator",
  Qr = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = ee(n);
    return u.jsx(Ql, { ...r, ...o, ref: t });
  });
Qr.displayName = mu;
var hu = "DropdownMenuArrow",
  gu = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = ee(n);
    return u.jsx(Jl, { ...r, ...o, ref: t });
  });
gu.displayName = hu;
var vu = "DropdownMenuSubTrigger",
  Jr = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = ee(n);
    return u.jsx(eu, { ...r, ...o, ref: t });
  });
Jr.displayName = vu;
var xu = "DropdownMenuSubContent",
  es = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e,
      r = ee(n);
    return u.jsx(tu, {
      ...r,
      ...o,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
es.displayName = xu;
var yu = Wr,
  wu = zr,
  bu = Vr,
  ts = Kr,
  ns = Yr,
  os = Gr,
  rs = Xr,
  ss = qr,
  as = Zr,
  is = Qr,
  cs = Jr,
  ls = es;
const Eu = yu,
  Cu = wu,
  Su = l.forwardRef(({ className: e, inset: t, children: n, ...o }, r) =>
    u.jsxs(cs, {
      ref: r,
      className: Se(
        "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        t && "pl-8",
        e,
      ),
      ...o,
      children: [n, u.jsx(et, { className: "ml-auto" })],
    }),
  );
Su.displayName = cs.displayName;
const Ru = l.forwardRef(({ className: e, ...t }, n) =>
  u.jsx(ls, {
    ref: n,
    className: Se(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      e,
    ),
    ...t,
  }),
);
Ru.displayName = ls.displayName;
const us = l.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) =>
  u.jsx(bu, {
    children: u.jsx(ts, {
      ref: o,
      sideOffset: t,
      className: Se(
        "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
        e,
      ),
      ...n,
    }),
  }),
);
us.displayName = ts.displayName;
const Nt = l.forwardRef(({ className: e, inset: t, ...n }, o) =>
  u.jsx(os, {
    ref: o,
    className: Se(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      t && "pl-8",
      e,
    ),
    ...n,
  }),
);
Nt.displayName = os.displayName;
const Nu = l.forwardRef(({ className: e, children: t, checked: n, ...o }, r) =>
  u.jsxs(rs, {
    ref: r,
    className: Se(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e,
    ),
    checked: n,
    ...o,
    children: [
      u.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: u.jsx(as, { children: u.jsx($s, { className: "h-4 w-4" }) }),
      }),
      t,
    ],
  }),
);
Nu.displayName = rs.displayName;
const Mu = l.forwardRef(({ className: e, children: t, ...n }, o) =>
  u.jsxs(ss, {
    ref: o,
    className: Se(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e,
    ),
    ...n,
    children: [
      u.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: u.jsx(as, { children: u.jsx(Us, { className: "h-2 w-2 fill-current" }) }),
      }),
      t,
    ],
  }),
);
Mu.displayName = ss.displayName;
const Au = l.forwardRef(({ className: e, inset: t, ...n }, o) =>
  u.jsx(ns, { ref: o, className: Se("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e), ...n }),
);
Au.displayName = ns.displayName;
const Pu = l.forwardRef(({ className: e, ...t }, n) =>
  u.jsx(is, { ref: n, className: Se("-mx-1 my-1 h-px bg-muted", e), ...t }),
);
Pu.displayName = is.displayName;
function vd() {
  const [e, t] = l.useState(!1),
    [n, o] = l.useState(!1);
  l.useEffect(() => {
    const s = () => {
      t(window.scrollY > 50);
    };
    return (window.addEventListener("scroll", s), () => window.removeEventListener("scroll", s));
  }, []);
  const r = [
    { name: "Início", to: "/" },
    { name: "O Escritório", to: "/", hash: "sobre" },
    { name: "Áreas de Atuação", to: "/areas-de-atuacao" },
    { name: "Notícias", to: "/", hash: "blog" },
  ];
  return u.jsxs(ne.nav, {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, ease: "easeOut" },
    className: `fixed z-50 w-full transition-all duration-500 ${e || n ? "top-0 bg-velvet/60 backdrop-blur-lg py-3 shadow-xl" : "top-0 bg-transparent py-5"}`,
    children: [
      u.jsxs("div", {
        className: "mx-auto flex max-w-7xl items-center justify-between px-6",
        children: [
          u.jsx(je, {
            to: "/",
            className: "flex group items-center",
            onClick: () => o(!1),
            children: u.jsxs("svg", {
              width: "400",
              height: "80",
              viewBox: "0 0 600 120",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-14 md:h-16 w-auto",
              children: [
                u.jsxs("g", {
                  transform: "translate(30, 30)",
                  children: [
                    u.jsx("line", {
                      x1: "0",
                      y1: "60",
                      x2: "25",
                      y2: "0",
                      stroke: "white",
                      strokeWidth: "2.5",
                      className: "group-hover:stroke-gold transition-colors",
                    }),
                    u.jsx("line", {
                      x1: "25",
                      y1: "0",
                      x2: "25",
                      y2: "60",
                      stroke: "white",
                      strokeWidth: "2.5",
                      className: "group-hover:stroke-gold transition-colors",
                    }),
                    u.jsx("line", {
                      x1: "12.5",
                      y1: "30",
                      x2: "25",
                      y2: "30",
                      stroke: "white",
                      strokeWidth: "2.5",
                      className: "group-hover:stroke-gold transition-colors",
                    }),
                    u.jsx("path", {
                      d: "M25 0H50V30H25",
                      stroke: "white",
                      strokeWidth: "2.5",
                      fill: "none",
                      className: "group-hover:stroke-gold transition-colors",
                    }),
                  ],
                }),
                u.jsx("text", {
                  x: "110",
                  y: "65",
                  fill: "white",
                  style: {
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "28px",
                    fontWeight: 300,
                    letterSpacing: "0.25em",
                  },
                  className: "group-hover:fill-gold transition-colors",
                  children: "AYRTON PEDROSA",
                }),
                u.jsx("text", {
                  x: "210",
                  y: "95",
                  fill: "white",
                  style: {
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 300,
                    letterSpacing: "0.8em",
                    opacity: 0.8,
                  },
                  className: "group-hover:fill-gold transition-colors",
                  children: "ADVOCACIA",
                }),
              ],
            }),
          }),
          u.jsxs("div", {
            className: "hidden items-center gap-10 md:flex",
            children: [
              u.jsx("div", {
                className: "flex gap-10",
                children: r.map((s) =>
                  u.jsxs(
                    je,
                    {
                      to: s.to,
                      hash: s.hash,
                      className:
                        "group relative text-[13px] font-bold uppercase tracking-[0.15em] text-white/80 transition-colors hover:text-gold",
                      children: [
                        s.name,
                        u.jsx("span", {
                          className:
                            "absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full",
                        }),
                      ],
                    },
                    s.name,
                  ),
                ),
              }),
              u.jsxs(Eu, {
                modal: !1,
                children: [
                  u.jsxs(Cu, {
                    className:
                      "group flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.15em] text-white outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-velvet rounded-sm px-2 py-1 -mx-2",
                    children: [
                      u.jsxs("span", {
                        className: "relative pb-1",
                        children: [
                          "FALE CONOSCO",
                          u.jsx(ne.span, {
                            className: "absolute bottom-0 left-0 h-0.5 bg-gold",
                            initial: { width: "100%" },
                            whileHover: { width: "120%", left: "-10%" },
                          }),
                        ],
                      }),
                      u.jsx(Ws, {
                        className:
                          "h-3 w-3 text-gold transition-transform duration-500 group-data-[state=open]:rotate-180",
                      }),
                    ],
                  }),
                  u.jsxs(us, {
                    align: "end",
                    sideOffset: 20,
                    className:
                      "w-64 rounded-2xl border-white/10 bg-white/95 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-300",
                    children: [
                      u.jsx(Nt, {
                        className:
                          "rounded-xl cursor-pointer px-4 py-4 font-serif text-lg text-velvet focus:bg-velvet focus:text-gold transition-all duration-300 group",
                        children: u.jsxs(je, {
                          to: "/",
                          hash: "contato",
                          className: "flex w-full items-center justify-between",
                          children: [
                            "Agendar Reunião",
                            u.jsx(et, {
                              className:
                                "h-4 w-4 opacity-0 -translate-x-2 group-focus:opacity-100 group-focus:translate-x-0 transition-all",
                            }),
                          ],
                        }),
                      }),
                      u.jsx(Nt, {
                        className:
                          "rounded-xl cursor-pointer px-4 py-4 font-serif text-lg text-velvet focus:bg-velvet focus:text-gold transition-all duration-300 group",
                        children: u.jsxs(je, {
                          to: "/",
                          hash: "contato",
                          className: "flex w-full items-center justify-between",
                          children: [
                            "Contato",
                            u.jsx(et, {
                              className:
                                "h-4 w-4 opacity-0 -translate-x-2 group-focus:opacity-100 group-focus:translate-x-0 transition-all",
                            }),
                          ],
                        }),
                      }),
                      u.jsx("div", { className: "my-2 h-px bg-gold/10" }),
                      u.jsx(Nt, {
                        className:
                          "rounded-xl cursor-pointer px-4 py-4 font-serif text-lg text-velvet focus:bg-velvet focus:text-gold transition-all duration-300 group",
                        children: u.jsxs("a", {
                          href: "mailto:rh@ayrtonpedrosa.com",
                          className: "flex w-full items-center justify-between",
                          children: [
                            "Trabalhe Conosco",
                            u.jsx(et, {
                              className:
                                "h-4 w-4 opacity-0 -translate-x-2 group-focus:opacity-100 group-focus:translate-x-0 transition-all",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          u.jsx("button", {
            className: "text-white md:hidden",
            onClick: () => o(!n),
            children: n ? u.jsx(aa, {}) : u.jsx(Qs, {}),
          }),
        ],
      }),
      u.jsx(mn, {
        children:
          n &&
          u.jsx(ne.div, {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.3, ease: "easeInOut" },
            className: "border-t border-white/10 bg-velvet md:hidden shadow-2xl overflow-hidden",
            children: u.jsxs("div", {
              className: "mx-auto max-w-7xl px-6 py-10 flex flex-col gap-8",
              children: [
                u.jsx("div", {
                  className: "flex flex-col gap-4",
                  children: r.map((s) =>
                    u.jsxs(
                      je,
                      {
                        to: s.to,
                        hash: s.hash,
                        className:
                          "flex items-center justify-between border-b border-white/5 pb-5 text-[14px] font-bold uppercase tracking-[0.2em] text-white/90 active:text-gold transition-colors",
                        onClick: () => o(!1),
                        children: [s.name, u.jsx(et, { className: "h-4 w-4 text-gold/50" })],
                      },
                      s.name,
                    ),
                  ),
                }),
                u.jsxs("div", {
                  className: "mt-4 pt-8 border-t border-white/10 space-y-6",
                  children: [
                    u.jsx("p", {
                      className:
                        "text-[10px] uppercase tracking-[0.3em] text-gold font-bold opacity-70",
                      children: "Fale Conosco",
                    }),
                    u.jsxs("div", {
                      className: "grid gap-6",
                      children: [
                        u.jsx(je, {
                          to: "/",
                          hash: "contato",
                          className: "text-white font-serif text-xl",
                          onClick: () => o(!1),
                          children: "Agendar Reunião",
                        }),
                        u.jsx(je, {
                          to: "/",
                          hash: "contato",
                          className: "text-white font-serif text-xl",
                          onClick: () => o(!1),
                          children: "Contato",
                        }),
                        u.jsx("a", {
                          href: "mailto:rh@ayrtonpedrosa.com",
                          className: "text-white font-serif text-xl",
                          onClick: () => o(!1),
                          children: "Trabalhe Conosco",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      }),
    ],
  });
}
const _u = "/assets/footer_classic_law--6_7cUMD.png";
function xd({ year: e }) {
  return u.jsxs("footer", {
    className: "relative border-t border-white/5 bg-stone-950 overflow-hidden",
    children: [
      u.jsx("img", {
        src: _u,
        alt: "Legal Background",
        loading: "lazy",
        className: "absolute inset-0 w-full h-full object-cover opacity-60",
      }),
      u.jsx("div", {
        className: "absolute inset-0 bg-gradient-to-b from-velvet/80 via-velvet/95 to-velvet",
      }),
      u.jsx("div", { className: "absolute inset-0 bg-black/40" }),
      u.jsxs(ne.div, {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0 },
        transition: { duration: 1 },
        className: "relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12",
        children: [
          u.jsxs("div", {
            className: "md:col-span-5",
            children: [
              u.jsx("div", {
                className: "flex group items-center -ml-4",
                children: u.jsxs("svg", {
                  width: "400",
                  height: "120",
                  viewBox: "0 0 600 120",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-24 w-auto",
                  children: [
                    u.jsxs("g", {
                      transform: "translate(30, 30)",
                      children: [
                        u.jsx("line", {
                          x1: "0",
                          y1: "60",
                          x2: "25",
                          y2: "0",
                          stroke: "white",
                          strokeWidth: "2.5",
                          className: "group-hover:stroke-gold transition-colors",
                        }),
                        u.jsx("line", {
                          x1: "25",
                          y1: "0",
                          x2: "25",
                          y2: "60",
                          stroke: "white",
                          strokeWidth: "2.5",
                          className: "group-hover:stroke-gold transition-colors",
                        }),
                        u.jsx("line", {
                          x1: "12.5",
                          y1: "30",
                          x2: "25",
                          y2: "30",
                          stroke: "white",
                          strokeWidth: "2.5",
                          className: "group-hover:stroke-gold transition-colors",
                        }),
                        u.jsx("path", {
                          d: "M25 0H50V30H25",
                          stroke: "white",
                          strokeWidth: "2.5",
                          fill: "none",
                          className: "group-hover:stroke-gold transition-colors",
                        }),
                      ],
                    }),
                    u.jsx("text", {
                      x: "110",
                      y: "65",
                      fill: "white",
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "28px",
                        fontWeight: 300,
                        letterSpacing: "0.25em",
                      },
                      className: "group-hover:fill-gold transition-colors",
                      children: "AYRTON PEDROSA",
                    }),
                    u.jsx("text", {
                      x: "210",
                      y: "95",
                      fill: "white",
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "12px",
                        fontWeight: 300,
                        letterSpacing: "0.8em",
                        opacity: 0.8,
                      },
                      className: "group-hover:fill-gold transition-colors",
                      children: "ADVOCACIA",
                    }),
                  ],
                }),
              }),
              u.jsx("p", {
                className: "mt-8 max-w-sm text-base leading-relaxed text-white/60 font-light",
                children:
                  "Estratégia jurídica especializada para empresas e pessoas que buscam segurança, inovação e resultados.",
              }),
            ],
          }),
          u.jsxs("div", {
            className: "md:col-span-4",
            children: [
              u.jsx("h4", {
                className: "text-[10px] uppercase tracking-widest text-gold font-medium mb-8",
                children: "Contato Direto",
              }),
              u.jsxs(ne.ul, {
                initial: "hidden",
                whileInView: "show",
                viewport: { once: !0 },
                variants: {
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
                },
                className: "space-y-6 text-sm text-white/80",
                children: [
                  u.jsxs(ne.li, {
                    variants: { hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } },
                    className: "flex items-center gap-4 group cursor-pointer",
                    children: [
                      u.jsx("div", {
                        className:
                          "flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gold transition-colors group-hover:bg-gold group-hover:text-velvet",
                        children: u.jsx(Eo, { className: "h-4 w-4" }),
                      }),
                      u.jsx("span", {
                        className:
                          "group-hover:text-white transition-colors text-base font-sans break-words leading-tight",
                        children: "contato@ayrtonpedrosa.com",
                      }),
                    ],
                  }),
                  u.jsxs(ne.li, {
                    variants: { hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } },
                    className: "flex items-center gap-4 group cursor-pointer",
                    children: [
                      u.jsx("div", {
                        className:
                          "flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gold transition-colors group-hover:bg-gold group-hover:text-velvet",
                        children: u.jsx(Co, { className: "h-4 w-4" }),
                      }),
                      u.jsx("a", {
                        href: "https://wa.me/5581997586830",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "group-hover:text-white transition-colors text-base font-sans",
                        children: "+55 (81) 99758-6830",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            className: "md:col-span-3",
            children: [
              u.jsx("h4", {
                className: "text-[10px] uppercase tracking-widest text-gold font-medium mb-8",
                children: "Presença Digital",
              }),
              u.jsxs("a", {
                href: "https://www.instagram.com/ayrtonpedrosa.adv",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "group flex items-center gap-4 p-4 -m-4 rounded-xl hover:bg-white/5 transition-all",
                children: [
                  u.jsx("div", {
                    className:
                      "flex h-12 w-12 items-center justify-center border border-gold/40 text-gold rounded-lg transition-all group-hover:bg-gold group-hover:text-velvet group-hover:shadow-lg group-hover:shadow-gold/20",
                    children: u.jsx(bo, { className: "h-5 w-5" }),
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("p", {
                        className: "text-[10px] uppercase tracking-widest text-white/40",
                        children: "Instagram",
                      }),
                      u.jsx("p", {
                        className:
                          "text-lg font-sans text-white group-hover:text-gold transition-colors",
                        children: "@ayrtonpedrosa.adv",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      u.jsx("div", {
        className: "relative border-t border-white/5",
        children: u.jsxs("div", {
          className:
            "mx-auto max-w-7xl px-6 py-8 text-center text-[10px] uppercase tracking-widest text-white/30",
          children: [
            "Ayrton Pedrosa Advocacia · OAB/PE 35.952 · ",
            e,
            " · Todos os Direitos Reservados",
          ],
        }),
      }),
    ],
  });
}
function yd() {
  const [e, t] = l.useState(!1);
  l.useEffect(() => {
    const o = () => {
      window.scrollY > 400 ? t(!0) : t(!1);
    };
    return (window.addEventListener("scroll", o), () => window.removeEventListener("scroll", o));
  }, []);
  const n = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return u.jsx(mn, {
    children:
      e &&
      u.jsx(ne.button, {
        initial: { opacity: 0, y: 20, scale: 0.8 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 20, scale: 0.8 },
        transition: { duration: 0.3 },
        onClick: n,
        className:
          "fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-velvet/80 backdrop-blur-sm text-gold border border-gold/20 shadow-2xl hover:bg-gold hover:text-velvet transition-all duration-300",
        "aria-label": "Voltar ao topo",
        children: u.jsx(Ds, { className: "h-4 w-4", strokeWidth: 1.5 }),
      }),
  });
}
const ds = l.forwardRef(({ className: e, ...t }, n) =>
  u.jsx("textarea", {
    className: Se(
      "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e,
    ),
    ref: n,
    ...t,
  }),
);
ds.displayName = "Textarea";
function Tu(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0],
    n = document.createElement("style");
  ((n.type = "text/css"),
    t.appendChild(n),
    n.styleSheet ? (n.styleSheet.cssText = e) : n.appendChild(document.createTextNode(e)));
}
const ku = (e) => {
    switch (e) {
      case "success":
        return Iu;
      case "info":
        return Lu;
      case "warning":
        return Du;
      case "error":
        return Fu;
      default:
        return null;
    }
  },
  Ou = Array(12).fill(0),
  ju = ({ visible: e, className: t }) =>
    E.createElement(
      "div",
      { className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "), "data-visible": e },
      E.createElement(
        "div",
        { className: "sonner-spinner" },
        Ou.map((n, o) =>
          E.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${o}` }),
        ),
      ),
    ),
  Iu = E.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    E.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  Du = E.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    E.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  Lu = E.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    E.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  Fu = E.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    E.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  $u = E.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    E.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    E.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  Bu = () => {
    const [e, t] = E.useState(document.hidden);
    return (
      E.useEffect(() => {
        const n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  };
let pn = 1;
class Wu {
  constructor() {
    ((this.subscribe = (t) => (
      this.subscribers.push(t),
      () => {
        const n = this.subscribers.indexOf(t);
        this.subscribers.splice(n, 1);
      }
    )),
      (this.publish = (t) => {
        this.subscribers.forEach((n) => n(t));
      }),
      (this.addToast = (t) => {
        (this.publish(t), (this.toasts = [...this.toasts, t]));
      }),
      (this.create = (t) => {
        var n;
        const { message: o, ...r } = t,
          s =
            typeof t?.id == "number" || ((n = t.id) == null ? void 0 : n.length) > 0 ? t.id : pn++,
          c = this.toasts.find((p) => p.id === s),
          i = t.dismissible === void 0 ? !0 : t.dismissible;
        return (
          this.dismissedToasts.has(s) && this.dismissedToasts.delete(s),
          c
            ? (this.toasts = this.toasts.map((p) =>
                p.id === s
                  ? (this.publish({ ...p, ...t, id: s, title: o }),
                    { ...p, ...t, id: s, dismissible: i, title: o })
                  : p,
              ))
            : this.addToast({ title: o, ...r, dismissible: i, id: s }),
          s
        );
      }),
      (this.dismiss = (t) => (
        t
          ? (this.dismissedToasts.add(t),
            requestAnimationFrame(() => this.subscribers.forEach((n) => n({ id: t, dismiss: !0 }))))
          : this.toasts.forEach((n) => {
              this.subscribers.forEach((o) => o({ id: n.id, dismiss: !0 }));
            }),
        t
      )),
      (this.message = (t, n) => this.create({ ...n, message: t })),
      (this.error = (t, n) => this.create({ ...n, message: t, type: "error" })),
      (this.success = (t, n) => this.create({ ...n, type: "success", message: t })),
      (this.info = (t, n) => this.create({ ...n, type: "info", message: t })),
      (this.warning = (t, n) => this.create({ ...n, type: "warning", message: t })),
      (this.loading = (t, n) => this.create({ ...n, type: "loading", message: t })),
      (this.promise = (t, n) => {
        if (!n) return;
        let o;
        n.loading !== void 0 &&
          (o = this.create({
            ...n,
            promise: t,
            type: "loading",
            message: n.loading,
            description: typeof n.description != "function" ? n.description : void 0,
          }));
        const r = Promise.resolve(t instanceof Function ? t() : t);
        let s = o !== void 0,
          c;
        const i = r
            .then(async (d) => {
              if (((c = ["resolve", d]), E.isValidElement(d)))
                ((s = !1), this.create({ id: o, type: "default", message: d }));
              else if (zu(d) && !d.ok) {
                s = !1;
                const a =
                    typeof n.error == "function"
                      ? await n.error(`HTTP error! status: ${d.status}`)
                      : n.error,
                  m =
                    typeof n.description == "function"
                      ? await n.description(`HTTP error! status: ${d.status}`)
                      : n.description,
                  v = typeof a == "object" && !E.isValidElement(a) ? a : { message: a };
                this.create({ id: o, type: "error", description: m, ...v });
              } else if (d instanceof Error) {
                s = !1;
                const a = typeof n.error == "function" ? await n.error(d) : n.error,
                  m = typeof n.description == "function" ? await n.description(d) : n.description,
                  v = typeof a == "object" && !E.isValidElement(a) ? a : { message: a };
                this.create({ id: o, type: "error", description: m, ...v });
              } else if (n.success !== void 0) {
                s = !1;
                const a = typeof n.success == "function" ? await n.success(d) : n.success,
                  m = typeof n.description == "function" ? await n.description(d) : n.description,
                  v = typeof a == "object" && !E.isValidElement(a) ? a : { message: a };
                this.create({ id: o, type: "success", description: m, ...v });
              }
            })
            .catch(async (d) => {
              if (((c = ["reject", d]), n.error !== void 0)) {
                s = !1;
                const f = typeof n.error == "function" ? await n.error(d) : n.error,
                  a = typeof n.description == "function" ? await n.description(d) : n.description,
                  h = typeof f == "object" && !E.isValidElement(f) ? f : { message: f };
                this.create({ id: o, type: "error", description: a, ...h });
              }
            })
            .finally(() => {
              (s && (this.dismiss(o), (o = void 0)), n.finally == null || n.finally.call(n));
            }),
          p = () =>
            new Promise((d, f) => i.then(() => (c[0] === "reject" ? f(c[1]) : d(c[1]))).catch(f));
        return typeof o != "string" && typeof o != "number"
          ? { unwrap: p }
          : Object.assign(o, { unwrap: p });
      }),
      (this.custom = (t, n) => {
        const o = n?.id || pn++;
        return (this.create({ jsx: t(o), id: o, ...n }), o);
      }),
      (this.getActiveToasts = () => this.toasts.filter((t) => !this.dismissedToasts.has(t.id))),
      (this.subscribers = []),
      (this.toasts = []),
      (this.dismissedToasts = new Set()));
  }
}
const te = new Wu(),
  Hu = (e, t) => {
    const n = t?.id || pn++;
    return (te.addToast({ title: e, ...t, id: n }), n);
  },
  zu = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  Vu = Hu,
  Uu = () => te.toasts,
  Ku = () => te.getActiveToasts(),
  mo = Object.assign(
    Vu,
    {
      success: te.success,
      info: te.info,
      warning: te.warning,
      error: te.error,
      custom: te.custom,
      message: te.message,
      promise: te.promise,
      dismiss: te.dismiss,
      loading: te.loading,
    },
    { getHistory: Uu, getToasts: Ku },
  );
Tu(
  "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}",
);
function Et(e) {
  return e.label !== void 0;
}
const Yu = 3,
  Gu = "24px",
  Xu = "16px",
  ho = 4e3,
  qu = 356,
  Zu = 14,
  Qu = 45,
  Ju = 200;
function he(...e) {
  return e.filter(Boolean).join(" ");
}
function ed(e) {
  const [t, n] = e.split("-"),
    o = [];
  return (t && o.push(t), n && o.push(n), o);
}
const td = (e) => {
  var t, n, o, r, s, c, i, p, d;
  const {
      invert: f,
      toast: a,
      unstyled: m,
      interacting: h,
      setHeights: v,
      visibleToasts: g,
      heights: y,
      index: x,
      toasts: C,
      expanded: b,
      removeToast: w,
      defaultRichColors: S,
      closeButton: N,
      style: R,
      cancelButtonStyle: A,
      actionButtonStyle: _,
      className: k = "",
      descriptionClassName: L = "",
      duration: $,
      position: D,
      gap: B,
      expandByDefault: K,
      classNames: P,
      icons: j,
      closeButtonAriaLabel: T = "Close toast",
    } = e,
    [M, H] = E.useState(null),
    [G, ce] = E.useState(null),
    [I, z] = E.useState(!1),
    [V, Y] = E.useState(!1),
    [U, W] = E.useState(!1),
    [Ne, $e] = E.useState(!1),
    [Be, Me] = E.useState(!1),
    [We, Wt] = E.useState(0),
    [fs, _n] = E.useState(0),
    Je = E.useRef(a.duration || $ || ho),
    Tn = E.useRef(null),
    we = E.useRef(null),
    ps = x === 0,
    ms = x + 1 <= g,
    re = a.type,
    He = a.dismissible !== !1,
    hs = a.className || "",
    gs = a.descriptionClassName || "",
    ft = E.useMemo(() => y.findIndex((O) => O.toastId === a.id) || 0, [y, a.id]),
    vs = E.useMemo(() => {
      var O;
      return (O = a.closeButton) != null ? O : N;
    }, [a.closeButton, N]),
    kn = E.useMemo(() => a.duration || $ || ho, [a.duration, $]),
    Ht = E.useRef(0),
    ze = E.useRef(0),
    On = E.useRef(0),
    Ve = E.useRef(null),
    [xs, ys] = D.split("-"),
    jn = E.useMemo(() => y.reduce((O, X, Q) => (Q >= ft ? O : O + X.height), 0), [y, ft]),
    In = Bu(),
    ws = a.invert || f,
    zt = re === "loading";
  ((ze.current = E.useMemo(() => ft * B + jn, [ft, jn])),
    E.useEffect(() => {
      Je.current = kn;
    }, [kn]),
    E.useEffect(() => {
      z(!0);
    }, []),
    E.useEffect(() => {
      const O = we.current;
      if (O) {
        const X = O.getBoundingClientRect().height;
        return (
          _n(X),
          v((Q) => [{ toastId: a.id, height: X, position: a.position }, ...Q]),
          () => v((Q) => Q.filter((se) => se.toastId !== a.id))
        );
      }
    }, [v, a.id]),
    E.useLayoutEffect(() => {
      if (!I) return;
      const O = we.current,
        X = O.style.height;
      O.style.height = "auto";
      const Q = O.getBoundingClientRect().height;
      ((O.style.height = X),
        _n(Q),
        v((se) =>
          se.find((q) => q.toastId === a.id)
            ? se.map((q) => (q.toastId === a.id ? { ...q, height: Q } : q))
            : [{ toastId: a.id, height: Q, position: a.position }, ...se],
        ));
    }, [I, a.title, a.description, v, a.id, a.jsx, a.action, a.cancel]));
  const Ae = E.useCallback(() => {
    (Y(!0),
      Wt(ze.current),
      v((O) => O.filter((X) => X.toastId !== a.id)),
      setTimeout(() => {
        w(a);
      }, Ju));
  }, [a, w, v, ze]);
  (E.useEffect(() => {
    if ((a.promise && re === "loading") || a.duration === 1 / 0 || a.type === "loading") return;
    let O;
    return (
      b || h || In
        ? (() => {
            if (On.current < Ht.current) {
              const se = new Date().getTime() - Ht.current;
              Je.current = Je.current - se;
            }
            On.current = new Date().getTime();
          })()
        : Je.current !== 1 / 0 &&
          ((Ht.current = new Date().getTime()),
          (O = setTimeout(() => {
            (a.onAutoClose == null || a.onAutoClose.call(a, a), Ae());
          }, Je.current))),
      () => clearTimeout(O)
    );
  }, [b, h, a, re, In, Ae]),
    E.useEffect(() => {
      a.delete && (Ae(), a.onDismiss == null || a.onDismiss.call(a, a));
    }, [Ae, a.delete]));
  function bs() {
    var O;
    if (j?.loading) {
      var X;
      return E.createElement(
        "div",
        {
          className: he(
            P?.loader,
            a == null || (X = a.classNames) == null ? void 0 : X.loader,
            "sonner-loader",
          ),
          "data-visible": re === "loading",
        },
        j.loading,
      );
    }
    return E.createElement(ju, {
      className: he(P?.loader, a == null || (O = a.classNames) == null ? void 0 : O.loader),
      visible: re === "loading",
    });
  }
  const Es = a.icon || j?.[re] || ku(re);
  var Dn, Ln;
  return E.createElement(
    "li",
    {
      tabIndex: 0,
      ref: we,
      className: he(
        k,
        hs,
        P?.toast,
        a == null || (t = a.classNames) == null ? void 0 : t.toast,
        P?.default,
        P?.[re],
        a == null || (n = a.classNames) == null ? void 0 : n[re],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (Dn = a.richColors) != null ? Dn : S,
      "data-styled": !(a.jsx || a.unstyled || m),
      "data-mounted": I,
      "data-promise": !!a.promise,
      "data-swiped": Be,
      "data-removed": V,
      "data-visible": ms,
      "data-y-position": xs,
      "data-x-position": ys,
      "data-index": x,
      "data-front": ps,
      "data-swiping": U,
      "data-dismissible": He,
      "data-type": re,
      "data-invert": ws,
      "data-swipe-out": Ne,
      "data-swipe-direction": G,
      "data-expanded": !!(b || (K && I)),
      "data-testid": a.testId,
      style: {
        "--index": x,
        "--toasts-before": x,
        "--z-index": C.length - x,
        "--offset": `${V ? We : ze.current}px`,
        "--initial-height": K ? "auto" : `${fs}px`,
        ...R,
        ...a.style,
      },
      onDragEnd: () => {
        (W(!1), H(null), (Ve.current = null));
      },
      onPointerDown: (O) => {
        O.button !== 2 &&
          (zt ||
            !He ||
            ((Tn.current = new Date()),
            Wt(ze.current),
            O.target.setPointerCapture(O.pointerId),
            O.target.tagName !== "BUTTON" &&
              (W(!0), (Ve.current = { x: O.clientX, y: O.clientY }))));
      },
      onPointerUp: () => {
        var O, X, Q;
        if (Ne || !He) return;
        Ve.current = null;
        const se = Number(
            ((O = we.current) == null
              ? void 0
              : O.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0,
          ),
          pt = Number(
            ((X = we.current) == null
              ? void 0
              : X.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0,
          ),
          q = new Date().getTime() - ((Q = Tn.current) == null ? void 0 : Q.getTime()),
          le = M === "x" ? se : pt,
          mt = Math.abs(le) / q;
        if (Math.abs(le) >= Qu || mt > 0.11) {
          (Wt(ze.current),
            a.onDismiss == null || a.onDismiss.call(a, a),
            ce(M === "x" ? (se > 0 ? "right" : "left") : pt > 0 ? "down" : "up"),
            Ae(),
            $e(!0));
          return;
        } else {
          var de, fe;
          ((de = we.current) == null || de.style.setProperty("--swipe-amount-x", "0px"),
            (fe = we.current) == null || fe.style.setProperty("--swipe-amount-y", "0px"));
        }
        (Me(!1), W(!1), H(null));
      },
      onPointerMove: (O) => {
        var X, Q, se;
        if (
          !Ve.current ||
          !He ||
          ((X = window.getSelection()) == null ? void 0 : X.toString().length) > 0
        )
          return;
        const q = O.clientY - Ve.current.y,
          le = O.clientX - Ve.current.x;
        var mt;
        const de = (mt = e.swipeDirections) != null ? mt : ed(D);
        !M && (Math.abs(le) > 1 || Math.abs(q) > 1) && H(Math.abs(le) > Math.abs(q) ? "x" : "y");
        let fe = { x: 0, y: 0 };
        const Fn = (Oe) => 1 / (1.5 + Math.abs(Oe) / 20);
        if (M === "y") {
          if (de.includes("top") || de.includes("bottom"))
            if ((de.includes("top") && q < 0) || (de.includes("bottom") && q > 0)) fe.y = q;
            else {
              const Oe = q * Fn(q);
              fe.y = Math.abs(Oe) < Math.abs(q) ? Oe : q;
            }
        } else if (M === "x" && (de.includes("left") || de.includes("right")))
          if ((de.includes("left") && le < 0) || (de.includes("right") && le > 0)) fe.x = le;
          else {
            const Oe = le * Fn(le);
            fe.x = Math.abs(Oe) < Math.abs(le) ? Oe : le;
          }
        ((Math.abs(fe.x) > 0 || Math.abs(fe.y) > 0) && Me(!0),
          (Q = we.current) == null || Q.style.setProperty("--swipe-amount-x", `${fe.x}px`),
          (se = we.current) == null || se.style.setProperty("--swipe-amount-y", `${fe.y}px`));
      },
    },
    vs && !a.jsx && re !== "loading"
      ? E.createElement(
          "button",
          {
            "aria-label": T,
            "data-disabled": zt,
            "data-close-button": !0,
            onClick:
              zt || !He
                ? () => {}
                : () => {
                    (Ae(), a.onDismiss == null || a.onDismiss.call(a, a));
                  },
            className: he(
              P?.closeButton,
              a == null || (o = a.classNames) == null ? void 0 : o.closeButton,
            ),
          },
          (Ln = j?.close) != null ? Ln : $u,
        )
      : null,
    (re || a.icon || a.promise) && a.icon !== null && (j?.[re] !== null || a.icon)
      ? E.createElement(
          "div",
          {
            "data-icon": "",
            className: he(P?.icon, a == null || (r = a.classNames) == null ? void 0 : r.icon),
          },
          a.promise || (a.type === "loading" && !a.icon) ? a.icon || bs() : null,
          a.type !== "loading" ? Es : null,
        )
      : null,
    E.createElement(
      "div",
      {
        "data-content": "",
        className: he(P?.content, a == null || (s = a.classNames) == null ? void 0 : s.content),
      },
      E.createElement(
        "div",
        {
          "data-title": "",
          className: he(P?.title, a == null || (c = a.classNames) == null ? void 0 : c.title),
        },
        a.jsx ? a.jsx : typeof a.title == "function" ? a.title() : a.title,
      ),
      a.description
        ? E.createElement(
            "div",
            {
              "data-description": "",
              className: he(
                L,
                gs,
                P?.description,
                a == null || (i = a.classNames) == null ? void 0 : i.description,
              ),
            },
            typeof a.description == "function" ? a.description() : a.description,
          )
        : null,
    ),
    E.isValidElement(a.cancel)
      ? a.cancel
      : a.cancel && Et(a.cancel)
        ? E.createElement(
            "button",
            {
              "data-button": !0,
              "data-cancel": !0,
              style: a.cancelButtonStyle || A,
              onClick: (O) => {
                Et(a.cancel) &&
                  He &&
                  (a.cancel.onClick == null || a.cancel.onClick.call(a.cancel, O), Ae());
              },
              className: he(
                P?.cancelButton,
                a == null || (p = a.classNames) == null ? void 0 : p.cancelButton,
              ),
            },
            a.cancel.label,
          )
        : null,
    E.isValidElement(a.action)
      ? a.action
      : a.action && Et(a.action)
        ? E.createElement(
            "button",
            {
              "data-button": !0,
              "data-action": !0,
              style: a.actionButtonStyle || _,
              onClick: (O) => {
                Et(a.action) &&
                  (a.action.onClick == null || a.action.onClick.call(a.action, O),
                  !O.defaultPrevented && Ae());
              },
              className: he(
                P?.actionButton,
                a == null || (d = a.classNames) == null ? void 0 : d.actionButton,
              ),
            },
            a.action.label,
          )
        : null,
  );
};
function go() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function nd(e, t) {
  const n = {};
  return (
    [e, t].forEach((o, r) => {
      const s = r === 1,
        c = s ? "--mobile-offset" : "--offset",
        i = s ? Xu : Gu;
      function p(d) {
        ["top", "right", "bottom", "left"].forEach((f) => {
          n[`${c}-${f}`] = typeof d == "number" ? `${d}px` : d;
        });
      }
      typeof o == "number" || typeof o == "string"
        ? p(o)
        : typeof o == "object"
          ? ["top", "right", "bottom", "left"].forEach((d) => {
              o[d] === void 0
                ? (n[`${c}-${d}`] = i)
                : (n[`${c}-${d}`] = typeof o[d] == "number" ? `${o[d]}px` : o[d]);
            })
          : p(i);
    }),
    n
  );
}
const wd = E.forwardRef(function (t, n) {
  const {
      id: o,
      invert: r,
      position: s = "bottom-right",
      hotkey: c = ["altKey", "KeyT"],
      expand: i,
      closeButton: p,
      className: d,
      offset: f,
      mobileOffset: a,
      theme: m = "light",
      richColors: h,
      duration: v,
      style: g,
      visibleToasts: y = Yu,
      toastOptions: x,
      dir: C = go(),
      gap: b = Zu,
      icons: w,
      containerAriaLabel: S = "Notifications",
    } = t,
    [N, R] = E.useState([]),
    A = E.useMemo(
      () => (o ? N.filter((I) => I.toasterId === o) : N.filter((I) => !I.toasterId)),
      [N, o],
    ),
    _ = E.useMemo(
      () => Array.from(new Set([s].concat(A.filter((I) => I.position).map((I) => I.position)))),
      [A, s],
    ),
    [k, L] = E.useState([]),
    [$, D] = E.useState(!1),
    [B, K] = E.useState(!1),
    [P, j] = E.useState(
      m !== "system"
        ? m
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    T = E.useRef(null),
    M = c.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    H = E.useRef(null),
    G = E.useRef(!1),
    ce = E.useCallback((I) => {
      R((z) => {
        var V;
        return (
          ((V = z.find((Y) => Y.id === I.id)) != null && V.delete) || te.dismiss(I.id),
          z.filter(({ id: Y }) => Y !== I.id)
        );
      });
    }, []);
  return (
    E.useEffect(
      () =>
        te.subscribe((I) => {
          if (I.dismiss) {
            requestAnimationFrame(() => {
              R((z) => z.map((V) => (V.id === I.id ? { ...V, delete: !0 } : V)));
            });
            return;
          }
          setTimeout(() => {
            yo.flushSync(() => {
              R((z) => {
                const V = z.findIndex((Y) => Y.id === I.id);
                return V !== -1
                  ? [...z.slice(0, V), { ...z[V], ...I }, ...z.slice(V + 1)]
                  : [I, ...z];
              });
            });
          });
        }),
      [N],
    ),
    E.useEffect(() => {
      if (m !== "system") {
        j(m);
        return;
      }
      if (
        (m === "system" &&
          (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
            ? j("dark")
            : j("light")),
        typeof window > "u")
      )
        return;
      const I = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        I.addEventListener("change", ({ matches: z }) => {
          j(z ? "dark" : "light");
        });
      } catch {
        I.addListener(({ matches: V }) => {
          try {
            j(V ? "dark" : "light");
          } catch (Y) {
            console.error(Y);
          }
        });
      }
    }, [m]),
    E.useEffect(() => {
      N.length <= 1 && D(!1);
    }, [N]),
    E.useEffect(() => {
      const I = (z) => {
        var V;
        if (c.every((W) => z[W] || z.code === W)) {
          var U;
          (D(!0), (U = T.current) == null || U.focus());
        }
        z.code === "Escape" &&
          (document.activeElement === T.current ||
            ((V = T.current) != null && V.contains(document.activeElement))) &&
          D(!1);
      };
      return (
        document.addEventListener("keydown", I),
        () => document.removeEventListener("keydown", I)
      );
    }, [c]),
    E.useEffect(() => {
      if (T.current)
        return () => {
          H.current &&
            (H.current.focus({ preventScroll: !0 }), (H.current = null), (G.current = !1));
        };
    }, [T.current]),
    E.createElement(
      "section",
      {
        ref: n,
        "aria-label": `${S} ${M}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      _.map((I, z) => {
        var V;
        const [Y, U] = I.split("-");
        return A.length
          ? E.createElement(
              "ol",
              {
                key: I,
                dir: C === "auto" ? go() : C,
                tabIndex: -1,
                ref: T,
                className: d,
                "data-sonner-toaster": !0,
                "data-sonner-theme": P,
                "data-y-position": Y,
                "data-x-position": U,
                style: {
                  "--front-toast-height": `${((V = k[0]) == null ? void 0 : V.height) || 0}px`,
                  "--width": `${qu}px`,
                  "--gap": `${b}px`,
                  ...g,
                  ...nd(f, a),
                },
                onBlur: (W) => {
                  G.current &&
                    !W.currentTarget.contains(W.relatedTarget) &&
                    ((G.current = !1),
                    H.current && (H.current.focus({ preventScroll: !0 }), (H.current = null)));
                },
                onFocus: (W) => {
                  (W.target instanceof HTMLElement && W.target.dataset.dismissible === "false") ||
                    G.current ||
                    ((G.current = !0), (H.current = W.relatedTarget));
                },
                onMouseEnter: () => D(!0),
                onMouseMove: () => D(!0),
                onMouseLeave: () => {
                  B || D(!1);
                },
                onDragEnd: () => D(!1),
                onPointerDown: (W) => {
                  (W.target instanceof HTMLElement && W.target.dataset.dismissible === "false") ||
                    K(!0);
                },
                onPointerUp: () => K(!1),
              },
              A.filter((W) => (!W.position && z === 0) || W.position === I).map((W, Ne) => {
                var $e, Be;
                return E.createElement(td, {
                  key: W.id,
                  icons: w,
                  index: Ne,
                  toast: W,
                  defaultRichColors: h,
                  duration: ($e = x?.duration) != null ? $e : v,
                  className: x?.className,
                  descriptionClassName: x?.descriptionClassName,
                  invert: r,
                  visibleToasts: y,
                  closeButton: (Be = x?.closeButton) != null ? Be : p,
                  interacting: B,
                  position: I,
                  style: x?.style,
                  unstyled: x?.unstyled,
                  classNames: x?.classNames,
                  cancelButtonStyle: x?.cancelButtonStyle,
                  actionButtonStyle: x?.actionButtonStyle,
                  closeButtonAriaLabel: x?.closeButtonAriaLabel,
                  removeToast: ce,
                  toasts: A.filter((Me) => Me.position == W.position),
                  heights: k.filter((Me) => Me.position == W.position),
                  setHeights: L,
                  expandByDefault: i,
                  gap: b,
                  expanded: $,
                  swipeDirections: t.swipeDirections,
                });
              }),
            )
          : null;
      }),
    )
  );
});
function bd() {
  const [e, t] = l.useState(!1),
    [n, o] = l.useState(!1),
    r = async (s) => {
      (s.preventDefault(), t(!0));
      try {
        (await new Promise((c) => setTimeout(c, 1800)),
          o(!0),
          mo.success("Mensagem enviada! Sua solicitação foi registrada em nosso CRM."));
      } catch {
        mo.error("Erro ao enviar. Por favor, tente pelo WhatsApp.");
      } finally {
        t(!1);
      }
    };
  return u.jsx("section", {
    id: "contato",
    className: "relative bg-white py-28 md:py-40 overflow-hidden scroll-mt-28",
    children: u.jsx("div", {
      className: "mx-auto max-w-7xl px-6",
      children: u.jsxs("div", {
        className: "grid gap-16 lg:grid-cols-2 lg:gap-24",
        children: [
          u.jsxs(ne.div, {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: !0 },
            transition: { duration: 1 },
            children: [
              u.jsx("p", {
                className: "text-[10px] uppercase tracking-widest text-gold",
                children: "— Contato —",
              }),
              u.jsxs("h2", {
                className:
                  "mt-6 font-serif text-4xl font-medium leading-[1.1] text-velvet md:text-6xl",
                children: [
                  "Pronto para ",
                  u.jsx("span", { className: "text-gold", children: "proteger" }),
                  " o seu legado?",
                ],
              }),
              u.jsx("p", {
                className: "mt-8 text-lg leading-relaxed text-velvet/70 max-w-lg",
                children:
                  "Agende uma consulta especializada. Nossa equipe está pronta para oferecer a segurança jurídica que seus negócios exigem.",
              }),
              u.jsxs("div", {
                className: "mt-12 space-y-10",
                children: [
                  u.jsx(on, {
                    icon: Co,
                    title: "WhatsApp e Telefone",
                    content: "+55 (81) 99758-6830",
                    link: "https://wa.me/5581997586830",
                    delay: 0.2,
                  }),
                  u.jsx(on, {
                    icon: Eo,
                    title: "E-mail Institucional",
                    content: "contato@ayrtonpedrosa.com",
                    link: "mailto:contato@ayrtonpedrosa.com",
                    delay: 0.3,
                  }),
                  u.jsx(on, {
                    icon: As,
                    title: "Sede do Escritório",
                    content: "Recife/PE · Atendimento Nacional",
                    delay: 0.4,
                  }),
                ],
              }),
              u.jsx(ne.div, {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                transition: { delay: 0.8 },
                className: "mt-16 pt-10 border-t border-stone-100",
                children: u.jsxs("a", {
                  href: "https://www.instagram.com/ayrtonpedrosa.adv",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "group flex items-center gap-6",
                  children: [
                    u.jsx("div", {
                      className:
                        "flex h-14 w-14 items-center justify-center border border-stone-200 text-stone-400 transition-all group-hover:border-gold group-hover:text-gold group-hover:bg-gold/5",
                      children: u.jsx(bo, { className: "h-6 w-6" }),
                    }),
                    u.jsxs("div", {
                      children: [
                        u.jsx("p", {
                          className: "text-[10px] uppercase tracking-[0.2em] text-stone-400",
                          children: "Siga no Instagram",
                        }),
                        u.jsx("p", {
                          className:
                            "font-sans text-xl text-velvet group-hover:text-gold transition-colors",
                          children: "@ayrtonpedrosa.adv",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          u.jsx(ne.div, {
            initial: { opacity: 0, x: 30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: !0 },
            transition: { duration: 1, delay: 0.2 },
            className: "relative",
            children: u.jsx(mn, {
              mode: "wait",
              children: n
                ? u.jsxs(
                    ne.div,
                    {
                      initial: { opacity: 0, scale: 0.9 },
                      animate: { opacity: 1, scale: 1 },
                      exit: { opacity: 0, scale: 0.9 },
                      className:
                        "flex h-full flex-col items-center justify-center rounded-2xl bg-cream p-12 text-center shadow-inner",
                      children: [
                        u.jsx("div", {
                          className:
                            "flex h-20 w-20 items-center justify-center rounded-full bg-gold/10 text-gold mb-6",
                          children: u.jsx(zs, { className: "h-10 w-10" }),
                        }),
                        u.jsx("h3", {
                          className: "font-serif text-3xl font-medium text-velvet",
                          children: "Solicitação Enviada",
                        }),
                        u.jsx("p", {
                          className: "mt-4 text-velvet/60",
                          children:
                            "Sua mensagem foi registrada em nosso sistema. Um consultor entrará em contato em breve.",
                        }),
                        u.jsx($n, {
                          variant: "ghost",
                          onClick: () => o(!1),
                          className: "mt-8 text-gold hover:text-velvet hover:bg-gold/5",
                          children: "Enviar nova mensagem",
                        }),
                      ],
                    },
                    "success",
                  )
                : u.jsxs(
                    ne.form,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -10 },
                      onSubmit: r,
                      className:
                        "space-y-6 rounded-2xl bg-cream p-8 md:p-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.2)] border border-stone-200/50",
                      children: [
                        u.jsxs("div", {
                          className: "grid gap-6 md:grid-cols-2",
                          children: [
                            u.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                u.jsx("label", {
                                  className:
                                    "text-[10px] uppercase tracking-widest text-gold font-bold",
                                  children: "Nome Completo",
                                }),
                                u.jsx(Ut, {
                                  placeholder: "Seu nome",
                                  className:
                                    "bg-white border-stone-200 text-velvet placeholder:text-velvet/40 focus:border-gold focus:ring-1 focus:ring-gold/20 h-12 transition-all",
                                  required: !0,
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                u.jsx("label", {
                                  className:
                                    "text-[10px] uppercase tracking-widest text-gold font-bold",
                                  children: "WhatsApp",
                                }),
                                u.jsx(Ut, {
                                  placeholder: "(00) 00000-0000",
                                  className:
                                    "bg-white border-stone-200 text-velvet placeholder:text-velvet/40 focus:border-gold focus:ring-1 focus:ring-gold/20 h-12 transition-all",
                                  required: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            u.jsx("label", {
                              className:
                                "text-[10px] uppercase tracking-widest text-gold font-bold",
                              children: "Assunto",
                            }),
                            u.jsx(Ut, {
                              placeholder: "Ex: Regularização Fundiária",
                              className:
                                "bg-white border-stone-200 text-velvet placeholder:text-velvet/40 focus:border-gold focus:ring-1 focus:ring-gold/20 h-12 transition-all",
                              required: !0,
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            u.jsx("label", {
                              className:
                                "text-[10px] uppercase tracking-widest text-gold font-bold",
                              children: "Mensagem",
                            }),
                            u.jsx(ds, {
                              placeholder: "Como podemos ajudar?",
                              className:
                                "min-h-[120px] bg-white border-stone-200 text-velvet placeholder:text-velvet/40 focus:border-gold focus:ring-1 focus:ring-gold/20 resize-none p-4 transition-all",
                              required: !0,
                            }),
                          ],
                        }),
                        u.jsx($n, {
                          type: "submit",
                          disabled: e,
                          className:
                            "w-full bg-velvet hover:bg-velvet/90 text-white h-14 text-xs uppercase tracking-widest font-medium transition-all shadow-lg active:shadow-inner",
                          children: e
                            ? u.jsx(Xs, { className: "h-5 w-5 animate-spin" })
                            : u.jsxs("span", {
                                className: "flex items-center gap-3",
                                children: [
                                  "Enviar Solicitação ",
                                  u.jsx(na, { className: "h-4 w-4" }),
                                ],
                              }),
                        }),
                        u.jsx("p", {
                          className:
                            "text-[10px] text-center text-velvet/40 uppercase tracking-widest font-medium",
                          children: "Comunicação Segura · Protocolo SSL",
                        }),
                      ],
                    },
                    "form",
                  ),
            }),
          }),
        ],
      }),
    }),
  });
}
function on({ icon: e, title: t, content: n, link: o, delay: r = 0 }) {
  const s = o ? "a" : "div";
  return u.jsxs(ne.div, {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0 },
    transition: { duration: 0.6, delay: r },
    className: "flex items-start gap-4 md:gap-6",
    children: [
      u.jsx("div", {
        className: "flex h-10 w-10 shrink-0 items-center justify-center text-gold",
        children: u.jsx(e, { className: "h-6 w-6", strokeWidth: 1 }),
      }),
      u.jsxs("div", {
        children: [
          u.jsx("h4", {
            className: "text-[10px] uppercase tracking-widest text-gold font-medium",
            children: t,
          }),
          u.jsx(s, {
            href: o,
            target: o?.startsWith("http") ? "_blank" : void 0,
            className: `mt-1 block font-sans text-xl md:text-2xl text-velvet break-words leading-tight ${o ? "hover:text-gold transition-colors" : ""}`,
            children: n,
          }),
        ],
      }),
    ],
  });
}
export {
  mn as A,
  dd as B,
  bd as C,
  xd as F,
  fd as G,
  vd as N,
  pd as S,
  wd as T,
  hd as W,
  yd as a,
  md as b,
};
