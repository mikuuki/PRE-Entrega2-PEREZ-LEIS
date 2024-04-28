import { Link } from "react-router-dom"
import logo from "../../assets/logo.jpg";
import { FaShoppingCart } from "react-icons/fa";


import "./navbar.css"

function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <img src={logo} className="logo" alt="logo" />
            </div>
            <ul className="navbar-links">       
                     <Link to="/categoria/tarjetas" className="categoria-navbar">
                    Tarjetas
                </Link>
                <Link to="/categoria/regalos" className="categoria-navbar">
                    Regalos
                </Link>
                <Link to="/categoria/indumentaria" className="categoria-navbar">
                    Indumentaria
                </Link>

            </ul>
            <div className="carrito">
                <FaShoppingCart size="30px" className="iconoCarrito" />
                <span className="badge">0</span>
            </div>


        </nav>
    )
}
export default Navbar

