import { createBrowserRouter } from "react-router-dom"
import { MainLayout } from "./features/core/layout"
import { ROUTES } from "./features/core/router"
import {
  loader as postListLoader,
  PostListPage,
} from "./features/post/pages/list"
import { UserIndexPage } from "./features/user/pages"

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    loader: async () => {
      return fetch("https://jsonplaceholder.typicode.com/albums").then((r) =>
        r.json()
      )
    },
    children: [
      { path: "/", element: <UserIndexPage /> },
      {
        path: ROUTES.PostList,
        element: <PostListPage />,
        loader: postListLoader,
        hasErrorBoundary: true,
      },
    ],
  },
])
