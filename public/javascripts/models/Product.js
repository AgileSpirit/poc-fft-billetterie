var app = app || {};

(function () {

  'use strict';

  app.Product = Backbone.Model.extend({

    defaults: {
      name: null,
      description: null,
      price: null
    }

  });

})();