import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import {
  c as Root2,
  T as Trigger,
  P as Portal2,
  a as Content2,
  I as Item2,
  e as SubTrigger2,
  d as SubContent2,
  C as CheckboxItem2,
  b as ItemIndicator2,
  R as RadioItem2,
  L as Label2,
  S as Separator2,
} from "../_libs/radix-ui__react-dropdown-menu.mjs";
import { B as Button, c as cn } from "./button-CfdaOMCp.mjs";
import { I as Input } from "./input-D1rXzXN0.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import {
  e as ChevronDown,
  g as ChevronRight,
  X,
  t as Menu,
  u as Phone,
  M as Mail,
  s as MapPin,
  I as Instagram,
  j as CircleCheck,
  p as LoaderCircle,
  x as Send,
  a as ArrowUp,
  d as Check,
  h as Circle,
} from "../_libs/lucide-react.mjs";
const DropdownMenu = Root2;
const DropdownMenuTrigger = Trigger;
const DropdownMenuSubTrigger = reactExports.forwardRef(
  ({ className, inset, children, ...props }, ref) =>
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SubTrigger2, {
      ref,
      className: cn(
        "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        inset && "pl-8",
        className,
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-auto" }),
      ],
    }),
);
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
const DropdownMenuSubContent = reactExports.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsxRuntimeExports.jsx(SubContent2, {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className,
    ),
    ...props,
  }),
);
DropdownMenuSubContent.displayName = SubContent2.displayName;
const DropdownMenuContent = reactExports.forwardRef(
  ({ className, sideOffset = 4, ...props }, ref) =>
    /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Content2, {
        ref,
        sideOffset,
        className: cn(
          "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
          className,
        ),
        ...props,
      }),
    }),
);
DropdownMenuContent.displayName = Content2.displayName;
const DropdownMenuItem = reactExports.forwardRef(({ className, inset, ...props }, ref) =>
  /* @__PURE__ */ jsxRuntimeExports.jsx(Item2, {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className,
    ),
    ...props,
  }),
);
DropdownMenuItem.displayName = Item2.displayName;
const DropdownMenuCheckboxItem = reactExports.forwardRef(
  ({ className, children, checked, ...props }, ref) =>
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CheckboxItem2, {
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, {
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }),
          }),
        }),
        children,
      ],
    }),
);
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
const DropdownMenuRadioItem = reactExports.forwardRef(({ className, children, ...props }, ref) =>
  /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioItem2, {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, {
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, {
            className: "h-2 w-2 fill-current",
          }),
        }),
      }),
      children,
    ],
  }),
);
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
const DropdownMenuLabel = reactExports.forwardRef(({ className, inset, ...props }, ref) =>
  /* @__PURE__ */ jsxRuntimeExports.jsx(Label2, {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props,
  }),
);
DropdownMenuLabel.displayName = Label2.displayName;
const DropdownMenuSeparator = reactExports.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator2, {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props,
  }),
);
DropdownMenuSeparator.displayName = Separator2.displayName;
function Navbar() {
  const [isScrolled, setIsScrolled] = reactExports.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { name: "Início", to: "/" },
    { name: "O Escritório", to: "/", hash: "sobre" },
    { name: "Áreas de Atuação", to: "/areas-de-atuacao" },
    { name: "Notícias", to: "/", hash: "blog" },
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.nav, {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, ease: "easeOut" },
    className: `fixed z-50 w-full transition-all duration-500 ${isScrolled || isMobileMenuOpen ? "top-0 bg-velvet/60 backdrop-blur-lg py-3 shadow-xl" : "top-0 bg-transparent py-5"}`,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "mx-auto flex max-w-7xl items-center justify-between px-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
            to: "/",
            className: "flex group items-center",
            onClick: () => setIsMobileMenuOpen(false),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", {
              width: "400",
              height: "80",
              viewBox: "0 0 600 120",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-14 md:h-16 w-auto",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("g", {
                  transform: "translate(30, 30)",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("line", {
                      x1: "0",
                      y1: "60",
                      x2: "25",
                      y2: "0",
                      stroke: "white",
                      strokeWidth: "2.5",
                      className: "group-hover:stroke-gold transition-colors",
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("line", {
                      x1: "25",
                      y1: "0",
                      x2: "25",
                      y2: "60",
                      stroke: "white",
                      strokeWidth: "2.5",
                      className: "group-hover:stroke-gold transition-colors",
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("line", {
                      x1: "12.5",
                      y1: "30",
                      x2: "25",
                      y2: "30",
                      stroke: "white",
                      strokeWidth: "2.5",
                      className: "group-hover:stroke-gold transition-colors",
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
                      d: "M25 0H50V30H25",
                      stroke: "white",
                      strokeWidth: "2.5",
                      fill: "none",
                      className: "group-hover:stroke-gold transition-colors",
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("text", {
                  x: "110",
                  y: "65",
                  fill: "white",
                  style: {
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "28px",
                    fontWeight: 300,
                    letterSpacing: "0.25em",
                  },
                  className: "group-hover:fill-gold transition-colors",
                  children: "AYRTON PEDROSA",
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("text", {
                  x: "210",
                  y: "95",
                  fill: "white",
                  style: {
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 300,
                    letterSpacing: "0.8em",
                    opacity: 0.8,
                  },
                  className: "group-hover:fill-gold transition-colors",
                  children: "ADVOCACIA",
                }),
              ],
            }),
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "hidden items-center gap-10 md:flex",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className: "flex gap-10",
                children: navLinks.map((link) =>
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: link.to,
                      hash: link.hash,
                      className:
                        "group relative text-[13px] font-bold uppercase tracking-[0.15em] text-white/80 transition-colors hover:text-gold",
                      children: [
                        link.name,
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                          className:
                            "absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full",
                        }),
                      ],
                    },
                    link.name,
                  ),
                ),
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, {
                modal: false,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuTrigger, {
                    className:
                      "group flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.15em] text-white outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-velvet rounded-sm px-2 py-1 -mx-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
                        className: "relative pb-1",
                        children: [
                          "FALE CONOSCO",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, {
                            className: "absolute bottom-0 left-0 h-0.5 bg-gold",
                            initial: { width: "100%" },
                            whileHover: { width: "120%", left: "-10%" },
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, {
                        className:
                          "h-3 w-3 text-gold transition-transform duration-500 group-data-[state=open]:rotate-180",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, {
                    align: "end",
                    sideOffset: 20,
                    className:
                      "w-64 rounded-2xl border-white/10 bg-white/95 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-300",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, {
                        className:
                          "rounded-xl cursor-pointer px-4 py-4 font-serif text-lg text-velvet focus:bg-velvet focus:text-gold transition-all duration-300 group",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, {
                          to: "/",
                          hash: "contato",
                          className: "flex w-full items-center justify-between",
                          children: [
                            "Agendar Reunião",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, {
                              className:
                                "h-4 w-4 opacity-0 -translate-x-2 group-focus:opacity-100 group-focus:translate-x-0 transition-all",
                            }),
                          ],
                        }),
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, {
                        className:
                          "rounded-xl cursor-pointer px-4 py-4 font-serif text-lg text-velvet focus:bg-velvet focus:text-gold transition-all duration-300 group",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, {
                          to: "/",
                          hash: "contato",
                          className: "flex w-full items-center justify-between",
                          children: [
                            "Contato",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, {
                              className:
                                "h-4 w-4 opacity-0 -translate-x-2 group-focus:opacity-100 group-focus:translate-x-0 transition-all",
                            }),
                          ],
                        }),
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                        className: "my-2 h-px bg-gold/10",
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, {
                        className:
                          "rounded-xl cursor-pointer px-4 py-4 font-serif text-lg text-velvet focus:bg-velvet focus:text-gold transition-all duration-300 group",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
                          href: "mailto:rh@ayrtonpedrosa.com",
                          className: "flex w-full items-center justify-between",
                          children: [
                            "Trabalhe Conosco",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, {
                              className:
                                "h-4 w-4 opacity-0 -translate-x-2 group-focus:opacity-100 group-focus:translate-x-0 transition-all",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
            className: "text-white md:hidden",
            onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
            children: isMobileMenuOpen
              ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {})
              : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {}),
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, {
        children:
          isMobileMenuOpen &&
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.3, ease: "easeInOut" },
            className: "border-t border-white/10 bg-velvet md:hidden shadow-2xl overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "mx-auto max-w-7xl px-6 py-10 flex flex-col gap-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                  className: "flex flex-col gap-4",
                  children: navLinks.map((link) =>
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: link.to,
                        hash: link.hash,
                        className:
                          "flex items-center justify-between border-b border-white/5 pb-5 text-[14px] font-bold uppercase tracking-[0.2em] text-white/90 active:text-gold transition-colors",
                        onClick: () => setIsMobileMenuOpen(false),
                        children: [
                          link.name,
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, {
                            className: "h-4 w-4 text-gold/50",
                          }),
                        ],
                      },
                      link.name,
                    ),
                  ),
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  className: "mt-4 pt-8 border-t border-white/10 space-y-6",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                      className:
                        "text-[10px] uppercase tracking-[0.3em] text-gold font-bold opacity-70",
                      children: "Fale Conosco",
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                      className: "grid gap-6",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
                          to: "/",
                          hash: "contato",
                          className: "text-white font-serif text-xl",
                          onClick: () => setIsMobileMenuOpen(false),
                          children: "Agendar Reunião",
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
                          to: "/",
                          hash: "contato",
                          className: "text-white font-serif text-xl",
                          onClick: () => setIsMobileMenuOpen(false),
                          children: "Contato",
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                          href: "mailto:rh@ayrtonpedrosa.com",
                          className: "text-white font-serif text-xl",
                          onClick: () => setIsMobileMenuOpen(false),
                          children: "Trabalhe Conosco",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      }),
    ],
  });
}
const footerBg = "/assets/footer_classic_law--6_7cUMD.png";
function Footer({ year }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", {
    className: "relative border-t border-white/5 bg-stone-950 overflow-hidden",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
        src: footerBg,
        alt: "Legal Background",
        loading: "lazy",
        className: "absolute inset-0 w-full h-full object-cover opacity-60",
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "absolute inset-0 bg-gradient-to-b from-velvet/80 via-velvet/95 to-velvet",
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 1 },
        className: "relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "md:col-span-5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className: "flex group items-center -ml-4",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", {
                  width: "400",
                  height: "120",
                  viewBox: "0 0 600 120",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-24 w-auto",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", {
                      transform: "translate(30, 30)",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("line", {
                          x1: "0",
                          y1: "60",
                          x2: "25",
                          y2: "0",
                          stroke: "white",
                          strokeWidth: "2.5",
                          className: "group-hover:stroke-gold transition-colors",
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("line", {
                          x1: "25",
                          y1: "0",
                          x2: "25",
                          y2: "60",
                          stroke: "white",
                          strokeWidth: "2.5",
                          className: "group-hover:stroke-gold transition-colors",
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("line", {
                          x1: "12.5",
                          y1: "30",
                          x2: "25",
                          y2: "30",
                          stroke: "white",
                          strokeWidth: "2.5",
                          className: "group-hover:stroke-gold transition-colors",
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
                          d: "M25 0H50V30H25",
                          stroke: "white",
                          strokeWidth: "2.5",
                          fill: "none",
                          className: "group-hover:stroke-gold transition-colors",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("text", {
                      x: "110",
                      y: "65",
                      fill: "white",
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "28px",
                        fontWeight: 300,
                        letterSpacing: "0.25em",
                      },
                      className: "group-hover:fill-gold transition-colors",
                      children: "AYRTON PEDROSA",
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("text", {
                      x: "210",
                      y: "95",
                      fill: "white",
                      style: {
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "12px",
                        fontWeight: 300,
                        letterSpacing: "0.8em",
                        opacity: 0.8,
                      },
                      className: "group-hover:fill-gold transition-colors",
                      children: "ADVOCACIA",
                    }),
                  ],
                }),
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "mt-8 max-w-sm text-base leading-relaxed text-white/60 font-light",
                children:
                  "Estratégia jurídica especializada para empresas e pessoas que buscam segurança, inovação e resultados.",
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "md:col-span-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", {
                className: "text-[10px] uppercase tracking-widest text-gold font-medium mb-8",
                children: "Contato Direto",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.ul, {
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true },
                variants: {
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                },
                className: "space-y-6 text-sm text-white/80",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.li, {
                    variants: {
                      hidden: { opacity: 0, x: -10 },
                      show: { opacity: 1, x: 0 },
                    },
                    className: "flex items-center gap-4 group cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                        className:
                          "flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gold transition-colors group-hover:bg-gold group-hover:text-velvet",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, {
                          className: "h-4 w-4",
                        }),
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                        className:
                          "group-hover:text-white transition-colors text-base font-sans break-words leading-tight",
                        children: "contato@ayrtonpedrosa.com",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.li, {
                    variants: {
                      hidden: { opacity: 0, x: -10 },
                      show: { opacity: 1, x: 0 },
                    },
                    className: "flex items-center gap-4 group cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                        className:
                          "flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gold transition-colors group-hover:bg-gold group-hover:text-velvet",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, {
                          className: "h-4 w-4",
                        }),
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
                        href: "https://wa.me/5581997586830",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "group-hover:text-white transition-colors text-base font-sans",
                        children: "+55 (81) 99758-6830",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "md:col-span-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", {
                className: "text-[10px] uppercase tracking-widest text-gold font-medium mb-8",
                children: "Presença Digital",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
                href: "https://www.instagram.com/ayrtonpedrosa.adv",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "group flex items-center gap-4 p-4 -m-4 rounded-xl hover:bg-white/5 transition-all",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                    className:
                      "flex h-12 w-12 items-center justify-center border border-gold/40 text-gold rounded-lg transition-all group-hover:bg-gold group-hover:text-velvet group-hover:shadow-lg group-hover:shadow-gold/20",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, {
                      className: "h-5 w-5",
                    }),
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                        className: "text-[10px] uppercase tracking-widest text-white/40",
                        children: "Instagram",
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                        className:
                          "text-lg font-sans text-white group-hover:text-gold transition-colors",
                        children: "@ayrtonpedrosa.adv",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "relative border-t border-white/5",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className:
            "mx-auto max-w-7xl px-6 py-8 text-center text-[10px] uppercase tracking-widest text-white/30",
          children: [
            "Ayrton Pedrosa Advocacia · OAB/PE 35.952 · ",
            year,
            " · Todos os Direitos Reservados",
          ],
        }),
      }),
    ],
  });
}
function ScrollToTop() {
  const [isVisible, setIsVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, {
    children:
      isVisible &&
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, {
        initial: { opacity: 0, y: 20, scale: 0.8 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 20, scale: 0.8 },
        transition: { duration: 0.3 },
        onClick: scrollToTop,
        className:
          "fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-velvet/80 backdrop-blur-sm text-gold border border-gold/20 shadow-2xl hover:bg-gold hover:text-velvet transition-all duration-300",
        "aria-label": "Voltar ao topo",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, {
          className: "h-4 w-4",
          strokeWidth: 1.5,
        }),
      }),
  });
}
const Textarea = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", {
    className: cn(
      "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      className,
    ),
    ref,
    ...props,
  });
});
Textarea.displayName = "Textarea";
function Contact() {
  const [loading, setLoading] = reactExports.useState(false);
  const [success, setSuccess] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1800));
      setSuccess(true);
      toast.success("Mensagem enviada! Sua solicitação foi registrada em nosso CRM.");
    } catch (error) {
      toast.error("Erro ao enviar. Por favor, tente pelo WhatsApp.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", {
    id: "contato",
    className: "relative bg-white py-28 md:py-40 overflow-hidden scroll-mt-28",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "mx-auto max-w-7xl px-6",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "grid gap-16 lg:grid-cols-2 lg:gap-24",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 1 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "text-[10px] uppercase tracking-widest text-gold",
                children: "— Contato —",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", {
                className:
                  "mt-6 font-serif text-4xl font-medium leading-[1.1] text-velvet md:text-6xl",
                children: [
                  "Pronto para ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                    className: "text-gold",
                    children: "proteger",
                  }),
                  " o seu legado?",
                ],
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "mt-8 text-lg leading-relaxed text-velvet/70 max-w-lg",
                children:
                  "Agende uma consulta especializada. Nossa equipe está pronta para oferecer a segurança jurídica que seus negócios exigem.",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "mt-12 space-y-10",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, {
                    icon: Phone,
                    title: "WhatsApp e Telefone",
                    content: "+55 (81) 99758-6830",
                    link: "https://wa.me/5581997586830",
                    delay: 0.2,
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, {
                    icon: Mail,
                    title: "E-mail Institucional",
                    content: "contato@ayrtonpedrosa.com",
                    link: "mailto:contato@ayrtonpedrosa.com",
                    delay: 0.3,
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, {
                    icon: MapPin,
                    title: "Sede do Escritório",
                    content: "Recife/PE · Atendimento Nacional",
                    delay: 0.4,
                  }),
                ],
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                transition: { delay: 0.8 },
                className: "mt-16 pt-10 border-t border-stone-100",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
                  href: "https://www.instagram.com/ayrtonpedrosa.adv",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "group flex items-center gap-6",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                      className:
                        "flex h-14 w-14 items-center justify-center border border-stone-200 text-stone-400 transition-all group-hover:border-gold group-hover:text-gold group-hover:bg-gold/5",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, {
                        className: "h-6 w-6",
                      }),
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                          className: "text-[10px] uppercase tracking-[0.2em] text-stone-400",
                          children: "Siga no Instagram",
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                          className:
                            "font-sans text-xl text-velvet group-hover:text-gold transition-colors",
                          children: "@ayrtonpedrosa.adv",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, {
            initial: { opacity: 0, x: 30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 1, delay: 0.2 },
            className: "relative",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, {
              mode: "wait",
              children: success
                ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, scale: 0.9 },
                      animate: { opacity: 1, scale: 1 },
                      exit: { opacity: 0, scale: 0.9 },
                      className:
                        "flex h-full flex-col items-center justify-center rounded-2xl bg-cream p-12 text-center shadow-inner",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                          className:
                            "flex h-20 w-20 items-center justify-center rounded-full bg-gold/10 text-gold mb-6",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, {
                            className: "h-10 w-10",
                          }),
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
                          className: "font-serif text-3xl font-medium text-velvet",
                          children: "Solicitação Enviada",
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                          className: "mt-4 text-velvet/60",
                          children:
                            "Sua mensagem foi registrada em nosso sistema. Um consultor entrará em contato em breve.",
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
                          variant: "ghost",
                          onClick: () => setSuccess(false),
                          className: "mt-8 text-gold hover:text-velvet hover:bg-gold/5",
                          children: "Enviar nova mensagem",
                        }),
                      ],
                    },
                    "success",
                  )
                : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.form,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -10 },
                      onSubmit: handleSubmit,
                      className:
                        "space-y-6 rounded-2xl bg-cream p-8 md:p-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.2)] border border-stone-200/50",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                          className: "grid gap-6 md:grid-cols-2",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("label", {
                                  className:
                                    "text-[10px] uppercase tracking-widest text-gold font-bold",
                                  children: "Nome Completo",
                                }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {
                                  placeholder: "Seu nome",
                                  className:
                                    "bg-white border-stone-200 text-velvet placeholder:text-velvet/40 focus:border-gold focus:ring-1 focus:ring-gold/20 h-12 transition-all",
                                  required: true,
                                }),
                              ],
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("label", {
                                  className:
                                    "text-[10px] uppercase tracking-widest text-gold font-bold",
                                  children: "WhatsApp",
                                }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {
                                  placeholder: "(00) 00000-0000",
                                  className:
                                    "bg-white border-stone-200 text-velvet placeholder:text-velvet/40 focus:border-gold focus:ring-1 focus:ring-gold/20 h-12 transition-all",
                                  required: true,
                                }),
                              ],
                            }),
                          ],
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("label", {
                              className:
                                "text-[10px] uppercase tracking-widest text-gold font-bold",
                              children: "Assunto",
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {
                              placeholder: "Ex: Regularização Fundiária",
                              className:
                                "bg-white border-stone-200 text-velvet placeholder:text-velvet/40 focus:border-gold focus:ring-1 focus:ring-gold/20 h-12 transition-all",
                              required: true,
                            }),
                          ],
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("label", {
                              className:
                                "text-[10px] uppercase tracking-widest text-gold font-bold",
                              children: "Mensagem",
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, {
                              placeholder: "Como podemos ajudar?",
                              className:
                                "min-h-[120px] bg-white border-stone-200 text-velvet placeholder:text-velvet/40 focus:border-gold focus:ring-1 focus:ring-gold/20 resize-none p-4 transition-all",
                              required: true,
                            }),
                          ],
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
                          type: "submit",
                          disabled: loading,
                          className:
                            "w-full bg-velvet hover:bg-velvet/90 text-white h-14 text-xs uppercase tracking-widest font-medium transition-all shadow-lg active:shadow-inner",
                          children: loading
                            ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, {
                                className: "h-5 w-5 animate-spin",
                              })
                            : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
                                className: "flex items-center gap-3",
                                children: [
                                  "Enviar Solicitação ",
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, {
                                    className: "h-4 w-4",
                                  }),
                                ],
                              }),
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                          className:
                            "text-[10px] text-center text-velvet/40 uppercase tracking-widest font-medium",
                          children: "Comunicação Segura · Protocolo SSL",
                        }),
                      ],
                    },
                    "form",
                  ),
            }),
          }),
        ],
      }),
    }),
  });
}
function ContactItem({ icon: Icon, title, content, link, delay = 0 }) {
  const Wrapper = link ? "a" : "div";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
    className: "flex items-start gap-4 md:gap-6",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "flex h-10 w-10 shrink-0 items-center justify-center text-gold",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, {
          className: "h-6 w-6",
          strokeWidth: 1,
        }),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", {
            className: "text-[10px] uppercase tracking-widest text-gold font-medium",
            children: title,
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Wrapper, {
            href: link,
            target: link?.startsWith("http") ? "_blank" : void 0,
            className: `mt-1 block font-sans text-xl md:text-2xl text-velvet break-words leading-tight ${link ? "hover:text-gold transition-colors" : ""}`,
            children: content,
          }),
        ],
      }),
    ],
  });
}
export { Contact as C, Footer as F, Navbar as N, ScrollToTop as S };
