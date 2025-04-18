// Settings.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './UserNav';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../../assets/css/user/settings.css";
import p1 from "../../assets/images/profile.png";

function Settings() {
   const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
  
    useEffect(() => {
      fetch("http://localhost:5000/auth/get-user", {
        credentials: "include",
      })
        .then(res => {
          if (!res.ok) throw new Error("Unauthorized");
          return res.json();
        })
        .then(data => {
          const fullName = data.user.username || '';
          const [first, ...rest] = fullName.split(" ");
          setFirstName(first || '');
          setLastName(rest.join(" ") || '');
          setEmail(data.user.email || '');
          setBio(data.user.bio || ''); 
        })
        .catch(err => {
          console.error("Error fetching user data:", err);
        });
    }, []);
    
  
    const handleSave = async () => {
      console.log('Saving changes:', { firstName, lastName, email, bio });
    
      try {
        const response = await fetch("http://localhost:5000/auth/update-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName, lastName, email, bio }),
          credentials: "include", // Include credentials for session handling
        });
    
        const data = await response.json();
        if (response.ok) {
          console.log(data.message);
          alert("Changes saved successfully!");
        } else {
          console.error("Error updating user:", data.message);
          alert("Error saving changes. Please try again.");
        }
      } catch (error) {
        console.error("Network error:", error);
        alert("Network error. Please try again later.");
      }
    };
    
  
  return (
    <div className="App">
      <Navbar />
        <div className="settings-container">
                <div className="settings-header">
                  <h2 className="settings-description">Settings</h2>
                  <p className="settings-description">Manage your account settings and preferences</p>
                </div>
      
                <div className="profile-settings">
                  <h3>Profile Settings</h3>
                  <div className="profile-picture-container">
                    <img src={p1} className="profile-picture" alt="Profile" />
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
  );
}

export default Settings;