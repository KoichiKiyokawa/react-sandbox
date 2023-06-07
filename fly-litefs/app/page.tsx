import { db } from "@/lib/db";
import bigImage from "@/public/big.jpg";
import { cookies } from "next/headers";
import Image from "next/image";
import { Form } from "./components/form";

export default async function Home() {
  cookies(); // Static Render を回避するために空打ちする
  const posts = await db.post.findMany();

  return (
    <div className="relative">
      <Image
        src={bigImage}
        alt="wallpaper"
        placeholder="blur"
        className="fixed inset-0 "
      />

      <div className="absolute z-10">
        <Form />
        <pre>{JSON.stringify(posts, null, 2)}</pre>
      </div>
    </div>
  );
}
