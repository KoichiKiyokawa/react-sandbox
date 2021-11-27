import { User } from "@prisma/client";
import {
  DataFunctionArgs,
  LoaderFunction,
  redirect,
} from "@remix-run/server-runtime";
import dayjs from "dayjs";
import { useState } from "react";
import { Form, Link, useLoaderData, useTransition } from "remix";
import { db } from "~/utils/db.server";

export const loader: LoaderFunction = async ({ params }) => {
  const user = await db.user.findUnique({ where: { id: params.id } });
  return user;
};

export async function action({ request, params }: DataFunctionArgs) {
  switch (request.method) {
    case "DELETE": {
      await db.user.delete({ where: { id: params.id } });
      return redirect("/users");
    }
  }
}

export default function UserShow() {
  const user = useLoaderData<User>();

  const transition = useTransition();
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <main>
      <h1>user show</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{dayjs(user.birthday).format("YYYY-MM-DD")}</p>

      <Link to="edit">edit</Link>
      <button
        onClick={() => setDialogOpen(true)}
        disabled={transition.state === "submitting"}
      >
        delete
      </button>

      <dialog open={dialogOpen}>
        <Form method="delete">
          <p>Are you sure you want to delete this user?</p>
          <button>confirm</button>
          <button type="button" onClick={() => setDialogOpen(false)}>
            cancel
          </button>
        </Form>
      </dialog>
    </main>
  );
}
