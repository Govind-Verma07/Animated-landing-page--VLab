import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const AboutSection = () => {
    const benefits = [
        "24/7 Access from anywhere in the world",
        "Cost-effective solution compared to physical hardware",
        "Safe environment to experiment without risk of damage",
        "Step-by-step guidance and structured learning paths",
        "Real-time feedback and performance analysis",
        "Cloud-based collaboration with peers and mentors"
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
        <section id="about" className="section-padding relative min-h-screen z-10 overflow-hidden motion-safe">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                variants={variants}
                className="flex flex-col lg:flex-row items-center gap-20 relative z-20"
            >
                <div className="lg:w-1/2">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                        What is a <span className="gradient-text">Virtual Lab?</span>
                    </h2>
                    <p className="text-xl text-slate-400 mb-8 leading-relaxed font-light">
                        A Virtual Lab is an interactive, digital simulation of laboratory experiments.
                        It allows students to conduct scientific experiments or explore complex
                        concepts in a controlled, online environment using computers or mobile devices.
                    </p>
                    <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
                        For B.Tech CSE students, these labs provide an invaluable bridge between
                        theoretical knowledge and practical application, ensuring they master
                        core engineering concepts through hands-on practice.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center gap-4 group"
                            >
                                <div className="p-1.5 bg-primary-500/10 rounded-full group-hover:bg-primary-500/20 transition-colors">
                                    <CheckCircle2 className="text-primary-500 shrink-0" size={20} />
                                </div>
                                <span className="font-medium text-slate-300 group-hover:text-white transition-colors">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="lg:w-1/2 relative z-10"
                >
                    <div className="aspect-square glass-3d rounded-[4rem] p-12 flex items-center justify-center relative overflow-hidden group border-white/5 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-indigo-600/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        {/* Animated Rotating Decoration */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="w-80 h-80 border-2 border-dashed border-primary-500/20 rounded-full flex items-center justify-center pointer-events-none"
                        >
                            <div className="w-64 h-64 border-2 border-dashed border-indigo-500/20 rounded-full"></div>
                        </motion.div>

                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                className="text-8xl font-black gradient-text opacity-10 tracking-widest"
                            >
                                VLAB
                            </motion.div>
                        </div>

                        {/* Floating Orbs */}
                        <motion.div
                            animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/4 right-1/4 w-20 h-20 bg-primary-500/30 rounded-full blur-[60px] pointer-events-none"
                        ></motion.div>
                        <motion.div
                            animate={{ y: [0, 60, 0], x: [0, -40, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-indigo-500/30 rounded-full blur-[80px] pointer-events-none"
                        ></motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default AboutSection
