import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

function PrivacyPolicy() {
  return (
    <Layout>

      <Helmet>
        <title>
          Privacy Policy | UV Ledger & Tax Solutions
        </title>

        <meta
          name="description"
          content="Learn how UV Ledger & Tax Solutions collects, uses and protects your personal information."
        />
      </Helmet>

      <div className="container py-5">

        <h1 className="mb-4">
          Privacy Policy
        </h1>

        <p>
          At UV Ledger & Tax Solutions, we value your
          privacy and are committed to protecting your
          personal information.
        </p>

        <h3 className="mt-4">
          Information We Collect
        </h3>

        <ul>
          <li>Name</li>
          <li>Contact Details</li>
          <li>Email Address</li>
          <li>Business Information</li>
          <li>Documents required for service processing</li>
        </ul>

        <h3 className="mt-4">
          Use of Information
        </h3>

        <ul>
          <li>Providing requested services</li>
          <li>Customer communication</li>
          <li>Regulatory compliance</li>
          <li>Service improvement</li>
        </ul>

        <h3 className="mt-4">
          Data Security
        </h3>

        <p>
          We maintain reasonable administrative and
          technical safeguards to protect your information
          against unauthorized access, disclosure or misuse.
        </p>

        <h3 className="mt-4">
          Information Sharing
        </h3>

        <p>
          We do not sell, trade or rent personal
          information to third parties. Information may
          only be shared when required by law or for
          service fulfillment purposes.
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

export default PrivacyPolicy;