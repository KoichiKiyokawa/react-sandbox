import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "."
import { composeStories } from "@storybook/react"
import * as stories from "./index.stories"

const { Primary, Secondary } = composeStories(stories)

describe("should match snapshot", () => {
  test("primary", () => {
    const { asFragment } = render(<Primary />)

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

  test("secondary", () => {
    const { asFragment } = render(<Secondary />)

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <button
          class="px_4 py_2 rounded_4 cursor_pointer bg_gray.500 text_white"
        >
          Click me
        </button>
      </DocumentFragment>
    `)
  })
})

describe("action", () => {
  test("on click", async () => {
    const onClickSpy = jest.fn()

    render(<Button onClick={onClickSpy}>Click me</Button>)
    await userEvent.click(screen.getByText("Click me"))

    expect(onClickSpy).toHaveBeenCalledTimes(1)
  })
})
