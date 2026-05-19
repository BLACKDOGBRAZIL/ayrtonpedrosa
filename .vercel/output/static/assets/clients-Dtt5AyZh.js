import { j as e } from "./index-0qK1wPb4.js";
import { B as l } from "./button-CmpoKRFv.js";
import { P as c } from "./plus-CmbJoqKT.js";
import { S as i } from "./search-DOKoJ-68.js";
import { c as d } from "./createLucideIcon-_P2Vc871.js";
import { m as r } from "./proxy-CNoJBy2S.js";
import { E as n } from "./ellipsis-vertical-BapVau-a.js";
import { A as o } from "./arrow-up-right-D6EW5tBq.js";
const x = [
    [
      "path",
      {
        d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
        key: "sc7q7i",
      },
    ],
  ],
  p = d("funnel", x);
function N() {
  const a = [
    {
      name: "João Batista da Silva",
      type: "Pessoa Física",
      status: "Ativo",
      cases: 3,
      lastContact: "2 dias atrás",
      avatar: "JB",
    },
    {
      name: "Fazenda Boa Esperança Ltda",
      type: "Pessoa Jurídica",
      status: "Ativo",
      cases: 1,
      lastContact: "5 dias atrás",
      avatar: "FB",
    },
    {
      name: "Maria do Carmo Santos",
      type: "Pessoa Física",
      status: "Inativo",
      cases: 0,
      lastContact: "1 mês atrás",
      avatar: "MS",
    },
    {
      name: "Cooperativa Agro Rural",
      type: "Pessoa Jurídica",
      status: "Ativo",
      cases: 5,
      lastContact: "Hoje",
      avatar: "CA",
    },
  ];
  return e.jsxs("div", {
    className: "space-y-6 md:space-y-8",
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
                  "Gestão de ",
                  e.jsx("span", { className: "italic text-gold", children: "Clientes" }),
                ],
              }),
              e.jsx("p", {
                className:
                  "text-stone-500 text-[10px] sm:text-[11px] md:text-sm mt-1 uppercase tracking-wider font-medium opacity-70",
                children: "Base de relacionamentos estratégica",
              }),
            ],
          }),
          e.jsxs(l, {
            className:
              "w-full md:w-auto bg-velvet hover:bg-velvet/90 text-white rounded-lg px-6 h-11 flex items-center justify-center gap-2 uppercase tracking-[0.15em] text-[9px] font-black shadow-lg shadow-velvet/10",
            children: [e.jsx(c, { className: "h-3.5 w-3.5" }), "Novo Cliente"],
          }),
        ],
      }),
      e.jsxs("div", {
        className:
          "flex flex-col md:flex-row md:items-center justify-between bg-white p-4 rounded-2xl border border-stone-100 shadow-sm gap-4",
        children: [
          e.jsxs("div", {
            className: "flex flex-col md:flex-row items-center gap-4 flex-1",
            children: [
              e.jsxs("div", {
                className: "relative w-full md:w-80",
                children: [
                  e.jsx(i, {
                    className: "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500",
                  }),
                  e.jsx("input", {
                    type: "text",
                    placeholder: "Buscar por nome, CPF/CNPJ...",
                    className:
                      "w-full bg-stone-50 border border-stone-200 rounded-xl py-2.5 pl-11 text-xs text-velvet placeholder:text-stone-500 focus:bg-white outline-none",
                  }),
                ],
              }),
              e.jsxs("button", {
                className:
                  "flex w-full md:w-auto items-center justify-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-stone-500 hover:text-velvet transition-colors md:border-r md:border-stone-100 md:pr-6",
                children: [e.jsx(p, { className: "h-4 w-4" }), "Filtros"],
              }),
            ],
          }),
          e.jsx("div", {
            className: "hidden md:flex items-center gap-2",
            children: e.jsx("p", {
              className: "text-[10px] text-stone-500 font-bold uppercase mr-4",
              children: "Total: 124 Clientes",
            }),
          }),
        ],
      }),
      e.jsx("div", {
        className: "xl:hidden space-y-4",
        children: a.map((t, s) =>
          e.jsxs(
            r.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: s * 0.05 },
              className:
                "bg-white p-5 rounded-3xl border border-stone-100 shadow-sm flex flex-col gap-4",
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        e.jsx("div", {
                          className:
                            "h-10 w-10 rounded-xl bg-velvet/5 border border-velvet/10 flex items-center justify-center text-velvet font-bold text-xs",
                          children: t.avatar,
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className: "text-sm font-bold text-velvet",
                              children: t.name,
                            }),
                            e.jsx("p", {
                              className:
                                "text-[10px] text-stone-500 font-bold uppercase tracking-tight",
                              children: t.type,
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      className:
                        "h-8 w-8 flex items-center justify-center rounded-lg bg-stone-50 text-stone-400",
                      children: e.jsx(n, { className: "h-4 w-4" }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex items-center justify-between pt-4 border-t border-stone-50",
                  children: [
                    e.jsxs("div", {
                      className: "flex flex-col gap-1",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-[9px] uppercase tracking-widest text-stone-400 font-bold",
                          children: "Processos",
                        }),
                        e.jsxs("p", {
                          className: "text-xs font-bold text-velvet",
                          children: [t.cases, " ativos"],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex flex-col gap-1 items-end",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-[9px] uppercase tracking-widest text-stone-400 font-bold",
                          children: "Status",
                        }),
                        e.jsx("span", {
                          className: `text-[8px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-full ${t.status === "Ativo" ? "bg-green-50 text-green-600" : "bg-stone-100 text-stone-500"}`,
                          children: t.status,
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs(l, {
                  variant: "ghost",
                  className:
                    "w-full mt-2 h-10 text-[9px] uppercase tracking-widest font-black text-gold bg-gold/5 hover:bg-gold/10",
                  children: ["Ver Perfil Completo ", e.jsx(o, { className: "ml-2 h-3 w-3" })],
                }),
              ],
            },
            s,
          ),
        ),
      }),
      e.jsx("div", {
        className:
          "hidden xl:block bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden",
        children: e.jsxs("table", {
          className: "w-full text-left",
          children: [
            e.jsx("thead", {
              className: "bg-stone-50/50 border-b border-stone-100",
              children: e.jsxs("tr", {
                children: [
                  e.jsx("th", {
                    className:
                      "px-8 py-5 text-[10px] font-bold text-stone-400 uppercase tracking-widest",
                    children: "Cliente",
                  }),
                  e.jsx("th", {
                    className:
                      "px-8 py-5 text-[10px] font-bold text-stone-400 uppercase tracking-widest",
                    children: "Tipo",
                  }),
                  e.jsx("th", {
                    className:
                      "px-8 py-5 text-[10px] font-bold text-stone-400 uppercase tracking-widest",
                    children: "Processos",
                  }),
                  e.jsx("th", {
                    className:
                      "px-8 py-5 text-[10px] font-bold text-stone-400 uppercase tracking-widest",
                    children: "Status",
                  }),
                  e.jsx("th", {
                    className:
                      "px-8 py-5 text-[10px] font-bold text-stone-400 uppercase tracking-widest text-right",
                    children: "Ações",
                  }),
                ],
              }),
            }),
            e.jsx("tbody", {
              className: "divide-y divide-stone-50",
              children: a.map((t, s) =>
                e.jsxs(
                  r.tr,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: s * 0.05 },
                    className: "group hover:bg-stone-50/50 transition-colors cursor-pointer",
                    children: [
                      e.jsx("td", {
                        className: "px-8 py-5",
                        children: e.jsxs("div", {
                          className: "flex items-center gap-4",
                          children: [
                            e.jsx("div", {
                              className:
                                "h-10 w-10 rounded-xl bg-velvet/5 border border-velvet/10 flex items-center justify-center text-velvet font-bold text-xs",
                              children: t.avatar,
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className: "text-sm font-bold text-velvet",
                                  children: t.name,
                                }),
                                e.jsxs("p", {
                                  className:
                                    "text-[10px] text-stone-500 font-bold uppercase tracking-tight mt-0.5",
                                  children: ["Visto em: ", t.lastContact],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      e.jsx("td", {
                        className: "px-8 py-5",
                        children: e.jsx("span", {
                          className:
                            "text-[10px] font-bold text-stone-500 uppercase tracking-widest",
                          children: t.type,
                        }),
                      }),
                      e.jsx("td", {
                        className: "px-8 py-5",
                        children: e.jsxs("div", {
                          className: "flex items-center gap-1.5",
                          children: [
                            e.jsx("span", {
                              className: "text-sm font-bold text-velvet",
                              children: t.cases,
                            }),
                            e.jsx("span", {
                              className: "text-[10px] text-stone-400 uppercase font-bold",
                              children: "Processos",
                            }),
                          ],
                        }),
                      }),
                      e.jsx("td", {
                        className: "px-8 py-5",
                        children: e.jsx("span", {
                          className: `text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-1 rounded-full ${t.status === "Ativo" ? "bg-green-50 text-green-600" : "bg-stone-100 text-stone-500"}`,
                          children: t.status,
                        }),
                      }),
                      e.jsx("td", {
                        className: "px-8 py-5 text-right",
                        children: e.jsxs("div", {
                          className: "flex items-center justify-end gap-2",
                          children: [
                            e.jsx("button", {
                              className:
                                "h-8 w-8 flex items-center justify-center rounded-lg hover:bg-stone-100 text-stone-400 hover:text-gold transition-all",
                              title: "Ver Perfil",
                              children: e.jsx(o, { className: "h-4 w-4" }),
                            }),
                            e.jsx("button", {
                              className:
                                "h-8 w-8 flex items-center justify-center rounded-lg hover:bg-stone-100 text-stone-400 hover:text-velvet transition-all",
                              children: e.jsx(n, { className: "h-4 w-4" }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  },
                  s,
                ),
              ),
            }),
          ],
        }),
      }),
      e.jsx("div", {
        className: "p-6 border-t border-stone-50 flex items-center justify-center",
        children: e.jsx("p", {
          className: "text-[10px] text-stone-400 font-bold uppercase tracking-widest",
          children: "Carregar mais clientes",
        }),
      }),
    ],
  });
}
export { N as component };
