import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Navbar from "../Shared/Navbar/Navbar";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;