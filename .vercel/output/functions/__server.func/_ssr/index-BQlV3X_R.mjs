import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./button-CfdaOMCp.mjs";
import {
  v as Plus,
  H as Users,
  F as FileText,
  l as Clock,
  D as TrendingUp,
  C as Calendar,
  g as ChevronRight,
  k as CirclePlus,
} from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function DashboardOverview() {
  const stats = [
    {
      name: "Clientes Ativos",
      value: "5",
      icon: Users,
      change: "+2 este mês",
      color: "bg-blue-500",
    },
    {
      name: "Processos em Curso",
      value: "128",
      icon: FileText,
      change: "+12 este mês",
      color: "bg-gold",
    },
    {
      name: "Prazos Próximos",
      value: "7",
      icon: Clock,
      change: "Próximos 7 dias",
      color: "bg-red-500",
    },
    {
      name: "Taxa de Êxito",
      value: "92%",
      icon: TrendingUp,
      change: "Últimos 12 meses",
      color: "bg-green-500",
    },
  ];
  const upcomingDeadlines = [
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "space-y-6 md:space-y-10",
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
                  "Bem-vindo, ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                    className: "italic text-gold",
                    children: "Dr. Ayrton",
                  }),
                ],
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className:
                  "text-stone-500 text-[10px] sm:text-[11px] md:text-sm mt-1 uppercase tracking-wider font-medium opacity-70",
                children: "Resumo da sua banca hoje",
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6",
        children: stats.map((stat, idx) => {
          const Icon = stat.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: {
                opacity: 0,
                y: 20,
              },
              animate: {
                opacity: 1,
                y: 0,
              },
              transition: {
                delay: idx * 0.1,
              },
              className:
                "bg-white p-6 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                  className: "flex items-center justify-between mb-4",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                    className: `h-12 w-12 rounded-2xl ${stat.color}/10 flex items-center justify-center`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, {
                      className: `h-6 w-6 ${stat.color.replace("bg-", "text-")}`,
                    }),
                  }),
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                  className: "text-[10px] uppercase tracking-widest text-stone-500 font-bold",
                  children: stat.name,
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                  className: "text-3xl font-sans font-black text-velvet mt-1",
                  children: stat.value,
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                  className: "text-[10px] text-stone-500 mt-2 font-bold uppercase tracking-tight",
                  children: stat.change,
                }),
              ],
            },
            stat.name,
          );
        }),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "grid grid-cols-1 xl:grid-cols-3 gap-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className:
              "xl:col-span-2 bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "p-8 border-b border-stone-50 flex items-center justify-between",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", {
                    className: "font-serif text-xl text-velvet",
                    children: [
                      "Prazos & ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                        className: "italic text-gold",
                        children: "Audiências",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                    className:
                      "text-[10px] uppercase tracking-widest text-gold font-bold hover:underline",
                    children: "Ver Agenda Completa",
                  }),
                ],
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className: "p-2",
                children: upcomingDeadlines.map((item, idx) =>
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className:
                        "flex items-center justify-between p-6 hover:bg-stone-50 rounded-2xl transition-colors group cursor-pointer",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                          className: "flex items-center gap-4",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                              className: `h-10 w-10 rounded-xl flex items-center justify-center ${item.priority === "High" ? "bg-red-50" : "bg-stone-100"}`,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, {
                                className: `h-5 w-5 ${item.priority === "High" ? "text-red-500" : "text-stone-400"}`,
                              }),
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                                  className: "text-sm font-bold text-velvet",
                                  children: item.title,
                                }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
                                  className:
                                    "text-[10px] text-stone-500 uppercase tracking-widest font-bold mt-1",
                                  children: [item.type, " • ", item.date],
                                }),
                              ],
                            }),
                          ],
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, {
                          className:
                            "h-4 w-4 text-stone-200 group-hover:text-gold group-hover:translate-x-1 transition-all",
                        }),
                      ],
                    },
                    idx,
                  ),
                ),
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className:
              "bg-velvet rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-velvet/20",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className:
                  "absolute top-[-20%] right-[-20%] w-64 h-64 bg-gold/10 rounded-full blur-3xl",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", {
                className: "font-serif text-2xl mb-6",
                children: [
                  "Atalhos ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                    className: "italic text-gold",
                    children: "Rápidos",
                  }),
                ],
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "space-y-4 relative z-10",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
                    className:
                      "w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-gold hover:text-velvet transition-all text-left flex items-center gap-3 group",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, {
                        className: "h-5 w-5 opacity-60 group-hover:opacity-100",
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                        className: "text-xs uppercase tracking-widest font-bold",
                        children: "Cadastrar Novo Cliente",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
                    className:
                      "w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-gold hover:text-velvet transition-all text-left flex items-center gap-3 group",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, {
                        className: "h-5 w-5 opacity-40 group-hover:opacity-100",
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                        className: "text-xs uppercase tracking-widest font-bold",
                        children: "Enviar Assets do Processo",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
                    className:
                      "w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-gold hover:text-velvet transition-all text-left flex items-center gap-3 group",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, {
                        className: "h-5 w-5 opacity-40 group-hover:opacity-100",
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                        className: "text-xs uppercase tracking-widest font-bold",
                        children: "Gerar Relatório de Status",
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "mt-12 p-6 bg-white/5 rounded-2xl border border-white/5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                    className: "text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-4",
                    children: "Acesso Rápido",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "flex -space-x-2",
                    children: [
                      [1, 2, 3, 4].map((i) =>
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className:
                              "h-8 w-8 rounded-full border-2 border-velvet bg-stone-700 flex items-center justify-center text-[10px] font-bold",
                            children: String.fromCharCode(64 + i),
                          },
                          i,
                        ),
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                        className:
                          "h-8 w-8 rounded-full border-2 border-velvet bg-gold flex items-center justify-center text-[10px] font-bold text-velvet",
                        children: "+12",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
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
export { DashboardOverview as component };
