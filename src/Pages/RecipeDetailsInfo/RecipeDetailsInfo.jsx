import React from 'react';

const RecipeDetailsInfo = ({recipeDetails}) => {

    const {recipe_name, cooking_method} = recipeDetails;
    return (
        <div>
            {recipe_name}
            <h4>{cooking_method}</h4>

        </div>
    );
};

export default RecipeDetailsInfo;