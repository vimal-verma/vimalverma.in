import styles from "../page.module.css";

export default function Header({ isDark, toggleTheme }) {
    return (
        <header className={styles.header} style={{
            position: "sticky",
            top: 0,
            zIndex: 1000,
            backdropFilter: "blur(12px)",
            backgroundColor: isDark ? "rgba(26, 26, 26, 0.85)" : "rgba(255, 255, 255, 0.85)",
            borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
            transition: "background-color 0.3s ease, border-color 0.3s ease"
        }}>
            <style>{`
                .nav-link {
                    position: relative;
                    padding: 5px 0;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: #00F2FF;
                    transition: width 0.3s ease;
                }
                .nav-link:hover::after {
                    width: 100%;
                }
            `}</style>
            <div className={styles.logo} style={{ fontWeight: "bold", fontSize: "1.5rem", background: "linear-gradient(45deg, #00F2FF, #0078FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} data-narrate="Vimal Kumar" data-section="Header">VimalVerma</div>
            <nav aria-label="Main Navigation" style={{ display: "flex", gap: "25px", marginLeft: "auto", marginRight: "25px", alignItems: "center" }}>
                <a href="#introduction" className="nav-link" style={{ textDecoration: "none", color: "inherit", fontSize: "0.95rem", fontWeight: 500 }}>Home</a>
                <a href="#skills" className="nav-link" style={{ textDecoration: "none", color: "inherit", fontSize: "0.95rem", fontWeight: 500 }}>Skills</a>
                <a href="#projects" className="nav-link" style={{ textDecoration: "none", color: "inherit", fontSize: "0.95rem", fontWeight: 500 }}>Projects</a>
                <a href="#contact" className="nav-link" style={{ textDecoration: "none", color: "inherit", fontSize: "0.95rem", fontWeight: 500 }}>Contact</a>
            </nav>
            {isDark !== null && (
                <button
                    onClick={toggleTheme}
                    className={styles.themeToggle}
                    aria-label="Toggle Dark Mode"
                >
                    {isDark ? (
                        // Sun Icon
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    ) : (
                        // Moon Icon
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    )}
                </button>
            )}
        </header>
    );
}