export default function VideoModal({ videoUrl, onClose }) {
  if (!videoUrl) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.75)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "90%",
          maxWidth: "900px",
          aspectRatio: "16 / 9",
          background: "#000",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {/* BOTÃO FECHAR */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "rgba(0,0,0,0.6)",
            border: "none",
            color: "#fff",
            fontSize: "18px",
            padding: "6px 10px",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          ✕
        </button>

        {/* VIDEO */}
        <iframe
          src={videoUrl}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}
