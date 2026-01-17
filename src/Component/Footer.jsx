/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative bg-slate-50 dark:bg-slate-950 transition-colors duration-500 pt-20 overflow-hidden">
            

            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl"></div>

            <div className="px-30 relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6 text-center md:text-left">
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                             <img src="/sell-icon-png-19.jpg" alt="Logo" className="w-12 h-12 rounded-2xl shadow-lg ring-2 ring-white dark:ring-slate-800"/>
                             <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
                                Plates<span className="text-indigo-600">Share</span>
                             </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                            Building a sustainable community through shared resources. Providing reliable tech-enabled logistics since 1992.
                        </p>
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-300">
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6">Services</h4>
                        <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Branding Solutions</a></li>
                            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">UX/UI Design</a></li>
                            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Marketing Strategy</a></li>
                            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Content Advertising</a></li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About our Story</a></li>
                            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact Support</a></li>
                            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Career Openings</a></li>
                            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Media Resources</a></li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Cookie settings</a></li>
                        </ul>
                    </div>
                </div>

                <div className="py-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 dark:text-slate-500 text-xs font-medium tracking-wider">
                    <p>© 2026 PLATES SHARE INDUSTRIES LTD. ALL RIGHTS RESERVED.</p>
                    <div className="flex items-center gap-6 uppercase">
                        <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Sitemap</a>
                        <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Security</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;  