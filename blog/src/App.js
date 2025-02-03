// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Github from './pages/Github';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* AnimatePresence를 사용하여 페이지 전환 시 애니메이션 효과 적용 */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/github" element={<Github />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;