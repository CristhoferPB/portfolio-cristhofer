import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        border: "none",
        background: "rgba(75, 0, 255, 0.9)",
        color: "#fff",
        cursor: "pointer",
        boxShadow: "0 10px 30px rgba(75, 0, 255, 0.28)",
        transition: "transform 0.2s ease, opacity 0.2s ease",
        zIndex: 1000,
      }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow =
                "0 14px 36px rgba(75, 0, 255, 0.38)";
        }}

        onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(75, 0, 255, 0.28)";
        }}
      aria-label="Voltar ao topo"
    >
      ↑
    </button>
  );
}
