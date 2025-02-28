const mailSender = require("../controller/mail.controller");

module.exports.sendMail = async (to, name, messageFromVisitor) => {
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
        <br>
        <p> Regards, <br> Satyam Dwivedi </p>
      </div>
    `;
    contentToMe = `
    <center>
    <img src="https://satyamdwivedi7.github.io/Images/logo.png" alt='logo'>
        <div class="card" style="background-color: white">
          <h1>Visitor on your website</h1> </center>
          <h3>
            Hello Satyam Dwivedi,
          </h3>
          <p>
            A visitor has contacted you. Please check your inbox and reply as soon as possible.
          </p>
          <h2>Visitor's Message:</h2>
          <p>
            ${messageFromVisitor}
          </p>
          <h3>Visitor's Name:</h3>
          <p>
            ${name}
          </p>
          <h3>Visitor's Email:</h3>
          <p>
            ${to}
          </p>
          <p>
            If this email is not entended to you please ignore and delete it.
            Thank you.
          </p>
        </div>
      `;
  await mailSender(to, "Email Verification", html, contentToMe);
};
