import { DeleteIcon } from "@chakra-ui/icons"
import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useBoolean,
} from "@chakra-ui/react"
import { Post } from "@prisma/client"
import { NextPage } from "next"
import { handle, json, notFound, redirect } from "next-runtime"
import { Form, useFormSubmit } from "next-runtime/form"
import { MainLayout } from "src/components/layouts/MainLayout"
import { db } from "../../utils/db.server"

type Props = {
  post: Post
}

export const getServerSideProps = handle<Props, { id: string }, {}>({
  async get({ params }) {
    console.log("posts/[id]#get")
    const post = await db.post.findUnique({ where: { id: params?.id } })
    if (post == null) return redirect("/")

    return json({ post })
  },
  async delete({ params }) {
    console.log("posts/[id]#delete")
    if (params?.id == null) return notFound()

    await db.post.delete({ where: { id: params.id } })
    return redirect("/")
  },
})

const PostShow: NextPage<Props> = ({ post }) => {
  const [showModal, setShowModal] = useBoolean(false)
  const { error } = useFormSubmit()

  return (
    <MainLayout>
      <p>{error?.message}</p>
      <h1>Post Show</h1>
      <div>title: {post.title}</div>
      <div>body: {post.body}</div>

      <IconButton
        type="submit"
        aria-label="delete"
        icon={<DeleteIcon />}
        onClick={() => setShowModal.on()}
      ></IconButton>

      <Modal isOpen={showModal} onClose={setShowModal.off}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>

          <ModalCloseButton />

          <ModalBody>Are you sure to delete this post?</ModalBody>

          <ModalFooter>
            <Button onClick={setShowModal.off}>Cancel</Button>
            <Form method="delete" onError={setShowModal.off}>
              <Button type="submit" colorScheme="red" ml={4}>
                OK
              </Button>
            </Form>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </MainLayout>
  )
}

export default PostShow
