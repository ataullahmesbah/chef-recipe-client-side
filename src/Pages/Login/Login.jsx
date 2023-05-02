import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset();
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })

    }
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="max-w-md w-full px-6">
                <div className="flex justify-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Log In to Your Account</h2>
                </div>
                <Form onSubmit={handleSignIn} className="mt-8">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="mt-8">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>

                    <div className="mt-4 text-sm text-gray-600 text-center">
                        <span>Don't have an account?</span>
                        <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500"> Register here</Link>
                    </div>



                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <a href="#" className="text-xs text-gray-500 uppercase hover:text-blue-500">or login with</a>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>

                    <div className="mt-4 flex items-center justify-between space-x-2">

                        <button
                            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2 "
                            type="button"
                        >
                            Google
                        </button>
                        <button
                            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2"
                            type="button"
                        >
                            GitHub
                        </button>


                    </div>
                </Form>
            </div>
        </div>

    );
};

export default Login;