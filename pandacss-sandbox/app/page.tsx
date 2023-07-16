import { Button } from "@/components/Button"
import { styled } from "@/styled-system/jsx"
import { forwardRef } from "react"

const Input = forwardRef<HTMLInputElement, { label: string }>(function Input({ label }, ref) {
  return (
    <styled.label display="block" lg={{ color: "red" }}>
      <styled.span display="block">{label}</styled.span>
      <styled.input ref={ref} border="gray" borderWidth={2} borderStyle="solid" w="full" />
    </styled.label>
  )
})

export default function Home() {
  return (
    <styled.main>
      <styled.form
        border="gray"
        borderWidth={2}
        borderStyle="solid"
        padding={4}
        maxW="breakpoint-md"
        marginX="auto"
        marginTop="4"
      >
        <Input label="email" />
        <Input label="password" />
        <Button mt="4">submit</Button>
      </styled.form>
    </styled.main>
  )
}
