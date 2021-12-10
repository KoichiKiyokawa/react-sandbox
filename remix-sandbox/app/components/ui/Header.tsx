import { Link, NavLink, useLocation } from "remix";

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

      <ul className="flex space-x-4">
        {[
          { path: "/", name: "Home" },
          !isLoggedIn && { path: "/login", name: "Sign in" },
          { path: "/register", name: "Sign up" },
        ].map(
          (item, i) =>
            item && (
              <li key={i}>
                <NavLink
                  to={item.path}
                  className={
                    location.pathname === item.path ? "text-[#000000CC]" : "text-[#0000004D]"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};
