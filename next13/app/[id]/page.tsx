import Link from "next/link"
import { db } from "../../lib/db"

const getUser = (id: string) => {
  return db.user.findUnique({ where: { id } })
}

export default async function UserShowPage({
  params,
}: {
  params: { id: string }
}) {
  const user = await getUser(params.id)

  return (
    <div>
      <Link href="/">back</Link>
      <h1>User show page</h1>
      {user === null ? (
        <p>user not found</p>
      ) : (
        <ul>
          <li>{user.name}</li>
          <li>{user.email}</li>
        </ul>
      )}
    </div>
  )
}
