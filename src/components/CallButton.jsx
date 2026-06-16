function CallButton() {
  return (
    <a
      href="tel:+918828930457"
      className="btn btn-danger position-fixed"
      style={{
        right: "20px",
        bottom: "90px",
        zIndex: 999
      }}
    >
      📞 Call Now
    </a>
  );
}

export default CallButton;