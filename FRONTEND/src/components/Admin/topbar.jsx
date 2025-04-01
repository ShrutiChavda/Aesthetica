// Topbar.jsx
import React from 'react';
import profileImage from '../../assets/images/profile.png';
import "../../assets/css/admin/topbar.css";

function Topbar() {
  return (
    <header>
      <div className="top-nav">
        <h2>Admin Dashboard</h2>
        <div className="nav-icons">
        <i className="bi bi-bell icon"></i>
          <img src={profileImage} alt="Profile" className="nav-profile icon" />
          <i className="bi bi-three-dots-vertical icon"></i>          
          </div>
      </div>
    </header>
  );
}

export default Topbar;