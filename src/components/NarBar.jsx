// src/components/NavBar.jsx
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#222',
      color: 'white'
    }}>
      <h1 style={{ margin: 0 }}>Mi Tienda</h1>

      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '20px',
        margin: 0,
        padding: 0
      }}>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Inicio</a></li>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Productos</a></li>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contacto</a></li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
