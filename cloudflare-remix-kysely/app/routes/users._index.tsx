import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { UserService } from "~/features/user/service.server";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const users = await new UserService(context).findAll();
  return { users };
};

export default function UserIndexPage() {
  const { users } = useLoaderData<typeof loader>();

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
