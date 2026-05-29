import type { RouteObject } from "react-router-dom";
import MainLanding from "../pages/LandingPage/MainLanding";
import PageAboutMe from "../pages/PageAboutMe/PageAboutMe";
import MyProjects from "../pages/MyProjects/MyProjects";

const Routes:RouteObject[] = [
    {
        path:'/',
        element: <MainLanding/>
    },
    {
        path:'/aboutMe',
        element: <PageAboutMe/>
    },
    {
        path:'/myProjects',
        element: <MyProjects/>
    },
]

export default Routes