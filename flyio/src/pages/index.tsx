import { createPostSchema } from "@/features/post/schema/create-post.schema";
import { db } from "@/lib/db";
import { trpc } from "@/lib/trpc/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { GetServerSideProps } from "next";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";

export const getServerSideProps = (async () => {
  const posts = await db.post.findMany();

  return {
    props: { posts },
  };
}) satisfies GetServerSideProps;

export default function Home() {
  const { data: posts, refetch: refetchPosts } = trpc.post.list.useQuery();
  const { register, formState, handleSubmit } = useForm<z.infer<typeof createPostSchema>>({
    resolver: zodResolver(createPostSchema),
  });

  const formRef = useRef<HTMLFormElement>(null);
  const mutation = trpc.post.create.useMutation();
  const onSubmit = handleSubmit(async (data) => {
    mutation.mutate(data, {
      onSuccess: () => {
        refetchPosts();
        formRef.current?.reset();
      },
    });
  });

  if (!posts) return <div>Loading...</div>;

  return (
    <main>
      <form ref={formRef} onSubmit={onSubmit}>
        <label>
          <span>title</span>
          <input {...register("title")} />
        </label>

        <label>
          <span>content</span>
          <textarea {...register("content")} />
        </label>

        <button disabled={formState.isSubmitting}>submit</button>
      </form>

      {posts.map((post) => (
        <Link href={post.id.toString()} key={post.id}>
          <h2>{post.title}</h2>
          <pre>{post.content}</pre>
        </Link>
      ))}
    </main>
  );
}
