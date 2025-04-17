import React, { useEffect, useState } from 'react';
import "../../assets/css/admin/index.css";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./topbar.jsx";
import chart from "../../assets/images/chart.png";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Dashboard() {
  const [admin, setAdmin] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [styles, setStyles] = useState([]);
  const [projects, setProjects] = useState([]);
  const [stats, setStats] = useState({
    activeProjects: 0,
    monthlyRevenue: 0,
    newInquiries: 0,
    activeChats: 0
  });

  useEffect(() => {
    fetch("http://localhost:5000/auth1/get-admin", {
      credentials: "include",
    })
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
      .catch(err => console.error("Admin fetch error", err));

    fetch("http://localhost:5000/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error("Blog fetch error", err));

    fetch("http://localhost:5000/styles")
      .then(res => res.json())
      .then(data => setStyles(data))
      .catch(err => console.error("Styles fetch error", err));

    fetch("http://localhost:5000/projects")
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setStats(prev => ({ ...prev, activeProjects: data.length }));
      })
      .catch(err => console.error("Projects fetch error", err));

    fetch("http://localhost:5000/budgets")
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error("Stats fetch error", err));
  }, []);

  return (
    <div className="main-content">
      <Sidebar />
      <div>
        <Topbar />
        <div className="dashboard-container">
          <div className="stats-container">
            <div className="stat-card">
              <h3>Active Projects</h3>
              <div className="stat-value">{stats.activeProjects} <span className="stat-change">+12%</span></div>
            </div>
            <div className="stat-card">
              <h3>Monthly Revenue</h3>
              <div className="stat-value">${stats.monthlyRevenue} <span className="stat-change">+8%</span></div>
            </div>
            <div className="stat-card">
              <h3>New Inquiries</h3>
              <div className="stat-value">{stats.newInquiries} <span className="stat-change">+24%</span></div>
            </div>
            <div className="stat-card">
              <h3>Active Chats</h3>
              <div className="stat-value">{stats.activeChats} <span className="stat-change">+5%</span></div>
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
                {blogs.map((blog, index) => (
                  <tr key={index}>
                    <td>{blog.title}</td>
                    <td>{blog.author || "Admin"}</td>
                    <td>
                      <span className={blog.status.toLowerCase()}>
                        {blog.status}
                      </span>
                    </td>
                    <td>{new Date(blog.created_at).toLocaleDateString()}</td>
                    <td>
                      <button className="edit-btn">
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      <button className="delete-btn">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="categories-budget-container">
            <div className="categories-container">
              <div className="categories-header">
                <h2>Style Categories</h2>
                <a href="#">View All</a>
              </div>
              {styles.map((style, index) => (
                <div className="category" key={index}>
                  {style.title} <span className="projects">{style.total_projects || 0} projects</span>
                </div>
              ))}
            </div>

            <div className="budget-container">
              <div className="budget-header">
                <h2>Budget Overview</h2>
                <a href="#">View Report</a>
              </div>
              <img src={chart} alt="Budget Chart" />
            </div>
          </div>

          <div className="projects-container">
            <h2>Active Projects</h2>
            {projects.map((project, index) => (
              <div className="project" key={index}>
                <div className="project-name">{project.name}</div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${project.progress || 0}%` }}></div>
                </div>
                <div className="progress-percentage">{project.progress || 0}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
