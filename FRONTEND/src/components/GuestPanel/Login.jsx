import { useState } from "react";
import { login } from "../../services/authService";
import { login1 } from "../../services/authServiceAdmin";
import Navbar from "../Navbar";
import "../../assets/css/LandingPage.css";
import "../../assets/css/login.css";
import Newsletter from "./newsletter";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("user");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginFunc = role === "admin" ? login1 : login;
      const res = await loginFunc(formData);
      const redirectTo = res.data.redirectTo;
      navigate(redirectTo);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed!");
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="font-sans text-black bg-white">
      <Navbar />
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">Enter your credentials to access your account</p>

          <label>Select Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} className="form-control">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="button-group">
            <button type="button" onClick={handleForgotPassword} className="forgot-password">
              Forgot Password?
            </button>
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
