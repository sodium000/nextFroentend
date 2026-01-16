/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "@/AuthContext/Authcontext";

export default function ManageProductsPage() {

  const router = useRouter();
  const { user, loading } = useContext(AuthContext);
  const [products, setProducts] = useState([]);




    const fetchitem = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/myitem?email=${user?.email}`,{
          headers : {
            authorization : `Bearer ${user.accessToken}`
          }
        }
      );
      const data = await res.json();
      setProducts(data);
    } catch (error) {
    } finally {
    }
  };

    useEffect(() => {
    if (user?.email) {
      fetchitem();
    }
  }, [user?.email]);


    useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading || (!loading && !user)) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-600 flex items-center justify-center">
        Checking authentication...
      </div>
    );
  }
  async function handleDelete(id) {
    try {
      const res = await fetch(`http://localhost:5000/itemdelete/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      if (result.deletedCount > 0 || result.success) {
        fetchitem()
        setProducts(products.filter((p) => p.id !== id));
      } else {
        alert("Failed to delete the item.");
      }
    } catch (error) {
      alert("Error deleting item.");
    } finally {
    }
  };

  const handleView = (id) => {
    router.push(`/itemshow/details/${id}`);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-indigo-50 p-6">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="relative bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-12 px-8 rounded-3xl shadow-2xl overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-white/20 backdrop-blur-lg rounded-2xl">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <div>
                <h1 className="text-4xl font-extrabold mb-2 drop-shadow-lg">
                  Manage Products
                </h1>
                <p className="text-white/90 text-lg">
                  View and manage all your products in one place
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-linear-to-r from-indigo-600 to-purple-600 text-white">
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((product,index) => (
                  <tr
                    key={index}
                    className="hover:bg-linear-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">{product.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-lg font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        ${product.price}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600">
                        {new Date(product.Date).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                          product.Priority === "High"
                            ? "bg-linear-to-r from-red-500 to-red-600 text-white shadow-lg"
                            : product.Priority === "Medium"
                            ? "bg-linear-to-r from-amber-500 to-amber-600 text-white shadow-lg"
                            : "bg-linear-to-r from-green-500 to-green-600 text-white shadow-lg"
                        }`}
                      >
                        {product.Priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center gap-3">
                        <button
                          onClick={() => handleView(product._id)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View
                        </button>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-red-500 to-red-600 text-white text-sm font-semibold rounded-lg hover:from-red-600 hover:to-red-700 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {products.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-20 text-center"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <div className="p-6 bg-linear-to-br from-indigo-100 to-purple-100 rounded-full mb-4">
                          <svg className="w-16 h-16 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No products available</h3>
                        <p className="text-gray-600">Start by adding your first product!</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
