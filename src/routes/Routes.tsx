import type { RouteObject } from "react-router-dom";
import MainLanding from "../pages/Home/MainLanding";

const Routes:RouteObject[] = [
    {
        path:'/',
        element: <MainLanding/>
    }
]

export default Routes