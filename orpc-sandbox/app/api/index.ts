import { OpenAPIHandler } from "@orpc/openapi/fetch";
import { ZodSmartCoercionPlugin } from "@orpc/zod";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { router } from "./router";

const openAPIHandler = new OpenAPIHandler(router, {
  plugins: [new ZodSmartCoercionPlugin()],
});

async function handleRequest(request: Request) {
  const { response } = await openAPIHandler.handle(request, {
    prefix: "/api",
    context: {}, // Provide initial context if needed
  });

  return response ?? new Response("Not Found", { status: 404 });
}

export async function loader({ request }: LoaderFunctionArgs) {
  return handleRequest(request);
}

export async function action({ request }: ActionFunctionArgs) {
  return handleRequest(request);
}
