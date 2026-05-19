import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Navbar, C as Contact, F as Footer, S as ScrollToTop } from "./Contact-BtFftyT1.mjs";
import "../_libs/sonner.mjs";
import {
  W as Wheat,
  T as TreePine,
  c as Building2,
  S as ScrollText,
  G as Gavel,
  A as ArrowRight,
} from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-menu.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "./button-CfdaOMCp.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "./input-D1rXzXN0.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const areasHeroImg = "/assets/areas_hero_law-C7e-KU4B.png";
const practiceAreas = [
  {
    id: "agrario",
    title: "Agrário & Agronegócio",
    shortTitle: "Direito Agrário",
    icon: Wheat,
    content:
      "Atuação técnica especializada na regularização de propriedades rurais, abrangendo análise minuciosa de CCIR, CAR, georreferenciamento e processos complexos de desmembramento. Nossa assessoria estende-se à elaboração e revisão de Contratos Agrícolas, Direito de Posse e estruturação jurídica para Cooperativas Agrícolas, garantindo segurança jurídica no campo.",
  },
  {
    id: "ambiental",
    title: "Direito Ambiental",
    shortTitle: "Direito Ambiental",
    icon: TreePine,
    content:
      "Consultoria preventiva e defesa contenciosa especializada em questões ambientais. Atuamos ativamente na gestão estratégica de passivos ambientais, desembaraço de licenciamentos complexos e resposta técnica a autuações de órgãos reguladores. Nosso foco é proteger a operação do seu negócio contra riscos de interrupção e penalidades severas.",
  },
  {
    id: "imobiliario",
    title: "Direito Imobiliário",
    shortTitle: "Direito Imobiliário",
    icon: Building2,
    content:
      "Proteção jurídica para negócios imobiliários de alta complexidade. Oferecemos Due Diligence rigorosa, regularização de imóveis urbanos, e condução de processos de Usucapião judicial e extrajudicial. Nossa expertise inclui análise de riscos para aquisição e locação, gestão de contratos Build to Suit e assessoria estratégica para Imobiliárias e Administradoras de Imóveis.",
  },
  {
    id: "sucessoes",
    title: "Sucessões & Inventários",
    shortTitle: "Sucessões",
    icon: ScrollText,
    content:
      "Planejamento estratégico para a proteção do legado familiar e otimização fiscal. Gestão especializada de inventários e desenvolvimento de estruturas sucessórias focadas na mitigação dos impactos do ITCMD. Nosso compromisso é assegurar uma transição pacífica, rentável e juridicamente blindada dos ativos para as próximas gerações.",
  },
  {
    id: "defesa",
    title: "Defesa Patrimonial e Contencioso",
    shortTitle: "Defesa Patrimonial",
    icon: Gavel,
    content:
      "Blindagem e proteção ativa do patrimônio contra execuções fiscais e abusos sistêmicos do mercado financeiro. Atuamos com contestações bancárias robustas, embargos à execução e estratégias de defesa processual de alto impacto, garantindo a solvência e a continuidade operacional do seu negócio em cenários de litígio.",
  },
];
function AreasPage() {
  const [activeArea, setActiveArea] = reactExports.useState(practiceAreas[0]);
  const currentYear = /* @__PURE__ */ new Date().getFullYear();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "min-h-screen bg-white",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", {
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", {
            className:
              "relative min-h-[60vh] flex items-center bg-velvet pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, {
                initial: {
                  scale: 1.1,
                  opacity: 0,
                },
                animate: {
                  scale: 1,
                  opacity: 0.7,
                },
                transition: {
                  duration: 1.5,
                },
                src: areasHeroImg,
                alt: "Áreas de Atuação - Background",
                className: "absolute inset-0 h-full w-full object-cover",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-t from-velvet via-velvet/60 to-transparent",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-r from-velvet via-velvet/20 to-transparent",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className: "mx-auto max-w-7xl px-6 relative z-10 w-full",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, {
                  initial: {
                    opacity: 0,
                    y: 20,
                  },
                  animate: {
                    opacity: 1,
                    y: 0,
                  },
                  transition: {
                    duration: 0.8,
                  },
                  className: "max-w-3xl",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                      className: "text-[10px] uppercase tracking-widest text-gold",
                      children: "— Expertise —",
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", {
                      className:
                        "font-serif text-5xl font-medium leading-[1.1] text-white md:text-8xl",
                      children: [
                        "Excelência Jurídica ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {
                          className: "hidden md:block",
                        }),
                        "em ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                          className: "text-gold italic",
                          children: "Múltiplas Frentes",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                      className: "mt-8 text-lg leading-relaxed text-white/70",
                      children:
                        "Oferecemos soluções jurídicas de alta complexidade, com foco em resultados sólidos e proteção estratégica de ativos para empresas e patrimônios familiares.",
                    }),
                  ],
                }),
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("section", {
            className: "relative z-20 bg-white py-24 md:py-32",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              className: "mx-auto max-w-7xl px-6",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "grid gap-16 lg:grid-cols-12 lg:items-start",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "lg:col-span-4 sticky top-32",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                        className: "space-y-4",
                        children: practiceAreas.map((area) =>
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "button",
                            {
                              onClick: () => setActiveArea(area),
                              className: `group relative flex w-full items-center justify-between border-b border-gold/10 p-6 text-left transition-all duration-500 md:p-8 ${activeArea.id === area.id ? "bg-cream/50 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]" : "bg-transparent hover:bg-cream/30"}`,
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                                  className: "flex items-center gap-6",
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                                    className: "relative",
                                    children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                                        className: `font-serif text-xl md:text-2xl transition-colors duration-500 ${activeArea.id === area.id ? "text-velvet" : "text-velvet/30 group-hover:text-velvet/60"}`,
                                        children: area.shortTitle,
                                      }),
                                      activeArea.id === area.id &&
                                        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, {
                                          layoutId: "active-indicator",
                                          className:
                                            "absolute -bottom-1 left-0 h-0.5 w-full bg-gold",
                                          transition: {
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                          },
                                        }),
                                    ],
                                  }),
                                }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {
                                  className: `h-5 w-5 transition-all duration-500 ${activeArea.id === area.id ? "translate-x-0 opacity-100 text-gold" : "-translate-x-4 opacity-0 text-gold/40"}`,
                                }),
                              ],
                            },
                            area.id,
                          ),
                        ),
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                        className: "mt-12 rounded-none bg-velvet p-8 text-white",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                            className: "text-[10px] uppercase tracking-widest text-gold/80",
                            children: "— Suporte Jurídico —",
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
                            className: "mt-4 font-serif text-xl",
                            children: "Precisa de uma análise específica?",
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                            href: "#contato",
                            className:
                              "mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold hover:text-white transition-colors",
                            children: "Fale com o especialista",
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                    className: "lg:col-span-8 min-h-[500px]",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, {
                      mode: "wait",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.div,
                        {
                          initial: {
                            opacity: 0,
                            x: 20,
                          },
                          animate: {
                            opacity: 1,
                            x: 0,
                          },
                          exit: {
                            opacity: 0,
                            x: -20,
                          },
                          transition: {
                            duration: 0.5,
                            ease: "easeOut",
                          },
                          className: "flex flex-col h-full",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                              className:
                                "flex h-20 w-20 items-center justify-center rounded-none bg-cream border border-gold/20 text-gold mb-10",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(activeArea.icon, {
                                className: "h-8 w-8",
                                strokeWidth: 1.2,
                              }),
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", {
                              className:
                                "font-serif text-4xl text-velvet md:text-6xl mb-8 leading-tight",
                              children: activeArea.title,
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                              className: "prose prose-stone prose-lg max-w-none",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                                className:
                                  "text-xl leading-relaxed text-velvet/70 first-letter:text-6xl first-letter:font-serif first-letter:text-gold first-letter:mr-4 first-letter:float-left first-letter:mt-1",
                                children: activeArea.content,
                              }),
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                              className: "mt-12 grid gap-6 sm:grid-cols-2",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                                  className: "p-8 border border-gold/10 bg-cream/30",
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", {
                                      className: "font-serif text-lg text-velvet mb-3",
                                      children: "Consultoria Estratégica",
                                    }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                                      className: "text-sm text-velvet/60 leading-relaxed",
                                      children:
                                        "Focada em prevenção de riscos e estruturação de negócios sólidos.",
                                    }),
                                  ],
                                }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                                  className: "p-8 border border-gold/10 bg-cream/30",
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", {
                                      className: "font-serif text-lg text-velvet mb-3",
                                      children: "Defesa Contenciosa",
                                    }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                                      className: "text-sm text-velvet/60 leading-relaxed",
                                      children:
                                        "Atuação técnica em tribunais para proteger ativos e interesses operacionais.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        activeArea.id,
                      ),
                    }),
                  }),
                ],
              }),
            }),
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, { year: currentYear }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollToTop, {}),
    ],
  });
}
export { AreasPage as component };
