import React from 'react';
import "../../assets/css/admin/JobApplication.css";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./topbar.jsx";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";

function JobApplication() {
  return (
    <div className="main-content">
      <Sidebar />
      <div>
        <Topbar />
        <div className="job-application-container">
          <div className="job-application-header">
            <h2>Job Applications</h2>
            <p className="job-application-description">Manage and review candidate applications</p>
          </div>

          <div className="job-application-filters">
            <input type="text" placeholder="Search applications..." className="search-input" />
            <button className="filter-btn">Filters</button>
          </div>

          <div className="job-application-stats">
            <div className="job-application-stat">
              <h3>Total Applications</h3>
              <div className="stat-value">248</div>
            </div>
            <div className="job-application-stat">
              <h3>New Applications</h3>
              <div className="stat-value">42</div>
            </div>
            <div className="job-application-stat">
              <h3>Shortlisted</h3>
              <div className="stat-value">28</div>
            </div>
            <div className="job-application-stat">
              <h3>Rejected</h3>
              <div className="stat-value">18</div>
            </div>
          </div>

          <div className="recent-applications">
            <div className="recent-applications-header">
              <h2>Recent Applications</h2>
              <button className="export-btn">Export</button>
            </div>

            <table className="application-table">
              <thead>
                <tr>
                  <th>Applicant</th>
                  <th>Position</th>
                  <th>Applied Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="applicant-info">
                      <img src={img1} className="applicant-avatar"></img>
                      <div className="applicant-details">
                        <div className="applicant-name">Sarah Wilson</div>
                        <div className="applicant-email">sarah.wilson@email.com</div>
                      </div>
                    </div>
                  </td>
                  <td>Senior Interior Designer</td>
                  <td>Jan 15, 2025</td>
                  <td><span className="shortlisted">Shortlisted</span></td>
                  <td>
                    <button className="view-btn">👁️</button>
                    <button className="delete-btn">🗑️</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="applicant-info">
                    <img src={img2} className="applicant-avatar"></img>
                    <div className="applicant-details">
                        <div className="applicant-name">Michael Chen</div>
                        <div className="applicant-email">michael.chen@email.com</div>
                      </div>
                    </div>
                  </td>
                  <td>Junior Designer</td>
                  <td>Jan 14, 2025</td>
                  <td><span className="under-review">Under Review</span></td>
                  <td>
                    <button className="view-btn">👁️</button>
                    <button className="delete-btn">🗑️</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="applicant-info">
                    <img src={img3} className="applicant-avatar"></img>
                    <div className="applicant-details">
                        <div className="applicant-name">Emily Brown</div>
                        <div className="applicant-email">emily.brown@email.com</div>
                      </div>
                    </div>
                  </td>
                  <td>Project Manager</td>
                  <td>Jan 13, 2025</td>
                  <td><span className="rejected">Rejected</span></td>
                  <td>
                    <button className="view-btn">👁️</button>
                    <button className="delete-btn">🗑️</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="pagination">
              <p className="entries-count">Showing 1 to 3 of 248 entries</p>
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
    </div>
  );
}

export default JobApplication;