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
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import careerImage from "../../assets/images/career.jpg";    //Images for career section
import user1 from "../../assets/images/team1.png";
import user2 from "../../assets/images/team2.png";
import user3 from "../../assets/images/team3.png";
import Newsletter from "./newsletter";


const Career = () => {


  return (
    <div className="font-sans text-black bg-white">
            <Navbar />  {/* Add Navbar Component Here */}

      {/* Career Section */}
      {/* Hero Section */}
      {/* <section className="career-hero">
        <h1>Career</h1>
      </section> */}

      {/* Career Advice Section */}
      <section className="career-advice">
        <div className="career-advice-text">
          <h2>Career Advice and Tips</h2>
          <p>Learn from industry experts and enhance your skills.</p>
          <Button className="read-more">Read More</Button>
        </div>
        <div className="career-advice-image">
          <img src={careerImage} alt="Career Advice"/>
        </div>
      </section>

      {/* Blog Section */}
      <section className="career-blog">
        <Card className="blog-card1">
          <img src={careerImage} alt="Career Tip" />
          <CardContent>
            <h3>10 Tips for a Successful Design Career</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button className="blog-category">Career Advice</Button>
          </CardContent>
        </Card>
        <Card className="blog-card1">
          <img src={careerImage} alt="Job Market" />
          <CardContent>
            <h3>Navigating the Job Market in Interior Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button className="blog-category">Career Guidance</Button>
          </CardContent>
        </Card>
      </section>

      {/* Employee Testimonials */}
      <section className="employee-testimonials">
        <h2>Employee Testimonials</h2>
        <p>Discover what our team members have to say about working with us</p>
        <Button className="view-all">View All Reviews</Button>
        <br /><br /><br />
        <div className="testimonial-grid1">
          <Card className="testimonial-card">
            <img src={user1} alt="John Doe" className="testimonial-img" />
            <CardContent>
              <h4>John Doe ⭐⭐⭐⭐⭐</h4>
              <p>Working here has been a truly rewarding experience</p>
            </CardContent>
          </Card>
          <Card className="testimonial-card">
            <img src={user2} alt="Lara Winston" className="testimonial-img" />
            <CardContent>
              <h4>Lara Winston ⭐⭐⭐⭐⭐</h4>
              <p>Great company culture and supportive team</p>
            </CardContent>
          </Card>
          <Card className="testimonial-card">
            <img src={user3} alt="Alex Johnson" className="testimonial-img" />
            <CardContent>
              <h4>Alex Johnson ⭐⭐⭐⭐⭐</h4>
              <p>Opportunities for growth and creativity abound</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <Newsletter/>

    </div>

  );
};
export default Career;
