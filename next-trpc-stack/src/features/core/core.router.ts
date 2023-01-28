import { z } from "zod";
import { procedure, router } from "@/lib/trpc/server";
import { authRouter } from "../auth/router/auth.router";

export const appRouter = router({
	hello: procedure
		.input(
			z.object({
				text: z.string(),
			}),
		)
		.query(({ input }) => {
			return {
				greeting: `hello ${input.text}`,
			};
		}),
	auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
