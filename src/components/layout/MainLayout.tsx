import Navbar from "../sections/Navbar.tsx"
import Footer from "../sections/Footer.tsx"
import { Outlet } from "react-router-dom"


const MainLayout = () => {
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default MainLayout
