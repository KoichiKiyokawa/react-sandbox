import { useRouteParam } from "@/features/core/hooks/useRouteParam";
import { updatePostSchema } from "@/features/post/schema/update-post.schema";
import { trpc } from "@/lib/trpc/client";
import { buildPath } from "@/path";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function PostEditPage() {
  const router = useRouter();
  const params = useRouteParam<{ id: string }>();
  const id = Number(params.id);
  const { data } = trpc.post.show.useQuery({ id });
  const mutation = trpc.post.update.useMutation();
  const { register, formState, handleSubmit } = useForm<z.infer<typeof updatePostSchema>>({
    resolver: zodResolver(updatePostSchema),
    defaultValues: data ?? {},
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(
      { id, data },
      {
        onSuccess: () => {
          router.push(buildPath("/[id]", { id }));
        },
      }
    );
  });

  return (
    <form onSubmit={onSubmit}>
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
  );
}
