import { Button, Container, Input, InputWrapper } from "@mantine/core";
import { userKey } from "../helper";
import { createUser } from "../action";

export default async function NewPage() {
  return (
    <Container>
      <form method="POST" action={createUser}>
        <InputWrapper label="name">
          <Input name={userKey("name")} />
        </InputWrapper>

        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </Container>
  );
}
