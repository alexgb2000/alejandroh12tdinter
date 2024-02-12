import React from 'react';

function Navbar({ handleNavigation }) {
  return (
    <nav>
      <ul>
        <li><button onClick={() => handleNavigation('inicio')}>Inicio</button></li>
        <li><button onClick={() => handleNavigation('nosotros')}>Nosotros</button></li>
        <li><button onClick={() => handleNavigation('servicios')}>Servicios</button></li>
        <li><button onClick={() => handleNavigation('contacto')}>Contacto</button></li>
        <li><button onClick={() => handleNavigation('galeria')}>Galería</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;