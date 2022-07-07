import StatusCode from "http-status-codes";
import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import {
  ArticleCard,
  type ArticleWithAuthorAndTag,
} from "~/domains/article/components/ArticleCard";
import { AuthService } from "~/domains/auth/service.server";
import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const currentUserId = await AuthService.getCurrentUserId(request);

  switch (form.get("type")) {
    // いいねのつけ外しをおこなう
    case "like": {
      if (!currentUserId) return redirect("/login");

      const articleSlug = form.get("articleSlug") as string;
      if (!articleSlug)
        return new Response("articleSlug is needed", { status: StatusCode.BAD_REQUEST });

      const like = await db.like.findFirst({
        where: { articleSlug, userId: currentUserId },
      });
      if (like) {
        await db.like.delete({ where: { id: like.id } });
      } else {
        await db.like.create({ data: { articleSlug, userId: currentUserId } });
      }
      return redirect(form.get("redirectTo") as string);
    }
  }
};

type LoaderData = { articles: ArticleWithAuthorAndTag[] };

export const loader: LoaderFunction = async ({ request }): Promise<LoaderData> => {
  const currentUserId = await AuthService.getCurrentUserId(request);
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
