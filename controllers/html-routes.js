module.exports = function(app) {
  app.get('/', function(req, res) {
    res.redirect('/login');
  });

  app.get('/login', function(req, res) {
    res.render('login');
  });

  app.post('/login', function(req, res) {
    // validate
    var user = req.body.user;
    res.status(200).send('Logged in');
  });

  app.get('/user/:username', function(req, res) {
    res.render('home', {user: req.params.username});
  });
}
