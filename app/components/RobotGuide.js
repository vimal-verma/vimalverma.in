"use client";
import { useEffect, useState, useRef } from "react";

const strokeColor = "#333";
const faceColor = "#fff";

// Eyes
const Eyes = ({ expression }) => {
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
    return <g>
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
    return <path id="Vector_9" d="M70.5 119.5C73.8137 119.5 76.5 116.814 76.5 113.5C76.5 110.186 73.8137 107.5 70.5 107.5C67.1863 107.5 64.5 110.186 64.5 113.5C64.5 116.814 67.1863 119.5 70.5 119.5Z" stroke="#00F2FF" strokeWidth="2" />;
};

const RobotIcon = ({ expression, isSpeaking }) => {
    return (
        <svg width="148" height="141" viewBox="0 0 148 141" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="robot">
                <path id="circle" d="M70.5 140.5C109.16 140.5 140.5 109.16 140.5 70.5C140.5 31.8401 109.16 0.5 70.5 0.5C31.8401 0.5 0.5 31.8401 0.5 70.5C0.5 109.16 31.8401 140.5 70.5 140.5Z" fill="#F0F0F0" stroke="#E0E0E0" />
                <path id="squre" d="M95.5 40.5H45.5C34.4543 40.5 25.5 49.4543 25.5 60.5V80.5C25.5 91.5457 34.4543 100.5 45.5 100.5H95.5C106.546 100.5 115.5 91.5457 115.5 80.5V60.5C115.5 49.4543 106.546 40.5 95.5 40.5Z" fill="#1A1A1A" />
            </g>
            <Eyes expression={expression} />
            <Mouth expression={expression} />
        </svg>
    );
};

export default function RobotGuide() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [expression, setExpression] = useState("happy");
    const lastSpokenRef = useRef("");
    const timeoutRef = useRef(null);
    const idleTimeoutRef = useRef(null);
    const isSpeakingRef = useRef(false);

    useEffect(() => {
        const speak = (text) => {
            if (typeof window !== "undefined" && window.speechSynthesis) {
                window.speechSynthesis.cancel(); // Stop previous speech
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.rate = 1.1; // Slightly faster
                utterance.pitch = 1.2; // Robot-like pitch
                utterance.onstart = () => {
                    setIsSpeaking(true);
                    isSpeakingRef.current = true;
                };
                utterance.onend = () => {
                    setIsSpeaking(false);
                    isSpeakingRef.current = false;
                    setExpression("happy");
                };
                window.speechSynthesis.speak(utterance);
            }
        };

        const checkUnderCursor = (x, y) => {
            const element = document.elementFromPoint(x, y);
            if (!element) return;

            // Interactive check (Excited when hovering links/buttons)
            const isInteractive = element.closest("a") || element.closest("button");
            if (isInteractive && !isSpeakingRef.current) {
                setExpression("excited");
            } else if (!isSpeakingRef.current) {
                setExpression((prev) => (prev === "sleepy" ? "sleepy" : "happy"));
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
        // Initial greeting
        speak("Hello! I am your robot guide. Move me around to explore Vimal's portfolio.");

        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Idle Logic: Sleep if no movement for 4 seconds
            if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
            setExpression((prev) => (prev === "sleepy" ? "happy" : prev));

            idleTimeoutRef.current = setTimeout(() => {
                if (!isSpeakingRef.current) setExpression("sleepy");
            }, 4000);

            // Debounce the check slightly to improve performance
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                checkUnderCursor(e.clientX, e.clientY);
            }, 200);
        };

        window.addEventListener("mousemove", updatePosition);
        return () => {
            window.removeEventListener("mousemove", updatePosition);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
            if (typeof window !== "undefined" && window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);



    return (
        <div style={{ position: "fixed", left: 0, top: 0, transform: `translate(${position.x}px, ${position.y}px)`, pointerEvents: "none", zIndex: 9999, transition: "transform 0.05s linear", marginTop: "10px", marginLeft: "10px" }}>
            <RobotIcon expression={expression} isSpeaking={isSpeaking} />
        </div>
    );
}