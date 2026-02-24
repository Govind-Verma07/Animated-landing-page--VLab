import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, Cpu, Code2, Binary } from 'lucide-react'
const HeroSection = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    // Parallax effects
    const textY = useTransform(scrollYProgress, [0, 1], [0, 200])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    const floatingIcons = [
        { icon: <Cpu size={40} />, color: 'text-blue-500', top: '20%', left: '10%', delay: 0, parallax: -100 },
        { icon: <Code2 size={40} />, color: 'text-purple-500', top: '15%', right: '15%', delay: 1, parallax: -150 },
        { icon: <Binary size={40} />, color: 'text-emerald-500', bottom: '25%', left: '20%', delay: 2, parallax: -120 },
        { icon: <Play size={40} />, color: 'text-red-500', bottom: '20%', right: '10%', delay: 1.5, parallax: -80 },
    ]

    const variants = {
        hidden: { opacity: 0, y: 80 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#050505] z-10">
            {/* Background Gradients - Z-0 */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 -left-10 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-0 -right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>

            {/* Floating Elements with Parallax - Z-10 */}
            {floatingIcons.map((item, index) => {
                const yTranslate = useTransform(scrollYProgress, [0, 1], [0, item.parallax])
                return (
                    <motion.div
                        key={index}
                        style={{
                            top: item.top,
                            left: item.left,
                            right: item.right,
                            bottom: item.bottom,
                            y: yTranslate,
                            opacity: 0.4
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, delay: item.delay }}
                        className={`absolute pointer-events-none hidden lg:block ${item.color} motion-safe z-10`}
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {item.icon}
                        </motion.div>
                    </motion.div>
                )
            })}

            {/* Main Content - Z-20 */}
            <div className="section-padding text-center relative z-20">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={variants}
                    style={{ y: textY, opacity }}
                    className="motion-safe"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block py-2 px-6 rounded-full glass-3d text-primary-400 font-bold text-sm mb-8 tracking-wide shadow-cyan-500/10"
                    >
                        Empowering Computer Science Education
                    </motion.span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tighter text-white/90">
                        Next Generation <br />
                        <span className="gradient-text">Virtual Lab Platform</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Bridging the gap between theory and practice. Access professional-grade
                        simulations for Microprocessors, Compilers, DSA, Java, and Python
                        anytime, anywhere.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#labs"
                            className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-primary-500/25 transition-all"
                        >
                            Explore Labs <ArrowRight size={20} />
                        </motion.a>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-8 py-4 glass-3d rounded-2xl font-bold text-lg flex items-center justify-center gap-2"
                        >
                            Watch Demo <Play size={20} className="text-primary-500 fill-primary-500/20" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator - Z-20 */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block z-20"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-1.5 h-1.5 bg-primary-500 rounded-full"
                    ></motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default HeroSection
