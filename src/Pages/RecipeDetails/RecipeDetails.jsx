import React from 'react';

const RecipeDetails = ({ recipeDetails }) => {

    const { chef_name, chef_img, experience, recipes_count, likes, recipe_name, chef_bio } = recipeDetails;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">

            <figure>
                <img src={chef_img} alt="Album" /></figure>

            <div className="card-body">
                <h2 className="card-title">{chef_name}</h2>
                <p><h4 className='font-bold'>Chef BIO:</h4> {chef_bio}</p>

                <div className=" flex mx-auto space-x-28 justify-center items-center  ">
                        <p className=" p-2 text-gray-700 font-semibold leading-relaxed mb-0">{recipes_count} recipes</p>
                        <p className=" p-2 text-gray-700 leading-relaxed mb-0">|</p>
                        <button className="bg-gray-300  text-gray-800 font-bold py-2 px-4 rounded inline-flex text-center items-center">Like {likes}</button>
                    </div>
                
                <p> <h4 className='font-bold'>Experience:</h4>{experience}</p>

                
            </div>
        </div>
    );
};

export default RecipeDetails;