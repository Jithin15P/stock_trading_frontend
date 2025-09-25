import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
import HomePage from './landingpage/Home/HomePage';
import Signup from './landingpage/Signup/Signup';
import Login from './landingpage/Login/Login';
import AboutPage from './landingpage/About/AboutPage';
import ProductPage from './landingpage/Products/ProductsPage';
import PricingPage from './landingpage/Pricing/PricingPage';
import SupportPage from './landingpage/Support/SupportPage';
import Navbar from './landingpage/Navbar';
import Footer from './landingpage/Footer';
import NotFound from './landingpage/NotFound';

 
import { AuthProvider } from './context/AuthContext';
 
import './index.css';
 
import 'react-toastify/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);