var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 8080;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));

// Use logger for testing routes

var logger = function(req, res, next) {
  console.log(req.method + ' ' + req.path + ' ' + JSON.stringify(req.body));
  next();
}
app.use(logger);


require("./controllers/routes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});