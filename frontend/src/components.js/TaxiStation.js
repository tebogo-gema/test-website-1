// src/components/TaxiStation.js
import React from 'react';

const TaxiStation = ({ name, address, coordinates, destinations }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Address: {address}</p>
      <p>Coordinates: {coordinates}</p>
      <ul>
        {destinations.map((destination, index) => (
          <li key={index}>{destination}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaxiStation;
