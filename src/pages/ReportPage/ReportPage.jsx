import React from "react";
import TransactionSidebar from "components/TransactionSidebar/TransactionSidebar"; // Komponen untuk sidebar transaksi
import "./ReportPage.css"; // CSS khusus untuk ReportPage

function ReportPage() {
  // Anda mungkin ingin memanage state untuk pesanan yang dipilih di sini

  return (
    <div className="report-page-container">
      <TransactionSidebar />
    </div>
  );
}

export default ReportPage;
