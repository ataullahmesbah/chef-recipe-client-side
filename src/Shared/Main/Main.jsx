import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ReviewClient from '../../Component/Review/Review';
import ChefLayout from '../../Component/ChefLayout/ChefLayout';
import RecipeSection from '../../Component/RecipeSection/RecipeSection';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <ChefLayout></ChefLayout>
            <RecipeSection></RecipeSection>
            <ReviewClient></ReviewClient>
            
        </div>
    );
};

export default Main;