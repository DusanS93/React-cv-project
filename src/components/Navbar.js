import { Outlet,Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="nav">
            <Link to="/" className="navLinks">Homepage</Link>
            <Link to="/about" className="navLinks">About</Link>
            <Link to="/education" className="navLinks">Education</Link>
            <Link to="/workplaces" className="navLinks">Workplaces</Link>
            <Link to="/skills" className="navLinks">Skills</Link>
            <Link to="/contact" className="navLinks">Contact</Link>
            
            <Outlet />
        </nav>
    )
};

export default Navbar;