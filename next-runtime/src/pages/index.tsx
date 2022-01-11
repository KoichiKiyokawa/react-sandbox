import { NextPage } from "next"
import { Button, Container, ListItem, UnorderedList } from "@chakra-ui/react"
import { handle, json } from "next-runtime"
import { db } from "../utils/db.server"
import { Post } from "@prisma/client"

export const getServerSideProps = handle({
  async get() {
    const posts = await db.post.findMany()
    return json({ posts })
  },
})

type Props = {
  posts: Post[]
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Container>
      <Button>OK</Button>

      <UnorderedList>
        {posts.map((post) => (
          <ListItem key={post.id}>{post.title}</ListItem>
        ))}
      </UnorderedList>
    </Container>
  )
}

export default Home
