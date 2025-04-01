import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import Navbar from "../Navbar";
import { Mail, Phone, MapPin, Menu, X, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/LandingPage.css";
import "../../assets/css/Slideshow.css";
import logo from "../../assets/images/logo.png";
import logo1 from "../../assets/images/logo1.png";
import { Link } from "react-router-dom";
import "../../assets/css/login.css";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const Login = () => {
  return (
        <div className="font-sans text-black bg-white">
    <Navbar /> 
    <br /><br />
    <div className="login-container">

      <h1 className="login-title">Login</h1>
      <p className="login-subtitle">Enter your credentials to access your account</p>
      
      <form className="login-form">
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
          <small>We'll never share your email with anyone else</small>
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
          <small>Password must be at least 8 characters</small>
        </div>

        <div className="button-group">
          <button type="button" className="forgot-password">Forgot Password?</button>
          <button type="submit" className="login-button">Login</button>
        </div>
      </form>
    </div>
<br /><br /><br />
      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-container">
          {/* Left Side - Text */}
          <div className="newsletter-text">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Stay updated with our latest blog posts and design tips.</p>
          </div>

          {/* Right Side - Form */}
          <div className="newsletter-form">
            <label htmlFor="email"><b>Email</b></label>
            <input type="email" id="email" placeholder="Enter your email" />
            <p className="privacy-text">We respect your privacy</p>
            <button>Subscribe</button>
          </div>
        </div>
      </section>
    </div>
    
  );
};


export default Login;