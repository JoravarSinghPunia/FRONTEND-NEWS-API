import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Nav">
      <Link className="Home" to="/">
        Home
      </Link>
      <Link className="Cooking" to="/cooking">
        Cooking
      </Link>
      <Link className="Coding" to="/coding">
        Coding
      </Link>
      <Link className="Football" to="/football">
        Football
      </Link>
      <Link className="Log-in" to="/login">
        Log In
      </Link>
    </nav>
  );
}
