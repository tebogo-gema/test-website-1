const mongoose = require('mongoose');
const TaxiStation = require('./models/taxiStations');
const Destination = require('./models/destinations');

mongoose.connect('mongodb://localhost:27017/q_marshall', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    // Update prices for Alberton Taxi Rank destinations
    await Destination.updateMany({ name: 'Johannesburg' }, { price: 20 });
    await Destination.updateMany({ name: 'Bara Taxi Rank' }, { price: 34 });
    await Destination.updateMany({ name: 'Katlehong Taxi Rank' }, { price: 32 });
    await Destination.updateMany({ name: 'Eden Park' }, { price: 25 });

    // Update prices for Bara Taxi Rank destinations
    await Destination.updateMany({ name: 'Johannesburg' }, { price: 45 });
    await Destination.updateMany({ name: 'South Gate' }, { price: 32 });
    await Destination.updateMany({ name: 'Eldorado Park' }, { price: 21 });
    await Destination.updateMany({ name: 'Randfontein' }, { price: 28 });

    // Update prices for Bree Taxi Rank destinations
    await Destination.updateMany({ name: 'Kliptown' }, { price: 26 });
    await Destination.updateMany({ name: 'Naturena' }, { price: 32 });
    await Destination.updateMany({ name: 'Gold Reef City' }, { price: 28 });
    await Destination.updateMany({ name: 'Booysens' }, { price: 20 });

    // Update prices for Carlton Centre Taxi Rank destinations
    await Destination.updateMany({ name: 'Dube' }, { price: 27 });
    await Destination.updateMany({ name: 'Mofolo' }, { price: 19 });
    await Destination.updateMany({ name: 'Chiawelo' }, { price: 32 });
    await Destination.updateMany({ name: 'Rockville' }, { price: 26 });

    // Update prices for Chris Hani Crossing Taxi Rank destinations
    await Destination.updateMany({ name: 'Rockville' }, { price: 31 });
    await Destination.updateMany({ name: 'Katlehong' }, { price: 18 });
    await Destination.updateMany({ name: 'Spruitview' }, { price: 32 });
    await Destination.updateMany({ name: 'Johannesburg' }, { price: 30 });

    // Update prices for Eastgate Mall Taxi Rank destinations
    await Destination.updateMany({ name: 'Germiston' }, { price: 26 });
    await Destination.updateMany({ name: 'Johannesburg' }, { price: 31 });
    await Destination.updateMany({ name: 'Daveyton' }, { price: 27 });
    await Destination.updateMany({ name: 'Bree Taxi Rank' }, { price: 18 });

    // Update prices for Kagiso Taxi Rank destinations
    await Destination.updateMany({ name: 'Roodeport' }, { price: 24 });
    await Destination.updateMany({ name: 'Randfontein' }, { price: 29 });
    await Destination.updateMany({ name: 'Krugersdorp' }, { price: 26 });
    await Destination.updateMany({ name: 'Kagiso Ext 12' }, { price: 28 });

    // Update prices for Krugersdorp Taxi Rank destinations
    await Destination.updateMany({ name: 'Leratong Hospital' }, { price: 20 });
    await Destination.updateMany({ name: 'Kagiso Ext 12' }, { price: 24 });
    await Destination.updateMany({ name: 'Swaneville' }, { price: 21 });
    await Destination.updateMany({ name: 'Roodeport' }, { price: 27 });

    // Update prices for Noord Taxi Rank destinations
    await Destination.updateMany({ name: 'Vosloorus' }, { price: 32 });
    await Destination.updateMany({ name: 'Fourways' }, { price: 36 });
    await Destination.updateMany({ name: 'Sandton' }, { price: 29 });
    await Destination.updateMany({ name: 'Pretoria' }, { price: 39 });

    // Update prices for Randburg Taxi Rank destinations
    await Destination.updateMany({ name: 'Sandton' }, { price: 31 });
    await Destination.updateMany({ name: 'Rosebank' }, { price: 28 });
    await Destination.updateMany({ name: 'Johanneburg' }, { price: 36 });
    await Destination.updateMany({ name: 'Honeydew' }, { price: 43 });

    console.log('Prices updated successfully');
    mongoose.connection.close();
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));