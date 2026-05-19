import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate, L as Link, O as Outlet } from "../_libs/tanstack__react-router.mjs";
import {
  L as LayoutDashboard,
  H as Users,
  C as Calendar,
  F as FileText,
  o as Globe,
  y as Settings,
  r as LogOut,
  w as Search,
  B as Bell,
} from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function DashboardLayout() {
  const [activeTab, setActiveTab] = reactExports.useState("overview");
  useNavigate();
  const sidebarItems = [
    {
      id: "overview",
      name: "Painel",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      id: "clients",
      name: "Clientes",
      icon: Users,
      path: "/dashboard/clients",
    },
    {
      id: "agenda",
      name: "Agenda",
      icon: Calendar,
      path: "/dashboard/agenda",
    },
    {
      id: "cases",
      name: "Processos",
      icon: FileText,
      path: "/dashboard/cases",
    },
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "flex h-screen bg-[#fcfaf7] overflow-hidden",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", {
        className: "hidden xl:flex w-72 bg-velvet text-white flex-col border-r border-white/5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "p-8",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, {
              to: "/",
              className: "flex flex-col",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
                  className: "font-serif text-xl font-bold tracking-widest text-white",
                  children: [
                    "Ayrton ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                      className: "text-gold",
                      children: "Pedrosa",
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                  className: "text-[7px] uppercase tracking-[0.4em] text-white/40",
                  children: "Escritório Digital",
                }),
              ],
            }),
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", {
            className: "flex-1 px-4 py-4 space-y-2",
            children: sidebarItems.map((item) => {
              const Icon = item.icon;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: item.path,
                  className: `flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all group ${activeTab === item.id ? "bg-gold text-velvet shadow-lg shadow-gold/20" : "text-white/50 hover:bg-white/5 hover:text-white"}`,
                  onClick: () => setActiveTab(item.id),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, {
                      className: `h-5 w-5 ${activeTab === item.id ? "text-velvet" : "text-white/30 group-hover:text-white"}`,
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                      className: "text-[13px] font-bold uppercase tracking-wider",
                      children: item.name,
                    }),
                  ],
                },
                item.id,
              );
            }),
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "p-6 border-t border-white/5 space-y-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, {
                to: "/",
                className:
                  "flex items-center gap-3 px-4 py-3 w-full text-white/60 hover:text-gold transition-colors group border border-white/5 rounded-xl hover:bg-white/5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, {
                    className: "h-5 w-5 opacity-40 group-hover:opacity-100",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                    className: "text-xs uppercase tracking-widest font-bold",
                    children: "Voltar ao Site",
                  }),
                ],
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
                className:
                  "flex items-center gap-3 px-4 py-3 w-full text-white/40 hover:text-white transition-colors group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, {
                    className: "h-5 w-5 opacity-40 group-hover:opacity-100",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                    className: "text-xs uppercase tracking-widest font-bold",
                    children: "Configurações",
                  }),
                ],
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, {
                to: "/",
                className:
                  "flex items-center gap-3 px-4 py-3 w-full text-red-400/60 hover:text-red-400 transition-colors group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, {
                    className: "h-5 w-5 opacity-40 group-hover:opacity-100",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                    className: "text-xs uppercase tracking-widest font-bold",
                    children: "Sair",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", {
        className: "flex-1 flex flex-col overflow-hidden pb-16 xl:pb-0",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("header", {
            className:
              "h-16 xl:h-20 bg-white border-b border-stone-100 flex items-center justify-between px-4 xl:px-10 shrink-0 z-20",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-3 xl:gap-4 flex-1 min-w-0",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                    className: "xl:hidden shrink-0",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, {
                      to: "/",
                      className:
                        "flex items-center gap-1.5 bg-gold/10 px-2 py-1.5 rounded-lg border border-gold/20",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, {
                          className: "h-3.5 w-3.5 text-gold",
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                          className:
                            "font-sans text-[9px] font-black text-velvet uppercase tracking-widest hidden sm:block",
                          children: "Site",
                        }),
                      ],
                    }),
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "relative flex-1 max-w-[200px] xl:max-w-96",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, {
                        className:
                          "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-stone-400",
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                        type: "text",
                        placeholder: "Buscar...",
                        className:
                          "w-full bg-stone-50 border border-stone-200 rounded-lg py-1.5 pl-9 text-xs text-velvet placeholder:text-stone-400 focus:bg-white focus:ring-1 focus:ring-gold/30 transition-all outline-none",
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-2 xl:gap-6 ml-3 shrink-0",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
                    className:
                      "h-8 w-8 xl:h-10 xl:w-10 flex items-center justify-center rounded-lg hover:bg-stone-50 transition-colors relative",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, {
                        className: "h-4 w-4 xl:h-5 xl:w-5 text-stone-400",
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                        className:
                          "absolute top-1.5 right-1.5 h-1.5 w-1.5 bg-gold rounded-full border border-white",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                    className: "hidden xl:block h-8 w-px bg-stone-100 mx-2",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center gap-2 xl:gap-3",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                        className: "hidden xl:block text-right",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                            className: "text-xs font-bold text-velvet uppercase tracking-wider",
                            children: "Dr. Ayrton Pedrosa",
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                            className:
                              "text-[10px] text-stone-400 font-bold uppercase tracking-tight",
                            children: "OAB/PE 35.952",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                        className:
                          "h-8 w-8 xl:h-10 xl:w-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "flex-1 overflow-y-auto bg-stone-50/50 p-4 sm:p-6 xl:p-10 scroll-smooth",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              className: "max-w-7xl mx-auto pb-10",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
            }),
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", {
            className:
              "xl:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-stone-100 px-2 py-2.5 flex items-center justify-around z-50 shadow-[0_-10px_30px_-5px_rgba(0,0,0,0.05)]",
            children: sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: item.path,
                  className: `flex flex-col items-center gap-1.5 px-2 py-1 min-w-[70px] transition-all ${isActive ? "text-gold" : "text-stone-400"}`,
                  onClick: () => setActiveTab(item.id),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                      className: `p-1.5 rounded-xl transition-all duration-300 ${isActive ? "bg-gold/10 scale-110" : ""}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, {
                        className: `h-5 w-5 ${isActive ? "stroke-[2.5px]" : "stroke-[2px]"}`,
                      }),
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                      className: `text-[9px] font-black uppercase tracking-widest text-center transition-all ${isActive ? "opacity-100" : "opacity-60"}`,
                      children: item.name,
                    }),
                  ],
                },
                item.id,
              );
            }),
          }),
        ],
      }),
    ],
  });
}
export { DashboardLayout as component };
