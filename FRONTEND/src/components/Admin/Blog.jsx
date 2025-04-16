import React, { useEffect, useState } from "react";
import "../../assets/css/admin/Blog.css";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./topbar.jsx";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";

function Blog() {
  const [showModal, setShowModal] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    author: "",
    description: "",
    status: "Draft",
    time: "",
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await axios.get("http://localhost:5000/blogs");
    setBlogs(res.data);
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    if (isEditing) {
      await axios.put(`http://localhost:5000/blogs/${editId}`, formData);
    } else {
      await axios.post("http://localhost:5000/blogs", formData);
    }
    closeModal();
    fetchBlogs();
  };

  const handleEdit = (blog) => {
    setFormData({
      title: blog.title,
      category: blog.category,
      author: blog.author,
      description: blog.description,
      status: blog.status,
      time: blog.time,
    });
    setEditId(blog._id);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      await axios.delete(`http://localhost:5000/blogs/${id}`);
      fetchBlogs();
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setIsEditing(false);
    setEditId(null);
    setFormData({
      title: "",
      category: "",
      author: "",
      description: "",
      status: "Draft",
      time: ""
    });
  };

  const interiorCategories = [
    "Minimalist", "Modern", "Contemporary", "Industrial",
    "Scandinavian", "Traditional", "Bohemian", "Rustic",
    "Mid-century Modern", "Coastal"
  ];

  return (
    <div className="main-content">
      <Sidebar />
      <div>
        <Topbar />
        <div className="blog-management-container">
          <div className="blog-header">
            <h2>Blog Posts</h2>
            <button className="new-post-btn" onClick={() => setShowModal(true)}>+ New Post</button>
          </div>
          <p className="blog-description">Manage your blog content</p>

          <div className="blog-filters">
            <input type="text" placeholder="Search posts..." className="search-input" />
            <select className="category-filter">
              <option value="">All Categories</option>
              {interiorCategories.map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </select>
            <select className="status-filter">
              <option value="">Status</option>
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
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
              {blogs.map((blog, index) => (
                <tr key={index}>
                  <td>{blog.title}</td>
                  <td>{blog.category}</td>
                  <td>{blog.author}</td>
                  <td>
                    <span className={blog.status === "Published" ? "published" : "draft"}>
                      {blog.status}
                    </span>
                  </td>
                  <td>{new Date(blog.created_at).toLocaleDateString()}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEdit(blog)}>
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button className="delete-btn" onClick={() => handleDelete(blog._id)}>
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <p className="entries-count">Showing {blogs.length} entries</p>
            <div className="pagination-controls">
              <button className="page-btn">Previous</button>
              <button className="page-btn active">1</button>
              <button className="page-btn">Next</button>
            </div>
          </div>

          {showModal && (
            <div className="modal-backdrop">
              <div className="modal-box">
                <h3>{isEditing ? "Edit Blog Post" : "New Blog Post"}</h3>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="">Select Category</option>
                  {interiorCategories.map((cat, idx) => (
                    <option key={idx} value={cat}>{cat}</option>
                  ))}
                </select>
                <input
                  type="text"
                  name="author"
                  placeholder="Author"
                  value={formData.author}
                  onChange={handleInputChange}
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleInputChange}
                ></textarea>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </select>
                <input
                  type="text"
                  name="time"
                  placeholder="Reading time (e.g., 5 min)"
                  value={formData.time}
                  onChange={handleInputChange}
                />
                <div className="modal-actions">
                  <button onClick={handleSave}>{isEditing ? "Update" : "Save"}</button>
                  <button onClick={closeModal}>Cancel</button>
                </div>
              </div>
            </div>
          )}
          <div className="blank"></div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
