import React from "react";
import { Routes, Route } from "react-router-dom";
import OrderList from "../OrderList/OrderList"; // Asumsikan ini adalah komponen yang ada
import Category from "../Category/Category"; // Asumsikan ini adalah komponen yang ada
import "./MainContent.css"; // Pastikan lokasi file CSS ini benar

function MainContent() {
  // Komponen utama untuk konten aplikasi
  return (
    <div className="main-content">
      {/* Komponen OrderList, menampilkan daftar order */}
      <OrderList />

      <div className="categories">
        {/* Routes untuk kategori produk */}
        <Routes>
          <Route
            path="/bestseller"
            element={<Category categoryName="Best Seller Menu" />}
          />
          <Route path="/pizza" element={<Category categoryName="Pizza" />} />
          <Route
            path="/ricepasta"
            element={<Category categoryName="Rice and Pasta" />}
          />
          <Route
            path="/appetizer"
            element={<Category categoryName="Appetizer" />}
          />
          <Route path="/drinks" element={<Category categoryName="Drinks" />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainContent;
