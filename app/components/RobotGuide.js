"use client";
import { useEffect, useState, useRef } from "react";

export default function RobotGuide() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isSpeaking, setIsSpeaking] = useState(false);
    const lastSpokenRef = useRef("");
    const timeoutRef = useRef(null);

    const speak = (text) => {
        if (typeof window !== "undefined" && window.speechSynthesis) {
            window.speechSynthesis.cancel(); // Stop previous speech
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 1.1; // Slightly faster
            utterance.pitch = 1.2; // Robot-like pitch
            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);
            window.speechSynthesis.speak(utterance);
        }
    };

    const checkUnderCursor = (x, y) => {
        const element = document.elementFromPoint(x, y);
        if (!element) return;

        // Find closest parent with data-narrate attribute
        const narratable = element.closest("[data-narrate]");
        if (narratable) {
            const text = narratable.getAttribute("data-narrate");
            if (text && text !== lastSpokenRef.current) {
                speak(text);
                lastSpokenRef.current = text;
            }
        }
    };


    useEffect(() => {
        // Initial greeting
        speak("Hello! I am your robot guide. Move me around to explore Vimal's portfolio.");

        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

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
            if (typeof window !== "undefined" && window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        <div style={{ position: "fixed", left: 0, top: 0, transform: `translate(${position.x}px, ${position.y}px)`, pointerEvents: "none", zIndex: 9999, transition: "transform 0.05s linear" }}>
            <div style={{ fontSize: "2.5rem", marginLeft: "10px", marginTop: "10px", filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.3))" }}>
                {isSpeaking ? "🤖💬" : "🤖"}
            </div>
        </div>
    );
}