import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route("users", "./features/user/pages/user-list.tsx"),
  route("users/:id", "./features/user/pages/user-detail.tsx"),
  route("users/new", "./features/user/pages/user-new.tsx"),
  route("me", "./features/user/pages/me.tsx"),

  route("login", "./features/auth/pages/login.tsx"),
] satisfies RouteConfig;
