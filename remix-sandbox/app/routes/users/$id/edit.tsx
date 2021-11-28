import { User, Tag } from "@prisma/client";
import { DataFunctionArgs, LoaderFunction, redirect } from "@remix-run/server-runtime";
import dayjs from "dayjs";
import { useActionData, useLoaderData } from "remix";
import { ActionData, UserForm } from "~/components/domains/user/UserForm";
import { userSchema } from "~/domains/user/schema";
import { db } from "~/utils/db.server";
import { validateRequestBySchema } from "~/utils/validate.server";

export const loader: LoaderFunction = async ({ params }) => {
  const [user, tags] = await Promise.all([
    db.user.findUnique({ where: { id: params.id } }),
    db.tag.findMany(),
  ]);
  if (!user) return new Response("not found", { status: 404 });
  return { users: { ...user, birthday: dayjs(user.birthday).format("YYYY-MM-DD") }, tags };
};

export async function action({
  params,
  request,
}: DataFunctionArgs): Promise<ActionData | Response | null> {
  const { data, errors } = await validateRequestBySchema(request, userSchema);
  if (errors) return { errors };
  if (!data) return null;

  try {
    await db.user.update({
      where: { id: params.id },
      data: { ...data, birthday: new Date(data?.birthday) },
    });
    return redirect(`/users/${params.id}`);
  } catch {
    return { errors: ["failed to save"] };
  }
}

export default function UserEdit() {
  const { user, tags } = useLoaderData<{ user: User; tags: Tag[] }>();
  const actionData = useActionData<ActionData | undefined>();

  return (
    <main>
      <h1>Edit User</h1>
      <UserForm defaultValues={user} actionData={actionData} tags={tags} />
    </main>
  );
}
