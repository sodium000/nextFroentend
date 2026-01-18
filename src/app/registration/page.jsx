
"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "@/AuthContext/Authcontext";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function RegisterPage() {
    const [toggle, settoggle] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        Photo_Url: "",
    });
    const [errors, setErrors] = useState({});

    const { SignByGoogle, RegWithEmail } = useContext(AuthContext);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors.password) setErrors({});
    };

    const googleLogin = () => {
        SignByGoogle().then(() => {}).catch(() => {});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { password, email, name, Photo_Url } = formData;
        const newErrors = {};

        if (!password || password.length < 8) newErrors.password = "Minimum 8 characters required.";
        else if (!/[a-z]/.test(password)) newErrors.password = "Add a lowercase letter.";
        else if (!/[A-Z]/.test(password)) newErrors.password = "Add an uppercase letter.";
        else if (!/[0-9]/.test(password)) newErrors.password = "Add at least one digit.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        RegWithEmail(name, email, password, Photo_Url)
            .then(() => {})
            .catch((error) => console.error(error));
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-white dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 w-full max-w-md"
            >
                <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-3xl p-8">
                    <div className="flex flex-col items-center mb-8">
                        <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-lg mb-4">
                            <Image
                                src="/partnership-firm.png"
                                alt="Logo"
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                            Get Started
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-2 text-center">
                            Join ItemSell and start your journey
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1 ml-1">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-transparent focus:border-indigo-500 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-white transition-all outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1 ml-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="name@company.com"
                                className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-transparent focus:border-indigo-500 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-white transition-all outline-none"
                                required
                            />
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1 ml-1">Password</label>
                            <div className="relative">
                                <input
                                    type={toggle ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-transparent focus:border-indigo-500 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-white transition-all outline-none"
                                    required
                                />
                                <button 
                                    type="button"
                                    onClick={() => settoggle(!toggle)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-500 transition-colors"
                                >
                                    {toggle ? <IoIosEyeOff size={20} /> : <IoIosEye size={20} />}
                                </button>
                            </div>
                            <AnimatePresence>
                                {errors.password && (
                                    <motion.p 
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="text-red-500 text-xs font-medium mt-1 ml-1"
                                    >
                                        {errors.password}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1 ml-1">Photo URL</label>
                            <input
                                type="text"
                                name="Photo_Url"
                                value={formData.Photo_Url}
                                onChange={handleChange}
                                placeholder="https://example.com/photo.jpg"
                                className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-transparent focus:border-indigo-500 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-white transition-all outline-none"
                                required
                            />
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold shadow-xl hover:shadow-indigo-500/20 transition-all mt-4"
                        >
                            Create Account
                        </motion.button>
                    </form>

                    <div className="flex items-center my-6">
                        <div className="grow border-t border-slate-200 dark:border-slate-800"></div>
                        <span className="px-3 text-slate-400 text-xs font-bold uppercase tracking-widest">or continue with</span>
                        <div className="grow border-t border-slate-200 dark:border-slate-800"></div>
                    </div>

                    <button 
                        onClick={googleLogin} 
                        className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
                    >
                        <FcGoogle size={24} />
                        Google
                    </button>

                    <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
                        Already have an account?{" "}
                        <Link href="/login" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}