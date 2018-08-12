var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var db = require('./models'),
  Submission = db.Submission;

// Configure app
app.set('views', __dirname + 'views');      // Views directory
app.use(express.static('public'));          // Static directory
app.use(bodyParser.urlencoded({ extended: true})); // req.body

// Set CORS Headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Homepage -- Display a list of current todos and a form
app.get('/', function(req, res) {
    res.sendFile( __dirname + '/views/index.html')
});

app.get('/submission', function(req, res) {
    res.sendFile( __dirname + '/views/submission.html')
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

let submissions = [
  { address: "1 Memory Ln", zipCode: 92506, date: "06/25/19"},
  { address: "12 Amsterdam Way", zipCode: 92792, date: "06/25/19"},
  { address: "150 Adams St", zipCode: 95076, date: "06/25/19"}
]

app.get('/api/submissions', (req, res) => res.json(submissions));

let texts = [
  { phone: 7149560891, zipCode: 92506},
  { phone: 9512365891, zipCode: 92792},
  { phone: 3232366891, zipCode: 95076}
]

app.get('/api/texts', (req, res) => res.json(texts)); //numbers and zipcodes
//get -> post -> get

app.get('/api/texts/:id' , function (req,res){
  db.Texts.findOne({_id: req.prams.id}, function(err,data){
    res.json(data);
  });
});
app.post('/api/submissions', (request, response) => {
  let address = request.body.address;
  let zipCode = request.body.zipCode;
  let date = request.body.date;

  let newSubmission = {address: address, zipCode: zipCode, date: date};
  submissions.push(newSubmission);
  response.json(submissions);
  console.log(submissions);
});

app.post('/api/texts', (request, response) => {
  let phone = request.body.phone;
  let zipCode = request.body.zipCode;

  let newTexts = {phone: phone, zipCode: zipCode};
  texts.push(newTexts);
  response.json(texts);
  console.log(texts);
});

app.get('/api/submissions/zipCode', (req, res) => res.json(submissions));

app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});
