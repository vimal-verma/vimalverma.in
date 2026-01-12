import styles from "../page.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer} style={{ borderTop: "1px solid rgba(128,128,128,0.1)", marginTop: "auto", padding: "40px 20px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <p data-narrate="Copyright notice" data-section="Footer">&copy; {new Date().getFullYear()} Vimal Kumar. All rights reserved.</p>
                <div style={{ display: "flex", gap: "20px" }}>
                    <a href="https://github.com/vimalverma558" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.7, transition: "opacity 0.2s", color: "inherit", textDecoration: "none" }} onMouseOver={e => e.target.style.opacity = 1} onMouseOut={e => e.target.style.opacity = 0.7}>GitHub</a>
                    <a href="https://twitter.com/vimalverma558" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.7, transition: "opacity 0.2s", color: "inherit", textDecoration: "none" }} onMouseOver={e => e.target.style.opacity = 1} onMouseOut={e => e.target.style.opacity = 0.7}>Twitter</a>
                    <a href="https://linkedin.com/in/vimalverma558" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.7, transition: "opacity 0.2s", color: "inherit", textDecoration: "none" }} onMouseOver={e => e.target.style.opacity = 1} onMouseOut={e => e.target.style.opacity = 0.7}>LinkedIn</a>
                </div>
            </div>
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{
                    marginTop: "20px", background: "none", border: "none", color: "inherit", opacity: 0.5, cursor: "pointer", fontSize: "0.8rem", textDecoration: "underline"
                }}
            >
                Back to Top
            </button>
        </footer>
    );
}