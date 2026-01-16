/* eslint-disable @next/next/no-img-element */
"use client";

import AuthContext from "@/AuthContext/Authcontext";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";
import { FiPlusCircle, FiList, FiHeart, FiLogOut, FiPackage, FiUser, FiBell } from "react-icons/fi";

const Navbars = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) return null;

  const { user, loading, SingOut } = authContext;

  const navLinks = (
    <>
      <li>
        <Link href="/" className="hover:text-indigo-500 transition-colors">Home</Link>
      </li>
      <li>
        <Link href="/itemshow" className="hover:text-indigo-500 transition-colors">All Items</Link>
      </li>
      
      {!user && (
        <li>
          <Link href="/registration" className="hover:text-indigo-500 transition-colors">Registration</Link>
        </li>
      )}

      {user && (
        <>
          <li>
            <Link href="/my-bookings" className="flex items-center gap-2 hover:text-indigo-500 transition-colors">
              <FiPackage /> My Bookings
            </Link>
          </li>
          <li>
            <Link href="/wishlist" className="flex items-center gap-2 hover:text-indigo-500 transition-colors">
              <FiHeart className="text-pink-500" /> Wishlist
            </Link>
          </li>
          <li className="lg:hidden">
            <Link href="/notifications" className="flex items-center gap-2 hover:text-indigo-500 transition-colors">
              <FiBell /> Notifications
            </Link>
          </li>
          <li className="lg:hidden">
            <Link href="/profile" className="flex items-center gap-2 hover:text-indigo-500 transition-colors">
              <FiUser /> My Profile
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full transition-all duration-300"
    >
      <div className="container mx-auto px-4 py-2">
        <div className="navbar max-h-16 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 px-4">
          
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-4 shadow-2xl bg-white dark:bg-slate-900 rounded-2xl w-64 border border-slate-100 dark:border-slate-800">
                {navLinks}
                {user && (
                   <li className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <button onClick={() => SingOut()} className="flex items-center gap-2 text-red-500">
                      <FiLogOut /> Logout
                    </button>
                  </li>
                )}
              </ul>
            </div>

                
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-50 transition"></div>
                <img src="/sell-icon-png-19.jpg" className="relative w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700" alt="Logo" />
              </div>
              <span className="hidden md:block text-xl font-black tracking-tighter text-slate-900 dark:text-white">
                ITEM<span className="text-indigo-600">🛒SELL</span>
              </span>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2 font-semibold text-slate-600 dark:text-slate-300">
              {navLinks}
            </ul>
          </div>

          <div className="navbar-end gap-3">
            {loading ? (
              <span className="loading loading-spinner loading-sm text-indigo-600"></span>
            ) : (
              <>
                {!user ? (
                  <Link href="/login" className="btn btn-sm md:btn-md bg-indigo-600 hover:bg-indigo-700 border-none text-white rounded-xl px-6">
                    Log In
                  </Link>
                ) : (
                  <div className="flex items-center gap-3">
                    <Link href="/addproduts" className="hidden md:flex btn btn-ghost btn-circle text-indigo-600" title="Add Item">
                        <FiPlusCircle size={22} />
                    </Link>
                    
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-indigo-500/20">
                        <div className="w-9 rounded-full">
                          <img src={user.photoURL || "https://i.ibb.co/2kR7t7t/default-avatar.png"} alt="avatar" />
                        </div>
                      </div>
                      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-4 shadow-2xl bg-white dark:bg-slate-900 rounded-2xl w-60 border border-slate-100 dark:border-slate-800">
                        <li className="px-4 py-2">
                          <p className="font-bold text-slate-900 dark:text-white truncate">{user.displayName || "User"}</p>
                          <p className="text-xs text-slate-500 truncate">{user.email}</p>
                        </li>
                        <div className="divider my-1"></div>
                        <li><Link href="/productmanage"><FiList /> My Dashboard</Link></li>
                        <li><Link href="/profile"><FiUser /> Profile Settings</Link></li>
                        <li>
                          <button onClick={() => SingOut()} className="text-red-500 hover:bg-red-50">
                            <FiLogOut /> Sign Out
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbars;