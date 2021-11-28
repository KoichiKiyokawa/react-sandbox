import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { Form } from "remix";
import { userSchema } from "../../../domains/user/schema";

export type ActionData = { errors: string[] };

export function UserForm({
  actionData,
  defaultValues,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSubmit = () => {},
  action,
}: {
  action?: string;
  actionData?: ActionData;
  defaultValues?: User;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}) {
  const {
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm<User>({
    defaultValues,
    resolver: zodResolver(userSchema),
    mode: "onTouched",
  });

  return (
    <Form method="post" onSubmit={onSubmit} action={action}>
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

      <button disabled={isSubmitting || !isValid}>submit</button>

      <ul>
        {actionData?.errors.map((message, i) => (message ? <li key={i}>{message}</li> : null))}
      </ul>
    </Form>
  );
}
