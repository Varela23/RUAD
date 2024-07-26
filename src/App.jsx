import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import './components/Login.css';
import Navbar from './components/Navbar';
import Services from './components/Services';
import './components/Styles.css'; // Asegúrate de que esta ruta sea correcta

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;