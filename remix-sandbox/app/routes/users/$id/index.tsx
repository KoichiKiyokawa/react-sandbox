import { json, LoaderFunction } from "@remix-run/server-runtime"
import { useLoaderData } from "remix"

export const loader: LoaderFunction = () => {
  return json({})
}

export default function UserShow() {
  const data = useLoaderData()
  return (
    <main>
      <h1>user show</h1>
      <p></p>
    </main>
  )
}
