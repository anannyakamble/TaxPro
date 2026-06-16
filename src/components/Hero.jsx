import heroImage from "../assests/images/hero.jpg";
function Hero() {
  return (
    <section
      className="text-white d-flex align-items-center"
      style={{
       paddingTop: "100px",
paddingBottom: "100px",
        background: "linear-gradient(135deg,#0d6efd,#0a58ca)"
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6">
            <div className="col-md-6">

  <div className="mb-3">

    <span className="badge bg-warning text-dark me-2">
      GST Registration
    </span>

    <span className="badge bg-warning text-dark me-2">
      ITR Filing
    </span>

    <span className="badge bg-warning text-dark">
      Company Registration
    </span>

  </div>

  <div className="mt-4">

  <span className="badge bg-light text-dark me-2">
    ⭐ 4.8 Rating
  </span>

  <span className="badge bg-light text-dark me-2">
    👥 5000+ Clients
  </span>

  <span className="badge bg-light text-dark">
    🏆 Expert Support
  </span>

</div>


</div>

            <h1 className="display-2 fw-bold">
              Expert Accounting & Tax Solutions
            </h1>

            <p className="lead mt-4">
              GST Registration, Income Tax Filing,
              Company Registration, Trademark Registration,
              Payroll & Compliance Services Across India.
            </p>

            <div className="hero-buttons mt-4">

  <button className="btn btn-light btn-lg">
    Get Free Consultation
  </button>

  <button className="btn btn-outline-light btn-lg">
    Contact Us
  </button>

</div>
          </div>
<div className="col-md-5">

  <div className="card shadow-lg border-0">

    <div className="card-body p-4">

      <h4 className="mb-4">
        Get Free Consultation
      </h4>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Your Name"
      />

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Mobile Number"
      />

      <input
        type="email"
        className="form-control mb-3"
        placeholder="Email Address"
      />

      <button className="btn btn-primary w-100">
        Request Callback
      </button>

    </div>

  </div>

</div>

        </div>
      </div>
    </section>
  );
}

export default Hero;