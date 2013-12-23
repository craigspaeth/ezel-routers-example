var Backbone = require('backbone')
  , $ = Backbone.$ = require('components-jquery')
  , Commits = require('../../collections/commits.js')
  , partial = require('./templates/partial.jade');

module.exports.CommitsView = CommitsView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.html(partial({ commits: this.collection.models }));
  },

  events: {
    'change .search-input': 'changeRepo'
  },

  changeRepo: function(e) {
    this.collection.repo = $(e.target).val();
    this.collection.fetch();
  }
});

module.exports.CommitsRouter = CommitsRouter = Backbone.Router.extend({

  routes: {
    'commits': 'index'
  },

  index: function() {
    console.log('fetch commits list and render');
    if (!this.view) {
      this.view = new CommitsView({
        el: $('body'),
        collection: new Commits([], { owner: 'artsy', repo: 'flare' })
      });
    }
    this.view.collection.fetch();
  }
});