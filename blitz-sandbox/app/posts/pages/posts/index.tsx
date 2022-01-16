import Form from "app/core/components/Form"
import LabeledTextField from "app/core/components/LabeledTextField"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import createPost, { CreatePost } from "app/posts/mutations/createPost"
import deletePost from "app/posts/mutations/deletePost"
import { BlitzPage, Link, useMutation, useQuery, useRouter } from "blitz"
import { Suspense, useEffect } from "react"
import getPosts from "../../queries/getPosts"

const PostList: BlitzPage = () => {
  const router = useRouter()
  const [postsResult, postsQuery] = useQuery(getPosts, { orderBy: { createdAt: "desc" } })
  const [createPostMutation] = useMutation(createPost)
  const [deletePostMutation] = useMutation(deletePost)
  const currentUser = useCurrentUser()
  useEffect(() => {
    if (currentUser == null) router.push("/login")
  }, [])

  return (
    <div>
      <Form
        schema={CreatePost}
        onSubmit={async (value) => {
          if (currentUser == null) return

          createPostMutation({ ...value, userId: currentUser.id })
            .then(() => {
              document.forms.namedItem("createPost")?.reset()
              return postsQuery.refetch()
            })
            .catch(console.error)
        }}
        name="createPost"
      >
        <LabeledTextField label="title" name="title" />
        <LabeledTextField label="body" name="body" />
        <button>submit</button>
      </Form>

      {postsResult.posts.map((post) => (
        <>
          <Link href={"/posts/" + post.id} key={post.id}>
            <div>
              <span>{post.title}</span>
              <span>{post.body}</span>
            </div>
          </Link>
          <button
            type="submit"
            onClick={() => deletePostMutation({ id: post.id }).then(() => postsQuery.refetch())}
          >
            delete this
          </button>
        </>
      ))}
    </div>
  )
}

export default () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostList />
    </Suspense>
  )
}
