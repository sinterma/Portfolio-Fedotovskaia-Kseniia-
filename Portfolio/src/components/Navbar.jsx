import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <ThemeToggle />
        </nav>
    );
}

export default Navbar;
