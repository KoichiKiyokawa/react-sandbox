import { UserService } from "@/features/user";

export default async function DetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const user = await UserService.find(id);
  return JSON.stringify(user);
}
