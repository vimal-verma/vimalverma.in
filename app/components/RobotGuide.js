"use client";
import { useEffect, useState, useRef } from "react";

const strokeColor = "#333";
const faceColor = "#fff";

// Eyes
const Eyes = ({ expression, isBlinking, eyeOffset = { x: 0, y: 0 } }) => {
    if (isBlinking) return (
        <g>
            <path d="M42 72 Q50 76 58 72" stroke="#00F2FF" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M82 72 Q90 76 98 72" stroke="#00F2FF" strokeWidth="3" strokeLinecap="round" fill="none" />
        </g>
    );
    if (expression === "excited") return (
        <g>
            <path id="Vector" d="M50.5 55.5L53.5 63.5H62.5L55.5 69.5L58.5 77.5L50.5 72.5L42.5 77.5L45.5 69.5L38.5 63.5H47.5L50.5 55.5Z" fill="#00F2FF" />
            <path id="Vector_2" d="M90.5 55.5L93.5 63.5H102.5L95.5 69.5L98.5 77.5L90.5 72.5L82.5 77.5L85.5 69.5L78.5 63.5H87.5L90.5 55.5Z" fill="#00F2FF" />
        </g>);
    if (expression === "happy") return (
        <g>
            <path id="Vector_4" d="M50.5 60.5C45.5 50.5 35.5 60.5 40.5 70.5L50.5 80.5L60.5 70.5C65.5 60.5 55.5 50.5 50.5 60.5Z" fill="#00F2FF" />
            <path id="Vector_5" d="M90.5 60.5C85.5 50.5 75.5 60.5 80.5 70.5L90.5 80.5L100.5 70.5C105.5 60.5 95.5 50.5 90.5 60.5Z" fill="#00F2FF" />
        </g>);
    if (expression === "sleepy") return (<g>
        <path id="Vector_10" d="M40.5 70.5C47.1667 63.8333 53.8333 63.8333 60.5 70.5" stroke="#00F2FF" strokeWidth="4" strokeLinecap="round" />
        <path id="Vector_11" d="M80.5 70.5C87.1667 63.8333 93.8333 63.8333 100.5 70.5" stroke="#00F2FF" strokeWidth="4" strokeLinecap="round" />
    </g>);
    if (expression === "confused") return (
        <g style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)` }}>
            <path d="M42 68 Q50 60 58 68" stroke="#00F2FF" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M82 72 Q90 76 98 72" stroke="#00F2FF" strokeWidth="3" strokeLinecap="round" fill="none" />
        </g>
    );
    if (expression === "love") return (
        <g>
            <path d="M44 68 C44 62 38 62 38 68 C38 74 50 82 50 82 C50 82 62 74 62 68 C62 62 56 62 56 68 C56 74 50 82 50 82" fill="#FF4444" />
            <path d="M84 68 C84 62 78 62 78 68 C78 74 90 82 90 82 C90 82 102 74 102 68 C102 62 96 62 96 68 C96 74 90 82 90 82" fill="#FF4444" />
        </g>
    );
    return <g style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)` }}>
        <path id="Vector_7" d="M50.5 78.5C54.9183 78.5 58.5 74.9183 58.5 70.5C58.5 66.0817 54.9183 62.5 50.5 62.5C46.0817 62.5 42.5 66.0817 42.5 70.5C42.5 74.9183 46.0817 78.5 50.5 78.5Z" fill="#00F2FF" />
        <path id="Vector_8" d="M90.5 78.5C94.9183 78.5 98.5 74.9183 98.5 70.5C98.5 66.0817 94.9183 62.5 90.5 62.5C86.0817 62.5 82.5 66.0817 82.5 70.5C82.5 74.9183 86.0817 78.5 90.5 78.5Z" fill="#00F2FF" />
    </g>;
};


// Mouth
const Mouth = ({ expression }) => {
    // if (isSpeaking) {
    //     return (
    //         <path d="M 35 70 Q 50 85 65 70 Q 50 55 35 70" fill={strokeColor}>
    //             <animate attributeName="d" dur="0.2s" repeatCount="indefinite"
    //                 values="M 35 70 Q 50 85 65 70 Q 50 55 35 70; M 35 75 Q 50 85 65 75 Q 50 65 35 75; M 35 70 Q 50 85 65 70 Q 50 55 35 70" />
    //         </path>
    //     );
    // }
    if (expression === "happy") return <path id="Vector_6" d="M55.5 110.5C65.5 117.167 75.5 117.167 85.5 110.5" stroke="#00F2FF" strokeWidth="3" strokeLinecap="round" />;
    if (expression === "sleepy") return <path id="Zzz" d="M111.608 34.5V32.6747L118.866 22.4901H111.594V19.9545H122.73V21.7798L115.464 31.9645H122.744V34.5H111.608ZM124.99 34.5V32.696L130.331 26.0838V26.0057H125.175V23.5909H133.975V25.5582L128.961 32.0071V32.0852H134.159V34.5H124.99ZM136.416 34.5V32.696L141.757 26.0838V26.0057H136.601V23.5909H145.401V25.5582L140.386 32.0071V32.0852H145.585V34.5H136.416Z" fill="#00F2FF" />;
    if (expression === "excited") return <path id="Vector_3" d="M55.5 110.5L62.5 103.5L70.5 110.5L78.5 103.5L85.5 110.5" stroke="#00F2FF" strokeWidth="3" strokeLinecap="round" />;
    if (expression === "confused") return <path d="M65 112 Q72 108 80 112 T95 112" stroke="#00F2FF" strokeWidth="3" strokeLinecap="round" fill="none" />;
    if (expression === "love") return <path d="M65 110 Q70.5 118 76 110" stroke="#00F2FF" strokeWidth="3" strokeLinecap="round" fill="none" />;
    return <path id="Vector_9" d="M70.5 119.5C73.8137 119.5 76.5 116.814 76.5 113.5C76.5 110.186 73.8137 107.5 70.5 107.5C67.1863 107.5 64.5 110.186 64.5 113.5C64.5 116.814 67.1863 119.5 70.5 119.5Z" stroke="#00F2FF" strokeWidth="2" />;
};

const RobotIcon = ({ expression, isSpeaking, isDark, onRobotClick, onRobotDoubleClick, onMouseDown, onMouseMove, isSpinning, isBlinking, eyeOffset, isWiggling, isDancing, isMoving, ...props }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <svg
            width="100" height="100" viewBox="-20 -25 188 195" fill="none" xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={onMouseMove}
            onClick={onRobotClick}
            onMouseDown={onMouseDown}
            onDoubleClick={onRobotDoubleClick}
            {...props}
            style={{
                filter: isHovered ? "drop-shadow(0px 0px 15px #00F2FF)" : "drop-shadow(0px 4px 8px rgba(0,0,0,0.15))",
                pointerEvents: "auto",
                cursor: "pointer",
                transition: "filter 0.3s ease, transform 0.6s ease",
                transform: isSpinning ? "rotate(360deg)" : "rotate(0deg)",
                transformOrigin: "center",
                animation: isDancing ? "dance 0.6s ease-in-out infinite" : (isMoving ? "fly 1s ease-in-out infinite" : "none")
            }}
        >
            <defs>
                <linearGradient id="bodyGradient" x1="70.5" y1="0.5" x2="70.5" y2="140.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor={isDark ? "#FFFFFF" : "#4A4A4A"} />
                    <stop offset="1" stopColor={isDark ? "#E0E0E0" : "#2A2A2A"} />
                </linearGradient>
            </defs>
            <g style={{ animation: isDancing ? "rainbow 2s linear infinite" : "none" }}>
                <g id="robot">
                    {/* Antenna */}
                    <g style={{ transformOrigin: "70.5px 0px", animation: isWiggling ? "wiggle 0.5s ease-in-out infinite" : "none" }}>
                        <line x1="70.5" y1="0" x2="70.5" y2="-20" stroke={isDark ? "#D0D0D0" : "#1A1A1A"} strokeWidth="4" strokeLinecap="round" />
                        <circle cx="70.5" cy="-20" r="5" fill="#FF4444" />
                    </g>
                    {/* Legs */}
                    <g style={{ transformOrigin: "50px 130px", transform: isMoving ? "rotate(25deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                        <path d="M50 130 V160 H40" stroke={isDark ? "#D0D0D0" : "#1A1A1A"} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </g>
                    <g style={{ transformOrigin: "98px 130px", transform: isMoving ? "rotate(25deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                        <path d="M98 130 V160 H108" stroke={isDark ? "#D0D0D0" : "#1A1A1A"} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </g>
                    {/* Jetpack Flame */}
                    {isMoving && (
                        <g style={{ animation: "flicker 0.1s infinite alternate" }}>
                            <path d="M60 160 Q70 190 80 160" fill="#FF9900" opacity="0.8" />
                            <path d="M65 160 Q70 180 75 160" fill="#FFFF00" opacity="0.9" />
                        </g>
                    )}
                    {/* Arms */}
                    <path d="M10 80 Q-10 100 10 120" stroke={isDark ? "#D0D0D0" : "#1A1A1A"} strokeWidth="6" strokeLinecap="round" fill="none" />
                    <path d="M138 80 Q158 100 138 120" stroke={isDark ? "#D0D0D0" : "#1A1A1A"} strokeWidth="6" strokeLinecap="round" fill="none" style={{ transformOrigin: "138px 80px", animation: isHovered ? "wave 1s ease-in-out infinite" : "none" }} />
                    <path id="circle" d="M70.5 140.5C109.16 140.5 140.5 109.16 140.5 70.5C140.5 31.8401 109.16 0.5 70.5 0.5C31.8401 0.5 0.5 31.8401 0.5 70.5C0.5 109.16 31.8401 140.5 70.5 140.5Z" fill="url(#bodyGradient)" stroke={isDark ? "#D0D0D0" : "#1A1A1A"} />
                    <path id="squre" d="M95.5 40.5H45.5C34.4543 40.5 25.5 49.4543 25.5 60.5V80.5C25.5 91.5457 34.4543 100.5 45.5 100.5H95.5C106.546 100.5 115.5 91.5457 115.5 80.5V60.5C115.5 49.4543 106.546 40.5 95.5 40.5Z" fill={isDark ? "#1A1A1A" : "#F0F0F0"} />
                </g>
                <Eyes expression={expression} isBlinking={isBlinking} eyeOffset={eyeOffset} />
                <Mouth expression={expression} />
            </g>
        </svg>
    );
};

export default function RobotGuide({ isDark }) {
    const containerRef = useRef(null);
    const currentUtteranceRef = useRef(null);
    const visitedSections = useRef(new Set());
    const allSectionsRef = useRef([]);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [expression, setExpression] = useState("happy");
    const [spokenText, setSpokenText] = useState("");
    const [displayedText, setDisplayedText] = useState("");
    const [hasStarted, setHasStarted] = useState(true);
    const [isSoundEnabled, setIsSoundEnabled] = useState(false);
    const [isSpinning, setIsSpinning] = useState(false);
    const [isBlinking, setIsBlinking] = useState(false);
    const [isWiggling, setIsWiggling] = useState(false);
    const [isDancing, setIsDancing] = useState(false);
    const [isMoving, setIsMoving] = useState(false);
    const [footprints, setFootprints] = useState([]);
    const [hearts, setHearts] = useState([]);
    const lastPetPosition = useRef({ x: 0, y: 0 });
    const petScore = useRef(0);
    const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
    const [robotPosition, setRobotPosition] = useState({ position: "fixed", right: "20px", top: "50px" });
    const currentSectionRef = useRef(null);
    const highlightedElementRef = useRef(null);
    const lastSpokenRef = useRef("");
    const timeoutRef = useRef(null);
    const idleTimeoutRef = useRef(null);
    const isSpeakingRef = useRef(false);
    const lastMouseXRef = useRef(0);
    const lastDirectionRef = useRef(0);
    const shakeCountRef = useRef(0);
    const lastShakeTimeRef = useRef(0);
    const confusedTimeoutRef = useRef(null);
    const moveTimeoutRef = useRef(null);
    const scrollTimeoutRef = useRef(null);
    const isDraggingRef = useRef(false);
    const speechTimeoutRef = useRef(null);
    const [voices, setVoices] = useState([]);
    const [isGameActive, setIsGameActive] = useState(false);
    const [gameScore, setGameScore] = useState(0);
    const [fallingItems, setFallingItems] = useState([]);
    const gameLoopRef = useRef(null);
    const [showSettings, setShowSettings] = useState(false);

    const speak = (text) => {
        if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);

        setDisplayedText("");
        setIsSpeaking(true);
        isSpeakingRef.current = true;
        setSpokenText(text);

        if (typeof window !== "undefined" && window.speechSynthesis) {
            window.speechSynthesis.cancel(); // Stop previous speech

            if (isSoundEnabled) {
                const utterance = new SpeechSynthesisUtterance(text);
                currentUtteranceRef.current = utterance;

                // Select a more human-sounding voice if available
                const preferredVoice = voices.find(voice =>
                    (voice.name.includes("Google") && voice.lang.includes("en")) ||
                    (voice.name.includes("Natural") && voice.lang.includes("en"))
                );
                if (preferredVoice) utterance.voice = preferredVoice;

                utterance.rate = 1.0; // Natural speed
                utterance.pitch = 1.0; // Natural pitch
                utterance.onstart = () => {
                    setIsSpeaking(true);
                    isSpeakingRef.current = true;
                };
                utterance.onend = () => {
                    if (currentUtteranceRef.current === utterance) {
                        setIsSpeaking(false);
                        isSpeakingRef.current = false;
                        setExpression("happy");
                        setSpokenText("");
                    }
                };
                window.speechSynthesis.speak(utterance);
            } else {
                // Fallback for text-only mode
                const duration = Math.max(2000, text.split(" ").length * 300);
                speechTimeoutRef.current = setTimeout(() => {
                    setIsSpeaking(false);
                    isSpeakingRef.current = false;
                    setExpression("happy");
                    setSpokenText("");
                }, duration);
            }
        }
    };

    useEffect(() => {
        const handleSectionClick = (e) => {
            if (hasStarted && e.target.closest('[data-section]')) {
                setExpression("excited");
            }
        };
        window.addEventListener("click", handleSectionClick);
        return () => window.removeEventListener("click", handleSectionClick);
    }, [hasStarted]);

    useEffect(() => {
        const updateVoices = () => {
            setVoices(window.speechSynthesis.getVoices());
        };
        updateVoices();
        window.speechSynthesis.onvoiceschanged = updateVoices;
        return () => { window.speechSynthesis.onvoiceschanged = null; };
    }, []);

    useEffect(() => {
        if (hearts.length > 0) {
            const timer = setTimeout(() => {
                setHearts(prev => prev.filter(h => Date.now() - h.id < 1000));
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [hearts]);

    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 200);
        }, 4000);
        return () => clearInterval(blinkInterval);
    }, []);

    useEffect(() => {
        const wiggleInterval = setInterval(() => {
            if (Math.random() > 0.7) {
                setIsWiggling(true);
                setTimeout(() => setIsWiggling(false), 1000);
            }
        }, 3000);
        return () => clearInterval(wiggleInterval);
    }, []);

    useEffect(() => {
        setDisplayedText("");
        if (!spokenText) return;

        let i = 0;
        const timer = setInterval(() => {
            if (i < spokenText.length) {
                setDisplayedText(spokenText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [spokenText]);

    useEffect(() => {
        speak("Hello! I am your robot guide. Move me around to explore Vimal's portfolio.");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        let interval;
        if (isMoving) {
            interval = setInterval(() => {
                if (containerRef.current) {
                    const rect = containerRef.current.getBoundingClientRect();
                    const x = rect.left + rect.width / 2 + window.scrollX;
                    const y = rect.bottom + window.scrollY - 30;
                    setFootprints(prev => [...prev, { x, y, id: Date.now() }].slice(-20)); // Keep last 20
                }
            }, 100);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isMoving]);

    useEffect(() => {
        // Find all sections on mount
        allSectionsRef.current = Array.from(document.querySelectorAll('[data-section]'))
            .map(el => el.getAttribute('data-section'));

        const activateSection = (sectionEl) => {
            const sectionId = sectionEl.getAttribute('data-section');

            if (sectionId && sectionId !== currentSectionRef.current) {
                if (highlightedElementRef.current) {
                    highlightedElementRef.current.style.outline = "";
                    highlightedElementRef.current.style.boxShadow = "";
                }
                currentSectionRef.current = sectionId;
                highlightedElementRef.current = sectionEl;
                sectionEl.style.outline = "2px solid #00F2FF";
                sectionEl.style.boxShadow = "0 0 20px rgba(0, 242, 255, 0.3)";

                const rect = sectionEl.getBoundingClientRect();
                setRobotPosition({
                    position: "absolute",
                    top: `${rect.top + window.scrollY - 75}px`,
                    left: `${rect.right + window.scrollX - 100}px`,
                    transition: "all 1s ease-in-out"
                });

                if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current);
                setIsMoving(true);
                moveTimeoutRef.current = setTimeout(() => setIsMoving(false), 1000);
            }

            if (sectionId && !visitedSections.current.has(sectionId)) {
                visitedSections.current.add(sectionId);
                if (allSectionsRef.current.length > 0 && visitedSections.current.size === allSectionsRef.current.length) {
                    speak("You have explored all sections! Thanks for visiting.");
                    setExpression("excited");
                }
            }
        };

        const checkUnderCursor = (x, y) => {
            // Use elementsFromPoint to look through the robot (which might be under the cursor)
            const elements = document.elementsFromPoint(x, y);
            const element = elements.find(el => !containerRef.current?.contains(el) && el !== containerRef.current);

            if (!element) return;

            // Interactive check (Excited when hovering links/buttons)
            const isInteractive = element.closest("a") || element.closest("button");
            if (isInteractive && !isSpeakingRef.current) {
                setExpression("excited");
            } else if (!isSpeakingRef.current) {
                setExpression((prev) => {
                    if (prev === "confused") return prev;
                    return prev === "sleepy" ? "sleepy" : "happy";
                });
            }

            if (!hasStarted) return;

            // Track visited sections
            const sectionEl = element.closest('[data-section]');
            if (sectionEl) {
                activateSection(sectionEl);
            }

            // Find closest parent with data-narrate attribute
            const narratable = element.closest("[data-narrate]");
            if (narratable) {
                const text = narratable.getAttribute("data-narrate");
                if (text && text !== lastSpokenRef.current) {
                    setExpression("surprised"); // Look surprised when finding new info
                    speak(text);
                    lastSpokenRef.current = text;
                }
            }
        };

        const updatePosition = (e) => {
            // Idle Logic: Sleep if no movement for 4 seconds
            if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
            setExpression((prev) => (prev === "sleepy" ? "happy" : prev));

            // Shake Detection
            const now = Date.now();
            const velocity = e.clientX - lastMouseXRef.current;
            const direction = Math.sign(velocity);

            if (direction !== lastDirectionRef.current && Math.abs(velocity) > 5) {
                if (now - lastShakeTimeRef.current < 300) shakeCountRef.current += 1;
                else shakeCountRef.current = 1;
                lastShakeTimeRef.current = now;
                lastDirectionRef.current = direction;
            }
            if (shakeCountRef.current >= 5) {
                setExpression("confused");
                shakeCountRef.current = 0;
                if (confusedTimeoutRef.current) clearTimeout(confusedTimeoutRef.current);
                confusedTimeoutRef.current = setTimeout(() => setExpression("happy"), 1500);
            }
            lastMouseXRef.current = e.clientX;

            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const dx = e.clientX - centerX;
                const dy = e.clientY - centerY;
                const angle = Math.atan2(dy, dx);
                // Limit movement radius to 6px
                const distance = Math.min(6, Math.hypot(dx, dy) / 15);
                setEyeOffset({ x: Math.cos(angle) * distance, y: Math.sin(angle) * distance });
            }

            idleTimeoutRef.current = setTimeout(() => {
                if (!isSpeakingRef.current) setExpression("sleepy");
            }, 4000);

            // Debounce the check slightly to improve performance
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                checkUnderCursor(e.clientX, e.clientY);
            }, 200);
        };

        const handleScroll = () => {
            if (!hasStarted) return;
            if (scrollTimeoutRef.current) return;

            scrollTimeoutRef.current = setTimeout(() => {
                const sections = document.querySelectorAll('[data-section]');
                let closestSection = null;
                let minDistance = Infinity;
                const viewportCenter = window.innerHeight / 2;

                sections.forEach(section => {
                    const rect = section.getBoundingClientRect();
                    const sectionCenter = rect.top + rect.height / 2;
                    const distance = Math.abs(viewportCenter - sectionCenter);

                    if (rect.bottom > 0 && rect.top < window.innerHeight) {
                        if (distance < minDistance) {
                            minDistance = distance;
                            closestSection = section;
                        }
                    }
                });

                if (closestSection) {
                    activateSection(closestSection);
                }
                scrollTimeoutRef.current = null;
            }, 100);
        };

        window.addEventListener("mousemove", updatePosition);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("mousemove", updatePosition);
            window.removeEventListener("scroll", handleScroll);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
            if (confusedTimeoutRef.current) clearTimeout(confusedTimeoutRef.current);
            if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current);
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
            if (typeof window !== "undefined" && window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
            if (highlightedElementRef.current) {
                highlightedElementRef.current.style.outline = "";
                highlightedElementRef.current.style.boxShadow = "";
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasStarted, isSoundEnabled]);

    const startGame = () => {
        setIsGameActive(true);
        setGameScore(0);
        setFallingItems([]);
        speak("Catch the falling energy bolts to charge me up! Use arrow keys or drag me.");
        setExpression("excited");
    };

    const stopGame = () => {
        setIsGameActive(false);
        setFallingItems([]);
        if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
        speak(`Good game! You collected ${gameScore} energy bolts.`);
        setExpression("happy");
    };

    useEffect(() => {
        if (!isGameActive) return;

        let lastSpawnTime = 0;
        const speed = 4;

        const loop = (timestamp) => {
            if (!lastSpawnTime) lastSpawnTime = timestamp;

            if (timestamp - lastSpawnTime > 1000) {
                setFallingItems(prev => [
                    ...prev,
                    { id: Date.now(), x: Math.random() * (window.innerWidth - 50) + 25, y: -50 }
                ]);
                lastSpawnTime = timestamp;
            }

            setFallingItems(prev => {
                const robotRect = containerRef.current?.getBoundingClientRect();
                const nextItems = [];
                let caught = false;

                prev.forEach(item => {
                    const nextY = item.y + speed;
                    if (robotRect) {
                        const dist = Math.hypot(
                            (robotRect.left + robotRect.width / 2) - (item.x + 15),
                            (robotRect.top + robotRect.height / 2) - (nextY + 15)
                        );
                        if (dist < 60) {
                            caught = true;
                            return;
                        }
                    }
                    if (nextY < window.innerHeight) nextItems.push({ ...item, y: nextY });
                });

                if (caught) {
                    setGameScore(s => s + 1);
                    setExpression("love");
                    if (confusedTimeoutRef.current) clearTimeout(confusedTimeoutRef.current);
                    confusedTimeoutRef.current = setTimeout(() => setExpression("happy"), 500);
                }
                return nextItems;
            });
            gameLoopRef.current = requestAnimationFrame(loop);
        };
        gameLoopRef.current = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(gameLoopRef.current);
    }, [isGameActive]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
                e.preventDefault();
                setIsMoving(true);
                if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current);
                moveTimeoutRef.current = setTimeout(() => setIsMoving(false), 200);

                setRobotPosition(prev => {
                    const rect = containerRef.current.getBoundingClientRect();
                    let left = rect.left;
                    let top = rect.top;
                    const step = 15;

                    if (e.key === "ArrowLeft") left -= step;
                    if (e.key === "ArrowRight") left += step;
                    if (e.key === "ArrowUp") top -= step;
                    if (e.key === "ArrowDown") top += step;

                    return { position: "fixed", left: `${left}px`, top: `${top}px`, transition: "none" };
                });
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const stopSpeaking = () => {
        if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
        if (typeof window !== "undefined" && window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
        setIsSpeaking(false);
        isSpeakingRef.current = false;
        setSpokenText("");
        currentUtteranceRef.current = null;
    };

    const handleMouseDown = (e) => {
        e.preventDefault();
        const startX = e.clientX;
        const startY = e.clientY;
        const rect = containerRef.current.getBoundingClientRect();
        const offsetX = startX - rect.left;
        const offsetY = startY - rect.top;
        let hasMoved = false;

        const handleMouseMove = (moveEvent) => {
            const dx = moveEvent.clientX - startX;
            const dy = moveEvent.clientY - startY;

            if (!hasMoved && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
                hasMoved = true;
                isDraggingRef.current = true;
            }

            if (hasMoved) {
                setRobotPosition({
                    position: "fixed",
                    left: `${moveEvent.clientX - offsetX}px`,
                    top: `${moveEvent.clientY - offsetY}px`,
                    right: "auto",
                    bottom: "auto",
                    transition: "none"
                });
            }
        };

        const handleMouseUp = () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
            if (hasMoved) {
                setRobotPosition(prev => ({ ...prev, transition: "all 1s ease-in-out" }));
                setTimeout(() => { isDraggingRef.current = false; }, 0);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    const handleRobotClick = () => {
        if (isDraggingRef.current) return;
        if (!isSpinning && !isDancing) {
            setIsDancing(true);
            const jokes = [
                "Why do programmers prefer dark mode? Because light attracts bugs.",
                "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
                "I would tell you a UDP joke, but you might not get it.",
                "Why did the developer go broke? Because he used up all his cache.",
                "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'"
            ];
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            setExpression("excited");
            speak(randomJoke);
            setTimeout(() => setIsDancing(false), 250);
        }
    };

    const handleRobotDoubleClick = (e) => {
        if (isDraggingRef.current) return;
        e.stopPropagation();
        const jokes = [
            "Why do programmers prefer dark mode? Because light attracts bugs.",
            "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
            "I would tell you a UDP joke, but you might not get it.",
            "Why did the developer go broke? Because he used up all his cache.",
            "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'"
        ];
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        setExpression("excited");
        speak(randomJoke);
    };

    const handleRobotMouseMove = (e) => {
        const now = Date.now();
        const dist = Math.hypot(e.clientX - lastPetPosition.current.x, e.clientY - lastPetPosition.current.y);
        lastPetPosition.current = { x: e.clientX, y: e.clientY };

        if (dist > 5) {
            petScore.current += 1;
            if (petScore.current > 30) {
                setExpression("love");
                if (Math.random() > 0.7) setHearts(prev => [...prev, { id: Date.now() + Math.random(), x: e.clientX - 10, y: e.clientY - 20 }]);
                
                if (confusedTimeoutRef.current) clearTimeout(confusedTimeoutRef.current);
                confusedTimeoutRef.current = setTimeout(() => {
                    setExpression("happy");
                    petScore.current = 0;
                }, 2000);
            }
        }
    };

    const isFixed = robotPosition.position === "fixed";

    return (
        <>
            <style>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                }
                @keyframes wave {
                    0% { transform: rotate(0deg); }
                    25% { transform: rotate(-20deg); }
                    50% { transform: rotate(10deg); }
                    75% { transform: rotate(-10deg); }
                    100% { transform: rotate(0deg); }
                }
                @keyframes wiggle {
                    0% { transform: rotate(0deg); }
                    25% { transform: rotate(-15deg); }
                    50% { transform: rotate(15deg); }
                    75% { transform: rotate(-5deg); }
                    100% { transform: rotate(0deg); }
                }
                @keyframes dance {
                    0%, 100% { transform: rotate(0deg) translateY(0); }
                    25% { transform: rotate(-10deg) translateY(-5px); }
                    50% { transform: rotate(10deg) translateY(0); }
                    75% { transform: rotate(-5deg) translateY(-5px); }
                }
                @keyframes fly {
                    0% { transform: translateY(0) rotate(5deg); }
                    50% { transform: translateY(-10px) rotate(5deg); }
                    100% { transform: translateY(0) rotate(5deg); }
                }
                @keyframes flicker {
                    0% { opacity: 0.7; transform: scale(0.9); }
                    100% { opacity: 1; transform: scale(1.1); }
                }
                @keyframes legWalk {
                    0% { transform: rotate(-20deg); }
                    100% { transform: rotate(20deg); }
                }
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
                @keyframes fadeOut {
                    0% { opacity: 0.6; transform: scale(1); }
                    100% { opacity: 0; transform: scale(0.5); }
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                @keyframes floatUp {
                    0% { transform: translateY(0) scale(1); opacity: 1; }
                    100% { transform: translateY(-40px) scale(1.5); opacity: 0; }
                }
                .settings-panel {
                    position: fixed;
                    bottom: 90px;
                    right: 30px;
                    background: ${isDark ? "rgba(30, 30, 30, 0.95)" : "rgba(255, 255, 255, 0.95)"};
                    backdrop-filter: blur(10px);
                    padding: 15px;
                    border-radius: 16px;
                    border: 1px solid ${isDark ? "#444" : "#eee"};
                    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                    z-index: 10001;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    min-width: 180px;
                    animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    transform-origin: bottom right;
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                .setting-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 14px;
                    color: ${isDark ? "#eee" : "#333"};
                    font-weight: 500;
                }
                .setting-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    font-family: inherit;
                }
            `}</style>
            <button
                onClick={() => setShowSettings(!showSettings)}
                aria-label="Settings"
                style={{
                    position: "fixed",
                    bottom: "30px",
                    right: "30px",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: isDark ? "#1A1A1A" : "#FFFFFF",
                    border: "2px solid #00F2FF",
                    color: "#00F2FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    zIndex: 10002,
                    boxShadow: "0 4px 15px rgba(0, 242, 255, 0.3)",
                    transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    transform: showSettings ? "rotate(90deg)" : "rotate(0deg)"
                }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
            </button>

            {showSettings && (
                <div className="settings-panel">
                    <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: isDark ? "#888" : "#999", marginBottom: "5px" }}>Controls</div>
                    
                    <div className="setting-item">
                        <span>Sound Effects</span>
                        <button 
                            className="setting-btn"
                            onClick={() => setIsSoundEnabled(!isSoundEnabled)}
                            style={{ color: isSoundEnabled ? "#00F2FF" : "#FF4444", fontWeight: "bold" }}
                        >
                            {isSoundEnabled ? "ON" : "OFF"}
                        </button>
                    </div>

                    <div className="setting-item">
                        <span>Mini Game</span>
                        <button 
                            className="setting-btn"
                            onClick={() => {
                                if (isGameActive) stopGame();
                                else { startGame(); setShowSettings(false); }
                            }}
                            style={{ color: isGameActive ? "#FF4444" : "#00F2FF", fontWeight: "bold" }}
                        >
                            {isGameActive ? "STOP" : "PLAY"}
                        </button>
                    </div>

                    {isSpeaking && (
                        <button
                            onClick={stopSpeaking}
                            style={{
                                marginTop: "5px",
                                width: "100%",
                                padding: "8px",
                                background: "rgba(255, 68, 68, 0.1)",
                                color: "#FF4444",
                                border: "1px solid rgba(255, 68, 68, 0.3)",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontSize: "13px",
                                fontWeight: "600",
                                transition: "background 0.2s"
                            }}
                        >
                            Stop Speaking
                        </button>
                    )}
                </div>
            )}
            {footprints.map(fp => (
                <div key={fp.id} style={{
                    position: "absolute",
                    left: fp.x,
                    top: fp.y,
                    width: "12px",
                    height: "6px",
                    backgroundColor: "#00F2FF",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    animation: "fadeOut 2s forwards",
                    zIndex: 9998
                }} />
            ))}
            {isGameActive && (
                <>
                    <div style={{ position: "fixed", top: "20px", right: "20px", fontSize: "24px", fontWeight: "bold", color: "#00F2FF", zIndex: 10002, textShadow: "0 0 5px #000" }}>
                        Score: {gameScore}
                    </div>
                    {fallingItems.map(item => (
                        <div key={item.id} style={{
                            position: "fixed",
                            left: item.x,
                            top: item.y,
                            fontSize: "30px",
                            pointerEvents: "none",
                            zIndex: 10000
                        }}>⚡</div>
                    ))}
                </>
            )}
            {hearts.map(h => (
                <div key={h.id} style={{
                    position: "fixed",
                    left: h.x,
                    top: h.y,
                    fontSize: "24px",
                    pointerEvents: "none",
                    animation: "floatUp 1s ease-out forwards",
                    zIndex: 10001
                }}>❤️</div>
            ))}
            <div ref={containerRef} style={{ ...robotPosition, pointerEvents: "none", zIndex: 9999, animation: "float 3s ease-in-out infinite" }}>
                {spokenText && (
                    <div style={{
                        position: "absolute",
                        bottom: isFixed ? "auto" : "100%",
                        top: isFixed ? "100%" : "auto",
                        left: "50%",
                        transform: "translateX(-50%)",
                        marginBottom: isFixed ? "0" : "15px",
                        marginTop: isFixed ? "15px" : "0",
                        backgroundColor: "#000000",
                        color: "#00FF00",
                        borderRadius: "4px",
                        border: "2px solid #00FF00",
                        boxShadow: "0 0 15px rgba(0, 255, 0, 0.4)",
                        width: "240px",
                        textAlign: "left",
                        fontSize: "13px",
                        fontFamily: "'Courier New', Courier, monospace",
                        lineHeight: "1.4",
                        pointerEvents: "none",
                        overflow: "hidden"
                    }}>
                        <div style={{
                            backgroundColor: "#00FF00",
                            color: "#000000",
                            padding: "2px 6px",
                            fontSize: "10px",
                            fontWeight: "bold",
                            display: "flex",
                            justifyContent: "space-between"
                        }}>
                            <span>ROBOT_TERM.EXE</span>
                            <span>X</span>
                        </div>
                        <div style={{ padding: "10px" }}>
                            <span style={{ marginRight: "5px" }}>&gt;</span>
                            {displayedText}
                            <span style={{ animation: "blink 1s step-end infinite", fontWeight: "bold", marginLeft: "2px" }}>_</span>
                        </div>
                    </div>
                )}
                <RobotIcon
                    expression={expression}
                    isSpeaking={isSpeaking}
                    isDark={isDark}
                    onRobotClick={handleRobotClick}
                    onRobotDoubleClick={handleRobotDoubleClick}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleRobotMouseMove}
                    isSpinning={isSpinning}
                    isBlinking={isBlinking}
                    eyeOffset={eyeOffset}
                    isWiggling={isWiggling}
                    isDancing={isDancing}
                    isMoving={isMoving}
                    role="button"
                    aria-label="Interactive Robot Guide"
                    tabIndex="0"
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleRobotClick();
                        }
                    }}
                />
            </div>
        </>
    );
}