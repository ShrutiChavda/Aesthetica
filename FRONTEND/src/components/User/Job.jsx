import React from 'react';
import Navbar from './UserNav';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../assets/css/user/Job.css';

function Job() {
  return (
    <div className="App">
      <Navbar />
      <div className="job-listings-container">
        <h2 className="job-listings-title">Join Our Team</h2>
        <div className="job-listings">
          <div className="job-listing">
            <h3 className="job-title">Senior Interior Designer</h3>
            <div className="job-location">
              <i className="bi bi-geo-alt"></i> New York, NY
            </div>
            <div className="job-type">
              <i className="bi bi-briefcase"></i> Full-time
            </div>
            <div className="job-experience">
              <i className="bi bi-mortarboard"></i> 5+ years
            </div>
            <a href="/job-details/senior-interior-designer" className="view-details">View Details <i className="bi bi-chevron-right"></i></a>
          </div>

          <div className="job-listing">
            <h3 className="job-title">Design Consultant</h3>
            <div className="job-location">
              <i className="bi bi-geo-alt"></i> Los Angeles, CA
            </div>
            <div className="job-type">
              <i className="bi bi-briefcase"></i> Full-time
            </div>
            <div className="job-experience">
              <i className="bi bi-mortarboard"></i> 3+ years
            </div>
            <a href="/job-details/design-consultant" className="view-details">View Details <i className="bi bi-chevron-right"></i></a>
          </div>

          <div className="job-listing">
            <h3 className="job-title">Project Manager</h3>
            <div className="job-location">
              <i className="bi bi-geo-alt"></i> Chicago, IL
            </div>
            <div className="job-type">
              <i className="bi bi-briefcase"></i> Full-time
            </div>
            <div className="job-experience">
              <i className="bi bi-mortarboard"></i> 4+ years
            </div>
            <a href="/job-details/project-manager" className="view-details">View Details <i className="bi bi-chevron-right"></i></a>
          </div>

          <div className="job-listing">
            <h3 className="job-title">3D Visualization Artist</h3>
            <div className="job-location">
              <i className="bi bi-geo-alt"></i> Remote
            </div>
            <div className="job-type">
              <i className="bi bi-briefcase"></i> Contract
            </div>
            <div className="job-experience">
              <i className="bi bi-mortarboard"></i> 2+ years
            </div>
            <a href="/job-details/3d-visualization-artist" className="view-details">View Details <i className="bi bi-chevron-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;