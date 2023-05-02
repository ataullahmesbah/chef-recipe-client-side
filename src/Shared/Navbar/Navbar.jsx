import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/" className="font-extrabold text-xl text-gray-800">Kitchen Zen</a>
                    </div>

                    <div className="hidden md:flex items-center justify-center ml-10 space-x-5">
                        <Link to="/" className="text-gray-800 hover:text-purple-600 font-bold text-xl">Home</Link>

                        <Link to='/blog' className="text-gray-800 hover:text-purple-600 font-bold text-xl">Blog</Link>
                        <Link to='/login' className="text-gray-800 hover:text-purple-600 font-bold text-xl">Login</Link>
                    </div>

                </div>
            </div>

            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="/" className="block text-gray-800 hover:text-purple-600">Home</a>
                    <a href="/blog" className="block text-gray-800 hover:text-purple-600">Blog</a>
                    <a href="/login" className="block text-gray-800 hover:text-purple-600">Login</a>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;