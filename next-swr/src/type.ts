export type Post = {
  id: number
  userId: number
  title: string
  body: string
}

export type EmptyObject = Record<string, never>

export type PathToParams = {
  posts: { req: EmptyObject; res: Post[] }
  "posts/:id": { req: { id: number }; res: Post }
}

type ExpectPathToParams = Record<
  string,
  { req: Record<string, unknown>; res: any }
>

const satisfies = (t: PathToParams): ExpectPathToParams => t
