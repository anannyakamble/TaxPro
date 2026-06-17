import Layout from "../components/Layout";
import aboutImage from "../assests/images/about.jpg";
import { Helmet } from "react-helmet";



function About() {
  return (
    <Layout>
      <Helmet>
  <title>About TaxPro</title>

  <meta
    name="description"
    content="Learn about TaxPro's accounting, GST and taxation consultancy services."
  />
</Helmet>
      <section className="py-5">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">
              <h1 className="fw-bold mb-4">
                About Us
              </h1>

              <p>
  Founded by Uma Tike in 2015, UV Ledger & Tax Solutions
  is dedicated to providing trusted financial and business
  consultancy services.
</p>

<p>
  With years of experience in taxation, accounting and
  compliance management, we help clients stay compliant
  and focused on business growth.
</p>

<p>
  Our approach is built on professionalism, accuracy,
  confidentiality and customer satisfaction.
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
                style={{
    width: "100%",
    objectFit: "cover"
  }}
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
      <section className="py-5">

  <div className="container text-center">

    <h2>Our Vision</h2>

    <p className="mt-3">
      To become a trusted partner for businesses
      and individuals by delivering reliable,
      affordable and professional financial solutions.
    </p>

  </div>

</section>
    </Layout>
  );
}

export default About;