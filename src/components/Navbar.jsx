import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

       <Link className="navbar-brand fw-bold fs-3 text-white" to="/">
  TaxPro<span className="text-warning">.</span>
</Link>

        <div className="navbar-nav">

  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive ? "nav-link fw-bold text-warning" : "nav-link fw-semibold"
    }
  >
    Home
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      isActive ? "nav-link fw-bold text-warning" : "nav-link fw-semibold"
    }
  >
    About
  </NavLink>

  <NavLink
    to="/services"
    className={({ isActive }) =>
      isActive ? "nav-link fw-bold text-warning" : "nav-link fw-semibold"
    }
  >
    Services
  </NavLink>

  <NavLink
    to="/pricing"
    className={({ isActive }) =>
      isActive ? "nav-link fw-bold text-warning" : "nav-link fw-semibold"
    }
  >
    Pricing
  </NavLink>

  <NavLink
    to="/blog"
    className={({ isActive }) =>
      isActive ? "nav-link fw-bold text-warning" : "nav-link fw-semibold"
    }
  >
    Blog
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      isActive ? "nav-link fw-bold text-warning" : "nav-link fw-semibold"
    }
  >
    Contact
  </NavLink>

</div>

      </div>
    </nav>
  );
}

export default Navbar;