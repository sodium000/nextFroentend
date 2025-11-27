/* eslint-disable @next/next/no-img-element */

import Link from "next/link";


export default function Hero() {
  return (
    <section className="relative w-full bg-linear-to-r rounded-2xl from-blue-500 via-indigo-400 to-purple-300 text-white py-28 px-6 overflow-hidden">

      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -z-10"></div>
      <div className=" grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight pl-15">
            Elevate Your Digital Experience
          </h1>

          <p className="text-lg md:text-xl text-white/90 pl-15 ">
           A code-free online store builder to turn views into revenue. Sell digital products, subscriptions, and merch, without fees or hassle.
          </p>

          <div className="flex gap-4 pl-15">
            <Link href='/itemshow'>
            <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition">
              Get Started
            </button>
            </Link>
          </div>
        </div>


        <div className="flex min-h-40 pr-3">
          <img
            src="/Illustration.jpg"
            alt="Hero Illustration"
            className="drop-shadow-2xl rounded-xl"
          />
        </div>

      </div>
    </section>
  );
}
