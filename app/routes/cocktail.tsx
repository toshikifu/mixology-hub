import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/cocktail")({
  loader: () => ["jin", "tonic"],
  component: RouteComponent,
});

function RouteComponent() {
  const items = Route.useLoaderData();
  console.log(items); // ["jin", "tonic"]
  return (
    <div className="p-2 flex gap-2">
      <ul>
        <h1>Cocktail</h1>
        {items.map((item) => (
          <li key={item}>
            <Link
              to={"/cocktail/$id"}
              params={{ id: item }}
              className="text-blue-500"
              activeProps={{ className: "text-red-500" }}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
