import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Mail, Phone, MapPin, Menu, X, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/LandingPage.css";
import Navbar from "../Navbar";
import "../../assets/css/Slideshow.css";
import logo from "../../assets/images/logo.png";
import logo1 from "../../assets/images/logo1.png";
import { Link } from "react-router-dom";
import "../../assets/css/ForgotPassword.css";
import fp from "../GuestPanel/";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Newsletter from "./newsletter";

const ForgotPassword = () => {
    return (
      <div className="forgot-password-container">
        <h2 className="forgot-title">Forgot Password</h2>
        
        <form className="forgot-form">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
          <p>We'll never share your email with anyone else</p>
          <button type="submit">Submit</button>
        </form>
  
        <div className="back-to-login">
          <Link to="/login">Back to Login</Link>
        </div>
      </div>
    );
};

<div className="font-sans text-black bg-white">
<Navbar />  {/* Add Navbar Component Here */}

<Newsletter/>


</div>

export default ForgotPassword;


