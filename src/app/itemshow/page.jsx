
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiSearch, FiFilter, FiArrowRight, FiInbox } from "react-icons/fi";

export default function ItemListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sampleItems, setSampleItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://next-backend-sage.vercel.app /showItem')
      .then(res => res.json())
      .then(data => {
        setSampleItems(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  // FIXED FILTER LOGIC
  const filteredItems = sampleItems.filter((item) => {
    const matchesSearch = item.title?.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Changed 'item.category' to 'item.Categories' to match your DB structure
    const matchesCategory = categoryFilter ? item.Categories === categoryFilter : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {/* Hero Header */}
      <div className="relative bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter drop-shadow-2xl">
            Explore <span className="text-indigo-200">Plates</span>
          </h1>
          <p className="text-lg md:text-xl text-indigo-50 max-w-2xl font-medium opacity-90 leading-relaxed">
            Discover a curated collection of premium shared items.
          </p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto p-6 space-y-10 -mt-12 relative z-20">
        {/* Search & Filter Bar */}
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl rounded-4xl shadow-2xl p-4 md:p-6 border border-white/20 dark:border-slate-800 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative group">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search by title..."
              className="w-full bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-indigo-500/50 pl-12 pr-6 py-4 rounded-2xl transition-all text-slate-900 dark:text-white placeholder:text-slate-400 font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative min-w-[200px]">
            <FiFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
            <select
              className="w-full bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-indigo-500/50 pl-12 pr-6 py-4 rounded-2xl appearance-none text-slate-900 dark:text-white font-semibold cursor-pointer transition-all"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Sports">Sports</option>
              <option value="Home">Home</option>
            </select>
          </div>
        </div>
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="h-96 rounded-4xl bg-slate-200 dark:bg-slate-900 animate-pulse border border-slate-100 dark:border-slate-800"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredItems.map((item, index) => (
              <Link href={`/itemshow/details/${item._id}`} key={index} className="group">
                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl hover:shadow-indigo-500/10 transition-all duration-500 overflow-hidden border border-slate-100 dark:border-slate-800 h-full flex flex-col transform hover:-translate-y-3">
                  
                  <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-xl font-black text-indigo-600 dark:text-indigo-400 shadow-xl border border-white/20">
                      ${item.price}
                    </div>
                    <div className="absolute top-4 left-4 bg-indigo-600/90 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg">
                      {item.Categories}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col grow">
                    <h2 className="text-xl font-black text-slate-900 dark:text-white mb-2 tracking-tight line-clamp-1">
                      {item.title}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-2 mb-4">
                      {item.description}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                       <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 font-bold text-[10px]">
                             {item.UserName?.charAt(0) || 'U'}
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                            {item.UserName || 'Anonymous'}
                          </span>
                       </div>
                       <FiArrowRight className="text-indigo-500 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredItems.length === 0 && (
          <div className="text-center py-24 bg-white dark:bg-slate-900/50 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-800">
            <FiInbox className="mx-auto text-indigo-200 mb-4" size={64} />
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 uppercase">No matches found</h3>
            <button 
              onClick={() => {setSearchTerm(""); setCategoryFilter("");}}
              className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}