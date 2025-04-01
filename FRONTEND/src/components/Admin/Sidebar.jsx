import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../../assets/css/admin/Sidebar.css";
import Logo from "../../assets/images/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";


function Sidebar() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <div>
      <button id="menuBtn" className="menuBtn" onClick={toggleSidebar}>
        ☰
      </button>

      <section
        id="sidebar"
        className={`sidebar ${isSidebarActive ? "active" : ""}`}
      >
        {isSidebarActive && (
          <button className="closeBtn" onClick={toggleSidebar}>
            ☰
          </button>
        )}
        <div className="logo1">
          <img src={Logo} alt="Logo" className="logo" />
        </div>

        <div className="profile-container">
  <img 
    src="../src/assets/images/profile.png" 
    alt="User Profile" 
    className="profile-image" 
  />
  <div>
    <h3 className="profile-name">Vaghasiya rutika</h3>
    <p className="profile-title">Senior Admin</p>
  </div>
</div>


<br />
        <ul>
          <li>
            <NavLink to="/admin/index" end className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="bi bi-house-door"></i> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/blog" end className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="bi bi-pencil-square"></i> Blog Management
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/budget" end className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="bi bi-cash-stack"></i> Budget Management
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/room" end className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="bi bi-building"></i> Room Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/career" end className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="bi bi-briefcase"></i> Careers
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/settings" end className={({ isActive }) => (isActive ? "active" : "")}
            >
              <i className="bi bi-gear"></i> Settings
            </NavLink>
          </li>
          <li>
            <Link to="/logout" end className="logout">
              <i className="bi bi-box-arrow-right"></i> Logout
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Sidebar;
