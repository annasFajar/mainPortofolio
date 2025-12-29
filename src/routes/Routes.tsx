import type { RouteObject } from "react-router-dom"
import MainLanding from "../components/LandingPage/MainLanding"

const Routes:RouteObject[] = [
    {
        path: '/',
        element: <MainLanding/>
    }
]

export default Routes