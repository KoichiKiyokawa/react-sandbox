import { CookieKey } from "@/features/auth/constants";
import { db } from "@/lib/db";
import type { User } from "@prisma/client";
import { initTRPC } from "@trpc/server";
import type { NodeHTTPCreateContextFnOptions } from "@trpc/server/dist/adapters/node-http";
import type { NextApiRequest, NextApiResponse } from "next";

export function createContext(
	opts: NodeHTTPCreateContextFnOptions<NextApiRequest, NextApiResponse<any>>,
) {
	const getCurrentUserId = () => opts.req.cookies[CookieKey.UserId] ?? null;
	const setCurrentUserId = (userId: User["id"] | null) => {
		if (userId === null) opts.req.cookies[CookieKey.UserId] = undefined;
		else opts.req.cookies[CookieKey.UserId] = userId.toString();
	};
	return {
		getCurrentUserId,
		setCurrentUserId,
		db,
	};
}

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.context<ReturnType<typeof createContext>>().create();

// Base router and procedure helpers
export const router = t.router;
export const procedure = t.procedure;
