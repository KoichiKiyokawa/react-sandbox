import { useFieldArray, useForm } from "react-hook-form";
import { ActionFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { Button } from "~/domains/ui/Button";
import { TextInput } from "~/domains/ui/TextInput";

export const action: ActionFunction = async ({ request }) => {
  console.log(await request.formData());
  return null;
};

type FormData = { values: { value: string }[] };

export default function Dynamic() {
  // const submit = useSubmit();
  const { register, control } = useForm<FormData>({
    defaultValues: { values: [{ value: "" }] },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "values",
  });

  // const onSubmit = (data: FormData) => {
  //   console.log(data);
  //   submit({ values: JSON.stringify(data.values) }, { method: "post", action: useFormAction("") });
  // };

  return (
    <Form method="post">
      {fields.map((field, i) => (
        <div key={field.id}>
          <TextInput {...register(`values.${i}.value`)} />
          <Button type="button" className="bg-red-400" onClick={() => remove(i)}>
            delete
          </Button>
        </div>
      ))}

      <Button type="button" onClick={() => append({})}>
        Add
      </Button>

      <div className="mt-8">
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
}
