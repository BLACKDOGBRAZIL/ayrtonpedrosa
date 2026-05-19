import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button } from "./button-CfdaOMCp.mjs";
import {
  R as RefreshCw,
  v as Plus,
  f as ChevronLeft,
  g as ChevronRight,
  i as CircleAlert,
  l as Clock,
  s as MapPin,
  E as EllipsisVertical,
} from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function DashboardAgenda() {
  const [currentMonth, setCurrentMonth] = reactExports.useState("Outubro 2026");
  const [isSyncing, setIsSyncing] = reactExports.useState(false);
  const syncCalendars = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 2e3);
  };
  const events = [
    {
      id: 1,
      title: "Audiência de Instrução - Caso Rural",
      time: "14:30",
      date: "25",
      type: "Judicial",
      color: "bg-red-500",
    },
    {
      id: 2,
      title: "Reunião com Perito Agrônomo",
      time: "10:00",
      date: "26",
      type: "Reunião",
      color: "bg-gold",
    },
    {
      id: 3,
      title: "Prazo: Contestação Fazenda S. José",
      time: "18:00",
      date: "28",
      type: "Prazo",
      color: "bg-blue-500",
    },
  ];
  const integrations = [
    {
      name: "Google Calendar",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
      connected: true,
    },
    {
      name: "Outlook / Microsoft",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg",
      connected: false,
    },
    {
      name: "Apple Calendar",
      icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Ios-calendar-icon.png",
      connected: false,
    },
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "space-y-6 md:space-y-8 pb-24 lg:pb-10",
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
                  "Agenda & ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                    className: "italic text-gold",
                    children: "Prazos",
                  }),
                ],
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className:
                  "text-stone-500 text-[10px] sm:text-[11px] md:text-sm mt-1 uppercase tracking-wider font-medium opacity-70",
                children: "Sincronização centralizada",
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, {
                onClick: syncCalendars,
                variant: "outline",
                className:
                  "w-full sm:w-auto border-stone-200 text-stone-600 rounded-lg px-3 h-10 flex items-center justify-center gap-2 uppercase tracking-[0.15em] text-[8px] sm:text-[9px] font-black hover:bg-stone-50 shrink-0",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, {
                    className: `h-3 w-3 ${isSyncing ? "animate-spin" : ""}`,
                  }),
                  "Sincronizar Tudo",
                ],
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, {
                className:
                  "w-full sm:w-auto bg-velvet hover:bg-velvet/90 text-white rounded-lg px-3 h-10 flex items-center justify-center gap-2 uppercase tracking-[0.15em] text-[8px] sm:text-[9px] font-black shadow-lg shadow-velvet/10 shrink-0",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
                  "Novo Evento",
                ],
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "grid grid-cols-1 xl:grid-cols-12 gap-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "xl:col-span-8 space-y-6",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  className:
                    "p-3 md:p-8 border-b border-stone-50 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center justify-between sm:justify-start gap-4",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", {
                          className: "text-base md:text-xl font-serif text-velvet",
                          children: currentMonth,
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                          className: "flex items-center gap-1",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                              className: "p-1.5 hover:bg-stone-50 rounded-lg transition-colors",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, {
                                className: "h-4 w-4 text-stone-400",
                              }),
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                              className: "p-1.5 hover:bg-stone-50 rounded-lg transition-colors",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, {
                                className: "h-4 w-4 text-stone-400",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                      className: "flex bg-stone-50 p-1 rounded-xl w-full sm:w-fit overflow-hidden",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                          className:
                            "flex-1 sm:flex-none px-2 md:px-4 py-1.5 rounded-lg text-[8px] md:text-[10px] font-black uppercase tracking-widest bg-white text-velvet shadow-sm",
                          children: "Mês",
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                          className:
                            "flex-1 sm:flex-none px-2 md:px-4 py-1.5 rounded-lg text-[8px] md:text-[10px] font-black uppercase tracking-widest text-stone-400 hover:text-velvet",
                          children: "Semana",
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                          className:
                            "flex-1 sm:flex-none px-2 md:px-4 py-1.5 rounded-lg text-[8px] md:text-[10px] font-black uppercase tracking-widest text-stone-400 hover:text-velvet",
                          children: "Dia",
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                  className: "overflow-x-auto",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "min-w-[320px]",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                        className: "grid grid-cols-7 border-b border-stone-50",
                        children: ["D", "S", "T", "Q", "Q", "S", "S"].map((day) =>
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className:
                                "py-3 text-center text-[9px] font-black uppercase tracking-widest text-stone-400",
                              children: day,
                            },
                            day,
                          ),
                        ),
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                        className: "grid grid-cols-7 grid-rows-5 min-h-[400px] md:h-[600px]",
                        children: Array.from({
                          length: 35,
                        }).map((_, i) => {
                          const day = i - 2;
                          const isToday = day === 24;
                          const hasEvent = [25, 26, 28].includes(day);
                          return /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: `border-r border-b border-stone-50 p-1.5 md:p-3 group hover:bg-stone-50/50 transition-colors cursor-pointer relative ${i % 7 === 6 ? "border-r-0" : ""}`,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                                className: "flex flex-col h-full",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                    className: `text-[10px] md:text-xs font-bold mb-1 ${day > 0 && day <= 31 ? (isToday ? "text-white bg-gold h-5 w-5 md:h-6 md:w-6 flex items-center justify-center rounded-full" : "text-stone-400 group-hover:text-velvet") : "text-stone-100"}`,
                                    children: day > 0 && day <= 31 ? day : "",
                                  }),
                                  day > 0 &&
                                    day <= 31 &&
                                    hasEvent &&
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                                      className: "flex-1 flex flex-col justify-end",
                                      children: events
                                        .filter((e) => e.date === String(day))
                                        .map((event) =>
                                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                            "div",
                                            {
                                              className: "group/event relative",
                                              children: [
                                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                                                  className: `h-1 md:h-1.5 w-full rounded-full ${event.color} mb-0.5 opacity-60 group-hover:opacity-100 transition-opacity`,
                                                }),
                                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "hidden md:block text-[8px] font-bold text-stone-600 truncate uppercase tracking-tighter mb-1",
                                                  children: event.title,
                                                }),
                                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "md:hidden absolute -top-1 right-0 h-1.5 w-1.5 rounded-full bg-white border border-stone-200",
                                                }),
                                              ],
                                            },
                                            event.id,
                                          ),
                                        ),
                                    }),
                                ],
                              }),
                            },
                            i,
                          );
                        }),
                      }),
                    ],
                  }),
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  className:
                    "p-4 border-t border-stone-50 bg-stone-50/20 flex flex-wrap gap-4 items-center justify-center",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center gap-1.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                          className: "h-2 w-2 rounded-full bg-red-500",
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                          className:
                            "text-[9px] font-black text-stone-500 uppercase tracking-widest",
                          children: "Judicial",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center gap-1.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                          className: "h-2 w-2 rounded-full bg-gold",
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                          className:
                            "text-[9px] font-black text-stone-500 uppercase tracking-widest",
                          children: "Reunião",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                      className: "flex items-center gap-1.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                          className: "h-2 w-2 rounded-full bg-blue-500",
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                          className:
                            "text-[9px] font-black text-stone-500 uppercase tracking-widest",
                          children: "Prazo",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "xl:col-span-4 space-y-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className:
                  "bg-velvet rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-velvet/20",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                    className:
                      "absolute top-[-10%] right-[-10%] w-48 h-48 bg-gold/10 rounded-full blur-3xl",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "relative z-10",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", {
                        className: "font-serif text-2xl mb-2",
                        children: [
                          "Sincronizar ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                            className: "italic text-gold",
                            children: "Calendários",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                        className:
                          "text-white/60 text-[10px] uppercase tracking-widest font-bold mb-8",
                        children: "Centralize sua agenda externa",
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                        className: "space-y-4",
                        children: integrations.map((app) =>
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className:
                                "flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
                                      src: app.icon,
                                      alt: app.name,
                                      className: "h-6 w-6",
                                    }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                      className: "text-xs font-bold uppercase tracking-wider",
                                      children: app.name,
                                    }),
                                  ],
                                }),
                                app.connected
                                  ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-[8px] bg-green-500/20 text-green-400 font-black uppercase tracking-widest px-2 py-1 rounded-md",
                                      children: "Ativo",
                                    })
                                  : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-[8px] text-white/40 group-hover:text-gold transition-colors font-black uppercase tracking-widest",
                                      children: "Conectar",
                                    }),
                              ],
                            },
                            app.name,
                          ),
                        ),
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                        className:
                          "mt-8 p-4 bg-gold/10 rounded-2xl border border-gold/20 flex items-start gap-3",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, {
                            className: "h-4 w-4 text-gold shrink-0 mt-0.5",
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                            className:
                              "text-[10px] text-gold/80 leading-relaxed font-bold uppercase tracking-tight",
                            children:
                              "Seus prazos processuais são automaticamente sincronizados com o PJe e bases tribunais.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                    className: "p-6 border-b border-stone-50",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", {
                      className: "font-serif text-lg text-velvet",
                      children: [
                        "Próximos ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                          className: "italic text-gold",
                          children: "Compromissos",
                        }),
                      ],
                    }),
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                    className: "p-4 space-y-2",
                    children: events.map((event) =>
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className:
                            "p-4 rounded-2xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-100 group cursor-pointer",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                            className: "flex items-start justify-between",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                                className: "flex gap-4",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                                    className: `h-10 w-10 shrink-0 rounded-xl ${event.color} flex flex-col items-center justify-center text-white`,
                                    children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-[10px] font-bold uppercase leading-none opacity-60",
                                        children: "Out",
                                      }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                        className: "text-sm font-black leading-none mt-1",
                                        children: event.date,
                                      }),
                                    ],
                                  }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                                    children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                                        className:
                                          "text-xs font-bold text-velvet group-hover:text-gold transition-colors",
                                        children: event.title,
                                      }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                                        className: "flex items-center gap-3 mt-1.5",
                                        children: [
                                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-1 text-[10px] font-bold uppercase tracking-tighter text-stone-500",
                                            children: [
                                              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, {
                                                className: "h-3 w-3 text-gold/60",
                                              }),
                                              event.time,
                                            ],
                                          }),
                                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-1 text-[10px] font-bold uppercase tracking-tighter text-stone-500",
                                            children: [
                                              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, {
                                                className: "h-3 w-3 text-gold/60",
                                              }),
                                              "Virtual / Fórum",
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                                className: "text-stone-300 hover:text-velvet transition-colors",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, {
                                  className: "h-4 w-4",
                                }),
                              }),
                            ],
                          }),
                        },
                        event.id,
                      ),
                    ),
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
export { DashboardAgenda as component };
