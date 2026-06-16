import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918828930457"
      target="_blank"
      rel="noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        fontSize: "50px",
        color: "#25D366",
        zIndex: "1000",
      }}
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;