import React, { useEffect, useState } from 'react';
import "../../assets/css/admin/Room.css";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./topbar.jsx";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Room() {
  const [rooms, setRooms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [formData, setFormData] = useState({
    room_id: '',
    room_name: '',
    category: '',
    designer_name: '',
    status: 'Pending'
  });

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    const res = await fetch('http://localhost:5000/measures');
    const data = await res.json();
    setRooms(data);
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      await fetch(`http://localhost:5000/measures/${currentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } else {
      await fetch('http://localhost:5000/measures', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    }
    resetForm();
    fetchRooms();
  };

  const resetForm = () => {
    setShowModal(false);
    setIsEdit(false);
    setCurrentId(null);
    setFormData({ room_id: '', room_name: '', category: '', designer_name: '', status: 'Pending' });
  };

  const handleEdit = (room) => {
    setFormData({
      room_id: room.room_id,
      room_name: room.room_name,
      category: room.category,
      designer_name: room.designer_name,
      status: room.status
    });
    setCurrentId(room._id); // assuming _id is the MongoDB id
    setIsEdit(true);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this room?")) {
      await fetch(`http://localhost:5000/measures/${id}`, {
        method: 'DELETE'
      });
      fetchRooms();
    }
  };

  return (
    <div className="main-content">
      <Sidebar />
      <div>
        <Topbar />
        <div className="room-management-container">
          <div className="room-header">
            <h2>Room Management</h2>
            <button className="new-room-btn" onClick={() => {
              setShowModal(true);
              setIsEdit(false);
              setFormData({ room_id: '', room_name: '', category: '', designer_name: '', status: 'Pending' });
            }}>+ Add New Room</button>
          </div>

          <div className="room-stats">
            <div className="room-stat"><h3>Total Rooms</h3><div className="stat-value">{rooms.length}</div></div>
            <div className="room-stat"><h3>In Progress</h3><div className="stat-value">{rooms.filter(r => r.status === 'In Progress').length}</div></div>
            <div className="room-stat"><h3>Completed</h3><div className="stat-value">{rooms.filter(r => r.status === 'Completed').length}</div></div>
            <div className="room-stat"><h3>Pending</h3><div className="stat-value">{rooms.filter(r => r.status === 'Pending').length}</div></div>
          </div>

          <div className="room-list">
            <div className="room-list-header">
              <h2>Room List</h2>
              <div className="room-list-actions">
                <button className="filter-btn">Filter</button>
                <button className="sort-btn">Sort</button>
              </div>
            </div>

            <table className="room-table">
              <thead>
                <tr>
                  <th>Room ID</th>
                  <th>Room Name</th>
                  <th>Project</th>
                  <th>Status</th>
                  <th>Designer</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room, i) => (
                  <tr key={i}>
                    <td>{room.room_id}</td>
                    <td>{room.room_name}</td>
                    <td>{room.category}</td>
                    <td><span className={room.status.toLowerCase().replace(' ', '-')}>{room.status}</span></td>
                    <td>{room.designer_name}</td>
                    <td>{new Date(room.created_at).toLocaleDateString()}</td>
                    <td>
                      <button className="edit-btn" onClick={() => handleEdit(room)}><i className="bi bi-pencil-square"></i></button>
                      <button className="delete-btn" onClick={() => handleDelete(room._id)}><i className="bi bi-trash"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pagination">
              <p className="entries-count">Showing 1 to {rooms.length} of {rooms.length} entries</p>
              <div className="pagination-controls">
                <button className="page-btn">Previous</button>
                <button className="page-btn active">1</button>
                <button className="page-btn">Next</button>
              </div>
            </div>
          </div>
          <div className='blank2'></div>

          {/* Modal */}
          {showModal && (
            <div className="modal-backdrop">
              <div className="modal-content">
                <h3>{isEdit ? "Edit Room" : "Add New Room"}</h3>
                <form onSubmit={handleSubmit}>
                  <label>Room ID</label>
                  <input type="text" name="room_id" value={formData.room_id} onChange={handleChange} required />

                  <label>Room Name</label>
                  <input type="text" name="room_name" value={formData.room_name} onChange={handleChange} required />

                  <label>Category</label>
                  <select name="category" value={formData.category} onChange={handleChange} required>
                    <option value="">Select Category</option>
                    <option value="Luxury Villa">Luxury Villa</option>
                    <option value="Modern Apartment">Modern Apartment</option>
                    <option value="Urban Loft">Urban Loft</option>
                    <option value="Studio">Studio</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Beach House">Beach House</option>
                  </select>

                  <label>Designer Name</label>
                  <input type="text" name="designer_name" value={formData.designer_name} onChange={handleChange} required />

                  <label>Status</label>
                  <select name="status" value={formData.status} onChange={handleChange}>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>

                  <div className="modal-actions">
                    <button type="submit" className="save-btn">{isEdit ? "Update" : "Save"}</button>
                    <button type="button" className="cancel-btn" onClick={resetForm}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Room;
