import { ActionFunction, redirect } from "remix";
import { db } from "~/utils/db.server";
import { getCurrentUserId } from "~/utils/session.server";
import StatusCode from "http-status-codes";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const currentUserId = await getCurrentUserId();

  switch (form.get("type")) {
    case "like": {
      console.log("like");
      if (!currentUserId) return redirect("/login");

      const articleSlug = form.get("articleSlug") as string;
      if (!articleSlug)
        return new Response("articleSlug is needed", { status: StatusCode.BAD_REQUEST });

      await db.like.create({ data: { articleSlug, userId: currentUserId } });
      return redirect(form.get("redirectTo") as string);
    }
  }
};
