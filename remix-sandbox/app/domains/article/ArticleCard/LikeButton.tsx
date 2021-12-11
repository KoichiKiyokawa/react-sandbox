import classNames from "classnames";
import React from "react";
import { FiHeart } from "react-icons/fi";
import { Form } from "remix";

export const LikeButton = ({
  articleSlug,
  likeCount,
  hasLiked,
  ...props
}: {
  articleSlug: string;
  likeCount: number;
  hasLiked: boolean;
} & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <Form method="post">
      <input type="hidden" name="type" value="like" />
      <input type="hidden" name="redirectTo" value="/" />
      <input type="hidden" name="articleSlug" value={articleSlug} />

      <button
        {...props}
        className={classNames(
          "flex items-center space-x-2",
          hasLiked
            ? "bg-primary text-white"
            : "bg-white text-primary px-2 py-1 border border-primary rounded",
          props.className
        )}
      >
        <FiHeart />
        <span className="text-sm">{likeCount}</span>
      </button>
    </Form>
  );
};
