"use client";
import { useEffect, useState, useRef } from "react";
import styles from "../page.module.css";

const strokeColor = "#333";
const faceColor = "#fff";

// Eyes
const Eyes = ({ expression, isBlinking, eyeOffset = { x: 0, y: 0 }, color = "#00F2FF" }) => {
    if (isBlinking) return (
        <g>
            <path d="M42 72 Q50 76 58 72" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M82 72 Q90 76 98 72" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
        </g>
    );
    if (expression === "excited") return (
        <g>
            <path id="Vector" d="M50.5 55.5L53.5 63.5H62.5L55.5 69.5L58.5 77.5L50.5 72.5L42.5 77.5L45.5 69.5L38.5 63.5H47.5L50.5 55.5Z" fill={color} />
            <path id="Vector_2" d="M90.5 55.5L93.5 63.5H102.5L95.5 69.5L98.5 77.5L90.5 72.5L82.5 77.5L85.5 69.5L78.5 63.5H87.5L90.5 55.5Z" fill={color} />
        </g>);
    if (expression === "happy") return (
        <g>
            <path id="Vector_4" d="M50.5 60.5C45.5 50.5 35.5 60.5 40.5 70.5L50.5 80.5L60.5 70.5C65.5 60.5 55.5 50.5 50.5 60.5Z" fill={color} />
            <path id="Vector_5" d="M90.5 60.5C85.5 50.5 75.5 60.5 80.5 70.5L90.5 80.5L100.5 70.5C105.5 60.5 95.5 50.5 90.5 60.5Z" fill={color} />
        </g>);
    if (expression === "sleepy") return (<g>
        <path id="Vector_10" d="M40.5 70.5C47.1667 63.8333 53.8333 63.8333 60.5 70.5" stroke={color} strokeWidth="4" strokeLinecap="round" />
        <path id="Vector_11" d="M80.5 70.5C87.1667 63.8333 93.8333 63.8333 100.5 70.5" stroke={color} strokeWidth="4" strokeLinecap="round" />
    </g>);
    if (expression === "confused") return (
        <g style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)` }}>
            <path d="M42 68 Q50 60 58 68" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M82 72 Q90 76 98 72" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
        </g>
    );
    if (expression === "love") return (
        <g>
            <path d="M44 68 C44 62 38 62 38 68 C38 74 50 82 50 82 C50 82 62 74 62 68 C62 62 56 62 56 68 C56 74 50 82 50 82" fill="#FF4444" />
            <path d="M84 68 C84 62 78 62 78 68 C78 74 90 82 90 82 C90 82 102 74 102 68 C102 62 96 62 96 68 C96 74 90 82 90 82" fill="#FF4444" />
        </g>
    );
    return <g style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)` }}>
        <path id="Vector_7" d="M50.5 78.5C54.9183 78.5 58.5 74.9183 58.5 70.5C58.5 66.0817 54.9183 62.5 50.5 62.5C46.0817 62.5 42.5 66.0817 42.5 70.5C42.5 74.9183 46.0817 78.5 50.5 78.5Z" fill={color} />
        <path id="Vector_8" d="M90.5 78.5C94.9183 78.5 98.5 74.9183 98.5 70.5C98.5 66.0817 94.9183 62.5 90.5 62.5C86.0817 62.5 82.5 66.0817 82.5 70.5C82.5 74.9183 86.0817 78.5 90.5 78.5Z" fill={color} />
    </g>;
};


// Mouth
const Mouth = ({ expression, color = "#00F2FF" }) => {
    // if (isSpeaking) {
    //     return (
    //         <path d="M 35 70 Q 50 85 65 70 Q 50 55 35 70" fill={strokeColor}>
    //             <animate attributeName="d" dur="0.2s" repeatCount="indefinite"
    //                 values="M 35 70 Q 50 85 65 70 Q 50 55 35 70; M 35 75 Q 50 85 65 75 Q 50 65 35 75; M 35 70 Q 50 85 65 70 Q 50 55 35 70" />
    //         </path>
    //     );
    // }
    if (expression === "happy") return <path id="Vector_6" d="M55.5 85.5C65.5 92.167 75.5 92.167 85.5 85.5" stroke={color} strokeWidth="3" strokeLinecap="round" />;
    if (expression === "sleepy") return <path id="Zzz" d="M111.608 34.5V32.6747L118.866 22.4901H111.594V19.9545H122.73V21.7798L115.464 31.9645H122.744V34.5H111.608ZM124.99 34.5V32.696L130.331 26.0838V26.0057H125.175V23.5909H133.975V25.5582L128.961 32.0071V32.0852H134.159V34.5H124.99ZM136.416 34.5V32.696L141.757 26.0838V26.0057H136.601V23.5909H145.401V25.5582L140.386 32.0071V32.0852H145.585V34.5H136.416Z" fill={color} />;
    if (expression === "excited") return <path id="Vector_3" d="M55.5 85.5L62.5 78.5L70.5 85.5L78.5 78.5L85.5 85.5" stroke={color} strokeWidth="3" strokeLinecap="round" />;
    if (expression === "confused") return <path d="M65 87 Q72 83 80 87 T95 87" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />;
    if (expression === "love") return <path d="M65 85 Q70.5 93 76 85" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />;
    return <path id="Vector_9" d="M70.5 94.5C73.8137 94.5 76.5 91.814 76.5 88.5C76.5 85.186 73.8137 82.5 70.5 82.5C67.1863 82.5 64.5 85.186 64.5 88.5C64.5 91.814 67.1863 94.5 70.5 94.5Z" stroke={color} strokeWidth="2" />;
};

const Typewriter = ({ text, animate, onComplete }) => {
    const [display, setDisplay] = useState(animate ? "" : text);

    useEffect(() => {
        if (!animate) {
            setDisplay(text);
            return;
        }
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplay(text.substring(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
                if (onComplete) onComplete();
            }
        }, 20);
        return () => clearInterval(timer);
    }, [animate, text]); // eslint-disable-line react-hooks/exhaustive-deps

    return <span>{display}</span>;
};

const SECTION_CONTAINER_IDS = [
    "introduction",
    "projects",
    "skills",
    "experience",
    "education",
    "certifications",
    "blog",
    "contact",
    "recommendations"
];

const RobotIcon = ({ expression, isSpeaking, isDark, onRobotClick, onRobotDoubleClick, onMouseDown, onMouseMove, isSpinning, isBlinking, eyeOffset, isWiggling, isDancing, isMoving, leanAngle = 0, isDragging, isIntroMode, color = "#00F2FF", ...props }) => {
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
            className={styles.robotSvg}
            style={{
                transform: isSpinning ? "rotate(360deg)" : `rotate(${leanAngle}deg) translateY(${isMoving ? '-10px' : '0px'})`,
                transformOrigin: "center",
                cursor: isDragging ? "grabbing" : "grab",
                transition: "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                animation: isDancing ? "robot-dance-bounce 0.5s ease-in-out infinite" : "none",
                filter: "drop-shadow(0px 10px 10px rgba(0,0,0,0.2))"
            }}
        >
            <defs>
                <linearGradient id="bodyGradient" x1="70.5" y1="0.5" x2="70.5" y2="140.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor={isDark ? "#FFFFFF" : "#4A4A4A"} />
                    <stop offset="1" stopColor={isDark ? "#E0E0E0" : "#2A2A2A"} />
                </linearGradient>
                <radialGradient id="shadowGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(0,0,0,0.4)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                </radialGradient>
                <linearGradient id="screenGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={isDark ? "#222" : "#eee"} />
                    <stop offset="50%" stopColor={isDark ? "#333" : "#fff"} />
                    <stop offset="100%" stopColor={isDark ? "#222" : "#eee"} />
                </linearGradient>
                <style>{`
                    @keyframes robot-dance-bounce {
                        0%, 100% { transform: translateY(0) rotate(0deg); }
                        25% { transform: translateY(-15px) rotate(-5deg); }
                        75% { transform: translateY(-5px) rotate(5deg); }
                    }
                    @keyframes robot-dance-arm-left {
                        0%, 100% { transform: rotate(0deg); }
                        50% { transform: rotate(130deg); }
                    }
                    @keyframes robot-dance-arm-right {
                        0%, 100% { transform: rotate(0deg); }
                        50% { transform: rotate(-130deg); }
                    }
                `}</style>
            </defs>

            {/* Dynamic Shadow */}
            <ellipse cx="70.5" cy="170" rx={isMoving ? "20" : "35"} ry={isMoving ? "5" : "8"} fill="url(#shadowGradient)" style={{ transition: "all 0.3s ease" }}>
                <animate attributeName="rx" values="35;30;35" dur="3s" repeatCount="indefinite" begin="0s" />
                <animate attributeName="opacity" values="0.6;0.3;0.6" dur="3s" repeatCount="indefinite" begin="0s" />
            </ellipse>

            <g style={{ animation: isDancing ? "rainbow 2s linear infinite" : "none" }}>
                <g style={{ animation: isMoving ? "none" : "float 3s ease-in-out infinite" }}>
                    <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="3s" repeatCount="indefinite" additive="sum" />

                    <g id="robot">
                        {/* Ears / Headphones */}
                        <rect x="-5" y="60" width="12" height="24" rx="4" fill={isDark ? "#888" : "#333"} />
                        <rect x="134" y="60" width="12" height="24" rx="4" fill={isDark ? "#888" : "#333"} />

                        {/* Antenna */}
                        {!isIntroMode ? (
                            <g style={{ transformOrigin: "70.5px 0px", animation: isWiggling ? "wiggle 0.5s ease-in-out infinite" : "none" }}>
                                <line x1="70.5" y1="0" x2="70.5" y2="-25" stroke={isDark ? "#D0D0D0" : "#1A1A1A"} strokeWidth="4" strokeLinecap="round" />
                                <circle cx="70.5" cy="-25" r="6" fill="#FF4444">
                                    <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
                                </circle>
                            </g>
                        ) : (
                            /* Top Hat for Intro Mode */
                            <g transform="translate(0, -5)">
                                <path d="M35.5 5 H105.5 V15 H35.5 Z" fill="#222" stroke={isDark ? "#ccc" : "#333"} strokeWidth="2" />
                                <rect x="45.5" y="-35" width="50" height="40" fill="#333" stroke={isDark ? "#ccc" : "#333"} strokeWidth="2" />
                                <rect x="45.5" y="-5" width="50" height="10" fill="#FF4444" />
                            </g>
                        )}

                        {/* Legs */}
                        <g style={{ transformOrigin: "50px 130px", transform: isMoving ? "rotate(15deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                            <path d="M50 130 L50 155" stroke={isDark ? "#D0D0D0" : "#1A1A1A"} strokeWidth="6" strokeLinecap="round" />
                            <path d="M38 155 Q50 165 62 155" fill={isDark ? "#666" : "#333"} />
                        </g>
                        <g style={{ transformOrigin: "91px 130px", transform: isMoving ? "rotate(-10deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                            <path d="M91 130 L91 155" stroke={isDark ? "#D0D0D0" : "#1A1A1A"} strokeWidth="6" strokeLinecap="round" />
                            <path d="M79 155 Q91 165 103 155" fill={isDark ? "#666" : "#333"} />
                        </g>

                        {/* Jetpack Flame */}
                        {isMoving && (
                            <g style={{ transform: "translate(70.5px, 145px)" }}>
                                <path d="M-10 0 Q0 35 10 0" fill="#FF9900" opacity="0.8"><animate attributeName="d" values="M-10 0 Q0 35 10 0; M-8 0 Q0 45 8 0; M-10 0 Q0 35 10 0" dur="0.2s" repeatCount="indefinite" /></path>
                                <path d="M-5 0 Q0 25 5 0" fill="#FFFF00" opacity="0.9"><animate attributeName="d" values="M-5 0 Q0 25 5 0; M-4 0 Q0 35 4 0; M-5 0 Q0 25 5 0" dur="0.2s" repeatCount="indefinite" /></path>
                            </g>
                        )}

                        {/* Arms */}
                        <g style={{ transformOrigin: "10px 80px", animation: isDancing ? "robot-dance-arm-left 0.5s ease-in-out infinite" : "none", transform: !isDancing && isMoving ? "rotate(10deg)" : "rotate(0deg)", transition: "transform 0.5s" }}>
                            <path d="M10 80 C-15 95 -15 115 10 125" stroke={isDark ? "#D0D0D0" : "#1A1A1A"} strokeWidth="6" strokeLinecap="round" fill="none" />
                            <circle cx="10" cy="125" r="6" fill={isDark ? "#666" : "#333"} />
                        </g>
                        <g style={{ transformOrigin: "131px 80px", animation: isDancing ? "robot-dance-arm-right 0.5s ease-in-out infinite" : (isHovered ? "wave 1s ease-in-out infinite" : (isMoving ? "wave 2s ease-in-out infinite" : "none")) }}>
                            <path d="M131 80 C156 95 156 115 131 125" stroke={isDark ? "#D0D0D0" : "#1A1A1A"} strokeWidth="6" strokeLinecap="round" fill="none" />
                            <circle cx="131" cy="125" r="6" fill={isDark ? "#666" : "#333"} />
                        </g>

                        <path id="circle" d="M70.5 140.5C109.16 140.5 140.5 109.16 140.5 70.5C140.5 31.8401 109.16 0.5 70.5 0.5C31.8401 0.5 0.5 31.8401 0.5 70.5C0.5 109.16 31.8401 140.5 70.5 140.5Z" fill="url(#bodyGradient)" stroke={isDark ? "#D0D0D0" : "#1A1A1A"} />

                        {/* Chest Panel */}
                        <rect x="50.5" y="115" width="40" height="12" rx="4" fill="#000" opacity="0.1" />
                        <circle cx="60.5" cy="121" r="2.5" fill={color}>
                            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="70.5" cy="121" r="2.5" fill="#FF4444">
                            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="80.5" cy="121" r="2.5" fill="#00FF00">
                            <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
                        </circle>

                        <path id="squre" d="M95.5 40.5H45.5C34.4543 40.5 25.5 49.4543 25.5 60.5V80.5C25.5 91.5457 34.4543 100.5 45.5 100.5H95.5C106.546 100.5 115.5 91.5457 115.5 80.5V60.5C115.5 49.4543 106.546 40.5 95.5 40.5Z" fill="url(#screenGradient)" stroke={isDark ? "#555" : "#CCC"} strokeWidth="1" />
                    </g>
                    <Eyes expression={expression} isBlinking={isBlinking} eyeOffset={eyeOffset} color={color} />
                    <Mouth expression={expression} color={color} />
                </g>
            </g>
        </svg>
    );
};

export default function RobotGuide({ isDark, toggleTheme }) {
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
    const [leanAngle, setLeanAngle] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
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
    const fallingItemsRef = useRef([]);
    const gameLoopRef = useRef(null);
    const [showSettings, setShowSettings] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isTerminalDown, setIsTerminalDown] = useState(true);
    const [isIntroMode, setIsIntroMode] = useState(false);
    const isIntroModeRef = useRef(false);
    const [robotSize, setRobotSize] = useState(100);
    const [robotColor, setRobotColor] = useState("#00F2FF");
    const [showTerminal, setShowTerminal] = useState(false);
    const [terminalInput, setTerminalInput] = useState("");
    const [terminalHistory, setTerminalHistory] = useState([
        { type: 'output', content: "Welcome to Vimal's Assistant v1.0", id: 1 },
        { type: 'output', content: "Type 'help' to see available commands.", id: 2 }
    ]);
    const terminalEndRef = useRef(null);
    const lastAnimatedIdRef = useRef(2);
    const [terminalPos, setTerminalPos] = useState(null);
    const terminalDragOffsetRef = useRef({ x: 0, y: 0 });
    const [terminalSize, setTerminalSize] = useState({ width: 600, height: 400 });
    const resizeStartRef = useRef({ x: 0, y: 0, w: 0, h: 0 });
    const [terminalMode, setTerminalMode] = useState('command');
    const [terminalFormData, setTerminalFormData] = useState({ name: "", email: "", message: "" });
    const [historyPointer, setHistoryPointer] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setRobotSize(window.innerWidth < 768 ? 60 : 100);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (showTerminal) {
            terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [terminalHistory, showTerminal]);

    useEffect(() => {
        if (!showTerminal) {
            setTerminalPos(null);
            setTerminalMode('command');
            setTerminalFormData({ name: "", email: "", message: "" });
            setHistoryPointer(null);
        }
    }, [showTerminal]);

    useEffect(() => {
        if (showTerminal) {
            const termW = terminalSize.width;
            const termH = terminalSize.height;
            let termX, termY;

            if (terminalPos) {
                termX = terminalPos.x;
                termY = terminalPos.y;
            } else {
                termX = (window.innerWidth - termW) / 2;
                termY = (window.innerHeight - termH) / 2;
            }

            setRobotPosition({
                position: "fixed",
                left: `${termX + termW / 2 - robotSize / 2}px`,
                top: `${termY - robotSize + 30}px`,
                zIndex: 3001,
                transition: terminalPos ? "none" : "all 0.3s ease-out"
            });
        }
    }, [showTerminal, terminalPos, terminalSize, robotSize]);

    useEffect(() => {
        setTerminalSize({
            width: Math.min(window.innerWidth * 0.9, 600),
            height: 400
        });
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

    const speakAsync = (text) => {
        return new Promise((resolve) => {
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
                    const handleEnd = () => {
                        if (currentUtteranceRef.current === utterance) {
                            setIsSpeaking(false);
                            isSpeakingRef.current = false;
                            setExpression("happy");
                            setSpokenText("");
                            resolve();
                        }
                    };
                    utterance.onend = handleEnd;
                    utterance.onerror = handleEnd;
                    window.speechSynthesis.speak(utterance);
                } else {
                    // Fallback for text-only mode
                    const duration = Math.max(2000, text.split(" ").length * 300);
                    speechTimeoutRef.current = setTimeout(() => {
                        setIsSpeaking(false);
                        isSpeakingRef.current = false;
                        setExpression("happy");
                        setSpokenText("");
                        resolve();
                    }, duration);
                }
            } else {
                resolve();
            }
        });
    };

    const speak = (text) => {
        if (isIntroModeRef.current) return;
        speakAsync(text);
    };

    const startIntro = async () => {
        if (isIntroModeRef.current) return;
        setIsIntroMode(true);
        isIntroModeRef.current = true;
        setShowSettings(false);

        await speakAsync("Welcome to the guided tour! I'll show you around Vimal's portfolio.");

        for (const sectionId of SECTION_CONTAINER_IDS) {
            if (!isIntroModeRef.current) break;

            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "center" });

                // Wait for scroll
                await new Promise(r => setTimeout(r, 1500));

                if (!isIntroModeRef.current) break;

                const narrateText = section.getAttribute("data-narrate") || `This is the ${sectionId} section.`;
                setExpression("excited");
                await speakAsync(narrateText);

                await new Promise(r => setTimeout(r, 800));
            }
        }

        if (isIntroModeRef.current) {
            await speakAsync("That concludes the tour. Feel free to explore more!");
            stopIntro();
        }
    };

    const stopIntro = () => {
        setIsIntroMode(false);
        isIntroModeRef.current = false;
        stopSpeaking();
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
        const checkTerminalPosition = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                // If robot is in the top half of the viewport, show terminal below (down)
                const isUpper = (rect.top + rect.height / 2) < (window.innerHeight / 2);
                setIsTerminalDown(isUpper);
            }
        };

        checkTerminalPosition();
        window.addEventListener("scroll", checkTerminalPosition);
        window.addEventListener("resize", checkTerminalPosition);
        return () => {
            window.removeEventListener("scroll", checkTerminalPosition);
            window.removeEventListener("resize", checkTerminalPosition);
        };
    }, [robotPosition]);

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
        const sections = Array.from(document.querySelectorAll('[data-section]'))
            .map(el => el.getAttribute('data-section'));
        allSectionsRef.current = [...new Set(sections)];

        const activateSection = (sectionEl) => {
            if (showTerminal) return;
            const sectionId = sectionEl.getAttribute('data-section');

            if (sectionId && (sectionId !== currentSectionRef.current || sectionEl !== highlightedElementRef.current)) {
                if (sectionId !== currentSectionRef.current) {
                    stopSpeaking();
                }

                if (highlightedElementRef.current) {
                    highlightedElementRef.current.style.outline = "";
                    highlightedElementRef.current.style.boxShadow = "";
                }
                currentSectionRef.current = sectionId;
                highlightedElementRef.current = sectionEl;

                const computedStyle = window.getComputedStyle(sectionEl);
                const accentColor = computedStyle.getPropertyValue('--accent-color').trim() || '#00F2FF';
                setRobotColor(accentColor);

                if (!SECTION_CONTAINER_IDS.includes(sectionEl.id)) {
                    sectionEl.style.outline = `2px solid ${accentColor}`;
                    sectionEl.style.boxShadow = `0 0 20px color-mix(in srgb, ${accentColor}, transparent 70%)`;
                }

                // Responsive positioning logic
                const rect = sectionEl.getBoundingClientRect();
                const viewportWidth = window.innerWidth;
                let targetLeft = rect.right + window.scrollX - 100;

                // Prevent robot from going off-screen or covering text on small screens
                if (targetLeft + 120 > viewportWidth + window.scrollX) {
                    targetLeft = rect.left + window.scrollX - 120;
                    if (targetLeft < window.scrollX) {
                        targetLeft = window.scrollX + viewportWidth - 120;
                    }
                }

                // Calculate lean direction
                const currentLeft = parseFloat(robotPosition.left) || (rect.right + window.scrollX - 100);
                if (targetLeft > currentLeft + 50) setLeanAngle(15);
                else if (targetLeft < currentLeft - 50) setLeanAngle(-15);
                setTimeout(() => setLeanAngle(0), 1000);

                setRobotPosition({
                    position: "absolute",
                    top: `${rect.top + window.scrollY - 75}px`,
                    left: `${targetLeft}px`,
                    transition: "all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)"
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
                const distance = Math.min(12, Math.hypot(dx, dy) / 15);
                setEyeOffset({ x: Math.cos(angle) * distance, y: Math.sin(angle) * distance });

                if (!isMoving) {
                    const tilt = Math.max(-10, Math.min(10, dx / 20));
                    setLeanAngle(tilt);
                }
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
    }, [hasStarted, isSoundEnabled, showTerminal]);

    const startGame = () => {
        setIsGameActive(true);
        setGameScore(0);
        setFallingItems([]);
        fallingItemsRef.current = [];
        speak("Catch the falling energy bolts to charge me up! Use arrow keys or drag me.");
        setExpression("excited");
    };

    const stopGame = () => {
        setIsGameActive(false);
        setFallingItems([]);
        fallingItemsRef.current = [];
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
                fallingItemsRef.current.push({
                    id: Date.now(),
                    x: Math.random() * (window.innerWidth - 50) + 25,
                    y: -50
                });
                lastSpawnTime = timestamp;
            }

            const robotRect = containerRef.current?.getBoundingClientRect();
            const nextItems = [];
            let scoreIncrement = 0;

            fallingItemsRef.current.forEach(item => {
                const nextY = item.y + speed;
                let caught = false;

                if (robotRect) {
                    const dist = Math.hypot(
                        (robotRect.left + robotRect.width / 2) - (item.x + 15),
                        (robotRect.top + robotRect.height / 2) - (nextY + 15)
                    );
                    if (dist < 60) {
                        caught = true;
                    }
                }

                if (caught) {
                    scoreIncrement++;
                } else if (nextY < window.innerHeight) {
                    nextItems.push({ ...item, y: nextY });
                }
            });

            fallingItemsRef.current = nextItems;
            setFallingItems([...nextItems]);

            if (scoreIncrement > 0) {
                setGameScore(s => s + scoreIncrement);
                setExpression("love");
                if (confusedTimeoutRef.current) clearTimeout(confusedTimeoutRef.current);
                confusedTimeoutRef.current = setTimeout(() => setExpression("happy"), 500);
            }

            gameLoopRef.current = requestAnimationFrame(loop);
        };
        gameLoopRef.current = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(gameLoopRef.current);
    }, [isGameActive]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (showTerminal) return;
            if (!containerRef.current) return;
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
    }, [showTerminal]);

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
                setIsDragging(true);
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
                setTimeout(() => {
                    isDraggingRef.current = false;
                    setIsDragging(false);
                }, 0);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    const handleRobotClick = () => {
        if (isDraggingRef.current) return;
        setShowTerminal(true);
    };

    const handleTerminalMouseDown = (e) => {
        if (e.target.closest('button')) return;
        e.preventDefault();
        const terminal = e.currentTarget.closest('[role="dialog"]');
        if (!terminal) return;

        const rect = terminal.getBoundingClientRect();
        terminalDragOffsetRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };

        if (!terminalPos) {
            setTerminalPos({ x: rect.left, y: rect.top });
        }

        const handleMouseMove = (moveEvent) => {
            setTerminalPos({
                x: moveEvent.clientX - terminalDragOffsetRef.current.x,
                y: moveEvent.clientY - terminalDragOffsetRef.current.y
            });
        };

        const handleMouseUp = () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    const handleResizeMouseDown = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!terminalPos) {
            const terminal = e.target.closest('[role="dialog"]');
            if (terminal) {
                const rect = terminal.getBoundingClientRect();
                setTerminalPos({ x: rect.left, y: rect.top });
            }
        }

        resizeStartRef.current = {
            x: e.clientX,
            y: e.clientY,
            w: terminalSize.width,
            h: terminalSize.height
        };

        const handleMouseMove = (moveEvent) => {
            const dx = moveEvent.clientX - resizeStartRef.current.x;
            const dy = moveEvent.clientY - resizeStartRef.current.y;

            setTerminalSize({
                width: Math.max(300, resizeStartRef.current.w + dx),
                height: Math.max(200, resizeStartRef.current.h + dy)
            });
        };

        const handleMouseUp = () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    const handleTerminalKeyDown = (e) => {
        if (terminalMode !== 'command') return;

        if (e.key === 'Tab') {
            e.preventDefault();
            const commands = [
                "help", "resume", "about", "projects", "skills", "experience",
                "education", "certifications", "blog", "contact", "recommendations",
                "joke", "theme", "time", "game", "guide", "stop", "message", "robot", "clear", "exit"
            ];
            const input = terminalInput.trim().toLowerCase();
            if (!input) return;

            const matches = commands.filter(cmd => cmd.startsWith(input));
            if (matches.length === 1) {
                setTerminalInput(matches[0]);
            } else if (matches.length > 1) {
                let commonPrefix = matches[0];
                for (let i = 1; i < matches.length; i++) {
                    while (!matches[i].startsWith(commonPrefix)) {
                        commonPrefix = commonPrefix.substring(0, commonPrefix.length - 1);
                    }
                }
                setTerminalInput(commonPrefix);
            }
            return;
        }

        if (e.key === 'ArrowUp') {
            e.preventDefault();
            const commands = terminalHistory.filter(h => h.type === 'input').map(h => h.content);
            if (commands.length === 0) return;

            let newPointer = historyPointer;
            if (newPointer === null) {
                newPointer = commands.length - 1;
            } else {
                newPointer = Math.max(0, newPointer - 1);
            }
            setHistoryPointer(newPointer);
            setTerminalInput(commands[newPointer]);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const commands = terminalHistory.filter(h => h.type === 'input').map(h => h.content);
            if (historyPointer === null) return;

            let newPointer = historyPointer + 1;
            if (newPointer >= commands.length) {
                setHistoryPointer(null);
                setTerminalInput("");
            } else {
                setHistoryPointer(newPointer);
                setTerminalInput(commands[newPointer]);
            }
        }
    };

    const handleCommand = async (e) => {
        e.preventDefault();
        const rawInput = terminalInput.trim();
        if (!rawInput) return;

        const inputId = Date.now();
        const currentHistory = [...terminalHistory, { type: 'input', content: rawInput, id: inputId }];
        setTerminalInput("");
        setHistoryPointer(null);

        if (terminalMode !== 'command') {
            let responseMsg = "";
            let nextMode = terminalMode;
            let nextData = { ...terminalFormData };
            let shouldSubmit = false;

            if (terminalMode === 'input_name') {
                if (rawInput.length < 2) {
                    responseMsg = "Name is too short. Please enter your name:";
                } else {
                    nextData.name = rawInput;
                    nextMode = 'input_email';
                    responseMsg = "Please enter your email:";
                }
            } else if (terminalMode === 'input_email') {
                if (!/^\S+@\S+\.\S+$/.test(rawInput)) {
                    responseMsg = "Invalid email format. Please enter your email:";
                } else {
                    nextData.email = rawInput;
                    nextMode = 'input_message';
                    responseMsg = "Please enter your message:";
                }
            } else if (terminalMode === 'input_message') {
                if (rawInput.length < 10) {
                    responseMsg = "Message is too short. Please enter your message:";
                } else {
                    nextData.message = rawInput;
                    nextMode = 'command';
                    shouldSubmit = true;
                    responseMsg = "Sending message...";
                }
            }

            setTerminalMode(nextMode);
            setTerminalFormData(nextData);
            setTerminalHistory([...currentHistory, { type: 'output', content: responseMsg, id: Date.now() + 10 }]);

            if (shouldSubmit) {
                try {
                    const res = await fetch("https://api.vdev.in/message", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ ...nextData, sendto: "vimal" }),
                    });

                    const resultMsg = res.ok ? "Message sent successfully! I'll get back to you soon." : "Failed to send message. Please try again later.";
                    setTerminalHistory(prev => [...prev, { type: 'output', content: resultMsg, id: Date.now() + 20 }]);
                    setExpression(res.ok ? "happy" : "confused");
                } catch (error) {
                    setTerminalHistory(prev => [...prev, { type: 'output', content: "Error: Could not connect to server.", id: Date.now() + 20 }]);
                    setExpression("confused");
                }
                setTerminalFormData({ name: "", email: "", message: "" });
            }
            return;
        }

        const parts = rawInput.toLowerCase().split(/\s+/);
        const cmd = parts[0];
        const args = parts.slice(1);
        let response = "";

        switch (cmd) {
            case "help":
                response = "Available commands: help, resume, about, projects, skills, experience, contact, joke, theme, time, game, guide, stop, message, robot, clear, exit";
                break;
            case "resume":
                response = "Opening resume...";
                window.open("/resume.pdf", "_blank");
                break;
            case "about":
            case "projects":
            case "skills":
            case "experience":
            case "education":
            case "certifications":
            case "blog":
            case "contact":
            case "recommendations":
                const section = document.getElementById(cmd);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                    response = `Navigating to ${cmd} section...`;
                    setExpression("excited");
                } else {
                    response = `Section '${cmd}' not found.`;
                }
                break;
            case "theme":
                if (toggleTheme) {
                    toggleTheme();
                    response = `Switched to ${!isDark ? "dark" : "light"} mode.`;
                    setExpression("happy");
                } else {
                    response = "Theme toggling is not available.";
                    setExpression("confused");
                }
                break;
            case "time":
                response = `Current time is: ${new Date().toLocaleTimeString()}`;
                setExpression("happy");
                break;
            case "game":
                startGame();
                response = "Starting mini-game... Catch the energy bolts!, type 'stop' to end.";
                break;
            case "guide":
                startIntro();
                response = "Starting guided tour..., type 'stop' to end.";
                break;
            case "stop":
                if (isGameActive) {
                    stopGame();
                    response = "Game stopped.";
                } else if (isIntroMode) {
                    stopIntro();
                    response = "Guide stopped.";
                } else {
                    response = "Nothing active to stop.";
                }
                break;
            case "robot":
                const validExpressions = ["dance", "happy", "excited", "sleepy", "confused", "love"];
                if (args.length > 0) {
                    if (args[0] === "dance") {
                        setIsDancing(true);
                        setExpression("excited");
                        response = "Let's dance!";
                        setTimeout(() => {
                            setIsDancing(false);
                            setExpression("happy");
                        }, 5000);
                    } else if (validExpressions.includes(args[0])) {
                        setExpression(args[0]);
                        response = `Expression changed to ${args[0]}.`;
                    } else {
                        response = `Usage: robot <expression|dance>. Valid: ${validExpressions.join(", ")}`;
                        setExpression("confused");
                    }
                } else {
                    response = `Usage: robot <expression|dance>. Valid: ${validExpressions.join(", ")}`;
                    setExpression("confused");
                }
                break;
            case "message":
                setTerminalMode('input_name');
                response = "Please enter your name:";
                break;
            case "joke":
                const jokes = [
                    "Why do programmers prefer dark mode? Because light attracts bugs.",
                    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
                    "I would tell you a UDP joke, but you might not get it.",
                    "Why did the developer go broke? Because he used up all his cache.",
                    "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'"
                ];
                const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
                response = randomJoke;
                speak(randomJoke);
                setExpression("happy");
                break;
            case "clear":
                setTerminalHistory([]);
                setTerminalInput("");
                return;
            case "exit":
                setShowTerminal(false);
                setTerminalInput("");
                return;
            default:
                response = `Command not found: ${cmd}. Type 'help' for assistance.`;
                setExpression("confused");
        }
        const outputId = Date.now() + 10;
        setTerminalHistory([...currentHistory, { type: 'output', content: response, id: outputId }]);
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
        if (isDraggingRef.current) return;
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
            <button
                onClick={() => setShowSettings(!showSettings)}
                aria-label="Settings"
                className={styles.settingsToggle}
                style={{
                    transform: showSettings ? "rotate(90deg)" : "rotate(0deg)"
                }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
            </button>

            {showSettings && (
                <div className={styles.settingsPanel}>
                    <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: isDark ? "#888" : "#999", marginBottom: "5px" }}>Controls</div>

                    <div className={styles.settingItem}>
                        <span>Robot Visibility</span>
                        <button
                            className={styles.settingBtn}
                            onClick={() => setIsVisible(!isVisible)}
                            style={{ color: isVisible ? "#00F2FF" : "#FF4444", fontWeight: "bold" }}
                        >
                            {isVisible ? "SHOW" : "HIDE"}
                        </button>
                    </div>

                    <div className={styles.settingItem}>
                        <span>Sound Effects</span>
                        <button
                            className={styles.settingBtn}
                            onClick={() => setIsSoundEnabled(!isSoundEnabled)}
                            style={{ color: isSoundEnabled ? "#00F2FF" : "#FF4444", fontWeight: "bold" }}
                        >
                            {isSoundEnabled ? "ON" : "OFF"}
                        </button>
                    </div>

                    <div className={styles.settingItem}>
                        <span>Mini Game</span>
                        <button
                            className={styles.settingBtn}
                            onClick={() => {
                                if (isGameActive) stopGame();
                                else { startGame(); setShowSettings(false); }
                            }}
                            style={{ color: isGameActive ? "#FF4444" : "#00F2FF", fontWeight: "bold" }}
                        >
                            {isGameActive ? "STOP" : "PLAY"}
                        </button>
                    </div>

                    <div className={styles.settingItem}>
                        <span>Guided Tour</span>
                        <button
                            className={styles.settingBtn}
                            onClick={isIntroMode ? stopIntro : startIntro}
                            style={{ color: isIntroMode ? "#FF4444" : "#00F2FF", fontWeight: "bold" }}
                        >
                            {isIntroMode ? "STOP" : "START"}
                        </button>
                    </div>

                    {isSpeaking && (
                        <button
                            onClick={() => {
                                if (isIntroMode) stopIntro();
                                else stopSpeaking();
                            }}
                            className={styles.stopSpeakingBtn}
                        >
                            {isIntroMode ? "Stop Tour" : "Stop Speaking"}
                        </button>
                    )}
                </div>
            )}
            {footprints.map(fp => (
                <div key={fp.id} className={styles.footprint} style={{
                    left: fp.x,
                    top: fp.y
                }} />
            ))}
            {isGameActive && (
                <>
                    <div style={{
                        position: "fixed",
                        top: "80px",
                        right: "20px",
                        background: "rgba(0, 0, 0, 0.85)",
                        color: "#00F2FF",
                        padding: "15px 25px",
                        borderRadius: "15px",
                        zIndex: 2001,
                        border: "1px solid rgba(0, 242, 255, 0.3)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                        backdropFilter: "blur(8px)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        minWidth: "120px"
                    }}>
                        <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "5px", color: "#ccc" }}>Score</span>
                        <span style={{ fontSize: "32px", fontWeight: "bold", textShadow: "0 0 10px rgba(0, 242, 255, 0.5)" }}>{gameScore}</span>
                        <span style={{ fontSize: "12px", marginTop: "5px", opacity: 0.7 }}>⚡ Energy</span>
                    </div>
                    {fallingItems.map(item => (
                        <div key={item.id} className={styles.fallingItem} style={{
                            left: item.x,
                            top: item.y,
                            position: "fixed",
                            zIndex: 2000
                        }}>⚡</div>
                    ))}
                </>
            )}
            {showTerminal && (
                <div role="dialog" style={{
                    position: "fixed",
                    top: terminalPos ? `${terminalPos.y}px` : "50%",
                    left: terminalPos ? `${terminalPos.x}px` : "50%",
                    transform: terminalPos ? "none" : "translate(-50%, -50%)",
                    width: `${terminalSize.width}px`,
                    height: `${terminalSize.height}px`,
                    backgroundColor: "rgba(15, 15, 20, 0.95)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(0, 242, 255, 0.3)",
                    borderRadius: "10px",
                    boxShadow: "0 0 30px rgba(0, 242, 255, 0.2)",
                    zIndex: 3000,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    fontFamily: "'Courier New', Courier, monospace"
                }}>
                    <div
                        onMouseDown={handleTerminalMouseDown}
                        style={{
                            padding: "10px 15px",
                            background: "rgba(0, 242, 255, 0.1)",
                            borderBottom: "1px solid rgba(0, 242, 255, 0.2)",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            color: "#00F2FF",
                            cursor: "move"
                        }}>
                        <span style={{ fontWeight: "bold", fontSize: "14px" }}>TERMINAL_ACCESS</span>
                        <button onClick={() => setShowTerminal(false)} style={{ background: "none", border: "none", color: "#FF4444", cursor: "pointer", fontSize: "16px", padding: "0 5px" }}>✕</button>
                    </div>
                    <div style={{
                        flex: 1,
                        padding: "15px",
                        overflowY: "auto",
                        color: "#e0e0e0",
                        fontSize: "14px",
                        lineHeight: "1.5"
                    }} onClick={() => document.getElementById("terminal-input")?.focus()}>
                        {terminalHistory.map((line) => (
                            <div key={line.id} style={{ marginBottom: "5px", color: line.type === 'input' ? '#aaa' : '#00F2FF' }}>
                                {line.type === 'input' ? '> ' : ''}
                                <Typewriter
                                    text={line.content}
                                    animate={line.type === 'output' && line.id > lastAnimatedIdRef.current}
                                    onComplete={() => { lastAnimatedIdRef.current = Math.max(lastAnimatedIdRef.current, line.id); }}
                                />
                            </div>
                        ))}
                        <div ref={terminalEndRef} />
                    </div>
                    <form onSubmit={handleCommand} style={{
                        padding: "10px 15px",
                        borderTop: "1px solid rgba(0, 242, 255, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        background: "rgba(0,0,0,0.3)"
                    }}>
                        <span style={{ color: "#00F2FF" }}>$</span>
                        <input id="terminal-input" type="text" value={terminalInput} onChange={(e) => setTerminalInput(e.target.value)} onKeyDown={handleTerminalKeyDown} autoFocus autoComplete="off" style={{ flex: 1, background: "none", border: "none", color: "#fff", fontFamily: "inherit", fontSize: "14px", outline: "none" }} placeholder="Type command..." />
                    </form>
                    <div
                        onMouseDown={handleResizeMouseDown}
                        style={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            width: "15px",
                            height: "15px",
                            cursor: "nwse-resize",
                            zIndex: 10,
                            background: "linear-gradient(135deg, transparent 50%, rgba(0, 242, 255, 0.5) 50%)"
                        }}
                    />
                </div>
            )}
            {hearts.map(h => (
                <div key={h.id} className={styles.heart} style={{
                    left: h.x,
                    top: h.y,
                    position: "fixed",
                    pointerEvents: "none",
                    zIndex: 2000
                }}>❤️</div>
            ))}
            {isVisible && (
                <div ref={containerRef} className={styles.robotContainer} style={robotPosition}>
                    {spokenText && (
                        <div className={styles.terminal} style={{
                            position: "absolute",
                            left: "50%",
                            transform: "translateX(-50%)",
                            bottom: isTerminalDown ? "auto" : "100%",
                            top: isTerminalDown ? "100%" : "auto",
                            marginBottom: isTerminalDown ? "0" : "25px",
                            marginTop: isTerminalDown ? "25px" : "0",
                            fontSize: robotSize === 60 ? "12px" : "14px",
                            width: robotSize === 60 ? "160px" : "220px",
                            overflow: "visible",
                            backgroundColor: isDark ? "rgba(30, 30, 30, 0.95)" : "rgba(255, 255, 255, 0.95)",
                            color: isDark ? "#fff" : "#333",
                            borderRadius: "25px",
                            border: `1px solid ${isDark ? "#555" : "#ccc"}`,
                            padding: "15px",
                            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                            fontFamily: "sans-serif",
                            textAlign: "center",
                            zIndex: 1000
                        }}
                            onClick={() => setSpokenText("")}
                            title="Click to dismiss"
                        >
                            {displayedText}
                            <svg width="30" height="15" viewBox="0 0 30 15" style={{
                                position: "absolute",
                                left: "50%",
                                transform: `translateX(-50%) ${isTerminalDown ? "rotate(180deg)" : ""}`,
                                [isTerminalDown ? "top" : "bottom"]: "-14px",
                                overflow: "visible"
                            }}>
                                <path d="M0 0 Q15 25 30 0" fill={isDark ? "rgba(30, 30, 30, 0.95)" : "rgba(255, 255, 255, 0.95)"} stroke={isDark ? "#555" : "#ccc"} strokeWidth="1" />
                                <path d="M2 0 L28 0" stroke="none" fill={isDark ? "rgba(30, 30, 30, 0.95)" : "rgba(255, 255, 255, 0.95)"} />
                            </svg>
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
                        leanAngle={leanAngle}
                        isDragging={isDragging}
                        isIntroMode={isIntroMode}
                        color={robotColor}
                        width={robotSize}
                        height={robotSize}
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
            )}
        </>
    );
}