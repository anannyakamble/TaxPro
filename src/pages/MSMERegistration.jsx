import Layout from "../components/Layout";

function MSMERegistration() {
  return (
    <Layout>
      <section className="bg-primary text-white py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">
            MSME Registration Services
          </h1>

          <p className="lead">
            Get Udyam Registration and enjoy
            government benefits for your business.
          </p>

          <button className="btn btn-light">
            Register MSME
          </button>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">
            Benefits of MSME Registration
          </h2>

          <div className="row">

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Government Subsidies
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Easy Loans
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Tax Benefits
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 shadow-sm">
                Tender Benefits
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <h2>Required Documents</h2>

          <ul>
            <li>Aadhaar Card</li>
            <li>PAN Card</li>
            <li>Business Details</li>
            <li>Bank Account Details</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default MSMERegistration;