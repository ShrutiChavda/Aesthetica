import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Mail, Phone, MapPin, Menu, X, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/LandingPage.css";
import sofa from "../../assets/images/sofa.png";  //Images of Featured products
import table from "../../assets/images/table.png";
import rug from "../../assets/images/rug.png";
import mirror from "../../assets/images/mirror.jpg";
import watch from "../../assets/images/watch.jpg";
import lamp from "../../assets/images/lamp.jpg";
import article1 from "../../assets/images/article1.jpg"; // Images of article
import article2 from "../../assets/images/article2.jpg";
import article3 from "../../assets/images/article3.jpg";

import user1 from "../../assets/images/team1.png";   // Images of auther
import user2 from "../../assets/images/team2.png";
import user3 from "../../assets/images/team3.png";

import logo from "../../assets/images/logo.png";
import logo1 from "../../assets/images/logo1.png";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Newsletter from "./newsletter";


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
      image: user1,
      description: "Discover expert tips on selecting the perfect furniture to match your style and space.",
    },
    {
      id: 2,
      title: "Top 5 Interior Design Trends of 2025",
      date: "March 8, 2025",
      author: "Emily Smith",
      img: article2,
      image: user2,
      description: "Stay ahead of the latest design trends and transform your home with elegance.",
    },
    {
      id: 3,
      title: "Maximizing Small Spaces with Smart Furniture",
      date: "March 5, 2025",
      author: "Michael Johnson",
      img: article3,
      image: user3,
      description: "Learn how to make the most of your small living space with functional furniture ideas.",
    },
  ];

  return (
    <div className="font-sans text-black bg-white">
  <Navbar />

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
              <img className="aaa" src={article.img} alt={article.title} />
              <div className="article-content">
                <h3>{article.title}</h3>
                <p className="description">{article.description}</p>
                <div className="author">
                  <img className="bbb" src={article.image} alt={article.author} />
                  <span>{article.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Newsletter/>

    </div>
  );
};

export default Blog;
