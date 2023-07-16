import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "."

test("should match snapshot", () => {
  const { asFragment } = render(<Button>Click me</Button>)

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <button
        class="px_4 py_2 rounded_4 cursor_pointer bg_blue.500 text_white"
      >
        Click me
      </button>
    </DocumentFragment>
  `)
})

test("on click", async () => {
  const onClickSpy = jest.fn()

  render(<Button onClick={onClickSpy}>Click me</Button>)
  await userEvent.click(screen.getByText("Click me"))

  expect(onClickSpy).toHaveBeenCalledTimes(1)
})
