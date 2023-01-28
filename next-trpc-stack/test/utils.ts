import { db } from "@/lib/db";
import type { PrismaClient } from "@prisma/client";

class Rollback extends Error {}

export const withTransactionalDB = async (
	testCase: (prisma: PrismaClient) => Promise<void>,
) => {
	await db
		.$transaction(async (tx) => {
			await testCase(tx as PrismaClient);
			throw new Rollback();
		})
		.catch((e) => {
			if (e instanceof Rollback) return;
			throw e;
		});
};
