import { withFullPageLoading } from "app/core/hoc/withFullPageLoading"
import getPost from "app/posts/queries/getPost"
import { useParam, useQuery } from "blitz"

const PostDetail = () => {
  const id = useParam("id", "string")
  const [post] = useQuery(getPost, { id })
  return (
    <div>
      <div>{post.title}</div>
      <div>{post.body}</div>
    </div>
  )
}

export default withFullPageLoading(PostDetail)
