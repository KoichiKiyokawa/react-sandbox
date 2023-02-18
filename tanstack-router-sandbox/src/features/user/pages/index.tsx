import { Link } from '@tanstack/react-router'

export const loader = () => {}

export const UserIndexPage = () => {
  return (
    <div>
      <Link to="/users/$id" params={{ id: '3' }}>
        link
      </Link>
      <h1>Users</h1>
    </div>
  )
}
