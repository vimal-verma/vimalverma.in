"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RobotGuide from "./components/RobotGuide";

export default function Home() {
  const [isDark, setIsDark] = useState(null);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "HTML5 & CSS3",
    "Git & GitHub",
    "NFC Technology",
    "Web APIs",
  ];

  return (
    <div className={`${styles.page} ${isDark ? styles.darkMode : ""}`} style={{ cursor: "none" }}>
      <RobotGuide />
      <Header isDark={isDark} toggleTheme={toggleTheme} setIsDark={setIsDark} />
      <main className={styles.main}>
        <div className={styles.hero} data-narrate="This is the hero section. Vimal is a Software Developer and Web App Creator.">
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

        <div className={styles.skillsSection} data-narrate="Here are the skills and technologies Vimal works with, like React, Next JS, and Node JS.">
          <h2>Skills & Technologies</h2>
          <div className={styles.skillsList}>
            {skills.map((skill) => (
              <span key={skill} className={styles.skillBadge}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.projectsSection} data-narrate="These are some of the projects built by Vimal. Hover over them to learn more.">
          <h2>My Projects</h2>
          <div className={styles.grid}>
            {[
              { name: "NFCBuzz.com", url: "https://nfcbuzz.com", desc: "Explore NFC technology." },
              { name: "WebNfc.org", url: "https://webnfc.org", desc: "Web NFC resources." },
              { name: "KnowBihar.in", url: "https://knowbihar.in", desc: "Insights about Bihar." },
              { name: "Vdev.in", url: "https://vdev.in", desc: "My personal development hub." },
            ].map((project) => (
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
