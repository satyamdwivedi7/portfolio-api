const mailSender = require("../controller/mail.controller");

module.exports.sendMail = async (to, name, messageFromVisitor) => {
  html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f7fa;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f7fa; padding: 40px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
              <!-- Header with Logo -->
              <tr>
                <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center;">
                  <img src="https://satyamdwivedi7.github.io/Images/logo.png" alt="Logo" style="max-width: 120px; height: auto; margin-bottom: 20px;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">Thanks for Reaching Out!</h1>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 40px 30px;">
                  <h2 style="color: #333333; margin: 0 0 20px 0; font-size: 22px; font-weight: 600;">Hello ${name},</h2>
                  
                  <p style="color: #555555; line-height: 1.6; font-size: 16px; margin: 0 0 20px 0;">
                    Thank you for contacting me! I've received your message and I'm excited to connect with you.
                  </p>
                  
                  <div style="background-color: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin: 20px 0; border-radius: 4px;">
                    <p style="color: #555555; line-height: 1.6; font-size: 15px; margin: 0;">
                      <strong>✓</strong> Your message has been successfully received<br>
                      <strong>✓</strong> I'll get back to you as soon as possible<br>
                      <strong>✓</strong> Typically, I respond within 24-48 hours
                    </p>
                  </div>
                  
                  <p style="color: #666666; line-height: 1.6; font-size: 14px; margin: 30px 0 0 0; font-style: italic;">
                    If you didn't send this request, please disregard this email.
                  </p>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef;">
                  <p style="color: #333333; margin: 0 0 10px 0; font-size: 16px; font-weight: 600;">Best regards,</p>
                  <p style="color: #667eea; margin: 0; font-size: 18px; font-weight: 700;">Satyam Dwivedi</p>
                  <p style="color: #999999; margin: 15px 0 0 0; font-size: 12px;">
                    © ${new Date().getFullYear()} Satyam Dwivedi. All rights reserved.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
  
  contentToMe = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f7fa;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f7fa; padding: 40px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
              <!-- Header with Logo -->
              <tr>
                <td style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 20px; text-align: center;">
                  <img src="https://satyamdwivedi7.github.io/Images/logo.png" alt="Logo" style="max-width: 120px; height: auto; margin-bottom: 20px;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">🎉 New Visitor Message!</h1>
                </td>
              </tr>
              
              <!-- Alert Banner -->
              <tr>
                <td style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px 30px;">
                  <p style="color: #856404; margin: 0; font-size: 14px; font-weight: 600;">
                    ⚡ Action Required: A visitor has contacted you through your portfolio website.
                  </p>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 40px 30px;">
                  <h2 style="color: #333333; margin: 0 0 20px 0; font-size: 22px; font-weight: 600;">Hello Satyam,</h2>
                  
                  <p style="color: #555555; line-height: 1.6; font-size: 16px; margin: 0 0 30px 0;">
                    You have received a new message from a visitor on your portfolio website. Please review the details below and respond promptly.
                  </p>
                  
                  <!-- Visitor Details Card -->
                  <div style="background-color: #f8f9fa; border-radius: 8px; padding: 25px; margin-bottom: 20px;">
                    <h3 style="color: #667eea; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
                      👤 Visitor Information
                    </h3>
                    
                    <table width="100%" cellpadding="8" cellspacing="0">
                      <tr>
                        <td style="color: #666666; font-size: 14px; font-weight: 600; width: 120px; vertical-align: top;">Name:</td>
                        <td style="color: #333333; font-size: 15px;">${name}</td>
                      </tr>
                      <tr>
                        <td style="color: #666666; font-size: 14px; font-weight: 600; width: 120px; vertical-align: top;">Email:</td>
                        <td style="color: #667eea; font-size: 15px;"><a href="mailto:${to}" style="color: #667eea; text-decoration: none;">${to}</a></td>
                      </tr>
                    </table>
                  </div>
                  
                  <!-- Message Card -->
                  <div style="background-color: #ffffff; border: 2px solid #e9ecef; border-radius: 8px; padding: 25px; margin-bottom: 20px;">
                    <h3 style="color: #f5576c; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #f5576c; padding-bottom: 10px;">
                      💬 Message
                    </h3>
                    <p style="color: #333333; line-height: 1.8; font-size: 15px; margin: 0; white-space: pre-wrap; font-family: 'Courier New', monospace; background-color: #f8f9fa; padding: 15px; border-radius: 4px;">${messageFromVisitor}</p>
                  </div>
                  
                  <!-- Action Button -->
                  <div style="text-align: center; margin: 30px 0;">
                    <a href="mailto:${to}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 15px 40px; border-radius: 50px; font-size: 16px; font-weight: 600; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);">
                      Reply to ${name}
                    </a>
                  </div>
                  
                  <p style="color: #999999; line-height: 1.6; font-size: 13px; margin: 20px 0 0 0; text-align: center; font-style: italic;">
                    This is an automated notification from your portfolio contact form.
                  </p>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color: #f8f9fa; padding: 25px; text-align: center; border-top: 1px solid #e9ecef;">
                  <p style="color: #999999; margin: 0; font-size: 12px;">
                    Sent on ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
  
  await mailSender(to, "Thanks for Reaching Out! 🚀", html, contentToMe);
};
