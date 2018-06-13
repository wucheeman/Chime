// // const client = require('./client.js');

require('dotenv').config();

module.exports = function(body, from, to) {

  // console.log('from' + from);
  // console.log('to' + to);
  // console.log(body);

  const accountSid = process.env.ACCOUNTSID;
  const authToken = process.env.AUTHTOKEN;
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
        body: body,
        from: from,
        to: to
      })
    .then(message => console.log(message.sid))
    .done();
}