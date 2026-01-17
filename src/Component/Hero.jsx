/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] sm:min-h-[700px] flex items-center text-slate-900 dark:text-white py-20 px-8 md:px-16 overflow-hidden transition-all duration-700 bg-white dark:bg-slate-950">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center relative z-10">
          <div className="max-w-5xl  lg:mx-0 space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm font-bold tracking-wide backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Launch your store in minutes
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] sm:leading-[1.05] tracking-tight">
              Elevate Your &nbsp;
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-cyan-400">
                Digital Empire
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg   lg:mx-0">
              A code-free builder to turn views into revenue. Sell products, subs, and merch without fees.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center lg:justify-start pt-2 sm:pt-4">
              <Link href='/itemshow'>
                <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black text-sm sm:text-base rounded-xl sm:rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
                  Get Started Free
                </button>
              </Link>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 justify-center lg:justify-start pt-2">
              <div className="flex -space-x-2 sm:-space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 sm:border-4 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-500">
                Trusted by <span className="text-slate-900 dark:text-white font-bold">10k+</span> creators
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-6 bg-linear-to-tr from-indigo-500/30 to-purple-500/30 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>

            <div className="relative bg-white dark:bg-slate-900 p-3 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 transition-all duration-500 group-hover:rotate-1 group-hover:scale-[1.02]">

              <img
                src="/Illustration.jpg"
                alt="Hero Illustration"
                className="w-full aspect-4/2 object-cover rounded-4xl"
              />

              <div className="absolute -bottom-6 left-6 hidden xl:block">
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl p-5 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-500/20 rounded-full flex items-center justify-center text-2xl">
                      📈
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                        Growth
                      </p>
                      <p className="text-2xl font-black text-slate-900 dark:text-white">
                        +240%
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}