var model = require('../models/model.js');
// Temporary data
const orgs = [{name: 'Festival'}, {name: 'Library'}, {name: 'Park'}, {name: 'Baseball Field'}];
const subs = [{name: 'Festival'}, {name: 'Baseball'}];
const logs = [
  {
    org: 'Festival',
    message: 'World food fair',
    date: '6/16/18'
  },
  {
    org: 'Baseball',
    message: 'Game tonight',
    date: '6/10/18'
  }
];
const companyLog = [
  {
    message: 'Thank you for following us',
    date: '6/10/18'
  }
];

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
    var username = req.body.username;
    res.status(200).send(`${entity}/${username}`);
  });

  app.get('/user/:username', function(req, res) {
    model.getSubscriptionMessages(req.params.username, data => {
      var hbsObject = {user: req.params.username, messages: [], subs: []};
      data.forEach(point => {
        hbsObject.messages.push({
        sub: point.organization,
        message: point.message || ''
        });
      });
      
      model.getSubscriptions(req.params.username, subs => {
        subs.forEach(org => {
          hbsObject.subs.push({
            sub: org.organization
          });
        });
        res.render('user-home', hbsObject);
        console.log(data);
        console.log(hbsObject);
      });
    });
  });

  app.get('/user/:username/browse', function(req, res) {
    // db call to display available companies to follow
    model.displayOrganizations(req.params.username, orgData => {
      model.getSubscriptions(req.params.username, subData => {
        var hbsObject = {orgs: []};
        var subscribed = [];
        subData.forEach(sub => {
          subscribed.push(sub.organization);
        });
        orgData.forEach(point => { 
          if (!subscribed.includes(point.username)) {
            hbsObject.orgs.push({username: point.username, subbed: false, text: "Subscribe"});
          }
          else {
            hbsObject.orgs.push({username: point.username, subbed: true, text: "Subscribed"});
          }
        });
        res.render('user-browse', hbsObject);
      });
    });
  });

  app.get('/org/:username', function(req, res) {
    // db call to collect text logs
    model.getAllTextsByOrg(req.params.username, data => {
      var hbsObject = {org: req.params.username, messages: []}
      data.forEach(point => {
        hbsObject.messages.push({message: point.message});
      });
      res.render('org-home', hbsObject);
    });  
  });
}
