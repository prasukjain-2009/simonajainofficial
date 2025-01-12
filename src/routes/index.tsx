import React from "react";
import { Routes, Route } from "react-router-dom";
import { BASE_URL } from "../config/constants";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={`${BASE_URL}/`} element={<Home />} />
      <Route path={`${BASE_URL}/portfolio`} element={<Portfolio />} />
      <Route path={`${BASE_URL}/portfolio/:category`} element={<Portfolio />} />
      <Route path={`${BASE_URL}/contact`} element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
