import { Suspense } from "react"
import {
  Link,
  LoaderFunction,
  useLoaderData,
  useNavigation,
} from "react-router-dom"
import { makePath, ROUTES } from "../../core/router"
import { Post } from "../type"

export const loader = (async () => {
  await new Promise((r) => setTimeout(r, 10000))
  const posts: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/todos"
  ).then((r) => r.json())

  return {
    posts,
  }
}) satisfies LoaderFunction

export const PostListPage = () => {
  const data = useLoaderData() as Awaited<ReturnType<typeof loader>>
  const navigation = useNavigation()

  if (navigation.state === "loading") return <span>Loaidng...</span>

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <form></form>

      <ul>
        {data.posts.map((post) => (
          <li key={post.id}>
            <Link to={makePath(ROUTES.PostDetail, { params: { id: post.id } })}>
              <p>{post.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Suspense>
  )
}
