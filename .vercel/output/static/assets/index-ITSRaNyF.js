import { j as e, L as c, d as r, c as w } from "./index-0qK1wPb4.js";
import {
  W as y,
  b as A,
  B as C,
  S as k,
  G as R,
  T as I,
  N as D,
  C as E,
  F as z,
  a as B,
} from "./Contact-XmhCTeU7.js";
import { B as S, c as n } from "./button-CmpoKRFv.js";
import { m as s } from "./proxy-CNoJBy2S.js";
import { C as T } from "./chevron-right-CT9zOBCR.js";
import { A as p } from "./arrow-up-right-D6EW5tBq.js";
import "./createLucideIcon-_P2Vc871.js";
import "./input-BJpobJm8.js";
import "./map-pin-RWc1RILk.js";
const _ = "/assets/hero_classic_law-BFXlNo3Y.png";
function P() {
  return e.jsxs("section", {
    id: "home",
    className: "relative isolate flex min-h-screen items-center overflow-hidden",
    children: [
      e.jsx(s.img, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1.5, ease: "easeOut" },
        src: _,
        alt: "Interior clássico de escritório de advocacia",
        className: "absolute inset-0 -z-20 h-full w-full object-cover",
      }),
      e.jsx("div", {
        className:
          "absolute inset-0 -z-10 bg-gradient-to-r from-velvet via-velvet/80 to-transparent md:from-velvet md:via-velvet/40",
      }),
      e.jsx("div", { className: "absolute inset-0 -z-10 bg-black/20" }),
      e.jsx("div", {
        className: "mx-auto w-full max-w-7xl px-6 py-32",
        children: e.jsxs("div", {
          className: "max-w-3xl",
          children: [
            e.jsxs(s.div, {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.8, delay: 0.2 },
              className: "flex items-center gap-4 mb-8",
              children: [
                e.jsx("div", { className: "h-px w-12 bg-gold" }),
                e.jsx("span", {
                  className:
                    "text-[10px] md:text-xs uppercase tracking-[0.2em] text-gold font-medium",
                  children: "Excelência Jurídica",
                }),
              ],
            }),
            e.jsxs(s.h1, {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 1, delay: 0.4 },
              className:
                "font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white font-medium tracking-tight",
              children: [
                "Estratégia e segurança ",
                e.jsx("br", {}),
                "para o seu ",
                e.jsx("span", { className: "italic text-gold/90", children: "patrimônio" }),
                ".",
              ],
            }),
            e.jsx(s.p, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 1, delay: 0.6 },
              className: "mt-8 max-w-xl text-lg md:text-xl text-white/80 leading-relaxed",
              children:
                "Assessoria jurídica sob medida para pessoas físicas e empresas que exigem sofisticação e segurança.",
            }),
            e.jsxs(s.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.8 },
              className: "mt-12 flex flex-col items-center sm:flex-row gap-6",
              children: [
                e.jsx(S, {
                  asChild: !0,
                  variant: "hero",
                  className: "h-12 px-8 text-xs group",
                  children: e.jsxs("a", {
                    href: "#contato",
                    className: "flex items-center gap-3",
                    children: ["Saiba mais", e.jsx(T, { className: "h-4 w-4" })],
                  }),
                }),
                e.jsxs(c, {
                  to: "/areas-de-atuacao",
                  className:
                    "group flex items-center gap-3 text-white/80 hover:text-white transition-all text-[11px] uppercase tracking-[0.2em] font-medium",
                  children: [
                    "VER ÁREAS DE ATUAÇÃO",
                    e.jsx("div", {
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
      e.jsx("div", {
        className: "absolute right-12 bottom-0 hidden lg:block",
        children: e.jsx(s.div, {
          initial: { height: 0 },
          animate: { height: "30vh" },
          transition: { duration: 1.5, delay: 1 },
          className: "w-px bg-gradient-to-b from-transparent via-gold/40 to-gold",
        }),
      }),
      e.jsx(s.div, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1, delay: 1.5 },
        className: "absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block",
        children: e.jsxs("div", {
          className: "flex flex-col items-center gap-4",
          children: [
            e.jsx("span", {
              className: "text-[10px] uppercase tracking-[0.2em] text-white/60",
              children: "Descer",
            }),
            e.jsx("div", {
              className: "h-10 w-px bg-gold/30 relative overflow-hidden",
              children: e.jsx(s.div, {
                animate: { y: ["-100%", "100%"] },
                transition: { duration: 2, repeat: 1 / 0, ease: "linear" },
                className: "absolute top-0 left-0 w-full h-full bg-gold",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const O = "/assets/portrait-ayrton-DnJHmFlk.jpg";
function V() {
  return e.jsx("section", {
    id: "sobre",
    className: "relative overflow-hidden bg-cream py-28 md:py-40 scroll-mt-28",
    children: e.jsxs("div", {
      className: "mx-auto max-w-7xl px-6",
      children: [
        e.jsxs(s.div, {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0, margin: "-100px" },
          transition: { duration: 1 },
          className: "mx-auto max-w-3xl text-center",
          children: [
            e.jsx("p", {
              className: "text-[10px] uppercase tracking-widest text-gold",
              children: "— O Escritório —",
            }),
            e.jsxs("h2", {
              className:
                "mt-6 font-serif text-4xl font-medium leading-[1.1] text-velvet md:text-6xl",
              children: [
                "Advocacia ",
                e.jsx("span", { className: "text-gold", children: "sob medida" }),
                " para",
                " ",
                e.jsx("span", { className: "text-gold", children: "decisões complexas" }),
                ".",
              ],
            }),
            e.jsx("div", { className: "mx-auto mt-8 h-px w-24 bg-gold/50" }),
          ],
        }),
        e.jsxs("div", {
          className: "mt-20 grid items-center gap-16 md:grid-cols-12 md:gap-20",
          children: [
            e.jsx(s.div, {
              initial: { opacity: 0, x: -50 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: !0 },
              transition: { duration: 1.2, delay: 0.2 },
              className: "md:col-span-5",
              children: e.jsxs("div", {
                className: "relative",
                children: [
                  e.jsx("div", {
                    className: "absolute -left-4 -top-4 h-full w-full border border-gold/60",
                  }),
                  e.jsx("img", {
                    src: O,
                    alt: "Ayrton Pedrosa, advogado especialista",
                    width: 896,
                    height: 1152,
                    loading: "lazy",
                    className: "relative aspect-[4/5] w-full object-cover object-top shadow-lg",
                  }),
                  e.jsxs("div", {
                    className:
                      "absolute bottom-0 left-0 right-0 bg-white p-8 border-t border-gold/20",
                    children: [
                      e.jsx("p", {
                        className: "font-serif text-2xl font-medium text-velvet",
                        children: "Dr. Ayrton Pedrosa",
                      }),
                      e.jsx("p", {
                        className:
                          "mt-2 text-[10px] font-medium uppercase tracking-widest text-gold",
                        children: "Advogado · OAB/PE 35.952",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsxs(s.div, {
              initial: { opacity: 0, x: 50 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: !0 },
              transition: { duration: 1.2, delay: 0.4 },
              className: "md:col-span-7",
              children: [
                e.jsx("h3", {
                  className:
                    "font-serif text-2xl font-medium text-velvet md:text-4xl leading-tight",
                  children: "Atuação Estratégica e Exclusiva.",
                }),
                e.jsx("p", {
                  className: "mt-8 text-base leading-[2] text-velvet/80 md:text-xl font-light",
                  children:
                    "O escritório Ayrton Pedrosa Advocacia fundamenta sua prática no rigor técnico e na discrição absoluta. Nossa missão é prover segurança jurídica por meio da antecipação de riscos, consolidando estratégias robustas que protegem o patrimônio e viabilizam os negócios de nossos clientes.",
                }),
                e.jsx("p", {
                  className: "mt-6 text-base leading-[2] text-velvet/70 md:text-lg",
                  children:
                    "Em um cenário corporativo dinâmico, entregamos uma advocacia consultiva e contenciosa de alta performance. Tratamos cada caso com profunda dedicação institucional, garantindo a agilidade e o direcionamento preciso que a complexidade do mercado moderno exige.",
                }),
                e.jsxs("div", {
                  className: "mt-16 flex flex-col gap-8 sm:flex-row sm:items-center",
                  children: [
                    e.jsx("div", { className: "h-px flex-1 bg-gold/20" }),
                    e.jsxs("div", {
                      className: "flex flex-col",
                      children: [
                        e.jsx("span", {
                          className: "font-serif text-xl italic text-gold",
                          children: "Ayrton Pedrosa",
                        }),
                        e.jsx("span", {
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
const F = [
  {
    number: "01",
    title: "Agrário & Agronegócio",
    description:
      "Regularização de propriedades rurais (análise de CCIR, CAR, georreferenciamento e processos de desmembramento). Contratos Agrícolas. Direito de Posse. Cooperativas Agrícolas.",
    icons: [y],
  },
  {
    number: "02",
    title: "Direito Ambiental",
    description:
      "Consultoria preventiva e defesa contenciosa especializada. Atuamos ativamente na gestão de passivos ambientais, desembaraço de licenciamentos e resposta a autuações, protegendo a operação do seu negócio.",
    icons: [A],
  },
  {
    number: "03",
    title: "Direito Imobiliário",
    description:
      "Proteção jurídica para negócios imobiliários: Due diligence. Regularização de imóveis urbanos. Usucapição judicial e Extrajudicial. Análise de riscos para aquisição de e locação de imóveis. Atuação judicial em demandas imobiliárias. Gestão em contratos de locação. Assessoria para Imobiliárias e Administradoras de Imóveis. Assessoria em Contratos Build to Suit",
    icons: [C],
  },
  {
    number: "04",
    title: "Sucessões & Inventários",
    description:
      "Proteção do legado familiar e eficiência fiscal. Gestão estratégica de inventários e planejamento sucessório focado na mitigação dos impactos do ITCMD, assegurando a transição pacífica e rentável dos bens.",
    icons: [k],
  },
  {
    number: "05",
    title: "Defesa Patrimonial e Contencioso",
    description:
      "Proteção ativa do seu patrimônio contra execuções fiscais e abusos do sistema financeiro. Atuamos com contestações bancárias robustas e embargos à execução, garantindo a continuidade do seu negócio.",
    icons: [R],
  },
];
function H() {
  return e.jsx("section", {
    id: "areas",
    className: "relative bg-white py-28 md:py-40 scroll-mt-28",
    children: e.jsxs("div", {
      className: "mx-auto max-w-7xl px-6",
      children: [
        e.jsxs(s.div, {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 1 },
          className: "grid gap-12 md:grid-cols-12 md:items-end",
          children: [
            e.jsxs("div", {
              className: "md:col-span-7",
              children: [
                e.jsx("p", {
                  className: "text-[10px] uppercase tracking-widest text-gold",
                  children: "— Áreas de Atuação —",
                }),
                e.jsxs("h2", {
                  className:
                    "mt-6 font-serif text-4xl font-medium leading-[1.05] text-velvet md:text-6xl",
                  children: [
                    "Soluções jurídicas ",
                    e.jsx("span", {
                      className: "text-gold",
                      children: "integradas e estratégicas",
                    }),
                    ".",
                  ],
                }),
              ],
            }),
            e.jsx("p", {
              className: "text-base leading-relaxed text-velvet/70 md:col-span-5 md:text-lg",
              children:
                "Compreendemos a complexidade do seu negócio. Oferecemos suporte legal completo para proteger seu patrimônio e viabilizar resultados.",
            }),
          ],
        }),
        e.jsxs("div", {
          suppressHydrationWarning: !0,
          className:
            "mt-20 grid gap-px bg-gold/10 md:grid-cols-2 lg:grid-cols-3 border border-gold/10",
          children: [
            F.map((a, i) => {
              const t = a.icons[0];
              return e.jsx(
                c,
                {
                  to: "/areas-de-atuacao",
                  className:
                    "group relative flex flex-col bg-white p-10 transition-all duration-500 hover:bg-cream",
                  children: e.jsxs(s.div, {
                    initial: { opacity: 0, y: 40 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.8, delay: i * 0.1 },
                    children: [
                      e.jsxs("div", {
                        className: "flex items-start justify-between",
                        children: [
                          e.jsx("span", {
                            className: "font-serif text-sm text-gold/30",
                            children: a.number,
                          }),
                          e.jsx("div", {
                            className:
                              "flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-velvet group-hover:scale-110 group-hover:border-gold group-hover:shadow-lg group-hover:shadow-gold/20",
                            children: t && e.jsx(t, { className: "h-5 w-5", strokeWidth: 1.5 }),
                          }),
                        ],
                      }),
                      e.jsx("h3", {
                        className:
                          "mt-10 font-serif text-2xl font-medium leading-tight text-velvet md:text-3xl",
                        children: a.title,
                      }),
                      e.jsx("p", {
                        className: "mt-4 text-sm leading-relaxed text-velvet/60",
                        children: a.description,
                      }),
                      e.jsxs("div", {
                        className:
                          "mt-10 flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold transition-all duration-500",
                        children: ["Saiba mais ", e.jsx(p, { className: "h-3.5 w-3.5" })],
                      }),
                    ],
                  }),
                },
                a.number,
              );
            }),
            e.jsx(c, {
              to: "/",
              hash: "contato",
              className:
                "group relative flex flex-col justify-between bg-velvet p-10 text-white shadow-2xl transition-all duration-500 hover:brightness-110",
              children: e.jsxs(s.div, {
                initial: { opacity: 0, scale: 0.95 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: !0 },
                transition: { duration: 1 },
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-[10px] uppercase tracking-widest text-gold/80",
                        children: "— Consultoria —",
                      }),
                      e.jsxs("h3", {
                        className:
                          "mt-8 font-serif text-2xl font-medium leading-tight md:text-3xl text-white",
                        children: [
                          "Cada caso merece uma ",
                          e.jsx("span", { className: "text-gold", children: "solução" }),
                          " única.",
                        ],
                      }),
                      e.jsx("p", {
                        className: "mt-6 text-sm leading-relaxed text-white/70",
                        children:
                          "Agende uma análise de viabilidade e descubra o plano de ação exato para a proteção dos seus ativos.",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "mt-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-gold group-hover:text-white transition-all",
                    children: ["Fale com o escritório ", e.jsx(p, { className: "h-4 w-4" })],
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
const g = r.forwardRef(({ className: a, ...i }, t) =>
  e.jsx("div", {
    ref: t,
    className: n("rounded-xl border bg-card text-card-foreground shadow", a),
    ...i,
  }),
);
g.displayName = "Card";
const u = r.forwardRef(({ className: a, ...i }, t) =>
  e.jsx("div", { ref: t, className: n("flex flex-col space-y-1.5 p-6", a), ...i }),
);
u.displayName = "CardHeader";
const h = r.forwardRef(({ className: a, ...i }, t) =>
  e.jsx("div", { ref: t, className: n("font-semibold leading-none tracking-tight", a), ...i }),
);
h.displayName = "CardTitle";
const v = r.forwardRef(({ className: a, ...i }, t) =>
  e.jsx("div", { ref: t, className: n("text-sm text-muted-foreground", a), ...i }),
);
v.displayName = "CardDescription";
const f = r.forwardRef(({ className: a, ...i }, t) =>
  e.jsx("div", { ref: t, className: n("p-6 pt-0", a), ...i }),
);
f.displayName = "CardContent";
const L = r.forwardRef(({ className: a, ...i }, t) =>
  e.jsx("div", { ref: t, className: n("flex items-center p-6 pt-0", a), ...i }),
);
L.displayName = "CardFooter";
function U() {
  const [a, i] = r.useState([]),
    [t, j] = r.useState(!0);
  return (
    r.useEffect(() => {
      (async () => {
        try {
          const m = await (
            await fetch(
              `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent("https://news.google.com/rss/search?q=economia+OR+direito+OR+agronegócio+Brasil&hl=pt-BR&gl=BR&ceid=BR:pt-419")}`,
            )
          ).json();
          if (m.status === "ok") {
            const b = m.items.slice(0, 3).map((x) => {
              const d = x.title.split(" - "),
                N = d.length > 1 ? d.pop() : "";
              return { ...x, title: d.join(" - "), source: N };
            });
            i(b);
          }
        } catch (l) {
          console.error("Error fetching news", l);
        } finally {
          j(!1);
        }
      })();
    }, []),
    e.jsx("section", {
      id: "blog",
      className: "relative bg-cream py-28 md:py-32 scroll-mt-28",
      children: e.jsxs("div", {
        className: "mx-auto max-w-7xl px-6",
        children: [
          e.jsxs(s.div, {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 1 },
            className: "text-center mb-16",
            children: [
              e.jsx("p", {
                className: "text-[10px] uppercase tracking-widest text-gold",
                children: "— Notícias —",
              }),
              e.jsxs("h2", {
                className:
                  "mt-6 font-serif text-4xl font-medium leading-[1.1] text-velvet md:text-5xl",
                children: [
                  "Atualizações em ",
                  e.jsx("span", { className: "text-gold", children: "Tempo Real" }),
                  ".",
                ],
              }),
              e.jsx("div", { className: "mx-auto mt-8 h-px w-32 gold-divider" }),
              e.jsx("p", {
                className:
                  "mt-8 text-base leading-relaxed text-velvet/60 md:text-lg max-w-2xl mx-auto",
                children: "Acompanhe as últimas notícias de economia, direito e agronegócio.",
              }),
            ],
          }),
          t
            ? e.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                children: [1, 2, 3].map((o) =>
                  e.jsxs(
                    "div",
                    {
                      className:
                        "h-[420px] rounded-none bg-velvet/5 animate-pulse border border-gold/5 flex flex-col justify-end p-10",
                      children: [
                        e.jsx("div", { className: "h-4 w-24 bg-gold/10 mb-4" }),
                        e.jsx("div", { className: "h-8 w-full bg-gold/10 mb-2" }),
                        e.jsx("div", { className: "h-8 w-2/3 bg-gold/10" }),
                      ],
                    },
                    o,
                  ),
                ),
              })
            : e.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                children: a.map((o, l) =>
                  e.jsx(
                    s.a,
                    {
                      href: o.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      initial: { opacity: 0, y: 30 },
                      whileInView: { opacity: 1, y: 0 },
                      whileHover: { y: -10 },
                      viewport: { once: !0 },
                      transition: { duration: 0.8, delay: l * 0.15 },
                      className: "group block h-full",
                      children: e.jsxs(g, {
                        className:
                          "h-full relative border-none shadow-xl hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col overflow-hidden min-h-[420px]",
                        children: [
                          e.jsxs("div", {
                            className: "absolute inset-0 z-0",
                            children: [
                              e.jsx("img", {
                                src: `/images/news_cover_${(l % 3) + 1}.png`,
                                alt: "",
                                loading: "lazy",
                                className:
                                  "w-full h-full object-cover opacity-80 blur-[0.5px] saturate-[0.8] group-hover:scale-110 group-hover:blur-0 group-hover:saturate-100 group-hover:opacity-100 transition-all duration-700",
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute inset-0 bg-gradient-to-t from-velvet via-velvet/40 to-transparent transition-opacity group-hover:opacity-100 duration-500",
                              }),
                            ],
                          }),
                          e.jsxs(u, {
                            className: "relative z-10 flex-1 justify-end pt-20",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-[10px] text-gold uppercase tracking-[0.2em] font-bold bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10",
                                    children: new Date(o.pubDate).toLocaleDateString("pt-BR"),
                                  }),
                                  o.source &&
                                    e.jsx("div", {
                                      className:
                                        "text-[10px] text-white/60 uppercase tracking-wider font-bold drop-shadow-sm",
                                      children: o.source,
                                    }),
                                ],
                              }),
                              e.jsx(h, {
                                className:
                                  "font-serif text-2xl text-white group-hover:text-gold transition-colors line-clamp-3 leading-tight mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
                                children: o.title,
                              }),
                            ],
                          }),
                          e.jsxs(f, {
                            className: "relative z-10 pb-10 pt-0",
                            children: [
                              e.jsx(v, {
                                className:
                                  "line-clamp-3 text-white/80 text-xs font-medium leading-relaxed mb-6 drop-shadow-sm",
                                children: o.description.replace(/<[^>]+>/g, ""),
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-widest group-hover:gap-4 transition-all",
                                children: [
                                  "Ler notícia completa",
                                  e.jsx("span", { className: "h-px w-8 bg-gold" }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    l,
                  ),
                ),
              }),
        ],
      }),
    })
  );
}
const q = ({ ...a }) =>
  e.jsx(I, {
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
    ...a,
  });
function ee() {
  const { year: a } = w.useLoaderData();
  return e.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [
      e.jsx(D, {}),
      e.jsxs("main", {
        children: [e.jsx(P, {}), e.jsx(V, {}), e.jsx(H, {}), e.jsx(U, {}), e.jsx(E, {})],
      }),
      e.jsx(z, { year: a }),
      e.jsx(B, {}),
      e.jsx(q, { richColors: !0, position: "top-right", theme: "dark" }),
    ],
  });
}
export { ee as component };
