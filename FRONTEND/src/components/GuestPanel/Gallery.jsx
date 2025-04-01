import React, { useEffect, useRef } from "react";
import "../../src/assets/css/Gallery.css"; // Custom CSS

const slideshowImages = [
  "../../src/assets/images/i1.jpg",
  "../../src/assets/images/i2.jpg",
  "../../src/assets/images/i3.jpg",
  "../../src/assets/images/i4.jpg",
  "../../src/assets/images/i5.jpg",
  "../../src/assets/images/i1.jpg",
  "../../src/assets/images/i2.jpg",
  "../../src/assets/images/i3.jpg",
];

const gridImages = [
  "../../src/assets/images/g1.jpg",
  "../../src/assets/images/g2.jpg",
  "../../src/assets/images/g3.jpg",
  "../../src/assets/images/g4.jpg",
  "../../src/assets/images/g1.jpg",
  "../../src/assets/images/g2.jpg",
];

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
  );
};

export default Gallery;
