var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/mira2018', { useNewUrlParser: true });

// const Submission = require('./submission');

module.exports.Submission = require("./Submission.js");
