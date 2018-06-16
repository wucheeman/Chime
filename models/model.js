var orm = require('../config/orm.js');

var model = {
  addTextByOrg: function(organization, message, dated, cb) {
    orm.insertRow('organization_texts', ['organization', 'message', 'dated'], [`"${organization}"`, `"${message}"`, `"${dated}"`], function(res) {
      cb(res);
    });
  },
  getAllTextsByOrg: function(organization, cb) {
    orm.findWhereOrderBy('organization_texts', ['message', 'dated'], 'organization', organization, 'dated', function(res) {
      cb(res);
    }); 
  },
  getSubscriptions: function(follower, cb) {
    orm.leftJoinSelect(['title'], 'organizations', 'organizations_followed', `organizations_followed.organization = organizations.username`, `follower = "${follower}"`, function(res) {
      cb(res);
    });
  },
  getFollowers: function(organization, cb) {
    orm.leftJoinSelect(['follower', 'phone'], 'organizations_followed', 'followers', `organizations_followed.follower = followers.username`,`organization = "${organization}"`, function(res) {
      cb(res);
    });
  },
  getSubscriptionMessages: function(follower, cb) {
    orm.leftJoinSelectOrderBy(['follower', 'organizations_followed.organization', 'message', 'dated'], 'organization_texts', 'organizations_followed',  'organization_texts.organization = organizations_followed.organization', `follower = "${follower}"`, 'dated', function(res) {
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
    orm.selectAll('organizations', ['username', 'title'], function(res) {
      cb(res);
    });
  },
  getUserInfo: function(username, cb) {
    orm.findWhere('followers', ['phone', 'title'], 'username', username, function(res) {
      cb(res);
    });
  },
  getOrgInfo: function(username, cb) {
    orm.findWhere('organizations', ['phone', 'title'], 'username', username, function(res) {
      cb(res);
    });
  },
  getUsernamesFromTable: function(entity, cb) {
    orm.selectAll(entity, ['username'], function(res) {
      cb(res);
    });
  },
  orgTitletoUsername: function(title, cb) {
    orm.findWhere('organizations', ['username'], 'title', title, function(res) {
      cb(res);
    });
  }
}

module.exports = model;