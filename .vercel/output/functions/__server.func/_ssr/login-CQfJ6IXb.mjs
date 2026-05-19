import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { B as Button, c as cn } from "./button-CfdaOMCp.mjs";
import { I as Input } from "./input-D1rXzXN0.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { z as ShieldCheck, U as User, q as Lock, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsxRuntimeExports.jsx(Root, {
    ref,
    className: cn(labelVariants(), className),
    ...props,
  }),
);
Label.displayName = Root.displayName;
function LoginPage() {
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate({
        to: "/dashboard",
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className:
      "min-h-screen bg-[#051a14] flex items-center justify-center p-6 relative overflow-hidden",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className:
          "absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]",
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className:
          "absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-green-900/10 rounded-full blur-[100px]",
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, {
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
        className: "w-full max-w-md",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "text-center mb-10",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className:
                  "inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 border border-gold/20 mb-6 shadow-xl",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, {
                  className: "h-8 w-8 text-gold",
                }),
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", {
                className: "font-serif text-3xl text-white mb-2 tracking-tight",
                children: [
                  "Portal do ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                    className: "italic text-gold",
                    children: "Advogado",
                  }),
                ],
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "text-zinc-400 text-sm",
                children: "Escritório Digital Ayrton Pedrosa",
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className:
              "bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", {
              onSubmit: handleLogin,
              className: "space-y-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, {
                      className:
                        "text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1",
                      children: "E-mail Profissional",
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                      className: "relative",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(User, {
                          className:
                            "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600",
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {
                          type: "email",
                          placeholder: "exemplo@adv.br",
                          className:
                            "bg-white/5 border-white/10 h-14 pl-12 text-white focus:bg-white/10 focus:border-gold/50 transition-all rounded-xl",
                          value: email,
                          onChange: (e) => setEmail(e.target.value),
                          required: true,
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, {
                      className:
                        "text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold ml-1",
                      children: "Senha",
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                      className: "relative",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, {
                          className:
                            "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600",
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {
                          type: "password",
                          placeholder: "••••••••",
                          className:
                            "bg-white/5 border-white/10 h-14 pl-12 text-white focus:bg-white/10 focus:border-gold/50 transition-all rounded-xl",
                          value: password,
                          onChange: (e) => setPassword(e.target.value),
                          required: true,
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", {
                      className: "flex items-center gap-2 cursor-pointer group",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                          type: "checkbox",
                          className: "w-4 h-4 rounded border-white/10 bg-white/5 accent-gold",
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                          className:
                            "text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors",
                          children: "Lembrar acesso",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                      type: "button",
                      className: "text-xs text-gold/80 hover:text-gold transition-colors",
                      children: "Esqueceu a senha?",
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, {
                  type: "submit",
                  className:
                    "w-full h-14 bg-gold hover:bg-white text-velvet font-bold uppercase tracking-[0.2em] text-xs rounded-xl shadow-lg shadow-gold/10 transition-all group",
                  children: [
                    "Entrar no Escritório",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {
                      className: "ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform",
                    }),
                  ],
                }),
              ],
            }),
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
            className: "mt-8 text-center text-zinc-600 text-xs uppercase tracking-widest font-bold",
            children: [
              "© ",
              /* @__PURE__ */ new Date().getFullYear(),
              " Ayrton Pedrosa Advocacia. Todos os direitos reservados.",
            ],
          }),
        ],
      }),
    ],
  });
}
export { LoginPage as component };
