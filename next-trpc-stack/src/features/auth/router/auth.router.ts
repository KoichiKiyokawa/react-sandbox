import { procedure, router } from "@/lib/trpc/server";

import { loginSchema } from "../schemas/login.schema";
import bcrypt from "bcryptjs";
import * as R from "remeda";
import { signUpSchema } from "../schemas/sign-up.schema";

const authError = Error("Invalid email or password.");

export const authRouter = router({
	login: procedure.input(loginSchema).mutation(async ({ input, ctx }) => {
		const targetUser = await ctx.db.user.findUnique({
			where: { email: input.email },
		});

		if (targetUser === null) throw authError;

		const ok = await bcrypt.compare(input.password, targetUser.passwordHash);
		if (!ok) throw authError;

		ctx.setCurrentUserId(targetUser.id);
		return R.omit(targetUser, ["passwordHash"]);
	}),

	logout: procedure.mutation(({ ctx }) => {
		ctx.setCurrentUserId(null);
		return { ok: true };
	}),

	signUp: procedure.input(signUpSchema).mutation(async ({ input, ctx }) => {
		const user = await ctx.db.user.create({
			data: {
				name: input.name,
				email: input.email,
				passwordHash: await bcrypt.hash(input.password, 10),
			},
		});
		ctx.setCurrentUserId(user.id);
		return user;
	}),

	currentUser: procedure.query(({ ctx }) => {
		const userId = ctx.getCurrentUserId();
		if (userId === null) return null;

		return ctx.db.user.findUnique({ where: { id: Number(userId) } });
	}),
});
