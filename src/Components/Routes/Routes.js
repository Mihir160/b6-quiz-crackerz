
import { createBrowserRouter } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Root from "../Layout/Root";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            }
        ]
    }
])