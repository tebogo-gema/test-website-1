// src/components/Destination.js
import React from 'react';

const Destination = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: R{price}</p>
    </div>
  );
};

export default Destination;
