function CallButton() {
  return (
    <a
      href="tel:+919876543210"
      className="btn btn-success position-fixed"
      style={{
        bottom: "90px",
        right: "20px",
        zIndex: 999
      }}
    >
      📞 Call Now
    </a>
  );
}

export default CallButton;