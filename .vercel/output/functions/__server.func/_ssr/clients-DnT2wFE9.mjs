import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./button-CfdaOMCp.mjs";
import {
  v as Plus,
  w as Search,
  n as Funnel,
  E as EllipsisVertical,
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
function DashboardClients() {
  const clients = [
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
                    children: "Clientes",
                  }),
                ],
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className:
                  "text-stone-500 text-[10px] sm:text-[11px] md:text-sm mt-1 uppercase tracking-wider font-medium opacity-70",
                children: "Base de relacionamentos estratégica",
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, {
            className:
              "w-full md:w-auto bg-velvet hover:bg-velvet/90 text-white rounded-lg px-6 h-11 flex items-center justify-center gap-2 uppercase tracking-[0.15em] text-[9px] font-black shadow-lg shadow-velvet/10",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
              "Novo Cliente",
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className:
          "flex flex-col md:flex-row md:items-center justify-between bg-white p-4 rounded-2xl border border-stone-100 shadow-sm gap-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "flex flex-col md:flex-row items-center gap-4 flex-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "relative w-full md:w-80",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, {
                    className: "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                    type: "text",
                    placeholder: "Buscar por nome, CPF/CNPJ...",
                    className:
                      "w-full bg-stone-50 border border-stone-200 rounded-xl py-2.5 pl-11 text-xs text-velvet placeholder:text-stone-500 focus:bg-white outline-none",
                  }),
                ],
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
                className:
                  "flex w-full md:w-auto items-center justify-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-stone-500 hover:text-velvet transition-colors md:border-r md:border-stone-100 md:pr-6",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "h-4 w-4" }),
                  "Filtros",
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "hidden md:flex items-center gap-2",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
              className: "text-[10px] text-stone-500 font-bold uppercase mr-4",
              children: "Total: 124 Clientes",
            }),
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "xl:hidden space-y-4",
        children: clients.map((client, idx) =>
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: {
                opacity: 0,
                y: 10,
              },
              animate: {
                opacity: 1,
                y: 0,
              },
              transition: {
                delay: idx * 0.05,
              },
              className:
                "bg-white p-5 rounded-3xl border border-stone-100 shadow-sm flex flex-col gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                          className:
                            "h-10 w-10 rounded-xl bg-velvet/5 border border-velvet/10 flex items-center justify-center text-velvet font-bold text-xs",
                          children: client.avatar,
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                              className: "text-sm font-bold text-velvet",
                              children: client.name,
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                              className:
                                "text-[10px] text-stone-500 font-bold uppercase tracking-tight",
                              children: client.type,
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                      className:
                        "h-8 w-8 flex items-center justify-center rounded-lg bg-stone-50 text-stone-400",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, {
                        className: "h-4 w-4",
                      }),
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center justify-between pt-4 border-t border-stone-50",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                      className: "flex flex-col gap-1",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                          className:
                            "text-[9px] uppercase tracking-widest text-stone-400 font-bold",
                          children: "Processos",
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
                          className: "text-xs font-bold text-velvet",
                          children: [client.cases, " ativos"],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                      className: "flex flex-col gap-1 items-end",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                          className:
                            "text-[9px] uppercase tracking-widest text-stone-400 font-bold",
                          children: "Status",
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                          className: `text-[8px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-full ${client.status === "Ativo" ? "bg-green-50 text-green-600" : "bg-stone-100 text-stone-500"}`,
                          children: client.status,
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, {
                  variant: "ghost",
                  className:
                    "w-full mt-2 h-10 text-[9px] uppercase tracking-widest font-black text-gold bg-gold/5 hover:bg-gold/10",
                  children: [
                    "Ver Perfil Completo ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, {
                      className: "ml-2 h-3 w-3",
                    }),
                  ],
                }),
              ],
            },
            idx,
          ),
        ),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className:
          "hidden xl:block bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", {
          className: "w-full text-left",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", {
              className: "bg-stone-50/50 border-b border-stone-100",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", {
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", {
                    className:
                      "px-8 py-5 text-[10px] font-bold text-stone-400 uppercase tracking-widest",
                    children: "Cliente",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", {
                    className:
                      "px-8 py-5 text-[10px] font-bold text-stone-400 uppercase tracking-widest",
                    children: "Tipo",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", {
                    className:
                      "px-8 py-5 text-[10px] font-bold text-stone-400 uppercase tracking-widest",
                    children: "Processos",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", {
                    className:
                      "px-8 py-5 text-[10px] font-bold text-stone-400 uppercase tracking-widest",
                    children: "Status",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", {
                    className:
                      "px-8 py-5 text-[10px] font-bold text-stone-400 uppercase tracking-widest text-right",
                    children: "Ações",
                  }),
                ],
              }),
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", {
              className: "divide-y divide-stone-50",
              children: clients.map((client, idx) =>
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.tr,
                  {
                    initial: {
                      opacity: 0,
                    },
                    animate: {
                      opacity: 1,
                    },
                    transition: {
                      delay: idx * 0.05,
                    },
                    className: "group hover:bg-stone-50/50 transition-colors cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", {
                        className: "px-8 py-5",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                          className: "flex items-center gap-4",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                              className:
                                "h-10 w-10 rounded-xl bg-velvet/5 border border-velvet/10 flex items-center justify-center text-velvet font-bold text-xs",
                              children: client.avatar,
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                                  className: "text-sm font-bold text-velvet",
                                  children: client.name,
                                }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
                                  className:
                                    "text-[10px] text-stone-500 font-bold uppercase tracking-tight mt-0.5",
                                  children: ["Visto em: ", client.lastContact],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", {
                        className: "px-8 py-5",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                          className:
                            "text-[10px] font-bold text-stone-500 uppercase tracking-widest",
                          children: client.type,
                        }),
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", {
                        className: "px-8 py-5",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                          className: "flex items-center gap-1.5",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                              className: "text-sm font-bold text-velvet",
                              children: client.cases,
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                              className: "text-[10px] text-stone-400 uppercase font-bold",
                              children: "Processos",
                            }),
                          ],
                        }),
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", {
                        className: "px-8 py-5",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                          className: `text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-1 rounded-full ${client.status === "Ativo" ? "bg-green-50 text-green-600" : "bg-stone-100 text-stone-500"}`,
                          children: client.status,
                        }),
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", {
                        className: "px-8 py-5 text-right",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                          className: "flex items-center justify-end gap-2",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                              className:
                                "h-8 w-8 flex items-center justify-center rounded-lg hover:bg-stone-100 text-stone-400 hover:text-gold transition-all",
                              title: "Ver Perfil",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, {
                                className: "h-4 w-4",
                              }),
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                              className:
                                "h-8 w-8 flex items-center justify-center rounded-lg hover:bg-stone-100 text-stone-400 hover:text-velvet transition-all",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, {
                                className: "h-4 w-4",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  },
                  idx,
                ),
              ),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "p-6 border-t border-stone-50 flex items-center justify-center",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "text-[10px] text-stone-400 font-bold uppercase tracking-widest",
          children: "Carregar mais clientes",
        }),
      }),
    ],
  });
}
export { DashboardClients as component };
