import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">

        <div className="row">

  <div className="col-md-4">
    <h4>TaxPro</h4>
    <p>
      Trusted Accounting & Tax Consultancy
      Services Across India.
    </p>
  </div>

  <div className="col-md-4">
    <h4>Quick Links</h4>

    <ul className="list-unstyled">

  <li>
    <Link
      to="/"
      className="text-white text-decoration-none"
    >
      Home
    </Link>
  </li>

  <li>
    <Link
      to="/about"
      className="text-white text-decoration-none"
    >
      About
    </Link>
  </li>

  <li>
    <Link
      to="/services"
      className="text-white text-decoration-none"
    >
      Services
    </Link>
  </li>

  <li>
    <Link
      to="/contact"
      className="text-white text-decoration-none"
    >
      Contact
    </Link>
  </li>

  <li>
    <Link
      to="/privacy-policy"
      className="text-white text-decoration-none"
    >
      Privacy Policy
    </Link>
  </li>

  <li>
    <Link
      to="/terms-conditions"
      className="text-white text-decoration-none"
    >
      Terms & Conditions
    </Link>
  </li>

</ul>
  </div>

  <div className="col-md-4">
    <h4>Contact</h4>

    <p>📞 +91 9876543210</p>
    <p>✉ info@taxpro.com</p>
    <p>📍 Mumbai, India</p>
  </div>

</div>

        <hr />

        <p className="text-center mb-0">
          © 2026 TaxPro. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;