import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">

        <div className="row">

  <div className="col-md-4">
    <h4>UV Ledger & Tax Solutions</h4>
    <p>
      Trusted Accounting & Tax Consultancy
      Services Across India.
    </p>
    <div className="footer-social">
  <FaFacebook size={25} className="me-3" />
  <FaInstagram size={25} className="me-3" />
  <FaLinkedin size={25} />
</div>
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
      About Us
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
      Contact Us
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

    <p>📞 +91 8828930457</p>
    <p>✉ uvledgertax@gmail.com</p>
    <p>📍 Ghatkopar, Mumbai, Maharashtra</p>
    <p>
  🕒 Mon - Sat
  <br />
  10:00 AM - 8:00 PM
</p>
  </div>

</div>

        <hr />

        <p className="text-center mb-0">
          © 2025 UV Ledger & Tax Solutions. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;