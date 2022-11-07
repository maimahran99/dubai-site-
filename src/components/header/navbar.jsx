import { Link } from "react-router-dom"

function Navbar({toggle, setToggle}) {
    return (
        <nav style={{clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}} className="navbar">        <ul className="navbar-links">
            <Link to="/" className="navbar-link">
            <i class="bi bi-house-fill"></i>
                 Home 
            </Link>
            <Link to="/about" className="navbar-link">
            <i class="bi bi-bank2"></i>
                 About 
            </Link>
            <Link to="/login" className="navbar-link">
            <i class="bi bi-arrow-right-square"></i>
                Login 
            </Link>
            <Link to="/register" className="navbar-link">
            <i class="bi bi-person-plus-fill"></i>
                 Register
             </Link>
        </ul>
    </nav>
    )
}

export default Navbar