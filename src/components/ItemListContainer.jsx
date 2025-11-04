// src/components/ItemListContainer.jsx
import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{
      textAlign: 'center',
      marginTop: '50px',
      fontSize: '1.5rem'
    }}>
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
