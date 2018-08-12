var db = require ('./models');

var Submission = [
    {
      address: "1 Memory Ln",
      zipCode: 92506,
      date: "06/25/19"
    },
    {
      address: "12 Amsterdam Way",
      zipCode: 92792,
      date: "06/25/19"
    },
    {
      address: "150 Adams St",
      zipCode: 95076,
      date: "06/25/19"
    }
];

// db.Submission.remove({}, function (err, ){
//   console.log('removed all submission');
//
// });

db.Submission.create(submissions, (err, newSubmission)) => {
  if(err) {
    return console.log(err)
  }
  console.log("saved new submission:", newSubmission);
});
