var htmlRoutes = require('./html-routes.js');
var apiRoutes = require('./api-routes.js');
// require other route files here 

module.exports = function(app) {
  htmlRoutes(app);
  apiRoutes(app);
}