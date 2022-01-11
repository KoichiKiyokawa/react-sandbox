import {
  Button,
  Container,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  ListItem,
  Textarea,
  UnorderedList,
  VStack,
} from "@chakra-ui/react"
import { Post } from "@prisma/client"
import { NextPage } from "next"
import { handle, json, redirect } from "next-runtime"
import { Form, useFormSubmit } from "next-runtime/form"
import Link from "next/link"
import { db } from "../utils/db.server"
import { DeleteIcon } from "@chakra-ui/icons"

type Props = {
  posts: Post[]
}

export const getServerSideProps = handle<Props, {}, Post>({
  async get() {
    const posts = await db.post.findMany()
    return json({ posts })
  },
  async post({ req: { body } }) {
    await db.post.create({ data: body })
    return redirect("/")
  },
  async delete({ req: { body } }) {
    await db.post.delete({ where: { id: body.id } })
    return redirect("/")
  },
})

const Home: NextPage<Props> = ({ posts }) => {
  const { isSubmitting } = useFormSubmit()
  const onSuccess = () => {
    document.forms.namedItem("postForm")?.reset()
  }

  return (
    <Container>
      <Form method="post" name="postForm" onSuccess={onSuccess}>
        <VStack align="flex-start" spacing={4}>
          <FormControl>
            <FormLabel htmlFor="title">title</FormLabel>
            <Input id="title" name="title"></Input>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="body">body</FormLabel>
            <Textarea id="body" name="body"></Textarea>
          </FormControl>

          <Button type="submit" disabled={isSubmitting}>
            OK
          </Button>
        </VStack>
      </Form>

      <UnorderedList>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <Link href={`/${post.id}`}>{post.title}</Link>
            <Form method="delete">
              <input type="hidden" name="id" value={post.id} />
              <IconButton
                type="submit"
                aria-label="delete"
                icon={<DeleteIcon />}
              ></IconButton>
            </Form>
          </ListItem>
        ))}
      </UnorderedList>
    </Container>
  )
}

export default Home
