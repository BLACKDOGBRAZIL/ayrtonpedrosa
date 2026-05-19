import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import {
  b as createRouter,
  d as useRouter,
  a as createRootRoute,
  c as createFileRoute,
  l as lazyRouteComponent,
  H as HeadContent,
  S as Scripts,
  O as Outlet,
  L as Link,
} from "../_libs/tanstack__react-router.mjs";
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
const appCss = "/assets/styles-DCywtOue.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", {
          className: "text-7xl font-bold text-foreground",
          children: "404",
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", {
          className: "mt-4 text-xl font-semibold text-foreground",
          children: "Page not found",
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children: "The page you're looking for doesn't exist or has been moved.",
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "mt-6",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
            to: "/",
            className:
              "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
            children: "Go home",
          }),
        }),
      ],
    }),
  });
}
const Route$8 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ayrton Pedrosa Advocacia | Advocacia Estratégica" },
      {
        name: "description",
        content:
          "Advocacia especializada em diversas áreas do Direito. Soluções jurídicas para empresas e pessoas físicas com foco em resultados.",
      },
      { name: "author", content: "Ayrton Pedrosa Advocacia" },
      { property: "og:title", content: "Ayrton Pedrosa Advocacia | Advocacia Estratégica" },
      {
        property: "og:description",
        content:
          "Advocacia especializada em diversas áreas do Direito. Soluções jurídicas para empresas e pessoas físicas com foco em resultados.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Ayrton Pedrosa Advocacia | Advocacia Estratégica" },
      {
        name: "twitter:description",
        content:
          "Advocacia especializada em diversas áreas do Direito. Soluções jurídicas para empresas e pessoas físicas com foco em resultados.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e4f90fee-a862-4645-ae81-c13e4296f5f3/id-preview-38c93f09--f9098de7-9c16-4ca9-b189-cf5cf21c3116.lovable.app-1777393605246.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e4f90fee-a862-4645-ae81-c13e4296f5f3/id-preview-38c93f09--f9098de7-9c16-4ca9-b189-cf5cf21c3116.lovable.app-1777393605246.png",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("head", {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("body", {
        children: [children, /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})],
      }),
    ],
  });
}
function RootComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
}
const $$splitComponentImporter$7 = () => import("./login-CQfJ6IXb.mjs");
const Route$7 = createFileRoute("/login")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component"),
});
const $$splitComponentImporter$6 = () => import("./dashboard-CDN4uwRc.mjs");
const Route$6 = createFileRoute("/dashboard")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
});
const $$splitComponentImporter$5 = () => import("./areas-de-atuacao-kvslb2Ot.mjs");
const Route$5 = createFileRoute("/areas-de-atuacao")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
});
const $$splitComponentImporter$4 = () => import("./index-BKv6-Vpi.mjs");
const Route$4 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  loader: () => ({
    year: /* @__PURE__ */ new Date().getFullYear(),
  }),
});
const $$splitComponentImporter$3 = () => import("./index-BQlV3X_R.mjs");
const Route$3 = createFileRoute("/dashboard/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
});
const $$splitComponentImporter$2 = () => import("./clients-DnT2wFE9.mjs");
const Route$2 = createFileRoute("/dashboard/clients")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
});
const $$splitComponentImporter$1 = () => import("./cases-D6LfKSXN.mjs");
const Route$1 = createFileRoute("/dashboard/cases")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
});
const $$splitComponentImporter = () => import("./agenda-ATUsFENq.mjs");
const Route = createFileRoute("/dashboard/agenda")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
});
const LoginRoute = Route$7.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$8,
});
const DashboardRoute = Route$6.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$8,
});
const AreasDeAtuacaoRoute = Route$5.update({
  id: "/areas-de-atuacao",
  path: "/areas-de-atuacao",
  getParentRoute: () => Route$8,
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8,
});
const DashboardIndexRoute = Route$3.update({
  id: "/",
  path: "/",
  getParentRoute: () => DashboardRoute,
});
const DashboardClientsRoute = Route$2.update({
  id: "/clients",
  path: "/clients",
  getParentRoute: () => DashboardRoute,
});
const DashboardCasesRoute = Route$1.update({
  id: "/cases",
  path: "/cases",
  getParentRoute: () => DashboardRoute,
});
const DashboardAgendaRoute = Route.update({
  id: "/agenda",
  path: "/agenda",
  getParentRoute: () => DashboardRoute,
});
const DashboardRouteChildren = {
  DashboardAgendaRoute,
  DashboardCasesRoute,
  DashboardClientsRoute,
  DashboardIndexRoute,
};
const DashboardRouteWithChildren = DashboardRoute._addFileChildren(DashboardRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AreasDeAtuacaoRoute,
  DashboardRoute: DashboardRouteWithChildren,
  LoginRoute,
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className:
            "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-8 w-8 text-destructive",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
            }),
          }),
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", {
          className: "text-2xl font-bold tracking-tight text-foreground",
          children: "Something went wrong",
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children: "An unexpected error occurred. Please try again.",
        }),
        false,
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "mt-6 flex items-center justify-center gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
              onClick: () => {
                router2.invalidate();
                reset();
              },
              className:
                "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
              children: "Try again",
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
              href: "/",
              className:
                "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
              children: "Go home",
            }),
          ],
        }),
      ],
    }),
  });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent,
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      getRouter,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
export { Route$4 as R, router as r };
