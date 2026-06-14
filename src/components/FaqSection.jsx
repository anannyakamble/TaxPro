function FaqSection() {
  return (
    <section className="py-5">
      <div className="container">

        <h2 className="text-center mb-5">
          Frequently Asked Questions
        </h2>

        <div className="accordion">

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
              >
                What is GST Registration?
              </button>
            </h2>

            <div className="accordion-body">
              GST registration is mandatory for businesses
              crossing the prescribed turnover limit.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FaqSection;
