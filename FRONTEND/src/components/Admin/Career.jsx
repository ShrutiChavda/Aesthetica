import React from 'react';
import "../../assets/css/admin/Career.css";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./topbar.jsx";

function Career() {
  return (
    <div className="main-content">
      <Sidebar />
      <div>
        <Topbar />
        <div className="career-container">
          <div className="career-header">
            <h2>Job Opportunities</h2>
            <button className="new-position-btn">+ Add New Position</button>
          </div>
          <p className="career-description">Manage job postings and opportunities</p>

          <div className="career-filters">
            <input type="text" placeholder="Search positions..." className="search-input" />
            <select className="department-filter">
              <option value="">All Departments</option>
            </select>
            <select className="location-filter">
              <option value="">All Locations</option>
            </select>
          </div>

          <table className="career-table">
            <thead>
              <tr>
                <th>Position</th>
                <th>Department</th>
                <th>Location</th>
                <th>Posted Date</th>
                <th>Applications</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Senior Interior Designer</td>
                <td>Design</td>
                <td>New York</td>
                <td>Jan 15, 2025</td>
                <td><span className="new-applications">12 New</span></td>
                <td><span className="active">Active</span></td>
                <td>
                  <button className="edit-btn">📝</button>
                  <button className="delete-btn">🗑️</button>
                </td>
              </tr>
              <tr>
                <td>Project Manager</td>
                <td>Project Management</td>
                <td>London</td>
                <td>Jan 10, 2025</td>
                <td><span className="new-applications">8 New</span></td>
                <td><span className="active">Active</span></td>
                <td>
                  <button className="edit-btn">📝</button>
                  <button className="delete-btn">🗑️</button>
                </td>
              </tr>
              <tr>
                <td>Junior Architect</td>
                <td>Architecture</td>
                <td>Dubai</td>
                <td>Jan 5, 2025</td>
                <td><span className="new-applications">15 New</span></td>
                <td><span className="close">Close</span></td>
                <td>
                  <button className="edit-btn">📝</button>
                  <button className="delete-btn">🗑️</button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="pagination">
            <p className="entries-count">Showing 1 to 3 of 12 results</p>
            <div className="pagination-controls">
              <button className="page-btn">Previous</button>
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <button className="page-btn">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;