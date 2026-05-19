import { d as l, j as e } from "./index-0qK1wPb4.js";
import {
  W as n,
  b as c,
  B as d,
  S as m,
  G as x,
  N as p,
  A as g,
  C as u,
  F as v,
  a as h,
} from "./Contact-XmhCTeU7.js";
import { m as t } from "./proxy-CNoJBy2S.js";
import { A as f } from "./arrow-right-Q-N9FBuB.js";
import "./createLucideIcon-_P2Vc871.js";
import "./button-CmpoKRFv.js";
import "./chevron-right-CT9zOBCR.js";
import "./input-BJpobJm8.js";
import "./map-pin-RWc1RILk.js";
const b = "/assets/areas_hero_law-C7e-KU4B.png",
  i = [
    {
      id: "agrario",
      title: "Agrário & Agronegócio",
      shortTitle: "Direito Agrário",
      icon: n,
      content:
        "Atuação técnica especializada na regularização de propriedades rurais, abrangendo análise minuciosa de CCIR, CAR, georreferenciamento e processos complexos de desmembramento. Nossa assessoria estende-se à elaboração e revisão de Contratos Agrícolas, Direito de Posse e estruturação jurídica para Cooperativas Agrícolas, garantindo segurança jurídica no campo.",
    },
    {
      id: "ambiental",
      title: "Direito Ambiental",
      shortTitle: "Direito Ambiental",
      icon: c,
      content:
        "Consultoria preventiva e defesa contenciosa especializada em questões ambientais. Atuamos ativamente na gestão estratégica de passivos ambientais, desembaraço de licenciamentos complexos e resposta técnica a autuações de órgãos reguladores. Nosso foco é proteger a operação do seu negócio contra riscos de interrupção e penalidades severas.",
    },
    {
      id: "imobiliario",
      title: "Direito Imobiliário",
      shortTitle: "Direito Imobiliário",
      icon: d,
      content:
        "Proteção jurídica para negócios imobiliários de alta complexidade. Oferecemos Due Diligence rigorosa, regularização de imóveis urbanos, e condução de processos de Usucapião judicial e extrajudicial. Nossa expertise inclui análise de riscos para aquisição e locação, gestão de contratos Build to Suit e assessoria estratégica para Imobiliárias e Administradoras de Imóveis.",
    },
    {
      id: "sucessoes",
      title: "Sucessões & Inventários",
      shortTitle: "Sucessões",
      icon: m,
      content:
        "Planejamento estratégico para a proteção do legado familiar e otimização fiscal. Gestão especializada de inventários e desenvolvimento de estruturas sucessórias focadas na mitigação dos impactos do ITCMD. Nosso compromisso é assegurar uma transição pacífica, rentável e juridicamente blindada dos ativos para as próximas gerações.",
    },
    {
      id: "defesa",
      title: "Defesa Patrimonial e Contencioso",
      shortTitle: "Defesa Patrimonial",
      icon: x,
      content:
        "Blindagem e proteção ativa do patrimônio contra execuções fiscais e abusos sistêmicos do mercado financeiro. Atuamos com contestações bancárias robustas, embargos à execução e estratégias de defesa processual de alto impacto, garantindo a solvência e a continuidade operacional do seu negócio em cenários de litígio.",
    },
  ];
function P() {
  const [s, o] = l.useState(i[0]),
    r = new Date().getFullYear();
  return e.jsxs("div", {
    className: "min-h-screen bg-white",
    children: [
      e.jsx(p, {}),
      e.jsxs("main", {
        children: [
          e.jsxs("section", {
            className:
              "relative min-h-[60vh] flex items-center bg-velvet pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden",
            children: [
              e.jsx(t.img, {
                initial: { scale: 1.1, opacity: 0 },
                animate: { scale: 1, opacity: 0.7 },
                transition: { duration: 1.5 },
                src: b,
                alt: "Áreas de Atuação - Background",
                className: "absolute inset-0 h-full w-full object-cover",
              }),
              e.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-t from-velvet via-velvet/60 to-transparent",
              }),
              e.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-r from-velvet via-velvet/20 to-transparent",
              }),
              e.jsx("div", {
                className: "mx-auto max-w-7xl px-6 relative z-10 w-full",
                children: e.jsxs(t.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8 },
                  className: "max-w-3xl",
                  children: [
                    e.jsx("p", {
                      className: "text-[10px] uppercase tracking-widest text-gold",
                      children: "— Expertise —",
                    }),
                    e.jsxs("h1", {
                      className:
                        "font-serif text-5xl font-medium leading-[1.1] text-white md:text-8xl",
                      children: [
                        "Excelência Jurídica ",
                        e.jsx("br", { className: "hidden md:block" }),
                        "em ",
                        e.jsx("span", {
                          className: "text-gold italic",
                          children: "Múltiplas Frentes",
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className: "mt-8 text-lg leading-relaxed text-white/70",
                      children:
                        "Oferecemos soluções jurídicas de alta complexidade, com foco em resultados sólidos e proteção estratégica de ativos para empresas e patrimônios familiares.",
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsx("section", {
            className: "relative z-20 bg-white py-24 md:py-32",
            children: e.jsx("div", {
              className: "mx-auto max-w-7xl px-6",
              children: e.jsxs("div", {
                className: "grid gap-16 lg:grid-cols-12 lg:items-start",
                children: [
                  e.jsxs("div", {
                    className: "lg:col-span-4 sticky top-32",
                    children: [
                      e.jsx("div", {
                        className: "space-y-4",
                        children: i.map((a) =>
                          e.jsxs(
                            "button",
                            {
                              onClick: () => o(a),
                              className: `group relative flex w-full items-center justify-between border-b border-gold/10 p-6 text-left transition-all duration-500 md:p-8 ${s.id === a.id ? "bg-cream/50 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]" : "bg-transparent hover:bg-cream/30"}`,
                              children: [
                                e.jsx("div", {
                                  className: "flex items-center gap-6",
                                  children: e.jsxs("div", {
                                    className: "relative",
                                    children: [
                                      e.jsx("p", {
                                        className: `font-serif text-xl md:text-2xl transition-colors duration-500 ${s.id === a.id ? "text-velvet" : "text-velvet/30 group-hover:text-velvet/60"}`,
                                        children: a.shortTitle,
                                      }),
                                      s.id === a.id &&
                                        e.jsx(t.div, {
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
                                e.jsx(f, {
                                  className: `h-5 w-5 transition-all duration-500 ${s.id === a.id ? "translate-x-0 opacity-100 text-gold" : "-translate-x-4 opacity-0 text-gold/40"}`,
                                }),
                              ],
                            },
                            a.id,
                          ),
                        ),
                      }),
                      e.jsxs("div", {
                        className: "mt-12 rounded-none bg-velvet p-8 text-white",
                        children: [
                          e.jsx("p", {
                            className: "text-[10px] uppercase tracking-widest text-gold/80",
                            children: "— Suporte Jurídico —",
                          }),
                          e.jsx("h3", {
                            className: "mt-4 font-serif text-xl",
                            children: "Precisa de uma análise específica?",
                          }),
                          e.jsx("a", {
                            href: "#contato",
                            className:
                              "mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold hover:text-white transition-colors",
                            children: "Fale com o especialista",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "lg:col-span-8 min-h-[500px]",
                    children: e.jsx(g, {
                      mode: "wait",
                      children: e.jsxs(
                        t.div,
                        {
                          initial: { opacity: 0, x: 20 },
                          animate: { opacity: 1, x: 0 },
                          exit: { opacity: 0, x: -20 },
                          transition: { duration: 0.5, ease: "easeOut" },
                          className: "flex flex-col h-full",
                          children: [
                            e.jsx("div", {
                              className:
                                "flex h-20 w-20 items-center justify-center rounded-none bg-cream border border-gold/20 text-gold mb-10",
                              children: e.jsx(s.icon, { className: "h-8 w-8", strokeWidth: 1.2 }),
                            }),
                            e.jsx("h2", {
                              className:
                                "font-serif text-4xl text-velvet md:text-6xl mb-8 leading-tight",
                              children: s.title,
                            }),
                            e.jsx("div", {
                              className: "prose prose-stone prose-lg max-w-none",
                              children: e.jsx("p", {
                                className:
                                  "text-xl leading-relaxed text-velvet/70 first-letter:text-6xl first-letter:font-serif first-letter:text-gold first-letter:mr-4 first-letter:float-left first-letter:mt-1",
                                children: s.content,
                              }),
                            }),
                            e.jsxs("div", {
                              className: "mt-12 grid gap-6 sm:grid-cols-2",
                              children: [
                                e.jsxs("div", {
                                  className: "p-8 border border-gold/10 bg-cream/30",
                                  children: [
                                    e.jsx("h4", {
                                      className: "font-serif text-lg text-velvet mb-3",
                                      children: "Consultoria Estratégica",
                                    }),
                                    e.jsx("p", {
                                      className: "text-sm text-velvet/60 leading-relaxed",
                                      children:
                                        "Focada em prevenção de riscos e estruturação de negócios sólidos.",
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "p-8 border border-gold/10 bg-cream/30",
                                  children: [
                                    e.jsx("h4", {
                                      className: "font-serif text-lg text-velvet mb-3",
                                      children: "Defesa Contenciosa",
                                    }),
                                    e.jsx("p", {
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
                        s.id,
                      ),
                    }),
                  }),
                ],
              }),
            }),
          }),
          e.jsx(u, {}),
        ],
      }),
      e.jsx(v, { year: r }),
      e.jsx(h, {}),
    ],
  });
}
export { P as component };
