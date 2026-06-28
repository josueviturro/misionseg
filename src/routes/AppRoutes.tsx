import {useRoutes} from "react-router-dom";
import Home from "../View/Home.tsx"
import Aboutus from "../View/Aboutus.tsx";
import MainLayout from "../components/layout/MainLayout.tsx";
import Service from "../View/Services.tsx";
import Recruiter from '../components/sections/Recruiter.tsx'

const AppRoutes = () => {

    return useRoutes([
        {path: "/", element: <MainLayout/>, children: [{ index: true, element: <Home/>}]},
        {path: "/aboutus", element: <MainLayout/>, children:[{index: true, element: <Aboutus/>}]},
        {path: "/services", element: <MainLayout/>, children:[{index: true, element: <Service/>}] },
        {path: "/reclute", element: <MainLayout/> , children:[{index: true, element: <Recruiter/>}]}
    ])

}

export default AppRoutes
