import { Article } from "@prisma/client";

type Props = {
  article: Article;
};

export const ArticleCard = ({ article }: Props) => {
  return (
    <div>
      <h2>{article.title}</h2>
    </div>
  );
};
