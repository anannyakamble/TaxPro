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
      <div className="container py-5">

        <h1 className="mb-5">
          Our Services
        </h1>

        <div className="row">

          {services.map((service) => (
            <div
              key={service.id}
              className="col-md-4 mb-4"
            >
              <Link
  to={service.path}
  style={{
    textDecoration: "none",
    color: "inherit"
  }}
>
  <div className="card h-100 shadow">

    <div className="card-body">

      <h4>{service.title}</h4>

      <p>{service.description}</p>
      <ul className="list-unstyled mt-3">
    {service.features.map((feature, index) => (
      <li key={index}>✓ {feature}</li>
    ))}
  </ul>

      <button className="btn btn-primary">
        Learn More
      </button>

    </div>

  </div>
</Link>
            </div>
          ))}

        </div>

      </div>
    </Layout>
  );
}

export default Services;