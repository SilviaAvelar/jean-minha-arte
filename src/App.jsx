import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import GalleryPage from './pages/GalleryPage';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        margin: 0,
        padding: 0 
      }}>
        <Header />
        <main style={{ 
          flex: '1', 
          width: '100%',
          margin: 0,
          padding: 0 
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/encomendas" element={<Contact />} />
            <Route path="/sobre" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;