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
    // db call to collect text logs
    res.render('user-home', {user: req.params.username});
  });

  app.get('/user/:username/browse', function(req, res) {
    // db call to display available companies to follow
    res.render('user-browse');
  });

  app.get('/org/:username', function(req, res) {
    // db call to collect text logs
    res.render('org-home', {org: req.params.username});
  });
}
