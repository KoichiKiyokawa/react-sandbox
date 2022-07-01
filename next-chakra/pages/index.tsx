import { Button, Container, Text } from "@chakra-ui/react"
import { GetServerSideProps } from "next"

type Props = { message: string }

export default function IndexPage() {
  return (
    <Container>
      <Text>{"message"}</Text>
      <Button>OK</Button>
    </Container>
  )
}
