import { ActionFunction, redirect } from "remix";
import { getCurrentUserId, logout } from "~/utils/session.server";

export const action: ActionFunction = async ({ request }) => {
  const currentUserId = await getCurrentUserId(request);
  if (!currentUserId) return redirect("/");
  return await logout(request);
};
