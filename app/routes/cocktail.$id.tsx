import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cocktail/$id")({
  loader: ({ params: { id } }) => id,
  errorComponent: () => <div>404</div>,
  notFoundComponent: () => <div>404</div>,
  component: RouteComponent,
});

function RouteComponent() {
  const id = Route.useLoaderData();
  return <div>Hello "/cocktail/$id"! {id}</div>;
}
