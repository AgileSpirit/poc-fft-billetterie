var app = app || {};

(function () {

  'use strict';

  app.ProductCollection = Backbone.Collection.extend({

    model: app.Product,
    url: '/assets/products.json',

    initialize: function () {
      console.log("initialise la collection de products");
    }
  });


})();

