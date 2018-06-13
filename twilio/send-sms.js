const client = require('./client.js');

module.exports = function(body, from, to) {
  client.messages
  .create({
     body: body,
     from: from,
     to: to
   })
  .then(message => console.log(message.sid))
  .done();
}