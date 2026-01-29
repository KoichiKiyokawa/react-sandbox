import { OpenAPIGenerator } from "@orpc/openapi";
import { ZodToJsonSchemaConverter } from "@orpc/zod";
import type { LoaderFunctionArgs } from "react-router";
import { router } from "./router";

const openAPIGenerator = new OpenAPIGenerator({
  schemaConverters: [new ZodToJsonSchemaConverter()],
});

export async function loader({}: LoaderFunctionArgs) {
  const spec = await openAPIGenerator.generate(router, {
    info: {
      title: "My Playground",
      version: "1.0.0",
    },
    servers: [{ url: "/api" } /** Should use absolute URLs in production */],
    security: [{ bearerAuth: [] }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },
    },
  });

  return spec;
}
