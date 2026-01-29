import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("users", "features/user/pages/user-list.tsx"),
  route("users/:id", "features/user/pages/user-detail.tsx"),

  route("api/docs", "api/doc.ts"),
  route("api/spec.json", "api/spec.ts"),
  route("api/*", "api/index.ts"),
] satisfies RouteConfig;
