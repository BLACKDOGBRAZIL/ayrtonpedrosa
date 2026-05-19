import { d as i, j as e } from "./index-0qK1wPb4.js";
import { B as c } from "./button-CmpoKRFv.js";
import { c as l } from "./createLucideIcon-_P2Vc871.js";
import { P as u } from "./plus-CmbJoqKT.js";
import { C as f } from "./chevron-right-CT9zOBCR.js";
import { C as v } from "./clock-Blu_oA68.js";
import { M as b } from "./map-pin-RWc1RILk.js";
import { E as j } from "./ellipsis-vertical-BapVau-a.js";
const N = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  w = l("chevron-left", N);
const k = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  y = l("circle-alert", k);
const C = [
    ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
    ["path", { d: "M8 16H3v5", key: "1cv678" }],
  ],
  S = l("refresh-cw", C);
function I() {
  const [d, z] = i.useState("Outubro 2026"),
    [x, o] = i.useState(!1),
    m = () => {
      (o(!0), setTimeout(() => o(!1), 2e3));
    },
    n = [
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
    ],
    p = [
      {
        name: "Google Calendar",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
        connected: !0,
      },
      {
        name: "Outlook / Microsoft",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg",
        connected: !1,
      },
      {
        name: "Apple Calendar",
        icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Ios-calendar-icon.png",
        connected: !1,
      },
    ];
  return e.jsxs("div", {
    className: "space-y-6 md:space-y-8 pb-24 lg:pb-10",
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
                  "Agenda & ",
                  e.jsx("span", { className: "italic text-gold", children: "Prazos" }),
                ],
              }),
              e.jsx("p", {
                className:
                  "text-stone-500 text-[10px] sm:text-[11px] md:text-sm mt-1 uppercase tracking-wider font-medium opacity-70",
                children: "Sincronização centralizada",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto",
            children: [
              e.jsxs(c, {
                onClick: m,
                variant: "outline",
                className:
                  "w-full sm:w-auto border-stone-200 text-stone-600 rounded-lg px-3 h-10 flex items-center justify-center gap-2 uppercase tracking-[0.15em] text-[8px] sm:text-[9px] font-black hover:bg-stone-50 shrink-0",
                children: [
                  e.jsx(S, { className: `h-3 w-3 ${x ? "animate-spin" : ""}` }),
                  "Sincronizar Tudo",
                ],
              }),
              e.jsxs(c, {
                className:
                  "w-full sm:w-auto bg-velvet hover:bg-velvet/90 text-white rounded-lg px-3 h-10 flex items-center justify-center gap-2 uppercase tracking-[0.15em] text-[8px] sm:text-[9px] font-black shadow-lg shadow-velvet/10 shrink-0",
                children: [e.jsx(u, { className: "h-3.5 w-3.5" }), "Novo Evento"],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "grid grid-cols-1 xl:grid-cols-12 gap-8",
        children: [
          e.jsx("div", {
            className: "xl:col-span-8 space-y-6",
            children: e.jsxs("div", {
              className: "bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden",
              children: [
                e.jsxs("div", {
                  className:
                    "p-3 md:p-8 border-b border-stone-50 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between sm:justify-start gap-4",
                      children: [
                        e.jsx("h2", {
                          className: "text-base md:text-xl font-serif text-velvet",
                          children: d,
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-1",
                          children: [
                            e.jsx("button", {
                              className: "p-1.5 hover:bg-stone-50 rounded-lg transition-colors",
                              children: e.jsx(w, { className: "h-4 w-4 text-stone-400" }),
                            }),
                            e.jsx("button", {
                              className: "p-1.5 hover:bg-stone-50 rounded-lg transition-colors",
                              children: e.jsx(f, { className: "h-4 w-4 text-stone-400" }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex bg-stone-50 p-1 rounded-xl w-full sm:w-fit overflow-hidden",
                      children: [
                        e.jsx("button", {
                          className:
                            "flex-1 sm:flex-none px-2 md:px-4 py-1.5 rounded-lg text-[8px] md:text-[10px] font-black uppercase tracking-widest bg-white text-velvet shadow-sm",
                          children: "Mês",
                        }),
                        e.jsx("button", {
                          className:
                            "flex-1 sm:flex-none px-2 md:px-4 py-1.5 rounded-lg text-[8px] md:text-[10px] font-black uppercase tracking-widest text-stone-400 hover:text-velvet",
                          children: "Semana",
                        }),
                        e.jsx("button", {
                          className:
                            "flex-1 sm:flex-none px-2 md:px-4 py-1.5 rounded-lg text-[8px] md:text-[10px] font-black uppercase tracking-widest text-stone-400 hover:text-velvet",
                          children: "Dia",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "overflow-x-auto",
                  children: e.jsxs("div", {
                    className: "min-w-[320px]",
                    children: [
                      e.jsx("div", {
                        className: "grid grid-cols-7 border-b border-stone-50",
                        children: ["D", "S", "T", "Q", "Q", "S", "S"].map((s) =>
                          e.jsx(
                            "div",
                            {
                              className:
                                "py-3 text-center text-[9px] font-black uppercase tracking-widest text-stone-400",
                              children: s,
                            },
                            s,
                          ),
                        ),
                      }),
                      e.jsx("div", {
                        className: "grid grid-cols-7 grid-rows-5 min-h-[400px] md:h-[600px]",
                        children: Array.from({ length: 35 }).map((s, r) => {
                          const t = r - 2,
                            h = t === 24,
                            g = [25, 26, 28].includes(t);
                          return e.jsx(
                            "div",
                            {
                              className: `border-r border-b border-stone-50 p-1.5 md:p-3 group hover:bg-stone-50/50 transition-colors cursor-pointer relative ${r % 7 === 6 ? "border-r-0" : ""}`,
                              children: e.jsxs("div", {
                                className: "flex flex-col h-full",
                                children: [
                                  e.jsx("span", {
                                    className: `text-[10px] md:text-xs font-bold mb-1 ${t > 0 && t <= 31 ? (h ? "text-white bg-gold h-5 w-5 md:h-6 md:w-6 flex items-center justify-center rounded-full" : "text-stone-400 group-hover:text-velvet") : "text-stone-100"}`,
                                    children: t > 0 && t <= 31 ? t : "",
                                  }),
                                  t > 0 &&
                                    t <= 31 &&
                                    g &&
                                    e.jsx("div", {
                                      className: "flex-1 flex flex-col justify-end",
                                      children: n
                                        .filter((a) => a.date === String(t))
                                        .map((a) =>
                                          e.jsxs(
                                            "div",
                                            {
                                              className: "group/event relative",
                                              children: [
                                                e.jsx("div", {
                                                  className: `h-1 md:h-1.5 w-full rounded-full ${a.color} mb-0.5 opacity-60 group-hover:opacity-100 transition-opacity`,
                                                }),
                                                e.jsx("div", {
                                                  className:
                                                    "hidden md:block text-[8px] font-bold text-stone-600 truncate uppercase tracking-tighter mb-1",
                                                  children: a.title,
                                                }),
                                                e.jsx("div", {
                                                  className:
                                                    "md:hidden absolute -top-1 right-0 h-1.5 w-1.5 rounded-full bg-white border border-stone-200",
                                                }),
                                              ],
                                            },
                                            a.id,
                                          ),
                                        ),
                                    }),
                                ],
                              }),
                            },
                            r,
                          );
                        }),
                      }),
                    ],
                  }),
                }),
                e.jsxs("div", {
                  className:
                    "p-4 border-t border-stone-50 bg-stone-50/20 flex flex-wrap gap-4 items-center justify-center",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-1.5",
                      children: [
                        e.jsx("div", { className: "h-2 w-2 rounded-full bg-red-500" }),
                        e.jsx("span", {
                          className:
                            "text-[9px] font-black text-stone-500 uppercase tracking-widest",
                          children: "Judicial",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-1.5",
                      children: [
                        e.jsx("div", { className: "h-2 w-2 rounded-full bg-gold" }),
                        e.jsx("span", {
                          className:
                            "text-[9px] font-black text-stone-500 uppercase tracking-widest",
                          children: "Reunião",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-1.5",
                      children: [
                        e.jsx("div", { className: "h-2 w-2 rounded-full bg-blue-500" }),
                        e.jsx("span", {
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
          e.jsxs("div", {
            className: "xl:col-span-4 space-y-8",
            children: [
              e.jsxs("div", {
                className:
                  "bg-velvet rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-velvet/20",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute top-[-10%] right-[-10%] w-48 h-48 bg-gold/10 rounded-full blur-3xl",
                  }),
                  e.jsxs("div", {
                    className: "relative z-10",
                    children: [
                      e.jsxs("h3", {
                        className: "font-serif text-2xl mb-2",
                        children: [
                          "Sincronizar ",
                          e.jsx("span", { className: "italic text-gold", children: "Calendários" }),
                        ],
                      }),
                      e.jsx("p", {
                        className:
                          "text-white/60 text-[10px] uppercase tracking-widest font-bold mb-8",
                        children: "Centralize sua agenda externa",
                      }),
                      e.jsx("div", {
                        className: "space-y-4",
                        children: p.map((s) =>
                          e.jsxs(
                            "div",
                            {
                              className:
                                "flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    e.jsx("img", {
                                      src: s.icon,
                                      alt: s.name,
                                      className: "h-6 w-6",
                                    }),
                                    e.jsx("span", {
                                      className: "text-xs font-bold uppercase tracking-wider",
                                      children: s.name,
                                    }),
                                  ],
                                }),
                                s.connected
                                  ? e.jsx("span", {
                                      className:
                                        "text-[8px] bg-green-500/20 text-green-400 font-black uppercase tracking-widest px-2 py-1 rounded-md",
                                      children: "Ativo",
                                    })
                                  : e.jsx("span", {
                                      className:
                                        "text-[8px] text-white/40 group-hover:text-gold transition-colors font-black uppercase tracking-widest",
                                      children: "Conectar",
                                    }),
                              ],
                            },
                            s.name,
                          ),
                        ),
                      }),
                      e.jsxs("div", {
                        className:
                          "mt-8 p-4 bg-gold/10 rounded-2xl border border-gold/20 flex items-start gap-3",
                        children: [
                          e.jsx(y, { className: "h-4 w-4 text-gold shrink-0 mt-0.5" }),
                          e.jsx("p", {
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
              e.jsxs("div", {
                className: "bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden",
                children: [
                  e.jsx("div", {
                    className: "p-6 border-b border-stone-50",
                    children: e.jsxs("h3", {
                      className: "font-serif text-lg text-velvet",
                      children: [
                        "Próximos ",
                        e.jsx("span", { className: "italic text-gold", children: "Compromissos" }),
                      ],
                    }),
                  }),
                  e.jsx("div", {
                    className: "p-4 space-y-2",
                    children: n.map((s) =>
                      e.jsx(
                        "div",
                        {
                          className:
                            "p-4 rounded-2xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-100 group cursor-pointer",
                          children: e.jsxs("div", {
                            className: "flex items-start justify-between",
                            children: [
                              e.jsxs("div", {
                                className: "flex gap-4",
                                children: [
                                  e.jsxs("div", {
                                    className: `h-10 w-10 shrink-0 rounded-xl ${s.color} flex flex-col items-center justify-center text-white`,
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-[10px] font-bold uppercase leading-none opacity-60",
                                        children: "Out",
                                      }),
                                      e.jsx("span", {
                                        className: "text-sm font-black leading-none mt-1",
                                        children: s.date,
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text-xs font-bold text-velvet group-hover:text-gold transition-colors",
                                        children: s.title,
                                      }),
                                      e.jsxs("div", {
                                        className: "flex items-center gap-3 mt-1.5",
                                        children: [
                                          e.jsxs("div", {
                                            className:
                                              "flex items-center gap-1 text-[10px] font-bold uppercase tracking-tighter text-stone-500",
                                            children: [
                                              e.jsx(v, { className: "h-3 w-3 text-gold/60" }),
                                              s.time,
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "flex items-center gap-1 text-[10px] font-bold uppercase tracking-tighter text-stone-500",
                                            children: [
                                              e.jsx(b, { className: "h-3 w-3 text-gold/60" }),
                                              "Virtual / Fórum",
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("button", {
                                className: "text-stone-300 hover:text-velvet transition-colors",
                                children: e.jsx(j, { className: "h-4 w-4" }),
                              }),
                            ],
                          }),
                        },
                        s.id,
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
export { I as component };
