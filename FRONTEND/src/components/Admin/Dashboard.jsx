// Dashboard.jsx
import React from 'react';
import "../../assets/css/admin/index.css";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./topbar.jsx";
function Dashboard() {
  
  return (    
    <div className="main-content">
    <Sidebar />
    <div>
      <Topbar/>
      <div>
    <div className="dashboard-container">
      <div className="stats-container">
        <div className="stat-card">
          <h3>Active Projects</h3>
          <div className="stat-value">124 <span className="stat-change">+12%</span></div>
        </div>
        <div className="stat-card">
          <h3>Monthly Revenue</h3>
          <div className="stat-value">$52,389 <span className="stat-change">+8%</span></div>
        </div>
        <div className="stat-card">
          <h3>New Inquiries</h3>
          <div className="stat-value">89 <span className="stat-change">+24%</span></div>
        </div>
        <div className="stat-card">
          <h3>Active Chats</h3>
          <div className="stat-value">12 <span className="stat-change">+5%</span></div>
        </div>
      </div>

      <div className="blog-posts-container">
        <div className="blog-header">
          <h2>Recent Blog Posts</h2>
          <button className="new-post-btn"> + New Post </button>
        </div>
        <table className="blog-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024 Interior Design Trends</td>
              <td>Sarah Johnson</td>
              <td><span className="published">Published</span></td>
              <td>Jan 15, 2024</td>
              <td><button>Edit</button> <button>Delete</button></td>
            </tr>
            <tr>
              <td>Sustainable Home Decor Guide</td>
              <td>Mike Peters</td>
              <td><span className="draft">Draft</span></td>
              <td>Jan 14, 2024</td>
              <td><button>Edit</button> <button>Delete</button></td>
            </tr>
            <tr>
              <td>Small Space Solutions</td>
              <td>Emma Wilson</td>
              <td><span className="published">Published</span></td>
              <td>Jan 13, 2024</td>
              <td><button>Edit</button> <button>Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="categories-budget-container">
        <div className="categories-container">
          <div className="categories-header">
            <h2>Style Categories</h2>
            <a href="#">View All</a>
          </div>
          <div className="category">Modern <span className="projects">45 projects</span></div>
          <div className="category">Contemporary <span className="projects">38 projects</span></div>
          <div className="category">Minimalist <span className="projects">32 projects</span></div>
          <div className="category">Traditional <span className="projects">28 projects</span></div>
        </div>

        <div className="budget-container">
          <div className="budget-header">
            <h2>Budget Overview</h2>
            <a href="#">View Report</a>
          </div>
          <img src="your-chart-image.png" alt="Budget Chart" />
        </div>
      </div>

      <div className="projects-container">
        <h2>Active Projects</h2>
        <div className="project">
          <div className="project-name">Luxury Apartment</div>
          <div className="progress-bar">
            <div className="progress" style={{ width: "75%" }}></div>
          </div>
          <div className="progress-percentage">75%</div>
        </div>
        <div className="project">
          <div className="project-name">Modern Office</div>
          <div className="progress-bar">
            <div className="progress" style={{ width: "45%" }}></div>
          </div>
          <div className="progress-percentage">45%</div>
        </div>
        <div className="project">
          <div className="project-name">Beach House</div>
          <div className="progress-bar">
            <div className="progress" style={{ width: "90%" }}></div>
          </div>
          <div className="progress-percentage">90%</div>
        </div>
      </div>
    </div>

    </div>
      </div>
    </div>
  );
}

export default Dashboard;