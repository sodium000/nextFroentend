
"use client";

import React, { Suspense, useContext, useState } from "react";
import Image from "next/image";
import AuthContext from "@/AuthContext/Authcontext";
import { useRouter, useSearchParams } from "next/navigation";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import Link from "next/link";

function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [toggle, settoggle] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { LogInwithemail, SignByGoogle } = useContext(AuthContext);
    const from = searchParams.get('from') || "/";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;

        LogInwithemail(email, password)
            .then(() => {
                Swal.fire({
                    title: "Welcome Back!",
                    text: "Successfully logged in",
                    icon: "success",
                    background: document.documentElement.classList.contains('dark') ? '#0f172a' : '#ffffff',
                    color: document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000',
                });
                router.push(from);
            })
            .catch((error) => {
                let message = "Something went wrong";
                if (error.code === 'auth/invalid-credential') message = "User not found or wrong password";
                if (error.code === "auth/missing-password") message = "Please input password";
                if (error.code === "auth/invalid-email") message = "Invalid email format";

                Swal.fire({
                    title: "Oops!",
                    text: message,
                    icon: "error",
                    background: document.documentElement.classList.contains('dark') ? '#0f172a' : '#ffffff',
                    color: document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000',
                });
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-white dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 w-full max-w-md"
            >
                <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-3xl p-8">
                    <div className="flex flex-col items-center mb-8">
                        <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-lg mb-4">
                            <Image
                                src="/password-computer.jpg"
                                alt="Logo"
                                width={48}
                                height={48}
                                className="object-contain rounded-lg"
                            />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                            Welcome Back
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-2 text-center">
                            Sign in to manage your account
                        </p>
                    </div>
                    <div className="mb-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl">
                        <p className="text-xs font-bold text-indigo-900 dark:text-indigo-300 mb-2">Demo Credentials:</p>
                        <p className="text-sm text-indigo-700 dark:text-indigo-400">
                            <strong>Email: </strong>sodiumrdx@gmail.com<br />
                            <strong>Password:</strong> @12345Tonmoy
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1 ml-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="name@company.com"
                                className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-transparent focus:border-indigo-500 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-white transition-all outline-none shadow-sm"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1 ml-1">Password</label>
                            <div className="relative">
                                <input
                                    type={toggle ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-transparent focus:border-indigo-500 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-white transition-all outline-none shadow-sm"
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
                        </div>

                        <div className="flex items-center justify-between text-sm px-1">
                            <label className="flex items-center gap-2 text-slate-600 dark:text-slate-400 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 bg-slate-100 dark:bg-slate-800" />
                                Remember me
                            </label>
                            <Link href="#" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline transition-all">
                                Forgot password?
                            </Link>
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold shadow-xl hover:shadow-indigo-500/20 transition-all mt-4"
                        >
                            Sign In
                        </motion.button>
                    </form>

                    <div className="flex items-center my-6">
                        <div className="grow border-t border-slate-200 dark:border-slate-800"></div>
                        <span className="px-3 text-slate-400 text-xs font-bold uppercase tracking-widest">or continue with</span>
                        <div className="grow border-t border-slate-200 dark:border-slate-800"></div>
                    </div>

                    <button
                        onClick={() => SignByGoogle()}
                        className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
                    >
                        <FcGoogle size={24} />
                        Google Account
                    </button>

                    <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
                        Don’t have an account?{" "}
                        <Link href="/registration" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline transition-all">
                            Sign up
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default function LoginPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
        }>
            <LoginForm />
        </Suspense>
    );
}