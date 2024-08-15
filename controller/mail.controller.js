const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "satyamdwivedi419@gmail.com",
    pass: "pylz pdya vwnq anad",
  },
});
async function mailSender(to, name, subject, content) {
  await transporter.sendMail({
    from: "Satyam Dwivedi",
    to: to,
    name: name,
    subject: subject,
    html: content,
  });
}

module.exports = mailSender;
