import { Link } from "react-router-dom";

function ContactCTA() {
  return (
    <section className="bg-primary text-white py-5">
      <div className="container text-center">

        <h2 className="fw-bold">
          Need Help With GST, Tax Filing or Company Registration?
        </h2>

        <p className="lead mt-3">
          Talk to our experts today and get a free consultation.
        </p>

        <Link
          to="/contact"
          className="btn btn-light btn-lg mt-3"
        >
          Contact Now
        </Link>

      </div>
    </section>
  );
}

export default ContactCTA;