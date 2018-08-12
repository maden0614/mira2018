var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var submissionSchema = new Schema({
  address: String,
  zipCode: Number,
  date: String
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
