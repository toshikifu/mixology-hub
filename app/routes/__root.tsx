import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Meta, Scripts } from "@tanstack/start";
import * as React from "react";
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary";
import { NotFound } from "~/components/NotFound";
import appCss from "~/styles/app.css?url";
import { seo } from "~/utils/seo";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      ...seo({
        title:
          "TanStack Start | Type-Safe, Client-First, Full-Stack React Framework",
        description: `TanStack Start is a type-safe, client-first, full-stack React framework. `,
      }),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <body>
        <div className="min-h-screen bg-primary-50">
          <nav className="bg-primary-500 text-white p-4 flex gap-4 text-lg shadow-md">
            <Link
              to="/"
              activeProps={{
                className: "font-bold text-accent-300",
              }}
              activeOptions={{ exact: true }}
              className="hover:text-accent-200 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/cocktail"
              activeProps={{
                className: "font-bold text-accent-300",
              }}
              className="hover:text-accent-200 transition-colors"
            >
              Cocktails
            </Link>
            <Link
              to="/favorites"
              activeProps={{
                className: "font-bold text-accent-300",
              }}
              className="hover:text-accent-200 transition-colors"
            >
              Favorites
            </Link>
            <Link
              to="/search"
              activeProps={{
                className: "font-bold text-accent-300",
              }}
              className="hover:text-accent-200 transition-colors"
            >
              Search
            </Link>
          </nav>
          <hr className="border-primary-100" />
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 text-slate-900">
            {children}
          </main>
          <TanStackRouterDevtools position="bottom-right" />
          <Scripts />
        </div>
      </body>
    </html>
  );
}
