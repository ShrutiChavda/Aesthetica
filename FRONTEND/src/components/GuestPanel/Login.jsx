import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Mail, Phone, MapPin, Menu, X, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../src/assets/css/LandingPage.css"; 
import "../../src/assets/css/Slideshow.css"; 
import logo from "../../src/assets/images/logo.png";
import logo1 from "../../src/assets/images/logo1.png";
import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const Slideshow = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };
    
    return (
      <div className="font-sans text-black bg-white">

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
export default Slideshow;
