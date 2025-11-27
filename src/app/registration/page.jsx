/* eslint-disable react-hooks/immutability */
"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import AuthContext from "@/AuthContext/Authcontext";
import { motion } from "framer-motion";

export default function RegisterPage() {

    const [toggle, settoggle] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        Photo_Url: "",
    });

    const { SignByGoogle, RegWithEmail } = useContext(AuthContext);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const googleLogin = () => {
        SignByGoogle()
            .then((result) => {
            }).catch((error) => {
            });
    };



    /**
     * 
     * password validation 
     * 
     */


    const newErrors = {};
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        const password = formData.password
        if (!password || password.length < 8) {
            newErrors.password = "Password must be at least 8 characters.";
            setErrors(newErrors)
            return
        }
        if (!/[a-z]/.test(password)) {
            newErrors.password = "Use at least one lowercase letter.";
            setErrors(newErrors)
            return
        }
        if (!/[A-Z]/.test(password)) {
            newErrors.password = "Use at least one uppercase letter.";
            setErrors(newErrors)
            return
        }
        if (!/[0-9]/.test(password)) {
            newErrors.password = "Use at least one digit.";
            setErrors(newErrors)
            return
        }
        else {
            const Email = formData.email
            const Password = formData.password
            const Name = formData.name
            const PhotoURL = formData.Photo_Url
            RegWithEmail(Name, Email, Password, PhotoURL)
                .then((userCredential) => {

                })
                .catch((error) => {
                });
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-teal-400 via-blue-500 to-indigo-600">
            <div className=" shadow-2xl rounded-2xl w-full max-w-md p-8">
                <div className="flex justify-center mb-6">
                    <Image
                        src="/partnership-firm.png"
                        alt="Logo"
                        width={60}
                        height={60}
                    />
                </div>

                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                    Create Your Account
                </h2>
                <p className="text-center text-gray-800 mb-6">
                    Join us today and start your journey
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <label className="block text-sm font-medium text-white mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                required
                
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 }}
            >
              <label className="block text-sm font-medium text-white mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3 }}
              className="relative"
            >
              <label className="block text-sm font-medium text-white mb-1">
                Password
              </label>
              <input
                type={toggle ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                required
              />
              <button onClick={(e) => {
                e.preventDefault()
                settoggle(!toggle)

              }} >{toggle ? <IoIosEyeOff className="btn btn-xs border-0 rounded-full  absolute right-1.5 top-8 z-10 bg-linear-to-br from-orange-600 via-purple-600 to-pink-500" /> : <IoIosEye className="btn btn-xs border-0 rounded-full absolute right-1.5 top-8  z-10 bg-linear-to-br from-orange-600 via-purple-600 to-pink-500" />}
              </button>
              {
                errors.password && <p className="text-red-700 text-sm">{errors.password}</p>
              }
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4 }}
            >
              <label className="block text-sm font-medium text-white mb-1">
                Photo Url
              </label>
              <input
                type="text"
                name="Photo_Url"
                value={formData.Photo_Url}
                onChange={handleChange}
                placeholder="http://localhost:5173/"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="btn w-full bg-linear-to-r from-indigo-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Register
            </motion.button>
          </form>

                <div className="flex items-center my-6">
                    <hr className="grow border-gray-300" />
                    <span className="px-2 text-gray-400 text-sm">OR</span>
                    <hr className="grow border-gray-300" />
                </div>

                <div className="flex flex-col gap-3">
                    <button onClick={googleLogin} className="btn bg-linear-to-r from-indigo-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
                        <svg className="rounded-2xl" aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>

                <p className="text-center text-sm text-gray-800 mt-6">
                    Already have an account?{" "}
                    <a href="/login" className="text-cyan-200 font-medium hover:underline">
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    );
}
