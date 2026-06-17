import Layout from "./Layout";

function ServiceTemplate({
  title,
  description,
  image,
  benefits,
  documents
}) {
  return (
    <Layout>

      {/* Hero */}
      <section className="bg-primary text-white py-5">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">

              <h1 className="display-5 fw-bold">
                {title}
              </h1>

              <p className="lead">
                {description}
              </p>

              <button className="btn btn-light">
                Apply Now
              </button>

            </div>

            <div className="col-md-6">
              <img
                src={image}
                alt={title}
                className="img-fluid rounded shadow"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="py-5">
        <div className="container">

          <h2 className="mb-4">
            Benefits
          </h2>

          <div className="row">

            {benefits.map((item, index) => (
              <div
                className="col-md-3 mb-3"
                key={index}
              >
                <div className="card p-3 shadow-sm text-center">
                  {item}
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Documents */}
      <section className="bg-light py-5">
        <div className="container">

          <h2>Required Documents</h2>

          <ul>
            {documents.map((doc, index) => (
              <li key={index}>
                {doc}
              </li>
            ))}
          </ul>

        </div>
      </section>

    </Layout>
  );
}

export default ServiceTemplate;