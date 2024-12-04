import { Form } from "react-router";
import { headers } from "~/root";

export function action() {
  return redirect("/login", {
    headers: {
      "Set-Cookie": logou,
    },
  });
}

export default function MainLayouy({ children }: React.PropsWithChildren) {
  return (
    <div>
      <header>
        <nav>
          <Form method="post">
            <button>logout</button>
          </Form>
        </nav>
      </header>
      {children}
    </div>
  );
}
