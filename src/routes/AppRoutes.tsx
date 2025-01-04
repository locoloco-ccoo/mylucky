import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../components/Header'
import HomePage from '../pages/HomePage';
import UploadPage from '../pages/UploadPage';
import UploadTutorialPage from '../pages/UploadTutorialPage';
import ColorMatchPage from "../pages/ColorMatchPage";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/tutorial" element={<UploadTutorialPage />} />
        <Route path="/result" element={<ColorMatchPage />} />
      </Routes>
      <div style={{ textAlign: "center", fontSize: "12px", color: "#999" }}>
        天生緣色
      </div>
    </Router>
  );
};

export default AppRoutes;