
import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Root from "../Layout/Root";
import Quiz from "../Quiz/Quiz";
import Statistics from "../Statistics/Statistics";
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
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
                
            },
            {
                path:'topics/:id',
                loader: ({params}) =>{
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
                     },
                element:<Quiz></Quiz>,
                
            },
            {
               path:'/statistics',
               element:<Statistics></Statistics>,
               loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
])