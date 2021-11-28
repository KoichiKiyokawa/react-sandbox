import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { Form } from "remix";
import { userSchema } from "../../../domains/user/schema";
import { Tag } from "@prisma/client";
import { Button } from "~/components/ui/Button";

export type ActionData = { errors: string[] };

export function UserForm({
  actionData,
  defaultValues,
  tags,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSubmit = () => {},
  action,
}: {
  action?: string;
  actionData?: ActionData;
  defaultValues?: User;
  tags: Tag[];
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}) {
  const {
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm<User & { tagIds: string[] }>({
    defaultValues,
    resolver: zodResolver(userSchema),
    mode: "onTouched",
  });

  return (
    <Form method="post" onSubmit={onSubmit} action={action} className="border p-2">
      <label>
        name: <input {...register("name")} />
      </label>
      {errors.name && <p>{errors.name.message}</p>}
      <label>
        email: <input type="email" {...register("email")} />
      </label>
      {errors.email && <p>{errors.email.message}</p>}

      <label>
        birthday: <input type="date" {...register("birthday")} />
      </label>
      {errors.birthday && <p>{errors.birthday.message}</p>}

      <fieldset>
        {tags.map((tag) => (
          <label key={tag.id}>
            {tag.name}
            <input type="checkbox" {...register("tagIds")} />
          </label>
        ))}
      </fieldset>

      <Button disabled={isSubmitting || !isValid}>submit</Button>

      <ul>
        {actionData?.errors.map((message, i) => (message ? <li key={i}>{message}</li> : null))}
      </ul>
    </Form>
  );
}
