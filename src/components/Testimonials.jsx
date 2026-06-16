function Testimonials() {
 const testimonials = [
  {
    name: "Rahul Sharma",
    image: "https://i.pravatar.cc/100?img=1",
    review:
      "Excellent GST registration service."
  },
  {
    name: "Priya Patel",
    image: "https://i.pravatar.cc/100?img=2",
    review:
      "Very smooth ITR filing process."
  },
  {
    name: "Amit Verma",
    image: "https://i.pravatar.cc/100?img=3",
    review:
      "Professional and reliable support."
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
  <img
  src={item.image}
  alt={item.name}
  className="rounded-circle mb-3"
  width="80"
/>

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