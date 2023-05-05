import React from 'react';
import RecipeDetailsInfo from '../RecipeDetailsInfo/RecipeDetailsInfo';

const RecipeDetails = ({ recipeDetails }) => {

    const { chef_name, chef_img, experience, recipes_count, likes, recipe_name, chef_bio, } = recipeDetails;

    console.log(recipeDetails.recipes);
    return (
        <div className="">
            <h4 className='text-center text-orange-300 font-bold text-5xl mb-9'>Chef Details Information</h4>


            <div className="card lg:card-side bg-base-100 shadow-xl p-5">

                <figure>
                    <img className='w-2/3' src={chef_img} alt="Album" /></figure>

                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{chef_name}</h2>
                    <p className='text-xl'><h4 className='font-bold'>Chef BIO:</h4> {chef_bio}</p>

                    <div className=" flex mx-auto space-x-28 justify-center items-center  ">
                        <p className="text-2xl text-gray-700 font-semibold leading-relaxed mb-0">{recipes_count} recipes</p>
                        <p className=" p-2 text-gray-700 leading-relaxed mb-0">|</p>
                        <button className="bg-gray-300  text-gray-800 font-bold py-2 px-4 rounded inline-flex text-center items-center">Like {likes}</button>
                    </div>

                    <p className='text-2xl'> <h4 className=' font-bold'>Experience:</h4>{experience}</p>




                </div>
            </div>
            <h4 className='text-center text-purple-500 font-bold text-5xl mt-16 mb-9'>Recipes Details Information</h4>

            <div className="flex flex-wrap mt-10 mb-10 grid-cols-2 gap-6 sm:grid-cols-1 justify-center lg:mx-36">
            {
                recipeDetails?.recipes?.map(recipeInfo => <RecipeDetailsInfo
                    key={recipeInfo.id}
                    recipeInfo={recipeInfo}
                >

                </RecipeDetailsInfo>)
            }
            </div>




        </div>


    );
};

export default RecipeDetails;