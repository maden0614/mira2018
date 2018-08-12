var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var SubmissionSchema = new Schema({
  address: String,
  zipCode: Number,
  date: String
});

var Submission = mongoose.model('Submission', SubmissionSchema);

module.exports = Submission;
