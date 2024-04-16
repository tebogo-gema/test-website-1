const mongoose = require('mongoose');

const taxiStationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  coordinates: {
    type: [Number], // [longitude, latitude]
    required: true
  },
  destinations: [{
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }]
});

module.exports = mongoose.model('TaxiStation', taxiStationSchema);
