export const enum ROUTES {
  Index = "/",
  PostList = "/posts",
  PostDetail = "/posts/:id",
  UserDetail = "/users/:userId",
}

export type RoutesToParams = {
  [ROUTES.Index]: Record<never, never>
  [ROUTES.PostList]: Record<never, never>
  [ROUTES.PostDetail]: { params: { id: number } }
  [ROUTES.UserDetail]: { params: { userId: string } }
}

const satisfies = (
  a: RoutesToParams
): Record<ROUTES, { params?: Record<string, unknown> }> => a

export const makePath = <Route extends keyof RoutesToParams>(
  route: Route,
  ...args: RoutesToParams[Route] extends { params: Record<string, unknown> }
    ? [params: RoutesToParams[Route]]
    : []
) => route.replace(/:(\w+)/g, (_, key) => (args[0]?.params as any)[key])
