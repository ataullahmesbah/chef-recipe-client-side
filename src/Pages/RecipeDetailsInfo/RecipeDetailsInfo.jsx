import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const RecipeDetailsInfo = ({ recipeInfo }) => {
    console.log(recipeInfo);

    const { recipe_name, cooking_method, ingredients, rating, favorite, } = recipeInfo;
    console.log(recipe_name);
    return (
        <div className='mb-10 '>
            <div className="card w-96 bg-base-300  flex shadow-lg">
                <div className="card-body">
                    <h2 className="card-title"><span className='text-xl font-bold'>Recipe Name:</span> {recipe_name}</h2>
                    <p className='text-xl'><span className='text-xl font-bold'>Cooking Method:</span> <br />{cooking_method}</p>
                    <p className='text-xl'><span className='text-xl font-bold'>Ingredients:</span> <br />{ingredients}</p>
                    <div className="flex flex-wrap items-center">
                    <Rating style={{ maxWidth: 100 }} value={Math.round(rating || 0)} readOnly />
                    <span className='ms-2'>{rating}</span>
                    </div>
                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
            </div>



        </div>


        
    );
};

export default RecipeDetailsInfo;