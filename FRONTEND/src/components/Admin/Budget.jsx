import React from 'react';
import "../../assets/css/admin/Budget.css";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./topbar.jsx";

function Budget() {
  return (
    <div className="main-content">
      <Sidebar />
      <div>
        <Topbar />
        <div className="budget-container">
          <div className="budget-overview">
            <div className="budget-header">
              <h2>Budget Overview</h2>
              <div className="budget-actions">
                <button className="export-btn">Export</button>
                <button className="new-budget-btn">+ New Budget</button>
              </div>
            </div>
            <div className="budget-stats">
              <div className="budget-stat">
                <h3>Total Budget</h3>
                <div className="stat-value">$245,000 <span className="stat-change">12% from last month</span></div>
              </div>
              <div className="budget-stat">
                <h3>Spent</h3>
                <div className="stat-value">$82,500 <span className="stat-change">33.7% of total budget</span></div>
              </div>
              <div className="budget-stat">
                <h3>Remaining</h3>
                <div className="stat-value">$162,500 <span className="stat-change">66.3% available</span></div>
              </div>
              <div className="budget-stat">
                <h3>Active Projects</h3>
                <div className="stat-value">8 <span className="stat-change">2 new this month</span></div>
              </div>
            </div>
          </div>

          <div className="recent-transactions">
            <h2>Recent Transactions</h2>
            <table className="transaction-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Project</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jan 15, 2025</td>
                  <td>Modern Villa Project</td>
                  <td>Furniture</td>
                  <td>$12,500</td>
                  <td><span className="completed">Completed</span></td>
                </tr>
                <tr>
                  <td>Jan 12, 2025</td>
                  <td>Urban Apartment</td>
                  <td>Lighting</td>
                  <td>$4,800</td>
                  <td><span className="pending">Pending</span></td>
                </tr>
                <tr>
                  <td>Jan 10, 2025</td>
                  <td>Beach House</td>
                  <td>Decor</td>
                  <td>$8,300</td>
                  <td><span className="completed">Completed</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="project-distribution">
            <h2>Project Budget Distribution</h2>
            <div className="project-progress">
              <div className="project-name">Modern Villa Project</div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }}></div>
              </div>
              <div className="progress-percentage">75%</div>
            </div>
            <div className="project-progress">
              <div className="project-name">Urban Apartment</div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '45%' }}></div>
              </div>
              <div className="progress-percentage">45%</div>
            </div>
            <div className="project-progress">
              <div className="project-name">Beach House</div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '60%' }}></div>
              </div>
              <div className="progress-percentage">60%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Budget;