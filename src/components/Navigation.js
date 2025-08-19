import React, { useState } from "react";
import "./Navigation.css";

function Navigation({ setActiveSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">Internal Product Management Tool for eCommerce</div>
      
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li onClick={() => setActiveSection("dashboard")}>Dashboard</li>
        <li onClick={() => setActiveSection("categories")}>Categories</li>
        <li onClick={() => setActiveSection("products")}>Products</li>
      </ul>
    </nav>
  );
}

export default Navigation;
