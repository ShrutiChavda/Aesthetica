import React from 'react';
import "../../assets/css/admin/Blog.css"; 
import Sidebar from "./Sidebar.jsx";
import Topbar from "./topbar.jsx";

function Blog() {
  return (
    <div className="main-content">
      <Sidebar />
      <div>
        <Topbar />
        <div className="blog-management-container"> 
          <div className="blog-header">
            <h2>Blog Posts</h2>
            <button className="new-post-btn"> + New Post </button>
          </div>
          <p className="blog-description">Manage your blog content</p>

          <div className="blog-filters">
            <input type="text" placeholder="Search posts..." className="search-input" />
            <select className="category-filter">
              <option value="">All Categories</option>
            </select>
            <select className="status-filter">
              <option value="">Status</option>
            </select>
          </div>

          <table className="blog-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Author</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Modern Interior Design Trends 2025</td>
                <td>Interior Design</td>
                <td>Sarah Johnson</td>
                <td><span className="published">Published</span></td>
                <td>Jan 15, 2025</td>
                <td>
                  <button className="edit-btn">📝</button>
                  <button className="delete-btn">🗑️</button>
                </td>
              </tr>
              <tr>
                <td>Luxury Bedroom Designs</td>
                <td>Decoration</td>
                <td>Mike Wilson</td>
                <td><span className="draft">Draft</span></td>
                <td>Jan 12, 2025</td>
                <td>
                  <button className="edit-btn">📝</button>
                  <button className="delete-btn">🗑️</button>
                </td>
              </tr>
              {/* Add more rows here */}
            </tbody>
          </table>

          <div className="pagination">
            <p className="entries-count">Showing 1 to 2 of 12 entries</p>
            <div className="pagination-controls">
              <button className="page-btn">Previous</button>
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <button className="page-btn">Next</button>
            </div>
          </div>
          <div className='blank'></div>
        </div>
      </div>
    </div>
  );
}

export default Blog;