import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

  const { user, createUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  console.log(createUser);
  const [error, setError] = useState(null);

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    form.reset();

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    if (email.trim() === '' || password.trim() === '') {
      setError('Please enter a valid email and password');
      return;
    }

    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error => {
        console.log(error);
      })


  }

  const handleGoogleRegister = () => {
    googleSignIn()
    .then(result => {
      const loggedInUser = result.user;
    })
    .catch(error => {
      setError(error.message);
    });
  };

  const handleGithubRegister = () => {
    githubSignIn()
    .then(result => {
      const loggedInUser = result.user;
    })
    .catch(error => {
      setError(error.message);
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6 sm:py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg  w-full sm:w-2/3 lg:w-1/2 xl:w-1/3">

        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Create an Account and Register</h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 mt-4">
            <h5 className='text-bold font-medium'>VALIDATION ERROR:</h5>
            Password must be at least 6 characters long
          </div>
        )}

        <Form onSubmit={handleRegister} className="w-full ">
          <div className="flex flex-wrap -mx-3 mb-4">

            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

          </div>

          <div className="flex flex-wrap -mx-3 mb-4">

            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
                Photo URL
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="photo"
                type="text"
                placeholder="Enter your photo URL"
                required
              />
            </div>

          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Create an Account
            </button>
          </div>
        </Form>



        <div className="mt-4 text-center">
          <p className="text-gray-700 text-sm">Already have an account?  <Link className='text-blue-600' to='/login'>Login Now</Link> </p>
        </div>


        <div className="mt-4 flex items-center justify-between space-x-2">

          <button onClick={handleGoogleRegister}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2 "
            type="button"
          >
            Google
          </button>

          {/* { user && 
            <div>
              <img src={user.photoURL} alt="" />
          </div>} */}


          <button onClick={handleGithubRegister}
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2"
            type="button"
          >
            GitHub
          </button>

        </div>
      </div>
    </div>

  );
};

export default Register;
