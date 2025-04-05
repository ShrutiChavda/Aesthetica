import React, { useState } from 'react';
import Navbar from './UserNav';
import '../../assets/css/user/budget.css';

function Budget() {
  const totalBudget = 25000;

  const [categories, setCategories] = useState({
    Furniture: 8000,
    Decor: 3000,
    Labor: 6000,
    Materials: 3000,
  });

  const spent = Object.values(categories).reduce((a, b) => a + b, 0);
  const remaining = totalBudget - spent;

  const handleSliderChange = (category, value) => {
    setCategories((prev) => ({
      ...prev,
      [category]: Number(value),
    }));
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
    </div>
  );
}

export default Budget;
