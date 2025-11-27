/* eslint-disable @next/next/no-img-element */
"use client";

import AuthContext from "@/AuthContext/Authcontext";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";
import { FiPlusCircle, FiList, FiHeart, FiLogOut } from "react-icons/fi";

const Navbars = () => {
  const authContext = useContext(AuthContext);
  
  if (!authContext) {
    return (
      <div className="container mx-auto rounded-xl backdrop-blur-xl bg-base-100/80 shadow-md sticky top-0 z-50 border-b border-base-200">
        <div className="navbar px-10 sm:px-4 md:px-6">
          <div className="navbar-start">
            <span className="text-lg sm:text-xl md:text-2xl font-bold">Plates Share</span>
          </div>
        </div>
      </div>
    );
  }

  const { user, loading, SingOut } = authContext;


  const navLinks = (
    <>
      <li>
        <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
      </li>
      <li>
        <Link href="/itemshow" className="hover:text-blue-500 transition-colors">All Item</Link>
      </li>
      {
        user ? "" : <li>
          <Link href="/registration" className="hover:text-blue-500 transition-colors">Regiestration</Link>
        </li>
      }

      {user && (
        <>
          <li>
            <Link href="/addproduts" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <FiPlusCircle /> Add Item
            </Link>
          </li>
          <li>
            <Link href="/productmanage" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <FiList /> Manage My Item
            </Link>
          </li>
          <li>
            <button
              onClick={() => SingOut()}
              className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors"
            >
              <FiLogOut /> Logout
            </button>
          </li>
        </>
      )}
    </>
  );

  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80 }}
      className=" container mx-auto rounded-xl backdrop-blur-xl bg-base-100/80 shadow-md sticky top-0 z-50 border-b border-base-200 bg-linear-href-r from-blue-600/80 via-indigo-600/80 href-purple-700/80"
    >
      <div className="navbar  max-h-px  px-10 sm:px-4 md:px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="buthrefn"
              className="btn btn-ghost lg:hidden p-2"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-100 p-4 shadow-xl bg-base-100/90 backdrop-blur-md rounded-box w-56 max-h-[80vh] overflow-y-auhref"
            >
              {navLinks}
            </ul>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1 sm:gap-2 cursor-pointer"
          >
            <span className="text-lg sm:text-xl md:text-2xl font-bold underline">
              Item
            </span>
            <img src="/sell-icon-png-19.jpg" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full ring ring-primary ring-offset-base-300 ring-offset-1 sm:ring-offset-2" alt="" />
            <span className=" italic text-fuchsia-800 text-lg sm:text-xl md:text-2xl font-bold">Sell</span>
          </motion.div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 sm:gap-4 font-medium text-sm sm:text-base">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:block">
          </div>

          {loading ? (
            <span className="loading loading-spinner loading-sm sm:loading-md text-info"></span>
          ) : (
            <>
              {!user && (
                <div className="scale-90 sm:scale-100">
                  {
                    user ?
                      <div aria-label="User Login Buthrefn" tabIndex={0} role="buthrefn" className="user-profile">
                        <div className="user-profile-inner">
                          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g data-name="Layer 2" id="Layer_2">
                              <path d="m15.626 11.769a6 6 0 1 0 -7.252 0 9.008 9.008 0 0 0 -5.374 8.231 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 9.008 9.008 0 0 0 -5.374-8.231zm-7.626-4.769a4 4 0 1 1 4 4 4 4 0 0 1 -4-4zm10 14h-12a1 1 0 0 1 -1-1 7 7 0 0 1 14 0 1 1 0 0 1 -1 1z" />
                            </g>
                          </svg>
                          <p>Log Out</p>
                        </div>
                      </div>
                      :
                      <Link href='/login' aria-label="User Login Buthrefn" tabIndex={0} role="buthrefn" className="user-profile">
                        <button className="btn btn-active btn-primary">Log In</button>
                      </Link>
                  }
                </div>
              )}

              {user && (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="buthrefn"
                    className="btn btn-ghost avatar p-1"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full ring ring-primary ring-offset-base-300 ring-offset-1 sm:ring-offset-2">
                      <img
                        alt="user avatar"
                        src={user.photoURL || "https://i.ibb.co/2kR7t7t/default-avatar.png"}
                      />
                    </div>
                  </div>

                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-100 p-4 shadow-xl bg-base-100/90 backdrop-blur-md rounded-box w-56 max-h-[80vh] overflow-y-auhref"
                  >
                    <li className="text-center mb-2">
                      <p className="font-semibold text-sm sm:text-base truncate">
                        {user.displayName || "Anonymous"}
                      </p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </li>
                    <div className="divider my-1"></div>
                    <li className="sm:hidden">
                    </li>
                    {navLinks}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbars;
