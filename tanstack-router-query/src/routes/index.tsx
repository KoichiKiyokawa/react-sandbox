import { FileRoute, Link } from "@tanstack/react-router";

export const Route = new FileRoute('/').createRoute({ component: Home });

function Home() {
  return (
    <div>
      <h1>This is Home</h1>

      <Link to={"/users"}>/users</Link>
    </div>
  );
}
