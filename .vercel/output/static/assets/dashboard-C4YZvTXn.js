import { d, u as x, j as e, L as t, O as h } from "./index-0qK1wPb4.js";
import { c as a } from "./createLucideIcon-_P2Vc871.js";
import { U as p, C as g, F as m } from "./users-D_hOZg8s.js";
import { S as b } from "./search-DOKoJ-68.js";
const u = [
    ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
    [
      "path",
      {
        d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
        key: "11g9vi",
      },
    ],
  ],
  f = a("bell", u);
const w = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ],
  n = a("globe", w);
const j = [
    ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
    ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
    ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
    ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }],
  ],
  v = a("layout-dashboard", j);
const N = [
    ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
    ["path", { d: "M21 12H9", key: "dn1m92" }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ],
  y = a("log-out", N);
const k = [
    [
      "path",
      {
        d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
        key: "1i5ecw",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  _ = a("settings", k);
function S() {
  const [o, i] = d.useState("overview");
  x();
  const c = [
    { id: "overview", name: "Painel", icon: v, path: "/dashboard" },
    { id: "clients", name: "Clientes", icon: p, path: "/dashboard/clients" },
    { id: "agenda", name: "Agenda", icon: g, path: "/dashboard/agenda" },
    { id: "cases", name: "Processos", icon: m, path: "/dashboard/cases" },
  ];
  return e.jsxs("div", {
    className: "flex h-screen bg-[#fcfaf7] overflow-hidden",
    children: [
      e.jsxs("aside", {
        className: "hidden xl:flex w-72 bg-velvet text-white flex-col border-r border-white/5",
        children: [
          e.jsx("div", {
            className: "p-8",
            children: e.jsxs(t, {
              to: "/",
              className: "flex flex-col",
              children: [
                e.jsxs("span", {
                  className: "font-serif text-xl font-bold tracking-widest text-white",
                  children: [
                    "Ayrton ",
                    e.jsx("span", { className: "text-gold", children: "Pedrosa" }),
                  ],
                }),
                e.jsx("span", {
                  className: "text-[7px] uppercase tracking-[0.4em] text-white/40",
                  children: "Escritório Digital",
                }),
              ],
            }),
          }),
          e.jsx("nav", {
            className: "flex-1 px-4 py-4 space-y-2",
            children: c.map((s) => {
              const r = s.icon;
              return e.jsxs(
                t,
                {
                  to: s.path,
                  className: `flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all group ${o === s.id ? "bg-gold text-velvet shadow-lg shadow-gold/20" : "text-white/50 hover:bg-white/5 hover:text-white"}`,
                  onClick: () => i(s.id),
                  children: [
                    e.jsx(r, {
                      className: `h-5 w-5 ${o === s.id ? "text-velvet" : "text-white/30 group-hover:text-white"}`,
                    }),
                    e.jsx("span", {
                      className: "text-[13px] font-bold uppercase tracking-wider",
                      children: s.name,
                    }),
                  ],
                },
                s.id,
              );
            }),
          }),
          e.jsxs("div", {
            className: "p-6 border-t border-white/5 space-y-4",
            children: [
              e.jsxs(t, {
                to: "/",
                className:
                  "flex items-center gap-3 px-4 py-3 w-full text-white/60 hover:text-gold transition-colors group border border-white/5 rounded-xl hover:bg-white/5",
                children: [
                  e.jsx(n, { className: "h-5 w-5 opacity-40 group-hover:opacity-100" }),
                  e.jsx("span", {
                    className: "text-xs uppercase tracking-widest font-bold",
                    children: "Voltar ao Site",
                  }),
                ],
              }),
              e.jsxs("button", {
                className:
                  "flex items-center gap-3 px-4 py-3 w-full text-white/40 hover:text-white transition-colors group",
                children: [
                  e.jsx(_, { className: "h-5 w-5 opacity-40 group-hover:opacity-100" }),
                  e.jsx("span", {
                    className: "text-xs uppercase tracking-widest font-bold",
                    children: "Configurações",
                  }),
                ],
              }),
              e.jsxs(t, {
                to: "/",
                className:
                  "flex items-center gap-3 px-4 py-3 w-full text-red-400/60 hover:text-red-400 transition-colors group",
                children: [
                  e.jsx(y, { className: "h-5 w-5 opacity-40 group-hover:opacity-100" }),
                  e.jsx("span", {
                    className: "text-xs uppercase tracking-widest font-bold",
                    children: "Sair",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("main", {
        className: "flex-1 flex flex-col overflow-hidden pb-16 xl:pb-0",
        children: [
          e.jsxs("header", {
            className:
              "h-16 xl:h-20 bg-white border-b border-stone-100 flex items-center justify-between px-4 xl:px-10 shrink-0 z-20",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-3 xl:gap-4 flex-1 min-w-0",
                children: [
                  e.jsx("div", {
                    className: "xl:hidden shrink-0",
                    children: e.jsxs(t, {
                      to: "/",
                      className:
                        "flex items-center gap-1.5 bg-gold/10 px-2 py-1.5 rounded-lg border border-gold/20",
                      children: [
                        e.jsx(n, { className: "h-3.5 w-3.5 text-gold" }),
                        e.jsx("span", {
                          className:
                            "font-sans text-[9px] font-black text-velvet uppercase tracking-widest hidden sm:block",
                          children: "Site",
                        }),
                      ],
                    }),
                  }),
                  e.jsxs("div", {
                    className: "relative flex-1 max-w-[200px] xl:max-w-96",
                    children: [
                      e.jsx(b, {
                        className:
                          "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-stone-400",
                      }),
                      e.jsx("input", {
                        type: "text",
                        placeholder: "Buscar...",
                        className:
                          "w-full bg-stone-50 border border-stone-200 rounded-lg py-1.5 pl-9 text-xs text-velvet placeholder:text-stone-400 focus:bg-white focus:ring-1 focus:ring-gold/30 transition-all outline-none",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-center gap-2 xl:gap-6 ml-3 shrink-0",
                children: [
                  e.jsxs("button", {
                    className:
                      "h-8 w-8 xl:h-10 xl:w-10 flex items-center justify-center rounded-lg hover:bg-stone-50 transition-colors relative",
                    children: [
                      e.jsx(f, { className: "h-4 w-4 xl:h-5 xl:w-5 text-stone-400" }),
                      e.jsx("span", {
                        className:
                          "absolute top-1.5 right-1.5 h-1.5 w-1.5 bg-gold rounded-full border border-white",
                      }),
                    ],
                  }),
                  e.jsx("div", { className: "hidden xl:block h-8 w-px bg-stone-100 mx-2" }),
                  e.jsxs("div", {
                    className: "flex items-center gap-2 xl:gap-3",
                    children: [
                      e.jsxs("div", {
                        className: "hidden xl:block text-right",
                        children: [
                          e.jsx("p", {
                            className: "text-xs font-bold text-velvet uppercase tracking-wider",
                            children: "Dr. Ayrton Pedrosa",
                          }),
                          e.jsx("p", {
                            className:
                              "text-[10px] text-stone-400 font-bold uppercase tracking-tight",
                            children: "OAB/PE 35.952",
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "h-8 w-8 xl:h-10 xl:w-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center",
                        children: e.jsx("span", {
                          className: "text-gold font-bold text-[10px] xl:text-xs",
                          children: "AP",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className: "flex-1 overflow-y-auto bg-stone-50/50 p-4 sm:p-6 xl:p-10 scroll-smooth",
            children: e.jsx("div", {
              className: "max-w-7xl mx-auto pb-10",
              children: e.jsx(h, {}),
            }),
          }),
          e.jsx("nav", {
            className:
              "xl:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-stone-100 px-2 py-2.5 flex items-center justify-around z-50 shadow-[0_-10px_30px_-5px_rgba(0,0,0,0.05)]",
            children: c.map((s) => {
              const r = s.icon,
                l = o === s.id;
              return e.jsxs(
                t,
                {
                  to: s.path,
                  className: `flex flex-col items-center gap-1.5 px-2 py-1 min-w-[70px] transition-all ${l ? "text-gold" : "text-stone-400"}`,
                  onClick: () => i(s.id),
                  children: [
                    e.jsx("div", {
                      className: `p-1.5 rounded-xl transition-all duration-300 ${l ? "bg-gold/10 scale-110" : ""}`,
                      children: e.jsx(r, {
                        className: `h-5 w-5 ${l ? "stroke-[2.5px]" : "stroke-[2px]"}`,
                      }),
                    }),
                    e.jsx("span", {
                      className: `text-[9px] font-black uppercase tracking-widest text-center transition-all ${l ? "opacity-100" : "opacity-60"}`,
                      children: s.name,
                    }),
                  ],
                },
                s.id,
              );
            }),
          }),
        ],
      }),
    ],
  });
}
export { S as component };
