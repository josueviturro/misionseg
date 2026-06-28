
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.png"





const Navbar = () => {

    return(
        <>
        <div className="nav_bar">
            <div className="logo_container">
            <img src={logo}  className="logo"/>
            </div>
            <ul className="nav_desorder_list">
                <NavLink to="/" className= {({isActive}) => isActive ? "active" : "noactive"}><li className="nav_order_list">Inicio</li></NavLink>
                <NavLink to="/aboutus" className={({isActive}) => isActive ? "active" : "noactive"}><li className="nav_order_list">Nosotros</li></NavLink>
                <NavLink to="/services" className={({isActive}) => isActive ? "active" : "noactive"}><li className="nav_order_list">Servicios</li></NavLink>
                <NavLink to="/reclute" className={({isActive}) => isActive ? "active" : "noactive"}><li className="nav_order_list">Trabaja con nosotros</li></NavLink>
            </ul>
        </div>
        </>
        )
}

export default Navbar;