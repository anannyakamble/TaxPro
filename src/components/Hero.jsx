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
            <h1 className="display-3 fw-bold">
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

          <div className="col-md-6 text-center">
            <img
  src={heroImage}
  alt="Hero"
  className="img-fluid rounded shadow"
  style={{
    maxHeight: "450px",
    width: "100%",
    objectFit: "cover"
  }}
/>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;