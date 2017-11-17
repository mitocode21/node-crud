let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/crud', { useMongoClient: true });

module.exports = mongoose;