import { graphql, rest } from "msw"
import { BASE_URL } from "../../const"
import { GetTodosDocument } from "../../gql/__generated"

export default [
  rest.get(BASE_URL + "todos", (_req, res, ctx) => {
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

  graphql.query(GetTodosDocument, (_req, res, ctx) =>
    res(
      ctx.data({
        __typename: "Query",
        todos: [
          { id: "1", text: "text-1", done: false },
          { id: "2", text: "text-1", done: false },
          { id: "3", text: "text-1", done: false },
        ],
      })
    )
  ),
]
