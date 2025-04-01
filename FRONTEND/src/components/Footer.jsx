import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin, X } from "lucide-react";
import logo1 from "../assets/images/logo1.png";
import "../../src/assets/css/LandingPage.css"; 
import "../../src/assets/css/Slideshow.css"; 
const Footer = () => {
  return (
    <footer className="p-6 bg-gray-100 footer">
      <div className="flex justify-between footer-container">
        
        <div className="footer-brand">
          <img src={logo1} alt="Aesthetica Logo" className="h-12 mb-4 footer-logo" />
          <div className="flex space-x-4 social-icons">
            <X className="social-icon" /> 
            <Instagram className="social-icon" />
            <Youtube className="social-icon" />
            <Linkedin className="social-icon" />
          </div>
        </div>

        <div className="flex space-x-10 footer-links">
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/career">Career</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Services</h4>
            <ul>
              <li>Stay Updated with Our Blog</li>
              <li>Design Your Space</li>
              <li>Plan Your Budget</li>
              <li>Get an Instant Quote</li>
              <li>Measure Your Room</li>
              <li>Chat with Us Live</li>
              <li>Join Our Team</li>
            </ul>
          </div>
        </div>

        <div className="footer-contact">
          <h4 className="font-semibold">Get in Touch</h4>
          <p><MapPin className="icon" /> 123 Main Street, Your City, State, Country.</p>
          <p><Phone className="icon" /> (123) 456-7890</p>
          <p><Mail className="icon" /> aesthetica@gmail.com</p>
        </div>
        
      </div>

      <div className="mt-4 text-center footer-bottom">
        <p>© 2025 Interior Design Blog. All Rights Reserved.</p>
        <div>
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
