import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';
import Settings from './components/Setting';
import './App.css';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </Router>
  );
}
