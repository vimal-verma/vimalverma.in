"use client";
import { useState, useEffect, useRef } from "react";
import styles from "../page.module.css";

export default function Header({ isDark, toggleTheme }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (isMobileMenuOpen &&
                menuRef.current && !menuRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMobileMenuOpen]);

    return (
        <header className={styles.header}>
            <div className={styles.logo} data-narrate="Vimal Kumar" data-section="Header">VimalVerma</div>

            {/* Desktop Navigation */}
            <nav aria-label="Main Navigation" className={styles.nav}>
                <a href="#introduction" className={styles.navLink}>Home</a>
                <a href="#skills" className={styles.navLink}>Skills</a>
                <a href="#projects" className={styles.navLink}>Projects</a>
                <a href="#contact" className={styles.navLink}>Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
                ref={buttonRef}
                className={styles.mobileMenuBtn}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
            >
                {isMobileMenuOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                )}
            </button>

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

            {/* Mobile Menu Dropdown */}
            <div ref={menuRef} className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                <a href="#introduction" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                <a href="#skills" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
                <a href="#projects" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
                <a href="#contact" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </div>
        </header>
    );
}