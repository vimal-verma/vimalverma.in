"use client";

import { useEffect, useRef } from "react";
import styles from "../page.module.css";

export default function HeroBackground({ isDark }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let animationFrameId;
        let particles = [];
        let mouse = { x: -1000, y: -1000 };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);
        resize();

        window.addEventListener("mousemove", (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                // Larger, softer particles for an "antigravity" bubble feel
                this.size = Math.random() * 4 + 1;
                this.baseX = this.x;
                this.baseY = this.y;
                // Random float movement
                this.density = (Math.random() * 10) + 5;
                this.angle = Math.random() * 360;
                this.velocity = Math.random() * 0.5 + 0.2;
            }

            draw() {
                ctx.fillStyle = isDark ? "rgba(0, 242, 255, 0.3)" : "rgba(0, 112, 243, 0.3)";
                ctx.shadowBlur = 15;
                ctx.shadowColor = isDark ? "rgba(0, 242, 255, 0.5)" : "rgba(0, 112, 243, 0.5)";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
                ctx.shadowBlur = 0; // Reset shadow for performance
            }

            update() {
                // Gentle floating motion
                this.angle += 0.01;
                this.x += Math.cos(this.angle) * this.velocity;
                this.y += Math.sin(this.angle) * this.velocity;

                // Mouse Interaction - "Antigravity" / Repulsion or smooth attraction?
                // User said "follow cursor" initially, but "antigravity" implies floating.
                // Let's do a smooth attraction that feels like they are orbiting the mouse effectively.

                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                // Mouse influence range
                const maxDistance = 250;

                if (distance < maxDistance) {
                    // Calculate attraction force (stronger as you get closer, but capped)
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (maxDistance - distance) / maxDistance;

                    // Move towards mouse, but retain some inertia
                    const attractionStrength = 2;
                    this.x += forceDirectionX * force * attractionStrength * this.density * 0.1;
                    this.y += forceDirectionY * force * attractionStrength * this.density * 0.1;
                }

                // Screen wrapping to keep particles in view
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }
        }

        const init = () => {
            particles = [];
            // Reduce count for cleaner look
            let numberOfParticles = (canvas.width * canvas.height) / 15000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Removed the line drawing loop completely

            for (let i = 0; i < particles.length; i++) {
                particles[i].draw();
                particles[i].update();
            }

            // Softer, larger mouse glow
            const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 300);
            gradient.addColorStop(0, isDark ? "rgba(0, 242, 255, 0.08)" : "rgba(0, 112, 243, 0.04)");
            gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", () => { });
            cancelAnimationFrame(animationFrameId);
        };
    }, [isDark]);

    return <canvas ref={canvasRef} className={styles.heroCanvas} />;
}
