// netlify/functions/submitForm.js

require("dotenv").config();
const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  const { senderName, senderEmail, subject, message } = JSON.parse(event.body);

  // Set up Nodemailer transporter using your Gmail account
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: "nihalsarandasd@gmail.com", // Replace with your Gmail address
    subject: subject,
    text: `Name: ${senderName}\nEmail: ${senderEmail}\nMessage: ${message}`,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error sending email" }),
    };
  }
};
