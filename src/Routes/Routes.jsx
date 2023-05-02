import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Navbar from "../Shared/Navbar/Navbar";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Main from "../Shared/Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
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
            }
        ]
    }
])

export default router;