// src/App.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import RightPanel from './components/RightPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="d-flex app-container">
      <Sidebar />
      <MainContent />
      <RightPanel />
    </div>
  );
}

export default App;
