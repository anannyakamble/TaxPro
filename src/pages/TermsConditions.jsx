import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

function TermsConditions() {
  return (
    <Layout>

      <Helmet>
        <title>
          Terms & Conditions | UV Ledger & Tax Solutions
        </title>

        <meta
          name="description"
          content="Terms and conditions governing the use of UV Ledger & Tax Solutions services."
        />
      </Helmet>

      <div className="container py-5">

        <h1 className="mb-4">
          Terms & Conditions
        </h1>

        <p>
          By accessing our website and using our
          services, you agree to these Terms &
          Conditions.
        </p>

        <h3 className="mt-4">
          Service Scope
        </h3>

        <p>
          UV Ledger & Tax Solutions provides
          consultancy and assistance related to
          taxation, accounting, registrations,
          compliance and business support services.
        </p>

        <h3 className="mt-4">
          Client Responsibilities
        </h3>

        <p>
          Clients must provide accurate and complete
          information and documentation required for
          service processing.
        </p>

        <h3 className="mt-4">
          Fees & Charges
        </h3>

        <p>
          All service fees are subject to prior
          agreement. Government fees and third-party
          charges are separate where applicable.
        </p>

        <h3 className="mt-4">
          Limitation of Liability
        </h3>

        <p>
          We shall not be responsible for delays,
          rejections or penalties arising from
          incomplete, inaccurate or delayed
          information provided by clients or
          decisions made by government authorities.
        </p>

        <h3 className="mt-4">
          Amendments
        </h3>

        <p>
          We reserve the right to modify these
          Terms & Conditions at any time without
          prior notice.
        </p>

        <h3 className="mt-4">
          Contact Us
        </h3>

        <p>
          UV Ledger & Tax Solutions
        </p>

        <p>
          📞 +91 88289 30457
        </p>

        <p>
          📍 Ghatkopar, Mumbai, Maharashtra
        </p>

      </div>

    </Layout>
  );
}

export default TermsConditions;