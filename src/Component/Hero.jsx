/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[700px] flex items-center  text-slate-900 dark:text-white py-20 px-8 md:px-16 overflow-hidden transition-all duration-700 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
      
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-400/10 dark:bg-fuchsia-600/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <div className="max-w-2xl space-y-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-bold tracking-wide backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Launch your store in minutes
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black leading-[1.05] tracking-tight">
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-cyan-400">
              Digital Empire
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
            A code-free builder to turn views into revenue. Sell products, subs, and merch without fees.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
            <Link href='/itemshow'>
              <button className="px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
                Get Started Free
              </button>
            </Link>
            <button className="px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 font-bold rounded-2xl shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300">
              Watch Demo
            </button>
          </div>
          
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                   <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-500">
              Trusted by <span className="text-slate-900 dark:text-white font-bold">10k+</span> creators
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-linear-to-tr from-indigo-500/30 to-purple-500/30 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative bg-white dark:bg-slate-900 p-2 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 transform hover:rotate-2 transition-transform duration-500">
            <img
              src="/Illustration.jpg"
              alt="Hero Illustration"
              className="relative w-full h-auto object-cover rounded-4xl"
            />

            <div className="absolute -top-10 -right-10 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 hidden xl:block animate-bounce-slow">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-500/20 rounded-full flex items-center justify-center text-2xl">📈</div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Growth</p>
                    <p className="text-xl font-black text-slate-900 dark:text-white">+240%</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}