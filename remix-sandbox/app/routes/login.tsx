import { ActionFunction, Form, Link } from "remix";
import { Button } from "~/components/ui/Button";
import { TextInput } from "~/components/ui/TextInput";
import { loginSchema } from "~/domains/auth/schema";
import { createUserSession, login } from "~/utils/session.server";
import { validateRequestBySchema } from "~/utils/validate.server";

export const action: ActionFunction = async ({ request }) => {
  const { data } = await validateRequestBySchema(request, loginSchema);
  if (!data) throw new Response("Unauthorized", { status: 401 });
  const user = await login(data);
  if (!user) throw new Response("Unauthorized", { status: 401 });

  return createUserSession(user.id, "/");
};

const Login = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <h1 className="text-[2.5rem]">Sign in</h1>
        <Link to="/register" className="text-primary">
          Need an account?
        </Link>
      </div>

      <Form method="post" className="max-w-md mx-auto mt-8">
        <TextInput type="email" name="email" placeholder="Email" className="block w-full" />
        <TextInput
          type="password"
          name="password"
          placeholder="Password"
          className="block w-full mt-4"
        />
        <Button className="mt-4 float-right">Sign in</Button>
      </Form>
    </div>
  );
};

export default Login;
