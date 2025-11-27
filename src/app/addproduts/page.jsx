"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AuthContext from "@/AuthContext/Authcontext";

export default function AddProductPage() {
    const router = useRouter();
    const { user, loading } = useContext(AuthContext);
    const initialForm = {
        title: "",
        shortDesc: "",
        fullDesc: "",
        price: "",
        date: "",
        priority: "Medium",
        imageUrl: "",
        Categories: "Electronics"
    };
    const [form, setForm] = useState(initialForm);
    const [success, setSuccess] = useState(false);

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

    // Redirect if not logged in
    //   if (!user) {
    //     router.push("/login");
    //     return null;
    //   }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
        }, 4000);
        e.preventDefault();
        const Title = e.target.title.value
        const ShortDesc = e.target.shortDesc.value
        const FullDesc = e.target.fullDesc.value
        const Price = e.target.price.value
        const date = e.target.date.value
        const Priority = e.target.priority.value
        const Categories = e.target.Categories.value
        const Image = e.target.imageUrl.value
        const newItem = {
            title : Title,
            description:ShortDesc,
            FullDesc,
            price:Price,
            Date: new Date(date),
            Priority,
            UserName: user.displayName,
            Email: user.email,
            Categories,
            image:Image
        };

        try {
            const response = await fetch('https://next-backend-sage.vercel.app/addItem', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.accessToken}`
                },
                body: JSON.stringify(newItem)
            });

            if (!response.ok) {
                throw new Error("Failed to add product");
            }

            await response.json();
            setForm(initialForm);
        } catch (error) {

        }
    };





    return (
        <div className="min-h-screen text-black bg-gray-50 flex items-center justify-center p-6">
            <div className="bg-white shadow-lg rounded-xl w-full max-w-2xl p-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Add Product</h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Short Description</label>
                        <input
                            type="text"
                            name="shortDesc"
                            value={form.shortDesc}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Full Description</label>
                        <textarea
                            name="fullDesc"
                            value={form.fullDesc}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
                            rows={4}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium">Price</label>
                            <input
                                type="number"
                                name="price"
                                value={form.price}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Date</label>
                            <input
                                type="date"
                                name="date"
                                value={form.date}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Priority</label>
                            <select
                                name="priority"
                                value={form.priority}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
                            >
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Categories</label>
                            <select
                                name="Categories"
                                value={form.Categories}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
                            >
                                <option>Electronics</option>
                                <option>Furniture</option>
                                <option>Sports</option>
                                <option>Home</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Image URL (optional)</label>
                        <input
                            type="text"
                            name="imageUrl"
                            value={form.imageUrl}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
                    >
                        Submit
                    </button>
                </form>

                {success && (
                    <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
                        ✅ Product added successfully!
                    </div>
                )}
            </div>
        </div>
    );
}
