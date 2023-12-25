import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Category from "../components/Categories/Categories"; // Komponen untuk menampilkan item per kategori
import "./Dashboard.css"; // Pastikan Anda memiliki styling untuk Dashboard
import { NavLink } from "react-router-dom";
import Categories from "../components/Categories/Categories";

export default function Dashboard() {
  const [activeOrder, setActiveOrder] = useState(null);

  // Handler ketika order diklik
  const handleOrderClick = (order) => {
    setActiveOrder(order);
  };

  return (
    <div className="dashboard">
      <div className="category-section">
        <Categories />
      </div>
      {/* Anda bisa menambahkan OrderDetail di sini atau di dalam komponen OrderList */}
    </div>
  );
}
