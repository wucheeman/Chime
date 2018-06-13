var orm = require('../config/orm.js');

var model = {
  addTextByOrg: function(organization, message, cb) {
    orm.insertRow('organization_texts', ['organization', 'message'], [`"${organization}"`, `"${message}"`], function(res) {
      cb(res);
    });
  },
  getAllTextsByOrg: function(organization, cb) {
    orm.findWhere('organization_texts', ['message'], 'organization', organization, function(res) {
      cb(res);
    }); 
  },
  getSubscribers: function(organization, cb) {
    orm.leftJoinSelect(['follower', 'phone'], 'organizations_followed', 'followers', `organizations_followed.follower = followers.username`,`organization = "${organization}"`, function(res) {
      cb(res);
    });
  },
  getSubscriptionMessages: function(follower, cb) {
    orm.leftJoinSelect(['follower', 'organizations_followed.organization', 'message'], 'organizations_followed', 'organization_texts',  'organization_texts.organization = organizations_followed.organization', `follower = "${follower}"`, function(res) {
      cb(res);
    });
  },
  subscribe: function(organization, follower, cb) {
    orm.insertRow('organizations_followed', ['organization', 'follower'], [`"${organization}"`, `"${follower}"`], function(res) {
      cb(res);
    });
  },
  unsubscribe: function(organization, follower, cb) {
    orm.deleteRow('organizations_followed', 'organization', `"${organization}"`, 'follower', `"${follower}"`, function(res) {
      cb(res);
    });
  },
  displayOrganizations: function(cb) {
    orm.selectAll('organizations', ['username'], function(res) {
      cb(res);
    });
  },
  getUserInfo: function(username, colArr, cb) {
    orm.findWhere('followers', colArr, 'username', username, function(res) {
      cb(res);
    });
  },
  getOrgInfo: function(username, colArr, cb) {
    orm.findWhere('organizations', colArr, 'username', username, function(res) {
      cb(res);
    });
  }
}

module.exports = model;