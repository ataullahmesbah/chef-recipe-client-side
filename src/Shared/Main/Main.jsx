import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ReviewClient from '../../Component/Review/Review';
import ChefLayout from '../../Component/ChefLayout/ChefLayout';
import RecipeSection from '../../Component/RecipeSection/RecipeSection';
import ItemsSection from '../../Pages/ItemsSection';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <ChefLayout></ChefLayout>
            <RecipeSection></RecipeSection>
            <ItemsSection></ItemsSection>
            
        </div>
    );
};

export default Main;