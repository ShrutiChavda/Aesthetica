import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Mail, Phone, MapPin, Menu, X, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../src/assets/css/LandingPage.css";
import sofa from "../../src/assets/images/sofa.png";  //Images of Featured products
import table from "../../src/assets/images/table.png";
import rug from "../../src/assets/images/rug.png";
import mirror from "../../src/assets/images/mirror.jpg";
import watch from "../../src/assets/images/watch.jpg";
import lamp from "../../src/assets/images/lamp.jpg";
import article1 from "../../src/assets/images/article1.jpg"; // Images of article
import article2 from "../../src/assets/images/article2.jpg";
import article3 from "../../src/assets/images/article3.jpg";

import logo from "../../src/assets/images/logo.png";
import logo1 from "../../src/assets/images/logo1.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blog = () => {
  const products = [
    { id: 1, name: "Elegance Sofa Set", price: "₹84550", img: sofa },
    { id: 2, name: "Luxury Coffee Table", price: "₹8500", img: table },
    { id: 3, name: "Soft Shaggy Rug", price: "₹2000", img: rug },
    { id: 4, name: "Stunning Wall Mirror", price: "₹3500", img: mirror },
    { id: 5, name: "Unique Watch Art", price: "₹599", img: watch },
    { id: 6, name: "Amaging Hanging Lamp", price: "₹2300", img: lamp }
  ];

  const articles = [
    {
      id: 1,
      title: "How to Choose the Best Furniture for Your Home",
      date: "March 10, 2025",
      author: "John Doe",
      img: article1,
      description: "Discover expert tips on selecting the perfect furniture to match your style and space.",
    },
    {
      id: 2,
      title: "Top 5 Interior Design Trends of 2025",
      date: "March 8, 2025",
      author: "Emily Smith",
      img: article2,
      description: "Stay ahead of the latest design trends and transform your home with elegance.",
    },
    {
      id: 3,
      title: "Maximizing Small Spaces with Smart Furniture",
      date: "March 5, 2025",
      author: "Michael Johnson",
      img: article3,
      description: "Learn how to make the most of your small living space with functional furniture ideas.",
    },
  ];

  return (
    <div className="font-sans text-black bg-white">
      {/* Navbar */}

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="latest-articles">
        <h2>Latest Articles</h2>
        <div className="article-grid">
          {articles.map((article) => (
            <div key={article.id} className="article-card">
              <img src={article.img} alt={article.title} />
              <div className="article-content">
                <h3>{article.title}</h3>
                <p className="date">{article.date} • <span className="author">By {article.author}</span></p>
                <p className="description">{article.description}</p>
              </div>
            </div>
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

export default Blog;
