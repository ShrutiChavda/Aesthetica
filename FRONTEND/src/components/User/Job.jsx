import React, { useEffect, useState } from 'react';
import Navbar from './UserNav';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../assets/css/user/Job.css';
import axios from 'axios';

function Job() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    resume: null
  });

  useEffect(() => {
    axios.get('http://localhost:5000/careers')
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('full_name', formData.full_name);
    data.append('email', formData.email);
    data.append('position', selectedJob.position);
    data.append('resume', formData.resume);
    data.append('pic', ''); // Optional or leave out if not needed
  
    try {
      const res = await axios.post('http://localhost:5000/applicants', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Application submitted!');
      setShowModal(false);
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  };
  
  
  const openModal = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="job-listings-container">
        <h2 className="job-listings-title">Join Our Team</h2>
        <div className="job-listings">
          {jobs.map((job, index) => (
            <div className="job-listing" key={index}>
              <h3 className="job-title">{job.position}</h3>
              <div className="job-location"><i className="bi bi-geo-alt-fill"></i> {job.location}</div>
              <div className="job-type"><i className="bi bi-briefcase-fill"></i> {job.type}</div>
              <div className="job-experience"><i className="bi bi-clock-fill"></i> {job.experience}</div>
              <button className="view-details" onClick={() => openModal(job)}>
                View Details <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedJob && (
        <div className="modal5-overlay">
          <div className="modal5-content">
            <h3>{selectedJob.position}</h3>
            <p><strong>Location:</strong> {selectedJob.location}</p>
            <p><strong>Type:</strong> {selectedJob.type}</p>
            <p><strong>Experience:</strong> {selectedJob.experience}</p>
            <p><strong>Description:</strong> {selectedJob.description}</p>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.full_name}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                required
              />
              <button type="submit">Apply</button>
              <button type="button" onClick={() => setShowModal(false)}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Job;
