import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import "../../assets/css/Gallery.css"; // Custom CSS
import i1 from "../../assets/images/i1.jpg";
import i2 from "../../assets/images/i2.jpg";
import i3 from "../../assets/images/i3.jpg";
import i4 from "../../assets/images/i4.jpg";
import i5 from "../../assets/images/i5.jpg";

import g1 from "../../assets/images/g1.jpg";
import g2 from "../../assets/images/g2.jpg";
import g3 from "../../assets/images/g3.jpg";
import g4 from "../../assets/images/g4.jpg";

const slideshowImages = [i1, i2, i3, i4, i5, i1, i2, i3];


const gridImages = [ g1, g2, g3, g4, g1, g2];

const Gallery = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const scrollSlideshow = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 1;
        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth - sliderRef.current.clientWidth) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scrollSlideshow, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans text-black bg-white">

    <Navbar />  {/* Add Navbar Component Here */}

    <div className="gallery-containerr">

      <h2 className="gallery-title">Gallery</h2>

      {/* Slideshow Section */}
      <div className="slideshow-containerr" ref={sliderRef}>
        <div className="slideshow">
          {slideshowImages.concat(slideshowImages).map((src, index) => (
            <div key={index} className="slide">
              <img src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Grid Layout Section */}
      <div className="grid-container">
        {gridImages.map((src, index) => (
          <div key={index} className="grid-itemm">
            <img src={src} alt={`Grid ${index + 1}`} />
          </div>
        ))}
      </div>

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
    </div>
  );
};

export default Gallery;
