/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthContext from '@/AuthContext/Authcontext';
import { updateProfile, updateEmail, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { auth } from '../../../firebase.config.js';
import { FiUser, FiMail, FiLock, FiCamera, FiSave, FiEdit2, FiX, FiCheck, FiBell, FiShield, FiGlobe, FiCreditCard } from 'react-icons/fi';

const ProfilePage = () => {
    const { user, loading } = useContext(AuthContext);
    const router = useRouter();
    
    const [isEditing, setIsEditing] = useState({
        name: false,
        email: false,
        password: false
    });
    
    const [formData, setFormData] = useState({
        displayName: '',
        email: '',
        photoURL: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    
    const [notifications, setNotifications] = useState({
        email: true,
        push: false,
        marketing: true
    });
    
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (!loading && !user) {
            router.replace('/login');
        }
    }, [loading, user, router]);

    useEffect(() => {
        if (user) {
            setFormData({
                displayName: user.displayName || '',
                email: user.email || '',
                photoURL: user.photoURL || '',
                currentPassword: '',
                newPassword: '',
                confirmPassword: ''
            });
        }
    }, [user]);

    if (loading || (!loading && !user)) {
        return (
            <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                    <p className="text-slate-600 dark:text-slate-400">Loading...</p>
                </div>
            </div>
        );
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear errors when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({
                    ...prev,
                    photoURL: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (isEditing.name && !formData.displayName.trim()) {
            newErrors.displayName = 'Name is required';
        }
        
        if (isEditing.email && !formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (isEditing.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        
        if (isEditing.password) {
            if (!formData.currentPassword) {
                newErrors.currentPassword = 'Current password is required';
            }
            if (!formData.newPassword) {
                newErrors.newPassword = 'New password is required';
            } else if (formData.newPassword.length < 6) {
                newErrors.newPassword = 'Password must be at least 6 characters';
            }
            if (formData.newPassword !== formData.confirmPassword) {
                newErrors.confirmPassword = 'Passwords do not match';
            }
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = async (field) => {
        if (!validateForm()) return;
        
        setIsSaving(true);
        setSuccess('');
        
        try {
            if (field === 'name' || field === 'photo') {
                await updateProfile(auth.currentUser, {
                    displayName: formData.displayName,
                    photoURL: formData.photoURL
                });
                setSuccess('Profile updated successfully!');
            }
            
            if (field === 'email' && formData.email !== user.email) {
                await updateEmail(auth.currentUser, formData.email);
                setSuccess('Email updated successfully!');
            }
            
            if (field === 'password') {
                const credential = EmailAuthProvider.credential(
                    user.email,
                    formData.currentPassword
                );
                await reauthenticateWithCredential(auth.currentUser, credential);
                await updatePassword(auth.currentUser, formData.newPassword);
                setSuccess('Password updated successfully!');
                setFormData(prev => ({
                    ...prev,
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                }));
            }
            
            setIsEditing(prev => ({
                ...prev,
                [field]: false
            }));
            
            setTimeout(() => setSuccess(''), 3000);
        } catch (error) {
            setErrors({ [field]: error.message });
        } finally {
            setIsSaving(false);
        }
    };

    const handleCancel = (field) => {
        setIsEditing(prev => ({
            ...prev,
            [field]: false
        }));
        setFormData({
            displayName: user.displayName || '',
            email: user.email || '',
            photoURL: user.photoURL || '',
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        });
        setErrors({});
    };

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
            <section className="relative w-full py-20 lg:py-32 overflow-hidden border-b border-slate-200 dark:border-slate-800">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-[120px] animate-blob"></div>
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-bold tracking-wide mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            Account Settings
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                            Profile <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Settings</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-slate-400 leading-relaxed">
                            Manage your account information and preferences
                        </p>
                    </div>
                </div>
            </section>

            {success && (
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                    <div className="max-w-4xl mx-auto bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-4 flex items-center gap-3">
                        <FiCheck className="text-green-600 dark:text-green-400 text-xl" />
                        <p className="text-green-600 dark:text-green-400 font-semibold">{success}</p>
                    </div>
                </div>
            )}

            <section className="relative w-full py-16 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl dark:shadow-none border border-slate-200/60 dark:border-slate-700/60 mb-8">
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <div className="relative group">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-200 dark:border-slate-700 ring-4 ring-indigo-500/20">
                                        <img
                                            src={formData.photoURL || user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.displayName || 'User')}&background=6366f1&color=fff`}
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <label className="absolute bottom-0 right-0 bg-indigo-600 text-white p-3 rounded-full cursor-pointer hover:bg-indigo-700 transition-colors shadow-lg">
                                        <FiCamera className="text-xl" />
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                                <div className="flex-1 text-center sm:text-left">
                                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
                                        {formData.displayName || user.displayName || 'User'}
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-400 mb-4">{user.email}</p>
                                    <button
                                        onClick={() => {
                                            setIsEditing(prev => ({ ...prev, name: true, photo: true }));
                                        }}
                                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        <FiEdit2 className="inline mr-2" />
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl dark:shadow-none border border-slate-200/60 dark:border-slate-700/60 mb-8">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                <FiUser className="text-indigo-600 dark:text-indigo-400" />
                                Personal Information
                            </h3>
                            
                            <div className="mb-6">
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                                    Display Name
                                </label>
                                {isEditing.name ? (
                                    <div className="space-y-3">
                                        <input
                                            type="text"
                                            name="displayName"
                                            value={formData.displayName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                            placeholder="Enter your name"
                                        />
                                        {errors.displayName && (
                                            <p className="text-red-500 text-sm">{errors.displayName}</p>
                                        )}
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => handleSave('name')}
                                                disabled={isSaving}
                                                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all disabled:opacity-50 flex items-center gap-2"
                                            >
                                                <FiSave /> Save
                                            </button>
                                            <button
                                                onClick={() => handleCancel('name')}
                                                className="px-6 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-xl font-bold transition-all flex items-center gap-2"
                                            >
                                                <FiX /> Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                                        <p className="text-slate-900 dark:text-white font-semibold">
                                            {formData.displayName || user.displayName || 'Not set'}
                                        </p>
                                        <button
                                            onClick={() => setIsEditing(prev => ({ ...prev, name: true }))}
                                            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                                        >
                                            <FiEdit2 />
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                                    Email Address
                                </label>
                                {isEditing.email ? (
                                    <div className="space-y-3">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                            placeholder="Enter your email"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm">{errors.email}</p>
                                        )}
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => handleSave('email')}
                                                disabled={isSaving}
                                                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all disabled:opacity-50 flex items-center gap-2"
                                            >
                                                <FiSave /> Save
                                            </button>
                                            <button
                                                onClick={() => handleCancel('email')}
                                                className="px-6 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-xl font-bold transition-all flex items-center gap-2"
                                            >
                                                <FiX /> Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                                        <p className="text-slate-900 dark:text-white font-semibold">
                                            {user.email}
                                        </p>
                                        <button
                                            onClick={() => setIsEditing(prev => ({ ...prev, email: true }))}
                                            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                                        >
                                            <FiEdit2 />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl dark:shadow-none border border-slate-200/60 dark:border-slate-700/60 mb-8">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                <FiShield className="text-indigo-600 dark:text-indigo-400" />
                                Security
                            </h3>
                            
                            {isEditing.password ? (
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                                            Current Password
                                        </label>
                                        <input
                                            type="password"
                                            name="currentPassword"
                                            value={formData.currentPassword}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                            placeholder="Enter current password"
                                        />
                                        {errors.currentPassword && (
                                            <p className="text-red-500 text-sm mt-1">{errors.currentPassword}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                                            New Password
                                        </label>
                                        <input
                                            type="password"
                                            name="newPassword"
                                            value={formData.newPassword}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                            placeholder="Enter new password"
                                        />
                                        {errors.newPassword && (
                                            <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                                            Confirm New Password
                                        </label>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                            placeholder="Confirm new password"
                                        />
                                        {errors.confirmPassword && (
                                            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                                        )}
                                    </div>
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => handleSave('password')}
                                            disabled={isSaving}
                                            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all disabled:opacity-50 flex items-center gap-2"
                                        >
                                            <FiSave /> Save
                                        </button>
                                        <button
                                            onClick={() => handleCancel('password')}
                                            className="px-6 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-xl font-bold transition-all flex items-center gap-2"
                                        >
                                            <FiX /> Cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                                    <div>
                                        <p className="text-slate-900 dark:text-white font-semibold mb-1">Password</p>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">Last updated: Never</p>
                                    </div>
                                    <button
                                        onClick={() => setIsEditing(prev => ({ ...prev, password: true }))}
                                        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all flex items-center gap-2"
                                    >
                                        <FiLock /> Change Password
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl dark:shadow-none border border-slate-200/60 dark:border-slate-700/60">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                <FiBell className="text-indigo-600 dark:text-indigo-400" />
                                Notifications
                            </h3>
                            
                            <div className="space-y-4">
                                {Object.entries(notifications).map(([key, value]) => (
                                    <div key={key} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                                        <div>
                                            <p className="text-slate-900 dark:text-white font-semibold capitalize mb-1">
                                                {key === 'email' ? 'Email Notifications' : key === 'push' ? 'Push Notifications' : 'Marketing Emails'}
                                            </p>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm">
                                                {key === 'email' ? 'Receive email updates about your account' : key === 'push' ? 'Get notified via browser push notifications' : 'Receive marketing and promotional emails'}
                                            </p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={value}
                                                onChange={(e) => setNotifications(prev => ({ ...prev, [key]: e.target.checked }))}
                                                className="sr-only peer"
                                            />
                                            <div className="w-11 h-6 bg-slate-300 dark:bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProfilePage;
