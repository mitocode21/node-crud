let mongoose = require('mongoose');

mongoose.connect('mongodb:mito:123@ds115866.mlab.com:15866/mitocrud', { useMongoClient: true }); //mongodb://localhost:27017/crud

module.exports = mongoose;