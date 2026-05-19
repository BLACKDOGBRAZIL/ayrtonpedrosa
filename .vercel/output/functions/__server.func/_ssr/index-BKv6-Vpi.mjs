import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { N as Navbar, C as Contact, F as Footer, S as ScrollToTop } from "./Contact-BtFftyT1.mjs";
import { B as Button, c as cn } from "./button-CfdaOMCp.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { R as Route$4 } from "./router-3DhW303R.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import {
  g as ChevronRight,
  W as Wheat,
  T as TreePine,
  c as Building2,
  S as ScrollText,
  G as Gavel,
  b as ArrowUpRight,
} from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
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
import "./input-D1rXzXN0.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const heroImg = "/assets/hero_classic_law-BFXlNo3Y.png";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", {
    id: "home",
    className: "relative isolate flex min-h-screen items-center overflow-hidden",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1.5, ease: "easeOut" },
        src: heroImg,
        alt: "Interior clássico de escritório de advocacia",
        className: "absolute inset-0 -z-20 h-full w-full object-cover",
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className:
          "absolute inset-0 -z-10 bg-gradient-to-r from-velvet via-velvet/80 to-transparent md:from-velvet md:via-velvet/40",
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "absolute inset-0 -z-10 bg-black/20",
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "mx-auto w-full max-w-7xl px-6 py-32",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "max-w-3xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.8, delay: 0.2 },
              className: "flex items-center gap-4 mb-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-12 bg-gold" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                  className:
                    "text-[10px] md:text-xs uppercase tracking-[0.2em] text-gold font-medium",
                  children: "Excelência Jurídica",
                }),
              ],
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 1, delay: 0.4 },
              className:
                "font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white font-medium tracking-tight",
              children: [
                "Estratégia e segurança ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "para o seu ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                  className: "italic text-gold/90",
                  children: "patrimônio",
                }),
                ".",
              ],
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 1, delay: 0.6 },
              className: "mt-8 max-w-xl text-lg md:text-xl text-white/80 leading-relaxed",
              children:
                "Assessoria jurídica sob medida para pessoas físicas e empresas que exigem sofisticação e segurança.",
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.8 },
              className: "mt-12 flex flex-col items-center sm:flex-row gap-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
                  asChild: true,
                  variant: "hero",
                  className: "h-12 px-8 text-xs group",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
                    href: "#contato",
                    className: "flex items-center gap-3",
                    children: [
                      "Saiba mais",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" }),
                    ],
                  }),
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, {
                  to: "/areas-de-atuacao",
                  className:
                    "group flex items-center gap-3 text-white/80 hover:text-white transition-all text-[11px] uppercase tracking-[0.2em] font-medium",
                  children: [
                    "VER ÁREAS DE ATUAÇÃO",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                      className:
                        "h-px w-8 bg-white/20 transition-all group-hover:w-12 group-hover:bg-gold",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "absolute right-12 bottom-0 hidden lg:block",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, {
          initial: { height: 0 },
          animate: { height: "30vh" },
          transition: { duration: 1.5, delay: 1 },
          className: "w-px bg-gradient-to-b from-transparent via-gold/40 to-gold",
        }),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1, delay: 1.5 },
        className: "absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "flex flex-col items-center gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
              className: "text-[10px] uppercase tracking-[0.2em] text-white/60",
              children: "Descer",
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              className: "h-10 w-px bg-gold/30 relative overflow-hidden",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, {
                animate: { y: ["-100%", "100%"] },
                transition: { duration: 2, repeat: Infinity, ease: "linear" },
                className: "absolute top-0 left-0 w-full h-full bg-gold",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const portrait = "/assets/portrait-ayrton-DnJHmFlk.jpg";
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", {
    id: "sobre",
    className: "relative overflow-hidden bg-cream py-28 md:py-40 scroll-mt-28",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "mx-auto max-w-7xl px-6",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 1 },
          className: "mx-auto max-w-3xl text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
              className: "text-[10px] uppercase tracking-widest text-gold",
              children: "— O Escritório —",
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", {
              className:
                "mt-6 font-serif text-4xl font-medium leading-[1.1] text-velvet md:text-6xl",
              children: [
                "Advocacia ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                  className: "text-gold",
                  children: "sob medida",
                }),
                " para",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                  className: "text-gold",
                  children: "decisões complexas",
                }),
                ".",
              ],
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              className: "mx-auto mt-8 h-px w-24 bg-gold/50",
            }),
          ],
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "mt-20 grid items-center gap-16 md:grid-cols-12 md:gap-20",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, {
              initial: { opacity: 0, x: -50 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 1.2, delay: 0.2 },
              className: "md:col-span-5",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "relative",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                    className: "absolute -left-4 -top-4 h-full w-full border border-gold/60",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
                    src: portrait,
                    alt: "Ayrton Pedrosa, advogado especialista",
                    width: 896,
                    height: 1152,
                    loading: "lazy",
                    className: "relative aspect-[4/5] w-full object-cover object-top shadow-lg",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className:
                      "absolute bottom-0 left-0 right-0 bg-white p-8 border-t border-gold/20",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                        className: "font-serif text-2xl font-medium text-velvet",
                        children: "Dr. Ayrton Pedrosa",
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                        className:
                          "mt-2 text-[10px] font-medium uppercase tracking-widest text-gold",
                        children: "Advogado · OAB/PE 35.952",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, {
              initial: { opacity: 0, x: 50 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 1.2, delay: 0.4 },
              className: "md:col-span-7",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
                  className:
                    "font-serif text-2xl font-medium text-velvet md:text-4xl leading-tight",
                  children: "Atuação Estratégica e Exclusiva.",
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                  className: "mt-8 text-base leading-[2] text-velvet/80 md:text-xl font-light",
                  children:
                    "O escritório Ayrton Pedrosa Advocacia fundamenta sua prática no rigor técnico e na discrição absoluta. Nossa missão é prover segurança jurídica por meio da antecipação de riscos, consolidando estratégias robustas que protegem o patrimônio e viabilizam os negócios de nossos clientes.",
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                  className: "mt-6 text-base leading-[2] text-velvet/70 md:text-lg",
                  children:
                    "Em um cenário corporativo dinâmico, entregamos uma advocacia consultiva e contenciosa de alta performance. Tratamos cada caso com profunda dedicação institucional, garantindo a agilidade e o direcionamento preciso que a complexidade do mercado moderno exige.",
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  className: "mt-16 flex flex-col gap-8 sm:flex-row sm:items-center",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                      className: "h-px flex-1 bg-gold/20",
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                      className: "flex flex-col",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                          className: "font-serif text-xl italic text-gold",
                          children: "Ayrton Pedrosa",
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                          className: "text-[10px] uppercase tracking-[0.3em] text-velvet/40 mt-1",
                          children: "Sócio Fundador",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const areas = [
  {
    number: "01",
    title: "Agrário & Agronegócio",
    description:
      "Regularização de propriedades rurais (análise de CCIR, CAR, georreferenciamento e processos de desmembramento). Contratos Agrícolas. Direito de Posse. Cooperativas Agrícolas.",
    icons: [Wheat],
  },
  {
    number: "02",
    title: "Direito Ambiental",
    description:
      "Consultoria preventiva e defesa contenciosa especializada. Atuamos ativamente na gestão de passivos ambientais, desembaraço de licenciamentos e resposta a autuações, protegendo a operação do seu negócio.",
    icons: [TreePine],
  },
  {
    number: "03",
    title: "Direito Imobiliário",
    description:
      "Proteção jurídica para negócios imobiliários: Due diligence. Regularização de imóveis urbanos. Usucapição judicial e Extrajudicial. Análise de riscos para aquisição de e locação de imóveis. Atuação judicial em demandas imobiliárias. Gestão em contratos de locação. Assessoria para Imobiliárias e Administradoras de Imóveis. Assessoria em Contratos Build to Suit",
    icons: [Building2],
  },
  {
    number: "04",
    title: "Sucessões & Inventários",
    description:
      "Proteção do legado familiar e eficiência fiscal. Gestão estratégica de inventários e planejamento sucessório focado na mitigação dos impactos do ITCMD, assegurando a transição pacífica e rentável dos bens.",
    icons: [ScrollText],
  },
  {
    number: "05",
    title: "Defesa Patrimonial e Contencioso",
    description:
      "Proteção ativa do seu patrimônio contra execuções fiscais e abusos do sistema financeiro. Atuamos com contestações bancárias robustas e embargos à execução, garantindo a continuidade do seu negócio.",
    icons: [Gavel],
  },
];
function Areas() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", {
    id: "areas",
    className: "relative bg-white py-28 md:py-40 scroll-mt-28",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "mx-auto max-w-7xl px-6",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 1 },
          className: "grid gap-12 md:grid-cols-12 md:items-end",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "md:col-span-7",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                  className: "text-[10px] uppercase tracking-widest text-gold",
                  children: "— Áreas de Atuação —",
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", {
                  className:
                    "mt-6 font-serif text-4xl font-medium leading-[1.05] text-velvet md:text-6xl",
                  children: [
                    "Soluções jurídicas ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                      className: "text-gold",
                      children: "integradas e estratégicas",
                    }),
                    ".",
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
              className: "text-base leading-relaxed text-velvet/70 md:col-span-5 md:text-lg",
              children:
                "Compreendemos a complexidade do seu negócio. Oferecemos suporte legal completo para proteger seu patrimônio e viabilizar resultados.",
            }),
          ],
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          suppressHydrationWarning: true,
          className:
            "mt-20 grid gap-px bg-gold/10 md:grid-cols-2 lg:grid-cols-3 border border-gold/10",
          children: [
            areas.map((a, idx) => {
              const Icon = a.icons[0];
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/areas-de-atuacao",
                  className:
                    "group relative flex flex-col bg-white p-10 transition-all duration-500 hover:bg-cream",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, {
                    initial: { opacity: 0, y: 40 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.8, delay: idx * 0.1 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                        className: "flex items-start justify-between",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                            className: "font-serif text-sm text-gold/30",
                            children: a.number,
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                            className:
                              "flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-velvet group-hover:scale-110 group-hover:border-gold group-hover:shadow-lg group-hover:shadow-gold/20",
                            children:
                              Icon &&
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, {
                                className: "h-5 w-5",
                                strokeWidth: 1.5,
                              }),
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
                        className:
                          "mt-10 font-serif text-2xl font-medium leading-tight text-velvet md:text-3xl",
                        children: a.title,
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                        className: "mt-4 text-sm leading-relaxed text-velvet/60",
                        children: a.description,
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                        className:
                          "mt-10 flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold transition-all duration-500",
                        children: [
                          "Saiba mais ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, {
                            className: "h-3.5 w-3.5",
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                a.number,
              );
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
              to: "/",
              hash: "contato",
              className:
                "group relative flex flex-col justify-between bg-velvet p-10 text-white shadow-2xl transition-all duration-500 hover:brightness-110",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, {
                initial: { opacity: 0, scale: 0.95 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { duration: 1 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                        className: "text-[10px] uppercase tracking-widest text-gold/80",
                        children: "— Consultoria —",
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", {
                        className:
                          "mt-8 font-serif text-2xl font-medium leading-tight md:text-3xl text-white",
                        children: [
                          "Cada caso merece uma ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                            className: "text-gold",
                            children: "solução",
                          }),
                          " única.",
                        ],
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                        className: "mt-6 text-sm leading-relaxed text-white/70",
                        children:
                          "Agende uma análise de viabilidade e descubra o plano de ação exato para a proteção dos seus ativos.",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className:
                      "mt-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-gold group-hover:text-white transition-all",
                    children: [
                      "Fale com o escritório ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
const Card = reactExports.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ref,
    className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
    ...props,
  }),
);
Card.displayName = "Card";
const CardHeader = reactExports.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props,
  }),
);
CardHeader.displayName = "CardHeader";
const CardTitle = reactExports.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props,
  }),
);
CardTitle.displayName = "CardTitle";
const CardDescription = reactExports.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props,
  }),
);
CardDescription.displayName = "CardDescription";
const CardContent = reactExports.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ref,
    className: cn("p-6 pt-0", className),
    ...props,
  }),
);
CardContent.displayName = "CardContent";
const CardFooter = reactExports.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props,
  }),
);
CardFooter.displayName = "CardFooter";
function NewsSection() {
  const [news, setNews] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const fetchNews = async () => {
      try {
        const rssUrl =
          "https://news.google.com/rss/search?q=economia+OR+direito+OR+agronegócio+Brasil&hl=pt-BR&gl=BR&ceid=BR:pt-419";
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`,
        );
        const data = await response.json();
        if (data.status === "ok") {
          const parsedItems = data.items.slice(0, 3).map((item) => {
            const titleParts = item.title.split(" - ");
            const source = titleParts.length > 1 ? titleParts.pop() : "";
            return {
              ...item,
              title: titleParts.join(" - "),
              source,
            };
          });
          setNews(parsedItems);
        }
      } catch (error) {
        console.error("Error fetching news", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", {
    id: "blog",
    className: "relative bg-cream py-28 md:py-32 scroll-mt-28",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "mx-auto max-w-7xl px-6",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 1 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
              className: "text-[10px] uppercase tracking-widest text-gold",
              children: "— Notícias —",
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", {
              className:
                "mt-6 font-serif text-4xl font-medium leading-[1.1] text-velvet md:text-5xl",
              children: [
                "Atualizações em ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                  className: "text-gold",
                  children: "Tempo Real",
                }),
                ".",
              ],
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              className: "mx-auto mt-8 h-px w-32 gold-divider",
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
              className:
                "mt-8 text-base leading-relaxed text-velvet/60 md:text-lg max-w-2xl mx-auto",
              children: "Acompanhe as últimas notícias de economia, direito e agronegócio.",
            }),
          ],
        }),
        loading
          ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-8",
              children: [1, 2, 3].map((n) =>
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className:
                      "h-[420px] rounded-none bg-velvet/5 animate-pulse border border-gold/5 flex flex-col justify-end p-10",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                        className: "h-4 w-24 bg-gold/10 mb-4",
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                        className: "h-8 w-full bg-gold/10 mb-2",
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                        className: "h-8 w-2/3 bg-gold/10",
                      }),
                    ],
                  },
                  n,
                ),
              ),
            })
          : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-8",
              children: news.map((item, i) =>
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.a,
                  {
                    href: item.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    whileHover: { y: -10 },
                    viewport: { once: true },
                    transition: { duration: 0.8, delay: i * 0.15 },
                    className: "group block h-full",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, {
                      className:
                        "h-full relative border-none shadow-xl hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col overflow-hidden min-h-[420px]",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                          className: "absolute inset-0 z-0",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
                              src: `/images/news_cover_${(i % 3) + 1}.png`,
                              alt: "",
                              loading: "lazy",
                              className:
                                "w-full h-full object-cover opacity-80 blur-[0.5px] saturate-[0.8] group-hover:scale-110 group-hover:blur-0 group-hover:saturate-100 group-hover:opacity-100 transition-all duration-700",
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                              className:
                                "absolute inset-0 bg-gradient-to-t from-velvet via-velvet/40 to-transparent transition-opacity group-hover:opacity-100 duration-500",
                            }),
                          ],
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, {
                          className: "relative z-10 flex-1 justify-end pt-20",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                              className: "flex items-center justify-between mb-4",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                                  className:
                                    "text-[10px] text-gold uppercase tracking-[0.2em] font-bold bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10",
                                  children: new Date(item.pubDate).toLocaleDateString("pt-BR"),
                                }),
                                item.source &&
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                                    className:
                                      "text-[10px] text-white/60 uppercase tracking-wider font-bold drop-shadow-sm",
                                    children: item.source,
                                  }),
                              ],
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, {
                              className:
                                "font-serif text-2xl text-white group-hover:text-gold transition-colors line-clamp-3 leading-tight mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
                              children: item.title,
                            }),
                          ],
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, {
                          className: "relative z-10 pb-10 pt-0",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, {
                              className:
                                "line-clamp-3 text-white/80 text-xs font-medium leading-relaxed mb-6 drop-shadow-sm",
                              children: item.description.replace(/<[^>]+>/g, ""),
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-widest group-hover:gap-4 transition-all",
                              children: [
                                "Ler notícia completa",
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                                  className: "h-px w-8 bg-gold",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  i,
                ),
              ),
            }),
      ],
    }),
  });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster$1, {
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...props,
  });
};
function Index() {
  const { year } = Route$4.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", {
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Areas, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NewsSection, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, { year }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollToTop, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {
        richColors: true,
        position: "top-right",
        theme: "dark",
      }),
    ],
  });
}
export { Index as component };
