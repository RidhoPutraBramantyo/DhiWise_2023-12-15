import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css"; // Impor CSS untuk Sidebar

function Sidebar({ activeCategory, setActiveCategory }) {
  // Komponen Sidebar untuk navigasi
  return (
    <div className="sidebar">
      {/* NavLink untuk navigasi ke Dashboard */}
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={() => setActiveCategory("dashboard")}
      >
        Dashboard
      </NavLink>

      {/* NavLink lainnya untuk navigasi ke laporan, dll. */}
      <NavLink
        to="/report"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={() => setActiveCategory("report")}
      >
        Report
      </NavLink>
      {/* Tambahkan lebih banyak NavLink untuk navigasi lainnya */}
    </div>
  );
}

export default Sidebar;
