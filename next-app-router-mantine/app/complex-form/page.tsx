import {
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  InputWrapper,
} from "@mantine/core";
import { DynamicForm } from "./dynamic-form";

type Form = {
  name: string;
  tags: string[];
  [key: `hoge.${number}`]: string;
};

const n = (f: keyof Form) => f;

async function action(formData: FormData) {
  "use server";

  const data = {
    name: String(formData.get(n("name"))),
    tags: formData.getAll(n("tags")),
    hoge: Array.from(formData.entries()).reduce(
      (acc, [k]) =>
        /hoge\.\d+/.test(k) ? [...acc, String(formData.get(k))] : acc,
      [] as string[]
    ),
  };

  console.log(data);
}

export default async function ComplexFormPage() {
  return (
    <form method="POST" action={action}>
      <InputWrapper label="name">
        <Input name={n("name")} />
      </InputWrapper>

      <CheckboxGroup>
        <Checkbox name={n("tags")} value="foo" label="foo" />
        <Checkbox name={n("tags")} value="bar" label="bar" />
      </CheckboxGroup>

      <DynamicForm />

      <Button type="submit">Submit</Button>
    </form>
  );
}
