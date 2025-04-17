import React, { useState, useEffect } from 'react';
import "../../assets/css/admin/Budget.css";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./topbar.jsx";
import axios from 'axios';
import "bootstrap-icons/font/bootstrap-icons.css";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import 'jspdf-autotable'; // ✅ No need to manually attach


function Budget() {
  const [budgets, setBudgets] = useState([]);
  const [modal1Visible, setmodal1Visible] = useState(false);
  const [loading, setLoading] = useState(true);

  const [newBudget, setNewBudget] = useState({
    project_name: '',
    category: 'Luxury Villa',
    amount: '',
    spent: '',
    total_budget: '',
    remaining: ''
  });

  useEffect(() => {
    fetchBudgets();
  }, []);

  const fetchBudgets = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/budgets');
      setBudgets(response.data);
    } catch (error) {
      console.error('Error fetching budgets', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBudget((prevBudget) => {
      const updated = {
        ...prevBudget,
        [name]: value
      };

      if (name === 'spent' || name === 'total_budget') {
        const spent = name === 'spent' ? parseFloat(value) : parseFloat(prevBudget.spent);
        const total = name === 'total_budget' ? parseFloat(value) : parseFloat(prevBudget.total_budget);
        updated.remaining = isNaN(total - spent) ? '' : total - spent;
      }

      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/budgets', newBudget);
      fetchBudgets();
      setmodal1Visible(false);
    } catch (error) {
      console.error('Error submitting new budget', error);
    }
  };

  const handleExport = () => {
    const doc = new jsPDF();
doc.text('Budget Overview', 20, 20);
doc.autoTable({
  startY: 30,
  head: [['Project Name', 'Category', 'Total Budget', 'Spent', 'Remaining']],
  body: budgets.map(budget => [
    budget.project_name,
    budget.category,
    `₹${budget.total_budget}`,
    `₹${budget.spent}`,
    `₹${budget.remaining}`
  ])
});
doc.save('budget_overview.pdf');
  }

  const handleDelete = async (budgetId) => {
    if (window.confirm("Are you sure you want to delete this budget?")) {
      try {
        await axios.delete(`http://localhost:5000/budgets/${budgetId}`);
        fetchBudgets();
      } catch (error) {
        console.error('Error deleting budget', error);
      }
    }
  };

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
                <button className="export-btn" onClick={handleExport}>Export</button>
                <button className="new-budget-btn" onClick={() => setmodal1Visible(true)}>+ New Budget</button>
              </div>
            </div>
            <div className="budget-stats">
              <div className="budget-stat">
                <h3>Total Budget</h3>
                <div className="stat-value">
                  ₹{budgets.reduce((acc, b) => acc + parseFloat(b.total_budget), 0)} <span className="stat-change">12% from last month</span>
                </div>
              </div>
              <div className="budget-stat">
                <h3>Spent</h3>
                <div className="stat-value">
                  ₹{budgets.reduce((acc, b) => acc + parseFloat(b.spent), 0)} <span className="stat-change">33.7% of total budget</span>
                </div>
              </div>
              <div className="budget-stat">
                <h3>Remaining</h3>
                <div className="stat-value">
                  ₹{budgets.reduce((acc, b) => acc + parseFloat(b.remaining), 0)} <span className="stat-change">66.3% available</span>
                </div>
              </div>
              <div className="budget-stat">
                <h3>Active Projects</h3>
                <div className="stat-value">{budgets.length} <span className="stat-change">2 new this month</span></div>
              </div>
            </div>
          </div>

          <div className="recent-transactions">
            <h2>Recent Transactions</h2>
            {loading ? (
              <p>Loading budgets...</p>
            ) : (
              <table className="transaction-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Project</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[...budgets]
                    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                    .map((budget) => (
                      <tr key={budget._id}>
                        <td>{new Date(budget.created_at).toLocaleDateString()}</td>
                        <td>{budget.project_name}</td>
                        <td>{budget.category}</td>
                        <td>₹{budget.amount}</td>
                        <td>
                          <span className={`status ${budget.spent === budget.total_budget ? 'completed' : 'pending'}`}>
                            {budget.spent === budget.total_budget ? "Completed" : "Pending"}
                          </span>
                        </td>
                        <td>
                          <button className="delete-btn" onClick={() => handleDelete(budget._id)}>
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="project-distribution">
            <h2>Project Budget Distribution</h2>
            {budgets.map((budget) => (
              <div className="project-progress" key={budget._id}>
                <div className="project-name">{budget.project_name}</div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${(budget.spent / budget.total_budget) * 100}%` }}></div>
                </div>
                <div className="progress-percentage">
                  {((budget.spent / budget.total_budget) * 100).toFixed(2)}%
                </div>
              </div>
            ))}
          </div>

          {modal1Visible && (
            <>
              <div className="modal1-background" onClick={() => setmodal1Visible(false)}></div>
              <div className="modal1">
                <div className="modal1-content">
                  <h3>Create New Budget</h3>
                  <form onSubmit={handleSubmit}>
                    <input type="text" name="project_name" placeholder="Project Name" value={newBudget.project_name} onChange={handleChange} required />
                    <select name="category" value={newBudget.category} onChange={handleChange}>
                      <option value="Luxury Villa">Luxury Villa</option>
                      <option value="Modern Apartment">Modern Apartment</option>
                      <option value="Urban Loft">Urban Loft</option>
                      <option value="Studio">Studio</option>
                      <option value="Penthouse">Penthouse</option>
                      <option value="Beach House">Beach House</option>
                    </select>
                    <input type="number" name="amount" placeholder="Amount" value={newBudget.amount} onChange={handleChange} required />
                    <input type="number" name="spent" placeholder="Spent" value={newBudget.spent} onChange={handleChange} required />
                    <input type="number" name="total_budget" placeholder="Total Budget" value={newBudget.total_budget} onChange={handleChange} required />
                    <input type="number" name="remaining" placeholder="Remaining" value={newBudget.remaining} onChange={handleChange} readOnly />
                    <button type="submit">Create Budget</button>
                    <button type="button" onClick={() => setmodal1Visible(false)}>Close</button>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Budget;
