import React, { useContext, useEffect, useState } from 'react';
import { auth } from './../Firebase'
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

// Create AuthContext
const AuthContext = React.createContext();

// Custom hook to use AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthContextProvider component
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Sign in with Google
    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    // Sign in with GitHub
    const loginWithGithub = () => {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider);
    };

    // Log out the user
    const logout = () => {
        return signOut(auth);
    };

    // Set an observer on the Auth object to get the current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false); // Done loading when the auth state changes
        });

        // Cleanup the listener on unmount
        return unsubscribe;
    }, []);

    // Define the values to provide to the rest of the app
    const value = {
        currentUser,
        loginWithGoogle,
        loginWithGithub,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children} {/* Render children only when not loading */}
        </AuthContext.Provider>
    );
};
