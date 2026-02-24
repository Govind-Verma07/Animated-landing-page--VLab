import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Cpu, Code2, Binary, Network, Coffee } from 'lucide-react'
import { labLinks } from '../config/labLinks'

const iconMap = {
    Cpu: <Cpu size={24} />,
    Binary: <Binary size={24} />,
    Network: <Network size={24} />,
    Coffee: <Coffee size={24} />,
    Code2: <Code2 size={24} />,
}

const LabCard = ({ lab, index }) => {
    const link = labLinks[lab.id] || "#"

    const variants = {
        hidden: { opacity: 0, y: 80 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1
            }
        }
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={variants}
            className="group relative cursor-pointer z-20"
            onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
        >
            <div className="glass-3d relative p-8 rounded-3xl overflow-hidden motion-safe">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-indigo-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-primary-500/20 group-hover:ring-primary-500/50 transition-all duration-300">
                        {iconMap[lab.icon]}
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-500 transition-colors duration-300">
                        {lab.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed line-clamp-3 font-light">
                        {lab.description}
                    </p>

                    <div className="flex items-center gap-2 font-bold text-primary-600 dark:text-primary-400 group-hover:gap-4 transition-all duration-300">
                        Launch Lab <ExternalLink size={18} className="transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default LabCard
