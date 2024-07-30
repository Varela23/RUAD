import React from 'react';

const Inicio = () => {
  return (
    <>
    <nav className="logo">
        <div className="bg-blue-500 p-4">
        <ul>
            <li><a href="#Home">Inicio</a></li>
            <li><a href="Service">Servicio</a></li>
            <li><a href="Contatc">Contactanos</a></li>
            <li><a href="About">Acerca de Nosotros</a></li>
        </ul>
        </div>
    
    </nav>
    <section className='hero'>
    <h1>Bienvenido a Nuestro Sitio</h1>
        <p>Explora y descubre más sobre nuestros servicios.</p>
        <a className={moda} href="#services">Conoce Más.</a>
       
    </section>
    </>
    
    
  )
}

export default Inicio;