import { Form, Link, NavLink, useLocation } from "@remix-run/react";

type Props = {
  isLoggedIn: boolean;
};

export const Header = ({ isLoggedIn }: Props) => {
  const location = useLocation();

  return (
    <nav className="container flex justify-between items-center px-4 py-2 mx-auto">
      <Link to="/" className="text-primary text-[1.5rem] font-bold">
        conduit
      </Link>

      <ul className="flex space-x-4 text-[#0000004D]">
        {[
          { path: "/", name: "Home" },
          !isLoggedIn && { path: "/login", name: "Sign in" },
          !isLoggedIn && { path: "/register", name: "Sign up" },
        ].map(
          (item, i) =>
            item && (
              <li key={i}>
                <NavLink
                  to={item.path}
                  className={location.pathname === item.path ? "text-[#000000CC]" : ""}
                >
                  {item.name}
                </NavLink>
              </li>
            )
        )}
        {isLoggedIn && (
          <li>
            <Form method="post" action="/logout">
              <input type="hidden" name="type" value="logout" />
              <button>Sign out</button>
            </Form>
          </li>
        )}
      </ul>
    </nav>
  );
};
