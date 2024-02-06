import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Nav">
      <Link className="Home" to="/">
        Home
      </Link>
      <Link className="Topics" to="/topics">
        Topics
      </Link>
      <Link className="Log-in" to="/login">
        Log In
      </Link>
    </nav>
  );
}
