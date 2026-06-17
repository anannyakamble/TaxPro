import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        <Link className="navbar-brand fw-bold fs-3" to="/">
           UV Ledger & Tax Solutions
        </Link>

        {/* Hamburger Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <div className="navbar-nav ms-auto">

            <NavLink className="nav-link" to="/">
              Home
            </NavLink>

            <NavLink className="nav-link" to="/about">
              About
            </NavLink>

            <NavLink className="nav-link" to="/services">
              Services
            </NavLink>

            <NavLink className="nav-link" to="/pricing">
              Pricing
            </NavLink>

            <NavLink className="nav-link" to="/blog">
              Blog
            </NavLink>

            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;