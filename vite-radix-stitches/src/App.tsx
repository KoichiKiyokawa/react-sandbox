import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover"

function App() {
  return (
    <Popover>
      <PopoverTrigger>
        <button>open</button>
      </PopoverTrigger>
      <PopoverContent>hoge</PopoverContent>
    </Popover>
  )
}

export default App
