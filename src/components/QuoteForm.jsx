import { useState } from "react";

function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    service: "",
    phone: ""
  });

  return (
    <section className="py-5 bg-light">
      <div className="container">

        <h2>Get Instant Quote</h2>

        <form>

          <input
            className="form-control mb-3"
            placeholder="Name"
          />

          <input
            className="form-control mb-3"
            placeholder="Phone"
          />

          <select className="form-select mb-3">
            <option>GST Registration</option>
            <option>ITR Filing</option>
            <option>Company Registration</option>
          </select>

          <button
            className="btn btn-primary"
          >
            Get Quote
          </button>

        </form>

      </div>
    </section>
  );
}

export default QuoteForm;