import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Styles.css'; // Asegúrate de que esta ruta sea correcta

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/services">Servicios</Link></li>
        <li><Link to="/about">Nosotros</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        
      </ul>
      <h2 className='login'><Link to="/login">Login</Link></h2>
    </nav>
  );
};

export default Navbar