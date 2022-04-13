import type { ActionFunction, LoaderFunction } from "@remix-run/server-runtime";

/**
 * GET /api/webhook
 */
export const loader: LoaderFunction = () => {
  return { message: "ok" };
};

/**
 * POST /api/webhook
 */
export const action: ActionFunction = ({ request }) => {
  console.log(request.method);
  return { message: request.method };
};
