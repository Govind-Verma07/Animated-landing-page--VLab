import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const FRAME_COUNT = 232;
const BACKGROUND_COLOR = '#050505';

const ScrollytellingCanvas = ({ children }) => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);

    // Global scroll tracking (Vertical & Horizontal)
    const { scrollYProgress, scrollXProgress } = useScroll();

    // Mouse tracking for parallax influence
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    // Combine all inputs into a single progress value (0 to 1)
    const combinedInput = useTransform(
        [scrollYProgress, scrollXProgress, mouseX, mouseY],
        ([y, x, mx, my]) => {
            const scrollCombined = y * 0.7 + x * 0.3;
            const final = (scrollCombined * 0.8) + (mx * 0.1) + (my * 0.1);
            return Math.min(1, Math.max(0, final));
        }
    );

    // Ultra-smooth multi-directional spring physics
    const smoothProgress = useSpring(combinedInput, {
        stiffness: 35,
        damping: 45,
        mass: 1.5,
        restDelta: 0.001
    });

    // Mouse move handler
    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX / window.innerWidth);
            mouseY.set(e.clientY / window.innerHeight);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Preloading images once
    useEffect(() => {
        let loadedCount = 0;
        const preloadedImages = [];

        const loadImage = (index) => {
            return new Promise((resolve) => {
                const img = new Image();
                const frameIndex = String(index).padStart(3, '0');
                img.src = `/sequence/ezgif-frame-${frameIndex}.png`;
                img.onload = () => {
                    loadedCount++;
                    setLoadingProgress(Math.floor((loadedCount / FRAME_COUNT) * 100));
                    resolve(img);
                };
                img.onerror = () => {
                    loadedCount++;
                    resolve(null);
                };
                preloadedImages[index - 1] = img;
            });
        };

        const loadAll = async () => {
            const promises = [];
            for (let i = 1; i <= FRAME_COUNT; i++) {
                promises.push(loadImage(i));
            }
            await Promise.all(promises);
            setImages(preloadedImages);
            setIsLoading(false);
        };

        loadAll();
    }, []);

    // Update canvas on scroll/interaction
    useEffect(() => {
        if (isLoading || images.length === 0) return;

        const render = (progress) => {
            const canvas = canvasRef.current;
            const context = canvas?.getContext('2d');
            if (!context || !canvas) return;

            const frameIndex = Math.min(
                FRAME_COUNT - 1,
                Math.floor(progress * (FRAME_COUNT - 1))
            );

            const img = images[frameIndex];
            if (!img) return;

            context.fillStyle = BACKGROUND_COLOR;
            context.fillRect(0, 0, canvas.width, canvas.height);

            const canvasRatio = canvas.width / canvas.height;
            const imgRatio = img.width / img.height;
            let drawWidth, drawHeight, offsetX, offsetY;

            if (imgRatio > canvasRatio) {
                drawHeight = canvas.height;
                drawWidth = canvas.height * imgRatio;
                offsetX = (canvas.width - drawWidth) / 2;
                offsetY = 0;
            } else {
                drawWidth = canvas.width;
                drawHeight = canvas.width / imgRatio;
                offsetX = 0;
                offsetY = (canvas.height - drawHeight) / 2;
            }

            context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        };

        const unsubscribe = smoothProgress.on("change", (latest) => {
            requestAnimationFrame(() => render(latest));
        });

        render(smoothProgress.get());
        return () => unsubscribe();
    }, [isLoading, images, smoothProgress]);

    // Handle resize
    useEffect(() => {
        let timeoutId;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                const canvas = canvasRef.current;
                if (!canvas) return;
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }, 100);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    // Interactive Intro Overlay
    const introOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
    const introY = useTransform(scrollYProgress, [0, 0.05], [0, -50]);

    return (
        <div className="relative w-full bg-[#050505]">
            {/* Loading State Overlay */}
            {isLoading && (
                <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]">
                    <div className="text-white/40 mb-4 font-light tracking-widest uppercase text-xs">
                        Initializing Interactive Multiverse
                    </div>
                    <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-white"
                            initial={{ width: 0 }}
                            animate={{ width: `${loadingProgress}%` }}
                        />
                    </div>
                </div>
            )}

            {/* Fixed Background Canvas - Interaction Hub */}
            <div className="fixed inset-0 w-screen h-screen overflow-hidden z-0 pointer-events-none">
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <motion.div style={{ opacity: introOpacity, y: introY }}>
                        <h2 className="text-7xl md:text-[10rem] font-black text-white/95 tracking-tighter mb-4 shadow-2xl">
                            V-LAB.
                        </h2>
                        <p className="text-sm md:text-xl text-white/30 font-medium tracking-[0.5em] uppercase">
                            Multi-Dimensional Experience
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Layer - Scrolls Over Fixed Canvas */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default ScrollytellingCanvas;
