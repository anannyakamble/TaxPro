import { services } from "../data/services";
import { Link } from "react-router-dom";

function ServicesSection() {
  return (
    <section className="py-5 bg-light">

      <div className="container">

        <div className="text-center mb-5">

          <h2 className="fw-bold">
            Our Services
          </h2>

          <p className="lead">
            Complete Accounting, Taxation and
            Business Registration Solutions
          </p>

        </div>

        <div className="row">

          {services.slice(0, 8).map((service) => (

            <div
              className="col-md-6 col-lg-3 mb-4"
              key={service.id}
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

                  <Link
                    to={service.path}
                    className="btn btn-outline-primary mt-2"
                  >
                    Learn More
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="text-center mt-4">

          <Link
            to="/services"
            className="btn btn-primary btn-lg"
          >
            View All Services
          </Link>

        </div>

      </div>

    </section>
  );
}

export default ServicesSection;