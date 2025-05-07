import { Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className = "navbar">
            <Link to="/" className="logo">
            <img src="./src/images/SQ-3.png" alt="Logo" />
            </Link>
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/projects">Projects</Link>
        </nav>
    );
}

export default Navbar;