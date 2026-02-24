import React, { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, FlaskConical } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Labs', href: '#labs' },
        { name: 'About', href: '#about' },
        { name: 'Features', href: '#features' },
    ]

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? 'py-4 bg-[#050505]/70 border-b border-white/5 backdrop-blur-xl shadow-2xl'
                : 'py-6 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2"
                >
                    <div className="p-2 bg-primary-500 rounded-lg text-white">
                        <FlaskConical size={24} />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">
                        V-Lab <span className="gradient-text">Hub</span>
                    </span>
                </motion.div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-medium text-white/80 hover:text-primary-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <a
                        href="#labs"
                        className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-primary-500/20"
                    >
                        Get Started
                    </a>
                </div>

                {/* Mobile Buttons */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#050505] border-t border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-white/80 hover:text-primary-400"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#labs"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="bg-primary-600 text-white text-center py-3 rounded-xl font-semibold mt-2"
                            >
                                Get Started
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
