import { Button } from "@/components/ui/Button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function PostIndexPage() {
  const posts = await prisma.post.findMany();

  return (
    <div>
      <h1>Posts</h1>
      <Button asChild>
        <Link href="/posts/new">New Post</Link>
      </Button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <Button asChild>
              <Link href={`/posts/${post.id}/edit`}>edit</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
