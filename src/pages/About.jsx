import Layout from "../components/Layout";
import aboutImage from "../assests/images/about.jpg";

function About() {
  return (
    <Layout>
      <section className="py-5">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">
              <h1 className="fw-bold mb-4">
                About TaxPro
              </h1>

              <p>
                TaxPro is a professional accounting,
                taxation, GST and business registration
                consultancy helping startups,
                entrepreneurs and businesses across India.
              </p>

              <p>
                We specialize in GST Registration,
                Income Tax Filing, Company Registration,
                Trademark Registration, Payroll and
                Compliance Services.
              </p>

              <button className="btn btn-primary">
                Contact Us
              </button>
            </div>

            <div className="col-md-6">
              <img
                src={aboutImage}
                alt="About"
                className="img-fluid rounded shadow"
              />
            </div>

          </div>

        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container text-center">

          <h2>Our Mission</h2>

          <p className="mt-3">
            To simplify taxation and compliance
            processes for businesses through
            expert guidance and reliable support.
          </p>

        </div>
      </section>
    </Layout>
  );
}

export default About;