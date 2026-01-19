"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
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

const EXPERIENCE = [
  {
    company: "Tech Solutions Inc.",
    role: "Senior Frontend Developer",
    period: "2023 - Present",
    desc: "Leading the frontend team in building scalable web applications using Next.js and React.",
  },
  {
    company: "Creative Web Agency",
    role: "Web Developer",
    period: "2021 - 2023",
    desc: "Developed responsive websites and e-commerce platforms for various clients.",
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "State Technical University",
    year: "2017 - 2021",
    desc: "Focused on Software Engineering and Web Technologies. Graduated with Honors.",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "City High School",
    year: "2015 - 2017",
    desc: "Major in Physics, Chemistry, and Mathematics.",
  },
];

const PROJECTS = [
  {
    name: "NFCBuzz.com",
    url: "https://nfcbuzz.com",
    desc: "A comprehensive platform to explore NFC technology, tools, and use cases for modern web applications.",
    logo: "/nfcbuzz.png",
    tags: ["Next.js", "Web NFC", "PWA"]
  },
  {
    name: "WebNfc.org",
    url: "https://webnfc.org",
    desc: "Educational resource and documentation hub for the Web NFC API standards and implementation.",
    logo: "/webnfc.jpg",
    tags: ["React", "Documentation", "MDX"]
  },
  {
    name: "KnowBihar.in",
    url: "https://knowbihar.in",
    desc: "A content-rich portal providing historical insights, tourism guides, and cultural information about Bihar.",
    logo: "/knowbihar.png",
    tags: ["Next.js", "Content", "SEO"]
  },
  {
    name: "Vdev.in",
    url: "https://vdev.in",
    desc: "My personal portfolio and development hub showcasing my latest work and experiments.",
    logo: "/vdev.png",
    tags: ["Portfolio", "React", "Animation"]
  },
  {
    name: "BioDataMaker.org",
    url: "https://biodatamaker.org",
    desc: "An intuitive tool to create, customize, and download professional bio-data for marriage or jobs.",
    logo: "/biodatamaker.jpeg",
    tags: ["React", "PDF Generation", "Forms"]
  },
];

const CERTIFICATIONS = [
  {
    title: "Meta Frontend Developer",
    issuer: "Coursera",
    date: "2023",
    url: "#",
    desc: "Advanced React, UI/UX design, and frontend development best practices.",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2022",
    url: "#",
    desc: "Fundamental understanding of AWS cloud platform and basic security concepts.",
  },
];

const RECOMMENDATIONS = [
  {
    name: "Akshay kumar singh",
    role: "Ecommerce Growth Strategist | 7+ Years in eCommerce & Performance Marketing | Scaling Sales with Google Ads & High-ROAS PPC",
    text: "Vimal is sincere, hardworking, technically sound, and result-oriented. He has also shown an impressive skill towards being a diligent task handler as well as collaborating with the team and is a seamless part of the team during his tenure. He has shown the ability to incorporate the ideologies and concepts of the company and being a strong team player and contributing towards successful result-oriented goals.",
  },
  {
    name: "Vishal Roy",
    role: "Lead Software Engineer@ IndiaMART InterMESH Ltd.",
    text: "He is the kind of person everyone wants to be around.His aura and indepth knowledge in the field of developmemt will surely boost anyone's interest and dedication towards development. He is a passionate coder and I have learnt a lot from him during our combined project and in our small talks 😄",
  },
  {
    name: "Abhishek Kumar",
    role: "Data Analyst @Concentrix | Ex-Deloitte | IIIT Ranchi'22 | Business Intelligence | Transforming Data into Actionable Insights through Design-Led Analytics",
    text: "Vimal is my project partner. He is hard working and an enthusiastic learner. His dedication towards learning new technologies and implementing them is something that is really admirable. He possess a good teamwork skill, he is always ready to mentor & guide. His dedication & knowledge in web development field is awesome. I had the pleasure of working with him and collaborating on several project teams.vimal is a strong and goal oriented team player; with every problem there was a solution.Highly recommended.he will be an asset to any company.",
  },
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const recommendationsRef = useRef(null);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=vimal")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const sorted = data.sort((a, b) => b.positive_reactions_count - a.positive_reactions_count);
          setBlogs(sorted);
        }
      })
      .catch((err) => console.error("Failed to fetch blogs", err));
  }, []);

  const scrollRecommendations = (direction) => {
    if (recommendationsRef.current) {
      const container = recommendationsRef.current;
      const scrollAmount = container.clientWidth / (window.innerWidth > 768 ? 2 : 1);
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <RobotGuide isDark={isDark} />
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main className={styles.main}>
        <div id="introduction" className={styles.hero} data-narrate="This is the hero section. Vimal is a Software Developer and Web App Creator." data-section="Introduction">
          <h1 className={`${styles.title} ${styles.animateFadeUp} ${styles.delay1}`} style={{ background: "linear-gradient(90deg, #00F2FF, #0078FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block" }}>
            Vimal Kumar <span className={styles.handle} style={{ WebkitTextFillColor: isDark ? "#888" : "#666", fontSize: "0.6em" }}>(VimalVerma)</span>
          </h1>
          <p className={`${styles.subtitle} ${styles.animateFadeUp} ${styles.delay2}`}>
            Software Developer | Web App Creator
          </p>
          <p className={`${styles.description} ${styles.animateFadeUp} ${styles.delay3}`}>
            I love to build web apps. I have built multiple apps like NFCBuzz.com, WebNfc.org, KnowBihar.in, Vdev.in and more.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.ctaButton} ${styles.animateFadeUp} ${styles.delay3}`}
            data-narrate="Click here to download the resume."
            data-section="Resume"
          >
            Download Resume
          </a>
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
                data-section="Projects"

              >
                <div className={styles.cardHeader}>
                  <Image
                    src={project.logo}
                    alt={`${project.name} Logo`}
                    width={60}
                    height={60}
                    className={styles.cardLogo}
                  />
                  <h3>{project.name} &rarr;</h3>
                </div>
                <p>{project.desc}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.projectTag}>{tag}</span>
                  ))}
                </div>
                <span className={styles.cardButton}>View Project</span>
              </a>
            ))}
          </div>
        </div>

        <div id="skills" className={styles.skillsSection} data-narrate="Here are the skills and technologies Vimal works with, like React, Next JS, and Node JS." data-section="Skills">
          <h2>Skills & Technologies</h2>
          <div className={styles.skillsList}>
            {SKILLS.map((skill) => (
              <span key={skill} className={styles.skillBadge} data-narrate={`Skill: ${skill}`} data-section="Skills">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div id="experience" className={styles.experienceSection} data-narrate="Here is Vimal's professional work experience." data-section="Experience">
          <h2>Work Experience</h2>
          <div className={styles.timeline}>
            {EXPERIENCE.map((job, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <h3>{job.role}</h3>
                  <h4>{job.company}</h4>
                  <span className={styles.period}>{job.period}</span>
                  <p>{job.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="education" className={styles.educationSection} data-narrate="Vimal's educational background." data-section="Education">
          <h2>Education</h2>
          <div className={styles.timeline}>
            {EDUCATION.map((edu, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <span className={styles.period}>{edu.year}</span>
                  <p>{edu.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="certifications" className={styles.certificationSection} data-narrate="Certifications earned by Vimal." data-section="Certifications">
          <h2>Certifications</h2>
          <div className={styles.grid}>
            {CERTIFICATIONS.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
                data-narrate={`Certification: ${cert.title}`}
                data-section="Certifications"
              >
                <h3>{cert.title} &rarr;</h3>
                <p style={{ fontWeight: 500, color: "var(--text-primary)", marginBottom: "0.5rem" }}>{cert.issuer} &bull; {cert.date}</p>
                <p>{cert.desc}</p>
                <span className={styles.cardButton}>View Certificate</span>
              </a>
            ))}
          </div>
        </div>

        <div id="blog" className={styles.blogSection} data-narrate="Read my latest articles from Dev.to." data-section="Blog">
          <h2>Latest Articles</h2>
          <div className={styles.grid}>
            {blogs.slice(0, 4).map((blog) => (
              <a
                key={blog.id}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
                data-narrate={`Article: ${blog.title}`}
                data-section="Blog"
              >
                {blog.cover_image && (
                  <Image
                    src={blog.cover_image}
                    alt={blog.title}
                    width={800}
                    height={400}
                    className={styles.blogImage}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                  />
                )}
                <h3>{blog.title} &rarr;</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>
                  {new Date(blog.published_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                  <span style={{ margin: "0 8px" }}>•</span>
                  {blog.positive_reactions_count} Likes
                </p>
                <p>{blog.description}</p>
                <span className={styles.cardButton}>Read Article</span>
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a
              href="https://dev.to/vimal"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              View more Articles
            </a>
          </div>
        </div>

        <div id="recommendations" className={styles.recommendationsSection} data-narrate="Here is what people are saying about Vimal on LinkedIn." data-section="Recommendations">
          <h2>LinkedIn Recommendations</h2>
          <div className={styles.carouselContainer}>
            <button
              className={`${styles.carouselNavBtn} ${styles.prevBtn}`}
              onClick={() => scrollRecommendations('left')}
              aria-label="Previous Recommendation"
            >
              &larr;
            </button>
            <div className={styles.carouselTrack} ref={recommendationsRef}>
              {RECOMMENDATIONS.map((rec, index) => (
                <div
                  key={index}
                  className={`${styles.card} ${styles.carouselCard}`}
                  data-narrate={`Recommendation from ${rec.name}`}
                  data-section="Recommendations"
                >
                  <p style={{ fontStyle: "italic", marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>&quot;{rec.text}&quot;</p>
                  <div style={{ marginTop: "auto", borderTop: "1px solid var(--card-border)", paddingTop: "1rem", width: "100%" }}>
                    <h3 style={{ fontSize: "1.1rem", marginBottom: "0.2rem" }}>{rec.name}</h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{rec.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className={`${styles.carouselNavBtn} ${styles.nextBtn}`}
              onClick={() => scrollRecommendations('right')}
              aria-label="Next Recommendation"
            >
              &rarr;
            </button>
          </div>
          <div style={{ textAlign: "center" }}>
            <a
              href="https://www.linkedin.com/in/vimal-verma/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              View on LinkedIn
            </a>
          </div>
        </div>

        <div id="contact" style={{ padding: "80px 20px", textAlign: "center" }} data-narrate="Feel free to send me a message using this contact form." data-section="Contact">
          <h2>Get In Touch</h2>
          <p style={{ marginBottom: "40px", opacity: 0.8, maxWidth: "600px", margin: "0 auto 40px" }}>
            Have a project in mind or just want to say hi? Fill out the form below and I&apos;ll get back to you as soon as possible.
          </p>

          <div className={styles.contactFormContainer}>
            <form onSubmit={handleContactSubmit}>
              <div className={styles.formGroup} >
                <label htmlFor="name" className={styles.formLabel}>Name</label>
                <input type="text" id="name" name="name" required className={styles.formInput} placeholder="Your Name" data-narrate="Feel free to send me a message using this contact form." data-section="Contact" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email</label>
                <input type="email" id="email" name="email" required className={styles.formInput} placeholder="your@email.com" data-narrate="Feel free to send me a message using this contact form." data-section="Contact" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Message</label>
                <textarea id="message" name="message" required rows="5" className={styles.formTextarea} placeholder="Your Message" data-narrate="Feel free to send me a message using this contact form." data-section="Contact"></textarea>
              </div>
              <button type="submit" className={styles.submitBtn} disabled={formStatus === 'submitting' || formStatus === 'success'}>
                {formStatus === 'submitting' ? 'Sending...' : (formStatus === 'success' ? 'Message Sent!' : 'Send Message')}
              </button>
              {formStatus === 'success' && <div className={styles.successMsg}>Thanks for reaching out! I&apos;ll get back to you soon.</div>}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
