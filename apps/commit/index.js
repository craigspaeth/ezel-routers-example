// 
// The express app for the detail page of a commit.
// 

var express = require('express')
  , fetchCommit = require('../../collections/commits.js').fetchCommit;

var app = module.exports = express();

app.set('views', __dirname + '/templates');
app.set('view engine', 'jade');

app.get('/commit/:owner/:repo/:sha', function(req, res, next) {
  fetchCommit(req.params.owner, req.params.repo, req.params.sha, function(err, commit){
    if(err) return next(err);
    res.render('index', { commit: commit });
  });
});