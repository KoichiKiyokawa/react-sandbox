import { FileRoute } from "@tanstack/react-router";
import { getUserQueryOptions } from "../features/user/query";

export const Route = new FileRoute('/users/$id').createRoute({
  loader({ context, params }) {
    return context.queryClient.ensureQueryData(getUserQueryOptions(params.id));
  },
  component: UserDetail,
});

function UserDetail() {
  const user = Route.useLoaderData();

  return (
    <ul>
      <li>{user.name}</li>
      <li>{user.username}</li>
      <li>{user.email}</li>
    </ul>
  );
}
