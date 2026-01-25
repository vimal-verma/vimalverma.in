"use client";
import { useState, useEffect, useRef } from "react";

const Typewriter = ({ text, animate, onComplete, scrollToBottom }) => {
    const [display, setDisplay] = useState(animate ? "" : text);
    const [showCursor, setShowCursor] = useState(animate);

    useEffect(() => {
        if (!animate) {
            setDisplay(text);
            setShowCursor(false);
            return;
        }
        setShowCursor(true);
        let i = 0;
        const speed = text.length > 100 ? 5 : 30;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplay(text.substring(0, i + 1));
                i++;
                if (scrollToBottom) scrollToBottom();
            } else {
                clearInterval(timer);
                setShowCursor(false);
                if (onComplete) onComplete();
                if (scrollToBottom) scrollToBottom();
            }
        }, speed);
        return () => clearInterval(timer);
    }, [animate, text]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <span style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
            {display}
            {showCursor && <span style={{ display: "inline-block", width: "8px", height: "14px", backgroundColor: "#00F2FF", verticalAlign: "middle", marginLeft: "2px", animation: "blink 1s step-end infinite" }}></span>}
            <style>{`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
        </span>
    );
};

export default function Terminal({
    isOpen,
    onClose,
    isDark,
    toggleTheme,
    position,
    onPositionChange,
    size,
    onSizeChange,
    isFullScreen,
    onFullScreenChange,
    actions = {},
    status = {}
}) {
    const [terminalInput, setTerminalInput] = useState("");
    const [terminalHistory, setTerminalHistory] = useState([]);
    const [isBooting, setIsBooting] = useState(true);
    const [terminalMode, setTerminalMode] = useState('command');
    const [terminalFormData, setTerminalFormData] = useState({ name: "", email: "", message: "" });
    const [historyPointer, setHistoryPointer] = useState(null);

    const terminalEndRef = useRef(null);
    const [lastAnimatedId, setLastAnimatedId] = useState(0);
    const terminalDragOffsetRef = useRef({ x: 0, y: 0 });
    const resizeStartRef = useRef({ x: 0, y: 0, w: 0, h: 0 });

    useEffect(() => {
        if (isOpen) {
            terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [terminalHistory, isOpen]);

    useEffect(() => {
        if (isOpen) {
            setIsBooting(prev => prev ? prev : true);
            setTerminalHistory(prev => prev.length === 0 ? prev : []);

            const bootSequence = [
                { text: "Initializing VimalOS kernel...", delay: 100 },
                { text: "Loading system modules... [OK]", delay: 800 },
                { text: "Verifying user permissions... [OK]", delay: 1600 },
                { text: "Establishing secure connection... [Connected]", delay: 2400 },
                { text: "Welcome to Vimal's Assistant v1.0", delay: 3200 },
                { text: "Type 'help' to see available commands.", delay: 4000 }
            ];

            const timeouts = bootSequence.map((step, index) =>
                setTimeout(() => {
                    setTerminalHistory(prev => [...prev, { type: 'output', content: step.text, id: Date.now() + index }]);
                    if (index === bootSequence.length - 1) setIsBooting(false);
                }, step.delay)
            );
            return () => timeouts.forEach(clearTimeout);
        } else {
            setTerminalMode('command');
            setTerminalFormData({ name: "", email: "", message: "" });
            setHistoryPointer(null);
            setIsBooting(false);
            setTerminalHistory([]);
        }
    }, [isOpen]);

    const handleTerminalMouseDown = (e) => {
        if (isFullScreen) return;
        if (e.target.closest('button')) return;
        e.preventDefault();
        const terminal = e.currentTarget.closest('[role="dialog"]');
        if (!terminal) return;

        const rect = terminal.getBoundingClientRect();
        terminalDragOffsetRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };

        if (!position && onPositionChange) {
            onPositionChange({ x: rect.left, y: rect.top });
        }

        const handleMouseMove = (moveEvent) => {
            if (onPositionChange) {
                onPositionChange({
                    x: moveEvent.clientX - terminalDragOffsetRef.current.x,
                    y: moveEvent.clientY - terminalDragOffsetRef.current.y
                });
            }
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

        if (!position && onPositionChange) {
            const terminal = e.target.closest('[role="dialog"]');
            if (terminal) {
                const rect = terminal.getBoundingClientRect();
                onPositionChange({ x: rect.left, y: rect.top });
            }
        }

        resizeStartRef.current = {
            x: e.clientX,
            y: e.clientY,
            w: size.width,
            h: size.height
        };

        const handleMouseMove = (moveEvent) => {
            const dx = moveEvent.clientX - resizeStartRef.current.x;
            const dy = moveEvent.clientY - resizeStartRef.current.y;

            if (onSizeChange) {
                onSizeChange({
                    width: Math.max(300, resizeStartRef.current.w + dx),
                    height: Math.max(200, resizeStartRef.current.h + dy)
                });
            }
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
                    if (actions.setExpression) actions.setExpression(res.ok ? "happy" : "confused");
                } catch (error) {
                    setTerminalHistory(prev => [...prev, { type: 'output', content: "Error: Could not connect to server.", id: Date.now() + 20 }]);
                    if (actions.setExpression) actions.setExpression("confused");
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
                response = "Available commands: help, resume, about, projects, skills, experience, contact, joke, theme, time, game, guide, stop, message, robot, clear, exit\n\nShortcuts:\n[Tab]     Autocomplete command\n[Up/Down] Navigate history";
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
                    if (isFullScreen) {
                        const content = section.innerText.replace(/\n\s*\n/g, '\n\n');
                        response = `--- ${cmd.toUpperCase()} ---\n\n${content}`;
                        if (actions.setExpression) actions.setExpression("excited");
                    } else {
                        section.scrollIntoView({ behavior: "smooth" });
                        response = `Navigating to ${cmd} section...`;
                        if (actions.setExpression) actions.setExpression("excited");
                    }
                } else {
                    response = `Section '${cmd}' not found.`;
                }
                break;
            case "theme":
                if (toggleTheme) {
                    toggleTheme();
                    response = `Switched to ${!isDark ? "dark" : "light"} mode.`;
                    if (actions.setExpression) actions.setExpression("happy");
                } else {
                    response = "Theme toggling is not available.";
                    if (actions.setExpression) actions.setExpression("confused");
                }
                break;
            case "time":
                response = `Current time is: ${new Date().toLocaleTimeString()}`;
                if (actions.setExpression) actions.setExpression("happy");
                break;
            case "game":
                if (actions.startGame) {
                    actions.startGame();
                    response = "Starting mini-game... Catch the energy bolts!, type 'stop' to end.";
                } else {
                    response = "Game module not available.";
                }
                break;
            case "guide":
                if (actions.startIntro) {
                    actions.startIntro();
                    response = "Starting guided tour..., type 'stop' to end.";
                } else {
                    response = "Guide module not available.";
                }
                break;
            case "stop":
                if (status.isGameActive && actions.stopGame) {
                    actions.stopGame();
                    response = "Game stopped.";
                } else if (status.isIntroMode && actions.stopIntro) {
                    actions.stopIntro();
                    response = "Guide stopped.";
                } else {
                    response = "Nothing active to stop.";
                }
                break;
            case "robot":
                const validExpressions = ["dance", "happy", "excited", "sleepy", "confused", "love"];
                if (args.length > 0) {
                    if (args[0] === "dance") {
                        if (actions.setIsDancing) actions.setIsDancing(true);
                        if (actions.setExpression) actions.setExpression("excited");
                        response = "Let's dance!";
                        setTimeout(() => {
                            if (actions.setIsDancing) actions.setIsDancing(false);
                            if (actions.setExpression) actions.setExpression("happy");
                        }, 5000);
                    } else if (validExpressions.includes(args[0])) {
                        if (actions.setExpression) actions.setExpression(args[0]);
                        response = `Expression changed to ${args[0]}.`;
                    } else {
                        response = `Usage: robot <expression|dance>. Valid: ${validExpressions.join(", ")}`;
                        if (actions.setExpression) actions.setExpression("confused");
                    }
                } else {
                    response = `Usage: robot <expression|dance>. Valid: ${validExpressions.join(", ")}`;
                    if (actions.setExpression) actions.setExpression("confused");
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
                if (actions.speak) actions.speak(randomJoke);
                if (actions.setExpression) actions.setExpression("happy");
                break;
            case "clear":
                setTerminalHistory([]);
                setTerminalInput("");
                return;
            case "exit":
                if (onClose) onClose();
                setTerminalInput("");
                return;
            default:
                response = `Command not found: ${cmd}. Type 'help' for assistance.`;
                if (actions.setExpression) actions.setExpression("confused");
        }
        const outputId = Date.now() + 10;
        setTerminalHistory([...currentHistory, { type: 'output', content: response, id: outputId }]);
    };

    if (!isOpen) return null;

    return (
        <div role="dialog" style={{
            position: "fixed",
            top: isFullScreen ? "0" : (position ? `${position.y}px` : "50%"),
            left: isFullScreen ? "0" : (position ? `${position.x}px` : "50%"),
            transform: isFullScreen ? "none" : (position ? "none" : "translate(-50%, -50%)"),
            width: isFullScreen ? "100%" : `${size.width}px`,
            height: isFullScreen ? "100%" : `${size.height}px`,
            backgroundColor: isFullScreen ? "#0c0c0c" : "rgba(15, 15, 20, 0.95)",
            backdropFilter: isFullScreen ? "none" : "blur(10px)",
            border: isFullScreen ? "none" : "1px solid rgba(0, 242, 255, 0.3)",
            borderRadius: isFullScreen ? "0" : "10px",
            boxShadow: "0 0 30px rgba(0, 242, 255, 0.2)",
            zIndex: 3000,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            fontFamily: isFullScreen ? "'Consolas', 'Monaco', 'Courier New', monospace" : "'Courier New', Courier, monospace"
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
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <button onClick={() => onFullScreenChange(!isFullScreen)} style={{ background: "none", border: "none", color: "#00F2FF", cursor: "pointer", fontSize: "16px", padding: "0 5px" }} title={isFullScreen ? "Restore" : "Maximize"}>{isFullScreen ? "❐" : "□"}</button>
                    <button onClick={onClose} style={{ background: "none", border: "none", color: "#FF4444", cursor: "pointer", fontSize: "16px", padding: "0 5px" }}>✕</button>
                </div>
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
                        {line.type === 'input' ? (isFullScreen ? 'guest@vimal:~$ ' : '> ') : ''}
                        <Typewriter
                            text={line.content}
                            animate={line.type === 'output' && line.id > lastAnimatedId}
                            onComplete={() => { setLastAnimatedId(prev => Math.max(prev, line.id)); }}
                            scrollToBottom={() => terminalEndRef.current?.scrollIntoView({ behavior: "auto", block: "nearest" })}
                        />
                    </div>
                ))}
                <div ref={terminalEndRef} />
            </div>
            {!isBooting && (
                <form onSubmit={handleCommand} style={{
                    padding: "10px 15px",
                    borderTop: "1px solid rgba(0, 242, 255, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "rgba(0,0,0,0.3)"
                }}>
                    <span style={{ color: "#00F2FF" }}>{isFullScreen ? "guest@vimal:~$" : "$"}</span>
                    <input id="terminal-input" type="text" value={terminalInput} onChange={(e) => setTerminalInput(e.target.value)} onKeyDown={handleTerminalKeyDown} autoFocus autoComplete="off" style={{ flex: 1, background: "none", border: "none", color: "#fff", fontFamily: "inherit", fontSize: "14px", outline: "none" }} placeholder="Type command..." />
                </form>
            )}
            <div
                onMouseDown={handleResizeMouseDown}
                style={{
                    display: isFullScreen ? "none" : "block",
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
    );
}