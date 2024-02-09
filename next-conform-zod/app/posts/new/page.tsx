import { createPost } from "../action";
import { PostForm } from "../form";

export default async function PostNewPage() {
  return <PostForm action={createPost} />;
}
