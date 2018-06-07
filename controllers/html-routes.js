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
    res.render('user-home', {user: req.params.username});
  });

  app.get('/org/:username', function(req, res) {
    res.render('org-home', {org: req.params.username});
  });
}
