import Layout from "../components/Layout";

function TrademarkRegistration() {
  return (
    <Layout>
      <section className="bg-primary text-white py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">
            Trademark Registration Services
          </h1>

          <p className="lead">
            Protect your brand identity with
            professional trademark registration.
          </p>

          <button className="btn btn-light">
            Apply Trademark
          </button>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">
            Benefits of Trademark Registration
          </h2>

          <div className="row">

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Brand Protection
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Exclusive Rights
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Legal Security
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Business Value
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <h2>Required Documents</h2>

          <ul>
            <li>Logo (Optional)</li>
            <li>PAN Card</li>
            <li>Aadhaar Card</li>
            <li>Business Details</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default TrademarkRegistration;