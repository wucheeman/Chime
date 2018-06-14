var sendSMS = require('../twilio/send-sms.js');

var model = require('../models/model.js');

module.exports = function(app) {
  app.post('/api/:entity/:username/login', function(req, res) {
    // create account
  });

  app.delete('/api/:entity/:username/login', function(req, res) {
    // delete account
  });


  app.post('/api/org/:username/texts', function(req, res) {
    model.getOrgInfo(req.params.username, number => {
      model.addTextByOrg(req.params.username, req.body.message, data => {
        model.getFollowers(req.params.username, contacts => {
          contacts.forEach(function(contact) {
            sendSMS(`From ${number[0].title}: ` + req.body.message, number[0].phone, contact.phone);
          });
          console.log(contacts);
        });
        res.status(200).json(data);
      });
    });
  });

  // app.delete('/api/org/:username/texts/:id', function(req, res) {
  //   // org wants to delete mistake message
  //   // org wants to get rid of old messages
  //   // needs timestamp

  // });


  app.post('/api/user/:username/following', function(req, res) {
    model.subscribe(req.body.name,req.params.username, data => {
      console.log(data);
      res.status(200).json(data);
    });
  });

  app.delete('/api/user/:username/following/:org', function(req, res) {
    model.unsubscribe(req.params.org, req.params.username, data => {
      console.log(data);
      res.status(200).json(data);
    });
  });


  // app.post('/api/:entity/:username/info', function(req, res) {
  //   // add new info such as image link
  // });

  // app.put('/api/:entity/:username/info', function(req, res) {
  //   // edit a bio
  // });

  // app.delete('/api/:entity/:username/info', function(req, res) {
  //   // delete profile content
  // });
/*
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

  // get route for organization and all its texts
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

  // PUT route for updating an organization
  app.put("/api/organizations", function(req, res) {
    db.Organization.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbOrganization) {
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

  // PUT route for updating follower
  app.put("/api/followers", function(req, res) {
    db.Follower.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbFollower) {
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
  
  // GET route for getting all of the texts
  app.get("/api/texts", function(req, res) {
    var query = {};
    // if (req.query.author_id) {
    //   query.AuthorId = req.query.author_id;
    // }
    db.TextMsg.findAll({
      where: query,
      include: [db.Organization]
    }).then(function(dbTextMsg) {
      res.json(dbTextMsg);
    });
  });

  // Get route for retrieving a single text
  app.get("/api/texts/:id", function(req, res) {
    db.TextMsg.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Organization]
    }).then(function(dbTextMsg) {
      res.json(dbTextMsg);
    });
  });

  // POST route for saving a new text
  // NOT VERY DRY!
  app.post("/api/texts", function(req, res) {
    const body = req.body.body;
    let fromNumber = '';
    followerArray = [];
    let followerString = '';
    // get organization ID from post
    orgID = req.body.OrganizationId;

    // use ID to get organization's record from DB
    db.Organization.findOne({
      where: {
        id: orgID
      },
      include: [db.TextMsg]
    }).then(function(dbOrganization) {
      fromNumber = dbOrganization.dataValues.phone_number;
      followerString = dbOrganization.dataValues.followers;
      followerArray = followerString.split(',');
      
      followerArray.forEach(followerID => {
        db.Follower.findOne({
          where: {
            id: followerID
          },
        }).then(function(dbFollower) {
            let toNumber = dbFollower.dataValues.phone_number;
            sendSMS(body, fromNumber, toNumber);
        });
      })
    });
    db.TextMsg.create(req.body).then(function(dbTextMsg) {
      res.json(dbTextMsg);
    });
  });

    // DELETE route for a text
    app.delete("/api/texts/:id", function(req, res) {
      db.TextMsg.destroy({
        where: {
          id: req.params.id
        },
      }).then(function(dbTextMsg) {
        res.json(dbTextMsg);
      });
    });

    app.get("/api/test", function(req, res) {
      console.log('got here');
      res.send('GET request to api/test');
    });

    app.delete("/api/test/", function (req, res) {
      // Sending parameters causes this function to blow up
      //const id = req.params.id;
      //console.log(req);
      res.send('delete request gets here');
    });
    
  // end MAH additions
  */

}