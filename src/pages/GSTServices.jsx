import Layout from "../components/Layout";
import { Helmet } from "react-helmet-async";
import gstImage from "../assests/images/gst.jpg";


function GSTServices() {
  return (

    
    <Layout>

      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">

          <h1 className="display-4 fw-bold">
            GST Registration Services
          </h1>

          <p className="lead">
            Fast, affordable and hassle-free GST
            registration for businesses across India.
          </p>

          <button className="btn btn-light">
            Apply Now
          </button>
          <div className="container py-5">
  <img
    src={gstImage}
    alt="GST Registration"
    className="img-fluid rounded shadow"
  />
</div>

        </div>
      </section>

      {/* Benefits */}

      <section className="py-5">
        <div className="container">

          <h2 className="mb-4">
            Benefits of GST Registration
          </h2>

          <div className="row">

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Legal Compliance
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Input Tax Credit
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Business Expansion
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Tender Eligibility
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Documents */}

      <section className="bg-light py-5">
        <div className="container">

          <h2>Required Documents</h2>

          <ul>
            <li>PAN Card</li>
            <li>Aadhaar Card</li>
            <li>Business Address Proof</li>
            <li>Bank Account Details</li>
          </ul>

        </div>
      </section>

    </Layout>
  );
}

export default GSTServices;