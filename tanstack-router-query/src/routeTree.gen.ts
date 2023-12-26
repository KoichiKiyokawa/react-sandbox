import { Route as rootRoute } from "./routes/__root"
import { Route as IndexRoute } from "./routes/index"
import { Route as UsersIdRoute } from "./routes/users.$id"
import { Route as UsersIndexRoute } from "./routes/users.index"

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      parentRoute: typeof rootRoute
    }
    "/users/": {
      parentRoute: typeof rootRoute
    }
    "/users/$id": {
      parentRoute: typeof rootRoute
    }
  }
}

Object.assign(IndexRoute.options, {
  path: "/",
  getParentRoute: () => rootRoute,
})

Object.assign(UsersIndexRoute.options, {
  path: "/users/",
  getParentRoute: () => rootRoute,
})

Object.assign(UsersIdRoute.options, {
  path: "/users/$id",
  getParentRoute: () => rootRoute,
})

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  UsersIndexRoute,
  UsersIdRoute,
])
