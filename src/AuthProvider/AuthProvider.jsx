"use client";

import AuthContext from '@/AuthContext/Authcontext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase.config.js';
import { useRouter } from 'next/navigation.js';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true)
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            if (!currentUser) {
                return;
            }
            if (!currentUser.displayName) {
                try {
                    await currentUser.reload();
                } catch (error) {
                    console.error("Failed to reload user profile", error);
                }
            }

            const refreshedUser = auth.currentUser || currentUser;

            const User = {
                Name : refreshedUser?.displayName || '',
                Email : refreshedUser?.email || ''
            }

            try {
                const idToken = await currentUser.getIdToken();
                const response = await fetch("http://localhost:5000/user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${idToken}`
                    },
                    body: JSON.stringify(User)
                });

                const data = await response.json();
            } catch (error) {
                console.error("Failed to set auth cookie", error);
            }
        });

        return () => unsubscribe();
    }, []);

    const RegWithEmail = async (name, email, password, photoURL) => {
        setLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            try {
                await updateProfile(userCredential.user, {
                    displayName: name,
                    photoURL: photoURL,
                });
            } catch (error) {
                console.error("Failed to update user profile", error);
            }

            setUser({
                ...userCredential.user,
                displayName: name,
                photoURL: photoURL,
            });

            router.push('/');
            return userCredential;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };

    const SignByGoogle = () => signInWithPopup(auth, provider).then(() => {
        router.push('/');
    });

    const LogInwithemail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const SingOut = () => {
        signOut(auth).then(() => {
            localStorage.removeItem("user");
        }).catch((error) => {
        });
    }

    const userInfo = {
        user,
        setUser,
        SignByGoogle,
        SingOut,
        loading,
        setLoading,
        RegWithEmail,
        LogInwithemail
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;