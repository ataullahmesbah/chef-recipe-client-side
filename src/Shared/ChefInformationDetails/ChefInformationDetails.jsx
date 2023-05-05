import React from 'react';
import { Link } from 'react-router-dom';

const ChefInformationDetails = ({ chefInformation }) => {
  const { id, chef_img, chef_name, experience, recipes_count, likes } =
    chefInformation;
  return (
    <div className="max-w-xs lg:max-w-md bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
      <img className="w-full h-1/2" src={chef_img} alt="image description" />
      <div className="p-4 flex-grow">
        <h1 className="text-xl font-bold mb-2">{chef_name}</h1>
        <p className="text-gray-700 leading-relaxed mb-2">{experience} </p>
        <div className="flex justify-between items-center mb-4 mt-3">
          <p className="shadow-lg p-2 text-gray-700 font-semibold leading-relaxed mb-0">
            {recipes_count} recipes
          </p>
          <p className="shadow-lg p-2 text-gray-700 leading-relaxed mb-0">|</p>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            Like {likes}
          </button>
        </div>
        <div className="">
          <Link to={`/cheflayout/${id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefInformationDetails;
