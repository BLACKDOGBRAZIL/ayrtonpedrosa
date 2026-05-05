import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ayrton Pedrosa Advocacia | Advocacia Estratégica" },
      { name: "description", content: "Advocacia especializada em diversas áreas do Direito. Soluções jurídicas para empresas e pessoas físicas com foco em resultados." },
      { name: "author", content: "Ayrton Pedrosa Advocacia" },
      { property: "og:title", content: "Ayrton Pedrosa Advocacia | Advocacia Estratégica" },
      { property: "og:description", content: "Advocacia especializada em diversas áreas do Direito. Soluções jurídicas para empresas e pessoas físicas com foco em resultados." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Ayrton Pedrosa Advocacia | Advocacia Estratégica" },
      { name: "twitter:description", content: "Advocacia especializada em diversas áreas do Direito. Soluções jurídicas para empresas e pessoas físicas com foco em resultados." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e4f90fee-a862-4645-ae81-c13e4296f5f3/id-preview-38c93f09--f9098de7-9c16-4ca9-b189-cf5cf21c3116.lovable.app-1777393605246.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e4f90fee-a862-4645-ae81-c13e4296f5f3/id-preview-38c93f09--f9098de7-9c16-4ca9-b189-cf5cf21c3116.lovable.app-1777393605246.png" },
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

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
