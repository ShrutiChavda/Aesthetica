import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import "../../src/assets/css/LandingPage.css"; 
import "../../src/assets/css/about.css"; 
    
    const About = () => {
      return (
        <div className="font-sans text-black bg-white">
          {/* Hero Section */}
          
          <section className="hero">
            <section className="hero-content"></section>
          </section>
          {/* About Us Section */}
          <section className="about-us">
            <div className="about-content">
              <img
                src={`../../src/assets/images/about.png`}
                alt={`Interior Design`}
                className="about-image"
              />
              <div className="about-text">
                <h2>About Us</h2>
                <p>
                  At Aesthetica, we go beyond aesthetics. Our platform offers an
                  interactive blog section filled with expert tips and the
                  latest trends, a style selector to match designs with your
                  preferences, and a budget planner to keep your project on
                  track. With our dynamic quotation generator and room
                  measurement integration, you get accurate estimates and a
                  hassle-free experience.
                </p>
              </div>
            </div>
          </section>

          {/* Meet Our Team Section */}
          <section className="team">
            <h2 className="team-heading">Meet Our Team</h2>
            <p className="team-subheading">Dedicated to Design Excellence</p>
            <div className="team-container">
              <Card className="team-card">
                <CardContent>
                  <img
                    src="../../src/assets/images/team1.png"
                    alt="Architect"
                    className="team-image"
                  />
                  <h3>Architect</h3>
                  <p>
                  We believe in collaboration, creativity, and client satisfaction, making us the perfect choice for your next design endeavor.
                  </p>
                </CardContent>
              </Card>

              <Card className="team-card">
                <CardContent>
                  <img
                    src="../../src/assets/images/team2.png"
                    alt="Developer"
                    className="team-image"
                  />
                  <h3>Developer</h3>
                  <p>
                  Innovation, passion, and attention to detail are the cornerstones of our team's success, driving us to exceed expectations and create timeless designs.
                  </p>
                </CardContent>
              </Card>

              <Card className="team-card">
                <CardContent>
                  <img
                    src="../../src/assets/images/team3.png"
                    alt="Project Manager"
                    className="team-image"
                  />
                  <h3>Project Manager</h3>
                  <p>
                  Describe the team member here. Write a brief description of their role and responsibilities, or a short bio with a background summary.
                  </p>
                </CardContent>
              </Card>
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
                <label htmlFor="email">
                  <b>Email</b>
                </label>
                <input type="email" id="email" placeholder="Enter your email" />
                <p className="privacy-text">We respect your privacy</p>
                <button>Subscribe</button>
              </div>
            </div>
          </section>
        </div>
      );
    };
    export default About;