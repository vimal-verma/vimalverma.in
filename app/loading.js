export default function Loading() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100%",
                backgroundColor: "var(--background, #ffffff)",
                color: "var(--foreground, #000000)",
            }}
        >
            <div
                style={{
                    width: "48px",
                    height: "48px",
                    border: "4px solid rgba(0, 242, 255, 0.2)",
                    borderLeftColor: "#00F2FF",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                }}
            />
            <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}