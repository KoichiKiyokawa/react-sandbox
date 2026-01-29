import { os } from "@orpc/server";
import { oz } from "@orpc/zod";
import { randomUUID } from "node:crypto";
import { z } from "zod";

const userSchema = oz.openapi(
  z.object({
    id: oz.openapi(z.string().uuid(), { description: "The user ID" }),
    name: oz.openapi(z.string(), {
      description: "The user name",
      examples: ["John"],
    }),
  }),
  { description: "A user" }
);

export const userRouter = {
  list: os
    .route({
      method: "GET",
      path: "/users",
      description: "List users",
    })
    .output(z.object({ users: userSchema.array() }))
    .handler(async () => {
      return { users: [{ id: randomUUID(), name: "John" }] };
    }),
  detail: os
    .route({
      method: "GET",
      path: "/users/{id}",
      description: "Get a user",
    })
    .input(z.object({ id: z.string().uuid() }))
    .output(userSchema)
    .handler(async ({ input }) => {
      return { id: input.id, name: "John" };
    }),
  create: os
    .route({
      method: "POST",
      path: "/users",
      description: "Create a user",
    })
    .input(userSchema.omit({ id: true }))
    .output(userSchema)
    .handler(async ({ input }) => {
      return { id: randomUUID(), ...input };
    }),
  update: os
    .route({
      method: "PUT",
      path: "/users/{id}",
      description: "Update a user",
    })
    .input(userSchema.partial().extend({ id: userSchema.shape.id }))
    .output(userSchema)
    .handler(async ({ input }) => {
      return { id: randomUUID(), ...input };
    }),
};
