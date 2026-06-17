import Layout from "../components/Layout";
import { services } from "../data/services";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Services() {
  return (
    <Layout>

      <Helmet>
        <title>Our Services | TaxPro</title>

        <meta
          name="description"
          content="GST Registration, ITR Filing, Company Registration, MSME Registration and Compliance Services."
        />
      </Helmet>

      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">

            <h1 className="fw-bold">
              Our Services
            </h1>

            <p className="lead">
              Professional Accounting, Taxation,
              Registration and Compliance Services
              Across India.
            </p>

          </div>

          <div className="row">

            {services.map((service) => (

              <div
                key={service.id}
                className="col-md-6 col-lg-3 mb-4"
              >

                <Link
                  to={service.path}
                  style={{
                    textDecoration: "none",
                    color: "inherit"
                  }}
                >

                  <div className="card h-100 shadow-sm">

                    <div className="card-body text-center p-4">

                      <div
                        className="mb-3"
                        style={{
                          fontSize: "50px"
                        }}
                      >
                        {service.icon}
                      </div>

                      <h5 className="fw-bold">
                        {service.title}
                      </h5>

                      <p className="text-muted">
                        {service.description}
                      </p>

                      <button className="btn btn-primary mt-2">
                        Learn More
                      </button>

                    </div>

                  </div>

                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Services;