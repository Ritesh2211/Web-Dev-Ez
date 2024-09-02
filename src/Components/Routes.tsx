import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/HomePage';
import Features from '../Pages/Features';
import Pricing from '../Pages/Pricing';
import Download from '../Pages/Download';
import Register from '../Pages/Register';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/features" element={<Features />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/download" element={<Download />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);

export default AppRoutes;
