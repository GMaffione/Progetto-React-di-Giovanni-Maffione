import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        🥗 VeggieFind
      </Link>
    </nav>
  );
}

export default Navbar;