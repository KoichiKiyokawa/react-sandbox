import StatusCode from "http-status-codes";
import { ActionFunction, Link, LoaderFunction, redirect, useLoaderData } from "remix";
import { ArticleCard, ArticleWithAuthorAndTag } from "~/domains/article/ArticleCard";
import { db } from "~/utils/db.server";
import { getCurrentUserId } from "~/utils/session.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const currentUserId = await getCurrentUserId(request);

  switch (form.get("type")) {
    case "like": {
      if (!currentUserId) return redirect("/login");

      const articleSlug = form.get("articleSlug") as string;
      if (!articleSlug)
        return new Response("articleSlug is needed", { status: StatusCode.BAD_REQUEST });

      await db.like.create({ data: { articleSlug, userId: currentUserId } });
      return redirect(form.get("redirectTo") as string);
    }
  }
};

type LoaderData = { articles: ArticleWithAuthorAndTag[] };

export const loader: LoaderFunction = async ({ request }): Promise<LoaderData> => {
  const currentUserId = await getCurrentUserId(request);
  const data = await db.article.findMany({
    include: {
      author: { select: { id: true, name: true } },
      tags: true,
      likes: { where: { userId: currentUserId ?? undefined } },
      _count: { select: { likes: true } },
    },
  });

  return {
    articles: data.map((datum) => ({
      ...datum,
      likeCount: datum._count.likes,
      hasLiked: datum.likes.length > 0,
    })),
  };
};

export default function Index() {
  const { articles } = useLoaderData<LoaderData>();

  return (
    <>
      {/* Hero */}
      <div className="bg-primary text-center text-white py-8">
        <h1 className="text-[56px] font-extrabold">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>

      {/* Tab */}
      <div className="container mx-auto">
        <ul className="flex border-b border-gray-100">
          <li className="text-primary border-b border-primary">
            <Link to="/" className="block py-2">
              Global Feed
            </Link>
          </li>
        </ul>

        {/* Articles */}
        {articles.map((article) => (
          <div key={article.slug} className="py-6 border-b border-gray-300 last:border-b-0">
            <ArticleCard data={article} currentUserId="" />
          </div>
        ))}
      </div>
    </>
  );
}
