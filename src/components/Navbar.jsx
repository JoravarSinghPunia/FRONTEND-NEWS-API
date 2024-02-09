import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="Nav">
      <button className="burger-menu" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${showMenu ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/topics/cooking" onClick={closeMenu}>
            Cooking
          </Link>
        </li>
        <li>
          <Link to="/topics/coding" onClick={closeMenu}>
            Coding
          </Link>
        </li>
        <li>
          <Link to="/topics/football" onClick={closeMenu}>
            Football
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={closeMenu}>
            Log In
          </Link>
        </li>
      </ul>
    </nav>
  );
}
