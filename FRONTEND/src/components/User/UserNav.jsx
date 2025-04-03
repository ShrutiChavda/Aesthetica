import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/css/user/user-nav.css';
import logo from '../../assets/images/logo.png'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

function UserNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="nav1">
      <div className="navbar-container1">
        <div className="navbar-brand1">
            <img src={logo} alt="Aesthetica Logo" />
        </div>

        <button className="navbar-toggler1" onClick={toggleMobileMenu}>
          ☰
        </button>

        <div className={`navbar-menu1 ${isMobileMenuOpen ? 'active1' : ''}`}>
          <ul className="navbar-nav1">
            <li className="nav-item1">
              <NavLink to="/user/index" className="nav-link1">Home</NavLink>
            </li>
            <li className="nav-item1">
              <NavLink to="/user/blog" className="nav-link1">Blog</NavLink>
            </li>
            <li className="nav-item1">
              <NavLink to="/user/style" className="nav-link1">Styles</NavLink>
            </li>
            <li className="nav-item1">
              <NavLink to="/user/budget" className="nav-link1">Budget</NavLink>
            </li>
            <li className="nav-item1">
              <NavLink to="/user/room" className="nav-link1">Measure</NavLink>
            </li>
            <li className="nav-item1">
              <NavLink to="/user/job" className="nav-link1">Careers</NavLink>
            </li>
            <li className="nav-item1">
              <NavLink to="/user/settings" className="nav-link1">Settings</NavLink>
            </li>
          </ul>

          <div className="navbar-search1">
            <input type="text" placeholder="Search designs, styles, tips..." />
            <button><i className="bi bi-search"></i></button>
          </div>

          <div className="navbar-icons1">
            <NavLink to="/user/profile">
              <i className="bi bi-person-circle"></i>
            </NavLink>
            <a href="#"><i className="bi bi-bell"></i></a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default UserNav;