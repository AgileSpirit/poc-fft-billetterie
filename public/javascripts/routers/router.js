/*global Backbone */
var app = app || {};

(function () {
  'use strict';

  var AppRouter = Backbone.Router.extend({
    routes: {
    }

  });

  app.routers.AppRouter = new AppRouter();
  Backbone.history.start();
})();