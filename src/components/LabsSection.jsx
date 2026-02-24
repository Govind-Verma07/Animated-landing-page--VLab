import React from 'react'
import { motion } from 'framer-motion'
import LabCard from './LabCard'
import { labData } from '../config/labLinks'

const LabsSection = () => {
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
        <section id="labs" className="section-padding relative min-h-screen z-10 motion-safe">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                variants={variants}
                className="relative z-20"
            >
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                        Explore Our <span className="gradient-text">Virtual Labs</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
                        Choose from a variety of specialized computer science laboratories designed
                        to provide hands-on experience in a virtual environment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {labData.map((lab, index) => (
                        <LabCard key={lab.id} lab={lab} index={index} />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default LabsSection
