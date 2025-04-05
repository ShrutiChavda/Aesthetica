import { useState } from "react";
import { login } from "../../services/authService";  // Import login API function
import Navbar from "../Navbar";
import "../../assets/css/LandingPage.css";
import "../../assets/css/login.css";
import Newsletter from "./newsletter";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const [userData, setUserData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(userData);
      const redirectTo = response.data.redirectTo;
      navigate(redirectTo);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="font-sans text-black bg-white">
      <Navbar />
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">Enter your credentials to access your account</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" value={userData.email} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password" value={userData.password} onChange={handleChange} required />
          </div>
          <div className="button-group">
            <button type="button" className="forgot-password">Forgot Password?</button>
            <button type="submit" className="login-button">Login</button>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
      <Newsletter />
    </div>
  );
};

export default Login;