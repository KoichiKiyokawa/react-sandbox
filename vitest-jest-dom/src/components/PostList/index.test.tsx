import { render, screen, waitFor } from "@testing-library/react"
import { rest } from "msw"
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest"
import { useMockHandlers } from "~/../test/util"
import { API_ENDPOINT } from "~/env"
import { api } from "~/lib/ky"
import { Post } from "~/types/post"
import { PostList } from "."

describe.concurrent("PostList", () => {
  useMockHandlers([
    rest.get(`${API_ENDPOINT}/posts`, (_req, res, ctx) =>
      res(
        ctx.json<Post[]>([
          { userId: 1, id: 1, title: "title1", body: "body1" },
          { userId: 2, id: 2, title: "title2", body: "body2" },
          { userId: 3, id: 3, title: "title3", body: "body3" },
        ])
      )
    ),
  ])

  const mockAlert = vi.fn()

  beforeAll(() => {
    render(<PostList />)
    vi.spyOn(window, "alert").mockImplementation(mockAlert)
  })

  afterAll(() => {
    vi.clearAllMocks()
  })

  it("ky test", async () => {
    expect(await api.get(`posts`).json<Post[]>()).toEqual([
      { userId: 1, id: 1, title: "title1", body: "body1" },
      { userId: 2, id: 2, title: "title2", body: "body2" },
      { userId: 3, id: 3, title: "title3", body: "body3" },
    ])
    expect(mockAlert).not.toHaveBeenCalled()
  })

  it('should render "Loading..."', async () => {
    expect(screen.getByText("Loading...")).toBeTruthy()
  })

  it("should render posts", async () => {
    await waitFor(() => expect(screen.getByRole("listitem")).toHaveLength(3))
  })
})
