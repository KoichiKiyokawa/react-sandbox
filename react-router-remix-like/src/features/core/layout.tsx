import { Link, Outlet, useNavigation } from "react-router-dom"
import { makePath as makePath, ROUTES } from "./router"

export const MainLayout = () => {
  const navigation = useNavigation()
  if (navigation.state === "loading") return <span>Loading...</span>

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={makePath(ROUTES.PostList)}></Link>
          </li>
          <li>b</li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
