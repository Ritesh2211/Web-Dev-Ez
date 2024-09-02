import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import RegisterModal from './Components/RegisterModal';
import HomePage from '../src/Pages/HomePage';
import Features from '../src/Pages/Features';
import Download from '../src/Pages/Download';
import Pricing from '../src/Pages/Pricing';
import Register from '../src/Components/Footer';
import Footer from './Components/Footer'; // Add your Footer component import
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const handleClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    // Show the modal every 7 minutes
    const interval = setInterval(() => {
      setModalOpen(true);
    }, 7 * 60 * 1000); // 7 minutes in milliseconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/download" element={<Download />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <RegisterModal open={modalOpen} onClose={handleClose} />
      <Footer />
    </Router>
  );
};

export default App;
