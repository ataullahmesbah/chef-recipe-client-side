import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetails from '../../Pages/RecipeDetails/RecipeDetails';
import RecipeDetailsInfo from '../../Pages/RecipeDetailsInfo/RecipeDetailsInfo';

const Recipe = () => {

    const [recipeDetails, setRecipeDetails] = useState({});
    

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://assignment-10-server-side-ataullahmesbah.vercel.app/allData/${id}`)
            .then(res => res.json())
            .then(data => setRecipeDetails(data))
            .catch(error => console.log(error))
    }, [id])

    console.log(id);
console.log(recipeDetails);
    

    return (
        <div className=" mt-10 mb-10">
            {
                <RecipeDetails

                    recipeDetails={recipeDetails}
                ></RecipeDetails>




            }



            

            <div>
            {/* {
                recipeDetails?.recipes?.map(recipeInfo => <RecipeDetailsInfo
                    key={recipeInfo.id}
                    recipeDetails={recipeDetails}
                >

                </RecipeDetailsInfo>)
            } */}
            </div>
        </div>
    );
};

export default Recipe;