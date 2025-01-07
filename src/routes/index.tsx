import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="p-2">
      <h3 className="text-4xl text-blue-500">Welcome Home!</h3>
    </div>
  );
}
