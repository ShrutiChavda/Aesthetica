import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Blog from "./Blog";
import '../../assets/css/user/DesignStyle.css';
import style1 from '../../assets/images/uStyle1.png';
import style2 from '../../assets/images/uStyle2.png';
import style3 from '../../assets/images/uStyle3.png';
import '../../assets/css/user/room.css';
import room from "../../assets/images/room.png";
import '../../assets/css/user/budget.css';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [dimensions, setDimensions] = useState({ length: '', width: '', height: '' });
  const [categories, setCategories] = useState({
    Furniture: 8000,
    Decor: 3000,
    Labor: 6000,
    Materials: 3000,
  });

  const totalBudget = 25000;
  const spent = Object.values(categories).reduce((a, b) => a + b, 0);
  const remaining = totalBudget - spent;
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/auth/get-user", {
      credentials: "include",
    })
      .then(res => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then(data => {
        console.log("Fetched user:", data);
        setUser(data.user);
      })
      .catch(err => {
        console.error("Error fetching user:", err);
        navigate("/login");
      });
  }, [navigate]);
  

  const handleChange = (e) => {
    setDimensions({ ...dimensions, [e.target.name]: e.target.value });
  };

  const handleSliderChange = (category, value) => {
    setCategories((prev) => ({
      ...prev,
      [category]: Number(value),
    }));
  };

  const calculateSpace = () => {
    const volume = dimensions.length * dimensions.width * dimensions.height;
    alert(`Room Volume: ${volume} cubic feet`);
  };

  return (
    <div className="font-sans text-black bg-white">
      {/* {user && (
        <h2 className="welcome-user" style={{ padding: "20px", fontSize: "24px", fontWeight: "bold", color: "#444" }}>
          Welcome, {user.username}!
        </h2>
      )} */}

      <Blog />

      {/* 🎨 Find Your Style Section */}
      <div className="style-page-container">
        <div className="find-style">
          <h2>Find Your Style</h2>
          <div className="style-grid">
            <div className="style-item">
              <img src={style1} alt="Modern Style" className="style-image" />
              <h3>Modern</h3>
              <p>Clean lines, minimal decor, and contemporary aesthetics.</p>
              <a href="#" className="explore-style">Explore Style</a>
            </div>
            <div className="style-item">
              <img src={style2} alt="Classic Style" className="style-image" />
              <h3>Classic</h3>
              <p>Timeless elegance with traditional elements.</p>
              <a href="#" className="explore-style">Explore Style</a>
            </div>
            <div className="style-item">
              <img src={style3} alt="Scandinavian Style" className="style-image" />
              <h3>Scandinavian</h3>
              <p>Light, airy spaces with natural materials.</p>
              <a href="#" className="explore-style">Explore Style</a>
            </div>
          </div>
        </div>
      </div>

      {/* 💸 Budget Planner */}
      <div className="budget-container11">
        <h2 className="budget-title11">Budget Planner</h2>
        <div className="budget-content11">
          <div className="budget-overview11">
            <h3>Project Overview</h3>
            <div className="budget-card11">
              <span>Total Budget</span>
              <strong className="budget-blue11">${totalBudget.toLocaleString()}</strong>
            </div>
            <div className="budget-card11">
              <span>Spent</span>
              <span>${spent.toLocaleString()}</span>
            </div>
            <div className="budget-card11">
              <span>Remaining</span>
              <strong className="budget-orange11">${remaining.toLocaleString()}</strong>
            </div>
          </div>

          <div className="budget-categories11">
            <h3>Expense Categories</h3>
            {Object.keys(categories).map((category) => (
              <div className="category11" key={category}>
                <div className="category-header11">
                  <span>{category}</span>
                  <span>${categories[category]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={categories[category]}
                  onChange={(e) => handleSliderChange(category, e.target.value)}
                  className="slider11"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 📏 Room Dimension Calculator */}
      <div className="room-container">
        <h2 className="room-title">Room Measurement</h2>
        <div className="room-content">
          <div className="room-image">
            <img src={room} alt="Room" />
          </div>
          <div className="room-form">
            <h3 className="form-title">Room Dimensions</h3>
            <input
              type="number"
              name="length"
              placeholder="Length (ft)"
              value={dimensions.length}
              onChange={handleChange}
            />
            <input
              type="number"
              name="width"
              placeholder="Width (ft)"
              value={dimensions.width}
              onChange={handleChange}
            />
            <input
              type="number"
              name="height"
              placeholder="Height (ft)"
              value={dimensions.height}
              onChange={handleChange}
            />
            <button onClick={calculateSpace}>Calculate Space</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
