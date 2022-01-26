import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react"
import { Post } from "@prisma/client"
import { useEffect, useRef } from "react"
import {
  ActionFunction,
  LoaderFunction,
  useFetcher,
  useLoaderData,
} from "remix"
import { db } from "~/utils/db.server"
import { parseRequest } from "~/utils/request.server"

type Props = {
  posts: Post[]
}

export const loader: LoaderFunction = async () => {
  const posts = await db.post.findMany({ orderBy: { createdAt: "desc" } })
  return { posts }
}

export const action: ActionFunction = async ({ request }) => {
  const data = await parseRequest<Post>(request)
  console.log(data)
  const user = await db.user.findFirst()
  if (!user) return null

  await db.post.create({ data: { ...data, userId: user.id } })
  return null
  // return redirect(".")
}

export default function Index() {
  const { posts } = useLoaderData<Props>()
  const formRef = useRef<HTMLFormElement>(null)
  const post = useFetcher()

  useEffect(() => {
    if (post.type === "done") formRef.current?.reset()
  }, [post.type])

  return (
    <Container>
      <post.Form method="post" ref={formRef}>
        <fieldset disabled={post.state === "submitting"}>
          <FormControl>
            <FormLabel>title</FormLabel>
            <Input name="title" />
          </FormControl>
          <FormControl>
            <FormLabel>body</FormLabel>
            <Textarea name="body" />
          </FormControl>
          <Button type="submit" mt="4" disabled={post.state === "submitting"}>
            {post.state === "submitting" ? "submitting..." : "submit"}
          </Button>
        </fieldset>
      </post.Form>

      <Stack spacing={4} mt={8}>
        {posts.map((post) => (
          <Stack key={post.id} p={4} border="2px" borderColor="gray.300">
            <Text fontSize="4xl">{post.title}</Text>
            <Text>{post.body}</Text>
          </Stack>
        ))}
      </Stack>
    </Container>
  )
}
