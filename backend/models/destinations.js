const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  taxiStation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TaxiStation',
    required: true
  }
});

module.exports = mongoose.model('Destination', destinationSchema);
