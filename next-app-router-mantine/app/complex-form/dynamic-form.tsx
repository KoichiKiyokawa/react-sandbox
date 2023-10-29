"use client";

import { Box, Button, Input } from "@mantine/core";
import { useReducer } from "react";

export const DynamicForm = () => {
  const [fields, add] = useReducer(
    (prev: number[]) => [...prev, Date.now()],
    []
  );

  return (
    <Box>
      {fields.map((f, i) => (
        <Input key={f} name={`hoge.${i}`} />
      ))}
      <Button onClick={add}>Add</Button>
    </Box>
  );
};
