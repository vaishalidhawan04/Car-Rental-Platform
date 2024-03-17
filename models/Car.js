const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: String,
    available: Boolean,
    location: String,
    date: Date,
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
