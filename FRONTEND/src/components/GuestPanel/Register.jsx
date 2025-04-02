import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import Navbar from "../Navbar";
import { Mail, Phone, MapPin, Menu, X, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";
import "../../assets/css/admin/register.css";

function Register() {
  return (
    <div className="font-sans text-black bg-white">
      <Navbar />
      <div className="register-container">
        <h1 className="register-title">Register</h1>
        <p className="register-subtitle">Create a new account to explore the world of interior design</p>

        <form className="register-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" placeholder="Enter your full name" />
            <small>Please provide your full name</small>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
            <small>We'll send a verification link to this email</small>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter a password" />
            <small>Password must be at least 8 characters</small>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="Re-enter your password" />
            <small>Passwords must match</small>
          </div>

          <button type="submit" className="register-button">Register</button>
        </form>

        <div className="login-link">
          <p>Already have an account? <a href="/login">Sign in</a></p>
        </div>
      </div>
    </div>
  );
}

export default Register;