import styles from "../page.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p data-narrate="Copyright notice" data-section="Footer">&copy; {new Date().getFullYear()} Vimal Kumar. All rights reserved.</p>
                <div className={styles.socialLinks}>
                    <a href="https://github.com/vimal-verma" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
                    <a href="https://twitter.com/vimalverma_in" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Twitter</a>
                    <a href="https://linkedin.com/in/vimal-verma" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
                </div>
            </div>
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={styles.backToTop}
            >
                Back to Top
            </button>
        </footer>
    );
}