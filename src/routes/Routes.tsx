import type { RouteObject } from "react-router-dom";
import MainLanding from "../pages/LandingPage/MainLanding";
import PageAboutMe from "../pages/PageAboutMe/PageAboutMe";

const Routes:RouteObject[] = [
    {
        path:'/',
        element: <MainLanding/>
    },
    {
        path:'/about',
        element: <PageAboutMe/>
    },
]

export default Routes