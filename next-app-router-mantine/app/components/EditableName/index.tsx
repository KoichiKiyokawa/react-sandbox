"use client";

import { Button, Flex, Input, Text } from "@mantine/core";
import { useState, useTransition } from "react";

type Props = {
  id: string;
  defaultValue: string;
  action: (formData: FormData) => Promise<void>;
};

export const EditableName: React.FC<Props> = ({ id, defaultValue, action }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    startTransition(async () => {
      await action(new FormData(e.currentTarget));
      setIsEditing(false);
    });
  };

  return (
    <Flex w={252} direction="row" justify="space-between" align="center">
      {isEditing ? (
        <form method="post" onSubmit={handleSubmit}>
          <input type="hidden" name="id" value={id} />
          <Input
            name="name"
            defaultValue={defaultValue}
            display="inline-block"
          />
          <Button type="submit" disabled={isPending} ml={4}>
            確定
          </Button>
        </form>
      ) : (
        <>
          <Text>{defaultValue}</Text>
          <Button onClick={() => setIsEditing(true)} ml={4}>
            編集
          </Button>
        </>
      )}
    </Flex>
  );
};
