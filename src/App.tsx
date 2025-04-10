// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import Header from './layouts/Header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;