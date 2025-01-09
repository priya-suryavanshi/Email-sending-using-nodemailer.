const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., 'gmail', 'yahoo', or use SMTP config
  auth: {
    user: 'priyankasuryavanshi841@gmail.com', // Replace with your email
    pass: 'svnx rgap ukzi gqaq', // Replace with your email password
  },
});

// Email options
const mailOptions = {
  from: 'priyankasuryavanshi841@gmail.com', // Sender address
  to: 'priyankanumetry123@gmail.com', // List of recipients
  subject: 'Test Email', // Subject line
  text: 'Hello, this is a test email sent using Nodemailer!', // Plain text body
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent:', info.response);
});