import { Link } from "remix"

export default function Index() {
  return (
    <main>
      <h1>main</h1>
      <Link to="/users">users</Link>
    </main>
  )
}
