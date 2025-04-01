import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Mail, Phone, MapPin, Menu, X, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/LandingPage.css";
import "../../assets/css/Slideshow.css";
import logo from "../../assets/images/logo.png";
import logo1 from "../../assets/images/logo1.png";
import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="font-sans text-black bg-white">

      {/* Slideshow */}
      <div className="slideshow-container">
        <Slider {...settings}>
          {[1, 2, 3, 4].map((num) => (
            <div key={num}>
              <img
                src={`../src/assets/images/${num}.png`}
                alt={`Interior ${num}`}
                className="slide-image"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Gallery Section */}
      <div className="gallery-container">
        <img src={`../src/assets/images/5.png`} alt={`Image 1`} />
        <img src={`../src/assets/images/6.png`} alt={`Image 2`} />
        <img src={`../src/assets/images/5.png`} alt={`Image 3`} />
        <img src={`../src/assets/images/6.png`} alt={`Image 4`} />
      </div>

      {/* Services Section */}
      <section className="services">
        <h3 className="text-2xl font-bold text-gray-800" id="title"><b>Services</b></h3>
        <p className="text-gray-900 mb-9 s11">
          We offer a variety of helpful tools and features to make your experience easier, more enjoyable, and efficient:
        </p>

        <div className="grid grid-cols-3 px-30 gap-19" id="c1">
          {[
            {
              title: "Interactive Blog Section",
              description: "Our blog is a place where you can find helpful articles, tips, and inspiration. Whether you're looking for design ideas, project advice, or the latest trends, our interactive blog is here to keep you informed and engaged."
            },
            {
              title: "Style Selector",
              description: "Picking the right style for your project can be hard, but with our Style Selector, it's simple! This tool lets you explore different design styles and see which one suits your taste and needs best. You can try different looks until you find the perfect one for your space."
            },
            {
              title: "Budget Planner",
              description: "Staying on track with your spending is important, and our Budget Planner helps you do just that. It's an easy-to-use tool where you can set your budget, track your expenses, and adjust as needed to make sure you stay within your financial goals for your project."
            },
            {
              title: "Room Measurement",
              description: "Our Room Measurement Integration tool lets you input your room's dimensions directly into your project, making sure everything fits perfectly and works with your design."
            },
            {
              title: "Live Chat",
              description: "If you ever have a question or need assistance, our Live Chat feature is here to help. You can talk to a real person instantly, and we'll provide answers and support in real-time, making sure you're never left waiting."
            },
            {
              title: "Careers",
              description: "We're always looking for talented people to join our team! Check out our Careers page for information on job openings and opportunities to work with us. Whether you're looking for a full-time role or an internship."
            }
          ].map((service) => (
            <Card key={service.title} className="bg-white rounded-lg shadow-gray card">
              <CardContent className="p-6">
                <h4 className="font-semibold text-black-700">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

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
