var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/mira2018', { useNewUrlParser: true });

const Submission = require('./submission');
module.exports.Submission = require('./submission');
