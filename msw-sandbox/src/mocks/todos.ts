import { rest } from "msw"
import { BASE_URL } from "../const"

export const todoHandlers = [
  rest.get(BASE_URL + "todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        Array.from(Array(10).keys()).map((i) => ({
          id: String(i),
          text: `text-${i}`,
          done: false,
        }))
      )
    )
  }),
]
