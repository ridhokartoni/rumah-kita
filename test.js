var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'triprasetyat@gmail.com',
    pass: 'qhfksumlovvbpkjg'
  }
});

var mailOptions = {
  from: 'no-reply@ourhome.co.id',
  to: 'teguh.triprasetya@sinarmasmining.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});