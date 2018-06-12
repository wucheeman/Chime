var orm = require('../config/orm.js');

var model = {
  addTextByOrg: function(organization, message, cb) {
    orm.insertRow('organization_texts', ['organization', 'message'], [organization, message], function(res) {
      cb(res);
    });
  },
  getAllTextsByOrg: function(organization, cb) {
    orm.findAll('organization_texts', 'organization', organization, function(res) {
      cb(res);
    }); 
  },
  getSubscribers: function(organization, cb) {
    orm.leftJoinChained(['follower', 'phone'], 'organizations_followed', 'followers', `organization=${organization}`, `organizations_followed.follower = followers.username`, function(res) {
      cb(res);
    });
  },
  getSubscriptionMessages: function(follower, cb) {
    orm.leftJoinSelect(['follower', 'organization', 'message'], 'organization_texts', 'organizations_followed', `follower = ${follower}`, function(res) {
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