import { j as e } from "./index-0qK1wPb4.js";
import { B as n } from "./button-CmpoKRFv.js";
import { P as r } from "./plus-CmbJoqKT.js";
import { S as i } from "./search-DOKoJ-68.js";
import { c as a } from "./createLucideIcon-_P2Vc871.js";
import { m as d } from "./proxy-CNoJBy2S.js";
import { E as c } from "./ellipsis-vertical-BapVau-a.js";
import { C as x } from "./clock-Blu_oA68.js";
import { A as m } from "./arrow-up-right-D6EW5tBq.js";
const p = [
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
        key: "1kt360",
      },
    ],
  ],
  h = a("folder", p);
const f = [
    [
      "path",
      {
        d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
        key: "1miecu",
      },
    ],
  ],
  t = a("paperclip", f);
function P() {
  const l = [
    {
      id: "0012345-67.2026.8.17.0001",
      client: "Fazenda Boa Esperança",
      subject: "Reintegração de Posse",
      status: "Em Instrução",
      date: "12 Out 2026",
      files: 12,
    },
    {
      id: "0098765-43.2026.8.17.0001",
      client: "João Batista da Silva",
      subject: "Inventário e Partilha",
      status: "Aguardando Sentença",
      date: "05 Out 2026",
      files: 24,
    },
    {
      id: "0044556-89.2026.8.17.0001",
      client: "Cooperativa Agro Rural",
      subject: "Defesa Ambiental / CPR",
      status: "Petição Inicial",
      date: "20 Out 2026",
      files: 5,
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
                  e.jsx("span", { className: "italic text-gold", children: "Processos" }),
                ],
              }),
              e.jsx("p", {
                className:
                  "text-stone-500 text-[10px] sm:text-[11px] md:text-sm mt-1 uppercase tracking-wider font-medium opacity-70",
                children: "Controle de ativos jurídicos digitais",
              }),
            ],
          }),
          e.jsxs(n, {
            className:
              "w-full md:w-auto bg-velvet hover:bg-velvet/90 text-white rounded-lg px-6 h-11 flex items-center justify-center gap-2 uppercase tracking-[0.15em] text-[9px] font-black shadow-lg shadow-velvet/10",
            children: [e.jsx(r, { className: "h-3.5 w-3.5" }), "Novo Processo"],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6",
        children: [
          e.jsxs("div", {
            className: "bg-white p-6 rounded-3xl border border-stone-100 shadow-sm",
            children: [
              e.jsx("p", {
                className: "text-[10px] uppercase tracking-widest text-stone-500 font-bold",
                children: "Total de Processos",
              }),
              e.jsx("p", {
                className: "text-2xl font-sans font-black text-velvet mt-1",
                children: "128",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "bg-white p-6 rounded-3xl border border-stone-100 shadow-sm",
            children: [
              e.jsx("p", {
                className: "text-[10px] uppercase tracking-widest text-stone-500 font-bold",
                children: "Petições Pendentes",
              }),
              e.jsx("p", {
                className: "text-2xl font-sans font-black text-gold mt-1",
                children: "14",
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "bg-white p-6 rounded-3xl border border-stone-100 shadow-sm sm:col-span-2 lg:col-span-1",
            children: [
              e.jsx("p", {
                className: "text-[10px] uppercase tracking-widest text-stone-500 font-bold",
                children: "Documentos Armazenados",
              }),
              e.jsx("p", {
                className: "text-2xl font-sans font-black text-velvet mt-1",
                children: "1.2k",
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden",
        children: [
          e.jsxs("div", {
            className:
              "p-4 md:p-6 border-b border-stone-50 flex flex-col md:flex-row md:items-center justify-between gap-4",
            children: [
              e.jsxs("div", {
                className: "relative w-full md:w-96",
                children: [
                  e.jsx(i, {
                    className: "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500",
                  }),
                  e.jsx("input", {
                    type: "text",
                    placeholder: "Número, Cliente ou Assunto...",
                    className:
                      "w-full bg-stone-50 border border-stone-200 rounded-xl py-2.5 pl-12 text-sm text-velvet placeholder:text-stone-500 focus:bg-white outline-none",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "flex items-center gap-3",
                children: e.jsx("button", {
                  className:
                    "flex-1 md:flex-none p-2.5 hover:bg-stone-50 rounded-xl text-stone-400 transition-colors border border-stone-100 flex justify-center",
                  children: e.jsx(h, { className: "h-4 w-4" }),
                }),
              }),
            ],
          }),
          e.jsx("div", {
            className: "divide-y divide-stone-50",
            children: l.map((s, o) =>
              e.jsxs(
                d.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: o * 0.1 },
                  className:
                    "p-6 md:p-8 hover:bg-stone-50/50 transition-colors cursor-pointer group",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4",
                      children: [
                        e.jsxs("div", {
                          className: "flex flex-wrap items-center gap-2",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-[9px] font-sans font-bold bg-stone-100 text-stone-500 px-3 py-1 rounded-full uppercase tracking-wider",
                              children: s.id,
                            }),
                            e.jsx("span", {
                              className:
                                "text-[9px] font-sans font-bold bg-gold/10 text-gold px-3 py-1 rounded-full uppercase tracking-wider",
                              children: s.status,
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-2 ml-auto md:ml-0",
                          children: [
                            e.jsx("button", {
                              className:
                                "h-9 w-9 flex items-center justify-center rounded-xl bg-white border border-stone-100 shadow-sm text-stone-400 hover:text-gold transition-all",
                              children: e.jsx(t, { className: "h-4 w-4" }),
                            }),
                            e.jsx("button", {
                              className:
                                "h-9 w-9 flex items-center justify-center rounded-xl bg-white border border-stone-100 shadow-sm text-stone-400 hover:text-velvet transition-all",
                              children: e.jsx(c, { className: "h-4 w-4" }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("h4", {
                              className:
                                "text-lg md:text-xl font-serif text-velvet group-hover:text-gold transition-colors leading-tight",
                              children: s.subject,
                            }),
                            e.jsx("p", {
                              className:
                                "text-xs font-bold text-stone-500 mt-2 uppercase tracking-widest",
                              children: s.client,
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "flex flex-col sm:flex-row items-start sm:items-center justify-end gap-6 md:gap-12",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-[9px] text-stone-400 font-bold uppercase tracking-widest",
                                  children: "Movimentação",
                                }),
                                e.jsxs("div", {
                                  className: "flex items-center gap-2 text-stone-600",
                                  children: [
                                    e.jsx(x, { className: "h-3.5 w-3.5" }),
                                    e.jsx("span", {
                                      className: "text-xs font-bold",
                                      children: s.date,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-[9px] text-stone-400 font-bold uppercase tracking-widest",
                                  children: "Arquivos",
                                }),
                                e.jsxs("div", {
                                  className: "flex items-center gap-2 text-stone-600",
                                  children: [
                                    e.jsx(t, { className: "h-3.5 w-3.5" }),
                                    e.jsxs("span", {
                                      className: "text-xs font-bold",
                                      children: [s.files, " docs"],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className:
                                "hidden sm:flex h-12 w-12 rounded-2xl bg-velvet text-white items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-velvet/20",
                              children: e.jsx(m, { className: "h-5 w-5" }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                s.id,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
export { P as component };
