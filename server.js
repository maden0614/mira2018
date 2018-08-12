var express = require('express');
var app = express();
var bodyParser = require('body-parser');

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

app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});

let submissions = [
  { address: "1 Memory Ln", zipCode: 92506, date: "06/25/19"},
  { address: "12 Amsterdam Way", zipCode: 92792, date: "06/25/19"},
  { address: "150 Adams St", zipCode: 95076, date: "06/25/19"}
]

app.get('/api/submissions', (req, res) => res.json(submissions) );

app.post('/api/submissions', (request, response) => {
  let address = request.body.address;
  let zipCode = request.body.zipCode;
  let date = request.body.date;

  let newSubmission = {address: address, zipCode: zipCode, date: date};
  submissions.push(newSubmission);
  response.json(submissions);
  console.log(submissions);
});

app.get('/api/submissions/zipCode', (req, res) => res.json(submissions));
