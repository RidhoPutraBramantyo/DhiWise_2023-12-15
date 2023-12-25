import React from "react";
import { NavLink } from "react-router-dom";
import "./MainSidebar.css"; // Impor CSS untuk Sidebar

function MainSidebar() {
  // Komponen Sidebar untuk navigasi
  return (
    <div className="sidebar">
      {/* NavLink untuk navigasi ke Dashboard */}
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        Dashboard
      </NavLink>

      {/* NavLink lainnya untuk navigasi ke laporan */}
      <NavLink
        to="/reportpage"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        Report Page
      </NavLink>
      {/* Tambahkan lebih banyak NavLink untuk navigasi lainnya */}
    </div>
  );
}

export default MainSidebar;
