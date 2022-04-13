import { type ActionFunction, Form, json, Link, useActionData } from "remix";
import { loginSchema } from "~/domains/auth/schema";
import { AuthService } from "~/domains/auth/service.server";
import { Button } from "~/domains/ui/Button";
import { TextInput } from "~/domains/ui/TextInput";
import { validateRequestBySchema } from "~/utils/validate.server";

type ActionData = { errorMessage: string };

export const action: ActionFunction = async ({ request }) => {
  const { data } = await validateRequestBySchema(request, loginSchema);
  if (!data) return json({ errorMessage: "username or password is wrong." }, { status: 401 });
  const user = await AuthService.login(data);
  if (!user) return json({ errorMessage: "username or password is wrong." }, { status: 401 });

  return AuthService.createUserSession(user.id, "/");
};

const Login = () => {
  const actionData = useActionData<ActionData>();

  return (
    <div className="container mx-auto">
      <div className="text-center">
        <h1 className="text-[2.5rem]">Sign in</h1>
        <Link to="/register" className="text-primary">
          Need an account?
        </Link>
      </div>

      <Form method="post" className="max-w-md mx-auto mt-8">
        {actionData?.errorMessage && (
          <p className="border border-red-500 bg-red-400 text-white p-2 rounded">
            {actionData?.errorMessage}
          </p>
        )}
        <TextInput type="email" name="email" placeholder="Email" className="block w-full mt-4" />
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
