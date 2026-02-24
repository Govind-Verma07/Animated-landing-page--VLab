import React from 'react'
import { FlaskConical, Twitter, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2 text-white">
                            <div className="p-2 bg-primary-500 rounded-lg">
                                <FlaskConical size={24} />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">V-Lab Hub</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                            Leading the way in virtual engineering education. Empowering students
                            with interactive tools and professional simulations.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-primary-500 hover:text-white transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-primary-500 hover:text-white transition-all">
                                <Github size={20} />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-primary-500 hover:text-white transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="flex flex-col gap-4">
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Home</a></li>
                            <li><a href="#labs" className="hover:text-primary-400 transition-colors">Virtual Labs</a></li>
                            <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
                            <li><a href="#features" className="hover:text-primary-400 transition-colors">Features</a></li>
                        </ul>
                    </div>

                    {/* Labs */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Our Labs</h4>
                        <ul className="flex flex-col gap-4">
                            <li><a href="#" className="hover:text-primary-400 transition-colors flex items-center justify-between">Microprocessor <ArrowUpRight size={14} /></a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors flex items-center justify-between">Compiler Design <ArrowUpRight size={14} /></a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors flex items-center justify-between">DSA <ArrowUpRight size={14} /></a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors flex items-center justify-between">Java Programming <ArrowUpRight size={14} /></a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                        <div className="flex flex-col gap-6">
                            <p className="text-slate-400">Have questions? Reach out to our support team.</p>
                            <a href="mailto:support@vlabhub.edu" className="flex items-center gap-3 text-white font-medium hover:text-primary-400 transition-colors">
                                <Mail size={20} className="text-primary-500" />
                                support@vlabhub.edu
                            </a>
                            <div className="mt-2 text-primary-400">
                                <span className="text-xs uppercase tracking-widest text-slate-500 font-black">Newsletter</span>
                                <div className="mt-2 flex glass-3d rounded-xl overflow-hidden p-1 border-white/5">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="bg-transparent border-none px-4 py-2 w-full focus:ring-0 outline-none text-white placeholder:text-slate-500 font-medium"
                                    />
                                    <button className="bg-primary-600/90 text-white px-6 py-2 rounded-lg hover:bg-primary-500 transition-all font-black text-sm uppercase tracking-wider">
                                        Join
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
                    <p>© {currentYear} Virtual Lab Hub. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-slate-300">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-300">Terms of Service</a>
                        <a href="#" className="hover:text-slate-300">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
