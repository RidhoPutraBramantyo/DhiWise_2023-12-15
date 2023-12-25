import React from "react";
import "./Header.css"; // Impor CSS khusus untuk Header

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/img_pizzapizzazz.svg" alt="Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-info">
        <div className="user-avatar">
          <img src="/path/to/avatar.png" alt="avatar" />{" "}
          {/* Tambahkan path avatar */}
        </div>
        <div className="user-name-role">
          <div className="user-name">Olivia Jane</div>
          <div className="user-role">Cashier</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
