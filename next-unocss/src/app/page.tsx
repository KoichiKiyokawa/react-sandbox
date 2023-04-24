export default function Home() {
  return (
    <form
      border="~ solid gray-200"
      rounded="lg"
      shadow="lg"
      p="4"
      m="3 x-auto"
      max-w="lg"
    >
      <div space="y-2">
        <label block="~">
          email
          <input ml="2" />
        </label>

        <label block="~">
          password
          <input ml="2" />
        </label>
      </div>

      <Button mt="4">submit</Button>
    </form>
  )
}

const Button = ({
  children,
  ...props
}: { children: React.ReactNode } & React.ComponentProps<"button">) => (
  <button
    text="white md"
    bg="blue-400"
    border="none"
    p="x-4 y-2"
    rounded="md"
    cursor="pointer"
    {...props}
  >
    {children}
  </button>
)
