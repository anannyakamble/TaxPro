function Testimonials() {
 const testimonials = [
  {
    name: "Rahul Sharma",
    review: "Excellent GST registration service. The team was very professional."
  },
  {
    name: "Priya Patel",
    review: "Filed my Income Tax Return quickly and smoothly."
  },
  {
    name: "Amit Verma",
    review: "Professional and reliable team. Highly recommended."
  }
];
  return (
    <section className="py-5 bg-light">
      <div className="container">

        <h2 className="text-center mb-5">
          What Our Clients Say
        </h2>

        <div className="row">

          {testimonials.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm h-100">
               <div className="card-body">

  <div className="mb-2">
    ⭐⭐⭐⭐⭐
  </div>

  <p>"{item.review}"</p>

  <h6 className="mt-3 fw-bold">
    {item.name}
  </h6>

</div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;