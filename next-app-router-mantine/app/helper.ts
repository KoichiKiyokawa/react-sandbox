import { User } from "@prisma/client";

export const userKey = (name: keyof User) => name;
