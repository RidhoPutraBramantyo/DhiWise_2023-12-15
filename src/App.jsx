import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainSidebar from "./components/MainSidebar/MainSidebar";
import Dashboard from "./pages/Dashboard";
import LoginPage from "pages/LoginPage/LoginPage";
import ReportPage from "./pages/ReportPage/ReportPage";
import "./App.css";

function App() {
  const handleLogin = (username, password) => {
    // Logika untuk menghandle login
    // Biasanya akan ada pengecekan ke server di sini
    console.log("Login attempted by", username);
    // Setelah verifikasi sukses, bisa redirect ke dashboard atau tampilkan pesan error
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-body">
          <MainSidebar />
          <Routes>
            {/* Rute untuk halaman login */}
            <Route
              path="/login"
              element={<LoginPage onLogin={handleLogin} />}
            />

            {/* Rute untuk dashboard yang mungkin hanya bisa diakses setelah login */}
            <Route path="/" element={<Dashboard />} />

            {/* Rute untuk halaman laporan */}
            <Route path="/report" element={<ReportPage />} />

            {/* Anda bisa menambahkan rute lain sesuai kebutuhan di sini */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
