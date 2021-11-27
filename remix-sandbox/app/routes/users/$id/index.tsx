import { User } from "@prisma/client"
import { LoaderFunction } from "@remix-run/server-runtime"
import dayjs from "dayjs"
import { Link, useLoaderData } from "remix"
import { db } from "~/utils/db.server"

export const loader: LoaderFunction = async ({ params }) => {
  const user = await db.user.findUnique({ where: { id: params.id } })
  return user
}

export default function UserShow() {
  const user = useLoaderData<User>()
  return (
    <main>
      <h1>user show</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{dayjs(user.birthday).format("YYYY-MM-DD")}</p>

      <Link to="edit">edit</Link>
    </main>
  )
}
