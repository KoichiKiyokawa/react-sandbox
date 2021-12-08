import { Link } from "remix";
import { Title } from "~/components/ui/Title";

export default function Index() {
  return (
    <>
      <Title>index page</Title>
      <Link to="/users" className="text-link">
        users
      </Link>
    </>
  );
}
