import { User } from "@prisma/client"
import {
  DataFunctionArgs,
  LoaderFunction,
  redirect,
} from "@remix-run/server-runtime"
import dayjs from "dayjs"
import { useState } from "react"
import { Form, Link, useLoaderData, useTransition } from "remix"
import { UserService } from "~/domains/user/service.server"
import { db } from "~/utils/db.server"

export const loader: LoaderFunction = async ({ params }) => {
  const user = await db.user.findUnique({ where: { id: params.id } })
  return user
}

export async function action({ request, params }: DataFunctionArgs) {
  switch (request.method) {
    case "POST": {
      if (!params.id) throw Error()

      await new Promise((resolve) => setTimeout(resolve, 1000))
      await UserService.incrementLike(params.id)
      return null
    }
    case "DELETE": {
      await db.user.delete({ where: { id: params.id } })
      return redirect("/users")
    }
  }
}

export default function UserShow() {
  const user = useLoaderData<User>()

  const transition = useTransition()
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <main>
      <h1>user show</h1>
      <p>name: {user.name}</p>
      <p>email: {user.email}</p>
      <p>likes: {user.likes}</p>
      <p>birthday: {dayjs(user.birthday).format("YYYY-MM-DD")}</p>

      <Link to="edit">edit</Link>
      <Form method="post">
        <button disabled={transition.state === "submitting"}>Like</button>
      </Form>
      <button
        onClick={() => setDialogOpen(true)}
        disabled={transition.state === "submitting"}
      >
        delete
      </button>

      <dialog open={dialogOpen}>
        <Form method="delete">
          <p>Are you sure you want to delete this user?</p>
          <button disabled={transition.state === "submitting"}>confirm</button>
          <button
            type="button"
            onClick={() => setDialogOpen(false)}
            disabled={transition.state === "submitting"}
          >
            cancel
          </button>
        </Form>
      </dialog>
    </main>
  )
}
