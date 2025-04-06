import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/authService";
import { NavLink, useLocation } from "react-router-dom";
import "../../assets/css/admin/Sidebar.css";
import Logo from "../../assets/images/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import profile from "../../assets/images/profile.png";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout(); // destroys session
      navigate("/login"); // redirect to login page
    } catch (err) {
      console.error("Admin logout failed:", err);
    }
  };

  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const location = useLocation();

  const isCareerActive = location.pathname.startsWith("/admin/career");
  const isJobApplicationActive = location.pathname === "/admin/jobapplication";

  useEffect(() => {
    setIsCareerOpen(isCareerActive || isJobApplicationActive);
  }, [isCareerActive, isJobApplicationActive]);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  const hideSidebar = () => {
    setIsSidebarActive(false);
  };

  const handleCareerClick = () => {
    setIsCareerOpen(!isCareerOpen);
    hideSidebar();
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
          <img src={profile} alt="User Profile" className="profile-image" />
          <div>
            <h3 className="profile-name">Vaghasiya Rutika</h3>
            <p className="profile-title">Senior Admin</p>
          </div>
        </div>

        <br />
        <ul>
          <li>
            <NavLink
              to="/admin/index"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={hideSidebar}
            >
              <i className="bi bi-house-door"></i> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/blog"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={hideSidebar}
            >
              <i className="bi bi-pencil-square"></i> Blog Management
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/budget"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={hideSidebar}
            >
              <i className="bi bi-cash-stack"></i> Budget Management
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/room"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={hideSidebar}
            >
              <i className="bi bi-building"></i> Room Projects
            </NavLink>
          </li>

          <li className={`career-menu ${isCareerOpen ? "open" : ""}`}>
            <NavLink
              to="/admin/career"
              className={({ isActive }) =>
                isActive || isJobApplicationActive ? "active" : ""
              }
              onClick={handleCareerClick}
            >
              <i className="bi bi-briefcase"></i> Careers
            </NavLink>

            <ul className="submenu">
              <li>
                <NavLink
                  to="/admin/jobapplication"
                  className={isJobApplicationActive ? "active" : ""}
                  onClick={hideSidebar}
                >
                  <i className="bi bi-people"></i> Job Applications
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              to="/admin/settings"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={hideSidebar}
            >
              <i className="bi bi-gear"></i> Settings
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleLogout}
            >
                  <i className="bi bi-box-arrow-right"></i> Logout
            </NavLink>
          </li>

        </ul>
      </section>
    </div>
  );
}

export default Sidebar;
