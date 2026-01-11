"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RobotGuide from "./components/RobotGuide";

const SKILLS = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "HTML5 & CSS3",
  "Git & GitHub",
  "NFC Technology",
  "Web APIs",
];

const PROJECTS = [
  { name: "NFCBuzz.com", url: "https://nfcbuzz.com", desc: "Explore NFC technology." },
  { name: "WebNfc.org", url: "https://webnfc.org", desc: "Web NFC resources." },
  { name: "KnowBihar.in", url: "https://knowbihar.in", desc: "Insights about Bihar." },
  { name: "Vdev.in", url: "https://vdev.in", desc: "My personal development hub." },
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDark(storedTheme === "dark");
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vimal Kumar",
    "alternateName": "VimalVerma",
    "url": "https://vdev.in",
    "jobTitle": "Software Developer",
    "knowsAbout": SKILLS,
    "description": "Software Developer and Web App Creator specializing in React, Next.js, and NFC technology."
  };

  return (
    <div className={`${styles.page} ${isDark ? styles.darkMode : ""}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <RobotGuide isDark={isDark} />
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main className={styles.main}>
        <div id="introduction" className={styles.hero} data-narrate="This is the hero section. Vimal is a Software Developer and Web App Creator." data-section="Introduction">
          <h1 className={styles.title}>
            Vimal Kumar <span className={styles.handle}>(VimalVerma)</span>
          </h1>
          <p className={styles.subtitle}>
            Software Developer | Web App Creator
          </p>
          <p className={styles.description}>
            I love to build web apps. I have built multiple apps like NFCBuzz.com, WebNfc.org, KnowBihar.in, Vdev.in and more.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            data-narrate="Click here to download the resume."
          >
            Download Resume
          </a>
        </div>

        <div id="skills" className={styles.skillsSection} data-narrate="Here are the skills and technologies Vimal works with, like React, Next JS, and Node JS." data-section="Skills">
          <h2>Skills & Technologies</h2>
          <div className={styles.skillsList}>
            {SKILLS.map((skill) => (
              <span key={skill} className={styles.skillBadge}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div id="projects" className={styles.projectsSection} data-narrate="These are some of the projects built by Vimal. Hover over them to learn more." data-section="Projects">
          <h2>My Projects</h2>
          <div className={styles.grid}>
            {PROJECTS.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
                data-narrate={`Project: ${project.name}. ${project.desc}`}
              >
                <h3>{project.name} &rarr;</h3>
                <p>{project.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
