require("dotenv").config();
// Send SMS using twilio API in node js
let sid = process.env.ACCOUNT_SID;
let auth_token = process.env.AUTH_TOKRN;

let twilio = require("twilio")(sid, auth_token);

let OTP = 123456;

twilio.messages
  .create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: "+9179***********",
    body: `Your otp is : ${OTP}`,
  })
  .then(function (res) {
    console.log("message has sent!");
  })
  .catch(function (err) {
    console.log(err);
  });
