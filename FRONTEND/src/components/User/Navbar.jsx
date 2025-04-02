// Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import '../../assets/css/user/navbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/user/index">
          <img src={logo} alt="Aesthetica Logo" className="navbar-logo" />
        </Link>
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <i className={menuOpen ? 'bi bi-x' : 'bi bi-list'}></i>
      </button>

      <div className={`navbar-center ${menuOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
          <li><NavLink to="/user/index" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/user/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink></li>
          <li><NavLink to="/user/style" onClick={() => setMenuOpen(false)}>Styles</NavLink></li>
          <li><NavLink to="/user/budget" onClick={() => setMenuOpen(false)}>Budget</NavLink></li>
          <li><NavLink to="/user/room" onClick={() => setMenuOpen(false)}>Measure</NavLink></li>
          <li><NavLink to="/user/job" onClick={() => setMenuOpen(false)}>Careers</NavLink></li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="search-bar">
          <input type="text" placeholder="Search designs, styles, tips" />
          <button><i className="bi bi-search"></i></button>
        </div>
        <div className="navbar-icons">
          <button><i className="bi bi-bell"></i></button>
          <Link to="/user/profile">
            <button><i className="bi bi-person-fill"></i></button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;