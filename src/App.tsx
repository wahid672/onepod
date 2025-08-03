import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Templates from './pages/Templates';
import Login from './pages/Login';
import Register from './pages/Register';
import Services from './pages/dashboard/Services';
import CreateService from './pages/dashboard/CreateService';
import Support from './pages/dashboard/Support';
import Settings from './pages/dashboard/Settings';
import Billing from './pages/dashboard/Billing';
import Database from './pages/dashboard/Database';
import ComingSoon from './pages/dashboard/ComingSoon';

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      {!isDashboard && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/services" element={<Services />} />
        <Route path="/dashboard/services/create" element={<CreateService />} />
        <Route path="/dashboard/settings" element={<Settings />} />
        <Route path="/dashboard/billing" element={<Billing />} />
        <Route path="/dashboard/database" element={<Database />} />
        <Route path="/dashboard/support" element={<Support />} />
        <Route path="/dashboard/ai" element={<ComingSoon />} />
        <Route path="/dashboard/affiliate" element={<ComingSoon />} />
      </Routes>
      {!isDashboard && <Footer />}
    </div>
  );
}

export default App;