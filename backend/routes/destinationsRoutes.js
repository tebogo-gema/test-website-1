const express = require('express');
const { body, validationResult } = require('express-validator');
const Destination = require('../models/destinations');

const router = express.Router();

// Route to create a new destination
router.post('/create', [
  body('name').notEmpty().isString(),
  body('taxiStation').notEmpty().isMongoId(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, taxiStation } = req.body;
    const destination = new Destination({ name, taxiStation });
    await destination.save();
    res.status(201).json({ message: 'Destination created successfully', destination });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Other routes for destinations...

module.exports = router;
