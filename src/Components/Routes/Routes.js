
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Root from "../Layout/Root";
import Topics from "../Topics/Topics";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
              
            },
            {
                path:'/home',
                element:<Home></Home>,
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
                
            },
            {
                path:'/topics',
                element:<Topics></Topics>,
                
            }
        ]
    }
])