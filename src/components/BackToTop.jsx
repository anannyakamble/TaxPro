import { useEffect, useState } from "react";

function BackToTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  if (!show) return null;

  return (
    <button
      className="btn btn-primary position-fixed"
      style={{
        bottom: "150px",
        right: "20px",
        zIndex: 999
      }}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }
    >
      ↑
    </button>
  );
}

export default BackToTop;