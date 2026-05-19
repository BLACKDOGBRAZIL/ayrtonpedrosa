import { j as e } from "./index-0qK1wPb4.js";
import { B as d } from "./button-CmpoKRFv.js";
import { P as c } from "./plus-CmbJoqKT.js";
import { U as a, F as r, C as x } from "./users-D_hOZg8s.js";
import { C as m } from "./clock-Blu_oA68.js";
import { c as o } from "./createLucideIcon-_P2Vc871.js";
import { m as p } from "./proxy-CNoJBy2S.js";
import { C as h } from "./chevron-right-CT9zOBCR.js";
const g = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M8 12h8", key: "1wcyev" }],
    ["path", { d: "M12 8v8", key: "napkw2" }],
  ],
  u = o("circle-plus", g);
const v = [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
  ],
  b = o("trending-up", v);
function A() {
  const l = [
      { name: "Clientes Ativos", value: "5", icon: a, change: "+2 este mês", color: "bg-blue-500" },
      {
        name: "Processos em Curso",
        value: "128",
        icon: r,
        change: "+12 este mês",
        color: "bg-gold",
      },
      {
        name: "Prazos Próximos",
        value: "7",
        icon: m,
        change: "Próximos 7 dias",
        color: "bg-red-500",
      },
      {
        name: "Taxa de Êxito",
        value: "92%",
        icon: b,
        change: "Últimos 12 meses",
        color: "bg-green-500",
      },
    ],
    i = [
      {
        title: "Contestação - Caso Silva vs. União",
        date: "Amanhã, 14:00",
        type: "Prazo Judicial",
        priority: "High",
      },
      {
        title: "Audiência de Conciliação - Fazenda Boa Vista",
        date: "25 Out, 09:30",
        type: "Audiência",
        priority: "Medium",
      },
      {
        title: "Entrega de Laudo Pericial - Inventário Santos",
        date: "27 Out, 18:00",
        type: "Prazo",
        priority: "Medium",
      },
    ];
  return e.jsxs("div", {
    className: "space-y-6 md:space-y-10",
    children: [
      e.jsxs("header", {
        className: "flex flex-col gap-5 md:flex-row md:items-center md:justify-between",
        children: [
          e.jsxs("div", {
            className: "max-w-xs md:max-w-none",
            children: [
              e.jsxs("h1", {
                className: "text-xl sm:text-2xl md:text-3xl font-serif text-velvet leading-tight",
                children: [
                  "Bem-vindo, ",
                  e.jsx("span", { className: "italic text-gold", children: "Dr. Ayrton" }),
                ],
              }),
              e.jsx("p", {
                className:
                  "text-stone-500 text-[10px] sm:text-[11px] md:text-sm mt-1 uppercase tracking-wider font-medium opacity-70",
                children: "Resumo da sua banca hoje",
              }),
            ],
          }),
          e.jsxs(d, {
            className:
              "w-full md:w-auto bg-velvet hover:bg-velvet/90 text-white rounded-lg px-6 h-11 flex items-center justify-center gap-2 uppercase tracking-[0.15em] text-[9px] font-black shadow-lg shadow-velvet/10",
            children: [e.jsx(c, { className: "h-3.5 w-3.5" }), "Novo Processo"],
          }),
        ],
      }),
      e.jsx("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6",
        children: l.map((t, s) => {
          const n = t.icon;
          return e.jsxs(
            p.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: s * 0.1 },
              className:
                "bg-white p-6 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow",
              children: [
                e.jsx("div", {
                  className: "flex items-center justify-between mb-4",
                  children: e.jsx("div", {
                    className: `h-12 w-12 rounded-2xl ${t.color}/10 flex items-center justify-center`,
                    children: e.jsx(n, { className: `h-6 w-6 ${t.color.replace("bg-", "text-")}` }),
                  }),
                }),
                e.jsx("p", {
                  className: "text-[10px] uppercase tracking-widest text-stone-500 font-bold",
                  children: t.name,
                }),
                e.jsx("p", {
                  className: "text-3xl font-sans font-black text-velvet mt-1",
                  children: t.value,
                }),
                e.jsx("p", {
                  className: "text-[10px] text-stone-500 mt-2 font-bold uppercase tracking-tight",
                  children: t.change,
                }),
              ],
            },
            t.name,
          );
        }),
      }),
      e.jsxs("div", {
        className: "grid grid-cols-1 xl:grid-cols-3 gap-8",
        children: [
          e.jsxs("div", {
            className:
              "xl:col-span-2 bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden",
            children: [
              e.jsxs("div", {
                className: "p-8 border-b border-stone-50 flex items-center justify-between",
                children: [
                  e.jsxs("h3", {
                    className: "font-serif text-xl text-velvet",
                    children: [
                      "Prazos & ",
                      e.jsx("span", { className: "italic text-gold", children: "Audiências" }),
                    ],
                  }),
                  e.jsx("button", {
                    className:
                      "text-[10px] uppercase tracking-widest text-gold font-bold hover:underline",
                    children: "Ver Agenda Completa",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "p-2",
                children: i.map((t, s) =>
                  e.jsxs(
                    "div",
                    {
                      className:
                        "flex items-center justify-between p-6 hover:bg-stone-50 rounded-2xl transition-colors group cursor-pointer",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-4",
                          children: [
                            e.jsx("div", {
                              className: `h-10 w-10 rounded-xl flex items-center justify-center ${t.priority === "High" ? "bg-red-50" : "bg-stone-100"}`,
                              children: e.jsx(x, {
                                className: `h-5 w-5 ${t.priority === "High" ? "text-red-500" : "text-stone-400"}`,
                              }),
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className: "text-sm font-bold text-velvet",
                                  children: t.title,
                                }),
                                e.jsxs("p", {
                                  className:
                                    "text-[10px] text-stone-500 uppercase tracking-widest font-bold mt-1",
                                  children: [t.type, " • ", t.date],
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsx(h, {
                          className:
                            "h-4 w-4 text-stone-200 group-hover:text-gold group-hover:translate-x-1 transition-all",
                        }),
                      ],
                    },
                    s,
                  ),
                ),
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "bg-velvet rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-velvet/20",
            children: [
              e.jsx("div", {
                className:
                  "absolute top-[-20%] right-[-20%] w-64 h-64 bg-gold/10 rounded-full blur-3xl",
              }),
              e.jsxs("h3", {
                className: "font-serif text-2xl mb-6",
                children: [
                  "Atalhos ",
                  e.jsx("span", { className: "italic text-gold", children: "Rápidos" }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-4 relative z-10",
                children: [
                  e.jsxs("button", {
                    className:
                      "w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-gold hover:text-velvet transition-all text-left flex items-center gap-3 group",
                    children: [
                      e.jsx(a, { className: "h-5 w-5 opacity-60 group-hover:opacity-100" }),
                      e.jsx("span", {
                        className: "text-xs uppercase tracking-widest font-bold",
                        children: "Cadastrar Novo Cliente",
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    className:
                      "w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-gold hover:text-velvet transition-all text-left flex items-center gap-3 group",
                    children: [
                      e.jsx(u, { className: "h-5 w-5 opacity-40 group-hover:opacity-100" }),
                      e.jsx("span", {
                        className: "text-xs uppercase tracking-widest font-bold",
                        children: "Enviar Assets do Processo",
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    className:
                      "w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-gold hover:text-velvet transition-all text-left flex items-center gap-3 group",
                    children: [
                      e.jsx(r, { className: "h-5 w-5 opacity-40 group-hover:opacity-100" }),
                      e.jsx("span", {
                        className: "text-xs uppercase tracking-widest font-bold",
                        children: "Gerar Relatório de Status",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "mt-12 p-6 bg-white/5 rounded-2xl border border-white/5",
                children: [
                  e.jsx("p", {
                    className: "text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-4",
                    children: "Acesso Rápido",
                  }),
                  e.jsxs("div", {
                    className: "flex -space-x-2",
                    children: [
                      [1, 2, 3, 4].map((t) =>
                        e.jsx(
                          "div",
                          {
                            className:
                              "h-8 w-8 rounded-full border-2 border-velvet bg-stone-700 flex items-center justify-center text-[10px] font-bold",
                            children: String.fromCharCode(64 + t),
                          },
                          t,
                        ),
                      ),
                      e.jsx("div", {
                        className:
                          "h-8 w-8 rounded-full border-2 border-velvet bg-gold flex items-center justify-center text-[10px] font-bold text-velvet",
                        children: "+12",
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-[10px] text-white/60 mt-4 uppercase tracking-widest font-bold",
                    children: "Clientes visualizados recentemente",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { A as component };
