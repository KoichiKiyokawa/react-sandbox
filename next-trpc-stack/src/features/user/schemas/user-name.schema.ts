import { z } from "zod";

export const userNameSchema = z.string().min(1).max(64);
