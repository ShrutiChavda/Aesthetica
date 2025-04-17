import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../assets/css/admin/JobApplication.css";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./topbar.jsx";
import 'bootstrap-icons/font/bootstrap-icons.css';

const ApplicantModal = ({ applicant, onClose }) => {
  return (
    <div className="modal3" onClick={onClose}>
      <div className="modal3-content" onClick={(e) => e.stopPropagation()}>
        <h2>Applicant Info</h2>
        <p><strong>Name:</strong> {applicant.full_name}</p>
        <p><strong>Email:</strong> {applicant.email}</p>
        <p><strong>Position:</strong> {applicant.position}</p>
        <p><strong>Status:</strong> {applicant.status}</p>
        <p><strong>Applied At:</strong> {new Date(applicant.applied_at).toLocaleDateString()}</p>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const EditModal = ({ applicant, onSave, onClose }) => {
  const [formData, setFormData] = useState(applicant);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal3" onClick={onClose}>
      <div className="modal3-content" onClick={(e) => e.stopPropagation()}>
        <h2>Edit Applicant</h2>
        <input 
          type="text" 
          name="full_name" 
          value={formData.full_name} 
          onChange={handleChange} 
          placeholder="Full Name" 
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Email" 
        />
        <input 
          type="text" 
          name="position" 
          value={formData.position} 
          onChange={handleChange} 
          placeholder="Position" 
        />
        <select 
          name="status" 
          value={formData.status} 
          onChange={handleChange}
        >
          <option value="Pending">Pending</option>
          <option value="Reviewed">Reviewed</option>
          <option value="Shortlisted">Shortlisted</option>
          <option value="Rejected">Rejected</option>
        </select>
        <button className="save-btn" onClick={handleSubmit}>Save</button>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

function JobApplication() {
  const [applications, setApplications] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [editApplicant, setEditApplicant] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/applicants')
      .then((response) => {
        setApplications(response.data);
      })
      .catch((error) => {
        console.error('Error fetching applicants:', error);
      });
  }, []);

  const handleInfoClick = (applicant) => {
    setSelectedApplicant(applicant);
  };

  const handleEditClick = (applicant) => {
    setEditApplicant(applicant);
  };

  const handleDeleteClick = (id) => {
    axios.delete(`http://localhost:5000/applicants/${id}`)
      .then(() => {
        setApplications(applications.filter(app => app._id !== id));
      })
      .catch((error) => {
        console.error('Error deleting applicant:', error);
      });
  };

  const handleSaveEdit = (updatedApplicant) => {
    axios.put(`http://localhost:5000/applicants/${updatedApplicant._id}`, updatedApplicant)
      .then(() => {
        setApplications(applications.map(app => 
          app._id === updatedApplicant._id ? updatedApplicant : app
        ));
      })
      .catch((error) => {
        console.error('Error updating applicant:', error);
      });
  };

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
                  <th>Info</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((applicant) => (
                  <tr key={applicant._id}>
                    <td>
                      <div className="applicant-info">
                        <img src={applicant.pic || '/path/to/default-image.jpg'} className="applicant-avatar" alt="Applicant" />
                        <div className="applicant-details">
                          <div className="applicant-name">{applicant.full_name}</div>
                          <div className="applicant-email">{applicant.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>{applicant.position}</td>
                    <td>{new Date(applicant.applied_at).toLocaleDateString()}</td>
                    <td><span className={applicant.status.toLowerCase()}>{applicant.status}</span></td>
                    <td>
                      <button className="info-btn" onClick={() => handleInfoClick(applicant)}>
                        <i className="bi bi-info-circle"></i>
                      </button>
                    </td>
                    <td>
                      <button className="edit-btn" onClick={() => handleEditClick(applicant)}>
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      <button className="delete-btn" onClick={() => handleDeleteClick(applicant._id)}>
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pagination">
              <p className="entries-count">Showing 1 to 3 of {applications.length} entries</p>
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

        {selectedApplicant && <ApplicantModal applicant={selectedApplicant} onClose={() => setSelectedApplicant(null)} />}
        {editApplicant && <EditModal applicant={editApplicant} onSave={handleSaveEdit} onClose={() => setEditApplicant(null)} />}
      </div>
    </div>
  );
}

export default JobApplication;
