// 
// The express app for the list of commits for an Artsy repo.
// 

var express = require('express'),
    Commits = require('../../collections/commits.js');

var app = module.exports = express();

app.set('views', __dirname + '/templates');
app.set('view engine', 'jade');

app.get('/commits', function(req, res, next) {
  new Commits([], { owner: 'artsy', repo: 'flare' }).fetch({
    success: function(commits) {
      res.render('index', { commits: commits.models });
    },
    error: function(m, err) { next(err.text); }
  });
});