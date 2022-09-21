import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterAll, beforeAll, describe, expect, it } from "vitest"
import { Counter } from "."

describe.concurrent("Counter", () => {
  beforeAll(() => {
    render(<Counter />)
  })

  afterAll(cleanup)

  it("should increment and decrement", async () => {
    fireEvent.click(screen.getByText("+1"))
    expect(screen.getByTestId("count").innerText).toBe("1")
  })

  it("should decrement", async () => {
    fireEvent.click(screen.getByText("-1"))
    expect(screen.getByTestId("count").innerText).toBe("0")
  })

  it("should not decrement below 0", async () => {
    fireEvent.click(screen.getByText("-1"))
    expect(screen.getByTestId("count").innerText).toBe("0")
  })
})
