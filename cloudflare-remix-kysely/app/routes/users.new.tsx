import { ActionFunctionArgs } from "@remix-run/cloudflare";
import { UserService } from "~/features/user/service.server";

export const action = async ({ request, context }: ActionFunctionArgs) => {
  const userService = new UserService(context);
  await userService.create(Object.fromEntries(await request.formData()));
};

export default function UserNewPage() {
  return <form action=""></form>;
}
