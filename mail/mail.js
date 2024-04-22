const mailSender = require("../controller/mail.controller");

module.exports.sendMail = async (to) => {
  html = `<center>
  <img src="https://satyamdwivedi7.github.io/Images/logo.png" alt='logo'>
      <div class="card" style="background-color: white">
        <h1>Email Verification</h1>
        <p>
          Hello there, thanks for contacting.
        </p>
        <p>
          I will be available to help you soon.
        </p>
        <p>
          If this email is not entended to you please ignore and delete it.
          Thank you.
        </p>
      </div>
    </center>`;
  await mailSender(to, "Email Verification", html);
};
