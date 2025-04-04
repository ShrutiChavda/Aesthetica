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
          {[
            {
              title: "Senior Interior Designer",
              location: "New York, NY",
              type: "Full-time",
              experience: "5+ years"
            },
            {
              title: "Design Consultant",
              location: "Los Angeles, CA",
              type: "Full-time",
              experience: "3+ years"
            },
            {
              title: "Project Manager",
              location: "Chicago, IL",
              type: "Full-time",
              experience: "4+ years"
            },
            {
              title: "3D Visualization Artist",
              location: "Remote",
              type: "Contract",
              experience: "2+ years"
            }
          ].map((job, index) => (
            <div className="job-listing" key={index}>
              <h3 className="job-title">{job.title}</h3>
              <div className="job-location">
                <i className="bi bi-geo-alt-fill"></i> {job.location}
              </div>
              <div className="job-type">
                <i className="bi bi-briefcase-fill"></i> {job.type}
              </div>
              <div className="job-experience">
                <i className="bi bi-clock-fill"></i> {job.experience}
              </div>
              <a href="#" className="view-details">
                View Details <i className="bi bi-chevron-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Job;