import React, { useEffect, useRef } from "react";

const MatrixRainingCode: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        let columns = Math.floor(width / 20);
        const characters = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
        const charArray = characters.split("");
        let drops: number[] = [];

        // Initialize drops
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        const frameRate = 25; // Adjust the frame rate (lower value = slower speed)
        let lastFrameTime = Date.now();

        const draw = () => {
            // Create a translucent black rectangle to create the fading effect
            ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = "#0F0";

            // Draw the characters
            ctx.font = "15px monospace";
            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * 20, drops[i] * 20);

                // Reset drops when it reaches the bottom of the canvas
                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const animate = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - lastFrameTime;

            // Update the animation only if enough time has passed
            if (elapsedTime > 1000 / frameRate) {
                draw();
                lastFrameTime = currentTime;
            }

            requestAnimationFrame(animate);
        };

        animate();

        // Update canvas dimensions on window resize
        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            columns = Math.floor(width / 20);
            drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = 1;
            }
        };

        // Check if the user is on a mobile device before handling resize and scroll events
        const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
        if (!isMobileDevice) {
            window.addEventListener("resize", handleResize);
        }

        return () => {
            if (!isMobileDevice) {
                window.removeEventListener("resize", handleResize);
            }
        };
    }, []);

    return <canvas className="fixed top-0 left-0 z-[-1] h-full" ref={canvasRef}></canvas>;
};

export default MatrixRainingCode;
