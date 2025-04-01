import React, { useState } from 'react';
import "../../assets/css/admin/Settings.css";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./topbar.jsx";
import p1 from "../../assets/images/profile.png";

function Settings() {
  const [firstName, setFirstName] = useState('Shruti');
  const [lastName, setLastName] = useState('Chavda');
  const [email, setEmail] = useState('john@example.com');
  const [bio, setBio] = useState('');

  const handleSave = () => {
    console.log('Saving changes:', { firstName, lastName, email, bio });
  };

  return (
    <div className="main-content">
      <Sidebar />
      <div>
        <Topbar />
        <div className="settings-container">
          <div className="settings-header">
            <h2>Settings</h2>
            <p className="settings-description">Manage your account settings and preferences</p>
          </div>

          <div className="profile-settings">
            <h3>Profile Settings</h3>
            <div className="profile-picture-container">
              <img src={p1} className="profile-picture"></img> 
              <div className="profile-picture-actions">
                <button className="change-photo-btn">Change Photo</button>
                <p className="photo-info">JPG or PNG. Max size of 800K</p>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>

            <div className="save-changes-container">
              <button className="save-changes-btn" onClick={handleSave}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;