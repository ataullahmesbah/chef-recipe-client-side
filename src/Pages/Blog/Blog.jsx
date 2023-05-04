import React from 'react';

const Blog = () => {
  return (
    <div className='container mx-auto px-4 mb-10'>
      <h4 className='text-4xl font-bold text-center mt-7 mb-10'>Questions and Answer:</h4>

      <div className='sm:flex sm:flex-wrap -mx-2'>
        <div className='sm:w-1/2 px-2 mb-4'>
          <div className='bg-white rounded-lg shadow-md p-8 h-full'>
            <h4 className='text-2xl font-semibold mb-4'>Tell us the differences between uncontrolled and controlled components?</h4>
            <p>Controlled components are those that are managed and controlled by the system, while uncontrolled components are not managed by the system and their behavior cannot be predicted or controlled.</p>
          </div>
        </div>

        <div className='sm:w-1/2 px-2 mb-4'>
          <div className='bg-white rounded-lg shadow-md p-8 h-full'>
            <h4 className='text-2xl font-semibold mb-4'>How to validate React props using PropTypes?</h4>
            <p>React will validate the component's props at runtime and warn you in the console if the props don't match the specified PropTypes. Using PropTypes helps catch potential bugs and errors early in the development process, and ensure that the component is used correctly.</p>
          </div>
        </div>

        <div className='sm:w-1/2 px-2 mb-4'>
          <div className='bg-white rounded-lg shadow-md p-8 h-full'>
            <h4 className='text-2xl font-semibold mb-4'>Tell us the difference between nodejs and express js.?</h4>
            <p>Node.js is a runtime environment for executing JavaScript code outside the web browser. Express.js is a web application framework that runs on top of Node.js. It provides a set of features and tools for building web applications and APIs, such as routing, middleware, and template rendering.</p>
          </div>
        </div>

        <div className='sm:w-1/2 px-2 mb-4'>
          <div className='bg-white rounded-lg shadow-md p-8 h-full'>
            <h4 className='text-2xl font-semibold mb-4'>What is a custom hook, and why will you create a custom hook?</h4>
            <p>Creating a custom hook can be useful when you have a piece of logic that needs to be reused across multiple components in your React application.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
