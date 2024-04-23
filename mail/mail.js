const mailSender = require("../controller/mail.controller");

module.exports.sendMail = async (to, name) => {
  html = `<center>
  <img src="https://satyamdwivedi7.github.io/Images/logo.png" alt='logo'>
      <div class="card" style="background-color: white">
        <h1>Email Verification</h1> </center>
        <h3>
          Hello ${name},
        </h3>
        <p>
          Thanks for contacting. I will be available to help you soon.
        </p>
        <p>
          If this email is not entended to you please ignore and delete it.
          Thank you.
        </p>
      </div>
    `;
  await mailSender(to, name, "Email Verification", html);
};
