"use client";

import React, { Suspense, useContext, useState } from "react";
import Image from "next/image";
import AuthContext from "@/AuthContext/Authcontext";
import { useRouter, useSearchParams } from "next/navigation";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import Swal from "sweetalert2";

function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [toggle, settoggle] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { LogInwithemail, SignByGoogle } = useContext(AuthContext);

    // Get the redirect path from query params or default to home
    const from = searchParams.get('from') || "/";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const Email = formData.email;
        const Password = formData.password;

        LogInwithemail(Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                Swal.fire({
                    title: "Welcome to home page",
                    icon: "success",
                    draggable: true
                });
                router.push(from);
            })
            .catch((error) => {
                if (error.code === 'auth/invalid-credential') {
                    Swal.fire({
                        title: "User not Found",
                        icon: "error",
                        draggable: true
                    });
                }
                if (error.code === "auth/missing-password") {
                    Swal.fire({
                        title: "Please Input Password",
                        icon: "error",
                        draggable: true
                    });
                }
                if (error.code === "auth/invalid-email") {
                    Swal.fire({
                        title: "Give Your Email",
                        icon: "error",
                        draggable: true
                    });
                }
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
                <div className="flex justify-center mb-6">
                    <Image
                        src="/password-computer.jpg"
                        alt="Logo"
                        width={60}
                        height={60}
                    />
                </div>

                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Please sign in to continue
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="mt-1 w-full px-4 py-2 border border-blue-500 text-black rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            required
                        />
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type={toggle ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className="mt-1 w-full text-black px-4 py-2 border border-blue-500 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            required
                        />
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                settoggle(!toggle);
                            }}
                            className="absolute right-1.5 top-8 z-10"
                        >
                            {toggle ? (
                                <IoIosEyeOff className="btn btn-xs border-0 rounded-full bg-linear-to-br from-orange-600 via-purple-600 to-pink-500" />
                            ) : (
                                <IoIosEye className="btn btn-xs border-0 rounded-full bg-linear-to-br from-orange-600 via-purple-600 to-pink-500" />
                            )}
                        </button>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center text-black">
                            <input type="checkbox" className="mr-2 " />
                            Remember me
                        </label>
                        <a href="" className="text-indigo-500 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
                    >
                        Sign In
                    </button>
                </form>

                <div className="flex items-center my-6">
                    <hr className="grow border-gray-300" />
                    <span className="px-2 text-gray-400 text-sm">OR</span>
                    <hr className="grow border-gray-300" />
                </div>

                <div className="flex flex-col gap-3">
                    <button onClick={()=>SignByGoogle()} className="btn bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
                        <svg className="rounded-2xl" aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Don’t have an account?{" "}
                    <a href="/registration" className="text-indigo-500 font-medium hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}

export default function LoginPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <LoginForm />
        </Suspense>
    );
}
