"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./not-found.module.css";

const RobotPlayer = () => (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
        <rect x="20" y="20" width="60" height="50" rx="10" fill="#2A2A2A" stroke="#00F2FF" strokeWidth="3" />
        <circle cx="35" cy="40" r="6" fill="#00F2FF" />
        <circle cx="65" cy="40" r="6" fill="#00F2FF" />
        <path d="M35 55 Q50 65 65 55" stroke="#00F2FF" strokeWidth="3" fill="none" strokeLinecap="round" />
        <line x1="50" y1="20" x2="50" y2="5" stroke="#555" strokeWidth="3" />
        <circle cx="50" cy="5" r="4" fill="#FF4444">
            <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
        </circle>
        <rect x="15" y="35" width="5" height="20" rx="2" fill="#444" />
        <rect x="80" y="35" width="5" height="20" rx="2" fill="#444" />
    </svg>
);

export default function NotFound() {
    const [isGameActive, setIsGameActive] = useState(false);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [playerPos, setPlayerPos] = useState(50); // Percentage 0-100
    const [items, setItems] = useState([]);
    const scoreRef = useRef(0);

    const gameLoopRef = useRef(null);
    const lastTimeRef = useRef(0);
    const spawnTimerRef = useRef(0);
    const playerPosRef = useRef(50);
    const itemsRef = useRef([]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isGameActive) return;
            if (e.key === "ArrowLeft") {
                setPlayerPos(p => {
                    const newPos = Math.max(5, p - 5);
                    playerPosRef.current = newPos;
                    return newPos;
                });
            }
            if (e.key === "ArrowRight") {
                setPlayerPos(p => {
                    const newPos = Math.min(95, p + 5);
                    playerPosRef.current = newPos;
                    return newPos;
                });
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isGameActive]);

    const startGame = () => {
        setIsGameActive(true);
        setGameOver(false);
        setScore(0);
        scoreRef.current = 0;
        setItems([]);
        itemsRef.current = [];
        setPlayerPos(50);
        playerPosRef.current = 50;
        lastTimeRef.current = 0;
        gameLoopRef.current = requestAnimationFrame(gameLoop);
    };

    const stopGame = () => {
        setIsGameActive(false);
        if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
    };

    const gameLoop = (time) => {
        if (!lastTimeRef.current) lastTimeRef.current = time;
        const deltaTime = time - lastTimeRef.current;
        lastTimeRef.current = time;

        updateGame(deltaTime);

        if (!gameOver) {
            gameLoopRef.current = requestAnimationFrame(gameLoop);
        }
    };

    const updateGame = (deltaTime) => {
        spawnTimerRef.current += deltaTime;

        const currentScore = scoreRef.current;
        const speedMultiplier = 1 + (currentScore * 0.002); // Speed increases with score
        const spawnInterval = Math.max(200, 800 - (currentScore * 2)); // Spawn rate increases

        if (spawnTimerRef.current > spawnInterval) {
            spawnTimerRef.current = 0;
            itemsRef.current.push({
                id: Date.now(),
                x: Math.random() * 90 + 5,
                y: -10,
                type: Math.random() > 0.7 ? "bug" : "data" // 30% chance of bug
            });
        }

        const nextItems = [];
        let isHit = false;
        let scoreToAdd = 0;

        itemsRef.current.forEach(item => {
            const speed = 0.04 * speedMultiplier; // Dynamic speed
            const newY = item.y + (deltaTime * speed);

            // Collision Detection
            // Player is at bottom (approx 85% to 95% Y), width approx 10%
            if (newY > 80 && newY < 95 && Math.abs(item.x - playerPosRef.current) < 8) {
                if (item.type === "bug") {
                    isHit = true;
                } else {
                    scoreToAdd += 10;
                }
            } else if (newY < 110) {
                nextItems.push({ ...item, y: newY });
            }
        });

        itemsRef.current = nextItems;

        if (isHit) {
            setGameOver(true);
            stopGame();
        } else {
            if (scoreToAdd > 0) {
                setScore(s => {
                    scoreRef.current = s + scoreToAdd;
                    return s + scoreToAdd;
                });
            }
            setItems(nextItems);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>404</h1>
                <p className={styles.subtitle}>Page Not Found</p>
                <p className={styles.description}>
                    The page you are looking for has been lost in space.
                    <br />
                    While you are here, help the robot collect data!
                </p>

                <div className={`${styles.gameContainer} ${isGameActive ? styles.fullScreen : ''}`}>
                    {isGameActive && (
                        <button className={styles.quitButton} onClick={stopGame} title="Quit Game">×</button>
                    )}
                    {!isGameActive && !gameOver && (
                        <button className={styles.playButton} onClick={startGame}>Start Game</button>
                    )}
                    {gameOver && (
                        <div className={styles.gameOver}>
                            <h3>Game Over!</h3>
                            <p>Score: {score}</p>
                            <button className={styles.playButton} onClick={startGame}>Try Again</button>
                        </div>
                    )}
                    {isGameActive && <div className={styles.score}>Score: {score}</div>}

                    {items.map(item => (
                        <div key={item.id} className={styles.item} style={{ left: `${item.x}%`, top: `${item.y}%` }}>
                            {item.type === "bug" ? "🐞" : "⚡"}
                        </div>
                    ))}

                    <div className={styles.player} style={{ left: `${playerPos}%` }}>
                        <RobotPlayer />
                    </div>
                </div>

                <Link href="/" className={styles.homeLink}>
                    Return Home
                </Link>
            </div>
        </div>
    );
}