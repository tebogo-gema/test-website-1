const TaxiStation = require('../models/taxiStations');

// Get all taxi stations
exports.getAllTaxiStations = async (req, res) => {
  try {
    const taxiStations = await TaxiStation.find();
    res.json(taxiStations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific taxi station by ID
exports.getTaxiStationById = async (req, res) => {
  try {
    const taxiStation = await TaxiStation.findById(req.params.id);
    if (!taxiStation) {
      return res.status(404).json({ message: 'Taxi station not found' });
    }
    res.json(taxiStation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new taxi station
exports.createTaxiStation = async (req, res) => {
  const taxiStation = new TaxiStation({
    name: req.body.name,
    location: req.body.location,
    // Add other properties as needed
  });

  try {
    const newTaxiStation = await taxiStation.save();
    res.status(201).json(newTaxiStation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing taxi station by ID
exports.updateTaxiStationById = async (req, res) => {
  try {
    const taxiStation = await TaxiStation.findById(req.params.id);
    if (!taxiStation) {
      return res.status(404).json({ message: 'Taxi station not found' });
    }
    taxiStation.name = req.body.name || taxiStation.name;
    taxiStation.location = req.body.location || taxiStation.location;
    // Update other properties as needed
    const updatedTaxiStation = await taxiStation.save();
    res.json(updatedTaxiStation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a taxi station by ID
exports.deleteTaxiStationById = async (req, res) => {
  try {
    const taxiStation = await TaxiStation.findById(req.params.id);
    if (!taxiStation) {
      return res.status(404).json({ message: 'Taxi station not found' });
    }
    await taxiStation.remove();
    res.json({ message: 'Taxi station deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
