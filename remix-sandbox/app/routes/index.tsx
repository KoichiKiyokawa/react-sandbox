import { Link, useLoaderData } from "remix";
import { db } from "~/utils/db.server";
import { ArticleCard, ArticleWithAuthorAndTag } from "~/domains/article/ArticleCard";

type LoaderData = { articles: ArticleWithAuthorAndTag[] };

export const loader = async (): Promise<LoaderData> => {
  return {
    articles: await db.article.findMany({
      include: { author: { select: { id: true, name: true } }, tags: true },
    }),
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
            <ArticleCard data={article} />
          </div>
        ))}
      </div>
    </>
  );
}
