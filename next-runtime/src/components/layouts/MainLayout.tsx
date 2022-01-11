import { Box, Container, Text } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Box as="header" m={4}>
        <nav>
          <Link href="/" passHref>
            <Text as="a" fontSize="2xl">
              Next Runtime
            </Text>
          </Link>
        </nav>
      </Box>
      <Container as="main">{children}</Container>
    </>
  )
}
