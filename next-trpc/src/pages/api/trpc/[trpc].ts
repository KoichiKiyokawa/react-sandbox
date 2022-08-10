import { createRouter } from "@/lib/trpc.server";
import { todoRouter } from "@/features/todo/router";

export const appRouter = createRouter().merge(todoRouter);

export type AppRouter = typeof appRouter;
