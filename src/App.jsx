import React, { useState } from 'react';
import './index.css';

// --- Dashboard Stat Card ---
const StatsCard = ({ title, value, icon, trend, color }) => (
  <div className={`stats-card ${color}`}>
    <div className="stats-icon">{icon}</div>
    <div className="stats-content">
      <p className="stats-title">{title}</p>
      <h3 className="stats-value">{value}</h3>
      <span className={`stats-trend ${trend > 0 ? 'positive' : 'negative'}`}>
        {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
      </span>
    </div>
  </div>
);

// --- Sidebar ---
const Sidebar = ({ active, onNavigate }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'orders', label: 'Orders', icon: '📦' },
    { id: 'products', label: 'Products', icon: '🛍️' },
    { id: 'customers', label: 'Customers', icon: '👥' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>⚡ AdminX</h2>
      </div>
      <nav>
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`sidebar-item ${active === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <p>v1.0.0</p>
        <p>by XechTech</p>
      </div>
    </aside>
  );
};

// --- Data Table ---
const DataTable = ({ data, columns }) => (
  <div className="table-container">
    <table>
      <thead>
        <tr>
          {columns.map(col => <th key={col.key}>{col.label}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map(col => <td key={col.key}>{row[col.key]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// --- Main App ---
const App = () => {
  const [activePage, setActivePage] = useState('dashboard');

  const stats = [
    { title: 'Total Revenue', value: 'PKR 2.4M', icon: '💰', trend: 12.5, color: 'purple' },
    { title: 'Total Orders', value: '1,248', icon: '📦', trend: 8.2, color: 'blue' },
    { title: 'Active Users', value: '342', icon: '👥', trend: 3.1, color: 'green' },
    { title: 'Conversion', value: '4.6%', icon: '📈', trend: -1.3, color: 'orange' },
  ];

  const recentOrders = [
    { id: 'ORD-001', customer: "Ali's Restaurant", amount: 'PKR 45,000', status: '✅ Completed', date: '2026-03-10' },
    { id: 'ORD-002', customer: 'FreshMart Store', amount: 'PKR 28,500', status: '⏳ Pending', date: '2026-03-10' },
    { id: 'ORD-003', customer: 'Cafe Zurich', amount: 'PKR 12,000', status: '✅ Completed', date: '2026-03-09' },
    { id: 'ORD-004', customer: 'SuperMart', amount: 'PKR 67,800', status: '🚚 Shipped', date: '2026-03-09' },
    { id: 'ORD-005', customer: 'Green Valley', amount: 'PKR 15,400', status: '✅ Completed', date: '2026-03-08' },
  ];

  const orderColumns = [
    { key: 'id', label: 'Order ID' },
    { key: 'customer', label: 'Customer' },
    { key: 'amount', label: 'Amount' },
    { key: 'status', label: 'Status' },
    { key: 'date', label: 'Date' },
  ];

  return (
    <div className="app">
      <Sidebar active={activePage} onNavigate={setActivePage} />
      <main className="main-content">
        <header className="top-bar">
          <h1>Dashboard</h1>
          <div className="top-bar-actions">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="notification-btn">🔔</button>
            <div className="user-avatar">AM</div>
          </div>
        </header>

        <div className="dashboard-grid">
          {/* Stats Cards */}
          <div className="stats-row">
            {stats.map(stat => <StatsCard key={stat.title} {...stat} />)}
          </div>

          {/* Charts placeholder */}
          <div className="charts-row">
            <div className="chart-card">
              <h3>Revenue Overview</h3>
              <div className="chart-placeholder">
                <div className="bar" style={{ height: '60%' }} />
                <div className="bar" style={{ height: '80%' }} />
                <div className="bar" style={{ height: '45%' }} />
                <div className="bar" style={{ height: '90%' }} />
                <div className="bar" style={{ height: '70%' }} />
                <div className="bar" style={{ height: '85%' }} />
                <div className="bar" style={{ height: '95%' }} />
              </div>
            </div>
            <div className="chart-card">
              <h3>Traffic Sources</h3>
              <div className="traffic-list">
                <div className="traffic-item"><span>Direct</span><span>42%</span></div>
                <div className="traffic-item"><span>Search</span><span>28%</span></div>
                <div className="traffic-item"><span>Social</span><span>18%</span></div>
                <div className="traffic-item"><span>Referral</span><span>12%</span></div>
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="section-card">
            <h3>Recent Orders</h3>
            <DataTable data={recentOrders} columns={orderColumns} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
