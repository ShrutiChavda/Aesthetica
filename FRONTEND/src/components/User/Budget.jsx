import React, { useEffect, useState } from 'react';
import Navbar from './UserNav';
import '../../assets/css/user/budget.css';
import axios from 'axios';

function Budget() {
  const [username, setUsername] = useState('');
  const [totalBudget, setTotalBudget] = useState(25000);
  const [categories, setCategories] = useState({
    Furniture: 0,
    Decor: 0,
    Labor: 0,
    Materials: 0,
  });

  useEffect(() => {
    // Get logged in user from session
    axios.get('http://localhost:5000/api/session')
      .then(res => {
        setUsername(res.data.username);
        return axios.get(`http://localhost:5000/budgets/${res.data.username}`);
      })
      .then(res => {
        if (res.data) {
          setTotalBudget(res.data.totalBudget || 25000);
          setCategories(res.data.categories || categories);
        }
      })
      .catch(err => console.error(err));
  }, []);

  const spent = Object.values(categories).reduce((a, b) => a + b, 0);
  const remaining = totalBudget - spent;

  const updateBudgetBackend = (updatedBudget, updatedCategories) => {
    axios.put(`http://localhost:5000/budgets/${username}`, {
      totalBudget: updatedBudget,
      categories: updatedCategories
    }).catch(err => console.error(err));
  };

  const handleSliderChange = (category, value) => {
    const updated = {
      ...categories,
      [category]: Number(value),
    };
    setCategories(updated);
    updateBudgetBackend(totalBudget, updated);
  };

  const handleBudgetChange = (e) => {
    const updated = Number(e.target.value);
    setTotalBudget(updated);
    updateBudgetBackend(updated, categories);
  };

  return (
    <div className="budget-app11">
      <Navbar />
      <div className="budget-container11">
        <h2 className="budget-title11">Budget Planner</h2>
        <div className="budget-content11">
          <div className="budget-overview11">
            <h3>Project Overview</h3>
            <div className="budget-card11">
              <span>Total Budget</span>
              <input
                type="number"
                value={totalBudget}
                onChange={handleBudgetChange}
                className="budget-input11"
              />
            </div>
            <div className="budget-card11">
              <span>Spent</span>
              <span>₹{spent.toLocaleString()}</span>
            </div>
            <div className="budget-card11">
              <span>Remaining</span>
              <strong className="budget-orange11">₹{remaining.toLocaleString()}</strong>
            </div>
          </div>

          <div className="budget-categories11">
            <h3>Expense Categories</h3>
            {Object.keys(categories).map((category) => (
              <div className="category11" key={category}>
                <div className="category-header11">
                  <span>{category}</span>
                  <span>₹{categories[category]}</span>
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
    </div>
  );
}

export default Budget;
