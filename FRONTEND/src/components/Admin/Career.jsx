import React, { useEffect, useState } from 'react';
import "../../assets/css/admin/Career.css";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./topbar.jsx";
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
function Career() {
  const [careers, setCareers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCareer, setEditingCareer] = useState(null);

  const defaultForm = {
    position: '',
    department: '',
    location: '',
    posted_date: '',
    experience: '',
    type: 'Full-time',
    status: 'Open',
    pic: ''
  };

  const [formData, setFormData] = useState(defaultForm);

  const departments = ['Senior Interior Designer', 'Project Management', 'Architecture'];
  const countriesWithStates = {
    "USA": ["New York", "California", "Texas"],
    "UK": ["London", "Manchester"],
    "UAE": ["Dubai", "Abu Dhabi"]
  };

  const fetchCareers = async () => {
    const res = await axios.get('http://localhost:5000/careers');
    setCareers(res.data);
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const openModal = (career = null) => {
    setEditingCareer(career);
    setFormData(career ? {
      ...career,
      posted_date: new Date(career.posted_date).toISOString().substr(0, 10)
    } : defaultForm);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingCareer(null);
  };

  const handleSubmit = async () => {
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });
  
    try {
      if (editingCareer) {
        await axios.put(`http://localhost:5000/careers/${editingCareer._id}`, form, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      } else {
        await axios.post('http://localhost:5000/careers', form, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      }
      closeModal();
      fetchCareers();
    } catch (err) {
      console.error(err);
      alert("Error saving data");
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/careers/${id}`);
    fetchCareers();
  };

  // const createImageUrl = (imgData) => {
  //   const blob = new Blob([new Int8Array(imgData)], { type: 'image/jpeg' }); // Assuming JPEG format
  //   return window.URL.createObjectURL(blob);
  // };

  return (
    <div className="main-content">
      <Sidebar />
      <div>
        <Topbar />
        <div className="career-container">
          <div className="career-header">
            <h2>Job Opportunities</h2>
            <button className="new-position-btn" onClick={() => openModal()}>+ Add New Position</button>
          </div>
          <p className="career-description">Manage job postings and opportunities</p>

          <div className="career-filters">
            <input type="text" placeholder="Search positions..." className="search-input" />
            <select className="department-filter">
              <option value="">All Departments</option>
              {departments.map(dep => (
                <option key={dep}>{dep}</option>
              ))}
            </select>
          
            <div className="location-row">
              <select name="country" value={formData.country || ''} onChange={(e) => {
                const selectedCountry = e.target.value;
                setFormData(prev => ({
                  ...prev,
                  country: selectedCountry,
                  location: '' // reset location when country changes
                }));
              }}>
                <option value="">Select Country</option>
                {Object.keys(countriesWithStates).map(country => (
                  <option key={country}>{country}</option>
                ))}
              </select>

              <select name="location" value={formData.location} onChange={handleInputChange}>
                <option value="">Select State</option>
                {(countriesWithStates[formData.country] || []).map(state => (
                  <option key={`${state}, ${formData.country}`}>{state}, {formData.country}</option>
                ))}
              </select>
            </div>
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
              {careers.map(career => (
                <tr key={career._id}>
                <td className="position-with-pic">
                <img
src={require('../../assets/images/profile.png')}
alt="Job"
className="job-pic"
/>

                 {career.position}
                  </td>
                  <td>{career.department}</td>
                  <td>{career.location}</td>
                  <td>{new Date(career.posted_date).toDateString()}</td>
                  <td><span className="new-applications">{career.total_applications} New</span></td>
                  <td><span className={career.status === "Open" ? "active11" : "close"}>{career.status}</span></td>
                  <td>
                    <button className="edit-btn" onClick={() => openModal(career)}>
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button className="delete-btn" onClick={() => handleDelete(career._id)}>
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <p className="entries-count">
              Showing {careers.length > 0 ? `1 to ${careers.length}` : 0} of {careers.length} results
            </p>
            <div className="pagination-controls">
              <button className="page-btn">Previous</button>
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <button className="page-btn">Next</button>
            </div>
          </div>
          <div className='blank5'></div>

          {modalOpen && (
            <div className="modal-overlay">
              <div className="career-modal">
                <h3>{editingCareer ? "Edit" : "Add"} Position</h3>
                <input type="text" name="position" value={formData.position} onChange={handleInputChange} placeholder="Position" />
                
                <select name="department" value={formData.department} onChange={handleInputChange}>
                  <option value="">Select Department</option>
                  {departments.map(dep => <option key={dep}>{dep}</option>)}
                </select>

                <select name="location" value={formData.location} onChange={handleInputChange}>
                  <option value="">Select Location</option>
                  {Object.entries(countriesWithStates).map(([country, states]) =>
                    states.map(state => (
                      <option key={`${state}, ${country}`}>{state}, {country}</option>
                    ))
                  )}
                </select>

                <input type="date" name="posted_date" value={formData.posted_date} onChange={handleInputChange} />
                <input type="number" name="experience" value={formData.experience} onChange={handleInputChange} placeholder="Experience (years)" />

                <select name="type" value={formData.type} onChange={handleInputChange}>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Internship</option>
                </select>

                <select name="status" value={formData.status} onChange={handleInputChange}>
                  <option>Open</option>
                  <option>Closed</option>
                </select>

                <input
                  type="file"
                  name="pic"
                  accept=".jpg,.png"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
                      setFormData(prev => ({ ...prev, pic: file }));
                    } else {
                      alert("Only JPG and PNG files are allowed.");
                      e.target.value = null;
                    }
                  }}
                />

                <div className="modal-actions">
                  <button onClick={handleSubmit}>{editingCareer ? "Update" : "Submit"}</button>
                  <button onClick={closeModal}>Cancel</button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Career;
