import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="">
      <ul className="flex space-x-4 justify-center p-4 bg-gray-200 text-gray-800 font-semibold text-lg">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar