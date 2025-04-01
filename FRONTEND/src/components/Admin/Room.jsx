// Room.jsx
import React from 'react';
import "../../assets/css/admin/Room.css";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./topbar.jsx";

function Room() {
  return (
    <div className="main-content">
      <Sidebar />
      <div>
        <Topbar />
        <div className="room-management-container">
          <div className="room-header">
            <h2>Room Management</h2>
            <button className="new-room-btn">+ Add New Room</button>
          </div>

          <div className="room-stats">
            <div className="room-stat">
              <h3>Total Rooms</h3>
              <div className="stat-value">248</div>
            </div>
            <div className="room-stat">
              <h3>In Progress</h3>
              <div className="stat-value">45</div>
            </div>
            <div className="room-stat">
              <h3>Completed</h3>
              <div className="stat-value">182</div>
            </div>
            <div className="room-stat">
              <h3>On Hold</h3>
              <div className="stat-value">21</div>
            </div>
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
                  <th>Due Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#R001</td>
                  <td>Master Bedroom</td>
                  <td>Luxury Villa</td>
                  <td><span className="completed">Completed</span></td>
                  <td>John Doe</td>
                  <td>Dec 15, 2025</td>
                  <td>
                    <button className="edit-btn">📝</button>
                    <button className="delete-btn">🗑️</button>
                  </td>
                </tr>
                <tr>
                  <td>#R002</td>
                  <td>Living Room</td>
                  <td>Modern Apartment</td>
                  <td><span className="in-progress">In Progress</span></td>
                  <td>Jane Smith</td>
                  <td>Jan 20, 2025</td>
                  <td>
                    <button className="edit-btn">📝</button>
                    <button className="delete-btn">🗑️</button>
                  </td>
                </tr>
                <tr>
                  <td>#R003</td>
                  <td>Kitchen</td>
                  <td>Urban Loft</td>
                  <td><span className="on-hold">On Hold</span></td>
                  <td>Mike Johnson</td>
                  <td>Feb 28, 2025</td>
                  <td>
                    <button className="edit-btn">📝</button>
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

export default Room;