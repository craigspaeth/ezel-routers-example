// 
// Glues together backbone routers from each app and starts Backbone history.
// 

var Backbone = require('backbone'),
    CommitsRouter = require('../../apps/commits/client.js').CommitsRouter,
    CommitRouter = require('../../apps/commit/client.js').CommitRouter;

window.Backbone = Backbone;

$(function() {
  new CommitsRouter;
  new CommitRouter;
  Backbone.history.start({ pushState: true });
});

// Hijack links to use push state
$(document).on('click', 'a', function(e) {
  e.preventDefault();
  var href = $(this).attr('href').replace(/^\//, '');
  // Add a little fade-in-fade-out action to clarify it's on the client
  $('body').animate({ opacity: 0 }, 'fast', function() {
    Backbone.history.navigate(href, { trigger: true });
    $('body').animate({ opacity: 1 }, 'fast');
  });
});
