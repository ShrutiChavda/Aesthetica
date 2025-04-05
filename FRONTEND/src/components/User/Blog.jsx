import React from 'react'
import Navbar from './UserNav';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../assets/css/user/DesignBlog.css';
import blog2 from '../../assets/images/uBlog1.png';
import blog3 from '../../assets/images/uBlog2.png';
import blog4 from '../../assets/images/uBlog3.png';
import blog5 from '../../assets/images/uBlog4.png';

function Blog() {
  return (
    <div className="App">
      <Navbar />
      <div className="design-blog-container">
        <div className="header">
          <h1>Design Blog</h1>
        </div>

        <div className="featured-post">
          <img src={blog2} alt="Featured Post" className="featured-image" /> 
          <div className="featured-content">
            <h2>2024 Interior Design Trends You Need to Know</h2>
            <p>By Sarah Johnson • 10 min read</p>
          </div>
        </div>

        <div className="other-posts">
          <div className="post">
            <img src={blog3} alt="Post 1" className="post-image" />
            <div className="post-content">
              <h3>Small Space Solutions: Maximizing Home</h3>
              <p>Discover clever ways to make the most of limited space with these expert tips.</p>
              <div className="post-meta">
                <p>5 min read</p>
                <div className="post-icons">
                  <button className="icon-button">
                    <i className="bi bi-heart"></i>
                  </button>
                  <button className="icon-button">
                    <i className="bi bi-bookmark"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="post">
            <img src={blog4} alt="Post 2" className="post-image" />
            <div className="post-content">
              <h3>Color Psychology in Interior Design</h3>
              <p>Learn how different colors can affect mood and atmosphere in your space.</p>
              <div className="post-meta">
                <p>9 min read</p>
                <div className="post-icons">
                  <button className="icon-button">
                    <i className="bi bi-heart"></i>
                  </button>
                  <button className="icon-button">
                    <i className="bi bi-bookmark"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="post">
            <img src={blog5} alt="Post 3" className="post-image" />
            <div className="post-content">
              <h3>Scandinavian Design Elements</h3>
              <p>Explore the key elements that make Scandinavian design so appealing.</p>
              <div className="post-meta">
                <p>5 min read</p>
                <div className="post-icons">
                  <button className="icon-button">
                    <i className="bi bi-heart"></i>
                  </button>
                  <button className="icon-button">
                    <i className="bi bi-bookmark"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog