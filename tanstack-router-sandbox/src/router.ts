import { ReactRouter, RootRoute, Route } from '@tanstack/react-router'
import { UserIndexPage } from './features/user/pages'
import { UserShowPage } from './features/user/pages/show'
import './index.css'

const rootRoute = new RootRoute()

const userIndexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/users',
  component: UserIndexPage,
})

const userShowRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/users/$id',
  component: UserShowPage,
})

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([userIndexRoute, userShowRoute])

// Create the router using your route tree
export const router = new ReactRouter({ routeTree })

// Register your router for maximum type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
