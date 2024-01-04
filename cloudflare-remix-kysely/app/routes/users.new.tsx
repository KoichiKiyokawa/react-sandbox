import { ActionFunction } from "@remix-run/cloudflare";
import { z } from "zod";
import { db } from "~/lib/db";
import { randomUUID } from "crypto";

const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3).max(32),
});

export const action = (async ({ request }) => {
  const res = CreateUserSchema.safeParse(
    Object.fromEntries(await request.formData())
  );
  if (!res.success)
    return {
      error: "Invalid form data",
    };

  await db
    .insertInto("User")
    .values({ id: randomUUID(), ...res.data })
    .execute();
}) satisfies ActionFunction;

export default function UserNewPage() {
  return <form action=""></form>;
}
