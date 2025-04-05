import { useState } from "react";
import { register } from "../../services/authService";  // Import register API function
import Navbar from "../Navbar";
import "../../assets/css/admin/register.css";
import Newsletter from "./newsletter";

function Register() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user", // Default role
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await register(userData);
      setSuccess(response.data.message);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div className="font-sans text-black bg-white">
      <Navbar />
      <div className="register-container">
        <h1 className="register-title">Register</h1>
        <p className="register-subtitle">Create a new account to explore the world of interior design</p>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="username" placeholder="Enter your full name" value={userData.username} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" value={userData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter a password" value={userData.password} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" placeholder="Re-enter your password" value={userData.confirmPassword} onChange={handleChange} required />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}

          <button type="submit" className="register-button">Register</button>
        </form>

        <div className="login-link">
          <p>Already have an account? <a href="/login">Sign in</a></p>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}

export default Register;
