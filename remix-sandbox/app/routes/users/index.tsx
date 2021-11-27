import { json, LoaderFunction } from "@remix-run/server-runtime"
import { Link, useLoaderData } from "remix"
import { db } from "~/utils/db.server"

type User = {
  id: number
  name: string
}

export const loader: LoaderFunction = async () => {
  const users = await db.user.findMany({ orderBy: { createdAt: "desc" } })
  return json(users)
}

export default function Users() {
  const users = useLoaderData<User[]>()

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
    </main>
  )
}
