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
import "../../assets/css/contact.css";
import logo from "../../assets/images/logo.png";
import logo1 from "../../assets/images/logo1.png";
import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import "../../src/assets/css/Contact.css";
import Newsletter from "./newsletter";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear errors on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="font-sans text-black bg-white">
            <Navbar />  {/* Add Navbar Component Here */}

      {/* Contact Section */}
      <div className="contact-page">
        <h2>Contact Us</h2>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <label>Message</label>
            <textarea
              name="message"
              placeholder="Type your message here"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span className="error">{errors.message}</span>}

            <div className="form-actions">
              <button type="reset" className="reset-btn" onClick={() => setFormData({ name: "", email: "", message: "" })}>
                Reset
              </button>
              <button type="submit" className="submit-btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>

      <Newsletter/>


    </div>

  );
};
export default Contact;
