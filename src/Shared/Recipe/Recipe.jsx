import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetails from '../../Pages/RecipeDetails/RecipeDetails';

const Recipe = () => {

    const [recipeDetails, setRecipeDetails] = useState({});

    const {id} = useParams();

    useEffect( () => {
        fetch(`http://localhost:5000/allData/${id}`)
        .then(res => res.json())
        .then(data => setRecipeDetails(data))
        .catch(error => console.log(error))
    } ,[id]) 

    console.log(id);
    
    return (
        <div>
            {
                recipeDetails?.recipes?.map(recipeInfo => <RecipeDetails
                key={recipeInfo.id}
                recipeDetails={recipeDetails}
                ></RecipeDetails>)
            }
        </div>
    );
};

export default Recipe;