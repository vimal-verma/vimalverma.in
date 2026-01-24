"use client";

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body style={{ margin: 0 }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                        width: "100%",
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        textAlign: "center",
                        padding: "20px",
                        fontFamily: "system-ui, -apple-system, sans-serif",
                    }}
                >
                    <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
                        Something went wrong!
                    </h2>
                    <p style={{ marginBottom: "2rem", opacity: 0.7, maxWidth: "500px" }}>
                        {error.message || "An unexpected error occurred."}
                    </p>
                    <button
                        onClick={() => reset()}
                        style={{
                            padding: "12px 24px",
                            backgroundColor: "#00F2FF",
                            color: "#000000",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontSize: "1rem",
                            fontWeight: "600",
                        }}
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    );
}