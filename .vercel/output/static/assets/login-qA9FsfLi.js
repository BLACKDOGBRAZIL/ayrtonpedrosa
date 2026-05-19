import { d as i, j as e, u as b } from "./index-0qK1wPb4.js";
import { b as g, c as f, d as w, B as v } from "./button-CmpoKRFv.js";
import { I as x } from "./input-BJpobJm8.js";
import { m as N } from "./proxy-CNoJBy2S.js";
import { c as d } from "./createLucideIcon-_P2Vc871.js";
import { A as j } from "./arrow-right-Q-N9FBuB.js";
const y = [
    ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
  ],
  k = d("lock", y);
const z = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  P = d("shield-check", z);
const E = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  S = d("user", E);
var L = [
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
  A = L.reduce((a, s) => {
    const t = g(`Primitive.${s}`),
      o = i.forwardRef((l, n) => {
        const { asChild: r, ...u } = l,
          p = r ? t : s;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          e.jsx(p, { ...u, ref: n })
        );
      });
    return ((o.displayName = `Primitive.${s}`), { ...a, [s]: o });
  }, {}),
  C = "Label",
  m = i.forwardRef((a, s) =>
    e.jsx(A.label, {
      ...a,
      ref: s,
      onMouseDown: (t) => {
        t.target.closest("button, input, select, textarea") ||
          (a.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
      },
    }),
  );
m.displayName = C;
var h = m;
const D = w(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  ),
  c = i.forwardRef(({ className: a, ...s }, t) => e.jsx(h, { ref: t, className: f(D(), a), ...s }));
c.displayName = h.displayName;
function V() {
  const [a, s] = i.useState(""),
    [t, o] = i.useState(""),
    l = b(),
    n = (r) => {
      (r.preventDefault(), a && t && l({ to: "/dashboard" }));
    };
  return e.jsxs("div", {
    className:
      "min-h-screen bg-[#051a14] flex items-center justify-center p-6 relative overflow-hidden",
    children: [
      e.jsx("div", {
        className:
          "absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]",
      }),
      e.jsx("div", {
        className:
          "absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-green-900/10 rounded-full blur-[100px]",
      }),
      e.jsxs(N.div, {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "w-full max-w-md",
        children: [
          e.jsxs("div", {
            className: "text-center mb-10",
            children: [
              e.jsx("div", {
                className:
                  "inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 border border-gold/20 mb-6 shadow-xl",
                children: e.jsx(P, { className: "h-8 w-8 text-gold" }),
              }),
              e.jsxs("h1", {
                className: "font-serif text-3xl text-white mb-2 tracking-tight",
                children: [
                  "Portal do ",
                  e.jsx("span", { className: "italic text-gold", children: "Advogado" }),
                ],
              }),
              e.jsx("p", {
                className: "text-zinc-400 text-sm",
                children: "Escritório Digital Ayrton Pedrosa",
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl",
            children: e.jsxs("form", {
              onSubmit: n,
              className: "space-y-6",
              children: [
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(c, {
                      className:
                        "text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1",
                      children: "E-mail Profissional",
                    }),
                    e.jsxs("div", {
                      className: "relative",
                      children: [
                        e.jsx(S, {
                          className:
                            "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600",
                        }),
                        e.jsx(x, {
                          type: "email",
                          placeholder: "exemplo@adv.br",
                          className:
                            "bg-white/5 border-white/10 h-14 pl-12 text-white focus:bg-white/10 focus:border-gold/50 transition-all rounded-xl",
                          value: a,
                          onChange: (r) => s(r.target.value),
                          required: !0,
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(c, {
                      className:
                        "text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1",
                      children: "Senha",
                    }),
                    e.jsxs("div", {
                      className: "relative",
                      children: [
                        e.jsx(k, {
                          className:
                            "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600",
                        }),
                        e.jsx(x, {
                          type: "password",
                          placeholder: "••••••••",
                          className:
                            "bg-white/5 border-white/10 h-14 pl-12 text-white focus:bg-white/10 focus:border-gold/50 transition-all rounded-xl",
                          value: t,
                          onChange: (r) => o(r.target.value),
                          required: !0,
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("label", {
                      className: "flex items-center gap-2 cursor-pointer group",
                      children: [
                        e.jsx("input", {
                          type: "checkbox",
                          className: "w-4 h-4 rounded border-white/10 bg-white/5 accent-gold",
                        }),
                        e.jsx("span", {
                          className:
                            "text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors",
                          children: "Lembrar acesso",
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      type: "button",
                      className: "text-xs text-gold/80 hover:text-gold transition-colors",
                      children: "Esqueceu a senha?",
                    }),
                  ],
                }),
                e.jsxs(v, {
                  type: "submit",
                  className:
                    "w-full h-14 bg-gold hover:bg-white text-velvet font-bold uppercase tracking-[0.2em] text-xs rounded-xl shadow-lg shadow-gold/10 transition-all group",
                  children: [
                    "Entrar no Escritório",
                    e.jsx(j, {
                      className: "ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform",
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsxs("p", {
            className: "mt-8 text-center text-zinc-600 text-xs uppercase tracking-widest font-bold",
            children: [
              "© ",
              new Date().getFullYear(),
              " Ayrton Pedrosa Advocacia. Todos os direitos reservados.",
            ],
          }),
        ],
      }),
    ],
  });
}
export { V as component };
