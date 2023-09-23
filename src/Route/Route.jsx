import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../Components/Pages/Home/Home";
import LogIn from "../Components/Pages/LogIn/LogIn";
import Favorites from "../Components/Pages/Favorites/Favorites";
import DetailsPhone from "../Components/DetailsPhone/DetailsPhone";
import ErrorPage from "../Components/ErrorPage/ErrorPage";


const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/phones.json')
            },
            {
                path: '/favorites',
                element: <Favorites></Favorites>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/details/:Id',
                element: <DetailsPhone></DetailsPhone>,
                loader: () => fetch(`/phones.json`)
            }
        ]
    }
])

export default Route;