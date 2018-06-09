/* 
  Set auto-response on user texts

  Create a second instance of express in server for the twiml app

  For local testing of twiml response:
    1. download local copy of ngrok in Chime
    2. ngrok http <port>   ex. ngrok http 1337
    3. copy forwarding https url
    4. in twilio console, navigate to phone numbers --> manage numbers
    5. under messaging, choose configure with webhooks and where "a message comes in", again choose webhooks
    6. in "a message comes in" paste the ngrok https url, and set to HTTP POST
    7. at end of pasted url add /sms   
    ex. https://781c40a6.ngrok.io/sms


*/

//const http = require('http');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

module.exports = function(app, message) {

app.post('/sms', (req, res) => {
  console.log(req.body);
  const twiml = new MessagingResponse();

  twiml.message(message);

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

app.listen(1337, () => {
  console.log('Express server listening on port 1337');
});
}