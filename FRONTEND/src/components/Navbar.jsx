import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png";
import "../../src/assets/css/LandingPage.css";
import "../../src/assets/css/navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Aesthetica Logo" className="h-10" />
        </div>
        <div className="menu-toggle-container">
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul>
            <li><NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink></li>
            <li><NavLink to="/gallery" onClick={() => setIsOpen(false)}>Gallery</NavLink></li>
            <li><NavLink to="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink></li>
            <li><NavLink to="/career" onClick={() => setIsOpen(false)}>Career</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
          </ul>
        </div>
        <div className="nav-buttons">
          <Button variant="outline" className="sn"><Link to="/login">Sign In</Link></Button>
          <Button className="rg"><Link to="/register">Register</Link></Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;