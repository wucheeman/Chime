var sendSMS = require('../twilio/send-sms.js');
// needed to connect to database
var db = require("../models");

module.exports = function(app) {
  app.post('/api/:entity/:username', function(req, res) {
    // create account
  });

  app.delete('/api/:entity/:username', function(req, res) {
    // delete account
  });


  app.post('/api/org/:username/texts', function(req, res) {
    // necessary for entity = org to store text logs
    // if text validated,
    //  call sendSMS here


  });

  app.put('/api/org/:username/texts/:id', function(req, res) {
    // org wants to edit message for logs

  });

  app.delete('/api/org/:username/texts/:id', function(req, res) {
    // org wants to delete mistake message
    // org wants to get rid of old messages
    // needs timestamp

  });


  app.post('/api/user/:username/following', function(req, res) {
    // add organization to follow
    // get org id
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

  // Start MAH additions
  // can remove or merge those not needed or redundant

  // get route for all organizations
  app.get("/api/organizations", function(req, res) {
    // "include" sets the value to an array of the models to include in a left outer join
    // In this case, just db.TextMsg
    db.Organization.findAll({
      include: [db.TextMsg]
    }).then(function(dbOrganization) {
      res.json(dbOrganization);
    });
  });

  // get route for 
  app.get("/api/organizations/:id", function(req, res) {
    db.Organization.findOne({
      where: {
        id: req.params.id
      },
      include: [db.TextMsg]
    }).then(function(dbOrganization) {
      res.json(dbOrganization);
    });
  });

  // post route for adding an organization
  app.post("/api/organizations", function(req, res) {
    // console.log(req.body);
    db.Organization.create(req.body).then(function(dbOrganization) {
      res.json(dbOrganization);
    });
  });

  // delete route for deleting an organization
  app.delete("/api/organizations/:id", function(req, res) {
    console.log('deleting organization:' + req.params.id);
    db.Organization.destroy({
      where: {
        id: req.params.id
      },
    }).then(function(dbOrganization) {
      res.json(dbOrganization);
    });
  });

  // GET route for getting all followers
  app.get("/api/followers", function(req, res) {
    // TODO - update to follow Organization
    // var query = {};
    // if (req.query.follower_id) {
    //   query.AuthorId = req.query.author_id;
    // }
    db.Follower.findAll({
      // where: query,
      // include: [db.Author]
    }).then(function(dbFollower) {
      res.json(dbFollower);
    });
  });

  // Get route for retrieving a single follower
  app.get("/api/followers/:id", function(req, res) {
    db.Follower.findOne({
      where: {
        id: req.params.id
      },
      // TODO: update to Organization
      // include: [db.Author]
    }).then(function(dbFollower) {
      res.json(dbFollower);
    });
  });

    // POST route for a new follower
    app.post("/api/followers", function(req, res) {
      db.Follower.create(req.body).then(function(dbFollower) {
        res.json(dbFollower);
      });
    });
  
    // DELETE route for a follower
    app.delete("/api/followers/:id", function(req, res) {
      db.Follower.destroy({
        where: {
          id: req.params.id
        },
      }).then(function(dbFollower) {
        res.json(dbFollower);
      });
    });
  

  // end MAH additions

}