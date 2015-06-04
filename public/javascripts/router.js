var app = app || {};

(function () {

  'use strict';

  app.Router = Backbone.Router.extend({

    routes: {
    }

  });

  new app.Router();
  Backbone.history.start();

})();

