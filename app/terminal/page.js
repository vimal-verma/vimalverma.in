"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Terminal from "../components/Terminal";

export default function TerminalPage() {
    const router = useRouter();
    const [isDark, setIsDark] = useState(true);
    const [terminalSize, setTerminalSize] = useState({ width: 800, height: 600 });
    const [terminalPos, setTerminalPos] = useState(null);
    const [isFullScreen, setIsFullScreen] = useState(true);

    useEffect(() => {
        const updateSize = () => {
            const width = Math.min(window.innerWidth * 0.9, 800);
            const height = Math.min(window.innerHeight * 0.8, 600);
            setTerminalSize(prev => {
                if (prev.width === width && prev.height === height) return prev;
                return { width, height };
            });
        };
        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <Terminal
            isOpen={true}
            onClose={() => router.push("/")}
            isDark={isDark}
            toggleTheme={() => setIsDark(!isDark)}
            position={terminalPos}
            onPositionChange={setTerminalPos}
            size={terminalSize}
            onSizeChange={setTerminalSize}
            isFullScreen={isFullScreen}
            onFullScreenChange={setIsFullScreen}
        />
    );
}