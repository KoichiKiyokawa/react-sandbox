import type { Article, Tag, User } from "@prisma/client";
import dayjs from "dayjs";
import { Link } from "@remix-run/react";
import { LikeButton } from "./LikeButton";

export type ArticleWithAuthorAndTag = Article & {
  author: Pick<User, "id" | "name">;
  tags: Tag[];
  likeCount: number;
  hasLiked: boolean;
};

type Props = { data: ArticleWithAuthorAndTag; currentUserId: string };

const MAX_BODY_SHOW_LENGTH = 15;

export const ArticleCard = ({ data }: Props) => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <p className="text-primary">{data.author.name}</p>
          <p className="text-[#BBBBBB] text-sm">{dayjs(data.createdAt).format("YYYY-MM-DD")}</p>
        </div>

        <LikeButton likeCount={data.likeCount} hasLiked={data.hasLiked} articleSlug={data.slug} />
      </div>

      <Link to={`/articles/${data.slug}`}>
        <h2 className="font-bold text-[1.5rem]">{data.title}</h2>
        <p className="text-[#999999]">{data.body.slice(0, MAX_BODY_SHOW_LENGTH)}</p>

        <span className="text-[#BBBBBB]">Read more...</span>
      </Link>
    </div>
  );
};
