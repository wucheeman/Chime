
module.exports = function(app) {
  app.post('/api/:entity/:username', function(req, res) {
    // create account
  });

  app.delete('/api/:entity/:username', function(req, res) {
    // delete account
  });


  app.post('/api/:entity/:username/texts', function(req, res) {
    // necessary for entity = org to store text logs
    // optional for entity = user if orgs listening to user texts

  });

  app.put('/api/org/:username/texts', function(req, res) {
    // org wants to edit message for logs

  });

  app.delete('/api/org/:username/texts', function(req, res) {
    // org wants to delete mistake message
    // org wants to get rid of old messages
    // needs timestamp

  });


  app.post('/api/user/:username/following/:org', function(req, res) {
    // add organization to follow
  });

  app.put('/api/user/:username/following/:org', function(req, res) {
    // edit following settings such how long to see old messages
  });

  app.delete('/api/user/:username/following/:org', function(req, res) {
    // unsubscribe
    // very important
  });


  app.post('/api/:entity/:username/info', function(req, res) {
    // add new info such as image link
  });

  app.put('/api/:entity/:username/info', function(req, res) {
    // edit a bio
  });

  app.delete('/api/:entity/:username/info', function(req, res) {
    // delete profile content
  });

}