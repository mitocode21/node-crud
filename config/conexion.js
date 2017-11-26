let mongoose = require('mongoose');

mongoose.connect('mongodb://username:password@port.mlab.com:15446/databasename', { useMongoClient: true }); //mongodb://localhost:27017/crud

module.exports = mongoose;