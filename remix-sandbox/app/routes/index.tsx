import { Link } from "remix";
import { Article } from "@prisma/client";
import { db } from "~/utils/db.server";

type LoaderData = { articles: Article[] };

export const loader = async (): Promise<LoaderData> => {
  return { articles: await db.article.findMany() };
};

export default function Index() {
  return (
    <>
      {/* Hero */}
      <div className="bg-primary text-center text-white py-8">
        <h1 className="text-[56px] font-extrabold">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>

      <ul>
        <li>
          <Link to="/">Global Feed</Link>
        </li>
      </ul>

      <Link to="/users" className="text-link">
        users
      </Link>
    </>
  );
}
