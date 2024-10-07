/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { currentUser, loginWithGoogle, logout } = useAuth();

    return (
        <nav className="flex justify-between p-4 bg-gray-800 text-white">
            <div>
                <img src="your_logo_url" alt="Logo" />
                <span className="ml-2 text-lg">Mijan Training Institute</span>
            </div>
            <div>
                <Link to="/" className="mr-4">Home</Link>
                <Link to="/courses" className="mr-4">Courses</Link>
                {currentUser ? (
                    <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">
                        Logout
                    </button>
                ) : (
                    <button onClick={loginWithGoogle} className="bg-blue-500 px-4 py-2 rounded">
                        Login with Google
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
