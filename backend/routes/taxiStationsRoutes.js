const express = require('express');
const { body, validationResult } = require('express-validator');
const TaxiStation = require('../models/taxiStations');

const router = express.Router();

// Route to create a new taxi station
router.post('/create', [
  body('name').notEmpty().isString(),
  body('location').notEmpty().isString(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, location } = req.body;
    const taxiStation = new TaxiStation({ name, location });
    await taxiStation.save();
    res.status(201).json({ message: 'Taxi station created successfully', taxiStation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Other routes for taxi stations...

module.exports = router;
