var Backbone = require('backbone'),
    fetchCommit = require('../../collections/commits.js').fetchCommit,
    sd = require('sharify').data,
    partial = require('./templates/partial.jade');

module.exports.CommitRouter = CommitRouter = Backbone.Router.extend({

  routes: {
    'commit/:owner/:repo/:sha': 'index'
  },

  index: function(owner, repo, sha) {
    console.log('fetch single commit and render');
    fetchCommit(owner, repo, sha, function(err, commit){
      if(err) return alert(err);
      $('body').html(partial({ commit: commit }));
    });
  }
});