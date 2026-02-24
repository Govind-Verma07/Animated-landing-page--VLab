import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Cpu, GraduationCap, Microscope, Cloud } from 'lucide-react'

const featureData = [
    {
        title: "Real-time Execution",
        description: "Run and test your code or hardware simulations instantly with zero lag.",
        icon: <Zap size={32} className="text-yellow-500" />,
    },
    {
        title: "Interactive Compiler",
        description: "Visual logic representation of compilation phases and syntax trees.",
        icon: <Cpu size={32} className="text-blue-500" />,
    },
    {
        title: "Structured Learning",
        description: "Progress through experiments designed by industry experts and educators.",
        icon: <GraduationCap size={32} className="text-purple-500" />,
    },
    {
        title: "Practical Simulations",
        description: "Experience hardware-level details without the need for physical components.",
        icon: <Microscope size={32} className="text-emerald-500" />,
    },
    {
        title: "Cloud Based Access",
        description: "Access your workspace and progress from any device, anywhere, anytime.",
        icon: <Cloud size={32} className="text-sky-500" />,
    }
]

const FeaturesSection = () => {
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
        <section id="features" className="section-padding relative min-h-screen z-10 bg-white/5 dark:bg-slate-900/10 rounded-[3rem] my-20 motion-safe">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                variants={variants}
                className="relative z-20"
            >
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
                        Why Choose <span className="gradient-text">Virtual Lab Hub?</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
                        We combine cutting-edge technology with instructional design to create the
                        ultimate learning environment for computer science.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {featureData.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-10 glass-3d rounded-3xl group"
                        >
                            <div className="mb-8 p-5 bg-[#050505] rounded-2xl shadow-sm group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 ring-1 ring-white/10 group-hover:ring-primary-500/50 pointer-events-none">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed font-light">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}

                    {/* Special Call to Action Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                        className="lg:col-span-1 flex flex-col items-center justify-center p-10 bg-gradient-to-br from-primary-600 to-indigo-700 rounded-3xl text-white shadow-2xl shadow-primary-500/20 glass-3d group overflow-hidden relative border-none"
                    >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        <h3 className="text-3xl font-black mb-6 relative z-10">Ready to start?</h3>
                        <p className="mb-10 opacity-90 text-center font-medium relative z-10">Join thousands of students mastering CSE concepts today.</p>
                        <button className="px-10 py-4 bg-white text-primary-600 rounded-2xl font-black hover:scale-105 transition-transform relative z-10 shadow-xl">
                            Get Started
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default FeaturesSection
