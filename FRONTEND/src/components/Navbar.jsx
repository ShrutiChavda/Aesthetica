import { Link } from "react-router-dom";
import { Button } from "./ui/button"; 
import logo from "../assets/images/logo.png";
import "../../src/assets/css/LandingPage.css"; 
import "../../src/assets/css/Slideshow.css"; 

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md navbar">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Aesthetica Logo" className="h-10" />
      </div>
      <ul className="flex space-x-6 font-medium">
        <li><Link to="/">Home</Link></li>                    
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/career">Career</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="space-x-3">
        <Button asChild variant="outline" className="px-4 py-2 text-gray-800 border border-gray-500 rounded-lg">
          <Link to="/login">Sign In</Link>
        </Button>
        <Button asChild className="px-4 py-2 text-white bg-black rounded-lg">
          <Link to="/register">Register</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
