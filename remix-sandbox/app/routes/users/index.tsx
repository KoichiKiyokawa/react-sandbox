import { json, LoaderFunction } from "@remix-run/server-runtime"
import { Link, useLoaderData } from "remix"

type User = {
  id: number
  name: string
}

export const loader: LoaderFunction = () => {
  const users: User[] = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: `user${i}`,
  }))
  return json(users)
}

export default function Users() {
  const users = useLoaderData<User[]>()

  return (
    <main>
      <h1>user index</h1>
      <ul>
        {users.map((user) => (
          <li>
            <Link to={`${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
