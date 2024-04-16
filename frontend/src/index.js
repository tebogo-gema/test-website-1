import React, { useState, useEffect } from 'react';

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [taxiStations, setTaxiStations] = useState([]);
  const [filteredTaxiStations, setFilteredTaxiStations] = useState([]);

  useEffect(() => {
    // Fetch taxi station data from backend API
    fetch('/api/taxi-stations')
      .then(response => response.json())
      .then(data => {
        setTaxiStations(data); // Update state with fetched data
        setFilteredTaxiStations(data); // Initialize filteredTaxiStations with all taxi stations
      })
      .catch(error => {
        console.error('Error fetching taxi stations:', error);
      });
  }, []); // Run once when component mounts

  // Filter taxi stations by destination
  useEffect(() => {
    const filteredStations = taxiStations.filter(station =>
      station.destinations.some(dest => dest.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredTaxiStations(filteredStations);
  }, [searchTerm, taxiStations]);

  return (
    <div>
      <h1>Q'Marshall - Taxi Stations</h1>
      <div>
        <h2>Taxi Ranks</h2>
        <input
          type="text"
          placeholder="Search destination..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <ul>
          {filteredTaxiStations.map(station => (
            <li key={station._id}>
              <h3>{station.name}</h3>
              <p>Location: {station.location}</p>
              <p>Destinations: {station.destinations.join(', ')}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
