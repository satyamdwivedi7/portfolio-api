const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "satyamdwivedi419@gmail.com",
    pass: "kror qwod pyum oxgo",
  },
});
async function mailSender(to, subject, content) {
  await transporter.sendMail({
    from: "Satyam Dwivedi",
    to: to,
    subject: subject,
    html: content,
  });
}

module.exports = mailSender;
