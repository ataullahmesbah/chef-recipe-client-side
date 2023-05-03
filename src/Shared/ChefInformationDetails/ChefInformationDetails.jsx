import React from 'react';

const ChefInformationDetails = ({ chefInformation }) => {

    const { chef_img, chef_name, experience, recipes_count, likes } = chefInformation;
    return (

        <div className="w-full  lg:w-1/2 md:w-1/2 sm:w-full max-w-xs md:max-w-md mb-10 lg:mb-0 mt-10">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img className="w-full " src={chef_img} alt="image description" />
                <div className="p-4">
                    <h1 className="text-xl font-bold mb-2">{chef_name}</h1>

                    <p className="text-gray-700 leading-relaxed mb-2">{experience} years of experience</p>

                    <div className="flex justify-between items-center mb-4 mt-3">
                        <p className="shadow-lg p-2 text-gray-700 font-semibold leading-relaxed mb-0">{recipes_count} recipes</p>
                        <p className="shadow-lg p-2 text-gray-700 leading-relaxed mb-0">|</p>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">Like {likes}</button>
                    </div>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Details</button>
                </div>
            </div>
        </div>
    )
};

export default ChefInformationDetails;
