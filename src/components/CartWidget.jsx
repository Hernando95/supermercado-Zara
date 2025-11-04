// src/components/CartWidget.jsx
import React from 'react';

const CartWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
      🛒
      <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>3</span>
    </div>
  );
};

export default CartWidget;
