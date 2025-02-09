import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cocktail/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/cocktail/"!</div>;
}
