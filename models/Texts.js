var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var TextsSchema = new Schema({
  phone: Number,
  zipCode: Number
});

var Texts = mongoose.model('Texts', TextsSchema);

module.exports = Texts;
//counter: store zipCode
//iterate through submissions 
