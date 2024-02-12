import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Inicio from './Inicio';
import Nosotros from './Nosotros';
import Servicios from './Servicios';
import Contacto from './Contactos';
import Galeria from './Galeria';

function App() {
  const [page, setPage] = useState('inicio');

  const handleNavigation = (pageName) => {
    setPage(pageName);
  };

  let content;
  switch (page) {
    case 'nosotros':
      content = <Nosotros />;
      break;
    case 'servicios':
      content = <Servicios />;
      break;
    case 'contacto':
      content = <Contacto />;
      break;
      case 'galeria':
      content = <Galeria />;
      break;
    default:
      content = <Inicio />;
      break;
  }

  return (
    <div className="App">
      <Navbar handleNavigation={handleNavigation} />
      {content}
    </div>
  );
}

export default App;