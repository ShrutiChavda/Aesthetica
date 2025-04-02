// Navbar.jsx
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import '../../assets/css/user/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/user/index">
        <img src={logo} alt="Aesthetica Logo" className="navbar-logo" />
      </Link>
      <div className="nav-links">
        <ul>
          <li><NavLink to="/user/index" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/user/blog" activeClassName="active">Blog</NavLink></li>
          <li><NavLink to="/user/style" activeClassName="active">Styles</NavLink></li>
          <li><NavLink to="/user/budget" activeClassName="active">Budget</NavLink></li>
          <li><NavLink to="/user/room" activeClassName="active">Measure</NavLink></li>
          <li><NavLink to="/user/job" activeClassName="active">Careers</NavLink></li>
        </ul>
        <div className="auth-buttons">
          <button className="sn">Sign In</button>
          <button className="rg">Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;