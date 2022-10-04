import { useEffect } from "react"
import useSWR from "swr"
import { api } from "~/lib/ky"
import { Post } from "~/types/post"

export const PostList = () => {
  const { data: posts, error } = useSWR("posts", (key) =>
    api.get(key).json<Post[]>()
  )

  useEffect(() => {
    if (error) alert(error.message)
  }, [])

  if (posts === undefined) return <div>Loading...</div>

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <pre>{post.body}</pre>
        </li>
      ))}
    </ul>
  )
}
