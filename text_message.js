//sending text message
//npm install twilio
//Create and open a new file called send_sms.js and type or paste in this code sample.
const accountSid = "AC81a1b8fb921887a6f396a811f8cb4ede";
const authToken = "a0b12c188bd601c67df46361ad36adb0";
const client = require('twilio')(accountSid, authToken);
client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: "+19193357670",
     to: "+19105651912" 
     //replace to number for number to send to
   })
  .then(message => console.log(message.sid))
  .done();
  //save changes and run node send_sms.js
