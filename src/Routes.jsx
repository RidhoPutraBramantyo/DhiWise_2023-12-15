import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/tidak-dipakai/Home";
import NotFound from "pages/tidak-dipakai/NotFound";
const ReportPage = React.lazy(() => import("pages/ReportPage"));
const SuccessPaymentPage = React.lazy(() =>
  import("pages/tidak-dipakai/SuccessPaymentPage")
);
const MainPage = React.lazy(() => import("pages/tidak-dipakai/MainPage"));
const LoginPage = React.lazy(() => import("pages/tidak-dipakai/LoginPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/successpaymentpage" element={<SuccessPaymentPage />} />
          <Route path="/reportpage" element={<ReportPage />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
