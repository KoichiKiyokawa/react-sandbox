import { UserService } from "@/features/user";
import Link from "next/link";

async function createUserAction(formData: FormData) {
  "use server";
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  await UserService.create({ name, email });
}

export default async function Home() {
  const users = await UserService.findAll();

  return (
    <div className="space-y-4 m-4">
      <form action={createUserAction}>
        <input name="name" />
        <input name="email" />
        <button>submit</button>
      </form>

      {users.map((user) => (
        <Link key={user.id} href={`/${user.id}`} className="block p-4 border">
          <p>{user.name}</p>
          <p>{user.email}</p>
        </Link>
      ))}
    </div>
  );
}
