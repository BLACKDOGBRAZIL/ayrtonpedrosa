import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./button-CfdaOMCp.mjs";
import {
  v as Plus,
  w as Search,
  m as Folder,
  P as Paperclip,
  E as EllipsisVertical,
  l as Clock,
  b as ArrowUpRight,
} from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function DashboardCases() {
  const cases = [
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "space-y-6 md:space-y-8",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", {
        className: "flex flex-col gap-5 md:flex-row md:items-center md:justify-between",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "max-w-xs md:max-w-none",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", {
                className: "text-xl sm:text-2xl md:text-3xl font-serif text-velvet leading-tight",
                children: [
                  "Gestão de ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                    className: "italic text-gold",
                    children: "Processos",
                  }),
                ],
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className:
                  "text-stone-500 text-[10px] sm:text-[11px] md:text-sm mt-1 uppercase tracking-wider font-medium opacity-70",
                children: "Controle de ativos jurídicos digitais",
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, {
            className:
              "w-full md:w-auto bg-velvet hover:bg-velvet/90 text-white rounded-lg px-6 h-11 flex items-center justify-center gap-2 uppercase tracking-[0.15em] text-[9px] font-black shadow-lg shadow-velvet/10",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
              "Novo Processo",
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "bg-white p-6 rounded-3xl border border-stone-100 shadow-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "text-[10px] uppercase tracking-widest text-stone-500 font-bold",
                children: "Total de Processos",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "text-2xl font-sans font-black text-velvet mt-1",
                children: "128",
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "bg-white p-6 rounded-3xl border border-stone-100 shadow-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "text-[10px] uppercase tracking-widest text-stone-500 font-bold",
                children: "Petições Pendentes",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "text-2xl font-sans font-black text-gold mt-1",
                children: "14",
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className:
              "bg-white p-6 rounded-3xl border border-stone-100 shadow-sm sm:col-span-2 lg:col-span-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "text-[10px] uppercase tracking-widest text-stone-500 font-bold",
                children: "Documentos Armazenados",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "text-2xl font-sans font-black text-velvet mt-1",
                children: "1.2k",
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className:
              "p-4 md:p-6 border-b border-stone-50 flex flex-col md:flex-row md:items-center justify-between gap-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "relative w-full md:w-96",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, {
                    className: "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                    type: "text",
                    placeholder: "Número, Cliente ou Assunto...",
                    className:
                      "w-full bg-stone-50 border border-stone-200 rounded-xl py-2.5 pl-12 text-sm text-velvet placeholder:text-stone-500 focus:bg-white outline-none",
                  }),
                ],
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className: "flex items-center gap-3",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                  className:
                    "flex-1 md:flex-none p-2.5 hover:bg-stone-50 rounded-xl text-stone-400 transition-colors border border-stone-100 flex justify-center",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { className: "h-4 w-4" }),
                }),
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "divide-y divide-stone-50",
            children: cases.map((c, idx) =>
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: {
                    opacity: 0,
                  },
                  animate: {
                    opacity: 1,
                  },
                  transition: {
                    delay: idx * 0.1,
                  },
                  className:
                    "p-6 md:p-8 hover:bg-stone-50/50 transition-colors cursor-pointer group",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                      className:
                        "flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                          className: "flex flex-wrap items-center gap-2",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                              className:
                                "text-[9px] font-sans font-bold bg-stone-100 text-stone-500 px-3 py-1 rounded-full uppercase tracking-wider",
                              children: c.id,
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                              className:
                                "text-[9px] font-sans font-bold bg-gold/10 text-gold px-3 py-1 rounded-full uppercase tracking-wider",
                              children: c.status,
                            }),
                          ],
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                          className: "flex items-center gap-2 ml-auto md:ml-0",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                              className:
                                "h-9 w-9 flex items-center justify-center rounded-xl bg-white border border-stone-100 shadow-sm text-stone-400 hover:text-gold transition-all",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, {
                                className: "h-4 w-4",
                              }),
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                              className:
                                "h-9 w-9 flex items-center justify-center rounded-xl bg-white border border-stone-100 shadow-sm text-stone-400 hover:text-velvet transition-all",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, {
                                className: "h-4 w-4",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                      className: "grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", {
                              className:
                                "text-lg md:text-xl font-serif text-velvet group-hover:text-gold transition-colors leading-tight",
                              children: c.subject,
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                              className:
                                "text-xs font-bold text-stone-500 mt-2 uppercase tracking-widest",
                              children: c.client,
                            }),
                          ],
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                          className:
                            "flex flex-col sm:flex-row items-start sm:items-center justify-end gap-6 md:gap-12",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-[9px] text-stone-400 font-bold uppercase tracking-widest",
                                  children: "Movimentação",
                                }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                                  className: "flex items-center gap-2 text-stone-600",
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, {
                                      className: "h-3.5 w-3.5",
                                    }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                      className: "text-xs font-bold",
                                      children: c.date,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-[9px] text-stone-400 font-bold uppercase tracking-widest",
                                  children: "Arquivos",
                                }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                                  className: "flex items-center gap-2 text-stone-600",
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, {
                                      className: "h-3.5 w-3.5",
                                    }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
                                      className: "text-xs font-bold",
                                      children: [c.files, " docs"],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                              className:
                                "hidden sm:flex h-12 w-12 rounded-2xl bg-velvet text-white items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-velvet/20",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, {
                                className: "h-5 w-5",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                c.id,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
export { DashboardCases as component };
