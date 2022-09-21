import { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count >= 1) setCount(count - 1)
  }

  return (
    <div>
      <span data-testid="count">{count}</span>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  )
}
