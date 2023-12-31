import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => 
            console.log(error))
    }

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

                        {user && 
                                // <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>

                                <div >
                                    <img className='w-12 rounded-full'  src={user?.photoURL} alt="" />
                                </div>
                           }

                        { user ?
                        <button onClick={handleLogOut} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">Logout</button> :

                            <Link to='/login' className="text-gray-800 hover:text-purple-600 font-bold text-xl">Login</Link>
                            }



                        



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