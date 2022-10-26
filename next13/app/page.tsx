import Link from "next/link"
import { use } from "react"
import { db } from "../lib/db"

const getData = () => {
  return db.user.findMany()
}

const Index = () => {
  const users = use(getData())
  return (
    <div>
      <h1>Index</h1>
      <time>{Date.now()}</time>

      <Link href="/new">new</Link>

      {users.map((user) => (
        <Link href={user.id} key={user.id}>
          <ul>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </ul>
        </Link>
      ))}
    </div>
  )
}

export default Index
