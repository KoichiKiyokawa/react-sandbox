import { FileRoute, Link } from "@tanstack/react-router";
import { getUsersQueryOptions } from "../features/user/query";

export const Route = new FileRoute('/users/').createRoute({
  loader({ context }) {
    return context.queryClient.ensureQueryData(getUsersQueryOptions());
  },
  component: UserList,
});

function UserList() {
  const users = Route.useLoaderData();

  return (
    <div className="grid gap-2 mx-auto max-w-2xl mt-4">
      {users.map((user) => (
        <Link to="/users/$id" params={{ id: user.id.toString() }}>
          <ul className="block p-4 shadow-lg border border-gray-400 break-words">
            <li>{user.name}</li>
            <li>{user.username}</li>
            <li>{user.email}</li>
          </ul>
        </Link>
      ))}
    </div>
  );
}
