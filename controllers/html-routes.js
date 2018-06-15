var model = require('../models/model.js');
var moment = require('moment-timezone');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.redirect('/login');
  });

  app.get('/login', function(req, res) {
    res.render('login');
  });

  app.post('/login', function(req, res) {
    // validate
    var entity = req.body.entity;
    var sqlEntity = '';
    if (entity === 'user') {
      sqlEntity += 'followers';
    }
    else if (entity === 'org') {
      sqlEntity += 'organizations';
    }
    var username = req.body.username;
    var isUser = false;
    model.getUsernamesFromTable(sqlEntity, data => {
      data.forEach(point => {
        if (username === point.username) {
          isUser = true;
        }
      });
      //console.log(data);
      if (isUser) {
        res.status(200).send(`${entity}/${username}`);
      }
      else {
        res.status(404).send(false);
      }
    });
  });

  app.get('/user/:username', function(req, res) {
    model.getUserInfo(req.params.username, userTitle => {
      var hbsObject = {user: userTitle[0].title, messages: [], subs: []};
      model.getSubscriptionMessages(req.params.username, data => {
        data.forEach(point => {
          model.getOrgInfo(point.organization, orgTitle => {
            hbsObject.messages.push({
            sub: orgTitle[0].title,
            message: point.message || '',
            datetime: moment.tz(point.createdAt, 'America/New_York').format("HH:mm:ss MM-DD-YYYY")
            });
          });
        });
        
        model.getSubscriptions(req.params.username, subs => {
          subs.forEach(org => {
            hbsObject.subs.push({
              sub: org.title
            });
          });
          res.render('user-home', hbsObject);
          //console.log(data);
          //console.log(hbsObject);
        });
      });
    });
  });

  app.get('/user/:username/browse', function(req, res) {
    // db call to display available companies to follow
    model.displayOrganizations(orgData => {
      model.getSubscriptions(req.params.username, subData => {
        var hbsObject = {orgs: []};
        var subscribed = [];
        subData.forEach(sub => {
          subscribed.push(sub.title);
        });
        orgData.forEach(point => { 
          if (!subscribed.includes(point.title)) {
            hbsObject.orgs.push({title: point.title, username: point.username, subbed: false, text: "Subscribe"});
          }
          else {
            hbsObject.orgs.push({title: point.title, username: point.username, subbed: true, text: "Subscribed"});
          }
        });
        res.render('user-browse', hbsObject);
      });
    });
  });

  app.get('/org/:username', function(req, res) {
    // db call to collect text logs
    model.getOrgInfo(req.params.username, name => {
      var hbsObject = {org: name[0].title, messages: []}
      model.getAllTextsByOrg(req.params.username, data => {
        data.forEach(point => {
          hbsObject.messages.push({message: point.message, datetime: moment.tz(point.createdAt, 'America/New_York').format("HH:mm:ss MM-DD-YYYY")});
        });
        res.render('org-home', hbsObject);
      });
    });  
  });
}
