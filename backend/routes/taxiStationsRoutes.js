const express = require('express');
const { body, validationResult } = require('express-validator');
const taxiStationsController = require('../controllers/taxiStationsController');

const router = express.Router();

// Route to create a new taxi station
router.post('/create', [
  body('name').notEmpty().isString(),
  body('location').notEmpty().isString(),
], taxiStationsController.createTaxiStation);

// Route to get all taxi stations
router.get('/', taxiStationsController.getAllTaxiStations);

// Route to get a specific taxi station by ID
router.get('/:id', taxiStationsController.getTaxiStationById);

// Route to update an existing taxi station by ID
router.put('/:id', taxiStationsController.updateTaxiStationById);

// Route to delete a taxi station by ID
router.delete('/:id', taxiStationsController.deleteTaxiStationById);

module.exports = router;
