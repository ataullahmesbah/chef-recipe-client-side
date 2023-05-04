import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Navbar from "../Shared/Navbar/Navbar";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Main from "../Shared/Main/Main";
import ReviewClient from "../Component/Review/Review";
import ChefLayout from "../Component/ChefLayout/ChefLayout";
import Recipe from "../Shared/Recipe/Recipe";
import PrivateRoute from "./PrivateRoute";
import RecipeDetailsInfo from "../Pages/RecipeDetailsInfo/RecipeDetailsInfo";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            {
                path: '/',
                element: <Main></Main>
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: '/',
                element: <ReviewClient></ReviewClient>
            },
            {
                path: 'cheflayout',
                element: <ChefLayout></ChefLayout>,
                
            },
            {
                path: 'cheflayout/:id',
                element: <PrivateRoute><Recipe></Recipe></PrivateRoute>
                
            }


        ]
    }
])

export default router;