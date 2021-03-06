import { redirect, type ActionFunction } from "@remix-run/node";
import { AuthService } from "~/domains/auth/service.server";

export const action: ActionFunction = async ({ request }) => {
  const currentUserId = await AuthService.getCurrentUserId(request);
  if (!currentUserId) return redirect("/");
  return await AuthService.logout(request);
};
