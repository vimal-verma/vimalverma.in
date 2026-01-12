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
  const [formStatus, setFormStatus] = useState(null);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormStatus('success');
    e.target.reset();
    setTimeout(() => setFormStatus(null), 5000);
  };

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
      <style>{`
        html {
            scroll-behavior: smooth;
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-delay-1 { animation-delay: 0.2s; opacity: 0; animation-fill-mode: forwards; }
        .animate-delay-2 { animation-delay: 0.4s; opacity: 0; animation-fill-mode: forwards; }
        .animate-delay-3 { animation-delay: 0.6s; opacity: 0; animation-fill-mode: forwards; }
        
        .skill-pill {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid transparent;
        }
        .skill-pill:hover {
            transform: translateY(-3px) scale(1.05);
            border-color: #00F2FF;
            box-shadow: 0 5px 15px rgba(0, 242, 255, 0.2);
        }

        .project-card-hover {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .project-card-hover:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 30px rgba(0,0,0,0.15);
            border-color: #00F2FF;
        }

        .contact-form-container {
            max-width: 600px;
            margin: 0 auto;
            width: 100%;
            text-align: left;
        }
        .form-group {
            margin-bottom: 20px;
        }
        .form-label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            font-size: 0.9rem;
        }
        .form-input, .form-textarea {
            width: 100%;
            padding: 12px;
            border-radius: 8px;
            border: 1px solid rgba(128, 128, 128, 0.2);
            background: rgba(128, 128, 128, 0.05);
            color: inherit;
            font-family: inherit;
            transition: all 0.3s ease;
        }
        .form-input:focus, .form-textarea:focus {
            outline: none;
            border-color: #00F2FF;
            box-shadow: 0 0 0 3px rgba(0, 242, 255, 0.1);
            background: rgba(128, 128, 128, 0.1);
        }
        .submit-btn {
            width: 100%;
            padding: 14px;
            background: linear-gradient(90deg, #00F2FF, #0078FF);
            color: white;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 242, 255, 0.3);
        }
        .submit-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
        }
        .success-msg {
            margin-top: 15px;
            padding: 10px;
            background: rgba(0, 242, 255, 0.1);
            border: 1px solid rgba(0, 242, 255, 0.3);
            border-radius: 8px;
            color: #00F2FF;
            text-align: center;
            animation: fadeInUp 0.5s ease;
        }
      `}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <RobotGuide isDark={isDark} />
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main className={styles.main}>
        <div id="introduction" className={styles.hero} data-narrate="This is the hero section. Vimal is a Software Developer and Web App Creator." data-section="Introduction">
          <h1 className={`${styles.title} animate-fade-up animate-delay-1`} style={{ background: "linear-gradient(90deg, #00F2FF, #0078FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block" }}>
            Vimal Kumar <span className={styles.handle} style={{ WebkitTextFillColor: isDark ? "#888" : "#666", fontSize: "0.6em" }}>(VimalVerma)</span>
          </h1>
          <p className={`${styles.subtitle} animate-fade-up animate-delay-2`}>
            Software Developer | Web App Creator
          </p>
          <p className={`${styles.description} animate-fade-up animate-delay-3`}>
            I love to build web apps. I have built multiple apps like NFCBuzz.com, WebNfc.org, KnowBihar.in, Vdev.in and more.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.ctaButton} animate-fade-up animate-delay-3`}
            data-narrate="Click here to download the resume."
            data-section="Resume"
          >
            Download Resume
          </a>
        </div>

        <div id="skills" className={styles.skillsSection} data-narrate="Here are the skills and technologies Vimal works with, like React, Next JS, and Node JS." data-section="Skills">
          <h2>Skills & Technologies</h2>
          <div className={styles.skillsList}>
            {SKILLS.map((skill) => (
              <span key={skill} className={`${styles.skillBadge} skill-pill`} data-narrate={`Skill: ${skill}`} data-section="Skills">
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
                className={`${styles.card} project-card-hover`}
                data-narrate={`Project: ${project.name}. ${project.desc}`}
                data-section="Projects"

              >
                <h3>{project.name} &rarr;</h3>
                <p>{project.desc}</p>
              </a>
            ))}
          </div>
        </div>

        <div id="contact" style={{ padding: "80px 20px", textAlign: "center" }} data-narrate="Feel free to send me a message using this contact form." data-section="Contact">
          <h2>Get In Touch</h2>
          <p style={{ marginBottom: "40px", opacity: 0.8, maxWidth: "600px", margin: "0 auto 40px" }}>
            Have a project in mind or just want to say hi? Fill out the form below and I&apos;ll get back to you as soon as possible.
          </p>

          <div className="contact-form-container">
            <form onSubmit={handleContactSubmit}>
              <div className="form-group" >
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" name="name" required className="form-input" placeholder="Your Name" data-narrate="Feel free to send me a message using this contact form." data-section="Contact" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" required className="form-input" placeholder="your@email.com" data-narrate="Feel free to send me a message using this contact form." data-section="Contact" />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" name="message" required rows="5" className="form-textarea" placeholder="Your Message" data-narrate="Feel free to send me a message using this contact form." data-section="Contact"></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={formStatus === 'submitting' || formStatus === 'success'}>
                {formStatus === 'submitting' ? 'Sending...' : (formStatus === 'success' ? 'Message Sent!' : 'Send Message')}
              </button>
              {formStatus === 'success' && <div className="success-msg">Thanks for reaching out! I&apos;ll get back to you soon.</div>}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
