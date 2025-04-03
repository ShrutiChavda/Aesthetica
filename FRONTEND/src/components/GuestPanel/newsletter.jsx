import React from 'react';
import '../../assets/css/LandingPage.css';

function newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-text">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Stay updated with our latest blog posts and design tips.</p>
        </div>

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
  );
}

export default newsletter;