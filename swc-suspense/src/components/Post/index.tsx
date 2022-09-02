import { Suspense, useEffect } from "react"
import useSWR from "swr"
import { fetcher } from "../../lib/fetcher"
import { Post } from "../../types/post"
import { Loading } from "../Loading"
import { UserCard } from "../User"

const Inner = () => {
  const { data, error } = useSWR(
    ["posts", 1],
    (key) => fetcher(key).json<Post[]>(),
    { suspense: true }
  )

  useEffect(() => {
    if (error) alert(error.message)
  }, [error])

  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>
          <h3>
            <>{post.title}</>
          </h3>
          <p>{post.body}</p>
          <UserCard userId={post.userId} />
        </div>
      ))}
    </div>
  )
}

export const PostCard = () => (
  <Suspense fallback={<Loading />}>
    <Inner />
  </Suspense>
)
