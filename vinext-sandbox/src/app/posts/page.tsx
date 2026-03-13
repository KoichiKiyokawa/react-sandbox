import { desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { accounts, posts } from "@/db/schema";

export default async function PostsPage() {
  const result = await db
    .select({
      id: posts.id,
      title: posts.title,
      body: posts.body,
      createdAt: posts.createdAt,
      authorName: accounts.name,
    })
    .from(posts)
    .innerJoin(accounts, eq(posts.accountId, accounts.id))
    .orderBy(desc(posts.createdAt));

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">投稿一覧</h1>
      <div className="space-y-4">
        {result.map((post) => (
          <article
            key={post.id}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4">{post.body}</p>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>{post.authorName}</span>
              <span>
                {new Date(post.createdAt).toLocaleDateString("ja-JP")}
              </span>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
