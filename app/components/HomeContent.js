"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import Header from "./Header";
import Footer from "./Footer";
import RobotGuide from "./RobotGuide";
import HeroBackground from "./HeroBackground";
import {
    Download,
    ExternalLink,
    Briefcase,
    GraduationCap,
    Award,
    BookOpen,
    User,
    Mail,
    MessageSquare,
    Send,
    Quote,
    ChevronLeft,
    ChevronRight,
    Code2,
    Cpu,
    Globe,
    ArrowUp,
    Github,
    Linkedin,
    Twitter,
    Layout,
    Database,
    Cloud,
    Brain
} from "lucide-react";

const SKILL_CATEGORIES = [
    {
        title: "Frontend Development",
        icon: Layout,
        items: [
            "React",
            "Next.js",
            "JavaScript",
            "HTML5 & CSS3",
            "Tailwind CSS"
        ]
    },
    {
        title: "Backend & Tools",
        icon: Database,
        items: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Git & GitHub",
            "REST APIs",
            "NFC Technology",
            "VS Code"
        ]
    },
    {
        title: "Cloud & AI",
        icon: Cloud,
        items: [
            "AWS",
            "GCP",
            "Docker",
            "CI/CD",
            "Python",
            "Machine Learning (Learning)"
        ]
    }
];

const EXPERIENCE = [
    {
        company: "Cognizant",
        role: "Developer",
        period: "2022 - Present",
        desc: "Leading the frontend team in building scalable web applications using Next.js and React.",
    },
    {
        company: "Start Dropship",
        role: "Web Developer Internship",
        period: "May 2021 - Sep 2021",
        desc: "Developed responsive websites and e-commerce platforms for clients.",
    },
];

const EDUCATION = [
    {
        degree: "Bachelor of Technology in Computer Science",
        institution: "IIIT Ranchi",
        year: "2018 - 2022",
        desc: "Focused on Software Engineering and Web Technologies. Graduated with Honors.",
    },
    {
        degree: "intermediate (12th Grade)",
        institution: "Gaya Evening College, Gaya",
        year: "2015 - 2017",
        desc: "Major in Physics, Chemistry, and Mathematics.",
    },
    {
        degree: "Matriculation (10th Grade)",
        institution: "High School Makhdumpur",
        year: "2015",
        desc: "Completed secondary education with a focus on Science and Mathematics.",
    },
];

const PROJECTS = [
    {
        name: "NFCBuzz.com",
        url: "https://nfcbuzz.com",
        desc: "A progressive web app where users can buy NFC business cards and access NFC tools easily using Web",
        logo: "/nfcbuzz.png",
        tags: ["Next.js", "Web NFC", "PWA"]
    },
    {
        name: "WebNfc.org",
        url: "https://webnfc.org",
        desc: "Resource and documentation hub for the Web NFC API and Tools to use NFC in web applications.",
        logo: "/webnfc.jpg",
        tags: ["React", "Documentation", "NFC Tools"]
    },
    {
        name: "KnowBihar.in",
        url: "https://knowbihar.in",
        desc: "A content-rich portal providing historical insights, tourism guides, and cultural information about Bihar.",
        logo: "/knowbihar.png",
        tags: ["Next.js", "Content", "SEO", "CMS"]
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
        title: " ES6 Javascript: The Complete Developer's Guide ",
        issuer: "Udemy",
        date: "2023",
        url: "https://cognizant.udemy.com/certificate/UC-153a0f9c-a9ae-4bc5-a2dc-54d025b99930/",
        desc: "Advanced JavaScript concepts including ES6 features, asynchronous programming, and modern development practices.",
    },
    {
        title: "AWS Essentials",
        issuer: "Amazon Web Services on Udemy",
        date: "2023",
        url: "https://cognizant.udemy.com/certificate/UC-2a3d0ce7-bd50-4770-a32b-b39934eb4ae3/",
        desc: "Fundamental understanding of AWS cloud platform and basic security concepts.",
    },
    {
        title: "HTML, CSS, and Javascript for Web Developers",
        issuer: "Coursera",
        date: "2020",
        url: "https://coursera.org/share/cb71721932bd9e74f6a1ef594e133e7b",
        desc: "Comprehensive course covering the basics of web development using HTML, CSS, and JavaScript.",
    },
    {
        title: "Google Cloud Fundamentals: Core Infrastructure",
        issuer: "Coursera",
        date: "2019",
        url: "https://coursera.org/share/c946fcdf03dae2b50e1d3f976ce5c09b",
        desc: "Introduction to Google Cloud Platform and its core infrastructure services.",
    },
    {
        title: "Developing Applications with Google Cloud",
        issuer: "Coursera",
        date: "2019",
        url: "https://coursera.org/share/6b5b58f33199b53dbeabeaaa7d034f9f",
        desc: "Building and deploying applications on Google Cloud Platform using various services and tools.",
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

const JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vimal Kumar",
    "alternateName": "VimalVerma",
    "url": "https://vimalverma.in",
    "jobTitle": "Software Developer",
    "knowsAbout": SKILL_CATEGORIES.flatMap(cat => cat.items),
    "description": "Software Developer and Web App Creator specializing in React, Next.js, and NFC technology.",
    "sameAs": [
        "https://github.com/vimal-verma",
        "https://www.linkedin.com/in/vimal-verma/",
        "https://twitter.com/vimalverma_in"
    ]
};

const ProjectCard = ({ project }) => (
    <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
        data-narrate={`Project: ${project.name}. ${project.desc}`}
        data-section="Projects"
        aria-label={`View project ${project.name}`}
    >
        <div className={styles.cardHeader}>
            <Image
                src={project.logo}
                alt={`${project.name} Logo`}
                width={60}
                height={60}
                className={styles.cardLogo}
            />
            <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>{project.name} <ExternalLink size={18} /></h3>
        </div>
        <p>{project.desc}</p>
        <div className={styles.projectTags}>
            {project.tags.map((tag) => (
                <span key={tag} className={styles.projectTag}>{tag}</span>
            ))}
        </div>
        <span className={styles.cardButton} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            View Project <ExternalLink size={16} />
        </span>
    </a>
);

const TimelineItem = ({ title, subtitle, period, desc, icon: Icon }) => (
    <div className={styles.timelineItem}>
        <div className={styles.timelineContent}>
            <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                {Icon && <Icon size={20} style={{ color: "var(--accent-color)" }} />}
                {title}
            </h3>
            <h4>{subtitle}</h4>
            <span className={styles.period}>{period}</span>
            <p>{desc}</p>
        </div>
    </div>
);

const BlogCard = ({ blog }) => (
    <a
        href={blog.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
        data-narrate={`Article: ${blog.title}`}
        data-section="Blog"
        aria-label={`Read article: ${blog.title}`}
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
        <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>{blog.title} <ExternalLink size={18} /></h3>
        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>
            {new Date(blog.published_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
            <span style={{ margin: "0 8px" }}>•</span>
            {blog.positive_reactions_count} Likes
        </p>
        <p>{blog.description}</p>
        <span className={styles.cardButton} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            Read Article <BookOpen size={16} />
        </span>
    </a>
);

export default function HomeContent() {
    const [isDark, setIsDark] = useState(true);
    const [formStatus, setFormStatus] = useState(null);
    const [errors, setErrors] = useState({});
    const [blogs, setBlogs] = useState([]);
    const [loadingBlogs, setLoadingBlogs] = useState(true);
    const recommendationsRef = useRef(null);
    const [typewriterText, setTypewriterText] = useState("Software Developer");
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        let isMounted = true;
        fetch("https://dev.to/api/articles?username=vimal")
            .then((res) => res.json())
            .then((data) => {
                if (isMounted && Array.isArray(data)) {
                    const sorted = data.sort((a, b) => b.positive_reactions_count - a.positive_reactions_count);
                    setBlogs(sorted);
                }
            })
            .catch((err) => console.error("Failed to fetch blogs", err))
            .finally(() => {
                if (isMounted) setLoadingBlogs(false);
            });
        return () => { isMounted = false; };
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

    const validateForm = (data) => {
        const newErrors = {};
        if (!data.name || data.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters long.";
        }
        if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!data.message || data.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters long.";
        }
        return newErrors;
    };

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        setErrors({});

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
            sendto: "vimal"
        };

        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setFormStatus(null);
            return;
        }

        try {
            const res = await fetch("https://api.vdev.in/message", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setFormStatus('success');
                e.target.reset();
                setTimeout(() => setFormStatus(null), 5000);
            } else {
                setFormStatus(null);
            }
        } catch (error) {
            console.error(error);
            setFormStatus(null);
        }
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setIsDark(storedTheme === "dark");
        } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setIsDark(true);
        }

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e) => {
            if (!localStorage.getItem("theme")) {
                setIsDark(e.matches);
            }
        };
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleScrollProgress = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };
        window.addEventListener("scroll", handleScrollProgress);
        return () => window.removeEventListener("scroll", handleScrollProgress);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.scrollAnimationVisible);
                    } else {
                        entry.target.classList.remove(styles.scrollAnimationVisible);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll(`.${styles.scrollAnimation}`);
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const roles = ["Software Developer", "Web App Creator", "Tech Enthusiast", "Open Source Contributor"];
        let roleIndex = 0;
        let charIndex = roles[0].length;
        let isDeleting = false;
        let timer;

        const type = () => {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                setTypewriterText(currentRole.substring(0, charIndex - 1));
                charIndex--;
            } else {
                setTypewriterText(currentRole.substring(0, charIndex + 1));
                charIndex++;
            }

            let speed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentRole.length) {
                speed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                speed = 500;
            }

            timer = setTimeout(type, speed);
        };

        // Start delay
        timer = setTimeout(() => {
            isDeleting = true;
            type();
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const toggleTheme = () => {
        setIsDark((prev) => {
            const newTheme = !prev;
            localStorage.setItem("theme", newTheme ? "dark" : "light");
            return newTheme;
        });
    };

    let showDEVto = () => new Date().getMonth() < 3 && new Date().getFullYear() <= 2026 ? 1 : 0;
    return (
        <div className={`${styles.page} ${isDark ? styles.darkMode : ""}`}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
            <div className={styles.progressBar} style={{ width: `${scrollProgress}%` }} />
            <RobotGuide isDark={isDark} />
            <Header isDark={isDark} toggleTheme={toggleTheme} />
            <main className={styles.main}>
                <HeroBackground isDark={isDark} />
                <section id="introduction" className={styles.hero} data-narrate="Welcome! I am Vimal's virtual assistant. Let me introduce you to Vimal, a passionate Software Developer and Web App Creator." data-section="Introduction">
                    <div className={`${styles.statusBadge} ${styles.animateFadeUp} ${styles.delay1}`}>
                        <span className={styles.statusDot}></span>
                        {showDEVto() === 1 ? "New Year, New You Portfolio Challenge " :
                            "Available for new projects!"
                        }
                    </div>
                    <h1 className={`${styles.title} ${styles.animateFadeUp} ${styles.delay1}`}>
                        <span className={styles.gradientText}>Vimal Kumar</span> <span className={styles.handle}>(VimalVerma)</span>
                    </h1>
                    <p className={`${styles.subtitle} ${styles.animateFadeUp} ${styles.delay2}`}>
                        I am a <span style={{ color: "var(--accent-color, #00F2FF)", fontWeight: "600" }}>{typewriterText}</span>
                        <span style={{ animation: "blink 1s step-end infinite", opacity: 0.7 }}>|</span>
                        <style>{`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
                    </p>
                    <p className={`${styles.description} ${styles.animateFadeUp} ${styles.delay3}`}>
                        I love to build digital solutions that make a difference. Love exploring new technologies and turning ideas into reality through code.
                    </p>

                    <div className={`${styles.animateFadeUp} ${styles.delay3}`} style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", margin: "1.5rem 0" }}>
                        {["React", "Next.js", "Node.js", "AWS", "NFC"].map((tech) => (
                            <span key={tech} style={{
                                padding: "6px 16px",
                                borderRadius: "20px",
                                backgroundColor: isDark ? "rgba(0, 242, 255, 0.1)" : "rgba(0, 242, 255, 0.05)",
                                color: "var(--accent-color, #00F2FF)",
                                border: "1px solid rgba(0, 242, 255, 0.2)",
                                fontSize: "0.85rem",
                                fontWeight: "500",
                                backdropFilter: "blur(5px)"
                            }}>
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className={`${styles.heroButtons} ${styles.animateFadeUp} ${styles.delay3}`}>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaButton}
                            data-narrate="You can download Vimal's full resume here to see his complete professional journey."
                            data-section="Resume"
                            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                        >
                            <Download size={18} /> Download Resume
                        </a>
                        <a
                            href="#contact"
                            className={`${styles.ctaButton} ${styles.secondaryBtn}`}
                            data-narrate="Jump to the contact form to send a message."
                            data-section="Contact"
                            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                        >
                            <Mail size={18} /> Contact Me
                        </a>
                    </div>

                    <div className={styles.heroSocials}>
                        <a href="https://github.com/vimal-verma" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialIcon}>
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/vimal-verma/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcon}>
                            <Linkedin size={24} />
                        </a>
                        <a href="https://twitter.com/vimalverma_in" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIcon}>
                            <Twitter size={24} />
                        </a>
                    </div>

                    <div className={styles.scrollDown} onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                        <div className={styles.mouse}>
                            <div className={styles.wheel}></div>
                        </div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Scroll Down</span>
                    </div>
                </section>

                <section className={styles.contentSection}>

                    <div id="about" className={`${styles.aboutSection} ${styles.scrollAnimation}`} style={{ "--accent-color": "#6366F1" }} data-narrate="Learn more about Vimal's background and passion for technology." data-section="About">
                        <h2 style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--accent-color)" }}>
                            <User size={28} /> About Me
                        </h2>
                        <div className={styles.aboutContent}>
                            <div className={styles.aboutImageWrapper}>
                                <Image
                                    src="/profile.jpg"
                                    alt="Vimal Kumar"
                                    fill
                                    className={styles.aboutImage}
                                    sizes="(max-width: 768px) 200px, 250px"
                                    priority
                                />
                            </div>
                            <div className={styles.aboutText}>
                                <p>
                                    Hello! I&apos;m Vimal Kumar, a dedicated Software Developer with a passion for building digital solutions that make a difference. With a Bachelor&apos;s degree in Computer Science and years of hands-on experience, I specialize in creating robust web applications using modern technologies like React, Next.js, and Node.js.
                                </p>
                                <p>
                                    My journey in tech is driven by curiosity and a desire to solve real-world problems. Whether it&apos;s exploring the potential of Web NFC or architecting scalable frontend systems, I love diving deep into code and emerging with elegant solutions.
                                </p>
                                <p>
                                    When I&apos;m not coding, you can find me writing technical articles, mentoring aspiring developers, or exploring the latest trends in the tech industry.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="projects" className={`${styles.projectsSection} ${styles.scrollAnimation}`} style={{ "--accent-color": "#00F2FF" }} data-narrate="Here are some of the exciting projects Vimal has built. Feel free to hover over them for details." data-section="Projects">
                        <h2 style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--accent-color)" }}><Globe size={28} /> My Projects</h2>
                        <div className={styles.grid}>
                            {PROJECTS.map((project) => (
                                <ProjectCard key={project.name} project={project} />
                            ))}
                        </div>
                    </div>

                    <div id="skills" className={`${styles.skillsSection} ${styles.scrollAnimation}`} style={{ "--accent-color": "#FF0080" }} data-narrate="Vimal has a diverse skill set, ranging from React and Next JS to NFC Technology." data-section="Skills">
                        <h2 style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--accent-color)" }}><Cpu size={28} /> Skills & Technologies</h2>
                        <div className={styles.skillCategoriesGrid}>
                            {SKILL_CATEGORIES.map((category, index) => (
                                <div key={index} className={styles.skillCategoryCard} data-narrate={`Skill Category: ${category.title}`} data-section="Skills">
                                    <div className={styles.skillCategoryHeader}>
                                        <category.icon size={24} style={{ color: "var(--accent-color)" }} />
                                        <h3 className={styles.skillCategoryTitle}>{category.title}</h3>
                                    </div>
                                    <div className={styles.skillList}>
                                        {category.items.map((skill) => (
                                            <span key={skill} className={styles.skillTag} data-narrate={`Skill: ${skill}`} data-section="Skills">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="experience" className={`${styles.experienceSection} ${styles.scrollAnimation}`} style={{ "--accent-color": "#7928CA" }} data-narrate="Here is a timeline of Vimal's professional work experience and career growth." data-section="Experience">
                        <h2 style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--accent-color)" }}><Briefcase size={28} /> Work Experience</h2>
                        <div className={styles.timeline}>
                            {EXPERIENCE.map((job, index) => (
                                <TimelineItem
                                    key={index}
                                    title={job.role}
                                    subtitle={job.company}
                                    period={job.period}
                                    desc={job.desc}
                                    icon={Briefcase}
                                />
                            ))}
                        </div>
                    </div>

                    <div id="education" className={`${styles.educationSection} ${styles.scrollAnimation}`} style={{ "--accent-color": "#FF4D4D" }} data-narrate="Vimal's educational background." data-section="Education">
                        <h2 style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--accent-color)" }}><GraduationCap size={28} /> Education</h2>
                        <div className={styles.timeline}>
                            {EDUCATION.map((edu, index) => (
                                <TimelineItem
                                    key={index}
                                    title={edu.degree}
                                    subtitle={edu.institution}
                                    period={edu.year}
                                    desc={edu.desc}
                                    icon={GraduationCap}
                                />
                            ))}
                        </div>
                    </div>

                    <div id="certifications" className={`${styles.certificationSection} ${styles.scrollAnimation}`} style={{ "--accent-color": "#F5A623" }} data-narrate="Certifications earned by Vimal." data-section="Certifications">
                        <h2 style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--accent-color)" }}><Award size={28} /> Certifications</h2>
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
                                    <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>{cert.title} <ExternalLink size={18} /></h3>
                                    <p style={{ fontWeight: 500, color: "var(--text-primary)", marginBottom: "0.5rem" }}>{cert.issuer} &bull; {cert.date}</p>
                                    <p>{cert.desc}</p>
                                    <span className={styles.cardButton} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                        View Certificate <Award size={16} />
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div id="blog" className={`${styles.blogSection} ${styles.scrollAnimation}`} style={{ "--accent-color": "#10B981" }} data-narrate="Read my latest articles from Dev.to." data-section="Blog">
                        <h2 style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--accent-color)" }}><BookOpen size={28} /> Latest Articles</h2>
                        <div className={styles.grid}>
                            {loadingBlogs ? (
                                <p style={{ textAlign: "center", width: "100%", color: "var(--text-secondary)" }}>Loading articles...</p>
                            ) : (
                                blogs.slice(0, 4).map((blog) => <BlogCard key={blog.id} blog={blog} />)
                            )}
                        </div>
                        <div style={{ textAlign: "center", marginTop: "2rem" }}>
                            <a
                                href="https://dev.to/vimal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.ctaButton}
                                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                            >
                                View more Articles <ExternalLink size={18} />
                            </a>
                        </div>
                    </div>
                </section>

                <section id="recommendations" className={`${styles.recommendationsSection} ${styles.scrollAnimation}`} style={{ "--accent-color": "#8B5CF6" }} data-narrate="Here is what people are saying about Vimal on LinkedIn." data-section="Recommendations">
                    <h2 style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--accent-color)" }}><MessageSquare size={28} /> LinkedIn Recommendations</h2>
                    <div className={styles.carouselContainer}>
                        <button
                            className={`${styles.carouselNavBtn} ${styles.prevBtn}`}
                            onClick={() => scrollRecommendations('left')}
                            aria-label="Previous Recommendation"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <div className={styles.carouselTrack} ref={recommendationsRef}>
                            {RECOMMENDATIONS.map((rec, index) => (
                                <div
                                    key={index}
                                    className={`${styles.card} ${styles.carouselCard}`}
                                    data-narrate={`Recommendation from ${rec.name}`}
                                    data-section="Recommendations"
                                >
                                    <Quote size={32} style={{ color: "var(--accent-color)", opacity: 0.3, marginBottom: "1rem" }} />
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
                            <ChevronRight size={24} />
                        </button>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "2rem" }}>
                        <a
                            href="https://www.linkedin.com/in/vimal-verma/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaButton}
                            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                        >
                            View on LinkedIn <ExternalLink size={18} />
                        </a>
                    </div>
                </section>

                <section id="contact" className={`${styles.contactSection} ${styles.scrollAnimation}`} style={{ "--accent-color": "#14B8A6" }} data-narrate="Ready to collaborate? Use this form to send a message directly to Vimal." data-section="Contact">
                    <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", color: "var(--accent-color)" }}><Mail size={28} /> Get In Touch</h2>
                    <p style={{ marginBottom: "40px", opacity: 0.8, maxWidth: "600px", margin: "0 auto 40px" }}>
                        Have a project in mind or just want to say hi? Fill out the form below and I&apos;ll get back to you as soon as possible.
                    </p>

                    <div className={styles.contactFormContainer}>
                        <form onSubmit={handleContactSubmit}>
                            <div className={styles.formGroup} >
                                <label htmlFor="name" className={styles.formLabel} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><User size={16} /> Name</label>
                                <input type="text" id="name" name="name" required className={styles.formInput} placeholder="Your Name" data-narrate="Enter your name here." data-section="Contact" />
                                {errors.name && <span style={{ color: "#FF4444", fontSize: "0.8rem", marginTop: "0.25rem", display: "block" }}>{errors.name}</span>}
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.formLabel} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Mail size={16} /> Email</label>
                                <input type="email" id="email" name="email" required className={styles.formInput} placeholder="your@email.com" data-narrate="Enter your email address so Vimal can reply." data-section="Contact" />
                                {errors.email && <span style={{ color: "#FF4444", fontSize: "0.8rem", marginTop: "0.25rem", display: "block" }}>{errors.email}</span>}
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.formLabel} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><MessageSquare size={16} /> Message</label>
                                <textarea id="message" name="message" required rows="5" className={styles.formTextarea} placeholder="Your Message" data-narrate="Type your message or project details here." data-section="Contact"></textarea>
                                {errors.message && <span style={{ color: "#FF4444", fontSize: "0.8rem", marginTop: "0.25rem", display: "block" }}>{errors.message}</span>}
                            </div>
                            <button type="submit" className={styles.submitBtn} disabled={formStatus === 'submitting' || formStatus === 'success'} aria-live="polite" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                                {formStatus === 'submitting' ? 'Sending...' : (formStatus === 'success' ? 'Message Sent!' : <><Send size={18} /> Send Message</>)}
                            </button>
                            {formStatus === 'success' && <div className={styles.successMsg} role="alert">Thanks for reaching out! I&apos;ll get back to you soon.</div>}
                        </form>
                    </div>
                </section>

                <button
                    className={`${styles.backToTopBtn} ${showBackToTop ? styles.visible : ""}`}
                    onClick={scrollToTop}
                    aria-label="Back to Top"
                >
                    <ArrowUp size={24} />
                </button>
            </main>
            <Footer />
        </div>
    );
}