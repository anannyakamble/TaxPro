import Layout from "../components/Layout";
import companyImage from "../assests/images/company.jpg";

function CompanyRegistration() {
  return (
    <Layout>
      <section className="bg-primary text-white py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">
            Company Registration Services
          </h1>

          <p className="lead">
            Register your Private Limited Company
            quickly and legally.
          </p>

          <button className="btn btn-light">
            Register Company
          </button>
        </div>
      </section>

      <div className="container py-5">
        <img
          src={companyImage}
          alt="Company Registration"
          className="img-fluid rounded shadow"
        />
      </div>

      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">
            Benefits of Company Registration
          </h2>

          <div className="row">

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Legal Identity
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Limited Liability
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Easy Funding
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Brand Credibility
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <h2>Required Documents</h2>

          <ul>
            <li>PAN Card</li>
            <li>Aadhaar Card</li>
            <li>Address Proof</li>
            <li>Passport Size Photo</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default CompanyRegistration;