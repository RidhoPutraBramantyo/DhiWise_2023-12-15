import React, { useState, useEffect } from "react";
import "./TransactionSidebar.css";

function TransactionSidebar() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("/json/recentTransactions.json") // Pastikan path ini sesuai dengan lokasi file Anda
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!transactions || transactions.length === 0) {
    return (
      <div className="transaction-sidebar">
        Tidak ada transaksi untuk ditampilkan.
      </div>
    );
  }

  return (
    <div className="transaction-sidebar">
      <div className="transaction-list">
        {transactions.map((transaction, index) => (
          <div key={index} className="transaction-item">
            <div className="transaction-time">{transaction.time}</div>
            <div
              className={`transaction-status ${transaction.status
                .toLowerCase()
                .replace(" ", "-")}`}
            >
              {transaction.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransactionSidebar;
