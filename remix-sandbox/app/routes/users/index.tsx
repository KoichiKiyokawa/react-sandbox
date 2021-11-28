import { LoaderFunction } from "@remix-run/server-runtime";
import { Link, useLoaderData, useSearchParams } from "remix";
import { UserForm } from "~/components/domains/user/UserForm";
import { Button } from "~/components/ui/Button";
import { db } from "~/utils/db.server";

type User = {
  id: number;
  name: string;
};

export const loader: LoaderFunction = async () => {
  const users = await db.user.findMany({ orderBy: { createdAt: "desc" } });
  return users;
};

export default function Users() {
  const users = useLoaderData<User[]>();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <main>
      <h1>user index</h1>
      <Link to="new">new user</Link>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>

      <Button variant="info" onClick={() => setSearchParams({ modal: "open" })}>
        open dialog form
      </Button>

      <dialog open={searchParams.get("modal") != null} className="absolute top-300px border">
        <UserForm action="/users/new" />
        <button onClick={() => setSearchParams({})}>x</button>
      </dialog>
    </main>
  );
}
