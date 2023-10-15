"use client";

import { Button } from "@mantine/core";

type Props = {
  name: string;
  value: string;
  action: React.FormHTMLAttributes<HTMLFormElement>["action"];
};

export const DeleteButtonWithForm: React.FC<Props> = ({
  name,
  value,
  action,
}) => {
  return (
    <form
      method="post"
      action={action}
      onSubmit={(e) => window.confirm("OK？") || e.preventDefault()}
    >
      <input type="hidden" name={name} value={value} />
      <Button type="submit" color="red">
        削除
      </Button>
    </form>
  );
};
