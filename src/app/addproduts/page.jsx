/* eslint-disable @next/next/no-img-element */
"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "@/AuthContext/Authcontext";

export default function AddProductPage() {
    const router = useRouter();
    const { user, loading } = useContext(AuthContext);

    // Theme State
    const [isDark, setIsDark] = useState(false);

    const initialForm = {
        title: "",
        shortDesc: "",
        fullDesc: "",
        price: "",
        date: "",
        priority: "Medium",
        imageUrl: "",
        categories: "Electronics"
    };

    const [form, setForm] = useState(initialForm);
    const [details, setDetails] = useState([{ key: "", value: "" }]);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (!loading && !user) {
            router.replace("/login");
        }
    }, [loading, user, router]);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleDetailChange = (index, field, value) => {
        const newDetails = [...details];
        newDetails[index][field] = value;
        setDetails(newDetails);
    };

    const addDetailField = () => setDetails([...details, { key: "", value: "" }]);
    const removeDetailField = (index) => setDetails(details.filter((_, i) => i !== index));

    const handleSubmit = async (e) => {
        e.preventDefault();
        const detailsObject = details.reduce((obj, item) => {
            if (item.key && item.value) obj[item.key] = item.value;
            return obj;
        }, {});

        const newItem = {
            ...form,
            description: form.shortDesc,
            FullDesc: form.fullDesc,
            Date: form.date ? new Date(form.date) : new Date(),
            UserName: user?.displayName,
            Email: user?.email,
            image: form.imageUrl,
            Details: detailsObject
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

            if (response.ok) {
                setSuccess(true);
                setForm(initialForm);
                setDetails([{ key: "", value: "" }]);
                setTimeout(() => setSuccess(false), 4000);
            }
        } catch (error) { console.error(error); }
    };

    if (loading || (!loading && !user)) return <div className="p-20 text-center">Loading...</div>;

    return (
        <div className={`${isDark ? "dark" : ""}`}>
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 transition-colors duration-300">
                <div className="max-w-5xl mx-auto">
                    
                    <div className="mb-8 flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Post New Item</h1>
                            <p className="text-slate-500 dark:text-slate-400">Create a high-fidelity product listing.</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        
                        {/* Left Column */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
                                <h2 className="text-lg font-bold mb-6 text-slate-800 dark:text-slate-200 border-l-4 border-indigo-500 pl-3">General Information</h2>
                                <div className="space-y-4">
                                    <InputField label="Product Title" name="title" value={form.title} onChange={handleChange} placeholder="e.g. Samsung Galaxy S23" />
                                    <InputField label="Short Hook" name="shortDesc" value={form.shortDesc} onChange={handleChange} placeholder="Catchy one-liner" />
                                    <div>
                                        <label className="text-xs font-bold uppercase text-slate-400 mb-1 block">Full Deep Description</label>
                                        <textarea name="fullDesc" value={form.fullDesc} onChange={handleChange} rows={5} required
                                            className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Dynamic Specs Section */}
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-lg font-bold text-slate-800 dark:text-slate-200 border-l-4 border-indigo-500 pl-3">Technical Specs</h2>
                                    <button type="button" onClick={addDetailField} className="text-indigo-600 dark:text-indigo-400 text-sm font-bold">+ Add Spec</button>
                                </div>
                                <div className="space-y-3">
                                    {details.map((detail, index) => (
                                        <div key={index} className="flex gap-3 animate-in fade-in zoom-in duration-300">
                                            <input placeholder="Key" value={detail.key} onChange={(e) => handleDetailChange(index, "key", e.target.value)}
                                                className="flex-1 bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-2 text-sm dark:text-white" />
                                            <input placeholder="Value" value={detail.value} onChange={(e) => handleDetailChange(index, "value", e.target.value)}
                                                className="flex-1 bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-2 text-sm dark:text-white" />
                                            <button type="button" onClick={() => removeDetailField(index)} className="text-slate-300 hover:text-red-500 transition-colors">✕</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column (Logistics) */}
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
                                <h2 className="text-lg font-bold mb-6 text-slate-800 dark:text-slate-200 border-l-4 border-indigo-500 pl-3">Pricing & Meta</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-xs font-bold uppercase text-slate-400 mb-1 block">Price ($)</label>
                                        <input type="number" name="price" value={form.price} onChange={handleChange} required
                                            className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 font-bold text-indigo-600 dark:text-indigo-400 text-xl" />
                                    </div>
                                    <SelectField label="Category" name="categories" value={form.categories} onChange={handleChange} options={["Electronics", "Furniture", "Sports", "Home"]} />
                                    <SelectField label="Priority" name="priority" value={form.priority} onChange={handleChange} options={["High", "Medium", "Low"]} />
                                    <InputField label="Publish Date" name="date" type="date" value={form.date} onChange={handleChange} />
                                </div>
                            </div>

                            {/* Image Preview */}
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
                                <InputField label="Image URL" name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="https://..." />
                                {form.imageUrl && (
                                    <div className="mt-4 rounded-2xl overflow-hidden aspect-video border dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
                                        <img src={form.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                                    </div>
                                )}
                            </div>

                            <button type="submit" className="w-full bg-indigo-600 dark:bg-indigo-500 text-white py-5 rounded-3xl font-black text-lg hover:bg-indigo-700 shadow-xl shadow-indigo-100 dark:shadow-none transition-all hover:-translate-y-1">
                                {success ? "✅ Success!" : "Publish Listing"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

// Reusable Sub-Components for cleaner code
function InputField({ label, name, value, onChange, placeholder, type = "text" }) {
    return (
        <div>
            <label className="text-xs font-bold uppercase text-slate-400 mb-1 block">{label}</label>
            <input type={type} name={name} value={value} onChange={onChange} required placeholder={placeholder}
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white" />
        </div>
    );
}

function SelectField({ label, name, value, onChange, options }) {
    return (
        <div>
            <label className="text-xs font-bold uppercase text-slate-400 mb-1 block">{label}</label>
            <select name={name} value={value} onChange={onChange}
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 text-sm dark:text-white">
                {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
        </div>
    );
}