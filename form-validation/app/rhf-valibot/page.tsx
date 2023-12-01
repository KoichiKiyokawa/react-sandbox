"use client";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { FieldError, FieldPath, useForm } from "react-hook-form";
import * as v from "valibot";

function useLang(): "ja" | "en" {
  return "ja";
}

const jaDict = {
  name: "氏名",
  password: "パスワード",
  passwordConfirm: "確認パスワード",
  submit: "送信",
  errors: {
    name: {
      minLength: "ユーザー名は3文字以上で入力してください",
    },
    password: {
      required: "パスワードを入力してください",
      minLength: "パスワードは8文字以上で入力してください",
    },
    passwordConfirm: {
      required: "確認パスワードを入力してください",
      notMatch: "パスワードが一致しません",
    },
  },
};

const enDict: typeof jaDict = {
  name: "name",
  password: "password",
  passwordConfirm: "password confirmation",
  submit: "submit",
  errors: {
    name: {
      minLength: "name must be at least 3 characters",
    },
    password: {
      required: "password is required",
      minLength: "password must be at least 8 characters",
    },
    passwordConfirm: {
      required: "password confirmation is required",
      notMatch: "passwords do not match",
    },
  },
};

const errorPath = (path: FieldPath<(typeof jaDict)["errors"]>) => path;

const Schema = v.object(
  {
    name: v.string([v.minLength(3, errorPath("name.minLength"))]),
    password: v.string(errorPath("password.required"), [
      v.minLength(8, errorPath("password.minLength")),
    ]),
    passwordConfirm: v.string(errorPath("passwordConfirm.required"), [
      v.minLength(8, errorPath("password.minLength")),
    ]),
  },
  [
    v.custom(
      (input) => input.password === input.passwordConfirm,
      errorPath("passwordConfirm.notMatch")
    ),
  ]
);

const ErrorMessage = ({ error }: { error?: FieldError }) => {
  const lang = useLang();

  if (!error?.message) return null;

  const dict = lang === "ja" ? jaDict : enDict;
  let errorMessage: any = dict.errors;
  for (const key of error.message.split(".")) {
    if (key in errorMessage) errorMessage = errorMessage[key];
  }

  return <div className="text-red-500">{errorMessage}</div>;
};

export default function Page() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<v.Output<typeof Schema>>({
    mode: "onBlur",
    resolver: valibotResolver(Schema),
  });

  const dict = useLang() === "ja" ? jaDict : enDict;

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <label className="block">
        {dict.name}:
        <input {...register("name")} />
      </label>
      <ErrorMessage error={errors.name} />

      <label className="block">
        {dict.password}:
        <input type="password" {...register("password")} />
      </label>
      <ErrorMessage error={errors.password} />

      <label className="block">
        {dict.passwordConfirm}:
        <input type="password" {...register("passwordConfirm")} />
      </label>
      <ErrorMessage error={errors.passwordConfirm} />

      <button>{dict.submit}</button>
    </form>
  );
}
