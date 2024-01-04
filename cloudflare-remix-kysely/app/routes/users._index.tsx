import { LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/lib/db";

export const loader = (async () => {
  const users = await db.selectFrom("User").selectAll().execute();
  return { users };
}) satisfies LoaderFunction;

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
