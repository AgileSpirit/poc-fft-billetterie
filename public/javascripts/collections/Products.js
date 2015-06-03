var app = app || {};

(function () {
  'use strict';

  var Products = Backbone.Collection.extend({
    model: app.models.Product,
    url: '/products'
  });

  app.products = new Products();

})();

