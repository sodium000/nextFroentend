/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "@/AuthContext/Authcontext";
import { FiTrash2, FiEye, FiMoon, FiSun, FiSettings, FiPackage } from "react-icons/fi";

export default function ManageProductsPage() {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  const fetchitem = async () => {
    try {
      const res = await fetch(`http://localhost:5000/myitem?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`
        }
      });
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    if (user?.email) fetchitem();
  }, [user?.email]);

  useEffect(() => {
    if (!loading && !user) router.replace("/login");
  }, [loading, user, router]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      const res = await fetch(`http://localhost:5000/itemdelete/${id}`, { method: "DELETE" });
      const result = await res.json();
      if (result.deletedCount > 0) {
        setProducts(products.filter((p) => p._id !== id));
      }
    } catch (error) {
      alert("Error deleting item.");
    }
  };

  if (loading || (!loading && !user)) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-slate-950 dark:text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className={` transition-colors duration-300`}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8 text-slate-900 dark:text-slate-100">

        <div className="max-w-7xl mx-auto mb-10">
          <div className="relative overflow-hidden bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-800">
            {/* Background Decor */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6 text-center md:text-left">
                <div className="hidden md:flex p-5 bg-indigo-600 rounded-3xl text-white shadow-xl shadow-indigo-200 dark:shadow-none">
                  <FiSettings size={32} />
                </div>
                <div>
                  <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-2">Inventory <span className="text-indigo-600 dark:text-indigo-400">Control</span></h1>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">You have {products.length} active listings</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-slate-800">
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">Product Details</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">Price</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">Status</th>
                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400 text-center">Management</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                  {products.map((product) => (
                    <tr key={product._id} className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="h-14 w-14 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                            <img src={product.image} alt="" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <div className="font-bold text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                              {product.title}
                            </div>
                            <div className="text-xs font-medium text-slate-400">
                              Added: {new Date(product.Date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-xl font-black text-indigo-600 dark:text-indigo-400">
                          ${product.price}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-tighter shadow-sm
                          ${product.Priority === "High" ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400" :
                            product.Priority === "Medium" ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400" :
                              "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"}
                        `}>
                          {product.Priority} Priority
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center justify-center gap-3">
                          <button
                            onClick={() => router.push(`/itemshow/details/${product._id}`)}
                            className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all"
                            title="View"
                          >
                            <FiEye size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(product._id)}
                            className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-red-500 hover:text-white transition-all"
                            title="Delete"
                          >
                            <FiTrash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {products.length === 0 && (
              <div className="py-32 text-center">
                <div className="inline-flex p-8 bg-slate-50 dark:bg-slate-800 rounded-full mb-6">
                  <FiPackage size={48} className="text-slate-300" />
                </div>
                <h3 className="text-2xl font-black mb-2">Shelf is Empty</h3>
                <p className="text-slate-500 mb-8">You haven't listed any products for sharing yet.</p>
                <button
                  onClick={() => router.push('/addproducts')}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-none"
                >
                  Create Your First Listing
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}