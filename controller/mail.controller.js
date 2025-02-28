const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_PORT == 465, // SSL for 465, TLS for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function mailSender(to, subject, content, messageFromVisitor) {
  try {
    await transporter.sendMail({
      from: '"Satyam Dwivedi" <contact@satyamdwivedi.com.np>',
      to: to,
      subject: subject,
      html: content,
    });

    await transporter.sendMail({
      from: '"Satyam Dwivedi" <contact@satyamdwivedi.com.np>',
      to: "satyamdwivedi419@gmail.com",
      subject: "Visitor on your website",
      html: messageFromVisitor,
    });

    console.log("Emails sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = mailSender;
