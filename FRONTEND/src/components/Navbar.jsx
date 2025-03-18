import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import logo from "../assets/images/logo.png";
import "../../src/assets/css/LandingPage.css";
import "../../src/assets/css/Slideshow.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md navbar">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Aesthetica Logo" className="h-10" />
      </div>
      <ul className="flex space-x-6 font-medium">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active" : "")}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/career" className={({ isActive }) => (isActive ? "active" : "")}>
            Career
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </li>
      </ul>
      
        <div className="auth-buttons">
  <Button variant="outline" className="px-4 py-2 text-gray-800 border border-gray-500 rounded-lg sn">
    <Link to="/login">Sign In</Link>
  </Button>
  <Button className="px-4 py-2 text-white bg-black rounded-lg rg">
=======

      {/* Wrap navigation links inside a div with a class for right alignment */}
      <div className="flex items-center space-x-6 nav-links">
        <ul className="flex space-x-6 font-medium">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active" : "")}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/career" className={({ isActive }) => (isActive ? "active" : "")}>
              Career
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Buttons moved inside the same div for alignment */}
        <div className="space-x-3">
          <Button variant="outline" className="px-4 py-2 text-gray-800 border border-gray-500 rounded-lg sn">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button className="px-4 py-2 text-white bg-black rounded-lg rg">
>>>>>>> c4ecdf52a4aba27ee5466a993e0565601359ec9c
            <Link to="/register">Register</Link>
          </Button>

      </div>
    </nav>
  );
};

export default Navbar;
