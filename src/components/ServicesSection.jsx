import { services } from "../data/services";
import {
  FaFileInvoiceDollar,
  FaCalculator,
  FaBuilding,
} from "react-icons/fa";

function ServicesSection() {
    const icons = [
  <FaFileInvoiceDollar size={40} />,
  <FaCalculator size={40} />,
  <FaBuilding size={40} />
];
  return (
    <section className="py-5 bg-light">
      <div className="container">

        <h2 className="text-center mb-5">
          Our Services
        </h2>

        <div className="row">

         {services.map((service, index) => (
  <div className="col-md-4 mb-4" key={service.id}>
    <div className="card h-100 shadow-sm">
      <div className="card-body text-center">

        {/* ICON GOES HERE */}
        <div className="text-primary mb-3">
          {icons[index]}
        </div>

        <h5>{service.title}</h5>

        <p>{service.description}</p>

        <button className="btn btn-outline-primary mt-3">
  Learn More
</button>

      </div>
    </div>
  </div>
))}
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;