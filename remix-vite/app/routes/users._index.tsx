import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { cx } from "classix";

export const loader = (() => {
  const users = [
    { id: 1, name: "Ryan" },
    { id: 2, name: "Michael" },
    { id: 3, name: "Tyler" },
  ];
  return users;
}) satisfies LoaderFunction;

export default function UserListPage(): React.ReactNode {
  const users = useLoaderData<typeof loader>();

  return (
    <div className={cx("container grid gap-4 grid-cols-3", "mx-auto mt-4")}>
      {users.map((user) => (
        <div key={user.id} className="border rounded-lg shadow-md px-4 py-2">
          {user.name}
        </div>
      ))}
    </div>
  );
}
