import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import { FaBuffer } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import '@smastrom/react-rating/style.css';
import 'react-toastify/dist/ReactToastify.css';

const RecipeDetailsInfo = ({ recipeInfo }) => {

    const [disabled, setDisabled] = useState(false);

  const { recipe_name, cooking_method, ingredients, rating, favorite } = recipeInfo;

  const handleFavoriteClick = () => {
    toast.success('Your Recipe is Favorite');
    setDisabled(true);
  };
  

  return (
    <div className='mb-10'>
      <div className="card w-auto bg-base-300 flex shadow-lg">
        <div className="card-body">
          <h2 className="card-title"><span className='text-xl font-bold'>Recipe Name:</span> {recipe_name}</h2>
          <p className='text-xl'><span className='text-xl font-bold'>Cooking Method:</span> <br />{cooking_method}</p>
          <p className='text-xl'><span className='text-xl font-bold'>Ingredients:</span> <br />{ingredients}</p>

          <div className="flex flex-wrap items-center justify-between mt-4">
            <div className="flex flex-wrap items-center">
              <Rating style={{ maxWidth: 100 }} value={Math.round(rating || 0)} readOnly />
              <span className='ms-2'>{rating}</span>
            </div>
            <div className="card-actions justify-end">
              <h3>
              <FaBuffer
                  className='text-3xl text-blue-500'
                  onClick={handleFavoriteClick}
                  disabled={disabled}
                />

              </h3>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RecipeDetailsInfo;
