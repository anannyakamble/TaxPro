import Layout from "../components/Layout";
import { Helmet } from "react-helmet";


function TermsConditions() {
  return (
    <Layout>
      <Helmet>
  <title>Terms & Conditions | TaxPro</title>
</Helmet>
      <div className="container py-5">

        <h1>Terms & Conditions</h1>

        <p>
          By using this website, you agree to the
          following terms and conditions.
        </p>

        <h4>Services</h4>
        <p>
          Information provided on this website is
          for professional accounting and taxation
          services.
        </p>

        <h4>Limitation of Liability</h4>
        <p>
          We are not responsible for losses caused
          by incorrect information provided by users.
        </p>

      </div>
    </Layout>
  );
}

export default TermsConditions;