// Settings.jsx
import React from 'react';
import Navbar from './UserNav';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../../assets/css/user/settings.css";
import person from "../../assets/images/profile.png";

function Settings() {
  return (
    <div className="App">
      <Navbar />
      <div className="settings-container">
        <div className="profile-settings">
          <h3>Profile Settings</h3>
          <div className="profile-picture-container">
            <div className="profile-picture">
              <img src={person} alt="Profile" />
            </div>
            <div className="profile-actions">
              <button className="change-photo-btn">Change Photo</button>
              <p className="file-size">JPG or PNG. Max size of 800K</p>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" defaultValue="Shruti" />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" defaultValue="Chavda" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" defaultValue="schavda684@rku.ac.in" />
          </div>

          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea id="bio"></textarea>
          </div>

          <button className="save-changes-btn">Save Changes</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;