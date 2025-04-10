// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blogs from './pages/MyBlogs/Blogs';
import HomePage from './pages/Home/HomePage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import Header from './layouts/Header/Header';
import SparkleTrail from './components/SparkleTrail'; // ✅ Import added
import ButterflyCanvas from './components/ButterflyCanvas';

function App() {
  return (
    <Router>
      <ButterflyCanvas /> 
      <SparkleTrail /> {/* ✅ Add this line here */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
