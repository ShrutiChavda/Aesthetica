import { useState } from "react";
import Navbar from "../Navbar";
import "../../assets/css/LandingPage.css";
import "../../assets/css/login.css";

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
      <section className="newsletter">
        <div className="newsletter-container">
          <div className="newsletter-text">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Stay updated with our latest blog posts and design tips.</p>
          </div>
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