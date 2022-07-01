import { Button, Container, Text } from "@chakra-ui/react"
import { GetServerSideProps } from "next"

type Props = { message: string }

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      message: "hoge",
    },
  }
}

export default function IndexPage({ message }: Props) {
  return (
    <Container>
      <Text>{message}</Text>
      <Button>OK</Button>
    </Container>
  )
}
