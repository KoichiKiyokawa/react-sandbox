import { expectType } from "tsd"
import { describe, expect, it } from "vitest"
import { components } from "../types/__generated"
import {
  GetPathParamsByPathAndHttpMethod,
  GetPathsFilteredByHttpMethod,
  replacePathParams,
} from "./fetcher"

describe("replace paths", () => {
  it("/users/{id}", () => {
    expect(replacePathParams("/users/{id}", { id: 1 })).toBe("/users/1")
  })
  it("/users/{id}/posts/{postId}", () => {
    expect(
      replacePathParams("/users/{id}/posts/{postId}", { id: 1, postId: 2 })
    ).toBe("/users/1/posts/2")
  })
  it("/users1/{id}/users2/{id}", () => {
    expect(replacePathParams("/users1/{id}/users2/{id}", { id: 1 })).toBe(
      "/users1/1/users2/1"
    )
  })
})

expectType<GetPathsFilteredByHttpMethod<"get">>({} as "/users" | "/users/{id}")
expectType<GetPathsFilteredByHttpMethod<"post">>({} as "/users")
expectType<GetPathsFilteredByHttpMethod<"put">>({} as never)

expectType<GetPathParamsByPathAndHttpMethod<"/users", "get">>(
  {} as components["schemas"]["User"]
)
