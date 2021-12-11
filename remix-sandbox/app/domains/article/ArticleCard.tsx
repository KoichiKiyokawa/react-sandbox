import { Article, Tag, User } from "@prisma/client";
import dayjs from "dayjs";
import { Link } from "remix";

export type ArticleWithAuthorAndTag = Article & { author: Pick<User, "id" | "name">; tags: Tag[] };

type Props = { data: ArticleWithAuthorAndTag };

const MAX_BODY_SHOW_LENGTH = 15;

export const ArticleCard = ({ data }: Props) => {
  return (
    <div>
      <div>
        <p className="text-primary">{data.author.name}</p>
        <p className="text-[#BBBBBB] text-sm">{dayjs(data.createdAt).format("YYYY-MM-DD")}</p>
      </div>

      <Link to={`/articles/${data.slug}`}>
        <h2 className="font-bold text-[1.5rem]">{data.title}</h2>
        <p className="text-[#999999]">{data.body.slice(0, MAX_BODY_SHOW_LENGTH)}</p>

        <span className="text-[#BBBBBB]">Read more...</span>
      </Link>
    </div>
  );
};
