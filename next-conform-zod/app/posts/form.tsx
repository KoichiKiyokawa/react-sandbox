"use client";

import { Button } from "@/components/ui/Button";
import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useFormState } from "react-dom";
import { twc } from "react-twc";
import { z } from "zod";
import { createPost } from "./action";
import { postFormSchema } from "./schema";

const Label = twc.label`block`;
const Input = twc.input`block border border-gray-300 rounded-md p-2 w-full aria-invalid:border-red-500`;
const ErrorMessage = twc.div.attrs((props) =>
  props.children ? { role: "alert" } : { "aria-hidden": true }
)`text-red-500 min-h-[1.5rem]`;

type Props = {
  action: typeof createPost;
  initialData?: z.infer<typeof postFormSchema> & { id: string };
};

export function PostForm({ action, initialData }: Props) {
  const [lastResult, formAction] = useFormState(action, undefined);
  const [form, fields] = useForm({
    lastResult,
    shouldValidate: "onBlur",
    defaultValue: initialData,
    onValidate: ({ formData }) =>
      parseWithZod(formData, {
        schema: postFormSchema,
      }),
  });

  return (
    <form
      className="space-y-4 container mx-auto"
      action={formAction}
      {...getFormProps(form)}
    >
      {initialData && <input type="hidden" name="id" value={initialData.id} />}

      <Label>
        <span>title</span>
        <Input {...getInputProps(fields.title, { type: "text" })} />
        <ErrorMessage>{fields.title.errors}</ErrorMessage>
      </Label>

      <Label>
        <span>body</span>
        <Input {...getInputProps(fields.body, { type: "text" })} />
        <ErrorMessage>{fields.body.errors}</ErrorMessage>
      </Label>

      <Label>
        <span className="block">comments</span>
        {fields.comments.getFieldList().map((comment, index) => {
          const commentFields = comment.getFieldset();
          return (
            <div key={comment.key}>
              <input
                {...getInputProps(commentFields.id, { type: "hidden" })}
                // Avoid: `Warning: A props object containing a "key" prop is being spread into JSX
                key={undefined}
              />

              <div className="flex">
                <Input
                  {...getInputProps(commentFields.text, { type: "text" })}
                  key={undefined}
                />
                <Button
                  type="submit"
                  {...form.remove.getButtonProps({
                    name: fields.comments.name,
                    index,
                  })}
                >
                  x
                </Button>
              </div>
              <ErrorMessage>{commentFields.text.errors}</ErrorMessage>
            </div>
          );
        })}
        <Button
          type="submit"
          {...form.insert.getButtonProps({ name: fields.comments.name })}
        >
          add
        </Button>
      </Label>

      <Button type="submit">Submit</Button>
    </form>
  );
}
