import React from 'react';
import { Link } from 'react-router';
import './Styles.css';

const Navbar = () => {
  return (
    <>
     
     <div>
     <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
        </ul>
        
     </nav>
     </div>
     
    </>
   
  )
}

export default Navbar;