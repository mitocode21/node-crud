let mongoose = require('mongoose');

mongoose.connect('mongodb://mito:123@ds115446.mlab.com:15446/mitonodejscrud', { useMongoClient: true }); //mongodb://localhost:27017/crud

module.exports = mongoose;