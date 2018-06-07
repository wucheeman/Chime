var express = require('express');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var exphbs = require('express-handlebars');
var models = require("./models");

var app = express();
var PORT = process.env.PORT || 8080;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));

// Use logger for testing routes
/*
var logger = function(req, res, next) {
  console.log(req.method + ' ' + req.path + ' ' + JSON.stringify(req.body));
  next();
}
app.use(logger);
*/

require("./controllers/routes.js")(app);

//Sync Database
models.sequelize.sync().then(function() {
  console.log('Nice! Database looks fine')
}).catch(function(err) {
  console.log(err, "Something went wrong with the Database Update!")
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});