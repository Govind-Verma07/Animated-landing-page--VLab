import React from 'react'
import ScrollytellingCanvas from '../components/ScrollytellingCanvas'
import HeroSection from '../components/HeroSection'
import LabsSection from '../components/LabsSection'
import AboutSection from '../components/AboutSection'
import FeaturesSection from '../components/FeaturesSection'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
        >
            <ScrollytellingCanvas>
                <HeroSection />

                <div className="relative">
                    {/* Side decorative gradients */}
                    <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                    <LabsSection />
                    <AboutSection />
                    <FeaturesSection />
                </div>

                {/* CTA Bottom Section */}
                <section className="section-padding py-32 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
                        }}
                        className="max-w-4xl mx-auto glass-card p-12 md:p-20 rounded-[4rem] relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-indigo-600/5"></div>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight relative z-10">
                            Start Learning <br />
                            <span className="gradient-text">Without Limits</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto relative z-10">
                            Join thousands of engineering students who are already using our
                            platform to excel in their practical studies.
                        </p>
                        <div className="relative z-10">
                            <a
                                href="#labs"
                                className="inline-block px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl"
                            >
                                Get Started Now
                            </a>
                        </div>
                    </motion.div>
                </section>

                <Footer />
            </ScrollytellingCanvas>
        </motion.main>
    )
}

export default Home
